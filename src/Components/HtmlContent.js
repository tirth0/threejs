import React from 'react';
import {Section} from './section';
import {Canvas,useFrame,extend,useThree} from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {Html,useGLTF} from '@react-three/drei';




useGLTF.preload("/armchairYellow.gltf")

const Model = () => {
    const gltf = useGLTF("/armchairYellow.gltf");
    return <primitve object={gltf.scene} dispose={null}/>
}


const HtmlContent = () =>{
    return(
                <Model/>
    );
}

export default HtmlContent;