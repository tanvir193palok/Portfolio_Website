import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "./Cube";

const CubeAnimation = () => {
  return (
    <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
      <OrbitControls enableZoom={false} autoRotate={true} />
      <ambientLight intensity={1} />
      <directionalLight position={[1, 2, 3]} />
      <Cube />
    </Canvas>
  );
};

export default CubeAnimation;
