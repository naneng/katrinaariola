import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF, Float } from '@react-three/drei';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import PropTypes from 'prop-types';
import CanvasLoader from '../Loader';



const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      <Float  speed={1.75} rotationIntensity={1} floatIntensity={2}></Float>
      <hemisphereLight intensity={0.95} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.32}
        penumbra={1}
        intensity={4}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={2} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0,-3,-2.2] : [0, -3.25, -1.5]}
        // rotation={[-0.01,-0.2,-0.1]}
        rotation={[2 * Math.PI, 0, 6.25]}
      />
    </mesh>
  )
}

Computers.propTypes = {
  isMobile: PropTypes.bool.isRequired,
}



const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  

  useEffect(() => {
    //checks that medea matches 500px
    const mediaQuery = window.matchMedia(
      "(max-width: 500px)")
     
    // Set the initial value of the 'isMobile' state variable
    setIsMobile(mediaQuery.matches);
    
    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change',
      handleMediaQueryChange);
    
    //since in a useEffect, if you open an event listener, you must close it as well
    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change',
        handleMediaQueryChange);
    };
    
  }, [])

  return (
    <Canvas 
      frameloop="demand"
      shadows
      dpr={[1,2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableDamping
          dampingFactor={0.05}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.2}
          reverseOrbit={false}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas;