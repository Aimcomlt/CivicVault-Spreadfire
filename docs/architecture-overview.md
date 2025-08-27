# Architecture Overview

Spreadfire is organized as a TypeScript monorepo with two primary packages managed through npm workspaces.

## Packages

- **game-core**: Contains the simulation engine and Redux slices that model combat, economy, factions, and policy. It exposes the `SimulationEngine` class along with helper functions for turn advancement and resource management.
- **game-client**: A React front end built with Vite. The client consumes `game-core` and renders game state through a Redux store.

## Data Flow

1. `SimulationEngine` advances turns and updates the core simulation state.
2. Redux slices expose actions and reducers for combat, economy, factions, and policy.
3. The client subscribes to these slices to display the evolving state and dispatch player actions.

This modular design allows the core logic to be tested independently from the user interface while enabling the client to reuse the simulation library.

