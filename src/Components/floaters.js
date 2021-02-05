import React from 'react';
import {useRef} from 'react';
import {Canvas,useFrame,extend,useThree} from 'react-three-fiber';

const SpinningMesh = ({position,args,color})=>{
    const mesh  = useRef(null);
    useFrame(()=>{mesh.current.rotation.x = mesh.current.rotation.y+= 0.01});
    return(
      <mesh castShadow position={position} ref={mesh}>
      <boxBufferGeometry
        attach = "geometry"
        args={args}
      />
      
      <meshStandardMaterial attach="material" color={color}/>
    </mesh>
    );
  }

const Floaters = ()=>{
    return(
        <>
            <ambientLight intensity={0.2}/>
            <pointLight position={[-10,0,-20]} intensity={0.5}/>
            <pointLight position={[0,-10,0]} intensity={1.5}/>
            <directionalLight
            castShadow 
            position={[0,10,0]}
            intensity={1.5}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far = {50}
            shadow-camera-left = {-10}
            shadow-camera-right = {10}
            shadow-camera-top = {10}
            shadow-camera-bottom = {-10}
            />
            <group>
                <mesh receiveShadow rotation={[-Math.PI/2,0,0]} position={[0,-3,0]}>
                    <planeBufferGeometry attach="geometry" args={[100,100]}/>
                    <shadowMaterial attach="material" opacity={0.4}/>
                </mesh>
            </group>
            <SpinningMesh position={[0,1,0]} args={[3,2,1]} color="lightblue"/>
            <SpinningMesh position={[-2,1,-5]} args={[1,2,1]} color="pink"/>
            <SpinningMesh position={[5,1,-2]} args={[1,2,1]} color="pink"/>
        </>
    );
}

export default Floaters;