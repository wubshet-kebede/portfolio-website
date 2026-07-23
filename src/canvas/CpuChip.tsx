import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const CpuChip = () => {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!mesh.current) return;

    mesh.current.rotation.y += delta * 0.4;
    mesh.current.rotation.x += delta * 0.1;
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2, 2, 0.4]} />

      <meshStandardMaterial color="#6366f1" metalness={0.9} roughness={0.2} />
    </mesh>
  );
};

export default CpuChip;
