import React from "react";
import ElevenLabsChat from "../components/ElevenLabsChat";
import Head from "@docusaurus/Head";

// Default implementation, that you can customize
export default function Root({ children }) {
  return (
    <>
      <Head>
        <link
          rel="alternate"
          href="/llm.txt"
          type="text/plain"
          title="Plain Text Summary for LLMs"
        />
        <link
          rel="alternate"
          href="/llms-full.txt"
          type="text/plain"
          title="Plain Text Full Content for LLMs"
        />
      </Head>
      {children}
      <ElevenLabsChat />
    </>
  );
}
