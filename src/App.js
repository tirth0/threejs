import {useRef,Suspense} from 'react';
import './App.scss';
import {Canvas,useFrame,extend,useThree} from 'react-three-fiber';
import {Box,Html,softShadows} from '@react-three/drei';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Floaters from './Components/floaters';
import Header from './Components/header';
import {Section} from './Components/section';
import HtmlContent from './Components/HtmlContent';


softShadows();

extend({OrbitControls});

const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls component.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls
  const {
    camera,
    gl: { domElement },
  } = useThree();
  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  useFrame((state) => controls.current.update());
  return <orbitControls ref={controls} args={[camera, domElement]} 
      enableZoom={false}
      maxAzimuthAngle={Math.PI }
      maxPolarAngle={Math.PI/2}
      minAzimuthAngle={-Math.PI/4 }
      minPolarAngle={Math.PI/4}
  />;
};





const CanvasElement = () =>{
  return (
    <>
      < Header/>
      <Canvas
      shadowMap 
        colorManagement
        camera = {{
          position: [-5,2,10],
          fov: 60
        }}
      >
        
        {/* <CameraControls/> */}
        
          <Suspense fallback={null}>
            <HtmlContent/>
          </Suspense>
        
        
      </Canvas>
    </>
  );
}



function App() {
  return <CanvasElement/>
 
}

export default App;
