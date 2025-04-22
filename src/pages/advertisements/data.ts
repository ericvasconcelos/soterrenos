import { ILand } from '@/types';

export const data: ILand = {
  id: '1350198862',
  lastUpdate: '21/02/2025',
  title: 'Park Way Lote/terreno A Venda Quadra 23 Conjunto 3',
  active: true,
  images: [
    {
      id: '4355127664',
      src: '/anuncios/images/4355127664.jpg',
      width: 1200,
      height: 559,
    },
    {
      id: '4355127665',
      src: '/anuncios/images/4355127665.jpg',
      width: 1200,
      height: 559,
    },
    {
      id: '4355127666',
      src: '/anuncios/images/4355127666.jpg',
      width: 1200,
      height: 559,
    },
    {
      id: '4355127668',
      src: '/anuncios/images/4355127668.jpg',
      width: 1200,
      height: 559,
    },
    {
      id: '4355127669',
      src: '/anuncios/images/4355127669.jpg',
      width: 1200,
      height: 559,
    },
    {
      id: '4355127670',
      src: '/anuncios/images/4355127670.jpg',
      width: 1200,
      height: 559,
    },
    {
      id: '4355127671',
      src: '/anuncios/images/4355127671.jpg',
      width: 1200,
      height: 559,
    },
  ],
  address: {
    zipCode: '71936250',
    street: 'Avenida das Araucárias',
    number: '4400',
    complement: 'Bloco C',
    neighborhood: 'Águas Claras',
    city: 'Brasília',
    state: 'DF',
    condominium: 'Via Enseada',
  },
  landSize: {
    front: 10,
    left: 12.5,
    right: 12,
    back: 9,
  },
  price: 100000,
  condominiumTax: 150,
  propertyTax: 200,
  financingAvailable: true,
  fgts: false,
  description: `Executive House Imobiliária vende: lote de 2.500m², com área verde de 2.500m2;
    - Lote de fundo com casa de caseiro;
    - Plano;
    - Com área Verde de 2.500m2;
    - Condomínio com pavimentação;
    -Árvores frutíferas;
    - Escriturado.

    Ligue a qualquer momento e agende uma visita com um de nossos corretores.
  `,
  seller: {
    personalFirstName: 'Eric',
    personalLastName: 'Eric',
    phoneNumber: '2124537062',
    whatsappNumber: '6183595467',
    email: 'ericvascon@gmail.com',
    creci: '12668',
    profileImage: {
      src: '/eric.jpg',
      width: 400,
      height: 400,
    },
  },
  infos: {
    whatHas: {
      hasWater: true,
      hasArtesianWell: true,
      hasSewageSystem: true,
      hasEletricity: true,
      hasGas: true,
      hasInternet: true,
      isFenced: true,
      isLandLeveled: true,
      isLotClear: true,
      soil: 'clay', // 'sandy' or 'rocky',
      slope: 'downhill', // downhill (Below Street Level) or uphill (Above Street Level) or flat
      zoning: 'residential', // 'Commercial' or 'Industrial'
      sunPosition: 'east-facing', // sunrise (east-facing) or sunset (west-facing)
    },
    condominiumStatus: {
      established: true,
      paved: true,
      streetLighting: true,
      sanitationBasic: true,
      sidewalks: true,
      gatedEntrance: true,
      security: true,
      commonAreas: [
        'sports_court',
        'party_hall',
        'gym',
        'swimming_pool',
        'sauna',
        'playground',
      ], //  sports_court(Quadra esportiva) |  party_hall(salão de festas) | gym (Academia) | swimming_pool (piscina) | sauna | playground (parquinho)
    },
    nearby: {
      publicTransportation: ['train', 'subway', 'bus'],
      restaurant: true,
      school: true,
      hospital: true,
      supermarket: true,
      drugstore: true,
      gasStation: true,
      bank: true,
    },
  },
};
