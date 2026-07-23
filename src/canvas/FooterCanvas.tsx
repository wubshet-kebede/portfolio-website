import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CpuChip from "./CpuChip.tsx";

const FooterCanvas = () => {
  return (
    <Canvas
      camera={{
        position: [0, 0, 6],
        fov: 45,
      }}
    >
      <ambientLight intensity={1.5} />

      <directionalLight position={[2, 4, 5]} intensity={2} />

      <CpuChip />

      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
    </Canvas>
  );
};

export default FooterCanvas;
