import React from 'react';
import { Box as ThreeBox, Sphere as ThreeSphere, Torus as ThreeTorus, Plane as ThreePlane } from '@react-three/drei';

export const Box = ({ children, ...props }) => (
  <ThreeBox {...props}>
    {children}
  </ThreeBox>
);

export const Sphere = ({ children, ...props }) => (
  <ThreeSphere {...props}>
    {children}
  </ThreeSphere>
);

export const Torus = ({ children, ...props }) => (
  <ThreeTorus {...props}>
    {children}
  </ThreeTorus>
);

export const Plane = ({ children, ...props }) => (
  <ThreePlane {...props}>
    {children}
  </ThreePlane>
);