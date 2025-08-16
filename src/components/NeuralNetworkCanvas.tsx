import React, { useState, useEffect, useRef } from 'react';

interface NeuralNetworkCanvasProps {
  currentPage: string;
  onScrollProgress: (progress: number) => void;
}

interface Neuron {
  x: number;
  y: number;
  vx: number;
  vy: number;
  charge: number;
  size: number;
  pulsePhase: number;
}

interface Connection {
  from: number;
  to: number;
  distance: number;
  strength: number;
  activity: number;
}

interface Signal {
  id: number;
  connection: Connection;
  progress: number;
  speed: number;
  intensity: number;
  size: number;
}

const NeuralNetworkCanvas: React.FC<NeuralNetworkCanvasProps> = ({ 
  currentPage, 
  onScrollProgress 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [neurons, setNeurons] = useState<Neuron[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [signals, setSignals] = useState<Signal[]>([]);

  // Initialize neural network
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = document.body.scrollHeight || window.innerHeight;

    // Create neurons
    const neuronCount = 80;
    const newNeurons: Neuron[] = [];
    for (let i = 0; i < neuronCount; i++) {
      newNeurons.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        charge: Math.random(),
        size: Math.random() * 3 + 1,
        pulsePhase: Math.random() * Math.PI * 2
      });
    }
    setNeurons(newNeurons);

    // Create connections
    const newConnections: Connection[] = [];
    newNeurons.forEach((neuron, i) => {
      newNeurons.slice(i + 1).forEach((otherNeuron, j) => {
        const distance = Math.sqrt(
          Math.pow(neuron.x - otherNeuron.x, 2) + 
          Math.pow(neuron.y - otherNeuron.y, 2)
        );
        
        if (distance < 150) {
          newConnections.push({
            from: i,
            to: i + j + 1,
            distance: distance,
            strength: 1 - (distance / 150),
            activity: Math.random()
          });
        }
      });
    });
    setConnections(newConnections);

    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = Math.max(document.body.scrollHeight, window.innerHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentPage]);

  // Handle scroll and neural animations
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = window.pageYOffset / (document.body.scrollHeight - window.innerHeight);
      onScrollProgress(scrollPercent);

      // Create more electrical signals based on scroll
      if (Math.random() < 0.4 + scrollPercent * 0.6 && connections.length > 0) {
        const connection = connections[Math.floor(Math.random() * connections.length)];
        const newSignal: Signal = {
          id: Date.now() + Math.random(),
          connection: connection,
          progress: 0,
          speed: 0.008 + Math.random() * 0.015,
          intensity: 0.6 + Math.random() * 0.4,
          size: 1 + Math.random() * 2
        };
        setSignals(prev => [...prev.slice(-15), newSignal]);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [connections, onScrollProgress]);

  // Canvas animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const time = Date.now() * 0.001;

      // Draw connections with activity
      connections.forEach(connection => {
        if (neurons[connection.from] && neurons[connection.to]) {
          const fromNeuron = neurons[connection.from];
          const toNeuron = neurons[connection.to];
          
          connection.activity = Math.sin(time + connection.from * 0.1) * 0.5 + 0.5;
          
          ctx.beginPath();
          ctx.moveTo(fromNeuron.x, fromNeuron.y);
          ctx.lineTo(toNeuron.x, toNeuron.y);
          ctx.strokeStyle = `rgba(220, 38, 38, ${connection.strength * 0.2 + connection.activity * 0.1})`;
          ctx.lineWidth = connection.strength * 0.8;
          ctx.stroke();
        }
      });

      // Draw neurons with enhanced pulsing
      neurons.forEach((neuron, index) => {
        neuron.x += neuron.vx;
        neuron.y += neuron.vy;
        
        if (neuron.x < 0 || neuron.x > canvas.width) neuron.vx *= -1;
        if (neuron.y < 0 || neuron.y > canvas.height) neuron.vy *= -1;
        
        neuron.charge = Math.sin(time * 2 + neuron.pulsePhase) * 0.5 + 0.5;
        
        // Outer glow
        ctx.beginPath();
        ctx.arc(neuron.x, neuron.y, neuron.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 38, 38, ${0.1 + neuron.charge * 0.1})`;
        ctx.fill();
        
        // Main neuron
        ctx.beginPath();
        ctx.arc(neuron.x, neuron.y, neuron.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 38, 38, ${0.5 + neuron.charge * 0.5})`;
        ctx.shadowColor = '#dc2626';
        ctx.shadowBlur = 8 + neuron.charge * 12;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw signals with enhanced effects
      signals.forEach(signal => {
        if (neurons[signal.connection.from] && neurons[signal.connection.to]) {
          const fromNeuron = neurons[signal.connection.from];
          const toNeuron = neurons[signal.connection.to];
          
          const x = fromNeuron.x + (toNeuron.x - fromNeuron.x) * signal.progress;
          const y = fromNeuron.y + (toNeuron.y - fromNeuron.y) * signal.progress;
          
          // Signal trail
          ctx.beginPath();
          ctx.arc(x, y, signal.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 107, 107, ${signal.intensity * 0.3})`;
          ctx.fill();
          
          // Main signal
          ctx.beginPath();
          ctx.arc(x, y, signal.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${signal.intensity})`;
          ctx.shadowColor = '#ffffff';
          ctx.shadowBlur = 15;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [neurons, connections, signals]);

  // Update signals
  useEffect(() => {
    const interval = setInterval(() => {
      setSignals(prev => 
        prev.map(signal => ({
          ...signal,
          progress: signal.progress + signal.speed
        })).filter(signal => signal.progress < 1)
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default NeuralNetworkCanvas;