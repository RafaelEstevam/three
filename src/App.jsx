import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
// import Chuck from './models/chuck.model';
import { Cube } from './mesh/cube.mesh';
import { Model } from './models/porsche/Scene'

function App() {

  const [image, setImage] = useState('');
  const [image2, setImage2] = useState('');
  const [substract, setSubstract] = useState('basic');

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  }

  const onImageChange2 = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage2(URL.createObjectURL(event.target.files[0]));
    }
  }

  // useEffect(() => {
  //   console.log(image)
  // }, [image])

  return (
    <>
      <select value={substract} onChange={(e) => setSubstract(e.target.value)}>
        <option value="basic">Basic</option>
        <option value="reflexive">Reflexive</option>
        <option value="matte">Mate</option>
      </select>
      <input type="file" onChange={onImageChange} className="filetype" />
      <input type="file" onChange={onImageChange2} className="filetype" />
      {/* <img alt="preview image" src={image}/> */}
      <Canvas style={{ height: '100vh', width: '100%', background: "#c00" }}>
        <directionalLight intensity={10} />
        <directionalLight intensity={5} position={[10, 0, 100]} />
        {/* <spotLight intensity={100}  position={[10, 0, 100]}/> */}
        <directionalLight intensity={5} position={[10, 0, -100]} />
        <Suspense fallback={null}>
          <Cube image={image} image2={image2} substract={substract} />
          {/* <Model color={'#fff'} color2={'#232323'}/> */}
        </Suspense>
        <OrbitControls />
        {/* <PerspectiveCamera position={[50, 50, 50]} fov={100} /> */}
      </Canvas>
    </>

  )
}

export default App
