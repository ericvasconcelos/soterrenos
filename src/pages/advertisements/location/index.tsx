import 'leaflet/dist/leaflet.css';

import { LatLngExpression } from 'leaflet'; // Importar o tipo correto para coordenadas
import { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import { Icon, Modal, Text, Tooltip } from '@/components';

import { data } from '../data';

export const Location = () => {
  const [location, setLocation] = useState<LatLngExpression | null>(null);
  const [isModalLocationOpen, setIsModalLocationOpen] =
    useState<boolean>(false);
  const { street, condominium, neighborhood, city, state, zipCode } =
    data.address;
  const address = `${street}${condominium ? ', ' + condominium : ''}, ${neighborhood}, ${city}, ${state} - CEP: ${zipCode}`;

  useEffect(() => {
    const fetchCoordinates = async () => {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search.php?postalcode=${zipCode}&polygon_geojson=1&format=jsonv2`
      );
      const result = await response.json();

      if (result.length > 0) {
        const { lat, lon } = result[0];
        setLocation([parseFloat(lat), parseFloat(lon)]); // Usar array para LatLngExpression
      } else {
        console.error('Endereço não encontrado!');
      }
    };

    fetchCoordinates();
  }, [zipCode]);

  return (
    <>
      <Text size="lg" className="mb-8">
        {address}
        <button
          className="ml-2 cursor-pointer"
          onClick={() => setIsModalLocationOpen(true)}
        >
          <Tooltip align="center" content="Visualizar a localização no mapa">
            <Icon
              name="arrow-top-right-on-square"
              size={22}
              strokeWidth={1.5}
              color="primary"
            />
          </Tooltip>
        </button>
      </Text>

      <Modal
        isOpen={isModalLocationOpen}
        onClose={() => setIsModalLocationOpen(false)}
      >
        <Text size="lg" weight="medium" className="mb-4">
          {address}
        </Text>

        <div style={{ height: '400px', width: '100%' }}>
          {location ? (
            <MapContainer
              center={location}
              zoom={15}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={location}>
                <Popup>{zipCode}</Popup>
              </Marker>
            </MapContainer>
          ) : (
            <p>Carregando mapa...</p>
          )}
        </div>
      </Modal>
    </>
  );
};
