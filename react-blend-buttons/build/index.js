module.exports = (() => {
  "use strict";
  var e = {
      523: (e, t, r) => {
        r.r(t), r.d(t, { default: () => s });
        const n = require("react");
        var o = r.n(n);
        function a(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function u(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? a(Object(r), !0).forEach(function (t) {
                  i(e, t, r[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : a(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
          }
          return e;
        }
        function i(e, t, r) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = r),
            e
          );
        }
        function c(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              if (
                "undefined" != typeof Symbol &&
                Symbol.iterator in Object(e)
              ) {
                var r = [],
                  n = !0,
                  o = !1,
                  a = void 0;
                try {
                  for (
                    var u, i = e[Symbol.iterator]();
                    !(n = (u = i.next()).done) &&
                    (r.push(u.value), !t || r.length !== t);
                    n = !0
                  );
                } catch (e) {
                  (o = !0), (a = e);
                } finally {
                  try {
                    n || null == i.return || i.return();
                  } finally {
                    if (o) throw a;
                  }
                }
                return r;
              }
            })(e, t) ||
            (function (e, t) {
              if (e) {
                if ("string" == typeof e) return l(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === r && e.constructor && (r = e.constructor.name),
                  "Map" === r || "Set" === r
                    ? Array.from(e)
                    : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? l(e, t)
                    : void 0
                );
              }
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function l(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        var b = function (e) {
          var t = e.btnText,
            r = e.colorMain,
            a = e.borderRadius,
            i = e.padding,
            l = e.fontSize,
            b = Math.random().toString(36).substr(2, 4),
            s = c((0, n.useState)(!1), 2),
            d = s[0],
            f = s[1],
            p = c((0, n.useState)(!1), 2),
            y = p[0],
            g = p[1],
            m = c((0, n.useState)(!1), 2),
            v = m[0],
            O = m[1],
            S = c((0, n.useState)(""), 2),
            j = S[0],
            w = S[1];
          (0, n.useEffect)(
            function () {
              var e = document.querySelector("#blend-btn-".concat(b))
                  .parentElement,
                t = window.getComputedStyle(e).backgroundColor,
                r = window.getComputedStyle(e).backgroundImage;
              return "none" !== r
                ? (O(!0), w(r))
                : "rgba(0, 0, 0, 0)" === t && "none" === r
                ? w("white")
                : void w(t);
            },
            [v, b]
          );
          var h = {
              border: "none",
              outline: "none",
              cursor: "pointer",
              color: j,
              transition: "all 0.3s",
              transform: y && "scale(.9)",
              borderRadius: a,
              background: r,
              padding: i,
              fontSize: l,
            },
            P = u(
              u({}, h),
              {},
              {
                background: "transparent",
                color: r,
                border: "solid 1px ".concat(r),
              }
            ),
            k = {
              backgroundColor: "#000",
              backgroundImage: j,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            };
          return o().createElement(
            "button",
            {
              id: "blend-btn-".concat(b),
              className: "blend-btn",
              onMouseOver: function () {
                return f(!0);
              },
              onMouseOut: function () {
                return f(!1);
              },
              onMouseDown: function () {
                return g(!0);
              },
              onMouseUp: function () {
                return g(!1);
              },
              style: d ? P : h,
            },
            v ? o().createElement("p", { style: d ? { color: r } : k }, t) : t
          );
        };
        b.defaultProps = {
          btnText: "Submit",
          padding: ".8vw 2vw",
          colorMain: "black",
        };
        const s = b;
      },
    },
    t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var o = (t[n] = { exports: {} });
    return e[n](o, o.exports, r), o.exports;
  }
  return (
    (r.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return r.d(t, { a: t }), t;
    }),
    (r.d = (e, t) => {
      for (var n in t)
        r.o(t, n) &&
          !r.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (r.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    r(523)
  );
})();
