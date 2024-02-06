import {Suspense, useRef, useEffect} from 'react'
import {Canvas , useFrame} from '@react-three/fiber'
import {OrbitControls, useGLTF, useAnimations} from '@react-three/drei'
import './index.css';

function Model({ ...props }) {
  const { nodes, animations, scene } = useGLTF('/model1.glb');
  const legLRef = useRef();
  const legRRef = useRef();
  const { ref, mixer, names, actions } = useAnimations(animations);

  // Optionally play an animation by name
  console.log(nodes);
  console.log(animations);
  console.log(scene)
  useEffect(() => {
    actions[names[0]]?.play();
  }, [actions, names]);

  // Example animation logic for moving legs
  // useFrame((state, delta) => {
  //   if (legLRef.current && legRRef.current) {
  //     // Simple oscillation for demonstration (adjust logic as needed)
  //     const time = state.clock.getElapsedTime();
  //     legLRef.current.rotation.z = Math.sin(time * 2) * Math.PI * 0.1;
  //     legRRef.current.rotation.z = Math.cos(time * 2) * Math.PI * 0.1;
  //   }
  // });
  console.log(nodes);
  return (
    <group {...props} dispose={null}>
      <group position={[2.736, 0, 5.591]}>
        <primitive object={nodes.main} />
        {/* <primitive object={nodes.Lower_legL003} ref={legLRef} />
      <primitive object={nodes.Lower_legR003} ref={legRRef} /> */}
      </group>
    </group>
  )
}

function App() {
  return (
    <div className="wrapper">
      <Canvas  camera={{ fov:100, position: [0,0,10,]}}>
        <Suspense fallback={null}>
          <ambientLight />
          <directionalLight intensity={2} position={[0,0,30]} />
          <Model />
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />

        </Suspense>

      </Canvas>

    </div>
  );
}

export default App;