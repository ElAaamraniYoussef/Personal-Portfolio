import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'; // Corrected import
import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    <mesh>
     <ambientLight intensity={0.15}/>
      <hemisphereLight intensity={0.15} groundColor="black"  />
        <pointLight intensity={2}  /> 
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadowMapSize={1024} 
      />
       <primitive
        object={computer.scene}
        scale={isMobile ? 0.55 : 0.6}
        position={isMobile ? [0, -3  , -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
        receiveShadow
        >
           <meshStandardMaterial color="white" /> 
      </primitive>
    </mesh>
  );
};

const ComputersCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
  // Add a listener for changes to the screen size

    const mediaQuery = window.matchMedia('(max-width:500px)');
    // Set the initial value of the `isMobile` state variable
 
    setIsMobile(mediaQuery.matches);
// Define a callback function to handle changes to the media query
   
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
// Add the callback function as a listener for changes to the media query
  
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
   
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows // comment this line if shadows is the cause.
      camera={{ position: [20, 3, 5], fov: 25 }}  // Corrected camera prop
      gl={{ preserveDrawingBuffer: true }}
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
  );
};

export default ComputersCanvas