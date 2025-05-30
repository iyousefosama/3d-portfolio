import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import {Computer} from "./Computer.jsx";


function HeroExperience() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });

    return (
        <Canvas
            camera={{ position: [0, 0, 15], fov: 45, near: 0.1, far: 1000 }}
            gl={{ logarithmicDepthBuffer: true }}
        >
            {/* Ambient light */}
            <ambientLight intensity={0.5} color="#ffffff" />  {/* Slightly brighter neutral ambient */}

            <directionalLight
                position={[5, 10, 5]}
                intensity={1}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />

            <directionalLight
                position={[-5, 10, -5]} // fill from opposite side
                intensity={0.5}
            />

            <pointLight position={[0, 2, 5]} intensity={0.6} />


            <OrbitControls
                enablePan={false}
                enableZoom={!isTablet}
                enableRotate={true}
                autoRotate={true}
                autoRotateSpeed={0.5}
                maxDistance={20}
                minDistance={5}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />

            <group
                scale={isMobile ? 0.2 : 0.3}
                position={[0, -1.5, 0]}
                rotation={[0, -Math.PI / 4, 0]}
            >
                <Computer />
            </group>
        </Canvas>
    );
}

export default HeroExperience;
