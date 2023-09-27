import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber'
import { TextureLoader, CubeTexture } from 'three';
import cartao from '../assets/cartao.jpg'
import nyvi from '../assets/nyvi.jpg'

export function Cube(props) {
    const meshRef = useRef()
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    // const material = MeshPhysicalMaterialProps({
    //     metalness: 0,  
    //     roughness: 0
    // });
    // useFrame((state, delta) => (meshRef.current.rotation.x += delta))
    const texture = new TextureLoader().load(cartao);
    const texture2 = new TextureLoader().load(nyvi);
    return (
        <mesh
            {...props}
            ref={meshRef}
            scale={active ? 1.5 : 1}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}>
            <boxGeometry args={[4, 2, 0.02]} />
            {/* <sphereGeometry args={[15, 64, 32]}/> */}
            {/* <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} /> */}
            <meshPhysicalMaterial
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
            />
        </mesh>
    )
};