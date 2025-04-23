import {
  d as i,
  j as r,
  D as a,
  T as l,
  S as c,
  L as d,
  M as t,
} from './index-CQTkdzCs.js';
import './react-BkpeE5cq.js';
import { u as m } from './index-CLxkvzW5.js';
import './vendor-BgVbXRMM.js';
const h = () => {
  const o = i(8),
    { data: s, isLoading: n } = m({ size: 8 });
  return r.jsxs('div', {
    className: 'mb-16',
    children: [
      r.jsx(a, { space: 'xl' }),
      r.jsx(l, {
        size: '2xl',
        weight: 'bold',
        className: 'mb-6',
        children: 'Encontre terrenos similares',
      }),
      r.jsxs('div', {
        className:
          'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6',
        children: [
          n &&
            !s &&
            (o == null ? void 0 : o.map((e) => r.jsx(c, { name: 'card' }, e))),
          !n &&
            !!s &&
            (s == null ? void 0 : s.length) > 0 &&
            (s == null
              ? void 0
              : s.map((e) => r.jsx(d, { ...e }, e == null ? void 0 : e.id))),
        ],
      }),
      !n &&
        !s &&
        r.jsx(t, {
          title: 'Infelizmente não encontramos terrenos perto de você',
        }),
    ],
  });
};
export { h as Similars };
