"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [623],
  {
    41133: function (g, I, C) {
      C.d(I, {
        wI: function () {
          return HC;
        },
        rQ: function () {
          return RC;
        },
      });
      var A,
        G = C(67294),
        b = C(88279),
        l = C(99477),
        Z = C(85893),
        c = { exports: {} },
        B = "object" === typeof Reflect ? Reflect : null,
        o =
          B && "function" === typeof B.apply
            ? B.apply
            : function (g, I, C) {
                return Function.prototype.apply.call(g, I, C);
              };
      A =
        B && "function" === typeof B.ownKeys
          ? B.ownKeys
          : Object.getOwnPropertySymbols
          ? function (g) {
              return Object.getOwnPropertyNames(g).concat(
                Object.getOwnPropertySymbols(g)
              );
            }
          : function (g) {
              return Object.getOwnPropertyNames(g);
            };
      var d =
        Number.isNaN ||
        function (g) {
          return g !== g;
        };
      function i() {
        i.init.call(this);
      }
      (c.exports = i),
        (c.exports.once = function (g, I) {
          return new Promise(function (C, A) {
            function G(C) {
              g.removeListener(I, b), A(C);
            }
            function b() {
              "function" === typeof g.removeListener &&
                g.removeListener("error", G),
                C([].slice.call(arguments));
            }
            K(g, I, b, { once: !0 }),
              "error" !== I &&
                (function (g, I, C) {
                  "function" === typeof g.on && K(g, "error", I, C);
                })(g, G, { once: !0 });
          });
        }),
        (i.EventEmitter = i),
        (i.prototype._events = void 0),
        (i.prototype._eventsCount = 0),
        (i.prototype._maxListeners = void 0);
      var s = 10;
      function m(g) {
        if ("function" !== typeof g)
          throw new TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof g
          );
      }
      function W(g) {
        return void 0 === g._maxListeners
          ? i.defaultMaxListeners
          : g._maxListeners;
      }
      function h(g, I, C, A) {
        var G, b, l, Z;
        if (
          (m(C),
          void 0 === (b = g._events)
            ? ((b = g._events = Object.create(null)), (g._eventsCount = 0))
            : (void 0 !== b.newListener &&
                (g.emit("newListener", I, C.listener ? C.listener : C),
                (b = g._events)),
              (l = b[I])),
          void 0 === l)
        )
          (l = b[I] = C), ++g._eventsCount;
        else if (
          ("function" === typeof l
            ? (l = b[I] = A ? [C, l] : [l, C])
            : A
            ? l.unshift(C)
            : l.push(C),
          (G = W(g)) > 0 && l.length > G && !l.warned)
        ) {
          l.warned = !0;
          var c = new Error(
            "Possible EventEmitter memory leak detected. " +
              l.length +
              " " +
              String(I) +
              " listeners added. Use emitter.setMaxListeners() to increase limit"
          );
          (c.name = "MaxListenersExceededWarning"),
            (c.emitter = g),
            (c.type = I),
            (c.count = l.length),
            (Z = c),
            console && console.warn && console.warn(Z);
        }
        return g;
      }
      function a() {
        if (!this.fired)
          return (
            this.target.removeListener(this.type, this.wrapFn),
            (this.fired = !0),
            0 === arguments.length
              ? this.listener.call(this.target)
              : this.listener.apply(this.target, arguments)
          );
      }
      function V(g, I, C) {
        var A = { fired: !1, wrapFn: void 0, target: g, type: I, listener: C },
          G = a.bind(A);
        return (G.listener = C), (A.wrapFn = G), G;
      }
      function y(g, I, C) {
        var A = g._events;
        if (void 0 === A) return [];
        var G = A[I];
        return void 0 === G
          ? []
          : "function" === typeof G
          ? C
            ? [G.listener || G]
            : [G]
          : C
          ? (function (g) {
              for (var I = new Array(g.length), C = 0; C < I.length; ++C)
                I[C] = g[C].listener || g[C];
              return I;
            })(G)
          : Y(G, G.length);
      }
      function X(g) {
        var I = this._events;
        if (void 0 !== I) {
          var C = I[g];
          if ("function" === typeof C) return 1;
          if (void 0 !== C) return C.length;
        }
        return 0;
      }
      function Y(g, I) {
        for (var C = new Array(I), A = 0; A < I; ++A) C[A] = g[A];
        return C;
      }
      function K(g, I, C, A) {
        if ("function" === typeof g.on) A.once ? g.once(I, C) : g.on(I, C);
        else {
          if ("function" !== typeof g.addEventListener)
            throw new TypeError(
              'The "emitter" argument must be of type EventEmitter. Received type ' +
                typeof g
            );
          g.addEventListener(I, function G(b) {
            A.once && g.removeEventListener(I, G), C(b);
          });
        }
      }
      Object.defineProperty(i, "defaultMaxListeners", {
        enumerable: !0,
        get: function () {
          return s;
        },
        set: function (g) {
          if ("number" !== typeof g || g < 0 || d(g))
            throw new RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                g +
                "."
            );
          s = g;
        },
      }),
        (i.init = function () {
          (void 0 !== this._events &&
            this._events !== Object.getPrototypeOf(this)._events) ||
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0);
        }),
        (i.prototype.setMaxListeners = function (g) {
          if ("number" !== typeof g || g < 0 || d(g))
            throw new RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' +
                g +
                "."
            );
          return (this._maxListeners = g), this;
        }),
        (i.prototype.getMaxListeners = function () {
          return W(this);
        }),
        (i.prototype.emit = function (g) {
          for (var I = [], C = 1; C < arguments.length; C++)
            I.push(arguments[C]);
          var A = "error" === g,
            G = this._events;
          if (void 0 !== G) A = A && void 0 === G.error;
          else if (!A) return !1;
          if (A) {
            var b;
            if ((I.length > 0 && (b = I[0]), b instanceof Error)) throw b;
            var l = new Error(
              "Unhandled error." + (b ? " (" + b.message + ")" : "")
            );
            throw ((l.context = b), l);
          }
          var Z = G[g];
          if (void 0 === Z) return !1;
          if ("function" === typeof Z) o(Z, this, I);
          else {
            var c = Z.length,
              B = Y(Z, c);
            for (C = 0; C < c; ++C) o(B[C], this, I);
          }
          return !0;
        }),
        (i.prototype.addListener = function (g, I) {
          return h(this, g, I, !1);
        }),
        (i.prototype.on = i.prototype.addListener),
        (i.prototype.prependListener = function (g, I) {
          return h(this, g, I, !0);
        }),
        (i.prototype.once = function (g, I) {
          return m(I), this.on(g, V(this, g, I)), this;
        }),
        (i.prototype.prependOnceListener = function (g, I) {
          return m(I), this.prependListener(g, V(this, g, I)), this;
        }),
        (i.prototype.removeListener = function (g, I) {
          var C, A, G, b, l;
          if ((m(I), void 0 === (A = this._events))) return this;
          if (void 0 === (C = A[g])) return this;
          if (C === I || C.listener === I)
            0 === --this._eventsCount
              ? (this._events = Object.create(null))
              : (delete A[g],
                A.removeListener &&
                  this.emit("removeListener", g, C.listener || I));
          else if ("function" !== typeof C) {
            for (G = -1, b = C.length - 1; b >= 0; b--)
              if (C[b] === I || C[b].listener === I) {
                (l = C[b].listener), (G = b);
                break;
              }
            if (G < 0) return this;
            0 === G
              ? C.shift()
              : (function (g, I) {
                  for (; I + 1 < g.length; I++) g[I] = g[I + 1];
                  g.pop();
                })(C, G),
              1 === C.length && (A[g] = C[0]),
              void 0 !== A.removeListener &&
                this.emit("removeListener", g, l || I);
          }
          return this;
        }),
        (i.prototype.off = i.prototype.removeListener),
        (i.prototype.removeAllListeners = function (g) {
          var I, C, A;
          if (void 0 === (C = this._events)) return this;
          if (void 0 === C.removeListener)
            return (
              0 === arguments.length
                ? ((this._events = Object.create(null)),
                  (this._eventsCount = 0))
                : void 0 !== C[g] &&
                  (0 === --this._eventsCount
                    ? (this._events = Object.create(null))
                    : delete C[g]),
              this
            );
          if (0 === arguments.length) {
            var G,
              b = Object.keys(C);
            for (A = 0; A < b.length; ++A)
              "removeListener" !== (G = b[A]) && this.removeAllListeners(G);
            return (
              this.removeAllListeners("removeListener"),
              (this._events = Object.create(null)),
              (this._eventsCount = 0),
              this
            );
          }
          if ("function" === typeof (I = C[g])) this.removeListener(g, I);
          else if (void 0 !== I)
            for (A = I.length - 1; A >= 0; A--) this.removeListener(g, I[A]);
          return this;
        }),
        (i.prototype.listeners = function (g) {
          return y(this, g, !0);
        }),
        (i.prototype.rawListeners = function (g) {
          return y(this, g, !1);
        }),
        (i.listenerCount = function (g, I) {
          return "function" === typeof g.listenerCount
            ? g.listenerCount(I)
            : X.call(g, I);
        }),
        (i.prototype.listenerCount = X),
        (i.prototype.eventNames = function () {
          return this._eventsCount > 0 ? A(this._events) : [];
        });
      var u = c.exports;
      function n(g, I, C) {
        var A = void 0 === I ? null : I,
          G = (function (g, I) {
            var C = atob(g);
            if (I) {
              for (
                var A = new Uint8Array(C.length), G = 0, b = C.length;
                G < b;
                ++G
              )
                A[G] = C.charCodeAt(G);
              return String.fromCharCode.apply(null, new Uint16Array(A.buffer));
            }
            return C;
          })(g, void 0 !== C && C),
          b = G.indexOf("\n", 10) + 1,
          l = G.substring(b) + (A ? "//# sourceMappingURL=" + A : ""),
          Z = new Blob([l], { type: "application/javascript" });
        return URL.createObjectURL(Z);
      }
      var p = (function (g, I, C) {
        var A;
        return function (G) {
          return (A = A || n(g, I, C)), new Worker(A, G);
        };
      })(
        "Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24gKCkgewogICd1c2Ugc3RyaWN0JzsKCiAgLyoqCiAgICogUmVjb3JkcyB3aGF0IG9iamVjdHMgYXJlIGNvbGxpZGluZyB3aXRoIGVhY2ggb3RoZXIKICAgKi8KCiAgLyoqCiAgICogQSAzeDMgbWF0cml4LgogICAqIEF1dGhvcmVkIGJ5IHtAbGluayBodHRwOi8vZ2l0aHViLmNvbS9zY2h0ZXBwZS8gc2NodGVwcGV9CiAgICovCiAgY2xhc3MgTWF0MyB7CiAgICAvKioKICAgICAqIEEgdmVjdG9yIG9mIGxlbmd0aCA5LCBjb250YWluaW5nIGFsbCBtYXRyaXggZWxlbWVudHMuCiAgICAgKi8KCiAgICAvKioKICAgICAqIEBwYXJhbSBlbGVtZW50cyBBIHZlY3RvciBvZiBsZW5ndGggOSwgY29udGFpbmluZyBhbGwgbWF0cml4IGVsZW1lbnRzLgogICAgICovCiAgICBjb25zdHJ1Y3RvcihlbGVtZW50cykgewogICAgICBpZiAoZWxlbWVudHMgPT09IHZvaWQgMCkgewogICAgICAgIGVsZW1lbnRzID0gWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdOwogICAgICB9CgogICAgICB0aGlzLmVsZW1lbnRzID0gZWxlbWVudHM7CiAgICB9CiAgICAvKioKICAgICAqIFNldHMgdGhlIG1hdHJpeCB0byBpZGVudGl0eQogICAgICogQHRvZG8gU2hvdWxkIHBlcmhhcHMgYmUgcmVuYW1lZCB0byBgc2V0SWRlbnRpdHkoKWAgdG8gYmUgbW9yZSBjbGVhci4KICAgICAqIEB0b2RvIENyZWF0ZSBhbm90aGVyIGZ1bmN0aW9uIHRoYXQgaW1tZWRpYXRlbHkgY3JlYXRlcyBhbiBpZGVudGl0eSBtYXRyaXggZWcuIGBleWUoKWAKICAgICAqLwoKCiAgICBpZGVudGl0eSgpIHsKICAgICAgY29uc3QgZSA9IHRoaXMuZWxlbWVudHM7CiAgICAgIGVbMF0gPSAxOwogICAgICBlWzFdID0gMDsKICAgICAgZVsyXSA9IDA7CiAgICAgIGVbM10gPSAwOwogICAgICBlWzRdID0gMTsKICAgICAgZVs1XSA9IDA7CiAgICAgIGVbNl0gPSAwOwogICAgICBlWzddID0gMDsKICAgICAgZVs4XSA9IDE7CiAgICB9CiAgICAvKioKICAgICAqIFNldCBhbGwgZWxlbWVudHMgdG8gemVybwogICAgICovCgoKICAgIHNldFplcm8oKSB7CiAgICAgIGNvbnN0IGUgPSB0aGlzLmVsZW1lbnRzOwogICAgICBlWzBdID0gMDsKICAgICAgZVsxXSA9IDA7CiAgICAgIGVbMl0gPSAwOwogICAgICBlWzNdID0gMDsKICAgICAgZVs0XSA9IDA7CiAgICAgIGVbNV0gPSAwOwogICAgICBlWzZdID0gMDsKICAgICAgZVs3XSA9IDA7CiAgICAgIGVbOF0gPSAwOwogICAgfQogICAgLyoqCiAgICAgKiBTZXRzIHRoZSBtYXRyaXggZGlhZ29uYWwgZWxlbWVudHMgZnJvbSBhIFZlYzMKICAgICAqLwoKCiAgICBzZXRUcmFjZSh2ZWN0b3IpIHsKICAgICAgY29uc3QgZSA9IHRoaXMuZWxlbWVudHM7CiAgICAgIGVbMF0gPSB2ZWN0b3IueDsKICAgICAgZVs0XSA9IHZlY3Rvci55OwogICAgICBlWzhdID0gdmVjdG9yLno7CiAgICB9CiAgICAvKioKICAgICAqIEdldHMgdGhlIG1hdHJpeCBkaWFnb25hbCBlbGVtZW50cwogICAgICovCgoKICAgIGdldFRyYWNlKHRhcmdldCkgewogICAgICBpZiAodGFyZ2V0ID09PSB2b2lkIDApIHsKICAgICAgICB0YXJnZXQgPSBuZXcgVmVjMygpOwogICAgICB9CgogICAgICBjb25zdCBlID0gdGhpcy5lbGVtZW50czsKICAgICAgdGFyZ2V0LnggPSBlWzBdOwogICAgICB0YXJnZXQueSA9IGVbNF07CiAgICAgIHRhcmdldC56ID0gZVs4XTsKICAgICAgcmV0dXJuIHRhcmdldDsKICAgIH0KICAgIC8qKgogICAgICogTWF0cml4LVZlY3RvciBtdWx0aXBsaWNhdGlvbgogICAgICogQHBhcmFtIHYgVGhlIHZlY3RvciB0byBtdWx0aXBseSB3aXRoCiAgICAgKiBAcGFyYW0gdGFyZ2V0IE9wdGlvbmFsLCB0YXJnZXQgdG8gc2F2ZSB0aGUgcmVzdWx0IGluLgogICAgICovCgoKICAgIHZtdWx0KHYsIHRhcmdldCkgewogICAgICBpZiAodGFyZ2V0ID09PSB2b2lkIDApIHsKICAgICAgICB0YXJnZXQgPSBuZXcgVmVjMygpOwogICAgICB9CgogICAgICBjb25zdCBlID0gdGhpcy5lbGVtZW50czsKICAgICAgY29uc3QgeCA9IHYueDsKICAgICAgY29uc3QgeSA9IHYueTsKICAgICAgY29uc3QgeiA9IHYuejsKICAgICAgdGFyZ2V0LnggPSBlWzBdICogeCArIGVbMV0gKiB5ICsgZVsyXSAqIHo7CiAgICAgIHRhcmdldC55ID0gZVszXSAqIHggKyBlWzRdICogeSArIGVbNV0gKiB6OwogICAgICB0YXJnZXQueiA9IGVbNl0gKiB4ICsgZVs3XSAqIHkgKyBlWzhdICogejsKICAgICAgcmV0dXJuIHRhcmdldDsKICAgIH0KICAgIC8qKgogICAgICogTWF0cml4LXNjYWxhciBtdWx0aXBsaWNhdGlvbgogICAgICovCgoKICAgIHNtdWx0KHMpIHsKICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7CiAgICAgICAgdGhpcy5lbGVtZW50c1tpXSAqPSBzOwogICAgICB9CiAgICB9CiAgICAvKioKICAgICAqIE1hdHJpeCBtdWx0aXBsaWNhdGlvbgogICAgICogQHBhcmFtIG1hdHJpeCBNYXRyaXggdG8gbXVsdGlwbHkgd2l0aCBmcm9tIGxlZnQgc2lkZS4KICAgICAqLwoKCiAgICBtbXVsdChtYXRyaXgsIHRhcmdldCkgewogICAgICBpZiAodGFyZ2V0ID09PSB2b2lkIDApIHsKICAgICAgICB0YXJnZXQgPSBuZXcgTWF0MygpOwogICAgICB9CgogICAgICBjb25zdCBBID0gdGhpcy5lbGVtZW50czsKICAgICAgY29uc3QgQiA9IG1hdHJpeC5lbGVtZW50czsKICAgICAgY29uc3QgVCA9IHRhcmdldC5lbGVtZW50czsKICAgICAgY29uc3QgYTExID0gQVswXSwKICAgICAgICAgICAgYTEyID0gQVsxXSwKICAgICAgICAgICAgYTEzID0gQVsyXSwKICAgICAgICAgICAgYTIxID0gQVszXSwKICAgICAgICAgICAgYTIyID0gQVs0XSwKICAgICAgICAgICAgYTIzID0gQVs1XSwKICAgICAgICAgICAgYTMxID0gQVs2XSwKICAgICAgICAgICAgYTMyID0gQVs3XSwKICAgICAgICAgICAgYTMzID0gQVs4XTsKICAgICAgY29uc3QgYjExID0gQlswXSwKICAgICAgICAgICAgYjEyID0gQlsxXSwKICAgICAgICAgICAgYjEzID0gQlsyXSwKICAgICAgICAgICAgYjIxID0gQlszXSwKICAgICAgICAgICAgYjIyID0gQls0XSwKICAgICAgICAgICAgYjIzID0gQls1XSwKICAgICAgICAgICAgYjMxID0gQls2XSwKICAgICAgICAgICAgYjMyID0gQls3XSwKICAgICAgICAgICAgYjMzID0gQls4XTsKICAgICAgVFswXSA9IGExMSAqIGIxMSArIGExMiAqIGIyMSArIGExMyAqIGIzMTsKICAgICAgVFsxXSA9IGExMSAqIGIxMiArIGExMiAqIGIyMiArIGExMyAqIGIzMjsKICAgICAgVFsyXSA9IGExMSAqIGIxMyArIGExMiAqIGIyMyArIGExMyAqIGIzMzsKICAgICAgVFszXSA9IGEyMSAqIGIxMSArIGEyMiAqIGIyMSArIGEyMyAqIGIzMTsKICAgICAgVFs0XSA9IGEyMSAqIGIxMiArIGEyMiAqIGIyMiArIGEyMyAqIGIzMjsKICAgICAgVFs1XSA9IGEyMSAqIGIxMyArIGEyMiAqIGIyMyArIGEyMyAqIGIzMzsKICAgICAgVFs2XSA9IGEzMSAqIGIxMSArIGEzMiAqIGIyMSArIGEzMyAqIGIzMTsKICAgICAgVFs3XSA9IGEzMSAqIGIxMiArIGEzMiAqIGIyMiArIGEzMyAqIGIzMjsKICAgICAgVFs4XSA9IGEzMSAqIGIxMyArIGEzMiAqIGIyMyArIGEzMyAqIGIzMzsKICAgICAgcmV0dXJuIHRhcmdldDsKICAgIH0KICAgIC8qKgogICAgICogU2NhbGUgZWFjaCBjb2x1bW4gb2YgdGhlIG1hdHJpeAogICAgICovCgoKICAgIHNjYWxlKHZlY3RvciwgdGFyZ2V0KSB7CiAgICAgIGlmICh0YXJnZXQgPT09IHZvaWQgMCkgewogICAgICAgIHRhcmdldCA9IG5ldyBNYXQzKCk7CiAgICAgIH0KCiAgICAgIGNvbnN0IGUgPSB0aGlzLmVsZW1lbnRzOwogICAgICBjb25zdCB0ID0gdGFyZ2V0LmVsZW1lbnRzOwoKICAgICAgZm9yIChsZXQgaSA9IDA7IGkgIT09IDM7IGkrKykgewogICAgICAgIHRbMyAqIGkgKyAwXSA9IHZlY3Rvci54ICogZVszICogaSArIDBdOwogICAgICAgIHRbMyAqIGkgKyAxXSA9IHZlY3Rvci55ICogZVszICogaSArIDFdOwogICAgICAgIHRbMyAqIGkgKyAyXSA9IHZlY3Rvci56ICogZVszICogaSArIDJdOwogICAgICB9CgogICAgICByZXR1cm4gdGFyZ2V0OwogICAgfQogICAgLyoqCiAgICAgKiBTb2x2ZSBBeD1iCiAgICAgKiBAcGFyYW0gYiBUaGUgcmlnaHQgaGFuZCBzaWRlCiAgICAgKiBAcGFyYW0gdGFyZ2V0IE9wdGlvbmFsLiBUYXJnZXQgdmVjdG9yIHRvIHNhdmUgaW4uCiAgICAgKiBAcmV0dXJuIFRoZSBzb2x1dGlvbiB4CiAgICAgKiBAdG9kbyBzaG91bGQgcmV1c2UgYXJyYXlzCiAgICAgKi8KCgogICAgc29sdmUoYiwgdGFyZ2V0KSB7CiAgICAgIGlmICh0YXJnZXQgPT09IHZvaWQgMCkgewogICAgICAgIHRhcmdldCA9IG5ldyBWZWMzKCk7CiAgICAgIH0KCiAgICAgIC8vIENvbnN0cnVjdCBlcXVhdGlvbnMKICAgICAgY29uc3QgbnIgPSAzOyAvLyBudW0gcm93cwoKICAgICAgY29uc3QgbmMgPSA0OyAvLyBudW0gY29scwoKICAgICAgY29uc3QgZXFucyA9IFtdOwogICAgICBsZXQgaTsKICAgICAgbGV0IGo7CgogICAgICBmb3IgKGkgPSAwOyBpIDwgbnIgKiBuYzsgaSsrKSB7CiAgICAgICAgZXFucy5wdXNoKDApOwogICAgICB9CgogICAgICBmb3IgKGkgPSAwOyBpIDwgMzsgaSsrKSB7CiAgICAgICAgZm9yIChqID0gMDsgaiA8IDM7IGorKykgewogICAgICAgICAgZXFuc1tpICsgbmMgKiBqXSA9IHRoaXMuZWxlbWVudHNbaSArIDMgKiBqXTsKICAgICAgICB9CiAgICAgIH0KCiAgICAgIGVxbnNbMyArIDQgKiAwXSA9IGIueDsKICAgICAgZXFuc1szICsgNCAqIDFdID0gYi55OwogICAgICBlcW5zWzMgKyA0ICogMl0gPSBiLno7IC8vIENvbXB1dGUgcmlnaHQgdXBwZXIgdHJpYW5ndWxhciB2ZXJzaW9uIG9mIHRoZSBtYXRyaXggLSBHYXVzcyBlbGltaW5hdGlvbgoKICAgICAgbGV0IG4gPSAzOwogICAgICBjb25zdCBrID0gbjsKICAgICAgbGV0IG5wOwogICAgICBjb25zdCBrcCA9IDQ7IC8vIG51bSByb3dzCgogICAgICBsZXQgcDsKCiAgICAgIGRvIHsKICAgICAgICBpID0gayAtIG47CgogICAgICAgIGlmIChlcW5zW2kgKyBuYyAqIGldID09PSAwKSB7CiAgICAgICAgICAvLyB0aGUgcGl2b3QgaXMgbnVsbCwgc3dhcCBsaW5lcwogICAgICAgICAgZm9yIChqID0gaSArIDE7IGogPCBrOyBqKyspIHsKICAgICAgICAgICAgaWYgKGVxbnNbaSArIG5jICogal0gIT09IDApIHsKICAgICAgICAgICAgICBucCA9IGtwOwoKICAgICAgICAgICAgICBkbyB7CiAgICAgICAgICAgICAgICAvLyBkbyBsaWduZSggaSApID0gbGlnbmUoIGkgKSArIGxpZ25lKCBrICkKICAgICAgICAgICAgICAgIHAgPSBrcCAtIG5wOwogICAgICAgICAgICAgICAgZXFuc1twICsgbmMgKiBpXSArPSBlcW5zW3AgKyBuYyAqIGpdOwogICAgICAgICAgICAgIH0gd2hpbGUgKC0tbnApOwoKICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgfQogICAgICAgICAgfQogICAgICAgIH0KCiAgICAgICAgaWYgKGVxbnNbaSArIG5jICogaV0gIT09IDApIHsKICAgICAgICAgIGZvciAoaiA9IGkgKyAxOyBqIDwgazsgaisrKSB7CiAgICAgICAgICAgIGNvbnN0IG11bHRpcGxpZXIgPSBlcW5zW2kgKyBuYyAqIGpdIC8gZXFuc1tpICsgbmMgKiBpXTsKICAgICAgICAgICAgbnAgPSBrcDsKCiAgICAgICAgICAgIGRvIHsKICAgICAgICAgICAgICAvLyBkbyBsaWduZSggayApID0gbGlnbmUoIGsgKSAtIG11bHRpcGxpZXIgKiBsaWduZSggaSApCiAgICAgICAgICAgICAgcCA9IGtwIC0gbnA7CiAgICAgICAgICAgICAgZXFuc1twICsgbmMgKiBqXSA9IHAgPD0gaSA/IDAgOiBlcW5zW3AgKyBuYyAqIGpdIC0gZXFuc1twICsgbmMgKiBpXSAqIG11bHRpcGxpZXI7CiAgICAgICAgICAgIH0gd2hpbGUgKC0tbnApOwogICAgICAgICAgfQogICAgICAgIH0KICAgICAgfSB3aGlsZSAoLS1uKTsgLy8gR2V0IHRoZSBzb2x1dGlvbgoKCiAgICAgIHRhcmdldC56ID0gZXFuc1syICogbmMgKyAzXSAvIGVxbnNbMiAqIG5jICsgMl07CiAgICAgIHRhcmdldC55ID0gKGVxbnNbMSAqIG5jICsgM10gLSBlcW5zWzEgKiBuYyArIDJdICogdGFyZ2V0LnopIC8gZXFuc1sxICogbmMgKyAxXTsKICAgICAgdGFyZ2V0LnggPSAoZXFuc1swICogbmMgKyAzXSAtIGVxbnNbMCAqIG5jICsgMl0gKiB0YXJnZXQueiAtIGVxbnNbMCAqIG5jICsgMV0gKiB0YXJnZXQueSkgLyBlcW5zWzAgKiBuYyArIDBdOwoKICAgICAgaWYgKGlzTmFOKHRhcmdldC54KSB8fCBpc05hTih0YXJnZXQueSkgfHwgaXNOYU4odGFyZ2V0LnopIHx8IHRhcmdldC54ID09PSBJbmZpbml0eSB8fCB0YXJnZXQueSA9PT0gSW5maW5pdHkgfHwgdGFyZ2V0LnogPT09IEluZmluaXR5KSB7CiAgICAgICAgdGhyb3cgYENvdWxkIG5vdCBzb2x2ZSBlcXVhdGlvbiEgR290IHg9WyR7dGFyZ2V0LnRvU3RyaW5nKCl9XSwgYj1bJHtiLnRvU3RyaW5nKCl9XSwgQT1bJHt0aGlzLnRvU3RyaW5nKCl9XWA7CiAgICAgIH0KCiAgICAgIHJldHVybiB0YXJnZXQ7CiAgICB9CiAgICAvKioKICAgICAqIEdldCBhbiBlbGVtZW50IGluIHRoZSBtYXRyaXggYnkgaW5kZXguIEluZGV4IHN0YXJ0cyBhdCAwLCBub3QgMSEhIQogICAgICogQHBhcmFtIHZhbHVlIElmIHByb3ZpZGVkLCB0aGUgbWF0cml4IGVsZW1lbnQgd2lsbCBiZSBzZXQgdG8gdGhpcyB2YWx1ZS4KICAgICAqLwoKCiAgICBlKHJvdywgY29sdW1uLCB2YWx1ZSkgewogICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkgewogICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRzW2NvbHVtbiArIDMgKiByb3ddOwogICAgICB9IGVsc2UgewogICAgICAgIC8vIFNldCB2YWx1ZQogICAgICAgIHRoaXMuZWxlbWVudHNbY29sdW1uICsgMyAqIHJvd10gPSB2YWx1ZTsKICAgICAgfQogICAgfQogICAgLyoqCiAgICAgKiBDb3B5IGFub3RoZXIgbWF0cml4IGludG8gdGhpcyBtYXRyaXggb2JqZWN0LgogICAgICovCgoKICAgIGNvcHkobWF0cml4KSB7CiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0cml4LmVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7CiAgICAgICAgdGhpcy5lbGVtZW50c1tpXSA9IG1hdHJpeC5lbGVtZW50c1tpXTsKICAgICAgfQoKICAgICAgcmV0dXJuIHRoaXM7CiAgICB9CiAgICAvKioKICAgICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG1hdHJpeC4KICAgICAqLwoKCiAgICB0b1N0cmluZygpIHsKICAgICAgbGV0IHIgPSAnJzsKICAgICAgY29uc3Qgc2VwID0gJywnOwoKICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpKyspIHsKICAgICAgICByICs9IHRoaXMuZWxlbWVudHNbaV0gKyBzZXA7CiAgICAgIH0KCiAgICAgIHJldHVybiByOwogICAgfQogICAgLyoqCiAgICAgKiByZXZlcnNlIHRoZSBtYXRyaXgKICAgICAqIEBwYXJhbSB0YXJnZXQgVGFyZ2V0IG1hdHJpeCB0byBzYXZlIGluLgogICAgICogQHJldHVybiBUaGUgc29sdXRpb24geAogICAgICovCgoKICAgIHJldmVyc2UodGFyZ2V0KSB7CiAgICAgIGlmICh0YXJnZXQgPT09IHZvaWQgMCkgewogICAgICAgIHRhcmdldCA9IG5ldyBNYXQzKCk7CiAgICAgIH0KCiAgICAgIC8vIENvbnN0cnVjdCBlcXVhdGlvbnMKICAgICAgY29uc3QgbnIgPSAzOyAvLyBudW0gcm93cwoKICAgICAgY29uc3QgbmMgPSA2OyAvLyBudW0gY29scwoKICAgICAgY29uc3QgZXFucyA9IHJldmVyc2VfZXFuczsKICAgICAgbGV0IGk7CiAgICAgIGxldCBqOwoKICAgICAgZm9yIChpID0gMDsgaSA8IDM7IGkrKykgewogICAgICAgIGZvciAoaiA9IDA7IGogPCAzOyBqKyspIHsKICAgICAgICAgIGVxbnNbaSArIG5jICogal0gPSB0aGlzLmVsZW1lbnRzW2kgKyAzICogal07CiAgICAgICAgfQogICAgICB9CgogICAgICBlcW5zWzMgKyA2ICogMF0gPSAxOwogICAgICBlcW5zWzMgKyA2ICogMV0gPSAwOwogICAgICBlcW5zWzMgKyA2ICogMl0gPSAwOwogICAgICBlcW5zWzQgKyA2ICogMF0gPSAwOwogICAgICBlcW5zWzQgKyA2ICogMV0gPSAxOwogICAgICBlcW5zWzQgKyA2ICogMl0gPSAwOwogICAgICBlcW5zWzUgKyA2ICogMF0gPSAwOwogICAgICBlcW5zWzUgKyA2ICogMV0gPSAwOwogICAgICBlcW5zWzUgKyA2ICogMl0gPSAxOyAvLyBDb21wdXRlIHJpZ2h0IHVwcGVyIHRyaWFuZ3VsYXIgdmVyc2lvbiBvZiB0aGUgbWF0cml4IC0gR2F1c3MgZWxpbWluYXRpb24KCiAgICAgIGxldCBuID0gMzsKICAgICAgY29uc3QgayA9IG47CiAgICAgIGxldCBucDsKICAgICAgY29uc3Qga3AgPSBuYzsgLy8gbnVtIHJvd3MKCiAgICAgIGxldCBwOwoKICAgICAgZG8gewogICAgICAgIGkgPSBrIC0gbjsKCiAgICAgICAgaWYgKGVxbnNbaSArIG5jICogaV0gPT09IDApIHsKICAgICAgICAgIC8vIHRoZSBwaXZvdCBpcyBudWxsLCBzd2FwIGxpbmVzCiAgICAgICAgICBmb3IgKGogPSBpICsgMTsgaiA8IGs7IGorKykgewogICAgICAgICAgICBpZiAoZXFuc1tpICsgbmMgKiBqXSAhPT0gMCkgewogICAgICAgICAgICAgIG5wID0ga3A7CgogICAgICAgICAgICAgIGRvIHsKICAgICAgICAgICAgICAgIC8vIGRvIGxpbmUoIGkgKSA9IGxpbmUoIGkgKSArIGxpbmUoIGsgKQogICAgICAgICAgICAgICAgcCA9IGtwIC0gbnA7CiAgICAgICAgICAgICAgICBlcW5zW3AgKyBuYyAqIGldICs9IGVxbnNbcCArIG5jICogal07CiAgICAgICAgICAgICAgfSB3aGlsZSAoLS1ucCk7CgogICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICB9CiAgICAgICAgICB9CiAgICAgICAgfQoKICAgICAgICBpZiAoZXFuc1tpICsgbmMgKiBpXSAhPT0gMCkgewogICAgICAgICAgZm9yIChqID0gaSArIDE7IGogPCBrOyBqKyspIHsKICAgICAgICAgICAgY29uc3QgbXVsdGlwbGllciA9IGVxbnNbaSArIG5jICogal0gLyBlcW5zW2kgKyBuYyAqIGldOwogICAgICAgICAgICBucCA9IGtwOwoKICAgICAgICAgICAgZG8gewogICAgICAgICAgICAgIC8vIGRvIGxpbmUoIGsgKSA9IGxpbmUoIGsgKSAtIG11bHRpcGxpZXIgKiBsaW5lKCBpICkKICAgICAgICAgICAgICBwID0ga3AgLSBucDsKICAgICAgICAgICAgICBlcW5zW3AgKyBuYyAqIGpdID0gcCA8PSBpID8gMCA6IGVxbnNbcCArIG5jICogal0gLSBlcW5zW3AgKyBuYyAqIGldICogbXVsdGlwbGllcjsKICAgICAgICAgICAgfSB3aGlsZSAoLS1ucCk7CiAgICAgICAgICB9CiAgICAgICAgfQogICAgICB9IHdoaWxlICgtLW4pOyAvLyBlbGltaW5hdGUgdGhlIHVwcGVyIGxlZnQgdHJpYW5nbGUgb2YgdGhlIG1hdHJpeAoKCiAgICAgIGkgPSAyOwoKICAgICAgZG8gewogICAgICAgIGogPSBpIC0gMTsKCiAgICAgICAgZG8gewogICAgICAgICAgY29uc3QgbXVsdGlwbGllciA9IGVxbnNbaSArIG5jICogal0gLyBlcW5zW2kgKyBuYyAqIGldOwogICAgICAgICAgbnAgPSBuYzsKCiAgICAgICAgICBkbyB7CiAgICAgICAgICAgIHAgPSBuYyAtIG5wOwogICAgICAgICAgICBlcW5zW3AgKyBuYyAqIGpdID0gZXFuc1twICsgbmMgKiBqXSAtIGVxbnNbcCArIG5jICogaV0gKiBtdWx0aXBsaWVyOwogICAgICAgICAgfSB3aGlsZSAoLS1ucCk7CiAgICAgICAgfSB3aGlsZSAoai0tKTsKICAgICAgfSB3aGlsZSAoLS1pKTsgLy8gb3BlcmF0aW9ucyBvbiB0aGUgZGlhZ29uYWwKCgogICAgICBpID0gMjsKCiAgICAgIGRvIHsKICAgICAgICBjb25zdCBtdWx0aXBsaWVyID0gMSAvIGVxbnNbaSArIG5jICogaV07CiAgICAgICAgbnAgPSBuYzsKCiAgICAgICAgZG8gewogICAgICAgICAgcCA9IG5jIC0gbnA7CiAgICAgICAgICBlcW5zW3AgKyBuYyAqIGldID0gZXFuc1twICsgbmMgKiBpXSAqIG11bHRpcGxpZXI7CiAgICAgICAgfSB3aGlsZSAoLS1ucCk7CiAgICAgIH0gd2hpbGUgKGktLSk7CgogICAgICBpID0gMjsKCiAgICAgIGRvIHsKICAgICAgICBqID0gMjsKCiAgICAgICAgZG8gewogICAgICAgICAgcCA9IGVxbnNbbnIgKyBqICsgbmMgKiBpXTsKCiAgICAgICAgICBpZiAoaXNOYU4ocCkgfHwgcCA9PT0gSW5maW5pdHkpIHsKICAgICAgICAgICAgdGhyb3cgYENvdWxkIG5vdCByZXZlcnNlISBBPVske3RoaXMudG9TdHJpbmcoKX1dYDsKICAgICAgICAgIH0KCiAgICAgICAgICB0YXJnZXQuZShpLCBqLCBwKTsKICAgICAgICB9IHdoaWxlIChqLS0pOwogICAgICB9IHdoaWxlIChpLS0pOwoKICAgICAgcmV0dXJuIHRhcmdldDsKICAgIH0KICAgIC8qKgogICAgICogU2V0IHRoZSBtYXRyaXggZnJvbSBhIHF1YXRlcmlvbgogICAgICovCgoKICAgIHNldFJvdGF0aW9uRnJvbVF1YXRlcm5pb24ocSkgewogICAgICBjb25zdCB4ID0gcS54OwogICAgICBjb25zdCB5ID0gcS55OwogICAgICBjb25zdCB6ID0gcS56OwogICAgICBjb25zdCB3ID0gcS53OwogICAgICBjb25zdCB4MiA9IHggKyB4OwogICAgICBjb25zdCB5MiA9IHkgKyB5OwogICAgICBjb25zdCB6MiA9IHogKyB6OwogICAgICBjb25zdCB4eCA9IHggKiB4MjsKICAgICAgY29uc3QgeHkgPSB4ICogeTI7CiAgICAgIGNvbnN0IHh6ID0geCAqIHoyOwogICAgICBjb25zdCB5eSA9IHkgKiB5MjsKICAgICAgY29uc3QgeXogPSB5ICogejI7CiAgICAgIGNvbnN0IHp6ID0geiAqIHoyOwogICAgICBjb25zdCB3eCA9IHcgKiB4MjsKICAgICAgY29uc3Qgd3kgPSB3ICogeTI7CiAgICAgIGNvbnN0IHd6ID0gdyAqIHoyOwogICAgICBjb25zdCBlID0gdGhpcy5lbGVtZW50czsKICAgICAgZVszICogMCArIDBdID0gMSAtICh5eSArIHp6KTsKICAgICAgZVszICogMCArIDFdID0geHkgLSB3ejsKICAgICAgZVszICogMCArIDJdID0geHogKyB3eTsKICAgICAgZVszICogMSArIDBdID0geHkgKyB3ejsKICAgICAgZVszICogMSArIDFdID0gMSAtICh4eCArIHp6KTsKICAgICAgZVszICogMSArIDJdID0geXogLSB3eDsKICAgICAgZVszICogMiArIDBdID0geHogLSB3eTsKICAgICAgZVszICogMiArIDFdID0geXogKyB3eDsKICAgICAgZVszICogMiArIDJdID0gMSAtICh4eCArIHl5KTsKICAgICAgcmV0dXJuIHRoaXM7CiAgICB9CiAgICAvKioKICAgICAqIFRyYW5zcG9zZSB0aGUgbWF0cml4CiAgICAgKiBAcGFyYW0gdGFyZ2V0IE9wdGlvbmFsLiBXaGVyZSB0byBzdG9yZSB0aGUgcmVzdWx0LgogICAgICogQHJldHVybiBUaGUgdGFyZ2V0IE1hdDMsIG9yIGEgbmV3IE1hdDMgaWYgdGFyZ2V0IHdhcyBvbWl0dGVkLgogICAgICovCgoKICAgIHRyYW5zcG9zZSh0YXJnZXQpIHsKICAgICAgaWYgKHRhcmdldCA9PT0gdm9pZCAwKSB7CiAgICAgICAgdGFyZ2V0ID0gbmV3IE1hdDMoKTsKICAgICAgfQoKICAgICAgY29uc3QgTSA9IHRoaXMuZWxlbWVudHM7CiAgICAgIGNvbnN0IFQgPSB0YXJnZXQuZWxlbWVudHM7CiAgICAgIGxldCB0bXA7IC8vU2V0IGRpYWdvbmFscwoKICAgICAgVFswXSA9IE1bMF07CiAgICAgIFRbNF0gPSBNWzRdOwogICAgICBUWzhdID0gTVs4XTsKICAgICAgdG1wID0gTVsxXTsKICAgICAgVFsxXSA9IE1bM107CiAgICAgIFRbM10gPSB0bXA7CiAgICAgIHRtcCA9IE1bMl07CiAgICAgIFRbMl0gPSBNWzZdOwogICAgICBUWzZdID0gdG1wOwogICAgICB0bXAgPSBNWzVdOwogICAgICBUWzVdID0gTVs3XTsKICAgICAgVFs3XSA9IHRtcDsKICAgICAgcmV0dXJuIHRhcmdldDsKICAgIH0KCiAgfQogIGNvbnN0IHJldmVyc2VfZXFucyA9IFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXTsKCiAgLyoqCiAgICogMy1kaW1lbnNpb25hbCB2ZWN0b3IKICAgKiBAZXhhbXBsZQogICAqICAgICBjb25zdCB2ID0gbmV3IFZlYzMoMSwgMiwgMykKICAgKiAgICAgY29uc29sZS5sb2coJ3g9JyArIHYueCkgLy8geD0xCiAgICovCgogIGNsYXNzIFZlYzMgewogICAgY29uc3RydWN0b3IoeCwgeSwgeikgewogICAgICBpZiAoeCA9PT0gdm9pZCAwKSB7CiAgICAgICAgeCA9IDAuMDsKICAgICAgfQoKICAgICAgaWYgKHkgPT09IHZvaWQgMCkgewogICAgICAgIHkgPSAwLjA7CiAgICAgIH0KCiAgICAgIGlmICh6ID09PSB2b2lkIDApIHsKICAgICAgICB6ID0gMC4wOwogICAgICB9CgogICAgICB0aGlzLnggPSB4OwogICAgICB0aGlzLnkgPSB5OwogICAgICB0aGlzLnogPSB6OwogICAgfQogICAgLyoqCiAgICAgKiBWZWN0b3IgY3Jvc3MgcHJvZHVjdAogICAgICogQHBhcmFtIHRhcmdldCBPcHRpb25hbCB0YXJnZXQgdG8gc2F2ZSBpbi4KICAgICAqLwoKCiAgICBjcm9zcyh2ZWN0b3IsIHRhcmdldCkgewogICAgICBpZiAodGFyZ2V0ID09PSB2b2lkIDApIHsKICAgICAgICB0YXJnZXQgPSBuZXcgVmVjMygpOwogICAgICB9CgogICAgICBjb25zdCB2eCA9IHZlY3Rvci54OwogICAgICBjb25zdCB2eSA9IHZlY3Rvci55OwogICAgICBjb25zdCB2eiA9IHZlY3Rvci56OwogICAgICBjb25zdCB4ID0gdGhpcy54OwogICAgICBjb25zdCB5ID0gdGhpcy55OwogICAgICBjb25zdCB6ID0gdGhpcy56OwogICAgICB0YXJnZXQueCA9IHkgKiB2eiAtIHogKiB2eTsKICAgICAgdGFyZ2V0LnkgPSB6ICogdnggLSB4ICogdno7CiAgICAgIHRhcmdldC56ID0geCAqIHZ5IC0geSAqIHZ4OwogICAgICByZXR1cm4gdGFyZ2V0OwogICAgfQogICAgLyoqCiAgICAgKiBTZXQgdGhlIHZlY3RvcnMnIDMgZWxlbWVudHMKICAgICAqLwoKCiAgICBzZXQoeCwgeSwgeikgewogICAgICB0aGlzLnggPSB4OwogICAgICB0aGlzLnkgPSB5OwogICAgICB0aGlzLnogPSB6OwogICAgICByZXR1cm4gdGhpczsKICAgIH0KICAgIC8qKgogICAgICogU2V0IGFsbCBjb21wb25lbnRzIG9mIHRoZSB2ZWN0b3IgdG8gemVyby4KICAgICAqLwoKCiAgICBzZXRaZXJvKCkgewogICAgICB0aGlzLnggPSB0aGlzLnkgPSB0aGlzLnogPSAwOwogICAgfQogICAgLyoqCiAgICAgKiBWZWN0b3IgYWRkaXRpb24KICAgICAqLwoKCiAgICB2YWRkKHZlY3RvciwgdGFyZ2V0KSB7CiAgICAgIGlmICh0YXJnZXQpIHsKICAgICAgICB0YXJnZXQueCA9IHZlY3Rvci54ICsgdGhpcy54OwogICAgICAgIHRhcmdldC55ID0gdmVjdG9yLnkgKyB0aGlzLnk7CiAgICAgICAgdGFyZ2V0LnogPSB2ZWN0b3IueiArIHRoaXMuejsKICAgICAgfSBlbHNlIHsKICAgICAgICByZXR1cm4gbmV3IFZlYzModGhpcy54ICsgdmVjdG9yLngsIHRoaXMueSArIHZlY3Rvci55LCB0aGlzLnogKyB2ZWN0b3Iueik7CiAgICAgIH0KICAgIH0KICAgIC8qKgogICAgICogVmVjdG9yIHN1YnRyYWN0aW9uCiAgICAgKiBAcGFyYW0gdGFyZ2V0IE9wdGlvbmFsIHRhcmdldCB0byBzYXZlIGluLgogICAgICovCgoKICAgIHZzdWIodmVjdG9yLCB0YXJnZXQpIHsKICAgICAgaWYgKHRhcmdldCkgewogICAgICAgIHRhcmdldC54ID0gdGhpcy54IC0gdmVjdG9yLng7CiAgICAgICAgdGFyZ2V0LnkgPSB0aGlzLnkgLSB2ZWN0b3IueTsKICAgICAgICB0YXJnZXQueiA9IHRoaXMueiAtIHZlY3Rvci56OwogICAgICB9IGVsc2UgewogICAgICAgIHJldHVybiBuZXcgVmVjMyh0aGlzLnggLSB2ZWN0b3IueCwgdGhpcy55IC0gdmVjdG9yLnksIHRoaXMueiAtIHZlY3Rvci56KTsKICAgICAgfQogICAgfQogICAgLyoqCiAgICAgKiBHZXQgdGhlIGNyb3NzIHByb2R1Y3QgbWF0cml4IGFfY3Jvc3MgZnJvbSBhIHZlY3Rvciwgc3VjaCB0aGF0IGEgeCBiID0gYV9jcm9zcyAqIGIgPSBjCiAgICAgKgogICAgICogU2VlIHtAbGluayBodHRwczovL3d3dzguY3MudW11LnNlL2t1cnNlci9UREJEMjQvVlQwNi9sZWN0dXJlcy9MZWN0dXJlNi5wZGYgVW1lw6UgVW5pdmVyc2l0eSBMZWN0dXJlfQogICAgICovCgoKICAgIGNyb3NzbWF0KCkgewogICAgICByZXR1cm4gbmV3IE1hdDMoWzAsIC10aGlzLnosIHRoaXMueSwgdGhpcy56LCAwLCAtdGhpcy54LCAtdGhpcy55LCB0aGlzLngsIDBdKTsKICAgIH0KICAgIC8qKgogICAgICogTm9ybWFsaXplIHRoZSB2ZWN0b3IuIE5vdGUgdGhhdCB0aGlzIGNoYW5nZXMgdGhlIHZhbHVlcyBpbiB0aGUgdmVjdG9yLgogICAgICAqIEByZXR1cm4gUmV0dXJucyB0aGUgbm9ybSBvZiB0aGUgdmVjdG9yCiAgICAgKi8KCgogICAgbm9ybWFsaXplKCkgewogICAgICBjb25zdCB4ID0gdGhpcy54OwogICAgICBjb25zdCB5ID0gdGhpcy55OwogICAgICBjb25zdCB6ID0gdGhpcy56OwogICAgICBjb25zdCBuID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeik7CgogICAgICBpZiAobiA+IDAuMCkgewogICAgICAgIGNvbnN0IGludk4gPSAxIC8gbjsKICAgICAgICB0aGlzLnggKj0gaW52TjsKICAgICAgICB0aGlzLnkgKj0gaW52TjsKICAgICAgICB0aGlzLnogKj0gaW52TjsKICAgICAgfSBlbHNlIHsKICAgICAgICAvLyBNYWtlIHNvbWV0aGluZyB1cAogICAgICAgIHRoaXMueCA9IDA7CiAgICAgICAgdGhpcy55ID0gMDsKICAgICAgICB0aGlzLnogPSAwOwogICAgICB9CgogICAgICByZXR1cm4gbjsKICAgIH0KICAgIC8qKgogICAgICogR2V0IHRoZSB2ZXJzaW9uIG9mIHRoaXMgdmVjdG9yIHRoYXQgaXMgb2YgbGVuZ3RoIDEuCiAgICAgKiBAcGFyYW0gdGFyZ2V0IE9wdGlvbmFsIHRhcmdldCB0byBzYXZlIGluCiAgICAgKiBAcmV0dXJuIFJldHVybnMgdGhlIHVuaXQgdmVjdG9yCiAgICAgKi8KCgogICAgdW5pdCh0YXJnZXQpIHsKICAgICAgaWYgKHRhcmdldCA9PT0gdm9pZCAwKSB7CiAgICAgICAgdGFyZ2V0ID0gbmV3IFZlYzMoKTsKICAgICAgfQoKICAgICAgY29uc3QgeCA9IHRoaXMueDsKICAgICAgY29uc3QgeSA9IHRoaXMueTsKICAgICAgY29uc3QgeiA9IHRoaXMuejsKICAgICAgbGV0IG5pbnYgPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6KTsKCiAgICAgIGlmIChuaW52ID4gMC4wKSB7CiAgICAgICAgbmludiA9IDEuMCAvIG5pbnY7CiAgICAgICAgdGFyZ2V0LnggPSB4ICogbmludjsKICAgICAgICB0YXJnZXQueSA9IHkgKiBuaW52OwogICAgICAgIHRhcmdldC56ID0geiAqIG5pbnY7CiAgICAgIH0gZWxzZSB7CiAgICAgICAgdGFyZ2V0LnggPSAxOwogICAgICAgIHRhcmdldC55ID0gMDsKICAgICAgICB0YXJnZXQueiA9IDA7CiAgICAgIH0KCiAgICAgIHJldHVybiB0YXJnZXQ7CiAgICB9CiAgICAvKioKICAgICAqIEdldCB0aGUgbGVuZ3RoIG9mIHRoZSB2ZWN0b3IKICAgICAqLwoKCiAgICBsZW5ndGgoKSB7CiAgICAgIGNvbnN0IHggPSB0aGlzLng7CiAgICAgIGNvbnN0IHkgPSB0aGlzLnk7CiAgICAgIGNvbnN0IHogPSB0aGlzLno7CiAgICAgIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6KTsKICAgIH0KICAgIC8qKgogICAgICogR2V0IHRoZSBzcXVhcmVkIGxlbmd0aCBvZiB0aGUgdmVjdG9yLgogICAgICovCgoKICAgIGxlbmd0aFNxdWFyZWQoKSB7CiAgICAgIHJldHVybiB0aGlzLmRvdCh0aGlzKTsKICAgIH0KICAgIC8qKgogICAgICogR2V0IGRpc3RhbmNlIGZyb20gdGhpcyBwb2ludCB0byBhbm90aGVyIHBvaW50CiAgICAgKi8KCgogICAgZGlzdGFuY2VUbyhwKSB7CiAgICAgIGNvbnN0IHggPSB0aGlzLng7CiAgICAgIGNvbnN0IHkgPSB0aGlzLnk7CiAgICAgIGNvbnN0IHogPSB0aGlzLno7CiAgICAgIGNvbnN0IHB4ID0gcC54OwogICAgICBjb25zdCBweSA9IHAueTsKICAgICAgY29uc3QgcHogPSBwLno7CiAgICAgIHJldHVybiBNYXRoLnNxcnQoKHB4IC0geCkgKiAocHggLSB4KSArIChweSAtIHkpICogKHB5IC0geSkgKyAocHogLSB6KSAqIChweiAtIHopKTsKICAgIH0KICAgIC8qKgogICAgICogR2V0IHNxdWFyZWQgZGlzdGFuY2UgZnJvbSB0aGlzIHBvaW50IHRvIGFub3RoZXIgcG9pbnQKICAgICAqLwoKCiAgICBkaXN0YW5jZVNxdWFyZWQocCkgewogICAgICBjb25zdCB4ID0gdGhpcy54OwogICAgICBjb25zdCB5ID0gdGhpcy55OwogICAgICBjb25zdCB6ID0gdGhpcy56OwogICAgICBjb25zdCBweCA9IHAueDsKICAgICAgY29uc3QgcHkgPSBwLnk7CiAgICAgIGNvbnN0IHB6ID0gcC56OwogICAgICByZXR1cm4gKHB4IC0geCkgKiAocHggLSB4KSArIChweSAtIHkpICogKHB5IC0geSkgKyAocHogLSB6KSAqIChweiAtIHopOwogICAgfQogICAgLyoqCiAgICAgKiBNdWx0aXBseSBhbGwgdGhlIGNvbXBvbmVudHMgb2YgdGhlIHZlY3RvciB3aXRoIGEgc2NhbGFyLgogICAgICogQHBhcmFtIHRhcmdldCBUaGUgdmVjdG9yIHRvIHNhdmUgdGhlIHJlc3VsdCBpbi4KICAgICAqLwoKCiAgICBzY2FsZShzY2FsYXIsIHRhcmdldCkgewogICAgICBpZiAodGFyZ2V0ID09PSB2b2lkIDApIHsKICAgICAgICB0YXJnZXQgPSBuZXcgVmVjMygpOwogICAgICB9CgogICAgICBjb25zdCB4ID0gdGhpcy54OwogICAgICBjb25zdCB5ID0gdGhpcy55OwogICAgICBjb25zdCB6ID0gdGhpcy56OwogICAgICB0YXJnZXQueCA9IHNjYWxhciAqIHg7CiAgICAgIHRhcmdldC55ID0gc2NhbGFyICogeTsKICAgICAgdGFyZ2V0LnogPSBzY2FsYXIgKiB6OwogICAgICByZXR1cm4gdGFyZ2V0OwogICAgfQogICAgLyoqCiAgICAgKiBNdWx0aXBseSB0aGUgdmVjdG9yIHdpdGggYW4gb3RoZXIgdmVjdG9yLCBjb21wb25lbnQtd2lzZS4KICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHZlY3RvciB0byBzYXZlIHRoZSByZXN1bHQgaW4uCiAgICAgKi8KCgogICAgdm11bCh2ZWN0b3IsIHRhcmdldCkgewogICAgICBpZiAodGFyZ2V0ID09PSB2b2lkIDApIHsKICAgICAgICB0YXJnZXQgPSBuZXcgVmVjMygpOwogICAgICB9CgogICAgICB0YXJnZXQueCA9IHZlY3Rvci54ICogdGhpcy54OwogICAgICB0YXJnZXQueSA9IHZlY3Rvci55ICogdGhpcy55OwogICAgICB0YXJnZXQueiA9IHZlY3Rvci56ICogdGhpcy56OwogICAgICByZXR1cm4gdGFyZ2V0OwogICAgfQogICAgLyoqCiAgICAgKiBTY2FsZSBhIHZlY3RvciBhbmQgYWRkIGl0IHRvIHRoaXMgdmVjdG9yLiBTYXZlIHRoZSByZXN1bHQgaW4gInRhcmdldCIuICh0YXJnZXQgPSB0aGlzICsgdmVjdG9yICogc2NhbGFyKQogICAgICogQHBhcmFtIHRhcmdldCBUaGUgdmVjdG9yIHRvIHNhdmUgdGhlIHJlc3VsdCBpbi4KICAgICAqLwoKCiAgICBhZGRTY2FsZWRWZWN0b3Ioc2NhbGFyLCB2ZWN0b3IsIHRhcmdldCkgewogICAgICBpZiAodGFyZ2V0ID09PSB2b2lkIDApIHsKICAgICAgICB0YXJnZXQgPSBuZXcgVmVjMygpOwogICAgICB9CgogICAgICB0YXJnZXQueCA9IHRoaXMueCArIHNjYWxhciAqIHZlY3Rvci54OwogICAgICB0YXJnZXQueSA9IHRoaXMueSArIHNjYWxhciAqIHZlY3Rvci55OwogICAgICB0YXJnZXQueiA9IHRoaXMueiArIHNjYWxhciAqIHZlY3Rvci56OwogICAgICByZXR1cm4gdGFyZ2V0OwogICAgfQogICAgLyoqCiAgICAgKiBDYWxjdWxhdGUgZG90IHByb2R1Y3QKICAgICAqIEBwYXJhbSB2ZWN0b3IKICAgICAqLwoKCiAgICBkb3QodmVjdG9yKSB7CiAgICAgIHJldHVybiB0aGlzLnggKiB2ZWN0b3IueCArIHRoaXMueSAqIHZlY3Rvci55ICsgdGhpcy56ICogdmVjdG9yLno7CiAgICB9CgogICAgaXNaZXJvKCkgewogICAgICByZXR1cm4gdGhpcy54ID09PSAwICYmIHRoaXMueSA9PT0gMCAmJiB0aGlzLnogPT09IDA7CiAgICB9CiAgICAvKioKICAgICAqIE1ha2UgdGhlIHZlY3RvciBwb2ludCBpbiB0aGUgb3Bwb3NpdGUgZGlyZWN0aW9uLgogICAgICogQHBhcmFtIHRhcmdldCBPcHRpb25hbCB0YXJnZXQgdG8gc2F2ZSBpbgogICAgICovCgoKICAgIG5lZ2F0ZSh0YXJnZXQpIHsKICAgICAgaWYgKHRhcmdldCA9PT0gdm9pZCAwKSB7CiAgICAgICAgdGFyZ2V0ID0gbmV3IFZlYzMoKTsKICAgICAgfQoKICAgICAgdGFyZ2V0LnggPSAtdGhpcy54OwogICAgICB0YXJnZXQueSA9IC10aGlzLnk7CiAgICAgIHRhcmdldC56ID0gLXRoaXMuejsKICAgICAgcmV0dXJuIHRhcmdldDsKICAgIH0KICAgIC8qKgogICAgICogQ29tcHV0ZSB0d28gYXJ0aWZpY2lhbCB0YW5nZW50cyB0byB0aGUgdmVjdG9yCiAgICAgKiBAcGFyYW0gdDEgVmVjdG9yIG9iamVjdCB0byBzYXZlIHRoZSBmaXJzdCB0YW5nZW50IGluCiAgICAgKiBAcGFyYW0gdDIgVmVjdG9yIG9iamVjdCB0byBzYXZlIHRoZSBzZWNvbmQgdGFuZ2VudCBpbgogICAgICovCgoKICAgIHRhbmdlbnRzKHQxLCB0MikgewogICAgICBjb25zdCBub3JtID0gdGhpcy5sZW5ndGgoKTsKCiAgICAgIGlmIChub3JtID4gMC4wKSB7CiAgICAgICAgY29uc3QgbiA9IFZlYzNfdGFuZ2VudHNfbjsKICAgICAgICBjb25zdCBpbm9ybSA9IDEgLyBub3JtOwogICAgICAgIG4uc2V0KHRoaXMueCAqIGlub3JtLCB0aGlzLnkgKiBpbm9ybSwgdGhpcy56ICogaW5vcm0pOwogICAgICAgIGNvbnN0IHJhbmRWZWMgPSBWZWMzX3RhbmdlbnRzX3JhbmRWZWM7CgogICAgICAgIGlmIChNYXRoLmFicyhuLngpIDwgMC45KSB7CiAgICAgICAgICByYW5kVmVjLnNldCgxLCAwLCAwKTsKICAgICAgICAgIG4uY3Jvc3MocmFuZFZlYywgdDEpOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICByYW5kVmVjLnNldCgwLCAxLCAwKTsKICAgICAgICAgIG4uY3Jvc3MocmFuZFZlYywgdDEpOwogICAgICAgIH0KCiAgICAgICAgbi5jcm9zcyh0MSwgdDIpOwogICAgICB9IGVsc2UgewogICAgICAgIC8vIFRoZSBub3JtYWwgbGVuZ3RoIGlzIHplcm8sIG1ha2Ugc29tZXRoaW5nIHVwCiAgICAgICAgdDEuc2V0KDEsIDAsIDApOwogICAgICAgIHQyLnNldCgwLCAxLCAwKTsKICAgICAgfQogICAgfQogICAgLyoqCiAgICAgKiBDb252ZXJ0cyB0byBhIG1vcmUgcmVhZGFibGUgZm9ybWF0CiAgICAgKi8KCgogICAgdG9TdHJpbmcoKSB7CiAgICAgIHJldHVybiBgJHt0aGlzLnh9LCR7dGhpcy55fSwke3RoaXMuen1gOwogICAgfQogICAgLyoqCiAgICAgKiBDb252ZXJ0cyB0byBhbiBhcnJheQogICAgICovCgoKICAgIHRvQXJyYXkoKSB7CiAgICAgIHJldHVybiBbdGhpcy54LCB0aGlzLnksIHRoaXMuel07CiAgICB9CiAgICAvKioKICAgICAqIENvcGllcyB2YWx1ZSBvZiBzb3VyY2UgdG8gdGhpcyB2ZWN0b3IuCiAgICAgKi8KCgogICAgY29weSh2ZWN0b3IpIHsKICAgICAgdGhpcy54ID0gdmVjdG9yLng7CiAgICAgIHRoaXMueSA9IHZlY3Rvci55OwogICAgICB0aGlzLnogPSB2ZWN0b3IuejsKICAgICAgcmV0dXJuIHRoaXM7CiAgICB9CiAgICAvKioKICAgICAqIERvIGEgbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiB0d28gdmVjdG9ycwogICAgICogQHBhcmFtIHQgQSBudW1iZXIgYmV0d2VlbiAwIGFuZCAxLiAwIHdpbGwgbWFrZSB0aGlzIGZ1bmN0aW9uIHJldHVybiB1LCBhbmQgMSB3aWxsIG1ha2UgaXQgcmV0dXJuIHYuIE51bWJlcnMgaW4gYmV0d2VlbiB3aWxsIGdlbmVyYXRlIGEgdmVjdG9yIGluIGJldHdlZW4gdGhlbS4KICAgICAqLwoKCiAgICBsZXJwKHZlY3RvciwgdCwgdGFyZ2V0KSB7CiAgICAgIGNvbnN0IHggPSB0aGlzLng7CiAgICAgIGNvbnN0IHkgPSB0aGlzLnk7CiAgICAgIGNvbnN0IHogPSB0aGlzLno7CiAgICAgIHRhcmdldC54ID0geCArICh2ZWN0b3IueCAtIHgpICogdDsKICAgICAgdGFyZ2V0LnkgPSB5ICsgKHZlY3Rvci55IC0geSkgKiB0OwogICAgICB0YXJnZXQueiA9IHogKyAodmVjdG9yLnogLSB6KSAqIHQ7CiAgICB9CiAgICAvKioKICAgICAqIENoZWNrIGlmIGEgdmVjdG9yIGVxdWFscyBpcyBhbG1vc3QgZXF1YWwgdG8gYW5vdGhlciBvbmUuCiAgICAgKi8KCgogICAgYWxtb3N0RXF1YWxzKHZlY3RvciwgcHJlY2lzaW9uKSB7CiAgICAgIGlmIChwcmVjaXNpb24gPT09IHZvaWQgMCkgewogICAgICAgIHByZWNpc2lvbiA9IDFlLTY7CiAgICAgIH0KCiAgICAgIGlmIChNYXRoLmFicyh0aGlzLnggLSB2ZWN0b3IueCkgPiBwcmVjaXNpb24gfHwgTWF0aC5hYnModGhpcy55IC0gdmVjdG9yLnkpID4gcHJlY2lzaW9uIHx8IE1hdGguYWJzKHRoaXMueiAtIHZlY3Rvci56KSA+IHByZWNpc2lvbikgewogICAgICAgIHJldHVybiBmYWxzZTsKICAgICAgfQoKICAgICAgcmV0dXJuIHRydWU7CiAgICB9CiAgICAvKioKICAgICAqIENoZWNrIGlmIGEgdmVjdG9yIGlzIGFsbW9zdCB6ZXJvCiAgICAgKi8KCgogICAgYWxtb3N0WmVybyhwcmVjaXNpb24pIHsKICAgICAgaWYgKHByZWNpc2lvbiA9PT0gdm9pZCAwKSB7CiAgICAgICAgcHJlY2lzaW9uID0gMWUtNjsKICAgICAgfQoKICAgICAgaWYgKE1hdGguYWJzKHRoaXMueCkgPiBwcmVjaXNpb24gfHwgTWF0aC5hYnModGhpcy55KSA+IHByZWNpc2lvbiB8fCBNYXRoLmFicyh0aGlzLnopID4gcHJlY2lzaW9uKSB7CiAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgICB9CgogICAgICByZXR1cm4gdHJ1ZTsKICAgIH0KICAgIC8qKgogICAgICogQ2hlY2sgaWYgdGhlIHZlY3RvciBpcyBhbnRpLXBhcmFsbGVsIHRvIGFub3RoZXIgdmVjdG9yLgogICAgICogQHBhcmFtIHByZWNpc2lvbiBTZXQgdG8gemVybyBmb3IgZXhhY3QgY29tcGFyaXNvbnMKICAgICAqLwoKCiAgICBpc0FudGlwYXJhbGxlbFRvKHZlY3RvciwgcHJlY2lzaW9uKSB7CiAgICAgIHRoaXMubmVnYXRlKGFudGlwX25lZyk7CiAgICAgIHJldHVybiBhbnRpcF9uZWcuYWxtb3N0RXF1YWxzKHZlY3RvciwgcHJlY2lzaW9uKTsKICAgIH0KICAgIC8qKgogICAgICogQ2xvbmUgdGhlIHZlY3RvcgogICAgICovCgoKICAgIGNsb25lKCkgewogICAgICByZXR1cm4gbmV3IFZlYzModGhpcy54LCB0aGlzLnksIHRoaXMueik7CiAgICB9CgogIH0KICBWZWMzLlpFUk8gPSBuZXcgVmVjMygwLCAwLCAwKTsKICBWZWMzLlVOSVRfWCA9IG5ldyBWZWMzKDEsIDAsIDApOwogIFZlYzMuVU5JVF9ZID0gbmV3IFZlYzMoMCwgMSwgMCk7CiAgVmVjMy5VTklUX1ogPSBuZXcgVmVjMygwLCAwLCAxKTsKICBjb25zdCBWZWMzX3RhbmdlbnRzX24gPSBuZXcgVmVjMygpOwogIGNvbnN0IFZlYzNfdGFuZ2VudHNfcmFuZFZlYyA9IG5ldyBWZWMzKCk7CiAgY29uc3QgYW50aXBfbmVnID0gbmV3IFZlYzMoKTsKCiAgLyoqCiAgICogQXhpcyBhbGlnbmVkIGJvdW5kaW5nIGJveCBjbGFzcy4KICAgKi8KICBjbGFzcyBBQUJCIHsKICAgIC8qKgogICAgICogVGhlIGxvd2VyIGJvdW5kIG9mIHRoZSBib3VuZGluZyBib3gKICAgICAqLwoKICAgIC8qKgogICAgICogVGhlIHVwcGVyIGJvdW5kIG9mIHRoZSBib3VuZGluZyBib3gKICAgICAqLwogICAgY29uc3RydWN0b3Iob3B0aW9ucykgewogICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7CiAgICAgICAgb3B0aW9ucyA9IHt9OwogICAgICB9CgogICAgICB0aGlzLmxvd2VyQm91bmQgPSBuZXcgVmVjMygpOwogICAgICB0aGlzLnVwcGVyQm91bmQgPSBuZXcgVmVjMygpOwoKICAgICAgaWYgKG9wdGlvbnMubG93ZXJCb3VuZCkgewogICAgICAgIHRoaXMubG93ZXJCb3VuZC5jb3B5KG9wdGlvbnMubG93ZXJCb3VuZCk7CiAgICAgIH0KCiAgICAgIGlmIChvcHRpb25zLnVwcGVyQm91bmQpIHsKICAgICAgICB0aGlzLnVwcGVyQm91bmQuY29weShvcHRpb25zLnVwcGVyQm91bmQpOwogICAgICB9CiAgICB9CiAgICAvKioKICAgICAqIFNldCB0aGUgQUFCQiBib3VuZHMgZnJvbSBhIHNldCBvZiBwb2ludHMuCiAgICAgKiBAcGFyYW0gcG9pbnRzIEFuIGFycmF5IG9mIFZlYzMncy4KICAgICAqIEByZXR1cm4gVGhlIHNlbGYgb2JqZWN0CiAgICAgKi8KCgogICAgc2V0RnJvbVBvaW50cyhwb2ludHMsIHBvc2l0aW9uLCBxdWF0ZXJuaW9uLCBza2luU2l6ZSkgewogICAgICBjb25zdCBsID0gdGhpcy5sb3dlckJvdW5kOwogICAgICBjb25zdCB1ID0gdGhpcy51cHBlckJvdW5kOwogICAgICBjb25zdCBxID0gcXVhdGVybmlvbjsgLy8gU2V0IHRvIHRoZSBmaXJzdCBwb2ludAoKICAgICAgbC5jb3B5KHBvaW50c1swXSk7CgogICAgICBpZiAocSkgewogICAgICAgIHEudm11bHQobCwgbCk7CiAgICAgIH0KCiAgICAgIHUuY29weShsKTsKCiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7CiAgICAgICAgbGV0IHAgPSBwb2ludHNbaV07CgogICAgICAgIGlmIChxKSB7CiAgICAgICAgICBxLnZtdWx0KHAsIHRtcCQxKTsKICAgICAgICAgIHAgPSB0bXAkMTsKICAgICAgICB9CgogICAgICAgIGlmIChwLnggPiB1LngpIHsKICAgICAgICAgIHUueCA9IHAueDsKICAgICAgICB9CgogICAgICAgIGlmIChwLnggPCBsLngpIHsKICAgICAgICAgIGwueCA9IHAueDsKICAgICAgICB9CgogICAgICAgIGlmIChwLnkgPiB1LnkpIHsKICAgICAgICAgIHUueSA9IHAueTsKICAgICAgICB9CgogICAgICAgIGlmIChwLnkgPCBsLnkpIHsKICAgICAgICAgIGwueSA9IHAueTsKICAgICAgICB9CgogICAgICAgIGlmIChwLnogPiB1LnopIHsKICAgICAgICAgIHUueiA9IHAuejsKICAgICAgICB9CgogICAgICAgIGlmIChwLnogPCBsLnopIHsKICAgICAgICAgIGwueiA9IHAuejsKICAgICAgICB9CiAgICAgIH0gLy8gQWRkIG9mZnNldAoKCiAgICAgIGlmIChwb3NpdGlvbikgewogICAgICAgIHBvc2l0aW9uLnZhZGQobCwgbCk7CiAgICAgICAgcG9zaXRpb24udmFkZCh1LCB1KTsKICAgICAgfQoKICAgICAgaWYgKHNraW5TaXplKSB7CiAgICAgICAgbC54IC09IHNraW5TaXplOwogICAgICAgIGwueSAtPSBza2luU2l6ZTsKICAgICAgICBsLnogLT0gc2tpblNpemU7CiAgICAgICAgdS54ICs9IHNraW5TaXplOwogICAgICAgIHUueSArPSBza2luU2l6ZTsKICAgICAgICB1LnogKz0gc2tpblNpemU7CiAgICAgIH0KCiAgICAgIHJldHVybiB0aGlzOwogICAgfQogICAgLyoqCiAgICAgKiBDb3B5IGJvdW5kcyBmcm9tIGFuIEFBQkIgdG8gdGhpcyBBQUJCCiAgICAgKiBAcGFyYW0gYWFiYiBTb3VyY2UgdG8gY29weSBmcm9tCiAgICAgKiBAcmV0dXJuIFRoZSB0aGlzIG9iamVjdCwgZm9yIGNoYWluYWJpbGl0eQogICAgICovCgoKICAgIGNvcHkoYWFiYikgewogICAgICB0aGlzLmxvd2VyQm91bmQuY29weShhYWJiLmxvd2VyQm91bmQpOwogICAgICB0aGlzLnVwcGVyQm91bmQuY29weShhYWJiLnVwcGVyQm91bmQpOwogICAgICByZXR1cm4gdGhpczsKICAgIH0KICAgIC8qKgogICAgICogQ2xvbmUgYW4gQUFCQgogICAgICovCgoKICAgIGNsb25lKCkgewogICAgICByZXR1cm4gbmV3IEFBQkIoKS5jb3B5KHRoaXMpOwogICAgfQogICAgLyoqCiAgICAgKiBFeHRlbmQgdGhpcyBBQUJCIHNvIHRoYXQgaXQgY292ZXJzIHRoZSBnaXZlbiBBQUJCIHRvby4KICAgICAqLwoKCiAgICBleHRlbmQoYWFiYikgewogICAgICB0aGlzLmxvd2VyQm91bmQueCA9IE1hdGgubWluKHRoaXMubG93ZXJCb3VuZC54LCBhYWJiLmxvd2VyQm91bmQueCk7CiAgICAgIHRoaXMudXBwZXJCb3VuZC54ID0gTWF0aC5tYXgodGhpcy51cHBlckJvdW5kLngsIGFhYmIudXBwZXJCb3VuZC54KTsKICAgICAgdGhpcy5sb3dlckJvdW5kLnkgPSBNYXRoLm1pbih0aGlzLmxvd2VyQm91bmQueSwgYWFiYi5sb3dlckJvdW5kLnkpOwogICAgICB0aGlzLnVwcGVyQm91bmQueSA9IE1hdGgubWF4KHRoaXMudXBwZXJCb3VuZC55LCBhYWJiLnVwcGVyQm91bmQueSk7CiAgICAgIHRoaXMubG93ZXJCb3VuZC56ID0gTWF0aC5taW4odGhpcy5sb3dlckJvdW5kLnosIGFhYmIubG93ZXJCb3VuZC56KTsKICAgICAgdGhpcy51cHBlckJvdW5kLnogPSBNYXRoLm1heCh0aGlzLnVwcGVyQm91bmQueiwgYWFiYi51cHBlckJvdW5kLnopOwogICAgfQogICAgLyoqCiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIEFBQkIgb3ZlcmxhcHMgdGhpcyBBQUJCLgogICAgICovCgoKICAgIG92ZXJsYXBzKGFhYmIpIHsKICAgICAgY29uc3QgbDEgPSB0aGlzLmxvd2VyQm91bmQ7CiAgICAgIGNvbnN0IHUxID0gdGhpcy51cHBlckJvdW5kOwogICAgICBjb25zdCBsMiA9IGFhYmIubG93ZXJCb3VuZDsKICAgICAgY29uc3QgdTIgPSBhYWJiLnVwcGVyQm91bmQ7IC8vICAgICAgbDIgICAgICAgIHUyCiAgICAgIC8vICAgICAgfC0tLS0tLS0tLXwKICAgICAgLy8gfC0tLS0tLS0tfAogICAgICAvLyBsMSAgICAgICB1MQoKICAgICAgY29uc3Qgb3ZlcmxhcHNYID0gbDIueCA8PSB1MS54ICYmIHUxLnggPD0gdTIueCB8fCBsMS54IDw9IHUyLnggJiYgdTIueCA8PSB1MS54OwogICAgICBjb25zdCBvdmVybGFwc1kgPSBsMi55IDw9IHUxLnkgJiYgdTEueSA8PSB1Mi55IHx8IGwxLnkgPD0gdTIueSAmJiB1Mi55IDw9IHUxLnk7CiAgICAgIGNvbnN0IG92ZXJsYXBzWiA9IGwyLnogPD0gdTEueiAmJiB1MS56IDw9IHUyLnogfHwgbDEueiA8PSB1Mi56ICYmIHUyLnogPD0gdTEuejsKICAgICAgcmV0dXJuIG92ZXJsYXBzWCAmJiBvdmVybGFwc1kgJiYgb3ZlcmxhcHNaOwogICAgfSAvLyBNb3N0bHkgZm9yIGRlYnVnZ2luZwoKCiAgICB2b2x1bWUoKSB7CiAgICAgIGNvbnN0IGwgPSB0aGlzLmxvd2VyQm91bmQ7CiAgICAgIGNvbnN0IHUgPSB0aGlzLnVwcGVyQm91bmQ7CiAgICAgIHJldHVybiAodS54IC0gbC54KSAqICh1LnkgLSBsLnkpICogKHUueiAtIGwueik7CiAgICB9CiAgICAvKioKICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gQUFCQiBpcyBmdWxseSBjb250YWluZWQgaW4gdGhpcyBBQUJCLgogICAgICovCgoKICAgIGNvbnRhaW5zKGFhYmIpIHsKICAgICAgY29uc3QgbDEgPSB0aGlzLmxvd2VyQm91bmQ7CiAgICAgIGNvbnN0IHUxID0gdGhpcy51cHBlckJvdW5kOwogICAgICBjb25zdCBsMiA9IGFhYmIubG93ZXJCb3VuZDsKICAgICAgY29uc3QgdTIgPSBhYWJiLnVwcGVyQm91bmQ7IC8vICAgICAgbDIgICAgICAgIHUyCiAgICAgIC8vICAgICAgfC0tLS0tLS0tLXwKICAgICAgLy8gfC0tLS0tLS0tLS0tLS0tLXwKICAgICAgLy8gbDEgICAgICAgICAgICAgIHUxCgogICAgICByZXR1cm4gbDEueCA8PSBsMi54ICYmIHUxLnggPj0gdTIueCAmJiBsMS55IDw9IGwyLnkgJiYgdTEueSA+PSB1Mi55ICYmIGwxLnogPD0gbDIueiAmJiB1MS56ID49IHUyLno7CiAgICB9CgogICAgZ2V0Q29ybmVycyhhLCBiLCBjLCBkLCBlLCBmLCBnLCBoKSB7CiAgICAgIGNvbnN0IGwgPSB0aGlzLmxvd2VyQm91bmQ7CiAgICAgIGNvbnN0IHUgPSB0aGlzLnVwcGVyQm91bmQ7CiAgICAgIGEuY29weShsKTsKICAgICAgYi5zZXQodS54LCBsLnksIGwueik7CiAgICAgIGMuc2V0KHUueCwgdS55LCBsLnopOwogICAgICBkLnNldChsLngsIHUueSwgdS56KTsKICAgICAgZS5zZXQodS54LCBsLnksIHUueik7CiAgICAgIGYuc2V0KGwueCwgdS55LCBsLnopOwogICAgICBnLnNldChsLngsIGwueSwgdS56KTsKICAgICAgaC5jb3B5KHUpOwogICAgfQogICAgLyoqCiAgICAgKiBHZXQgdGhlIHJlcHJlc2VudGF0aW9uIG9mIGFuIEFBQkIgaW4gYW5vdGhlciBmcmFtZS4KICAgICAqIEByZXR1cm4gVGhlICJ0YXJnZXQiIEFBQkIgb2JqZWN0LgogICAgICovCgoKICAgIHRvTG9jYWxGcmFtZShmcmFtZSwgdGFyZ2V0KSB7CiAgICAgIGNvbnN0IGNvcm5lcnMgPSB0cmFuc2Zvcm1JbnRvRnJhbWVfY29ybmVyczsKICAgICAgY29uc3QgYSA9IGNvcm5lcnNbMF07CiAgICAgIGNvbnN0IGIgPSBjb3JuZXJzWzFdOwogICAgICBjb25zdCBjID0gY29ybmVyc1syXTsKICAgICAgY29uc3QgZCA9IGNvcm5lcnNbM107CiAgICAgIGNvbnN0IGUgPSBjb3JuZXJzWzRdOwogICAgICBjb25zdCBmID0gY29ybmVyc1s1XTsKICAgICAgY29uc3QgZyA9IGNvcm5lcnNbNl07CiAgICAgIGNvbnN0IGggPSBjb3JuZXJzWzddOyAvLyBHZXQgY29ybmVycyBpbiBjdXJyZW50IGZyYW1lCgogICAgICB0aGlzLmdldENvcm5lcnMoYSwgYiwgYywgZCwgZSwgZiwgZywgaCk7IC8vIFRyYW5zZm9ybSB0aGVtIHRvIG5ldyBsb2NhbCBmcmFtZQoKICAgICAgZm9yIChsZXQgaSA9IDA7IGkgIT09IDg7IGkrKykgewogICAgICAgIGNvbnN0IGNvcm5lciA9IGNvcm5lcnNbaV07CiAgICAgICAgZnJhbWUucG9pbnRUb0xvY2FsKGNvcm5lciwgY29ybmVyKTsKICAgICAgfQoKICAgICAgcmV0dXJuIHRhcmdldC5zZXRGcm9tUG9pbnRzKGNvcm5lcnMpOwogICAgfQogICAgLyoqCiAgICAgKiBHZXQgdGhlIHJlcHJlc2VudGF0aW9uIG9mIGFuIEFBQkIgaW4gdGhlIGdsb2JhbCBmcmFtZS4KICAgICAqIEByZXR1cm4gVGhlICJ0YXJnZXQiIEFBQkIgb2JqZWN0LgogICAgICovCgoKICAgIHRvV29ybGRGcmFtZShmcmFtZSwgdGFyZ2V0KSB7CiAgICAgIGNvbnN0IGNvcm5lcnMgPSB0cmFuc2Zvcm1JbnRvRnJhbWVfY29ybmVyczsKICAgICAgY29uc3QgYSA9IGNvcm5lcnNbMF07CiAgICAgIGNvbnN0IGIgPSBjb3JuZXJzWzFdOwogICAgICBjb25zdCBjID0gY29ybmVyc1syXTsKICAgICAgY29uc3QgZCA9IGNvcm5lcnNbM107CiAgICAgIGNvbnN0IGUgPSBjb3JuZXJzWzRdOwogICAgICBjb25zdCBmID0gY29ybmVyc1s1XTsKICAgICAgY29uc3QgZyA9IGNvcm5lcnNbNl07CiAgICAgIGNvbnN0IGggPSBjb3JuZXJzWzddOyAvLyBHZXQgY29ybmVycyBpbiBjdXJyZW50IGZyYW1lCgogICAgICB0aGlzLmdldENvcm5lcnMoYSwgYiwgYywgZCwgZSwgZiwgZywgaCk7IC8vIFRyYW5zZm9ybSB0aGVtIHRvIG5ldyBsb2NhbCBmcmFtZQoKICAgICAgZm9yIChsZXQgaSA9IDA7IGkgIT09IDg7IGkrKykgewogICAgICAgIGNvbnN0IGNvcm5lciA9IGNvcm5lcnNbaV07CiAgICAgICAgZnJhbWUucG9pbnRUb1dvcmxkKGNvcm5lciwgY29ybmVyKTsKICAgICAgfQoKICAgICAgcmV0dXJuIHRhcmdldC5zZXRGcm9tUG9pbnRzKGNvcm5lcnMpOwogICAgfQogICAgLyoqCiAgICAgKiBDaGVjayBpZiB0aGUgQUFCQiBpcyBoaXQgYnkgYSByYXkuCiAgICAgKi8KCgogICAgb3ZlcmxhcHNSYXkocmF5KSB7CiAgICAgIGNvbnN0IHsKICAgICAgICBkaXJlY3Rpb24sCiAgICAgICAgZnJvbQogICAgICB9ID0gcmF5OyAvLyBjb25zdCB0ID0gMAogICAgICAvLyByYXkuZGlyZWN0aW9uIGlzIHVuaXQgZGlyZWN0aW9uIHZlY3RvciBvZiByYXkKCiAgICAgIGNvbnN0IGRpckZyYWNYID0gMSAvIGRpcmVjdGlvbi54OwogICAgICBjb25zdCBkaXJGcmFjWSA9IDEgLyBkaXJlY3Rpb24ueTsKICAgICAgY29uc3QgZGlyRnJhY1ogPSAxIC8gZGlyZWN0aW9uLno7IC8vIHRoaXMubG93ZXJCb3VuZCBpcyB0aGUgY29ybmVyIG9mIEFBQkIgd2l0aCBtaW5pbWFsIGNvb3JkaW5hdGVzIC0gbGVmdCBib3R0b20sIHJ0IGlzIG1heGltYWwgY29ybmVyCgogICAgICBjb25zdCB0MSA9ICh0aGlzLmxvd2VyQm91bmQueCAtIGZyb20ueCkgKiBkaXJGcmFjWDsKICAgICAgY29uc3QgdDIgPSAodGhpcy51cHBlckJvdW5kLnggLSBmcm9tLngpICogZGlyRnJhY1g7CiAgICAgIGNvbnN0IHQzID0gKHRoaXMubG93ZXJCb3VuZC55IC0gZnJvbS55KSAqIGRpckZyYWNZOwogICAgICBjb25zdCB0NCA9ICh0aGlzLnVwcGVyQm91bmQueSAtIGZyb20ueSkgKiBkaXJGcmFjWTsKICAgICAgY29uc3QgdDUgPSAodGhpcy5sb3dlckJvdW5kLnogLSBmcm9tLnopICogZGlyRnJhY1o7CiAgICAgIGNvbnN0IHQ2ID0gKHRoaXMudXBwZXJCb3VuZC56IC0gZnJvbS56KSAqIGRpckZyYWNaOyAvLyBjb25zdCB0bWluID0gTWF0aC5tYXgoTWF0aC5tYXgoTWF0aC5taW4odDEsIHQyKSwgTWF0aC5taW4odDMsIHQ0KSkpOwogICAgICAvLyBjb25zdCB0bWF4ID0gTWF0aC5taW4oTWF0aC5taW4oTWF0aC5tYXgodDEsIHQyKSwgTWF0aC5tYXgodDMsIHQ0KSkpOwoKICAgICAgY29uc3QgdG1pbiA9IE1hdGgubWF4KE1hdGgubWF4KE1hdGgubWluKHQxLCB0MiksIE1hdGgubWluKHQzLCB0NCkpLCBNYXRoLm1pbih0NSwgdDYpKTsKICAgICAgY29uc3QgdG1heCA9IE1hdGgubWluKE1hdGgubWluKE1hdGgubWF4KHQxLCB0MiksIE1hdGgubWF4KHQzLCB0NCkpLCBNYXRoLm1heCh0NSwgdDYpKTsgLy8gaWYgdG1heCA8IDAsIHJheSAobGluZSkgaXMgaW50ZXJzZWN0aW5nIEFBQkIsIGJ1dCB3aG9sZSBBQUJCIGlzIGJlaGluZyB1cwoKICAgICAgaWYgKHRtYXggPCAwKSB7CiAgICAgICAgLy90ID0gdG1heDsKICAgICAgICByZXR1cm4gZmFsc2U7CiAgICAgIH0gLy8gaWYgdG1pbiA+IHRtYXgsIHJheSBkb2Vzbid0IGludGVyc2VjdCBBQUJCCgoKICAgICAgaWYgKHRtaW4gPiB0bWF4KSB7CiAgICAgICAgLy90ID0gdG1heDsKICAgICAgICByZXR1cm4gZmFsc2U7CiAgICAgIH0KCiAgICAgIHJldHVybiB0cnVlOwogICAgfQoKICB9CiAgY29uc3QgdG1wJDEgPSBuZXcgVmVjMygpOwogIGNvbnN0IHRyYW5zZm9ybUludG9GcmFtZV9jb3JuZXJzID0gW25ldyBWZWMzKCksIG5ldyBWZWMzKCksIG5ldyBWZWMzKCksIG5ldyBWZWMzKCksIG5ldyBWZWMzKCksIG5ldyBWZWMzKCksIG5ldyBWZWMzKCksIG5ldyBWZWMzKCldOwoKICAvKioKICAgKiBDb2xsaXNpb24gIm1hdHJpeCIuCiAgICogSXQncyBhY3R1YWxseSBhIHRyaWFuZ3VsYXItc2hhcGVkIGFycmF5IG9mIHdoZXRoZXIgdHdvIGJvZGllcyBhcmUgdG91Y2hpbmcgdGhpcyBzdGVwLCBmb3IgcmVmZXJlbmNlIG5leHQgc3RlcAogICAqLwogIGNsYXNzIEFycmF5Q29sbGlzaW9uTWF0cml4IHsKICAgIC8qKgogICAgICogVGhlIG1hdHJpeCBzdG9yYWdlLgogICAgICovCiAgICBjb25zdHJ1Y3RvcigpIHsKICAgICAgdGhpcy5tYXRyaXggPSBbXTsKICAgIH0KICAgIC8qKgogICAgICogR2V0IGFuIGVsZW1lbnQKICAgICAqLwoKCiAgICBnZXQoYmksIGJqKSB7CiAgICAgIGxldCB7CiAgICAgICAgaW5kZXg6IGkKICAgICAgfSA9IGJpOwogICAgICBsZXQgewogICAgICAgIGluZGV4OiBqCiAgICAgIH0gPSBiajsKCiAgICAgIGlmIChqID4gaSkgewogICAgICAgIGNvbnN0IHRlbXAgPSBqOwogICAgICAgIGogPSBpOwogICAgICAgIGkgPSB0ZW1wOwogICAgICB9CgogICAgICByZXR1cm4gdGhpcy5tYXRyaXhbKGkgKiAoaSArIDEpID4+IDEpICsgaiAtIDFdOwogICAgfQogICAgLyoqCiAgICAgKiBTZXQgYW4gZWxlbWVudAogICAgICovCgoKICAgIHNldChiaSwgYmosIHZhbHVlKSB7CiAgICAgIGxldCB7CiAgICAgICAgaW5kZXg6IGkKICAgICAgfSA9IGJpOwogICAgICBsZXQgewogICAgICAgIGluZGV4OiBqCiAgICAgIH0gPSBiajsKCiAgICAgIGlmIChqID4gaSkgewogICAgICAgIGNvbnN0IHRlbXAgPSBqOwogICAgICAgIGogPSBpOwogICAgICAgIGkgPSB0ZW1wOwogICAgICB9CgogICAgICB0aGlzLm1hdHJpeFsoaSAqIChpICsgMSkgPj4gMSkgKyBqIC0gMV0gPSB2YWx1ZSA/IDEgOiAwOwogICAgfQogICAgLyoqCiAgICAgKiBTZXRzIGFsbCBlbGVtZW50cyB0byB6ZXJvCiAgICAgKi8KCgogICAgcmVzZXQoKSB7CiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5tYXRyaXgubGVuZ3RoOyBpICE9PSBsOyBpKyspIHsKICAgICAgICB0aGlzLm1hdHJpeFtpXSA9IDA7CiAgICAgIH0KICAgIH0KICAgIC8qKgogICAgICogU2V0cyB0aGUgbWF4IG51bWJlciBvZiBvYmplY3RzCiAgICAgKi8KCgogICAgc2V0TnVtT2JqZWN0cyhuKSB7CiAgICAgIHRoaXMubWF0cml4Lmxlbmd0aCA9IG4gKiAobiAtIDEpID4+IDE7CiAgICB9CgogIH0KCiAgLyoqCiAgICogQmFzZSBjbGFzcyBmb3Igb2JqZWN0cyB0aGF0IGRpc3BhdGNoZXMgZXZlbnRzLgogICAqLwogIGNsYXNzIEV2ZW50VGFyZ2V0IHsKICAgIC8qKgogICAgICogQWRkIGFuIGV2ZW50IGxpc3RlbmVyCiAgICAgKiBAcmV0dXJuIFRoZSBzZWxmIG9iamVjdCwgZm9yIGNoYWluYWJpbGl0eS4KICAgICAqLwogICAgYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikgewogICAgICBpZiAodGhpcy5fbGlzdGVuZXJzID09PSB1bmRlZmluZWQpIHsKICAgICAgICB0aGlzLl9saXN0ZW5lcnMgPSB7fTsKICAgICAgfQoKICAgICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzOwoKICAgICAgaWYgKGxpc3RlbmVyc1t0eXBlXSA9PT0gdW5kZWZpbmVkKSB7CiAgICAgICAgbGlzdGVuZXJzW3R5cGVdID0gW107CiAgICAgIH0KCiAgICAgIGlmICghbGlzdGVuZXJzW3R5cGVdLmluY2x1ZGVzKGxpc3RlbmVyKSkgewogICAgICAgIGxpc3RlbmVyc1t0eXBlXS5wdXNoKGxpc3RlbmVyKTsKICAgICAgfQoKICAgICAgcmV0dXJuIHRoaXM7CiAgICB9CiAgICAvKioKICAgICAqIENoZWNrIGlmIGFuIGV2ZW50IGxpc3RlbmVyIGlzIGFkZGVkCiAgICAgKi8KCgogICAgaGFzRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikgewogICAgICBpZiAodGhpcy5fbGlzdGVuZXJzID09PSB1bmRlZmluZWQpIHsKICAgICAgICByZXR1cm4gZmFsc2U7CiAgICAgIH0KCiAgICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVyczsKCiAgICAgIGlmIChsaXN0ZW5lcnNbdHlwZV0gIT09IHVuZGVmaW5lZCAmJiBsaXN0ZW5lcnNbdHlwZV0uaW5jbHVkZXMobGlzdGVuZXIpKSB7CiAgICAgICAgcmV0dXJuIHRydWU7CiAgICAgIH0KCiAgICAgIHJldHVybiBmYWxzZTsKICAgIH0KICAgIC8qKgogICAgICogQ2hlY2sgaWYgYW55IGV2ZW50IGxpc3RlbmVyIG9mIHRoZSBnaXZlbiB0eXBlIGlzIGFkZGVkCiAgICAgKi8KCgogICAgaGFzQW55RXZlbnRMaXN0ZW5lcih0eXBlKSB7CiAgICAgIGlmICh0aGlzLl9saXN0ZW5lcnMgPT09IHVuZGVmaW5lZCkgewogICAgICAgIHJldHVybiBmYWxzZTsKICAgICAgfQoKICAgICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzOwogICAgICByZXR1cm4gbGlzdGVuZXJzW3R5cGVdICE9PSB1bmRlZmluZWQ7CiAgICB9CiAgICAvKioKICAgICAqIFJlbW92ZSBhbiBldmVudCBsaXN0ZW5lcgogICAgICogQHJldHVybiBUaGUgc2VsZiBvYmplY3QsIGZvciBjaGFpbmFiaWxpdHkuCiAgICAgKi8KCgogICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikgewogICAgICBpZiAodGhpcy5fbGlzdGVuZXJzID09PSB1bmRlZmluZWQpIHsKICAgICAgICByZXR1cm4gdGhpczsKICAgICAgfQoKICAgICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzOwoKICAgICAgaWYgKGxpc3RlbmVyc1t0eXBlXSA9PT0gdW5kZWZpbmVkKSB7CiAgICAgICAgcmV0dXJuIHRoaXM7CiAgICAgIH0KCiAgICAgIGNvbnN0IGluZGV4ID0gbGlzdGVuZXJzW3R5cGVdLmluZGV4T2YobGlzdGVuZXIpOwoKICAgICAgaWYgKGluZGV4ICE9PSAtMSkgewogICAgICAgIGxpc3RlbmVyc1t0eXBlXS5zcGxpY2UoaW5kZXgsIDEpOwogICAgICB9CgogICAgICByZXR1cm4gdGhpczsKICAgIH0KICAgIC8qKgogICAgICogRW1pdCBhbiBldmVudC4KICAgICAqIEByZXR1cm4gVGhlIHNlbGYgb2JqZWN0LCBmb3IgY2hhaW5hYmlsaXR5LgogICAgICovCgoKICAgIGRpc3BhdGNoRXZlbnQoZXZlbnQpIHsKICAgICAgaWYgKHRoaXMuX2xpc3RlbmVycyA9PT0gdW5kZWZpbmVkKSB7CiAgICAgICAgcmV0dXJuIHRoaXM7CiAgICAgIH0KCiAgICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVyczsKICAgICAgY29uc3QgbGlzdGVuZXJBcnJheSA9IGxpc3RlbmVyc1tldmVudC50eXBlXTsKCiAgICAgIGlmIChsaXN0ZW5lckFycmF5ICE9PSB1bmRlZmluZWQpIHsKICAgICAgICBldmVudC50YXJnZXQgPSB0aGlzOwoKICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGxpc3RlbmVyQXJyYXkubGVuZ3RoOyBpIDwgbDsgaSsrKSB7CiAgICAgICAgICBsaXN0ZW5lckFycmF5W2ldLmNhbGwodGhpcywgZXZlbnQpOwogICAgICAgIH0KICAgICAgfQoKICAgICAgcmV0dXJuIHRoaXM7CiAgICB9CgogIH0KCiAgLyoqCiAgICogQSBRdWF0ZXJuaW9uIGRlc2NyaWJlcyBhIHJvdGF0aW9uIGluIDNEIHNwYWNlLiBUaGUgUXVhdGVybmlvbiBpcyBtYXRoZW1hdGljYWxseSBkZWZpbmVkIGFzIFEgPSB4KmkgKyB5KmogKyB6KmsgKyB3LCB3aGVyZSAoaSxqLGspIGFyZSBpbWFnaW5hcnkgYmFzaXMgdmVjdG9ycy4gKHgseSx6KSBjYW4gYmUgc2VlbiBhcyBhIHZlY3RvciByZWxhdGVkIHRvIHRoZSBheGlzIG9mIHJvdGF0aW9uLCB3aGlsZSB0aGUgcmVhbCBtdWx0aXBsaWVyLCB3LCBpcyByZWxhdGVkIHRvIHRoZSBhbW91bnQgb2Ygcm90YXRpb24uCiAgICogQHBhcmFtIHggTXVsdGlwbGllciBvZiB0aGUgaW1hZ2luYXJ5IGJhc2lzIHZlY3RvciBpLgogICAqIEBwYXJhbSB5IE11bHRpcGxpZXIgb2YgdGhlIGltYWdpbmFyeSBiYXNpcyB2ZWN0b3Igai4KICAgKiBAcGFyYW0geiBNdWx0aXBsaWVyIG9mIHRoZSBpbWFnaW5hcnkgYmFzaXMgdmVjdG9yIGsuCiAgICogQHBhcmFtIHcgTXVsdGlwbGllciBvZiB0aGUgcmVhbCBwYXJ0LgogICAqIEBzZWUgaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9RdWF0ZXJuaW9uCiAgICovCgogIGNsYXNzIFF1YXRlcm5pb24gewogICAgY29uc3RydWN0b3IoeCwgeSwgeiwgdykgewogICAgICBpZiAoeCA9PT0gdm9pZCAwKSB7CiAgICAgICAgeCA9IDA7CiAgICAgIH0KCiAgICAgIGlmICh5ID09PSB2b2lkIDApIHsKICAgICAgICB5ID0gMDsKICAgICAgfQoKICAgICAgaWYgKHogPT09IHZvaWQgMCkgewogICAgICAgIHogPSAwOwogICAgICB9CgogICAgICBpZiAodyA9PT0gdm9pZCAwKSB7CiAgICAgICAgdyA9IDE7CiAgICAgIH0KCiAgICAgIHRoaXMueCA9IHg7CiAgICAgIHRoaXMueSA9IHk7CiAgICAgIHRoaXMueiA9IHo7CiAgICAgIHRoaXMudyA9IHc7CiAgICB9CiAgICAvKioKICAgICAqIFNldCB0aGUgdmFsdWUgb2YgdGhlIHF1YXRlcm5pb24uCiAgICAgKi8KCgogICAgc2V0KHgsIHksIHosIHcpIHsKICAgICAgdGhpcy54ID0geDsKICAgICAgdGhpcy55ID0geTsKICAgICAgdGhpcy56ID0gejsKICAgICAgdGhpcy53ID0gdzsKICAgICAgcmV0dXJuIHRoaXM7CiAgICB9CiAgICAvKioKICAgICAqIENvbnZlcnQgdG8gYSByZWFkYWJsZSBmb3JtYXQKICAgICAqIEByZXR1cm4gIngseSx6LHciCiAgICAgKi8KCgogICAgdG9TdHJpbmcoKSB7CiAgICAgIHJldHVybiBgJHt0aGlzLnh9LCR7dGhpcy55fSwke3RoaXMuen0sJHt0aGlzLnd9YDsKICAgIH0KICAgIC8qKgogICAgICogQ29udmVydCB0byBhbiBBcnJheQogICAgICogQHJldHVybiBbeCwgeSwgeiwgd10KICAgICAqLwoKCiAgICB0b0FycmF5KCkgewogICAgICByZXR1cm4gW3RoaXMueCwgdGhpcy55LCB0aGlzLnosIHRoaXMud107CiAgICB9CiAgICAvKioKICAgICAqIFNldCB0aGUgcXVhdGVybmlvbiBjb21wb25lbnRzIGdpdmVuIGFuIGF4aXMgYW5kIGFuIGFuZ2xlIGluIHJhZGlhbnMuCiAgICAgKi8KCgogICAgc2V0RnJvbUF4aXNBbmdsZSh2ZWN0b3IsIGFuZ2xlKSB7CiAgICAgIGNvbnN0IHMgPSBNYXRoLnNpbihhbmdsZSAqIDAuNSk7CiAgICAgIHRoaXMueCA9IHZlY3Rvci54ICogczsKICAgICAgdGhpcy55ID0gdmVjdG9yLnkgKiBzOwogICAgICB0aGlzLnogPSB2ZWN0b3IueiAqIHM7CiAgICAgIHRoaXMudyA9IE1hdGguY29zKGFuZ2xlICogMC41KTsKICAgICAgcmV0dXJuIHRoaXM7CiAgICB9CiAgICAvKioKICAgICAqIENvbnZlcnRzIHRoZSBxdWF0ZXJuaW9uIHRvIFsgYXhpcywgYW5nbGUgXSByZXByZXNlbnRhdGlvbi4KICAgICAqIEBwYXJhbSB0YXJnZXRBeGlzIEEgdmVjdG9yIG9iamVjdCB0byByZXVzZSBmb3Igc3RvcmluZyB0aGUgYXhpcy4KICAgICAqIEByZXR1cm4gQW4gYXJyYXksIGZpcnN0IGVsZW1lbnQgaXMgdGhlIGF4aXMgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIGFuZ2xlIGluIHJhZGlhbnMuCiAgICAgKi8KCgogICAgdG9BeGlzQW5nbGUodGFyZ2V0QXhpcykgewogICAgICBpZiAodGFyZ2V0QXhpcyA9PT0gdm9pZCAwKSB7CiAgICAgICAgdGFyZ2V0QXhpcyA9IG5ldyBWZWMzKCk7CiAgICAgIH0KCiAgICAgIHRoaXMubm9ybWFsaXplKCk7IC8vIGlmIHc+MSBhY29zIGFuZCBzcXJ0IHdpbGwgcHJvZHVjZSBlcnJvcnMsIHRoaXMgY2FudCBoYXBwZW4gaWYgcXVhdGVybmlvbiBpcyBub3JtYWxpc2VkCgogICAgICBjb25zdCBhbmdsZSA9IDIgKiBNYXRoLmFjb3ModGhpcy53KTsKICAgICAgY29uc3QgcyA9IE1hdGguc3FydCgxIC0gdGhpcy53ICogdGhpcy53KTsgLy8gYXNzdW1pbmcgcXVhdGVybmlvbiBub3JtYWxpc2VkIHRoZW4gdyBpcyBsZXNzIHRoYW4gMSwgc28gdGVybSBhbHdheXMgcG9zaXRpdmUuCgogICAgICBpZiAocyA8IDAuMDAxKSB7CiAgICAgICAgLy8gdGVzdCB0byBhdm9pZCBkaXZpZGUgYnkgemVybywgcyBpcyBhbHdheXMgcG9zaXRpdmUgZHVlIHRvIHNxcnQKICAgICAgICAvLyBpZiBzIGNsb3NlIHRvIHplcm8gdGhlbiBkaXJlY3Rpb24gb2YgYXhpcyBub3QgaW1wb3J0YW50CiAgICAgICAgdGFyZ2V0QXhpcy54ID0gdGhpcy54OyAvLyBpZiBpdCBpcyBpbXBvcnRhbnQgdGhhdCBheGlzIGlzIG5vcm1hbGlzZWQgdGhlbiByZXBsYWNlIHdpdGggeD0xOyB5PXo9MDsKCiAgICAgICAgdGFyZ2V0QXhpcy55ID0gdGhpcy55OwogICAgICAgIHRhcmdldEF4aXMueiA9IHRoaXMuejsKICAgICAgfSBlbHNlIHsKICAgICAgICB0YXJnZXRBeGlzLnggPSB0aGlzLnggLyBzOyAvLyBub3JtYWxpc2UgYXhpcwoKICAgICAgICB0YXJnZXRBeGlzLnkgPSB0aGlzLnkgLyBzOwogICAgICAgIHRhcmdldEF4aXMueiA9IHRoaXMueiAvIHM7CiAgICAgIH0KCiAgICAgIHJldHVybiBbdGFyZ2V0QXhpcywgYW5nbGVdOwogICAgfQogICAgLyoqCiAgICAgKiBTZXQgdGhlIHF1YXRlcm5pb24gdmFsdWUgZ2l2ZW4gdHdvIHZlY3RvcnMuIFRoZSByZXN1bHRpbmcgcm90YXRpb24gd2lsbCBiZSB0aGUgbmVlZGVkIHJvdGF0aW9uIHRvIHJvdGF0ZSB1IHRvIHYuCiAgICAgKi8KCgogICAgc2V0RnJvbVZlY3RvcnModSwgdikgewogICAgICBpZiAodS5pc0FudGlwYXJhbGxlbFRvKHYpKSB7CiAgICAgICAgY29uc3QgdDEgPSBzZnZfdDE7CiAgICAgICAgY29uc3QgdDIgPSBzZnZfdDI7CiAgICAgICAgdS50YW5nZW50cyh0MSwgdDIpOwogICAgICAgIHRoaXMuc2V0RnJvbUF4aXNBbmdsZSh0MSwgTWF0aC5QSSk7CiAgICAgIH0gZWxzZSB7CiAgICAgICAgY29uc3QgYSA9IHUuY3Jvc3Modik7CiAgICAgICAgdGhpcy54ID0gYS54OwogICAgICAgIHRoaXMueSA9IGEueTsKICAgICAgICB0aGlzLnogPSBhLno7CiAgICAgICAgdGhpcy53ID0gTWF0aC5zcXJ0KHUubGVuZ3RoKCkgKiogMiAqIHYubGVuZ3RoKCkgKiogMikgKyB1LmRvdCh2KTsKICAgICAgICB0aGlzLm5vcm1hbGl6ZSgpOwogICAgICB9CgogICAgICByZXR1cm4gdGhpczsKICAgIH0KICAgIC8qKgogICAgICogTXVsdGlwbHkgdGhlIHF1YXRlcm5pb24gd2l0aCBhbiBvdGhlciBxdWF0ZXJuaW9uLgogICAgICovCgoKICAgIG11bHQocXVhdCwgdGFyZ2V0KSB7CiAgICAgIGlmICh0YXJnZXQgPT09IHZvaWQgMCkgewogICAgICAgIHRhcmdldCA9IG5ldyBRdWF0ZXJuaW9uKCk7CiAgICAgIH0KCiAgICAgIGNvbnN0IGF4ID0gdGhpcy54OwogICAgICBjb25zdCBheSA9IHRoaXMueTsKICAgICAgY29uc3QgYXogPSB0aGlzLno7CiAgICAgIGNvbnN0IGF3ID0gdGhpcy53OwogICAgICBjb25zdCBieCA9IHF1YXQueDsKICAgICAgY29uc3QgYnkgPSBxdWF0Lnk7CiAgICAgIGNvbnN0IGJ6ID0gcXVhdC56OwogICAgICBjb25zdCBidyA9IHF1YXQudzsKICAgICAgdGFyZ2V0LnggPSBheCAqIGJ3ICsgYXcgKiBieCArIGF5ICogYnogLSBheiAqIGJ5OwogICAgICB0YXJnZXQueSA9IGF5ICogYncgKyBhdyAqIGJ5ICsgYXogKiBieCAtIGF4ICogYno7CiAgICAgIHRhcmdldC56ID0gYXogKiBidyArIGF3ICogYnogKyBheCAqIGJ5IC0gYXkgKiBieDsKICAgICAgdGFyZ2V0LncgPSBhdyAqIGJ3IC0gYXggKiBieCAtIGF5ICogYnkgLSBheiAqIGJ6OwogICAgICByZXR1cm4gdGFyZ2V0OwogICAgfQogICAgLyoqCiAgICAgKiBHZXQgdGhlIGludmVyc2UgcXVhdGVybmlvbiByb3RhdGlvbi4KICAgICAqLwoKCiAgICBpbnZlcnNlKHRhcmdldCkgewogICAgICBpZiAodGFyZ2V0ID09PSB2b2lkIDApIHsKICAgICAgICB0YXJnZXQgPSBuZXcgUXVhdGVybmlvbigpOwogICAgICB9CgogICAgICBjb25zdCB4ID0gdGhpcy54OwogICAgICBjb25zdCB5ID0gdGhpcy55OwogICAgICBjb25zdCB6ID0gdGhpcy56OwogICAgICBjb25zdCB3ID0gdGhpcy53OwogICAgICB0aGlzLmNvbmp1Z2F0ZSh0YXJnZXQpOwogICAgICBjb25zdCBpbm9ybTIgPSAxIC8gKHggKiB4ICsgeSAqIHkgKyB6ICogeiArIHcgKiB3KTsKICAgICAgdGFyZ2V0LnggKj0gaW5vcm0yOwogICAgICB0YXJnZXQueSAqPSBpbm9ybTI7CiAgICAgIHRhcmdldC56ICo9IGlub3JtMjsKICAgICAgdGFyZ2V0LncgKj0gaW5vcm0yOwogICAgICByZXR1cm4gdGFyZ2V0OwogICAgfQogICAgLyoqCiAgICAgKiBHZXQgdGhlIHF1YXRlcm5pb24gY29uanVnYXRlCiAgICAgKi8KCgogICAgY29uanVnYXRlKHRhcmdldCkgewogICAgICBpZiAodGFyZ2V0ID09PSB2b2lkIDApIHsKICAgICAgICB0YXJnZXQgPSBuZXcgUXVhdGVybmlvbigpOwogICAgICB9CgogICAgICB0YXJnZXQueCA9IC10aGlzLng7CiAgICAgIHRhcmdldC55ID0gLXRoaXMueTsKICAgICAgdGFyZ2V0LnogPSAtdGhpcy56OwogICAgICB0YXJnZXQudyA9IHRoaXMudzsKICAgICAgcmV0dXJuIHRhcmdldDsKICAgIH0KICAgIC8qKgogICAgICogTm9ybWFsaXplIHRoZSBxdWF0ZXJuaW9uLiBOb3RlIHRoYXQgdGhpcyBjaGFuZ2VzIHRoZSB2YWx1ZXMgb2YgdGhlIHF1YXRlcm5pb24uCiAgICAgKi8KCgogICAgbm9ybWFsaXplKCkgewogICAgICBsZXQgbCA9IE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkgKyB0aGlzLnogKiB0aGlzLnogKyB0aGlzLncgKiB0aGlzLncpOwoKICAgICAgaWYgKGwgPT09IDApIHsKICAgICAgICB0aGlzLnggPSAwOwogICAgICAgIHRoaXMueSA9IDA7CiAgICAgICAgdGhpcy56ID0gMDsKICAgICAgICB0aGlzLncgPSAwOwogICAgICB9IGVsc2UgewogICAgICAgIGwgPSAxIC8gbDsKICAgICAgICB0aGlzLnggKj0gbDsKICAgICAgICB0aGlzLnkgKj0gbDsKICAgICAgICB0aGlzLnogKj0gbDsKICAgICAgICB0aGlzLncgKj0gbDsKICAgICAgfQoKICAgICAgcmV0dXJuIHRoaXM7CiAgICB9CiAgICAvKioKICAgICAqIEFwcHJveGltYXRpb24gb2YgcXVhdGVybmlvbiBub3JtYWxpemF0aW9uLiBXb3JrcyBiZXN0IHdoZW4gcXVhdCBpcyBhbHJlYWR5IGFsbW9zdC1ub3JtYWxpemVkLgogICAgICogQGF1dGhvciB1bnBoYXNlZCwgaHR0cHM6Ly9naXRodWIuY29tL3VucGhhc2VkCiAgICAgKi8KCgogICAgbm9ybWFsaXplRmFzdCgpIHsKICAgICAgY29uc3QgZiA9ICgzLjAgLSAodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55ICsgdGhpcy56ICogdGhpcy56ICsgdGhpcy53ICogdGhpcy53KSkgLyAyLjA7CgogICAgICBpZiAoZiA9PT0gMCkgewogICAgICAgIHRoaXMueCA9IDA7CiAgICAgICAgdGhpcy55ID0gMDsKICAgICAgICB0aGlzLnogPSAwOwogICAgICAgIHRoaXMudyA9IDA7CiAgICAgIH0gZWxzZSB7CiAgICAgICAgdGhpcy54ICo9IGY7CiAgICAgICAgdGhpcy55ICo9IGY7CiAgICAgICAgdGhpcy56ICo9IGY7CiAgICAgICAgdGhpcy53ICo9IGY7CiAgICAgIH0KCiAgICAgIHJldHVybiB0aGlzOwogICAgfQogICAgLyoqCiAgICAgKiBNdWx0aXBseSB0aGUgcXVhdGVybmlvbiBieSBhIHZlY3RvcgogICAgICovCgoKICAgIHZtdWx0KHYsIHRhcmdldCkgewogICAgICBpZiAodGFyZ2V0ID09PSB2b2lkIDApIHsKICAgICAgICB0YXJnZXQgPSBuZXcgVmVjMygpOwogICAgICB9CgogICAgICBjb25zdCB4ID0gdi54OwogICAgICBjb25zdCB5ID0gdi55OwogICAgICBjb25zdCB6ID0gdi56OwogICAgICBjb25zdCBxeCA9IHRoaXMueDsKICAgICAgY29uc3QgcXkgPSB0aGlzLnk7CiAgICAgIGNvbnN0IHF6ID0gdGhpcy56OwogICAgICBjb25zdCBxdyA9IHRoaXMudzsgLy8gcSp2CgogICAgICBjb25zdCBpeCA9IHF3ICogeCArIHF5ICogeiAtIHF6ICogeTsKICAgICAgY29uc3QgaXkgPSBxdyAqIHkgKyBxeiAqIHggLSBxeCAqIHo7CiAgICAgIGNvbnN0IGl6ID0gcXcgKiB6ICsgcXggKiB5IC0gcXkgKiB4OwogICAgICBjb25zdCBpdyA9IC1xeCAqIHggLSBxeSAqIHkgLSBxeiAqIHo7CiAgICAgIHRhcmdldC54ID0gaXggKiBxdyArIGl3ICogLXF4ICsgaXkgKiAtcXogLSBpeiAqIC1xeTsKICAgICAgdGFyZ2V0LnkgPSBpeSAqIHF3ICsgaXcgKiAtcXkgKyBpeiAqIC1xeCAtIGl4ICogLXF6OwogICAgICB0YXJnZXQueiA9IGl6ICogcXcgKyBpdyAqIC1xeiArIGl4ICogLXF5IC0gaXkgKiAtcXg7CiAgICAgIHJldHVybiB0YXJnZXQ7CiAgICB9CiAgICAvKioKICAgICAqIENvcGllcyB2YWx1ZSBvZiBzb3VyY2UgdG8gdGhpcyBxdWF0ZXJuaW9uLgogICAgICogQHJldHVybiB0aGlzCiAgICAgKi8KCgogICAgY29weShxdWF0KSB7CiAgICAgIHRoaXMueCA9IHF1YXQueDsKICAgICAgdGhpcy55ID0gcXVhdC55OwogICAgICB0aGlzLnogPSBxdWF0Lno7CiAgICAgIHRoaXMudyA9IHF1YXQudzsKICAgICAgcmV0dXJuIHRoaXM7CiAgICB9CiAgICAvKioKICAgICAqIENvbnZlcnQgdGhlIHF1YXRlcm5pb24gdG8gZXVsZXIgYW5nbGUgcmVwcmVzZW50YXRpb24uIE9yZGVyOiBZWlgsIGFzIHRoaXMgcGFnZSBkZXNjcmliZXM6IGh0dHBzOi8vd3d3LmV1Y2xpZGVhbnNwYWNlLmNvbS9tYXRocy9zdGFuZGFyZHMvaW5kZXguaHRtCiAgICAgKiBAcGFyYW0gb3JkZXIgVGhyZWUtY2hhcmFjdGVyIHN0cmluZywgZGVmYXVsdHMgdG8gIllaWCIKICAgICAqLwoKCiAgICB0b0V1bGVyKHRhcmdldCwgb3JkZXIpIHsKICAgICAgaWYgKG9yZGVyID09PSB2b2lkIDApIHsKICAgICAgICBvcmRlciA9ICdZWlgnOwogICAgICB9CgogICAgICBsZXQgaGVhZGluZzsKICAgICAgbGV0IGF0dGl0dWRlOwogICAgICBsZXQgYmFuazsKICAgICAgY29uc3QgeCA9IHRoaXMueDsKICAgICAgY29uc3QgeSA9IHRoaXMueTsKICAgICAgY29uc3QgeiA9IHRoaXMuejsKICAgICAgY29uc3QgdyA9IHRoaXMudzsKCiAgICAgIHN3aXRjaCAob3JkZXIpIHsKICAgICAgICBjYXNlICdZWlgnOgogICAgICAgICAgY29uc3QgdGVzdCA9IHggKiB5ICsgeiAqIHc7CgogICAgICAgICAgaWYgKHRlc3QgPiAwLjQ5OSkgewogICAgICAgICAgICAvLyBzaW5ndWxhcml0eSBhdCBub3J0aCBwb2xlCiAgICAgICAgICAgIGhlYWRpbmcgPSAyICogTWF0aC5hdGFuMih4LCB3KTsKICAgICAgICAgICAgYXR0aXR1ZGUgPSBNYXRoLlBJIC8gMjsKICAgICAgICAgICAgYmFuayA9IDA7CiAgICAgICAgICB9CgogICAgICAgICAgaWYgKHRlc3QgPCAtMC40OTkpIHsKICAgICAgICAgICAgLy8gc2luZ3VsYXJpdHkgYXQgc291dGggcG9sZQogICAgICAgICAgICBoZWFkaW5nID0gLTIgKiBNYXRoLmF0YW4yKHgsIHcpOwogICAgICAgICAgICBhdHRpdHVkZSA9IC1NYXRoLlBJIC8gMjsKICAgICAgICAgICAgYmFuayA9IDA7CiAgICAgICAgICB9CgogICAgICAgICAgaWYgKGhlYWRpbmcgPT09IHVuZGVmaW5lZCkgewogICAgICAgICAgICBjb25zdCBzcXggPSB4ICogeDsKICAgICAgICAgICAgY29uc3Qgc3F5ID0geSAqIHk7CiAgICAgICAgICAgIGNvbnN0IHNxeiA9IHogKiB6OwogICAgICAgICAgICBoZWFkaW5nID0gTWF0aC5hdGFuMigyICogeSAqIHcgLSAyICogeCAqIHosIDEgLSAyICogc3F5IC0gMiAqIHNxeik7IC8vIEhlYWRpbmcKCiAgICAgICAgICAgIGF0dGl0dWRlID0gTWF0aC5hc2luKDIgKiB0ZXN0KTsgLy8gYXR0aXR1ZGUKCiAgICAgICAgICAgIGJhbmsgPSBNYXRoLmF0YW4yKDIgKiB4ICogdyAtIDIgKiB5ICogeiwgMSAtIDIgKiBzcXggLSAyICogc3F6KTsgLy8gYmFuawogICAgICAgICAgfQoKICAgICAgICAgIGJyZWFrOwoKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFdWxlciBvcmRlciAke29yZGVyfSBub3Qgc3VwcG9ydGVkIHlldC5gKTsKICAgICAgfQoKICAgICAgdGFyZ2V0LnkgPSBoZWFkaW5nOwogICAgICB0YXJnZXQueiA9IGF0dGl0dWRlOwogICAgICB0YXJnZXQueCA9IGJhbms7CiAgICB9CiAgICAvKioKICAgICAqIEBwYXJhbSBvcmRlciBUaGUgb3JkZXIgdG8gYXBwbHkgYW5nbGVzOiAnWFlaJyBvciAnWVhaJyBvciBhbnkgb3RoZXIgY29tYmluYXRpb24uCiAgICAgKgogICAgICogU2VlIHtAbGluayBodHRwczovL3d3dy5tYXRod29ya3MuY29tL21hdGxhYmNlbnRyYWwvZmlsZWV4Y2hhbmdlLzIwNjk2LWZ1bmN0aW9uLXRvLWNvbnZlcnQtYmV0d2Vlbi1kY20tZXVsZXItYW5nbGVzLXF1YXRlcm5pb25zLWFuZC1ldWxlci12ZWN0b3JzIE1hdGhXb3Jrc30gcmVmZXJlbmNlCiAgICAgKi8KCgogICAgc2V0RnJvbUV1bGVyKHgsIHksIHosIG9yZGVyKSB7CiAgICAgIGlmIChvcmRlciA9PT0gdm9pZCAwKSB7CiAgICAgICAgb3JkZXIgPSAnWFlaJzsKICAgICAgfQoKICAgICAgY29uc3QgYzEgPSBNYXRoLmNvcyh4IC8gMik7CiAgICAgIGNvbnN0IGMyID0gTWF0aC5jb3MoeSAvIDIpOwogICAgICBjb25zdCBjMyA9IE1hdGguY29zKHogLyAyKTsKICAgICAgY29uc3QgczEgPSBNYXRoLnNpbih4IC8gMik7CiAgICAgIGNvbnN0IHMyID0gTWF0aC5zaW4oeSAvIDIpOwogICAgICBjb25zdCBzMyA9IE1hdGguc2luKHogLyAyKTsKCiAgICAgIGlmIChvcmRlciA9PT0gJ1hZWicpIHsKICAgICAgICB0aGlzLnggPSBzMSAqIGMyICogYzMgKyBjMSAqIHMyICogczM7CiAgICAgICAgdGhpcy55ID0gYzEgKiBzMiAqIGMzIC0gczEgKiBjMiAqIHMzOwogICAgICAgIHRoaXMueiA9IGMxICogYzIgKiBzMyArIHMxICogczIgKiBjMzsKICAgICAgICB0aGlzLncgPSBjMSAqIGMyICogYzMgLSBzMSAqIHMyICogczM7CiAgICAgIH0gZWxzZSBpZiAob3JkZXIgPT09ICdZWFonKSB7CiAgICAgICAgdGhpcy54ID0gczEgKiBjMiAqIGMzICsgYzEgKiBzMiAqIHMzOwogICAgICAgIHRoaXMueSA9IGMxICogczIgKiBjMyAtIHMxICogYzIgKiBzMzsKICAgICAgICB0aGlzLnogPSBjMSAqIGMyICogczMgLSBzMSAqIHMyICogYzM7CiAgICAgICAgdGhpcy53ID0gYzEgKiBjMiAqIGMzICsgczEgKiBzMiAqIHMzOwogICAgICB9IGVsc2UgaWYgKG9yZGVyID09PSAnWlhZJykgewogICAgICAgIHRoaXMueCA9IHMxICogYzIgKiBjMyAtIGMxICogczIgKiBzMzsKICAgICAgICB0aGlzLnkgPSBjMSAqIHMyICogYzMgKyBzMSAqIGMyICogczM7CiAgICAgICAgdGhpcy56ID0gYzEgKiBjMiAqIHMzICsgczEgKiBzMiAqIGMzOwogICAgICAgIHRoaXMudyA9IGMxICogYzIgKiBjMyAtIHMxICogczIgKiBzMzsKICAgICAgfSBlbHNlIGlmIChvcmRlciA9PT0gJ1pZWCcpIHsKICAgICAgICB0aGlzLnggPSBzMSAqIGMyICogYzMgLSBjMSAqIHMyICogczM7CiAgICAgICAgdGhpcy55ID0gYzEgKiBzMiAqIGMzICsgczEgKiBjMiAqIHMzOwogICAgICAgIHRoaXMueiA9IGMxICogYzIgKiBzMyAtIHMxICogczIgKiBjMzsKICAgICAgICB0aGlzLncgPSBjMSAqIGMyICogYzMgKyBzMSAqIHMyICogczM7CiAgICAgIH0gZWxzZSBpZiAob3JkZXIgPT09ICdZWlgnKSB7CiAgICAgICAgdGhpcy54ID0gczEgKiBjMiAqIGMzICsgYzEgKiBzMiAqIHMzOwogICAgICAgIHRoaXMueSA9IGMxICogczIgKiBjMyArIHMxICogYzIgKiBzMzsKICAgICAgICB0aGlzLnogPSBjMSAqIGMyICogczMgLSBzMSAqIHMyICogYzM7CiAgICAgICAgdGhpcy53ID0gYzEgKiBjMiAqIGMzIC0gczEgKiBzMiAqIHMzOwogICAgICB9IGVsc2UgaWYgKG9yZGVyID09PSAnWFpZJykgewogICAgICAgIHRoaXMueCA9IHMxICogYzIgKiBjMyAtIGMxICogczIgKiBzMzsKICAgICAgICB0aGlzLnkgPSBjMSAqIHMyICogYzMgLSBzMSAqIGMyICogczM7CiAgICAgICAgdGhpcy56ID0gYzEgKiBjMiAqIHMzICsgczEgKiBzMiAqIGMzOwogICAgICAgIHRoaXMudyA9IGMxICogYzIgKiBjMyArIHMxICogczIgKiBzMzsKICAgICAgfQoKICAgICAgcmV0dXJuIHRoaXM7CiAgICB9CgogICAgY2xvbmUoKSB7CiAgICAgIHJldHVybiBuZXcgUXVhdGVybmlvbih0aGlzLngsIHRoaXMueSwgdGhpcy56LCB0aGlzLncpOwogICAgfQogICAgLyoqCiAgICAgKiBQZXJmb3JtcyBhIHNwaGVyaWNhbCBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHR3byBxdWF0CiAgICAgKgogICAgICogQHBhcmFtIHRvUXVhdCBzZWNvbmQgb3BlcmFuZAogICAgICogQHBhcmFtIHQgaW50ZXJwb2xhdGlvbiBhbW91bnQgYmV0d2VlbiB0aGUgc2VsZiBxdWF0ZXJuaW9uIGFuZCB0b1F1YXQKICAgICAqIEBwYXJhbSB0YXJnZXQgQSBxdWF0ZXJuaW9uIHRvIHN0b3JlIHRoZSByZXN1bHQgaW4uIElmIG5vdCBwcm92aWRlZCwgYSBuZXcgb25lIHdpbGwgYmUgY3JlYXRlZC4KICAgICAqIEByZXR1cm5zIHtRdWF0ZXJuaW9ufSBUaGUgInRhcmdldCIgb2JqZWN0CiAgICAgKi8KCgogICAgc2xlcnAodG9RdWF0LCB0LCB0YXJnZXQpIHsKICAgICAgaWYgKHRhcmdldCA9PT0gdm9pZCAwKSB7CiAgICAgICAgdGFyZ2V0ID0gbmV3IFF1YXRlcm5pb24oKTsKICAgICAgfQoKICAgICAgY29uc3QgYXggPSB0aGlzLng7CiAgICAgIGNvbnN0IGF5ID0gdGhpcy55OwogICAgICBjb25zdCBheiA9IHRoaXMuejsKICAgICAgY29uc3QgYXcgPSB0aGlzLnc7CiAgICAgIGxldCBieCA9IHRvUXVhdC54OwogICAgICBsZXQgYnkgPSB0b1F1YXQueTsKICAgICAgbGV0IGJ6ID0gdG9RdWF0Lno7CiAgICAgIGxldCBidyA9IHRvUXVhdC53OwogICAgICBsZXQgb21lZ2E7CiAgICAgIGxldCBjb3NvbTsKICAgICAgbGV0IHNpbm9tOwogICAgICBsZXQgc2NhbGUwOwogICAgICBsZXQgc2NhbGUxOyAvLyBjYWxjIGNvc2luZQoKICAgICAgY29zb20gPSBheCAqIGJ4ICsgYXkgKiBieSArIGF6ICogYnogKyBhdyAqIGJ3OyAvLyBhZGp1c3Qgc2lnbnMgKGlmIG5lY2Vzc2FyeSkKCiAgICAgIGlmIChjb3NvbSA8IDAuMCkgewogICAgICAgIGNvc29tID0gLWNvc29tOwogICAgICAgIGJ4ID0gLWJ4OwogICAgICAgIGJ5ID0gLWJ5OwogICAgICAgIGJ6ID0gLWJ6OwogICAgICAgIGJ3ID0gLWJ3OwogICAgICB9IC8vIGNhbGN1bGF0ZSBjb2VmZmljaWVudHMKCgogICAgICBpZiAoMS4wIC0gY29zb20gPiAwLjAwMDAwMSkgewogICAgICAgIC8vIHN0YW5kYXJkIGNhc2UgKHNsZXJwKQogICAgICAgIG9tZWdhID0gTWF0aC5hY29zKGNvc29tKTsKICAgICAgICBzaW5vbSA9IE1hdGguc2luKG9tZWdhKTsKICAgICAgICBzY2FsZTAgPSBNYXRoLnNpbigoMS4wIC0gdCkgKiBvbWVnYSkgLyBzaW5vbTsKICAgICAgICBzY2FsZTEgPSBNYXRoLnNpbih0ICogb21lZ2EpIC8gc2lub207CiAgICAgIH0gZWxzZSB7CiAgICAgICAgLy8gImZyb20iIGFuZCAidG8iIHF1YXRlcm5pb25zIGFyZSB2ZXJ5IGNsb3NlCiAgICAgICAgLy8gIC4uLiBzbyB3ZSBjYW4gZG8gYSBsaW5lYXIgaW50ZXJwb2xhdGlvbgogICAgICAgIHNjYWxlMCA9IDEuMCAtIHQ7CiAgICAgICAgc2NhbGUxID0gdDsKICAgICAgfSAvLyBjYWxjdWxhdGUgZmluYWwgdmFsdWVzCgoKICAgICAgdGFyZ2V0LnggPSBzY2FsZTAgKiBheCArIHNjYWxlMSAqIGJ4OwogICAgICB0YXJnZXQueSA9IHNjYWxlMCAqIGF5ICsgc2NhbGUxICogYnk7CiAgICAgIHRhcmdldC56ID0gc2NhbGUwICogYXogKyBzY2FsZTEgKiBiejsKICAgICAgdGFyZ2V0LncgPSBzY2FsZTAgKiBhdyArIHNjYWxlMSAqIGJ3OwogICAgICByZXR1cm4gdGFyZ2V0OwogICAgfQogICAgLyoqCiAgICAgKiBSb3RhdGUgYW4gYWJzb2x1dGUgb3JpZW50YXRpb24gcXVhdGVybmlvbiBnaXZlbiBhbiBhbmd1bGFyIHZlbG9jaXR5IGFuZCBhIHRpbWUgc3RlcC4KICAgICAqLwoKCiAgICBpbnRlZ3JhdGUoYW5ndWxhclZlbG9jaXR5LCBkdCwgYW5ndWxhckZhY3RvciwgdGFyZ2V0KSB7CiAgICAgIGlmICh0YXJnZXQgPT09IHZvaWQgMCkgewogICAgICAgIHRhcmdldCA9IG5ldyBRdWF0ZXJuaW9uKCk7CiAgICAgIH0KCiAgICAgIGNvbnN0IGF4ID0gYW5ndWxhclZlbG9jaXR5LnggKiBhbmd1bGFyRmFjdG9yLngsCiAgICAgICAgICAgIGF5ID0gYW5ndWxhclZlbG9jaXR5LnkgKiBhbmd1bGFyRmFjdG9yLnksCiAgICAgICAgICAgIGF6ID0gYW5ndWxhclZlbG9jaXR5LnogKiBhbmd1bGFyRmFjdG9yLnosCiAgICAgICAgICAgIGJ4ID0gdGhpcy54LAogICAgICAgICAgICBieSA9IHRoaXMueSwKICAgICAgICAgICAgYnogPSB0aGlzLnosCiAgICAgICAgICAgIGJ3ID0gdGhpcy53OwogICAgICBjb25zdCBoYWxmX2R0ID0gZHQgKiAwLjU7CiAgICAgIHRhcmdldC54ICs9IGhhbGZfZHQgKiAoYXggKiBidyArIGF5ICogYnogLSBheiAqIGJ5KTsKICAgICAgdGFyZ2V0LnkgKz0gaGFsZl9kdCAqIChheSAqIGJ3ICsgYXogKiBieCAtIGF4ICogYnopOwogICAgICB0YXJnZXQueiArPSBoYWxmX2R0ICogKGF6ICogYncgKyBheCAqIGJ5IC0gYXkgKiBieCk7CiAgICAgIHRhcmdldC53ICs9IGhhbGZfZHQgKiAoLWF4ICogYnggLSBheSAqIGJ5IC0gYXogKiBieik7CiAgICAgIHJldHVybiB0YXJnZXQ7CiAgICB9CgogIH0KICBjb25zdCBzZnZfdDEgPSBuZXcgVmVjMygpOwogIGNvbnN0IHNmdl90MiA9IG5ldyBWZWMzKCk7CgogIC8qKgogICAqIFRoZSBhdmFpbGFibGUgc2hhcGUgdHlwZXMuCiAgICovCiAgY29uc3QgU0hBUEVfVFlQRVMgPSB7CiAgICAvKiogU1BIRVJFICovCiAgICBTUEhFUkU6IDEsCgogICAgLyoqIFBMQU5FICovCiAgICBQTEFORTogMiwKCiAgICAvKiogQk9YICovCiAgICBCT1g6IDQsCgogICAgLyoqIENPTVBPVU5EICovCiAgICBDT01QT1VORDogOCwKCiAgICAvKiogQ09OVkVYUE9MWUhFRFJPTiAqLwogICAgQ09OVkVYUE9MWUhFRFJPTjogMTYsCgogICAgLyoqIEhFSUdIVEZJRUxEICovCiAgICBIRUlHSFRGSUVMRDogMzIsCgogICAgLyoqIFBBUlRJQ0xFICovCiAgICBQQVJUSUNMRTogNjQsCgogICAgLyoqIENZTElOREVSICovCiAgICBDWUxJTkRFUjogMTI4LAoKICAgIC8qKiBUUklNRVNIICovCiAgICBUUklNRVNIOiAyNTYKICB9OwogIC8qKgogICAqIFNoYXBlVHlwZQogICAqLwoKICAvKioKICAgKiBCYXNlIGNsYXNzIGZvciBzaGFwZXMKICAgKi8KICBjbGFzcyBTaGFwZSB7CiAgICAvKioKICAgICAqIElkZW50aWZpZXIgb2YgdGhlIFNoYXBlLgogICAgICovCgogICAgLyoqCiAgICAgKiBUaGUgdHlwZSBvZiB0aGlzIHNoYXBlLiBNdXN0IGJlIHNldCB0byBhbiBpbnQgPiAwIGJ5IHN1YmNsYXNzZXMuCiAgICAgKi8KCiAgICAvKioKICAgICAqIFRoZSBsb2NhbCBib3VuZGluZyBzcGhlcmUgcmFkaXVzIG9mIHRoaXMgc2hhcGUuCiAgICAgKi8KCiAgICAvKioKICAgICAqIFdoZXRoZXIgdG8gcHJvZHVjZSBjb250YWN0IGZvcmNlcyB3aGVuIGluIGNvbnRhY3Qgd2l0aCBvdGhlciBib2RpZXMuIE5vdGUgdGhhdCBjb250YWN0cyB3aWxsIGJlIGdlbmVyYXRlZCwgYnV0IHRoZXkgd2lsbCBiZSBkaXNhYmxlZC4KICAgICAqIEBkZWZhdWx0IHRydWUKICAgICAqLwoKICAgIC8qKgogICAgICogQGRlZmF1bHQgMQogICAgICovCgogICAgLyoqCiAgICAgKiBAZGVmYXVsdCAtMQogICAgICovCgogICAgLyoqCiAgICAgKiBPcHRpb25hbCBtYXRlcmlhbCBvZiB0aGUgc2hhcGUgdGhhdCByZWd1bGF0ZXMgY29udGFjdCBwcm9wZXJ0aWVzLgogICAgICovCgogICAgLyoqCiAgICAgKiBUaGUgYm9keSB0byB3aGljaCB0aGUgc2hhcGUgaXMgYWRkZWQgdG8uCiAgICAgKi8KCiAgICAvKioKICAgICAqIEFsbCB0aGUgU2hhcGUgdHlwZXMuCiAgICAgKi8KICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHsKICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgewogICAgICAgIG9wdGlvbnMgPSB7fTsKICAgICAgfQoKICAgICAgdGhpcy5pZCA9IFNoYXBlLmlkQ291bnRlcisrOwogICAgICB0aGlzLnR5cGUgPSBvcHRpb25zLnR5cGUgfHwgMDsKICAgICAgdGhpcy5ib3VuZGluZ1NwaGVyZVJhZGl1cyA9IDA7CiAgICAgIHRoaXMuY29sbGlzaW9uUmVzcG9uc2UgPSBvcHRpb25zLmNvbGxpc2lvblJlc3BvbnNlID8gb3B0aW9ucy5jb2xsaXNpb25SZXNwb25zZSA6IHRydWU7CiAgICAgIHRoaXMuY29sbGlzaW9uRmlsdGVyR3JvdXAgPSBvcHRpb25zLmNvbGxpc2lvbkZpbHRlckdyb3VwICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmNvbGxpc2lvbkZpbHRlckdyb3VwIDogMTsKICAgICAgdGhpcy5jb2xsaXNpb25GaWx0ZXJNYXNrID0gb3B0aW9ucy5jb2xsaXNpb25GaWx0ZXJNYXNrICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmNvbGxpc2lvbkZpbHRlck1hc2sgOiAtMTsKICAgICAgdGhpcy5tYXRlcmlhbCA9IG9wdGlvbnMubWF0ZXJpYWwgPyBvcHRpb25zLm1hdGVyaWFsIDogbnVsbDsKICAgICAgdGhpcy5ib2R5ID0gbnVsbDsKICAgIH0KICAgIC8qKgogICAgICogQ29tcHV0ZXMgdGhlIGJvdW5kaW5nIHNwaGVyZSByYWRpdXMuCiAgICAgKiBUaGUgcmVzdWx0IGlzIHN0b3JlZCBpbiB0aGUgcHJvcGVydHkgYC5ib3VuZGluZ1NwaGVyZVJhZGl1c2AKICAgICAqLwoKCiAgICB1cGRhdGVCb3VuZGluZ1NwaGVyZVJhZGl1cygpIHsKICAgICAgdGhyb3cgYGNvbXB1dGVCb3VuZGluZ1NwaGVyZVJhZGl1cygpIG5vdCBpbXBsZW1lbnRlZCBmb3Igc2hhcGUgdHlwZSAke3RoaXMudHlwZX1gOwogICAgfQogICAgLyoqCiAgICAgKiBHZXQgdGhlIHZvbHVtZSBvZiB0aGlzIHNoYXBlCiAgICAgKi8KCgogICAgdm9sdW1lKCkgewogICAgICB0aHJvdyBgdm9sdW1lKCkgbm90IGltcGxlbWVudGVkIGZvciBzaGFwZSB0eXBlICR7dGhpcy50eXBlfWA7CiAgICB9CiAgICAvKioKICAgICAqIENhbGN1bGF0ZXMgdGhlIGluZXJ0aWEgaW4gdGhlIGxvY2FsIGZyYW1lIGZvciB0aGlzIHNoYXBlLgogICAgICogQHNlZSBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0xpc3Rfb2ZfbW9tZW50c19vZl9pbmVydGlhCiAgICAgKi8KCgogICAgY2FsY3VsYXRlTG9jYWxJbmVydGlhKG1hc3MsIHRhcmdldCkgewogICAgICB0aHJvdyBgY2FsY3VsYXRlTG9jYWxJbmVydGlhKCkgbm90IGltcGxlbWVudGVkIGZvciBzaGFwZSB0eXBlICR7dGhpcy50eXBlfWA7CiAgICB9CiAgICAvKioKICAgICAqIEB0b2RvIHVzZSBhYnN0cmFjdCBmb3IgdGhlc2Uga2luZCBvZiBtZXRob2RzCiAgICAgKi8KCgogICAgY2FsY3VsYXRlV29ybGRBQUJCKHBvcywgcXVhdCwgbWluLCBtYXgpIHsKICAgICAgdGhyb3cgYGNhbGN1bGF0ZVdvcmxkQUFCQigpIG5vdCBpbXBsZW1lbnRlZCBmb3Igc2hhcGUgdHlwZSAke3RoaXMudHlwZX1gOwogICAgfQoKICB9CiAgU2hhcGUuaWRDb3VudGVyID0gMDsKICBTaGFwZS50eXBlcyA9IFNIQVBFX1RZUEVTOwoKICAvKioKICAgKiBUcmFuc2Zvcm1hdGlvbiB1dGlsaXRpZXMuCiAgICovCiAgY2xhc3MgVHJhbnNmb3JtIHsKICAgIC8qKgogICAgICogcG9zaXRpb24KICAgICAqLwoKICAgIC8qKgogICAgICogcXVhdGVybmlvbgogICAgICovCiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7CiAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsKICAgICAgICBvcHRpb25zID0ge307CiAgICAgIH0KCiAgICAgIHRoaXMucG9zaXRpb24gPSBuZXcgVmVjMygpOwogICAgICB0aGlzLnF1YXRlcm5pb24gPSBuZXcgUXVhdGVybmlvbigpOwoKICAgICAgaWYgKG9wdGlvbnMucG9zaXRpb24pIHsKICAgICAgICB0aGlzLnBvc2l0aW9uLmNvcHkob3B0aW9ucy5wb3NpdGlvbik7CiAgICAgIH0KCiAgICAgIGlmIChvcHRpb25zLnF1YXRlcm5pb24pIHsKICAgICAgICB0aGlzLnF1YXRlcm5pb24uY29weShvcHRpb25zLnF1YXRlcm5pb24pOwogICAgICB9CiAgICB9CiAgICAvKioKICAgICAqIEdldCBhIGdsb2JhbCBwb2ludCBpbiBsb2NhbCB0cmFuc2Zvcm0gY29vcmRpbmF0ZXMuCiAgICAgKi8KCgogICAgcG9pbnRUb0xvY2FsKHdvcmxkUG9pbnQsIHJlc3VsdCkgewogICAgICByZXR1cm4gVHJhbnNmb3JtLnBvaW50VG9Mb2NhbEZyYW1lKHRoaXMucG9zaXRpb24sIHRoaXMucXVhdGVybmlvbiwgd29ybGRQb2ludCwgcmVzdWx0KTsKICAgIH0KICAgIC8qKgogICAgICogR2V0IGEgbG9jYWwgcG9pbnQgaW4gZ2xvYmFsIHRyYW5zZm9ybSBjb29yZGluYXRlcy4KICAgICAqLwoKCiAgICBwb2ludFRvV29ybGQobG9jYWxQb2ludCwgcmVzdWx0KSB7CiAgICAgIHJldHVybiBUcmFuc2Zvcm0ucG9pbnRUb1dvcmxkRnJhbWUodGhpcy5wb3NpdGlvbiwgdGhpcy5xdWF0ZXJuaW9uLCBsb2NhbFBvaW50LCByZXN1bHQpOwogICAgfQogICAgLyoqCiAgICAgKiB2ZWN0b3JUb1dvcmxkRnJhbWUKICAgICAqLwoKCiAgICB2ZWN0b3JUb1dvcmxkRnJhbWUobG9jYWxWZWN0b3IsIHJlc3VsdCkgewogICAgICBpZiAocmVzdWx0ID09PSB2b2lkIDApIHsKICAgICAgICByZXN1bHQgPSBuZXcgVmVjMygpOwogICAgICB9CgogICAgICB0aGlzLnF1YXRlcm5pb24udm11bHQobG9jYWxWZWN0b3IsIHJlc3VsdCk7CiAgICAgIHJldHVybiByZXN1bHQ7CiAgICB9CiAgICAvKioKICAgICAqIHBvaW50VG9Mb2NhbEZyYW1lCiAgICAgKi8KCgogICAgc3RhdGljIHBvaW50VG9Mb2NhbEZyYW1lKHBvc2l0aW9uLCBxdWF0ZXJuaW9uLCB3b3JsZFBvaW50LCByZXN1bHQpIHsKICAgICAgaWYgKHJlc3VsdCA9PT0gdm9pZCAwKSB7CiAgICAgICAgcmVzdWx0ID0gbmV3IFZlYzMoKTsKICAgICAgfQoKICAgICAgd29ybGRQb2ludC52c3ViKHBvc2l0aW9uLCByZXN1bHQpOwogICAgICBxdWF0ZXJuaW9uLmNvbmp1Z2F0ZSh0bXBRdWF0JDEpOwogICAgICB0bXBRdWF0JDEudm11bHQocmVzdWx0LCByZXN1bHQpOwogICAgICByZXR1cm4gcmVzdWx0OwogICAgfQogICAgLyoqCiAgICAgKiBwb2ludFRvV29ybGRGcmFtZQogICAgICovCgoKICAgIHN0YXRpYyBwb2ludFRvV29ybGRGcmFtZShwb3NpdGlvbiwgcXVhdGVybmlvbiwgbG9jYWxQb2ludCwgcmVzdWx0KSB7CiAgICAgIGlmIChyZXN1bHQgPT09IHZvaWQgMCkgewogICAgICAgIHJlc3VsdCA9IG5ldyBWZWMzKCk7CiAgICAgIH0KCiAgICAgIHF1YXRlcm5pb24udm11bHQobG9jYWxQb2ludCwgcmVzdWx0KTsKICAgICAgcmVzdWx0LnZhZGQocG9zaXRpb24sIHJlc3VsdCk7CiAgICAgIHJldHVybiByZXN1bHQ7CiAgICB9CiAgICAvKioKICAgICAqIHZlY3RvclRvV29ybGRGcmFtZQogICAgICovCgoKICAgIHN0YXRpYyB2ZWN0b3JUb1dvcmxkRnJhbWUocXVhdGVybmlvbiwgbG9jYWxWZWN0b3IsIHJlc3VsdCkgewogICAgICBpZiAocmVzdWx0ID09PSB2b2lkIDApIHsKICAgICAgICByZXN1bHQgPSBuZXcgVmVjMygpOwogICAgICB9CgogICAgICBxdWF0ZXJuaW9uLnZtdWx0KGxvY2FsVmVjdG9yLCByZXN1bHQpOwogICAgICByZXR1cm4gcmVzdWx0OwogICAgfQogICAgLyoqCiAgICAgKiB2ZWN0b3JUb0xvY2FsRnJhbWUKICAgICAqLwoKCiAgICBzdGF0aWMgdmVjdG9yVG9Mb2NhbEZyYW1lKHBvc2l0aW9uLCBxdWF0ZXJuaW9uLCB3b3JsZFZlY3RvciwgcmVzdWx0KSB7CiAgICAgIGlmIChyZXN1bHQgPT09IHZvaWQgMCkgewogICAgICAgIHJlc3VsdCA9IG5ldyBWZWMzKCk7CiAgICAgIH0KCiAgICAgIHF1YXRlcm5pb24udyAqPSAtMTsKICAgICAgcXVhdGVybmlvbi52bXVsdCh3b3JsZFZlY3RvciwgcmVzdWx0KTsKICAgICAgcXVhdGVybmlvbi53ICo9IC0xOwogICAgICByZXR1cm4gcmVzdWx0OwogICAgfQoKICB9CiAgY29uc3QgdG1wUXVhdCQxID0gbmV3IFF1YXRlcm5pb24oKTsKCiAgLyoqCiAgICogQSBzZXQgb2YgcG9seWdvbnMgZGVzY3JpYmluZyBhIGNvbnZleCBzaGFwZS4KICAgKgogICAqIFRoZSBzaGFwZSBNVVNUIGJlIGNvbnZleCBmb3IgdGhlIGNvZGUgdG8gd29yayBwcm9wZXJseS4gTm8gcG9seWdvbnMgbWF5IGJlIGNvcGxhbmFyIChjb250YWluZWQKICAgKiBpbiB0aGUgc2FtZSAzRCBwbGFuZSksIGluc3RlYWQgdGhlc2Ugc2hvdWxkIGJlIG1lcmdlZCBpbnRvIG9uZSBwb2x5Z29uLgogICAqCiAgICogQGF1dGhvciBxaWFvIC8gaHR0cHM6Ly9naXRodWIuY29tL3FpYW8gKG9yaWdpbmFsIGF1dGhvciwgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9xaWFvL3RocmVlLmpzL2NvbW1pdC84NTAyNmYwYzc2OWU0MDAwMTQ4YTY3ZDQ1YTllOWI5YzUxMDg4MzZmKQogICAqIEBhdXRob3Igc2NodGVwcGUgLyBodHRwczovL2dpdGh1Yi5jb20vc2NodGVwcGUKICAgKiBAc2VlIGh0dHBzOi8vd3d3LmFsdGRldmJsb2dhZGF5LmNvbS8yMDExLzA1LzEzL2NvbnRhY3QtZ2VuZXJhdGlvbi1iZXR3ZWVuLTNkLWNvbnZleC1tZXNoZXMvCiAgICoKICAgKiBAdG9kbyBNb3ZlIHRoZSBjbGlwcGluZyBmdW5jdGlvbnMgdG8gQ29udGFjdEdlbmVyYXRvcj8KICAgKiBAdG9kbyBBdXRvbWF0aWNhbGx5IG1lcmdlIGNvcGxhbmFyIHBvbHlnb25zIGluIGNvbnN0cnVjdG9yLgogICAqIEBleGFtcGxlCiAgICogICAgIGNvbnN0IGNvbnZleFNoYXBlID0gbmV3IENBTk5PTi5Db252ZXhQb2x5aGVkcm9uKHsgdmVydGljZXMsIGZhY2VzIH0pCiAgICogICAgIGNvbnN0IGNvbnZleEJvZHkgPSBuZXcgQ0FOTk9OLkJvZHkoeyBtYXNzOiAxLCBzaGFwZTogY29udmV4U2hhcGUgfSkKICAgKiAgICAgd29ybGQuYWRkQm9keShjb252ZXhCb2R5KQogICAqLwogIGNsYXNzIENvbnZleFBvbHloZWRyb24gZXh0ZW5kcyBTaGFwZSB7CiAgICAvKiogdmVydGljZXMgKi8KCiAgICAvKioKICAgICAqIEFycmF5IG9mIGludGVnZXIgYXJyYXlzLCBpbmRpY2F0aW5nIHdoaWNoIHZlcnRpY2VzIGVhY2ggZmFjZSBjb25zaXN0cyBvZgogICAgICovCgogICAgLyoqIGZhY2VOb3JtYWxzICovCgogICAgLyoqIHdvcmxkVmVydGljZXMgKi8KCiAgICAvKiogd29ybGRWZXJ0aWNlc05lZWRzVXBkYXRlICovCgogICAgLyoqIHdvcmxkRmFjZU5vcm1hbHMgKi8KCiAgICAvKiogd29ybGRGYWNlTm9ybWFsc05lZWRzVXBkYXRlICovCgogICAgLyoqCiAgICAgKiBJZiBnaXZlbiwgdGhlc2UgbG9jYWxseSBkZWZpbmVkLCBub3JtYWxpemVkIGF4ZXMgYXJlIHRoZSBvbmx5IG9uZXMgYmVpbmcgY2hlY2tlZCB3aGVuIGRvaW5nIHNlcGFyYXRpbmcgYXhpcyBjaGVjay4KICAgICAqLwoKICAgIC8qKiB1bmlxdWVFZGdlcyAqLwoKICAgIC8qKgogICAgICogQHBhcmFtIHZlcnRpY2VzIEFuIGFycmF5IG9mIFZlYzMncwogICAgICogQHBhcmFtIGZhY2VzIEFycmF5IG9mIGludGVnZXIgYXJyYXlzLCBkZXNjcmliaW5nIHdoaWNoIHZlcnRpY2VzIHRoYXQgaXMgaW5jbHVkZWQgaW4gZWFjaCBmYWNlLgogICAgICovCiAgICBjb25zdHJ1Y3Rvcihwcm9wcykgewogICAgICBpZiAocHJvcHMgPT09IHZvaWQgMCkgewogICAgICAgIHByb3BzID0ge307CiAgICAgIH0KCiAgICAgIGNvbnN0IHsKICAgICAgICB2ZXJ0aWNlcyA9IFtdLAogICAgICAgIGZhY2VzID0gW10sCiAgICAgICAgbm9ybWFscyA9IFtdLAogICAgICAgIGF4ZXMsCiAgICAgICAgYm91bmRpbmdTcGhlcmVSYWRpdXMKICAgICAgfSA9IHByb3BzOwogICAgICBzdXBlcih7CiAgICAgICAgdHlwZTogU2hhcGUudHlwZXMuQ09OVkVYUE9MWUhFRFJPTgogICAgICB9KTsKICAgICAgdGhpcy52ZXJ0aWNlcyA9IHZlcnRpY2VzOwogICAgICB0aGlzLmZhY2VzID0gZmFjZXM7CiAgICAgIHRoaXMuZmFjZU5vcm1hbHMgPSBub3JtYWxzOwoKICAgICAgaWYgKHRoaXMuZmFjZU5vcm1hbHMubGVuZ3RoID09PSAwKSB7CiAgICAgICAgdGhpcy5jb21wdXRlTm9ybWFscygpOwogICAgICB9CgogICAgICBpZiAoIWJvdW5kaW5nU3BoZXJlUmFkaXVzKSB7CiAgICAgICAgdGhpcy51cGRhdGVCb3VuZGluZ1NwaGVyZVJhZGl1cygpOwogICAgICB9IGVsc2UgewogICAgICAgIHRoaXMuYm91bmRpbmdTcGhlcmVSYWRpdXMgPSBib3VuZGluZ1NwaGVyZVJhZGl1czsKICAgICAgfQoKICAgICAgdGhpcy53b3JsZFZlcnRpY2VzID0gW107IC8vIFdvcmxkIHRyYW5zZm9ybWVkIHZlcnNpb24gb2YgLnZlcnRpY2VzCgogICAgICB0aGlzLndvcmxkVmVydGljZXNOZWVkc1VwZGF0ZSA9IHRydWU7CiAgICAgIHRoaXMud29ybGRGYWNlTm9ybWFscyA9IFtdOyAvLyBXb3JsZCB0cmFuc2Zvcm1lZCB2ZXJzaW9uIG9mIC5mYWNlTm9ybWFscwoKICAgICAgdGhpcy53b3JsZEZhY2VOb3JtYWxzTmVlZHNVcGRhdGUgPSB0cnVlOwogICAgICB0aGlzLnVuaXF1ZUF4ZXMgPSBheGVzID8gYXhlcy5zbGljZSgpIDogbnVsbDsKICAgICAgdGhpcy51bmlxdWVFZGdlcyA9IFtdOwogICAgICB0aGlzLmNvbXB1dGVFZGdlcygpOwogICAgfQogICAgLyoqCiAgICAgKiBDb21wdXRlcyB1bmlxdWVFZGdlcwogICAgICovCgoKICAgIGNvbXB1dGVFZGdlcygpIHsKICAgICAgY29uc3QgZmFjZXMgPSB0aGlzLmZhY2VzOwogICAgICBjb25zdCB2ZXJ0aWNlcyA9IHRoaXMudmVydGljZXM7CiAgICAgIGNvbnN0IGVkZ2VzID0gdGhpcy51bmlxdWVFZGdlczsKICAgICAgZWRnZXMubGVuZ3RoID0gMDsKICAgICAgY29uc3QgZWRnZSA9IG5ldyBWZWMzKCk7CgogICAgICBmb3IgKGxldCBpID0gMDsgaSAhPT0gZmFjZXMubGVuZ3RoOyBpKyspIHsKICAgICAgICBjb25zdCBmYWNlID0gZmFjZXNbaV07CiAgICAgICAgY29uc3QgbnVtVmVydGljZXMgPSBmYWNlLmxlbmd0aDsKCiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogIT09IG51bVZlcnRpY2VzOyBqKyspIHsKICAgICAgICAgIGNvbnN0IGsgPSAoaiArIDEpICUgbnVtVmVydGljZXM7CiAgICAgICAgICB2ZXJ0aWNlc1tmYWNlW2pdXS52c3ViKHZlcnRpY2VzW2ZhY2Vba11dLCBlZGdlKTsKICAgICAgICAgIGVkZ2Uubm9ybWFsaXplKCk7CiAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTsKCiAgICAgICAgICBmb3IgKGxldCBwID0gMDsgcCAhPT0gZWRnZXMubGVuZ3RoOyBwKyspIHsKICAgICAgICAgICAgaWYgKGVkZ2VzW3BdLmFsbW9zdEVxdWFscyhlZGdlKSB8fCBlZGdlc1twXS5hbG1vc3RFcXVhbHMoZWRnZSkpIHsKICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7CiAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgIH0KICAgICAgICAgIH0KCiAgICAgICAgICBpZiAoIWZvdW5kKSB7CiAgICAgICAgICAgIGVkZ2VzLnB1c2goZWRnZS5jbG9uZSgpKTsKICAgICAgICAgIH0KICAgICAgICB9CiAgICAgIH0KICAgIH0KICAgIC8qKgogICAgICogQ29tcHV0ZSB0aGUgbm9ybWFscyBvZiB0aGUgZmFjZXMuCiAgICAgKiBXaWxsIHJldXNlIGV4aXN0aW5nIFZlYzMgb2JqZWN0cyBpbiB0aGUgYGZhY2VOb3JtYWxzYCBhcnJheSBpZiB0aGV5IGV4aXN0LgogICAgICovCgoKICAgIGNvbXB1dGVOb3JtYWxzKCkgewogICAgICB0aGlzLmZhY2VOb3JtYWxzLmxlbmd0aCA9IHRoaXMuZmFjZXMubGVuZ3RoOyAvLyBHZW5lcmF0ZSBub3JtYWxzCgogICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZmFjZXMubGVuZ3RoOyBpKyspIHsKICAgICAgICAvLyBDaGVjayBzbyBhbGwgdmVydGljZXMgZXhpc3RzIGZvciB0aGlzIGZhY2UKICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZmFjZXNbaV0ubGVuZ3RoOyBqKyspIHsKICAgICAgICAgIGlmICghdGhpcy52ZXJ0aWNlc1t0aGlzLmZhY2VzW2ldW2pdXSkgewogICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFZlcnRleCAke3RoaXMuZmFjZXNbaV1bal19IG5vdCBmb3VuZCFgKTsKICAgICAgICAgIH0KICAgICAgICB9CgogICAgICAgIGNvbnN0IG4gPSB0aGlzLmZhY2VOb3JtYWxzW2ldIHx8IG5ldyBWZWMzKCk7CiAgICAgICAgdGhpcy5nZXRGYWNlTm9ybWFsKGksIG4pOwogICAgICAgIG4ubmVnYXRlKG4pOwogICAgICAgIHRoaXMuZmFjZU5vcm1hbHNbaV0gPSBuOwogICAgICAgIGNvbnN0IHZlcnRleCA9IHRoaXMudmVydGljZXNbdGhpcy5mYWNlc1tpXVswXV07CgogICAgICAgIGlmIChuLmRvdCh2ZXJ0ZXgpIDwgMCkgewogICAgICAgICAgY29uc29sZS5lcnJvcihgLmZhY2VOb3JtYWxzWyR7aX1dID0gVmVjMygke24udG9TdHJpbmcoKX0pIGxvb2tzIGxpa2UgaXQgcG9pbnRzIGludG8gdGhlIHNoYXBlPyBUaGUgdmVydGljZXMgZm9sbG93LiBNYWtlIHN1cmUgdGhleSBhcmUgb3JkZXJlZCBDQ1cgYXJvdW5kIHRoZSBub3JtYWwsIHVzaW5nIHRoZSByaWdodCBoYW5kIHJ1bGUuYCk7CgogICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmZhY2VzW2ldLmxlbmd0aDsgaisrKSB7CiAgICAgICAgICAgIGNvbnNvbGUud2FybihgLnZlcnRpY2VzWyR7dGhpcy5mYWNlc1tpXVtqXX1dID0gVmVjMygke3RoaXMudmVydGljZXNbdGhpcy5mYWNlc1tpXVtqXV0udG9TdHJpbmcoKX0pYCk7CiAgICAgICAgICB9CiAgICAgICAgfQogICAgICB9CiAgICB9CiAgICAvKioKICAgICAqIENvbXB1dGUgdGhlIG5vcm1hbCBvZiBhIGZhY2UgZnJvbSBpdHMgdmVydGljZXMKICAgICAqLwoKCiAgICBnZXRGYWNlTm9ybWFsKGksIHRhcmdldCkgewogICAgICBjb25zdCBmID0gdGhpcy5mYWNlc1tpXTsKICAgICAgY29uc3QgdmEgPSB0aGlzLnZlcnRpY2VzW2ZbMF1dOwogICAgICBjb25zdCB2YiA9IHRoaXMudmVydGljZXNbZlsxXV07CiAgICAgIGNvbnN0IHZjID0gdGhpcy52ZXJ0aWNlc1tmWzJdXTsKICAgICAgQ29udmV4UG9seWhlZHJvbi5jb21wdXRlTm9ybWFsKHZhLCB2YiwgdmMsIHRhcmdldCk7CiAgICB9CiAgICAvKioKICAgICAqIEdldCBmYWNlIG5vcm1hbCBnaXZlbiAzIHZlcnRpY2VzCiAgICAgKi8KCgogICAgc3RhdGljIGNvbXB1dGVOb3JtYWwodmEsIHZiLCB2YywgdGFyZ2V0KSB7CiAgICAgIGNvbnN0IGNiID0gbmV3IFZlYzMoKTsKICAgICAgY29uc3QgYWIgPSBuZXcgVmVjMygpOwogICAgICB2Yi52c3ViKHZhLCBhYik7CiAgICAgIHZjLnZzdWIodmIsIGNiKTsKICAgICAgY2IuY3Jvc3MoYWIsIHRhcmdldCk7CgogICAgICBpZiAoIXRhcmdldC5pc1plcm8oKSkgewogICAgICAgIHRhcmdldC5ub3JtYWxpemUoKTsKICAgICAgfQogICAgfQogICAgLyoqCiAgICAgKiBAcGFyYW0gbWluRGlzdCBDbGFtcCBkaXN0YW5jZQogICAgICogQHBhcmFtIHJlc3VsdCBUaGUgYW4gYXJyYXkgb2YgY29udGFjdCBwb2ludCBvYmplY3RzLCBzZWUgY2xpcEZhY2VBZ2FpbnN0SHVsbAogICAgICovCgoKICAgIGNsaXBBZ2FpbnN0SHVsbChwb3NBLCBxdWF0QSwgaHVsbEIsIHBvc0IsIHF1YXRCLCBzZXBhcmF0aW5nTm9ybWFsLCBtaW5EaXN0LCBtYXhEaXN0LCByZXN1bHQpIHsKICAgICAgY29uc3QgV29ybGROb3JtYWwgPSBuZXcgVmVjMygpOwogICAgICBsZXQgY2xvc2VzdEZhY2VCID0gLTE7CiAgICAgIGxldCBkbWF4ID0gLU51bWJlci5NQVhfVkFMVUU7CgogICAgICBmb3IgKGxldCBmYWNlID0gMDsgZmFjZSA8IGh1bGxCLmZhY2VzLmxlbmd0aDsgZmFjZSsrKSB7CiAgICAgICAgV29ybGROb3JtYWwuY29weShodWxsQi5mYWNlTm9ybWFsc1tmYWNlXSk7CiAgICAgICAgcXVhdEIudm11bHQoV29ybGROb3JtYWwsIFdvcmxkTm9ybWFsKTsKICAgICAgICBjb25zdCBkID0gV29ybGROb3JtYWwuZG90KHNlcGFyYXRpbmdOb3JtYWwpOwoKICAgICAgICBpZiAoZCA+IGRtYXgpIHsKICAgICAgICAgIGRtYXggPSBkOwogICAgICAgICAgY2xvc2VzdEZhY2VCID0gZmFjZTsKICAgICAgICB9CiAgICAgIH0KCiAgICAgIGNvbnN0IHdvcmxkVmVydHNCMSA9IFtdOwoKICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBodWxsQi5mYWNlc1tjbG9zZXN0RmFjZUJdLmxlbmd0aDsgaSsrKSB7CiAgICAgICAgY29uc3QgYiA9IGh1bGxCLnZlcnRpY2VzW2h1bGxCLmZhY2VzW2Nsb3Nlc3RGYWNlQl1baV1dOwogICAgICAgIGNvbnN0IHdvcmxkYiA9IG5ldyBWZWMzKCk7CiAgICAgICAgd29ybGRiLmNvcHkoYik7CiAgICAgICAgcXVhdEIudm11bHQod29ybGRiLCB3b3JsZGIpOwogICAgICAgIHBvc0IudmFkZCh3b3JsZGIsIHdvcmxkYik7CiAgICAgICAgd29ybGRWZXJ0c0IxLnB1c2god29ybGRiKTsKICAgICAgfQoKICAgICAgaWYgKGNsb3Nlc3RGYWNlQiA+PSAwKSB7CiAgICAgICAgdGhpcy5jbGlwRmFjZUFnYWluc3RIdWxsKHNlcGFyYXRpbmdOb3JtYWwsIHBvc0EsIHF1YXRBLCB3b3JsZFZlcnRzQjEsIG1pbkRpc3QsIG1heERpc3QsIHJlc3VsdCk7CiAgICAgIH0KICAgIH0KICAgIC8qKgogICAgICogRmluZCB0aGUgc2VwYXJhdGluZyBheGlzIGJldHdlZW4gdGhpcyBodWxsIGFuZCBhbm90aGVyCiAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgdmVjdG9yIHRvIHNhdmUgdGhlIGF4aXMgaW4KICAgICAqIEByZXR1cm4gUmV0dXJucyBmYWxzZSBpZiBhIHNlcGFyYXRpb24gaXMgZm91bmQsIGVsc2UgdHJ1ZQogICAgICovCgoKICAgIGZpbmRTZXBhcmF0aW5nQXhpcyhodWxsQiwgcG9zQSwgcXVhdEEsIHBvc0IsIHF1YXRCLCB0YXJnZXQsIGZhY2VMaXN0QSwgZmFjZUxpc3RCKSB7CiAgICAgIGNvbnN0IGZhY2VBTm9ybWFsV1MzID0gbmV3IFZlYzMoKTsKICAgICAgY29uc3QgV29ybGRub3JtYWwxID0gbmV3IFZlYzMoKTsKICAgICAgY29uc3QgZGVsdGFDID0gbmV3IFZlYzMoKTsKICAgICAgY29uc3Qgd29ybGRFZGdlMCA9IG5ldyBWZWMzKCk7CiAgICAgIGNvbnN0IHdvcmxkRWRnZTEgPSBuZXcgVmVjMygpOwogICAgICBjb25zdCBDcm9zcyA9IG5ldyBWZWMzKCk7CiAgICAgIGxldCBkbWluID0gTnVtYmVyLk1BWF9WQUxVRTsKICAgICAgY29uc3QgaHVsbEEgPSB0aGlzOwoKICAgICAgaWYgKCFodWxsQS51bmlxdWVBeGVzKSB7CiAgICAgICAgY29uc3QgbnVtRmFjZXNBID0gZmFjZUxpc3RBID8gZmFjZUxpc3RBLmxlbmd0aCA6IGh1bGxBLmZhY2VzLmxlbmd0aDsgLy8gVGVzdCBmYWNlIG5vcm1hbHMgZnJvbSBodWxsQQoKICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUZhY2VzQTsgaSsrKSB7CiAgICAgICAgICBjb25zdCBmaSA9IGZhY2VMaXN0QSA/IGZhY2VMaXN0QVtpXSA6IGk7IC8vIEdldCB3b3JsZCBmYWNlIG5vcm1hbAoKICAgICAgICAgIGZhY2VBTm9ybWFsV1MzLmNvcHkoaHVsbEEuZmFjZU5vcm1hbHNbZmldKTsKICAgICAgICAgIHF1YXRBLnZtdWx0KGZhY2VBTm9ybWFsV1MzLCBmYWNlQU5vcm1hbFdTMyk7CiAgICAgICAgICBjb25zdCBkID0gaHVsbEEudGVzdFNlcEF4aXMoZmFjZUFOb3JtYWxXUzMsIGh1bGxCLCBwb3NBLCBxdWF0QSwgcG9zQiwgcXVhdEIpOwoKICAgICAgICAgIGlmIChkID09PSBmYWxzZSkgewogICAgICAgICAgICByZXR1cm4gZmFsc2U7CiAgICAgICAgICB9CgogICAgICAgICAgaWYgKGQgPCBkbWluKSB7CiAgICAgICAgICAgIGRtaW4gPSBkOwogICAgICAgICAgICB0YXJnZXQuY29weShmYWNlQU5vcm1hbFdTMyk7CiAgICAgICAgICB9CiAgICAgICAgfQogICAgICB9IGVsc2UgewogICAgICAgIC8vIFRlc3QgdW5pcXVlIGF4ZXMKICAgICAgICBmb3IgKGxldCBpID0gMDsgaSAhPT0gaHVsbEEudW5pcXVlQXhlcy5sZW5ndGg7IGkrKykgewogICAgICAgICAgLy8gR2V0IHdvcmxkIGF4aXMKICAgICAgICAgIHF1YXRBLnZtdWx0KGh1bGxBLnVuaXF1ZUF4ZXNbaV0sIGZhY2VBTm9ybWFsV1MzKTsKICAgICAgICAgIGNvbnN0IGQgPSBodWxsQS50ZXN0U2VwQXhpcyhmYWNlQU5vcm1hbFdTMywgaHVsbEIsIHBvc0EsIHF1YXRBLCBwb3NCLCBxdWF0Qik7CgogICAgICAgICAgaWYgKGQgPT09IGZhbHNlKSB7CiAgICAgICAgICAgIHJldHVybiBmYWxzZTsKICAgICAgICAgIH0KCiAgICAgICAgICBpZiAoZCA8IGRtaW4pIHsKICAgICAgICAgICAgZG1pbiA9IGQ7CiAgICAgICAgICAgIHRhcmdldC5jb3B5KGZhY2VBTm9ybWFsV1MzKTsKICAgICAgICAgIH0KICAgICAgICB9CiAgICAgIH0KCiAgICAgIGlmICghaHVsbEIudW5pcXVlQXhlcykgewogICAgICAgIC8vIFRlc3QgZmFjZSBub3JtYWxzIGZyb20gaHVsbEIKICAgICAgICBjb25zdCBudW1GYWNlc0IgPSBmYWNlTGlzdEIgPyBmYWNlTGlzdEIubGVuZ3RoIDogaHVsbEIuZmFjZXMubGVuZ3RoOwoKICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUZhY2VzQjsgaSsrKSB7CiAgICAgICAgICBjb25zdCBmaSA9IGZhY2VMaXN0QiA/IGZhY2VMaXN0QltpXSA6IGk7CiAgICAgICAgICBXb3JsZG5vcm1hbDEuY29weShodWxsQi5mYWNlTm9ybWFsc1tmaV0pOwogICAgICAgICAgcXVhdEIudm11bHQoV29ybGRub3JtYWwxLCBXb3JsZG5vcm1hbDEpOwogICAgICAgICAgY29uc3QgZCA9IGh1bGxBLnRlc3RTZXBBeGlzKFdvcmxkbm9ybWFsMSwgaHVsbEIsIHBvc0EsIHF1YXRBLCBwb3NCLCBxdWF0Qik7CgogICAgICAgICAgaWYgKGQgPT09IGZhbHNlKSB7CiAgICAgICAgICAgIHJldHVybiBmYWxzZTsKICAgICAgICAgIH0KCiAgICAgICAgICBpZiAoZCA8IGRtaW4pIHsKICAgICAgICAgICAgZG1pbiA9IGQ7CiAgICAgICAgICAgIHRhcmdldC5jb3B5KFdvcmxkbm9ybWFsMSk7CiAgICAgICAgICB9CiAgICAgICAgfQogICAgICB9IGVsc2UgewogICAgICAgIC8vIFRlc3QgdW5pcXVlIGF4ZXMgaW4gQgogICAgICAgIGZvciAobGV0IGkgPSAwOyBpICE9PSBodWxsQi51bmlxdWVBeGVzLmxlbmd0aDsgaSsrKSB7CiAgICAgICAgICBxdWF0Qi52bXVsdChodWxsQi51bmlxdWVBeGVzW2ldLCBXb3JsZG5vcm1hbDEpOwogICAgICAgICAgY29uc3QgZCA9IGh1bGxBLnRlc3RTZXBBeGlzKFdvcmxkbm9ybWFsMSwgaHVsbEIsIHBvc0EsIHF1YXRBLCBwb3NCLCBxdWF0Qik7CgogICAgICAgICAgaWYgKGQgPT09IGZhbHNlKSB7CiAgICAgICAgICAgIHJldHVybiBmYWxzZTsKICAgICAgICAgIH0KCiAgICAgICAgICBpZiAoZCA8IGRtaW4pIHsKICAgICAgICAgICAgZG1pbiA9IGQ7CiAgICAgICAgICAgIHRhcmdldC5jb3B5KFdvcmxkbm9ybWFsMSk7CiAgICAgICAgICB9CiAgICAgICAgfQogICAgICB9IC8vIFRlc3QgZWRnZXMKCgogICAgICBmb3IgKGxldCBlMCA9IDA7IGUwICE9PSBodWxsQS51bmlxdWVFZGdlcy5sZW5ndGg7IGUwKyspIHsKICAgICAgICAvLyBHZXQgd29ybGQgZWRnZQogICAgICAgIHF1YXRBLnZtdWx0KGh1bGxBLnVuaXF1ZUVkZ2VzW2UwXSwgd29ybGRFZGdlMCk7CgogICAgICAgIGZvciAobGV0IGUxID0gMDsgZTEgIT09IGh1bGxCLnVuaXF1ZUVkZ2VzLmxlbmd0aDsgZTErKykgewogICAgICAgICAgLy8gR2V0IHdvcmxkIGVkZ2UgMgogICAgICAgICAgcXVhdEIudm11bHQoaHVsbEIudW5pcXVlRWRnZXNbZTFdLCB3b3JsZEVkZ2UxKTsKICAgICAgICAgIHdvcmxkRWRnZTAuY3Jvc3Mod29ybGRFZGdlMSwgQ3Jvc3MpOwoKICAgICAgICAgIGlmICghQ3Jvc3MuYWxtb3N0WmVybygpKSB7CiAgICAgICAgICAgIENyb3NzLm5vcm1hbGl6ZSgpOwogICAgICAgICAgICBjb25zdCBkaXN0ID0gaHVsbEEudGVzdFNlcEF4aXMoQ3Jvc3MsIGh1bGxCLCBwb3NBLCBxdWF0QSwgcG9zQiwgcXVhdEIpOwoKICAgICAgICAgICAgaWYgKGRpc3QgPT09IGZhbHNlKSB7CiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgICAgICAgICB9CgogICAgICAgICAgICBpZiAoZGlzdCA8IGRtaW4pIHsKICAgICAgICAgICAgICBkbWluID0gZGlzdDsKICAgICAgICAgICAgICB0YXJnZXQuY29weShDcm9zcyk7CiAgICAgICAgICAgIH0KICAgICAgICAgIH0KICAgICAgICB9CiAgICAgIH0KCiAgICAgIHBvc0IudnN1Yihwb3NBLCBkZWx0YUMpOwoKICAgICAgaWYgKGRlbHRhQy5kb3QodGFyZ2V0KSA+IDAuMCkgewogICAgICAgIHRhcmdldC5uZWdhdGUodGFyZ2V0KTsKICAgICAgfQoKICAgICAgcmV0dXJuIHRydWU7CiAgICB9CiAgICAvKioKICAgICAqIFRlc3Qgc2VwYXJhdGluZyBheGlzIGFnYWluc3QgdHdvIGh1bGxzLiBCb3RoIGh1bGxzIGFyZSBwcm9qZWN0ZWQgb250byB0aGUgYXhpcyBhbmQgdGhlIG92ZXJsYXAgc2l6ZSBpcyByZXR1cm5lZCBpZiB0aGVyZSBpcyBvbmUuCiAgICAgKiBAcmV0dXJuIFRoZSBvdmVybGFwIGRlcHRoLCBvciBGQUxTRSBpZiBubyBwZW5ldHJhdGlvbi4KICAgICAqLwoKCiAgICB0ZXN0U2VwQXhpcyhheGlzLCBodWxsQiwgcG9zQSwgcXVhdEEsIHBvc0IsIHF1YXRCKSB7CiAgICAgIGNvbnN0IGh1bGxBID0gdGhpczsKICAgICAgQ29udmV4UG9seWhlZHJvbi5wcm9qZWN0KGh1bGxBLCBheGlzLCBwb3NBLCBxdWF0QSwgbWF4bWluQSk7CiAgICAgIENvbnZleFBvbHloZWRyb24ucHJvamVjdChodWxsQiwgYXhpcywgcG9zQiwgcXVhdEIsIG1heG1pbkIpOwogICAgICBjb25zdCBtYXhBID0gbWF4bWluQVswXTsKICAgICAgY29uc3QgbWluQSA9IG1heG1pbkFbMV07CiAgICAgIGNvbnN0IG1heEIgPSBtYXhtaW5CWzBdOwogICAgICBjb25zdCBtaW5CID0gbWF4bWluQlsxXTsKCiAgICAgIGlmIChtYXhBIDwgbWluQiB8fCBtYXhCIDwgbWluQSkgewogICAgICAgIHJldHVybiBmYWxzZTsgLy8gU2VwYXJhdGVkCiAgICAgIH0KCiAgICAgIGNvbnN0IGQwID0gbWF4QSAtIG1pbkI7CiAgICAgIGNvbnN0IGQxID0gbWF4QiAtIG1pbkE7CiAgICAgIGNvbnN0IGRlcHRoID0gZDAgPCBkMSA/IGQwIDogZDE7CiAgICAgIHJldHVybiBkZXB0aDsKICAgIH0KICAgIC8qKgogICAgICogY2FsY3VsYXRlTG9jYWxJbmVydGlhCiAgICAgKi8KCgogICAgY2FsY3VsYXRlTG9jYWxJbmVydGlhKG1hc3MsIHRhcmdldCkgewogICAgICAvLyBBcHByb3hpbWF0ZSB3aXRoIGJveCBpbmVydGlhCiAgICAgIC8vIEV4YWN0IGluZXJ0aWEgY2FsY3VsYXRpb24gaXMgb3ZlcmtpbGwsIGJ1dCBzZWUgaHR0cDovL2dlb21ldHJpY3Rvb2xzLmNvbS9Eb2N1bWVudGF0aW9uL1BvbHloZWRyYWxNYXNzUHJvcGVydGllcy5wZGYgZm9yIHRoZSBjb3JyZWN0IHdheSB0byBkbyBpdAogICAgICBjb25zdCBhYWJibWF4ID0gbmV3IFZlYzMoKTsKICAgICAgY29uc3QgYWFiYm1pbiA9IG5ldyBWZWMzKCk7CiAgICAgIHRoaXMuY29tcHV0ZUxvY2FsQUFCQihhYWJibWluLCBhYWJibWF4KTsKICAgICAgY29uc3QgeCA9IGFhYmJtYXgueCAtIGFhYmJtaW4ueDsKICAgICAgY29uc3QgeSA9IGFhYmJtYXgueSAtIGFhYmJtaW4ueTsKICAgICAgY29uc3QgeiA9IGFhYmJtYXgueiAtIGFhYmJtaW4uejsKICAgICAgdGFyZ2V0LnggPSAxLjAgLyAxMi4wICogbWFzcyAqICgyICogeSAqIDIgKiB5ICsgMiAqIHogKiAyICogeik7CiAgICAgIHRhcmdldC55ID0gMS4wIC8gMTIuMCAqIG1hc3MgKiAoMiAqIHggKiAyICogeCArIDIgKiB6ICogMiAqIHopOwogICAgICB0YXJnZXQueiA9IDEuMCAvIDEyLjAgKiBtYXNzICogKDIgKiB5ICogMiAqIHkgKyAyICogeCAqIDIgKiB4KTsKICAgIH0KICAgIC8qKgogICAgICogQHBhcmFtIGZhY2VfaSBJbmRleCBvZiB0aGUgZmFjZQogICAgICovCgoKICAgIGdldFBsYW5lQ29uc3RhbnRPZkZhY2UoZmFjZV9pKSB7CiAgICAgIGNvbnN0IGYgPSB0aGlzLmZhY2VzW2ZhY2VfaV07CiAgICAgIGNvbnN0IG4gPSB0aGlzLmZhY2VOb3JtYWxzW2ZhY2VfaV07CiAgICAgIGNvbnN0IHYgPSB0aGlzLnZlcnRpY2VzW2ZbMF1dOwogICAgICBjb25zdCBjID0gLW4uZG90KHYpOwogICAgICByZXR1cm4gYzsKICAgIH0KICAgIC8qKgogICAgICogQ2xpcCBhIGZhY2UgYWdhaW5zdCBhIGh1bGwuCiAgICAgKiBAcGFyYW0gd29ybGRWZXJ0c0IxIEFuIGFycmF5IG9mIFZlYzMgd2l0aCB2ZXJ0aWNlcyBpbiB0aGUgd29ybGQgZnJhbWUuCiAgICAgKiBAcGFyYW0gbWluRGlzdCBEaXN0YW5jZSBjbGFtcGluZwogICAgICogQHBhcmFtIEFycmF5IHJlc3VsdCBBcnJheSB0byBzdG9yZSByZXN1bHRpbmcgY29udGFjdCBwb2ludHMgaW4uIFdpbGwgYmUgb2JqZWN0cyB3aXRoIHByb3BlcnRpZXM6IHBvaW50LCBkZXB0aCwgbm9ybWFsLiBUaGVzZSBhcmUgcmVwcmVzZW50ZWQgaW4gd29ybGQgY29vcmRpbmF0ZXMuCiAgICAgKi8KCgogICAgY2xpcEZhY2VBZ2FpbnN0SHVsbChzZXBhcmF0aW5nTm9ybWFsLCBwb3NBLCBxdWF0QSwgd29ybGRWZXJ0c0IxLCBtaW5EaXN0LCBtYXhEaXN0LCByZXN1bHQpIHsKICAgICAgY29uc3QgZmFjZUFOb3JtYWxXUyA9IG5ldyBWZWMzKCk7CiAgICAgIGNvbnN0IGVkZ2UwID0gbmV3IFZlYzMoKTsKICAgICAgY29uc3QgV29ybGRFZGdlMCA9IG5ldyBWZWMzKCk7CiAgICAgIGNvbnN0IHdvcmxkUGxhbmVBbm9ybWFsMSA9IG5ldyBWZWMzKCk7CiAgICAgIGNvbnN0IHBsYW5lTm9ybWFsV1MxID0gbmV3IFZlYzMoKTsKICAgICAgY29uc3Qgd29ybGRBMSA9IG5ldyBWZWMzKCk7CiAgICAgIGNvbnN0IGxvY2FsUGxhbmVOb3JtYWwgPSBuZXcgVmVjMygpOwogICAgICBjb25zdCBwbGFuZU5vcm1hbFdTID0gbmV3IFZlYzMoKTsKICAgICAgY29uc3QgaHVsbEEgPSB0aGlzOwogICAgICBjb25zdCB3b3JsZFZlcnRzQjIgPSBbXTsKICAgICAgY29uc3QgcFZ0eEluID0gd29ybGRWZXJ0c0IxOwogICAgICBjb25zdCBwVnR4T3V0ID0gd29ybGRWZXJ0c0IyOwogICAgICBsZXQgY2xvc2VzdEZhY2VBID0gLTE7CiAgICAgIGxldCBkbWluID0gTnVtYmVyLk1BWF9WQUxVRTsgLy8gRmluZCB0aGUgZmFjZSB3aXRoIG5vcm1hbCBjbG9zZXN0IHRvIHRoZSBzZXBhcmF0aW5nIGF4aXMKCiAgICAgIGZvciAobGV0IGZhY2UgPSAwOyBmYWNlIDwgaHVsbEEuZmFjZXMubGVuZ3RoOyBmYWNlKyspIHsKICAgICAgICBmYWNlQU5vcm1hbFdTLmNvcHkoaHVsbEEuZmFjZU5vcm1hbHNbZmFjZV0pOwogICAgICAgIHF1YXRBLnZtdWx0KGZhY2VBTm9ybWFsV1MsIGZhY2VBTm9ybWFsV1MpOwogICAgICAgIGNvbnN0IGQgPSBmYWNlQU5vcm1hbFdTLmRvdChzZXBhcmF0aW5nTm9ybWFsKTsKCiAgICAgICAgaWYgKGQgPCBkbWluKSB7CiAgICAgICAgICBkbWluID0gZDsKICAgICAgICAgIGNsb3Nlc3RGYWNlQSA9IGZhY2U7CiAgICAgICAgfQogICAgICB9CgogICAgICBpZiAoY2xvc2VzdEZhY2VBIDwgMCkgewogICAgICAgIHJldHVybjsKICAgICAgfSAvLyBHZXQgdGhlIGZhY2UgYW5kIGNvbnN0cnVjdCBjb25uZWN0ZWQgZmFjZXMKCgogICAgICBjb25zdCBwb2x5QSA9IGh1bGxBLmZhY2VzW2Nsb3Nlc3RGYWNlQV07CiAgICAgIHBvbHlBLmNvbm5lY3RlZEZhY2VzID0gW107CgogICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGh1bGxBLmZhY2VzLmxlbmd0aDsgaSsrKSB7CiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBodWxsQS5mYWNlc1tpXS5sZW5ndGg7IGorKykgewogICAgICAgICAgaWYgKAogICAgICAgICAgLyogU2hhcmluZyBhIHZlcnRleCovCiAgICAgICAgICBwb2x5QS5pbmRleE9mKGh1bGxBLmZhY2VzW2ldW2pdKSAhPT0gLTEgJiYKICAgICAgICAgIC8qIE5vdCB0aGUgb25lIHdlIGFyZSBsb29raW5nIGZvciBjb25uZWN0aW9ucyBmcm9tICovCiAgICAgICAgICBpICE9PSBjbG9zZXN0RmFjZUEgJiYKICAgICAgICAgIC8qIE5vdCBhbHJlYWR5IGFkZGVkICovCiAgICAgICAgICBwb2x5QS5jb25uZWN0ZWRGYWNlcy5pbmRleE9mKGkpID09PSAtMSkgewogICAgICAgICAgICBwb2x5QS5jb25uZWN0ZWRGYWNlcy5wdXNoKGkpOwogICAgICAgICAgfQogICAgICAgIH0KICAgICAgfSAvLyBDbGlwIHRoZSBwb2x5Z29uIHRvIHRoZSBiYWNrIG9mIHRoZSBwbGFuZXMgb2YgYWxsIGZhY2VzIG9mIGh1bGwgQSwKICAgICAgLy8gdGhhdCBhcmUgYWRqYWNlbnQgdG8gdGhlIHdpdG5lc3MgZmFjZQoKCiAgICAgIGNvbnN0IG51bVZlcnRpY2VzQSA9IHBvbHlBLmxlbmd0aDsKCiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtVmVydGljZXNBOyBpKyspIHsKICAgICAgICBjb25zdCBhID0gaHVsbEEudmVydGljZXNbcG9seUFbaV1dOwogICAgICAgIGNvbnN0IGIgPSBodWxsQS52ZXJ0aWNlc1twb2x5QVsoaSArIDEpICUgbnVtVmVydGljZXNBXV07CiAgICAgICAgYS52c3ViKGIsIGVkZ2UwKTsKICAgICAgICBXb3JsZEVkZ2UwLmNvcHkoZWRnZTApOwogICAgICAgIHF1YXRBLnZtdWx0KFdvcmxkRWRnZTAsIFdvcmxkRWRnZTApOwogICAgICAgIHBvc0EudmFkZChXb3JsZEVkZ2UwLCBXb3JsZEVkZ2UwKTsKICAgICAgICB3b3JsZFBsYW5lQW5vcm1hbDEuY29weSh0aGlzLmZhY2VOb3JtYWxzW2Nsb3Nlc3RGYWNlQV0pOwogICAgICAgIHF1YXRBLnZtdWx0KHdvcmxkUGxhbmVBbm9ybWFsMSwgd29ybGRQbGFuZUFub3JtYWwxKTsKICAgICAgICBwb3NBLnZhZGQod29ybGRQbGFuZUFub3JtYWwxLCB3b3JsZFBsYW5lQW5vcm1hbDEpOwogICAgICAgIFdvcmxkRWRnZTAuY3Jvc3Mod29ybGRQbGFuZUFub3JtYWwxLCBwbGFuZU5vcm1hbFdTMSk7CiAgICAgICAgcGxhbmVOb3JtYWxXUzEubmVnYXRlKHBsYW5lTm9ybWFsV1MxKTsKICAgICAgICB3b3JsZEExLmNvcHkoYSk7CiAgICAgICAgcXVhdEEudm11bHQod29ybGRBMSwgd29ybGRBMSk7CiAgICAgICAgcG9zQS52YWRkKHdvcmxkQTEsIHdvcmxkQTEpOwogICAgICAgIGNvbnN0IG90aGVyRmFjZSA9IHBvbHlBLmNvbm5lY3RlZEZhY2VzW2ldOwogICAgICAgIGxvY2FsUGxhbmVOb3JtYWwuY29weSh0aGlzLmZhY2VOb3JtYWxzW290aGVyRmFjZV0pOwogICAgICAgIGNvbnN0IGxvY2FsUGxhbmVFcSA9IHRoaXMuZ2V0UGxhbmVDb25zdGFudE9mRmFjZShvdGhlckZhY2UpOwogICAgICAgIHBsYW5lTm9ybWFsV1MuY29weShsb2NhbFBsYW5lTm9ybWFsKTsKICAgICAgICBxdWF0QS52bXVsdChwbGFuZU5vcm1hbFdTLCBwbGFuZU5vcm1hbFdTKTsKICAgICAgICBjb25zdCBwbGFuZUVxV1MgPSBsb2NhbFBsYW5lRXEgLSBwbGFuZU5vcm1hbFdTLmRvdChwb3NBKTsgLy8gQ2xpcCBmYWNlIGFnYWluc3Qgb3VyIGNvbnN0cnVjdGVkIHBsYW5lCgogICAgICAgIHRoaXMuY2xpcEZhY2VBZ2FpbnN0UGxhbmUocFZ0eEluLCBwVnR4T3V0LCBwbGFuZU5vcm1hbFdTLCBwbGFuZUVxV1MpOyAvLyBUaHJvdyBhd2F5IGFsbCBjbGlwcGVkIHBvaW50cywgYnV0IHNhdmUgdGhlIHJlbWFpbmluZyB1bnRpbCBuZXh0IGNsaXAKCiAgICAgICAgd2hpbGUgKHBWdHhJbi5sZW5ndGgpIHsKICAgICAgICAgIHBWdHhJbi5zaGlmdCgpOwogICAgICAgIH0KCiAgICAgICAgd2hpbGUgKHBWdHhPdXQubGVuZ3RoKSB7CiAgICAgICAgICBwVnR4SW4ucHVzaChwVnR4T3V0LnNoaWZ0KCkpOwogICAgICAgIH0KICAgICAgfSAvLyBvbmx5IGtlZXAgY29udGFjdCBwb2ludHMgdGhhdCBhcmUgYmVoaW5kIHRoZSB3aXRuZXNzIGZhY2UKCgogICAgICBsb2NhbFBsYW5lTm9ybWFsLmNvcHkodGhpcy5mYWNlTm9ybWFsc1tjbG9zZXN0RmFjZUFdKTsKICAgICAgY29uc3QgbG9jYWxQbGFuZUVxID0gdGhpcy5nZXRQbGFuZUNvbnN0YW50T2ZGYWNlKGNsb3Nlc3RGYWNlQSk7CiAgICAgIHBsYW5lTm9ybWFsV1MuY29weShsb2NhbFBsYW5lTm9ybWFsKTsKICAgICAgcXVhdEEudm11bHQocGxhbmVOb3JtYWxXUywgcGxhbmVOb3JtYWxXUyk7CiAgICAgIGNvbnN0IHBsYW5lRXFXUyA9IGxvY2FsUGxhbmVFcSAtIHBsYW5lTm9ybWFsV1MuZG90KHBvc0EpOwoKICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwVnR4SW4ubGVuZ3RoOyBpKyspIHsKICAgICAgICBsZXQgZGVwdGggPSBwbGFuZU5vcm1hbFdTLmRvdChwVnR4SW5baV0pICsgcGxhbmVFcVdTOyAvLyA/Pz8KCiAgICAgICAgaWYgKGRlcHRoIDw9IG1pbkRpc3QpIHsKICAgICAgICAgIGNvbnNvbGUubG9nKGBjbGFtcGVkOiBkZXB0aD0ke2RlcHRofSB0byBtaW5EaXN0PSR7bWluRGlzdH1gKTsKICAgICAgICAgIGRlcHRoID0gbWluRGlzdDsKICAgICAgICB9CgogICAgICAgIGlmIChkZXB0aCA8PSBtYXhEaXN0KSB7CiAgICAgICAgICBjb25zdCBwb2ludCA9IHBWdHhJbltpXTsKCiAgICAgICAgICBpZiAoZGVwdGggPD0gMWUtNikgewogICAgICAgICAgICBjb25zdCBwID0gewogICAgICAgICAgICAgIHBvaW50LAogICAgICAgICAgICAgIG5vcm1hbDogcGxhbmVOb3JtYWxXUywKICAgICAgICAgICAgICBkZXB0aAogICAgICAgICAgICB9OwogICAgICAgICAgICByZXN1bHQucHVzaChwKTsKICAgICAgICAgIH0KICAgICAgICB9CiAgICAgIH0KICAgIH0KICAgIC8qKgogICAgICogQ2xpcCBhIGZhY2UgaW4gYSBodWxsIGFnYWluc3QgdGhlIGJhY2sgb2YgYSBwbGFuZS4KICAgICAqIEBwYXJhbSBwbGFuZUNvbnN0YW50IFRoZSBjb25zdGFudCBpbiB0aGUgbWF0aGVtYXRpY2FsIHBsYW5lIGVxdWF0aW9uCiAgICAgKi8KCgogICAgY2xpcEZhY2VBZ2FpbnN0UGxhbmUoaW5WZXJ0aWNlcywgb3V0VmVydGljZXMsIHBsYW5lTm9ybWFsLCBwbGFuZUNvbnN0YW50KSB7CiAgICAgIGxldCBuX2RvdF9maXJzdDsKICAgICAgbGV0IG5fZG90X2xhc3Q7CiAgICAgIGNvbnN0IG51bVZlcnRzID0gaW5WZXJ0aWNlcy5sZW5ndGg7CgogICAgICBpZiAobnVtVmVydHMgPCAyKSB7CiAgICAgICAgcmV0dXJuIG91dFZlcnRpY2VzOwogICAgICB9CgogICAgICBsZXQgZmlyc3RWZXJ0ZXggPSBpblZlcnRpY2VzW2luVmVydGljZXMubGVuZ3RoIC0gMV07CiAgICAgIGxldCBsYXN0VmVydGV4ID0gaW5WZXJ0aWNlc1swXTsKICAgICAgbl9kb3RfZmlyc3QgPSBwbGFuZU5vcm1hbC5kb3QoZmlyc3RWZXJ0ZXgpICsgcGxhbmVDb25zdGFudDsKCiAgICAgIGZvciAobGV0IHZpID0gMDsgdmkgPCBudW1WZXJ0czsgdmkrKykgewogICAgICAgIGxhc3RWZXJ0ZXggPSBpblZlcnRpY2VzW3ZpXTsKICAgICAgICBuX2RvdF9sYXN0ID0gcGxhbmVOb3JtYWwuZG90KGxhc3RWZXJ0ZXgpICsgcGxhbmVDb25zdGFudDsKCiAgICAgICAgaWYgKG5fZG90X2ZpcnN0IDwgMCkgewogICAgICAgICAgaWYgKG5fZG90X2xhc3QgPCAwKSB7CiAgICAgICAgICAgIC8vIFN0YXJ0IDwgMCwgZW5kIDwgMCwgc28gb3V0cHV0IGxhc3RWZXJ0ZXgKICAgICAgICAgICAgY29uc3QgbmV3diA9IG5ldyBWZWMzKCk7CiAgICAgICAgICAgIG5ld3YuY29weShsYXN0VmVydGV4KTsKICAgICAgICAgICAgb3V0VmVydGljZXMucHVzaChuZXd2KTsKICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIC8vIFN0YXJ0IDwgMCwgZW5kID49IDAsIHNvIG91dHB1dCBpbnRlcnNlY3Rpb24KICAgICAgICAgICAgY29uc3QgbmV3diA9IG5ldyBWZWMzKCk7CiAgICAgICAgICAgIGZpcnN0VmVydGV4LmxlcnAobGFzdFZlcnRleCwgbl9kb3RfZmlyc3QgLyAobl9kb3RfZmlyc3QgLSBuX2RvdF9sYXN0KSwgbmV3dik7CiAgICAgICAgICAgIG91dFZlcnRpY2VzLnB1c2gobmV3dik7CiAgICAgICAgICB9CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgIGlmIChuX2RvdF9sYXN0IDwgMCkgewogICAgICAgICAgICAvLyBTdGFydCA+PSAwLCBlbmQgPCAwIHNvIG91dHB1dCBpbnRlcnNlY3Rpb24gYW5kIGVuZAogICAgICAgICAgICBjb25zdCBuZXd2ID0gbmV3IFZlYzMoKTsKICAgICAgICAgICAgZmlyc3RWZXJ0ZXgubGVycChsYXN0VmVydGV4LCBuX2RvdF9maXJzdCAvIChuX2RvdF9maXJzdCAtIG5fZG90X2xhc3QpLCBuZXd2KTsKICAgICAgICAgICAgb3V0VmVydGljZXMucHVzaChuZXd2KTsKICAgICAgICAgICAgb3V0VmVydGljZXMucHVzaChsYXN0VmVydGV4KTsKICAgICAgICAgIH0KICAgICAgICB9CgogICAgICAgIGZpcnN0VmVydGV4ID0gbGFzdFZlcnRleDsKICAgICAgICBuX2RvdF9maXJzdCA9IG5fZG90X2xhc3Q7CiAgICAgIH0KCiAgICAgIHJldHVybiBvdXRWZXJ0aWNlczsKICAgIH0KICAgIC8qKgogICAgICogVXBkYXRlcyBgLndvcmxkVmVydGljZXNgIGFuZCBzZXRzIGAud29ybGRWZXJ0aWNlc05lZWRzVXBkYXRlYCB0byBmYWxzZS4KICAgICAqLwoKCiAgICBjb21wdXRlV29ybGRWZXJ0aWNlcyhwb3NpdGlvbiwgcXVhdCkgewogICAgICB3aGlsZSAodGhpcy53b3JsZFZlcnRpY2VzLmxlbmd0aCA8IHRoaXMudmVydGljZXMubGVuZ3RoKSB7CiAgICAgICAgdGhpcy53b3JsZFZlcnRpY2VzLnB1c2gobmV3IFZlYzMoKSk7CiAgICAgIH0KCiAgICAgIGNvbnN0IHZlcnRzID0gdGhpcy52ZXJ0aWNlczsKICAgICAgY29uc3Qgd29ybGRWZXJ0cyA9IHRoaXMud29ybGRWZXJ0aWNlczsKCiAgICAgIGZvciAobGV0IGkgPSAwOyBpICE9PSB0aGlzLnZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7CiAgICAgICAgcXVhdC52bXVsdCh2ZXJ0c1tpXSwgd29ybGRWZXJ0c1tpXSk7CiAgICAgICAgcG9zaXRpb24udmFkZCh3b3JsZFZlcnRzW2ldLCB3b3JsZFZlcnRzW2ldKTsKICAgICAgfQoKICAgICAgdGhpcy53b3JsZFZlcnRpY2VzTmVlZHNVcGRhdGUgPSBmYWxzZTsKICAgIH0KCiAgICBjb21wdXRlTG9jYWxBQUJCKGFhYmJtaW4sIGFhYmJtYXgpIHsKICAgICAgY29uc3QgdmVydGljZXMgPSB0aGlzLnZlcnRpY2VzOwogICAgICBhYWJibWluLnNldChOdW1iZXIuTUFYX1ZBTFVFLCBOdW1iZXIuTUFYX1ZBTFVFLCBOdW1iZXIuTUFYX1ZBTFVFKTsKICAgICAgYWFiYm1heC5zZXQoLU51bWJlci5NQVhfVkFMVUUsIC1OdW1iZXIuTUFYX1ZBTFVFLCAtTnVtYmVyLk1BWF9WQUxVRSk7CgogICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmVydGljZXMubGVuZ3RoOyBpKyspIHsKICAgICAgICBjb25zdCB2ID0gdmVydGljZXNbaV07CgogICAgICAgIGlmICh2LnggPCBhYWJibWluLngpIHsKICAgICAgICAgIGFhYmJtaW4ueCA9IHYueDsKICAgICAgICB9IGVsc2UgaWYgKHYueCA+IGFhYmJtYXgueCkgewogICAgICAgICAgYWFiYm1heC54ID0gdi54OwogICAgICAgIH0KCiAgICAgICAgaWYgKHYueSA8IGFhYmJtaW4ueSkgewogICAgICAgICAgYWFiYm1pbi55ID0gdi55OwogICAgICAgIH0gZWxzZSBpZiAodi55ID4gYWFiYm1heC55KSB7CiAgICAgICAgICBhYWJibWF4LnkgPSB2Lnk7CiAgICAgICAgfQoKICAgICAgICBpZiAodi56IDwgYWFiYm1pbi56KSB7CiAgICAgICAgICBhYWJibWluLnogPSB2Lno7CiAgICAgICAgfSBlbHNlIGlmICh2LnogPiBhYWJibWF4LnopIHsKICAgICAgICAgIGFhYmJtYXgueiA9IHYuejsKICAgICAgICB9CiAgICAgIH0KICAgIH0KICAgIC8qKgogICAgICogVXBkYXRlcyBgd29ybGRWZXJ0aWNlc2AgYW5kIHNldHMgYHdvcmxkVmVydGljZXNOZWVkc1VwZGF0ZWAgdG8gZmFsc2UuCiAgICAgKi8KCgogICAgY29tcHV0ZVdvcmxkRmFjZU5vcm1hbHMocXVhdCkgewogICAgICBjb25zdCBOID0gdGhpcy5mYWNlTm9ybWFscy5sZW5ndGg7CgogICAgICB3aGlsZSAodGhpcy53b3JsZEZhY2VOb3JtYWxzLmxlbmd0aCA8IE4pIHsKICAgICAgICB0aGlzLndvcmxkRmFjZU5vcm1hbHMucHVzaChuZXcgVmVjMygpKTsKICAgICAgfQoKICAgICAgY29uc3Qgbm9ybWFscyA9IHRoaXMuZmFjZU5vcm1hbHM7CiAgICAgIGNvbnN0IHdvcmxkTm9ybWFscyA9IHRoaXMud29ybGRGYWNlTm9ybWFsczsKCiAgICAgIGZvciAobGV0IGkgPSAwOyBpICE9PSBOOyBpKyspIHsKICAgICAgICBxdWF0LnZtdWx0KG5vcm1hbHNbaV0sIHdvcmxkTm9ybWFsc1tpXSk7CiAgICAgIH0KCiAgICAgIHRoaXMud29ybGRGYWNlTm9ybWFsc05lZWRzVXBkYXRlID0gZmFsc2U7CiAgICB9CiAgICAvKioKICAgICAqIHVwZGF0ZUJvdW5kaW5nU3BoZXJlUmFkaXVzCiAgICAgKi8KCgogICAgdXBkYXRlQm91bmRpbmdTcGhlcmVSYWRpdXMoKSB7CiAgICAgIC8vIEFzc3VtZSBwb2ludHMgYXJlIGRpc3RyaWJ1dGVkIHdpdGggbG9jYWwgKDAsMCwwKSBhcyBjZW50ZXIKICAgICAgbGV0IG1heDIgPSAwOwogICAgICBjb25zdCB2ZXJ0cyA9IHRoaXMudmVydGljZXM7CgogICAgICBmb3IgKGxldCBpID0gMDsgaSAhPT0gdmVydHMubGVuZ3RoOyBpKyspIHsKICAgICAgICBjb25zdCBub3JtMiA9IHZlcnRzW2ldLmxlbmd0aFNxdWFyZWQoKTsKCiAgICAgICAgaWYgKG5vcm0yID4gbWF4MikgewogICAgICAgICAgbWF4MiA9IG5vcm0yOwogICAgICAgIH0KICAgICAgfQoKICAgICAgdGhpcy5ib3VuZGluZ1NwaGVyZVJhZGl1cyA9IE1hdGguc3FydChtYXgyKTsKICAgIH0KICAgIC8qKgogICAgICogY2FsY3VsYXRlV29ybGRBQUJCCiAgICAgKi8KCgogICAgY2FsY3VsYXRlV29ybGRBQUJCKHBvcywgcXVhdCwgbWluLCBtYXgpIHsKICAgICAgY29uc3QgdmVydHMgPSB0aGlzLnZlcnRpY2VzOwogICAgICBsZXQgbWlueDsKICAgICAgbGV0IG1pbnk7CiAgICAgIGxldCBtaW56OwogICAgICBsZXQgbWF4eDsKICAgICAgbGV0IG1heHk7CiAgICAgIGxldCBtYXh6OwogICAgICBsZXQgdGVtcFdvcmxkVmVydGV4ID0gbmV3IFZlYzMoKTsKCiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmVydHMubGVuZ3RoOyBpKyspIHsKICAgICAgICB0ZW1wV29ybGRWZXJ0ZXguY29weSh2ZXJ0c1tpXSk7CiAgICAgICAgcXVhdC52bXVsdCh0ZW1wV29ybGRWZXJ0ZXgsIHRlbXBXb3JsZFZlcnRleCk7CiAgICAgICAgcG9zLnZhZGQodGVtcFdvcmxkVmVydGV4LCB0ZW1wV29ybGRWZXJ0ZXgpOwogICAgICAgIGNvbnN0IHYgPSB0ZW1wV29ybGRWZXJ0ZXg7CgogICAgICAgIGlmIChtaW54ID09PSB1bmRlZmluZWQgfHwgdi54IDwgbWlueCkgewogICAgICAgICAgbWlueCA9IHYueDsKICAgICAgICB9CgogICAgICAgIGlmIChtYXh4ID09PSB1bmRlZmluZWQgfHwgdi54ID4gbWF4eCkgewogICAgICAgICAgbWF4eCA9IHYueDsKICAgICAgICB9CgogICAgICAgIGlmIChtaW55ID09PSB1bmRlZmluZWQgfHwgdi55IDwgbWlueSkgewogICAgICAgICAgbWlueSA9IHYueTsKICAgICAgICB9CgogICAgICAgIGlmIChtYXh5ID09PSB1bmRlZmluZWQgfHwgdi55ID4gbWF4eSkgewogICAgICAgICAgbWF4eSA9IHYueTsKICAgICAgICB9CgogICAgICAgIGlmIChtaW56ID09PSB1bmRlZmluZWQgfHwgdi56IDwgbWlueikgewogICAgICAgICAgbWlueiA9IHYuejsKICAgICAgICB9CgogICAgICAgIGlmIChtYXh6ID09PSB1bmRlZmluZWQgfHwgdi56ID4gbWF4eikgewogICAgICAgICAgbWF4eiA9IHYuejsKICAgICAgICB9CiAgICAgIH0KCiAgICAgIG1pbi5zZXQobWlueCwgbWlueSwgbWlueik7CiAgICAgIG1heC5zZXQobWF4eCwgbWF4eSwgbWF4eik7CiAgICB9CiAgICAvKioKICAgICAqIEdldCBhcHByb3hpbWF0ZSBjb252ZXggdm9sdW1lCiAgICAgKi8KCgogICAgdm9sdW1lKCkgewogICAgICByZXR1cm4gNC4wICogTWF0aC5QSSAqIHRoaXMuYm91bmRpbmdTcGhlcmVSYWRpdXMgLyAzLjA7CiAgICB9CiAgICAvKioKICAgICAqIEdldCBhbiBhdmVyYWdlIG9mIGFsbCB0aGUgdmVydGljZXMgcG9zaXRpb25zCiAgICAgKi8KCgogICAgZ2V0QXZlcmFnZVBvaW50TG9jYWwodGFyZ2V0KSB7CiAgICAgIGlmICh0YXJnZXQgPT09IHZvaWQgMCkgewogICAgICAgIHRhcmdldCA9IG5ldyBWZWMzKCk7CiAgICAgIH0KCiAgICAgIGNvbnN0IHZlcnRzID0gdGhpcy52ZXJ0aWNlczsKCiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmVydHMubGVuZ3RoOyBpKyspIHsKICAgICAgICB0YXJnZXQudmFkZCh2ZXJ0c1tpXSwgdGFyZ2V0KTsKICAgICAgfQoKICAgICAgdGFyZ2V0LnNjYWxlKDEgLyB2ZXJ0cy5sZW5ndGgsIHRhcmdldCk7CiAgICAgIHJldHVybiB0YXJnZXQ7CiAgICB9CiAgICAvKioKICAgICAqIFRyYW5zZm9ybSBhbGwgbG9jYWwgcG9pbnRzLiBXaWxsIGNoYW5nZSB0aGUgLnZlcnRpY2VzCiAgICAgKi8KCgogICAgdHJhbnNmb3JtQWxsUG9pbnRzKG9mZnNldCwgcXVhdCkgewogICAgICBjb25zdCBuID0gdGhpcy52ZXJ0aWNlcy5sZW5ndGg7CiAgICAgIGNvbnN0IHZlcnRzID0gdGhpcy52ZXJ0aWNlczsgLy8gQXBwbHkgcm90YXRpb24KCiAgICAgIGlmIChxdWF0KSB7CiAgICAgICAgLy8gUm90YXRlIHZlcnRpY2VzCiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHsKICAgICAgICAgIGNvbnN0IHYgPSB2ZXJ0c1tpXTsKICAgICAgICAgIHF1YXQudm11bHQodiwgdik7CiAgICAgICAgfSAvLyBSb3RhdGUgZmFjZSBub3JtYWxzCgoKICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZmFjZU5vcm1hbHMubGVuZ3RoOyBpKyspIHsKICAgICAgICAgIGNvbnN0IHYgPSB0aGlzLmZhY2VOb3JtYWxzW2ldOwogICAgICAgICAgcXVhdC52bXVsdCh2LCB2KTsKICAgICAgICB9CiAgICAgICAgLyoKICAgICAgICAgICAgICAvLyBSb3RhdGUgZWRnZXMKICAgICAgICAgICAgICBmb3IobGV0IGk9MDsgaTx0aGlzLnVuaXF1ZUVkZ2VzLmxlbmd0aDsgaSsrKXsKICAgICAgICAgICAgICAgICAgY29uc3QgdiA9IHRoaXMudW5pcXVlRWRnZXNbaV07CiAgICAgICAgICAgICAgICAgIHF1YXQudm11bHQodix2KTsKICAgICAgICAgICAgICB9Ki8KCiAgICAgIH0gLy8gQXBwbHkgb2Zmc2V0CgoKICAgICAgaWYgKG9mZnNldCkgewogICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7CiAgICAgICAgICBjb25zdCB2ID0gdmVydHNbaV07CiAgICAgICAgICB2LnZhZGQob2Zmc2V0LCB2KTsKICAgICAgICB9CiAgICAgIH0KICAgIH0KICAgIC8qKgogICAgICogQ2hlY2tzIHdoZXRoZXIgcCBpcyBpbnNpZGUgdGhlIHBvbHloZWRyYS4gTXVzdCBiZSBpbiBsb2NhbCBjb29yZHMuCiAgICAgKiBUaGUgcG9pbnQgbGllcyBvdXRzaWRlIG9mIHRoZSBjb252ZXggaHVsbCBvZiB0aGUgb3RoZXIgcG9pbnRzIGlmIGFuZCBvbmx5IGlmIHRoZSBkaXJlY3Rpb24KICAgICAqIG9mIGFsbCB0aGUgdmVjdG9ycyBmcm9tIGl0IHRvIHRob3NlIG90aGVyIHBvaW50cyBhcmUgb24gbGVzcyB0aGFuIG9uZSBoYWxmIG9mIGEgc3BoZXJlIGFyb3VuZCBpdC4KICAgICAqIEBwYXJhbSBwIEEgcG9pbnQgZ2l2ZW4gaW4gbG9jYWwgY29vcmRpbmF0ZXMKICAgICAqLwoKCiAgICBwb2ludElzSW5zaWRlKHApIHsKICAgICAgY29uc3QgdmVydHMgPSB0aGlzLnZlcnRpY2VzOwogICAgICBjb25zdCBmYWNlcyA9IHRoaXMuZmFjZXM7CiAgICAgIGNvbnN0IG5vcm1hbHMgPSB0aGlzLmZhY2VOb3JtYWxzOwogICAgICBjb25zdCBwb2ludEluc2lkZSA9IG5ldyBWZWMzKCk7CiAgICAgIHRoaXMuZ2V0QXZlcmFnZVBvaW50TG9jYWwocG9pbnRJbnNpZGUpOwoKICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZhY2VzLmxlbmd0aDsgaSsrKSB7CiAgICAgICAgbGV0IG4gPSBub3JtYWxzW2ldOwogICAgICAgIGNvbnN0IHYgPSB2ZXJ0c1tmYWNlc1tpXVswXV07IC8vIFdlIG9ubHkgbmVlZCBvbmUgcG9pbnQgaW4gdGhlIGZhY2UKICAgICAgICAvLyBUaGlzIGRvdCBwcm9kdWN0IGRldGVybWluZXMgd2hpY2ggc2lkZSBvZiB0aGUgZWRnZSB0aGUgcG9pbnQgaXMKCiAgICAgICAgY29uc3QgdlRvUCA9IG5ldyBWZWMzKCk7CiAgICAgICAgcC52c3ViKHYsIHZUb1ApOwogICAgICAgIGNvbnN0IHIxID0gbi5kb3QodlRvUCk7CiAgICAgICAgY29uc3QgdlRvUG9pbnRJbnNpZGUgPSBuZXcgVmVjMygpOwogICAgICAgIHBvaW50SW5zaWRlLnZzdWIodiwgdlRvUG9pbnRJbnNpZGUpOwogICAgICAgIGNvbnN0IHIyID0gbi5kb3QodlRvUG9pbnRJbnNpZGUpOwoKICAgICAgICBpZiAocjEgPCAwICYmIHIyID4gMCB8fCByMSA+IDAgJiYgcjIgPCAwKSB7CiAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIEVuY291bnRlcmVkIHNvbWUgb3RoZXIgc2lnbi4gRXhpdC4KICAgICAgICB9CiAgICAgIH0gLy8gSWYgd2UgZ290IGhlcmUsIGFsbCBkb3QgcHJvZHVjdHMgd2VyZSBvZiB0aGUgc2FtZSBzaWduLgoKCiAgICAgIHJldHVybiAtMTsKICAgIH0KICAgIC8qKgogICAgICogR2V0IG1heCBhbmQgbWluIGRvdCBwcm9kdWN0IG9mIGEgY29udmV4IGh1bGwgYXQgcG9zaXRpb24gKHBvcyxxdWF0KSBwcm9qZWN0ZWQgb250byBhbiBheGlzLgogICAgICogUmVzdWx0cyBhcmUgc2F2ZWQgaW4gdGhlIGFycmF5IG1heG1pbi4KICAgICAqIEBwYXJhbSByZXN1bHQgcmVzdWx0WzBdIGFuZCByZXN1bHRbMV0gd2lsbCBiZSBzZXQgdG8gbWF4aW11bSBhbmQgbWluaW11bSwgcmVzcGVjdGl2ZWx5LgogICAgICovCgoKICAgIHN0YXRpYyBwcm9qZWN0KHNoYXBlLCBheGlzLCBwb3MsIHF1YXQsIHJlc3VsdCkgewogICAgICBjb25zdCBuID0gc2hhcGUudmVydGljZXMubGVuZ3RoOwogICAgICBjb25zdCBsb2NhbEF4aXMgPSBwcm9qZWN0X2xvY2FsQXhpczsKICAgICAgbGV0IG1heCA9IDA7CiAgICAgIGxldCBtaW4gPSAwOwogICAgICBjb25zdCBsb2NhbE9yaWdpbiA9IHByb2plY3RfbG9jYWxPcmlnaW47CiAgICAgIGNvbnN0IHZzID0gc2hhcGUudmVydGljZXM7CiAgICAgIGxvY2FsT3JpZ2luLnNldFplcm8oKTsgLy8gVHJhbnNmb3JtIHRoZSBheGlzIHRvIGxvY2FsCgogICAgICBUcmFuc2Zvcm0udmVjdG9yVG9Mb2NhbEZyYW1lKHBvcywgcXVhdCwgYXhpcywgbG9jYWxBeGlzKTsKICAgICAgVHJhbnNmb3JtLnBvaW50VG9Mb2NhbEZyYW1lKHBvcywgcXVhdCwgbG9jYWxPcmlnaW4sIGxvY2FsT3JpZ2luKTsKICAgICAgY29uc3QgYWRkID0gbG9jYWxPcmlnaW4uZG90KGxvY2FsQXhpcyk7CiAgICAgIG1pbiA9IG1heCA9IHZzWzBdLmRvdChsb2NhbEF4aXMpOwoKICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBuOyBpKyspIHsKICAgICAgICBjb25zdCB2YWwgPSB2c1tpXS5kb3QobG9jYWxBeGlzKTsKCiAgICAgICAgaWYgKHZhbCA+IG1heCkgewogICAgICAgICAgbWF4ID0gdmFsOwogICAgICAgIH0KCiAgICAgICAgaWYgKHZhbCA8IG1pbikgewogICAgICAgICAgbWluID0gdmFsOwogICAgICAgIH0KICAgICAgfQoKICAgICAgbWluIC09IGFkZDsKICAgICAgbWF4IC09IGFkZDsKCiAgICAgIGlmIChtaW4gPiBtYXgpIHsKICAgICAgICAvLyBJbmNvbnNpc3RlbnQgLSBzd2FwCiAgICAgICAgY29uc3QgdGVtcCA9IG1pbjsKICAgICAgICBtaW4gPSBtYXg7CiAgICAgICAgbWF4ID0gdGVtcDsKICAgICAgfSAvLyBPdXRwdXQKCgogICAgICByZXN1bHRbMF0gPSBtYXg7CiAgICAgIHJlc3VsdFsxXSA9IG1pbjsKICAgIH0KCiAgfQogIGNvbnN0IG1heG1pbkEgPSBbXTsKICBjb25zdCBtYXhtaW5CID0gW107CiAgbmV3IFZlYzMoKTsKICBjb25zdCBwcm9qZWN0X2xvY2FsQXhpcyA9IG5ldyBWZWMzKCk7CiAgY29uc3QgcHJvamVjdF9sb2NhbE9yaWdpbiA9IG5ldyBWZWMzKCk7CgogIC8qKgogICAqIEEgM2QgYm94IHNoYXBlLgogICAqIEBleGFtcGxlCiAgICogICAgIGNvbnN0IHNpemUgPSAxCiAgICogICAgIGNvbnN0IGhhbGZFeHRlbnRzID0gbmV3IENBTk5PTi5WZWMzKHNpemUsIHNpemUsIHNpemUpCiAgICogICAgIGNvbnN0IGJveFNoYXBlID0gbmV3IENBTk5PTi5Cb3goaGFsZkV4dGVudHMpCiAgICogICAgIGNvbnN0IGJveEJvZHkgPSBuZXcgQ0FOTk9OLkJvZHkoeyBtYXNzOiAxLCBzaGFwZTogYm94U2hhcGUgfSkKICAgKiAgICAgd29ybGQuYWRkQm9keShib3hCb2R5KQogICAqLwogIGNsYXNzIEJveCBleHRlbmRzIFNoYXBlIHsKICAgIC8qKgogICAgICogVGhlIGhhbGYgZXh0ZW50cyBvZiB0aGUgYm94LgogICAgICovCgogICAgLyoqCiAgICAgKiBVc2VkIGJ5IHRoZSBjb250YWN0IGdlbmVyYXRvciB0byBtYWtlIGNvbnRhY3RzIHdpdGggb3RoZXIgY29udmV4IHBvbHloZWRyYSBmb3IgZXhhbXBsZS4KICAgICAqLwogICAgY29uc3RydWN0b3IoaGFsZkV4dGVudHMpIHsKICAgICAgc3VwZXIoewogICAgICAgIHR5cGU6IFNoYXBlLnR5cGVzLkJPWAogICAgICB9KTsKICAgICAgdGhpcy5oYWxmRXh0ZW50cyA9IGhhbGZFeHRlbnRzOwogICAgICB0aGlzLmNvbnZleFBvbHloZWRyb25SZXByZXNlbnRhdGlvbiA9IG51bGw7CiAgICAgIHRoaXMudXBkYXRlQ29udmV4UG9seWhlZHJvblJlcHJlc2VudGF0aW9uKCk7CiAgICAgIHRoaXMudXBkYXRlQm91bmRpbmdTcGhlcmVSYWRpdXMoKTsKICAgIH0KICAgIC8qKgogICAgICogVXBkYXRlcyB0aGUgbG9jYWwgY29udmV4IHBvbHloZWRyb24gcmVwcmVzZW50YXRpb24gdXNlZCBmb3Igc29tZSBjb2xsaXNpb25zLgogICAgICovCgoKICAgIHVwZGF0ZUNvbnZleFBvbHloZWRyb25SZXByZXNlbnRhdGlvbigpIHsKICAgICAgY29uc3Qgc3ggPSB0aGlzLmhhbGZFeHRlbnRzLng7CiAgICAgIGNvbnN0IHN5ID0gdGhpcy5oYWxmRXh0ZW50cy55OwogICAgICBjb25zdCBzeiA9IHRoaXMuaGFsZkV4dGVudHMuejsKICAgICAgY29uc3QgViA9IFZlYzM7CiAgICAgIGNvbnN0IHZlcnRpY2VzID0gW25ldyBWKC1zeCwgLXN5LCAtc3opLCBuZXcgVihzeCwgLXN5LCAtc3opLCBuZXcgVihzeCwgc3ksIC1zeiksIG5ldyBWKC1zeCwgc3ksIC1zeiksIG5ldyBWKC1zeCwgLXN5LCBzeiksIG5ldyBWKHN4LCAtc3ksIHN6KSwgbmV3IFYoc3gsIHN5LCBzeiksIG5ldyBWKC1zeCwgc3ksIHN6KV07CiAgICAgIGNvbnN0IGZhY2VzID0gW1szLCAyLCAxLCAwXSwgLy8gLXoKICAgICAgWzQsIDUsIDYsIDddLCAvLyAregogICAgICBbNSwgNCwgMCwgMV0sIC8vIC15CiAgICAgIFsyLCAzLCA3LCA2XSwgLy8gK3kKICAgICAgWzAsIDQsIDcsIDNdLCAvLyAteAogICAgICBbMSwgMiwgNiwgNV0gLy8gK3gKICAgICAgXTsKICAgICAgY29uc3QgYXhlcyA9IFtuZXcgVigwLCAwLCAxKSwgbmV3IFYoMCwgMSwgMCksIG5ldyBWKDEsIDAsIDApXTsKICAgICAgY29uc3QgaCA9IG5ldyBDb252ZXhQb2x5aGVkcm9uKHsKICAgICAgICB2ZXJ0aWNlcywKICAgICAgICBmYWNlcywKICAgICAgICBheGVzCiAgICAgIH0pOwogICAgICB0aGlzLmNvbnZleFBvbHloZWRyb25SZXByZXNlbnRhdGlvbiA9IGg7CiAgICAgIGgubWF0ZXJpYWwgPSB0aGlzLm1hdGVyaWFsOwogICAgfQogICAgLyoqCiAgICAgKiBDYWxjdWxhdGUgdGhlIGluZXJ0aWEgb2YgdGhlIGJveC4KICAgICAqLwoKCiAgICBjYWxjdWxhdGVMb2NhbEluZXJ0aWEobWFzcywgdGFyZ2V0KSB7CiAgICAgIGlmICh0YXJnZXQgPT09IHZvaWQgMCkgewogICAgICAgIHRhcmdldCA9IG5ldyBWZWMzKCk7CiAgICAgIH0KCiAgICAgIEJveC5jYWxjdWxhdGVJbmVydGlhKHRoaXMuaGFsZkV4dGVudHMsIG1hc3MsIHRhcmdldCk7CiAgICAgIHJldHVybiB0YXJnZXQ7CiAgICB9CgogICAgc3RhdGljIGNhbGN1bGF0ZUluZXJ0aWEoaGFsZkV4dGVudHMsIG1hc3MsIHRhcmdldCkgewogICAgICBjb25zdCBlID0gaGFsZkV4dGVudHM7CiAgICAgIHRhcmdldC54ID0gMS4wIC8gMTIuMCAqIG1hc3MgKiAoMiAqIGUueSAqIDIgKiBlLnkgKyAyICogZS56ICogMiAqIGUueik7CiAgICAgIHRhcmdldC55ID0gMS4wIC8gMTIuMCAqIG1hc3MgKiAoMiAqIGUueCAqIDIgKiBlLnggKyAyICogZS56ICogMiAqIGUueik7CiAgICAgIHRhcmdldC56ID0gMS4wIC8gMTIuMCAqIG1hc3MgKiAoMiAqIGUueSAqIDIgKiBlLnkgKyAyICogZS54ICogMiAqIGUueCk7CiAgICB9CiAgICAvKioKICAgICAqIEdldCB0aGUgYm94IDYgc2lkZSBub3JtYWxzCiAgICAgKiBAcGFyYW0gc2l4VGFyZ2V0VmVjdG9ycyBBbiBhcnJheSBvZiA2IHZlY3RvcnMsIHRvIHN0b3JlIHRoZSByZXN1bHRpbmcgc2lkZSBub3JtYWxzIGluLgogICAgICogQHBhcmFtIHF1YXQgT3JpZW50YXRpb24gdG8gYXBwbHkgdG8gdGhlIG5vcm1hbCB2ZWN0b3JzLiBJZiBub3QgcHJvdmlkZWQsIHRoZSB2ZWN0b3JzIHdpbGwgYmUgaW4gcmVzcGVjdCB0byB0aGUgbG9jYWwgZnJhbWUuCiAgICAgKi8KCgogICAgZ2V0U2lkZU5vcm1hbHMoc2l4VGFyZ2V0VmVjdG9ycywgcXVhdCkgewogICAgICBjb25zdCBzaWRlcyA9IHNpeFRhcmdldFZlY3RvcnM7CiAgICAgIGNvbnN0IGV4ID0gdGhpcy5oYWxmRXh0ZW50czsKICAgICAgc2lkZXNbMF0uc2V0KGV4LngsIDAsIDApOwogICAgICBzaWRlc1sxXS5zZXQoMCwgZXgueSwgMCk7CiAgICAgIHNpZGVzWzJdLnNldCgwLCAwLCBleC56KTsKICAgICAgc2lkZXNbM10uc2V0KC1leC54LCAwLCAwKTsKICAgICAgc2lkZXNbNF0uc2V0KDAsIC1leC55LCAwKTsKICAgICAgc2lkZXNbNV0uc2V0KDAsIDAsIC1leC56KTsKCiAgICAgIGlmIChxdWF0ICE9PSB1bmRlZmluZWQpIHsKICAgICAgICBmb3IgKGxldCBpID0gMDsgaSAhPT0gc2lkZXMubGVuZ3RoOyBpKyspIHsKICAgICAgICAgIHF1YXQudm11bHQoc2lkZXNbaV0sIHNpZGVzW2ldKTsKICAgICAgICB9CiAgICAgIH0KCiAgICAgIHJldHVybiBzaWRlczsKICAgIH0KICAgIC8qKgogICAgICogUmV0dXJucyB0aGUgdm9sdW1lIG9mIHRoZSBib3guCiAgICAgKi8KCgogICAgdm9sdW1lKCkgewogICAgICByZXR1cm4gOC4wICogdGhpcy5oYWxmRXh0ZW50cy54ICogdGhpcy5oYWxmRXh0ZW50cy55ICogdGhpcy5oYWxmRXh0ZW50cy56OwogICAgfQogICAgLyoqCiAgICAgKiB1cGRhdGVCb3VuZGluZ1NwaGVyZVJhZGl1cwogICAgICovCgoKICAgIHVwZGF0ZUJvdW5kaW5nU3BoZXJlUmFkaXVzKCkgewogICAgICB0aGlzLmJvdW5kaW5nU3BoZXJlUmFkaXVzID0gdGhpcy5oYWxmRXh0ZW50cy5sZW5ndGgoKTsKICAgIH0KICAgIC8qKgogICAgICogZm9yRWFjaFdvcmxkQ29ybmVyCiAgICAgKi8KCgogICAgZm9yRWFjaFdvcmxkQ29ybmVyKHBvcywgcXVhdCwgY2FsbGJhY2spIHsKICAgICAgY29uc3QgZSA9IHRoaXMuaGFsZkV4dGVudHM7CiAgICAgIGNvbnN0IGNvcm5lcnMgPSBbW2UueCwgZS55LCBlLnpdLCBbLWUueCwgZS55LCBlLnpdLCBbLWUueCwgLWUueSwgZS56XSwgWy1lLngsIC1lLnksIC1lLnpdLCBbZS54LCAtZS55LCAtZS56XSwgW2UueCwgZS55LCAtZS56XSwgWy1lLngsIGUueSwgLWUuel0sIFtlLngsIC1lLnksIGUuel1dOwoKICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3JuZXJzLmxlbmd0aDsgaSsrKSB7CiAgICAgICAgd29ybGRDb3JuZXJUZW1wUG9zLnNldChjb3JuZXJzW2ldWzBdLCBjb3JuZXJzW2ldWzFdLCBjb3JuZXJzW2ldWzJdKTsKICAgICAgICBxdWF0LnZtdWx0KHdvcmxkQ29ybmVyVGVtcFBvcywgd29ybGRDb3JuZXJUZW1wUG9zKTsKICAgICAgICBwb3MudmFkZCh3b3JsZENvcm5lclRlbXBQb3MsIHdvcmxkQ29ybmVyVGVtcFBvcyk7CiAgICAgICAgY2FsbGJhY2sod29ybGRDb3JuZXJUZW1wUG9zLngsIHdvcmxkQ29ybmVyVGVtcFBvcy55LCB3b3JsZENvcm5lclRlbXBQb3Mueik7CiAgICAgIH0KICAgIH0KICAgIC8qKgogICAgICogY2FsY3VsYXRlV29ybGRBQUJCCiAgICAgKi8KCgogICAgY2FsY3VsYXRlV29ybGRBQUJCKHBvcywgcXVhdCwgbWluLCBtYXgpIHsKICAgICAgY29uc3QgZSA9IHRoaXMuaGFsZkV4dGVudHM7CiAgICAgIHdvcmxkQ29ybmVyc1RlbXBbMF0uc2V0KGUueCwgZS55LCBlLnopOwogICAgICB3b3JsZENvcm5lcnNUZW1wWzFdLnNldCgtZS54LCBlLnksIGUueik7CiAgICAgIHdvcmxkQ29ybmVyc1RlbXBbMl0uc2V0KC1lLngsIC1lLnksIGUueik7CiAgICAgIHdvcmxkQ29ybmVyc1RlbXBbM10uc2V0KC1lLngsIC1lLnksIC1lLnopOwogICAgICB3b3JsZENvcm5lcnNUZW1wWzRdLnNldChlLngsIC1lLnksIC1lLnopOwogICAgICB3b3JsZENvcm5lcnNUZW1wWzVdLnNldChlLngsIGUueSwgLWUueik7CiAgICAgIHdvcmxkQ29ybmVyc1RlbXBbNl0uc2V0KC1lLngsIGUueSwgLWUueik7CiAgICAgIHdvcmxkQ29ybmVyc1RlbXBbN10uc2V0KGUueCwgLWUueSwgZS56KTsKICAgICAgY29uc3Qgd2MgPSB3b3JsZENvcm5lcnNUZW1wWzBdOwogICAgICBxdWF0LnZtdWx0KHdjLCB3Yyk7CiAgICAgIHBvcy52YWRkKHdjLCB3Yyk7CiAgICAgIG1heC5jb3B5KHdjKTsKICAgICAgbWluLmNvcHkod2MpOwoKICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCA4OyBpKyspIHsKICAgICAgICBjb25zdCB3YyA9IHdvcmxkQ29ybmVyc1RlbXBbaV07CiAgICAgICAgcXVhdC52bXVsdCh3Yywgd2MpOwogICAgICAgIHBvcy52YWRkKHdjLCB3Yyk7CiAgICAgICAgY29uc3QgeCA9IHdjLng7CiAgICAgICAgY29uc3QgeSA9IHdjLnk7CiAgICAgICAgY29uc3QgeiA9IHdjLno7CgogICAgICAgIGlmICh4ID4gbWF4LngpIHsKICAgICAgICAgIG1heC54ID0geDsKICAgICAgICB9CgogICAgICAgIGlmICh5ID4gbWF4LnkpIHsKICAgICAgICAgIG1heC55ID0geTsKICAgICAgICB9CgogICAgICAgIGlmICh6ID4gbWF4LnopIHsKICAgICAgICAgIG1heC56ID0gejsKICAgICAgICB9CgogICAgICAgIGlmICh4IDwgbWluLngpIHsKICAgICAgICAgIG1pbi54ID0geDsKICAgICAgICB9CgogICAgICAgIGlmICh5IDwgbWluLnkpIHsKICAgICAgICAgIG1pbi55ID0geTsKICAgICAgICB9CgogICAgICAgIGlmICh6IDwgbWluLnopIHsKICAgICAgICAgIG1pbi56ID0gejsKICAgICAgICB9CiAgICAgIH0gLy8gR2V0IGVhY2ggYXhpcyBtYXgKICAgICAgLy8gbWluLnNldChJbmZpbml0eSxJbmZpbml0eSxJbmZpbml0eSk7CiAgICAgIC8vIG1heC5zZXQoLUluZmluaXR5LC1JbmZpbml0eSwtSW5maW5pdHkpOwogICAgICAvLyB0aGlzLmZvckVhY2hXb3JsZENvcm5lcihwb3MscXVhdCxmdW5jdGlvbih4LHkseil7CiAgICAgIC8vICAgICBpZih4ID4gbWF4LngpewogICAgICAvLyAgICAgICAgIG1heC54ID0geDsKICAgICAgLy8gICAgIH0KICAgICAgLy8gICAgIGlmKHkgPiBtYXgueSl7CiAgICAgIC8vICAgICAgICAgbWF4LnkgPSB5OwogICAgICAvLyAgICAgfQogICAgICAvLyAgICAgaWYoeiA+IG1heC56KXsKICAgICAgLy8gICAgICAgICBtYXgueiA9IHo7CiAgICAgIC8vICAgICB9CiAgICAgIC8vICAgICBpZih4IDwgbWluLngpewogICAgICAvLyAgICAgICAgIG1pbi54ID0geDsKICAgICAgLy8gICAgIH0KICAgICAgLy8gICAgIGlmKHkgPCBtaW4ueSl7CiAgICAgIC8vICAgICAgICAgbWluLnkgPSB5OwogICAgICAvLyAgICAgfQogICAgICAvLyAgICAgaWYoeiA8IG1pbi56KXsKICAgICAgLy8gICAgICAgICBtaW4ueiA9IHo7CiAgICAgIC8vICAgICB9CiAgICAgIC8vIH0pOwoKICAgIH0KCiAgfQogIGNvbnN0IHdvcmxkQ29ybmVyVGVtcFBvcyA9IG5ldyBWZWMzKCk7CiAgY29uc3Qgd29ybGRDb3JuZXJzVGVtcCA9IFtuZXcgVmVjMygpLCBuZXcgVmVjMygpLCBuZXcgVmVjMygpLCBuZXcgVmVjMygpLCBuZXcgVmVjMygpLCBuZXcgVmVjMygpLCBuZXcgVmVjMygpLCBuZXcgVmVjMygpXTsKCiAgLyoqCiAgICogQk9EWV9UWVBFUwogICAqLwogIGNvbnN0IEJPRFlfVFlQRVMgPSB7CiAgICAvKiogRFlOQU1JQyAqLwogICAgRFlOQU1JQzogMSwKCiAgICAvKiogU1RBVElDICovCiAgICBTVEFUSUM6IDIsCgogICAgLyoqIEtJTkVNQVRJQyAqLwogICAgS0lORU1BVElDOiA0CiAgfTsKICAvKioKICAgKiBCb2R5VHlwZQogICAqLwoKICAvKioKICAgKiBCT0RZX1NMRUVQX1NUQVRFUwogICAqLwogIGNvbnN0IEJPRFlfU0xFRVBfU1RBVEVTID0gewogICAgLyoqIEFXQUtFICovCiAgICBBV0FLRTogMCwKCiAgICAvKiogU0xFRVBZICovCiAgICBTTEVFUFk6IDEsCgogICAgLyoqIFNMRUVQSU5HICovCiAgICBTTEVFUElORzogMgogIH07CiAgLyoqCiAgICogQm9keVNsZWVwU3RhdGUKICAgKi8KCiAgLyoqCiAgICogQmFzZSBjbGFzcyBmb3IgYWxsIGJvZHkgdHlwZXMuCiAgICogQGV4YW1wbGUKICAgKiAgICAgY29uc3Qgc2hhcGUgPSBuZXcgQ0FOTk9OLlNwaGVyZSgxKQogICAqICAgICBjb25zdCBib2R5ID0gbmV3IENBTk5PTi5Cb2R5KHsKICAgKiAgICAgICBtYXNzOiAxLAogICAqICAgICAgIHNoYXBlLAogICAqICAgICB9KQogICAqICAgICB3b3JsZC5hZGRCb2R5KGJvZHkpCiAgICovCiAgY2xhc3MgQm9keSBleHRlbmRzIEV2ZW50VGFyZ2V0IHsKICAgIC8qKgogICAgICogRGlzcGF0Y2hlZCBhZnRlciB0d28gYm9kaWVzIGNvbGxpZGUuIFRoaXMgZXZlbnQgaXMgZGlzcGF0Y2hlZCBvbiBlYWNoCiAgICAgKiBvZiB0aGUgdHdvIGJvZGllcyBpbnZvbHZlZCBpbiB0aGUgY29sbGlzaW9uLgogICAgICogQGV2ZW50IGNvbGxpZGUKICAgICAqIEBwYXJhbSBib2R5IFRoZSBib2R5IHRoYXQgd2FzIGludm9sdmVkIGluIHRoZSBjb2xsaXNpb24uCiAgICAgKiBAcGFyYW0gY29udGFjdCBUaGUgZGV0YWlscyBvZiB0aGUgY29sbGlzaW9uLgogICAgICovCgogICAgLyoqCiAgICAgKiBBIGR5bmFtaWMgYm9keSBpcyBmdWxseSBzaW11bGF0ZWQuIENhbiBiZSBtb3ZlZCBtYW51YWxseSBieSB0aGUgdXNlciwgYnV0IG5vcm1hbGx5IHRoZXkgbW92ZSBhY2NvcmRpbmcgdG8gZm9yY2VzLiBBIGR5bmFtaWMgYm9keSBjYW4gY29sbGlkZSB3aXRoIGFsbCBib2R5IHR5cGVzLiBBIGR5bmFtaWMgYm9keSBhbHdheXMgaGFzIGZpbml0ZSwgbm9uLXplcm8gbWFzcy4KICAgICAqLwoKICAgIC8qKgogICAgICogQSBzdGF0aWMgYm9keSBkb2VzIG5vdCBtb3ZlIGR1cmluZyBzaW11bGF0aW9uIGFuZCBiZWhhdmVzIGFzIGlmIGl0IGhhcyBpbmZpbml0ZSBtYXNzLiBTdGF0aWMgYm9kaWVzIGNhbiBiZSBtb3ZlZCBtYW51YWxseSBieSBzZXR0aW5nIHRoZSBwb3NpdGlvbiBvZiB0aGUgYm9keS4gVGhlIHZlbG9jaXR5IG9mIGEgc3RhdGljIGJvZHkgaXMgYWx3YXlzIHplcm8uIFN0YXRpYyBib2RpZXMgZG8gbm90IGNvbGxpZGUgd2l0aCBvdGhlciBzdGF0aWMgb3Iga2luZW1hdGljIGJvZGllcy4KICAgICAqLwoKICAgIC8qKgogICAgICogQSBraW5lbWF0aWMgYm9keSBtb3ZlcyB1bmRlciBzaW11bGF0aW9uIGFjY29yZGluZyB0byBpdHMgdmVsb2NpdHkuIFRoZXkgZG8gbm90IHJlc3BvbmQgdG8gZm9yY2VzLiBUaGV5IGNhbiBiZSBtb3ZlZCBtYW51YWxseSwgYnV0IG5vcm1hbGx5IGEga2luZW1hdGljIGJvZHkgaXMgbW92ZWQgYnkgc2V0dGluZyBpdHMgdmVsb2NpdHkuIEEga2luZW1hdGljIGJvZHkgYmVoYXZlcyBhcyBpZiBpdCBoYXMgaW5maW5pdGUgbWFzcy4gS2luZW1hdGljIGJvZGllcyBkbyBub3QgY29sbGlkZSB3aXRoIG90aGVyIHN0YXRpYyBvciBraW5lbWF0aWMgYm9kaWVzLgogICAgICovCgogICAgLyoqCiAgICAgKiBBV0FLRQogICAgICovCgogICAgLyoqCiAgICAgKiBTTEVFUFkKICAgICAqLwoKICAgIC8qKgogICAgICogU0xFRVBJTkcKICAgICAqLwoKICAgIC8qKgogICAgICogRGlzcGF0Y2hlZCBhZnRlciBhIHNsZWVwaW5nIGJvZHkgaGFzIHdva2VuIHVwLgogICAgICogQGV2ZW50IHdha2V1cAogICAgICovCgogICAgLyoqCiAgICAgKiBEaXNwYXRjaGVkIGFmdGVyIGEgYm9keSBoYXMgZ29uZSBpbiB0byB0aGUgc2xlZXB5IHN0YXRlLgogICAgICogQGV2ZW50IHNsZWVweQogICAgICovCgogICAgLyoqCiAgICAgKiBEaXNwYXRjaGVkIGFmdGVyIGEgYm9keSBoYXMgZmFsbGVuIGFzbGVlcC4KICAgICAqIEBldmVudCBzbGVlcAogICAgICovCiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7CiAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsKICAgICAgICBvcHRpb25zID0ge307CiAgICAgIH0KCiAgICAgIHN1cGVyKCk7CiAgICAgIHRoaXMuaWQgPSBCb2R5LmlkQ291bnRlcisrOwogICAgICB0aGlzLmluZGV4ID0gLTE7CiAgICAgIHRoaXMud29ybGQgPSBudWxsOwogICAgICB0aGlzLnZsYW1iZGEgPSBuZXcgVmVjMygpOwogICAgICB0aGlzLmNvbGxpc2lvbkZpbHRlckdyb3VwID0gdHlwZW9mIG9wdGlvbnMuY29sbGlzaW9uRmlsdGVyR3JvdXAgPT09ICdudW1iZXInID8gb3B0aW9ucy5jb2xsaXNpb25GaWx0ZXJHcm91cCA6IDE7CiAgICAgIHRoaXMuY29sbGlzaW9uRmlsdGVyTWFzayA9IHR5cGVvZiBvcHRpb25zLmNvbGxpc2lvbkZpbHRlck1hc2sgPT09ICdudW1iZXInID8gb3B0aW9ucy5jb2xsaXNpb25GaWx0ZXJNYXNrIDogLTE7CiAgICAgIHRoaXMuY29sbGlzaW9uUmVzcG9uc2UgPSB0eXBlb2Ygb3B0aW9ucy5jb2xsaXNpb25SZXNwb25zZSA9PT0gJ2Jvb2xlYW4nID8gb3B0aW9ucy5jb2xsaXNpb25SZXNwb25zZSA6IHRydWU7CiAgICAgIHRoaXMucG9zaXRpb24gPSBuZXcgVmVjMygpOwogICAgICB0aGlzLnByZXZpb3VzUG9zaXRpb24gPSBuZXcgVmVjMygpOwogICAgICB0aGlzLmludGVycG9sYXRlZFBvc2l0aW9uID0gbmV3IFZlYzMoKTsKICAgICAgdGhpcy5pbml0UG9zaXRpb24gPSBuZXcgVmVjMygpOwoKICAgICAgaWYgKG9wdGlvbnMucG9zaXRpb24pIHsKICAgICAgICB0aGlzLnBvc2l0aW9uLmNvcHkob3B0aW9ucy5wb3NpdGlvbik7CiAgICAgICAgdGhpcy5wcmV2aW91c1Bvc2l0aW9uLmNvcHkob3B0aW9ucy5wb3NpdGlvbik7CiAgICAgICAgdGhpcy5pbnRlcnBvbGF0ZWRQb3NpdGlvbi5jb3B5KG9wdGlvbnMucG9zaXRpb24pOwogICAgICAgIHRoaXMuaW5pdFBvc2l0aW9uLmNvcHkob3B0aW9ucy5wb3NpdGlvbik7CiAgICAgIH0KCiAgICAgIHRoaXMudmVsb2NpdHkgPSBuZXcgVmVjMygpOwoKICAgICAgaWYgKG9wdGlvbnMudmVsb2NpdHkpIHsKICAgICAgICB0aGlzLnZlbG9jaXR5LmNvcHkob3B0aW9ucy52ZWxvY2l0eSk7CiAgICAgIH0KCiAgICAgIHRoaXMuaW5pdFZlbG9jaXR5ID0gbmV3IFZlYzMoKTsKICAgICAgdGhpcy5mb3JjZSA9IG5ldyBWZWMzKCk7CiAgICAgIGNvbnN0IG1hc3MgPSB0eXBlb2Ygb3B0aW9ucy5tYXNzID09PSAnbnVtYmVyJyA/IG9wdGlvbnMubWFzcyA6IDA7CiAgICAgIHRoaXMubWFzcyA9IG1hc3M7CiAgICAgIHRoaXMuaW52TWFzcyA9IG1hc3MgPiAwID8gMS4wIC8gbWFzcyA6IDA7CiAgICAgIHRoaXMubWF0ZXJpYWwgPSBvcHRpb25zLm1hdGVyaWFsIHx8IG51bGw7CiAgICAgIHRoaXMubGluZWFyRGFtcGluZyA9IHR5cGVvZiBvcHRpb25zLmxpbmVhckRhbXBpbmcgPT09ICdudW1iZXInID8gb3B0aW9ucy5saW5lYXJEYW1waW5nIDogMC4wMTsKICAgICAgdGhpcy50eXBlID0gbWFzcyA8PSAwLjAgPyBCb2R5LlNUQVRJQyA6IEJvZHkuRFlOQU1JQzsKCiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy50eXBlID09PSB0eXBlb2YgQm9keS5TVEFUSUMpIHsKICAgICAgICB0aGlzLnR5cGUgPSBvcHRpb25zLnR5cGU7CiAgICAgIH0KCiAgICAgIHRoaXMuYWxsb3dTbGVlcCA9IHR5cGVvZiBvcHRpb25zLmFsbG93U2xlZXAgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5hbGxvd1NsZWVwIDogdHJ1ZTsKICAgICAgdGhpcy5zbGVlcFN0YXRlID0gQm9keS5BV0FLRTsKICAgICAgdGhpcy5zbGVlcFNwZWVkTGltaXQgPSB0eXBlb2Ygb3B0aW9ucy5zbGVlcFNwZWVkTGltaXQgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5zbGVlcFNwZWVkTGltaXQgOiAwLjE7CiAgICAgIHRoaXMuc2xlZXBUaW1lTGltaXQgPSB0eXBlb2Ygb3B0aW9ucy5zbGVlcFRpbWVMaW1pdCAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLnNsZWVwVGltZUxpbWl0IDogMTsKICAgICAgdGhpcy50aW1lTGFzdFNsZWVweSA9IDA7CiAgICAgIHRoaXMud2FrZVVwQWZ0ZXJOYXJyb3dwaGFzZSA9IGZhbHNlOwogICAgICB0aGlzLnRvcnF1ZSA9IG5ldyBWZWMzKCk7CiAgICAgIHRoaXMucXVhdGVybmlvbiA9IG5ldyBRdWF0ZXJuaW9uKCk7CiAgICAgIHRoaXMuaW5pdFF1YXRlcm5pb24gPSBuZXcgUXVhdGVybmlvbigpOwogICAgICB0aGlzLnByZXZpb3VzUXVhdGVybmlvbiA9IG5ldyBRdWF0ZXJuaW9uKCk7CiAgICAgIHRoaXMuaW50ZXJwb2xhdGVkUXVhdGVybmlvbiA9IG5ldyBRdWF0ZXJuaW9uKCk7CgogICAgICBpZiAob3B0aW9ucy5xdWF0ZXJuaW9uKSB7CiAgICAgICAgdGhpcy5xdWF0ZXJuaW9uLmNvcHkob3B0aW9ucy5xdWF0ZXJuaW9uKTsKICAgICAgICB0aGlzLmluaXRRdWF0ZXJuaW9uLmNvcHkob3B0aW9ucy5xdWF0ZXJuaW9uKTsKICAgICAgICB0aGlzLnByZXZpb3VzUXVhdGVybmlvbi5jb3B5KG9wdGlvbnMucXVhdGVybmlvbik7CiAgICAgICAgdGhpcy5pbnRlcnBvbGF0ZWRRdWF0ZXJuaW9uLmNvcHkob3B0aW9ucy5xdWF0ZXJuaW9uKTsKICAgICAgfQoKICAgICAgdGhpcy5hbmd1bGFyVmVsb2NpdHkgPSBuZXcgVmVjMygpOwoKICAgICAgaWYgKG9wdGlvbnMuYW5ndWxhclZlbG9jaXR5KSB7CiAgICAgICAgdGhpcy5hbmd1bGFyVmVsb2NpdHkuY29weShvcHRpb25zLmFuZ3VsYXJWZWxvY2l0eSk7CiAgICAgIH0KCiAgICAgIHRoaXMuaW5pdEFuZ3VsYXJWZWxvY2l0eSA9IG5ldyBWZWMzKCk7CiAgICAgIHRoaXMuc2hhcGVzID0gW107CiAgICAgIHRoaXMuc2hhcGVPZmZzZXRzID0gW107CiAgICAgIHRoaXMuc2hhcGVPcmllbnRhdGlvbnMgPSBbXTsKICAgICAgdGhpcy5pbmVydGlhID0gbmV3IFZlYzMoKTsKICAgICAgdGhpcy5pbnZJbmVydGlhID0gbmV3IFZlYzMoKTsKICAgICAgdGhpcy5pbnZJbmVydGlhV29ybGQgPSBuZXcgTWF0MygpOwogICAgICB0aGlzLmludk1hc3NTb2x2ZSA9IDA7CiAgICAgIHRoaXMuaW52SW5lcnRpYVNvbHZlID0gbmV3IFZlYzMoKTsKICAgICAgdGhpcy5pbnZJbmVydGlhV29ybGRTb2x2ZSA9IG5ldyBNYXQzKCk7CiAgICAgIHRoaXMuZml4ZWRSb3RhdGlvbiA9IHR5cGVvZiBvcHRpb25zLmZpeGVkUm90YXRpb24gIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5maXhlZFJvdGF0aW9uIDogZmFsc2U7CiAgICAgIHRoaXMuYW5ndWxhckRhbXBpbmcgPSB0eXBlb2Ygb3B0aW9ucy5hbmd1bGFyRGFtcGluZyAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmFuZ3VsYXJEYW1waW5nIDogMC4wMTsKICAgICAgdGhpcy5saW5lYXJGYWN0b3IgPSBuZXcgVmVjMygxLCAxLCAxKTsKCiAgICAgIGlmIChvcHRpb25zLmxpbmVhckZhY3RvcikgewogICAgICAgIHRoaXMubGluZWFyRmFjdG9yLmNvcHkob3B0aW9ucy5saW5lYXJGYWN0b3IpOwogICAgICB9CgogICAgICB0aGlzLmFuZ3VsYXJGYWN0b3IgPSBuZXcgVmVjMygxLCAxLCAxKTsKCiAgICAgIGlmIChvcHRpb25zLmFuZ3VsYXJGYWN0b3IpIHsKICAgICAgICB0aGlzLmFuZ3VsYXJGYWN0b3IuY29weShvcHRpb25zLmFuZ3VsYXJGYWN0b3IpOwogICAgICB9CgogICAgICB0aGlzLmFhYmIgPSBuZXcgQUFCQigpOwogICAgICB0aGlzLmFhYmJOZWVkc1VwZGF0ZSA9IHRydWU7CiAgICAgIHRoaXMuYm91bmRpbmdSYWRpdXMgPSAwOwogICAgICB0aGlzLndsYW1iZGEgPSBuZXcgVmVjMygpOwogICAgICB0aGlzLmlzVHJpZ2dlciA9IEJvb2xlYW4ob3B0aW9ucy5pc1RyaWdnZXIpOwoKICAgICAgaWYgKG9wdGlvbnMuc2hhcGUpIHsKICAgICAgICB0aGlzLmFkZFNoYXBlKG9wdGlvbnMuc2hhcGUpOwogICAgICB9CgogICAgICB0aGlzLnVwZGF0ZU1hc3NQcm9wZXJ0aWVzKCk7CiAgICB9CiAgICAvKioKICAgICAqIFdha2UgdGhlIGJvZHkgdXAuCiAgICAgKi8KCgogICAgd2FrZVVwKCkgewogICAgICBjb25zdCBwcmV2U3RhdGUgPSB0aGlzLnNsZWVwU3RhdGU7CiAgICAgIHRoaXMuc2xlZXBTdGF0ZSA9IEJvZHkuQVdBS0U7CiAgICAgIHRoaXMud2FrZVVwQWZ0ZXJOYXJyb3dwaGFzZSA9IGZhbHNlOwoKICAgICAgaWYgKHByZXZTdGF0ZSA9PT0gQm9keS5TTEVFUElORykgewogICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChCb2R5Lndha2V1cEV2ZW50KTsKICAgICAgfQogICAgfQogICAgLyoqCiAgICAgKiBGb3JjZSBib2R5IHNsZWVwCiAgICAgKi8KCgogICAgc2xlZXAoKSB7CiAgICAgIHRoaXMuc2xlZXBTdGF0ZSA9IEJvZHkuU0xFRVBJTkc7CiAgICAgIHRoaXMudmVsb2NpdHkuc2V0KDAsIDAsIDApOwogICAgICB0aGlzLmFuZ3VsYXJWZWxvY2l0eS5zZXQoMCwgMCwgMCk7CiAgICAgIHRoaXMud2FrZVVwQWZ0ZXJOYXJyb3dwaGFzZSA9IGZhbHNlOwogICAgfQogICAgLyoqCiAgICAgKiBDYWxsZWQgZXZlcnkgdGltZXN0ZXAgdG8gdXBkYXRlIGludGVybmFsIHNsZWVwIHRpbWVyIGFuZCBjaGFuZ2Ugc2xlZXAgc3RhdGUgaWYgbmVlZGVkLgogICAgICogQHBhcmFtIHRpbWUgVGhlIHdvcmxkIHRpbWUgaW4gc2Vjb25kcwogICAgICovCgoKICAgIHNsZWVwVGljayh0aW1lKSB7CiAgICAgIGlmICh0aGlzLmFsbG93U2xlZXApIHsKICAgICAgICBjb25zdCBzbGVlcFN0YXRlID0gdGhpcy5zbGVlcFN0YXRlOwogICAgICAgIGNvbnN0IHNwZWVkU3F1YXJlZCA9IHRoaXMudmVsb2NpdHkubGVuZ3RoU3F1YXJlZCgpICsgdGhpcy5hbmd1bGFyVmVsb2NpdHkubGVuZ3RoU3F1YXJlZCgpOwogICAgICAgIGNvbnN0IHNwZWVkTGltaXRTcXVhcmVkID0gdGhpcy5zbGVlcFNwZWVkTGltaXQgKiogMjsKCiAgICAgICAgaWYgKHNsZWVwU3RhdGUgPT09IEJvZHkuQVdBS0UgJiYgc3BlZWRTcXVhcmVkIDwgc3BlZWRMaW1pdFNxdWFyZWQpIHsKICAgICAgICAgIHRoaXMuc2xlZXBTdGF0ZSA9IEJvZHkuU0xFRVBZOyAvLyBTbGVlcHkKCiAgICAgICAgICB0aGlzLnRpbWVMYXN0U2xlZXB5ID0gdGltZTsKICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChCb2R5LnNsZWVweUV2ZW50KTsKICAgICAgICB9IGVsc2UgaWYgKHNsZWVwU3RhdGUgPT09IEJvZHkuU0xFRVBZICYmIHNwZWVkU3F1YXJlZCA+IHNwZWVkTGltaXRTcXVhcmVkKSB7CiAgICAgICAgICB0aGlzLndha2VVcCgpOyAvLyBXYWtlIHVwCiAgICAgICAgfSBlbHNlIGlmIChzbGVlcFN0YXRlID09PSBCb2R5LlNMRUVQWSAmJiB0aW1lIC0gdGhpcy50aW1lTGFzdFNsZWVweSA+IHRoaXMuc2xlZXBUaW1lTGltaXQpIHsKICAgICAgICAgIHRoaXMuc2xlZXAoKTsgLy8gU2xlZXBpbmcKCiAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoQm9keS5zbGVlcEV2ZW50KTsKICAgICAgICB9CiAgICAgIH0KICAgIH0KICAgIC8qKgogICAgICogSWYgdGhlIGJvZHkgaXMgc2xlZXBpbmcsIGl0IHNob3VsZCBiZSBpbW1vdmFibGUgLyBoYXZlIGluZmluaXRlIG1hc3MgZHVyaW5nIHNvbHZlLiBXZSBzb2x2ZSBpdCBieSBoYXZpbmcgYSBzZXBhcmF0ZSAic29sdmUgbWFzcyIuCiAgICAgKi8KCgogICAgdXBkYXRlU29sdmVNYXNzUHJvcGVydGllcygpIHsKICAgICAgaWYgKHRoaXMuc2xlZXBTdGF0ZSA9PT0gQm9keS5TTEVFUElORyB8fCB0aGlzLnR5cGUgPT09IEJvZHkuS0lORU1BVElDKSB7CiAgICAgICAgdGhpcy5pbnZNYXNzU29sdmUgPSAwOwogICAgICAgIHRoaXMuaW52SW5lcnRpYVNvbHZlLnNldFplcm8oKTsKICAgICAgICB0aGlzLmludkluZXJ0aWFXb3JsZFNvbHZlLnNldFplcm8oKTsKICAgICAgfSBlbHNlIHsKICAgICAgICB0aGlzLmludk1hc3NTb2x2ZSA9IHRoaXMuaW52TWFzczsKICAgICAgICB0aGlzLmludkluZXJ0aWFTb2x2ZS5jb3B5KHRoaXMuaW52SW5lcnRpYSk7CiAgICAgICAgdGhpcy5pbnZJbmVydGlhV29ybGRTb2x2ZS5jb3B5KHRoaXMuaW52SW5lcnRpYVdvcmxkKTsKICAgICAgfQogICAgfQogICAgLyoqCiAgICAgKiBDb252ZXJ0IGEgd29ybGQgcG9pbnQgdG8gbG9jYWwgYm9keSBmcmFtZS4KICAgICAqLwoKCiAgICBwb2ludFRvTG9jYWxGcmFtZSh3b3JsZFBvaW50LCByZXN1bHQpIHsKICAgICAgaWYgKHJlc3VsdCA9PT0gdm9pZCAwKSB7CiAgICAgICAgcmVzdWx0ID0gbmV3IFZlYzMoKTsKICAgICAgfQoKICAgICAgd29ybGRQb2ludC52c3ViKHRoaXMucG9zaXRpb24sIHJlc3VsdCk7CiAgICAgIHRoaXMucXVhdGVybmlvbi5jb25qdWdhdGUoKS52bXVsdChyZXN1bHQsIHJlc3VsdCk7CiAgICAgIHJldHVybiByZXN1bHQ7CiAgICB9CiAgICAvKioKICAgICAqIENvbnZlcnQgYSB3b3JsZCB2ZWN0b3IgdG8gbG9jYWwgYm9keSBmcmFtZS4KICAgICAqLwoKCiAgICB2ZWN0b3JUb0xvY2FsRnJhbWUod29ybGRWZWN0b3IsIHJlc3VsdCkgewogICAgICBpZiAocmVzdWx0ID09PSB2b2lkIDApIHsKICAgICAgICByZXN1bHQgPSBuZXcgVmVjMygpOwogICAgICB9CgogICAgICB0aGlzLnF1YXRlcm5pb24uY29uanVnYXRlKCkudm11bHQod29ybGRWZWN0b3IsIHJlc3VsdCk7CiAgICAgIHJldHVybiByZXN1bHQ7CiAgICB9CiAgICAvKioKICAgICAqIENvbnZlcnQgYSBsb2NhbCBib2R5IHBvaW50IHRvIHdvcmxkIGZyYW1lLgogICAgICovCgoKICAgIHBvaW50VG9Xb3JsZEZyYW1lKGxvY2FsUG9pbnQsIHJlc3VsdCkgewogICAgICBpZiAocmVzdWx0ID09PSB2b2lkIDApIHsKICAgICAgICByZXN1bHQgPSBuZXcgVmVjMygpOwogICAgICB9CgogICAgICB0aGlzLnF1YXRlcm5pb24udm11bHQobG9jYWxQb2ludCwgcmVzdWx0KTsKICAgICAgcmVzdWx0LnZhZGQodGhpcy5wb3NpdGlvbiwgcmVzdWx0KTsKICAgICAgcmV0dXJuIHJlc3VsdDsKICAgIH0KICAgIC8qKgogICAgICogQ29udmVydCBhIGxvY2FsIGJvZHkgcG9pbnQgdG8gd29ybGQgZnJhbWUuCiAgICAgKi8KCgogICAgdmVjdG9yVG9Xb3JsZEZyYW1lKGxvY2FsVmVjdG9yLCByZXN1bHQpIHsKICAgICAgaWYgKHJlc3VsdCA9PT0gdm9pZCAwKSB7CiAgICAgICAgcmVzdWx0ID0gbmV3IFZlYzMoKTsKICAgICAgfQoKICAgICAgdGhpcy5xdWF0ZXJuaW9uLnZtdWx0KGxvY2FsVmVjdG9yLCByZXN1bHQpOwogICAgICByZXR1cm4gcmVzdWx0OwogICAgfQogICAgLyoqCiAgICAgKiBBZGQgYSBzaGFwZSB0byB0aGUgYm9keSB3aXRoIGEgbG9jYWwgb2Zmc2V0IGFuZCBvcmllbnRhdGlvbi4KICAgICAqIEByZXR1cm4gVGhlIGJvZHkgb2JqZWN0LCBmb3IgY2hhaW5hYmlsaXR5LgogICAgICovCgoKICAgIGFkZFNoYXBlKHNoYXBlLCBfb2Zmc2V0LCBfb3JpZW50YXRpb24pIHsKICAgICAgY29uc3Qgb2Zmc2V0ID0gbmV3IFZlYzMoKTsKICAgICAgY29uc3Qgb3JpZW50YXRpb24gPSBuZXcgUXVhdGVybmlvbigpOwoKICAgICAgaWYgKF9vZmZzZXQpIHsKICAgICAgICBvZmZzZXQuY29weShfb2Zmc2V0KTsKICAgICAgfQoKICAgICAgaWYgKF9vcmllbnRhdGlvbikgewogICAgICAgIG9yaWVudGF0aW9uLmNvcHkoX29yaWVudGF0aW9uKTsKICAgICAgfQoKICAgICAgdGhpcy5zaGFwZXMucHVzaChzaGFwZSk7CiAgICAgIHRoaXMuc2hhcGVPZmZzZXRzLnB1c2gob2Zmc2V0KTsKICAgICAgdGhpcy5zaGFwZU9yaWVudGF0aW9ucy5wdXNoKG9yaWVudGF0aW9uKTsKICAgICAgdGhpcy51cGRhdGVNYXNzUHJvcGVydGllcygpOwogICAgICB0aGlzLnVwZGF0ZUJvdW5kaW5nUmFkaXVzKCk7CiAgICAgIHRoaXMuYWFiYk5lZWRzVXBkYXRlID0gdHJ1ZTsKICAgICAgc2hhcGUuYm9keSA9IHRoaXM7CiAgICAgIHJldHVybiB0aGlzOwogICAgfQogICAgLyoqCiAgICAgKiBSZW1vdmUgYSBzaGFwZSBmcm9tIHRoZSBib2R5LgogICAgICogQHJldHVybiBUaGUgYm9keSBvYmplY3QsIGZvciBjaGFpbmFiaWxpdHkuCiAgICAgKi8KCgogICAgcmVtb3ZlU2hhcGUoc2hhcGUpIHsKICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnNoYXBlcy5pbmRleE9mKHNoYXBlKTsKCiAgICAgIGlmIChpbmRleCA9PT0gLTEpIHsKICAgICAgICBjb25zb2xlLndhcm4oJ1NoYXBlIGRvZXMgbm90IGJlbG9uZyB0byB0aGUgYm9keScpOwogICAgICAgIHJldHVybiB0aGlzOwogICAgICB9CgogICAgICB0aGlzLnNoYXBlcy5zcGxpY2UoaW5kZXgsIDEpOwogICAgICB0aGlzLnNoYXBlT2Zmc2V0cy5zcGxpY2UoaW5kZXgsIDEpOwogICAgICB0aGlzLnNoYXBlT3JpZW50YXRpb25zLnNwbGljZShpbmRleCwgMSk7CiAgICAgIHRoaXMudXBkYXRlTWFzc1Byb3BlcnRpZXMoKTsKICAgICAgdGhpcy51cGRhdGVCb3VuZGluZ1JhZGl1cygpOwogICAgICB0aGlzLmFhYmJOZWVkc1VwZGF0ZSA9IHRydWU7CiAgICAgIHNoYXBlLmJvZHkgPSBudWxsOwogICAgICByZXR1cm4gdGhpczsKICAgIH0KICAgIC8qKgogICAgICogVXBkYXRlIHRoZSBib3VuZGluZyByYWRpdXMgb2YgdGhlIGJvZHkuIFNob3VsZCBiZSBkb25lIGlmIGFueSBvZiB0aGUgc2hhcGVzIGFyZSBjaGFuZ2VkLgogICAgICovCgoKICAgIHVwZGF0ZUJvdW5kaW5nUmFkaXVzKCkgewogICAgICBjb25zdCBzaGFwZXMgPSB0aGlzLnNoYXBlczsKICAgICAgY29uc3Qgc2hhcGVPZmZzZXRzID0gdGhpcy5zaGFwZU9mZnNldHM7CiAgICAgIGNvbnN0IE4gPSBzaGFwZXMubGVuZ3RoOwogICAgICBsZXQgcmFkaXVzID0gMDsKCiAgICAgIGZvciAobGV0IGkgPSAwOyBpICE9PSBOOyBpKyspIHsKICAgICAgICBjb25zdCBzaGFwZSA9IHNoYXBlc1tpXTsKICAgICAgICBzaGFwZS51cGRhdGVCb3VuZGluZ1NwaGVyZVJhZGl1cygpOwogICAgICAgIGNvbnN0IG9mZnNldCA9IHNoYXBlT2Zmc2V0c1tpXS5sZW5ndGgoKTsKICAgICAgICBjb25zdCByID0gc2hhcGUuYm91bmRpbmdTcGhlcmVSYWRpdXM7CgogICAgICAgIGlmIChvZmZzZXQgKyByID4gcmFkaXVzKSB7CiAgICAgICAgICByYWRpdXMgPSBvZmZzZXQgKyByOwogICAgICAgIH0KICAgICAgfQoKICAgICAgdGhpcy5ib3VuZGluZ1JhZGl1cyA9IHJhZGl1czsKICAgIH0KICAgIC8qKgogICAgICogVXBkYXRlcyB0aGUgLmFhYmIKICAgICAqLwoKCiAgICB1cGRhdGVBQUJCKCkgewogICAgICBjb25zdCBzaGFwZXMgPSB0aGlzLnNoYXBlczsKICAgICAgY29uc3Qgc2hhcGVPZmZzZXRzID0gdGhpcy5zaGFwZU9mZnNldHM7CiAgICAgIGNvbnN0IHNoYXBlT3JpZW50YXRpb25zID0gdGhpcy5zaGFwZU9yaWVudGF0aW9uczsKICAgICAgY29uc3QgTiA9IHNoYXBlcy5sZW5ndGg7CiAgICAgIGNvbnN0IG9mZnNldCA9IHRtcFZlYzsKICAgICAgY29uc3Qgb3JpZW50YXRpb24gPSB0bXBRdWF0OwogICAgICBjb25zdCBib2R5UXVhdCA9IHRoaXMucXVhdGVybmlvbjsKICAgICAgY29uc3QgYWFiYiA9IHRoaXMuYWFiYjsKICAgICAgY29uc3Qgc2hhcGVBQUJCID0gdXBkYXRlQUFCQl9zaGFwZUFBQkI7CgogICAgICBmb3IgKGxldCBpID0gMDsgaSAhPT0gTjsgaSsrKSB7CiAgICAgICAgY29uc3Qgc2hhcGUgPSBzaGFwZXNbaV07IC8vIEdldCBzaGFwZSB3b3JsZCBwb3NpdGlvbgoKICAgICAgICBib2R5UXVhdC52bXVsdChzaGFwZU9mZnNldHNbaV0sIG9mZnNldCk7CiAgICAgICAgb2Zmc2V0LnZhZGQodGhpcy5wb3NpdGlvbiwgb2Zmc2V0KTsgLy8gR2V0IHNoYXBlIHdvcmxkIHF1YXRlcm5pb24KCiAgICAgICAgYm9keVF1YXQubXVsdChzaGFwZU9yaWVudGF0aW9uc1tpXSwgb3JpZW50YXRpb24pOyAvLyBHZXQgc2hhcGUgQUFCQgoKICAgICAgICBzaGFwZS5jYWxjdWxhdGVXb3JsZEFBQkIob2Zmc2V0LCBvcmllbnRhdGlvbiwgc2hhcGVBQUJCLmxvd2VyQm91bmQsIHNoYXBlQUFCQi51cHBlckJvdW5kKTsKCiAgICAgICAgaWYgKGkgPT09IDApIHsKICAgICAgICAgIGFhYmIuY29weShzaGFwZUFBQkIpOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICBhYWJiLmV4dGVuZChzaGFwZUFBQkIpOwogICAgICAgIH0KICAgICAgfQoKICAgICAgdGhpcy5hYWJiTmVlZHNVcGRhdGUgPSBmYWxzZTsKICAgIH0KICAgIC8qKgogICAgICogVXBkYXRlIGAuaW5lcnRpYVdvcmxkYCBhbmQgYC5pbnZJbmVydGlhV29ybGRgCiAgICAgKi8KCgogICAgdXBkYXRlSW5lcnRpYVdvcmxkKGZvcmNlKSB7CiAgICAgIGNvbnN0IEkgPSB0aGlzLmludkluZXJ0aWE7CgogICAgICBpZiAoSS54ID09PSBJLnkgJiYgSS55ID09PSBJLnogJiYgIWZvcmNlKSA7IGVsc2UgewogICAgICAgIGNvbnN0IG0xID0gdWl3X20xOwogICAgICAgIGNvbnN0IG0yID0gdWl3X20yOwogICAgICAgIG0xLnNldFJvdGF0aW9uRnJvbVF1YXRlcm5pb24odGhpcy5xdWF0ZXJuaW9uKTsKICAgICAgICBtMS50cmFuc3Bvc2UobTIpOwogICAgICAgIG0xLnNjYWxlKEksIG0xKTsKICAgICAgICBtMS5tbXVsdChtMiwgdGhpcy5pbnZJbmVydGlhV29ybGQpOwogICAgICB9CiAgICB9CiAgICAvKioKICAgICAqIEFwcGx5IGZvcmNlIHRvIGEgcG9pbnQgb2YgdGhlIGJvZHkuIFRoaXMgY291bGQgZm9yIGV4YW1wbGUgYmUgYSBwb2ludCBvbiB0aGUgQm9keSBzdXJmYWNlLgogICAgICogQXBwbHlpbmcgZm9yY2UgdGhpcyB3YXkgd2lsbCBhZGQgdG8gQm9keS5mb3JjZSBhbmQgQm9keS50b3JxdWUuCiAgICAgKiBAcGFyYW0gZm9yY2UgVGhlIGFtb3VudCBvZiBmb3JjZSB0byBhZGQuCiAgICAgKiBAcGFyYW0gcmVsYXRpdmVQb2ludCBBIHBvaW50IHJlbGF0aXZlIHRvIHRoZSBjZW50ZXIgb2YgbWFzcyB0byBhcHBseSB0aGUgZm9yY2Ugb24uCiAgICAgKi8KCgogICAgYXBwbHlGb3JjZShmb3JjZSwgcmVsYXRpdmVQb2ludCkgewogICAgICBpZiAocmVsYXRpdmVQb2ludCA9PT0gdm9pZCAwKSB7CiAgICAgICAgcmVsYXRpdmVQb2ludCA9IG5ldyBWZWMzKCk7CiAgICAgIH0KCiAgICAgIC8vIE5lZWRlZD8KICAgICAgaWYgKHRoaXMudHlwZSAhPT0gQm9keS5EWU5BTUlDKSB7CiAgICAgICAgcmV0dXJuOwogICAgICB9CgogICAgICBpZiAodGhpcy5zbGVlcFN0YXRlID09PSBCb2R5LlNMRUVQSU5HKSB7CiAgICAgICAgdGhpcy53YWtlVXAoKTsKICAgICAgfSAvLyBDb21wdXRlIHByb2R1Y2VkIHJvdGF0aW9uYWwgZm9yY2UKCgogICAgICBjb25zdCByb3RGb3JjZSA9IEJvZHlfYXBwbHlGb3JjZV9yb3RGb3JjZTsKICAgICAgcmVsYXRpdmVQb2ludC5jcm9zcyhmb3JjZSwgcm90Rm9yY2UpOyAvLyBBZGQgbGluZWFyIGZvcmNlCgogICAgICB0aGlzLmZvcmNlLnZhZGQoZm9yY2UsIHRoaXMuZm9yY2UpOyAvLyBBZGQgcm90YXRpb25hbCBmb3JjZQoKICAgICAgdGhpcy50b3JxdWUudmFkZChyb3RGb3JjZSwgdGhpcy50b3JxdWUpOwogICAgfQogICAgLyoqCiAgICAgKiBBcHBseSBmb3JjZSB0byBhIGxvY2FsIHBvaW50IGluIHRoZSBib2R5LgogICAgICogQHBhcmFtIGZvcmNlIFRoZSBmb3JjZSB2ZWN0b3IgdG8gYXBwbHksIGRlZmluZWQgbG9jYWxseSBpbiB0aGUgYm9keSBmcmFtZS4KICAgICAqIEBwYXJhbSBsb2NhbFBvaW50IEEgbG9jYWwgcG9pbnQgaW4gdGhlIGJvZHkgdG8gYXBwbHkgdGhlIGZvcmNlIG9uLgogICAgICovCgoKICAgIGFwcGx5TG9jYWxGb3JjZShsb2NhbEZvcmNlLCBsb2NhbFBvaW50KSB7CiAgICAgIGlmIChsb2NhbFBvaW50ID09PSB2b2lkIDApIHsKICAgICAgICBsb2NhbFBvaW50ID0gbmV3IFZlYzMoKTsKICAgICAgfQoKICAgICAgaWYgKHRoaXMudHlwZSAhPT0gQm9keS5EWU5BTUlDKSB7CiAgICAgICAgcmV0dXJuOwogICAgICB9CgogICAgICBjb25zdCB3b3JsZEZvcmNlID0gQm9keV9hcHBseUxvY2FsRm9yY2Vfd29ybGRGb3JjZTsKICAgICAgY29uc3QgcmVsYXRpdmVQb2ludFdvcmxkID0gQm9keV9hcHBseUxvY2FsRm9yY2VfcmVsYXRpdmVQb2ludFdvcmxkOyAvLyBUcmFuc2Zvcm0gdGhlIGZvcmNlIHZlY3RvciB0byB3b3JsZCBzcGFjZQoKICAgICAgdGhpcy52ZWN0b3JUb1dvcmxkRnJhbWUobG9jYWxGb3JjZSwgd29ybGRGb3JjZSk7CiAgICAgIHRoaXMudmVjdG9yVG9Xb3JsZEZyYW1lKGxvY2FsUG9pbnQsIHJlbGF0aXZlUG9pbnRXb3JsZCk7CiAgICAgIHRoaXMuYXBwbHlGb3JjZSh3b3JsZEZvcmNlLCByZWxhdGl2ZVBvaW50V29ybGQpOwogICAgfQogICAgLyoqCiAgICAgKiBBcHBseSB0b3JxdWUgdG8gdGhlIGJvZHkuCiAgICAgKiBAcGFyYW0gdG9ycXVlIFRoZSBhbW91bnQgb2YgdG9ycXVlIHRvIGFkZC4KICAgICAqLwoKCiAgICBhcHBseVRvcnF1ZSh0b3JxdWUpIHsKICAgICAgaWYgKHRoaXMudHlwZSAhPT0gQm9keS5EWU5BTUlDKSB7CiAgICAgICAgcmV0dXJuOwogICAgICB9CgogICAgICBpZiAodGhpcy5zbGVlcFN0YXRlID09PSBCb2R5LlNMRUVQSU5HKSB7CiAgICAgICAgdGhpcy53YWtlVXAoKTsKICAgICAgfSAvLyBBZGQgcm90YXRpb25hbCBmb3JjZQoKCiAgICAgIHRoaXMudG9ycXVlLnZhZGQodG9ycXVlLCB0aGlzLnRvcnF1ZSk7CiAgICB9CiAgICAvKioKICAgICAqIEFwcGx5IGltcHVsc2UgdG8gYSBwb2ludCBvZiB0aGUgYm9keS4gVGhpcyBjb3VsZCBmb3IgZXhhbXBsZSBiZSBhIHBvaW50IG9uIHRoZSBCb2R5IHN1cmZhY2UuCiAgICAgKiBBbiBpbXB1bHNlIGlzIGEgZm9yY2UgYWRkZWQgdG8gYSBib2R5IGR1cmluZyBhIHNob3J0IHBlcmlvZCBvZiB0aW1lIChpbXB1bHNlID0gZm9yY2UgKiB0aW1lKS4KICAgICAqIEltcHVsc2VzIHdpbGwgYmUgYWRkZWQgdG8gQm9keS52ZWxvY2l0eSBhbmQgQm9keS5hbmd1bGFyVmVsb2NpdHkuCiAgICAgKiBAcGFyYW0gaW1wdWxzZSBUaGUgYW1vdW50IG9mIGltcHVsc2UgdG8gYWRkLgogICAgICogQHBhcmFtIHJlbGF0aXZlUG9pbnQgQSBwb2ludCByZWxhdGl2ZSB0byB0aGUgY2VudGVyIG9mIG1hc3MgdG8gYXBwbHkgdGhlIGZvcmNlIG9uLgogICAgICovCgoKICAgIGFwcGx5SW1wdWxzZShpbXB1bHNlLCByZWxhdGl2ZVBvaW50KSB7CiAgICAgIGlmIChyZWxhdGl2ZVBvaW50ID09PSB2b2lkIDApIHsKICAgICAgICByZWxhdGl2ZVBvaW50ID0gbmV3IFZlYzMoKTsKICAgICAgfQoKICAgICAgaWYgKHRoaXMudHlwZSAhPT0gQm9keS5EWU5BTUlDKSB7CiAgICAgICAgcmV0dXJuOwogICAgICB9CgogICAgICBpZiAodGhpcy5zbGVlcFN0YXRlID09PSBCb2R5LlNMRUVQSU5HKSB7CiAgICAgICAgdGhpcy53YWtlVXAoKTsKICAgICAgfSAvLyBDb21wdXRlIHBvaW50IHBvc2l0aW9uIHJlbGF0aXZlIHRvIHRoZSBib2R5IGNlbnRlcgoKCiAgICAgIGNvbnN0IHIgPSByZWxhdGl2ZVBvaW50OyAvLyBDb21wdXRlIHByb2R1Y2VkIGNlbnRyYWwgaW1wdWxzZSB2ZWxvY2l0eQoKICAgICAgY29uc3QgdmVsbyA9IEJvZHlfYXBwbHlJbXB1bHNlX3ZlbG87CiAgICAgIHZlbG8uY29weShpbXB1bHNlKTsKICAgICAgdmVsby5zY2FsZSh0aGlzLmludk1hc3MsIHZlbG8pOyAvLyBBZGQgbGluZWFyIGltcHVsc2UKCiAgICAgIHRoaXMudmVsb2NpdHkudmFkZCh2ZWxvLCB0aGlzLnZlbG9jaXR5KTsgLy8gQ29tcHV0ZSBwcm9kdWNlZCByb3RhdGlvbmFsIGltcHVsc2UgdmVsb2NpdHkKCiAgICAgIGNvbnN0IHJvdFZlbG8gPSBCb2R5X2FwcGx5SW1wdWxzZV9yb3RWZWxvOwogICAgICByLmNyb3NzKGltcHVsc2UsIHJvdFZlbG8pOwogICAgICAvKgogICAgICAgcm90VmVsby54ICo9IHRoaXMuaW52SW5lcnRpYS54OwogICAgICAgcm90VmVsby55ICo9IHRoaXMuaW52SW5lcnRpYS55OwogICAgICAgcm90VmVsby56ICo9IHRoaXMuaW52SW5lcnRpYS56OwogICAgICAgKi8KCiAgICAgIHRoaXMuaW52SW5lcnRpYVdvcmxkLnZtdWx0KHJvdFZlbG8sIHJvdFZlbG8pOyAvLyBBZGQgcm90YXRpb25hbCBJbXB1bHNlCgogICAgICB0aGlzLmFuZ3VsYXJWZWxvY2l0eS52YWRkKHJvdFZlbG8sIHRoaXMuYW5ndWxhclZlbG9jaXR5KTsKICAgIH0KICAgIC8qKgogICAgICogQXBwbHkgbG9jYWxseS1kZWZpbmVkIGltcHVsc2UgdG8gYSBsb2NhbCBwb2ludCBpbiB0aGUgYm9keS4KICAgICAqIEBwYXJhbSBmb3JjZSBUaGUgZm9yY2UgdmVjdG9yIHRvIGFwcGx5LCBkZWZpbmVkIGxvY2FsbHkgaW4gdGhlIGJvZHkgZnJhbWUuCiAgICAgKiBAcGFyYW0gbG9jYWxQb2ludCBBIGxvY2FsIHBvaW50IGluIHRoZSBib2R5IHRvIGFwcGx5IHRoZSBmb3JjZSBvbi4KICAgICAqLwoKCiAgICBhcHBseUxvY2FsSW1wdWxzZShsb2NhbEltcHVsc2UsIGxvY2FsUG9pbnQpIHsKICAgICAgaWYgKGxvY2FsUG9pbnQgPT09IHZvaWQgMCkgewogICAgICAgIGxvY2FsUG9pbnQgPSBuZXcgVmVjMygpOwogICAgICB9CgogICAgICBpZiAodGhpcy50eXBlICE9PSBCb2R5LkRZTkFNSUMpIHsKICAgICAgICByZXR1cm47CiAgICAgIH0KCiAgICAgIGNvbnN0IHdvcmxkSW1wdWxzZSA9IEJvZHlfYXBwbHlMb2NhbEltcHVsc2Vfd29ybGRJbXB1bHNlOwogICAgICBjb25zdCByZWxhdGl2ZVBvaW50V29ybGQgPSBCb2R5X2FwcGx5TG9jYWxJbXB1bHNlX3JlbGF0aXZlUG9pbnQ7IC8vIFRyYW5zZm9ybSB0aGUgZm9yY2UgdmVjdG9yIHRvIHdvcmxkIHNwYWNlCgogICAgICB0aGlzLnZlY3RvclRvV29ybGRGcmFtZShsb2NhbEltcHVsc2UsIHdvcmxkSW1wdWxzZSk7CiAgICAgIHRoaXMudmVjdG9yVG9Xb3JsZEZyYW1lKGxvY2FsUG9pbnQsIHJlbGF0aXZlUG9pbnRXb3JsZCk7CiAgICAgIHRoaXMuYXBwbHlJbXB1bHNlKHdvcmxkSW1wdWxzZSwgcmVsYXRpdmVQb2ludFdvcmxkKTsKICAgIH0KICAgIC8qKgogICAgICogU2hvdWxkIGJlIGNhbGxlZCB3aGVuZXZlciB5b3UgY2hhbmdlIHRoZSBib2R5IHNoYXBlIG9yIG1hc3MuCiAgICAgKi8KCgogICAgdXBkYXRlTWFzc1Byb3BlcnRpZXMoKSB7CiAgICAgIGNvbnN0IGhhbGZFeHRlbnRzID0gQm9keV91cGRhdGVNYXNzUHJvcGVydGllc19oYWxmRXh0ZW50czsKICAgICAgdGhpcy5pbnZNYXNzID0gdGhpcy5tYXNzID4gMCA/IDEuMCAvIHRoaXMubWFzcyA6IDA7CiAgICAgIGNvbnN0IEkgPSB0aGlzLmluZXJ0aWE7CiAgICAgIGNvbnN0IGZpeGVkID0gdGhpcy5maXhlZFJvdGF0aW9uOyAvLyBBcHByb3hpbWF0ZSB3aXRoIEFBQkIgYm94CgogICAgICB0aGlzLnVwZGF0ZUFBQkIoKTsKICAgICAgaGFsZkV4dGVudHMuc2V0KCh0aGlzLmFhYmIudXBwZXJCb3VuZC54IC0gdGhpcy5hYWJiLmxvd2VyQm91bmQueCkgLyAyLCAodGhpcy5hYWJiLnVwcGVyQm91bmQueSAtIHRoaXMuYWFiYi5sb3dlckJvdW5kLnkpIC8gMiwgKHRoaXMuYWFiYi51cHBlckJvdW5kLnogLSB0aGlzLmFhYmIubG93ZXJCb3VuZC56KSAvIDIpOwogICAgICBCb3guY2FsY3VsYXRlSW5lcnRpYShoYWxmRXh0ZW50cywgdGhpcy5tYXNzLCBJKTsKICAgICAgdGhpcy5pbnZJbmVydGlhLnNldChJLnggPiAwICYmICFmaXhlZCA/IDEuMCAvIEkueCA6IDAsIEkueSA+IDAgJiYgIWZpeGVkID8gMS4wIC8gSS55IDogMCwgSS56ID4gMCAmJiAhZml4ZWQgPyAxLjAgLyBJLnogOiAwKTsKICAgICAgdGhpcy51cGRhdGVJbmVydGlhV29ybGQodHJ1ZSk7CiAgICB9CiAgICAvKioKICAgICAqIEdldCB3b3JsZCB2ZWxvY2l0eSBvZiBhIHBvaW50IGluIHRoZSBib2R5LgogICAgICogQHBhcmFtIHdvcmxkUG9pbnQKICAgICAqIEBwYXJhbSByZXN1bHQKICAgICAqIEByZXR1cm4gVGhlIHJlc3VsdCB2ZWN0b3IuCiAgICAgKi8KCgogICAgZ2V0VmVsb2NpdHlBdFdvcmxkUG9pbnQod29ybGRQb2ludCwgcmVzdWx0KSB7CiAgICAgIGNvbnN0IHIgPSBuZXcgVmVjMygpOwogICAgICB3b3JsZFBvaW50LnZzdWIodGhpcy5wb3NpdGlvbiwgcik7CiAgICAgIHRoaXMuYW5ndWxhclZlbG9jaXR5LmNyb3NzKHIsIHJlc3VsdCk7CiAgICAgIHRoaXMudmVsb2NpdHkudmFkZChyZXN1bHQsIHJlc3VsdCk7CiAgICAgIHJldHVybiByZXN1bHQ7CiAgICB9CiAgICAvKioKICAgICAqIE1vdmUgdGhlIGJvZHkgZm9yd2FyZCBpbiB0aW1lLgogICAgICogQHBhcmFtIGR0IFRpbWUgc3RlcAogICAgICogQHBhcmFtIHF1YXROb3JtYWxpemUgU2V0IHRvIHRydWUgdG8gbm9ybWFsaXplIHRoZSBib2R5IHF1YXRlcm5pb24KICAgICAqIEBwYXJhbSBxdWF0Tm9ybWFsaXplRmFzdCBJZiB0aGUgcXVhdGVybmlvbiBzaG91bGQgYmUgbm9ybWFsaXplZCB1c2luZyAiZmFzdCIgcXVhdGVybmlvbiBub3JtYWxpemF0aW9uCiAgICAgKi8KCgogICAgaW50ZWdyYXRlKGR0LCBxdWF0Tm9ybWFsaXplLCBxdWF0Tm9ybWFsaXplRmFzdCkgewogICAgICAvLyBTYXZlIHByZXZpb3VzIHBvc2l0aW9uCiAgICAgIHRoaXMucHJldmlvdXNQb3NpdGlvbi5jb3B5KHRoaXMucG9zaXRpb24pOwogICAgICB0aGlzLnByZXZpb3VzUXVhdGVybmlvbi5jb3B5KHRoaXMucXVhdGVybmlvbik7CgogICAgICBpZiAoISh0aGlzLnR5cGUgPT09IEJvZHkuRFlOQU1JQyB8fCB0aGlzLnR5cGUgPT09IEJvZHkuS0lORU1BVElDKSB8fCB0aGlzLnNsZWVwU3RhdGUgPT09IEJvZHkuU0xFRVBJTkcpIHsKICAgICAgICAvLyBPbmx5IGZvciBkeW5hbWljCiAgICAgICAgcmV0dXJuOwogICAgICB9CgogICAgICBjb25zdCB2ZWxvID0gdGhpcy52ZWxvY2l0eTsKICAgICAgY29uc3QgYW5ndWxhclZlbG8gPSB0aGlzLmFuZ3VsYXJWZWxvY2l0eTsKICAgICAgY29uc3QgcG9zID0gdGhpcy5wb3NpdGlvbjsKICAgICAgY29uc3QgZm9yY2UgPSB0aGlzLmZvcmNlOwogICAgICBjb25zdCB0b3JxdWUgPSB0aGlzLnRvcnF1ZTsKICAgICAgY29uc3QgcXVhdCA9IHRoaXMucXVhdGVybmlvbjsKICAgICAgY29uc3QgaW52TWFzcyA9IHRoaXMuaW52TWFzczsKICAgICAgY29uc3QgaW52SW5lcnRpYSA9IHRoaXMuaW52SW5lcnRpYVdvcmxkOwogICAgICBjb25zdCBsaW5lYXJGYWN0b3IgPSB0aGlzLmxpbmVhckZhY3RvcjsKICAgICAgY29uc3QgaU1kdCA9IGludk1hc3MgKiBkdDsKICAgICAgdmVsby54ICs9IGZvcmNlLnggKiBpTWR0ICogbGluZWFyRmFjdG9yLng7CiAgICAgIHZlbG8ueSArPSBmb3JjZS55ICogaU1kdCAqIGxpbmVhckZhY3Rvci55OwogICAgICB2ZWxvLnogKz0gZm9yY2UueiAqIGlNZHQgKiBsaW5lYXJGYWN0b3IuejsKICAgICAgY29uc3QgZSA9IGludkluZXJ0aWEuZWxlbWVudHM7CiAgICAgIGNvbnN0IGFuZ3VsYXJGYWN0b3IgPSB0aGlzLmFuZ3VsYXJGYWN0b3I7CiAgICAgIGNvbnN0IHR4ID0gdG9ycXVlLnggKiBhbmd1bGFyRmFjdG9yLng7CiAgICAgIGNvbnN0IHR5ID0gdG9ycXVlLnkgKiBhbmd1bGFyRmFjdG9yLnk7CiAgICAgIGNvbnN0IHR6ID0gdG9ycXVlLnogKiBhbmd1bGFyRmFjdG9yLno7CiAgICAgIGFuZ3VsYXJWZWxvLnggKz0gZHQgKiAoZVswXSAqIHR4ICsgZVsxXSAqIHR5ICsgZVsyXSAqIHR6KTsKICAgICAgYW5ndWxhclZlbG8ueSArPSBkdCAqIChlWzNdICogdHggKyBlWzRdICogdHkgKyBlWzVdICogdHopOwogICAgICBhbmd1bGFyVmVsby56ICs9IGR0ICogKGVbNl0gKiB0eCArIGVbN10gKiB0eSArIGVbOF0gKiB0eik7IC8vIFVzZSBuZXcgdmVsb2NpdHkgIC0gbGVhcCBmcm9nCgogICAgICBwb3MueCArPSB2ZWxvLnggKiBkdDsKICAgICAgcG9zLnkgKz0gdmVsby55ICogZHQ7CiAgICAgIHBvcy56ICs9IHZlbG8ueiAqIGR0OwogICAgICBxdWF0LmludGVncmF0ZSh0aGlzLmFuZ3VsYXJWZWxvY2l0eSwgZHQsIHRoaXMuYW5ndWxhckZhY3RvciwgcXVhdCk7CgogICAgICBpZiAocXVhdE5vcm1hbGl6ZSkgewogICAgICAgIGlmIChxdWF0Tm9ybWFsaXplRmFzdCkgewogICAgICAgICAgcXVhdC5ub3JtYWxpemVGYXN0KCk7CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgIHF1YXQubm9ybWFsaXplKCk7CiAgICAgICAgfQogICAgICB9CgogICAgICB0aGlzLmFhYmJOZWVkc1VwZGF0ZSA9IHRydWU7IC8vIFVwZGF0ZSB3b3JsZCBpbmVydGlhCgogICAgICB0aGlzLnVwZGF0ZUluZXJ0aWFXb3JsZCgpOwogICAgfQoKICB9CiAgQm9keS5pZENvdW50ZXIgPSAwOwogIEJvZHkuQ09MTElERV9FVkVOVF9OQU1FID0gJ2NvbGxpZGUnOwogIEJvZHkuRFlOQU1JQyA9IEJPRFlfVFlQRVMuRFlOQU1JQzsKICBCb2R5LlNUQVRJQyA9IEJPRFlfVFlQRVMuU1RBVElDOwogIEJvZHkuS0lORU1BVElDID0gQk9EWV9UWVBFUy5LSU5FTUFUSUM7CiAgQm9keS5BV0FLRSA9IEJPRFlfU0xFRVBfU1RBVEVTLkFXQUtFOwogIEJvZHkuU0xFRVBZID0gQk9EWV9TTEVFUF9TVEFURVMuU0xFRVBZOwogIEJvZHkuU0xFRVBJTkcgPSBCT0RZX1NMRUVQX1NUQVRFUy5TTEVFUElORzsKICBCb2R5Lndha2V1cEV2ZW50ID0gewogICAgdHlwZTogJ3dha2V1cCcKICB9OwogIEJvZHkuc2xlZXB5RXZlbnQgPSB7CiAgICB0eXBlOiAnc2xlZXB5JwogIH07CiAgQm9keS5zbGVlcEV2ZW50ID0gewogICAgdHlwZTogJ3NsZWVwJwogIH07CiAgY29uc3QgdG1wVmVjID0gbmV3IFZlYzMoKTsKICBjb25zdCB0bXBRdWF0ID0gbmV3IFF1YXRlcm5pb24oKTsKICBjb25zdCB1cGRhdGVBQUJCX3NoYXBlQUFCQiA9IG5ldyBBQUJCKCk7CiAgY29uc3QgdWl3X20xID0gbmV3IE1hdDMoKTsKICBjb25zdCB1aXdfbTIgPSBuZXcgTWF0MygpOwogIG5ldyBNYXQzKCk7CiAgY29uc3QgQm9keV9hcHBseUZvcmNlX3JvdEZvcmNlID0gbmV3IFZlYzMoKTsKICBjb25zdCBCb2R5X2FwcGx5TG9jYWxGb3JjZV93b3JsZEZvcmNlID0gbmV3IFZlYzMoKTsKICBjb25zdCBCb2R5X2FwcGx5TG9jYWxGb3JjZV9yZWxhdGl2ZVBvaW50V29ybGQgPSBuZXcgVmVjMygpOwogIGNvbnN0IEJvZHlfYXBwbHlJbXB1bHNlX3ZlbG8gPSBuZXcgVmVjMygpOwogIGNvbnN0IEJvZHlfYXBwbHlJbXB1bHNlX3JvdFZlbG8gPSBuZXcgVmVjMygpOwogIGNvbnN0IEJvZHlfYXBwbHlMb2NhbEltcHVsc2Vfd29ybGRJbXB1bHNlID0gbmV3IFZlYzMoKTsKICBjb25zdCBCb2R5X2FwcGx5TG9jYWxJbXB1bHNlX3JlbGF0aXZlUG9pbnQgPSBuZXcgVmVjMygpOwogIGNvbnN0IEJvZHlfdXBkYXRlTWFzc1Byb3BlcnRpZXNfaGFsZkV4dGVudHMgPSBuZXcgVmVjMygpOwoKICAvKioKICAgKiBCYXNlIGNsYXNzIGZvciBicm9hZHBoYXNlIGltcGxlbWVudGF0aW9ucwogICAqIEBhdXRob3Igc2NodGVwcGUKICAgKi8KICBjbGFzcyBCcm9hZHBoYXNlIHsKICAgIC8qKgogICAgICogVGhlIHdvcmxkIHRvIHNlYXJjaCBmb3IgY29sbGlzaW9ucyBpbi4KICAgICAqLwoKICAgIC8qKgogICAgICogSWYgc2V0IHRvIHRydWUsIHRoZSBicm9hZHBoYXNlIHVzZXMgYm91bmRpbmcgYm94ZXMgZm9yIGludGVyc2VjdGlvbiB0ZXN0cywgZWxzZSBpdCB1c2VzIGJvdW5kaW5nIHNwaGVyZXMuCiAgICAgKi8KCiAgICAvKioKICAgICAqIFNldCB0byB0cnVlIGlmIHRoZSBvYmplY3RzIGluIHRoZSB3b3JsZCBtb3ZlZC4KICAgICAqLwogICAgY29uc3RydWN0b3IoKSB7CiAgICAgIHRoaXMud29ybGQgPSBudWxsOwogICAgICB0aGlzLnVzZUJvdW5kaW5nQm94ZXMgPSBmYWxzZTsKICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7CiAgICB9CiAgICAvKioKICAgICAqIEdldCB0aGUgY29sbGlzaW9uIHBhaXJzIGZyb20gdGhlIHdvcmxkCiAgICAgKiBAcGFyYW0gd29ybGQgVGhlIHdvcmxkIHRvIHNlYXJjaCBpbgogICAgICogQHBhcmFtIHAxIEVtcHR5IGFycmF5IHRvIGJlIGZpbGxlZCB3aXRoIGJvZHkgb2JqZWN0cwogICAgICogQHBhcmFtIHAyIEVtcHR5IGFycmF5IHRvIGJlIGZpbGxlZCB3aXRoIGJvZHkgb2JqZWN0cwogICAgICovCgoKICAgIGNvbGxpc2lvblBhaXJzKHdvcmxkLCBwMSwgcDIpIHsKICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb2xsaXNpb25QYWlycyBub3QgaW1wbGVtZW50ZWQgZm9yIHRoaXMgQnJvYWRQaGFzZSBjbGFzcyEnKTsKICAgIH0KICAgIC8qKgogICAgICogQ2hlY2sgaWYgYSBib2R5IHBhaXIgbmVlZHMgdG8gYmUgaW50ZXJzZWN0aW9uIHRlc3RlZCBhdCBhbGwuCiAgICAgKi8KCgogICAgbmVlZEJyb2FkcGhhc2VDb2xsaXNpb24oYm9keUEsIGJvZHlCKSB7CiAgICAgIC8vIENoZWNrIGNvbGxpc2lvbiBmaWx0ZXIgbWFza3MKICAgICAgaWYgKChib2R5QS5jb2xsaXNpb25GaWx0ZXJHcm91cCAmIGJvZHlCLmNvbGxpc2lvbkZpbHRlck1hc2spID09PSAwIHx8IChib2R5Qi5jb2xsaXNpb25GaWx0ZXJHcm91cCAmIGJvZHlBLmNvbGxpc2lvbkZpbHRlck1hc2spID09PSAwKSB7CiAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgICB9IC8vIENoZWNrIHR5cGVzCgoKICAgICAgaWYgKCgoYm9keUEudHlwZSAmIEJvZHkuU1RBVElDKSAhPT0gMCB8fCBib2R5QS5zbGVlcFN0YXRlID09PSBCb2R5LlNMRUVQSU5HKSAmJiAoKGJvZHlCLnR5cGUgJiBCb2R5LlNUQVRJQykgIT09IDAgfHwgYm9keUIuc2xlZXBTdGF0ZSA9PT0gQm9keS5TTEVFUElORykpIHsKICAgICAgICAvLyBCb3RoIGJvZGllcyBhcmUgc3RhdGljIG9yIHNsZWVwaW5nLiBTa2lwLgogICAgICAgIHJldHVybiBmYWxzZTsKICAgICAgfQoKICAgICAgcmV0dXJuIHRydWU7CiAgICB9CiAgICAvKioKICAgICAqIENoZWNrIGlmIHRoZSBib3VuZGluZyB2b2x1bWVzIG9mIHR3byBib2RpZXMgaW50ZXJzZWN0LgogICAgICovCgoKICAgIGludGVyc2VjdGlvblRlc3QoYm9keUEsIGJvZHlCLCBwYWlyczEsIHBhaXJzMikgewogICAgICBpZiAodGhpcy51c2VCb3VuZGluZ0JveGVzKSB7CiAgICAgICAgdGhpcy5kb0JvdW5kaW5nQm94QnJvYWRwaGFzZShib2R5QSwgYm9keUIsIHBhaXJzMSwgcGFpcnMyKTsKICAgICAgfSBlbHNlIHsKICAgICAgICB0aGlzLmRvQm91bmRpbmdTcGhlcmVCcm9hZHBoYXNlKGJvZHlBLCBib2R5QiwgcGFpcnMxLCBwYWlyczIpOwogICAgICB9CiAgICB9CiAgICAvKioKICAgICAqIENoZWNrIGlmIHRoZSBib3VuZGluZyBzcGhlcmVzIG9mIHR3byBib2RpZXMgYXJlIGludGVyc2VjdGluZy4KICAgICAqIEBwYXJhbSBwYWlyczEgYm9keUEgaXMgYXBwZW5kZWQgdG8gdGhpcyBhcnJheSBpZiBpbnRlcnNlY3Rpb24KICAgICAqIEBwYXJhbSBwYWlyczIgYm9keUIgaXMgYXBwZW5kZWQgdG8gdGhpcyBhcnJheSBpZiBpbnRlcnNlY3Rpb24KICAgICAqLwoKCiAgICBkb0JvdW5kaW5nU3BoZXJlQnJvYWRwaGFzZShib2R5QSwgYm9keUIsIHBhaXJzMSwgcGFpcnMyKSB7CiAgICAgIGNvbnN0IHIgPSBCcm9hZHBoYXNlX2NvbGxpc2lvblBhaXJzX3I7CiAgICAgIGJvZHlCLnBvc2l0aW9uLnZzdWIoYm9keUEucG9zaXRpb24sIHIpOwogICAgICBjb25zdCBib3VuZGluZ1JhZGl1c1N1bTIgPSAoYm9keUEuYm91bmRpbmdSYWRpdXMgKyBib2R5Qi5ib3VuZGluZ1JhZGl1cykgKiogMjsKICAgICAgY29uc3Qgbm9ybTIgPSByLmxlbmd0aFNxdWFyZWQoKTsKCiAgICAgIGlmIChub3JtMiA8IGJvdW5kaW5nUmFkaXVzU3VtMikgewogICAgICAgIHBhaXJzMS5wdXNoKGJvZHlBKTsKICAgICAgICBwYWlyczIucHVzaChib2R5Qik7CiAgICAgIH0KICAgIH0KICAgIC8qKgogICAgICogQ2hlY2sgaWYgdGhlIGJvdW5kaW5nIGJveGVzIG9mIHR3byBib2RpZXMgYXJlIGludGVyc2VjdGluZy4KICAgICAqLwoKCiAgICBkb0JvdW5kaW5nQm94QnJvYWRwaGFzZShib2R5QSwgYm9keUIsIHBhaXJzMSwgcGFpcnMyKSB7CiAgICAgIGlmIChib2R5QS5hYWJiTmVlZHNVcGRhdGUpIHsKICAgICAgICBib2R5QS51cGRhdGVBQUJCKCk7CiAgICAgIH0KCiAgICAgIGlmIChib2R5Qi5hYWJiTmVlZHNVcGRhdGUpIHsKICAgICAgICBib2R5Qi51cGRhdGVBQUJCKCk7CiAgICAgIH0gLy8gQ2hlY2sgQUFCQiAvIEFBQkIKCgogICAgICBpZiAoYm9keUEuYWFiYi5vdmVybGFwcyhib2R5Qi5hYWJiKSkgewogICAgICAgIHBhaXJzMS5wdXNoKGJvZHlBKTsKICAgICAgICBwYWlyczIucHVzaChib2R5Qik7CiAgICAgIH0KICAgIH0KICAgIC8qKgogICAgICogUmVtb3ZlcyBkdXBsaWNhdGUgcGFpcnMgZnJvbSB0aGUgcGFpciBhcnJheXMuCiAgICAgKi8KCgogICAgbWFrZVBhaXJzVW5pcXVlKHBhaXJzMSwgcGFpcnMyKSB7CiAgICAgIGNvbnN0IHQgPSBCcm9hZHBoYXNlX21ha2VQYWlyc1VuaXF1ZV90ZW1wOwogICAgICBjb25zdCBwMSA9IEJyb2FkcGhhc2VfbWFrZVBhaXJzVW5pcXVlX3AxOwogICAgICBjb25zdCBwMiA9IEJyb2FkcGhhc2VfbWFrZVBhaXJzVW5pcXVlX3AyOwogICAgICBjb25zdCBOID0gcGFpcnMxLmxlbmd0aDsKCiAgICAgIGZvciAobGV0IGkgPSAwOyBpICE9PSBOOyBpKyspIHsKICAgICAgICBwMVtpXSA9IHBhaXJzMVtpXTsKICAgICAgICBwMltpXSA9IHBhaXJzMltpXTsKICAgICAgfQoKICAgICAgcGFpcnMxLmxlbmd0aCA9IDA7CiAgICAgIHBhaXJzMi5sZW5ndGggPSAwOwoKICAgICAgZm9yIChsZXQgaSA9IDA7IGkgIT09IE47IGkrKykgewogICAgICAgIGNvbnN0IGlkMSA9IHAxW2ldLmlkOwogICAgICAgIGNvbnN0IGlkMiA9IHAyW2ldLmlkOwogICAgICAgIGNvbnN0IGtleSA9IGlkMSA8IGlkMiA/IGAke2lkMX0sJHtpZDJ9YCA6IGAke2lkMn0sJHtpZDF9YDsKICAgICAgICB0W2tleV0gPSBpOwogICAgICAgIHQua2V5cy5wdXNoKGtleSk7CiAgICAgIH0KCiAgICAgIGZvciAobGV0IGkgPSAwOyBpICE9PSB0LmtleXMubGVuZ3RoOyBpKyspIHsKICAgICAgICBjb25zdCBrZXkgPSB0LmtleXMucG9wKCk7CiAgICAgICAgY29uc3QgcGFpckluZGV4ID0gdFtrZXldOwogICAgICAgIHBhaXJzMS5wdXNoKHAxW3BhaXJJbmRleF0pOwogICAgICAgIHBhaXJzMi5wdXNoKHAyW3BhaXJJbmRleF0pOwogICAgICAgIGRlbGV0ZSB0W2tleV07CiAgICAgIH0KICAgIH0KICAgIC8qKgogICAgICogVG8gYmUgaW1wbGVtZW50ZWQgYnkgc3ViY2Fzc2VzCiAgICAgKi8KCgogICAgc2V0V29ybGQod29ybGQpIHt9CiAgICAvKioKICAgICAqIENoZWNrIGlmIHRoZSBib3VuZGluZyBzcGhlcmVzIG9mIHR3byBib2RpZXMgb3ZlcmxhcC4KICAgICAqLwoKCiAgICBzdGF0aWMgYm91bmRpbmdTcGhlcmVDaGVjayhib2R5QSwgYm9keUIpIHsKICAgICAgY29uc3QgZGlzdCA9IG5ldyBWZWMzKCk7IC8vIGJzY19kaXN0OwoKICAgICAgYm9keUEucG9zaXRpb24udnN1Yihib2R5Qi5wb3NpdGlvbiwgZGlzdCk7CiAgICAgIGNvbnN0IHNhID0gYm9keUEuc2hhcGVzWzBdOwogICAgICBjb25zdCBzYiA9IGJvZHlCLnNoYXBlc1swXTsKICAgICAgcmV0dXJuIE1hdGgucG93KHNhLmJvdW5kaW5nU3BoZXJlUmFkaXVzICsgc2IuYm91bmRpbmdTcGhlcmVSYWRpdXMsIDIpID4gZGlzdC5sZW5ndGhTcXVhcmVkKCk7CiAgICB9CiAgICAvKioKICAgICAqIFJldHVybnMgYWxsIHRoZSBib2RpZXMgd2l0aGluIHRoZSBBQUJCLgogICAgICovCgoKICAgIGFhYmJRdWVyeSh3b3JsZCwgYWFiYiwgcmVzdWx0KSB7CiAgICAgIGNvbnNvbGUud2FybignLmFhYmJRdWVyeSBpcyBub3QgaW1wbGVtZW50ZWQgaW4gdGhpcyBCcm9hZHBoYXNlIHN1YmNsYXNzLicpOwogICAgICByZXR1cm4gW107CiAgICB9CgogIH0gLy8gVGVtcCBvYmplY3RzCgogIGNvbnN0IEJyb2FkcGhhc2VfY29sbGlzaW9uUGFpcnNfciA9IG5ldyBWZWMzKCk7CiAgbmV3IFZlYzMoKTsKICBuZXcgUXVhdGVybmlvbigpOwogIG5ldyBWZWMzKCk7CiAgY29uc3QgQnJvYWRwaGFzZV9tYWtlUGFpcnNVbmlxdWVfdGVtcCA9IHsKICAgIGtleXM6IFtdCiAgfTsKICBjb25zdCBCcm9hZHBoYXNlX21ha2VQYWlyc1VuaXF1ZV9wMSA9IFtdOwogIGNvbnN0IEJyb2FkcGhhc2VfbWFrZVBhaXJzVW5pcXVlX3AyID0gW107CiAgbmV3IFZlYzMoKTsKICBuZXcgVmVjMygpOwogIG5ldyBWZWMzKCk7CgogIC8qKgogICAqIE5haXZlIGJyb2FkcGhhc2UgaW1wbGVtZW50YXRpb24sIHVzZWQgaW4gbGFjayBvZiBiZXR0ZXIgb25lcy4KICAgKgogICAqIFRoZSBuYWl2ZSBicm9hZHBoYXNlIGxvb2tzIGF0IGFsbCBwb3NzaWJsZSBwYWlycyB3aXRob3V0IHJlc3RyaWN0aW9uLCB0aGVyZWZvcmUgaXQgaGFzIGNvbXBsZXhpdHkgTl4yIF8od2hpY2ggaXMgYmFkKV8KICAgKi8KICBjbGFzcyBOYWl2ZUJyb2FkcGhhc2UgZXh0ZW5kcyBCcm9hZHBoYXNlIHsKICAgIC8qKgogICAgICogQHRvZG8gUmVtb3ZlIHVzZWxlc3MgY29uc3RydWN0b3IKICAgICAqLwogICAgY29uc3RydWN0b3IoKSB7CiAgICAgIHN1cGVyKCk7CiAgICB9CiAgICAvKioKICAgICAqIEdldCBhbGwgdGhlIGNvbGxpc2lvbiBwYWlycyBpbiB0aGUgcGh5c2ljcyB3b3JsZAogICAgICovCgoKICAgIGNvbGxpc2lvblBhaXJzKHdvcmxkLCBwYWlyczEsIHBhaXJzMikgewogICAgICBjb25zdCBib2RpZXMgPSB3b3JsZC5ib2RpZXM7CiAgICAgIGNvbnN0IG4gPSBib2RpZXMubGVuZ3RoOwogICAgICBsZXQgYmk7CiAgICAgIGxldCBiajsgLy8gTmFpdmUgTl4yIGZ0dyEKCiAgICAgIGZvciAobGV0IGkgPSAwOyBpICE9PSBuOyBpKyspIHsKICAgICAgICBmb3IgKGxldCBqID0gMDsgaiAhPT0gaTsgaisrKSB7CiAgICAgICAgICBiaSA9IGJvZGllc1tpXTsKICAgICAgICAgIGJqID0gYm9kaWVzW2pdOwoKICAgICAgICAgIGlmICghdGhpcy5uZWVkQnJvYWRwaGFzZUNvbGxpc2lvbihiaSwgYmopKSB7CiAgICAgICAgICAgIGNvbnRpbnVlOwogICAgICAgICAgfQoKICAgICAgICAgIHRoaXMuaW50ZXJzZWN0aW9uVGVzdChiaSwgYmosIHBhaXJzMSwgcGFpcnMyKTsKICAgICAgICB9CiAgICAgIH0KICAgIH0KICAgIC8qKgogICAgICogUmV0dXJucyBhbGwgdGhlIGJvZGllcyB3aXRoaW4gYW4gQUFCQi4KICAgICAqIEBwYXJhbSByZXN1bHQgQW4gYXJyYXkgdG8gc3RvcmUgcmVzdWx0aW5nIGJvZGllcyBpbi4KICAgICAqLwoKCiAgICBhYWJiUXVlcnkod29ybGQsIGFhYmIsIHJlc3VsdCkgewogICAgICBpZiAocmVzdWx0ID09PSB2b2lkIDApIHsKICAgICAgICByZXN1bHQgPSBbXTsKICAgICAgfQoKICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3JsZC5ib2RpZXMubGVuZ3RoOyBpKyspIHsKICAgICAgICBjb25zdCBiID0gd29ybGQuYm9kaWVzW2ldOwoKICAgICAgICBpZiAoYi5hYWJiTmVlZHNVcGRhdGUpIHsKICAgICAgICAgIGIudXBkYXRlQUFCQigpOwogICAgICAgIH0gLy8gVWdseSBoYWNrIHVudGlsIEJvZHkgZ2V0cyBhYWJiCgoKICAgICAgICBpZiAoYi5hYWJiLm92ZXJsYXBzKGFhYmIpKSB7CiAgICAgICAgICByZXN1bHQucHVzaChiKTsKICAgICAgICB9CiAgICAgIH0KCiAgICAgIHJldHVybiByZXN1bHQ7CiAgICB9CgogIH0KCiAgLyoqCiAgICogU3RvcmFnZSBmb3IgUmF5IGNhc3RpbmcgZGF0YQogICAqLwogIGNsYXNzIFJheWNhc3RSZXN1bHQgewogICAgLyoqCiAgICAgKiByYXlGcm9tV29ybGQKICAgICAqLwoKICAgIC8qKgogICAgICogcmF5VG9Xb3JsZAogICAgICovCgogICAgLyoqCiAgICAgKiBoaXROb3JtYWxXb3JsZAogICAgICovCgogICAgLyoqCiAgICAgKiBoaXRQb2ludFdvcmxkCiAgICAgKi8KCiAgICAvKioKICAgICAqIGhhc0hpdAogICAgICovCgogICAgLyoqCiAgICAgKiBzaGFwZQogICAgICovCgogICAgLyoqCiAgICAgKiBib2R5CiAgICAgKi8KCiAgICAvKioKICAgICAqIFRoZSBpbmRleCBvZiB0aGUgaGl0IHRyaWFuZ2xlLCBpZiB0aGUgaGl0IHNoYXBlIHdhcyBhIHRyaW1lc2gKICAgICAqLwoKICAgIC8qKgogICAgICogRGlzdGFuY2UgdG8gdGhlIGhpdC4gV2lsbCBiZSBzZXQgdG8gLTEgaWYgdGhlcmUgd2FzIG5vIGhpdAogICAgICovCgogICAgLyoqCiAgICAgKiBJZiB0aGUgcmF5IHNob3VsZCBzdG9wIHRyYXZlcnNpbmcgdGhlIGJvZGllcwogICAgICovCiAgICBjb25zdHJ1Y3RvcigpIHsKICAgICAgdGhpcy5yYXlGcm9tV29ybGQgPSBuZXcgVmVjMygpOwogICAgICB0aGlzLnJheVRvV29ybGQgPSBuZXcgVmVjMygpOwogICAgICB0aGlzLmhpdE5vcm1hbFdvcmxkID0gbmV3IFZlYzMoKTsKICAgICAgdGhpcy5oaXRQb2ludFdvcmxkID0gbmV3IFZlYzMoKTsKICAgICAgdGhpcy5oYXNIaXQgPSBmYWxzZTsKICAgICAgdGhpcy5zaGFwZSA9IG51bGw7CiAgICAgIHRoaXMuYm9keSA9IG51bGw7CiAgICAgIHRoaXMuaGl0RmFjZUluZGV4ID0gLTE7CiAgICAgIHRoaXMuZGlzdGFuY2UgPSAtMTsKICAgICAgdGhpcy5zaG91bGRTdG9wID0gZmFsc2U7CiAgICB9CiAgICAvKioKICAgICAqIFJlc2V0IGFsbCByZXN1bHQgZGF0YS4KICAgICAqLwoKCiAgICByZXNldCgpIHsKICAgICAgdGhpcy5yYXlGcm9tV29ybGQuc2V0WmVybygpOwogICAgICB0aGlzLnJheVRvV29ybGQuc2V0WmVybygpOwogICAgICB0aGlzLmhpdE5vcm1hbFdvcmxkLnNldFplcm8oKTsKICAgICAgdGhpcy5oaXRQb2ludFdvcmxkLnNldFplcm8oKTsKICAgICAgdGhpcy5oYXNIaXQgPSBmYWxzZTsKICAgICAgdGhpcy5zaGFwZSA9IG51bGw7CiAgICAgIHRoaXMuYm9keSA9IG51bGw7CiAgICAgIHRoaXMuaGl0RmFjZUluZGV4ID0gLTE7CiAgICAgIHRoaXMuZGlzdGFuY2UgPSAtMTsKICAgICAgdGhpcy5zaG91bGRTdG9wID0gZmFsc2U7CiAgICB9CiAgICAvKioKICAgICAqIGFib3J0CiAgICAgKi8KCgogICAgYWJvcnQoKSB7CiAgICAgIHRoaXMuc2hvdWxkU3RvcCA9IHRydWU7CiAgICB9CiAgICAvKioKICAgICAqIFNldCByZXN1bHQgZGF0YS4KICAgICAqLwoKCiAgICBzZXQocmF5RnJvbVdvcmxkLCByYXlUb1dvcmxkLCBoaXROb3JtYWxXb3JsZCwgaGl0UG9pbnRXb3JsZCwgc2hhcGUsIGJvZHksIGRpc3RhbmNlKSB7CiAgICAgIHRoaXMucmF5RnJvbVdvcmxkLmNvcHkocmF5RnJvbVdvcmxkKTsKICAgICAgdGhpcy5yYXlUb1dvcmxkLmNvcHkocmF5VG9Xb3JsZCk7CiAgICAgIHRoaXMuaGl0Tm9ybWFsV29ybGQuY29weShoaXROb3JtYWxXb3JsZCk7CiAgICAgIHRoaXMuaGl0UG9pbnRXb3JsZC5jb3B5KGhpdFBvaW50V29ybGQpOwogICAgICB0aGlzLnNoYXBlID0gc2hhcGU7CiAgICAgIHRoaXMuYm9keSA9IGJvZHk7CiAgICAgIHRoaXMuZGlzdGFuY2UgPSBkaXN0YW5jZTsKICAgIH0KCiAgfQoKICBsZXQgX1NoYXBlJHR5cGVzJFNQSEVSRSwgX1NoYXBlJHR5cGVzJFBMQU5FLCBfU2hhcGUkdHlwZXMkQk9YLCBfU2hhcGUkdHlwZXMkQ1lMSU5ERVIsIF9TaGFwZSR0eXBlcyRDT05WRVhQTywgX1NoYXBlJHR5cGVzJEhFSUdIVEZJLCBfU2hhcGUkdHlwZXMkVFJJTUVTSDsKCiAgLyoqCiAgICogUkFZX01PREVTCiAgICovCiAgY29uc3QgUkFZX01PREVTID0gewogICAgLyoqIENMT1NFU1QgKi8KICAgIENMT1NFU1Q6IDEsCgogICAgLyoqIEFOWSAqLwogICAgQU5ZOiAyLAoKICAgIC8qKiBBTEwgKi8KICAgIEFMTDogNAogIH07CiAgLyoqCiAgICogUmF5TW9kZQogICAqLwoKICBfU2hhcGUkdHlwZXMkU1BIRVJFID0gU2hhcGUudHlwZXMuU1BIRVJFOwogIF9TaGFwZSR0eXBlcyRQTEFORSA9IFNoYXBlLnR5cGVzLlBMQU5FOwogIF9TaGFwZSR0eXBlcyRCT1ggPSBTaGFwZS50eXBlcy5CT1g7CiAgX1NoYXBlJHR5cGVzJENZTElOREVSID0gU2hhcGUudHlwZXMuQ1lMSU5ERVI7CiAgX1NoYXBlJHR5cGVzJENPTlZFWFBPID0gU2hhcGUudHlwZXMuQ09OVkVYUE9MWUhFRFJPTjsKICBfU2hhcGUkdHlwZXMkSEVJR0hURkkgPSBTaGFwZS50eXBlcy5IRUlHSFRGSUVMRDsKICBfU2hhcGUkdHlwZXMkVFJJTUVTSCA9IFNoYXBlLnR5cGVzLlRSSU1FU0g7CgogIC8qKgogICAqIEEgbGluZSBpbiAzRCBzcGFjZSB0aGF0IGludGVyc2VjdHMgYm9kaWVzIGFuZCByZXR1cm4gcG9pbnRzLgogICAqLwogIGNsYXNzIFJheSB7CiAgICAvKioKICAgICAqIGZyb20KICAgICAqLwoKICAgIC8qKgogICAgICogdG8KICAgICAqLwoKICAgIC8qKgogICAgICogZGlyZWN0aW9uCiAgICAgKi8KCiAgICAvKioKICAgICAqIFRoZSBwcmVjaXNpb24gb2YgdGhlIHJheS4gVXNlZCB3aGVuIGNoZWNraW5nIHBhcmFsbGVsaXR5IGV0Yy4KICAgICAqIEBkZWZhdWx0IDAuMDAwMQogICAgICovCgogICAgLyoqCiAgICAgKiBTZXQgdG8gYGZhbHNlYCBpZiB5b3UgZG9uJ3Qgd2FudCB0aGUgUmF5IHRvIHRha2UgYGNvbGxpc2lvblJlc3BvbnNlYCBmbGFncyBpbnRvIGFjY291bnQgb24gYm9kaWVzIGFuZCBzaGFwZXMuCiAgICAgKiBAZGVmYXVsdCB0cnVlCiAgICAgKi8KCiAgICAvKioKICAgICAqIElmIHNldCB0byBgdHJ1ZWAsIHRoZSByYXkgc2tpcHMgYW55IGhpdHMgd2l0aCBub3JtYWwuZG90KHJheURpcmVjdGlvbikgPCAwLgogICAgICogQGRlZmF1bHQgZmFsc2UKICAgICAqLwoKICAgIC8qKgogICAgICogY29sbGlzaW9uRmlsdGVyTWFzawogICAgICogQGRlZmF1bHQgLTEKICAgICAqLwoKICAgIC8qKgogICAgICogY29sbGlzaW9uRmlsdGVyR3JvdXAKICAgICAqIEBkZWZhdWx0IC0xCiAgICAgKi8KCiAgICAvKioKICAgICAqIFRoZSBpbnRlcnNlY3Rpb24gbW9kZS4gU2hvdWxkIGJlIFJheS5BTlksIFJheS5BTEwgb3IgUmF5LkNMT1NFU1QuCiAgICAgKiBAZGVmYXVsdCBSQVkuQU5ZCiAgICAgKi8KCiAgICAvKioKICAgICAqIEN1cnJlbnQgcmVzdWx0IG9iamVjdC4KICAgICAqLwoKICAgIC8qKgogICAgICogV2lsbCBiZSBzZXQgdG8gYHRydWVgIGR1cmluZyBpbnRlcnNlY3RXb3JsZCgpIGlmIHRoZSByYXkgaGl0IGFueXRoaW5nLgogICAgICovCgogICAgLyoqCiAgICAgKiBVc2VyLXByb3ZpZGVkIHJlc3VsdCBjYWxsYmFjay4gV2lsbCBiZSB1c2VkIGlmIG1vZGUgaXMgUmF5LkFMTC4KICAgICAqLwoKICAgIC8qKgogICAgICogQ0xPU0VTVAogICAgICovCgogICAgLyoqCiAgICAgKiBBTlkKICAgICAqLwoKICAgIC8qKgogICAgICogQUxMCiAgICAgKi8KICAgIGdldCBbX1NoYXBlJHR5cGVzJFNQSEVSRV0oKSB7CiAgICAgIHJldHVybiB0aGlzLl9pbnRlcnNlY3RTcGhlcmU7CiAgICB9CgogICAgZ2V0IFtfU2hhcGUkdHlwZXMkUExBTkVdKCkgewogICAgICByZXR1cm4gdGhpcy5faW50ZXJzZWN0UGxhbmU7CiAgICB9CgogICAgZ2V0IFtfU2hhcGUkdHlwZXMkQk9YXSgpIHsKICAgICAgcmV0dXJuIHRoaXMuX2ludGVyc2VjdEJveDsKICAgIH0KCiAgICBnZXQgW19TaGFwZSR0eXBlcyRDWUxJTkRFUl0oKSB7CiAgICAgIHJldHVybiB0aGlzLl9pbnRlcnNlY3RDb252ZXg7CiAgICB9CgogICAgZ2V0IFtfU2hhcGUkdHlwZXMkQ09OVkVYUE9dKCkgewogICAgICByZXR1cm4gdGhpcy5faW50ZXJzZWN0Q29udmV4OwogICAgfQoKICAgIGdldCBbX1NoYXBlJHR5cGVzJEhFSUdIVEZJXSgpIHsKICAgICAgcmV0dXJuIHRoaXMuX2ludGVyc2VjdEhlaWdodGZpZWxkOwogICAgfQoKICAgIGdldCBbX1NoYXBlJHR5cGVzJFRSSU1FU0hdKCkgewogICAgICByZXR1cm4gdGhpcy5faW50ZXJzZWN0VHJpbWVzaDsKICAgIH0KCiAgICBjb25zdHJ1Y3Rvcihmcm9tLCB0bykgewogICAgICBpZiAoZnJvbSA9PT0gdm9pZCAwKSB7CiAgICAgICAgZnJvbSA9IG5ldyBWZWMzKCk7CiAgICAgIH0KCiAgICAgIGlmICh0byA9PT0gdm9pZCAwKSB7CiAgICAgICAgdG8gPSBuZXcgVmVjMygpOwogICAgICB9CgogICAgICB0aGlzLmZyb20gPSBmcm9tLmNsb25lKCk7CiAgICAgIHRoaXMudG8gPSB0by5jbG9uZSgpOwogICAgICB0aGlzLmRpcmVjdGlvbiA9IG5ldyBWZWMzKCk7CiAgICAgIHRoaXMucHJlY2lzaW9uID0gMC4wMDAxOwogICAgICB0aGlzLmNoZWNrQ29sbGlzaW9uUmVzcG9uc2UgPSB0cnVlOwogICAgICB0aGlzLnNraXBCYWNrZmFjZXMgPSBmYWxzZTsKICAgICAgdGhpcy5jb2xsaXNpb25GaWx0ZXJNYXNrID0gLTE7CiAgICAgIHRoaXMuY29sbGlzaW9uRmlsdGVyR3JvdXAgPSAtMTsKICAgICAgdGhpcy5tb2RlID0gUmF5LkFOWTsKICAgICAgdGhpcy5yZXN1bHQgPSBuZXcgUmF5Y2FzdFJlc3VsdCgpOwogICAgICB0aGlzLmhhc0hpdCA9IGZhbHNlOwoKICAgICAgdGhpcy5jYWxsYmFjayA9IHJlc3VsdCA9PiB7fTsKICAgIH0KICAgIC8qKgogICAgICogRG8gaXRlcnNlY3Rpb24gYWdhaW5zdCBhbGwgYm9kaWVzIGluIHRoZSBnaXZlbiBXb3JsZC4KICAgICAqIEByZXR1cm4gVHJ1ZSBpZiB0aGUgcmF5IGhpdCBhbnl0aGluZywgb3RoZXJ3aXNlIGZhbHNlLgogICAgICovCgoKICAgIGludGVyc2VjdFdvcmxkKHdvcmxkLCBvcHRpb25zKSB7CiAgICAgIHRoaXMubW9kZSA9IG9wdGlvbnMubW9kZSB8fCBSYXkuQU5ZOwogICAgICB0aGlzLnJlc3VsdCA9IG9wdGlvbnMucmVzdWx0IHx8IG5ldyBSYXljYXN0UmVzdWx0KCk7CiAgICAgIHRoaXMuc2tpcEJhY2tmYWNlcyA9ICEhb3B0aW9ucy5za2lwQmFja2ZhY2VzOwogICAgICB0aGlzLmNvbGxpc2lvbkZpbHRlck1hc2sgPSB0eXBlb2Ygb3B0aW9ucy5jb2xsaXNpb25GaWx0ZXJNYXNrICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMuY29sbGlzaW9uRmlsdGVyTWFzayA6IC0xOwogICAgICB0aGlzLmNvbGxpc2lvbkZpbHRlckdyb3VwID0gdHlwZW9mIG9wdGlvbnMuY29sbGlzaW9uRmlsdGVyR3JvdXAgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5jb2xsaXNpb25GaWx0ZXJHcm91cCA6IC0xOwogICAgICB0aGlzLmNoZWNrQ29sbGlzaW9uUmVzcG9uc2UgPSB0eXBlb2Ygb3B0aW9ucy5jaGVja0NvbGxpc2lvblJlc3BvbnNlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMuY2hlY2tDb2xsaXNpb25SZXNwb25zZSA6IHRydWU7CgogICAgICBpZiAob3B0aW9ucy5mcm9tKSB7CiAgICAgICAgdGhpcy5mcm9tLmNvcHkob3B0aW9ucy5mcm9tKTsKICAgICAgfQoKICAgICAgaWYgKG9wdGlvbnMudG8pIHsKICAgICAgICB0aGlzLnRvLmNvcHkob3B0aW9ucy50byk7CiAgICAgIH0KCiAgICAgIHRoaXMuY2FsbGJhY2sgPSBvcHRpb25zLmNhbGxiYWNrIHx8ICgoKSA9PiB7fSk7CgogICAgICB0aGlzLmhhc0hpdCA9IGZhbHNlOwogICAgICB0aGlzLnJlc3VsdC5yZXNldCgpOwogICAgICB0aGlzLnVwZGF0ZURpcmVjdGlvbigpOwogICAgICB0aGlzLmdldEFBQkIodG1wQUFCQiQxKTsKICAgICAgdG1wQXJyYXkubGVuZ3RoID0gMDsKICAgICAgd29ybGQuYnJvYWRwaGFzZS5hYWJiUXVlcnkod29ybGQsIHRtcEFBQkIkMSwgdG1wQXJyYXkpOwogICAgICB0aGlzLmludGVyc2VjdEJvZGllcyh0bXBBcnJheSk7CiAgICAgIHJldHVybiB0aGlzLmhhc0hpdDsKICAgIH0KICAgIC8qKgogICAgICogU2hvb3QgYSByYXkgYXQgYSBib2R5LCBnZXQgYmFjayBpbmZvcm1hdGlvbiBhYm91dCB0aGUgaGl0LgogICAgICogQGRlcHJlY2F0ZWQgQHBhcmFtIHJlc3VsdCBzZXQgdGhlIHJlc3VsdCBwcm9wZXJ0eSBvZiB0aGUgUmF5IGluc3RlYWQuCiAgICAgKi8KCgogICAgaW50ZXJzZWN0Qm9keShib2R5LCByZXN1bHQpIHsKICAgICAgaWYgKHJlc3VsdCkgewogICAgICAgIHRoaXMucmVzdWx0ID0gcmVzdWx0OwogICAgICAgIHRoaXMudXBkYXRlRGlyZWN0aW9uKCk7CiAgICAgIH0KCiAgICAgIGNvbnN0IGNoZWNrQ29sbGlzaW9uUmVzcG9uc2UgPSB0aGlzLmNoZWNrQ29sbGlzaW9uUmVzcG9uc2U7CgogICAgICBpZiAoY2hlY2tDb2xsaXNpb25SZXNwb25zZSAmJiAhYm9keS5jb2xsaXNpb25SZXNwb25zZSkgewogICAgICAgIHJldHVybjsKICAgICAgfQoKICAgICAgaWYgKCh0aGlzLmNvbGxpc2lvbkZpbHRlckdyb3VwICYgYm9keS5jb2xsaXNpb25GaWx0ZXJNYXNrKSA9PT0gMCB8fCAoYm9keS5jb2xsaXNpb25GaWx0ZXJHcm91cCAmIHRoaXMuY29sbGlzaW9uRmlsdGVyTWFzaykgPT09IDApIHsKICAgICAgICByZXR1cm47CiAgICAgIH0KCiAgICAgIGNvbnN0IHhpID0gaW50ZXJzZWN0Qm9keV94aTsKICAgICAgY29uc3QgcWkgPSBpbnRlcnNlY3RCb2R5X3FpOwoKICAgICAgZm9yIChsZXQgaSA9IDAsIE4gPSBib2R5LnNoYXBlcy5sZW5ndGg7IGkgPCBOOyBpKyspIHsKICAgICAgICBjb25zdCBzaGFwZSA9IGJvZHkuc2hhcGVzW2ldOwoKICAgICAgICBpZiAoY2hlY2tDb2xsaXNpb25SZXNwb25zZSAmJiAhc2hhcGUuY29sbGlzaW9uUmVzcG9uc2UpIHsKICAgICAgICAgIGNvbnRpbnVlOyAvLyBTa2lwCiAgICAgICAgfQoKICAgICAgICBib2R5LnF1YXRlcm5pb24ubXVsdChib2R5LnNoYXBlT3JpZW50YXRpb25zW2ldLCBxaSk7CiAgICAgICAgYm9keS5xdWF0ZXJuaW9uLnZtdWx0KGJvZHkuc2hhcGVPZmZzZXRzW2ldLCB4aSk7CiAgICAgICAgeGkudmFkZChib2R5LnBvc2l0aW9uLCB4aSk7CiAgICAgICAgdGhpcy5pbnRlcnNlY3RTaGFwZShzaGFwZSwgcWksIHhpLCBib2R5KTsKCiAgICAgICAgaWYgKHRoaXMucmVzdWx0LnNob3VsZFN0b3ApIHsKICAgICAgICAgIGJyZWFrOwogICAgICAgIH0KICAgICAgfQogICAgfQogICAgLyoqCiAgICAgKiBTaG9vdCBhIHJheSBhdCBhbiBhcnJheSBib2RpZXMsIGdldCBiYWNrIGluZm9ybWF0aW9uIGFib3V0IHRoZSBoaXQuCiAgICAgKiBAcGFyYW0gYm9kaWVzIEFuIGFycmF5IG9mIEJvZHkgb2JqZWN0cy4KICAgICAqIEBkZXByZWNhdGVkIEBwYXJhbSByZXN1bHQgc2V0IHRoZSByZXN1bHQgcHJvcGVydHkgb2YgdGhlIFJheSBpbnN0ZWFkLgogICAgICoKICAgICAqLwoKCiAgICBpbnRlcnNlY3RCb2RpZXMoYm9kaWVzLCByZXN1bHQpIHsKICAgICAgaWYgKHJlc3VsdCkgewogICAgICAgIHRoaXMucmVzdWx0ID0gcmVzdWx0OwogICAgICAgIHRoaXMudXBkYXRlRGlyZWN0aW9uKCk7CiAgICAgIH0KCiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gYm9kaWVzLmxlbmd0aDsgIXRoaXMucmVzdWx0LnNob3VsZFN0b3AgJiYgaSA8IGw7IGkrKykgewogICAgICAgIHRoaXMuaW50ZXJzZWN0Qm9keShib2RpZXNbaV0pOwogICAgICB9CiAgICB9CiAgICAvKioKICAgICAqIFVwZGF0ZXMgdGhlIGRpcmVjdGlvbiB2ZWN0b3IuCiAgICAgKi8KCgogICAgdXBkYXRlRGlyZWN0aW9uKCkgewogICAgICB0aGlzLnRvLnZzdWIodGhpcy5mcm9tLCB0aGlzLmRpcmVjdGlvbik7CiAgICAgIHRoaXMuZGlyZWN0aW9uLm5vcm1hbGl6ZSgpOwogICAgfQoKICAgIGludGVyc2VjdFNoYXBlKHNoYXBlLCBxdWF0LCBwb3NpdGlvbiwgYm9keSkgewogICAgICBjb25zdCBmcm9tID0gdGhpcy5mcm9tOyAvLyBDaGVja2luZyBib3VuZGluZ1NwaGVyZQoKICAgICAgY29uc3QgZGlzdGFuY2UgPSBkaXN0YW5jZUZyb21JbnRlcnNlY3Rpb24oZnJvbSwgdGhpcy5kaXJlY3Rpb24sIHBvc2l0aW9uKTsKCiAgICAgIGlmIChkaXN0YW5jZSA+IHNoYXBlLmJvdW5kaW5nU3BoZXJlUmFkaXVzKSB7CiAgICAgICAgcmV0dXJuOwogICAgICB9CgogICAgICBjb25zdCBpbnRlcnNlY3RNZXRob2QgPSB0aGlzW3NoYXBlLnR5cGVdOwoKICAgICAgaWYgKGludGVyc2VjdE1ldGhvZCkgewogICAgICAgIGludGVyc2VjdE1ldGhvZC5jYWxsKHRoaXMsIHNoYXBlLCBxdWF0LCBwb3NpdGlvbiwgYm9keSwgc2hhcGUpOwogICAgICB9CiAgICB9CgogICAgX2ludGVyc2VjdEJveChib3gsIHF1YXQsIHBvc2l0aW9uLCBib2R5LCByZXBvcnRlZFNoYXBlKSB7CiAgICAgIHJldHVybiB0aGlzLl9pbnRlcnNlY3RDb252ZXgoYm94LmNvbnZleFBvbHloZWRyb25SZXByZXNlbnRhdGlvbiwgcXVhdCwgcG9zaXRpb24sIGJvZHksIHJlcG9ydGVkU2hhcGUpOwogICAgfQoKICAgIF9pbnRlcnNlY3RQbGFuZShzaGFwZSwgcXVhdCwgcG9zaXRpb24sIGJvZHksIHJlcG9ydGVkU2hhcGUpIHsKICAgICAgY29uc3QgZnJvbSA9IHRoaXMuZnJvbTsKICAgICAgY29uc3QgdG8gPSB0aGlzLnRvOwogICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmRpcmVjdGlvbjsgLy8gR2V0IHBsYW5lIG5vcm1hbAoKICAgICAgY29uc3Qgd29ybGROb3JtYWwgPSBuZXcgVmVjMygwLCAwLCAxKTsKICAgICAgcXVhdC52bXVsdCh3b3JsZE5vcm1hbCwgd29ybGROb3JtYWwpOwogICAgICBjb25zdCBsZW4gPSBuZXcgVmVjMygpOwogICAgICBmcm9tLnZzdWIocG9zaXRpb24sIGxlbik7CiAgICAgIGNvbnN0IHBsYW5lVG9Gcm9tID0gbGVuLmRvdCh3b3JsZE5vcm1hbCk7CiAgICAgIHRvLnZzdWIocG9zaXRpb24sIGxlbik7CiAgICAgIGNvbnN0IHBsYW5lVG9UbyA9IGxlbi5kb3Qod29ybGROb3JtYWwpOwoKICAgICAgaWYgKHBsYW5lVG9Gcm9tICogcGxhbmVUb1RvID4gMCkgewogICAgICAgIC8vICJmcm9tIiBhbmQgInRvIiBhcmUgb24gdGhlIHNhbWUgc2lkZSBvZiB0aGUgcGxhbmUuLi4gYmFpbCBvdXQKICAgICAgICByZXR1cm47CiAgICAgIH0KCiAgICAgIGlmIChmcm9tLmRpc3RhbmNlVG8odG8pIDwgcGxhbmVUb0Zyb20pIHsKICAgICAgICByZXR1cm47CiAgICAgIH0KCiAgICAgIGNvbnN0IG5fZG90X2RpciA9IHdvcmxkTm9ybWFsLmRvdChkaXJlY3Rpb24pOwoKICAgICAgaWYgKE1hdGguYWJzKG5fZG90X2RpcikgPCB0aGlzLnByZWNpc2lvbikgewogICAgICAgIC8vIE5vIGludGVyc2VjdGlvbgogICAgICAgIHJldHVybjsKICAgICAgfQoKICAgICAgY29uc3QgcGxhbmVQb2ludFRvRnJvbSA9IG5ldyBWZWMzKCk7CiAgICAgIGNvbnN0IGRpcl9zY2FsZWRfd2l0aF90ID0gbmV3IFZlYzMoKTsKICAgICAgY29uc3QgaGl0UG9pbnRXb3JsZCA9IG5ldyBWZWMzKCk7CiAgICAgIGZyb20udnN1Yihwb3NpdGlvbiwgcGxhbmVQb2ludFRvRnJvbSk7CiAgICAgIGNvbnN0IHQgPSAtd29ybGROb3JtYWwuZG90KHBsYW5lUG9pbnRUb0Zyb20pIC8gbl9kb3RfZGlyOwogICAgICBkaXJlY3Rpb24uc2NhbGUodCwgZGlyX3NjYWxlZF93aXRoX3QpOwogICAgICBmcm9tLnZhZGQoZGlyX3NjYWxlZF93aXRoX3QsIGhpdFBvaW50V29ybGQpOwogICAgICB0aGlzLnJlcG9ydEludGVyc2VjdGlvbih3b3JsZE5vcm1hbCwgaGl0UG9pbnRXb3JsZCwgcmVwb3J0ZWRTaGFwZSwgYm9keSwgLTEpOwogICAgfQogICAgLyoqCiAgICAgKiBHZXQgdGhlIHdvcmxkIEFBQkIgb2YgdGhlIHJheS4KICAgICAqLwoKCiAgICBnZXRBQUJCKGFhYmIpIHsKICAgICAgY29uc3QgewogICAgICAgIGxvd2VyQm91bmQsCiAgICAgICAgdXBwZXJCb3VuZAogICAgICB9ID0gYWFiYjsKICAgICAgY29uc3QgdG8gPSB0aGlzLnRvOwogICAgICBjb25zdCBmcm9tID0gdGhpcy5mcm9tOwogICAgICBsb3dlckJvdW5kLnggPSBNYXRoLm1pbih0by54LCBmcm9tLngpOwogICAgICBsb3dlckJvdW5kLnkgPSBNYXRoLm1pbih0by55LCBmcm9tLnkpOwogICAgICBsb3dlckJvdW5kLnogPSBNYXRoLm1pbih0by56LCBmcm9tLnopOwogICAgICB1cHBlckJvdW5kLnggPSBNYXRoLm1heCh0by54LCBmcm9tLngpOwogICAgICB1cHBlckJvdW5kLnkgPSBNYXRoLm1heCh0by55LCBmcm9tLnkpOwogICAgICB1cHBlckJvdW5kLnogPSBNYXRoLm1heCh0by56LCBmcm9tLnopOwogICAgfQoKICAgIF9pbnRlcnNlY3RIZWlnaHRmaWVsZChzaGFwZSwgcXVhdCwgcG9zaXRpb24sIGJvZHksIHJlcG9ydGVkU2hhcGUpIHsKICAgICAgc2hhcGUuZGF0YTsKICAgICAgc2hhcGUuZWxlbWVudFNpemU7IC8vIENvbnZlcnQgdGhlIHJheSB0byBsb2NhbCBoZWlnaHRmaWVsZCBjb29yZGluYXRlcwoKICAgICAgY29uc3QgbG9jYWxSYXkgPSBpbnRlcnNlY3RIZWlnaHRmaWVsZF9sb2NhbFJheTsgLy9uZXcgUmF5KHRoaXMuZnJvbSwgdGhpcy50byk7CgogICAgICBsb2NhbFJheS5mcm9tLmNvcHkodGhpcy5mcm9tKTsKICAgICAgbG9jYWxSYXkudG8uY29weSh0aGlzLnRvKTsKICAgICAgVHJhbnNmb3JtLnBvaW50VG9Mb2NhbEZyYW1lKHBvc2l0aW9uLCBxdWF0LCBsb2NhbFJheS5mcm9tLCBsb2NhbFJheS5mcm9tKTsKICAgICAgVHJhbnNmb3JtLnBvaW50VG9Mb2NhbEZyYW1lKHBvc2l0aW9uLCBxdWF0LCBsb2NhbFJheS50bywgbG9jYWxSYXkudG8pOwogICAgICBsb2NhbFJheS51cGRhdGVEaXJlY3Rpb24oKTsgLy8gR2V0IHRoZSBpbmRleCBvZiB0aGUgZGF0YSBwb2ludHMgdG8gdGVzdCBhZ2FpbnN0CgogICAgICBjb25zdCBpbmRleCA9IGludGVyc2VjdEhlaWdodGZpZWxkX2luZGV4OwogICAgICBsZXQgaU1pblg7CiAgICAgIGxldCBpTWluWTsKICAgICAgbGV0IGlNYXhYOwogICAgICBsZXQgaU1heFk7IC8vIFNldCB0byBtYXgKCiAgICAgIGlNaW5YID0gaU1pblkgPSAwOwogICAgICBpTWF4WCA9IGlNYXhZID0gc2hhcGUuZGF0YS5sZW5ndGggLSAxOwogICAgICBjb25zdCBhYWJiID0gbmV3IEFBQkIoKTsKICAgICAgbG9jYWxSYXkuZ2V0QUFCQihhYWJiKTsKICAgICAgc2hhcGUuZ2V0SW5kZXhPZlBvc2l0aW9uKGFhYmIubG93ZXJCb3VuZC54LCBhYWJiLmxvd2VyQm91bmQueSwgaW5kZXgsIHRydWUpOwogICAgICBpTWluWCA9IE1hdGgubWF4KGlNaW5YLCBpbmRleFswXSk7CiAgICAgIGlNaW5ZID0gTWF0aC5tYXgoaU1pblksIGluZGV4WzFdKTsKICAgICAgc2hhcGUuZ2V0SW5kZXhPZlBvc2l0aW9uKGFhYmIudXBwZXJCb3VuZC54LCBhYWJiLnVwcGVyQm91bmQueSwgaW5kZXgsIHRydWUpOwogICAgICBpTWF4WCA9IE1hdGgubWluKGlNYXhYLCBpbmRleFswXSArIDEpOwogICAgICBpTWF4WSA9IE1hdGgubWluKGlNYXhZLCBpbmRleFsxXSArIDEpOwoKICAgICAgZm9yIChsZXQgaSA9IGlNaW5YOyBpIDwgaU1heFg7IGkrKykgewogICAgICAgIGZvciAobGV0IGogPSBpTWluWTsgaiA8IGlNYXhZOyBqKyspIHsKICAgICAgICAgIGlmICh0aGlzLnJlc3VsdC5zaG91bGRTdG9wKSB7CiAgICAgICAgICAgIHJldHVybjsKICAgICAgICAgIH0KCiAgICAgICAgICBzaGFwZS5nZXRBYWJiQXRJbmRleChpLCBqLCBhYWJiKTsKCiAgICAgICAgICBpZiAoIWFhYmIub3ZlcmxhcHNSYXkobG9jYWxSYXkpKSB7CiAgICAgICAgICAgIGNvbnRpbnVlOwogICAgICAgICAgfSAvLyBMb3dlciB0cmlhbmdsZQoKCiAgICAgICAgICBzaGFwZS5nZXRDb252ZXhUcmlhbmdsZVBpbGxhcihpLCBqLCBmYWxzZSk7CiAgICAgICAgICBUcmFuc2Zvcm0ucG9pbnRUb1dvcmxkRnJhbWUocG9zaXRpb24sIHF1YXQsIHNoYXBlLnBpbGxhck9mZnNldCwgd29ybGRQaWxsYXJPZmZzZXQpOwoKICAgICAgICAgIHRoaXMuX2ludGVyc2VjdENvbnZleChzaGFwZS5waWxsYXJDb252ZXgsIHF1YXQsIHdvcmxkUGlsbGFyT2Zmc2V0LCBib2R5LCByZXBvcnRlZFNoYXBlLCBpbnRlcnNlY3RDb252ZXhPcHRpb25zKTsKCiAgICAgICAgICBpZiAodGhpcy5yZXN1bHQuc2hvdWxkU3RvcCkgewogICAgICAgICAgICByZXR1cm47CiAgICAgICAgICB9IC8vIFVwcGVyIHRyaWFuZ2xlCgoKICAgICAgICAgIHNoYXBlLmdldENvbnZleFRyaWFuZ2xlUGlsbGFyKGksIGosIHRydWUpOwogICAgICAgICAgVHJhbnNmb3JtLnBvaW50VG9Xb3JsZEZyYW1lKHBvc2l0aW9uLCBxdWF0LCBzaGFwZS5waWxsYXJPZmZzZXQsIHdvcmxkUGlsbGFyT2Zmc2V0KTsKCiAgICAgICAgICB0aGlzLl9pbnRlcnNlY3RDb252ZXgoc2hhcGUucGlsbGFyQ29udmV4LCBxdWF0LCB3b3JsZFBpbGxhck9mZnNldCwgYm9keSwgcmVwb3J0ZWRTaGFwZSwgaW50ZXJzZWN0Q29udmV4T3B0aW9ucyk7CiAgICAgICAgfQogICAgICB9CiAgICB9CgogICAgX2ludGVyc2VjdFNwaGVyZShzcGhlcmUsIHF1YXQsIHBvc2l0aW9uLCBib2R5LCByZXBvcnRlZFNoYXBlKSB7CiAgICAgIGNvbnN0IGZyb20gPSB0aGlzLmZyb207CiAgICAgIGNvbnN0IHRvID0gdGhpcy50bzsKICAgICAgY29uc3QgciA9IHNwaGVyZS5yYWRpdXM7CiAgICAgIGNvbnN0IGEgPSAodG8ueCAtIGZyb20ueCkgKiogMiArICh0by55IC0gZnJvbS55KSAqKiAyICsgKHRvLnogLSBmcm9tLnopICoqIDI7CiAgICAgIGNvbnN0IGIgPSAyICogKCh0by54IC0gZnJvbS54KSAqIChmcm9tLnggLSBwb3NpdGlvbi54KSArICh0by55IC0gZnJvbS55KSAqIChmcm9tLnkgLSBwb3NpdGlvbi55KSArICh0by56IC0gZnJvbS56KSAqIChmcm9tLnogLSBwb3NpdGlvbi56KSk7CiAgICAgIGNvbnN0IGMgPSAoZnJvbS54IC0gcG9zaXRpb24ueCkgKiogMiArIChmcm9tLnkgLSBwb3NpdGlvbi55KSAqKiAyICsgKGZyb20ueiAtIHBvc2l0aW9uLnopICoqIDIgLSByICoqIDI7CiAgICAgIGNvbnN0IGRlbHRhID0gYiAqKiAyIC0gNCAqIGEgKiBjOwogICAgICBjb25zdCBpbnRlcnNlY3Rpb25Qb2ludCA9IFJheV9pbnRlcnNlY3RTcGhlcmVfaW50ZXJzZWN0aW9uUG9pbnQ7CiAgICAgIGNvbnN0IG5vcm1hbCA9IFJheV9pbnRlcnNlY3RTcGhlcmVfbm9ybWFsOwoKICAgICAgaWYgKGRlbHRhIDwgMCkgewogICAgICAgIC8vIE5vIGludGVyc2VjdGlvbgogICAgICAgIHJldHVybjsKICAgICAgfSBlbHNlIGlmIChkZWx0YSA9PT0gMCkgewogICAgICAgIC8vIHNpbmdsZSBpbnRlcnNlY3Rpb24gcG9pbnQKICAgICAgICBmcm9tLmxlcnAodG8sIGRlbHRhLCBpbnRlcnNlY3Rpb25Qb2ludCk7CiAgICAgICAgaW50ZXJzZWN0aW9uUG9pbnQudnN1Yihwb3NpdGlvbiwgbm9ybWFsKTsKICAgICAgICBub3JtYWwubm9ybWFsaXplKCk7CiAgICAgICAgdGhpcy5yZXBvcnRJbnRlcnNlY3Rpb24obm9ybWFsLCBpbnRlcnNlY3Rpb25Qb2ludCwgcmVwb3J0ZWRTaGFwZSwgYm9keSwgLTEpOwogICAgICB9IGVsc2UgewogICAgICAgIGNvbnN0IGQxID0gKC1iIC0gTWF0aC5zcXJ0KGRlbHRhKSkgLyAoMiAqIGEpOwogICAgICAgIGNvbnN0IGQyID0gKC1iICsgTWF0aC5zcXJ0KGRlbHRhKSkgLyAoMiAqIGEpOwoKICAgICAgICBpZiAoZDEgPj0gMCAmJiBkMSA8PSAxKSB7CiAgICAgICAgICBmcm9tLmxlcnAodG8sIGQxLCBpbnRlcnNlY3Rpb25Qb2ludCk7CiAgICAgICAgICBpbnRlcnNlY3Rpb25Qb2ludC52c3ViKHBvc2l0aW9uLCBub3JtYWwpOwogICAgICAgICAgbm9ybWFsLm5vcm1hbGl6ZSgpOwogICAgICAgICAgdGhpcy5yZXBvcnRJbnRlcnNlY3Rpb24obm9ybWFsLCBpbnRlcnNlY3Rpb25Qb2ludCwgcmVwb3J0ZWRTaGFwZSwgYm9keSwgLTEpOwogICAgICAgIH0KCiAgICAgICAgaWYgKHRoaXMucmVzdWx0LnNob3VsZFN0b3ApIHsKICAgICAgICAgIHJldHVybjsKICAgICAgICB9CgogICAgICAgIGlmIChkMiA+PSAwICYmIGQyIDw9IDEpIHsKICAgICAgICAgIGZyb20ubGVycCh0bywgZDIsIGludGVyc2VjdGlvblBvaW50KTsKICAgICAgICAgIGludGVyc2VjdGlvblBvaW50LnZzdWIocG9zaXRpb24sIG5vcm1hbCk7CiAgICAgICAgICBub3JtYWwubm9ybWFsaXplKCk7CiAgICAgICAgICB0aGlzLnJlcG9ydEludGVyc2VjdGlvbihub3JtYWwsIGludGVyc2VjdGlvblBvaW50LCByZXBvcnRlZFNoYXBlLCBib2R5LCAtMSk7CiAgICAgICAgfQogICAgICB9CiAgICB9CgogICAgX2ludGVyc2VjdENvbnZleChzaGFwZSwgcXVhdCwgcG9zaXRpb24sIGJvZHksIHJlcG9ydGVkU2hhcGUsIG9wdGlvbnMpIHsKICAgICAgY29uc3Qgbm9ybWFsID0gaW50ZXJzZWN0Q29udmV4X25vcm1hbDsKICAgICAgY29uc3QgdmVjdG9yID0gaW50ZXJzZWN0Q29udmV4X3ZlY3RvcjsKICAgICAgY29uc3QgZmFjZUxpc3QgPSBvcHRpb25zICYmIG9wdGlvbnMuZmFjZUxpc3QgfHwgbnVsbDsgLy8gQ2hlY2tpbmcgZmFjZXMKCiAgICAgIGNvbnN0IGZhY2VzID0gc2hhcGUuZmFjZXM7CiAgICAgIGNvbnN0IHZlcnRpY2VzID0gc2hhcGUudmVydGljZXM7CiAgICAgIGNvbnN0IG5vcm1hbHMgPSBzaGFwZS5mYWNlTm9ybWFsczsKICAgICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy5kaXJlY3Rpb247CiAgICAgIGNvbnN0IGZyb20gPSB0aGlzLmZyb207CiAgICAgIGNvbnN0IHRvID0gdGhpcy50bzsKICAgICAgY29uc3QgZnJvbVRvRGlzdGFuY2UgPSBmcm9tLmRpc3RhbmNlVG8odG8pOwogICAgICBjb25zdCBOZmFjZXMgPSBmYWNlTGlzdCA/IGZhY2VMaXN0Lmxlbmd0aCA6IGZhY2VzLmxlbmd0aDsKICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5yZXN1bHQ7CgogICAgICBmb3IgKGxldCBqID0gMDsgIXJlc3VsdC5zaG91bGRTdG9wICYmIGogPCBOZmFjZXM7IGorKykgewogICAgICAgIGNvbnN0IGZpID0gZmFjZUxpc3QgPyBmYWNlTGlzdFtqXSA6IGo7CiAgICAgICAgY29uc3QgZmFjZSA9IGZhY2VzW2ZpXTsKICAgICAgICBjb25zdCBmYWNlTm9ybWFsID0gbm9ybWFsc1tmaV07CiAgICAgICAgY29uc3QgcSA9IHF1YXQ7CiAgICAgICAgY29uc3QgeCA9IHBvc2l0aW9uOyAvLyBkZXRlcm1pbmUgaWYgcmF5IGludGVyc2VjdHMgdGhlIHBsYW5lIG9mIHRoZSBmYWNlCiAgICAgICAgLy8gbm90ZTogdGhpcyB3b3JrcyByZWdhcmRsZXNzIG9mIHRoZSBkaXJlY3Rpb24gb2YgdGhlIGZhY2Ugbm9ybWFsCiAgICAgICAgLy8gR2V0IHBsYW5lIHBvaW50IGluIHdvcmxkIGNvb3JkaW5hdGVzLi4uCgogICAgICAgIHZlY3Rvci5jb3B5KHZlcnRpY2VzW2ZhY2VbMF1dKTsKICAgICAgICBxLnZtdWx0KHZlY3RvciwgdmVjdG9yKTsKICAgICAgICB2ZWN0b3IudmFkZCh4LCB2ZWN0b3IpOyAvLyAuLi5idXQgbWFrZSBpdCByZWxhdGl2ZSB0byB0aGUgcmF5IGZyb20uIFdlJ2xsIGZpeCB0aGlzIGxhdGVyLgoKICAgICAgICB2ZWN0b3IudnN1Yihmcm9tLCB2ZWN0b3IpOyAvLyBHZXQgcGxhbmUgbm9ybWFsCgogICAgICAgIHEudm11bHQoZmFjZU5vcm1hbCwgbm9ybWFsKTsgLy8gSWYgdGhpcyBkb3QgcHJvZHVjdCBpcyBuZWdhdGl2ZSwgd2UgaGF2ZSBzb21ldGhpbmcgaW50ZXJlc3RpbmcKCiAgICAgICAgY29uc3QgZG90ID0gZGlyZWN0aW9uLmRvdChub3JtYWwpOyAvLyBCYWlsIG91dCBpZiByYXkgYW5kIHBsYW5lIGFyZSBwYXJhbGxlbAoKICAgICAgICBpZiAoTWF0aC5hYnMoZG90KSA8IHRoaXMucHJlY2lzaW9uKSB7CiAgICAgICAgICBjb250aW51ZTsKICAgICAgICB9IC8vIGNhbGMgZGlzdGFuY2UgdG8gcGxhbmUKCgogICAgICAgIGNvbnN0IHNjYWxhciA9IG5vcm1hbC5kb3QodmVjdG9yKSAvIGRvdDsgLy8gaWYgbmVnYXRpdmUgZGlzdGFuY2UsIHRoZW4gcGxhbmUgaXMgYmVoaW5kIHJheQoKICAgICAgICBpZiAoc2NhbGFyIDwgMCkgewogICAgICAgICAgY29udGludWU7CiAgICAgICAgfSAvLyBpZiAoZG90IDwgMCkgewogICAgICAgIC8vIEludGVyc2VjdGlvbiBwb2ludCBpcyBmcm9tICsgZGlyZWN0aW9uICogc2NhbGFyCgoKICAgICAgICBkaXJlY3Rpb24uc2NhbGUoc2NhbGFyLCBpbnRlcnNlY3RQb2ludCk7CiAgICAgICAgaW50ZXJzZWN0UG9pbnQudmFkZChmcm9tLCBpbnRlcnNlY3RQb2ludCk7IC8vIGEgaXMgdGhlIHBvaW50IHdlIGNvbXBhcmUgcG9pbnRzIGIgYW5kIGMgd2l0aC4KCiAgICAgICAgYS5jb3B5KHZlcnRpY2VzW2ZhY2VbMF1dKTsKICAgICAgICBxLnZtdWx0KGEsIGEpOwogICAgICAgIHgudmFkZChhLCBhKTsKCiAgICAgICAgZm9yIChsZXQgaSA9IDE7ICFyZXN1bHQuc2hvdWxkU3RvcCAmJiBpIDwgZmFjZS5sZW5ndGggLSAxOyBpKyspIHsKICAgICAgICAgIC8vIFRyYW5zZm9ybSAzIHZlcnRpY2VzIHRvIHdvcmxkIGNvb3JkcwogICAgICAgICAgYi5jb3B5KHZlcnRpY2VzW2ZhY2VbaV1dKTsKICAgICAgICAgIGMuY29weSh2ZXJ0aWNlc1tmYWNlW2kgKyAxXV0pOwogICAgICAgICAgcS52bXVsdChiLCBiKTsKICAgICAgICAgIHEudm11bHQoYywgYyk7CiAgICAgICAgICB4LnZhZGQoYiwgYik7CiAgICAgICAgICB4LnZhZGQoYywgYyk7CiAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IGludGVyc2VjdFBvaW50LmRpc3RhbmNlVG8oZnJvbSk7CgogICAgICAgICAgaWYgKCEoUmF5LnBvaW50SW5UcmlhbmdsZShpbnRlcnNlY3RQb2ludCwgYSwgYiwgYykgfHwgUmF5LnBvaW50SW5UcmlhbmdsZShpbnRlcnNlY3RQb2ludCwgYiwgYSwgYykpIHx8IGRpc3RhbmNlID4gZnJvbVRvRGlzdGFuY2UpIHsKICAgICAgICAgICAgY29udGludWU7CiAgICAgICAgICB9CgogICAgICAgICAgdGhpcy5yZXBvcnRJbnRlcnNlY3Rpb24obm9ybWFsLCBpbnRlcnNlY3RQb2ludCwgcmVwb3J0ZWRTaGFwZSwgYm9keSwgZmkpOwogICAgICAgIH0gLy8gfQoKICAgICAgfQogICAgfQogICAgLyoqCiAgICAgKiBAdG9kbyBPcHRpbWl6ZSBieSB0cmFuc2Zvcm1pbmcgdGhlIHdvcmxkIHRvIGxvY2FsIHNwYWNlIGZpcnN0LgogICAgICogQHRvZG8gVXNlIE9jdHJlZSBsb29rdXAKICAgICAqLwoKCiAgICBfaW50ZXJzZWN0VHJpbWVzaChtZXNoLCBxdWF0LCBwb3NpdGlvbiwgYm9keSwgcmVwb3J0ZWRTaGFwZSwgb3B0aW9ucykgewogICAgICBjb25zdCBub3JtYWwgPSBpbnRlcnNlY3RUcmltZXNoX25vcm1hbDsKICAgICAgY29uc3QgdHJpYW5nbGVzID0gaW50ZXJzZWN0VHJpbWVzaF90cmlhbmdsZXM7CiAgICAgIGNvbnN0IHRyZWVUcmFuc2Zvcm0gPSBpbnRlcnNlY3RUcmltZXNoX3RyZWVUcmFuc2Zvcm07CiAgICAgIGNvbnN0IHZlY3RvciA9IGludGVyc2VjdENvbnZleF92ZWN0b3I7CiAgICAgIGNvbnN0IGxvY2FsRGlyZWN0aW9uID0gaW50ZXJzZWN0VHJpbWVzaF9sb2NhbERpcmVjdGlvbjsKICAgICAgY29uc3QgbG9jYWxGcm9tID0gaW50ZXJzZWN0VHJpbWVzaF9sb2NhbEZyb207CiAgICAgIGNvbnN0IGxvY2FsVG8gPSBpbnRlcnNlY3RUcmltZXNoX2xvY2FsVG87CiAgICAgIGNvbnN0IHdvcmxkSW50ZXJzZWN0UG9pbnQgPSBpbnRlcnNlY3RUcmltZXNoX3dvcmxkSW50ZXJzZWN0UG9pbnQ7CiAgICAgIGNvbnN0IHdvcmxkTm9ybWFsID0gaW50ZXJzZWN0VHJpbWVzaF93b3JsZE5vcm1hbDsgLy8gQ2hlY2tpbmcgZmFjZXMKCiAgICAgIGNvbnN0IGluZGljZXMgPSBtZXNoLmluZGljZXM7CiAgICAgIG1lc2gudmVydGljZXM7IC8vIGNvbnN0IG5vcm1hbHMgPSBtZXNoLmZhY2VOb3JtYWxzCgogICAgICBjb25zdCBmcm9tID0gdGhpcy5mcm9tOwogICAgICBjb25zdCB0byA9IHRoaXMudG87CiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuZGlyZWN0aW9uOwogICAgICB0cmVlVHJhbnNmb3JtLnBvc2l0aW9uLmNvcHkocG9zaXRpb24pOwogICAgICB0cmVlVHJhbnNmb3JtLnF1YXRlcm5pb24uY29weShxdWF0KTsgLy8gVHJhbnNmb3JtIHJheSB0byBsb2NhbCBzcGFjZSEKCiAgICAgIFRyYW5zZm9ybS52ZWN0b3JUb0xvY2FsRnJhbWUocG9zaXRpb24sIHF1YXQsIGRpcmVjdGlvbiwgbG9jYWxEaXJlY3Rpb24pOwogICAgICBUcmFuc2Zvcm0ucG9pbnRUb0xvY2FsRnJhbWUocG9zaXRpb24sIHF1YXQsIGZyb20sIGxvY2FsRnJvbSk7CiAgICAgIFRyYW5zZm9ybS5wb2ludFRvTG9jYWxGcmFtZShwb3NpdGlvbiwgcXVhdCwgdG8sIGxvY2FsVG8pOwogICAgICBsb2NhbFRvLnggKj0gbWVzaC5zY2FsZS54OwogICAgICBsb2NhbFRvLnkgKj0gbWVzaC5zY2FsZS55OwogICAgICBsb2NhbFRvLnogKj0gbWVzaC5zY2FsZS56OwogICAgICBsb2NhbEZyb20ueCAqPSBtZXNoLnNjYWxlLng7CiAgICAgIGxvY2FsRnJvbS55ICo9IG1lc2guc2NhbGUueTsKICAgICAgbG9jYWxGcm9tLnogKj0gbWVzaC5zY2FsZS56OwogICAgICBsb2NhbFRvLnZzdWIobG9jYWxGcm9tLCBsb2NhbERpcmVjdGlvbik7CiAgICAgIGxvY2FsRGlyZWN0aW9uLm5vcm1hbGl6ZSgpOwogICAgICBjb25zdCBmcm9tVG9EaXN0YW5jZVNxdWFyZWQgPSBsb2NhbEZyb20uZGlzdGFuY2VTcXVhcmVkKGxvY2FsVG8pOwogICAgICBtZXNoLnRyZWUucmF5UXVlcnkodGhpcywgdHJlZVRyYW5zZm9ybSwgdHJpYW5nbGVzKTsKCiAgICAgIGZvciAobGV0IGkgPSAwLCBOID0gdHJpYW5nbGVzLmxlbmd0aDsgIXRoaXMucmVzdWx0LnNob3VsZFN0b3AgJiYgaSAhPT0gTjsgaSsrKSB7CiAgICAgICAgY29uc3QgdHJpYW5nbGVzSW5kZXggPSB0cmlhbmdsZXNbaV07CiAgICAgICAgbWVzaC5nZXROb3JtYWwodHJpYW5nbGVzSW5kZXgsIG5vcm1hbCk7IC8vIGRldGVybWluZSBpZiByYXkgaW50ZXJzZWN0cyB0aGUgcGxhbmUgb2YgdGhlIGZhY2UKICAgICAgICAvLyBub3RlOiB0aGlzIHdvcmtzIHJlZ2FyZGxlc3Mgb2YgdGhlIGRpcmVjdGlvbiBvZiB0aGUgZmFjZSBub3JtYWwKICAgICAgICAvLyBHZXQgcGxhbmUgcG9pbnQgaW4gd29ybGQgY29vcmRpbmF0ZXMuLi4KCiAgICAgICAgbWVzaC5nZXRWZXJ0ZXgoaW5kaWNlc1t0cmlhbmdsZXNJbmRleCAqIDNdLCBhKTsgLy8gLi4uYnV0IG1ha2UgaXQgcmVsYXRpdmUgdG8gdGhlIHJheSBmcm9tLiBXZSdsbCBmaXggdGhpcyBsYXRlci4KCiAgICAgICAgYS52c3ViKGxvY2FsRnJvbSwgdmVjdG9yKTsgLy8gSWYgdGhpcyBkb3QgcHJvZHVjdCBpcyBuZWdhdGl2ZSwgd2UgaGF2ZSBzb21ldGhpbmcgaW50ZXJlc3RpbmcKCiAgICAgICAgY29uc3QgZG90ID0gbG9jYWxEaXJlY3Rpb24uZG90KG5vcm1hbCk7IC8vIEJhaWwgb3V0IGlmIHJheSBhbmQgcGxhbmUgYXJlIHBhcmFsbGVsCiAgICAgICAgLy8gaWYgKE1hdGguYWJzKCBkb3QgKSA8IHRoaXMucHJlY2lzaW9uKXsKICAgICAgICAvLyAgICAgY29udGludWU7CiAgICAgICAgLy8gfQogICAgICAgIC8vIGNhbGMgZGlzdGFuY2UgdG8gcGxhbmUKCiAgICAgICAgY29uc3Qgc2NhbGFyID0gbm9ybWFsLmRvdCh2ZWN0b3IpIC8gZG90OyAvLyBpZiBuZWdhdGl2ZSBkaXN0YW5jZSwgdGhlbiBwbGFuZSBpcyBiZWhpbmQgcmF5CgogICAgICAgIGlmIChzY2FsYXIgPCAwKSB7CiAgICAgICAgICBjb250aW51ZTsKICAgICAgICB9IC8vIEludGVyc2VjdGlvbiBwb2ludCBpcyBmcm9tICsgZGlyZWN0aW9uICogc2NhbGFyCgoKICAgICAgICBsb2NhbERpcmVjdGlvbi5zY2FsZShzY2FsYXIsIGludGVyc2VjdFBvaW50KTsKICAgICAgICBpbnRlcnNlY3RQb2ludC52YWRkKGxvY2FsRnJvbSwgaW50ZXJzZWN0UG9pbnQpOyAvLyBHZXQgdHJpYW5nbGUgdmVydGljZXMKCiAgICAgICAgbWVzaC5nZXRWZXJ0ZXgoaW5kaWNlc1t0cmlhbmdsZXNJbmRleCAqIDMgKyAxXSwgYik7CiAgICAgICAgbWVzaC5nZXRWZXJ0ZXgoaW5kaWNlc1t0cmlhbmdsZXNJbmRleCAqIDMgKyAyXSwgYyk7CiAgICAgICAgY29uc3Qgc3F1YXJlZERpc3RhbmNlID0gaW50ZXJzZWN0UG9pbnQuZGlzdGFuY2VTcXVhcmVkKGxvY2FsRnJvbSk7CgogICAgICAgIGlmICghKFJheS5wb2ludEluVHJpYW5nbGUoaW50ZXJzZWN0UG9pbnQsIGIsIGEsIGMpIHx8IFJheS5wb2ludEluVHJpYW5nbGUoaW50ZXJzZWN0UG9pbnQsIGEsIGIsIGMpKSB8fCBzcXVhcmVkRGlzdGFuY2UgPiBmcm9tVG9EaXN0YW5jZVNxdWFyZWQpIHsKICAgICAgICAgIGNvbnRpbnVlOwogICAgICAgIH0gLy8gdHJhbnNmb3JtIGludGVyc2VjdHBvaW50IGFuZCBub3JtYWwgdG8gd29ybGQKCgogICAgICAgIFRyYW5zZm9ybS52ZWN0b3JUb1dvcmxkRnJhbWUocXVhdCwgbm9ybWFsLCB3b3JsZE5vcm1hbCk7CiAgICAgICAgVHJhbnNmb3JtLnBvaW50VG9Xb3JsZEZyYW1lKHBvc2l0aW9uLCBxdWF0LCBpbnRlcnNlY3RQb2ludCwgd29ybGRJbnRlcnNlY3RQb2ludCk7CiAgICAgICAgdGhpcy5yZXBvcnRJbnRlcnNlY3Rpb24od29ybGROb3JtYWwsIHdvcmxkSW50ZXJzZWN0UG9pbnQsIHJlcG9ydGVkU2hhcGUsIGJvZHksIHRyaWFuZ2xlc0luZGV4KTsKICAgICAgfQoKICAgICAgdHJpYW5nbGVzLmxlbmd0aCA9IDA7CiAgICB9CiAgICAvKioKICAgICAqIEByZXR1cm4gVHJ1ZSBpZiB0aGUgaW50ZXJzZWN0aW9ucyBzaG91bGQgY29udGludWUKICAgICAqLwoKCiAgICByZXBvcnRJbnRlcnNlY3Rpb24obm9ybWFsLCBoaXRQb2ludFdvcmxkLCBzaGFwZSwgYm9keSwgaGl0RmFjZUluZGV4KSB7CiAgICAgIGNvbnN0IGZyb20gPSB0aGlzLmZyb207CiAgICAgIGNvbnN0IHRvID0gdGhpcy50bzsKICAgICAgY29uc3QgZGlzdGFuY2UgPSBmcm9tLmRpc3RhbmNlVG8oaGl0UG9pbnRXb3JsZCk7CiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucmVzdWx0OyAvLyBTa2lwIGJhY2sgZmFjZXM/CgogICAgICBpZiAodGhpcy5za2lwQmFja2ZhY2VzICYmIG5vcm1hbC5kb3QodGhpcy5kaXJlY3Rpb24pID4gMCkgewogICAgICAgIHJldHVybjsKICAgICAgfQoKICAgICAgcmVzdWx0LmhpdEZhY2VJbmRleCA9IHR5cGVvZiBoaXRGYWNlSW5kZXggIT09ICd1bmRlZmluZWQnID8gaGl0RmFjZUluZGV4IDogLTE7CgogICAgICBzd2l0Y2ggKHRoaXMubW9kZSkgewogICAgICAgIGNhc2UgUmF5LkFMTDoKICAgICAgICAgIHRoaXMuaGFzSGl0ID0gdHJ1ZTsKICAgICAgICAgIHJlc3VsdC5zZXQoZnJvbSwgdG8sIG5vcm1hbCwgaGl0UG9pbnRXb3JsZCwgc2hhcGUsIGJvZHksIGRpc3RhbmNlKTsKICAgICAgICAgIHJlc3VsdC5oYXNIaXQgPSB0cnVlOwogICAgICAgICAgdGhpcy5jYWxsYmFjayhyZXN1bHQpOwogICAgICAgICAgYnJlYWs7CgogICAgICAgIGNhc2UgUmF5LkNMT1NFU1Q6CiAgICAgICAgICAvLyBTdG9yZSBpZiBjbG9zZXIgdGhhbiBjdXJyZW50IGNsb3Nlc3QKICAgICAgICAgIGlmIChkaXN0YW5jZSA8IHJlc3VsdC5kaXN0YW5jZSB8fCAhcmVzdWx0Lmhhc0hpdCkgewogICAgICAgICAgICB0aGlzLmhhc0hpdCA9IHRydWU7CiAgICAgICAgICAgIHJlc3VsdC5oYXNIaXQgPSB0cnVlOwogICAgICAgICAgICByZXN1bHQuc2V0KGZyb20sIHRvLCBub3JtYWwsIGhpdFBvaW50V29ybGQsIHNoYXBlLCBib2R5LCBkaXN0YW5jZSk7CiAgICAgICAgICB9CgogICAgICAgICAgYnJlYWs7CgogICAgICAgIGNhc2UgUmF5LkFOWToKICAgICAgICAgIC8vIFJlcG9ydCBhbmQgc3RvcC4KICAgICAgICAgIHRoaXMuaGFzSGl0ID0gdHJ1ZTsKICAgICAgICAgIHJlc3VsdC5oYXNIaXQgPSB0cnVlOwogICAgICAgICAgcmVzdWx0LnNldChmcm9tLCB0bywgbm9ybWFsLCBoaXRQb2ludFdvcmxkLCBzaGFwZSwgYm9keSwgZGlzdGFuY2UpOwogICAgICAgICAgcmVzdWx0LnNob3VsZFN0b3AgPSB0cnVlOwogICAgICAgICAgYnJlYWs7CiAgICAgIH0KICAgIH0KICAgIC8qKgogICAgICogQXMgcGVyICJCYXJ5Y2VudHJpYyBUZWNobmlxdWUiIGFzIG5hbWVkCiAgICAgKiB7QGxpbmsgaHR0cHM6Ly93d3cuYmxhY2twYXduLmNvbS90ZXh0cy9wb2ludGlucG9seS9kZWZhdWx0Lmh0bWwgaGVyZX0gYnV0IHdpdGhvdXQgdGhlIGRpdmlzaW9uCiAgICAgKi8KCgogICAgc3RhdGljIHBvaW50SW5UcmlhbmdsZShwLCBhLCBiLCBjKSB7CiAgICAgIGMudnN1YihhLCB2MCk7CiAgICAgIGIudnN1YihhLCB2MSk7CiAgICAgIHAudnN1YihhLCB2Mik7CiAgICAgIGNvbnN0IGRvdDAwID0gdjAuZG90KHYwKTsKICAgICAgY29uc3QgZG90MDEgPSB2MC5kb3QodjEpOwogICAgICBjb25zdCBkb3QwMiA9IHYwLmRvdCh2Mik7CiAgICAgIGNvbnN0IGRvdDExID0gdjEuZG90KHYxKTsKICAgICAgY29uc3QgZG90MTIgPSB2MS5kb3QodjIpOwogICAgICBsZXQgdTsKICAgICAgbGV0IHY7CiAgICAgIHJldHVybiAodSA9IGRvdDExICogZG90MDIgLSBkb3QwMSAqIGRvdDEyKSA+PSAwICYmICh2ID0gZG90MDAgKiBkb3QxMiAtIGRvdDAxICogZG90MDIpID49IDAgJiYgdSArIHYgPCBkb3QwMCAqIGRvdDExIC0gZG90MDEgKiBkb3QwMTsKICAgIH0KCiAgfQogIFJheS5DTE9TRVNUID0gUkFZX01PREVTLkNMT1NFU1Q7CiAgUmF5LkFOWSA9IFJBWV9NT0RFUy5BTlk7CiAgUmF5LkFMTCA9IFJBWV9NT0RFUy5BTEw7CiAgY29uc3QgdG1wQUFCQiQxID0gbmV3IEFBQkIoKTsKICBjb25zdCB0bXBBcnJheSA9IFtdOwogIGNvbnN0IHYxID0gbmV3IFZlYzMoKTsKICBjb25zdCB2MiA9IG5ldyBWZWMzKCk7CiAgY29uc3QgaW50ZXJzZWN0Qm9keV94aSA9IG5ldyBWZWMzKCk7CiAgY29uc3QgaW50ZXJzZWN0Qm9keV9xaSA9IG5ldyBRdWF0ZXJuaW9uKCk7CiAgY29uc3QgaW50ZXJzZWN0UG9pbnQgPSBuZXcgVmVjMygpOwogIGNvbnN0IGEgPSBuZXcgVmVjMygpOwogIGNvbnN0IGIgPSBuZXcgVmVjMygpOwogIGNvbnN0IGMgPSBuZXcgVmVjMygpOwogIG5ldyBWZWMzKCk7CiAgbmV3IFJheWNhc3RSZXN1bHQoKTsKICBjb25zdCBpbnRlcnNlY3RDb252ZXhPcHRpb25zID0gewogICAgZmFjZUxpc3Q6IFswXQogIH07CiAgY29uc3Qgd29ybGRQaWxsYXJPZmZzZXQgPSBuZXcgVmVjMygpOwogIGNvbnN0IGludGVyc2VjdEhlaWdodGZpZWxkX2xvY2FsUmF5ID0gbmV3IFJheSgpOwogIGNvbnN0IGludGVyc2VjdEhlaWdodGZpZWxkX2luZGV4ID0gW107CiAgY29uc3QgUmF5X2ludGVyc2VjdFNwaGVyZV9pbnRlcnNlY3Rpb25Qb2ludCA9IG5ldyBWZWMzKCk7CiAgY29uc3QgUmF5X2ludGVyc2VjdFNwaGVyZV9ub3JtYWwgPSBuZXcgVmVjMygpOwogIGNvbnN0IGludGVyc2VjdENvbnZleF9ub3JtYWwgPSBuZXcgVmVjMygpOwogIG5ldyBWZWMzKCk7CiAgbmV3IFZlYzMoKTsKICBjb25zdCBpbnRlcnNlY3RDb252ZXhfdmVjdG9yID0gbmV3IFZlYzMoKTsKICBjb25zdCBpbnRlcnNlY3RUcmltZXNoX25vcm1hbCA9IG5ldyBWZWMzKCk7CiAgY29uc3QgaW50ZXJzZWN0VHJpbWVzaF9sb2NhbERpcmVjdGlvbiA9IG5ldyBWZWMzKCk7CiAgY29uc3QgaW50ZXJzZWN0VHJpbWVzaF9sb2NhbEZyb20gPSBuZXcgVmVjMygpOwogIGNvbnN0IGludGVyc2VjdFRyaW1lc2hfbG9jYWxUbyA9IG5ldyBWZWMzKCk7CiAgY29uc3QgaW50ZXJzZWN0VHJpbWVzaF93b3JsZE5vcm1hbCA9IG5ldyBWZWMzKCk7CiAgY29uc3QgaW50ZXJzZWN0VHJpbWVzaF93b3JsZEludGVyc2VjdFBvaW50ID0gbmV3IFZlYzMoKTsKICBuZXcgQUFCQigpOwogIGNvbnN0IGludGVyc2VjdFRyaW1lc2hfdHJpYW5nbGVzID0gW107CiAgY29uc3QgaW50ZXJzZWN0VHJpbWVzaF90cmVlVHJhbnNmb3JtID0gbmV3IFRyYW5zZm9ybSgpOwogIGNvbnN0IHYwID0gbmV3IFZlYzMoKTsKICBjb25zdCBpbnRlcnNlY3QgPSBuZXcgVmVjMygpOwoKICBmdW5jdGlvbiBkaXN0YW5jZUZyb21JbnRlcnNlY3Rpb24oZnJvbSwgZGlyZWN0aW9uLCBwb3NpdGlvbikgewogICAgLy8gdjAgaXMgdmVjdG9yIGZyb20gZnJvbSB0byBwb3NpdGlvbgogICAgcG9zaXRpb24udnN1Yihmcm9tLCB2MCk7CiAgICBjb25zdCBkb3QgPSB2MC5kb3QoZGlyZWN0aW9uKTsgLy8gaW50ZXJzZWN0ID0gZGlyZWN0aW9uKmRvdCArIGZyb20KCiAgICBkaXJlY3Rpb24uc2NhbGUoZG90LCBpbnRlcnNlY3QpOwogICAgaW50ZXJzZWN0LnZhZGQoZnJvbSwgaW50ZXJzZWN0KTsKICAgIGNvbnN0IGRpc3RhbmNlID0gcG9zaXRpb24uZGlzdGFuY2VUbyhpbnRlcnNlY3QpOwogICAgcmV0dXJuIGRpc3RhbmNlOwogIH0KCiAgLyoqCiAgICogU3dlZXAgYW5kIHBydW5lIGJyb2FkcGhhc2UgYWxvbmcgb25lIGF4aXMuCiAgICovCiAgY2xhc3MgU0FQQnJvYWRwaGFzZSBleHRlbmRzIEJyb2FkcGhhc2UgewogICAgLyoqCiAgICAgKiBMaXN0IG9mIGJvZGllcyBjdXJyZW50bHkgaW4gdGhlIGJyb2FkcGhhc2UuCiAgICAgKi8KCiAgICAvKioKICAgICAqIFRoZSB3b3JsZCB0byBzZWFyY2ggaW4uCiAgICAgKi8KCiAgICAvKioKICAgICAqIEF4aXMgdG8gc29ydCB0aGUgYm9kaWVzIGFsb25nLgogICAgICogU2V0IHRvIDAgZm9yIHggYXhpcywgYW5kIDEgZm9yIHkgYXhpcy4KICAgICAqIEZvciBiZXN0IHBlcmZvcm1hbmNlLCBwaWNrIHRoZSBheGlzIHdoZXJlIGJvZGllcyBhcmUgbW9zdCBkaXN0cmlidXRlZC4KICAgICAqLwoKICAgIC8qKgogICAgICogQ2hlY2sgaWYgdGhlIGJvdW5kcyBvZiB0d28gYm9kaWVzIG92ZXJsYXAsIGFsb25nIHRoZSBnaXZlbiBTQVAgYXhpcy4KICAgICAqLwogICAgc3RhdGljIGNoZWNrQm91bmRzKGJpLCBiaiwgYXhpc0luZGV4KSB7CiAgICAgIGxldCBiaVBvczsKICAgICAgbGV0IGJqUG9zOwoKICAgICAgaWYgKGF4aXNJbmRleCA9PT0gMCkgewogICAgICAgIGJpUG9zID0gYmkucG9zaXRpb24ueDsKICAgICAgICBialBvcyA9IGJqLnBvc2l0aW9uLng7CiAgICAgIH0gZWxzZSBpZiAoYXhpc0luZGV4ID09PSAxKSB7CiAgICAgICAgYmlQb3MgPSBiaS5wb3NpdGlvbi55OwogICAgICAgIGJqUG9zID0gYmoucG9zaXRpb24ueTsKICAgICAgfSBlbHNlIGlmIChheGlzSW5kZXggPT09IDIpIHsKICAgICAgICBiaVBvcyA9IGJpLnBvc2l0aW9uLno7CiAgICAgICAgYmpQb3MgPSBiai5wb3NpdGlvbi56OwogICAgICB9CgogICAgICBjb25zdCByaSA9IGJpLmJvdW5kaW5nUmFkaXVzLAogICAgICAgICAgICByaiA9IGJqLmJvdW5kaW5nUmFkaXVzLAogICAgICAgICAgICBib3VuZEEyID0gYmlQb3MgKyByaSwKICAgICAgICAgICAgYm91bmRCMSA9IGJqUG9zIC0gcmo7CiAgICAgIHJldHVybiBib3VuZEIxIDwgYm91bmRBMjsKICAgIH0gLy8gTm90ZTogdGhlc2UgYXJlIGlkZW50aWNhbCwgc2F2ZSBmb3IgeC95L3ogbG93ZXJib3VuZAoKICAgIC8qKgogICAgICogaW5zZXJ0aW9uU29ydFgKICAgICAqLwoKCiAgICBzdGF0aWMgaW5zZXJ0aW9uU29ydFgoYSkgewogICAgICBmb3IgKGxldCBpID0gMSwgbCA9IGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7CiAgICAgICAgY29uc3QgdiA9IGFbaV07CiAgICAgICAgbGV0IGo7CgogICAgICAgIGZvciAoaiA9IGkgLSAxOyBqID49IDA7IGotLSkgewogICAgICAgICAgaWYgKGFbal0uYWFiYi5sb3dlckJvdW5kLnggPD0gdi5hYWJiLmxvd2VyQm91bmQueCkgewogICAgICAgICAgICBicmVhazsKICAgICAgICAgIH0KCiAgICAgICAgICBhW2ogKyAxXSA9IGFbal07CiAgICAgICAgfQoKICAgICAgICBhW2ogKyAxXSA9IHY7CiAgICAgIH0KCiAgICAgIHJldHVybiBhOwogICAgfQogICAgLyoqCiAgICAgKiBpbnNlcnRpb25Tb3J0WQogICAgICovCgoKICAgIHN0YXRpYyBpbnNlcnRpb25Tb3J0WShhKSB7CiAgICAgIGZvciAobGV0IGkgPSAxLCBsID0gYS5sZW5ndGg7IGkgPCBsOyBpKyspIHsKICAgICAgICBjb25zdCB2ID0gYVtpXTsKICAgICAgICBsZXQgajsKCiAgICAgICAgZm9yIChqID0gaSAtIDE7IGogPj0gMDsgai0tKSB7CiAgICAgICAgICBpZiAoYVtqXS5hYWJiLmxvd2VyQm91bmQueSA8PSB2LmFhYmIubG93ZXJCb3VuZC55KSB7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgfQoKICAgICAgICAgIGFbaiArIDFdID0gYVtqXTsKICAgICAgICB9CgogICAgICAgIGFbaiArIDFdID0gdjsKICAgICAgfQoKICAgICAgcmV0dXJuIGE7CiAgICB9CiAgICAvKioKICAgICAqIGluc2VydGlvblNvcnRaCiAgICAgKi8KCgogICAgc3RhdGljIGluc2VydGlvblNvcnRaKGEpIHsKICAgICAgZm9yIChsZXQgaSA9IDEsIGwgPSBhLmxlbmd0aDsgaSA8IGw7IGkrKykgewogICAgICAgIGNvbnN0IHYgPSBhW2ldOwogICAgICAgIGxldCBqOwoKICAgICAgICBmb3IgKGogPSBpIC0gMTsgaiA+PSAwOyBqLS0pIHsKICAgICAgICAgIGlmIChhW2pdLmFhYmIubG93ZXJCb3VuZC56IDw9IHYuYWFiYi5sb3dlckJvdW5kLnopIHsKICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICB9CgogICAgICAgICAgYVtqICsgMV0gPSBhW2pdOwogICAgICAgIH0KCiAgICAgICAgYVtqICsgMV0gPSB2OwogICAgICB9CgogICAgICByZXR1cm4gYTsKICAgIH0KCiAgICBjb25zdHJ1Y3Rvcih3b3JsZCkgewogICAgICBzdXBlcigpOwogICAgICB0aGlzLmF4aXNMaXN0ID0gW107CiAgICAgIHRoaXMud29ybGQgPSBudWxsOwogICAgICB0aGlzLmF4aXNJbmRleCA9IDA7CiAgICAgIGNvbnN0IGF4aXNMaXN0ID0gdGhpcy5heGlzTGlzdDsKCiAgICAgIHRoaXMuX2FkZEJvZHlIYW5kbGVyID0gZXZlbnQgPT4gewogICAgICAgIGF4aXNMaXN0LnB1c2goZXZlbnQuYm9keSk7CiAgICAgIH07CgogICAgICB0aGlzLl9yZW1vdmVCb2R5SGFuZGxlciA9IGV2ZW50ID0+IHsKICAgICAgICBjb25zdCBpZHggPSBheGlzTGlzdC5pbmRleE9mKGV2ZW50LmJvZHkpOwoKICAgICAgICBpZiAoaWR4ICE9PSAtMSkgewogICAgICAgICAgYXhpc0xpc3Quc3BsaWNlKGlkeCwgMSk7CiAgICAgICAgfQogICAgICB9OwoKICAgICAgaWYgKHdvcmxkKSB7CiAgICAgICAgdGhpcy5zZXRXb3JsZCh3b3JsZCk7CiAgICAgIH0KICAgIH0KICAgIC8qKgogICAgICogQ2hhbmdlIHRoZSB3b3JsZAogICAgICovCgoKICAgIHNldFdvcmxkKHdvcmxkKSB7CiAgICAgIC8vIENsZWFyIHRoZSBvbGQgYXhpcyBhcnJheQogICAgICB0aGlzLmF4aXNMaXN0Lmxlbmd0aCA9IDA7IC8vIEFkZCBhbGwgYm9kaWVzIGZyb20gdGhlIG5ldyB3b3JsZAoKICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3JsZC5ib2RpZXMubGVuZ3RoOyBpKyspIHsKICAgICAgICB0aGlzLmF4aXNMaXN0LnB1c2god29ybGQuYm9kaWVzW2ldKTsKICAgICAgfSAvLyBSZW1vdmUgb2xkIGhhbmRsZXJzLCBpZiBhbnkKCgogICAgICB3b3JsZC5yZW1vdmVFdmVudExpc3RlbmVyKCdhZGRCb2R5JywgdGhpcy5fYWRkQm9keUhhbmRsZXIpOwogICAgICB3b3JsZC5yZW1vdmVFdmVudExpc3RlbmVyKCdyZW1vdmVCb2R5JywgdGhpcy5fcmVtb3ZlQm9keUhhbmRsZXIpOyAvLyBBZGQgaGFuZGxlcnMgdG8gdXBkYXRlIHRoZSBsaXN0IG9mIGJvZGllcy4KCiAgICAgIHdvcmxkLmFkZEV2ZW50TGlzdGVuZXIoJ2FkZEJvZHknLCB0aGlzLl9hZGRCb2R5SGFuZGxlcik7CiAgICAgIHdvcmxkLmFkZEV2ZW50TGlzdGVuZXIoJ3JlbW92ZUJvZHknLCB0aGlzLl9yZW1vdmVCb2R5SGFuZGxlcik7CiAgICAgIHRoaXMud29ybGQgPSB3b3JsZDsKICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7CiAgICB9CiAgICAvKioKICAgICAqIENvbGxlY3QgYWxsIGNvbGxpc2lvbiBwYWlycwogICAgICovCgoKICAgIGNvbGxpc2lvblBhaXJzKHdvcmxkLCBwMSwgcDIpIHsKICAgICAgY29uc3QgYm9kaWVzID0gdGhpcy5heGlzTGlzdDsKICAgICAgY29uc3QgTiA9IGJvZGllcy5sZW5ndGg7CiAgICAgIGNvbnN0IGF4aXNJbmRleCA9IHRoaXMuYXhpc0luZGV4OwogICAgICBsZXQgaTsKICAgICAgbGV0IGo7CgogICAgICBpZiAodGhpcy5kaXJ0eSkgewogICAgICAgIHRoaXMuc29ydExpc3QoKTsKICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7CiAgICAgIH0gLy8gTG9vayB0aHJvdWdoIHRoZSBsaXN0CgoKICAgICAgZm9yIChpID0gMDsgaSAhPT0gTjsgaSsrKSB7CiAgICAgICAgY29uc3QgYmkgPSBib2RpZXNbaV07CgogICAgICAgIGZvciAoaiA9IGkgKyAxOyBqIDwgTjsgaisrKSB7CiAgICAgICAgICBjb25zdCBiaiA9IGJvZGllc1tqXTsKCiAgICAgICAgICBpZiAoIXRoaXMubmVlZEJyb2FkcGhhc2VDb2xsaXNpb24oYmksIGJqKSkgewogICAgICAgICAgICBjb250aW51ZTsKICAgICAgICAgIH0KCiAgICAgICAgICBpZiAoIVNBUEJyb2FkcGhhc2UuY2hlY2tCb3VuZHMoYmksIGJqLCBheGlzSW5kZXgpKSB7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgfQoKICAgICAgICAgIHRoaXMuaW50ZXJzZWN0aW9uVGVzdChiaSwgYmosIHAxLCBwMik7CiAgICAgICAgfQogICAgICB9CiAgICB9CgogICAgc29ydExpc3QoKSB7CiAgICAgIGNvbnN0IGF4aXNMaXN0ID0gdGhpcy5heGlzTGlzdDsKICAgICAgY29uc3QgYXhpc0luZGV4ID0gdGhpcy5heGlzSW5kZXg7CiAgICAgIGNvbnN0IE4gPSBheGlzTGlzdC5sZW5ndGg7IC8vIFVwZGF0ZSBBQUJCcwoKICAgICAgZm9yIChsZXQgaSA9IDA7IGkgIT09IE47IGkrKykgewogICAgICAgIGNvbnN0IGJpID0gYXhpc0xpc3RbaV07CgogICAgICAgIGlmIChiaS5hYWJiTmVlZHNVcGRhdGUpIHsKICAgICAgICAgIGJpLnVwZGF0ZUFBQkIoKTsKICAgICAgICB9CiAgICAgIH0gLy8gU29ydCB0aGUgbGlzdAoKCiAgICAgIGlmIChheGlzSW5kZXggPT09IDApIHsKICAgICAgICBTQVBCcm9hZHBoYXNlLmluc2VydGlvblNvcnRYKGF4aXNMaXN0KTsKICAgICAgfSBlbHNlIGlmIChheGlzSW5kZXggPT09IDEpIHsKICAgICAgICBTQVBCcm9hZHBoYXNlLmluc2VydGlvblNvcnRZKGF4aXNMaXN0KTsKICAgICAgfSBlbHNlIGlmIChheGlzSW5kZXggPT09IDIpIHsKICAgICAgICBTQVBCcm9hZHBoYXNlLmluc2VydGlvblNvcnRaKGF4aXNMaXN0KTsKICAgICAgfQogICAgfQogICAgLyoqCiAgICAgKiBDb21wdXRlcyB0aGUgdmFyaWFuY2Ugb2YgdGhlIGJvZHkgcG9zaXRpb25zIGFuZCBlc3RpbWF0ZXMgdGhlIGJlc3QgYXhpcyB0byB1c2UuCiAgICAgKiBXaWxsIGF1dG9tYXRpY2FsbHkgc2V0IHByb3BlcnR5IGBheGlzSW5kZXhgLgogICAgICovCgoKICAgIGF1dG9EZXRlY3RBeGlzKCkgewogICAgICBsZXQgc3VtWCA9IDA7CiAgICAgIGxldCBzdW1YMiA9IDA7CiAgICAgIGxldCBzdW1ZID0gMDsKICAgICAgbGV0IHN1bVkyID0gMDsKICAgICAgbGV0IHN1bVogPSAwOwogICAgICBsZXQgc3VtWjIgPSAwOwogICAgICBjb25zdCBib2RpZXMgPSB0aGlzLmF4aXNMaXN0OwogICAgICBjb25zdCBOID0gYm9kaWVzLmxlbmd0aDsKICAgICAgY29uc3QgaW52TiA9IDEgLyBOOwoKICAgICAgZm9yIChsZXQgaSA9IDA7IGkgIT09IE47IGkrKykgewogICAgICAgIGNvbnN0IGIgPSBib2RpZXNbaV07CiAgICAgICAgY29uc3QgY2VudGVyWCA9IGIucG9zaXRpb24ueDsKICAgICAgICBzdW1YICs9IGNlbnRlclg7CiAgICAgICAgc3VtWDIgKz0gY2VudGVyWCAqIGNlbnRlclg7CiAgICAgICAgY29uc3QgY2VudGVyWSA9IGIucG9zaXRpb24ueTsKICAgICAgICBzdW1ZICs9IGNlbnRlclk7CiAgICAgICAgc3VtWTIgKz0gY2VudGVyWSAqIGNlbnRlclk7CiAgICAgICAgY29uc3QgY2VudGVyWiA9IGIucG9zaXRpb24uejsKICAgICAgICBzdW1aICs9IGNlbnRlclo7CiAgICAgICAgc3VtWjIgKz0gY2VudGVyWiAqIGNlbnRlclo7CiAgICAgIH0KCiAgICAgIGNvbnN0IHZhcmlhbmNlWCA9IHN1bVgyIC0gc3VtWCAqIHN1bVggKiBpbnZOOwogICAgICBjb25zdCB2YXJpYW5jZVkgPSBzdW1ZMiAtIHN1bVkgKiBzdW1ZICogaW52TjsKICAgICAgY29uc3QgdmFyaWFuY2VaID0gc3VtWjIgLSBzdW1aICogc3VtWiAqIGludk47CgogICAgICBpZiAodmFyaWFuY2VYID4gdmFyaWFuY2VZKSB7CiAgICAgICAgaWYgKHZhcmlhbmNlWCA+IHZhcmlhbmNlWikgewogICAgICAgICAgdGhpcy5heGlzSW5kZXggPSAwOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICB0aGlzLmF4aXNJbmRleCA9IDI7CiAgICAgICAgfQogICAgICB9IGVsc2UgaWYgKHZhcmlhbmNlWSA+IHZhcmlhbmNlWikgewogICAgICAgIHRoaXMuYXhpc0luZGV4ID0gMTsKICAgICAgfSBlbHNlIHsKICAgICAgICB0aGlzLmF4aXNJbmRleCA9IDI7CiAgICAgIH0KICAgIH0KICAgIC8qKgogICAgICogUmV0dXJucyBhbGwgdGhlIGJvZGllcyB3aXRoaW4gYW4gQUFCQi4KICAgICAqIEBwYXJhbSByZXN1bHQgQW4gYXJyYXkgdG8gc3RvcmUgcmVzdWx0aW5nIGJvZGllcyBpbi4KICAgICAqLwoKCiAgICBhYWJiUXVlcnkod29ybGQsIGFhYmIsIHJlc3VsdCkgewogICAgICBpZiAocmVzdWx0ID09PSB2b2lkIDApIHsKICAgICAgICByZXN1bHQgPSBbXTsKICAgICAgfQoKICAgICAgaWYgKHRoaXMuZGlydHkpIHsKICAgICAgICB0aGlzLnNvcnRMaXN0KCk7CiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlOwogICAgICB9CgogICAgICBjb25zdCBheGlzSW5kZXggPSB0aGlzLmF4aXNJbmRleDsKICAgICAgbGV0IGF4aXMgPSAneCc7CgogICAgICBpZiAoYXhpc0luZGV4ID09PSAxKSB7CiAgICAgICAgYXhpcyA9ICd5JzsKICAgICAgfQoKICAgICAgaWYgKGF4aXNJbmRleCA9PT0gMikgewogICAgICAgIGF4aXMgPSAneic7CiAgICAgIH0KCiAgICAgIGNvbnN0IGF4aXNMaXN0ID0gdGhpcy5heGlzTGlzdDsKICAgICAgYWFiYi5sb3dlckJvdW5kW2F4aXNdOwogICAgICBhYWJiLnVwcGVyQm91bmRbYXhpc107CgogICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF4aXNMaXN0Lmxlbmd0aDsgaSsrKSB7CiAgICAgICAgY29uc3QgYiA9IGF4aXNMaXN0W2ldOwoKICAgICAgICBpZiAoYi5hYWJiTmVlZHNVcGRhdGUpIHsKICAgICAgICAgIGIudXBkYXRlQUFCQigpOwogICAgICAgIH0KCiAgICAgICAgaWYgKGIuYWFiYi5vdmVybGFwcyhhYWJiKSkgewogICAgICAgICAgcmVzdWx0LnB1c2goYik7CiAgICAgICAgfQogICAgICB9CgogICAgICByZXR1cm4gcmVzdWx0OwogICAgfQoKICB9CgogIGNsYXNzIFV0aWxzIHsKICAgIC8qKgogICAgICogRXh0ZW5kIGFuIG9wdGlvbnMgb2JqZWN0IHdpdGggZGVmYXVsdCB2YWx1ZXMuCiAgICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgb3B0aW9ucyBvYmplY3QuIE1heSBiZSBmYWxzeTogaW4gdGhpcyBjYXNlLCBhIG5ldyBvYmplY3QgaXMgY3JlYXRlZCBhbmQgcmV0dXJuZWQuCiAgICAgKiBAcGFyYW0gZGVmYXVsdHMgQW4gb2JqZWN0IGNvbnRhaW5pbmcgZGVmYXVsdCB2YWx1ZXMuCiAgICAgKiBAcmV0dXJuIFRoZSBtb2RpZmllZCBvcHRpb25zIG9iamVjdC4KICAgICAqLwogICAgc3RhdGljIGRlZmF1bHRzKG9wdGlvbnMsIGRlZmF1bHRzKSB7CiAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsKICAgICAgICBvcHRpb25zID0ge307CiAgICAgIH0KCiAgICAgIGZvciAobGV0IGtleSBpbiBkZWZhdWx0cykgewogICAgICAgIGlmICghKGtleSBpbiBvcHRpb25zKSkgewogICAgICAgICAgb3B0aW9uc1trZXldID0gZGVmYXVsdHNba2V5XTsKICAgICAgICB9CiAgICAgIH0KCiAgICAgIHJldHVybiBvcHRpb25zOwogICAgfQoKICB9CgogIC8qKgogICAqIENvbnN0cmFpbnQgYmFzZSBjbGFzcwogICAqLwogIGNsYXNzIENvbnN0cmFpbnQgewogICAgLyoqCiAgICAgKiBFcXVhdGlvbnMgdG8gYmUgc29sdmVkIGluIHRoaXMgY29uc3RyYWludC4KICAgICAqLwoKICAgIC8qKgogICAgICogQm9keSBBLgogICAgICovCgogICAgLyoqCiAgICAgKiBCb2R5IEIuCiAgICAgKi8KCiAgICAvKioKICAgICAqIFNldCB0byBmYWxzZSBpZiB5b3UgZG9uJ3Qgd2FudCB0aGUgYm9kaWVzIHRvIGNvbGxpZGUgd2hlbiB0aGV5IGFyZSBjb25uZWN0ZWQuCiAgICAgKi8KICAgIGNvbnN0cnVjdG9yKGJvZHlBLCBib2R5Qiwgb3B0aW9ucykgewogICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7CiAgICAgICAgb3B0aW9ucyA9IHt9OwogICAgICB9CgogICAgICBvcHRpb25zID0gVXRpbHMuZGVmYXVsdHMob3B0aW9ucywgewogICAgICAgIGNvbGxpZGVDb25uZWN0ZWQ6IHRydWUsCiAgICAgICAgd2FrZVVwQm9kaWVzOiB0cnVlCiAgICAgIH0pOwogICAgICB0aGlzLmVxdWF0aW9ucyA9IFtdOwogICAgICB0aGlzLmJvZHlBID0gYm9keUE7CiAgICAgIHRoaXMuYm9keUIgPSBib2R5QjsKICAgICAgdGhpcy5pZCA9IENvbnN0cmFpbnQuaWRDb3VudGVyKys7CiAgICAgIHRoaXMuY29sbGlkZUNvbm5lY3RlZCA9IG9wdGlvbnMuY29sbGlkZUNvbm5lY3RlZDsKCiAgICAgIGlmIChvcHRpb25zLndha2VVcEJvZGllcykgewogICAgICAgIGlmIChib2R5QSkgewogICAgICAgICAgYm9keUEud2FrZVVwKCk7CiAgICAgICAgfQoKICAgICAgICBpZiAoYm9keUIpIHsKICAgICAgICAgIGJvZHlCLndha2VVcCgpOwogICAgICAgIH0KICAgICAgfQogICAgfQogICAgLyoqCiAgICAgKiBVcGRhdGUgYWxsIHRoZSBlcXVhdGlvbnMgd2l0aCBkYXRhLgogICAgICovCgoKICAgIHVwZGF0ZSgpIHsKICAgICAgdGhyb3cgbmV3IEVycm9yKCdtZXRob2QgdXBkYXRlKCkgbm90IGltcGxtZW1lbnRlZCBpbiB0aGlzIENvbnN0cmFpbnQgc3ViY2xhc3MhJyk7CiAgICB9CiAgICAvKioKICAgICAqIEVuYWJsZXMgYWxsIGVxdWF0aW9ucyBpbiB0aGUgY29uc3RyYWludC4KICAgICAqLwoKCiAgICBlbmFibGUoKSB7CiAgICAgIGNvbnN0IGVxcyA9IHRoaXMuZXF1YXRpb25zOwoKICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlcXMubGVuZ3RoOyBpKyspIHsKICAgICAgICBlcXNbaV0uZW5hYmxlZCA9IHRydWU7CiAgICAgIH0KICAgIH0KICAgIC8qKgogICAgICogRGlzYWJsZXMgYWxsIGVxdWF0aW9ucyBpbiB0aGUgY29uc3RyYWludC4KICAgICAqLwoKCiAgICBkaXNhYmxlKCkgewogICAgICBjb25zdCBlcXMgPSB0aGlzLmVxdWF0aW9uczsKCiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXFzLmxlbmd0aDsgaSsrKSB7CiAgICAgICAgZXFzW2ldLmVuYWJsZWQgPSBmYWxzZTsKICAgICAgfQogICAgfQoKICB9CiAgQ29uc3RyYWludC5pZENvdW50ZXIgPSAwOwoKICAvKioKICAgKiBBbiBlbGVtZW50IGNvbnRhaW5pbmcgNiBlbnRyaWVzLCAzIHNwYXRpYWwgYW5kIDMgcm90YXRpb25hbCBkZWdyZWVzIG9mIGZyZWVkb20uCiAgICovCgogIGNsYXNzIEphY29iaWFuRWxlbWVudCB7CiAgICAvKioKICAgICAqIHNwYXRpYWwKICAgICAqLwoKICAgIC8qKgogICAgICogcm90YXRpb25hbAogICAgICovCiAgICBjb25zdHJ1Y3RvcigpIHsKICAgICAgdGhpcy5zcGF0aWFsID0gbmV3IFZlYzMoKTsKICAgICAgdGhpcy5yb3RhdGlvbmFsID0gbmV3IFZlYzMoKTsKICAgIH0KICAgIC8qKgogICAgICogTXVsdGlwbHkgd2l0aCBvdGhlciBKYWNvYmlhbkVsZW1lbnQKICAgICAqLwoKCiAgICBtdWx0aXBseUVsZW1lbnQoZWxlbWVudCkgewogICAgICByZXR1cm4gZWxlbWVudC5zcGF0aWFsLmRvdCh0aGlzLnNwYXRpYWwpICsgZWxlbWVudC5yb3RhdGlvbmFsLmRvdCh0aGlzLnJvdGF0aW9uYWwpOwogICAgfQogICAgLyoqCiAgICAgKiBNdWx0aXBseSB3aXRoIHR3byB2ZWN0b3JzCiAgICAgKi8KCgogICAgbXVsdGlwbHlWZWN0b3JzKHNwYXRpYWwsIHJvdGF0aW9uYWwpIHsKICAgICAgcmV0dXJuIHNwYXRpYWwuZG90KHRoaXMuc3BhdGlhbCkgKyByb3RhdGlvbmFsLmRvdCh0aGlzLnJvdGF0aW9uYWwpOwogICAgfQoKICB9CgogIC8qKgogICAqIEVxdWF0aW9uIGJhc2UgY2xhc3MuCiAgICoKICAgKiBgYWAsIGBiYCBhbmQgYGVwc2AgYXJlIHtAbGluayBodHRwczovL3d3dzguY3MudW11LnNlL2t1cnNlci81RFYwNTgvVlQxNS9sZWN0dXJlcy9TUE9PS2xhYm5vdGVzLnBkZiBTUE9PS30gcGFyYW1ldGVycyB0aGF0IGRlZmF1bHQgdG8gYDAuMGAuIFNlZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3NjaHRlcHBlL2Nhbm5vbi5qcy9pc3N1ZXMvMjM4I2lzc3VlY29tbWVudC0xNDcxNzIzMjcgdGhpcyBleGNoYW5nZX0gZm9yIG1vcmUgZGV0YWlscyBvbiBDYW5ub24ncyBwaHlzaWNzIGltcGxlbWVudGF0aW9uLgogICAqLwogIGNsYXNzIEVxdWF0aW9uIHsKICAgIC8qKgogICAgICogTWluaW11bSAocmVhZDogbmVnYXRpdmUgbWF4KSBmb3JjZSB0byBiZSBhcHBsaWVkIGJ5IHRoZSBjb25zdHJhaW50LgogICAgICovCgogICAgLyoqCiAgICAgKiBNYXhpbXVtIChyZWFkOiBwb3NpdGl2ZSBtYXgpIGZvcmNlIHRvIGJlIGFwcGxpZWQgYnkgdGhlIGNvbnN0cmFpbnQuCiAgICAgKi8KCiAgICAvKioKICAgICAqIFNQT09LIHBhcmFtZXRlcgogICAgICovCgogICAgLyoqCiAgICAgKiBTUE9PSyBwYXJhbWV0ZXIKICAgICAqLwoKICAgIC8qKgogICAgICogU1BPT0sgcGFyYW1ldGVyCiAgICAgKi8KCiAgICAvKioKICAgICAqIEEgbnVtYmVyLCBwcm9wb3J0aW9uYWwgdG8gdGhlIGZvcmNlIGFkZGVkIHRvIHRoZSBib2RpZXMuCiAgICAgKi8KICAgIGNvbnN0cnVjdG9yKGJpLCBiaiwgbWluRm9yY2UsIG1heEZvcmNlKSB7CiAgICAgIGlmIChtaW5Gb3JjZSA9PT0gdm9pZCAwKSB7CiAgICAgICAgbWluRm9yY2UgPSAtMWU2OwogICAgICB9CgogICAgICBpZiAobWF4Rm9yY2UgPT09IHZvaWQgMCkgewogICAgICAgIG1heEZvcmNlID0gMWU2OwogICAgICB9CgogICAgICB0aGlzLmlkID0gRXF1YXRpb24uaWRDb3VudGVyKys7CiAgICAgIHRoaXMubWluRm9yY2UgPSBtaW5Gb3JjZTsKICAgICAgdGhpcy5tYXhGb3JjZSA9IG1heEZvcmNlOwogICAgICB0aGlzLmJpID0gYmk7CiAgICAgIHRoaXMuYmogPSBiajsKICAgICAgdGhpcy5hID0gMC4wOyAvLyBTUE9PSyBwYXJhbWV0ZXIKCiAgICAgIHRoaXMuYiA9IDAuMDsgLy8gU1BPT0sgcGFyYW1ldGVyCgogICAgICB0aGlzLmVwcyA9IDAuMDsgLy8gU1BPT0sgcGFyYW1ldGVyCgogICAgICB0aGlzLmphY29iaWFuRWxlbWVudEEgPSBuZXcgSmFjb2JpYW5FbGVtZW50KCk7CiAgICAgIHRoaXMuamFjb2JpYW5FbGVtZW50QiA9IG5ldyBKYWNvYmlhbkVsZW1lbnQoKTsKICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTsKICAgICAgdGhpcy5tdWx0aXBsaWVyID0gMDsKICAgICAgdGhpcy5zZXRTcG9va1BhcmFtcygxZTcsIDQsIDEgLyA2MCk7IC8vIFNldCB0eXBpY2FsIHNwb29rIHBhcmFtcwogICAgfQogICAgLyoqCiAgICAgKiBSZWNhbGN1bGF0ZXMgYSwgYiwgYW5kIGVwcy4KICAgICAqCiAgICAgKiBUaGUgRXF1YXRpb24gY29uc3RydWN0b3Igc2V0cyB0eXBpY2FsIFNQT09LIHBhcmFtZXRlcnMgYXMgc3VjaDoKICAgICAqICogYHN0aWZmbmVzc2AgPSAxZTcKICAgICAqICogYHJlbGF4YXRpb25gID0gNAogICAgICogKiBgdGltZVN0ZXBgPSAxIC8gNjAsIF9ub3RlIHRoZSBoYXJkY29kZWQgcmVmcmVzaCByYXRlLl8KICAgICAqLwoKCiAgICBzZXRTcG9va1BhcmFtcyhzdGlmZm5lc3MsIHJlbGF4YXRpb24sIHRpbWVTdGVwKSB7CiAgICAgIGNvbnN0IGQgPSByZWxheGF0aW9uOwogICAgICBjb25zdCBrID0gc3RpZmZuZXNzOwogICAgICBjb25zdCBoID0gdGltZVN0ZXA7CiAgICAgIHRoaXMuYSA9IDQuMCAvIChoICogKDEgKyA0ICogZCkpOwogICAgICB0aGlzLmIgPSA0LjAgKiBkIC8gKDEgKyA0ICogZCk7CiAgICAgIHRoaXMuZXBzID0gNC4wIC8gKGggKiBoICogayAqICgxICsgNCAqIGQpKTsKICAgIH0KICAgIC8qKgogICAgICogQ29tcHV0ZXMgdGhlIHJpZ2h0IGhhbmQgc2lkZSBvZiB0aGUgU1BPT0sgZXF1YXRpb24KICAgICAqLwoKCiAgICBjb21wdXRlQihhLCBiLCBoKSB7CiAgICAgIGNvbnN0IEdXID0gdGhpcy5jb21wdXRlR1coKTsKICAgICAgY29uc3QgR3EgPSB0aGlzLmNvbXB1dGVHcSgpOwogICAgICBjb25zdCBHaU1mID0gdGhpcy5jb21wdXRlR2lNZigpOwogICAgICByZXR1cm4gLUdxICogYSAtIEdXICogYiAtIEdpTWYgKiBoOwogICAgfQogICAgLyoqCiAgICAgKiBDb21wdXRlcyBHKnEsIHdoZXJlIHEgYXJlIHRoZSBnZW5lcmFsaXplZCBib2R5IGNvb3JkaW5hdGVzCiAgICAgKi8KCgogICAgY29tcHV0ZUdxKCkgewogICAgICBjb25zdCBHQSA9IHRoaXMuamFjb2JpYW5FbGVtZW50QTsKICAgICAgY29uc3QgR0IgPSB0aGlzLmphY29iaWFuRWxlbWVudEI7CiAgICAgIGNvbnN0IGJpID0gdGhpcy5iaTsKICAgICAgY29uc3QgYmogPSB0aGlzLmJqOwogICAgICBjb25zdCB4aSA9IGJpLnBvc2l0aW9uOwogICAgICBjb25zdCB4aiA9IGJqLnBvc2l0aW9uOwogICAgICByZXR1cm4gR0Euc3BhdGlhbC5kb3QoeGkpICsgR0Iuc3BhdGlhbC5kb3QoeGopOwogICAgfQogICAgLyoqCiAgICAgKiBDb21wdXRlcyBHKlcsIHdoZXJlIFcgYXJlIHRoZSBib2R5IHZlbG9jaXRpZXMKICAgICAqLwoKCiAgICBjb21wdXRlR1coKSB7CiAgICAgIGNvbnN0IEdBID0gdGhpcy5qYWNvYmlhbkVsZW1lbnRBOwogICAgICBjb25zdCBHQiA9IHRoaXMuamFjb2JpYW5FbGVtZW50QjsKICAgICAgY29uc3QgYmkgPSB0aGlzLmJpOwogICAgICBjb25zdCBiaiA9IHRoaXMuYmo7CiAgICAgIGNvbnN0IHZpID0gYmkudmVsb2NpdHk7CiAgICAgIGNvbnN0IHZqID0gYmoudmVsb2NpdHk7CiAgICAgIGNvbnN0IHdpID0gYmkuYW5ndWxhclZlbG9jaXR5OwogICAgICBjb25zdCB3aiA9IGJqLmFuZ3VsYXJWZWxvY2l0eTsKICAgICAgcmV0dXJuIEdBLm11bHRpcGx5VmVjdG9ycyh2aSwgd2kpICsgR0IubXVsdGlwbHlWZWN0b3JzKHZqLCB3aik7CiAgICB9CiAgICAvKioKICAgICAqIENvbXB1dGVzIEcqV2xhbWJkYSwgd2hlcmUgVyBhcmUgdGhlIGJvZHkgdmVsb2NpdGllcwogICAgICovCgoKICAgIGNvbXB1dGVHV2xhbWJkYSgpIHsKICAgICAgY29uc3QgR0EgPSB0aGlzLmphY29iaWFuRWxlbWVudEE7CiAgICAgIGNvbnN0IEdCID0gdGhpcy5qYWNvYmlhbkVsZW1lbnRCOwogICAgICBjb25zdCBiaSA9IHRoaXMuYmk7CiAgICAgIGNvbnN0IGJqID0gdGhpcy5iajsKICAgICAgY29uc3QgdmkgPSBiaS52bGFtYmRhOwogICAgICBjb25zdCB2aiA9IGJqLnZsYW1iZGE7CiAgICAgIGNvbnN0IHdpID0gYmkud2xhbWJkYTsKICAgICAgY29uc3Qgd2ogPSBiai53bGFtYmRhOwogICAgICByZXR1cm4gR0EubXVsdGlwbHlWZWN0b3JzKHZpLCB3aSkgKyBHQi5tdWx0aXBseVZlY3RvcnModmosIHdqKTsKICAgIH0KICAgIC8qKgogICAgICogQ29tcHV0ZXMgRyppbnYoTSkqZiwgd2hlcmUgTSBpcyB0aGUgbWFzcyBtYXRyaXggd2l0aCBkaWFnb25hbCBibG9ja3MgZm9yIGVhY2ggYm9keSwgYW5kIGYgYXJlIHRoZSBmb3JjZXMgb24gdGhlIGJvZGllcy4KICAgICAqLwoKCiAgICBjb21wdXRlR2lNZigpIHsKICAgICAgY29uc3QgR0EgPSB0aGlzLmphY29iaWFuRWxlbWVudEE7CiAgICAgIGNvbnN0IEdCID0gdGhpcy5qYWNvYmlhbkVsZW1lbnRCOwogICAgICBjb25zdCBiaSA9IHRoaXMuYmk7CiAgICAgIGNvbnN0IGJqID0gdGhpcy5iajsKICAgICAgY29uc3QgZmkgPSBiaS5mb3JjZTsKICAgICAgY29uc3QgdGkgPSBiaS50b3JxdWU7CiAgICAgIGNvbnN0IGZqID0gYmouZm9yY2U7CiAgICAgIGNvbnN0IHRqID0gYmoudG9ycXVlOwogICAgICBjb25zdCBpbnZNYXNzaSA9IGJpLmludk1hc3NTb2x2ZTsKICAgICAgY29uc3QgaW52TWFzc2ogPSBiai5pbnZNYXNzU29sdmU7CiAgICAgIGZpLnNjYWxlKGludk1hc3NpLCBpTWZpKTsKICAgICAgZmouc2NhbGUoaW52TWFzc2osIGlNZmopOwogICAgICBiaS5pbnZJbmVydGlhV29ybGRTb2x2ZS52bXVsdCh0aSwgaW52SWlfdm11bHRfdGF1aSk7CiAgICAgIGJqLmludkluZXJ0aWFXb3JsZFNvbHZlLnZtdWx0KHRqLCBpbnZJal92bXVsdF90YXVqKTsKICAgICAgcmV0dXJuIEdBLm11bHRpcGx5VmVjdG9ycyhpTWZpLCBpbnZJaV92bXVsdF90YXVpKSArIEdCLm11bHRpcGx5VmVjdG9ycyhpTWZqLCBpbnZJal92bXVsdF90YXVqKTsKICAgIH0KICAgIC8qKgogICAgICogQ29tcHV0ZXMgRyppbnYoTSkqRycKICAgICAqLwoKCiAgICBjb21wdXRlR2lNR3QoKSB7CiAgICAgIGNvbnN0IEdBID0gdGhpcy5qYWNvYmlhbkVsZW1lbnRBOwogICAgICBjb25zdCBHQiA9IHRoaXMuamFjb2JpYW5FbGVtZW50QjsKICAgICAgY29uc3QgYmkgPSB0aGlzLmJpOwogICAgICBjb25zdCBiaiA9IHRoaXMuYmo7CiAgICAgIGNvbnN0IGludk1hc3NpID0gYmkuaW52TWFzc1NvbHZlOwogICAgICBjb25zdCBpbnZNYXNzaiA9IGJqLmludk1hc3NTb2x2ZTsKICAgICAgY29uc3QgaW52SWkgPSBiaS5pbnZJbmVydGlhV29ybGRTb2x2ZTsKICAgICAgY29uc3QgaW52SWogPSBiai5pbnZJbmVydGlhV29ybGRTb2x2ZTsKICAgICAgbGV0IHJlc3VsdCA9IGludk1hc3NpICsgaW52TWFzc2o7CiAgICAgIGludklpLnZtdWx0KEdBLnJvdGF0aW9uYWwsIHRtcCk7CiAgICAgIHJlc3VsdCArPSB0bXAuZG90KEdBLnJvdGF0aW9uYWwpOwogICAgICBpbnZJai52bXVsdChHQi5yb3RhdGlvbmFsLCB0bXApOwogICAgICByZXN1bHQgKz0gdG1wLmRvdChHQi5yb3RhdGlvbmFsKTsKICAgICAgcmV0dXJuIHJlc3VsdDsKICAgIH0KICAgIC8qKgogICAgICogQWRkIGNvbnN0cmFpbnQgdmVsb2NpdHkgdG8gdGhlIGJvZGllcy4KICAgICAqLwoKCiAgICBhZGRUb1dsYW1iZGEoZGVsdGFsYW1iZGEpIHsKICAgICAgY29uc3QgR0EgPSB0aGlzLmphY29iaWFuRWxlbWVudEE7CiAgICAgIGNvbnN0IEdCID0gdGhpcy5qYWNvYmlhbkVsZW1lbnRCOwogICAgICBjb25zdCBiaSA9IHRoaXMuYmk7CiAgICAgIGNvbnN0IGJqID0gdGhpcy5iajsKICAgICAgY29uc3QgdGVtcCA9IGFkZFRvV2xhbWJkYV90ZW1wOyAvLyBBZGQgdG8gbGluZWFyIHZlbG9jaXR5CiAgICAgIC8vIHZfbGFtYmRhICs9IGludihNKSAqIGRlbHRhX2xhbWJhICogRwoKICAgICAgYmkudmxhbWJkYS5hZGRTY2FsZWRWZWN0b3IoYmkuaW52TWFzc1NvbHZlICogZGVsdGFsYW1iZGEsIEdBLnNwYXRpYWwsIGJpLnZsYW1iZGEpOwogICAgICBiai52bGFtYmRhLmFkZFNjYWxlZFZlY3Rvcihiai5pbnZNYXNzU29sdmUgKiBkZWx0YWxhbWJkYSwgR0Iuc3BhdGlhbCwgYmoudmxhbWJkYSk7IC8vIEFkZCB0byBhbmd1bGFyIHZlbG9jaXR5CgogICAgICBiaS5pbnZJbmVydGlhV29ybGRTb2x2ZS52bXVsdChHQS5yb3RhdGlvbmFsLCB0ZW1wKTsKICAgICAgYmkud2xhbWJkYS5hZGRTY2FsZWRWZWN0b3IoZGVsdGFsYW1iZGEsIHRlbXAsIGJpLndsYW1iZGEpOwogICAgICBiai5pbnZJbmVydGlhV29ybGRTb2x2ZS52bXVsdChHQi5yb3RhdGlvbmFsLCB0ZW1wKTsKICAgICAgYmoud2xhbWJkYS5hZGRTY2FsZWRWZWN0b3IoZGVsdGFsYW1iZGEsIHRlbXAsIGJqLndsYW1iZGEpOwogICAgfQogICAgLyoqCiAgICAgKiBDb21wdXRlIHRoZSBkZW5vbWluYXRvciBwYXJ0IG9mIHRoZSBTUE9PSyBlcXVhdGlvbjogQyA9IEcqaW52KE0pKkcnICsgZXBzCiAgICAgKi8KCgogICAgY29tcHV0ZUMoKSB7CiAgICAgIHJldHVybiB0aGlzLmNvbXB1dGVHaU1HdCgpICsgdGhpcy5lcHM7CiAgICB9CgogIH0KICBFcXVhdGlvbi5pZENvdW50ZXIgPSAwOwogIGNvbnN0IGlNZmkgPSBuZXcgVmVjMygpOwogIGNvbnN0IGlNZmogPSBuZXcgVmVjMygpOwogIGNvbnN0IGludklpX3ZtdWx0X3RhdWkgPSBuZXcgVmVjMygpOwogIGNvbnN0IGludklqX3ZtdWx0X3RhdWogPSBuZXcgVmVjMygpOwogIGNvbnN0IHRtcCA9IG5ldyBWZWMzKCk7CiAgY29uc3QgYWRkVG9XbGFtYmRhX3RlbXAgPSBuZXcgVmVjMygpOwoKICAvKioKICAgKiBDb250YWN0L25vbi1wZW5ldHJhdGlvbiBjb25zdHJhaW50IGVxdWF0aW9uCiAgICovCiAgY2xhc3MgQ29udGFjdEVxdWF0aW9uIGV4dGVuZHMgRXF1YXRpb24gewogICAgLyoqCiAgICAgKiAiYm91bmNpbmVzcyI6IHUxID0gLWUqdTAKICAgICAqLwoKICAgIC8qKgogICAgICogV29ybGQtb3JpZW50ZWQgdmVjdG9yIHRoYXQgZ29lcyBmcm9tIHRoZSBjZW50ZXIgb2YgYmkgdG8gdGhlIGNvbnRhY3QgcG9pbnQuCiAgICAgKi8KCiAgICAvKioKICAgICAqIFdvcmxkLW9yaWVudGVkIHZlY3RvciB0aGF0IHN0YXJ0cyBpbiBib2R5IGogcG9zaXRpb24gYW5kIGdvZXMgdG8gdGhlIGNvbnRhY3QgcG9pbnQuCiAgICAgKi8KCiAgICAvKioKICAgICAqIENvbnRhY3Qgbm9ybWFsLCBwb2ludGluZyBvdXQgb2YgYm9keSBpLgogICAgICovCiAgICBjb25zdHJ1Y3Rvcihib2R5QSwgYm9keUIsIG1heEZvcmNlKSB7CiAgICAgIGlmIChtYXhGb3JjZSA9PT0gdm9pZCAwKSB7CiAgICAgICAgbWF4Rm9yY2UgPSAxZTY7CiAgICAgIH0KCiAgICAgIHN1cGVyKGJvZHlBLCBib2R5QiwgMCwgbWF4Rm9yY2UpOwogICAgICB0aGlzLnJlc3RpdHV0aW9uID0gMC4wOwogICAgICB0aGlzLnJpID0gbmV3IFZlYzMoKTsKICAgICAgdGhpcy5yaiA9IG5ldyBWZWMzKCk7CiAgICAgIHRoaXMubmkgPSBuZXcgVmVjMygpOwogICAgfQoKICAgIGNvbXB1dGVCKGgpIHsKICAgICAgY29uc3QgYSA9IHRoaXMuYTsKICAgICAgY29uc3QgYiA9IHRoaXMuYjsKICAgICAgY29uc3QgYmkgPSB0aGlzLmJpOwogICAgICBjb25zdCBiaiA9IHRoaXMuYmo7CiAgICAgIGNvbnN0IHJpID0gdGhpcy5yaTsKICAgICAgY29uc3QgcmogPSB0aGlzLnJqOwogICAgICBjb25zdCByaXhuID0gQ29udGFjdEVxdWF0aW9uX2NvbXB1dGVCX3RlbXAxOwogICAgICBjb25zdCByanhuID0gQ29udGFjdEVxdWF0aW9uX2NvbXB1dGVCX3RlbXAyOwogICAgICBjb25zdCB2aSA9IGJpLnZlbG9jaXR5OwogICAgICBjb25zdCB3aSA9IGJpLmFuZ3VsYXJWZWxvY2l0eTsKICAgICAgYmkuZm9yY2U7CiAgICAgIGJpLnRvcnF1ZTsKICAgICAgY29uc3QgdmogPSBiai52ZWxvY2l0eTsKICAgICAgY29uc3Qgd2ogPSBiai5hbmd1bGFyVmVsb2NpdHk7CiAgICAgIGJqLmZvcmNlOwogICAgICBiai50b3JxdWU7CiAgICAgIGNvbnN0IHBlbmV0cmF0aW9uVmVjID0gQ29udGFjdEVxdWF0aW9uX2NvbXB1dGVCX3RlbXAzOwogICAgICBjb25zdCBHQSA9IHRoaXMuamFjb2JpYW5FbGVtZW50QTsKICAgICAgY29uc3QgR0IgPSB0aGlzLmphY29iaWFuRWxlbWVudEI7CiAgICAgIGNvbnN0IG4gPSB0aGlzLm5pOyAvLyBDYWx1Y2xhdGUgY3Jvc3MgcHJvZHVjdHMKCiAgICAgIHJpLmNyb3NzKG4sIHJpeG4pOwogICAgICByai5jcm9zcyhuLCByanhuKTsgLy8gZyA9IHhqK3JqIC0oeGkrcmkpCiAgICAgIC8vIEcgPSBbIC1uaSAgLXJpeG4gIG5pICByanhuIF0KCiAgICAgIG4ubmVnYXRlKEdBLnNwYXRpYWwpOwogICAgICByaXhuLm5lZ2F0ZShHQS5yb3RhdGlvbmFsKTsKICAgICAgR0Iuc3BhdGlhbC5jb3B5KG4pOwogICAgICBHQi5yb3RhdGlvbmFsLmNvcHkocmp4bik7IC8vIENhbGN1bGF0ZSB0aGUgcGVuZXRyYXRpb24gdmVjdG9yCgogICAgICBwZW5ldHJhdGlvblZlYy5jb3B5KGJqLnBvc2l0aW9uKTsKICAgICAgcGVuZXRyYXRpb25WZWMudmFkZChyaiwgcGVuZXRyYXRpb25WZWMpOwogICAgICBwZW5ldHJhdGlvblZlYy52c3ViKGJpLnBvc2l0aW9uLCBwZW5ldHJhdGlvblZlYyk7CiAgICAgIHBlbmV0cmF0aW9uVmVjLnZzdWIocmksIHBlbmV0cmF0aW9uVmVjKTsKICAgICAgY29uc3QgZyA9IG4uZG90KHBlbmV0cmF0aW9uVmVjKTsgLy8gQ29tcHV0ZSBpdGVyYXRpb24KCiAgICAgIGNvbnN0IGVQbHVzT25lID0gdGhpcy5yZXN0aXR1dGlvbiArIDE7CiAgICAgIGNvbnN0IEdXID0gZVBsdXNPbmUgKiB2ai5kb3QobikgLSBlUGx1c09uZSAqIHZpLmRvdChuKSArIHdqLmRvdChyanhuKSAtIHdpLmRvdChyaXhuKTsKICAgICAgY29uc3QgR2lNZiA9IHRoaXMuY29tcHV0ZUdpTWYoKTsKICAgICAgY29uc3QgQiA9IC1nICogYSAtIEdXICogYiAtIGggKiBHaU1mOwogICAgICByZXR1cm4gQjsKICAgIH0KICAgIC8qKgogICAgICogR2V0IHRoZSBjdXJyZW50IHJlbGF0aXZlIHZlbG9jaXR5IGluIHRoZSBjb250YWN0IHBvaW50LgogICAgICovCgoKICAgIGdldEltcGFjdFZlbG9jaXR5QWxvbmdOb3JtYWwoKSB7CiAgICAgIGNvbnN0IHZpID0gQ29udGFjdEVxdWF0aW9uX2dldEltcGFjdFZlbG9jaXR5QWxvbmdOb3JtYWxfdmk7CiAgICAgIGNvbnN0IHZqID0gQ29udGFjdEVxdWF0aW9uX2dldEltcGFjdFZlbG9jaXR5QWxvbmdOb3JtYWxfdmo7CiAgICAgIGNvbnN0IHhpID0gQ29udGFjdEVxdWF0aW9uX2dldEltcGFjdFZlbG9jaXR5QWxvbmdOb3JtYWxfeGk7CiAgICAgIGNvbnN0IHhqID0gQ29udGFjdEVxdWF0aW9uX2dldEltcGFjdFZlbG9jaXR5QWxvbmdOb3JtYWxfeGo7CiAgICAgIGNvbnN0IHJlbFZlbCA9IENvbnRhY3RFcXVhdGlvbl9nZXRJbXBhY3RWZWxvY2l0eUFsb25nTm9ybWFsX3JlbFZlbDsKICAgICAgdGhpcy5iaS5wb3NpdGlvbi52YWRkKHRoaXMucmksIHhpKTsKICAgICAgdGhpcy5iai5wb3NpdGlvbi52YWRkKHRoaXMucmosIHhqKTsKICAgICAgdGhpcy5iaS5nZXRWZWxvY2l0eUF0V29ybGRQb2ludCh4aSwgdmkpOwogICAgICB0aGlzLmJqLmdldFZlbG9jaXR5QXRXb3JsZFBvaW50KHhqLCB2aik7CiAgICAgIHZpLnZzdWIodmosIHJlbFZlbCk7CiAgICAgIHJldHVybiB0aGlzLm5pLmRvdChyZWxWZWwpOwogICAgfQoKICB9CiAgY29uc3QgQ29udGFjdEVxdWF0aW9uX2NvbXB1dGVCX3RlbXAxID0gbmV3IFZlYzMoKTsgLy8gVGVtcCB2ZWN0b3JzCgogIGNvbnN0IENvbnRhY3RFcXVhdGlvbl9jb21wdXRlQl90ZW1wMiA9IG5ldyBWZWMzKCk7CiAgY29uc3QgQ29udGFjdEVxdWF0aW9uX2NvbXB1dGVCX3RlbXAzID0gbmV3IFZlYzMoKTsKICBjb25zdCBDb250YWN0RXF1YXRpb25fZ2V0SW1wYWN0VmVsb2NpdHlBbG9uZ05vcm1hbF92aSA9IG5ldyBWZWMzKCk7CiAgY29uc3QgQ29udGFjdEVxdWF0aW9uX2dldEltcGFjdFZlbG9jaXR5QWxvbmdOb3JtYWxfdmogPSBuZXcgVmVjMygpOwogIGNvbnN0IENvbnRhY3RFcXVhdGlvbl9nZXRJbXBhY3RWZWxvY2l0eUFsb25nTm9ybWFsX3hpID0gbmV3IFZlYzMoKTsKICBjb25zdCBDb250YWN0RXF1YXRpb25fZ2V0SW1wYWN0VmVsb2NpdHlBbG9uZ05vcm1hbF94aiA9IG5ldyBWZWMzKCk7CiAgY29uc3QgQ29udGFjdEVxdWF0aW9uX2dldEltcGFjdFZlbG9jaXR5QWxvbmdOb3JtYWxfcmVsVmVsID0gbmV3IFZlYzMoKTsKCiAgLyoqCiAgICogQ29ubmVjdHMgdHdvIGJvZGllcyBhdCBnaXZlbiBvZmZzZXQgcG9pbnRzLgogICAqIEBleGFtcGxlCiAgICogICAgIGNvbnN0IGJvZHlBID0gbmV3IEJvZHkoeyBtYXNzOiAxIH0pCiAgICogICAgIGNvbnN0IGJvZHlCID0gbmV3IEJvZHkoeyBtYXNzOiAxIH0pCiAgICogICAgIGJvZHlBLnBvc2l0aW9uLnNldCgtMSwgMCwgMCkKICAgKiAgICAgYm9keUIucG9zaXRpb24uc2V0KDEsIDAsIDApCiAgICogICAgIGJvZHlBLmFkZFNoYXBlKHNoYXBlQSkKICAgKiAgICAgYm9keUIuYWRkU2hhcGUoc2hhcGVCKQogICAqICAgICB3b3JsZC5hZGRCb2R5KGJvZHlBKQogICAqICAgICB3b3JsZC5hZGRCb2R5KGJvZHlCKQogICAqICAgICBjb25zdCBsb2NhbFBpdm90QSA9IG5ldyBWZWMzKDEsIDAsIDApCiAgICogICAgIGNvbnN0IGxvY2FsUGl2b3RCID0gbmV3IFZlYzMoLTEsIDAsIDApCiAgICogICAgIGNvbnN0IGNvbnN0cmFpbnQgPSBuZXcgUG9pbnRUb1BvaW50Q29uc3RyYWludChib2R5QSwgbG9jYWxQaXZvdEEsIGJvZHlCLCBsb2NhbFBpdm90QikKICAgKiAgICAgd29ybGQuYWRkQ29uc3RyYWludChjb25zdHJhaW50KQogICAqLwogIGNsYXNzIFBvaW50VG9Qb2ludENvbnN0cmFpbnQgZXh0ZW5kcyBDb25zdHJhaW50IHsKICAgIC8qKgogICAgICogUGl2b3QsIGRlZmluZWQgbG9jYWxseSBpbiBib2R5QS4KICAgICAqLwoKICAgIC8qKgogICAgICogUGl2b3QsIGRlZmluZWQgbG9jYWxseSBpbiBib2R5Qi4KICAgICAqLwoKICAgIC8qKgogICAgICogQHBhcmFtIHBpdm90QSBUaGUgcG9pbnQgcmVsYXRpdmUgdG8gdGhlIGNlbnRlciBvZiBtYXNzIG9mIGJvZHlBIHdoaWNoIGJvZHlBIGlzIGNvbnN0cmFpbmVkIHRvLgogICAgICogQHBhcmFtIGJvZHlCIEJvZHkgdGhhdCB3aWxsIGJlIGNvbnN0cmFpbmVkIGluIGEgc2ltaWxhciB3YXkgdG8gdGhlIHNhbWUgcG9pbnQgYXMgYm9keUEuIFdlIHdpbGwgdGhlcmVmb3JlIGdldCBhIGxpbmsgYmV0d2VlbiBib2R5QSBhbmQgYm9keUIuIElmIG5vdCBzcGVjaWZpZWQsIGJvZHlBIHdpbGwgYmUgY29uc3RyYWluZWQgdG8gYSBzdGF0aWMgcG9pbnQuCiAgICAgKiBAcGFyYW0gcGl2b3RCIFRoZSBwb2ludCByZWxhdGl2ZSB0byB0aGUgY2VudGVyIG9mIG1hc3Mgb2YgYm9keUIgd2hpY2ggYm9keUIgaXMgY29uc3RyYWluZWQgdG8uCiAgICAgKiBAcGFyYW0gbWF4Rm9yY2UgVGhlIG1heGltdW0gZm9yY2UgdGhhdCBzaG91bGQgYmUgYXBwbGllZCB0byBjb25zdHJhaW4gdGhlIGJvZGllcy4KICAgICAqLwogICAgY29uc3RydWN0b3IoYm9keUEsIHBpdm90QSwgYm9keUIsIHBpdm90QiwgbWF4Rm9yY2UpIHsKICAgICAgaWYgKHBpdm90QSA9PT0gdm9pZCAwKSB7CiAgICAgICAgcGl2b3RBID0gbmV3IFZlYzMoKTsKICAgICAgfQoKICAgICAgaWYgKHBpdm90QiA9PT0gdm9pZCAwKSB7CiAgICAgICAgcGl2b3RCID0gbmV3IFZlYzMoKTsKICAgICAgfQoKICAgICAgaWYgKG1heEZvcmNlID09PSB2b2lkIDApIHsKICAgICAgICBtYXhGb3JjZSA9IDFlNjsKICAgICAgfQoKICAgICAgc3VwZXIoYm9keUEsIGJvZHlCKTsKICAgICAgdGhpcy5waXZvdEEgPSBwaXZvdEEuY2xvbmUoKTsKICAgICAgdGhpcy5waXZvdEIgPSBwaXZvdEIuY2xvbmUoKTsKICAgICAgY29uc3QgeCA9IHRoaXMuZXF1YXRpb25YID0gbmV3IENvbnRhY3RFcXVhdGlvbihib2R5QSwgYm9keUIpOwogICAgICBjb25zdCB5ID0gdGhpcy5lcXVhdGlvblkgPSBuZXcgQ29udGFjdEVxdWF0aW9uKGJvZHlBLCBib2R5Qik7CiAgICAgIGNvbnN0IHogPSB0aGlzLmVxdWF0aW9uWiA9IG5ldyBDb250YWN0RXF1YXRpb24oYm9keUEsIGJvZHlCKTsgLy8gRXF1YXRpb25zIHRvIGJlIGZlZCB0byB0aGUgc29sdmVyCgogICAgICB0aGlzLmVxdWF0aW9ucy5wdXNoKHgsIHksIHopOyAvLyBNYWtlIHRoZSBlcXVhdGlvbnMgYmlkaXJlY3Rpb25hbAoKICAgICAgeC5taW5Gb3JjZSA9IHkubWluRm9yY2UgPSB6Lm1pbkZvcmNlID0gLW1heEZvcmNlOwogICAgICB4Lm1heEZvcmNlID0geS5tYXhGb3JjZSA9IHoubWF4Rm9yY2UgPSBtYXhGb3JjZTsKICAgICAgeC5uaS5zZXQoMSwgMCwgMCk7CiAgICAgIHkubmkuc2V0KDAsIDEsIDApOwogICAgICB6Lm5pLnNldCgwLCAwLCAxKTsKICAgIH0KCiAgICB1cGRhdGUoKSB7CiAgICAgIGNvbnN0IGJvZHlBID0gdGhpcy5ib2R5QTsKICAgICAgY29uc3QgYm9keUIgPSB0aGlzLmJvZHlCOwogICAgICBjb25zdCB4ID0gdGhpcy5lcXVhdGlvblg7CiAgICAgIGNvbnN0IHkgPSB0aGlzLmVxdWF0aW9uWTsKICAgICAgY29uc3QgeiA9IHRoaXMuZXF1YXRpb25aOyAvLyBSb3RhdGUgdGhlIHBpdm90cyB0byB3b3JsZCBzcGFjZQoKICAgICAgYm9keUEucXVhdGVybmlvbi52bXVsdCh0aGlzLnBpdm90QSwgeC5yaSk7CiAgICAgIGJvZHlCLnF1YXRlcm5pb24udm11bHQodGhpcy5waXZvdEIsIHgucmopOwogICAgICB5LnJpLmNvcHkoeC5yaSk7CiAgICAgIHkucmouY29weSh4LnJqKTsKICAgICAgei5yaS5jb3B5KHgucmkpOwogICAgICB6LnJqLmNvcHkoeC5yaik7CiAgICB9CgogIH0KCiAgLyoqCiAgICogQ29uZSBlcXVhdGlvbi4gV29ya3MgdG8ga2VlcCB0aGUgZ2l2ZW4gYm9keSB3b3JsZCB2ZWN0b3JzIGFsaWduZWQsIG9yIHRpbHRlZCB3aXRoaW4gYSBnaXZlbiBhbmdsZSBmcm9tIGVhY2ggb3RoZXIuCiAgICovCiAgY2xhc3MgQ29uZUVxdWF0aW9uIGV4dGVuZHMgRXF1YXRpb24gewogICAgLyoqCiAgICAgKiBMb2NhbCBheGlzIGluIEEKICAgICAqLwoKICAgIC8qKgogICAgICogTG9jYWwgYXhpcyBpbiBCCiAgICAgKi8KCiAgICAvKioKICAgICAqIFRoZSAiY29uZSBhbmdsZSIgdG8ga2VlcAogICAgICovCiAgICBjb25zdHJ1Y3Rvcihib2R5QSwgYm9keUIsIG9wdGlvbnMpIHsKICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgewogICAgICAgIG9wdGlvbnMgPSB7fTsKICAgICAgfQoKICAgICAgY29uc3QgbWF4Rm9yY2UgPSB0eXBlb2Ygb3B0aW9ucy5tYXhGb3JjZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLm1heEZvcmNlIDogMWU2OwogICAgICBzdXBlcihib2R5QSwgYm9keUIsIC1tYXhGb3JjZSwgbWF4Rm9yY2UpOwogICAgICB0aGlzLmF4aXNBID0gb3B0aW9ucy5heGlzQSA/IG9wdGlvbnMuYXhpc0EuY2xvbmUoKSA6IG5ldyBWZWMzKDEsIDAsIDApOwogICAgICB0aGlzLmF4aXNCID0gb3B0aW9ucy5heGlzQiA/IG9wdGlvbnMuYXhpc0IuY2xvbmUoKSA6IG5ldyBWZWMzKDAsIDEsIDApOwogICAgICB0aGlzLmFuZ2xlID0gdHlwZW9mIG9wdGlvbnMuYW5nbGUgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5hbmdsZSA6IDA7CiAgICB9CgogICAgY29tcHV0ZUIoaCkgewogICAgICBjb25zdCBhID0gdGhpcy5hOwogICAgICBjb25zdCBiID0gdGhpcy5iOwogICAgICBjb25zdCBuaSA9IHRoaXMuYXhpc0E7CiAgICAgIGNvbnN0IG5qID0gdGhpcy5heGlzQjsKICAgICAgY29uc3Qgbml4bmogPSB0bXBWZWMxJDI7CiAgICAgIGNvbnN0IG5qeG5pID0gdG1wVmVjMiQyOwogICAgICBjb25zdCBHQSA9IHRoaXMuamFjb2JpYW5FbGVtZW50QTsKICAgICAgY29uc3QgR0IgPSB0aGlzLmphY29iaWFuRWxlbWVudEI7IC8vIENhbHVjbGF0ZSBjcm9zcyBwcm9kdWN0cwoKICAgICAgbmkuY3Jvc3MobmosIG5peG5qKTsKICAgICAgbmouY3Jvc3MobmksIG5qeG5pKTsgLy8gVGhlIGFuZ2xlIGJldHdlZW4gdHdvIHZlY3RvciBpczoKICAgICAgLy8gY29zKHRoZXRhKSA9IGEgKiBiIC8gKGxlbmd0aChhKSAqIGxlbmd0aChiKSA9IHsgbGVuKGEpID0gbGVuKGIpID0gMSB9ID0gYSAqIGIKICAgICAgLy8gZyA9IGEgKiBiCiAgICAgIC8vIGdkb3QgPSAoYiB4IGEpICogd2kgKyAoYSB4IGIpICogd2oKICAgICAgLy8gRyA9IFswIGJ4YSAwIGF4Yl0KICAgICAgLy8gVyA9IFt2aSB3aSB2aiB3al0KCiAgICAgIEdBLnJvdGF0aW9uYWwuY29weShuanhuaSk7CiAgICAgIEdCLnJvdGF0aW9uYWwuY29weShuaXhuaik7CiAgICAgIGNvbnN0IGcgPSBNYXRoLmNvcyh0aGlzLmFuZ2xlKSAtIG5pLmRvdChuaik7CiAgICAgIGNvbnN0IEdXID0gdGhpcy5jb21wdXRlR1coKTsKICAgICAgY29uc3QgR2lNZiA9IHRoaXMuY29tcHV0ZUdpTWYoKTsKICAgICAgY29uc3QgQiA9IC1nICogYSAtIEdXICogYiAtIGggKiBHaU1mOwogICAgICByZXR1cm4gQjsKICAgIH0KCiAgfQogIGNvbnN0IHRtcFZlYzEkMiA9IG5ldyBWZWMzKCk7CiAgY29uc3QgdG1wVmVjMiQyID0gbmV3IFZlYzMoKTsKCiAgLyoqCiAgICogUm90YXRpb25hbCBjb25zdHJhaW50LiBXb3JrcyB0byBrZWVwIHRoZSBsb2NhbCB2ZWN0b3JzIG9ydGhvZ29uYWwgdG8gZWFjaCBvdGhlciBpbiB3b3JsZCBzcGFjZS4KICAgKi8KICBjbGFzcyBSb3RhdGlvbmFsRXF1YXRpb24gZXh0ZW5kcyBFcXVhdGlvbiB7CiAgICAvKioKICAgICAqIFdvcmxkIG9yaWVudGVkIHJvdGF0aW9uYWwgYXhpcy4KICAgICAqLwoKICAgIC8qKgogICAgICogV29ybGQgb3JpZW50ZWQgcm90YXRpb25hbCBheGlzLgogICAgICovCgogICAgLyoqCiAgICAgKiBtYXhBbmdsZQogICAgICovCiAgICBjb25zdHJ1Y3Rvcihib2R5QSwgYm9keUIsIG9wdGlvbnMpIHsKICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgewogICAgICAgIG9wdGlvbnMgPSB7fTsKICAgICAgfQoKICAgICAgY29uc3QgbWF4Rm9yY2UgPSB0eXBlb2Ygb3B0aW9ucy5tYXhGb3JjZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLm1heEZvcmNlIDogMWU2OwogICAgICBzdXBlcihib2R5QSwgYm9keUIsIC1tYXhGb3JjZSwgbWF4Rm9yY2UpOwogICAgICB0aGlzLmF4aXNBID0gb3B0aW9ucy5heGlzQSA/IG9wdGlvbnMuYXhpc0EuY2xvbmUoKSA6IG5ldyBWZWMzKDEsIDAsIDApOwogICAgICB0aGlzLmF4aXNCID0gb3B0aW9ucy5heGlzQiA/IG9wdGlvbnMuYXhpc0IuY2xvbmUoKSA6IG5ldyBWZWMzKDAsIDEsIDApOwogICAgICB0aGlzLm1heEFuZ2xlID0gTWF0aC5QSSAvIDI7CiAgICB9CgogICAgY29tcHV0ZUIoaCkgewogICAgICBjb25zdCBhID0gdGhpcy5hOwogICAgICBjb25zdCBiID0gdGhpcy5iOwogICAgICBjb25zdCBuaSA9IHRoaXMuYXhpc0E7CiAgICAgIGNvbnN0IG5qID0gdGhpcy5heGlzQjsKICAgICAgY29uc3Qgbml4bmogPSB0bXBWZWMxJDE7CiAgICAgIGNvbnN0IG5qeG5pID0gdG1wVmVjMiQxOwogICAgICBjb25zdCBHQSA9IHRoaXMuamFjb2JpYW5FbGVtZW50QTsKICAgICAgY29uc3QgR0IgPSB0aGlzLmphY29iaWFuRWxlbWVudEI7IC8vIENhbHVjbGF0ZSBjcm9zcyBwcm9kdWN0cwoKICAgICAgbmkuY3Jvc3MobmosIG5peG5qKTsKICAgICAgbmouY3Jvc3MobmksIG5qeG5pKTsgLy8gZyA9IG5pICogbmoKICAgICAgLy8gZ2RvdCA9IChuaiB4IG5pKSAqIHdpICsgKG5pIHggbmopICogd2oKICAgICAgLy8gRyA9IFswIG5qeG5pIDAgbml4bmpdCiAgICAgIC8vIFcgPSBbdmkgd2kgdmogd2pdCgogICAgICBHQS5yb3RhdGlvbmFsLmNvcHkobmp4bmkpOwogICAgICBHQi5yb3RhdGlvbmFsLmNvcHkobml4bmopOwogICAgICBjb25zdCBnID0gTWF0aC5jb3ModGhpcy5tYXhBbmdsZSkgLSBuaS5kb3QobmopOwogICAgICBjb25zdCBHVyA9IHRoaXMuY29tcHV0ZUdXKCk7CiAgICAgIGNvbnN0IEdpTWYgPSB0aGlzLmNvbXB1dGVHaU1mKCk7CiAgICAgIGNvbnN0IEIgPSAtZyAqIGEgLSBHVyAqIGIgLSBoICogR2lNZjsKICAgICAgcmV0dXJuIEI7CiAgICB9CgogIH0KICBjb25zdCB0bXBWZWMxJDEgPSBuZXcgVmVjMygpOwogIGNvbnN0IHRtcFZlYzIkMSA9IG5ldyBWZWMzKCk7CgogIC8qKgogICAqIEEgQ29uZSBUd2lzdCBjb25zdHJhaW50LCB1c2VmdWwgZm9yIHJhZ2RvbGxzLgogICAqLwogIGNsYXNzIENvbmVUd2lzdENvbnN0cmFpbnQgZXh0ZW5kcyBQb2ludFRvUG9pbnRDb25zdHJhaW50IHsKICAgIC8qKgogICAgICogVGhlIGF4aXMgZGlyZWN0aW9uIGZvciB0aGUgY29uc3RyYWludCBvZiB0aGUgYm9keSBBLgogICAgICovCgogICAgLyoqCiAgICAgKiBUaGUgYXhpcyBkaXJlY3Rpb24gZm9yIHRoZSBjb25zdHJhaW50IG9mIHRoZSBib2R5IEIuCiAgICAgKi8KCiAgICAvKioKICAgICAqIFRoZSBhcGVydHVyZSBhbmdsZSBvZiB0aGUgY29uZS4KICAgICAqLwoKICAgIC8qKgogICAgICogVGhlIHR3aXN0IGFuZ2xlIG9mIHRoZSBqb2ludC4KICAgICAqLwogICAgY29uc3RydWN0b3IoYm9keUEsIGJvZHlCLCBvcHRpb25zKSB7CiAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsKICAgICAgICBvcHRpb25zID0ge307CiAgICAgIH0KCiAgICAgIGNvbnN0IG1heEZvcmNlID0gdHlwZW9mIG9wdGlvbnMubWF4Rm9yY2UgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5tYXhGb3JjZSA6IDFlNjsgLy8gU2V0IHBpdm90IHBvaW50IGluIGJldHdlZW4KCiAgICAgIGNvbnN0IHBpdm90QSA9IG9wdGlvbnMucGl2b3RBID8gb3B0aW9ucy5waXZvdEEuY2xvbmUoKSA6IG5ldyBWZWMzKCk7CiAgICAgIGNvbnN0IHBpdm90QiA9IG9wdGlvbnMucGl2b3RCID8gb3B0aW9ucy5waXZvdEIuY2xvbmUoKSA6IG5ldyBWZWMzKCk7CiAgICAgIHN1cGVyKGJvZHlBLCBwaXZvdEEsIGJvZHlCLCBwaXZvdEIsIG1heEZvcmNlKTsKICAgICAgdGhpcy5heGlzQSA9IG9wdGlvbnMuYXhpc0EgPyBvcHRpb25zLmF4aXNBLmNsb25lKCkgOiBuZXcgVmVjMygpOwogICAgICB0aGlzLmF4aXNCID0gb3B0aW9ucy5heGlzQiA/IG9wdGlvbnMuYXhpc0IuY2xvbmUoKSA6IG5ldyBWZWMzKCk7CiAgICAgIHRoaXMuY29sbGlkZUNvbm5lY3RlZCA9ICEhb3B0aW9ucy5jb2xsaWRlQ29ubmVjdGVkOwogICAgICB0aGlzLmFuZ2xlID0gdHlwZW9mIG9wdGlvbnMuYW5nbGUgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5hbmdsZSA6IDA7CiAgICAgIGNvbnN0IGMgPSB0aGlzLmNvbmVFcXVhdGlvbiA9IG5ldyBDb25lRXF1YXRpb24oYm9keUEsIGJvZHlCLCBvcHRpb25zKTsKICAgICAgY29uc3QgdCA9IHRoaXMudHdpc3RFcXVhdGlvbiA9IG5ldyBSb3RhdGlvbmFsRXF1YXRpb24oYm9keUEsIGJvZHlCLCBvcHRpb25zKTsKICAgICAgdGhpcy50d2lzdEFuZ2xlID0gdHlwZW9mIG9wdGlvbnMudHdpc3RBbmdsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLnR3aXN0QW5nbGUgOiAwOyAvLyBNYWtlIHRoZSBjb25lIGVxdWF0aW9uIHB1c2ggdGhlIGJvZGllcyB0b3dhcmQgdGhlIGNvbmUgYXhpcywgbm90IG91dHdhcmQKCiAgICAgIGMubWF4Rm9yY2UgPSAwOwogICAgICBjLm1pbkZvcmNlID0gLW1heEZvcmNlOyAvLyBNYWtlIHRoZSB0d2lzdCBlcXVhdGlvbiBhZGQgdG9ycXVlIHRvd2FyZCB0aGUgaW5pdGlhbCBwb3NpdGlvbgoKICAgICAgdC5tYXhGb3JjZSA9IDA7CiAgICAgIHQubWluRm9yY2UgPSAtbWF4Rm9yY2U7CiAgICAgIHRoaXMuZXF1YXRpb25zLnB1c2goYywgdCk7CiAgICB9CgogICAgdXBkYXRlKCkgewogICAgICBjb25zdCBib2R5QSA9IHRoaXMuYm9keUE7CiAgICAgIGNvbnN0IGJvZHlCID0gdGhpcy5ib2R5QjsKICAgICAgY29uc3QgY29uZSA9IHRoaXMuY29uZUVxdWF0aW9uOwogICAgICBjb25zdCB0d2lzdCA9IHRoaXMudHdpc3RFcXVhdGlvbjsKICAgICAgc3VwZXIudXBkYXRlKCk7IC8vIFVwZGF0ZSB0aGUgYXhlcyB0byB0aGUgY29uZSBjb25zdHJhaW50CgogICAgICBib2R5QS52ZWN0b3JUb1dvcmxkRnJhbWUodGhpcy5heGlzQSwgY29uZS5heGlzQSk7CiAgICAgIGJvZHlCLnZlY3RvclRvV29ybGRGcmFtZSh0aGlzLmF4aXNCLCBjb25lLmF4aXNCKTsgLy8gVXBkYXRlIHRoZSB3b3JsZCBheGVzIGluIHRoZSB0d2lzdCBjb25zdHJhaW50CgogICAgICB0aGlzLmF4aXNBLnRhbmdlbnRzKHR3aXN0LmF4aXNBLCB0d2lzdC5heGlzQSk7CiAgICAgIGJvZHlBLnZlY3RvclRvV29ybGRGcmFtZSh0d2lzdC5heGlzQSwgdHdpc3QuYXhpc0EpOwogICAgICB0aGlzLmF4aXNCLnRhbmdlbnRzKHR3aXN0LmF4aXNCLCB0d2lzdC5heGlzQik7CiAgICAgIGJvZHlCLnZlY3RvclRvV29ybGRGcmFtZSh0d2lzdC5heGlzQiwgdHdpc3QuYXhpc0IpOwogICAgICBjb25lLmFuZ2xlID0gdGhpcy5hbmdsZTsKICAgICAgdHdpc3QubWF4QW5nbGUgPSB0aGlzLnR3aXN0QW5nbGU7CiAgICB9CgogIH0KICBuZXcgVmVjMygpOwogIG5ldyBWZWMzKCk7CgogIC8qKgogICAqIENvbnN0cmFpbnMgdHdvIGJvZGllcyB0byBiZSBhdCBhIGNvbnN0YW50IGRpc3RhbmNlIGZyb20gZWFjaCBvdGhlcnMgY2VudGVyIG9mIG1hc3MuCiAgICovCiAgY2xhc3MgRGlzdGFuY2VDb25zdHJhaW50IGV4dGVuZHMgQ29uc3RyYWludCB7CiAgICAvKioKICAgICAqIFRoZSBkaXN0YW5jZSB0byBrZWVwLiBJZiB1bmRlZmluZWQsIGl0IHdpbGwgYmUgc2V0IHRvIHRoZSBjdXJyZW50IGRpc3RhbmNlIGJldHdlZW4gYm9keUEgYW5kIGJvZHlCCiAgICAgKi8KCiAgICAvKioKICAgICAqIEBwYXJhbSBkaXN0YW5jZSBUaGUgZGlzdGFuY2UgdG8ga2VlcC4gSWYgdW5kZWZpbmVkLCBpdCB3aWxsIGJlIHNldCB0byB0aGUgY3VycmVudCBkaXN0YW5jZSBiZXR3ZWVuIGJvZHlBIGFuZCBib2R5Qi4KICAgICAqIEBwYXJhbSBtYXhGb3JjZSBUaGUgbWF4aW11bSBmb3JjZSB0aGF0IHNob3VsZCBiZSBhcHBsaWVkIHRvIGNvbnN0cmFpbiB0aGUgYm9kaWVzLgogICAgICovCiAgICBjb25zdHJ1Y3Rvcihib2R5QSwgYm9keUIsIGRpc3RhbmNlLCBtYXhGb3JjZSkgewogICAgICBpZiAobWF4Rm9yY2UgPT09IHZvaWQgMCkgewogICAgICAgIG1heEZvcmNlID0gMWU2OwogICAgICB9CgogICAgICBzdXBlcihib2R5QSwgYm9keUIpOwoKICAgICAgaWYgKHR5cGVvZiBkaXN0YW5jZSA9PT0gJ3VuZGVmaW5lZCcpIHsKICAgICAgICBkaXN0YW5jZSA9IGJvZHlBLnBvc2l0aW9uLmRpc3RhbmNlVG8oYm9keUIucG9zaXRpb24pOwogICAgICB9CgogICAgICB0aGlzLmRpc3RhbmNlID0gZGlzdGFuY2U7CiAgICAgIGNvbnN0IGVxID0gdGhpcy5kaXN0YW5jZUVxdWF0aW9uID0gbmV3IENvbnRhY3RFcXVhdGlvbihib2R5QSwgYm9keUIpOwogICAgICB0aGlzLmVxdWF0aW9ucy5wdXNoKGVxKTsgLy8gTWFrZSBpdCBiaWRpcmVjdGlvbmFsCgogICAgICBlcS5taW5Gb3JjZSA9IC1tYXhGb3JjZTsKICAgICAgZXEubWF4Rm9yY2UgPSBtYXhGb3JjZTsKICAgIH0KICAgIC8qKgogICAgICogdXBkYXRlCiAgICAgKi8KCgogICAgdXBkYXRlKCkgewogICAgICBjb25zdCBib2R5QSA9IHRoaXMuYm9keUE7CiAgICAgIGNvbnN0IGJvZHlCID0gdGhpcy5ib2R5QjsKICAgICAgY29uc3QgZXEgPSB0aGlzLmRpc3RhbmNlRXF1YXRpb247CiAgICAgIGNvbnN0IGhhbGZEaXN0ID0gdGhpcy5kaXN0YW5jZSAqIDAuNTsKICAgICAgY29uc3Qgbm9ybWFsID0gZXEubmk7CiAgICAgIGJvZHlCLnBvc2l0aW9uLnZzdWIoYm9keUEucG9zaXRpb24sIG5vcm1hbCk7CiAgICAgIG5vcm1hbC5ub3JtYWxpemUoKTsKICAgICAgbm9ybWFsLnNjYWxlKGhhbGZEaXN0LCBlcS5yaSk7CiAgICAgIG5vcm1hbC5zY2FsZSgtaGFsZkRpc3QsIGVxLnJqKTsKICAgIH0KCiAgfQoKICAvKioKICAgKiBMb2NrIGNvbnN0cmFpbnQuIFdpbGwgcmVtb3ZlIGFsbCBkZWdyZWVzIG9mIGZyZWVkb20gYmV0d2VlbiB0aGUgYm9kaWVzLgogICAqLwogIGNsYXNzIExvY2tDb25zdHJhaW50IGV4dGVuZHMgUG9pbnRUb1BvaW50Q29uc3RyYWludCB7CiAgICBjb25zdHJ1Y3Rvcihib2R5QSwgYm9keUIsIG9wdGlvbnMpIHsKICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgewogICAgICAgIG9wdGlvbnMgPSB7fTsKICAgICAgfQoKICAgICAgY29uc3QgbWF4Rm9yY2UgPSB0eXBlb2Ygb3B0aW9ucy5tYXhGb3JjZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLm1heEZvcmNlIDogMWU2OyAvLyBTZXQgcGl2b3QgcG9pbnQgaW4gYmV0d2VlbgoKICAgICAgY29uc3QgcGl2b3RBID0gbmV3IFZlYzMoKTsKICAgICAgY29uc3QgcGl2b3RCID0gbmV3IFZlYzMoKTsKICAgICAgY29uc3QgaGFsZldheSA9IG5ldyBWZWMzKCk7CiAgICAgIGJvZHlBLnBvc2l0aW9uLnZhZGQoYm9keUIucG9zaXRpb24sIGhhbGZXYXkpOwogICAgICBoYWxmV2F5LnNjYWxlKDAuNSwgaGFsZldheSk7CiAgICAgIGJvZHlCLnBvaW50VG9Mb2NhbEZyYW1lKGhhbGZXYXksIHBpdm90Qik7CiAgICAgIGJvZHlBLnBvaW50VG9Mb2NhbEZyYW1lKGhhbGZXYXksIHBpdm90QSk7IC8vIFRoZSBwb2ludC10by1wb2ludCBjb25zdHJhaW50IHdpbGwga2VlcCBhIHBvaW50IHNoYXJlZCBiZXR3ZWVuIHRoZSBib2RpZXMKCiAgICAgIHN1cGVyKGJvZHlBLCBwaXZvdEEsIGJvZHlCLCBwaXZvdEIsIG1heEZvcmNlKTsgLy8gU3RvcmUgaW5pdGlhbCByb3RhdGlvbiBvZiB0aGUgYm9kaWVzIGFzIHVuaXQgdmVjdG9ycyBpbiB0aGUgbG9jYWwgYm9keSBzcGFjZXMKCiAgICAgIHRoaXMueEEgPSBib2R5QS52ZWN0b3JUb0xvY2FsRnJhbWUoVmVjMy5VTklUX1gpOwogICAgICB0aGlzLnhCID0gYm9keUIudmVjdG9yVG9Mb2NhbEZyYW1lKFZlYzMuVU5JVF9YKTsKICAgICAgdGhpcy55QSA9IGJvZHlBLnZlY3RvclRvTG9jYWxGcmFtZShWZWMzLlVOSVRfWSk7CiAgICAgIHRoaXMueUIgPSBib2R5Qi52ZWN0b3JUb0xvY2FsRnJhbWUoVmVjMy5VTklUX1kpOwogICAgICB0aGlzLnpBID0gYm9keUEudmVjdG9yVG9Mb2NhbEZyYW1lKFZlYzMuVU5JVF9aKTsKICAgICAgdGhpcy56QiA9IGJvZHlCLnZlY3RvclRvTG9jYWxGcmFtZShWZWMzLlVOSVRfWik7IC8vIC4uLmFuZCB0aGUgZm9sbG93aW5nIHJvdGF0aW9uYWwgZXF1YXRpb25zIHdpbGwga2VlcCBhbGwgcm90YXRpb25hbCBET0YncyBpbiBwbGFjZQoKICAgICAgY29uc3QgcjEgPSB0aGlzLnJvdGF0aW9uYWxFcXVhdGlvbjEgPSBuZXcgUm90YXRpb25hbEVxdWF0aW9uKGJvZHlBLCBib2R5Qiwgb3B0aW9ucyk7CiAgICAgIGNvbnN0IHIyID0gdGhpcy5yb3RhdGlvbmFsRXF1YXRpb24yID0gbmV3IFJvdGF0aW9uYWxFcXVhdGlvbihib2R5QSwgYm9keUIsIG9wdGlvbnMpOwogICAgICBjb25zdCByMyA9IHRoaXMucm90YXRpb25hbEVxdWF0aW9uMyA9IG5ldyBSb3RhdGlvbmFsRXF1YXRpb24oYm9keUEsIGJvZHlCLCBvcHRpb25zKTsKICAgICAgdGhpcy5lcXVhdGlvbnMucHVzaChyMSwgcjIsIHIzKTsKICAgIH0KICAgIC8qKgogICAgICogdXBkYXRlCiAgICAgKi8KCgogICAgdXBkYXRlKCkgewogICAgICBjb25zdCBib2R5QSA9IHRoaXMuYm9keUE7CiAgICAgIGNvbnN0IGJvZHlCID0gdGhpcy5ib2R5QjsKICAgICAgdGhpcy5tb3RvckVxdWF0aW9uOwogICAgICBjb25zdCByMSA9IHRoaXMucm90YXRpb25hbEVxdWF0aW9uMTsKICAgICAgY29uc3QgcjIgPSB0aGlzLnJvdGF0aW9uYWxFcXVhdGlvbjI7CiAgICAgIGNvbnN0IHIzID0gdGhpcy5yb3RhdGlvbmFsRXF1YXRpb24zOwogICAgICBzdXBlci51cGRhdGUoKTsgLy8gVGhlc2UgdmVjdG9yIHBhaXJzIG11c3QgYmUgb3J0aG9nb25hbAoKICAgICAgYm9keUEudmVjdG9yVG9Xb3JsZEZyYW1lKHRoaXMueEEsIHIxLmF4aXNBKTsKICAgICAgYm9keUIudmVjdG9yVG9Xb3JsZEZyYW1lKHRoaXMueUIsIHIxLmF4aXNCKTsKICAgICAgYm9keUEudmVjdG9yVG9Xb3JsZEZyYW1lKHRoaXMueUEsIHIyLmF4aXNBKTsKICAgICAgYm9keUIudmVjdG9yVG9Xb3JsZEZyYW1lKHRoaXMuekIsIHIyLmF4aXNCKTsKICAgICAgYm9keUEudmVjdG9yVG9Xb3JsZEZyYW1lKHRoaXMuekEsIHIzLmF4aXNBKTsKICAgICAgYm9keUIudmVjdG9yVG9Xb3JsZEZyYW1lKHRoaXMueEIsIHIzLmF4aXNCKTsKICAgIH0KCiAgfQogIG5ldyBWZWMzKCk7CiAgbmV3IFZlYzMoKTsKCiAgLyoqCiAgICogUm90YXRpb25hbCBtb3RvciBjb25zdHJhaW50LiBUcmllcyB0byBrZWVwIHRoZSByZWxhdGl2ZSBhbmd1bGFyIHZlbG9jaXR5IG9mIHRoZSBib2RpZXMgdG8gYSBnaXZlbiB2YWx1ZS4KICAgKi8KICBjbGFzcyBSb3RhdGlvbmFsTW90b3JFcXVhdGlvbiBleHRlbmRzIEVxdWF0aW9uIHsKICAgIC8qKgogICAgICogV29ybGQgb3JpZW50ZWQgcm90YXRpb25hbCBheGlzLgogICAgICovCgogICAgLyoqCiAgICAgKiBXb3JsZCBvcmllbnRlZCByb3RhdGlvbmFsIGF4aXMuCiAgICAgKi8KCiAgICAvKioKICAgICAqIE1vdG9yIHZlbG9jaXR5LgogICAgICovCiAgICBjb25zdHJ1Y3Rvcihib2R5QSwgYm9keUIsIG1heEZvcmNlKSB7CiAgICAgIGlmIChtYXhGb3JjZSA9PT0gdm9pZCAwKSB7CiAgICAgICAgbWF4Rm9yY2UgPSAxZTY7CiAgICAgIH0KCiAgICAgIHN1cGVyKGJvZHlBLCBib2R5QiwgLW1heEZvcmNlLCBtYXhGb3JjZSk7CiAgICAgIHRoaXMuYXhpc0EgPSBuZXcgVmVjMygpOwogICAgICB0aGlzLmF4aXNCID0gbmV3IFZlYzMoKTsKICAgICAgdGhpcy50YXJnZXRWZWxvY2l0eSA9IDA7CiAgICB9CgogICAgY29tcHV0ZUIoaCkgewogICAgICB0aGlzLmE7CiAgICAgIGNvbnN0IGIgPSB0aGlzLmI7CiAgICAgIHRoaXMuYmk7CiAgICAgIHRoaXMuYmo7CiAgICAgIGNvbnN0IGF4aXNBID0gdGhpcy5heGlzQTsKICAgICAgY29uc3QgYXhpc0IgPSB0aGlzLmF4aXNCOwogICAgICBjb25zdCBHQSA9IHRoaXMuamFjb2JpYW5FbGVtZW50QTsKICAgICAgY29uc3QgR0IgPSB0aGlzLmphY29iaWFuRWxlbWVudEI7IC8vIGcgPSAwCiAgICAgIC8vIGdkb3QgPSBheGlzQSAqIHdpIC0gYXhpc0IgKiB3agogICAgICAvLyBnZG90ID0gRyAqIFcgPSBHICogW3ZpIHdpIHZqIHdqXQogICAgICAvLyA9PgogICAgICAvLyBHID0gWzAgYXhpc0EgMCAtYXhpc0JdCgogICAgICBHQS5yb3RhdGlvbmFsLmNvcHkoYXhpc0EpOwogICAgICBheGlzQi5uZWdhdGUoR0Iucm90YXRpb25hbCk7CiAgICAgIGNvbnN0IEdXID0gdGhpcy5jb21wdXRlR1coKSAtIHRoaXMudGFyZ2V0VmVsb2NpdHk7CiAgICAgIGNvbnN0IEdpTWYgPSB0aGlzLmNvbXB1dGVHaU1mKCk7CiAgICAgIGNvbnN0IEIgPSAtR1cgKiBiIC0gaCAqIEdpTWY7CiAgICAgIHJldHVybiBCOwogICAgfQoKICB9CgogIC8qKgogICAqIEhpbmdlIGNvbnN0cmFpbnQuIFRoaW5rIG9mIGl0IGFzIGEgZG9vciBoaW5nZS4gSXQgdHJpZXMgdG8ga2VlcCB0aGUgZG9vciBpbiB0aGUgY29ycmVjdCBwbGFjZSBhbmQgd2l0aCB0aGUgY29ycmVjdCBvcmllbnRhdGlvbi4KICAgKi8KICBjbGFzcyBIaW5nZUNvbnN0cmFpbnQgZXh0ZW5kcyBQb2ludFRvUG9pbnRDb25zdHJhaW50IHsKICAgIC8qKgogICAgICogUm90YXRpb24gYXhpcywgZGVmaW5lZCBsb2NhbGx5IGluIGJvZHlBLgogICAgICovCgogICAgLyoqCiAgICAgKiBSb3RhdGlvbiBheGlzLCBkZWZpbmVkIGxvY2FsbHkgaW4gYm9keUIuCiAgICAgKi8KICAgIGNvbnN0cnVjdG9yKGJvZHlBLCBib2R5Qiwgb3B0aW9ucykgewogICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7CiAgICAgICAgb3B0aW9ucyA9IHt9OwogICAgICB9CgogICAgICBjb25zdCBtYXhGb3JjZSA9IHR5cGVvZiBvcHRpb25zLm1heEZvcmNlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubWF4Rm9yY2UgOiAxZTY7CiAgICAgIGNvbnN0IHBpdm90QSA9IG9wdGlvbnMucGl2b3RBID8gb3B0aW9ucy5waXZvdEEuY2xvbmUoKSA6IG5ldyBWZWMzKCk7CiAgICAgIGNvbnN0IHBpdm90QiA9IG9wdGlvbnMucGl2b3RCID8gb3B0aW9ucy5waXZvdEIuY2xvbmUoKSA6IG5ldyBWZWMzKCk7CiAgICAgIHN1cGVyKGJvZHlBLCBwaXZvdEEsIGJvZHlCLCBwaXZvdEIsIG1heEZvcmNlKTsKICAgICAgY29uc3QgYXhpc0EgPSB0aGlzLmF4aXNBID0gb3B0aW9ucy5heGlzQSA/IG9wdGlvbnMuYXhpc0EuY2xvbmUoKSA6IG5ldyBWZWMzKDEsIDAsIDApOwogICAgICBheGlzQS5ub3JtYWxpemUoKTsKICAgICAgY29uc3QgYXhpc0IgPSB0aGlzLmF4aXNCID0gb3B0aW9ucy5heGlzQiA/IG9wdGlvbnMuYXhpc0IuY2xvbmUoKSA6IG5ldyBWZWMzKDEsIDAsIDApOwogICAgICBheGlzQi5ub3JtYWxpemUoKTsKICAgICAgdGhpcy5jb2xsaWRlQ29ubmVjdGVkID0gISFvcHRpb25zLmNvbGxpZGVDb25uZWN0ZWQ7CiAgICAgIGNvbnN0IHJvdGF0aW9uYWwxID0gdGhpcy5yb3RhdGlvbmFsRXF1YXRpb24xID0gbmV3IFJvdGF0aW9uYWxFcXVhdGlvbihib2R5QSwgYm9keUIsIG9wdGlvbnMpOwogICAgICBjb25zdCByb3RhdGlvbmFsMiA9IHRoaXMucm90YXRpb25hbEVxdWF0aW9uMiA9IG5ldyBSb3RhdGlvbmFsRXF1YXRpb24oYm9keUEsIGJvZHlCLCBvcHRpb25zKTsKICAgICAgY29uc3QgbW90b3IgPSB0aGlzLm1vdG9yRXF1YXRpb24gPSBuZXcgUm90YXRpb25hbE1vdG9yRXF1YXRpb24oYm9keUEsIGJvZHlCLCBtYXhGb3JjZSk7CiAgICAgIG1vdG9yLmVuYWJsZWQgPSBmYWxzZTsgLy8gTm90IGVuYWJsZWQgYnkgZGVmYXVsdAogICAgICAvLyBFcXVhdGlvbnMgdG8gYmUgZmVkIHRvIHRoZSBzb2x2ZXIKCiAgICAgIHRoaXMuZXF1YXRpb25zLnB1c2gocm90YXRpb25hbDEsIHJvdGF0aW9uYWwyLCBtb3Rvcik7CiAgICB9CiAgICAvKioKICAgICAqIGVuYWJsZU1vdG9yCiAgICAgKi8KCgogICAgZW5hYmxlTW90b3IoKSB7CiAgICAgIHRoaXMubW90b3JFcXVhdGlvbi5lbmFibGVkID0gdHJ1ZTsKICAgIH0KICAgIC8qKgogICAgICogZGlzYWJsZU1vdG9yCiAgICAgKi8KCgogICAgZGlzYWJsZU1vdG9yKCkgewogICAgICB0aGlzLm1vdG9yRXF1YXRpb24uZW5hYmxlZCA9IGZhbHNlOwogICAgfQogICAgLyoqCiAgICAgKiBzZXRNb3RvclNwZWVkCiAgICAgKi8KCgogICAgc2V0TW90b3JTcGVlZChzcGVlZCkgewogICAgICB0aGlzLm1vdG9yRXF1YXRpb24udGFyZ2V0VmVsb2NpdHkgPSBzcGVlZDsKICAgIH0KICAgIC8qKgogICAgICogc2V0TW90b3JNYXhGb3JjZQogICAgICovCgoKICAgIHNldE1vdG9yTWF4Rm9yY2UobWF4Rm9yY2UpIHsKICAgICAgdGhpcy5tb3RvckVxdWF0aW9uLm1heEZvcmNlID0gbWF4Rm9yY2U7CiAgICAgIHRoaXMubW90b3JFcXVhdGlvbi5taW5Gb3JjZSA9IC1tYXhGb3JjZTsKICAgIH0KICAgIC8qKgogICAgICogdXBkYXRlCiAgICAgKi8KCgogICAgdXBkYXRlKCkgewogICAgICBjb25zdCBib2R5QSA9IHRoaXMuYm9keUE7CiAgICAgIGNvbnN0IGJvZHlCID0gdGhpcy5ib2R5QjsKICAgICAgY29uc3QgbW90b3IgPSB0aGlzLm1vdG9yRXF1YXRpb247CiAgICAgIGNvbnN0IHIxID0gdGhpcy5yb3RhdGlvbmFsRXF1YXRpb24xOwogICAgICBjb25zdCByMiA9IHRoaXMucm90YXRpb25hbEVxdWF0aW9uMjsKICAgICAgY29uc3Qgd29ybGRBeGlzQSA9IEhpbmdlQ29uc3RyYWludF91cGRhdGVfdG1wVmVjMTsKICAgICAgY29uc3Qgd29ybGRBeGlzQiA9IEhpbmdlQ29uc3RyYWludF91cGRhdGVfdG1wVmVjMjsKICAgICAgY29uc3QgYXhpc0EgPSB0aGlzLmF4aXNBOwogICAgICBjb25zdCBheGlzQiA9IHRoaXMuYXhpc0I7CiAgICAgIHN1cGVyLnVwZGF0ZSgpOyAvLyBHZXQgd29ybGQgYXhlcwoKICAgICAgYm9keUEucXVhdGVybmlvbi52bXVsdChheGlzQSwgd29ybGRBeGlzQSk7CiAgICAgIGJvZHlCLnF1YXRlcm5pb24udm11bHQoYXhpc0IsIHdvcmxkQXhpc0IpOwogICAgICB3b3JsZEF4aXNBLnRhbmdlbnRzKHIxLmF4aXNBLCByMi5heGlzQSk7CiAgICAgIHIxLmF4aXNCLmNvcHkod29ybGRBeGlzQik7CiAgICAgIHIyLmF4aXNCLmNvcHkod29ybGRBeGlzQik7CgogICAgICBpZiAodGhpcy5tb3RvckVxdWF0aW9uLmVuYWJsZWQpIHsKICAgICAgICBib2R5QS5xdWF0ZXJuaW9uLnZtdWx0KHRoaXMuYXhpc0EsIG1vdG9yLmF4aXNBKTsKICAgICAgICBib2R5Qi5xdWF0ZXJuaW9uLnZtdWx0KHRoaXMuYXhpc0IsIG1vdG9yLmF4aXNCKTsKICAgICAgfQogICAgfQoKICB9CiAgY29uc3QgSGluZ2VDb25zdHJhaW50X3VwZGF0ZV90bXBWZWMxID0gbmV3IFZlYzMoKTsKICBjb25zdCBIaW5nZUNvbnN0cmFpbnRfdXBkYXRlX3RtcFZlYzIgPSBuZXcgVmVjMygpOwoKICAvKioKICAgKiBDb25zdHJhaW5zIHRoZSBzbGlwcGluZyBpbiBhIGNvbnRhY3QgYWxvbmcgYSB0YW5nZW50CiAgICovCiAgY2xhc3MgRnJpY3Rpb25FcXVhdGlvbiBleHRlbmRzIEVxdWF0aW9uIHsKICAgIC8vIFRhbmdlbnQKCiAgICAvKioKICAgICAqIEBwYXJhbSBzbGlwRm9yY2Ugc2hvdWxkIGJlICstRl9mcmljdGlvbiA9ICstbXUgKiBGX25vcm1hbCA9ICstbXUgKiBtICogZwogICAgICovCiAgICBjb25zdHJ1Y3Rvcihib2R5QSwgYm9keUIsIHNsaXBGb3JjZSkgewogICAgICBzdXBlcihib2R5QSwgYm9keUIsIC1zbGlwRm9yY2UsIHNsaXBGb3JjZSk7CiAgICAgIHRoaXMucmkgPSBuZXcgVmVjMygpOwogICAgICB0aGlzLnJqID0gbmV3IFZlYzMoKTsKICAgICAgdGhpcy50ID0gbmV3IFZlYzMoKTsKICAgIH0KCiAgICBjb21wdXRlQihoKSB7CiAgICAgIHRoaXMuYTsKICAgICAgY29uc3QgYiA9IHRoaXMuYjsKICAgICAgdGhpcy5iaTsKICAgICAgdGhpcy5iajsKICAgICAgY29uc3QgcmkgPSB0aGlzLnJpOwogICAgICBjb25zdCByaiA9IHRoaXMucmo7CiAgICAgIGNvbnN0IHJpeHQgPSBGcmljdGlvbkVxdWF0aW9uX2NvbXB1dGVCX3RlbXAxOwogICAgICBjb25zdCByanh0ID0gRnJpY3Rpb25FcXVhdGlvbl9jb21wdXRlQl90ZW1wMjsKICAgICAgY29uc3QgdCA9IHRoaXMudDsgLy8gQ2FsdWNsYXRlIGNyb3NzIHByb2R1Y3RzCgogICAgICByaS5jcm9zcyh0LCByaXh0KTsKICAgICAgcmouY3Jvc3ModCwgcmp4dCk7IC8vIEcgPSBbLXQgLXJpeHQgdCByanh0XQogICAgICAvLyBBbmQgcmVtZW1iZXIsIHRoaXMgaXMgYSBwdXJlIHZlbG9jaXR5IGNvbnN0cmFpbnQsIGcgaXMgYWx3YXlzIHplcm8hCgogICAgICBjb25zdCBHQSA9IHRoaXMuamFjb2JpYW5FbGVtZW50QTsKICAgICAgY29uc3QgR0IgPSB0aGlzLmphY29iaWFuRWxlbWVudEI7CiAgICAgIHQubmVnYXRlKEdBLnNwYXRpYWwpOwogICAgICByaXh0Lm5lZ2F0ZShHQS5yb3RhdGlvbmFsKTsKICAgICAgR0Iuc3BhdGlhbC5jb3B5KHQpOwogICAgICBHQi5yb3RhdGlvbmFsLmNvcHkocmp4dCk7CiAgICAgIGNvbnN0IEdXID0gdGhpcy5jb21wdXRlR1coKTsKICAgICAgY29uc3QgR2lNZiA9IHRoaXMuY29tcHV0ZUdpTWYoKTsKICAgICAgY29uc3QgQiA9IC1HVyAqIGIgLSBoICogR2lNZjsKICAgICAgcmV0dXJuIEI7CiAgICB9CgogIH0KICBjb25zdCBGcmljdGlvbkVxdWF0aW9uX2NvbXB1dGVCX3RlbXAxID0gbmV3IFZlYzMoKTsKICBjb25zdCBGcmljdGlvbkVxdWF0aW9uX2NvbXB1dGVCX3RlbXAyID0gbmV3IFZlYzMoKTsKCiAgLyoqCiAgICogRGVmaW5lcyB3aGF0IGhhcHBlbnMgd2hlbiB0d28gbWF0ZXJpYWxzIG1lZXQuCiAgICogQHRvZG8gUmVmYWN0b3IgbWF0ZXJpYWxzIHRvIG1hdGVyaWFsQSBhbmQgbWF0ZXJpYWxCCiAgICovCiAgY2xhc3MgQ29udGFjdE1hdGVyaWFsIHsKICAgIC8qKgogICAgICogSWRlbnRpZmllciBvZiB0aGlzIG1hdGVyaWFsLgogICAgICovCgogICAgLyoqCiAgICAgKiBQYXJ0aWNpcGF0aW5nIG1hdGVyaWFscy4KICAgICAqLwoKICAgIC8qKgogICAgICogRnJpY3Rpb24gY29lZmZpY2llbnQuCiAgICAgKiBAZGVmYXVsdCAwLjMKICAgICAqLwoKICAgIC8qKgogICAgICogUmVzdGl0dXRpb24gY29lZmZpY2llbnQuCiAgICAgKiBAZGVmYXVsdCAwLjMKICAgICAqLwoKICAgIC8qKgogICAgICogU3RpZmZuZXNzIG9mIHRoZSBwcm9kdWNlZCBjb250YWN0IGVxdWF0aW9ucy4KICAgICAqIEBkZWZhdWx0IDFlNwogICAgICovCgogICAgLyoqCiAgICAgKiBSZWxheGF0aW9uIHRpbWUgb2YgdGhlIHByb2R1Y2VkIGNvbnRhY3QgZXF1YXRpb25zLgogICAgICogQGRlZmF1bHQgMwogICAgICovCgogICAgLyoqCiAgICAgKiBTdGlmZm5lc3Mgb2YgdGhlIHByb2R1Y2VkIGZyaWN0aW9uIGVxdWF0aW9ucy4KICAgICAqIEBkZWZhdWx0IDFlNwogICAgICovCgogICAgLyoqCiAgICAgKiBSZWxheGF0aW9uIHRpbWUgb2YgdGhlIHByb2R1Y2VkIGZyaWN0aW9uIGVxdWF0aW9ucwogICAgICogQGRlZmF1bHQgMwogICAgICovCiAgICBjb25zdHJ1Y3RvcihtMSwgbTIsIG9wdGlvbnMpIHsKICAgICAgb3B0aW9ucyA9IFV0aWxzLmRlZmF1bHRzKG9wdGlvbnMsIHsKICAgICAgICBmcmljdGlvbjogMC4zLAogICAgICAgIHJlc3RpdHV0aW9uOiAwLjMsCiAgICAgICAgY29udGFjdEVxdWF0aW9uU3RpZmZuZXNzOiAxZTcsCiAgICAgICAgY29udGFjdEVxdWF0aW9uUmVsYXhhdGlvbjogMywKICAgICAgICBmcmljdGlvbkVxdWF0aW9uU3RpZmZuZXNzOiAxZTcsCiAgICAgICAgZnJpY3Rpb25FcXVhdGlvblJlbGF4YXRpb246IDMKICAgICAgfSk7CiAgICAgIHRoaXMuaWQgPSBDb250YWN0TWF0ZXJpYWwuaWRDb3VudGVyKys7CiAgICAgIHRoaXMubWF0ZXJpYWxzID0gW20xLCBtMl07CiAgICAgIHRoaXMuZnJpY3Rpb24gPSBvcHRpb25zLmZyaWN0aW9uOwogICAgICB0aGlzLnJlc3RpdHV0aW9uID0gb3B0aW9ucy5yZXN0aXR1dGlvbjsKICAgICAgdGhpcy5jb250YWN0RXF1YXRpb25TdGlmZm5lc3MgPSBvcHRpb25zLmNvbnRhY3RFcXVhdGlvblN0aWZmbmVzczsKICAgICAgdGhpcy5jb250YWN0RXF1YXRpb25SZWxheGF0aW9uID0gb3B0aW9ucy5jb250YWN0RXF1YXRpb25SZWxheGF0aW9uOwogICAgICB0aGlzLmZyaWN0aW9uRXF1YXRpb25TdGlmZm5lc3MgPSBvcHRpb25zLmZyaWN0aW9uRXF1YXRpb25TdGlmZm5lc3M7CiAgICAgIHRoaXMuZnJpY3Rpb25FcXVhdGlvblJlbGF4YXRpb24gPSBvcHRpb25zLmZyaWN0aW9uRXF1YXRpb25SZWxheGF0aW9uOwogICAgfQoKICB9CiAgQ29udGFjdE1hdGVyaWFsLmlkQ291bnRlciA9IDA7CgogIC8qKgogICAqIERlZmluZXMgYSBwaHlzaWNzIG1hdGVyaWFsLgogICAqLwogIGNsYXNzIE1hdGVyaWFsIHsKICAgIC8qKgogICAgICogTWF0ZXJpYWwgbmFtZS4KICAgICAqIElmIG9wdGlvbnMgaXMgYSBzdHJpbmcsIG5hbWUgd2lsbCBiZSBzZXQgdG8gdGhhdCBzdHJpbmcuCiAgICAgKiBAdG9kbyBEZXByZWNhdGUgdGhpcwogICAgICovCgogICAgLyoqIE1hdGVyaWFsIGlkLiAqLwoKICAgIC8qKgogICAgICogRnJpY3Rpb24gZm9yIHRoaXMgbWF0ZXJpYWwuCiAgICAgKiBJZiBub24tbmVnYXRpdmUsIGl0IHdpbGwgYmUgdXNlZCBpbnN0ZWFkIG9mIHRoZSBmcmljdGlvbiBnaXZlbiBieSBDb250YWN0TWF0ZXJpYWxzLiBJZiB0aGVyZSdzIG5vIG1hdGNoaW5nIENvbnRhY3RNYXRlcmlhbCwgdGhlIHZhbHVlIGZyb20gYGRlZmF1bHRDb250YWN0TWF0ZXJpYWxgIGluIHRoZSBXb3JsZCB3aWxsIGJlIHVzZWQuCiAgICAgKi8KCiAgICAvKioKICAgICAqIFJlc3RpdHV0aW9uIGZvciB0aGlzIG1hdGVyaWFsLgogICAgICogSWYgbm9uLW5lZ2F0aXZlLCBpdCB3aWxsIGJlIHVzZWQgaW5zdGVhZCBvZiB0aGUgcmVzdGl0dXRpb24gZ2l2ZW4gYnkgQ29udGFjdE1hdGVyaWFscy4gSWYgdGhlcmUncyBubyBtYXRjaGluZyBDb250YWN0TWF0ZXJpYWwsIHRoZSB2YWx1ZSBmcm9tIGBkZWZhdWx0Q29udGFjdE1hdGVyaWFsYCBpbiB0aGUgV29ybGQgd2lsbCBiZSB1c2VkLgogICAgICovCiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7CiAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsKICAgICAgICBvcHRpb25zID0ge307CiAgICAgIH0KCiAgICAgIGxldCBuYW1lID0gJyc7IC8vIEJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGZpeAoKICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJykgewogICAgICAgIC8vY29uc29sZS53YXJuKGBQYXNzaW5nIGEgc3RyaW5nIHRvIE1hdGVyaWFsT3B0aW9ucyBpcyBkZXByZWNhdGVkLCBhbmQgaGFzIG5vIGVmZmVjdGApCiAgICAgICAgbmFtZSA9IG9wdGlvbnM7CiAgICAgICAgb3B0aW9ucyA9IHt9OwogICAgICB9CgogICAgICB0aGlzLm5hbWUgPSBuYW1lOwogICAgICB0aGlzLmlkID0gTWF0ZXJpYWwuaWRDb3VudGVyKys7CiAgICAgIHRoaXMuZnJpY3Rpb24gPSB0eXBlb2Ygb3B0aW9ucy5mcmljdGlvbiAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmZyaWN0aW9uIDogLTE7CiAgICAgIHRoaXMucmVzdGl0dXRpb24gPSB0eXBlb2Ygb3B0aW9ucy5yZXN0aXR1dGlvbiAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLnJlc3RpdHV0aW9uIDogLTE7CiAgICB9CgogIH0KICBNYXRlcmlhbC5pZENvdW50ZXIgPSAwOwoKICAvKioKICAgKiBBIHNwcmluZywgY29ubmVjdGluZyB0d28gYm9kaWVzLgogICAqIEBleGFtcGxlCiAgICogICAgIGNvbnN0IHNwcmluZyA9IG5ldyBTcHJpbmcoYm94Qm9keSwgc3BoZXJlQm9keSwgewogICAqICAgICAgIHJlc3RMZW5ndGg6IDAsCiAgICogICAgICAgc3RpZmZuZXNzOiA1MCwKICAgKiAgICAgICBkYW1waW5nOiAxLAogICAqICAgICB9KQogICAqCiAgICogICAgIC8vIENvbXB1dGUgdGhlIGZvcmNlIGFmdGVyIGVhY2ggc3RlcAogICAqICAgICB3b3JsZC5hZGRFdmVudExpc3RlbmVyKCdwb3N0U3RlcCcsIChldmVudCkgPT4gewogICAqICAgICAgIHNwcmluZy5hcHBseUZvcmNlKCkKICAgKiAgICAgfSkKICAgKi8KICBjbGFzcyBTcHJpbmcgewogICAgLyoqCiAgICAgKiBSZXN0IGxlbmd0aCBvZiB0aGUgc3ByaW5nLiBBIG51bWJlciA+IDAuCiAgICAgKiBAZGVmYXVsdCAxCiAgICAgKi8KCiAgICAvKioKICAgICAqIFN0aWZmbmVzcyBvZiB0aGUgc3ByaW5nLiBBIG51bWJlciA+PSAwLgogICAgICogQGRlZmF1bHQgMTAwCiAgICAgKi8KCiAgICAvKioKICAgICAqIERhbXBpbmcgb2YgdGhlIHNwcmluZy4gQSBudW1iZXIgPj0gMC4KICAgICAqIEBkZWZhdWx0IDEKICAgICAqLwoKICAgIC8qKgogICAgICogRmlyc3QgY29ubmVjdGVkIGJvZHkuCiAgICAgKi8KCiAgICAvKioKICAgICAqIFNlY29uZCBjb25uZWN0ZWQgYm9keS4KICAgICAqLwoKICAgIC8qKgogICAgICogQW5jaG9yIGZvciBib2R5QSBpbiBsb2NhbCBib2R5QSBjb29yZGluYXRlcy4KICAgICAqIFdoZXJlIHRvIGhvb2sgdGhlIHNwcmluZyB0byBib2R5IEEsIGluIGxvY2FsIGJvZHkgY29vcmRpbmF0ZXMuCiAgICAgKiBAZGVmYXVsdCBuZXcgVmVjMygpCiAgICAgKi8KCiAgICAvKioKICAgICAqIEFuY2hvciBmb3IgYm9keUIgaW4gbG9jYWwgYm9keUIgY29vcmRpbmF0ZXMuCiAgICAgKiBXaGVyZSB0byBob29rIHRoZSBzcHJpbmcgdG8gYm9keSBCLCBpbiBsb2NhbCBib2R5IGNvb3JkaW5hdGVzLgogICAgICogQGRlZmF1bHQgbmV3IFZlYzMoKQogICAgICovCiAgICBjb25zdHJ1Y3Rvcihib2R5QSwgYm9keUIsIG9wdGlvbnMpIHsKICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgewogICAgICAgIG9wdGlvbnMgPSB7fTsKICAgICAgfQoKICAgICAgdGhpcy5yZXN0TGVuZ3RoID0gdHlwZW9mIG9wdGlvbnMucmVzdExlbmd0aCA9PT0gJ251bWJlcicgPyBvcHRpb25zLnJlc3RMZW5ndGggOiAxOwogICAgICB0aGlzLnN0aWZmbmVzcyA9IG9wdGlvbnMuc3RpZmZuZXNzIHx8IDEwMDsKICAgICAgdGhpcy5kYW1waW5nID0gb3B0aW9ucy5kYW1waW5nIHx8IDE7CiAgICAgIHRoaXMuYm9keUEgPSBib2R5QTsKICAgICAgdGhpcy5ib2R5QiA9IGJvZHlCOwogICAgICB0aGlzLmxvY2FsQW5jaG9yQSA9IG5ldyBWZWMzKCk7CiAgICAgIHRoaXMubG9jYWxBbmNob3JCID0gbmV3IFZlYzMoKTsKCiAgICAgIGlmIChvcHRpb25zLmxvY2FsQW5jaG9yQSkgewogICAgICAgIHRoaXMubG9jYWxBbmNob3JBLmNvcHkob3B0aW9ucy5sb2NhbEFuY2hvckEpOwogICAgICB9CgogICAgICBpZiAob3B0aW9ucy5sb2NhbEFuY2hvckIpIHsKICAgICAgICB0aGlzLmxvY2FsQW5jaG9yQi5jb3B5KG9wdGlvbnMubG9jYWxBbmNob3JCKTsKICAgICAgfQoKICAgICAgaWYgKG9wdGlvbnMud29ybGRBbmNob3JBKSB7CiAgICAgICAgdGhpcy5zZXRXb3JsZEFuY2hvckEob3B0aW9ucy53b3JsZEFuY2hvckEpOwogICAgICB9CgogICAgICBpZiAob3B0aW9ucy53b3JsZEFuY2hvckIpIHsKICAgICAgICB0aGlzLnNldFdvcmxkQW5jaG9yQihvcHRpb25zLndvcmxkQW5jaG9yQik7CiAgICAgIH0KICAgIH0KICAgIC8qKgogICAgICogU2V0IHRoZSBhbmNob3IgcG9pbnQgb24gYm9keSBBLCB1c2luZyB3b3JsZCBjb29yZGluYXRlcy4KICAgICAqLwoKCiAgICBzZXRXb3JsZEFuY2hvckEod29ybGRBbmNob3JBKSB7CiAgICAgIHRoaXMuYm9keUEucG9pbnRUb0xvY2FsRnJhbWUod29ybGRBbmNob3JBLCB0aGlzLmxvY2FsQW5jaG9yQSk7CiAgICB9CiAgICAvKioKICAgICAqIFNldCB0aGUgYW5jaG9yIHBvaW50IG9uIGJvZHkgQiwgdXNpbmcgd29ybGQgY29vcmRpbmF0ZXMuCiAgICAgKi8KCgogICAgc2V0V29ybGRBbmNob3JCKHdvcmxkQW5jaG9yQikgewogICAgICB0aGlzLmJvZHlCLnBvaW50VG9Mb2NhbEZyYW1lKHdvcmxkQW5jaG9yQiwgdGhpcy5sb2NhbEFuY2hvckIpOwogICAgfQogICAgLyoqCiAgICAgKiBHZXQgdGhlIGFuY2hvciBwb2ludCBvbiBib2R5IEEsIGluIHdvcmxkIGNvb3JkaW5hdGVzLgogICAgICogQHBhcmFtIHJlc3VsdCBUaGUgdmVjdG9yIHRvIHN0b3JlIHRoZSByZXN1bHQgaW4uCiAgICAgKi8KCgogICAgZ2V0V29ybGRBbmNob3JBKHJlc3VsdCkgewogICAgICB0aGlzLmJvZHlBLnBvaW50VG9Xb3JsZEZyYW1lKHRoaXMubG9jYWxBbmNob3JBLCByZXN1bHQpOwogICAgfQogICAgLyoqCiAgICAgKiBHZXQgdGhlIGFuY2hvciBwb2ludCBvbiBib2R5IEIsIGluIHdvcmxkIGNvb3JkaW5hdGVzLgogICAgICogQHBhcmFtIHJlc3VsdCBUaGUgdmVjdG9yIHRvIHN0b3JlIHRoZSByZXN1bHQgaW4uCiAgICAgKi8KCgogICAgZ2V0V29ybGRBbmNob3JCKHJlc3VsdCkgewogICAgICB0aGlzLmJvZHlCLnBvaW50VG9Xb3JsZEZyYW1lKHRoaXMubG9jYWxBbmNob3JCLCByZXN1bHQpOwogICAgfQogICAgLyoqCiAgICAgKiBBcHBseSB0aGUgc3ByaW5nIGZvcmNlIHRvIHRoZSBjb25uZWN0ZWQgYm9kaWVzLgogICAgICovCgoKICAgIGFwcGx5Rm9yY2UoKSB7CiAgICAgIGNvbnN0IGsgPSB0aGlzLnN0aWZmbmVzczsKICAgICAgY29uc3QgZCA9IHRoaXMuZGFtcGluZzsKICAgICAgY29uc3QgbCA9IHRoaXMucmVzdExlbmd0aDsKICAgICAgY29uc3QgYm9keUEgPSB0aGlzLmJvZHlBOwogICAgICBjb25zdCBib2R5QiA9IHRoaXMuYm9keUI7CiAgICAgIGNvbnN0IHIgPSBhcHBseUZvcmNlX3I7CiAgICAgIGNvbnN0IHJfdW5pdCA9IGFwcGx5Rm9yY2Vfcl91bml0OwogICAgICBjb25zdCB1ID0gYXBwbHlGb3JjZV91OwogICAgICBjb25zdCBmID0gYXBwbHlGb3JjZV9mOwogICAgICBjb25zdCB0bXAgPSBhcHBseUZvcmNlX3RtcDsKICAgICAgY29uc3Qgd29ybGRBbmNob3JBID0gYXBwbHlGb3JjZV93b3JsZEFuY2hvckE7CiAgICAgIGNvbnN0IHdvcmxkQW5jaG9yQiA9IGFwcGx5Rm9yY2Vfd29ybGRBbmNob3JCOwogICAgICBjb25zdCByaSA9IGFwcGx5Rm9yY2Vfcmk7CiAgICAgIGNvbnN0IHJqID0gYXBwbHlGb3JjZV9yajsKICAgICAgY29uc3QgcmlfeF9mID0gYXBwbHlGb3JjZV9yaV94X2Y7CiAgICAgIGNvbnN0IHJqX3hfZiA9IGFwcGx5Rm9yY2VfcmpfeF9mOyAvLyBHZXQgd29ybGQgYW5jaG9ycwoKICAgICAgdGhpcy5nZXRXb3JsZEFuY2hvckEod29ybGRBbmNob3JBKTsKICAgICAgdGhpcy5nZXRXb3JsZEFuY2hvckIod29ybGRBbmNob3JCKTsgLy8gR2V0IG9mZnNldCBwb2ludHMKCiAgICAgIHdvcmxkQW5jaG9yQS52c3ViKGJvZHlBLnBvc2l0aW9uLCByaSk7CiAgICAgIHdvcmxkQW5jaG9yQi52c3ViKGJvZHlCLnBvc2l0aW9uLCByaik7IC8vIENvbXB1dGUgZGlzdGFuY2UgdmVjdG9yIGJldHdlZW4gd29ybGQgYW5jaG9yIHBvaW50cwoKICAgICAgd29ybGRBbmNob3JCLnZzdWIod29ybGRBbmNob3JBLCByKTsKICAgICAgY29uc3QgcmxlbiA9IHIubGVuZ3RoKCk7CiAgICAgIHJfdW5pdC5jb3B5KHIpOwogICAgICByX3VuaXQubm9ybWFsaXplKCk7IC8vIENvbXB1dGUgcmVsYXRpdmUgdmVsb2NpdHkgb2YgdGhlIGFuY2hvciBwb2ludHMsIHUKCiAgICAgIGJvZHlCLnZlbG9jaXR5LnZzdWIoYm9keUEudmVsb2NpdHksIHUpOyAvLyBBZGQgcm90YXRpb25hbCB2ZWxvY2l0eQoKICAgICAgYm9keUIuYW5ndWxhclZlbG9jaXR5LmNyb3NzKHJqLCB0bXApOwogICAgICB1LnZhZGQodG1wLCB1KTsKICAgICAgYm9keUEuYW5ndWxhclZlbG9jaXR5LmNyb3NzKHJpLCB0bXApOwogICAgICB1LnZzdWIodG1wLCB1KTsgLy8gRiA9IC0gayAqICggeCAtIEwgKSAtIEQgKiAoIHUgKQoKICAgICAgcl91bml0LnNjYWxlKC1rICogKHJsZW4gLSBsKSAtIGQgKiB1LmRvdChyX3VuaXQpLCBmKTsgLy8gQWRkIGZvcmNlcyB0byBib2RpZXMKCiAgICAgIGJvZHlBLmZvcmNlLnZzdWIoZiwgYm9keUEuZm9yY2UpOwogICAgICBib2R5Qi5mb3JjZS52YWRkKGYsIGJvZHlCLmZvcmNlKTsgLy8gQW5ndWxhciBmb3JjZQoKICAgICAgcmkuY3Jvc3MoZiwgcmlfeF9mKTsKICAgICAgcmouY3Jvc3MoZiwgcmpfeF9mKTsKICAgICAgYm9keUEudG9ycXVlLnZzdWIocmlfeF9mLCBib2R5QS50b3JxdWUpOwogICAgICBib2R5Qi50b3JxdWUudmFkZChyal94X2YsIGJvZHlCLnRvcnF1ZSk7CiAgICB9CgogIH0KICBjb25zdCBhcHBseUZvcmNlX3IgPSBuZXcgVmVjMygpOwogIGNvbnN0IGFwcGx5Rm9yY2Vfcl91bml0ID0gbmV3IFZlYzMoKTsKICBjb25zdCBhcHBseUZvcmNlX3UgPSBuZXcgVmVjMygpOwogIGNvbnN0IGFwcGx5Rm9yY2VfZiA9IG5ldyBWZWMzKCk7CiAgY29uc3QgYXBwbHlGb3JjZV93b3JsZEFuY2hvckEgPSBuZXcgVmVjMygpOwogIGNvbnN0IGFwcGx5Rm9yY2Vfd29ybGRBbmNob3JCID0gbmV3IFZlYzMoKTsKICBjb25zdCBhcHBseUZvcmNlX3JpID0gbmV3IFZlYzMoKTsKICBjb25zdCBhcHBseUZvcmNlX3JqID0gbmV3IFZlYzMoKTsKICBjb25zdCBhcHBseUZvcmNlX3JpX3hfZiA9IG5ldyBWZWMzKCk7CiAgY29uc3QgYXBwbHlGb3JjZV9yal94X2YgPSBuZXcgVmVjMygpOwogIGNvbnN0IGFwcGx5Rm9yY2VfdG1wID0gbmV3IFZlYzMoKTsKCiAgLyoqCiAgICogV2hlZWxJbmZvCiAgICovCiAgY2xhc3MgV2hlZWxJbmZvIHsKICAgIC8qKgogICAgICogTWF4IHRyYXZlbCBkaXN0YW5jZSBvZiB0aGUgc3VzcGVuc2lvbiwgaW4gbWV0ZXJzLgogICAgICogQGRlZmF1bHQgMQogICAgICovCgogICAgLyoqCiAgICAgKiBTcGVlZCB0byBhcHBseSB0byB0aGUgd2hlZWwgcm90YXRpb24gd2hlbiB0aGUgd2hlZWwgaXMgc2xpZGluZy4KICAgICAqIEBkZWZhdWx0IC0wLjEKICAgICAqLwoKICAgIC8qKgogICAgICogSWYgdGhlIGN1c3RvbVNsaWRpbmdSb3RhdGlvbmFsU3BlZWQgc2hvdWxkIGJlIHVzZWQuCiAgICAgKiBAZGVmYXVsdCBmYWxzZQogICAgICovCgogICAgLyoqCiAgICAgKiBzbGlkaW5nCiAgICAgKi8KCiAgICAvKioKICAgICAqIENvbm5lY3Rpb24gcG9pbnQsIGRlZmluZWQgbG9jYWxseSBpbiB0aGUgY2hhc3NpcyBib2R5IGZyYW1lLgogICAgICovCgogICAgLyoqCiAgICAgKiBjaGFzc2lzQ29ubmVjdGlvblBvaW50V29ybGQKICAgICAqLwoKICAgIC8qKgogICAgICogZGlyZWN0aW9uTG9jYWwKICAgICAqLwoKICAgIC8qKgogICAgICogZGlyZWN0aW9uV29ybGQKICAgICAqLwoKICAgIC8qKgogICAgICogYXhsZUxvY2FsCiAgICAgKi8KCiAgICAvKioKICAgICAqIGF4bGVXb3JsZAogICAgICovCgogICAgLyoqCiAgICAgKiBzdXNwZW5zaW9uUmVzdExlbmd0aAogICAgICogQGRlZmF1bHQgMQogICAgICovCgogICAgLyoqCiAgICAgKiBzdXNwZW5zaW9uTWF4TGVuZ3RoCiAgICAgKiBAZGVmYXVsdCAyCiAgICAgKi8KCiAgICAvKioKICAgICAqIHJhZGl1cwogICAgICogQGRlZmF1bHQgMQogICAgICovCgogICAgLyoqCiAgICAgKiBzdXNwZW5zaW9uU3RpZmZuZXNzCiAgICAgKiBAZGVmYXVsdCAxMDAKICAgICAqLwoKICAgIC8qKgogICAgICogZGFtcGluZ0NvbXByZXNzaW9uCiAgICAgKiBAZGVmYXVsdCAxMAogICAgICovCgogICAgLyoqCiAgICAgKiBkYW1waW5nUmVsYXhhdGlvbgogICAgICogQGRlZmF1bHQgMTAKICAgICAqLwoKICAgIC8qKgogICAgICogZnJpY3Rpb25TbGlwCiAgICAgKiBAZGVmYXVsdCAxMC41CiAgICAgKi8KCiAgICAvKiogZm9yd2FyZEFjY2VsZXJhdGlvbiAqLwoKICAgIC8qKiBzaWRlQWNjZWxlcmF0aW9uICovCgogICAgLyoqCiAgICAgKiBzdGVlcmluZwogICAgICogQGRlZmF1bHQgMAogICAgICovCgogICAgLyoqCiAgICAgKiBSb3RhdGlvbiB2YWx1ZSwgaW4gcmFkaWFucy4KICAgICAqIEBkZWZhdWx0IDAKICAgICAqLwoKICAgIC8qKgogICAgICogZGVsdGFSb3RhdGlvbgogICAgICogQGRlZmF1bHQgMAogICAgICovCgogICAgLyoqCiAgICAgKiByb2xsSW5mbHVlbmNlCiAgICAgKiBAZGVmYXVsdCAwLjAxCiAgICAgKi8KCiAgICAvKioKICAgICAqIG1heFN1c3BlbnNpb25Gb3JjZQogICAgICovCgogICAgLyoqCiAgICAgKiBlbmdpbmVGb3JjZQogICAgICovCgogICAgLyoqCiAgICAgKiBicmFrZQogICAgICovCgogICAgLyoqCiAgICAgKiBpc0Zyb250V2hlZWwKICAgICAqIEBkZWZhdWx0IHRydWUKICAgICAqLwoKICAgIC8qKgogICAgICogY2xpcHBlZEludkNvbnRhY3REb3RTdXNwZW5zaW9uCiAgICAgKiBAZGVmYXVsdCAxCiAgICAgKi8KCiAgICAvKioKICAgICAqIHN1c3BlbnNpb25SZWxhdGl2ZVZlbG9jaXR5CiAgICAgKiBAZGVmYXVsdCAwCiAgICAgKi8KCiAgICAvKioKICAgICAqIHN1c3BlbnNpb25Gb3JjZQogICAgICogQGRlZmF1bHQgMAogICAgICovCgogICAgLyoqCiAgICAgKiBzbGlwSW5mbwogICAgICovCgogICAgLyoqCiAgICAgKiBza2lkSW5mbwogICAgICogQGRlZmF1bHQgMAogICAgICovCgogICAgLyoqCiAgICAgKiBzdXNwZW5zaW9uTGVuZ3RoCiAgICAgKiBAZGVmYXVsdCAwCiAgICAgKi8KCiAgICAvKioKICAgICAqIHNpZGVJbXB1bHNlCiAgICAgKi8KCiAgICAvKioKICAgICAqIGZvcndhcmRJbXB1bHNlCiAgICAgKi8KCiAgICAvKioKICAgICAqIFRoZSByZXN1bHQgZnJvbSByYXljYXN0aW5nLgogICAgICovCgogICAgLyoqCiAgICAgKiBXaGVlbCB3b3JsZCB0cmFuc2Zvcm0uCiAgICAgKi8KCiAgICAvKioKICAgICAqIGlzSW5Db250YWN0CiAgICAgKi8KICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHsKICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgewogICAgICAgIG9wdGlvbnMgPSB7fTsKICAgICAgfQoKICAgICAgb3B0aW9ucyA9IFV0aWxzLmRlZmF1bHRzKG9wdGlvbnMsIHsKICAgICAgICBjaGFzc2lzQ29ubmVjdGlvblBvaW50TG9jYWw6IG5ldyBWZWMzKCksCiAgICAgICAgY2hhc3Npc0Nvbm5lY3Rpb25Qb2ludFdvcmxkOiBuZXcgVmVjMygpLAogICAgICAgIGRpcmVjdGlvbkxvY2FsOiBuZXcgVmVjMygpLAogICAgICAgIGRpcmVjdGlvbldvcmxkOiBuZXcgVmVjMygpLAogICAgICAgIGF4bGVMb2NhbDogbmV3IFZlYzMoKSwKICAgICAgICBheGxlV29ybGQ6IG5ldyBWZWMzKCksCiAgICAgICAgc3VzcGVuc2lvblJlc3RMZW5ndGg6IDEsCiAgICAgICAgc3VzcGVuc2lvbk1heExlbmd0aDogMiwKICAgICAgICByYWRpdXM6IDEsCiAgICAgICAgc3VzcGVuc2lvblN0aWZmbmVzczogMTAwLAogICAgICAgIGRhbXBpbmdDb21wcmVzc2lvbjogMTAsCiAgICAgICAgZGFtcGluZ1JlbGF4YXRpb246IDEwLAogICAgICAgIGZyaWN0aW9uU2xpcDogMTAuNSwKICAgICAgICBmb3J3YXJkQWNjZWxlcmF0aW9uOiAxLAogICAgICAgIHNpZGVBY2NlbGVyYXRpb246IDEsCiAgICAgICAgc3RlZXJpbmc6IDAsCiAgICAgICAgcm90YXRpb246IDAsCiAgICAgICAgZGVsdGFSb3RhdGlvbjogMCwKICAgICAgICByb2xsSW5mbHVlbmNlOiAwLjAxLAogICAgICAgIG1heFN1c3BlbnNpb25Gb3JjZTogTnVtYmVyLk1BWF9WQUxVRSwKICAgICAgICBpc0Zyb250V2hlZWw6IHRydWUsCiAgICAgICAgY2xpcHBlZEludkNvbnRhY3REb3RTdXNwZW5zaW9uOiAxLAogICAgICAgIHN1c3BlbnNpb25SZWxhdGl2ZVZlbG9jaXR5OiAwLAogICAgICAgIHN1c3BlbnNpb25Gb3JjZTogMCwKICAgICAgICBzbGlwSW5mbzogMCwKICAgICAgICBza2lkSW5mbzogMCwKICAgICAgICBzdXNwZW5zaW9uTGVuZ3RoOiAwLAogICAgICAgIG1heFN1c3BlbnNpb25UcmF2ZWw6IDEsCiAgICAgICAgdXNlQ3VzdG9tU2xpZGluZ1JvdGF0aW9uYWxTcGVlZDogZmFsc2UsCiAgICAgICAgY3VzdG9tU2xpZGluZ1JvdGF0aW9uYWxTcGVlZDogLTAuMQogICAgICB9KTsKICAgICAgdGhpcy5tYXhTdXNwZW5zaW9uVHJhdmVsID0gb3B0aW9ucy5tYXhTdXNwZW5zaW9uVHJhdmVsOwogICAgICB0aGlzLmN1c3RvbVNsaWRpbmdSb3RhdGlvbmFsU3BlZWQgPSBvcHRpb25zLmN1c3RvbVNsaWRpbmdSb3RhdGlvbmFsU3BlZWQ7CiAgICAgIHRoaXMudXNlQ3VzdG9tU2xpZGluZ1JvdGF0aW9uYWxTcGVlZCA9IG9wdGlvbnMudXNlQ3VzdG9tU2xpZGluZ1JvdGF0aW9uYWxTcGVlZDsKICAgICAgdGhpcy5zbGlkaW5nID0gZmFsc2U7CiAgICAgIHRoaXMuY2hhc3Npc0Nvbm5lY3Rpb25Qb2ludExvY2FsID0gb3B0aW9ucy5jaGFzc2lzQ29ubmVjdGlvblBvaW50TG9jYWwuY2xvbmUoKTsKICAgICAgdGhpcy5jaGFzc2lzQ29ubmVjdGlvblBvaW50V29ybGQgPSBvcHRpb25zLmNoYXNzaXNDb25uZWN0aW9uUG9pbnRXb3JsZC5jbG9uZSgpOwogICAgICB0aGlzLmRpcmVjdGlvbkxvY2FsID0gb3B0aW9ucy5kaXJlY3Rpb25Mb2NhbC5jbG9uZSgpOwogICAgICB0aGlzLmRpcmVjdGlvbldvcmxkID0gb3B0aW9ucy5kaXJlY3Rpb25Xb3JsZC5jbG9uZSgpOwogICAgICB0aGlzLmF4bGVMb2NhbCA9IG9wdGlvbnMuYXhsZUxvY2FsLmNsb25lKCk7CiAgICAgIHRoaXMuYXhsZVdvcmxkID0gb3B0aW9ucy5heGxlV29ybGQuY2xvbmUoKTsKICAgICAgdGhpcy5zdXNwZW5zaW9uUmVzdExlbmd0aCA9IG9wdGlvbnMuc3VzcGVuc2lvblJlc3RMZW5ndGg7CiAgICAgIHRoaXMuc3VzcGVuc2lvbk1heExlbmd0aCA9IG9wdGlvbnMuc3VzcGVuc2lvbk1heExlbmd0aDsKICAgICAgdGhpcy5yYWRpdXMgPSBvcHRpb25zLnJhZGl1czsKICAgICAgdGhpcy5zdXNwZW5zaW9uU3RpZmZuZXNzID0gb3B0aW9ucy5zdXNwZW5zaW9uU3RpZmZuZXNzOwogICAgICB0aGlzLmRhbXBpbmdDb21wcmVzc2lvbiA9IG9wdGlvbnMuZGFtcGluZ0NvbXByZXNzaW9uOwogICAgICB0aGlzLmRhbXBpbmdSZWxheGF0aW9uID0gb3B0aW9ucy5kYW1waW5nUmVsYXhhdGlvbjsKICAgICAgdGhpcy5mcmljdGlvblNsaXAgPSBvcHRpb25zLmZyaWN0aW9uU2xpcDsKICAgICAgdGhpcy5mb3J3YXJkQWNjZWxlcmF0aW9uID0gb3B0aW9ucy5mb3J3YXJkQWNjZWxlcmF0aW9uOwogICAgICB0aGlzLnNpZGVBY2NlbGVyYXRpb24gPSBvcHRpb25zLnNpZGVBY2NlbGVyYXRpb247CiAgICAgIHRoaXMuc3RlZXJpbmcgPSAwOwogICAgICB0aGlzLnJvdGF0aW9uID0gMDsKICAgICAgdGhpcy5kZWx0YVJvdGF0aW9uID0gMDsKICAgICAgdGhpcy5yb2xsSW5mbHVlbmNlID0gb3B0aW9ucy5yb2xsSW5mbHVlbmNlOwogICAgICB0aGlzLm1heFN1c3BlbnNpb25Gb3JjZSA9IG9wdGlvbnMubWF4U3VzcGVuc2lvbkZvcmNlOwogICAgICB0aGlzLmVuZ2luZUZvcmNlID0gMDsKICAgICAgdGhpcy5icmFrZSA9IDA7CiAgICAgIHRoaXMuaXNGcm9udFdoZWVsID0gb3B0aW9ucy5pc0Zyb250V2hlZWw7CiAgICAgIHRoaXMuY2xpcHBlZEludkNvbnRhY3REb3RTdXNwZW5zaW9uID0gMTsKICAgICAgdGhpcy5zdXNwZW5zaW9uUmVsYXRpdmVWZWxvY2l0eSA9IDA7CiAgICAgIHRoaXMuc3VzcGVuc2lvbkZvcmNlID0gMDsKICAgICAgdGhpcy5zbGlwSW5mbyA9IDA7CiAgICAgIHRoaXMuc2tpZEluZm8gPSAwOwogICAgICB0aGlzLnN1c3BlbnNpb25MZW5ndGggPSAwOwogICAgICB0aGlzLnNpZGVJbXB1bHNlID0gMDsKICAgICAgdGhpcy5mb3J3YXJkSW1wdWxzZSA9IDA7CiAgICAgIHRoaXMucmF5Y2FzdFJlc3VsdCA9IG5ldyBSYXljYXN0UmVzdWx0KCk7CiAgICAgIHRoaXMud29ybGRUcmFuc2Zvcm0gPSBuZXcgVHJhbnNmb3JtKCk7CiAgICAgIHRoaXMuaXNJbkNvbnRhY3QgPSBmYWxzZTsKICAgIH0KCiAgICB1cGRhdGVXaGVlbChjaGFzc2lzKSB7CiAgICAgIGNvbnN0IHJheWNhc3RSZXN1bHQgPSB0aGlzLnJheWNhc3RSZXN1bHQ7CgogICAgICBpZiAodGhpcy5pc0luQ29udGFjdCkgewogICAgICAgIGNvbnN0IHByb2plY3QgPSByYXljYXN0UmVzdWx0LmhpdE5vcm1hbFdvcmxkLmRvdChyYXljYXN0UmVzdWx0LmRpcmVjdGlvbldvcmxkKTsKICAgICAgICByYXljYXN0UmVzdWx0LmhpdFBvaW50V29ybGQudnN1YihjaGFzc2lzLnBvc2l0aW9uLCByZWxwb3MpOwogICAgICAgIGNoYXNzaXMuZ2V0VmVsb2NpdHlBdFdvcmxkUG9pbnQocmVscG9zLCBjaGFzc2lzX3ZlbG9jaXR5X2F0X2NvbnRhY3RQb2ludCk7CiAgICAgICAgY29uc3QgcHJvalZlbCA9IHJheWNhc3RSZXN1bHQuaGl0Tm9ybWFsV29ybGQuZG90KGNoYXNzaXNfdmVsb2NpdHlfYXRfY29udGFjdFBvaW50KTsKCiAgICAgICAgaWYgKHByb2plY3QgPj0gLTAuMSkgewogICAgICAgICAgdGhpcy5zdXNwZW5zaW9uUmVsYXRpdmVWZWxvY2l0eSA9IDAuMDsKICAgICAgICAgIHRoaXMuY2xpcHBlZEludkNvbnRhY3REb3RTdXNwZW5zaW9uID0gMS4wIC8gMC4xOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICBjb25zdCBpbnYgPSAtMSAvIHByb2plY3Q7CiAgICAgICAgICB0aGlzLnN1c3BlbnNpb25SZWxhdGl2ZVZlbG9jaXR5ID0gcHJvalZlbCAqIGludjsKICAgICAgICAgIHRoaXMuY2xpcHBlZEludkNvbnRhY3REb3RTdXNwZW5zaW9uID0gaW52OwogICAgICAgIH0KICAgICAgfSBlbHNlIHsKICAgICAgICAvLyBOb3QgaW4gY29udGFjdCA6IHBvc2l0aW9uIHdoZWVsIGluIGEgbmljZSAocmVzdCBsZW5ndGgpIHBvc2l0aW9uCiAgICAgICAgcmF5Y2FzdFJlc3VsdC5zdXNwZW5zaW9uTGVuZ3RoID0gdGhpcy5zdXNwZW5zaW9uUmVzdExlbmd0aDsKICAgICAgICB0aGlzLnN1c3BlbnNpb25SZWxhdGl2ZVZlbG9jaXR5ID0gMC4wOwogICAgICAgIHJheWNhc3RSZXN1bHQuZGlyZWN0aW9uV29ybGQuc2NhbGUoLTEsIHJheWNhc3RSZXN1bHQuaGl0Tm9ybWFsV29ybGQpOwogICAgICAgIHRoaXMuY2xpcHBlZEludkNvbnRhY3REb3RTdXNwZW5zaW9uID0gMS4wOwogICAgICB9CiAgICB9CgogIH0KICBjb25zdCBjaGFzc2lzX3ZlbG9jaXR5X2F0X2NvbnRhY3RQb2ludCA9IG5ldyBWZWMzKCk7CiAgY29uc3QgcmVscG9zID0gbmV3IFZlYzMoKTsKCiAgLyoqCiAgICogVmVoaWNsZSBoZWxwZXIgY2xhc3MgdGhhdCBjYXN0cyByYXlzIGZyb20gdGhlIHdoZWVsIHBvc2l0aW9ucyB0b3dhcmRzIHRoZSBncm91bmQgYW5kIGFwcGxpZXMgZm9yY2VzLgogICAqLwogIGNsYXNzIFJheWNhc3RWZWhpY2xlIHsKICAgIC8qKiBUaGUgY2FyIGNoYXNzaXMgYm9keS4gKi8KCiAgICAvKiogVGhlIHdoZWVscy4gKi8KCiAgICAvKiogV2lsbCBiZSBzZXQgdG8gdHJ1ZSBpZiB0aGUgY2FyIGlzIHNsaWRpbmcuICovCgogICAgLyoqIEluZGV4IG9mIHRoZSByaWdodCBheGlzLiB4PTAsIHk9MSwgej0yICovCgogICAgLyoqIEluZGV4IG9mIHRoZSBmb3J3YXJkIGF4aXMuIHg9MCwgeT0xLCB6PTIgKi8KCiAgICAvKiogSW5kZXggb2YgdGhlIHVwIGF4aXMuIHg9MCwgeT0xLCB6PTIgKi8KCiAgICAvKiogVGhlIGNvbnN0cmFpbnRzLiAqLwoKICAgIC8qKiBPcHRpb25hbCBwcmUtc3RlcCBjYWxsYmFjay4gKi8KCiAgICAvKiogTnVtYmVyIG9mIHdoZWVscyBvbiB0aGUgZ3JvdW5kLiAqLwogICAgY29uc3RydWN0b3Iob3B0aW9ucykgewogICAgICB0aGlzLmNoYXNzaXNCb2R5ID0gb3B0aW9ucy5jaGFzc2lzQm9keTsKICAgICAgdGhpcy53aGVlbEluZm9zID0gW107CiAgICAgIHRoaXMuc2xpZGluZyA9IGZhbHNlOwogICAgICB0aGlzLndvcmxkID0gbnVsbDsKICAgICAgdGhpcy5pbmRleFJpZ2h0QXhpcyA9IHR5cGVvZiBvcHRpb25zLmluZGV4UmlnaHRBeGlzICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMuaW5kZXhSaWdodEF4aXMgOiAyOwogICAgICB0aGlzLmluZGV4Rm9yd2FyZEF4aXMgPSB0eXBlb2Ygb3B0aW9ucy5pbmRleEZvcndhcmRBeGlzICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMuaW5kZXhGb3J3YXJkQXhpcyA6IDA7CiAgICAgIHRoaXMuaW5kZXhVcEF4aXMgPSB0eXBlb2Ygb3B0aW9ucy5pbmRleFVwQXhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmluZGV4VXBBeGlzIDogMTsKICAgICAgdGhpcy5jb25zdHJhaW50cyA9IFtdOwoKICAgICAgdGhpcy5wcmVTdGVwQ2FsbGJhY2sgPSAoKSA9PiB7fTsKCiAgICAgIHRoaXMuY3VycmVudFZlaGljbGVTcGVlZEttSG91ciA9IDA7CiAgICAgIHRoaXMubnVtV2hlZWxzT25Hcm91bmQgPSAwOwogICAgfQogICAgLyoqCiAgICAgKiBBZGQgYSB3aGVlbC4gRm9yIGluZm9ybWF0aW9uIGFib3V0IHRoZSBvcHRpb25zLCBzZWUgYFdoZWVsSW5mb2AuCiAgICAgKi8KCgogICAgYWRkV2hlZWwob3B0aW9ucykgewogICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7CiAgICAgICAgb3B0aW9ucyA9IHt9OwogICAgICB9CgogICAgICBjb25zdCBpbmZvID0gbmV3IFdoZWVsSW5mbyhvcHRpb25zKTsKICAgICAgY29uc3QgaW5kZXggPSB0aGlzLndoZWVsSW5mb3MubGVuZ3RoOwogICAgICB0aGlzLndoZWVsSW5mb3MucHVzaChpbmZvKTsKICAgICAgcmV0dXJuIGluZGV4OwogICAgfQogICAgLyoqCiAgICAgKiBTZXQgdGhlIHN0ZWVyaW5nIHZhbHVlIG9mIGEgd2hlZWwuCiAgICAgKi8KCgogICAgc2V0U3RlZXJpbmdWYWx1ZSh2YWx1ZSwgd2hlZWxJbmRleCkgewogICAgICBjb25zdCB3aGVlbCA9IHRoaXMud2hlZWxJbmZvc1t3aGVlbEluZGV4XTsKICAgICAgd2hlZWwuc3RlZXJpbmcgPSB2YWx1ZTsKICAgIH0KICAgIC8qKgogICAgICogU2V0IHRoZSB3aGVlbCBmb3JjZSB0byBhcHBseSBvbiBvbmUgb2YgdGhlIHdoZWVscyBlYWNoIHRpbWUgc3RlcAogICAgICovCgoKICAgIGFwcGx5RW5naW5lRm9yY2UodmFsdWUsIHdoZWVsSW5kZXgpIHsKICAgICAgdGhpcy53aGVlbEluZm9zW3doZWVsSW5kZXhdLmVuZ2luZUZvcmNlID0gdmFsdWU7CiAgICB9CiAgICAvKioKICAgICAqIFNldCB0aGUgYnJha2luZyBmb3JjZSBvZiBhIHdoZWVsCiAgICAgKi8KCgogICAgc2V0QnJha2UoYnJha2UsIHdoZWVsSW5kZXgpIHsKICAgICAgdGhpcy53aGVlbEluZm9zW3doZWVsSW5kZXhdLmJyYWtlID0gYnJha2U7CiAgICB9CiAgICAvKioKICAgICAqIEFkZCB0aGUgdmVoaWNsZSBpbmNsdWRpbmcgaXRzIGNvbnN0cmFpbnRzIHRvIHRoZSB3b3JsZC4KICAgICAqLwoKCiAgICBhZGRUb1dvcmxkKHdvcmxkKSB7CiAgICAgIHdvcmxkLmFkZEJvZHkodGhpcy5jaGFzc2lzQm9keSk7CiAgICAgIGNvbnN0IHRoYXQgPSB0aGlzOwoKICAgICAgdGhpcy5wcmVTdGVwQ2FsbGJhY2sgPSAoKSA9PiB7CiAgICAgICAgdGhhdC51cGRhdGVWZWhpY2xlKHdvcmxkLmR0KTsKICAgICAgfTsKCiAgICAgIHdvcmxkLmFkZEV2ZW50TGlzdGVuZXIoJ3ByZVN0ZXAnLCB0aGlzLnByZVN0ZXBDYWxsYmFjayk7CiAgICAgIHRoaXMud29ybGQgPSB3b3JsZDsKICAgIH0KICAgIC8qKgogICAgICogR2V0IG9uZSBvZiB0aGUgd2hlZWwgYXhsZXMsIHdvcmxkLW9yaWVudGVkLgogICAgICovCgoKICAgIGdldFZlaGljbGVBeGlzV29ybGQoYXhpc0luZGV4LCByZXN1bHQpIHsKICAgICAgcmVzdWx0LnNldChheGlzSW5kZXggPT09IDAgPyAxIDogMCwgYXhpc0luZGV4ID09PSAxID8gMSA6IDAsIGF4aXNJbmRleCA9PT0gMiA/IDEgOiAwKTsKICAgICAgdGhpcy5jaGFzc2lzQm9keS52ZWN0b3JUb1dvcmxkRnJhbWUocmVzdWx0LCByZXN1bHQpOwogICAgfQoKICAgIHVwZGF0ZVZlaGljbGUodGltZVN0ZXApIHsKICAgICAgY29uc3Qgd2hlZWxJbmZvcyA9IHRoaXMud2hlZWxJbmZvczsKICAgICAgY29uc3QgbnVtV2hlZWxzID0gd2hlZWxJbmZvcy5sZW5ndGg7CiAgICAgIGNvbnN0IGNoYXNzaXNCb2R5ID0gdGhpcy5jaGFzc2lzQm9keTsKCiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtV2hlZWxzOyBpKyspIHsKICAgICAgICB0aGlzLnVwZGF0ZVdoZWVsVHJhbnNmb3JtKGkpOwogICAgICB9CgogICAgICB0aGlzLmN1cnJlbnRWZWhpY2xlU3BlZWRLbUhvdXIgPSAzLjYgKiBjaGFzc2lzQm9keS52ZWxvY2l0eS5sZW5ndGgoKTsKICAgICAgY29uc3QgZm9yd2FyZFdvcmxkID0gbmV3IFZlYzMoKTsKICAgICAgdGhpcy5nZXRWZWhpY2xlQXhpc1dvcmxkKHRoaXMuaW5kZXhGb3J3YXJkQXhpcywgZm9yd2FyZFdvcmxkKTsKCiAgICAgIGlmIChmb3J3YXJkV29ybGQuZG90KGNoYXNzaXNCb2R5LnZlbG9jaXR5KSA8IDApIHsKICAgICAgICB0aGlzLmN1cnJlbnRWZWhpY2xlU3BlZWRLbUhvdXIgKj0gLTE7CiAgICAgIH0gLy8gc2ltdWxhdGUgc3VzcGVuc2lvbgoKCiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtV2hlZWxzOyBpKyspIHsKICAgICAgICB0aGlzLmNhc3RSYXkod2hlZWxJbmZvc1tpXSk7CiAgICAgIH0KCiAgICAgIHRoaXMudXBkYXRlU3VzcGVuc2lvbih0aW1lU3RlcCk7CiAgICAgIGNvbnN0IGltcHVsc2UgPSBuZXcgVmVjMygpOwogICAgICBjb25zdCByZWxwb3MgPSBuZXcgVmVjMygpOwoKICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1XaGVlbHM7IGkrKykgewogICAgICAgIC8vYXBwbHkgc3VzcGVuc2lvbiBmb3JjZQogICAgICAgIGNvbnN0IHdoZWVsID0gd2hlZWxJbmZvc1tpXTsKICAgICAgICBsZXQgc3VzcGVuc2lvbkZvcmNlID0gd2hlZWwuc3VzcGVuc2lvbkZvcmNlOwoKICAgICAgICBpZiAoc3VzcGVuc2lvbkZvcmNlID4gd2hlZWwubWF4U3VzcGVuc2lvbkZvcmNlKSB7CiAgICAgICAgICBzdXNwZW5zaW9uRm9yY2UgPSB3aGVlbC5tYXhTdXNwZW5zaW9uRm9yY2U7CiAgICAgICAgfQoKICAgICAgICB3aGVlbC5yYXljYXN0UmVzdWx0LmhpdE5vcm1hbFdvcmxkLnNjYWxlKHN1c3BlbnNpb25Gb3JjZSAqIHRpbWVTdGVwLCBpbXB1bHNlKTsKICAgICAgICB3aGVlbC5yYXljYXN0UmVzdWx0LmhpdFBvaW50V29ybGQudnN1YihjaGFzc2lzQm9keS5wb3NpdGlvbiwgcmVscG9zKTsKICAgICAgICBjaGFzc2lzQm9keS5hcHBseUltcHVsc2UoaW1wdWxzZSwgcmVscG9zKTsKICAgICAgfQoKICAgICAgdGhpcy51cGRhdGVGcmljdGlvbih0aW1lU3RlcCk7CiAgICAgIGNvbnN0IGhpdE5vcm1hbFdvcmxkU2NhbGVkV2l0aFByb2ogPSBuZXcgVmVjMygpOwogICAgICBjb25zdCBmd2QgPSBuZXcgVmVjMygpOwogICAgICBjb25zdCB2ZWwgPSBuZXcgVmVjMygpOwoKICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1XaGVlbHM7IGkrKykgewogICAgICAgIGNvbnN0IHdoZWVsID0gd2hlZWxJbmZvc1tpXTsgLy9jb25zdCByZWxwb3MgPSBuZXcgVmVjMygpOwogICAgICAgIC8vd2hlZWwuY2hhc3Npc0Nvbm5lY3Rpb25Qb2ludFdvcmxkLnZzdWIoY2hhc3Npc0JvZHkucG9zaXRpb24sIHJlbHBvcyk7CgogICAgICAgIGNoYXNzaXNCb2R5LmdldFZlbG9jaXR5QXRXb3JsZFBvaW50KHdoZWVsLmNoYXNzaXNDb25uZWN0aW9uUG9pbnRXb3JsZCwgdmVsKTsgLy8gSGFjayB0byBnZXQgdGhlIHJvdGF0aW9uIGluIHRoZSBjb3JyZWN0IGRpcmVjdGlvbgoKICAgICAgICBsZXQgbSA9IDE7CgogICAgICAgIHN3aXRjaCAodGhpcy5pbmRleFVwQXhpcykgewogICAgICAgICAgY2FzZSAxOgogICAgICAgICAgICBtID0gLTE7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgIH0KCiAgICAgICAgaWYgKHdoZWVsLmlzSW5Db250YWN0KSB7CiAgICAgICAgICB0aGlzLmdldFZlaGljbGVBeGlzV29ybGQodGhpcy5pbmRleEZvcndhcmRBeGlzLCBmd2QpOwogICAgICAgICAgY29uc3QgcHJvaiA9IGZ3ZC5kb3Qod2hlZWwucmF5Y2FzdFJlc3VsdC5oaXROb3JtYWxXb3JsZCk7CiAgICAgICAgICB3aGVlbC5yYXljYXN0UmVzdWx0LmhpdE5vcm1hbFdvcmxkLnNjYWxlKHByb2osIGhpdE5vcm1hbFdvcmxkU2NhbGVkV2l0aFByb2opOwogICAgICAgICAgZndkLnZzdWIoaGl0Tm9ybWFsV29ybGRTY2FsZWRXaXRoUHJvaiwgZndkKTsKICAgICAgICAgIGNvbnN0IHByb2oyID0gZndkLmRvdCh2ZWwpOwogICAgICAgICAgd2hlZWwuZGVsdGFSb3RhdGlvbiA9IG0gKiBwcm9qMiAqIHRpbWVTdGVwIC8gd2hlZWwucmFkaXVzOwogICAgICAgIH0KCiAgICAgICAgaWYgKCh3aGVlbC5zbGlkaW5nIHx8ICF3aGVlbC5pc0luQ29udGFjdCkgJiYgd2hlZWwuZW5naW5lRm9yY2UgIT09IDAgJiYgd2hlZWwudXNlQ3VzdG9tU2xpZGluZ1JvdGF0aW9uYWxTcGVlZCkgewogICAgICAgICAgLy8gQXBwbHkgY3VzdG9tIHJvdGF0aW9uIHdoZW4gYWNjZWxlcmF0aW5nIGFuZCBzbGlkaW5nCiAgICAgICAgICB3aGVlbC5kZWx0YVJvdGF0aW9uID0gKHdoZWVsLmVuZ2luZUZvcmNlID4gMCA/IDEgOiAtMSkgKiB3aGVlbC5jdXN0b21TbGlkaW5nUm90YXRpb25hbFNwZWVkICogdGltZVN0ZXA7CiAgICAgICAgfSAvLyBMb2NrIHdoZWVscwoKCiAgICAgICAgaWYgKE1hdGguYWJzKHdoZWVsLmJyYWtlKSA+IE1hdGguYWJzKHdoZWVsLmVuZ2luZUZvcmNlKSkgewogICAgICAgICAgd2hlZWwuZGVsdGFSb3RhdGlvbiA9IDA7CiAgICAgICAgfQoKICAgICAgICB3aGVlbC5yb3RhdGlvbiArPSB3aGVlbC5kZWx0YVJvdGF0aW9uOyAvLyBVc2UgdGhlIG9sZCB2YWx1ZQoKICAgICAgICB3aGVlbC5kZWx0YVJvdGF0aW9uICo9IDAuOTk7IC8vIGRhbXBpbmcgb2Ygcm90YXRpb24gd2hlbiBub3QgaW4gY29udGFjdAogICAgICB9CiAgICB9CgogICAgdXBkYXRlU3VzcGVuc2lvbihkZWx0YVRpbWUpIHsKICAgICAgY29uc3QgY2hhc3Npc0JvZHkgPSB0aGlzLmNoYXNzaXNCb2R5OwogICAgICBjb25zdCBjaGFzc2lzTWFzcyA9IGNoYXNzaXNCb2R5Lm1hc3M7CiAgICAgIGNvbnN0IHdoZWVsSW5mb3MgPSB0aGlzLndoZWVsSW5mb3M7CiAgICAgIGNvbnN0IG51bVdoZWVscyA9IHdoZWVsSW5mb3MubGVuZ3RoOwoKICAgICAgZm9yIChsZXQgd19pdCA9IDA7IHdfaXQgPCBudW1XaGVlbHM7IHdfaXQrKykgewogICAgICAgIGNvbnN0IHdoZWVsID0gd2hlZWxJbmZvc1t3X2l0XTsKCiAgICAgICAgaWYgKHdoZWVsLmlzSW5Db250YWN0KSB7CiAgICAgICAgICBsZXQgZm9yY2U7IC8vIFNwcmluZwoKICAgICAgICAgIGNvbnN0IHN1c3BfbGVuZ3RoID0gd2hlZWwuc3VzcGVuc2lvblJlc3RMZW5ndGg7CiAgICAgICAgICBjb25zdCBjdXJyZW50X2xlbmd0aCA9IHdoZWVsLnN1c3BlbnNpb25MZW5ndGg7CiAgICAgICAgICBjb25zdCBsZW5ndGhfZGlmZiA9IHN1c3BfbGVuZ3RoIC0gY3VycmVudF9sZW5ndGg7CiAgICAgICAgICBmb3JjZSA9IHdoZWVsLnN1c3BlbnNpb25TdGlmZm5lc3MgKiBsZW5ndGhfZGlmZiAqIHdoZWVsLmNsaXBwZWRJbnZDb250YWN0RG90U3VzcGVuc2lvbjsgLy8gRGFtcGVyCgogICAgICAgICAgY29uc3QgcHJvamVjdGVkX3JlbF92ZWwgPSB3aGVlbC5zdXNwZW5zaW9uUmVsYXRpdmVWZWxvY2l0eTsKICAgICAgICAgIGxldCBzdXNwX2RhbXBpbmc7CgogICAgICAgICAgaWYgKHByb2plY3RlZF9yZWxfdmVsIDwgMCkgewogICAgICAgICAgICBzdXNwX2RhbXBpbmcgPSB3aGVlbC5kYW1waW5nQ29tcHJlc3Npb247CiAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICBzdXNwX2RhbXBpbmcgPSB3aGVlbC5kYW1waW5nUmVsYXhhdGlvbjsKICAgICAgICAgIH0KCiAgICAgICAgICBmb3JjZSAtPSBzdXNwX2RhbXBpbmcgKiBwcm9qZWN0ZWRfcmVsX3ZlbDsKICAgICAgICAgIHdoZWVsLnN1c3BlbnNpb25Gb3JjZSA9IGZvcmNlICogY2hhc3Npc01hc3M7CgogICAgICAgICAgaWYgKHdoZWVsLnN1c3BlbnNpb25Gb3JjZSA8IDApIHsKICAgICAgICAgICAgd2hlZWwuc3VzcGVuc2lvbkZvcmNlID0gMDsKICAgICAgICAgIH0KICAgICAgICB9IGVsc2UgewogICAgICAgICAgd2hlZWwuc3VzcGVuc2lvbkZvcmNlID0gMDsKICAgICAgICB9CiAgICAgIH0KICAgIH0KICAgIC8qKgogICAgICogUmVtb3ZlIHRoZSB2ZWhpY2xlIGluY2x1ZGluZyBpdHMgY29uc3RyYWludHMgZnJvbSB0aGUgd29ybGQuCiAgICAgKi8KCgogICAgcmVtb3ZlRnJvbVdvcmxkKHdvcmxkKSB7CiAgICAgIHRoaXMuY29uc3RyYWludHM7CiAgICAgIHdvcmxkLnJlbW92ZUJvZHkodGhpcy5jaGFzc2lzQm9keSk7CiAgICAgIHdvcmxkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3ByZVN0ZXAnLCB0aGlzLnByZVN0ZXBDYWxsYmFjayk7CiAgICAgIHRoaXMud29ybGQgPSBudWxsOwogICAgfQoKICAgIGNhc3RSYXkod2hlZWwpIHsKICAgICAgY29uc3QgcmF5dmVjdG9yID0gY2FzdFJheV9yYXl2ZWN0b3I7CiAgICAgIGNvbnN0IHRhcmdldCA9IGNhc3RSYXlfdGFyZ2V0OwogICAgICB0aGlzLnVwZGF0ZVdoZWVsVHJhbnNmb3JtV29ybGQod2hlZWwpOwogICAgICBjb25zdCBjaGFzc2lzQm9keSA9IHRoaXMuY2hhc3Npc0JvZHk7CiAgICAgIGxldCBkZXB0aCA9IC0xOwogICAgICBjb25zdCByYXlsZW4gPSB3aGVlbC5zdXNwZW5zaW9uUmVzdExlbmd0aCArIHdoZWVsLnJhZGl1czsKICAgICAgd2hlZWwuZGlyZWN0aW9uV29ybGQuc2NhbGUocmF5bGVuLCByYXl2ZWN0b3IpOwogICAgICBjb25zdCBzb3VyY2UgPSB3aGVlbC5jaGFzc2lzQ29ubmVjdGlvblBvaW50V29ybGQ7CiAgICAgIHNvdXJjZS52YWRkKHJheXZlY3RvciwgdGFyZ2V0KTsKICAgICAgY29uc3QgcmF5Y2FzdFJlc3VsdCA9IHdoZWVsLnJheWNhc3RSZXN1bHQ7CiAgICAgIHJheWNhc3RSZXN1bHQucmVzZXQoKTsgLy8gVHVybiBvZmYgcmF5IGNvbGxpc2lvbiB3aXRoIHRoZSBjaGFzc2lzIHRlbXBvcmFyaWx5CgogICAgICBjb25zdCBvbGRTdGF0ZSA9IGNoYXNzaXNCb2R5LmNvbGxpc2lvblJlc3BvbnNlOwogICAgICBjaGFzc2lzQm9keS5jb2xsaXNpb25SZXNwb25zZSA9IGZhbHNlOyAvLyBDYXN0IHJheSBhZ2FpbnN0IHdvcmxkCgogICAgICB0aGlzLndvcmxkLnJheVRlc3Qoc291cmNlLCB0YXJnZXQsIHJheWNhc3RSZXN1bHQpOwogICAgICBjaGFzc2lzQm9keS5jb2xsaXNpb25SZXNwb25zZSA9IG9sZFN0YXRlOwogICAgICBjb25zdCBvYmplY3QgPSByYXljYXN0UmVzdWx0LmJvZHk7CiAgICAgIHdoZWVsLnJheWNhc3RSZXN1bHQuZ3JvdW5kT2JqZWN0ID0gMDsKCiAgICAgIGlmIChvYmplY3QpIHsKICAgICAgICBkZXB0aCA9IHJheWNhc3RSZXN1bHQuZGlzdGFuY2U7CiAgICAgICAgd2hlZWwucmF5Y2FzdFJlc3VsdC5oaXROb3JtYWxXb3JsZCA9IHJheWNhc3RSZXN1bHQuaGl0Tm9ybWFsV29ybGQ7CiAgICAgICAgd2hlZWwuaXNJbkNvbnRhY3QgPSB0cnVlOwogICAgICAgIGNvbnN0IGhpdERpc3RhbmNlID0gcmF5Y2FzdFJlc3VsdC5kaXN0YW5jZTsKICAgICAgICB3aGVlbC5zdXNwZW5zaW9uTGVuZ3RoID0gaGl0RGlzdGFuY2UgLSB3aGVlbC5yYWRpdXM7IC8vIGNsYW1wIG9uIG1heCBzdXNwZW5zaW9uIHRyYXZlbAoKICAgICAgICBjb25zdCBtaW5TdXNwZW5zaW9uTGVuZ3RoID0gd2hlZWwuc3VzcGVuc2lvblJlc3RMZW5ndGggLSB3aGVlbC5tYXhTdXNwZW5zaW9uVHJhdmVsOwogICAgICAgIGNvbnN0IG1heFN1c3BlbnNpb25MZW5ndGggPSB3aGVlbC5zdXNwZW5zaW9uUmVzdExlbmd0aCArIHdoZWVsLm1heFN1c3BlbnNpb25UcmF2ZWw7CgogICAgICAgIGlmICh3aGVlbC5zdXNwZW5zaW9uTGVuZ3RoIDwgbWluU3VzcGVuc2lvbkxlbmd0aCkgewogICAgICAgICAgd2hlZWwuc3VzcGVuc2lvbkxlbmd0aCA9IG1pblN1c3BlbnNpb25MZW5ndGg7CiAgICAgICAgfQoKICAgICAgICBpZiAod2hlZWwuc3VzcGVuc2lvbkxlbmd0aCA+IG1heFN1c3BlbnNpb25MZW5ndGgpIHsKICAgICAgICAgIHdoZWVsLnN1c3BlbnNpb25MZW5ndGggPSBtYXhTdXNwZW5zaW9uTGVuZ3RoOwogICAgICAgICAgd2hlZWwucmF5Y2FzdFJlc3VsdC5yZXNldCgpOwogICAgICAgIH0KCiAgICAgICAgY29uc3QgZGVub21pbmF0b3IgPSB3aGVlbC5yYXljYXN0UmVzdWx0LmhpdE5vcm1hbFdvcmxkLmRvdCh3aGVlbC5kaXJlY3Rpb25Xb3JsZCk7CiAgICAgICAgY29uc3QgY2hhc3Npc192ZWxvY2l0eV9hdF9jb250YWN0UG9pbnQgPSBuZXcgVmVjMygpOwogICAgICAgIGNoYXNzaXNCb2R5LmdldFZlbG9jaXR5QXRXb3JsZFBvaW50KHdoZWVsLnJheWNhc3RSZXN1bHQuaGl0UG9pbnRXb3JsZCwgY2hhc3Npc192ZWxvY2l0eV9hdF9jb250YWN0UG9pbnQpOwogICAgICAgIGNvbnN0IHByb2pWZWwgPSB3aGVlbC5yYXljYXN0UmVzdWx0LmhpdE5vcm1hbFdvcmxkLmRvdChjaGFzc2lzX3ZlbG9jaXR5X2F0X2NvbnRhY3RQb2ludCk7CgogICAgICAgIGlmIChkZW5vbWluYXRvciA+PSAtMC4xKSB7CiAgICAgICAgICB3aGVlbC5zdXNwZW5zaW9uUmVsYXRpdmVWZWxvY2l0eSA9IDA7CiAgICAgICAgICB3aGVlbC5jbGlwcGVkSW52Q29udGFjdERvdFN1c3BlbnNpb24gPSAxIC8gMC4xOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICBjb25zdCBpbnYgPSAtMSAvIGRlbm9taW5hdG9yOwogICAgICAgICAgd2hlZWwuc3VzcGVuc2lvblJlbGF0aXZlVmVsb2NpdHkgPSBwcm9qVmVsICogaW52OwogICAgICAgICAgd2hlZWwuY2xpcHBlZEludkNvbnRhY3REb3RTdXNwZW5zaW9uID0gaW52OwogICAgICAgIH0KICAgICAgfSBlbHNlIHsKICAgICAgICAvL3B1dCB3aGVlbCBpbmZvIGFzIGluIHJlc3QgcG9zaXRpb24KICAgICAgICB3aGVlbC5zdXNwZW5zaW9uTGVuZ3RoID0gd2hlZWwuc3VzcGVuc2lvblJlc3RMZW5ndGggKyAwICogd2hlZWwubWF4U3VzcGVuc2lvblRyYXZlbDsKICAgICAgICB3aGVlbC5zdXNwZW5zaW9uUmVsYXRpdmVWZWxvY2l0eSA9IDAuMDsKICAgICAgICB3aGVlbC5kaXJlY3Rpb25Xb3JsZC5zY2FsZSgtMSwgd2hlZWwucmF5Y2FzdFJlc3VsdC5oaXROb3JtYWxXb3JsZCk7CiAgICAgICAgd2hlZWwuY2xpcHBlZEludkNvbnRhY3REb3RTdXNwZW5zaW9uID0gMS4wOwogICAgICB9CgogICAgICByZXR1cm4gZGVwdGg7CiAgICB9CgogICAgdXBkYXRlV2hlZWxUcmFuc2Zvcm1Xb3JsZCh3aGVlbCkgewogICAgICB3aGVlbC5pc0luQ29udGFjdCA9IGZhbHNlOwogICAgICBjb25zdCBjaGFzc2lzQm9keSA9IHRoaXMuY2hhc3Npc0JvZHk7CiAgICAgIGNoYXNzaXNCb2R5LnBvaW50VG9Xb3JsZEZyYW1lKHdoZWVsLmNoYXNzaXNDb25uZWN0aW9uUG9pbnRMb2NhbCwgd2hlZWwuY2hhc3Npc0Nvbm5lY3Rpb25Qb2ludFdvcmxkKTsKICAgICAgY2hhc3Npc0JvZHkudmVjdG9yVG9Xb3JsZEZyYW1lKHdoZWVsLmRpcmVjdGlvbkxvY2FsLCB3aGVlbC5kaXJlY3Rpb25Xb3JsZCk7CiAgICAgIGNoYXNzaXNCb2R5LnZlY3RvclRvV29ybGRGcmFtZSh3aGVlbC5heGxlTG9jYWwsIHdoZWVsLmF4bGVXb3JsZCk7CiAgICB9CiAgICAvKioKICAgICAqIFVwZGF0ZSBvbmUgb2YgdGhlIHdoZWVsIHRyYW5zZm9ybS4KICAgICAqIE5vdGUgd2hlbiByZW5kZXJpbmcgd2hlZWxzOiBkdXJpbmcgZWFjaCBzdGVwLCB3aGVlbCB0cmFuc2Zvcm1zIGFyZSB1cGRhdGVkIEJFRk9SRSB0aGUgY2hhc3NpczsgaWUuIHRoZWlyIHBvc2l0aW9uIGJlY29tZXMgaW52YWxpZCBhZnRlciB0aGUgc3RlcC4gVGh1cyB3aGVuIHlvdSByZW5kZXIgd2hlZWxzLCB5b3UgbXVzdCB1cGRhdGUgd2hlZWwgdHJhbnNmb3JtcyBiZWZvcmUgcmVuZGVyaW5nIHRoZW0uIFNlZSByYXljYXN0VmVoaWNsZSBkZW1vIGZvciBhbiBleGFtcGxlLgogICAgICogQHBhcmFtIHdoZWVsSW5kZXggVGhlIHdoZWVsIGluZGV4IHRvIHVwZGF0ZS4KICAgICAqLwoKCiAgICB1cGRhdGVXaGVlbFRyYW5zZm9ybSh3aGVlbEluZGV4KSB7CiAgICAgIGNvbnN0IHVwID0gdG1wVmVjNDsKICAgICAgY29uc3QgcmlnaHQgPSB0bXBWZWM1OwogICAgICBjb25zdCBmd2QgPSB0bXBWZWM2OwogICAgICBjb25zdCB3aGVlbCA9IHRoaXMud2hlZWxJbmZvc1t3aGVlbEluZGV4XTsKICAgICAgdGhpcy51cGRhdGVXaGVlbFRyYW5zZm9ybVdvcmxkKHdoZWVsKTsKICAgICAgd2hlZWwuZGlyZWN0aW9uTG9jYWwuc2NhbGUoLTEsIHVwKTsKICAgICAgcmlnaHQuY29weSh3aGVlbC5heGxlTG9jYWwpOwogICAgICB1cC5jcm9zcyhyaWdodCwgZndkKTsKICAgICAgZndkLm5vcm1hbGl6ZSgpOwogICAgICByaWdodC5ub3JtYWxpemUoKTsgLy8gUm90YXRlIGFyb3VuZCBzdGVlcmluZyBvdmVyIHRoZSB3aGVlbEF4bGUKCiAgICAgIGNvbnN0IHN0ZWVyaW5nID0gd2hlZWwuc3RlZXJpbmc7CiAgICAgIGNvbnN0IHN0ZWVyaW5nT3JuID0gbmV3IFF1YXRlcm5pb24oKTsKICAgICAgc3RlZXJpbmdPcm4uc2V0RnJvbUF4aXNBbmdsZSh1cCwgc3RlZXJpbmcpOwogICAgICBjb25zdCByb3RhdGluZ09ybiA9IG5ldyBRdWF0ZXJuaW9uKCk7CiAgICAgIHJvdGF0aW5nT3JuLnNldEZyb21BeGlzQW5nbGUocmlnaHQsIHdoZWVsLnJvdGF0aW9uKTsgLy8gV29ybGQgcm90YXRpb24gb2YgdGhlIHdoZWVsCgogICAgICBjb25zdCBxID0gd2hlZWwud29ybGRUcmFuc2Zvcm0ucXVhdGVybmlvbjsKICAgICAgdGhpcy5jaGFzc2lzQm9keS5xdWF0ZXJuaW9uLm11bHQoc3RlZXJpbmdPcm4sIHEpOwogICAgICBxLm11bHQocm90YXRpbmdPcm4sIHEpOwogICAgICBxLm5vcm1hbGl6ZSgpOyAvLyB3b3JsZCBwb3NpdGlvbiBvZiB0aGUgd2hlZWwKCiAgICAgIGNvbnN0IHAgPSB3aGVlbC53b3JsZFRyYW5zZm9ybS5wb3NpdGlvbjsKICAgICAgcC5jb3B5KHdoZWVsLmRpcmVjdGlvbldvcmxkKTsKICAgICAgcC5zY2FsZSh3aGVlbC5zdXNwZW5zaW9uTGVuZ3RoLCBwKTsKICAgICAgcC52YWRkKHdoZWVsLmNoYXNzaXNDb25uZWN0aW9uUG9pbnRXb3JsZCwgcCk7CiAgICB9CiAgICAvKioKICAgICAqIEdldCB0aGUgd29ybGQgdHJhbnNmb3JtIG9mIG9uZSBvZiB0aGUgd2hlZWxzCiAgICAgKi8KCgogICAgZ2V0V2hlZWxUcmFuc2Zvcm1Xb3JsZCh3aGVlbEluZGV4KSB7CiAgICAgIHJldHVybiB0aGlzLndoZWVsSW5mb3Nbd2hlZWxJbmRleF0ud29ybGRUcmFuc2Zvcm07CiAgICB9CgogICAgdXBkYXRlRnJpY3Rpb24odGltZVN0ZXApIHsKICAgICAgY29uc3Qgc3VyZk5vcm1hbFdTX3NjYWxlZF9wcm9qID0gdXBkYXRlRnJpY3Rpb25fc3VyZk5vcm1hbFdTX3NjYWxlZF9wcm9qOyAvL2NhbGN1bGF0ZSB0aGUgaW1wdWxzZSwgc28gdGhhdCB0aGUgd2hlZWxzIGRvbid0IG1vdmUgc2lkZXdhcmRzCgogICAgICBjb25zdCB3aGVlbEluZm9zID0gdGhpcy53aGVlbEluZm9zOwogICAgICBjb25zdCBudW1XaGVlbHMgPSB3aGVlbEluZm9zLmxlbmd0aDsKICAgICAgY29uc3QgY2hhc3Npc0JvZHkgPSB0aGlzLmNoYXNzaXNCb2R5OwogICAgICBjb25zdCBmb3J3YXJkV1MgPSB1cGRhdGVGcmljdGlvbl9mb3J3YXJkV1M7CiAgICAgIGNvbnN0IGF4bGUgPSB1cGRhdGVGcmljdGlvbl9heGxlOwogICAgICB0aGlzLm51bVdoZWVsc09uR3JvdW5kID0gMDsKCiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtV2hlZWxzOyBpKyspIHsKICAgICAgICBjb25zdCB3aGVlbCA9IHdoZWVsSW5mb3NbaV07CiAgICAgICAgY29uc3QgZ3JvdW5kT2JqZWN0ID0gd2hlZWwucmF5Y2FzdFJlc3VsdC5ib2R5OwoKICAgICAgICBpZiAoZ3JvdW5kT2JqZWN0KSB7CiAgICAgICAgICB0aGlzLm51bVdoZWVsc09uR3JvdW5kKys7CiAgICAgICAgfQoKICAgICAgICB3aGVlbC5zaWRlSW1wdWxzZSA9IDA7CiAgICAgICAgd2hlZWwuZm9yd2FyZEltcHVsc2UgPSAwOwoKICAgICAgICBpZiAoIWZvcndhcmRXU1tpXSkgewogICAgICAgICAgZm9yd2FyZFdTW2ldID0gbmV3IFZlYzMoKTsKICAgICAgICB9CgogICAgICAgIGlmICghYXhsZVtpXSkgewogICAgICAgICAgYXhsZVtpXSA9IG5ldyBWZWMzKCk7CiAgICAgICAgfQogICAgICB9CgogICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVdoZWVsczsgaSsrKSB7CiAgICAgICAgY29uc3Qgd2hlZWwgPSB3aGVlbEluZm9zW2ldOwogICAgICAgIGNvbnN0IGdyb3VuZE9iamVjdCA9IHdoZWVsLnJheWNhc3RSZXN1bHQuYm9keTsKCiAgICAgICAgaWYgKGdyb3VuZE9iamVjdCkgewogICAgICAgICAgY29uc3QgYXhsZWkgPSBheGxlW2ldOwogICAgICAgICAgY29uc3Qgd2hlZWxUcmFucyA9IHRoaXMuZ2V0V2hlZWxUcmFuc2Zvcm1Xb3JsZChpKTsgLy8gR2V0IHdvcmxkIGF4bGUKCiAgICAgICAgICB3aGVlbFRyYW5zLnZlY3RvclRvV29ybGRGcmFtZShkaXJlY3Rpb25zW3RoaXMuaW5kZXhSaWdodEF4aXNdLCBheGxlaSk7CiAgICAgICAgICBjb25zdCBzdXJmTm9ybWFsV1MgPSB3aGVlbC5yYXljYXN0UmVzdWx0LmhpdE5vcm1hbFdvcmxkOwogICAgICAgICAgY29uc3QgcHJvaiA9IGF4bGVpLmRvdChzdXJmTm9ybWFsV1MpOwogICAgICAgICAgc3VyZk5vcm1hbFdTLnNjYWxlKHByb2osIHN1cmZOb3JtYWxXU19zY2FsZWRfcHJvaik7CiAgICAgICAgICBheGxlaS52c3ViKHN1cmZOb3JtYWxXU19zY2FsZWRfcHJvaiwgYXhsZWkpOwogICAgICAgICAgYXhsZWkubm9ybWFsaXplKCk7CiAgICAgICAgICBzdXJmTm9ybWFsV1MuY3Jvc3MoYXhsZWksIGZvcndhcmRXU1tpXSk7CiAgICAgICAgICBmb3J3YXJkV1NbaV0ubm9ybWFsaXplKCk7CiAgICAgICAgICB3aGVlbC5zaWRlSW1wdWxzZSA9IHJlc29sdmVTaW5nbGVCaWxhdGVyYWwoY2hhc3Npc0JvZHksIHdoZWVsLnJheWNhc3RSZXN1bHQuaGl0UG9pbnRXb3JsZCwgZ3JvdW5kT2JqZWN0LCB3aGVlbC5yYXljYXN0UmVzdWx0LmhpdFBvaW50V29ybGQsIGF4bGVpKTsKICAgICAgICAgIHdoZWVsLnNpZGVJbXB1bHNlICo9IHNpZGVGcmljdGlvblN0aWZmbmVzczI7CiAgICAgICAgfQogICAgICB9CgogICAgICBjb25zdCBzaWRlRmFjdG9yID0gMTsKICAgICAgY29uc3QgZndkRmFjdG9yID0gMC41OwogICAgICB0aGlzLnNsaWRpbmcgPSBmYWxzZTsKCiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtV2hlZWxzOyBpKyspIHsKICAgICAgICBjb25zdCB3aGVlbCA9IHdoZWVsSW5mb3NbaV07CiAgICAgICAgY29uc3QgZ3JvdW5kT2JqZWN0ID0gd2hlZWwucmF5Y2FzdFJlc3VsdC5ib2R5OwogICAgICAgIGxldCByb2xsaW5nRnJpY3Rpb24gPSAwOwogICAgICAgIHdoZWVsLnNsaXBJbmZvID0gMTsKCiAgICAgICAgaWYgKGdyb3VuZE9iamVjdCkgewogICAgICAgICAgY29uc3QgZGVmYXVsdFJvbGxpbmdGcmljdGlvbkltcHVsc2UgPSAwOwogICAgICAgICAgY29uc3QgbWF4SW1wdWxzZSA9IHdoZWVsLmJyYWtlID8gd2hlZWwuYnJha2UgOiBkZWZhdWx0Um9sbGluZ0ZyaWN0aW9uSW1wdWxzZTsgLy8gYnRXaGVlbENvbnRhY3RQb2ludCBjb250YWN0UHQoY2hhc3Npc0JvZHksZ3JvdW5kT2JqZWN0LHdoZWVsSW5mcmF5Y2FzdEluZm8uaGl0UG9pbnRXb3JsZCxmb3J3YXJkV1Nbd2hlZWxdLG1heEltcHVsc2UpOwogICAgICAgICAgLy8gcm9sbGluZ0ZyaWN0aW9uID0gY2FsY1JvbGxpbmdGcmljdGlvbihjb250YWN0UHQpOwoKICAgICAgICAgIHJvbGxpbmdGcmljdGlvbiA9IGNhbGNSb2xsaW5nRnJpY3Rpb24oY2hhc3Npc0JvZHksIGdyb3VuZE9iamVjdCwgd2hlZWwucmF5Y2FzdFJlc3VsdC5oaXRQb2ludFdvcmxkLCBmb3J3YXJkV1NbaV0sIG1heEltcHVsc2UpOwogICAgICAgICAgcm9sbGluZ0ZyaWN0aW9uICs9IHdoZWVsLmVuZ2luZUZvcmNlICogdGltZVN0ZXA7IC8vIHJvbGxpbmdGcmljdGlvbiA9IDA7CgogICAgICAgICAgY29uc3QgZmFjdG9yID0gbWF4SW1wdWxzZSAvIHJvbGxpbmdGcmljdGlvbjsKICAgICAgICAgIHdoZWVsLnNsaXBJbmZvICo9IGZhY3RvcjsKICAgICAgICB9IC8vc3dpdGNoIGJldHdlZW4gYWN0aXZlIHJvbGxpbmcgKHRocm90dGxlKSwgYnJha2luZyBhbmQgbm9uLWFjdGl2ZSByb2xsaW5nIGZyaWN0aW9uIChudGhyb3R0bGUvYnJlYWspCgoKICAgICAgICB3aGVlbC5mb3J3YXJkSW1wdWxzZSA9IDA7CiAgICAgICAgd2hlZWwuc2tpZEluZm8gPSAxOwoKICAgICAgICBpZiAoZ3JvdW5kT2JqZWN0KSB7CiAgICAgICAgICB3aGVlbC5za2lkSW5mbyA9IDE7CiAgICAgICAgICBjb25zdCBtYXhpbXAgPSB3aGVlbC5zdXNwZW5zaW9uRm9yY2UgKiB0aW1lU3RlcCAqIHdoZWVsLmZyaWN0aW9uU2xpcDsKICAgICAgICAgIGNvbnN0IG1heGltcFNpZGUgPSBtYXhpbXA7CiAgICAgICAgICBjb25zdCBtYXhpbXBTcXVhcmVkID0gbWF4aW1wICogbWF4aW1wU2lkZTsKICAgICAgICAgIHdoZWVsLmZvcndhcmRJbXB1bHNlID0gcm9sbGluZ0ZyaWN0aW9uOyAvL3doZWVsSW5mby5lbmdpbmVGb3JjZSogdGltZVN0ZXA7CgogICAgICAgICAgY29uc3QgeCA9IHdoZWVsLmZvcndhcmRJbXB1bHNlICogZndkRmFjdG9yIC8gd2hlZWwuZm9yd2FyZEFjY2VsZXJhdGlvbjsKICAgICAgICAgIGNvbnN0IHkgPSB3aGVlbC5zaWRlSW1wdWxzZSAqIHNpZGVGYWN0b3IgLyB3aGVlbC5zaWRlQWNjZWxlcmF0aW9uOwogICAgICAgICAgY29uc3QgaW1wdWxzZVNxdWFyZWQgPSB4ICogeCArIHkgKiB5OwogICAgICAgICAgd2hlZWwuc2xpZGluZyA9IGZhbHNlOwoKICAgICAgICAgIGlmIChpbXB1bHNlU3F1YXJlZCA+IG1heGltcFNxdWFyZWQpIHsKICAgICAgICAgICAgdGhpcy5zbGlkaW5nID0gdHJ1ZTsKICAgICAgICAgICAgd2hlZWwuc2xpZGluZyA9IHRydWU7CiAgICAgICAgICAgIGNvbnN0IGZhY3RvciA9IG1heGltcCAvIE1hdGguc3FydChpbXB1bHNlU3F1YXJlZCk7CiAgICAgICAgICAgIHdoZWVsLnNraWRJbmZvICo9IGZhY3RvcjsKICAgICAgICAgIH0KICAgICAgICB9CiAgICAgIH0KCiAgICAgIGlmICh0aGlzLnNsaWRpbmcpIHsKICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVdoZWVsczsgaSsrKSB7CiAgICAgICAgICBjb25zdCB3aGVlbCA9IHdoZWVsSW5mb3NbaV07CgogICAgICAgICAgaWYgKHdoZWVsLnNpZGVJbXB1bHNlICE9PSAwKSB7CiAgICAgICAgICAgIGlmICh3aGVlbC5za2lkSW5mbyA8IDEpIHsKICAgICAgICAgICAgICB3aGVlbC5mb3J3YXJkSW1wdWxzZSAqPSB3aGVlbC5za2lkSW5mbzsKICAgICAgICAgICAgICB3aGVlbC5zaWRlSW1wdWxzZSAqPSB3aGVlbC5za2lkSW5mbzsKICAgICAgICAgICAgfQogICAgICAgICAgfQogICAgICAgIH0KICAgICAgfSAvLyBhcHBseSB0aGUgaW1wdWxzZXMKCgogICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVdoZWVsczsgaSsrKSB7CiAgICAgICAgY29uc3Qgd2hlZWwgPSB3aGVlbEluZm9zW2ldOwogICAgICAgIGNvbnN0IHJlbF9wb3MgPSBuZXcgVmVjMygpOwogICAgICAgIHdoZWVsLnJheWNhc3RSZXN1bHQuaGl0UG9pbnRXb3JsZC52c3ViKGNoYXNzaXNCb2R5LnBvc2l0aW9uLCByZWxfcG9zKTsgLy8gY2Fubm9ucyBhcHBseWltcHVsc2UgaXMgdXNpbmcgd29ybGQgY29vcmQgZm9yIHRoZSBwb3NpdGlvbgogICAgICAgIC8vcmVsX3Bvcy5jb3B5KHdoZWVsLnJheWNhc3RSZXN1bHQuaGl0UG9pbnRXb3JsZCk7CgogICAgICAgIGlmICh3aGVlbC5mb3J3YXJkSW1wdWxzZSAhPT0gMCkgewogICAgICAgICAgY29uc3QgaW1wdWxzZSA9IG5ldyBWZWMzKCk7CiAgICAgICAgICBmb3J3YXJkV1NbaV0uc2NhbGUod2hlZWwuZm9yd2FyZEltcHVsc2UsIGltcHVsc2UpOwogICAgICAgICAgY2hhc3Npc0JvZHkuYXBwbHlJbXB1bHNlKGltcHVsc2UsIHJlbF9wb3MpOwogICAgICAgIH0KCiAgICAgICAgaWYgKHdoZWVsLnNpZGVJbXB1bHNlICE9PSAwKSB7CiAgICAgICAgICBjb25zdCBncm91bmRPYmplY3QgPSB3aGVlbC5yYXljYXN0UmVzdWx0LmJvZHk7CiAgICAgICAgICBjb25zdCByZWxfcG9zMiA9IG5ldyBWZWMzKCk7CiAgICAgICAgICB3aGVlbC5yYXljYXN0UmVzdWx0LmhpdFBvaW50V29ybGQudnN1Yihncm91bmRPYmplY3QucG9zaXRpb24sIHJlbF9wb3MyKTsgLy9yZWxfcG9zMi5jb3B5KHdoZWVsLnJheWNhc3RSZXN1bHQuaGl0UG9pbnRXb3JsZCk7CgogICAgICAgICAgY29uc3Qgc2lkZUltcCA9IG5ldyBWZWMzKCk7CiAgICAgICAgICBheGxlW2ldLnNjYWxlKHdoZWVsLnNpZGVJbXB1bHNlLCBzaWRlSW1wKTsgLy8gU2NhbGUgdGhlIHJlbGF0aXZlIHBvc2l0aW9uIGluIHRoZSB1cCBkaXJlY3Rpb24gd2l0aCByb2xsSW5mbHVlbmNlLgogICAgICAgICAgLy8gSWYgcm9sbEluZmx1ZW5jZSBpcyAxLCB0aGUgaW1wdWxzZSB3aWxsIGJlIGFwcGxpZWQgb24gdGhlIGhpdFBvaW50IChlYXN5IHRvIHJvbGwgb3ZlciksIGlmIGl0IGlzIHplcm8gaXQgd2lsbCBiZSBhcHBsaWVkIGluIHRoZSBzYW1lIHBsYW5lIGFzIHRoZSBjZW50ZXIgb2YgbWFzcyAobm90IGVhc3kgdG8gcm9sbCBvdmVyKS4KCiAgICAgICAgICBjaGFzc2lzQm9keS52ZWN0b3JUb0xvY2FsRnJhbWUocmVsX3BvcywgcmVsX3Bvcyk7CiAgICAgICAgICByZWxfcG9zWyd4eXonW3RoaXMuaW5kZXhVcEF4aXNdXSAqPSB3aGVlbC5yb2xsSW5mbHVlbmNlOwogICAgICAgICAgY2hhc3Npc0JvZHkudmVjdG9yVG9Xb3JsZEZyYW1lKHJlbF9wb3MsIHJlbF9wb3MpOwogICAgICAgICAgY2hhc3Npc0JvZHkuYXBwbHlJbXB1bHNlKHNpZGVJbXAsIHJlbF9wb3MpOyAvL2FwcGx5IGZyaWN0aW9uIGltcHVsc2Ugb24gdGhlIGdyb3VuZAoKICAgICAgICAgIHNpZGVJbXAuc2NhbGUoLTEsIHNpZGVJbXApOwogICAgICAgICAgZ3JvdW5kT2JqZWN0LmFwcGx5SW1wdWxzZShzaWRlSW1wLCByZWxfcG9zMik7CiAgICAgICAgfQogICAgICB9CiAgICB9CgogIH0KICBuZXcgVmVjMygpOwogIG5ldyBWZWMzKCk7CiAgbmV3IFZlYzMoKTsKICBjb25zdCB0bXBWZWM0ID0gbmV3IFZlYzMoKTsKICBjb25zdCB0bXBWZWM1ID0gbmV3IFZlYzMoKTsKICBjb25zdCB0bXBWZWM2ID0gbmV3IFZlYzMoKTsKICBuZXcgUmF5KCk7CiAgbmV3IFZlYzMoKTsKICBjb25zdCBjYXN0UmF5X3JheXZlY3RvciA9IG5ldyBWZWMzKCk7CiAgY29uc3QgY2FzdFJheV90YXJnZXQgPSBuZXcgVmVjMygpOwogIGNvbnN0IGRpcmVjdGlvbnMgPSBbbmV3IFZlYzMoMSwgMCwgMCksIG5ldyBWZWMzKDAsIDEsIDApLCBuZXcgVmVjMygwLCAwLCAxKV07CiAgY29uc3QgdXBkYXRlRnJpY3Rpb25fc3VyZk5vcm1hbFdTX3NjYWxlZF9wcm9qID0gbmV3IFZlYzMoKTsKICBjb25zdCB1cGRhdGVGcmljdGlvbl9heGxlID0gW107CiAgY29uc3QgdXBkYXRlRnJpY3Rpb25fZm9yd2FyZFdTID0gW107CiAgY29uc3Qgc2lkZUZyaWN0aW9uU3RpZmZuZXNzMiA9IDE7CiAgY29uc3QgY2FsY1JvbGxpbmdGcmljdGlvbl92ZWwxID0gbmV3IFZlYzMoKTsKICBjb25zdCBjYWxjUm9sbGluZ0ZyaWN0aW9uX3ZlbDIgPSBuZXcgVmVjMygpOwogIGNvbnN0IGNhbGNSb2xsaW5nRnJpY3Rpb25fdmVsID0gbmV3IFZlYzMoKTsKCiAgZnVuY3Rpb24gY2FsY1JvbGxpbmdGcmljdGlvbihib2R5MCwgYm9keTEsIGZyaWN0aW9uUG9zV29ybGQsIGZyaWN0aW9uRGlyZWN0aW9uV29ybGQsIG1heEltcHVsc2UpIHsKICAgIGxldCBqMSA9IDA7CiAgICBjb25zdCBjb250YWN0UG9zV29ybGQgPSBmcmljdGlvblBvc1dvcmxkOyAvLyBjb25zdCByZWxfcG9zMSA9IG5ldyBWZWMzKCk7CiAgICAvLyBjb25zdCByZWxfcG9zMiA9IG5ldyBWZWMzKCk7CgogICAgY29uc3QgdmVsMSA9IGNhbGNSb2xsaW5nRnJpY3Rpb25fdmVsMTsKICAgIGNvbnN0IHZlbDIgPSBjYWxjUm9sbGluZ0ZyaWN0aW9uX3ZlbDI7CiAgICBjb25zdCB2ZWwgPSBjYWxjUm9sbGluZ0ZyaWN0aW9uX3ZlbDsgLy8gY29udGFjdFBvc1dvcmxkLnZzdWIoYm9keTAucG9zaXRpb24sIHJlbF9wb3MxKTsKICAgIC8vIGNvbnRhY3RQb3NXb3JsZC52c3ViKGJvZHkxLnBvc2l0aW9uLCByZWxfcG9zMik7CgogICAgYm9keTAuZ2V0VmVsb2NpdHlBdFdvcmxkUG9pbnQoY29udGFjdFBvc1dvcmxkLCB2ZWwxKTsKICAgIGJvZHkxLmdldFZlbG9jaXR5QXRXb3JsZFBvaW50KGNvbnRhY3RQb3NXb3JsZCwgdmVsMik7CiAgICB2ZWwxLnZzdWIodmVsMiwgdmVsKTsKICAgIGNvbnN0IHZyZWwgPSBmcmljdGlvbkRpcmVjdGlvbldvcmxkLmRvdCh2ZWwpOwogICAgY29uc3QgZGVub20wID0gY29tcHV0ZUltcHVsc2VEZW5vbWluYXRvcihib2R5MCwgZnJpY3Rpb25Qb3NXb3JsZCwgZnJpY3Rpb25EaXJlY3Rpb25Xb3JsZCk7CiAgICBjb25zdCBkZW5vbTEgPSBjb21wdXRlSW1wdWxzZURlbm9taW5hdG9yKGJvZHkxLCBmcmljdGlvblBvc1dvcmxkLCBmcmljdGlvbkRpcmVjdGlvbldvcmxkKTsKICAgIGNvbnN0IHJlbGF4YXRpb24gPSAxOwogICAgY29uc3QgamFjRGlhZ0FCSW52ID0gcmVsYXhhdGlvbiAvIChkZW5vbTAgKyBkZW5vbTEpOyAvLyBjYWxjdWxhdGUgaiB0aGF0IG1vdmVzIHVzIHRvIHplcm8gcmVsYXRpdmUgdmVsb2NpdHkKCiAgICBqMSA9IC12cmVsICogamFjRGlhZ0FCSW52OwoKICAgIGlmIChtYXhJbXB1bHNlIDwgajEpIHsKICAgICAgajEgPSBtYXhJbXB1bHNlOwogICAgfQoKICAgIGlmIChqMSA8IC1tYXhJbXB1bHNlKSB7CiAgICAgIGoxID0gLW1heEltcHVsc2U7CiAgICB9CgogICAgcmV0dXJuIGoxOwogIH0KCiAgY29uc3QgY29tcHV0ZUltcHVsc2VEZW5vbWluYXRvcl9yMCA9IG5ldyBWZWMzKCk7CiAgY29uc3QgY29tcHV0ZUltcHVsc2VEZW5vbWluYXRvcl9jMCA9IG5ldyBWZWMzKCk7CiAgY29uc3QgY29tcHV0ZUltcHVsc2VEZW5vbWluYXRvcl92ZWMgPSBuZXcgVmVjMygpOwogIGNvbnN0IGNvbXB1dGVJbXB1bHNlRGVub21pbmF0b3JfbSA9IG5ldyBWZWMzKCk7CgogIGZ1bmN0aW9uIGNvbXB1dGVJbXB1bHNlRGVub21pbmF0b3IoYm9keSwgcG9zLCBub3JtYWwpIHsKICAgIGNvbnN0IHIwID0gY29tcHV0ZUltcHVsc2VEZW5vbWluYXRvcl9yMDsKICAgIGNvbnN0IGMwID0gY29tcHV0ZUltcHVsc2VEZW5vbWluYXRvcl9jMDsKICAgIGNvbnN0IHZlYyA9IGNvbXB1dGVJbXB1bHNlRGVub21pbmF0b3JfdmVjOwogICAgY29uc3QgbSA9IGNvbXB1dGVJbXB1bHNlRGVub21pbmF0b3JfbTsKICAgIHBvcy52c3ViKGJvZHkucG9zaXRpb24sIHIwKTsKICAgIHIwLmNyb3NzKG5vcm1hbCwgYzApOwogICAgYm9keS5pbnZJbmVydGlhV29ybGQudm11bHQoYzAsIG0pOwogICAgbS5jcm9zcyhyMCwgdmVjKTsKICAgIHJldHVybiBib2R5Lmludk1hc3MgKyBub3JtYWwuZG90KHZlYyk7CiAgfQoKICBjb25zdCByZXNvbHZlU2luZ2xlQmlsYXRlcmFsX3ZlbDEgPSBuZXcgVmVjMygpOwogIGNvbnN0IHJlc29sdmVTaW5nbGVCaWxhdGVyYWxfdmVsMiA9IG5ldyBWZWMzKCk7CiAgY29uc3QgcmVzb2x2ZVNpbmdsZUJpbGF0ZXJhbF92ZWwgPSBuZXcgVmVjMygpOyAvLyBiaWxhdGVyYWwgY29uc3RyYWludCBiZXR3ZWVuIHR3byBkeW5hbWljIG9iamVjdHMKCiAgZnVuY3Rpb24gcmVzb2x2ZVNpbmdsZUJpbGF0ZXJhbChib2R5MSwgcG9zMSwgYm9keTIsIHBvczIsIG5vcm1hbCkgewogICAgY29uc3Qgbm9ybWFsTGVuU3FyID0gbm9ybWFsLmxlbmd0aFNxdWFyZWQoKTsKCiAgICBpZiAobm9ybWFsTGVuU3FyID4gMS4xKSB7CiAgICAgIHJldHVybiAwOyAvLyBubyBpbXB1bHNlCiAgICB9IC8vIGNvbnN0IHJlbF9wb3MxID0gbmV3IFZlYzMoKTsKICAgIC8vIGNvbnN0IHJlbF9wb3MyID0gbmV3IFZlYzMoKTsKICAgIC8vIHBvczEudnN1Yihib2R5MS5wb3NpdGlvbiwgcmVsX3BvczEpOwogICAgLy8gcG9zMi52c3ViKGJvZHkyLnBvc2l0aW9uLCByZWxfcG9zMik7CgoKICAgIGNvbnN0IHZlbDEgPSByZXNvbHZlU2luZ2xlQmlsYXRlcmFsX3ZlbDE7CiAgICBjb25zdCB2ZWwyID0gcmVzb2x2ZVNpbmdsZUJpbGF0ZXJhbF92ZWwyOwogICAgY29uc3QgdmVsID0gcmVzb2x2ZVNpbmdsZUJpbGF0ZXJhbF92ZWw7CiAgICBib2R5MS5nZXRWZWxvY2l0eUF0V29ybGRQb2ludChwb3MxLCB2ZWwxKTsKICAgIGJvZHkyLmdldFZlbG9jaXR5QXRXb3JsZFBvaW50KHBvczIsIHZlbDIpOwogICAgdmVsMS52c3ViKHZlbDIsIHZlbCk7CiAgICBjb25zdCByZWxfdmVsID0gbm9ybWFsLmRvdCh2ZWwpOwogICAgY29uc3QgY29udGFjdERhbXBpbmcgPSAwLjI7CiAgICBjb25zdCBtYXNzVGVybSA9IDEgLyAoYm9keTEuaW52TWFzcyArIGJvZHkyLmludk1hc3MpOwogICAgY29uc3QgaW1wdWxzZSA9IC1jb250YWN0RGFtcGluZyAqIHJlbF92ZWwgKiBtYXNzVGVybTsKICAgIHJldHVybiBpbXB1bHNlOwogIH0KCiAgLyoqCiAgICogU3BoZXJpY2FsIHNoYXBlCiAgICogQGV4YW1wbGUKICAgKiAgICAgY29uc3QgcmFkaXVzID0gMQogICAqICAgICBjb25zdCBzcGhlcmVTaGFwZSA9IG5ldyBDQU5OT04uU3BoZXJlKHJhZGl1cykKICAgKiAgICAgY29uc3Qgc3BoZXJlQm9keSA9IG5ldyBDQU5OT04uQm9keSh7IG1hc3M6IDEsIHNoYXBlOiBzcGhlcmVTaGFwZSB9KQogICAqICAgICB3b3JsZC5hZGRCb2R5KHNwaGVyZUJvZHkpCiAgICovCiAgY2xhc3MgU3BoZXJlIGV4dGVuZHMgU2hhcGUgewogICAgLyoqCiAgICAgKiBUaGUgcmFkaXVzIG9mIHRoZSBzcGhlcmUuCiAgICAgKi8KCiAgICAvKioKICAgICAqCiAgICAgKiBAcGFyYW0gcmFkaXVzIFRoZSByYWRpdXMgb2YgdGhlIHNwaGVyZSwgYSBub24tbmVnYXRpdmUgbnVtYmVyLgogICAgICovCiAgICBjb25zdHJ1Y3RvcihyYWRpdXMpIHsKICAgICAgc3VwZXIoewogICAgICAgIHR5cGU6IFNoYXBlLnR5cGVzLlNQSEVSRQogICAgICB9KTsKICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXMgIT09IHVuZGVmaW5lZCA/IHJhZGl1cyA6IDEuMDsKCiAgICAgIGlmICh0aGlzLnJhZGl1cyA8IDApIHsKICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBzcGhlcmUgcmFkaXVzIGNhbm5vdCBiZSBuZWdhdGl2ZS4nKTsKICAgICAgfQoKICAgICAgdGhpcy51cGRhdGVCb3VuZGluZ1NwaGVyZVJhZGl1cygpOwogICAgfQogICAgLyoqIGNhbGN1bGF0ZUxvY2FsSW5lcnRpYSAqLwoKCiAgICBjYWxjdWxhdGVMb2NhbEluZXJ0aWEobWFzcywgdGFyZ2V0KSB7CiAgICAgIGlmICh0YXJnZXQgPT09IHZvaWQgMCkgewogICAgICAgIHRhcmdldCA9IG5ldyBWZWMzKCk7CiAgICAgIH0KCiAgICAgIGNvbnN0IEkgPSAyLjAgKiBtYXNzICogdGhpcy5yYWRpdXMgKiB0aGlzLnJhZGl1cyAvIDUuMDsKICAgICAgdGFyZ2V0LnggPSBJOwogICAgICB0YXJnZXQueSA9IEk7CiAgICAgIHRhcmdldC56ID0gSTsKICAgICAgcmV0dXJuIHRhcmdldDsKICAgIH0KICAgIC8qKiB2b2x1bWUgKi8KCgogICAgdm9sdW1lKCkgewogICAgICByZXR1cm4gNC4wICogTWF0aC5QSSAqIE1hdGgucG93KHRoaXMucmFkaXVzLCAzKSAvIDMuMDsKICAgIH0KCiAgICB1cGRhdGVCb3VuZGluZ1NwaGVyZVJhZGl1cygpIHsKICAgICAgdGhpcy5ib3VuZGluZ1NwaGVyZVJhZGl1cyA9IHRoaXMucmFkaXVzOwogICAgfQoKICAgIGNhbGN1bGF0ZVdvcmxkQUFCQihwb3MsIHF1YXQsIG1pbiwgbWF4KSB7CiAgICAgIGNvbnN0IHIgPSB0aGlzLnJhZGl1czsKICAgICAgY29uc3QgYXhlcyA9IFsneCcsICd5JywgJ3onXTsKCiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXhlcy5sZW5ndGg7IGkrKykgewogICAgICAgIGNvbnN0IGF4ID0gYXhlc1tpXTsKICAgICAgICBtaW5bYXhdID0gcG9zW2F4XSAtIHI7CiAgICAgICAgbWF4W2F4XSA9IHBvc1theF0gKyByOwogICAgICB9CiAgICB9CgogIH0KICBuZXcgVmVjMygpOwogIG5ldyBWZWMzKCk7CiAgbmV3IFZlYzMoKTsgLy8gVGVtcCB2ZWN0b3JzIGZvciBjYWxjdWxhdGlvbgoKICBuZXcgVmVjMygpOyAvLyBSZWxhdGl2ZSB2ZWxvY2l0eQoKICBuZXcgVmVjMygpOwogIG5ldyBWZWMzKCk7CiAgbmV3IFZlYzMoKTsKICBuZXcgVmVjMygpOwogIG5ldyBWZWMzKCk7CgogIC8qKgogICAqIEN5bGluZGVyIGNsYXNzLgogICAqIEBleGFtcGxlCiAgICogICAgIGNvbnN0IHJhZGl1c1RvcCA9IDAuNQogICAqICAgICBjb25zdCByYWRpdXNCb3R0b20gPSAwLjUKICAgKiAgICAgY29uc3QgaGVpZ2h0ID0gMgogICAqICAgICBjb25zdCBudW1TZWdtZW50cyA9IDEyCiAgICogICAgIGNvbnN0IGN5bGluZGVyU2hhcGUgPSBuZXcgQ0FOTk9OLkN5bGluZGVyKHJhZGl1c1RvcCwgcmFkaXVzQm90dG9tLCBoZWlnaHQsIG51bVNlZ21lbnRzKQogICAqICAgICBjb25zdCBjeWxpbmRlckJvZHkgPSBuZXcgQ0FOTk9OLkJvZHkoeyBtYXNzOiAxLCBzaGFwZTogY3lsaW5kZXJTaGFwZSB9KQogICAqICAgICB3b3JsZC5hZGRCb2R5KGN5bGluZGVyQm9keSkKICAgKi8KCiAgY2xhc3MgQ3lsaW5kZXIgZXh0ZW5kcyBDb252ZXhQb2x5aGVkcm9uIHsKICAgIC8qKiBUaGUgcmFkaXVzIG9mIHRoZSB0b3Agb2YgdGhlIEN5bGluZGVyLiAqLwoKICAgIC8qKiBUaGUgcmFkaXVzIG9mIHRoZSBib3R0b20gb2YgdGhlIEN5bGluZGVyLiAqLwoKICAgIC8qKiBUaGUgaGVpZ2h0IG9mIHRoZSBDeWxpbmRlci4gKi8KCiAgICAvKiogVGhlIG51bWJlciBvZiBzZWdtZW50cyB0byBidWlsZCB0aGUgY3lsaW5kZXIgb3V0IG9mLiAqLwoKICAgIC8qKgogICAgICogQHBhcmFtIHJhZGl1c1RvcCBUaGUgcmFkaXVzIG9mIHRoZSB0b3Agb2YgdGhlIEN5bGluZGVyLgogICAgICogQHBhcmFtIHJhZGl1c0JvdHRvbSBUaGUgcmFkaXVzIG9mIHRoZSBib3R0b20gb2YgdGhlIEN5bGluZGVyLgogICAgICogQHBhcmFtIGhlaWdodCBUaGUgaGVpZ2h0IG9mIHRoZSBDeWxpbmRlci4KICAgICAqIEBwYXJhbSBudW1TZWdtZW50cyBUaGUgbnVtYmVyIG9mIHNlZ21lbnRzIHRvIGJ1aWxkIHRoZSBjeWxpbmRlciBvdXQgb2YuCiAgICAgKi8KICAgIGNvbnN0cnVjdG9yKHJhZGl1c1RvcCwgcmFkaXVzQm90dG9tLCBoZWlnaHQsIG51bVNlZ21lbnRzKSB7CiAgICAgIGlmIChyYWRpdXNUb3AgPT09IHZvaWQgMCkgewogICAgICAgIHJhZGl1c1RvcCA9IDE7CiAgICAgIH0KCiAgICAgIGlmIChyYWRpdXNCb3R0b20gPT09IHZvaWQgMCkgewogICAgICAgIHJhZGl1c0JvdHRvbSA9IDE7CiAgICAgIH0KCiAgICAgIGlmIChoZWlnaHQgPT09IHZvaWQgMCkgewogICAgICAgIGhlaWdodCA9IDE7CiAgICAgIH0KCiAgICAgIGlmIChudW1TZWdtZW50cyA9PT0gdm9pZCAwKSB7CiAgICAgICAgbnVtU2VnbWVudHMgPSA4OwogICAgICB9CgogICAgICBpZiAocmFkaXVzVG9wIDwgMCkgewogICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGN5bGluZGVyIHJhZGl1c1RvcCBjYW5ub3QgYmUgbmVnYXRpdmUuJyk7CiAgICAgIH0KCiAgICAgIGlmIChyYWRpdXNCb3R0b20gPCAwKSB7CiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgY3lsaW5kZXIgcmFkaXVzQm90dG9tIGNhbm5vdCBiZSBuZWdhdGl2ZS4nKTsKICAgICAgfQoKICAgICAgY29uc3QgTiA9IG51bVNlZ21lbnRzOwogICAgICBjb25zdCB2ZXJ0aWNlcyA9IFtdOwogICAgICBjb25zdCBheGVzID0gW107CiAgICAgIGNvbnN0IGZhY2VzID0gW107CiAgICAgIGNvbnN0IGJvdHRvbWZhY2UgPSBbXTsKICAgICAgY29uc3QgdG9wZmFjZSA9IFtdOwogICAgICBjb25zdCBjb3MgPSBNYXRoLmNvczsKICAgICAgY29uc3Qgc2luID0gTWF0aC5zaW47IC8vIEZpcnN0IGJvdHRvbSBwb2ludAoKICAgICAgdmVydGljZXMucHVzaChuZXcgVmVjMygtcmFkaXVzQm90dG9tICogc2luKDApLCAtaGVpZ2h0ICogMC41LCByYWRpdXNCb3R0b20gKiBjb3MoMCkpKTsKICAgICAgYm90dG9tZmFjZS5wdXNoKDApOyAvLyBGaXJzdCB0b3AgcG9pbnQKCiAgICAgIHZlcnRpY2VzLnB1c2gobmV3IFZlYzMoLXJhZGl1c1RvcCAqIHNpbigwKSwgaGVpZ2h0ICogMC41LCByYWRpdXNUb3AgKiBjb3MoMCkpKTsKICAgICAgdG9wZmFjZS5wdXNoKDEpOwoKICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOOyBpKyspIHsKICAgICAgICBjb25zdCB0aGV0YSA9IDIgKiBNYXRoLlBJIC8gTiAqIChpICsgMSk7CiAgICAgICAgY29uc3QgdGhldGFOID0gMiAqIE1hdGguUEkgLyBOICogKGkgKyAwLjUpOwoKICAgICAgICBpZiAoaSA8IE4gLSAxKSB7CiAgICAgICAgICAvLyBCb3R0b20KICAgICAgICAgIHZlcnRpY2VzLnB1c2gobmV3IFZlYzMoLXJhZGl1c0JvdHRvbSAqIHNpbih0aGV0YSksIC1oZWlnaHQgKiAwLjUsIHJhZGl1c0JvdHRvbSAqIGNvcyh0aGV0YSkpKTsKICAgICAgICAgIGJvdHRvbWZhY2UucHVzaCgyICogaSArIDIpOyAvLyBUb3AKCiAgICAgICAgICB2ZXJ0aWNlcy5wdXNoKG5ldyBWZWMzKC1yYWRpdXNUb3AgKiBzaW4odGhldGEpLCBoZWlnaHQgKiAwLjUsIHJhZGl1c1RvcCAqIGNvcyh0aGV0YSkpKTsKICAgICAgICAgIHRvcGZhY2UucHVzaCgyICogaSArIDMpOyAvLyBGYWNlCgogICAgICAgICAgZmFjZXMucHVzaChbMiAqIGksIDIgKiBpICsgMSwgMiAqIGkgKyAzLCAyICogaSArIDJdKTsKICAgICAgICB9IGVsc2UgewogICAgICAgICAgZmFjZXMucHVzaChbMiAqIGksIDIgKiBpICsgMSwgMSwgMF0pOyAvLyBDb25uZWN0CiAgICAgICAgfSAvLyBBeGlzOiB3ZSBjYW4gY3V0IG9mZiBoYWxmIG9mIHRoZW0gaWYgd2UgaGF2ZSBldmVuIG51bWJlciBvZiBzZWdtZW50cwoKCiAgICAgICAgaWYgKE4gJSAyID09PSAxIHx8IGkgPCBOIC8gMikgewogICAgICAgICAgYXhlcy5wdXNoKG5ldyBWZWMzKC1zaW4odGhldGFOKSwgMCwgY29zKHRoZXRhTikpKTsKICAgICAgICB9CiAgICAgIH0KCiAgICAgIGZhY2VzLnB1c2goYm90dG9tZmFjZSk7CiAgICAgIGF4ZXMucHVzaChuZXcgVmVjMygwLCAxLCAwKSk7IC8vIFJlb3JkZXIgdG9wIGZhY2UKCiAgICAgIGNvbnN0IHRlbXAgPSBbXTsKCiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9wZmFjZS5sZW5ndGg7IGkrKykgewogICAgICAgIHRlbXAucHVzaCh0b3BmYWNlW3RvcGZhY2UubGVuZ3RoIC0gaSAtIDFdKTsKICAgICAgfQoKICAgICAgZmFjZXMucHVzaCh0ZW1wKTsKICAgICAgc3VwZXIoewogICAgICAgIHZlcnRpY2VzLAogICAgICAgIGZhY2VzLAogICAgICAgIGF4ZXMKICAgICAgfSk7CiAgICAgIHRoaXMudHlwZSA9IFNoYXBlLnR5cGVzLkNZTElOREVSOwogICAgICB0aGlzLnJhZGl1c1RvcCA9IHJhZGl1c1RvcDsKICAgICAgdGhpcy5yYWRpdXNCb3R0b20gPSByYWRpdXNCb3R0b207CiAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0OwogICAgICB0aGlzLm51bVNlZ21lbnRzID0gbnVtU2VnbWVudHM7CiAgICB9CgogIH0KCiAgLyoqCiAgICogUGFydGljbGUgc2hhcGUuCiAgICogQGV4YW1wbGUKICAgKiAgICAgY29uc3QgcGFydGljbGVTaGFwZSA9IG5ldyBDQU5OT04uUGFydGljbGUoKQogICAqICAgICBjb25zdCBwYXJ0aWNsZUJvZHkgPSBuZXcgQ0FOTk9OLkJvZHkoeyBtYXNzOiAxLCBzaGFwZTogcGFydGljbGVTaGFwZSB9KQogICAqICAgICB3b3JsZC5hZGRCb2R5KHBhcnRpY2xlQm9keSkKICAgKi8KICBjbGFzcyBQYXJ0aWNsZSBleHRlbmRzIFNoYXBlIHsKICAgIGNvbnN0cnVjdG9yKCkgewogICAgICBzdXBlcih7CiAgICAgICAgdHlwZTogU2hhcGUudHlwZXMuUEFSVElDTEUKICAgICAgfSk7CiAgICB9CiAgICAvKioKICAgICAqIGNhbGN1bGF0ZUxvY2FsSW5lcnRpYQogICAgICovCgoKICAgIGNhbGN1bGF0ZUxvY2FsSW5lcnRpYShtYXNzLCB0YXJnZXQpIHsKICAgICAgaWYgKHRhcmdldCA9PT0gdm9pZCAwKSB7CiAgICAgICAgdGFyZ2V0ID0gbmV3IFZlYzMoKTsKICAgICAgfQoKICAgICAgdGFyZ2V0LnNldCgwLCAwLCAwKTsKICAgICAgcmV0dXJuIHRhcmdldDsKICAgIH0KCiAgICB2b2x1bWUoKSB7CiAgICAgIHJldHVybiAwOwogICAgfQoKICAgIHVwZGF0ZUJvdW5kaW5nU3BoZXJlUmFkaXVzKCkgewogICAgICB0aGlzLmJvdW5kaW5nU3BoZXJlUmFkaXVzID0gMDsKICAgIH0KCiAgICBjYWxjdWxhdGVXb3JsZEFBQkIocG9zLCBxdWF0LCBtaW4sIG1heCkgewogICAgICAvLyBHZXQgZWFjaCBheGlzIG1heAogICAgICBtaW4uY29weShwb3MpOwogICAgICBtYXguY29weShwb3MpOwogICAgfQoKICB9CgogIC8qKgogICAqIEEgcGxhbmUsIGZhY2luZyBpbiB0aGUgWiBkaXJlY3Rpb24uIFRoZSBwbGFuZSBoYXMgaXRzIHN1cmZhY2UgYXQgej0wIGFuZCBldmVyeXRoaW5nIGJlbG93IHo9MCBpcyBhc3N1bWVkIHRvIGJlIHNvbGlkIHBsYW5lLiBUbyBtYWtlIHRoZSBwbGFuZSBmYWNlIGluIHNvbWUgb3RoZXIgZGlyZWN0aW9uIHRoYW4geiwgeW91IG11c3QgcHV0IGl0IGluc2lkZSBhIEJvZHkgYW5kIHJvdGF0ZSB0aGF0IGJvZHkuIFNlZSB0aGUgZGVtb3MuCiAgICogQGV4YW1wbGUKICAgKiAgICAgY29uc3QgcGxhbmVTaGFwZSA9IG5ldyBDQU5OT04uUGxhbmUoKQogICAqICAgICBjb25zdCBwbGFuZUJvZHkgPSBuZXcgQ0FOTk9OLkJvZHkoeyBtYXNzOiAwLCBzaGFwZTogIHBsYW5lU2hhcGUgfSkKICAgKiAgICAgcGxhbmVCb2R5LnF1YXRlcm5pb24uc2V0RnJvbUV1bGVyKC1NYXRoLlBJIC8gMiwgMCwgMCkgLy8gbWFrZSBpdCBmYWNlIHVwCiAgICogICAgIHdvcmxkLmFkZEJvZHkocGxhbmVCb2R5KQogICAqLwogIGNsYXNzIFBsYW5lIGV4dGVuZHMgU2hhcGUgewogICAgLyoqIHdvcmxkTm9ybWFsICovCgogICAgLyoqIHdvcmxkTm9ybWFsTmVlZHNVcGRhdGUgKi8KICAgIGNvbnN0cnVjdG9yKCkgewogICAgICBzdXBlcih7CiAgICAgICAgdHlwZTogU2hhcGUudHlwZXMuUExBTkUKICAgICAgfSk7IC8vIFdvcmxkIG9yaWVudGVkIG5vcm1hbAoKICAgICAgdGhpcy53b3JsZE5vcm1hbCA9IG5ldyBWZWMzKCk7CiAgICAgIHRoaXMud29ybGROb3JtYWxOZWVkc1VwZGF0ZSA9IHRydWU7CiAgICAgIHRoaXMuYm91bmRpbmdTcGhlcmVSYWRpdXMgPSBOdW1iZXIuTUFYX1ZBTFVFOwogICAgfQogICAgLyoqIGNvbXB1dGVXb3JsZE5vcm1hbCAqLwoKCiAgICBjb21wdXRlV29ybGROb3JtYWwocXVhdCkgewogICAgICBjb25zdCBuID0gdGhpcy53b3JsZE5vcm1hbDsKICAgICAgbi5zZXQoMCwgMCwgMSk7CiAgICAgIHF1YXQudm11bHQobiwgbik7CiAgICAgIHRoaXMud29ybGROb3JtYWxOZWVkc1VwZGF0ZSA9IGZhbHNlOwogICAgfQoKICAgIGNhbGN1bGF0ZUxvY2FsSW5lcnRpYShtYXNzLCB0YXJnZXQpIHsKICAgICAgaWYgKHRhcmdldCA9PT0gdm9pZCAwKSB7CiAgICAgICAgdGFyZ2V0ID0gbmV3IFZlYzMoKTsKICAgICAgfQoKICAgICAgcmV0dXJuIHRhcmdldDsKICAgIH0KCiAgICB2b2x1bWUoKSB7CiAgICAgIHJldHVybiAoLy8gVGhlIHBsYW5lIGlzIGluZmluaXRlLi4uCiAgICAgICAgTnVtYmVyLk1BWF9WQUxVRQogICAgICApOwogICAgfQoKICAgIGNhbGN1bGF0ZVdvcmxkQUFCQihwb3MsIHF1YXQsIG1pbiwgbWF4KSB7CiAgICAgIC8vIFRoZSBwbGFuZSBBQUJCIGlzIGluZmluaXRlLCBleGNlcHQgaWYgdGhlIG5vcm1hbCBpcyBwb2ludGluZyBhbG9uZyBhbnkgYXhpcwogICAgICB0ZW1wTm9ybWFsLnNldCgwLCAwLCAxKTsgLy8gRGVmYXVsdCBwbGFuZSBub3JtYWwgaXMgegoKICAgICAgcXVhdC52bXVsdCh0ZW1wTm9ybWFsLCB0ZW1wTm9ybWFsKTsKICAgICAgY29uc3QgbWF4VmFsID0gTnVtYmVyLk1BWF9WQUxVRTsKICAgICAgbWluLnNldCgtbWF4VmFsLCAtbWF4VmFsLCAtbWF4VmFsKTsKICAgICAgbWF4LnNldChtYXhWYWwsIG1heFZhbCwgbWF4VmFsKTsKCiAgICAgIGlmICh0ZW1wTm9ybWFsLnggPT09IDEpIHsKICAgICAgICBtYXgueCA9IHBvcy54OwogICAgICB9IGVsc2UgaWYgKHRlbXBOb3JtYWwueCA9PT0gLTEpIHsKICAgICAgICBtaW4ueCA9IHBvcy54OwogICAgICB9CgogICAgICBpZiAodGVtcE5vcm1hbC55ID09PSAxKSB7CiAgICAgICAgbWF4LnkgPSBwb3MueTsKICAgICAgfSBlbHNlIGlmICh0ZW1wTm9ybWFsLnkgPT09IC0xKSB7CiAgICAgICAgbWluLnkgPSBwb3MueTsKICAgICAgfQoKICAgICAgaWYgKHRlbXBOb3JtYWwueiA9PT0gMSkgewogICAgICAgIG1heC56ID0gcG9zLno7CiAgICAgIH0gZWxzZSBpZiAodGVtcE5vcm1hbC56ID09PSAtMSkgewogICAgICAgIG1pbi56ID0gcG9zLno7CiAgICAgIH0KICAgIH0KCiAgICB1cGRhdGVCb3VuZGluZ1NwaGVyZVJhZGl1cygpIHsKICAgICAgdGhpcy5ib3VuZGluZ1NwaGVyZVJhZGl1cyA9IE51bWJlci5NQVhfVkFMVUU7CiAgICB9CgogIH0KICBjb25zdCB0ZW1wTm9ybWFsID0gbmV3IFZlYzMoKTsKCiAgLyoqCiAgICogSGVpZ2h0ZmllbGQgc2hhcGUgY2xhc3MuIEhlaWdodCBkYXRhIGlzIGdpdmVuIGFzIGFuIGFycmF5LiBUaGVzZSBkYXRhIHBvaW50cyBhcmUgc3ByZWFkIG91dCBldmVubHkgd2l0aCBhIGdpdmVuIGRpc3RhbmNlLgogICAqIEB0b2RvIFNob3VsZCBiZSBwb3NzaWJsZSB0byB1c2UgYWxvbmcgYWxsIGF4ZXMsIG5vdCBqdXN0IHkKICAgKiBAdG9kbyBzaG91bGQgYmUgcG9zc2libGUgdG8gc2NhbGUgYWxvbmcgYWxsIGF4ZXMKICAgKiBAdG9kbyBSZWZhY3RvciBlbGVtZW50U2l6ZSB0byBlbGVtZW50U2l6ZVggYW5kIGVsZW1lbnRTaXplWQogICAqCiAgICogQGV4YW1wbGUKICAgKiAgICAgLy8gR2VuZXJhdGUgc29tZSBoZWlnaHQgZGF0YSAoeS12YWx1ZXMpLgogICAqICAgICBjb25zdCBkYXRhID0gW10KICAgKiAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDAwOyBpKyspIHsKICAgKiAgICAgICAgIGNvbnN0IHkgPSAwLjUgKiBNYXRoLmNvcygwLjIgKiBpKQogICAqICAgICAgICAgZGF0YS5wdXNoKHkpCiAgICogICAgIH0KICAgKgogICAqICAgICAvLyBDcmVhdGUgdGhlIGhlaWdodGZpZWxkIHNoYXBlCiAgICogICAgIGNvbnN0IGhlaWdodGZpZWxkU2hhcGUgPSBuZXcgQ0FOTk9OLkhlaWdodGZpZWxkKGRhdGEsIHsKICAgKiAgICAgICAgIGVsZW1lbnRTaXplOiAxIC8vIERpc3RhbmNlIGJldHdlZW4gdGhlIGRhdGEgcG9pbnRzIGluIFggYW5kIFkgZGlyZWN0aW9ucwogICAqICAgICB9KQogICAqICAgICBjb25zdCBoZWlnaHRmaWVsZEJvZHkgPSBuZXcgQ0FOTk9OLkJvZHkoeyBzaGFwZTogaGVpZ2h0ZmllbGRTaGFwZSB9KQogICAqICAgICB3b3JsZC5hZGRCb2R5KGhlaWdodGZpZWxkQm9keSkKICAgKi8KICBjbGFzcyBIZWlnaHRmaWVsZCBleHRlbmRzIFNoYXBlIHsKICAgIC8qKgogICAgICogQW4gYXJyYXkgb2YgbnVtYmVycywgb3IgaGVpZ2h0IHZhbHVlcywgdGhhdCBhcmUgc3ByZWFkIG91dCBhbG9uZyB0aGUgeCBheGlzLgogICAgICovCgogICAgLyoqCiAgICAgKiBNYXggdmFsdWUgb2YgdGhlIGRhdGEgcG9pbnRzIGluIHRoZSBkYXRhIGFycmF5LgogICAgICovCgogICAgLyoqCiAgICAgKiBNaW5pbXVtIHZhbHVlIG9mIHRoZSBkYXRhIHBvaW50cyBpbiB0aGUgZGF0YSBhcnJheS4KICAgICAqLwoKICAgIC8qKgogICAgICogV29ybGQgc3BhY2luZyBiZXR3ZWVuIHRoZSBkYXRhIHBvaW50cyBpbiBYIGFuZCBZIGRpcmVjdGlvbi4KICAgICAqIEB0b2RvIGVsZW1lbnRTaXplWCBhbmQgWQogICAgICogQGRlZmF1bHQgMQogICAgICovCgogICAgLyoqCiAgICAgKiBAZGVmYXVsdCB0cnVlCiAgICAgKi8KCiAgICAvKioKICAgICAqIEBwYXJhbSBkYXRhIEFuIGFycmF5IG9mIG51bWJlcnMsIG9yIGhlaWdodCB2YWx1ZXMsIHRoYXQgYXJlIHNwcmVhZCBvdXQgYWxvbmcgdGhlIHggYXhpcy4KICAgICAqLwogICAgY29uc3RydWN0b3IoZGF0YSwgb3B0aW9ucykgewogICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7CiAgICAgICAgb3B0aW9ucyA9IHt9OwogICAgICB9CgogICAgICBvcHRpb25zID0gVXRpbHMuZGVmYXVsdHMob3B0aW9ucywgewogICAgICAgIG1heFZhbHVlOiBudWxsLAogICAgICAgIG1pblZhbHVlOiBudWxsLAogICAgICAgIGVsZW1lbnRTaXplOiAxCiAgICAgIH0pOwogICAgICBzdXBlcih7CiAgICAgICAgdHlwZTogU2hhcGUudHlwZXMuSEVJR0hURklFTEQKICAgICAgfSk7CiAgICAgIHRoaXMuZGF0YSA9IGRhdGE7CiAgICAgIHRoaXMubWF4VmFsdWUgPSBvcHRpb25zLm1heFZhbHVlOwogICAgICB0aGlzLm1pblZhbHVlID0gb3B0aW9ucy5taW5WYWx1ZTsKICAgICAgdGhpcy5lbGVtZW50U2l6ZSA9IG9wdGlvbnMuZWxlbWVudFNpemU7CgogICAgICBpZiAob3B0aW9ucy5taW5WYWx1ZSA9PT0gbnVsbCkgewogICAgICAgIHRoaXMudXBkYXRlTWluVmFsdWUoKTsKICAgICAgfQoKICAgICAgaWYgKG9wdGlvbnMubWF4VmFsdWUgPT09IG51bGwpIHsKICAgICAgICB0aGlzLnVwZGF0ZU1heFZhbHVlKCk7CiAgICAgIH0KCiAgICAgIHRoaXMuY2FjaGVFbmFibGVkID0gdHJ1ZTsKICAgICAgdGhpcy5waWxsYXJDb252ZXggPSBuZXcgQ29udmV4UG9seWhlZHJvbigpOwogICAgICB0aGlzLnBpbGxhck9mZnNldCA9IG5ldyBWZWMzKCk7CiAgICAgIHRoaXMudXBkYXRlQm91bmRpbmdTcGhlcmVSYWRpdXMoKTsgLy8gImlfal9pc1VwcGVyIiA9PiB7IGNvbnZleDogLi4uLCBvZmZzZXQ6IC4uLiB9CiAgICAgIC8vIGZvciBleGFtcGxlOgogICAgICAvLyBfY2FjaGVkUGlsbGFyc1siMF8yXzEiXQoKICAgICAgdGhpcy5fY2FjaGVkUGlsbGFycyA9IHt9OwogICAgfQogICAgLyoqCiAgICAgKiBDYWxsIHdoZW5ldmVyIHlvdSBjaGFuZ2UgdGhlIGRhdGEgYXJyYXkuCiAgICAgKi8KCgogICAgdXBkYXRlKCkgewogICAgICB0aGlzLl9jYWNoZWRQaWxsYXJzID0ge307CiAgICB9CiAgICAvKioKICAgICAqIFVwZGF0ZSB0aGUgYG1pblZhbHVlYCBwcm9wZXJ0eQogICAgICovCgoKICAgIHVwZGF0ZU1pblZhbHVlKCkgewogICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhOwogICAgICBsZXQgbWluVmFsdWUgPSBkYXRhWzBdWzBdOwoKICAgICAgZm9yIChsZXQgaSA9IDA7IGkgIT09IGRhdGEubGVuZ3RoOyBpKyspIHsKICAgICAgICBmb3IgKGxldCBqID0gMDsgaiAhPT0gZGF0YVtpXS5sZW5ndGg7IGorKykgewogICAgICAgICAgY29uc3QgdiA9IGRhdGFbaV1bal07CgogICAgICAgICAgaWYgKHYgPCBtaW5WYWx1ZSkgewogICAgICAgICAgICBtaW5WYWx1ZSA9IHY7CiAgICAgICAgICB9CiAgICAgICAgfQogICAgICB9CgogICAgICB0aGlzLm1pblZhbHVlID0gbWluVmFsdWU7CiAgICB9CiAgICAvKioKICAgICAqIFVwZGF0ZSB0aGUgYG1heFZhbHVlYCBwcm9wZXJ0eQogICAgICovCgoKICAgIHVwZGF0ZU1heFZhbHVlKCkgewogICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhOwogICAgICBsZXQgbWF4VmFsdWUgPSBkYXRhWzBdWzBdOwoKICAgICAgZm9yIChsZXQgaSA9IDA7IGkgIT09IGRhdGEubGVuZ3RoOyBpKyspIHsKICAgICAgICBmb3IgKGxldCBqID0gMDsgaiAhPT0gZGF0YVtpXS5sZW5ndGg7IGorKykgewogICAgICAgICAgY29uc3QgdiA9IGRhdGFbaV1bal07CgogICAgICAgICAgaWYgKHYgPiBtYXhWYWx1ZSkgewogICAgICAgICAgICBtYXhWYWx1ZSA9IHY7CiAgICAgICAgICB9CiAgICAgICAgfQogICAgICB9CgogICAgICB0aGlzLm1heFZhbHVlID0gbWF4VmFsdWU7CiAgICB9CiAgICAvKioKICAgICAqIFNldCB0aGUgaGVpZ2h0IHZhbHVlIGF0IGFuIGluZGV4LiBEb24ndCBmb3JnZXQgdG8gdXBkYXRlIG1heFZhbHVlIGFuZCBtaW5WYWx1ZSBhZnRlciB5b3UncmUgZG9uZS4KICAgICAqLwoKCiAgICBzZXRIZWlnaHRWYWx1ZUF0SW5kZXgoeGksIHlpLCB2YWx1ZSkgewogICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhOwogICAgICBkYXRhW3hpXVt5aV0gPSB2YWx1ZTsgLy8gSW52YWxpZGF0ZSBjYWNoZQoKICAgICAgdGhpcy5jbGVhckNhY2hlZENvbnZleFRyaWFuZ2xlUGlsbGFyKHhpLCB5aSwgZmFsc2UpOwoKICAgICAgaWYgKHhpID4gMCkgewogICAgICAgIHRoaXMuY2xlYXJDYWNoZWRDb252ZXhUcmlhbmdsZVBpbGxhcih4aSAtIDEsIHlpLCB0cnVlKTsKICAgICAgICB0aGlzLmNsZWFyQ2FjaGVkQ29udmV4VHJpYW5nbGVQaWxsYXIoeGkgLSAxLCB5aSwgZmFsc2UpOwogICAgICB9CgogICAgICBpZiAoeWkgPiAwKSB7CiAgICAgICAgdGhpcy5jbGVhckNhY2hlZENvbnZleFRyaWFuZ2xlUGlsbGFyKHhpLCB5aSAtIDEsIHRydWUpOwogICAgICAgIHRoaXMuY2xlYXJDYWNoZWRDb252ZXhUcmlhbmdsZVBpbGxhcih4aSwgeWkgLSAxLCBmYWxzZSk7CiAgICAgIH0KCiAgICAgIGlmICh5aSA+IDAgJiYgeGkgPiAwKSB7CiAgICAgICAgdGhpcy5jbGVhckNhY2hlZENvbnZleFRyaWFuZ2xlUGlsbGFyKHhpIC0gMSwgeWkgLSAxLCB0cnVlKTsKICAgICAgfQogICAgfQogICAgLyoqCiAgICAgKiBHZXQgbWF4L21pbiBpbiBhIHJlY3RhbmdsZSBpbiB0aGUgbWF0cml4IGRhdGEKICAgICAqIEBwYXJhbSByZXN1bHQgQW4gYXJyYXkgdG8gc3RvcmUgdGhlIHJlc3VsdHMgaW4uCiAgICAgKiBAcmV0dXJuIFRoZSByZXN1bHQgYXJyYXksIGlmIGl0IHdhcyBwYXNzZWQgaW4uIE1pbmltdW0gd2lsbCBiZSBhdCBwb3NpdGlvbiAwIGFuZCBtYXggYXQgMS4KICAgICAqLwoKCiAgICBnZXRSZWN0TWluTWF4KGlNaW5YLCBpTWluWSwgaU1heFgsIGlNYXhZLCByZXN1bHQpIHsKICAgICAgaWYgKHJlc3VsdCA9PT0gdm9pZCAwKSB7CiAgICAgICAgcmVzdWx0ID0gW107CiAgICAgIH0KCiAgICAgIC8vIEdldCBtYXggYW5kIG1pbiBvZiB0aGUgZGF0YQogICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhOyAvLyBTZXQgZmlyc3QgdmFsdWUKCiAgICAgIGxldCBtYXggPSB0aGlzLm1pblZhbHVlOwoKICAgICAgZm9yIChsZXQgaSA9IGlNaW5YOyBpIDw9IGlNYXhYOyBpKyspIHsKICAgICAgICBmb3IgKGxldCBqID0gaU1pblk7IGogPD0gaU1heFk7IGorKykgewogICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZGF0YVtpXVtqXTsKCiAgICAgICAgICBpZiAoaGVpZ2h0ID4gbWF4KSB7CiAgICAgICAgICAgIG1heCA9IGhlaWdodDsKICAgICAgICAgIH0KICAgICAgICB9CiAgICAgIH0KCiAgICAgIHJlc3VsdFswXSA9IHRoaXMubWluVmFsdWU7CiAgICAgIHJlc3VsdFsxXSA9IG1heDsKICAgIH0KICAgIC8qKgogICAgICogR2V0IHRoZSBpbmRleCBvZiBhIGxvY2FsIHBvc2l0aW9uIG9uIHRoZSBoZWlnaHRmaWVsZC4gVGhlIGluZGV4ZXMgaW5kaWNhdGUgdGhlIHJlY3RhbmdsZXMsIHNvIGlmIHlvdXIgdGVycmFpbiBpcyBtYWRlIG9mIE4geCBOIGhlaWdodCBkYXRhIHBvaW50cywgeW91IHdpbGwgaGF2ZSByZWN0YW5nbGUgaW5kZXhlcyByYW5naW5nIGZyb20gMCB0byBOLTEuCiAgICAgKiBAcGFyYW0gcmVzdWx0IFR3by1lbGVtZW50IGFycmF5CiAgICAgKiBAcGFyYW0gY2xhbXAgSWYgdGhlIHBvc2l0aW9uIHNob3VsZCBiZSBjbGFtcGVkIHRvIHRoZSBoZWlnaHRmaWVsZCBlZGdlLgogICAgICovCgoKICAgIGdldEluZGV4T2ZQb3NpdGlvbih4LCB5LCByZXN1bHQsIGNsYW1wKSB7CiAgICAgIC8vIEdldCB0aGUgaW5kZXggb2YgdGhlIGRhdGEgcG9pbnRzIHRvIHRlc3QgYWdhaW5zdAogICAgICBjb25zdCB3ID0gdGhpcy5lbGVtZW50U2l6ZTsKICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTsKICAgICAgbGV0IHhpID0gTWF0aC5mbG9vcih4IC8gdyk7CiAgICAgIGxldCB5aSA9IE1hdGguZmxvb3IoeSAvIHcpOwogICAgICByZXN1bHRbMF0gPSB4aTsKICAgICAgcmVzdWx0WzFdID0geWk7CgogICAgICBpZiAoY2xhbXApIHsKICAgICAgICAvLyBDbGFtcCBpbmRleCB0byBlZGdlcwogICAgICAgIGlmICh4aSA8IDApIHsKICAgICAgICAgIHhpID0gMDsKICAgICAgICB9CgogICAgICAgIGlmICh5aSA8IDApIHsKICAgICAgICAgIHlpID0gMDsKICAgICAgICB9CgogICAgICAgIGlmICh4aSA+PSBkYXRhLmxlbmd0aCAtIDEpIHsKICAgICAgICAgIHhpID0gZGF0YS5sZW5ndGggLSAxOwogICAgICAgIH0KCiAgICAgICAgaWYgKHlpID49IGRhdGFbMF0ubGVuZ3RoIC0gMSkgewogICAgICAgICAgeWkgPSBkYXRhWzBdLmxlbmd0aCAtIDE7CiAgICAgICAgfQogICAgICB9IC8vIEJhaWwgb3V0IGlmIHdlIGFyZSBvdXQgb2YgdGhlIHRlcnJhaW4KCgogICAgICBpZiAoeGkgPCAwIHx8IHlpIDwgMCB8fCB4aSA+PSBkYXRhLmxlbmd0aCAtIDEgfHwgeWkgPj0gZGF0YVswXS5sZW5ndGggLSAxKSB7CiAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgICB9CgogICAgICByZXR1cm4gdHJ1ZTsKICAgIH0KCiAgICBnZXRUcmlhbmdsZUF0KHgsIHksIGVkZ2VDbGFtcCwgYSwgYiwgYykgewogICAgICBjb25zdCBpZHggPSBnZXRIZWlnaHRBdF9pZHg7CiAgICAgIHRoaXMuZ2V0SW5kZXhPZlBvc2l0aW9uKHgsIHksIGlkeCwgZWRnZUNsYW1wKTsKICAgICAgbGV0IHhpID0gaWR4WzBdOwogICAgICBsZXQgeWkgPSBpZHhbMV07CiAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7CgogICAgICBpZiAoZWRnZUNsYW1wKSB7CiAgICAgICAgeGkgPSBNYXRoLm1pbihkYXRhLmxlbmd0aCAtIDIsIE1hdGgubWF4KDAsIHhpKSk7CiAgICAgICAgeWkgPSBNYXRoLm1pbihkYXRhWzBdLmxlbmd0aCAtIDIsIE1hdGgubWF4KDAsIHlpKSk7CiAgICAgIH0KCiAgICAgIGNvbnN0IGVsZW1lbnRTaXplID0gdGhpcy5lbGVtZW50U2l6ZTsKICAgICAgY29uc3QgbG93ZXJEaXN0MiA9ICh4IC8gZWxlbWVudFNpemUgLSB4aSkgKiogMiArICh5IC8gZWxlbWVudFNpemUgLSB5aSkgKiogMjsKICAgICAgY29uc3QgdXBwZXJEaXN0MiA9ICh4IC8gZWxlbWVudFNpemUgLSAoeGkgKyAxKSkgKiogMiArICh5IC8gZWxlbWVudFNpemUgLSAoeWkgKyAxKSkgKiogMjsKICAgICAgY29uc3QgdXBwZXIgPSBsb3dlckRpc3QyID4gdXBwZXJEaXN0MjsKICAgICAgdGhpcy5nZXRUcmlhbmdsZSh4aSwgeWksIHVwcGVyLCBhLCBiLCBjKTsKICAgICAgcmV0dXJuIHVwcGVyOwogICAgfQoKICAgIGdldE5vcm1hbEF0KHgsIHksIGVkZ2VDbGFtcCwgcmVzdWx0KSB7CiAgICAgIGNvbnN0IGEgPSBnZXROb3JtYWxBdF9hOwogICAgICBjb25zdCBiID0gZ2V0Tm9ybWFsQXRfYjsKICAgICAgY29uc3QgYyA9IGdldE5vcm1hbEF0X2M7CiAgICAgIGNvbnN0IGUwID0gZ2V0Tm9ybWFsQXRfZTA7CiAgICAgIGNvbnN0IGUxID0gZ2V0Tm9ybWFsQXRfZTE7CiAgICAgIHRoaXMuZ2V0VHJpYW5nbGVBdCh4LCB5LCBlZGdlQ2xhbXAsIGEsIGIsIGMpOwogICAgICBiLnZzdWIoYSwgZTApOwogICAgICBjLnZzdWIoYSwgZTEpOwogICAgICBlMC5jcm9zcyhlMSwgcmVzdWx0KTsKICAgICAgcmVzdWx0Lm5vcm1hbGl6ZSgpOwogICAgfQogICAgLyoqCiAgICAgKiBHZXQgYW4gQUFCQiBvZiBhIHNxdWFyZSBpbiB0aGUgaGVpZ2h0ZmllbGQKICAgICAqIEBwYXJhbSB4aQogICAgICogQHBhcmFtIHlpCiAgICAgKiBAcGFyYW0gcmVzdWx0CiAgICAgKi8KCgogICAgZ2V0QWFiYkF0SW5kZXgoeGksIHlpLCBfcmVmKSB7CiAgICAgIGxldCB7CiAgICAgICAgbG93ZXJCb3VuZCwKICAgICAgICB1cHBlckJvdW5kCiAgICAgIH0gPSBfcmVmOwogICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhOwogICAgICBjb25zdCBlbGVtZW50U2l6ZSA9IHRoaXMuZWxlbWVudFNpemU7CiAgICAgIGxvd2VyQm91bmQuc2V0KHhpICogZWxlbWVudFNpemUsIHlpICogZWxlbWVudFNpemUsIGRhdGFbeGldW3lpXSk7CiAgICAgIHVwcGVyQm91bmQuc2V0KCh4aSArIDEpICogZWxlbWVudFNpemUsICh5aSArIDEpICogZWxlbWVudFNpemUsIGRhdGFbeGkgKyAxXVt5aSArIDFdKTsKICAgIH0KICAgIC8qKgogICAgICogR2V0IHRoZSBoZWlnaHQgaW4gdGhlIGhlaWdodGZpZWxkIGF0IGEgZ2l2ZW4gcG9zaXRpb24KICAgICAqLwoKCiAgICBnZXRIZWlnaHRBdCh4LCB5LCBlZGdlQ2xhbXApIHsKICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTsKICAgICAgY29uc3QgYSA9IGdldEhlaWdodEF0X2E7CiAgICAgIGNvbnN0IGIgPSBnZXRIZWlnaHRBdF9iOwogICAgICBjb25zdCBjID0gZ2V0SGVpZ2h0QXRfYzsKICAgICAgY29uc3QgaWR4ID0gZ2V0SGVpZ2h0QXRfaWR4OwogICAgICB0aGlzLmdldEluZGV4T2ZQb3NpdGlvbih4LCB5LCBpZHgsIGVkZ2VDbGFtcCk7CiAgICAgIGxldCB4aSA9IGlkeFswXTsKICAgICAgbGV0IHlpID0gaWR4WzFdOwoKICAgICAgaWYgKGVkZ2VDbGFtcCkgewogICAgICAgIHhpID0gTWF0aC5taW4oZGF0YS5sZW5ndGggLSAyLCBNYXRoLm1heCgwLCB4aSkpOwogICAgICAgIHlpID0gTWF0aC5taW4oZGF0YVswXS5sZW5ndGggLSAyLCBNYXRoLm1heCgwLCB5aSkpOwogICAgICB9CgogICAgICBjb25zdCB1cHBlciA9IHRoaXMuZ2V0VHJpYW5nbGVBdCh4LCB5LCBlZGdlQ2xhbXAsIGEsIGIsIGMpOwogICAgICBiYXJ5Y2VudHJpY1dlaWdodHMoeCwgeSwgYS54LCBhLnksIGIueCwgYi55LCBjLngsIGMueSwgZ2V0SGVpZ2h0QXRfd2VpZ2h0cyk7CiAgICAgIGNvbnN0IHcgPSBnZXRIZWlnaHRBdF93ZWlnaHRzOwoKICAgICAgaWYgKHVwcGVyKSB7CiAgICAgICAgLy8gVG9wIHRyaWFuZ2xlIHZlcnRzCiAgICAgICAgcmV0dXJuIGRhdGFbeGkgKyAxXVt5aSArIDFdICogdy54ICsgZGF0YVt4aV1beWkgKyAxXSAqIHcueSArIGRhdGFbeGkgKyAxXVt5aV0gKiB3Lno7CiAgICAgIH0gZWxzZSB7CiAgICAgICAgLy8gVG9wIHRyaWFuZ2xlIHZlcnRzCiAgICAgICAgcmV0dXJuIGRhdGFbeGldW3lpXSAqIHcueCArIGRhdGFbeGkgKyAxXVt5aV0gKiB3LnkgKyBkYXRhW3hpXVt5aSArIDFdICogdy56OwogICAgICB9CiAgICB9CgogICAgZ2V0Q2FjaGVDb252ZXhUcmlhbmdsZVBpbGxhcktleSh4aSwgeWksIGdldFVwcGVyVHJpYW5nbGUpIHsKICAgICAgcmV0dXJuIGAke3hpfV8ke3lpfV8ke2dldFVwcGVyVHJpYW5nbGUgPyAxIDogMH1gOwogICAgfQoKICAgIGdldENhY2hlZENvbnZleFRyaWFuZ2xlUGlsbGFyKHhpLCB5aSwgZ2V0VXBwZXJUcmlhbmdsZSkgewogICAgICByZXR1cm4gdGhpcy5fY2FjaGVkUGlsbGFyc1t0aGlzLmdldENhY2hlQ29udmV4VHJpYW5nbGVQaWxsYXJLZXkoeGksIHlpLCBnZXRVcHBlclRyaWFuZ2xlKV07CiAgICB9CgogICAgc2V0Q2FjaGVkQ29udmV4VHJpYW5nbGVQaWxsYXIoeGksIHlpLCBnZXRVcHBlclRyaWFuZ2xlLCBjb252ZXgsIG9mZnNldCkgewogICAgICB0aGlzLl9jYWNoZWRQaWxsYXJzW3RoaXMuZ2V0Q2FjaGVDb252ZXhUcmlhbmdsZVBpbGxhcktleSh4aSwgeWksIGdldFVwcGVyVHJpYW5nbGUpXSA9IHsKICAgICAgICBjb252ZXgsCiAgICAgICAgb2Zmc2V0CiAgICAgIH07CiAgICB9CgogICAgY2xlYXJDYWNoZWRDb252ZXhUcmlhbmdsZVBpbGxhcih4aSwgeWksIGdldFVwcGVyVHJpYW5nbGUpIHsKICAgICAgZGVsZXRlIHRoaXMuX2NhY2hlZFBpbGxhcnNbdGhpcy5nZXRDYWNoZUNvbnZleFRyaWFuZ2xlUGlsbGFyS2V5KHhpLCB5aSwgZ2V0VXBwZXJUcmlhbmdsZSldOwogICAgfQogICAgLyoqCiAgICAgKiBHZXQgYSB0cmlhbmdsZSBmcm9tIHRoZSBoZWlnaHRmaWVsZAogICAgICovCgoKICAgIGdldFRyaWFuZ2xlKHhpLCB5aSwgdXBwZXIsIGEsIGIsIGMpIHsKICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTsKICAgICAgY29uc3QgZWxlbWVudFNpemUgPSB0aGlzLmVsZW1lbnRTaXplOwoKICAgICAgaWYgKHVwcGVyKSB7CiAgICAgICAgLy8gVG9wIHRyaWFuZ2xlIHZlcnRzCiAgICAgICAgYS5zZXQoKHhpICsgMSkgKiBlbGVtZW50U2l6ZSwgKHlpICsgMSkgKiBlbGVtZW50U2l6ZSwgZGF0YVt4aSArIDFdW3lpICsgMV0pOwogICAgICAgIGIuc2V0KHhpICogZWxlbWVudFNpemUsICh5aSArIDEpICogZWxlbWVudFNpemUsIGRhdGFbeGldW3lpICsgMV0pOwogICAgICAgIGMuc2V0KCh4aSArIDEpICogZWxlbWVudFNpemUsIHlpICogZWxlbWVudFNpemUsIGRhdGFbeGkgKyAxXVt5aV0pOwogICAgICB9IGVsc2UgewogICAgICAgIC8vIFRvcCB0cmlhbmdsZSB2ZXJ0cwogICAgICAgIGEuc2V0KHhpICogZWxlbWVudFNpemUsIHlpICogZWxlbWVudFNpemUsIGRhdGFbeGldW3lpXSk7CiAgICAgICAgYi5zZXQoKHhpICsgMSkgKiBlbGVtZW50U2l6ZSwgeWkgKiBlbGVtZW50U2l6ZSwgZGF0YVt4aSArIDFdW3lpXSk7CiAgICAgICAgYy5zZXQoeGkgKiBlbGVtZW50U2l6ZSwgKHlpICsgMSkgKiBlbGVtZW50U2l6ZSwgZGF0YVt4aV1beWkgKyAxXSk7CiAgICAgIH0KICAgIH0KICAgIC8qKgogICAgICogR2V0IGEgdHJpYW5nbGUgaW4gdGhlIHRlcnJhaW4gaW4gdGhlIGZvcm0gb2YgYSB0cmlhbmd1bGFyIGNvbnZleCBzaGFwZS4KICAgICAqLwoKCiAgICBnZXRDb252ZXhUcmlhbmdsZVBpbGxhcih4aSwgeWksIGdldFVwcGVyVHJpYW5nbGUpIHsKICAgICAgbGV0IHJlc3VsdCA9IHRoaXMucGlsbGFyQ29udmV4OwogICAgICBsZXQgb2Zmc2V0UmVzdWx0ID0gdGhpcy5waWxsYXJPZmZzZXQ7CgogICAgICBpZiAodGhpcy5jYWNoZUVuYWJsZWQpIHsKICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5nZXRDYWNoZWRDb252ZXhUcmlhbmdsZVBpbGxhcih4aSwgeWksIGdldFVwcGVyVHJpYW5nbGUpOwoKICAgICAgICBpZiAoZGF0YSkgewogICAgICAgICAgdGhpcy5waWxsYXJDb252ZXggPSBkYXRhLmNvbnZleDsKICAgICAgICAgIHRoaXMucGlsbGFyT2Zmc2V0ID0gZGF0YS5vZmZzZXQ7CiAgICAgICAgICByZXR1cm47CiAgICAgICAgfQoKICAgICAgICByZXN1bHQgPSBuZXcgQ29udmV4UG9seWhlZHJvbigpOwogICAgICAgIG9mZnNldFJlc3VsdCA9IG5ldyBWZWMzKCk7CiAgICAgICAgdGhpcy5waWxsYXJDb252ZXggPSByZXN1bHQ7CiAgICAgICAgdGhpcy5waWxsYXJPZmZzZXQgPSBvZmZzZXRSZXN1bHQ7CiAgICAgIH0KCiAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7CiAgICAgIGNvbnN0IGVsZW1lbnRTaXplID0gdGhpcy5lbGVtZW50U2l6ZTsKICAgICAgY29uc3QgZmFjZXMgPSByZXN1bHQuZmFjZXM7IC8vIFJldXNlIHZlcnRzIGlmIHBvc3NpYmxlCgogICAgICByZXN1bHQudmVydGljZXMubGVuZ3RoID0gNjsKCiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7CiAgICAgICAgaWYgKCFyZXN1bHQudmVydGljZXNbaV0pIHsKICAgICAgICAgIHJlc3VsdC52ZXJ0aWNlc1tpXSA9IG5ldyBWZWMzKCk7CiAgICAgICAgfQogICAgICB9IC8vIFJldXNlIGZhY2VzIGlmIHBvc3NpYmxlCgoKICAgICAgZmFjZXMubGVuZ3RoID0gNTsKCiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7CiAgICAgICAgaWYgKCFmYWNlc1tpXSkgewogICAgICAgICAgZmFjZXNbaV0gPSBbXTsKICAgICAgICB9CiAgICAgIH0KCiAgICAgIGNvbnN0IHZlcnRzID0gcmVzdWx0LnZlcnRpY2VzOwogICAgICBjb25zdCBoID0gKE1hdGgubWluKGRhdGFbeGldW3lpXSwgZGF0YVt4aSArIDFdW3lpXSwgZGF0YVt4aV1beWkgKyAxXSwgZGF0YVt4aSArIDFdW3lpICsgMV0pIC0gdGhpcy5taW5WYWx1ZSkgLyAyICsgdGhpcy5taW5WYWx1ZTsKCiAgICAgIGlmICghZ2V0VXBwZXJUcmlhbmdsZSkgewogICAgICAgIC8vIENlbnRlciBvZiB0aGUgdHJpYW5nbGUgcGlsbGFyIC0gYWxsIHBvbHlnb25zIGFyZSBnaXZlbiByZWxhdGl2ZSB0byB0aGlzIG9uZQogICAgICAgIG9mZnNldFJlc3VsdC5zZXQoKHhpICsgMC4yNSkgKiBlbGVtZW50U2l6ZSwgLy8gc29ydCBvZiBjZW50ZXIgb2YgYSB0cmlhbmdsZQogICAgICAgICh5aSArIDAuMjUpICogZWxlbWVudFNpemUsIGggLy8gdmVydGljYWwgY2VudGVyCiAgICAgICAgKTsgLy8gVG9wIHRyaWFuZ2xlIHZlcnRzCgogICAgICAgIHZlcnRzWzBdLnNldCgtMC4yNSAqIGVsZW1lbnRTaXplLCAtMC4yNSAqIGVsZW1lbnRTaXplLCBkYXRhW3hpXVt5aV0gLSBoKTsKICAgICAgICB2ZXJ0c1sxXS5zZXQoMC43NSAqIGVsZW1lbnRTaXplLCAtMC4yNSAqIGVsZW1lbnRTaXplLCBkYXRhW3hpICsgMV1beWldIC0gaCk7CiAgICAgICAgdmVydHNbMl0uc2V0KC0wLjI1ICogZWxlbWVudFNpemUsIDAuNzUgKiBlbGVtZW50U2l6ZSwgZGF0YVt4aV1beWkgKyAxXSAtIGgpOyAvLyBib3R0b20gdHJpYW5nbGUgdmVydHMKCiAgICAgICAgdmVydHNbM10uc2V0KC0wLjI1ICogZWxlbWVudFNpemUsIC0wLjI1ICogZWxlbWVudFNpemUsIC1NYXRoLmFicyhoKSAtIDEpOwogICAgICAgIHZlcnRzWzRdLnNldCgwLjc1ICogZWxlbWVudFNpemUsIC0wLjI1ICogZWxlbWVudFNpemUsIC1NYXRoLmFicyhoKSAtIDEpOwogICAgICAgIHZlcnRzWzVdLnNldCgtMC4yNSAqIGVsZW1lbnRTaXplLCAwLjc1ICogZWxlbWVudFNpemUsIC1NYXRoLmFicyhoKSAtIDEpOyAvLyB0b3AgdHJpYW5nbGUKCiAgICAgICAgZmFjZXNbMF1bMF0gPSAwOwogICAgICAgIGZhY2VzWzBdWzFdID0gMTsKICAgICAgICBmYWNlc1swXVsyXSA9IDI7IC8vIGJvdHRvbSB0cmlhbmdsZQoKICAgICAgICBmYWNlc1sxXVswXSA9IDU7CiAgICAgICAgZmFjZXNbMV1bMV0gPSA0OwogICAgICAgIGZhY2VzWzFdWzJdID0gMzsgLy8gLXggZmFjaW5nIHF1YWQKCiAgICAgICAgZmFjZXNbMl1bMF0gPSAwOwogICAgICAgIGZhY2VzWzJdWzFdID0gMjsKICAgICAgICBmYWNlc1syXVsyXSA9IDU7CiAgICAgICAgZmFjZXNbMl1bM10gPSAzOyAvLyAteSBmYWNpbmcgcXVhZAoKICAgICAgICBmYWNlc1szXVswXSA9IDE7CiAgICAgICAgZmFjZXNbM11bMV0gPSAwOwogICAgICAgIGZhY2VzWzNdWzJdID0gMzsKICAgICAgICBmYWNlc1szXVszXSA9IDQ7IC8vICt4eSBmYWNpbmcgcXVhZAoKICAgICAgICBmYWNlc1s0XVswXSA9IDQ7CiAgICAgICAgZmFjZXNbNF1bMV0gPSA1OwogICAgICAgIGZhY2VzWzRdWzJdID0gMjsKICAgICAgICBmYWNlc1s0XVszXSA9IDE7CiAgICAgIH0gZWxzZSB7CiAgICAgICAgLy8gQ2VudGVyIG9mIHRoZSB0cmlhbmdsZSBwaWxsYXIgLSBhbGwgcG9seWdvbnMgYXJlIGdpdmVuIHJlbGF0aXZlIHRvIHRoaXMgb25lCiAgICAgICAgb2Zmc2V0UmVzdWx0LnNldCgoeGkgKyAwLjc1KSAqIGVsZW1lbnRTaXplLCAvLyBzb3J0IG9mIGNlbnRlciBvZiBhIHRyaWFuZ2xlCiAgICAgICAgKHlpICsgMC43NSkgKiBlbGVtZW50U2l6ZSwgaCAvLyB2ZXJ0aWNhbCBjZW50ZXIKICAgICAgICApOyAvLyBUb3AgdHJpYW5nbGUgdmVydHMKCiAgICAgICAgdmVydHNbMF0uc2V0KDAuMjUgKiBlbGVtZW50U2l6ZSwgMC4yNSAqIGVsZW1lbnRTaXplLCBkYXRhW3hpICsgMV1beWkgKyAxXSAtIGgpOwogICAgICAgIHZlcnRzWzFdLnNldCgtMC43NSAqIGVsZW1lbnRTaXplLCAwLjI1ICogZWxlbWVudFNpemUsIGRhdGFbeGldW3lpICsgMV0gLSBoKTsKICAgICAgICB2ZXJ0c1syXS5zZXQoMC4yNSAqIGVsZW1lbnRTaXplLCAtMC43NSAqIGVsZW1lbnRTaXplLCBkYXRhW3hpICsgMV1beWldIC0gaCk7IC8vIGJvdHRvbSB0cmlhbmdsZSB2ZXJ0cwoKICAgICAgICB2ZXJ0c1szXS5zZXQoMC4yNSAqIGVsZW1lbnRTaXplLCAwLjI1ICogZWxlbWVudFNpemUsIC1NYXRoLmFicyhoKSAtIDEpOwogICAgICAgIHZlcnRzWzRdLnNldCgtMC43NSAqIGVsZW1lbnRTaXplLCAwLjI1ICogZWxlbWVudFNpemUsIC1NYXRoLmFicyhoKSAtIDEpOwogICAgICAgIHZlcnRzWzVdLnNldCgwLjI1ICogZWxlbWVudFNpemUsIC0wLjc1ICogZWxlbWVudFNpemUsIC1NYXRoLmFicyhoKSAtIDEpOyAvLyBUb3AgdHJpYW5nbGUKCiAgICAgICAgZmFjZXNbMF1bMF0gPSAwOwogICAgICAgIGZhY2VzWzBdWzFdID0gMTsKICAgICAgICBmYWNlc1swXVsyXSA9IDI7IC8vIGJvdHRvbSB0cmlhbmdsZQoKICAgICAgICBmYWNlc1sxXVswXSA9IDU7CiAgICAgICAgZmFjZXNbMV1bMV0gPSA0OwogICAgICAgIGZhY2VzWzFdWzJdID0gMzsgLy8gK3ggZmFjaW5nIHF1YWQKCiAgICAgICAgZmFjZXNbMl1bMF0gPSAyOwogICAgICAgIGZhY2VzWzJdWzFdID0gNTsKICAgICAgICBmYWNlc1syXVsyXSA9IDM7CiAgICAgICAgZmFjZXNbMl1bM10gPSAwOyAvLyAreSBmYWNpbmcgcXVhZAoKICAgICAgICBmYWNlc1szXVswXSA9IDM7CiAgICAgICAgZmFjZXNbM11bMV0gPSA0OwogICAgICAgIGZhY2VzWzNdWzJdID0gMTsKICAgICAgICBmYWNlc1szXVszXSA9IDA7IC8vIC14eSBmYWNpbmcgcXVhZAoKICAgICAgICBmYWNlc1s0XVswXSA9IDE7CiAgICAgICAgZmFjZXNbNF1bMV0gPSA0OwogICAgICAgIGZhY2VzWzRdWzJdID0gNTsKICAgICAgICBmYWNlc1s0XVszXSA9IDI7CiAgICAgIH0KCiAgICAgIHJlc3VsdC5jb21wdXRlTm9ybWFscygpOwogICAgICByZXN1bHQuY29tcHV0ZUVkZ2VzKCk7CiAgICAgIHJlc3VsdC51cGRhdGVCb3VuZGluZ1NwaGVyZVJhZGl1cygpOwogICAgICB0aGlzLnNldENhY2hlZENvbnZleFRyaWFuZ2xlUGlsbGFyKHhpLCB5aSwgZ2V0VXBwZXJUcmlhbmdsZSwgcmVzdWx0LCBvZmZzZXRSZXN1bHQpOwogICAgfQoKICAgIGNhbGN1bGF0ZUxvY2FsSW5lcnRpYShtYXNzLCB0YXJnZXQpIHsKICAgICAgaWYgKHRhcmdldCA9PT0gdm9pZCAwKSB7CiAgICAgICAgdGFyZ2V0ID0gbmV3IFZlYzMoKTsKICAgICAgfQoKICAgICAgdGFyZ2V0LnNldCgwLCAwLCAwKTsKICAgICAgcmV0dXJuIHRhcmdldDsKICAgIH0KCiAgICB2b2x1bWUoKSB7CiAgICAgIHJldHVybiAoLy8gVGhlIHRlcnJhaW4gaXMgaW5maW5pdGUKICAgICAgICBOdW1iZXIuTUFYX1ZBTFVFCiAgICAgICk7CiAgICB9CgogICAgY2FsY3VsYXRlV29ybGRBQUJCKHBvcywgcXVhdCwgbWluLCBtYXgpIHsKICAgICAgLyoqIEBUT0RPIGRvIGl0IHByb3Blcmx5ICovCiAgICAgIG1pbi5zZXQoLU51bWJlci5NQVhfVkFMVUUsIC1OdW1iZXIuTUFYX1ZBTFVFLCAtTnVtYmVyLk1BWF9WQUxVRSk7CiAgICAgIG1heC5zZXQoTnVtYmVyLk1BWF9WQUxVRSwgTnVtYmVyLk1BWF9WQUxVRSwgTnVtYmVyLk1BWF9WQUxVRSk7CiAgICB9CgogICAgdXBkYXRlQm91bmRpbmdTcGhlcmVSYWRpdXMoKSB7CiAgICAgIC8vIFVzZSB0aGUgYm91bmRpbmcgYm94IG9mIHRoZSBtaW4vbWF4IHZhbHVlcwogICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhOwogICAgICBjb25zdCBzID0gdGhpcy5lbGVtZW50U2l6ZTsKICAgICAgdGhpcy5ib3VuZGluZ1NwaGVyZVJhZGl1cyA9IG5ldyBWZWMzKGRhdGEubGVuZ3RoICogcywgZGF0YVswXS5sZW5ndGggKiBzLCBNYXRoLm1heChNYXRoLmFicyh0aGlzLm1heFZhbHVlKSwgTWF0aC5hYnModGhpcy5taW5WYWx1ZSkpKS5sZW5ndGgoKTsKICAgIH0KICAgIC8qKgogICAgICogU2V0cyB0aGUgaGVpZ2h0IHZhbHVlcyBmcm9tIGFuIGltYWdlLiBDdXJyZW50bHkgb25seSBzdXBwb3J0ZWQgaW4gYnJvd3Nlci4KICAgICAqLwoKCiAgICBzZXRIZWlnaHRzRnJvbUltYWdlKGltYWdlLCBzY2FsZSkgewogICAgICBjb25zdCB7CiAgICAgICAgeCwKICAgICAgICB6LAogICAgICAgIHkKICAgICAgfSA9IHNjYWxlOwogICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTsKICAgICAgY2FudmFzLndpZHRoID0gaW1hZ2Uud2lkdGg7CiAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbWFnZS5oZWlnaHQ7CiAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTsKICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApOwogICAgICBjb25zdCBpbWFnZURhdGEgPSBjb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0KTsKICAgICAgY29uc3QgbWF0cml4ID0gdGhpcy5kYXRhOwogICAgICBtYXRyaXgubGVuZ3RoID0gMDsKICAgICAgdGhpcy5lbGVtZW50U2l6ZSA9IE1hdGguYWJzKHgpIC8gaW1hZ2VEYXRhLndpZHRoOwoKICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZURhdGEuaGVpZ2h0OyBpKyspIHsKICAgICAgICBjb25zdCByb3cgPSBbXTsKCiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBpbWFnZURhdGEud2lkdGg7IGorKykgewogICAgICAgICAgY29uc3QgYSA9IGltYWdlRGF0YS5kYXRhWyhpICogaW1hZ2VEYXRhLmhlaWdodCArIGopICogNF07CiAgICAgICAgICBjb25zdCBiID0gaW1hZ2VEYXRhLmRhdGFbKGkgKiBpbWFnZURhdGEuaGVpZ2h0ICsgaikgKiA0ICsgMV07CiAgICAgICAgICBjb25zdCBjID0gaW1hZ2VEYXRhLmRhdGFbKGkgKiBpbWFnZURhdGEuaGVpZ2h0ICsgaikgKiA0ICsgMl07CiAgICAgICAgICBjb25zdCBoZWlnaHQgPSAoYSArIGIgKyBjKSAvIDQgLyAyNTUgKiB6OwoKICAgICAgICAgIGlmICh4IDwgMCkgewogICAgICAgICAgICByb3cucHVzaChoZWlnaHQpOwogICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgcm93LnVuc2hpZnQoaGVpZ2h0KTsKICAgICAgICAgIH0KICAgICAgICB9CgogICAgICAgIGlmICh5IDwgMCkgewogICAgICAgICAgbWF0cml4LnVuc2hpZnQocm93KTsKICAgICAgICB9IGVsc2UgewogICAgICAgICAgbWF0cml4LnB1c2gocm93KTsKICAgICAgICB9CiAgICAgIH0KCiAgICAgIHRoaXMudXBkYXRlTWF4VmFsdWUoKTsKICAgICAgdGhpcy51cGRhdGVNaW5WYWx1ZSgpOwogICAgICB0aGlzLnVwZGF0ZSgpOwogICAgfQoKICB9CiAgY29uc3QgZ2V0SGVpZ2h0QXRfaWR4ID0gW107CiAgY29uc3QgZ2V0SGVpZ2h0QXRfd2VpZ2h0cyA9IG5ldyBWZWMzKCk7CiAgY29uc3QgZ2V0SGVpZ2h0QXRfYSA9IG5ldyBWZWMzKCk7CiAgY29uc3QgZ2V0SGVpZ2h0QXRfYiA9IG5ldyBWZWMzKCk7CiAgY29uc3QgZ2V0SGVpZ2h0QXRfYyA9IG5ldyBWZWMzKCk7CiAgY29uc3QgZ2V0Tm9ybWFsQXRfYSA9IG5ldyBWZWMzKCk7CiAgY29uc3QgZ2V0Tm9ybWFsQXRfYiA9IG5ldyBWZWMzKCk7CiAgY29uc3QgZ2V0Tm9ybWFsQXRfYyA9IG5ldyBWZWMzKCk7CiAgY29uc3QgZ2V0Tm9ybWFsQXRfZTAgPSBuZXcgVmVjMygpOwogIGNvbnN0IGdldE5vcm1hbEF0X2UxID0gbmV3IFZlYzMoKTsgLy8gZnJvbSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CYXJ5Y2VudHJpY19jb29yZGluYXRlX3N5c3RlbQoKICBmdW5jdGlvbiBiYXJ5Y2VudHJpY1dlaWdodHMoeCwgeSwgYXgsIGF5LCBieCwgYnksIGN4LCBjeSwgcmVzdWx0KSB7CiAgICByZXN1bHQueCA9ICgoYnkgLSBjeSkgKiAoeCAtIGN4KSArIChjeCAtIGJ4KSAqICh5IC0gY3kpKSAvICgoYnkgLSBjeSkgKiAoYXggLSBjeCkgKyAoY3ggLSBieCkgKiAoYXkgLSBjeSkpOwogICAgcmVzdWx0LnkgPSAoKGN5IC0gYXkpICogKHggLSBjeCkgKyAoYXggLSBjeCkgKiAoeSAtIGN5KSkgLyAoKGJ5IC0gY3kpICogKGF4IC0gY3gpICsgKGN4IC0gYngpICogKGF5IC0gY3kpKTsKICAgIHJlc3VsdC56ID0gMSAtIHJlc3VsdC54IC0gcmVzdWx0Lnk7CiAgfQoKICAvKioKICAgKiBPY3RyZWVOb2RlCiAgICovCiAgY2xhc3MgT2N0cmVlTm9kZSB7CiAgICAvKiogVGhlIHJvb3Qgbm9kZSAqLwoKICAgIC8qKiBCb3VuZGFyeSBvZiB0aGlzIG5vZGUgKi8KCiAgICAvKiogQ29udGFpbmVkIGRhdGEgYXQgdGhlIGN1cnJlbnQgbm9kZSBsZXZlbCAqLwoKICAgIC8qKiBDaGlsZHJlbiB0byB0aGlzIG5vZGUgKi8KICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHsKICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgewogICAgICAgIG9wdGlvbnMgPSB7fTsKICAgICAgfQoKICAgICAgdGhpcy5yb290ID0gb3B0aW9ucy5yb290IHx8IG51bGw7CiAgICAgIHRoaXMuYWFiYiA9IG9wdGlvbnMuYWFiYiA/IG9wdGlvbnMuYWFiYi5jbG9uZSgpIDogbmV3IEFBQkIoKTsKICAgICAgdGhpcy5kYXRhID0gW107CiAgICAgIHRoaXMuY2hpbGRyZW4gPSBbXTsKICAgIH0KICAgIC8qKgogICAgICogcmVzZXQKICAgICAqLwoKCiAgICByZXNldCgpIHsKICAgICAgdGhpcy5jaGlsZHJlbi5sZW5ndGggPSB0aGlzLmRhdGEubGVuZ3RoID0gMDsKICAgIH0KICAgIC8qKgogICAgICogSW5zZXJ0IGRhdGEgaW50byB0aGlzIG5vZGUKICAgICAqIEByZXR1cm4gVHJ1ZSBpZiBzdWNjZXNzZnVsLCBvdGhlcndpc2UgZmFsc2UKICAgICAqLwoKCiAgICBpbnNlcnQoYWFiYiwgZWxlbWVudERhdGEsIGxldmVsKSB7CiAgICAgIGlmIChsZXZlbCA9PT0gdm9pZCAwKSB7CiAgICAgICAgbGV2ZWwgPSAwOwogICAgICB9CgogICAgICBjb25zdCBub2RlRGF0YSA9IHRoaXMuZGF0YTsgLy8gSWdub3JlIG9iamVjdHMgdGhhdCBkbyBub3QgYmVsb25nIGluIHRoaXMgbm9kZQoKICAgICAgaWYgKCF0aGlzLmFhYmIuY29udGFpbnMoYWFiYikpIHsKICAgICAgICByZXR1cm4gZmFsc2U7IC8vIG9iamVjdCBjYW5ub3QgYmUgYWRkZWQKICAgICAgfQoKICAgICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuOwogICAgICBjb25zdCBtYXhEZXB0aCA9IHRoaXMubWF4RGVwdGggfHwgdGhpcy5yb290Lm1heERlcHRoOwoKICAgICAgaWYgKGxldmVsIDwgbWF4RGVwdGgpIHsKICAgICAgICAvLyBTdWJkaXZpZGUgaWYgdGhlcmUgYXJlIG5vIGNoaWxkcmVuIHlldAogICAgICAgIGxldCBzdWJkaXZpZGVkID0gZmFsc2U7CgogICAgICAgIGlmICghY2hpbGRyZW4ubGVuZ3RoKSB7CiAgICAgICAgICB0aGlzLnN1YmRpdmlkZSgpOwogICAgICAgICAgc3ViZGl2aWRlZCA9IHRydWU7CiAgICAgICAgfSAvLyBhZGQgdG8gd2hpY2hldmVyIG5vZGUgd2lsbCBhY2NlcHQgaXQKCgogICAgICAgIGZvciAobGV0IGkgPSAwOyBpICE9PSA4OyBpKyspIHsKICAgICAgICAgIGlmIChjaGlsZHJlbltpXS5pbnNlcnQoYWFiYiwgZWxlbWVudERhdGEsIGxldmVsICsgMSkpIHsKICAgICAgICAgICAgcmV0dXJuIHRydWU7CiAgICAgICAgICB9CiAgICAgICAgfQoKICAgICAgICBpZiAoc3ViZGl2aWRlZCkgewogICAgICAgICAgLy8gTm8gY2hpbGRyZW4gYWNjZXB0ZWQhIE1pZ2h0IGFzIHdlbGwganVzdCByZW1vdmUgZW0gc2luY2UgdGhleSBjb250YWluIG5vbmUKICAgICAgICAgIGNoaWxkcmVuLmxlbmd0aCA9IDA7CiAgICAgICAgfQogICAgICB9IC8vIFRvbyBkZWVwLCBvciBjaGlsZHJlbiBkaWRudCB3YW50IGl0LiBhZGQgaXQgaW4gY3VycmVudCBub2RlCgoKICAgICAgbm9kZURhdGEucHVzaChlbGVtZW50RGF0YSk7CiAgICAgIHJldHVybiB0cnVlOwogICAgfQogICAgLyoqCiAgICAgKiBDcmVhdGUgOCBlcXVhbGx5IHNpemVkIGNoaWxkcmVuIG5vZGVzIGFuZCBwdXQgdGhlbSBpbiB0aGUgYGNoaWxkcmVuYCBhcnJheS4KICAgICAqLwoKCiAgICBzdWJkaXZpZGUoKSB7CiAgICAgIGNvbnN0IGFhYmIgPSB0aGlzLmFhYmI7CiAgICAgIGNvbnN0IGwgPSBhYWJiLmxvd2VyQm91bmQ7CiAgICAgIGNvbnN0IHUgPSBhYWJiLnVwcGVyQm91bmQ7CiAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbjsKICAgICAgY2hpbGRyZW4ucHVzaChuZXcgT2N0cmVlTm9kZSh7CiAgICAgICAgYWFiYjogbmV3IEFBQkIoewogICAgICAgICAgbG93ZXJCb3VuZDogbmV3IFZlYzMoMCwgMCwgMCkKICAgICAgICB9KQogICAgICB9KSwgbmV3IE9jdHJlZU5vZGUoewogICAgICAgIGFhYmI6IG5ldyBBQUJCKHsKICAgICAgICAgIGxvd2VyQm91bmQ6IG5ldyBWZWMzKDEsIDAsIDApCiAgICAgICAgfSkKICAgICAgfSksIG5ldyBPY3RyZWVOb2RlKHsKICAgICAgICBhYWJiOiBuZXcgQUFCQih7CiAgICAgICAgICBsb3dlckJvdW5kOiBuZXcgVmVjMygxLCAxLCAwKQogICAgICAgIH0pCiAgICAgIH0pLCBuZXcgT2N0cmVlTm9kZSh7CiAgICAgICAgYWFiYjogbmV3IEFBQkIoewogICAgICAgICAgbG93ZXJCb3VuZDogbmV3IFZlYzMoMSwgMSwgMSkKICAgICAgICB9KQogICAgICB9KSwgbmV3IE9jdHJlZU5vZGUoewogICAgICAgIGFhYmI6IG5ldyBBQUJCKHsKICAgICAgICAgIGxvd2VyQm91bmQ6IG5ldyBWZWMzKDAsIDEsIDEpCiAgICAgICAgfSkKICAgICAgfSksIG5ldyBPY3RyZWVOb2RlKHsKICAgICAgICBhYWJiOiBuZXcgQUFCQih7CiAgICAgICAgICBsb3dlckJvdW5kOiBuZXcgVmVjMygwLCAwLCAxKQogICAgICAgIH0pCiAgICAgIH0pLCBuZXcgT2N0cmVlTm9kZSh7CiAgICAgICAgYWFiYjogbmV3IEFBQkIoewogICAgICAgICAgbG93ZXJCb3VuZDogbmV3IFZlYzMoMSwgMCwgMSkKICAgICAgICB9KQogICAgICB9KSwgbmV3IE9jdHJlZU5vZGUoewogICAgICAgIGFhYmI6IG5ldyBBQUJCKHsKICAgICAgICAgIGxvd2VyQm91bmQ6IG5ldyBWZWMzKDAsIDEsIDApCiAgICAgICAgfSkKICAgICAgfSkpOwogICAgICB1LnZzdWIobCwgaGFsZkRpYWdvbmFsKTsKICAgICAgaGFsZkRpYWdvbmFsLnNjYWxlKDAuNSwgaGFsZkRpYWdvbmFsKTsKICAgICAgY29uc3Qgcm9vdCA9IHRoaXMucm9vdCB8fCB0aGlzOwoKICAgICAgZm9yIChsZXQgaSA9IDA7IGkgIT09IDg7IGkrKykgewogICAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5baV07IC8vIFNldCBjdXJyZW50IG5vZGUgYXMgcm9vdAoKICAgICAgICBjaGlsZC5yb290ID0gcm9vdDsgLy8gQ29tcHV0ZSBib3VuZHMKCiAgICAgICAgY29uc3QgbG93ZXJCb3VuZCA9IGNoaWxkLmFhYmIubG93ZXJCb3VuZDsKICAgICAgICBsb3dlckJvdW5kLnggKj0gaGFsZkRpYWdvbmFsLng7CiAgICAgICAgbG93ZXJCb3VuZC55ICo9IGhhbGZEaWFnb25hbC55OwogICAgICAgIGxvd2VyQm91bmQueiAqPSBoYWxmRGlhZ29uYWwuejsKICAgICAgICBsb3dlckJvdW5kLnZhZGQobCwgbG93ZXJCb3VuZCk7IC8vIFVwcGVyIGJvdW5kIGlzIGFsd2F5cyBsb3dlciBib3VuZCArIGhhbGZEaWFnb25hbAoKICAgICAgICBsb3dlckJvdW5kLnZhZGQoaGFsZkRpYWdvbmFsLCBjaGlsZC5hYWJiLnVwcGVyQm91bmQpOwogICAgICB9CiAgICB9CiAgICAvKioKICAgICAqIEdldCBhbGwgZGF0YSwgcG90ZW50aWFsbHkgd2l0aGluIGFuIEFBQkIKICAgICAqIEByZXR1cm4gVGhlICJyZXN1bHQiIG9iamVjdAogICAgICovCgoKICAgIGFhYmJRdWVyeShhYWJiLCByZXN1bHQpIHsKICAgICAgdGhpcy5kYXRhOyAvLyBhYm9ydCBpZiB0aGUgcmFuZ2UgZG9lcyBub3QgaW50ZXJzZWN0IHRoaXMgbm9kZQogICAgICAvLyBpZiAoIXRoaXMuYWFiYi5vdmVybGFwcyhhYWJiKSl7CiAgICAgIC8vICAgICByZXR1cm4gcmVzdWx0OwogICAgICAvLyB9CiAgICAgIC8vIEFkZCBvYmplY3RzIGF0IHRoaXMgbGV2ZWwKICAgICAgLy8gQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkocmVzdWx0LCBub2RlRGF0YSk7CiAgICAgIC8vIEFkZCBjaGlsZCBkYXRhCiAgICAgIC8vIEB0b2RvIHVud3JhcCByZWN1cnNpb24gaW50byBhIHF1ZXVlIC8gbG9vcCwgdGhhdCdzIGZhc3RlciBpbiBKUwoKICAgICAgdGhpcy5jaGlsZHJlbjsgLy8gZm9yIChsZXQgaSA9IDAsIE4gPSB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSAhPT0gTjsgaSsrKSB7CiAgICAgIC8vICAgICBjaGlsZHJlbltpXS5hYWJiUXVlcnkoYWFiYiwgcmVzdWx0KTsKICAgICAgLy8gfQoKICAgICAgY29uc3QgcXVldWUgPSBbdGhpc107CgogICAgICB3aGlsZSAocXVldWUubGVuZ3RoKSB7CiAgICAgICAgY29uc3Qgbm9kZSA9IHF1ZXVlLnBvcCgpOwoKICAgICAgICBpZiAobm9kZS5hYWJiLm92ZXJsYXBzKGFhYmIpKSB7CiAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShyZXN1bHQsIG5vZGUuZGF0YSk7CiAgICAgICAgfQoKICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShxdWV1ZSwgbm9kZS5jaGlsZHJlbik7CiAgICAgIH0KCiAgICAgIHJldHVybiByZXN1bHQ7CiAgICB9CiAgICAvKioKICAgICAqIEdldCBhbGwgZGF0YSwgcG90ZW50aWFsbHkgaW50ZXJzZWN0ZWQgYnkgYSByYXkuCiAgICAgKiBAcmV0dXJuIFRoZSAicmVzdWx0IiBvYmplY3QKICAgICAqLwoKCiAgICByYXlRdWVyeShyYXksIHRyZWVUcmFuc2Zvcm0sIHJlc3VsdCkgewogICAgICAvLyBVc2UgYWFiYiBxdWVyeSBmb3Igbm93LgoKICAgICAgLyoqIEB0b2RvIGltcGxlbWVudCByZWFsIHJheSBxdWVyeSB3aGljaCBuZWVkcyBsZXNzIGxvb2t1cHMgKi8KICAgICAgcmF5LmdldEFBQkIodG1wQUFCQik7CiAgICAgIHRtcEFBQkIudG9Mb2NhbEZyYW1lKHRyZWVUcmFuc2Zvcm0sIHRtcEFBQkIpOwogICAgICB0aGlzLmFhYmJRdWVyeSh0bXBBQUJCLCByZXN1bHQpOwogICAgICByZXR1cm4gcmVzdWx0OwogICAgfQogICAgLyoqCiAgICAgKiByZW1vdmVFbXB0eU5vZGVzCiAgICAgKi8KCgogICAgcmVtb3ZlRW1wdHlOb2RlcygpIHsKICAgICAgZm9yIChsZXQgaSA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHsKICAgICAgICB0aGlzLmNoaWxkcmVuW2ldLnJlbW92ZUVtcHR5Tm9kZXMoKTsKCiAgICAgICAgaWYgKCF0aGlzLmNoaWxkcmVuW2ldLmNoaWxkcmVuLmxlbmd0aCAmJiAhdGhpcy5jaGlsZHJlbltpXS5kYXRhLmxlbmd0aCkgewogICAgICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoaSwgMSk7CiAgICAgICAgfQogICAgICB9CiAgICB9CgogIH0KICAvKioKICAgKiBPY3RyZWUKICAgKi8KCgogIGNsYXNzIE9jdHJlZSBleHRlbmRzIE9jdHJlZU5vZGUgewogICAgLyoqCiAgICAgKiBNYXhpbXVtIHN1YmRpdmlzaW9uIGRlcHRoCiAgICAgKiBAZGVmYXVsdCA4CiAgICAgKi8KCiAgICAvKioKICAgICAqIEBwYXJhbSBhYWJiIFRoZSB0b3RhbCBBQUJCIG9mIHRoZSB0cmVlCiAgICAgKi8KICAgIGNvbnN0cnVjdG9yKGFhYmIsIG9wdGlvbnMpIHsKICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgewogICAgICAgIG9wdGlvbnMgPSB7fTsKICAgICAgfQoKICAgICAgc3VwZXIoewogICAgICAgIHJvb3Q6IG51bGwsCiAgICAgICAgYWFiYgogICAgICB9KTsKICAgICAgdGhpcy5tYXhEZXB0aCA9IHR5cGVvZiBvcHRpb25zLm1heERlcHRoICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubWF4RGVwdGggOiA4OwogICAgfQoKICB9CiAgY29uc3QgaGFsZkRpYWdvbmFsID0gbmV3IFZlYzMoKTsKICBjb25zdCB0bXBBQUJCID0gbmV3IEFBQkIoKTsKCiAgLyoqCiAgICogVHJpbWVzaC4KICAgKiBAZXhhbXBsZQogICAqICAgICAvLyBIb3cgdG8gbWFrZSBhIG1lc2ggd2l0aCBhIHNpbmdsZSB0cmlhbmdsZQogICAqICAgICBjb25zdCB2ZXJ0aWNlcyA9IFsKICAgKiAgICAgICAgIDAsIDAsIDAsIC8vIHZlcnRleCAwCiAgICogICAgICAgICAxLCAwLCAwLCAvLyB2ZXJ0ZXggMQogICAqICAgICAgICAgMCwgMSwgMCAgLy8gdmVydGV4IDIKICAgKiAgICAgXQogICAqICAgICBjb25zdCBpbmRpY2VzID0gWwogICAqICAgICAgICAgMCwgMSwgMiAgLy8gdHJpYW5nbGUgMAogICAqICAgICBdCiAgICogICAgIGNvbnN0IHRyaW1lc2hTaGFwZSA9IG5ldyBDQU5OT04uVHJpbWVzaCh2ZXJ0aWNlcywgaW5kaWNlcykKICAgKi8KICBjbGFzcyBUcmltZXNoIGV4dGVuZHMgU2hhcGUgewogICAgLyoqCiAgICAgKiB2ZXJ0aWNlcwogICAgICovCgogICAgLyoqCiAgICAgKiBBcnJheSBvZiBpbnRlZ2VycywgaW5kaWNhdGluZyB3aGljaCB2ZXJ0aWNlcyBlYWNoIHRyaWFuZ2xlIGNvbnNpc3RzIG9mLiBUaGUgbGVuZ3RoIG9mIHRoaXMgYXJyYXkgaXMgdGh1cyAzIHRpbWVzIHRoZSBudW1iZXIgb2YgdHJpYW5nbGVzLgogICAgICovCgogICAgLyoqCiAgICAgKiBUaGUgbm9ybWFscyBkYXRhLgogICAgICovCgogICAgLyoqCiAgICAgKiBUaGUgbG9jYWwgQUFCQiBvZiB0aGUgbWVzaC4KICAgICAqLwoKICAgIC8qKgogICAgICogUmVmZXJlbmNlcyB0byB2ZXJ0ZXggcGFpcnMsIG1ha2luZyB1cCBhbGwgdW5pcXVlIGVkZ2VzIGluIHRoZSB0cmltZXNoLgogICAgICovCgogICAgLyoqCiAgICAgKiBMb2NhbCBzY2FsaW5nIG9mIHRoZSBtZXNoLiBVc2UgLnNldFNjYWxlKCkgdG8gc2V0IGl0LgogICAgICovCgogICAgLyoqCiAgICAgKiBUaGUgaW5kZXhlZCB0cmlhbmdsZXMuIFVzZSAudXBkYXRlVHJlZSgpIHRvIHVwZGF0ZSBpdC4KICAgICAqLwogICAgY29uc3RydWN0b3IodmVydGljZXMsIGluZGljZXMpIHsKICAgICAgc3VwZXIoewogICAgICAgIHR5cGU6IFNoYXBlLnR5cGVzLlRSSU1FU0gKICAgICAgfSk7CiAgICAgIHRoaXMudmVydGljZXMgPSBuZXcgRmxvYXQzMkFycmF5KHZlcnRpY2VzKTsKICAgICAgdGhpcy5pbmRpY2VzID0gbmV3IEludDE2QXJyYXkoaW5kaWNlcyk7CiAgICAgIHRoaXMubm9ybWFscyA9IG5ldyBGbG9hdDMyQXJyYXkoaW5kaWNlcy5sZW5ndGgpOwogICAgICB0aGlzLmFhYmIgPSBuZXcgQUFCQigpOwogICAgICB0aGlzLmVkZ2VzID0gbnVsbDsKICAgICAgdGhpcy5zY2FsZSA9IG5ldyBWZWMzKDEsIDEsIDEpOwogICAgICB0aGlzLnRyZWUgPSBuZXcgT2N0cmVlKCk7CiAgICAgIHRoaXMudXBkYXRlRWRnZXMoKTsKICAgICAgdGhpcy51cGRhdGVOb3JtYWxzKCk7CiAgICAgIHRoaXMudXBkYXRlQUFCQigpOwogICAgICB0aGlzLnVwZGF0ZUJvdW5kaW5nU3BoZXJlUmFkaXVzKCk7CiAgICAgIHRoaXMudXBkYXRlVHJlZSgpOwogICAgfQogICAgLyoqCiAgICAgKiB1cGRhdGVUcmVlCiAgICAgKi8KCgogICAgdXBkYXRlVHJlZSgpIHsKICAgICAgY29uc3QgdHJlZSA9IHRoaXMudHJlZTsKICAgICAgdHJlZS5yZXNldCgpOwogICAgICB0cmVlLmFhYmIuY29weSh0aGlzLmFhYmIpOwogICAgICBjb25zdCBzY2FsZSA9IHRoaXMuc2NhbGU7IC8vIFRoZSBsb2NhbCBtZXNoIEFBQkIgaXMgc2NhbGVkLCBidXQgdGhlIG9jdHJlZSBBQUJCIHNob3VsZCBiZSB1bnNjYWxlZAoKICAgICAgdHJlZS5hYWJiLmxvd2VyQm91bmQueCAqPSAxIC8gc2NhbGUueDsKICAgICAgdHJlZS5hYWJiLmxvd2VyQm91bmQueSAqPSAxIC8gc2NhbGUueTsKICAgICAgdHJlZS5hYWJiLmxvd2VyQm91bmQueiAqPSAxIC8gc2NhbGUuejsKICAgICAgdHJlZS5hYWJiLnVwcGVyQm91bmQueCAqPSAxIC8gc2NhbGUueDsKICAgICAgdHJlZS5hYWJiLnVwcGVyQm91bmQueSAqPSAxIC8gc2NhbGUueTsKICAgICAgdHJlZS5hYWJiLnVwcGVyQm91bmQueiAqPSAxIC8gc2NhbGUuejsgLy8gSW5zZXJ0IGFsbCB0cmlhbmdsZXMKCiAgICAgIGNvbnN0IHRyaWFuZ2xlQUFCQiA9IG5ldyBBQUJCKCk7CiAgICAgIGNvbnN0IGEgPSBuZXcgVmVjMygpOwogICAgICBjb25zdCBiID0gbmV3IFZlYzMoKTsKICAgICAgY29uc3QgYyA9IG5ldyBWZWMzKCk7CiAgICAgIGNvbnN0IHBvaW50cyA9IFthLCBiLCBjXTsKCiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pbmRpY2VzLmxlbmd0aCAvIDM7IGkrKykgewogICAgICAgIC8vdGhpcy5nZXRUcmlhbmdsZVZlcnRpY2VzKGksIGEsIGIsIGMpOwogICAgICAgIC8vIEdldCB1bnNjYWxlZCB0cmlhbmdsZSB2ZXJ0cwogICAgICAgIGNvbnN0IGkzID0gaSAqIDM7CgogICAgICAgIHRoaXMuX2dldFVuc2NhbGVkVmVydGV4KHRoaXMuaW5kaWNlc1tpM10sIGEpOwoKICAgICAgICB0aGlzLl9nZXRVbnNjYWxlZFZlcnRleCh0aGlzLmluZGljZXNbaTMgKyAxXSwgYik7CgogICAgICAgIHRoaXMuX2dldFVuc2NhbGVkVmVydGV4KHRoaXMuaW5kaWNlc1tpMyArIDJdLCBjKTsKCiAgICAgICAgdHJpYW5nbGVBQUJCLnNldEZyb21Qb2ludHMocG9pbnRzKTsKICAgICAgICB0cmVlLmluc2VydCh0cmlhbmdsZUFBQkIsIGkpOwogICAgICB9CgogICAgICB0cmVlLnJlbW92ZUVtcHR5Tm9kZXMoKTsKICAgIH0KICAgIC8qKgogICAgICogR2V0IHRyaWFuZ2xlcyBpbiBhIGxvY2FsIEFBQkIgZnJvbSB0aGUgdHJpbWVzaC4KICAgICAqIEBwYXJhbSByZXN1bHQgQW4gYXJyYXkgb2YgaW50ZWdlcnMsIHJlZmVyZW5jaW5nIHRoZSBxdWVyaWVkIHRyaWFuZ2xlcy4KICAgICAqLwoKCiAgICBnZXRUcmlhbmdsZXNJbkFBQkIoYWFiYiwgcmVzdWx0KSB7CiAgICAgIHVuc2NhbGVkQUFCQi5jb3B5KGFhYmIpOyAvLyBTY2FsZSBpdCB0byBsb2NhbAoKICAgICAgY29uc3Qgc2NhbGUgPSB0aGlzLnNjYWxlOwogICAgICBjb25zdCBpc3ggPSBzY2FsZS54OwogICAgICBjb25zdCBpc3kgPSBzY2FsZS55OwogICAgICBjb25zdCBpc3ogPSBzY2FsZS56OwogICAgICBjb25zdCBsID0gdW5zY2FsZWRBQUJCLmxvd2VyQm91bmQ7CiAgICAgIGNvbnN0IHUgPSB1bnNjYWxlZEFBQkIudXBwZXJCb3VuZDsKICAgICAgbC54IC89IGlzeDsKICAgICAgbC55IC89IGlzeTsKICAgICAgbC56IC89IGlzejsKICAgICAgdS54IC89IGlzeDsKICAgICAgdS55IC89IGlzeTsKICAgICAgdS56IC89IGlzejsKICAgICAgcmV0dXJuIHRoaXMudHJlZS5hYWJiUXVlcnkodW5zY2FsZWRBQUJCLCByZXN1bHQpOwogICAgfQogICAgLyoqCiAgICAgKiBzZXRTY2FsZQogICAgICovCgoKICAgIHNldFNjYWxlKHNjYWxlKSB7CiAgICAgIGNvbnN0IHdhc1VuaWZvcm0gPSB0aGlzLnNjYWxlLnggPT09IHRoaXMuc2NhbGUueSAmJiB0aGlzLnNjYWxlLnkgPT09IHRoaXMuc2NhbGUuejsKICAgICAgY29uc3QgaXNVbmlmb3JtID0gc2NhbGUueCA9PT0gc2NhbGUueSAmJiBzY2FsZS55ID09PSBzY2FsZS56OwoKICAgICAgaWYgKCEod2FzVW5pZm9ybSAmJiBpc1VuaWZvcm0pKSB7CiAgICAgICAgLy8gTm9uLXVuaWZvcm0gc2NhbGluZy4gTmVlZCB0byB1cGRhdGUgbm9ybWFscy4KICAgICAgICB0aGlzLnVwZGF0ZU5vcm1hbHMoKTsKICAgICAgfQoKICAgICAgdGhpcy5zY2FsZS5jb3B5KHNjYWxlKTsKICAgICAgdGhpcy51cGRhdGVBQUJCKCk7CiAgICAgIHRoaXMudXBkYXRlQm91bmRpbmdTcGhlcmVSYWRpdXMoKTsKICAgIH0KICAgIC8qKgogICAgICogQ29tcHV0ZSB0aGUgbm9ybWFscyBvZiB0aGUgZmFjZXMuIFdpbGwgc2F2ZSBpbiB0aGUgYC5ub3JtYWxzYCBhcnJheS4KICAgICAqLwoKCiAgICB1cGRhdGVOb3JtYWxzKCkgewogICAgICBjb25zdCBuID0gY29tcHV0ZU5vcm1hbHNfbjsgLy8gR2VuZXJhdGUgbm9ybWFscwoKICAgICAgY29uc3Qgbm9ybWFscyA9IHRoaXMubm9ybWFsczsKCiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pbmRpY2VzLmxlbmd0aCAvIDM7IGkrKykgewogICAgICAgIGNvbnN0IGkzID0gaSAqIDM7CiAgICAgICAgY29uc3QgYSA9IHRoaXMuaW5kaWNlc1tpM107CiAgICAgICAgY29uc3QgYiA9IHRoaXMuaW5kaWNlc1tpMyArIDFdOwogICAgICAgIGNvbnN0IGMgPSB0aGlzLmluZGljZXNbaTMgKyAyXTsKICAgICAgICB0aGlzLmdldFZlcnRleChhLCB2YSk7CiAgICAgICAgdGhpcy5nZXRWZXJ0ZXgoYiwgdmIpOwogICAgICAgIHRoaXMuZ2V0VmVydGV4KGMsIHZjKTsKICAgICAgICBUcmltZXNoLmNvbXB1dGVOb3JtYWwodmIsIHZhLCB2Yywgbik7CiAgICAgICAgbm9ybWFsc1tpM10gPSBuLng7CiAgICAgICAgbm9ybWFsc1tpMyArIDFdID0gbi55OwogICAgICAgIG5vcm1hbHNbaTMgKyAyXSA9IG4uejsKICAgICAgfQogICAgfQogICAgLyoqCiAgICAgKiBVcGRhdGUgdGhlIGAuZWRnZXNgIHByb3BlcnR5CiAgICAgKi8KCgogICAgdXBkYXRlRWRnZXMoKSB7CiAgICAgIGNvbnN0IGVkZ2VzID0ge307CgogICAgICBjb25zdCBhZGQgPSAoYSwgYikgPT4gewogICAgICAgIGNvbnN0IGtleSA9IGEgPCBiID8gYCR7YX1fJHtifWAgOiBgJHtifV8ke2F9YDsKICAgICAgICBlZGdlc1trZXldID0gdHJ1ZTsKICAgICAgfTsKCiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pbmRpY2VzLmxlbmd0aCAvIDM7IGkrKykgewogICAgICAgIGNvbnN0IGkzID0gaSAqIDM7CiAgICAgICAgY29uc3QgYSA9IHRoaXMuaW5kaWNlc1tpM107CiAgICAgICAgY29uc3QgYiA9IHRoaXMuaW5kaWNlc1tpMyArIDFdOwogICAgICAgIGNvbnN0IGMgPSB0aGlzLmluZGljZXNbaTMgKyAyXTsKICAgICAgICBhZGQoYSwgYik7CiAgICAgICAgYWRkKGIsIGMpOwogICAgICAgIGFkZChjLCBhKTsKICAgICAgfQoKICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGVkZ2VzKTsKICAgICAgdGhpcy5lZGdlcyA9IG5ldyBJbnQxNkFycmF5KGtleXMubGVuZ3RoICogMik7CgogICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHsKICAgICAgICBjb25zdCBpbmRpY2VzID0ga2V5c1tpXS5zcGxpdCgnXycpOwogICAgICAgIHRoaXMuZWRnZXNbMiAqIGldID0gcGFyc2VJbnQoaW5kaWNlc1swXSwgMTApOwogICAgICAgIHRoaXMuZWRnZXNbMiAqIGkgKyAxXSA9IHBhcnNlSW50KGluZGljZXNbMV0sIDEwKTsKICAgICAgfQogICAgfQogICAgLyoqCiAgICAgKiBHZXQgYW4gZWRnZSB2ZXJ0ZXgKICAgICAqIEBwYXJhbSBmaXJzdE9yU2Vjb25kIDAgb3IgMSwgZGVwZW5kaW5nIG9uIHdoaWNoIG9uZSBvZiB0aGUgdmVydGljZXMgeW91IG5lZWQuCiAgICAgKiBAcGFyYW0gdmVydGV4U3RvcmUgV2hlcmUgdG8gc3RvcmUgdGhlIHJlc3VsdAogICAgICovCgoKICAgIGdldEVkZ2VWZXJ0ZXgoZWRnZUluZGV4LCBmaXJzdE9yU2Vjb25kLCB2ZXJ0ZXhTdG9yZSkgewogICAgICBjb25zdCB2ZXJ0ZXhJbmRleCA9IHRoaXMuZWRnZXNbZWRnZUluZGV4ICogMiArIChmaXJzdE9yU2Vjb25kID8gMSA6IDApXTsKICAgICAgdGhpcy5nZXRWZXJ0ZXgodmVydGV4SW5kZXgsIHZlcnRleFN0b3JlKTsKICAgIH0KICAgIC8qKgogICAgICogR2V0IGEgdmVjdG9yIGFsb25nIGFuIGVkZ2UuCiAgICAgKi8KCgogICAgZ2V0RWRnZVZlY3RvcihlZGdlSW5kZXgsIHZlY3RvclN0b3JlKSB7CiAgICAgIGNvbnN0IHZhID0gZ2V0RWRnZVZlY3Rvcl92YTsKICAgICAgY29uc3QgdmIgPSBnZXRFZGdlVmVjdG9yX3ZiOwogICAgICB0aGlzLmdldEVkZ2VWZXJ0ZXgoZWRnZUluZGV4LCAwLCB2YSk7CiAgICAgIHRoaXMuZ2V0RWRnZVZlcnRleChlZGdlSW5kZXgsIDEsIHZiKTsKICAgICAgdmIudnN1Yih2YSwgdmVjdG9yU3RvcmUpOwogICAgfQogICAgLyoqCiAgICAgKiBHZXQgZmFjZSBub3JtYWwgZ2l2ZW4gMyB2ZXJ0aWNlcwogICAgICovCgoKICAgIHN0YXRpYyBjb21wdXRlTm9ybWFsKHZhLCB2YiwgdmMsIHRhcmdldCkgewogICAgICB2Yi52c3ViKHZhLCBhYik7CiAgICAgIHZjLnZzdWIodmIsIGNiKTsKICAgICAgY2IuY3Jvc3MoYWIsIHRhcmdldCk7CgogICAgICBpZiAoIXRhcmdldC5pc1plcm8oKSkgewogICAgICAgIHRhcmdldC5ub3JtYWxpemUoKTsKICAgICAgfQogICAgfQogICAgLyoqCiAgICAgKiBHZXQgdmVydGV4IGkuCiAgICAgKiBAcmV0dXJuIFRoZSAib3V0IiB2ZWN0b3Igb2JqZWN0CiAgICAgKi8KCgogICAgZ2V0VmVydGV4KGksIG91dCkgewogICAgICBjb25zdCBzY2FsZSA9IHRoaXMuc2NhbGU7CgogICAgICB0aGlzLl9nZXRVbnNjYWxlZFZlcnRleChpLCBvdXQpOwoKICAgICAgb3V0LnggKj0gc2NhbGUueDsKICAgICAgb3V0LnkgKj0gc2NhbGUueTsKICAgICAgb3V0LnogKj0gc2NhbGUuejsKICAgICAgcmV0dXJuIG91dDsKICAgIH0KICAgIC8qKgogICAgICogR2V0IHJhdyB2ZXJ0ZXggaQogICAgICogQHJldHVybiBUaGUgIm91dCIgdmVjdG9yIG9iamVjdAogICAgICovCgoKICAgIF9nZXRVbnNjYWxlZFZlcnRleChpLCBvdXQpIHsKICAgICAgY29uc3QgaTMgPSBpICogMzsKICAgICAgY29uc3QgdmVydGljZXMgPSB0aGlzLnZlcnRpY2VzOwogICAgICByZXR1cm4gb3V0LnNldCh2ZXJ0aWNlc1tpM10sIHZlcnRpY2VzW2kzICsgMV0sIHZlcnRpY2VzW2kzICsgMl0pOwogICAgfQogICAgLyoqCiAgICAgKiBHZXQgYSB2ZXJ0ZXggZnJvbSB0aGUgdHJpbWVzaCx0cmFuc2Zvcm1lZCBieSB0aGUgZ2l2ZW4gcG9zaXRpb24gYW5kIHF1YXRlcm5pb24uCiAgICAgKiBAcmV0dXJuIFRoZSAib3V0IiB2ZWN0b3Igb2JqZWN0CiAgICAgKi8KCgogICAgZ2V0V29ybGRWZXJ0ZXgoaSwgcG9zLCBxdWF0LCBvdXQpIHsKICAgICAgdGhpcy5nZXRWZXJ0ZXgoaSwgb3V0KTsKICAgICAgVHJhbnNmb3JtLnBvaW50VG9Xb3JsZEZyYW1lKHBvcywgcXVhdCwgb3V0LCBvdXQpOwogICAgICByZXR1cm4gb3V0OwogICAgfQogICAgLyoqCiAgICAgKiBHZXQgdGhlIHRocmVlIHZlcnRpY2VzIGZvciB0cmlhbmdsZSBpLgogICAgICovCgoKICAgIGdldFRyaWFuZ2xlVmVydGljZXMoaSwgYSwgYiwgYykgewogICAgICBjb25zdCBpMyA9IGkgKiAzOwogICAgICB0aGlzLmdldFZlcnRleCh0aGlzLmluZGljZXNbaTNdLCBhKTsKICAgICAgdGhpcy5nZXRWZXJ0ZXgodGhpcy5pbmRpY2VzW2kzICsgMV0sIGIpOwogICAgICB0aGlzLmdldFZlcnRleCh0aGlzLmluZGljZXNbaTMgKyAyXSwgYyk7CiAgICB9CiAgICAvKioKICAgICAqIENvbXB1dGUgdGhlIG5vcm1hbCBvZiB0cmlhbmdsZSBpLgogICAgICogQHJldHVybiBUaGUgInRhcmdldCIgdmVjdG9yIG9iamVjdAogICAgICovCgoKICAgIGdldE5vcm1hbChpLCB0YXJnZXQpIHsKICAgICAgY29uc3QgaTMgPSBpICogMzsKICAgICAgcmV0dXJuIHRhcmdldC5zZXQodGhpcy5ub3JtYWxzW2kzXSwgdGhpcy5ub3JtYWxzW2kzICsgMV0sIHRoaXMubm9ybWFsc1tpMyArIDJdKTsKICAgIH0KICAgIC8qKgogICAgICogQHJldHVybiBUaGUgInRhcmdldCIgdmVjdG9yIG9iamVjdAogICAgICovCgoKICAgIGNhbGN1bGF0ZUxvY2FsSW5lcnRpYShtYXNzLCB0YXJnZXQpIHsKICAgICAgLy8gQXBwcm94aW1hdGUgd2l0aCBib3ggaW5lcnRpYQogICAgICAvLyBFeGFjdCBpbmVydGlhIGNhbGN1bGF0aW9uIGlzIG92ZXJraWxsLCBidXQgc2VlIGh0dHA6Ly9nZW9tZXRyaWN0b29scy5jb20vRG9jdW1lbnRhdGlvbi9Qb2x5aGVkcmFsTWFzc1Byb3BlcnRpZXMucGRmIGZvciB0aGUgY29ycmVjdCB3YXkgdG8gZG8gaXQKICAgICAgdGhpcy5jb21wdXRlTG9jYWxBQUJCKGNsaV9hYWJiKTsKICAgICAgY29uc3QgeCA9IGNsaV9hYWJiLnVwcGVyQm91bmQueCAtIGNsaV9hYWJiLmxvd2VyQm91bmQueDsKICAgICAgY29uc3QgeSA9IGNsaV9hYWJiLnVwcGVyQm91bmQueSAtIGNsaV9hYWJiLmxvd2VyQm91bmQueTsKICAgICAgY29uc3QgeiA9IGNsaV9hYWJiLnVwcGVyQm91bmQueiAtIGNsaV9hYWJiLmxvd2VyQm91bmQuejsKICAgICAgcmV0dXJuIHRhcmdldC5zZXQoMS4wIC8gMTIuMCAqIG1hc3MgKiAoMiAqIHkgKiAyICogeSArIDIgKiB6ICogMiAqIHopLCAxLjAgLyAxMi4wICogbWFzcyAqICgyICogeCAqIDIgKiB4ICsgMiAqIHogKiAyICogeiksIDEuMCAvIDEyLjAgKiBtYXNzICogKDIgKiB5ICogMiAqIHkgKyAyICogeCAqIDIgKiB4KSk7CiAgICB9CiAgICAvKioKICAgICAqIENvbXB1dGUgdGhlIGxvY2FsIEFBQkIgZm9yIHRoZSB0cmltZXNoCiAgICAgKi8KCgogICAgY29tcHV0ZUxvY2FsQUFCQihhYWJiKSB7CiAgICAgIGNvbnN0IGwgPSBhYWJiLmxvd2VyQm91bmQ7CiAgICAgIGNvbnN0IHUgPSBhYWJiLnVwcGVyQm91bmQ7CiAgICAgIGNvbnN0IG4gPSB0aGlzLnZlcnRpY2VzLmxlbmd0aDsKICAgICAgdGhpcy52ZXJ0aWNlczsKICAgICAgY29uc3QgdiA9IGNvbXB1dGVMb2NhbEFBQkJfd29ybGRWZXJ0OwogICAgICB0aGlzLmdldFZlcnRleCgwLCB2KTsKICAgICAgbC5jb3B5KHYpOwogICAgICB1LmNvcHkodik7CgogICAgICBmb3IgKGxldCBpID0gMDsgaSAhPT0gbjsgaSsrKSB7CiAgICAgICAgdGhpcy5nZXRWZXJ0ZXgoaSwgdik7CgogICAgICAgIGlmICh2LnggPCBsLngpIHsKICAgICAgICAgIGwueCA9IHYueDsKICAgICAgICB9IGVsc2UgaWYgKHYueCA+IHUueCkgewogICAgICAgICAgdS54ID0gdi54OwogICAgICAgIH0KCiAgICAgICAgaWYgKHYueSA8IGwueSkgewogICAgICAgICAgbC55ID0gdi55OwogICAgICAgIH0gZWxzZSBpZiAodi55ID4gdS55KSB7CiAgICAgICAgICB1LnkgPSB2Lnk7CiAgICAgICAgfQoKICAgICAgICBpZiAodi56IDwgbC56KSB7CiAgICAgICAgICBsLnogPSB2Lno7CiAgICAgICAgfSBlbHNlIGlmICh2LnogPiB1LnopIHsKICAgICAgICAgIHUueiA9IHYuejsKICAgICAgICB9CiAgICAgIH0KICAgIH0KICAgIC8qKgogICAgICogVXBkYXRlIHRoZSBgLmFhYmJgIHByb3BlcnR5CiAgICAgKi8KCgogICAgdXBkYXRlQUFCQigpIHsKICAgICAgdGhpcy5jb21wdXRlTG9jYWxBQUJCKHRoaXMuYWFiYik7CiAgICB9CiAgICAvKioKICAgICAqIFdpbGwgdXBkYXRlIHRoZSBgLmJvdW5kaW5nU3BoZXJlUmFkaXVzYCBwcm9wZXJ0eQogICAgICovCgoKICAgIHVwZGF0ZUJvdW5kaW5nU3BoZXJlUmFkaXVzKCkgewogICAgICAvLyBBc3N1bWUgcG9pbnRzIGFyZSBkaXN0cmlidXRlZCB3aXRoIGxvY2FsICgwLDAsMCkgYXMgY2VudGVyCiAgICAgIGxldCBtYXgyID0gMDsKICAgICAgY29uc3QgdmVydGljZXMgPSB0aGlzLnZlcnRpY2VzOwogICAgICBjb25zdCB2ID0gbmV3IFZlYzMoKTsKCiAgICAgIGZvciAobGV0IGkgPSAwLCBOID0gdmVydGljZXMubGVuZ3RoIC8gMzsgaSAhPT0gTjsgaSsrKSB7CiAgICAgICAgdGhpcy5nZXRWZXJ0ZXgoaSwgdik7CiAgICAgICAgY29uc3Qgbm9ybTIgPSB2Lmxlbmd0aFNxdWFyZWQoKTsKCiAgICAgICAgaWYgKG5vcm0yID4gbWF4MikgewogICAgICAgICAgbWF4MiA9IG5vcm0yOwogICAgICAgIH0KICAgICAgfQoKICAgICAgdGhpcy5ib3VuZGluZ1NwaGVyZVJhZGl1cyA9IE1hdGguc3FydChtYXgyKTsKICAgIH0KICAgIC8qKgogICAgICogY2FsY3VsYXRlV29ybGRBQUJCCiAgICAgKi8KCgogICAgY2FsY3VsYXRlV29ybGRBQUJCKHBvcywgcXVhdCwgbWluLCBtYXgpIHsKICAgICAgLyoKICAgICAgICAgIGNvbnN0IG4gPSB0aGlzLnZlcnRpY2VzLmxlbmd0aCAvIDMsCiAgICAgICAgICAgICAgdmVydHMgPSB0aGlzLnZlcnRpY2VzOwogICAgICAgICAgY29uc3QgbWlueCxtaW55LG1pbnosbWF4eCxtYXh5LG1heHo7CiAgICAgICAgICAgY29uc3QgdiA9IHRlbXBXb3JsZFZlcnRleDsKICAgICAgICAgIGZvcihsZXQgaT0wOyBpPG47IGkrKyl7CiAgICAgICAgICAgICAgdGhpcy5nZXRWZXJ0ZXgoaSwgdik7CiAgICAgICAgICAgICAgcXVhdC52bXVsdCh2LCB2KTsKICAgICAgICAgICAgICBwb3MudmFkZCh2LCB2KTsKICAgICAgICAgICAgICBpZiAodi54IDwgbWlueCB8fCBtaW54PT09dW5kZWZpbmVkKXsKICAgICAgICAgICAgICAgICAgbWlueCA9IHYueDsKICAgICAgICAgICAgICB9IGVsc2UgaWYodi54ID4gbWF4eCB8fCBtYXh4PT09dW5kZWZpbmVkKXsKICAgICAgICAgICAgICAgICAgbWF4eCA9IHYueDsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgIGlmICh2LnkgPCBtaW55IHx8IG1pbnk9PT11bmRlZmluZWQpewogICAgICAgICAgICAgICAgICBtaW55ID0gdi55OwogICAgICAgICAgICAgIH0gZWxzZSBpZih2LnkgPiBtYXh5IHx8IG1heHk9PT11bmRlZmluZWQpewogICAgICAgICAgICAgICAgICBtYXh5ID0gdi55OwogICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgaWYgKHYueiA8IG1pbnogfHwgbWluej09PXVuZGVmaW5lZCl7CiAgICAgICAgICAgICAgICAgIG1pbnogPSB2Lno7CiAgICAgICAgICAgICAgfSBlbHNlIGlmKHYueiA+IG1heHogfHwgbWF4ej09PXVuZGVmaW5lZCl7CiAgICAgICAgICAgICAgICAgIG1heHogPSB2Lno7CiAgICAgICAgICAgICAgfQogICAgICAgICAgfQogICAgICAgICAgbWluLnNldChtaW54LG1pbnksbWlueik7CiAgICAgICAgICBtYXguc2V0KG1heHgsbWF4eSxtYXh6KTsKICAgICAgICAgICovCiAgICAgIC8vIEZhc3RlciBhcHByb3hpbWF0aW9uIHVzaW5nIGxvY2FsIEFBQkIKICAgICAgY29uc3QgZnJhbWUgPSBjYWxjdWxhdGVXb3JsZEFBQkJfZnJhbWU7CiAgICAgIGNvbnN0IHJlc3VsdCA9IGNhbGN1bGF0ZVdvcmxkQUFCQl9hYWJiOwogICAgICBmcmFtZS5wb3NpdGlvbiA9IHBvczsKICAgICAgZnJhbWUucXVhdGVybmlvbiA9IHF1YXQ7CiAgICAgIHRoaXMuYWFiYi50b1dvcmxkRnJhbWUoZnJhbWUsIHJlc3VsdCk7CiAgICAgIG1pbi5jb3B5KHJlc3VsdC5sb3dlckJvdW5kKTsKICAgICAgbWF4LmNvcHkocmVzdWx0LnVwcGVyQm91bmQpOwogICAgfQogICAgLyoqCiAgICAgKiBHZXQgYXBwcm94aW1hdGUgdm9sdW1lCiAgICAgKi8KCgogICAgdm9sdW1lKCkgewogICAgICByZXR1cm4gNC4wICogTWF0aC5QSSAqIHRoaXMuYm91bmRpbmdTcGhlcmVSYWRpdXMgLyAzLjA7CiAgICB9CiAgICAvKioKICAgICAqIENyZWF0ZSBhIFRyaW1lc2ggaW5zdGFuY2UsIHNoYXBlZCBhcyBhIHRvcnVzLgogICAgICovCgoKICAgIHN0YXRpYyBjcmVhdGVUb3J1cyhyYWRpdXMsIHR1YmUsIHJhZGlhbFNlZ21lbnRzLCB0dWJ1bGFyU2VnbWVudHMsIGFyYykgewogICAgICBpZiAocmFkaXVzID09PSB2b2lkIDApIHsKICAgICAgICByYWRpdXMgPSAxOwogICAgICB9CgogICAgICBpZiAodHViZSA9PT0gdm9pZCAwKSB7CiAgICAgICAgdHViZSA9IDAuNTsKICAgICAgfQoKICAgICAgaWYgKHJhZGlhbFNlZ21lbnRzID09PSB2b2lkIDApIHsKICAgICAgICByYWRpYWxTZWdtZW50cyA9IDg7CiAgICAgIH0KCiAgICAgIGlmICh0dWJ1bGFyU2VnbWVudHMgPT09IHZvaWQgMCkgewogICAgICAgIHR1YnVsYXJTZWdtZW50cyA9IDY7CiAgICAgIH0KCiAgICAgIGlmIChhcmMgPT09IHZvaWQgMCkgewogICAgICAgIGFyYyA9IE1hdGguUEkgKiAyOwogICAgICB9CgogICAgICBjb25zdCB2ZXJ0aWNlcyA9IFtdOwogICAgICBjb25zdCBpbmRpY2VzID0gW107CgogICAgICBmb3IgKGxldCBqID0gMDsgaiA8PSByYWRpYWxTZWdtZW50czsgaisrKSB7CiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gdHVidWxhclNlZ21lbnRzOyBpKyspIHsKICAgICAgICAgIGNvbnN0IHUgPSBpIC8gdHVidWxhclNlZ21lbnRzICogYXJjOwogICAgICAgICAgY29uc3QgdiA9IGogLyByYWRpYWxTZWdtZW50cyAqIE1hdGguUEkgKiAyOwogICAgICAgICAgY29uc3QgeCA9IChyYWRpdXMgKyB0dWJlICogTWF0aC5jb3ModikpICogTWF0aC5jb3ModSk7CiAgICAgICAgICBjb25zdCB5ID0gKHJhZGl1cyArIHR1YmUgKiBNYXRoLmNvcyh2KSkgKiBNYXRoLnNpbih1KTsKICAgICAgICAgIGNvbnN0IHogPSB0dWJlICogTWF0aC5zaW4odik7CiAgICAgICAgICB2ZXJ0aWNlcy5wdXNoKHgsIHksIHopOwogICAgICAgIH0KICAgICAgfQoKICAgICAgZm9yIChsZXQgaiA9IDE7IGogPD0gcmFkaWFsU2VnbWVudHM7IGorKykgewogICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHR1YnVsYXJTZWdtZW50czsgaSsrKSB7CiAgICAgICAgICBjb25zdCBhID0gKHR1YnVsYXJTZWdtZW50cyArIDEpICogaiArIGkgLSAxOwogICAgICAgICAgY29uc3QgYiA9ICh0dWJ1bGFyU2VnbWVudHMgKyAxKSAqIChqIC0gMSkgKyBpIC0gMTsKICAgICAgICAgIGNvbnN0IGMgPSAodHVidWxhclNlZ21lbnRzICsgMSkgKiAoaiAtIDEpICsgaTsKICAgICAgICAgIGNvbnN0IGQgPSAodHVidWxhclNlZ21lbnRzICsgMSkgKiBqICsgaTsKICAgICAgICAgIGluZGljZXMucHVzaChhLCBiLCBkKTsKICAgICAgICAgIGluZGljZXMucHVzaChiLCBjLCBkKTsKICAgICAgICB9CiAgICAgIH0KCiAgICAgIHJldHVybiBuZXcgVHJpbWVzaCh2ZXJ0aWNlcywgaW5kaWNlcyk7CiAgICB9CgogIH0KICBjb25zdCBjb21wdXRlTm9ybWFsc19uID0gbmV3IFZlYzMoKTsKICBjb25zdCB1bnNjYWxlZEFBQkIgPSBuZXcgQUFCQigpOwogIGNvbnN0IGdldEVkZ2VWZWN0b3JfdmEgPSBuZXcgVmVjMygpOwogIGNvbnN0IGdldEVkZ2VWZWN0b3JfdmIgPSBuZXcgVmVjMygpOwogIGNvbnN0IGNiID0gbmV3IFZlYzMoKTsKICBjb25zdCBhYiA9IG5ldyBWZWMzKCk7CiAgY29uc3QgdmEgPSBuZXcgVmVjMygpOwogIGNvbnN0IHZiID0gbmV3IFZlYzMoKTsKICBjb25zdCB2YyA9IG5ldyBWZWMzKCk7CiAgY29uc3QgY2xpX2FhYmIgPSBuZXcgQUFCQigpOwogIGNvbnN0IGNvbXB1dGVMb2NhbEFBQkJfd29ybGRWZXJ0ID0gbmV3IFZlYzMoKTsKICBjb25zdCBjYWxjdWxhdGVXb3JsZEFBQkJfZnJhbWUgPSBuZXcgVHJhbnNmb3JtKCk7CiAgY29uc3QgY2FsY3VsYXRlV29ybGRBQUJCX2FhYmIgPSBuZXcgQUFCQigpOwoKICAvKioKICAgKiBDb25zdHJhaW50IGVxdWF0aW9uIHNvbHZlciBiYXNlIGNsYXNzLgogICAqLwogIGNsYXNzIFNvbHZlciB7CiAgICAvKioKICAgICAqIEFsbCBlcXVhdGlvbnMgdG8gYmUgc29sdmVkCiAgICAgKi8KCiAgICAvKioKICAgICAqIEB0b2RvIHJlbW92ZSB1c2VsZXNzIGNvbnN0cnVjdG9yCiAgICAgKi8KICAgIGNvbnN0cnVjdG9yKCkgewogICAgICB0aGlzLmVxdWF0aW9ucyA9IFtdOwogICAgfQogICAgLyoqCiAgICAgKiBTaG91bGQgYmUgaW1wbGVtZW50ZWQgaW4gc3ViY2xhc3NlcyEKICAgICAqIEB0b2RvIHVzZSBhYnN0cmFjdAogICAgICogQHJldHVybiBudW1iZXIgb2YgaXRlcmF0aW9ucyBwZXJmb3JtZWQKICAgICAqLwoKCiAgICBzb2x2ZShkdCwgd29ybGQpIHsKICAgICAgcmV0dXJuICgvLyBTaG91bGQgcmV0dXJuIHRoZSBudW1iZXIgb2YgaXRlcmF0aW9ucyBkb25lIQogICAgICAgIDAKICAgICAgKTsKICAgIH0KICAgIC8qKgogICAgICogQWRkIGFuIGVxdWF0aW9uCiAgICAgKi8KCgogICAgYWRkRXF1YXRpb24oZXEpIHsKICAgICAgaWYgKGVxLmVuYWJsZWQgJiYgIWVxLmJpLmlzVHJpZ2dlciAmJiAhZXEuYmouaXNUcmlnZ2VyKSB7CiAgICAgICAgdGhpcy5lcXVhdGlvbnMucHVzaChlcSk7CiAgICAgIH0KICAgIH0KICAgIC8qKgogICAgICogUmVtb3ZlIGFuIGVxdWF0aW9uCiAgICAgKi8KCgogICAgcmVtb3ZlRXF1YXRpb24oZXEpIHsKICAgICAgY29uc3QgZXFzID0gdGhpcy5lcXVhdGlvbnM7CiAgICAgIGNvbnN0IGkgPSBlcXMuaW5kZXhPZihlcSk7CgogICAgICBpZiAoaSAhPT0gLTEpIHsKICAgICAgICBlcXMuc3BsaWNlKGksIDEpOwogICAgICB9CiAgICB9CiAgICAvKioKICAgICAqIEFkZCBhbGwgZXF1YXRpb25zCiAgICAgKi8KCgogICAgcmVtb3ZlQWxsRXF1YXRpb25zKCkgewogICAgICB0aGlzLmVxdWF0aW9ucy5sZW5ndGggPSAwOwogICAgfQoKICB9CgogIC8qKgogICAqIENvbnN0cmFpbnQgZXF1YXRpb24gR2F1c3MtU2VpZGVsIHNvbHZlci4KICAgKiBAdG9kbyBUaGUgc3Bvb2sgcGFyYW1ldGVycyBzaG91bGQgYmUgc3BlY2lmaWVkIGZvciBlYWNoIGNvbnN0cmFpbnQsIG5vdCBnbG9iYWxseS4KICAgKiBAc2VlIGh0dHBzOi8vd3d3OC5jcy51bXUuc2Uva3Vyc2VyLzVEVjA1OC9WVDA5L2xlY3R1cmVzL3Nwb29rbm90ZXMucGRmCiAgICovCiAgY2xhc3MgR1NTb2x2ZXIgZXh0ZW5kcyBTb2x2ZXIgewogICAgLyoqCiAgICAgKiBUaGUgbnVtYmVyIG9mIHNvbHZlciBpdGVyYXRpb25zIGRldGVybWluZXMgcXVhbGl0eSBvZiB0aGUgY29uc3RyYWludHMgaW4gdGhlIHdvcmxkLgogICAgICogVGhlIG1vcmUgaXRlcmF0aW9ucywgdGhlIG1vcmUgY29ycmVjdCBzaW11bGF0aW9uLiBNb3JlIGl0ZXJhdGlvbnMgbmVlZCBtb3JlIGNvbXB1dGF0aW9ucyB0aG91Z2guIElmIHlvdSBoYXZlIGEgbGFyZ2UgZ3Jhdml0eSBmb3JjZSBpbiB5b3VyIHdvcmxkLCB5b3Ugd2lsbCBuZWVkIG1vcmUgaXRlcmF0aW9ucy4KICAgICAqLwoKICAgIC8qKgogICAgICogV2hlbiB0b2xlcmFuY2UgaXMgcmVhY2hlZCwgdGhlIHN5c3RlbSBpcyBhc3N1bWVkIHRvIGJlIGNvbnZlcmdlZC4KICAgICAqLwoKICAgIC8qKgogICAgICogQHRvZG8gcmVtb3ZlIHVzZWxlc3MgY29uc3RydWN0b3IKICAgICAqLwogICAgY29uc3RydWN0b3IoKSB7CiAgICAgIHN1cGVyKCk7CiAgICAgIHRoaXMuaXRlcmF0aW9ucyA9IDEwOwogICAgICB0aGlzLnRvbGVyYW5jZSA9IDFlLTc7CiAgICB9CiAgICAvKioKICAgICAqIFNvbHZlCiAgICAgKiBAcmV0dXJuIG51bWJlciBvZiBpdGVyYXRpb25zIHBlcmZvcm1lZAogICAgICovCgoKICAgIHNvbHZlKGR0LCB3b3JsZCkgewogICAgICBsZXQgaXRlciA9IDA7CiAgICAgIGNvbnN0IG1heEl0ZXIgPSB0aGlzLml0ZXJhdGlvbnM7CiAgICAgIGNvbnN0IHRvbFNxdWFyZWQgPSB0aGlzLnRvbGVyYW5jZSAqIHRoaXMudG9sZXJhbmNlOwogICAgICBjb25zdCBlcXVhdGlvbnMgPSB0aGlzLmVxdWF0aW9uczsKICAgICAgY29uc3QgTmVxID0gZXF1YXRpb25zLmxlbmd0aDsKICAgICAgY29uc3QgYm9kaWVzID0gd29ybGQuYm9kaWVzOwogICAgICBjb25zdCBOYm9kaWVzID0gYm9kaWVzLmxlbmd0aDsKICAgICAgY29uc3QgaCA9IGR0OwogICAgICBsZXQgQjsKICAgICAgbGV0IGludkM7CiAgICAgIGxldCBkZWx0YWxhbWJkYTsKICAgICAgbGV0IGRlbHRhbGFtYmRhVG90OwogICAgICBsZXQgR1dsYW1iZGE7CiAgICAgIGxldCBsYW1iZGFqOyAvLyBVcGRhdGUgc29sdmUgbWFzcwoKICAgICAgaWYgKE5lcSAhPT0gMCkgewogICAgICAgIGZvciAobGV0IGkgPSAwOyBpICE9PSBOYm9kaWVzOyBpKyspIHsKICAgICAgICAgIGJvZGllc1tpXS51cGRhdGVTb2x2ZU1hc3NQcm9wZXJ0aWVzKCk7CiAgICAgICAgfQogICAgICB9IC8vIFRoaW5ncyB0aGF0IGRvIG5vdCBjaGFuZ2UgZHVyaW5nIGl0ZXJhdGlvbiBjYW4gYmUgY29tcHV0ZWQgb25jZQoKCiAgICAgIGNvbnN0IGludkNzID0gR1NTb2x2ZXJfc29sdmVfaW52Q3M7CiAgICAgIGNvbnN0IEJzID0gR1NTb2x2ZXJfc29sdmVfQnM7CiAgICAgIGNvbnN0IGxhbWJkYSA9IEdTU29sdmVyX3NvbHZlX2xhbWJkYTsKICAgICAgaW52Q3MubGVuZ3RoID0gTmVxOwogICAgICBCcy5sZW5ndGggPSBOZXE7CiAgICAgIGxhbWJkYS5sZW5ndGggPSBOZXE7CgogICAgICBmb3IgKGxldCBpID0gMDsgaSAhPT0gTmVxOyBpKyspIHsKICAgICAgICBjb25zdCBjID0gZXF1YXRpb25zW2ldOwogICAgICAgIGxhbWJkYVtpXSA9IDAuMDsKICAgICAgICBCc1tpXSA9IGMuY29tcHV0ZUIoaCk7CiAgICAgICAgaW52Q3NbaV0gPSAxLjAgLyBjLmNvbXB1dGVDKCk7CiAgICAgIH0KCiAgICAgIGlmIChOZXEgIT09IDApIHsKICAgICAgICAvLyBSZXNldCB2bGFtYmRhCiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgIT09IE5ib2RpZXM7IGkrKykgewogICAgICAgICAgY29uc3QgYiA9IGJvZGllc1tpXTsKICAgICAgICAgIGNvbnN0IHZsYW1iZGEgPSBiLnZsYW1iZGE7CiAgICAgICAgICBjb25zdCB3bGFtYmRhID0gYi53bGFtYmRhOwogICAgICAgICAgdmxhbWJkYS5zZXQoMCwgMCwgMCk7CiAgICAgICAgICB3bGFtYmRhLnNldCgwLCAwLCAwKTsKICAgICAgICB9IC8vIEl0ZXJhdGUgb3ZlciBlcXVhdGlvbnMKCgogICAgICAgIGZvciAoaXRlciA9IDA7IGl0ZXIgIT09IG1heEl0ZXI7IGl0ZXIrKykgewogICAgICAgICAgLy8gQWNjdW11bGF0ZSB0aGUgdG90YWwgZXJyb3IgZm9yIGVhY2ggaXRlcmF0aW9uLgogICAgICAgICAgZGVsdGFsYW1iZGFUb3QgPSAwLjA7CgogICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogIT09IE5lcTsgaisrKSB7CiAgICAgICAgICAgIGNvbnN0IGMgPSBlcXVhdGlvbnNbal07IC8vIENvbXB1dGUgaXRlcmF0aW9uCgogICAgICAgICAgICBCID0gQnNbal07CiAgICAgICAgICAgIGludkMgPSBpbnZDc1tqXTsKICAgICAgICAgICAgbGFtYmRhaiA9IGxhbWJkYVtqXTsKICAgICAgICAgICAgR1dsYW1iZGEgPSBjLmNvbXB1dGVHV2xhbWJkYSgpOwogICAgICAgICAgICBkZWx0YWxhbWJkYSA9IGludkMgKiAoQiAtIEdXbGFtYmRhIC0gYy5lcHMgKiBsYW1iZGFqKTsgLy8gQ2xhbXAgaWYgd2UgYXJlIG5vdCB3aXRoaW4gdGhlIG1pbi9tYXggaW50ZXJ2YWwKCiAgICAgICAgICAgIGlmIChsYW1iZGFqICsgZGVsdGFsYW1iZGEgPCBjLm1pbkZvcmNlKSB7CiAgICAgICAgICAgICAgZGVsdGFsYW1iZGEgPSBjLm1pbkZvcmNlIC0gbGFtYmRhajsKICAgICAgICAgICAgfSBlbHNlIGlmIChsYW1iZGFqICsgZGVsdGFsYW1iZGEgPiBjLm1heEZvcmNlKSB7CiAgICAgICAgICAgICAgZGVsdGFsYW1iZGEgPSBjLm1heEZvcmNlIC0gbGFtYmRhajsKICAgICAgICAgICAgfQoKICAgICAgICAgICAgbGFtYmRhW2pdICs9IGRlbHRhbGFtYmRhOwogICAgICAgICAgICBkZWx0YWxhbWJkYVRvdCArPSBkZWx0YWxhbWJkYSA+IDAuMCA/IGRlbHRhbGFtYmRhIDogLWRlbHRhbGFtYmRhOyAvLyBhYnMoZGVsdGFsYW1iZGEpCgogICAgICAgICAgICBjLmFkZFRvV2xhbWJkYShkZWx0YWxhbWJkYSk7CiAgICAgICAgICB9IC8vIElmIHRoZSB0b3RhbCBlcnJvciBpcyBzbWFsbCBlbm91Z2ggLSBzdG9wIGl0ZXJhdGUKCgogICAgICAgICAgaWYgKGRlbHRhbGFtYmRhVG90ICogZGVsdGFsYW1iZGFUb3QgPCB0b2xTcXVhcmVkKSB7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgfQogICAgICAgIH0gLy8gQWRkIHJlc3VsdCB0byB2ZWxvY2l0eQoKCiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgIT09IE5ib2RpZXM7IGkrKykgewogICAgICAgICAgY29uc3QgYiA9IGJvZGllc1tpXTsKICAgICAgICAgIGNvbnN0IHYgPSBiLnZlbG9jaXR5OwogICAgICAgICAgY29uc3QgdyA9IGIuYW5ndWxhclZlbG9jaXR5OwogICAgICAgICAgYi52bGFtYmRhLnZtdWwoYi5saW5lYXJGYWN0b3IsIGIudmxhbWJkYSk7CiAgICAgICAgICB2LnZhZGQoYi52bGFtYmRhLCB2KTsKICAgICAgICAgIGIud2xhbWJkYS52bXVsKGIuYW5ndWxhckZhY3RvciwgYi53bGFtYmRhKTsKICAgICAgICAgIHcudmFkZChiLndsYW1iZGEsIHcpOwogICAgICAgIH0gLy8gU2V0IHRoZSBgLm11bHRpcGxpZXJgIHByb3BlcnR5IG9mIGVhY2ggZXF1YXRpb24KCgogICAgICAgIGxldCBsID0gZXF1YXRpb25zLmxlbmd0aDsKICAgICAgICBjb25zdCBpbnZEdCA9IDEgLyBoOwoKICAgICAgICB3aGlsZSAobC0tKSB7CiAgICAgICAgICBlcXVhdGlvbnNbbF0ubXVsdGlwbGllciA9IGxhbWJkYVtsXSAqIGludkR0OwogICAgICAgIH0KICAgICAgfQoKICAgICAgcmV0dXJuIGl0ZXI7CiAgICB9CgogIH0gLy8gSnVzdCB0ZW1wb3JhcnkgbnVtYmVyIGhvbGRlcnMgdGhhdCB3ZSB3YW50IHRvIHJldXNlIGVhY2ggaXRlcmF0aW9uLgoKICBjb25zdCBHU1NvbHZlcl9zb2x2ZV9sYW1iZGEgPSBbXTsKICBjb25zdCBHU1NvbHZlcl9zb2x2ZV9pbnZDcyA9IFtdOwogIGNvbnN0IEdTU29sdmVyX3NvbHZlX0JzID0gW107CgogIC8qKgogICAqIFNwbGl0cyB0aGUgZXF1YXRpb25zIGludG8gaXNsYW5kcyBhbmQgc29sdmVzIHRoZW0gaW5kZXBlbmRlbnRseS4gQ2FuIGltcHJvdmUgcGVyZm9ybWFuY2UuCiAgICovCiAgY2xhc3MgU3BsaXRTb2x2ZXIgZXh0ZW5kcyBTb2x2ZXIgewogICAgLyoqCiAgICAgKiBUaGUgbnVtYmVyIG9mIHNvbHZlciBpdGVyYXRpb25zIGRldGVybWluZXMgcXVhbGl0eSBvZiB0aGUgY29uc3RyYWludHMgaW4gdGhlIHdvcmxkLiBUaGUgbW9yZSBpdGVyYXRpb25zLCB0aGUgbW9yZSBjb3JyZWN0IHNpbXVsYXRpb24uIE1vcmUgaXRlcmF0aW9ucyBuZWVkIG1vcmUgY29tcHV0YXRpb25zIHRob3VnaC4gSWYgeW91IGhhdmUgYSBsYXJnZSBncmF2aXR5IGZvcmNlIGluIHlvdXIgd29ybGQsIHlvdSB3aWxsIG5lZWQgbW9yZSBpdGVyYXRpb25zLgogICAgICovCgogICAgLyoqCiAgICAgKiBXaGVuIHRvbGVyYW5jZSBpcyByZWFjaGVkLCB0aGUgc3lzdGVtIGlzIGFzc3VtZWQgdG8gYmUgY29udmVyZ2VkLgogICAgICovCgogICAgLyoqIHN1YnNvbHZlciAqLwogICAgY29uc3RydWN0b3Ioc3Vic29sdmVyKSB7CiAgICAgIHN1cGVyKCk7CiAgICAgIHRoaXMuaXRlcmF0aW9ucyA9IDEwOwogICAgICB0aGlzLnRvbGVyYW5jZSA9IDFlLTc7CiAgICAgIHRoaXMuc3Vic29sdmVyID0gc3Vic29sdmVyOwogICAgICB0aGlzLm5vZGVzID0gW107CiAgICAgIHRoaXMubm9kZVBvb2wgPSBbXTsgLy8gQ3JlYXRlIG5lZWRlZCBub2RlcywgcmV1c2UgaWYgcG9zc2libGUKCiAgICAgIHdoaWxlICh0aGlzLm5vZGVQb29sLmxlbmd0aCA8IDEyOCkgewogICAgICAgIHRoaXMubm9kZVBvb2wucHVzaCh0aGlzLmNyZWF0ZU5vZGUoKSk7CiAgICAgIH0KICAgIH0KICAgIC8qKgogICAgICogY3JlYXRlTm9kZQogICAgICovCgoKICAgIGNyZWF0ZU5vZGUoKSB7CiAgICAgIHJldHVybiB7CiAgICAgICAgYm9keTogbnVsbCwKICAgICAgICBjaGlsZHJlbjogW10sCiAgICAgICAgZXFzOiBbXSwKICAgICAgICB2aXNpdGVkOiBmYWxzZQogICAgICB9OwogICAgfQogICAgLyoqCiAgICAgKiBTb2x2ZSB0aGUgc3Vic3lzdGVtcwogICAgICogQHJldHVybiBudW1iZXIgb2YgaXRlcmF0aW9ucyBwZXJmb3JtZWQKICAgICAqLwoKCiAgICBzb2x2ZShkdCwgd29ybGQpIHsKICAgICAgY29uc3Qgbm9kZXMgPSBTcGxpdFNvbHZlcl9zb2x2ZV9ub2RlczsKICAgICAgY29uc3Qgbm9kZVBvb2wgPSB0aGlzLm5vZGVQb29sOwogICAgICBjb25zdCBib2RpZXMgPSB3b3JsZC5ib2RpZXM7CiAgICAgIGNvbnN0IGVxdWF0aW9ucyA9IHRoaXMuZXF1YXRpb25zOwogICAgICBjb25zdCBOZXEgPSBlcXVhdGlvbnMubGVuZ3RoOwogICAgICBjb25zdCBOYm9kaWVzID0gYm9kaWVzLmxlbmd0aDsKICAgICAgY29uc3Qgc3Vic29sdmVyID0gdGhpcy5zdWJzb2x2ZXI7IC8vIENyZWF0ZSBuZWVkZWQgbm9kZXMsIHJldXNlIGlmIHBvc3NpYmxlCgogICAgICB3aGlsZSAobm9kZVBvb2wubGVuZ3RoIDwgTmJvZGllcykgewogICAgICAgIG5vZGVQb29sLnB1c2godGhpcy5jcmVhdGVOb2RlKCkpOwogICAgICB9CgogICAgICBub2Rlcy5sZW5ndGggPSBOYm9kaWVzOwoKICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOYm9kaWVzOyBpKyspIHsKICAgICAgICBub2Rlc1tpXSA9IG5vZGVQb29sW2ldOwogICAgICB9IC8vIFJlc2V0IG5vZGUgdmFsdWVzCgoKICAgICAgZm9yIChsZXQgaSA9IDA7IGkgIT09IE5ib2RpZXM7IGkrKykgewogICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTsKICAgICAgICBub2RlLmJvZHkgPSBib2RpZXNbaV07CiAgICAgICAgbm9kZS5jaGlsZHJlbi5sZW5ndGggPSAwOwogICAgICAgIG5vZGUuZXFzLmxlbmd0aCA9IDA7CiAgICAgICAgbm9kZS52aXNpdGVkID0gZmFsc2U7CiAgICAgIH0KCiAgICAgIGZvciAobGV0IGsgPSAwOyBrICE9PSBOZXE7IGsrKykgewogICAgICAgIGNvbnN0IGVxID0gZXF1YXRpb25zW2tdOwogICAgICAgIGNvbnN0IGkgPSBib2RpZXMuaW5kZXhPZihlcS5iaSk7CiAgICAgICAgY29uc3QgaiA9IGJvZGllcy5pbmRleE9mKGVxLmJqKTsKICAgICAgICBjb25zdCBuaSA9IG5vZGVzW2ldOwogICAgICAgIGNvbnN0IG5qID0gbm9kZXNbal07CiAgICAgICAgbmkuY2hpbGRyZW4ucHVzaChuaik7CiAgICAgICAgbmkuZXFzLnB1c2goZXEpOwogICAgICAgIG5qLmNoaWxkcmVuLnB1c2gobmkpOwogICAgICAgIG5qLmVxcy5wdXNoKGVxKTsKICAgICAgfQoKICAgICAgbGV0IGNoaWxkOwogICAgICBsZXQgbiA9IDA7CiAgICAgIGxldCBlcXMgPSBTcGxpdFNvbHZlcl9zb2x2ZV9lcXM7CiAgICAgIHN1YnNvbHZlci50b2xlcmFuY2UgPSB0aGlzLnRvbGVyYW5jZTsKICAgICAgc3Vic29sdmVyLml0ZXJhdGlvbnMgPSB0aGlzLml0ZXJhdGlvbnM7CiAgICAgIGNvbnN0IGR1bW15V29ybGQgPSBTcGxpdFNvbHZlcl9zb2x2ZV9kdW1teVdvcmxkOwoKICAgICAgd2hpbGUgKGNoaWxkID0gZ2V0VW52aXNpdGVkTm9kZShub2RlcykpIHsKICAgICAgICBlcXMubGVuZ3RoID0gMDsKICAgICAgICBkdW1teVdvcmxkLmJvZGllcy5sZW5ndGggPSAwOwogICAgICAgIGJmcyhjaGlsZCwgdmlzaXRGdW5jLCBkdW1teVdvcmxkLmJvZGllcywgZXFzKTsKICAgICAgICBjb25zdCBOZXFzID0gZXFzLmxlbmd0aDsKICAgICAgICBlcXMgPSBlcXMuc29ydChzb3J0QnlJZCk7CgogICAgICAgIGZvciAobGV0IGkgPSAwOyBpICE9PSBOZXFzOyBpKyspIHsKICAgICAgICAgIHN1YnNvbHZlci5hZGRFcXVhdGlvbihlcXNbaV0pOwogICAgICAgIH0KCiAgICAgICAgc3Vic29sdmVyLnNvbHZlKGR0LCBkdW1teVdvcmxkKTsKICAgICAgICBzdWJzb2x2ZXIucmVtb3ZlQWxsRXF1YXRpb25zKCk7CiAgICAgICAgbisrOwogICAgICB9CgogICAgICByZXR1cm4gbjsKICAgIH0KCiAgfSAvLyBSZXR1cm5zIHRoZSBudW1iZXIgb2Ygc3Vic3lzdGVtcwoKICBjb25zdCBTcGxpdFNvbHZlcl9zb2x2ZV9ub2RlcyA9IFtdOyAvLyBBbGwgYWxsb2NhdGVkIG5vZGUgb2JqZWN0cwoKICBjb25zdCBTcGxpdFNvbHZlcl9zb2x2ZV9lcXMgPSBbXTsgLy8gVGVtcCBhcnJheQoKICBjb25zdCBTcGxpdFNvbHZlcl9zb2x2ZV9kdW1teVdvcmxkID0gewogICAgYm9kaWVzOiBbXQogIH07IC8vIFRlbXAgb2JqZWN0CgogIGNvbnN0IFNUQVRJQyA9IEJvZHkuU1RBVElDOwoKICBmdW5jdGlvbiBnZXRVbnZpc2l0ZWROb2RlKG5vZGVzKSB7CiAgICBjb25zdCBObm9kZXMgPSBub2Rlcy5sZW5ndGg7CgogICAgZm9yIChsZXQgaSA9IDA7IGkgIT09IE5ub2RlczsgaSsrKSB7CiAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTsKCiAgICAgIGlmICghbm9kZS52aXNpdGVkICYmICEobm9kZS5ib2R5LnR5cGUgJiBTVEFUSUMpKSB7CiAgICAgICAgcmV0dXJuIG5vZGU7CiAgICAgIH0KICAgIH0KCiAgICByZXR1cm4gZmFsc2U7CiAgfQoKICBjb25zdCBxdWV1ZSA9IFtdOwoKICBmdW5jdGlvbiBiZnMocm9vdCwgdmlzaXRGdW5jLCBiZHMsIGVxcykgewogICAgcXVldWUucHVzaChyb290KTsKICAgIHJvb3QudmlzaXRlZCA9IHRydWU7CiAgICB2aXNpdEZ1bmMocm9vdCwgYmRzLCBlcXMpOwoKICAgIHdoaWxlIChxdWV1ZS5sZW5ndGgpIHsKICAgICAgY29uc3Qgbm9kZSA9IHF1ZXVlLnBvcCgpOyAvLyBMb29wIG92ZXIgdW52aXNpdGVkIGNoaWxkIG5vZGVzCgogICAgICBsZXQgY2hpbGQ7CgogICAgICB3aGlsZSAoY2hpbGQgPSBnZXRVbnZpc2l0ZWROb2RlKG5vZGUuY2hpbGRyZW4pKSB7CiAgICAgICAgY2hpbGQudmlzaXRlZCA9IHRydWU7CiAgICAgICAgdmlzaXRGdW5jKGNoaWxkLCBiZHMsIGVxcyk7CiAgICAgICAgcXVldWUucHVzaChjaGlsZCk7CiAgICAgIH0KICAgIH0KICB9CgogIGZ1bmN0aW9uIHZpc2l0RnVuYyhub2RlLCBiZHMsIGVxcykgewogICAgYmRzLnB1c2gobm9kZS5ib2R5KTsKICAgIGNvbnN0IE5lcXMgPSBub2RlLmVxcy5sZW5ndGg7CgogICAgZm9yIChsZXQgaSA9IDA7IGkgIT09IE5lcXM7IGkrKykgewogICAgICBjb25zdCBlcSA9IG5vZGUuZXFzW2ldOwoKICAgICAgaWYgKCFlcXMuaW5jbHVkZXMoZXEpKSB7CiAgICAgICAgZXFzLnB1c2goZXEpOwogICAgICB9CiAgICB9CiAgfQoKICBmdW5jdGlvbiBzb3J0QnlJZChhLCBiKSB7CiAgICByZXR1cm4gYi5pZCAtIGEuaWQ7CiAgfQoKICAvKioKICAgKiBGb3IgcG9vbGluZyBvYmplY3RzIHRoYXQgY2FuIGJlIHJldXNlZC4KICAgKi8KICBjbGFzcyBQb29sIHsKICAgIGNvbnN0cnVjdG9yKCkgewogICAgICB0aGlzLm9iamVjdHMgPSBbXTsKICAgICAgdGhpcy50eXBlID0gT2JqZWN0OwogICAgfQoKICAgIC8qKgogICAgICogUmVsZWFzZSBhbiBvYmplY3QgYWZ0ZXIgdXNlCiAgICAgKi8KICAgIHJlbGVhc2UoKSB7CiAgICAgIGNvbnN0IE5hcmdzID0gYXJndW1lbnRzLmxlbmd0aDsKCiAgICAgIGZvciAobGV0IGkgPSAwOyBpICE9PSBOYXJnczsgaSsrKSB7CiAgICAgICAgdGhpcy5vYmplY3RzLnB1c2goaSA8IDAgfHwgYXJndW1lbnRzLmxlbmd0aCA8PSBpID8gdW5kZWZpbmVkIDogYXJndW1lbnRzW2ldKTsKICAgICAgfQoKICAgICAgcmV0dXJuIHRoaXM7CiAgICB9CiAgICAvKioKICAgICAqIEdldCBhbiBvYmplY3QKICAgICAqLwoKCiAgICBnZXQoKSB7CiAgICAgIGlmICh0aGlzLm9iamVjdHMubGVuZ3RoID09PSAwKSB7CiAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0T2JqZWN0KCk7CiAgICAgIH0gZWxzZSB7CiAgICAgICAgcmV0dXJuIHRoaXMub2JqZWN0cy5wb3AoKTsKICAgICAgfQogICAgfQogICAgLyoqCiAgICAgKiBDb25zdHJ1Y3QgYW4gb2JqZWN0LiBTaG91bGQgYmUgaW1wbGVtZW50ZWQgaW4gZWFjaCBzdWJjbGFzcy4KICAgICAqLwoKCiAgICBjb25zdHJ1Y3RPYmplY3QoKSB7CiAgICAgIHRocm93IG5ldyBFcnJvcignY29uc3RydWN0T2JqZWN0KCkgbm90IGltcGxlbWVudGVkIGluIHRoaXMgUG9vbCBzdWJjbGFzcyB5ZXQhJyk7CiAgICB9CiAgICAvKioKICAgICAqIEByZXR1cm4gU2VsZiwgZm9yIGNoYWluaW5nCiAgICAgKi8KCgogICAgcmVzaXplKHNpemUpIHsKICAgICAgY29uc3Qgb2JqZWN0cyA9IHRoaXMub2JqZWN0czsKCiAgICAgIHdoaWxlIChvYmplY3RzLmxlbmd0aCA+IHNpemUpIHsKICAgICAgICBvYmplY3RzLnBvcCgpOwogICAgICB9CgogICAgICB3aGlsZSAob2JqZWN0cy5sZW5ndGggPCBzaXplKSB7CiAgICAgICAgb2JqZWN0cy5wdXNoKHRoaXMuY29uc3RydWN0T2JqZWN0KCkpOwogICAgICB9CgogICAgICByZXR1cm4gdGhpczsKICAgIH0KCiAgfQoKICAvKioKICAgKiBWZWMzUG9vbAogICAqLwoKICBjbGFzcyBWZWMzUG9vbCBleHRlbmRzIFBvb2wgewogICAgY29uc3RydWN0b3IoKSB7CiAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7CiAgICAgIHRoaXMudHlwZSA9IFZlYzM7CiAgICB9CgogICAgLyoqCiAgICAgKiBDb25zdHJ1Y3QgYSB2ZWN0b3IKICAgICAqLwogICAgY29uc3RydWN0T2JqZWN0KCkgewogICAgICByZXR1cm4gbmV3IFZlYzMoKTsKICAgIH0KCiAgfQoKICAvLyBOYW1pbmcgcnVsZTogYmFzZWQgb2YgdGhlIG9yZGVyIGluIFNIQVBFX1RZUEVTLAogIC8vIHRoZSBmaXJzdCBwYXJ0IG9mIHRoZSBtZXRob2QgaXMgZm9ybWVkIGJ5IHRoZQogIC8vIHNoYXBlIHR5cGUgdGhhdCBjb21lcyBiZWZvcmUsIGluIHRoZSBzZWNvbmQgcGFydAogIC8vIHRoZXJlIGlzIHRoZSBzaGFwZSB0eXBlIHRoYXQgY29tZXMgYWZ0ZXIgaW4gdGhlIFNIQVBFX1RZUEVTIGxpc3QKICBjb25zdCBDT0xMSVNJT05fVFlQRVMgPSB7CiAgICBzcGhlcmVTcGhlcmU6IFNoYXBlLnR5cGVzLlNQSEVSRSwKICAgIHNwaGVyZVBsYW5lOiBTaGFwZS50eXBlcy5TUEhFUkUgfCBTaGFwZS50eXBlcy5QTEFORSwKICAgIGJveEJveDogU2hhcGUudHlwZXMuQk9YIHwgU2hhcGUudHlwZXMuQk9YLAogICAgc3BoZXJlQm94OiBTaGFwZS50eXBlcy5TUEhFUkUgfCBTaGFwZS50eXBlcy5CT1gsCiAgICBwbGFuZUJveDogU2hhcGUudHlwZXMuUExBTkUgfCBTaGFwZS50eXBlcy5CT1gsCiAgICBjb252ZXhDb252ZXg6IFNoYXBlLnR5cGVzLkNPTlZFWFBPTFlIRURST04sCiAgICBzcGhlcmVDb252ZXg6IFNoYXBlLnR5cGVzLlNQSEVSRSB8IFNoYXBlLnR5cGVzLkNPTlZFWFBPTFlIRURST04sCiAgICBwbGFuZUNvbnZleDogU2hhcGUudHlwZXMuUExBTkUgfCBTaGFwZS50eXBlcy5DT05WRVhQT0xZSEVEUk9OLAogICAgYm94Q29udmV4OiBTaGFwZS50eXBlcy5CT1ggfCBTaGFwZS50eXBlcy5DT05WRVhQT0xZSEVEUk9OLAogICAgc3BoZXJlSGVpZ2h0ZmllbGQ6IFNoYXBlLnR5cGVzLlNQSEVSRSB8IFNoYXBlLnR5cGVzLkhFSUdIVEZJRUxELAogICAgYm94SGVpZ2h0ZmllbGQ6IFNoYXBlLnR5cGVzLkJPWCB8IFNoYXBlLnR5cGVzLkhFSUdIVEZJRUxELAogICAgY29udmV4SGVpZ2h0ZmllbGQ6IFNoYXBlLnR5cGVzLkNPTlZFWFBPTFlIRURST04gfCBTaGFwZS50eXBlcy5IRUlHSFRGSUVMRCwKICAgIHNwaGVyZVBhcnRpY2xlOiBTaGFwZS50eXBlcy5QQVJUSUNMRSB8IFNoYXBlLnR5cGVzLlNQSEVSRSwKICAgIHBsYW5lUGFydGljbGU6IFNoYXBlLnR5cGVzLlBMQU5FIHwgU2hhcGUudHlwZXMuUEFSVElDTEUsCiAgICBib3hQYXJ0aWNsZTogU2hhcGUudHlwZXMuQk9YIHwgU2hhcGUudHlwZXMuUEFSVElDTEUsCiAgICBjb252ZXhQYXJ0aWNsZTogU2hhcGUudHlwZXMuUEFSVElDTEUgfCBTaGFwZS50eXBlcy5DT05WRVhQT0xZSEVEUk9OLAogICAgY3lsaW5kZXJDeWxpbmRlcjogU2hhcGUudHlwZXMuQ1lMSU5ERVIsCiAgICBzcGhlcmVDeWxpbmRlcjogU2hhcGUudHlwZXMuU1BIRVJFIHwgU2hhcGUudHlwZXMuQ1lMSU5ERVIsCiAgICBwbGFuZUN5bGluZGVyOiBTaGFwZS50eXBlcy5QTEFORSB8IFNoYXBlLnR5cGVzLkNZTElOREVSLAogICAgYm94Q3lsaW5kZXI6IFNoYXBlLnR5cGVzLkJPWCB8IFNoYXBlLnR5cGVzLkNZTElOREVSLAogICAgY29udmV4Q3lsaW5kZXI6IFNoYXBlLnR5cGVzLkNPTlZFWFBPTFlIRURST04gfCBTaGFwZS50eXBlcy5DWUxJTkRFUiwKICAgIGhlaWdodGZpZWxkQ3lsaW5kZXI6IFNoYXBlLnR5cGVzLkhFSUdIVEZJRUxEIHwgU2hhcGUudHlwZXMuQ1lMSU5ERVIsCiAgICBwYXJ0aWNsZUN5bGluZGVyOiBTaGFwZS50eXBlcy5QQVJUSUNMRSB8IFNoYXBlLnR5cGVzLkNZTElOREVSLAogICAgc3BoZXJlVHJpbWVzaDogU2hhcGUudHlwZXMuU1BIRVJFIHwgU2hhcGUudHlwZXMuVFJJTUVTSCwKICAgIHBsYW5lVHJpbWVzaDogU2hhcGUudHlwZXMuUExBTkUgfCBTaGFwZS50eXBlcy5UUklNRVNICiAgfTsKCiAgLyoqCiAgICogSGVscGVyIGNsYXNzIGZvciB0aGUgV29ybGQuIEdlbmVyYXRlcyBDb250YWN0RXF1YXRpb25zLgogICAqIEB0b2RvIFNwaGVyZS1Db252ZXhQb2x5aGVkcm9uIGNvbnRhY3RzCiAgICogQHRvZG8gQ29udGFjdCByZWR1Y3Rpb24KICAgKiBAdG9kbyBzaG91bGQgbW92ZSBtZXRob2RzIHRvIHByb3RvdHlwZQogICAqLwogIGNsYXNzIE5hcnJvd3BoYXNlIHsKICAgIC8qKgogICAgICogSW50ZXJuYWwgc3RvcmFnZSBvZiBwb29sZWQgY29udGFjdCBwb2ludHMuCiAgICAgKi8KCiAgICAvKioKICAgICAqIFBvb2xlZCB2ZWN0b3JzLgogICAgICovCiAgICBnZXQgW0NPTExJU0lPTl9UWVBFUy5zcGhlcmVTcGhlcmVdKCkgewogICAgICByZXR1cm4gdGhpcy5zcGhlcmVTcGhlcmU7CiAgICB9CgogICAgZ2V0IFtDT0xMSVNJT05fVFlQRVMuc3BoZXJlUGxhbmVdKCkgewogICAgICByZXR1cm4gdGhpcy5zcGhlcmVQbGFuZTsKICAgIH0KCiAgICBnZXQgW0NPTExJU0lPTl9UWVBFUy5ib3hCb3hdKCkgewogICAgICByZXR1cm4gdGhpcy5ib3hCb3g7CiAgICB9CgogICAgZ2V0IFtDT0xMSVNJT05fVFlQRVMuc3BoZXJlQm94XSgpIHsKICAgICAgcmV0dXJuIHRoaXMuc3BoZXJlQm94OwogICAgfQoKICAgIGdldCBbQ09MTElTSU9OX1RZUEVTLnBsYW5lQm94XSgpIHsKICAgICAgcmV0dXJuIHRoaXMucGxhbmVCb3g7CiAgICB9CgogICAgZ2V0IFtDT0xMSVNJT05fVFlQRVMuY29udmV4Q29udmV4XSgpIHsKICAgICAgcmV0dXJuIHRoaXMuY29udmV4Q29udmV4OwogICAgfQoKICAgIGdldCBbQ09MTElTSU9OX1RZUEVTLnNwaGVyZUNvbnZleF0oKSB7CiAgICAgIHJldHVybiB0aGlzLnNwaGVyZUNvbnZleDsKICAgIH0KCiAgICBnZXQgW0NPTExJU0lPTl9UWVBFUy5wbGFuZUNvbnZleF0oKSB7CiAgICAgIHJldHVybiB0aGlzLnBsYW5lQ29udmV4OwogICAgfQoKICAgIGdldCBbQ09MTElTSU9OX1RZUEVTLmJveENvbnZleF0oKSB7CiAgICAgIHJldHVybiB0aGlzLmJveENvbnZleDsKICAgIH0KCiAgICBnZXQgW0NPTExJU0lPTl9UWVBFUy5zcGhlcmVIZWlnaHRmaWVsZF0oKSB7CiAgICAgIHJldHVybiB0aGlzLnNwaGVyZUhlaWdodGZpZWxkOwogICAgfQoKICAgIGdldCBbQ09MTElTSU9OX1RZUEVTLmJveEhlaWdodGZpZWxkXSgpIHsKICAgICAgcmV0dXJuIHRoaXMuYm94SGVpZ2h0ZmllbGQ7CiAgICB9CgogICAgZ2V0IFtDT0xMSVNJT05fVFlQRVMuY29udmV4SGVpZ2h0ZmllbGRdKCkgewogICAgICByZXR1cm4gdGhpcy5jb252ZXhIZWlnaHRmaWVsZDsKICAgIH0KCiAgICBnZXQgW0NPTExJU0lPTl9UWVBFUy5zcGhlcmVQYXJ0aWNsZV0oKSB7CiAgICAgIHJldHVybiB0aGlzLnNwaGVyZVBhcnRpY2xlOwogICAgfQoKICAgIGdldCBbQ09MTElTSU9OX1RZUEVTLnBsYW5lUGFydGljbGVdKCkgewogICAgICByZXR1cm4gdGhpcy5wbGFuZVBhcnRpY2xlOwogICAgfQoKICAgIGdldCBbQ09MTElTSU9OX1RZUEVTLmJveFBhcnRpY2xlXSgpIHsKICAgICAgcmV0dXJuIHRoaXMuYm94UGFydGljbGU7CiAgICB9CgogICAgZ2V0IFtDT0xMSVNJT05fVFlQRVMuY29udmV4UGFydGljbGVdKCkgewogICAgICByZXR1cm4gdGhpcy5jb252ZXhQYXJ0aWNsZTsKICAgIH0KCiAgICBnZXQgW0NPTExJU0lPTl9UWVBFUy5jeWxpbmRlckN5bGluZGVyXSgpIHsKICAgICAgcmV0dXJuIHRoaXMuY29udmV4Q29udmV4OwogICAgfQoKICAgIGdldCBbQ09MTElTSU9OX1RZUEVTLnNwaGVyZUN5bGluZGVyXSgpIHsKICAgICAgcmV0dXJuIHRoaXMuc3BoZXJlQ29udmV4OwogICAgfQoKICAgIGdldCBbQ09MTElTSU9OX1RZUEVTLnBsYW5lQ3lsaW5kZXJdKCkgewogICAgICByZXR1cm4gdGhpcy5wbGFuZUNvbnZleDsKICAgIH0KCiAgICBnZXQgW0NPTExJU0lPTl9UWVBFUy5ib3hDeWxpbmRlcl0oKSB7CiAgICAgIHJldHVybiB0aGlzLmJveENvbnZleDsKICAgIH0KCiAgICBnZXQgW0NPTExJU0lPTl9UWVBFUy5jb252ZXhDeWxpbmRlcl0oKSB7CiAgICAgIHJldHVybiB0aGlzLmNvbnZleENvbnZleDsKICAgIH0KCiAgICBnZXQgW0NPTExJU0lPTl9UWVBFUy5oZWlnaHRmaWVsZEN5bGluZGVyXSgpIHsKICAgICAgcmV0dXJuIHRoaXMuaGVpZ2h0ZmllbGRDeWxpbmRlcjsKICAgIH0KCiAgICBnZXQgW0NPTExJU0lPTl9UWVBFUy5wYXJ0aWNsZUN5bGluZGVyXSgpIHsKICAgICAgcmV0dXJuIHRoaXMucGFydGljbGVDeWxpbmRlcjsKICAgIH0KCiAgICBnZXQgW0NPTExJU0lPTl9UWVBFUy5zcGhlcmVUcmltZXNoXSgpIHsKICAgICAgcmV0dXJuIHRoaXMuc3BoZXJlVHJpbWVzaDsKICAgIH0KCiAgICBnZXQgW0NPTExJU0lPTl9UWVBFUy5wbGFuZVRyaW1lc2hdKCkgewogICAgICByZXR1cm4gdGhpcy5wbGFuZVRyaW1lc2g7CiAgICB9IC8vIGdldCBbQ09MTElTSU9OX1RZUEVTLmNvbnZleFRyaW1lc2hdKCkgewogICAgLy8gICByZXR1cm4gdGhpcy5jb252ZXhUcmltZXNoCiAgICAvLyB9CgoKICAgIGNvbnN0cnVjdG9yKHdvcmxkKSB7CiAgICAgIHRoaXMuY29udGFjdFBvaW50UG9vbCA9IFtdOwogICAgICB0aGlzLmZyaWN0aW9uRXF1YXRpb25Qb29sID0gW107CiAgICAgIHRoaXMucmVzdWx0ID0gW107CiAgICAgIHRoaXMuZnJpY3Rpb25SZXN1bHQgPSBbXTsKICAgICAgdGhpcy52M3Bvb2wgPSBuZXcgVmVjM1Bvb2woKTsKICAgICAgdGhpcy53b3JsZCA9IHdvcmxkOwogICAgICB0aGlzLmN1cnJlbnRDb250YWN0TWF0ZXJpYWwgPSB3b3JsZC5kZWZhdWx0Q29udGFjdE1hdGVyaWFsOwogICAgICB0aGlzLmVuYWJsZUZyaWN0aW9uUmVkdWN0aW9uID0gZmFsc2U7CiAgICB9CiAgICAvKioKICAgICAqIE1ha2UgYSBjb250YWN0IG9iamVjdCwgYnkgdXNpbmcgdGhlIGludGVybmFsIHBvb2wgb3IgY3JlYXRpbmcgYSBuZXcgb25lLgogICAgICovCgoKICAgIGNyZWF0ZUNvbnRhY3RFcXVhdGlvbihiaSwgYmosIHNpLCBzaiwgb3ZlcnJpZGVTaGFwZUEsIG92ZXJyaWRlU2hhcGVCKSB7CiAgICAgIGxldCBjOwoKICAgICAgaWYgKHRoaXMuY29udGFjdFBvaW50UG9vbC5sZW5ndGgpIHsKICAgICAgICBjID0gdGhpcy5jb250YWN0UG9pbnRQb29sLnBvcCgpOwogICAgICAgIGMuYmkgPSBiaTsKICAgICAgICBjLmJqID0gYmo7CiAgICAgIH0gZWxzZSB7CiAgICAgICAgYyA9IG5ldyBDb250YWN0RXF1YXRpb24oYmksIGJqKTsKICAgICAgfQoKICAgICAgYy5lbmFibGVkID0gYmkuY29sbGlzaW9uUmVzcG9uc2UgJiYgYmouY29sbGlzaW9uUmVzcG9uc2UgJiYgc2kuY29sbGlzaW9uUmVzcG9uc2UgJiYgc2ouY29sbGlzaW9uUmVzcG9uc2U7CiAgICAgIGNvbnN0IGNtID0gdGhpcy5jdXJyZW50Q29udGFjdE1hdGVyaWFsOwogICAgICBjLnJlc3RpdHV0aW9uID0gY20ucmVzdGl0dXRpb247CiAgICAgIGMuc2V0U3Bvb2tQYXJhbXMoY20uY29udGFjdEVxdWF0aW9uU3RpZmZuZXNzLCBjbS5jb250YWN0RXF1YXRpb25SZWxheGF0aW9uLCB0aGlzLndvcmxkLmR0KTsKICAgICAgY29uc3QgbWF0QSA9IHNpLm1hdGVyaWFsIHx8IGJpLm1hdGVyaWFsOwogICAgICBjb25zdCBtYXRCID0gc2oubWF0ZXJpYWwgfHwgYmoubWF0ZXJpYWw7CgogICAgICBpZiAobWF0QSAmJiBtYXRCICYmIG1hdEEucmVzdGl0dXRpb24gPj0gMCAmJiBtYXRCLnJlc3RpdHV0aW9uID49IDApIHsKICAgICAgICBjLnJlc3RpdHV0aW9uID0gbWF0QS5yZXN0aXR1dGlvbiAqIG1hdEIucmVzdGl0dXRpb247CiAgICAgIH0KCiAgICAgIGMuc2kgPSBvdmVycmlkZVNoYXBlQSB8fCBzaTsKICAgICAgYy5zaiA9IG92ZXJyaWRlU2hhcGVCIHx8IHNqOwogICAgICByZXR1cm4gYzsKICAgIH0KCiAgICBjcmVhdGVGcmljdGlvbkVxdWF0aW9uc0Zyb21Db250YWN0KGNvbnRhY3RFcXVhdGlvbiwgb3V0QXJyYXkpIHsKICAgICAgY29uc3QgYm9keUEgPSBjb250YWN0RXF1YXRpb24uYmk7CiAgICAgIGNvbnN0IGJvZHlCID0gY29udGFjdEVxdWF0aW9uLmJqOwogICAgICBjb25zdCBzaGFwZUEgPSBjb250YWN0RXF1YXRpb24uc2k7CiAgICAgIGNvbnN0IHNoYXBlQiA9IGNvbnRhY3RFcXVhdGlvbi5zajsKICAgICAgY29uc3Qgd29ybGQgPSB0aGlzLndvcmxkOwogICAgICBjb25zdCBjbSA9IHRoaXMuY3VycmVudENvbnRhY3RNYXRlcmlhbDsgLy8gSWYgZnJpY3Rpb24gb3IgcmVzdGl0dXRpb24gd2VyZSBzcGVjaWZpZWQgaW4gdGhlIG1hdGVyaWFsLCB1c2UgdGhlbQoKICAgICAgbGV0IGZyaWN0aW9uID0gY20uZnJpY3Rpb247CiAgICAgIGNvbnN0IG1hdEEgPSBzaGFwZUEubWF0ZXJpYWwgfHwgYm9keUEubWF0ZXJpYWw7CiAgICAgIGNvbnN0IG1hdEIgPSBzaGFwZUIubWF0ZXJpYWwgfHwgYm9keUIubWF0ZXJpYWw7CgogICAgICBpZiAobWF0QSAmJiBtYXRCICYmIG1hdEEuZnJpY3Rpb24gPj0gMCAmJiBtYXRCLmZyaWN0aW9uID49IDApIHsKICAgICAgICBmcmljdGlvbiA9IG1hdEEuZnJpY3Rpb24gKiBtYXRCLmZyaWN0aW9uOwogICAgICB9CgogICAgICBpZiAoZnJpY3Rpb24gPiAwKSB7CiAgICAgICAgLy8gQ3JlYXRlIDIgdGFuZ2VudCBlcXVhdGlvbnMKICAgICAgICBjb25zdCBtdWcgPSBmcmljdGlvbiAqIHdvcmxkLmdyYXZpdHkubGVuZ3RoKCk7CiAgICAgICAgbGV0IHJlZHVjZWRNYXNzID0gYm9keUEuaW52TWFzcyArIGJvZHlCLmludk1hc3M7CgogICAgICAgIGlmIChyZWR1Y2VkTWFzcyA+IDApIHsKICAgICAgICAgIHJlZHVjZWRNYXNzID0gMSAvIHJlZHVjZWRNYXNzOwogICAgICAgIH0KCiAgICAgICAgY29uc3QgcG9vbCA9IHRoaXMuZnJpY3Rpb25FcXVhdGlvblBvb2w7CiAgICAgICAgY29uc3QgYzEgPSBwb29sLmxlbmd0aCA/IHBvb2wucG9wKCkgOiBuZXcgRnJpY3Rpb25FcXVhdGlvbihib2R5QSwgYm9keUIsIG11ZyAqIHJlZHVjZWRNYXNzKTsKICAgICAgICBjb25zdCBjMiA9IHBvb2wubGVuZ3RoID8gcG9vbC5wb3AoKSA6IG5ldyBGcmljdGlvbkVxdWF0aW9uKGJvZHlBLCBib2R5QiwgbXVnICogcmVkdWNlZE1hc3MpOwogICAgICAgIGMxLmJpID0gYzIuYmkgPSBib2R5QTsKICAgICAgICBjMS5iaiA9IGMyLmJqID0gYm9keUI7CiAgICAgICAgYzEubWluRm9yY2UgPSBjMi5taW5Gb3JjZSA9IC1tdWcgKiByZWR1Y2VkTWFzczsKICAgICAgICBjMS5tYXhGb3JjZSA9IGMyLm1heEZvcmNlID0gbXVnICogcmVkdWNlZE1hc3M7IC8vIENvcHkgb3ZlciB0aGUgcmVsYXRpdmUgdmVjdG9ycwoKICAgICAgICBjMS5yaS5jb3B5KGNvbnRhY3RFcXVhdGlvbi5yaSk7CiAgICAgICAgYzEucmouY29weShjb250YWN0RXF1YXRpb24ucmopOwogICAgICAgIGMyLnJpLmNvcHkoY29udGFjdEVxdWF0aW9uLnJpKTsKICAgICAgICBjMi5yai5jb3B5KGNvbnRhY3RFcXVhdGlvbi5yaik7IC8vIENvbnN0cnVjdCB0YW5nZW50cwoKICAgICAgICBjb250YWN0RXF1YXRpb24ubmkudGFuZ2VudHMoYzEudCwgYzIudCk7IC8vIFNldCBzcG9vayBwYXJhbXMKCiAgICAgICAgYzEuc2V0U3Bvb2tQYXJhbXMoY20uZnJpY3Rpb25FcXVhdGlvblN0aWZmbmVzcywgY20uZnJpY3Rpb25FcXVhdGlvblJlbGF4YXRpb24sIHdvcmxkLmR0KTsKICAgICAgICBjMi5zZXRTcG9va1BhcmFtcyhjbS5mcmljdGlvbkVxdWF0aW9uU3RpZmZuZXNzLCBjbS5mcmljdGlvbkVxdWF0aW9uUmVsYXhhdGlvbiwgd29ybGQuZHQpOwogICAgICAgIGMxLmVuYWJsZWQgPSBjMi5lbmFibGVkID0gY29udGFjdEVxdWF0aW9uLmVuYWJsZWQ7CiAgICAgICAgb3V0QXJyYXkucHVzaChjMSwgYzIpOwogICAgICAgIHJldHVybiB0cnVlOwogICAgICB9CgogICAgICByZXR1cm4gZmFsc2U7CiAgICB9CiAgICAvKioKICAgICAqIFRha2UgdGhlIGF2ZXJhZ2UgTiBsYXRlc3QgY29udGFjdCBwb2ludCBvbiB0aGUgcGxhbmUuCiAgICAgKi8KCgogICAgY3JlYXRlRnJpY3Rpb25Gcm9tQXZlcmFnZShudW1Db250YWN0cykgewogICAgICAvLyBUaGUgbGFzdCBjb250YWN0RXF1YXRpb24KICAgICAgbGV0IGMgPSB0aGlzLnJlc3VsdFt0aGlzLnJlc3VsdC5sZW5ndGggLSAxXTsgLy8gQ3JlYXRlIHRoZSByZXN1bHQ6IHR3byAiYXZlcmFnZSIgZnJpY3Rpb24gZXF1YXRpb25zCgogICAgICBpZiAoIXRoaXMuY3JlYXRlRnJpY3Rpb25FcXVhdGlvbnNGcm9tQ29udGFjdChjLCB0aGlzLmZyaWN0aW9uUmVzdWx0KSB8fCBudW1Db250YWN0cyA9PT0gMSkgewogICAgICAgIHJldHVybjsKICAgICAgfQoKICAgICAgY29uc3QgZjEgPSB0aGlzLmZyaWN0aW9uUmVzdWx0W3RoaXMuZnJpY3Rpb25SZXN1bHQubGVuZ3RoIC0gMl07CiAgICAgIGNvbnN0IGYyID0gdGhpcy5mcmljdGlvblJlc3VsdFt0aGlzLmZyaWN0aW9uUmVzdWx0Lmxlbmd0aCAtIDFdOwogICAgICBhdmVyYWdlTm9ybWFsLnNldFplcm8oKTsKICAgICAgYXZlcmFnZUNvbnRhY3RQb2ludEEuc2V0WmVybygpOwogICAgICBhdmVyYWdlQ29udGFjdFBvaW50Qi5zZXRaZXJvKCk7CiAgICAgIGNvbnN0IGJvZHlBID0gYy5iaTsKICAgICAgYy5iajsKCiAgICAgIGZvciAobGV0IGkgPSAwOyBpICE9PSBudW1Db250YWN0czsgaSsrKSB7CiAgICAgICAgYyA9IHRoaXMucmVzdWx0W3RoaXMucmVzdWx0Lmxlbmd0aCAtIDEgLSBpXTsKCiAgICAgICAgaWYgKGMuYmkgIT09IGJvZHlBKSB7CiAgICAgICAgICBhdmVyYWdlTm9ybWFsLnZhZGQoYy5uaSwgYXZlcmFnZU5vcm1hbCk7CiAgICAgICAgICBhdmVyYWdlQ29udGFjdFBvaW50QS52YWRkKGMucmksIGF2ZXJhZ2VDb250YWN0UG9pbnRBKTsKICAgICAgICAgIGF2ZXJhZ2VDb250YWN0UG9pbnRCLnZhZGQoYy5yaiwgYXZlcmFnZUNvbnRhY3RQb2ludEIpOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICBhdmVyYWdlTm9ybWFsLnZzdWIoYy5uaSwgYXZlcmFnZU5vcm1hbCk7CiAgICAgICAgICBhdmVyYWdlQ29udGFjdFBvaW50QS52YWRkKGMucmosIGF2ZXJhZ2VDb250YWN0UG9pbnRBKTsKICAgICAgICAgIGF2ZXJhZ2VDb250YWN0UG9pbnRCLnZhZGQoYy5yaSwgYXZlcmFnZUNvbnRhY3RQb2ludEIpOwogICAgICAgIH0KICAgICAgfQoKICAgICAgY29uc3QgaW52TnVtQ29udGFjdHMgPSAxIC8gbnVtQ29udGFjdHM7CiAgICAgIGF2ZXJhZ2VDb250YWN0UG9pbnRBLnNjYWxlKGludk51bUNvbnRhY3RzLCBmMS5yaSk7CiAgICAgIGF2ZXJhZ2VDb250YWN0UG9pbnRCLnNjYWxlKGludk51bUNvbnRhY3RzLCBmMS5yaik7CiAgICAgIGYyLnJpLmNvcHkoZjEucmkpOyAvLyBTaG91bGQgYmUgdGhlIHNhbWUKCiAgICAgIGYyLnJqLmNvcHkoZjEucmopOwogICAgICBhdmVyYWdlTm9ybWFsLm5vcm1hbGl6ZSgpOwogICAgICBhdmVyYWdlTm9ybWFsLnRhbmdlbnRzKGYxLnQsIGYyLnQpOyAvLyByZXR1cm4gZXE7CiAgICB9CiAgICAvKioKICAgICAqIEdlbmVyYXRlIGFsbCBjb250YWN0cyBiZXR3ZWVuIGEgbGlzdCBvZiBib2R5IHBhaXJzCiAgICAgKiBAcGFyYW0gcDEgQXJyYXkgb2YgYm9keSBpbmRpY2VzCiAgICAgKiBAcGFyYW0gcDIgQXJyYXkgb2YgYm9keSBpbmRpY2VzCiAgICAgKiBAcGFyYW0gcmVzdWx0IEFycmF5IHRvIHN0b3JlIGdlbmVyYXRlZCBjb250YWN0cwogICAgICogQHBhcmFtIG9sZGNvbnRhY3RzIE9wdGlvbmFsLiBBcnJheSBvZiByZXVzYWJsZSBjb250YWN0IG9iamVjdHMKICAgICAqLwoKCiAgICBnZXRDb250YWN0cyhwMSwgcDIsIHdvcmxkLCByZXN1bHQsIG9sZGNvbnRhY3RzLCBmcmljdGlvblJlc3VsdCwgZnJpY3Rpb25Qb29sKSB7CiAgICAgIC8vIFNhdmUgb2xkIGNvbnRhY3Qgb2JqZWN0cwogICAgICB0aGlzLmNvbnRhY3RQb2ludFBvb2wgPSBvbGRjb250YWN0czsKICAgICAgdGhpcy5mcmljdGlvbkVxdWF0aW9uUG9vbCA9IGZyaWN0aW9uUG9vbDsKICAgICAgdGhpcy5yZXN1bHQgPSByZXN1bHQ7CiAgICAgIHRoaXMuZnJpY3Rpb25SZXN1bHQgPSBmcmljdGlvblJlc3VsdDsKICAgICAgY29uc3QgcWkgPSB0bXBRdWF0MTsKICAgICAgY29uc3QgcWogPSB0bXBRdWF0MjsKICAgICAgY29uc3QgeGkgPSB0bXBWZWMxOwogICAgICBjb25zdCB4aiA9IHRtcFZlYzI7CgogICAgICBmb3IgKGxldCBrID0gMCwgTiA9IHAxLmxlbmd0aDsgayAhPT0gTjsgaysrKSB7CiAgICAgICAgLy8gR2V0IGN1cnJlbnQgY29sbGlzaW9uIGJvZGllcwogICAgICAgIGNvbnN0IGJpID0gcDFba107CiAgICAgICAgY29uc3QgYmogPSBwMltrXTsgLy8gR2V0IGNvbnRhY3QgbWF0ZXJpYWwKCiAgICAgICAgbGV0IGJvZHlDb250YWN0TWF0ZXJpYWwgPSBudWxsOwoKICAgICAgICBpZiAoYmkubWF0ZXJpYWwgJiYgYmoubWF0ZXJpYWwpIHsKICAgICAgICAgIGJvZHlDb250YWN0TWF0ZXJpYWwgPSB3b3JsZC5nZXRDb250YWN0TWF0ZXJpYWwoYmkubWF0ZXJpYWwsIGJqLm1hdGVyaWFsKSB8fCBudWxsOwogICAgICAgIH0KCiAgICAgICAgY29uc3QganVzdFRlc3QgPSBiaS50eXBlICYgQm9keS5LSU5FTUFUSUMgJiYgYmoudHlwZSAmIEJvZHkuU1RBVElDIHx8IGJpLnR5cGUgJiBCb2R5LlNUQVRJQyAmJiBiai50eXBlICYgQm9keS5LSU5FTUFUSUMgfHwgYmkudHlwZSAmIEJvZHkuS0lORU1BVElDICYmIGJqLnR5cGUgJiBCb2R5LktJTkVNQVRJQzsKCiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiaS5zaGFwZXMubGVuZ3RoOyBpKyspIHsKICAgICAgICAgIGJpLnF1YXRlcm5pb24ubXVsdChiaS5zaGFwZU9yaWVudGF0aW9uc1tpXSwgcWkpOwogICAgICAgICAgYmkucXVhdGVybmlvbi52bXVsdChiaS5zaGFwZU9mZnNldHNbaV0sIHhpKTsKICAgICAgICAgIHhpLnZhZGQoYmkucG9zaXRpb24sIHhpKTsKICAgICAgICAgIGNvbnN0IHNpID0gYmkuc2hhcGVzW2ldOwoKICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYmouc2hhcGVzLmxlbmd0aDsgaisrKSB7CiAgICAgICAgICAgIC8vIENvbXB1dGUgd29ybGQgdHJhbnNmb3JtIG9mIHNoYXBlcwogICAgICAgICAgICBiai5xdWF0ZXJuaW9uLm11bHQoYmouc2hhcGVPcmllbnRhdGlvbnNbal0sIHFqKTsKICAgICAgICAgICAgYmoucXVhdGVybmlvbi52bXVsdChiai5zaGFwZU9mZnNldHNbal0sIHhqKTsKICAgICAgICAgICAgeGoudmFkZChiai5wb3NpdGlvbiwgeGopOwogICAgICAgICAgICBjb25zdCBzaiA9IGJqLnNoYXBlc1tqXTsKCiAgICAgICAgICAgIGlmICghKHNpLmNvbGxpc2lvbkZpbHRlck1hc2sgJiBzai5jb2xsaXNpb25GaWx0ZXJHcm91cCAmJiBzai5jb2xsaXNpb25GaWx0ZXJNYXNrICYgc2kuY29sbGlzaW9uRmlsdGVyR3JvdXApKSB7CiAgICAgICAgICAgICAgY29udGludWU7CiAgICAgICAgICAgIH0KCiAgICAgICAgICAgIGlmICh4aS5kaXN0YW5jZVRvKHhqKSA+IHNpLmJvdW5kaW5nU3BoZXJlUmFkaXVzICsgc2ouYm91bmRpbmdTcGhlcmVSYWRpdXMpIHsKICAgICAgICAgICAgICBjb250aW51ZTsKICAgICAgICAgICAgfSAvLyBHZXQgY29sbGlzaW9uIG1hdGVyaWFsCgoKICAgICAgICAgICAgbGV0IHNoYXBlQ29udGFjdE1hdGVyaWFsID0gbnVsbDsKCiAgICAgICAgICAgIGlmIChzaS5tYXRlcmlhbCAmJiBzai5tYXRlcmlhbCkgewogICAgICAgICAgICAgIHNoYXBlQ29udGFjdE1hdGVyaWFsID0gd29ybGQuZ2V0Q29udGFjdE1hdGVyaWFsKHNpLm1hdGVyaWFsLCBzai5tYXRlcmlhbCkgfHwgbnVsbDsKICAgICAgICAgICAgfQoKICAgICAgICAgICAgdGhpcy5jdXJyZW50Q29udGFjdE1hdGVyaWFsID0gc2hhcGVDb250YWN0TWF0ZXJpYWwgfHwgYm9keUNvbnRhY3RNYXRlcmlhbCB8fCB3b3JsZC5kZWZhdWx0Q29udGFjdE1hdGVyaWFsOyAvLyBHZXQgY29udGFjdHMKCiAgICAgICAgICAgIGNvbnN0IHJlc29sdmVySW5kZXggPSBzaS50eXBlIHwgc2oudHlwZTsKICAgICAgICAgICAgY29uc3QgcmVzb2x2ZXIgPSB0aGlzW3Jlc29sdmVySW5kZXhdOwoKICAgICAgICAgICAgaWYgKHJlc29sdmVyKSB7CiAgICAgICAgICAgICAgbGV0IHJldHZhbCA9IGZhbHNlOyAvLyBUTyBETzogaW52ZXN0aWdhdGUgd2h5IHNwaGVyZVBhcnRpY2xlIGFuZCBjb252ZXhQYXJ0aWNsZQogICAgICAgICAgICAgIC8vIHJlc29sdmVycyBleHBlY3Qgc2kgYW5kIHNqIHNoYXBlcyB0byBiZSBpbiByZXZlcnNlIG9yZGVyCiAgICAgICAgICAgICAgLy8gKGkuZS4gbGFyZ2VyIGludGVnZXIgdmFsdWUgdHlwZSBmaXJzdCBpbnN0ZWFkIG9mIHNtYWxsZXIgZmlyc3QpCgogICAgICAgICAgICAgIGlmIChzaS50eXBlIDwgc2oudHlwZSkgewogICAgICAgICAgICAgICAgcmV0dmFsID0gcmVzb2x2ZXIuY2FsbCh0aGlzLCBzaSwgc2osIHhpLCB4aiwgcWksIHFqLCBiaSwgYmosIHNpLCBzaiwganVzdFRlc3QpOwogICAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgICByZXR2YWwgPSByZXNvbHZlci5jYWxsKHRoaXMsIHNqLCBzaSwgeGosIHhpLCBxaiwgcWksIGJqLCBiaSwgc2ksIHNqLCBqdXN0VGVzdCk7CiAgICAgICAgICAgICAgfQoKICAgICAgICAgICAgICBpZiAocmV0dmFsICYmIGp1c3RUZXN0KSB7CiAgICAgICAgICAgICAgICAvLyBSZWdpc3RlciBvdmVybGFwCiAgICAgICAgICAgICAgICB3b3JsZC5zaGFwZU92ZXJsYXBLZWVwZXIuc2V0KHNpLmlkLCBzai5pZCk7CiAgICAgICAgICAgICAgICB3b3JsZC5ib2R5T3ZlcmxhcEtlZXBlci5zZXQoYmkuaWQsIGJqLmlkKTsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgIH0KICAgICAgICB9CiAgICAgIH0KICAgIH0KCiAgICBzcGhlcmVTcGhlcmUoc2ksIHNqLCB4aSwgeGosIHFpLCBxaiwgYmksIGJqLCByc2ksIHJzaiwganVzdFRlc3QpIHsKICAgICAgaWYgKGp1c3RUZXN0KSB7CiAgICAgICAgcmV0dXJuIHhpLmRpc3RhbmNlU3F1YXJlZCh4aikgPCAoc2kucmFkaXVzICsgc2oucmFkaXVzKSAqKiAyOwogICAgICB9IC8vIFdlIHdpbGwgaGF2ZSBvbmx5IG9uZSBjb250YWN0IGluIHRoaXMgY2FzZQoKCiAgICAgIGNvbnN0IGNvbnRhY3RFcSA9IHRoaXMuY3JlYXRlQ29udGFjdEVxdWF0aW9uKGJpLCBiaiwgc2ksIHNqLCByc2ksIHJzaik7IC8vIENvbnRhY3Qgbm9ybWFsCgogICAgICB4ai52c3ViKHhpLCBjb250YWN0RXEubmkpOwogICAgICBjb250YWN0RXEubmkubm9ybWFsaXplKCk7IC8vIENvbnRhY3QgcG9pbnQgbG9jYXRpb25zCgogICAgICBjb250YWN0RXEucmkuY29weShjb250YWN0RXEubmkpOwogICAgICBjb250YWN0RXEucmouY29weShjb250YWN0RXEubmkpOwogICAgICBjb250YWN0RXEucmkuc2NhbGUoc2kucmFkaXVzLCBjb250YWN0RXEucmkpOwogICAgICBjb250YWN0RXEucmouc2NhbGUoLXNqLnJhZGl1cywgY29udGFjdEVxLnJqKTsKICAgICAgY29udGFjdEVxLnJpLnZhZGQoeGksIGNvbnRhY3RFcS5yaSk7CiAgICAgIGNvbnRhY3RFcS5yaS52c3ViKGJpLnBvc2l0aW9uLCBjb250YWN0RXEucmkpOwogICAgICBjb250YWN0RXEucmoudmFkZCh4aiwgY29udGFjdEVxLnJqKTsKICAgICAgY29udGFjdEVxLnJqLnZzdWIoYmoucG9zaXRpb24sIGNvbnRhY3RFcS5yaik7CiAgICAgIHRoaXMucmVzdWx0LnB1c2goY29udGFjdEVxKTsKICAgICAgdGhpcy5jcmVhdGVGcmljdGlvbkVxdWF0aW9uc0Zyb21Db250YWN0KGNvbnRhY3RFcSwgdGhpcy5mcmljdGlvblJlc3VsdCk7CiAgICB9CgogICAgc3BoZXJlUGxhbmUoc2ksIHNqLCB4aSwgeGosIHFpLCBxaiwgYmksIGJqLCByc2ksIHJzaiwganVzdFRlc3QpIHsKICAgICAgLy8gV2Ugd2lsbCBoYXZlIG9uZSBjb250YWN0IGluIHRoaXMgY2FzZQogICAgICBjb25zdCByID0gdGhpcy5jcmVhdGVDb250YWN0RXF1YXRpb24oYmksIGJqLCBzaSwgc2osIHJzaSwgcnNqKTsgLy8gQ29udGFjdCBub3JtYWwKCiAgICAgIHIubmkuc2V0KDAsIDAsIDEpOwogICAgICBxai52bXVsdChyLm5pLCByLm5pKTsKICAgICAgci5uaS5uZWdhdGUoci5uaSk7IC8vIGJvZHkgaSBpcyB0aGUgc3BoZXJlLCBmbGlwIG5vcm1hbAoKICAgICAgci5uaS5ub3JtYWxpemUoKTsgLy8gTmVlZGVkPwogICAgICAvLyBWZWN0b3IgZnJvbSBzcGhlcmUgY2VudGVyIHRvIGNvbnRhY3QgcG9pbnQKCiAgICAgIHIubmkuc2NhbGUoc2kucmFkaXVzLCByLnJpKTsgLy8gUHJvamVjdCBkb3duIHNwaGVyZSBvbiBwbGFuZQoKICAgICAgeGkudnN1Yih4aiwgcG9pbnRfb25fcGxhbmVfdG9fc3BoZXJlKTsKICAgICAgci5uaS5zY2FsZShyLm5pLmRvdChwb2ludF9vbl9wbGFuZV90b19zcGhlcmUpLCBwbGFuZV90b19zcGhlcmVfb3J0aG8pOwogICAgICBwb2ludF9vbl9wbGFuZV90b19zcGhlcmUudnN1YihwbGFuZV90b19zcGhlcmVfb3J0aG8sIHIucmopOyAvLyBUaGUgc3BoZXJlIHBvc2l0aW9uIHByb2plY3RlZCB0byBwbGFuZQoKICAgICAgaWYgKC1wb2ludF9vbl9wbGFuZV90b19zcGhlcmUuZG90KHIubmkpIDw9IHNpLnJhZGl1cykgewogICAgICAgIGlmIChqdXN0VGVzdCkgewogICAgICAgICAgcmV0dXJuIHRydWU7CiAgICAgICAgfSAvLyBNYWtlIGl0IHJlbGF0aXZlIHRvIHRoZSBib2R5CgoKICAgICAgICBjb25zdCByaSA9IHIucmk7CiAgICAgICAgY29uc3QgcmogPSByLnJqOwogICAgICAgIHJpLnZhZGQoeGksIHJpKTsKICAgICAgICByaS52c3ViKGJpLnBvc2l0aW9uLCByaSk7CiAgICAgICAgcmoudmFkZCh4aiwgcmopOwogICAgICAgIHJqLnZzdWIoYmoucG9zaXRpb24sIHJqKTsKICAgICAgICB0aGlzLnJlc3VsdC5wdXNoKHIpOwogICAgICAgIHRoaXMuY3JlYXRlRnJpY3Rpb25FcXVhdGlvbnNGcm9tQ29udGFjdChyLCB0aGlzLmZyaWN0aW9uUmVzdWx0KTsKICAgICAgfQogICAgfQoKICAgIGJveEJveChzaSwgc2osIHhpLCB4aiwgcWksIHFqLCBiaSwgYmosIHJzaSwgcnNqLCBqdXN0VGVzdCkgewogICAgICBzaS5jb252ZXhQb2x5aGVkcm9uUmVwcmVzZW50YXRpb24ubWF0ZXJpYWwgPSBzaS5tYXRlcmlhbDsKICAgICAgc2ouY29udmV4UG9seWhlZHJvblJlcHJlc2VudGF0aW9uLm1hdGVyaWFsID0gc2oubWF0ZXJpYWw7CiAgICAgIHNpLmNvbnZleFBvbHloZWRyb25SZXByZXNlbnRhdGlvbi5jb2xsaXNpb25SZXNwb25zZSA9IHNpLmNvbGxpc2lvblJlc3BvbnNlOwogICAgICBzai5jb252ZXhQb2x5aGVkcm9uUmVwcmVzZW50YXRpb24uY29sbGlzaW9uUmVzcG9uc2UgPSBzai5jb2xsaXNpb25SZXNwb25zZTsKICAgICAgcmV0dXJuIHRoaXMuY29udmV4Q29udmV4KHNpLmNvbnZleFBvbHloZWRyb25SZXByZXNlbnRhdGlvbiwgc2ouY29udmV4UG9seWhlZHJvblJlcHJlc2VudGF0aW9uLCB4aSwgeGosIHFpLCBxaiwgYmksIGJqLCBzaSwgc2osIGp1c3RUZXN0KTsKICAgIH0KCiAgICBzcGhlcmVCb3goc2ksIHNqLCB4aSwgeGosIHFpLCBxaiwgYmksIGJqLCByc2ksIHJzaiwganVzdFRlc3QpIHsKICAgICAgY29uc3QgdjNwb29sID0gdGhpcy52M3Bvb2w7IC8vIHdlIHJlZmVyIHRvIHRoZSBib3ggYXMgYm9keSBqCgogICAgICBjb25zdCBzaWRlcyA9IHNwaGVyZUJveF9zaWRlczsKICAgICAgeGkudnN1Yih4aiwgYm94X3RvX3NwaGVyZSk7CiAgICAgIHNqLmdldFNpZGVOb3JtYWxzKHNpZGVzLCBxaik7CiAgICAgIGNvbnN0IFIgPSBzaS5yYWRpdXM7CgogICAgICBsZXQgZm91bmQgPSBmYWxzZTsgLy8gU3RvcmUgdGhlIHJlc3VsdGluZyBzaWRlIHBlbmV0cmF0aW9uIGluZm8KCiAgICAgIGNvbnN0IHNpZGVfbnMgPSBzcGhlcmVCb3hfc2lkZV9uczsKICAgICAgY29uc3Qgc2lkZV9uczEgPSBzcGhlcmVCb3hfc2lkZV9uczE7CiAgICAgIGNvbnN0IHNpZGVfbnMyID0gc3BoZXJlQm94X3NpZGVfbnMyOwogICAgICBsZXQgc2lkZV9oID0gbnVsbDsKICAgICAgbGV0IHNpZGVfcGVuZXRyYXRpb25zID0gMDsKICAgICAgbGV0IHNpZGVfZG90MSA9IDA7CiAgICAgIGxldCBzaWRlX2RvdDIgPSAwOwogICAgICBsZXQgc2lkZV9kaXN0YW5jZSA9IG51bGw7CgogICAgICBmb3IgKGxldCBpZHggPSAwLCBuc2lkZXMgPSBzaWRlcy5sZW5ndGg7IGlkeCAhPT0gbnNpZGVzICYmIGZvdW5kID09PSBmYWxzZTsgaWR4KyspIHsKICAgICAgICAvLyBHZXQgdGhlIHBsYW5lIHNpZGUgbm9ybWFsIChucykKICAgICAgICBjb25zdCBucyA9IHNwaGVyZUJveF9uczsKICAgICAgICBucy5jb3B5KHNpZGVzW2lkeF0pOwogICAgICAgIGNvbnN0IGggPSBucy5sZW5ndGgoKTsKICAgICAgICBucy5ub3JtYWxpemUoKTsgLy8gVGhlIG5vcm1hbC9kaXN0YW5jZSBkb3QgcHJvZHVjdCB0ZWxscyB3aGljaCBzaWRlIG9mIHRoZSBwbGFuZSB3ZSBhcmUKCiAgICAgICAgY29uc3QgZG90ID0gYm94X3RvX3NwaGVyZS5kb3QobnMpOwoKICAgICAgICBpZiAoZG90IDwgaCArIFIgJiYgZG90ID4gMCkgewogICAgICAgICAgLy8gSW50ZXJzZWN0cyBwbGFuZS4gTm93IGNoZWNrIHRoZSBvdGhlciB0d28gZGltZW5zaW9ucwogICAgICAgICAgY29uc3QgbnMxID0gc3BoZXJlQm94X25zMTsKICAgICAgICAgIGNvbnN0IG5zMiA9IHNwaGVyZUJveF9uczI7CiAgICAgICAgICBuczEuY29weShzaWRlc1soaWR4ICsgMSkgJSAzXSk7CiAgICAgICAgICBuczIuY29weShzaWRlc1soaWR4ICsgMikgJSAzXSk7CiAgICAgICAgICBjb25zdCBoMSA9IG5zMS5sZW5ndGgoKTsKICAgICAgICAgIGNvbnN0IGgyID0gbnMyLmxlbmd0aCgpOwogICAgICAgICAgbnMxLm5vcm1hbGl6ZSgpOwogICAgICAgICAgbnMyLm5vcm1hbGl6ZSgpOwogICAgICAgICAgY29uc3QgZG90MSA9IGJveF90b19zcGhlcmUuZG90KG5zMSk7CiAgICAgICAgICBjb25zdCBkb3QyID0gYm94X3RvX3NwaGVyZS5kb3QobnMyKTsKCiAgICAgICAgICBpZiAoZG90MSA8IGgxICYmIGRvdDEgPiAtaDEgJiYgZG90MiA8IGgyICYmIGRvdDIgPiAtaDIpIHsKICAgICAgICAgICAgY29uc3QgZGlzdCA9IE1hdGguYWJzKGRvdCAtIGggLSBSKTsKCiAgICAgICAgICAgIGlmIChzaWRlX2Rpc3RhbmNlID09PSBudWxsIHx8IGRpc3QgPCBzaWRlX2Rpc3RhbmNlKSB7CiAgICAgICAgICAgICAgc2lkZV9kaXN0YW5jZSA9IGRpc3Q7CiAgICAgICAgICAgICAgc2lkZV9kb3QxID0gZG90MTsKICAgICAgICAgICAgICBzaWRlX2RvdDIgPSBkb3QyOwogICAgICAgICAgICAgIHNpZGVfaCA9IGg7CiAgICAgICAgICAgICAgc2lkZV9ucy5jb3B5KG5zKTsKICAgICAgICAgICAgICBzaWRlX25zMS5jb3B5KG5zMSk7CiAgICAgICAgICAgICAgc2lkZV9uczIuY29weShuczIpOwogICAgICAgICAgICAgIHNpZGVfcGVuZXRyYXRpb25zKys7CgogICAgICAgICAgICAgIGlmIChqdXN0VGVzdCkgewogICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICB9CiAgICAgICAgICB9CiAgICAgICAgfQogICAgICB9CgogICAgICBpZiAoc2lkZV9wZW5ldHJhdGlvbnMpIHsKICAgICAgICBmb3VuZCA9IHRydWU7CiAgICAgICAgY29uc3QgciA9IHRoaXMuY3JlYXRlQ29udGFjdEVxdWF0aW9uKGJpLCBiaiwgc2ksIHNqLCByc2ksIHJzaik7CiAgICAgICAgc2lkZV9ucy5zY2FsZSgtUiwgci5yaSk7IC8vIFNwaGVyZSByCgogICAgICAgIHIubmkuY29weShzaWRlX25zKTsKICAgICAgICByLm5pLm5lZ2F0ZShyLm5pKTsgLy8gTm9ybWFsIHNob3VsZCBiZSBvdXQgb2Ygc3BoZXJlCgogICAgICAgIHNpZGVfbnMuc2NhbGUoc2lkZV9oLCBzaWRlX25zKTsKICAgICAgICBzaWRlX25zMS5zY2FsZShzaWRlX2RvdDEsIHNpZGVfbnMxKTsKICAgICAgICBzaWRlX25zLnZhZGQoc2lkZV9uczEsIHNpZGVfbnMpOwogICAgICAgIHNpZGVfbnMyLnNjYWxlKHNpZGVfZG90Miwgc2lkZV9uczIpOwogICAgICAgIHNpZGVfbnMudmFkZChzaWRlX25zMiwgci5yaik7IC8vIE1ha2UgcmVsYXRpdmUgdG8gYm9kaWVzCgogICAgICAgIHIucmkudmFkZCh4aSwgci5yaSk7CiAgICAgICAgci5yaS52c3ViKGJpLnBvc2l0aW9uLCByLnJpKTsKICAgICAgICByLnJqLnZhZGQoeGosIHIucmopOwogICAgICAgIHIucmoudnN1Yihiai5wb3NpdGlvbiwgci5yaik7CiAgICAgICAgdGhpcy5yZXN1bHQucHVzaChyKTsKICAgICAgICB0aGlzLmNyZWF0ZUZyaWN0aW9uRXF1YXRpb25zRnJvbUNvbnRhY3QociwgdGhpcy5mcmljdGlvblJlc3VsdCk7CiAgICAgIH0gLy8gQ2hlY2sgY29ybmVycwoKCiAgICAgIGxldCByaiA9IHYzcG9vbC5nZXQoKTsKICAgICAgY29uc3Qgc3BoZXJlX3RvX2Nvcm5lciA9IHNwaGVyZUJveF9zcGhlcmVfdG9fY29ybmVyOwoKICAgICAgZm9yIChsZXQgaiA9IDA7IGogIT09IDIgJiYgIWZvdW5kOyBqKyspIHsKICAgICAgICBmb3IgKGxldCBrID0gMDsgayAhPT0gMiAmJiAhZm91bmQ7IGsrKykgewogICAgICAgICAgZm9yIChsZXQgbCA9IDA7IGwgIT09IDIgJiYgIWZvdW5kOyBsKyspIHsKICAgICAgICAgICAgcmouc2V0KDAsIDAsIDApOwoKICAgICAgICAgICAgaWYgKGopIHsKICAgICAgICAgICAgICByai52YWRkKHNpZGVzWzBdLCByaik7CiAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgcmoudnN1YihzaWRlc1swXSwgcmopOwogICAgICAgICAgICB9CgogICAgICAgICAgICBpZiAoaykgewogICAgICAgICAgICAgIHJqLnZhZGQoc2lkZXNbMV0sIHJqKTsKICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICByai52c3ViKHNpZGVzWzFdLCByaik7CiAgICAgICAgICAgIH0KCiAgICAgICAgICAgIGlmIChsKSB7CiAgICAgICAgICAgICAgcmoudmFkZChzaWRlc1syXSwgcmopOwogICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgIHJqLnZzdWIoc2lkZXNbMl0sIHJqKTsKICAgICAgICAgICAgfSAvLyBXb3JsZCBwb3NpdGlvbiBvZiBjb3JuZXIKCgogICAgICAgICAgICB4ai52YWRkKHJqLCBzcGhlcmVfdG9fY29ybmVyKTsKICAgICAgICAgICAgc3BoZXJlX3RvX2Nvcm5lci52c3ViKHhpLCBzcGhlcmVfdG9fY29ybmVyKTsKCiAgICAgICAgICAgIGlmIChzcGhlcmVfdG9fY29ybmVyLmxlbmd0aFNxdWFyZWQoKSA8IFIgKiBSKSB7CiAgICAgICAgICAgICAgaWYgKGp1c3RUZXN0KSB7CiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTsKICAgICAgICAgICAgICB9CgogICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTsKICAgICAgICAgICAgICBjb25zdCByID0gdGhpcy5jcmVhdGVDb250YWN0RXF1YXRpb24oYmksIGJqLCBzaSwgc2osIHJzaSwgcnNqKTsKICAgICAgICAgICAgICByLnJpLmNvcHkoc3BoZXJlX3RvX2Nvcm5lcik7CiAgICAgICAgICAgICAgci5yaS5ub3JtYWxpemUoKTsKICAgICAgICAgICAgICByLm5pLmNvcHkoci5yaSk7CiAgICAgICAgICAgICAgci5yaS5zY2FsZShSLCByLnJpKTsKICAgICAgICAgICAgICByLnJqLmNvcHkocmopOyAvLyBNYWtlIHJlbGF0aXZlIHRvIGJvZGllcwoKICAgICAgICAgICAgICByLnJpLnZhZGQoeGksIHIucmkpOwogICAgICAgICAgICAgIHIucmkudnN1YihiaS5wb3NpdGlvbiwgci5yaSk7CiAgICAgICAgICAgICAgci5yai52YWRkKHhqLCByLnJqKTsKICAgICAgICAgICAgICByLnJqLnZzdWIoYmoucG9zaXRpb24sIHIucmopOwogICAgICAgICAgICAgIHRoaXMucmVzdWx0LnB1c2gocik7CiAgICAgICAgICAgICAgdGhpcy5jcmVhdGVGcmljdGlvbkVxdWF0aW9uc0Zyb21Db250YWN0KHIsIHRoaXMuZnJpY3Rpb25SZXN1bHQpOwogICAgICAgICAgICB9CiAgICAgICAgICB9CiAgICAgICAgfQogICAgICB9CgogICAgICB2M3Bvb2wucmVsZWFzZShyaik7CiAgICAgIHJqID0gbnVsbDsgLy8gQ2hlY2sgZWRnZXMKCiAgICAgIGNvbnN0IGVkZ2VUYW5nZW50ID0gdjNwb29sLmdldCgpOwogICAgICBjb25zdCBlZGdlQ2VudGVyID0gdjNwb29sLmdldCgpOwogICAgICBjb25zdCByID0gdjNwb29sLmdldCgpOyAvLyByID0gZWRnZSBjZW50ZXIgdG8gc3BoZXJlIGNlbnRlcgoKICAgICAgY29uc3Qgb3J0aG9nb25hbCA9IHYzcG9vbC5nZXQoKTsKICAgICAgY29uc3QgZGlzdCA9IHYzcG9vbC5nZXQoKTsKICAgICAgY29uc3QgTnNpZGVzID0gc2lkZXMubGVuZ3RoOwoKICAgICAgZm9yIChsZXQgaiA9IDA7IGogIT09IE5zaWRlcyAmJiAhZm91bmQ7IGorKykgewogICAgICAgIGZvciAobGV0IGsgPSAwOyBrICE9PSBOc2lkZXMgJiYgIWZvdW5kOyBrKyspIHsKICAgICAgICAgIGlmIChqICUgMyAhPT0gayAlIDMpIHsKICAgICAgICAgICAgLy8gR2V0IGVkZ2UgdGFuZ2VudAogICAgICAgICAgICBzaWRlc1trXS5jcm9zcyhzaWRlc1tqXSwgZWRnZVRhbmdlbnQpOwogICAgICAgICAgICBlZGdlVGFuZ2VudC5ub3JtYWxpemUoKTsKICAgICAgICAgICAgc2lkZXNbal0udmFkZChzaWRlc1trXSwgZWRnZUNlbnRlcik7CiAgICAgICAgICAgIHIuY29weSh4aSk7CiAgICAgICAgICAgIHIudnN1YihlZGdlQ2VudGVyLCByKTsKICAgICAgICAgICAgci52c3ViKHhqLCByKTsKICAgICAgICAgICAgY29uc3Qgb3J0aG9ub3JtID0gci5kb3QoZWRnZVRhbmdlbnQpOyAvLyBkaXN0YW5jZSBmcm9tIGVkZ2UgY2VudGVyIHRvIHNwaGVyZSBjZW50ZXIgaW4gdGhlIHRhbmdlbnQgZGlyZWN0aW9uCgogICAgICAgICAgICBlZGdlVGFuZ2VudC5zY2FsZShvcnRob25vcm0sIG9ydGhvZ29uYWwpOyAvLyBWZWN0b3IgZnJvbSBlZGdlIGNlbnRlciB0byBzcGhlcmUgY2VudGVyIGluIHRoZSB0YW5nZW50IGRpcmVjdGlvbgogICAgICAgICAgICAvLyBGaW5kIHRoZSB0aGlyZCBzaWRlIG9ydGhvZ29uYWwgdG8gdGhpcyBvbmUKCiAgICAgICAgICAgIGxldCBsID0gMDsKCiAgICAgICAgICAgIHdoaWxlIChsID09PSBqICUgMyB8fCBsID09PSBrICUgMykgewogICAgICAgICAgICAgIGwrKzsKICAgICAgICAgICAgfSAvLyB2ZWMgZnJvbSBlZGdlIGNlbnRlciB0byBzcGhlcmUgcHJvamVjdGVkIHRvIHRoZSBwbGFuZSBvcnRob2dvbmFsIHRvIHRoZSBlZGdlIHRhbmdlbnQKCgogICAgICAgICAgICBkaXN0LmNvcHkoeGkpOwogICAgICAgICAgICBkaXN0LnZzdWIob3J0aG9nb25hbCwgZGlzdCk7CiAgICAgICAgICAgIGRpc3QudnN1YihlZGdlQ2VudGVyLCBkaXN0KTsKICAgICAgICAgICAgZGlzdC52c3ViKHhqLCBkaXN0KTsgLy8gRGlzdGFuY2VzIGluIHRhbmdlbnQgZGlyZWN0aW9uIGFuZCBkaXN0YW5jZSBpbiB0aGUgcGxhbmUgb3J0aG9nb25hbCB0byBpdAoKICAgICAgICAgICAgY29uc3QgdGRpc3QgPSBNYXRoLmFicyhvcnRob25vcm0pOwogICAgICAgICAgICBjb25zdCBuZGlzdCA9IGRpc3QubGVuZ3RoKCk7CgogICAgICAgICAgICBpZiAodGRpc3QgPCBzaWRlc1tsXS5sZW5ndGgoKSAmJiBuZGlzdCA8IFIpIHsKICAgICAgICAgICAgICBpZiAoanVzdFRlc3QpIHsKICAgICAgICAgICAgICAgIHJldHVybiB0cnVlOwogICAgICAgICAgICAgIH0KCiAgICAgICAgICAgICAgZm91bmQgPSB0cnVlOwogICAgICAgICAgICAgIGNvbnN0IHJlcyA9IHRoaXMuY3JlYXRlQ29udGFjdEVxdWF0aW9uKGJpLCBiaiwgc2ksIHNqLCByc2ksIHJzaik7CiAgICAgICAgICAgICAgZWRnZUNlbnRlci52YWRkKG9ydGhvZ29uYWwsIHJlcy5yaik7IC8vIGJveCByagoKICAgICAgICAgICAgICByZXMucmouY29weShyZXMucmopOwogICAgICAgICAgICAgIGRpc3QubmVnYXRlKHJlcy5uaSk7CiAgICAgICAgICAgICAgcmVzLm5pLm5vcm1hbGl6ZSgpOwogICAgICAgICAgICAgIHJlcy5yaS5jb3B5KHJlcy5yaik7CiAgICAgICAgICAgICAgcmVzLnJpLnZhZGQoeGosIHJlcy5yaSk7CiAgICAgICAgICAgICAgcmVzLnJpLnZzdWIoeGksIHJlcy5yaSk7CiAgICAgICAgICAgICAgcmVzLnJpLm5vcm1hbGl6ZSgpOwogICAgICAgICAgICAgIHJlcy5yaS5zY2FsZShSLCByZXMucmkpOyAvLyBNYWtlIHJlbGF0aXZlIHRvIGJvZGllcwoKICAgICAgICAgICAgICByZXMucmkudmFkZCh4aSwgcmVzLnJpKTsKICAgICAgICAgICAgICByZXMucmkudnN1YihiaS5wb3NpdGlvbiwgcmVzLnJpKTsKICAgICAgICAgICAgICByZXMucmoudmFkZCh4aiwgcmVzLnJqKTsKICAgICAgICAgICAgICByZXMucmoudnN1Yihiai5wb3NpdGlvbiwgcmVzLnJqKTsKICAgICAgICAgICAgICB0aGlzLnJlc3VsdC5wdXNoKHJlcyk7CiAgICAgICAgICAgICAgdGhpcy5jcmVhdGVGcmljdGlvbkVxdWF0aW9uc0Zyb21Db250YWN0KHJlcywgdGhpcy5mcmljdGlvblJlc3VsdCk7CiAgICAgICAgICAgIH0KICAgICAgICAgIH0KICAgICAgICB9CiAgICAgIH0KCiAgICAgIHYzcG9vbC5yZWxlYXNlKGVkZ2VUYW5nZW50LCBlZGdlQ2VudGVyLCByLCBvcnRob2dvbmFsLCBkaXN0KTsKICAgIH0KCiAgICBwbGFuZUJveChzaSwgc2osIHhpLCB4aiwgcWksIHFqLCBiaSwgYmosIHJzaSwgcnNqLCBqdXN0VGVzdCkgewogICAgICBzai5jb252ZXhQb2x5aGVkcm9uUmVwcmVzZW50YXRpb24ubWF0ZXJpYWwgPSBzai5tYXRlcmlhbDsKICAgICAgc2ouY29udmV4UG9seWhlZHJvblJlcHJlc2VudGF0aW9uLmNvbGxpc2lvblJlc3BvbnNlID0gc2ouY29sbGlzaW9uUmVzcG9uc2U7CiAgICAgIHNqLmNvbnZleFBvbHloZWRyb25SZXByZXNlbnRhdGlvbi5pZCA9IHNqLmlkOwogICAgICByZXR1cm4gdGhpcy5wbGFuZUNvbnZleChzaSwgc2ouY29udmV4UG9seWhlZHJvblJlcHJlc2VudGF0aW9uLCB4aSwgeGosIHFpLCBxaiwgYmksIGJqLCBzaSwgc2osIGp1c3RUZXN0KTsKICAgIH0KCiAgICBjb252ZXhDb252ZXgoc2ksIHNqLCB4aSwgeGosIHFpLCBxaiwgYmksIGJqLCByc2ksIHJzaiwganVzdFRlc3QsIGZhY2VMaXN0QSwgZmFjZUxpc3RCKSB7CiAgICAgIGNvbnN0IHNlcEF4aXMgPSBjb252ZXhDb252ZXhfc2VwQXhpczsKCiAgICAgIGlmICh4aS5kaXN0YW5jZVRvKHhqKSA+IHNpLmJvdW5kaW5nU3BoZXJlUmFkaXVzICsgc2ouYm91bmRpbmdTcGhlcmVSYWRpdXMpIHsKICAgICAgICByZXR1cm47CiAgICAgIH0KCiAgICAgIGlmIChzaS5maW5kU2VwYXJhdGluZ0F4aXMoc2osIHhpLCBxaSwgeGosIHFqLCBzZXBBeGlzLCBmYWNlTGlzdEEsIGZhY2VMaXN0QikpIHsKICAgICAgICBjb25zdCByZXMgPSBbXTsKICAgICAgICBjb25zdCBxID0gY29udmV4Q29udmV4X3E7CiAgICAgICAgc2kuY2xpcEFnYWluc3RIdWxsKHhpLCBxaSwgc2osIHhqLCBxaiwgc2VwQXhpcywgLTEwMCwgMTAwLCByZXMpOwogICAgICAgIGxldCBudW1Db250YWN0cyA9IDA7CgogICAgICAgIGZvciAobGV0IGogPSAwOyBqICE9PSByZXMubGVuZ3RoOyBqKyspIHsKICAgICAgICAgIGlmIChqdXN0VGVzdCkgewogICAgICAgICAgICByZXR1cm4gdHJ1ZTsKICAgICAgICAgIH0KCiAgICAgICAgICBjb25zdCByID0gdGhpcy5jcmVhdGVDb250YWN0RXF1YXRpb24oYmksIGJqLCBzaSwgc2osIHJzaSwgcnNqKTsKICAgICAgICAgIGNvbnN0IHJpID0gci5yaTsKICAgICAgICAgIGNvbnN0IHJqID0gci5yajsKICAgICAgICAgIHNlcEF4aXMubmVnYXRlKHIubmkpOwogICAgICAgICAgcmVzW2pdLm5vcm1hbC5uZWdhdGUocSk7CiAgICAgICAgICBxLnNjYWxlKHJlc1tqXS5kZXB0aCwgcSk7CiAgICAgICAgICByZXNbal0ucG9pbnQudmFkZChxLCByaSk7CiAgICAgICAgICByai5jb3B5KHJlc1tqXS5wb2ludCk7IC8vIENvbnRhY3QgcG9pbnRzIGFyZSBpbiB3b3JsZCBjb29yZGluYXRlcy4gVHJhbnNmb3JtIGJhY2sgdG8gcmVsYXRpdmUKCiAgICAgICAgICByaS52c3ViKHhpLCByaSk7CiAgICAgICAgICByai52c3ViKHhqLCByaik7IC8vIE1ha2UgcmVsYXRpdmUgdG8gYm9kaWVzCgogICAgICAgICAgcmkudmFkZCh4aSwgcmkpOwogICAgICAgICAgcmkudnN1YihiaS5wb3NpdGlvbiwgcmkpOwogICAgICAgICAgcmoudmFkZCh4aiwgcmopOwogICAgICAgICAgcmoudnN1Yihiai5wb3NpdGlvbiwgcmopOwogICAgICAgICAgdGhpcy5yZXN1bHQucHVzaChyKTsKICAgICAgICAgIG51bUNvbnRhY3RzKys7CgogICAgICAgICAgaWYgKCF0aGlzLmVuYWJsZUZyaWN0aW9uUmVkdWN0aW9uKSB7CiAgICAgICAgICAgIHRoaXMuY3JlYXRlRnJpY3Rpb25FcXVhdGlvbnNGcm9tQ29udGFjdChyLCB0aGlzLmZyaWN0aW9uUmVzdWx0KTsKICAgICAgICAgIH0KICAgICAgICB9CgogICAgICAgIGlmICh0aGlzLmVuYWJsZUZyaWN0aW9uUmVkdWN0aW9uICYmIG51bUNvbnRhY3RzKSB7CiAgICAgICAgICB0aGlzLmNyZWF0ZUZyaWN0aW9uRnJvbUF2ZXJhZ2UobnVtQ29udGFjdHMpOwogICAgICAgIH0KICAgICAgfQogICAgfQoKICAgIHNwaGVyZUNvbnZleChzaSwgc2osIHhpLCB4aiwgcWksIHFqLCBiaSwgYmosIHJzaSwgcnNqLCBqdXN0VGVzdCkgewogICAgICBjb25zdCB2M3Bvb2wgPSB0aGlzLnYzcG9vbDsKICAgICAgeGkudnN1Yih4aiwgY29udmV4X3RvX3NwaGVyZSk7CiAgICAgIGNvbnN0IG5vcm1hbHMgPSBzai5mYWNlTm9ybWFsczsKICAgICAgY29uc3QgZmFjZXMgPSBzai5mYWNlczsKICAgICAgY29uc3QgdmVydHMgPSBzai52ZXJ0aWNlczsKICAgICAgY29uc3QgUiA9IHNpLnJhZGl1czsKICAgICAgLy8gICAgIHJldHVybjsKICAgICAgLy8gfQoKICAgICAgbGV0IGZvdW5kID0gZmFsc2U7IC8vIENoZWNrIGNvcm5lcnMKCiAgICAgIGZvciAobGV0IGkgPSAwOyBpICE9PSB2ZXJ0cy5sZW5ndGg7IGkrKykgewogICAgICAgIGNvbnN0IHYgPSB2ZXJ0c1tpXTsgLy8gV29ybGQgcG9zaXRpb24gb2YgY29ybmVyCgogICAgICAgIGNvbnN0IHdvcmxkQ29ybmVyID0gc3BoZXJlQ29udmV4X3dvcmxkQ29ybmVyOwogICAgICAgIHFqLnZtdWx0KHYsIHdvcmxkQ29ybmVyKTsKICAgICAgICB4ai52YWRkKHdvcmxkQ29ybmVyLCB3b3JsZENvcm5lcik7CiAgICAgICAgY29uc3Qgc3BoZXJlX3RvX2Nvcm5lciA9IHNwaGVyZUNvbnZleF9zcGhlcmVUb0Nvcm5lcjsKICAgICAgICB3b3JsZENvcm5lci52c3ViKHhpLCBzcGhlcmVfdG9fY29ybmVyKTsKCiAgICAgICAgaWYgKHNwaGVyZV90b19jb3JuZXIubGVuZ3RoU3F1YXJlZCgpIDwgUiAqIFIpIHsKICAgICAgICAgIGlmIChqdXN0VGVzdCkgewogICAgICAgICAgICByZXR1cm4gdHJ1ZTsKICAgICAgICAgIH0KCiAgICAgICAgICBmb3VuZCA9IHRydWU7CiAgICAgICAgICBjb25zdCByID0gdGhpcy5jcmVhdGVDb250YWN0RXF1YXRpb24oYmksIGJqLCBzaSwgc2osIHJzaSwgcnNqKTsKICAgICAgICAgIHIucmkuY29weShzcGhlcmVfdG9fY29ybmVyKTsKICAgICAgICAgIHIucmkubm9ybWFsaXplKCk7CiAgICAgICAgICByLm5pLmNvcHkoci5yaSk7CiAgICAgICAgICByLnJpLnNjYWxlKFIsIHIucmkpOwogICAgICAgICAgd29ybGRDb3JuZXIudnN1Yih4aiwgci5yaik7IC8vIFNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYm9keS4KCiAgICAgICAgICByLnJpLnZhZGQoeGksIHIucmkpOwogICAgICAgICAgci5yaS52c3ViKGJpLnBvc2l0aW9uLCByLnJpKTsgLy8gU2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBib2R5LgoKICAgICAgICAgIHIucmoudmFkZCh4aiwgci5yaik7CiAgICAgICAgICByLnJqLnZzdWIoYmoucG9zaXRpb24sIHIucmopOwogICAgICAgICAgdGhpcy5yZXN1bHQucHVzaChyKTsKICAgICAgICAgIHRoaXMuY3JlYXRlRnJpY3Rpb25FcXVhdGlvbnNGcm9tQ29udGFjdChyLCB0aGlzLmZyaWN0aW9uUmVzdWx0KTsKICAgICAgICAgIHJldHVybjsKICAgICAgICB9CiAgICAgIH0gLy8gQ2hlY2sgc2lkZSAocGxhbmUpIGludGVyc2VjdGlvbnMKCgogICAgICBmb3IgKGxldCBpID0gMCwgbmZhY2VzID0gZmFjZXMubGVuZ3RoOyBpICE9PSBuZmFjZXMgJiYgZm91bmQgPT09IGZhbHNlOyBpKyspIHsKICAgICAgICBjb25zdCBub3JtYWwgPSBub3JtYWxzW2ldOwogICAgICAgIGNvbnN0IGZhY2UgPSBmYWNlc1tpXTsgLy8gR2V0IHdvcmxkLXRyYW5zZm9ybWVkIG5vcm1hbCBvZiB0aGUgZmFjZQoKICAgICAgICBjb25zdCB3b3JsZE5vcm1hbCA9IHNwaGVyZUNvbnZleF93b3JsZE5vcm1hbDsKICAgICAgICBxai52bXVsdChub3JtYWwsIHdvcmxkTm9ybWFsKTsgLy8gR2V0IGEgd29ybGQgdmVydGV4IGZyb20gdGhlIGZhY2UKCiAgICAgICAgY29uc3Qgd29ybGRQb2ludCA9IHNwaGVyZUNvbnZleF93b3JsZFBvaW50OwogICAgICAgIHFqLnZtdWx0KHZlcnRzW2ZhY2VbMF1dLCB3b3JsZFBvaW50KTsKICAgICAgICB3b3JsZFBvaW50LnZhZGQoeGosIHdvcmxkUG9pbnQpOyAvLyBHZXQgYSBwb2ludCBvbiB0aGUgc3BoZXJlLCBjbG9zZXN0IHRvIHRoZSBmYWNlIG5vcm1hbAoKICAgICAgICBjb25zdCB3b3JsZFNwaGVyZVBvaW50Q2xvc2VzdFRvUGxhbmUgPSBzcGhlcmVDb252ZXhfd29ybGRTcGhlcmVQb2ludENsb3Nlc3RUb1BsYW5lOwogICAgICAgIHdvcmxkTm9ybWFsLnNjYWxlKC1SLCB3b3JsZFNwaGVyZVBvaW50Q2xvc2VzdFRvUGxhbmUpOwogICAgICAgIHhpLnZhZGQod29ybGRTcGhlcmVQb2ludENsb3Nlc3RUb1BsYW5lLCB3b3JsZFNwaGVyZVBvaW50Q2xvc2VzdFRvUGxhbmUpOyAvLyBWZWN0b3IgZnJvbSBhIGZhY2UgcG9pbnQgdG8gdGhlIGNsb3Nlc3QgcG9pbnQgb24gdGhlIHNwaGVyZQoKICAgICAgICBjb25zdCBwZW5ldHJhdGlvblZlYyA9IHNwaGVyZUNvbnZleF9wZW5ldHJhdGlvblZlYzsKICAgICAgICB3b3JsZFNwaGVyZVBvaW50Q2xvc2VzdFRvUGxhbmUudnN1Yih3b3JsZFBvaW50LCBwZW5ldHJhdGlvblZlYyk7IC8vIFRoZSBwZW5ldHJhdGlvbi4gTmVnYXRpdmUgdmFsdWUgbWVhbnMgb3ZlcmxhcC4KCiAgICAgICAgY29uc3QgcGVuZXRyYXRpb24gPSBwZW5ldHJhdGlvblZlYy5kb3Qod29ybGROb3JtYWwpOwogICAgICAgIGNvbnN0IHdvcmxkUG9pbnRUb1NwaGVyZSA9IHNwaGVyZUNvbnZleF9zcGhlcmVUb1dvcmxkUG9pbnQ7CiAgICAgICAgeGkudnN1Yih3b3JsZFBvaW50LCB3b3JsZFBvaW50VG9TcGhlcmUpOwoKICAgICAgICBpZiAocGVuZXRyYXRpb24gPCAwICYmIHdvcmxkUG9pbnRUb1NwaGVyZS5kb3Qod29ybGROb3JtYWwpID4gMCkgewogICAgICAgICAgLy8gSW50ZXJzZWN0cyBwbGFuZS4gTm93IGNoZWNrIGlmIHRoZSBzcGhlcmUgaXMgaW5zaWRlIHRoZSBmYWNlIHBvbHlnb24KICAgICAgICAgIGNvbnN0IGZhY2VWZXJ0cyA9IFtdOyAvLyBGYWNlIHZlcnRpY2VzLCBpbiB3b3JsZCBjb29yZHMKCiAgICAgICAgICBmb3IgKGxldCBqID0gMCwgTnZlcnRzID0gZmFjZS5sZW5ndGg7IGogIT09IE52ZXJ0czsgaisrKSB7CiAgICAgICAgICAgIGNvbnN0IHdvcmxkVmVydGV4ID0gdjNwb29sLmdldCgpOwogICAgICAgICAgICBxai52bXVsdCh2ZXJ0c1tmYWNlW2pdXSwgd29ybGRWZXJ0ZXgpOwogICAgICAgICAgICB4ai52YWRkKHdvcmxkVmVydGV4LCB3b3JsZFZlcnRleCk7CiAgICAgICAgICAgIGZhY2VWZXJ0cy5wdXNoKHdvcmxkVmVydGV4KTsKICAgICAgICAgIH0KCiAgICAgICAgICBpZiAocG9pbnRJblBvbHlnb24oZmFjZVZlcnRzLCB3b3JsZE5vcm1hbCwgeGkpKSB7CiAgICAgICAgICAgIC8vIElzIHRoZSBzcGhlcmUgY2VudGVyIGluIHRoZSBmYWNlIHBvbHlnb24/CiAgICAgICAgICAgIGlmIChqdXN0VGVzdCkgewogICAgICAgICAgICAgIHJldHVybiB0cnVlOwogICAgICAgICAgICB9CgogICAgICAgICAgICBmb3VuZCA9IHRydWU7CiAgICAgICAgICAgIGNvbnN0IHIgPSB0aGlzLmNyZWF0ZUNvbnRhY3RFcXVhdGlvbihiaSwgYmosIHNpLCBzaiwgcnNpLCByc2opOwogICAgICAgICAgICB3b3JsZE5vcm1hbC5zY2FsZSgtUiwgci5yaSk7IC8vIENvbnRhY3Qgb2Zmc2V0LCBmcm9tIHNwaGVyZSBjZW50ZXIgdG8gY29udGFjdAoKICAgICAgICAgICAgd29ybGROb3JtYWwubmVnYXRlKHIubmkpOyAvLyBOb3JtYWwgcG9pbnRpbmcgb3V0IG9mIHNwaGVyZQoKICAgICAgICAgICAgY29uc3QgcGVuZXRyYXRpb25WZWMyID0gdjNwb29sLmdldCgpOwogICAgICAgICAgICB3b3JsZE5vcm1hbC5zY2FsZSgtcGVuZXRyYXRpb24sIHBlbmV0cmF0aW9uVmVjMik7CiAgICAgICAgICAgIGNvbnN0IHBlbmV0cmF0aW9uU3BoZXJlUG9pbnQgPSB2M3Bvb2wuZ2V0KCk7CiAgICAgICAgICAgIHdvcmxkTm9ybWFsLnNjYWxlKC1SLCBwZW5ldHJhdGlvblNwaGVyZVBvaW50KTsgLy94aS52c3ViKHhqKS52YWRkKHBlbmV0cmF0aW9uU3BoZXJlUG9pbnQpLnZhZGQocGVuZXRyYXRpb25WZWMyICwgci5yaik7CgogICAgICAgICAgICB4aS52c3ViKHhqLCByLnJqKTsKICAgICAgICAgICAgci5yai52YWRkKHBlbmV0cmF0aW9uU3BoZXJlUG9pbnQsIHIucmopOwogICAgICAgICAgICByLnJqLnZhZGQocGVuZXRyYXRpb25WZWMyLCByLnJqKTsgLy8gU2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBib2R5LgoKICAgICAgICAgICAgci5yai52YWRkKHhqLCByLnJqKTsKICAgICAgICAgICAgci5yai52c3ViKGJqLnBvc2l0aW9uLCByLnJqKTsgLy8gU2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBib2R5LgoKICAgICAgICAgICAgci5yaS52YWRkKHhpLCByLnJpKTsKICAgICAgICAgICAgci5yaS52c3ViKGJpLnBvc2l0aW9uLCByLnJpKTsKICAgICAgICAgICAgdjNwb29sLnJlbGVhc2UocGVuZXRyYXRpb25WZWMyKTsKICAgICAgICAgICAgdjNwb29sLnJlbGVhc2UocGVuZXRyYXRpb25TcGhlcmVQb2ludCk7CiAgICAgICAgICAgIHRoaXMucmVzdWx0LnB1c2gocik7CiAgICAgICAgICAgIHRoaXMuY3JlYXRlRnJpY3Rpb25FcXVhdGlvbnNGcm9tQ29udGFjdChyLCB0aGlzLmZyaWN0aW9uUmVzdWx0KTsgLy8gUmVsZWFzZSB3b3JsZCB2ZXJ0aWNlcwoKICAgICAgICAgICAgZm9yIChsZXQgaiA9IDAsIE5mYWNldmVydHMgPSBmYWNlVmVydHMubGVuZ3RoOyBqICE9PSBOZmFjZXZlcnRzOyBqKyspIHsKICAgICAgICAgICAgICB2M3Bvb2wucmVsZWFzZShmYWNlVmVydHNbal0pOwogICAgICAgICAgICB9CgogICAgICAgICAgICByZXR1cm47IC8vIFdlIG9ubHkgZXhwZWN0ICpvbmUqIGZhY2UgY29udGFjdAogICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgLy8gRWRnZT8KICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogIT09IGZhY2UubGVuZ3RoOyBqKyspIHsKICAgICAgICAgICAgICAvLyBHZXQgdHdvIHdvcmxkIHRyYW5zZm9ybWVkIHZlcnRpY2VzCiAgICAgICAgICAgICAgY29uc3QgdjEgPSB2M3Bvb2wuZ2V0KCk7CiAgICAgICAgICAgICAgY29uc3QgdjIgPSB2M3Bvb2wuZ2V0KCk7CiAgICAgICAgICAgICAgcWoudm11bHQodmVydHNbZmFjZVsoaiArIDEpICUgZmFjZS5sZW5ndGhdXSwgdjEpOwogICAgICAgICAgICAgIHFqLnZtdWx0KHZlcnRzW2ZhY2VbKGogKyAyKSAlIGZhY2UubGVuZ3RoXV0sIHYyKTsKICAgICAgICAgICAgICB4ai52YWRkKHYxLCB2MSk7CiAgICAgICAgICAgICAgeGoudmFkZCh2MiwgdjIpOyAvLyBDb25zdHJ1Y3QgZWRnZSB2ZWN0b3IKCiAgICAgICAgICAgICAgY29uc3QgZWRnZSA9IHNwaGVyZUNvbnZleF9lZGdlOwogICAgICAgICAgICAgIHYyLnZzdWIodjEsIGVkZ2UpOyAvLyBDb25zdHJ1Y3QgdGhlIHNhbWUgdmVjdG9yLCBidXQgbm9ybWFsaXplZAoKICAgICAgICAgICAgICBjb25zdCBlZGdlVW5pdCA9IHNwaGVyZUNvbnZleF9lZGdlVW5pdDsKICAgICAgICAgICAgICBlZGdlLnVuaXQoZWRnZVVuaXQpOyAvLyBwIGlzIHhpIHByb2plY3RlZCBvbnRvIHRoZSBlZGdlCgogICAgICAgICAgICAgIGNvbnN0IHAgPSB2M3Bvb2wuZ2V0KCk7CiAgICAgICAgICAgICAgY29uc3QgdjFfdG9feGkgPSB2M3Bvb2wuZ2V0KCk7CiAgICAgICAgICAgICAgeGkudnN1Yih2MSwgdjFfdG9feGkpOwogICAgICAgICAgICAgIGNvbnN0IGRvdCA9IHYxX3RvX3hpLmRvdChlZGdlVW5pdCk7CiAgICAgICAgICAgICAgZWRnZVVuaXQuc2NhbGUoZG90LCBwKTsKICAgICAgICAgICAgICBwLnZhZGQodjEsIHApOyAvLyBDb21wdXRlIGEgdmVjdG9yIGZyb20gcCB0byB0aGUgY2VudGVyIG9mIHRoZSBzcGhlcmUKCiAgICAgICAgICAgICAgY29uc3QgeGlfdG9fcCA9IHYzcG9vbC5nZXQoKTsKICAgICAgICAgICAgICBwLnZzdWIoeGksIHhpX3RvX3ApOyAvLyBDb2xsaXNpb24gaWYgdGhlIGVkZ2Utc3BoZXJlIGRpc3RhbmNlIGlzIGxlc3MgdGhhbiB0aGUgcmFkaXVzCiAgICAgICAgICAgICAgLy8gQU5EIGlmIHAgaXMgaW4gYmV0d2VlbiB2MSBhbmQgdjIKCiAgICAgICAgICAgICAgaWYgKGRvdCA+IDAgJiYgZG90ICogZG90IDwgZWRnZS5sZW5ndGhTcXVhcmVkKCkgJiYgeGlfdG9fcC5sZW5ndGhTcXVhcmVkKCkgPCBSICogUikgewogICAgICAgICAgICAgICAgLy8gQ29sbGlzaW9uIGlmIHRoZSBlZGdlLXNwaGVyZSBkaXN0YW5jZSBpcyBsZXNzIHRoYW4gdGhlIHJhZGl1cwogICAgICAgICAgICAgICAgLy8gRWRnZSBjb250YWN0IQogICAgICAgICAgICAgICAgaWYgKGp1c3RUZXN0KSB7CiAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlOwogICAgICAgICAgICAgICAgfQoKICAgICAgICAgICAgICAgIGNvbnN0IHIgPSB0aGlzLmNyZWF0ZUNvbnRhY3RFcXVhdGlvbihiaSwgYmosIHNpLCBzaiwgcnNpLCByc2opOwogICAgICAgICAgICAgICAgcC52c3ViKHhqLCByLnJqKTsKICAgICAgICAgICAgICAgIHAudnN1Yih4aSwgci5uaSk7CiAgICAgICAgICAgICAgICByLm5pLm5vcm1hbGl6ZSgpOwogICAgICAgICAgICAgICAgci5uaS5zY2FsZShSLCByLnJpKTsgLy8gU2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBib2R5LgoKICAgICAgICAgICAgICAgIHIucmoudmFkZCh4aiwgci5yaik7CiAgICAgICAgICAgICAgICByLnJqLnZzdWIoYmoucG9zaXRpb24sIHIucmopOyAvLyBTaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJvZHkuCgogICAgICAgICAgICAgICAgci5yaS52YWRkKHhpLCByLnJpKTsKICAgICAgICAgICAgICAgIHIucmkudnN1YihiaS5wb3NpdGlvbiwgci5yaSk7CiAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdC5wdXNoKHIpOwogICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVGcmljdGlvbkVxdWF0aW9uc0Zyb21Db250YWN0KHIsIHRoaXMuZnJpY3Rpb25SZXN1bHQpOyAvLyBSZWxlYXNlIHdvcmxkIHZlcnRpY2VzCgogICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDAsIE5mYWNldmVydHMgPSBmYWNlVmVydHMubGVuZ3RoOyBqICE9PSBOZmFjZXZlcnRzOyBqKyspIHsKICAgICAgICAgICAgICAgICAgdjNwb29sLnJlbGVhc2UoZmFjZVZlcnRzW2pdKTsKICAgICAgICAgICAgICAgIH0KCiAgICAgICAgICAgICAgICB2M3Bvb2wucmVsZWFzZSh2MSk7CiAgICAgICAgICAgICAgICB2M3Bvb2wucmVsZWFzZSh2Mik7CiAgICAgICAgICAgICAgICB2M3Bvb2wucmVsZWFzZShwKTsKICAgICAgICAgICAgICAgIHYzcG9vbC5yZWxlYXNlKHhpX3RvX3ApOwogICAgICAgICAgICAgICAgdjNwb29sLnJlbGVhc2UodjFfdG9feGkpOwogICAgICAgICAgICAgICAgcmV0dXJuOwogICAgICAgICAgICAgIH0KCiAgICAgICAgICAgICAgdjNwb29sLnJlbGVhc2UodjEpOwogICAgICAgICAgICAgIHYzcG9vbC5yZWxlYXNlKHYyKTsKICAgICAgICAgICAgICB2M3Bvb2wucmVsZWFzZShwKTsKICAgICAgICAgICAgICB2M3Bvb2wucmVsZWFzZSh4aV90b19wKTsKICAgICAgICAgICAgICB2M3Bvb2wucmVsZWFzZSh2MV90b194aSk7CiAgICAgICAgICAgIH0KICAgICAgICAgIH0gLy8gUmVsZWFzZSB3b3JsZCB2ZXJ0aWNlcwoKCiAgICAgICAgICBmb3IgKGxldCBqID0gMCwgTmZhY2V2ZXJ0cyA9IGZhY2VWZXJ0cy5sZW5ndGg7IGogIT09IE5mYWNldmVydHM7IGorKykgewogICAgICAgICAgICB2M3Bvb2wucmVsZWFzZShmYWNlVmVydHNbal0pOwogICAgICAgICAgfQogICAgICAgIH0KICAgICAgfQogICAgfQoKICAgIHBsYW5lQ29udmV4KHBsYW5lU2hhcGUsIGNvbnZleFNoYXBlLCBwbGFuZVBvc2l0aW9uLCBjb252ZXhQb3NpdGlvbiwgcGxhbmVRdWF0LCBjb252ZXhRdWF0LCBwbGFuZUJvZHksIGNvbnZleEJvZHksIHNpLCBzaiwganVzdFRlc3QpIHsKICAgICAgLy8gU2ltcGx5IHJldHVybiB0aGUgcG9pbnRzIGJlaGluZCB0aGUgcGxhbmUuCiAgICAgIGNvbnN0IHdvcmxkVmVydGV4ID0gcGxhbmVDb252ZXhfdjsKICAgICAgY29uc3Qgd29ybGROb3JtYWwgPSBwbGFuZUNvbnZleF9ub3JtYWw7CiAgICAgIHdvcmxkTm9ybWFsLnNldCgwLCAwLCAxKTsKICAgICAgcGxhbmVRdWF0LnZtdWx0KHdvcmxkTm9ybWFsLCB3b3JsZE5vcm1hbCk7IC8vIFR1cm4gbm9ybWFsIGFjY29yZGluZyB0byBwbGFuZSBvcmllbnRhdGlvbgoKICAgICAgbGV0IG51bUNvbnRhY3RzID0gMDsKICAgICAgY29uc3QgcmVscG9zID0gcGxhbmVDb252ZXhfcmVscG9zOwoKICAgICAgZm9yIChsZXQgaSA9IDA7IGkgIT09IGNvbnZleFNoYXBlLnZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7CiAgICAgICAgLy8gR2V0IHdvcmxkIGNvbnZleCB2ZXJ0ZXgKICAgICAgICB3b3JsZFZlcnRleC5jb3B5KGNvbnZleFNoYXBlLnZlcnRpY2VzW2ldKTsKICAgICAgICBjb252ZXhRdWF0LnZtdWx0KHdvcmxkVmVydGV4LCB3b3JsZFZlcnRleCk7CiAgICAgICAgY29udmV4UG9zaXRpb24udmFkZCh3b3JsZFZlcnRleCwgd29ybGRWZXJ0ZXgpOwogICAgICAgIHdvcmxkVmVydGV4LnZzdWIocGxhbmVQb3NpdGlvbiwgcmVscG9zKTsKICAgICAgICBjb25zdCBkb3QgPSB3b3JsZE5vcm1hbC5kb3QocmVscG9zKTsKCiAgICAgICAgaWYgKGRvdCA8PSAwLjApIHsKICAgICAgICAgIGlmIChqdXN0VGVzdCkgewogICAgICAgICAgICByZXR1cm4gdHJ1ZTsKICAgICAgICAgIH0KCiAgICAgICAgICBjb25zdCByID0gdGhpcy5jcmVhdGVDb250YWN0RXF1YXRpb24ocGxhbmVCb2R5LCBjb252ZXhCb2R5LCBwbGFuZVNoYXBlLCBjb252ZXhTaGFwZSwgc2ksIHNqKTsgLy8gR2V0IHZlcnRleCBwb3NpdGlvbiBwcm9qZWN0ZWQgb24gcGxhbmUKCiAgICAgICAgICBjb25zdCBwcm9qZWN0ZWQgPSBwbGFuZUNvbnZleF9wcm9qZWN0ZWQ7CiAgICAgICAgICB3b3JsZE5vcm1hbC5zY2FsZSh3b3JsZE5vcm1hbC5kb3QocmVscG9zKSwgcHJvamVjdGVkKTsKICAgICAgICAgIHdvcmxkVmVydGV4LnZzdWIocHJvamVjdGVkLCBwcm9qZWN0ZWQpOwogICAgICAgICAgcHJvamVjdGVkLnZzdWIocGxhbmVQb3NpdGlvbiwgci5yaSk7IC8vIEZyb20gcGxhbmUgdG8gdmVydGV4IHByb2plY3RlZCBvbiBwbGFuZQoKICAgICAgICAgIHIubmkuY29weSh3b3JsZE5vcm1hbCk7IC8vIENvbnRhY3Qgbm9ybWFsIGlzIHRoZSBwbGFuZSBub3JtYWwgb3V0IGZyb20gcGxhbmUKICAgICAgICAgIC8vIHJqIGlzIG5vdyBqdXN0IHRoZSB2ZWN0b3IgZnJvbSB0aGUgY29udmV4IGNlbnRlciB0byB0aGUgdmVydGV4CgogICAgICAgICAgd29ybGRWZXJ0ZXgudnN1Yihjb252ZXhQb3NpdGlvbiwgci5yaik7IC8vIE1ha2UgaXQgcmVsYXRpdmUgdG8gdGhlIGJvZHkKCiAgICAgICAgICByLnJpLnZhZGQocGxhbmVQb3NpdGlvbiwgci5yaSk7CiAgICAgICAgICByLnJpLnZzdWIocGxhbmVCb2R5LnBvc2l0aW9uLCByLnJpKTsKICAgICAgICAgIHIucmoudmFkZChjb252ZXhQb3NpdGlvbiwgci5yaik7CiAgICAgICAgICByLnJqLnZzdWIoY29udmV4Qm9keS5wb3NpdGlvbiwgci5yaik7CiAgICAgICAgICB0aGlzLnJlc3VsdC5wdXNoKHIpOwogICAgICAgICAgbnVtQ29udGFjdHMrKzsKCiAgICAgICAgICBpZiAoIXRoaXMuZW5hYmxlRnJpY3Rpb25SZWR1Y3Rpb24pIHsKICAgICAgICAgICAgdGhpcy5jcmVhdGVGcmljdGlvbkVxdWF0aW9uc0Zyb21Db250YWN0KHIsIHRoaXMuZnJpY3Rpb25SZXN1bHQpOwogICAgICAgICAgfQogICAgICAgIH0KICAgICAgfQoKICAgICAgaWYgKHRoaXMuZW5hYmxlRnJpY3Rpb25SZWR1Y3Rpb24gJiYgbnVtQ29udGFjdHMpIHsKICAgICAgICB0aGlzLmNyZWF0ZUZyaWN0aW9uRnJvbUF2ZXJhZ2UobnVtQ29udGFjdHMpOwogICAgICB9CiAgICB9CgogICAgYm94Q29udmV4KHNpLCBzaiwgeGksIHhqLCBxaSwgcWosIGJpLCBiaiwgcnNpLCByc2osIGp1c3RUZXN0KSB7CiAgICAgIHNpLmNvbnZleFBvbHloZWRyb25SZXByZXNlbnRhdGlvbi5tYXRlcmlhbCA9IHNpLm1hdGVyaWFsOwogICAgICBzaS5jb252ZXhQb2x5aGVkcm9uUmVwcmVzZW50YXRpb24uY29sbGlzaW9uUmVzcG9uc2UgPSBzaS5jb2xsaXNpb25SZXNwb25zZTsKICAgICAgcmV0dXJuIHRoaXMuY29udmV4Q29udmV4KHNpLmNvbnZleFBvbHloZWRyb25SZXByZXNlbnRhdGlvbiwgc2osIHhpLCB4aiwgcWksIHFqLCBiaSwgYmosIHNpLCBzaiwganVzdFRlc3QpOwogICAgfQoKICAgIHNwaGVyZUhlaWdodGZpZWxkKHNwaGVyZVNoYXBlLCBoZlNoYXBlLCBzcGhlcmVQb3MsIGhmUG9zLCBzcGhlcmVRdWF0LCBoZlF1YXQsIHNwaGVyZUJvZHksIGhmQm9keSwgcnNpLCByc2osIGp1c3RUZXN0KSB7CiAgICAgIGNvbnN0IGRhdGEgPSBoZlNoYXBlLmRhdGE7CiAgICAgIGNvbnN0IHJhZGl1cyA9IHNwaGVyZVNoYXBlLnJhZGl1czsKICAgICAgY29uc3QgdyA9IGhmU2hhcGUuZWxlbWVudFNpemU7CiAgICAgIGNvbnN0IHdvcmxkUGlsbGFyT2Zmc2V0ID0gc3BoZXJlSGVpZ2h0ZmllbGRfdG1wMjsgLy8gR2V0IHNwaGVyZSBwb3NpdGlvbiB0byBoZWlnaHRmaWVsZCBsb2NhbCEKCiAgICAgIGNvbnN0IGxvY2FsU3BoZXJlUG9zID0gc3BoZXJlSGVpZ2h0ZmllbGRfdG1wMTsKICAgICAgVHJhbnNmb3JtLnBvaW50VG9Mb2NhbEZyYW1lKGhmUG9zLCBoZlF1YXQsIHNwaGVyZVBvcywgbG9jYWxTcGhlcmVQb3MpOyAvLyBHZXQgdGhlIGluZGV4IG9mIHRoZSBkYXRhIHBvaW50cyB0byB0ZXN0IGFnYWluc3QKCiAgICAgIGxldCBpTWluWCA9IE1hdGguZmxvb3IoKGxvY2FsU3BoZXJlUG9zLnggLSByYWRpdXMpIC8gdykgLSAxOwogICAgICBsZXQgaU1heFggPSBNYXRoLmNlaWwoKGxvY2FsU3BoZXJlUG9zLnggKyByYWRpdXMpIC8gdykgKyAxOwogICAgICBsZXQgaU1pblkgPSBNYXRoLmZsb29yKChsb2NhbFNwaGVyZVBvcy55IC0gcmFkaXVzKSAvIHcpIC0gMTsKICAgICAgbGV0IGlNYXhZID0gTWF0aC5jZWlsKChsb2NhbFNwaGVyZVBvcy55ICsgcmFkaXVzKSAvIHcpICsgMTsgLy8gQmFpbCBvdXQgaWYgd2UgYXJlIG91dCBvZiB0aGUgdGVycmFpbgoKICAgICAgaWYgKGlNYXhYIDwgMCB8fCBpTWF4WSA8IDAgfHwgaU1pblggPiBkYXRhLmxlbmd0aCB8fCBpTWluWSA+IGRhdGFbMF0ubGVuZ3RoKSB7CiAgICAgICAgcmV0dXJuOwogICAgICB9IC8vIENsYW1wIGluZGV4IHRvIGVkZ2VzCgoKICAgICAgaWYgKGlNaW5YIDwgMCkgewogICAgICAgIGlNaW5YID0gMDsKICAgICAgfQoKICAgICAgaWYgKGlNYXhYIDwgMCkgewogICAgICAgIGlNYXhYID0gMDsKICAgICAgfQoKICAgICAgaWYgKGlNaW5ZIDwgMCkgewogICAgICAgIGlNaW5ZID0gMDsKICAgICAgfQoKICAgICAgaWYgKGlNYXhZIDwgMCkgewogICAgICAgIGlNYXhZID0gMDsKICAgICAgfQoKICAgICAgaWYgKGlNaW5YID49IGRhdGEubGVuZ3RoKSB7CiAgICAgICAgaU1pblggPSBkYXRhLmxlbmd0aCAtIDE7CiAgICAgIH0KCiAgICAgIGlmIChpTWF4WCA+PSBkYXRhLmxlbmd0aCkgewogICAgICAgIGlNYXhYID0gZGF0YS5sZW5ndGggLSAxOwogICAgICB9CgogICAgICBpZiAoaU1heFkgPj0gZGF0YVswXS5sZW5ndGgpIHsKICAgICAgICBpTWF4WSA9IGRhdGFbMF0ubGVuZ3RoIC0gMTsKICAgICAgfQoKICAgICAgaWYgKGlNaW5ZID49IGRhdGFbMF0ubGVuZ3RoKSB7CiAgICAgICAgaU1pblkgPSBkYXRhWzBdLmxlbmd0aCAtIDE7CiAgICAgIH0KCiAgICAgIGNvbnN0IG1pbk1heCA9IFtdOwogICAgICBoZlNoYXBlLmdldFJlY3RNaW5NYXgoaU1pblgsIGlNaW5ZLCBpTWF4WCwgaU1heFksIG1pbk1heCk7CiAgICAgIGNvbnN0IG1pbiA9IG1pbk1heFswXTsKICAgICAgY29uc3QgbWF4ID0gbWluTWF4WzFdOyAvLyBCYWlsIG91dCBpZiB3ZSBjYW4ndCB0b3VjaCB0aGUgYm91bmRpbmcgaGVpZ2h0IGJveAoKICAgICAgaWYgKGxvY2FsU3BoZXJlUG9zLnogLSByYWRpdXMgPiBtYXggfHwgbG9jYWxTcGhlcmVQb3MueiArIHJhZGl1cyA8IG1pbikgewogICAgICAgIHJldHVybjsKICAgICAgfQoKICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5yZXN1bHQ7CgogICAgICBmb3IgKGxldCBpID0gaU1pblg7IGkgPCBpTWF4WDsgaSsrKSB7CiAgICAgICAgZm9yIChsZXQgaiA9IGlNaW5ZOyBqIDwgaU1heFk7IGorKykgewogICAgICAgICAgY29uc3QgbnVtQ29udGFjdHNCZWZvcmUgPSByZXN1bHQubGVuZ3RoOwogICAgICAgICAgbGV0IGludGVyc2VjdGluZyA9IGZhbHNlOyAvLyBMb3dlciB0cmlhbmdsZQoKICAgICAgICAgIGhmU2hhcGUuZ2V0Q29udmV4VHJpYW5nbGVQaWxsYXIoaSwgaiwgZmFsc2UpOwogICAgICAgICAgVHJhbnNmb3JtLnBvaW50VG9Xb3JsZEZyYW1lKGhmUG9zLCBoZlF1YXQsIGhmU2hhcGUucGlsbGFyT2Zmc2V0LCB3b3JsZFBpbGxhck9mZnNldCk7CgogICAgICAgICAgaWYgKHNwaGVyZVBvcy5kaXN0YW5jZVRvKHdvcmxkUGlsbGFyT2Zmc2V0KSA8IGhmU2hhcGUucGlsbGFyQ29udmV4LmJvdW5kaW5nU3BoZXJlUmFkaXVzICsgc3BoZXJlU2hhcGUuYm91bmRpbmdTcGhlcmVSYWRpdXMpIHsKICAgICAgICAgICAgaW50ZXJzZWN0aW5nID0gdGhpcy5zcGhlcmVDb252ZXgoc3BoZXJlU2hhcGUsIGhmU2hhcGUucGlsbGFyQ29udmV4LCBzcGhlcmVQb3MsIHdvcmxkUGlsbGFyT2Zmc2V0LCBzcGhlcmVRdWF0LCBoZlF1YXQsIHNwaGVyZUJvZHksIGhmQm9keSwgc3BoZXJlU2hhcGUsIGhmU2hhcGUsIGp1c3RUZXN0KTsKICAgICAgICAgIH0KCiAgICAgICAgICBpZiAoanVzdFRlc3QgJiYgaW50ZXJzZWN0aW5nKSB7CiAgICAgICAgICAgIHJldHVybiB0cnVlOwogICAgICAgICAgfSAvLyBVcHBlciB0cmlhbmdsZQoKCiAgICAgICAgICBoZlNoYXBlLmdldENvbnZleFRyaWFuZ2xlUGlsbGFyKGksIGosIHRydWUpOwogICAgICAgICAgVHJhbnNmb3JtLnBvaW50VG9Xb3JsZEZyYW1lKGhmUG9zLCBoZlF1YXQsIGhmU2hhcGUucGlsbGFyT2Zmc2V0LCB3b3JsZFBpbGxhck9mZnNldCk7CgogICAgICAgICAgaWYgKHNwaGVyZVBvcy5kaXN0YW5jZVRvKHdvcmxkUGlsbGFyT2Zmc2V0KSA8IGhmU2hhcGUucGlsbGFyQ29udmV4LmJvdW5kaW5nU3BoZXJlUmFkaXVzICsgc3BoZXJlU2hhcGUuYm91bmRpbmdTcGhlcmVSYWRpdXMpIHsKICAgICAgICAgICAgaW50ZXJzZWN0aW5nID0gdGhpcy5zcGhlcmVDb252ZXgoc3BoZXJlU2hhcGUsIGhmU2hhcGUucGlsbGFyQ29udmV4LCBzcGhlcmVQb3MsIHdvcmxkUGlsbGFyT2Zmc2V0LCBzcGhlcmVRdWF0LCBoZlF1YXQsIHNwaGVyZUJvZHksIGhmQm9keSwgc3BoZXJlU2hhcGUsIGhmU2hhcGUsIGp1c3RUZXN0KTsKICAgICAgICAgIH0KCiAgICAgICAgICBpZiAoanVzdFRlc3QgJiYgaW50ZXJzZWN0aW5nKSB7CiAgICAgICAgICAgIHJldHVybiB0cnVlOwogICAgICAgICAgfQoKICAgICAgICAgIGNvbnN0IG51bUNvbnRhY3RzID0gcmVzdWx0Lmxlbmd0aCAtIG51bUNvbnRhY3RzQmVmb3JlOwoKICAgICAgICAgIGlmIChudW1Db250YWN0cyA+IDIpIHsKICAgICAgICAgICAgcmV0dXJuOwogICAgICAgICAgfQogICAgICAgICAgLyoKICAgICAgICAgICAgLy8gU2tpcCBhbGwgYnV0IDEKICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBudW1Db250YWN0cyAtIDE7IGsrKykgewogICAgICAgICAgICAgICAgcmVzdWx0LnBvcCgpOwogICAgICAgICAgICB9CiAgICAgICAgICAqLwoKICAgICAgICB9CiAgICAgIH0KICAgIH0KCiAgICBib3hIZWlnaHRmaWVsZChzaSwgc2osIHhpLCB4aiwgcWksIHFqLCBiaSwgYmosIHJzaSwgcnNqLCBqdXN0VGVzdCkgewogICAgICBzaS5jb252ZXhQb2x5aGVkcm9uUmVwcmVzZW50YXRpb24ubWF0ZXJpYWwgPSBzaS5tYXRlcmlhbDsKICAgICAgc2kuY29udmV4UG9seWhlZHJvblJlcHJlc2VudGF0aW9uLmNvbGxpc2lvblJlc3BvbnNlID0gc2kuY29sbGlzaW9uUmVzcG9uc2U7CiAgICAgIHJldHVybiB0aGlzLmNvbnZleEhlaWdodGZpZWxkKHNpLmNvbnZleFBvbHloZWRyb25SZXByZXNlbnRhdGlvbiwgc2osIHhpLCB4aiwgcWksIHFqLCBiaSwgYmosIHNpLCBzaiwganVzdFRlc3QpOwogICAgfQoKICAgIGNvbnZleEhlaWdodGZpZWxkKGNvbnZleFNoYXBlLCBoZlNoYXBlLCBjb252ZXhQb3MsIGhmUG9zLCBjb252ZXhRdWF0LCBoZlF1YXQsIGNvbnZleEJvZHksIGhmQm9keSwgcnNpLCByc2osIGp1c3RUZXN0KSB7CiAgICAgIGNvbnN0IGRhdGEgPSBoZlNoYXBlLmRhdGE7CiAgICAgIGNvbnN0IHcgPSBoZlNoYXBlLmVsZW1lbnRTaXplOwogICAgICBjb25zdCByYWRpdXMgPSBjb252ZXhTaGFwZS5ib3VuZGluZ1NwaGVyZVJhZGl1czsKICAgICAgY29uc3Qgd29ybGRQaWxsYXJPZmZzZXQgPSBjb252ZXhIZWlnaHRmaWVsZF90bXAyOwogICAgICBjb25zdCBmYWNlTGlzdCA9IGNvbnZleEhlaWdodGZpZWxkX2ZhY2VMaXN0OyAvLyBHZXQgc3BoZXJlIHBvc2l0aW9uIHRvIGhlaWdodGZpZWxkIGxvY2FsIQoKICAgICAgY29uc3QgbG9jYWxDb252ZXhQb3MgPSBjb252ZXhIZWlnaHRmaWVsZF90bXAxOwogICAgICBUcmFuc2Zvcm0ucG9pbnRUb0xvY2FsRnJhbWUoaGZQb3MsIGhmUXVhdCwgY29udmV4UG9zLCBsb2NhbENvbnZleFBvcyk7IC8vIEdldCB0aGUgaW5kZXggb2YgdGhlIGRhdGEgcG9pbnRzIHRvIHRlc3QgYWdhaW5zdAoKICAgICAgbGV0IGlNaW5YID0gTWF0aC5mbG9vcigobG9jYWxDb252ZXhQb3MueCAtIHJhZGl1cykgLyB3KSAtIDE7CiAgICAgIGxldCBpTWF4WCA9IE1hdGguY2VpbCgobG9jYWxDb252ZXhQb3MueCArIHJhZGl1cykgLyB3KSArIDE7CiAgICAgIGxldCBpTWluWSA9IE1hdGguZmxvb3IoKGxvY2FsQ29udmV4UG9zLnkgLSByYWRpdXMpIC8gdykgLSAxOwogICAgICBsZXQgaU1heFkgPSBNYXRoLmNlaWwoKGxvY2FsQ29udmV4UG9zLnkgKyByYWRpdXMpIC8gdykgKyAxOyAvLyBCYWlsIG91dCBpZiB3ZSBhcmUgb3V0IG9mIHRoZSB0ZXJyYWluCgogICAgICBpZiAoaU1heFggPCAwIHx8IGlNYXhZIDwgMCB8fCBpTWluWCA+IGRhdGEubGVuZ3RoIHx8IGlNaW5ZID4gZGF0YVswXS5sZW5ndGgpIHsKICAgICAgICByZXR1cm47CiAgICAgIH0gLy8gQ2xhbXAgaW5kZXggdG8gZWRnZXMKCgogICAgICBpZiAoaU1pblggPCAwKSB7CiAgICAgICAgaU1pblggPSAwOwogICAgICB9CgogICAgICBpZiAoaU1heFggPCAwKSB7CiAgICAgICAgaU1heFggPSAwOwogICAgICB9CgogICAgICBpZiAoaU1pblkgPCAwKSB7CiAgICAgICAgaU1pblkgPSAwOwogICAgICB9CgogICAgICBpZiAoaU1heFkgPCAwKSB7CiAgICAgICAgaU1heFkgPSAwOwogICAgICB9CgogICAgICBpZiAoaU1pblggPj0gZGF0YS5sZW5ndGgpIHsKICAgICAgICBpTWluWCA9IGRhdGEubGVuZ3RoIC0gMTsKICAgICAgfQoKICAgICAgaWYgKGlNYXhYID49IGRhdGEubGVuZ3RoKSB7CiAgICAgICAgaU1heFggPSBkYXRhLmxlbmd0aCAtIDE7CiAgICAgIH0KCiAgICAgIGlmIChpTWF4WSA+PSBkYXRhWzBdLmxlbmd0aCkgewogICAgICAgIGlNYXhZID0gZGF0YVswXS5sZW5ndGggLSAxOwogICAgICB9CgogICAgICBpZiAoaU1pblkgPj0gZGF0YVswXS5sZW5ndGgpIHsKICAgICAgICBpTWluWSA9IGRhdGFbMF0ubGVuZ3RoIC0gMTsKICAgICAgfQoKICAgICAgY29uc3QgbWluTWF4ID0gW107CiAgICAgIGhmU2hhcGUuZ2V0UmVjdE1pbk1heChpTWluWCwgaU1pblksIGlNYXhYLCBpTWF4WSwgbWluTWF4KTsKICAgICAgY29uc3QgbWluID0gbWluTWF4WzBdOwogICAgICBjb25zdCBtYXggPSBtaW5NYXhbMV07IC8vIEJhaWwgb3V0IGlmIHdlJ3JlIGNhbnQgdG91Y2ggdGhlIGJvdW5kaW5nIGhlaWdodCBib3gKCiAgICAgIGlmIChsb2NhbENvbnZleFBvcy56IC0gcmFkaXVzID4gbWF4IHx8IGxvY2FsQ29udmV4UG9zLnogKyByYWRpdXMgPCBtaW4pIHsKICAgICAgICByZXR1cm47CiAgICAgIH0KCiAgICAgIGZvciAobGV0IGkgPSBpTWluWDsgaSA8IGlNYXhYOyBpKyspIHsKICAgICAgICBmb3IgKGxldCBqID0gaU1pblk7IGogPCBpTWF4WTsgaisrKSB7CiAgICAgICAgICBsZXQgaW50ZXJzZWN0aW5nID0gZmFsc2U7IC8vIExvd2VyIHRyaWFuZ2xlCgogICAgICAgICAgaGZTaGFwZS5nZXRDb252ZXhUcmlhbmdsZVBpbGxhcihpLCBqLCBmYWxzZSk7CiAgICAgICAgICBUcmFuc2Zvcm0ucG9pbnRUb1dvcmxkRnJhbWUoaGZQb3MsIGhmUXVhdCwgaGZTaGFwZS5waWxsYXJPZmZzZXQsIHdvcmxkUGlsbGFyT2Zmc2V0KTsKCiAgICAgICAgICBpZiAoY29udmV4UG9zLmRpc3RhbmNlVG8od29ybGRQaWxsYXJPZmZzZXQpIDwgaGZTaGFwZS5waWxsYXJDb252ZXguYm91bmRpbmdTcGhlcmVSYWRpdXMgKyBjb252ZXhTaGFwZS5ib3VuZGluZ1NwaGVyZVJhZGl1cykgewogICAgICAgICAgICBpbnRlcnNlY3RpbmcgPSB0aGlzLmNvbnZleENvbnZleChjb252ZXhTaGFwZSwgaGZTaGFwZS5waWxsYXJDb252ZXgsIGNvbnZleFBvcywgd29ybGRQaWxsYXJPZmZzZXQsIGNvbnZleFF1YXQsIGhmUXVhdCwgY29udmV4Qm9keSwgaGZCb2R5LCBudWxsLCBudWxsLCBqdXN0VGVzdCwgZmFjZUxpc3QsIG51bGwpOwogICAgICAgICAgfQoKICAgICAgICAgIGlmIChqdXN0VGVzdCAmJiBpbnRlcnNlY3RpbmcpIHsKICAgICAgICAgICAgcmV0dXJuIHRydWU7CiAgICAgICAgICB9IC8vIFVwcGVyIHRyaWFuZ2xlCgoKICAgICAgICAgIGhmU2hhcGUuZ2V0Q29udmV4VHJpYW5nbGVQaWxsYXIoaSwgaiwgdHJ1ZSk7CiAgICAgICAgICBUcmFuc2Zvcm0ucG9pbnRUb1dvcmxkRnJhbWUoaGZQb3MsIGhmUXVhdCwgaGZTaGFwZS5waWxsYXJPZmZzZXQsIHdvcmxkUGlsbGFyT2Zmc2V0KTsKCiAgICAgICAgICBpZiAoY29udmV4UG9zLmRpc3RhbmNlVG8od29ybGRQaWxsYXJPZmZzZXQpIDwgaGZTaGFwZS5waWxsYXJDb252ZXguYm91bmRpbmdTcGhlcmVSYWRpdXMgKyBjb252ZXhTaGFwZS5ib3VuZGluZ1NwaGVyZVJhZGl1cykgewogICAgICAgICAgICBpbnRlcnNlY3RpbmcgPSB0aGlzLmNvbnZleENvbnZleChjb252ZXhTaGFwZSwgaGZTaGFwZS5waWxsYXJDb252ZXgsIGNvbnZleFBvcywgd29ybGRQaWxsYXJPZmZzZXQsIGNvbnZleFF1YXQsIGhmUXVhdCwgY29udmV4Qm9keSwgaGZCb2R5LCBudWxsLCBudWxsLCBqdXN0VGVzdCwgZmFjZUxpc3QsIG51bGwpOwogICAgICAgICAgfQoKICAgICAgICAgIGlmIChqdXN0VGVzdCAmJiBpbnRlcnNlY3RpbmcpIHsKICAgICAgICAgICAgcmV0dXJuIHRydWU7CiAgICAgICAgICB9CiAgICAgICAgfQogICAgICB9CiAgICB9CgogICAgc3BoZXJlUGFydGljbGUoc2osIHNpLCB4aiwgeGksIHFqLCBxaSwgYmosIGJpLCByc2ksIHJzaiwganVzdFRlc3QpIHsKICAgICAgLy8gVGhlIG5vcm1hbCBpcyB0aGUgdW5pdCB2ZWN0b3IgZnJvbSBzcGhlcmUgY2VudGVyIHRvIHBhcnRpY2xlIGNlbnRlcgogICAgICBjb25zdCBub3JtYWwgPSBwYXJ0aWNsZVNwaGVyZV9ub3JtYWw7CiAgICAgIG5vcm1hbC5zZXQoMCwgMCwgMSk7CiAgICAgIHhpLnZzdWIoeGosIG5vcm1hbCk7CiAgICAgIGNvbnN0IGxlbmd0aFNxdWFyZWQgPSBub3JtYWwubGVuZ3RoU3F1YXJlZCgpOwoKICAgICAgaWYgKGxlbmd0aFNxdWFyZWQgPD0gc2oucmFkaXVzICogc2oucmFkaXVzKSB7CiAgICAgICAgaWYgKGp1c3RUZXN0KSB7CiAgICAgICAgICByZXR1cm4gdHJ1ZTsKICAgICAgICB9CgogICAgICAgIGNvbnN0IHIgPSB0aGlzLmNyZWF0ZUNvbnRhY3RFcXVhdGlvbihiaSwgYmosIHNpLCBzaiwgcnNpLCByc2opOwogICAgICAgIG5vcm1hbC5ub3JtYWxpemUoKTsKICAgICAgICByLnJqLmNvcHkobm9ybWFsKTsKICAgICAgICByLnJqLnNjYWxlKHNqLnJhZGl1cywgci5yaik7CiAgICAgICAgci5uaS5jb3B5KG5vcm1hbCk7IC8vIENvbnRhY3Qgbm9ybWFsCgogICAgICAgIHIubmkubmVnYXRlKHIubmkpOwogICAgICAgIHIucmkuc2V0KDAsIDAsIDApOyAvLyBDZW50ZXIgb2YgcGFydGljbGUKCiAgICAgICAgdGhpcy5yZXN1bHQucHVzaChyKTsKICAgICAgICB0aGlzLmNyZWF0ZUZyaWN0aW9uRXF1YXRpb25zRnJvbUNvbnRhY3QociwgdGhpcy5mcmljdGlvblJlc3VsdCk7CiAgICAgIH0KICAgIH0KCiAgICBwbGFuZVBhcnRpY2xlKHNqLCBzaSwgeGosIHhpLCBxaiwgcWksIGJqLCBiaSwgcnNpLCByc2osIGp1c3RUZXN0KSB7CiAgICAgIGNvbnN0IG5vcm1hbCA9IHBhcnRpY2xlUGxhbmVfbm9ybWFsOwogICAgICBub3JtYWwuc2V0KDAsIDAsIDEpOwogICAgICBiai5xdWF0ZXJuaW9uLnZtdWx0KG5vcm1hbCwgbm9ybWFsKTsgLy8gVHVybiBub3JtYWwgYWNjb3JkaW5nIHRvIHBsYW5lIG9yaWVudGF0aW9uCgogICAgICBjb25zdCByZWxwb3MgPSBwYXJ0aWNsZVBsYW5lX3JlbHBvczsKICAgICAgeGkudnN1Yihiai5wb3NpdGlvbiwgcmVscG9zKTsKICAgICAgY29uc3QgZG90ID0gbm9ybWFsLmRvdChyZWxwb3MpOwoKICAgICAgaWYgKGRvdCA8PSAwLjApIHsKICAgICAgICBpZiAoanVzdFRlc3QpIHsKICAgICAgICAgIHJldHVybiB0cnVlOwogICAgICAgIH0KCiAgICAgICAgY29uc3QgciA9IHRoaXMuY3JlYXRlQ29udGFjdEVxdWF0aW9uKGJpLCBiaiwgc2ksIHNqLCByc2ksIHJzaik7CiAgICAgICAgci5uaS5jb3B5KG5vcm1hbCk7IC8vIENvbnRhY3Qgbm9ybWFsIGlzIHRoZSBwbGFuZSBub3JtYWwKCiAgICAgICAgci5uaS5uZWdhdGUoci5uaSk7CiAgICAgICAgci5yaS5zZXQoMCwgMCwgMCk7IC8vIENlbnRlciBvZiBwYXJ0aWNsZQogICAgICAgIC8vIEdldCBwYXJ0aWNsZSBwb3NpdGlvbiBwcm9qZWN0ZWQgb24gcGxhbmUKCiAgICAgICAgY29uc3QgcHJvamVjdGVkID0gcGFydGljbGVQbGFuZV9wcm9qZWN0ZWQ7CiAgICAgICAgbm9ybWFsLnNjYWxlKG5vcm1hbC5kb3QoeGkpLCBwcm9qZWN0ZWQpOwogICAgICAgIHhpLnZzdWIocHJvamVjdGVkLCBwcm9qZWN0ZWQpOyAvL3Byb2plY3RlZC52YWRkKGJqLnBvc2l0aW9uLHByb2plY3RlZCk7CiAgICAgICAgLy8gcmogaXMgbm93IHRoZSBwcm9qZWN0ZWQgd29ybGQgcG9zaXRpb24gbWludXMgcGxhbmUgcG9zaXRpb24KCiAgICAgICAgci5yai5jb3B5KHByb2plY3RlZCk7CiAgICAgICAgdGhpcy5yZXN1bHQucHVzaChyKTsKICAgICAgICB0aGlzLmNyZWF0ZUZyaWN0aW9uRXF1YXRpb25zRnJvbUNvbnRhY3QociwgdGhpcy5mcmljdGlvblJlc3VsdCk7CiAgICAgIH0KICAgIH0KCiAgICBib3hQYXJ0aWNsZShzaSwgc2osIHhpLCB4aiwgcWksIHFqLCBiaSwgYmosIHJzaSwgcnNqLCBqdXN0VGVzdCkgewogICAgICBzaS5jb252ZXhQb2x5aGVkcm9uUmVwcmVzZW50YXRpb24ubWF0ZXJpYWwgPSBzaS5tYXRlcmlhbDsKICAgICAgc2kuY29udmV4UG9seWhlZHJvblJlcHJlc2VudGF0aW9uLmNvbGxpc2lvblJlc3BvbnNlID0gc2kuY29sbGlzaW9uUmVzcG9uc2U7CiAgICAgIHJldHVybiB0aGlzLmNvbnZleFBhcnRpY2xlKHNpLmNvbnZleFBvbHloZWRyb25SZXByZXNlbnRhdGlvbiwgc2osIHhpLCB4aiwgcWksIHFqLCBiaSwgYmosIHNpLCBzaiwganVzdFRlc3QpOwogICAgfQoKICAgIGNvbnZleFBhcnRpY2xlKHNqLCBzaSwgeGosIHhpLCBxaiwgcWksIGJqLCBiaSwgcnNpLCByc2osIGp1c3RUZXN0KSB7CiAgICAgIGxldCBwZW5ldHJhdGVkRmFjZUluZGV4ID0gLTE7CiAgICAgIGNvbnN0IHBlbmV0cmF0ZWRGYWNlTm9ybWFsID0gY29udmV4UGFydGljbGVfcGVuZXRyYXRlZEZhY2VOb3JtYWw7CiAgICAgIGNvbnN0IHdvcmxkUGVuZXRyYXRpb25WZWMgPSBjb252ZXhQYXJ0aWNsZV93b3JsZFBlbmV0cmF0aW9uVmVjOwogICAgICBsZXQgbWluUGVuZXRyYXRpb24gPSBudWxsOwoKICAgICAgY29uc3QgbG9jYWwgPSBjb252ZXhQYXJ0aWNsZV9sb2NhbDsKICAgICAgbG9jYWwuY29weSh4aSk7CiAgICAgIGxvY2FsLnZzdWIoeGosIGxvY2FsKTsgLy8gQ29udmVydCBwb3NpdGlvbiB0byByZWxhdGl2ZSB0aGUgY29udmV4IG9yaWdpbgoKICAgICAgcWouY29uanVnYXRlKGNxaik7CiAgICAgIGNxai52bXVsdChsb2NhbCwgbG9jYWwpOwoKICAgICAgaWYgKHNqLnBvaW50SXNJbnNpZGUobG9jYWwpKSB7CiAgICAgICAgaWYgKHNqLndvcmxkVmVydGljZXNOZWVkc1VwZGF0ZSkgewogICAgICAgICAgc2ouY29tcHV0ZVdvcmxkVmVydGljZXMoeGosIHFqKTsKICAgICAgICB9CgogICAgICAgIGlmIChzai53b3JsZEZhY2VOb3JtYWxzTmVlZHNVcGRhdGUpIHsKICAgICAgICAgIHNqLmNvbXB1dGVXb3JsZEZhY2VOb3JtYWxzKHFqKTsKICAgICAgICB9IC8vIEZvciBlYWNoIHdvcmxkIHBvbHlnb24gaW4gdGhlIHBvbHloZWRyYQoKCiAgICAgICAgZm9yIChsZXQgaSA9IDAsIG5mYWNlcyA9IHNqLmZhY2VzLmxlbmd0aDsgaSAhPT0gbmZhY2VzOyBpKyspIHsKICAgICAgICAgIC8vIENvbnN0cnVjdCB3b3JsZCBmYWNlIHZlcnRpY2VzCiAgICAgICAgICBjb25zdCB2ZXJ0cyA9IFtzai53b3JsZFZlcnRpY2VzW3NqLmZhY2VzW2ldWzBdXV07CiAgICAgICAgICBjb25zdCBub3JtYWwgPSBzai53b3JsZEZhY2VOb3JtYWxzW2ldOyAvLyBDaGVjayBob3cgbXVjaCB0aGUgcGFydGljbGUgcGVuZXRyYXRlcyB0aGUgcG9seWdvbiBwbGFuZS4KCiAgICAgICAgICB4aS52c3ViKHZlcnRzWzBdLCBjb252ZXhQYXJ0aWNsZV92ZXJ0ZXhUb1BhcnRpY2xlKTsKICAgICAgICAgIGNvbnN0IHBlbmV0cmF0aW9uID0gLW5vcm1hbC5kb3QoY29udmV4UGFydGljbGVfdmVydGV4VG9QYXJ0aWNsZSk7CgogICAgICAgICAgaWYgKG1pblBlbmV0cmF0aW9uID09PSBudWxsIHx8IE1hdGguYWJzKHBlbmV0cmF0aW9uKSA8IE1hdGguYWJzKG1pblBlbmV0cmF0aW9uKSkgewogICAgICAgICAgICBpZiAoanVzdFRlc3QpIHsKICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTsKICAgICAgICAgICAgfQoKICAgICAgICAgICAgbWluUGVuZXRyYXRpb24gPSBwZW5ldHJhdGlvbjsKICAgICAgICAgICAgcGVuZXRyYXRlZEZhY2VJbmRleCA9IGk7CiAgICAgICAgICAgIHBlbmV0cmF0ZWRGYWNlTm9ybWFsLmNvcHkobm9ybWFsKTsKICAgICAgICAgIH0KICAgICAgICB9CgogICAgICAgIGlmIChwZW5ldHJhdGVkRmFjZUluZGV4ICE9PSAtMSkgewogICAgICAgICAgLy8gU2V0dXAgY29udGFjdAogICAgICAgICAgY29uc3QgciA9IHRoaXMuY3JlYXRlQ29udGFjdEVxdWF0aW9uKGJpLCBiaiwgc2ksIHNqLCByc2ksIHJzaik7CiAgICAgICAgICBwZW5ldHJhdGVkRmFjZU5vcm1hbC5zY2FsZShtaW5QZW5ldHJhdGlvbiwgd29ybGRQZW5ldHJhdGlvblZlYyk7IC8vIHJqIGlzIHRoZSBwYXJ0aWNsZSBwb3NpdGlvbiBwcm9qZWN0ZWQgdG8gdGhlIGZhY2UKCiAgICAgICAgICB3b3JsZFBlbmV0cmF0aW9uVmVjLnZhZGQoeGksIHdvcmxkUGVuZXRyYXRpb25WZWMpOwogICAgICAgICAgd29ybGRQZW5ldHJhdGlvblZlYy52c3ViKHhqLCB3b3JsZFBlbmV0cmF0aW9uVmVjKTsKICAgICAgICAgIHIucmouY29weSh3b3JsZFBlbmV0cmF0aW9uVmVjKTsgLy9jb25zdCBwcm9qZWN0ZWRUb0ZhY2UgPSB4aS52c3ViKHhqKS52YWRkKHdvcmxkUGVuZXRyYXRpb25WZWMpOwogICAgICAgICAgLy9wcm9qZWN0ZWRUb0ZhY2UuY29weShyLnJqKTsKICAgICAgICAgIC8vcWoudm11bHQoci5yaixyLnJqKTsKCiAgICAgICAgICBwZW5ldHJhdGVkRmFjZU5vcm1hbC5uZWdhdGUoci5uaSk7IC8vIENvbnRhY3Qgbm9ybWFsCgogICAgICAgICAgci5yaS5zZXQoMCwgMCwgMCk7IC8vIENlbnRlciBvZiBwYXJ0aWNsZQoKICAgICAgICAgIGNvbnN0IHJpID0gci5yaTsKICAgICAgICAgIGNvbnN0IHJqID0gci5yajsgLy8gTWFrZSByZWxhdGl2ZSB0byBib2RpZXMKCiAgICAgICAgICByaS52YWRkKHhpLCByaSk7CiAgICAgICAgICByaS52c3ViKGJpLnBvc2l0aW9uLCByaSk7CiAgICAgICAgICByai52YWRkKHhqLCByaik7CiAgICAgICAgICByai52c3ViKGJqLnBvc2l0aW9uLCByaik7CiAgICAgICAgICB0aGlzLnJlc3VsdC5wdXNoKHIpOwogICAgICAgICAgdGhpcy5jcmVhdGVGcmljdGlvbkVxdWF0aW9uc0Zyb21Db250YWN0KHIsIHRoaXMuZnJpY3Rpb25SZXN1bHQpOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICBjb25zb2xlLndhcm4oJ1BvaW50IGZvdW5kIGluc2lkZSBjb252ZXgsIGJ1dCBkaWQgbm90IGZpbmQgcGVuZXRyYXRpbmcgZmFjZSEnKTsKICAgICAgICB9CiAgICAgIH0KICAgIH0KCiAgICBoZWlnaHRmaWVsZEN5bGluZGVyKGhmU2hhcGUsIGNvbnZleFNoYXBlLCBoZlBvcywgY29udmV4UG9zLCBoZlF1YXQsIGNvbnZleFF1YXQsIGhmQm9keSwgY29udmV4Qm9keSwgcnNpLCByc2osIGp1c3RUZXN0KSB7CiAgICAgIHJldHVybiB0aGlzLmNvbnZleEhlaWdodGZpZWxkKGNvbnZleFNoYXBlLCBoZlNoYXBlLCBjb252ZXhQb3MsIGhmUG9zLCBjb252ZXhRdWF0LCBoZlF1YXQsIGNvbnZleEJvZHksIGhmQm9keSwgcnNpLCByc2osIGp1c3RUZXN0KTsKICAgIH0KCiAgICBwYXJ0aWNsZUN5bGluZGVyKHNpLCBzaiwgeGksIHhqLCBxaSwgcWosIGJpLCBiaiwgcnNpLCByc2osIGp1c3RUZXN0KSB7CiAgICAgIHJldHVybiB0aGlzLmNvbnZleFBhcnRpY2xlKHNqLCBzaSwgeGosIHhpLCBxaiwgcWksIGJqLCBiaSwgcnNpLCByc2osIGp1c3RUZXN0KTsKICAgIH0KCiAgICBzcGhlcmVUcmltZXNoKHNwaGVyZVNoYXBlLCB0cmltZXNoU2hhcGUsIHNwaGVyZVBvcywgdHJpbWVzaFBvcywgc3BoZXJlUXVhdCwgdHJpbWVzaFF1YXQsIHNwaGVyZUJvZHksIHRyaW1lc2hCb2R5LCByc2ksIHJzaiwganVzdFRlc3QpIHsKICAgICAgY29uc3QgZWRnZVZlcnRleEEgPSBzcGhlcmVUcmltZXNoX2VkZ2VWZXJ0ZXhBOwogICAgICBjb25zdCBlZGdlVmVydGV4QiA9IHNwaGVyZVRyaW1lc2hfZWRnZVZlcnRleEI7CiAgICAgIGNvbnN0IGVkZ2VWZWN0b3IgPSBzcGhlcmVUcmltZXNoX2VkZ2VWZWN0b3I7CiAgICAgIGNvbnN0IGVkZ2VWZWN0b3JVbml0ID0gc3BoZXJlVHJpbWVzaF9lZGdlVmVjdG9yVW5pdDsKICAgICAgY29uc3QgbG9jYWxTcGhlcmVQb3MgPSBzcGhlcmVUcmltZXNoX2xvY2FsU3BoZXJlUG9zOwogICAgICBjb25zdCB0bXAgPSBzcGhlcmVUcmltZXNoX3RtcDsKICAgICAgY29uc3QgbG9jYWxTcGhlcmVBQUJCID0gc3BoZXJlVHJpbWVzaF9sb2NhbFNwaGVyZUFBQkI7CiAgICAgIGNvbnN0IHYyID0gc3BoZXJlVHJpbWVzaF92MjsKICAgICAgY29uc3QgcmVscG9zID0gc3BoZXJlVHJpbWVzaF9yZWxwb3M7CiAgICAgIGNvbnN0IHRyaWFuZ2xlcyA9IHNwaGVyZVRyaW1lc2hfdHJpYW5nbGVzOyAvLyBDb252ZXJ0IHNwaGVyZSBwb3NpdGlvbiB0byBsb2NhbCBpbiB0aGUgdHJpbWVzaAoKICAgICAgVHJhbnNmb3JtLnBvaW50VG9Mb2NhbEZyYW1lKHRyaW1lc2hQb3MsIHRyaW1lc2hRdWF0LCBzcGhlcmVQb3MsIGxvY2FsU3BoZXJlUG9zKTsgLy8gR2V0IHRoZSBhYWJiIG9mIHRoZSBzcGhlcmUgbG9jYWxseSBpbiB0aGUgdHJpbWVzaAoKICAgICAgY29uc3Qgc3BoZXJlUmFkaXVzID0gc3BoZXJlU2hhcGUucmFkaXVzOwogICAgICBsb2NhbFNwaGVyZUFBQkIubG93ZXJCb3VuZC5zZXQobG9jYWxTcGhlcmVQb3MueCAtIHNwaGVyZVJhZGl1cywgbG9jYWxTcGhlcmVQb3MueSAtIHNwaGVyZVJhZGl1cywgbG9jYWxTcGhlcmVQb3MueiAtIHNwaGVyZVJhZGl1cyk7CiAgICAgIGxvY2FsU3BoZXJlQUFCQi51cHBlckJvdW5kLnNldChsb2NhbFNwaGVyZVBvcy54ICsgc3BoZXJlUmFkaXVzLCBsb2NhbFNwaGVyZVBvcy55ICsgc3BoZXJlUmFkaXVzLCBsb2NhbFNwaGVyZVBvcy56ICsgc3BoZXJlUmFkaXVzKTsKICAgICAgdHJpbWVzaFNoYXBlLmdldFRyaWFuZ2xlc0luQUFCQihsb2NhbFNwaGVyZUFBQkIsIHRyaWFuZ2xlcyk7IC8vZm9yIChsZXQgaSA9IDA7IGkgPCB0cmltZXNoU2hhcGUuaW5kaWNlcy5sZW5ndGggLyAzOyBpKyspIHRyaWFuZ2xlcy5wdXNoKGkpOyAvLyBBbGwKICAgICAgLy8gVmVydGljZXMKCiAgICAgIGNvbnN0IHYgPSBzcGhlcmVUcmltZXNoX3Y7CiAgICAgIGNvbnN0IHJhZGl1c1NxdWFyZWQgPSBzcGhlcmVTaGFwZS5yYWRpdXMgKiBzcGhlcmVTaGFwZS5yYWRpdXM7CgogICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyaWFuZ2xlcy5sZW5ndGg7IGkrKykgewogICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaisrKSB7CiAgICAgICAgICB0cmltZXNoU2hhcGUuZ2V0VmVydGV4KHRyaW1lc2hTaGFwZS5pbmRpY2VzW3RyaWFuZ2xlc1tpXSAqIDMgKyBqXSwgdik7IC8vIENoZWNrIHZlcnRleCBvdmVybGFwIGluIHNwaGVyZQoKICAgICAgICAgIHYudnN1Yihsb2NhbFNwaGVyZVBvcywgcmVscG9zKTsKCiAgICAgICAgICBpZiAocmVscG9zLmxlbmd0aFNxdWFyZWQoKSA8PSByYWRpdXNTcXVhcmVkKSB7CiAgICAgICAgICAgIC8vIFNhZmUgdXAKICAgICAgICAgICAgdjIuY29weSh2KTsKICAgICAgICAgICAgVHJhbnNmb3JtLnBvaW50VG9Xb3JsZEZyYW1lKHRyaW1lc2hQb3MsIHRyaW1lc2hRdWF0LCB2Miwgdik7CiAgICAgICAgICAgIHYudnN1YihzcGhlcmVQb3MsIHJlbHBvcyk7CgogICAgICAgICAgICBpZiAoanVzdFRlc3QpIHsKICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTsKICAgICAgICAgICAgfQoKICAgICAgICAgICAgbGV0IHIgPSB0aGlzLmNyZWF0ZUNvbnRhY3RFcXVhdGlvbihzcGhlcmVCb2R5LCB0cmltZXNoQm9keSwgc3BoZXJlU2hhcGUsIHRyaW1lc2hTaGFwZSwgcnNpLCByc2opOwogICAgICAgICAgICByLm5pLmNvcHkocmVscG9zKTsKICAgICAgICAgICAgci5uaS5ub3JtYWxpemUoKTsgLy8gcmkgaXMgdGhlIHZlY3RvciBmcm9tIHNwaGVyZSBjZW50ZXIgdG8gdGhlIHNwaGVyZSBzdXJmYWNlCgogICAgICAgICAgICByLnJpLmNvcHkoci5uaSk7CiAgICAgICAgICAgIHIucmkuc2NhbGUoc3BoZXJlU2hhcGUucmFkaXVzLCByLnJpKTsKICAgICAgICAgICAgci5yaS52YWRkKHNwaGVyZVBvcywgci5yaSk7CiAgICAgICAgICAgIHIucmkudnN1YihzcGhlcmVCb2R5LnBvc2l0aW9uLCByLnJpKTsKICAgICAgICAgICAgci5yai5jb3B5KHYpOwogICAgICAgICAgICByLnJqLnZzdWIodHJpbWVzaEJvZHkucG9zaXRpb24sIHIucmopOyAvLyBTdG9yZSByZXN1bHQKCiAgICAgICAgICAgIHRoaXMucmVzdWx0LnB1c2gocik7CiAgICAgICAgICAgIHRoaXMuY3JlYXRlRnJpY3Rpb25FcXVhdGlvbnNGcm9tQ29udGFjdChyLCB0aGlzLmZyaWN0aW9uUmVzdWx0KTsKICAgICAgICAgIH0KICAgICAgICB9CiAgICAgIH0gLy8gQ2hlY2sgYWxsIGVkZ2VzCgoKICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmlhbmdsZXMubGVuZ3RoOyBpKyspIHsKICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKykgewogICAgICAgICAgdHJpbWVzaFNoYXBlLmdldFZlcnRleCh0cmltZXNoU2hhcGUuaW5kaWNlc1t0cmlhbmdsZXNbaV0gKiAzICsgal0sIGVkZ2VWZXJ0ZXhBKTsKICAgICAgICAgIHRyaW1lc2hTaGFwZS5nZXRWZXJ0ZXgodHJpbWVzaFNoYXBlLmluZGljZXNbdHJpYW5nbGVzW2ldICogMyArIChqICsgMSkgJSAzXSwgZWRnZVZlcnRleEIpOwogICAgICAgICAgZWRnZVZlcnRleEIudnN1YihlZGdlVmVydGV4QSwgZWRnZVZlY3Rvcik7IC8vIFByb2plY3Qgc3BoZXJlIHBvc2l0aW9uIHRvIHRoZSBlZGdlCgogICAgICAgICAgbG9jYWxTcGhlcmVQb3MudnN1YihlZGdlVmVydGV4QiwgdG1wKTsKICAgICAgICAgIGNvbnN0IHBvc2l0aW9uQWxvbmdFZGdlQiA9IHRtcC5kb3QoZWRnZVZlY3Rvcik7CiAgICAgICAgICBsb2NhbFNwaGVyZVBvcy52c3ViKGVkZ2VWZXJ0ZXhBLCB0bXApOwogICAgICAgICAgbGV0IHBvc2l0aW9uQWxvbmdFZGdlQSA9IHRtcC5kb3QoZWRnZVZlY3Rvcik7CgogICAgICAgICAgaWYgKHBvc2l0aW9uQWxvbmdFZGdlQSA+IDAgJiYgcG9zaXRpb25BbG9uZ0VkZ2VCIDwgMCkgewogICAgICAgICAgICAvLyBOb3cgY2hlY2sgdGhlIG9ydGhvZ29uYWwgZGlzdGFuY2UgZnJvbSBlZGdlIHRvIHNwaGVyZSBjZW50ZXIKICAgICAgICAgICAgbG9jYWxTcGhlcmVQb3MudnN1YihlZGdlVmVydGV4QSwgdG1wKTsKICAgICAgICAgICAgZWRnZVZlY3RvclVuaXQuY29weShlZGdlVmVjdG9yKTsKICAgICAgICAgICAgZWRnZVZlY3RvclVuaXQubm9ybWFsaXplKCk7CiAgICAgICAgICAgIHBvc2l0aW9uQWxvbmdFZGdlQSA9IHRtcC5kb3QoZWRnZVZlY3RvclVuaXQpOwogICAgICAgICAgICBlZGdlVmVjdG9yVW5pdC5zY2FsZShwb3NpdGlvbkFsb25nRWRnZUEsIHRtcCk7CiAgICAgICAgICAgIHRtcC52YWRkKGVkZ2VWZXJ0ZXhBLCB0bXApOyAvLyB0bXAgaXMgbm93IHRoZSBzcGhlcmUgY2VudGVyIHBvc2l0aW9uIHByb2plY3RlZCB0byB0aGUgZWRnZSwgZGVmaW5lZCBsb2NhbGx5IGluIHRoZSB0cmltZXNoIGZyYW1lCgogICAgICAgICAgICBjb25zdCBkaXN0ID0gdG1wLmRpc3RhbmNlVG8obG9jYWxTcGhlcmVQb3MpOwoKICAgICAgICAgICAgaWYgKGRpc3QgPCBzcGhlcmVTaGFwZS5yYWRpdXMpIHsKICAgICAgICAgICAgICBpZiAoanVzdFRlc3QpIHsKICAgICAgICAgICAgICAgIHJldHVybiB0cnVlOwogICAgICAgICAgICAgIH0KCiAgICAgICAgICAgICAgY29uc3QgciA9IHRoaXMuY3JlYXRlQ29udGFjdEVxdWF0aW9uKHNwaGVyZUJvZHksIHRyaW1lc2hCb2R5LCBzcGhlcmVTaGFwZSwgdHJpbWVzaFNoYXBlLCByc2ksIHJzaik7CiAgICAgICAgICAgICAgdG1wLnZzdWIobG9jYWxTcGhlcmVQb3MsIHIubmkpOwogICAgICAgICAgICAgIHIubmkubm9ybWFsaXplKCk7CiAgICAgICAgICAgICAgci5uaS5zY2FsZShzcGhlcmVTaGFwZS5yYWRpdXMsIHIucmkpOwogICAgICAgICAgICAgIHIucmkudmFkZChzcGhlcmVQb3MsIHIucmkpOwogICAgICAgICAgICAgIHIucmkudnN1YihzcGhlcmVCb2R5LnBvc2l0aW9uLCByLnJpKTsKICAgICAgICAgICAgICBUcmFuc2Zvcm0ucG9pbnRUb1dvcmxkRnJhbWUodHJpbWVzaFBvcywgdHJpbWVzaFF1YXQsIHRtcCwgdG1wKTsKICAgICAgICAgICAgICB0bXAudnN1Yih0cmltZXNoQm9keS5wb3NpdGlvbiwgci5yaik7CiAgICAgICAgICAgICAgVHJhbnNmb3JtLnZlY3RvclRvV29ybGRGcmFtZSh0cmltZXNoUXVhdCwgci5uaSwgci5uaSk7CiAgICAgICAgICAgICAgVHJhbnNmb3JtLnZlY3RvclRvV29ybGRGcmFtZSh0cmltZXNoUXVhdCwgci5yaSwgci5yaSk7CiAgICAgICAgICAgICAgdGhpcy5yZXN1bHQucHVzaChyKTsKICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUZyaWN0aW9uRXF1YXRpb25zRnJvbUNvbnRhY3QociwgdGhpcy5mcmljdGlvblJlc3VsdCk7CiAgICAgICAgICAgIH0KICAgICAgICAgIH0KICAgICAgICB9CiAgICAgIH0gLy8gVHJpYW5nbGUgZmFjZXMKCgogICAgICBjb25zdCB2YSA9IHNwaGVyZVRyaW1lc2hfdmE7CiAgICAgIGNvbnN0IHZiID0gc3BoZXJlVHJpbWVzaF92YjsKICAgICAgY29uc3QgdmMgPSBzcGhlcmVUcmltZXNoX3ZjOwogICAgICBjb25zdCBub3JtYWwgPSBzcGhlcmVUcmltZXNoX25vcm1hbDsKCiAgICAgIGZvciAobGV0IGkgPSAwLCBOID0gdHJpYW5nbGVzLmxlbmd0aDsgaSAhPT0gTjsgaSsrKSB7CiAgICAgICAgdHJpbWVzaFNoYXBlLmdldFRyaWFuZ2xlVmVydGljZXModHJpYW5nbGVzW2ldLCB2YSwgdmIsIHZjKTsKICAgICAgICB0cmltZXNoU2hhcGUuZ2V0Tm9ybWFsKHRyaWFuZ2xlc1tpXSwgbm9ybWFsKTsKICAgICAgICBsb2NhbFNwaGVyZVBvcy52c3ViKHZhLCB0bXApOwogICAgICAgIGxldCBkaXN0ID0gdG1wLmRvdChub3JtYWwpOwogICAgICAgIG5vcm1hbC5zY2FsZShkaXN0LCB0bXApOwogICAgICAgIGxvY2FsU3BoZXJlUG9zLnZzdWIodG1wLCB0bXApOyAvLyB0bXAgaXMgbm93IHRoZSBzcGhlcmUgcG9zaXRpb24gcHJvamVjdGVkIHRvIHRoZSB0cmlhbmdsZSBwbGFuZQoKICAgICAgICBkaXN0ID0gdG1wLmRpc3RhbmNlVG8obG9jYWxTcGhlcmVQb3MpOwoKICAgICAgICBpZiAoUmF5LnBvaW50SW5UcmlhbmdsZSh0bXAsIHZhLCB2YiwgdmMpICYmIGRpc3QgPCBzcGhlcmVTaGFwZS5yYWRpdXMpIHsKICAgICAgICAgIGlmIChqdXN0VGVzdCkgewogICAgICAgICAgICByZXR1cm4gdHJ1ZTsKICAgICAgICAgIH0KCiAgICAgICAgICBsZXQgciA9IHRoaXMuY3JlYXRlQ29udGFjdEVxdWF0aW9uKHNwaGVyZUJvZHksIHRyaW1lc2hCb2R5LCBzcGhlcmVTaGFwZSwgdHJpbWVzaFNoYXBlLCByc2ksIHJzaik7CiAgICAgICAgICB0bXAudnN1Yihsb2NhbFNwaGVyZVBvcywgci5uaSk7CiAgICAgICAgICByLm5pLm5vcm1hbGl6ZSgpOwogICAgICAgICAgci5uaS5zY2FsZShzcGhlcmVTaGFwZS5yYWRpdXMsIHIucmkpOwogICAgICAgICAgci5yaS52YWRkKHNwaGVyZVBvcywgci5yaSk7CiAgICAgICAgICByLnJpLnZzdWIoc3BoZXJlQm9keS5wb3NpdGlvbiwgci5yaSk7CiAgICAgICAgICBUcmFuc2Zvcm0ucG9pbnRUb1dvcmxkRnJhbWUodHJpbWVzaFBvcywgdHJpbWVzaFF1YXQsIHRtcCwgdG1wKTsKICAgICAgICAgIHRtcC52c3ViKHRyaW1lc2hCb2R5LnBvc2l0aW9uLCByLnJqKTsKICAgICAgICAgIFRyYW5zZm9ybS52ZWN0b3JUb1dvcmxkRnJhbWUodHJpbWVzaFF1YXQsIHIubmksIHIubmkpOwogICAgICAgICAgVHJhbnNmb3JtLnZlY3RvclRvV29ybGRGcmFtZSh0cmltZXNoUXVhdCwgci5yaSwgci5yaSk7CiAgICAgICAgICB0aGlzLnJlc3VsdC5wdXNoKHIpOwogICAgICAgICAgdGhpcy5jcmVhdGVGcmljdGlvbkVxdWF0aW9uc0Zyb21Db250YWN0KHIsIHRoaXMuZnJpY3Rpb25SZXN1bHQpOwogICAgICAgIH0KICAgICAgfQoKICAgICAgdHJpYW5nbGVzLmxlbmd0aCA9IDA7CiAgICB9CgogICAgcGxhbmVUcmltZXNoKHBsYW5lU2hhcGUsIHRyaW1lc2hTaGFwZSwgcGxhbmVQb3MsIHRyaW1lc2hQb3MsIHBsYW5lUXVhdCwgdHJpbWVzaFF1YXQsIHBsYW5lQm9keSwgdHJpbWVzaEJvZHksIHJzaSwgcnNqLCBqdXN0VGVzdCkgewogICAgICAvLyBNYWtlIGNvbnRhY3RzIQogICAgICBjb25zdCB2ID0gbmV3IFZlYzMoKTsKICAgICAgY29uc3Qgbm9ybWFsID0gcGxhbmVUcmltZXNoX25vcm1hbDsKICAgICAgbm9ybWFsLnNldCgwLCAwLCAxKTsKICAgICAgcGxhbmVRdWF0LnZtdWx0KG5vcm1hbCwgbm9ybWFsKTsgLy8gVHVybiBub3JtYWwgYWNjb3JkaW5nIHRvIHBsYW5lCgogICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyaW1lc2hTaGFwZS52ZXJ0aWNlcy5sZW5ndGggLyAzOyBpKyspIHsKICAgICAgICAvLyBHZXQgd29ybGQgdmVydGV4IGZyb20gdHJpbWVzaAogICAgICAgIHRyaW1lc2hTaGFwZS5nZXRWZXJ0ZXgoaSwgdik7IC8vIFNhZmUgdXAKCiAgICAgICAgY29uc3QgdjIgPSBuZXcgVmVjMygpOwogICAgICAgIHYyLmNvcHkodik7CiAgICAgICAgVHJhbnNmb3JtLnBvaW50VG9Xb3JsZEZyYW1lKHRyaW1lc2hQb3MsIHRyaW1lc2hRdWF0LCB2Miwgdik7IC8vIENoZWNrIHBsYW5lIHNpZGUKCiAgICAgICAgY29uc3QgcmVscG9zID0gcGxhbmVUcmltZXNoX3JlbHBvczsKICAgICAgICB2LnZzdWIocGxhbmVQb3MsIHJlbHBvcyk7CiAgICAgICAgY29uc3QgZG90ID0gbm9ybWFsLmRvdChyZWxwb3MpOwoKICAgICAgICBpZiAoZG90IDw9IDAuMCkgewogICAgICAgICAgaWYgKGp1c3RUZXN0KSB7CiAgICAgICAgICAgIHJldHVybiB0cnVlOwogICAgICAgICAgfQoKICAgICAgICAgIGNvbnN0IHIgPSB0aGlzLmNyZWF0ZUNvbnRhY3RFcXVhdGlvbihwbGFuZUJvZHksIHRyaW1lc2hCb2R5LCBwbGFuZVNoYXBlLCB0cmltZXNoU2hhcGUsIHJzaSwgcnNqKTsKICAgICAgICAgIHIubmkuY29weShub3JtYWwpOyAvLyBDb250YWN0IG5vcm1hbCBpcyB0aGUgcGxhbmUgbm9ybWFsCiAgICAgICAgICAvLyBHZXQgdmVydGV4IHBvc2l0aW9uIHByb2plY3RlZCBvbiBwbGFuZQoKICAgICAgICAgIGNvbnN0IHByb2plY3RlZCA9IHBsYW5lVHJpbWVzaF9wcm9qZWN0ZWQ7CiAgICAgICAgICBub3JtYWwuc2NhbGUocmVscG9zLmRvdChub3JtYWwpLCBwcm9qZWN0ZWQpOwogICAgICAgICAgdi52c3ViKHByb2plY3RlZCwgcHJvamVjdGVkKTsgLy8gcmkgaXMgdGhlIHByb2plY3RlZCB3b3JsZCBwb3NpdGlvbiBtaW51cyBwbGFuZSBwb3NpdGlvbgoKICAgICAgICAgIHIucmkuY29weShwcm9qZWN0ZWQpOwogICAgICAgICAgci5yaS52c3ViKHBsYW5lQm9keS5wb3NpdGlvbiwgci5yaSk7CiAgICAgICAgICByLnJqLmNvcHkodik7CiAgICAgICAgICByLnJqLnZzdWIodHJpbWVzaEJvZHkucG9zaXRpb24sIHIucmopOyAvLyBTdG9yZSByZXN1bHQKCiAgICAgICAgICB0aGlzLnJlc3VsdC5wdXNoKHIpOwogICAgICAgICAgdGhpcy5jcmVhdGVGcmljdGlvbkVxdWF0aW9uc0Zyb21Db250YWN0KHIsIHRoaXMuZnJpY3Rpb25SZXN1bHQpOwogICAgICAgIH0KICAgICAgfQogICAgfSAvLyBjb252ZXhUcmltZXNoKAogICAgLy8gICBzaTogQ29udmV4UG9seWhlZHJvbiwgc2o6IFRyaW1lc2gsIHhpOiBWZWMzLCB4ajogVmVjMywgcWk6IFF1YXRlcm5pb24sIHFqOiBRdWF0ZXJuaW9uLAogICAgLy8gICBiaTogQm9keSwgYmo6IEJvZHksIHJzaT86IFNoYXBlIHwgbnVsbCwgcnNqPzogU2hhcGUgfCBudWxsLAogICAgLy8gICBmYWNlTGlzdEE/OiBudW1iZXJbXSB8IG51bGwsIGZhY2VMaXN0Qj86IG51bWJlcltdIHwgbnVsbCwKICAgIC8vICkgewogICAgLy8gICBjb25zdCBzZXBBeGlzID0gY29udmV4Q29udmV4X3NlcEF4aXM7CiAgICAvLyAgIGlmKHhpLmRpc3RhbmNlVG8oeGopID4gc2kuYm91bmRpbmdTcGhlcmVSYWRpdXMgKyBzai5ib3VuZGluZ1NwaGVyZVJhZGl1cyl7CiAgICAvLyAgICAgICByZXR1cm47CiAgICAvLyAgIH0KICAgIC8vICAgLy8gQ29uc3RydWN0IGEgdGVtcCBodWxsIGZvciBlYWNoIHRyaWFuZ2xlCiAgICAvLyAgIGNvbnN0IGh1bGxCID0gbmV3IENvbnZleFBvbHloZWRyb24oKTsKICAgIC8vICAgaHVsbEIuZmFjZXMgPSBbWzAsMSwyXV07CiAgICAvLyAgIGNvbnN0IHZhID0gbmV3IFZlYzMoKTsKICAgIC8vICAgY29uc3QgdmIgPSBuZXcgVmVjMygpOwogICAgLy8gICBjb25zdCB2YyA9IG5ldyBWZWMzKCk7CiAgICAvLyAgIGh1bGxCLnZlcnRpY2VzID0gWwogICAgLy8gICAgICAgdmEsCiAgICAvLyAgICAgICB2YiwKICAgIC8vICAgICAgIHZjCiAgICAvLyAgIF07CiAgICAvLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2ouaW5kaWNlcy5sZW5ndGggLyAzOyBpKyspIHsKICAgIC8vICAgICAgIGNvbnN0IHRyaWFuZ2xlTm9ybWFsID0gbmV3IFZlYzMoKTsKICAgIC8vICAgICAgIHNqLmdldE5vcm1hbChpLCB0cmlhbmdsZU5vcm1hbCk7CiAgICAvLyAgICAgICBodWxsQi5mYWNlTm9ybWFscyA9IFt0cmlhbmdsZU5vcm1hbF07CiAgICAvLyAgICAgICBzai5nZXRUcmlhbmdsZVZlcnRpY2VzKGksIHZhLCB2YiwgdmMpOwogICAgLy8gICAgICAgbGV0IGQgPSBzaS50ZXN0U2VwQXhpcyh0cmlhbmdsZU5vcm1hbCwgaHVsbEIsIHhpLCBxaSwgeGosIHFqKTsKICAgIC8vICAgICAgIGlmKCFkKXsKICAgIC8vICAgICAgICAgICB0cmlhbmdsZU5vcm1hbC5zY2FsZSgtMSwgdHJpYW5nbGVOb3JtYWwpOwogICAgLy8gICAgICAgICAgIGQgPSBzaS50ZXN0U2VwQXhpcyh0cmlhbmdsZU5vcm1hbCwgaHVsbEIsIHhpLCBxaSwgeGosIHFqKTsKICAgIC8vICAgICAgICAgICBpZighZCl7CiAgICAvLyAgICAgICAgICAgICAgIGNvbnRpbnVlOwogICAgLy8gICAgICAgICAgIH0KICAgIC8vICAgICAgIH0KICAgIC8vICAgICAgIGNvbnN0IHJlczogQ29udmV4UG9seWhlZHJvbkNvbnRhY3RQb2ludFtdID0gW107CiAgICAvLyAgICAgICBjb25zdCBxID0gY29udmV4Q29udmV4X3E7CiAgICAvLyAgICAgICBzaS5jbGlwQWdhaW5zdEh1bGwoeGkscWksaHVsbEIseGoscWosdHJpYW5nbGVOb3JtYWwsLTEwMCwxMDAscmVzKTsKICAgIC8vICAgICAgIGZvcihsZXQgaiA9IDA7IGogIT09IHJlcy5sZW5ndGg7IGorKyl7CiAgICAvLyAgICAgICAgICAgY29uc3QgciA9IHRoaXMuY3JlYXRlQ29udGFjdEVxdWF0aW9uKGJpLGJqLHNpLHNqLHJzaSxyc2opLAogICAgLy8gICAgICAgICAgICAgICByaSA9IHIucmksCiAgICAvLyAgICAgICAgICAgICAgIHJqID0gci5yajsKICAgIC8vICAgICAgICAgICByLm5pLmNvcHkodHJpYW5nbGVOb3JtYWwpOwogICAgLy8gICAgICAgICAgIHIubmkubmVnYXRlKHIubmkpOwogICAgLy8gICAgICAgICAgIHJlc1tqXS5ub3JtYWwubmVnYXRlKHEpOwogICAgLy8gICAgICAgICAgIHEubXVsdChyZXNbal0uZGVwdGgsIHEpOwogICAgLy8gICAgICAgICAgIHJlc1tqXS5wb2ludC52YWRkKHEsIHJpKTsKICAgIC8vICAgICAgICAgICByai5jb3B5KHJlc1tqXS5wb2ludCk7CiAgICAvLyAgICAgICAgICAgLy8gQ29udGFjdCBwb2ludHMgYXJlIGluIHdvcmxkIGNvb3JkaW5hdGVzLiBUcmFuc2Zvcm0gYmFjayB0byByZWxhdGl2ZQogICAgLy8gICAgICAgICAgIHJpLnZzdWIoeGkscmkpOwogICAgLy8gICAgICAgICAgIHJqLnZzdWIoeGoscmopOwogICAgLy8gICAgICAgICAgIC8vIE1ha2UgcmVsYXRpdmUgdG8gYm9kaWVzCiAgICAvLyAgICAgICAgICAgcmkudmFkZCh4aSwgcmkpOwogICAgLy8gICAgICAgICAgIHJpLnZzdWIoYmkucG9zaXRpb24sIHJpKTsKICAgIC8vICAgICAgICAgICByai52YWRkKHhqLCByaik7CiAgICAvLyAgICAgICAgICAgcmoudnN1Yihiai5wb3NpdGlvbiwgcmopOwogICAgLy8gICAgICAgICAgIHJlc3VsdC5wdXNoKHIpOwogICAgLy8gICAgICAgfQogICAgLy8gICB9CiAgICAvLyB9CgoKICB9CiAgY29uc3QgYXZlcmFnZU5vcm1hbCA9IG5ldyBWZWMzKCk7CiAgY29uc3QgYXZlcmFnZUNvbnRhY3RQb2ludEEgPSBuZXcgVmVjMygpOwogIGNvbnN0IGF2ZXJhZ2VDb250YWN0UG9pbnRCID0gbmV3IFZlYzMoKTsKICBjb25zdCB0bXBWZWMxID0gbmV3IFZlYzMoKTsKICBjb25zdCB0bXBWZWMyID0gbmV3IFZlYzMoKTsKICBjb25zdCB0bXBRdWF0MSA9IG5ldyBRdWF0ZXJuaW9uKCk7CiAgY29uc3QgdG1wUXVhdDIgPSBuZXcgUXVhdGVybmlvbigpOwoKICBjb25zdCBwbGFuZVRyaW1lc2hfbm9ybWFsID0gbmV3IFZlYzMoKTsKICBjb25zdCBwbGFuZVRyaW1lc2hfcmVscG9zID0gbmV3IFZlYzMoKTsKICBjb25zdCBwbGFuZVRyaW1lc2hfcHJvamVjdGVkID0gbmV3IFZlYzMoKTsKICBjb25zdCBzcGhlcmVUcmltZXNoX25vcm1hbCA9IG5ldyBWZWMzKCk7CiAgY29uc3Qgc3BoZXJlVHJpbWVzaF9yZWxwb3MgPSBuZXcgVmVjMygpOwogIG5ldyBWZWMzKCk7CiAgY29uc3Qgc3BoZXJlVHJpbWVzaF92ID0gbmV3IFZlYzMoKTsKICBjb25zdCBzcGhlcmVUcmltZXNoX3YyID0gbmV3IFZlYzMoKTsKICBjb25zdCBzcGhlcmVUcmltZXNoX2VkZ2VWZXJ0ZXhBID0gbmV3IFZlYzMoKTsKICBjb25zdCBzcGhlcmVUcmltZXNoX2VkZ2VWZXJ0ZXhCID0gbmV3IFZlYzMoKTsKICBjb25zdCBzcGhlcmVUcmltZXNoX2VkZ2VWZWN0b3IgPSBuZXcgVmVjMygpOwogIGNvbnN0IHNwaGVyZVRyaW1lc2hfZWRnZVZlY3RvclVuaXQgPSBuZXcgVmVjMygpOwogIGNvbnN0IHNwaGVyZVRyaW1lc2hfbG9jYWxTcGhlcmVQb3MgPSBuZXcgVmVjMygpOwogIGNvbnN0IHNwaGVyZVRyaW1lc2hfdG1wID0gbmV3IFZlYzMoKTsKICBjb25zdCBzcGhlcmVUcmltZXNoX3ZhID0gbmV3IFZlYzMoKTsKICBjb25zdCBzcGhlcmVUcmltZXNoX3ZiID0gbmV3IFZlYzMoKTsKICBjb25zdCBzcGhlcmVUcmltZXNoX3ZjID0gbmV3IFZlYzMoKTsKICBjb25zdCBzcGhlcmVUcmltZXNoX2xvY2FsU3BoZXJlQUFCQiA9IG5ldyBBQUJCKCk7CiAgY29uc3Qgc3BoZXJlVHJpbWVzaF90cmlhbmdsZXMgPSBbXTsKICBjb25zdCBwb2ludF9vbl9wbGFuZV90b19zcGhlcmUgPSBuZXcgVmVjMygpOwogIGNvbnN0IHBsYW5lX3RvX3NwaGVyZV9vcnRobyA9IG5ldyBWZWMzKCk7IC8vIFNlZSBodHRwOi8vYnVsbGV0cGh5c2ljcy5jb20vQnVsbGV0L0J1bGxldEZ1bGwvU3BoZXJlVHJpYW5nbGVEZXRlY3Rvcl84Y3BwX3NvdXJjZS5odG1sCgogIGNvbnN0IHBvaW50SW5Qb2x5Z29uX2VkZ2UgPSBuZXcgVmVjMygpOwogIGNvbnN0IHBvaW50SW5Qb2x5Z29uX2VkZ2VfeF9ub3JtYWwgPSBuZXcgVmVjMygpOwogIGNvbnN0IHBvaW50SW5Qb2x5Z29uX3Z0cCA9IG5ldyBWZWMzKCk7CgogIGZ1bmN0aW9uIHBvaW50SW5Qb2x5Z29uKHZlcnRzLCBub3JtYWwsIHApIHsKICAgIGxldCBwb3NpdGl2ZVJlc3VsdCA9IG51bGw7CiAgICBjb25zdCBOID0gdmVydHMubGVuZ3RoOwoKICAgIGZvciAobGV0IGkgPSAwOyBpICE9PSBOOyBpKyspIHsKICAgICAgY29uc3QgdiA9IHZlcnRzW2ldOyAvLyBHZXQgZWRnZSB0byB0aGUgbmV4dCB2ZXJ0ZXgKCiAgICAgIGNvbnN0IGVkZ2UgPSBwb2ludEluUG9seWdvbl9lZGdlOwogICAgICB2ZXJ0c1soaSArIDEpICUgTl0udnN1Yih2LCBlZGdlKTsgLy8gR2V0IGNyb3NzIHByb2R1Y3QgYmV0d2VlbiBwb2x5Z29uIG5vcm1hbCBhbmQgdGhlIGVkZ2UKCiAgICAgIGNvbnN0IGVkZ2VfeF9ub3JtYWwgPSBwb2ludEluUG9seWdvbl9lZGdlX3hfbm9ybWFsOyAvL2NvbnN0IGVkZ2VfeF9ub3JtYWwgPSBuZXcgVmVjMygpOwoKICAgICAgZWRnZS5jcm9zcyhub3JtYWwsIGVkZ2VfeF9ub3JtYWwpOyAvLyBHZXQgdmVjdG9yIGJldHdlZW4gcG9pbnQgYW5kIGN1cnJlbnQgdmVydGV4CgogICAgICBjb25zdCB2ZXJ0ZXhfdG9fcCA9IHBvaW50SW5Qb2x5Z29uX3Z0cDsKICAgICAgcC52c3ViKHYsIHZlcnRleF90b19wKTsgLy8gVGhpcyBkb3QgcHJvZHVjdCBkZXRlcm1pbmVzIHdoaWNoIHNpZGUgb2YgdGhlIGVkZ2UgdGhlIHBvaW50IGlzCgogICAgICBjb25zdCByID0gZWRnZV94X25vcm1hbC5kb3QodmVydGV4X3RvX3ApOyAvLyBJZiBhbGwgc3VjaCBkb3QgcHJvZHVjdHMgaGF2ZSBzYW1lIHNpZ24sIHdlIGFyZSBpbnNpZGUgdGhlIHBvbHlnb24uCgogICAgICBpZiAocG9zaXRpdmVSZXN1bHQgPT09IG51bGwgfHwgciA+IDAgJiYgcG9zaXRpdmVSZXN1bHQgPT09IHRydWUgfHwgciA8PSAwICYmIHBvc2l0aXZlUmVzdWx0ID09PSBmYWxzZSkgewogICAgICAgIGlmIChwb3NpdGl2ZVJlc3VsdCA9PT0gbnVsbCkgewogICAgICAgICAgcG9zaXRpdmVSZXN1bHQgPSByID4gMDsKICAgICAgICB9CgogICAgICAgIGNvbnRpbnVlOwogICAgICB9IGVsc2UgewogICAgICAgIHJldHVybiBmYWxzZTsgLy8gRW5jb3VudGVyZWQgc29tZSBvdGhlciBzaWduLiBFeGl0LgogICAgICB9CiAgICB9IC8vIElmIHdlIGdvdCBoZXJlLCBhbGwgZG90IHByb2R1Y3RzIHdlcmUgb2YgdGhlIHNhbWUgc2lnbi4KCgogICAgcmV0dXJuIHRydWU7CiAgfQoKICBjb25zdCBib3hfdG9fc3BoZXJlID0gbmV3IFZlYzMoKTsKICBjb25zdCBzcGhlcmVCb3hfbnMgPSBuZXcgVmVjMygpOwogIGNvbnN0IHNwaGVyZUJveF9uczEgPSBuZXcgVmVjMygpOwogIGNvbnN0IHNwaGVyZUJveF9uczIgPSBuZXcgVmVjMygpOwogIGNvbnN0IHNwaGVyZUJveF9zaWRlcyA9IFtuZXcgVmVjMygpLCBuZXcgVmVjMygpLCBuZXcgVmVjMygpLCBuZXcgVmVjMygpLCBuZXcgVmVjMygpLCBuZXcgVmVjMygpXTsKICBjb25zdCBzcGhlcmVCb3hfc3BoZXJlX3RvX2Nvcm5lciA9IG5ldyBWZWMzKCk7CiAgY29uc3Qgc3BoZXJlQm94X3NpZGVfbnMgPSBuZXcgVmVjMygpOwogIGNvbnN0IHNwaGVyZUJveF9zaWRlX25zMSA9IG5ldyBWZWMzKCk7CiAgY29uc3Qgc3BoZXJlQm94X3NpZGVfbnMyID0gbmV3IFZlYzMoKTsKICBjb25zdCBjb252ZXhfdG9fc3BoZXJlID0gbmV3IFZlYzMoKTsKICBjb25zdCBzcGhlcmVDb252ZXhfZWRnZSA9IG5ldyBWZWMzKCk7CiAgY29uc3Qgc3BoZXJlQ29udmV4X2VkZ2VVbml0ID0gbmV3IFZlYzMoKTsKICBjb25zdCBzcGhlcmVDb252ZXhfc3BoZXJlVG9Db3JuZXIgPSBuZXcgVmVjMygpOwogIGNvbnN0IHNwaGVyZUNvbnZleF93b3JsZENvcm5lciA9IG5ldyBWZWMzKCk7CiAgY29uc3Qgc3BoZXJlQ29udmV4X3dvcmxkTm9ybWFsID0gbmV3IFZlYzMoKTsKICBjb25zdCBzcGhlcmVDb252ZXhfd29ybGRQb2ludCA9IG5ldyBWZWMzKCk7CiAgY29uc3Qgc3BoZXJlQ29udmV4X3dvcmxkU3BoZXJlUG9pbnRDbG9zZXN0VG9QbGFuZSA9IG5ldyBWZWMzKCk7CiAgY29uc3Qgc3BoZXJlQ29udmV4X3BlbmV0cmF0aW9uVmVjID0gbmV3IFZlYzMoKTsKICBjb25zdCBzcGhlcmVDb252ZXhfc3BoZXJlVG9Xb3JsZFBvaW50ID0gbmV3IFZlYzMoKTsKICBuZXcgVmVjMygpOwogIG5ldyBWZWMzKCk7CiAgY29uc3QgcGxhbmVDb252ZXhfdiA9IG5ldyBWZWMzKCk7CiAgY29uc3QgcGxhbmVDb252ZXhfbm9ybWFsID0gbmV3IFZlYzMoKTsKICBjb25zdCBwbGFuZUNvbnZleF9yZWxwb3MgPSBuZXcgVmVjMygpOwogIGNvbnN0IHBsYW5lQ29udmV4X3Byb2plY3RlZCA9IG5ldyBWZWMzKCk7CiAgY29uc3QgY29udmV4Q29udmV4X3NlcEF4aXMgPSBuZXcgVmVjMygpOwogIGNvbnN0IGNvbnZleENvbnZleF9xID0gbmV3IFZlYzMoKTsKICBjb25zdCBwYXJ0aWNsZVBsYW5lX25vcm1hbCA9IG5ldyBWZWMzKCk7CiAgY29uc3QgcGFydGljbGVQbGFuZV9yZWxwb3MgPSBuZXcgVmVjMygpOwogIGNvbnN0IHBhcnRpY2xlUGxhbmVfcHJvamVjdGVkID0gbmV3IFZlYzMoKTsKICBjb25zdCBwYXJ0aWNsZVNwaGVyZV9ub3JtYWwgPSBuZXcgVmVjMygpOyAvLyBXSVAKCiAgY29uc3QgY3FqID0gbmV3IFF1YXRlcm5pb24oKTsKICBjb25zdCBjb252ZXhQYXJ0aWNsZV9sb2NhbCA9IG5ldyBWZWMzKCk7CiAgbmV3IFZlYzMoKTsKICBjb25zdCBjb252ZXhQYXJ0aWNsZV9wZW5ldHJhdGVkRmFjZU5vcm1hbCA9IG5ldyBWZWMzKCk7CiAgY29uc3QgY29udmV4UGFydGljbGVfdmVydGV4VG9QYXJ0aWNsZSA9IG5ldyBWZWMzKCk7CiAgY29uc3QgY29udmV4UGFydGljbGVfd29ybGRQZW5ldHJhdGlvblZlYyA9IG5ldyBWZWMzKCk7CiAgY29uc3QgY29udmV4SGVpZ2h0ZmllbGRfdG1wMSA9IG5ldyBWZWMzKCk7CiAgY29uc3QgY29udmV4SGVpZ2h0ZmllbGRfdG1wMiA9IG5ldyBWZWMzKCk7CiAgY29uc3QgY29udmV4SGVpZ2h0ZmllbGRfZmFjZUxpc3QgPSBbMF07CiAgY29uc3Qgc3BoZXJlSGVpZ2h0ZmllbGRfdG1wMSA9IG5ldyBWZWMzKCk7CiAgY29uc3Qgc3BoZXJlSGVpZ2h0ZmllbGRfdG1wMiA9IG5ldyBWZWMzKCk7CgogIGNsYXNzIE92ZXJsYXBLZWVwZXIgewogICAgLyoqCiAgICAgKiBAdG9kbyBSZW1vdmUgdXNlbGVzcyBjb25zdHJ1Y3RvcgogICAgICovCiAgICBjb25zdHJ1Y3RvcigpIHsKICAgICAgdGhpcy5jdXJyZW50ID0gW107CiAgICAgIHRoaXMucHJldmlvdXMgPSBbXTsKICAgIH0KICAgIC8qKgogICAgICogZ2V0S2V5CiAgICAgKi8KCgogICAgZ2V0S2V5KGksIGopIHsKICAgICAgaWYgKGogPCBpKSB7CiAgICAgICAgY29uc3QgdGVtcCA9IGo7CiAgICAgICAgaiA9IGk7CiAgICAgICAgaSA9IHRlbXA7CiAgICAgIH0KCiAgICAgIHJldHVybiBpIDw8IDE2IHwgajsKICAgIH0KICAgIC8qKgogICAgICogc2V0CiAgICAgKi8KCgogICAgc2V0KGksIGopIHsKICAgICAgLy8gSW5zZXJ0aW9uIHNvcnQuIFRoaXMgd2F5IHRoZSBkaWZmIHdpbGwgaGF2ZSBsaW5lYXIgY29tcGxleGl0eS4KICAgICAgY29uc3Qga2V5ID0gdGhpcy5nZXRLZXkoaSwgaik7CiAgICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLmN1cnJlbnQ7CiAgICAgIGxldCBpbmRleCA9IDA7CgogICAgICB3aGlsZSAoa2V5ID4gY3VycmVudFtpbmRleF0pIHsKICAgICAgICBpbmRleCsrOwogICAgICB9CgogICAgICBpZiAoa2V5ID09PSBjdXJyZW50W2luZGV4XSkgewogICAgICAgIHJldHVybjsgLy8gUGFpciB3YXMgYWxyZWFkeSBhZGRlZAogICAgICB9CgogICAgICBmb3IgKGxldCBqID0gY3VycmVudC5sZW5ndGggLSAxOyBqID49IGluZGV4OyBqLS0pIHsKICAgICAgICBjdXJyZW50W2ogKyAxXSA9IGN1cnJlbnRbal07CiAgICAgIH0KCiAgICAgIGN1cnJlbnRbaW5kZXhdID0ga2V5OwogICAgfQogICAgLyoqCiAgICAgKiB0aWNrCiAgICAgKi8KCgogICAgdGljaygpIHsKICAgICAgY29uc3QgdG1wID0gdGhpcy5jdXJyZW50OwogICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLnByZXZpb3VzOwogICAgICB0aGlzLnByZXZpb3VzID0gdG1wOwogICAgICB0aGlzLmN1cnJlbnQubGVuZ3RoID0gMDsKICAgIH0KICAgIC8qKgogICAgICogZ2V0RGlmZgogICAgICovCgoKICAgIGdldERpZmYoYWRkaXRpb25zLCByZW1vdmFscykgewogICAgICBjb25zdCBhID0gdGhpcy5jdXJyZW50OwogICAgICBjb25zdCBiID0gdGhpcy5wcmV2aW91czsKICAgICAgY29uc3QgYWwgPSBhLmxlbmd0aDsKICAgICAgY29uc3QgYmwgPSBiLmxlbmd0aDsKICAgICAgbGV0IGogPSAwOwoKICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbDsgaSsrKSB7CiAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7CiAgICAgICAgY29uc3Qga2V5QSA9IGFbaV07CgogICAgICAgIHdoaWxlIChrZXlBID4gYltqXSkgewogICAgICAgICAgaisrOwogICAgICAgIH0KCiAgICAgICAgZm91bmQgPSBrZXlBID09PSBiW2pdOwoKICAgICAgICBpZiAoIWZvdW5kKSB7CiAgICAgICAgICB1bnBhY2tBbmRQdXNoKGFkZGl0aW9ucywga2V5QSk7CiAgICAgICAgfQogICAgICB9CgogICAgICBqID0gMDsKCiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmw7IGkrKykgewogICAgICAgIGxldCBmb3VuZCA9IGZhbHNlOwogICAgICAgIGNvbnN0IGtleUIgPSBiW2ldOwoKICAgICAgICB3aGlsZSAoa2V5QiA+IGFbal0pIHsKICAgICAgICAgIGorKzsKICAgICAgICB9CgogICAgICAgIGZvdW5kID0gYVtqXSA9PT0ga2V5QjsKCiAgICAgICAgaWYgKCFmb3VuZCkgewogICAgICAgICAgdW5wYWNrQW5kUHVzaChyZW1vdmFscywga2V5Qik7CiAgICAgICAgfQogICAgICB9CiAgICB9CgogIH0KCiAgZnVuY3Rpb24gdW5wYWNrQW5kUHVzaChhcnJheSwga2V5KSB7CiAgICBhcnJheS5wdXNoKChrZXkgJiAweGZmZmYwMDAwKSA+PiAxNiwga2V5ICYgMHgwMDAwZmZmZik7CiAgfQoKICBjb25zdCBnZXRLZXkgPSAoaSwgaikgPT4gaSA8IGogPyBgJHtpfS0ke2p9YCA6IGAke2p9LSR7aX1gOwogIC8qKgogICAqIFR1cGxlRGljdGlvbmFyeQogICAqLwoKCiAgY2xhc3MgVHVwbGVEaWN0aW9uYXJ5IHsKICAgIGNvbnN0cnVjdG9yKCkgewogICAgICB0aGlzLmRhdGEgPSB7CiAgICAgICAga2V5czogW10KICAgICAgfTsKICAgIH0KCiAgICAvKiogZ2V0ICovCiAgICBnZXQoaSwgaikgewogICAgICBjb25zdCBrZXkgPSBnZXRLZXkoaSwgaik7CiAgICAgIHJldHVybiB0aGlzLmRhdGFba2V5XTsKICAgIH0KICAgIC8qKiBzZXQgKi8KCgogICAgc2V0KGksIGosIHZhbHVlKSB7CiAgICAgIGNvbnN0IGtleSA9IGdldEtleShpLCBqKTsgLy8gQ2hlY2sgaWYga2V5IGFscmVhZHkgZXhpc3RzCgogICAgICBpZiAoIXRoaXMuZ2V0KGksIGopKSB7CiAgICAgICAgdGhpcy5kYXRhLmtleXMucHVzaChrZXkpOwogICAgICB9CgogICAgICB0aGlzLmRhdGFba2V5XSA9IHZhbHVlOwogICAgfQogICAgLyoqIGRlbGV0ZSAqLwoKCiAgICBkZWxldGUoaSwgaikgewogICAgICBjb25zdCBrZXkgPSBnZXRLZXkoaSwgaik7CiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5kYXRhLmtleXMuaW5kZXhPZihrZXkpOwoKICAgICAgaWYgKGluZGV4ICE9PSAtMSkgewogICAgICAgIHRoaXMuZGF0YS5rZXlzLnNwbGljZShpbmRleCwgMSk7CiAgICAgIH0KCiAgICAgIGRlbGV0ZSB0aGlzLmRhdGFba2V5XTsKICAgIH0KICAgIC8qKiByZXNldCAqLwoKCiAgICByZXNldCgpIHsKICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTsKICAgICAgY29uc3Qga2V5cyA9IGRhdGEua2V5czsKCiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCA+IDApIHsKICAgICAgICBjb25zdCBrZXkgPSBrZXlzLnBvcCgpOwogICAgICAgIGRlbGV0ZSBkYXRhW2tleV07CiAgICAgIH0KICAgIH0KCiAgfQoKICAvKioKICAgKiBUaGUgcGh5c2ljcyB3b3JsZAogICAqLwogIGNsYXNzIFdvcmxkIGV4dGVuZHMgRXZlbnRUYXJnZXQgewogICAgLyoqCiAgICAgKiBDdXJyZW50bHkgLyBsYXN0IHVzZWQgdGltZXN0ZXAuIElzIHNldCB0byAtMSBpZiBub3QgYXZhaWxhYmxlLiBUaGlzIHZhbHVlIGlzIHVwZGF0ZWQgYmVmb3JlIGVhY2ggaW50ZXJuYWwgc3RlcCwgd2hpY2ggbWVhbnMgdGhhdCBpdCBpcyAiZnJlc2giIGluc2lkZSBldmVudCBjYWxsYmFja3MuCiAgICAgKi8KCiAgICAvKioKICAgICAqIE1ha2VzIGJvZGllcyBnbyB0byBzbGVlcCB3aGVuIHRoZXkndmUgYmVlbiBpbmFjdGl2ZS4KICAgICAqIEBkZWZhdWx0IGZhbHNlCiAgICAgKi8KCiAgICAvKioKICAgICAqIEFsbCB0aGUgY3VycmVudCBjb250YWN0cyAoaW5zdGFuY2VzIG9mIENvbnRhY3RFcXVhdGlvbikgaW4gdGhlIHdvcmxkLgogICAgICovCgogICAgLyoqCiAgICAgKiBIb3cgb2Z0ZW4gdG8gbm9ybWFsaXplIHF1YXRlcm5pb25zLiBTZXQgdG8gMCBmb3IgZXZlcnkgc3RlcCwgMSBmb3IgZXZlcnkgc2Vjb25kIGV0Yy4uIEEgbGFyZ2VyIHZhbHVlIGluY3JlYXNlcyBwZXJmb3JtYW5jZS4gSWYgYm9kaWVzIHRlbmQgdG8gZXhwbG9kZSwgc2V0IHRvIGEgc21hbGxlciB2YWx1ZSAoemVybyB0byBiZSBzdXJlIG5vdGhpbmcgY2FuIGdvIHdyb25nKS4KICAgICAqIEBkZWZhdWx0IDAKICAgICAqLwoKICAgIC8qKgogICAgICogU2V0IHRvIHRydWUgdG8gdXNlIGZhc3QgcXVhdGVybmlvbiBub3JtYWxpemF0aW9uLiBJdCBpcyBvZnRlbiBlbm91Z2ggYWNjdXJhdGUgdG8gdXNlLgogICAgICogSWYgYm9kaWVzIHRlbmQgdG8gZXhwbG9kZSwgc2V0IHRvIGZhbHNlLgogICAgICogQGRlZmF1bHQgZmFsc2UKICAgICAqLwoKICAgIC8qKgogICAgICogVGhlIHdhbGwtY2xvY2sgdGltZSBzaW5jZSBzaW11bGF0aW9uIHN0YXJ0LgogICAgICovCgogICAgLyoqCiAgICAgKiBOdW1iZXIgb2YgdGltZXN0ZXBzIHRha2VuIHNpbmNlIHN0YXJ0LgogICAgICovCgogICAgLyoqCiAgICAgKiBEZWZhdWx0IGFuZCBsYXN0IHRpbWVzdGVwIHNpemVzLgogICAgICovCgogICAgLyoqCiAgICAgKiBUaGUgZ3Jhdml0eSBvZiB0aGUgd29ybGQuCiAgICAgKi8KCiAgICAvKioKICAgICAqIFRoZSBicm9hZHBoYXNlIGFsZ29yaXRobSB0byB1c2UuCiAgICAgKiBAZGVmYXVsdCBOYWl2ZUJyb2FkcGhhc2UKICAgICAqLwoKICAgIC8qKgogICAgICogQWxsIGJvZGllcyBpbiB0aGlzIHdvcmxkCiAgICAgKi8KCiAgICAvKioKICAgICAqIFRydWUgaWYgYW55IGJvZGllcyBhcmUgbm90IHNsZWVwaW5nLCBmYWxzZSBpZiBldmVyeSBib2R5IGlzIHNsZWVwaW5nLgogICAgICovCgogICAgLyoqCiAgICAgKiBUaGUgc29sdmVyIGFsZ29yaXRobSB0byB1c2UuCiAgICAgKiBAZGVmYXVsdCBHU1NvbHZlcgogICAgICovCgogICAgLyoqCiAgICAgKiBjb2xsaXNpb25NYXRyaXgKICAgICAqLwoKICAgIC8qKgogICAgICogQ29sbGlzaW9uTWF0cml4IGZyb20gdGhlIHByZXZpb3VzIHN0ZXAuCiAgICAgKi8KCiAgICAvKioKICAgICAqIEFsbCBhZGRlZCBjb250YWN0bWF0ZXJpYWxzLgogICAgICovCgogICAgLyoqCiAgICAgKiBVc2VkIHRvIGxvb2sgdXAgYSBDb250YWN0TWF0ZXJpYWwgZ2l2ZW4gdHdvIGluc3RhbmNlcyBvZiBNYXRlcmlhbC4KICAgICAqLwoKICAgIC8qKgogICAgICogVGhlIGRlZmF1bHQgbWF0ZXJpYWwgb2YgdGhlIGJvZGllcy4KICAgICAqLwoKICAgIC8qKgogICAgICogVGhpcyBjb250YWN0IG1hdGVyaWFsIGlzIHVzZWQgaWYgbm8gc3VpdGFibGUgY29udGFjdG1hdGVyaWFsIGlzIGZvdW5kIGZvciBhIGNvbnRhY3QuCiAgICAgKi8KCiAgICAvKioKICAgICAqIFRpbWUgYWNjdW11bGF0b3IgZm9yIGludGVycG9sYXRpb24uCiAgICAgKiBAc2VlIGh0dHBzOi8vZ2FmZmVyb25nYW1lcy5jb20vZ2FtZS1waHlzaWNzL2ZpeC15b3VyLXRpbWVzdGVwLwogICAgICovCgogICAgLyoqCiAgICAgKiBEaXNwYXRjaGVkIGFmdGVyIGEgYm9keSBoYXMgYmVlbiBhZGRlZCB0byB0aGUgd29ybGQuCiAgICAgKi8KCiAgICAvKioKICAgICAqIERpc3BhdGNoZWQgYWZ0ZXIgYSBib2R5IGhhcyBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgd29ybGQuCiAgICAgKi8KICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHsKICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgewogICAgICAgIG9wdGlvbnMgPSB7fTsKICAgICAgfQoKICAgICAgc3VwZXIoKTsKICAgICAgdGhpcy5kdCA9IC0xOwogICAgICB0aGlzLmFsbG93U2xlZXAgPSAhIW9wdGlvbnMuYWxsb3dTbGVlcDsKICAgICAgdGhpcy5jb250YWN0cyA9IFtdOwogICAgICB0aGlzLmZyaWN0aW9uRXF1YXRpb25zID0gW107CiAgICAgIHRoaXMucXVhdE5vcm1hbGl6ZVNraXAgPSBvcHRpb25zLnF1YXROb3JtYWxpemVTa2lwICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLnF1YXROb3JtYWxpemVTa2lwIDogMDsKICAgICAgdGhpcy5xdWF0Tm9ybWFsaXplRmFzdCA9IG9wdGlvbnMucXVhdE5vcm1hbGl6ZUZhc3QgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMucXVhdE5vcm1hbGl6ZUZhc3QgOiBmYWxzZTsKICAgICAgdGhpcy50aW1lID0gMC4wOwogICAgICB0aGlzLnN0ZXBudW1iZXIgPSAwOwogICAgICB0aGlzLmRlZmF1bHRfZHQgPSAxIC8gNjA7CiAgICAgIHRoaXMubmV4dElkID0gMDsKICAgICAgdGhpcy5ncmF2aXR5ID0gbmV3IFZlYzMoKTsKCiAgICAgIGlmIChvcHRpb25zLmdyYXZpdHkpIHsKICAgICAgICB0aGlzLmdyYXZpdHkuY29weShvcHRpb25zLmdyYXZpdHkpOwogICAgICB9CgogICAgICB0aGlzLmJyb2FkcGhhc2UgPSBvcHRpb25zLmJyb2FkcGhhc2UgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuYnJvYWRwaGFzZSA6IG5ldyBOYWl2ZUJyb2FkcGhhc2UoKTsKICAgICAgdGhpcy5ib2RpZXMgPSBbXTsKICAgICAgdGhpcy5oYXNBY3RpdmVCb2RpZXMgPSBmYWxzZTsKICAgICAgdGhpcy5zb2x2ZXIgPSBvcHRpb25zLnNvbHZlciAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5zb2x2ZXIgOiBuZXcgR1NTb2x2ZXIoKTsKICAgICAgdGhpcy5jb25zdHJhaW50cyA9IFtdOwogICAgICB0aGlzLm5hcnJvd3BoYXNlID0gbmV3IE5hcnJvd3BoYXNlKHRoaXMpOwogICAgICB0aGlzLmNvbGxpc2lvbk1hdHJpeCA9IG5ldyBBcnJheUNvbGxpc2lvbk1hdHJpeCgpOwogICAgICB0aGlzLmNvbGxpc2lvbk1hdHJpeFByZXZpb3VzID0gbmV3IEFycmF5Q29sbGlzaW9uTWF0cml4KCk7CiAgICAgIHRoaXMuYm9keU92ZXJsYXBLZWVwZXIgPSBuZXcgT3ZlcmxhcEtlZXBlcigpOwogICAgICB0aGlzLnNoYXBlT3ZlcmxhcEtlZXBlciA9IG5ldyBPdmVybGFwS2VlcGVyKCk7CiAgICAgIHRoaXMuY29udGFjdG1hdGVyaWFscyA9IFtdOwogICAgICB0aGlzLmNvbnRhY3RNYXRlcmlhbFRhYmxlID0gbmV3IFR1cGxlRGljdGlvbmFyeSgpOwogICAgICB0aGlzLmRlZmF1bHRNYXRlcmlhbCA9IG5ldyBNYXRlcmlhbCgnZGVmYXVsdCcpOwogICAgICB0aGlzLmRlZmF1bHRDb250YWN0TWF0ZXJpYWwgPSBuZXcgQ29udGFjdE1hdGVyaWFsKHRoaXMuZGVmYXVsdE1hdGVyaWFsLCB0aGlzLmRlZmF1bHRNYXRlcmlhbCwgewogICAgICAgIGZyaWN0aW9uOiAwLjMsCiAgICAgICAgcmVzdGl0dXRpb246IDAuMAogICAgICB9KTsKICAgICAgdGhpcy5kb1Byb2ZpbGluZyA9IGZhbHNlOwogICAgICB0aGlzLnByb2ZpbGUgPSB7CiAgICAgICAgc29sdmU6IDAsCiAgICAgICAgbWFrZUNvbnRhY3RDb25zdHJhaW50czogMCwKICAgICAgICBicm9hZHBoYXNlOiAwLAogICAgICAgIGludGVncmF0ZTogMCwKICAgICAgICBuYXJyb3dwaGFzZTogMAogICAgICB9OwogICAgICB0aGlzLmFjY3VtdWxhdG9yID0gMDsKICAgICAgdGhpcy5zdWJzeXN0ZW1zID0gW107CiAgICAgIHRoaXMuYWRkQm9keUV2ZW50ID0gewogICAgICAgIHR5cGU6ICdhZGRCb2R5JywKICAgICAgICBib2R5OiBudWxsCiAgICAgIH07CiAgICAgIHRoaXMucmVtb3ZlQm9keUV2ZW50ID0gewogICAgICAgIHR5cGU6ICdyZW1vdmVCb2R5JywKICAgICAgICBib2R5OiBudWxsCiAgICAgIH07CiAgICAgIHRoaXMuaWRUb0JvZHlNYXAgPSB7fTsKICAgICAgdGhpcy5icm9hZHBoYXNlLnNldFdvcmxkKHRoaXMpOwogICAgfQogICAgLyoqCiAgICAgKiBHZXQgdGhlIGNvbnRhY3QgbWF0ZXJpYWwgYmV0d2VlbiBtYXRlcmlhbHMgbTEgYW5kIG0yCiAgICAgKiBAcmV0dXJuIFRoZSBjb250YWN0IG1hdGVyaWFsIGlmIGl0IHdhcyBmb3VuZC4KICAgICAqLwoKCiAgICBnZXRDb250YWN0TWF0ZXJpYWwobTEsIG0yKSB7CiAgICAgIHJldHVybiB0aGlzLmNvbnRhY3RNYXRlcmlhbFRhYmxlLmdldChtMS5pZCwgbTIuaWQpOwogICAgfQogICAgLyoqCiAgICAgKiBTdG9yZSBvbGQgY29sbGlzaW9uIHN0YXRlIGluZm8KICAgICAqLwoKCiAgICBjb2xsaXNpb25NYXRyaXhUaWNrKCkgewogICAgICBjb25zdCB0ZW1wID0gdGhpcy5jb2xsaXNpb25NYXRyaXhQcmV2aW91czsKICAgICAgdGhpcy5jb2xsaXNpb25NYXRyaXhQcmV2aW91cyA9IHRoaXMuY29sbGlzaW9uTWF0cml4OwogICAgICB0aGlzLmNvbGxpc2lvbk1hdHJpeCA9IHRlbXA7CiAgICAgIHRoaXMuY29sbGlzaW9uTWF0cml4LnJlc2V0KCk7CiAgICAgIHRoaXMuYm9keU92ZXJsYXBLZWVwZXIudGljaygpOwogICAgICB0aGlzLnNoYXBlT3ZlcmxhcEtlZXBlci50aWNrKCk7CiAgICB9CiAgICAvKioKICAgICAqIEFkZCBhIGNvbnN0cmFpbnQgdG8gdGhlIHNpbXVsYXRpb24uCiAgICAgKi8KCgogICAgYWRkQ29uc3RyYWludChjKSB7CiAgICAgIHRoaXMuY29uc3RyYWludHMucHVzaChjKTsKICAgIH0KICAgIC8qKgogICAgICogUmVtb3ZlcyBhIGNvbnN0cmFpbnQKICAgICAqLwoKCiAgICByZW1vdmVDb25zdHJhaW50KGMpIHsKICAgICAgY29uc3QgaWR4ID0gdGhpcy5jb25zdHJhaW50cy5pbmRleE9mKGMpOwoKICAgICAgaWYgKGlkeCAhPT0gLTEpIHsKICAgICAgICB0aGlzLmNvbnN0cmFpbnRzLnNwbGljZShpZHgsIDEpOwogICAgICB9CiAgICB9CiAgICAvKioKICAgICAqIFJheWNhc3QgdGVzdAogICAgICogQGRlcHJlY2F0ZWQgVXNlIC5yYXljYXN0QWxsLCAucmF5Y2FzdENsb3Nlc3Qgb3IgLnJheWNhc3RBbnkgaW5zdGVhZC4KICAgICAqLwoKCiAgICByYXlUZXN0KGZyb20sIHRvLCByZXN1bHQpIHsKICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFJheWNhc3RSZXN1bHQpIHsKICAgICAgICAvLyBEbyByYXljYXN0Q2xvc2VzdAogICAgICAgIHRoaXMucmF5Y2FzdENsb3Nlc3QoZnJvbSwgdG8sIHsKICAgICAgICAgIHNraXBCYWNrZmFjZXM6IHRydWUKICAgICAgICB9LCByZXN1bHQpOwogICAgICB9IGVsc2UgewogICAgICAgIC8vIERvIHJheWNhc3RBbGwKICAgICAgICB0aGlzLnJheWNhc3RBbGwoZnJvbSwgdG8sIHsKICAgICAgICAgIHNraXBCYWNrZmFjZXM6IHRydWUKICAgICAgICB9LCByZXN1bHQpOwogICAgICB9CiAgICB9CiAgICAvKioKICAgICAqIFJheSBjYXN0IGFnYWluc3QgYWxsIGJvZGllcy4gVGhlIHByb3ZpZGVkIGNhbGxiYWNrIHdpbGwgYmUgZXhlY3V0ZWQgZm9yIGVhY2ggaGl0IHdpdGggYSBSYXljYXN0UmVzdWx0IGFzIHNpbmdsZSBhcmd1bWVudC4KICAgICAqIEByZXR1cm4gVHJ1ZSBpZiBhbnkgYm9keSB3YXMgaGl0LgogICAgICovCgoKICAgIHJheWNhc3RBbGwoZnJvbSwgdG8sIG9wdGlvbnMsIGNhbGxiYWNrKSB7CiAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsKICAgICAgICBvcHRpb25zID0ge307CiAgICAgIH0KCiAgICAgIG9wdGlvbnMubW9kZSA9IFJheS5BTEw7CiAgICAgIG9wdGlvbnMuZnJvbSA9IGZyb207CiAgICAgIG9wdGlvbnMudG8gPSB0bzsKICAgICAgb3B0aW9ucy5jYWxsYmFjayA9IGNhbGxiYWNrOwogICAgICByZXR1cm4gdG1wUmF5LmludGVyc2VjdFdvcmxkKHRoaXMsIG9wdGlvbnMpOwogICAgfQogICAgLyoqCiAgICAgKiBSYXkgY2FzdCwgYW5kIHN0b3AgYXQgdGhlIGZpcnN0IHJlc3VsdC4gTm90ZSB0aGF0IHRoZSBvcmRlciBpcyByYW5kb20gLSBidXQgdGhlIG1ldGhvZCBpcyBmYXN0LgogICAgICogQHJldHVybiBUcnVlIGlmIGFueSBib2R5IHdhcyBoaXQuCiAgICAgKi8KCgogICAgcmF5Y2FzdEFueShmcm9tLCB0bywgb3B0aW9ucywgcmVzdWx0KSB7CiAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsKICAgICAgICBvcHRpb25zID0ge307CiAgICAgIH0KCiAgICAgIG9wdGlvbnMubW9kZSA9IFJheS5BTlk7CiAgICAgIG9wdGlvbnMuZnJvbSA9IGZyb207CiAgICAgIG9wdGlvbnMudG8gPSB0bzsKICAgICAgb3B0aW9ucy5yZXN1bHQgPSByZXN1bHQ7CiAgICAgIHJldHVybiB0bXBSYXkuaW50ZXJzZWN0V29ybGQodGhpcywgb3B0aW9ucyk7CiAgICB9CiAgICAvKioKICAgICAqIFJheSBjYXN0LCBhbmQgcmV0dXJuIGluZm9ybWF0aW9uIG9mIHRoZSBjbG9zZXN0IGhpdC4KICAgICAqIEByZXR1cm4gVHJ1ZSBpZiBhbnkgYm9keSB3YXMgaGl0LgogICAgICovCgoKICAgIHJheWNhc3RDbG9zZXN0KGZyb20sIHRvLCBvcHRpb25zLCByZXN1bHQpIHsKICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgewogICAgICAgIG9wdGlvbnMgPSB7fTsKICAgICAgfQoKICAgICAgb3B0aW9ucy5tb2RlID0gUmF5LkNMT1NFU1Q7CiAgICAgIG9wdGlvbnMuZnJvbSA9IGZyb207CiAgICAgIG9wdGlvbnMudG8gPSB0bzsKICAgICAgb3B0aW9ucy5yZXN1bHQgPSByZXN1bHQ7CiAgICAgIHJldHVybiB0bXBSYXkuaW50ZXJzZWN0V29ybGQodGhpcywgb3B0aW9ucyk7CiAgICB9CiAgICAvKioKICAgICAqIEFkZCBhIHJpZ2lkIGJvZHkgdG8gdGhlIHNpbXVsYXRpb24uCiAgICAgKiBAdG9kbyBJZiB0aGUgc2ltdWxhdGlvbiBoYXMgbm90IHlldCBzdGFydGVkLCB3aHkgcmVjcmV0ZSBhbmQgY29weSBhcnJheXMgZm9yIGVhY2ggYm9keT8gQWNjdW11bGF0ZSBpbiBkeW5hbWljIGFycmF5cyBpbiB0aGlzIGNhc2UuCiAgICAgKiBAdG9kbyBBZGRpbmcgYW4gYXJyYXkgb2YgYm9kaWVzIHNob3VsZCBiZSBwb3NzaWJsZS4gVGhpcyB3b3VsZCBzYXZlIHNvbWUgbG9vcHMgdG9vCiAgICAgKi8KCgogICAgYWRkQm9keShib2R5KSB7CiAgICAgIGlmICh0aGlzLmJvZGllcy5pbmNsdWRlcyhib2R5KSkgewogICAgICAgIHJldHVybjsKICAgICAgfQoKICAgICAgYm9keS5pbmRleCA9IHRoaXMuYm9kaWVzLmxlbmd0aDsKICAgICAgdGhpcy5ib2RpZXMucHVzaChib2R5KTsKICAgICAgYm9keS53b3JsZCA9IHRoaXM7CiAgICAgIGJvZHkuaW5pdFBvc2l0aW9uLmNvcHkoYm9keS5wb3NpdGlvbik7CiAgICAgIGJvZHkuaW5pdFZlbG9jaXR5LmNvcHkoYm9keS52ZWxvY2l0eSk7CiAgICAgIGJvZHkudGltZUxhc3RTbGVlcHkgPSB0aGlzLnRpbWU7CgogICAgICBpZiAoYm9keSBpbnN0YW5jZW9mIEJvZHkpIHsKICAgICAgICBib2R5LmluaXRBbmd1bGFyVmVsb2NpdHkuY29weShib2R5LmFuZ3VsYXJWZWxvY2l0eSk7CiAgICAgICAgYm9keS5pbml0UXVhdGVybmlvbi5jb3B5KGJvZHkucXVhdGVybmlvbik7CiAgICAgIH0KCiAgICAgIHRoaXMuY29sbGlzaW9uTWF0cml4LnNldE51bU9iamVjdHModGhpcy5ib2RpZXMubGVuZ3RoKTsKICAgICAgdGhpcy5hZGRCb2R5RXZlbnQuYm9keSA9IGJvZHk7CiAgICAgIHRoaXMuaWRUb0JvZHlNYXBbYm9keS5pZF0gPSBib2R5OwogICAgICB0aGlzLmRpc3BhdGNoRXZlbnQodGhpcy5hZGRCb2R5RXZlbnQpOwogICAgfQogICAgLyoqCiAgICAgKiBSZW1vdmUgYSByaWdpZCBib2R5IGZyb20gdGhlIHNpbXVsYXRpb24uCiAgICAgKi8KCgogICAgcmVtb3ZlQm9keShib2R5KSB7CiAgICAgIGJvZHkud29ybGQgPSBudWxsOwogICAgICBjb25zdCBuID0gdGhpcy5ib2RpZXMubGVuZ3RoIC0gMTsKICAgICAgY29uc3QgYm9kaWVzID0gdGhpcy5ib2RpZXM7CiAgICAgIGNvbnN0IGlkeCA9IGJvZGllcy5pbmRleE9mKGJvZHkpOwoKICAgICAgaWYgKGlkeCAhPT0gLTEpIHsKICAgICAgICBib2RpZXMuc3BsaWNlKGlkeCwgMSk7IC8vIFRvZG86IHNob3VsZCB1c2UgYSBnYXJiYWdlIGZyZWUgbWV0aG9kCiAgICAgICAgLy8gUmVjb21wdXRlIGluZGV4CgogICAgICAgIGZvciAobGV0IGkgPSAwOyBpICE9PSBib2RpZXMubGVuZ3RoOyBpKyspIHsKICAgICAgICAgIGJvZGllc1tpXS5pbmRleCA9IGk7CiAgICAgICAgfQoKICAgICAgICB0aGlzLmNvbGxpc2lvbk1hdHJpeC5zZXROdW1PYmplY3RzKG4pOwogICAgICAgIHRoaXMucmVtb3ZlQm9keUV2ZW50LmJvZHkgPSBib2R5OwogICAgICAgIGRlbGV0ZSB0aGlzLmlkVG9Cb2R5TWFwW2JvZHkuaWRdOwogICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCh0aGlzLnJlbW92ZUJvZHlFdmVudCk7CiAgICAgIH0KICAgIH0KCiAgICBnZXRCb2R5QnlJZChpZCkgewogICAgICByZXR1cm4gdGhpcy5pZFRvQm9keU1hcFtpZF07CiAgICB9CiAgICAvKioKICAgICAqIEB0b2RvIE1ha2UgYSBmYXN0ZXIgbWFwCiAgICAgKi8KCgogICAgZ2V0U2hhcGVCeUlkKGlkKSB7CiAgICAgIGNvbnN0IGJvZGllcyA9IHRoaXMuYm9kaWVzOwoKICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHsKICAgICAgICBjb25zdCBzaGFwZXMgPSBib2RpZXNbaV0uc2hhcGVzOwoKICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNoYXBlcy5sZW5ndGg7IGorKykgewogICAgICAgICAgY29uc3Qgc2hhcGUgPSBzaGFwZXNbal07CgogICAgICAgICAgaWYgKHNoYXBlLmlkID09PSBpZCkgewogICAgICAgICAgICByZXR1cm4gc2hhcGU7CiAgICAgICAgICB9CiAgICAgICAgfQogICAgICB9CgogICAgICByZXR1cm4gbnVsbDsKICAgIH0KICAgIC8qKgogICAgICogQWRkcyBhIGNvbnRhY3QgbWF0ZXJpYWwgdG8gdGhlIFdvcmxkCiAgICAgKi8KCgogICAgYWRkQ29udGFjdE1hdGVyaWFsKGNtYXQpIHsKICAgICAgLy8gQWRkIGNvbnRhY3QgbWF0ZXJpYWwKICAgICAgdGhpcy5jb250YWN0bWF0ZXJpYWxzLnB1c2goY21hdCk7IC8vIEFkZCBjdXJyZW50IGNvbnRhY3QgbWF0ZXJpYWwgdG8gdGhlIG1hdGVyaWFsIHRhYmxlCgogICAgICB0aGlzLmNvbnRhY3RNYXRlcmlhbFRhYmxlLnNldChjbWF0Lm1hdGVyaWFsc1swXS5pZCwgY21hdC5tYXRlcmlhbHNbMV0uaWQsIGNtYXQpOwogICAgfQogICAgLyoqCiAgICAgKiBSZW1vdmVzIGEgY29udGFjdCBtYXRlcmlhbCBmcm9tIHRoZSBXb3JsZC4KICAgICAqLwoKCiAgICByZW1vdmVDb250YWN0TWF0ZXJpYWwoY21hdCkgewogICAgICBjb25zdCBpZHggPSB0aGlzLmNvbnRhY3RtYXRlcmlhbHMuaW5kZXhPZihjbWF0KTsKCiAgICAgIGlmIChpZHggPT09IC0xKSB7CiAgICAgICAgcmV0dXJuOwogICAgICB9CgogICAgICB0aGlzLmNvbnRhY3RtYXRlcmlhbHMuc3BsaWNlKGlkeCwgMSk7CiAgICAgIHRoaXMuY29udGFjdE1hdGVyaWFsVGFibGUuZGVsZXRlKGNtYXQubWF0ZXJpYWxzWzBdLmlkLCBjbWF0Lm1hdGVyaWFsc1sxXS5pZCk7CiAgICB9CiAgICAvKioKICAgICAqIFN0ZXAgdGhlIHNpbXVsYXRpb24gZm9yd2FyZCBrZWVwaW5nIHRyYWNrIG9mIGxhc3QgY2FsbGVkIHRpbWUKICAgICAqIHRvIGJlIGFibGUgdG8gc3RlcCB0aGUgd29ybGQgYXQgYSBmaXhlZCByYXRlLCBpbmRlcGVuZGVudGx5IG9mIGZyYW1lcmF0ZS4KICAgICAqCiAgICAgKiBAcGFyYW0gZHQgVGhlIGZpeGVkIHRpbWUgc3RlcCBzaXplIHRvIHVzZSAoZGVmYXVsdDogMSAvIDYwKS4KICAgICAqIEBwYXJhbSBtYXhTdWJTdGVwcyBNYXhpbXVtIG51bWJlciBvZiBmaXhlZCBzdGVwcyB0byB0YWtlIHBlciBmdW5jdGlvbiBjYWxsIChkZWZhdWx0OiAxMCkuCiAgICAgKiBAc2VlIGh0dHBzOi8vZ2FmZmVyb25nYW1lcy5jb20vcG9zdC9maXhfeW91cl90aW1lc3RlcC8KICAgICAqIEBleGFtcGxlCiAgICAgKiAgICAgLy8gUnVuIHRoZSBzaW11bGF0aW9uIGluZGVwZW5kZW50bHkgb2YgZnJhbWVyYXRlIGV2ZXJ5IDEgLyA2MCBtcwogICAgICogICAgIHdvcmxkLmZpeGVkU3RlcCgpCiAgICAgKi8KCgogICAgZml4ZWRTdGVwKGR0LCBtYXhTdWJTdGVwcykgewogICAgICBpZiAoZHQgPT09IHZvaWQgMCkgewogICAgICAgIGR0ID0gMSAvIDYwOwogICAgICB9CgogICAgICBpZiAobWF4U3ViU3RlcHMgPT09IHZvaWQgMCkgewogICAgICAgIG1heFN1YlN0ZXBzID0gMTA7CiAgICAgIH0KCiAgICAgIGNvbnN0IHRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAvIDEwMDA7IC8vIHNlY29uZHMKCiAgICAgIGlmICghdGhpcy5sYXN0Q2FsbFRpbWUpIHsKICAgICAgICB0aGlzLnN0ZXAoZHQsIHVuZGVmaW5lZCwgbWF4U3ViU3RlcHMpOwogICAgICB9IGVsc2UgewogICAgICAgIGNvbnN0IHRpbWVTaW5jZUxhc3RDYWxsZWQgPSB0aW1lIC0gdGhpcy5sYXN0Q2FsbFRpbWU7CiAgICAgICAgdGhpcy5zdGVwKGR0LCB0aW1lU2luY2VMYXN0Q2FsbGVkLCBtYXhTdWJTdGVwcyk7CiAgICAgIH0KCiAgICAgIHRoaXMubGFzdENhbGxUaW1lID0gdGltZTsKICAgIH0KICAgIC8qKgogICAgICogU3RlcCB0aGUgcGh5c2ljcyB3b3JsZCBmb3J3YXJkIGluIHRpbWUuCiAgICAgKgogICAgICogVGhlcmUgYXJlIHR3byBtb2Rlcy4gVGhlIHNpbXBsZSBtb2RlIGlzIGZpeGVkIHRpbWVzdGVwcGluZyB3aXRob3V0IGludGVycG9sYXRpb24uIEluIHRoaXMgY2FzZSB5b3Ugb25seSB1c2UgdGhlIGZpcnN0IGFyZ3VtZW50LiBUaGUgc2Vjb25kIGNhc2UgdXNlcyBpbnRlcnBvbGF0aW9uLiBJbiB0aGF0IHlvdSBhbHNvIHByb3ZpZGUgdGhlIHRpbWUgc2luY2UgdGhlIGZ1bmN0aW9uIHdhcyBsYXN0IHVzZWQsIGFzIHdlbGwgYXMgdGhlIG1heGltdW0gZml4ZWQgdGltZXN0ZXBzIHRvIHRha2UuCiAgICAgKgogICAgICogQHBhcmFtIGR0IFRoZSBmaXhlZCB0aW1lIHN0ZXAgc2l6ZSB0byB1c2UuCiAgICAgKiBAcGFyYW0gdGltZVNpbmNlTGFzdENhbGxlZCBUaGUgdGltZSBlbGFwc2VkIHNpbmNlIHRoZSBmdW5jdGlvbiB3YXMgbGFzdCBjYWxsZWQuCiAgICAgKiBAcGFyYW0gbWF4U3ViU3RlcHMgTWF4aW11bSBudW1iZXIgb2YgZml4ZWQgc3RlcHMgdG8gdGFrZSBwZXIgZnVuY3Rpb24gY2FsbCAoZGVmYXVsdDogMTApLgogICAgICogQHNlZSBodHRwczovL3dlYi5hcmNoaXZlLm9yZy93ZWIvMjAxODA0MjYxNTQ1MzEvaHR0cDovL2J1bGxldHBoeXNpY3Mub3JnL21lZGlhd2lraS0xLjUuOC9pbmRleC5waHAvU3RlcHBpbmdfVGhlX1dvcmxkI1doYXRfZG9fdGhlX3BhcmFtZXRlcnNfdG9fYnREeW5hbWljc1dvcmxkOjpzdGVwU2ltdWxhdGlvbl9tZWFuLjNGCiAgICAgKiBAZXhhbXBsZQogICAgICogICAgIC8vIGZpeGVkIHRpbWVzdGVwcGluZyB3aXRob3V0IGludGVycG9sYXRpb24KICAgICAqICAgICB3b3JsZC5zdGVwKDEgLyA2MCkKICAgICAqLwoKCiAgICBzdGVwKGR0LCB0aW1lU2luY2VMYXN0Q2FsbGVkLCBtYXhTdWJTdGVwcykgewogICAgICBpZiAobWF4U3ViU3RlcHMgPT09IHZvaWQgMCkgewogICAgICAgIG1heFN1YlN0ZXBzID0gMTA7CiAgICAgIH0KCiAgICAgIGlmICh0aW1lU2luY2VMYXN0Q2FsbGVkID09PSB1bmRlZmluZWQpIHsKICAgICAgICAvLyBGaXhlZCwgc2ltcGxlIHN0ZXBwaW5nCiAgICAgICAgdGhpcy5pbnRlcm5hbFN0ZXAoZHQpOyAvLyBJbmNyZW1lbnQgdGltZQoKICAgICAgICB0aGlzLnRpbWUgKz0gZHQ7CiAgICAgIH0gZWxzZSB7CiAgICAgICAgdGhpcy5hY2N1bXVsYXRvciArPSB0aW1lU2luY2VMYXN0Q2FsbGVkOwogICAgICAgIGNvbnN0IHQwID0gcGVyZm9ybWFuY2Uubm93KCk7CiAgICAgICAgbGV0IHN1YnN0ZXBzID0gMDsKCiAgICAgICAgd2hpbGUgKHRoaXMuYWNjdW11bGF0b3IgPj0gZHQgJiYgc3Vic3RlcHMgPCBtYXhTdWJTdGVwcykgewogICAgICAgICAgLy8gRG8gZml4ZWQgc3RlcHMgdG8gY2F0Y2ggdXAKICAgICAgICAgIHRoaXMuaW50ZXJuYWxTdGVwKGR0KTsKICAgICAgICAgIHRoaXMuYWNjdW11bGF0b3IgLT0gZHQ7CiAgICAgICAgICBzdWJzdGVwcysrOwoKICAgICAgICAgIGlmIChwZXJmb3JtYW5jZS5ub3coKSAtIHQwID4gZHQgKiAxMDAwKSB7CiAgICAgICAgICAgIC8vIFRoZSBmcmFtZXJhdGUgaXMgbm90IGludGVyYWN0aXZlIGFueW1vcmUuCiAgICAgICAgICAgIC8vIFdlIGFyZSBiZWxvdyB0aGUgdGFyZ2V0IGZyYW1lcmF0ZS4KICAgICAgICAgICAgLy8gQmV0dGVyIGJhaWwgb3V0LgogICAgICAgICAgICBicmVhazsKICAgICAgICAgIH0KICAgICAgICB9IC8vIFJlbW92ZSB0aGUgZXhjZXNzIGFjY3VtdWxhdG9yLCBzaW5jZSB3ZSBtYXkgbm90CiAgICAgICAgLy8gaGF2ZSBoYWQgZW5vdWdoIHN1YnN0ZXBzIGF2YWlsYWJsZSB0byBjYXRjaCB1cAoKCiAgICAgICAgdGhpcy5hY2N1bXVsYXRvciA9IHRoaXMuYWNjdW11bGF0b3IgJSBkdDsKICAgICAgICBjb25zdCB0ID0gdGhpcy5hY2N1bXVsYXRvciAvIGR0OwoKICAgICAgICBmb3IgKGxldCBqID0gMDsgaiAhPT0gdGhpcy5ib2RpZXMubGVuZ3RoOyBqKyspIHsKICAgICAgICAgIGNvbnN0IGIgPSB0aGlzLmJvZGllc1tqXTsKICAgICAgICAgIGIucHJldmlvdXNQb3NpdGlvbi5sZXJwKGIucG9zaXRpb24sIHQsIGIuaW50ZXJwb2xhdGVkUG9zaXRpb24pOwogICAgICAgICAgYi5wcmV2aW91c1F1YXRlcm5pb24uc2xlcnAoYi5xdWF0ZXJuaW9uLCB0LCBiLmludGVycG9sYXRlZFF1YXRlcm5pb24pOwogICAgICAgICAgYi5wcmV2aW91c1F1YXRlcm5pb24ubm9ybWFsaXplKCk7CiAgICAgICAgfQoKICAgICAgICB0aGlzLnRpbWUgKz0gdGltZVNpbmNlTGFzdENhbGxlZDsKICAgICAgfQogICAgfQoKICAgIGludGVybmFsU3RlcChkdCkgewogICAgICB0aGlzLmR0ID0gZHQ7CiAgICAgIGNvbnN0IGNvbnRhY3RzID0gdGhpcy5jb250YWN0czsKICAgICAgY29uc3QgcDEgPSBXb3JsZF9zdGVwX3AxOwogICAgICBjb25zdCBwMiA9IFdvcmxkX3N0ZXBfcDI7CiAgICAgIGNvbnN0IE4gPSB0aGlzLmJvZGllcy5sZW5ndGg7CiAgICAgIGNvbnN0IGJvZGllcyA9IHRoaXMuYm9kaWVzOwogICAgICBjb25zdCBzb2x2ZXIgPSB0aGlzLnNvbHZlcjsKICAgICAgY29uc3QgZ3Jhdml0eSA9IHRoaXMuZ3Jhdml0eTsKICAgICAgY29uc3QgZG9Qcm9maWxpbmcgPSB0aGlzLmRvUHJvZmlsaW5nOwogICAgICBjb25zdCBwcm9maWxlID0gdGhpcy5wcm9maWxlOwogICAgICBjb25zdCBEWU5BTUlDID0gQm9keS5EWU5BTUlDOwogICAgICBsZXQgcHJvZmlsaW5nU3RhcnQgPSAtSW5maW5pdHk7CiAgICAgIGNvbnN0IGNvbnN0cmFpbnRzID0gdGhpcy5jb25zdHJhaW50czsKICAgICAgY29uc3QgZnJpY3Rpb25FcXVhdGlvblBvb2wgPSBXb3JsZF9zdGVwX2ZyaWN0aW9uRXF1YXRpb25Qb29sOwogICAgICBncmF2aXR5Lmxlbmd0aCgpOwogICAgICBjb25zdCBneCA9IGdyYXZpdHkueDsKICAgICAgY29uc3QgZ3kgPSBncmF2aXR5Lnk7CiAgICAgIGNvbnN0IGd6ID0gZ3Jhdml0eS56OwogICAgICBsZXQgaSA9IDA7CgogICAgICBpZiAoZG9Qcm9maWxpbmcpIHsKICAgICAgICBwcm9maWxpbmdTdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpOwogICAgICB9IC8vIEFkZCBncmF2aXR5IHRvIGFsbCBvYmplY3RzCgoKICAgICAgZm9yIChpID0gMDsgaSAhPT0gTjsgaSsrKSB7CiAgICAgICAgY29uc3QgYmkgPSBib2RpZXNbaV07CgogICAgICAgIGlmIChiaS50eXBlID09PSBEWU5BTUlDKSB7CiAgICAgICAgICAvLyBPbmx5IGZvciBkeW5hbWljIGJvZGllcwogICAgICAgICAgY29uc3QgZiA9IGJpLmZvcmNlOwogICAgICAgICAgY29uc3QgbSA9IGJpLm1hc3M7CiAgICAgICAgICBmLnggKz0gbSAqIGd4OwogICAgICAgICAgZi55ICs9IG0gKiBneTsKICAgICAgICAgIGYueiArPSBtICogZ3o7CiAgICAgICAgfQogICAgICB9IC8vIFVwZGF0ZSBzdWJzeXN0ZW1zCgoKICAgICAgZm9yIChsZXQgaSA9IDAsIE5zdWJzeXN0ZW1zID0gdGhpcy5zdWJzeXN0ZW1zLmxlbmd0aDsgaSAhPT0gTnN1YnN5c3RlbXM7IGkrKykgewogICAgICAgIHRoaXMuc3Vic3lzdGVtc1tpXS51cGRhdGUoKTsKICAgICAgfSAvLyBDb2xsaXNpb24gZGV0ZWN0aW9uCgoKICAgICAgaWYgKGRvUHJvZmlsaW5nKSB7CiAgICAgICAgcHJvZmlsaW5nU3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKTsKICAgICAgfQoKICAgICAgcDEubGVuZ3RoID0gMDsgLy8gQ2xlYW4gdXAgcGFpciBhcnJheXMgZnJvbSBsYXN0IHN0ZXAKCiAgICAgIHAyLmxlbmd0aCA9IDA7CiAgICAgIHRoaXMuYnJvYWRwaGFzZS5jb2xsaXNpb25QYWlycyh0aGlzLCBwMSwgcDIpOwoKICAgICAgaWYgKGRvUHJvZmlsaW5nKSB7CiAgICAgICAgcHJvZmlsZS5icm9hZHBoYXNlID0gcGVyZm9ybWFuY2Uubm93KCkgLSBwcm9maWxpbmdTdGFydDsKICAgICAgfSAvLyBSZW1vdmUgY29uc3RyYWluZWQgcGFpcnMgd2l0aCBjb2xsaWRlQ29ubmVjdGVkID09IGZhbHNlCgoKICAgICAgbGV0IE5jb25zdHJhaW50cyA9IGNvbnN0cmFpbnRzLmxlbmd0aDsKCiAgICAgIGZvciAoaSA9IDA7IGkgIT09IE5jb25zdHJhaW50czsgaSsrKSB7CiAgICAgICAgY29uc3QgYyA9IGNvbnN0cmFpbnRzW2ldOwoKICAgICAgICBpZiAoIWMuY29sbGlkZUNvbm5lY3RlZCkgewogICAgICAgICAgZm9yIChsZXQgaiA9IHAxLmxlbmd0aCAtIDE7IGogPj0gMDsgaiAtPSAxKSB7CiAgICAgICAgICAgIGlmIChjLmJvZHlBID09PSBwMVtqXSAmJiBjLmJvZHlCID09PSBwMltqXSB8fCBjLmJvZHlCID09PSBwMVtqXSAmJiBjLmJvZHlBID09PSBwMltqXSkgewogICAgICAgICAgICAgIHAxLnNwbGljZShqLCAxKTsKICAgICAgICAgICAgICBwMi5zcGxpY2UoaiwgMSk7CiAgICAgICAgICAgIH0KICAgICAgICAgIH0KICAgICAgICB9CiAgICAgIH0KCiAgICAgIHRoaXMuY29sbGlzaW9uTWF0cml4VGljaygpOyAvLyBHZW5lcmF0ZSBjb250YWN0cwoKICAgICAgaWYgKGRvUHJvZmlsaW5nKSB7CiAgICAgICAgcHJvZmlsaW5nU3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKTsKICAgICAgfQoKICAgICAgY29uc3Qgb2xkY29udGFjdHMgPSBXb3JsZF9zdGVwX29sZENvbnRhY3RzOwogICAgICBjb25zdCBOb2xkQ29udGFjdHMgPSBjb250YWN0cy5sZW5ndGg7CgogICAgICBmb3IgKGkgPSAwOyBpICE9PSBOb2xkQ29udGFjdHM7IGkrKykgewogICAgICAgIG9sZGNvbnRhY3RzLnB1c2goY29udGFjdHNbaV0pOwogICAgICB9CgogICAgICBjb250YWN0cy5sZW5ndGggPSAwOyAvLyBUcmFuc2ZlciBGcmljdGlvbkVxdWF0aW9uIGZyb20gY3VycmVudCBsaXN0IHRvIHRoZSBwb29sIGZvciByZXVzZQoKICAgICAgY29uc3QgTm9sZEZyaWN0aW9uRXF1YXRpb25zID0gdGhpcy5mcmljdGlvbkVxdWF0aW9ucy5sZW5ndGg7CgogICAgICBmb3IgKGkgPSAwOyBpICE9PSBOb2xkRnJpY3Rpb25FcXVhdGlvbnM7IGkrKykgewogICAgICAgIGZyaWN0aW9uRXF1YXRpb25Qb29sLnB1c2godGhpcy5mcmljdGlvbkVxdWF0aW9uc1tpXSk7CiAgICAgIH0KCiAgICAgIHRoaXMuZnJpY3Rpb25FcXVhdGlvbnMubGVuZ3RoID0gMDsKICAgICAgdGhpcy5uYXJyb3dwaGFzZS5nZXRDb250YWN0cyhwMSwgcDIsIHRoaXMsIGNvbnRhY3RzLCBvbGRjb250YWN0cywgLy8gVG8gYmUgcmV1c2VkCiAgICAgIHRoaXMuZnJpY3Rpb25FcXVhdGlvbnMsIGZyaWN0aW9uRXF1YXRpb25Qb29sKTsKCiAgICAgIGlmIChkb1Byb2ZpbGluZykgewogICAgICAgIHByb2ZpbGUubmFycm93cGhhc2UgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHByb2ZpbGluZ1N0YXJ0OwogICAgICB9IC8vIExvb3Agb3ZlciBhbGwgY29sbGlzaW9ucwoKCiAgICAgIGlmIChkb1Byb2ZpbGluZykgewogICAgICAgIHByb2ZpbGluZ1N0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCk7CiAgICAgIH0gLy8gQWRkIGFsbCBmcmljdGlvbiBlcXMKCgogICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5mcmljdGlvbkVxdWF0aW9ucy5sZW5ndGg7IGkrKykgewogICAgICAgIHNvbHZlci5hZGRFcXVhdGlvbih0aGlzLmZyaWN0aW9uRXF1YXRpb25zW2ldKTsKICAgICAgfQoKICAgICAgY29uc3QgbmNvbnRhY3RzID0gY29udGFjdHMubGVuZ3RoOwoKICAgICAgZm9yIChsZXQgayA9IDA7IGsgIT09IG5jb250YWN0czsgaysrKSB7CiAgICAgICAgLy8gQ3VycmVudCBjb250YWN0CiAgICAgICAgY29uc3QgYyA9IGNvbnRhY3RzW2tdOyAvLyBHZXQgY3VycmVudCBjb2xsaXNpb24gaW5kZWNlcwoKICAgICAgICBjb25zdCBiaSA9IGMuYmk7CiAgICAgICAgY29uc3QgYmogPSBjLmJqOwogICAgICAgIGNvbnN0IHNpID0gYy5zaTsKICAgICAgICBjb25zdCBzaiA9IGMuc2o7IC8vIEdldCBjb2xsaXNpb24gcHJvcGVydGllcwoKICAgICAgICBsZXQgY207CgogICAgICAgIGlmIChiaS5tYXRlcmlhbCAmJiBiai5tYXRlcmlhbCkgewogICAgICAgICAgY20gPSB0aGlzLmdldENvbnRhY3RNYXRlcmlhbChiaS5tYXRlcmlhbCwgYmoubWF0ZXJpYWwpIHx8IHRoaXMuZGVmYXVsdENvbnRhY3RNYXRlcmlhbDsKICAgICAgICB9IGVsc2UgewogICAgICAgICAgY20gPSB0aGlzLmRlZmF1bHRDb250YWN0TWF0ZXJpYWw7CiAgICAgICAgfSAvLyBjLmVuYWJsZWQgPSBiaS5jb2xsaXNpb25SZXNwb25zZSAmJiBiai5jb2xsaXNpb25SZXNwb25zZSAmJiBzaS5jb2xsaXNpb25SZXNwb25zZSAmJiBzai5jb2xsaXNpb25SZXNwb25zZTsKCgogICAgICAgIGNtLmZyaWN0aW9uOyAvLyBjLnJlc3RpdHV0aW9uID0gY20ucmVzdGl0dXRpb247CiAgICAgICAgLy8gSWYgZnJpY3Rpb24gb3IgcmVzdGl0dXRpb24gd2VyZSBzcGVjaWZpZWQgaW4gdGhlIG1hdGVyaWFsLCB1c2UgdGhlbQoKICAgICAgICBpZiAoYmkubWF0ZXJpYWwgJiYgYmoubWF0ZXJpYWwpIHsKICAgICAgICAgIGlmIChiaS5tYXRlcmlhbC5mcmljdGlvbiA+PSAwICYmIGJqLm1hdGVyaWFsLmZyaWN0aW9uID49IDApIHsKICAgICAgICAgICAgYmkubWF0ZXJpYWwuZnJpY3Rpb24gKiBiai5tYXRlcmlhbC5mcmljdGlvbjsKICAgICAgICAgIH0KCiAgICAgICAgICBpZiAoYmkubWF0ZXJpYWwucmVzdGl0dXRpb24gPj0gMCAmJiBiai5tYXRlcmlhbC5yZXN0aXR1dGlvbiA+PSAwKSB7CiAgICAgICAgICAgIGMucmVzdGl0dXRpb24gPSBiaS5tYXRlcmlhbC5yZXN0aXR1dGlvbiAqIGJqLm1hdGVyaWFsLnJlc3RpdHV0aW9uOwogICAgICAgICAgfQogICAgICAgIH0gLy8gYy5zZXRTcG9va1BhcmFtcygKICAgICAgICAvLyAgICAgICAgICAgY20uY29udGFjdEVxdWF0aW9uU3RpZmZuZXNzLAogICAgICAgIC8vICAgICAgICAgICBjbS5jb250YWN0RXF1YXRpb25SZWxheGF0aW9uLAogICAgICAgIC8vICAgICAgICAgICBkdAogICAgICAgIC8vICAgICAgICk7CgoKICAgICAgICBzb2x2ZXIuYWRkRXF1YXRpb24oYyk7IC8vIC8vIEFkZCBmcmljdGlvbiBjb25zdHJhaW50IGVxdWF0aW9uCiAgICAgICAgLy8gaWYobXUgPiAwKXsKICAgICAgICAvLyAJLy8gQ3JlYXRlIDIgdGFuZ2VudCBlcXVhdGlvbnMKICAgICAgICAvLyAJY29uc3QgbXVnID0gbXUgKiBnbm9ybTsKICAgICAgICAvLyAJY29uc3QgcmVkdWNlZE1hc3MgPSAoYmkuaW52TWFzcyArIGJqLmludk1hc3MpOwogICAgICAgIC8vIAlpZihyZWR1Y2VkTWFzcyA+IDApewogICAgICAgIC8vIAkJcmVkdWNlZE1hc3MgPSAxL3JlZHVjZWRNYXNzOwogICAgICAgIC8vIAl9CiAgICAgICAgLy8gCWNvbnN0IHBvb2wgPSBmcmljdGlvbkVxdWF0aW9uUG9vbDsKICAgICAgICAvLyAJY29uc3QgYzEgPSBwb29sLmxlbmd0aCA/IHBvb2wucG9wKCkgOiBuZXcgRnJpY3Rpb25FcXVhdGlvbihiaSxiaixtdWcqcmVkdWNlZE1hc3MpOwogICAgICAgIC8vIAljb25zdCBjMiA9IHBvb2wubGVuZ3RoID8gcG9vbC5wb3AoKSA6IG5ldyBGcmljdGlvbkVxdWF0aW9uKGJpLGJqLG11ZypyZWR1Y2VkTWFzcyk7CiAgICAgICAgLy8gCXRoaXMuZnJpY3Rpb25FcXVhdGlvbnMucHVzaChjMSwgYzIpOwogICAgICAgIC8vIAljMS5iaSA9IGMyLmJpID0gYmk7CiAgICAgICAgLy8gCWMxLmJqID0gYzIuYmogPSBiajsKICAgICAgICAvLyAJYzEubWluRm9yY2UgPSBjMi5taW5Gb3JjZSA9IC1tdWcqcmVkdWNlZE1hc3M7CiAgICAgICAgLy8gCWMxLm1heEZvcmNlID0gYzIubWF4Rm9yY2UgPSBtdWcqcmVkdWNlZE1hc3M7CiAgICAgICAgLy8gCS8vIENvcHkgb3ZlciB0aGUgcmVsYXRpdmUgdmVjdG9ycwogICAgICAgIC8vIAljMS5yaS5jb3B5KGMucmkpOwogICAgICAgIC8vIAljMS5yai5jb3B5KGMucmopOwogICAgICAgIC8vIAljMi5yaS5jb3B5KGMucmkpOwogICAgICAgIC8vIAljMi5yai5jb3B5KGMucmopOwogICAgICAgIC8vIAkvLyBDb25zdHJ1Y3QgdGFuZ2VudHMKICAgICAgICAvLyAJYy5uaS50YW5nZW50cyhjMS50LCBjMi50KTsKICAgICAgICAvLyAgICAgICAgICAgLy8gU2V0IHNwb29rIHBhcmFtcwogICAgICAgIC8vICAgICAgICAgICBjMS5zZXRTcG9va1BhcmFtcyhjbS5mcmljdGlvbkVxdWF0aW9uU3RpZmZuZXNzLCBjbS5mcmljdGlvbkVxdWF0aW9uUmVsYXhhdGlvbiwgZHQpOwogICAgICAgIC8vICAgICAgICAgICBjMi5zZXRTcG9va1BhcmFtcyhjbS5mcmljdGlvbkVxdWF0aW9uU3RpZmZuZXNzLCBjbS5mcmljdGlvbkVxdWF0aW9uUmVsYXhhdGlvbiwgZHQpOwogICAgICAgIC8vICAgICAgICAgICBjMS5lbmFibGVkID0gYzIuZW5hYmxlZCA9IGMuZW5hYmxlZDsKICAgICAgICAvLyAJLy8gQWRkIGVxdWF0aW9ucyB0byBzb2x2ZXIKICAgICAgICAvLyAJc29sdmVyLmFkZEVxdWF0aW9uKGMxKTsKICAgICAgICAvLyAJc29sdmVyLmFkZEVxdWF0aW9uKGMyKTsKICAgICAgICAvLyB9CgogICAgICAgIGlmIChiaS5hbGxvd1NsZWVwICYmIGJpLnR5cGUgPT09IEJvZHkuRFlOQU1JQyAmJiBiaS5zbGVlcFN0YXRlID09PSBCb2R5LlNMRUVQSU5HICYmIGJqLnNsZWVwU3RhdGUgPT09IEJvZHkuQVdBS0UgJiYgYmoudHlwZSAhPT0gQm9keS5TVEFUSUMpIHsKICAgICAgICAgIGNvbnN0IHNwZWVkU3F1YXJlZEIgPSBiai52ZWxvY2l0eS5sZW5ndGhTcXVhcmVkKCkgKyBiai5hbmd1bGFyVmVsb2NpdHkubGVuZ3RoU3F1YXJlZCgpOwogICAgICAgICAgY29uc3Qgc3BlZWRMaW1pdFNxdWFyZWRCID0gYmouc2xlZXBTcGVlZExpbWl0ICoqIDI7CgogICAgICAgICAgaWYgKHNwZWVkU3F1YXJlZEIgPj0gc3BlZWRMaW1pdFNxdWFyZWRCICogMikgewogICAgICAgICAgICBiaS53YWtlVXBBZnRlck5hcnJvd3BoYXNlID0gdHJ1ZTsKICAgICAgICAgIH0KICAgICAgICB9CgogICAgICAgIGlmIChiai5hbGxvd1NsZWVwICYmIGJqLnR5cGUgPT09IEJvZHkuRFlOQU1JQyAmJiBiai5zbGVlcFN0YXRlID09PSBCb2R5LlNMRUVQSU5HICYmIGJpLnNsZWVwU3RhdGUgPT09IEJvZHkuQVdBS0UgJiYgYmkudHlwZSAhPT0gQm9keS5TVEFUSUMpIHsKICAgICAgICAgIGNvbnN0IHNwZWVkU3F1YXJlZEEgPSBiaS52ZWxvY2l0eS5sZW5ndGhTcXVhcmVkKCkgKyBiaS5hbmd1bGFyVmVsb2NpdHkubGVuZ3RoU3F1YXJlZCgpOwogICAgICAgICAgY29uc3Qgc3BlZWRMaW1pdFNxdWFyZWRBID0gYmkuc2xlZXBTcGVlZExpbWl0ICoqIDI7CgogICAgICAgICAgaWYgKHNwZWVkU3F1YXJlZEEgPj0gc3BlZWRMaW1pdFNxdWFyZWRBICogMikgewogICAgICAgICAgICBiai53YWtlVXBBZnRlck5hcnJvd3BoYXNlID0gdHJ1ZTsKICAgICAgICAgIH0KICAgICAgICB9IC8vIE5vdyB3ZSBrbm93IHRoYXQgaSBhbmQgaiBhcmUgaW4gY29udGFjdC4gU2V0IGNvbGxpc2lvbiBtYXRyaXggc3RhdGUKCgogICAgICAgIHRoaXMuY29sbGlzaW9uTWF0cml4LnNldChiaSwgYmosIHRydWUpOwoKICAgICAgICBpZiAoIXRoaXMuY29sbGlzaW9uTWF0cml4UHJldmlvdXMuZ2V0KGJpLCBiaikpIHsKICAgICAgICAgIC8vIEZpcnN0IGNvbnRhY3QhCiAgICAgICAgICAvLyBXZSByZXVzZSB0aGUgY29sbGlkZUV2ZW50IG9iamVjdCwgb3RoZXJ3aXNlIHdlIHdpbGwgZW5kIHVwIGNyZWF0aW5nIG5ldyBvYmplY3RzIGZvciBlYWNoIG5ldyBjb250YWN0LCBldmVuIGlmIHRoZXJlJ3Mgbm8gZXZlbnQgbGlzdGVuZXIgYXR0YWNoZWQuCiAgICAgICAgICBXb3JsZF9zdGVwX2NvbGxpZGVFdmVudC5ib2R5ID0gYmo7CiAgICAgICAgICBXb3JsZF9zdGVwX2NvbGxpZGVFdmVudC5jb250YWN0ID0gYzsKICAgICAgICAgIGJpLmRpc3BhdGNoRXZlbnQoV29ybGRfc3RlcF9jb2xsaWRlRXZlbnQpOwogICAgICAgICAgV29ybGRfc3RlcF9jb2xsaWRlRXZlbnQuYm9keSA9IGJpOwogICAgICAgICAgYmouZGlzcGF0Y2hFdmVudChXb3JsZF9zdGVwX2NvbGxpZGVFdmVudCk7CiAgICAgICAgfQoKICAgICAgICB0aGlzLmJvZHlPdmVybGFwS2VlcGVyLnNldChiaS5pZCwgYmouaWQpOwogICAgICAgIHRoaXMuc2hhcGVPdmVybGFwS2VlcGVyLnNldChzaS5pZCwgc2ouaWQpOwogICAgICB9CgogICAgICB0aGlzLmVtaXRDb250YWN0RXZlbnRzKCk7CgogICAgICBpZiAoZG9Qcm9maWxpbmcpIHsKICAgICAgICBwcm9maWxlLm1ha2VDb250YWN0Q29uc3RyYWludHMgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHByb2ZpbGluZ1N0YXJ0OwogICAgICAgIHByb2ZpbGluZ1N0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCk7CiAgICAgIH0gLy8gV2FrZSB1cCBib2RpZXMKCgogICAgICBmb3IgKGkgPSAwOyBpICE9PSBOOyBpKyspIHsKICAgICAgICBjb25zdCBiaSA9IGJvZGllc1tpXTsKCiAgICAgICAgaWYgKGJpLndha2VVcEFmdGVyTmFycm93cGhhc2UpIHsKICAgICAgICAgIGJpLndha2VVcCgpOwogICAgICAgICAgYmkud2FrZVVwQWZ0ZXJOYXJyb3dwaGFzZSA9IGZhbHNlOwogICAgICAgIH0KICAgICAgfSAvLyBBZGQgdXNlci1hZGRlZCBjb25zdHJhaW50cwoKCiAgICAgIE5jb25zdHJhaW50cyA9IGNvbnN0cmFpbnRzLmxlbmd0aDsKCiAgICAgIGZvciAoaSA9IDA7IGkgIT09IE5jb25zdHJhaW50czsgaSsrKSB7CiAgICAgICAgY29uc3QgYyA9IGNvbnN0cmFpbnRzW2ldOwogICAgICAgIGMudXBkYXRlKCk7CgogICAgICAgIGZvciAobGV0IGogPSAwLCBOZXEgPSBjLmVxdWF0aW9ucy5sZW5ndGg7IGogIT09IE5lcTsgaisrKSB7CiAgICAgICAgICBjb25zdCBlcSA9IGMuZXF1YXRpb25zW2pdOwogICAgICAgICAgc29sdmVyLmFkZEVxdWF0aW9uKGVxKTsKICAgICAgICB9CiAgICAgIH0gLy8gU29sdmUgdGhlIGNvbnN0cmFpbmVkIHN5c3RlbQoKCiAgICAgIHNvbHZlci5zb2x2ZShkdCwgdGhpcyk7CgogICAgICBpZiAoZG9Qcm9maWxpbmcpIHsKICAgICAgICBwcm9maWxlLnNvbHZlID0gcGVyZm9ybWFuY2Uubm93KCkgLSBwcm9maWxpbmdTdGFydDsKICAgICAgfSAvLyBSZW1vdmUgYWxsIGNvbnRhY3RzIGZyb20gc29sdmVyCgoKICAgICAgc29sdmVyLnJlbW92ZUFsbEVxdWF0aW9ucygpOyAvLyBBcHBseSBkYW1waW5nLCBzZWUgaHR0cDovL2NvZGUuZ29vZ2xlLmNvbS9wL2J1bGxldC9pc3N1ZXMvZGV0YWlsP2lkPTc0IGZvciBkZXRhaWxzCgogICAgICBjb25zdCBwb3cgPSBNYXRoLnBvdzsKCiAgICAgIGZvciAoaSA9IDA7IGkgIT09IE47IGkrKykgewogICAgICAgIGNvbnN0IGJpID0gYm9kaWVzW2ldOwoKICAgICAgICBpZiAoYmkudHlwZSAmIERZTkFNSUMpIHsKICAgICAgICAgIC8vIE9ubHkgZm9yIGR5bmFtaWMgYm9kaWVzCiAgICAgICAgICBjb25zdCBsZCA9IHBvdygxLjAgLSBiaS5saW5lYXJEYW1waW5nLCBkdCk7CiAgICAgICAgICBjb25zdCB2ID0gYmkudmVsb2NpdHk7CiAgICAgICAgICB2LnNjYWxlKGxkLCB2KTsKICAgICAgICAgIGNvbnN0IGF2ID0gYmkuYW5ndWxhclZlbG9jaXR5OwoKICAgICAgICAgIGlmIChhdikgewogICAgICAgICAgICBjb25zdCBhZCA9IHBvdygxLjAgLSBiaS5hbmd1bGFyRGFtcGluZywgZHQpOwogICAgICAgICAgICBhdi5zY2FsZShhZCwgYXYpOwogICAgICAgICAgfQogICAgICAgIH0KICAgICAgfQoKICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KFdvcmxkX3N0ZXBfcHJlU3RlcEV2ZW50KTsgLy8gTGVhcCBmcm9nCiAgICAgIC8vIHZuZXcgPSB2ICsgaCpmL20KICAgICAgLy8geG5ldyA9IHggKyBoKnZuZXcKCiAgICAgIGlmIChkb1Byb2ZpbGluZykgewogICAgICAgIHByb2ZpbGluZ1N0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCk7CiAgICAgIH0KCiAgICAgIGNvbnN0IHN0ZXBudW1iZXIgPSB0aGlzLnN0ZXBudW1iZXI7CiAgICAgIGNvbnN0IHF1YXROb3JtYWxpemUgPSBzdGVwbnVtYmVyICUgKHRoaXMucXVhdE5vcm1hbGl6ZVNraXAgKyAxKSA9PT0gMDsKICAgICAgY29uc3QgcXVhdE5vcm1hbGl6ZUZhc3QgPSB0aGlzLnF1YXROb3JtYWxpemVGYXN0OwoKICAgICAgZm9yIChpID0gMDsgaSAhPT0gTjsgaSsrKSB7CiAgICAgICAgYm9kaWVzW2ldLmludGVncmF0ZShkdCwgcXVhdE5vcm1hbGl6ZSwgcXVhdE5vcm1hbGl6ZUZhc3QpOwogICAgICB9CgogICAgICB0aGlzLmNsZWFyRm9yY2VzKCk7CiAgICAgIHRoaXMuYnJvYWRwaGFzZS5kaXJ0eSA9IHRydWU7CgogICAgICBpZiAoZG9Qcm9maWxpbmcpIHsKICAgICAgICBwcm9maWxlLmludGVncmF0ZSA9IHBlcmZvcm1hbmNlLm5vdygpIC0gcHJvZmlsaW5nU3RhcnQ7CiAgICAgIH0gLy8gVXBkYXRlIHN0ZXAgbnVtYmVyCgoKICAgICAgdGhpcy5zdGVwbnVtYmVyICs9IDE7CiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChXb3JsZF9zdGVwX3Bvc3RTdGVwRXZlbnQpOyAvLyBTbGVlcGluZyB1cGRhdGUKCiAgICAgIGxldCBoYXNBY3RpdmVCb2RpZXMgPSB0cnVlOwoKICAgICAgaWYgKHRoaXMuYWxsb3dTbGVlcCkgewogICAgICAgIGhhc0FjdGl2ZUJvZGllcyA9IGZhbHNlOwoKICAgICAgICBmb3IgKGkgPSAwOyBpICE9PSBOOyBpKyspIHsKICAgICAgICAgIGNvbnN0IGJpID0gYm9kaWVzW2ldOwogICAgICAgICAgYmkuc2xlZXBUaWNrKHRoaXMudGltZSk7CgogICAgICAgICAgaWYgKGJpLnNsZWVwU3RhdGUgIT09IEJvZHkuU0xFRVBJTkcpIHsKICAgICAgICAgICAgaGFzQWN0aXZlQm9kaWVzID0gdHJ1ZTsKICAgICAgICAgIH0KICAgICAgICB9CiAgICAgIH0KCiAgICAgIHRoaXMuaGFzQWN0aXZlQm9kaWVzID0gaGFzQWN0aXZlQm9kaWVzOwogICAgfQoKICAgIGVtaXRDb250YWN0RXZlbnRzKCkgewogICAgICBjb25zdCBoYXNCZWdpbkNvbnRhY3QgPSB0aGlzLmhhc0FueUV2ZW50TGlzdGVuZXIoJ2JlZ2luQ29udGFjdCcpOwogICAgICBjb25zdCBoYXNFbmRDb250YWN0ID0gdGhpcy5oYXNBbnlFdmVudExpc3RlbmVyKCdlbmRDb250YWN0Jyk7CgogICAgICBpZiAoaGFzQmVnaW5Db250YWN0IHx8IGhhc0VuZENvbnRhY3QpIHsKICAgICAgICB0aGlzLmJvZHlPdmVybGFwS2VlcGVyLmdldERpZmYoYWRkaXRpb25zLCByZW1vdmFscyk7CiAgICAgIH0KCiAgICAgIGlmIChoYXNCZWdpbkNvbnRhY3QpIHsKICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGFkZGl0aW9ucy5sZW5ndGg7IGkgPCBsOyBpICs9IDIpIHsKICAgICAgICAgIGJlZ2luQ29udGFjdEV2ZW50LmJvZHlBID0gdGhpcy5nZXRCb2R5QnlJZChhZGRpdGlvbnNbaV0pOwogICAgICAgICAgYmVnaW5Db250YWN0RXZlbnQuYm9keUIgPSB0aGlzLmdldEJvZHlCeUlkKGFkZGl0aW9uc1tpICsgMV0pOwogICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGJlZ2luQ29udGFjdEV2ZW50KTsKICAgICAgICB9CgogICAgICAgIGJlZ2luQ29udGFjdEV2ZW50LmJvZHlBID0gYmVnaW5Db250YWN0RXZlbnQuYm9keUIgPSBudWxsOwogICAgICB9CgogICAgICBpZiAoaGFzRW5kQ29udGFjdCkgewogICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gcmVtb3ZhbHMubGVuZ3RoOyBpIDwgbDsgaSArPSAyKSB7CiAgICAgICAgICBlbmRDb250YWN0RXZlbnQuYm9keUEgPSB0aGlzLmdldEJvZHlCeUlkKHJlbW92YWxzW2ldKTsKICAgICAgICAgIGVuZENvbnRhY3RFdmVudC5ib2R5QiA9IHRoaXMuZ2V0Qm9keUJ5SWQocmVtb3ZhbHNbaSArIDFdKTsKICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChlbmRDb250YWN0RXZlbnQpOwogICAgICAgIH0KCiAgICAgICAgZW5kQ29udGFjdEV2ZW50LmJvZHlBID0gZW5kQ29udGFjdEV2ZW50LmJvZHlCID0gbnVsbDsKICAgICAgfQoKICAgICAgYWRkaXRpb25zLmxlbmd0aCA9IHJlbW92YWxzLmxlbmd0aCA9IDA7CiAgICAgIGNvbnN0IGhhc0JlZ2luU2hhcGVDb250YWN0ID0gdGhpcy5oYXNBbnlFdmVudExpc3RlbmVyKCdiZWdpblNoYXBlQ29udGFjdCcpOwogICAgICBjb25zdCBoYXNFbmRTaGFwZUNvbnRhY3QgPSB0aGlzLmhhc0FueUV2ZW50TGlzdGVuZXIoJ2VuZFNoYXBlQ29udGFjdCcpOwoKICAgICAgaWYgKGhhc0JlZ2luU2hhcGVDb250YWN0IHx8IGhhc0VuZFNoYXBlQ29udGFjdCkgewogICAgICAgIHRoaXMuc2hhcGVPdmVybGFwS2VlcGVyLmdldERpZmYoYWRkaXRpb25zLCByZW1vdmFscyk7CiAgICAgIH0KCiAgICAgIGlmIChoYXNCZWdpblNoYXBlQ29udGFjdCkgewogICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gYWRkaXRpb25zLmxlbmd0aDsgaSA8IGw7IGkgKz0gMikgewogICAgICAgICAgY29uc3Qgc2hhcGVBID0gdGhpcy5nZXRTaGFwZUJ5SWQoYWRkaXRpb25zW2ldKTsKICAgICAgICAgIGNvbnN0IHNoYXBlQiA9IHRoaXMuZ2V0U2hhcGVCeUlkKGFkZGl0aW9uc1tpICsgMV0pOwogICAgICAgICAgYmVnaW5TaGFwZUNvbnRhY3RFdmVudC5zaGFwZUEgPSBzaGFwZUE7CiAgICAgICAgICBiZWdpblNoYXBlQ29udGFjdEV2ZW50LnNoYXBlQiA9IHNoYXBlQjsKICAgICAgICAgIGlmIChzaGFwZUEpIGJlZ2luU2hhcGVDb250YWN0RXZlbnQuYm9keUEgPSBzaGFwZUEuYm9keTsKICAgICAgICAgIGlmIChzaGFwZUIpIGJlZ2luU2hhcGVDb250YWN0RXZlbnQuYm9keUIgPSBzaGFwZUIuYm9keTsKICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChiZWdpblNoYXBlQ29udGFjdEV2ZW50KTsKICAgICAgICB9CgogICAgICAgIGJlZ2luU2hhcGVDb250YWN0RXZlbnQuYm9keUEgPSBiZWdpblNoYXBlQ29udGFjdEV2ZW50LmJvZHlCID0gYmVnaW5TaGFwZUNvbnRhY3RFdmVudC5zaGFwZUEgPSBiZWdpblNoYXBlQ29udGFjdEV2ZW50LnNoYXBlQiA9IG51bGw7CiAgICAgIH0KCiAgICAgIGlmIChoYXNFbmRTaGFwZUNvbnRhY3QpIHsKICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHJlbW92YWxzLmxlbmd0aDsgaSA8IGw7IGkgKz0gMikgewogICAgICAgICAgY29uc3Qgc2hhcGVBID0gdGhpcy5nZXRTaGFwZUJ5SWQocmVtb3ZhbHNbaV0pOwogICAgICAgICAgY29uc3Qgc2hhcGVCID0gdGhpcy5nZXRTaGFwZUJ5SWQocmVtb3ZhbHNbaSArIDFdKTsKICAgICAgICAgIGVuZFNoYXBlQ29udGFjdEV2ZW50LnNoYXBlQSA9IHNoYXBlQTsKICAgICAgICAgIGVuZFNoYXBlQ29udGFjdEV2ZW50LnNoYXBlQiA9IHNoYXBlQjsKICAgICAgICAgIGlmIChzaGFwZUEpIGVuZFNoYXBlQ29udGFjdEV2ZW50LmJvZHlBID0gc2hhcGVBLmJvZHk7CiAgICAgICAgICBpZiAoc2hhcGVCKSBlbmRTaGFwZUNvbnRhY3RFdmVudC5ib2R5QiA9IHNoYXBlQi5ib2R5OwogICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGVuZFNoYXBlQ29udGFjdEV2ZW50KTsKICAgICAgICB9CgogICAgICAgIGVuZFNoYXBlQ29udGFjdEV2ZW50LmJvZHlBID0gZW5kU2hhcGVDb250YWN0RXZlbnQuYm9keUIgPSBlbmRTaGFwZUNvbnRhY3RFdmVudC5zaGFwZUEgPSBlbmRTaGFwZUNvbnRhY3RFdmVudC5zaGFwZUIgPSBudWxsOwogICAgICB9CiAgICB9CiAgICAvKioKICAgICAqIFNldHMgYWxsIGJvZHkgZm9yY2VzIGluIHRoZSB3b3JsZCB0byB6ZXJvLgogICAgICovCgoKICAgIGNsZWFyRm9yY2VzKCkgewogICAgICBjb25zdCBib2RpZXMgPSB0aGlzLmJvZGllczsKICAgICAgY29uc3QgTiA9IGJvZGllcy5sZW5ndGg7CgogICAgICBmb3IgKGxldCBpID0gMDsgaSAhPT0gTjsgaSsrKSB7CiAgICAgICAgY29uc3QgYiA9IGJvZGllc1tpXTsKICAgICAgICBiLmZvcmNlOwogICAgICAgIGIudG9ycXVlOwogICAgICAgIGIuZm9yY2Uuc2V0KDAsIDAsIDApOwogICAgICAgIGIudG9ycXVlLnNldCgwLCAwLCAwKTsKICAgICAgfQogICAgfQoKICB9IC8vIFRlbXAgc3R1ZmYKCiAgbmV3IEFBQkIoKTsKICBjb25zdCB0bXBSYXkgPSBuZXcgUmF5KCk7IC8vIHBlcmZvcm1hbmNlLm5vdygpIGZhbGxiYWNrIG9uIERhdGUubm93KCkKCiAgY29uc3QgcGVyZm9ybWFuY2UgPSBnbG9iYWxUaGlzLnBlcmZvcm1hbmNlIHx8IHt9OwoKICBpZiAoIXBlcmZvcm1hbmNlLm5vdykgewogICAgbGV0IG5vd09mZnNldCA9IERhdGUubm93KCk7CgogICAgaWYgKHBlcmZvcm1hbmNlLnRpbWluZyAmJiBwZXJmb3JtYW5jZS50aW1pbmcubmF2aWdhdGlvblN0YXJ0KSB7CiAgICAgIG5vd09mZnNldCA9IHBlcmZvcm1hbmNlLnRpbWluZy5uYXZpZ2F0aW9uU3RhcnQ7CiAgICB9CgogICAgcGVyZm9ybWFuY2Uubm93ID0gKCkgPT4gRGF0ZS5ub3coKSAtIG5vd09mZnNldDsKICB9CgogIG5ldyBWZWMzKCk7IC8vIERpc3BhdGNoZWQgYWZ0ZXIgdGhlIHdvcmxkIGhhcyBzdGVwcGVkIGZvcndhcmQgaW4gdGltZS4KICAvLyBSZXVzYWJsZSBldmVudCBvYmplY3RzIHRvIHNhdmUgbWVtb3J5LgoKICBjb25zdCBXb3JsZF9zdGVwX3Bvc3RTdGVwRXZlbnQgPSB7CiAgICB0eXBlOiAncG9zdFN0ZXAnCiAgfTsgLy8gRGlzcGF0Y2hlZCBiZWZvcmUgdGhlIHdvcmxkIHN0ZXBzIGZvcndhcmQgaW4gdGltZS4KCiAgY29uc3QgV29ybGRfc3RlcF9wcmVTdGVwRXZlbnQgPSB7CiAgICB0eXBlOiAncHJlU3RlcCcKICB9OwogIGNvbnN0IFdvcmxkX3N0ZXBfY29sbGlkZUV2ZW50ID0gewogICAgdHlwZTogQm9keS5DT0xMSURFX0VWRU5UX05BTUUsCiAgICBib2R5OiBudWxsLAogICAgY29udGFjdDogbnVsbAogIH07IC8vIFBvb2xzIGZvciB1bnVzZWQgb2JqZWN0cwoKICBjb25zdCBXb3JsZF9zdGVwX29sZENvbnRhY3RzID0gW107CiAgY29uc3QgV29ybGRfc3RlcF9mcmljdGlvbkVxdWF0aW9uUG9vbCA9IFtdOyAvLyBSZXVzYWJsZSBhcnJheXMgZm9yIGNvbGxpc2lvbiBwYWlycwoKICBjb25zdCBXb3JsZF9zdGVwX3AxID0gW107CiAgY29uc3QgV29ybGRfc3RlcF9wMiA9IFtdOyAvLyBTdHVmZiBmb3IgZW1pdENvbnRhY3RFdmVudHMKCiAgY29uc3QgYWRkaXRpb25zID0gW107CiAgY29uc3QgcmVtb3ZhbHMgPSBbXTsKICBjb25zdCBiZWdpbkNvbnRhY3RFdmVudCA9IHsKICAgIHR5cGU6ICdiZWdpbkNvbnRhY3QnLAogICAgYm9keUE6IG51bGwsCiAgICBib2R5QjogbnVsbAogIH07CiAgY29uc3QgZW5kQ29udGFjdEV2ZW50ID0gewogICAgdHlwZTogJ2VuZENvbnRhY3QnLAogICAgYm9keUE6IG51bGwsCiAgICBib2R5QjogbnVsbAogIH07CiAgY29uc3QgYmVnaW5TaGFwZUNvbnRhY3RFdmVudCA9IHsKICAgIHR5cGU6ICdiZWdpblNoYXBlQ29udGFjdCcsCiAgICBib2R5QTogbnVsbCwKICAgIGJvZHlCOiBudWxsLAogICAgc2hhcGVBOiBudWxsLAogICAgc2hhcGVCOiBudWxsCiAgfTsKICBjb25zdCBlbmRTaGFwZUNvbnRhY3RFdmVudCA9IHsKICAgIHR5cGU6ICdlbmRTaGFwZUNvbnRhY3QnLAogICAgYm9keUE6IG51bGwsCiAgICBib2R5QjogbnVsbCwKICAgIHNoYXBlQTogbnVsbCwKICAgIHNoYXBlQjogbnVsbAogIH07CgogIGNvbnN0IGFkZENvbnRhY3RNYXRlcmlhbCA9ICh3b3JsZCwgY3JlYXRlTWF0ZXJpYWwsIF9yZWYsIHV1aWQpID0+IHsKICAgIGxldCBbbWF0ZXJpYWxBLCBtYXRlcmlhbEIsIG9wdGlvbnNdID0gX3JlZjsKICAgIGNvbnN0IG1hdEEgPSBjcmVhdGVNYXRlcmlhbChtYXRlcmlhbEEpOwogICAgY29uc3QgbWF0QiA9IGNyZWF0ZU1hdGVyaWFsKG1hdGVyaWFsQik7CiAgICBjb25zdCBjb250YWN0TWF0ZXJpYWwgPSBuZXcgQ29udGFjdE1hdGVyaWFsKG1hdEEsIG1hdEIsIG9wdGlvbnMpOwogICAgY29udGFjdE1hdGVyaWFsLnV1aWQgPSB1dWlkOwogICAgd29ybGQuYWRkQ29udGFjdE1hdGVyaWFsKGNvbnRhY3RNYXRlcmlhbCk7CiAgfTsKICBjb25zdCByZW1vdmVDb250YWN0TWF0ZXJpYWwgPSAod29ybGQsIGNtVVVJRCkgPT4gewogICAgY29uc3QgaW5kZXggPSB3b3JsZC5jb250YWN0bWF0ZXJpYWxzLmZpbmRJbmRleChfcmVmMiA9PiB7CiAgICAgIGxldCB7CiAgICAgICAgdXVpZAogICAgICB9ID0gX3JlZjI7CiAgICAgIHJldHVybiB1dWlkID09PSBjbVVVSUQ7CiAgICB9KTsKICAgIGNvbnN0IFt7CiAgICAgIGlkOiBpCiAgICB9LCB7CiAgICAgIGlkOiBqCiAgICB9XSA9IHdvcmxkLmNvbnRhY3RtYXRlcmlhbHNbaW5kZXhdLm1hdGVyaWFsczsKICAgIHdvcmxkLmNvbnRhY3RtYXRlcmlhbHMuc3BsaWNlKGluZGV4LCAxKTsKICAgIGRlbGV0ZSB3b3JsZC5jb250YWN0TWF0ZXJpYWxUYWJsZS5kYXRhW2kgPCBqID8gYCR7aX0tJHtqfWAgOiBgJHtqfS0ke2l9YF07CiAgfTsKCiAgbGV0IG1hdGVyaWFsSWQgPSAwOwogIGNvbnN0IGNyZWF0ZU1hdGVyaWFsRmFjdG9yeSA9IG1hdGVyaWFscyA9PiBmdW5jdGlvbiAobmFtZU9yT3B0aW9ucykgewogICAgaWYgKG5hbWVPck9wdGlvbnMgPT09IHZvaWQgMCkgewogICAgICBuYW1lT3JPcHRpb25zID0ge307CiAgICB9CgogICAgY29uc3QgbWF0ZXJpYWxPcHRpb25zID0gdHlwZW9mIG5hbWVPck9wdGlvbnMgPT09ICdzdHJpbmcnID8gewogICAgICBuYW1lOiBuYW1lT3JPcHRpb25zCiAgICB9IDogewogICAgICBuYW1lOiBTeW1ib2wuZm9yKGBNYXRlcmlhbCR7bWF0ZXJpYWxJZCsrfWApLAogICAgICAuLi5uYW1lT3JPcHRpb25zCiAgICB9OwogICAgY29uc3QgewogICAgICBuYW1lCiAgICB9ID0gbWF0ZXJpYWxPcHRpb25zOwogICAgbWF0ZXJpYWxzW25hbWVdID0gbWF0ZXJpYWxzW25hbWVdIHx8IG5ldyBNYXRlcmlhbChtYXRlcmlhbE9wdGlvbnMpOwogICAgcmV0dXJuIG1hdGVyaWFsc1tuYW1lXTsKICB9OwoKICAvKioKICAgKiBAdHlwZWRlZiB7IGltcG9ydCgnY2Fubm9uLWVzJykuTWF0ZXJpYWxPcHRpb25zIH0gTWF0ZXJpYWxPcHRpb25zCiAgICovCgogIGNvbnN0IG1ha2VWZWMzID0gX3JlZiA9PiB7CiAgICBsZXQgW3gsIHksIHpdID0gX3JlZjsKICAgIHJldHVybiBuZXcgVmVjMyh4LCB5LCB6KTsKICB9OwoKICBjb25zdCBwcmVwYXJlU3BoZXJlID0gYXJncyA9PiBBcnJheS5pc0FycmF5KGFyZ3MpID8gYXJncyA6IFthcmdzXTsKCiAgY29uc3QgcHJlcGFyZUNvbnZleFBvbHloZWRyb24gPSBfcmVmMiA9PiB7CiAgICBsZXQgW3YsIGZhY2VzLCBuLCBhLCBib3VuZGluZ1NwaGVyZVJhZGl1c10gPSBfcmVmMjsKICAgIHJldHVybiBbewogICAgICBheGVzOiBhID8gYS5tYXAobWFrZVZlYzMpIDogdW5kZWZpbmVkLAogICAgICBib3VuZGluZ1NwaGVyZVJhZGl1cywKICAgICAgZmFjZXMsCiAgICAgIG5vcm1hbHM6IG4gPyBuLm1hcChtYWtlVmVjMykgOiB1bmRlZmluZWQsCiAgICAgIHZlcnRpY2VzOiB2ID8gdi5tYXAobWFrZVZlYzMpIDogdW5kZWZpbmVkCiAgICB9XTsKICB9OwoKICBmdW5jdGlvbiBjcmVhdGVTaGFwZSh0eXBlLCBhcmdzKSB7CiAgICBzd2l0Y2ggKHR5cGUpIHsKICAgICAgY2FzZSAnQm94JzoKICAgICAgICByZXR1cm4gbmV3IEJveChuZXcgVmVjMyguLi5hcmdzLm1hcCh2ID0+IHYgLyAyKSkpOwogICAgICAvLyBleHRlbnRzID0+IGhhbGZFeHRlbnRzCgogICAgICBjYXNlICdDb252ZXhQb2x5aGVkcm9uJzoKICAgICAgICByZXR1cm4gbmV3IENvbnZleFBvbHloZWRyb24oLi4ucHJlcGFyZUNvbnZleFBvbHloZWRyb24oYXJncykpOwoKICAgICAgY2FzZSAnQ3lsaW5kZXInOgogICAgICAgIHJldHVybiBuZXcgQ3lsaW5kZXIoLi4uYXJncyk7CiAgICAgIC8vIFsgcmFkaXVzVG9wLCByYWRpdXNCb3R0b20sIGhlaWdodCwgbnVtU2VnbWVudHMgXSA9IGFyZ3MKCiAgICAgIGNhc2UgJ0hlaWdodGZpZWxkJzoKICAgICAgICByZXR1cm4gbmV3IEhlaWdodGZpZWxkKC4uLmFyZ3MpOwogICAgICAvLyBbIEFycmF5IGRhdGEsIG9wdGlvbnM6IHttaW5WYWx1ZSwgbWF4VmFsdWUsIGVsZW1lbnRTaXplfSAgXSA9IGFyZ3MKCiAgICAgIGNhc2UgJ1BhcnRpY2xlJzoKICAgICAgICByZXR1cm4gbmV3IFBhcnRpY2xlKCk7CiAgICAgIC8vIG5vIGFyZ3MKCiAgICAgIGNhc2UgJ1BsYW5lJzoKICAgICAgICByZXR1cm4gbmV3IFBsYW5lKCk7CiAgICAgIC8vIG5vIGFyZ3MsIGluZmluaXRlIHggYW5kIHkKCiAgICAgIGNhc2UgJ1NwaGVyZSc6CiAgICAgICAgcmV0dXJuIG5ldyBTcGhlcmUoLi4ucHJlcGFyZVNwaGVyZShhcmdzKSk7CiAgICAgIC8vIHJhZGl1cyA9IGFyZ3MKCiAgICAgIGNhc2UgJ1RyaW1lc2gnOgogICAgICAgIHJldHVybiBuZXcgVHJpbWVzaCguLi5hcmdzKTsKICAgICAgLy8gW3ZlcnRpY2VzLCBpbmRpY2VzXSA9IGFyZ3MKICAgIH0KICB9CiAgLyoqCiAgICogQGZ1bmN0aW9uCiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMKICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy51dWlkCiAgICogQHBhcmFtIHtCb2R5UHJvcHN9IG9wdGlvbnMucHJvcHMKICAgKiBAcGFyYW0ge0JvZHlTaGFwZVR5cGV9IG9wdGlvbnMudHlwZQogICAqIEBwYXJhbSB7KG1hdGVyaWFsT3B0aW9uczogTWF0ZXJpYWxPcHRpb25zKSA9PiBNYXRlcmlhbCA9fSBvcHRpb25zLmNyZWF0ZU1hdGVyaWFsCiAgICogQHJldHVybnMge0JvZHl9CiAgICovCgoKICBjb25zdCBwcm9wc1RvQm9keSA9IG9wdGlvbnMgPT4gewogICAgY29uc3QgewogICAgICB1dWlkLAogICAgICBwcm9wcywKICAgICAgdHlwZSwKICAgICAgY3JlYXRlTWF0ZXJpYWwgPSBtYXRlcmlhbE9wdGlvbnMgPT4gbmV3IE1hdGVyaWFsKG1hdGVyaWFsT3B0aW9ucykKICAgIH0gPSBvcHRpb25zOwogICAgY29uc3QgewogICAgICBhbmd1bGFyRmFjdG9yID0gWzEsIDEsIDFdLAogICAgICBhbmd1bGFyVmVsb2NpdHkgPSBbMCwgMCwgMF0sCiAgICAgIGFyZ3MgPSBbXSwKICAgICAgY29sbGlzaW9uUmVzcG9uc2UsCiAgICAgIGxpbmVhckZhY3RvciA9IFsxLCAxLCAxXSwKICAgICAgbWFzcywKICAgICAgbWF0ZXJpYWwsCiAgICAgIG9uQ29sbGlkZSwKICAgICAgcG9zaXRpb24gPSBbMCwgMCwgMF0sCiAgICAgIHJvdGF0aW9uID0gWzAsIDAsIDBdLAogICAgICBzaGFwZXMsCiAgICAgIHR5cGU6IGJvZHlUeXBlLAogICAgICB2ZWxvY2l0eSA9IFswLCAwLCAwXSwKICAgICAgLi4uZXh0cmEKICAgIH0gPSBwcm9wczsKICAgIGNvbnN0IGJvZHkgPSBuZXcgQm9keSh7IC4uLmV4dHJhLAogICAgICBtYXNzOiBib2R5VHlwZSA9PT0gJ1N0YXRpYycgPyAwIDogbWFzcywKICAgICAgbWF0ZXJpYWw6IG1hdGVyaWFsID8gY3JlYXRlTWF0ZXJpYWwobWF0ZXJpYWwpIDogdW5kZWZpbmVkLAogICAgICB0eXBlOiBib2R5VHlwZSA/IEJvZHlbYm9keVR5cGUudG9VcHBlckNhc2UoKV0gOiB1bmRlZmluZWQKICAgIH0pOwogICAgYm9keS51dWlkID0gdXVpZDsKCiAgICBpZiAoY29sbGlzaW9uUmVzcG9uc2UgIT09IHVuZGVmaW5lZCkgewogICAgICBib2R5LmNvbGxpc2lvblJlc3BvbnNlID0gY29sbGlzaW9uUmVzcG9uc2U7CiAgICB9CgogICAgaWYgKHR5cGUgPT09ICdDb21wb3VuZCcpIHsKICAgICAgc2hhcGVzLmZvckVhY2goX3JlZjMgPT4gewogICAgICAgIGxldCB7CiAgICAgICAgICB0eXBlLAogICAgICAgICAgYXJncywKICAgICAgICAgIHBvc2l0aW9uLAogICAgICAgICAgcm90YXRpb24sCiAgICAgICAgICBtYXRlcmlhbCwKICAgICAgICAgIC4uLmV4dHJhCiAgICAgICAgfSA9IF9yZWYzOwogICAgICAgIGNvbnN0IHNoYXBlQm9keSA9IGJvZHkuYWRkU2hhcGUoY3JlYXRlU2hhcGUodHlwZSwgYXJncyksIHBvc2l0aW9uID8gbmV3IFZlYzMoLi4ucG9zaXRpb24pIDogdW5kZWZpbmVkLCByb3RhdGlvbiA/IG5ldyBRdWF0ZXJuaW9uKCkuc2V0RnJvbUV1bGVyKC4uLnJvdGF0aW9uKSA6IHVuZGVmaW5lZCk7CiAgICAgICAgaWYgKG1hdGVyaWFsKSBzaGFwZUJvZHkubWF0ZXJpYWwgPSBjcmVhdGVNYXRlcmlhbChtYXRlcmlhbCk7CiAgICAgICAgT2JqZWN0LmFzc2lnbihzaGFwZUJvZHksIGV4dHJhKTsKICAgICAgfSk7CiAgICB9IGVsc2UgewogICAgICBib2R5LmFkZFNoYXBlKGNyZWF0ZVNoYXBlKHR5cGUsIGFyZ3MpKTsKICAgIH0KCiAgICBib2R5LnBvc2l0aW9uLnNldChwb3NpdGlvblswXSwgcG9zaXRpb25bMV0sIHBvc2l0aW9uWzJdKTsKICAgIGJvZHkucXVhdGVybmlvbi5zZXRGcm9tRXVsZXIocm90YXRpb25bMF0sIHJvdGF0aW9uWzFdLCByb3RhdGlvblsyXSk7CiAgICBib2R5LnZlbG9jaXR5LnNldCh2ZWxvY2l0eVswXSwgdmVsb2NpdHlbMV0sIHZlbG9jaXR5WzJdKTsKICAgIGJvZHkuYW5ndWxhclZlbG9jaXR5LnNldChhbmd1bGFyVmVsb2NpdHlbMF0sIGFuZ3VsYXJWZWxvY2l0eVsxXSwgYW5ndWxhclZlbG9jaXR5WzJdKTsKICAgIGJvZHkubGluZWFyRmFjdG9yLnNldChsaW5lYXJGYWN0b3JbMF0sIGxpbmVhckZhY3RvclsxXSwgbGluZWFyRmFjdG9yWzJdKTsKICAgIGJvZHkuYW5ndWxhckZhY3Rvci5zZXQoYW5ndWxhckZhY3RvclswXSwgYW5ndWxhckZhY3RvclsxXSwgYW5ndWxhckZhY3RvclsyXSk7CiAgICByZXR1cm4gYm9keTsKICB9OwoKICBjb25zdCBhZGRCb2RpZXMgPSAoc3RhdGUsIGNyZWF0ZU1hdGVyaWFsLCBfcmVmKSA9PiB7CiAgICBsZXQgewogICAgICBwcm9wcywKICAgICAgdHlwZSwKICAgICAgdXVpZAogICAgfSA9IF9yZWY7CgogICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1dWlkLmxlbmd0aDsgaSsrKSB7CiAgICAgIGNvbnN0IGJvZHkgPSBwcm9wc1RvQm9keSh7CiAgICAgICAgY3JlYXRlTWF0ZXJpYWwsCiAgICAgICAgcHJvcHM6IHByb3BzW2ldLAogICAgICAgIHR5cGUsCiAgICAgICAgdXVpZDogdXVpZFtpXQogICAgICB9KTsKICAgICAgc3RhdGUud29ybGQuYWRkQm9keShib2R5KTsKICAgICAgaWYgKHByb3BzW2ldLm9uQ29sbGlkZSkgYm9keS5hZGRFdmVudExpc3RlbmVyKCdjb2xsaWRlJywgX3JlZjIgPT4gewogICAgICAgIGxldCB7CiAgICAgICAgICB0eXBlLAogICAgICAgICAgYm9keSwKICAgICAgICAgIHRhcmdldCwKICAgICAgICAgIGNvbnRhY3QKICAgICAgICB9ID0gX3JlZjI7CiAgICAgICAgY29uc3QgewogICAgICAgICAgbmksCiAgICAgICAgICByaSwKICAgICAgICAgIHJqLAogICAgICAgICAgYmksCiAgICAgICAgICBiaiwKICAgICAgICAgIGlkCiAgICAgICAgfSA9IGNvbnRhY3Q7CiAgICAgICAgY29uc3QgY29udGFjdFBvaW50ID0gYmkucG9zaXRpb24udmFkZChyaSk7CiAgICAgICAgY29uc3QgY29udGFjdE5vcm1hbCA9IGJpID09PSBib2R5ID8gbmkgOiBuaS5zY2FsZSgtMSk7CiAgICAgICAgc2VsZi5wb3N0TWVzc2FnZSh7CiAgICAgICAgICBib2R5OiBib2R5LnV1aWQsCiAgICAgICAgICBjb2xsaXNpb25GaWx0ZXJzOiB7CiAgICAgICAgICAgIGJvZHlGaWx0ZXJHcm91cDogYm9keS5jb2xsaXNpb25GaWx0ZXJHcm91cCwKICAgICAgICAgICAgYm9keUZpbHRlck1hc2s6IGJvZHkuY29sbGlzaW9uRmlsdGVyTWFzaywKICAgICAgICAgICAgdGFyZ2V0RmlsdGVyR3JvdXA6IHRhcmdldC5jb2xsaXNpb25GaWx0ZXJHcm91cCwKICAgICAgICAgICAgdGFyZ2V0RmlsdGVyTWFzazogdGFyZ2V0LmNvbGxpc2lvbkZpbHRlck1hc2sKICAgICAgICAgIH0sCiAgICAgICAgICBjb250YWN0OiB7CiAgICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgVE9ETzogdXNlIGlkIGluc3RlYWQgb2YgdXVpZAogICAgICAgICAgICBiaTogYmkudXVpZCwKICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciBUT0RPOiB1c2UgaWQgaW5zdGVhZCBvZiB1dWlkCiAgICAgICAgICAgIGJqOiBiai51dWlkLAogICAgICAgICAgICAvLyBOb3JtYWwgb2YgdGhlIGNvbnRhY3QsIHJlbGF0aXZlIHRvIHRoZSBjb2xsaWRpbmcgYm9keQogICAgICAgICAgICBjb250YWN0Tm9ybWFsOiBjb250YWN0Tm9ybWFsLnRvQXJyYXkoKSwKICAgICAgICAgICAgLy8gV29ybGQgcG9zaXRpb24gb2YgdGhlIGNvbnRhY3QKICAgICAgICAgICAgY29udGFjdFBvaW50OiBjb250YWN0UG9pbnQudG9BcnJheSgpLAogICAgICAgICAgICBpZCwKICAgICAgICAgICAgaW1wYWN0VmVsb2NpdHk6IGNvbnRhY3QuZ2V0SW1wYWN0VmVsb2NpdHlBbG9uZ05vcm1hbCgpLAogICAgICAgICAgICBuaTogbmkudG9BcnJheSgpLAogICAgICAgICAgICByaTogcmkudG9BcnJheSgpLAogICAgICAgICAgICByajogcmoudG9BcnJheSgpCiAgICAgICAgICB9LAogICAgICAgICAgb3A6ICdldmVudCcsCiAgICAgICAgICB0YXJnZXQ6IHRhcmdldC51dWlkLAogICAgICAgICAgdHlwZQogICAgICAgIH0pOwogICAgICB9KTsKICAgIH0KICB9OwoKICBjb25zdCB0cmlwbGV0VG9WZWMzID0gdCA9PiB0ID8gbmV3IFZlYzMoLi4udCkgOiB1bmRlZmluZWQ7CgogIGNvbnN0IGFkZENvbnN0cmFpbnQgPSAoc3RhdGUsIF9yZWYpID0+IHsKICAgIGxldCB7CiAgICAgIHByb3BzOiBbYm9keUEsIGJvZHlCLCB7CiAgICAgICAgYW5nbGUsCiAgICAgICAgYXhpc0EsCiAgICAgICAgYXhpc0IsCiAgICAgICAgY29sbGlkZUNvbm5lY3RlZCwKICAgICAgICBkaXN0YW5jZSwKICAgICAgICBtYXhGb3JjZSwKICAgICAgICBtYXhNdWx0aXBsaWVyLAogICAgICAgIHBpdm90QSwKICAgICAgICBwaXZvdEIsCiAgICAgICAgdHdpc3RBbmdsZSwKICAgICAgICB3YWtlVXBCb2RpZXMKICAgICAgfV0sCiAgICAgIHR5cGUsCiAgICAgIHV1aWQKICAgIH0gPSBfcmVmOwogICAgbGV0IGNvbnN0cmFpbnQ7CgogICAgc3dpdGNoICh0eXBlKSB7CiAgICAgIGNhc2UgJ1BvaW50VG9Qb2ludCc6CiAgICAgICAgY29uc3RyYWludCA9IG5ldyBQb2ludFRvUG9pbnRDb25zdHJhaW50KHN0YXRlLmJvZGllc1tib2R5QV0sIHRyaXBsZXRUb1ZlYzMocGl2b3RBKSwgc3RhdGUuYm9kaWVzW2JvZHlCXSwgdHJpcGxldFRvVmVjMyhwaXZvdEIpLCBtYXhGb3JjZSk7CiAgICAgICAgYnJlYWs7CgogICAgICBjYXNlICdDb25lVHdpc3QnOgogICAgICAgIGNvbnN0cmFpbnQgPSBuZXcgQ29uZVR3aXN0Q29uc3RyYWludChzdGF0ZS5ib2RpZXNbYm9keUFdLCBzdGF0ZS5ib2RpZXNbYm9keUJdLCB7CiAgICAgICAgICBhbmdsZSwKICAgICAgICAgIGF4aXNBOiB0cmlwbGV0VG9WZWMzKGF4aXNBKSwKICAgICAgICAgIGF4aXNCOiB0cmlwbGV0VG9WZWMzKGF4aXNCKSwKICAgICAgICAgIGNvbGxpZGVDb25uZWN0ZWQsCiAgICAgICAgICBtYXhGb3JjZSwKICAgICAgICAgIHBpdm90QTogdHJpcGxldFRvVmVjMyhwaXZvdEEpLAogICAgICAgICAgcGl2b3RCOiB0cmlwbGV0VG9WZWMzKHBpdm90QiksCiAgICAgICAgICB0d2lzdEFuZ2xlCiAgICAgICAgfSk7CiAgICAgICAgYnJlYWs7CgogICAgICBjYXNlICdIaW5nZSc6CiAgICAgICAgY29uc3RyYWludCA9IG5ldyBIaW5nZUNvbnN0cmFpbnQoc3RhdGUuYm9kaWVzW2JvZHlBXSwgc3RhdGUuYm9kaWVzW2JvZHlCXSwgewogICAgICAgICAgYXhpc0E6IHRyaXBsZXRUb1ZlYzMoYXhpc0EpLAogICAgICAgICAgYXhpc0I6IHRyaXBsZXRUb1ZlYzMoYXhpc0IpLAogICAgICAgICAgY29sbGlkZUNvbm5lY3RlZCwKICAgICAgICAgIG1heEZvcmNlLAogICAgICAgICAgcGl2b3RBOiB0cmlwbGV0VG9WZWMzKHBpdm90QSksCiAgICAgICAgICBwaXZvdEI6IHRyaXBsZXRUb1ZlYzMocGl2b3RCKQogICAgICAgIH0pOwogICAgICAgIGJyZWFrOwoKICAgICAgY2FzZSAnRGlzdGFuY2UnOgogICAgICAgIGNvbnN0cmFpbnQgPSBuZXcgRGlzdGFuY2VDb25zdHJhaW50KHN0YXRlLmJvZGllc1tib2R5QV0sIHN0YXRlLmJvZGllc1tib2R5Ql0sIGRpc3RhbmNlLCBtYXhGb3JjZSk7CiAgICAgICAgYnJlYWs7CgogICAgICBjYXNlICdMb2NrJzoKICAgICAgICBjb25zdHJhaW50ID0gbmV3IExvY2tDb25zdHJhaW50KHN0YXRlLmJvZGllc1tib2R5QV0sIHN0YXRlLmJvZGllc1tib2R5Ql0sIHsKICAgICAgICAgIG1heEZvcmNlCiAgICAgICAgfSk7CiAgICAgICAgYnJlYWs7CgogICAgICBkZWZhdWx0OgogICAgICAgIGNvbnN0cmFpbnQgPSBuZXcgQ29uc3RyYWludChzdGF0ZS5ib2RpZXNbYm9keUFdLCBzdGF0ZS5ib2RpZXNbYm9keUJdLCB7CiAgICAgICAgICBjb2xsaWRlQ29ubmVjdGVkLAogICAgICAgICAgd2FrZVVwQm9kaWVzCiAgICAgICAgfSk7CiAgICAgICAgYnJlYWs7CiAgICB9CgogICAgY29uc3RyYWludC51dWlkID0gdXVpZDsKICAgIHN0YXRlLndvcmxkLmFkZENvbnN0cmFpbnQoY29uc3RyYWludCk7CgogICAgaWYgKG1heE11bHRpcGxpZXIgIT09IHVuZGVmaW5lZCkgewogICAgICBjb25zdCBwb3N0U3RlcENvbnN0cmFpbnQgPSAoKSA9PiB7CiAgICAgICAgLy8gVGhlIG11bHRpcGxpZXIgaXMgcHJvcG9ydGlvbmFsIHRvIGhvdyBtdWNoIGZvcmNlIGlzIGFkZGVkIHRvIHRoZSBib2RpZXMgYnkgdGhlIGNvbnN0cmFpbnQuCiAgICAgICAgLy8gSWYgdGhpcyBleGNlZWRzIGEgbGltaXQgdGhlIGNvbnN0cmFpbnQgaXMgZGlzYWJsZWQuCiAgICAgICAgY29uc3QgbXVsdGlwbGllciA9IE1hdGguYWJzKGNvbnN0cmFpbnQuZXF1YXRpb25zWzBdLm11bHRpcGxpZXIpOwoKICAgICAgICBpZiAobXVsdGlwbGllciA+IG1heE11bHRpcGxpZXIpIHsKICAgICAgICAgIGNvbnN0cmFpbnQuZGlzYWJsZSgpOwogICAgICAgIH0KICAgICAgfTsKCiAgICAgIHN0YXRlLmNvbnN0cmFpbnRzW3V1aWRdID0gcG9zdFN0ZXBDb25zdHJhaW50OwogICAgICBzdGF0ZS53b3JsZC5hZGRFdmVudExpc3RlbmVyKCdwb3N0U3RlcCcsIHN0YXRlLmNvbnN0cmFpbnRzW3V1aWRdKTsKICAgIH0KICB9OwoKICBmdW5jdGlvbiB0b1VwcGVyY2FzZShzdHIpIHsKICAgIHJldHVybiBzdHIudG9VcHBlckNhc2UoKTsKICB9CgogIGNvbnN0IGFkZFJheSA9IChzdGF0ZSwgX3JlZikgPT4gewogICAgbGV0IHsKICAgICAgcHJvcHM6IHsKICAgICAgICBmcm9tLAogICAgICAgIG1vZGUsCiAgICAgICAgdG8sCiAgICAgICAgLi4ucmF5T3B0aW9ucwogICAgICB9LAogICAgICB1dWlkCiAgICB9ID0gX3JlZjsKICAgIGNvbnN0IHJheSA9IG5ldyBSYXkodHJpcGxldFRvVmVjMyhmcm9tKSwgdHJpcGxldFRvVmVjMyh0bykpOwogICAgY29uc3Qgb3B0aW9ucyA9IHsKICAgICAgbW9kZTogUkFZX01PREVTW3RvVXBwZXJjYXNlKG1vZGUpXSwKICAgICAgcmVzdWx0OiBuZXcgUmF5Y2FzdFJlc3VsdCgpLAogICAgICAuLi5yYXlPcHRpb25zCiAgICB9OwoKICAgIHN0YXRlLnJheXNbdXVpZF0gPSAoKSA9PiB7CiAgICAgIHJheS5pbnRlcnNlY3RXb3JsZChzdGF0ZS53b3JsZCwgb3B0aW9ucyk7CiAgICAgIGlmICghb3B0aW9ucy5yZXN1bHQgfHwgIW9wdGlvbnMucmVzdWx0LmJvZHkpIHJldHVybjsKICAgICAgY29uc3QgewogICAgICAgIGJvZHksCiAgICAgICAgc2hhcGUsCiAgICAgICAgcmF5RnJvbVdvcmxkLAogICAgICAgIHJheVRvV29ybGQsCiAgICAgICAgaGl0Tm9ybWFsV29ybGQsCiAgICAgICAgaGl0UG9pbnRXb3JsZCwKICAgICAgICAuLi5yZXN0CiAgICAgIH0gPSBvcHRpb25zLnJlc3VsdDsKICAgICAgY29uc3QgYm9keVVVSUQgPSBib2R5LnV1aWQ7CiAgICAgIHNlbGYucG9zdE1lc3NhZ2UoewogICAgICAgIGJvZHk6IGJvZHlVVUlEIHx8IG51bGwsCiAgICAgICAgaGl0Tm9ybWFsV29ybGQ6IGhpdE5vcm1hbFdvcmxkLnRvQXJyYXkoKSwKICAgICAgICBoaXRQb2ludFdvcmxkOiBoaXRQb2ludFdvcmxkLnRvQXJyYXkoKSwKICAgICAgICBvcDogJ2V2ZW50JywKICAgICAgICByYXk6IHsKICAgICAgICAgIGNvbGxpc2lvbkZpbHRlckdyb3VwOiByYXkuY29sbGlzaW9uRmlsdGVyR3JvdXAsCiAgICAgICAgICBjb2xsaXNpb25GaWx0ZXJNYXNrOiByYXkuY29sbGlzaW9uRmlsdGVyTWFzaywKICAgICAgICAgIGRpcmVjdGlvbjogcmF5LmRpcmVjdGlvbi50b0FycmF5KCksCiAgICAgICAgICBmcm9tLAogICAgICAgICAgdG8sCiAgICAgICAgICB1dWlkCiAgICAgICAgfSwKICAgICAgICByYXlGcm9tV29ybGQ6IHJheUZyb21Xb3JsZC50b0FycmF5KCksCiAgICAgICAgcmF5VG9Xb3JsZDogcmF5VG9Xb3JsZC50b0FycmF5KCksCiAgICAgICAgc2hhcGU6IHNoYXBlID8geyAuLi5zaGFwZSwKICAgICAgICAgIGJvZHk6IGJvZHlVVUlECiAgICAgICAgfSA6IG51bGwsCiAgICAgICAgdHlwZTogJ3JheWhpdCcsCiAgICAgICAgLi4ucmVzdAogICAgICB9KTsKICAgIH07CgogICAgc3RhdGUud29ybGQuYWRkRXZlbnRMaXN0ZW5lcigncHJlU3RlcCcsIHN0YXRlLnJheXNbdXVpZF0pOwogIH07CgogIGNvbnN0IGFkZFJheWNhc3RWZWhpY2xlID0gKHN0YXRlLCBkYXRhKSA9PiB7CiAgICBjb25zdCBbY2hhc3Npc0JvZHksIHdoZWVscywgd2hlZWxJbmZvcywgaW5kZXhGb3J3YXJkQXhpcywgaW5kZXhSaWdodEF4aXMsIGluZGV4VXBBeGlzXSA9IGRhdGEucHJvcHM7CiAgICBjb25zdCB2ZWhpY2xlID0gbmV3IFJheWNhc3RWZWhpY2xlKHsKICAgICAgY2hhc3Npc0JvZHk6IHN0YXRlLmJvZGllc1tjaGFzc2lzQm9keV0sCiAgICAgIGluZGV4Rm9yd2FyZEF4aXMsCiAgICAgIGluZGV4UmlnaHRBeGlzLAogICAgICBpbmRleFVwQXhpcwogICAgfSk7CiAgICB2ZWhpY2xlLndvcmxkID0gc3RhdGUud29ybGQ7CgogICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aGVlbEluZm9zLmxlbmd0aDsgaSsrKSB7CiAgICAgIGNvbnN0IHsKICAgICAgICBheGxlTG9jYWwsCiAgICAgICAgY2hhc3Npc0Nvbm5lY3Rpb25Qb2ludExvY2FsLAogICAgICAgIGRpcmVjdGlvbkxvY2FsLAogICAgICAgIC4uLnJlc3QKICAgICAgfSA9IHdoZWVsSW5mb3NbaV07CiAgICAgIHZlaGljbGUuYWRkV2hlZWwoewogICAgICAgIGF4bGVMb2NhbDogdHJpcGxldFRvVmVjMyhheGxlTG9jYWwpLAogICAgICAgIGNoYXNzaXNDb25uZWN0aW9uUG9pbnRMb2NhbDogdHJpcGxldFRvVmVjMyhjaGFzc2lzQ29ubmVjdGlvblBvaW50TG9jYWwpLAogICAgICAgIGRpcmVjdGlvbkxvY2FsOiB0cmlwbGV0VG9WZWMzKGRpcmVjdGlvbkxvY2FsKSwKICAgICAgICAuLi5yZXN0CiAgICAgIH0pOwogICAgfQoKICAgIGNvbnN0IHByZVN0ZXAgPSAoKSA9PiB7CiAgICAgIHZlaGljbGUudXBkYXRlVmVoaWNsZShzdGF0ZS53b3JsZC5kdCk7CiAgICB9OwoKICAgIGNvbnN0IHBvc3RTdGVwID0gKCkgPT4gewogICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZlaGljbGUud2hlZWxJbmZvcy5sZW5ndGg7IGkrKykgewogICAgICAgIHZlaGljbGUudXBkYXRlV2hlZWxUcmFuc2Zvcm0oaSk7CiAgICAgICAgY29uc3QgdCA9IHZlaGljbGUud2hlZWxJbmZvc1tpXS53b3JsZFRyYW5zZm9ybTsKICAgICAgICBjb25zdCB3aGVlbEJvZHkgPSBzdGF0ZS5ib2RpZXNbd2hlZWxzW2ldXTsKICAgICAgICB3aGVlbEJvZHkucG9zaXRpb24uY29weSh0LnBvc2l0aW9uKTsKICAgICAgICB3aGVlbEJvZHkucXVhdGVybmlvbi5jb3B5KHQucXVhdGVybmlvbik7CiAgICAgIH0KICAgIH07CgogICAgc3RhdGUudmVoaWNsZXNbZGF0YS51dWlkXSA9IHsKICAgICAgcG9zdFN0ZXAsCiAgICAgIHByZVN0ZXAsCiAgICAgIHZlaGljbGUKICAgIH07CiAgICBzdGF0ZS53b3JsZC5hZGRFdmVudExpc3RlbmVyKCdwcmVTdGVwJywgcHJlU3RlcCk7CiAgICBzdGF0ZS53b3JsZC5hZGRFdmVudExpc3RlbmVyKCdwb3N0U3RlcCcsIHBvc3RTdGVwKTsKICB9OwoKICBjb25zdCBhZGRTcHJpbmcgPSAoc3RhdGUsIF9yZWYpID0+IHsKICAgIGxldCB7CiAgICAgIHByb3BzOiBbYm9keUEsIGJvZHlCLCB7CiAgICAgICAgZGFtcGluZywKICAgICAgICBsb2NhbEFuY2hvckEsCiAgICAgICAgbG9jYWxBbmNob3JCLAogICAgICAgIHJlc3RMZW5ndGgsCiAgICAgICAgc3RpZmZuZXNzLAogICAgICAgIHdvcmxkQW5jaG9yQSwKICAgICAgICB3b3JsZEFuY2hvckIKICAgICAgfV0sCiAgICAgIHV1aWQKICAgIH0gPSBfcmVmOwogICAgY29uc3Qgc3ByaW5nID0gbmV3IFNwcmluZyhzdGF0ZS5ib2RpZXNbYm9keUFdLCBzdGF0ZS5ib2RpZXNbYm9keUJdLCB7CiAgICAgIGRhbXBpbmcsCiAgICAgIGxvY2FsQW5jaG9yQTogdHJpcGxldFRvVmVjMyhsb2NhbEFuY2hvckEpLAogICAgICBsb2NhbEFuY2hvckI6IHRyaXBsZXRUb1ZlYzMobG9jYWxBbmNob3JCKSwKICAgICAgcmVzdExlbmd0aCwKICAgICAgc3RpZmZuZXNzLAogICAgICB3b3JsZEFuY2hvckE6IHRyaXBsZXRUb1ZlYzMod29ybGRBbmNob3JBKSwKICAgICAgd29ybGRBbmNob3JCOiB0cmlwbGV0VG9WZWMzKHdvcmxkQW5jaG9yQikKICAgIH0pOwogICAgc3ByaW5nLnV1aWQgPSB1dWlkOwoKICAgIGNvbnN0IHBvc3RTdGVwU3ByaW5nID0gKCkgPT4gc3ByaW5nLmFwcGx5Rm9yY2UoKTsKCiAgICBzdGF0ZS5zcHJpbmdzW3V1aWRdID0gcG9zdFN0ZXBTcHJpbmc7CiAgICBzdGF0ZS5zcHJpbmdJbnN0YW5jZXNbdXVpZF0gPSBzcHJpbmc7IC8vIENvbXB1dGUgdGhlIGZvcmNlIGFmdGVyIGVhY2ggc3RlcAoKICAgIHN0YXRlLndvcmxkLmFkZEV2ZW50TGlzdGVuZXIoJ3Bvc3RTdGVwJywgc3RhdGUuc3ByaW5nc1t1dWlkXSk7CiAgfTsKCiAgZnVuY3Rpb24gZW1pdEJlZ2luQ29udGFjdChfcmVmKSB7CiAgICBsZXQgewogICAgICBib2R5QSwKICAgICAgYm9keUIKICAgIH0gPSBfcmVmOwogICAgaWYgKCFib2R5QSB8fCAhYm9keUIpIHJldHVybjsKICAgIHNlbGYucG9zdE1lc3NhZ2UoewogICAgICBib2R5QTogYm9keUEudXVpZCwKICAgICAgYm9keUI6IGJvZHlCLnV1aWQsCiAgICAgIG9wOiAnZXZlbnQnLAogICAgICB0eXBlOiAnY29sbGlkZUJlZ2luJwogICAgfSk7CiAgfQoKICBmdW5jdGlvbiBlbWl0RW5kQ29udGFjdChfcmVmMikgewogICAgbGV0IHsKICAgICAgYm9keUEsCiAgICAgIGJvZHlCCiAgICB9ID0gX3JlZjI7CiAgICBpZiAoIWJvZHlBIHx8ICFib2R5QikgcmV0dXJuOwogICAgc2VsZi5wb3N0TWVzc2FnZSh7CiAgICAgIGJvZHlBOiBib2R5QS51dWlkLAogICAgICBib2R5QjogYm9keUIudXVpZCwKICAgICAgb3A6ICdldmVudCcsCiAgICAgIHR5cGU6ICdjb2xsaWRlRW5kJwogICAgfSk7CiAgfQoKICBjb25zdCBpbml0ID0gKHN0YXRlLCBfcmVmMykgPT4gewogICAgbGV0IHsKICAgICAgYWxsb3dTbGVlcCwKICAgICAgYXhpc0luZGV4ID0gMCwKICAgICAgYnJvYWRwaGFzZSwKICAgICAgZGVmYXVsdENvbnRhY3RNYXRlcmlhbCwKICAgICAgZ3Jhdml0eSwKICAgICAgaXRlcmF0aW9ucywKICAgICAgcXVhdE5vcm1hbGl6ZUZhc3QsCiAgICAgIHF1YXROb3JtYWxpemVTa2lwLAogICAgICBzb2x2ZXIsCiAgICAgIHRvbGVyYW5jZQogICAgfSA9IF9yZWYzOwogICAgc3RhdGUud29ybGQuYWxsb3dTbGVlcCA9IGFsbG93U2xlZXA7CiAgICBzdGF0ZS53b3JsZC5ncmF2aXR5LnNldChncmF2aXR5WzBdLCBncmF2aXR5WzFdLCBncmF2aXR5WzJdKTsKICAgIHN0YXRlLndvcmxkLnF1YXROb3JtYWxpemVGYXN0ID0gcXVhdE5vcm1hbGl6ZUZhc3Q7CiAgICBzdGF0ZS53b3JsZC5xdWF0Tm9ybWFsaXplU2tpcCA9IHF1YXROb3JtYWxpemVTa2lwOwoKICAgIGlmIChzb2x2ZXIgPT09ICdTcGxpdCcpIHsKICAgICAgc3RhdGUud29ybGQuc29sdmVyID0gbmV3IFNwbGl0U29sdmVyKG5ldyBHU1NvbHZlcigpKTsKICAgIH0KCiAgICBpZiAoc3RhdGUud29ybGQuc29sdmVyIGluc3RhbmNlb2YgR1NTb2x2ZXIpIHsKICAgICAgc3RhdGUud29ybGQuc29sdmVyLnRvbGVyYW5jZSA9IHRvbGVyYW5jZTsKICAgICAgc3RhdGUud29ybGQuc29sdmVyLml0ZXJhdGlvbnMgPSBpdGVyYXRpb25zOwogICAgfQoKICAgIHN0YXRlLndvcmxkLmJyb2FkcGhhc2UgPSBicm9hZHBoYXNlID09PSAnU0FQJyA/IG5ldyBTQVBCcm9hZHBoYXNlKHN0YXRlLndvcmxkKSA6IG5ldyBOYWl2ZUJyb2FkcGhhc2UoKTsKCiAgICBpZiAoc3RhdGUud29ybGQuYnJvYWRwaGFzZSBpbnN0YW5jZW9mIFNBUEJyb2FkcGhhc2UpIHsKICAgICAgc3RhdGUud29ybGQuYnJvYWRwaGFzZS5heGlzSW5kZXggPSBheGlzSW5kZXg7CiAgICB9CgogICAgc3RhdGUud29ybGQuYWRkRXZlbnRMaXN0ZW5lcignYmVnaW5Db250YWN0JywgZW1pdEJlZ2luQ29udGFjdCk7CiAgICBzdGF0ZS53b3JsZC5hZGRFdmVudExpc3RlbmVyKCdlbmRDb250YWN0JywgZW1pdEVuZENvbnRhY3QpOwogICAgT2JqZWN0LmFzc2lnbihzdGF0ZS53b3JsZC5kZWZhdWx0Q29udGFjdE1hdGVyaWFsLCBkZWZhdWx0Q29udGFjdE1hdGVyaWFsKTsKICB9OwoKICBjb25zdCBpc1FvclYgPSB2ID0+IHYgaW5zdGFuY2VvZiBRdWF0ZXJuaW9uIHx8IHYgaW5zdGFuY2VvZiBWZWMzOwoKICBjb25zdCBzdGVwID0gKHN0YXRlLCBfcmVmKSA9PiB7CiAgICBsZXQgewogICAgICBwb3NpdGlvbnMsCiAgICAgIHByb3BzOiB7CiAgICAgICAgbWF4U3ViU3RlcHMsCiAgICAgICAgc3RlcFNpemUsCiAgICAgICAgdGltZVNpbmNlTGFzdENhbGxlZAogICAgICB9LAogICAgICBxdWF0ZXJuaW9ucwogICAgfSA9IF9yZWY7CiAgICBzdGF0ZS53b3JsZC5zdGVwKHN0ZXBTaXplLCB0aW1lU2luY2VMYXN0Q2FsbGVkLCBtYXhTdWJTdGVwcyk7CgogICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS53b3JsZC5ib2RpZXMubGVuZ3RoOyBpICs9IDEpIHsKICAgICAgY29uc3QgcCA9IHN0YXRlLndvcmxkLmJvZGllc1tpXS5wb3NpdGlvbjsKICAgICAgY29uc3QgcSA9IHN0YXRlLndvcmxkLmJvZGllc1tpXS5xdWF0ZXJuaW9uOwogICAgICBwb3NpdGlvbnNbMyAqIGkgKyAwXSA9IHAueDsKICAgICAgcG9zaXRpb25zWzMgKiBpICsgMV0gPSBwLnk7CiAgICAgIHBvc2l0aW9uc1szICogaSArIDJdID0gcC56OwogICAgICBxdWF0ZXJuaW9uc1s0ICogaSArIDBdID0gcS54OwogICAgICBxdWF0ZXJuaW9uc1s0ICogaSArIDFdID0gcS55OwogICAgICBxdWF0ZXJuaW9uc1s0ICogaSArIDJdID0gcS56OwogICAgICBxdWF0ZXJuaW9uc1s0ICogaSArIDNdID0gcS53OwogICAgfQoKICAgIGNvbnN0IG9ic2VydmF0aW9ucyA9IFtdOwoKICAgIGZvciAoY29uc3QgaWQgb2YgT2JqZWN0LmtleXMoc3RhdGUuc3Vic2NyaXB0aW9ucykpIHsKICAgICAgY29uc3QgW3V1aWQsIHR5cGUsIHRhcmdldCA9ICdib2RpZXMnXSA9IHN0YXRlLnN1YnNjcmlwdGlvbnNbaWRdOwogICAgICBjb25zdCB7CiAgICAgICAgYm9kaWVzLAogICAgICAgIHZlaGljbGVzCiAgICAgIH0gPSBzdGF0ZTsKICAgICAgY29uc3QgdmFsdWUgPSB0YXJnZXQgPT09ICd2ZWhpY2xlcycgPyAvLyBAdHMtZXhwZWN0LWVycm9yIFRPRE86IERpZmZlcmVudGlhdGUgdGhlc2UgInR5cGVzIgogICAgICB2ZWhpY2xlc1t1dWlkXS52ZWhpY2xlW3R5cGVdIDogLy8gQHRzLWV4cGVjdC1lcnJvciBUT0RPOiBEaWZmZXJlbnRpYXRlIHRoZXNlICJ0eXBlcyIKICAgICAgYm9kaWVzW3V1aWRdW3R5cGVdOwogICAgICBjb25zdCBzZXJpYWxpemFibGVWYWx1ZSA9IGlzUW9yVih2YWx1ZSkgPyB2YWx1ZS50b0FycmF5KCkgOiB2YWx1ZTsKICAgICAgb2JzZXJ2YXRpb25zLnB1c2goW051bWJlcihpZCksIHNlcmlhbGl6YWJsZVZhbHVlLCAvLyBAdHMtZXhwZWN0LWVycm9yIFRPRE86IERpZmZlcmVudGlhdGUgdGhlc2UgInR5cGVzIgogICAgICB0eXBlXSk7CiAgICB9CgogICAgY29uc3QgbWVzc2FnZSA9IHsKICAgICAgYWN0aXZlOiBzdGF0ZS53b3JsZC5oYXNBY3RpdmVCb2RpZXMsCiAgICAgIG9ic2VydmF0aW9ucywKICAgICAgb3A6ICdmcmFtZScsCiAgICAgIHBvc2l0aW9ucywKICAgICAgcXVhdGVybmlvbnMKICAgIH07CgogICAgaWYgKHN0YXRlLmJvZGllc05lZWRTeW5jaW5nKSB7CiAgICAgIG1lc3NhZ2UuYm9kaWVzID0gc3RhdGUud29ybGQuYm9kaWVzLnJlZHVjZSgoYm9kaWVzLCBib2R5KSA9PiB7CiAgICAgICAgaWYgKGJvZHkudXVpZCkgYm9kaWVzLnB1c2goYm9keS51dWlkKTsKICAgICAgICByZXR1cm4gYm9kaWVzOwogICAgICB9LCBbXSk7CiAgICAgIHN0YXRlLmJvZGllc05lZWRTeW5jaW5nID0gZmFsc2U7CiAgICB9CgogICAgc2VsZi5wb3N0TWVzc2FnZShtZXNzYWdlLCBbcG9zaXRpb25zLmJ1ZmZlciwgcXVhdGVybmlvbnMuYnVmZmVyXSk7CiAgfTsKCiAgY29uc3Qgc3RhdGUgPSB7CiAgICBib2RpZXM6IHt9LAogICAgYm9kaWVzTmVlZFN5bmNpbmc6IGZhbHNlLAogICAgY29uc3RyYWludHM6IHt9LAogICAgbWF0ZXJpYWxzOiB7fSwKICAgIHJheXM6IHt9LAogICAgc3ByaW5nSW5zdGFuY2VzOiB7fSwKICAgIHNwcmluZ3M6IHt9LAogICAgc3Vic2NyaXB0aW9uczoge30sCiAgICB2ZWhpY2xlczoge30sCiAgICB3b3JsZDogbmV3IFdvcmxkKCkKICB9OwoKICAvLy8gPHJlZmVyZW5jZSBuby1kZWZhdWx0LWxpYj0idHJ1ZSIvPgoKICBjb25zdCBpc0hpbmdlQ29uc3RyYWludCA9IGMgPT4gYyBpbnN0YW5jZW9mIEhpbmdlQ29uc3RyYWludDsKCiAgZnVuY3Rpb24gc3luY0JvZGllcygpIHsKICAgIHN0YXRlLmJvZGllc05lZWRTeW5jaW5nID0gdHJ1ZTsKICAgIHN0YXRlLmJvZGllcyA9IHN0YXRlLndvcmxkLmJvZGllcy5yZWR1Y2UoKGJvZGllcywgYm9keSkgPT4gKHsgLi4uYm9kaWVzLAogICAgICBbYm9keS51dWlkXTogYm9keQogICAgfSksIHt9KTsKICB9CgogIGNvbnN0IGJyb2FkcGhhc2VzID0gewogICAgTmFpdmVCcm9hZHBoYXNlLAogICAgU0FQQnJvYWRwaGFzZQogIH07CiAgY29uc3QgY3JlYXRlTWF0ZXJpYWwgPSBjcmVhdGVNYXRlcmlhbEZhY3Rvcnkoc3RhdGUubWF0ZXJpYWxzKTsKCiAgc2VsZi5vbm1lc3NhZ2UgPSBfcmVmID0+IHsKICAgIGxldCB7CiAgICAgIGRhdGEKICAgIH0gPSBfcmVmOwoKICAgIHN3aXRjaCAoZGF0YS5vcCkgewogICAgICBjYXNlICdpbml0JzoKICAgICAgICB7CiAgICAgICAgICBpbml0KHN0YXRlLCBkYXRhLnByb3BzKTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIH0KCiAgICAgIGNhc2UgJ3N0ZXAnOgogICAgICAgIHsKICAgICAgICAgIHN0ZXAoc3RhdGUsIGRhdGEpOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgfQoKICAgICAgY2FzZSAnYWRkQm9kaWVzJzoKICAgICAgICB7CiAgICAgICAgICBhZGRCb2RpZXMoc3RhdGUsIGNyZWF0ZU1hdGVyaWFsLCBkYXRhKTsKICAgICAgICAgIHN5bmNCb2RpZXMoKTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIH0KCiAgICAgIGNhc2UgJ3JlbW92ZUJvZGllcyc6CiAgICAgICAgewogICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLnV1aWQubGVuZ3RoOyBpKyspIHN0YXRlLndvcmxkLnJlbW92ZUJvZHkoc3RhdGUuYm9kaWVzW2RhdGEudXVpZFtpXV0pOwoKICAgICAgICAgIHN5bmNCb2RpZXMoKTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIH0KCiAgICAgIGNhc2UgJ3N1YnNjcmliZSc6CiAgICAgICAgewogICAgICAgICAgY29uc3QgewogICAgICAgICAgICBpZCwKICAgICAgICAgICAgdGFyZ2V0LAogICAgICAgICAgICB0eXBlCiAgICAgICAgICB9ID0gZGF0YS5wcm9wczsKICAgICAgICAgIHN0YXRlLnN1YnNjcmlwdGlvbnNbaWRdID0gW2RhdGEudXVpZCwgdHlwZSwgdGFyZ2V0XTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIH0KCiAgICAgIGNhc2UgJ3Vuc3Vic2NyaWJlJzoKICAgICAgICB7CiAgICAgICAgICBkZWxldGUgc3RhdGUuc3Vic2NyaXB0aW9uc1tkYXRhLnByb3BzXTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIH0KCiAgICAgIGNhc2UgJ3NldFBvc2l0aW9uJzoKICAgICAgICBzdGF0ZS5ib2RpZXNbZGF0YS51dWlkXS5wb3NpdGlvbi5zZXQoZGF0YS5wcm9wc1swXSwgZGF0YS5wcm9wc1sxXSwgZGF0YS5wcm9wc1syXSk7CiAgICAgICAgYnJlYWs7CgogICAgICBjYXNlICdzZXRRdWF0ZXJuaW9uJzoKICAgICAgICBzdGF0ZS5ib2RpZXNbZGF0YS51dWlkXS5xdWF0ZXJuaW9uLnNldChkYXRhLnByb3BzWzBdLCBkYXRhLnByb3BzWzFdLCBkYXRhLnByb3BzWzJdLCBkYXRhLnByb3BzWzNdKTsKICAgICAgICBicmVhazsKCiAgICAgIGNhc2UgJ3NldFJvdGF0aW9uJzoKICAgICAgICBzdGF0ZS5ib2RpZXNbZGF0YS51dWlkXS5xdWF0ZXJuaW9uLnNldEZyb21FdWxlcihkYXRhLnByb3BzWzBdLCBkYXRhLnByb3BzWzFdLCBkYXRhLnByb3BzWzJdKTsKICAgICAgICBicmVhazsKCiAgICAgIGNhc2UgJ3NldFZlbG9jaXR5JzoKICAgICAgICBzdGF0ZS5ib2RpZXNbZGF0YS51dWlkXS52ZWxvY2l0eS5zZXQoZGF0YS5wcm9wc1swXSwgZGF0YS5wcm9wc1sxXSwgZGF0YS5wcm9wc1syXSk7CiAgICAgICAgYnJlYWs7CgogICAgICBjYXNlICdzZXRBbmd1bGFyVmVsb2NpdHknOgogICAgICAgIHN0YXRlLmJvZGllc1tkYXRhLnV1aWRdLmFuZ3VsYXJWZWxvY2l0eS5zZXQoZGF0YS5wcm9wc1swXSwgZGF0YS5wcm9wc1sxXSwgZGF0YS5wcm9wc1syXSk7CiAgICAgICAgYnJlYWs7CgogICAgICBjYXNlICdzZXRMaW5lYXJGYWN0b3InOgogICAgICAgIHN0YXRlLmJvZGllc1tkYXRhLnV1aWRdLmxpbmVhckZhY3Rvci5zZXQoZGF0YS5wcm9wc1swXSwgZGF0YS5wcm9wc1sxXSwgZGF0YS5wcm9wc1syXSk7CiAgICAgICAgYnJlYWs7CgogICAgICBjYXNlICdzZXRBbmd1bGFyRmFjdG9yJzoKICAgICAgICBzdGF0ZS5ib2RpZXNbZGF0YS51dWlkXS5hbmd1bGFyRmFjdG9yLnNldChkYXRhLnByb3BzWzBdLCBkYXRhLnByb3BzWzFdLCBkYXRhLnByb3BzWzJdKTsKICAgICAgICBicmVhazsKCiAgICAgIGNhc2UgJ3NldE1hc3MnOgogICAgICAgIHN0YXRlLmJvZGllc1tkYXRhLnV1aWRdLm1hc3MgPSBkYXRhLnByb3BzOwogICAgICAgIHN0YXRlLmJvZGllc1tkYXRhLnV1aWRdLnVwZGF0ZU1hc3NQcm9wZXJ0aWVzKCk7CiAgICAgICAgYnJlYWs7CgogICAgICBjYXNlICdzZXRNYXRlcmlhbCc6CiAgICAgICAgc3RhdGUuYm9kaWVzW2RhdGEudXVpZF0ubWF0ZXJpYWwgPSBkYXRhLnByb3BzID8gY3JlYXRlTWF0ZXJpYWwoZGF0YS5wcm9wcykgOiBudWxsOwogICAgICAgIGJyZWFrOwoKICAgICAgY2FzZSAnc2V0TGluZWFyRGFtcGluZyc6CiAgICAgICAgc3RhdGUuYm9kaWVzW2RhdGEudXVpZF0ubGluZWFyRGFtcGluZyA9IGRhdGEucHJvcHM7CiAgICAgICAgYnJlYWs7CgogICAgICBjYXNlICdzZXRBbmd1bGFyRGFtcGluZyc6CiAgICAgICAgc3RhdGUuYm9kaWVzW2RhdGEudXVpZF0uYW5ndWxhckRhbXBpbmcgPSBkYXRhLnByb3BzOwogICAgICAgIGJyZWFrOwoKICAgICAgY2FzZSAnc2V0QWxsb3dTbGVlcCc6CiAgICAgICAgc3RhdGUuYm9kaWVzW2RhdGEudXVpZF0uYWxsb3dTbGVlcCA9IGRhdGEucHJvcHM7CiAgICAgICAgYnJlYWs7CgogICAgICBjYXNlICdzZXRTbGVlcFNwZWVkTGltaXQnOgogICAgICAgIHN0YXRlLmJvZGllc1tkYXRhLnV1aWRdLnNsZWVwU3BlZWRMaW1pdCA9IGRhdGEucHJvcHM7CiAgICAgICAgYnJlYWs7CgogICAgICBjYXNlICdzZXRTbGVlcFRpbWVMaW1pdCc6CiAgICAgICAgc3RhdGUuYm9kaWVzW2RhdGEudXVpZF0uc2xlZXBUaW1lTGltaXQgPSBkYXRhLnByb3BzOwogICAgICAgIGJyZWFrOwoKICAgICAgY2FzZSAnc2V0Q29sbGlzaW9uRmlsdGVyR3JvdXAnOgogICAgICAgIHN0YXRlLmJvZGllc1tkYXRhLnV1aWRdLmNvbGxpc2lvbkZpbHRlckdyb3VwID0gZGF0YS5wcm9wczsKICAgICAgICBicmVhazsKCiAgICAgIGNhc2UgJ3NldENvbGxpc2lvbkZpbHRlck1hc2snOgogICAgICAgIHN0YXRlLmJvZGllc1tkYXRhLnV1aWRdLmNvbGxpc2lvbkZpbHRlck1hc2sgPSBkYXRhLnByb3BzOwogICAgICAgIGJyZWFrOwoKICAgICAgY2FzZSAnc2V0Q29sbGlzaW9uUmVzcG9uc2UnOgogICAgICAgIHN0YXRlLmJvZGllc1tkYXRhLnV1aWRdLmNvbGxpc2lvblJlc3BvbnNlID0gZGF0YS5wcm9wczsKICAgICAgICBicmVhazsKCiAgICAgIGNhc2UgJ3NldEZpeGVkUm90YXRpb24nOgogICAgICAgIHN0YXRlLmJvZGllc1tkYXRhLnV1aWRdLmZpeGVkUm90YXRpb24gPSBkYXRhLnByb3BzOwogICAgICAgIGJyZWFrOwoKICAgICAgY2FzZSAnc2V0SXNUcmlnZ2VyJzoKICAgICAgICBzdGF0ZS5ib2RpZXNbZGF0YS51dWlkXS5pc1RyaWdnZXIgPSBkYXRhLnByb3BzOwogICAgICAgIGJyZWFrOwoKICAgICAgY2FzZSAnc2V0R3Jhdml0eSc6CiAgICAgICAgc3RhdGUud29ybGQuZ3Jhdml0eS5zZXQoZGF0YS5wcm9wc1swXSwgZGF0YS5wcm9wc1sxXSwgZGF0YS5wcm9wc1syXSk7CiAgICAgICAgYnJlYWs7CgogICAgICBjYXNlICdzZXRUb2xlcmFuY2UnOgogICAgICAgIGlmIChzdGF0ZS53b3JsZC5zb2x2ZXIgaW5zdGFuY2VvZiBHU1NvbHZlcikgewogICAgICAgICAgc3RhdGUud29ybGQuc29sdmVyLnRvbGVyYW5jZSA9IGRhdGEucHJvcHM7CiAgICAgICAgfQoKICAgICAgICBicmVhazsKCiAgICAgIGNhc2UgJ3NldEl0ZXJhdGlvbnMnOgogICAgICAgIGlmIChzdGF0ZS53b3JsZC5zb2x2ZXIgaW5zdGFuY2VvZiBHU1NvbHZlcikgewogICAgICAgICAgc3RhdGUud29ybGQuc29sdmVyLml0ZXJhdGlvbnMgPSBkYXRhLnByb3BzOwogICAgICAgIH0KCiAgICAgICAgYnJlYWs7CgogICAgICBjYXNlICdzZXRCcm9hZHBoYXNlJzoKICAgICAgICBzdGF0ZS53b3JsZC5icm9hZHBoYXNlID0gbmV3IChicm9hZHBoYXNlc1tgJHtkYXRhLnByb3BzfUJyb2FkcGhhc2VgXSB8fCBOYWl2ZUJyb2FkcGhhc2UpKHN0YXRlLndvcmxkKTsKICAgICAgICBicmVhazsKCiAgICAgIGNhc2UgJ3NldEF4aXNJbmRleCc6CiAgICAgICAgaWYgKHN0YXRlLndvcmxkLmJyb2FkcGhhc2UgaW5zdGFuY2VvZiBTQVBCcm9hZHBoYXNlKSB7CiAgICAgICAgICBzdGF0ZS53b3JsZC5icm9hZHBoYXNlLmF4aXNJbmRleCA9IGRhdGEucHJvcHMgPT09IHVuZGVmaW5lZCB8fCBkYXRhLnByb3BzID09PSBudWxsID8gMCA6IGRhdGEucHJvcHM7CiAgICAgICAgfQoKICAgICAgICBicmVhazsKCiAgICAgIGNhc2UgJ2FwcGx5Rm9yY2UnOgogICAgICAgIHN0YXRlLmJvZGllc1tkYXRhLnV1aWRdLmFwcGx5Rm9yY2UobmV3IFZlYzMoLi4uZGF0YS5wcm9wc1swXSksIG5ldyBWZWMzKC4uLmRhdGEucHJvcHNbMV0pKTsKICAgICAgICBicmVhazsKCiAgICAgIGNhc2UgJ2FwcGx5SW1wdWxzZSc6CiAgICAgICAgc3RhdGUuYm9kaWVzW2RhdGEudXVpZF0uYXBwbHlJbXB1bHNlKG5ldyBWZWMzKC4uLmRhdGEucHJvcHNbMF0pLCBuZXcgVmVjMyguLi5kYXRhLnByb3BzWzFdKSk7CiAgICAgICAgYnJlYWs7CgogICAgICBjYXNlICdhcHBseUxvY2FsRm9yY2UnOgogICAgICAgIHN0YXRlLmJvZGllc1tkYXRhLnV1aWRdLmFwcGx5TG9jYWxGb3JjZShuZXcgVmVjMyguLi5kYXRhLnByb3BzWzBdKSwgbmV3IFZlYzMoLi4uZGF0YS5wcm9wc1sxXSkpOwogICAgICAgIGJyZWFrOwoKICAgICAgY2FzZSAnYXBwbHlMb2NhbEltcHVsc2UnOgogICAgICAgIHN0YXRlLmJvZGllc1tkYXRhLnV1aWRdLmFwcGx5TG9jYWxJbXB1bHNlKG5ldyBWZWMzKC4uLmRhdGEucHJvcHNbMF0pLCBuZXcgVmVjMyguLi5kYXRhLnByb3BzWzFdKSk7CiAgICAgICAgYnJlYWs7CgogICAgICBjYXNlICdhcHBseVRvcnF1ZSc6CiAgICAgICAgc3RhdGUuYm9kaWVzW2RhdGEudXVpZF0uYXBwbHlUb3JxdWUobmV3IFZlYzMoLi4uZGF0YS5wcm9wc1swXSkpOwogICAgICAgIGJyZWFrOwoKICAgICAgY2FzZSAnYWRkQ29uc3RyYWludCc6CiAgICAgICAgewogICAgICAgICAgYWRkQ29uc3RyYWludChzdGF0ZSwgZGF0YSk7CiAgICAgICAgICBicmVhazsKICAgICAgICB9CgogICAgICBjYXNlICdyZW1vdmVDb25zdHJhaW50JzoKICAgICAgICBzdGF0ZS53b3JsZC5jb25zdHJhaW50cy5maWx0ZXIoX3JlZjIgPT4gewogICAgICAgICAgbGV0IHsKICAgICAgICAgICAgdXVpZAogICAgICAgICAgfSA9IF9yZWYyOwogICAgICAgICAgcmV0dXJuIHV1aWQgPT09IGRhdGEudXVpZDsKICAgICAgICB9KS5tYXAoYyA9PiBzdGF0ZS53b3JsZC5yZW1vdmVDb25zdHJhaW50KGMpKTsKCiAgICAgICAgaWYgKHN0YXRlLmNvbnN0cmFpbnRzW2RhdGEudXVpZF0pIHsKICAgICAgICAgIHN0YXRlLndvcmxkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Bvc3RTdGVwJywgc3RhdGUuY29uc3RyYWludHNbZGF0YS51dWlkXSk7CiAgICAgICAgICBkZWxldGUgc3RhdGUuY29uc3RyYWludHNbZGF0YS51dWlkXTsKICAgICAgICB9CgogICAgICAgIGJyZWFrOwoKICAgICAgY2FzZSAnZW5hYmxlQ29uc3RyYWludCc6CiAgICAgICAgc3RhdGUud29ybGQuY29uc3RyYWludHMuZmlsdGVyKGMgPT4gYy51dWlkID09PSBkYXRhLnV1aWQpLm1hcChjID0+IGMuZW5hYmxlKCkpOwogICAgICAgIGJyZWFrOwoKICAgICAgY2FzZSAnZGlzYWJsZUNvbnN0cmFpbnQnOgogICAgICAgIHN0YXRlLndvcmxkLmNvbnN0cmFpbnRzLmZpbHRlcihjID0+IGMudXVpZCA9PT0gZGF0YS51dWlkKS5tYXAoYyA9PiBjLmRpc2FibGUoKSk7CiAgICAgICAgYnJlYWs7CgogICAgICBjYXNlICdlbmFibGVDb25zdHJhaW50TW90b3InOgogICAgICAgIHN0YXRlLndvcmxkLmNvbnN0cmFpbnRzLmZpbHRlcihjID0+IGMudXVpZCA9PT0gZGF0YS51dWlkKS5maWx0ZXIoaXNIaW5nZUNvbnN0cmFpbnQpLm1hcChjID0+IGMuZW5hYmxlTW90b3IoKSk7CiAgICAgICAgYnJlYWs7CgogICAgICBjYXNlICdkaXNhYmxlQ29uc3RyYWludE1vdG9yJzoKICAgICAgICBzdGF0ZS53b3JsZC5jb25zdHJhaW50cy5maWx0ZXIoYyA9PiBjLnV1aWQgPT09IGRhdGEudXVpZCkuZmlsdGVyKGlzSGluZ2VDb25zdHJhaW50KS5tYXAoYyA9PiBjLmRpc2FibGVNb3RvcigpKTsKICAgICAgICBicmVhazsKCiAgICAgIGNhc2UgJ3NldENvbnN0cmFpbnRNb3RvclNwZWVkJzoKICAgICAgICBzdGF0ZS53b3JsZC5jb25zdHJhaW50cy5maWx0ZXIoYyA9PiBjLnV1aWQgPT09IGRhdGEudXVpZCkuZmlsdGVyKGlzSGluZ2VDb25zdHJhaW50KS5tYXAoYyA9PiBjLnNldE1vdG9yU3BlZWQoZGF0YS5wcm9wcykpOwogICAgICAgIGJyZWFrOwoKICAgICAgY2FzZSAnc2V0Q29uc3RyYWludE1vdG9yTWF4Rm9yY2UnOgogICAgICAgIHN0YXRlLndvcmxkLmNvbnN0cmFpbnRzLmZpbHRlcihjID0+IGMudXVpZCA9PT0gZGF0YS51dWlkKS5maWx0ZXIoaXNIaW5nZUNvbnN0cmFpbnQpLm1hcChjID0+IGMuc2V0TW90b3JNYXhGb3JjZShkYXRhLnByb3BzKSk7CiAgICAgICAgYnJlYWs7CgogICAgICBjYXNlICdhZGRTcHJpbmcnOgogICAgICAgIHsKICAgICAgICAgIGFkZFNwcmluZyhzdGF0ZSwgZGF0YSk7CiAgICAgICAgICBicmVhazsKICAgICAgICB9CgogICAgICBjYXNlICdzZXRTcHJpbmdTdGlmZm5lc3MnOgogICAgICAgIHsKICAgICAgICAgIHN0YXRlLnNwcmluZ0luc3RhbmNlc1tkYXRhLnV1aWRdLnN0aWZmbmVzcyA9IGRhdGEucHJvcHM7CiAgICAgICAgICBicmVhazsKICAgICAgICB9CgogICAgICBjYXNlICdzZXRTcHJpbmdSZXN0TGVuZ3RoJzoKICAgICAgICB7CiAgICAgICAgICBzdGF0ZS5zcHJpbmdJbnN0YW5jZXNbZGF0YS51dWlkXS5yZXN0TGVuZ3RoID0gZGF0YS5wcm9wczsKICAgICAgICAgIGJyZWFrOwogICAgICAgIH0KCiAgICAgIGNhc2UgJ3NldFNwcmluZ0RhbXBpbmcnOgogICAgICAgIHsKICAgICAgICAgIHN0YXRlLnNwcmluZ0luc3RhbmNlc1tkYXRhLnV1aWRdLmRhbXBpbmcgPSBkYXRhLnByb3BzOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgfQoKICAgICAgY2FzZSAncmVtb3ZlU3ByaW5nJzoKICAgICAgICB7CiAgICAgICAgICBzdGF0ZS53b3JsZC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3N0U3RlcCcsIHN0YXRlLnNwcmluZ3NbZGF0YS51dWlkXSk7CiAgICAgICAgICBicmVhazsKICAgICAgICB9CgogICAgICBjYXNlICdhZGRSYXknOgogICAgICAgIHsKICAgICAgICAgIGFkZFJheShzdGF0ZSwgZGF0YSk7CiAgICAgICAgICBicmVhazsKICAgICAgICB9CgogICAgICBjYXNlICdyZW1vdmVSYXknOgogICAgICAgIHsKICAgICAgICAgIHN0YXRlLndvcmxkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3ByZVN0ZXAnLCBzdGF0ZS5yYXlzW2RhdGEudXVpZF0pOwogICAgICAgICAgZGVsZXRlIHN0YXRlLnJheXNbZGF0YS51dWlkXTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIH0KCiAgICAgIGNhc2UgJ2FkZFJheWNhc3RWZWhpY2xlJzoKICAgICAgICB7CiAgICAgICAgICBhZGRSYXljYXN0VmVoaWNsZShzdGF0ZSwgZGF0YSk7CiAgICAgICAgICBicmVhazsKICAgICAgICB9CgogICAgICBjYXNlICdyZW1vdmVSYXljYXN0VmVoaWNsZSc6CiAgICAgICAgewogICAgICAgICAgc3RhdGUud29ybGQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncHJlU3RlcCcsIHN0YXRlLnZlaGljbGVzW2RhdGEudXVpZF0ucHJlU3RlcCk7CiAgICAgICAgICBzdGF0ZS53b3JsZC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3N0U3RlcCcsIHN0YXRlLnZlaGljbGVzW2RhdGEudXVpZF0ucG9zdFN0ZXApOwogICAgICAgICAgc3RhdGUudmVoaWNsZXNbZGF0YS51dWlkXS52ZWhpY2xlLndvcmxkID0gbnVsbDsKICAgICAgICAgIGRlbGV0ZSBzdGF0ZS52ZWhpY2xlc1tkYXRhLnV1aWRdOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgfQoKICAgICAgY2FzZSAnc2V0UmF5Y2FzdFZlaGljbGVTdGVlcmluZ1ZhbHVlJzoKICAgICAgICB7CiAgICAgICAgICBjb25zdCBbdmFsdWUsIHdoZWVsSW5kZXhdID0gZGF0YS5wcm9wczsKICAgICAgICAgIHN0YXRlLnZlaGljbGVzW2RhdGEudXVpZF0udmVoaWNsZS5zZXRTdGVlcmluZ1ZhbHVlKHZhbHVlLCB3aGVlbEluZGV4KTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIH0KCiAgICAgIGNhc2UgJ2FwcGx5UmF5Y2FzdFZlaGljbGVFbmdpbmVGb3JjZSc6CiAgICAgICAgewogICAgICAgICAgY29uc3QgW3ZhbHVlLCB3aGVlbEluZGV4XSA9IGRhdGEucHJvcHM7CiAgICAgICAgICBzdGF0ZS52ZWhpY2xlc1tkYXRhLnV1aWRdLnZlaGljbGUuYXBwbHlFbmdpbmVGb3JjZSh2YWx1ZSwgd2hlZWxJbmRleCk7CiAgICAgICAgICBicmVhazsKICAgICAgICB9CgogICAgICBjYXNlICdzZXRSYXljYXN0VmVoaWNsZUJyYWtlJzoKICAgICAgICB7CiAgICAgICAgICBjb25zdCBbYnJha2UsIHdoZWVsSW5kZXhdID0gZGF0YS5wcm9wczsKICAgICAgICAgIHN0YXRlLnZlaGljbGVzW2RhdGEudXVpZF0udmVoaWNsZS5zZXRCcmFrZShicmFrZSwgd2hlZWxJbmRleCk7CiAgICAgICAgICBicmVhazsKICAgICAgICB9CgogICAgICBjYXNlICdhZGRDb250YWN0TWF0ZXJpYWwnOgogICAgICAgIHsKICAgICAgICAgIGFkZENvbnRhY3RNYXRlcmlhbChzdGF0ZS53b3JsZCwgY3JlYXRlTWF0ZXJpYWwsIGRhdGEucHJvcHMsIGRhdGEudXVpZCk7CiAgICAgICAgICBicmVhazsKICAgICAgICB9CgogICAgICBjYXNlICdyZW1vdmVDb250YWN0TWF0ZXJpYWwnOgogICAgICAgIHsKICAgICAgICAgIHJlbW92ZUNvbnRhY3RNYXRlcmlhbChzdGF0ZS53b3JsZCwgZGF0YS51dWlkKTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIH0KCiAgICAgIGNhc2UgJ3dha2VVcCc6CiAgICAgICAgewogICAgICAgICAgc3RhdGUuYm9kaWVzW2RhdGEudXVpZF0ud2FrZVVwKCk7CiAgICAgICAgICBicmVhazsKICAgICAgICB9CgogICAgICBjYXNlICdzbGVlcCc6CiAgICAgICAgewogICAgICAgICAgc3RhdGUuYm9kaWVzW2RhdGEudXVpZF0uc2xlZXAoKTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIH0KICAgIH0KICB9OwoKfSkoKTsKCg==",
        null,
        !1
      );
      class R extends u {
        get axisIndex() {
          return this.config.axisIndex;
        }
        set axisIndex(g) {
          (this.config.axisIndex = g),
            this.worker.postMessage({ op: "setAxisIndex", props: g });
        }
        get broadphase() {
          return this.config.broadphase;
        }
        set broadphase(g) {
          (this.config.broadphase = g),
            this.worker.postMessage({ op: "setBroadphase", props: g });
        }
        get gravity() {
          return this.config.gravity;
        }
        set gravity(g) {
          (this.config.gravity = g),
            this.worker.postMessage({ op: "setGravity", props: g });
        }
        get iterations() {
          return this.config.iterations;
        }
        set iterations(g) {
          (this.config.iterations = g),
            this.worker.postMessage({ op: "setIterations", props: g });
        }
        get tolerance() {
          return this.config.tolerance;
        }
        set tolerance(g) {
          (this.config.tolerance = g),
            this.worker.postMessage({ op: "setTolerance", props: g });
        }
        constructor(g) {
          let {
            allowSleep: I = !1,
            axisIndex: C = 0,
            broadphase: A = "Naive",
            defaultContactMaterial: G = { contactEquationStiffness: 1e6 },
            gravity: b = [0, -9.81, 0],
            iterations: l = 5,
            quatNormalizeFast: Z = !1,
            quatNormalizeSkip: c = 0,
            size: B = 1e3,
            solver: o = "GS",
            tolerance: d = 0.001,
          } = g;
          super(),
            (this.worker = new p()),
            (this.config = {
              allowSleep: I,
              axisIndex: C,
              broadphase: A,
              defaultContactMaterial: G,
              gravity: b,
              iterations: l,
              quatNormalizeFast: Z,
              quatNormalizeSkip: c,
              size: B,
              solver: o,
              tolerance: d,
            }),
            (this.buffers = {
              positions: new Float32Array(3 * B),
              quaternions: new Float32Array(4 * B),
            }),
            (this.worker.onmessage = (g) => {
              if ("frame" === g.data.op)
                return (
                  (this.buffers.positions = g.data.positions),
                  (this.buffers.quaternions = g.data.quaternions),
                  void this.emit(g.data.op, g.data)
                );
              this.emit(g.data.type, g.data);
            });
        }
        addBodies(g) {
          let { props: I, type: C, uuid: A } = g;
          this.worker.postMessage({
            op: "addBodies",
            props: I,
            type: C,
            uuid: A,
          });
        }
        addConstraint(g) {
          let {
            props: [I, C, A],
            type: G,
            uuid: b,
          } = g;
          this.worker.postMessage({
            op: "addConstraint",
            props: [I, C, A],
            type: G,
            uuid: b,
          });
        }
        addContactMaterial(g) {
          let { props: I, uuid: C } = g;
          this.worker.postMessage({
            op: "addContactMaterial",
            props: I,
            uuid: C,
          });
        }
        addRay(g) {
          let { props: I, uuid: C } = g;
          this.worker.postMessage({ op: "addRay", props: I, uuid: C });
        }
        addRaycastVehicle(g) {
          let {
            props: [I, C, A, G, b, l],
            uuid: Z,
          } = g;
          this.worker.postMessage({
            op: "addRaycastVehicle",
            props: [I, C, A, G, b, l],
            uuid: Z,
          });
        }
        addSpring(g) {
          let {
            props: [I, C, A],
            uuid: G,
          } = g;
          this.worker.postMessage({
            op: "addSpring",
            props: [I, C, A],
            uuid: G,
          });
        }
        applyForce(g) {
          let { props: I, uuid: C } = g;
          this.worker.postMessage({ op: "applyForce", props: I, uuid: C });
        }
        applyImpulse(g) {
          let { props: I, uuid: C } = g;
          this.worker.postMessage({ op: "applyImpulse", props: I, uuid: C });
        }
        applyLocalForce(g) {
          let { props: I, uuid: C } = g;
          this.worker.postMessage({ op: "applyLocalForce", props: I, uuid: C });
        }
        applyLocalImpulse(g) {
          let { props: I, uuid: C } = g;
          this.worker.postMessage({
            op: "applyLocalImpulse",
            props: I,
            uuid: C,
          });
        }
        applyRaycastVehicleEngineForce(g) {
          let { props: I, uuid: C } = g;
          this.worker.postMessage({
            op: "applyRaycastVehicleEngineForce",
            props: I,
            uuid: C,
          });
        }
        applyTorque(g) {
          let { props: I, uuid: C } = g;
          this.worker.postMessage({ op: "applyTorque", props: I, uuid: C });
        }
        disableConstraint(g) {
          let { uuid: I } = g;
          this.worker.postMessage({ op: "disableConstraint", uuid: I });
        }
        disableConstraintMotor(g) {
          let { uuid: I } = g;
          this.worker.postMessage({ op: "disableConstraintMotor", uuid: I });
        }
        enableConstraint(g) {
          let { uuid: I } = g;
          this.worker.postMessage({ op: "enableConstraint", uuid: I });
        }
        enableConstraintMotor(g) {
          let { uuid: I } = g;
          this.worker.postMessage({ op: "enableConstraintMotor", uuid: I });
        }
        init() {
          const {
            allowSleep: g,
            axisIndex: I,
            broadphase: C,
            defaultContactMaterial: A,
            gravity: G,
            iterations: b,
            quatNormalizeFast: l,
            quatNormalizeSkip: Z,
            solver: c,
            tolerance: B,
          } = this.config;
          this.worker.postMessage({
            op: "init",
            props: {
              allowSleep: g,
              axisIndex: I,
              broadphase: C,
              defaultContactMaterial: A,
              gravity: G,
              iterations: b,
              quatNormalizeFast: l,
              quatNormalizeSkip: Z,
              solver: c,
              tolerance: B,
            },
          });
        }
        removeBodies(g) {
          let { uuid: I } = g;
          this.worker.postMessage({ op: "removeBodies", uuid: I });
        }
        removeConstraint(g) {
          let { uuid: I } = g;
          this.worker.postMessage({ op: "removeConstraint", uuid: I });
        }
        removeContactMaterial(g) {
          let { uuid: I } = g;
          this.worker.postMessage({ op: "removeContactMaterial", uuid: I });
        }
        removeRay(g) {
          let { uuid: I } = g;
          this.worker.postMessage({ op: "removeRay", uuid: I });
        }
        removeRaycastVehicle(g) {
          let { uuid: I } = g;
          this.worker.postMessage({ op: "removeRaycastVehicle", uuid: I });
        }
        removeSpring(g) {
          let { uuid: I } = g;
          this.worker.postMessage({ op: "removeSpring", uuid: I });
        }
        setAllowSleep(g) {
          let { props: I, uuid: C } = g;
          this.worker.postMessage({ op: "setAllowSleep", props: I, uuid: C });
        }
        setAngularDamping(g) {
          let { props: I, uuid: C } = g;
          this.worker.postMessage({
            op: "setAngularDamping",
            props: I,
            uuid: C,
          });
        }
        setAngularFactor(g) {
          let { props: I, uuid: C } = g;
          this.worker.postMessage({
            op: "setAngularFactor",
            props: I,
            uuid: C,
          });
        }
        setAngularVelocity(g) {
          let { props: I, uuid: C } = g;
          this.worker.postMessage({
            op: "setAngularVelocity",
            props: I,
            uuid: C,
          });
        }
        setCollisionFilterGroup(g) {
          let { props: I, uuid: C } = g;
          this.worker.postMessage({
            op: "setCollisionFilterGroup",
            props: I,
            uuid: C,
          });
        }
        setCollisionFilterMask(g) {
          let { props: I, uuid: C } = g;
          this.worker.postMessage({
            op: "setCollisionFilterMask",
            props: I,
            uuid: C,
          });
        }
        setCollisionResponse(g) {
          let { props: I, uuid: C } = g;
          this.worker.postMessage({
            op: "setCollisionResponse",
            props: I,
            uuid: C,
          });
        }
        setConstraintMotorMaxForce(g) {
          let { props: I, uuid: C } = g;
          this.worker.postMessage({
            op: "setConstraintMotorMaxForce",
            props: I,
            uuid: C,
          });
        }
        setConstraintMotorSpeed(g) {
          let { props: I, uuid: C } = g;
          this.worker.postMessage({
            op: "setConstraintMotorSpeed",
            props: I,
            uuid: C,
          });
        }
        setFixedRotation(g) {
          let { props: I, uuid: C } = g;
          this.worker.postMessage({
            op: "setFixedRotation",
            props: I,
            uuid: C,
          });
        }
        setIsTrigger(g) {
          let { props: I, uuid: C } = g;
          this.worker.postMessage({ op: "setIsTrigger", props: I, uuid: C });
        }
        setLinearDamping(g) {
          let { props: I, uuid: C } = g;
          this.worker.postMessage({
            op: "setLinearDamping",
            props: I,
            uuid: C,
          });
        }
        setLinearFactor(g) {
          let { props: I, uuid: C } = g;
          this.worker.postMessage({ op: "setLinearFactor", props: I, uuid: C });
        }
        setMass(g) {
          let { props: I, uuid: C } = g;
          this.worker.postMessage({ op: "setMass", props: I, uuid: C });
        }
        setMaterial(g) {
          let { props: I, uuid: C } = g;
          this.worker.postMessage({ op: "setMaterial", props: I, uuid: C });
        }
        setPosition(g) {
          let { props: I, uuid: C } = g;
          this.worker.postMessage({ op: "setPosition", props: I, uuid: C });
        }
        setQuaternion(g) {
          let {
            props: [I, C, A, G],
            uuid: b,
          } = g;
          this.worker.postMessage({
            op: "setQuaternion",
            props: [I, C, A, G],
            uuid: b,
          });
        }
        setRaycastVehicleBrake(g) {
          let { props: I, uuid: C } = g;
          this.worker.postMessage({
            op: "setRaycastVehicleBrake",
            props: I,
            uuid: C,
          });
        }
        setRaycastVehicleSteeringValue(g) {
          let { props: I, uuid: C } = g;
          this.worker.postMessage({
            op: "setRaycastVehicleSteeringValue",
            props: I,
            uuid: C,
          });
        }
        setRotation(g) {
          let { props: I, uuid: C } = g;
          this.worker.postMessage({ op: "setRotation", props: I, uuid: C });
        }
        setSleepSpeedLimit(g) {
          let { props: I, uuid: C } = g;
          this.worker.postMessage({
            op: "setSleepSpeedLimit",
            props: I,
            uuid: C,
          });
        }
        setSleepTimeLimit(g) {
          let { props: I, uuid: C } = g;
          this.worker.postMessage({
            op: "setSleepTimeLimit",
            props: I,
            uuid: C,
          });
        }
        setSpringDamping(g) {
          let { props: I, uuid: C } = g;
          this.worker.postMessage({
            op: "setSpringDamping",
            props: I,
            uuid: C,
          });
        }
        setSpringRestLength(g) {
          let { props: I, uuid: C } = g;
          this.worker.postMessage({
            op: "setSpringRestLength",
            props: I,
            uuid: C,
          });
        }
        setSpringStiffness(g) {
          let { props: I, uuid: C } = g;
          this.worker.postMessage({
            op: "setSpringStiffness",
            props: I,
            uuid: C,
          });
        }
        setUserData(g) {
          let { props: I, uuid: C } = g;
          this.worker.postMessage({ op: "setUserData", props: I, uuid: C });
        }
        setVelocity(g) {
          let { props: I, uuid: C } = g;
          this.worker.postMessage({ op: "setVelocity", props: I, uuid: C });
        }
        sleep(g) {
          let { uuid: I } = g;
          this.worker.postMessage({ op: "sleep", uuid: I });
        }
        step(g) {
          const {
            buffers: { positions: I, quaternions: C },
          } = this;
          (I.byteLength || C.byteLength) &&
            this.worker.postMessage(
              { op: "step", positions: I, props: g, quaternions: C },
              [I.buffer, C.buffer]
            );
        }
        subscribe(g) {
          let {
            props: { id: I, target: C, type: A },
            uuid: G,
          } = g;
          this.worker.postMessage({
            op: "subscribe",
            props: { id: I, target: C, type: A },
            uuid: G,
          });
        }
        terminate() {
          this.worker.terminate();
        }
        unsubscribe(g) {
          let { props: I } = g;
          this.worker.postMessage({ op: "unsubscribe", props: I });
        }
        wakeUp(g) {
          let { uuid: I } = g;
          this.worker.postMessage({ op: "wakeUp", uuid: I });
        }
      }
      class H {
        constructor(g) {
          void 0 === g && (g = [0, 0, 0, 0, 0, 0, 0, 0, 0]),
            (this.elements = g);
        }
        identity() {
          const g = this.elements;
          (g[0] = 1),
            (g[1] = 0),
            (g[2] = 0),
            (g[3] = 0),
            (g[4] = 1),
            (g[5] = 0),
            (g[6] = 0),
            (g[7] = 0),
            (g[8] = 1);
        }
        setZero() {
          const g = this.elements;
          (g[0] = 0),
            (g[1] = 0),
            (g[2] = 0),
            (g[3] = 0),
            (g[4] = 0),
            (g[5] = 0),
            (g[6] = 0),
            (g[7] = 0),
            (g[8] = 0);
        }
        setTrace(g) {
          const I = this.elements;
          (I[0] = g.x), (I[4] = g.y), (I[8] = g.z);
        }
        getTrace(g) {
          void 0 === g && (g = new w());
          const I = this.elements;
          return (g.x = I[0]), (g.y = I[4]), (g.z = I[8]), g;
        }
        vmult(g, I) {
          void 0 === I && (I = new w());
          const C = this.elements,
            A = g.x,
            G = g.y,
            b = g.z;
          return (
            (I.x = C[0] * A + C[1] * G + C[2] * b),
            (I.y = C[3] * A + C[4] * G + C[5] * b),
            (I.z = C[6] * A + C[7] * G + C[8] * b),
            I
          );
        }
        smult(g) {
          for (let I = 0; I < this.elements.length; I++) this.elements[I] *= g;
        }
        mmult(g, I) {
          void 0 === I && (I = new H());
          const C = this.elements,
            A = g.elements,
            G = I.elements,
            b = C[0],
            l = C[1],
            Z = C[2],
            c = C[3],
            B = C[4],
            o = C[5],
            d = C[6],
            i = C[7],
            s = C[8],
            m = A[0],
            W = A[1],
            h = A[2],
            a = A[3],
            V = A[4],
            y = A[5],
            X = A[6],
            Y = A[7],
            K = A[8];
          return (
            (G[0] = b * m + l * a + Z * X),
            (G[1] = b * W + l * V + Z * Y),
            (G[2] = b * h + l * y + Z * K),
            (G[3] = c * m + B * a + o * X),
            (G[4] = c * W + B * V + o * Y),
            (G[5] = c * h + B * y + o * K),
            (G[6] = d * m + i * a + s * X),
            (G[7] = d * W + i * V + s * Y),
            (G[8] = d * h + i * y + s * K),
            I
          );
        }
        scale(g, I) {
          void 0 === I && (I = new H());
          const C = this.elements,
            A = I.elements;
          for (let G = 0; 3 !== G; G++)
            (A[3 * G + 0] = g.x * C[3 * G + 0]),
              (A[3 * G + 1] = g.y * C[3 * G + 1]),
              (A[3 * G + 2] = g.z * C[3 * G + 2]);
          return I;
        }
        solve(g, I) {
          void 0 === I && (I = new w());
          const C = [];
          let A, G;
          for (A = 0; A < 12; A++) C.push(0);
          for (A = 0; A < 3; A++)
            for (G = 0; G < 3; G++) C[A + 4 * G] = this.elements[A + 3 * G];
          (C[3] = g.x), (C[7] = g.y), (C[11] = g.z);
          let b = 3;
          const l = b;
          let Z;
          let c;
          do {
            if (((A = l - b), 0 === C[A + 4 * A]))
              for (G = A + 1; G < l; G++)
                if (0 !== C[A + 4 * G]) {
                  Z = 4;
                  do {
                    (c = 4 - Z), (C[c + 4 * A] += C[c + 4 * G]);
                  } while (--Z);
                  break;
                }
            if (0 !== C[A + 4 * A])
              for (G = A + 1; G < l; G++) {
                const g = C[A + 4 * G] / C[A + 4 * A];
                Z = 4;
                do {
                  (c = 4 - Z),
                    (C[c + 4 * G] =
                      c <= A ? 0 : C[c + 4 * G] - C[c + 4 * A] * g);
                } while (--Z);
              }
          } while (--b);
          if (
            ((I.z = C[11] / C[10]),
            (I.y = (C[7] - C[6] * I.z) / C[5]),
            (I.x = (C[3] - C[2] * I.z - C[1] * I.y) / C[0]),
            isNaN(I.x) ||
              isNaN(I.y) ||
              isNaN(I.z) ||
              I.x === 1 / 0 ||
              I.y === 1 / 0 ||
              I.z === 1 / 0)
          )
            throw `Could not solve equation! Got x=[${I.toString()}], b=[${g.toString()}], A=[${this.toString()}]`;
          return I;
        }
        e(g, I, C) {
          if (void 0 === C) return this.elements[I + 3 * g];
          this.elements[I + 3 * g] = C;
        }
        copy(g) {
          for (let I = 0; I < g.elements.length; I++)
            this.elements[I] = g.elements[I];
          return this;
        }
        toString() {
          let g = "";
          for (let I = 0; I < 9; I++) g += this.elements[I] + ",";
          return g;
        }
        reverse(g) {
          void 0 === g && (g = new H());
          const I = e;
          let C, A;
          for (C = 0; C < 3; C++)
            for (A = 0; A < 3; A++) I[C + 6 * A] = this.elements[C + 3 * A];
          (I[3] = 1),
            (I[9] = 0),
            (I[15] = 0),
            (I[4] = 0),
            (I[10] = 1),
            (I[16] = 0),
            (I[5] = 0),
            (I[11] = 0),
            (I[17] = 1);
          let G = 3;
          const b = G;
          let l;
          let Z;
          do {
            if (((C = b - G), 0 === I[C + 6 * C]))
              for (A = C + 1; A < b; A++)
                if (0 !== I[C + 6 * A]) {
                  l = 6;
                  do {
                    (Z = 6 - l), (I[Z + 6 * C] += I[Z + 6 * A]);
                  } while (--l);
                  break;
                }
            if (0 !== I[C + 6 * C])
              for (A = C + 1; A < b; A++) {
                const g = I[C + 6 * A] / I[C + 6 * C];
                l = 6;
                do {
                  (Z = 6 - l),
                    (I[Z + 6 * A] =
                      Z <= C ? 0 : I[Z + 6 * A] - I[Z + 6 * C] * g);
                } while (--l);
              }
          } while (--G);
          C = 2;
          do {
            A = C - 1;
            do {
              const g = I[C + 6 * A] / I[C + 6 * C];
              l = 6;
              do {
                (Z = 6 - l), (I[Z + 6 * A] = I[Z + 6 * A] - I[Z + 6 * C] * g);
              } while (--l);
            } while (A--);
          } while (--C);
          C = 2;
          do {
            const g = 1 / I[C + 6 * C];
            l = 6;
            do {
              (Z = 6 - l), (I[Z + 6 * C] = I[Z + 6 * C] * g);
            } while (--l);
          } while (C--);
          C = 2;
          do {
            A = 2;
            do {
              if (((Z = I[3 + A + 6 * C]), isNaN(Z) || Z === 1 / 0))
                throw `Could not reverse! A=[${this.toString()}]`;
              g.e(C, A, Z);
            } while (A--);
          } while (C--);
          return g;
        }
        setRotationFromQuaternion(g) {
          const I = g.x,
            C = g.y,
            A = g.z,
            G = g.w,
            b = I + I,
            l = C + C,
            Z = A + A,
            c = I * b,
            B = I * l,
            o = I * Z,
            d = C * l,
            i = C * Z,
            s = A * Z,
            m = G * b,
            W = G * l,
            h = G * Z,
            a = this.elements;
          return (
            (a[0] = 1 - (d + s)),
            (a[1] = B - h),
            (a[2] = o + W),
            (a[3] = B + h),
            (a[4] = 1 - (c + s)),
            (a[5] = i - m),
            (a[6] = o - W),
            (a[7] = i + m),
            (a[8] = 1 - (c + d)),
            this
          );
        }
        transpose(g) {
          void 0 === g && (g = new H());
          const I = this.elements,
            C = g.elements;
          let A;
          return (
            (C[0] = I[0]),
            (C[4] = I[4]),
            (C[8] = I[8]),
            (A = I[1]),
            (C[1] = I[3]),
            (C[3] = A),
            (A = I[2]),
            (C[2] = I[6]),
            (C[6] = A),
            (A = I[5]),
            (C[5] = I[7]),
            (C[7] = A),
            g
          );
        }
      }
      const e = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      class w {
        constructor(g, I, C) {
          void 0 === g && (g = 0),
            void 0 === I && (I = 0),
            void 0 === C && (C = 0),
            (this.x = g),
            (this.y = I),
            (this.z = C);
        }
        cross(g, I) {
          void 0 === I && (I = new w());
          const C = g.x,
            A = g.y,
            G = g.z,
            b = this.x,
            l = this.y,
            Z = this.z;
          return (
            (I.x = l * G - Z * A),
            (I.y = Z * C - b * G),
            (I.z = b * A - l * C),
            I
          );
        }
        set(g, I, C) {
          return (this.x = g), (this.y = I), (this.z = C), this;
        }
        setZero() {
          this.x = this.y = this.z = 0;
        }
        vadd(g, I) {
          if (!I) return new w(this.x + g.x, this.y + g.y, this.z + g.z);
          (I.x = g.x + this.x), (I.y = g.y + this.y), (I.z = g.z + this.z);
        }
        vsub(g, I) {
          if (!I) return new w(this.x - g.x, this.y - g.y, this.z - g.z);
          (I.x = this.x - g.x), (I.y = this.y - g.y), (I.z = this.z - g.z);
        }
        crossmat() {
          return new H([
            0,
            -this.z,
            this.y,
            this.z,
            0,
            -this.x,
            -this.y,
            this.x,
            0,
          ]);
        }
        normalize() {
          const g = this.x,
            I = this.y,
            C = this.z,
            A = Math.sqrt(g * g + I * I + C * C);
          if (A > 0) {
            const g = 1 / A;
            (this.x *= g), (this.y *= g), (this.z *= g);
          } else (this.x = 0), (this.y = 0), (this.z = 0);
          return A;
        }
        unit(g) {
          void 0 === g && (g = new w());
          const I = this.x,
            C = this.y,
            A = this.z;
          let G = Math.sqrt(I * I + C * C + A * A);
          return (
            G > 0
              ? ((G = 1 / G), (g.x = I * G), (g.y = C * G), (g.z = A * G))
              : ((g.x = 1), (g.y = 0), (g.z = 0)),
            g
          );
        }
        length() {
          const g = this.x,
            I = this.y,
            C = this.z;
          return Math.sqrt(g * g + I * I + C * C);
        }
        lengthSquared() {
          return this.dot(this);
        }
        distanceTo(g) {
          const I = this.x,
            C = this.y,
            A = this.z,
            G = g.x,
            b = g.y,
            l = g.z;
          return Math.sqrt(
            (G - I) * (G - I) + (b - C) * (b - C) + (l - A) * (l - A)
          );
        }
        distanceSquared(g) {
          const I = this.x,
            C = this.y,
            A = this.z,
            G = g.x,
            b = g.y,
            l = g.z;
          return (G - I) * (G - I) + (b - C) * (b - C) + (l - A) * (l - A);
        }
        scale(g, I) {
          void 0 === I && (I = new w());
          const C = this.x,
            A = this.y,
            G = this.z;
          return (I.x = g * C), (I.y = g * A), (I.z = g * G), I;
        }
        vmul(g, I) {
          return (
            void 0 === I && (I = new w()),
            (I.x = g.x * this.x),
            (I.y = g.y * this.y),
            (I.z = g.z * this.z),
            I
          );
        }
        addScaledVector(g, I, C) {
          return (
            void 0 === C && (C = new w()),
            (C.x = this.x + g * I.x),
            (C.y = this.y + g * I.y),
            (C.z = this.z + g * I.z),
            C
          );
        }
        dot(g) {
          return this.x * g.x + this.y * g.y + this.z * g.z;
        }
        isZero() {
          return 0 === this.x && 0 === this.y && 0 === this.z;
        }
        negate(g) {
          return (
            void 0 === g && (g = new w()),
            (g.x = -this.x),
            (g.y = -this.y),
            (g.z = -this.z),
            g
          );
        }
        tangents(g, I) {
          const C = this.length();
          if (C > 0) {
            const A = t,
              G = 1 / C;
            A.set(this.x * G, this.y * G, this.z * G);
            const b = N;
            Math.abs(A.x) < 0.9
              ? (b.set(1, 0, 0), A.cross(b, g))
              : (b.set(0, 1, 0), A.cross(b, g)),
              A.cross(g, I);
          } else g.set(1, 0, 0), I.set(0, 1, 0);
        }
        toString() {
          return `${this.x},${this.y},${this.z}`;
        }
        toArray() {
          return [this.x, this.y, this.z];
        }
        copy(g) {
          return (this.x = g.x), (this.y = g.y), (this.z = g.z), this;
        }
        lerp(g, I, C) {
          const A = this.x,
            G = this.y,
            b = this.z;
          (C.x = A + (g.x - A) * I),
            (C.y = G + (g.y - G) * I),
            (C.z = b + (g.z - b) * I);
        }
        almostEquals(g, I) {
          return (
            void 0 === I && (I = 1e-6),
            !(
              Math.abs(this.x - g.x) > I ||
              Math.abs(this.y - g.y) > I ||
              Math.abs(this.z - g.z) > I
            )
          );
        }
        almostZero(g) {
          return (
            void 0 === g && (g = 1e-6),
            !(
              Math.abs(this.x) > g ||
              Math.abs(this.y) > g ||
              Math.abs(this.z) > g
            )
          );
        }
        isAntiparallelTo(g, I) {
          return this.negate(v), v.almostEquals(g, I);
        }
        clone() {
          return new w(this.x, this.y, this.z);
        }
      }
      (w.ZERO = new w(0, 0, 0)),
        (w.UNIT_X = new w(1, 0, 0)),
        (w.UNIT_Y = new w(0, 1, 0)),
        (w.UNIT_Z = new w(0, 0, 1));
      const t = new w(),
        N = new w(),
        v = new w();
      class F {
        constructor(g) {
          void 0 === g && (g = {}),
            (this.lowerBound = new w()),
            (this.upperBound = new w()),
            g.lowerBound && this.lowerBound.copy(g.lowerBound),
            g.upperBound && this.upperBound.copy(g.upperBound);
        }
        setFromPoints(g, I, C, A) {
          const G = this.lowerBound,
            b = this.upperBound,
            l = C;
          G.copy(g[0]), l && l.vmult(G, G), b.copy(G);
          for (let Z = 1; Z < g.length; Z++) {
            let I = g[Z];
            l && (l.vmult(I, S), (I = S)),
              I.x > b.x && (b.x = I.x),
              I.x < G.x && (G.x = I.x),
              I.y > b.y && (b.y = I.y),
              I.y < G.y && (G.y = I.y),
              I.z > b.z && (b.z = I.z),
              I.z < G.z && (G.z = I.z);
          }
          return (
            I && (I.vadd(G, G), I.vadd(b, b)),
            A &&
              ((G.x -= A),
              (G.y -= A),
              (G.z -= A),
              (b.x += A),
              (b.y += A),
              (b.z += A)),
            this
          );
        }
        copy(g) {
          return (
            this.lowerBound.copy(g.lowerBound),
            this.upperBound.copy(g.upperBound),
            this
          );
        }
        clone() {
          return new F().copy(this);
        }
        extend(g) {
          (this.lowerBound.x = Math.min(this.lowerBound.x, g.lowerBound.x)),
            (this.upperBound.x = Math.max(this.upperBound.x, g.upperBound.x)),
            (this.lowerBound.y = Math.min(this.lowerBound.y, g.lowerBound.y)),
            (this.upperBound.y = Math.max(this.upperBound.y, g.upperBound.y)),
            (this.lowerBound.z = Math.min(this.lowerBound.z, g.lowerBound.z)),
            (this.upperBound.z = Math.max(this.upperBound.z, g.upperBound.z));
        }
        overlaps(g) {
          const I = this.lowerBound,
            C = this.upperBound,
            A = g.lowerBound,
            G = g.upperBound,
            b = (A.x <= C.x && C.x <= G.x) || (I.x <= G.x && G.x <= C.x),
            l = (A.y <= C.y && C.y <= G.y) || (I.y <= G.y && G.y <= C.y),
            Z = (A.z <= C.z && C.z <= G.z) || (I.z <= G.z && G.z <= C.z);
          return b && l && Z;
        }
        volume() {
          const g = this.lowerBound,
            I = this.upperBound;
          return (I.x - g.x) * (I.y - g.y) * (I.z - g.z);
        }
        contains(g) {
          const I = this.lowerBound,
            C = this.upperBound,
            A = g.lowerBound,
            G = g.upperBound;
          return (
            I.x <= A.x &&
            C.x >= G.x &&
            I.y <= A.y &&
            C.y >= G.y &&
            I.z <= A.z &&
            C.z >= G.z
          );
        }
        getCorners(g, I, C, A, G, b, l, Z) {
          const c = this.lowerBound,
            B = this.upperBound;
          g.copy(c),
            I.set(B.x, c.y, c.z),
            C.set(B.x, B.y, c.z),
            A.set(c.x, B.y, B.z),
            G.set(B.x, c.y, B.z),
            b.set(c.x, B.y, c.z),
            l.set(c.x, c.y, B.z),
            Z.copy(B);
        }
        toLocalFrame(g, I) {
          const C = z,
            A = C[0],
            G = C[1],
            b = C[2],
            l = C[3],
            Z = C[4],
            c = C[5],
            B = C[6],
            o = C[7];
          this.getCorners(A, G, b, l, Z, c, B, o);
          for (let d = 0; 8 !== d; d++) {
            const I = C[d];
            g.pointToLocal(I, I);
          }
          return I.setFromPoints(C);
        }
        toWorldFrame(g, I) {
          const C = z,
            A = C[0],
            G = C[1],
            b = C[2],
            l = C[3],
            Z = C[4],
            c = C[5],
            B = C[6],
            o = C[7];
          this.getCorners(A, G, b, l, Z, c, B, o);
          for (let d = 0; 8 !== d; d++) {
            const I = C[d];
            g.pointToWorld(I, I);
          }
          return I.setFromPoints(C);
        }
        overlapsRay(g) {
          const { direction: I, from: C } = g,
            A = 1 / I.x,
            G = 1 / I.y,
            b = 1 / I.z,
            l = (this.lowerBound.x - C.x) * A,
            Z = (this.upperBound.x - C.x) * A,
            c = (this.lowerBound.y - C.y) * G,
            B = (this.upperBound.y - C.y) * G,
            o = (this.lowerBound.z - C.z) * b,
            d = (this.upperBound.z - C.z) * b,
            i = Math.max(
              Math.max(Math.min(l, Z), Math.min(c, B)),
              Math.min(o, d)
            ),
            s = Math.min(
              Math.min(Math.max(l, Z), Math.max(c, B)),
              Math.max(o, d)
            );
          return !(s < 0) && !(i > s);
        }
      }
      const S = new w(),
        z = [
          new w(),
          new w(),
          new w(),
          new w(),
          new w(),
          new w(),
          new w(),
          new w(),
        ];
      class k {
        constructor(g, I, C, A) {
          void 0 === g && (g = 0),
            void 0 === I && (I = 0),
            void 0 === C && (C = 0),
            void 0 === A && (A = 1),
            (this.x = g),
            (this.y = I),
            (this.z = C),
            (this.w = A);
        }
        set(g, I, C, A) {
          return (this.x = g), (this.y = I), (this.z = C), (this.w = A), this;
        }
        toString() {
          return `${this.x},${this.y},${this.z},${this.w}`;
        }
        toArray() {
          return [this.x, this.y, this.z, this.w];
        }
        setFromAxisAngle(g, I) {
          const C = Math.sin(0.5 * I);
          return (
            (this.x = g.x * C),
            (this.y = g.y * C),
            (this.z = g.z * C),
            (this.w = Math.cos(0.5 * I)),
            this
          );
        }
        toAxisAngle(g) {
          void 0 === g && (g = new w()), this.normalize();
          const I = 2 * Math.acos(this.w),
            C = Math.sqrt(1 - this.w * this.w);
          return (
            C < 0.001
              ? ((g.x = this.x), (g.y = this.y), (g.z = this.z))
              : ((g.x = this.x / C), (g.y = this.y / C), (g.z = this.z / C)),
            [g, I]
          );
        }
        setFromVectors(g, I) {
          if (g.isAntiparallelTo(I)) {
            const I = J,
              C = L;
            g.tangents(I, C), this.setFromAxisAngle(I, Math.PI);
          } else {
            const C = g.cross(I);
            (this.x = C.x),
              (this.y = C.y),
              (this.z = C.z),
              (this.w =
                Math.sqrt(g.length() ** 2 * I.length() ** 2) + g.dot(I)),
              this.normalize();
          }
          return this;
        }
        mult(g, I) {
          void 0 === I && (I = new k());
          const C = this.x,
            A = this.y,
            G = this.z,
            b = this.w,
            l = g.x,
            Z = g.y,
            c = g.z,
            B = g.w;
          return (
            (I.x = C * B + b * l + A * c - G * Z),
            (I.y = A * B + b * Z + G * l - C * c),
            (I.z = G * B + b * c + C * Z - A * l),
            (I.w = b * B - C * l - A * Z - G * c),
            I
          );
        }
        inverse(g) {
          void 0 === g && (g = new k());
          const I = this.x,
            C = this.y,
            A = this.z,
            G = this.w;
          this.conjugate(g);
          const b = 1 / (I * I + C * C + A * A + G * G);
          return (g.x *= b), (g.y *= b), (g.z *= b), (g.w *= b), g;
        }
        conjugate(g) {
          return (
            void 0 === g && (g = new k()),
            (g.x = -this.x),
            (g.y = -this.y),
            (g.z = -this.z),
            (g.w = this.w),
            g
          );
        }
        normalize() {
          let g = Math.sqrt(
            this.x * this.x +
              this.y * this.y +
              this.z * this.z +
              this.w * this.w
          );
          return (
            0 === g
              ? ((this.x = 0), (this.y = 0), (this.z = 0), (this.w = 0))
              : ((g = 1 / g),
                (this.x *= g),
                (this.y *= g),
                (this.z *= g),
                (this.w *= g)),
            this
          );
        }
        normalizeFast() {
          const g =
            (3 -
              (this.x * this.x +
                this.y * this.y +
                this.z * this.z +
                this.w * this.w)) /
            2;
          return (
            0 === g
              ? ((this.x = 0), (this.y = 0), (this.z = 0), (this.w = 0))
              : ((this.x *= g), (this.y *= g), (this.z *= g), (this.w *= g)),
            this
          );
        }
        vmult(g, I) {
          void 0 === I && (I = new w());
          const C = g.x,
            A = g.y,
            G = g.z,
            b = this.x,
            l = this.y,
            Z = this.z,
            c = this.w,
            B = c * C + l * G - Z * A,
            o = c * A + Z * C - b * G,
            d = c * G + b * A - l * C,
            i = -b * C - l * A - Z * G;
          return (
            (I.x = B * c + i * -b + o * -Z - d * -l),
            (I.y = o * c + i * -l + d * -b - B * -Z),
            (I.z = d * c + i * -Z + B * -l - o * -b),
            I
          );
        }
        copy(g) {
          return (
            (this.x = g.x), (this.y = g.y), (this.z = g.z), (this.w = g.w), this
          );
        }
        toEuler(g, I) {
          let C, A, G;
          void 0 === I && (I = "YZX");
          const b = this.x,
            l = this.y,
            Z = this.z,
            c = this.w;
          switch (I) {
            case "YZX":
              const g = b * l + Z * c;
              if (
                (g > 0.499 &&
                  ((C = 2 * Math.atan2(b, c)), (A = Math.PI / 2), (G = 0)),
                g < -0.499 &&
                  ((C = -2 * Math.atan2(b, c)), (A = -Math.PI / 2), (G = 0)),
                void 0 === C)
              ) {
                const I = b * b,
                  B = l * l,
                  o = Z * Z;
                (C = Math.atan2(2 * l * c - 2 * b * Z, 1 - 2 * B - 2 * o)),
                  (A = Math.asin(2 * g)),
                  (G = Math.atan2(2 * b * c - 2 * l * Z, 1 - 2 * I - 2 * o));
              }
              break;
            default:
              throw new Error(`Euler order ${I} not supported yet.`);
          }
          (g.y = C), (g.z = A), (g.x = G);
        }
        setFromEuler(g, I, C, A) {
          void 0 === A && (A = "XYZ");
          const G = Math.cos(g / 2),
            b = Math.cos(I / 2),
            l = Math.cos(C / 2),
            Z = Math.sin(g / 2),
            c = Math.sin(I / 2),
            B = Math.sin(C / 2);
          return (
            "XYZ" === A
              ? ((this.x = Z * b * l + G * c * B),
                (this.y = G * c * l - Z * b * B),
                (this.z = G * b * B + Z * c * l),
                (this.w = G * b * l - Z * c * B))
              : "YXZ" === A
              ? ((this.x = Z * b * l + G * c * B),
                (this.y = G * c * l - Z * b * B),
                (this.z = G * b * B - Z * c * l),
                (this.w = G * b * l + Z * c * B))
              : "ZXY" === A
              ? ((this.x = Z * b * l - G * c * B),
                (this.y = G * c * l + Z * b * B),
                (this.z = G * b * B + Z * c * l),
                (this.w = G * b * l - Z * c * B))
              : "ZYX" === A
              ? ((this.x = Z * b * l - G * c * B),
                (this.y = G * c * l + Z * b * B),
                (this.z = G * b * B - Z * c * l),
                (this.w = G * b * l + Z * c * B))
              : "YZX" === A
              ? ((this.x = Z * b * l + G * c * B),
                (this.y = G * c * l + Z * b * B),
                (this.z = G * b * B - Z * c * l),
                (this.w = G * b * l - Z * c * B))
              : "XZY" === A &&
                ((this.x = Z * b * l - G * c * B),
                (this.y = G * c * l - Z * b * B),
                (this.z = G * b * B + Z * c * l),
                (this.w = G * b * l + Z * c * B)),
            this
          );
        }
        clone() {
          return new k(this.x, this.y, this.z, this.w);
        }
        slerp(g, I, C) {
          void 0 === C && (C = new k());
          const A = this.x,
            G = this.y,
            b = this.z,
            l = this.w;
          let Z,
            c,
            B,
            o,
            d,
            i = g.x,
            s = g.y,
            m = g.z,
            W = g.w;
          return (
            (c = A * i + G * s + b * m + l * W),
            c < 0 && ((c = -c), (i = -i), (s = -s), (m = -m), (W = -W)),
            1 - c > 1e-6
              ? ((Z = Math.acos(c)),
                (B = Math.sin(Z)),
                (o = Math.sin((1 - I) * Z) / B),
                (d = Math.sin(I * Z) / B))
              : ((o = 1 - I), (d = I)),
            (C.x = o * A + d * i),
            (C.y = o * G + d * s),
            (C.z = o * b + d * m),
            (C.w = o * l + d * W),
            C
          );
        }
        integrate(g, I, C, A) {
          void 0 === A && (A = new k());
          const G = g.x * C.x,
            b = g.y * C.y,
            l = g.z * C.z,
            Z = this.x,
            c = this.y,
            B = this.z,
            o = this.w,
            d = 0.5 * I;
          return (
            (A.x += d * (G * o + b * B - l * c)),
            (A.y += d * (b * o + l * Z - G * B)),
            (A.z += d * (l * o + G * c - b * Z)),
            (A.w += d * (-G * Z - b * c - l * B)),
            A
          );
        }
      }
      const J = new w(),
        L = new w();
      class Q {
        constructor(g) {
          void 0 === g && (g = {}),
            (this.id = Q.idCounter++),
            (this.type = g.type || 0),
            (this.boundingSphereRadius = 0),
            (this.collisionResponse =
              !g.collisionResponse || g.collisionResponse),
            (this.collisionFilterGroup =
              void 0 !== g.collisionFilterGroup ? g.collisionFilterGroup : 1),
            (this.collisionFilterMask =
              void 0 !== g.collisionFilterMask ? g.collisionFilterMask : -1),
            (this.material = g.material ? g.material : null),
            (this.body = null);
        }
        updateBoundingSphereRadius() {
          throw `computeBoundingSphereRadius() not implemented for shape type ${this.type}`;
        }
        volume() {
          throw `volume() not implemented for shape type ${this.type}`;
        }
        calculateLocalInertia(g, I) {
          throw `calculateLocalInertia() not implemented for shape type ${this.type}`;
        }
        calculateWorldAABB(g, I, C, A) {
          throw `calculateWorldAABB() not implemented for shape type ${this.type}`;
        }
      }
      (Q.idCounter = 0),
        (Q.types = {
          SPHERE: 1,
          PLANE: 2,
          BOX: 4,
          COMPOUND: 8,
          CONVEXPOLYHEDRON: 16,
          HEIGHTFIELD: 32,
          PARTICLE: 64,
          CYLINDER: 128,
          TRIMESH: 256,
        });
      class x {
        constructor(g) {
          void 0 === g && (g = {}),
            (this.position = new w()),
            (this.quaternion = new k()),
            g.position && this.position.copy(g.position),
            g.quaternion && this.quaternion.copy(g.quaternion);
        }
        pointToLocal(g, I) {
          return x.pointToLocalFrame(this.position, this.quaternion, g, I);
        }
        pointToWorld(g, I) {
          return x.pointToWorldFrame(this.position, this.quaternion, g, I);
        }
        vectorToWorldFrame(g, I) {
          return void 0 === I && (I = new w()), this.quaternion.vmult(g, I), I;
        }
        static pointToLocalFrame(g, I, C, A) {
          return (
            void 0 === A && (A = new w()),
            C.vsub(g, A),
            I.conjugate(M),
            M.vmult(A, A),
            A
          );
        }
        static pointToWorldFrame(g, I, C, A) {
          return void 0 === A && (A = new w()), I.vmult(C, A), A.vadd(g, A), A;
        }
        static vectorToWorldFrame(g, I, C) {
          return void 0 === C && (C = new w()), g.vmult(I, C), C;
        }
        static vectorToLocalFrame(g, I, C, A) {
          return (
            void 0 === A && (A = new w()),
            (I.w *= -1),
            I.vmult(C, A),
            (I.w *= -1),
            A
          );
        }
      }
      const M = new k();
      class U extends Q {
        constructor(g) {
          void 0 === g && (g = {});
          const {
            vertices: I = [],
            faces: C = [],
            normals: A = [],
            axes: G,
            boundingSphereRadius: b,
          } = g;
          super({ type: Q.types.CONVEXPOLYHEDRON }),
            (this.vertices = I),
            (this.faces = C),
            (this.faceNormals = A),
            0 === this.faceNormals.length && this.computeNormals(),
            b
              ? (this.boundingSphereRadius = b)
              : this.updateBoundingSphereRadius(),
            (this.worldVertices = []),
            (this.worldVerticesNeedsUpdate = !0),
            (this.worldFaceNormals = []),
            (this.worldFaceNormalsNeedsUpdate = !0),
            (this.uniqueAxes = G ? G.slice() : null),
            (this.uniqueEdges = []),
            this.computeEdges();
        }
        computeEdges() {
          const g = this.faces,
            I = this.vertices,
            C = this.uniqueEdges;
          C.length = 0;
          const A = new w();
          for (let G = 0; G !== g.length; G++) {
            const b = g[G],
              l = b.length;
            for (let g = 0; g !== l; g++) {
              const G = (g + 1) % l;
              I[b[g]].vsub(I[b[G]], A), A.normalize();
              let Z = !1;
              for (let g = 0; g !== C.length; g++)
                if (C[g].almostEquals(A) || C[g].almostEquals(A)) {
                  Z = !0;
                  break;
                }
              Z || C.push(A.clone());
            }
          }
        }
        computeNormals() {
          this.faceNormals.length = this.faces.length;
          for (let g = 0; g < this.faces.length; g++) {
            for (let A = 0; A < this.faces[g].length; A++)
              if (!this.vertices[this.faces[g][A]])
                throw new Error(`Vertex ${this.faces[g][A]} not found!`);
            const I = this.faceNormals[g] || new w();
            this.getFaceNormal(g, I), I.negate(I), (this.faceNormals[g] = I);
            const C = this.vertices[this.faces[g][0]];
            if (I.dot(C) < 0) {
              console.error(
                `.faceNormals[${g}] = Vec3(${I.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`
              );
              for (let I = 0; I < this.faces[g].length; I++)
                console.warn(
                  `.vertices[${this.faces[g][I]}] = Vec3(${this.vertices[
                    this.faces[g][I]
                  ].toString()})`
                );
            }
          }
        }
        getFaceNormal(g, I) {
          const C = this.faces[g],
            A = this.vertices[C[0]],
            G = this.vertices[C[1]],
            b = this.vertices[C[2]];
          U.computeNormal(A, G, b, I);
        }
        static computeNormal(g, I, C, A) {
          const G = new w(),
            b = new w();
          I.vsub(g, b),
            C.vsub(I, G),
            G.cross(b, A),
            A.isZero() || A.normalize();
        }
        clipAgainstHull(g, I, C, A, G, b, l, Z, c) {
          const B = new w();
          let o = -1,
            d = -Number.MAX_VALUE;
          for (let s = 0; s < C.faces.length; s++) {
            B.copy(C.faceNormals[s]), G.vmult(B, B);
            const g = B.dot(b);
            g > d && ((d = g), (o = s));
          }
          const i = [];
          for (let s = 0; s < C.faces[o].length; s++) {
            const g = C.vertices[C.faces[o][s]],
              I = new w();
            I.copy(g), G.vmult(I, I), A.vadd(I, I), i.push(I);
          }
          o >= 0 && this.clipFaceAgainstHull(b, g, I, i, l, Z, c);
        }
        findSeparatingAxis(g, I, C, A, G, b, l, Z) {
          const c = new w(),
            B = new w(),
            o = new w(),
            d = new w(),
            i = new w(),
            s = new w();
          let m = Number.MAX_VALUE;
          const W = this;
          if (W.uniqueAxes)
            for (let h = 0; h !== W.uniqueAxes.length; h++) {
              C.vmult(W.uniqueAxes[h], c);
              const l = W.testSepAxis(c, g, I, C, A, G);
              if (!1 === l) return !1;
              l < m && ((m = l), b.copy(c));
            }
          else {
            const Z = l ? l.length : W.faces.length;
            for (let B = 0; B < Z; B++) {
              const Z = l ? l[B] : B;
              c.copy(W.faceNormals[Z]), C.vmult(c, c);
              const o = W.testSepAxis(c, g, I, C, A, G);
              if (!1 === o) return !1;
              o < m && ((m = o), b.copy(c));
            }
          }
          if (g.uniqueAxes)
            for (let h = 0; h !== g.uniqueAxes.length; h++) {
              G.vmult(g.uniqueAxes[h], B);
              const l = W.testSepAxis(B, g, I, C, A, G);
              if (!1 === l) return !1;
              l < m && ((m = l), b.copy(B));
            }
          else {
            const l = Z ? Z.length : g.faces.length;
            for (let c = 0; c < l; c++) {
              const l = Z ? Z[c] : c;
              B.copy(g.faceNormals[l]), G.vmult(B, B);
              const o = W.testSepAxis(B, g, I, C, A, G);
              if (!1 === o) return !1;
              o < m && ((m = o), b.copy(B));
            }
          }
          for (let h = 0; h !== W.uniqueEdges.length; h++) {
            C.vmult(W.uniqueEdges[h], d);
            for (let l = 0; l !== g.uniqueEdges.length; l++)
              if (
                (G.vmult(g.uniqueEdges[l], i), d.cross(i, s), !s.almostZero())
              ) {
                s.normalize();
                const l = W.testSepAxis(s, g, I, C, A, G);
                if (!1 === l) return !1;
                l < m && ((m = l), b.copy(s));
              }
          }
          return A.vsub(I, o), o.dot(b) > 0 && b.negate(b), !0;
        }
        testSepAxis(g, I, C, A, G, b) {
          U.project(this, g, C, A, r), U.project(I, g, G, b, j);
          const l = r[0],
            Z = r[1],
            c = j[0],
            B = j[1];
          if (l < B || c < Z) return !1;
          const o = l - B,
            d = c - Z;
          return o < d ? o : d;
        }
        calculateLocalInertia(g, I) {
          const C = new w(),
            A = new w();
          this.computeLocalAABB(A, C);
          const G = C.x - A.x,
            b = C.y - A.y,
            l = C.z - A.z;
          (I.x = (1 / 12) * g * (2 * b * 2 * b + 2 * l * 2 * l)),
            (I.y = (1 / 12) * g * (2 * G * 2 * G + 2 * l * 2 * l)),
            (I.z = (1 / 12) * g * (2 * b * 2 * b + 2 * G * 2 * G));
        }
        getPlaneConstantOfFace(g) {
          const I = this.faces[g],
            C = this.faceNormals[g],
            A = this.vertices[I[0]];
          return -C.dot(A);
        }
        clipFaceAgainstHull(g, I, C, A, G, b, l) {
          const Z = new w(),
            c = new w(),
            B = new w(),
            o = new w(),
            d = new w(),
            i = new w(),
            s = new w(),
            m = new w(),
            W = this,
            h = A,
            a = [];
          let V = -1,
            y = Number.MAX_VALUE;
          for (let n = 0; n < W.faces.length; n++) {
            Z.copy(W.faceNormals[n]), C.vmult(Z, Z);
            const I = Z.dot(g);
            I < y && ((y = I), (V = n));
          }
          if (V < 0) return;
          const X = W.faces[V];
          X.connectedFaces = [];
          for (let n = 0; n < W.faces.length; n++)
            for (let g = 0; g < W.faces[n].length; g++)
              -1 !== X.indexOf(W.faces[n][g]) &&
                n !== V &&
                -1 === X.connectedFaces.indexOf(n) &&
                X.connectedFaces.push(n);
          const Y = X.length;
          for (let n = 0; n < Y; n++) {
            const g = W.vertices[X[n]],
              A = W.vertices[X[(n + 1) % Y]];
            g.vsub(A, c),
              B.copy(c),
              C.vmult(B, B),
              I.vadd(B, B),
              o.copy(this.faceNormals[V]),
              C.vmult(o, o),
              I.vadd(o, o),
              B.cross(o, d),
              d.negate(d),
              i.copy(g),
              C.vmult(i, i),
              I.vadd(i, i);
            const G = X.connectedFaces[n];
            s.copy(this.faceNormals[G]);
            const b = this.getPlaneConstantOfFace(G);
            m.copy(s), C.vmult(m, m);
            const l = b - m.dot(I);
            for (this.clipFaceAgainstPlane(h, a, m, l); h.length; ) h.shift();
            for (; a.length; ) h.push(a.shift());
          }
          s.copy(this.faceNormals[V]);
          const K = this.getPlaneConstantOfFace(V);
          m.copy(s), C.vmult(m, m);
          const u = K - m.dot(I);
          for (let n = 0; n < h.length; n++) {
            let g = m.dot(h[n]) + u;
            if (
              (g <= G &&
                (console.log(`clamped: depth=${g} to minDist=${G}`), (g = G)),
              g <= b)
            ) {
              const I = h[n];
              if (g <= 1e-6) {
                const C = { point: I, normal: m, depth: g };
                l.push(C);
              }
            }
          }
        }
        clipFaceAgainstPlane(g, I, C, A) {
          let G, b;
          const l = g.length;
          if (l < 2) return I;
          let Z = g[g.length - 1],
            c = g[0];
          G = C.dot(Z) + A;
          for (let B = 0; B < l; B++) {
            if (((c = g[B]), (b = C.dot(c) + A), G < 0))
              if (b < 0) {
                const g = new w();
                g.copy(c), I.push(g);
              } else {
                const g = new w();
                Z.lerp(c, G / (G - b), g), I.push(g);
              }
            else if (b < 0) {
              const g = new w();
              Z.lerp(c, G / (G - b), g), I.push(g), I.push(c);
            }
            (Z = c), (G = b);
          }
          return I;
        }
        computeWorldVertices(g, I) {
          for (; this.worldVertices.length < this.vertices.length; )
            this.worldVertices.push(new w());
          const C = this.vertices,
            A = this.worldVertices;
          for (let G = 0; G !== this.vertices.length; G++)
            I.vmult(C[G], A[G]), g.vadd(A[G], A[G]);
          this.worldVerticesNeedsUpdate = !1;
        }
        computeLocalAABB(g, I) {
          const C = this.vertices;
          g.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
            I.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          for (let A = 0; A < this.vertices.length; A++) {
            const G = C[A];
            G.x < g.x ? (g.x = G.x) : G.x > I.x && (I.x = G.x),
              G.y < g.y ? (g.y = G.y) : G.y > I.y && (I.y = G.y),
              G.z < g.z ? (g.z = G.z) : G.z > I.z && (I.z = G.z);
          }
        }
        computeWorldFaceNormals(g) {
          const I = this.faceNormals.length;
          for (; this.worldFaceNormals.length < I; )
            this.worldFaceNormals.push(new w());
          const C = this.faceNormals,
            A = this.worldFaceNormals;
          for (let G = 0; G !== I; G++) g.vmult(C[G], A[G]);
          this.worldFaceNormalsNeedsUpdate = !1;
        }
        updateBoundingSphereRadius() {
          let g = 0;
          const I = this.vertices;
          for (let C = 0; C !== I.length; C++) {
            const A = I[C].lengthSquared();
            A > g && (g = A);
          }
          this.boundingSphereRadius = Math.sqrt(g);
        }
        calculateWorldAABB(g, I, C, A) {
          const G = this.vertices;
          let b,
            l,
            Z,
            c,
            B,
            o,
            d = new w();
          for (let i = 0; i < G.length; i++) {
            d.copy(G[i]), I.vmult(d, d), g.vadd(d, d);
            const C = d;
            (void 0 === b || C.x < b) && (b = C.x),
              (void 0 === c || C.x > c) && (c = C.x),
              (void 0 === l || C.y < l) && (l = C.y),
              (void 0 === B || C.y > B) && (B = C.y),
              (void 0 === Z || C.z < Z) && (Z = C.z),
              (void 0 === o || C.z > o) && (o = C.z);
          }
          C.set(b, l, Z), A.set(c, B, o);
        }
        volume() {
          return (4 * Math.PI * this.boundingSphereRadius) / 3;
        }
        getAveragePointLocal(g) {
          void 0 === g && (g = new w());
          const I = this.vertices;
          for (let C = 0; C < I.length; C++) g.vadd(I[C], g);
          return g.scale(1 / I.length, g), g;
        }
        transformAllPoints(g, I) {
          const C = this.vertices.length,
            A = this.vertices;
          if (I) {
            for (let g = 0; g < C; g++) {
              const C = A[g];
              I.vmult(C, C);
            }
            for (let g = 0; g < this.faceNormals.length; g++) {
              const C = this.faceNormals[g];
              I.vmult(C, C);
            }
          }
          if (g)
            for (let G = 0; G < C; G++) {
              const I = A[G];
              I.vadd(g, I);
            }
        }
        pointIsInside(g) {
          const I = this.vertices,
            C = this.faces,
            A = this.faceNormals,
            G = new w();
          this.getAveragePointLocal(G);
          for (let b = 0; b < this.faces.length; b++) {
            let l = A[b];
            const Z = I[C[b][0]],
              c = new w();
            g.vsub(Z, c);
            const B = l.dot(c),
              o = new w();
            G.vsub(Z, o);
            const d = l.dot(o);
            if ((B < 0 && d > 0) || (B > 0 && d < 0)) return !1;
          }
          return -1;
        }
        static project(g, I, C, A, G) {
          const b = g.vertices.length,
            l = D;
          let Z = 0,
            c = 0;
          const B = T,
            o = g.vertices;
          B.setZero(),
            x.vectorToLocalFrame(C, A, I, l),
            x.pointToLocalFrame(C, A, B, B);
          const d = B.dot(l);
          c = Z = o[0].dot(l);
          for (let i = 1; i < b; i++) {
            const g = o[i].dot(l);
            g > Z && (Z = g), g < c && (c = g);
          }
          if (((c -= d), (Z -= d), c > Z)) {
            const g = c;
            (c = Z), (Z = g);
          }
          (G[0] = Z), (G[1] = c);
        }
      }
      const r = [],
        j = [];
      new w();
      const D = new w(),
        T = new w();
      class E extends Q {
        constructor(g) {
          super({ type: Q.types.BOX }),
            (this.halfExtents = g),
            (this.convexPolyhedronRepresentation = null),
            this.updateConvexPolyhedronRepresentation(),
            this.updateBoundingSphereRadius();
        }
        updateConvexPolyhedronRepresentation() {
          const g = this.halfExtents.x,
            I = this.halfExtents.y,
            C = this.halfExtents.z,
            A = w,
            G = [
              new A(-g, -I, -C),
              new A(g, -I, -C),
              new A(g, I, -C),
              new A(-g, I, -C),
              new A(-g, -I, C),
              new A(g, -I, C),
              new A(g, I, C),
              new A(-g, I, C),
            ],
            b = [new A(0, 0, 1), new A(0, 1, 0), new A(1, 0, 0)],
            l = new U({
              vertices: G,
              faces: [
                [3, 2, 1, 0],
                [4, 5, 6, 7],
                [5, 4, 0, 1],
                [2, 3, 7, 6],
                [0, 4, 7, 3],
                [1, 2, 6, 5],
              ],
              axes: b,
            });
          (this.convexPolyhedronRepresentation = l),
            (l.material = this.material);
        }
        calculateLocalInertia(g, I) {
          return (
            void 0 === I && (I = new w()),
            E.calculateInertia(this.halfExtents, g, I),
            I
          );
        }
        static calculateInertia(g, I, C) {
          const A = g;
          (C.x = (1 / 12) * I * (2 * A.y * 2 * A.y + 2 * A.z * 2 * A.z)),
            (C.y = (1 / 12) * I * (2 * A.x * 2 * A.x + 2 * A.z * 2 * A.z)),
            (C.z = (1 / 12) * I * (2 * A.y * 2 * A.y + 2 * A.x * 2 * A.x));
        }
        getSideNormals(g, I) {
          const C = g,
            A = this.halfExtents;
          if (
            (C[0].set(A.x, 0, 0),
            C[1].set(0, A.y, 0),
            C[2].set(0, 0, A.z),
            C[3].set(-A.x, 0, 0),
            C[4].set(0, -A.y, 0),
            C[5].set(0, 0, -A.z),
            void 0 !== I)
          )
            for (let G = 0; G !== C.length; G++) I.vmult(C[G], C[G]);
          return C;
        }
        volume() {
          return (
            8 * this.halfExtents.x * this.halfExtents.y * this.halfExtents.z
          );
        }
        updateBoundingSphereRadius() {
          this.boundingSphereRadius = this.halfExtents.length();
        }
        forEachWorldCorner(g, I, C) {
          const A = this.halfExtents,
            G = [
              [A.x, A.y, A.z],
              [-A.x, A.y, A.z],
              [-A.x, -A.y, A.z],
              [-A.x, -A.y, -A.z],
              [A.x, -A.y, -A.z],
              [A.x, A.y, -A.z],
              [-A.x, A.y, -A.z],
              [A.x, -A.y, A.z],
            ];
          for (let b = 0; b < G.length; b++)
            O.set(G[b][0], G[b][1], G[b][2]),
              I.vmult(O, O),
              g.vadd(O, O),
              C(O.x, O.y, O.z);
        }
        calculateWorldAABB(g, I, C, A) {
          const G = this.halfExtents;
          P[0].set(G.x, G.y, G.z),
            P[1].set(-G.x, G.y, G.z),
            P[2].set(-G.x, -G.y, G.z),
            P[3].set(-G.x, -G.y, -G.z),
            P[4].set(G.x, -G.y, -G.z),
            P[5].set(G.x, G.y, -G.z),
            P[6].set(-G.x, G.y, -G.z),
            P[7].set(G.x, -G.y, G.z);
          const b = P[0];
          I.vmult(b, b), g.vadd(b, b), A.copy(b), C.copy(b);
          for (let l = 1; l < 8; l++) {
            const G = P[l];
            I.vmult(G, G), g.vadd(G, G);
            const b = G.x,
              Z = G.y,
              c = G.z;
            b > A.x && (A.x = b),
              Z > A.y && (A.y = Z),
              c > A.z && (A.z = c),
              b < C.x && (C.x = b),
              Z < C.y && (C.y = Z),
              c < C.z && (C.z = c);
          }
        }
      }
      const O = new w(),
        P = [
          new w(),
          new w(),
          new w(),
          new w(),
          new w(),
          new w(),
          new w(),
          new w(),
        ],
        q = 1,
        f = 2,
        _ = 4,
        $ = 0,
        gg = 1,
        Ig = 2;
      class Cg extends class {
        addEventListener(g, I) {
          void 0 === this._listeners && (this._listeners = {});
          const C = this._listeners;
          return (
            void 0 === C[g] && (C[g] = []),
            C[g].includes(I) || C[g].push(I),
            this
          );
        }
        hasEventListener(g, I) {
          if (void 0 === this._listeners) return !1;
          const C = this._listeners;
          return !(void 0 === C[g] || !C[g].includes(I));
        }
        hasAnyEventListener(g) {
          if (void 0 === this._listeners) return !1;
          return void 0 !== this._listeners[g];
        }
        removeEventListener(g, I) {
          if (void 0 === this._listeners) return this;
          const C = this._listeners;
          if (void 0 === C[g]) return this;
          const A = C[g].indexOf(I);
          return -1 !== A && C[g].splice(A, 1), this;
        }
        dispatchEvent(g) {
          if (void 0 === this._listeners) return this;
          const I = this._listeners[g.type];
          if (void 0 !== I) {
            g.target = this;
            for (let C = 0, A = I.length; C < A; C++) I[C].call(this, g);
          }
          return this;
        }
      } {
        constructor(g) {
          void 0 === g && (g = {}),
            super(),
            (this.id = Cg.idCounter++),
            (this.index = -1),
            (this.world = null),
            (this.vlambda = new w()),
            (this.collisionFilterGroup =
              "number" === typeof g.collisionFilterGroup
                ? g.collisionFilterGroup
                : 1),
            (this.collisionFilterMask =
              "number" === typeof g.collisionFilterMask
                ? g.collisionFilterMask
                : -1),
            (this.collisionResponse =
              "boolean" !== typeof g.collisionResponse || g.collisionResponse),
            (this.position = new w()),
            (this.previousPosition = new w()),
            (this.interpolatedPosition = new w()),
            (this.initPosition = new w()),
            g.position &&
              (this.position.copy(g.position),
              this.previousPosition.copy(g.position),
              this.interpolatedPosition.copy(g.position),
              this.initPosition.copy(g.position)),
            (this.velocity = new w()),
            g.velocity && this.velocity.copy(g.velocity),
            (this.initVelocity = new w()),
            (this.force = new w());
          const I = "number" === typeof g.mass ? g.mass : 0;
          (this.mass = I),
            (this.invMass = I > 0 ? 1 / I : 0),
            (this.material = g.material || null),
            (this.linearDamping =
              "number" === typeof g.linearDamping ? g.linearDamping : 0.01),
            (this.type = I <= 0 ? Cg.STATIC : Cg.DYNAMIC),
            typeof g.type === typeof Cg.STATIC && (this.type = g.type),
            (this.allowSleep =
              "undefined" === typeof g.allowSleep || g.allowSleep),
            (this.sleepState = Cg.AWAKE),
            (this.sleepSpeedLimit =
              "undefined" !== typeof g.sleepSpeedLimit
                ? g.sleepSpeedLimit
                : 0.1),
            (this.sleepTimeLimit =
              "undefined" !== typeof g.sleepTimeLimit ? g.sleepTimeLimit : 1),
            (this.timeLastSleepy = 0),
            (this.wakeUpAfterNarrowphase = !1),
            (this.torque = new w()),
            (this.quaternion = new k()),
            (this.initQuaternion = new k()),
            (this.previousQuaternion = new k()),
            (this.interpolatedQuaternion = new k()),
            g.quaternion &&
              (this.quaternion.copy(g.quaternion),
              this.initQuaternion.copy(g.quaternion),
              this.previousQuaternion.copy(g.quaternion),
              this.interpolatedQuaternion.copy(g.quaternion)),
            (this.angularVelocity = new w()),
            g.angularVelocity && this.angularVelocity.copy(g.angularVelocity),
            (this.initAngularVelocity = new w()),
            (this.shapes = []),
            (this.shapeOffsets = []),
            (this.shapeOrientations = []),
            (this.inertia = new w()),
            (this.invInertia = new w()),
            (this.invInertiaWorld = new H()),
            (this.invMassSolve = 0),
            (this.invInertiaSolve = new w()),
            (this.invInertiaWorldSolve = new H()),
            (this.fixedRotation =
              "undefined" !== typeof g.fixedRotation && g.fixedRotation),
            (this.angularDamping =
              "undefined" !== typeof g.angularDamping
                ? g.angularDamping
                : 0.01),
            (this.linearFactor = new w(1, 1, 1)),
            g.linearFactor && this.linearFactor.copy(g.linearFactor),
            (this.angularFactor = new w(1, 1, 1)),
            g.angularFactor && this.angularFactor.copy(g.angularFactor),
            (this.aabb = new F()),
            (this.aabbNeedsUpdate = !0),
            (this.boundingRadius = 0),
            (this.wlambda = new w()),
            (this.isTrigger = Boolean(g.isTrigger)),
            g.shape && this.addShape(g.shape),
            this.updateMassProperties();
        }
        wakeUp() {
          const g = this.sleepState;
          (this.sleepState = Cg.AWAKE),
            (this.wakeUpAfterNarrowphase = !1),
            g === Cg.SLEEPING && this.dispatchEvent(Cg.wakeupEvent);
        }
        sleep() {
          (this.sleepState = Cg.SLEEPING),
            this.velocity.set(0, 0, 0),
            this.angularVelocity.set(0, 0, 0),
            (this.wakeUpAfterNarrowphase = !1);
        }
        sleepTick(g) {
          if (this.allowSleep) {
            const I = this.sleepState,
              C =
                this.velocity.lengthSquared() +
                this.angularVelocity.lengthSquared(),
              A = this.sleepSpeedLimit ** 2;
            I === Cg.AWAKE && C < A
              ? ((this.sleepState = Cg.SLEEPY),
                (this.timeLastSleepy = g),
                this.dispatchEvent(Cg.sleepyEvent))
              : I === Cg.SLEEPY && C > A
              ? this.wakeUp()
              : I === Cg.SLEEPY &&
                g - this.timeLastSleepy > this.sleepTimeLimit &&
                (this.sleep(), this.dispatchEvent(Cg.sleepEvent));
          }
        }
        updateSolveMassProperties() {
          this.sleepState === Cg.SLEEPING || this.type === Cg.KINEMATIC
            ? ((this.invMassSolve = 0),
              this.invInertiaSolve.setZero(),
              this.invInertiaWorldSolve.setZero())
            : ((this.invMassSolve = this.invMass),
              this.invInertiaSolve.copy(this.invInertia),
              this.invInertiaWorldSolve.copy(this.invInertiaWorld));
        }
        pointToLocalFrame(g, I) {
          return (
            void 0 === I && (I = new w()),
            g.vsub(this.position, I),
            this.quaternion.conjugate().vmult(I, I),
            I
          );
        }
        vectorToLocalFrame(g, I) {
          return (
            void 0 === I && (I = new w()),
            this.quaternion.conjugate().vmult(g, I),
            I
          );
        }
        pointToWorldFrame(g, I) {
          return (
            void 0 === I && (I = new w()),
            this.quaternion.vmult(g, I),
            I.vadd(this.position, I),
            I
          );
        }
        vectorToWorldFrame(g, I) {
          return void 0 === I && (I = new w()), this.quaternion.vmult(g, I), I;
        }
        addShape(g, I, C) {
          const A = new w(),
            G = new k();
          return (
            I && A.copy(I),
            C && G.copy(C),
            this.shapes.push(g),
            this.shapeOffsets.push(A),
            this.shapeOrientations.push(G),
            this.updateMassProperties(),
            this.updateBoundingRadius(),
            (this.aabbNeedsUpdate = !0),
            (g.body = this),
            this
          );
        }
        removeShape(g) {
          const I = this.shapes.indexOf(g);
          return -1 === I
            ? (console.warn("Shape does not belong to the body"), this)
            : (this.shapes.splice(I, 1),
              this.shapeOffsets.splice(I, 1),
              this.shapeOrientations.splice(I, 1),
              this.updateMassProperties(),
              this.updateBoundingRadius(),
              (this.aabbNeedsUpdate = !0),
              (g.body = null),
              this);
        }
        updateBoundingRadius() {
          const g = this.shapes,
            I = this.shapeOffsets,
            C = g.length;
          let A = 0;
          for (let G = 0; G !== C; G++) {
            const C = g[G];
            C.updateBoundingSphereRadius();
            const b = I[G].length(),
              l = C.boundingSphereRadius;
            b + l > A && (A = b + l);
          }
          this.boundingRadius = A;
        }
        updateAABB() {
          const g = this.shapes,
            I = this.shapeOffsets,
            C = this.shapeOrientations,
            A = g.length,
            G = Ag,
            b = Gg,
            l = this.quaternion,
            Z = this.aabb,
            c = bg;
          for (let B = 0; B !== A; B++) {
            const A = g[B];
            l.vmult(I[B], G),
              G.vadd(this.position, G),
              l.mult(C[B], b),
              A.calculateWorldAABB(G, b, c.lowerBound, c.upperBound),
              0 === B ? Z.copy(c) : Z.extend(c);
          }
          this.aabbNeedsUpdate = !1;
        }
        updateInertiaWorld(g) {
          const I = this.invInertia;
          if (I.x !== I.y || I.y !== I.z || g) {
            const g = lg,
              C = Zg;
            g.setRotationFromQuaternion(this.quaternion),
              g.transpose(C),
              g.scale(I, g),
              g.mmult(C, this.invInertiaWorld);
          } else;
        }
        applyForce(g, I) {
          if ((void 0 === I && (I = new w()), this.type !== Cg.DYNAMIC)) return;
          this.sleepState === Cg.SLEEPING && this.wakeUp();
          const C = cg;
          I.cross(g, C),
            this.force.vadd(g, this.force),
            this.torque.vadd(C, this.torque);
        }
        applyLocalForce(g, I) {
          if ((void 0 === I && (I = new w()), this.type !== Cg.DYNAMIC)) return;
          const C = Bg,
            A = og;
          this.vectorToWorldFrame(g, C),
            this.vectorToWorldFrame(I, A),
            this.applyForce(C, A);
        }
        applyTorque(g) {
          this.type === Cg.DYNAMIC &&
            (this.sleepState === Cg.SLEEPING && this.wakeUp(),
            this.torque.vadd(g, this.torque));
        }
        applyImpulse(g, I) {
          if ((void 0 === I && (I = new w()), this.type !== Cg.DYNAMIC)) return;
          this.sleepState === Cg.SLEEPING && this.wakeUp();
          const C = I,
            A = dg;
          A.copy(g),
            A.scale(this.invMass, A),
            this.velocity.vadd(A, this.velocity);
          const G = ig;
          C.cross(g, G),
            this.invInertiaWorld.vmult(G, G),
            this.angularVelocity.vadd(G, this.angularVelocity);
        }
        applyLocalImpulse(g, I) {
          if ((void 0 === I && (I = new w()), this.type !== Cg.DYNAMIC)) return;
          const C = sg,
            A = mg;
          this.vectorToWorldFrame(g, C),
            this.vectorToWorldFrame(I, A),
            this.applyImpulse(C, A);
        }
        updateMassProperties() {
          const g = Wg;
          this.invMass = this.mass > 0 ? 1 / this.mass : 0;
          const I = this.inertia,
            C = this.fixedRotation;
          this.updateAABB(),
            g.set(
              (this.aabb.upperBound.x - this.aabb.lowerBound.x) / 2,
              (this.aabb.upperBound.y - this.aabb.lowerBound.y) / 2,
              (this.aabb.upperBound.z - this.aabb.lowerBound.z) / 2
            ),
            E.calculateInertia(g, this.mass, I),
            this.invInertia.set(
              I.x > 0 && !C ? 1 / I.x : 0,
              I.y > 0 && !C ? 1 / I.y : 0,
              I.z > 0 && !C ? 1 / I.z : 0
            ),
            this.updateInertiaWorld(!0);
        }
        getVelocityAtWorldPoint(g, I) {
          const C = new w();
          return (
            g.vsub(this.position, C),
            this.angularVelocity.cross(C, I),
            this.velocity.vadd(I, I),
            I
          );
        }
        integrate(g, I, C) {
          if (
            (this.previousPosition.copy(this.position),
            this.previousQuaternion.copy(this.quaternion),
            (this.type !== Cg.DYNAMIC && this.type !== Cg.KINEMATIC) ||
              this.sleepState === Cg.SLEEPING)
          )
            return;
          const A = this.velocity,
            G = this.angularVelocity,
            b = this.position,
            l = this.force,
            Z = this.torque,
            c = this.quaternion,
            B = this.invMass,
            o = this.invInertiaWorld,
            d = this.linearFactor,
            i = B * g;
          (A.x += l.x * i * d.x),
            (A.y += l.y * i * d.y),
            (A.z += l.z * i * d.z);
          const s = o.elements,
            m = this.angularFactor,
            W = Z.x * m.x,
            h = Z.y * m.y,
            a = Z.z * m.z;
          (G.x += g * (s[0] * W + s[1] * h + s[2] * a)),
            (G.y += g * (s[3] * W + s[4] * h + s[5] * a)),
            (G.z += g * (s[6] * W + s[7] * h + s[8] * a)),
            (b.x += A.x * g),
            (b.y += A.y * g),
            (b.z += A.z * g),
            c.integrate(this.angularVelocity, g, this.angularFactor, c),
            I && (C ? c.normalizeFast() : c.normalize()),
            (this.aabbNeedsUpdate = !0),
            this.updateInertiaWorld();
        }
      }
      (Cg.idCounter = 0),
        (Cg.COLLIDE_EVENT_NAME = "collide"),
        (Cg.DYNAMIC = q),
        (Cg.STATIC = f),
        (Cg.KINEMATIC = _),
        (Cg.AWAKE = $),
        (Cg.SLEEPY = gg),
        (Cg.SLEEPING = Ig),
        (Cg.wakeupEvent = { type: "wakeup" }),
        (Cg.sleepyEvent = { type: "sleepy" }),
        (Cg.sleepEvent = { type: "sleep" });
      const Ag = new w(),
        Gg = new k(),
        bg = new F(),
        lg = new H(),
        Zg = new H();
      new H();
      const cg = new w(),
        Bg = new w(),
        og = new w(),
        dg = new w(),
        ig = new w(),
        sg = new w(),
        mg = new w(),
        Wg = new w();
      new w(), new w(), new k(), new w(), new w(), new w(), new w();
      class hg {
        constructor() {
          (this.rayFromWorld = new w()),
            (this.rayToWorld = new w()),
            (this.hitNormalWorld = new w()),
            (this.hitPointWorld = new w()),
            (this.hasHit = !1),
            (this.shape = null),
            (this.body = null),
            (this.hitFaceIndex = -1),
            (this.distance = -1),
            (this.shouldStop = !1);
        }
        reset() {
          this.rayFromWorld.setZero(),
            this.rayToWorld.setZero(),
            this.hitNormalWorld.setZero(),
            this.hitPointWorld.setZero(),
            (this.hasHit = !1),
            (this.shape = null),
            (this.body = null),
            (this.hitFaceIndex = -1),
            (this.distance = -1),
            (this.shouldStop = !1);
        }
        abort() {
          this.shouldStop = !0;
        }
        set(g, I, C, A, G, b, l) {
          this.rayFromWorld.copy(g),
            this.rayToWorld.copy(I),
            this.hitNormalWorld.copy(C),
            this.hitPointWorld.copy(A),
            (this.shape = G),
            (this.body = b),
            (this.distance = l);
        }
      }
      let ag, Vg, yg, Xg, Yg, Kg, ug;
      const ng = 1,
        pg = 2,
        Rg = 4;
      (ag = Q.types.SPHERE),
        (Vg = Q.types.PLANE),
        (yg = Q.types.BOX),
        (Xg = Q.types.CYLINDER),
        (Yg = Q.types.CONVEXPOLYHEDRON),
        (Kg = Q.types.HEIGHTFIELD),
        (ug = Q.types.TRIMESH);
      class Hg {
        get [ag]() {
          return this._intersectSphere;
        }
        get [Vg]() {
          return this._intersectPlane;
        }
        get [yg]() {
          return this._intersectBox;
        }
        get [Xg]() {
          return this._intersectConvex;
        }
        get [Yg]() {
          return this._intersectConvex;
        }
        get [Kg]() {
          return this._intersectHeightfield;
        }
        get [ug]() {
          return this._intersectTrimesh;
        }
        constructor(g, I) {
          void 0 === g && (g = new w()),
            void 0 === I && (I = new w()),
            (this.from = g.clone()),
            (this.to = I.clone()),
            (this.direction = new w()),
            (this.precision = 1e-4),
            (this.checkCollisionResponse = !0),
            (this.skipBackfaces = !1),
            (this.collisionFilterMask = -1),
            (this.collisionFilterGroup = -1),
            (this.mode = Hg.ANY),
            (this.result = new hg()),
            (this.hasHit = !1),
            (this.callback = (g) => {});
        }
        intersectWorld(g, I) {
          return (
            (this.mode = I.mode || Hg.ANY),
            (this.result = I.result || new hg()),
            (this.skipBackfaces = !!I.skipBackfaces),
            (this.collisionFilterMask =
              "undefined" !== typeof I.collisionFilterMask
                ? I.collisionFilterMask
                : -1),
            (this.collisionFilterGroup =
              "undefined" !== typeof I.collisionFilterGroup
                ? I.collisionFilterGroup
                : -1),
            (this.checkCollisionResponse =
              "undefined" === typeof I.checkCollisionResponse ||
              I.checkCollisionResponse),
            I.from && this.from.copy(I.from),
            I.to && this.to.copy(I.to),
            (this.callback = I.callback || (() => {})),
            (this.hasHit = !1),
            this.result.reset(),
            this.updateDirection(),
            this.getAABB(eg),
            (wg.length = 0),
            g.broadphase.aabbQuery(g, eg, wg),
            this.intersectBodies(wg),
            this.hasHit
          );
        }
        intersectBody(g, I) {
          I && ((this.result = I), this.updateDirection());
          const C = this.checkCollisionResponse;
          if (C && !g.collisionResponse) return;
          if (
            0 === (this.collisionFilterGroup & g.collisionFilterMask) ||
            0 === (g.collisionFilterGroup & this.collisionFilterMask)
          )
            return;
          const A = vg,
            G = Fg;
          for (let b = 0, l = g.shapes.length; b < l; b++) {
            const I = g.shapes[b];
            if (
              (!C || I.collisionResponse) &&
              (g.quaternion.mult(g.shapeOrientations[b], G),
              g.quaternion.vmult(g.shapeOffsets[b], A),
              A.vadd(g.position, A),
              this.intersectShape(I, G, A, g),
              this.result.shouldStop)
            )
              break;
          }
        }
        intersectBodies(g, I) {
          I && ((this.result = I), this.updateDirection());
          for (let C = 0, A = g.length; !this.result.shouldStop && C < A; C++)
            this.intersectBody(g[C]);
        }
        updateDirection() {
          this.to.vsub(this.from, this.direction), this.direction.normalize();
        }
        intersectShape(g, I, C, A) {
          if (
            (function (g, I, C) {
              C.vsub(g, gI);
              const A = gI.dot(I);
              I.scale(A, II), II.vadd(g, II);
              return C.distanceTo(II);
            })(this.from, this.direction, C) > g.boundingSphereRadius
          )
            return;
          const G = this[g.type];
          G && G.call(this, g, I, C, A, g);
        }
        _intersectBox(g, I, C, A, G) {
          return this._intersectConvex(
            g.convexPolyhedronRepresentation,
            I,
            C,
            A,
            G
          );
        }
        _intersectPlane(g, I, C, A, G) {
          const b = this.from,
            l = this.to,
            Z = this.direction,
            c = new w(0, 0, 1);
          I.vmult(c, c);
          const B = new w();
          b.vsub(C, B);
          const o = B.dot(c);
          l.vsub(C, B);
          if (o * B.dot(c) > 0) return;
          if (b.distanceTo(l) < o) return;
          const d = c.dot(Z);
          if (Math.abs(d) < this.precision) return;
          const i = new w(),
            s = new w(),
            m = new w();
          b.vsub(C, i);
          const W = -c.dot(i) / d;
          Z.scale(W, s), b.vadd(s, m), this.reportIntersection(c, m, G, A, -1);
        }
        getAABB(g) {
          const { lowerBound: I, upperBound: C } = g,
            A = this.to,
            G = this.from;
          (I.x = Math.min(A.x, G.x)),
            (I.y = Math.min(A.y, G.y)),
            (I.z = Math.min(A.z, G.z)),
            (C.x = Math.max(A.x, G.x)),
            (C.y = Math.max(A.y, G.y)),
            (C.z = Math.max(A.z, G.z));
        }
        _intersectHeightfield(g, I, C, A, G) {
          g.data, g.elementSize;
          const b = xg;
          b.from.copy(this.from),
            b.to.copy(this.to),
            x.pointToLocalFrame(C, I, b.from, b.from),
            x.pointToLocalFrame(C, I, b.to, b.to),
            b.updateDirection();
          const l = Mg;
          let Z, c, B, o;
          (Z = c = 0), (B = o = g.data.length - 1);
          const d = new F();
          b.getAABB(d),
            g.getIndexOfPosition(d.lowerBound.x, d.lowerBound.y, l, !0),
            (Z = Math.max(Z, l[0])),
            (c = Math.max(c, l[1])),
            g.getIndexOfPosition(d.upperBound.x, d.upperBound.y, l, !0),
            (B = Math.min(B, l[0] + 1)),
            (o = Math.min(o, l[1] + 1));
          for (let i = Z; i < B; i++)
            for (let l = c; l < o; l++) {
              if (this.result.shouldStop) return;
              if ((g.getAabbAtIndex(i, l, d), d.overlapsRay(b))) {
                if (
                  (g.getConvexTrianglePillar(i, l, !1),
                  x.pointToWorldFrame(C, I, g.pillarOffset, Qg),
                  this._intersectConvex(g.pillarConvex, I, Qg, A, G, Lg),
                  this.result.shouldStop)
                )
                  return;
                g.getConvexTrianglePillar(i, l, !0),
                  x.pointToWorldFrame(C, I, g.pillarOffset, Qg),
                  this._intersectConvex(g.pillarConvex, I, Qg, A, G, Lg);
              }
            }
        }
        _intersectSphere(g, I, C, A, G) {
          const b = this.from,
            l = this.to,
            Z = g.radius,
            c = (l.x - b.x) ** 2 + (l.y - b.y) ** 2 + (l.z - b.z) ** 2,
            B =
              2 *
              ((l.x - b.x) * (b.x - C.x) +
                (l.y - b.y) * (b.y - C.y) +
                (l.z - b.z) * (b.z - C.z)),
            o =
              B ** 2 -
              4 *
                c *
                ((b.x - C.x) ** 2 +
                  (b.y - C.y) ** 2 +
                  (b.z - C.z) ** 2 -
                  Z ** 2),
            d = Ug,
            i = rg;
          if (!(o < 0))
            if (0 === o)
              b.lerp(l, o, d),
                d.vsub(C, i),
                i.normalize(),
                this.reportIntersection(i, d, G, A, -1);
            else {
              const g = (-B - Math.sqrt(o)) / (2 * c),
                I = (-B + Math.sqrt(o)) / (2 * c);
              if (
                (g >= 0 &&
                  g <= 1 &&
                  (b.lerp(l, g, d),
                  d.vsub(C, i),
                  i.normalize(),
                  this.reportIntersection(i, d, G, A, -1)),
                this.result.shouldStop)
              )
                return;
              I >= 0 &&
                I <= 1 &&
                (b.lerp(l, I, d),
                d.vsub(C, i),
                i.normalize(),
                this.reportIntersection(i, d, G, A, -1));
            }
        }
        _intersectConvex(g, I, C, A, G, b) {
          const l = jg,
            Z = Dg,
            c = (b && b.faceList) || null,
            B = g.faces,
            o = g.vertices,
            d = g.faceNormals,
            i = this.direction,
            s = this.from,
            m = this.to,
            W = s.distanceTo(m),
            h = c ? c.length : B.length,
            a = this.result;
          for (let V = 0; !a.shouldStop && V < h; V++) {
            const g = c ? c[V] : V,
              b = B[g],
              m = d[g],
              h = I,
              y = C;
            Z.copy(o[b[0]]),
              h.vmult(Z, Z),
              Z.vadd(y, Z),
              Z.vsub(s, Z),
              h.vmult(m, l);
            const X = i.dot(l);
            if (Math.abs(X) < this.precision) continue;
            const Y = l.dot(Z) / X;
            if (!(Y < 0)) {
              i.scale(Y, Sg),
                Sg.vadd(s, Sg),
                zg.copy(o[b[0]]),
                h.vmult(zg, zg),
                y.vadd(zg, zg);
              for (let I = 1; !a.shouldStop && I < b.length - 1; I++) {
                kg.copy(o[b[I]]),
                  Jg.copy(o[b[I + 1]]),
                  h.vmult(kg, kg),
                  h.vmult(Jg, Jg),
                  y.vadd(kg, kg),
                  y.vadd(Jg, Jg);
                const C = Sg.distanceTo(s);
                (!Hg.pointInTriangle(Sg, zg, kg, Jg) &&
                  !Hg.pointInTriangle(Sg, kg, zg, Jg)) ||
                  C > W ||
                  this.reportIntersection(l, Sg, G, A, g);
              }
            }
          }
        }
        _intersectTrimesh(g, I, C, A, G, b) {
          const l = Tg,
            Z = _g,
            c = $g,
            B = Dg,
            o = Eg,
            d = Og,
            i = Pg,
            s = fg,
            m = qg,
            W = g.indices;
          g.vertices;
          const h = this.from,
            a = this.to,
            V = this.direction;
          c.position.copy(C),
            c.quaternion.copy(I),
            x.vectorToLocalFrame(C, I, V, o),
            x.pointToLocalFrame(C, I, h, d),
            x.pointToLocalFrame(C, I, a, i),
            (i.x *= g.scale.x),
            (i.y *= g.scale.y),
            (i.z *= g.scale.z),
            (d.x *= g.scale.x),
            (d.y *= g.scale.y),
            (d.z *= g.scale.z),
            i.vsub(d, o),
            o.normalize();
          const y = d.distanceSquared(i);
          g.tree.rayQuery(this, c, Z);
          for (
            let X = 0, Y = Z.length;
            !this.result.shouldStop && X !== Y;
            X++
          ) {
            const b = Z[X];
            g.getNormal(b, l), g.getVertex(W[3 * b], zg), zg.vsub(d, B);
            const c = o.dot(l),
              i = l.dot(B) / c;
            if (i < 0) continue;
            o.scale(i, Sg),
              Sg.vadd(d, Sg),
              g.getVertex(W[3 * b + 1], kg),
              g.getVertex(W[3 * b + 2], Jg);
            const h = Sg.distanceSquared(d);
            (!Hg.pointInTriangle(Sg, kg, zg, Jg) &&
              !Hg.pointInTriangle(Sg, zg, kg, Jg)) ||
              h > y ||
              (x.vectorToWorldFrame(I, l, m),
              x.pointToWorldFrame(C, I, Sg, s),
              this.reportIntersection(m, s, G, A, b));
          }
          Z.length = 0;
        }
        reportIntersection(g, I, C, A, G) {
          const b = this.from,
            l = this.to,
            Z = b.distanceTo(I),
            c = this.result;
          if (!(this.skipBackfaces && g.dot(this.direction) > 0))
            switch (
              ((c.hitFaceIndex = "undefined" !== typeof G ? G : -1), this.mode)
            ) {
              case Hg.ALL:
                (this.hasHit = !0),
                  c.set(b, l, g, I, C, A, Z),
                  (c.hasHit = !0),
                  this.callback(c);
                break;
              case Hg.CLOSEST:
                (Z < c.distance || !c.hasHit) &&
                  ((this.hasHit = !0),
                  (c.hasHit = !0),
                  c.set(b, l, g, I, C, A, Z));
                break;
              case Hg.ANY:
                (this.hasHit = !0),
                  (c.hasHit = !0),
                  c.set(b, l, g, I, C, A, Z),
                  (c.shouldStop = !0);
            }
        }
        static pointInTriangle(g, I, C, A) {
          A.vsub(I, gI), C.vsub(I, tg), g.vsub(I, Ng);
          const G = gI.dot(gI),
            b = gI.dot(tg),
            l = gI.dot(Ng),
            Z = tg.dot(tg),
            c = tg.dot(Ng);
          let B, o;
          return (
            (B = Z * l - b * c) >= 0 &&
            (o = G * c - b * l) >= 0 &&
            B + o < G * Z - b * b
          );
        }
      }
      (Hg.CLOSEST = ng), (Hg.ANY = pg), (Hg.ALL = Rg);
      const eg = new F(),
        wg = [],
        tg = new w(),
        Ng = new w(),
        vg = new w(),
        Fg = new k(),
        Sg = new w(),
        zg = new w(),
        kg = new w(),
        Jg = new w();
      new w(), new hg();
      const Lg = { faceList: [0] },
        Qg = new w(),
        xg = new Hg(),
        Mg = [],
        Ug = new w(),
        rg = new w(),
        jg = new w();
      new w(), new w();
      const Dg = new w(),
        Tg = new w(),
        Eg = new w(),
        Og = new w(),
        Pg = new w(),
        qg = new w(),
        fg = new w();
      new F();
      const _g = [],
        $g = new x(),
        gI = new w(),
        II = new w();
      new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w();
      class CI {
        constructor(g) {
          void 0 === g && (g = {});
          let I = "";
          "string" === typeof g && ((I = g), (g = {})),
            (this.name = I),
            (this.id = CI.idCounter++),
            (this.friction =
              "undefined" !== typeof g.friction ? g.friction : -1),
            (this.restitution =
              "undefined" !== typeof g.restitution ? g.restitution : -1);
        }
      }
      (CI.idCounter = 0),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new Hg(),
        new w(),
        new w(),
        new w(),
        new w(1, 0, 0),
        new w(0, 1, 0),
        new w(0, 0, 1),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w();
      new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w();
      new w();
      new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w();
      new w(), new F();
      new w(),
        new F(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new F(),
        new w(),
        new x(),
        new F();
      Q.types.SPHERE,
        Q.types.SPHERE,
        Q.types.PLANE,
        Q.types.BOX,
        Q.types.BOX,
        Q.types.SPHERE,
        Q.types.BOX,
        Q.types.PLANE,
        Q.types.BOX,
        Q.types.CONVEXPOLYHEDRON,
        Q.types.SPHERE,
        Q.types.CONVEXPOLYHEDRON,
        Q.types.PLANE,
        Q.types.CONVEXPOLYHEDRON,
        Q.types.BOX,
        Q.types.CONVEXPOLYHEDRON,
        Q.types.SPHERE,
        Q.types.HEIGHTFIELD,
        Q.types.BOX,
        Q.types.HEIGHTFIELD,
        Q.types.CONVEXPOLYHEDRON,
        Q.types.HEIGHTFIELD,
        Q.types.PARTICLE,
        Q.types.SPHERE,
        Q.types.PLANE,
        Q.types.PARTICLE,
        Q.types.BOX,
        Q.types.PARTICLE,
        Q.types.PARTICLE,
        Q.types.CONVEXPOLYHEDRON,
        Q.types.CYLINDER,
        Q.types.SPHERE,
        Q.types.CYLINDER,
        Q.types.PLANE,
        Q.types.CYLINDER,
        Q.types.BOX,
        Q.types.CYLINDER,
        Q.types.CONVEXPOLYHEDRON,
        Q.types.CYLINDER,
        Q.types.HEIGHTFIELD,
        Q.types.CYLINDER,
        Q.types.PARTICLE,
        Q.types.CYLINDER,
        Q.types.SPHERE,
        Q.types.TRIMESH,
        Q.types.PLANE,
        Q.types.TRIMESH,
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new k(),
        new k(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new F(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new k(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new w(),
        new F(),
        new Hg();
      const AI = globalThis.performance || {};
      if (!AI.now) {
        let g = Date.now();
        AI.timing &&
          AI.timing.navigationStart &&
          (g = AI.timing.navigationStart),
          (AI.now = () => Date.now() - g);
      }
      new w();
      const GI = (0, G.createContext)({}),
        bI = (0, G.createContext)(null),
        lI = new l.Vector3(),
        ZI = new l.Vector3(1, 1, 1),
        cI = new l.Quaternion(),
        BI = new l.Matrix4();
      function oI(g, I, C, A) {
        return void 0 !== g
          ? (BI.compose(
              lI.fromArray(I, 3 * g),
              cI.fromArray(C, 4 * g),
              A ? A.scale : ZI
            ),
            A && ((A.matrixAutoUpdate = !1), A.matrix.copy(BI)),
            BI)
          : BI.identity();
      }
      const dI = (g) => {
        let {
          allowSleep: I = !1,
          axisIndex: C = 0,
          broadphase: A = "Naive",
          children: c,
          defaultContactMaterial: B = { contactEquationStiffness: 1e6 },
          gravity: o = [0, -9.81, 0],
          isPaused: d = !1,
          iterations: i = 5,
          maxSubSteps: s = 10,
          quatNormalizeFast: m = !1,
          quatNormalizeSkip: W = 0,
          shouldInvalidate: h = !0,
          size: a = 1e3,
          solver: V = "GS",
          stepSize: y = 1 / 60,
          tolerance: X = 0.001,
        } = g;
        const { invalidate: Y } = (0, b.w)(),
          [K] = (0, G.useState)(
            () =>
              new R({
                allowSleep: I,
                axisIndex: C,
                broadphase: A,
                defaultContactMaterial: B,
                gravity: o,
                iterations: i,
                quatNormalizeFast: m,
                quatNormalizeSkip: W,
                size: a,
                solver: V,
                tolerance: X,
              })
          ),
          [u] = (0, G.useState)({}),
          [n] = (0, G.useState)({}),
          [p] = (0, G.useState)({}),
          H = (0, G.useRef)({});
        let e = 0;
        const w = (0, G.useCallback)(
            (g, I) => {
              d ||
                ((e += I),
                K.step({ maxSubSteps: s, stepSize: y, timeSinceLastCalled: e }),
                (e = 0));
            },
            [d, s, y]
          ),
          t = (g) => {
            var I;
            let {
              body: C,
              contact: { bi: A, bj: G, ...b },
              target: l,
              ...Z
            } = g;
            const c = null == (I = n[l]) ? void 0 : I.collide;
            c &&
              c({
                body: u[C],
                contact: { bi: u[A], bj: u[G], ...b },
                target: u[l],
                ...Z,
              });
          },
          N = (g) => {
            var I, C;
            let { bodyA: A, bodyB: G } = g;
            const b = null == (I = n[A]) ? void 0 : I.collideBegin;
            b &&
              b({
                body: u[G],
                op: "event",
                target: u[A],
                type: "collideBegin",
              });
            const l = null == (C = n[G]) ? void 0 : C.collideBegin;
            l &&
              l({
                body: u[A],
                op: "event",
                target: u[G],
                type: "collideBegin",
              });
          },
          v = (g) => {
            var I, C;
            let { bodyA: A, bodyB: G } = g;
            const b = null == (I = n[A]) ? void 0 : I.collideEnd;
            b &&
              b({ body: u[G], op: "event", target: u[A], type: "collideEnd" });
            const l = null == (C = n[G]) ? void 0 : C.collideEnd;
            l &&
              l({ body: u[A], op: "event", target: u[G], type: "collideEnd" });
          },
          F = (g) => {
            let {
              active: I,
              bodies: C = [],
              observations: A,
              positions: G,
              quaternions: b,
            } = g;
            for (let l = 0; l < C.length; l++) H.current[C[l]] = l;
            if (
              (A.forEach((g) => {
                let [I, C, A] = g;
                const G = (p[I] || {})[A];
                G && G(C);
              }),
              I)
            ) {
              for (const g of Object.values(u))
                if (g instanceof l.InstancedMesh)
                  for (let I = 0; I < g.count; I++) {
                    const C = H.current[`${g.uuid}/${I}`];
                    void 0 !== C && g.setMatrixAt(I, oI(C, G, b)),
                      (g.instanceMatrix.needsUpdate = !0);
                  }
                else oI(H.current[g.uuid], G, b, g);
              h && Y();
            }
          },
          S = (g) => {
            var I;
            let {
              body: C,
              ray: { uuid: A, ...G },
              ...b
            } = g;
            const l = null == (I = n[A]) ? void 0 : I.rayhit;
            l && l({ body: C ? u[C] : null, ray: { uuid: A, ...G }, ...b });
          };
        (0, b.x)(w),
          (0, G.useLayoutEffect)(
            () => (
              K.init(),
              K.on("collide", t),
              K.on("collideBegin", N),
              K.on("collideEnd", v),
              K.on("frame", F),
              K.on("rayhit", S),
              () => {
                K.terminate(), K.removeAllListeners();
              }
            ),
            []
          ),
          (0, G.useEffect)(() => {
            K.axisIndex = C;
          }, [C]),
          (0, G.useEffect)(() => {
            K.broadphase = A;
          }, [A]),
          (0, G.useEffect)(() => {
            K.gravity = o;
          }, [o]),
          (0, G.useEffect)(() => {
            K.iterations = i;
          }, [i]),
          (0, G.useEffect)(() => {
            K.tolerance = X;
          }, [X]);
        const z = (0, G.useMemo)(
          () => ({
            bodies: H,
            events: n,
            refs: u,
            subscriptions: p,
            worker: K,
          }),
          [H, n, u, p, K]
        );
        return (0, Z.jsx)(GI.Provider, { value: z, children: c });
      };
      class iI {
        constructor(g) {
          void 0 === g && (g = [0, 0, 0, 0, 0, 0, 0, 0, 0]),
            (this.elements = g);
        }
        identity() {
          const g = this.elements;
          (g[0] = 1),
            (g[1] = 0),
            (g[2] = 0),
            (g[3] = 0),
            (g[4] = 1),
            (g[5] = 0),
            (g[6] = 0),
            (g[7] = 0),
            (g[8] = 1);
        }
        setZero() {
          const g = this.elements;
          (g[0] = 0),
            (g[1] = 0),
            (g[2] = 0),
            (g[3] = 0),
            (g[4] = 0),
            (g[5] = 0),
            (g[6] = 0),
            (g[7] = 0),
            (g[8] = 0);
        }
        setTrace(g) {
          const I = this.elements;
          (I[0] = g.x), (I[4] = g.y), (I[8] = g.z);
        }
        getTrace(g) {
          void 0 === g && (g = new mI());
          const I = this.elements;
          return (g.x = I[0]), (g.y = I[4]), (g.z = I[8]), g;
        }
        vmult(g, I) {
          void 0 === I && (I = new mI());
          const C = this.elements,
            A = g.x,
            G = g.y,
            b = g.z;
          return (
            (I.x = C[0] * A + C[1] * G + C[2] * b),
            (I.y = C[3] * A + C[4] * G + C[5] * b),
            (I.z = C[6] * A + C[7] * G + C[8] * b),
            I
          );
        }
        smult(g) {
          for (let I = 0; I < this.elements.length; I++) this.elements[I] *= g;
        }
        mmult(g, I) {
          void 0 === I && (I = new iI());
          const C = this.elements,
            A = g.elements,
            G = I.elements,
            b = C[0],
            l = C[1],
            Z = C[2],
            c = C[3],
            B = C[4],
            o = C[5],
            d = C[6],
            i = C[7],
            s = C[8],
            m = A[0],
            W = A[1],
            h = A[2],
            a = A[3],
            V = A[4],
            y = A[5],
            X = A[6],
            Y = A[7],
            K = A[8];
          return (
            (G[0] = b * m + l * a + Z * X),
            (G[1] = b * W + l * V + Z * Y),
            (G[2] = b * h + l * y + Z * K),
            (G[3] = c * m + B * a + o * X),
            (G[4] = c * W + B * V + o * Y),
            (G[5] = c * h + B * y + o * K),
            (G[6] = d * m + i * a + s * X),
            (G[7] = d * W + i * V + s * Y),
            (G[8] = d * h + i * y + s * K),
            I
          );
        }
        scale(g, I) {
          void 0 === I && (I = new iI());
          const C = this.elements,
            A = I.elements;
          for (let G = 0; 3 !== G; G++)
            (A[3 * G + 0] = g.x * C[3 * G + 0]),
              (A[3 * G + 1] = g.y * C[3 * G + 1]),
              (A[3 * G + 2] = g.z * C[3 * G + 2]);
          return I;
        }
        solve(g, I) {
          void 0 === I && (I = new mI());
          const C = [];
          let A, G;
          for (A = 0; A < 12; A++) C.push(0);
          for (A = 0; A < 3; A++)
            for (G = 0; G < 3; G++) C[A + 4 * G] = this.elements[A + 3 * G];
          (C[3] = g.x), (C[7] = g.y), (C[11] = g.z);
          let b = 3;
          const l = b;
          let Z;
          let c;
          do {
            if (((A = l - b), 0 === C[A + 4 * A]))
              for (G = A + 1; G < l; G++)
                if (0 !== C[A + 4 * G]) {
                  Z = 4;
                  do {
                    (c = 4 - Z), (C[c + 4 * A] += C[c + 4 * G]);
                  } while (--Z);
                  break;
                }
            if (0 !== C[A + 4 * A])
              for (G = A + 1; G < l; G++) {
                const g = C[A + 4 * G] / C[A + 4 * A];
                Z = 4;
                do {
                  (c = 4 - Z),
                    (C[c + 4 * G] =
                      c <= A ? 0 : C[c + 4 * G] - C[c + 4 * A] * g);
                } while (--Z);
              }
          } while (--b);
          if (
            ((I.z = C[11] / C[10]),
            (I.y = (C[7] - C[6] * I.z) / C[5]),
            (I.x = (C[3] - C[2] * I.z - C[1] * I.y) / C[0]),
            isNaN(I.x) ||
              isNaN(I.y) ||
              isNaN(I.z) ||
              I.x === 1 / 0 ||
              I.y === 1 / 0 ||
              I.z === 1 / 0)
          )
            throw `Could not solve equation! Got x=[${I.toString()}], b=[${g.toString()}], A=[${this.toString()}]`;
          return I;
        }
        e(g, I, C) {
          if (void 0 === C) return this.elements[I + 3 * g];
          this.elements[I + 3 * g] = C;
        }
        copy(g) {
          for (let I = 0; I < g.elements.length; I++)
            this.elements[I] = g.elements[I];
          return this;
        }
        toString() {
          let g = "";
          for (let I = 0; I < 9; I++) g += this.elements[I] + ",";
          return g;
        }
        reverse(g) {
          void 0 === g && (g = new iI());
          const I = sI;
          let C, A;
          for (C = 0; C < 3; C++)
            for (A = 0; A < 3; A++) I[C + 6 * A] = this.elements[C + 3 * A];
          (I[3] = 1),
            (I[9] = 0),
            (I[15] = 0),
            (I[4] = 0),
            (I[10] = 1),
            (I[16] = 0),
            (I[5] = 0),
            (I[11] = 0),
            (I[17] = 1);
          let G = 3;
          const b = G;
          let l;
          let Z;
          do {
            if (((C = b - G), 0 === I[C + 6 * C]))
              for (A = C + 1; A < b; A++)
                if (0 !== I[C + 6 * A]) {
                  l = 6;
                  do {
                    (Z = 6 - l), (I[Z + 6 * C] += I[Z + 6 * A]);
                  } while (--l);
                  break;
                }
            if (0 !== I[C + 6 * C])
              for (A = C + 1; A < b; A++) {
                const g = I[C + 6 * A] / I[C + 6 * C];
                l = 6;
                do {
                  (Z = 6 - l),
                    (I[Z + 6 * A] =
                      Z <= C ? 0 : I[Z + 6 * A] - I[Z + 6 * C] * g);
                } while (--l);
              }
          } while (--G);
          C = 2;
          do {
            A = C - 1;
            do {
              const g = I[C + 6 * A] / I[C + 6 * C];
              l = 6;
              do {
                (Z = 6 - l), (I[Z + 6 * A] = I[Z + 6 * A] - I[Z + 6 * C] * g);
              } while (--l);
            } while (A--);
          } while (--C);
          C = 2;
          do {
            const g = 1 / I[C + 6 * C];
            l = 6;
            do {
              (Z = 6 - l), (I[Z + 6 * C] = I[Z + 6 * C] * g);
            } while (--l);
          } while (C--);
          C = 2;
          do {
            A = 2;
            do {
              if (((Z = I[3 + A + 6 * C]), isNaN(Z) || Z === 1 / 0))
                throw `Could not reverse! A=[${this.toString()}]`;
              g.e(C, A, Z);
            } while (A--);
          } while (C--);
          return g;
        }
        setRotationFromQuaternion(g) {
          const I = g.x,
            C = g.y,
            A = g.z,
            G = g.w,
            b = I + I,
            l = C + C,
            Z = A + A,
            c = I * b,
            B = I * l,
            o = I * Z,
            d = C * l,
            i = C * Z,
            s = A * Z,
            m = G * b,
            W = G * l,
            h = G * Z,
            a = this.elements;
          return (
            (a[0] = 1 - (d + s)),
            (a[1] = B - h),
            (a[2] = o + W),
            (a[3] = B + h),
            (a[4] = 1 - (c + s)),
            (a[5] = i - m),
            (a[6] = o - W),
            (a[7] = i + m),
            (a[8] = 1 - (c + d)),
            this
          );
        }
        transpose(g) {
          void 0 === g && (g = new iI());
          const I = this.elements,
            C = g.elements;
          let A;
          return (
            (C[0] = I[0]),
            (C[4] = I[4]),
            (C[8] = I[8]),
            (A = I[1]),
            (C[1] = I[3]),
            (C[3] = A),
            (A = I[2]),
            (C[2] = I[6]),
            (C[6] = A),
            (A = I[5]),
            (C[5] = I[7]),
            (C[7] = A),
            g
          );
        }
      }
      const sI = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      class mI {
        constructor(g, I, C) {
          void 0 === g && (g = 0),
            void 0 === I && (I = 0),
            void 0 === C && (C = 0),
            (this.x = g),
            (this.y = I),
            (this.z = C);
        }
        cross(g, I) {
          void 0 === I && (I = new mI());
          const C = g.x,
            A = g.y,
            G = g.z,
            b = this.x,
            l = this.y,
            Z = this.z;
          return (
            (I.x = l * G - Z * A),
            (I.y = Z * C - b * G),
            (I.z = b * A - l * C),
            I
          );
        }
        set(g, I, C) {
          return (this.x = g), (this.y = I), (this.z = C), this;
        }
        setZero() {
          this.x = this.y = this.z = 0;
        }
        vadd(g, I) {
          if (!I) return new mI(this.x + g.x, this.y + g.y, this.z + g.z);
          (I.x = g.x + this.x), (I.y = g.y + this.y), (I.z = g.z + this.z);
        }
        vsub(g, I) {
          if (!I) return new mI(this.x - g.x, this.y - g.y, this.z - g.z);
          (I.x = this.x - g.x), (I.y = this.y - g.y), (I.z = this.z - g.z);
        }
        crossmat() {
          return new iI([
            0,
            -this.z,
            this.y,
            this.z,
            0,
            -this.x,
            -this.y,
            this.x,
            0,
          ]);
        }
        normalize() {
          const g = this.x,
            I = this.y,
            C = this.z,
            A = Math.sqrt(g * g + I * I + C * C);
          if (A > 0) {
            const g = 1 / A;
            (this.x *= g), (this.y *= g), (this.z *= g);
          } else (this.x = 0), (this.y = 0), (this.z = 0);
          return A;
        }
        unit(g) {
          void 0 === g && (g = new mI());
          const I = this.x,
            C = this.y,
            A = this.z;
          let G = Math.sqrt(I * I + C * C + A * A);
          return (
            G > 0
              ? ((G = 1 / G), (g.x = I * G), (g.y = C * G), (g.z = A * G))
              : ((g.x = 1), (g.y = 0), (g.z = 0)),
            g
          );
        }
        length() {
          const g = this.x,
            I = this.y,
            C = this.z;
          return Math.sqrt(g * g + I * I + C * C);
        }
        lengthSquared() {
          return this.dot(this);
        }
        distanceTo(g) {
          const I = this.x,
            C = this.y,
            A = this.z,
            G = g.x,
            b = g.y,
            l = g.z;
          return Math.sqrt(
            (G - I) * (G - I) + (b - C) * (b - C) + (l - A) * (l - A)
          );
        }
        distanceSquared(g) {
          const I = this.x,
            C = this.y,
            A = this.z,
            G = g.x,
            b = g.y,
            l = g.z;
          return (G - I) * (G - I) + (b - C) * (b - C) + (l - A) * (l - A);
        }
        scale(g, I) {
          void 0 === I && (I = new mI());
          const C = this.x,
            A = this.y,
            G = this.z;
          return (I.x = g * C), (I.y = g * A), (I.z = g * G), I;
        }
        vmul(g, I) {
          return (
            void 0 === I && (I = new mI()),
            (I.x = g.x * this.x),
            (I.y = g.y * this.y),
            (I.z = g.z * this.z),
            I
          );
        }
        addScaledVector(g, I, C) {
          return (
            void 0 === C && (C = new mI()),
            (C.x = this.x + g * I.x),
            (C.y = this.y + g * I.y),
            (C.z = this.z + g * I.z),
            C
          );
        }
        dot(g) {
          return this.x * g.x + this.y * g.y + this.z * g.z;
        }
        isZero() {
          return 0 === this.x && 0 === this.y && 0 === this.z;
        }
        negate(g) {
          return (
            void 0 === g && (g = new mI()),
            (g.x = -this.x),
            (g.y = -this.y),
            (g.z = -this.z),
            g
          );
        }
        tangents(g, I) {
          const C = this.length();
          if (C > 0) {
            const A = WI,
              G = 1 / C;
            A.set(this.x * G, this.y * G, this.z * G);
            const b = hI;
            Math.abs(A.x) < 0.9
              ? (b.set(1, 0, 0), A.cross(b, g))
              : (b.set(0, 1, 0), A.cross(b, g)),
              A.cross(g, I);
          } else g.set(1, 0, 0), I.set(0, 1, 0);
        }
        toString() {
          return `${this.x},${this.y},${this.z}`;
        }
        toArray() {
          return [this.x, this.y, this.z];
        }
        copy(g) {
          return (this.x = g.x), (this.y = g.y), (this.z = g.z), this;
        }
        lerp(g, I, C) {
          const A = this.x,
            G = this.y,
            b = this.z;
          (C.x = A + (g.x - A) * I),
            (C.y = G + (g.y - G) * I),
            (C.z = b + (g.z - b) * I);
        }
        almostEquals(g, I) {
          return (
            void 0 === I && (I = 1e-6),
            !(
              Math.abs(this.x - g.x) > I ||
              Math.abs(this.y - g.y) > I ||
              Math.abs(this.z - g.z) > I
            )
          );
        }
        almostZero(g) {
          return (
            void 0 === g && (g = 1e-6),
            !(
              Math.abs(this.x) > g ||
              Math.abs(this.y) > g ||
              Math.abs(this.z) > g
            )
          );
        }
        isAntiparallelTo(g, I) {
          return this.negate(aI), aI.almostEquals(g, I);
        }
        clone() {
          return new mI(this.x, this.y, this.z);
        }
      }
      (mI.ZERO = new mI(0, 0, 0)),
        (mI.UNIT_X = new mI(1, 0, 0)),
        (mI.UNIT_Y = new mI(0, 1, 0)),
        (mI.UNIT_Z = new mI(0, 0, 1));
      const WI = new mI(),
        hI = new mI(),
        aI = new mI();
      class VI {
        constructor(g) {
          void 0 === g && (g = {}),
            (this.lowerBound = new mI()),
            (this.upperBound = new mI()),
            g.lowerBound && this.lowerBound.copy(g.lowerBound),
            g.upperBound && this.upperBound.copy(g.upperBound);
        }
        setFromPoints(g, I, C, A) {
          const G = this.lowerBound,
            b = this.upperBound,
            l = C;
          G.copy(g[0]), l && l.vmult(G, G), b.copy(G);
          for (let Z = 1; Z < g.length; Z++) {
            let I = g[Z];
            l && (l.vmult(I, yI), (I = yI)),
              I.x > b.x && (b.x = I.x),
              I.x < G.x && (G.x = I.x),
              I.y > b.y && (b.y = I.y),
              I.y < G.y && (G.y = I.y),
              I.z > b.z && (b.z = I.z),
              I.z < G.z && (G.z = I.z);
          }
          return (
            I && (I.vadd(G, G), I.vadd(b, b)),
            A &&
              ((G.x -= A),
              (G.y -= A),
              (G.z -= A),
              (b.x += A),
              (b.y += A),
              (b.z += A)),
            this
          );
        }
        copy(g) {
          return (
            this.lowerBound.copy(g.lowerBound),
            this.upperBound.copy(g.upperBound),
            this
          );
        }
        clone() {
          return new VI().copy(this);
        }
        extend(g) {
          (this.lowerBound.x = Math.min(this.lowerBound.x, g.lowerBound.x)),
            (this.upperBound.x = Math.max(this.upperBound.x, g.upperBound.x)),
            (this.lowerBound.y = Math.min(this.lowerBound.y, g.lowerBound.y)),
            (this.upperBound.y = Math.max(this.upperBound.y, g.upperBound.y)),
            (this.lowerBound.z = Math.min(this.lowerBound.z, g.lowerBound.z)),
            (this.upperBound.z = Math.max(this.upperBound.z, g.upperBound.z));
        }
        overlaps(g) {
          const I = this.lowerBound,
            C = this.upperBound,
            A = g.lowerBound,
            G = g.upperBound,
            b = (A.x <= C.x && C.x <= G.x) || (I.x <= G.x && G.x <= C.x),
            l = (A.y <= C.y && C.y <= G.y) || (I.y <= G.y && G.y <= C.y),
            Z = (A.z <= C.z && C.z <= G.z) || (I.z <= G.z && G.z <= C.z);
          return b && l && Z;
        }
        volume() {
          const g = this.lowerBound,
            I = this.upperBound;
          return (I.x - g.x) * (I.y - g.y) * (I.z - g.z);
        }
        contains(g) {
          const I = this.lowerBound,
            C = this.upperBound,
            A = g.lowerBound,
            G = g.upperBound;
          return (
            I.x <= A.x &&
            C.x >= G.x &&
            I.y <= A.y &&
            C.y >= G.y &&
            I.z <= A.z &&
            C.z >= G.z
          );
        }
        getCorners(g, I, C, A, G, b, l, Z) {
          const c = this.lowerBound,
            B = this.upperBound;
          g.copy(c),
            I.set(B.x, c.y, c.z),
            C.set(B.x, B.y, c.z),
            A.set(c.x, B.y, B.z),
            G.set(B.x, c.y, B.z),
            b.set(c.x, B.y, c.z),
            l.set(c.x, c.y, B.z),
            Z.copy(B);
        }
        toLocalFrame(g, I) {
          const C = XI,
            A = C[0],
            G = C[1],
            b = C[2],
            l = C[3],
            Z = C[4],
            c = C[5],
            B = C[6],
            o = C[7];
          this.getCorners(A, G, b, l, Z, c, B, o);
          for (let d = 0; 8 !== d; d++) {
            const I = C[d];
            g.pointToLocal(I, I);
          }
          return I.setFromPoints(C);
        }
        toWorldFrame(g, I) {
          const C = XI,
            A = C[0],
            G = C[1],
            b = C[2],
            l = C[3],
            Z = C[4],
            c = C[5],
            B = C[6],
            o = C[7];
          this.getCorners(A, G, b, l, Z, c, B, o);
          for (let d = 0; 8 !== d; d++) {
            const I = C[d];
            g.pointToWorld(I, I);
          }
          return I.setFromPoints(C);
        }
        overlapsRay(g) {
          const { direction: I, from: C } = g,
            A = 1 / I.x,
            G = 1 / I.y,
            b = 1 / I.z,
            l = (this.lowerBound.x - C.x) * A,
            Z = (this.upperBound.x - C.x) * A,
            c = (this.lowerBound.y - C.y) * G,
            B = (this.upperBound.y - C.y) * G,
            o = (this.lowerBound.z - C.z) * b,
            d = (this.upperBound.z - C.z) * b,
            i = Math.max(
              Math.max(Math.min(l, Z), Math.min(c, B)),
              Math.min(o, d)
            ),
            s = Math.min(
              Math.min(Math.max(l, Z), Math.max(c, B)),
              Math.max(o, d)
            );
          return !(s < 0) && !(i > s);
        }
      }
      const yI = new mI(),
        XI = [
          new mI(),
          new mI(),
          new mI(),
          new mI(),
          new mI(),
          new mI(),
          new mI(),
          new mI(),
        ];
      class YI {
        constructor(g, I, C, A) {
          void 0 === g && (g = 0),
            void 0 === I && (I = 0),
            void 0 === C && (C = 0),
            void 0 === A && (A = 1),
            (this.x = g),
            (this.y = I),
            (this.z = C),
            (this.w = A);
        }
        set(g, I, C, A) {
          return (this.x = g), (this.y = I), (this.z = C), (this.w = A), this;
        }
        toString() {
          return `${this.x},${this.y},${this.z},${this.w}`;
        }
        toArray() {
          return [this.x, this.y, this.z, this.w];
        }
        setFromAxisAngle(g, I) {
          const C = Math.sin(0.5 * I);
          return (
            (this.x = g.x * C),
            (this.y = g.y * C),
            (this.z = g.z * C),
            (this.w = Math.cos(0.5 * I)),
            this
          );
        }
        toAxisAngle(g) {
          void 0 === g && (g = new mI()), this.normalize();
          const I = 2 * Math.acos(this.w),
            C = Math.sqrt(1 - this.w * this.w);
          return (
            C < 0.001
              ? ((g.x = this.x), (g.y = this.y), (g.z = this.z))
              : ((g.x = this.x / C), (g.y = this.y / C), (g.z = this.z / C)),
            [g, I]
          );
        }
        setFromVectors(g, I) {
          if (g.isAntiparallelTo(I)) {
            const I = KI,
              C = uI;
            g.tangents(I, C), this.setFromAxisAngle(I, Math.PI);
          } else {
            const C = g.cross(I);
            (this.x = C.x),
              (this.y = C.y),
              (this.z = C.z),
              (this.w =
                Math.sqrt(g.length() ** 2 * I.length() ** 2) + g.dot(I)),
              this.normalize();
          }
          return this;
        }
        mult(g, I) {
          void 0 === I && (I = new YI());
          const C = this.x,
            A = this.y,
            G = this.z,
            b = this.w,
            l = g.x,
            Z = g.y,
            c = g.z,
            B = g.w;
          return (
            (I.x = C * B + b * l + A * c - G * Z),
            (I.y = A * B + b * Z + G * l - C * c),
            (I.z = G * B + b * c + C * Z - A * l),
            (I.w = b * B - C * l - A * Z - G * c),
            I
          );
        }
        inverse(g) {
          void 0 === g && (g = new YI());
          const I = this.x,
            C = this.y,
            A = this.z,
            G = this.w;
          this.conjugate(g);
          const b = 1 / (I * I + C * C + A * A + G * G);
          return (g.x *= b), (g.y *= b), (g.z *= b), (g.w *= b), g;
        }
        conjugate(g) {
          return (
            void 0 === g && (g = new YI()),
            (g.x = -this.x),
            (g.y = -this.y),
            (g.z = -this.z),
            (g.w = this.w),
            g
          );
        }
        normalize() {
          let g = Math.sqrt(
            this.x * this.x +
              this.y * this.y +
              this.z * this.z +
              this.w * this.w
          );
          return (
            0 === g
              ? ((this.x = 0), (this.y = 0), (this.z = 0), (this.w = 0))
              : ((g = 1 / g),
                (this.x *= g),
                (this.y *= g),
                (this.z *= g),
                (this.w *= g)),
            this
          );
        }
        normalizeFast() {
          const g =
            (3 -
              (this.x * this.x +
                this.y * this.y +
                this.z * this.z +
                this.w * this.w)) /
            2;
          return (
            0 === g
              ? ((this.x = 0), (this.y = 0), (this.z = 0), (this.w = 0))
              : ((this.x *= g), (this.y *= g), (this.z *= g), (this.w *= g)),
            this
          );
        }
        vmult(g, I) {
          void 0 === I && (I = new mI());
          const C = g.x,
            A = g.y,
            G = g.z,
            b = this.x,
            l = this.y,
            Z = this.z,
            c = this.w,
            B = c * C + l * G - Z * A,
            o = c * A + Z * C - b * G,
            d = c * G + b * A - l * C,
            i = -b * C - l * A - Z * G;
          return (
            (I.x = B * c + i * -b + o * -Z - d * -l),
            (I.y = o * c + i * -l + d * -b - B * -Z),
            (I.z = d * c + i * -Z + B * -l - o * -b),
            I
          );
        }
        copy(g) {
          return (
            (this.x = g.x), (this.y = g.y), (this.z = g.z), (this.w = g.w), this
          );
        }
        toEuler(g, I) {
          let C, A, G;
          void 0 === I && (I = "YZX");
          const b = this.x,
            l = this.y,
            Z = this.z,
            c = this.w;
          switch (I) {
            case "YZX":
              const g = b * l + Z * c;
              if (
                (g > 0.499 &&
                  ((C = 2 * Math.atan2(b, c)), (A = Math.PI / 2), (G = 0)),
                g < -0.499 &&
                  ((C = -2 * Math.atan2(b, c)), (A = -Math.PI / 2), (G = 0)),
                void 0 === C)
              ) {
                const I = b * b,
                  B = l * l,
                  o = Z * Z;
                (C = Math.atan2(2 * l * c - 2 * b * Z, 1 - 2 * B - 2 * o)),
                  (A = Math.asin(2 * g)),
                  (G = Math.atan2(2 * b * c - 2 * l * Z, 1 - 2 * I - 2 * o));
              }
              break;
            default:
              throw new Error(`Euler order ${I} not supported yet.`);
          }
          (g.y = C), (g.z = A), (g.x = G);
        }
        setFromEuler(g, I, C, A) {
          void 0 === A && (A = "XYZ");
          const G = Math.cos(g / 2),
            b = Math.cos(I / 2),
            l = Math.cos(C / 2),
            Z = Math.sin(g / 2),
            c = Math.sin(I / 2),
            B = Math.sin(C / 2);
          return (
            "XYZ" === A
              ? ((this.x = Z * b * l + G * c * B),
                (this.y = G * c * l - Z * b * B),
                (this.z = G * b * B + Z * c * l),
                (this.w = G * b * l - Z * c * B))
              : "YXZ" === A
              ? ((this.x = Z * b * l + G * c * B),
                (this.y = G * c * l - Z * b * B),
                (this.z = G * b * B - Z * c * l),
                (this.w = G * b * l + Z * c * B))
              : "ZXY" === A
              ? ((this.x = Z * b * l - G * c * B),
                (this.y = G * c * l + Z * b * B),
                (this.z = G * b * B + Z * c * l),
                (this.w = G * b * l - Z * c * B))
              : "ZYX" === A
              ? ((this.x = Z * b * l - G * c * B),
                (this.y = G * c * l + Z * b * B),
                (this.z = G * b * B - Z * c * l),
                (this.w = G * b * l + Z * c * B))
              : "YZX" === A
              ? ((this.x = Z * b * l + G * c * B),
                (this.y = G * c * l + Z * b * B),
                (this.z = G * b * B - Z * c * l),
                (this.w = G * b * l - Z * c * B))
              : "XZY" === A &&
                ((this.x = Z * b * l - G * c * B),
                (this.y = G * c * l - Z * b * B),
                (this.z = G * b * B + Z * c * l),
                (this.w = G * b * l + Z * c * B)),
            this
          );
        }
        clone() {
          return new YI(this.x, this.y, this.z, this.w);
        }
        slerp(g, I, C) {
          void 0 === C && (C = new YI());
          const A = this.x,
            G = this.y,
            b = this.z,
            l = this.w;
          let Z,
            c,
            B,
            o,
            d,
            i = g.x,
            s = g.y,
            m = g.z,
            W = g.w;
          return (
            (c = A * i + G * s + b * m + l * W),
            c < 0 && ((c = -c), (i = -i), (s = -s), (m = -m), (W = -W)),
            1 - c > 1e-6
              ? ((Z = Math.acos(c)),
                (B = Math.sin(Z)),
                (o = Math.sin((1 - I) * Z) / B),
                (d = Math.sin(I * Z) / B))
              : ((o = 1 - I), (d = I)),
            (C.x = o * A + d * i),
            (C.y = o * G + d * s),
            (C.z = o * b + d * m),
            (C.w = o * l + d * W),
            C
          );
        }
        integrate(g, I, C, A) {
          void 0 === A && (A = new YI());
          const G = g.x * C.x,
            b = g.y * C.y,
            l = g.z * C.z,
            Z = this.x,
            c = this.y,
            B = this.z,
            o = this.w,
            d = 0.5 * I;
          return (
            (A.x += d * (G * o + b * B - l * c)),
            (A.y += d * (b * o + l * Z - G * B)),
            (A.z += d * (l * o + G * c - b * Z)),
            (A.w += d * (-G * Z - b * c - l * B)),
            A
          );
        }
      }
      const KI = new mI(),
        uI = new mI();
      class nI {
        constructor(g) {
          void 0 === g && (g = {}),
            (this.id = nI.idCounter++),
            (this.type = g.type || 0),
            (this.boundingSphereRadius = 0),
            (this.collisionResponse =
              !g.collisionResponse || g.collisionResponse),
            (this.collisionFilterGroup =
              void 0 !== g.collisionFilterGroup ? g.collisionFilterGroup : 1),
            (this.collisionFilterMask =
              void 0 !== g.collisionFilterMask ? g.collisionFilterMask : -1),
            (this.material = g.material ? g.material : null),
            (this.body = null);
        }
        updateBoundingSphereRadius() {
          throw `computeBoundingSphereRadius() not implemented for shape type ${this.type}`;
        }
        volume() {
          throw `volume() not implemented for shape type ${this.type}`;
        }
        calculateLocalInertia(g, I) {
          throw `calculateLocalInertia() not implemented for shape type ${this.type}`;
        }
        calculateWorldAABB(g, I, C, A) {
          throw `calculateWorldAABB() not implemented for shape type ${this.type}`;
        }
      }
      (nI.idCounter = 0),
        (nI.types = {
          SPHERE: 1,
          PLANE: 2,
          BOX: 4,
          COMPOUND: 8,
          CONVEXPOLYHEDRON: 16,
          HEIGHTFIELD: 32,
          PARTICLE: 64,
          CYLINDER: 128,
          TRIMESH: 256,
        });
      class pI {
        constructor(g) {
          void 0 === g && (g = {}),
            (this.position = new mI()),
            (this.quaternion = new YI()),
            g.position && this.position.copy(g.position),
            g.quaternion && this.quaternion.copy(g.quaternion);
        }
        pointToLocal(g, I) {
          return pI.pointToLocalFrame(this.position, this.quaternion, g, I);
        }
        pointToWorld(g, I) {
          return pI.pointToWorldFrame(this.position, this.quaternion, g, I);
        }
        vectorToWorldFrame(g, I) {
          return void 0 === I && (I = new mI()), this.quaternion.vmult(g, I), I;
        }
        static pointToLocalFrame(g, I, C, A) {
          return (
            void 0 === A && (A = new mI()),
            C.vsub(g, A),
            I.conjugate(RI),
            RI.vmult(A, A),
            A
          );
        }
        static pointToWorldFrame(g, I, C, A) {
          return void 0 === A && (A = new mI()), I.vmult(C, A), A.vadd(g, A), A;
        }
        static vectorToWorldFrame(g, I, C) {
          return void 0 === C && (C = new mI()), g.vmult(I, C), C;
        }
        static vectorToLocalFrame(g, I, C, A) {
          return (
            void 0 === A && (A = new mI()),
            (I.w *= -1),
            I.vmult(C, A),
            (I.w *= -1),
            A
          );
        }
      }
      const RI = new YI();
      new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new YI(),
        new VI(),
        new iI(),
        new iI(),
        new iI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new YI(),
        new mI(),
        new mI(),
        new mI(),
        new mI();
      class HI {
        constructor() {
          (this.rayFromWorld = new mI()),
            (this.rayToWorld = new mI()),
            (this.hitNormalWorld = new mI()),
            (this.hitPointWorld = new mI()),
            (this.hasHit = !1),
            (this.shape = null),
            (this.body = null),
            (this.hitFaceIndex = -1),
            (this.distance = -1),
            (this.shouldStop = !1);
        }
        reset() {
          this.rayFromWorld.setZero(),
            this.rayToWorld.setZero(),
            this.hitNormalWorld.setZero(),
            this.hitPointWorld.setZero(),
            (this.hasHit = !1),
            (this.shape = null),
            (this.body = null),
            (this.hitFaceIndex = -1),
            (this.distance = -1),
            (this.shouldStop = !1);
        }
        abort() {
          this.shouldStop = !0;
        }
        set(g, I, C, A, G, b, l) {
          this.rayFromWorld.copy(g),
            this.rayToWorld.copy(I),
            this.hitNormalWorld.copy(C),
            this.hitPointWorld.copy(A),
            (this.shape = G),
            (this.body = b),
            (this.distance = l);
        }
      }
      let eI, wI, tI, NI, vI, FI, SI;
      const zI = 1,
        kI = 2,
        JI = 4;
      (eI = nI.types.SPHERE),
        (wI = nI.types.PLANE),
        (tI = nI.types.BOX),
        (NI = nI.types.CYLINDER),
        (vI = nI.types.CONVEXPOLYHEDRON),
        (FI = nI.types.HEIGHTFIELD),
        (SI = nI.types.TRIMESH);
      class LI {
        get [eI]() {
          return this._intersectSphere;
        }
        get [wI]() {
          return this._intersectPlane;
        }
        get [tI]() {
          return this._intersectBox;
        }
        get [NI]() {
          return this._intersectConvex;
        }
        get [vI]() {
          return this._intersectConvex;
        }
        get [FI]() {
          return this._intersectHeightfield;
        }
        get [SI]() {
          return this._intersectTrimesh;
        }
        constructor(g, I) {
          void 0 === g && (g = new mI()),
            void 0 === I && (I = new mI()),
            (this.from = g.clone()),
            (this.to = I.clone()),
            (this.direction = new mI()),
            (this.precision = 1e-4),
            (this.checkCollisionResponse = !0),
            (this.skipBackfaces = !1),
            (this.collisionFilterMask = -1),
            (this.collisionFilterGroup = -1),
            (this.mode = LI.ANY),
            (this.result = new HI()),
            (this.hasHit = !1),
            (this.callback = (g) => {});
        }
        intersectWorld(g, I) {
          return (
            (this.mode = I.mode || LI.ANY),
            (this.result = I.result || new HI()),
            (this.skipBackfaces = !!I.skipBackfaces),
            (this.collisionFilterMask =
              "undefined" !== typeof I.collisionFilterMask
                ? I.collisionFilterMask
                : -1),
            (this.collisionFilterGroup =
              "undefined" !== typeof I.collisionFilterGroup
                ? I.collisionFilterGroup
                : -1),
            (this.checkCollisionResponse =
              "undefined" === typeof I.checkCollisionResponse ||
              I.checkCollisionResponse),
            I.from && this.from.copy(I.from),
            I.to && this.to.copy(I.to),
            (this.callback = I.callback || (() => {})),
            (this.hasHit = !1),
            this.result.reset(),
            this.updateDirection(),
            this.getAABB(QI),
            (xI.length = 0),
            g.broadphase.aabbQuery(g, QI, xI),
            this.intersectBodies(xI),
            this.hasHit
          );
        }
        intersectBody(g, I) {
          I && ((this.result = I), this.updateDirection());
          const C = this.checkCollisionResponse;
          if (C && !g.collisionResponse) return;
          if (
            0 === (this.collisionFilterGroup & g.collisionFilterMask) ||
            0 === (g.collisionFilterGroup & this.collisionFilterMask)
          )
            return;
          const A = rI,
            G = jI;
          for (let b = 0, l = g.shapes.length; b < l; b++) {
            const I = g.shapes[b];
            if (
              (!C || I.collisionResponse) &&
              (g.quaternion.mult(g.shapeOrientations[b], G),
              g.quaternion.vmult(g.shapeOffsets[b], A),
              A.vadd(g.position, A),
              this.intersectShape(I, G, A, g),
              this.result.shouldStop)
            )
              break;
          }
        }
        intersectBodies(g, I) {
          I && ((this.result = I), this.updateDirection());
          for (let C = 0, A = g.length; !this.result.shouldStop && C < A; C++)
            this.intersectBody(g[C]);
        }
        updateDirection() {
          this.to.vsub(this.from, this.direction), this.direction.normalize();
        }
        intersectShape(g, I, C, A) {
          if (
            (function (g, I, C) {
              C.vsub(g, dC);
              const A = dC.dot(I);
              I.scale(A, iC), iC.vadd(g, iC);
              return C.distanceTo(iC);
            })(this.from, this.direction, C) > g.boundingSphereRadius
          )
            return;
          const G = this[g.type];
          G && G.call(this, g, I, C, A, g);
        }
        _intersectBox(g, I, C, A, G) {
          return this._intersectConvex(
            g.convexPolyhedronRepresentation,
            I,
            C,
            A,
            G
          );
        }
        _intersectPlane(g, I, C, A, G) {
          const b = this.from,
            l = this.to,
            Z = this.direction,
            c = new mI(0, 0, 1);
          I.vmult(c, c);
          const B = new mI();
          b.vsub(C, B);
          const o = B.dot(c);
          l.vsub(C, B);
          if (o * B.dot(c) > 0) return;
          if (b.distanceTo(l) < o) return;
          const d = c.dot(Z);
          if (Math.abs(d) < this.precision) return;
          const i = new mI(),
            s = new mI(),
            m = new mI();
          b.vsub(C, i);
          const W = -c.dot(i) / d;
          Z.scale(W, s), b.vadd(s, m), this.reportIntersection(c, m, G, A, -1);
        }
        getAABB(g) {
          const { lowerBound: I, upperBound: C } = g,
            A = this.to,
            G = this.from;
          (I.x = Math.min(A.x, G.x)),
            (I.y = Math.min(A.y, G.y)),
            (I.z = Math.min(A.z, G.z)),
            (C.x = Math.max(A.x, G.x)),
            (C.y = Math.max(A.y, G.y)),
            (C.z = Math.max(A.z, G.z));
        }
        _intersectHeightfield(g, I, C, A, G) {
          g.data, g.elementSize;
          const b = fI;
          b.from.copy(this.from),
            b.to.copy(this.to),
            pI.pointToLocalFrame(C, I, b.from, b.from),
            pI.pointToLocalFrame(C, I, b.to, b.to),
            b.updateDirection();
          const l = _I;
          let Z, c, B, o;
          (Z = c = 0), (B = o = g.data.length - 1);
          const d = new VI();
          b.getAABB(d),
            g.getIndexOfPosition(d.lowerBound.x, d.lowerBound.y, l, !0),
            (Z = Math.max(Z, l[0])),
            (c = Math.max(c, l[1])),
            g.getIndexOfPosition(d.upperBound.x, d.upperBound.y, l, !0),
            (B = Math.min(B, l[0] + 1)),
            (o = Math.min(o, l[1] + 1));
          for (let i = Z; i < B; i++)
            for (let l = c; l < o; l++) {
              if (this.result.shouldStop) return;
              if ((g.getAabbAtIndex(i, l, d), d.overlapsRay(b))) {
                if (
                  (g.getConvexTrianglePillar(i, l, !1),
                  pI.pointToWorldFrame(C, I, g.pillarOffset, qI),
                  this._intersectConvex(g.pillarConvex, I, qI, A, G, PI),
                  this.result.shouldStop)
                )
                  return;
                g.getConvexTrianglePillar(i, l, !0),
                  pI.pointToWorldFrame(C, I, g.pillarOffset, qI),
                  this._intersectConvex(g.pillarConvex, I, qI, A, G, PI);
              }
            }
        }
        _intersectSphere(g, I, C, A, G) {
          const b = this.from,
            l = this.to,
            Z = g.radius,
            c = (l.x - b.x) ** 2 + (l.y - b.y) ** 2 + (l.z - b.z) ** 2,
            B =
              2 *
              ((l.x - b.x) * (b.x - C.x) +
                (l.y - b.y) * (b.y - C.y) +
                (l.z - b.z) * (b.z - C.z)),
            o =
              B ** 2 -
              4 *
                c *
                ((b.x - C.x) ** 2 +
                  (b.y - C.y) ** 2 +
                  (b.z - C.z) ** 2 -
                  Z ** 2),
            d = $I,
            i = gC;
          if (!(o < 0))
            if (0 === o)
              b.lerp(l, o, d),
                d.vsub(C, i),
                i.normalize(),
                this.reportIntersection(i, d, G, A, -1);
            else {
              const g = (-B - Math.sqrt(o)) / (2 * c),
                I = (-B + Math.sqrt(o)) / (2 * c);
              if (
                (g >= 0 &&
                  g <= 1 &&
                  (b.lerp(l, g, d),
                  d.vsub(C, i),
                  i.normalize(),
                  this.reportIntersection(i, d, G, A, -1)),
                this.result.shouldStop)
              )
                return;
              I >= 0 &&
                I <= 1 &&
                (b.lerp(l, I, d),
                d.vsub(C, i),
                i.normalize(),
                this.reportIntersection(i, d, G, A, -1));
            }
        }
        _intersectConvex(g, I, C, A, G, b) {
          const l = IC,
            Z = CC,
            c = (b && b.faceList) || null,
            B = g.faces,
            o = g.vertices,
            d = g.faceNormals,
            i = this.direction,
            s = this.from,
            m = this.to,
            W = s.distanceTo(m),
            h = c ? c.length : B.length,
            a = this.result;
          for (let V = 0; !a.shouldStop && V < h; V++) {
            const g = c ? c[V] : V,
              b = B[g],
              m = d[g],
              h = I,
              y = C;
            Z.copy(o[b[0]]),
              h.vmult(Z, Z),
              Z.vadd(y, Z),
              Z.vsub(s, Z),
              h.vmult(m, l);
            const X = i.dot(l);
            if (Math.abs(X) < this.precision) continue;
            const Y = l.dot(Z) / X;
            if (!(Y < 0)) {
              i.scale(Y, DI),
                DI.vadd(s, DI),
                TI.copy(o[b[0]]),
                h.vmult(TI, TI),
                y.vadd(TI, TI);
              for (let I = 1; !a.shouldStop && I < b.length - 1; I++) {
                EI.copy(o[b[I]]),
                  OI.copy(o[b[I + 1]]),
                  h.vmult(EI, EI),
                  h.vmult(OI, OI),
                  y.vadd(EI, EI),
                  y.vadd(OI, OI);
                const C = DI.distanceTo(s);
                (!LI.pointInTriangle(DI, TI, EI, OI) &&
                  !LI.pointInTriangle(DI, EI, TI, OI)) ||
                  C > W ||
                  this.reportIntersection(l, DI, G, A, g);
              }
            }
          }
        }
        _intersectTrimesh(g, I, C, A, G, b) {
          const l = AC,
            Z = BC,
            c = oC,
            B = CC,
            o = GC,
            d = bC,
            i = lC,
            s = cC,
            m = ZC,
            W = g.indices;
          g.vertices;
          const h = this.from,
            a = this.to,
            V = this.direction;
          c.position.copy(C),
            c.quaternion.copy(I),
            pI.vectorToLocalFrame(C, I, V, o),
            pI.pointToLocalFrame(C, I, h, d),
            pI.pointToLocalFrame(C, I, a, i),
            (i.x *= g.scale.x),
            (i.y *= g.scale.y),
            (i.z *= g.scale.z),
            (d.x *= g.scale.x),
            (d.y *= g.scale.y),
            (d.z *= g.scale.z),
            i.vsub(d, o),
            o.normalize();
          const y = d.distanceSquared(i);
          g.tree.rayQuery(this, c, Z);
          for (
            let X = 0, Y = Z.length;
            !this.result.shouldStop && X !== Y;
            X++
          ) {
            const b = Z[X];
            g.getNormal(b, l), g.getVertex(W[3 * b], TI), TI.vsub(d, B);
            const c = o.dot(l),
              i = l.dot(B) / c;
            if (i < 0) continue;
            o.scale(i, DI),
              DI.vadd(d, DI),
              g.getVertex(W[3 * b + 1], EI),
              g.getVertex(W[3 * b + 2], OI);
            const h = DI.distanceSquared(d);
            (!LI.pointInTriangle(DI, EI, TI, OI) &&
              !LI.pointInTriangle(DI, TI, EI, OI)) ||
              h > y ||
              (pI.vectorToWorldFrame(I, l, m),
              pI.pointToWorldFrame(C, I, DI, s),
              this.reportIntersection(m, s, G, A, b));
          }
          Z.length = 0;
        }
        reportIntersection(g, I, C, A, G) {
          const b = this.from,
            l = this.to,
            Z = b.distanceTo(I),
            c = this.result;
          if (!(this.skipBackfaces && g.dot(this.direction) > 0))
            switch (
              ((c.hitFaceIndex = "undefined" !== typeof G ? G : -1), this.mode)
            ) {
              case LI.ALL:
                (this.hasHit = !0),
                  c.set(b, l, g, I, C, A, Z),
                  (c.hasHit = !0),
                  this.callback(c);
                break;
              case LI.CLOSEST:
                (Z < c.distance || !c.hasHit) &&
                  ((this.hasHit = !0),
                  (c.hasHit = !0),
                  c.set(b, l, g, I, C, A, Z));
                break;
              case LI.ANY:
                (this.hasHit = !0),
                  (c.hasHit = !0),
                  c.set(b, l, g, I, C, A, Z),
                  (c.shouldStop = !0);
            }
        }
        static pointInTriangle(g, I, C, A) {
          A.vsub(I, dC), C.vsub(I, MI), g.vsub(I, UI);
          const G = dC.dot(dC),
            b = dC.dot(MI),
            l = dC.dot(UI),
            Z = MI.dot(MI),
            c = MI.dot(UI);
          let B, o;
          return (
            (B = Z * l - b * c) >= 0 &&
            (o = G * c - b * l) >= 0 &&
            B + o < G * Z - b * b
          );
        }
      }
      (LI.CLOSEST = zI), (LI.ANY = kI), (LI.ALL = JI);
      const QI = new VI(),
        xI = [],
        MI = new mI(),
        UI = new mI(),
        rI = new mI(),
        jI = new YI(),
        DI = new mI(),
        TI = new mI(),
        EI = new mI(),
        OI = new mI();
      new mI(), new HI();
      const PI = { faceList: [0] },
        qI = new mI(),
        fI = new LI(),
        _I = [],
        $I = new mI(),
        gC = new mI(),
        IC = new mI();
      new mI(), new mI();
      const CC = new mI(),
        AC = new mI(),
        GC = new mI(),
        bC = new mI(),
        lC = new mI(),
        ZC = new mI(),
        cC = new mI();
      new VI();
      const BC = [],
        oC = new pI(),
        dC = new mI(),
        iC = new mI();
      new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new LI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(1, 0, 0),
        new mI(0, 1, 0),
        new mI(0, 0, 1),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new VI(),
        new mI(),
        new VI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new VI(),
        new mI(),
        new pI(),
        new VI(),
        nI.types.SPHERE,
        nI.types.SPHERE,
        nI.types.PLANE,
        nI.types.BOX,
        nI.types.BOX,
        nI.types.SPHERE,
        nI.types.BOX,
        nI.types.PLANE,
        nI.types.BOX,
        nI.types.CONVEXPOLYHEDRON,
        nI.types.SPHERE,
        nI.types.CONVEXPOLYHEDRON,
        nI.types.PLANE,
        nI.types.CONVEXPOLYHEDRON,
        nI.types.BOX,
        nI.types.CONVEXPOLYHEDRON,
        nI.types.SPHERE,
        nI.types.HEIGHTFIELD,
        nI.types.BOX,
        nI.types.HEIGHTFIELD,
        nI.types.CONVEXPOLYHEDRON,
        nI.types.HEIGHTFIELD,
        nI.types.PARTICLE,
        nI.types.SPHERE,
        nI.types.PLANE,
        nI.types.PARTICLE,
        nI.types.BOX,
        nI.types.PARTICLE,
        nI.types.PARTICLE,
        nI.types.CONVEXPOLYHEDRON,
        nI.types.CYLINDER,
        nI.types.SPHERE,
        nI.types.CYLINDER,
        nI.types.PLANE,
        nI.types.CYLINDER,
        nI.types.BOX,
        nI.types.CYLINDER,
        nI.types.CONVEXPOLYHEDRON,
        nI.types.CYLINDER,
        nI.types.HEIGHTFIELD,
        nI.types.CYLINDER,
        nI.types.PARTICLE,
        nI.types.CYLINDER,
        nI.types.SPHERE,
        nI.types.TRIMESH,
        nI.types.PLANE,
        nI.types.TRIMESH,
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new YI(),
        new YI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new VI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new YI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new mI(),
        new VI(),
        new LI();
      const sC = globalThis.performance || {};
      if (!sC.now) {
        let g = Date.now();
        sC.timing &&
          sC.timing.navigationStart &&
          (g = sC.timing.navigationStart),
          (sC.now = () => Date.now() - g);
      }
      new mI();
      new l.Vector3(), new l.Vector3(1, 1, 1), new l.Quaternion();
      const mC = new l.Object3D();
      function WC(g) {
        const I = (0, G.useRef)(null);
        return g && "function" !== typeof g ? g : I;
      }
      function hC(g) {
        return g.charAt(0).toUpperCase() + g.slice(1);
      }
      function aC(g, I) {
        const C = void 0 === I ? "" : `/${I}`;
        return "function" === typeof g
          ? null
          : g && g.current && `${g.current.uuid}${C}`;
      }
      const VC = new l.Euler(),
        yC = new l.Quaternion(),
        XC = (g) => (I) => g(VC.setFromQuaternion(yC.fromArray(I)).toArray());
      let YC = 0;
      function KC(g, I, C, A, G, b) {
        return (
          void 0 === b && (b = "bodies"),
          (l) => {
            const Z = YC++;
            C[Z] = { [A]: l };
            const c = aC(g, G);
            return (
              c &&
                I.subscribe({ props: { id: Z, target: b, type: A }, uuid: c }),
              () => {
                delete C[Z], I.unsubscribe({ props: Z });
              }
            );
          }
        );
      }
      function uC(g, I) {
        (g.userData = I.userData || {}),
          g.position.set(...(I.position || [0, 0, 0])),
          g.rotation.set(...(I.rotation || [0, 0, 0])),
          g.updateMatrix();
      }
      function nC(g, I, C) {
        let { onCollide: A, onCollideBegin: G, onCollideEnd: b } = I;
        g[C] = { collide: A, collideBegin: G, collideEnd: b };
      }
      function pC(g, I, C, A, b) {
        void 0 === b && (b = []);
        const Z = WC(A),
          {
            worker: c,
            refs: B,
            events: o,
            subscriptions: d,
          } = (0, G.useContext)(GI),
          i = (0, G.useContext)(bI);
        (0, G.useLayoutEffect)(() => {
          Z.current || (Z.current = new l.Object3D());
          const A = Z.current,
            G = c,
            b =
              A instanceof l.InstancedMesh
                ? (A.instanceMatrix.setUsage(l.DynamicDrawUsage), A.count)
                : 1,
            d =
              A instanceof l.InstancedMesh
                ? new Array(b).fill(0).map((g, I) => `${A.uuid}/${I}`)
                : [A.uuid],
            s =
              A instanceof l.InstancedMesh
                ? d.map((G, b) => {
                    const l = I(b);
                    return (
                      uC(mC, l),
                      A.setMatrixAt(b, mC.matrix),
                      (A.instanceMatrix.needsUpdate = !0),
                      (B[G] = A),
                      i && i.add(G, l, g),
                      nC(o, l, G),
                      { ...l, args: C(l.args) }
                    );
                  })
                : d.map((G, b) => {
                    const l = I(b);
                    return (
                      uC(A, l),
                      (B[G] = A),
                      i && i.add(G, l, g),
                      nC(o, l, G),
                      { ...l, args: C(l.args) }
                    );
                  });
          return (
            G.addBodies({
              props: s.map((g) => {
                let {
                  onCollide: I,
                  onCollideBegin: C,
                  onCollideEnd: A,
                  ...G
                } = g;
                return { onCollide: Boolean(I), ...G };
              }),
              type: g,
              uuid: d,
            }),
            () => {
              d.forEach((g) => {
                delete B[g], i && i.remove(g), delete o[g];
              }),
                G.removeBodies({ uuid: d });
            }
          );
        }, b);
        const s = (0, G.useMemo)(() => {
          const g = (g, I) => {
              const C = `set${hC(g)}`;
              return {
                set: (g) => {
                  const A = aC(Z, I);
                  A && c[C]({ props: g, uuid: A });
                },
                subscribe: KC(Z, c, d, g, I),
              };
            },
            I = (g) => ({
              copy: (I) => {
                let { w: C, x: A, y: G, z: b } = I;
                const l = aC(Z, g);
                l && c.setQuaternion({ props: [A, G, b, C], uuid: l });
              },
              set: (I, C, A, G) => {
                const b = aC(Z, g);
                b && c.setQuaternion({ props: [I, C, A, G], uuid: b });
              },
              subscribe: KC(Z, c, d, "quaternion", g),
            }),
            C = (g) => ({
              copy: (I) => {
                let { x: C, y: A, z: G } = I;
                const b = aC(Z, g);
                b && c.setRotation({ props: [C, A, G], uuid: b });
              },
              set: (I, C, A) => {
                const G = aC(Z, g);
                G && c.setRotation({ props: [I, C, A], uuid: G });
              },
              subscribe: (I) => {
                const C = YC++,
                  A = "quaternion",
                  G = aC(Z, g);
                return (
                  (d[C] = { [A]: XC(I) }),
                  G &&
                    c.subscribe({
                      props: { id: C, target: "bodies", type: A },
                      uuid: G,
                    }),
                  () => {
                    delete d[C], c.unsubscribe({ props: C });
                  }
                );
              },
            }),
            A = (g, I) => {
              const C = `set${hC(g)}`;
              return {
                copy: (g) => {
                  let { x: A, y: G, z: b } = g;
                  const l = aC(Z, I);
                  l && c[C]({ props: [A, G, b], uuid: l });
                },
                set: (g, A, G) => {
                  const b = aC(Z, I);
                  b && c[C]({ props: [g, A, G], uuid: b });
                },
                subscribe: KC(Z, c, d, g, I),
              };
            };
          function G(G) {
            return {
              allowSleep: g("allowSleep", G),
              angularDamping: g("angularDamping", G),
              angularFactor: A("angularFactor", G),
              angularVelocity: A("angularVelocity", G),
              applyForce(g, I) {
                const C = aC(Z, G);
                C && c.applyForce({ props: [g, I], uuid: C });
              },
              applyImpulse(g, I) {
                const C = aC(Z, G);
                C && c.applyImpulse({ props: [g, I], uuid: C });
              },
              applyLocalForce(g, I) {
                const C = aC(Z, G);
                C && c.applyLocalForce({ props: [g, I], uuid: C });
              },
              applyLocalImpulse(g, I) {
                const C = aC(Z, G);
                C && c.applyLocalImpulse({ props: [g, I], uuid: C });
              },
              applyTorque(g) {
                const I = aC(Z, G);
                I && c.applyTorque({ props: [g], uuid: I });
              },
              collisionFilterGroup: g("collisionFilterGroup", G),
              collisionFilterMask: g("collisionFilterMask", G),
              collisionResponse: g("collisionResponse", G),
              fixedRotation: g("fixedRotation", G),
              isTrigger: g("isTrigger", G),
              linearDamping: g("linearDamping", G),
              linearFactor: A("linearFactor", G),
              mass: g("mass", G),
              material: g("material", G),
              position: A("position", G),
              quaternion: I(G),
              rotation: C(G),
              sleep() {
                const g = aC(Z, G);
                g && c.sleep({ uuid: g });
              },
              sleepSpeedLimit: g("sleepSpeedLimit", G),
              sleepTimeLimit: g("sleepTimeLimit", G),
              userData: g("userData", G),
              velocity: A("velocity", G),
              wakeUp() {
                const g = aC(Z, G);
                g && c.wakeUp({ uuid: g });
              },
            };
          }
          const b = {};
          return { ...G(void 0), at: (g) => b[g] || (b[g] = G(g)) };
        }, []);
        return [Z, s];
      }
      function RC(g, I, C) {
        return void 0 === I && (I = null), pC("Compound", g, (g) => g, I, C);
      }
      const HC = (g) =>
        (0, Z.jsx)(G.Suspense, {
          fallback: null,
          children: (0, Z.jsx)(dI, { ...g }),
        });
    },
  },
]);
