// In components/MyGame.js
import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import MainScene from './scenes/MainScene'; // Example import

function MyGame() {
  const gameCanvasRef = useRef(null);

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: gameCanvasRef.current,
      scene: [MainScene], // Use the imported scene
    };
    const game = new Phaser.Game(config);
    return () => { game.destroy(true); };
  }, []);

  return <div ref={gameCanvasRef} />;
}

export default MyGame;
