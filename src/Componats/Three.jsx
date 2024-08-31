import { Canvas } from '@react-three/fiber';
import React from 'react';
import { OrbitControls } from '@react-three/drei';
import Cyl from './Cyl';
import { Bloom, EffectComposer } from '@react-three/postprocessing';

const Three = () => {
  return (
    <div className='w-full h-screen'>
      <Canvas flat camera={{ fov: 60 }}>
        <OrbitControls enableZoom={false} /> {/* Disable zooming */}
        <ambientLight />
        <Cyl />
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={2.0}
            luminanceThreshold={0}
            luminanceSmoothing={0}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default Three;
