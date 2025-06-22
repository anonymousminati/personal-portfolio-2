import * as THREE from 'three'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any
      boxGeometry: any
      meshStandardMaterial: any
      meshPhysicalMaterial: any
      ambientLight: any
      directionalLight: any
      pointLight: any
      group: any
    }
  }
}

export {}
