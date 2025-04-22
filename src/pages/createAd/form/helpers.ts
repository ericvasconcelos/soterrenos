import { IImage, ILand } from '@/types';
import { priceFormatter } from '@/utils';

import { ICreateFormData } from './schema';
export const normalizeLand = (land?: ILand): ICreateFormData => ({
  id: land?.id || '',
  title: land?.title || '',
  active: typeof land?.active === 'boolean' ? land?.active : true,
  videoUrl: land?.videoUrl || null,
  images: land?.images ?? [],
  address: {
    zipCode: land?.address?.zipCode || '',
    street: land?.address?.street || '',
    neighborhood: land?.address?.neighborhood || '',
    city: land?.address?.city || '',
    state: land?.address?.state || '',
    condominium: land?.address?.condominium || '',
    number: land?.address?.number || '',
    complement: land?.address?.complement || '',
  },
  landSize: {
    front: land?.landSize?.front || 0,
    left: land?.landSize?.left || 0,
    right: land?.landSize?.right || 0,
    back: land?.landSize?.back || 0,
  },
  price: land?.price ? priceFormatter(land?.price) : '',
  condominiumTax: land?.condominiumTax
    ? priceFormatter(land?.condominiumTax)
    : '',
  propertyTax: land?.propertyTax ? priceFormatter(land?.propertyTax) : '',
  financingAvailable: !!land?.financingAvailable,
  fgts: !!land?.fgts,
  description: land?.description || '',

  hasWater: !!land?.hasWater,
  hasArtesianWell: !!land?.hasArtesianWell,
  hasSewageSystem: !!land?.hasSewageSystem,
  hasEletricity: !!land?.hasEletricity,
  hasGas: !!land?.hasGas,
  hasInternet: !!land?.hasInternet,
  isFenced: !!land?.isFenced,
  isLandLeveled: !!land?.isLandLeveled,
  isLotClear: !!land?.isLotClear,
  soil: land?.soil ?? 'clay',
  slope: land?.slope ?? 'flat',
  zoning: land?.zoning ?? 'residential',
  sunPosition: land?.sunPosition ?? 'east-facing',

  established: !!land?.established,
  paved: !!land?.paved,
  streetLighting: !!land?.streetLighting,
  sanitationBasic: !!land?.sanitationBasic,
  sidewalks: !!land?.sidewalks,
  gatedEntrance: !!land?.gatedEntrance,
  security: !!land?.security,
  commonAreas: land?.commonAreas ?? [],

  restaurant: !!land?.restaurant,
  school: !!land?.school,
  hospital: !!land?.hospital,
  supermarket: !!land?.supermarket,
  drugstore: !!land?.drugstore,
  gasStation: !!land?.gasStation,
  bank: !!land?.bank,
  publicTransportation: land?.publicTransportation ?? [],
});

export const getImagesSplited = (initial: IImage[], current: IImage[]) => {
  const initialMap = new Map<string, IImage>(
    initial.map((img) => [img.src, img])
  );
  const currentMap = new Map<string, IImage>(
    current.map((img) => [img.src, img])
  );

  const storagePrefix = 'https://storage.googleapis.com/';
  const blobPrefix = 'blob:';

  const toUpload = current.filter(
    (img) => img.src.startsWith(blobPrefix) && !initialMap.has(img.src)
  );

  const toDelete = initial.filter(
    (img) => img.src.startsWith(storagePrefix) && !currentMap.has(img.src)
  );

  const unchanged = current.filter(
    (img) => initialMap.has(img.src) && !img.src.startsWith(blobPrefix)
  );

  return { toUpload, toDelete, unchanged };
};

export const extractFileName = (url: string): string => {
  const fileName = url.split('/')[1];
  const onlyName = fileName.split('.')[0];
  return onlyName;
};

export const initialCondominiumInfos = {
  condominiumTax: 0,
  established: false,
  paved: false,
  streetLighting: false,
  sanitationBasic: false,
  sidewalks: false,
  gatedEntrance: false,
  security: false,
  commonAreas: [],
};
