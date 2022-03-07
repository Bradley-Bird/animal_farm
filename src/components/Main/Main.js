import React from 'react';
import './Main.css';
import Animal from '../Animal/Animal';
import { animals } from '../../data';

export default function Main() {
  return (
    <main>
      {animals.map((animal) => (
        <Animal key={animal.name} type={animal.type} />
      ))}
    </main>
  );
}
