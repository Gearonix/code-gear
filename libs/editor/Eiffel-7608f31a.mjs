const o = "vs", n = !0, t = [
  {
    background: "FFFFFF",
    token: ""
  },
  {
    foreground: "00b418",
    token: "comment"
  },
  {
    foreground: "0206ff",
    fontStyle: "italic",
    token: "variable"
  },
  {
    foreground: "0100b6",
    fontStyle: "bold",
    token: "keyword"
  },
  {
    foreground: "cd0000",
    fontStyle: "italic",
    token: "constant.numeric"
  },
  {
    foreground: "c5060b",
    fontStyle: "italic",
    token: "constant"
  },
  {
    foreground: "585cf6",
    fontStyle: "italic",
    token: "constant.language"
  },
  {
    foreground: "d80800",
    token: "string"
  },
  {
    foreground: "26b31a",
    token: "constant.character.escape"
  },
  {
    foreground: "26b31a",
    token: "string source"
  },
  {
    foreground: "1a921c",
    token: "meta.preprocessor"
  },
  {
    foreground: "0c450d",
    fontStyle: "bold",
    token: "keyword.control.import"
  },
  {
    foreground: "0000a2",
    fontStyle: "bold",
    token: "entity.name.function"
  },
  {
    foreground: "0000a2",
    fontStyle: "bold",
    token: "keyword.other.name-of-parameter.objc"
  },
  {
    fontStyle: "italic",
    token: "entity.name.type"
  },
  {
    fontStyle: "italic",
    token: "entity.other.inherited-class"
  },
  {
    fontStyle: "italic",
    token: "variable.parameter"
  },
  {
    foreground: "70727e",
    token: "storage.type.method"
  },
  {
    fontStyle: "italic",
    token: "meta.section entity.name.section"
  },
  {
    fontStyle: "italic",
    token: "declaration.section entity.name.section"
  },
  {
    foreground: "3c4c72",
    fontStyle: "bold",
    token: "support.function"
  },
  {
    foreground: "6d79de",
    fontStyle: "bold",
    token: "support.class"
  },
  {
    foreground: "6d79de",
    fontStyle: "bold",
    token: "support.type"
  },
  {
    foreground: "06960e",
    fontStyle: "bold",
    token: "support.constant"
  },
  {
    foreground: "21439c",
    fontStyle: "bold",
    token: "support.variable"
  },
  {
    foreground: "687687",
    token: "keyword.operator.js"
  },
  {
    foreground: "ffffff",
    background: "990000",
    token: "invalid"
  },
  {
    background: "ffd0d0",
    token: "invalid.deprecated.trailing-whitespace"
  },
  {
    background: "427ff530",
    token: "text source"
  },
  {
    background: "427ff530",
    token: "string.unquoted"
  },
  {
    foreground: "68685b",
    token: "meta.xml-processing"
  },
  {
    foreground: "68685b",
    token: "declaration.xml-processing"
  },
  {
    foreground: "888888",
    token: "meta.doctype"
  },
  {
    foreground: "888888",
    token: "declaration.doctype"
  },
  {
    fontStyle: "italic",
    token: "meta.doctype.DTD"
  },
  {
    fontStyle: "italic",
    token: "declaration.doctype.DTD"
  },
  {
    foreground: "1c02ff",
    token: "meta.tag"
  },
  {
    foreground: "1c02ff",
    token: "declaration.tag"
  },
  {
    fontStyle: "bold",
    token: "entity.name.tag"
  },
  {
    fontStyle: "italic",
    token: "entity.other.attribute-name"
  },
  {
    foreground: "0c07ff",
    fontStyle: "bold",
    token: "markup.heading"
  },
  {
    foreground: "000000",
    fontStyle: "italic",
    token: "markup.quote"
  },
  {
    foreground: "b90690",
    token: "markup.list"
  }
], e = {
  "editor.foreground": "#000000",
  "editor.background": "#FFFFFF",
  "editor.selectionBackground": "#C3DCFF",
  "editor.lineHighlightBackground": "#00000012",
  "editorCursor.foreground": "#000000",
  "editorWhitespace.foreground": "#BFBFBF"
}, r = {
  base: o,
  inherit: !0,
  rules: t,
  colors: e
};
export {
  o as base,
  e as colors,
  r as default,
  n as inherit,
  t as rules
};
