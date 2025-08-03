import { useDispatch, useSelector } from 'react-redux';
import { enactPolicy } from 'game-core';
import { RootState } from '../store';

export default function PolicyMenu() {
  const dispatch = useDispatch();
  const policies = useSelector((state: RootState) => state.policy.enacted);

  const handleEnact = () => {
    dispatch(enactPolicy('New Policy'));
  };

  return (
    <div>
      <button onClick={handleEnact}>Enact Policy</button>
      <ul>
        {policies.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}
