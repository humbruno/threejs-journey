import { useMemo, useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function CustomObject() {
  const verticesCount = 10 * 3;
  const ref = useRef();

  const positions = useMemo(() => {
    const positions = new Float32Array(verticesCount * 3);

    for (let index = 0; index < verticesCount * 3; index++) {
      positions[index] = Math.random() - 0.5 * 3;
    }

    return positions;
  }, []);

  useEffect(() => {
    ref.current.computeVertexNormals();
  }, []);

  return (
    <mesh position-y={1} position-x={1}>
      <bufferGeometry ref={ref}>
        <bufferAttribute
          attach="attributes-position"
          count={verticesCount}
          itemSize={3}
          array={positions}
        />
      </bufferGeometry>
      <meshStandardMaterial color="red" side={THREE.DoubleSide} />
    </mesh>
  );
}
