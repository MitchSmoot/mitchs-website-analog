import { createGlobPatternsForDependencies } from "@nx/angular/tailwind";
import { join } from "path";

/** @type {import("tailwindcss").Config} */
export const darkMode = 'class';
export const content = ["./index.html",
  join(__dirname, "src/**/!(*.stories|*.spec).{ts,html}"),
  ...createGlobPatternsForDependencies(__dirname)
];
export const theme = {
  extend: {}
};