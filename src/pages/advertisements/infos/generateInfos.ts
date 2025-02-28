import { IconNames } from '@/components/Icon/types';
import { DataInfos, IInfoSection, IInfoItem } from './types';
import { IInfos } from '../types';

const slopeIcon: Record<string, IconNames> = {
  downhill: 'arrow-down-right',
  uphill: 'arrow-up-right',
  flat: 'minus',
};

export const generateInfos = (infos: IInfos): IInfoSection[] => {
  const dataInfos: DataInfos = {
    whatHas: {
      hasWater: {
        icon: { name: 'droplet', size: 28, strokeWidth: 1 },
        label: 'Água Encanada',
      },
      hasArtesianWell: {
        icon: { name: 'well', size: 26, strokeWidth: 1 },
        label: 'Poço Artesiano',
      },
      hasSewageSystem: {
        icon: { name: 'sewage', size: 30, strokeWidth: 6 },
        label: 'Fossa',
      },
      hasEletricity: {
        icon: { name: 'bolt', size: 28, strokeWidth: 1 },
        label: 'Energia Elétrica',
      },
      hasGas: {
        icon: { name: 'gas-cylinder', size: 27, strokeWidth: 0 },
        label: 'Gás Encanado',
      },
      hasInternet: {
        icon: { name: 'wifi', size: 28, strokeWidth: 1 },
        label: 'Internet',
      },
      isFenced: {
        icon: { name: 'wall', size: 28, strokeWidth: 11 },
        label: 'Murado',
      },
      isLandLeveled: {
        icon: { name: 'tractor', size: 28, strokeWidth: 2 },
        label: 'Terraplanagem Feita',
      },
      isLotClear: {
        icon: { name: 'broom', size: 30, strokeWidth: 1 },
        label: 'Lote Limpo',
      },
      soilType: {
        icon: { name: 'soil', size: 27, strokeWidth: 0 },
        label: 'Tipo de solo',
      },
      slope: {
        icon: {
          name: slopeIcon[infos.whatHas.slope as string],
          size: 28,
          strokeWidth: 1,
        },
        label: 'Inclinação',
      },
      zoning: {
        icon: { name: 'zoning', size: 27, strokeWidth: 0.5 },
        label: 'Zoneamento',
      },
      sunPosition: {
        icon: { name: 'sun', size: 28, strokeWidth: 1.5 },
        label: 'Posição do Sol',
      },
    },
    condominiumStatus: {
      established: {
        icon: { name: 'village', size: 32, strokeWidth: 6 },
        label: 'Condomínio Formado',
      },
      paved: {
        icon: { name: 'road', size: 28, strokeWidth: 0 },
        label: 'Rua Asfaltada',
      },
      streetLighting: {
        icon: { name: 'light-bulb', size: 28, strokeWidth: 1 },
        label: 'Iluminação na rua',
      },
      sanitationBasic: {
        icon: { name: 'sewage', size: 30, strokeWidth: 6 },
        label: 'Saneamento Básico',
      },
      sidewalks: {
        icon: { name: 'walk', size: 28, strokeWidth: 1 },
        label: 'Calçadas',
      },
      gatedEntrance: {
        icon: { name: 'entrance-gate', size: 28, strokeWidth: 0 },
        label: 'Portaria',
      },
      security: {
        icon: { name: 'lock-closed', size: 28, strokeWidth: 1 },
        label: 'Segurança 24h',
      },
      commonAreas: {
        icon: { name: 'playground', size: 28, strokeWidth: 2 },
        label: 'Áreas comuns',
      },
    },
    nearby: {
      restaurant: {
        icon: { name: 'dish', size: 26, strokeWidth: 12 },
        label: 'Restaurante',
      },
      school: {
        icon: { name: 'academic-cap', size: 28, strokeWidth: 1 },
        label: 'Escola',
      },
      hospital: {
        icon: { name: 'hospital', size: 24, strokeWidth: 0 },
        label: 'Hospital',
      },
      supermarket: {
        icon: { name: 'store', size: 28, strokeWidth: 1 },
        label: 'Supermercado',
      },
      drugstore: {
        icon: { name: 'pharmacy', size: 26, strokeWidth: 2 },
        label: 'Farmácia',
      },
      gasStation: {
        icon: { name: 'gas-station', size: 30, strokeWidth: 6 },
        label: 'Posto de Gasolina',
      },
      bank: {
        icon: { name: 'bank', size: 28, strokeWidth: 1.2 },
        label: 'Banco',
      },
      publicTransportation: {
        icon: { name: 'bus', size: 24, strokeWidth: 1 },
        label: 'Transporte público',
      },
    },
  };

  const titles: Record<string, string> = {
    whatHas: 'Informações sobre o terreno',
    condominiumStatus: 'O que o condomínio possui',
    nearby: 'O que existe nas proximidades',
  };

  const result: IInfoSection[] = [];

  Object.entries(dataInfos).map(([key, value]) => {
    if (infos[key]) {
      const newInfos: IInfoItem[] = [];

      Object.entries(value).forEach(([subKey, subValue]) => {
        if (typeof infos[key][subKey] === 'boolean') {
          newInfos.push(subValue);
          return;
        }

        if (typeof infos[key][subKey] === 'string') {
          newInfos.push({
            ...subValue,
            label: `${subValue.label}: ${infos[key][subKey]}`,
          });
          return;
        }

        if (Array.isArray(infos[key][subKey])) {
          newInfos.push({
            ...subValue,
            label: `${subValue.label}: ${infos[key][subKey].join(', ')}`,
          });
          return;
        }
      });

      result.push({
        key,
        title: titles[key],
        items: newInfos,
      });
    }
  });

  return result;
};
