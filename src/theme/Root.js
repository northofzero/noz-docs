import React from "react";
import ElevenLabsChat from "../components/ElevenLabsChat";
import Head from "@docusaurus/Head";

// Default implementation, that you can customize
export default function Root({ children }) {
  return (
    <>
      {children}
      <ElevenLabsChat />
    </>
  );
}
