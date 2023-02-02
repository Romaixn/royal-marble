import { Canvas } from '@react-three/fiber'
import { Loader } from '@react-three/drei'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Canvas>
      <Suspense fallback={null}>
        <App />
      </Suspense>
    </Canvas>
    <Loader />
  </React.StrictMode>,
)
