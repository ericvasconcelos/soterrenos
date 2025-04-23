var Bt = Object.defineProperty;
var qt = (e, t, r) =>
  t in e
    ? Bt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (e[t] = r);
var z = (e, t, r) => qt(e, typeof t != 'symbol' ? t + '' : t, r);
function zt(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != 'string' && !Array.isArray(n)) {
      for (const a in n)
        if (a !== 'default' && !(a in e)) {
          const i = Object.getOwnPropertyDescriptor(n, a);
          i &&
            Object.defineProperty(
              e,
              a,
              i.get ? i : { enumerable: !0, get: () => n[a] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
  );
}
var Kn =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof self < 'u'
          ? self
          : {};
function Ee(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
function Vn(e) {
  if (Object.prototype.hasOwnProperty.call(e, '__esModule')) return e;
  var t = e.default;
  if (typeof t == 'function') {
    var r = function n() {
      return this instanceof n
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return (
    Object.defineProperty(r, '__esModule', { value: !0 }),
    Object.keys(e).forEach(function (n) {
      var a = Object.getOwnPropertyDescriptor(e, n);
      Object.defineProperty(
        r,
        n,
        a.get
          ? a
          : {
              enumerable: !0,
              get: function () {
                return e[n];
              },
            }
      );
    }),
    r
  );
}
var Re = { exports: {} },
  x = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ze;
function Wt() {
  if (Ze) return x;
  Ze = 1;
  var e = Symbol.for('react.transitional.element'),
    t = Symbol.for('react.portal'),
    r = Symbol.for('react.fragment'),
    n = Symbol.for('react.strict_mode'),
    a = Symbol.for('react.profiler'),
    i = Symbol.for('react.consumer'),
    u = Symbol.for('react.context'),
    l = Symbol.for('react.forward_ref'),
    s = Symbol.for('react.suspense'),
    o = Symbol.for('react.memo'),
    f = Symbol.for('react.lazy'),
    m = Symbol.iterator;
  function h(c) {
    return c === null || typeof c != 'object'
      ? null
      : ((c = (m && c[m]) || c['@@iterator']),
        typeof c == 'function' ? c : null);
  }
  var v = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    p = Object.assign,
    T = {};
  function E(c, y, R) {
    (this.props = c),
      (this.context = y),
      (this.refs = T),
      (this.updater = R || v);
  }
  (E.prototype.isReactComponent = {}),
    (E.prototype.setState = function (c, y) {
      if (typeof c != 'object' && typeof c != 'function' && c != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, c, y, 'setState');
    }),
    (E.prototype.forceUpdate = function (c) {
      this.updater.enqueueForceUpdate(this, c, 'forceUpdate');
    });
  function g() {}
  g.prototype = E.prototype;
  function C(c, y, R) {
    (this.props = c),
      (this.context = y),
      (this.refs = T),
      (this.updater = R || v);
  }
  var w = (C.prototype = new g());
  (w.constructor = C), p(w, E.prototype), (w.isPureReactComponent = !0);
  var O = Array.isArray,
    b = { H: null, A: null, T: null, S: null, V: null },
    B = Object.prototype.hasOwnProperty;
  function D(c, y, R, S, P, $) {
    return (
      (R = $.ref),
      { $$typeof: e, type: c, key: y, ref: R !== void 0 ? R : null, props: $ }
    );
  }
  function q(c, y) {
    return D(c.type, y, void 0, void 0, void 0, c.props);
  }
  function k(c) {
    return typeof c == 'object' && c !== null && c.$$typeof === e;
  }
  function F(c) {
    var y = { '=': '=0', ':': '=2' };
    return (
      '$' +
      c.replace(/[=:]/g, function (R) {
        return y[R];
      })
    );
  }
  var oe = /\/+/g;
  function Ce(c, y) {
    return typeof c == 'object' && c !== null && c.key != null
      ? F('' + c.key)
      : y.toString(36);
  }
  function Je() {}
  function Nt(c) {
    switch (c.status) {
      case 'fulfilled':
        return c.value;
      case 'rejected':
        throw c.reason;
      default:
        switch (
          (typeof c.status == 'string'
            ? c.then(Je, Je)
            : ((c.status = 'pending'),
              c.then(
                function (y) {
                  c.status === 'pending' &&
                    ((c.status = 'fulfilled'), (c.value = y));
                },
                function (y) {
                  c.status === 'pending' &&
                    ((c.status = 'rejected'), (c.reason = y));
                }
              )),
          c.status)
        ) {
          case 'fulfilled':
            return c.value;
          case 'rejected':
            throw c.reason;
        }
    }
    throw c;
  }
  function X(c, y, R, S, P) {
    var $ = typeof c;
    ($ === 'undefined' || $ === 'boolean') && (c = null);
    var _ = !1;
    if (c === null) _ = !0;
    else
      switch ($) {
        case 'bigint':
        case 'string':
        case 'number':
          _ = !0;
          break;
        case 'object':
          switch (c.$$typeof) {
            case e:
            case t:
              _ = !0;
              break;
            case f:
              return (_ = c._init), X(_(c._payload), y, R, S, P);
          }
      }
    if (_)
      return (
        (P = P(c)),
        (_ = S === '' ? '.' + Ce(c, 0) : S),
        O(P)
          ? ((R = ''),
            _ != null && (R = _.replace(oe, '$&/') + '/'),
            X(P, y, R, '', function (Ft) {
              return Ft;
            }))
          : P != null &&
            (k(P) &&
              (P = q(
                P,
                R +
                  (P.key == null || (c && c.key === P.key)
                    ? ''
                    : ('' + P.key).replace(oe, '$&/') + '/') +
                  _
              )),
            y.push(P)),
        1
      );
    _ = 0;
    var G = S === '' ? '.' : S + ':';
    if (O(c))
      for (var L = 0; L < c.length; L++)
        (S = c[L]), ($ = G + Ce(S, L)), (_ += X(S, y, R, $, P));
    else if (((L = h(c)), typeof L == 'function'))
      for (c = L.call(c), L = 0; !(S = c.next()).done; )
        (S = S.value), ($ = G + Ce(S, L++)), (_ += X(S, y, R, $, P));
    else if ($ === 'object') {
      if (typeof c.then == 'function') return X(Nt(c), y, R, S, P);
      throw (
        ((y = String(c)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (y === '[object Object]'
              ? 'object with keys {' + Object.keys(c).join(', ') + '}'
              : y) +
            '). If you meant to render a collection of children, use an array instead.'
        ))
      );
    }
    return _;
  }
  function de(c, y, R) {
    if (c == null) return c;
    var S = [],
      P = 0;
    return (
      X(c, S, '', '', function ($) {
        return y.call(R, $, P++);
      }),
      S
    );
  }
  function Ut(c) {
    if (c._status === -1) {
      var y = c._result;
      (y = y()),
        y.then(
          function (R) {
            (c._status === 0 || c._status === -1) &&
              ((c._status = 1), (c._result = R));
          },
          function (R) {
            (c._status === 0 || c._status === -1) &&
              ((c._status = 2), (c._result = R));
          }
        ),
        c._status === -1 && ((c._status = 0), (c._result = y));
    }
    if (c._status === 1) return c._result.default;
    throw c._result;
  }
  var Xe =
    typeof reportError == 'function'
      ? reportError
      : function (c) {
          if (
            typeof window == 'object' &&
            typeof window.ErrorEvent == 'function'
          ) {
            var y = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof c == 'object' &&
                c !== null &&
                typeof c.message == 'string'
                  ? String(c.message)
                  : String(c),
              error: c,
            });
            if (!window.dispatchEvent(y)) return;
          } else if (
            typeof process == 'object' &&
            typeof process.emit == 'function'
          ) {
            process.emit('uncaughtException', c);
            return;
          }
          console.error(c);
        };
  function jt() {}
  return (
    (x.Children = {
      map: de,
      forEach: function (c, y, R) {
        de(
          c,
          function () {
            y.apply(this, arguments);
          },
          R
        );
      },
      count: function (c) {
        var y = 0;
        return (
          de(c, function () {
            y++;
          }),
          y
        );
      },
      toArray: function (c) {
        return (
          de(c, function (y) {
            return y;
          }) || []
        );
      },
      only: function (c) {
        if (!k(c))
          throw Error(
            'React.Children.only expected to receive a single React element child.'
          );
        return c;
      },
    }),
    (x.Component = E),
    (x.Fragment = r),
    (x.Profiler = a),
    (x.PureComponent = C),
    (x.StrictMode = n),
    (x.Suspense = s),
    (x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = b),
    (x.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (c) {
        return b.H.useMemoCache(c);
      },
    }),
    (x.cache = function (c) {
      return function () {
        return c.apply(null, arguments);
      };
    }),
    (x.cloneElement = function (c, y, R) {
      if (c == null)
        throw Error(
          'The argument must be a React element, but you passed ' + c + '.'
        );
      var S = p({}, c.props),
        P = c.key,
        $ = void 0;
      if (y != null)
        for (_ in (y.ref !== void 0 && ($ = void 0),
        y.key !== void 0 && (P = '' + y.key),
        y))
          !B.call(y, _) ||
            _ === 'key' ||
            _ === '__self' ||
            _ === '__source' ||
            (_ === 'ref' && y.ref === void 0) ||
            (S[_] = y[_]);
      var _ = arguments.length - 2;
      if (_ === 1) S.children = R;
      else if (1 < _) {
        for (var G = Array(_), L = 0; L < _; L++) G[L] = arguments[L + 2];
        S.children = G;
      }
      return D(c.type, P, void 0, void 0, $, S);
    }),
    (x.createContext = function (c) {
      return (
        (c = {
          $$typeof: u,
          _currentValue: c,
          _currentValue2: c,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (c.Provider = c),
        (c.Consumer = { $$typeof: i, _context: c }),
        c
      );
    }),
    (x.createElement = function (c, y, R) {
      var S,
        P = {},
        $ = null;
      if (y != null)
        for (S in (y.key !== void 0 && ($ = '' + y.key), y))
          B.call(y, S) &&
            S !== 'key' &&
            S !== '__self' &&
            S !== '__source' &&
            (P[S] = y[S]);
      var _ = arguments.length - 2;
      if (_ === 1) P.children = R;
      else if (1 < _) {
        for (var G = Array(_), L = 0; L < _; L++) G[L] = arguments[L + 2];
        P.children = G;
      }
      if (c && c.defaultProps)
        for (S in ((_ = c.defaultProps), _)) P[S] === void 0 && (P[S] = _[S]);
      return D(c, $, void 0, void 0, null, P);
    }),
    (x.createRef = function () {
      return { current: null };
    }),
    (x.forwardRef = function (c) {
      return { $$typeof: l, render: c };
    }),
    (x.isValidElement = k),
    (x.lazy = function (c) {
      return { $$typeof: f, _payload: { _status: -1, _result: c }, _init: Ut };
    }),
    (x.memo = function (c, y) {
      return { $$typeof: o, type: c, compare: y === void 0 ? null : y };
    }),
    (x.startTransition = function (c) {
      var y = b.T,
        R = {};
      b.T = R;
      try {
        var S = c(),
          P = b.S;
        P !== null && P(R, S),
          typeof S == 'object' &&
            S !== null &&
            typeof S.then == 'function' &&
            S.then(jt, Xe);
      } catch ($) {
        Xe($);
      } finally {
        b.T = y;
      }
    }),
    (x.unstable_useCacheRefresh = function () {
      return b.H.useCacheRefresh();
    }),
    (x.use = function (c) {
      return b.H.use(c);
    }),
    (x.useActionState = function (c, y, R) {
      return b.H.useActionState(c, y, R);
    }),
    (x.useCallback = function (c, y) {
      return b.H.useCallback(c, y);
    }),
    (x.useContext = function (c) {
      return b.H.useContext(c);
    }),
    (x.useDebugValue = function () {}),
    (x.useDeferredValue = function (c, y) {
      return b.H.useDeferredValue(c, y);
    }),
    (x.useEffect = function (c, y, R) {
      var S = b.H;
      if (typeof R == 'function')
        throw Error(
          'useEffect CRUD overload is not enabled in this build of React.'
        );
      return S.useEffect(c, y);
    }),
    (x.useId = function () {
      return b.H.useId();
    }),
    (x.useImperativeHandle = function (c, y, R) {
      return b.H.useImperativeHandle(c, y, R);
    }),
    (x.useInsertionEffect = function (c, y) {
      return b.H.useInsertionEffect(c, y);
    }),
    (x.useLayoutEffect = function (c, y) {
      return b.H.useLayoutEffect(c, y);
    }),
    (x.useMemo = function (c, y) {
      return b.H.useMemo(c, y);
    }),
    (x.useOptimistic = function (c, y) {
      return b.H.useOptimistic(c, y);
    }),
    (x.useReducer = function (c, y, R) {
      return b.H.useReducer(c, y, R);
    }),
    (x.useRef = function (c) {
      return b.H.useRef(c);
    }),
    (x.useState = function (c) {
      return b.H.useState(c);
    }),
    (x.useSyncExternalStore = function (c, y, R) {
      return b.H.useSyncExternalStore(c, y, R);
    }),
    (x.useTransition = function () {
      return b.H.useTransition();
    }),
    (x.version = '19.1.0'),
    x
  );
}
var Qe;
function yt() {
  return Qe || ((Qe = 1), (Re.exports = Wt())), Re.exports;
}
var d = yt();
const W = Ee(d),
  Gn = zt({ __proto__: null, default: W }, [d]);
var Se = { exports: {} },
  I = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var et;
function Yt() {
  if (et) return I;
  et = 1;
  var e = yt();
  function t(s) {
    var o = 'https://react.dev/errors/' + s;
    if (1 < arguments.length) {
      o += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var f = 2; f < arguments.length; f++)
        o += '&args[]=' + encodeURIComponent(arguments[f]);
    }
    return (
      'Minified React error #' +
      s +
      '; visit ' +
      o +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function r() {}
  var n = {
      d: {
        f: r,
        r: function () {
          throw Error(t(522));
        },
        D: r,
        C: r,
        L: r,
        m: r,
        X: r,
        S: r,
        M: r,
      },
      p: 0,
      findDOMNode: null,
    },
    a = Symbol.for('react.portal');
  function i(s, o, f) {
    var m =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: a,
      key: m == null ? null : '' + m,
      children: s,
      containerInfo: o,
      implementation: f,
    };
  }
  var u = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function l(s, o) {
    if (s === 'font') return '';
    if (typeof o == 'string') return o === 'use-credentials' ? o : '';
  }
  return (
    (I.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = n),
    (I.createPortal = function (s, o) {
      var f =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!o || (o.nodeType !== 1 && o.nodeType !== 9 && o.nodeType !== 11))
        throw Error(t(299));
      return i(s, o, null, f);
    }),
    (I.flushSync = function (s) {
      var o = u.T,
        f = n.p;
      try {
        if (((u.T = null), (n.p = 2), s)) return s();
      } finally {
        (u.T = o), (n.p = f), n.d.f();
      }
    }),
    (I.preconnect = function (s, o) {
      typeof s == 'string' &&
        (o
          ? ((o = o.crossOrigin),
            (o =
              typeof o == 'string'
                ? o === 'use-credentials'
                  ? o
                  : ''
                : void 0))
          : (o = null),
        n.d.C(s, o));
    }),
    (I.prefetchDNS = function (s) {
      typeof s == 'string' && n.d.D(s);
    }),
    (I.preinit = function (s, o) {
      if (typeof s == 'string' && o && typeof o.as == 'string') {
        var f = o.as,
          m = l(f, o.crossOrigin),
          h = typeof o.integrity == 'string' ? o.integrity : void 0,
          v = typeof o.fetchPriority == 'string' ? o.fetchPriority : void 0;
        f === 'style'
          ? n.d.S(s, typeof o.precedence == 'string' ? o.precedence : void 0, {
              crossOrigin: m,
              integrity: h,
              fetchPriority: v,
            })
          : f === 'script' &&
            n.d.X(s, {
              crossOrigin: m,
              integrity: h,
              fetchPriority: v,
              nonce: typeof o.nonce == 'string' ? o.nonce : void 0,
            });
      }
    }),
    (I.preinitModule = function (s, o) {
      if (typeof s == 'string')
        if (typeof o == 'object' && o !== null) {
          if (o.as == null || o.as === 'script') {
            var f = l(o.as, o.crossOrigin);
            n.d.M(s, {
              crossOrigin: f,
              integrity: typeof o.integrity == 'string' ? o.integrity : void 0,
              nonce: typeof o.nonce == 'string' ? o.nonce : void 0,
            });
          }
        } else o == null && n.d.M(s);
    }),
    (I.preload = function (s, o) {
      if (
        typeof s == 'string' &&
        typeof o == 'object' &&
        o !== null &&
        typeof o.as == 'string'
      ) {
        var f = o.as,
          m = l(f, o.crossOrigin);
        n.d.L(s, f, {
          crossOrigin: m,
          integrity: typeof o.integrity == 'string' ? o.integrity : void 0,
          nonce: typeof o.nonce == 'string' ? o.nonce : void 0,
          type: typeof o.type == 'string' ? o.type : void 0,
          fetchPriority:
            typeof o.fetchPriority == 'string' ? o.fetchPriority : void 0,
          referrerPolicy:
            typeof o.referrerPolicy == 'string' ? o.referrerPolicy : void 0,
          imageSrcSet:
            typeof o.imageSrcSet == 'string' ? o.imageSrcSet : void 0,
          imageSizes: typeof o.imageSizes == 'string' ? o.imageSizes : void 0,
          media: typeof o.media == 'string' ? o.media : void 0,
        });
      }
    }),
    (I.preloadModule = function (s, o) {
      if (typeof s == 'string')
        if (o) {
          var f = l(o.as, o.crossOrigin);
          n.d.m(s, {
            as: typeof o.as == 'string' && o.as !== 'script' ? o.as : void 0,
            crossOrigin: f,
            integrity: typeof o.integrity == 'string' ? o.integrity : void 0,
          });
        } else n.d.m(s);
    }),
    (I.requestFormReset = function (s) {
      n.d.r(s);
    }),
    (I.unstable_batchedUpdates = function (s, o) {
      return s(o);
    }),
    (I.useFormState = function (s, o, f) {
      return u.H.useFormState(s, o, f);
    }),
    (I.useFormStatus = function () {
      return u.H.useHostTransitionStatus();
    }),
    (I.version = '19.1.0'),
    I
  );
}
var tt;
function Jn() {
  if (tt) return Se.exports;
  tt = 1;
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
  }
  return e(), (Se.exports = Yt()), Se.exports;
}
var xe, rt;
function Kt() {
  if (rt) return xe;
  rt = 1;
  var e = typeof Element < 'u',
    t = typeof Map == 'function',
    r = typeof Set == 'function',
    n = typeof ArrayBuffer == 'function' && !!ArrayBuffer.isView;
  function a(i, u) {
    if (i === u) return !0;
    if (i && u && typeof i == 'object' && typeof u == 'object') {
      if (i.constructor !== u.constructor) return !1;
      var l, s, o;
      if (Array.isArray(i)) {
        if (((l = i.length), l != u.length)) return !1;
        for (s = l; s-- !== 0; ) if (!a(i[s], u[s])) return !1;
        return !0;
      }
      var f;
      if (t && i instanceof Map && u instanceof Map) {
        if (i.size !== u.size) return !1;
        for (f = i.entries(); !(s = f.next()).done; )
          if (!u.has(s.value[0])) return !1;
        for (f = i.entries(); !(s = f.next()).done; )
          if (!a(s.value[1], u.get(s.value[0]))) return !1;
        return !0;
      }
      if (r && i instanceof Set && u instanceof Set) {
        if (i.size !== u.size) return !1;
        for (f = i.entries(); !(s = f.next()).done; )
          if (!u.has(s.value[0])) return !1;
        return !0;
      }
      if (n && ArrayBuffer.isView(i) && ArrayBuffer.isView(u)) {
        if (((l = i.length), l != u.length)) return !1;
        for (s = l; s-- !== 0; ) if (i[s] !== u[s]) return !1;
        return !0;
      }
      if (i.constructor === RegExp)
        return i.source === u.source && i.flags === u.flags;
      if (
        i.valueOf !== Object.prototype.valueOf &&
        typeof i.valueOf == 'function' &&
        typeof u.valueOf == 'function'
      )
        return i.valueOf() === u.valueOf();
      if (
        i.toString !== Object.prototype.toString &&
        typeof i.toString == 'function' &&
        typeof u.toString == 'function'
      )
        return i.toString() === u.toString();
      if (((o = Object.keys(i)), (l = o.length), l !== Object.keys(u).length))
        return !1;
      for (s = l; s-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(u, o[s])) return !1;
      if (e && i instanceof Element) return !1;
      for (s = l; s-- !== 0; )
        if (
          !(
            (o[s] === '_owner' || o[s] === '__v' || o[s] === '__o') &&
            i.$$typeof
          ) &&
          !a(i[o[s]], u[o[s]])
        )
          return !1;
      return !0;
    }
    return i !== i && u !== u;
  }
  return (
    (xe = function (u, l) {
      try {
        return a(u, l);
      } catch (s) {
        if ((s.message || '').match(/stack|recursion/i))
          return (
            console.warn('react-fast-compare cannot handle circular refs'), !1
          );
        throw s;
      }
    }),
    xe
  );
}
var Vt = Kt();
const Gt = Ee(Vt);
var be, nt;
function Jt() {
  if (nt) return be;
  nt = 1;
  var e = function (t, r, n, a, i, u, l, s) {
    if (!t) {
      var o;
      if (r === void 0)
        o = new Error(
          'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
        );
      else {
        var f = [n, a, i, u, l, s],
          m = 0;
        (o = new Error(
          r.replace(/%s/g, function () {
            return f[m++];
          })
        )),
          (o.name = 'Invariant Violation');
      }
      throw ((o.framesToPop = 1), o);
    }
  };
  return (be = e), be;
}
var Xt = Jt();
const at = Ee(Xt);
var _e, ot;
function Zt() {
  return (
    ot ||
      ((ot = 1),
      (_e = function (t, r, n, a) {
        var i = n ? n.call(a, t, r) : void 0;
        if (i !== void 0) return !!i;
        if (t === r) return !0;
        if (typeof t != 'object' || !t || typeof r != 'object' || !r) return !1;
        var u = Object.keys(t),
          l = Object.keys(r);
        if (u.length !== l.length) return !1;
        for (
          var s = Object.prototype.hasOwnProperty.bind(r), o = 0;
          o < u.length;
          o++
        ) {
          var f = u[o];
          if (!s(f)) return !1;
          var m = t[f],
            h = r[f];
          if (
            ((i = n ? n.call(a, m, h, f) : void 0),
            i === !1 || (i === void 0 && m !== h))
          )
            return !1;
        }
        return !0;
      })),
    _e
  );
}
var Qt = Zt();
const er = Ee(Qt);
var gt = ((e) => (
    (e.BASE = 'base'),
    (e.BODY = 'body'),
    (e.HEAD = 'head'),
    (e.HTML = 'html'),
    (e.LINK = 'link'),
    (e.META = 'meta'),
    (e.NOSCRIPT = 'noscript'),
    (e.SCRIPT = 'script'),
    (e.STYLE = 'style'),
    (e.TITLE = 'title'),
    (e.FRAGMENT = 'Symbol(react.fragment)'),
    e
  ))(gt || {}),
  Pe = {
    link: { rel: ['amphtml', 'canonical', 'alternate'] },
    script: { type: ['application/ld+json'] },
    meta: {
      charset: '',
      name: ['generator', 'robots', 'description'],
      property: [
        'og:type',
        'og:title',
        'og:url',
        'og:image',
        'og:image:alt',
        'og:description',
        'twitter:url',
        'twitter:title',
        'twitter:description',
        'twitter:image',
        'twitter:image:alt',
        'twitter:card',
        'twitter:site',
      ],
    },
  },
  it = Object.values(gt),
  Fe = {
    accesskey: 'accessKey',
    charset: 'charSet',
    class: 'className',
    contenteditable: 'contentEditable',
    contextmenu: 'contextMenu',
    'http-equiv': 'httpEquiv',
    itemprop: 'itemProp',
    tabindex: 'tabIndex',
  },
  tr = Object.entries(Fe).reduce((e, [t, r]) => ((e[r] = t), e), {}),
  U = 'data-rh',
  Q = {
    DEFAULT_TITLE: 'defaultTitle',
    DEFER: 'defer',
    ENCODE_SPECIAL_CHARACTERS: 'encodeSpecialCharacters',
    ON_CHANGE_CLIENT_STATE: 'onChangeClientState',
    TITLE_TEMPLATE: 'titleTemplate',
    PRIORITIZE_SEO_TAGS: 'prioritizeSeoTags',
  },
  ee = (e, t) => {
    for (let r = e.length - 1; r >= 0; r -= 1) {
      const n = e[r];
      if (Object.prototype.hasOwnProperty.call(n, t)) return n[t];
    }
    return null;
  },
  rr = (e) => {
    let t = ee(e, 'title');
    const r = ee(e, Q.TITLE_TEMPLATE);
    if ((Array.isArray(t) && (t = t.join('')), r && t))
      return r.replace(/%s/g, () => t);
    const n = ee(e, Q.DEFAULT_TITLE);
    return t || n || void 0;
  },
  nr = (e) => ee(e, Q.ON_CHANGE_CLIENT_STATE) || (() => {}),
  Oe = (e, t) =>
    t
      .filter((r) => typeof r[e] < 'u')
      .map((r) => r[e])
      .reduce((r, n) => ({ ...r, ...n }), {}),
  ar = (e, t) =>
    t
      .filter((r) => typeof r.base < 'u')
      .map((r) => r.base)
      .reverse()
      .reduce((r, n) => {
        if (!r.length) {
          const a = Object.keys(n);
          for (let i = 0; i < a.length; i += 1) {
            const l = a[i].toLowerCase();
            if (e.indexOf(l) !== -1 && n[l]) return r.concat(n);
          }
        }
        return r;
      }, []),
  or = (e) => console && typeof console.warn == 'function' && console.warn(e),
  ie = (e, t, r) => {
    const n = {};
    return r
      .filter((a) =>
        Array.isArray(a[e])
          ? !0
          : (typeof a[e] < 'u' &&
              or(
                `Helmet: ${e} should be of type "Array". Instead found type "${typeof a[e]}"`
              ),
            !1)
      )
      .map((a) => a[e])
      .reverse()
      .reduce((a, i) => {
        const u = {};
        i.filter((s) => {
          let o;
          const f = Object.keys(s);
          for (let h = 0; h < f.length; h += 1) {
            const v = f[h],
              p = v.toLowerCase();
            t.indexOf(p) !== -1 &&
              !(o === 'rel' && s[o].toLowerCase() === 'canonical') &&
              !(p === 'rel' && s[p].toLowerCase() === 'stylesheet') &&
              (o = p),
              t.indexOf(v) !== -1 &&
                (v === 'innerHTML' || v === 'cssText' || v === 'itemprop') &&
                (o = v);
          }
          if (!o || !s[o]) return !1;
          const m = s[o].toLowerCase();
          return (
            n[o] || (n[o] = {}),
            u[o] || (u[o] = {}),
            n[o][m] ? !1 : ((u[o][m] = !0), !0)
          );
        })
          .reverse()
          .forEach((s) => a.push(s));
        const l = Object.keys(u);
        for (let s = 0; s < l.length; s += 1) {
          const o = l[s],
            f = { ...n[o], ...u[o] };
          n[o] = f;
        }
        return a;
      }, [])
      .reverse();
  },
  ir = (e, t) => {
    if (Array.isArray(e) && e.length) {
      for (let r = 0; r < e.length; r += 1) if (e[r][t]) return !0;
    }
    return !1;
  },
  sr = (e) => ({
    baseTag: ar(['href'], e),
    bodyAttributes: Oe('bodyAttributes', e),
    defer: ee(e, Q.DEFER),
    encode: ee(e, Q.ENCODE_SPECIAL_CHARACTERS),
    htmlAttributes: Oe('htmlAttributes', e),
    linkTags: ie('link', ['rel', 'href'], e),
    metaTags: ie(
      'meta',
      ['name', 'charset', 'http-equiv', 'property', 'itemprop'],
      e
    ),
    noscriptTags: ie('noscript', ['innerHTML'], e),
    onChangeClientState: nr(e),
    scriptTags: ie('script', ['src', 'innerHTML'], e),
    styleTags: ie('style', ['cssText'], e),
    title: rr(e),
    titleAttributes: Oe('titleAttributes', e),
    prioritizeSeoTags: ir(e, Q.PRIORITIZE_SEO_TAGS),
  }),
  vt = (e) => (Array.isArray(e) ? e.join('') : e),
  ur = (e, t) => {
    const r = Object.keys(e);
    for (let n = 0; n < r.length; n += 1)
      if (t[r[n]] && t[r[n]].includes(e[r[n]])) return !0;
    return !1;
  },
  Ae = (e, t) =>
    Array.isArray(e)
      ? e.reduce(
          (r, n) => (ur(n, t) ? r.priority.push(n) : r.default.push(n), r),
          { priority: [], default: [] }
        )
      : { default: e, priority: [] },
  st = (e, t) => ({ ...e, [t]: void 0 }),
  lr = ['noscript', 'script', 'style'],
  Ie = (e, t = !0) =>
    t === !1
      ? String(e)
      : String(e)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#x27;'),
  Et = (e) =>
    Object.keys(e).reduce((t, r) => {
      const n = typeof e[r] < 'u' ? `${r}="${e[r]}"` : `${r}`;
      return t ? `${t} ${n}` : n;
    }, ''),
  cr = (e, t, r, n) => {
    const a = Et(r),
      i = vt(t);
    return a
      ? `<${e} ${U}="true" ${a}>${Ie(i, n)}</${e}>`
      : `<${e} ${U}="true">${Ie(i, n)}</${e}>`;
  },
  fr = (e, t, r = !0) =>
    t.reduce((n, a) => {
      const i = a,
        u = Object.keys(i)
          .filter((o) => !(o === 'innerHTML' || o === 'cssText'))
          .reduce((o, f) => {
            const m = typeof i[f] > 'u' ? f : `${f}="${Ie(i[f], r)}"`;
            return o ? `${o} ${m}` : m;
          }, ''),
        l = i.innerHTML || i.cssText || '',
        s = lr.indexOf(e) === -1;
      return `${n}<${e} ${U}="true" ${u}${s ? '/>' : `>${l}</${e}>`}`;
    }, ''),
  wt = (e, t = {}) =>
    Object.keys(e).reduce((r, n) => {
      const a = Fe[n];
      return (r[a || n] = e[n]), r;
    }, t),
  dr = (e, t, r) => {
    const n = { key: t, [U]: !0 },
      a = wt(r, n);
    return [W.createElement('title', a, t)];
  },
  me = (e, t) =>
    t.map((r, n) => {
      const a = { key: n, [U]: !0 };
      return (
        Object.keys(r).forEach((i) => {
          const l = Fe[i] || i;
          if (l === 'innerHTML' || l === 'cssText') {
            const s = r.innerHTML || r.cssText;
            a.dangerouslySetInnerHTML = { __html: s };
          } else a[l] = r[i];
        }),
        W.createElement(e, a)
      );
    }),
  M = (e, t, r = !0) => {
    switch (e) {
      case 'title':
        return {
          toComponent: () => dr(e, t.title, t.titleAttributes),
          toString: () => cr(e, t.title, t.titleAttributes, r),
        };
      case 'bodyAttributes':
      case 'htmlAttributes':
        return { toComponent: () => wt(t), toString: () => Et(t) };
      default:
        return { toComponent: () => me(e, t), toString: () => fr(e, t, r) };
    }
  },
  pr = ({ metaTags: e, linkTags: t, scriptTags: r, encode: n }) => {
    const a = Ae(e, Pe.meta),
      i = Ae(t, Pe.link),
      u = Ae(r, Pe.script);
    return {
      priorityMethods: {
        toComponent: () => [
          ...me('meta', a.priority),
          ...me('link', i.priority),
          ...me('script', u.priority),
        ],
        toString: () =>
          `${M('meta', a.priority, n)} ${M('link', i.priority, n)} ${M('script', u.priority, n)}`,
      },
      metaTags: a.default,
      linkTags: i.default,
      scriptTags: u.default,
    };
  },
  hr = (e) => {
    const {
      baseTag: t,
      bodyAttributes: r,
      encode: n = !0,
      htmlAttributes: a,
      noscriptTags: i,
      styleTags: u,
      title: l = '',
      titleAttributes: s,
      prioritizeSeoTags: o,
    } = e;
    let { linkTags: f, metaTags: m, scriptTags: h } = e,
      v = { toComponent: () => {}, toString: () => '' };
    return (
      o &&
        ({
          priorityMethods: v,
          linkTags: f,
          metaTags: m,
          scriptTags: h,
        } = pr(e)),
      {
        priority: v,
        base: M('base', t, n),
        bodyAttributes: M('bodyAttributes', r, n),
        htmlAttributes: M('htmlAttributes', a, n),
        link: M('link', f, n),
        meta: M('meta', m, n),
        noscript: M('noscript', i, n),
        script: M('script', h, n),
        style: M('style', u, n),
        title: M('title', { title: l, titleAttributes: s }, n),
      }
    );
  },
  De = hr,
  pe = [],
  Tt = !!(
    typeof window < 'u' &&
    window.document &&
    window.document.createElement
  ),
  Me = class {
    constructor(e, t) {
      z(this, 'instances', []);
      z(this, 'canUseDOM', Tt);
      z(this, 'context');
      z(this, 'value', {
        setHelmet: (e) => {
          this.context.helmet = e;
        },
        helmetInstances: {
          get: () => (this.canUseDOM ? pe : this.instances),
          add: (e) => {
            (this.canUseDOM ? pe : this.instances).push(e);
          },
          remove: (e) => {
            const t = (this.canUseDOM ? pe : this.instances).indexOf(e);
            (this.canUseDOM ? pe : this.instances).splice(t, 1);
          },
        },
      });
      (this.context = e),
        (this.canUseDOM = t || !1),
        t ||
          (e.helmet = De({
            baseTag: [],
            bodyAttributes: {},
            htmlAttributes: {},
            linkTags: [],
            metaTags: [],
            noscriptTags: [],
            scriptTags: [],
            styleTags: [],
            title: '',
            titleAttributes: {},
          }));
    }
  },
  mr = {},
  Ct = W.createContext(mr),
  J,
  yr =
    ((J = class extends d.Component {
      constructor(r) {
        super(r);
        z(this, 'helmetData');
        this.helmetData = new Me(this.props.context || {}, J.canUseDOM);
      }
      render() {
        return W.createElement(
          Ct.Provider,
          { value: this.helmetData.value },
          this.props.children
        );
      }
    }),
    z(J, 'canUseDOM', Tt),
    J),
  Z = (e, t) => {
    const r = document.head || document.querySelector('head'),
      n = r.querySelectorAll(`${e}[${U}]`),
      a = [].slice.call(n),
      i = [];
    let u;
    return (
      t &&
        t.length &&
        t.forEach((l) => {
          const s = document.createElement(e);
          for (const o in l)
            if (Object.prototype.hasOwnProperty.call(l, o))
              if (o === 'innerHTML') s.innerHTML = l.innerHTML;
              else if (o === 'cssText')
                s.styleSheet
                  ? (s.styleSheet.cssText = l.cssText)
                  : s.appendChild(document.createTextNode(l.cssText));
              else {
                const f = o,
                  m = typeof l[f] > 'u' ? '' : l[f];
                s.setAttribute(o, m);
              }
          s.setAttribute(U, 'true'),
            a.some((o, f) => ((u = f), s.isEqualNode(o)))
              ? a.splice(u, 1)
              : i.push(s);
        }),
      a.forEach((l) => {
        var s;
        return (s = l.parentNode) == null ? void 0 : s.removeChild(l);
      }),
      i.forEach((l) => r.appendChild(l)),
      { oldTags: a, newTags: i }
    );
  },
  He = (e, t) => {
    const r = document.getElementsByTagName(e)[0];
    if (!r) return;
    const n = r.getAttribute(U),
      a = n ? n.split(',') : [],
      i = [...a],
      u = Object.keys(t);
    for (const l of u) {
      const s = t[l] || '';
      r.getAttribute(l) !== s && r.setAttribute(l, s),
        a.indexOf(l) === -1 && a.push(l);
      const o = i.indexOf(l);
      o !== -1 && i.splice(o, 1);
    }
    for (let l = i.length - 1; l >= 0; l -= 1) r.removeAttribute(i[l]);
    a.length === i.length
      ? r.removeAttribute(U)
      : r.getAttribute(U) !== u.join(',') && r.setAttribute(U, u.join(','));
  },
  gr = (e, t) => {
    typeof e < 'u' && document.title !== e && (document.title = vt(e)),
      He('title', t);
  },
  ut = (e, t) => {
    const {
      baseTag: r,
      bodyAttributes: n,
      htmlAttributes: a,
      linkTags: i,
      metaTags: u,
      noscriptTags: l,
      onChangeClientState: s,
      scriptTags: o,
      styleTags: f,
      title: m,
      titleAttributes: h,
    } = e;
    He('body', n), He('html', a), gr(m, h);
    const v = {
        baseTag: Z('base', r),
        linkTags: Z('link', i),
        metaTags: Z('meta', u),
        noscriptTags: Z('noscript', l),
        scriptTags: Z('script', o),
        styleTags: Z('style', f),
      },
      p = {},
      T = {};
    Object.keys(v).forEach((E) => {
      const { newTags: g, oldTags: C } = v[E];
      g.length && (p[E] = g), C.length && (T[E] = v[E].oldTags);
    }),
      t && t(),
      s(e, p, T);
  },
  se = null,
  vr = (e) => {
    se && cancelAnimationFrame(se),
      e.defer
        ? (se = requestAnimationFrame(() => {
            ut(e, () => {
              se = null;
            });
          }))
        : (ut(e), (se = null));
  },
  Er = vr,
  lt = class extends d.Component {
    constructor() {
      super(...arguments);
      z(this, 'rendered', !1);
    }
    shouldComponentUpdate(t) {
      return !er(t, this.props);
    }
    componentDidUpdate() {
      this.emitChange();
    }
    componentWillUnmount() {
      const { helmetInstances: t } = this.props.context;
      t.remove(this), this.emitChange();
    }
    emitChange() {
      const { helmetInstances: t, setHelmet: r } = this.props.context;
      let n = null;
      const a = sr(
        t.get().map((i) => {
          const u = { ...i.props };
          return delete u.context, u;
        })
      );
      yr.canUseDOM ? Er(a) : De && (n = De(a)), r(n);
    }
    init() {
      if (this.rendered) return;
      this.rendered = !0;
      const { helmetInstances: t } = this.props.context;
      t.add(this), this.emitChange();
    }
    render() {
      return this.init(), null;
    }
  },
  ke,
  Xn =
    ((ke = class extends d.Component {
      shouldComponentUpdate(e) {
        return !Gt(st(this.props, 'helmetData'), st(e, 'helmetData'));
      }
      mapNestedChildrenToProps(e, t) {
        if (!t) return null;
        switch (e.type) {
          case 'script':
          case 'noscript':
            return { innerHTML: t };
          case 'style':
            return { cssText: t };
          default:
            throw new Error(
              `<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`
            );
        }
      }
      flattenArrayTypeChildren(e, t, r, n) {
        return {
          ...t,
          [e.type]: [
            ...(t[e.type] || []),
            { ...r, ...this.mapNestedChildrenToProps(e, n) },
          ],
        };
      }
      mapObjectTypeChildren(e, t, r, n) {
        switch (e.type) {
          case 'title':
            return { ...t, [e.type]: n, titleAttributes: { ...r } };
          case 'body':
            return { ...t, bodyAttributes: { ...r } };
          case 'html':
            return { ...t, htmlAttributes: { ...r } };
          default:
            return { ...t, [e.type]: { ...r } };
        }
      }
      mapArrayTypeChildrenToProps(e, t) {
        let r = { ...t };
        return (
          Object.keys(e).forEach((n) => {
            r = { ...r, [n]: e[n] };
          }),
          r
        );
      }
      warnOnInvalidChildren(e, t) {
        return (
          at(
            it.some((r) => e.type === r),
            typeof e.type == 'function'
              ? 'You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.'
              : `Only elements types ${it.join(', ')} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`
          ),
          at(
            !t ||
              typeof t == 'string' ||
              (Array.isArray(t) && !t.some((r) => typeof r != 'string')),
            `Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`
          ),
          !0
        );
      }
      mapChildrenToProps(e, t) {
        let r = {};
        return (
          W.Children.forEach(e, (n) => {
            if (!n || !n.props) return;
            const { children: a, ...i } = n.props,
              u = Object.keys(i).reduce(
                (s, o) => ((s[tr[o] || o] = i[o]), s),
                {}
              );
            let { type: l } = n;
            switch (
              (typeof l == 'symbol'
                ? (l = l.toString())
                : this.warnOnInvalidChildren(n, a),
              l)
            ) {
              case 'Symbol(react.fragment)':
                t = this.mapChildrenToProps(a, t);
                break;
              case 'link':
              case 'meta':
              case 'noscript':
              case 'script':
              case 'style':
                r = this.flattenArrayTypeChildren(n, r, u, a);
                break;
              default:
                t = this.mapObjectTypeChildren(n, t, u, a);
                break;
            }
          }),
          this.mapArrayTypeChildrenToProps(r, t)
        );
      }
      render() {
        const { children: e, ...t } = this.props;
        let r = { ...t },
          { helmetData: n } = t;
        if (
          (e && (r = this.mapChildrenToProps(e, r)), n && !(n instanceof Me))
        ) {
          const a = n;
          (n = new Me(a.context, !0)), delete r.helmetData;
        }
        return n
          ? W.createElement(lt, { ...r, context: n.value })
          : W.createElement(Ct.Consumer, null, (a) =>
              W.createElement(lt, { ...r, context: a })
            );
      }
    }),
    z(ke, 'defaultProps', {
      defer: !0,
      encodeSpecialCharacters: !0,
      prioritizeSeoTags: !1,
    }),
    ke),
  ue = {},
  ct;
function wr() {
  if (ct) return ue;
  (ct = 1),
    Object.defineProperty(ue, '__esModule', { value: !0 }),
    (ue.parse = u),
    (ue.serialize = o);
  const e = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    t = /^[\u0021-\u003A\u003C-\u007E]*$/,
    r =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    n = /^[\u0020-\u003A\u003D-\u007E]*$/,
    a = Object.prototype.toString,
    i = (() => {
      const h = function () {};
      return (h.prototype = Object.create(null)), h;
    })();
  function u(h, v) {
    const p = new i(),
      T = h.length;
    if (T < 2) return p;
    const E = (v == null ? void 0 : v.decode) || f;
    let g = 0;
    do {
      const C = h.indexOf('=', g);
      if (C === -1) break;
      const w = h.indexOf(';', g),
        O = w === -1 ? T : w;
      if (C > O) {
        g = h.lastIndexOf(';', C - 1) + 1;
        continue;
      }
      const b = l(h, g, C),
        B = s(h, C, b),
        D = h.slice(b, B);
      if (p[D] === void 0) {
        let q = l(h, C + 1, O),
          k = s(h, O, q);
        const F = E(h.slice(q, k));
        p[D] = F;
      }
      g = O + 1;
    } while (g < T);
    return p;
  }
  function l(h, v, p) {
    do {
      const T = h.charCodeAt(v);
      if (T !== 32 && T !== 9) return v;
    } while (++v < p);
    return p;
  }
  function s(h, v, p) {
    for (; v > p; ) {
      const T = h.charCodeAt(--v);
      if (T !== 32 && T !== 9) return v + 1;
    }
    return p;
  }
  function o(h, v, p) {
    const T = (p == null ? void 0 : p.encode) || encodeURIComponent;
    if (!e.test(h)) throw new TypeError(`argument name is invalid: ${h}`);
    const E = T(v);
    if (!t.test(E)) throw new TypeError(`argument val is invalid: ${v}`);
    let g = h + '=' + E;
    if (!p) return g;
    if (p.maxAge !== void 0) {
      if (!Number.isInteger(p.maxAge))
        throw new TypeError(`option maxAge is invalid: ${p.maxAge}`);
      g += '; Max-Age=' + p.maxAge;
    }
    if (p.domain) {
      if (!r.test(p.domain))
        throw new TypeError(`option domain is invalid: ${p.domain}`);
      g += '; Domain=' + p.domain;
    }
    if (p.path) {
      if (!n.test(p.path))
        throw new TypeError(`option path is invalid: ${p.path}`);
      g += '; Path=' + p.path;
    }
    if (p.expires) {
      if (!m(p.expires) || !Number.isFinite(p.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${p.expires}`);
      g += '; Expires=' + p.expires.toUTCString();
    }
    if (
      (p.httpOnly && (g += '; HttpOnly'),
      p.secure && (g += '; Secure'),
      p.partitioned && (g += '; Partitioned'),
      p.priority)
    )
      switch (
        typeof p.priority == 'string' ? p.priority.toLowerCase() : void 0
      ) {
        case 'low':
          g += '; Priority=Low';
          break;
        case 'medium':
          g += '; Priority=Medium';
          break;
        case 'high':
          g += '; Priority=High';
          break;
        default:
          throw new TypeError(`option priority is invalid: ${p.priority}`);
      }
    if (p.sameSite)
      switch (
        typeof p.sameSite == 'string' ? p.sameSite.toLowerCase() : p.sameSite
      ) {
        case !0:
        case 'strict':
          g += '; SameSite=Strict';
          break;
        case 'lax':
          g += '; SameSite=Lax';
          break;
        case 'none':
          g += '; SameSite=None';
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${p.sameSite}`);
      }
    return g;
  }
  function f(h) {
    if (h.indexOf('%') === -1) return h;
    try {
      return decodeURIComponent(h);
    } catch {
      return h;
    }
  }
  function m(h) {
    return a.call(h) === '[object Date]';
  }
  return ue;
}
wr();
/**
 * react-router v7.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var ft = 'popstate';
function Tr(e = {}) {
  function t(n, a) {
    let { pathname: i, search: u, hash: l } = n.location;
    return Ne(
      '',
      { pathname: i, search: u, hash: l },
      (a.state && a.state.usr) || null,
      (a.state && a.state.key) || 'default'
    );
  }
  function r(n, a) {
    return typeof a == 'string' ? a : ce(a);
  }
  return Rr(t, r, null, e);
}
function A(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function H(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Cr() {
  return Math.random().toString(36).substring(2, 10);
}
function dt(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Ne(e, t, r = null, n) {
  return {
    pathname: typeof e == 'string' ? e : e.pathname,
    search: '',
    hash: '',
    ...(typeof t == 'string' ? te(t) : t),
    state: r,
    key: (t && t.key) || n || Cr(),
  };
}
function ce({ pathname: e = '/', search: t = '', hash: r = '' }) {
  return (
    t && t !== '?' && (e += t.charAt(0) === '?' ? t : '?' + t),
    r && r !== '#' && (e += r.charAt(0) === '#' ? r : '#' + r),
    e
  );
}
function te(e) {
  let t = {};
  if (e) {
    let r = e.indexOf('#');
    r >= 0 && ((t.hash = e.substring(r)), (e = e.substring(0, r)));
    let n = e.indexOf('?');
    n >= 0 && ((t.search = e.substring(n)), (e = e.substring(0, n))),
      e && (t.pathname = e);
  }
  return t;
}
function Rr(e, t, r, n = {}) {
  let { window: a = document.defaultView, v5Compat: i = !1 } = n,
    u = a.history,
    l = 'POP',
    s = null,
    o = f();
  o == null && ((o = 0), u.replaceState({ ...u.state, idx: o }, ''));
  function f() {
    return (u.state || { idx: null }).idx;
  }
  function m() {
    l = 'POP';
    let E = f(),
      g = E == null ? null : E - o;
    (o = E), s && s({ action: l, location: T.location, delta: g });
  }
  function h(E, g) {
    l = 'PUSH';
    let C = Ne(T.location, E, g);
    o = f() + 1;
    let w = dt(C, o),
      O = T.createHref(C);
    try {
      u.pushState(w, '', O);
    } catch (b) {
      if (b instanceof DOMException && b.name === 'DataCloneError') throw b;
      a.location.assign(O);
    }
    i && s && s({ action: l, location: T.location, delta: 1 });
  }
  function v(E, g) {
    l = 'REPLACE';
    let C = Ne(T.location, E, g);
    o = f();
    let w = dt(C, o),
      O = T.createHref(C);
    u.replaceState(w, '', O),
      i && s && s({ action: l, location: T.location, delta: 0 });
  }
  function p(E) {
    let g = a.location.origin !== 'null' ? a.location.origin : a.location.href,
      C = typeof E == 'string' ? E : ce(E);
    return (
      (C = C.replace(/ $/, '%20')),
      A(
        g,
        `No window.location.(origin|href) available to create URL for href: ${C}`
      ),
      new URL(C, g)
    );
  }
  let T = {
    get action() {
      return l;
    },
    get location() {
      return e(a, u);
    },
    listen(E) {
      if (s) throw new Error('A history only accepts one active listener');
      return (
        a.addEventListener(ft, m),
        (s = E),
        () => {
          a.removeEventListener(ft, m), (s = null);
        }
      );
    },
    createHref(E) {
      return t(a, E);
    },
    createURL: p,
    encodeLocation(E) {
      let g = p(E);
      return { pathname: g.pathname, search: g.search, hash: g.hash };
    },
    push: h,
    replace: v,
    go(E) {
      return u.go(E);
    },
  };
  return T;
}
function Rt(e, t, r = '/') {
  return Sr(e, t, r, !1);
}
function Sr(e, t, r, n) {
  let a = typeof t == 'string' ? te(t) : t,
    i = K(a.pathname || '/', r);
  if (i == null) return null;
  let u = St(e);
  xr(u);
  let l = null;
  for (let s = 0; l == null && s < u.length; ++s) {
    let o = Mr(i);
    l = Ir(u[s], o, n);
  }
  return l;
}
function St(e, t = [], r = [], n = '') {
  let a = (i, u, l) => {
    let s = {
      relativePath: l === void 0 ? i.path || '' : l,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: u,
      route: i,
    };
    s.relativePath.startsWith('/') &&
      (A(
        s.relativePath.startsWith(n),
        `Absolute route path "${s.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (s.relativePath = s.relativePath.slice(n.length)));
    let o = Y([n, s.relativePath]),
      f = r.concat(s);
    i.children &&
      i.children.length > 0 &&
      (A(
        i.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${o}".`
      ),
      St(i.children, t, f, o)),
      !(i.path == null && !i.index) &&
        t.push({ path: o, score: Lr(o, i.index), routesMeta: f });
  };
  return (
    e.forEach((i, u) => {
      var l;
      if (i.path === '' || !((l = i.path) != null && l.includes('?'))) a(i, u);
      else for (let s of xt(i.path)) a(i, u, s);
    }),
    t
  );
}
function xt(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [r, ...n] = t,
    a = r.endsWith('?'),
    i = r.replace(/\?$/, '');
  if (n.length === 0) return a ? [i, ''] : [i];
  let u = xt(n.join('/')),
    l = [];
  return (
    l.push(...u.map((s) => (s === '' ? i : [i, s].join('/')))),
    a && l.push(...u),
    l.map((s) => (e.startsWith('/') && s === '' ? '/' : s))
  );
}
function xr(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : kr(
          t.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex)
        )
  );
}
var br = /^:[\w-]+$/,
  _r = 3,
  Pr = 2,
  Or = 1,
  Ar = 10,
  $r = -2,
  pt = (e) => e === '*';
function Lr(e, t) {
  let r = e.split('/'),
    n = r.length;
  return (
    r.some(pt) && (n += $r),
    t && (n += Pr),
    r
      .filter((a) => !pt(a))
      .reduce((a, i) => a + (br.test(i) ? _r : i === '' ? Or : Ar), n)
  );
}
function kr(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, a) => n === t[a])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Ir(e, t, r = !1) {
  let { routesMeta: n } = e,
    a = {},
    i = '/',
    u = [];
  for (let l = 0; l < n.length; ++l) {
    let s = n[l],
      o = l === n.length - 1,
      f = i === '/' ? t : t.slice(i.length) || '/',
      m = ve(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: o },
        f
      ),
      h = s.route;
    if (
      (!m &&
        o &&
        r &&
        !n[n.length - 1].route.index &&
        (m = ve(
          { path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 },
          f
        )),
      !m)
    )
      return null;
    Object.assign(a, m.params),
      u.push({
        params: a,
        pathname: Y([i, m.pathname]),
        pathnameBase: jr(Y([i, m.pathnameBase])),
        route: h,
      }),
      m.pathnameBase !== '/' && (i = Y([i, m.pathnameBase]));
  }
  return u;
}
function ve(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, n] = Dr(e.path, e.caseSensitive, e.end),
    a = t.match(r);
  if (!a) return null;
  let i = a[0],
    u = i.replace(/(.)\/+$/, '$1'),
    l = a.slice(1);
  return {
    params: n.reduce((o, { paramName: f, isOptional: m }, h) => {
      if (f === '*') {
        let p = l[h] || '';
        u = i.slice(0, i.length - p.length).replace(/(.)\/+$/, '$1');
      }
      const v = l[h];
      return (
        m && !v ? (o[f] = void 0) : (o[f] = (v || '').replace(/%2F/g, '/')), o
      );
    }, {}),
    pathname: i,
    pathnameBase: u,
    pattern: e,
  };
}
function Dr(e, t = !1, r = !0) {
  H(
    e === '*' || !e.endsWith('*') || e.endsWith('/*'),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, '/*')}".`
  );
  let n = [],
    a =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (u, l, s) => (
            n.push({ paramName: l, isOptional: s != null }),
            s ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        );
  return (
    e.endsWith('*')
      ? (n.push({ paramName: '*' }),
        (a += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : r
        ? (a += '\\/*$')
        : e !== '' && e !== '/' && (a += '(?:(?=\\/|$))'),
    [new RegExp(a, t ? void 0 : 'i'), n]
  );
}
function Mr(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      H(
        !1,
        `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
      ),
      e
    );
  }
}
function K(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = t.endsWith('/') ? t.length - 1 : t.length,
    n = e.charAt(r);
  return n && n !== '/' ? null : e.slice(r) || '/';
}
function Hr(e, t = '/') {
  let {
    pathname: r,
    search: n = '',
    hash: a = '',
  } = typeof e == 'string' ? te(e) : e;
  return {
    pathname: r ? (r.startsWith('/') ? r : Nr(r, t)) : t,
    search: Fr(n),
    hash: Br(a),
  };
}
function Nr(e, t) {
  let r = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((a) => {
      a === '..' ? r.length > 1 && r.pop() : a !== '.' && r.push(a);
    }),
    r.length > 1 ? r.join('/') : '/'
  );
}
function $e(e, t, r, n) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Ur(e) {
  return e.filter(
    (t, r) => r === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Be(e) {
  let t = Ur(e);
  return t.map((r, n) => (n === t.length - 1 ? r.pathname : r.pathnameBase));
}
function qe(e, t, r, n = !1) {
  let a;
  typeof e == 'string'
    ? (a = te(e))
    : ((a = { ...e }),
      A(
        !a.pathname || !a.pathname.includes('?'),
        $e('?', 'pathname', 'search', a)
      ),
      A(
        !a.pathname || !a.pathname.includes('#'),
        $e('#', 'pathname', 'hash', a)
      ),
      A(!a.search || !a.search.includes('#'), $e('#', 'search', 'hash', a)));
  let i = e === '' || a.pathname === '',
    u = i ? '/' : a.pathname,
    l;
  if (u == null) l = r;
  else {
    let m = t.length - 1;
    if (!n && u.startsWith('..')) {
      let h = u.split('/');
      for (; h[0] === '..'; ) h.shift(), (m -= 1);
      a.pathname = h.join('/');
    }
    l = m >= 0 ? t[m] : '/';
  }
  let s = Hr(a, l),
    o = u && u !== '/' && u.endsWith('/'),
    f = (i || u === '.') && r.endsWith('/');
  return !s.pathname.endsWith('/') && (o || f) && (s.pathname += '/'), s;
}
var Y = (e) => e.join('/').replace(/\/\/+/g, '/'),
  jr = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Fr = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  Br = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
function qr(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
var bt = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(bt);
var zr = ['GET', ...bt];
new Set(zr);
var re = d.createContext(null);
re.displayName = 'DataRouter';
var we = d.createContext(null);
we.displayName = 'DataRouterState';
var _t = d.createContext({ isTransitioning: !1 });
_t.displayName = 'ViewTransition';
var Wr = d.createContext(new Map());
Wr.displayName = 'Fetchers';
var Yr = d.createContext(null);
Yr.displayName = 'Await';
var j = d.createContext(null);
j.displayName = 'Navigation';
var ne = d.createContext(null);
ne.displayName = 'Location';
var N = d.createContext({ outlet: null, matches: [], isDataRoute: !1 });
N.displayName = 'Route';
var ze = d.createContext(null);
ze.displayName = 'RouteError';
function Kr(e, { relative: t } = {}) {
  A(ae(), 'useHref() may be used only in the context of a <Router> component.');
  let { basename: r, navigator: n } = d.useContext(j),
    { hash: a, pathname: i, search: u } = fe(e, { relative: t }),
    l = i;
  return (
    r !== '/' && (l = i === '/' ? r : Y([r, i])),
    n.createHref({ pathname: l, search: u, hash: a })
  );
}
function ae() {
  return d.useContext(ne) != null;
}
function V() {
  return (
    A(
      ae(),
      'useLocation() may be used only in the context of a <Router> component.'
    ),
    d.useContext(ne).location
  );
}
function Zn() {
  return d.useContext(ne).navigationType;
}
var Pt =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function Ot(e) {
  d.useContext(j).static || d.useLayoutEffect(e);
}
function We() {
  let { isDataRoute: e } = d.useContext(N);
  return e ? ln() : Vr();
}
function Vr() {
  A(
    ae(),
    'useNavigate() may be used only in the context of a <Router> component.'
  );
  let e = d.useContext(re),
    { basename: t, navigator: r } = d.useContext(j),
    { matches: n } = d.useContext(N),
    { pathname: a } = V(),
    i = JSON.stringify(Be(n)),
    u = d.useRef(!1);
  return (
    Ot(() => {
      u.current = !0;
    }),
    d.useCallback(
      (s, o = {}) => {
        if ((H(u.current, Pt), !u.current)) return;
        if (typeof s == 'number') {
          r.go(s);
          return;
        }
        let f = qe(s, JSON.parse(i), a, o.relative === 'path');
        e == null &&
          t !== '/' &&
          (f.pathname = f.pathname === '/' ? t : Y([t, f.pathname])),
          (o.replace ? r.replace : r.push)(f, o.state, o);
      },
      [t, r, i, a, e]
    )
  );
}
var Gr = d.createContext(null);
function Jr(e) {
  let t = d.useContext(N).outlet;
  return t && d.createElement(Gr.Provider, { value: e }, t);
}
function Qn() {
  let { matches: e } = d.useContext(N),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function fe(e, { relative: t } = {}) {
  let { matches: r } = d.useContext(N),
    { pathname: n } = V(),
    a = JSON.stringify(Be(r));
  return d.useMemo(() => qe(e, JSON.parse(a), n, t === 'path'), [e, a, n, t]);
}
function Xr(e, t) {
  return At(e, t);
}
function At(e, t, r, n) {
  var C;
  A(
    ae(),
    'useRoutes() may be used only in the context of a <Router> component.'
  );
  let { navigator: a, static: i } = d.useContext(j),
    { matches: u } = d.useContext(N),
    l = u[u.length - 1],
    s = l ? l.params : {},
    o = l ? l.pathname : '/',
    f = l ? l.pathnameBase : '/',
    m = l && l.route;
  {
    let w = (m && m.path) || '';
    $t(
      o,
      !m || w.endsWith('*') || w.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${o}" (under <Route path="${w}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${w}"> to <Route path="${w === '/' ? '*' : `${w}/*`}">.`
    );
  }
  let h = V(),
    v;
  if (t) {
    let w = typeof t == 'string' ? te(t) : t;
    A(
      f === '/' || ((C = w.pathname) == null ? void 0 : C.startsWith(f)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${w.pathname}" was given in the \`location\` prop.`
    ),
      (v = w);
  } else v = h;
  let p = v.pathname || '/',
    T = p;
  if (f !== '/') {
    let w = f.replace(/^\//, '').split('/');
    T = '/' + p.replace(/^\//, '').split('/').slice(w.length).join('/');
  }
  let E =
    !i && r && r.matches && r.matches.length > 0
      ? r.matches
      : Rt(e, { pathname: T });
  H(
    m || E != null,
    `No routes matched location "${v.pathname}${v.search}${v.hash}" `
  ),
    H(
      E == null ||
        E[E.length - 1].route.element !== void 0 ||
        E[E.length - 1].route.Component !== void 0 ||
        E[E.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let g = rn(
    E &&
      E.map((w) =>
        Object.assign({}, w, {
          params: Object.assign({}, s, w.params),
          pathname: Y([
            f,
            a.encodeLocation
              ? a.encodeLocation(w.pathname).pathname
              : w.pathname,
          ]),
          pathnameBase:
            w.pathnameBase === '/'
              ? f
              : Y([
                  f,
                  a.encodeLocation
                    ? a.encodeLocation(w.pathnameBase).pathname
                    : w.pathnameBase,
                ]),
        })
      ),
    u,
    r,
    n
  );
  return t && g
    ? d.createElement(
        ne.Provider,
        {
          value: {
            location: {
              pathname: '/',
              search: '',
              hash: '',
              state: null,
              key: 'default',
              ...v,
            },
            navigationType: 'POP',
          },
        },
        g
      )
    : g;
}
function Zr() {
  let e = un(),
    t = qr(e)
      ? `${e.status} ${e.statusText}`
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    r = e instanceof Error ? e.stack : null,
    n = 'rgba(200,200,200, 0.5)',
    a = { padding: '0.5rem', backgroundColor: n },
    i = { padding: '2px 4px', backgroundColor: n },
    u = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', e),
    (u = d.createElement(
      d.Fragment,
      null,
      d.createElement('p', null, '💿 Hey developer 👋'),
      d.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        d.createElement('code', { style: i }, 'ErrorBoundary'),
        ' or',
        ' ',
        d.createElement('code', { style: i }, 'errorElement'),
        ' prop on your route.'
      )
    )),
    d.createElement(
      d.Fragment,
      null,
      d.createElement('h2', null, 'Unexpected Application Error!'),
      d.createElement('h3', { style: { fontStyle: 'italic' } }, t),
      r ? d.createElement('pre', { style: a }, r) : null,
      u
    )
  );
}
var Qr = d.createElement(Zr, null),
  en = class extends d.Component {
    constructor(e) {
      super(e),
        (this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error,
        });
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location ||
        (t.revalidation !== 'idle' && e.revalidation === 'idle')
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error !== void 0 ? e.error : t.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {
      console.error(
        'React Router caught the following error during render',
        e,
        t
      );
    }
    render() {
      return this.state.error !== void 0
        ? d.createElement(
            N.Provider,
            { value: this.props.routeContext },
            d.createElement(ze.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function tn({ routeContext: e, match: t, children: r }) {
  let n = d.useContext(re);
  return (
    n &&
      n.static &&
      n.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (n.staticContext._deepestRenderedBoundaryId = t.route.id),
    d.createElement(N.Provider, { value: e }, r)
  );
}
function rn(e, t = [], r = null, n = null) {
  if (e == null) {
    if (!r) return null;
    if (r.errors) e = r.matches;
    else if (t.length === 0 && !r.initialized && r.matches.length > 0)
      e = r.matches;
    else return null;
  }
  let a = e,
    i = r == null ? void 0 : r.errors;
  if (i != null) {
    let s = a.findIndex(
      (o) => o.route.id && (i == null ? void 0 : i[o.route.id]) !== void 0
    );
    A(
      s >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(i).join(',')}`
    ),
      (a = a.slice(0, Math.min(a.length, s + 1)));
  }
  let u = !1,
    l = -1;
  if (r)
    for (let s = 0; s < a.length; s++) {
      let o = a[s];
      if (
        ((o.route.HydrateFallback || o.route.hydrateFallbackElement) && (l = s),
        o.route.id)
      ) {
        let { loaderData: f, errors: m } = r,
          h =
            o.route.loader &&
            !f.hasOwnProperty(o.route.id) &&
            (!m || m[o.route.id] === void 0);
        if (o.route.lazy || h) {
          (u = !0), l >= 0 ? (a = a.slice(0, l + 1)) : (a = [a[0]]);
          break;
        }
      }
    }
  return a.reduceRight((s, o, f) => {
    let m,
      h = !1,
      v = null,
      p = null;
    r &&
      ((m = i && o.route.id ? i[o.route.id] : void 0),
      (v = o.route.errorElement || Qr),
      u &&
        (l < 0 && f === 0
          ? ($t(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (h = !0),
            (p = null))
          : l === f &&
            ((h = !0), (p = o.route.hydrateFallbackElement || null))));
    let T = t.concat(a.slice(0, f + 1)),
      E = () => {
        let g;
        return (
          m
            ? (g = v)
            : h
              ? (g = p)
              : o.route.Component
                ? (g = d.createElement(o.route.Component, null))
                : o.route.element
                  ? (g = o.route.element)
                  : (g = s),
          d.createElement(tn, {
            match: o,
            routeContext: { outlet: s, matches: T, isDataRoute: r != null },
            children: g,
          })
        );
      };
    return r && (o.route.ErrorBoundary || o.route.errorElement || f === 0)
      ? d.createElement(en, {
          location: r.location,
          revalidation: r.revalidation,
          component: v,
          error: m,
          children: E(),
          routeContext: { outlet: null, matches: T, isDataRoute: !0 },
        })
      : E();
  }, null);
}
function Ye(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function nn(e) {
  let t = d.useContext(re);
  return A(t, Ye(e)), t;
}
function an(e) {
  let t = d.useContext(we);
  return A(t, Ye(e)), t;
}
function on(e) {
  let t = d.useContext(N);
  return A(t, Ye(e)), t;
}
function Ke(e) {
  let t = on(e),
    r = t.matches[t.matches.length - 1];
  return (
    A(r.route.id, `${e} can only be used on routes that contain a unique "id"`),
    r.route.id
  );
}
function sn() {
  return Ke('useRouteId');
}
function un() {
  var n;
  let e = d.useContext(ze),
    t = an('useRouteError'),
    r = Ke('useRouteError');
  return e !== void 0 ? e : (n = t.errors) == null ? void 0 : n[r];
}
function ln() {
  let { router: e } = nn('useNavigate'),
    t = Ke('useNavigate'),
    r = d.useRef(!1);
  return (
    Ot(() => {
      r.current = !0;
    }),
    d.useCallback(
      async (a, i = {}) => {
        H(r.current, Pt),
          r.current &&
            (typeof a == 'number'
              ? e.navigate(a)
              : await e.navigate(a, { fromRouteId: t, ...i }));
      },
      [e, t]
    )
  );
}
var ht = {};
function $t(e, t, r) {
  !t && !ht[e] && ((ht[e] = !0), H(!1, r));
}
d.memo(cn);
function cn({ routes: e, future: t, state: r }) {
  return At(e, void 0, r, t);
}
function ea({ to: e, replace: t, state: r, relative: n }) {
  A(
    ae(),
    '<Navigate> may be used only in the context of a <Router> component.'
  );
  let { static: a } = d.useContext(j);
  H(
    !a,
    '<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.'
  );
  let { matches: i } = d.useContext(N),
    { pathname: u } = V(),
    l = We(),
    s = qe(e, Be(i), u, n === 'path'),
    o = JSON.stringify(s);
  return (
    d.useEffect(() => {
      l(JSON.parse(o), { replace: t, state: r, relative: n });
    }, [l, o, n, t, r]),
    null
  );
}
function ta(e) {
  return Jr(e.context);
}
function fn(e) {
  A(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  );
}
function dn({
  basename: e = '/',
  children: t = null,
  location: r,
  navigationType: n = 'POP',
  navigator: a,
  static: i = !1,
}) {
  A(
    !ae(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
  );
  let u = e.replace(/^\/*/, '/'),
    l = d.useMemo(
      () => ({ basename: u, navigator: a, static: i, future: {} }),
      [u, a, i]
    );
  typeof r == 'string' && (r = te(r));
  let {
      pathname: s = '/',
      search: o = '',
      hash: f = '',
      state: m = null,
      key: h = 'default',
    } = r,
    v = d.useMemo(() => {
      let p = K(s, u);
      return p == null
        ? null
        : {
            location: { pathname: p, search: o, hash: f, state: m, key: h },
            navigationType: n,
          };
    }, [u, s, o, f, m, h, n]);
  return (
    H(
      v != null,
      `<Router basename="${u}"> is not able to match the URL "${s}${o}${f}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    v == null
      ? null
      : d.createElement(
          j.Provider,
          { value: l },
          d.createElement(ne.Provider, { children: t, value: v })
        )
  );
}
function ra({ children: e, location: t }) {
  return Xr(Ue(e), t);
}
function Ue(e, t = []) {
  let r = [];
  return (
    d.Children.forEach(e, (n, a) => {
      if (!d.isValidElement(n)) return;
      let i = [...t, a];
      if (n.type === d.Fragment) {
        r.push.apply(r, Ue(n.props.children, i));
        return;
      }
      A(
        n.type === fn,
        `[${typeof n.type == 'string' ? n.type : n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        A(
          !n.props.index || !n.props.children,
          'An index route cannot have child routes.'
        );
      let u = {
        id: n.props.id || i.join('-'),
        caseSensitive: n.props.caseSensitive,
        element: n.props.element,
        Component: n.props.Component,
        index: n.props.index,
        path: n.props.path,
        loader: n.props.loader,
        action: n.props.action,
        hydrateFallbackElement: n.props.hydrateFallbackElement,
        HydrateFallback: n.props.HydrateFallback,
        errorElement: n.props.errorElement,
        ErrorBoundary: n.props.ErrorBoundary,
        hasErrorBoundary:
          n.props.hasErrorBoundary === !0 ||
          n.props.ErrorBoundary != null ||
          n.props.errorElement != null,
        shouldRevalidate: n.props.shouldRevalidate,
        handle: n.props.handle,
        lazy: n.props.lazy,
      };
      n.props.children && (u.children = Ue(n.props.children, i)), r.push(u);
    }),
    r
  );
}
var ye = 'get',
  ge = 'application/x-www-form-urlencoded';
function Te(e) {
  return e != null && typeof e.tagName == 'string';
}
function pn(e) {
  return Te(e) && e.tagName.toLowerCase() === 'button';
}
function hn(e) {
  return Te(e) && e.tagName.toLowerCase() === 'form';
}
function mn(e) {
  return Te(e) && e.tagName.toLowerCase() === 'input';
}
function yn(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function gn(e, t) {
  return e.button === 0 && (!t || t === '_self') && !yn(e);
}
function je(e = '') {
  return new URLSearchParams(
    typeof e == 'string' || Array.isArray(e) || e instanceof URLSearchParams
      ? e
      : Object.keys(e).reduce((t, r) => {
          let n = e[r];
          return t.concat(Array.isArray(n) ? n.map((a) => [r, a]) : [[r, n]]);
        }, [])
  );
}
function vn(e, t) {
  let r = je(e);
  return (
    t &&
      t.forEach((n, a) => {
        r.has(a) ||
          t.getAll(a).forEach((i) => {
            r.append(a, i);
          });
      }),
    r
  );
}
var he = null;
function En() {
  if (he === null)
    try {
      new FormData(document.createElement('form'), 0), (he = !1);
    } catch {
      he = !0;
    }
  return he;
}
var wn = new Set([
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'text/plain',
]);
function Le(e) {
  return e != null && !wn.has(e)
    ? (H(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ge}"`
      ),
      null)
    : e;
}
function Tn(e, t) {
  let r, n, a, i, u;
  if (hn(e)) {
    let l = e.getAttribute('action');
    (n = l ? K(l, t) : null),
      (r = e.getAttribute('method') || ye),
      (a = Le(e.getAttribute('enctype')) || ge),
      (i = new FormData(e));
  } else if (pn(e) || (mn(e) && (e.type === 'submit' || e.type === 'image'))) {
    let l = e.form;
    if (l == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let s = e.getAttribute('formaction') || l.getAttribute('action');
    if (
      ((n = s ? K(s, t) : null),
      (r = e.getAttribute('formmethod') || l.getAttribute('method') || ye),
      (a =
        Le(e.getAttribute('formenctype')) ||
        Le(l.getAttribute('enctype')) ||
        ge),
      (i = new FormData(l, e)),
      !En())
    ) {
      let { name: o, type: f, value: m } = e;
      if (f === 'image') {
        let h = o ? `${o}.` : '';
        i.append(`${h}x`, '0'), i.append(`${h}y`, '0');
      } else o && i.append(o, m);
    }
  } else {
    if (Te(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (r = ye), (n = null), (a = ge), (u = e);
  }
  return (
    i && a === 'text/plain' && ((u = i), (i = void 0)),
    { action: n, method: r.toLowerCase(), encType: a, formData: i, body: u }
  );
}
function Ve(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
async function Cn(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let r = await import(e.module);
    return (t[e.id] = r), r;
  } catch (r) {
    return (
      console.error(
        `Error loading route module \`${e.module}\`, reloading page...`
      ),
      console.error(r),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Rn(e) {
  return e == null
    ? !1
    : e.href == null
      ? e.rel === 'preload' &&
        typeof e.imageSrcSet == 'string' &&
        typeof e.imageSizes == 'string'
      : typeof e.rel == 'string' && typeof e.href == 'string';
}
async function Sn(e, t, r) {
  let n = await Promise.all(
    e.map(async (a) => {
      let i = t.routes[a.route.id];
      if (i) {
        let u = await Cn(i, r);
        return u.links ? u.links() : [];
      }
      return [];
    })
  );
  return Pn(
    n
      .flat(1)
      .filter(Rn)
      .filter((a) => a.rel === 'stylesheet' || a.rel === 'preload')
      .map((a) =>
        a.rel === 'stylesheet'
          ? { ...a, rel: 'prefetch', as: 'style' }
          : { ...a, rel: 'prefetch' }
      )
  );
}
function mt(e, t, r, n, a, i) {
  let u = (s, o) => (r[o] ? s.route.id !== r[o].route.id : !0),
    l = (s, o) => {
      var f;
      return (
        r[o].pathname !== s.pathname ||
        (((f = r[o].route.path) == null ? void 0 : f.endsWith('*')) &&
          r[o].params['*'] !== s.params['*'])
      );
    };
  return i === 'assets'
    ? t.filter((s, o) => u(s, o) || l(s, o))
    : i === 'data'
      ? t.filter((s, o) => {
          var m;
          let f = n.routes[s.route.id];
          if (!f || !f.hasLoader) return !1;
          if (u(s, o) || l(s, o)) return !0;
          if (s.route.shouldRevalidate) {
            let h = s.route.shouldRevalidate({
              currentUrl: new URL(
                a.pathname + a.search + a.hash,
                window.origin
              ),
              currentParams: ((m = r[0]) == null ? void 0 : m.params) || {},
              nextUrl: new URL(e, window.origin),
              nextParams: s.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof h == 'boolean') return h;
          }
          return !0;
        })
      : [];
}
function xn(e, t, { includeHydrateFallback: r } = {}) {
  return bn(
    e
      .map((n) => {
        let a = t.routes[n.route.id];
        if (!a) return [];
        let i = [a.module];
        return (
          a.clientActionModule && (i = i.concat(a.clientActionModule)),
          a.clientLoaderModule && (i = i.concat(a.clientLoaderModule)),
          r &&
            a.hydrateFallbackModule &&
            (i = i.concat(a.hydrateFallbackModule)),
          a.imports && (i = i.concat(a.imports)),
          i
        );
      })
      .flat(1)
  );
}
function bn(e) {
  return [...new Set(e)];
}
function _n(e) {
  let t = {},
    r = Object.keys(e).sort();
  for (let n of r) t[n] = e[n];
  return t;
}
function Pn(e, t) {
  let r = new Set();
  return (
    new Set(t),
    e.reduce((n, a) => {
      let i = JSON.stringify(_n(a));
      return r.has(i) || (r.add(i), n.push({ key: i, link: a })), n;
    }, [])
  );
}
var On = new Set([100, 101, 204, 205]);
function An(e, t) {
  let r =
    typeof e == 'string'
      ? new URL(
          e,
          typeof window > 'u' ? 'server://singlefetch/' : window.location.origin
        )
      : e;
  return (
    r.pathname === '/'
      ? (r.pathname = '_root.data')
      : t && K(r.pathname, t) === '/'
        ? (r.pathname = `${t.replace(/\/$/, '')}/_root.data`)
        : (r.pathname = `${r.pathname.replace(/\/$/, '')}.data`),
    r
  );
}
function Lt() {
  let e = d.useContext(re);
  return (
    Ve(
      e,
      'You must render this element inside a <DataRouterContext.Provider> element'
    ),
    e
  );
}
function $n() {
  let e = d.useContext(we);
  return (
    Ve(
      e,
      'You must render this element inside a <DataRouterStateContext.Provider> element'
    ),
    e
  );
}
var Ge = d.createContext(void 0);
Ge.displayName = 'FrameworkContext';
function kt() {
  let e = d.useContext(Ge);
  return (
    Ve(e, 'You must render this element inside a <HydratedRouter> element'), e
  );
}
function Ln(e, t) {
  let r = d.useContext(Ge),
    [n, a] = d.useState(!1),
    [i, u] = d.useState(!1),
    {
      onFocus: l,
      onBlur: s,
      onMouseEnter: o,
      onMouseLeave: f,
      onTouchStart: m,
    } = t,
    h = d.useRef(null);
  d.useEffect(() => {
    if ((e === 'render' && u(!0), e === 'viewport')) {
      let T = (g) => {
          g.forEach((C) => {
            u(C.isIntersecting);
          });
        },
        E = new IntersectionObserver(T, { threshold: 0.5 });
      return (
        h.current && E.observe(h.current),
        () => {
          E.disconnect();
        }
      );
    }
  }, [e]),
    d.useEffect(() => {
      if (n) {
        let T = setTimeout(() => {
          u(!0);
        }, 100);
        return () => {
          clearTimeout(T);
        };
      }
    }, [n]);
  let v = () => {
      a(!0);
    },
    p = () => {
      a(!1), u(!1);
    };
  return r
    ? e !== 'intent'
      ? [i, h, {}]
      : [
          i,
          h,
          {
            onFocus: le(l, v),
            onBlur: le(s, p),
            onMouseEnter: le(o, v),
            onMouseLeave: le(f, p),
            onTouchStart: le(m, v),
          },
        ]
    : [!1, h, {}];
}
function le(e, t) {
  return (r) => {
    e && e(r), r.defaultPrevented || t(r);
  };
}
function kn({ page: e, ...t }) {
  let { router: r } = Lt(),
    n = d.useMemo(() => Rt(r.routes, e, r.basename), [r.routes, e, r.basename]);
  return n ? d.createElement(Dn, { page: e, matches: n, ...t }) : null;
}
function In(e) {
  let { manifest: t, routeModules: r } = kt(),
    [n, a] = d.useState([]);
  return (
    d.useEffect(() => {
      let i = !1;
      return (
        Sn(e, t, r).then((u) => {
          i || a(u);
        }),
        () => {
          i = !0;
        }
      );
    }, [e, t, r]),
    n
  );
}
function Dn({ page: e, matches: t, ...r }) {
  let n = V(),
    { manifest: a, routeModules: i } = kt(),
    { basename: u } = Lt(),
    { loaderData: l, matches: s } = $n(),
    o = d.useMemo(() => mt(e, t, s, a, n, 'data'), [e, t, s, a, n]),
    f = d.useMemo(() => mt(e, t, s, a, n, 'assets'), [e, t, s, a, n]),
    m = d.useMemo(() => {
      if (e === n.pathname + n.search + n.hash) return [];
      let p = new Set(),
        T = !1;
      if (
        (t.forEach((g) => {
          var w;
          let C = a.routes[g.route.id];
          !C ||
            !C.hasLoader ||
            ((!o.some((O) => O.route.id === g.route.id) &&
              g.route.id in l &&
              (w = i[g.route.id]) != null &&
              w.shouldRevalidate) ||
            C.hasClientLoader
              ? (T = !0)
              : p.add(g.route.id));
        }),
        p.size === 0)
      )
        return [];
      let E = An(e, u);
      return (
        T &&
          p.size > 0 &&
          E.searchParams.set(
            '_routes',
            t
              .filter((g) => p.has(g.route.id))
              .map((g) => g.route.id)
              .join(',')
          ),
        [E.pathname + E.search]
      );
    }, [u, l, n, a, o, t, e, i]),
    h = d.useMemo(() => xn(f, a), [f, a]),
    v = In(f);
  return d.createElement(
    d.Fragment,
    null,
    m.map((p) =>
      d.createElement('link', {
        key: p,
        rel: 'prefetch',
        as: 'fetch',
        href: p,
        ...r,
      })
    ),
    h.map((p) =>
      d.createElement('link', { key: p, rel: 'modulepreload', href: p, ...r })
    ),
    v.map(({ key: p, link: T }) => d.createElement('link', { key: p, ...T }))
  );
}
function Mn(...e) {
  return (t) => {
    e.forEach((r) => {
      typeof r == 'function' ? r(t) : r != null && (r.current = t);
    });
  };
}
var It =
  typeof window < 'u' &&
  typeof window.document < 'u' &&
  typeof window.document.createElement < 'u';
try {
  It && (window.__reactRouterVersion = '7.5.1');
} catch {}
function na({ basename: e, children: t, window: r }) {
  let n = d.useRef();
  n.current == null && (n.current = Tr({ window: r, v5Compat: !0 }));
  let a = n.current,
    [i, u] = d.useState({ action: a.action, location: a.location }),
    l = d.useCallback(
      (s) => {
        d.startTransition(() => u(s));
      },
      [u]
    );
  return (
    d.useLayoutEffect(() => a.listen(l), [a, l]),
    d.createElement(dn, {
      basename: e,
      children: t,
      location: i.location,
      navigationType: i.action,
      navigator: a,
    })
  );
}
var Dt = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Mt = d.forwardRef(function (
    {
      onClick: t,
      discover: r = 'render',
      prefetch: n = 'none',
      relative: a,
      reloadDocument: i,
      replace: u,
      state: l,
      target: s,
      to: o,
      preventScrollReset: f,
      viewTransition: m,
      ...h
    },
    v
  ) {
    let { basename: p } = d.useContext(j),
      T = typeof o == 'string' && Dt.test(o),
      E,
      g = !1;
    if (typeof o == 'string' && T && ((E = o), It))
      try {
        let k = new URL(window.location.href),
          F = o.startsWith('//') ? new URL(k.protocol + o) : new URL(o),
          oe = K(F.pathname, p);
        F.origin === k.origin && oe != null
          ? (o = oe + F.search + F.hash)
          : (g = !0);
      } catch {
        H(
          !1,
          `<Link to="${o}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let C = Kr(o, { relative: a }),
      [w, O, b] = Ln(n, h),
      B = jn(o, {
        replace: u,
        state: l,
        target: s,
        preventScrollReset: f,
        relative: a,
        viewTransition: m,
      });
    function D(k) {
      t && t(k), k.defaultPrevented || B(k);
    }
    let q = d.createElement('a', {
      ...h,
      ...b,
      href: E || C,
      onClick: g || i ? t : D,
      ref: Mn(v, O),
      target: s,
      'data-discover': !T && r === 'render' ? 'true' : void 0,
    });
    return w && !T
      ? d.createElement(d.Fragment, null, q, d.createElement(kn, { page: C }))
      : q;
  });
Mt.displayName = 'Link';
var Hn = d.forwardRef(function (
  {
    'aria-current': t = 'page',
    caseSensitive: r = !1,
    className: n = '',
    end: a = !1,
    style: i,
    to: u,
    viewTransition: l,
    children: s,
    ...o
  },
  f
) {
  let m = fe(u, { relative: o.relative }),
    h = V(),
    v = d.useContext(we),
    { navigator: p, basename: T } = d.useContext(j),
    E = v != null && Wn(m) && l === !0,
    g = p.encodeLocation ? p.encodeLocation(m).pathname : m.pathname,
    C = h.pathname,
    w =
      v && v.navigation && v.navigation.location
        ? v.navigation.location.pathname
        : null;
  r ||
    ((C = C.toLowerCase()),
    (w = w ? w.toLowerCase() : null),
    (g = g.toLowerCase())),
    w && T && (w = K(w, T) || w);
  const O = g !== '/' && g.endsWith('/') ? g.length - 1 : g.length;
  let b = C === g || (!a && C.startsWith(g) && C.charAt(O) === '/'),
    B =
      w != null &&
      (w === g || (!a && w.startsWith(g) && w.charAt(g.length) === '/')),
    D = { isActive: b, isPending: B, isTransitioning: E },
    q = b ? t : void 0,
    k;
  typeof n == 'function'
    ? (k = n(D))
    : (k = [
        n,
        b ? 'active' : null,
        B ? 'pending' : null,
        E ? 'transitioning' : null,
      ]
        .filter(Boolean)
        .join(' '));
  let F = typeof i == 'function' ? i(D) : i;
  return d.createElement(
    Mt,
    {
      ...o,
      'aria-current': q,
      className: k,
      ref: f,
      style: F,
      to: u,
      viewTransition: l,
    },
    typeof s == 'function' ? s(D) : s
  );
});
Hn.displayName = 'NavLink';
var Nn = d.forwardRef(
  (
    {
      discover: e = 'render',
      fetcherKey: t,
      navigate: r,
      reloadDocument: n,
      replace: a,
      state: i,
      method: u = ye,
      action: l,
      onSubmit: s,
      relative: o,
      preventScrollReset: f,
      viewTransition: m,
      ...h
    },
    v
  ) => {
    let p = qn(),
      T = zn(l, { relative: o }),
      E = u.toLowerCase() === 'get' ? 'get' : 'post',
      g = typeof l == 'string' && Dt.test(l),
      C = (w) => {
        if ((s && s(w), w.defaultPrevented)) return;
        w.preventDefault();
        let O = w.nativeEvent.submitter,
          b = (O == null ? void 0 : O.getAttribute('formmethod')) || u;
        p(O || w.currentTarget, {
          fetcherKey: t,
          method: b,
          navigate: r,
          replace: a,
          state: i,
          relative: o,
          preventScrollReset: f,
          viewTransition: m,
        });
      };
    return d.createElement('form', {
      ref: v,
      method: E,
      action: T,
      onSubmit: n ? s : C,
      ...h,
      'data-discover': !g && e === 'render' ? 'true' : void 0,
    });
  }
);
Nn.displayName = 'Form';
function Un(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Ht(e) {
  let t = d.useContext(re);
  return A(t, Un(e)), t;
}
function jn(
  e,
  {
    target: t,
    replace: r,
    state: n,
    preventScrollReset: a,
    relative: i,
    viewTransition: u,
  } = {}
) {
  let l = We(),
    s = V(),
    o = fe(e, { relative: i });
  return d.useCallback(
    (f) => {
      if (gn(f, t)) {
        f.preventDefault();
        let m = r !== void 0 ? r : ce(s) === ce(o);
        l(e, {
          replace: m,
          state: n,
          preventScrollReset: a,
          relative: i,
          viewTransition: u,
        });
      }
    },
    [s, l, o, r, n, t, e, a, i, u]
  );
}
function aa(e) {
  H(
    typeof URLSearchParams < 'u',
    'You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.'
  );
  let t = d.useRef(je(e)),
    r = d.useRef(!1),
    n = V(),
    a = d.useMemo(() => vn(n.search, r.current ? null : t.current), [n.search]),
    i = We(),
    u = d.useCallback(
      (l, s) => {
        const o = je(typeof l == 'function' ? l(a) : l);
        (r.current = !0), i('?' + o, s);
      },
      [i, a]
    );
  return [a, u];
}
var Fn = 0,
  Bn = () => `__${String(++Fn)}__`;
function qn() {
  let { router: e } = Ht('useSubmit'),
    { basename: t } = d.useContext(j),
    r = sn();
  return d.useCallback(
    async (n, a = {}) => {
      let { action: i, method: u, encType: l, formData: s, body: o } = Tn(n, t);
      if (a.navigate === !1) {
        let f = a.fetcherKey || Bn();
        await e.fetch(f, r, a.action || i, {
          preventScrollReset: a.preventScrollReset,
          formData: s,
          body: o,
          formMethod: a.method || u,
          formEncType: a.encType || l,
          flushSync: a.flushSync,
        });
      } else
        await e.navigate(a.action || i, {
          preventScrollReset: a.preventScrollReset,
          formData: s,
          body: o,
          formMethod: a.method || u,
          formEncType: a.encType || l,
          replace: a.replace,
          state: a.state,
          fromRouteId: r,
          flushSync: a.flushSync,
          viewTransition: a.viewTransition,
        });
    },
    [e, t, r]
  );
}
function zn(e, { relative: t } = {}) {
  let { basename: r } = d.useContext(j),
    n = d.useContext(N);
  A(n, 'useFormAction must be used inside a RouteContext');
  let [a] = n.matches.slice(-1),
    i = { ...fe(e || '.', { relative: t }) },
    u = V();
  if (e == null) {
    i.search = u.search;
    let l = new URLSearchParams(i.search),
      s = l.getAll('index');
    if (s.some((f) => f === '')) {
      l.delete('index'),
        s.filter((m) => m).forEach((m) => l.append('index', m));
      let f = l.toString();
      i.search = f ? `?${f}` : '';
    }
  }
  return (
    (!e || e === '.') &&
      a.route.index &&
      (i.search = i.search ? i.search.replace(/^\?/, '?index&') : '?index'),
    r !== '/' && (i.pathname = i.pathname === '/' ? r : Y([r, i.pathname])),
    ce(i)
  );
}
function Wn(e, t = {}) {
  let r = d.useContext(_t);
  A(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: n } = Ht('useViewTransitionState'),
    a = fe(e, { relative: t.relative });
  if (!r.isTransitioning) return !1;
  let i = K(r.currentLocation.pathname, n) || r.currentLocation.pathname,
    u = K(r.nextLocation.pathname, n) || r.nextLocation.pathname;
  return ve(a.pathname, u) != null || ve(a.pathname, i) != null;
}
new TextEncoder();
[...On];
export {
  na as B,
  Xn as H,
  Mt as L,
  Hn as N,
  ta as O,
  W as R,
  yt as a,
  Jn as b,
  Zn as c,
  We as d,
  Gn as e,
  Vn as f,
  Ee as g,
  Kt as h,
  Kn as i,
  Qn as j,
  aa as k,
  ea as l,
  ra as m,
  fn as n,
  yr as o,
  d as r,
  V as u,
};
