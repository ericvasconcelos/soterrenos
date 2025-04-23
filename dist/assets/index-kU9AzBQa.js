import {
  d as i,
  j as r,
  T as t,
  S as a,
  L as m,
  M as c,
} from './index-CQTkdzCs.js';
import './react-BkpeE5cq.js';
import { u as d } from './index-CLxkvzW5.js';
import './vendor-BgVbXRMM.js';
const j = () => {
  const o = i(8),
    { data: s, isLoading: n } = d({ size: 8 });
  return r.jsxs(r.Fragment, {
    children: [
      r.jsx(t, {
        size: '2xl',
        weight: 'bold',
        className: 'mb-8',
        children: 'Terrenos próximos a você',
      }),
      r.jsxs('div', {
        className:
          'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6',
        children: [
          n &&
            !s &&
            (o == null ? void 0 : o.map((e) => r.jsx(a, { name: 'card' }, e))),
          !n &&
            !!s &&
            (s == null ? void 0 : s.length) > 0 &&
            (s == null ? void 0 : s.map((e) => r.jsx(m, { ...e }, e.id))),
        ],
      }),
      !n &&
        !s &&
        r.jsx(c, {
          title: 'Infelizmente não encontramos terrenos perto de você',
        }),
    ],
  });
};
export { j as Nearby };
