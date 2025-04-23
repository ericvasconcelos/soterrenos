import { u as p, j as s, D as k, T as u, I as g } from './index-CQTkdzCs.js';
import { j as z } from './react-BkpeE5cq.js';
import './vendor-BgVbXRMM.js';
const W = {
    downhill: 'arrow-down-right',
    uphill: 'arrow-up-right',
    flat: 'minus',
  },
  x = (t) => {
    var r;
    if (!t) return [];
    const c = {
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
          soil: {
            icon: { name: 'soil', size: 27, strokeWidth: 0 },
            label: 'Tipo de solo',
          },
          slope: {
            icon: { name: W[t.slope], size: 28, strokeWidth: 1 },
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
      },
      i = {
        whatHas: 'Informações sobre o terreno',
        condominiumStatus: 'O que o condomínio possui',
        nearby: 'O que existe nas proximidades',
      };
    return (r = Object.entries(c)) == null
      ? void 0
      : r.map(([l, o]) => {
          var n, b;
          const e =
            (b =
              (n = Object.entries(o)) == null
                ? void 0
                : n.filter(([m]) => {
                    const a = t[m];
                    return Array.isArray(a)
                      ? (a == null ? void 0 : a.length) > 0
                      : !!a;
                  })) == null
              ? void 0
              : b.map(([m, a]) => {
                  const d = t[m];
                  let h = a == null ? void 0 : a.label;
                  return (
                    typeof d == 'string'
                      ? (h += `: ${d}`)
                      : Array.isArray(d) && (h += `: ${d.join(', ')}`),
                    { ...a, label: h }
                  );
                });
          return { key: l, title: i[l], items: e };
        });
  },
  y = () => {
    const { id: t } = z(),
      { data: c } = p(t),
      i = x(c);
    return s.jsx(s.Fragment, {
      children:
        i == null
          ? void 0
          : i.map(({ key: r, title: l, items: o }) =>
              s.jsxs(
                'div',
                {
                  children: [
                    s.jsx(k, { space: 'xl' }),
                    s.jsx(u, {
                      tag: 'h2',
                      size: 'xl',
                      weight: 'medium',
                      className: 'pt-4 mb-8',
                      children: l,
                    }),
                    s.jsx('ul', {
                      className:
                        'grid grid-cols-2 xl:grid-cols-3 items-stretch justify-start gap-4',
                      children:
                        o == null
                          ? void 0
                          : o.map(({ icon: e, label: n }) =>
                              s.jsxs(
                                'li',
                                {
                                  className:
                                    'grid grid-cols-[32px_auto] items-center gap-2',
                                  children: [
                                    s.jsx(g, {
                                      name: e == null ? void 0 : e.name,
                                      size: e == null ? void 0 : e.size,
                                      strokeWidth:
                                        e == null ? void 0 : e.strokeWidth,
                                    }),
                                    s.jsx(u, { children: n }),
                                  ],
                                },
                                (e == null ? void 0 : e.name) + n
                              )
                            ),
                    }),
                  ],
                },
                r
              )
            ),
    });
  };
export { y as Infos };
