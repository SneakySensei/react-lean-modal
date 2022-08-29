declare module '*.svg' {
  import React from 'react';
  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare module '*.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
