import { useEffect } from "react";
import { useHistory } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Home() {
  const history = useHistory();
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    // Redirect to docs page
    history.replace("/docs/intro");
  }, [history]);

  // This component will never actually render anything visible
  // since the redirect happens immediately
  return null;
}
