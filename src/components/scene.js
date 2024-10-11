import React from 'react';
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import Text from "../components/text";
import Model from "../components/model";

const ThreeD = () => {

    return (
        <Canvas className='bg-zinc-900'>
            <Model />
            <Text />
            <ambientLight intensity={0.5} />
            <directionalLight intensity={1} position={[5, 5, 5]} />
            <pointLight color="#CE0089" intensity={5} position={[0, -5, 0]} />
            <Environment preset="city" />
        </Canvas>
    );
};

export default ThreeD;


