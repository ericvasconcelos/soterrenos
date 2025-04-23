import {
  o as V,
  j as e,
  C as F,
  g as M,
  T as a,
  f as b,
  I as r,
  F as i,
  a as c,
  b as q,
  c as R,
  B as T,
} from './index-CQTkdzCs.js';
import { r as d } from './react-BkpeE5cq.js';
import { u as W, c as A, f as n } from './vendor-BgVbXRMM.js';
const B = /^\(\d{2}\) \d{5}-\d{4}$/,
  O = [
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '21',
    '22',
    '24',
    '27',
    '28',
    '31',
    '32',
    '33',
    '34',
    '35',
    '37',
    '38',
    '41',
    '42',
    '43',
    '44',
    '45',
    '46',
    '47',
    '48',
    '49',
    '51',
    '53',
    '54',
    '55',
    '61',
    '62',
    '63',
    '64',
    '65',
    '66',
    '67',
    '68',
    '69',
    '71',
    '73',
    '74',
    '75',
    '77',
    '79',
    '81',
    '82',
    '83',
    '84',
    '85',
    '86',
    '87',
    '88',
    '89',
    '91',
    '92',
    '93',
    '94',
    '95',
    '96',
    '97',
    '98',
    '99',
  ],
  L = new RegExp(`^\\((${O.join('|')})\\)`),
  m = 'Preencha este campo',
  N = 'Você atingiu o limite de 500 caracteres',
  G = A().shape({
    name: n().required(m).min(2, 'Precisamos do seu nome').max(500, N),
    phoneNumber: n()
      .required(m)
      .matches(L, 'Código de DDD inválido')
      .matches(B, 'Número do celular inválido'),
    email: n()
      .required(m)
      .email('O e-mail deve seguir o formato: exemplo@email.com')
      .max(500, 'O e-mail deve ter no máximo 500 caracteres'),
    message: n().required(m).min(10, 'Deixe uma mensagem').max(500, N),
  }),
  H = () => {
    const l = V(G);
    return W({
      resolver: l,
      mode: 'onBlur',
      reValidateMode: 'onChange',
      defaultValues: { name: '', email: '', phoneNumber: '', message: '' },
    });
  },
  U = ({
    type: l,
    personalFirstName: j,
    personalLastName: f,
    tradeName: w,
    phoneNumber: v,
    whatsappNumber: h,
    email: C,
    creci: u,
    creciState: S,
    profileImage: s,
  }) => {
    const {
        control: o,
        handleSubmit: E,
        formState: { isValid: k },
      } = H(),
      [x, z] = d.useState(!1),
      [p, $] = d.useState(!1),
      y = d.useCallback(
        (t) => {
          window.open(
            `https://api.whatsapp.com/send/?phone=55${h}&text=${t.message}%0ANome: ${t.name}%0AEmail: ${t.email}%0ATelefone: ${t.phoneNumber}`
          );
        },
        [h]
      ),
      D = () => {
        z(!0);
      },
      P = () => {
        $(!0);
      },
      g = M({
        type: l,
        personalFirstName: j,
        personalLastName: f,
        tradeName: w,
      });
    return e.jsxs(F, {
      className: 'sticky top-6',
      hasShadow: !0,
      children: [
        e.jsxs('div', {
          className: 'flex md:flex-col lg:flex-row gap-2 mb-6',
          children: [
            (s == null ? void 0 : s.src) &&
              e.jsx('img', {
                src: s.src,
                width: s.width,
                height: s.height,
                alt: s.alt ?? g,
                className: 'w-[106px] h-[106px] object-cover rounded-full',
              }),
            e.jsxs('div', {
              children: [
                e.jsx(a, {
                  weight: 'medium',
                  className: 'mb-1.5',
                  children: g,
                }),
                e.jsxs(a, {
                  size: 'sm',
                  className: 'flex items-center gap-1 mb-1.5',
                  children: [
                    e.jsx(r, { name: 'phone', size: 20, strokeWidth: 1.5 }),
                    b(v.slice(0, x ? 15 : 5)),
                    !x &&
                      e.jsx('button', {
                        className:
                          'text-primary-700 font-medium transition-opacity hover:opacity-80 cursor-pointer',
                        onClick: D,
                        children: 'Ver telefone',
                      }),
                  ],
                }),
                e.jsxs(a, {
                  size: 'sm',
                  className: 'flex items-center gap-1 mb-1.5',
                  children: [
                    e.jsx(r, { name: 'mail', size: 20, strokeWidth: 1.5 }),
                    C.slice(0, p ? 999 : 7),
                    !p &&
                      e.jsx('button', {
                        className:
                          'text-primary-700 font-medium transition-opacity hover:opacity-80 cursor-pointer',
                        onClick: P,
                        children: 'Ver email',
                      }),
                  ],
                }),
                u &&
                  e.jsxs(a, {
                    size: 'sm',
                    className: 'flex items-center gap-1',
                    children: [
                      e.jsx(r, {
                        name: 'identification',
                        size: 20,
                        strokeWidth: 1.5,
                      }),
                      'CRECI: ',
                      u,
                      ' - ',
                      S,
                    ],
                  }),
              ],
            }),
          ],
        }),
        e.jsx(a, {
          size: 'lg',
          weight: 'medium',
          className: 'mb-4',
          children: 'Contate o vendedor via Whatsapp',
        }),
        e.jsxs('form', {
          className: 'grid gap-4',
          onSubmit: E(y),
          children: [
            e.jsx(i, {
              control: o,
              component: c,
              id: 'email',
              type: 'email',
              name: 'email',
              label: 'Email',
              placeholder: 'seuemail@gmail.com',
            }),
            e.jsxs('div', {
              className: 'grid lg:grid-cols-2 gap-4',
              children: [
                e.jsx(i, {
                  control: o,
                  component: c,
                  id: 'name',
                  name: 'name',
                  label: 'Nome',
                  placeholder: 'Nome Sobrenome',
                  filterValue: q,
                }),
                e.jsx(i, {
                  control: o,
                  component: c,
                  id: 'phoneNumber',
                  name: 'phoneNumber',
                  label: 'Celular',
                  placeholder: '(61) 99999-9999',
                  filterValue: b,
                }),
              ],
            }),
            e.jsx(i, {
              control: o,
              component: R,
              id: 'message',
              name: 'message',
              label: 'Mensagem',
              placeholder: 'Deixe sua mensagem para o vendedor',
            }),
            e.jsx(T, {
              isFull: !0,
              size: 'large',
              icon: 'whatsapp',
              disabled: !k,
              children: 'Enviar mensagem',
            }),
          ],
        }),
      ],
    });
  };
export { U as SellersContactForm };
