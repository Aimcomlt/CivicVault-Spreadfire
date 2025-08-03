import GameCanvas from './components/GameCanvas';
import HUD from './components/HUD';
import PolicyMenu from './components/PolicyMenu';

export default function App() {
  return (
    <div>
      <GameCanvas />
      <HUD />
      <PolicyMenu />
    </div>
  );
}
