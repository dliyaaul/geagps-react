export function darkenHexColor(hex: string, factor: number = 0.8, alpha: number = 0.95) {
  hex = hex.replace('#', '');
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);
  r = Math.floor(r * factor);
  g = Math.floor(g * factor);
  b = Math.floor(b * factor);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default darkenHexColor;