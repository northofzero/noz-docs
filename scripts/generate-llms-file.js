import path from "path";
import fs from "fs";

export default async function llmsTxtPlugin(context) {
  return {
    name: "llms-txt-plugin",
    loadContent: async () => {
      const { siteDir } = context;
      const contentDir = path.join(siteDir, "docs");
      const allMd = [];

      // recursive function to get all markdown files
      const getMdFiles = async (dir) => {
        const entries = await fs.promises.readdir(dir, {
          withFileTypes: true,
        });

        for (const entry of entries) {
          const fullPath = path.join(dir, entry.name);
          if (entry.isDirectory()) {
            await getMdFiles(fullPath);
          } else if (entry.name.endsWith(".md")) {
            const content = await fs.promises.readFile(fullPath, "utf8");
            allMd.push(content);
          }
        }
      };

      await getMdFiles(contentDir);
      return { allMd };
    },
    postBuild: async ({ content, routes, outDir }) => {
      /** @type {{ allMd: string[] }} */
      // @ts-ignore
      const { allMd } = content;

      // Write concatenated markdown content
      const concatenatedPath = path.join(outDir, "llms-full.txt");
      await fs.promises.writeFile(concatenatedPath, allMd.join("\n\n---\n\n"));

      // we need to dig down several layers:
      // find PluginRouteConfig marked by plugin.name === "docusaurus-plugin-content-docs"
      const docsPluginRouteConfig = routes.filter(
        (route) => route.plugin.name === "docusaurus-plugin-content-docs"
      )[0];

      // docsPluginRouteConfig has a routes property has a record with the path "/" that contains all docs routes.
      const allDocsRouteConfig = docsPluginRouteConfig.routes?.filter(
        (route) => route.path === "/"
      )[0];

      // A little type checking first
      if (!allDocsRouteConfig?.props?.version) {
        return;
      }

      // this route config has a `props` property that contains the current documentation.
      /** @type {Record<string, unknown>} */
      const currentVersionDocsRoutes =
        // @ts-ignore
        allDocsRouteConfig.props.version.docs;

      // for every single docs route we now parse a path (which is the key) and a title
      const docsRecords = Object.entries(currentVersionDocsRoutes).map(
        ([path, record]) => {
          // @ts-ignore
          return `- [${record.title}](${path}): ${record.description}`;
        }
      );

      // Build up llms.txt file
      const llmsTxt = `# ${
        context.siteConfig.title
      }\n\n## Content\n\n${docsRecords.join("\n")}`;

      // Write llms.txt file
      const llmsTxtPath = path.join(outDir, "llms.txt");
      try {
        fs.writeFileSync(llmsTxtPath, llmsTxt);
      } catch (err) {
        throw err;
      }
    },
  };
}
