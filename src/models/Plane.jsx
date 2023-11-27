/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useAnimations, useGLTF } from "@react-three/drei";
import planeScene from "../assets/3d/cool_plane.glb";
import { useRef, useEffect } from "react";

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    actions["Take 001"].play();
  }, [actions, isRotating]);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene}></primitive>
    </mesh>
  );
};

export default Plane;
