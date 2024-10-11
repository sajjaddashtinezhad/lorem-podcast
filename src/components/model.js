import React, { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { RoundedBox, MeshTransmissionMaterial } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';

const Model = () => {
  const boxRef = useRef();
  const { size } = useThree();
  const isPhone = size.width < 768; // Adjust the width threshold as needed
  const boxSize = isPhone ? [3, 3, 3] : [3.5, 3.5, 3.5]; // Smaller size for phones
  console.log("width:" + size.width);

  const [hovered, setHovered] = useState(false);
  const [position, setPosition] = useState([0, 0, 0]);

  const { pos } = useSpring({
    pos: position,
    config: { tension: 200, friction: 10, precision: 0.01 },
  });

  useFrame(() => {
    if (boxRef.current) {
      boxRef.current.rotation.x += 0.01;
      boxRef.current.rotation.y += 0.01;
    }
  });

  const handlePointerMove = (event) => {
    if (hovered) {
      const { offsetX, offsetY } = event.nativeEvent;
      const x = (offsetX / size.width) * 2 - 1;
      const y = -(offsetY / size.height) * 2 + 1;
      setPosition([x * 10.5, y * 1.5, 0.2]);
    }
  };

  const handlePointerOver = () => {
    setHovered(true);
  };

  const handlePointerOut = () => {
    setHovered(false);
    setPosition([0, 0, 0]);
  };

  return (
    <animated.group
      ref={boxRef}
      position={isPhone ? [0, 0, 0] : pos}
      onPointerMove={isPhone ? undefined : handlePointerMove}
      onPointerOver={isPhone ? undefined : handlePointerOver}
      onPointerOut={isPhone ? undefined : handlePointerOut}
    >
      <RoundedBox args={boxSize} radius={0.5} smoothness={4}>
        <MeshTransmissionMaterial
          thickness={3}
          roughness={0}
          transmission={1}
          ior={1.2}
          chromaticAberration={0.02}
          backside={true}
        />
      </RoundedBox>
    </animated.group>
  );
};

export default Model;