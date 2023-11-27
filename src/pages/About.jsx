/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";

import Guy from "../models/Guy";

const About = () => {
  return (
    <section className="w-full h-screen relative">
      <Canvas camera={{ near: 0.1, far: 1000 }}>
        <directionalLight position={[1, 0, 5]} intensity={2} />
        <ambientLight intensity={5} />
        <hemisphereLight
          skyColor="#b1e1ff"
          groundColor="#000000"
          intensity={1}
        />

        <Guy position={[0, -1, 0]} scale={[0.0002, 0.0002, 0.0002]} />
      </Canvas>
    </section>
  );
};

export default About;
