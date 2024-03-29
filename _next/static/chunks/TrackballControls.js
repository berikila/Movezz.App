(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [257],
  {
    87210: function (e, t, r) {
      "use strict";
      r.d(t, {
        Y: function () {
          return u;
        },
      });
      var n = r(67294),
        o = r(99477),
        a = r(88279);
      const i = (e) => e && e.isOrthographicCamera,
        s = n.createContext(null);
      function u({
        children: e,
        damping: t = 6,
        fit: r,
        clip: u,
        observe: c,
        margin: l = 1.2,
        eps: f = 0.01,
        onFit: d,
      }) {
        const m = n.useRef(null),
          { camera: p, invalidate: h, size: y, controls: x } = (0, a.w)(),
          b = n.useRef(d);
        function v(e, t) {
          return (
            Math.abs(e.x - t.x) < f &&
            Math.abs(e.y - t.y) < f &&
            Math.abs(e.z - t.z) < f
          );
        }
        function g(e, t, r, n) {
          (e.x = o.MathUtils.damp(e.x, t.x, r, n)),
            (e.y = o.MathUtils.damp(e.y, t.y, r, n)),
            (e.z = o.MathUtils.damp(e.z, t.z, r, n));
        }
        b.current = d;
        const [w] = n.useState(() => ({
            animating: !1,
            focus: new o.Vector3(),
            camera: new o.Vector3(),
            zoom: 1,
          })),
          [_] = n.useState(() => ({
            focus: new o.Vector3(),
            camera: new o.Vector3(),
            zoom: 1,
          })),
          [M] = n.useState(() => new o.Box3()),
          z = n.useMemo(() => {
            function e() {
              const e = M.getSize(new o.Vector3()),
                t = M.getCenter(new o.Vector3()),
                r = Math.max(e.x, e.y, e.z),
                n = i(p) ? 4 * r : r / (2 * Math.atan((Math.PI * p.fov) / 360)),
                a = i(p) ? 4 * r : n / p.aspect,
                s = l * Math.max(n, a);
              return { box: M, size: e, center: t, distance: s };
            }
            return {
              getSize: e,
              refresh(t) {
                if ((r = t) && r.isBox3) M.copy(t);
                else {
                  const e = t || m.current;
                  e.updateWorldMatrix(!0, !0), M.setFromObject(e);
                }
                var r;
                if (M.isEmpty()) {
                  const e = p.position.length() || 10;
                  M.setFromCenterAndSize(
                    new o.Vector3(),
                    new o.Vector3(e, e, e)
                  );
                }
                if (
                  "OrthographicTrackballControls" ===
                  (null == x ? void 0 : x.constructor.name)
                ) {
                  const { distance: t } = e(),
                    r = p.position
                      .clone()
                      .sub(x.target)
                      .normalize()
                      .multiplyScalar(t),
                    n = x.target.clone().add(r);
                  p.position.copy(n);
                }
                return this;
              },
              clip() {
                const { distance: t } = e();
                return (
                  x && (x.maxDistance = 10 * t),
                  (p.near = t / 100),
                  (p.far = 100 * t),
                  p.updateProjectionMatrix(),
                  x && x.update(),
                  h(),
                  this
                );
              },
              fit() {
                w.camera.copy(p.position), x && w.focus.copy(x.target);
                const { center: r, distance: n } = e(),
                  a = r.clone().sub(p.position).normalize().multiplyScalar(n);
                if ((_.camera.copy(r).sub(a), _.focus.copy(r), i(p))) {
                  w.zoom = p.zoom;
                  let e = 0,
                    n = 0;
                  const a = [
                    new o.Vector3(M.min.x, M.min.y, M.min.z),
                    new o.Vector3(M.min.x, M.max.y, M.min.z),
                    new o.Vector3(M.min.x, M.min.y, M.max.z),
                    new o.Vector3(M.min.x, M.max.y, M.max.z),
                    new o.Vector3(M.max.x, M.max.y, M.max.z),
                    new o.Vector3(M.max.x, M.max.y, M.min.z),
                    new o.Vector3(M.max.x, M.min.y, M.max.z),
                    new o.Vector3(M.max.x, M.min.y, M.min.z),
                  ];
                  r.applyMatrix4(p.matrixWorldInverse);
                  for (const t of a)
                    t.applyMatrix4(p.matrixWorldInverse),
                      (e = Math.max(e, Math.abs(t.y - r.y))),
                      (n = Math.max(n, Math.abs(t.x - r.x)));
                  (e *= 2), (n *= 2);
                  const i = (p.top - p.bottom) / e,
                    s = (p.right - p.left) / n;
                  (_.zoom = Math.min(i, s) / l),
                    t || ((p.zoom = _.zoom), p.updateProjectionMatrix());
                }
                return (
                  t
                    ? (w.animating = !0)
                    : (p.position.copy(_.camera),
                      p.lookAt(_.focus),
                      x && (x.target.copy(_.focus), x.update())),
                  b.current && b.current(this.getSize()),
                  h(),
                  this
                );
              },
            };
          }, [M, p, x, l, t, h]);
        n.useLayoutEffect(() => {
          if (x) {
            const e = () => (w.animating = !1);
            return (
              x.addEventListener("start", e),
              () => x.removeEventListener("start", e)
            );
          }
        }, [x]);
        const P = n.useRef(0);
        return (
          n.useEffect(() => {
            (c || 0 === P.current++) &&
              (z.refresh(), r && z.fit(), u && z.clip());
          }, [y, u, r, c]),
          (0, a.x)((e, r) => {
            if (w.animating) {
              if (
                (g(w.focus, _.focus, t, r),
                g(w.camera, _.camera, t, r),
                (w.zoom = o.MathUtils.damp(w.zoom, _.zoom, t, r)),
                p.position.copy(w.camera),
                i(p) && ((p.zoom = w.zoom), p.updateProjectionMatrix()),
                x ? (x.target.copy(w.focus), x.update()) : p.lookAt(w.focus),
                h(),
                i(p) && !(Math.abs(w.zoom - _.zoom) < f))
              )
                return;
              if (!i(p) && !v(w.camera, _.camera)) return;
              if (x && !v(w.focus, _.focus)) return;
              w.animating = !1;
            }
          }),
          n.createElement(
            "group",
            { ref: m },
            n.createElement(s.Provider, { value: z }, e)
          )
        );
      }
    },
    77854: function (e, t, r) {
      "use strict";
      r.d(t, {
        V: function () {
          return x;
        },
      });
      var n = r(87462),
        o = r(67294),
        a = r(73935),
        i = r(99477),
        s = r(88279);
      const u = new i.Vector3(),
        c = new i.Vector3(),
        l = new i.Vector3();
      function f(e, t, r) {
        const n = u.setFromMatrixPosition(e.matrixWorld);
        n.project(t);
        const o = r.width / 2,
          a = r.height / 2;
        return [n.x * o + o, -n.y * a + a];
      }
      const d = (e) => (Math.abs(e) < 1e-10 ? 0 : e);
      function m(e, t, r = "") {
        let n = "matrix3d(";
        for (let o = 0; 16 !== o; o++)
          n += d(t[o] * e.elements[o]) + (15 !== o ? "," : ")");
        return r + n;
      }
      const p =
        ((h = [1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1]),
        (e) => m(e, h));
      var h;
      const y = (e, t) => {
          return m(
            e,
            [
              1 / (r = t),
              1 / r,
              1 / r,
              1,
              -1 / r,
              -1 / r,
              -1 / r,
              -1,
              1 / r,
              1 / r,
              1 / r,
              1,
              1,
              1,
              1,
              1,
            ],
            "translate(-50%,-50%)"
          );
          var r;
        },
        x = o.forwardRef(
          (
            {
              children: e,
              eps: t = 0.001,
              style: r,
              className: m,
              prepend: h,
              center: x,
              fullscreen: b,
              portal: v,
              distanceFactor: g,
              sprite: w = !1,
              transform: _ = !1,
              occlude: M,
              onOcclude: z,
              zIndexRange: P = [16777271, 0],
              calculatePosition: O = f,
              as: E = "div",
              wrapperClass: C,
              pointerEvents: k = "auto",
              ...j
            },
            V
          ) => {
            var S;
            const W = (0, s.w)(({ gl: e }) => e),
              T = (0, s.w)(({ camera: e }) => e),
              R = (0, s.w)(({ scene: e }) => e),
              F = (0, s.w)(({ size: e }) => e),
              $ = (0, s.w)(({ raycaster: e }) => e),
              [D] = o.useState(() => document.createElement(E)),
              I = o.useRef(null),
              L = o.useRef(0),
              A = o.useRef([0, 0]),
              N = o.useRef(null),
              U = o.useRef(null),
              G =
                null !== (S = null == v ? void 0 : v.current) && void 0 !== S
                  ? S
                  : W.domElement.parentNode;
            o.useEffect(() => {
              if (I.current) {
                if ((R.updateMatrixWorld(), _))
                  D.style.cssText =
                    "position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";
                else {
                  const e = O(I.current, T, F);
                  D.style.cssText = `position:absolute;top:0;left:0;transform:translate3d(${e[0]}px,${e[1]}px,0);transform-origin:0 0;`;
                }
                return (
                  G && (h ? G.prepend(D) : G.appendChild(D)),
                  () => {
                    G && G.removeChild(D), a.unmountComponentAtNode(D);
                  }
                );
              }
            }, [G, _]),
              o.useLayoutEffect(() => {
                C && (D.className = C);
              }, [C]);
            const B = o.useMemo(
                () =>
                  _
                    ? {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: F.width,
                        height: F.height,
                        transformStyle: "preserve-3d",
                        pointerEvents: "none",
                      }
                    : {
                        position: "absolute",
                        transform: x ? "translate3d(-50%,-50%,0)" : "none",
                        ...(b && {
                          top: -F.height / 2,
                          left: -F.width / 2,
                          width: F.width,
                          height: F.height,
                        }),
                        ...r,
                      },
                [r, x, b, F, _]
              ),
              Y = o.useMemo(
                () => ({ position: "absolute", pointerEvents: k }),
                [k]
              );
            o.useLayoutEffect(() => {
              _
                ? a.render(
                    o.createElement(
                      "div",
                      { ref: N, style: B },
                      o.createElement(
                        "div",
                        { ref: U, style: Y },
                        o.createElement("div", {
                          ref: V,
                          className: m,
                          style: r,
                          children: e,
                        })
                      )
                    ),
                    D
                  )
                : a.render(
                    o.createElement("div", {
                      ref: V,
                      style: B,
                      className: m,
                      children: e,
                    }),
                    D
                  );
            });
            const Z = o.useRef(!0);
            return (
              (0, s.x)(() => {
                if (I.current) {
                  T.updateMatrixWorld(), I.current.updateWorldMatrix(!0, !1);
                  const e = _ ? A.current : O(I.current, T, F);
                  if (
                    _ ||
                    Math.abs(L.current - T.zoom) > t ||
                    Math.abs(A.current[0] - e[0]) > t ||
                    Math.abs(A.current[1] - e[1]) > t
                  ) {
                    const t = (function (e, t) {
                      const r = u.setFromMatrixPosition(e.matrixWorld),
                        n = c.setFromMatrixPosition(t.matrixWorld),
                        o = r.sub(n),
                        a = t.getWorldDirection(l);
                      return o.angleTo(a) > Math.PI / 2;
                    })(I.current, T);
                    let r = !1;
                    "boolean" === typeof M
                      ? !0 === M && (r = [R])
                      : Array.isArray(M) && (r = M.map((e) => e.current));
                    const n = Z.current;
                    if (r) {
                      const e = (function (e, t, r, n) {
                        const o = u.setFromMatrixPosition(e.matrixWorld),
                          a = o.clone();
                        a.project(t), r.setFromCamera(a, t);
                        const i = r.intersectObjects(n, !0);
                        if (i.length) {
                          const e = i[0].distance;
                          return o.distanceTo(r.ray.origin) < e;
                        }
                        return !0;
                      })(I.current, T, $, r);
                      Z.current = e && !t;
                    } else Z.current = !t;
                    if (
                      (n !== Z.current &&
                        (z
                          ? z(!Z.current)
                          : (D.style.display = Z.current ? "block" : "none")),
                      (D.style.zIndex = `${(function (e, t, r) {
                        if (
                          t instanceof i.PerspectiveCamera ||
                          t instanceof i.OrthographicCamera
                        ) {
                          const n = u.setFromMatrixPosition(e.matrixWorld),
                            o = c.setFromMatrixPosition(t.matrixWorld),
                            a = n.distanceTo(o),
                            i = (r[1] - r[0]) / (t.far - t.near),
                            s = r[1] - i * t.far;
                          return Math.round(i * a + s);
                        }
                      })(I.current, T, P)}`),
                      _)
                    ) {
                      const [e, t] = [F.width / 2, F.height / 2],
                        r = T.projectionMatrix.elements[5] * t,
                        {
                          isOrthographicCamera: n,
                          top: o,
                          left: a,
                          bottom: i,
                          right: s,
                        } = T,
                        u = p(T.matrixWorldInverse),
                        c = n
                          ? `scale(${r})translate(${d(-(s + a) / 2)}px,${d(
                              (o + i) / 2
                            )}px)`
                          : `translateZ(${r}px)`;
                      let l = I.current.matrixWorld;
                      w &&
                        ((l = T.matrixWorldInverse
                          .clone()
                          .transpose()
                          .copyPosition(l)
                          .scale(I.current.scale)),
                        (l.elements[3] = l.elements[7] = l.elements[11] = 0),
                        (l.elements[15] = 1)),
                        (D.style.width = F.width + "px"),
                        (D.style.height = F.height + "px"),
                        (D.style.perspective = n ? "" : `${r}px`),
                        N.current &&
                          U.current &&
                          ((N.current.style.transform = `${c}${u}translate(${e}px,${t}px)`),
                          (U.current.style.transform = y(
                            l,
                            1 / ((g || 10) / 400)
                          )));
                    } else {
                      const t =
                        void 0 === g
                          ? 1
                          : (function (e, t) {
                              if (t instanceof i.OrthographicCamera)
                                return t.zoom;
                              if (t instanceof i.PerspectiveCamera) {
                                const r = u.setFromMatrixPosition(
                                    e.matrixWorld
                                  ),
                                  n = c.setFromMatrixPosition(t.matrixWorld),
                                  o = (t.fov * Math.PI) / 180,
                                  a = r.distanceTo(n);
                                return 1 / (2 * Math.tan(o / 2) * a);
                              }
                              return 1;
                            })(I.current, T) * g;
                      D.style.transform = `translate3d(${e[0]}px,${e[1]}px,0) scale(${t})`;
                    }
                    (A.current = e), (L.current = T.zoom);
                  }
                }
              }),
              o.createElement("group", (0, n.Z)({}, j, { ref: I }))
            );
          }
        );
    },
    90638: function (e, t, r) {
      "use strict";
      function n(e, t, r) {
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
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(r);
          "function" === typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
              Object.getOwnPropertySymbols(r).filter(function (e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable;
              })
            )),
            o.forEach(function (t) {
              n(e, t, r[t]);
            });
        }
        return e;
      }
      t.default = function (e, t) {
        var r = a.default,
          n = {
            loading: function (e) {
              e.error, e.isLoading;
              return e.pastDelay, null;
            },
          };
        (i = e),
          (u = Promise),
          (
            null != u && "undefined" !== typeof Symbol && u[Symbol.hasInstance]
              ? u[Symbol.hasInstance](i)
              : i instanceof u
          )
            ? (n.loader = function () {
                return e;
              })
            : "function" === typeof e
            ? (n.loader = e)
            : "object" === typeof e && (n = o({}, n, e));
        var i, u;
        var c = (n = o({}, n, t));
        1;
        if (c.suspense) return r(c);
        n.loadableGenerated &&
          delete (n = o({}, n, n.loadableGenerated)).loadableGenerated;
        if ("boolean" === typeof n.ssr) {
          if (!n.ssr) return delete n.ssr, s(r, n);
          delete n.ssr;
        }
        return r(n);
      };
      i(r(67294));
      var a = i(r(14302));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e, t) {
        return delete t.webpack, delete t.modules, e(t);
      }
    },
    16319: function (e, t, r) {
      "use strict";
      var n;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.LoadableContext = void 0);
      var o = (
        (n = r(67294)) && n.__esModule ? n : { default: n }
      ).default.createContext(null);
      t.LoadableContext = o;
    },
    14302: function (e, t, r) {
      "use strict";
      function n(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function o(e, t, r) {
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
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable;
              })
            )),
            n.forEach(function (t) {
              o(e, t, r[t]);
            });
        }
        return e;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i,
        s = (i = r(67294)) && i.__esModule ? i : { default: i },
        u = r(8024),
        c = r(16319);
      var l = [],
        f = [],
        d = !1;
      function m(e) {
        var t = e(),
          r = { loading: !0, loaded: null, error: null };
        return (
          (r.promise = t
            .then(function (e) {
              return (r.loading = !1), (r.loaded = e), e;
            })
            .catch(function (e) {
              throw ((r.loading = !1), (r.error = e), e);
            })),
          r
        );
      }
      var p = (function () {
        function e(t, r) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this._loadFn = t),
            (this._opts = r),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry();
        }
        var t, r, o;
        return (
          (t = e),
          (r = [
            {
              key: "promise",
              value: function () {
                return this._res.promise;
              },
            },
            {
              key: "retry",
              value: function () {
                var e = this;
                this._clearTimeouts(),
                  (this._res = this._loadFn(this._opts.loader)),
                  (this._state = { pastDelay: !1, timedOut: !1 });
                var t = this._res,
                  r = this._opts;
                if (t.loading) {
                  if ("number" === typeof r.delay)
                    if (0 === r.delay) this._state.pastDelay = !0;
                    else {
                      var n = this;
                      this._delay = setTimeout(function () {
                        n._update({ pastDelay: !0 });
                      }, r.delay);
                    }
                  if ("number" === typeof r.timeout) {
                    var o = this;
                    this._timeout = setTimeout(function () {
                      o._update({ timedOut: !0 });
                    }, r.timeout);
                  }
                }
                this._res.promise
                  .then(function () {
                    e._update({}), e._clearTimeouts();
                  })
                  .catch(function (t) {
                    e._update({}), e._clearTimeouts();
                  }),
                  this._update({});
              },
            },
            {
              key: "_update",
              value: function (e) {
                (this._state = a(
                  {},
                  this._state,
                  {
                    error: this._res.error,
                    loaded: this._res.loaded,
                    loading: this._res.loading,
                  },
                  e
                )),
                  this._callbacks.forEach(function (e) {
                    return e();
                  });
              },
            },
            {
              key: "_clearTimeouts",
              value: function () {
                clearTimeout(this._delay), clearTimeout(this._timeout);
              },
            },
            {
              key: "getCurrentValue",
              value: function () {
                return this._state;
              },
            },
            {
              key: "subscribe",
              value: function (e) {
                var t = this;
                return (
                  this._callbacks.add(e),
                  function () {
                    t._callbacks.delete(e);
                  }
                );
              },
            },
          ]) && n(t.prototype, r),
          o && n(t, o),
          e
        );
      })();
      function h(e) {
        return (function (e, t) {
          var r = function () {
              if (!o) {
                var t = new p(e, n);
                o = {
                  getCurrentValue: t.getCurrentValue.bind(t),
                  subscribe: t.subscribe.bind(t),
                  retry: t.retry.bind(t),
                  promise: t.promise.bind(t),
                };
              }
              return o.promise();
            },
            n = Object.assign(
              {
                loader: null,
                loading: null,
                delay: 200,
                timeout: null,
                webpack: null,
                modules: null,
                suspense: !1,
              },
              t
            );
          n.suspense && (n.lazy = s.default.lazy(n.loader));
          var o = null;
          if (!d && !n.suspense) {
            var i = n.webpack ? n.webpack() : n.modules;
            i &&
              f.push(function (e) {
                var t = !0,
                  n = !1,
                  o = void 0;
                try {
                  for (
                    var a, s = i[Symbol.iterator]();
                    !(t = (a = s.next()).done);
                    t = !0
                  ) {
                    var u = a.value;
                    if (-1 !== e.indexOf(u)) return r();
                  }
                } catch (c) {
                  (n = !0), (o = c);
                } finally {
                  try {
                    t || null == s.return || s.return();
                  } finally {
                    if (n) throw o;
                  }
                }
              });
          }
          var l = n.suspense
            ? function (e, t) {
                return s.default.createElement(n.lazy, a({}, e, { ref: t }));
              }
            : function (e, t) {
                r();
                var a = s.default.useContext(c.LoadableContext),
                  i = u.useSubscription(o);
                return (
                  s.default.useImperativeHandle(
                    t,
                    function () {
                      return { retry: o.retry };
                    },
                    []
                  ),
                  a &&
                    Array.isArray(n.modules) &&
                    n.modules.forEach(function (e) {
                      a(e);
                    }),
                  s.default.useMemo(
                    function () {
                      return i.loading || i.error
                        ? s.default.createElement(n.loading, {
                            isLoading: i.loading,
                            pastDelay: i.pastDelay,
                            timedOut: i.timedOut,
                            error: i.error,
                            retry: o.retry,
                          })
                        : i.loaded
                        ? s.default.createElement(
                            (function (e) {
                              return e && e.__esModule ? e.default : e;
                            })(i.loaded),
                            e
                          )
                        : null;
                    },
                    [e, i]
                  )
                );
              };
          return (
            (l.preload = function () {
              return !n.suspense && r();
            }),
            (l.displayName = "LoadableComponent"),
            s.default.forwardRef(l)
          );
        })(m, e);
      }
      function y(e, t) {
        for (var r = []; e.length; ) {
          var n = e.pop();
          r.push(n(t));
        }
        return Promise.all(r).then(function () {
          if (e.length) return y(e, t);
        });
      }
      (h.preloadAll = function () {
        return new Promise(function (e, t) {
          y(l).then(e, t);
        });
      }),
        (h.preloadReady = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return new Promise(function (t) {
            var r = function () {
              return (d = !0), t();
            };
            y(f, e).then(r, r);
          });
        }),
        (window.__NEXT_PRELOADREADY = h.preloadReady);
      var x = h;
      t.default = x;
    },
    28860: function (e, t, r) {
      e.exports = r(90638);
    },
  },
]);
