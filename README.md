# CallVibe Docs

This documentation portal is built with Docusaurus.

## Installation

```bash
npm install
```

## Local Development

```bash
npm start
```

This starts a local server with hot reload.

## Build

```bash
npm run build
```

This generates static content in the build directory.

## Serve Build Locally

```bash
npm run serve
```

## Notes

- Content lives under `docs/`
- Sidebar is configured in `sidebars.ts`
- Site config is in `docusaurus.config.ts`
- Global theme and branding live in `src/css/custom.css`
- The homepage and its sections are in `src/pages/` and `src/components/`
- Search is provided offline by `@easyops-cn/docusaurus-search-local` (indexed at build time — run `npm run build && npm run serve` to test it)
