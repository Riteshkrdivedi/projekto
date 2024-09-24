// src/components/RobotModel.tsx
"use client";

import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";

const Robot3d: React.FC = () => {
  return (
    <Canvas>
      <OrbitControls
        enableDamping
        enablePan
        enableZoom={false}
        enableRotate={true}
      />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Robot />
    </Canvas>
  );
};

const Robot: React.FC = () => {
  const group = useRef(null);
  const { scene, animations } = useGLTF("/robot.gltf");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions) {
      const action = actions[Object.keys(actions)[0]];
      if (action) {
        action.play();
      }
    }
  }, [actions]);
  console.log("robot loaded");
  return (
    <primitive ref={group} object={scene} scale={7} position={[0, -3, 0]} />
  );
};

export default Robot3d;
