import React from "react";
import ElevenLabsChat from "../components/ElevenLabsChat";
import Head from "@docusaurus/Head";

// Default implementation, that you can customize
export default function Root({ children }) {
  return (
    <>
      <Head>
        <meta property="og:image" content="/img/social-card.png" />
      </Head>
      {children}
      <ElevenLabsChat />
    </>
  );
}
