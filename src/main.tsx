import { Canvas } from '@react-three/fiber'
import { Loader } from '@react-three/drei'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Interface from './Interface'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Canvas className='experience' shadows>
      <Suspense fallback={null}>
        <App />
      </Suspense>
    </Canvas>
    <Interface />
    <Loader />
  </React.StrictMode>,
)
