// src/components/RobotModel.tsx
"use client";

import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  useAnimations,
  Environment,
} from "@react-three/drei";

const Jet3D: React.FC = () => {
  return (
    <Canvas camera={{ position: [2, 5, 2], fov: 50 }}>
      <OrbitControls enableDamping enablePan enableZoom enableRotate={true} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Robot />
      <Environment preset="city" />
    </Canvas>
  );
};

const Robot: React.FC = () => {
  const group = useRef(null);
  const { scene, animations } = useGLTF("/Jet.gltf");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions) {
      const action = actions[Object.keys(actions)[0]];
      if (action) {
        action.play();
      }
    }
  }, [actions]);

  return (
    <primitive ref={group} object={scene} scale={0.09} position={[0, -2, 0]} />
  );
};

export default Jet3D;
