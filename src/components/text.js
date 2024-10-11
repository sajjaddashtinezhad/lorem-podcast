import React from 'react'
import { Text } from "@react-three/drei";
import { useThree } from '@react-three/fiber'


export default function Model() {
    const { viewport } = useThree()
    const fontSize = viewport.width / 35;

    return (
        <group scale={viewport.width / 3.75} >
            <Text font={'/fonts/PeydaWeb-Bold.otf'} position={[0, 0, -1]} fontSize={fontSize} color="white" anchorX="center" anchorY="middle">
پادکستی در باب دنیای گرافیک
            </Text>
        </group>
    )
}