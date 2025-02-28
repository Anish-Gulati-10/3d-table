import { OrbitControls, Stage } from "@react-three/drei";
import React from "react";
import { Table } from "./Table";

const Experience = () => {
  return (
    <>
      <Stage
        intensity={1.5}
        environment="city"
        shadows={{
          type: "accumulative",
          color: "#d9afd9",
          colorBlend: 5,
          opacity: 0.7,
        }}
        adjustCamera={3}>
        <Table castShadow/>
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
