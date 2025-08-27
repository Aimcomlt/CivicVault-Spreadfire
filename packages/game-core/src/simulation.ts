export interface SimulationState {
  /** Current turn counter */
  turn: number;
  /** Amount of credits owned by the player */
  credits: number;
  /** Simple combat score used to track victories */
  combatScore: number;
}

export const INITIAL_STATE: SimulationState = {
  turn: 0,
  credits: 0,
  combatScore: 0
};

/**
 * Produce resources for the current turn. For now this simply grants a fixed
 * number of credits but can be expanded to include more complex economic
 * rules.
 */
export function produceResources(state: SimulationState, amount = 10): number {
  state.credits += amount;
  return amount;
}

/**
 * Resolve combat for the turn. This placeholder implementation increments the
 * combat score each turn to represent ongoing battles.
 */
export function resolveCombat(state: SimulationState, score = 1): number {
  state.combatScore += score;
  return score;
}

export class SimulationEngine {
  private state: SimulationState = { ...INITIAL_STATE };
  private elapsed = 0;
  private readonly turnLength = 1000; // milliseconds per turn

  start() {
    console.log('Simulation started');
  }

  /**
   * Advance the simulation by the given delta time in milliseconds. Whenever a
   * full turn has elapsed we update the internal state to reflect resource
   * production and combat resolution.
   */
  update(delta: number) {
    this.elapsed += delta;

    while (this.elapsed >= this.turnLength) {
      this.elapsed -= this.turnLength;
      this.state.turn += 1;

      // Economy
      produceResources(this.state);

      // Combat
      resolveCombat(this.state);
    }
  }

  getState(): SimulationState {
    return this.state;
  }
}
