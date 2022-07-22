import React from "react";
import Mermaid from "react-mermaid2";

const MermaidExample = () => {
  return (
    <Mermaid
      chart={`
        graph TD;
        A-->B;
        A-->C;
        B-->D;
        C-->D;
        `}
    />
  );
};

export default MermaidExample;
