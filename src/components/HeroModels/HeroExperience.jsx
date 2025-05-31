import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import { SpaceBoi } from './Space_boi.jsx';

function HeroExperience() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });

    return (
        <Canvas
            camera={{ position: [0, 0, 15], fov: 45, near: 0.1, far: 1000 }}
            gl={{ logarithmicDepthBuffer: true }}
            shadows
        >
            {/* Ambient light - subtle but present */}
            <ambientLight intensity={0.3} />

            {/* Key light - simulating the main light source */}
            <directionalLight
                position={[3, 10, 5]}
                intensity={1.2}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                shadow-bias={-0.0001}
            />

            {/* Fill light - softens shadows */}
            <directionalLight
                position={[-3, 5, -2]}
                intensity={0.6}
                color={'#f0f0f0'}
            />

            {/* Rim light - adds edge light to separate model from background */}
            <spotLight
                position={[0, 10, 10]}
                angle={0.3}
                intensity={1.5}
                penumbra={0.5}
                castShadow
            />

            {/* Optional: soft glow from screen */}
            <pointLight
                position={[0, 1.2, 0.5]}
                intensity={0.3}
                distance={4}
                color={'#00ffff'}
            />

            <pointLight
                position={[0, 3, -8]}
                intensity={1.2}
                distance={10}
                color="#4fd1c5" // teal glow
            />

            <OrbitControls
                enablePan={false}
                enableZoom={!isTablet}
                enableRotate={true}
                autoRotate={true}
                autoRotateSpeed={0.5}
                maxDistance={20}
                minDistance={10}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />

            <group
                scale={isMobile ? 0.7 : 1}
                position={[0, -1.5, 0]}
                rotation={[0, -Math.PI / 4, -0.1]}
            >
                <SpaceBoi />
            </group>
        </Canvas>
    );
}

export default HeroExperience;
