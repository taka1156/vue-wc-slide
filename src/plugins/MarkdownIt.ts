/* eslint-disable @typescript-eslint/no-var-requires */
import markdownIt from "markdown-it";
import container from "markdown-it-container";
import emoji from "markdown-it-emoji";
const nl2br = require("markdown-it-br"); // TODO: @typesがないのでそのうち対応する
//const sanitizer = require("markdown-it-sanitizer"); // TODO: @typesがないのでそのうち対応する
const checkbox = require("markdown-it-checkbox"); // TODO: @typesがないのでそのうち対応する
import { highlight as hljs } from "./highlight";

const md = new markdownIt({
  highlight: function(code, lang) {
    return hljs.highlightAuto(code, [lang]).value;
  },
  html: true,
  linkify: true,
  breaks: true,
  typographer: true
})
  .use(nl2br)
  .use(checkbox)
  .use(container, "info")
  .use(container, "success")
  .use(container, "warning")
  .use(container, "danger")
  .use(emoji);

export { md };
