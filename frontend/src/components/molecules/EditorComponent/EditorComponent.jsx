import Editor from "@monaco-editor/react";
import { useState, useEffect } from "react";
import { EditorButton } from "../../atoms/EditorButton/EditorButton";

export const EditorComponent = () => {
  const [editorState, setEditorState] = useState({
    theme: null,
  });

  async function downloadTheme() {
    const response = await fetch("/Dracula.json");
    const data = await response.json();
    setEditorState({ ...editorState, theme: data });
  }

  function handleEditorTheme(editor, monaco) {
    monaco.editor.defineTheme("dracula", editorState.theme);
    monaco.editor.setTheme("dracula");
  }
  useEffect(() => {
    downloadTheme();
  }, []);
  return (
    <>
      { editorState.theme &&
        <Editor
        height={"80vh"}
        width={"100%"}
        defaultLanguage="javascript"
        defaultValue="//Welcome to Playground"
        option={{
          fontSize: 20,
          fontFamily: "monospace",
          theme: "dark",
        }}
        onMount={handleEditorTheme}
      />
    }
   
    </>
    
  );
};
