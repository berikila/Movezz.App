(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6],
  {
    6599: function (e, t, n) {
      "use strict";
      n.d(t, {
        w: function () {
          return a;
        },
      });
      var r = n(87462),
        o = n(67294),
        i = n(99477);
      function a({
        userData: e,
        children: t,
        geometry: n,
        threshold: a = 15,
        color: s = "black",
        ...l
      }) {
        const c = o.useRef(null);
        return (
          o.useLayoutEffect(() => {
            const e = c.current.parent;
            if (e) {
              const t = n || e.geometry;
              (t === c.current.userData.currentGeom &&
                a === c.current.userData.currentThreshold) ||
                ((c.current.userData.currentGeom = t),
                (c.current.userData.currentThreshold = a),
                (c.current.geometry = new i.EdgesGeometry(t, a)));
            }
          }),
          o.createElement(
            "lineSegments",
            (0, r.Z)({ ref: c, raycast: () => null }, l),
            t || o.createElement("lineBasicMaterial", { color: s })
          )
        );
      }
    },
    18626: function (e, t, n) {
      "use strict";
      n.d(t, {
        L: function () {
          return fe;
        },
      });
      var r = n(99477);
      const o = new WeakMap();
      class i extends r.Loader {
        constructor(e) {
          super(e),
            (this.decoderPath = ""),
            (this.decoderConfig = {}),
            (this.decoderBinary = null),
            (this.decoderPending = null),
            (this.workerLimit = 4),
            (this.workerPool = []),
            (this.workerNextTaskID = 1),
            (this.workerSourceURL = ""),
            (this.defaultAttributeIDs = {
              position: "POSITION",
              normal: "NORMAL",
              color: "COLOR",
              uv: "TEX_COORD",
            }),
            (this.defaultAttributeTypes = {
              position: "Float32Array",
              normal: "Float32Array",
              color: "Float32Array",
              uv: "Float32Array",
            });
        }
        setDecoderPath(e) {
          return (this.decoderPath = e), this;
        }
        setDecoderConfig(e) {
          return (this.decoderConfig = e), this;
        }
        setWorkerLimit(e) {
          return (this.workerLimit = e), this;
        }
        load(e, t, n, o) {
          const i = new r.FileLoader(this.manager);
          i.setPath(this.path),
            i.setResponseType("arraybuffer"),
            i.setRequestHeader(this.requestHeader),
            i.setWithCredentials(this.withCredentials),
            i.load(
              e,
              (e) => {
                const n = {
                  attributeIDs: this.defaultAttributeIDs,
                  attributeTypes: this.defaultAttributeTypes,
                  useUniqueIDs: !1,
                };
                this.decodeGeometry(e, n).then(t).catch(o);
              },
              n,
              o
            );
        }
        decodeDracoFile(e, t, n, r) {
          const o = {
            attributeIDs: n || this.defaultAttributeIDs,
            attributeTypes: r || this.defaultAttributeTypes,
            useUniqueIDs: !!n,
          };
          this.decodeGeometry(e, o).then(t);
        }
        decodeGeometry(e, t) {
          for (const o in t.attributeTypes) {
            const e = t.attributeTypes[o];
            void 0 !== e.BYTES_PER_ELEMENT && (t.attributeTypes[o] = e.name);
          }
          const n = JSON.stringify(t);
          if (o.has(e)) {
            const t = o.get(e);
            if (t.key === n) return t.promise;
            if (0 === e.byteLength)
              throw new Error(
                "THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred."
              );
          }
          let r;
          const i = this.workerNextTaskID++,
            a = e.byteLength,
            s = this._getWorker(i, a)
              .then(
                (n) => (
                  (r = n),
                  new Promise((n, o) => {
                    (r._callbacks[i] = { resolve: n, reject: o }),
                      r.postMessage(
                        { type: "decode", id: i, taskConfig: t, buffer: e },
                        [e]
                      );
                  })
                )
              )
              .then((e) => this._createGeometry(e.geometry));
          return (
            s
              .catch(() => !0)
              .then(() => {
                r && i && this._releaseTask(r, i);
              }),
            o.set(e, { key: n, promise: s }),
            s
          );
        }
        _createGeometry(e) {
          const t = new r.BufferGeometry();
          e.index && t.setIndex(new r.BufferAttribute(e.index.array, 1));
          for (let n = 0; n < e.attributes.length; n++) {
            const o = e.attributes[n],
              i = o.name,
              a = o.array,
              s = o.itemSize;
            t.setAttribute(i, new r.BufferAttribute(a, s));
          }
          return t;
        }
        _loadLibrary(e, t) {
          const n = new r.FileLoader(this.manager);
          return (
            n.setPath(this.decoderPath),
            n.setResponseType(t),
            n.setWithCredentials(this.withCredentials),
            new Promise((t, r) => {
              n.load(e, t, void 0, r);
            })
          );
        }
        preload() {
          return this._initDecoder(), this;
        }
        _initDecoder() {
          if (this.decoderPending) return this.decoderPending;
          const e =
              "object" !== typeof WebAssembly ||
              "js" === this.decoderConfig.type,
            t = [];
          return (
            e
              ? t.push(this._loadLibrary("draco_decoder.js", "text"))
              : (t.push(this._loadLibrary("draco_wasm_wrapper.js", "text")),
                t.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))),
            (this.decoderPending = Promise.all(t).then((t) => {
              const n = t[0];
              e || (this.decoderConfig.wasmBinary = t[1]);
              const r = a.toString(),
                o = [
                  "/* draco decoder */",
                  n,
                  "",
                  "/* worker */",
                  r.substring(r.indexOf("{") + 1, r.lastIndexOf("}")),
                ].join("\n");
              this.workerSourceURL = URL.createObjectURL(new Blob([o]));
            })),
            this.decoderPending
          );
        }
        _getWorker(e, t) {
          return this._initDecoder().then(() => {
            if (this.workerPool.length < this.workerLimit) {
              const e = new Worker(this.workerSourceURL);
              (e._callbacks = {}),
                (e._taskCosts = {}),
                (e._taskLoad = 0),
                e.postMessage({
                  type: "init",
                  decoderConfig: this.decoderConfig,
                }),
                (e.onmessage = function (t) {
                  const n = t.data;
                  switch (n.type) {
                    case "decode":
                      e._callbacks[n.id].resolve(n);
                      break;
                    case "error":
                      e._callbacks[n.id].reject(n);
                      break;
                    default:
                      console.error(
                        'THREE.DRACOLoader: Unexpected message, "' +
                          n.type +
                          '"'
                      );
                  }
                }),
                this.workerPool.push(e);
            } else
              this.workerPool.sort(function (e, t) {
                return e._taskLoad > t._taskLoad ? -1 : 1;
              });
            const n = this.workerPool[this.workerPool.length - 1];
            return (n._taskCosts[e] = t), (n._taskLoad += t), n;
          });
        }
        _releaseTask(e, t) {
          (e._taskLoad -= e._taskCosts[t]),
            delete e._callbacks[t],
            delete e._taskCosts[t];
        }
        debug() {
          console.log(
            "Task load: ",
            this.workerPool.map((e) => e._taskLoad)
          );
        }
        dispose() {
          for (let e = 0; e < this.workerPool.length; ++e)
            this.workerPool[e].terminate();
          return (this.workerPool.length = 0), this;
        }
      }
      function a() {
        let e, t;
        function n(e, t, n, r, o, i) {
          const a = i.num_components(),
            s = n.num_points() * a,
            l = s * o.BYTES_PER_ELEMENT,
            c = (function (e, t) {
              switch (t) {
                case Float32Array:
                  return e.DT_FLOAT32;
                case Int8Array:
                  return e.DT_INT8;
                case Int16Array:
                  return e.DT_INT16;
                case Int32Array:
                  return e.DT_INT32;
                case Uint8Array:
                  return e.DT_UINT8;
                case Uint16Array:
                  return e.DT_UINT16;
                case Uint32Array:
                  return e.DT_UINT32;
              }
            })(e, o),
            u = e._malloc(l);
          t.GetAttributeDataArrayForAllPoints(n, i, c, l, u);
          const f = new o(e.HEAPF32.buffer, u, s).slice();
          return e._free(u), { name: r, array: f, itemSize: a };
        }
        onmessage = function (r) {
          const o = r.data;
          switch (o.type) {
            case "init":
              (e = o.decoderConfig),
                (t = new Promise(function (t) {
                  (e.onModuleLoaded = function (e) {
                    t({ draco: e });
                  }),
                    DracoDecoderModule(e);
                }));
              break;
            case "decode":
              const r = o.buffer,
                i = o.taskConfig;
              t.then((e) => {
                const t = e.draco,
                  a = new t.Decoder(),
                  s = new t.DecoderBuffer();
                s.Init(new Int8Array(r), r.byteLength);
                try {
                  const e = (function (e, t, r, o) {
                      const i = o.attributeIDs,
                        a = o.attributeTypes;
                      let s, l;
                      const c = t.GetEncodedGeometryType(r);
                      if (c === e.TRIANGULAR_MESH)
                        (s = new e.Mesh()), (l = t.DecodeBufferToMesh(r, s));
                      else {
                        if (c !== e.POINT_CLOUD)
                          throw new Error(
                            "THREE.DRACOLoader: Unexpected geometry type."
                          );
                        (s = new e.PointCloud()),
                          (l = t.DecodeBufferToPointCloud(r, s));
                      }
                      if (!l.ok() || 0 === s.ptr)
                        throw new Error(
                          "THREE.DRACOLoader: Decoding failed: " + l.error_msg()
                        );
                      const u = { index: null, attributes: [] };
                      for (const f in i) {
                        const r = self[a[f]];
                        let l, c;
                        if (o.useUniqueIDs)
                          (c = i[f]), (l = t.GetAttributeByUniqueId(s, c));
                        else {
                          if (((c = t.GetAttributeId(s, e[i[f]])), -1 === c))
                            continue;
                          l = t.GetAttribute(s, c);
                        }
                        u.attributes.push(n(e, t, s, f, r, l));
                      }
                      c === e.TRIANGULAR_MESH &&
                        (u.index = (function (e, t, n) {
                          const r = 3 * n.num_faces(),
                            o = 4 * r,
                            i = e._malloc(o);
                          t.GetTrianglesUInt32Array(n, o, i);
                          const a = new Uint32Array(
                            e.HEAPF32.buffer,
                            i,
                            r
                          ).slice();
                          return e._free(i), { array: a, itemSize: 1 };
                        })(e, t, s));
                      return e.destroy(s), u;
                    })(t, a, s, i),
                    r = e.attributes.map((e) => e.array.buffer);
                  e.index && r.push(e.index.array.buffer),
                    self.postMessage(
                      { type: "decode", id: o.id, geometry: e },
                      r
                    );
                } catch (l) {
                  console.error(l),
                    self.postMessage({
                      type: "error",
                      id: o.id,
                      error: l.message,
                    });
                } finally {
                  t.destroy(s), t.destroy(a);
                }
              });
          }
        };
      }
      let s;
      const l = () => {
        if (s) return s;
        const e = new Uint8Array([
            0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 3, 2, 0, 0, 5, 3,
            1, 0, 1, 12, 1, 0, 10, 22, 2, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10,
            0, 0, 11, 7, 0, 65, 0, 253, 15, 26, 11,
          ]),
          t = new Uint8Array([
            32, 0, 65, 253, 3, 1, 2, 34, 4, 106, 6, 5, 11, 8, 7, 20, 13, 33, 12,
            16, 128, 9, 116, 64, 19, 113, 127, 15, 10, 21, 22, 14, 255, 66, 24,
            54, 136, 107, 18, 23, 192, 26, 114, 118, 132, 17, 77, 101, 130, 144,
            27, 87, 131, 44, 45, 74, 156, 154, 70, 167,
          ]);
        if ("object" !== typeof WebAssembly) return { supported: !1 };
        let n,
          r =
            "B9h9z9tFBBBF8fL9gBB9gLaaaaaFa9gEaaaB9gFaFa9gEaaaFaEMcBFFFGGGEIIILF9wFFFLEFBFKNFaFCx/IFMO/LFVK9tv9t9vq95GBt9f9f939h9z9t9f9j9h9s9s9f9jW9vq9zBBp9tv9z9o9v9wW9f9kv9j9v9kv9WvqWv94h919m9mvqBF8Z9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv94h919m9mvqBGy9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv949TvZ91v9u9jvBEn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9P9jWBIi9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9R919hWBLn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9F949wBKI9z9iqlBOc+x8ycGBM/qQFTa8jUUUUBCU/EBlHL8kUUUUBC9+RKGXAGCFJAI9LQBCaRKAE2BBC+gF9HQBALAEAIJHOAGlAGTkUUUBRNCUoBAG9uC/wgBZHKCUGAKCUG9JyRVAECFJRICBRcGXEXAcAF9PQFAVAFAclAcAVJAF9JyRMGXGXAG9FQBAMCbJHKC9wZRSAKCIrCEJCGrRQANCUGJRfCBRbAIRTEXGXAOATlAQ9PQBCBRISEMATAQJRIGXAS9FQBCBRtCBREEXGXAOAIlCi9PQBCBRISLMANCU/CBJAEJRKGXGXGXGXGXATAECKrJ2BBAtCKZrCEZfIBFGEBMAKhB83EBAKCNJhB83EBSEMAKAI2BIAI2BBHmCKrHYAYCE6HYy86BBAKCFJAICIJAYJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCGJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCEJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCIJAYAmJHY2BBAI2BFHmCKrHPAPCE6HPy86BBAKCLJAYAPJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCKJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCOJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCNJAYAmJHY2BBAI2BGHmCKrHPAPCE6HPy86BBAKCVJAYAPJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCcJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCMJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCSJAYAmJHm2BBAI2BEHICKrHYAYCE6HYy86BBAKCQJAmAYJHm2BBAICIrCEZHYAYCE6HYy86BBAKCfJAmAYJHm2BBAICGrCEZHYAYCE6HYy86BBAKCbJAmAYJHK2BBAICEZHIAICE6HIy86BBAKAIJRISGMAKAI2BNAI2BBHmCIrHYAYCb6HYy86BBAKCFJAICNJAYJHY2BBAmCbZHmAmCb6Hmy86BBAKCGJAYAmJHm2BBAI2BFHYCIrHPAPCb6HPy86BBAKCEJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCIJAmAYJHm2BBAI2BGHYCIrHPAPCb6HPy86BBAKCLJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCKJAmAYJHm2BBAI2BEHYCIrHPAPCb6HPy86BBAKCOJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCNJAmAYJHm2BBAI2BIHYCIrHPAPCb6HPy86BBAKCVJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCcJAmAYJHm2BBAI2BLHYCIrHPAPCb6HPy86BBAKCMJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCSJAmAYJHm2BBAI2BKHYCIrHPAPCb6HPy86BBAKCQJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCfJAmAYJHm2BBAI2BOHICIrHYAYCb6HYy86BBAKCbJAmAYJHK2BBAICbZHIAICb6HIy86BBAKAIJRISFMAKAI8pBB83BBAKCNJAICNJ8pBB83BBAICTJRIMAtCGJRtAECTJHEAS9JQBMMGXAIQBCBRISEMGXAM9FQBANAbJ2BBRtCBRKAfREEXAEANCU/CBJAKJ2BBHTCFrCBATCFZl9zAtJHt86BBAEAGJREAKCFJHKAM9HQBMMAfCFJRfAIRTAbCFJHbAG9HQBMMABAcAG9sJANCUGJAMAG9sTkUUUBpANANCUGJAMCaJAG9sJAGTkUUUBpMAMCBAIyAcJRcAIQBMC9+RKSFMCBC99AOAIlAGCAAGCA9Ly6yRKMALCU/EBJ8kUUUUBAKM+OmFTa8jUUUUBCoFlHL8kUUUUBC9+RKGXAFCE9uHOCtJAI9LQBCaRKAE2BBHNC/wFZC/gF9HQBANCbZHVCF9LQBALCoBJCgFCUFT+JUUUBpALC84Jha83EBALC8wJha83EBALC8oJha83EBALCAJha83EBALCiJha83EBALCTJha83EBALha83ENALha83EBAEAIJC9wJRcAECFJHNAOJRMGXAF9FQBCQCbAVCF6yRSABRECBRVCBRQCBRfCBRICBRKEXGXAMAcuQBC9+RKSEMGXGXAN2BBHOC/vF9LQBALCoBJAOCIrCa9zAKJCbZCEWJHb8oGIRTAb8oGBRtGXAOCbZHbAS9PQBALAOCa9zAIJCbZCGWJ8oGBAVAbyROAb9FRbGXGXAGCG9HQBABAt87FBABCIJAO87FBABCGJAT87FBSFMAEAtjGBAECNJAOjGBAECIJATjGBMAVAbJRVALCoBJAKCEWJHmAOjGBAmATjGIALAICGWJAOjGBALCoBJAKCFJCbZHKCEWJHTAtjGBATAOjGIAIAbJRIAKCFJRKSGMGXGXAbCb6QBAQAbJAbC989zJCFJRQSFMAM1BBHbCgFZROGXGXAbCa9MQBAMCFJRMSFMAM1BFHbCgBZCOWAOCgBZqROGXAbCa9MQBAMCGJRMSFMAM1BGHbCgBZCfWAOqROGXAbCa9MQBAMCEJRMSFMAM1BEHbCgBZCdWAOqROGXAbCa9MQBAMCIJRMSFMAM2BIC8cWAOqROAMCLJRMMAOCFrCBAOCFZl9zAQJRQMGXGXAGCG9HQBABAt87FBABCIJAQ87FBABCGJAT87FBSFMAEAtjGBAECNJAQjGBAECIJATjGBMALCoBJAKCEWJHOAQjGBAOATjGIALAICGWJAQjGBALCoBJAKCFJCbZHKCEWJHOAtjGBAOAQjGIAICFJRIAKCFJRKSFMGXAOCDF9LQBALAIAcAOCbZJ2BBHbCIrHTlCbZCGWJ8oGBAVCFJHtATyROALAIAblCbZCGWJ8oGBAtAT9FHmJHtAbCbZHTyRbAT9FRTGXGXAGCG9HQBABAV87FBABCIJAb87FBABCGJAO87FBSFMAEAVjGBAECNJAbjGBAECIJAOjGBMALAICGWJAVjGBALCoBJAKCEWJHYAOjGBAYAVjGIALAICFJHICbZCGWJAOjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAIAmJCbZHICGWJAbjGBALCoBJAKCGJCbZHKCEWJHOAVjGBAOAbjGIAKCFJRKAIATJRIAtATJRVSFMAVCBAM2BBHYyHTAOC/+F6HPJROAYCbZRtGXGXAYCIrHmQBAOCFJRbSFMAORbALAIAmlCbZCGWJ8oGBROMGXGXAtQBAbCFJRVSFMAbRVALAIAYlCbZCGWJ8oGBRbMGXGXAP9FQBAMCFJRYSFMAM1BFHYCgFZRTGXGXAYCa9MQBAMCGJRYSFMAM1BGHYCgBZCOWATCgBZqRTGXAYCa9MQBAMCEJRYSFMAM1BEHYCgBZCfWATqRTGXAYCa9MQBAMCIJRYSFMAM1BIHYCgBZCdWATqRTGXAYCa9MQBAMCLJRYSFMAMCKJRYAM2BLC8cWATqRTMATCFrCBATCFZl9zAQJHQRTMGXGXAmCb6QBAYRPSFMAY1BBHMCgFZROGXGXAMCa9MQBAYCFJRPSFMAY1BFHMCgBZCOWAOCgBZqROGXAMCa9MQBAYCGJRPSFMAY1BGHMCgBZCfWAOqROGXAMCa9MQBAYCEJRPSFMAY1BEHMCgBZCdWAOqROGXAMCa9MQBAYCIJRPSFMAYCLJRPAY2BIC8cWAOqROMAOCFrCBAOCFZl9zAQJHQROMGXGXAtCb6QBAPRMSFMAP1BBHMCgFZRbGXGXAMCa9MQBAPCFJRMSFMAP1BFHMCgBZCOWAbCgBZqRbGXAMCa9MQBAPCGJRMSFMAP1BGHMCgBZCfWAbqRbGXAMCa9MQBAPCEJRMSFMAP1BEHMCgBZCdWAbqRbGXAMCa9MQBAPCIJRMSFMAPCLJRMAP2BIC8cWAbqRbMAbCFrCBAbCFZl9zAQJHQRbMGXGXAGCG9HQBABAT87FBABCIJAb87FBABCGJAO87FBSFMAEATjGBAECNJAbjGBAECIJAOjGBMALCoBJAKCEWJHYAOjGBAYATjGIALAICGWJATjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAICFJHICbZCGWJAOjGBALCoBJAKCGJCbZCEWJHOATjGBAOAbjGIALAIAm9FAmCb6qJHICbZCGWJAbjGBAIAt9FAtCb6qJRIAKCEJRKMANCFJRNABCKJRBAECSJREAKCbZRKAICbZRIAfCEJHfAF9JQBMMCBC99AMAc6yRKMALCoFJ8kUUUUBAKM/tIFGa8jUUUUBCTlRLC9+RKGXAFCLJAI9LQBCaRKAE2BBC/+FZC/QF9HQBALhB83ENAECFJRKAEAIJC98JREGXAF9FQBGXAGCG6QBEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMALCNJAICFZCGWqHGAICGrCBAICFrCFZl9zAG8oGBJHIjGBABAIjGBABCIJRBAFCaJHFQBSGMMEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMABAICGrCBAICFrCFZl9zALCNJAICFZCGWqHI8oGBJHG87FBAIAGjGBABCGJRBAFCaJHFQBMMCBC99AKAE6yRKMAKM+lLKFaF99GaG99FaG99GXGXAGCI9HQBAF9FQFEXGXGX9DBBB8/9DBBB+/ABCGJHG1BB+yAB1BBHE+yHI+L+TABCFJHL1BBHK+yHO+L+THN9DBBBB9gHVyAN9DBB/+hANAN+U9DBBBBANAVyHcAc+MHMAECa3yAI+SHIAI+UAcAMAKCa3yAO+SHcAc+U+S+S+R+VHO+U+SHN+L9DBBB9P9d9FQBAN+oRESFMCUUUU94REMAGAE86BBGXGX9DBBB8/9DBBB+/Ac9DBBBB9gyAcAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMALAG86BBGXGX9DBBB8/9DBBB+/AI9DBBBB9gyAIAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMABAG86BBABCIJRBAFCaJHFQBSGMMAF9FQBEXGXGX9DBBB8/9DBBB+/ABCIJHG8uFB+yAB8uFBHE+yHI+L+TABCGJHL8uFBHK+yHO+L+THN9DBBBB9gHVyAN9DB/+g6ANAN+U9DBBBBANAVyHcAc+MHMAECa3yAI+SHIAI+UAcAMAKCa3yAO+SHcAc+U+S+S+R+VHO+U+SHN+L9DBBB9P9d9FQBAN+oRESFMCUUUU94REMAGAE87FBGXGX9DBBB8/9DBBB+/Ac9DBBBB9gyAcAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMALAG87FBGXGX9DBBB8/9DBBB+/AI9DBBBB9gyAIAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMABAG87FBABCNJRBAFCaJHFQBMMM/SEIEaE99EaF99GXAF9FQBCBREABRIEXGXGX9D/zI818/AICKJ8uFBHLCEq+y+VHKAI8uFB+y+UHO9DB/+g6+U9DBBB8/9DBBB+/AO9DBBBB9gy+SHN+L9DBBB9P9d9FQBAN+oRVSFMCUUUU94RVMAICIJ8uFBRcAICGJ8uFBRMABALCFJCEZAEqCFWJAV87FBGXGXAKAM+y+UHN9DB/+g6+U9DBBB8/9DBBB+/AN9DBBBB9gy+SHS+L9DBBB9P9d9FQBAS+oRMSFMCUUUU94RMMABALCGJCEZAEqCFWJAM87FBGXGXAKAc+y+UHK9DB/+g6+U9DBBB8/9DBBB+/AK9DBBBB9gy+SHS+L9DBBB9P9d9FQBAS+oRcSFMCUUUU94RcMABALCaJCEZAEqCFWJAc87FBGXGX9DBBU8/AOAO+U+TANAN+U+TAKAK+U+THO9DBBBBAO9DBBBB9gy+R9DB/+g6+U9DBBB8/+SHO+L9DBBB9P9d9FQBAO+oRcSFMCUUUU94RcMABALCEZAEqCFWJAc87FBAICNJRIAECIJREAFCaJHFQBMMM9JBGXAGCGrAF9sHF9FQBEXABAB8oGBHGCNWCN91+yAGCi91CnWCUUU/8EJ+++U84GBABCIJRBAFCaJHFQBMMM9TFEaCBCB8oGUkUUBHFABCEJC98ZJHBjGUkUUBGXGXAB8/BCTWHGuQBCaREABAGlCggEJCTrXBCa6QFMAFREMAEM/lFFFaGXGXAFABqCEZ9FQBABRESFMGXGXAGCT9PQBABRESFMABREEXAEAF8oGBjGBAECIJAFCIJ8oGBjGBAECNJAFCNJ8oGBjGBAECSJAFCSJ8oGBjGBAECTJREAFCTJRFAGC9wJHGCb9LQBMMAGCI9JQBEXAEAF8oGBjGBAFCIJRFAECIJREAGC98JHGCE9LQBMMGXAG9FQBEXAEAF2BB86BBAECFJREAFCFJRFAGCaJHGQBMMABMoFFGaGXGXABCEZ9FQBABRESFMAFCgFZC+BwsN9sRIGXGXAGCT9PQBABRESFMABREEXAEAIjGBAECSJAIjGBAECNJAIjGBAECIJAIjGBAECTJREAGC9wJHGCb9LQBMMAGCI9JQBEXAEAIjGBAECIJREAGC98JHGCE9LQBMMGXAG9FQBEXAEAF86BBAECFJREAGCaJHGQBMMABMMMFBCUNMIT9kBB";
        WebAssembly.validate(e) &&
          (r =
            "B9h9z9tFBBBFiI9gBB9gLaaaaaFa9gEaaaB9gFaFaEMcBBFBFFGGGEILF9wFFFLEFBFKNFaFCx/aFMO/LFVK9tv9t9vq95GBt9f9f939h9z9t9f9j9h9s9s9f9jW9vq9zBBp9tv9z9o9v9wW9f9kv9j9v9kv9WvqWv94h919m9mvqBG8Z9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv94h919m9mvqBIy9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv949TvZ91v9u9jvBLn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9P9jWBKi9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9R919hWBOn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9F949wBNI9z9iqlBVc+N9IcIBTEM9+FLa8jUUUUBCTlRBCBRFEXCBRGCBREEXABCNJAGJAECUaAFAGrCFZHIy86BBAEAIJREAGCFJHGCN9HQBMAFCx+YUUBJAE86BBAFCEWCxkUUBJAB8pEN83EBAFCFJHFCUG9HQBMMk8lLbaE97F9+FaL978jUUUUBCU/KBlHL8kUUUUBC9+RKGXAGCFJAI9LQBCaRKAE2BBC+gF9HQBALAEAIJHOAGlAG/8cBBCUoBAG9uC/wgBZHKCUGAKCUG9JyRNAECFJRKCBRVGXEXAVAF9PQFANAFAVlAVANJAF9JyRcGXGXAG9FQBAcCbJHIC9wZHMCE9sRSAMCFWRQAICIrCEJCGrRfCBRbEXAKRTCBRtGXEXGXAOATlAf9PQBCBRKSLMALCU/CBJAtAM9sJRmATAfJRKCBREGXAMCoB9JQBAOAKlC/gB9JQBCBRIEXAmAIJREGXGXGXGXGXATAICKrJ2BBHYCEZfIBFGEBMAECBDtDMIBSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMIBAKCTJRKMGXGXGXGXGXAYCGrCEZfIBFGEBMAECBDtDMITSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMITAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMITAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMITAKCTJRKMGXGXGXGXGXAYCIrCEZfIBFGEBMAECBDtDMIASEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIAAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIAAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMIAAKCTJRKMGXGXGXGXGXAYCKrfIBFGEBMAECBDtDMI8wSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHYCEWCxkUUBJDBEBAYCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHYCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMI8wAKCIJAeDeBJAYCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHYCEWCxkUUBJDBEBAYCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHYCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMI8wAKCNJAeDeBJAYCx+YUUBJ2BBJRKSFMAEAKDBBBDMI8wAKCTJRKMAICoBJREAICUFJAM9LQFAERIAOAKlC/fB9LQBMMGXAEAM9PQBAECErRIEXGXAOAKlCi9PQBCBRKSOMAmAEJRYGXGXGXGXGXATAECKrJ2BBAICKZrCEZfIBFGEBMAYCBDtDMIBSEMAYAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAYAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAYAKDBBBDMIBAKCTJRKMAICGJRIAECTJHEAM9JQBMMGXAK9FQBAKRTAtCFJHtCI6QGSFMMCBRKSEMGXAM9FQBALCUGJAbJREALAbJDBGBReCBRYEXAEALCU/CBJAYJHIDBIBHdCFD9tAdCFDbHPD9OD9hD9RHdAIAMJDBIBH8ZCFD9tA8ZAPD9OD9hD9RH8ZDQBTFtGmEYIPLdKeOnHpAIAQJDBIBHyCFD9tAyAPD9OD9hD9RHyAIASJDBIBH8cCFD9tA8cAPD9OD9hD9RH8cDQBTFtGmEYIPLdKeOnH8dDQBFTtGEmYILPdKOenHPAPDQBFGEBFGEBFGEBFGEAeD9uHeDyBjGBAEAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeApA8dDQNVi8ZcMpySQ8c8dfb8e8fHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeAdA8ZDQNiV8ZcpMyS8cQ8df8eb8fHdAyA8cDQNiV8ZcpMyS8cQ8df8eb8fH8ZDQBFTtGEmYILPdKOenHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeAdA8ZDQNVi8ZcMpySQ8c8dfb8e8fHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJREAYCTJHYAM9JQBMMAbCIJHbAG9JQBMMABAVAG9sJALCUGJAcAG9s/8cBBALALCUGJAcCaJAG9sJAG/8cBBMAcCBAKyAVJRVAKQBMC9+RKSFMCBC99AOAKlAGCAAGCA9Ly6yRKMALCU/KBJ8kUUUUBAKMNBT+BUUUBM+KmFTa8jUUUUBCoFlHL8kUUUUBC9+RKGXAFCE9uHOCtJAI9LQBCaRKAE2BBHNC/wFZC/gF9HQBANCbZHVCF9LQBALCoBJCgFCUF/8MBALC84Jha83EBALC8wJha83EBALC8oJha83EBALCAJha83EBALCiJha83EBALCTJha83EBALha83ENALha83EBAEAIJC9wJRcAECFJHNAOJRMGXAF9FQBCQCbAVCF6yRSABRECBRVCBRQCBRfCBRICBRKEXGXAMAcuQBC9+RKSEMGXGXAN2BBHOC/vF9LQBALCoBJAOCIrCa9zAKJCbZCEWJHb8oGIRTAb8oGBRtGXAOCbZHbAS9PQBALAOCa9zAIJCbZCGWJ8oGBAVAbyROAb9FRbGXGXAGCG9HQBABAt87FBABCIJAO87FBABCGJAT87FBSFMAEAtjGBAECNJAOjGBAECIJATjGBMAVAbJRVALCoBJAKCEWJHmAOjGBAmATjGIALAICGWJAOjGBALCoBJAKCFJCbZHKCEWJHTAtjGBATAOjGIAIAbJRIAKCFJRKSGMGXGXAbCb6QBAQAbJAbC989zJCFJRQSFMAM1BBHbCgFZROGXGXAbCa9MQBAMCFJRMSFMAM1BFHbCgBZCOWAOCgBZqROGXAbCa9MQBAMCGJRMSFMAM1BGHbCgBZCfWAOqROGXAbCa9MQBAMCEJRMSFMAM1BEHbCgBZCdWAOqROGXAbCa9MQBAMCIJRMSFMAM2BIC8cWAOqROAMCLJRMMAOCFrCBAOCFZl9zAQJRQMGXGXAGCG9HQBABAt87FBABCIJAQ87FBABCGJAT87FBSFMAEAtjGBAECNJAQjGBAECIJATjGBMALCoBJAKCEWJHOAQjGBAOATjGIALAICGWJAQjGBALCoBJAKCFJCbZHKCEWJHOAtjGBAOAQjGIAICFJRIAKCFJRKSFMGXAOCDF9LQBALAIAcAOCbZJ2BBHbCIrHTlCbZCGWJ8oGBAVCFJHtATyROALAIAblCbZCGWJ8oGBAtAT9FHmJHtAbCbZHTyRbAT9FRTGXGXAGCG9HQBABAV87FBABCIJAb87FBABCGJAO87FBSFMAEAVjGBAECNJAbjGBAECIJAOjGBMALAICGWJAVjGBALCoBJAKCEWJHYAOjGBAYAVjGIALAICFJHICbZCGWJAOjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAIAmJCbZHICGWJAbjGBALCoBJAKCGJCbZHKCEWJHOAVjGBAOAbjGIAKCFJRKAIATJRIAtATJRVSFMAVCBAM2BBHYyHTAOC/+F6HPJROAYCbZRtGXGXAYCIrHmQBAOCFJRbSFMAORbALAIAmlCbZCGWJ8oGBROMGXGXAtQBAbCFJRVSFMAbRVALAIAYlCbZCGWJ8oGBRbMGXGXAP9FQBAMCFJRYSFMAM1BFHYCgFZRTGXGXAYCa9MQBAMCGJRYSFMAM1BGHYCgBZCOWATCgBZqRTGXAYCa9MQBAMCEJRYSFMAM1BEHYCgBZCfWATqRTGXAYCa9MQBAMCIJRYSFMAM1BIHYCgBZCdWATqRTGXAYCa9MQBAMCLJRYSFMAMCKJRYAM2BLC8cWATqRTMATCFrCBATCFZl9zAQJHQRTMGXGXAmCb6QBAYRPSFMAY1BBHMCgFZROGXGXAMCa9MQBAYCFJRPSFMAY1BFHMCgBZCOWAOCgBZqROGXAMCa9MQBAYCGJRPSFMAY1BGHMCgBZCfWAOqROGXAMCa9MQBAYCEJRPSFMAY1BEHMCgBZCdWAOqROGXAMCa9MQBAYCIJRPSFMAYCLJRPAY2BIC8cWAOqROMAOCFrCBAOCFZl9zAQJHQROMGXGXAtCb6QBAPRMSFMAP1BBHMCgFZRbGXGXAMCa9MQBAPCFJRMSFMAP1BFHMCgBZCOWAbCgBZqRbGXAMCa9MQBAPCGJRMSFMAP1BGHMCgBZCfWAbqRbGXAMCa9MQBAPCEJRMSFMAP1BEHMCgBZCdWAbqRbGXAMCa9MQBAPCIJRMSFMAPCLJRMAP2BIC8cWAbqRbMAbCFrCBAbCFZl9zAQJHQRbMGXGXAGCG9HQBABAT87FBABCIJAb87FBABCGJAO87FBSFMAEATjGBAECNJAbjGBAECIJAOjGBMALCoBJAKCEWJHYAOjGBAYATjGIALAICGWJATjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAICFJHICbZCGWJAOjGBALCoBJAKCGJCbZCEWJHOATjGBAOAbjGIALAIAm9FAmCb6qJHICbZCGWJAbjGBAIAt9FAtCb6qJRIAKCEJRKMANCFJRNABCKJRBAECSJREAKCbZRKAICbZRIAfCEJHfAF9JQBMMCBC99AMAc6yRKMALCoFJ8kUUUUBAKM/tIFGa8jUUUUBCTlRLC9+RKGXAFCLJAI9LQBCaRKAE2BBC/+FZC/QF9HQBALhB83ENAECFJRKAEAIJC98JREGXAF9FQBGXAGCG6QBEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMALCNJAICFZCGWqHGAICGrCBAICFrCFZl9zAG8oGBJHIjGBABAIjGBABCIJRBAFCaJHFQBSGMMEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMABAICGrCBAICFrCFZl9zALCNJAICFZCGWqHI8oGBJHG87FBAIAGjGBABCGJRBAFCaJHFQBMMCBC99AKAE6yRKMAKM/dLEK97FaF97GXGXAGCI9HQBAF9FQFCBRGEXABABDBBBHECiD+rFCiD+sFD/6FHIAECND+rFCiD+sFD/6FAID/gFAECTD+rFCiD+sFD/6FHLD/gFD/kFD/lFHKCBDtD+2FHOAICUUUU94DtHND9OD9RD/kFHI9DBB/+hDYAIAID/mFAKAKD/mFALAOALAND9OD9RD/kFHIAID/mFD/kFD/kFD/jFD/nFHLD/mF9DBBX9LDYHOD/kFCgFDtD9OAECUUU94DtD9OD9QAIALD/mFAOD/kFCND+rFCU/+EDtD9OD9QAKALD/mFAOD/kFCTD+rFCUU/8ODtD9OD9QDMBBABCTJRBAGCIJHGAF9JQBSGMMAF9FQBCBRGEXABCTJHVAVDBBBHECBDtHOCUU98D8cFCUU98D8cEHND9OABDBBBHKAEDQILKOSQfbPden8c8d8e8fCggFDtD9OD/6FAKAEDQBFGENVcMTtmYi8ZpyHECTD+sFD/6FHID/gFAECTD+rFCTD+sFD/6FHLD/gFD/kFD/lFHE9DB/+g6DYALAEAOD+2FHOALCUUUU94DtHcD9OD9RD/kFHLALD/mFAEAED/mFAIAOAIAcD9OD9RD/kFHEAED/mFD/kFD/kFD/jFD/nFHID/mF9DBBX9LDYHOD/kFCTD+rFALAID/mFAOD/kFCggEDtD9OD9QHLAEAID/mFAOD/kFCaDbCBDnGCBDnECBDnKCBDnOCBDncCBDnMCBDnfCBDnbD9OHEDQNVi8ZcMpySQ8c8dfb8e8fD9QDMBBABAKAND9OALAEDQBFTtGEmYILPdKOenD9QDMBBABCAJRBAGCIJHGAF9JQBMMM/hEIGaF97FaL978jUUUUBCTlREGXAF9FQBCBRIEXAEABDBBBHLABCTJHKDBBBHODQILKOSQfbPden8c8d8e8fHNCTD+sFHVCID+rFDMIBAB9DBBU8/DY9D/zI818/DYAVCEDtD9QD/6FD/nFHVALAODQBFGENVcMTtmYi8ZpyHLCTD+rFCTD+sFD/6FD/mFHOAOD/mFAVALCTD+sFD/6FD/mFHcAcD/mFAVANCTD+rFCTD+sFD/6FD/mFHNAND/mFD/kFD/kFD/lFCBDtD+4FD/jF9DB/+g6DYHVD/mF9DBBX9LDYHLD/kFCggEDtHMD9OAcAVD/mFALD/kFCTD+rFD9QHcANAVD/mFALD/kFCTD+rFAOAVD/mFALD/kFAMD9OD9QHVDQBFTtGEmYILPdKOenHLD8dBAEDBIBDyB+t+J83EBABCNJALD8dFAEDBIBDyF+t+J83EBAKAcAVDQNVi8ZcMpySQ8c8dfb8e8fHVD8dBAEDBIBDyG+t+J83EBABCiJAVD8dFAEDBIBDyE+t+J83EBABCAJRBAICIJHIAF9JQBMMM9jFF97GXAGCGrAF9sHG9FQBCBRFEXABABDBBBHECND+rFCND+sFD/6FAECiD+sFCnD+rFCUUU/8EDtD+uFD/mFDMBBABCTJRBAFCIJHFAG9JQBMMM9TFEaCBCB8oGUkUUBHFABCEJC98ZJHBjGUkUUBGXGXAB8/BCTWHGuQBCaREABAGlCggEJCTrXBCa6QFMAFREMAEMMMFBCUNMIT9tBB");
        const o = WebAssembly.instantiate(
          (function (e) {
            const n = new Uint8Array(e.length);
            for (let t = 0; t < e.length; ++t) {
              const r = e.charCodeAt(t);
              n[t] =
                r > 96
                  ? r - 71
                  : r > 64
                  ? r - 65
                  : r > 47
                  ? r + 4
                  : r > 46
                  ? 63
                  : 62;
            }
            let r = 0;
            for (let o = 0; o < e.length; ++o)
              n[r++] = n[o] < 60 ? t[n[o]] : 64 * (n[o] - 60) + n[++o];
            return n.buffer.slice(0, r);
          })(r),
          {}
        ).then((e) => {
          (n = e.instance), n.exports.__wasm_call_ctors();
        });
        function i(e, t, r, o, i, a) {
          const s = n.exports.sbrk,
            l = (r + 3) & -4,
            c = s(l * o),
            u = s(i.length),
            f = new Uint8Array(n.exports.memory.buffer);
          f.set(i, u);
          const d = e(c, r, o, u, i.length);
          if (
            (0 === d && a && a(c, l, o),
            t.set(f.subarray(c, c + r * o)),
            s(c - s(0)),
            0 !== d)
          )
            throw new Error(`Malformed buffer data: ${d}`);
        }
        const a = {
            0: "",
            1: "meshopt_decodeFilterOct",
            2: "meshopt_decodeFilterQuat",
            3: "meshopt_decodeFilterExp",
            NONE: "",
            OCTAHEDRAL: "meshopt_decodeFilterOct",
            QUATERNION: "meshopt_decodeFilterQuat",
            EXPONENTIAL: "meshopt_decodeFilterExp",
          },
          l = {
            0: "meshopt_decodeVertexBuffer",
            1: "meshopt_decodeIndexBuffer",
            2: "meshopt_decodeIndexSequence",
            ATTRIBUTES: "meshopt_decodeVertexBuffer",
            TRIANGLES: "meshopt_decodeIndexBuffer",
            INDICES: "meshopt_decodeIndexSequence",
          };
        return (
          (s = {
            ready: o,
            supported: !0,
            decodeVertexBuffer(e, t, r, o, s) {
              i(
                n.exports.meshopt_decodeVertexBuffer,
                e,
                t,
                r,
                o,
                n.exports[a[s]]
              );
            },
            decodeIndexBuffer(e, t, r, o) {
              i(n.exports.meshopt_decodeIndexBuffer, e, t, r, o);
            },
            decodeIndexSequence(e, t, r, o) {
              i(n.exports.meshopt_decodeIndexSequence, e, t, r, o);
            },
            decodeGltfBuffer(e, t, r, o, s, c) {
              i(n.exports[l[s]], e, t, r, o, n.exports[a[c]]);
            },
          }),
          s
        );
      };
      class c extends r.Loader {
        constructor(e) {
          super(e),
            (this.dracoLoader = null),
            (this.ktx2Loader = null),
            (this.meshoptDecoder = null),
            (this.pluginCallbacks = []),
            this.register(function (e) {
              return new h(e);
            }),
            this.register(function (e) {
              return new A(e);
            }),
            this.register(function (e) {
              return new B(e);
            }),
            this.register(function (e) {
              return new m(e);
            }),
            this.register(function (e) {
              return new g(e);
            }),
            this.register(function (e) {
              return new v(e);
            }),
            this.register(function (e) {
              return new y(e);
            }),
            this.register(function (e) {
              return new b(e);
            }),
            this.register(function (e) {
              return new d(e);
            }),
            this.register(function (e) {
              return new C(e);
            });
        }
        load(e, t, n, o) {
          const i = this;
          let a;
          (a =
            "" !== this.resourcePath
              ? this.resourcePath
              : "" !== this.path
              ? this.path
              : r.LoaderUtils.extractUrlBase(e)),
            this.manager.itemStart(e);
          const s = function (t) {
              o ? o(t) : console.error(t),
                i.manager.itemError(e),
                i.manager.itemEnd(e);
            },
            l = new r.FileLoader(this.manager);
          l.setPath(this.path),
            l.setResponseType("arraybuffer"),
            l.setRequestHeader(this.requestHeader),
            l.setWithCredentials(this.withCredentials),
            l.load(
              e,
              function (n) {
                try {
                  i.parse(
                    n,
                    a,
                    function (n) {
                      t(n), i.manager.itemEnd(e);
                    },
                    s
                  );
                } catch (r) {
                  s(r);
                }
              },
              n,
              s
            );
        }
        setDRACOLoader(e) {
          return (this.dracoLoader = e), this;
        }
        setDDSLoader() {
          throw new Error(
            'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".'
          );
        }
        setKTX2Loader(e) {
          return (this.ktx2Loader = e), this;
        }
        setMeshoptDecoder(e) {
          return (this.meshoptDecoder = e), this;
        }
        register(e) {
          return (
            -1 === this.pluginCallbacks.indexOf(e) &&
              this.pluginCallbacks.push(e),
            this
          );
        }
        unregister(e) {
          return (
            -1 !== this.pluginCallbacks.indexOf(e) &&
              this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1),
            this
          );
        }
        parse(e, t, n, o) {
          let i;
          const a = {},
            s = {};
          if ("string" === typeof e) i = e;
          else {
            if (r.LoaderUtils.decodeText(new Uint8Array(e, 0, 4)) === x) {
              try {
                a[f.KHR_BINARY_GLTF] = new E(e);
              } catch (u) {
                return void (o && o(u));
              }
              i = a[f.KHR_BINARY_GLTF].content;
            } else i = r.LoaderUtils.decodeText(new Uint8Array(e));
          }
          const l = JSON.parse(i);
          if (void 0 === l.asset || l.asset.version[0] < 2)
            return void (
              o &&
              o(
                new Error(
                  "THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."
                )
              )
            );
          const c = new oe(l, {
            path: t || this.resourcePath || "",
            crossOrigin: this.crossOrigin,
            requestHeader: this.requestHeader,
            manager: this.manager,
            ktx2Loader: this.ktx2Loader,
            meshoptDecoder: this.meshoptDecoder,
          });
          c.fileLoader.setRequestHeader(this.requestHeader);
          for (let r = 0; r < this.pluginCallbacks.length; r++) {
            const e = this.pluginCallbacks[r](c);
            (s[e.name] = e), (a[e.name] = !0);
          }
          if (l.extensionsUsed)
            for (let r = 0; r < l.extensionsUsed.length; ++r) {
              const e = l.extensionsUsed[r],
                t = l.extensionsRequired || [];
              switch (e) {
                case f.KHR_MATERIALS_UNLIT:
                  a[e] = new p();
                  break;
                case f.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
                  a[e] = new I();
                  break;
                case f.KHR_DRACO_MESH_COMPRESSION:
                  a[e] = new S(l, this.dracoLoader);
                  break;
                case f.KHR_TEXTURE_TRANSFORM:
                  a[e] = new M();
                  break;
                case f.KHR_MESH_QUANTIZATION:
                  a[e] = new k();
                  break;
                default:
                  t.indexOf(e) >= 0 &&
                    void 0 === s[e] &&
                    console.warn(
                      'THREE.GLTFLoader: Unknown extension "' + e + '".'
                    );
              }
            }
          c.setExtensions(a), c.setPlugins(s), c.parse(n, o);
        }
        parseAsync(e, t) {
          const n = this;
          return new Promise(function (r, o) {
            n.parse(e, t, r, o);
          });
        }
      }
      function u() {
        let e = {};
        return {
          get: function (t) {
            return e[t];
          },
          add: function (t, n) {
            e[t] = n;
          },
          remove: function (t) {
            delete e[t];
          },
          removeAll: function () {
            e = {};
          },
        };
      }
      const f = {
        KHR_BINARY_GLTF: "KHR_binary_glTF",
        KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
        KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
        KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
        KHR_MATERIALS_IOR: "KHR_materials_ior",
        KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
          "KHR_materials_pbrSpecularGlossiness",
        KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
        KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
        KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
        KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
        KHR_MATERIALS_VOLUME: "KHR_materials_volume",
        KHR_TEXTURE_BASISU: "KHR_texture_basisu",
        KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
        KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
        EXT_TEXTURE_WEBP: "EXT_texture_webp",
        EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
      };
      class d {
        constructor(e) {
          (this.parser = e),
            (this.name = f.KHR_LIGHTS_PUNCTUAL),
            (this.cache = { refs: {}, uses: {} });
        }
        _markDefs() {
          const e = this.parser,
            t = this.parser.json.nodes || [];
          for (let n = 0, r = t.length; n < r; n++) {
            const r = t[n];
            r.extensions &&
              r.extensions[this.name] &&
              void 0 !== r.extensions[this.name].light &&
              e._addNodeRef(this.cache, r.extensions[this.name].light);
          }
        }
        _loadLight(e) {
          const t = this.parser,
            n = "light:" + e;
          let o = t.cache.get(n);
          if (o) return o;
          const i = t.json,
            a = (((i.extensions && i.extensions[this.name]) || {}).lights ||
              [])[e];
          let s;
          const l = new r.Color(16777215);
          void 0 !== a.color && l.fromArray(a.color);
          const c = void 0 !== a.range ? a.range : 0;
          switch (a.type) {
            case "directional":
              (s = new r.DirectionalLight(l)),
                s.target.position.set(0, 0, -1),
                s.add(s.target);
              break;
            case "point":
              (s = new r.PointLight(l)), (s.distance = c);
              break;
            case "spot":
              (s = new r.SpotLight(l)),
                (s.distance = c),
                (a.spot = a.spot || {}),
                (a.spot.innerConeAngle =
                  void 0 !== a.spot.innerConeAngle ? a.spot.innerConeAngle : 0),
                (a.spot.outerConeAngle =
                  void 0 !== a.spot.outerConeAngle
                    ? a.spot.outerConeAngle
                    : Math.PI / 4),
                (s.angle = a.spot.outerConeAngle),
                (s.penumbra =
                  1 - a.spot.innerConeAngle / a.spot.outerConeAngle),
                s.target.position.set(0, 0, -1),
                s.add(s.target);
              break;
            default:
              throw new Error(
                "THREE.GLTFLoader: Unexpected light type: " + a.type
              );
          }
          return (
            s.position.set(0, 0, 0),
            (s.decay = 2),
            void 0 !== a.intensity && (s.intensity = a.intensity),
            (s.name = t.createUniqueName(a.name || "light_" + e)),
            (o = Promise.resolve(s)),
            t.cache.add(n, o),
            o
          );
        }
        createNodeAttachment(e) {
          const t = this,
            n = this.parser,
            r = n.json.nodes[e],
            o = ((r.extensions && r.extensions[this.name]) || {}).light;
          return void 0 === o
            ? null
            : this._loadLight(o).then(function (e) {
                return n._getNodeRef(t.cache, o, e);
              });
        }
      }
      class p {
        constructor() {
          this.name = f.KHR_MATERIALS_UNLIT;
        }
        getMaterialType() {
          return r.MeshBasicMaterial;
        }
        extendParams(e, t, n) {
          const o = [];
          (e.color = new r.Color(1, 1, 1)), (e.opacity = 1);
          const i = t.pbrMetallicRoughness;
          if (i) {
            if (Array.isArray(i.baseColorFactor)) {
              const t = i.baseColorFactor;
              e.color.fromArray(t), (e.opacity = t[3]);
            }
            void 0 !== i.baseColorTexture &&
              o.push(n.assignTexture(e, "map", i.baseColorTexture));
          }
          return Promise.all(o);
        }
      }
      class h {
        constructor(e) {
          (this.parser = e), (this.name = f.KHR_MATERIALS_CLEARCOAT);
        }
        getMaterialType(e) {
          const t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name]
            ? r.MeshPhysicalMaterial
            : null;
        }
        extendMaterialParams(e, t) {
          const n = this.parser,
            o = n.json.materials[e];
          if (!o.extensions || !o.extensions[this.name])
            return Promise.resolve();
          const i = [],
            a = o.extensions[this.name];
          if (
            (void 0 !== a.clearcoatFactor && (t.clearcoat = a.clearcoatFactor),
            void 0 !== a.clearcoatTexture &&
              i.push(n.assignTexture(t, "clearcoatMap", a.clearcoatTexture)),
            void 0 !== a.clearcoatRoughnessFactor &&
              (t.clearcoatRoughness = a.clearcoatRoughnessFactor),
            void 0 !== a.clearcoatRoughnessTexture &&
              i.push(
                n.assignTexture(
                  t,
                  "clearcoatRoughnessMap",
                  a.clearcoatRoughnessTexture
                )
              ),
            void 0 !== a.clearcoatNormalTexture &&
              (i.push(
                n.assignTexture(
                  t,
                  "clearcoatNormalMap",
                  a.clearcoatNormalTexture
                )
              ),
              void 0 !== a.clearcoatNormalTexture.scale))
          ) {
            const e = a.clearcoatNormalTexture.scale;
            t.clearcoatNormalScale = new r.Vector2(e, e);
          }
          return Promise.all(i);
        }
      }
      class m {
        constructor(e) {
          (this.parser = e), (this.name = f.KHR_MATERIALS_SHEEN);
        }
        getMaterialType(e) {
          const t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name]
            ? r.MeshPhysicalMaterial
            : null;
        }
        extendMaterialParams(e, t) {
          const n = this.parser,
            o = n.json.materials[e];
          if (!o.extensions || !o.extensions[this.name])
            return Promise.resolve();
          const i = [];
          (t.sheenColor = new r.Color(0, 0, 0)),
            (t.sheenRoughness = 0),
            (t.sheen = 1);
          const a = o.extensions[this.name];
          return (
            void 0 !== a.sheenColorFactor &&
              t.sheenColor.fromArray(a.sheenColorFactor),
            void 0 !== a.sheenRoughnessFactor &&
              (t.sheenRoughness = a.sheenRoughnessFactor),
            void 0 !== a.sheenColorTexture &&
              i.push(n.assignTexture(t, "sheenColorMap", a.sheenColorTexture)),
            void 0 !== a.sheenRoughnessTexture &&
              i.push(
                n.assignTexture(t, "sheenRoughnessMap", a.sheenRoughnessTexture)
              ),
            Promise.all(i)
          );
        }
      }
      class g {
        constructor(e) {
          (this.parser = e), (this.name = f.KHR_MATERIALS_TRANSMISSION);
        }
        getMaterialType(e) {
          const t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name]
            ? r.MeshPhysicalMaterial
            : null;
        }
        extendMaterialParams(e, t) {
          const n = this.parser,
            r = n.json.materials[e];
          if (!r.extensions || !r.extensions[this.name])
            return Promise.resolve();
          const o = [],
            i = r.extensions[this.name];
          return (
            void 0 !== i.transmissionFactor &&
              (t.transmission = i.transmissionFactor),
            void 0 !== i.transmissionTexture &&
              o.push(
                n.assignTexture(t, "transmissionMap", i.transmissionTexture)
              ),
            Promise.all(o)
          );
        }
      }
      class v {
        constructor(e) {
          (this.parser = e), (this.name = f.KHR_MATERIALS_VOLUME);
        }
        getMaterialType(e) {
          const t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name]
            ? r.MeshPhysicalMaterial
            : null;
        }
        extendMaterialParams(e, t) {
          const n = this.parser,
            o = n.json.materials[e];
          if (!o.extensions || !o.extensions[this.name])
            return Promise.resolve();
          const i = [],
            a = o.extensions[this.name];
          (t.thickness = void 0 !== a.thicknessFactor ? a.thicknessFactor : 0),
            void 0 !== a.thicknessTexture &&
              i.push(n.assignTexture(t, "thicknessMap", a.thicknessTexture)),
            (t.attenuationDistance = a.attenuationDistance || 0);
          const s = a.attenuationColor || [1, 1, 1];
          return (
            (t.attenuationColor = new r.Color(s[0], s[1], s[2])), Promise.all(i)
          );
        }
      }
      class y {
        constructor(e) {
          (this.parser = e), (this.name = f.KHR_MATERIALS_IOR);
        }
        getMaterialType(e) {
          const t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name]
            ? r.MeshPhysicalMaterial
            : null;
        }
        extendMaterialParams(e, t) {
          const n = this.parser.json.materials[e];
          if (!n.extensions || !n.extensions[this.name])
            return Promise.resolve();
          const r = n.extensions[this.name];
          return (t.ior = void 0 !== r.ior ? r.ior : 1.5), Promise.resolve();
        }
      }
      class b {
        constructor(e) {
          (this.parser = e), (this.name = f.KHR_MATERIALS_SPECULAR);
        }
        getMaterialType(e) {
          const t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name]
            ? r.MeshPhysicalMaterial
            : null;
        }
        extendMaterialParams(e, t) {
          const n = this.parser,
            o = n.json.materials[e];
          if (!o.extensions || !o.extensions[this.name])
            return Promise.resolve();
          const i = [],
            a = o.extensions[this.name];
          (t.specularIntensity =
            void 0 !== a.specularFactor ? a.specularFactor : 1),
            void 0 !== a.specularTexture &&
              i.push(
                n.assignTexture(t, "specularIntensityMap", a.specularTexture)
              );
          const s = a.specularColorFactor || [1, 1, 1];
          return (
            (t.specularColor = new r.Color(s[0], s[1], s[2])),
            void 0 !== a.specularColorTexture &&
              i.push(
                n
                  .assignTexture(t, "specularColorMap", a.specularColorTexture)
                  .then(function (e) {
                    e.encoding = r.sRGBEncoding;
                  })
              ),
            Promise.all(i)
          );
        }
      }
      class A {
        constructor(e) {
          (this.parser = e), (this.name = f.KHR_TEXTURE_BASISU);
        }
        loadTexture(e) {
          const t = this.parser,
            n = t.json,
            r = n.textures[e];
          if (!r.extensions || !r.extensions[this.name]) return null;
          const o = r.extensions[this.name],
            i = n.images[o.source],
            a = t.options.ktx2Loader;
          if (!a) {
            if (
              n.extensionsRequired &&
              n.extensionsRequired.indexOf(this.name) >= 0
            )
              throw new Error(
                "THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures"
              );
            return null;
          }
          return t.loadTextureImage(e, i, a);
        }
      }
      class B {
        constructor(e) {
          (this.parser = e),
            (this.name = f.EXT_TEXTURE_WEBP),
            (this.isSupported = null);
        }
        loadTexture(e) {
          const t = this.name,
            n = this.parser,
            r = n.json,
            o = r.textures[e];
          if (!o.extensions || !o.extensions[t]) return null;
          const i = o.extensions[t],
            a = r.images[i.source];
          let s = n.textureLoader;
          if (a.uri) {
            const e = n.options.manager.getHandler(a.uri);
            null !== e && (s = e);
          }
          return this.detectSupport().then(function (o) {
            if (o) return n.loadTextureImage(e, a, s);
            if (r.extensionsRequired && r.extensionsRequired.indexOf(t) >= 0)
              throw new Error(
                "THREE.GLTFLoader: WebP required by asset but unsupported."
              );
            return n.loadTexture(e);
          });
        }
        detectSupport() {
          return (
            this.isSupported ||
              (this.isSupported = new Promise(function (e) {
                const t = new Image();
                (t.src =
                  "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"),
                  (t.onload = t.onerror =
                    function () {
                      e(1 === t.height);
                    });
              })),
            this.isSupported
          );
        }
      }
      class C {
        constructor(e) {
          (this.name = f.EXT_MESHOPT_COMPRESSION), (this.parser = e);
        }
        loadBufferView(e) {
          const t = this.parser.json,
            n = t.bufferViews[e];
          if (n.extensions && n.extensions[this.name]) {
            const e = n.extensions[this.name],
              r = this.parser.getDependency("buffer", e.buffer),
              o = this.parser.options.meshoptDecoder;
            if (!o || !o.supported) {
              if (
                t.extensionsRequired &&
                t.extensionsRequired.indexOf(this.name) >= 0
              )
                throw new Error(
                  "THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files"
                );
              return null;
            }
            return Promise.all([r, o.ready]).then(function (t) {
              const n = e.byteOffset || 0,
                r = e.byteLength || 0,
                i = e.count,
                a = e.byteStride,
                s = new ArrayBuffer(i * a),
                l = new Uint8Array(t[0], n, r);
              return (
                o.decodeGltfBuffer(
                  new Uint8Array(s),
                  i,
                  a,
                  l,
                  e.mode,
                  e.filter
                ),
                s
              );
            });
          }
          return null;
        }
      }
      const x = "glTF",
        w = 1313821514,
        _ = 5130562;
      class E {
        constructor(e) {
          (this.name = f.KHR_BINARY_GLTF),
            (this.content = null),
            (this.body = null);
          const t = new DataView(e, 0, 12);
          if (
            ((this.header = {
              magic: r.LoaderUtils.decodeText(new Uint8Array(e.slice(0, 4))),
              version: t.getUint32(4, !0),
              length: t.getUint32(8, !0),
            }),
            this.header.magic !== x)
          )
            throw new Error(
              "THREE.GLTFLoader: Unsupported glTF-Binary header."
            );
          if (this.header.version < 2)
            throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
          const n = this.header.length - 12,
            o = new DataView(e, 12);
          let i = 0;
          for (; i < n; ) {
            const t = o.getUint32(i, !0);
            i += 4;
            const n = o.getUint32(i, !0);
            if (((i += 4), n === w)) {
              const n = new Uint8Array(e, 12 + i, t);
              this.content = r.LoaderUtils.decodeText(n);
            } else if (n === _) {
              const n = 12 + i;
              this.body = e.slice(n, n + t);
            }
            i += t;
          }
          if (null === this.content)
            throw new Error("THREE.GLTFLoader: JSON content not found.");
        }
      }
      class S {
        constructor(e, t) {
          if (!t)
            throw new Error(
              "THREE.GLTFLoader: No DRACOLoader instance provided."
            );
          (this.name = f.KHR_DRACO_MESH_COMPRESSION),
            (this.json = e),
            (this.dracoLoader = t),
            this.dracoLoader.preload();
        }
        decodePrimitive(e, t) {
          const n = this.json,
            r = this.dracoLoader,
            o = e.extensions[this.name].bufferView,
            i = e.extensions[this.name].attributes,
            a = {},
            s = {},
            l = {};
          for (const c in i) {
            const e = $[c] || c.toLowerCase();
            a[e] = i[c];
          }
          for (const c in e.attributes) {
            const t = $[c] || c.toLowerCase();
            if (void 0 !== i[c]) {
              const r = n.accessors[e.attributes[c]],
                o = j[r.componentType];
              (l[t] = o), (s[t] = !0 === r.normalized);
            }
          }
          return t.getDependency("bufferView", o).then(function (e) {
            return new Promise(function (t) {
              r.decodeDracoFile(
                e,
                function (e) {
                  for (const t in e.attributes) {
                    const n = e.attributes[t],
                      r = s[t];
                    void 0 !== r && (n.normalized = r);
                  }
                  t(e);
                },
                a,
                l
              );
            });
          });
        }
      }
      class M {
        constructor() {
          this.name = f.KHR_TEXTURE_TRANSFORM;
        }
        extendTexture(e, t) {
          return (
            void 0 !== t.texCoord &&
              console.warn(
                'THREE.GLTFLoader: Custom UV sets in "' +
                  this.name +
                  '" extension not yet supported.'
              ),
            (void 0 === t.offset &&
              void 0 === t.rotation &&
              void 0 === t.scale) ||
              ((e = e.clone()),
              void 0 !== t.offset && e.offset.fromArray(t.offset),
              void 0 !== t.rotation && (e.rotation = t.rotation),
              void 0 !== t.scale && e.repeat.fromArray(t.scale),
              (e.needsUpdate = !0)),
            e
          );
        }
      }
      class R extends r.MeshStandardMaterial {
        constructor(e) {
          super(), (this.isGLTFSpecularGlossinessMaterial = !0);
          const t = [
              "#ifdef USE_SPECULARMAP",
              "\tuniform sampler2D specularMap;",
              "#endif",
            ].join("\n"),
            n = [
              "#ifdef USE_GLOSSINESSMAP",
              "\tuniform sampler2D glossinessMap;",
              "#endif",
            ].join("\n"),
            o = [
              "vec3 specularFactor = specular;",
              "#ifdef USE_SPECULARMAP",
              "\tvec4 texelSpecular = texture2D( specularMap, vUv );",
              "\t// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture",
              "\tspecularFactor *= texelSpecular.rgb;",
              "#endif",
            ].join("\n"),
            i = [
              "float glossinessFactor = glossiness;",
              "#ifdef USE_GLOSSINESSMAP",
              "\tvec4 texelGlossiness = texture2D( glossinessMap, vUv );",
              "\t// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture",
              "\tglossinessFactor *= texelGlossiness.a;",
              "#endif",
            ].join("\n"),
            a = [
              "PhysicalMaterial material;",
              "material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );",
              "vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );",
              "float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );",
              "material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.",
              "material.roughness += geometryRoughness;",
              "material.roughness = min( material.roughness, 1.0 );",
              "material.specularColor = specularFactor;",
            ].join("\n"),
            s = {
              specular: { value: new r.Color().setHex(16777215) },
              glossiness: { value: 1 },
              specularMap: { value: null },
              glossinessMap: { value: null },
            };
          (this._extraUniforms = s),
            (this.onBeforeCompile = function (e) {
              for (const t in s) e.uniforms[t] = s[t];
              e.fragmentShader = e.fragmentShader
                .replace("uniform float roughness;", "uniform vec3 specular;")
                .replace(
                  "uniform float metalness;",
                  "uniform float glossiness;"
                )
                .replace("#include <roughnessmap_pars_fragment>", t)
                .replace("#include <metalnessmap_pars_fragment>", n)
                .replace("#include <roughnessmap_fragment>", o)
                .replace("#include <metalnessmap_fragment>", i)
                .replace("#include <lights_physical_fragment>", a);
            }),
            Object.defineProperties(this, {
              specular: {
                get: function () {
                  return s.specular.value;
                },
                set: function (e) {
                  s.specular.value = e;
                },
              },
              specularMap: {
                get: function () {
                  return s.specularMap.value;
                },
                set: function (e) {
                  (s.specularMap.value = e),
                    e
                      ? (this.defines.USE_SPECULARMAP = "")
                      : delete this.defines.USE_SPECULARMAP;
                },
              },
              glossiness: {
                get: function () {
                  return s.glossiness.value;
                },
                set: function (e) {
                  s.glossiness.value = e;
                },
              },
              glossinessMap: {
                get: function () {
                  return s.glossinessMap.value;
                },
                set: function (e) {
                  (s.glossinessMap.value = e),
                    e
                      ? ((this.defines.USE_GLOSSINESSMAP = ""),
                        (this.defines.USE_UV = ""))
                      : (delete this.defines.USE_GLOSSINESSMAP,
                        delete this.defines.USE_UV);
                },
              },
            }),
            delete this.metalness,
            delete this.roughness,
            delete this.metalnessMap,
            delete this.roughnessMap,
            this.setValues(e);
        }
        copy(e) {
          return (
            super.copy(e),
            (this.specularMap = e.specularMap),
            this.specular.copy(e.specular),
            (this.glossinessMap = e.glossinessMap),
            (this.glossiness = e.glossiness),
            delete this.metalness,
            delete this.roughness,
            delete this.metalnessMap,
            delete this.roughnessMap,
            this
          );
        }
      }
      class I {
        constructor() {
          (this.name = f.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS),
            (this.specularGlossinessParams = [
              "color",
              "map",
              "lightMap",
              "lightMapIntensity",
              "aoMap",
              "aoMapIntensity",
              "emissive",
              "emissiveIntensity",
              "emissiveMap",
              "bumpMap",
              "bumpScale",
              "normalMap",
              "normalMapType",
              "displacementMap",
              "displacementScale",
              "displacementBias",
              "specularMap",
              "specular",
              "glossinessMap",
              "glossiness",
              "alphaMap",
              "envMap",
              "envMapIntensity",
              "refractionRatio",
            ]);
        }
        getMaterialType() {
          return R;
        }
        extendParams(e, t, n) {
          const o = t.extensions[this.name];
          (e.color = new r.Color(1, 1, 1)), (e.opacity = 1);
          const i = [];
          if (Array.isArray(o.diffuseFactor)) {
            const t = o.diffuseFactor;
            e.color.fromArray(t), (e.opacity = t[3]);
          }
          if (
            (void 0 !== o.diffuseTexture &&
              i.push(n.assignTexture(e, "map", o.diffuseTexture)),
            (e.emissive = new r.Color(0, 0, 0)),
            (e.glossiness =
              void 0 !== o.glossinessFactor ? o.glossinessFactor : 1),
            (e.specular = new r.Color(1, 1, 1)),
            Array.isArray(o.specularFactor) &&
              e.specular.fromArray(o.specularFactor),
            void 0 !== o.specularGlossinessTexture)
          ) {
            const t = o.specularGlossinessTexture;
            i.push(n.assignTexture(e, "glossinessMap", t)),
              i.push(n.assignTexture(e, "specularMap", t));
          }
          return Promise.all(i);
        }
        createMaterial(e) {
          const t = new R(e);
          return (
            (t.fog = !0),
            (t.color = e.color),
            (t.map = void 0 === e.map ? null : e.map),
            (t.lightMap = null),
            (t.lightMapIntensity = 1),
            (t.aoMap = void 0 === e.aoMap ? null : e.aoMap),
            (t.aoMapIntensity = 1),
            (t.emissive = e.emissive),
            (t.emissiveIntensity = 1),
            (t.emissiveMap = void 0 === e.emissiveMap ? null : e.emissiveMap),
            (t.bumpMap = void 0 === e.bumpMap ? null : e.bumpMap),
            (t.bumpScale = 1),
            (t.normalMap = void 0 === e.normalMap ? null : e.normalMap),
            (t.normalMapType = r.TangentSpaceNormalMap),
            e.normalScale && (t.normalScale = e.normalScale),
            (t.displacementMap = null),
            (t.displacementScale = 1),
            (t.displacementBias = 0),
            (t.specularMap = void 0 === e.specularMap ? null : e.specularMap),
            (t.specular = e.specular),
            (t.glossinessMap =
              void 0 === e.glossinessMap ? null : e.glossinessMap),
            (t.glossiness = e.glossiness),
            (t.alphaMap = null),
            (t.envMap = void 0 === e.envMap ? null : e.envMap),
            (t.envMapIntensity = 1),
            (t.refractionRatio = 0.98),
            t
          );
        }
      }
      class k {
        constructor() {
          this.name = f.KHR_MESH_QUANTIZATION;
        }
      }
      class T extends r.Interpolant {
        constructor(e, t, n, r) {
          super(e, t, n, r);
        }
        copySampleValue_(e) {
          const t = this.resultBuffer,
            n = this.sampleValues,
            r = this.valueSize,
            o = e * r * 3 + r;
          for (let i = 0; i !== r; i++) t[i] = n[o + i];
          return t;
        }
      }
      (T.prototype.beforeStart_ = T.prototype.copySampleValue_),
        (T.prototype.afterEnd_ = T.prototype.copySampleValue_),
        (T.prototype.interpolate_ = function (e, t, n, r) {
          const o = this.resultBuffer,
            i = this.sampleValues,
            a = this.valueSize,
            s = 2 * a,
            l = 3 * a,
            c = r - t,
            u = (n - t) / c,
            f = u * u,
            d = f * u,
            p = e * l,
            h = p - l,
            m = -2 * d + 3 * f,
            g = d - f,
            v = 1 - m,
            y = g - f + u;
          for (let b = 0; b !== a; b++) {
            const e = i[h + b + a],
              t = i[h + b + s] * c,
              n = i[p + b + a],
              r = i[p + b] * c;
            o[b] = v * e + y * t + m * n + g * r;
          }
          return o;
        });
      const P = new r.Quaternion();
      class F extends T {
        interpolate_(e, t, n, r) {
          const o = super.interpolate_(e, t, n, r);
          return P.fromArray(o).normalize().toArray(o), o;
        }
      }
      const D = 0,
        O = 1,
        L = 2,
        G = 3,
        H = 4,
        z = 5,
        N = 6,
        j = {
          5120: Int8Array,
          5121: Uint8Array,
          5122: Int16Array,
          5123: Uint16Array,
          5125: Uint32Array,
          5126: Float32Array,
        },
        U = {
          9728: r.NearestFilter,
          9729: r.LinearFilter,
          9984: r.NearestMipmapNearestFilter,
          9985: r.LinearMipmapNearestFilter,
          9986: r.NearestMipmapLinearFilter,
          9987: r.LinearMipmapLinearFilter,
        },
        J = {
          33071: r.ClampToEdgeWrapping,
          33648: r.MirroredRepeatWrapping,
          10497: r.RepeatWrapping,
        },
        K = {
          SCALAR: 1,
          VEC2: 2,
          VEC3: 3,
          VEC4: 4,
          MAT2: 4,
          MAT3: 9,
          MAT4: 16,
        },
        $ = {
          POSITION: "position",
          NORMAL: "normal",
          TANGENT: "tangent",
          TEXCOORD_0: "uv",
          TEXCOORD_1: "uv2",
          COLOR_0: "color",
          WEIGHTS_0: "skinWeight",
          JOINTS_0: "skinIndex",
        },
        Q = {
          scale: "scale",
          translation: "position",
          rotation: "quaternion",
          weights: "morphTargetInfluences",
        },
        W = {
          CUBICSPLINE: void 0,
          LINEAR: r.InterpolateLinear,
          STEP: r.InterpolateDiscrete,
        },
        V = "OPAQUE",
        Y = "MASK",
        X = "BLEND";
      function Z(e, t, n) {
        for (const r in n.extensions)
          void 0 === e[r] &&
            ((t.userData.gltfExtensions = t.userData.gltfExtensions || {}),
            (t.userData.gltfExtensions[r] = n.extensions[r]));
      }
      function q(e, t) {
        void 0 !== t.extras &&
          ("object" === typeof t.extras
            ? Object.assign(e.userData, t.extras)
            : console.warn(
                "THREE.GLTFLoader: Ignoring primitive type .extras, " + t.extras
              ));
      }
      function ee(e, t) {
        if ((e.updateMorphTargets(), void 0 !== t.weights))
          for (let n = 0, r = t.weights.length; n < r; n++)
            e.morphTargetInfluences[n] = t.weights[n];
        if (t.extras && Array.isArray(t.extras.targetNames)) {
          const n = t.extras.targetNames;
          if (e.morphTargetInfluences.length === n.length) {
            e.morphTargetDictionary = {};
            for (let t = 0, r = n.length; t < r; t++)
              e.morphTargetDictionary[n[t]] = t;
          } else
            console.warn(
              "THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names."
            );
        }
      }
      function te(e) {
        const t = e.extensions && e.extensions[f.KHR_DRACO_MESH_COMPRESSION];
        let n;
        return (
          (n = t
            ? "draco:" + t.bufferView + ":" + t.indices + ":" + ne(t.attributes)
            : e.indices + ":" + ne(e.attributes) + ":" + e.mode),
          n
        );
      }
      function ne(e) {
        let t = "";
        const n = Object.keys(e).sort();
        for (let r = 0, o = n.length; r < o; r++)
          t += n[r] + ":" + e[n[r]] + ";";
        return t;
      }
      function re(e) {
        switch (e) {
          case Int8Array:
            return 1 / 127;
          case Uint8Array:
            return 1 / 255;
          case Int16Array:
            return 1 / 32767;
          case Uint16Array:
            return 1 / 65535;
          default:
            throw new Error(
              "THREE.GLTFLoader: Unsupported normalized accessor component type."
            );
        }
      }
      class oe {
        constructor(e = {}, t = {}) {
          (this.json = e),
            (this.extensions = {}),
            (this.plugins = {}),
            (this.options = t),
            (this.cache = new u()),
            (this.associations = new Map()),
            (this.primitiveCache = {}),
            (this.meshCache = { refs: {}, uses: {} }),
            (this.cameraCache = { refs: {}, uses: {} }),
            (this.lightCache = { refs: {}, uses: {} }),
            (this.textureCache = {}),
            (this.nodeNamesUsed = {}),
            "undefined" !== typeof createImageBitmap &&
            !1 ===
              /Firefox|^((?!chrome|android).)*safari/i.test(navigator.userAgent)
              ? (this.textureLoader = new r.ImageBitmapLoader(
                  this.options.manager
                ))
              : (this.textureLoader = new r.TextureLoader(
                  this.options.manager
                )),
            this.textureLoader.setCrossOrigin(this.options.crossOrigin),
            this.textureLoader.setRequestHeader(this.options.requestHeader),
            (this.fileLoader = new r.FileLoader(this.options.manager)),
            this.fileLoader.setResponseType("arraybuffer"),
            "use-credentials" === this.options.crossOrigin &&
              this.fileLoader.setWithCredentials(!0);
        }
        setExtensions(e) {
          this.extensions = e;
        }
        setPlugins(e) {
          this.plugins = e;
        }
        parse(e, t) {
          const n = this,
            r = this.json,
            o = this.extensions;
          this.cache.removeAll(),
            this._invokeAll(function (e) {
              return e._markDefs && e._markDefs();
            }),
            Promise.all(
              this._invokeAll(function (e) {
                return e.beforeRoot && e.beforeRoot();
              })
            )
              .then(function () {
                return Promise.all([
                  n.getDependencies("scene"),
                  n.getDependencies("animation"),
                  n.getDependencies("camera"),
                ]);
              })
              .then(function (t) {
                const i = {
                  scene: t[0][r.scene || 0],
                  scenes: t[0],
                  animations: t[1],
                  cameras: t[2],
                  asset: r.asset,
                  parser: n,
                  userData: {},
                };
                Z(o, i, r),
                  q(i, r),
                  Promise.all(
                    n._invokeAll(function (e) {
                      return e.afterRoot && e.afterRoot(i);
                    })
                  ).then(function () {
                    e(i);
                  });
              })
              .catch(t);
        }
        _markDefs() {
          const e = this.json.nodes || [],
            t = this.json.skins || [],
            n = this.json.meshes || [];
          for (let r = 0, o = t.length; r < o; r++) {
            const n = t[r].joints;
            for (let t = 0, r = n.length; t < r; t++) e[n[t]].isBone = !0;
          }
          for (let r = 0, o = e.length; r < o; r++) {
            const t = e[r];
            void 0 !== t.mesh &&
              (this._addNodeRef(this.meshCache, t.mesh),
              void 0 !== t.skin && (n[t.mesh].isSkinnedMesh = !0)),
              void 0 !== t.camera &&
                this._addNodeRef(this.cameraCache, t.camera);
          }
        }
        _addNodeRef(e, t) {
          void 0 !== t &&
            (void 0 === e.refs[t] && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
        }
        _getNodeRef(e, t, n) {
          if (e.refs[t] <= 1) return n;
          const r = n.clone(),
            o = (e, t) => {
              const n = this.associations.get(e);
              null != n && this.associations.set(t, n);
              for (const [r, i] of e.children.entries()) o(i, t.children[r]);
            };
          return o(n, r), (r.name += "_instance_" + e.uses[t]++), r;
        }
        _invokeOne(e) {
          const t = Object.values(this.plugins);
          t.push(this);
          for (let n = 0; n < t.length; n++) {
            const r = e(t[n]);
            if (r) return r;
          }
          return null;
        }
        _invokeAll(e) {
          const t = Object.values(this.plugins);
          t.unshift(this);
          const n = [];
          for (let r = 0; r < t.length; r++) {
            const o = e(t[r]);
            o && n.push(o);
          }
          return n;
        }
        getDependency(e, t) {
          const n = e + ":" + t;
          let r = this.cache.get(n);
          if (!r) {
            switch (e) {
              case "scene":
                r = this.loadScene(t);
                break;
              case "node":
                r = this.loadNode(t);
                break;
              case "mesh":
                r = this._invokeOne(function (e) {
                  return e.loadMesh && e.loadMesh(t);
                });
                break;
              case "accessor":
                r = this.loadAccessor(t);
                break;
              case "bufferView":
                r = this._invokeOne(function (e) {
                  return e.loadBufferView && e.loadBufferView(t);
                });
                break;
              case "buffer":
                r = this.loadBuffer(t);
                break;
              case "material":
                r = this._invokeOne(function (e) {
                  return e.loadMaterial && e.loadMaterial(t);
                });
                break;
              case "texture":
                r = this._invokeOne(function (e) {
                  return e.loadTexture && e.loadTexture(t);
                });
                break;
              case "skin":
                r = this.loadSkin(t);
                break;
              case "animation":
                r = this.loadAnimation(t);
                break;
              case "camera":
                r = this.loadCamera(t);
                break;
              default:
                throw new Error("Unknown type: " + e);
            }
            this.cache.add(n, r);
          }
          return r;
        }
        getDependencies(e) {
          let t = this.cache.get(e);
          if (!t) {
            const n = this,
              r = this.json[e + ("mesh" === e ? "es" : "s")] || [];
            (t = Promise.all(
              r.map(function (t, r) {
                return n.getDependency(e, r);
              })
            )),
              this.cache.add(e, t);
          }
          return t;
        }
        loadBuffer(e) {
          const t = this.json.buffers[e],
            n = this.fileLoader;
          if (t.type && "arraybuffer" !== t.type)
            throw new Error(
              "THREE.GLTFLoader: " + t.type + " buffer type is not supported."
            );
          if (void 0 === t.uri && 0 === e)
            return Promise.resolve(this.extensions[f.KHR_BINARY_GLTF].body);
          const o = this.options;
          return new Promise(function (e, i) {
            n.load(
              r.LoaderUtils.resolveURL(t.uri, o.path),
              e,
              void 0,
              function () {
                i(
                  new Error(
                    'THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'
                  )
                );
              }
            );
          });
        }
        loadBufferView(e) {
          const t = this.json.bufferViews[e];
          return this.getDependency("buffer", t.buffer).then(function (e) {
            const n = t.byteLength || 0,
              r = t.byteOffset || 0;
            return e.slice(r, r + n);
          });
        }
        loadAccessor(e) {
          const t = this,
            n = this.json,
            o = this.json.accessors[e];
          if (void 0 === o.bufferView && void 0 === o.sparse)
            return Promise.resolve(null);
          const i = [];
          return (
            void 0 !== o.bufferView
              ? i.push(this.getDependency("bufferView", o.bufferView))
              : i.push(null),
            void 0 !== o.sparse &&
              (i.push(
                this.getDependency("bufferView", o.sparse.indices.bufferView)
              ),
              i.push(
                this.getDependency("bufferView", o.sparse.values.bufferView)
              )),
            Promise.all(i).then(function (e) {
              const i = e[0],
                a = K[o.type],
                s = j[o.componentType],
                l = s.BYTES_PER_ELEMENT,
                c = l * a,
                u = o.byteOffset || 0,
                f =
                  void 0 !== o.bufferView
                    ? n.bufferViews[o.bufferView].byteStride
                    : void 0,
                d = !0 === o.normalized;
              let p, h;
              if (f && f !== c) {
                const e = Math.floor(u / f),
                  n =
                    "InterleavedBuffer:" +
                    o.bufferView +
                    ":" +
                    o.componentType +
                    ":" +
                    e +
                    ":" +
                    o.count;
                let c = t.cache.get(n);
                c ||
                  ((p = new s(i, e * f, (o.count * f) / l)),
                  (c = new r.InterleavedBuffer(p, f / l)),
                  t.cache.add(n, c)),
                  (h = new r.InterleavedBufferAttribute(c, a, (u % f) / l, d));
              } else (p = null === i ? new s(o.count * a) : new s(i, u, o.count * a)), (h = new r.BufferAttribute(p, a, d));
              if (void 0 !== o.sparse) {
                const t = K.SCALAR,
                  n = j[o.sparse.indices.componentType],
                  l = o.sparse.indices.byteOffset || 0,
                  c = o.sparse.values.byteOffset || 0,
                  u = new n(e[1], l, o.sparse.count * t),
                  f = new s(e[2], c, o.sparse.count * a);
                null !== i &&
                  (h = new r.BufferAttribute(
                    h.array.slice(),
                    h.itemSize,
                    h.normalized
                  ));
                for (let e = 0, r = u.length; e < r; e++) {
                  const t = u[e];
                  if (
                    (h.setX(t, f[e * a]),
                    a >= 2 && h.setY(t, f[e * a + 1]),
                    a >= 3 && h.setZ(t, f[e * a + 2]),
                    a >= 4 && h.setW(t, f[e * a + 3]),
                    a >= 5)
                  )
                    throw new Error(
                      "THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute."
                    );
                }
              }
              return h;
            })
          );
        }
        loadTexture(e) {
          const t = this.json,
            n = this.options,
            r = t.textures[e],
            o = t.images[r.source];
          let i = this.textureLoader;
          if (o.uri) {
            const e = n.manager.getHandler(o.uri);
            null !== e && (i = e);
          }
          return this.loadTextureImage(e, o, i);
        }
        loadTextureImage(e, t, n) {
          const o = this,
            i = this.json,
            a = this.options,
            s = i.textures[e],
            l = (t.uri || t.bufferView) + ":" + s.sampler;
          if (this.textureCache[l]) return this.textureCache[l];
          const c = self.URL || self.webkitURL;
          let u = t.uri || "",
            f = !1;
          if (void 0 !== t.bufferView)
            u = o.getDependency("bufferView", t.bufferView).then(function (e) {
              f = !0;
              const n = new Blob([e], { type: t.mimeType });
              return (u = c.createObjectURL(n)), u;
            });
          else if (void 0 === t.uri)
            throw new Error(
              "THREE.GLTFLoader: Image " + e + " is missing URI and bufferView"
            );
          const d = Promise.resolve(u)
            .then(function (e) {
              return new Promise(function (t, o) {
                let i = t;
                !0 === n.isImageBitmapLoader &&
                  (i = function (e) {
                    const n = new r.Texture(e);
                    (n.needsUpdate = !0), t(n);
                  }),
                  n.load(r.LoaderUtils.resolveURL(e, a.path), i, void 0, o);
              });
            })
            .then(function (t) {
              !0 === f && c.revokeObjectURL(u),
                (t.flipY = !1),
                s.name && (t.name = s.name);
              const n = (i.samplers || {})[s.sampler] || {};
              return (
                (t.magFilter = U[n.magFilter] || r.LinearFilter),
                (t.minFilter = U[n.minFilter] || r.LinearMipmapLinearFilter),
                (t.wrapS = J[n.wrapS] || r.RepeatWrapping),
                (t.wrapT = J[n.wrapT] || r.RepeatWrapping),
                o.associations.set(t, { textures: e }),
                t
              );
            })
            .catch(function () {
              return (
                console.error("THREE.GLTFLoader: Couldn't load texture", u),
                null
              );
            });
          return (this.textureCache[l] = d), d;
        }
        assignTexture(e, t, n) {
          const r = this;
          return this.getDependency("texture", n.index).then(function (o) {
            if (
              (void 0 === n.texCoord ||
                0 == n.texCoord ||
                ("aoMap" === t && 1 == n.texCoord) ||
                console.warn(
                  "THREE.GLTFLoader: Custom UV set " +
                    n.texCoord +
                    " for texture " +
                    t +
                    " not yet supported."
                ),
              r.extensions[f.KHR_TEXTURE_TRANSFORM])
            ) {
              const e =
                void 0 !== n.extensions
                  ? n.extensions[f.KHR_TEXTURE_TRANSFORM]
                  : void 0;
              if (e) {
                const t = r.associations.get(o);
                (o = r.extensions[f.KHR_TEXTURE_TRANSFORM].extendTexture(o, e)),
                  r.associations.set(o, t);
              }
            }
            return (e[t] = o), o;
          });
        }
        assignFinalMaterial(e) {
          const t = e.geometry;
          let n = e.material;
          const o = void 0 === t.attributes.tangent,
            i = void 0 !== t.attributes.color,
            a = void 0 === t.attributes.normal;
          if (e.isPoints) {
            const e = "PointsMaterial:" + n.uuid;
            let t = this.cache.get(e);
            t ||
              ((t = new r.PointsMaterial()),
              r.Material.prototype.copy.call(t, n),
              t.color.copy(n.color),
              (t.map = n.map),
              (t.sizeAttenuation = !1),
              this.cache.add(e, t)),
              (n = t);
          } else if (e.isLine) {
            const e = "LineBasicMaterial:" + n.uuid;
            let t = this.cache.get(e);
            t ||
              ((t = new r.LineBasicMaterial()),
              r.Material.prototype.copy.call(t, n),
              t.color.copy(n.color),
              this.cache.add(e, t)),
              (n = t);
          }
          if (o || i || a) {
            let e = "ClonedMaterial:" + n.uuid + ":";
            n.isGLTFSpecularGlossinessMaterial && (e += "specular-glossiness:"),
              o && (e += "derivative-tangents:"),
              i && (e += "vertex-colors:"),
              a && (e += "flat-shading:");
            let t = this.cache.get(e);
            t ||
              ((t = n.clone()),
              i && (t.vertexColors = !0),
              a && (t.flatShading = !0),
              o &&
                (t.normalScale && (t.normalScale.y *= -1),
                t.clearcoatNormalScale && (t.clearcoatNormalScale.y *= -1)),
              this.cache.add(e, t),
              this.associations.set(t, this.associations.get(n))),
              (n = t);
          }
          n.aoMap &&
            void 0 === t.attributes.uv2 &&
            void 0 !== t.attributes.uv &&
            t.setAttribute("uv2", t.attributes.uv),
            (e.material = n);
        }
        getMaterialType() {
          return r.MeshStandardMaterial;
        }
        loadMaterial(e) {
          const t = this,
            n = this.json,
            o = this.extensions,
            i = n.materials[e];
          let a;
          const s = {},
            l = i.extensions || {},
            c = [];
          if (l[f.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
            const e = o[f.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
            (a = e.getMaterialType()), c.push(e.extendParams(s, i, t));
          } else if (l[f.KHR_MATERIALS_UNLIT]) {
            const e = o[f.KHR_MATERIALS_UNLIT];
            (a = e.getMaterialType()), c.push(e.extendParams(s, i, t));
          } else {
            const n = i.pbrMetallicRoughness || {};
            if (
              ((s.color = new r.Color(1, 1, 1)),
              (s.opacity = 1),
              Array.isArray(n.baseColorFactor))
            ) {
              const e = n.baseColorFactor;
              s.color.fromArray(e), (s.opacity = e[3]);
            }
            void 0 !== n.baseColorTexture &&
              c.push(t.assignTexture(s, "map", n.baseColorTexture)),
              (s.metalness =
                void 0 !== n.metallicFactor ? n.metallicFactor : 1),
              (s.roughness =
                void 0 !== n.roughnessFactor ? n.roughnessFactor : 1),
              void 0 !== n.metallicRoughnessTexture &&
                (c.push(
                  t.assignTexture(s, "metalnessMap", n.metallicRoughnessTexture)
                ),
                c.push(
                  t.assignTexture(s, "roughnessMap", n.metallicRoughnessTexture)
                )),
              (a = this._invokeOne(function (t) {
                return t.getMaterialType && t.getMaterialType(e);
              })),
              c.push(
                Promise.all(
                  this._invokeAll(function (t) {
                    return (
                      t.extendMaterialParams && t.extendMaterialParams(e, s)
                    );
                  })
                )
              );
          }
          !0 === i.doubleSided && (s.side = r.DoubleSide);
          const u = i.alphaMode || V;
          if (
            (u === X
              ? ((s.transparent = !0), (s.depthWrite = !1))
              : ((s.transparent = !1),
                u === Y &&
                  (s.alphaTest =
                    void 0 !== i.alphaCutoff ? i.alphaCutoff : 0.5)),
            void 0 !== i.normalTexture &&
              a !== r.MeshBasicMaterial &&
              (c.push(t.assignTexture(s, "normalMap", i.normalTexture)),
              (s.normalScale = new r.Vector2(1, 1)),
              void 0 !== i.normalTexture.scale))
          ) {
            const e = i.normalTexture.scale;
            s.normalScale.set(e, e);
          }
          return (
            void 0 !== i.occlusionTexture &&
              a !== r.MeshBasicMaterial &&
              (c.push(t.assignTexture(s, "aoMap", i.occlusionTexture)),
              void 0 !== i.occlusionTexture.strength &&
                (s.aoMapIntensity = i.occlusionTexture.strength)),
            void 0 !== i.emissiveFactor &&
              a !== r.MeshBasicMaterial &&
              (s.emissive = new r.Color().fromArray(i.emissiveFactor)),
            void 0 !== i.emissiveTexture &&
              a !== r.MeshBasicMaterial &&
              c.push(t.assignTexture(s, "emissiveMap", i.emissiveTexture)),
            Promise.all(c).then(function () {
              let n;
              return (
                (n =
                  a === R
                    ? o[f.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(
                        s
                      )
                    : new a(s)),
                i.name && (n.name = i.name),
                n.map && (n.map.encoding = r.sRGBEncoding),
                n.emissiveMap && (n.emissiveMap.encoding = r.sRGBEncoding),
                q(n, i),
                t.associations.set(n, { materials: e }),
                i.extensions && Z(o, n, i),
                n
              );
            })
          );
        }
        createUniqueName(e) {
          const t = r.PropertyBinding.sanitizeNodeName(e || "");
          let n = t;
          for (let r = 1; this.nodeNamesUsed[n]; ++r) n = t + "_" + r;
          return (this.nodeNamesUsed[n] = !0), n;
        }
        loadGeometries(e) {
          const t = this,
            n = this.extensions,
            o = this.primitiveCache;
          function i(e) {
            return n[f.KHR_DRACO_MESH_COMPRESSION]
              .decodePrimitive(e, t)
              .then(function (n) {
                return ae(n, e, t);
              });
          }
          const a = [];
          for (let s = 0, l = e.length; s < l; s++) {
            const n = e[s],
              l = te(n),
              c = o[l];
            if (c) a.push(c.promise);
            else {
              let e;
              (e =
                n.extensions && n.extensions[f.KHR_DRACO_MESH_COMPRESSION]
                  ? i(n)
                  : ae(new r.BufferGeometry(), n, t)),
                (o[l] = { primitive: n, promise: e }),
                a.push(e);
            }
          }
          return Promise.all(a);
        }
        loadMesh(e) {
          const t = this,
            n = this.json,
            o = this.extensions,
            i = n.meshes[e],
            a = i.primitives,
            s = [];
          for (let c = 0, u = a.length; c < u; c++) {
            const e =
              void 0 === a[c].material
                ? (void 0 === (l = this.cache).DefaultMaterial &&
                    (l.DefaultMaterial = new r.MeshStandardMaterial({
                      color: 16777215,
                      emissive: 0,
                      metalness: 1,
                      roughness: 1,
                      transparent: !1,
                      depthTest: !0,
                      side: r.FrontSide,
                    })),
                  l.DefaultMaterial)
                : this.getDependency("material", a[c].material);
            s.push(e);
          }
          var l;
          return (
            s.push(t.loadGeometries(a)),
            Promise.all(s).then(function (n) {
              const s = n.slice(0, n.length - 1),
                l = n[n.length - 1],
                c = [];
              for (let f = 0, d = l.length; f < d; f++) {
                const n = l[f],
                  u = a[f];
                let d;
                const p = s[f];
                if (
                  u.mode === H ||
                  u.mode === z ||
                  u.mode === N ||
                  void 0 === u.mode
                )
                  (d =
                    !0 === i.isSkinnedMesh
                      ? new r.SkinnedMesh(n, p)
                      : new r.Mesh(n, p)),
                    !0 !== d.isSkinnedMesh ||
                      d.geometry.attributes.skinWeight.normalized ||
                      d.normalizeSkinWeights(),
                    u.mode === z
                      ? (d.geometry = se(d.geometry, r.TriangleStripDrawMode))
                      : u.mode === N &&
                        (d.geometry = se(d.geometry, r.TriangleFanDrawMode));
                else if (u.mode === O) d = new r.LineSegments(n, p);
                else if (u.mode === G) d = new r.Line(n, p);
                else if (u.mode === L) d = new r.LineLoop(n, p);
                else {
                  if (u.mode !== D)
                    throw new Error(
                      "THREE.GLTFLoader: Primitive mode unsupported: " + u.mode
                    );
                  d = new r.Points(n, p);
                }
                Object.keys(d.geometry.morphAttributes).length > 0 && ee(d, i),
                  (d.name = t.createUniqueName(i.name || "mesh_" + e)),
                  q(d, i),
                  u.extensions && Z(o, d, u),
                  t.assignFinalMaterial(d),
                  c.push(d);
              }
              for (let r = 0, o = c.length; r < o; r++)
                t.associations.set(c[r], { meshes: e, primitives: r });
              if (1 === c.length) return c[0];
              const u = new r.Group();
              t.associations.set(u, { meshes: e });
              for (let e = 0, t = c.length; e < t; e++) u.add(c[e]);
              return u;
            })
          );
        }
        loadCamera(e) {
          let t;
          const n = this.json.cameras[e],
            o = n[n.type];
          if (o)
            return (
              "perspective" === n.type
                ? (t = new r.PerspectiveCamera(
                    r.MathUtils.radToDeg(o.yfov),
                    o.aspectRatio || 1,
                    o.znear || 1,
                    o.zfar || 2e6
                  ))
                : "orthographic" === n.type &&
                  (t = new r.OrthographicCamera(
                    -o.xmag,
                    o.xmag,
                    o.ymag,
                    -o.ymag,
                    o.znear,
                    o.zfar
                  )),
              n.name && (t.name = this.createUniqueName(n.name)),
              q(t, n),
              Promise.resolve(t)
            );
          console.warn("THREE.GLTFLoader: Missing camera parameters.");
        }
        loadSkin(e) {
          const t = this.json.skins[e],
            n = { joints: t.joints };
          return void 0 === t.inverseBindMatrices
            ? Promise.resolve(n)
            : this.getDependency("accessor", t.inverseBindMatrices).then(
                function (e) {
                  return (n.inverseBindMatrices = e), n;
                }
              );
        }
        loadAnimation(e) {
          const t = this.json.animations[e],
            n = [],
            o = [],
            i = [],
            a = [],
            s = [];
          for (let r = 0, l = t.channels.length; r < l; r++) {
            const e = t.channels[r],
              l = t.samplers[e.sampler],
              c = e.target,
              u = void 0 !== c.node ? c.node : c.id,
              f = void 0 !== t.parameters ? t.parameters[l.input] : l.input,
              d = void 0 !== t.parameters ? t.parameters[l.output] : l.output;
            n.push(this.getDependency("node", u)),
              o.push(this.getDependency("accessor", f)),
              i.push(this.getDependency("accessor", d)),
              a.push(l),
              s.push(c);
          }
          return Promise.all([
            Promise.all(n),
            Promise.all(o),
            Promise.all(i),
            Promise.all(a),
            Promise.all(s),
          ]).then(function (n) {
            const o = n[0],
              i = n[1],
              a = n[2],
              s = n[3],
              l = n[4],
              c = [];
            for (let e = 0, t = o.length; e < t; e++) {
              const t = o[e],
                n = i[e],
                u = a[e],
                f = s[e],
                d = l[e];
              if (void 0 === t) continue;
              let p;
              switch (
                (t.updateMatrix(), (t.matrixAutoUpdate = !0), Q[d.path])
              ) {
                case Q.weights:
                  p = r.NumberKeyframeTrack;
                  break;
                case Q.rotation:
                  p = r.QuaternionKeyframeTrack;
                  break;
                case Q.position:
                case Q.scale:
                default:
                  p = r.VectorKeyframeTrack;
              }
              const h = t.name ? t.name : t.uuid,
                m =
                  void 0 !== f.interpolation
                    ? W[f.interpolation]
                    : r.InterpolateLinear,
                g = [];
              Q[d.path] === Q.weights
                ? t.traverse(function (e) {
                    e.morphTargetInfluences && g.push(e.name ? e.name : e.uuid);
                  })
                : g.push(h);
              let v = u.array;
              if (u.normalized) {
                const e = re(v.constructor),
                  t = new Float32Array(v.length);
                for (let n = 0, r = v.length; n < r; n++) t[n] = v[n] * e;
                v = t;
              }
              for (let e = 0, o = g.length; e < o; e++) {
                const t = new p(g[e] + "." + Q[d.path], n.array, v, m);
                "CUBICSPLINE" === f.interpolation &&
                  ((t.createInterpolant = function (e) {
                    return new (
                      this instanceof r.QuaternionKeyframeTrack ? F : T
                    )(this.times, this.values, this.getValueSize() / 3, e);
                  }),
                  (t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline =
                    !0)),
                  c.push(t);
              }
            }
            const u = t.name ? t.name : "animation_" + e;
            return new r.AnimationClip(u, void 0, c);
          });
        }
        createNodeMesh(e) {
          const t = this.json,
            n = this,
            r = t.nodes[e];
          return void 0 === r.mesh
            ? null
            : n.getDependency("mesh", r.mesh).then(function (e) {
                const t = n._getNodeRef(n.meshCache, r.mesh, e);
                return (
                  void 0 !== r.weights &&
                    t.traverse(function (e) {
                      if (e.isMesh)
                        for (let t = 0, n = r.weights.length; t < n; t++)
                          e.morphTargetInfluences[t] = r.weights[t];
                    }),
                  t
                );
              });
        }
        loadNode(e) {
          const t = this.json,
            n = this.extensions,
            o = this,
            i = t.nodes[e],
            a = i.name ? o.createUniqueName(i.name) : "";
          return (function () {
            const t = [],
              n = o._invokeOne(function (t) {
                return t.createNodeMesh && t.createNodeMesh(e);
              });
            return (
              n && t.push(n),
              void 0 !== i.camera &&
                t.push(
                  o.getDependency("camera", i.camera).then(function (e) {
                    return o._getNodeRef(o.cameraCache, i.camera, e);
                  })
                ),
              o
                ._invokeAll(function (t) {
                  return t.createNodeAttachment && t.createNodeAttachment(e);
                })
                .forEach(function (e) {
                  t.push(e);
                }),
              Promise.all(t)
            );
          })().then(function (t) {
            let s;
            if (
              ((s =
                !0 === i.isBone
                  ? new r.Bone()
                  : t.length > 1
                  ? new r.Group()
                  : 1 === t.length
                  ? t[0]
                  : new r.Object3D()),
              s !== t[0])
            )
              for (let e = 0, n = t.length; e < n; e++) s.add(t[e]);
            if (
              (i.name && ((s.userData.name = i.name), (s.name = a)),
              q(s, i),
              i.extensions && Z(n, s, i),
              void 0 !== i.matrix)
            ) {
              const e = new r.Matrix4();
              e.fromArray(i.matrix), s.applyMatrix4(e);
            } else void 0 !== i.translation && s.position.fromArray(i.translation), void 0 !== i.rotation && s.quaternion.fromArray(i.rotation), void 0 !== i.scale && s.scale.fromArray(i.scale);
            return (
              o.associations.has(s) || o.associations.set(s, {}),
              (o.associations.get(s).nodes = e),
              s
            );
          });
        }
        loadScene(e) {
          const t = this.json,
            n = this.extensions,
            o = this.json.scenes[e],
            i = this,
            a = new r.Group();
          o.name && (a.name = i.createUniqueName(o.name)),
            q(a, o),
            o.extensions && Z(n, a, o);
          const s = o.nodes || [],
            l = [];
          for (let r = 0, c = s.length; r < c; r++) l.push(ie(s[r], a, t, i));
          return Promise.all(l).then(function () {
            return (
              (i.associations = ((e) => {
                const t = new Map();
                for (const [n, o] of i.associations)
                  (n instanceof r.Material || n instanceof r.Texture) &&
                    t.set(n, o);
                return (
                  e.traverse((e) => {
                    const n = i.associations.get(e);
                    null != n && t.set(e, n);
                  }),
                  t
                );
              })(a)),
              a
            );
          });
        }
      }
      function ie(e, t, n, o) {
        const i = n.nodes[e];
        return o
          .getDependency("node", e)
          .then(function (e) {
            if (void 0 === i.skin) return e;
            let t;
            return o
              .getDependency("skin", i.skin)
              .then(function (e) {
                t = e;
                const n = [];
                for (let r = 0, i = t.joints.length; r < i; r++)
                  n.push(o.getDependency("node", t.joints[r]));
                return Promise.all(n);
              })
              .then(function (n) {
                return (
                  e.traverse(function (e) {
                    if (!e.isMesh) return;
                    const o = [],
                      i = [];
                    for (let a = 0, s = n.length; a < s; a++) {
                      const e = n[a];
                      if (e) {
                        o.push(e);
                        const n = new r.Matrix4();
                        void 0 !== t.inverseBindMatrices &&
                          n.fromArray(t.inverseBindMatrices.array, 16 * a),
                          i.push(n);
                      } else
                        console.warn(
                          'THREE.GLTFLoader: Joint "%s" could not be found.',
                          t.joints[a]
                        );
                    }
                    e.bind(new r.Skeleton(o, i), e.matrixWorld);
                  }),
                  e
                );
              });
          })
          .then(function (e) {
            t.add(e);
            const r = [];
            if (i.children) {
              const t = i.children;
              for (let i = 0, a = t.length; i < a; i++) {
                const a = t[i];
                r.push(ie(a, e, n, o));
              }
            }
            return Promise.all(r);
          });
      }
      function ae(e, t, n) {
        const o = t.attributes,
          i = [];
        function a(t, r) {
          return n.getDependency("accessor", t).then(function (t) {
            e.setAttribute(r, t);
          });
        }
        for (const r in o) {
          const t = $[r] || r.toLowerCase();
          t in e.attributes || i.push(a(o[r], t));
        }
        if (void 0 !== t.indices && !e.index) {
          const r = n.getDependency("accessor", t.indices).then(function (t) {
            e.setIndex(t);
          });
          i.push(r);
        }
        return (
          q(e, t),
          (function (e, t, n) {
            const o = t.attributes,
              i = new r.Box3();
            if (void 0 === o.POSITION) return;
            {
              const e = n.json.accessors[o.POSITION],
                t = e.min,
                a = e.max;
              if (void 0 === t || void 0 === a)
                return void console.warn(
                  "THREE.GLTFLoader: Missing min/max properties for accessor POSITION."
                );
              if (
                (i.set(
                  new r.Vector3(t[0], t[1], t[2]),
                  new r.Vector3(a[0], a[1], a[2])
                ),
                e.normalized)
              ) {
                const t = re(j[e.componentType]);
                i.min.multiplyScalar(t), i.max.multiplyScalar(t);
              }
            }
            const a = t.targets;
            if (void 0 !== a) {
              const e = new r.Vector3(),
                t = new r.Vector3();
              for (let r = 0, o = a.length; r < o; r++) {
                const o = a[r];
                if (void 0 !== o.POSITION) {
                  const r = n.json.accessors[o.POSITION],
                    i = r.min,
                    a = r.max;
                  if (void 0 !== i && void 0 !== a) {
                    if (
                      (t.setX(Math.max(Math.abs(i[0]), Math.abs(a[0]))),
                      t.setY(Math.max(Math.abs(i[1]), Math.abs(a[1]))),
                      t.setZ(Math.max(Math.abs(i[2]), Math.abs(a[2]))),
                      r.normalized)
                    ) {
                      const e = re(j[r.componentType]);
                      t.multiplyScalar(e);
                    }
                    e.max(t);
                  } else
                    console.warn(
                      "THREE.GLTFLoader: Missing min/max properties for accessor POSITION."
                    );
                }
              }
              i.expandByVector(e);
            }
            e.boundingBox = i;
            const s = new r.Sphere();
            i.getCenter(s.center),
              (s.radius = i.min.distanceTo(i.max) / 2),
              (e.boundingSphere = s);
          })(e, t, n),
          Promise.all(i).then(function () {
            return void 0 !== t.targets
              ? (function (e, t, n) {
                  let r = !1,
                    o = !1;
                  for (let s = 0, l = t.length; s < l; s++) {
                    const e = t[s];
                    if (
                      (void 0 !== e.POSITION && (r = !0),
                      void 0 !== e.NORMAL && (o = !0),
                      r && o)
                    )
                      break;
                  }
                  if (!r && !o) return Promise.resolve(e);
                  const i = [],
                    a = [];
                  for (let s = 0, l = t.length; s < l; s++) {
                    const l = t[s];
                    if (r) {
                      const t =
                        void 0 !== l.POSITION
                          ? n.getDependency("accessor", l.POSITION)
                          : e.attributes.position;
                      i.push(t);
                    }
                    if (o) {
                      const t =
                        void 0 !== l.NORMAL
                          ? n.getDependency("accessor", l.NORMAL)
                          : e.attributes.normal;
                      a.push(t);
                    }
                  }
                  return Promise.all([Promise.all(i), Promise.all(a)]).then(
                    function (t) {
                      const n = t[0],
                        i = t[1];
                      return (
                        r && (e.morphAttributes.position = n),
                        o && (e.morphAttributes.normal = i),
                        (e.morphTargetsRelative = !0),
                        e
                      );
                    }
                  );
                })(e, t.targets, n)
              : e;
          })
        );
      }
      function se(e, t) {
        let n = e.getIndex();
        if (null === n) {
          const t = [],
            r = e.getAttribute("position");
          if (void 0 === r)
            return (
              console.error(
                "THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."
              ),
              e
            );
          for (let e = 0; e < r.count; e++) t.push(e);
          e.setIndex(t), (n = e.getIndex());
        }
        const o = n.count - 2,
          i = [];
        if (t === r.TriangleFanDrawMode)
          for (let r = 1; r <= o; r++)
            i.push(n.getX(0)), i.push(n.getX(r)), i.push(n.getX(r + 1));
        else
          for (let r = 0; r < o; r++)
            r % 2 === 0
              ? (i.push(n.getX(r)),
                i.push(n.getX(r + 1)),
                i.push(n.getX(r + 2)))
              : (i.push(n.getX(r + 2)),
                i.push(n.getX(r + 1)),
                i.push(n.getX(r)));
        i.length / 3 !== o &&
          console.error(
            "THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles."
          );
        const a = e.clone();
        return a.setIndex(i), a;
      }
      var le = n(88279);
      let ce = null;
      function ue(e, t, n) {
        return (r) => {
          n && n(r),
            e &&
              (ce || (ce = new i()),
              ce.setDecoderPath(
                "string" === typeof e
                  ? e
                  : "https://www.gstatic.com/draco/versioned/decoders/1.4.3/"
              ),
              r.setDRACOLoader(ce)),
            t && r.setMeshoptDecoder(l());
        };
      }
      function fe(e, t = !0, n = !0, r) {
        return (0, le.z)(c, e, ue(t, n, r));
      }
      (fe.preload = (e, t = !0, n = !0, r) => le.z.preload(c, e, ue(t, n, r))),
        (fe.clear = (e) => le.z.clear(c, e));
    },
    88279: function (e, t, n) {
      "use strict";
      n.d(t, {
        B: function () {
          return g;
        },
        E: function () {
          return v;
        },
        a: function () {
          return ae;
        },
        b: function () {
          return h;
        },
        c: function () {
          return D;
        },
        d: function () {
          return le;
        },
        e: function () {
          return L;
        },
        u: function () {
          return m;
        },
        w: function () {
          return V;
        },
        x: function () {
          return Y;
        },
        z: function () {
          return Z;
        },
      });
      var r = n(99477),
        o = n(67294),
        i = n(32576),
        a = n(14671),
        s = n(76525),
        l = n.n(s),
        c = n(63840);
      function u(e, t, n = (e, t) => e === t) {
        if (e === t) return !0;
        if (!e || !t) return !1;
        const r = e.length;
        if (t.length !== r) return !1;
        for (let o = 0; o < r; o++) if (!n(e[o], t[o])) return !1;
        return !0;
      }
      const f = [];
      function d(e, t, n = !1, r = {}) {
        for (const i of f)
          if (u(t, i.keys, i.equal)) {
            if (n) return;
            if (Object.prototype.hasOwnProperty.call(i, "error")) throw i.error;
            if (Object.prototype.hasOwnProperty.call(i, "response"))
              return i.response;
            if (!n) throw i.promise;
          }
        const o = {
          keys: t,
          equal: r.equal,
          promise: e(...t)
            .then((e) => (o.response = e))
            .then(() => {
              r.lifespan &&
                r.lifespan > 0 &&
                setTimeout(() => {
                  const e = f.indexOf(o);
                  -1 !== e && f.splice(e, 1);
                }, r.lifespan);
            })
            .catch((e) => (o.error = e)),
        };
        if ((f.push(o), !n)) throw o.promise;
      }
      const p = (e) => e && e.isOrthographicCamera,
        h =
          "undefined" === typeof window ||
          !window.navigator ||
          /ServerSideRendering|^Deno\//.test(window.navigator.userAgent)
            ? o.useEffect
            : o.useLayoutEffect;
      function m(e) {
        const t = o.useRef(e);
        return (
          h(() => {
            t.current = e;
          }, [e]),
          t
        );
      }
      function g({ set: e }) {
        return h(() => (e(new Promise(() => null)), () => e(!1)), [e]), null;
      }
      class v extends o.Component {
        constructor(...e) {
          super(...e), (this.state = { error: !1 });
        }
        componentDidCatch(e) {
          this.props.set(e);
        }
        render() {
          return this.state.error ? null : this.props.children;
        }
      }
      v.getDerivedStateFromError = () => ({ error: !0 });
      const y = "__default";
      function b(e) {
        return Array.isArray(e)
          ? Math.min(Math.max(e[0], window.devicePixelRatio), e[1])
          : e;
      }
      const A = (e) => {
          var t;
          return null == (t = e.__r3f) ? void 0 : t.root.getState();
        },
        B = {
          obj: (e) => e === Object(e) && !B.arr(e) && "function" !== typeof e,
          fun: (e) => "function" === typeof e,
          str: (e) => "string" === typeof e,
          num: (e) => "number" === typeof e,
          boo: (e) => "boolean" === typeof e,
          und: (e) => void 0 === e,
          arr: (e) => Array.isArray(e),
          equ(
            e,
            t,
            {
              arrays: n = "shallow",
              objects: r = "reference",
              strict: o = !0,
            } = {}
          ) {
            if (typeof e !== typeof t || !!e !== !!t) return !1;
            if (B.str(e) || B.num(e)) return e === t;
            const i = B.obj(e);
            if (i && "reference" === r) return e === t;
            const a = B.arr(e);
            if (a && "reference" === n) return e === t;
            if ((a || i) && e === t) return !0;
            let s;
            for (s in e) if (!(s in t)) return !1;
            for (s in o ? t : e) if (e[s] !== t[s]) return !1;
            if (B.und(s)) {
              if (a && 0 === e.length && 0 === t.length) return !0;
              if (
                i &&
                0 === Object.keys(e).length &&
                0 === Object.keys(t).length
              )
                return !0;
              if (e !== t) return !1;
            }
            return !0;
          },
        };
      function C(e) {
        const t = { nodes: {}, materials: {} };
        return (
          e &&
            e.traverse((e) => {
              e.name && (t.nodes[e.name] = e),
                e.material &&
                  !t.materials[e.material.name] &&
                  (t.materials[e.material.name] = e.material);
            }),
          t
        );
      }
      function x(e, t) {
        const n = e;
        return (
          ((null != t && t.primitive) || !n.__r3f) &&
            (n.__r3f = {
              type: "",
              root: null,
              previousAttach: null,
              memoizedProps: {},
              eventCount: 0,
              handlers: {},
              objects: [],
              parent: null,
              ...t,
            }),
          e
        );
      }
      function w(e, t) {
        let n = e;
        if (t.includes("-")) {
          const r = t.split("-"),
            o = r.pop();
          return (n = r.reduce((e, t) => e[t], e)), { target: n, key: o };
        }
        return { target: n, key: t };
      }
      const _ = /-\d+$/;
      function E(e, t, n) {
        if (B.str(n)) {
          if (_.test(n)) {
            const t = n.replace(_, ""),
              { target: r, key: o } = w(e, t);
            Array.isArray(r[o]) || (r[o] = []);
          }
          const { target: r, key: o } = w(e, n);
          (t.__r3f.previousAttach = r[o]), (r[o] = t);
        } else t.__r3f.previousAttach = n(e, t);
      }
      function S(e, t, n) {
        var r, o;
        if (B.str(n)) {
          const { target: r, key: o } = w(e, n),
            i = t.__r3f.previousAttach;
          void 0 === i ? delete r[o] : (r[o] = i);
        } else
          null == (r = t.__r3f) ||
            null == r.previousAttach ||
            r.previousAttach(e, t);
        null == (o = t.__r3f) || delete o.previousAttach;
      }
      function M(
        e,
        { children: t, key: n, ref: r, ...o },
        { children: i, key: a, ref: s, ...l } = {},
        c = !1
      ) {
        var u;
        const f = null != (u = null == e ? void 0 : e.__r3f) ? u : {},
          d = Object.entries(o),
          p = [];
        if (c) {
          const e = Object.keys(l);
          for (let t = 0; t < e.length; t++)
            o.hasOwnProperty(e[t]) || d.unshift([e[t], y + "remove"]);
        }
        d.forEach(([t, n]) => {
          var r;
          if (null != (r = e.__r3f) && r.primitive && "object" === t) return;
          if (B.equ(n, l[t])) return;
          if (/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(t))
            return p.push([t, n, !0, []]);
          let o = [];
          t.includes("-") && (o = t.split("-")), p.push([t, n, !1, o]);
        });
        const h = { ...o };
        return (
          f.memoizedProps &&
            f.memoizedProps.args &&
            (h.args = f.memoizedProps.args),
          f.memoizedProps &&
            f.memoizedProps.attach &&
            (h.attach = f.memoizedProps.attach),
          { memoized: h, changes: p }
        );
      }
      function R(e, t) {
        var n, o;
        const i = null != (n = null == e ? void 0 : e.__r3f) ? n : {},
          a = i.root,
          s =
            null !=
            (o = null == a || null == a.getState ? void 0 : a.getState())
              ? o
              : {},
          { memoized: l, changes: c } =
            (u = t) && u.memoized && u.changes ? t : M(e, t);
        var u;
        const f = i.eventCount;
        if (
          (e.__r3f && (e.__r3f.memoizedProps = l),
          c.forEach(([t, n, o, a]) => {
            let c = e,
              u = c[t];
            if (a.length && ((u = a.reduce((e, t) => e[t], e)), !u || !u.set)) {
              const [n, ...r] = a.reverse();
              (c = r.reverse().reduce((e, t) => e[t], e)), (t = n);
            }
            var f;
            if (n === y + "remove")
              if (u && u.constructor)
                n = new u.constructor(...(null != (f = l.args) ? f : []));
              else if (c.constructor) {
                var d;
                const e = new c.constructor(
                  ...(null != (d = c.__r3f.memoizedProps.args) ? d : [])
                );
                (n = e[u]), e.dispose && e.dispose();
              } else n = 0;
            if (o)
              n ? (i.handlers[t] = n) : delete i.handlers[t],
                (i.eventCount = Object.keys(i.handlers).length);
            else if (u && u.set && (u.copy || u instanceof r.Layers)) {
              if (Array.isArray(n)) u.fromArray ? u.fromArray(n) : u.set(...n);
              else if (
                u.copy &&
                n &&
                n.constructor &&
                u.constructor.name === n.constructor.name
              )
                u.copy(n);
              else if (void 0 !== n) {
                const e = u instanceof r.Color;
                !e && u.setScalar
                  ? u.setScalar(n)
                  : u instanceof r.Layers && n instanceof r.Layers
                  ? (u.mask = n.mask)
                  : u.set(n);
                r.ColorManagement || s.linear || !e || u.convertSRGBToLinear();
              }
            } else
              (c[t] = n),
                !s.linear &&
                  c[t] instanceof r.Texture &&
                  (c[t].encoding = r.sRGBEncoding);
            I(e);
          }),
          i.parent && s.internal && e.raycast && f !== i.eventCount)
        ) {
          const t = s.internal.interaction.indexOf(e);
          t > -1 && s.internal.interaction.splice(t, 1),
            i.eventCount && s.internal.interaction.push(e);
        }
        return c.length && e.parent && k(e), e;
      }
      function I(e) {
        var t, n;
        const r =
          null == (t = e.__r3f) || null == (n = t.root) || null == n.getState
            ? void 0
            : n.getState();
        r && 0 === r.internal.frames && r.invalidate();
      }
      function k(e) {
        null == e.onUpdate || e.onUpdate(e);
      }
      function T(e, t) {
        e.manual ||
          (p(e)
            ? ((e.left = t.width / -2),
              (e.right = t.width / 2),
              (e.top = t.height / 2),
              (e.bottom = t.height / -2))
            : (e.aspect = t.width / t.height),
          e.updateProjectionMatrix(),
          e.updateMatrixWorld());
      }
      function P(e) {
        return (e.eventObject || e.object).uuid + "/" + e.index + e.instanceId;
      }
      function F(e, t, n, r) {
        const o = n.get(t);
        o &&
          (n.delete(t),
          0 === n.size && (e.delete(r), o.target.releasePointerCapture(r)));
      }
      function D(e) {
        const t = new r.Vector3();
        function n(e) {
          return e.filter((e) =>
            ["Move", "Over", "Enter", "Out", "Leave"].some((t) => {
              var n;
              return null == (n = e.__r3f)
                ? void 0
                : n.handlers["onPointer" + t];
            })
          );
        }
        function o(t) {
          const { internal: n } = e.getState();
          Array.from(n.hovered.values()).forEach((e) => {
            if (
              !t.length ||
              !t.find(
                (t) =>
                  t.object === e.object &&
                  t.index === e.index &&
                  t.instanceId === e.instanceId
              )
            ) {
              const r = e.eventObject.__r3f,
                o = null == r ? void 0 : r.handlers;
              if ((n.hovered.delete(P(e)), null != r && r.eventCount)) {
                const n = { ...e, intersections: t || [] };
                null == o.onPointerOut || o.onPointerOut(n),
                  null == o.onPointerLeave || o.onPointerLeave(n);
              }
            }
          });
        }
        function i(e, t) {
          t.forEach((t) => {
            var n;
            return null == (n = t.__r3f) || null == n.handlers.onPointerMissed
              ? void 0
              : n.handlers.onPointerMissed(e);
          });
        }
        return {
          handlePointer: (r) => {
            switch (r) {
              case "onPointerLeave":
              case "onPointerCancel":
                return () => o([]);
              case "onLostPointerCapture":
                return (t) => {
                  const { internal: n } = e.getState();
                  "pointerId" in t &&
                    !n.capturedMap.has(t.pointerId) &&
                    (n.capturedMap.delete(t.pointerId), o([]));
                };
            }
            return (a) => {
              const { onPointerMissed: s, internal: l } = e.getState();
              l.lastEvent.current = a;
              const c = "onPointerMove" === r,
                u =
                  "onClick" === r ||
                  "onContextMenu" === r ||
                  "onDoubleClick" === r,
                f = (function (t, n) {
                  const r = e.getState(),
                    o = new Set(),
                    i = [],
                    a = n ? n(r.internal.interaction) : r.internal.interaction;
                  a.forEach((e) => {
                    const t = A(e);
                    t && (t.raycaster.camera = void 0);
                  }),
                    r.previousRoot ||
                      null == r.events.compute ||
                      r.events.compute(t, r);
                  let s = a
                    .flatMap((e) => {
                      const n = A(e);
                      return n &&
                        n.events.enabled &&
                        null !== n.raycaster.camera
                        ? (void 0 === n.raycaster.camera &&
                            (null == n.events.compute ||
                              n.events.compute(
                                t,
                                n,
                                null == (r = n.previousRoot)
                                  ? void 0
                                  : r.getState()
                              ),
                            void 0 === n.raycaster.camera &&
                              (n.raycaster.camera = null)),
                          n.raycaster.camera
                            ? n.raycaster.intersectObject(e, !0)
                            : [])
                        : [];
                      var r;
                    })
                    .sort((e, t) => {
                      const n = A(e.object),
                        r = A(t.object);
                      return n && r
                        ? r.events.priority - n.events.priority ||
                            e.distance - t.distance
                        : 0;
                    })
                    .filter((e) => {
                      const t = P(e);
                      return !o.has(t) && (o.add(t), !0);
                    });
                  r.events.filter && (s = r.events.filter(s, r));
                  for (const e of s) {
                    let t = e.object;
                    for (; t; ) {
                      var l;
                      null != (l = t.__r3f) &&
                        l.eventCount &&
                        i.push({ ...e, eventObject: t }),
                        (t = t.parent);
                    }
                  }
                  if (
                    "pointerId" in t &&
                    r.internal.capturedMap.has(t.pointerId)
                  )
                    for (let e of r.internal.capturedMap
                      .get(t.pointerId)
                      .values())
                      i.push(e.intersection);
                  return i;
                })(a, c ? n : void 0),
                d = u
                  ? (function (t) {
                      const { internal: n } = e.getState(),
                        r = t.offsetX - n.initialClick[0],
                        o = t.offsetY - n.initialClick[1];
                      return Math.round(Math.sqrt(r * r + o * o));
                    })(a)
                  : 0;
              "onPointerDown" === r &&
                ((l.initialClick = [a.offsetX, a.offsetY]),
                (l.initialHits = f.map((e) => e.eventObject))),
                u && !f.length && d <= 2 && (i(a, l.interaction), s && s(a)),
                c && o(f),
                (function (n, r, i, a) {
                  const {
                    raycaster: s,
                    pointer: l,
                    camera: c,
                    internal: u,
                  } = e.getState();
                  if (n.length) {
                    const e = t.set(l.x, l.y, 0).unproject(c),
                      f = { stopped: !1 };
                    for (const t of n) {
                      const d = (e) => {
                          var n, r;
                          return (
                            null !=
                              (n =
                                null == (r = u.capturedMap.get(e))
                                  ? void 0
                                  : r.has(t.eventObject)) && n
                          );
                        },
                        p = (e) => {
                          const n = { intersection: t, target: r.target };
                          u.capturedMap.has(e)
                            ? u.capturedMap.get(e).set(t.eventObject, n)
                            : u.capturedMap.set(
                                e,
                                new Map([[t.eventObject, n]])
                              ),
                            r.target.setPointerCapture(e);
                        },
                        h = (e) => {
                          const n = u.capturedMap.get(e);
                          n && F(u.capturedMap, t.eventObject, n, e);
                        };
                      let m = {};
                      for (let e in r) {
                        let t = r[e];
                        "function" !== typeof t && (m[e] = t);
                      }
                      let g = {
                        ...t,
                        ...m,
                        pointer: l,
                        intersections: n,
                        stopped: f.stopped,
                        delta: i,
                        unprojectedPoint: e,
                        ray: s.ray,
                        camera: c,
                        stopPropagation: () => {
                          const e =
                            "pointerId" in r && u.capturedMap.get(r.pointerId);
                          (!e || e.has(t.eventObject)) &&
                            ((g.stopped = f.stopped = !0),
                            u.hovered.size &&
                              Array.from(u.hovered.values()).find(
                                (e) => e.eventObject === t.eventObject
                              )) &&
                            o([...n.slice(0, n.indexOf(t)), t]);
                        },
                        target: {
                          hasPointerCapture: d,
                          setPointerCapture: p,
                          releasePointerCapture: h,
                        },
                        currentTarget: {
                          hasPointerCapture: d,
                          setPointerCapture: p,
                          releasePointerCapture: h,
                        },
                        nativeEvent: r,
                      };
                      if ((a(g), !0 === f.stopped)) break;
                    }
                  }
                })(f, a, d, (e) => {
                  const t = e.eventObject,
                    n = t.__r3f,
                    o = null == n ? void 0 : n.handlers;
                  if (null != n && n.eventCount)
                    if (c) {
                      if (
                        o.onPointerOver ||
                        o.onPointerEnter ||
                        o.onPointerOut ||
                        o.onPointerLeave
                      ) {
                        const t = P(e),
                          n = l.hovered.get(t);
                        n
                          ? n.stopped && e.stopPropagation()
                          : (l.hovered.set(t, e),
                            null == o.onPointerOver || o.onPointerOver(e),
                            null == o.onPointerEnter || o.onPointerEnter(e));
                      }
                      null == o.onPointerMove || o.onPointerMove(e);
                    } else {
                      const n = o[r];
                      n
                        ? (u && !l.initialHits.includes(t)) ||
                          (i(
                            a,
                            l.interaction.filter(
                              (e) => !l.initialHits.includes(e)
                            )
                          ),
                          n(e))
                        : u &&
                          l.initialHits.includes(t) &&
                          i(
                            a,
                            l.interaction.filter(
                              (e) => !l.initialHits.includes(e)
                            )
                          );
                    }
                });
            };
          },
        };
      }
      let O = {},
        L = (e) => {
          O = { ...O, ...e };
        };
      const G = (e) => !(null == e || !e.render),
        H = o.createContext(null);
      let z,
        N = [],
        j = [],
        U = [];
      function J(e, t) {
        for (z = 0; z < e.length; z++) e[z](t);
      }
      let K, $;
      function Q(e, t, n) {
        let r = t.clock.getDelta();
        for (
          "never" === t.frameloop &&
            "number" === typeof e &&
            ((r = e - t.clock.elapsedTime),
            (t.clock.oldTime = t.clock.elapsedTime),
            (t.clock.elapsedTime = e)),
            K = t.internal.subscribers,
            z = 0;
          z < K.length;
          z++
        )
          ($ = K[z]), $.ref.current($.store.getState(), r, n);
        return (
          !t.internal.priority && t.gl.render && t.gl.render(t.scene, t.camera),
          (t.internal.frames = Math.max(0, t.internal.frames - 1)),
          "always" === t.frameloop ? 1 : t.internal.frames
        );
      }
      function W() {
        const e = o.useContext(H);
        if (!e) throw "R3F hooks can only be used within the Canvas component!";
        return e;
      }
      function V(e = (e) => e, t) {
        return W()(e, t);
      }
      function Y(e, t = 0) {
        const n = W(),
          r = n.getState().internal.subscribe,
          o = m(e);
        return h(() => r(o, t, n), [t, r, n]), null;
      }
      function X(e, t) {
        return function (n, ...r) {
          const o = new n();
          return (
            e && e(o),
            Promise.all(
              r.map(
                (e) =>
                  new Promise((n, r) =>
                    o.load(
                      e,
                      (e) => {
                        e.scene && Object.assign(e, C(e.scene)), n(e);
                      },
                      t,
                      (t) => r(`Could not load ${e}: ${t.message}`)
                    )
                  )
              )
            )
          );
        };
      }
      function Z(e, t, n, r) {
        const o = Array.isArray(t) ? t : [t],
          i = ((e, t, n) => d(e, t, !1, n))(X(n, r), [e, ...o], {
            equal: B.equ,
          });
        return Array.isArray(t) ? i : i[0];
      }
      (Z.preload = function (e, t, n) {
        const r = Array.isArray(t) ? t : [t];
        return ((e, t, n) => {
          d(e, t, !0, n);
        })(X(n), [e, ...r]);
      }),
        (Z.clear = function (e, t) {
          return ((e) => {
            if (void 0 === e || 0 === e.length) f.splice(0, f.length);
            else {
              const t = f.find((t) => u(e, t.keys, t.equal));
              if (t) {
                const e = f.indexOf(t);
                -1 !== e && f.splice(e, 1);
              }
            }
          })([e, ...(Array.isArray(t) ? t : [t])]);
        });
      const q = new Map(),
        { invalidate: ee, advance: te } = (function (e) {
          let t,
            n,
            r,
            o = !1;
          function i(a) {
            if (
              ((n = requestAnimationFrame(i)),
              (o = !0),
              (t = 0),
              N.length && J(N, a),
              e.forEach((e) => {
                var n;
                (r = e.store.getState()),
                  !r.internal.active ||
                    !("always" === r.frameloop || r.internal.frames > 0) ||
                    (null != (n = r.gl.xr) && n.isPresenting) ||
                    (t += Q(a, r));
              }),
              j.length && J(j, a),
              0 === t)
            )
              return U.length && J(U, a), (o = !1), cancelAnimationFrame(n);
          }
          return {
            loop: i,
            invalidate: function t(n) {
              var r;
              if (!n) return e.forEach((e) => t(e.store.getState()));
              (null != (r = n.gl.xr) && r.isPresenting) ||
                !n.internal.active ||
                "never" === n.frameloop ||
                ((n.internal.frames = Math.min(60, n.internal.frames + 1)),
                o || ((o = !0), requestAnimationFrame(i)));
            },
            advance: function (t, n = !0, r, o) {
              n && J(N, t),
                r ? Q(t, r, o) : e.forEach((e) => Q(t, e.store.getState())),
                n && J(j, t);
            },
          };
        })(q),
        { reconciler: ne, applyProps: re } = (function (e, t) {
          function n(e, { args: t = [], attach: n, ...r }, o) {
            let i,
              a = `${e[0].toUpperCase()}${e.slice(1)}`;
            if (
              (void 0 === n &&
                (a.endsWith("Geometry")
                  ? (n = "geometry")
                  : a.endsWith("Material") && (n = "material")),
              "primitive" === e)
            ) {
              if (void 0 === r.object)
                throw "Primitives without 'object' are invalid!";
              i = x(r.object, { type: e, root: o, attach: n, primitive: !0 });
            } else {
              const r = O[a];
              if (!r)
                throw `${a} is not part of the THREE namespace! Did you forget to extend? See: https://github.com/pmndrs/react-three-fiber/blob/master/markdown/api.md#using-3rd-party-objects-declaratively`;
              if (!Array.isArray(t)) throw "The args prop must be an array!";
              i = x(new r(...t), {
                type: e,
                root: o,
                attach: n,
                memoizedProps: { args: t },
              });
            }
            return "inject" !== a && R(i, r), i;
          }
          function r(e, t) {
            let n = !1;
            var r, o;
            t &&
              (null != (r = t.__r3f) && r.attach
                ? E(e, t, t.__r3f.attach)
                : t.isObject3D && e.isObject3D && (e.add(t), (n = !0)),
              n || null == (o = e.__r3f) || o.objects.push(t),
              t.__r3f || x(t, {}),
              (t.__r3f.parent = e),
              k(t),
              I(t));
          }
          function o(e, t, n) {
            let r = !1;
            if (t) {
              var o, i;
              if (null != (o = t.__r3f) && o.attach) E(e, t, t.__r3f.attach);
              else if (t.isObject3D && e.isObject3D) {
                (t.parent = e), t.dispatchEvent({ type: "added" });
                const o = e.children.filter((e) => e !== t),
                  i = o.indexOf(n);
                (e.children = [...o.slice(0, i), t, ...o.slice(i)]), (r = !0);
              }
              r || null == (i = e.__r3f) || i.objects.push(t),
                t.__r3f || x(t, {}),
                (t.__r3f.parent = e),
                k(t),
                I(t);
            }
          }
          function a(e, t, n = !1) {
            e && [...e].forEach((e) => s(t, e, n));
          }
          function s(e, t, n) {
            if (t) {
              var r, o, i;
              if (
                (t.__r3f && (t.__r3f.parent = null),
                null != (r = e.__r3f) &&
                  r.objects &&
                  (e.__r3f.objects = e.__r3f.objects.filter((e) => e !== t)),
                null != (o = t.__r3f) && o.attach)
              )
                S(e, t, t.__r3f.attach);
              else if (t.isObject3D && e.isObject3D) {
                var s;
                e.remove(t),
                  null != (s = t.__r3f) &&
                    s.root &&
                    (function (e, t) {
                      const { events: n, internal: r } = e.getState();
                      (r.interaction = r.interaction.filter((e) => e !== t)),
                        (r.initialHits = r.initialHits.filter((e) => e !== t)),
                        r.hovered.forEach((e, n) => {
                          (e.eventObject !== t && e.object !== t) ||
                            r.hovered.delete(n);
                        }),
                        r.capturedMap.forEach((e, n) => {
                          F(r.capturedMap, t, e, n);
                        });
                    })(t.__r3f.root, t);
              }
              const u = null == (i = t.__r3f) ? void 0 : i.primitive,
                f = void 0 === n ? null !== t.dispose && !u : n;
              var l;
              if (!u)
                a(null == (l = t.__r3f) ? void 0 : l.objects, t, f),
                  a(t.children, t, f);
              t.__r3f &&
                (delete t.__r3f.root,
                delete t.__r3f.objects,
                delete t.__r3f.handlers,
                delete t.__r3f.memoizedProps,
                u || delete t.__r3f),
                f &&
                  t.dispose &&
                  "Scene" !== t.type &&
                  (0, c.unstable_scheduleCallback)(
                    c.unstable_IdlePriority,
                    () => {
                      try {
                        t.dispose();
                      } catch (e) {}
                    }
                  ),
                I(e);
            }
          }
          return {
            reconciler: l()({
              createInstance: n,
              removeChild: s,
              appendChild: r,
              appendInitialChild: r,
              insertBefore: o,
              supportsMicrotask: !0,
              warnsIfNotActing: !0,
              supportsMutation: !0,
              isPrimaryRenderer: !1,
              noTimeout: -1,
              appendChildToContainer: (e, t) => {
                const n = e.getState().scene;
                (n.__r3f.root = e), r(n, t);
              },
              removeChildFromContainer: (e, t) => s(e.getState().scene, t),
              insertInContainerBefore: (e, t, n) => o(e.getState().scene, t, n),
              getRootHostContext: () => null,
              getChildHostContext: (e) => e,
              finalizeInitialChildren(e) {
                var t;
                return !!(null != (t = null == e ? void 0 : e.__r3f) ? t : {})
                  .handlers;
              },
              prepareUpdate(e, t, n, r) {
                if (e.__r3f.primitive && r.object && r.object !== e)
                  return [!0];
                {
                  const { args: t = [], children: o, ...i } = r,
                    { args: a = [], children: s, ...l } = n;
                  if (!Array.isArray(t))
                    throw "The args prop must be an array!";
                  if (t.some((e, t) => e !== a[t])) return [!0];
                  const c = M(e, i, l, !0);
                  return c.changes.length ? [!1, c] : null;
                }
              },
              commitUpdate(e, [t, o], i, a, l, c) {
                t
                  ? (function (e, t, o, i) {
                      var a, l;
                      const c = null == (a = e.__r3f) ? void 0 : a.parent;
                      if (!c) return;
                      const u = n(
                        t,
                        o,
                        null == (l = e.__r3f) ? void 0 : l.root
                      );
                      "primitive" !== t &&
                        e.children &&
                        (e.children.forEach((e) => r(u, e)), (e.children = [])),
                        e.__r3f.objects.forEach((e) => r(u, e)),
                        (e.__r3f.objects = []),
                        s(c, e),
                        r(c, u),
                        u.raycast &&
                          u.__r3f.eventCount &&
                          u.__r3f.root.getState().internal.interaction.push(u);
                      [i, i.alternate].forEach((e) => {
                        null !== e &&
                          ((e.stateNode = u),
                          e.ref &&
                            ("function" === typeof e.ref
                              ? e.ref(u)
                              : (e.ref.current = u)));
                      });
                    })(e, i, l, c)
                  : R(e, o);
              },
              commitMount(e, t, n, r) {
                var o;
                const i = null != (o = null == e ? void 0 : e.__r3f) ? o : {};
                e.raycast &&
                  i.handlers &&
                  i.eventCount &&
                  e.__r3f.root.getState().internal.interaction.push(e);
              },
              getPublicInstance: (e) => e,
              shouldDeprioritizeSubtree: () => !1,
              prepareForCommit: () => null,
              preparePortalMount: (e) => x(e.getState().scene),
              resetAfterCommit: () => {},
              shouldSetTextContent: () => !1,
              clearContainer: () => !1,
              detachDeletedInstance: () => {},
              hideInstance(e) {
                var t;
                const { attach: n, parent: r } =
                  null != (t = null == e ? void 0 : e.__r3f) ? t : {};
                n && r && S(r, e, n), e.isObject3D && (e.visible = !1), I(e);
              },
              unhideInstance(e, t) {
                var n;
                const { attach: r, parent: o } =
                  null != (n = null == e ? void 0 : e.__r3f) ? n : {};
                r && o && E(o, e, r),
                  ((e.isObject3D && null == t.visible) || t.visible) &&
                    (e.visible = !0),
                  I(e);
              },
              createTextInstance: () => {},
              hideTextInstance: () => {
                throw new Error("Text is not allowed in the R3F tree.");
              },
              unhideTextInstance: () => {},
              getCurrentEventPriority: () => (t ? t() : i.DefaultEventPriority),
              now:
                "undefined" !== typeof performance && B.fun(performance.now)
                  ? performance.now
                  : B.fun(Date.now)
                  ? Date.now
                  : void 0,
              scheduleTimeout: B.fun(setTimeout) ? setTimeout : void 0,
              cancelTimeout: B.fun(clearTimeout) ? clearTimeout : void 0,
              setTimeout: B.fun(setTimeout) ? setTimeout : void 0,
              clearTimeout: B.fun(clearTimeout) ? clearTimeout : void 0,
            }),
            applyProps: R,
          };
        })(0, function () {
          var e, t;
          switch (
            null == (e = window) || null == (t = e.event) ? void 0 : t.type
          ) {
            case "click":
            case "contextmenu":
            case "dblclick":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
              return i.DiscreteEventPriority;
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerenter":
            case "pointerleave":
            case "wheel":
              return i.ContinuousEventPriority;
            default:
              return i.DefaultEventPriority;
          }
        }),
        oe = { objects: "shallow", strict: !1 },
        ie = (e, t) => {
          const n = "function" === typeof e ? e(t) : e;
          return G(n)
            ? n
            : new r.WebGLRenderer({
                powerPreference: "high-performance",
                canvas: t,
                antialias: !0,
                alpha: !0,
                ...e,
              });
        };
      function ae(e) {
        let t = q.get(e),
          n = null == t ? void 0 : t.fiber,
          s = null == t ? void 0 : t.store;
        t && console.warn("R3F.createRoot should only be called once!");
        const l =
            s ||
            ((e, t) => {
              const n = (0, a.Z)((n, i) => {
                  const a = new r.Vector3(),
                    s = new r.Vector3(),
                    l = new r.Vector3();
                  function c(e = i().camera, t = s, n = i().size) {
                    const { width: o, height: c } = n,
                      u = o / c;
                    t instanceof r.Vector3 ? l.copy(t) : l.set(...t);
                    const f = e.getWorldPosition(a).distanceTo(l);
                    if (p(e))
                      return {
                        width: o / e.zoom,
                        height: c / e.zoom,
                        factor: 1,
                        distance: f,
                        aspect: u,
                      };
                    {
                      const t = (e.fov * Math.PI) / 180,
                        n = 2 * Math.tan(t / 2) * f,
                        r = n * (o / c);
                      return {
                        width: r,
                        height: n,
                        factor: o / r,
                        distance: f,
                        aspect: u,
                      };
                    }
                  }
                  let u;
                  const f = (e) =>
                      n((t) => ({
                        performance: { ...t.performance, current: e },
                      })),
                    d = new r.Vector2();
                  return {
                    set: n,
                    get: i,
                    gl: null,
                    camera: null,
                    raycaster: null,
                    events: { priority: 1, enabled: !0, connected: !1 },
                    xr: null,
                    invalidate: () => e(i()),
                    advance: (e, n) => t(e, n, i()),
                    legacy: !1,
                    linear: !1,
                    flat: !1,
                    scene: x(new r.Scene()),
                    controls: null,
                    clock: new r.Clock(),
                    pointer: d,
                    mouse: d,
                    frameloop: "always",
                    onPointerMissed: void 0,
                    performance: {
                      current: 1,
                      min: 0.5,
                      max: 1,
                      debounce: 200,
                      regress: () => {
                        const e = i();
                        u && clearTimeout(u),
                          e.performance.current !== e.performance.min &&
                            f(e.performance.min),
                          (u = setTimeout(
                            () => f(i().performance.max),
                            e.performance.debounce
                          ));
                      },
                    },
                    size: { width: 0, height: 0 },
                    viewport: {
                      initialDpr: 0,
                      dpr: 0,
                      width: 0,
                      height: 0,
                      aspect: 0,
                      distance: 0,
                      factor: 0,
                      getCurrentViewport: c,
                    },
                    setEvents: (e) =>
                      n((t) => ({ ...t, events: { ...t.events, ...e } })),
                    setSize: (e, t) => {
                      const r = i().camera,
                        o = { width: e, height: t };
                      n((e) => ({
                        size: o,
                        viewport: { ...e.viewport, ...c(r, s, o) },
                      }));
                    },
                    setDpr: (e) =>
                      n((t) => {
                        const n = b(e);
                        return {
                          viewport: {
                            ...t.viewport,
                            dpr: n,
                            initialDpr: t.viewport.initialDpr || n,
                          },
                        };
                      }),
                    setFrameloop: (e = "always") => {
                      const t = i().clock;
                      t.stop(),
                        (t.elapsedTime = 0),
                        "never" !== e && (t.start(), (t.elapsedTime = 0)),
                        n(() => ({ frameloop: e }));
                    },
                    previousRoot: void 0,
                    internal: {
                      active: !1,
                      priority: 0,
                      frames: 0,
                      lastEvent: o.createRef(),
                      interaction: [],
                      hovered: new Map(),
                      subscribers: [],
                      initialClick: [0, 0],
                      initialHits: [],
                      capturedMap: new Map(),
                      subscribe: (e, t, r) => (
                        n(({ internal: n }) => ({
                          internal: {
                            ...n,
                            priority: n.priority + (t > 0 ? 1 : 0),
                            subscribers: [
                              ...n.subscribers,
                              { ref: e, priority: t, store: r },
                            ].sort((e, t) => e.priority - t.priority),
                          },
                        })),
                        () => {
                          n(({ internal: n }) => ({
                            internal: {
                              ...n,
                              priority: n.priority - (t > 0 ? 1 : 0),
                              subscribers: n.subscribers.filter(
                                (t) => t.ref !== e
                              ),
                            },
                          }));
                        }
                      ),
                    },
                  };
                }),
                i = n.getState();
              let s = i.size,
                l = i.viewport.dpr;
              return (
                n.subscribe(() => {
                  const {
                    camera: e,
                    size: t,
                    viewport: r,
                    gl: o,
                  } = n.getState();
                  (t === s && r.dpr === l) ||
                    (T(e, t),
                    o.setPixelRatio(r.dpr),
                    o.setSize(t.width, t.height),
                    (s = t),
                    (l = r.dpr));
                }),
                n.subscribe((t) => e(t)),
                n
              );
            })(ee, te),
          c = n || ne.createContainer(l, i.ConcurrentRoot, !1, null);
        let u;
        t || q.set(e, { fiber: c, store: l });
        let f = !1;
        return {
          configure(t = {}) {
            var n, o, i, a;
            let {
                gl: s,
                size: c,
                events: d,
                onCreated: p,
                shadows: h = !1,
                linear: m = !1,
                flat: g = !1,
                legacy: v = !1,
                orthographic: y = !1,
                frameloop: A = "always",
                dpr: C = [1, 2],
                performance: x,
                raycaster: w,
                camera: _,
                onPointerMissed: E,
              } = t,
              S = l.getState(),
              M = S.gl;
            S.gl || S.set({ gl: (M = ie(s, e)) });
            let R = S.raycaster;
            R || S.set({ raycaster: (R = new r.Raycaster()) });
            const { params: I, ...k } = w || {};
            if (
              (B.equ(k, R, oe) || re(R, { ...k }),
              B.equ(I, R.params, oe) ||
                re(R, { params: { ...R.params, ...I } }),
              !S.camera)
            ) {
              const e = _ instanceof r.Camera,
                t = e
                  ? _
                  : y
                  ? new r.OrthographicCamera(0, 0, 0, 0, 0.1, 1e3)
                  : new r.PerspectiveCamera(75, 0, 0.1, 1e3);
              e ||
                ((t.position.z = 5),
                _ && re(t, _),
                (null != _ && _.rotation) || t.lookAt(0, 0, 0)),
                S.set({ camera: t });
            }
            if (!S.xr) {
              const e = (e, t) => {
                  const n = l.getState();
                  "never" !== n.frameloop && te(e, !0, n, t);
                },
                t = () => {
                  const t = l.getState().gl;
                  (t.xr.enabled = t.xr.isPresenting),
                    t.xr.setAnimationLoop(t.xr.isPresenting ? e : null);
                },
                n = {
                  connect() {
                    const e = l.getState().gl;
                    e.xr.addEventListener("sessionstart", t),
                      e.xr.addEventListener("sessionend", t);
                  },
                  disconnect() {
                    const e = l.getState().gl;
                    e.xr.removeEventListener("sessionstart", t),
                      e.xr.removeEventListener("sessionend", t);
                  },
                };
              M.xr && n.connect(), S.set({ xr: n });
            }
            if (M.shadowMap) {
              const e = B.boo(h);
              if (
                (e && M.shadowMap.enabled !== h) ||
                !B.equ(h, M.shadowMap, oe)
              ) {
                const t = M.shadowMap.enabled;
                (M.shadowMap.enabled = !!h),
                  e
                    ? (M.shadowMap.type = r.PCFSoftShadowMap)
                    : Object.assign(M.shadowMap, h),
                  t !== M.shadowMap.enabled && (M.shadowMap.needsUpdate = !0);
              }
            }
            r.ColorManagement && (r.ColorManagement.legacyMode = v);
            const T = m ? r.LinearEncoding : r.sRGBEncoding,
              P = g ? r.NoToneMapping : r.ACESFilmicToneMapping;
            return (
              M.outputEncoding !== T && (M.outputEncoding = T),
              M.toneMapping !== P && (M.toneMapping = P),
              S.legacy !== v && S.set(() => ({ legacy: v })),
              S.linear !== m && S.set(() => ({ linear: m })),
              S.flat !== g && S.set(() => ({ flat: g })),
              !s || B.fun(s) || G(s) || B.equ(s, M, oe) || re(M, s),
              d && !S.events.handlers && S.set({ events: d(l) }),
              C && S.viewport.dpr !== b(C) && S.setDpr(C),
              (c = c || {
                width:
                  null !=
                  (n = null == (o = e.parentElement) ? void 0 : o.clientWidth)
                    ? n
                    : 0,
                height:
                  null !=
                  (i = null == (a = e.parentElement) ? void 0 : a.clientHeight)
                    ? i
                    : 0,
              }),
              B.equ(c, S.size, oe) || S.setSize(c.width, c.height),
              S.frameloop !== A && S.setFrameloop(A),
              S.onPointerMissed || S.set({ onPointerMissed: E }),
              x &&
                !B.equ(x, S.performance, oe) &&
                S.set((e) => ({ performance: { ...e.performance, ...x } })),
              (u = p),
              (f = !0),
              this
            );
          },
          render(t) {
            return (
              f || this.configure(),
              ne.updateContainer(
                o.createElement(se, {
                  store: l,
                  children: t,
                  onCreated: u,
                  rootElement: e,
                }),
                c,
                null,
                () => {}
              ),
              l
            );
          },
          unmount() {
            le(e);
          },
        };
      }
      function se({ store: e, children: t, onCreated: n, rootElement: r }) {
        return (
          h(() => {
            const t = e.getState();
            t.set((e) => ({ internal: { ...e.internal, active: !0 } })),
              n && n(t),
              e.getState().events.connected ||
                null == t.events.connect ||
                t.events.connect(r);
          }, []),
          o.createElement(H.Provider, { value: e }, t)
        );
      }
      function le(e, t) {
        const n = q.get(e),
          r = null == n ? void 0 : n.fiber;
        if (r) {
          const o = null == n ? void 0 : n.store.getState();
          o && (o.internal.active = !1),
            ne.updateContainer(null, r, null, () => {
              o &&
                setTimeout(() => {
                  try {
                    var n, r, i, a;
                    null == o.events.disconnect || o.events.disconnect(),
                      null == (n = o.gl) ||
                        null == (r = n.renderLists) ||
                        null == r.dispose ||
                        r.dispose(),
                      null == (i = o.gl) ||
                        null == i.forceContextLoss ||
                        i.forceContextLoss(),
                      null != (a = o.gl) && a.xr && o.xr.disconnect(),
                      (function (e) {
                        e.dispose && "Scene" !== e.type && e.dispose();
                        for (const t in e)
                          null == t.dispose || t.dispose(), delete e[t];
                      })(o),
                      q.delete(e),
                      t && t(e);
                  } catch (s) {}
                }, 500);
            });
        }
      }
      ne.injectIntoDevTools({
        bundleType: 0,
        rendererPackageName: "@react-three/fiber",
        version: "18.0.0",
      });
      o.unstable_act;
    },
    26135: function (e, t, n) {
      "use strict";
      n.d(t, {
        Xz: function () {
          return g;
        },
      });
      var r = n(88279),
        o = n(87462),
        i = n(67294),
        a = n(99477),
        s = n(35878),
        l = n(20296),
        c = n.n(l);
      function u(e) {
        let {
          debounce: t,
          scroll: n,
          polyfill: r,
          offsetSize: o,
        } = void 0 === e ? { debounce: 0, scroll: !1, offsetSize: !1 } : e;
        const a =
          r ||
          ("undefined" === typeof window ? class {} : window.ResizeObserver);
        if (!a)
          throw new Error(
            "This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills"
          );
        const [s, l] = (0, i.useState)({
            left: 0,
            top: 0,
            width: 0,
            height: 0,
            bottom: 0,
            right: 0,
            x: 0,
            y: 0,
          }),
          u = (0, i.useRef)({
            element: null,
            scrollContainers: null,
            resizeObserver: null,
            lastBounds: s,
          }),
          d = t ? ("number" === typeof t ? t : t.scroll) : null,
          h = t ? ("number" === typeof t ? t : t.resize) : null,
          m = (0, i.useRef)(!1);
        (0, i.useEffect)(
          () => (
            (m.current = !0),
            () => {
              m.current = !1;
            }
          )
        );
        const [g, v, y] = (0, i.useMemo)(() => {
          const e = () => {
            if (!u.current.element) return;
            const {
                left: e,
                top: t,
                width: n,
                height: r,
                bottom: i,
                right: a,
                x: s,
                y: c,
              } = u.current.element.getBoundingClientRect(),
              f = {
                left: e,
                top: t,
                width: n,
                height: r,
                bottom: i,
                right: a,
                x: s,
                y: c,
              };
            u.current.element instanceof HTMLElement &&
              o &&
              ((f.height = u.current.element.offsetHeight),
              (f.width = u.current.element.offsetWidth)),
              Object.freeze(f),
              m.current &&
                !p(u.current.lastBounds, f) &&
                l((u.current.lastBounds = f));
          };
          return [e, h ? c()(e, h) : e, d ? c()(e, d) : e];
        }, [l, o, d, h]);
        function b() {
          u.current.scrollContainers &&
            (u.current.scrollContainers.forEach((e) =>
              e.removeEventListener("scroll", y, !0)
            ),
            (u.current.scrollContainers = null)),
            u.current.resizeObserver &&
              (u.current.resizeObserver.disconnect(),
              (u.current.resizeObserver = null));
        }
        function A() {
          u.current.element &&
            ((u.current.resizeObserver = new a(y)),
            u.current.resizeObserver.observe(u.current.element),
            n &&
              u.current.scrollContainers &&
              u.current.scrollContainers.forEach((e) =>
                e.addEventListener("scroll", y, { capture: !0, passive: !0 })
              ));
        }
        var B, C, x;
        return (
          (B = y),
          (C = Boolean(n)),
          (0, i.useEffect)(() => {
            if (C) {
              const e = B;
              return (
                window.addEventListener("scroll", e, {
                  capture: !0,
                  passive: !0,
                }),
                () => {
                  window.removeEventListener("scroll", e, !0);
                }
              );
            }
          }, [B, C]),
          (x = v),
          (0, i.useEffect)(() => {
            const e = x;
            return (
              window.addEventListener("resize", e),
              () => {
                window.removeEventListener("resize", e);
              }
            );
          }, [x]),
          (0, i.useEffect)(() => {
            b(), A();
          }, [n, y, v]),
          (0, i.useEffect)(() => b, []),
          [
            (e) => {
              e &&
                e !== u.current.element &&
                (b(),
                (u.current.element = e),
                (u.current.scrollContainers = f(e)),
                A());
            },
            s,
            g,
          ]
        );
      }
      function f(e) {
        const t = [];
        if (!e || e === document.body) return t;
        const {
          overflow: n,
          overflowX: r,
          overflowY: o,
        } = window.getComputedStyle(e);
        return (
          [n, r, o].some((e) => "auto" === e || "scroll" === e) && t.push(e),
          [...t, ...f(e.parentElement)]
        );
      }
      const d = ["x", "y", "top", "bottom", "left", "right", "width", "height"],
        p = (e, t) => d.every((n) => e[n] === t[n]);
      n(32576), n(76525), n(63840);
      const h = {
        onClick: ["click", !1],
        onContextMenu: ["contextmenu", !1],
        onDoubleClick: ["dblclick", !1],
        onWheel: ["wheel", !0],
        onPointerDown: ["pointerdown", !0],
        onPointerUp: ["pointerup", !0],
        onPointerLeave: ["pointerleave", !0],
        onPointerMove: ["pointermove", !0],
        onPointerCancel: ["pointercancel", !0],
        onLostPointerCapture: ["lostpointercapture", !0],
      };
      function m(e) {
        const { handlePointer: t } = (0, r.c)(e);
        return {
          priority: 1,
          enabled: !0,
          compute(e, t, n) {
            t.pointer.set(
              (e.offsetX / t.size.width) * 2 - 1,
              (-e.offsetY / t.size.height) * 2 + 1
            ),
              t.raycaster.setFromCamera(t.pointer, t.camera);
          },
          connected: void 0,
          handlers: Object.keys(h).reduce((e, n) => ({ ...e, [n]: t(n) }), {}),
          connect: (t) => {
            var n;
            const { set: r, events: o } = e.getState();
            null == o.disconnect || o.disconnect(),
              r((e) => ({ events: { ...e.events, connected: t } })),
              Object.entries(
                null != (n = null == o ? void 0 : o.handlers) ? n : []
              ).forEach(([e, n]) => {
                const [r, o] = h[e];
                t.addEventListener(r, n, { passive: o });
              });
          },
          disconnect: () => {
            const { set: t, events: n } = e.getState();
            var r;
            n.connected &&
              (Object.entries(null != (r = n.handlers) ? r : []).forEach(
                ([e, t]) => {
                  if (n && n.connected instanceof HTMLElement) {
                    const [r] = h[e];
                    n.connected.removeEventListener(r, t);
                  }
                }
              ),
              t((e) => ({ events: { ...e.events, connected: void 0 } })));
          },
        };
      }
      const g = i.forwardRef(function (
        {
          children: e,
          fallback: t,
          resize: n,
          style: l,
          gl: c,
          events: f = m,
          shadows: d,
          linear: p,
          flat: h,
          legacy: g,
          orthographic: v,
          frameloop: y,
          dpr: b,
          performance: A,
          raycaster: B,
          camera: C,
          onPointerMissed: x,
          onCreated: w,
          ..._
        },
        E
      ) {
        i.useMemo(() => (0, r.e)(a), []);
        const [S, { width: M, height: R }] = u({
            scroll: !0,
            debounce: { scroll: 50, resize: 0 },
            ...n,
          }),
          I = i.useRef(null),
          k = i.useRef(null),
          [T, P] = i.useState(null),
          F = (0, r.u)(x),
          [D, O] = i.useState(!1),
          [L, G] = i.useState(!1);
        if (D) throw D;
        if (L) throw L;
        const H = i.useRef(null);
        return (
          M > 0 &&
            R > 0 &&
            T &&
            (H.current || (H.current = (0, r.a)(T)),
            H.current.configure({
              gl: c,
              events: f,
              shadows: d,
              linear: p,
              flat: h,
              legacy: g,
              orthographic: v,
              frameloop: y,
              dpr: b,
              performance: A,
              raycaster: B,
              camera: C,
              size: { width: M, height: R },
              onPointerMissed: (...e) =>
                null == F.current ? void 0 : F.current(...e),
              onCreated: (e) => {
                null == e.events.connect || e.events.connect(k.current),
                  null == w || w(e);
              },
            }),
            H.current.render(
              i.createElement(
                r.E,
                { set: G },
                i.createElement(
                  i.Suspense,
                  { fallback: i.createElement(r.B, { set: O }) },
                  e
                )
              )
            )),
          (0, r.b)(() => {
            P(I.current);
          }, []),
          i.useEffect(() => {
            if (T) return () => (0, r.d)(T);
          }, [T]),
          i.createElement(
            "div",
            (0, o.Z)(
              {
                ref: (0, s.Z)([k, S]),
                style: {
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  ...l,
                },
              },
              _
            ),
            i.createElement(
              "canvas",
              { ref: (0, s.Z)([I, E]), style: { display: "block" } },
              t
            )
          )
        );
      });
    },
    1052: function (e) {
      "use strict";
      e.exports = function (e, t) {
        if (null === e || "undefined" === typeof e)
          throw new TypeError("expected first argument to be an object.");
        if ("undefined" === typeof t || "undefined" === typeof Symbol) return e;
        if ("function" !== typeof Object.getOwnPropertySymbols) return e;
        for (
          var n = Object.prototype.propertyIsEnumerable,
            r = Object(e),
            o = arguments.length,
            i = 0;
          ++i < o;

        )
          for (
            var a = Object(arguments[i]),
              s = Object.getOwnPropertySymbols(a),
              l = 0;
            l < s.length;
            l++
          ) {
            var c = s[l];
            n.call(a, c) && (r[c] = a[c]);
          }
        return r;
      };
    },
    58363: function (e, t) {
      "use strict";
      t.Z = function (e, t) {
        if (e && t) {
          var n = Array.isArray(t) ? t : t.split(","),
            r = e.name || "",
            o = (e.type || "").toLowerCase(),
            i = o.replace(/\/.*$/, "");
          return n.some(function (e) {
            var t = e.trim().toLowerCase();
            return "." === t.charAt(0)
              ? r.toLowerCase().endsWith(t)
              : t.endsWith("/*")
              ? i === t.replace(/\/.*$/, "")
              : o === t;
          });
        }
        return !0;
      };
    },
    20296: function (e) {
      function t(e, t, n) {
        var r, o, i, a, s;
        function l() {
          var c = Date.now() - a;
          c < t && c >= 0
            ? (r = setTimeout(l, t - c))
            : ((r = null), n || ((s = e.apply(i, o)), (i = o = null)));
        }
        null == t && (t = 100);
        var c = function () {
          (i = this), (o = arguments), (a = Date.now());
          var c = n && !r;
          return (
            r || (r = setTimeout(l, t)),
            c && ((s = e.apply(i, o)), (i = o = null)),
            s
          );
        };
        return (
          (c.clear = function () {
            r && (clearTimeout(r), (r = null));
          }),
          (c.flush = function () {
            r &&
              ((s = e.apply(i, o)),
              (i = o = null),
              clearTimeout(r),
              (r = null));
          }),
          c
        );
      }
      (t.debounce = t), (e.exports = t);
    },
    36919: function (e, t, n) {
      "use strict";
      var r = n(86104);
      function o(e, t) {
        for (var n in t) i(t, n) && (e[n] = t[n]);
      }
      function i(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      e.exports = function (e) {
        r(e) || (e = {});
        for (var t = arguments.length, n = 1; n < t; n++) {
          var i = arguments[n];
          r(i) && o(e, i);
        }
        return e;
      };
    },
    86104: function (e) {
      "use strict";
      e.exports = function (e) {
        return (
          "undefined" !== typeof e &&
          null !== e &&
          ("object" === typeof e || "function" === typeof e)
        );
      };
    },
    52561: function (e) {
      "use strict";
      e.exports = function (e, t, n) {
        for (var r in e) if (!1 === t.call(n, e[r], r, e)) break;
      };
    },
    43200: function (e) {
      function t(e) {
        return e ? (Array.isArray(e) ? e.join(".") : e) : "";
      }
      e.exports = function (e, n, r, o, i) {
        if (
          null === (a = e) ||
          ("object" !== typeof a && "function" !== typeof a) ||
          !n
        )
          return e;
        var a;
        if (
          ((n = t(n)),
          r && (n += "." + t(r)),
          o && (n += "." + t(o)),
          i && (n += "." + t(i)),
          n in e)
        )
          return e[n];
        for (var s = n.split("."), l = s.length, c = -1; e && ++c < l; ) {
          for (var u = s[c]; "\\" === u[u.length - 1]; )
            u = u.slice(0, -1) + "." + s[++c];
          e = e[u];
        }
        return e;
      };
    },
    39640: function (e) {
      e.exports = {
        "<<=": !0,
        ">>=": !0,
        "++": !0,
        "--": !0,
        "+=": !0,
        "-=": !0,
        "*=": !0,
        "/=": !0,
        "%=": !0,
        "&=": !0,
        "^=": !0,
        "|=": !0,
        "=": !0,
      };
    },
    1917: function (e) {
      e.exports = {
        precision: !0,
        highp: !0,
        mediump: !0,
        lowp: !0,
        attribute: !0,
        const: !0,
        uniform: !0,
        varying: !0,
        break: !0,
        continue: !0,
        do: !0,
        for: !0,
        while: !0,
        if: !0,
        else: !0,
        in: !0,
        out: !0,
        inout: !0,
        true: !0,
        false: !0,
        return: !0,
      };
    },
    22284: function (e, t, n) {
      var r = n(39640),
        o = n(1917);
      e.exports = function (e) {
        for (var t = 0, n = 0; n < e.length; n++) {
          var i = (l = e[n]).type;
          (l.assignment = !1),
            (l.declaration = !1),
            ("ident" !== i && "builtin" !== i) ||
              ((t = n + 1),
              c(1),
              "operator" === e[t].type && r[e[t].data] && (l.assignment = !0));
        }
        for (n = 0; n < e.length; n++) {
          var a = e[n],
            s = ((i = a.type), a.data);
          if (((a.declaration = !1), "keyword" === i)) {
            if (o[s]) continue;
          } else if ("ident" !== i) continue;
          if (((t = n + 1), u(), "ident" === e[t].type))
            if (((e[t++].declaration = !0), u(), "(" !== e[t].data)) {
              for (; e[t] && ";" !== e[t].data; )
                "," === e[t].data
                  ? (t++,
                    c(1),
                    (e[t].declaration = "ident" === e[t].type) && t++)
                  : (c(1), f(), c(1), t++);
              n = t;
            } else {
              for (
                t++, c(1);
                e[t] &&
                ")" !== e[t].data &&
                ("keyword" === e[t].type || "ident" === e[t].type);

              )
                t++,
                  c(1),
                  "ident" === e[t].type &&
                    ((e[t++].declaration = !0),
                    c(1),
                    u(),
                    c(1),
                    "," === e[t].data && (t++, c(1)));
              n = t;
            }
        }
        for (n = 0; n < e.length; n++) {
          var l;
          if (
            "keyword" === (l = e[n]).type &&
            "struct" === l.data &&
            ((t = n + 1),
            c(1),
            "ident" === e[t].type && (t++, c(1), "{" === e[t++].data))
          ) {
            for (c(1); "ident" === e[t].type || "keyword" === e[t].type; ) {
              do {
                t++,
                  c(1),
                  (e[t].structMember = !0),
                  (e[t].declaration = !1),
                  t++,
                  u();
              } while ("," === e[t].data);
              ";" === e[t].data && t++, c();
            }
            if ((t++, c(1), "ident" === e[t].type))
              for (e[t].declaration = !0, c(1); "," === e[++t].data; )
                c(1),
                  t++,
                  c(1),
                  "ident" === e[t].type && (e[t].declaration = !0),
                  c(1);
          }
        }
        return e;
        function c(n) {
          for (; e[t] && "whitespace" === e[t].type; ) t++;
        }
        function u() {
          for (
            ;
            e[t] &&
            ("integer" === e[t].type ||
              "[" === e[t].data ||
              "]" === e[t].data ||
              "whitespace" === e[t].type);

          )
            t++;
        }
        function f() {
          if (e[t] && "(" === e[t].data) {
            var n = 0;
            do {
              if (";" === e[t].data) break;
              "(" === e[t].data && n++, ")" === e[t].data && n--;
            } while (n && e[++t]);
          }
        }
      };
    },
    28549: function (e) {
      e.exports = function (e) {
        for (var t = !1, n = 0, r = 0; r < e.length; r++)
          switch (
            ((t = t || ("keyword" === e[r].type && "for" === e[r].data)),
            e[r].data)
          ) {
            case "(":
              e[r].depth = t ? n++ : n;
              break;
            case "{":
              (e[r].depth = t ? n : n++), (t = !1);
              break;
            case "}":
              e[r].depth = --n;
              break;
            default:
              e[r].depth = n;
          }
        for (r = 0; r < e.length; r++) {
          var o = e[r],
            i = r + 1;
          if (
            ("ident" === o.type || "keyword" === o.type) &&
            (a(), "ident" === e[i].type && (a(), i++, "(" === e[i].data))
          ) {
            for (; e[i] && ";" !== e[i].data && "{" !== e[i].data; )
              e[i++].depth++;
            e[i] && "{" === e[i].data && e[i].depth++;
          }
        }
        return e;
        function a() {
          for (
            ;
            e[i] &&
            ("whitespace" === e[i].type ||
              "[" === e[i].data ||
              "]" === e[i].data ||
              "integer" === e[i].data);

          )
            i++;
        }
      };
    },
    61598: function (e, t, n) {
      e.exports = function (e, t) {
        n(28549)(e), n(9527)(e), n(12826)(e), n(22284)(e);
        for (
          var r = (function (e) {
              for (var t = {}, n = 0; n < e.length; n++) {
                var r = e[n];
                r.declaration &&
                  ((t[r.scope] = t[r.scope] || {}), (t[r.scope][r.data] = r));
              }
              return t;
            })(e),
            o =
              t ||
              (function () {
                var e = 0;
                return function (t) {
                  return t + "_" + (e++).toString(36);
                };
              })(),
            i = {},
            a = 0;
          a < e.length;
          a++
        ) {
          var s = e[a],
            l = s.stack,
            c = s.data;
          if (
            ((s.descoped = !1),
            "ident" === s.type && !s.property && !s.structMember)
          ) {
            for (var u = !1, f = l.length - 1; f >= 0; f--) {
              var d = r[l[f]];
              if (d && d[c]) {
                if (((u = !0), f)) break;
                (s.descoped = s.data),
                  (s.data = i[c] = i[c] || o(c, s) || s.data);
              }
            }
            u ||
              ((s.descoped = s.data),
              (s.data = i[c] = i[c] || o(c, s) || s.data));
          }
        }
        return e;
      };
    },
    21386: function (e) {
      function t(e) {
        return function (t) {
          return "operator" === t.type && (!e || t.data === e);
        };
      }
      function n(e) {
        return "whitespace" !== e.type;
      }
      e.exports = function (e) {
        var r,
          o,
          i,
          a = null,
          s = null,
          l = 0,
          c = 0,
          u = 0,
          f = 0,
          d = 0,
          p = [];
        for (r = 0; r < e.length; r++)
          if ("{" === (i = e[r]).data) {
            if (l && l++) continue;
            if ((o = m(r, t(")"), t())) < 0) continue;
            if (((f = o), (o = m(o, t("("), t(")"))) < 0)) continue;
            if (((d = o), (o = m(o, n)) < 0)) continue;
            if ("ident" !== e[o].type) continue;
            if (((s = e[o].data), (o = m(o, n)) < 0)) continue;
            (l = 1), (c = r), (a = e[o].data), (u = o);
            var h = m(o, n);
            switch (e[h] && e[h].data) {
              case "lowp":
              case "highp":
              case "mediump":
                u = h;
            }
          } else if (l && "}" === i.data) {
            if (--l) continue;
            p.push({
              name: s,
              type: a,
              body: [c + 1, r],
              args: [d, f + 1],
              outer: [u, r + 1],
            });
          }
        for (r = 0; r < e.length; r++)
          if (";" === (i = e[r]).data) {
            if ((o = m(r, t(")"), t())) < 0) continue;
            if (((f = o), (o = m(o, t("("), t(")"))) < 0)) continue;
            if (((d = o), (o = m(o, n)) < 0)) continue;
            if ("ident" !== e[o].type) continue;
            if (((s = e[o].data), (o = m(o, n)) < 0)) continue;
            if ("operator" === e[o].type) continue;
            if ("return" === e[o].data) continue;
            (a = e[o].data),
              p.push({
                name: s,
                type: a,
                body: !1,
                args: [d, f + 1],
                outer: [o, r + 1],
              });
          }
        return p.sort(function (e, t) {
          return e.outer[0] - t.outer[0];
        });
        function m(t, n, r) {
          for (var o = t - 1; o >= 0; o--) {
            if (n(e[o])) return o;
            if (r && r(e[o])) return -1;
          }
          return -1;
        }
      };
    },
    12826: function (e) {
      e.exports = function (e) {
        for (var t = 0; t < e.length; t++) {
          var n = e[t];
          if (((n.property = !1), "ident" === n.type)) {
            for (var r = t; e[--r] && "whitespace" === e[r].type; );
            e[r] &&
              "operator" === e[r].type &&
              "." === e[r].data &&
              (n.property = !0);
          }
        }
        return e;
      };
    },
    9527: function (e) {
      e.exports = function (e) {
        var t = [0],
          n = t[0],
          r = 0;
        if (!e || !e.length) return e;
        if (!("depth" in e[0]))
          throw new Error(
            "glsl-token-scope: No scope depth defined on tokens! Use glsl-token-depth on these tokens first"
          );
        for (var o = 0; o < e.length; o++) {
          var i = e[o],
            a = i.depth;
          a > r ? t.push(++n) : a < r && t.splice(-1, 1),
            (i.scope = t[t.length - 1]),
            (i.stack = t.slice()),
            (r = i.depth);
        }
        return e;
      };
    },
    51818: function (e) {
      e.exports = function (e) {
        for (var t = [], n = 0; n < e.length; n++)
          "eof" !== e[n].type && t.push(e[n].data);
        return t.join("");
      };
    },
    8460: function (e, t, n) {
      e.exports = function (e) {
        var t,
          n,
          f,
          d = 0,
          p = 0,
          h = l,
          m = [],
          g = [],
          v = 1,
          y = 0,
          b = 0,
          A = !1,
          B = !1,
          C = "",
          x = i,
          w = r;
        "300 es" === (e = e || {}).version && ((x = s), (w = a));
        var _ = {},
          E = {};
        for (d = 0; d < x.length; d++) _[x[d]] = !0;
        for (d = 0; d < w.length; d++) E[w[d]] = !0;
        return function (e) {
          return (
            (g = []),
            null !== e
              ? (function (e) {
                  (d = 0), e.toString && (e = e.toString());
                  var n;
                  (C += e.replace(/\r\n/g, "\n")), (f = C.length);
                  for (; (t = C[d]), d < f; ) {
                    switch (((n = d), h)) {
                      case 0:
                        d = T();
                        break;
                      case 1:
                        d = k();
                        break;
                      case 2:
                        d = I();
                        break;
                      case 3:
                        d = P();
                        break;
                      case 4:
                        d = O();
                        break;
                      case 11:
                        d = D();
                        break;
                      case 5:
                        d = L();
                        break;
                      case c:
                        d = G();
                        break;
                      case 9:
                        d = R();
                        break;
                      case l:
                        d = M();
                    }
                    if (n !== d)
                      switch (C[n]) {
                        case "\n":
                          (y = 0), ++v;
                          break;
                        default:
                          ++y;
                      }
                  }
                  return (p += d), (C = C.slice(d)), g;
                })(e)
              : (function (e) {
                  m.length && S(m.join(""));
                  return (h = 10), S("(eof)"), g;
                })()
          );
        };
        function S(e) {
          e.length &&
            g.push({ type: u[h], data: e, position: b, line: v, column: y });
        }
        function M() {
          return (
            (m = m.length ? [] : m),
            "/" === n && "*" === t
              ? ((b = p + d - 1), (h = 0), (n = t), d + 1)
              : "/" === n && "/" === t
              ? ((b = p + d - 1), (h = 1), (n = t), d + 1)
              : "#" === t
              ? ((h = 2), (b = p + d), d)
              : /\s/.test(t)
              ? ((h = 9), (b = p + d), d)
              : ((A = /\d/.test(t)),
                (B = /[^\w_]/.test(t)),
                (b = p + d),
                (h = A ? 4 : B ? 3 : c),
                d)
          );
        }
        function R() {
          return /[^\s]/g.test(t)
            ? (S(m.join("")), (h = l), d)
            : (m.push(t), (n = t), d + 1);
        }
        function I() {
          return ("\r" !== t && "\n" !== t) || "\\" === n
            ? (m.push(t), (n = t), d + 1)
            : (S(m.join("")), (h = l), d);
        }
        function k() {
          return I();
        }
        function T() {
          return "/" === t && "*" === n
            ? (m.push(t), S(m.join("")), (h = l), d + 1)
            : (m.push(t), (n = t), d + 1);
        }
        function P() {
          if ("." === n && /\d/.test(t)) return (h = 5), d;
          if ("/" === n && "*" === t) return (h = 0), d;
          if ("/" === n && "/" === t) return (h = 1), d;
          if ("." === t && m.length) {
            for (; F(m); );
            return (h = 5), d;
          }
          if (";" === t || ")" === t || "(" === t) {
            if (m.length) for (; F(m); );
            return S(t), (h = l), d + 1;
          }
          var e = 2 === m.length && "=" !== t;
          if (/[\w_\d\s]/.test(t) || e) {
            for (; F(m); );
            return (h = l), d;
          }
          return m.push(t), (n = t), d + 1;
        }
        function F(e) {
          for (var t, n, r = 0; ; ) {
            if (
              ((t = o.indexOf(e.slice(0, e.length + r).join(""))),
              (n = o[t]),
              -1 === t)
            ) {
              if (r-- + e.length > 0) continue;
              n = e.slice(0, 1).join("");
            }
            return S(n), (b += n.length), (m = m.slice(n.length)).length;
          }
        }
        function D() {
          return /[^a-fA-F0-9]/.test(t)
            ? (S(m.join("")), (h = l), d)
            : (m.push(t), (n = t), d + 1);
        }
        function O() {
          return "." === t || /[eE]/.test(t)
            ? (m.push(t), (h = 5), (n = t), d + 1)
            : "x" === t && 1 === m.length && "0" === m[0]
            ? ((h = 11), m.push(t), (n = t), d + 1)
            : /[^\d]/.test(t)
            ? (S(m.join("")), (h = l), d)
            : (m.push(t), (n = t), d + 1);
        }
        function L() {
          return (
            "f" === t && (m.push(t), (n = t), (d += 1)),
            /[eE]/.test(t)
              ? (m.push(t), (n = t), d + 1)
              : (("-" !== t && "+" !== t) || !/[eE]/.test(n)) && /[^\d]/.test(t)
              ? (S(m.join("")), (h = l), d)
              : (m.push(t), (n = t), d + 1)
          );
        }
        function G() {
          if (/[^\d\w_]/.test(t)) {
            var e = m.join("");
            return (h = E[e] ? 8 : _[e] ? 7 : 6), S(m.join("")), (h = l), d;
          }
          return m.push(t), (n = t), d + 1;
        }
      };
      var r = n(67529),
        o = n(27679),
        i = n(2222),
        a = n(52914),
        s = n(79537),
        l = 999,
        c = 9999,
        u = [
          "block-comment",
          "line-comment",
          "preprocessor",
          "operator",
          "integer",
          "float",
          "ident",
          "builtin",
          "keyword",
          "whitespace",
          "eof",
          "integer",
        ];
    },
    79537: function (e, t, n) {
      var r = n(2222);
      (r = r.slice().filter(function (e) {
        return !/^(gl\_|texture)/.test(e);
      })),
        (e.exports = r.concat([
          "gl_VertexID",
          "gl_InstanceID",
          "gl_Position",
          "gl_PointSize",
          "gl_FragCoord",
          "gl_FrontFacing",
          "gl_FragDepth",
          "gl_PointCoord",
          "gl_MaxVertexAttribs",
          "gl_MaxVertexUniformVectors",
          "gl_MaxVertexOutputVectors",
          "gl_MaxFragmentInputVectors",
          "gl_MaxVertexTextureImageUnits",
          "gl_MaxCombinedTextureImageUnits",
          "gl_MaxTextureImageUnits",
          "gl_MaxFragmentUniformVectors",
          "gl_MaxDrawBuffers",
          "gl_MinProgramTexelOffset",
          "gl_MaxProgramTexelOffset",
          "gl_DepthRangeParameters",
          "gl_DepthRange",
          "trunc",
          "round",
          "roundEven",
          "isnan",
          "isinf",
          "floatBitsToInt",
          "floatBitsToUint",
          "intBitsToFloat",
          "uintBitsToFloat",
          "packSnorm2x16",
          "unpackSnorm2x16",
          "packUnorm2x16",
          "unpackUnorm2x16",
          "packHalf2x16",
          "unpackHalf2x16",
          "outerProduct",
          "transpose",
          "determinant",
          "inverse",
          "texture",
          "textureSize",
          "textureProj",
          "textureLod",
          "textureOffset",
          "texelFetch",
          "texelFetchOffset",
          "textureProjOffset",
          "textureLodOffset",
          "textureProjLod",
          "textureProjLodOffset",
          "textureGrad",
          "textureGradOffset",
          "textureProjGrad",
          "textureProjGradOffset",
        ]));
    },
    2222: function (e) {
      e.exports = [
        "abs",
        "acos",
        "all",
        "any",
        "asin",
        "atan",
        "ceil",
        "clamp",
        "cos",
        "cross",
        "dFdx",
        "dFdy",
        "degrees",
        "distance",
        "dot",
        "equal",
        "exp",
        "exp2",
        "faceforward",
        "floor",
        "fract",
        "gl_BackColor",
        "gl_BackLightModelProduct",
        "gl_BackLightProduct",
        "gl_BackMaterial",
        "gl_BackSecondaryColor",
        "gl_ClipPlane",
        "gl_ClipVertex",
        "gl_Color",
        "gl_DepthRange",
        "gl_DepthRangeParameters",
        "gl_EyePlaneQ",
        "gl_EyePlaneR",
        "gl_EyePlaneS",
        "gl_EyePlaneT",
        "gl_Fog",
        "gl_FogCoord",
        "gl_FogFragCoord",
        "gl_FogParameters",
        "gl_FragColor",
        "gl_FragCoord",
        "gl_FragData",
        "gl_FragDepth",
        "gl_FragDepthEXT",
        "gl_FrontColor",
        "gl_FrontFacing",
        "gl_FrontLightModelProduct",
        "gl_FrontLightProduct",
        "gl_FrontMaterial",
        "gl_FrontSecondaryColor",
        "gl_LightModel",
        "gl_LightModelParameters",
        "gl_LightModelProducts",
        "gl_LightProducts",
        "gl_LightSource",
        "gl_LightSourceParameters",
        "gl_MaterialParameters",
        "gl_MaxClipPlanes",
        "gl_MaxCombinedTextureImageUnits",
        "gl_MaxDrawBuffers",
        "gl_MaxFragmentUniformComponents",
        "gl_MaxLights",
        "gl_MaxTextureCoords",
        "gl_MaxTextureImageUnits",
        "gl_MaxTextureUnits",
        "gl_MaxVaryingFloats",
        "gl_MaxVertexAttribs",
        "gl_MaxVertexTextureImageUnits",
        "gl_MaxVertexUniformComponents",
        "gl_ModelViewMatrix",
        "gl_ModelViewMatrixInverse",
        "gl_ModelViewMatrixInverseTranspose",
        "gl_ModelViewMatrixTranspose",
        "gl_ModelViewProjectionMatrix",
        "gl_ModelViewProjectionMatrixInverse",
        "gl_ModelViewProjectionMatrixInverseTranspose",
        "gl_ModelViewProjectionMatrixTranspose",
        "gl_MultiTexCoord0",
        "gl_MultiTexCoord1",
        "gl_MultiTexCoord2",
        "gl_MultiTexCoord3",
        "gl_MultiTexCoord4",
        "gl_MultiTexCoord5",
        "gl_MultiTexCoord6",
        "gl_MultiTexCoord7",
        "gl_Normal",
        "gl_NormalMatrix",
        "gl_NormalScale",
        "gl_ObjectPlaneQ",
        "gl_ObjectPlaneR",
        "gl_ObjectPlaneS",
        "gl_ObjectPlaneT",
        "gl_Point",
        "gl_PointCoord",
        "gl_PointParameters",
        "gl_PointSize",
        "gl_Position",
        "gl_ProjectionMatrix",
        "gl_ProjectionMatrixInverse",
        "gl_ProjectionMatrixInverseTranspose",
        "gl_ProjectionMatrixTranspose",
        "gl_SecondaryColor",
        "gl_TexCoord",
        "gl_TextureEnvColor",
        "gl_TextureMatrix",
        "gl_TextureMatrixInverse",
        "gl_TextureMatrixInverseTranspose",
        "gl_TextureMatrixTranspose",
        "gl_Vertex",
        "greaterThan",
        "greaterThanEqual",
        "inversesqrt",
        "length",
        "lessThan",
        "lessThanEqual",
        "log",
        "log2",
        "matrixCompMult",
        "max",
        "min",
        "mix",
        "mod",
        "normalize",
        "not",
        "notEqual",
        "pow",
        "radians",
        "reflect",
        "refract",
        "sign",
        "sin",
        "smoothstep",
        "sqrt",
        "step",
        "tan",
        "texture2D",
        "texture2DLod",
        "texture2DProj",
        "texture2DProjLod",
        "textureCube",
        "textureCubeLod",
        "texture2DLodEXT",
        "texture2DProjLodEXT",
        "textureCubeLodEXT",
        "texture2DGradEXT",
        "texture2DProjGradEXT",
        "textureCubeGradEXT",
      ];
    },
    52914: function (e, t, n) {
      var r = n(67529);
      e.exports = r
        .slice()
        .concat([
          "layout",
          "centroid",
          "smooth",
          "case",
          "mat2x2",
          "mat2x3",
          "mat2x4",
          "mat3x2",
          "mat3x3",
          "mat3x4",
          "mat4x2",
          "mat4x3",
          "mat4x4",
          "uvec2",
          "uvec3",
          "uvec4",
          "samplerCubeShadow",
          "sampler2DArray",
          "sampler2DArrayShadow",
          "isampler2D",
          "isampler3D",
          "isamplerCube",
          "isampler2DArray",
          "usampler2D",
          "usampler3D",
          "usamplerCube",
          "usampler2DArray",
          "coherent",
          "restrict",
          "readonly",
          "writeonly",
          "resource",
          "atomic_uint",
          "noperspective",
          "patch",
          "sample",
          "subroutine",
          "common",
          "partition",
          "active",
          "filter",
          "image1D",
          "image2D",
          "image3D",
          "imageCube",
          "iimage1D",
          "iimage2D",
          "iimage3D",
          "iimageCube",
          "uimage1D",
          "uimage2D",
          "uimage3D",
          "uimageCube",
          "image1DArray",
          "image2DArray",
          "iimage1DArray",
          "iimage2DArray",
          "uimage1DArray",
          "uimage2DArray",
          "image1DShadow",
          "image2DShadow",
          "image1DArrayShadow",
          "image2DArrayShadow",
          "imageBuffer",
          "iimageBuffer",
          "uimageBuffer",
          "sampler1DArray",
          "sampler1DArrayShadow",
          "isampler1D",
          "isampler1DArray",
          "usampler1D",
          "usampler1DArray",
          "isampler2DRect",
          "usampler2DRect",
          "samplerBuffer",
          "isamplerBuffer",
          "usamplerBuffer",
          "sampler2DMS",
          "isampler2DMS",
          "usampler2DMS",
          "sampler2DMSArray",
          "isampler2DMSArray",
          "usampler2DMSArray",
        ]);
    },
    67529: function (e) {
      e.exports = [
        "precision",
        "highp",
        "mediump",
        "lowp",
        "attribute",
        "const",
        "uniform",
        "varying",
        "break",
        "continue",
        "do",
        "for",
        "while",
        "if",
        "else",
        "in",
        "out",
        "inout",
        "float",
        "int",
        "uint",
        "void",
        "bool",
        "true",
        "false",
        "discard",
        "return",
        "mat2",
        "mat3",
        "mat4",
        "vec2",
        "vec3",
        "vec4",
        "ivec2",
        "ivec3",
        "ivec4",
        "bvec2",
        "bvec3",
        "bvec4",
        "sampler1D",
        "sampler2D",
        "sampler3D",
        "samplerCube",
        "sampler1DShadow",
        "sampler2DShadow",
        "struct",
        "asm",
        "class",
        "union",
        "enum",
        "typedef",
        "template",
        "this",
        "packed",
        "goto",
        "switch",
        "default",
        "inline",
        "noinline",
        "volatile",
        "public",
        "static",
        "extern",
        "external",
        "interface",
        "long",
        "short",
        "double",
        "half",
        "fixed",
        "unsigned",
        "input",
        "output",
        "hvec2",
        "hvec3",
        "hvec4",
        "dvec2",
        "dvec3",
        "dvec4",
        "fvec2",
        "fvec3",
        "fvec4",
        "sampler2DRect",
        "sampler3DRect",
        "sampler2DRectShadow",
        "sizeof",
        "cast",
        "namespace",
        "using",
      ];
    },
    27679: function (e) {
      e.exports = [
        "<<=",
        ">>=",
        "++",
        "--",
        "<<",
        ">>",
        "<=",
        ">=",
        "==",
        "!=",
        "&&",
        "||",
        "+=",
        "-=",
        "*=",
        "/=",
        "%=",
        "&=",
        "^^",
        "^=",
        "|=",
        "(",
        ")",
        "[",
        "]",
        ".",
        "!",
        "~",
        "*",
        "/",
        "%",
        "+",
        "-",
        "<",
        ">",
        "&",
        "^",
        "|",
        "?",
        ":",
        "=",
        ",",
        ";",
        "{",
        "}",
      ];
    },
    39932: function (e, t, n) {
      var r = n(8460);
      e.exports = function (e, t) {
        var n = r(t),
          o = [];
        return (o = (o = o.concat(n(e))).concat(n(null)));
      };
    },
    51833: function (e, t, n) {
      "use strict";
      var r = n(55299);
      e.exports = function (e) {
        return r(e) || "function" === typeof e || Array.isArray(e);
      };
    },
    55299: function (e, t, n) {
      "use strict";
      var r = n(47798);
      function o(e) {
        return (
          !0 === r(e) && "[object Object]" === Object.prototype.toString.call(e)
        );
      }
      e.exports = function (e) {
        var t, n;
        return (
          !1 !== o(e) &&
          "function" === typeof (t = e.constructor) &&
          !1 !== o((n = t.prototype)) &&
          !1 !== n.hasOwnProperty("isPrototypeOf")
        );
      };
    },
    47798: function (e) {
      "use strict";
      e.exports = function (e) {
        return null != e && "object" === typeof e && !1 === Array.isArray(e);
      };
    },
    71874: function (e, t, n) {
      "use strict";
      n.d(t, {
        HE: function () {
          return X;
        },
        ud: function () {
          return V;
        },
      });
      var r = n(87462),
        o = n(88279),
        i = n(67294),
        a = n(35878),
        s = n(99477),
        l = n(39932),
        c = n.n(l),
        u = n(61598),
        f = n.n(u),
        d = n(51818),
        p = n.n(d),
        h = n(21386),
        m = n.n(h),
        g = n(35714),
        v = n.n(g),
        y = "csm_Position",
        b = "csm_Emissive",
        A = "csm_Normal",
        B = "csm_PointSize",
        C = "csm_DiffuseColor",
        x = "csm_FragColor";
      const w = {
          [`${A}`]: {
            "#include <beginnormal_vertex>": `\n    vec3 objectNormal = ${A};\n    #ifdef USE_TANGENT\n\t    vec3 objectTangent = vec3( tangent.xyz );\n    #endif\n    `,
          },
          [`${y}`]: {
            "#include <begin_vertex>": `\n    vec3 transformed = ${y};\n  `,
          },
          [`${B}`]: {
            "gl_PointSize = size;": `\n    gl_PointSize = ${B};\n    `,
          },
        },
        _ = {
          [`${C}`]: {
            "#include <color_fragment>": `\n    #include <color_fragment>\n    diffuseColor = ${C};\n  `,
          },
          [`${x}`]: {
            "#include <output_fragment>": `\n    #include <output_fragment>\n    gl_FragColor  = ${x};\n  `,
          },
          [`${b}`]: {
            "vec3 totalEmissiveRadiance = emissive;": `\n    vec3 totalEmissiveRadiance = ${b};\n    `,
          },
        };
      class E extends s.Material {
        constructor({
          baseMaterial: e,
          fragmentShader: t,
          vertexShader: n,
          uniforms: r,
          cacheKey: o,
          ...i
        }) {
          const a = new e(i);
          super(), (this.uniforms = r || {});
          for (const s in a) {
            let e = s;
            s.startsWith("_") && (e = s.split("_")[1]),
              void 0 === this[e] && (this[e] = 0),
              (this[e] = a[e]);
          }
          this.update({
            fragmentShader: t,
            vertexShader: n,
            uniforms: r,
            cacheKey: o,
          });
        }
        update({
          fragmentShader: e,
          vertexShader: t,
          uniforms: n,
          cacheKey: r,
        }) {
          const o = Object.values(n || {}).forEach(({ value: e }) =>
            JSON.stringify(e)
          );
          (this.uuid = (null == r ? void 0 : r()) || v()([e, t, o])),
            this.generateMaterial({
              fragmentShader: e,
              vertexShader: t,
              uniforms: n,
            });
        }
        generateMaterial({ fragmentShader: e, vertexShader: t, uniforms: n }) {
          const r = this.parseShader(e),
            o = this.parseShader(t);
          (this.uniforms = n || {}),
            (this.customProgramCacheKey = () => this.uuid),
            (this.onBeforeCompile = (e) => {
              if (r) {
                const t = this.patchShader(r, e.fragmentShader, _);
                e.fragmentShader = t;
              }
              if (o) {
                const t = this.patchShader(o, e.vertexShader, w);
                e.vertexShader = "#define IS_VERTEX;\n" + t;
              }
              (e.uniforms = { ...e.uniforms, ...this.uniforms }),
                (this.uniforms = e.uniforms);
            }),
            (this.needsUpdate = !0);
        }
        patchShader(e, t, n) {
          let r = t;
          return (
            Object.keys(n).forEach((t) => {
              Object.keys(n[t]).forEach((o) => {
                var i, a, s;
                e.main.includes(t) &&
                  ((i = r), (a = o), (s = n[t][o]), (r = i.split(a).join(s)));
              });
            }),
            (r = r.replace(
              "void main() {",
              `\n          ${e.header}\n          void main() {\n            vec3 csm_Position;\n            vec3 csm_Normal;\n            vec3 csm_Emissive;\n\n            #ifdef IS_VERTEX\n              csm_Position = position;\n            #endif\n\n            #ifdef IS_VERTEX\n              csm_Normal = normal;\n            #endif\n            \n            #ifndef IS_VERTEX\n              #ifdef STANDARD\n                csm_Emissive = emissive;\n              #endif\n            #endif\n\n            vec4 csm_DiffuseColor = vec4(1., 0., 0., 1.);\n            vec4 csm_FragColor = vec4(1., 0., 0., 1.);\n            float csm_PointSize = 1.;\n\n            ${e.main}\n          `
            )),
            (r = e.defines + r),
            r
          );
        }
        parseShader(e) {
          if (!e) return;
          const t = { defines: "", header: "", main: "" },
            n = e.match(
              /^(\s*)(void\s*main\s*\(.*\)\s*).*?{[\s\S]*?^\1}\s*$/gm
            );
          if (null != n && n.length) {
            const r = n[0].match(/{[\w\W\s\S]*}/gm);
            null != r && r.length && (t.main = r[0]);
            const o = e.replace(n[0], ""),
              i = o.match(/#(.*?;)/g) || [],
              a = i.reduce((e, t) => e.replace(t, ""), o);
            (t.header = a), (t.defines = i.join("\n"));
          }
          return t;
        }
      }
      n(20745), n(25404);
      function S(e) {
        return "string" === typeof e ? new s.Color(e).convertLinearToSRGB() : e;
      }
      function M(e) {
        switch (e) {
          case "alpha":
            return { min: 0, max: 1 };
          case "scale":
            return { min: 0 };
          case "map":
            return { image: void 0 };
          default:
            return {};
        }
      }
      function R({ color: e, alpha: t, lighting: n, name: r, ...o } = {}) {
        return [{ color: e, alpha: t, lighting: n, name: r }, o];
      }
      function I(e) {
        return (
          e instanceof s.Vector3 ||
          e instanceof s.Vector2 ||
          e instanceof s.Vector4 ||
          e instanceof s.Matrix3 ||
          e instanceof s.Matrix4
        );
      }
      function k(e) {
        return I(e)
          ? e.toArray()
          : e instanceof s.Color
          ? "#" + e.clone().convertLinearToSRGB().getHexString()
          : e instanceof s.Texture
          ? e.image.src
          : e;
      }
      const T = {
          normal: "normal",
          add: "add",
          subtract: "subtract",
          multiply: "multiply",
          lighten: "lighten",
          darken: "darken",
          divide: "divide",
          overlay: "overlay",
          screen: "screen",
          softlight: "softlight",
          negation: "negation",
          reflect: "reflect",
        },
        P = {
          perlin: "perlin",
          simplex: "simplex",
          cell: "cell",
          curl: "curl",
          white: "white",
        },
        F = { local: "local", world: "world", uv: "uv" },
        D = {
          phong: s.MeshPhongMaterial,
          physical: s.MeshPhysicalMaterial,
          toon: s.MeshToonMaterial,
          basic: s.MeshBasicMaterial,
          lambert: s.MeshLambertMaterial,
          standard: s.MeshStandardMaterial,
        };
      class O {
        constructor(e, t, n) {
          (this.uuid = s.MathUtils.generateUUID().replace(/-/g, "_")),
            (this.name = "LayerMaterial"),
            (this.mode = "normal"),
            (this.visible = !0);
          const r = Object.getOwnPropertyNames(e)
            .filter((e) => e.startsWith("u_"))
            .reduce((t, n) => {
              var r;
              let o =
                null == (r = Object.getOwnPropertyDescriptor(e, n))
                  ? void 0
                  : r.value;
              return (
                (I(o) || o instanceof s.Color) && (o = o.clone()),
                { ...t, [n.slice(1)]: o }
              );
            }, {});
          for (const i in r) {
            const e = i.split("_")[1];
            void 0 !== (null == t ? void 0 : t[e]) && (r[i] = t[e]);
          }
          t &&
            Object.keys(t).map((e) => {
              void 0 !== t[e] && (this[e] = t[e]);
            }),
            (this.uniforms = {}),
            (this.schema = []);
          const o = {};
          Object.keys(r).map((e) => {
            const t = e.split("_")[1];
            (this.uniforms[`u_${this.uuid}_${t}`] = { value: S(r[e]) }),
              this.schema.push({ value: r[e], label: t }),
              (o[t] = {
                set: (e) => {
                  this.uniforms[`u_${this.uuid}_${t}`].value = S(e);
                },
                get: () => this.uniforms[`u_${this.uuid}_${t}`].value,
              });
          }),
            null != t && t.name && (this.name = t.name),
            null != t && t.mode && (this.mode = t.mode),
            null != t && t.visible && (this.visible = t.visible),
            Object.defineProperties(this, o),
            (this.vertexShader = ""),
            (this.fragmentShader = ""),
            (this.vertexVariables = ""),
            (this.fragmentVariables = ""),
            (this.onParse = n),
            this.buildShaders(e),
            this.schema.push({
              value: this.mode,
              label: "mode",
              options: Object.values(T),
            }),
            this.schema.push({ value: this.visible, label: "visible" });
        }
        buildShaders(e) {
          var t;
          const n = Object.getOwnPropertyNames(e)
              .filter((e) => "fragmentShader" === e || "vertexShader" === e)
              .reduce((t, n) => {
                var r;
                return {
                  ...t,
                  [n]:
                    null == (r = Object.getOwnPropertyDescriptor(e, n))
                      ? void 0
                      : r.value,
                };
              }, {}),
            r = {
              vert: c()(n.vertexShader || ""),
              frag: c()(n.fragmentShader || ""),
            },
            o = {
              vert: f()(r.vert, this.renameTokens.bind(this)),
              frag: f()(r.frag, this.renameTokens.bind(this)),
            },
            i = { vert: m()(o.vert), frag: m()(o.frag) },
            a = i.vert.map((e) => e.name).indexOf("main"),
            s = i.frag.map((e) => e.name).indexOf("main"),
            l = {
              vert: a >= 0 ? p()(o.vert.slice(0, i.vert[a].outer[0])) : "",
              frag: s >= 0 ? p()(o.frag.slice(0, i.frag[s].outer[0])) : "",
            },
            u = {
              vert:
                a >= 0 ? this.getShaderFromIndex(o.vert, i.vert[a].body) : "",
              frag:
                s >= 0 ? this.getShaderFromIndex(o.frag, i.frag[s].body) : "",
            };
          (this.vertexShader = this.processFinal(u.vert, !0)),
            (this.fragmentShader = this.processFinal(u.frag)),
            (this.vertexVariables = l.vert),
            (this.fragmentVariables = l.frag),
            null == (t = this.onParse) || t.call(this, this),
            (this.schema = this.schema.filter((e, t) => {
              const n = e.label;
              return t === this.schema.findIndex((e) => e.label === n);
            }));
        }
        renameTokens(e) {
          if (e.startsWith("u_")) {
            const t = e.slice(2);
            return `u_${this.uuid}_${t}`;
          }
          if (e.startsWith("v_")) {
            const t = e.slice(2);
            return `v_${this.uuid}_${t}`;
          }
          if (e.startsWith("f_")) {
            const t = e.slice(2);
            return `f_${this.uuid}_${t}`;
          }
          return e;
        }
        processFinal(e, t) {
          const n = e
              .replace(/\sf_/gm, ` f_${this.uuid}_`)
              .replace(/\(f_/gm, `(f_${this.uuid}_`),
            r = n.match(/^.*return.*$/gm);
          let o = n.replace(/^.*return.*$/gm, "");
          if (null != r && r[0]) {
            const e = r[0].replace("return", "").trim().replace(";", ""),
              n = this.getBlendMode(e, "lamina_finalColor");
            o += t
              ? `lamina_finalPosition = ${e};`
              : `lamina_finalColor = ${n};`;
          }
          return o;
        }
        getShaderFromIndex(e, t) {
          return p()(e.slice(t[0], t[1]));
        }
        getBlendMode(e, t) {
          switch (this.mode) {
            default:
            case "normal":
              return `lamina_blend_alpha(${t}, ${e}, ${e}.a)`;
            case "add":
              return `lamina_blend_add(${t}, ${e}, ${e}.a)`;
            case "subtract":
              return `lamina_blend_subtract(${t}, ${e}, ${e}.a)`;
            case "multiply":
              return `lamina_blend_multiply(${t}, ${e}, ${e}.a)`;
            case "lighten":
              return `lamina_blend_lighten(${t}, ${e}, ${e}.a)`;
            case "darken":
              return `lamina_blend_darken(${t}, ${e}, ${e}.a)`;
            case "divide":
              return `lamina_blend_divide(${t}, ${e}, ${e}.a)`;
            case "overlay":
              return `lamina_blend_overlay(${t}, ${e}, ${e}.a)`;
            case "screen":
              return `lamina_blend_screen(${t}, ${e}, ${e}.a)`;
            case "softlight":
              return `lamina_blend_softlight(${t}, ${e}, ${e}.a)`;
            case "reflect":
              return `lamina_blend_reflect(${t}, ${e}, ${e}.a)`;
            case "negation":
              return `lamina_blend_negation(${t}, ${e}, ${e}.a)`;
          }
        }
        getSchema() {
          return this.schema.map(({ label: e, options: t, ...n }) => ({
            label: e,
            options: t,
            ...M(e),
            ...n,
            value: k(this[e]),
          }));
        }
        serialize() {
          const e = this.constructor.name.split("$")[0];
          let t = Object.keys(this);
          t = t.filter(
            (e) =>
              ![
                "uuid",
                "uniforms",
                "schema",
                "fragmentShader",
                "vertexShader",
                "fragmentVariables",
                "vertexVariables",
                "attribs",
                "events",
                "__r3f",
                "onParse",
              ].includes(e)
          );
          const n = {};
          t.forEach((e) => {
            n[e] = this[e];
          });
          const r = {};
          for (const o in this.uniforms) {
            r[o.replace(`u_${this.uuid}_`, "")] = k(this.uniforms[o].value);
          }
          return { constructor: e, properties: { ...r, ...n } };
        }
      }
      class L extends O {
        constructor(e) {
          super(L, { name: "Depth", ...e }, (e) => {
            e.schema.push({
              value: e.mapping,
              label: "mapping",
              options: ["vector", "world", "camera"],
            });
            const t = L.getMapping(e.uuid, e.mapping);
            e.fragmentShader = e.fragmentShader.replace(
              "lamina_mapping_template",
              t
            );
          }),
            (this.mapping = "vector");
        }
        static getMapping(e, t) {
          switch (t) {
            default:
            case "vector":
              return `length(v_${e}_worldPosition - u_${e}_origin)`;
            case "world":
              return `length(v_${e}_position - vec3(0.))`;
            case "camera":
              return `length(v_${e}_worldPosition - cameraPosition)`;
          }
        }
      }
      (L.u_near = 2),
        (L.u_far = 10),
        (L.u_origin = new s.Vector3(0, 0, 0)),
        (L.u_colorA = "white"),
        (L.u_colorB = "black"),
        (L.u_alpha = 1),
        (L.vertexShader =
          "\n  varying vec3 v_worldPosition;\n  varying vec3 v_position;\n\n  void main() {\n    v_worldPosition = (vec4(position, 1.0) * modelMatrix).xyz;\n    v_position = position;\n  }\n  "),
        (L.fragmentShader =
          "   \n    uniform float u_alpha;\n    uniform float u_near;\n    uniform float u_far;\n    uniform float u_isVector;\n    uniform vec3 u_origin;\n    uniform vec3 u_colorA;\n    uniform vec3 u_colorB;\n\n    varying vec3 v_worldPosition;\n    varying vec3 v_position;\n\n    void main() {\n      float f_dist = lamina_mapping_template;\n      float f_depth = (f_dist - u_near) / (u_far - u_near);\n\t\t\tvec3 f_depthColor =  mix(u_colorB, u_colorA, 1.0 - clamp(f_depth, 0., 1.));\n  \n  \n      return vec4(f_depthColor, u_alpha);\n    }\n  ");
      class G extends O {
        constructor(e) {
          super(G, { name: "Color", ...e });
        }
      }
      (G.u_color = "red"),
        (G.u_alpha = 1),
        (G.fragmentShader =
          "   \n    uniform vec3 u_color;\n    uniform float u_alpha;\n\n    void main() {\n      return vec4(u_color, u_alpha);\n    }\n  ");
      class H extends O {
        constructor(e) {
          super(H, { name: "noise", ...e }, (e) => {
            e.schema.push({
              value: e.type,
              label: "type",
              options: Object.values(P),
            }),
              e.schema.push({
                value: e.mapping,
                label: "mapping",
                options: Object.values(F),
              });
            const t = H.getNoiseFunction(e.type),
              n = H.getMapping(e.mapping);
            (e.vertexShader = e.vertexShader.replace(
              "lamina_mapping_template",
              n
            )),
              (e.fragmentShader = e.fragmentShader.replace(
                "lamina_noise_template",
                t
              ));
          }),
            (this.type = "perlin"),
            (this.mapping = "local");
        }
        static getNoiseFunction(e) {
          switch (e) {
            default:
            case "perlin":
              return "lamina_noise_perlin";
            case "simplex":
              return "lamina_noise_simplex";
            case "cell":
              return "lamina_noise_worley";
            case "white":
              return "lamina_noise_white";
            case "curl":
              return "lamina_noise_swirl";
          }
        }
        static getMapping(e) {
          switch (e) {
            default:
            case "local":
              return "position";
            case "world":
              return "(modelMatrix * vec4(position,1.0)).xyz";
            case "uv":
              return "vec3(uv, 0.)";
          }
        }
      }
      (H.u_colorA = "#666666"),
        (H.u_colorB = "#666666"),
        (H.u_colorC = "#FFFFFF"),
        (H.u_colorD = "#FFFFFF"),
        (H.u_alpha = 1),
        (H.u_scale = 1),
        (H.u_offset = new s.Vector3(0, 0, 0)),
        (H.vertexShader =
          "\n    varying vec3 v_position;\n\n    void main() {\n        v_position = lamina_mapping_template;\n    }\n  "),
        (H.fragmentShader =
          "   \n    uniform vec3 u_colorA;\n    uniform vec3 u_colorB;\n    uniform vec3 u_colorC;\n    uniform vec3 u_colorD;\n    uniform vec3 u_offset;\n\n    uniform float u_alpha;\n    uniform float u_scale;\n\n    varying vec3 v_position;\n\n\n    void main() {\n        float f_n = lamina_noise_template((v_position + u_offset) * u_scale);\n\n        float f_step1 = 0.;\n        float f_step2 = 0.2;\n        float f_step3 = 0.6;\n        float f_step4 = 1.;\n\n        vec3 f_color = mix(u_colorA, u_colorB, smoothstep(f_step1, f_step2, f_n));\n        f_color = mix(f_color, u_colorC, smoothstep(f_step2, f_step3, f_n));\n        f_color = mix(f_color, u_colorD, smoothstep(f_step3, f_step4, f_n));\n\n        return vec4(f_color, u_alpha);\n    }\n  ");
      class z extends O {
        constructor(e) {
          super(z, { name: "Fresnel", ...e });
        }
      }
      (z.u_color = "white"),
        (z.u_alpha = 1),
        (z.u_bias = 0),
        (z.u_intensity = 1),
        (z.u_power = 2),
        (z.u_factor = 1),
        (z.vertexShader =
          "\n    varying vec3 v_worldPosition;\n    varying vec3 v_worldNormal;\n\n    void main() {\n        v_worldPosition = vec3(-viewMatrix[0][2], -viewMatrix[1][2], -viewMatrix[2][2]);\n        v_worldNormal = normalize( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );\n        \n    }\n  "),
        (z.fragmentShader =
          "   \n    uniform vec3 u_color;\n    uniform float u_alpha;\n    uniform float u_bias;\n    uniform float u_intensity;\n    uniform float u_power;\n    uniform float u_factor;\n\n    varying vec3 v_worldPosition;\n    varying vec3 v_worldNormal;\n\n    void main() {\n        float f_a = (u_factor  + dot(v_worldPosition, v_worldNormal));\n        float f_fresnel = u_bias + u_intensity * pow(abs(f_a), u_power);\n\n        f_fresnel = clamp(f_fresnel, 0.0, 1.0);\n        return vec4(f_fresnel * u_color, u_alpha);\n    }\n  ");
      class N extends O {
        constructor(e) {
          super(N, { name: "Gradient", ...e }, (e) => {
            e.schema.push({
              value: e.axes,
              label: "axes",
              options: ["x", "y", "z"],
            }),
              e.schema.push({
                value: e.mapping,
                label: "mapping",
                options: Object.values(F),
              });
            const t = N.getMapping(e.mapping);
            (e.vertexShader = e.vertexShader.replace(
              "lamina_mapping_template",
              t || "local"
            )),
              (e.fragmentShader = e.fragmentShader.replace(
                "axes_template",
                e.axes || "x"
              ));
          }),
            (this.axes = "x"),
            (this.mapping = "local");
        }
        static getMapping(e) {
          switch (e) {
            default:
            case "local":
              return "position";
            case "world":
              return "(modelMatrix * vec4(position,1.0)).xyz";
            case "uv":
              return "vec3(uv, 0.)";
          }
        }
      }
      (N.u_colorA = "white"),
        (N.u_colorB = "black"),
        (N.u_alpha = 1),
        (N.u_start = 1),
        (N.u_end = -1),
        (N.u_contrast = 1),
        (N.vertexShader =
          "\n\t\tvarying vec3 v_position;\n\n\t\tvod main() {\n      v_position = lamina_mapping_template;\n\t\t}\n  "),
        (N.fragmentShader =
          "   \n    uniform vec3 u_colorA;\n    uniform vec3 u_colorB;\n    uniform vec3 u_axis;\n    uniform float u_alpha;\n    uniform float u_start;\n    uniform float u_end;\n    uniform float u_contrast;\n\n\t\tvarying vec3 v_position;\n\n    void main() {\n\n      float f_step = smoothstep(u_start, u_end, v_position.axes_template * u_contrast);\n      vec3 f_color = mix(u_colorA, u_colorB, f_step);\n\n      return vec4(f_color, u_alpha);\n    }\n  ");
      class j extends O {
        constructor(e) {
          super(j, { name: "Matcap", ...e });
        }
      }
      (j.u_alpha = 1),
        (j.u_map = void 0),
        (j.vertexShader =
          "\n    varying vec3 v_position;\n    varying vec3 v_normal;\n    \n    void main() {\n      v_position = normalize( vec3( modelViewMatrix * vec4( position, 1.0 ) ) );\n      v_normal = normalize( normalMatrix * normal );\n    }\n    "),
        (j.fragmentShader =
          " \n\t\tuniform sampler2D u_map;  \n\t\tuniform float u_alpha;  \n\t\tvarying vec3 v_position;\n\t\tvarying vec3 v_normal;\n\n\t\t\n    void main() {\n\t\t\tvec3 f_r = reflect( v_position, v_normal );\n\t\t\tfloat f_m = 2. * sqrt( pow( f_r.x, 2. ) + pow( f_r.y, 2. ) + pow( f_r.z + 1., 2. ) );\n\t\t\tvec2 f_vN = f_r.xy / f_m + .5;\n\n\t\t\tvec3 f_base = texture2D(u_map, f_vN).rgb;\n\n      return vec4(f_base, u_alpha);\n    }\n  ");
      class U extends O {
        constructor(e) {
          super(U, { name: "Texture", ...e });
        }
      }
      (U.u_alpha = 1),
        (U.u_map = void 0),
        (U.vertexShader =
          "\n    varying vec2 v_uv;\n    \n    void main() {\n        v_uv = uv;\n    }\n    "),
        (U.fragmentShader =
          " \n\t\tuniform sampler2D u_map;  \n\t\tuniform float u_alpha;  \n\t\tvarying vec2 v_uv;\n\n    void main() {\n\t\t\tvec3 f_color = texture2D(u_map, v_uv).rgb;\n      return vec4(f_color, u_alpha);\n    }\n  ");
      class J extends O {
        constructor(e) {
          super(J, { name: "Displace", ...e }, (e) => {
            e.schema.push({
              value: e.type,
              label: "type",
              options: Object.values(P),
            }),
              e.schema.push({
                value: e.mapping,
                label: "mapping",
                options: Object.values(F),
              });
            const t = J.getNoiseFunction(e.type),
              n = J.getMapping(e.mapping);
            (e.vertexVariables = e.vertexVariables.replace(
              "lamina_mapping_template",
              n
            )),
              (e.vertexVariables = e.vertexVariables.replace(
                "lamina_noise_template",
                t
              ));
          }),
            (this.type = "perlin"),
            (this.mapping = "local");
        }
        static getNoiseFunction(e) {
          switch (e) {
            default:
            case "perlin":
              return "lamina_noise_perlin";
            case "simplex":
              return "lamina_noise_simplex";
            case "cell":
              return "lamina_noise_worley";
            case "white":
              return "lamina_noise_white";
            case "curl":
              return "lamina_noise_swirl";
          }
        }
        static getMapping(e) {
          switch (e) {
            default:
            case "local":
              return "p";
            case "world":
              return "(modelMatrix * vec4(p,1.0)).xyz";
            case "uv":
              return "vec3(uv, 0.)";
          }
        }
      }
      (J.u_strength = 1),
        (J.u_scale = 1),
        (J.u_offset = new s.Vector3(0, 0, 0)),
        (J.vertexShader =
          "\n       \n      uniform float u_strength;\n      uniform float u_scale;\n      uniform vec3 u_offset;\n\n      vec3 displace(vec3 p) {\n\t\t\t\tvec3 f_position = lamina_mapping_template;\n        float f_n = lamina_noise_template((f_position + u_offset) * u_scale) * u_strength;\n        vec3 f_newPosition = p + (f_n * normal);\n\n\t\t\t\treturn f_newPosition;\n      }\n\n      \n\t\t\tvec3 orthogonal(vec3 v) {\n  \t\t  return normalize(abs(v.x) > abs(v.z) ? vec3(-v.y, v.x, 0.0)\n  \t\t  : vec3(0.0, -v.z, v.y));\n  \t\t}\n  \t\tvec3 recalcNormals(vec3 newPos) {\n  \t\t  float offset = 0.001;\n  \t\t  vec3 tangent = orthogonal(normal);\n  \t\t  vec3 bitangent = normalize(cross(normal, tangent));\n  \t\t  vec3 neighbour1 = position + tangent * offset;\n  \t\t  vec3 neighbour2 = position + bitangent * offset;\n  \t\t  vec3 displacedNeighbour1 = displace(neighbour1);\n  \t\t  vec3 displacedNeighbour2 = displace(neighbour2);\n  \t\t  vec3 displacedTangent = displacedNeighbour1 - newPos;\n  \t\t  vec3 displacedBitangent = displacedNeighbour2 - newPos;\n  \t\t  return normalize(cross(displacedTangent, displacedBitangent));\n  \t\t}\n  \n  \n      void main() {\n       \n\t\t\t\tvec3 f_newPosition = displace(position);\n        lamina_finalNormal = recalcNormals(f_newPosition);\n\n        return f_newPosition;\n      }\n    ");
      class K extends O {
        constructor(e) {
          super(K, { name: "Normal", ...e });
        }
      }
      (K.u_alpha = 1),
        (K.u_direction = new s.Vector3(1, 1, 1)),
        (K.vertexShader =
          "   \n  varying vec3 v_normals; \n\n  void main() {\n    v_normals = normal;\n  }\n"),
        (K.fragmentShader =
          "   \n  \tuniform float u_alpha;\n  \tuniform vec3 u_color;\n  \tuniform vec3 u_direction;\n\n\t\tvarying vec3 v_normals;\n\n    void main() {\n\t\t\tvec3 f_normalColor = vec3(1.);\n      f_normalColor.x = v_normals.x * u_direction.x;\n      f_normalColor.y = v_normals.y * u_direction.y;\n      f_normalColor.z = v_normals.z * u_direction.z;\n\n      return vec4(f_normalColor, u_alpha);\n    }\n  ");
      var $ =
          "\n\n// From: https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83\n// Huge thanks to the creators of these algorithms\n\nfloat lamina_noise_mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}\nvec4 lamina_noise_mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}\nvec4 lamina_noise_perm(vec4 x){return lamina_noise_mod289(((x * 34.0) + 1.0) * x);}\nvec4 lamina_noise_permute(vec4 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }\nvec4 lamina_noise_taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }\n\n\nfloat lamina_noise_white(vec2 p) {\n  return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) *\n               (0.1 + abs(sin(p.y * 13.0 + p.x))));\n}\n\nfloat lamina_noise_white(vec3 p) {\n  return lamina_noise_white(p.xy);\n}\n\n\nvec3 lamina_noise_fade(vec3 t) { return t * t * t * (t * (t * 6.0 - 15.0) + 10.0); }\n\nfloat lamina_noise_perlin(vec3 P) {\n  vec3 Pi0 = floor(P);        // Integer part for indexing\n  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\n  Pi0 = mod(Pi0, 289.0);\n  Pi1 = mod(Pi1, 289.0);\n  vec3 Pf0 = fract(P);        // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = lamina_noise_permute(lamina_noise_permute(ix) + iy);\n  vec4 ixy0 = lamina_noise_permute(ixy + iz0);\n  vec4 ixy1 = lamina_noise_permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 / 7.0;\n  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 / 7.0;\n  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);\n  vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);\n  vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);\n  vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);\n  vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);\n  vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);\n  vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);\n  vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);\n\n  vec4 norm0 = lamina_noise_taylorInvSqrt(\n      vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = lamina_noise_taylorInvSqrt(\n      vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = lamina_noise_fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111),\n                 fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n  return lamina_normalize(2.2 * n_xyz);\n}\n\nfloat lamina_noise_simplex(vec3 v) {\n  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);\n  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);\n\n  // First corner\n  vec3 i = floor(v + dot(v, C.yyy));\n  vec3 x0 = v - i + dot(i, C.xxx);\n\n  // Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min(g.xyz, l.zxy);\n  vec3 i2 = max(g.xyz, l.zxy);\n\n  //  x0 = x0 - 0. + 0.0 * C\n  vec3 x1 = x0 - i1 + 1.0 * C.xxx;\n  vec3 x2 = x0 - i2 + 2.0 * C.xxx;\n  vec3 x3 = x0 - 1. + 3.0 * C.xxx;\n\n  // Permutations\n  i = mod(i, 289.0);\n  vec4 p = lamina_noise_permute(lamina_noise_permute(lamina_noise_permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y +\n                             vec4(0.0, i1.y, i2.y, 1.0)) +\n                    i.x + vec4(0.0, i1.x, i2.x, 1.0));\n\n  // Gradients\n  // ( N*N points uniformly over a square, mapped onto an octahedron.)\n  float n_ = 1.0 / 7.0; // N=7\n  vec3 ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z); //  mod(p,N*N)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_); // mod(j,N)\n\n  vec4 x = x_ * ns.x + ns.yyyy;\n  vec4 y = y_ * ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4(x.xy, y.xy);\n  vec4 b1 = vec4(x.zw, y.zw);\n\n  vec4 s0 = floor(b0) * 2.0 + 1.0;\n  vec4 s1 = floor(b1) * 2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;\n  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;\n\n  vec3 p0 = vec3(a0.xy, h.x);\n  vec3 p1 = vec3(a0.zw, h.y);\n  vec3 p2 = vec3(a1.xy, h.z);\n  vec3 p3 = vec3(a1.zw, h.w);\n\n  // Normalise gradients\n  vec4 norm =\n      lamina_noise_taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n  // Mix final noise value\n  vec4 m =\n      max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);\n  m = m * m;\n  return lamina_normalize(42.0 *\n         dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3))));\n}\n\nvec3 lamina_noise_simplex3(vec3 x) {\n  float s = lamina_noise_simplex(vec3(x));\n  float s1 = lamina_noise_simplex(vec3(x.y - 19.1, x.z + 33.4, x.x + 47.2));\n  float s2 = lamina_noise_simplex(vec3(x.z + 74.2, x.x - 124.5, x.y + 99.4));\n  vec3 c = vec3(s, s1, s2);\n  return c;\n}\n\nvec3 lamina_noise_curl(vec3 p) {\n  const float e = .1;\n  vec3 dx = vec3(e, 0.0, 0.0);\n  vec3 dy = vec3(0.0, e, 0.0);\n  vec3 dz = vec3(0.0, 0.0, e);\n\n  vec3 p_x0 = lamina_noise_simplex3(p - dx);\n  vec3 p_x1 = lamina_noise_simplex3(p + dx);\n  vec3 p_y0 = lamina_noise_simplex3(p - dy);\n  vec3 p_y1 = lamina_noise_simplex3(p + dy);\n  vec3 p_z0 = lamina_noise_simplex3(p - dz);\n  vec3 p_z1 = lamina_noise_simplex3(p + dz);\n\n  float x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;\n  float y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;\n  float z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;\n\n  const float divisor = 1.0 / (2.0 * e);\n  return normalize(vec3(x, y, z) * divisor);\n}\n\nvec3 lamina_permute(vec3 x) {\n  return mod((34.0 * x + 1.0) * x, 289.0);\n}\n\nvec3 lamina_dist(vec3 x, vec3 y, vec3 z,  bool manhattanDistance) {\n  return manhattanDistance ?  abs(x) + abs(y) + abs(z) :  (x * x + y * y + z * z);\n}\n\n// From: https://github.com/Erkaman/glsl-worley\nfloat lamina_noise_worley(vec3 P) {\n  float jitter = 1.;\n  bool manhattanDistance = false; \n\n  float K = 0.142857142857; // 1/7\n  float Ko = 0.428571428571; // 1/2-K/2\n  float  K2 = 0.020408163265306; // 1/(7*7)\n  float Kz = 0.166666666667; // 1/6\n  float Kzo = 0.416666666667; // 1/2-1/6*2\n\n\tvec3 Pi = mod(floor(P), 289.0);\n \tvec3 Pf = fract(P) - 0.5;\n\n\tvec3 Pfx = Pf.x + vec3(1.0, 0.0, -1.0);\n\tvec3 Pfy = Pf.y + vec3(1.0, 0.0, -1.0);\n\tvec3 Pfz = Pf.z + vec3(1.0, 0.0, -1.0);\n\n\tvec3 p = lamina_permute(Pi.x + vec3(-1.0, 0.0, 1.0));\n\tvec3 p1 = lamina_permute(p + Pi.y - 1.0);\n\tvec3 p2 = lamina_permute(p + Pi.y);\n\tvec3 p3 = lamina_permute(p + Pi.y + 1.0);\n\n\tvec3 p11 = lamina_permute(p1 + Pi.z - 1.0);\n\tvec3 p12 = lamina_permute(p1 + Pi.z);\n\tvec3 p13 = lamina_permute(p1 + Pi.z + 1.0);\n\n\tvec3 p21 = lamina_permute(p2 + Pi.z - 1.0);\n\tvec3 p22 = lamina_permute(p2 + Pi.z);\n\tvec3 p23 = lamina_permute(p2 + Pi.z + 1.0);\n\n\tvec3 p31 = lamina_permute(p3 + Pi.z - 1.0);\n\tvec3 p32 = lamina_permute(p3 + Pi.z);\n\tvec3 p33 = lamina_permute(p3 + Pi.z + 1.0);\n\n\tvec3 ox11 = fract(p11*K) - Ko;\n\tvec3 oy11 = mod(floor(p11*K), 7.0)*K - Ko;\n\tvec3 oz11 = floor(p11*K2)*Kz - Kzo; // p11 < 289 guaranteed\n\n\tvec3 ox12 = fract(p12*K) - Ko;\n\tvec3 oy12 = mod(floor(p12*K), 7.0)*K - Ko;\n\tvec3 oz12 = floor(p12*K2)*Kz - Kzo;\n\n\tvec3 ox13 = fract(p13*K) - Ko;\n\tvec3 oy13 = mod(floor(p13*K), 7.0)*K - Ko;\n\tvec3 oz13 = floor(p13*K2)*Kz - Kzo;\n\n\tvec3 ox21 = fract(p21*K) - Ko;\n\tvec3 oy21 = mod(floor(p21*K), 7.0)*K - Ko;\n\tvec3 oz21 = floor(p21*K2)*Kz - Kzo;\n\n\tvec3 ox22 = fract(p22*K) - Ko;\n\tvec3 oy22 = mod(floor(p22*K), 7.0)*K - Ko;\n\tvec3 oz22 = floor(p22*K2)*Kz - Kzo;\n\n\tvec3 ox23 = fract(p23*K) - Ko;\n\tvec3 oy23 = mod(floor(p23*K), 7.0)*K - Ko;\n\tvec3 oz23 = floor(p23*K2)*Kz - Kzo;\n\n\tvec3 ox31 = fract(p31*K) - Ko;\n\tvec3 oy31 = mod(floor(p31*K), 7.0)*K - Ko;\n\tvec3 oz31 = floor(p31*K2)*Kz - Kzo;\n\n\tvec3 ox32 = fract(p32*K) - Ko;\n\tvec3 oy32 = mod(floor(p32*K), 7.0)*K - Ko;\n\tvec3 oz32 = floor(p32*K2)*Kz - Kzo;\n\n\tvec3 ox33 = fract(p33*K) - Ko;\n\tvec3 oy33 = mod(floor(p33*K), 7.0)*K - Ko;\n\tvec3 oz33 = floor(p33*K2)*Kz - Kzo;\n\n\tvec3 dx11 = Pfx + jitter*ox11;\n\tvec3 dy11 = Pfy.x + jitter*oy11;\n\tvec3 dz11 = Pfz.x + jitter*oz11;\n\n\tvec3 dx12 = Pfx + jitter*ox12;\n\tvec3 dy12 = Pfy.x + jitter*oy12;\n\tvec3 dz12 = Pfz.y + jitter*oz12;\n\n\tvec3 dx13 = Pfx + jitter*ox13;\n\tvec3 dy13 = Pfy.x + jitter*oy13;\n\tvec3 dz13 = Pfz.z + jitter*oz13;\n\n\tvec3 dx21 = Pfx + jitter*ox21;\n\tvec3 dy21 = Pfy.y + jitter*oy21;\n\tvec3 dz21 = Pfz.x + jitter*oz21;\n\n\tvec3 dx22 = Pfx + jitter*ox22;\n\tvec3 dy22 = Pfy.y + jitter*oy22;\n\tvec3 dz22 = Pfz.y + jitter*oz22;\n\n\tvec3 dx23 = Pfx + jitter*ox23;\n\tvec3 dy23 = Pfy.y + jitter*oy23;\n\tvec3 dz23 = Pfz.z + jitter*oz23;\n\n\tvec3 dx31 = Pfx + jitter*ox31;\n\tvec3 dy31 = Pfy.z + jitter*oy31;\n\tvec3 dz31 = Pfz.x + jitter*oz31;\n\n\tvec3 dx32 = Pfx + jitter*ox32;\n\tvec3 dy32 = Pfy.z + jitter*oy32;\n\tvec3 dz32 = Pfz.y + jitter*oz32;\n\n\tvec3 dx33 = Pfx + jitter*ox33;\n\tvec3 dy33 = Pfy.z + jitter*oy33;\n\tvec3 dz33 = Pfz.z + jitter*oz33;\n\n\tvec3 d11 = lamina_dist(dx11, dy11, dz11, manhattanDistance);\n\tvec3 d12 = lamina_dist(dx12, dy12, dz12, manhattanDistance);\n\tvec3 d13 = lamina_dist(dx13, dy13, dz13, manhattanDistance);\n\tvec3 d21 = lamina_dist(dx21, dy21, dz21, manhattanDistance);\n\tvec3 d22 = lamina_dist(dx22, dy22, dz22, manhattanDistance);\n\tvec3 d23 = lamina_dist(dx23, dy23, dz23, manhattanDistance);\n\tvec3 d31 = lamina_dist(dx31, dy31, dz31, manhattanDistance);\n\tvec3 d32 = lamina_dist(dx32, dy32, dz32, manhattanDistance);\n\tvec3 d33 = lamina_dist(dx33, dy33, dz33, manhattanDistance);\n\n\tvec3 d1a = min(d11, d12);\n\td12 = max(d11, d12);\n\td11 = min(d1a, d13); // Smallest now not in d12 or d13\n\td13 = max(d1a, d13);\n\td12 = min(d12, d13); // 2nd smallest now not in d13\n\tvec3 d2a = min(d21, d22);\n\td22 = max(d21, d22);\n\td21 = min(d2a, d23); // Smallest now not in d22 or d23\n\td23 = max(d2a, d23);\n\td22 = min(d22, d23); // 2nd smallest now not in d23\n\tvec3 d3a = min(d31, d32);\n\td32 = max(d31, d32);\n\td31 = min(d3a, d33); // Smallest now not in d32 or d33\n\td33 = max(d3a, d33);\n\td32 = min(d32, d33); // 2nd smallest now not in d33\n\tvec3 da = min(d11, d21);\n\td21 = max(d11, d21);\n\td11 = min(da, d31); // Smallest now in d11\n\td31 = max(da, d31); // 2nd smallest now not in d31\n\td11.xy = (d11.x < d11.y) ? d11.xy : d11.yx;\n\td11.xz = (d11.x < d11.z) ? d11.xz : d11.zx; // d11.x now smallest\n\td12 = min(d12, d21); // 2nd smallest now not in d21\n\td12 = min(d12, d22); // nor in d22\n\td12 = min(d12, d31); // nor in d31\n\td12 = min(d12, d32); // nor in d32\n\td11.yz = min(d11.yz,d12.xy); // nor in d12.yz\n\td11.y = min(d11.y,d12.z); // Only two more to go\n\td11.y = min(d11.y,d11.z); // Done! (Phew!)\n\n  vec2 F = sqrt(d11.xy);\n\treturn F.x; // F1, F2\n\n}\n\nfloat lamina_noise_swirl(vec3 position) {\n    float scale = 0.1;\n    float freq = 4. * scale;\n    float t = 1.;\n\n    vec3 pos = (position * scale) + lamina_noise_curl(position * 7. * scale);\n\n    float worley1 = 1. - lamina_noise_worley((pos * (freq * 2.)) +  (t * 2.));\n    float worley2 = 1. - lamina_noise_worley((pos * (freq * 4.)) +  (t * 4.));\n    float worley3 = 1. - lamina_noise_worley((pos * (freq * 8.)) +  (t * 8.));\n    float worley4 = 1. - lamina_noise_worley((pos * (freq * 16.)) +  (t * 16.));\n    \n    float fbm1 = worley1 * .625 + worley2 * .25 + worley3 * .125;\n    float fbm2 = worley2 * .625 + worley3 * .25 + worley4 * .125;\n    float fbm3 = worley3 * .75 + worley4 * .25;\n\n    vec3 curlWorleyFbm = vec3(fbm1, fbm2, fbm3);\n    float curlWorley = curlWorleyFbm.r * .625 + curlWorleyFbm.g * .25 + \n        curlWorleyFbm.b * .125;\n\n    return curlWorley;\n}\n  \n  \n",
        Q =
          "\n\nfloat lamina_map(float value, float min1, float max1, float min2, float max2) {\n  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);\n}\n\nfloat lamina_normalize(float v) { return lamina_map(v, -1.0, 1.0, 0.0, 1.0); }\n";
      class W extends E {
        constructor({
          color: e,
          alpha: t,
          lighting: n,
          layers: r,
          name: o,
          ...i
        } = {}) {
          super({ baseMaterial: D[n || "basic"], ...i }),
            (this.name = "LayerMaterial"),
            (this.layers = []),
            (this.lighting = "basic");
          const a = e || "white",
            l = null != t ? t : 1;
          (this.uniforms = {
            u_lamina_color: {
              value:
                "string" === typeof a
                  ? new s.Color(a).convertSRGBToLinear()
                  : a,
            },
            u_lamina_alpha: { value: l },
          }),
            (this.layers = r || this.layers),
            (this.lighting = n || this.lighting),
            (this.name = o || this.name),
            this.refresh();
        }
        genShaders() {
          let e = "",
            t = "",
            n = "",
            r = "",
            o = {};
          return (
            this.layers
              .filter((e) => e.visible)
              .forEach((i) => {
                (e += i.vertexVariables + "\n"),
                  (t += i.fragmentVariables + "\n"),
                  (n += i.vertexShader + "\n"),
                  (r += i.fragmentShader + "\n"),
                  (o = { ...o, ...i.uniforms });
              }),
            (o = { ...o, ...this.uniforms }),
            {
              uniforms: o,
              vertexShader: `\n        ${Q}\n        ${$}\n        ${e}\n\n        void main() {\n          vec3 lamina_finalPosition = position;\n          vec3 lamina_finalNormal = normal;\n\n          ${n}\n\n          csm_Position = lamina_finalPosition;\n          csm_Normal = lamina_finalNormal;\n        }\n        `,
              fragmentShader: `\n        ${Q}\n        ${$}\n        \nvec4 lamina_blend_add(const in vec4 x, const in vec4 y, const in float opacity) {\n\n\treturn vec4(min(x.xyz + y.xyz, 1.0) * opacity + x.xyz * (1.0 - opacity), x.a);\n\n}\nvec3 lamina_blend_alpha(const in vec3 x, const in vec3 y, const in float opacity) {\n\n\treturn y * opacity + x * (1.0 - opacity);\n\n}\n\nvec4 lamina_blend_alpha(const in vec4 x, const in vec4 y, const in float opacity) {\n\n\tfloat a = min(y.a, opacity);\n\n\treturn vec4(lamina_blend_alpha(x.rgb, y.rgb, a), x.a);\n\n}\nvec4 lamina_blend_average(const in vec4 x, const in vec4 y, const in float opacity) {\n\n\treturn vec4((x.xyz + y.xyz) * 0.5 * opacity + x.xyz * (1.0 - opacity), x.a);\n\n}\nfloat lamina_blend_color_burn(const in float x, const in float y) {\n\n\treturn (y == 0.0) ? y : max(1.0 - (1.0 - x) / y, 0.0);\n\n}\n\nvec4 lamina_blend_color_burn(const in vec4 x, const in vec4 y, const in float opacity) {\n\n\tvec4 z = vec4(\n\t\tlamina_blend_color_burn(x.r, y.r),\n\t\tlamina_blend_color_burn(x.g, y.g),\n\t\tlamina_blend_color_burn(x.b, y.b),\n\t\tlamina_blend_color_burn(x.a, y.a)\n\t);\n\n\treturn vec4(z.xyz * opacity + x.xyz * (1.0 - opacity), x.a);\n\n}\nfloat lamina_blend_color_dodge(const in float x, const in float y) {\n\n\treturn (y == 1.0) ? y : min(x / (1.0 - y), 1.0);\n\n}\n\nvec4 lamina_blend_color_dodge(const in vec4 x, const in vec4 y, const in float opacity) {\n\n\tvec4 z = vec4(\n\t\tlamina_blend_color_dodge(x.r, y.r),\n\t\tlamina_blend_color_dodge(x.g, y.g),\n\t\tlamina_blend_color_dodge(x.b, y.b),\n\t\tlamina_blend_color_dodge(x.a, y.a)\n\t);\n\n\treturn vec4(z.xyz * opacity + x.xyz * (1.0 - opacity), x.a);\n\n}\nvec4 lamina_blend_darken(const in vec4 x, const in vec4 y, const in float opacity) {\n\n\treturn vec4(min(x.xyz, y.xyz) * opacity + x.xyz * (1.0 - opacity), x.a);\n\n}\nvec4 lamina_blend_difference(const in vec4 x, const in vec4 y, const in float opacity) {\n\n\treturn vec4(abs(x.xyz - y.xyz) * opacity + x.xyz * (1.0 - opacity), x.a);\n\n}\nfloat lamina_blend_divide(const in float x, const in float y) {\n\n\treturn (y > 0.0) ? min(x / y, 1.0) : 1.0;\n\n}\n\nvec4 lamina_blend_divide(const in vec4 x, const in vec4 y, const in float opacity) {\n\n\tvec4 z = vec4(\n\t\tlamina_blend_divide(x.r, y.r),\n\t\tlamina_blend_divide(x.g, y.g),\n\t\tlamina_blend_divide(x.b, y.b),\n\t\tlamina_blend_divide(x.a, y.a)\n\t);\n\n\treturn vec4(z.xyz * opacity + x.xyz * (1.0 - opacity), x.a);\n\n}\nvec4 lamina_blend_exclusion(const in vec4 x, const in vec4 y, const in float opacity) {\n\n\treturn vec4((x.xyz + y.xyz - 2.0 * x.xyz * y.xyz) * opacity + x.xyz * (1.0 - opacity), x.a);\n\n}\nvec4 lamina_blend_lighten(const in vec4 x, const in vec4 y, const in float opacity) {\n\n\treturn vec4(max(x.xyz, y.xyz) * opacity + x.xyz * (1.0 - opacity), x.a);\n\n}\nvec4 lamina_blend_multiply(const in vec4 x, const in vec4 y, const in float opacity) {\n\n\treturn vec4( x.xyz * y.xyz * opacity + x.xyz * (1.0 - opacity), x.a);\n\n}\nvec4 lamina_blend_negation(const in vec4 x, const in vec4 y, const in float opacity) {\n\n\treturn vec4((1.0 - abs(1.0 - x.xyz - y.xyz)) * opacity + x.xyz * (1.0 - opacity), x.a);\n\n}\nvec4 lamina_blend_normal(const in vec4 x, const in vec4 y, const in float opacity) {\n\n\treturn vec4(y.xyz * opacity + x.xyz * (1.0 - opacity), x.a);\n\n}\nfloat lamina_blend_overlay(const in float x, const in float y) {\n\n\treturn (x < 0.5) ? (2.0 * x * y) : (1.0 - 2.0 * (1.0 - x) * (1.0 - y));\n\n}\n\nvec4 lamina_blend_overlay(const in vec4 x, const in vec4 y, const in float opacity) {\n\n\tvec4 z = vec4(\n\t\tlamina_blend_overlay(x.r, y.r),\n\t\tlamina_blend_overlay(x.g, y.g),\n\t\tlamina_blend_overlay(x.b, y.b),\n\t\tlamina_blend_overlay(x.a, y.a)\n\t);\n\n\treturn vec4(z.xyz * opacity + x.xyz * (1.0 - opacity), x.a);\n\n}\nfloat lamina_blend_reflect(const in float x, const in float y) {\n\n\treturn (y == 1.0) ? y : min(x * x / (1.0 - y), 1.0);\n\n}\n\nvec4 lamina_blend_reflect(const in vec4 x, const in vec4 y, const in float opacity) {\n\n\tvec4 z = vec4(\n\t\tlamina_blend_reflect(x.r, y.r),\n\t\tlamina_blend_reflect(x.g, y.g),\n\t\tlamina_blend_reflect(x.b, y.b),\n\t\tlamina_blend_reflect(x.a, y.a)\n\t);\n\n\treturn vec4(z.xyz * opacity + x.xyz * (1.0 - opacity), x.a);\n\n}\nvec4 lamina_blend_screen(const in vec4 x, const in vec4 y, const in float opacity) {\n\n\treturn vec4((1.0 - (1.0 - x.xyz) * (1.0 - y.xyz)) * opacity + x.xyz * (1.0 - opacity), x.a);\n\n}\nfloat lamina_blend_softlight(const in float x, const in float y) {\n\n\treturn (y < 0.5) ?\n\t\t(2.0 * x * y + x * x * (1.0 - 2.0 * y)) :\n\t\t(sqrt(x) * (2.0 * y - 1.0) + 2.0 * x * (1.0 - y));\n\n}\n\nvec4 lamina_blend_softlight(const in vec4 x, const in vec4 y, const in float opacity) {\n\n\tvec4 z = vec4(\n\t\tlamina_blend_softlight(x.r, y.r),\n\t\tlamina_blend_softlight(x.g, y.g),\n\t\tlamina_blend_softlight(x.b, y.b),\n\t\tlamina_blend_softlight(x.a, y.a)\n\t);\n\n\treturn vec4(z.xyz * opacity + x.xyz * (1.0 - opacity), x.a);\n\n}\nvec4 lamina_blend_subtract(const in vec4 x, const in vec4 y, const in float opacity) {\n\n\treturn vec4(max(x.xyz + y.xyz - 1.0, 0.0) * opacity + x.xyz * (1.0 - opacity), x.a);\n\n}\n\n\n        ${t}\n\n        uniform vec3 u_lamina_color;\n        uniform float u_lamina_alpha;\n\n        void main() {\n          vec4 lamina_finalColor = vec4(u_lamina_color, u_lamina_alpha);\n\n          ${r}\n\n          csm_DiffuseColor = lamina_finalColor;\n         \n        }\n        `,
            }
          );
        }
        refresh() {
          const {
            uniforms: e,
            fragmentShader: t,
            vertexShader: n,
          } = this.genShaders();
          super.update({ fragmentShader: t, vertexShader: n, uniforms: e });
        }
        serialize() {
          return {
            constructor: "LayerMaterial",
            properties: {
              color: this.color,
              alpha: this.alpha,
              name: this.name,
              lighting: this.lighting,
            },
          };
        }
        set color(e) {
          var t, n;
          null != (t = this.uniforms) &&
            null != (n = t.u_lamina_color) &&
            n.value &&
            (this.uniforms.u_lamina_color.value =
              "string" === typeof e ? new s.Color(e).convertSRGBToLinear() : e);
        }
        get color() {
          var e, t;
          return null == (e = this.uniforms) || null == (t = e.u_lamina_color)
            ? void 0
            : t.value;
        }
        set alpha(e) {
          this.uniforms.u_lamina_alpha.value = e;
        }
        get alpha() {
          return this.uniforms.u_lamina_alpha.value;
        }
      }
      (0, o.e)({ LayerMaterial: W });
      (0, o.e)({
        LayerMaterial: W,
        Depth_: L,
        Color_: G,
        Noise_: H,
        Fresnel_: z,
        Gradient_: N,
        Matcap_: j,
        Texture_: U,
        Displace_: J,
        Normal_: K,
      });
      const V = i.forwardRef(({ children: e, ...t }, n) => {
        const o = i.useRef(null);
        i.useLayoutEffect(() => {
          (o.current.layers = o.current.__r3f.objects), o.current.refresh();
        }, [e]);
        const [s, l] = (0, i.useMemo)(() => R(t), [t]);
        return i.createElement(
          "layerMaterial",
          (0, r.Z)({ args: [s], ref: (0, a.Z)([o, n]) }, l),
          e
        );
      });
      function Y(e) {
        return [
          {
            mode: null == e ? void 0 : e.mode,
            visible: null == e ? void 0 : e.visible,
            type: null == e ? void 0 : e.type,
            mapping: null == e ? void 0 : e.mapping,
            map: null == e ? void 0 : e.map,
            axes: null == e ? void 0 : e.axes,
          },
        ];
      }
      const X = i.forwardRef((e, t) =>
        i.createElement("depth_", (0, r.Z)({ args: Y(e), ref: t }, e))
      );
    },
    25404: function (e, t, n) {
      "use strict";
      var r = n(67294),
        o = n.t(r, 2);
      function i(...e) {
        return (t) =>
          e.forEach((e) =>
            (function (e, t) {
              "function" == typeof e ? e(t) : null != e && (e.current = t);
            })(e, t)
          );
      }
      var a = n(87462);
      const s = r.forwardRef((e, t) => {
        const { children: n, ...o } = e;
        return r.Children.toArray(n).some(u)
          ? r.createElement(
              r.Fragment,
              null,
              r.Children.map(n, (e) =>
                u(e)
                  ? r.createElement(
                      l,
                      (0, a.Z)({}, o, { ref: t }),
                      e.props.children
                    )
                  : e
              )
            )
          : r.createElement(l, (0, a.Z)({}, o, { ref: t }), n);
      });
      s.displayName = "Slot";
      const l = r.forwardRef((e, t) => {
        const { children: n, ...o } = e;
        return r.isValidElement(n)
          ? r.cloneElement(n, { ...f(o, n.props), ref: i(t, n.ref) })
          : r.Children.count(n) > 1
          ? r.Children.only(null)
          : null;
      });
      l.displayName = "SlotClone";
      const c = ({ children: e }) => r.createElement(r.Fragment, null, e);
      function u(e) {
        return r.isValidElement(e) && e.type === c;
      }
      function f(e, t) {
        const n = { ...t };
        for (const r in t) {
          const o = e[r],
            i = t[r];
          /^on[A-Z]/.test(r)
            ? (n[r] = (...e) => {
                null == i || i(...e), null == o || o(...e);
              })
            : "style" === r
            ? (n[r] = { ...o, ...i })
            : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "));
        }
        return { ...e, ...n };
      }
      const d = [
          "a",
          "button",
          "div",
          "h2",
          "h3",
          "img",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce(
          (e, t) => ({
            ...e,
            [t]: r.forwardRef((e, n) => {
              const { asChild: o, ...i } = e,
                l = o ? s : t;
              return (
                r.useEffect(() => {
                  window[Symbol.for("radix-ui")] = !0;
                }, []),
                r.createElement(l, (0, a.Z)({}, i, { ref: n }))
              );
            }),
          }),
          {}
        ),
        p = Boolean(
          null === globalThis || void 0 === globalThis
            ? void 0
            : globalThis.document
        )
          ? r.useLayoutEffect
          : () => {};
      var h = n(73935);
      const m = r.forwardRef((e, t) => {
        var n, o;
        const { containerRef: i, style: s, ...l } = e,
          c =
            null !== (n = null == i ? void 0 : i.current) && void 0 !== n
              ? n
              : null === globalThis ||
                void 0 === globalThis ||
                null === (o = globalThis.document) ||
                void 0 === o
              ? void 0
              : o.body,
          [, u] = r.useState({});
        return (
          p(() => {
            u({});
          }, []),
          c
            ? h.createPortal(
                r.createElement(
                  d.div,
                  (0, a.Z)({ "data-radix-portal": "" }, l, {
                    ref: t,
                    style:
                      c === document.body
                        ? {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            zIndex: 2147483647,
                            ...s,
                          }
                        : void 0,
                  })
                ),
                c
              )
            : null
        );
      });
      var g = Object.prototype.hasOwnProperty;
      function v(e, t) {
        var n, r;
        if (e === t) return !0;
        if (e && t && (n = e.constructor) === t.constructor) {
          if (n === Date) return e.getTime() === t.getTime();
          if (n === RegExp) return e.toString() === t.toString();
          if (n === Array) {
            if ((r = e.length) === t.length) for (; r-- && v(e[r], t[r]); );
            return -1 === r;
          }
          if (!n || "object" === typeof e) {
            for (n in ((r = 0), e)) {
              if (g.call(e, n) && ++r && !g.call(t, n)) return !1;
              if (!(n in t) || !v(e[n], t[n])) return !1;
            }
            return Object.keys(t).length === r;
          }
        }
        return e !== e && t !== t;
      }
      function y(e, t) {
        if (Object.is(e, t)) return !0;
        if (
          "object" !== typeof e ||
          null === e ||
          "object" !== typeof t ||
          null === t
        )
          return !1;
        const n = Object.keys(e);
        if (n.length !== Object.keys(t).length) return !1;
        for (let r = 0; r < n.length; r++)
          if (
            !Object.prototype.hasOwnProperty.call(t, n[r]) ||
            !Object.is(e[n[r]], t[n[r]])
          )
            return !1;
        return !0;
      }
      var b = function (e, t, n, r) {
        (this.name = e), (this.fn = t), (this.args = n), (this.modifiers = r);
      };
      function A(e, t) {
        return void 0 === t && (t = "simple"), "object" === typeof e ? e[t] : e;
      }
      function B(e, t) {
        if (e.length) {
          var n = e.shift(),
            r = B(e, t);
          return n.perform(r);
        }
        return A(t);
      }
      function C(e, t) {
        if (e.length) {
          var n = e.shift(),
            r = C(e, t);
          return n.performAsync(r);
        }
        return function (e) {
          return Promise.resolve(A(t, "async")(e));
        };
      }
      (b.prototype._test = function (e) {
        var t = this.fn;
        try {
          B(this.modifiers.slice(), t)(e);
        } catch (n) {
          t = function () {
            return !1;
          };
        }
        try {
          return B(this.modifiers.slice(), t)(e);
        } catch (r) {
          return !1;
        }
      }),
        (b.prototype._check = function (e) {
          try {
            B(this.modifiers.slice(), this.fn)(e);
          } catch (t) {
            if (
              B(this.modifiers.slice(), function (e) {
                return e;
              })(!1)
            )
              return;
          }
          if (!B(this.modifiers.slice(), this.fn)(e)) throw null;
        }),
        (b.prototype._testAsync = function (e) {
          var t = this;
          return new Promise(function (n, r) {
            C(
              t.modifiers.slice(),
              t.fn
            )(e)
              .then(function (t) {
                t ? n(e) : r(null);
              })
              .catch(function (e) {
                return r(e);
              });
          });
        });
      var x = function (e, t, n) {
          (this.name = e), (this.perform = t), (this.performAsync = n);
        },
        w = (function (e) {
          function t(n, r, o, i) {
            for (var a = [], s = arguments.length - 4; s-- > 0; )
              a[s] = arguments[s + 4];
            e.call(this, a),
              e.captureStackTrace && e.captureStackTrace(this, t),
              (this.rule = n),
              (this.value = r),
              (this.cause = o),
              (this.target = i);
          }
          return (
            e && (t.__proto__ = e),
            (t.prototype = Object.create(e && e.prototype)),
            (t.prototype.constructor = t),
            t
          );
        })(Error),
        _ = function (e, t) {
          void 0 === e && (e = []),
            void 0 === t && (t = []),
            (this.chain = e),
            (this.nextRuleModifiers = t);
        };
      function E(e, t, n, r) {
        if (t.length) {
          var o = t.shift();
          o._testAsync(e).then(
            function () {
              E(e, t, n, r);
            },
            function (t) {
              r(new w(o, e, t));
            }
          );
        } else n(e);
      }
      function S() {
        return void 0 !== typeof Proxy ? R(new _()) : I(new _());
      }
      (_.prototype._applyRule = function (e, t) {
        var n = this;
        return function () {
          for (var r = [], o = arguments.length; o--; ) r[o] = arguments[o];
          return (
            n.chain.push(new b(t, e.apply(n, r), r, n.nextRuleModifiers)),
            (n.nextRuleModifiers = []),
            n
          );
        };
      }),
        (_.prototype._applyModifier = function (e, t) {
          return this.nextRuleModifiers.push(new x(t, e.simple, e.async)), this;
        }),
        (_.prototype._clone = function () {
          return new _(this.chain.slice(), this.nextRuleModifiers.slice());
        }),
        (_.prototype.test = function (e) {
          return this.chain.every(function (t) {
            return t._test(e);
          });
        }),
        (_.prototype.testAll = function (e) {
          var t = [];
          return (
            this.chain.forEach(function (n) {
              try {
                n._check(e);
              } catch (r) {
                t.push(new w(n, e, r));
              }
            }),
            t
          );
        }),
        (_.prototype.check = function (e) {
          this.chain.forEach(function (t) {
            try {
              t._check(e);
            } catch (n) {
              throw new w(t, e, n);
            }
          });
        }),
        (_.prototype.testAsync = function (e) {
          var t = this;
          return new Promise(function (n, r) {
            E(e, t.chain.slice(), n, r);
          });
        });
      var M = {};
      function R(e) {
        return new Proxy(e, {
          get: function (t, n) {
            if (n in t) return t[n];
            var r = R(e._clone());
            return n in k
              ? r._applyModifier(k[n], n)
              : n in M
              ? r._applyRule(M[n], n)
              : n in P
              ? r._applyRule(P[n], n)
              : void 0;
          },
        });
      }
      function I(e) {
        var t = function (e, t) {
            return (
              Object.keys(e).forEach(function (n) {
                t[n] = function () {
                  for (var r = [], o = arguments.length; o--; )
                    r[o] = arguments[o];
                  var i = I(t._clone()),
                    a = i._applyRule(e[n], n).apply(void 0, r);
                  return a;
                };
              }),
              t
            );
          },
          n = t(P, e),
          r = t(M, n);
        return (
          Object.keys(k).forEach(function (e) {
            Object.defineProperty(r, e, {
              get: function () {
                return I(r._clone())._applyModifier(k[e], e);
              },
            });
          }),
          r
        );
      }
      (S.extend = function (e) {
        Object.assign(M, e);
      }),
        (S.clearCustomRules = function () {
          M = {};
        });
      var k = {
        not: {
          simple: function (e) {
            return function (t) {
              return !e(t);
            };
          },
          async: function (e) {
            return function (t) {
              return Promise.resolve(e(t))
                .then(function (e) {
                  return !e;
                })
                .catch(function () {
                  return !0;
                });
            };
          },
        },
        some: {
          simple: function (e) {
            return function (t) {
              return T(t).some(function (t) {
                try {
                  return e(t);
                } catch (n) {
                  return !1;
                }
              });
            };
          },
          async: function (e) {
            return function (t) {
              return Promise.all(
                T(t).map(function (t) {
                  try {
                    return e(t).catch(function () {
                      return !1;
                    });
                  } catch (n) {
                    return !1;
                  }
                })
              ).then(function (e) {
                return e.some(Boolean);
              });
            };
          },
        },
        every: {
          simple: function (e) {
            return function (t) {
              return !1 !== t && T(t).every(e);
            };
          },
          async: function (e) {
            return function (t) {
              return Promise.all(T(t).map(e)).then(function (e) {
                return e.every(Boolean);
              });
            };
          },
        },
      };
      function T(e) {
        return "string" === typeof e ? e.split("") : e;
      }
      var P = {
        equal: function (e) {
          return function (t) {
            return t == e;
          };
        },
        exact: function (e) {
          return function (t) {
            return t === e;
          };
        },
        number: function (e) {
          return (
            void 0 === e && (e = !0),
            function (t) {
              return "number" === typeof t && (e || isFinite(t));
            }
          );
        },
        integer: function () {
          return function (e) {
            return (Number.isInteger || D)(e);
          };
        },
        numeric: function () {
          return function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e);
          };
        },
        string: function () {
          return F("string");
        },
        boolean: function () {
          return F("boolean");
        },
        undefined: function () {
          return F("undefined");
        },
        null: function () {
          return F("null");
        },
        array: function () {
          return F("array");
        },
        object: function () {
          return F("object");
        },
        instanceOf: function (e) {
          return function (t) {
            return t instanceof e;
          };
        },
        pattern: function (e) {
          return function (t) {
            return e.test(t);
          };
        },
        lowercase: function () {
          return function (e) {
            return /^([a-z]+\s*)+$/.test(e);
          };
        },
        uppercase: function () {
          return function (e) {
            return /^([A-Z]+\s*)+$/.test(e);
          };
        },
        vowel: function () {
          return function (e) {
            return /^[aeiou]+$/i.test(e);
          };
        },
        consonant: function () {
          return function (e) {
            return /^(?=[^aeiou])([a-z]+)$/i.test(e);
          };
        },
        first: function (e) {
          return function (t) {
            return t[0] == e;
          };
        },
        last: function (e) {
          return function (t) {
            return t[t.length - 1] == e;
          };
        },
        empty: function () {
          return function (e) {
            return 0 === e.length;
          };
        },
        length: function (e, t) {
          return function (n) {
            return n.length >= e && n.length <= (t || e);
          };
        },
        minLength: function (e) {
          return function (t) {
            return t.length >= e;
          };
        },
        maxLength: function (e) {
          return function (t) {
            return t.length <= e;
          };
        },
        negative: function () {
          return function (e) {
            return e < 0;
          };
        },
        positive: function () {
          return function (e) {
            return e >= 0;
          };
        },
        between: function (e, t) {
          return function (n) {
            return n >= e && n <= t;
          };
        },
        range: function (e, t) {
          return function (n) {
            return n >= e && n <= t;
          };
        },
        lessThan: function (e) {
          return function (t) {
            return t < e;
          };
        },
        lessThanOrEqual: function (e) {
          return function (t) {
            return t <= e;
          };
        },
        greaterThan: function (e) {
          return function (t) {
            return t > e;
          };
        },
        greaterThanOrEqual: function (e) {
          return function (t) {
            return t >= e;
          };
        },
        even: function () {
          return function (e) {
            return e % 2 === 0;
          };
        },
        odd: function () {
          return function (e) {
            return e % 2 !== 0;
          };
        },
        includes: function (e) {
          return function (t) {
            return ~t.indexOf(e);
          };
        },
        schema: function (e) {
          return (function (e) {
            return {
              simple: function (t) {
                var n = [];
                if (
                  (Object.keys(e).forEach(function (r) {
                    var o = e[r];
                    try {
                      o.check((t || {})[r]);
                    } catch (i) {
                      (i.target = r), n.push(i);
                    }
                  }),
                  n.length > 0)
                )
                  throw n;
                return !0;
              },
              async: function (t) {
                var n = [],
                  r = Object.keys(e).map(function (r) {
                    return e[r].testAsync((t || {})[r]).catch(function (e) {
                      (e.target = r), n.push(e);
                    });
                  });
                return Promise.all(r).then(function () {
                  if (n.length > 0) throw n;
                  return !0;
                });
              },
            };
          })(e);
        },
        passesAnyOf: function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          return function (t) {
            return e.some(function (e) {
              return e.test(t);
            });
          };
        },
        optional: function (e, t) {
          return (
            void 0 === t && (t = !1),
            function (n) {
              return (
                (t && "string" === typeof n && "" === n.trim()) ||
                  (void 0 !== n && null !== n && e.check(n)),
                !0
              );
            }
          );
        },
      };
      function F(e) {
        return function (t) {
          return (
            (Array.isArray(t) && "array" === e) ||
            (null === t && "null" === e) ||
            typeof t === e
          );
        };
      }
      function D(e) {
        return "number" === typeof e && isFinite(e) && Math.floor(e) === e;
      }
      var O = S,
        L = "colors",
        G = "sizes",
        H = "space",
        z = {
          gap: H,
          gridGap: H,
          columnGap: H,
          gridColumnGap: H,
          rowGap: H,
          gridRowGap: H,
          inset: H,
          insetBlock: H,
          insetBlockEnd: H,
          insetBlockStart: H,
          insetInline: H,
          insetInlineEnd: H,
          insetInlineStart: H,
          margin: H,
          marginTop: H,
          marginRight: H,
          marginBottom: H,
          marginLeft: H,
          marginBlock: H,
          marginBlockEnd: H,
          marginBlockStart: H,
          marginInline: H,
          marginInlineEnd: H,
          marginInlineStart: H,
          padding: H,
          paddingTop: H,
          paddingRight: H,
          paddingBottom: H,
          paddingLeft: H,
          paddingBlock: H,
          paddingBlockEnd: H,
          paddingBlockStart: H,
          paddingInline: H,
          paddingInlineEnd: H,
          paddingInlineStart: H,
          top: H,
          right: H,
          bottom: H,
          left: H,
          scrollMargin: H,
          scrollMarginTop: H,
          scrollMarginRight: H,
          scrollMarginBottom: H,
          scrollMarginLeft: H,
          scrollMarginX: H,
          scrollMarginY: H,
          scrollMarginBlock: H,
          scrollMarginBlockEnd: H,
          scrollMarginBlockStart: H,
          scrollMarginInline: H,
          scrollMarginInlineEnd: H,
          scrollMarginInlineStart: H,
          scrollPadding: H,
          scrollPaddingTop: H,
          scrollPaddingRight: H,
          scrollPaddingBottom: H,
          scrollPaddingLeft: H,
          scrollPaddingX: H,
          scrollPaddingY: H,
          scrollPaddingBlock: H,
          scrollPaddingBlockEnd: H,
          scrollPaddingBlockStart: H,
          scrollPaddingInline: H,
          scrollPaddingInlineEnd: H,
          scrollPaddingInlineStart: H,
          fontSize: "fontSizes",
          background: L,
          backgroundColor: L,
          backgroundImage: L,
          borderImage: L,
          border: L,
          borderBlock: L,
          borderBlockEnd: L,
          borderBlockStart: L,
          borderBottom: L,
          borderBottomColor: L,
          borderColor: L,
          borderInline: L,
          borderInlineEnd: L,
          borderInlineStart: L,
          borderLeft: L,
          borderLeftColor: L,
          borderRight: L,
          borderRightColor: L,
          borderTop: L,
          borderTopColor: L,
          caretColor: L,
          color: L,
          columnRuleColor: L,
          fill: L,
          outline: L,
          outlineColor: L,
          stroke: L,
          textDecorationColor: L,
          fontFamily: "fonts",
          fontWeight: "fontWeights",
          lineHeight: "lineHeights",
          letterSpacing: "letterSpacings",
          blockSize: G,
          minBlockSize: G,
          maxBlockSize: G,
          inlineSize: G,
          minInlineSize: G,
          maxInlineSize: G,
          width: G,
          minWidth: G,
          maxWidth: G,
          height: G,
          minHeight: G,
          maxHeight: G,
          flexBasis: G,
          gridTemplateColumns: G,
          gridTemplateRows: G,
          borderWidth: "borderWidths",
          borderTopWidth: "borderWidths",
          borderRightWidth: "borderWidths",
          borderBottomWidth: "borderWidths",
          borderLeftWidth: "borderWidths",
          borderStyle: "borderStyles",
          borderTopStyle: "borderStyles",
          borderRightStyle: "borderStyles",
          borderBottomStyle: "borderStyles",
          borderLeftStyle: "borderStyles",
          borderRadius: "radii",
          borderTopLeftRadius: "radii",
          borderTopRightRadius: "radii",
          borderBottomRightRadius: "radii",
          borderBottomLeftRadius: "radii",
          boxShadow: "shadows",
          textShadow: "shadows",
          transition: "transitions",
          zIndex: "zIndices",
        },
        N = (e, t) =>
          "function" == typeof t
            ? { "()": Function.prototype.toString.call(t) }
            : t,
        j = () => {
          const e = Object.create(null);
          return (t, n, ...r) => {
            const o = ((e) => JSON.stringify(e, N))(t);
            return o in e ? e[o] : (e[o] = n(t, ...r));
          };
        },
        U = Symbol.for("sxs.internal"),
        J = (e, t) =>
          Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)),
        K = (e) => {
          for (const t in e) return !0;
          return !1;
        },
        { hasOwnProperty: $ } = Object.prototype,
        Q = (e) =>
          e.includes("-")
            ? e
            : e.replace(/[A-Z]/g, (e) => "-" + e.toLowerCase()),
        W = /\s+(?![^()]*\))/,
        V = (e) => (t) =>
          e(...("string" == typeof t ? String(t).split(W) : [t])),
        Y = {
          appearance: (e) => ({ WebkitAppearance: e, appearance: e }),
          backfaceVisibility: (e) => ({
            WebkitBackfaceVisibility: e,
            backfaceVisibility: e,
          }),
          backdropFilter: (e) => ({
            WebkitBackdropFilter: e,
            backdropFilter: e,
          }),
          backgroundClip: (e) => ({
            WebkitBackgroundClip: e,
            backgroundClip: e,
          }),
          boxDecorationBreak: (e) => ({
            WebkitBoxDecorationBreak: e,
            boxDecorationBreak: e,
          }),
          clipPath: (e) => ({ WebkitClipPath: e, clipPath: e }),
          content: (e) => ({
            content:
              e.includes('"') ||
              e.includes("'") ||
              /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(
                e
              )
                ? e
                : `"${e}"`,
          }),
          hyphens: (e) => ({ WebkitHyphens: e, hyphens: e }),
          maskImage: (e) => ({ WebkitMaskImage: e, maskImage: e }),
          maskSize: (e) => ({ WebkitMaskSize: e, maskSize: e }),
          tabSize: (e) => ({ MozTabSize: e, tabSize: e }),
          textSizeAdjust: (e) => ({
            WebkitTextSizeAdjust: e,
            textSizeAdjust: e,
          }),
          userSelect: (e) => ({ WebkitUserSelect: e, userSelect: e }),
          marginBlock: V((e, t) => ({
            marginBlockStart: e,
            marginBlockEnd: t || e,
          })),
          marginInline: V((e, t) => ({
            marginInlineStart: e,
            marginInlineEnd: t || e,
          })),
          maxSize: V((e, t) => ({ maxBlockSize: e, maxInlineSize: t || e })),
          minSize: V((e, t) => ({ minBlockSize: e, minInlineSize: t || e })),
          paddingBlock: V((e, t) => ({
            paddingBlockStart: e,
            paddingBlockEnd: t || e,
          })),
          paddingInline: V((e, t) => ({
            paddingInlineStart: e,
            paddingInlineEnd: t || e,
          })),
        },
        X = /([\d.]+)([^]*)/,
        Z = (e, t) =>
          e.length
            ? e.reduce(
                (e, n) => (
                  e.push(
                    ...t.map((e) =>
                      e.includes("&")
                        ? e.replace(
                            /&/g,
                            /[ +>|~]/.test(n) && /&.*&/.test(e)
                              ? `:is(${n})`
                              : n
                          )
                        : n + " " + e
                    )
                  ),
                  e
                ),
                []
              )
            : t,
        q = (e, t) =>
          e in ee && "string" == typeof t
            ? t.replace(
                /^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,
                (t, n, r, o) =>
                  n +
                  ("stretch" === r
                    ? `-moz-available${o};${Q(e)}:${n}-webkit-fill-available`
                    : `-moz-fit-content${o};${Q(e)}:${n}fit-content`) +
                  o
              )
            : String(t),
        ee = {
          blockSize: 1,
          height: 1,
          inlineSize: 1,
          maxBlockSize: 1,
          maxHeight: 1,
          maxInlineSize: 1,
          maxWidth: 1,
          minBlockSize: 1,
          minHeight: 1,
          minInlineSize: 1,
          minWidth: 1,
          width: 1,
        },
        te = (e) => (e ? e + "-" : ""),
        ne = (e, t, n) =>
          e.replace(
            /([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,
            (e, r, o, i, a) =>
              ("$" == i) == !!o
                ? e
                : (r || "--" == i ? "calc(" : "") +
                  "var(--" +
                  ("$" === i
                    ? te(t) +
                      (a.includes("$") ? "" : te(n)) +
                      a.replace(/\$/g, "-")
                    : a) +
                  ")" +
                  (r || "--" == i ? "*" + (r || "") + (o || "1") + ")" : "")
          ),
        re = /\s*,\s*(?![^()]*\))/,
        oe = Object.prototype.toString,
        ie = (e, t, n, r, o) => {
          let i, a, s;
          const l = (e, t, n) => {
            let c, u;
            const f = (e) => {
              for (c in e) {
                const h = 64 === c.charCodeAt(0),
                  m = h && Array.isArray(e[c]) ? e[c] : [e[c]];
                for (u of m) {
                  const e = /[A-Z]/.test((p = c))
                      ? p
                      : p.replace(/-[^]/g, (e) => e[1].toUpperCase()),
                    m =
                      "object" == typeof u &&
                      u &&
                      u.toString === oe &&
                      (!r.utils[e] || !t.length);
                  if (e in r.utils && !m) {
                    const t = r.utils[e];
                    if (t !== a) {
                      (a = t), f(t(u)), (a = null);
                      continue;
                    }
                  } else if (e in Y) {
                    const t = Y[e];
                    if (t !== s) {
                      (s = t), f(t(u)), (s = null);
                      continue;
                    }
                  }
                  if (
                    (h &&
                      ((d =
                        c.slice(1) in r.media
                          ? "@media " + r.media[c.slice(1)]
                          : c),
                      (c = d.replace(
                        /\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,
                        (e, t, n, r, o, i) => {
                          const a = X.test(t),
                            s = 0.0625 * (a ? -1 : 1),
                            [l, c] = a ? [r, t] : [t, r];
                          return (
                            "(" +
                            ("=" === n[0]
                              ? ""
                              : (">" === n[0]) === a
                              ? "max-"
                              : "min-") +
                            l +
                            ":" +
                            ("=" !== n[0] && 1 === n.length
                              ? c.replace(
                                  X,
                                  (e, t, r) =>
                                    Number(t) + s * (">" === n ? 1 : -1) + r
                                )
                              : c) +
                            (o
                              ? ") and (" +
                                (">" === o[0] ? "min-" : "max-") +
                                l +
                                ":" +
                                (1 === o.length
                                  ? i.replace(
                                      X,
                                      (e, t, n) =>
                                        Number(t) + s * (">" === o ? -1 : 1) + n
                                    )
                                  : i)
                              : "") +
                            ")"
                          );
                        }
                      ))),
                    m)
                  ) {
                    const e = h ? n.concat(c) : [...n],
                      r = h ? [...t] : Z(t, c.split(re));
                    void 0 !== i && o(ae(...i)), (i = void 0), l(u, r, e);
                  } else
                    void 0 === i && (i = [[], t, n]),
                      (c =
                        h || 36 !== c.charCodeAt(0)
                          ? c
                          : `--${te(r.prefix)}${c
                              .slice(1)
                              .replace(/\$/g, "-")}`),
                      (u = m
                        ? u
                        : "number" == typeof u
                        ? u && e in se
                          ? String(u) + "px"
                          : String(u)
                        : ne(
                            q(e, null == u ? "" : u),
                            r.prefix,
                            r.themeMap[e]
                          )),
                      i[0].push(`${h ? `${c} ` : `${Q(c)}:`}${u}`);
                }
              }
              var d, p;
            };
            f(e), void 0 !== i && o(ae(...i)), (i = void 0);
          };
          l(e, t, n);
        },
        ae = (e, t, n) =>
          `${n.map((e) => `${e}{`).join("")}${
            t.length ? `${t.join(",")}{` : ""
          }${e.join(";")}${t.length ? "}" : ""}${Array(
            n.length ? n.length + 1 : 0
          ).join("}")}`,
        se = {
          animationDelay: 1,
          animationDuration: 1,
          backgroundSize: 1,
          blockSize: 1,
          border: 1,
          borderBlock: 1,
          borderBlockEnd: 1,
          borderBlockEndWidth: 1,
          borderBlockStart: 1,
          borderBlockStartWidth: 1,
          borderBlockWidth: 1,
          borderBottom: 1,
          borderBottomLeftRadius: 1,
          borderBottomRightRadius: 1,
          borderBottomWidth: 1,
          borderEndEndRadius: 1,
          borderEndStartRadius: 1,
          borderInlineEnd: 1,
          borderInlineEndWidth: 1,
          borderInlineStart: 1,
          borderInlineStartWidth: 1,
          borderInlineWidth: 1,
          borderLeft: 1,
          borderLeftWidth: 1,
          borderRadius: 1,
          borderRight: 1,
          borderRightWidth: 1,
          borderSpacing: 1,
          borderStartEndRadius: 1,
          borderStartStartRadius: 1,
          borderTop: 1,
          borderTopLeftRadius: 1,
          borderTopRightRadius: 1,
          borderTopWidth: 1,
          borderWidth: 1,
          bottom: 1,
          columnGap: 1,
          columnRule: 1,
          columnRuleWidth: 1,
          columnWidth: 1,
          containIntrinsicSize: 1,
          flexBasis: 1,
          fontSize: 1,
          gap: 1,
          gridAutoColumns: 1,
          gridAutoRows: 1,
          gridTemplateColumns: 1,
          gridTemplateRows: 1,
          height: 1,
          inlineSize: 1,
          inset: 1,
          insetBlock: 1,
          insetBlockEnd: 1,
          insetBlockStart: 1,
          insetInline: 1,
          insetInlineEnd: 1,
          insetInlineStart: 1,
          left: 1,
          letterSpacing: 1,
          margin: 1,
          marginBlock: 1,
          marginBlockEnd: 1,
          marginBlockStart: 1,
          marginBottom: 1,
          marginInline: 1,
          marginInlineEnd: 1,
          marginInlineStart: 1,
          marginLeft: 1,
          marginRight: 1,
          marginTop: 1,
          maxBlockSize: 1,
          maxHeight: 1,
          maxInlineSize: 1,
          maxWidth: 1,
          minBlockSize: 1,
          minHeight: 1,
          minInlineSize: 1,
          minWidth: 1,
          offsetDistance: 1,
          offsetRotate: 1,
          outline: 1,
          outlineOffset: 1,
          outlineWidth: 1,
          overflowClipMargin: 1,
          padding: 1,
          paddingBlock: 1,
          paddingBlockEnd: 1,
          paddingBlockStart: 1,
          paddingBottom: 1,
          paddingInline: 1,
          paddingInlineEnd: 1,
          paddingInlineStart: 1,
          paddingLeft: 1,
          paddingRight: 1,
          paddingTop: 1,
          perspective: 1,
          right: 1,
          rowGap: 1,
          scrollMargin: 1,
          scrollMarginBlock: 1,
          scrollMarginBlockEnd: 1,
          scrollMarginBlockStart: 1,
          scrollMarginBottom: 1,
          scrollMarginInline: 1,
          scrollMarginInlineEnd: 1,
          scrollMarginInlineStart: 1,
          scrollMarginLeft: 1,
          scrollMarginRight: 1,
          scrollMarginTop: 1,
          scrollPadding: 1,
          scrollPaddingBlock: 1,
          scrollPaddingBlockEnd: 1,
          scrollPaddingBlockStart: 1,
          scrollPaddingBottom: 1,
          scrollPaddingInline: 1,
          scrollPaddingInlineEnd: 1,
          scrollPaddingInlineStart: 1,
          scrollPaddingLeft: 1,
          scrollPaddingRight: 1,
          scrollPaddingTop: 1,
          shapeMargin: 1,
          textDecoration: 1,
          textDecorationThickness: 1,
          textIndent: 1,
          textUnderlineOffset: 1,
          top: 1,
          transitionDelay: 1,
          transitionDuration: 1,
          verticalAlign: 1,
          width: 1,
          wordSpacing: 1,
        },
        le = (e) => String.fromCharCode(e + (e > 25 ? 39 : 97)),
        ce = (e) =>
          ((e) => {
            let t,
              n = "";
            for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = le(t % 52) + n;
            return le(t % 52) + n;
          })(
            ((e, t) => {
              let n = t.length;
              for (; n; ) e = (33 * e) ^ t.charCodeAt(--n);
              return e;
            })(5381, JSON.stringify(e)) >>> 0
          ),
        ue = [
          "themed",
          "global",
          "styled",
          "onevar",
          "resonevar",
          "allvar",
          "inline",
        ],
        fe = (e) => {
          if (e.href && !e.href.startsWith(location.origin)) return !1;
          try {
            return e.cssRules, !0;
          } catch (e) {
            return !1;
          }
        },
        de = (e) => {
          let t;
          const n = () => {
            if (t) {
              const { rules: e, sheet: n } = t;
              if (!n.deleteRule) {
                for (; 3 === Object(Object(n.cssRules)[0]).type; )
                  n.cssRules.splice(0, 1);
                n.cssRules = [];
              }
              for (const t in e) delete e[t];
            }
            const r = Object(e).styleSheets || [];
            for (const e of r)
              if (fe(e)) {
                for (let r = 0, o = e.cssRules; o[r]; ++r) {
                  const i = Object(o[r]);
                  if (1 !== i.type) continue;
                  const a = Object(o[r + 1]);
                  if (4 !== a.type) continue;
                  ++r;
                  const { cssText: s } = i;
                  if (!s.startsWith("--sxs")) continue;
                  const l = s.slice(14, -3).trim().split(/\s+/),
                    c = ue[l[0]];
                  c &&
                    (t || (t = { sheet: e, reset: n, rules: {} }),
                    (t.rules[c] = { group: a, index: r, cache: new Set(l) }));
                }
                if (t) break;
              }
            if (!t) {
              const r = (e, t) => ({
                type: t,
                cssRules: [],
                insertRule(e, t) {
                  this.cssRules.splice(
                    t,
                    0,
                    r(
                      e,
                      { import: 3, undefined: 1 }[
                        (e.toLowerCase().match(/^@([a-z]+)/) || [])[1]
                      ] || 4
                    )
                  );
                },
                get cssText() {
                  return "@media{}" === e
                    ? `@media{${[].map
                        .call(this.cssRules, (e) => e.cssText)
                        .join("")}}`
                    : e;
                },
              });
              t = {
                sheet: e
                  ? (e.head || e).appendChild(document.createElement("style"))
                      .sheet
                  : r("", "text/css"),
                rules: {},
                reset: n,
                toString() {
                  const { cssRules: e } = t.sheet;
                  return [].map
                    .call(e, (n, r) => {
                      const { cssText: o } = n;
                      let i = "";
                      if (o.startsWith("--sxs")) return "";
                      if (
                        e[r - 1] &&
                        (i = e[r - 1].cssText).startsWith("--sxs")
                      ) {
                        if (!n.cssRules.length) return "";
                        for (const e in t.rules)
                          if (t.rules[e].group === n)
                            return `--sxs{--sxs:${[...t.rules[e].cache].join(
                              " "
                            )}}${o}`;
                        return n.cssRules.length ? `${i}${o}` : "";
                      }
                      return o;
                    })
                    .join("");
                },
              };
            }
            const { sheet: o, rules: i } = t;
            for (let e = ue.length - 1; e >= 0; --e) {
              const t = ue[e];
              if (!i[t]) {
                const n = ue[e + 1],
                  r = i[n] ? i[n].index : o.cssRules.length;
                o.insertRule("@media{}", r),
                  o.insertRule(`--sxs{--sxs:${e}}`, r),
                  (i[t] = {
                    group: o.cssRules[r + 1],
                    index: r,
                    cache: new Set([e]),
                  });
              }
              pe(i[t]);
            }
          };
          return n(), t;
        },
        pe = (e) => {
          const t = e.group;
          let n = t.cssRules.length;
          e.apply = (e) => {
            try {
              t.insertRule(e, n), ++n;
            } catch {}
          };
        },
        he = Symbol(),
        me = j(),
        ge = (e, t) =>
          me(e, () => (...n) => {
            let r = { type: null, composers: new Set() };
            for (const t of n)
              if (null != t)
                if (t[U]) {
                  null == r.type && (r.type = t[U].type);
                  for (const e of t[U].composers) r.composers.add(e);
                } else
                  t.constructor !== Object || t.$$typeof
                    ? null == r.type && (r.type = t)
                    : r.composers.add(ve(t, e));
            return (
              null == r.type && (r.type = "span"),
              r.composers.size || r.composers.add(["PJLV", {}, [], [], {}, []]),
              ye(e, r, t)
            );
          }),
        ve = (
          { variants: e, compoundVariants: t, defaultVariants: n, ...r },
          o
        ) => {
          const i = `${te(o.prefix)}c-${ce(r)}`,
            a = [],
            s = [],
            l = Object.create(null),
            c = [];
          for (const d in n) l[d] = String(n[d]);
          if ("object" == typeof e && e)
            for (const d in e) {
              (u = l), (f = d), $.call(u, f) || (l[d] = "undefined");
              const t = e[d];
              for (const e in t) {
                const n = { [d]: String(e) };
                "undefined" === String(e) && c.push(d);
                const r = t[e],
                  o = [n, r, !K(r)];
                a.push(o);
              }
            }
          var u, f;
          if ("object" == typeof t && t)
            for (const d of t) {
              let { css: e, ...t } = d;
              e = ("object" == typeof e && e) || {};
              for (const r in t) t[r] = String(t[r]);
              const n = [t, e, !K(e)];
              s.push(n);
            }
          return [i, r, a, s, l, c];
        },
        ye = (e, t, n) => {
          const [r, o, i, a] = be(t.composers),
            s =
              "function" == typeof t.type || t.type.$$typeof
                ? ((e) => {
                    function t() {
                      for (let n = 0; n < t[he].length; n++) {
                        const [r, o] = t[he][n];
                        e.rules[r].apply(o);
                      }
                      return (t[he] = []), null;
                    }
                    return (
                      (t[he] = []),
                      (t.rules = {}),
                      ue.forEach(
                        (e) =>
                          (t.rules[e] = { apply: (n) => t[he].push([e, n]) })
                      ),
                      t
                    );
                  })(n)
                : null,
            l = (s || n).rules,
            c = `.${r}${
              o.length > 1 ? `:where(.${o.slice(1).join(".")})` : ""
            }`,
            u = (u) => {
              u = ("object" == typeof u && u) || Be;
              const { css: f, ...d } = u,
                p = {};
              for (const e in i)
                if ((delete d[e], e in u)) {
                  let t = u[e];
                  "object" == typeof t && t
                    ? (p[e] = { "@initial": i[e], ...t })
                    : ((t = String(t)),
                      (p[e] = "undefined" !== t || a.has(e) ? t : i[e]));
                } else p[e] = i[e];
              const h = new Set([...o]);
              for (const [r, o, i, a] of t.composers) {
                n.rules.styled.cache.has(r) ||
                  (n.rules.styled.cache.add(r),
                  ie(o, [`.${r}`], [], e, (e) => {
                    l.styled.apply(e);
                  }));
                const t = Ae(i, p, e.media),
                  s = Ae(a, p, e.media, !0);
                for (const o of t)
                  if (void 0 !== o)
                    for (const [t, i, a] of o) {
                      const o = `${r}-${ce(i)}-${t}`;
                      h.add(o);
                      const s = (a ? n.rules.resonevar : n.rules.onevar).cache,
                        c = a ? l.resonevar : l.onevar;
                      s.has(o) ||
                        (s.add(o),
                        ie(i, [`.${o}`], [], e, (e) => {
                          c.apply(e);
                        }));
                    }
                for (const o of s)
                  if (void 0 !== o)
                    for (const [t, i] of o) {
                      const o = `${r}-${ce(i)}-${t}`;
                      h.add(o),
                        n.rules.allvar.cache.has(o) ||
                          (n.rules.allvar.cache.add(o),
                          ie(i, [`.${o}`], [], e, (e) => {
                            l.allvar.apply(e);
                          }));
                    }
              }
              if ("object" == typeof f && f) {
                const t = `${r}-i${ce(f)}-css`;
                h.add(t),
                  n.rules.inline.cache.has(t) ||
                    (n.rules.inline.cache.add(t),
                    ie(f, [`.${t}`], [], e, (e) => {
                      l.inline.apply(e);
                    }));
              }
              for (const e of String(u.className || "")
                .trim()
                .split(/\s+/))
                e && h.add(e);
              const m = (d.className = [...h].join(" "));
              return {
                type: t.type,
                className: m,
                selector: c,
                props: d,
                toString: () => m,
                deferredInjector: s,
              };
            };
          return J(u, {
            className: r,
            selector: c,
            [U]: t,
            toString: () => (n.rules.styled.cache.has(r) || u(), r),
          });
        },
        be = (e) => {
          let t = "";
          const n = [],
            r = {},
            o = [];
          for (const [i, , , , a, s] of e) {
            "" === t && (t = i), n.push(i), o.push(...s);
            for (const e in a) {
              const t = a[e];
              (void 0 === r[e] || "undefined" !== t || s.includes(t)) &&
                (r[e] = t);
            }
          }
          return [t, n, r, new Set(o)];
        },
        Ae = (e, t, n, r) => {
          const o = [];
          e: for (let [i, a, s] of e) {
            if (s) continue;
            let e,
              l = 0,
              c = !1;
            for (e in i) {
              const r = i[e];
              let o = t[e];
              if (o !== r) {
                if ("object" != typeof o || !o) continue e;
                {
                  let e,
                    t,
                    i = 0;
                  for (const a in o) {
                    if (r === String(o[a])) {
                      if ("@initial" !== a) {
                        const e = a.slice(1);
                        (t = t || []).push(
                          e in n ? n[e] : a.replace(/^@media ?/, "")
                        ),
                          (c = !0);
                      }
                      (l += i), (e = !0);
                    }
                    ++i;
                  }
                  if (
                    (t && t.length && (a = { ["@media " + t.join(", ")]: a }),
                    !e)
                  )
                    continue e;
                }
              }
            }
            (o[l] = o[l] || []).push([r ? "cv" : `${e}-${i[e]}`, a, c]);
          }
          return o;
        },
        Be = {},
        Ce = j(),
        xe = (e, t) =>
          Ce(e, () => (...n) => {
            const r = () => {
              for (let r of n) {
                r = ("object" == typeof r && r) || {};
                let n = ce(r);
                if (!t.rules.global.cache.has(n)) {
                  if ((t.rules.global.cache.add(n), "@import" in r)) {
                    let e =
                      [].indexOf.call(t.sheet.cssRules, t.rules.themed.group) -
                      1;
                    for (let n of [].concat(r["@import"]))
                      (n = n.includes('"') || n.includes("'") ? n : `"${n}"`),
                        t.sheet.insertRule(`@import ${n};`, e++);
                    delete r["@import"];
                  }
                  ie(r, [], [], e, (e) => {
                    t.rules.global.apply(e);
                  });
                }
              }
              return "";
            };
            return J(r, { toString: r });
          }),
        we = j(),
        _e = (e, t) =>
          we(e, () => (n) => {
            const r = `${te(e.prefix)}k-${ce(n)}`,
              o = () => {
                if (!t.rules.global.cache.has(r)) {
                  t.rules.global.cache.add(r);
                  const o = [];
                  ie(n, [], [], e, (e) => o.push(e));
                  const i = `@keyframes ${r}{${o.join("")}}`;
                  t.rules.global.apply(i);
                }
                return r;
              };
            return J(o, {
              get name() {
                return o();
              },
              toString: o,
            });
          }),
        Ee = class {
          constructor(e, t, n, r) {
            (this.token = null == e ? "" : String(e)),
              (this.value = null == t ? "" : String(t)),
              (this.scale = null == n ? "" : String(n)),
              (this.prefix = null == r ? "" : String(r));
          }
          get computedValue() {
            return "var(" + this.variable + ")";
          }
          get variable() {
            return "--" + te(this.prefix) + te(this.scale) + this.token;
          }
          toString() {
            return this.computedValue;
          }
        },
        Se = j(),
        Me = (e, t) =>
          Se(e, () => (n, r) => {
            r = ("object" == typeof n && n) || Object(r);
            const o = `.${(n =
                (n = "string" == typeof n ? n : "") ||
                `${te(e.prefix)}t-${ce(r)}`)}`,
              i = {},
              a = [];
            for (const t in r) {
              i[t] = {};
              for (const n in r[t]) {
                const o = `--${te(e.prefix)}${t}-${n}`,
                  s = ne(String(r[t][n]), e.prefix, t);
                (i[t][n] = new Ee(n, s, t, e.prefix)), a.push(`${o}:${s}`);
              }
            }
            const s = () => {
              if (a.length && !t.rules.themed.cache.has(n)) {
                t.rules.themed.cache.add(n);
                const o = `${r === e.theme ? ":root," : ""}.${n}{${a.join(
                  ";"
                )}}`;
                t.rules.themed.apply(o);
              }
              return n;
            };
            return {
              ...i,
              get className() {
                return s();
              },
              selector: o,
              toString: s,
            };
          }),
        Re = j(),
        Ie = j(),
        ke = (e) => {
          const t = ((e) => {
            let t = !1;
            const n = Re(e, (e) => {
              t = !0;
              const n =
                  "prefix" in (e = ("object" == typeof e && e) || {})
                    ? String(e.prefix)
                    : "",
                r = ("object" == typeof e.media && e.media) || {},
                o =
                  "object" == typeof e.root
                    ? e.root || null
                    : globalThis.document || null,
                i = ("object" == typeof e.theme && e.theme) || {},
                a = {
                  prefix: n,
                  media: r,
                  theme: i,
                  themeMap: ("object" == typeof e.themeMap && e.themeMap) || {
                    ...z,
                  },
                  utils: ("object" == typeof e.utils && e.utils) || {},
                },
                s = de(o),
                l = {
                  css: ge(a, s),
                  globalCss: xe(a, s),
                  keyframes: _e(a, s),
                  createTheme: Me(a, s),
                  reset() {
                    s.reset(), l.theme.toString();
                  },
                  theme: {},
                  sheet: s,
                  config: a,
                  prefix: n,
                  getCssText: s.toString,
                  toString: s.toString,
                };
              return String((l.theme = l.createTheme(i))), l;
            });
            return t || n.reset(), n;
          })(e);
          return (
            (t.styled = (({ config: e, sheet: t }) =>
              Ie(e, () => {
                const n = ge(e, t);
                return (...e) => {
                  const t = n(...e),
                    o = t[U].type,
                    i = r.forwardRef((e, n) => {
                      const i = (e && e.as) || o,
                        { props: a, deferredInjector: s } = t(e);
                      return (
                        delete a.as,
                        (a.ref = n),
                        s
                          ? r.createElement(
                              r.Fragment,
                              null,
                              r.createElement(i, a),
                              r.createElement(s, null)
                            )
                          : r.createElement(i, a)
                      );
                    });
                  return (
                    (i.className = t.className),
                    (i.displayName = `Styled.${o.displayName || o.name || o}`),
                    (i.selector = t.selector),
                    (i.toString = () => t.selector),
                    (i[U] = t[U]),
                    i
                  );
                };
              }))(t)),
            t
          );
        };
      const Te = {
        toVector: (e, t) => (
          void 0 === e && (e = t), Array.isArray(e) ? e : [e, e]
        ),
        add: (e, t) => [e[0] + t[0], e[1] + t[1]],
        sub: (e, t) => [e[0] - t[0], e[1] - t[1]],
        addTo(e, t) {
          (e[0] += t[0]), (e[1] += t[1]);
        },
        subTo(e, t) {
          (e[0] -= t[0]), (e[1] -= t[1]);
        },
      };
      function Pe(e, t, n) {
        return 0 === t || Math.abs(t) === 1 / 0
          ? Math.pow(e, 5 * n)
          : (e * t * n) / (t + n * e);
      }
      function Fe(e, t, n, r = 0.15) {
        return 0 === r
          ? (function (e, t, n) {
              return Math.max(t, Math.min(e, n));
            })(e, t, n)
          : e < t
          ? -Pe(t - e, n - t, r) + t
          : e > n
          ? +Pe(e - n, n - t, r) + n
          : e;
      }
      function De(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function Oe(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Le(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Oe(Object(n), !0).forEach(function (t) {
                De(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Oe(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      const Ge = {
        pointer: { start: "down", change: "move", end: "up" },
        mouse: { start: "down", change: "move", end: "up" },
        touch: { start: "start", change: "move", end: "end" },
        gesture: { start: "start", change: "change", end: "end" },
      };
      function He(e) {
        return e ? e[0].toUpperCase() + e.slice(1) : "";
      }
      const ze = ["gotpointercapture", "lostpointercapture"];
      function Ne(e) {
        let t = e.substring(2).toLowerCase();
        const n = !!~t.indexOf("passive");
        n && (t = t.replace("passive", ""));
        const r = ze.includes(t) ? "capturecapture" : "capture",
          o = !!~t.indexOf(r);
        return (
          o && (t = t.replace("capture", "")),
          { device: t, capture: o, passive: n }
        );
      }
      function je(e) {
        return "touches" in e;
      }
      function Ue(e) {
        return je(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse";
      }
      function Je(e) {
        return je(e)
          ? (function (e) {
              return "touchend" === e.type || "touchcancel" === e.type
                ? e.changedTouches
                : e.targetTouches;
            })(e)[0]
          : e;
      }
      function Ke(e) {
        return (function (e) {
          return Array.from(e.touches).filter((t) => {
            var n, r;
            return (
              t.target === e.currentTarget ||
              (null === (n = e.currentTarget) ||
              void 0 === n ||
              null === (r = n.contains) ||
              void 0 === r
                ? void 0
                : r.call(n, t.target))
            );
          });
        })(e).map((e) => e.identifier);
      }
      function $e(e) {
        const t = Je(e);
        return je(e) ? t.identifier : t.pointerId;
      }
      function Qe(e) {
        const t = Je(e);
        return [t.clientX, t.clientY];
      }
      function We(e, ...t) {
        return "function" === typeof e ? e(...t) : e;
      }
      function Ve() {}
      function Ye(...e) {
        return 0 === e.length
          ? Ve
          : 1 === e.length
          ? e[0]
          : function () {
              let t;
              for (const n of e) t = n.apply(this, arguments) || t;
              return t;
            };
      }
      function Xe(e, t) {
        return Object.assign({}, t, e || {});
      }
      class Ze {
        constructor(e, t, n) {
          (this.ctrl = e),
            (this.args = t),
            (this.key = n),
            this.state ||
              ((this.state = {}),
              this.computeValues([0, 0]),
              this.computeInitial(),
              this.init && this.init(),
              this.reset());
        }
        get state() {
          return this.ctrl.state[this.key];
        }
        set state(e) {
          this.ctrl.state[this.key] = e;
        }
        get shared() {
          return this.ctrl.state.shared;
        }
        get eventStore() {
          return this.ctrl.gestureEventStores[this.key];
        }
        get timeoutStore() {
          return this.ctrl.gestureTimeoutStores[this.key];
        }
        get config() {
          return this.ctrl.config[this.key];
        }
        get sharedConfig() {
          return this.ctrl.config.shared;
        }
        get handler() {
          return this.ctrl.handlers[this.key];
        }
        reset() {
          const { state: e, shared: t, ingKey: n, args: r } = this;
          (t[n] = e._active = e.active = e._blocked = e._force = !1),
            (e._step = [!1, !1]),
            (e.intentional = !1),
            (e._movement = [0, 0]),
            (e._distance = [0, 0]),
            (e._direction = [0, 0]),
            (e._delta = [0, 0]),
            (e._bounds = [
              [-1 / 0, 1 / 0],
              [-1 / 0, 1 / 0],
            ]),
            (e.args = r),
            (e.axis = void 0),
            (e.memo = void 0),
            (e.elapsedTime = 0),
            (e.direction = [0, 0]),
            (e.distance = [0, 0]),
            (e.overflow = [0, 0]),
            (e._movementBound = [!1, !1]),
            (e.velocity = [0, 0]),
            (e.movement = [0, 0]),
            (e.delta = [0, 0]),
            (e.timeStamp = 0);
        }
        start(e) {
          const t = this.state,
            n = this.config;
          t._active ||
            (this.reset(),
            this.computeInitial(),
            (t._active = !0),
            (t.target = e.target),
            (t.currentTarget = e.currentTarget),
            (t.lastOffset = n.from ? We(n.from, t) : t.offset),
            (t.offset = t.lastOffset)),
            (t.startTime = t.timeStamp = e.timeStamp);
        }
        computeValues(e) {
          const t = this.state;
          (t._values = e), (t.values = this.config.transform(e));
        }
        computeInitial() {
          const e = this.state;
          (e._initial = e._values), (e.initial = e.values);
        }
        compute(e) {
          const { state: t, config: n, shared: r } = this;
          t.args = this.args;
          let o = 0;
          if (
            (e &&
              ((t.event = e),
              n.preventDefault && e.cancelable && t.event.preventDefault(),
              (t.type = e.type),
              (r.touches =
                this.ctrl.pointerIds.size || this.ctrl.touchIds.size),
              (r.locked = !!document.pointerLockElement),
              Object.assign(
                r,
                (function (e) {
                  const t = {};
                  if (
                    ("buttons" in e && (t.buttons = e.buttons), "shiftKey" in e)
                  ) {
                    const {
                      shiftKey: n,
                      altKey: r,
                      metaKey: o,
                      ctrlKey: i,
                    } = e;
                    Object.assign(t, {
                      shiftKey: n,
                      altKey: r,
                      metaKey: o,
                      ctrlKey: i,
                    });
                  }
                  return t;
                })(e)
              ),
              (r.down = r.pressed = r.buttons % 2 === 1 || r.touches > 0),
              (o = e.timeStamp - t.timeStamp),
              (t.timeStamp = e.timeStamp),
              (t.elapsedTime = t.timeStamp - t.startTime)),
            t._active)
          ) {
            const e = t._delta.map(Math.abs);
            Te.addTo(t._distance, e);
          }
          this.axisIntent && this.axisIntent(e);
          const [i, a] = t._movement,
            [s, l] = n.threshold,
            { _step: c, values: u } = t;
          if (
            (n.hasCustomTransform
              ? (!1 === c[0] && (c[0] = Math.abs(i) >= s && u[0]),
                !1 === c[1] && (c[1] = Math.abs(a) >= l && u[1]))
              : (!1 === c[0] && (c[0] = Math.abs(i) >= s && Math.sign(i) * s),
                !1 === c[1] && (c[1] = Math.abs(a) >= l && Math.sign(a) * l)),
            (t.intentional = !1 !== c[0] || !1 !== c[1]),
            !t.intentional)
          )
            return;
          const f = [0, 0];
          if (n.hasCustomTransform) {
            const [e, t] = u;
            (f[0] = !1 !== c[0] ? e - c[0] : 0),
              (f[1] = !1 !== c[1] ? t - c[1] : 0);
          } else
            (f[0] = !1 !== c[0] ? i - c[0] : 0),
              (f[1] = !1 !== c[1] ? a - c[1] : 0);
          this.restrictToAxis && !t._blocked && this.restrictToAxis(f);
          const d = t.offset,
            p = (t._active && !t._blocked) || t.active;
          p &&
            ((t.first = t._active && !t.active),
            (t.last = !t._active && t.active),
            (t.active = r[this.ingKey] = t._active),
            e &&
              (t.first &&
                ("bounds" in n && (t._bounds = We(n.bounds, t)),
                this.setup && this.setup()),
              (t.movement = f),
              this.computeOffset()));
          const [h, m] = t.offset,
            [[g, v], [y, b]] = t._bounds;
          (t.overflow = [
            h < g ? -1 : h > v ? 1 : 0,
            m < y ? -1 : m > b ? 1 : 0,
          ]),
            (t._movementBound[0] =
              !!t.overflow[0] &&
              (!1 === t._movementBound[0]
                ? t._movement[0]
                : t._movementBound[0])),
            (t._movementBound[1] =
              !!t.overflow[1] &&
              (!1 === t._movementBound[1]
                ? t._movement[1]
                : t._movementBound[1]));
          const A = (t._active && n.rubberband) || [0, 0];
          if (
            ((t.offset = (function (e, [t, n], [r, o]) {
              const [[i, a], [s, l]] = e;
              return [Fe(t, i, a, r), Fe(n, s, l, o)];
            })(t._bounds, t.offset, A)),
            (t.delta = Te.sub(t.offset, d)),
            this.computeMovement(),
            p && (!t.last || o > 32))
          ) {
            t.delta = Te.sub(t.offset, d);
            const e = t.delta.map(Math.abs);
            Te.addTo(t.distance, e),
              (t.direction = t.delta.map(Math.sign)),
              (t._direction = t._delta.map(Math.sign)),
              !t.first && o > 0 && (t.velocity = [e[0] / o, e[1] / o]);
          }
        }
        emit() {
          const e = this.state,
            t = this.shared,
            n = this.config;
          if (
            (e._active || this.clean(),
            (e._blocked || !e.intentional) && !e._force && !n.triggerAllEvents)
          )
            return;
          const r = this.handler(
            Le(Le(Le({}, t), e), {}, { [this.aliasKey]: e.values })
          );
          void 0 !== r && (e.memo = r);
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean();
        }
      }
      class qe extends Ze {
        constructor(...e) {
          super(...e), De(this, "aliasKey", "xy");
        }
        reset() {
          super.reset(), (this.state.axis = void 0);
        }
        init() {
          (this.state.offset = [0, 0]), (this.state.lastOffset = [0, 0]);
        }
        computeOffset() {
          this.state.offset = Te.add(
            this.state.lastOffset,
            this.state.movement
          );
        }
        computeMovement() {
          this.state.movement = Te.sub(
            this.state.offset,
            this.state.lastOffset
          );
        }
        axisIntent(e) {
          const t = this.state,
            n = this.config;
          if (!t.axis && e) {
            const r =
              "object" === typeof n.axisThreshold
                ? n.axisThreshold[Ue(e)]
                : n.axisThreshold;
            t.axis = (function ([e, t], n) {
              const r = Math.abs(e),
                o = Math.abs(t);
              return r > o && r > n ? "x" : o > r && o > n ? "y" : void 0;
            })(t._movement, r);
          }
          t._blocked =
            ((n.lockDirection || !!n.axis) && !t.axis) ||
            (!!n.axis && n.axis !== t.axis);
        }
        restrictToAxis(e) {
          if (this.config.axis || this.config.lockDirection)
            switch (this.state.axis) {
              case "x":
                e[1] = 0;
                break;
              case "y":
                e[0] = 0;
            }
        }
      }
      const et = (e) => e,
        tt = {
          enabled: (e = !0) => e,
          preventDefault: (e = !1) => e,
          triggerAllEvents: (e = !1) => e,
          rubberband(e = 0) {
            switch (e) {
              case !0:
                return [0.15, 0.15];
              case !1:
                return [0, 0];
              default:
                return Te.toVector(e);
            }
          },
          from: (e) =>
            "function" === typeof e ? e : null != e ? Te.toVector(e) : void 0,
          transform(e, t, n) {
            const r = e || n.shared.transform;
            return (this.hasCustomTransform = !!r), r || et;
          },
          threshold: (e) => Te.toVector(e, 0),
        };
      const nt = Le(
          Le({}, tt),
          {},
          {
            axis(e, t, { axis: n }) {
              if (((this.lockDirection = "lock" === n), !this.lockDirection))
                return n;
            },
            axisThreshold: (e = 0) => e,
            bounds(e = {}) {
              if ("function" === typeof e) return (t) => nt.bounds(e(t));
              if ("current" in e) return () => e.current;
              if ("function" === typeof HTMLElement && e instanceof HTMLElement)
                return e;
              const {
                left: t = -1 / 0,
                right: n = 1 / 0,
                top: r = -1 / 0,
                bottom: o = 1 / 0,
              } = e;
              return [
                [t, n],
                [r, o],
              ];
            },
          }
        ),
        rt = {
          ArrowRight: (e = 1) => [10 * e, 0],
          ArrowLeft: (e = 1) => [-10 * e, 0],
          ArrowUp: (e = 1) => [0, -10 * e],
          ArrowDown: (e = 1) => [0, 10 * e],
        };
      const ot =
        "undefined" !== typeof window &&
        window.document &&
        window.document.createElement;
      function it() {
        return (
          (ot && "ontouchstart" in window) ||
          (ot && window.navigator.maxTouchPoints > 1)
        );
      }
      const at = {
          isBrowser: ot,
          gesture: (function () {
            try {
              return "constructor" in GestureEvent;
            } catch (e) {
              return !1;
            }
          })(),
          touch: it(),
          touchscreen: it(),
          pointer: ot && "onpointerdown" in window,
          pointerLock: ot && "exitPointerLock" in window.document,
        },
        st = { mouse: 0, touch: 0, pen: 8 },
        lt = Le(
          Le({}, nt),
          {},
          {
            device(
              e,
              t,
              { pointer: { touch: n = !1, lock: r = !1, mouse: o = !1 } = {} }
            ) {
              return (
                (this.pointerLock = r && at.pointerLock),
                at.touch && n
                  ? "touch"
                  : this.pointerLock
                  ? "mouse"
                  : at.pointer && !o
                  ? "pointer"
                  : at.touch
                  ? "touch"
                  : "mouse"
              );
            },
            preventScrollAxis(e, t, { preventScroll: n }) {
              if (
                ((this.preventScrollDelay =
                  "number" === typeof n
                    ? n
                    : n || (void 0 === n && e)
                    ? 250
                    : void 0),
                at.touchscreen && !1 !== n)
              )
                return e || (void 0 !== n ? "y" : void 0);
            },
            pointerCapture(
              e,
              t,
              { pointer: { capture: n = !0, buttons: r = 1 } = {} }
            ) {
              return (
                (this.pointerButtons = r),
                !this.pointerLock && "pointer" === this.device && n
              );
            },
            threshold(
              e,
              t,
              { filterTaps: n = !1, tapsThreshold: r = 3, axis: o }
            ) {
              const i = Te.toVector(e, n ? r : o ? 1 : 0);
              return (this.filterTaps = n), (this.tapsThreshold = r), i;
            },
            swipe({
              velocity: e = 0.5,
              distance: t = 50,
              duration: n = 250,
            } = {}) {
              return {
                velocity: this.transform(Te.toVector(e)),
                distance: this.transform(Te.toVector(t)),
                duration: n,
              };
            },
            delay(e = 0) {
              switch (e) {
                case !0:
                  return 180;
                case !1:
                  return 0;
                default:
                  return e;
              }
            },
            axisThreshold: (e) => (e ? Le(Le({}, st), e) : st),
          }
        );
      Le(
        Le({}, tt),
        {},
        {
          device(e, t, { shared: n, pointer: { touch: r = !1 } = {} }) {
            if (n.target && !at.touch && at.gesture) return "gesture";
            if (at.touch && r) return "touch";
            if (at.touchscreen) {
              if (at.pointer) return "pointer";
              if (at.touch) return "touch";
            }
          },
          bounds(e, t, { scaleBounds: n = {}, angleBounds: r = {} }) {
            const o = (e) => {
                const t = Xe(We(n, e), { min: -1 / 0, max: 1 / 0 });
                return [t.min, t.max];
              },
              i = (e) => {
                const t = Xe(We(r, e), { min: -1 / 0, max: 1 / 0 });
                return [t.min, t.max];
              };
            return "function" !== typeof n && "function" !== typeof r
              ? [o(), i()]
              : (e) => [o(e), i(e)];
          },
          threshold(e, t, n) {
            this.lockDirection = "lock" === n.axis;
            return Te.toVector(e, this.lockDirection ? [0.1, 3] : 0);
          },
          modifierKey: (e) => (void 0 === e ? "ctrlKey" : e),
        }
      );
      Le(Le({}, nt), {}, { mouseOnly: (e = !0) => e });
      Le(Le({}, nt), {}, { mouseOnly: (e = !0) => e });
      const ct = new Map(),
        ut = new Map();
      const ft = {
        key: "drag",
        engine: class extends qe {
          constructor(...e) {
            super(...e), De(this, "ingKey", "dragging");
          }
          reset() {
            super.reset();
            const e = this.state;
            (e._pointerId = void 0),
              (e._pointerActive = !1),
              (e._keyboardActive = !1),
              (e._preventScroll = !1),
              (e._delayed = !1),
              (e.swipe = [0, 0]),
              (e.tap = !1),
              (e.canceled = !1),
              (e.cancel = this.cancel.bind(this));
          }
          setup() {
            const e = this.state;
            if (e._bounds instanceof HTMLElement) {
              const t = e._bounds.getBoundingClientRect(),
                n = e.currentTarget.getBoundingClientRect(),
                r = {
                  left: t.left - n.left + e.offset[0],
                  right: t.right - n.right + e.offset[0],
                  top: t.top - n.top + e.offset[1],
                  bottom: t.bottom - n.bottom + e.offset[1],
                };
              e._bounds = nt.bounds(r);
            }
          }
          cancel() {
            const e = this.state;
            e.canceled ||
              ((e.canceled = !0),
              (e._active = !1),
              setTimeout(() => {
                this.compute(), this.emit();
              }, 0));
          }
          setActive() {
            this.state._active =
              this.state._pointerActive || this.state._keyboardActive;
          }
          clean() {
            this.pointerClean(),
              (this.state._pointerActive = !1),
              (this.state._keyboardActive = !1),
              super.clean();
          }
          pointerDown(e) {
            const t = this.config,
              n = this.state;
            (null == e.buttons ||
              (Array.isArray(t.pointerButtons)
                ? t.pointerButtons.includes(e.buttons)
                : -1 === t.pointerButtons || t.pointerButtons === e.buttons)) &&
              (this.ctrl.setEventIds(e),
              t.pointerCapture && e.target.setPointerCapture(e.pointerId),
              n._pointerActive ||
                (this.start(e),
                this.setupPointer(e),
                (n._pointerId = $e(e)),
                (n._pointerActive = !0),
                this.computeValues(Qe(e)),
                this.computeInitial(),
                t.preventScrollAxis && "mouse" !== Ue(e)
                  ? ((n._active = !1), this.setupScrollPrevention(e))
                  : t.delay > 0
                  ? (this.setupDelayTrigger(e),
                    t.triggerAllEvents && (this.compute(e), this.emit()))
                  : this.startPointerDrag(e)));
          }
          startPointerDrag(e) {
            const t = this.state;
            (t._active = !0),
              (t._preventScroll = !0),
              (t._delayed = !1),
              this.compute(e),
              this.emit();
          }
          pointerMove(e) {
            const t = this.state,
              n = this.config;
            if (!t._pointerActive) return;
            if (t.type === e.type && e.timeStamp === t.timeStamp) return;
            const r = $e(e);
            if (void 0 !== t._pointerId && r !== t._pointerId) return;
            const o = Qe(e);
            return (
              document.pointerLockElement === e.target
                ? (t._delta = [e.movementX, e.movementY])
                : ((t._delta = Te.sub(o, t._values)), this.computeValues(o)),
              Te.addTo(t._movement, t._delta),
              this.compute(e),
              t._delayed && t.intentional
                ? (this.timeoutStore.remove("dragDelay"),
                  (t.active = !1),
                  void this.startPointerDrag(e))
                : n.preventScrollAxis && !t._preventScroll
                ? t.axis
                  ? t.axis === n.preventScrollAxis ||
                    "xy" === n.preventScrollAxis
                    ? ((t._active = !1), void this.clean())
                    : (this.timeoutStore.remove("startPointerDrag"),
                      void this.startPointerDrag(e))
                  : void 0
                : void this.emit()
            );
          }
          pointerUp(e) {
            this.ctrl.setEventIds(e);
            try {
              this.config.pointerCapture &&
                e.target.hasPointerCapture(e.pointerId) &&
                e.target.releasePointerCapture(e.pointerId);
            } catch (a) {
              0;
            }
            const t = this.state,
              n = this.config;
            if (!t._active || !t._pointerActive) return;
            const r = $e(e);
            if (void 0 !== t._pointerId && r !== t._pointerId) return;
            (this.state._pointerActive = !1), this.setActive(), this.compute(e);
            const [o, i] = t._distance;
            if (
              ((t.tap = o <= n.tapsThreshold && i <= n.tapsThreshold),
              t.tap && n.filterTaps)
            )
              t._force = !0;
            else {
              const [e, r] = t.direction,
                [o, i] = t.velocity,
                [a, s] = t.movement,
                [l, c] = n.swipe.velocity,
                [u, f] = n.swipe.distance,
                d = n.swipe.duration;
              t.elapsedTime < d &&
                (Math.abs(o) > l && Math.abs(a) > u && (t.swipe[0] = e),
                Math.abs(i) > c && Math.abs(s) > f && (t.swipe[1] = r));
            }
            this.emit();
          }
          pointerClick(e) {
            this.state.tap || (e.preventDefault(), e.stopPropagation());
          }
          setupPointer(e) {
            const t = this.config,
              n = t.device;
            t.pointerLock && e.currentTarget.requestPointerLock(),
              t.pointerCapture ||
                (this.eventStore.add(
                  this.sharedConfig.window,
                  n,
                  "change",
                  this.pointerMove.bind(this)
                ),
                this.eventStore.add(
                  this.sharedConfig.window,
                  n,
                  "end",
                  this.pointerUp.bind(this)
                ),
                this.eventStore.add(
                  this.sharedConfig.window,
                  n,
                  "cancel",
                  this.pointerUp.bind(this)
                ));
          }
          pointerClean() {
            this.config.pointerLock &&
              document.pointerLockElement === this.state.currentTarget &&
              document.exitPointerLock();
          }
          preventScroll(e) {
            this.state._preventScroll && e.cancelable && e.preventDefault();
          }
          setupScrollPrevention(e) {
            !(function (e) {
              "persist" in e && "function" === typeof e.persist && e.persist();
            })(e),
              this.eventStore.add(
                this.sharedConfig.window,
                "touch",
                "change",
                this.preventScroll.bind(this),
                { passive: !1 }
              ),
              this.eventStore.add(
                this.sharedConfig.window,
                "touch",
                "end",
                this.clean.bind(this)
              ),
              this.eventStore.add(
                this.sharedConfig.window,
                "touch",
                "cancel",
                this.clean.bind(this)
              ),
              this.timeoutStore.add(
                "startPointerDrag",
                this.startPointerDrag.bind(this),
                this.config.preventScrollDelay,
                e
              );
          }
          setupDelayTrigger(e) {
            (this.state._delayed = !0),
              this.timeoutStore.add(
                "dragDelay",
                () => {
                  (this.state._step = [0, 0]), this.startPointerDrag(e);
                },
                this.config.delay
              );
          }
          keyDown(e) {
            const t = rt[e.key];
            if (t) {
              const n = this.state,
                r = e.shiftKey ? 10 : e.altKey ? 0.1 : 1;
              (n._delta = t(r)),
                this.start(e),
                (n._keyboardActive = !0),
                Te.addTo(n._movement, n._delta),
                this.compute(e),
                this.emit();
            }
          }
          keyUp(e) {
            e.key in rt &&
              ((this.state._keyboardActive = !1),
              this.setActive(),
              this.compute(e),
              this.emit());
          }
          bind(e) {
            const t = this.config.device;
            e(t, "start", this.pointerDown.bind(this)),
              this.config.pointerCapture &&
                (e(t, "change", this.pointerMove.bind(this)),
                e(t, "end", this.pointerUp.bind(this)),
                e(t, "cancel", this.pointerUp.bind(this)),
                e("lostPointerCapture", "", this.pointerUp.bind(this))),
              e("key", "down", this.keyDown.bind(this)),
              e("key", "up", this.keyUp.bind(this)),
              this.config.filterTaps &&
                e("click", "", this.pointerClick.bind(this), {
                  capture: !0,
                  passive: !1,
                });
          }
        },
        resolver: lt,
      };
      function dt(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      const pt = {
          target(e) {
            if (e) return () => ("current" in e ? e.current : e);
          },
          enabled: (e = !0) => e,
          window: (e = at.isBrowser ? window : void 0) => e,
          eventOptions: ({ passive: e = !0, capture: t = !1 } = {}) => ({
            passive: e,
            capture: t,
          }),
          transform: (e) => e,
        },
        ht = ["target", "eventOptions", "window", "enabled", "transform"];
      function mt(e = {}, t) {
        const n = {};
        for (const [r, o] of Object.entries(t))
          switch (typeof o) {
            case "function":
              n[r] = o.call(n, e[r], r, e);
              break;
            case "object":
              n[r] = mt(e[r], o);
              break;
            case "boolean":
              o && (n[r] = e[r]);
          }
        return n;
      }
      class gt {
        constructor(e) {
          De(this, "_listeners", []), (this._ctrl = e);
        }
        add(e, t, n, r, o) {
          const i = (function (e, t = "") {
              const n = Ge[e];
              return e + ((n && n[t]) || t);
            })(t, n),
            a = Le(Le({}, this._ctrl.config.shared.eventOptions), o);
          e.addEventListener(i, r, a),
            this._listeners.push(() => e.removeEventListener(i, r, a));
        }
        clean() {
          this._listeners.forEach((e) => e()), (this._listeners = []);
        }
      }
      class vt {
        constructor() {
          De(this, "_timeouts", new Map());
        }
        add(e, t, n = 140, ...r) {
          this.remove(e), this._timeouts.set(e, window.setTimeout(t, n, ...r));
        }
        remove(e) {
          const t = this._timeouts.get(e);
          t && window.clearTimeout(t);
        }
        clean() {
          this._timeouts.forEach((e) => {
            window.clearTimeout(e);
          }),
            this._timeouts.clear();
        }
      }
      class yt {
        constructor(e) {
          De(this, "gestures", new Set()),
            De(this, "_targetEventStore", new gt(this)),
            De(this, "gestureEventStores", {}),
            De(this, "gestureTimeoutStores", {}),
            De(this, "handlers", {}),
            De(this, "config", {}),
            De(this, "pointerIds", new Set()),
            De(this, "touchIds", new Set()),
            De(this, "state", {
              shared: { shiftKey: !1, metaKey: !1, ctrlKey: !1, altKey: !1 },
            }),
            (function (e, t) {
              t.drag && bt(e, "drag");
              t.wheel && bt(e, "wheel");
              t.scroll && bt(e, "scroll");
              t.move && bt(e, "move");
              t.pinch && bt(e, "pinch");
              t.hover && bt(e, "hover");
            })(this, e);
        }
        setEventIds(e) {
          je(e)
            ? (this.touchIds = new Set(Ke(e)))
            : "pointerId" in e &&
              ("pointerup" === e.type || "pointercancel" === e.type
                ? this.pointerIds.delete(e.pointerId)
                : "pointerdown" === e.type && this.pointerIds.add(e.pointerId));
        }
        applyHandlers(e, t) {
          (this.handlers = e), (this.nativeHandlers = t);
        }
        applyConfig(e, t) {
          this.config = (function (e, t) {
            const n = e,
              {
                target: r,
                eventOptions: o,
                window: i,
                enabled: a,
                transform: s,
              } = n,
              l = dt(n, ht),
              c = {
                shared: mt(
                  {
                    target: r,
                    eventOptions: o,
                    window: i,
                    enabled: a,
                    transform: s,
                  },
                  pt
                ),
              };
            if (t) {
              const e = ut.get(t);
              c[t] = mt(Le({ shared: c.shared }, l), e);
            } else
              for (const u in l) {
                const e = ut.get(u);
                e && (c[u] = mt(Le({ shared: c.shared }, l[u]), e));
              }
            return c;
          })(e, t);
        }
        clean() {
          this._targetEventStore.clean();
          for (const e of this.gestures)
            this.gestureEventStores[e].clean(),
              this.gestureTimeoutStores[e].clean();
        }
        effect() {
          return (
            this.config.shared.target && this.bind(),
            () => this._targetEventStore.clean()
          );
        }
        bind(...e) {
          const t = this.config.shared,
            n = t.eventOptions,
            r = {};
          let o;
          if (t.target && ((o = t.target()), !o)) return;
          const i = At(r, n, !!o);
          if (t.enabled) {
            for (const t of this.gestures)
              if (this.config[t].enabled) {
                new (ct.get(t))(this, e, t).bind(i);
              }
            for (const t in this.nativeHandlers)
              i(
                t,
                "",
                (n) =>
                  this.nativeHandlers[t](
                    Le(Le({}, this.state.shared), {}, { event: n, args: e })
                  ),
                void 0,
                !0
              );
          }
          for (const a in r) r[a] = Ye(...r[a]);
          if (!o) return r;
          for (const a in r) {
            const { device: e, capture: t, passive: n } = Ne(a);
            this._targetEventStore.add(o, e, "", r[a], {
              capture: t,
              passive: n,
            });
          }
        }
      }
      function bt(e, t) {
        e.gestures.add(t),
          (e.gestureEventStores[t] = new gt(e)),
          (e.gestureTimeoutStores[t] = new vt());
      }
      const At =
        (e, t, n) =>
        (r, o, i, a = {}, s = !1) => {
          var l, c;
          const u = null !== (l = a.capture) && void 0 !== l ? l : t.capture,
            f = null !== (c = a.passive) && void 0 !== c ? c : t.passive;
          let d = s
            ? r
            : (function (e, t = "", n = !1) {
                const r = Ge[e],
                  o = (r && r[t]) || t;
                return "on" + He(e) + He(o) + (n ? "Capture" : "");
              })(r, o, u);
          n && f && (d += "Passive"), (e[d] = e[d] || []), e[d].push(i);
        };
      function Bt(e, t = {}, n, o) {
        const i = r.useMemo(() => new yt(e), []);
        if (
          (i.applyHandlers(e, o),
          i.applyConfig(t, n),
          r.useEffect(i.effect.bind(i)),
          r.useEffect(() => i.clean.bind(i), []),
          void 0 === t.target)
        )
          return i.bind.bind(i);
      }
      function Ct(e, t) {
        var n;
        return (
          (n = ft),
          ct.set(n.key, n.engine),
          ut.set(n.key, n.resolver),
          Bt({ drag: e }, t || {}, "drag")
        );
      }
      const xt = Boolean(
          null === globalThis || void 0 === globalThis
            ? void 0
            : globalThis.document
        )
          ? r.useLayoutEffect
          : () => {},
        wt = o["useId".toString()] || (() => {});
      let _t = 0;
      function Et(...e) {
        return (t) =>
          e.forEach((e) =>
            (function (e, t) {
              "function" == typeof e ? e(t) : null != e && (e.current = t);
            })(e, t)
          );
      }
      function St(...e) {
        return r.useCallback(Et(...e), e);
      }
      const Mt = r.forwardRef((e, t) => {
        const { children: n, ...o } = e;
        return r.Children.toArray(n).some(kt)
          ? r.createElement(
              r.Fragment,
              null,
              r.Children.map(n, (e) =>
                kt(e)
                  ? r.createElement(
                      Rt,
                      (0, a.Z)({}, o, { ref: t }),
                      e.props.children
                    )
                  : e
              )
            )
          : r.createElement(Rt, (0, a.Z)({}, o, { ref: t }), n);
      });
      Mt.displayName = "Slot";
      const Rt = r.forwardRef((e, t) => {
        const { children: n, ...o } = e;
        return r.isValidElement(n)
          ? r.cloneElement(n, { ...Tt(o, n.props), ref: Et(t, n.ref) })
          : r.Children.count(n) > 1
          ? r.Children.only(null)
          : null;
      });
      Rt.displayName = "SlotClone";
      const It = ({ children: e }) => r.createElement(r.Fragment, null, e);
      function kt(e) {
        return r.isValidElement(e) && e.type === It;
      }
      function Tt(e, t) {
        const n = { ...t };
        for (const r in t) {
          const o = e[r],
            i = t[r];
          /^on[A-Z]/.test(r)
            ? (n[r] = (...e) => {
                null == i || i(...e), null == o || o(...e);
              })
            : "style" === r
            ? (n[r] = { ...o, ...i })
            : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "));
        }
        return { ...e, ...n };
      }
      const Pt = [
          "a",
          "button",
          "div",
          "h2",
          "h3",
          "img",
          "li",
          "nav",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce(
          (e, t) => ({
            ...e,
            [t]: r.forwardRef((e, n) => {
              const { asChild: o, ...i } = e,
                s = o ? Mt : t;
              return (
                r.useEffect(() => {
                  window[Symbol.for("radix-ui")] = !0;
                }, []),
                e.as && console.error(Ft),
                r.createElement(s, (0, a.Z)({}, i, { ref: n }))
              );
            }),
          }),
          {}
        ),
        Ft =
          "Warning: The `as` prop has been removed in favour of `asChild`. For details, see https://radix-ui.com/docs/primitives/overview/styling#changing-the-rendered-element",
        Dt = r.forwardRef((e, t) =>
          r.createElement(
            Pt.span,
            (0, a.Z)({}, e, {
              ref: t,
              style: {
                ...e.style,
                position: "absolute",
                border: 0,
                width: 1,
                height: 1,
                padding: 0,
                margin: -1,
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                wordWrap: "normal",
              },
            })
          )
        ),
        Ot = Boolean(
          null === globalThis || void 0 === globalThis
            ? void 0
            : globalThis.document
        )
          ? r.useLayoutEffect
          : () => {},
        Lt = r.forwardRef((e, t) => {
          var n, o;
          const { containerRef: i, style: s, ...l } = e,
            c =
              null !== (n = null == i ? void 0 : i.current) && void 0 !== n
                ? n
                : null === globalThis ||
                  void 0 === globalThis ||
                  null === (o = globalThis.document) ||
                  void 0 === o
                ? void 0
                : o.body,
            [, u] = r.useState({});
          return (
            Ot(() => {
              u({});
            }, []),
            c
              ? h.createPortal(
                  r.createElement(
                    Pt.div,
                    (0, a.Z)({ "data-radix-portal": "" }, l, {
                      ref: t,
                      style:
                        c === document.body
                          ? {
                              position: "absolute",
                              top: 0,
                              left: 0,
                              zIndex: 2147483647,
                              ...s,
                            }
                          : void 0,
                    })
                  ),
                  c
                )
              : null
          );
        }),
        Gt = r.forwardRef((e, t) => {
          const { children: n, width: o = 10, height: i = 5, ...s } = e;
          return r.createElement(
            Pt.svg,
            (0, a.Z)({}, s, {
              ref: t,
              width: o,
              height: i,
              viewBox: "0 0 30 10",
              preserveAspectRatio: "none",
            }),
            e.asChild
              ? n
              : r.createElement("polygon", { points: "0,0 30,0 15,10" })
          );
        });
      function Ht(e) {
        const [t, n] = r.useState(void 0);
        return (
          r.useEffect(() => {
            if (e) {
              const t = new ResizeObserver((t) => {
                if (!Array.isArray(t)) return;
                if (!t.length) return;
                const r = t[0];
                let o, i;
                if ("borderBoxSize" in r) {
                  const e = r.borderBoxSize,
                    t = Array.isArray(e) ? e[0] : e;
                  (o = t.inlineSize), (i = t.blockSize);
                } else {
                  const t = e.getBoundingClientRect();
                  (o = t.width), (i = t.height);
                }
                n({ width: o, height: i });
              });
              return (
                t.observe(e, { box: "border-box" }),
                () => {
                  n(void 0), t.unobserve(e);
                }
              );
            }
          }, [e]),
          t
        );
      }
      let zt;
      const Nt = new Map();
      function jt() {
        const e = [];
        Nt.forEach((t, n) => {
          const r = n.getBoundingClientRect();
          var o, i;
          (i = r),
            ((o = t.rect).width !== i.width ||
              o.height !== i.height ||
              o.top !== i.top ||
              o.right !== i.right ||
              o.bottom !== i.bottom ||
              o.left !== i.left) &&
              ((t.rect = r), e.push(t));
        }),
          e.forEach((e) => {
            e.callbacks.forEach((t) => t(e.rect));
          }),
          (zt = requestAnimationFrame(jt));
      }
      function Ut(e) {
        const [t, n] = r.useState();
        return (
          r.useEffect(() => {
            if (e) {
              const t = (function (e, t) {
                const n = Nt.get(e);
                return (
                  void 0 === n
                    ? (Nt.set(e, { rect: {}, callbacks: [t] }),
                      1 === Nt.size && (zt = requestAnimationFrame(jt)))
                    : (n.callbacks.push(t), t(e.getBoundingClientRect())),
                  () => {
                    const n = Nt.get(e);
                    if (void 0 === n) return;
                    const r = n.callbacks.indexOf(t);
                    r > -1 && n.callbacks.splice(r, 1),
                      0 === n.callbacks.length &&
                        (Nt.delete(e),
                        0 === Nt.size && cancelAnimationFrame(zt));
                  }
                );
              })(e, n);
              return () => {
                n(void 0), t();
              };
            }
          }, [e]),
          t
        );
      }
      function Jt(e, t = []) {
        let n = [];
        const o = () => {
          const t = n.map((e) => r.createContext(e));
          return function (n) {
            const o = (null == n ? void 0 : n[e]) || t;
            return r.useMemo(
              () => ({ [`__scope${e}`]: { ...n, [e]: o } }),
              [n, o]
            );
          };
        };
        return (
          (o.scopeName = e),
          [
            function (t, o) {
              const i = r.createContext(o),
                a = n.length;
              function s(t) {
                const { scope: n, children: o, ...s } = t,
                  l = (null == n ? void 0 : n[e][a]) || i,
                  c = r.useMemo(() => s, Object.values(s));
                return r.createElement(l.Provider, { value: c }, o);
              }
              return (
                (n = [...n, o]),
                (s.displayName = t + "Provider"),
                [
                  s,
                  function (n, s) {
                    const l = (null == s ? void 0 : s[e][a]) || i,
                      c = r.useContext(l);
                    if (c) return c;
                    if (void 0 !== o) return o;
                    throw new Error(`\`${n}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            Kt(o, ...t),
          ]
        );
      }
      function Kt(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const n = () => {
          const n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
          return function (e) {
            const o = n.reduce(
              (t, { useScope: n, scopeName: r }) => ({
                ...t,
                ...n(e)[`__scope${r}`],
              }),
              {}
            );
            return r.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
          };
        };
        return (n.scopeName = t.scopeName), n;
      }
      function $t(e, t, n) {
        const r = e["x" === n ? "left" : "top"],
          o = "x" === n ? "width" : "height",
          i = e[o],
          a = t[o];
        return {
          before: r - a,
          start: r,
          center: r + (i - a) / 2,
          end: r + i - a,
          after: r + i,
        };
      }
      function Qt(e) {
        return {
          position: "absolute",
          top: 0,
          left: 0,
          minWidth: "max-content",
          willChange: "transform",
          transform: `translate3d(${Math.round(
            e.x + window.scrollX
          )}px, ${Math.round(e.y + window.scrollY)}px, 0)`,
        };
      }
      function Wt(e, t, n, r, o) {
        const i = "top" === t || "bottom" === t,
          a = o ? o.width : 0,
          s = o ? o.height : 0,
          l = a / 2 + r;
        let c = "",
          u = "";
        return (
          i
            ? ((c = {
                start: `${l}px`,
                center: "center",
                end: e.width - l + "px",
              }[n]),
              (u = "top" === t ? `${e.height + s}px` : -s + "px"))
            : ((c = "left" === t ? `${e.width + s}px` : -s + "px"),
              (u = {
                start: `${l}px`,
                center: "center",
                end: e.height - l + "px",
              }[n])),
          `${c} ${u}`
        );
      }
      const Vt = {
          position: "fixed",
          top: 0,
          left: 0,
          opacity: 0,
          transform: "translate3d(0, -200%, 0)",
        },
        Yt = { position: "absolute", opacity: 0 };
      function Xt({
        popperSize: e,
        arrowSize: t,
        arrowOffset: n,
        side: r,
        align: o,
      }) {
        const i = (e.width - t.width) / 2,
          a = (e.height - t.width) / 2,
          s = { top: 0, right: 90, bottom: 180, left: -90 }[r],
          l = Math.max(t.width, t.height),
          c = {
            width: `${l}px`,
            height: `${l}px`,
            transform: `rotate(${s}deg)`,
            willChange: "transform",
            position: "absolute",
            [r]: "100%",
            direction: Zt(r, o),
          };
        return (
          ("top" !== r && "bottom" !== r) ||
            ("start" === o && (c.left = `${n}px`),
            "center" === o && (c.left = `${i}px`),
            "end" === o && (c.right = `${n}px`)),
          ("left" !== r && "right" !== r) ||
            ("start" === o && (c.top = `${n}px`),
            "center" === o && (c.top = `${a}px`),
            "end" === o && (c.bottom = `${n}px`)),
          c
        );
      }
      function Zt(e, t) {
        return (("top" !== e && "right" !== e) || "end" !== t) &&
          (("bottom" !== e && "left" !== e) || "end" === t)
          ? "ltr"
          : "rtl";
      }
      function qt(e) {
        return { top: "bottom", right: "left", bottom: "top", left: "right" }[
          e
        ];
      }
      function en(e, t) {
        return {
          top: e.top < t.top,
          right: e.right > t.right,
          bottom: e.bottom > t.bottom,
          left: e.left < t.left,
        };
      }
      const [tn, nn] = Jt("Popper"),
        [rn, on] = tn("Popper"),
        an = r.forwardRef((e, t) => {
          const { __scopePopper: n, virtualRef: o, ...i } = e,
            s = on("PopperAnchor", n),
            l = r.useRef(null),
            c = St(t, l);
          return (
            r.useEffect(() => {
              s.onAnchorChange((null == o ? void 0 : o.current) || l.current);
            }),
            o ? null : r.createElement(Pt.div, (0, a.Z)({}, i, { ref: c }))
          );
        }),
        [sn, ln] = tn("PopperContent"),
        cn = (e) => {
          const { __scopePopper: t, children: n } = e,
            [o, i] = r.useState(null);
          return r.createElement(
            rn,
            { scope: t, anchor: o, onAnchorChange: i },
            n
          );
        },
        un = an,
        fn = r.forwardRef((e, t) => {
          const {
              __scopePopper: n,
              side: o = "bottom",
              sideOffset: i,
              align: s = "center",
              alignOffset: l,
              collisionTolerance: c,
              avoidCollisions: u = !0,
              ...f
            } = e,
            d = on("PopperContent", n),
            [p, h] = r.useState(),
            m = Ut(d.anchor),
            [g, v] = r.useState(null),
            y = Ht(g),
            [b, A] = r.useState(null),
            B = Ht(b),
            C = St(t, (e) => v(e)),
            x = (function () {
              const [e, t] = r.useState(void 0);
              return (
                r.useEffect(() => {
                  let e;
                  function n() {
                    t({ width: window.innerWidth, height: window.innerHeight });
                  }
                  function r() {
                    window.clearTimeout(e), (e = window.setTimeout(n, 100));
                  }
                  return (
                    n(),
                    window.addEventListener("resize", r),
                    () => window.removeEventListener("resize", r)
                  );
                }, []),
                e
              );
            })(),
            w = x ? DOMRect.fromRect({ ...x, x: 0, y: 0 }) : void 0,
            {
              popperStyles: _,
              arrowStyles: E,
              placedSide: S,
              placedAlign: M,
            } = (function ({
              anchorRect: e,
              popperSize: t,
              arrowSize: n,
              arrowOffset: r = 0,
              side: o,
              sideOffset: i = 0,
              align: a,
              alignOffset: s = 0,
              shouldAvoidCollisions: l = !0,
              collisionBoundariesRect: c,
              collisionTolerance: u = 0,
            }) {
              if (!e || !t || !c) return { popperStyles: Vt, arrowStyles: Yt };
              const f = (function (e, t, n = 0, r = 0, o) {
                  const i = o ? o.height : 0,
                    a = $t(t, e, "x"),
                    s = $t(t, e, "y"),
                    l = s.before - n - i,
                    c = s.after + n + i,
                    u = a.before - n - i,
                    f = a.after + n + i;
                  return {
                    top: {
                      start: { x: a.start + r, y: l },
                      center: { x: a.center, y: l },
                      end: { x: a.end - r, y: l },
                    },
                    right: {
                      start: { x: f, y: s.start + r },
                      center: { x: f, y: s.center },
                      end: { x: f, y: s.end - r },
                    },
                    bottom: {
                      start: { x: a.start + r, y: c },
                      center: { x: a.center, y: c },
                      end: { x: a.end - r, y: c },
                    },
                    left: {
                      start: { x: u, y: s.start + r },
                      center: { x: u, y: s.center },
                      end: { x: u, y: s.end - r },
                    },
                  };
                })(t, e, i, s, n),
                d = f[o][a];
              if (!1 === l) {
                const e = Qt(d);
                let i = Yt;
                return (
                  n &&
                    (i = Xt({
                      popperSize: t,
                      arrowSize: n,
                      arrowOffset: r,
                      side: o,
                      align: a,
                    })),
                  {
                    popperStyles: {
                      ...e,
                      "--radix-popper-transform-origin": Wt(t, o, a, r, n),
                    },
                    arrowStyles: i,
                    placedSide: o,
                    placedAlign: a,
                  }
                );
              }
              const p = DOMRect.fromRect({ ...t, ...d }),
                h =
                  ((m = c),
                  (g = u),
                  DOMRect.fromRect({
                    width: m.width - 2 * g,
                    height: m.height - 2 * g,
                    x: m.left + g,
                    y: m.top + g,
                  }));
              var m, g;
              const v = en(p, h),
                y = f[qt(o)][a],
                b = (function (e, t, n) {
                  const r = qt(e);
                  return t[e] && !n[r] ? r : e;
                })(o, v, en(DOMRect.fromRect({ ...t, ...y }), h)),
                A = (function (e, t, n, r, o) {
                  const i = "top" === n || "bottom" === n,
                    a = i ? "left" : "top",
                    s = i ? "right" : "bottom",
                    l = i ? "width" : "height",
                    c = t[l] > e[l];
                  return ("start" !== r && "center" !== r) ||
                    !((o[a] && c) || (o[s] && !c))
                    ? ("end" !== r && "center" !== r) ||
                      !((o[s] && c) || (o[a] && !c))
                      ? r
                      : "start"
                    : "end";
                })(t, e, o, a, v),
                B = Qt(f[b][A]);
              let C = Yt;
              return (
                n &&
                  (C = Xt({
                    popperSize: t,
                    arrowSize: n,
                    arrowOffset: r,
                    side: b,
                    align: A,
                  })),
                {
                  popperStyles: {
                    ...B,
                    "--radix-popper-transform-origin": Wt(t, b, A, r, n),
                  },
                  arrowStyles: C,
                  placedSide: b,
                  placedAlign: A,
                }
              );
            })({
              anchorRect: m,
              popperSize: y,
              arrowSize: B,
              arrowOffset: p,
              side: o,
              sideOffset: i,
              align: s,
              alignOffset: l,
              shouldAvoidCollisions: u,
              collisionBoundariesRect: w,
              collisionTolerance: c,
            }),
            R = void 0 !== S;
          return r.createElement(
            "div",
            { style: _, "data-radix-popper-content-wrapper": "" },
            r.createElement(
              sn,
              {
                scope: n,
                arrowStyles: E,
                onArrowChange: A,
                onArrowOffsetChange: h,
              },
              r.createElement(
                Pt.div,
                (0, a.Z)({ "data-side": S, "data-align": M }, f, {
                  style: { ...f.style, animation: R ? void 0 : "none" },
                  ref: C,
                })
              )
            )
          );
        }),
        dn = r.forwardRef(function (e, t) {
          const { __scopePopper: n, offset: o, ...i } = e,
            s = ln("PopperArrow", n),
            { onArrowOffsetChange: l } = s;
          return (
            r.useEffect(() => l(o), [l, o]),
            r.createElement(
              "span",
              { style: { ...s.arrowStyles, pointerEvents: "none" } },
              r.createElement(
                "span",
                {
                  ref: s.onArrowChange,
                  style: {
                    display: "inline-block",
                    verticalAlign: "top",
                    pointerEvents: "auto",
                  },
                },
                r.createElement(
                  Gt,
                  (0, a.Z)({}, i, {
                    ref: t,
                    style: { ...i.style, display: "block" },
                  })
                )
              )
            )
          );
        }),
        pn = Boolean(
          null === globalThis || void 0 === globalThis
            ? void 0
            : globalThis.document
        )
          ? r.useLayoutEffect
          : () => {};
      const hn = (e) => {
        const { present: t, children: n } = e,
          o = (function (e) {
            const [t, n] = r.useState(),
              o = r.useRef({}),
              i = r.useRef(e),
              a = r.useRef("none"),
              s = e ? "mounted" : "unmounted",
              [l, c] = (function (e, t) {
                return r.useReducer((e, n) => {
                  const r = t[e][n];
                  return null != r ? r : e;
                }, e);
              })(s, {
                mounted: {
                  UNMOUNT: "unmounted",
                  ANIMATION_OUT: "unmountSuspended",
                },
                unmountSuspended: {
                  MOUNT: "mounted",
                  ANIMATION_END: "unmounted",
                },
                unmounted: { MOUNT: "mounted" },
              });
            return (
              r.useEffect(() => {
                const e = mn(o.current);
                a.current = "mounted" === l ? e : "none";
              }, [l]),
              pn(() => {
                const t = o.current,
                  n = i.current;
                if (n !== e) {
                  const r = a.current,
                    o = mn(t);
                  if (e) c("MOUNT");
                  else if (
                    "none" === o ||
                    "none" === (null == t ? void 0 : t.display)
                  )
                    c("UNMOUNT");
                  else {
                    const e = r !== o;
                    c(n && e ? "ANIMATION_OUT" : "UNMOUNT");
                  }
                  i.current = e;
                }
              }, [e, c]),
              pn(() => {
                if (t) {
                  const e = (e) => {
                      const n = mn(o.current).includes(e.animationName);
                      e.target === t && n && c("ANIMATION_END");
                    },
                    n = (e) => {
                      e.target === t && (a.current = mn(o.current));
                    };
                  return (
                    t.addEventListener("animationstart", n),
                    t.addEventListener("animationcancel", e),
                    t.addEventListener("animationend", e),
                    () => {
                      t.removeEventListener("animationstart", n),
                        t.removeEventListener("animationcancel", e),
                        t.removeEventListener("animationend", e);
                    }
                  );
                }
              }, [t, c]),
              {
                isPresent: ["mounted", "unmountSuspended"].includes(l),
                ref: r.useCallback((e) => {
                  e && (o.current = getComputedStyle(e)), n(e);
                }, []),
              }
            );
          })(t),
          i =
            "function" == typeof n
              ? n({ present: o.isPresent })
              : r.Children.only(n),
          a = (function (...e) {
            return r.useCallback(
              (function (...e) {
                return (t) =>
                  e.forEach((e) =>
                    (function (e, t) {
                      "function" == typeof e
                        ? e(t)
                        : null != e && (e.current = t);
                    })(e, t)
                  );
              })(...e),
              e
            );
          })(o.ref, i.ref);
        return "function" == typeof n || o.isPresent
          ? r.cloneElement(i, { ref: a })
          : null;
      };
      function mn(e) {
        return (null == e ? void 0 : e.animationName) || "none";
      }
      function gn(e) {
        const t = r.useRef(e);
        return (
          r.useEffect(() => {
            t.current = e;
          }, [e]),
          t.current
        );
      }
      function vn(e) {
        const t = (function (e) {
          const t = r.useRef(e);
          return (
            r.useEffect(() => {
              t.current = e;
            }),
            r.useMemo(
              () =>
                (...e) => {
                  var n;
                  return null === (n = t.current) || void 0 === n
                    ? void 0
                    : n.call(t, ...e);
                },
              []
            )
          );
        })(e);
        r.useEffect(() => {
          const e = (e) => {
            "Escape" === e.key && t(e);
          };
          return (
            document.addEventListener("keydown", e),
            () => document.removeEventListener("keydown", e)
          );
        }, [t]);
      }
      function yn(e) {
        const t = r.useRef(e);
        return (
          r.useEffect(() => {
            t.current = e;
          }),
          r.useMemo(
            () =>
              (...e) => {
                var n;
                return null === (n = t.current) || void 0 === n
                  ? void 0
                  : n.call(t, ...e);
              },
            []
          )
        );
      }
      function bn(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((null == e || e(r), !1 === n || !r.defaultPrevented))
            return null == t ? void 0 : t(r);
        };
      }
      hn.displayName = "Presence";
      const [An, Bn] = Jt("Tooltip", [nn]),
        Cn = nn(),
        xn = 700,
        [wn, _n] = An("TooltipProvider", {
          isOpenDelayed: !0,
          delayDuration: xn,
          onOpen: () => {},
          onClose: () => {},
        }),
        [En, Sn] = An("Tooltip"),
        Mn = r.forwardRef((e, t) => {
          const { __scopeTooltip: n, ...o } = e,
            i = Sn("TooltipTrigger", n),
            s = Cn(n),
            l = St(t, i.onTriggerChange),
            c = r.useRef(!1),
            u = r.useCallback(() => (c.current = !1), []);
          return (
            r.useEffect(
              () => () => document.removeEventListener("mouseup", u),
              [u]
            ),
            r.createElement(
              un,
              (0, a.Z)({ asChild: !0 }, s),
              r.createElement(
                Pt.button,
                (0, a.Z)(
                  {
                    "aria-describedby": i.open ? i.contentId : void 0,
                    "data-state": i.stateAttribute,
                  },
                  o,
                  {
                    ref: l,
                    onMouseEnter: bn(e.onMouseEnter, i.onTriggerEnter),
                    onMouseLeave: bn(e.onMouseLeave, i.onClose),
                    onMouseDown: bn(e.onMouseDown, () => {
                      i.onClose(),
                        (c.current = !0),
                        document.addEventListener("mouseup", u, { once: !0 });
                    }),
                    onFocus: bn(e.onFocus, () => {
                      c.current || i.onOpen();
                    }),
                    onBlur: bn(e.onBlur, i.onClose),
                    onClick: bn(e.onClick, i.onClose),
                  }
                )
              )
            )
          );
        }),
        Rn = r.forwardRef((e, t) => {
          const { forceMount: n, ...o } = e,
            i = Sn("TooltipContent", e.__scopeTooltip);
          return r.createElement(
            hn,
            { present: n || i.open },
            r.createElement(In, (0, a.Z)({ ref: t }, o))
          );
        }),
        In = r.forwardRef((e, t) => {
          const {
              __scopeTooltip: n,
              children: o,
              "aria-label": i,
              portalled: s = !0,
              ...l
            } = e,
            c = Sn("TooltipContent", n),
            u = Cn(n),
            f = s ? Lt : r.Fragment,
            { onClose: d } = c;
          return (
            vn(() => d()),
            r.useEffect(
              () => (
                document.addEventListener("tooltip.open", d),
                () => document.removeEventListener("tooltip.open", d)
              ),
              [d]
            ),
            r.createElement(
              f,
              null,
              r.createElement(kn, { __scopeTooltip: n }),
              r.createElement(
                fn,
                (0, a.Z)({ "data-state": c.stateAttribute }, u, l, {
                  ref: t,
                  style: {
                    ...l.style,
                    "--radix-tooltip-content-transform-origin":
                      "var(--radix-popper-transform-origin)",
                  },
                }),
                r.createElement(It, null, o),
                r.createElement(
                  Dt,
                  { id: c.contentId, role: "tooltip" },
                  i || o
                )
              )
            )
          );
        });
      function kn(e) {
        const { __scopeTooltip: t } = e,
          n = Sn("CheckTriggerMoved", t),
          o = Ut(n.trigger),
          i = null == o ? void 0 : o.left,
          a = gn(i),
          s = null == o ? void 0 : o.top,
          l = gn(s),
          c = n.onClose;
        return (
          r.useEffect(() => {
            ((void 0 !== a && a !== i) || (void 0 !== l && l !== s)) && c();
          }, [c, a, l, i, s]),
          null
        );
      }
      const Tn = (e) => {
          const {
              __scopeTooltip: t,
              children: n,
              open: o,
              defaultOpen: i = !1,
              onOpenChange: a,
              delayDuration: s,
            } = e,
            l = _n("Tooltip", t),
            c = Cn(t),
            [u, f] = r.useState(null),
            d = (function (e) {
              const [t, n] = r.useState(wt());
              return (
                xt(() => {
                  e || n((e) => (null != e ? e : String(_t++)));
                }, [e]),
                e || (t ? `radix-${t}` : "")
              );
            })(),
            p = r.useRef(0),
            h = null != s ? s : l.delayDuration,
            m = r.useRef(!1),
            { onOpen: g, onClose: v } = l,
            [y = !1, b] = (function ({
              prop: e,
              defaultProp: t,
              onChange: n = () => {},
            }) {
              const [o, i] = (function ({ defaultProp: e, onChange: t }) {
                  const n = r.useState(e),
                    [o] = n,
                    i = r.useRef(o),
                    a = yn(t);
                  return (
                    r.useEffect(() => {
                      i.current !== o && (a(o), (i.current = o));
                    }, [o, i, a]),
                    n
                  );
                })({ defaultProp: t, onChange: n }),
                a = void 0 !== e,
                s = a ? e : o,
                l = yn(n);
              return [
                s,
                r.useCallback(
                  (t) => {
                    if (a) {
                      const n = t,
                        r = "function" == typeof t ? n(e) : t;
                      r !== e && l(r);
                    } else i(t);
                  },
                  [a, e, i, l]
                ),
              ];
            })({
              prop: o,
              defaultProp: i,
              onChange: (e) => {
                e &&
                  (document.dispatchEvent(new CustomEvent("tooltip.open")),
                  g()),
                  null == a || a(e);
              },
            }),
            A = r.useMemo(
              () =>
                y ? (m.current ? "delayed-open" : "instant-open") : "closed",
              [y]
            ),
            B = r.useCallback(() => {
              window.clearTimeout(p.current), (m.current = !1), b(!0);
            }, [b]),
            C = r.useCallback(() => {
              window.clearTimeout(p.current),
                (p.current = window.setTimeout(() => {
                  (m.current = !0), b(!0);
                }, h));
            }, [h, b]);
          return (
            r.useEffect(() => () => window.clearTimeout(p.current), []),
            r.createElement(
              cn,
              c,
              r.createElement(
                En,
                {
                  scope: t,
                  contentId: d,
                  open: y,
                  stateAttribute: A,
                  trigger: u,
                  onTriggerChange: f,
                  onTriggerEnter: r.useCallback(() => {
                    l.isOpenDelayed ? C() : B();
                  }, [l.isOpenDelayed, C, B]),
                  onOpen: r.useCallback(B, [B]),
                  onClose: r.useCallback(() => {
                    window.clearTimeout(p.current), b(!1), v();
                  }, [b, v]),
                },
                n
              )
            )
          );
        },
        Pn = Mn,
        Fn = Rn,
        Dn = r.forwardRef((e, t) => {
          const { __scopeTooltip: n, ...o } = e,
            i = Cn(n);
          return r.createElement(dn, (0, a.Z)({}, i, o, { ref: t }));
        });
      function On(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      let Ln;
      !(function (e) {
        (e[(e.UNSUPPORTED_INPUT = 0)] = "UNSUPPORTED_INPUT"),
          (e[(e.NO_COMPONENT_FOR_TYPE = 1)] = "NO_COMPONENT_FOR_TYPE"),
          (e[(e.UNKNOWN_INPUT = 2)] = "UNKNOWN_INPUT"),
          (e[(e.DUPLICATE_KEYS = 3)] = "DUPLICATE_KEYS"),
          (e[(e.ALREADY_REGISTERED_TYPE = 4)] = "ALREADY_REGISTERED_TYPE"),
          (e[(e.CLIPBOARD_ERROR = 5)] = "CLIPBOARD_ERROR"),
          (e[(e.THEME_ERROR = 6)] = "THEME_ERROR"),
          (e[(e.PATH_DOESNT_EXIST = 7)] = "PATH_DOESNT_EXIST"),
          (e[(e.INPUT_TYPE_OVERRIDE = 8)] = "INPUT_TYPE_OVERRIDE"),
          (e[(e.EMPTY_KEY = 9)] = "EMPTY_KEY");
      })(Ln || (Ln = {}));
      const Gn = {
        [Ln.UNSUPPORTED_INPUT]: (e, t) => [
          `An input with type \`${e}\` input was found at path \`${t}\` but it's not supported yet.`,
        ],
        [Ln.NO_COMPONENT_FOR_TYPE]: (e, t) => [
          `Type \`${e}\` found at path \`${t}\` can't be displayed in panel because no component supports it yet.`,
        ],
        [Ln.UNKNOWN_INPUT]: (e, t) => [
          `input at path \`${e}\` is not recognized.`,
          t,
        ],
        [Ln.DUPLICATE_KEYS]: (e, t, n) => [
          `Key \`${e}\` of path \`${t}\` already exists at path \`${n}\`. Even nested keys need to be unique. Rename one of the keys.`,
        ],
        [Ln.ALREADY_REGISTERED_TYPE]: (e) => [
          `Type ${e} has already been registered. You can't register a component with the same type.`,
        ],
        [Ln.CLIPBOARD_ERROR]: (e) => ["Error copying the value", e],
        [Ln.THEME_ERROR]: (e, t) => [
          `Error accessing the theme \`${e}.${t}\` value.`,
        ],
        [Ln.PATH_DOESNT_EXIST]: (e) => [
          `Error getting the value at path \`${e}\`. There is probably an error in your \`render\` function.`,
        ],
        [Ln.PATH_DOESNT_EXIST]: (e) => [
          `Error accessing the value at path \`${e}\``,
        ],
        [Ln.INPUT_TYPE_OVERRIDE]: (e, t, n) => [
          `Input at path \`${e}\` already exists with type: \`${t}\`. Its type cannot be overridden with type \`${n}\`.`,
        ],
        [Ln.EMPTY_KEY]: () => [
          "Keys can not be empty, if you want to hide a label use whitespace.",
        ],
      };
      function Hn(e, t, ...n) {
        const [r, ...o] = Gn[t](...n);
        console[e]("LEVA: " + r, ...o);
      }
      const zn = Hn.bind(null, "warn"),
        Nn = Hn.bind(null, "log"),
        jn = ["value"],
        Un = ["schema"],
        Jn = ["value"],
        Kn = [],
        $n = {};
      function Qn(e) {
        let { value: t } = e,
          n = On(e, jn);
        for (let r of Kn) {
          const e = r(t, n);
          if (e) return e;
        }
      }
      function Wn(e, t) {
        let { schema: n } = t,
          r = On(t, Un);
        e in $n
          ? zn(Ln.ALREADY_REGISTERED_TYPE, e)
          : (Kn.push((t, r) => n(t, r) && e), ($n[e] = r));
      }
      function Vn(e, t, n, r) {
        const { normalize: o } = $n[e];
        if (o) return o(t, n, r);
        if ("object" !== typeof t || !("value" in t)) return { value: t };
        const { value: i } = t;
        return { value: i, settings: On(t, Jn) };
      }
      function Yn(e, t, n) {
        const { format: r } = $n[e];
        return r ? r(t, n) : t;
      }
      function Xn(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function Zn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function qn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Zn(Object(n), !0).forEach(function (t) {
                Xn(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Zn(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      const er = (e, t, n) => (e > n ? n : e < t ? t : e),
        tr = (e) => {
          if ("" === e || "number" === typeof e) return e;
          try {
            const t = dr(e);
            if (!isNaN(t)) return t;
          } catch (t) {}
          return parseFloat(e);
        },
        nr = Math.log(10);
      function rr(e) {
        let t = Math.abs(+String(e).replace(".", ""));
        if (0 === t) return 0.01;
        for (; 0 !== t && t % 10 === 0; ) t /= 10;
        const n = Math.floor(Math.log(t) / nr) + 1,
          r = Math.floor(Math.log10(Math.abs(e))),
          o = Math.pow(10, r - n);
        return Math.max(o, 0.001);
      }
      const or = (e, t, n) => {
          if (n === t) return 0;
          return (er(e, t, n) - t) / (n - t);
        },
        ir = (e, t, n) => e * (n - t) + t,
        ar = /\(([0-9+\-*/^ .]+)\)/,
        sr = /(\d+(?:\.\d+)?) ?\^ ?(\d+(?:\.\d+)?)/,
        lr = /(\d+(?:\.\d+)?) ?\* ?(\d+(?:\.\d+)?)/,
        cr = /(\d+(?:\.\d+)?) ?\/ ?(\d+(?:\.\d+)?)/,
        ur = /(\d+(?:\.\d+)?) ?\+ ?(\d+(?:\.\d+)?)/,
        fr = /(\d+(?:\.\d+)?) ?- ?(\d+(?:\.\d+)?)/;
      function dr(e) {
        if (isNaN(Number(e))) {
          if (ar.test(e)) {
            const t = e.replace(ar, (e, t) => String(dr(t)));
            return dr(t);
          }
          if (sr.test(e)) {
            return dr(
              e.replace(sr, (e, t, n) => String(Math.pow(Number(t), Number(n))))
            );
          }
          if (lr.test(e)) {
            return dr(
              e.replace(lr, (e, t, n) => String(Number(t) * Number(n)))
            );
          }
          if (cr.test(e)) {
            return dr(
              e.replace(cr, (e, t, n) => {
                if (0 != n) return String(Number(t) / Number(n));
                throw new Error("Division by zero");
              })
            );
          }
          if (ur.test(e)) {
            return dr(
              e.replace(ur, (e, t, n) => String(Number(t) + Number(n)))
            );
          }
          if (fr.test(e)) {
            return dr(
              e.replace(fr, (e, t, n) => String(Number(t) - Number(n)))
            );
          }
          return Number(e);
        }
        return Number(e);
      }
      let pr, hr;
      !(function (e) {
        (e.BUTTON = "BUTTON"),
          (e.BUTTON_GROUP = "BUTTON_GROUP"),
          (e.MONITOR = "MONITOR"),
          (e.FOLDER = "FOLDER");
      })(pr || (pr = {})),
        (function (e) {
          (e.SELECT = "SELECT"),
            (e.IMAGE = "IMAGE"),
            (e.NUMBER = "NUMBER"),
            (e.COLOR = "COLOR"),
            (e.STRING = "STRING"),
            (e.BOOLEAN = "BOOLEAN"),
            (e.INTERVAL = "INTERVAL"),
            (e.VECTOR3D = "VECTOR3D"),
            (e.VECTOR2D = "VECTOR2D");
        })(hr || (hr = {}));
      const mr = ["type", "__customInput"],
        gr = [
          "render",
          "label",
          "optional",
          "disabled",
          "hint",
          "onChange",
          "onEditStart",
          "onEditEnd",
          "transient",
        ],
        vr = ["type"];
      function yr(e, t, n = {}, r) {
        var o, i;
        if ("object" !== typeof e || Array.isArray(e))
          return {
            type: r,
            input: e,
            options: qn({ key: t, label: t, optional: !1, disabled: !1 }, n),
          };
        if ("__customInput" in e) {
          const { type: n, __customInput: r } = e;
          return yr(r, t, On(e, mr), n);
        }
        const {
            render: a,
            label: s,
            optional: l,
            disabled: c,
            hint: u,
            onChange: f,
            onEditStart: d,
            onEditEnd: p,
            transient: h,
          } = e,
          m = On(e, gr),
          g = qn(
            {
              render: a,
              key: t,
              label: null !== s && void 0 !== s ? s : t,
              hint: u,
              transient: null !== h && void 0 !== h ? h : !!f,
              onEditStart: d,
              onEditEnd: p,
              disabled: c,
              optional: l,
            },
            n
          );
        let { type: v } = m,
          y = On(m, vr);
        return (
          (v = null !== r && void 0 !== r ? r : v),
          v in pr
            ? { type: v, input: y, options: g }
            : {
                type: v,
                input: y,
                options: qn(
                  qn({}, g),
                  {},
                  {
                    onChange: f,
                    optional: null !== (o = g.optional) && void 0 !== o && o,
                    disabled: null !== (i = g.disabled) && void 0 !== i && i,
                  }
                ),
              }
        );
      }
      function br(e, t, n, r) {
        const o = yr(e, t),
          { type: i, input: a, options: s } = o;
        if (i)
          return i in pr ? o : { type: i, input: Vn(i, a, n, r), options: s };
        let l = Qn(a);
        return l
          ? { type: l, input: Vn(l, a, n, r), options: s }
          : ((l = Qn({ value: a })),
            !!l && { type: l, input: Vn(l, { value: a }, n, r), options: s });
      }
      function Ar(e, t, n, r, o) {
        const { value: i, type: a, settings: s } = e;
        (e.value = Cr({ type: a, value: i, settings: s }, t, n, r)),
          (e.fromPanel = o);
      }
      const Br = function (e, t, n) {
        (this.type = "LEVA_ERROR"),
          (this.message = "LEVA: " + e),
          (this.previousValue = t),
          (this.error = n);
      };
      function Cr({ type: e, value: t, settings: n }, r, o, i) {
        const a = "SELECT" !== e && "function" === typeof r ? r(t) : r;
        let s;
        try {
          s = (function (e, t, n, r, o, i) {
            const { sanitize: a } = $n[e];
            return a ? a(t, n, r, o, i) : t;
          })(e, a, n, t, o, i);
        } catch (l) {
          throw new Br(
            `The value \`${r}\` did not result in a correct value.`,
            t,
            l
          );
        }
        if (v(s, t))
          throw new Br(
            `The value \`${r}\` did not result in a value update, which remained the same: \`${t}\`.\n        You can ignore this warning if this is the intended behavior.`,
            t
          );
        return s;
      }
      const xr = (e, t, n = !1) => {
          let r = 0;
          return function () {
            const o = arguments,
              i = n && !r,
              a = () => e.apply(this, o);
            window.clearTimeout(r), (r = window.setTimeout(a, t)), i && a();
          };
        },
        wr = (e) => (e.shiftKey ? 5 : e.altKey ? 0.2 : 1),
        _r = ["value"],
        Er = ["min", "max"],
        Sr = (e, { min: t = -1 / 0, max: n = 1 / 0, suffix: r }) => {
          const o = parseFloat(e);
          if ("" === e || isNaN(o)) throw Error("Invalid number");
          const i = er(o, t, n);
          return r ? i + r : i;
        },
        Mr = (e) => {
          let { value: t } = e,
            n = On(e, _r);
          const { min: r = -1 / 0, max: o = 1 / 0 } = n,
            i = On(n, Er),
            a = er(parseFloat(t), r, o);
          let s;
          if (!Number.isFinite(t)) {
            const e = String(t).match(/[A-Z]+/i);
            e && (s = e[0]);
          }
          let l = n.step;
          l ||
            (Number.isFinite(r)
              ? (l = Number.isFinite(o)
                  ? +(Math.abs(o - r) / 100).toPrecision(1)
                  : +(Math.abs(a - r) / 100).toPrecision(1))
              : Number.isFinite(o) &&
                (l = +(Math.abs(o - a) / 100).toPrecision(1)));
          const c = l ? 10 * rr(l) : rr(a);
          l = l || c / 10;
          return {
            value: s ? a + s : a,
            settings: qn(
              {
                initialValue: a,
                step: l,
                pad: Math.round(er(Math.log10(1 / c), 0, 2)),
                min: r,
                max: o,
                suffix: s,
              },
              i
            ),
          };
        },
        Rr = (e, { step: t, initialValue: n }) =>
          n + Math.round((e - n) / t) * t;
      var Ir = Object.freeze({
        __proto__: null,
        schema: (e) =>
          "number" === typeof e ||
          ("string" === typeof e && !isNaN(parseFloat(e))),
        sanitize: Sr,
        format: (e, { pad: t = 0, suffix: n }) => {
          const r = parseFloat(e).toFixed(t);
          return n ? r + n : r;
        },
        normalize: Mr,
        sanitizeStep: Rr,
      });
      function kr() {
        return (kr =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      const Tr = (0, r.createContext)({});
      function Pr() {
        return (0, r.useContext)(Tr);
      }
      const Fr = (0, r.createContext)(null),
        Dr = (0, r.createContext)(null),
        Or = (0, r.createContext)(null);
      function Lr() {
        return (0, r.useContext)(Dr);
      }
      function Gr(e, t) {
        const [n, r] = e.split(" "),
          o = {};
        return (
          "none" !== n &&
            (o.boxShadow = `${t.inset ? "inset " : ""}0 0 0 $borderWidths${[
              t.key,
            ]} $colors${("default" !== n && n) || t.borderColor}`),
          r && (o.backgroundColor = r),
          o
        );
      }
      const Hr = {
          $inputStyle: () => (e) =>
            Gr(e, { key: "$input", borderColor: "$highlight1", inset: !0 }),
          $focusStyle: () => (e) =>
            Gr(e, { key: "$focus", borderColor: "$accent2" }),
          $hoverStyle: () => (e) =>
            Gr(e, { key: "$hover", borderColor: "$accent1", inset: !0 }),
          $activeStyle: () => (e) =>
            Gr(e, { key: "$active", borderColor: "$accent1", inset: !0 }),
        },
        {
          styled: zr,
          css: Nr,
          createTheme: jr,
          globalCss: Ur,
          keyframes: Jr,
        } = ke({
          prefix: "leva",
          theme: {
            colors: {
              elevation1: "#292d39",
              elevation2: "#181c20",
              elevation3: "#373c4b",
              accent1: "#0066dc",
              accent2: "#007bff",
              accent3: "#3c93ff",
              highlight1: "#535760",
              highlight2: "#8c92a4",
              highlight3: "#fefefe",
              vivid1: "#ffcc00",
              folderWidgetColor: "$highlight2",
              folderTextColor: "$highlight3",
              toolTipBackground: "$highlight3",
              toolTipText: "$elevation2",
            },
            radii: { xs: "2px", sm: "3px", lg: "10px" },
            space: {
              xs: "3px",
              sm: "6px",
              md: "10px",
              rowGap: "7px",
              colGap: "7px",
            },
            fonts: {
              mono: "ui-monospace, SFMono-Regular, Menlo, 'Roboto Mono', monospace",
              sans: "system-ui, sans-serif",
            },
            fontSizes: { root: "11px", toolTip: "$root" },
            sizes: {
              rootWidth: "280px",
              controlWidth: "160px",
              numberInputMinWidth: "38px",
              scrubberWidth: "8px",
              scrubberHeight: "16px",
              rowHeight: "24px",
              folderTitleHeight: "20px",
              checkboxSize: "16px",
              joystickWidth: "100px",
              joystickHeight: "100px",
              colorPickerWidth: "$controlWidth",
              colorPickerHeight: "100px",
              imagePreviewWidth: "$controlWidth",
              imagePreviewHeight: "100px",
              monitorHeight: "60px",
              titleBarHeight: "39px",
            },
            shadows: {
              level1: "0 0 9px 0 #00000088",
              level2: "0 4px 14px #00000033",
            },
            borderWidths: {
              root: "0px",
              input: "1px",
              focus: "1px",
              hover: "1px",
              active: "1px",
              folder: "1px",
            },
            fontWeights: {
              label: "normal",
              folder: "normal",
              button: "normal",
            },
          },
          utils: qn(
            qn({}, Hr),
            {},
            {
              $flex: () => ({ display: "flex", alignItems: "center" }),
              $flexCenter: () => ({
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }),
              $reset: () => ({
                outline: "none",
                fontSize: "inherit",
                fontWeight: "inherit",
                color: "inherit",
                fontFamily: "inherit",
                border: "none",
                backgroundColor: "transparent",
                appearance: "none",
              }),
              $draggable: () => ({
                touchAction: "none",
                WebkitUserDrag: "none",
                userSelect: "none",
              }),
              $focus: (e) => ({ "&:focus": Hr.$focusStyle()(e) }),
              $focusWithin: (e) => ({ "&:focus-within": Hr.$focusStyle()(e) }),
              $hover: (e) => ({ "&:hover": Hr.$hoverStyle()(e) }),
              $active: (e) => ({ "&:active": Hr.$activeStyle()(e) }),
            }
          ),
        }),
        Kr = Ur({
          ".leva__panel__dragged": {
            WebkitUserDrag: "none",
            userSelect: "none",
            input: { userSelect: "none" },
            "*": { cursor: "ew-resize !important" },
          },
        });
      function $r(e, t) {
        const { theme: n } = (0, r.useContext)(Fr);
        if (!(e in n) || !(t in n[e])) return zn(Ln.THEME_ERROR, e, t), "";
        let o = t;
        for (;;) {
          let t = n[e][o];
          if ("string" !== typeof t || "$" !== t.charAt(0)) return t;
          o = t.substr(1);
        }
      }
      const Qr = zr("input", {
          $reset: "",
          padding: "0 $sm",
          width: 0,
          minWidth: 0,
          flex: 1,
          height: "100%",
          variants: {
            levaType: { number: { textAlign: "right" } },
            as: { textarea: { padding: "$sm" } },
          },
        }),
        Wr = zr("div", {
          $draggable: "",
          height: "100%",
          $flexCenter: "",
          position: "relative",
          padding: "0 $xs",
          fontSize: "0.8em",
          opacity: 0.8,
          cursor: "default",
          touchAction: "none",
          [`& + ${Qr}`]: { paddingLeft: 0 },
        }),
        Vr = zr(Wr, {
          cursor: "ew-resize",
          marginRight: "-$xs",
          textTransform: "uppercase",
          opacity: 0.3,
          "&:hover": { opacity: 1 },
          variants: {
            dragging: { true: { backgroundColor: "$accent2", opacity: 1 } },
          },
        }),
        Yr = zr("div", {
          $flex: "",
          position: "relative",
          borderRadius: "$sm",
          overflow: "hidden",
          color: "inherit",
          height: "$rowHeight",
          backgroundColor: "$elevation3",
          $inputStyle: "$elevation1",
          $hover: "",
          $focusWithin: "",
          variants: { textArea: { true: { height: "auto" } } },
        }),
        Xr = [
          "innerLabel",
          "value",
          "onUpdate",
          "onChange",
          "onKeyDown",
          "type",
          "id",
          "inputType",
          "rows",
        ],
        Zr = ["onUpdate"];
      function qr(e) {
        let {
            innerLabel: t,
            value: n,
            onUpdate: o,
            onChange: i,
            onKeyDown: a,
            type: s,
            id: l,
            inputType: c = "text",
            rows: u = 0,
          } = e,
          f = On(e, Xr);
        const {
            id: d,
            emitOnEditStart: p,
            emitOnEditEnd: h,
            disabled: m,
          } = Pr(),
          g = l || d,
          v = (0, r.useRef)(null),
          y = u > 0,
          b = y ? "textarea" : "input",
          A = (0, r.useCallback)(
            (e) => (t) => {
              const n = t.currentTarget.value;
              e(n);
            },
            []
          );
        r.useEffect(() => {
          const e = v.current,
            t = A((e) => {
              o(e), h();
            });
          return (
            null === e || void 0 === e || e.addEventListener("blur", t),
            () =>
              null === e || void 0 === e
                ? void 0
                : e.removeEventListener("blur", t)
          );
        }, [A, o, h]);
        const B = (0, r.useCallback)(
            (e) => {
              "Enter" === e.key && A(o)(e);
            },
            [A, o]
          ),
          C = Object.assign({ as: b }, y ? { rows: u } : {}, f);
        return r.createElement(
          Yr,
          { textArea: y },
          t && "string" === typeof t ? r.createElement(Wr, null, t) : t,
          r.createElement(
            Qr,
            kr(
              {
                levaType: s,
                ref: v,
                id: g,
                type: c,
                autoComplete: "off",
                spellCheck: "false",
                value: n,
                onChange: A(i),
                onFocus: () => p(),
                onKeyPress: B,
                onKeyDown: a,
                disabled: m,
              },
              C
            )
          )
        );
      }
      function eo(e) {
        let { onUpdate: t } = e,
          n = On(e, Zr);
        const o = (0, r.useCallback)((e) => t(tr(e)), [t]),
          i = (0, r.useCallback)(
            (e) => {
              const n =
                "ArrowUp" === e.key ? 1 : "ArrowDown" === e.key ? -1 : 0;
              if (n) {
                e.preventDefault();
                const r = e.altKey ? 0.1 : e.shiftKey ? 10 : 1;
                t((e) => parseFloat(e) + n * r);
              }
            },
            [t]
          );
        return r.createElement(
          qr,
          kr({}, n, { onUpdate: o, onKeyDown: i, type: "number" })
        );
      }
      const to = zr("div", {}),
        no = zr("div", {
          position: "relative",
          background: "$elevation2",
          transition: "height 300ms ease",
          variants: {
            fill: { true: {}, false: {} },
            flat: { false: {}, true: {} },
            isRoot: {
              true: {},
              false: {
                paddingLeft: "$md",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "$borderWidths$folder",
                  height: "100%",
                  backgroundColor: "$folderWidgetColor",
                  opacity: 0.4,
                  transform: "translateX(-50%)",
                },
              },
            },
          },
          compoundVariants: [
            {
              isRoot: !0,
              fill: !1,
              css: {
                overflowY: "auto",
                maxHeight: "calc(100vh - 20px - $$titleBarHeight)",
              },
            },
            { isRoot: !0, flat: !1, css: { borderRadius: "$lg" } },
          ],
        }),
        ro = zr("div", {
          $flex: "",
          color: "$folderTextColor",
          userSelect: "none",
          cursor: "pointer",
          height: "$folderTitleHeight",
          fontWeight: "$folder",
          "> svg": {
            marginLeft: -4,
            marginRight: 4,
            cursor: "pointer",
            fill: "$folderWidgetColor",
            opacity: 0.6,
          },
          "&:hover > svg": { fill: "$folderWidgetColor" },
          [`&:hover + ${no}::after`]: { opacity: 0.6 },
          [`${to}:hover > & + ${no}::after`]: { opacity: 0.6 },
          [`${to}:hover > & > svg`]: { opacity: 1 },
        }),
        oo = zr("div", {
          position: "relative",
          display: "grid",
          gridTemplateColumns: "100%",
          rowGap: "$rowGap",
          transition: "opacity 250ms ease",
          variants: {
            toggled: {
              true: { opacity: 1, transitionDelay: "250ms" },
              false: {
                opacity: 0,
                transitionDelay: "0ms",
                pointerEvents: "none",
              },
            },
            isRoot: {
              true: {
                "& > div": { paddingLeft: "$md", paddingRight: "$md" },
                "& > div:first-of-type": { paddingTop: "$sm" },
                "& > div:last-of-type": { paddingBottom: "$sm" },
                [`> ${to}:not(:first-of-type)`]: {
                  paddingTop: "$sm",
                  marginTop: "$md",
                  borderTop: "$borderWidths$folder solid $colors$elevation1",
                },
              },
            },
          },
        }),
        io = zr("div", {
          position: "relative",
          zIndex: 100,
          display: "grid",
          rowGap: "$rowGap",
          gridTemplateRows: "minmax($sizes$rowHeight, max-content)",
          alignItems: "center",
          color: "$highlight2",
          [`${oo} > &`]: {
            "&:first-of-type": { marginTop: "$rowGap" },
            "&:last-of-type": { marginBottom: "$rowGap" },
          },
          "&:hover,&:focus-within": { color: "$highlight3" },
        }),
        ao = zr(io, {
          gridTemplateColumns: "auto $sizes$controlWidth",
          columnGap: "$colGap",
        }),
        so = zr("div", {
          $flex: "",
          height: "100%",
          position: "relative",
          overflow: "hidden",
          "& > div": { marginLeft: "$colGap", padding: "0 $xs", opacity: 0.4 },
          "& > div:hover": { opacity: 0.8 },
          "& > div > svg": {
            display: "none",
            cursor: "pointer",
            width: 13,
            minWidth: 13,
            height: 13,
            backgroundColor: "$elevation2",
          },
          "&:hover > div > svg": { display: "block" },
          variants: {
            align: {
              top: {
                height: "100%",
                alignItems: "flex-start",
                paddingTop: "$sm",
              },
            },
          },
        }),
        lo = zr("input", {
          $reset: "",
          height: 0,
          width: 0,
          opacity: 0,
          margin: 0,
          "& + label": {
            position: "relative",
            $flexCenter: "",
            height: "100%",
            userSelect: "none",
            cursor: "pointer",
            paddingLeft: 2,
            paddingRight: "$sm",
            pointerEvents: "auto",
          },
          "& + label:after": {
            content: '""',
            width: 6,
            height: 6,
            backgroundColor: "$elevation3",
            borderRadius: "50%",
            $activeStyle: "",
          },
          "&:focus + label:after": { $focusStyle: "" },
          "& + label:active:after": {
            backgroundColor: "$accent1",
            $focusStyle: "",
          },
          "&:checked + label:after": { backgroundColor: "$accent1" },
        }),
        co = zr("div", {
          opacity: 1,
          variants: {
            disabled: { true: { opacity: 0.6, pointerEvents: "none" } },
          },
        }),
        uo = zr("label", {
          fontWeight: "$label",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          "& > svg": { display: "block" },
        }),
        fo = zr("div", {
          position: "fixed",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: 1e3,
          userSelect: "none",
        }),
        po = zr("div", {
          background: "$toolTipBackground",
          fontFamily: "$sans",
          fontSize: "$toolTip",
          padding: "$xs $sm",
          color: "$toolTipText",
          borderRadius: "$xs",
          boxShadow: "$level2",
          maxWidth: 260,
        }),
        ho = zr(Dn, { fill: "$toolTipBackground" });
      function mo({ children: e }) {
        const { className: t } = (0, r.useContext)(Fr);
        return r.createElement(m, { className: t }, e);
      }
      const go = ["align"];
      function vo() {
        const { id: e, disable: t, disabled: n } = Pr();
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(lo, {
            id: e + "__disable",
            type: "checkbox",
            checked: !n,
            onChange: () => t(!n),
          }),
          r.createElement("label", { htmlFor: e + "__disable" })
        );
      }
      function yo(e) {
        const { id: t, optional: n, hint: o } = Pr(),
          i = e.htmlFor || (t ? { htmlFor: t } : null),
          a =
            o || "string" !== typeof e.children ? null : { title: e.children };
        return r.createElement(
          r.Fragment,
          null,
          n && r.createElement(vo, null),
          void 0 !== o
            ? r.createElement(
                Tn,
                null,
                r.createElement(
                  Pn,
                  { asChild: !0 },
                  r.createElement(uo, kr({}, i, e))
                ),
                r.createElement(
                  Fn,
                  { side: "top", sideOffset: 2 },
                  r.createElement(po, null, o, r.createElement(ho, null))
                )
              )
            : r.createElement(uo, kr({}, i, a, e))
        );
      }
      function bo(e) {
        let { align: t } = e,
          n = On(e, go);
        const { value: o, label: i, key: a } = Pr(),
          { hideCopyButton: s } = (0, r.useContext)(Or),
          l = !s && void 0 !== a,
          [c, u] = (0, r.useState)(!1);
        return r.createElement(
          so,
          { align: t, onPointerLeave: () => u(!1) },
          r.createElement(yo, n),
          l &&
            r.createElement(
              "div",
              { title: `Click to copy ${"string" === typeof i ? i : a} value` },
              c
                ? r.createElement(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 20 20",
                      fill: "currentColor",
                    },
                    r.createElement("path", {
                      d: "M9 2a1 1 0 000 2h2a1 1 0 100-2H9z",
                    }),
                    r.createElement("path", {
                      fillRule: "evenodd",
                      d: "M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                      clipRule: "evenodd",
                    })
                  )
                : r.createElement(
                    "svg",
                    {
                      onClick: async () => {
                        try {
                          await navigator.clipboard.writeText(
                            JSON.stringify({
                              [a]: null !== o && void 0 !== o ? o : "",
                            })
                          ),
                            u(!0);
                        } catch (e) {
                          zn(Ln.CLIPBOARD_ERROR, { [a]: o });
                        }
                      },
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 20 20",
                      fill: "currentColor",
                    },
                    r.createElement("path", {
                      d: "M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z",
                    }),
                    r.createElement("path", {
                      d: "M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z",
                    })
                  )
            )
        );
      }
      const Ao = ["toggled"],
        Bo = zr("svg", {
          fill: "currentColor",
          transition: "transform 350ms ease, fill 250ms ease",
        });
      function Co(e) {
        let { toggled: t } = e,
          n = On(e, Ao);
        return r.createElement(
          Bo,
          kr(
            {
              width: "9",
              height: "5",
              viewBox: "0 0 9 5",
              xmlns: "http://www.w3.org/2000/svg",
              style: { transform: `rotate(${t ? 0 : -90}deg)` },
            },
            n
          ),
          r.createElement("path", {
            d: "M3.8 4.4c.4.3 1 .3 1.4 0L8 1.7A1 1 0 007.4 0H1.6a1 1 0 00-.7 1.7l3 2.7z",
          })
        );
      }
      const xo = ["input"];
      function wo(e) {
        let { input: t } = e,
          n = On(e, xo);
        return t ? r.createElement(ao, n) : r.createElement(io, n);
      }
      function _o({ value: e, type: t, settings: n, setValue: o }) {
        const [i, a] = (0, r.useState)(Yn(t, e, n)),
          s = (0, r.useRef)(e),
          l = (0, r.useRef)(n);
        l.current = n;
        const c = (0, r.useCallback)((e) => a(Yn(t, e, l.current)), [t]),
          u = (0, r.useCallback)(
            (e) => {
              try {
                o(e);
              } catch (t) {
                const { type: e, previousValue: n } = t;
                if ("LEVA_ERROR" !== e) throw t;
                c(n);
              }
            },
            [c, o]
          );
        return (
          (0, r.useEffect)(() => {
            v(e, s.current) || c(e), (s.current = e);
          }, [e, c]),
          { displayValue: i, onChange: a, onUpdate: u }
        );
      }
      function Eo(e, t) {
        const { emitOnEditStart: n, emitOnEditEnd: r } = Pr();
        return Ct((t) => {
          t.first &&
            (document.body.classList.add("leva__panel__dragged"),
            null === n || void 0 === n || n());
          const o = e(t);
          return (
            t.last &&
              (document.body.classList.remove("leva__panel__dragged"),
              null === r || void 0 === r || r()),
            o
          );
        }, t);
      }
      function So() {
        const e = (0, r.useRef)(null),
          t = (0, r.useRef)({ x: 0, y: 0 }),
          n = (0, r.useCallback)((n) => {
            Object.assign(t.current, n),
              e.current &&
                (e.current.style.transform = `translate3d(${t.current.x}px, ${t.current.y}px, 0)`);
          }, []);
        return [e, n];
      }
      const Mo = ["__refCount"],
        Ro = (e, t) => {
          if (!e[t]) return null;
          return On(e[t], Mo);
        };
      const Io = zr("div", {
          variants: {
            hasRange: {
              true: {
                position: "relative",
                display: "grid",
                gridTemplateColumns: "auto $sizes$numberInputMinWidth",
                columnGap: "$colGap",
                alignItems: "center",
              },
            },
          },
        }),
        ko = zr("div", {
          position: "relative",
          width: "100%",
          height: 2,
          borderRadius: "$xs",
          backgroundColor: "$elevation1",
        }),
        To = zr("div", {
          position: "absolute",
          width: "$scrubberWidth",
          height: "$scrubberHeight",
          borderRadius: "$xs",
          boxShadow: "0 0 0 2px $colors$elevation2",
          backgroundColor: "$accent2",
          cursor: "pointer",
          $active: "none $accent1",
          $hover: "none $accent3",
          variants: {
            position: {
              left: {
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                transform:
                  "translateX(calc(-0.5 * ($sizes$scrubberWidth + 4px)))",
              },
              right: {
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                transform:
                  "translateX(calc(0.5 * ($sizes$scrubberWidth + 4px)))",
              },
            },
          },
        }),
        Po = zr("div", {
          position: "relative",
          $flex: "",
          height: "100%",
          cursor: "pointer",
          touchAction: "none",
        }),
        Fo = zr("div", {
          position: "absolute",
          height: "100%",
          backgroundColor: "$accent2",
        });
      function Do({
        value: e,
        min: t,
        max: n,
        onDrag: o,
        step: i,
        initialValue: a,
      }) {
        const s = (0, r.useRef)(null),
          l = (0, r.useRef)(null),
          c = (0, r.useRef)(0),
          u = $r("sizes", "scrubberWidth"),
          f = Eo(({ event: r, first: f, xy: [d], movement: [p], memo: h }) => {
            if (f) {
              const { width: o, left: i } = s.current.getBoundingClientRect();
              c.current = o - parseFloat(u);
              h =
                (null === r || void 0 === r ? void 0 : r.target) === l.current
                  ? e
                  : ir((d - i) / o, t, n);
            }
            const m = h + ir(p / c.current, 0, n - t);
            return o(Rr(m, { step: i, initialValue: a })), h;
          }),
          d = or(e, t, n);
        return r.createElement(
          Po,
          kr({ ref: s }, f()),
          r.createElement(
            ko,
            null,
            r.createElement(Fo, {
              style: { left: 0, right: 100 * (1 - d) + "%" },
            })
          ),
          r.createElement(To, {
            ref: l,
            style: { left: `calc(${d} * (100% - ${u}))` },
          })
        );
      }
      const Oo = r.memo(
        ({ label: e, onUpdate: t, step: n, innerLabelTrim: o }) => {
          const [i, a] = (0, r.useState)(!1),
            s = Eo(
              ({ active: e, delta: [r], event: o, memo: i = 0 }) => (
                a(e),
                (i += r / 2),
                Math.abs(i) >= 1 &&
                  (t((e) => parseFloat(e) + Math.floor(i) * n * wr(o)),
                  (i = 0)),
                i
              )
            );
          return r.createElement(
            Vr,
            kr({ dragging: i, title: e.length > 1 ? e : "" }, s()),
            e.slice(0, o)
          );
        }
      );
      function Lo({
        label: e,
        id: t,
        displayValue: n,
        onUpdate: o,
        onChange: i,
        settings: a,
        innerLabelTrim: s = 1,
      }) {
        const l =
          s > 0 &&
          r.createElement(Oo, {
            label: e,
            step: a.step,
            onUpdate: o,
            innerLabelTrim: s,
          });
        return r.createElement(eo, {
          id: t,
          value: String(n),
          onUpdate: o,
          onChange: i,
          innerLabel: l,
        });
      }
      const { sanitizeStep: Go } = Ir;
      var Ho = qn(
        {
          component: function () {
            const e = Pr(),
              { label: t, value: n, onUpdate: o, settings: i, id: a } = e,
              { min: s, max: l } = i,
              c = l !== 1 / 0 && s !== -1 / 0;
            return r.createElement(
              wo,
              { input: !0 },
              r.createElement(bo, null, t),
              r.createElement(
                Io,
                { hasRange: c },
                c &&
                  r.createElement(
                    Do,
                    kr({ value: parseFloat(n), onDrag: o }, i)
                  ),
                r.createElement(
                  Lo,
                  kr({}, e, {
                    id: a,
                    label: "value",
                    innerLabelTrim: c ? 0 : 1,
                  })
                )
              )
            );
          },
        },
        On(Ir, ["sanitizeStep"])
      );
      var zo = Object.freeze({
        __proto__: null,
        schema: (e, t) =>
          O()
            .schema({ options: O().passesAnyOf(O().object(), O().array()) })
            .test(t),
        sanitize: (e, { values: t }) => {
          if (t.indexOf(e) < 0)
            throw Error("Selected value doesn't match Select options");
          return e;
        },
        format: (e, { values: t }) => t.indexOf(e),
        normalize: (e) => {
          let t,
            n,
            { value: r, options: o } = e;
          return (
            Array.isArray(o)
              ? ((n = o), (t = o.map((e) => String(e))))
              : ((n = Object.values(o)), (t = Object.keys(o))),
            "value" in e
              ? n.includes(r) || (t.unshift(String(r)), n.unshift(r))
              : (r = n[0]),
            Object.values(o).includes(r) || (o[String(r)] = r),
            { value: r, settings: { keys: t, values: n } }
          );
        },
      });
      const No = zr("div", {
          $flexCenter: "",
          position: "relative",
          "> svg": {
            pointerEvents: "none",
            position: "absolute",
            right: "$md",
          },
        }),
        jo = zr("select", {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0,
        }),
        Uo = zr("div", {
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "$rowHeight",
          backgroundColor: "$elevation3",
          borderRadius: "$sm",
          padding: "0 $sm",
          cursor: "pointer",
          [`${jo}:focus + &`]: { $focusStyle: "" },
          [`${jo}:hover + &`]: { $hoverStyle: "" },
        });
      function Jo({
        displayValue: e,
        value: t,
        onUpdate: n,
        id: o,
        settings: i,
        disabled: a,
      }) {
        const { keys: s, values: l } = i,
          c = (0, r.useRef)();
        return (
          t === l[e] && (c.current = s[e]),
          r.createElement(
            No,
            null,
            r.createElement(
              jo,
              {
                id: o,
                value: e,
                onChange: (e) => n(l[Number(e.currentTarget.value)]),
                disabled: a,
              },
              s.map((e, t) =>
                r.createElement("option", { key: e, value: t }, e)
              )
            ),
            r.createElement(Uo, null, c.current),
            r.createElement(Co, { toggled: !0 })
          )
        );
      }
      var Ko = qn(
        {
          component: function () {
            const {
              label: e,
              value: t,
              displayValue: n,
              onUpdate: o,
              id: i,
              disabled: a,
              settings: s,
            } = Pr();
            return r.createElement(
              wo,
              { input: !0 },
              r.createElement(bo, null, e),
              r.createElement(Jo, {
                id: i,
                value: t,
                displayValue: n,
                onUpdate: o,
                settings: s,
                disabled: a,
              })
            );
          },
        },
        zo
      );
      var $o = Object.freeze({
        __proto__: null,
        schema: (e) => O().string().test(e),
        sanitize: (e) => {
          if ("string" !== typeof e) throw Error("Invalid string");
          return e;
        },
        normalize: ({ value: e, editable: t = !0, rows: n = !1 }) => ({
          value: e,
          settings: {
            editable: t,
            rows: "number" === typeof n ? n : n ? 5 : 0,
          },
        }),
      });
      const Qo = ["displayValue", "onUpdate", "onChange", "editable"],
        Wo = zr("div", { whiteSpace: "pre-wrap" });
      function Vo(e) {
        let { displayValue: t, onUpdate: n, onChange: o, editable: i = !0 } = e,
          a = On(e, Qo);
        return i
          ? r.createElement(qr, kr({ value: t, onUpdate: n, onChange: o }, a))
          : r.createElement(Wo, null, t);
      }
      var Yo = qn(
        {
          component: function () {
            const {
              label: e,
              settings: t,
              displayValue: n,
              onUpdate: o,
              onChange: i,
            } = Pr();
            return r.createElement(
              wo,
              { input: !0 },
              r.createElement(bo, null, e),
              r.createElement(
                Vo,
                kr({ displayValue: n, onUpdate: o, onChange: i }, t)
              )
            );
          },
        },
        $o
      );
      var Xo = Object.freeze({
        __proto__: null,
        schema: (e) => O().boolean().test(e),
        sanitize: (e) => {
          if ("boolean" !== typeof e) throw Error("Invalid boolean");
          return e;
        },
      });
      const Zo = zr("div", {
        position: "relative",
        $flex: "",
        height: "$rowHeight",
        input: { $reset: "", height: 0, width: 0, opacity: 0, margin: 0 },
        label: {
          position: "relative",
          $flexCenter: "",
          userSelect: "none",
          cursor: "pointer",
          height: "$checkboxSize",
          width: "$checkboxSize",
          backgroundColor: "$elevation3",
          borderRadius: "$sm",
          $hover: "",
        },
        "input:focus + label": { $focusStyle: "" },
        "input:focus:checked + label, input:checked + label:hover": {
          $hoverStyle: "$accent3",
        },
        "input + label:active": { backgroundColor: "$accent1" },
        "input:checked + label:active": { backgroundColor: "$accent1" },
        "label > svg": {
          display: "none",
          width: "90%",
          height: "90%",
          stroke: "$highlight3",
        },
        "input:checked + label": { backgroundColor: "$accent2" },
        "input:checked + label > svg": { display: "block" },
      });
      function qo({ value: e, onUpdate: t, id: n, disabled: o }) {
        return r.createElement(
          Zo,
          null,
          r.createElement("input", {
            id: n,
            type: "checkbox",
            checked: e,
            onChange: (e) => t(e.currentTarget.checked),
            disabled: o,
          }),
          r.createElement(
            "label",
            { htmlFor: n },
            r.createElement(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
              },
              r.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M5 13l4 4L19 7",
              })
            )
          )
        );
      }
      var ei = qn(
        {
          component: function () {
            const {
              label: e,
              value: t,
              onUpdate: n,
              disabled: o,
              id: i,
            } = Pr();
            return r.createElement(
              wo,
              { input: !0 },
              r.createElement(bo, null, e),
              r.createElement(qo, { value: t, onUpdate: n, id: i, disabled: o })
            );
          },
        },
        Xo
      );
      const ti = ["locked"];
      function ni({
        value: e,
        id: t,
        valueKey: n,
        settings: o,
        onUpdate: i,
        innerLabelTrim: a,
      }) {
        const s = (0, r.useRef)(e[n]);
        s.current = e[n];
        const l = (0, r.useCallback)(
            (e) =>
              i({
                [n]: Cr({ type: "NUMBER", value: s.current, settings: o }, e),
              }),
            [i, o, n]
          ),
          c = _o({ type: "NUMBER", value: e[n], settings: o, setValue: l });
        return r.createElement(Lo, {
          id: t,
          label: n,
          value: e[n],
          displayValue: c.displayValue,
          onUpdate: c.onUpdate,
          onChange: c.onChange,
          settings: o,
          innerLabelTrim: a,
        });
      }
      const ri = zr("div", {
        display: "grid",
        columnGap: "$colGap",
        gridAutoFlow: "column dense",
        alignItems: "center",
        variants: {
          withLock: {
            true: {
              gridTemplateColumns: "10px auto",
              "> svg": { cursor: "pointer" },
            },
          },
        },
      });
      function oi(e) {
        let { locked: t } = e,
          n = On(e, ti);
        return r.createElement(
          "svg",
          kr(
            {
              width: "10",
              height: "10",
              viewBox: "0 0 15 15",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            n
          ),
          t
            ? r.createElement("path", {
                d: "M5 4.63601C5 3.76031 5.24219 3.1054 5.64323 2.67357C6.03934 2.24705 6.64582 1.9783 7.5014 1.9783C8.35745 1.9783 8.96306 2.24652 9.35823 2.67208C9.75838 3.10299 10 3.75708 10 4.63325V5.99999H5V4.63601ZM4 5.99999V4.63601C4 3.58148 4.29339 2.65754 4.91049 1.99307C5.53252 1.32329 6.42675 0.978302 7.5014 0.978302C8.57583 0.978302 9.46952 1.32233 10.091 1.99162C10.7076 2.65557 11 3.57896 11 4.63325V5.99999H12C12.5523 5.99999 13 6.44771 13 6.99999V13C13 13.5523 12.5523 14 12 14H3C2.44772 14 2 13.5523 2 13V6.99999C2 6.44771 2.44772 5.99999 3 5.99999H4ZM3 6.99999H12V13H3V6.99999Z",
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
              })
            : r.createElement("path", {
                d: "M9 3.63601C9 2.76044 9.24207 2.11211 9.64154 1.68623C10.0366 1.26502 10.6432 1 11.5014 1C12.4485 1 13.0839 1.30552 13.4722 1.80636C13.8031 2.23312 14 2.84313 14 3.63325H15C15 2.68242 14.7626 1.83856 14.2625 1.19361C13.6389 0.38943 12.6743 0 11.5014 0C10.4294 0 9.53523 0.337871 8.91218 1.0021C8.29351 1.66167 8 2.58135 8 3.63601V6H1C0.447715 6 0 6.44772 0 7V13C0 13.5523 0.447715 14 1 14H10C10.5523 14 11 13.5523 11 13V7C11 6.44772 10.5523 6 10 6H9V3.63601ZM1 7H10V13H1V7Z",
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
              })
        );
      }
      function ii({ value: e, onUpdate: t, settings: n, innerLabelTrim: o }) {
        const { id: i, setSettings: a } = Pr(),
          { lock: s, locked: l } = n;
        return r.createElement(
          ri,
          { withLock: s },
          s &&
            r.createElement(oi, {
              locked: l,
              onClick: () => a({ locked: !l }),
            }),
          Object.keys(e).map((a, s) =>
            r.createElement(ni, {
              id: 0 === s ? i : `${i}.${a}`,
              key: a,
              valueKey: a,
              value: e,
              settings: n[a],
              onUpdate: t,
              innerLabelTrim: o,
            })
          )
        );
      }
      const ai = (e, t) => {
          const n = {};
          let r = 0,
            o = 1 / 0;
          Object.entries(e).forEach(([e, i]) => {
            (n[e] = Mr(qn({ value: i }, t[e])).settings),
              (r = Math.max(r, n[e].step)),
              (o = Math.min(o, n[e].pad));
          });
          for (let i in n) {
            const { step: e, min: a, max: s } = t[i] || {};
            isFinite(e) ||
              (isFinite(a) && isFinite(s)) ||
              ((n[i].step = r), (n[i].pad = o));
          }
          return n;
        },
        si = ["lock"],
        li = ["value"];
      function ci(e) {
        const t = O().array().length(e).every.number();
        return (n) =>
          t.test(n) ||
          ((t) => {
            if (!t || "object" !== typeof t) return !1;
            const n = Object.values(t);
            return n.length === e && n.every((e) => isFinite(e));
          })(n);
      }
      function ui(e, t, n) {
        return (function (e) {
          return Array.isArray(e) ? "array" : "object";
        })(e) === t
          ? e
          : "array" === t
          ? Object.values(e)
          : (function (e, t) {
              return e.reduce((e, n, r) => Object.assign(e, { [t[r]]: n }), {});
            })(e, n);
      }
      function fi(e) {
        return {
          schema: ci(e.length),
          normalize: (t) => {
            let { value: n } = t;
            return (function (e, t, n = []) {
              const { lock: r = !1 } = t,
                o = On(t, si),
                i = Array.isArray(e) ? "array" : "object",
                a = "object" === i ? Object.keys(e) : n,
                s = ui(e, "object", a),
                l = ((e) => !!e && ("step" in e || "min" in e || "max" in e))(o)
                  ? a.reduce((e, t) => Object.assign(e, { [t]: o }), {})
                  : o;
              return {
                value: "array" === i ? e : s,
                settings: qn(
                  qn({}, ai(s, l)),
                  {},
                  { format: i, keys: a, lock: r, locked: !1 }
                ),
              };
            })(n, On(t, li), e);
          },
          format: (e, t) => ((e, t) => ui(e, "object", t.keys))(e, t),
          sanitize: (e, t, n) =>
            ((e, t, n) => {
              const r = ui(e, "object", t.keys);
              for (let a in r) r[a] = Sr(r[a], t[a]);
              const o = Object.keys(r);
              let i = {};
              if (o.length === t.keys.length) i = r;
              else {
                const e = ui(n, "object", t.keys);
                if (1 === o.length && t.locked) {
                  const t = o[0],
                    n = r[t],
                    a = e[t],
                    s = 0 !== a ? n / a : 1;
                  for (let r in e) r === t ? (i[t] = n) : (i[r] = e[r] * s);
                } else i = qn(qn({}, e), r);
              }
              return ui(i, t.format, t.keys);
            })(e, t, n),
        };
      }
      var di = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) },
        pi = function (e) {
          return "string" == typeof e ? e.length > 0 : "number" == typeof e;
        },
        hi = function (e, t, n) {
          return (
            void 0 === t && (t = 0),
            void 0 === n && (n = Math.pow(10, t)),
            Math.round(n * e) / n + 0
          );
        },
        mi = function (e, t, n) {
          return (
            void 0 === t && (t = 0),
            void 0 === n && (n = 1),
            e > n ? n : e > t ? e : t
          );
        },
        gi = function (e) {
          return (e = isFinite(e) ? e % 360 : 0) > 0 ? e : e + 360;
        },
        vi = function (e) {
          return {
            r: mi(e.r, 0, 255),
            g: mi(e.g, 0, 255),
            b: mi(e.b, 0, 255),
            a: mi(e.a),
          };
        },
        yi = function (e) {
          return { r: hi(e.r), g: hi(e.g), b: hi(e.b), a: hi(e.a, 3) };
        },
        bi = /^#([0-9a-f]{3,8})$/i,
        Ai = function (e) {
          var t = e.toString(16);
          return t.length < 2 ? "0" + t : t;
        },
        Bi = function (e) {
          var t = e.r,
            n = e.g,
            r = e.b,
            o = e.a,
            i = Math.max(t, n, r),
            a = i - Math.min(t, n, r),
            s = a
              ? i === t
                ? (n - r) / a
                : i === n
                ? 2 + (r - t) / a
                : 4 + (t - n) / a
              : 0;
          return {
            h: 60 * (s < 0 ? s + 6 : s),
            s: i ? (a / i) * 100 : 0,
            v: (i / 255) * 100,
            a: o,
          };
        },
        Ci = function (e) {
          var t = e.h,
            n = e.s,
            r = e.v,
            o = e.a;
          (t = (t / 360) * 6), (n /= 100), (r /= 100);
          var i = Math.floor(t),
            a = r * (1 - n),
            s = r * (1 - (t - i) * n),
            l = r * (1 - (1 - t + i) * n),
            c = i % 6;
          return {
            r: 255 * [r, s, a, a, l, r][c],
            g: 255 * [l, r, r, s, a, a][c],
            b: 255 * [a, a, l, r, r, s][c],
            a: o,
          };
        },
        xi = function (e) {
          return {
            h: gi(e.h),
            s: mi(e.s, 0, 100),
            l: mi(e.l, 0, 100),
            a: mi(e.a),
          };
        },
        wi = function (e) {
          return { h: hi(e.h), s: hi(e.s), l: hi(e.l), a: hi(e.a, 3) };
        },
        _i = function (e) {
          return Ci(
            ((n = (t = e).s),
            {
              h: t.h,
              s:
                (n *= ((r = t.l) < 50 ? r : 100 - r) / 100) > 0
                  ? ((2 * n) / (r + n)) * 100
                  : 0,
              v: r + n,
              a: t.a,
            })
          );
          var t, n, r;
        },
        Ei = function (e) {
          return {
            h: (t = Bi(e)).h,
            s:
              (o = ((200 - (n = t.s)) * (r = t.v)) / 100) > 0 && o < 200
                ? ((n * r) / 100 / (o <= 100 ? o : 200 - o)) * 100
                : 0,
            l: o / 2,
            a: t.a,
          };
          var t, n, r, o;
        },
        Si =
          /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
        Mi =
          /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
        Ri =
          /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
        Ii =
          /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
        ki = {
          string: [
            [
              function (e) {
                var t = bi.exec(e);
                return t
                  ? (e = t[1]).length <= 4
                    ? {
                        r: parseInt(e[0] + e[0], 16),
                        g: parseInt(e[1] + e[1], 16),
                        b: parseInt(e[2] + e[2], 16),
                        a:
                          4 === e.length
                            ? hi(parseInt(e[3] + e[3], 16) / 255, 2)
                            : 1,
                      }
                    : 6 === e.length || 8 === e.length
                    ? {
                        r: parseInt(e.substr(0, 2), 16),
                        g: parseInt(e.substr(2, 2), 16),
                        b: parseInt(e.substr(4, 2), 16),
                        a:
                          8 === e.length
                            ? hi(parseInt(e.substr(6, 2), 16) / 255, 2)
                            : 1,
                      }
                    : null
                  : null;
              },
              "hex",
            ],
            [
              function (e) {
                var t = Ri.exec(e) || Ii.exec(e);
                return t
                  ? t[2] !== t[4] || t[4] !== t[6]
                    ? null
                    : vi({
                        r: Number(t[1]) / (t[2] ? 100 / 255 : 1),
                        g: Number(t[3]) / (t[4] ? 100 / 255 : 1),
                        b: Number(t[5]) / (t[6] ? 100 / 255 : 1),
                        a:
                          void 0 === t[7] ? 1 : Number(t[7]) / (t[8] ? 100 : 1),
                      })
                  : null;
              },
              "rgb",
            ],
            [
              function (e) {
                var t = Si.exec(e) || Mi.exec(e);
                if (!t) return null;
                var n,
                  r,
                  o = xi({
                    h:
                      ((n = t[1]),
                      (r = t[2]),
                      void 0 === r && (r = "deg"),
                      Number(n) * (di[r] || 1)),
                    s: Number(t[3]),
                    l: Number(t[4]),
                    a: void 0 === t[5] ? 1 : Number(t[5]) / (t[6] ? 100 : 1),
                  });
                return _i(o);
              },
              "hsl",
            ],
          ],
          object: [
            [
              function (e) {
                var t = e.r,
                  n = e.g,
                  r = e.b,
                  o = e.a,
                  i = void 0 === o ? 1 : o;
                return pi(t) && pi(n) && pi(r)
                  ? vi({
                      r: Number(t),
                      g: Number(n),
                      b: Number(r),
                      a: Number(i),
                    })
                  : null;
              },
              "rgb",
            ],
            [
              function (e) {
                var t = e.h,
                  n = e.s,
                  r = e.l,
                  o = e.a,
                  i = void 0 === o ? 1 : o;
                if (!pi(t) || !pi(n) || !pi(r)) return null;
                var a = xi({
                  h: Number(t),
                  s: Number(n),
                  l: Number(r),
                  a: Number(i),
                });
                return _i(a);
              },
              "hsl",
            ],
            [
              function (e) {
                var t = e.h,
                  n = e.s,
                  r = e.v,
                  o = e.a,
                  i = void 0 === o ? 1 : o;
                if (!pi(t) || !pi(n) || !pi(r)) return null;
                var a = (function (e) {
                  return {
                    h: gi(e.h),
                    s: mi(e.s, 0, 100),
                    v: mi(e.v, 0, 100),
                    a: mi(e.a),
                  };
                })({ h: Number(t), s: Number(n), v: Number(r), a: Number(i) });
                return Ci(a);
              },
              "hsv",
            ],
          ],
        },
        Ti = function (e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n][0](e);
            if (r) return [r, t[n][1]];
          }
          return [null, void 0];
        },
        Pi = function (e) {
          return "string" == typeof e
            ? Ti(e.trim(), ki.string)
            : "object" == typeof e && null !== e
            ? Ti(e, ki.object)
            : [null, void 0];
        },
        Fi = function (e, t) {
          var n = Ei(e);
          return { h: n.h, s: mi(n.s + 100 * t, 0, 100), l: n.l, a: n.a };
        },
        Di = function (e) {
          return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3 / 255;
        },
        Oi = function (e, t) {
          var n = Ei(e);
          return { h: n.h, s: n.s, l: mi(n.l + 100 * t, 0, 100), a: n.a };
        },
        Li = (function () {
          function e(e) {
            (this.parsed = Pi(e)[0]),
              (this.rgba = this.parsed || { r: 0, g: 0, b: 0, a: 1 });
          }
          return (
            (e.prototype.isValid = function () {
              return null !== this.parsed;
            }),
            (e.prototype.brightness = function () {
              return hi(Di(this.rgba), 2);
            }),
            (e.prototype.isDark = function () {
              return Di(this.rgba) < 0.5;
            }),
            (e.prototype.isLight = function () {
              return Di(this.rgba) >= 0.5;
            }),
            (e.prototype.toHex = function () {
              return (
                (t = (e = yi(this.rgba)).r),
                (n = e.g),
                (r = e.b),
                (i = (o = e.a) < 1 ? Ai(hi(255 * o)) : ""),
                "#" + Ai(t) + Ai(n) + Ai(r) + i
              );
              var e, t, n, r, o, i;
            }),
            (e.prototype.toRgb = function () {
              return yi(this.rgba);
            }),
            (e.prototype.toRgbString = function () {
              return (
                (t = (e = yi(this.rgba)).r),
                (n = e.g),
                (r = e.b),
                (o = e.a) < 1
                  ? "rgba(" + t + ", " + n + ", " + r + ", " + o + ")"
                  : "rgb(" + t + ", " + n + ", " + r + ")"
              );
              var e, t, n, r, o;
            }),
            (e.prototype.toHsl = function () {
              return wi(Ei(this.rgba));
            }),
            (e.prototype.toHslString = function () {
              return (
                (t = (e = wi(Ei(this.rgba))).h),
                (n = e.s),
                (r = e.l),
                (o = e.a) < 1
                  ? "hsla(" + t + ", " + n + "%, " + r + "%, " + o + ")"
                  : "hsl(" + t + ", " + n + "%, " + r + "%)"
              );
              var e, t, n, r, o;
            }),
            (e.prototype.toHsv = function () {
              return (
                (e = Bi(this.rgba)),
                { h: hi(e.h), s: hi(e.s), v: hi(e.v), a: hi(e.a, 3) }
              );
              var e;
            }),
            (e.prototype.invert = function () {
              return Gi({
                r: 255 - (e = this.rgba).r,
                g: 255 - e.g,
                b: 255 - e.b,
                a: e.a,
              });
              var e;
            }),
            (e.prototype.saturate = function (e) {
              return void 0 === e && (e = 0.1), Gi(Fi(this.rgba, e));
            }),
            (e.prototype.desaturate = function (e) {
              return void 0 === e && (e = 0.1), Gi(Fi(this.rgba, -e));
            }),
            (e.prototype.grayscale = function () {
              return Gi(Fi(this.rgba, -1));
            }),
            (e.prototype.lighten = function (e) {
              return void 0 === e && (e = 0.1), Gi(Oi(this.rgba, e));
            }),
            (e.prototype.darken = function (e) {
              return void 0 === e && (e = 0.1), Gi(Oi(this.rgba, -e));
            }),
            (e.prototype.rotate = function (e) {
              return void 0 === e && (e = 15), this.hue(this.hue() + e);
            }),
            (e.prototype.alpha = function (e) {
              return "number" == typeof e
                ? Gi({ r: (t = this.rgba).r, g: t.g, b: t.b, a: e })
                : hi(this.rgba.a, 3);
              var t;
            }),
            (e.prototype.hue = function (e) {
              var t = Ei(this.rgba);
              return "number" == typeof e
                ? Gi({ h: e, s: t.s, l: t.l, a: t.a })
                : hi(t.h);
            }),
            (e.prototype.isEqual = function (e) {
              return this.toHex() === Gi(e).toHex();
            }),
            e
          );
        })(),
        Gi = function (e) {
          return e instanceof Li ? e : new Li(e);
        },
        Hi = [];
      function zi() {
        return (zi =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function Ni(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++)
          t.indexOf((n = i[r])) >= 0 || (o[n] = e[n]);
        return o;
      }
      function ji(e) {
        var t = (0, r.useRef)(e),
          n = (0, r.useRef)(function (e) {
            t.current && t.current(e);
          });
        return (t.current = e), n.current;
      }
      var Ui = function (e, t, n) {
          return (
            void 0 === t && (t = 0),
            void 0 === n && (n = 1),
            e > n ? n : e < t ? t : e
          );
        },
        Ji = function (e) {
          return "touches" in e;
        },
        Ki = function (e) {
          return (e && e.ownerDocument.defaultView) || self;
        },
        $i = function (e, t, n) {
          var r = e.getBoundingClientRect(),
            o = Ji(t)
              ? (function (e, t) {
                  for (var n = 0; n < e.length; n++)
                    if (e[n].identifier === t) return e[n];
                  return e[0];
                })(t.touches, n)
              : t;
          return {
            left: Ui((o.pageX - (r.left + Ki(e).pageXOffset)) / r.width),
            top: Ui((o.pageY - (r.top + Ki(e).pageYOffset)) / r.height),
          };
        },
        Qi = function (e) {
          !Ji(e) && e.preventDefault();
        },
        Wi = r.memo(function (e) {
          var t = e.onMove,
            n = e.onKey,
            o = Ni(e, ["onMove", "onKey"]),
            i = (0, r.useRef)(null),
            a = ji(t),
            s = ji(n),
            l = (0, r.useRef)(null),
            c = (0, r.useRef)(!1),
            u = (0, r.useMemo)(
              function () {
                var e = function (e) {
                    Qi(e),
                      (Ji(e) ? e.touches.length > 0 : e.buttons > 0) &&
                      i.current
                        ? a($i(i.current, e, l.current))
                        : n(!1);
                  },
                  t = function () {
                    return n(!1);
                  };
                function n(n) {
                  var r = c.current,
                    o = Ki(i.current),
                    a = n ? o.addEventListener : o.removeEventListener;
                  a(r ? "touchmove" : "mousemove", e),
                    a(r ? "touchend" : "mouseup", t);
                }
                return [
                  function (e) {
                    var t = e.nativeEvent,
                      r = i.current;
                    if (
                      r &&
                      (Qi(t),
                      !(function (e, t) {
                        return t && !Ji(e);
                      })(t, c.current) && r)
                    ) {
                      if (Ji(t)) {
                        c.current = !0;
                        var o = t.changedTouches || [];
                        o.length && (l.current = o[0].identifier);
                      }
                      r.focus(), a($i(r, t, l.current)), n(!0);
                    }
                  },
                  function (e) {
                    var t = e.which || e.keyCode;
                    t < 37 ||
                      t > 40 ||
                      (e.preventDefault(),
                      s({
                        left: 39 === t ? 0.05 : 37 === t ? -0.05 : 0,
                        top: 40 === t ? 0.05 : 38 === t ? -0.05 : 0,
                      }));
                  },
                  n,
                ];
              },
              [s, a]
            ),
            f = u[0],
            d = u[1],
            p = u[2];
          return (
            (0, r.useEffect)(
              function () {
                return p;
              },
              [p]
            ),
            r.createElement(
              "div",
              zi({}, o, {
                onTouchStart: f,
                onMouseDown: f,
                className: "react-colorful__interactive",
                ref: i,
                onKeyDown: d,
                tabIndex: 0,
                role: "slider",
              })
            )
          );
        }),
        Vi = function (e) {
          return e.filter(Boolean).join(" ");
        },
        Yi = function (e) {
          var t = e.color,
            n = e.left,
            o = e.top,
            i = void 0 === o ? 0.5 : o,
            a = Vi(["react-colorful__pointer", e.className]);
          return r.createElement(
            "div",
            {
              className: a,
              style: { top: 100 * i + "%", left: 100 * n + "%" },
            },
            r.createElement("div", {
              className: "react-colorful__pointer-fill",
              style: { backgroundColor: t },
            })
          );
        },
        Xi = function (e, t, n) {
          return (
            void 0 === t && (t = 0),
            void 0 === n && (n = Math.pow(10, t)),
            Math.round(n * e) / n
          );
        },
        Zi =
          (Math.PI,
          function (e) {
            var t = e.s,
              n = e.v,
              r = e.a,
              o = ((200 - t) * n) / 100;
            return {
              h: Xi(e.h),
              s: Xi(
                o > 0 && o < 200
                  ? ((t * n) / 100 / (o <= 100 ? o : 200 - o)) * 100
                  : 0
              ),
              l: Xi(o / 2),
              a: Xi(r, 2),
            };
          }),
        qi = function (e) {
          var t = Zi(e);
          return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
        },
        ea = function (e) {
          var t = Zi(e);
          return "hsla(" + t.h + ", " + t.s + "%, " + t.l + "%, " + t.a + ")";
        },
        ta = function (e) {
          var t = e.h,
            n = e.s,
            r = e.v,
            o = e.a;
          (t = (t / 360) * 6), (n /= 100), (r /= 100);
          var i = Math.floor(t),
            a = r * (1 - n),
            s = r * (1 - (t - i) * n),
            l = r * (1 - (1 - t + i) * n),
            c = i % 6;
          return {
            r: Xi(255 * [r, s, a, a, l, r][c]),
            g: Xi(255 * [l, r, r, s, a, a][c]),
            b: Xi(255 * [a, a, l, r, r, s][c]),
            a: Xi(o, 2),
          };
        },
        na = function (e) {
          var t = e.r,
            n = e.g,
            r = e.b,
            o = e.a,
            i = Math.max(t, n, r),
            a = i - Math.min(t, n, r),
            s = a
              ? i === t
                ? (n - r) / a
                : i === n
                ? 2 + (r - t) / a
                : 4 + (t - n) / a
              : 0;
          return {
            h: Xi(60 * (s < 0 ? s + 6 : s)),
            s: Xi(i ? (a / i) * 100 : 0),
            v: Xi((i / 255) * 100),
            a: o,
          };
        },
        ra = r.memo(function (e) {
          var t = e.hue,
            n = e.onChange,
            o = Vi(["react-colorful__hue", e.className]);
          return r.createElement(
            "div",
            { className: o },
            r.createElement(
              Wi,
              {
                onMove: function (e) {
                  n({ h: 360 * e.left });
                },
                onKey: function (e) {
                  n({ h: Ui(t + 360 * e.left, 0, 360) });
                },
                "aria-label": "Hue",
                "aria-valuetext": Xi(t),
              },
              r.createElement(Yi, {
                className: "react-colorful__hue-pointer",
                left: t / 360,
                color: qi({ h: t, s: 100, v: 100, a: 1 }),
              })
            )
          );
        }),
        oa = r.memo(function (e) {
          var t = e.hsva,
            n = e.onChange,
            o = { backgroundColor: qi({ h: t.h, s: 100, v: 100, a: 1 }) };
          return r.createElement(
            "div",
            { className: "react-colorful__saturation", style: o },
            r.createElement(
              Wi,
              {
                onMove: function (e) {
                  n({ s: 100 * e.left, v: 100 - 100 * e.top });
                },
                onKey: function (e) {
                  n({
                    s: Ui(t.s + 100 * e.left, 0, 100),
                    v: Ui(t.v - 100 * e.top, 0, 100),
                  });
                },
                "aria-label": "Color",
                "aria-valuetext":
                  "Saturation " + Xi(t.s) + "%, Brightness " + Xi(t.v) + "%",
              },
              r.createElement(Yi, {
                className: "react-colorful__saturation-pointer",
                top: 1 - t.v / 100,
                left: t.s / 100,
                color: qi(t),
              })
            )
          );
        }),
        ia = function (e, t) {
          if (e === t) return !0;
          for (var n in e) if (e[n] !== t[n]) return !1;
          return !0;
        };
      function aa(e, t, n) {
        var o = ji(n),
          i = (0, r.useState)(function () {
            return e.toHsva(t);
          }),
          a = i[0],
          s = i[1],
          l = (0, r.useRef)({ color: t, hsva: a });
        (0, r.useEffect)(
          function () {
            if (!e.equal(t, l.current.color)) {
              var n = e.toHsva(t);
              (l.current = { hsva: n, color: t }), s(n);
            }
          },
          [t, e]
        ),
          (0, r.useEffect)(
            function () {
              var t;
              ia(a, l.current.hsva) ||
                e.equal((t = e.fromHsva(a)), l.current.color) ||
                ((l.current = { hsva: a, color: t }), o(t));
            },
            [a, e, o]
          );
        var c = (0, r.useCallback)(function (e) {
          s(function (t) {
            return Object.assign({}, t, e);
          });
        }, []);
        return [a, c];
      }
      var sa,
        la = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect,
        ca = new Map(),
        ua = function (e) {
          la(function () {
            var t = e.current ? e.current.ownerDocument : document;
            if (void 0 !== t && !ca.has(t)) {
              var r = t.createElement("style");
              (r.innerHTML =
                '.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}'),
                ca.set(t, r);
              var o = sa || n.nc;
              o && r.setAttribute("nonce", o), t.head.appendChild(r);
            }
          }, []);
        },
        fa = function (e) {
          var t = e.className,
            n = e.colorModel,
            o = e.color,
            i = void 0 === o ? n.defaultColor : o,
            a = e.onChange,
            s = Ni(e, ["className", "colorModel", "color", "onChange"]),
            l = (0, r.useRef)(null);
          ua(l);
          var c = aa(n, i, a),
            u = c[0],
            f = c[1],
            d = Vi(["react-colorful", t]);
          return r.createElement(
            "div",
            zi({}, s, { ref: l, className: d }),
            r.createElement(oa, { hsva: u, onChange: f }),
            r.createElement(ra, {
              hue: u.h,
              onChange: f,
              className: "react-colorful__last-control",
            })
          );
        },
        da = function (e) {
          var t = e.className,
            n = e.hsva,
            o = e.onChange,
            i = {
              backgroundImage:
                "linear-gradient(90deg, " +
                ea(Object.assign({}, n, { a: 0 })) +
                ", " +
                ea(Object.assign({}, n, { a: 1 })) +
                ")",
            },
            a = Vi(["react-colorful__alpha", t]);
          return r.createElement(
            "div",
            { className: a },
            r.createElement("div", {
              className: "react-colorful__alpha-gradient",
              style: i,
            }),
            r.createElement(
              Wi,
              {
                onMove: function (e) {
                  o({ a: e.left });
                },
                onKey: function (e) {
                  o({ a: Ui(n.a + e.left) });
                },
                "aria-label": "Alpha",
                "aria-valuetext": Xi(100 * n.a) + "%",
              },
              r.createElement(Yi, {
                className: "react-colorful__alpha-pointer",
                left: n.a,
                color: ea(n),
              })
            )
          );
        },
        pa = function (e) {
          var t = e.className,
            n = e.colorModel,
            o = e.color,
            i = void 0 === o ? n.defaultColor : o,
            a = e.onChange,
            s = Ni(e, ["className", "colorModel", "color", "onChange"]),
            l = (0, r.useRef)(null);
          ua(l);
          var c = aa(n, i, a),
            u = c[0],
            f = c[1],
            d = Vi(["react-colorful", t]);
          return r.createElement(
            "div",
            zi({}, s, { ref: l, className: d }),
            r.createElement(oa, { hsva: u, onChange: f }),
            r.createElement(ra, { hue: u.h, onChange: f }),
            r.createElement(da, {
              hsva: u,
              onChange: f,
              className: "react-colorful__last-control",
            })
          );
        },
        ha = {
          defaultColor: { r: 0, g: 0, b: 0, a: 1 },
          toHsva: na,
          fromHsva: ta,
          equal: ia,
        },
        ma = function (e) {
          return r.createElement(pa, zi({}, e, { colorModel: ha }));
        },
        ga = {
          defaultColor: { r: 0, g: 0, b: 0 },
          toHsva: function (e) {
            return na({ r: e.r, g: e.g, b: e.b, a: 1 });
          },
          fromHsva: function (e) {
            return { r: (t = ta(e)).r, g: t.g, b: t.b };
            var t;
          },
          equal: ia,
        },
        va = function (e) {
          return r.createElement(fa, zi({}, e, { colorModel: ga }));
        },
        ya = n(45697),
        ba = n.n(ya);
      function Aa(e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              l(r.next(e));
            } catch (t) {
              i(t);
            }
          }
          function s(e) {
            try {
              l(r.throw(e));
            } catch (t) {
              i(t);
            }
          }
          function l(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(a, s);
          }
          l((r = r.apply(e, t || [])).next());
        });
      }
      function Ba(e, t) {
        var n,
          r,
          o,
          i,
          a = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (i = { next: s(0), throw: s(1), return: s(2) }),
          "function" === typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function s(i) {
          return function (s) {
            return (function (i) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; a; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (o =
                        2 & i[0]
                          ? r.return
                          : i[0]
                          ? r.throw || ((o = r.return) && o.call(r), 0)
                          : r.next) &&
                      !(o = o.call(r, i[1])).done)
                  )
                    return o;
                  switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                    case 0:
                    case 1:
                      o = i;
                      break;
                    case 4:
                      return a.label++, { value: i[1], done: !1 };
                    case 5:
                      a.label++, (r = i[1]), (i = [0]);
                      continue;
                    case 7:
                      (i = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                        (6 === i[0] || 2 === i[0])
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                        a.label = i[1];
                        break;
                      }
                      if (6 === i[0] && a.label < o[1]) {
                        (a.label = o[1]), (o = i);
                        break;
                      }
                      if (o && a.label < o[2]) {
                        (a.label = o[2]), a.ops.push(i);
                        break;
                      }
                      o[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  i = t.call(e, a);
                } catch (s) {
                  (i = [6, s]), (r = 0);
                } finally {
                  n = o = 0;
                }
              if (5 & i[0]) throw i[1];
              return { value: i[0] ? i[1] : void 0, done: !0 };
            })([i, s]);
          };
        }
      }
      Object.create;
      function Ca(e, t) {
        var n = "function" === typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          o,
          i = n.call(e),
          a = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
            a.push(r.value);
        } catch (s) {
          o = { error: s };
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return a;
      }
      Object.create;
      var xa = new Map([
        ["aac", "audio/aac"],
        ["abw", "application/x-abiword"],
        ["arc", "application/x-freearc"],
        ["avif", "image/avif"],
        ["avi", "video/x-msvideo"],
        ["azw", "application/vnd.amazon.ebook"],
        ["bin", "application/octet-stream"],
        ["bmp", "image/bmp"],
        ["bz", "application/x-bzip"],
        ["bz2", "application/x-bzip2"],
        ["cda", "application/x-cdf"],
        ["csh", "application/x-csh"],
        ["css", "text/css"],
        ["csv", "text/csv"],
        ["doc", "application/msword"],
        [
          "docx",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ],
        ["eot", "application/vnd.ms-fontobject"],
        ["epub", "application/epub+zip"],
        ["gz", "application/gzip"],
        ["gif", "image/gif"],
        ["heic", "image/heic"],
        ["heif", "image/heif"],
        ["htm", "text/html"],
        ["html", "text/html"],
        ["ico", "image/vnd.microsoft.icon"],
        ["ics", "text/calendar"],
        ["jar", "application/java-archive"],
        ["jpeg", "image/jpeg"],
        ["jpg", "image/jpeg"],
        ["js", "text/javascript"],
        ["json", "application/json"],
        ["jsonld", "application/ld+json"],
        ["mid", "audio/midi"],
        ["midi", "audio/midi"],
        ["mjs", "text/javascript"],
        ["mp3", "audio/mpeg"],
        ["mp4", "video/mp4"],
        ["mpeg", "video/mpeg"],
        ["mpkg", "application/vnd.apple.installer+xml"],
        ["odp", "application/vnd.oasis.opendocument.presentation"],
        ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
        ["odt", "application/vnd.oasis.opendocument.text"],
        ["oga", "audio/ogg"],
        ["ogv", "video/ogg"],
        ["ogx", "application/ogg"],
        ["opus", "audio/opus"],
        ["otf", "font/otf"],
        ["png", "image/png"],
        ["pdf", "application/pdf"],
        ["php", "application/x-httpd-php"],
        ["ppt", "application/vnd.ms-powerpoint"],
        [
          "pptx",
          "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        ],
        ["rar", "application/vnd.rar"],
        ["rtf", "application/rtf"],
        ["sh", "application/x-sh"],
        ["svg", "image/svg+xml"],
        ["swf", "application/x-shockwave-flash"],
        ["tar", "application/x-tar"],
        ["tif", "image/tiff"],
        ["tiff", "image/tiff"],
        ["ts", "video/mp2t"],
        ["ttf", "font/ttf"],
        ["txt", "text/plain"],
        ["vsd", "application/vnd.visio"],
        ["wav", "audio/wav"],
        ["weba", "audio/webm"],
        ["webm", "video/webm"],
        ["webp", "image/webp"],
        ["woff", "font/woff"],
        ["woff2", "font/woff2"],
        ["xhtml", "application/xhtml+xml"],
        ["xls", "application/vnd.ms-excel"],
        [
          "xlsx",
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        ],
        ["xml", "application/xml"],
        ["xul", "application/vnd.mozilla.xul+xml"],
        ["zip", "application/zip"],
        ["7z", "application/x-7z-compressed"],
        ["mkv", "video/x-matroska"],
        ["mov", "video/quicktime"],
        ["msg", "application/vnd.ms-outlook"],
      ]);
      function wa(e, t) {
        var n = (function (e) {
          var t = e.name;
          if (t && -1 !== t.lastIndexOf(".") && !e.type) {
            var n = t.split(".").pop().toLowerCase(),
              r = xa.get(n);
            r &&
              Object.defineProperty(e, "type", {
                value: r,
                writable: !1,
                configurable: !1,
                enumerable: !0,
              });
          }
          return e;
        })(e);
        if ("string" !== typeof n.path) {
          var r = e.webkitRelativePath;
          Object.defineProperty(n, "path", {
            value:
              "string" === typeof t
                ? t
                : "string" === typeof r && r.length > 0
                ? r
                : e.name,
            writable: !1,
            configurable: !1,
            enumerable: !0,
          });
        }
        return n;
      }
      var _a = [".DS_Store", "Thumbs.db"];
      function Ea(e) {
        return "object" === typeof e && null !== e;
      }
      function Sa(e) {
        return ka(e.target.files).map(function (e) {
          return wa(e);
        });
      }
      function Ma(e) {
        return Aa(this, void 0, void 0, function () {
          return Ba(this, function (t) {
            switch (t.label) {
              case 0:
                return [
                  4,
                  Promise.all(
                    e.map(function (e) {
                      return e.getFile();
                    })
                  ),
                ];
              case 1:
                return [
                  2,
                  t.sent().map(function (e) {
                    return wa(e);
                  }),
                ];
            }
          });
        });
      }
      function Ra(e, t) {
        return Aa(this, void 0, void 0, function () {
          var n;
          return Ba(this, function (r) {
            switch (r.label) {
              case 0:
                return null === e
                  ? [2, []]
                  : e.items
                  ? ((n = ka(e.items).filter(function (e) {
                      return "file" === e.kind;
                    })),
                    "drop" !== t ? [2, n] : [4, Promise.all(n.map(Ta))])
                  : [3, 2];
              case 1:
                return [2, Ia(Pa(r.sent()))];
              case 2:
                return [
                  2,
                  Ia(
                    ka(e.files).map(function (e) {
                      return wa(e);
                    })
                  ),
                ];
            }
          });
        });
      }
      function Ia(e) {
        return e.filter(function (e) {
          return -1 === _a.indexOf(e.name);
        });
      }
      function ka(e) {
        if (null === e) return [];
        for (var t = [], n = 0; n < e.length; n++) {
          var r = e[n];
          t.push(r);
        }
        return t;
      }
      function Ta(e) {
        if ("function" !== typeof e.webkitGetAsEntry) return Fa(e);
        var t = e.webkitGetAsEntry();
        return t && t.isDirectory ? Oa(t) : Fa(e);
      }
      function Pa(e) {
        return e.reduce(function (e, t) {
          return (function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e = e.concat(Ca(arguments[t]));
            return e;
          })(e, Array.isArray(t) ? Pa(t) : [t]);
        }, []);
      }
      function Fa(e) {
        var t = e.getAsFile();
        if (!t) return Promise.reject(e + " is not a File");
        var n = wa(t);
        return Promise.resolve(n);
      }
      function Da(e) {
        return Aa(this, void 0, void 0, function () {
          return Ba(this, function (t) {
            return [2, e.isDirectory ? Oa(e) : La(e)];
          });
        });
      }
      function Oa(e) {
        var t = e.createReader();
        return new Promise(function (e, n) {
          var r = [];
          !(function o() {
            var i = this;
            t.readEntries(
              function (t) {
                return Aa(i, void 0, void 0, function () {
                  var i, a, s;
                  return Ba(this, function (l) {
                    switch (l.label) {
                      case 0:
                        if (t.length) return [3, 5];
                        l.label = 1;
                      case 1:
                        return l.trys.push([1, 3, , 4]), [4, Promise.all(r)];
                      case 2:
                        return (i = l.sent()), e(i), [3, 4];
                      case 3:
                        return (a = l.sent()), n(a), [3, 4];
                      case 4:
                        return [3, 6];
                      case 5:
                        (s = Promise.all(t.map(Da))),
                          r.push(s),
                          o(),
                          (l.label = 6);
                      case 6:
                        return [2];
                    }
                  });
                });
              },
              function (e) {
                n(e);
              }
            );
          })();
        });
      }
      function La(e) {
        return Aa(this, void 0, void 0, function () {
          return Ba(this, function (t) {
            return [
              2,
              new Promise(function (t, n) {
                e.file(
                  function (n) {
                    var r = wa(n, e.fullPath);
                    t(r);
                  },
                  function (e) {
                    n(e);
                  }
                );
              }),
            ];
          });
        });
      }
      var Ga = n(58363);
      function Ha(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function za(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ha(Object(n), !0).forEach(function (t) {
                Na(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ha(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function Na(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function ja(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null == n) return;
            var r,
              o,
              i = [],
              a = !0,
              s = !1;
            try {
              for (
                n = n.call(e);
                !(a = (r = n.next()).done) &&
                (i.push(r.value), !t || i.length !== t);
                a = !0
              );
            } catch (l) {
              (s = !0), (o = l);
            } finally {
              try {
                a || null == n.return || n.return();
              } finally {
                if (s) throw o;
              }
            }
            return i;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return Ua(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return Ua(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Ua(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var Ja = "file-invalid-type",
        Ka = "file-too-large",
        $a = "file-too-small",
        Qa = "too-many-files",
        Wa = function (e) {
          e = Array.isArray(e) && 1 === e.length ? e[0] : e;
          var t = Array.isArray(e) ? "one of ".concat(e.join(", ")) : e;
          return { code: Ja, message: "File type must be ".concat(t) };
        },
        Va = function (e) {
          return {
            code: Ka,
            message: "File is larger than "
              .concat(e, " ")
              .concat(1 === e ? "byte" : "bytes"),
          };
        },
        Ya = function (e) {
          return {
            code: $a,
            message: "File is smaller than "
              .concat(e, " ")
              .concat(1 === e ? "byte" : "bytes"),
          };
        },
        Xa = { code: Qa, message: "Too many files" };
      function Za(e, t) {
        var n = "application/x-moz-file" === e.type || (0, Ga.Z)(e, t);
        return [n, n ? null : Wa(t)];
      }
      function qa(e, t, n) {
        if (es(e.size))
          if (es(t) && es(n)) {
            if (e.size > n) return [!1, Va(n)];
            if (e.size < t) return [!1, Ya(t)];
          } else {
            if (es(t) && e.size < t) return [!1, Ya(t)];
            if (es(n) && e.size > n) return [!1, Va(n)];
          }
        return [!0, null];
      }
      function es(e) {
        return void 0 !== e && null !== e;
      }
      function ts(e) {
        var t = e.files,
          n = e.accept,
          r = e.minSize,
          o = e.maxSize,
          i = e.multiple,
          a = e.maxFiles;
        return (
          !((!i && t.length > 1) || (i && a >= 1 && t.length > a)) &&
          t.every(function (e) {
            var t = ja(Za(e, n), 1)[0],
              i = ja(qa(e, r, o), 1)[0];
            return t && i;
          })
        );
      }
      function ns(e) {
        return "function" === typeof e.isPropagationStopped
          ? e.isPropagationStopped()
          : "undefined" !== typeof e.cancelBubble && e.cancelBubble;
      }
      function rs(e) {
        return e.dataTransfer
          ? Array.prototype.some.call(e.dataTransfer.types, function (e) {
              return "Files" === e || "application/x-moz-file" === e;
            })
          : !!e.target && !!e.target.files;
      }
      function os(e) {
        e.preventDefault();
      }
      function is(e) {
        return -1 !== e.indexOf("MSIE") || -1 !== e.indexOf("Trident/");
      }
      function as(e) {
        return -1 !== e.indexOf("Edge/");
      }
      function ss() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : window.navigator.userAgent;
        return is(e) || as(e);
      }
      function ls() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return function (e) {
          for (
            var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
            o < n;
            o++
          )
            r[o - 1] = arguments[o];
          return t.some(function (t) {
            return !ns(e) && t && t.apply(void 0, [e].concat(r)), ns(e);
          });
        };
      }
      function cs() {
        return "showOpenFilePicker" in window;
      }
      function us(e) {
        return (
          (e = "string" === typeof e ? e.split(",") : e),
          [
            {
              description: "everything",
              accept: Array.isArray(e)
                ? e
                    .filter(function (e) {
                      return (
                        "audio/*" === e ||
                        "video/*" === e ||
                        "image/*" === e ||
                        "text/*" === e ||
                        /\w+\/[-+.\w]+/g.test(e)
                      );
                    })
                    .reduce(function (e, t) {
                      return za(za({}, e), {}, Na({}, t, []));
                    }, {})
                : {},
            },
          ]
        );
      }
      function fs(e) {
        return (
          e instanceof DOMException &&
          ("AbortError" === e.name || e.code === e.ABORT_ERR)
        );
      }
      function ds(e) {
        return (
          e instanceof DOMException &&
          ("SecurityError" === e.name || e.code === e.SECURITY_ERR)
        );
      }
      var ps = ["children"],
        hs = ["open"],
        ms = [
          "refKey",
          "role",
          "onKeyDown",
          "onFocus",
          "onBlur",
          "onClick",
          "onDragEnter",
          "onDragOver",
          "onDragLeave",
          "onDrop",
        ],
        gs = ["refKey", "onChange", "onClick"];
      function vs(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return As(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          bs(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function ys(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null == n) return;
            var r,
              o,
              i = [],
              a = !0,
              s = !1;
            try {
              for (
                n = n.call(e);
                !(a = (r = n.next()).done) &&
                (i.push(r.value), !t || i.length !== t);
                a = !0
              );
            } catch (l) {
              (s = !0), (o = l);
            } finally {
              try {
                a || null == n.return || n.return();
              } finally {
                if (s) throw o;
              }
            }
            return i;
          })(e, t) ||
          bs(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function bs(e, t) {
        if (e) {
          if ("string" === typeof e) return As(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? As(e, t)
              : void 0
          );
        }
      }
      function As(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function Bs(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Cs(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Bs(Object(n), !0).forEach(function (t) {
                xs(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Bs(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function xs(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function ws(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      var _s = (0, r.forwardRef)(function (e, t) {
        var n = e.children,
          o = Ms(ws(e, ps)),
          i = o.open,
          a = ws(o, hs);
        return (
          (0, r.useImperativeHandle)(
            t,
            function () {
              return { open: i };
            },
            [i]
          ),
          r.createElement(r.Fragment, null, n(Cs(Cs({}, a), {}, { open: i })))
        );
      });
      _s.displayName = "Dropzone";
      var Es = {
        disabled: !1,
        getFilesFromEvent: function (e) {
          return Aa(this, void 0, void 0, function () {
            return Ba(this, function (t) {
              return Ea(e) && Ea(e.dataTransfer)
                ? [2, Ra(e.dataTransfer, e.type)]
                : (function (e) {
                    return Ea(e) && Ea(e.target);
                  })(e)
                ? [2, Sa(e)]
                : Array.isArray(e) &&
                  e.every(function (e) {
                    return "getFile" in e && "function" === typeof e.getFile;
                  })
                ? [2, Ma(e)]
                : [2, []];
            });
          });
        },
        maxSize: 1 / 0,
        minSize: 0,
        multiple: !0,
        maxFiles: 0,
        preventDropOnDocument: !0,
        noClick: !1,
        noKeyboard: !1,
        noDrag: !1,
        noDragEventsBubbling: !1,
        validator: null,
        useFsAccessApi: !0,
      };
      (_s.defaultProps = Es),
        (_s.propTypes = {
          children: ba().func,
          accept: ba().oneOfType([ba().string, ba().arrayOf(ba().string)]),
          multiple: ba().bool,
          preventDropOnDocument: ba().bool,
          noClick: ba().bool,
          noKeyboard: ba().bool,
          noDrag: ba().bool,
          noDragEventsBubbling: ba().bool,
          minSize: ba().number,
          maxSize: ba().number,
          maxFiles: ba().number,
          disabled: ba().bool,
          getFilesFromEvent: ba().func,
          onFileDialogCancel: ba().func,
          onFileDialogOpen: ba().func,
          useFsAccessApi: ba().bool,
          onDragEnter: ba().func,
          onDragLeave: ba().func,
          onDragOver: ba().func,
          onDrop: ba().func,
          onDropAccepted: ba().func,
          onDropRejected: ba().func,
          validator: ba().func,
        });
      var Ss = {
        isFocused: !1,
        isFileDialogActive: !1,
        isDragActive: !1,
        isDragAccept: !1,
        isDragReject: !1,
        draggedFiles: [],
        acceptedFiles: [],
        fileRejections: [],
      };
      function Ms() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = Cs(Cs({}, Es), e),
          n = t.accept,
          o = t.disabled,
          i = t.getFilesFromEvent,
          a = t.maxSize,
          s = t.minSize,
          l = t.multiple,
          c = t.maxFiles,
          u = t.onDragEnter,
          f = t.onDragLeave,
          d = t.onDragOver,
          p = t.onDrop,
          h = t.onDropAccepted,
          m = t.onDropRejected,
          g = t.onFileDialogCancel,
          v = t.onFileDialogOpen,
          y = t.useFsAccessApi,
          b = t.preventDropOnDocument,
          A = t.noClick,
          B = t.noKeyboard,
          C = t.noDrag,
          x = t.noDragEventsBubbling,
          w = t.validator,
          _ = (0, r.useMemo)(
            function () {
              return "function" === typeof v ? v : Is;
            },
            [v]
          ),
          E = (0, r.useMemo)(
            function () {
              return "function" === typeof g ? g : Is;
            },
            [g]
          ),
          S = (0, r.useRef)(null),
          M = (0, r.useRef)(null),
          R = (0, r.useReducer)(Rs, Ss),
          I = ys(R, 2),
          k = I[0],
          T = I[1],
          P = k.isFocused,
          F = k.isFileDialogActive,
          D = k.draggedFiles,
          O = (0, r.useRef)(
            "undefined" !== typeof window && window.isSecureContext && y && cs()
          ),
          L = function () {
            !O.current &&
              F &&
              setTimeout(function () {
                M.current &&
                  (M.current.files.length || (T({ type: "closeDialog" }), E()));
              }, 300);
          };
        (0, r.useEffect)(
          function () {
            return (
              window.addEventListener("focus", L, !1),
              function () {
                window.removeEventListener("focus", L, !1);
              }
            );
          },
          [M, F, E, O]
        );
        var G = (0, r.useRef)([]),
          H = function (e) {
            (S.current && S.current.contains(e.target)) ||
              (e.preventDefault(), (G.current = []));
          };
        (0, r.useEffect)(
          function () {
            return (
              b &&
                (document.addEventListener("dragover", os, !1),
                document.addEventListener("drop", H, !1)),
              function () {
                b &&
                  (document.removeEventListener("dragover", os),
                  document.removeEventListener("drop", H));
              }
            );
          },
          [S, b]
        );
        var z = (0, r.useCallback)(
            function (e) {
              e.preventDefault(),
                e.persist(),
                q(e),
                (G.current = [].concat(vs(G.current), [e.target])),
                rs(e) &&
                  Promise.resolve(i(e)).then(function (t) {
                    (ns(e) && !x) ||
                      (T({
                        draggedFiles: t,
                        isDragActive: !0,
                        type: "setDraggedFiles",
                      }),
                      u && u(e));
                  });
            },
            [i, u, x]
          ),
          N = (0, r.useCallback)(
            function (e) {
              e.preventDefault(), e.persist(), q(e);
              var t = rs(e);
              if (t && e.dataTransfer)
                try {
                  e.dataTransfer.dropEffect = "copy";
                } catch (n) {}
              return t && d && d(e), !1;
            },
            [d, x]
          ),
          j = (0, r.useCallback)(
            function (e) {
              e.preventDefault(), e.persist(), q(e);
              var t = G.current.filter(function (e) {
                  return S.current && S.current.contains(e);
                }),
                n = t.indexOf(e.target);
              -1 !== n && t.splice(n, 1),
                (G.current = t),
                t.length > 0 ||
                  (T({
                    isDragActive: !1,
                    type: "setDraggedFiles",
                    draggedFiles: [],
                  }),
                  rs(e) && f && f(e));
            },
            [S, f, x]
          ),
          U = (0, r.useCallback)(
            function (e, t) {
              var r = [],
                o = [];
              e.forEach(function (e) {
                var t = ys(Za(e, n), 2),
                  i = t[0],
                  l = t[1],
                  c = ys(qa(e, s, a), 2),
                  u = c[0],
                  f = c[1],
                  d = w ? w(e) : null;
                if (i && u && !d) r.push(e);
                else {
                  var p = [l, f];
                  d && (p = p.concat(d)),
                    o.push({
                      file: e,
                      errors: p.filter(function (e) {
                        return e;
                      }),
                    });
                }
              }),
                ((!l && r.length > 1) || (l && c >= 1 && r.length > c)) &&
                  (r.forEach(function (e) {
                    o.push({ file: e, errors: [Xa] });
                  }),
                  r.splice(0)),
                T({ acceptedFiles: r, fileRejections: o, type: "setFiles" }),
                p && p(r, o, t),
                o.length > 0 && m && m(o, t),
                r.length > 0 && h && h(r, t);
            },
            [T, l, n, s, a, c, p, h, m, w]
          ),
          J = (0, r.useCallback)(
            function (e) {
              e.preventDefault(),
                e.persist(),
                q(e),
                (G.current = []),
                rs(e) &&
                  Promise.resolve(i(e)).then(function (t) {
                    (ns(e) && !x) || U(t, e);
                  }),
                T({ type: "reset" });
            },
            [i, U, x]
          ),
          K = (0, r.useCallback)(
            function () {
              if (O.current) {
                T({ type: "openDialog" }), _();
                var e = { multiple: l, types: us(n) };
                window
                  .showOpenFilePicker(e)
                  .then(function (e) {
                    return i(e);
                  })
                  .then(function (e) {
                    U(e, null), T({ type: "closeDialog" });
                  })
                  .catch(function (e) {
                    fs(e)
                      ? (E(e), T({ type: "closeDialog" }))
                      : ds(e) &&
                        ((O.current = !1),
                        M.current &&
                          ((M.current.value = null), M.current.click()));
                  });
              } else
                M.current &&
                  (T({ type: "openDialog" }),
                  _(),
                  (M.current.value = null),
                  M.current.click());
            },
            [T, _, E, y, U, n, l]
          ),
          $ = (0, r.useCallback)(
            function (e) {
              S.current &&
                S.current.isEqualNode(e.target) &&
                ((" " !== e.key &&
                  "Enter" !== e.key &&
                  32 !== e.keyCode &&
                  13 !== e.keyCode) ||
                  (e.preventDefault(), K()));
            },
            [S, K]
          ),
          Q = (0, r.useCallback)(function () {
            T({ type: "focus" });
          }, []),
          W = (0, r.useCallback)(function () {
            T({ type: "blur" });
          }, []),
          V = (0, r.useCallback)(
            function () {
              A || (ss() ? setTimeout(K, 0) : K());
            },
            [A, K]
          ),
          Y = function (e) {
            return o ? null : e;
          },
          X = function (e) {
            return B ? null : Y(e);
          },
          Z = function (e) {
            return C ? null : Y(e);
          },
          q = function (e) {
            x && e.stopPropagation();
          },
          ee = (0, r.useMemo)(
            function () {
              return function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t = e.refKey,
                  n = void 0 === t ? "ref" : t,
                  r = e.role,
                  i = e.onKeyDown,
                  a = e.onFocus,
                  s = e.onBlur,
                  l = e.onClick,
                  c = e.onDragEnter,
                  u = e.onDragOver,
                  f = e.onDragLeave,
                  d = e.onDrop,
                  p = ws(e, ms);
                return Cs(
                  Cs(
                    xs(
                      {
                        onKeyDown: X(ls(i, $)),
                        onFocus: X(ls(a, Q)),
                        onBlur: X(ls(s, W)),
                        onClick: Y(ls(l, V)),
                        onDragEnter: Z(ls(c, z)),
                        onDragOver: Z(ls(u, N)),
                        onDragLeave: Z(ls(f, j)),
                        onDrop: Z(ls(d, J)),
                        role: "string" === typeof r && "" !== r ? r : "button",
                      },
                      n,
                      S
                    ),
                    o || B ? {} : { tabIndex: 0 }
                  ),
                  p
                );
              };
            },
            [S, $, Q, W, V, z, N, j, J, B, C, o]
          ),
          te = (0, r.useCallback)(function (e) {
            e.stopPropagation();
          }, []),
          ne = (0, r.useMemo)(
            function () {
              return function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t = e.refKey,
                  r = void 0 === t ? "ref" : t,
                  o = e.onChange,
                  i = e.onClick,
                  a = ws(e, gs),
                  s = xs(
                    {
                      accept: n,
                      multiple: l,
                      type: "file",
                      style: { display: "none" },
                      onChange: Y(ls(o, J)),
                      onClick: Y(ls(i, te)),
                      tabIndex: -1,
                    },
                    r,
                    M
                  );
                return Cs(Cs({}, s), a);
              };
            },
            [M, n, l, J, o]
          ),
          re = D.length,
          oe =
            re > 0 &&
            ts({
              files: D,
              accept: n,
              minSize: s,
              maxSize: a,
              multiple: l,
              maxFiles: c,
            }),
          ie = re > 0 && !oe;
        return Cs(
          Cs({}, k),
          {},
          {
            isDragAccept: oe,
            isDragReject: ie,
            isFocused: P && !o,
            getRootProps: ee,
            getInputProps: ne,
            rootRef: S,
            inputRef: M,
            open: Y(K),
          }
        );
      }
      function Rs(e, t) {
        switch (t.type) {
          case "focus":
            return Cs(Cs({}, e), {}, { isFocused: !0 });
          case "blur":
            return Cs(Cs({}, e), {}, { isFocused: !1 });
          case "openDialog":
            return Cs(Cs({}, Ss), {}, { isFileDialogActive: !0 });
          case "closeDialog":
            return Cs(Cs({}, e), {}, { isFileDialogActive: !1 });
          case "setDraggedFiles":
            var n = t.isDragActive,
              r = t.draggedFiles;
            return Cs(Cs({}, e), {}, { draggedFiles: r, isDragActive: n });
          case "setFiles":
            return Cs(
              Cs({}, e),
              {},
              {
                acceptedFiles: t.acceptedFiles,
                fileRejections: t.fileRejections,
              }
            );
          case "reset":
            return Cs({}, Ss);
          default:
            return e;
        }
      }
      function Is() {}
      var ks = n(14671);
      Object.defineProperty,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      Object.defineProperty,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      var Ts = n(34529),
        Ps = n.n(Ts);
      const Fs = (...e) => e.filter(Boolean).join(".");
      function Ds(e = 3) {
        const t = (0, r.useRef)(null),
          n = (0, r.useRef)(null),
          [o, i] = (0, r.useState)(!1),
          a = (0, r.useCallback)(() => i(!0), []),
          s = (0, r.useCallback)(() => i(!1), []);
        return (
          (0, r.useLayoutEffect)(() => {
            if (o) {
              const {
                  bottom: r,
                  top: o,
                  left: i,
                } = t.current.getBoundingClientRect(),
                { height: a } = n.current.getBoundingClientRect(),
                s = r + a > window.innerHeight - 40 ? "up" : "down";
              (n.current.style.position = "fixed"),
                (n.current.style.zIndex = "10000"),
                (n.current.style.left = i + "px"),
                "down" === s
                  ? (n.current.style.top = r + e + "px")
                  : (n.current.style.bottom =
                      window.innerHeight - o + e + "px");
            }
          }, [e, o]),
          { popinRef: t, wrapperRef: n, shown: o, show: a, hide: s }
        );
      }
      !(function (e) {
        e.forEach(function (e) {
          Hi.indexOf(e) < 0 && (e(Li, ki), Hi.push(e));
        });
      })([
        function (e, t) {
          var n = {
              white: "#ffffff",
              bisque: "#ffe4c4",
              blue: "#0000ff",
              cadetblue: "#5f9ea0",
              chartreuse: "#7fff00",
              chocolate: "#d2691e",
              coral: "#ff7f50",
              antiquewhite: "#faebd7",
              aqua: "#00ffff",
              azure: "#f0ffff",
              whitesmoke: "#f5f5f5",
              papayawhip: "#ffefd5",
              plum: "#dda0dd",
              blanchedalmond: "#ffebcd",
              black: "#000000",
              gold: "#ffd700",
              goldenrod: "#daa520",
              gainsboro: "#dcdcdc",
              cornsilk: "#fff8dc",
              cornflowerblue: "#6495ed",
              burlywood: "#deb887",
              aquamarine: "#7fffd4",
              beige: "#f5f5dc",
              crimson: "#dc143c",
              cyan: "#00ffff",
              darkblue: "#00008b",
              darkcyan: "#008b8b",
              darkgoldenrod: "#b8860b",
              darkkhaki: "#bdb76b",
              darkgray: "#a9a9a9",
              darkgreen: "#006400",
              darkgrey: "#a9a9a9",
              peachpuff: "#ffdab9",
              darkmagenta: "#8b008b",
              darkred: "#8b0000",
              darkorchid: "#9932cc",
              darkorange: "#ff8c00",
              darkslateblue: "#483d8b",
              gray: "#808080",
              darkslategray: "#2f4f4f",
              darkslategrey: "#2f4f4f",
              deeppink: "#ff1493",
              deepskyblue: "#00bfff",
              wheat: "#f5deb3",
              firebrick: "#b22222",
              floralwhite: "#fffaf0",
              ghostwhite: "#f8f8ff",
              darkviolet: "#9400d3",
              magenta: "#ff00ff",
              green: "#008000",
              dodgerblue: "#1e90ff",
              grey: "#808080",
              honeydew: "#f0fff0",
              hotpink: "#ff69b4",
              blueviolet: "#8a2be2",
              forestgreen: "#228b22",
              lawngreen: "#7cfc00",
              indianred: "#cd5c5c",
              indigo: "#4b0082",
              fuchsia: "#ff00ff",
              brown: "#a52a2a",
              maroon: "#800000",
              mediumblue: "#0000cd",
              lightcoral: "#f08080",
              darkturquoise: "#00ced1",
              lightcyan: "#e0ffff",
              ivory: "#fffff0",
              lightyellow: "#ffffe0",
              lightsalmon: "#ffa07a",
              lightseagreen: "#20b2aa",
              linen: "#faf0e6",
              mediumaquamarine: "#66cdaa",
              lemonchiffon: "#fffacd",
              lime: "#00ff00",
              khaki: "#f0e68c",
              mediumseagreen: "#3cb371",
              limegreen: "#32cd32",
              mediumspringgreen: "#00fa9a",
              lightskyblue: "#87cefa",
              lightblue: "#add8e6",
              midnightblue: "#191970",
              lightpink: "#ffb6c1",
              mistyrose: "#ffe4e1",
              moccasin: "#ffe4b5",
              mintcream: "#f5fffa",
              lightslategray: "#778899",
              lightslategrey: "#778899",
              navajowhite: "#ffdead",
              navy: "#000080",
              mediumvioletred: "#c71585",
              powderblue: "#b0e0e6",
              palegoldenrod: "#eee8aa",
              oldlace: "#fdf5e6",
              paleturquoise: "#afeeee",
              mediumturquoise: "#48d1cc",
              mediumorchid: "#ba55d3",
              rebeccapurple: "#663399",
              lightsteelblue: "#b0c4de",
              mediumslateblue: "#7b68ee",
              thistle: "#d8bfd8",
              tan: "#d2b48c",
              orchid: "#da70d6",
              mediumpurple: "#9370db",
              purple: "#800080",
              pink: "#ffc0cb",
              skyblue: "#87ceeb",
              springgreen: "#00ff7f",
              palegreen: "#98fb98",
              red: "#ff0000",
              yellow: "#ffff00",
              slateblue: "#6a5acd",
              lavenderblush: "#fff0f5",
              peru: "#cd853f",
              palevioletred: "#db7093",
              violet: "#ee82ee",
              teal: "#008080",
              slategray: "#708090",
              slategrey: "#708090",
              aliceblue: "#f0f8ff",
              darkseagreen: "#8fbc8f",
              darkolivegreen: "#556b2f",
              greenyellow: "#adff2f",
              seagreen: "#2e8b57",
              seashell: "#fff5ee",
              tomato: "#ff6347",
              silver: "#c0c0c0",
              sienna: "#a0522d",
              lavender: "#e6e6fa",
              lightgreen: "#90ee90",
              orange: "#ffa500",
              orangered: "#ff4500",
              steelblue: "#4682b4",
              royalblue: "#4169e1",
              turquoise: "#40e0d0",
              yellowgreen: "#9acd32",
              salmon: "#fa8072",
              saddlebrown: "#8b4513",
              sandybrown: "#f4a460",
              rosybrown: "#bc8f8f",
              darksalmon: "#e9967a",
              lightgoldenrodyellow: "#fafad2",
              snow: "#fffafa",
              lightgrey: "#d3d3d3",
              lightgray: "#d3d3d3",
              dimgray: "#696969",
              dimgrey: "#696969",
              olivedrab: "#6b8e23",
              olive: "#808000",
            },
            r = {};
          for (var o in n) r[n[o]] = o;
          var i = {};
          (e.prototype.toName = function (t) {
            if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b))
              return "transparent";
            var o,
              a,
              s = r[this.toHex()];
            if (s) return s;
            if (null == t ? void 0 : t.closest) {
              var l = this.toRgb(),
                c = 1 / 0,
                u = "black";
              if (!i.length) for (var f in n) i[f] = new e(n[f]).toRgb();
              for (var d in n) {
                var p =
                  ((o = l),
                  (a = i[d]),
                  Math.pow(o.r - a.r, 2) +
                    Math.pow(o.g - a.g, 2) +
                    Math.pow(o.b - a.b, 2));
                p < c && ((c = p), (u = d));
              }
              return u;
            }
          }),
            t.string.push([
              function (t) {
                var r = t.toLowerCase(),
                  o = "transparent" === r ? "#0000" : n[r];
                return o ? new e(o).toRgb() : null;
              },
              "name",
            ]);
        },
      ]);
      const Os = { rgb: "toRgb", hsl: "toHsl", hsv: "toHsv", hex: "toHex" };
      O.extend({ color: () => (e) => Gi(e).isValid() });
      function Ls(e, { format: t, hasAlpha: n, isString: r }) {
        const o = e[Os[t] + (r && "hex" !== t ? "String" : "")]();
        return "object" !== typeof o || n
          ? o
          : (function (e, t) {
              const n = qn({}, e);
              return t.forEach((t) => t in e && delete n[t]), n;
            })(o, ["a"]);
      }
      const Gs = (e, t) => {
        const n = Gi(e);
        if (!n.isValid()) throw Error("Invalid color");
        return Ls(n, t);
      };
      var Hs = Object.freeze({
        __proto__: null,
        schema: (e) => O().color().test(e),
        sanitize: Gs,
        format: (e, t) =>
          Ls(Gi(e), qn(qn({}, t), {}, { isString: !0, format: "hex" })),
        normalize: ({ value: e }) => {
          const t = (function (e) {
              return Pi(e)[1];
            })(e),
            n = {
              format: "name" === t ? "hex" : t,
              hasAlpha:
                "object" === typeof e
                  ? "a" in e
                  : ("hex" === t && 8 === e.length) ||
                    /^(rgba)|(hsla)|(hsva)/.test(e),
              isString: "string" === typeof e,
            };
          return { value: Gs(e, n), settings: n };
        },
      });
      const zs = zr("div", {
          position: "relative",
          boxSizing: "border-box",
          borderRadius: "$sm",
          overflow: "hidden",
          cursor: "pointer",
          height: "$rowHeight",
          width: "$rowHeight",
          backgroundColor: "#fff",
          backgroundImage:
            'url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')',
          $inputStyle: "",
          $hover: "",
          zIndex: 1,
          variants: { active: { true: { $inputStyle: "$accent1" } } },
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: "currentColor",
            zIndex: 1,
          },
        }),
        Ns = zr("div", {
          position: "relative",
          display: "grid",
          gridTemplateColumns: "$sizes$rowHeight auto",
          columnGap: "$colGap",
          alignItems: "center",
        }),
        js = zr("div", {
          width: "$colorPickerWidth",
          height: "$colorPickerHeight",
          ".react-colorful": {
            width: "100%",
            height: "100%",
            boxShadow: "$level2",
            cursor: "crosshair",
          },
          ".react-colorful__saturation": { borderRadius: "$sm $sm 0 0" },
          ".react-colorful__alpha, .react-colorful__hue": { height: 10 },
          ".react-colorful__last-control": { borderRadius: "0 0 $sm $sm" },
          ".react-colorful__pointer": { height: 12, width: 12 },
        });
      function Us(e, t) {
        return "rgb" !== t ? Gi(e).toRgb() : e;
      }
      function Js({ value: e, displayValue: t, settings: n, onUpdate: o }) {
        const { emitOnEditStart: i, emitOnEditEnd: a } = Pr(),
          { format: s, hasAlpha: l } = n,
          { popinRef: c, wrapperRef: u, shown: f, show: d, hide: p } = Ds(),
          h = (0, r.useRef)(0),
          [m, g] = (0, r.useState)(() => Us(e, s)),
          v = l ? ma : va,
          y = () => {
            p(), a(), window.clearTimeout(h.current);
          };
        return (
          (0, r.useEffect)(() => () => window.clearTimeout(h.current), []),
          r.createElement(
            r.Fragment,
            null,
            r.createElement(zs, {
              ref: c,
              active: f,
              onClick: () => (g(Us(e, s)), d(), void i()),
              style: { color: t },
            }),
            f &&
              r.createElement(
                mo,
                null,
                r.createElement(fo, { onPointerUp: y }),
                r.createElement(
                  js,
                  {
                    ref: u,
                    onMouseEnter: () => window.clearTimeout(h.current),
                    onMouseLeave: (e) =>
                      0 === e.buttons &&
                      void (h.current = window.setTimeout(y, 500)),
                  },
                  r.createElement(v, { color: m, onChange: o })
                )
              )
          )
        );
      }
      var Ks = qn(
        {
          component: function () {
            const {
              value: e,
              displayValue: t,
              label: n,
              onChange: o,
              onUpdate: i,
              settings: a,
            } = Pr();
            return r.createElement(
              wo,
              { input: !0 },
              r.createElement(bo, null, n),
              r.createElement(
                Ns,
                null,
                r.createElement(Js, {
                  value: e,
                  displayValue: t,
                  onChange: o,
                  onUpdate: i,
                  settings: a,
                }),
                r.createElement(qr, { value: t, onChange: o, onUpdate: i })
              )
            );
          },
        },
        Hs
      );
      var $s = qn(
        {
          component: function () {
            const {
              label: e,
              displayValue: t,
              onUpdate: n,
              settings: o,
            } = Pr();
            return r.createElement(
              wo,
              { input: !0 },
              r.createElement(bo, null, e),
              r.createElement(ii, { value: t, settings: o, onUpdate: n })
            );
          },
        },
        fi(["x", "y", "z"])
      );
      const Qs = zr("div", {
          $flexCenter: "",
          position: "relative",
          backgroundColor: "$elevation3",
          borderRadius: "$sm",
          cursor: "pointer",
          height: "$rowHeight",
          width: "$rowHeight",
          touchAction: "none",
          $draggable: "",
          $hover: "",
          "&:active": { cursor: "none" },
          "&::after": {
            content: '""',
            backgroundColor: "$accent2",
            height: 4,
            width: 4,
            borderRadius: 2,
          },
        }),
        Ws = zr("div", {
          $flexCenter: "",
          width: "$joystickWidth",
          height: "$joystickHeight",
          borderRadius: "$sm",
          boxShadow: "$level2",
          position: "fixed",
          zIndex: 1e4,
          overflow: "hidden",
          $draggable: "",
          transform: "translate(-50%, -50%)",
          variants: {
            isOutOfBounds: {
              true: { backgroundColor: "$elevation1" },
              false: { backgroundColor: "$elevation3" },
            },
          },
          "> div": {
            position: "absolute",
            $flexCenter: "",
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "$highlight1",
            backgroundColor: "$elevation3",
            width: "80%",
            height: "80%",
            "&::after,&::before": {
              content: '""',
              position: "absolute",
              zindex: 10,
              backgroundColor: "$highlight1",
            },
            "&::before": { width: "100%", height: 1 },
            "&::after": { height: "100%", width: 1 },
          },
          "> span": {
            position: "relative",
            zindex: 100,
            width: 10,
            height: 10,
            backgroundColor: "$accent2",
            borderRadius: "50%",
          },
        });
      function Vs({ value: e, settings: t, onUpdate: n }) {
        const o = (0, r.useRef)(),
          i = (0, r.useRef)(0),
          a = (0, r.useRef)(0),
          s = (0, r.useRef)(1),
          [l, c] = (0, r.useState)(!1),
          [u, f] = (0, r.useState)(!1),
          [d, p] = So(),
          h = (0, r.useRef)(null),
          m = (0, r.useRef)(null);
        (0, r.useLayoutEffect)(() => {
          if (l) {
            const {
              top: e,
              left: t,
              width: n,
              height: r,
            } = h.current.getBoundingClientRect();
            (m.current.style.left = t + n / 2 + "px"),
              (m.current.style.top = e + r / 2 + "px");
          }
        }, [l]);
        const {
            keys: [g, v],
            joystick: y,
          } = t,
          b = "invertY" === y ? 1 : -1,
          {
            [g]: { step: A },
            [v]: { step: B },
          } = t,
          C = $r("sizes", "joystickWidth"),
          x = $r("sizes", "joystickHeight"),
          w = (0.8 * parseFloat(C)) / 2,
          _ = (0.8 * parseFloat(x)) / 2,
          E = (0, r.useCallback)(() => {
            o.current ||
              (f(!0),
              i.current && p({ x: i.current * w }),
              a.current && p({ y: a.current * -_ }),
              (o.current = window.setInterval(() => {
                n((e) => {
                  const t = A * i.current * s.current,
                    n = b * B * a.current * s.current;
                  return Array.isArray(e)
                    ? { [g]: e[0] + t, [v]: e[1] + n }
                    : { [g]: e[g] + t, [v]: e[v] + n };
                });
              }, 16)));
          }, [w, _, n, p, A, B, g, v, b]),
          S = (0, r.useCallback)(() => {
            window.clearTimeout(o.current), (o.current = void 0), f(!1);
          }, []);
        (0, r.useEffect)(() => {
          function e(e) {
            s.current = wr(e);
          }
          return (
            window.addEventListener("keydown", e),
            window.addEventListener("keyup", e),
            () => {
              window.clearTimeout(o.current),
                window.removeEventListener("keydown", e),
                window.removeEventListener("keyup", e);
            }
          );
        }, []);
        const M = Eo(
          ({ first: t, active: r, delta: [o, l], movement: [u, f] }) => {
            t && c(!0);
            const d = er(u, -w, w),
              h = er(f, -_, _);
            (i.current = Math.abs(u) > Math.abs(d) ? Math.sign(u - d) : 0),
              (a.current = Math.abs(f) > Math.abs(h) ? Math.sign(h - f) : 0);
            let m = e[g],
              y = e[v];
            r
              ? (i.current || ((m += o * A * s.current), p({ x: d })),
                a.current || ((y -= b * l * B * s.current), p({ y: h })),
                i.current || a.current ? E() : S(),
                n({ [g]: m, [v]: y }))
              : (c(!1),
                (i.current = 0),
                (a.current = 0),
                p({ x: 0, y: 0 }),
                S());
          }
        );
        return r.createElement(
          Qs,
          kr({ ref: h }, M()),
          l &&
            r.createElement(
              mo,
              null,
              r.createElement(
                Ws,
                { ref: m, isOutOfBounds: u },
                r.createElement("div", null),
                r.createElement("span", { ref: d })
              )
            )
        );
      }
      const Ys = zr("div", {
        display: "grid",
        columnGap: "$colGap",
        variants: {
          withJoystick: {
            true: { gridTemplateColumns: "$sizes$rowHeight auto" },
            false: { gridTemplateColumns: "auto" },
          },
        },
      });
      const Xs = ["joystick"],
        Zs = fi(["x", "y"]);
      var qs = qn(
        qn(
          {
            component: function () {
              const {
                label: e,
                displayValue: t,
                onUpdate: n,
                settings: o,
              } = Pr();
              return r.createElement(
                wo,
                { input: !0 },
                r.createElement(bo, null, e),
                r.createElement(
                  Ys,
                  { withJoystick: !!o.joystick },
                  o.joystick &&
                    r.createElement(Vs, { value: t, settings: o, onUpdate: n }),
                  r.createElement(ii, { value: t, settings: o, onUpdate: n })
                )
              );
            },
          },
          Zs
        ),
        {},
        {
          normalize: (e) => {
            let { joystick: t = !0 } = e,
              n = On(e, Xs);
            const { value: r, settings: o } = Zs.normalize(n);
            return { value: r, settings: qn(qn({}, o), {}, { joystick: t }) };
          },
        }
      );
      var el = Object.freeze({
        __proto__: null,
        sanitize: (e) => {
          if (void 0 !== e) {
            if (e instanceof File)
              try {
                return URL.createObjectURL(e);
              } catch (t) {
                return;
              }
            if ("string" === typeof e && 0 === e.indexOf("blob:")) return e;
            throw Error("Invalid image format [undefined | blob |\xa0File].");
          }
        },
        schema: (e, t) => "object" === typeof t && "image" in t,
        normalize: ({ image: e }) => ({ value: e }),
      });
      const tl = zr("div", {
          position: "relative",
          display: "grid",
          gridTemplateColumns: "$sizes$rowHeight auto 20px",
          columnGap: "$colGap",
          alignItems: "center",
        }),
        nl = zr("div", {
          $flexCenter: "",
          overflow: "hidden",
          height: "$rowHeight",
          background: "$elevation3",
          textAlign: "center",
          color: "inherit",
          borderRadius: "$sm",
          outline: "none",
          userSelect: "none",
          cursor: "pointer",
          $inputStyle: "",
          $hover: "",
          $focusWithin: "",
          $active: "$accent1 $elevation1",
          variants: {
            isDragAccept: {
              true: { $inputStyle: "$accent1", backgroundColor: "$elevation1" },
            },
          },
        }),
        rl = zr("div", {
          boxSizing: "border-box",
          borderRadius: "$sm",
          height: "$rowHeight",
          width: "$rowHeight",
          $inputStyle: "",
          backgroundSize: "cover",
          backgroundPosition: "center",
          variants: {
            hasImage: { true: { cursor: "pointer", $hover: "", $active: "" } },
          },
        }),
        ol = zr("div", {
          $flexCenter: "",
          width: "$imagePreviewWidth",
          height: "$imagePreviewHeight",
          borderRadius: "$sm",
          boxShadow: "$level2",
          pointerEvents: "none",
          $inputStyle: "",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }),
        il = zr("div", {
          fontSize: "0.8em",
          height: "100%",
          padding: "$rowGap $md",
        }),
        al = zr("div", {
          $flexCenter: "",
          top: "0",
          right: "0",
          marginRight: "$sm",
          height: "100%",
          cursor: "pointer",
          variants: {
            disabled: { true: { color: "$elevation3", cursor: "default" } },
          },
          "&::after,&::before": {
            content: '""',
            position: "absolute",
            height: 2,
            width: 10,
            borderRadius: 1,
            backgroundColor: "currentColor",
          },
          "&::after": { transform: "rotate(45deg)" },
          "&::before": { transform: "rotate(-45deg)" },
        });
      var sl = qn(
        {
          component: function () {
            const { label: e, value: t, onUpdate: n, disabled: o } = Pr(),
              { popinRef: i, wrapperRef: a, shown: s, show: l, hide: c } = Ds(),
              u = (0, r.useCallback)(
                (e) => {
                  e.length && n(e[0]);
                },
                [n]
              ),
              f = (0, r.useCallback)(
                (e) => {
                  e.stopPropagation(), n(void 0);
                },
                [n]
              ),
              {
                getRootProps: d,
                getInputProps: p,
                isDragAccept: h,
              } = Ms({
                maxFiles: 1,
                accept: "image/*",
                onDrop: u,
                disabled: o,
              });
            return r.createElement(
              wo,
              { input: !0 },
              r.createElement(bo, null, e),
              r.createElement(
                tl,
                null,
                r.createElement(rl, {
                  ref: i,
                  hasImage: !!t,
                  onPointerDown: () => !!t && l(),
                  onPointerUp: c,
                  style: { backgroundImage: t ? `url(${t})` : "none" },
                }),
                s &&
                  !!t &&
                  r.createElement(
                    mo,
                    null,
                    r.createElement(fo, {
                      onPointerUp: c,
                      style: { cursor: "pointer" },
                    }),
                    r.createElement(ol, {
                      ref: a,
                      style: { backgroundImage: `url(${t})` },
                    })
                  ),
                r.createElement(
                  nl,
                  d({ isDragAccept: h }),
                  r.createElement("input", p()),
                  r.createElement(il, null, h ? "drop image" : "click or drop")
                ),
                r.createElement(al, { onClick: f, disabled: !t })
              )
            );
          },
        },
        el
      );
      const ll = O().number(),
        cl = (e) => ({ min: e[0], max: e[1] }),
        ul = (e, { bounds: [t, n] }, r) => {
          const o = { min: r[0], max: r[1] },
            { min: i, max: a } = qn(qn({}, o), e);
          return [
            er(Number(i), t, Math.max(t, a)),
            er(Number(a), Math.min(n, i), n),
          ];
        };
      var fl = Object.freeze({
        __proto__: null,
        schema: (e, t) =>
          O().array().length(2).every.number().test(e) &&
          O().schema({ min: ll, max: ll }).test(t),
        format: cl,
        sanitize: ul,
        normalize: ({ value: e, min: t, max: n }) => {
          const r = { min: t, max: n },
            o = [t, n],
            i = qn(qn({}, ai(cl(e), { min: r, max: r })), {}, { bounds: o });
          return { value: ul(cl(e), i, e), settings: i };
        },
      });
      const dl = ["value", "bounds", "onDrag"],
        pl = ["bounds"],
        hl = zr("div", {
          display: "grid",
          columnGap: "$colGap",
          gridTemplateColumns:
            "auto calc($sizes$numberInputMinWidth * 2 + $space$rowGap)",
        });
      function ml(e) {
        let {
            value: t,
            bounds: [n, o],
            onDrag: i,
          } = e,
          a = On(e, dl);
        const s = (0, r.useRef)(null),
          l = (0, r.useRef)(null),
          c = (0, r.useRef)(null),
          u = (0, r.useRef)(0),
          f = $r("sizes", "scrubberWidth"),
          d = Eo(
            ({ event: e, first: r, xy: [d], movement: [p], memo: h = {} }) => {
              if (r) {
                const { width: r, left: i } = s.current.getBoundingClientRect();
                u.current = r - parseFloat(f);
                const a =
                  (null === e || void 0 === e ? void 0 : e.target) ===
                    l.current ||
                  (null === e || void 0 === e ? void 0 : e.target) ===
                    c.current;
                h.pos = ir((d - i) / r, n, o);
                const p = Math.abs(h.pos - t.min) - Math.abs(h.pos - t.max);
                (h.key = p < 0 || (0 === p && h.pos <= t.min) ? "min" : "max"),
                  a && (h.pos = t[h.key]);
              }
              const m = h.pos + ir(p / u.current, 0, o - n);
              return i({ [h.key]: Go(m, a[h.key]) }), h;
            }
          ),
          p = `calc(${or(t.min, n, o)} * (100% - ${f} - 8px) + 4px)`,
          h = `calc(${1 - or(t.max, n, o)} * (100% - ${f} - 8px) + 4px)`;
        return r.createElement(
          Po,
          kr({ ref: s }, d()),
          r.createElement(
            ko,
            null,
            r.createElement(Fo, { style: { left: p, right: h } })
          ),
          r.createElement(To, { position: "left", ref: l, style: { left: p } }),
          r.createElement(To, {
            position: "right",
            ref: c,
            style: { right: h },
          })
        );
      }
      var gl = qn(
        {
          component: function () {
            const {
                label: e,
                displayValue: t,
                onUpdate: n,
                settings: o,
              } = Pr(),
              i = On(o, pl);
            return r.createElement(
              r.Fragment,
              null,
              r.createElement(
                wo,
                { input: !0 },
                r.createElement(bo, null, e),
                r.createElement(
                  hl,
                  null,
                  r.createElement(ml, kr({ value: t }, o, { onDrag: n })),
                  r.createElement(ii, {
                    value: t,
                    settings: i,
                    onUpdate: n,
                    innerLabelTrim: 0,
                  })
                )
              )
            );
          },
        },
        fl
      );
      const vl = ["type", "value"],
        yl = ["onChange", "transient", "onEditStart", "onEditEnd"],
        bl = function () {
          const e = (0, ks.Z)(
            ((t = () => ({ data: {} })),
            (e, n, r) => {
              const o = r.subscribe;
              return (
                (r.subscribe = (e, t, n) => {
                  let i = e;
                  if (t) {
                    const o = (null == n ? void 0 : n.equalityFn) || Object.is;
                    let a = e(r.getState());
                    (i = (n) => {
                      const r = e(n);
                      if (!o(a, r)) {
                        const e = a;
                        t((a = r), e);
                      }
                    }),
                      (null == n ? void 0 : n.fireImmediately) && t(a, a);
                  }
                  return o(i);
                }),
                t(e, n, r)
              );
            })
          );
          var t;
          const n = (() => {
            const e = new Map();
            return {
              on: (t, n) => {
                let r = e.get(t);
                void 0 === r && ((r = new Set()), e.set(t, r)), r.add(n);
              },
              off: (t, n) => {
                const r = e.get(t);
                void 0 !== r && (r.delete(n), 0 === r.size && e.delete(t));
              },
              emit: (t, ...n) => {
                const r = e.get(t);
                if (void 0 !== r) for (const e of r) e(...n);
              },
            };
          })();
          (this.storeId = "_" + Math.random().toString(36).substr(2, 9)),
            (this.useStore = e);
          const r = {},
            o = new Set();
          (this.getVisiblePaths = () => {
            const e = this.getData(),
              t = Object.keys(e),
              n = [];
            Object.entries(r).forEach(([e, r]) => {
              r.render &&
                t.some((t) => 0 === t.indexOf(e)) &&
                !r.render(this.get) &&
                n.push(e + ".");
            });
            const i = [];
            return (
              o.forEach((t) => {
                t in e &&
                  e[t].__refCount > 0 &&
                  n.every((e) => -1 === t.indexOf(e)) &&
                  (!e[t].render || e[t].render(this.get)) &&
                  i.push(t);
              }),
              i
            );
          }),
            (this.setOrderedPaths = (e) => {
              e.forEach((e) => o.add(e));
            }),
            (this.orderPaths = (e) => (this.setOrderedPaths(e), e)),
            (this.disposePaths = (t) => {
              e.setState((e) => {
                const n = e.data;
                return (
                  t.forEach((e) => {
                    if (e in n) {
                      const t = n[e];
                      t.__refCount--,
                        0 === t.__refCount && t.type in pr && delete n[e];
                    }
                  }),
                  { data: n }
                );
              });
            }),
            (this.dispose = () => {
              e.setState(() => ({ data: {} }));
            }),
            (this.getFolderSettings = (e) => r[e] || {}),
            (this.getData = () => e.getState().data),
            (this.addData = (t, n) => {
              e.setState((e) => {
                const r = e.data;
                return (
                  Object.entries(t).forEach(([e, t]) => {
                    let o = r[e];
                    if (o) {
                      const { type: e, value: r } = t,
                        i = On(t, vl);
                      e !== o.type
                        ? zn(Ln.INPUT_TYPE_OVERRIDE, e)
                        : ((0 === o.__refCount || n) && Object.assign(o, i),
                          o.__refCount++);
                    } else r[e] = qn(qn({}, t), {}, { __refCount: 1 });
                  }),
                  { data: r }
                );
              });
            }),
            (this.setValueAtPath = (t, n, r) => {
              e.setState((e) => {
                const o = e.data;
                return Ar(o[t], n, t, this, r), { data: o };
              });
            }),
            (this.setSettingsAtPath = (t, n) => {
              e.setState((e) => {
                const r = e.data;
                return (
                  (r[t].settings = qn(qn({}, r[t].settings), n)), { data: r }
                );
              });
            }),
            (this.disableInputAtPath = (t, n) => {
              e.setState((e) => {
                const r = e.data;
                return (r[t].disabled = n), { data: r };
              });
            }),
            (this.set = (t, n) => {
              e.setState((e) => {
                const r = e.data;
                return (
                  Object.entries(t).forEach(([e, t]) => {
                    try {
                      Ar(r[e], t, void 0, void 0, n);
                    } catch (o) {}
                  }),
                  { data: r }
                );
              });
            }),
            (this.getInput = (e) => {
              try {
                return this.getData()[e];
              } catch (t) {
                zn(Ln.PATH_DOESNT_EXIST, e);
              }
            }),
            (this.get = (e) => {
              var t;
              return null === (t = this.getInput(e)) || void 0 === t
                ? void 0
                : t.value;
            }),
            (this.emitOnEditStart = (e) => {
              n.emit(
                `onEditStart:${e}`,
                this.get(e),
                e,
                qn(qn({}, this.getInput(e)), {}, { get: this.get })
              );
            }),
            (this.emitOnEditEnd = (e) => {
              n.emit(
                `onEditEnd:${e}`,
                this.get(e),
                e,
                qn(qn({}, this.getInput(e)), {}, { get: this.get })
              );
            }),
            (this.subscribeToEditStart = (e, t) => {
              const r = `onEditStart:${e}`;
              return n.on(r, t), () => n.off(r, t);
            }),
            (this.subscribeToEditEnd = (e, t) => {
              const r = `onEditEnd:${e}`;
              return n.on(r, t), () => n.off(r, t);
            });
          const i = (e, t, n) => {
            const o = {};
            return (
              Object.entries(e).forEach(([e, a]) => {
                if ("" === e) return zn(Ln.EMPTY_KEY);
                let s = Fs(t, e);
                if (a.type === pr.FOLDER) {
                  const e = i(a.schema, s, n);
                  Object.assign(o, e), s in r || (r[s] = a.settings);
                } else if (e in n) zn(Ln.DUPLICATE_KEYS, e, s, n[e].path);
                else {
                  const t = br(a, e, s, o);
                  if (t) {
                    const { type: r, options: i, input: a } = t,
                      {
                        onChange: l,
                        transient: c,
                        onEditStart: u,
                        onEditEnd: f,
                      } = i,
                      d = On(i, yl);
                    (o[s] = qn(
                      qn(qn({ type: r }, d), a),
                      {},
                      { fromPanel: !0 }
                    )),
                      (n[e] = {
                        path: s,
                        onChange: l,
                        transient: c,
                        onEditStart: u,
                        onEditEnd: f,
                      });
                  } else zn(Ln.UNKNOWN_INPUT, s, a);
                }
              }),
              o
            );
          };
          this.getDataFromSchema = (e) => {
            const t = {};
            return [i(e, "", t), t];
          };
        };
      new bl();
      function Al({ toggle: e, toggled: t, name: n }) {
        return r.createElement(
          ro,
          { onClick: () => e() },
          r.createElement(Co, { toggled: t }),
          r.createElement("div", null, n)
        );
      }
      const Bl = [
        "type",
        "label",
        "path",
        "valueKey",
        "value",
        "settings",
        "setValue",
        "disabled",
      ];
      function Cl(e) {
        let {
            type: t,
            label: n,
            path: o,
            valueKey: i,
            value: a,
            settings: s,
            setValue: l,
            disabled: c,
          } = e,
          u = On(e, Bl);
        const {
            displayValue: f,
            onChange: d,
            onUpdate: p,
          } = _o({ type: t, value: a, settings: s, setValue: l }),
          h = $n[t].component;
        return h
          ? r.createElement(
              Tr.Provider,
              {
                value: qn(
                  {
                    key: i,
                    path: o,
                    id: "" + o,
                    label: n,
                    displayValue: f,
                    value: a,
                    onChange: d,
                    onUpdate: p,
                    settings: s,
                    setValue: l,
                    disabled: c,
                  },
                  u
                ),
              },
              r.createElement(co, { disabled: c }, r.createElement(h, null))
            )
          : (zn(Ln.NO_COMPONENT_FOR_TYPE, t, o), null);
      }
      const xl = zr("button", {
        display: "block",
        $reset: "",
        fontWeight: "$button",
        height: "$rowHeight",
        borderStyle: "none",
        borderRadius: "$sm",
        backgroundColor: "$elevation1",
        color: "$highlight1",
        "&:not(:disabled)": {
          color: "$highlight3",
          backgroundColor: "$accent2",
          cursor: "pointer",
          $hover: "$accent3",
          $active: "$accent3 $accent1",
          $focus: "",
        },
      });
      const wl = zr("div", {
          $flex: "",
          justifyContent: "flex-end",
          gap: "$colGap",
        }),
        _l = zr("button", {
          $reset: "",
          cursor: "pointer",
          borderRadius: "$xs",
          "&:hover": { backgroundColor: "$elevation3" },
        });
      const El = zr("canvas", {
        height: "$monitorHeight",
        width: "100%",
        display: "block",
        borderRadius: "$sm",
      });
      const Sl = (0, r.forwardRef)(function ({ initialValue: e }, t) {
          const n = $r("colors", "highlight3"),
            o = $r("colors", "elevation2"),
            i = $r("colors", "highlight1"),
            [a, s] = (0, r.useMemo)(
              () => [
                Gi(i).alpha(0.4).toRgbString(),
                Gi(i).alpha(0.1).toRgbString(),
              ],
              [i]
            ),
            l = (0, r.useRef)([e]),
            c = (0, r.useRef)(e),
            u = (0, r.useRef)(e),
            f = (0, r.useRef)(),
            d = (0, r.useCallback)(
              (e, t) => {
                if (!e) return;
                const { width: r, height: i } = e,
                  f = new Path2D(),
                  d = r / 100,
                  p = 0.05 * i;
                for (let n = 0; n < l.current.length; n++) {
                  const e = d * n,
                    t =
                      i -
                      or(l.current[n], c.current, u.current) * (i - 2 * p) -
                      p;
                  f.lineTo(e, t);
                }
                t.clearRect(0, 0, r, i);
                const h = new Path2D(f);
                h.lineTo(d * (l.current.length + 1), i),
                  h.lineTo(0, i),
                  h.lineTo(0, 0);
                const m = t.createLinearGradient(0, 0, 0, i);
                m.addColorStop(0, a),
                  m.addColorStop(1, s),
                  (t.fillStyle = m),
                  t.fill(h),
                  (t.strokeStyle = o),
                  (t.lineJoin = "round"),
                  (t.lineWidth = 14),
                  t.stroke(f),
                  (t.strokeStyle = n),
                  (t.lineWidth = 2),
                  t.stroke(f);
              },
              [n, o, a, s]
            ),
            [p, h] = (function (e) {
              const t = (0, r.useRef)(null),
                n = (0, r.useRef)(null),
                o = (0, r.useRef)(!1);
              return (
                (0, r.useEffect)(() => {
                  const r = xr(() => {
                    (t.current.width =
                      t.current.offsetWidth * window.devicePixelRatio),
                      (t.current.height =
                        t.current.offsetHeight * window.devicePixelRatio),
                      e(t.current, n.current);
                  }, 250);
                  return (
                    window.addEventListener("resize", r),
                    o.current || (r(), (o.current = !0)),
                    () => window.removeEventListener("resize", r)
                  );
                }, [e]),
                (0, r.useEffect)(() => {
                  n.current = t.current.getContext("2d");
                }, []),
                [t, n]
              );
            })(d);
          return (
            (0, r.useImperativeHandle)(
              t,
              () => ({
                frame: (e) => {
                  (void 0 === c.current || e < c.current) && (c.current = e),
                    (void 0 === u.current || e > u.current) && (u.current = e),
                    (function (e, t) {
                      e.push(t), e.length > 100 && e.shift();
                    })(l.current, e),
                    (f.current = requestAnimationFrame(() =>
                      d(p.current, h.current)
                    ));
                },
              }),
              [p, h, d]
            ),
            (0, r.useEffect)(() => () => cancelAnimationFrame(f.current), []),
            r.createElement(El, { ref: p })
          );
        }),
        Ml = (e) => (Number.isFinite(e) ? e.toPrecision(2) : e.toString()),
        Rl = (0, r.forwardRef)(function ({ initialValue: e }, t) {
          const [n, o] = (0, r.useState)(Ml(e));
          return (
            (0, r.useImperativeHandle)(
              t,
              () => ({ frame: (e) => o(Ml(e)) }),
              []
            ),
            r.createElement("div", null, n)
          );
        });
      function Il(e) {
        return "function" === typeof e ? e() : e.current;
      }
      const kl = ["type", "label", "key"],
        Tl = {
          [pr.BUTTON]: function ({ onClick: e, settings: t, label: n }) {
            const o = Lr();
            return r.createElement(
              wo,
              null,
              r.createElement(
                xl,
                { disabled: t.disabled, onClick: () => e(o.get) },
                n
              )
            );
          },
          [pr.BUTTON_GROUP]: function (e) {
            const { label: t, opts: n } = (({ label: e, opts: t }) => {
                let n = "string" === typeof e && "" === e.trim() ? null : e,
                  r = t;
                return (
                  "object" === typeof t.opts &&
                    (void 0 !== r.label && (n = t.label), (r = t.opts)),
                  { label: n, opts: r }
                );
              })(e),
              o = Lr();
            return r.createElement(
              wo,
              { input: !!t },
              t && r.createElement(bo, null, t),
              r.createElement(
                wl,
                null,
                Object.entries(n).map(([e, t]) =>
                  r.createElement(_l, { key: e, onClick: () => t(o.get) }, e)
                )
              )
            );
          },
          [pr.MONITOR]: function ({ label: e, objectOrFn: t, settings: n }) {
            const o = (0, r.useRef)(),
              i = (0, r.useRef)(Il(t));
            return (
              (0, r.useEffect)(() => {
                const e = window.setInterval(() => {
                  var e;
                  document.hidden ||
                    null === (e = o.current) ||
                    void 0 === e ||
                    e.frame(Il(t));
                }, n.interval);
                return () => window.clearInterval(e);
              }, [t, n.interval]),
              r.createElement(
                wo,
                { input: !0 },
                r.createElement(bo, { align: "top" }, e),
                n.graph
                  ? r.createElement(Sl, { ref: o, initialValue: i.current })
                  : r.createElement(Rl, { ref: o, initialValue: i.current })
              )
            );
          },
        },
        Pl = r.memo(({ path: e }) => {
          const [
            t,
            {
              set: n,
              setSettings: o,
              disable: i,
              storeId: a,
              emitOnEditStart: s,
              emitOnEditEnd: l,
            },
          ] = (function (e) {
            const t = Lr(),
              [n, o] = (0, r.useState)(Ro(t.getData(), e)),
              i = (0, r.useCallback)((n) => t.setValueAtPath(e, n, !0), [e, t]),
              a = (0, r.useCallback)((n) => t.setSettingsAtPath(e, n), [e, t]),
              s = (0, r.useCallback)((n) => t.disableInputAtPath(e, n), [e, t]),
              l = (0, r.useCallback)(() => t.emitOnEditStart(e), [e, t]),
              c = (0, r.useCallback)(() => t.emitOnEditEnd(e), [e, t]);
            return (
              (0, r.useEffect)(() => {
                o(Ro(t.getData(), e));
                const n = t.useStore.subscribe((t) => Ro(t.data, e), o, {
                  equalityFn: y,
                });
                return () => n();
              }, [t, e]),
              [
                n,
                {
                  set: i,
                  setSettings: a,
                  disable: s,
                  storeId: t.storeId,
                  emitOnEditStart: l,
                  emitOnEditEnd: c,
                },
              ]
            );
          })(e);
          if (!t) return null;
          const { type: c, label: u, key: f } = t,
            d = On(t, kl);
          if (c in pr) {
            const t = Tl[c];
            return r.createElement(t, kr({ label: u, path: e }, d));
          }
          return c in $n
            ? r.createElement(
                Cl,
                kr(
                  {
                    key: a + e,
                    type: c,
                    label: u,
                    storeId: a,
                    path: e,
                    valueKey: f,
                    setValue: n,
                    setSettings: o,
                    disable: i,
                    emitOnEditStart: s,
                    emitOnEditEnd: l,
                  },
                  d
                )
              )
            : (Nn(Ln.UNSUPPORTED_INPUT, c, e), null);
        }),
        Fl = ({ name: e, path: t, tree: n }) => {
          const o = Lr(),
            i = Fs(t, e),
            { collapsed: a, color: s } = o.getFolderSettings(i),
            [l, c] = (0, r.useState)(!a),
            u = (0, r.useRef)(null),
            f = $r("colors", "folderWidgetColor"),
            d = $r("colors", "folderTextColor");
          return (
            (0, r.useLayoutEffect)(() => {
              u.current.style.setProperty(
                "--leva-colors-folderWidgetColor",
                s || f
              ),
                u.current.style.setProperty(
                  "--leva-colors-folderTextColor",
                  s || d
                );
            }, [s, f, d]),
            r.createElement(
              to,
              { ref: u },
              r.createElement(Al, {
                name: e,
                toggled: l,
                toggle: () => c((e) => !e),
              }),
              r.createElement(Dl, { parent: i, tree: n, toggled: l })
            )
          );
        },
        Dl = r.memo(
          ({
            isRoot: e = !1,
            fill: t = !1,
            flat: n = !1,
            parent: o,
            tree: i,
            toggled: a,
          }) => {
            const { wrapperRef: s, contentRef: l } = (function (e) {
              const t = (0, r.useRef)(null),
                n = (0, r.useRef)(null),
                o = (0, r.useRef)(!0);
              return (
                (0, r.useLayoutEffect)(() => {
                  e ||
                    ((t.current.style.height = "0px"),
                    (t.current.style.overflow = "hidden"));
                }, []),
                (0, r.useEffect)(() => {
                  if (o.current) return void (o.current = !1);
                  let r;
                  const i = t.current,
                    a = () => {
                      e &&
                        (i.style.removeProperty("height"),
                        i.style.removeProperty("overflow"),
                        n.current.scrollIntoView({
                          behavior: "smooth",
                          block: "nearest",
                        }));
                    };
                  i.addEventListener("transitionend", a, { once: !0 });
                  const { height: s } = n.current.getBoundingClientRect();
                  return (
                    (i.style.height = s + "px"),
                    e ||
                      ((i.style.overflow = "hidden"),
                      (r = window.setTimeout(
                        () => (i.style.height = "0px"),
                        50
                      ))),
                    () => {
                      i.removeEventListener("transitionend", a),
                        clearTimeout(r);
                    }
                  );
                }, [e]),
                { wrapperRef: t, contentRef: n }
              );
            })(a);
            return r.createElement(
              no,
              { ref: s, isRoot: e, fill: t, flat: n },
              r.createElement(
                oo,
                { ref: l, isRoot: e, toggled: a },
                Object.entries(i).map(([e, t]) =>
                  ((e) => "__levaInput" in e)(t)
                    ? r.createElement(Pl, {
                        key: t.path,
                        valueKey: t.valueKey,
                        path: t.path,
                      })
                    : r.createElement(Fl, { key: e, name: e, path: o, tree: t })
                )
              )
            );
          }
        ),
        Ol = zr("div", {
          position: "relative",
          fontFamily: "$mono",
          fontSize: "$root",
          color: "$rootText",
          backgroundColor: "$elevation1",
          variants: {
            fill: {
              false: {
                position: "fixed",
                top: "10px",
                right: "10px",
                zIndex: 1e3,
                width: "$rootWidth",
              },
              true: { position: "relative", width: "100%" },
            },
            flat: { false: { borderRadius: "$lg", boxShadow: "$level1" } },
            oneLineLabels: {
              true: {
                [`${ao}`]: {
                  gridTemplateColumns: "auto",
                  gridAutoColumns: "minmax(max-content, 1fr)",
                  gridAutoRows: "minmax($sizes$rowHeight), auto)",
                  rowGap: 0,
                  columnGap: 0,
                  marginTop: "$rowGap",
                },
              },
            },
            hideTitleBar: {
              true: { $$titleBarHeight: "0px" },
              false: { $$titleBarHeight: "$sizes$titleBarHeight" },
            },
          },
          "&,*,*:after,*:before": { boxSizing: "border-box" },
          "*::selection": { backgroundColor: "$accent2" },
        }),
        Ll = zr("i", {
          $flexCenter: "",
          width: 40,
          userSelect: "none",
          cursor: "pointer",
          "> svg": {
            fill: "$highlight1",
            transition: "transform 350ms ease, fill 250ms ease",
          },
          "&:hover > svg": { fill: "$highlight3" },
          variants: { active: { true: { "> svg": { fill: "$highlight2" } } } },
        }),
        Gl = zr("div", {
          display: "flex",
          alignItems: "stretch",
          justifyContent: "space-between",
          height: "$titleBarHeight",
          variants: { mode: { drag: { cursor: "grab" } } },
        }),
        Hl = zr("div", {
          $flex: "",
          position: "relative",
          width: "100%",
          overflow: "hidden",
          transition: "height 250ms ease",
          color: "$highlight3",
          paddingLeft: "$md",
          [`> ${Ll}`]: { height: 30 },
          variants: { toggled: { true: { height: 30 }, false: { height: 0 } } },
        }),
        zl = zr("input", {
          $reset: "",
          flex: 1,
          position: "relative",
          height: 30,
          width: "100%",
          backgroundColor: "transparent",
          fontSize: "10px",
          borderRadius: "$root",
          "&:focus": {},
          "&::placeholder": { color: "$highlight2" },
        }),
        Nl = zr("div", {
          touchAction: "none",
          $flexCenter: "",
          flex: 1,
          "> svg": { fill: "$highlight1" },
          color: "$highlight1",
          variants: {
            drag: {
              true: {
                $draggable: "",
                "> svg": { transition: "fill 250ms ease" },
                "&:hover": { color: "$highlight3" },
                "&:hover > svg": { fill: "$highlight3" },
              },
            },
            filterEnabled: { false: { paddingRight: 40 } },
          },
        }),
        jl = r.forwardRef(({ setFilter: e, toggle: t }, n) => {
          const [o, i] = (0, r.useState)(""),
            a = (0, r.useMemo)(() => xr(e, 250), [e]);
          return (
            (0, r.useEffect)(() => {
              a(o);
            }, [o, a]),
            r.createElement(
              r.Fragment,
              null,
              r.createElement(zl, {
                ref: n,
                value: o,
                placeholder: "[Open filter with CMD+SHIFT+L]",
                onPointerDown: (e) => e.stopPropagation(),
                onChange: (e) => {
                  const n = e.currentTarget.value;
                  t(!0), i(n);
                },
              }),
              r.createElement(
                Ll,
                {
                  onClick: () => (e(""), void i("")),
                  style: { visibility: o ? "visible" : "hidden" },
                },
                r.createElement(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    height: "14",
                    width: "14",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                  },
                  r.createElement("path", {
                    fillRule: "evenodd",
                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                    clipRule: "evenodd",
                  })
                )
              )
            )
          );
        });
      function Ul({
        setFilter: e,
        onDrag: t,
        toggle: n,
        toggled: o,
        title: i,
        drag: a,
        filterEnabled: s,
      }) {
        const [l, c] = (0, r.useState)(!1),
          u = (0, r.useRef)(null);
        (0, r.useEffect)(() => {
          var e, t;
          l
            ? null === (e = u.current) || void 0 === e || e.focus()
            : null === (t = u.current) || void 0 === t || t.blur();
        }, [l]);
        const f = Eo(({ offset: [e, n] }) => t({ x: e, y: n }), {
          filterTaps: !0,
        });
        return (
          (0, r.useEffect)(() => {
            const e = (e) => {
              "L" === e.key && e.shiftKey && e.metaKey && c((e) => !e);
            };
            return (
              window.addEventListener("keydown", e),
              () => window.removeEventListener("keydown", e)
            );
          }, []),
          r.createElement(
            r.Fragment,
            null,
            r.createElement(
              Gl,
              { mode: a ? "drag" : void 0 },
              r.createElement(
                Ll,
                { active: !o, onClick: () => n() },
                r.createElement(Co, { toggled: o, width: 12, height: 8 })
              ),
              r.createElement(
                Nl,
                kr({}, a ? f() : {}, { drag: a, filterEnabled: s }),
                void 0 === i && a
                  ? r.createElement(
                      "svg",
                      {
                        width: "20",
                        height: "10",
                        viewBox: "0 0 28 14",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                      r.createElement("circle", { cx: "2", cy: "2", r: "2" }),
                      r.createElement("circle", { cx: "14", cy: "2", r: "2" }),
                      r.createElement("circle", { cx: "26", cy: "2", r: "2" }),
                      r.createElement("circle", { cx: "2", cy: "12", r: "2" }),
                      r.createElement("circle", { cx: "14", cy: "12", r: "2" }),
                      r.createElement("circle", { cx: "26", cy: "12", r: "2" })
                    )
                  : i
              ),
              s &&
                r.createElement(
                  Ll,
                  { active: l, onClick: () => c((e) => !e) },
                  r.createElement(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      height: "20",
                      viewBox: "0 0 20 20",
                    },
                    r.createElement("path", {
                      d: "M9 9a2 2 0 114 0 2 2 0 01-4 0z",
                    }),
                    r.createElement("path", {
                      fillRule: "evenodd",
                      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z",
                      clipRule: "evenodd",
                    })
                  )
                )
            ),
            r.createElement(
              Hl,
              { toggled: l },
              r.createElement(jl, { ref: u, setFilter: e, toggle: n })
            )
          )
        );
      }
      r.memo(
        ({
          store: e,
          rootClass: t,
          fill: n = !1,
          flat: o = !1,
          neverHide: i = !1,
          oneLineLabels: a = !1,
          titleBar: s = { title: void 0, drag: !0, filter: !0 },
          hideCopyButton: l = !1,
          toggled: c,
          setToggle: u,
        }) => {
          var f, d;
          const p = ((e) => {
              const [t, n] = (0, r.useState)(e.getVisiblePaths());
              return (
                (0, r.useEffect)(() => {
                  n(e.getVisiblePaths());
                  const t = e.useStore.subscribe(e.getVisiblePaths, n, {
                    equalityFn: y,
                  });
                  return () => t();
                }, [e]),
                t
              );
            })(e),
            [h, m] = (0, r.useState)(""),
            g = (0, r.useMemo)(
              () =>
                ((e, t) => {
                  const n = {},
                    r = t ? t.toLowerCase() : null;
                  return (
                    e.forEach((e) => {
                      const [t, o] = (function (e) {
                        const t = e.split(".");
                        return [t.pop(), t.join(".") || void 0];
                      })(e);
                      (!r || t.toLowerCase().indexOf(r) > -1) &&
                        Ps()(n, o, { [t]: { __levaInput: !0, path: e } });
                    }),
                    n
                  );
                })(p, h),
              [p, h]
            ),
            [v, b] = So(),
            A = i || p.length > 0,
            B = ("object" === typeof s && s.title) || void 0,
            C =
              "object" !== typeof s ||
              null === (f = s.drag) ||
              void 0 === f ||
              f,
            x =
              "object" !== typeof s ||
              null === (d = s.filter) ||
              void 0 === d ||
              d;
          return (
            Kr(),
            r.createElement(
              Or.Provider,
              { value: { hideCopyButton: l } },
              r.createElement(
                Ol,
                {
                  ref: v,
                  className: t,
                  fill: n,
                  flat: o,
                  oneLineLabels: a,
                  hideTitleBar: !s,
                  style: { display: A ? "block" : "none" },
                },
                s &&
                  r.createElement(Ul, {
                    onDrag: b,
                    setFilter: m,
                    toggle: (e) =>
                      u((t) => (null !== e && void 0 !== e ? e : !t)),
                    toggled: c,
                    title: B,
                    drag: C,
                    filterEnabled: x,
                  }),
                A &&
                  r.createElement(
                    Dr.Provider,
                    { value: e },
                    r.createElement(Dl, {
                      isRoot: !0,
                      fill: n,
                      flat: o,
                      tree: g,
                      toggled: c,
                    })
                  )
              )
            )
          );
        }
      );
      Wn(hr.SELECT, Ko),
        Wn(hr.IMAGE, sl),
        Wn(hr.NUMBER, Ho),
        Wn(hr.COLOR, Ks),
        Wn(hr.STRING, Yo),
        Wn(hr.BOOLEAN, ei),
        Wn(hr.INTERVAL, gl),
        Wn(hr.VECTOR3D, $s),
        Wn(hr.VECTOR2D, qs);
    },
    34529: function (e, t, n) {
      "use strict";
      var r = n(51833),
        o = n(89386),
        i = n(43200),
        a = n(41086);
      e.exports = function (e, t, n) {
        if (!r(e)) throw new TypeError("expected an object");
        if ("string" !== typeof t || null == n) return o.apply(null, arguments);
        if ("string" === typeof n) return a(e, t, n), e;
        var s = i(e, t);
        return r(n) && r(s) && (n = o({}, s, n)), a(e, t, n), e;
      };
    },
    89386: function (e, t, n) {
      "use strict";
      var r = n(51833),
        o = n(52561);
      function i(e, t) {
        for (var n = arguments.length, r = 0; ++r < n; ) {
          var i = arguments[r];
          s(i) && o(i, a, e);
        }
        return e;
      }
      function a(e, t) {
        if (
          (function (e) {
            return (
              "__proto__" !== e && "constructor" !== e && "prototype" !== e
            );
          })(t)
        ) {
          var n = this[t];
          s(e) && s(n) ? i(n, e) : (this[t] = e);
        }
      }
      function s(e) {
        return r(e) && !Array.isArray(e);
      }
      e.exports = i;
    },
    92703: function (e, t, n) {
      "use strict";
      var r = n(50414);
      function o() {}
      function i() {}
      (i.resetWarningCache = o),
        (e.exports = function () {
          function e(e, t, n, o, i, a) {
            if (a !== r) {
              var s = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((s.name = "Invariant Violation"), s);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var n = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: i,
            resetWarningCache: o,
          };
          return (n.PropTypes = n), n;
        });
    },
    45697: function (e, t, n) {
      e.exports = n(92703)();
    },
    50414: function (e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    35878: function (e, t) {
      "use strict";
      t.Z = function (e) {
        return function (t) {
          e.forEach(function (e) {
            "function" === typeof e ? e(t) : null != e && (e.current = t);
          });
        };
      };
    },
    46511: function (e, t) {
      "use strict";
      (t.ConcurrentRoot = 1),
        (t.ContinuousEventPriority = 4),
        (t.DefaultEventPriority = 16),
        (t.DiscreteEventPriority = 1);
    },
    67287: function (e, t, n) {
      e.exports = function (e) {
        var t = {},
          r = n(67294),
          o = n(63840),
          i = Object.assign;
        function a(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          l = Symbol.for("react.element"),
          c = Symbol.for("react.portal"),
          u = Symbol.for("react.fragment"),
          f = Symbol.for("react.strict_mode"),
          d = Symbol.for("react.profiler"),
          p = Symbol.for("react.provider"),
          h = Symbol.for("react.context"),
          m = Symbol.for("react.forward_ref"),
          g = Symbol.for("react.suspense"),
          v = Symbol.for("react.suspense_list"),
          y = Symbol.for("react.memo"),
          b = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var A = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var B = Symbol.iterator;
        function C(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (B && e[B]) || e["@@iterator"])
            ? e
            : null;
        }
        function x(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case u:
              return "Fragment";
            case c:
              return "Portal";
            case d:
              return "Profiler";
            case f:
              return "StrictMode";
            case g:
              return "Suspense";
            case v:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case h:
                return (e.displayName || "Context") + ".Consumer";
              case p:
                return (e._context.displayName || "Context") + ".Provider";
              case m:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case y:
                return null !== (t = e.displayName || null)
                  ? t
                  : x(e.type) || "Memo";
              case b:
                (t = e._payload), (e = e._init);
                try {
                  return x(e(t));
                } catch (n) {}
            }
          return null;
        }
        function w(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return x(t);
            case 8:
              return t === f ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function _(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function E(e) {
          if (_(e) !== e) throw Error(a(188));
        }
        function S(e) {
          var t = e.alternate;
          if (!t) {
            if (null === (t = _(e))) throw Error(a(188));
            return t !== e ? null : e;
          }
          for (var n = e, r = t; ; ) {
            var o = n.return;
            if (null === o) break;
            var i = o.alternate;
            if (null === i) {
              if (null !== (r = o.return)) {
                n = r;
                continue;
              }
              break;
            }
            if (o.child === i.child) {
              for (i = o.child; i; ) {
                if (i === n) return E(o), e;
                if (i === r) return E(o), t;
                i = i.sibling;
              }
              throw Error(a(188));
            }
            if (n.return !== r.return) (n = o), (r = i);
            else {
              for (var s = !1, l = o.child; l; ) {
                if (l === n) {
                  (s = !0), (n = o), (r = i);
                  break;
                }
                if (l === r) {
                  (s = !0), (r = o), (n = i);
                  break;
                }
                l = l.sibling;
              }
              if (!s) {
                for (l = i.child; l; ) {
                  if (l === n) {
                    (s = !0), (n = i), (r = o);
                    break;
                  }
                  if (l === r) {
                    (s = !0), (r = i), (n = o);
                    break;
                  }
                  l = l.sibling;
                }
                if (!s) throw Error(a(189));
              }
            }
            if (n.alternate !== r) throw Error(a(190));
          }
          if (3 !== n.tag) throw Error(a(188));
          return n.stateNode.current === n ? e : t;
        }
        function M(e) {
          return null !== (e = S(e)) ? R(e) : null;
        }
        function R(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = R(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        function I(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            if (4 !== e.tag) {
              var t = I(e);
              if (null !== t) return t;
            }
            e = e.sibling;
          }
          return null;
        }
        var k,
          T = Array.isArray,
          P = e.getPublicInstance,
          F = e.getRootHostContext,
          D = e.getChildHostContext,
          O = e.prepareForCommit,
          L = e.resetAfterCommit,
          G = e.createInstance,
          H = e.appendInitialChild,
          z = e.finalizeInitialChildren,
          N = e.prepareUpdate,
          j = e.shouldSetTextContent,
          U = e.createTextInstance,
          J = e.scheduleTimeout,
          K = e.cancelTimeout,
          $ = e.noTimeout,
          Q = e.isPrimaryRenderer,
          W = e.supportsMutation,
          V = e.supportsPersistence,
          Y = e.supportsHydration,
          X = e.getInstanceFromNode,
          Z = e.preparePortalMount,
          q = e.getCurrentEventPriority,
          ee = e.detachDeletedInstance,
          te = e.supportsMicrotasks,
          ne = e.scheduleMicrotask,
          re = e.supportsTestSelectors,
          oe = e.findFiberRoot,
          ie = e.getBoundingRect,
          ae = e.getTextContent,
          se = e.isHiddenSubtree,
          le = e.matchAccessibilityRole,
          ce = e.setFocusIfFocusable,
          ue = e.setupIntersectionObserver,
          fe = e.appendChild,
          de = e.appendChildToContainer,
          pe = e.commitTextUpdate,
          he = e.commitMount,
          me = e.commitUpdate,
          ge = e.insertBefore,
          ve = e.insertInContainerBefore,
          ye = e.removeChild,
          be = e.removeChildFromContainer,
          Ae = e.resetTextContent,
          Be = e.hideInstance,
          Ce = e.hideTextInstance,
          xe = e.unhideInstance,
          we = e.unhideTextInstance,
          _e = e.clearContainer,
          Ee = e.cloneInstance,
          Se = e.createContainerChildSet,
          Me = e.appendChildToContainerChildSet,
          Re = e.finalizeContainerChildren,
          Ie = e.replaceContainerChildren,
          ke = e.cloneHiddenInstance,
          Te = e.cloneHiddenTextInstance,
          Pe = e.canHydrateInstance,
          Fe = e.canHydrateTextInstance,
          De = e.canHydrateSuspenseInstance,
          Oe = e.isSuspenseInstancePending,
          Le = e.isSuspenseInstanceFallback,
          Ge = e.registerSuspenseInstanceRetry,
          He = e.getNextHydratableSibling,
          ze = e.getFirstHydratableChild,
          Ne = e.getFirstHydratableChildWithinContainer,
          je = e.getFirstHydratableChildWithinSuspenseInstance,
          Ue = e.hydrateInstance,
          Je = e.hydrateTextInstance,
          Ke = e.hydrateSuspenseInstance,
          $e = e.getNextHydratableInstanceAfterSuspenseInstance,
          Qe = e.commitHydratedContainer,
          We = e.commitHydratedSuspenseInstance,
          Ve = e.clearSuspenseBoundary,
          Ye = e.clearSuspenseBoundaryFromContainer,
          Xe = e.shouldDeleteUnhydratedTailInstances,
          Ze = e.didNotMatchHydratedContainerTextInstance,
          qe = e.didNotMatchHydratedTextInstance;
        function et(e) {
          if (void 0 === k)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              k = (t && t[1]) || "";
            }
          return "\n" + k + e;
        }
        var tt = !1;
        function nt(e, t) {
          if (!e || tt) return "";
          tt = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (c) {
                  var r = c;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (c) {
                  r = c;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (c) {
                r = c;
              }
              e();
            }
          } catch (c) {
            if (c && r && "string" === typeof c.stack) {
              for (
                var o = c.stack.split("\n"),
                  i = r.stack.split("\n"),
                  a = o.length - 1,
                  s = i.length - 1;
                1 <= a && 0 <= s && o[a] !== i[s];

              )
                s--;
              for (; 1 <= a && 0 <= s; a--, s--)
                if (o[a] !== i[s]) {
                  if (1 !== a || 1 !== s)
                    do {
                      if ((a--, 0 > --s || o[a] !== i[s])) {
                        var l = "\n" + o[a].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            l.includes("<anonymous>") &&
                            (l = l.replace("<anonymous>", e.displayName)),
                          l
                        );
                      }
                    } while (1 <= a && 0 <= s);
                  break;
                }
            }
          } finally {
            (tt = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? et(e) : "";
        }
        var rt = Object.prototype.hasOwnProperty,
          ot = [],
          it = -1;
        function at(e) {
          return { current: e };
        }
        function st(e) {
          0 > it || ((e.current = ot[it]), (ot[it] = null), it--);
        }
        function lt(e, t) {
          it++, (ot[it] = e.current), (e.current = t);
        }
        var ct = {},
          ut = at(ct),
          ft = at(!1),
          dt = ct;
        function pt(e, t) {
          var n = e.type.contextTypes;
          if (!n) return ct;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var o,
            i = {};
          for (o in n) i[o] = t[o];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            i
          );
        }
        function ht(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function mt() {
          st(ft), st(ut);
        }
        function gt(e, t, n) {
          if (ut.current !== ct) throw Error(a(168));
          lt(ut, t), lt(ft, n);
        }
        function vt(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var o in (r = r.getChildContext()))
            if (!(o in t)) throw Error(a(108, w(e) || "Unknown", o));
          return i({}, n, r);
        }
        function yt(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              ct),
            (dt = ut.current),
            lt(ut, e),
            lt(ft, ft.current),
            !0
          );
        }
        function bt(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(a(169));
          n
            ? ((e = vt(e, t, dt)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              st(ft),
              st(ut),
              lt(ut, e))
            : st(ft),
            lt(ft, n);
        }
        var At = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === (e >>>= 0) ? 32 : (31 - ((Bt(e) / Ct) | 0)) | 0;
              },
          Bt = Math.log,
          Ct = Math.LN2;
        var xt = 64,
          wt = 4194304;
        function _t(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function Et(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            o = e.suspendedLanes,
            i = e.pingedLanes,
            a = 268435455 & n;
          if (0 !== a) {
            var s = a & ~o;
            0 !== s ? (r = _t(s)) : 0 !== (i &= a) && (r = _t(i));
          } else 0 !== (a = n & ~o) ? (r = _t(a)) : 0 !== i && (r = _t(i));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & o) &&
            ((o = r & -r) >= (i = t & -t) || (16 === o && 0 !== (4194240 & i)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (o = 1 << (n = 31 - At(t))), (r |= e[n]), (t &= ~o);
          return r;
        }
        function St(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return -1;
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
            default:
              return -1;
          }
        }
        function Mt(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function Rt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function It(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - At(t))] = n);
        }
        function kt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - At(n),
              o = 1 << r;
            (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
          }
        }
        var Tt = 0;
        function Pt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var Ft = o.unstable_scheduleCallback,
          Dt = o.unstable_cancelCallback,
          Ot = o.unstable_shouldYield,
          Lt = o.unstable_requestPaint,
          Gt = o.unstable_now,
          Ht = o.unstable_ImmediatePriority,
          zt = o.unstable_UserBlockingPriority,
          Nt = o.unstable_NormalPriority,
          jt = o.unstable_IdlePriority,
          Ut = null,
          Jt = null;
        var Kt =
            "function" === typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e === 1 / t)) ||
                    (e !== e && t !== t)
                  );
                },
          $t = null,
          Qt = !1,
          Wt = !1;
        function Vt(e) {
          null === $t ? ($t = [e]) : $t.push(e);
        }
        function Yt() {
          if (!Wt && null !== $t) {
            Wt = !0;
            var e = 0,
              t = Tt;
            try {
              var n = $t;
              for (Tt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              ($t = null), (Qt = !1);
            } catch (o) {
              throw (null !== $t && ($t = $t.slice(e + 1)), Ft(Ht, Yt), o);
            } finally {
              (Tt = t), (Wt = !1);
            }
          }
          return null;
        }
        var Xt = s.ReactCurrentBatchConfig;
        function Zt(e, t) {
          if (Kt(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var o = n[r];
            if (!rt.call(t, o) || !Kt(e[o], t[o])) return !1;
          }
          return !0;
        }
        function qt(e) {
          switch (e.tag) {
            case 5:
              return et(e.type);
            case 16:
              return et("Lazy");
            case 13:
              return et("Suspense");
            case 19:
              return et("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = nt(e.type, !1));
            case 11:
              return (e = nt(e.type.render, !1));
            case 1:
              return (e = nt(e.type, !0));
            default:
              return "";
          }
        }
        function en(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = i({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var tn = at(null),
          nn = null,
          rn = null,
          on = null;
        function an() {
          on = rn = nn = null;
        }
        function sn(e, t, n) {
          Q
            ? (lt(tn, t._currentValue), (t._currentValue = n))
            : (lt(tn, t._currentValue2), (t._currentValue2 = n));
        }
        function ln(e) {
          var t = tn.current;
          st(tn), Q ? (e._currentValue = t) : (e._currentValue2 = t);
        }
        function cn(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function un(e, t) {
          (nn = e),
            (on = rn = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (Lo = !0), (e.firstContext = null));
        }
        function fn(e) {
          var t = Q ? e._currentValue : e._currentValue2;
          if (on !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === rn)
            ) {
              if (null === nn) throw Error(a(308));
              (rn = e), (nn.dependencies = { lanes: 0, firstContext: e });
            } else rn = rn.next = e;
          return t;
        }
        var dn = null,
          pn = !1;
        function hn(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function mn(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function gn(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function vn(e, t) {
          var n = e.updateQueue;
          null !== n &&
            ((n = n.shared),
            null !== Vi && 0 !== (1 & e.mode) && 0 === (2 & Wi)
              ? (null === (e = n.interleaved)
                  ? ((t.next = t), null === dn ? (dn = [n]) : dn.push(n))
                  : ((t.next = e.next), (e.next = t)),
                (n.interleaved = t))
              : (null === (e = n.pending)
                  ? (t.next = t)
                  : ((t.next = e.next), (e.next = t)),
                (n.pending = t)));
        }
        function yn(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), kt(e, n);
          }
        }
        function bn(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var o = null,
              i = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var a = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === i ? (o = i = a) : (i = i.next = a), (n = n.next);
              } while (null !== n);
              null === i ? (o = i = t) : (i = i.next = t);
            } else o = i = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: i,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function An(e, t, n, r) {
          var o = e.updateQueue;
          pn = !1;
          var a = o.firstBaseUpdate,
            s = o.lastBaseUpdate,
            l = o.shared.pending;
          if (null !== l) {
            o.shared.pending = null;
            var c = l,
              u = c.next;
            (c.next = null), null === s ? (a = u) : (s.next = u), (s = c);
            var f = e.alternate;
            null !== f &&
              (l = (f = f.updateQueue).lastBaseUpdate) !== s &&
              (null === l ? (f.firstBaseUpdate = u) : (l.next = u),
              (f.lastBaseUpdate = c));
          }
          if (null !== a) {
            var d = o.baseState;
            for (s = 0, f = u = c = null, l = a; ; ) {
              var p = l.lane,
                h = l.eventTime;
              if ((r & p) === p) {
                null !== f &&
                  (f = f.next =
                    {
                      eventTime: h,
                      lane: 0,
                      tag: l.tag,
                      payload: l.payload,
                      callback: l.callback,
                      next: null,
                    });
                e: {
                  var m = e,
                    g = l;
                  switch (((p = t), (h = n), g.tag)) {
                    case 1:
                      if ("function" === typeof (m = g.payload)) {
                        d = m.call(h, d, p);
                        break e;
                      }
                      d = m;
                      break e;
                    case 3:
                      m.flags = (-65537 & m.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (p =
                            "function" === typeof (m = g.payload)
                              ? m.call(h, d, p)
                              : m) ||
                        void 0 === p
                      )
                        break e;
                      d = i({}, d, p);
                      break e;
                    case 2:
                      pn = !0;
                  }
                }
                null !== l.callback &&
                  0 !== l.lane &&
                  ((e.flags |= 64),
                  null === (p = o.effects) ? (o.effects = [l]) : p.push(l));
              } else
                (h = {
                  eventTime: h,
                  lane: p,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === f ? ((u = f = h), (c = d)) : (f = f.next = h),
                  (s |= p);
              if (null === (l = l.next)) {
                if (null === (l = o.shared.pending)) break;
                (l = (p = l).next),
                  (p.next = null),
                  (o.lastBaseUpdate = p),
                  (o.shared.pending = null);
              }
            }
            if (
              (null === f && (c = d),
              (o.baseState = c),
              (o.firstBaseUpdate = u),
              (o.lastBaseUpdate = f),
              null !== (t = o.shared.interleaved))
            ) {
              o = t;
              do {
                (s |= o.lane), (o = o.next);
              } while (o !== t);
            } else null === a && (o.shared.lanes = 0);
            (na |= s), (e.lanes = s), (e.memoizedState = d);
          }
        }
        function Bn(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                o = r.callback;
              if (null !== o) {
                if (((r.callback = null), (r = n), "function" !== typeof o))
                  throw Error(a(191, o));
                o.call(r);
              }
            }
        }
        var Cn = new r.Component().refs;
        function xn(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : i({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var wn = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && _(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = Ba(),
              o = Ca(e),
              i = gn(r, o);
            (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              vn(e, i),
              null !== (t = xa(e, o, r)) && yn(t, e, o);
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = Ba(),
              o = Ca(e),
              i = gn(r, o);
            (i.tag = 1),
              (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              vn(e, i),
              null !== (t = xa(e, o, r)) && yn(t, e, o);
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = Ba(),
              r = Ca(e),
              o = gn(n, r);
            (o.tag = 2),
              void 0 !== t && null !== t && (o.callback = t),
              vn(e, o),
              null !== (t = xa(e, r, n)) && yn(t, e, r);
          },
        };
        function _n(e, t, n, r, o, i, a) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, i, a)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !Zt(n, r) ||
                !Zt(o, i);
        }
        function En(e, t, n) {
          var r = !1,
            o = ct,
            i = t.contextType;
          return (
            "object" === typeof i && null !== i
              ? (i = fn(i))
              : ((o = ht(t) ? dt : ut.current),
                (i = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? pt(e, o)
                  : ct)),
            (t = new t(n, i)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = wn),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                o),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            t
          );
        }
        function Sn(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && wn.enqueueReplaceState(t, t.state, null);
        }
        function Mn(e, t, n, r) {
          var o = e.stateNode;
          (o.props = n), (o.state = e.memoizedState), (o.refs = Cn), hn(e);
          var i = t.contextType;
          "object" === typeof i && null !== i
            ? (o.context = fn(i))
            : ((i = ht(t) ? dt : ut.current), (o.context = pt(e, i))),
            (o.state = e.memoizedState),
            "function" === typeof (i = t.getDerivedStateFromProps) &&
              (xn(e, t, i, n), (o.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof o.getSnapshotBeforeUpdate ||
              ("function" !== typeof o.UNSAFE_componentWillMount &&
                "function" !== typeof o.componentWillMount) ||
              ((t = o.state),
              "function" === typeof o.componentWillMount &&
                o.componentWillMount(),
              "function" === typeof o.UNSAFE_componentWillMount &&
                o.UNSAFE_componentWillMount(),
              t !== o.state && wn.enqueueReplaceState(o, o.state, null),
              An(e, n, o, r),
              (o.state = e.memoizedState)),
            "function" === typeof o.componentDidMount && (e.flags |= 4194308);
        }
        var Rn = [],
          In = 0,
          kn = null,
          Tn = 0,
          Pn = [],
          Fn = 0,
          Dn = null,
          On = 1,
          Ln = "";
        function Gn(e, t) {
          (Rn[In++] = Tn), (Rn[In++] = kn), (kn = e), (Tn = t);
        }
        function Hn(e, t, n) {
          (Pn[Fn++] = On), (Pn[Fn++] = Ln), (Pn[Fn++] = Dn), (Dn = e);
          var r = On;
          e = Ln;
          var o = 32 - At(r) - 1;
          (r &= ~(1 << o)), (n += 1);
          var i = 32 - At(t) + o;
          if (30 < i) {
            var a = o - (o % 5);
            (i = (r & ((1 << a) - 1)).toString(32)),
              (r >>= a),
              (o -= a),
              (On = (1 << (32 - At(t) + o)) | (n << o) | r),
              (Ln = i + e);
          } else (On = (1 << i) | (n << o) | r), (Ln = e);
        }
        function zn(e) {
          null !== e.return && (Gn(e, 1), Hn(e, 1, 0));
        }
        function Nn(e) {
          for (; e === kn; )
            (kn = Rn[--In]), (Rn[In] = null), (Tn = Rn[--In]), (Rn[In] = null);
          for (; e === Dn; )
            (Dn = Pn[--Fn]),
              (Pn[Fn] = null),
              (Ln = Pn[--Fn]),
              (Pn[Fn] = null),
              (On = Pn[--Fn]),
              (Pn[Fn] = null);
        }
        var jn = null,
          Un = null,
          Jn = !1,
          Kn = !1,
          $n = null;
        function Qn(e, t) {
          var n = Za(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function Wn(e, t) {
          switch (e.tag) {
            case 5:
              return (
                null !== (t = Pe(t, e.type, e.pendingProps)) &&
                ((e.stateNode = t), (jn = e), (Un = ze(t)), !0)
              );
            case 6:
              return (
                null !== (t = Fe(t, e.pendingProps)) &&
                ((e.stateNode = t), (jn = e), (Un = null), !0)
              );
            case 13:
              if (null !== (t = De(t))) {
                var n = null !== Dn ? { id: On, overflow: Ln } : null;
                return (
                  (e.memoizedState = {
                    dehydrated: t,
                    treeContext: n,
                    retryLane: 1073741824,
                  }),
                  ((n = Za(18, null, null, 0)).stateNode = t),
                  (n.return = e),
                  (e.child = n),
                  (jn = e),
                  (Un = null),
                  !0
                );
              }
              return !1;
            default:
              return !1;
          }
        }
        function Vn(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function Yn(e) {
          if (Jn) {
            var t = Un;
            if (t) {
              var n = t;
              if (!Wn(e, t)) {
                if (Vn(e)) throw Error(a(418));
                t = He(n);
                var r = jn;
                t && Wn(e, t)
                  ? Qn(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (Jn = !1), (jn = e));
              }
            } else {
              if (Vn(e)) throw Error(a(418));
              (e.flags = (-4097 & e.flags) | 2), (Jn = !1), (jn = e);
            }
          }
        }
        function Xn(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          jn = e;
        }
        function Zn(e) {
          if (!Y || e !== jn) return !1;
          if (!Jn) return Xn(e), (Jn = !0), !1;
          if (
            3 !== e.tag &&
            (5 !== e.tag || (Xe(e.type) && !j(e.type, e.memoizedProps)))
          ) {
            var t = Un;
            if (t) {
              if (Vn(e)) {
                for (e = Un; e; ) e = He(e);
                throw Error(a(418));
              }
              for (; t; ) Qn(e, t), (t = He(t));
            }
          }
          if ((Xn(e), 13 === e.tag)) {
            if (!Y) throw Error(a(316));
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(a(317));
            Un = $e(e);
          } else Un = jn ? He(e.stateNode) : null;
          return !0;
        }
        function qn() {
          Y && ((Un = jn = null), (Kn = Jn = !1));
        }
        function er(e) {
          null === $n ? ($n = [e]) : $n.push(e);
        }
        function tr(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(a(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(a(147, e));
              var o = r,
                i = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : (((t = function (e) {
                    var t = o.refs;
                    t === Cn && (t = o.refs = {}),
                      null === e ? delete t[i] : (t[i] = e);
                  })._stringRef = i),
                  t);
            }
            if ("string" !== typeof e) throw Error(a(284));
            if (!n._owner) throw Error(a(290, e));
          }
          return e;
        }
        function nr(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              a(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function rr(e) {
          return (0, e._init)(e._payload);
        }
        function or(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function o(e, t) {
            return ((e = es(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function s(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function f(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = os(n, e.mode, r)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function d(e, t, n, r) {
            var i = n.type;
            return i === u
              ? h(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === i ||
                  ("object" === typeof i &&
                    null !== i &&
                    i.$$typeof === b &&
                    rr(i) === t.type))
              ? (((r = o(t, n.props)).ref = tr(e, t, n)), (r.return = e), r)
              : (((r = ts(n.type, n.key, n.props, null, e.mode, r)).ref = tr(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function p(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = is(n, e.mode, r)).return = e), t)
              : (((t = o(t, n.children || [])).return = e), t);
          }
          function h(e, t, n, r, i) {
            return null === t || 7 !== t.tag
              ? (((t = ns(n, e.mode, r, i)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function m(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = os("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case l:
                  return (
                    ((n = ts(t.type, t.key, t.props, null, e.mode, n)).ref = tr(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case c:
                  return ((t = is(t, e.mode, n)).return = e), t;
                case b:
                  return m(e, (0, t._init)(t._payload), n);
              }
              if (T(t) || C(t))
                return ((t = ns(t, e.mode, n, null)).return = e), t;
              nr(e, t);
            }
            return null;
          }
          function g(e, t, n, r) {
            var o = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== o ? null : f(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case l:
                  return n.key === o ? d(e, t, n, r) : null;
                case c:
                  return n.key === o ? p(e, t, n, r) : null;
                case b:
                  return g(e, t, (o = n._init)(n._payload), r);
              }
              if (T(n) || C(n)) return null !== o ? null : h(e, t, n, r, null);
              nr(e, n);
            }
            return null;
          }
          function v(e, t, n, r, o) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return f(t, (e = e.get(n) || null), "" + r, o);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case l:
                  return d(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    o
                  );
                case c:
                  return p(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    o
                  );
                case b:
                  return v(e, t, n, (0, r._init)(r._payload), o);
              }
              if (T(r) || C(r)) return h(t, (e = e.get(n) || null), r, o, null);
              nr(t, r);
            }
            return null;
          }
          function y(o, a, s, l) {
            for (
              var c = null, u = null, f = a, d = (a = 0), p = null;
              null !== f && d < s.length;
              d++
            ) {
              f.index > d ? ((p = f), (f = null)) : (p = f.sibling);
              var h = g(o, f, s[d], l);
              if (null === h) {
                null === f && (f = p);
                break;
              }
              e && f && null === h.alternate && t(o, f),
                (a = i(h, a, d)),
                null === u ? (c = h) : (u.sibling = h),
                (u = h),
                (f = p);
            }
            if (d === s.length) return n(o, f), Jn && Gn(o, d), c;
            if (null === f) {
              for (; d < s.length; d++)
                null !== (f = m(o, s[d], l)) &&
                  ((a = i(f, a, d)),
                  null === u ? (c = f) : (u.sibling = f),
                  (u = f));
              return Jn && Gn(o, d), c;
            }
            for (f = r(o, f); d < s.length; d++)
              null !== (p = v(f, o, d, s[d], l)) &&
                (e &&
                  null !== p.alternate &&
                  f.delete(null === p.key ? d : p.key),
                (a = i(p, a, d)),
                null === u ? (c = p) : (u.sibling = p),
                (u = p));
            return (
              e &&
                f.forEach(function (e) {
                  return t(o, e);
                }),
              Jn && Gn(o, d),
              c
            );
          }
          function A(o, s, l, c) {
            var u = C(l);
            if ("function" !== typeof u) throw Error(a(150));
            if (null == (l = u.call(l))) throw Error(a(151));
            for (
              var f = (u = null), d = s, p = (s = 0), h = null, y = l.next();
              null !== d && !y.done;
              p++, y = l.next()
            ) {
              d.index > p ? ((h = d), (d = null)) : (h = d.sibling);
              var b = g(o, d, y.value, c);
              if (null === b) {
                null === d && (d = h);
                break;
              }
              e && d && null === b.alternate && t(o, d),
                (s = i(b, s, p)),
                null === f ? (u = b) : (f.sibling = b),
                (f = b),
                (d = h);
            }
            if (y.done) return n(o, d), Jn && Gn(o, p), u;
            if (null === d) {
              for (; !y.done; p++, y = l.next())
                null !== (y = m(o, y.value, c)) &&
                  ((s = i(y, s, p)),
                  null === f ? (u = y) : (f.sibling = y),
                  (f = y));
              return Jn && Gn(o, p), u;
            }
            for (d = r(o, d); !y.done; p++, y = l.next())
              null !== (y = v(d, o, p, y.value, c)) &&
                (e &&
                  null !== y.alternate &&
                  d.delete(null === y.key ? p : y.key),
                (s = i(y, s, p)),
                null === f ? (u = y) : (f.sibling = y),
                (f = y));
            return (
              e &&
                d.forEach(function (e) {
                  return t(o, e);
                }),
              Jn && Gn(o, p),
              u
            );
          }
          return function e(r, i, a, f) {
            if (
              ("object" === typeof a &&
                null !== a &&
                a.type === u &&
                null === a.key &&
                (a = a.props.children),
              "object" === typeof a && null !== a)
            ) {
              switch (a.$$typeof) {
                case l:
                  e: {
                    for (var d = a.key, p = i; null !== p; ) {
                      if (p.key === d) {
                        if ((d = a.type) === u) {
                          if (7 === p.tag) {
                            n(r, p.sibling),
                              ((i = o(p, a.props.children)).return = r),
                              (r = i);
                            break e;
                          }
                        } else if (
                          p.elementType === d ||
                          ("object" === typeof d &&
                            null !== d &&
                            d.$$typeof === b &&
                            rr(d) === p.type)
                        ) {
                          n(r, p.sibling),
                            ((i = o(p, a.props)).ref = tr(r, p, a)),
                            (i.return = r),
                            (r = i);
                          break e;
                        }
                        n(r, p);
                        break;
                      }
                      t(r, p), (p = p.sibling);
                    }
                    a.type === u
                      ? (((i = ns(a.props.children, r.mode, f, a.key)).return =
                          r),
                        (r = i))
                      : (((f = ts(
                          a.type,
                          a.key,
                          a.props,
                          null,
                          r.mode,
                          f
                        )).ref = tr(r, i, a)),
                        (f.return = r),
                        (r = f));
                  }
                  return s(r);
                case c:
                  e: {
                    for (p = a.key; null !== i; ) {
                      if (i.key === p) {
                        if (
                          4 === i.tag &&
                          i.stateNode.containerInfo === a.containerInfo &&
                          i.stateNode.implementation === a.implementation
                        ) {
                          n(r, i.sibling),
                            ((i = o(i, a.children || [])).return = r),
                            (r = i);
                          break e;
                        }
                        n(r, i);
                        break;
                      }
                      t(r, i), (i = i.sibling);
                    }
                    ((i = is(a, r.mode, f)).return = r), (r = i);
                  }
                  return s(r);
                case b:
                  return e(r, i, (p = a._init)(a._payload), f);
              }
              if (T(a)) return y(r, i, a, f);
              if (C(a)) return A(r, i, a, f);
              nr(r, a);
            }
            return ("string" === typeof a && "" !== a) || "number" === typeof a
              ? ((a = "" + a),
                null !== i && 6 === i.tag
                  ? (n(r, i.sibling), ((i = o(i, a)).return = r), (r = i))
                  : (n(r, i), ((i = os(a, r.mode, f)).return = r), (r = i)),
                s(r))
              : n(r, i);
          };
        }
        var ir = or(!0),
          ar = or(!1),
          sr = {},
          lr = at(sr),
          cr = at(sr),
          ur = at(sr);
        function fr(e) {
          if (e === sr) throw Error(a(174));
          return e;
        }
        function dr(e, t) {
          lt(ur, t), lt(cr, e), lt(lr, sr), (e = F(t)), st(lr), lt(lr, e);
        }
        function pr() {
          st(lr), st(cr), st(ur);
        }
        function hr(e) {
          var t = fr(ur.current),
            n = fr(lr.current);
          n !== (t = D(n, e.type, t)) && (lt(cr, e), lt(lr, t));
        }
        function mr(e) {
          cr.current === e && (st(lr), st(cr));
        }
        var gr = at(0);
        function vr(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (null !== n && (null === (n = n.dehydrated) || Oe(n) || Le(n)))
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var yr = [];
        function br() {
          for (var e = 0; e < yr.length; e++) {
            var t = yr[e];
            Q
              ? (t._workInProgressVersionPrimary = null)
              : (t._workInProgressVersionSecondary = null);
          }
          yr.length = 0;
        }
        var Ar = s.ReactCurrentDispatcher,
          Br = s.ReactCurrentBatchConfig,
          Cr = 0,
          xr = null,
          wr = null,
          _r = null,
          Er = !1,
          Sr = !1,
          Mr = 0,
          Rr = 0;
        function Ir() {
          throw Error(a(321));
        }
        function kr(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!Kt(e[n], t[n])) return !1;
          return !0;
        }
        function Tr(e, t, n, r, o, i) {
          if (
            ((Cr = i),
            (xr = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (Ar.current = null === e || null === e.memoizedState ? mo : go),
            (e = n(r, o)),
            Sr)
          ) {
            i = 0;
            do {
              if (((Sr = !1), (Mr = 0), 25 <= i)) throw Error(a(301));
              (i += 1),
                (_r = wr = null),
                (t.updateQueue = null),
                (Ar.current = vo),
                (e = n(r, o));
            } while (Sr);
          }
          if (
            ((Ar.current = ho),
            (t = null !== wr && null !== wr.next),
            (Cr = 0),
            (_r = wr = xr = null),
            (Er = !1),
            t)
          )
            throw Error(a(300));
          return e;
        }
        function Pr() {
          var e = 0 !== Mr;
          return (Mr = 0), e;
        }
        function Fr() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === _r ? (xr.memoizedState = _r = e) : (_r = _r.next = e), _r
          );
        }
        function Dr() {
          if (null === wr) {
            var e = xr.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = wr.next;
          var t = null === _r ? xr.memoizedState : _r.next;
          if (null !== t) (_r = t), (wr = e);
          else {
            if (null === e) throw Error(a(310));
            (e = {
              memoizedState: (wr = e).memoizedState,
              baseState: wr.baseState,
              baseQueue: wr.baseQueue,
              queue: wr.queue,
              next: null,
            }),
              null === _r ? (xr.memoizedState = _r = e) : (_r = _r.next = e);
          }
          return _r;
        }
        function Or(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Lr(e) {
          var t = Dr(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = wr,
            o = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== o) {
              var s = o.next;
              (o.next = i.next), (i.next = s);
            }
            (r.baseQueue = o = i), (n.pending = null);
          }
          if (null !== o) {
            (i = o.next), (r = r.baseState);
            var l = (s = null),
              c = null,
              u = i;
            do {
              var f = u.lane;
              if ((Cr & f) === f)
                null !== c &&
                  (c = c.next =
                    {
                      lane: 0,
                      action: u.action,
                      hasEagerState: u.hasEagerState,
                      eagerState: u.eagerState,
                      next: null,
                    }),
                  (r = u.hasEagerState ? u.eagerState : e(r, u.action));
              else {
                var d = {
                  lane: f,
                  action: u.action,
                  hasEagerState: u.hasEagerState,
                  eagerState: u.eagerState,
                  next: null,
                };
                null === c ? ((l = c = d), (s = r)) : (c = c.next = d),
                  (xr.lanes |= f),
                  (na |= f);
              }
              u = u.next;
            } while (null !== u && u !== i);
            null === c ? (s = r) : (c.next = l),
              Kt(r, t.memoizedState) || (Lo = !0),
              (t.memoizedState = r),
              (t.baseState = s),
              (t.baseQueue = c),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            o = e;
            do {
              (i = o.lane), (xr.lanes |= i), (na |= i), (o = o.next);
            } while (o !== e);
          } else null === o && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Gr(e) {
          var t = Dr(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            o = n.pending,
            i = t.memoizedState;
          if (null !== o) {
            n.pending = null;
            var s = (o = o.next);
            do {
              (i = e(i, s.action)), (s = s.next);
            } while (s !== o);
            Kt(i, t.memoizedState) || (Lo = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function Hr() {}
        function zr(e, t) {
          var n = xr,
            r = Dr(),
            o = t(),
            i = !Kt(r.memoizedState, o);
          if (
            (i && ((r.memoizedState = o), (Lo = !0)),
            (r = r.queue),
            Xr(Ur.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              i ||
              (null !== _r && 1 & _r.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              $r(9, jr.bind(null, n, r, o, t), void 0, null),
              null === Vi)
            )
              throw Error(a(349));
            0 !== (30 & Cr) || Nr(n, t, o);
          }
          return o;
        }
        function Nr(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = xr.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (xr.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function jr(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Jr(t) && xa(e, 1, -1);
        }
        function Ur(e, t, n) {
          return n(function () {
            Jr(t) && xa(e, 1, -1);
          });
        }
        function Jr(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !Kt(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Kr(e) {
          var t = Fr();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Or,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = lo.bind(null, xr, e)),
            [t.memoizedState, e]
          );
        }
        function $r(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = xr.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (xr.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Qr() {
          return Dr().memoizedState;
        }
        function Wr(e, t, n, r) {
          var o = Fr();
          (xr.flags |= e),
            (o.memoizedState = $r(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Vr(e, t, n, r) {
          var o = Dr();
          r = void 0 === r ? null : r;
          var i = void 0;
          if (null !== wr) {
            var a = wr.memoizedState;
            if (((i = a.destroy), null !== r && kr(r, a.deps)))
              return void (o.memoizedState = $r(t, n, i, r));
          }
          (xr.flags |= e), (o.memoizedState = $r(1 | t, n, i, r));
        }
        function Yr(e, t) {
          return Wr(8390656, 8, e, t);
        }
        function Xr(e, t) {
          return Vr(2048, 8, e, t);
        }
        function Zr(e, t) {
          return Vr(4, 2, e, t);
        }
        function qr(e, t) {
          return Vr(4, 4, e, t);
        }
        function eo(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function to(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Vr(4, 4, eo.bind(null, t, e), n)
          );
        }
        function no() {}
        function ro(e, t) {
          var n = Dr();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && kr(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function oo(e, t) {
          var n = Dr();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && kr(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function io(e, t) {
          var n = Tt;
          (Tt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = Br.transition;
          Br.transition = {};
          try {
            e(!1), t();
          } finally {
            (Tt = n), (Br.transition = r);
          }
        }
        function ao() {
          return Dr().memoizedState;
        }
        function so(e, t, n) {
          var r = Ca(e);
          (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          }),
            co(e)
              ? uo(t, n)
              : (fo(e, t, n),
                null !== (e = xa(e, r, (n = Ba()))) && po(e, t, r));
        }
        function lo(e, t, n) {
          var r = Ca(e),
            o = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (co(e)) uo(t, o);
          else {
            fo(e, t, o);
            var i = e.alternate;
            if (
              0 === e.lanes &&
              (null === i || 0 === i.lanes) &&
              null !== (i = t.lastRenderedReducer)
            )
              try {
                var a = t.lastRenderedState,
                  s = i(a, n);
                if (((o.hasEagerState = !0), (o.eagerState = s), Kt(s, a)))
                  return;
              } catch (l) {}
            null !== (e = xa(e, r, (n = Ba()))) && po(e, t, r);
          }
        }
        function co(e) {
          var t = e.alternate;
          return e === xr || (null !== t && t === xr);
        }
        function uo(e, t) {
          Sr = Er = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function fo(e, t, n) {
          null !== Vi && 0 !== (1 & e.mode) && 0 === (2 & Wi)
            ? (null === (e = t.interleaved)
                ? ((n.next = n), null === dn ? (dn = [t]) : dn.push(t))
                : ((n.next = e.next), (e.next = n)),
              (t.interleaved = n))
            : (null === (e = t.pending)
                ? (n.next = n)
                : ((n.next = e.next), (e.next = n)),
              (t.pending = n));
        }
        function po(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), kt(e, n);
          }
        }
        var ho = {
            readContext: fn,
            useCallback: Ir,
            useContext: Ir,
            useEffect: Ir,
            useImperativeHandle: Ir,
            useInsertionEffect: Ir,
            useLayoutEffect: Ir,
            useMemo: Ir,
            useReducer: Ir,
            useRef: Ir,
            useState: Ir,
            useDebugValue: Ir,
            useDeferredValue: Ir,
            useTransition: Ir,
            useMutableSource: Ir,
            useSyncExternalStore: Ir,
            useId: Ir,
            unstable_isNewReconciler: !1,
          },
          mo = {
            readContext: fn,
            useCallback: function (e, t) {
              return (Fr().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: fn,
            useEffect: Yr,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Wr(4194308, 4, eo.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Wr(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Wr(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Fr();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Fr();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = so.bind(null, xr, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Fr().memoizedState = e);
            },
            useState: Kr,
            useDebugValue: no,
            useDeferredValue: function (e) {
              var t = Kr(e),
                n = t[0],
                r = t[1];
              return (
                Yr(
                  function () {
                    var t = Br.transition;
                    Br.transition = {};
                    try {
                      r(e);
                    } finally {
                      Br.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = Kr(!1),
                t = e[0];
              return (
                (e = io.bind(null, e[1])), (Fr().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = xr,
                o = Fr();
              if (Jn) {
                if (void 0 === n) throw Error(a(407));
                n = n();
              } else {
                if (((n = t()), null === Vi)) throw Error(a(349));
                0 !== (30 & Cr) || Nr(r, t, n);
              }
              o.memoizedState = n;
              var i = { value: n, getSnapshot: t };
              return (
                (o.queue = i),
                Yr(Ur.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                $r(9, jr.bind(null, r, i, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Fr(),
                t = Vi.identifierPrefix;
              if (Jn) {
                var n = Ln;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (On & ~(1 << (32 - At(On) - 1))).toString(32) + n)),
                  0 < (n = Mr++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = Rr++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          go = {
            readContext: fn,
            useCallback: ro,
            useContext: fn,
            useEffect: Xr,
            useImperativeHandle: to,
            useInsertionEffect: Zr,
            useLayoutEffect: qr,
            useMemo: oo,
            useReducer: Lr,
            useRef: Qr,
            useState: function () {
              return Lr(Or);
            },
            useDebugValue: no,
            useDeferredValue: function (e) {
              var t = Lr(Or),
                n = t[0],
                r = t[1];
              return (
                Xr(
                  function () {
                    var t = Br.transition;
                    Br.transition = {};
                    try {
                      r(e);
                    } finally {
                      Br.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              return [Lr(Or)[0], Dr().memoizedState];
            },
            useMutableSource: Hr,
            useSyncExternalStore: zr,
            useId: ao,
            unstable_isNewReconciler: !1,
          },
          vo = {
            readContext: fn,
            useCallback: ro,
            useContext: fn,
            useEffect: Xr,
            useImperativeHandle: to,
            useInsertionEffect: Zr,
            useLayoutEffect: qr,
            useMemo: oo,
            useReducer: Gr,
            useRef: Qr,
            useState: function () {
              return Gr(Or);
            },
            useDebugValue: no,
            useDeferredValue: function (e) {
              var t = Gr(Or),
                n = t[0],
                r = t[1];
              return (
                Xr(
                  function () {
                    var t = Br.transition;
                    Br.transition = {};
                    try {
                      r(e);
                    } finally {
                      Br.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              return [Gr(Or)[0], Dr().memoizedState];
            },
            useMutableSource: Hr,
            useSyncExternalStore: zr,
            useId: ao,
            unstable_isNewReconciler: !1,
          };
        function yo(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += qt(r)), (r = r.return);
            } while (r);
            var o = n;
          } catch (i) {
            o = "\nError generating stack: " + i.message + "\n" + i.stack;
          }
          return { value: e, source: t, stack: o };
        }
        function bo(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var Ao,
          Bo,
          Co,
          xo,
          wo = "function" === typeof WeakMap ? WeakMap : Map;
        function _o(e, t, n) {
          ((n = gn(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              fa || ((fa = !0), (da = r)), bo(0, t);
            }),
            n
          );
        }
        function Eo(e, t, n) {
          (n = gn(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var o = t.value;
            (n.payload = function () {
              return r(o);
            }),
              (n.callback = function () {
                bo(0, t);
              });
          }
          var i = e.stateNode;
          return (
            null !== i &&
              "function" === typeof i.componentDidCatch &&
              (n.callback = function () {
                bo(0, t),
                  "function" !== typeof r &&
                    (null === pa ? (pa = new Set([this])) : pa.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function So(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new wo();
            var o = new Set();
            r.set(t, o);
          } else void 0 === (o = r.get(t)) && ((o = new Set()), r.set(t, o));
          o.has(n) || (o.add(n), (e = $a.bind(null, e, t, n)), t.then(e, e));
        }
        function Mo(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function Ro(e, t, n, r, o) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = gn(-1, 1)).tag = 2), vn(n, t))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = o), e);
        }
        function Io(e) {
          e.flags |= 4;
        }
        function ko(e, t) {
          if (null !== e && e.child === t.child) return !0;
          if (0 !== (16 & t.flags)) return !1;
          for (e = t.child; null !== e; ) {
            if (0 !== (12854 & e.flags) || 0 !== (12854 & e.subtreeFlags))
              return !1;
            e = e.sibling;
          }
          return !0;
        }
        if (W)
          (Ao = function (e, t) {
            for (var n = t.child; null !== n; ) {
              if (5 === n.tag || 6 === n.tag) H(e, n.stateNode);
              else if (4 !== n.tag && null !== n.child) {
                (n.child.return = n), (n = n.child);
                continue;
              }
              if (n === t) break;
              for (; null === n.sibling; ) {
                if (null === n.return || n.return === t) return;
                n = n.return;
              }
              (n.sibling.return = n.return), (n = n.sibling);
            }
          }),
            (Bo = function () {}),
            (Co = function (e, t, n, r, o) {
              if ((e = e.memoizedProps) !== r) {
                var i = t.stateNode,
                  a = fr(lr.current);
                (n = N(i, n, e, r, o, a)), (t.updateQueue = n) && Io(t);
              }
            }),
            (xo = function (e, t, n, r) {
              n !== r && Io(t);
            });
        else if (V) {
          Ao = function (e, t, n, r) {
            for (var o = t.child; null !== o; ) {
              if (5 === o.tag) {
                var i = o.stateNode;
                n && r && (i = ke(i, o.type, o.memoizedProps, o)), H(e, i);
              } else if (6 === o.tag)
                (i = o.stateNode),
                  n && r && (i = Te(i, o.memoizedProps, o)),
                  H(e, i);
              else if (4 !== o.tag)
                if (22 === o.tag && null !== o.memoizedState)
                  null !== (i = o.child) && (i.return = o), Ao(e, o, !0, !0);
                else if (null !== o.child) {
                  (o.child.return = o), (o = o.child);
                  continue;
                }
              if (o === t) break;
              for (; null === o.sibling; ) {
                if (null === o.return || o.return === t) return;
                o = o.return;
              }
              (o.sibling.return = o.return), (o = o.sibling);
            }
          };
          var To = function (e, t, n, r) {
            for (var o = t.child; null !== o; ) {
              if (5 === o.tag) {
                var i = o.stateNode;
                n && r && (i = ke(i, o.type, o.memoizedProps, o)), Me(e, i);
              } else if (6 === o.tag)
                (i = o.stateNode),
                  n && r && (i = Te(i, o.memoizedProps, o)),
                  Me(e, i);
              else if (4 !== o.tag)
                if (22 === o.tag && null !== o.memoizedState)
                  null !== (i = o.child) && (i.return = o), To(e, o, !0, !0);
                else if (null !== o.child) {
                  (o.child.return = o), (o = o.child);
                  continue;
                }
              if (o === t) break;
              for (; null === o.sibling; ) {
                if (null === o.return || o.return === t) return;
                o = o.return;
              }
              (o.sibling.return = o.return), (o = o.sibling);
            }
          };
          (Bo = function (e, t) {
            var n = t.stateNode;
            if (!ko(e, t)) {
              e = n.containerInfo;
              var r = Se(e);
              To(r, t, !1, !1), (n.pendingChildren = r), Io(t), Re(e, r);
            }
          }),
            (Co = function (e, t, n, r, o) {
              var i = e.stateNode,
                a = e.memoizedProps;
              if ((e = ko(e, t)) && a === r) t.stateNode = i;
              else {
                var s = t.stateNode,
                  l = fr(lr.current),
                  c = null;
                a !== r && (c = N(s, n, a, r, o, l)),
                  e && null === c
                    ? (t.stateNode = i)
                    : ((i = Ee(i, c, n, a, r, t, e, s)),
                      z(i, n, r, o, l) && Io(t),
                      (t.stateNode = i),
                      e ? Io(t) : Ao(i, t, !1, !1));
              }
            }),
            (xo = function (e, t, n, r) {
              n !== r
                ? ((e = fr(ur.current)),
                  (n = fr(lr.current)),
                  (t.stateNode = U(r, e, n, t)),
                  Io(t))
                : (t.stateNode = e.stateNode);
            });
        } else
          (Bo = function () {}), (Co = function () {}), (xo = function () {});
        function Po(e, t) {
          if (!Jn)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Fo(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (r |= 14680064 & o.subtreeFlags),
                (r |= 14680064 & o.flags),
                (o.return = e),
                (o = o.sibling);
          else
            for (o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (r |= o.subtreeFlags),
                (r |= o.flags),
                (o.return = e),
                (o = o.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Do(e, t, n) {
          var r = t.pendingProps;
          switch ((Nn(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Fo(t), null;
            case 1:
              return ht(t.type) && mt(), Fo(t), null;
            case 3:
              return (
                (r = t.stateNode),
                pr(),
                st(ft),
                st(ut),
                br(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (Zn(t)
                    ? Io(t)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== $n && (Ma($n), ($n = null)))),
                Bo(e, t),
                Fo(t),
                null
              );
            case 5:
              mr(t), (n = fr(ur.current));
              var o = t.type;
              if (null !== e && null != t.stateNode)
                Co(e, t, o, r, n),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(a(166));
                  return Fo(t), null;
                }
                if (((e = fr(lr.current)), Zn(t))) {
                  if (!Y) throw Error(a(175));
                  (e = Ue(t.stateNode, t.type, t.memoizedProps, n, e, t, !Kn)),
                    (t.updateQueue = e),
                    null !== e && Io(t);
                } else {
                  var i = G(o, r, n, e, t);
                  Ao(i, t, !1, !1),
                    (t.stateNode = i),
                    z(i, o, r, n, e) && Io(t);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Fo(t), null;
            case 6:
              if (e && null != t.stateNode) xo(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(a(166));
                if (((e = fr(ur.current)), (n = fr(lr.current)), Zn(t))) {
                  if (!Y) throw Error(a(176));
                  if (
                    ((e = t.stateNode),
                    (r = t.memoizedProps),
                    (n = Je(e, r, t, !Kn)) && null !== (o = jn))
                  )
                    switch (((i = 0 !== (1 & o.mode)), o.tag)) {
                      case 3:
                        Ze(o.stateNode.containerInfo, e, r, i);
                        break;
                      case 5:
                        qe(o.type, o.memoizedProps, o.stateNode, e, r, i);
                    }
                  n && Io(t);
                } else t.stateNode = U(r, e, n, t);
              }
              return Fo(t), null;
            case 13:
              if (
                (st(gr),
                (r = t.memoizedState),
                Jn &&
                  null !== Un &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags))
              ) {
                for (e = Un; e; ) e = He(e);
                return qn(), (t.flags |= 98560), t;
              }
              if (null !== r && null !== r.dehydrated) {
                if (((r = Zn(t)), null === e)) {
                  if (!r) throw Error(a(318));
                  if (!Y) throw Error(a(344));
                  if (
                    !(e = null !== (e = t.memoizedState) ? e.dehydrated : null)
                  )
                    throw Error(a(317));
                  Ke(e, t);
                } else
                  qn(),
                    0 === (128 & t.flags) && (t.memoizedState = null),
                    (t.flags |= 4);
                return Fo(t), null;
              }
              return (
                null !== $n && (Ma($n), ($n = null)),
                0 !== (128 & t.flags)
                  ? ((t.lanes = n), t)
                  : ((r = null !== r),
                    (n = !1),
                    null === e ? Zn(t) : (n = null !== e.memoizedState),
                    r &&
                      !n &&
                      ((t.child.flags |= 8192),
                      0 !== (1 & t.mode) &&
                        (null === e || 0 !== (1 & gr.current)
                          ? 0 === ea && (ea = 3)
                          : Oa())),
                    null !== t.updateQueue && (t.flags |= 4),
                    Fo(t),
                    null)
              );
            case 4:
              return (
                pr(),
                Bo(e, t),
                null === e && Z(t.stateNode.containerInfo),
                Fo(t),
                null
              );
            case 10:
              return ln(t.type._context), Fo(t), null;
            case 17:
              return ht(t.type) && mt(), Fo(t), null;
            case 19:
              if ((st(gr), null === (o = t.memoizedState))) return Fo(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (i = o.rendering)))
                if (r) Po(o, !1);
                else {
                  if (0 !== ea || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (i = vr(e))) {
                        for (
                          t.flags |= 128,
                            Po(o, !1),
                            null !== (e = i.updateQueue) &&
                              ((t.updateQueue = e), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            e = n,
                            r = t.child;
                          null !== r;

                        )
                          (o = e),
                            ((n = r).flags &= 14680066),
                            null === (i = n.alternate)
                              ? ((n.childLanes = 0),
                                (n.lanes = o),
                                (n.child = null),
                                (n.subtreeFlags = 0),
                                (n.memoizedProps = null),
                                (n.memoizedState = null),
                                (n.updateQueue = null),
                                (n.dependencies = null),
                                (n.stateNode = null))
                              : ((n.childLanes = i.childLanes),
                                (n.lanes = i.lanes),
                                (n.child = i.child),
                                (n.subtreeFlags = 0),
                                (n.deletions = null),
                                (n.memoizedProps = i.memoizedProps),
                                (n.memoizedState = i.memoizedState),
                                (n.updateQueue = i.updateQueue),
                                (n.type = i.type),
                                (o = i.dependencies),
                                (n.dependencies =
                                  null === o
                                    ? null
                                    : {
                                        lanes: o.lanes,
                                        firstContext: o.firstContext,
                                      })),
                            (r = r.sibling);
                        return lt(gr, (1 & gr.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== o.tail &&
                    Gt() > la &&
                    ((t.flags |= 128),
                    (r = !0),
                    Po(o, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = vr(i))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (e = e.updateQueue) &&
                        ((t.updateQueue = e), (t.flags |= 4)),
                      Po(o, !0),
                      null === o.tail &&
                        "hidden" === o.tailMode &&
                        !i.alternate &&
                        !Jn)
                    )
                      return Fo(t), null;
                  } else
                    2 * Gt() - o.renderingStartTime > la &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Po(o, !1),
                      (t.lanes = 4194304));
                o.isBackwards
                  ? ((i.sibling = t.child), (t.child = i))
                  : (null !== (e = o.last) ? (e.sibling = i) : (t.child = i),
                    (o.last = i));
              }
              return null !== o.tail
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = Gt()),
                  (t.sibling = null),
                  (e = gr.current),
                  lt(gr, r ? (1 & e) | 2 : 1 & e),
                  t)
                : (Fo(t), null);
            case 22:
            case 23:
              return (
                Ta(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Zi) &&
                    (Fo(t), W && 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Fo(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(a(156, t.tag));
        }
        var Oo = s.ReactCurrentOwner,
          Lo = !1;
        function Go(e, t, n, r) {
          t.child = null === e ? ar(t, null, n, r) : ir(t, e.child, n, r);
        }
        function Ho(e, t, n, r, o) {
          n = n.render;
          var i = t.ref;
          return (
            un(t, o),
            (r = Tr(e, t, n, r, i, o)),
            (n = Pr()),
            null === e || Lo
              ? (Jn && n && zn(t), (t.flags |= 1), Go(e, t, r, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~o),
                ii(e, t, o))
          );
        }
        function zo(e, t, n, r, o) {
          if (null === e) {
            var i = n.type;
            return "function" !== typeof i ||
              qa(i) ||
              void 0 !== i.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = ts(n.type, null, r, t, t.mode, o)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = i), No(e, t, i, r, o));
          }
          if (((i = e.child), 0 === (e.lanes & o))) {
            var a = i.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : Zt)(a, r) &&
              e.ref === t.ref
            )
              return ii(e, t, o);
          }
          return (
            (t.flags |= 1),
            ((e = es(i, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function No(e, t, n, r, o) {
          if (null !== e && Zt(e.memoizedProps, r) && e.ref === t.ref) {
            if (((Lo = !1), 0 === (e.lanes & o)))
              return (t.lanes = e.lanes), ii(e, t, o);
            0 !== (131072 & e.flags) && (Lo = !0);
          }
          return Jo(e, t, n, r, o);
        }
        function jo(e, t, n) {
          var r = t.pendingProps,
            o = r.children,
            i = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = { baseLanes: 0, cachePool: null }),
                lt(qi, Zi),
                (Zi |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== i ? i.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = { baseLanes: e, cachePool: null }),
                  (t.updateQueue = null),
                  lt(qi, Zi),
                  (Zi |= e),
                  null
                );
              (t.memoizedState = { baseLanes: 0, cachePool: null }),
                (r = null !== i ? i.baseLanes : n),
                lt(qi, Zi),
                (Zi |= r);
            }
          else
            null !== i
              ? ((r = i.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              lt(qi, Zi),
              (Zi |= r);
          return Go(e, t, o, n), t.child;
        }
        function Uo(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Jo(e, t, n, r, o) {
          var i = ht(n) ? dt : ut.current;
          return (
            (i = pt(t, i)),
            un(t, o),
            (n = Tr(e, t, n, r, i, o)),
            (r = Pr()),
            null === e || Lo
              ? (Jn && r && zn(t), (t.flags |= 1), Go(e, t, n, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~o),
                ii(e, t, o))
          );
        }
        function Ko(e, t, n, r, o) {
          if (ht(n)) {
            var i = !0;
            yt(t);
          } else i = !1;
          if ((un(t, o), null === t.stateNode))
            null !== e &&
              ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              En(t, n, r),
              Mn(t, n, r, o),
              (r = !0);
          else if (null === e) {
            var a = t.stateNode,
              s = t.memoizedProps;
            a.props = s;
            var l = a.context,
              c = n.contextType;
            "object" === typeof c && null !== c
              ? (c = fn(c))
              : (c = pt(t, (c = ht(n) ? dt : ut.current)));
            var u = n.getDerivedStateFromProps,
              f =
                "function" === typeof u ||
                "function" === typeof a.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof a.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof a.componentWillReceiveProps) ||
              ((s !== r || l !== c) && Sn(t, a, r, c)),
              (pn = !1);
            var d = t.memoizedState;
            (a.state = d),
              An(t, r, a, o),
              (l = t.memoizedState),
              s !== r || d !== l || ft.current || pn
                ? ("function" === typeof u &&
                    (xn(t, n, u, r), (l = t.memoizedState)),
                  (s = pn || _n(t, n, s, r, d, l, c))
                    ? (f ||
                        ("function" !== typeof a.UNSAFE_componentWillMount &&
                          "function" !== typeof a.componentWillMount) ||
                        ("function" === typeof a.componentWillMount &&
                          a.componentWillMount(),
                        "function" === typeof a.UNSAFE_componentWillMount &&
                          a.UNSAFE_componentWillMount()),
                      "function" === typeof a.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof a.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = l)),
                  (a.props = r),
                  (a.state = l),
                  (a.context = c),
                  (r = s))
                : ("function" === typeof a.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (a = t.stateNode),
              mn(e, t),
              (s = t.memoizedProps),
              (c = t.type === t.elementType ? s : en(t.type, s)),
              (a.props = c),
              (f = t.pendingProps),
              (d = a.context),
              "object" === typeof (l = n.contextType) && null !== l
                ? (l = fn(l))
                : (l = pt(t, (l = ht(n) ? dt : ut.current)));
            var p = n.getDerivedStateFromProps;
            (u =
              "function" === typeof p ||
              "function" === typeof a.getSnapshotBeforeUpdate) ||
              ("function" !== typeof a.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof a.componentWillReceiveProps) ||
              ((s !== f || d !== l) && Sn(t, a, r, l)),
              (pn = !1),
              (d = t.memoizedState),
              (a.state = d),
              An(t, r, a, o);
            var h = t.memoizedState;
            s !== f || d !== h || ft.current || pn
              ? ("function" === typeof p &&
                  (xn(t, n, p, r), (h = t.memoizedState)),
                (c = pn || _n(t, n, c, r, d, h, l) || !1)
                  ? (u ||
                      ("function" !== typeof a.UNSAFE_componentWillUpdate &&
                        "function" !== typeof a.componentWillUpdate) ||
                      ("function" === typeof a.componentWillUpdate &&
                        a.componentWillUpdate(r, h, l),
                      "function" === typeof a.UNSAFE_componentWillUpdate &&
                        a.UNSAFE_componentWillUpdate(r, h, l)),
                    "function" === typeof a.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof a.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof a.componentDidUpdate ||
                      (s === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof a.getSnapshotBeforeUpdate ||
                      (s === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (a.props = r),
                (a.state = h),
                (a.context = l),
                (r = c))
              : ("function" !== typeof a.componentDidUpdate ||
                  (s === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof a.getSnapshotBeforeUpdate ||
                  (s === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return $o(e, t, n, r, i, o);
        }
        function $o(e, t, n, r, o, i) {
          Uo(e, t);
          var a = 0 !== (128 & t.flags);
          if (!r && !a) return o && bt(t, n, !1), ii(e, t, i);
          (r = t.stateNode), (Oo.current = t);
          var s =
            a && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && a
              ? ((t.child = ir(t, e.child, null, i)),
                (t.child = ir(t, null, s, i)))
              : Go(e, t, s, i),
            (t.memoizedState = r.state),
            o && bt(t, n, !0),
            t.child
          );
        }
        function Qo(e) {
          var t = e.stateNode;
          t.pendingContext
            ? gt(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && gt(0, t.context, !1),
            dr(e, t.containerInfo);
        }
        function Wo(e, t, n, r, o) {
          return qn(), er(o), (t.flags |= 256), Go(e, t, n, r), t.child;
        }
        var Vo = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Yo(e) {
          return { baseLanes: e, cachePool: null };
        }
        function Xo(e, t, n) {
          var r,
            o = t.pendingProps,
            i = gr.current,
            s = !1,
            l = 0 !== (128 & t.flags);
          if (
            ((r = l) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            r
              ? ((s = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            lt(gr, 1 & i),
            null === e)
          )
            return (
              Yn(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : Le(e)
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((i = o.children),
                  (e = o.fallback),
                  s
                    ? ((o = t.mode),
                      (s = t.child),
                      (i = { mode: "hidden", children: i }),
                      0 === (1 & o) && null !== s
                        ? ((s.childLanes = 0), (s.pendingProps = i))
                        : (s = rs(i, o, 0, null)),
                      (e = ns(e, o, n, null)),
                      (s.return = t),
                      (e.return = t),
                      (s.sibling = e),
                      (t.child = s),
                      (t.child.memoizedState = Yo(n)),
                      (t.memoizedState = Vo),
                      e)
                    : Zo(t, i))
            );
          if (null !== (i = e.memoizedState)) {
            if (null !== (r = i.dehydrated)) {
              if (l)
                return 256 & t.flags
                  ? ((t.flags &= -257), ti(e, t, n, Error(a(422))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((s = o.fallback),
                    (i = t.mode),
                    (o = rs(
                      { mode: "visible", children: o.children },
                      i,
                      0,
                      null
                    )),
                    ((s = ns(s, i, n, null)).flags |= 2),
                    (o.return = t),
                    (s.return = t),
                    (o.sibling = s),
                    (t.child = o),
                    0 !== (1 & t.mode) && ir(t, e.child, null, n),
                    (t.child.memoizedState = Yo(n)),
                    (t.memoizedState = Vo),
                    s);
              if (0 === (1 & t.mode)) t = ti(e, t, n, null);
              else if (Le(r)) t = ti(e, t, n, Error(a(419)));
              else if (((o = 0 !== (n & e.childLanes)), Lo || o)) {
                if (null !== (o = Vi)) {
                  switch (n & -n) {
                    case 4:
                      s = 2;
                      break;
                    case 16:
                      s = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      s = 32;
                      break;
                    case 536870912:
                      s = 268435456;
                      break;
                    default:
                      s = 0;
                  }
                  0 !== (o = 0 !== (s & (o.suspendedLanes | n)) ? 0 : s) &&
                    o !== i.retryLane &&
                    ((i.retryLane = o), xa(e, o, -1));
                }
                Oa(), (t = ti(e, t, n, Error(a(421))));
              } else
                Oe(r)
                  ? ((t.flags |= 128),
                    (t.child = e.child),
                    (t = Wa.bind(null, e)),
                    Ge(r, t),
                    (t = null))
                  : ((n = i.treeContext),
                    Y &&
                      ((Un = je(r)),
                      (jn = t),
                      (Jn = !0),
                      ($n = null),
                      (Kn = !1),
                      null !== n &&
                        ((Pn[Fn++] = On),
                        (Pn[Fn++] = Ln),
                        (Pn[Fn++] = Dn),
                        (On = n.id),
                        (Ln = n.overflow),
                        (Dn = t))),
                    ((t = Zo(t, t.pendingProps.children)).flags |= 4096));
              return t;
            }
            return s
              ? ((o = ei(e, t, o.children, o.fallback, n)),
                (s = t.child),
                (i = e.child.memoizedState),
                (s.memoizedState =
                  null === i
                    ? Yo(n)
                    : { baseLanes: i.baseLanes | n, cachePool: null }),
                (s.childLanes = e.childLanes & ~n),
                (t.memoizedState = Vo),
                o)
              : ((n = qo(e, t, o.children, n)), (t.memoizedState = null), n);
          }
          return s
            ? ((o = ei(e, t, o.children, o.fallback, n)),
              (s = t.child),
              (i = e.child.memoizedState),
              (s.memoizedState =
                null === i
                  ? Yo(n)
                  : { baseLanes: i.baseLanes | n, cachePool: null }),
              (s.childLanes = e.childLanes & ~n),
              (t.memoizedState = Vo),
              o)
            : ((n = qo(e, t, o.children, n)), (t.memoizedState = null), n);
        }
        function Zo(e, t) {
          return (
            ((t = rs(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function qo(e, t, n, r) {
          var o = e.child;
          return (
            (e = o.sibling),
            (n = es(o, { mode: "visible", children: n })),
            0 === (1 & t.mode) && (n.lanes = r),
            (n.return = t),
            (n.sibling = null),
            null !== e &&
              (null === (r = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : r.push(e)),
            (t.child = n)
          );
        }
        function ei(e, t, n, r, o) {
          var i = t.mode,
            a = (e = e.child).sibling,
            s = { mode: "hidden", children: n };
          return (
            0 === (1 & i) && t.child !== e
              ? (((n = t.child).childLanes = 0),
                (n.pendingProps = s),
                (t.deletions = null))
              : ((n = es(e, s)).subtreeFlags = 14680064 & e.subtreeFlags),
            null !== a ? (r = es(a, r)) : ((r = ns(r, i, o, null)).flags |= 2),
            (r.return = t),
            (n.return = t),
            (n.sibling = r),
            (t.child = n),
            r
          );
        }
        function ti(e, t, n, r) {
          return (
            null !== r && er(r),
            ir(t, e.child, null, n),
            ((e = Zo(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function ni(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), cn(e.return, t, n);
        }
        function ri(e, t, n, r, o) {
          var i = e.memoizedState;
          null === i
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: o,
              })
            : ((i.isBackwards = t),
              (i.rendering = null),
              (i.renderingStartTime = 0),
              (i.last = r),
              (i.tail = n),
              (i.tailMode = o));
        }
        function oi(e, t, n) {
          var r = t.pendingProps,
            o = r.revealOrder,
            i = r.tail;
          if ((Go(e, t, r.children, n), 0 !== (2 & (r = gr.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && ni(e, n, t);
                else if (19 === e.tag) ni(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((lt(gr, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (o) {
              case "forwards":
                for (n = t.child, o = null; null !== n; )
                  null !== (e = n.alternate) && null === vr(e) && (o = n),
                    (n = n.sibling);
                null === (n = o)
                  ? ((o = t.child), (t.child = null))
                  : ((o = n.sibling), (n.sibling = null)),
                  ri(t, !1, o, n, i);
                break;
              case "backwards":
                for (n = null, o = t.child, t.child = null; null !== o; ) {
                  if (null !== (e = o.alternate) && null === vr(e)) {
                    t.child = o;
                    break;
                  }
                  (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                }
                ri(t, !0, n, null, i);
                break;
              case "together":
                ri(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function ii(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (na |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(a(153));
          if (null !== t.child) {
            for (
              n = es((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = es(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function ai(e, t) {
          switch ((Nn(t), t.tag)) {
            case 1:
              return (
                ht(t.type) && mt(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                pr(),
                st(ft),
                st(ut),
                br(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return mr(t), null;
            case 13:
              if (
                (st(gr),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(a(340));
                qn();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return st(gr), null;
            case 4:
              return pr(), null;
            case 10:
              return ln(t.type._context), null;
            case 22:
            case 23:
              return Ta(), null;
            case 24:
            default:
              return null;
          }
        }
        var si = !1,
          li = !1,
          ci = "function" === typeof WeakSet ? WeakSet : Set,
          ui = null;
        function fi(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Ka(e, t, r);
              }
            else n.current = null;
        }
        function di(e, t, n) {
          try {
            n();
          } catch (r) {
            Ka(e, t, r);
          }
        }
        var pi = !1;
        function hi(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var o = (r = r.next);
            do {
              if ((o.tag & e) === e) {
                var i = o.destroy;
                (o.destroy = void 0), void 0 !== i && di(t, n, i);
              }
              o = o.next;
            } while (o !== r);
          }
        }
        function mi(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function gi(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            switch (e.tag) {
              case 5:
                e = P(n);
                break;
              default:
                e = n;
            }
            "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function vi(e, t, n) {
          if (Jt && "function" === typeof Jt.onCommitFiberUnmount)
            try {
              Jt.onCommitFiberUnmount(Ut, t);
            } catch (a) {}
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                var r = (e = e.next);
                do {
                  var o = r,
                    i = o.destroy;
                  (o = o.tag),
                    void 0 !== i &&
                      (0 !== (2 & o) || 0 !== (4 & o)) &&
                      di(t, n, i),
                    (r = r.next);
                } while (r !== e);
              }
              break;
            case 1:
              if (
                (fi(t, n),
                "function" === typeof (e = t.stateNode).componentWillUnmount)
              )
                try {
                  (e.props = t.memoizedProps),
                    (e.state = t.memoizedState),
                    e.componentWillUnmount();
                } catch (a) {
                  Ka(t, n, a);
                }
              break;
            case 5:
              fi(t, n);
              break;
            case 4:
              W
                ? _i(e, t, n)
                : V &&
                  V &&
                  ((t = t.stateNode.containerInfo), (n = Se(t)), Ie(t, n));
          }
        }
        function yi(e, t, n) {
          for (var r = t; ; )
            if ((vi(e, r, n), null === r.child || (W && 4 === r.tag))) {
              if (r === t) break;
              for (; null === r.sibling; ) {
                if (null === r.return || r.return === t) return;
                r = r.return;
              }
              (r.sibling.return = r.return), (r = r.sibling);
            } else (r.child.return = r), (r = r.child);
        }
        function bi(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), bi(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag && null !== (t = e.stateNode) && ee(t),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function Ai(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function Bi(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || Ai(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function Ci(e) {
          if (W) {
            e: {
              for (var t = e.return; null !== t; ) {
                if (Ai(t)) break e;
                t = t.return;
              }
              throw Error(a(160));
            }
            var n = t;
            switch (n.tag) {
              case 5:
                (t = n.stateNode),
                  32 & n.flags && (Ae(t), (n.flags &= -33)),
                  wi(e, (n = Bi(e)), t);
                break;
              case 3:
              case 4:
                (t = n.stateNode.containerInfo), xi(e, (n = Bi(e)), t);
                break;
              default:
                throw Error(a(161));
            }
          }
        }
        function xi(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r) (e = e.stateNode), t ? ve(n, e, t) : de(n, e);
          else if (4 !== r && null !== (e = e.child))
            for (xi(e, t, n), e = e.sibling; null !== e; )
              xi(e, t, n), (e = e.sibling);
        }
        function wi(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r) (e = e.stateNode), t ? ge(n, e, t) : fe(n, e);
          else if (4 !== r && null !== (e = e.child))
            for (wi(e, t, n), e = e.sibling; null !== e; )
              wi(e, t, n), (e = e.sibling);
        }
        function _i(e, t, n) {
          for (var r, o, i = t, s = !1; ; ) {
            if (!s) {
              s = i.return;
              e: for (;;) {
                if (null === s) throw Error(a(160));
                switch (((r = s.stateNode), s.tag)) {
                  case 5:
                    o = !1;
                    break e;
                  case 3:
                  case 4:
                    (r = r.containerInfo), (o = !0);
                    break e;
                }
                s = s.return;
              }
              s = !0;
            }
            if (5 === i.tag || 6 === i.tag)
              yi(e, i, n), o ? be(r, i.stateNode) : ye(r, i.stateNode);
            else if (18 === i.tag) o ? Ye(r, i.stateNode) : Ve(r, i.stateNode);
            else if (4 === i.tag) {
              if (null !== i.child) {
                (r = i.stateNode.containerInfo),
                  (o = !0),
                  (i.child.return = i),
                  (i = i.child);
                continue;
              }
            } else if ((vi(e, i, n), null !== i.child)) {
              (i.child.return = i), (i = i.child);
              continue;
            }
            if (i === t) break;
            for (; null === i.sibling; ) {
              if (null === i.return || i.return === t) return;
              4 === (i = i.return).tag && (s = !1);
            }
            (i.sibling.return = i.return), (i = i.sibling);
          }
        }
        function Ei(e, t) {
          if (W) {
            switch (t.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                return hi(3, t, t.return), mi(3, t), void hi(5, t, t.return);
              case 1:
                return;
              case 5:
                var n = t.stateNode;
                if (null != n) {
                  var r = t.memoizedProps;
                  e = null !== e ? e.memoizedProps : r;
                  var o = t.type,
                    i = t.updateQueue;
                  (t.updateQueue = null), null !== i && me(n, i, o, e, r, t);
                }
                return;
              case 6:
                if (null === t.stateNode) throw Error(a(162));
                return (
                  (n = t.memoizedProps),
                  void pe(t.stateNode, null !== e ? e.memoizedProps : n, n)
                );
              case 3:
                return void (
                  Y &&
                  null !== e &&
                  e.memoizedState.isDehydrated &&
                  Qe(t.stateNode.containerInfo)
                );
              case 12:
                return;
              case 13:
              case 19:
                return void Si(t);
              case 17:
                return;
            }
            throw Error(a(163));
          }
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              return hi(3, t, t.return), mi(3, t), void hi(5, t, t.return);
            case 12:
              return;
            case 13:
            case 19:
              return void Si(t);
            case 3:
              Y &&
                null !== e &&
                e.memoizedState.isDehydrated &&
                Qe(t.stateNode.containerInfo);
              break;
            case 22:
            case 23:
              return;
          }
          e: if (V) {
            switch (t.tag) {
              case 1:
              case 5:
              case 6:
                break e;
              case 3:
              case 4:
                (t = t.stateNode), Ie(t.containerInfo, t.pendingChildren);
                break e;
            }
            throw Error(a(163));
          }
        }
        function Si(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new ci()),
              t.forEach(function (t) {
                var r = Va.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function Mi(e, t, n) {
          (ui = e), Ri(e, t, n);
        }
        function Ri(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== ui; ) {
            var o = ui,
              i = o.child;
            if (22 === o.tag && r) {
              var a = null !== o.memoizedState || si;
              if (!a) {
                var s = o.alternate,
                  l = (null !== s && null !== s.memoizedState) || li;
                s = si;
                var c = li;
                if (((si = a), (li = l) && !c))
                  for (ui = o; null !== ui; )
                    (l = (a = ui).child),
                      22 === a.tag && null !== a.memoizedState
                        ? Ti(o)
                        : null !== l
                        ? ((l.return = a), (ui = l))
                        : Ti(o);
                for (; null !== i; ) (ui = i), Ri(i, t, n), (i = i.sibling);
                (ui = o), (si = s), (li = c);
              }
              Ii(e);
            } else
              0 !== (8772 & o.subtreeFlags) && null !== i
                ? ((i.return = o), (ui = i))
                : Ii(e);
          }
        }
        function Ii(e) {
          for (; null !== ui; ) {
            var t = ui;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      li || mi(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !li)
                        if (null === n) r.componentDidMount();
                        else {
                          var o =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : en(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            o,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var i = t.updateQueue;
                      null !== i && Bn(t, i, r);
                      break;
                    case 3:
                      var s = t.updateQueue;
                      if (null !== s) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                              n = P(t.child.stateNode);
                              break;
                            case 1:
                              n = t.child.stateNode;
                          }
                        Bn(t, s, n);
                      }
                      break;
                    case 5:
                      var l = t.stateNode;
                      null === n &&
                        4 & t.flags &&
                        he(l, t.type, t.memoizedProps, t);
                      break;
                    case 6:
                    case 4:
                    case 12:
                      break;
                    case 13:
                      if (Y && null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var u = c.memoizedState;
                          if (null !== u) {
                            var f = u.dehydrated;
                            null !== f && We(f);
                          }
                        }
                      }
                      break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                      break;
                    default:
                      throw Error(a(163));
                  }
                li || (512 & t.flags && gi(t));
              } catch (d) {
                Ka(t, t.return, d);
              }
            }
            if (t === e) {
              ui = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (ui = n);
              break;
            }
            ui = t.return;
          }
        }
        function ki(e) {
          for (; null !== ui; ) {
            var t = ui;
            if (t === e) {
              ui = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (ui = n);
              break;
            }
            ui = t.return;
          }
        }
        function Ti(e) {
          for (; null !== ui; ) {
            var t = ui;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    mi(4, t);
                  } catch (l) {
                    Ka(t, n, l);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var o = t.return;
                    try {
                      r.componentDidMount();
                    } catch (l) {
                      Ka(t, o, l);
                    }
                  }
                  var i = t.return;
                  try {
                    gi(t);
                  } catch (l) {
                    Ka(t, i, l);
                  }
                  break;
                case 5:
                  var a = t.return;
                  try {
                    gi(t);
                  } catch (l) {
                    Ka(t, a, l);
                  }
              }
            } catch (l) {
              Ka(t, t.return, l);
            }
            if (t === e) {
              ui = null;
              break;
            }
            var s = t.sibling;
            if (null !== s) {
              (s.return = t.return), (ui = s);
              break;
            }
            ui = t.return;
          }
        }
        var Pi = 0,
          Fi = 1,
          Di = 2,
          Oi = 3,
          Li = 4;
        if ("function" === typeof Symbol && Symbol.for) {
          var Gi = Symbol.for;
          (Pi = Gi("selector.component")),
            (Fi = Gi("selector.has_pseudo_class")),
            (Di = Gi("selector.role")),
            (Oi = Gi("selector.test_id")),
            (Li = Gi("selector.text"));
        }
        function Hi(e) {
          var t = X(e);
          if (null != t) {
            if ("string" !== typeof t.memoizedProps["data-testname"])
              throw Error(a(364));
            return t;
          }
          if (null === (e = oe(e))) throw Error(a(362));
          return e.stateNode.current;
        }
        function zi(e, t) {
          switch (t.$$typeof) {
            case Pi:
              if (e.type === t.value) return !0;
              break;
            case Fi:
              e: {
                (t = t.value), (e = [e, 0]);
                for (var n = 0; n < e.length; ) {
                  var r = e[n++],
                    o = e[n++],
                    i = t[o];
                  if (5 !== r.tag || !se(r)) {
                    for (; null != i && zi(r, i); ) i = t[++o];
                    if (o === t.length) {
                      t = !0;
                      break e;
                    }
                    for (r = r.child; null !== r; )
                      e.push(r, o), (r = r.sibling);
                  }
                }
                t = !1;
              }
              return t;
            case Di:
              if (5 === e.tag && le(e.stateNode, t.value)) return !0;
              break;
            case Li:
              if (
                (5 === e.tag || 6 === e.tag) &&
                null !== (e = ae(e)) &&
                0 <= e.indexOf(t.value)
              )
                return !0;
              break;
            case Oi:
              if (
                5 === e.tag &&
                "string" === typeof (e = e.memoizedProps["data-testname"]) &&
                e.toLowerCase() === t.value.toLowerCase()
              )
                return !0;
              break;
            default:
              throw Error(a(365));
          }
          return !1;
        }
        function Ni(e) {
          switch (e.$$typeof) {
            case Pi:
              return "<" + (x(e.value) || "Unknown") + ">";
            case Fi:
              return ":has(" + (Ni(e) || "") + ")";
            case Di:
              return '[role="' + e.value + '"]';
            case Li:
              return '"' + e.value + '"';
            case Oi:
              return '[data-testname="' + e.value + '"]';
            default:
              throw Error(a(365));
          }
        }
        function ji(e, t) {
          var n = [];
          e = [e, 0];
          for (var r = 0; r < e.length; ) {
            var o = e[r++],
              i = e[r++],
              a = t[i];
            if (5 !== o.tag || !se(o)) {
              for (; null != a && zi(o, a); ) a = t[++i];
              if (i === t.length) n.push(o);
              else
                for (o = o.child; null !== o; ) e.push(o, i), (o = o.sibling);
            }
          }
          return n;
        }
        function Ui(e, t) {
          if (!re) throw Error(a(363));
          (e = ji((e = Hi(e)), t)), (t = []), (e = Array.from(e));
          for (var n = 0; n < e.length; ) {
            var r = e[n++];
            if (5 === r.tag) se(r) || t.push(r.stateNode);
            else for (r = r.child; null !== r; ) e.push(r), (r = r.sibling);
          }
          return t;
        }
        var Ji = Math.ceil,
          Ki = s.ReactCurrentDispatcher,
          $i = s.ReactCurrentOwner,
          Qi = s.ReactCurrentBatchConfig,
          Wi = 0,
          Vi = null,
          Yi = null,
          Xi = 0,
          Zi = 0,
          qi = at(0),
          ea = 0,
          ta = null,
          na = 0,
          ra = 0,
          oa = 0,
          ia = null,
          aa = null,
          sa = 0,
          la = 1 / 0;
        function ca() {
          la = Gt() + 500;
        }
        var ua,
          fa = !1,
          da = null,
          pa = null,
          ha = !1,
          ma = null,
          ga = 0,
          va = 0,
          ya = null,
          ba = -1,
          Aa = 0;
        function Ba() {
          return 0 !== (6 & Wi) ? Gt() : -1 !== ba ? ba : (ba = Gt());
        }
        function Ca(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Wi) && 0 !== Xi
            ? Xi & -Xi
            : null !== Xt.transition
            ? (0 === Aa &&
                ((e = xt), 0 === (4194240 & (xt <<= 1)) && (xt = 64), (Aa = e)),
              Aa)
            : 0 !== (e = Tt)
            ? e
            : q();
        }
        function xa(e, t, n) {
          if (50 < va) throw ((va = 0), (ya = null), Error(a(185)));
          var r = wa(e, t);
          return null === r
            ? null
            : (It(r, t, n),
              (0 !== (2 & Wi) && r === Vi) ||
                (r === Vi &&
                  (0 === (2 & Wi) && (ra |= t), 4 === ea && Ra(r, Xi)),
                _a(r, n),
                1 === t &&
                  0 === Wi &&
                  0 === (1 & e.mode) &&
                  (ca(), Qt && Yt())),
              r);
        }
        function wa(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        function _a(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                o = e.expirationTimes,
                i = e.pendingLanes;
              0 < i;

            ) {
              var a = 31 - At(i),
                s = 1 << a,
                l = o[a];
              -1 === l
                ? (0 !== (s & n) && 0 === (s & r)) || (o[a] = St(s, t))
                : l <= t && (e.expiredLanes |= s),
                (i &= ~s);
            }
          })(e, t);
          var r = Et(e, e === Vi ? Xi : 0);
          if (0 === r)
            null !== n && Dt(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Dt(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Qt = !0), Vt(e);
                  })(Ia.bind(null, e))
                : Vt(Ia.bind(null, e)),
                te
                  ? ne(function () {
                      0 === Wi && Yt();
                    })
                  : Ft(Ht, Yt),
                (n = null);
            else {
              switch (Pt(r)) {
                case 1:
                  n = Ht;
                  break;
                case 4:
                  n = zt;
                  break;
                case 16:
                  n = Nt;
                  break;
                case 536870912:
                  n = jt;
                  break;
                default:
                  n = Nt;
              }
              n = Ya(n, Ea.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function Ea(e, t) {
          if (((ba = -1), (Aa = 0), 0 !== (6 & Wi))) throw Error(a(327));
          var n = e.callbackNode;
          if (Ua() && e.callbackNode !== n) return null;
          var r = Et(e, e === Vi ? Xi : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = La(e, r);
          else {
            t = r;
            var o = Wi;
            Wi |= 2;
            var i = Da();
            for ((Vi === e && Xi === t) || (ca(), Pa(e, t)); ; )
              try {
                Ha();
                break;
              } catch (l) {
                Fa(e, l);
              }
            an(),
              (Ki.current = i),
              (Wi = o),
              null !== Yi ? (t = 0) : ((Vi = null), (Xi = 0), (t = ea));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (o = Mt(e)) && ((r = o), (t = Sa(e, o))),
              1 === t)
            )
              throw ((n = ta), Pa(e, 0), Ra(e, r), _a(e, Gt()), n);
            if (6 === t) Ra(e, r);
            else {
              if (
                ((o = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var o = n[r],
                              i = o.getSnapshot;
                            o = o.value;
                            try {
                              if (!Kt(i(), o)) return !1;
                            } catch (s) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(o) &&
                  (2 === (t = La(e, r)) &&
                    0 !== (i = Mt(e)) &&
                    ((r = i), (t = Sa(e, i))),
                  1 === t))
              )
                throw ((n = ta), Pa(e, 0), Ra(e, r), _a(e, Gt()), n);
              switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(a(345));
                case 2:
                  ja(e, aa);
                  break;
                case 3:
                  if (
                    (Ra(e, r),
                    (130023424 & r) === r && 10 < (t = sa + 500 - Gt()))
                  ) {
                    if (0 !== Et(e, 0)) break;
                    if (((o = e.suspendedLanes) & r) !== r) {
                      Ba(), (e.pingedLanes |= e.suspendedLanes & o);
                      break;
                    }
                    e.timeoutHandle = J(ja.bind(null, e, aa), t);
                    break;
                  }
                  ja(e, aa);
                  break;
                case 4:
                  if ((Ra(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, o = -1; 0 < r; ) {
                    var s = 31 - At(r);
                    (i = 1 << s), (s = t[s]) > o && (o = s), (r &= ~i);
                  }
                  if (
                    ((r = o),
                    10 <
                      (r =
                        (120 > (r = Gt() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Ji(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = J(ja.bind(null, e, aa), r);
                    break;
                  }
                  ja(e, aa);
                  break;
                case 5:
                  ja(e, aa);
                  break;
                default:
                  throw Error(a(329));
              }
            }
          }
          return _a(e, Gt()), e.callbackNode === n ? Ea.bind(null, e) : null;
        }
        function Sa(e, t) {
          var n = ia;
          return (
            e.current.memoizedState.isDehydrated && (Pa(e, t).flags |= 256),
            2 !== (e = La(e, t)) && ((t = aa), (aa = n), null !== t && Ma(t)),
            e
          );
        }
        function Ma(e) {
          null === aa ? (aa = e) : aa.push.apply(aa, e);
        }
        function Ra(e, t) {
          for (
            t &= ~oa,
              t &= ~ra,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - At(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function Ia(e) {
          if (0 !== (6 & Wi)) throw Error(a(327));
          Ua();
          var t = Et(e, 0);
          if (0 === (1 & t)) return _a(e, Gt()), null;
          var n = La(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = Mt(e);
            0 !== r && ((t = r), (n = Sa(e, r)));
          }
          if (1 === n) throw ((n = ta), Pa(e, 0), Ra(e, t), _a(e, Gt()), n);
          if (6 === n) throw Error(a(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            ja(e, aa),
            _a(e, Gt()),
            null
          );
        }
        function ka(e) {
          null !== ma && 0 === ma.tag && 0 === (6 & Wi) && Ua();
          var t = Wi;
          Wi |= 1;
          var n = Qi.transition,
            r = Tt;
          try {
            if (((Qi.transition = null), (Tt = 1), e)) return e();
          } finally {
            (Tt = r), (Qi.transition = n), 0 === (6 & (Wi = t)) && Yt();
          }
        }
        function Ta() {
          (Zi = qi.current), st(qi);
        }
        function Pa(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((n !== $ && ((e.timeoutHandle = $), K(n)), null !== Yi))
            for (n = Yi.return; null !== n; ) {
              var r = n;
              switch ((Nn(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    mt();
                  break;
                case 3:
                  pr(), st(ft), st(ut), br();
                  break;
                case 5:
                  mr(r);
                  break;
                case 4:
                  pr();
                  break;
                case 13:
                case 19:
                  st(gr);
                  break;
                case 10:
                  ln(r.type._context);
                  break;
                case 22:
                case 23:
                  Ta();
              }
              n = n.return;
            }
          if (
            ((Vi = e),
            (Yi = e = es(e.current, null)),
            (Xi = Zi = t),
            (ea = 0),
            (ta = null),
            (oa = ra = na = 0),
            (aa = ia = null),
            null !== dn)
          ) {
            for (t = 0; t < dn.length; t++)
              if (null !== (r = (n = dn[t]).interleaved)) {
                n.interleaved = null;
                var o = r.next,
                  i = n.pending;
                if (null !== i) {
                  var a = i.next;
                  (i.next = o), (r.next = a);
                }
                n.pending = r;
              }
            dn = null;
          }
          return e;
        }
        function Fa(e, t) {
          for (;;) {
            var n = Yi;
            try {
              if ((an(), (Ar.current = ho), Er)) {
                for (var r = xr.memoizedState; null !== r; ) {
                  var o = r.queue;
                  null !== o && (o.pending = null), (r = r.next);
                }
                Er = !1;
              }
              if (
                ((Cr = 0),
                (_r = wr = xr = null),
                (Sr = !1),
                (Mr = 0),
                ($i.current = null),
                null === n || null === n.return)
              ) {
                (ea = 1), (ta = t), (Yi = null);
                break;
              }
              e: {
                var i = e,
                  s = n.return,
                  l = n,
                  c = t;
                if (
                  ((t = Xi),
                  (l.flags |= 32768),
                  null !== c &&
                    "object" === typeof c &&
                    "function" === typeof c.then)
                ) {
                  var u = c,
                    f = l,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var h = Mo(s);
                  if (null !== h) {
                    (h.flags &= -257),
                      Ro(h, s, l, 0, t),
                      1 & h.mode && So(i, u, t),
                      (c = u);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var g = new Set();
                      g.add(c), (t.updateQueue = g);
                    } else m.add(c);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    So(i, u, t), Oa();
                    break e;
                  }
                  c = Error(a(426));
                } else if (Jn && 1 & l.mode) {
                  var v = Mo(s);
                  if (null !== v) {
                    0 === (65536 & v.flags) && (v.flags |= 256),
                      Ro(v, s, l, 0, t),
                      er(c);
                    break e;
                  }
                }
                (i = c),
                  4 !== ea && (ea = 2),
                  null === ia ? (ia = [i]) : ia.push(i),
                  (c = yo(c, l)),
                  (l = s);
                do {
                  switch (l.tag) {
                    case 3:
                      (l.flags |= 65536),
                        (t &= -t),
                        (l.lanes |= t),
                        bn(l, _o(0, c, t));
                      break e;
                    case 1:
                      i = c;
                      var y = l.type,
                        b = l.stateNode;
                      if (
                        0 === (128 & l.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === pa || !pa.has(b))))
                      ) {
                        (l.flags |= 65536),
                          (t &= -t),
                          (l.lanes |= t),
                          bn(l, Eo(l, i, t));
                        break e;
                      }
                  }
                  l = l.return;
                } while (null !== l);
              }
              Na(n);
            } catch (A) {
              (t = A), Yi === n && null !== n && (Yi = n = n.return);
              continue;
            }
            break;
          }
        }
        function Da() {
          var e = Ki.current;
          return (Ki.current = ho), null === e ? ho : e;
        }
        function Oa() {
          (0 !== ea && 3 !== ea && 2 !== ea) || (ea = 4),
            null === Vi ||
              (0 === (268435455 & na) && 0 === (268435455 & ra)) ||
              Ra(Vi, Xi);
        }
        function La(e, t) {
          var n = Wi;
          Wi |= 2;
          var r = Da();
          for ((Vi === e && Xi === t) || Pa(e, t); ; )
            try {
              Ga();
              break;
            } catch (o) {
              Fa(e, o);
            }
          if ((an(), (Wi = n), (Ki.current = r), null !== Yi))
            throw Error(a(261));
          return (Vi = null), (Xi = 0), ea;
        }
        function Ga() {
          for (; null !== Yi; ) za(Yi);
        }
        function Ha() {
          for (; null !== Yi && !Ot(); ) za(Yi);
        }
        function za(e) {
          var t = ua(e.alternate, e, Zi);
          (e.memoizedProps = e.pendingProps),
            null === t ? Na(e) : (Yi = t),
            ($i.current = null);
        }
        function Na(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Do(n, t, Zi))) return void (Yi = n);
            } else {
              if (null !== (n = ai(n, t)))
                return (n.flags &= 32767), void (Yi = n);
              if (null === e) return (ea = 6), void (Yi = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Yi = t);
            Yi = t = e;
          } while (null !== t);
          0 === ea && (ea = 5);
        }
        function ja(e, t) {
          var n = Tt,
            r = Qi.transition;
          try {
            (Qi.transition = null),
              (Tt = 1),
              (function (e, t, n) {
                do {
                  Ua();
                } while (null !== ma);
                if (0 !== (6 & Wi)) throw Error(a(327));
                var r = e.finishedWork,
                  o = e.finishedLanes;
                if (null === r) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  r === e.current)
                )
                  throw Error(a(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = r.lanes | r.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var o = 31 - At(n),
                        i = 1 << o;
                      (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
                    }
                  })(e, i),
                  e === Vi && ((Yi = Vi = null), (Xi = 0)),
                  (0 === (2064 & r.subtreeFlags) && 0 === (2064 & r.flags)) ||
                    ha ||
                    ((ha = !0),
                    Ya(Nt, function () {
                      return Ua(), null;
                    })),
                  (i = 0 !== (15990 & r.flags)),
                  0 !== (15990 & r.subtreeFlags) || i)
                ) {
                  (i = Qi.transition), (Qi.transition = null);
                  var s = Tt;
                  Tt = 1;
                  var l = Wi;
                  (Wi |= 4),
                    ($i.current = null),
                    (function (e, t) {
                      for (O(e.containerInfo), ui = t; null !== ui; )
                        if (
                          ((t = (e = ui).child),
                          0 !== (1028 & e.subtreeFlags) && null !== t)
                        )
                          (t.return = e), (ui = t);
                        else
                          for (; null !== ui; ) {
                            e = ui;
                            try {
                              var n = e.alternate;
                              if (0 !== (1024 & e.flags))
                                switch (e.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                    break;
                                  case 1:
                                    if (null !== n) {
                                      var r = n.memoizedProps,
                                        o = n.memoizedState,
                                        i = e.stateNode,
                                        s = i.getSnapshotBeforeUpdate(
                                          e.elementType === e.type
                                            ? r
                                            : en(e.type, r),
                                          o
                                        );
                                      i.__reactInternalSnapshotBeforeUpdate = s;
                                    }
                                    break;
                                  case 3:
                                    W && _e(e.stateNode.containerInfo);
                                    break;
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  default:
                                    throw Error(a(163));
                                }
                            } catch (l) {
                              Ka(e, e.return, l);
                            }
                            if (null !== (t = e.sibling)) {
                              (t.return = e.return), (ui = t);
                              break;
                            }
                            ui = e.return;
                          }
                      (n = pi), (pi = !1);
                    })(e, r),
                    (function (e, t) {
                      for (ui = t; null !== ui; ) {
                        var n = (t = ui).deletions;
                        if (null !== n)
                          for (var r = 0; r < n.length; r++) {
                            var o = n[r];
                            try {
                              var i = e;
                              W ? _i(i, o, t) : yi(i, o, t);
                              var a = o.alternate;
                              null !== a && (a.return = null),
                                (o.return = null);
                            } catch (B) {
                              Ka(o, t, B);
                            }
                          }
                        if (
                          ((n = t.child),
                          0 !== (12854 & t.subtreeFlags) && null !== n)
                        )
                          (n.return = t), (ui = n);
                        else
                          for (; null !== ui; ) {
                            t = ui;
                            try {
                              var s = t.flags;
                              if ((32 & s && W && Ae(t.stateNode), 512 & s)) {
                                var l = t.alternate;
                                if (null !== l) {
                                  var c = l.ref;
                                  null !== c &&
                                    ("function" === typeof c
                                      ? c(null)
                                      : (c.current = null));
                                }
                              }
                              if (8192 & s)
                                switch (t.tag) {
                                  case 13:
                                    if (null !== t.memoizedState) {
                                      var u = t.alternate;
                                      (null !== u &&
                                        null !== u.memoizedState) ||
                                        (sa = Gt());
                                    }
                                    break;
                                  case 22:
                                    var f = null !== t.memoizedState,
                                      d = t.alternate,
                                      p =
                                        null !== d && null !== d.memoizedState;
                                    if (((n = t), W))
                                      e: if (((r = n), (o = f), (i = null), W))
                                        for (var h = r; ; ) {
                                          if (5 === h.tag) {
                                            if (null === i) {
                                              i = h;
                                              var m = h.stateNode;
                                              o
                                                ? Be(m)
                                                : xe(
                                                    h.stateNode,
                                                    h.memoizedProps
                                                  );
                                            }
                                          } else if (6 === h.tag) {
                                            if (null === i) {
                                              var g = h.stateNode;
                                              o
                                                ? Ce(g)
                                                : we(g, h.memoizedProps);
                                            }
                                          } else if (
                                            ((22 !== h.tag && 23 !== h.tag) ||
                                              null === h.memoizedState ||
                                              h === r) &&
                                            null !== h.child
                                          ) {
                                            (h.child.return = h), (h = h.child);
                                            continue;
                                          }
                                          if (h === r) break;
                                          for (; null === h.sibling; ) {
                                            if (
                                              null === h.return ||
                                              h.return === r
                                            )
                                              break e;
                                            i === h && (i = null),
                                              (h = h.return);
                                          }
                                          i === h && (i = null),
                                            (h.sibling.return = h.return),
                                            (h = h.sibling);
                                        }
                                    if (f && !p && 0 !== (1 & n.mode)) {
                                      ui = n;
                                      for (var v = n.child; null !== v; ) {
                                        for (n = ui = v; null !== ui; ) {
                                          var y = (r = ui).child;
                                          switch (r.tag) {
                                            case 0:
                                            case 11:
                                            case 14:
                                            case 15:
                                              hi(4, r, r.return);
                                              break;
                                            case 1:
                                              fi(r, r.return);
                                              var b = r.stateNode;
                                              if (
                                                "function" ===
                                                typeof b.componentWillUnmount
                                              ) {
                                                var A = r.return;
                                                try {
                                                  (b.props = r.memoizedProps),
                                                    (b.state = r.memoizedState),
                                                    b.componentWillUnmount();
                                                } catch (B) {
                                                  Ka(r, A, B);
                                                }
                                              }
                                              break;
                                            case 5:
                                              fi(r, r.return);
                                              break;
                                            case 22:
                                              if (null !== r.memoizedState) {
                                                ki(n);
                                                continue;
                                              }
                                          }
                                          null !== y
                                            ? ((y.return = r), (ui = y))
                                            : ki(n);
                                        }
                                        v = v.sibling;
                                      }
                                    }
                                }
                              switch (4102 & s) {
                                case 2:
                                  Ci(t), (t.flags &= -3);
                                  break;
                                case 6:
                                  Ci(t), (t.flags &= -3), Ei(t.alternate, t);
                                  break;
                                case 4096:
                                  t.flags &= -4097;
                                  break;
                                case 4100:
                                  (t.flags &= -4097), Ei(t.alternate, t);
                                  break;
                                case 4:
                                  Ei(t.alternate, t);
                              }
                            } catch (B) {
                              Ka(t, t.return, B);
                            }
                            if (null !== (n = t.sibling)) {
                              (n.return = t.return), (ui = n);
                              break;
                            }
                            ui = t.return;
                          }
                      }
                    })(e, r),
                    L(e.containerInfo),
                    (e.current = r),
                    Mi(r, e, o),
                    Lt(),
                    (Wi = l),
                    (Tt = s),
                    (Qi.transition = i);
                } else e.current = r;
                if (
                  (ha && ((ha = !1), (ma = e), (ga = o)),
                  0 === (i = e.pendingLanes) && (pa = null),
                  (function (e) {
                    if (Jt && "function" === typeof Jt.onCommitFiberRoot)
                      try {
                        Jt.onCommitFiberRoot(
                          Ut,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(r.stateNode),
                  _a(e, Gt()),
                  null !== t)
                )
                  for (n = e.onRecoverableError, r = 0; r < t.length; r++)
                    n(t[r]);
                if (fa) throw ((fa = !1), (e = da), (da = null), e);
                0 !== (1 & ga) && 0 !== e.tag && Ua(),
                  0 !== (1 & (i = e.pendingLanes))
                    ? e === ya
                      ? va++
                      : ((va = 0), (ya = e))
                    : (va = 0),
                  Yt();
              })(e, t, n);
          } finally {
            (Qi.transition = r), (Tt = n);
          }
          return null;
        }
        function Ua() {
          if (null !== ma) {
            var e = Pt(ga),
              t = Qi.transition,
              n = Tt;
            try {
              if (((Qi.transition = null), (Tt = 16 > e ? 16 : e), null === ma))
                var r = !1;
              else {
                if (((e = ma), (ma = null), (ga = 0), 0 !== (6 & Wi)))
                  throw Error(a(331));
                var o = Wi;
                for (Wi |= 4, ui = e.current; null !== ui; ) {
                  var i = ui,
                    s = i.child;
                  if (0 !== (16 & ui.flags)) {
                    var l = i.deletions;
                    if (null !== l) {
                      for (var c = 0; c < l.length; c++) {
                        var u = l[c];
                        for (ui = u; null !== ui; ) {
                          var f = ui;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              hi(8, f, i);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (ui = d);
                          else
                            for (; null !== ui; ) {
                              var p = (f = ui).sibling,
                                h = f.return;
                              if ((bi(f), f === u)) {
                                ui = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (ui = p);
                                break;
                              }
                              ui = h;
                            }
                        }
                      }
                      var m = i.alternate;
                      if (null !== m) {
                        var g = m.child;
                        if (null !== g) {
                          m.child = null;
                          do {
                            var v = g.sibling;
                            (g.sibling = null), (g = v);
                          } while (null !== g);
                        }
                      }
                      ui = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== s)
                    (s.return = i), (ui = s);
                  else
                    e: for (; null !== ui; ) {
                      if (0 !== (2048 & (i = ui).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            hi(9, i, i.return);
                        }
                      var y = i.sibling;
                      if (null !== y) {
                        (y.return = i.return), (ui = y);
                        break e;
                      }
                      ui = i.return;
                    }
                }
                var b = e.current;
                for (ui = b; null !== ui; ) {
                  var A = (s = ui).child;
                  if (0 !== (2064 & s.subtreeFlags) && null !== A)
                    (A.return = s), (ui = A);
                  else
                    e: for (s = b; null !== ui; ) {
                      if (0 !== (2048 & (l = ui).flags))
                        try {
                          switch (l.tag) {
                            case 0:
                            case 11:
                            case 15:
                              mi(9, l);
                          }
                        } catch (C) {
                          Ka(l, l.return, C);
                        }
                      if (l === s) {
                        ui = null;
                        break e;
                      }
                      var B = l.sibling;
                      if (null !== B) {
                        (B.return = l.return), (ui = B);
                        break e;
                      }
                      ui = l.return;
                    }
                }
                if (
                  ((Wi = o),
                  Yt(),
                  Jt && "function" === typeof Jt.onPostCommitFiberRoot)
                )
                  try {
                    Jt.onPostCommitFiberRoot(Ut, e);
                  } catch (C) {}
                r = !0;
              }
              return r;
            } finally {
              (Tt = n), (Qi.transition = t);
            }
          }
          return !1;
        }
        function Ja(e, t, n) {
          vn(e, (t = _o(0, (t = yo(n, t)), 1))),
            (t = Ba()),
            null !== (e = wa(e, 1)) && (It(e, 1, t), _a(e, t));
        }
        function Ka(e, t, n) {
          if (3 === e.tag) Ja(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Ja(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === pa || !pa.has(r)))
                ) {
                  vn(t, (e = Eo(t, (e = yo(n, e)), 1))),
                    (e = Ba()),
                    null !== (t = wa(t, 1)) && (It(t, 1, e), _a(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function $a(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = Ba()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Vi === e &&
              (Xi & n) === n &&
              (4 === ea ||
              (3 === ea && (130023424 & Xi) === Xi && 500 > Gt() - sa)
                ? Pa(e, 0)
                : (oa |= n)),
            _a(e, t);
        }
        function Qa(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = wt), 0 === (130023424 & (wt <<= 1)) && (wt = 4194304)));
          var n = Ba();
          null !== (e = wa(e, t)) && (It(e, t, n), _a(e, n));
        }
        function Wa(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Qa(e, n);
        }
        function Va(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                o = e.memoizedState;
              null !== o && (n = o.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(a(314));
          }
          null !== r && r.delete(t), Qa(e, n);
        }
        function Ya(e, t) {
          return Ft(e, t);
        }
        function Xa(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Za(e, t, n, r) {
          return new Xa(e, t, n, r);
        }
        function qa(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function es(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Za(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function ts(e, t, n, r, o, i) {
          var s = 2;
          if (((r = e), "function" === typeof e)) qa(e) && (s = 1);
          else if ("string" === typeof e) s = 5;
          else
            e: switch (e) {
              case u:
                return ns(n.children, o, i, t);
              case f:
                (s = 8), (o |= 8);
                break;
              case d:
                return (
                  ((e = Za(12, n, t, 2 | o)).elementType = d), (e.lanes = i), e
                );
              case g:
                return (
                  ((e = Za(13, n, t, o)).elementType = g), (e.lanes = i), e
                );
              case v:
                return (
                  ((e = Za(19, n, t, o)).elementType = v), (e.lanes = i), e
                );
              case A:
                return rs(n, o, i, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case p:
                      s = 10;
                      break e;
                    case h:
                      s = 9;
                      break e;
                    case m:
                      s = 11;
                      break e;
                    case y:
                      s = 14;
                      break e;
                    case b:
                      (s = 16), (r = null);
                      break e;
                  }
                throw Error(a(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Za(s, n, t, o)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          );
        }
        function ns(e, t, n, r) {
          return ((e = Za(7, e, r, t)).lanes = n), e;
        }
        function rs(e, t, n, r) {
          return (
            ((e = Za(22, e, r, t)).elementType = A),
            (e.lanes = n),
            (e.stateNode = {}),
            e
          );
        }
        function os(e, t, n) {
          return ((e = Za(6, e, null, t)).lanes = n), e;
        }
        function is(e, t, n) {
          return (
            ((t = Za(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function as(e, t, n, r, o) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = $),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = Rt(0)),
            (this.expirationTimes = Rt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = Rt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = o),
            Y && (this.mutableSourceEagerHydrationData = null);
        }
        function ss(e, t, n, r, o, i, a, s, l) {
          return (
            (e = new as(e, t, n, s, l)),
            1 === t ? ((t = 1), !0 === i && (t |= 8)) : (t = 0),
            (i = Za(3, null, null, t)),
            (e.current = i),
            (i.stateNode = e),
            (i.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
            }),
            hn(i),
            e
          );
        }
        function ls(e) {
          if (!e) return ct;
          e: {
            if (_((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(a(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (ht(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(a(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (ht(n)) return vt(e, n, t);
          }
          return t;
        }
        function cs(e) {
          var t = e._reactInternals;
          if (void 0 === t) {
            if ("function" === typeof e.render) throw Error(a(188));
            throw ((e = Object.keys(e).join(",")), Error(a(268, e)));
          }
          return null === (e = M(t)) ? null : e.stateNode;
        }
        function us(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function fs(e, t) {
          us(e, t), (e = e.alternate) && us(e, t);
        }
        function ds(e) {
          return null === (e = M(e)) ? null : e.stateNode;
        }
        function ps() {
          return null;
        }
        return (
          (ua = function (e, t, n) {
            if (null !== e)
              if (e.memoizedProps !== t.pendingProps || ft.current) Lo = !0;
              else {
                if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                  return (
                    (Lo = !1),
                    (function (e, t, n) {
                      switch (t.tag) {
                        case 3:
                          Qo(t), qn();
                          break;
                        case 5:
                          hr(t);
                          break;
                        case 1:
                          ht(t.type) && yt(t);
                          break;
                        case 4:
                          dr(t, t.stateNode.containerInfo);
                          break;
                        case 10:
                          sn(0, t.type._context, t.memoizedProps.value);
                          break;
                        case 13:
                          var r = t.memoizedState;
                          if (null !== r)
                            return null !== r.dehydrated
                              ? (lt(gr, 1 & gr.current), (t.flags |= 128), null)
                              : 0 !== (n & t.child.childLanes)
                              ? Xo(e, t, n)
                              : (lt(gr, 1 & gr.current),
                                null !== (e = ii(e, t, n)) ? e.sibling : null);
                          lt(gr, 1 & gr.current);
                          break;
                        case 19:
                          if (
                            ((r = 0 !== (n & t.childLanes)),
                            0 !== (128 & e.flags))
                          ) {
                            if (r) return oi(e, t, n);
                            t.flags |= 128;
                          }
                          var o = t.memoizedState;
                          if (
                            (null !== o &&
                              ((o.rendering = null),
                              (o.tail = null),
                              (o.lastEffect = null)),
                            lt(gr, gr.current),
                            r)
                          )
                            break;
                          return null;
                        case 22:
                        case 23:
                          return (t.lanes = 0), jo(e, t, n);
                      }
                      return ii(e, t, n);
                    })(e, t, n)
                  );
                Lo = 0 !== (131072 & e.flags);
              }
            else
              (Lo = !1), Jn && 0 !== (1048576 & t.flags) && Hn(t, Tn, t.index);
            switch (((t.lanes = 0), t.tag)) {
              case 2:
                var r = t.type;
                null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                  (e = t.pendingProps);
                var o = pt(t, ut.current);
                un(t, n), (o = Tr(null, t, r, e, o, n));
                var i = Pr();
                return (
                  (t.flags |= 1),
                  "object" === typeof o &&
                  null !== o &&
                  "function" === typeof o.render &&
                  void 0 === o.$$typeof
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      ht(r) ? ((i = !0), yt(t)) : (i = !1),
                      (t.memoizedState =
                        null !== o.state && void 0 !== o.state
                          ? o.state
                          : null),
                      hn(t),
                      (o.updater = wn),
                      (t.stateNode = o),
                      (o._reactInternals = t),
                      Mn(t, r, e, n),
                      (t = $o(null, t, r, !0, i, n)))
                    : ((t.tag = 0),
                      Jn && i && zn(t),
                      Go(null, t, o, n),
                      (t = t.child)),
                  t
                );
              case 16:
                r = t.elementType;
                e: {
                  switch (
                    (null !== e &&
                      ((e.alternate = null),
                      (t.alternate = null),
                      (t.flags |= 2)),
                    (e = t.pendingProps),
                    (r = (o = r._init)(r._payload)),
                    (t.type = r),
                    (o = t.tag =
                      (function (e) {
                        if ("function" === typeof e) return qa(e) ? 1 : 0;
                        if (void 0 !== e && null !== e) {
                          if ((e = e.$$typeof) === m) return 11;
                          if (e === y) return 14;
                        }
                        return 2;
                      })(r)),
                    (e = en(r, e)),
                    o)
                  ) {
                    case 0:
                      t = Jo(null, t, r, e, n);
                      break e;
                    case 1:
                      t = Ko(null, t, r, e, n);
                      break e;
                    case 11:
                      t = Ho(null, t, r, e, n);
                      break e;
                    case 14:
                      t = zo(null, t, r, en(r.type, e), n);
                      break e;
                  }
                  throw Error(a(306, r, ""));
                }
                return t;
              case 0:
                return (
                  (r = t.type),
                  (o = t.pendingProps),
                  Jo(e, t, r, (o = t.elementType === r ? o : en(r, o)), n)
                );
              case 1:
                return (
                  (r = t.type),
                  (o = t.pendingProps),
                  Ko(e, t, r, (o = t.elementType === r ? o : en(r, o)), n)
                );
              case 3:
                e: {
                  if ((Qo(t), null === e)) throw Error(a(387));
                  (r = t.pendingProps),
                    (o = (i = t.memoizedState).element),
                    mn(e, t),
                    An(t, r, null, n);
                  var s = t.memoizedState;
                  if (((r = s.element), Y && i.isDehydrated)) {
                    if (
                      ((i = {
                        element: r,
                        isDehydrated: !1,
                        cache: s.cache,
                        transitions: s.transitions,
                      }),
                      (t.updateQueue.baseState = i),
                      (t.memoizedState = i),
                      256 & t.flags)
                    ) {
                      t = Wo(e, t, r, n, (o = Error(a(423))));
                      break e;
                    }
                    if (r !== o) {
                      t = Wo(e, t, r, n, (o = Error(a(424))));
                      break e;
                    }
                    for (
                      Y &&
                        ((Un = Ne(t.stateNode.containerInfo)),
                        (jn = t),
                        (Jn = !0),
                        ($n = null),
                        (Kn = !1)),
                        n = ar(t, null, r, n),
                        t.child = n;
                      n;

                    )
                      (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                  } else {
                    if ((qn(), r === o)) {
                      t = ii(e, t, n);
                      break e;
                    }
                    Go(e, t, r, n);
                  }
                  t = t.child;
                }
                return t;
              case 5:
                return (
                  hr(t),
                  null === e && Yn(t),
                  (r = t.type),
                  (o = t.pendingProps),
                  (i = null !== e ? e.memoizedProps : null),
                  (s = o.children),
                  j(r, o)
                    ? (s = null)
                    : null !== i && j(r, i) && (t.flags |= 32),
                  Uo(e, t),
                  Go(e, t, s, n),
                  t.child
                );
              case 6:
                return null === e && Yn(t), null;
              case 13:
                return Xo(e, t, n);
              case 4:
                return (
                  dr(t, t.stateNode.containerInfo),
                  (r = t.pendingProps),
                  null === e ? (t.child = ir(t, null, r, n)) : Go(e, t, r, n),
                  t.child
                );
              case 11:
                return (
                  (r = t.type),
                  (o = t.pendingProps),
                  Ho(e, t, r, (o = t.elementType === r ? o : en(r, o)), n)
                );
              case 7:
                return Go(e, t, t.pendingProps, n), t.child;
              case 8:
              case 12:
                return Go(e, t, t.pendingProps.children, n), t.child;
              case 10:
                e: {
                  if (
                    ((r = t.type._context),
                    (o = t.pendingProps),
                    (i = t.memoizedProps),
                    sn(0, r, (s = o.value)),
                    null !== i)
                  )
                    if (Kt(i.value, s)) {
                      if (i.children === o.children && !ft.current) {
                        t = ii(e, t, n);
                        break e;
                      }
                    } else
                      for (
                        null !== (i = t.child) && (i.return = t);
                        null !== i;

                      ) {
                        var l = i.dependencies;
                        if (null !== l) {
                          s = i.child;
                          for (var c = l.firstContext; null !== c; ) {
                            if (c.context === r) {
                              if (1 === i.tag) {
                                (c = gn(-1, n & -n)).tag = 2;
                                var u = i.updateQueue;
                                if (null !== u) {
                                  var f = (u = u.shared).pending;
                                  null === f
                                    ? (c.next = c)
                                    : ((c.next = f.next), (f.next = c)),
                                    (u.pending = c);
                                }
                              }
                              (i.lanes |= n),
                                null !== (c = i.alternate) && (c.lanes |= n),
                                cn(i.return, n, t),
                                (l.lanes |= n);
                              break;
                            }
                            c = c.next;
                          }
                        } else if (10 === i.tag)
                          s = i.type === t.type ? null : i.child;
                        else if (18 === i.tag) {
                          if (null === (s = i.return)) throw Error(a(341));
                          (s.lanes |= n),
                            null !== (l = s.alternate) && (l.lanes |= n),
                            cn(s, n, t),
                            (s = i.sibling);
                        } else s = i.child;
                        if (null !== s) s.return = i;
                        else
                          for (s = i; null !== s; ) {
                            if (s === t) {
                              s = null;
                              break;
                            }
                            if (null !== (i = s.sibling)) {
                              (i.return = s.return), (s = i);
                              break;
                            }
                            s = s.return;
                          }
                        i = s;
                      }
                  Go(e, t, o.children, n), (t = t.child);
                }
                return t;
              case 9:
                return (
                  (o = t.type),
                  (r = t.pendingProps.children),
                  un(t, n),
                  (r = r((o = fn(o)))),
                  (t.flags |= 1),
                  Go(e, t, r, n),
                  t.child
                );
              case 14:
                return (
                  (o = en((r = t.type), t.pendingProps)),
                  zo(e, t, r, (o = en(r.type, o)), n)
                );
              case 15:
                return No(e, t, t.type, t.pendingProps, n);
              case 17:
                return (
                  (r = t.type),
                  (o = t.pendingProps),
                  (o = t.elementType === r ? o : en(r, o)),
                  null !== e &&
                    ((e.alternate = null),
                    (t.alternate = null),
                    (t.flags |= 2)),
                  (t.tag = 1),
                  ht(r) ? ((e = !0), yt(t)) : (e = !1),
                  un(t, n),
                  En(t, r, o),
                  Mn(t, r, o, n),
                  $o(null, t, r, !0, e, n)
                );
              case 19:
                return oi(e, t, n);
              case 22:
                return jo(e, t, n);
            }
            throw Error(a(156, t.tag));
          }),
          (t.attemptContinuousHydration = function (e) {
            13 === e.tag && (xa(e, 134217728, Ba()), fs(e, 134217728));
          }),
          (t.attemptHydrationAtCurrentPriority = function (e) {
            if (13 === e.tag) {
              var t = Ba(),
                n = Ca(e);
              xa(e, n, t), fs(e, n);
            }
          }),
          (t.attemptSynchronousHydration = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = _t(t.pendingLanes);
                  0 !== n &&
                    (kt(t, 1 | n), _a(t, Gt()), 0 === (6 & Wi) && (ca(), Yt()));
                }
                break;
              case 13:
                var r = Ba();
                ka(function () {
                  return xa(e, 1, r);
                }),
                  fs(e, 1);
            }
          }),
          (t.batchedUpdates = function (e, t) {
            var n = Wi;
            Wi |= 1;
            try {
              return e(t);
            } finally {
              0 === (Wi = n) && (ca(), Qt && Yt());
            }
          }),
          (t.createComponentSelector = function (e) {
            return { $$typeof: Pi, value: e };
          }),
          (t.createContainer = function (e, t, n, r, o, i, a) {
            return ss(e, t, !1, null, 0, r, 0, i, a);
          }),
          (t.createHasPseudoClassSelector = function (e) {
            return { $$typeof: Fi, value: e };
          }),
          (t.createHydrationContainer = function (e, t, n, r, o, i, a, s, l) {
            return (
              ((e = ss(n, r, !0, e, 0, i, 0, s, l)).context = ls(null)),
              (n = e.current),
              ((i = gn((r = Ba()), (o = Ca(n)))).callback =
                void 0 !== t && null !== t ? t : null),
              vn(n, i),
              (e.current.lanes = o),
              It(e, o, r),
              _a(e, r),
              e
            );
          }),
          (t.createPortal = function (e, t, n) {
            var r =
              3 < arguments.length && void 0 !== arguments[3]
                ? arguments[3]
                : null;
            return {
              $$typeof: c,
              key: null == r ? null : "" + r,
              children: e,
              containerInfo: t,
              implementation: n,
            };
          }),
          (t.createRoleSelector = function (e) {
            return { $$typeof: Di, value: e };
          }),
          (t.createTestNameSelector = function (e) {
            return { $$typeof: Oi, value: e };
          }),
          (t.createTextSelector = function (e) {
            return { $$typeof: Li, value: e };
          }),
          (t.deferredUpdates = function (e) {
            var t = Tt,
              n = Qi.transition;
            try {
              return (Qi.transition = null), (Tt = 16), e();
            } finally {
              (Tt = t), (Qi.transition = n);
            }
          }),
          (t.discreteUpdates = function (e, t, n, r, o) {
            var i = Tt,
              a = Qi.transition;
            try {
              return (Qi.transition = null), (Tt = 1), e(t, n, r, o);
            } finally {
              (Tt = i), (Qi.transition = a), 0 === Wi && ca();
            }
          }),
          (t.findAllNodes = Ui),
          (t.findBoundingRects = function (e, t) {
            if (!re) throw Error(a(363));
            (t = Ui(e, t)), (e = []);
            for (var n = 0; n < t.length; n++) e.push(ie(t[n]));
            for (t = e.length - 1; 0 < t; t--)
              for (
                var r = (n = e[t]).x,
                  o = r + n.width,
                  i = n.y,
                  s = i + n.height,
                  l = t - 1;
                0 <= l;
                l--
              )
                if (t !== l) {
                  var c = e[l],
                    u = c.x,
                    f = u + c.width,
                    d = c.y,
                    p = d + c.height;
                  if (r >= u && i >= d && o <= f && s <= p) {
                    e.splice(t, 1);
                    break;
                  }
                  if (!(r !== u || n.width !== c.width || p < i || d > s)) {
                    d > i && ((c.height += d - i), (c.y = i)),
                      p < s && (c.height = s - d),
                      e.splice(t, 1);
                    break;
                  }
                  if (!(i !== d || n.height !== c.height || f < r || u > o)) {
                    u > r && ((c.width += u - r), (c.x = r)),
                      f < o && (c.width = o - u),
                      e.splice(t, 1);
                    break;
                  }
                }
            return e;
          }),
          (t.findHostInstance = cs),
          (t.findHostInstanceWithNoPortals = function (e) {
            return null === (e = null !== (e = S(e)) ? I(e) : null)
              ? null
              : e.stateNode;
          }),
          (t.findHostInstanceWithWarning = function (e) {
            return cs(e);
          }),
          (t.flushControlled = function (e) {
            var t = Wi;
            Wi |= 1;
            var n = Qi.transition,
              r = Tt;
            try {
              (Qi.transition = null), (Tt = 1), e();
            } finally {
              (Tt = r), (Qi.transition = n), 0 === (Wi = t) && (ca(), Yt());
            }
          }),
          (t.flushPassiveEffects = Ua),
          (t.flushSync = ka),
          (t.focusWithin = function (e, t) {
            if (!re) throw Error(a(363));
            for (
              t = ji((e = Hi(e)), t), t = Array.from(t), e = 0;
              e < t.length;

            ) {
              var n = t[e++];
              if (!se(n)) {
                if (5 === n.tag && ce(n.stateNode)) return !0;
                for (n = n.child; null !== n; ) t.push(n), (n = n.sibling);
              }
            }
            return !1;
          }),
          (t.getCurrentUpdatePriority = function () {
            return Tt;
          }),
          (t.getFindAllNodesFailureDescription = function (e, t) {
            if (!re) throw Error(a(363));
            var n = 0,
              r = [];
            e = [Hi(e), 0];
            for (var o = 0; o < e.length; ) {
              var i = e[o++],
                s = e[o++],
                l = t[s];
              if (
                (5 !== i.tag || !se(i)) &&
                (zi(i, l) && (r.push(Ni(l)), ++s > n && (n = s)), s < t.length)
              )
                for (i = i.child; null !== i; ) e.push(i, s), (i = i.sibling);
            }
            if (n < t.length) {
              for (e = []; n < t.length; n++) e.push(Ni(t[n]));
              return (
                "findAllNodes was able to match part of the selector:\n  " +
                r.join(" > ") +
                "\n\nNo matching component was found for:\n  " +
                e.join(" > ")
              );
            }
            return null;
          }),
          (t.getPublicRootInstance = function (e) {
            if (!(e = e.current).child) return null;
            switch (e.child.tag) {
              case 5:
                return P(e.child.stateNode);
              default:
                return e.child.stateNode;
            }
          }),
          (t.injectIntoDevTools = function (e) {
            if (
              ((e = {
                bundleType: e.bundleType,
                version: e.version,
                rendererPackageName: e.rendererPackageName,
                rendererConfig: e.rendererConfig,
                overrideHookState: null,
                overrideHookStateDeletePath: null,
                overrideHookStateRenamePath: null,
                overrideProps: null,
                overridePropsDeletePath: null,
                overridePropsRenamePath: null,
                setErrorHandler: null,
                setSuspenseHandler: null,
                scheduleUpdate: null,
                currentDispatcherRef: s.ReactCurrentDispatcher,
                findHostInstanceByFiber: ds,
                findFiberByHostInstance: e.findFiberByHostInstance || ps,
                findHostInstancesForRefresh: null,
                scheduleRefresh: null,
                scheduleRoot: null,
                setRefreshHandler: null,
                getCurrentFiber: null,
                reconcilerVersion: "18.0.0-fc46dba67-20220329",
              }),
              "undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)
            )
              e = !1;
            else {
              var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
              if (t.isDisabled || !t.supportsFiber) e = !0;
              else {
                try {
                  (Ut = t.inject(e)), (Jt = t);
                } catch (n) {}
                e = !!t.checkDCE;
              }
            }
            return e;
          }),
          (t.isAlreadyRendering = function () {
            return !1;
          }),
          (t.observeVisibleRects = function (e, t, n, r) {
            if (!re) throw Error(a(363));
            e = Ui(e, t);
            var o = ue(e, n, r).disconnect;
            return {
              disconnect: function () {
                o();
              },
            };
          }),
          (t.registerMutableSourceForHydration = function (e, t) {
            var n = t._getVersion;
            (n = n(t._source)),
              null == e.mutableSourceEagerHydrationData
                ? (e.mutableSourceEagerHydrationData = [t, n])
                : e.mutableSourceEagerHydrationData.push(t, n);
          }),
          (t.runWithPriority = function (e, t) {
            var n = Tt;
            try {
              return (Tt = e), t();
            } finally {
              Tt = n;
            }
          }),
          (t.shouldError = function () {
            return null;
          }),
          (t.shouldSuspend = function () {
            return !1;
          }),
          (t.updateContainer = function (e, t, n, r) {
            var o = t.current,
              i = Ba(),
              a = Ca(o);
            return (
              (n = ls(n)),
              null === t.context ? (t.context = n) : (t.pendingContext = n),
              ((t = gn(i, a)).payload = { element: e }),
              null !== (r = void 0 === r ? null : r) && (t.callback = r),
              vn(o, t),
              null !== (e = xa(o, a, i)) && yn(e, o, a),
              a
            );
          }),
          t
        );
      };
    },
    32576: function (e, t, n) {
      "use strict";
      e.exports = n(46511);
    },
    76525: function (e, t, n) {
      "use strict";
      e.exports = n(67287);
    },
    60053: function (e, t) {
      "use strict";
      function n(e, t) {
        var n = e.length;
        e.push(t);
        e: for (; 0 < n; ) {
          var r = (n - 1) >>> 1,
            o = e[r];
          if (!(0 < i(o, t))) break e;
          (e[r] = t), (e[n] = o), (n = r);
        }
      }
      function r(e) {
        return 0 === e.length ? null : e[0];
      }
      function o(e) {
        if (0 === e.length) return null;
        var t = e[0],
          n = e.pop();
        if (n !== t) {
          e[0] = n;
          e: for (var r = 0, o = e.length, a = o >>> 1; r < a; ) {
            var s = 2 * (r + 1) - 1,
              l = e[s],
              c = s + 1,
              u = e[c];
            if (0 > i(l, n))
              c < o && 0 > i(u, l)
                ? ((e[r] = u), (e[c] = n), (r = c))
                : ((e[r] = l), (e[s] = n), (r = s));
            else {
              if (!(c < o && 0 > i(u, n))) break e;
              (e[r] = u), (e[c] = n), (r = c);
            }
          }
        }
        return t;
      }
      function i(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return 0 !== n ? n : e.id - t.id;
      }
      if (
        "object" === typeof performance &&
        "function" === typeof performance.now
      ) {
        var a = performance;
        t.unstable_now = function () {
          return a.now();
        };
      } else {
        var s = Date,
          l = s.now();
        t.unstable_now = function () {
          return s.now() - l;
        };
      }
      var c = [],
        u = [],
        f = 1,
        d = null,
        p = 3,
        h = !1,
        m = !1,
        g = !1,
        v = "function" === typeof setTimeout ? setTimeout : null,
        y = "function" === typeof clearTimeout ? clearTimeout : null,
        b = "undefined" !== typeof setImmediate ? setImmediate : null;
      function A(e) {
        for (var t = r(u); null !== t; ) {
          if (null === t.callback) o(u);
          else {
            if (!(t.startTime <= e)) break;
            o(u), (t.sortIndex = t.expirationTime), n(c, t);
          }
          t = r(u);
        }
      }
      function B(e) {
        if (((g = !1), A(e), !m))
          if (null !== r(c)) (m = !0), P(C);
          else {
            var t = r(u);
            null !== t && F(B, t.startTime - e);
          }
      }
      function C(e, n) {
        (m = !1), g && ((g = !1), y(E), (E = -1)), (h = !0);
        var i = p;
        try {
          for (
            A(n), d = r(c);
            null !== d && (!(d.expirationTime > n) || (e && !R()));

          ) {
            var a = d.callback;
            if ("function" === typeof a) {
              (d.callback = null), (p = d.priorityLevel);
              var s = a(d.expirationTime <= n);
              (n = t.unstable_now()),
                "function" === typeof s ? (d.callback = s) : d === r(c) && o(c),
                A(n);
            } else o(c);
            d = r(c);
          }
          if (null !== d) var l = !0;
          else {
            var f = r(u);
            null !== f && F(B, f.startTime - n), (l = !1);
          }
          return l;
        } finally {
          (d = null), (p = i), (h = !1);
        }
      }
      "undefined" !== typeof navigator &&
        void 0 !== navigator.scheduling &&
        void 0 !== navigator.scheduling.isInputPending &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
      var x,
        w = !1,
        _ = null,
        E = -1,
        S = 5,
        M = -1;
      function R() {
        return !(t.unstable_now() - M < S);
      }
      function I() {
        if (null !== _) {
          var e = t.unstable_now();
          M = e;
          var n = !0;
          try {
            n = _(!0, e);
          } finally {
            n ? x() : ((w = !1), (_ = null));
          }
        } else w = !1;
      }
      if ("function" === typeof b)
        x = function () {
          b(I);
        };
      else if ("undefined" !== typeof MessageChannel) {
        var k = new MessageChannel(),
          T = k.port2;
        (k.port1.onmessage = I),
          (x = function () {
            T.postMessage(null);
          });
      } else
        x = function () {
          v(I, 0);
        };
      function P(e) {
        (_ = e), w || ((w = !0), x());
      }
      function F(e, n) {
        E = v(function () {
          e(t.unstable_now());
        }, n);
      }
      (t.unstable_IdlePriority = 5),
        (t.unstable_ImmediatePriority = 1),
        (t.unstable_LowPriority = 4),
        (t.unstable_NormalPriority = 3),
        (t.unstable_Profiling = null),
        (t.unstable_UserBlockingPriority = 2),
        (t.unstable_cancelCallback = function (e) {
          e.callback = null;
        }),
        (t.unstable_continueExecution = function () {
          m || h || ((m = !0), P(C));
        }),
        (t.unstable_forceFrameRate = function (e) {
          0 > e || 125 < e
            ? console.error(
                "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
              )
            : (S = 0 < e ? Math.floor(1e3 / e) : 5);
        }),
        (t.unstable_getCurrentPriorityLevel = function () {
          return p;
        }),
        (t.unstable_getFirstCallbackNode = function () {
          return r(c);
        }),
        (t.unstable_next = function (e) {
          switch (p) {
            case 1:
            case 2:
            case 3:
              var t = 3;
              break;
            default:
              t = p;
          }
          var n = p;
          p = t;
          try {
            return e();
          } finally {
            p = n;
          }
        }),
        (t.unstable_pauseExecution = function () {}),
        (t.unstable_requestPaint = function () {}),
        (t.unstable_runWithPriority = function (e, t) {
          switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              e = 3;
          }
          var n = p;
          p = e;
          try {
            return t();
          } finally {
            p = n;
          }
        }),
        (t.unstable_scheduleCallback = function (e, o, i) {
          var a = t.unstable_now();
          switch (
            ("object" === typeof i && null !== i
              ? (i = "number" === typeof (i = i.delay) && 0 < i ? a + i : a)
              : (i = a),
            e)
          ) {
            case 1:
              var s = -1;
              break;
            case 2:
              s = 250;
              break;
            case 5:
              s = 1073741823;
              break;
            case 4:
              s = 1e4;
              break;
            default:
              s = 5e3;
          }
          return (
            (e = {
              id: f++,
              callback: o,
              priorityLevel: e,
              startTime: i,
              expirationTime: (s = i + s),
              sortIndex: -1,
            }),
            i > a
              ? ((e.sortIndex = i),
                n(u, e),
                null === r(c) &&
                  e === r(u) &&
                  (g ? (y(E), (E = -1)) : (g = !0), F(B, i - a)))
              : ((e.sortIndex = s), n(c, e), m || h || ((m = !0), P(C))),
            e
          );
        }),
        (t.unstable_shouldYield = R),
        (t.unstable_wrapCallback = function (e) {
          var t = p;
          return function () {
            var n = p;
            p = t;
            try {
              return e.apply(this, arguments);
            } finally {
              p = n;
            }
          };
        });
    },
    63840: function (e, t, n) {
      "use strict";
      e.exports = n(60053);
    },
    41086: function (e, t, n) {
      "use strict";
      var r = n(7853),
        o = n(36919),
        i = n(55299),
        a = n(84642);
      function s(e) {
        return "__proto__" !== e && "constructor" !== e && "prototype" !== e;
      }
      e.exports = function (e, t, n) {
        if (!a(e)) return e;
        if (
          (Array.isArray(t) && (t = [].concat.apply([], t).join(".")),
          "string" !== typeof t)
        )
          return e;
        for (
          var l = r(t, { sep: ".", brackets: !0 }).filter(s),
            c = l.length,
            u = -1,
            f = e;
          ++u < c;

        ) {
          var d = l[u];
          u === c - 1
            ? i(f[d]) && i(n)
              ? (f[d] = o({}, f[d], n))
              : (f[d] = n)
            : (a(f[d]) || (f[d] = {}), (f = f[d]));
        }
        return e;
      };
    },
    84642: function (e) {
      "use strict";
      e.exports = function (e) {
        return (
          "undefined" !== typeof e &&
          null !== e &&
          ("object" === typeof e || "function" === typeof e)
        );
      };
    },
    7853: function (e, t, n) {
      "use strict";
      var r = n(98071);
      function o(e, t, n, r) {
        var i = e.indexOf(t, n);
        return "\\" === e.charAt(i - 1) ? o(e, t, i + 1) : i;
      }
      function i(e, t) {
        return (
          (!0 === t.keepDoubleQuotes && '"' === e) ||
          (!0 === t.keepSingleQuotes && "'" === e) ||
          t.keepQuotes
        );
      }
      function a(e, t, n) {
        return "function" === typeof e.keepEscaping
          ? e.keepEscaping(t, n)
          : !0 === e.keepEscaping || "\\" === t[n + 1];
      }
      e.exports = function (e, t, n) {
        if ("string" !== typeof e) throw new TypeError("expected a string");
        "function" === typeof t && ((n = t), (t = null)),
          "string" === typeof t && (t = { sep: t });
        var s,
          l = r({ sep: "." }, t),
          c = l.quotes || ['"', "'", "`"];
        !0 === l.brackets
          ? (s = { "<": ">", "(": ")", "[": "]", "{": "}" })
          : l.brackets && (s = l.brackets);
        var u,
          f = [],
          d = [],
          p = [""],
          h = l.sep,
          m = e.length,
          g = -1;
        function v() {
          if (s && d.length) return s[d[d.length - 1]];
        }
        for (; ++g < m; ) {
          var y = e[g],
            b = e[g + 1],
            A = { val: y, idx: g, arr: p, str: e };
          if ((f.push(A), "\\" !== y)) {
            if (s && s[y]) {
              d.push(y);
              var B = v(),
                C = g + 1;
              if (-1 !== e.indexOf(B, C + 1))
                for (; d.length && C < m; ) {
                  var x = e[++C];
                  if ("\\" !== x)
                    if (-1 === c.indexOf(x)) {
                      if (((B = v()), d.length && -1 === e.indexOf(B, C + 1)))
                        break;
                      s[x] ? d.push(x) : B === x && d.pop();
                    } else C = o(e, x, C + 1);
                  else x++;
                }
              if (-1 === (u = C)) {
                p[p.length - 1] += y;
                continue;
              }
              (y = e.slice(g, u + 1)), (A.val = y), (A.idx = g = u);
            }
            if (-1 !== c.indexOf(y)) {
              if (-1 === (u = o(e, y, g + 1))) {
                p[p.length - 1] += y;
                continue;
              }
              (y = !0 === i(y, l) ? e.slice(g, u + 1) : e.slice(g + 1, u)),
                (A.val = y),
                (A.idx = g = u);
            }
            "function" === typeof n && (n(A, f), (y = A.val), (g = A.idx)),
              A.val !== h || !1 === A.split
                ? (p[p.length - 1] += A.val)
                : p.push("");
          } else
            (A.val = !0 === a(l, e, g) ? y + b : b),
              (A.escaped = !0),
              "function" === typeof n && n(A),
              (p[p.length - 1] += A.val),
              g++;
        }
        return p;
      };
    },
    98071: function (e, t, n) {
      "use strict";
      var r = n(51833),
        o = n(1052);
      function i(e, t) {
        for (var n in t) c(t, n) && (e[n] = t[n]);
      }
      function a(e) {
        return e && "string" === typeof e;
      }
      function s(e) {
        var t = {};
        for (var n in e) t[n] = e[n];
        return t;
      }
      function l(e) {
        return (e && "object" === typeof e) || r(e);
      }
      function c(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      e.exports =
        Object.assign ||
        function (e) {
          if (null === e || "undefined" === typeof e)
            throw new TypeError("Cannot convert undefined or null to object");
          l(e) || (e = {});
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            a(n) && (n = s(n)), l(n) && (i(e, n), o(e, n));
          }
          return e;
        };
    },
    35714: function (e) {
      e.exports = (function e(t, n, r) {
        function o(a, s) {
          if (!n[a]) {
            if (!t[a]) {
              if (i) return i(a, !0);
              throw new Error("Cannot find module '" + a + "'");
            }
            (s = n[a] = { exports: {} }),
              t[a][0].call(
                s.exports,
                function (e) {
                  return o(t[a][1][e] || e);
                },
                s,
                s.exports,
                e,
                t,
                n,
                r
              );
          }
          return n[a].exports;
        }
        for (var i = void 0, a = 0; a < r.length; a++) o(r[a]);
        return o;
      })(
        {
          1: [
            function (e, t, n) {
              (function (r, o, i, a, s, l, c, u, f) {
                "use strict";
                var d = e("crypto");
                function p(e, t) {
                  var n;
                  return (
                    void 0 ===
                      (n =
                        "passthrough" !== (t = g(e, t)).algorithm
                          ? d.createHash(t.algorithm)
                          : new b()).write &&
                      ((n.write = n.update), (n.end = n.update)),
                    y(t, n).dispatch(e),
                    n.update || n.end(""),
                    n.digest
                      ? n.digest("buffer" === t.encoding ? void 0 : t.encoding)
                      : ((e = n.read()),
                        "buffer" !== t.encoding ? e.toString(t.encoding) : e)
                  );
                }
                ((n = t.exports = p).sha1 = function (e) {
                  return p(e);
                }),
                  (n.keys = function (e) {
                    return p(e, {
                      excludeValues: !0,
                      algorithm: "sha1",
                      encoding: "hex",
                    });
                  }),
                  (n.MD5 = function (e) {
                    return p(e, { algorithm: "md5", encoding: "hex" });
                  }),
                  (n.keysMD5 = function (e) {
                    return p(e, {
                      algorithm: "md5",
                      encoding: "hex",
                      excludeValues: !0,
                    });
                  });
                var h = d.getHashes ? d.getHashes().slice() : ["sha1", "md5"],
                  m =
                    (h.push("passthrough"),
                    ["buffer", "hex", "binary", "base64"]);
                function g(e, t) {
                  var n = {};
                  if (
                    ((n.algorithm = (t = t || {}).algorithm || "sha1"),
                    (n.encoding = t.encoding || "hex"),
                    (n.excludeValues = !!t.excludeValues),
                    (n.algorithm = n.algorithm.toLowerCase()),
                    (n.encoding = n.encoding.toLowerCase()),
                    (n.ignoreUnknown = !0 === t.ignoreUnknown),
                    (n.respectType = !1 !== t.respectType),
                    (n.respectFunctionNames = !1 !== t.respectFunctionNames),
                    (n.respectFunctionProperties =
                      !1 !== t.respectFunctionProperties),
                    (n.unorderedArrays = !0 === t.unorderedArrays),
                    (n.unorderedSets = !1 !== t.unorderedSets),
                    (n.unorderedObjects = !1 !== t.unorderedObjects),
                    (n.replacer = t.replacer || void 0),
                    (n.excludeKeys = t.excludeKeys || void 0),
                    void 0 === e)
                  )
                    throw new Error("Object argument required.");
                  for (var r = 0; r < h.length; ++r)
                    h[r].toLowerCase() === n.algorithm.toLowerCase() &&
                      (n.algorithm = h[r]);
                  if (-1 === h.indexOf(n.algorithm))
                    throw new Error(
                      'Algorithm "' +
                        n.algorithm +
                        '"  not supported. supported values: ' +
                        h.join(", ")
                    );
                  if (
                    -1 === m.indexOf(n.encoding) &&
                    "passthrough" !== n.algorithm
                  )
                    throw new Error(
                      'Encoding "' +
                        n.encoding +
                        '"  not supported. supported values: ' +
                        m.join(", ")
                    );
                  return n;
                }
                function v(e) {
                  if ("function" == typeof e)
                    return (
                      null !=
                      /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(
                        Function.prototype.toString.call(e)
                      )
                    );
                }
                function y(e, t, n) {
                  function r(e) {
                    return t.update ? t.update(e, "utf8") : t.write(e, "utf8");
                  }
                  return (
                    (n = n || []),
                    {
                      dispatch: function (t) {
                        return this[
                          "_" +
                            (null === (t = e.replacer ? e.replacer(t) : t)
                              ? "null"
                              : typeof t)
                        ](t);
                      },
                      _object: function (t) {
                        var o,
                          a = Object.prototype.toString.call(t),
                          s = /\[object (.*)\]/i.exec(a);
                        if (
                          ((s = (s = s
                            ? s[1]
                            : "unknown:[" + a + "]").toLowerCase()),
                          0 <= (a = n.indexOf(t)))
                        )
                          return this.dispatch("[CIRCULAR:" + a + "]");
                        if (
                          (n.push(t),
                          void 0 !== i && i.isBuffer && i.isBuffer(t))
                        )
                          return r("buffer:"), r(t);
                        if (
                          "object" === s ||
                          "function" === s ||
                          "asyncfunction" === s
                        )
                          return (
                            (a = Object.keys(t)),
                            e.unorderedObjects && (a = a.sort()),
                            !1 === e.respectType ||
                              v(t) ||
                              a.splice(
                                0,
                                0,
                                "prototype",
                                "__proto__",
                                "constructor"
                              ),
                            e.excludeKeys &&
                              (a = a.filter(function (t) {
                                return !e.excludeKeys(t);
                              })),
                            r("object:" + a.length + ":"),
                            (o = this),
                            a.forEach(function (n) {
                              o.dispatch(n),
                                r(":"),
                                e.excludeValues || o.dispatch(t[n]),
                                r(",");
                            })
                          );
                        if (!this["_" + s]) {
                          if (e.ignoreUnknown) return r("[" + s + "]");
                          throw new Error('Unknown object type "' + s + '"');
                        }
                        this["_" + s](t);
                      },
                      _array: function (t, o) {
                        o = void 0 !== o ? o : !1 !== e.unorderedArrays;
                        var i = this;
                        if ((r("array:" + t.length + ":"), !o || t.length <= 1))
                          return t.forEach(function (e) {
                            return i.dispatch(e);
                          });
                        var a = [];
                        return (
                          (o = t.map(function (t) {
                            var r = new b(),
                              o = n.slice();
                            return (
                              y(e, r, o).dispatch(t),
                              (a = a.concat(o.slice(n.length))),
                              r.read().toString()
                            );
                          })),
                          (n = n.concat(a)),
                          o.sort(),
                          this._array(o, !1)
                        );
                      },
                      _date: function (e) {
                        return r("date:" + e.toJSON());
                      },
                      _symbol: function (e) {
                        return r("symbol:" + e.toString());
                      },
                      _error: function (e) {
                        return r("error:" + e.toString());
                      },
                      _boolean: function (e) {
                        return r("bool:" + e.toString());
                      },
                      _string: function (e) {
                        r("string:" + e.length + ":"), r(e.toString());
                      },
                      _function: function (t) {
                        r("fn:"),
                          v(t)
                            ? this.dispatch("[native]")
                            : this.dispatch(t.toString()),
                          !1 !== e.respectFunctionNames &&
                            this.dispatch("function-name:" + String(t.name)),
                          e.respectFunctionProperties && this._object(t);
                      },
                      _number: function (e) {
                        return r("number:" + e.toString());
                      },
                      _xml: function (e) {
                        return r("xml:" + e.toString());
                      },
                      _null: function () {
                        return r("Null");
                      },
                      _undefined: function () {
                        return r("Undefined");
                      },
                      _regexp: function (e) {
                        return r("regex:" + e.toString());
                      },
                      _uint8array: function (e) {
                        return (
                          r("uint8array:"),
                          this.dispatch(Array.prototype.slice.call(e))
                        );
                      },
                      _uint8clampedarray: function (e) {
                        return (
                          r("uint8clampedarray:"),
                          this.dispatch(Array.prototype.slice.call(e))
                        );
                      },
                      _int8array: function (e) {
                        return (
                          r("int8array:"),
                          this.dispatch(Array.prototype.slice.call(e))
                        );
                      },
                      _uint16array: function (e) {
                        return (
                          r("uint16array:"),
                          this.dispatch(Array.prototype.slice.call(e))
                        );
                      },
                      _int16array: function (e) {
                        return (
                          r("int16array:"),
                          this.dispatch(Array.prototype.slice.call(e))
                        );
                      },
                      _uint32array: function (e) {
                        return (
                          r("uint32array:"),
                          this.dispatch(Array.prototype.slice.call(e))
                        );
                      },
                      _int32array: function (e) {
                        return (
                          r("int32array:"),
                          this.dispatch(Array.prototype.slice.call(e))
                        );
                      },
                      _float32array: function (e) {
                        return (
                          r("float32array:"),
                          this.dispatch(Array.prototype.slice.call(e))
                        );
                      },
                      _float64array: function (e) {
                        return (
                          r("float64array:"),
                          this.dispatch(Array.prototype.slice.call(e))
                        );
                      },
                      _arraybuffer: function (e) {
                        return (
                          r("arraybuffer:"), this.dispatch(new Uint8Array(e))
                        );
                      },
                      _url: function (e) {
                        return r("url:" + e.toString());
                      },
                      _map: function (t) {
                        return (
                          r("map:"),
                          (t = Array.from(t)),
                          this._array(t, !1 !== e.unorderedSets)
                        );
                      },
                      _set: function (t) {
                        return (
                          r("set:"),
                          (t = Array.from(t)),
                          this._array(t, !1 !== e.unorderedSets)
                        );
                      },
                      _file: function (e) {
                        return (
                          r("file:"),
                          this.dispatch([e.name, e.size, e.type, e.lastModfied])
                        );
                      },
                      _blob: function () {
                        if (e.ignoreUnknown) return r("[blob]");
                        throw Error(
                          'Hashing Blob objects is currently not supported\n(see https://github.com/puleos/object-hash/issues/26)\nUse "options.replacer" or "options.ignoreUnknown"\n'
                        );
                      },
                      _domwindow: function () {
                        return r("domwindow");
                      },
                      _bigint: function (e) {
                        return r("bigint:" + e.toString());
                      },
                      _process: function () {
                        return r("process");
                      },
                      _timer: function () {
                        return r("timer");
                      },
                      _pipe: function () {
                        return r("pipe");
                      },
                      _tcp: function () {
                        return r("tcp");
                      },
                      _udp: function () {
                        return r("udp");
                      },
                      _tty: function () {
                        return r("tty");
                      },
                      _statwatcher: function () {
                        return r("statwatcher");
                      },
                      _securecontext: function () {
                        return r("securecontext");
                      },
                      _connection: function () {
                        return r("connection");
                      },
                      _zlib: function () {
                        return r("zlib");
                      },
                      _context: function () {
                        return r("context");
                      },
                      _nodescript: function () {
                        return r("nodescript");
                      },
                      _httpparser: function () {
                        return r("httpparser");
                      },
                      _dataview: function () {
                        return r("dataview");
                      },
                      _signal: function () {
                        return r("signal");
                      },
                      _fsevent: function () {
                        return r("fsevent");
                      },
                      _tlswrap: function () {
                        return r("tlswrap");
                      },
                    }
                  );
                }
                function b() {
                  return {
                    buf: "",
                    write: function (e) {
                      this.buf += e;
                    },
                    end: function (e) {
                      this.buf += e;
                    },
                    read: function () {
                      return this.buf;
                    },
                  };
                }
                n.writeToStream = function (e, t, n) {
                  return (
                    void 0 === n && ((n = t), (t = {})),
                    y((t = g(e, t)), n).dispatch(e)
                  );
                };
              }.call(
                this,
                e("lYpoI2"),
                "undefined" != typeof self
                  ? self
                  : "undefined" != typeof window
                  ? window
                  : {},
                e("buffer").Buffer,
                arguments[3],
                arguments[4],
                arguments[5],
                arguments[6],
                "/fake_9a5aa49d.js",
                "/"
              ));
            },
            { buffer: 3, crypto: 5, lYpoI2: 11 },
          ],
          2: [
            function (e, t, n) {
              (function (e, t, r, o, i, a, s, l, c) {
                !(function (e) {
                  "use strict";
                  var t = "undefined" != typeof Uint8Array ? Uint8Array : Array,
                    n = "+".charCodeAt(0),
                    r = "/".charCodeAt(0),
                    o = "0".charCodeAt(0),
                    i = "a".charCodeAt(0),
                    a = "A".charCodeAt(0),
                    s = "-".charCodeAt(0),
                    l = "_".charCodeAt(0);
                  function c(e) {
                    return (e = e.charCodeAt(0)) === n || e === s
                      ? 62
                      : e === r || e === l
                      ? 63
                      : e < o
                      ? -1
                      : e < o + 10
                      ? e - o + 26 + 26
                      : e < a + 26
                      ? e - a
                      : e < i + 26
                      ? e - i + 26
                      : void 0;
                  }
                  (e.toByteArray = function (e) {
                    var n, r;
                    if (0 < e.length % 4)
                      throw new Error(
                        "Invalid string. Length must be a multiple of 4"
                      );
                    var o = e.length,
                      i =
                        ((o =
                          "=" === e.charAt(o - 2)
                            ? 2
                            : "=" === e.charAt(o - 1)
                            ? 1
                            : 0),
                        new t((3 * e.length) / 4 - o)),
                      a = 0 < o ? e.length - 4 : e.length,
                      s = 0;
                    function l(e) {
                      i[s++] = e;
                    }
                    for (n = 0; n < a; n += 4, 0)
                      l(
                        (16711680 &
                          (r =
                            (c(e.charAt(n)) << 18) |
                            (c(e.charAt(n + 1)) << 12) |
                            (c(e.charAt(n + 2)) << 6) |
                            c(e.charAt(n + 3)))) >>
                          16
                      ),
                        l((65280 & r) >> 8),
                        l(255 & r);
                    return (
                      2 == o
                        ? l(
                            255 &
                              (r =
                                (c(e.charAt(n)) << 2) |
                                (c(e.charAt(n + 1)) >> 4))
                          )
                        : 1 == o &&
                          (l(
                            ((r =
                              (c(e.charAt(n)) << 10) |
                              (c(e.charAt(n + 1)) << 4) |
                              (c(e.charAt(n + 2)) >> 2)) >>
                              8) &
                              255
                          ),
                          l(255 & r)),
                      i
                    );
                  }),
                    (e.fromByteArray = function (e) {
                      var t,
                        n,
                        r,
                        o,
                        i = e.length % 3,
                        a = "";
                      function s(e) {
                        return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(
                          e
                        );
                      }
                      for (t = 0, r = e.length - i; t < r; t += 3)
                        a +=
                          s(
                            ((o = n =
                              (e[t] << 16) + (e[t + 1] << 8) + e[t + 2]) >>
                              18) &
                              63
                          ) +
                          s((o >> 12) & 63) +
                          s((o >> 6) & 63) +
                          s(63 & o);
                      switch (i) {
                        case 1:
                          a =
                            (a += s((n = e[e.length - 1]) >> 2)) +
                            s((n << 4) & 63) +
                            "==";
                          break;
                        case 2:
                          a =
                            (a =
                              (a += s(
                                (n =
                                  (e[e.length - 2] << 8) + e[e.length - 1]) >>
                                  10
                              )) + s((n >> 4) & 63)) +
                            s((n << 2) & 63) +
                            "=";
                      }
                      return a;
                    });
                })(void 0 === n ? (this.base64js = {}) : n);
              }.call(
                this,
                e("lYpoI2"),
                "undefined" != typeof self
                  ? self
                  : "undefined" != typeof window
                  ? window
                  : {},
                e("buffer").Buffer,
                arguments[3],
                arguments[4],
                arguments[5],
                arguments[6],
                "/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js",
                "/node_modules/gulp-browserify/node_modules/base64-js/lib"
              ));
            },
            { buffer: 3, lYpoI2: 11 },
          ],
          3: [
            function (e, t, n) {
              (function (t, r, o, i, a, s, l, c, u) {
                var f = e("base64-js"),
                  d = e("ieee754");
                function o(e, t, n) {
                  if (!(this instanceof o)) return new o(e, t, n);
                  var r,
                    i,
                    a,
                    s,
                    l = typeof e;
                  if ("base64" === t && "string" == l)
                    for (
                      e = (s = e).trim ? s.trim() : s.replace(/^\s+|\s+$/g, "");
                      e.length % 4 != 0;

                    )
                      e += "=";
                  if ("number" == l) r = I(e);
                  else if ("string" == l) r = o.byteLength(e, t);
                  else {
                    if ("object" != l)
                      throw new Error(
                        "First argument needs to be a number, array or string."
                      );
                    r = I(e.length);
                  }
                  if (
                    (o._useTypedArrays
                      ? (i = o._augment(new Uint8Array(r)))
                      : (((i = this).length = r), (i._isBuffer = !0)),
                    o._useTypedArrays && "number" == typeof e.byteLength)
                  )
                    i._set(e);
                  else if (
                    k((s = e)) ||
                    o.isBuffer(s) ||
                    (s && "object" == typeof s && "number" == typeof s.length)
                  )
                    for (a = 0; a < r; a++)
                      o.isBuffer(e) ? (i[a] = e.readUInt8(a)) : (i[a] = e[a]);
                  else if ("string" == l) i.write(e, 0, t);
                  else if ("number" == l && !o._useTypedArrays && !n)
                    for (a = 0; a < r; a++) i[a] = 0;
                  return i;
                }
                function p(e, t, n, r) {
                  return (o._charsWritten = D(
                    (function (e) {
                      for (var t = [], n = 0; n < e.length; n++)
                        t.push(255 & e.charCodeAt(n));
                      return t;
                    })(t),
                    e,
                    n,
                    r
                  ));
                }
                function h(e, t, n, r) {
                  return (o._charsWritten = D(
                    (function (e) {
                      for (var t, n, r = [], o = 0; o < e.length; o++)
                        (t = (n = e.charCodeAt(o)) >> 8),
                          (n %= 256),
                          r.push(n),
                          r.push(t);
                      return r;
                    })(t),
                    e,
                    n,
                    r
                  ));
                }
                function m(e, t, n) {
                  var r = "";
                  n = Math.min(e.length, n);
                  for (var o = t; o < n; o++) r += String.fromCharCode(e[o]);
                  return r;
                }
                function g(e, t, n, r) {
                  var o;
                  if (
                    (r ||
                      (z("boolean" == typeof n, "missing or invalid endian"),
                      z(null != t, "missing offset"),
                      z(
                        t + 1 < e.length,
                        "Trying to read beyond buffer length"
                      )),
                    !((r = e.length) <= t))
                  )
                    return (
                      n
                        ? ((o = e[t]), t + 1 < r && (o |= e[t + 1] << 8))
                        : ((o = e[t] << 8), t + 1 < r && (o |= e[t + 1])),
                      o
                    );
                }
                function v(e, t, n, r) {
                  var o;
                  if (
                    (r ||
                      (z("boolean" == typeof n, "missing or invalid endian"),
                      z(null != t, "missing offset"),
                      z(
                        t + 3 < e.length,
                        "Trying to read beyond buffer length"
                      )),
                    !((r = e.length) <= t))
                  )
                    return (
                      n
                        ? (t + 2 < r && (o = e[t + 2] << 16),
                          t + 1 < r && (o |= e[t + 1] << 8),
                          (o |= e[t]),
                          t + 3 < r && (o += (e[t + 3] << 24) >>> 0))
                        : (t + 1 < r && (o = e[t + 1] << 16),
                          t + 2 < r && (o |= e[t + 2] << 8),
                          t + 3 < r && (o |= e[t + 3]),
                          (o += (e[t] << 24) >>> 0)),
                      o
                    );
                }
                function y(e, t, n, r) {
                  if (
                    (r ||
                      (z("boolean" == typeof n, "missing or invalid endian"),
                      z(null != t, "missing offset"),
                      z(
                        t + 1 < e.length,
                        "Trying to read beyond buffer length"
                      )),
                    !(e.length <= t))
                  )
                    return 32768 & (r = g(e, t, n, !0))
                      ? -1 * (65535 - r + 1)
                      : r;
                }
                function b(e, t, n, r) {
                  if (
                    (r ||
                      (z("boolean" == typeof n, "missing or invalid endian"),
                      z(null != t, "missing offset"),
                      z(
                        t + 3 < e.length,
                        "Trying to read beyond buffer length"
                      )),
                    !(e.length <= t))
                  )
                    return 2147483648 & (r = v(e, t, n, !0))
                      ? -1 * (4294967295 - r + 1)
                      : r;
                }
                function A(e, t, n, r) {
                  return (
                    r ||
                      (z("boolean" == typeof n, "missing or invalid endian"),
                      z(
                        t + 3 < e.length,
                        "Trying to read beyond buffer length"
                      )),
                    d.read(e, t, n, 23, 4)
                  );
                }
                function B(e, t, n, r) {
                  return (
                    r ||
                      (z("boolean" == typeof n, "missing or invalid endian"),
                      z(
                        t + 7 < e.length,
                        "Trying to read beyond buffer length"
                      )),
                    d.read(e, t, n, 52, 8)
                  );
                }
                function C(e, t, n, r, o) {
                  if (
                    (o ||
                      (z(null != t, "missing value"),
                      z("boolean" == typeof r, "missing or invalid endian"),
                      z(null != n, "missing offset"),
                      z(
                        n + 1 < e.length,
                        "trying to write beyond buffer length"
                      ),
                      L(t, 65535)),
                    !((o = e.length) <= n))
                  )
                    for (var i = 0, a = Math.min(o - n, 2); i < a; i++)
                      e[n + i] =
                        (t & (255 << (8 * (r ? i : 1 - i)))) >>>
                        (8 * (r ? i : 1 - i));
                }
                function x(e, t, n, r, o) {
                  if (
                    (o ||
                      (z(null != t, "missing value"),
                      z("boolean" == typeof r, "missing or invalid endian"),
                      z(null != n, "missing offset"),
                      z(
                        n + 3 < e.length,
                        "trying to write beyond buffer length"
                      ),
                      L(t, 4294967295)),
                    !((o = e.length) <= n))
                  )
                    for (var i = 0, a = Math.min(o - n, 4); i < a; i++)
                      e[n + i] = (t >>> (8 * (r ? i : 3 - i))) & 255;
                }
                function w(e, t, n, r, o) {
                  o ||
                    (z(null != t, "missing value"),
                    z("boolean" == typeof r, "missing or invalid endian"),
                    z(null != n, "missing offset"),
                    z(n + 1 < e.length, "Trying to write beyond buffer length"),
                    G(t, 32767, -32768)),
                    e.length <= n || C(e, 0 <= t ? t : 65535 + t + 1, n, r, o);
                }
                function _(e, t, n, r, o) {
                  o ||
                    (z(null != t, "missing value"),
                    z("boolean" == typeof r, "missing or invalid endian"),
                    z(null != n, "missing offset"),
                    z(n + 3 < e.length, "Trying to write beyond buffer length"),
                    G(t, 2147483647, -2147483648)),
                    e.length <= n ||
                      x(e, 0 <= t ? t : 4294967295 + t + 1, n, r, o);
                }
                function E(e, t, n, r, o) {
                  o ||
                    (z(null != t, "missing value"),
                    z("boolean" == typeof r, "missing or invalid endian"),
                    z(null != n, "missing offset"),
                    z(n + 3 < e.length, "Trying to write beyond buffer length"),
                    H(t, 34028234663852886e22, -34028234663852886e22)),
                    e.length <= n || d.write(e, t, n, r, 23, 4);
                }
                function S(e, t, n, r, o) {
                  o ||
                    (z(null != t, "missing value"),
                    z("boolean" == typeof r, "missing or invalid endian"),
                    z(null != n, "missing offset"),
                    z(n + 7 < e.length, "Trying to write beyond buffer length"),
                    H(t, 17976931348623157e292, -17976931348623157e292)),
                    e.length <= n || d.write(e, t, n, r, 52, 8);
                }
                (n.Buffer = o),
                  (n.SlowBuffer = o),
                  (n.INSPECT_MAX_BYTES = 50),
                  (o.poolSize = 8192),
                  (o._useTypedArrays = (function () {
                    try {
                      var e = new ArrayBuffer(0),
                        t = new Uint8Array(e);
                      return (
                        (t.foo = function () {
                          return 42;
                        }),
                        42 === t.foo() && "function" == typeof t.subarray
                      );
                    } catch (e) {
                      return !1;
                    }
                  })()),
                  (o.isEncoding = function (e) {
                    switch (String(e).toLowerCase()) {
                      case "hex":
                      case "utf8":
                      case "utf-8":
                      case "ascii":
                      case "binary":
                      case "base64":
                      case "raw":
                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return !0;
                      default:
                        return !1;
                    }
                  }),
                  (o.isBuffer = function (e) {
                    return !(null == e || !e._isBuffer);
                  }),
                  (o.byteLength = function (e, t) {
                    var n;
                    switch (((e += ""), t || "utf8")) {
                      case "hex":
                        n = e.length / 2;
                        break;
                      case "utf8":
                      case "utf-8":
                        n = P(e).length;
                        break;
                      case "ascii":
                      case "binary":
                      case "raw":
                        n = e.length;
                        break;
                      case "base64":
                        n = F(e).length;
                        break;
                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        n = 2 * e.length;
                        break;
                      default:
                        throw new Error("Unknown encoding");
                    }
                    return n;
                  }),
                  (o.concat = function (e, t) {
                    if (
                      (z(
                        k(e),
                        "Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."
                      ),
                      0 === e.length)
                    )
                      return new o(0);
                    if (1 === e.length) return e[0];
                    if ("number" != typeof t)
                      for (i = t = 0; i < e.length; i++) t += e[i].length;
                    for (var n = new o(t), r = 0, i = 0; i < e.length; i++) {
                      var a = e[i];
                      a.copy(n, r), (r += a.length);
                    }
                    return n;
                  }),
                  (o.prototype.write = function (e, t, n, r) {
                    isFinite(t)
                      ? isFinite(n) || ((r = n), (n = void 0))
                      : ((c = r), (r = t), (t = n), (n = c)),
                      (t = Number(t) || 0);
                    var i,
                      a,
                      s,
                      l,
                      c = this.length - t;
                    switch (
                      ((!n || c < (n = Number(n))) && (n = c),
                      (r = String(r || "utf8").toLowerCase()))
                    ) {
                      case "hex":
                        i = (function (e, t, n, r) {
                          n = Number(n) || 0;
                          var i = e.length - n;
                          (!r || i < (r = Number(r))) && (r = i),
                            z((i = t.length) % 2 == 0, "Invalid hex string"),
                            i / 2 < r && (r = i / 2);
                          for (var a = 0; a < r; a++) {
                            var s = parseInt(t.substr(2 * a, 2), 16);
                            z(!isNaN(s), "Invalid hex string"), (e[n + a] = s);
                          }
                          return (o._charsWritten = 2 * a), a;
                        })(this, e, t, n);
                        break;
                      case "utf8":
                      case "utf-8":
                        (a = this),
                          (s = t),
                          (l = n),
                          (i = o._charsWritten = D(P(e), a, s, l));
                        break;
                      case "ascii":
                      case "binary":
                        i = p(this, e, t, n);
                        break;
                      case "base64":
                        (a = this),
                          (s = t),
                          (l = n),
                          (i = o._charsWritten = D(F(e), a, s, l));
                        break;
                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        i = h(this, e, t, n);
                        break;
                      default:
                        throw new Error("Unknown encoding");
                    }
                    return i;
                  }),
                  (o.prototype.toString = function (e, t, n) {
                    var r,
                      o,
                      i,
                      a,
                      s = this;
                    if (
                      ((e = String(e || "utf8").toLowerCase()),
                      (t = Number(t) || 0),
                      (n = void 0 !== n ? Number(n) : s.length) === t)
                    )
                      return "";
                    switch (e) {
                      case "hex":
                        r = (function (e, t, n) {
                          var r = e.length;
                          (!t || t < 0) && (t = 0),
                            (!n || n < 0 || r < n) && (n = r);
                          for (var o = "", i = t; i < n; i++) o += T(e[i]);
                          return o;
                        })(s, t, n);
                        break;
                      case "utf8":
                      case "utf-8":
                        r = (function (e, t, n) {
                          var r = "",
                            o = "";
                          n = Math.min(e.length, n);
                          for (var i = t; i < n; i++)
                            e[i] <= 127
                              ? ((r += O(o) + String.fromCharCode(e[i])),
                                (o = ""))
                              : (o += "%" + e[i].toString(16));
                          return r + O(o);
                        })(s, t, n);
                        break;
                      case "ascii":
                      case "binary":
                        r = m(s, t, n);
                        break;
                      case "base64":
                        (o = s),
                          (a = n),
                          (r =
                            0 === (i = t) && a === o.length
                              ? f.fromByteArray(o)
                              : f.fromByteArray(o.slice(i, a)));
                        break;
                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        r = (function (e, t, n) {
                          for (
                            var r = e.slice(t, n), o = "", i = 0;
                            i < r.length;
                            i += 2
                          )
                            o += String.fromCharCode(r[i] + 256 * r[i + 1]);
                          return o;
                        })(s, t, n);
                        break;
                      default:
                        throw new Error("Unknown encoding");
                    }
                    return r;
                  }),
                  (o.prototype.toJSON = function () {
                    return {
                      type: "Buffer",
                      data: Array.prototype.slice.call(this._arr || this, 0),
                    };
                  }),
                  (o.prototype.copy = function (e, t, n, r) {
                    if (
                      ((t = t || 0),
                      (r = r || 0 === r ? r : this.length) !== (n = n || 0) &&
                        0 !== e.length &&
                        0 !== this.length)
                    ) {
                      z(n <= r, "sourceEnd < sourceStart"),
                        z(0 <= t && t < e.length, "targetStart out of bounds"),
                        z(
                          0 <= n && n < this.length,
                          "sourceStart out of bounds"
                        ),
                        z(
                          0 <= r && r <= this.length,
                          "sourceEnd out of bounds"
                        ),
                        r > this.length && (r = this.length);
                      var i =
                        (r = e.length - t < r - n ? e.length - t + n : r) - n;
                      if (i < 100 || !o._useTypedArrays)
                        for (var a = 0; a < i; a++) e[a + t] = this[a + n];
                      else e._set(this.subarray(n, n + i), t);
                    }
                  }),
                  (o.prototype.slice = function (e, t) {
                    var n = this.length;
                    if (((e = R(e, n, 0)), (t = R(t, n, n)), o._useTypedArrays))
                      return o._augment(this.subarray(e, t));
                    for (
                      var r = t - e, i = new o(r, void 0, !0), a = 0;
                      a < r;
                      a++
                    )
                      i[a] = this[a + e];
                    return i;
                  }),
                  (o.prototype.get = function (e) {
                    return (
                      console.log(
                        ".get() is deprecated. Access using array indexes instead."
                      ),
                      this.readUInt8(e)
                    );
                  }),
                  (o.prototype.set = function (e, t) {
                    return (
                      console.log(
                        ".set() is deprecated. Access using array indexes instead."
                      ),
                      this.writeUInt8(e, t)
                    );
                  }),
                  (o.prototype.readUInt8 = function (e, t) {
                    if (
                      (t ||
                        (z(null != e, "missing offset"),
                        z(
                          e < this.length,
                          "Trying to read beyond buffer length"
                        )),
                      !(e >= this.length))
                    )
                      return this[e];
                  }),
                  (o.prototype.readUInt16LE = function (e, t) {
                    return g(this, e, !0, t);
                  }),
                  (o.prototype.readUInt16BE = function (e, t) {
                    return g(this, e, !1, t);
                  }),
                  (o.prototype.readUInt32LE = function (e, t) {
                    return v(this, e, !0, t);
                  }),
                  (o.prototype.readUInt32BE = function (e, t) {
                    return v(this, e, !1, t);
                  }),
                  (o.prototype.readInt8 = function (e, t) {
                    if (
                      (t ||
                        (z(null != e, "missing offset"),
                        z(
                          e < this.length,
                          "Trying to read beyond buffer length"
                        )),
                      !(e >= this.length))
                    )
                      return 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
                  }),
                  (o.prototype.readInt16LE = function (e, t) {
                    return y(this, e, !0, t);
                  }),
                  (o.prototype.readInt16BE = function (e, t) {
                    return y(this, e, !1, t);
                  }),
                  (o.prototype.readInt32LE = function (e, t) {
                    return b(this, e, !0, t);
                  }),
                  (o.prototype.readInt32BE = function (e, t) {
                    return b(this, e, !1, t);
                  }),
                  (o.prototype.readFloatLE = function (e, t) {
                    return A(this, e, !0, t);
                  }),
                  (o.prototype.readFloatBE = function (e, t) {
                    return A(this, e, !1, t);
                  }),
                  (o.prototype.readDoubleLE = function (e, t) {
                    return B(this, e, !0, t);
                  }),
                  (o.prototype.readDoubleBE = function (e, t) {
                    return B(this, e, !1, t);
                  }),
                  (o.prototype.writeUInt8 = function (e, t, n) {
                    n ||
                      (z(null != e, "missing value"),
                      z(null != t, "missing offset"),
                      z(
                        t < this.length,
                        "trying to write beyond buffer length"
                      ),
                      L(e, 255)),
                      t >= this.length || (this[t] = e);
                  }),
                  (o.prototype.writeUInt16LE = function (e, t, n) {
                    C(this, e, t, !0, n);
                  }),
                  (o.prototype.writeUInt16BE = function (e, t, n) {
                    C(this, e, t, !1, n);
                  }),
                  (o.prototype.writeUInt32LE = function (e, t, n) {
                    x(this, e, t, !0, n);
                  }),
                  (o.prototype.writeUInt32BE = function (e, t, n) {
                    x(this, e, t, !1, n);
                  }),
                  (o.prototype.writeInt8 = function (e, t, n) {
                    n ||
                      (z(null != e, "missing value"),
                      z(null != t, "missing offset"),
                      z(
                        t < this.length,
                        "Trying to write beyond buffer length"
                      ),
                      G(e, 127, -128)),
                      t >= this.length ||
                        (0 <= e
                          ? this.writeUInt8(e, t, n)
                          : this.writeUInt8(255 + e + 1, t, n));
                  }),
                  (o.prototype.writeInt16LE = function (e, t, n) {
                    w(this, e, t, !0, n);
                  }),
                  (o.prototype.writeInt16BE = function (e, t, n) {
                    w(this, e, t, !1, n);
                  }),
                  (o.prototype.writeInt32LE = function (e, t, n) {
                    _(this, e, t, !0, n);
                  }),
                  (o.prototype.writeInt32BE = function (e, t, n) {
                    _(this, e, t, !1, n);
                  }),
                  (o.prototype.writeFloatLE = function (e, t, n) {
                    E(this, e, t, !0, n);
                  }),
                  (o.prototype.writeFloatBE = function (e, t, n) {
                    E(this, e, t, !1, n);
                  }),
                  (o.prototype.writeDoubleLE = function (e, t, n) {
                    S(this, e, t, !0, n);
                  }),
                  (o.prototype.writeDoubleBE = function (e, t, n) {
                    S(this, e, t, !1, n);
                  }),
                  (o.prototype.fill = function (e, t, n) {
                    if (
                      ((t = t || 0),
                      (n = n || this.length),
                      z(
                        "number" ==
                          typeof (e =
                            "string" == typeof (e = e || 0)
                              ? e.charCodeAt(0)
                              : e) && !isNaN(e),
                        "value is not a number"
                      ),
                      z(t <= n, "end < start"),
                      n !== t && 0 !== this.length)
                    ) {
                      z(0 <= t && t < this.length, "start out of bounds"),
                        z(0 <= n && n <= this.length, "end out of bounds");
                      for (var r = t; r < n; r++) this[r] = e;
                    }
                  }),
                  (o.prototype.inspect = function () {
                    for (var e = [], t = this.length, r = 0; r < t; r++)
                      if (((e[r] = T(this[r])), r === n.INSPECT_MAX_BYTES)) {
                        e[r + 1] = "...";
                        break;
                      }
                    return "<Buffer " + e.join(" ") + ">";
                  }),
                  (o.prototype.toArrayBuffer = function () {
                    if ("undefined" == typeof Uint8Array)
                      throw new Error(
                        "Buffer.toArrayBuffer not supported in this browser"
                      );
                    if (o._useTypedArrays) return new o(this).buffer;
                    for (
                      var e = new Uint8Array(this.length), t = 0, n = e.length;
                      t < n;
                      t += 1
                    )
                      e[t] = this[t];
                    return e.buffer;
                  });
                var M = o.prototype;
                function R(e, t, n) {
                  return "number" != typeof e
                    ? n
                    : t <= (e = ~~e)
                    ? t
                    : 0 <= e || 0 <= (e += t)
                    ? e
                    : 0;
                }
                function I(e) {
                  return (e = ~~Math.ceil(+e)) < 0 ? 0 : e;
                }
                function k(e) {
                  return (
                    Array.isArray ||
                    function (e) {
                      return (
                        "[object Array]" === Object.prototype.toString.call(e)
                      );
                    }
                  )(e);
                }
                function T(e) {
                  return e < 16 ? "0" + e.toString(16) : e.toString(16);
                }
                function P(e) {
                  for (var t = [], n = 0; n < e.length; n++) {
                    var r = e.charCodeAt(n);
                    if (r <= 127) t.push(e.charCodeAt(n));
                    else
                      for (
                        var o = n,
                          i =
                            (55296 <= r && r <= 57343 && n++,
                            encodeURIComponent(e.slice(o, n + 1))
                              .substr(1)
                              .split("%")),
                          a = 0;
                        a < i.length;
                        a++
                      )
                        t.push(parseInt(i[a], 16));
                  }
                  return t;
                }
                function F(e) {
                  return f.toByteArray(e);
                }
                function D(e, t, n, r) {
                  for (
                    var o = 0;
                    o < r && !(o + n >= t.length || o >= e.length);
                    o++
                  )
                    t[o + n] = e[o];
                  return o;
                }
                function O(e) {
                  try {
                    return decodeURIComponent(e);
                  } catch (e) {
                    return String.fromCharCode(65533);
                  }
                }
                function L(e, t) {
                  z(
                    "number" == typeof e,
                    "cannot write a non-number as a number"
                  ),
                    z(
                      0 <= e,
                      "specified a negative value for writing an unsigned value"
                    ),
                    z(e <= t, "value is larger than maximum value for type"),
                    z(Math.floor(e) === e, "value has a fractional component");
                }
                function G(e, t, n) {
                  z(
                    "number" == typeof e,
                    "cannot write a non-number as a number"
                  ),
                    z(e <= t, "value larger than maximum allowed value"),
                    z(n <= e, "value smaller than minimum allowed value"),
                    z(Math.floor(e) === e, "value has a fractional component");
                }
                function H(e, t, n) {
                  z(
                    "number" == typeof e,
                    "cannot write a non-number as a number"
                  ),
                    z(e <= t, "value larger than maximum allowed value"),
                    z(n <= e, "value smaller than minimum allowed value");
                }
                function z(e, t) {
                  if (!e) throw new Error(t || "Failed assertion");
                }
                o._augment = function (e) {
                  return (
                    (e._isBuffer = !0),
                    (e._get = e.get),
                    (e._set = e.set),
                    (e.get = M.get),
                    (e.set = M.set),
                    (e.write = M.write),
                    (e.toString = M.toString),
                    (e.toLocaleString = M.toString),
                    (e.toJSON = M.toJSON),
                    (e.copy = M.copy),
                    (e.slice = M.slice),
                    (e.readUInt8 = M.readUInt8),
                    (e.readUInt16LE = M.readUInt16LE),
                    (e.readUInt16BE = M.readUInt16BE),
                    (e.readUInt32LE = M.readUInt32LE),
                    (e.readUInt32BE = M.readUInt32BE),
                    (e.readInt8 = M.readInt8),
                    (e.readInt16LE = M.readInt16LE),
                    (e.readInt16BE = M.readInt16BE),
                    (e.readInt32LE = M.readInt32LE),
                    (e.readInt32BE = M.readInt32BE),
                    (e.readFloatLE = M.readFloatLE),
                    (e.readFloatBE = M.readFloatBE),
                    (e.readDoubleLE = M.readDoubleLE),
                    (e.readDoubleBE = M.readDoubleBE),
                    (e.writeUInt8 = M.writeUInt8),
                    (e.writeUInt16LE = M.writeUInt16LE),
                    (e.writeUInt16BE = M.writeUInt16BE),
                    (e.writeUInt32LE = M.writeUInt32LE),
                    (e.writeUInt32BE = M.writeUInt32BE),
                    (e.writeInt8 = M.writeInt8),
                    (e.writeInt16LE = M.writeInt16LE),
                    (e.writeInt16BE = M.writeInt16BE),
                    (e.writeInt32LE = M.writeInt32LE),
                    (e.writeInt32BE = M.writeInt32BE),
                    (e.writeFloatLE = M.writeFloatLE),
                    (e.writeFloatBE = M.writeFloatBE),
                    (e.writeDoubleLE = M.writeDoubleLE),
                    (e.writeDoubleBE = M.writeDoubleBE),
                    (e.fill = M.fill),
                    (e.inspect = M.inspect),
                    (e.toArrayBuffer = M.toArrayBuffer),
                    e
                  );
                };
              }.call(
                this,
                e("lYpoI2"),
                "undefined" != typeof self
                  ? self
                  : "undefined" != typeof window
                  ? window
                  : {},
                e("buffer").Buffer,
                arguments[3],
                arguments[4],
                arguments[5],
                arguments[6],
                "/node_modules/gulp-browserify/node_modules/buffer/index.js",
                "/node_modules/gulp-browserify/node_modules/buffer"
              ));
            },
            { "base64-js": 2, buffer: 3, ieee754: 10, lYpoI2: 11 },
          ],
          4: [
            function (e, t, n) {
              (function (n, r, o, i, a, s, l, c, u) {
                o = e("buffer").Buffer;
                var f = 4,
                  d = new o(f);
                d.fill(0),
                  (t.exports = {
                    hash: function (e, t, n, r) {
                      for (
                        var i = t(
                            (function (e, t) {
                              e.length % f != 0 &&
                                ((n = e.length + (f - (e.length % f))),
                                (e = o.concat([e, d], n)));
                              for (
                                var n,
                                  r = [],
                                  i = t ? e.readInt32BE : e.readInt32LE,
                                  a = 0;
                                a < e.length;
                                a += f
                              )
                                r.push(i.call(e, a));
                              return r;
                            })((e = o.isBuffer(e) ? e : new o(e)), r),
                            8 * e.length
                          ),
                          a = ((t = r), new o(n)),
                          s = t ? a.writeInt32BE : a.writeInt32LE,
                          l = 0;
                        l < i.length;
                        l++
                      )
                        s.call(a, i[l], 4 * l, !0);
                      return a;
                    },
                  });
              }.call(
                this,
                e("lYpoI2"),
                "undefined" != typeof self
                  ? self
                  : "undefined" != typeof window
                  ? window
                  : {},
                e("buffer").Buffer,
                arguments[3],
                arguments[4],
                arguments[5],
                arguments[6],
                "/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js",
                "/node_modules/gulp-browserify/node_modules/crypto-browserify"
              ));
            },
            { buffer: 3, lYpoI2: 11 },
          ],
          5: [
            function (e, t, n) {
              (function (t, r, o, i, a, s, l, c, u) {
                o = e("buffer").Buffer;
                var f = e("./sha"),
                  d = e("./sha256"),
                  p = e("./rng"),
                  h = { sha1: f, sha256: d, md5: e("./md5") },
                  m = 64,
                  g = new o(m);
                function v(e, t) {
                  var n = h[(e = e || "sha1")],
                    r = [];
                  return (
                    n || y("algorithm:", e, "is not yet supported"),
                    {
                      update: function (e) {
                        return (
                          o.isBuffer(e) || (e = new o(e)),
                          r.push(e),
                          e.length,
                          this
                        );
                      },
                      digest: function (e) {
                        var i = o.concat(r);
                        return (
                          (i = t
                            ? (function (e, t, n) {
                                o.isBuffer(t) || (t = new o(t)),
                                  o.isBuffer(n) || (n = new o(n)),
                                  t.length > m
                                    ? (t = e(t))
                                    : t.length < m && (t = o.concat([t, g], m));
                                for (
                                  var r = new o(m), i = new o(m), a = 0;
                                  a < m;
                                  a++
                                )
                                  (r[a] = 54 ^ t[a]), (i[a] = 92 ^ t[a]);
                                return (
                                  (n = e(o.concat([r, n]))), e(o.concat([i, n]))
                                );
                              })(n, t, i)
                            : n(i)),
                          (r = null),
                          e ? i.toString(e) : i
                        );
                      },
                    }
                  );
                }
                function y() {
                  var e = [].slice.call(arguments).join(" ");
                  throw new Error(
                    [
                      e,
                      "we accept pull requests",
                      "http://github.com/dominictarr/crypto-browserify",
                    ].join("\n")
                  );
                }
                g.fill(0),
                  (n.createHash = function (e) {
                    return v(e);
                  }),
                  (n.createHmac = v),
                  (n.randomBytes = function (e, t) {
                    if (!t || !t.call) return new o(p(e));
                    try {
                      t.call(this, void 0, new o(p(e)));
                    } catch (e) {
                      t(e);
                    }
                  });
                var b,
                  A = [
                    "createCredentials",
                    "createCipher",
                    "createCipheriv",
                    "createDecipher",
                    "createDecipheriv",
                    "createSign",
                    "createVerify",
                    "createDiffieHellman",
                    "pbkdf2",
                  ],
                  B = function (e) {
                    n[e] = function () {
                      y("sorry,", e, "is not implemented yet");
                    };
                  };
                for (b in A) B(A[b], b);
              }.call(
                this,
                e("lYpoI2"),
                "undefined" != typeof self
                  ? self
                  : "undefined" != typeof window
                  ? window
                  : {},
                e("buffer").Buffer,
                arguments[3],
                arguments[4],
                arguments[5],
                arguments[6],
                "/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js",
                "/node_modules/gulp-browserify/node_modules/crypto-browserify"
              ));
            },
            {
              "./md5": 6,
              "./rng": 7,
              "./sha": 8,
              "./sha256": 9,
              buffer: 3,
              lYpoI2: 11,
            },
          ],
          6: [
            function (e, t, n) {
              (function (n, r, o, i, a, s, l, c, u) {
                var f = e("./helpers");
                function d(e, t) {
                  (e[t >> 5] |= 128 << t % 32),
                    (e[14 + (((t + 64) >>> 9) << 4)] = t);
                  for (
                    var n = 1732584193,
                      r = -271733879,
                      o = -1732584194,
                      i = 271733878,
                      a = 0;
                    a < e.length;
                    a += 16
                  ) {
                    var s = n,
                      l = r,
                      c = o,
                      u = i;
                    (n = h(n, r, o, i, e[a + 0], 7, -680876936)),
                      (i = h(i, n, r, o, e[a + 1], 12, -389564586)),
                      (o = h(o, i, n, r, e[a + 2], 17, 606105819)),
                      (r = h(r, o, i, n, e[a + 3], 22, -1044525330)),
                      (n = h(n, r, o, i, e[a + 4], 7, -176418897)),
                      (i = h(i, n, r, o, e[a + 5], 12, 1200080426)),
                      (o = h(o, i, n, r, e[a + 6], 17, -1473231341)),
                      (r = h(r, o, i, n, e[a + 7], 22, -45705983)),
                      (n = h(n, r, o, i, e[a + 8], 7, 1770035416)),
                      (i = h(i, n, r, o, e[a + 9], 12, -1958414417)),
                      (o = h(o, i, n, r, e[a + 10], 17, -42063)),
                      (r = h(r, o, i, n, e[a + 11], 22, -1990404162)),
                      (n = h(n, r, o, i, e[a + 12], 7, 1804603682)),
                      (i = h(i, n, r, o, e[a + 13], 12, -40341101)),
                      (o = h(o, i, n, r, e[a + 14], 17, -1502002290)),
                      (n = m(
                        n,
                        (r = h(r, o, i, n, e[a + 15], 22, 1236535329)),
                        o,
                        i,
                        e[a + 1],
                        5,
                        -165796510
                      )),
                      (i = m(i, n, r, o, e[a + 6], 9, -1069501632)),
                      (o = m(o, i, n, r, e[a + 11], 14, 643717713)),
                      (r = m(r, o, i, n, e[a + 0], 20, -373897302)),
                      (n = m(n, r, o, i, e[a + 5], 5, -701558691)),
                      (i = m(i, n, r, o, e[a + 10], 9, 38016083)),
                      (o = m(o, i, n, r, e[a + 15], 14, -660478335)),
                      (r = m(r, o, i, n, e[a + 4], 20, -405537848)),
                      (n = m(n, r, o, i, e[a + 9], 5, 568446438)),
                      (i = m(i, n, r, o, e[a + 14], 9, -1019803690)),
                      (o = m(o, i, n, r, e[a + 3], 14, -187363961)),
                      (r = m(r, o, i, n, e[a + 8], 20, 1163531501)),
                      (n = m(n, r, o, i, e[a + 13], 5, -1444681467)),
                      (i = m(i, n, r, o, e[a + 2], 9, -51403784)),
                      (o = m(o, i, n, r, e[a + 7], 14, 1735328473)),
                      (n = g(
                        n,
                        (r = m(r, o, i, n, e[a + 12], 20, -1926607734)),
                        o,
                        i,
                        e[a + 5],
                        4,
                        -378558
                      )),
                      (i = g(i, n, r, o, e[a + 8], 11, -2022574463)),
                      (o = g(o, i, n, r, e[a + 11], 16, 1839030562)),
                      (r = g(r, o, i, n, e[a + 14], 23, -35309556)),
                      (n = g(n, r, o, i, e[a + 1], 4, -1530992060)),
                      (i = g(i, n, r, o, e[a + 4], 11, 1272893353)),
                      (o = g(o, i, n, r, e[a + 7], 16, -155497632)),
                      (r = g(r, o, i, n, e[a + 10], 23, -1094730640)),
                      (n = g(n, r, o, i, e[a + 13], 4, 681279174)),
                      (i = g(i, n, r, o, e[a + 0], 11, -358537222)),
                      (o = g(o, i, n, r, e[a + 3], 16, -722521979)),
                      (r = g(r, o, i, n, e[a + 6], 23, 76029189)),
                      (n = g(n, r, o, i, e[a + 9], 4, -640364487)),
                      (i = g(i, n, r, o, e[a + 12], 11, -421815835)),
                      (o = g(o, i, n, r, e[a + 15], 16, 530742520)),
                      (n = v(
                        n,
                        (r = g(r, o, i, n, e[a + 2], 23, -995338651)),
                        o,
                        i,
                        e[a + 0],
                        6,
                        -198630844
                      )),
                      (i = v(i, n, r, o, e[a + 7], 10, 1126891415)),
                      (o = v(o, i, n, r, e[a + 14], 15, -1416354905)),
                      (r = v(r, o, i, n, e[a + 5], 21, -57434055)),
                      (n = v(n, r, o, i, e[a + 12], 6, 1700485571)),
                      (i = v(i, n, r, o, e[a + 3], 10, -1894986606)),
                      (o = v(o, i, n, r, e[a + 10], 15, -1051523)),
                      (r = v(r, o, i, n, e[a + 1], 21, -2054922799)),
                      (n = v(n, r, o, i, e[a + 8], 6, 1873313359)),
                      (i = v(i, n, r, o, e[a + 15], 10, -30611744)),
                      (o = v(o, i, n, r, e[a + 6], 15, -1560198380)),
                      (r = v(r, o, i, n, e[a + 13], 21, 1309151649)),
                      (n = v(n, r, o, i, e[a + 4], 6, -145523070)),
                      (i = v(i, n, r, o, e[a + 11], 10, -1120210379)),
                      (o = v(o, i, n, r, e[a + 2], 15, 718787259)),
                      (r = v(r, o, i, n, e[a + 9], 21, -343485551)),
                      (n = y(n, s)),
                      (r = y(r, l)),
                      (o = y(o, c)),
                      (i = y(i, u));
                  }
                  return Array(n, r, o, i);
                }
                function p(e, t, n, r, o, i) {
                  return y(
                    ((t = y(y(t, e), y(r, i))) << o) | (t >>> (32 - o)),
                    n
                  );
                }
                function h(e, t, n, r, o, i, a) {
                  return p((t & n) | (~t & r), e, t, o, i, a);
                }
                function m(e, t, n, r, o, i, a) {
                  return p((t & r) | (n & ~r), e, t, o, i, a);
                }
                function g(e, t, n, r, o, i, a) {
                  return p(t ^ n ^ r, e, t, o, i, a);
                }
                function v(e, t, n, r, o, i, a) {
                  return p(n ^ (t | ~r), e, t, o, i, a);
                }
                function y(e, t) {
                  var n = (65535 & e) + (65535 & t);
                  return (
                    (((e >> 16) + (t >> 16) + (n >> 16)) << 16) | (65535 & n)
                  );
                }
                t.exports = function (e) {
                  return f.hash(e, d, 16);
                };
              }.call(
                this,
                e("lYpoI2"),
                "undefined" != typeof self
                  ? self
                  : "undefined" != typeof window
                  ? window
                  : {},
                e("buffer").Buffer,
                arguments[3],
                arguments[4],
                arguments[5],
                arguments[6],
                "/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js",
                "/node_modules/gulp-browserify/node_modules/crypto-browserify"
              ));
            },
            { "./helpers": 4, buffer: 3, lYpoI2: 11 },
          ],
          7: [
            function (e, t, n) {
              (function (e, n, r, o, i, a, s, l, c) {
                var u;
                t.exports =
                  u ||
                  function (e) {
                    for (var t, n = new Array(e), r = 0; r < e; r++)
                      0 == (3 & r) && (t = 4294967296 * Math.random()),
                        (n[r] = (t >>> ((3 & r) << 3)) & 255);
                    return n;
                  };
              }.call(
                this,
                e("lYpoI2"),
                "undefined" != typeof self
                  ? self
                  : "undefined" != typeof window
                  ? window
                  : {},
                e("buffer").Buffer,
                arguments[3],
                arguments[4],
                arguments[5],
                arguments[6],
                "/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js",
                "/node_modules/gulp-browserify/node_modules/crypto-browserify"
              ));
            },
            { buffer: 3, lYpoI2: 11 },
          ],
          8: [
            function (e, t, n) {
              (function (n, r, o, i, a, s, l, c, u) {
                var f = e("./helpers");
                function d(e, t) {
                  (e[t >> 5] |= 128 << (24 - (t % 32))),
                    (e[15 + (((t + 64) >> 9) << 4)] = t);
                  for (
                    var n,
                      r,
                      o,
                      i = Array(80),
                      a = 1732584193,
                      s = -271733879,
                      l = -1732584194,
                      c = 271733878,
                      u = -1009589776,
                      f = 0;
                    f < e.length;
                    f += 16
                  ) {
                    for (
                      var d = a, m = s, g = l, v = c, y = u, b = 0;
                      b < 80;
                      b++
                    ) {
                      i[b] =
                        b < 16
                          ? e[f + b]
                          : h(i[b - 3] ^ i[b - 8] ^ i[b - 14] ^ i[b - 16], 1);
                      var A = p(
                        p(
                          h(a, 5),
                          ((A = s),
                          (r = l),
                          (o = c),
                          (n = b) < 20
                            ? (A & r) | (~A & o)
                            : !(n < 40) && n < 60
                            ? (A & r) | (A & o) | (r & o)
                            : A ^ r ^ o)
                        ),
                        p(
                          p(u, i[b]),
                          (n = b) < 20
                            ? 1518500249
                            : n < 40
                            ? 1859775393
                            : n < 60
                            ? -1894007588
                            : -899497514
                        )
                      );
                      (u = c), (c = l), (l = h(s, 30)), (s = a), (a = A);
                    }
                    (a = p(a, d)),
                      (s = p(s, m)),
                      (l = p(l, g)),
                      (c = p(c, v)),
                      (u = p(u, y));
                  }
                  return Array(a, s, l, c, u);
                }
                function p(e, t) {
                  var n = (65535 & e) + (65535 & t);
                  return (
                    (((e >> 16) + (t >> 16) + (n >> 16)) << 16) | (65535 & n)
                  );
                }
                function h(e, t) {
                  return (e << t) | (e >>> (32 - t));
                }
                t.exports = function (e) {
                  return f.hash(e, d, 20, !0);
                };
              }.call(
                this,
                e("lYpoI2"),
                "undefined" != typeof self
                  ? self
                  : "undefined" != typeof window
                  ? window
                  : {},
                e("buffer").Buffer,
                arguments[3],
                arguments[4],
                arguments[5],
                arguments[6],
                "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js",
                "/node_modules/gulp-browserify/node_modules/crypto-browserify"
              ));
            },
            { "./helpers": 4, buffer: 3, lYpoI2: 11 },
          ],
          9: [
            function (e, t, n) {
              (function (n, r, o, i, a, s, l, c, u) {
                function f(e, t) {
                  var n = (65535 & e) + (65535 & t);
                  return (
                    (((e >> 16) + (t >> 16) + (n >> 16)) << 16) | (65535 & n)
                  );
                }
                function d(e, t) {
                  var n,
                    r = new Array(
                      1116352408,
                      1899447441,
                      3049323471,
                      3921009573,
                      961987163,
                      1508970993,
                      2453635748,
                      2870763221,
                      3624381080,
                      310598401,
                      607225278,
                      1426881987,
                      1925078388,
                      2162078206,
                      2614888103,
                      3248222580,
                      3835390401,
                      4022224774,
                      264347078,
                      604807628,
                      770255983,
                      1249150122,
                      1555081692,
                      1996064986,
                      2554220882,
                      2821834349,
                      2952996808,
                      3210313671,
                      3336571891,
                      3584528711,
                      113926993,
                      338241895,
                      666307205,
                      773529912,
                      1294757372,
                      1396182291,
                      1695183700,
                      1986661051,
                      2177026350,
                      2456956037,
                      2730485921,
                      2820302411,
                      3259730800,
                      3345764771,
                      3516065817,
                      3600352804,
                      4094571909,
                      275423344,
                      430227734,
                      506948616,
                      659060556,
                      883997877,
                      958139571,
                      1322822218,
                      1537002063,
                      1747873779,
                      1955562222,
                      2024104815,
                      2227730452,
                      2361852424,
                      2428436474,
                      2756734187,
                      3204031479,
                      3329325298
                    ),
                    o = new Array(
                      1779033703,
                      3144134277,
                      1013904242,
                      2773480762,
                      1359893119,
                      2600822924,
                      528734635,
                      1541459225
                    ),
                    i = new Array(64);
                  (e[t >> 5] |= 128 << (24 - (t % 32))),
                    (e[15 + (((t + 64) >> 9) << 4)] = t);
                  for (var a, s, l = 0; l < e.length; l += 16) {
                    for (
                      var c = o[0],
                        u = o[1],
                        d = o[2],
                        p = o[3],
                        g = o[4],
                        v = o[5],
                        y = o[6],
                        b = o[7],
                        A = 0;
                      A < 64;
                      A++
                    )
                      (i[A] =
                        A < 16
                          ? e[A + l]
                          : f(
                              f(
                                f(
                                  ((s = i[A - 2]),
                                  h(s, 17) ^ h(s, 19) ^ m(s, 10)),
                                  i[A - 7]
                                ),
                                ((s = i[A - 15]), h(s, 7) ^ h(s, 18) ^ m(s, 3))
                              ),
                              i[A - 16]
                            )),
                        (n = f(
                          f(
                            f(
                              f(b, h((s = g), 6) ^ h(s, 11) ^ h(s, 25)),
                              (g & v) ^ (~g & y)
                            ),
                            r[A]
                          ),
                          i[A]
                        )),
                        (a = f(
                          h((a = c), 2) ^ h(a, 13) ^ h(a, 22),
                          (c & u) ^ (c & d) ^ (u & d)
                        )),
                        (b = y),
                        (y = v),
                        (v = g),
                        (g = f(p, n)),
                        (p = d),
                        (d = u),
                        (u = c),
                        (c = f(n, a));
                    (o[0] = f(c, o[0])),
                      (o[1] = f(u, o[1])),
                      (o[2] = f(d, o[2])),
                      (o[3] = f(p, o[3])),
                      (o[4] = f(g, o[4])),
                      (o[5] = f(v, o[5])),
                      (o[6] = f(y, o[6])),
                      (o[7] = f(b, o[7]));
                  }
                  return o;
                }
                var p = e("./helpers"),
                  h = function (e, t) {
                    return (e >>> t) | (e << (32 - t));
                  },
                  m = function (e, t) {
                    return e >>> t;
                  };
                t.exports = function (e) {
                  return p.hash(e, d, 32, !0);
                };
              }.call(
                this,
                e("lYpoI2"),
                "undefined" != typeof self
                  ? self
                  : "undefined" != typeof window
                  ? window
                  : {},
                e("buffer").Buffer,
                arguments[3],
                arguments[4],
                arguments[5],
                arguments[6],
                "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js",
                "/node_modules/gulp-browserify/node_modules/crypto-browserify"
              ));
            },
            { "./helpers": 4, buffer: 3, lYpoI2: 11 },
          ],
          10: [
            function (e, t, n) {
              (function (e, t, r, o, i, a, s, l, c) {
                (n.read = function (e, t, n, r, o) {
                  var i,
                    a,
                    s = 8 * o - r - 1,
                    l = (1 << s) - 1,
                    c = l >> 1,
                    u = -7,
                    f = n ? o - 1 : 0,
                    d = n ? -1 : 1;
                  for (
                    o = e[t + f],
                      f += d,
                      i = o & ((1 << -u) - 1),
                      o >>= -u,
                      u += s;
                    0 < u;
                    i = 256 * i + e[t + f], f += d, u -= 8
                  );
                  for (
                    a = i & ((1 << -u) - 1), i >>= -u, u += r;
                    0 < u;
                    a = 256 * a + e[t + f], f += d, u -= 8
                  );
                  if (0 === i) i = 1 - c;
                  else {
                    if (i === l) return a ? NaN : (1 / 0) * (o ? -1 : 1);
                    (a += Math.pow(2, r)), (i -= c);
                  }
                  return (o ? -1 : 1) * a * Math.pow(2, i - r);
                }),
                  (n.write = function (e, t, n, r, o, i) {
                    var a,
                      s,
                      l = 8 * i - o - 1,
                      c = (1 << l) - 1,
                      u = c >> 1,
                      f = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                      d = r ? 0 : i - 1,
                      p = r ? 1 : -1;
                    for (
                      i = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0,
                        t = Math.abs(t),
                        isNaN(t) || t === 1 / 0
                          ? ((s = isNaN(t) ? 1 : 0), (a = c))
                          : ((a = Math.floor(Math.log(t) / Math.LN2)),
                            t * (r = Math.pow(2, -a)) < 1 && (a--, (r *= 2)),
                            2 <=
                              (t +=
                                1 <= a + u ? f / r : f * Math.pow(2, 1 - u)) *
                                r && (a++, (r /= 2)),
                            c <= a + u
                              ? ((s = 0), (a = c))
                              : 1 <= a + u
                              ? ((s = (t * r - 1) * Math.pow(2, o)), (a += u))
                              : ((s = t * Math.pow(2, u - 1) * Math.pow(2, o)),
                                (a = 0)));
                      8 <= o;
                      e[n + d] = 255 & s, d += p, s /= 256, o -= 8
                    );
                    for (
                      a = (a << o) | s, l += o;
                      0 < l;
                      e[n + d] = 255 & a, d += p, a /= 256, l -= 8
                    );
                    e[n + d - p] |= 128 * i;
                  });
              }.call(
                this,
                e("lYpoI2"),
                "undefined" != typeof self
                  ? self
                  : "undefined" != typeof window
                  ? window
                  : {},
                e("buffer").Buffer,
                arguments[3],
                arguments[4],
                arguments[5],
                arguments[6],
                "/node_modules/gulp-browserify/node_modules/ieee754/index.js",
                "/node_modules/gulp-browserify/node_modules/ieee754"
              ));
            },
            { buffer: 3, lYpoI2: 11 },
          ],
          11: [
            function (e, t, n) {
              (function (e, n, r, o, i, a, s, l, c) {
                var u, f, d;
                function p() {}
                ((e = t.exports = {}).nextTick =
                  ((f = "undefined" != typeof window && window.setImmediate),
                  (d =
                    "undefined" != typeof window &&
                    window.postMessage &&
                    window.addEventListener),
                  f
                    ? function (e) {
                        return window.setImmediate(e);
                      }
                    : d
                    ? ((u = []),
                      window.addEventListener(
                        "message",
                        function (e) {
                          var t = e.source;
                          (t !== window && null !== t) ||
                            "process-tick" !== e.data ||
                            (e.stopPropagation(), 0 < u.length && u.shift()());
                        },
                        !0
                      ),
                      function (e) {
                        u.push(e), window.postMessage("process-tick", "*");
                      })
                    : function (e) {
                        setTimeout(e, 0);
                      })),
                  (e.title = "browser"),
                  (e.browser = !0),
                  (e.env = {}),
                  (e.argv = []),
                  (e.on = p),
                  (e.addListener = p),
                  (e.once = p),
                  (e.off = p),
                  (e.removeListener = p),
                  (e.removeAllListeners = p),
                  (e.emit = p),
                  (e.binding = function (e) {
                    throw new Error("process.binding is not supported");
                  }),
                  (e.cwd = function () {
                    return "/";
                  }),
                  (e.chdir = function (e) {
                    throw new Error("process.chdir is not supported");
                  });
              }.call(
                this,
                e("lYpoI2"),
                "undefined" != typeof self
                  ? self
                  : "undefined" != typeof window
                  ? window
                  : {},
                e("buffer").Buffer,
                arguments[3],
                arguments[4],
                arguments[5],
                arguments[6],
                "/node_modules/gulp-browserify/node_modules/process/browser.js",
                "/node_modules/gulp-browserify/node_modules/process"
              ));
            },
            { buffer: 3, lYpoI2: 11 },
          ],
        },
        {},
        [1]
      )(1);
    },
    14671: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(67294);
      function o(e) {
        let t;
        const n = new Set(),
          r = (e, r) => {
            const o = "function" === typeof e ? e(t) : e;
            if (o !== t) {
              const e = t;
              (t = r ? o : Object.assign({}, t, o)), n.forEach((n) => n(t, e));
            }
          },
          o = () => t,
          i = {
            setState: r,
            getState: o,
            subscribe: (e, r, i) =>
              r || i
                ? ((e, r = o, i = Object.is) => {
                    console.warn(
                      "[DEPRECATED] Please use `subscribeWithSelector` middleware"
                    );
                    let a = r(t);
                    function s() {
                      const n = r(t);
                      if (!i(a, n)) {
                        const t = a;
                        e((a = n), t);
                      }
                    }
                    return n.add(s), () => n.delete(s);
                  })(e, r, i)
                : (n.add(e), () => n.delete(e)),
            destroy: () => n.clear(),
          };
        return (t = e(r, o, i)), i;
      }
      const i =
        "undefined" === typeof window ||
        !window.navigator ||
        /ServerSideRendering|^Deno\//.test(window.navigator.userAgent)
          ? r.useEffect
          : r.useLayoutEffect;
      function a(e) {
        const t = "function" === typeof e ? o(e) : e,
          n = (e = t.getState, n = Object.is) => {
            const [, o] = (0, r.useReducer)((e) => e + 1, 0),
              a = t.getState(),
              s = (0, r.useRef)(a),
              l = (0, r.useRef)(e),
              c = (0, r.useRef)(n),
              u = (0, r.useRef)(!1),
              f = (0, r.useRef)();
            let d;
            void 0 === f.current && (f.current = e(a));
            let p = !1;
            (s.current !== a ||
              l.current !== e ||
              c.current !== n ||
              u.current) &&
              ((d = e(a)), (p = !n(f.current, d))),
              i(() => {
                p && (f.current = d),
                  (s.current = a),
                  (l.current = e),
                  (c.current = n),
                  (u.current = !1);
              });
            const h = (0, r.useRef)(a);
            i(() => {
              const e = () => {
                  try {
                    const e = t.getState(),
                      n = l.current(e);
                    c.current(f.current, n) ||
                      ((s.current = e), (f.current = n), o());
                  } catch (e) {
                    (u.current = !0), o();
                  }
                },
                n = t.subscribe(e);
              return t.getState() !== h.current && e(), n;
            }, []);
            const m = p ? d : f.current;
            return (0, r.useDebugValue)(m), m;
          };
        return (
          Object.assign(n, t),
          (n[Symbol.iterator] = function () {
            console.warn(
              "[useStore, api] = create() is deprecated and will be removed in v4"
            );
            const e = [n, t];
            return {
              next() {
                const t = e.length <= 0;
                return { value: e.shift(), done: t };
              },
            };
          }),
          n
        );
      }
    },
    87462: function (e, t, n) {
      "use strict";
      function r() {
        return (r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
  },
]);
