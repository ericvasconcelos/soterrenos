import {
  AdvancedMarker,
  APIProvider,
  Map,
  Pin,
} from '@vis.gl/react-google-maps';
import { useCallback, useState } from 'react';

import { Icon, Modal, Text, Tooltip } from '@/components';
import { GOOGLE_MAPS_API_KEY } from '@/envs';
import { formatAddress } from '@/utils';

import { ILocation } from './types';

export const Location = ({ address }: ILocation) => {
  const [isModalLocationOpen, setIsModalLocationOpen] =
    useState<boolean>(false);
  const { lat, lng } = address;
  const formattedAddress = formatAddress(address);

  const handleOpenLocationModal = useCallback(() => {
    if (lat && lng) {
      setIsModalLocationOpen(true);
    }
  }, [lat, lng]);

  return (
    <>
      <Text tag="div" size="lg" className="mb-8 flex items-start">
        {formattedAddress}
        <div
          role="button"
          tabIndex={0}
          className="inline-block ml-2 -mt-1 h-7 cursor-pointer"
          onClick={handleOpenLocationModal}
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

      {lat && lng && (
        <Modal
          isOpen={isModalLocationOpen}
          onClose={() => setIsModalLocationOpen(false)}
        >
          <Text size="lg" weight="medium" className="mb-4">
            {formattedAddress}
          </Text>

          <div style={{ height: '400px', width: '100%' }}>
            {location ? (
              <APIProvider apiKey={GOOGLE_MAPS_API_KEY} region="BR">
                <Map
                  mapId="58bda79ff82ab6f4"
                  style={{ width: '100%', height: '100%' }}
                  defaultCenter={{ lat, lng }}
                  zoom={15}
                  gestureHandling={'greedy'}
                  disableDefaultUI={true}
                >
                  <AdvancedMarker position={{ lat, lng }}>
                    <Pin
                      background="#8b83c5"
                      glyphColor="#513e9f"
                      borderColor="#513e9f"
                    />
                  </AdvancedMarker>
                </Map>
              </APIProvider>
            ) : (
              <p>Carregando mapa...</p>
            )}
          </div>
        </Modal>
      )}
    </>
  );
};
