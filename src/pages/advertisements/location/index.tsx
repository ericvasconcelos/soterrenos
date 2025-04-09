import 'leaflet/dist/leaflet.css';

import axios from 'axios';
import { LatLngExpression } from 'leaflet'; // Importar o tipo correto para coordenadas
import { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import { Icon, Modal, Text, Tooltip } from '@/components';
import { OPEN_STREET_API_URL } from '@/envs';
import { formatAddress } from '@/utils';

import { data } from '../data';

export const Location = () => {
  const [location, setLocation] = useState<LatLngExpression | null>(null);
  const [isModalLocationOpen, setIsModalLocationOpen] =
    useState<boolean>(false);
  const { zipCode } = data.address;
  const address = formatAddress(data.address);

  useEffect(() => {
    const fetchCoordinates = async () => {
      const { data } = await axios.get(
        `${OPEN_STREET_API_URL}/search.php?postalcode=${zipCode}&polygon_geojson=1&format=jsonv2`
      );

      if (data.length > 0) {
        const { lat, lon } = data[0];
        setLocation([parseFloat(lat), parseFloat(lon)]); // Usar array para LatLngExpression
      } else {
        console.error('Endereço não encontrado!');
      }
    };

    fetchCoordinates();
  }, [zipCode]);

  return (
    <>
      <Text tag="div" size="lg" className="mb-8 flex items-start">
        {address}
        <div
          role="button"
          tabIndex={0}
          className="inline-block ml-2 -mt-1 h-7 cursor-pointer"
          onClick={() => setIsModalLocationOpen(true)}
          aria-label="Localização do Terreno"
        >
          <Tooltip
            align="center"
            content="Visualizar a localização no mapa"
            aria-label="Localização do Terreno"
            className="cursor-pointer"
          >
            <Icon
              name="arrow-top-right-on-square"
              size={28}
              strokeWidth={1.5}
              color="primary"
              aria-hidden="true"
              className="cursor-pointer"
            />
          </Tooltip>
        </div>
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
