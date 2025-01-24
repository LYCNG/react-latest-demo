import {
  colorSchemeDarkBlue,
  colorSchemeLightCold,
  themeAlpine,
  themeBalham,
  themeQuartz,
} from "ag-grid-community";

export const gridThemes = [
  { id: "themeQuartz", theme: themeQuartz.withPart(colorSchemeLightCold) },
  { id: "themeBalham", theme: themeBalham.withPart(colorSchemeLightCold) },
  { id: "themeAlpine", theme: themeAlpine.withPart(colorSchemeLightCold) },
];
export const gridThemesDark = [
  { id: "themeQuartz", theme: themeQuartz.withPart(colorSchemeDarkBlue) },
  { id: "themeBalham", theme: themeBalham.withPart(colorSchemeDarkBlue) },
  { id: "themeAlpine", theme: themeAlpine.withPart(colorSchemeDarkBlue) },
];
