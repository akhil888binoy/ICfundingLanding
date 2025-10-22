import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import bearScene from "../assets/3d/bear.glb";

const Bear = (props) => {
  const bearRef = useRef();
  const { scene, nodes, materials } = useGLTF(bearScene);

  

  useEffect(() => {
    console.log("🔍 GLTF Scene:", scene);
    console.log("🔍 Available nodes:", Object.keys(nodes));
    console.log("🔍 Available materials:", Object.keys(materials));
    console.log("🔍 Full nodes:", nodes);
  }, [scene, nodes, materials]);

  // Option 1: Render the entire scene (easiest)
  return (
    <primitive object={scene} {...props} ref={bearRef} />
  );

  // Option 2: If you need specific control, uncomment below and comment above
  /*
  return (
    <group {...props} ref={bullRef} dispose={null}>
      {Object.entries(nodes).map(([name, node]) => {
        if (node.isMesh) {
          return (
            <mesh
              key={name}
              geometry={node.geometry}
              material={node.material}
            />
          );
        }
        return null;
      })}
    </group>
  );
  */
};

export default Bear;