

const IconMenuBurguer = ({ width, height,color }: IconMenuBurguerProps) => {

  return (
<svg width={width} height={height} viewBox="0 0 384 272" fill={color} xmlns="http://www.w3.org/2000/svg">
<path d="M360 48H24C10.4 48 0 37.6 0 24C0 10.4 10.4 0 24 0H360C373.6 0 384 10.4 384 24C384 37.6 373.6 48 360 48Z" fill={color} />
<path d="M360 160H24C10.4 160 0 149.6 0 136C0 122.4 10.4 112 24 112H360C373.6 112 384 122.4 384 136C384 149.6 373.6 160 360 160Z" fill={color} />
<path d="M360 272H24C10.4 272 0 261.6 0 248C0 234.4 10.4 224 24 224H360C373.6 224 384 234.4 384 248C384 261.6 373.6 272 360 272Z" fill={color} />
</svg>

  );
};

export default IconMenuBurguer;