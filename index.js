import React from 'react';
import ReactDOM from 'react-dom/client';
import { Face } from './Face';
import { range } from 'd3';

const height = 300;
const width = 235;
const centerX = 120;
const centerY = 120;
const strokeWidth = 10;
const eyeRadius = 20;
const offsetX = 40;
const offsetY = 45;
const mouthRadius = 60;
const mouthWidth = 10;
const startAngle = Math.PI / 2;
const endAngle = Math.PI * 3 / 2;

const array = range(4 * 4);

// App component == orchestrator
const App = () => array.map(()=> 
    < Face
        width={width}
        height={height}
        centerX={centerX}
        centerY={centerY}
        strokeWidth={strokeWidth}
        eyeRadius={10 + Math.random() * 15}
        offsetX={offsetX + Math.random() * 5}
        offsetY={offsetY + Math.random() * 5}
        mouthRadius={mouthRadius + Math.random() * 30}
        mouthWidth={mouthWidth + Math.random() * 10}
        startAngle={startAngle}
        endAngle={endAngle}
    />
)
        

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);