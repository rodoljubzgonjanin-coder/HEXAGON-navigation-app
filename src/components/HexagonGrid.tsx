import React from 'react';
import { Polygon } from 'react-native-maps';

const HexagonGrid = ({ latitude, longitude, size = 0.01 }) => {
  const generateHexagon = (centerLat, centerLon, size) => {
    const coords = [];
    for (let i = 0; i < 6; i++) {
      const angle = (i * 60 * Math.PI) / 180;
      const lat = centerLat + size * Math.cos(angle);
      const lon = centerLon + size * Math.sin(angle);
      coords.push({ latitude: lat, longitude: lon });
    }
    return coords;
  };

  const hexagons = [];
  const gridSize = 3;
  const spacing = size * 2.5;

  for (let i = -gridSize; i <= gridSize; i++) {
    for (let j = -gridSize; j <= gridSize; j++) {
      const offsetLat = i * spacing;
      const offsetLon = j * spacing * 0.866;
      const coords = generateHexagon(latitude + offsetLat, longitude + offsetLon, size);
      hexagons.push(coords);
    }
  }

  return (
    <>
      {hexagons.map((coords, index) => (
        <Polygon
          key={index}
          coordinates={coords}
          strokeColor="#6366f1"
          fillColor="rgba(99, 102, 241, 0.1)"
          strokeWidth={2}
        />
      ))}
    </>
  );
};

export default HexagonGrid;
