import { Icon } from "leaflet";

const svgIcon = (color: string) => `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="${color}" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
  </svg>
`;

const generateIcon = (scale:number)=>{
  const color = `rgba(255, 42, 0,${scale/10})`
  return svgIcon(color)
}

// Función para crear el icono de Leaflet a partir del SVG generado
export const createCustomIcon = (rank: number) => new Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(generateIcon(rank)),
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});