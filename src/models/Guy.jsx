/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useAnimations, useGLTF } from "@react-three/drei";
import guyScene from "../assets/3d/guy.glb";
import { useRef, useEffect } from "react";

const Guy = (props) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(guyScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    actions["M_LRG_Meteor_Man_Remix.ao|MeteorMan_Male_Idle"].play();
  }, [actions]);

  return (
    <mesh ref={ref} {...props}>
      <primitive object={scene}></primitive>
    </mesh>
  );
};

export default Guy;
