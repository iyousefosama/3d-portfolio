import { Canvas } from '@react-three/fiber';
import { OrbitControls, AdaptiveDpr, AdaptiveEvents, Preload } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import { SpaceBoi } from './SpaceBoi';
import { Suspense, useMemo } from "react";

interface CameraSettings {
    position: [number, number, number];
    fov: number;
    near: number;
    far: number;
}

const HeroExperience: React.FC = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    /* const isTablet = useMediaQuery({ query: '(max-width: 1024px)' }); */
    const isLowEndDevice = useMediaQuery({ query: '(prefers-reduced-motion)' }) || 
                          navigator.hardwareConcurrency <= 4;

    // Memoize camera settings based on device
    const cameraSettings: CameraSettings = useMemo(() => ({
        position: [0, 0,  15],
        fov: 45,
        near: 0.1,
        far: 1000
    }), [isMobile]);

    return (
        <Canvas
            camera={cameraSettings}
            gl={{
                antialias: !isMobile && !isLowEndDevice,
                powerPreference: isLowEndDevice ? "low-power" : "high-performance",
                alpha: true,
                stencil: false,
                depth: true
            }}
            dpr={isMobile || isLowEndDevice ? [1, 1.5] : 2} // Lower resolution for mobile/low-end
            shadows={false}
            performance={{ min: 0.5 }} // Allow frame rate to drop to improve performance
        >
            <AdaptiveDpr pixelated />
            <AdaptiveEvents />

            {/* Reduced lighting setup for mobile */}
            <ambientLight intensity={0.4} />
            <directionalLight
                position={[3, 10, 5]}
                intensity={isMobile ? 0.8 : 1.2}
                castShadow={!isMobile && !isLowEndDevice}
                shadow-mapSize-width={isMobile ? 512 : 1024}
                shadow-mapSize-height={isMobile ? 512 : 1024}
            />

            {!isMobile && !isLowEndDevice && (
                <>
                    <directionalLight
                        position={[-3, 5, -2]}
                        intensity={0.6}
                        color={'#f0f0f0'}
                    />
                    <spotLight
                        position={[0, 10, 10]}
                        angle={0.3}
                        intensity={1.5}
                        penumbra={0.5}
                        castShadow
                    />
                </>
            )}

            <pointLight
                position={[0, 3, -8]}
                intensity={isMobile ? 0.8 : 1.2}
                distance={10}
                color="#4fd1c5"
            />

            <OrbitControls
                enablePan={false}
                enableZoom={false}
                enableRotate={true}
                autoRotate={true}
                autoRotateSpeed={isLowEndDevice ? 0.2 : 0.5}
                maxDistance={isMobile ? 25 : 20}
                minDistance={isMobile ? 15 : 10}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />

            <Suspense fallback={null}>
                <group
                    scale={isMobile ? 0.7 : 1}
                    position={[0, -1.5, 0]}
                    rotation={[0, -Math.PI / 4, -0.1]}
                >
                    <SpaceBoi />
                </group>
            </Suspense>
            
            {/* Preload assets to prevent jank when they first appear */}
            <Preload all />
        </Canvas>
    );
};

export default HeroExperience; 
