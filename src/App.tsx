import React from 'react';
import './App.css';
import { Button } from './components/Button';

export default function App() {
  return (
    <div className="app">
      <h1>Vite + React + Storybook + Playwright</h1>
      <Button onClick={() => console.log('clicked')}>Click me</Button>
    </div>
  );
}
