"use client";

import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { css } from "@codemirror/lang-css";

export default function Editor({ lang, code, setCode }) {
  return (
    <CodeMirror
      value={code}
      onChange={(val) => setCode(val)}
      extensions={lang == "js" ? javascript({ jsx: true }) : css()}
      theme="dark"
    />
  );
}
