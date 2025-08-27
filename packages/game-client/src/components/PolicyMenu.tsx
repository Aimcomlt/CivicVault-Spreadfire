import { useAppDispatch, useAppSelector } from '../store';
import { enactPolicy } from 'game-core';

export default function PolicyMenu() {
  const dispatch = useAppDispatch();
  const policies = useAppSelector(state => state.policy.enacted);

  const handleEnact = () => {
    dispatch(enactPolicy('New Policy'));
  };

  return (
    <div>
      <button onClick={handleEnact}>Enact Policy</button>
      <ul>
        {policies.map((p: string, i: number) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}
