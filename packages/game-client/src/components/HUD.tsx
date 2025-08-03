import { useSelector } from 'react-redux';
import { RootState } from '../store';

export default function HUD() {
  const score = useSelector((state: RootState) => state.combat.score);
  const credits = useSelector((state: RootState) => state.economy.credits);

  return (
    <div>
      <p>Score: {score}</p>
      <p>Credits: {credits}</p>
    </div>
  );
}
