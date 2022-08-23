import { useEffect, useRef, useState } from "react";
import ToolBar from "./toolbar/toolbar"
import { marked } from "marked"
import DOMPurify from "dompurify"
marked.setOptions({
  renderer: new marked.Renderer(),
  "baseUrl": null,
  "breaks": false,
  "extensions": null,
  "gfm": true,
  "headerIds": true,
  "headerPrefix": "",
  "highlight": null,
  "langPrefix": "language-",
  "mangle": true,
  "pedantic": false,
  "sanitize": false,
  "sanitizer": null,
  "silent": false,
  "smartLists": false,
  "smartypants": false,
  "tokenizer": null,
  "walkTokens": null,
  "xhtml": false
});

function App() {
  const [textInput, setTextInput] = useState("")
  function handleInput(e) {
    setTextInput(e.target.value)
  }
  const preview = useRef()
  useEffect(() => {
    // console.log()

    preview.current.innerHTML = DOMPurify.sanitize(marked.parse(textInput), { USE_PROFILES: { html: true } })
  }, [textInput])
  return (
    <div className="App">
      <div className="tools">
        <ToolBar />
      </div>
      <textarea value={textInput} onChange={handleInput} autoFocus></textarea>
      <div id="divider"></div>
      <div ref={preview} className="preview"></div>
    </div>
  );
}

export default App;
