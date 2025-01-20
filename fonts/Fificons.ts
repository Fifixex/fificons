export type FificonsId =
  | "zig"
  | "vite"
  | "vercel"
  | "typescript"
  | "tailwind"
  | "svelte"
  | "rust"
  | "pnpm"
  | "pnpm-lock"
  | "node"
  | "next"
  | "markdown"
  | "javascript"
  | "html"
  | "git"
  | "dotenv"
  | "deno"
  | "css"
  | "cargo"
  | "cargo-lock"
  | "bun"
  | "bun-lock"
  | "bash"
  | "astro";

export type FificonsKey =
  | "Zig"
  | "Vite"
  | "Vercel"
  | "Typescript"
  | "Tailwind"
  | "Svelte"
  | "Rust"
  | "Pnpm"
  | "PnpmLock"
  | "Node"
  | "Next"
  | "Markdown"
  | "Javascript"
  | "Html"
  | "Git"
  | "Dotenv"
  | "Deno"
  | "Css"
  | "Cargo"
  | "CargoLock"
  | "Bun"
  | "BunLock"
  | "Bash"
  | "Astro";

export enum Fificons {
  Zig = "zig",
  Vite = "vite",
  Vercel = "vercel",
  Typescript = "typescript",
  Tailwind = "tailwind",
  Svelte = "svelte",
  Rust = "rust",
  Pnpm = "pnpm",
  PnpmLock = "pnpm-lock",
  Node = "node",
  Next = "next",
  Markdown = "markdown",
  Javascript = "javascript",
  Html = "html",
  Git = "git",
  Dotenv = "dotenv",
  Deno = "deno",
  Css = "css",
  Cargo = "cargo",
  CargoLock = "cargo-lock",
  Bun = "bun",
  BunLock = "bun-lock",
  Bash = "bash",
  Astro = "astro",
}

export const FIFICONS_CODEPOINTS: { [key in Fificons]: string } = {
  [Fificons.Zig]: "61697",
  [Fificons.Vite]: "61698",
  [Fificons.Vercel]: "61699",
  [Fificons.Typescript]: "61700",
  [Fificons.Tailwind]: "61701",
  [Fificons.Svelte]: "61702",
  [Fificons.Rust]: "61703",
  [Fificons.Pnpm]: "61704",
  [Fificons.PnpmLock]: "61705",
  [Fificons.Node]: "61706",
  [Fificons.Next]: "61707",
  [Fificons.Markdown]: "61708",
  [Fificons.Javascript]: "61709",
  [Fificons.Html]: "61710",
  [Fificons.Git]: "61711",
  [Fificons.Dotenv]: "61712",
  [Fificons.Deno]: "61713",
  [Fificons.Css]: "61714",
  [Fificons.Cargo]: "61715",
  [Fificons.CargoLock]: "61716",
  [Fificons.Bun]: "61717",
  [Fificons.BunLock]: "61718",
  [Fificons.Bash]: "61719",
  [Fificons.Astro]: "61720",
};
