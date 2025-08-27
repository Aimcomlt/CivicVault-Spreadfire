# Game Mechanics

The Spreadfire simulation is a turn-based strategy model that tracks economic growth and combat outcomes.

## Turn Structure

Each turn represents a fixed amount of simulated time. During a turn the engine:

1. Produces resources, adding a set amount of credits to the player's economy.
2. Resolves combat, incrementing a combat score to represent engagements.

## Systems

- **Economy**: Managed through the `economySlice`; it governs credit production and future economic rules.
- **Combat**: Handled by the `combatSlice`; future versions will expand on unit types and battle resolution.
- **Factions**: The `factionsSlice` tracks relationships and can be extended for diplomacy or alliances.
- **Policy**: Controlled by the `policySlice`, allowing rule changes that modify other systems.

These mechanics provide a foundation that can evolve into more complex strategic gameplay.

