import { Canvas } from '@react-three/fiber';
import { OrbitControls, AdaptiveDpr, AdaptiveEvents } from '@react-three/drei';
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
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });

    // Memoize camera settings based on device
    const cameraSettings: CameraSettings = useMemo(() => ({
        position: [0, 0, isMobile ? 20 : 15],
        fov: isMobile ? 35 : 45,
        near: 0.1,
        far: 1000
    }), [isMobile]);

    return (
        <Canvas
            camera={cameraSettings}
            gl={{
                antialias: !isMobile,
                powerPreference: "high-performance",
                alpha: true,
                stencil: false,
                depth: true
            }}
            dpr={isMobile ? [1, 1.5] : [1, 2]}
            shadows={!isMobile}
        >
            <AdaptiveDpr pixelated />
            <AdaptiveEvents />

            {/* Reduced lighting setup for mobile */}
            <ambientLight intensity={0.4} />
            <directionalLight
                position={[3, 10, 5]}
                intensity={isMobile ? 0.8 : 1.2}
                castShadow={!isMobile}
                shadow-mapSize-width={isMobile ? 1024 : 2048}
                shadow-mapSize-height={isMobile ? 1024 : 2048}
            />

            {!isMobile && (
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
                enableZoom={!isTablet}
                enableRotate={true}
                autoRotate={true}
                autoRotateSpeed={0.5}
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
        </Canvas>
    );
};

export default HeroExperience; 