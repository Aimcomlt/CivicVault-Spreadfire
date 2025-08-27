import { useAppSelector } from '../store';

export default function HUD() {
  const score = useAppSelector(state => state.combat.score);
  const credits = useAppSelector(state => state.economy.credits);

  return (
    <div>
      <p>Score: {score}</p>
      <p>Credits: {credits}</p>
    </div>
  );
}
