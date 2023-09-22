import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
// import Chuck from './models/chuck.model';
import { Cube } from './mesh/cube.mesh';
import { Model } from './models/porsche/Scene'

function App() {
  return (
    <Canvas style={{ height: '100vh', width: '100%', background: "#c00" }}>
      <ambientLight />
      <ambientLight intensity={1.25} />
      <ambientLight intensity={1} />
      <directionalLight intensity={10} />
      <directionalLight intensity={10} />
      <Suspense fallback={null}>
        <Model color={'#fff'} color2={'#232323'}/>
      </Suspense>
      <OrbitControls />
      <PerspectiveCamera position={[50, 50, 50]} fov={100} />
    </Canvas>
  )
}

export default App
