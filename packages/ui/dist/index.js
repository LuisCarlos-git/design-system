"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Button: () => Button
});
module.exports = __toCommonJS(src_exports);

// src/styles/index.ts
var import_react = require("@stitches/react");

// ../tokens/dist/index.mjs
var colors = {
  quasarPrimary50: "#e6f0ff",
  quasarPrimary100: "#cce0ff",
  quasarPrimary200: "#9ac2fe",
  quasarPrimary300: "#67a3fe",
  quasarPrimary400: "#3585fd",
  quasarPrimary500: "#0e6efd",
  quasarPrimary600: "#0252ca",
  quasarPrimary700: "#013d98",
  quasarPrimary800: "#012965",
  quasarPrimary900: "#001433",
  quasarPrimary950: "#000a19",
  quasarSecondary50: "#eff0f5",
  quasarSecondary100: "#dfe2ec",
  quasarSecondary200: "#bfc5d9",
  quasarSecondary300: "#9fa8c6",
  quasarSecondary400: "#808bb2",
  quasarSecondary500: "#56628f",
  quasarSecondary600: "#4d587f",
  quasarSecondary700: "#394260",
  quasarSecondary800: "#262c40",
  quasarSecondary900: "#131620",
  quasarSecondary950: "#0a0b10",
  quasarSuccess50: "#e9fbf0",
  quasarSuccess200: "#a8f0c2",
  quasarSuccess300: "#7ce9a4",
  quasarSuccess100: "#d3f8e1",
  quasarSuccess400: "#51e186",
  quasarSuccess500: "#22c55e",
  quasarSuccess600: "#1eae53",
  quasarSuccess700: "#16833e",
  quasarSuccess800: "#0f5729",
  quasarSuccess900: "#072c15",
  quasarSuccess950: "#04160a",
  quasarWarning50: "#fef5e7",
  quasarWarning100: "#fdecce",
  quasarWarning200: "#fbd99d",
  quasarWarning300: "#f9c56c",
  quasarWarning400: "#f7b23b",
  quasarWarning500: "#f59f0b",
  quasarWarning600: "#c47f08",
  quasarWarning700: "#935f06",
  quasarWarning800: "#624004",
  quasarWarning900: "#312002",
  quasarWarning950: "#181001",
  quasarDanger50: "#fde8e8",
  quasarDanger100: "#fbd0d0",
  quasarDanger200: "#f7a1a1",
  quasarDanger300: "#f37272",
  quasarDanger400: "#ef4343",
  quasarDanger500: "#ef4444",
  quasarDanger600: "#bc1010",
  quasarDanger700: "#8d0c0c",
  quasarDanger800: "#5e0808",
  quasarDanger900: "#2f0404",
  quasarDanger950: "#170202",
  quasarInfo50: "#eee7fe",
  quasarInfo100: "#dccffc",
  quasarInfo200: "#ba9efa",
  quasarInfo300: "#976ef7",
  quasarInfo400: "#743ef4",
  quasarInfo500: "#8a5cf6",
  quasarInfo600: "#410bc1",
  quasarInfo700: "#310891",
  quasarInfo800: "#210561",
  quasarInfo900: "#100330",
  quasarInfo950: "#080118",
  quasarNeutral50: "#f9fafc",
  quasarNeutral100: "#f3f4f6",
  quasarNeutral200: "#e6e7eb",
  quasarNeutral300: "#d1d4db",
  quasarNeutral400: "#9ca2ae",
  quasarNeutral500: "#6b7280",
  quasarNeutral600: "#4c5564",
  quasarNeutral700: "#384152",
  quasarNeutral800: "#202938",
  quasarNeutral900: "#111828",
  quasarNeutral950: "#0c0c0e"
};
var fontSizes = {
  xs: "0.75rem",
  sm: "0.875rem",
  base: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "3.75rem",
  "7xl": "4.5rem",
  "8xl": "6rem",
  "9xl": "8rem"
};
var radii = {
  none: "0",
  xs: "0.055856913328170776rem",
  sm: "0.15379920601844788rem",
  default: "0.1875rem",
  lg: "0.25rem",
  xl: "0.25650450587272644rem",
  "2xl": "0.3125rem",
  "3xl": "0.3472089469432831rem",
  "4xl": "0.375rem",
  "5xl": "0.3755221962928772rem",
  "6xl": "0.5rem",
  "7xl": "0.6457792520523071rem",
  "8xl": "1.1341552734375rem",
  "9xl": "1.25rem",
  "10xl": "1.3405659198760986rem",
  "11xl": "1.5rem",
  "12xl": "2rem",
  "13xl": "2.292719602584839rem",
  "14xl": "3.125rem",
  "15xl": "5rem",
  "16xl": "5.585691928863525rem",
  full: "9999px"
};

// src/styles/index.ts
var { styled } = (0, import_react.createStitches)({
  theme: {
    colors,
    fontSizes,
    radii
  }
});

// src/index.tsx
var Button = styled("button", {
  width: "200px",
  background: "$quasarInfo400"
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button
});
