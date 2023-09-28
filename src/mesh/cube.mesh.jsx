import { useRef, useState } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber'
import { TextureLoader, CubeTexture } from 'three';
import cartao from '../assets/cartao.jpg'

const BasicMaterial = ({ texture, attach }) => {
    return (
        <meshBasicMaterial
            attach={`material-${attach}`}
            color={"#fff"}
            map={texture ? texture : undefined}
        />
    )
}

const MatteMaterial = ({ texture, attach }) => {
    return (
        <meshStandardMaterial
            attach={`material-${attach}`}
            color={"#fff"}
            map={texture ? texture : undefined}
            roughness={0}
            metalness={0}
            emissive="#000"
        />
    )
}

const ReflexiveMaterial = ({ texture, attach }) => {
    return (
        <meshPhysicalMaterial
            color={"#fff"}
            attach={`material-${attach}`}
            emissive="#000"
            reflectivity={0.1}
            transmission={1}
            roughness={0}
            metalness={0}
            clearcoat={0}
            clearcoatRoughness={0}
            ior={1.2}
            thickness={10}
            map={texture ? texture : undefined}
        />
    )
}

const Reflexive = ({ texture, texture2 }) => {
    return (
        <>
            <MatteMaterial attach={0} />
            <MatteMaterial attach={1} />
            <MatteMaterial attach={2} />
            <MatteMaterial attach={3} />
            <MatteMaterial attach={4} texture={texture} />
            <MatteMaterial attach={5} texture={texture2} />
        </>
    )
}

const Basic = ({ texture, texture2 }) => {
    return (
        <>
            <BasicMaterial attach={0} />
            <BasicMaterial attach={1} />
            <BasicMaterial attach={2} />
            <BasicMaterial attach={3} />
            <BasicMaterial attach={4} texture={texture} />
            <BasicMaterial attach={5} texture={texture2} />
        </>
    )
}

const Matte = ({ texture, texture2 }) => {
    return (
        <>
            <MatteMaterial attach={0} />
            <MatteMaterial attach={1} />
            <MatteMaterial attach={2} />
            <MatteMaterial attach={3} />
            <MatteMaterial attach={4} texture={texture} />
            <MatteMaterial attach={5} texture={texture2} />
        </>
    )
}

export function Cube({ image, image2, substract, ...props }) {
    const meshRef = useRef()
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    // const material = MeshPhysicalMaterialProps({
    //     metalness: 0,  
    //     roughness: 0
    // });
    // useFrame((state, delta) => (meshRef.current.rotation.x += delta))
    const texture = new TextureLoader().load(image || cartao);
    const texture2 = new TextureLoader().load(image2 || cartao);

    return (
        <mesh
            {...props}
            ref={meshRef}
            scale={active ? 1.5 : 1}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}
        >

            <boxGeometry args={[4, 2, 0.02]} />
            {/* <ReflexiveMaterial {...{texture, texture2}} /> */}
            {substract === 'reflexive' ? (
                <Reflexive {...{ texture, texture2 }} />
            ) : substract === 'matte' ? (
                <Basic {...{ texture, texture2 }} />
            ) : (
                <Basic {...{ texture, texture2 }} />
            )}

            {/* <ReflexiveMaterial attach={0} />
            <ReflexiveMaterial attach={1} />
            <ReflexiveMaterial attach={2} />
            <ReflexiveMaterial attach={3} />
            <ReflexiveMaterial attach={4} texture={texture} />
            <ReflexiveMaterial attach={5} texture={texture2}/> */}
            {/* <sphereGeometry args={[15, 64, 32]}/> */}
            {/* <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} /> */}
            {/* <meshPhysicalMaterial
                color='#fff'
                emissive="#000"
                reflectivity={0.5}
                transmission={1}
                roughness={0}
                metalness={0}
                clearcoat={0}
                clearcoatRoughness={0}
                ior={1.2}
                thickness={10}
                map={texture}
            // wireframe
            /> */}



        </mesh>
    )
};