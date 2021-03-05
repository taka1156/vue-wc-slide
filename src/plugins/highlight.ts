/* eslint-disable @typescript-eslint/no-var-requires */
const highlight = require("highlight.js/lib/core"); // TODO: @typesがないのでそのうち対応する
import "highlight.js/styles/github-gist.css";

const markdown = require("highlight.js/lib/languages/markdown");
const htmlbars = require("highlight.js/lib/languages/htmlbars");
const css = require("highlight.js/lib/languages/css");
const scss = require("highlight.js/lib/languages/scss");
const javascript = require("highlight.js/lib/languages/javascript");
const nodeRepl = require("highlight.js/lib/languages/node-repl");
const typescript = require("highlight.js/lib/languages/typescript");
const php = require("highlight.js/lib/languages/php");
const phpTemplate = require("highlight.js/lib/languages/php-template");
const ruby = require("highlight.js/lib/languages/ruby");
const python = require("highlight.js/lib/languages/python");
const clang = require("highlight.js/lib/languages/c");
const cpp = require("highlight.js/lib/languages/cpp");
const java = require("highlight.js/lib/languages/java");
const csharp = require("highlight.js/lib/languages/csharp");
const go = require("highlight.js/lib/languages/go");
const dart = require("highlight.js/lib/languages/dart");
const swift = require("highlight.js/lib/languages/swift");
const kotlin = require("highlight.js/lib/languages/kotlin");
const sql = require("highlight.js/lib/languages/sql");
const shell = require("highlight.js/lib/languages/shell");
const makefile = require("highlight.js/lib/languages/makefile");
const nginx = require("highlight.js/lib/languages/nginx");
const dockerfile = require("highlight.js/lib/languages/dockerfile");
const yaml = require("highlight.js/lib/languages/yaml");
const json = require("highlight.js/lib/languages/json");
const xml = require("highlight.js/lib/languages/xml");

// マークアップ、 スタイルシート
highlight.registerLanguage("markdown", markdown);
highlight.registerLanguage("htmlbars", htmlbars);
highlight.registerLanguage("css", css);
highlight.registerLanguage("scss", scss);
// プログラミング言語
// javascript系(node, alt)
highlight.registerLanguage("javascript", javascript);
highlight.registerLanguage("node-repl", nodeRepl);
highlight.registerLanguage("typescript", typescript);
// 汎用言語?
highlight.registerLanguage("c", clang);
highlight.registerLanguage("cpp", cpp);
highlight.registerLanguage("csharp", csharp);
highlight.registerLanguage("java", java);
highlight.registerLanguage("go", go);
// LL
highlight.registerLanguage("php", php);
highlight.registerLanguage("php-template", phpTemplate);
highlight.registerLanguage("ruby", ruby);
highlight.registerLanguage("python", python);
// スマートフォンアプリ
highlight.registerLanguage("dart", dart);
highlight.registerLanguage("swift", swift);
highlight.registerLanguage("kotlin", kotlin);
// sql
highlight.registerLanguage("sql", sql);
// その他(setting file?)
highlight.registerLanguage("shell", shell);
highlight.registerLanguage("makefile", makefile);
highlight.registerLanguage("nginx", nginx);
highlight.registerLanguage("dockerfile", dockerfile);
highlight.registerLanguage("yaml", yaml);
highlight.registerLanguage("json", json);
highlight.registerLanguage("xml", xml);

export { highlight };
