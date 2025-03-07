import React from "react";
import type { MediaRendererProps } from "./types.js";

const ModelViewer = /* @__PURE__ */ (() =>
  React.forwardRef<
    HTMLDivElement,
    Pick<MediaRendererProps, "src" | "alt" | "poster" | "style" | "className">
  >(function Model_Viewer({ src, alt, poster, style, className }, ref) {
    console.log("modelviewer unavailable", src);
    return (
      <div style={{ ...style }} className={className} ref={ref}>
        {src && poster ? (
          <img src={poster} alt={alt} />
        ) : null}
      </div>
    );
  }))();

export default ModelViewer;
