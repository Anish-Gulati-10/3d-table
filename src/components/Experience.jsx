import { OrbitControls, Stage } from "@react-three/drei";
import React from "react";

const Experience = () => {
  return (
    <>
      <Stage
        intensity={1.5}
        environment="city"
        shadows={{
          type: "accumulative",
          color: "#d9afd9",
          colorBlend: 2,
          opacity: 2,
        }}
        adjustCamera={6}>
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Stage>
      <OrbitControls
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
};

export default Experience;
