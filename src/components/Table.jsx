import React from "react";
import { useGLTF } from "@react-three/drei";
import { useConfigurator } from "../contexts/Configurator";

export function Table(props) {
  const { nodes, materials } = useGLTF("./model/Table.gltf");
  const { legs } = useConfigurator();
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Plate.geometry}
        material={materials.Plate}
        castShadow
      />
      {legs === 0 && (
        <>
          <mesh
            castShadow
            geometry={nodes.Legs01Left.geometry}
            material={materials.Metal}
            position={[-1.5, 0, 0]}
          />
          <mesh
            castShadow
            geometry={nodes.Legs01Right.geometry}
            material={materials.Metal}
            position={[1.5, 0, 0]}
          />
        </>
      )}
      {legs === 1 && (
        <>
          <mesh
            castShadow
            geometry={nodes.Legs02Left.geometry}
            material={materials.Metal}
            position={[-1.5, 0, 0]}
          />
          <mesh
            castShadow
            geometry={nodes.Legs02Right.geometry}
            material={materials.Metal}
            position={[1.5, 0, 0]}
          />
        </>
      )}

      {legs === 2 && (
        <>
          <mesh
            castShadow
            geometry={nodes.Legs03Left.geometry}
            material={materials.Metal}
            position={[-1.5, 0, 0]}
          />
          <mesh
            castShadow
            geometry={nodes.Legs03Right.geometry}
            material={materials.Metal}
            position={[1.5, 0, 0]}
          />
        </>
      )}
    </group>
  );
}

useGLTF.preload("./model/Table.gltf");
