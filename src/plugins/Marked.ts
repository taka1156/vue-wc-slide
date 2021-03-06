import marked from "marked";
import { highlight as hljs } from "./highlight";

// highlight.js
marked.setOptions({
  highlight(code, lang) {
    return hljs.highlightAuto(code, [lang]).value;
  },
  breaks: true,
  gfm: true
});

const md = (mdText: string) => {
  return marked(mdText);
};

export { md };
