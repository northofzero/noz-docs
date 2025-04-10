import React from "react";
import ElevenLabsChat from "../components/ElevenLabsChat";

// Default implementation, that you can customize
export default function Root({ children }) {
  return (
    <>
      {children}
      <ElevenLabsChat />
    </>
  );
}
