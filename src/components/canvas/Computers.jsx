import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';
import PropTypes from 'prop-types';

const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      {/* eslint-disable react/no-unknown-property */}
      <hemisphereLight intensity={0.95} groundColor="black" />
      <pointLight intensity={2} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.32}
        penumbra={1}
        intensity={4}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0,-3,-2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01,-0.2,-0.1]}
        />
        {/* eslint-enable react/no-unknown-property */}
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
    }
    
  }, [])

  return (
    <Canvas 
      frameLoop="demand"
      shadows
      dpr={[1,2]}
      camera={{ position: [25, 3, 5], fov: 25 }}
      gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas;