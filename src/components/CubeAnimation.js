import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "./Cube";

const CubeAnimation = () => {
  return (
    <Canvas camera={{ fov: 25, position: [4, 4, 4] }}>
      <OrbitControls enableZoom={false} autoRotate={true} />
      <ambientLight intensity={1} />
      <directionalLight position={[3, 2, 1]} />
      <Cube />
    </Canvas>
  );
};

export default CubeAnimation;
