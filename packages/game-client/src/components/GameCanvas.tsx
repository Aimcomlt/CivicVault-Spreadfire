import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store';
import { addScore, adjustCredits } from 'game-core';

export default function GameCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dispatch = useDispatch();
  const score = useSelector((state: RootState) => state.combat.score);
  const credits = useSelector((state: RootState) => state.economy.credits);

  // draw units and terrain whenever relevant state changes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // clear
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw simple checkerboard terrain
    const tileSize = 40;
    const cols = Math.ceil(canvas.width / tileSize);
    const rows = Math.ceil(canvas.height / tileSize);
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        ctx.fillStyle = (x + y) % 2 === 0 ? '#3c3' : '#2a2';
        ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
      }
    }

    // draw units based on combat score
    for (let i = 0; i < score; i++) {
      ctx.fillStyle = 'red';
      const unitX = 20 + i * 30;
      const unitY = canvas.height / 2;
      ctx.beginPath();
      ctx.arc(unitX, unitY, 10, 0, Math.PI * 2);
      ctx.fill();
    }

    // overlay credits text
    ctx.fillStyle = 'white';
    ctx.fillText(`Credits: ${credits}`, 10, 20);
  }, [score, credits]);

  // input listeners dispatching redux actions
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleClick = () => dispatch(addScore(1));
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'c') {
        dispatch(adjustCredits(10));
      }
    };

    canvas.addEventListener('click', handleClick);
    window.addEventListener('keydown', handleKey);

    return () => {
      canvas.removeEventListener('click', handleClick);
      window.removeEventListener('keydown', handleKey);
    };
  }, [dispatch]);

  return <canvas ref={canvasRef} width={800} height={600} />;
}
