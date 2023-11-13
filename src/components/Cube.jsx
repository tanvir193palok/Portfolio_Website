import React, { useRef } from "react";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Cube = () => {
  const textRef = useRef();
  useFrame(
    (state) =>
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
  );

  return (
    <mesh>
      <boxGeometry/>
      <meshBasicMaterial color="yellow">
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={["orange"]} />
          <Text ref={textRef} fontSize={1} color="#000">
            ThreeJS
          </Text>
        </RenderTexture>
      </meshBasicMaterial>
    </mesh>
  );
};

export default Cube;
