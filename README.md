# Spreadfire

## Project Goals
Spreadfire is a TypeScript monorepo for building a turn-based strategy simulation. It combines a reusable core library with a React-based game client.

## Package Structure
The repository uses npm workspaces and is organized into two packages:

- **packages/game-core** – simulation engine and Redux slices for combat, economy, factions and policy.
- **packages/game-client** – Vite-powered React front end that consumes the core library.

## Development Scripts
Run package scripts from the repository root with npm's workspace flag (`-w` or `--workspace`).

### Core library
- `npm test -w game-core` – type-check the core library.
- `npm run build -w game-core` – compile TypeScript to `dist/`.

### Client
- `npm test -w game-client` – type-check the client.
- `npm run dev -w game-client` – start the development server.
- `npm run build -w game-client` – build the production bundle.
- `npm run preview -w game-client` – preview the built client locally.

## Running the Client
Install dependencies and launch the development server:

```bash
npm install
npm run dev -w game-client
```

This starts a Vite server with hot reloading.

## Building the Core Library
Compile the core library into JavaScript:

```bash
npm run build -w game-core
```

The compiled files are output to `packages/game-core/dist/`.
