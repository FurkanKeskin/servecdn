/*
 * Moyasar Payment Form v1.11.0
 * (c) 2020-2023 Moyasar Ltd.
 */
var r, n;
r = this, n = function() {
	return function() {
		var r = {
				629: function(r, n, t) {
					t.d(n, {
						default: function() {
							return nt
						}
					}), t(624), t(280), t(70);
					var i = function(r) {
							var n = this.constructor;
							return this.then((function(t) {
								return n.resolve(r()).then((function() {
									return t
								}))
							}), (function(t) {
								return n.resolve(r()).then((function() {
									return n.reject(t)
								}))
							}))
						},
						o = function(r) {
							return new this((function(n, t) {
								if (!r || "undefined" === typeof r.length) return t(new TypeError(typeof r + " " + r + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
								var i = Array.prototype.slice.call(r);
								if (0 === i.length) return n([]);
								var o = i.length;

								function e(r, t) {
									if (t && ("object" === typeof t || "function" === typeof t)) {
										var u = t.then;
										if ("function" === typeof u) return void u.call(t, (function(n) {
											e(r, n)
										}), (function(t) {
											i[r] = {
												status: "rejected",
												reason: t
											}, 0 === --o && n(i)
										}))
									}
									i[r] = {
										status: "fulfilled",
										value: t
									}, 0 === --o && n(i)
								}
								for (var u = 0; u < i.length; u++) e(u, i[u])
							}))
						},
						e = setTimeout,
						u = "undefined" !== typeof setImmediate ? setImmediate : null;

					function c(r) {
						return Boolean(r && "undefined" !== typeof r.length)
					}

					function s() {}

					function a(r) {
						if (!(this instanceof a)) throw new TypeError("Promises must be constructed via new");
						if ("function" !== typeof r) throw new TypeError("not a function");
						this.t = 0, this.i = !1, this.u = void 0, this.m = [], p(r, this)
					}

					function l(r, n) {
						for (; 3 === r.t;) r = r.u;
						0 !== r.t ? (r.i = !0, a.h((function() {
							var t = 1 === r.t ? n.onFulfilled : n.onRejected;
							if (null !== t) {
								var i;
								try {
									i = t(r.u)
								} catch (A) {
									return void m(n.promise, A)
								}
								f(n.promise, i)
							} else(1 === r.t ? f : m)(n.promise, r.u)
						}))) : r.m.push(n)
					}

					function f(r, n) {
						try {
							if (n === r) throw new TypeError("A promise cannot be resolved with itself.");
							if (n && ("object" === typeof n || "function" === typeof n)) {
								var t = n.then;
								if (n instanceof a) return r.t = 3, r.u = n, void d(r);
								if ("function" === typeof t) return void p((i = t, o = n, function() {
									i.apply(o, arguments)
								}), r)
							}
							r.t = 1, r.u = n, d(r)
						} catch (A) {
							m(r, A)
						}
						var i, o
					}

					function m(r, n) {
						r.t = 2, r.u = n, d(r)
					}

					function d(r) {
						2 === r.t && 0 === r.m.length && a.h((function() {
							r.i || a.p(r.u)
						}));
						for (var n = 0, t = r.m.length; n < t; n++) l(r, r.m[n]);
						r.m = null
					}

					function h(r, n, t) {
						this.onFulfilled = "function" === typeof r ? r : null, this.onRejected = "function" === typeof n ? n : null, this.promise = t
					}

					function p(r, n) {
						var t = !1;
						try {
							r((function(r) {
								t || (t = !0, f(n, r))
							}), (function(r) {
								t || (t = !0, m(n, r))
							}))
						} catch (i) {
							if (t) return;
							t = !0, m(n, i)
						}
					}
					a.prototype.catch = function(r) {
						return this.then(null, r)
					}, a.prototype.then = function(r, n) {
						var t = new this.constructor(s);
						return l(this, new h(r, n, t)), t
					}, a.prototype.finally = i, a.all = function(r) {
						return new a((function(n, t) {
							if (!c(r)) return t(new TypeError("Promise.all accepts an array"));
							var i = Array.prototype.slice.call(r);
							if (0 === i.length) return n([]);
							var o = i.length;

							function e(r, u) {
								try {
									if (u && ("object" === typeof u || "function" === typeof u)) {
										var c = u.then;
										if ("function" === typeof c) return void c.call(u, (function(n) {
											e(r, n)
										}), t)
									}
									i[r] = u, 0 === --o && n(i)
								} catch (s) {
									t(s)
								}
							}
							for (var u = 0; u < i.length; u++) e(u, i[u])
						}))
					}, a.allSettled = o, a.resolve = function(r) {
						return r && "object" === typeof r && r.constructor === a ? r : new a((function(n) {
							n(r)
						}))
					}, a.reject = function(r) {
						return new a((function(n, t) {
							t(r)
						}))
					}, a.race = function(r) {
						return new a((function(n, t) {
							if (!c(r)) return t(new TypeError("Promise.race accepts an array"));
							for (var i = 0, o = r.length; i < o; i++) a.resolve(r[i]).then(n, t)
						}))
					}, a.h = "function" === typeof u && function(r) {
						u(r)
					} || function(r) {
						e(r, 0)
					}, a.p = function(r) {
						"undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", r)
					};
					var _ = a,
						y = function() {
							if ("undefined" !== typeof self) return self;
							if ("undefined" !== typeof window) return window;
							if ("undefined" !== typeof t.g) return t.g;
							throw new Error("unable to locate global object")
						}();
					"function" !== typeof y.Promise ? y.Promise = _ : (y.Promise.prototype.finally || (y.Promise.prototype.finally = i), y.Promise.allSettled || (y.Promise.allSettled = o));
					var v, b, w, g, O, j, P, I, A = {},
						C = [],
						k = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

					function E(r, n) {
						for (var t in n) r[t] = n[t];
						return r
					}

					function S(r) {
						var n = r.parentNode;
						n && n.removeChild(r)
					}

					function x(r, n, t) {
						var i, o, e, u = {};
						for (e in n) "key" == e ? i = n[e] : "ref" == e ? o = n[e] : u[e] = n[e];
						if (arguments.length > 2 && (u.children = arguments.length > 3 ? v.call(arguments, 2) : t), "function" == typeof r && null != r.defaultProps)
							for (e in r.defaultProps) void 0 === u[e] && (u[e] = r.defaultProps[e]);
						return T(r, u, i, o, null)
					}

					function T(r, n, t, i, o) {
						var e = {
							type: r,
							props: n,
							key: t,
							ref: i,
							_: null,
							v: null,
							O: 0,
							j: null,
							P: void 0,
							I: null,
							A: null,
							constructor: void 0,
							C: null == o ? ++w : o
						};
						return null == o && null != b.vnode && b.vnode(e), e
					}

					function M(r) {
						return r.children
					}

					function q(r, n) {
						this.props = r, this.context = n
					}

					function F(r, n) {
						if (null == n) return r.v ? F(r.v, r.v._.indexOf(r) + 1) : null;
						for (var t; n < r._.length; n++)
							if (null != (t = r._[n]) && null != t.j) return t.j;
						return "function" == typeof r.type ? F(r) : null
					}

					function R(r) {
						var n, t;
						if (null != (r = r.v) && null != r.I) {
							for (r.j = r.I.base = null, n = 0; n < r._.length; n++)
								if (null != (t = r._[n]) && null != t.j) {
									r.j = r.I.base = t.j;
									break
								} return R(r)
						}
					}

					function L(r) {
						(!r.P && (r.P = !0) && O.push(r) && !D.k++ || P !== b.debounceRendering) && ((P = b.debounceRendering) || j)(D)
					}

					function D() {
						for (var r; D.k = O.length;) r = O.sort((function(r, n) {
							return r.C.O - n.C.O
						})), O = [], r.some((function(r) {
							var n, t, i, o, e, u;
							r.P && (e = (o = (n = r).C).j, (u = n.S) && (t = [], (i = E({}, o)).C = o.C + 1, U(u, o, i, n.T, void 0 !== u.ownerSVGElement, null != o.A ? [e] : null, t, null == e ? F(o) : e, o.A), W(t, o), o.j != e && R(o)))
						}))
					}

					function B(r, n, t, i, o, e, u, c, s, a) {
						var l, f, m, d, h, p, _, y = i && i._ || C,
							v = y.length;
						for (t._ = [], l = 0; l < n.length; l++)
							if (null != (d = t._[l] = null == (d = n[l]) || "boolean" == typeof d ? null : "string" == typeof d || "number" == typeof d || "bigint" == typeof d ? T(null, d, null, null, d) : Array.isArray(d) ? T(M, {
									children: d
								}, null, null, null) : d.O > 0 ? T(d.type, d.props, d.key, null, d.C) : d)) {
								if (d.v = t, d.O = t.O + 1, null === (m = y[l]) || m && d.key == m.key && d.type === m.type) y[l] = void 0;
								else
									for (f = 0; f < v; f++) {
										if ((m = y[f]) && d.key == m.key && d.type === m.type) {
											y[f] = void 0;
											break
										}
										m = null
									}
								U(r, d, m = m || A, o, e, u, c, s, a), h = d.j, (f = d.ref) && m.ref != f && (_ || (_ = []), m.ref && _.push(m.ref, null, d), _.push(f, d.I || h, d)), null != h ? (null == p && (p = h), "function" == typeof d.type && d._ === m._ ? d.P = s = H(d, s, r) : s = N(r, d, m, y, h, s), "function" == typeof t.type && (t.P = s)) : s && m.j == s && s.parentNode != r && (s = F(m))
							} for (t.j = p, l = v; l--;) null != y[l] && ("function" == typeof t.type && null != y[l].j && y[l].j == t.P && (t.P = F(i, l + 1)), Z(y[l], y[l]));
						if (_)
							for (l = 0; l < _.length; l++) Y(_[l], _[++l], _[++l])
					}

					function H(r, n, t) {
						for (var i, o = r._, e = 0; o && e < o.length; e++)(i = o[e]) && (i.v = r, n = "function" == typeof i.type ? H(i, n, t) : N(t, i, i, o, i.j, n));
						return n
					}

					function N(r, n, t, i, o, e) {
						var u, c, s;
						if (void 0 !== n.P) u = n.P, n.P = void 0;
						else if (null == t || o != e || null == o.parentNode) r: if (null == e || e.parentNode !== r) r.appendChild(o), u = null;
							else {
								for (c = e, s = 0;
									(c = c.nextSibling) && s < i.length; s += 2)
									if (c == o) break r;
								r.insertBefore(o, e), u = e
							} return void 0 !== u ? u : o.nextSibling
					}

					function $(r, n, t) {
						"-" === n[0] ? r.setProperty(n, t) : r[n] = null == t ? "" : "number" != typeof t || k.test(n) ? t : t + "px"
					}

					function G(r, n, t, i, o) {
						var e;
						r: if ("style" === n)
							if ("string" == typeof t) r.style.cssText = t;
							else {
								if ("string" == typeof i && (r.style.cssText = i = ""), i)
									for (n in i) t && n in t || $(r.style, n, "");
								if (t)
									for (n in t) i && t[n] === i[n] || $(r.style, n, t[n])
							}
						else if ("o" === n[0] && "n" === n[1]) e = n !== (n = n.replace(/Capture$/, "")), n = n.toLowerCase() in r ? n.toLowerCase().slice(2) : n.slice(2), r.l || (r.l = {}), r.l[n + e] = t, t ? i || r.addEventListener(n, e ? K : V, e) : r.removeEventListener(n, e ? K : V, e);
						else if ("dangerouslySetInnerHTML" !== n) {
							if (o) n = n.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
							else if ("href" !== n && "list" !== n && "form" !== n && "tabIndex" !== n && "download" !== n && n in r) try {
								r[n] = null == t ? "" : t;
								break r
							} catch (r) {}
							"function" == typeof t || (null != t && (!1 !== t || "a" === n[0] && "r" === n[1]) ? r.setAttribute(n, t) : r.removeAttribute(n))
						}
					}

					function V(r) {
						this.l[r.type + !1](b.event ? b.event(r) : r)
					}

					function K(r) {
						this.l[r.type + !0](b.event ? b.event(r) : r)
					}

					function U(r, n, t, i, o, e, u, c, s) {
						var a, l, f, m, d, h, p, _, y, v, w, g = n.type;
						if (void 0 !== n.constructor) return null;
						null != t.A && (s = t.A, c = n.j = t.j, n.A = null, e = [c]), (a = b.O) && a(n);
						try {
							r: if ("function" == typeof g) {
								if (_ = n.props, y = (a = g.contextType) && i[a.I], v = a ? y ? y.props.value : a.v : i, t.I ? p = (l = n.I = t.I).v = l.M : ("prototype" in g && g.prototype.render ? n.I = l = new g(_, v) : (n.I = l = new q(_, v), l.constructor = g, l.render = J), y && y.sub(l), l.props = _, l.state || (l.state = {}), l.context = v, l.T = i, f = l.P = !0, l.A = []), null == l.q && (l.q = l.state), null != g.getDerivedStateFromProps && (l.q == l.state && (l.q = E({}, l.q)), E(l.q, g.getDerivedStateFromProps(_, l.q))), m = l.props, d = l.state, f) null == g.getDerivedStateFromProps && null != l.componentWillMount && l.componentWillMount(), null != l.componentDidMount && l.A.push(l.componentDidMount);
								else {
									if (null == g.getDerivedStateFromProps && _ !== m && null != l.componentWillReceiveProps && l.componentWillReceiveProps(_, v), !l.j && null != l.shouldComponentUpdate && !1 === l.shouldComponentUpdate(_, l.q, v) || n.C === t.C) {
										l.props = _, l.state = l.q, n.C !== t.C && (l.P = !1), l.C = n, n.j = t.j, n._ = t._, n._.forEach((function(r) {
											r && (r.v = n)
										})), l.A.length && u.push(l);
										break r
									}
									null != l.componentWillUpdate && l.componentWillUpdate(_, l.q, v), null != l.componentDidUpdate && l.A.push((function() {
										l.componentDidUpdate(m, d, h)
									}))
								}
								l.context = v, l.props = _, l.state = l.q, (a = b.k) && a(n), l.P = !1, l.C = n, l.S = r, a = l.render(l.props, l.state, l.context), l.state = l.q, null != l.getChildContext && (i = E(E({}, i), l.getChildContext())), f || null == l.getSnapshotBeforeUpdate || (h = l.getSnapshotBeforeUpdate(m, d)), w = null != a && a.type === M && null == a.key ? a.props.children : a, B(r, Array.isArray(w) ? w : [w], n, t, i, o, e, u, c, s), l.base = n.j, n.A = null, l.A.length && u.push(l), p && (l.M = l.v = null), l.j = !1
							} else null == e && n.C === t.C ? (n._ = t._, n.j = t.j) : n.j = z(t.j, n, t, i, o, e, u, s);
							(a = b.diffed) && a(n)
						}
						catch (r) {
							n.C = null, (s || null != e) && (n.j = c, n.A = !!s, e[e.indexOf(c)] = null), b.j(r, n, t)
						}
					}

					function W(r, n) {
						b.I && b.I(n, r), r.some((function(n) {
							try {
								r = n.A, n.A = [], r.some((function(r) {
									r.call(n)
								}))
							} catch (r) {
								b.j(r, n.C)
							}
						}))
					}

					function z(r, n, t, i, o, e, u, c) {
						var s, a, l, f = t.props,
							m = n.props,
							d = n.type,
							h = 0;
						if ("svg" === d && (o = !0), null != e)
							for (; h < e.length; h++)
								if ((s = e[h]) && "setAttribute" in s == !!d && (d ? s.localName === d : 3 === s.nodeType)) {
									r = s, e[h] = null;
									break
								} if (null == r) {
							if (null === d) return document.createTextNode(m);
							r = o ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, m.is && m), e = null, c = !1
						}
						if (null === d) f === m || c && r.data === m || (r.data = m);
						else {
							if (e = e && v.call(r.childNodes), a = (f = t.props || A).dangerouslySetInnerHTML, l = m.dangerouslySetInnerHTML, !c) {
								if (null != e)
									for (f = {}, h = 0; h < r.attributes.length; h++) f[r.attributes[h].name] = r.attributes[h].value;
								(l || a) && (l && (a && l.F == a.F || l.F === r.innerHTML) || (r.innerHTML = l && l.F || ""))
							}
							if (function(r, n, t, i, o) {
									var e;
									for (e in t) "children" === e || "key" === e || e in n || G(r, e, null, t[e], i);
									for (e in n) o && "function" != typeof n[e] || "children" === e || "key" === e || "value" === e || "checked" === e || t[e] === n[e] || G(r, e, n[e], t[e], i)
								}(r, m, f, o, c), l) n._ = [];
							else if (h = n.props.children, B(r, Array.isArray(h) ? h : [h], n, t, i, o && "foreignObject" !== d, e, u, e ? e[0] : t._ && F(t, 0), c), null != e)
								for (h = e.length; h--;) null != e[h] && S(e[h]);
							c || ("value" in m && void 0 !== (h = m.value) && (h !== r.value || "progress" === d && !h || "option" === d && h !== f.value) && G(r, "value", h, f.value, !1), "checked" in m && void 0 !== (h = m.checked) && h !== r.checked && G(r, "checked", h, f.checked, !1))
						}
						return r
					}

					function Y(r, n, t) {
						try {
							"function" == typeof r ? r(n) : r.current = n
						} catch (r) {
							b.j(r, t)
						}
					}

					function Z(r, n, t) {
						var i, o;
						if (b.unmount && b.unmount(r), (i = r.ref) && (i.current && i.current !== r.j || Y(i, null, n)), null != (i = r.I)) {
							if (i.componentWillUnmount) try {
								i.componentWillUnmount()
							} catch (r) {
								b.j(r, n)
							}
							i.base = i.S = null
						}
						if (i = r._)
							for (o = 0; o < i.length; o++) i[o] && Z(i[o], n, "function" != typeof r.type);
						t || null == r.j || S(r.j), r.j = r.P = void 0
					}

					function J(r, n, t) {
						return this.constructor(r, t)
					}
					v = C.slice, b = {
						j: function(r, n, t, i) {
							for (var o, e, u; n = n.v;)
								if ((o = n.I) && !o.v) try {
									if ((e = o.constructor) && null != e.getDerivedStateFromError && (o.setState(e.getDerivedStateFromError(r)), u = o.P), null != o.componentDidCatch && (o.componentDidCatch(r, i || {}), u = o.P), u) return o.M = o
								} catch (n) {
									r = n
								}
							throw r
						}
					}, w = 0, g = function(r) {
						return null != r && void 0 === r.constructor
					}, q.prototype.setState = function(r, n) {
						var t;
						t = null != this.q && this.q !== this.state ? this.q : this.q = E({}, this.state), "function" == typeof r && (r = r(E({}, t), this.props)), r && E(t, r), null != r && this.C && (n && this.A.push(n), L(this))
					}, q.prototype.forceUpdate = function(r) {
						this.C && (this.j = !0, r && this.A.push(r), L(this))
					}, q.prototype.render = M, O = [], j = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, D.k = 0, I = 0;
					var X = JSON.parse('{"ADP":0,"AFN":0,"ALL":0,"AMD":0,"BHD":3,"BIF":0,"BYN":2,"BYR":0,"CAD":2,"CHF":2,"CLF":4,"CLP":0,"COP":0,"CRC":0,"CZK":0,"default":2,"DJF":0,"DKK":2,"ESP":0,"GNF":0,"GYD":0,"HUF":0,"IDR":0,"IQD":0,"IRR":0,"ISK":0,"ITL":0,"JOD":3,"JPY":0,"KMF":0,"KPW":0,"KRW":0,"KWD":3,"LAK":0,"LBP":0,"LUF":0,"LYD":3,"MGA":0,"MGF":0,"MMK":0,"MNT":0,"MRO":0,"MUR":0,"NOK":0,"OMR":3,"PKR":0,"PYG":0,"RSD":0,"RWF":0,"SEK":0,"SLL":0,"SOS":0,"STD":0,"SYP":0,"TMM":0,"TND":3,"TRL":0,"TWD":0,"TZS":0,"UGX":0,"UYI":0,"UYW":4,"UZS":0,"VEF":0,"VND":0,"VUV":0,"XAF":0,"XOF":0,"XPF":0,"YER":0,"ZMK":0,"ZWD":0}'),
						Q = function() {
							function r(r) {
								this.values = r
							}
							return r.prototype.map = function(n) {
								return new r(this.values.map(n))
							}, r.prototype.filter = function(n) {
								return new r(this.values.filter(n))
							}, r.prototype.findIndex = function(r) {
								for (var n = 0; n < this.values.length; ++n)
									if (r(this.values[n])) return n;
								return -1
							}, r.prototype.has = function(r) {
								return this.findIndex(r) > -1
							}, r.prototype.count = function() {
								return this.values.length
							}, r.prototype.toArray = function() {
								return this.values
							}, r.prototype.any = function() {
								return this.count() > 0
							}, r.prototype.empty = function() {
								return 0 == this.count()
							}, r
						}(),
						rr = Q;

					function nr(r) {
						return r.replace(/[\u0660-\u0669]/g, (function(r) {
							return (r.charCodeAt(0) - "\u0660".charCodeAt(0)).toString()
						})).replace(/[\u06F0-\u06F9]/g, (function(r) {
							return (r.charCodeAt(0) - "\u06f0".charCodeAt(0)).toString()
						}))
					}

					function tr(r) {
						return r instanceof Array || (r = [r]), r
					}

					function ir(r) {
						return r.filter((function(r) {
							return null != r
						})).join(" ")
					}

					function or(r, n, t) {
						return void 0 === n && (n = {}), void 0 === t && (t = null), xr.R(r, n, t)
					}

					function er(r) {
						var n = [];
						return r instanceof Array ? n = n.concat(r) : n.push(r), new rr(n)
					}

					function ur(r, n) {
						var t = Object.entries(r).filter((function(r) {
							return r[0] in n || r[0].toLowerCase() in n
						}));
						return Object.fromEntries(t)
					}
					var cr = function() {
							function r() {}
							return r.prototype.L = function(r) {
								if ("string" == typeof r && (r = document.querySelector(r)), r instanceof Element) return r;
								throw new Error("Element: ".concat(r, " is not a valid element"))
							}, r.prototype.D = function(r) {
								return "string" === typeof r && /^https?:\/\/.+/.test(r)
							}, r
						}(),
						sr = function() {
							function r() {
								this.element = null, this.language = null, this.publishable_api_key = null, this.translations = null, this.methods = null, this.amount = null, this.currency = null, this.description = null, this.callback_url = null, this.supported_networks = null, this.metadata = null, this.invoice_id = null, this.statement_descriptor = null, this.on_initiating = null, this.on_completed = null, this.on_failure = null, this.on_redirect = null, this.apple_pay_version = null, this.apple_pay_merchant_capabilities = null, this.apple_pay_label = null, this.apple_pay_validate_merchant_url = null, this.apple_pay_country = null, this.apple_pay_supported_countries = ["SA"], this.credit_card_manual = !1, this.credit_card_save_card = !1, this.language = document.documentElement.lang || "en", this.language = this.language.replace(/_.+/g, "").replace(/\-.+/g, ""), this.base_url = "https://api.moyasar.com", this.helper = new cr, this.fixed_width = !0, this.B = this.B.bind(this)
							}
							return r.prototype.B = function(r, n) {
								void 0 === n && (n = null);
								var t = er(["apple_pay", "credit_card"]),
									i = function(i) {
										var e = n ? "".concat(n, "_").concat(i) : i;
										"object" === typeof r[e] && t.has((function(r) {
											return r == i
										})) ? o.B(r[e], e) : e in o && (o[e] = r[i])
									},
									o = this;
								for (var e in r) i(e)
							}, r.prototype.H = function(r) {
								if ("object" === typeof r) {
									var n = er(["callback_url", "description", "metadata", "amount"]),
										t = function(r) {
											if (!n.has((function(n) {
													return n == r
												}))) throw new Error("Changing ".concat(r, " is not allowed!"))
										};
									for (var i in r) t(i);
									this.B(r)
								}
							}, r.prototype.N = function() {
								return this.helper.L(this.element)
							}, r.prototype.$ = function() {
								switch (getComputedStyle(this.N()).direction.toLowerCase()) {
									case "rtl":
										return "rtl";
									case "ltr":
										return "ltr"
								}
								return "auto"
							}, r.prototype.G = function() {
								return this.fixed_width
							}, r.prototype.V = function() {
								return this.language || "en"
							}, r.prototype.K = function() {
								return this.translations
							}, r.prototype.U = function() {
								return this.methods instanceof Array ? this.methods : ["applepay", "creditcard", "stcpay"]
							}, r.prototype.W = function() {
								if ("string" !== typeof this.base_url || "" == this.base_url.trim()) throw new Error("Base URL is required");
								return this.base_url
							}, r.prototype.Y = function() {
								if ("string" !== typeof this.publishable_api_key) throw new Error("Publishable API Key is missing");
								if (!/^pk_(test|live)_.{40}$/.test(this.publishable_api_key)) throw new Error("Invalid Publishable API Key");
								return this.publishable_api_key
							}, r.prototype.Z = function() {
								try {
									return !/^pk_live_/.test(this.Y())
								} catch (r) {
									return !0
								}
							}, r.prototype.J = function() {
								return !0
							}, r.prototype.X = function() {
								try {
									var r = parseInt(this.amount || "-1");
									if (r < 1) throw new Error;
									return r
								} catch (n) {
									throw new Error("Amount must be a positive integer")
								}
							}, r.prototype.rr = function() {
								var r, n = this.nr(),
									t = null !== (r = X[n]) && void 0 !== r ? r : X.default,
									i = (this.X() / Math.pow(10, t)).toFixed(t);
								return /\.\d\d0$/.test(i) && (i = i.replace(/0$/, "")), i
							}, r.prototype.nr = function() {
								if ("string" !== typeof this.currency || !/^[A-Z]{3}$/.test(this.currency)) throw new Error("Currency ".concat(this.currency, " is invalid"));
								return this.currency
							}, r.prototype.tr = function() {
								if (null === this.apple_pay_country) throw new Error("Country is required for Apple Pay");
								if ("string" !== typeof this.apple_pay_country || !/^[A-Z]{2}$/.test(this.apple_pay_country)) throw new Error("Invalid country ".concat(this.apple_pay_country));
								return this.apple_pay_country
							}, r.prototype.ir = function() {
								if ("string" !== typeof this.description || this.description.trim().length < 1) throw new Error("Description must be a string");
								return this.description
							}, r.prototype.er = function() {
								if (!this.helper.D(this.callback_url)) throw new Error("Callback URL is invalid");
								return this.callback_url
							}, r.prototype.ur = function() {
								return this.on_initiating
							}, r.prototype.cr = function() {
								return this.on_completed
							}, r.prototype.sr = function() {
								return this.on_failure
							}, r.prototype.lr = function() {
								return this.on_redirect
							}, r.prototype.mr = function() {
								return this.supported_networks instanceof Array ? this.supported_networks : ["amex", "mada", "visa", "mastercard"]
							}, r.prototype.dr = function(r) {
								return er(this.mr()).has((function(n) {
									return n.toLowerCase() == r.toLowerCase()
								}))
							}, r.prototype.hr = function() {
								var r = ["mada", "visa", "amex", "mastercard"];
								return this.mr().filter((function(n) {
									return r.includes(n)
								})).map((function(r) {
									return "mastercard" == (r = r.toLowerCase()) ? "masterCard" : r
								}))
							}, r.prototype.pr = function() {
								return this.apple_pay_merchant_capabilities instanceof Array ? this.apple_pay_merchant_capabilities : ["supports3DS", "supportsCredit", "supportsDebit"]
							}, r.prototype._r = function() {
								if ("string" !== typeof this.apple_pay_label || 0 == this.apple_pay_label.trim().length) throw new Error("Apple Pay label is required");
								return this.apple_pay_label
							}, r.prototype.yr = function() {
								if ("string" !== typeof this.apple_pay_validate_merchant_url || !/^https?:\/\/.+/.test(this.apple_pay_validate_merchant_url)) throw new Error("Validate Merchat URL is required for Apple Pay");
								return this.apple_pay_validate_merchant_url
							}, r.prototype.vr = function() {
								if (null === this.apple_pay_version) return 6;
								if (!Number.isInteger(this.apple_pay_version) || this.apple_pay_version < 1) throw new Error("Apple Pay version must be a positive integer");
								return this.apple_pay_version
							}, r.prototype.br = function() {
								if (null == this.apple_pay_supported_countries) return ["SA"];
								if (!(this.apple_pay_supported_countries instanceof Array)) throw new Error("Apple Pay supported_countries config must be an array.");
								if (!this.apple_pay_supported_countries.every((function(r) {
										return "string" === typeof r && 2 == r.length
									}))) throw new Error("Apple Pay supported_countries entries must be ISO 3166 country codes.");
								return this.apple_pay_supported_countries
							}, r.prototype.wr = function() {
								return er(this.U()).has((function(r) {
									return "applepay" == r
								}))
							}, r.prototype.gr = function() {
								if (null == this.metadata) return null;
								if ("object" !== typeof this.metadata) throw new Error("Metadata must be an object");
								var r = Object.entries(this.metadata).length;
								if (0 == r) return null;
								if (r > 50) throw new Error("Only 50 Key/Value pairs are allowed in metadata");
								return this.metadata
							}, r.prototype.Or = function() {
								var r, n = /^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}$/.test(null !== (r = this.invoice_id) && void 0 !== r ? r : "");
								if (this.invoice_id && !n) throw new Error("Invalid invoice ID format");
								return this.invoice_id
							}, r.prototype.jr = function() {
								return new URL(window.location.href).hostname
							}, r.prototype.Pr = function() {
								return !!this.credit_card_manual
							}, r.prototype.Ir = function() {
								return !!this.credit_card_save_card
							}, r.prototype.Ar = function() {
								var r, n = /^[\w\s\d\-~]{1,64}$/.test(null !== (r = this.statement_descriptor) && void 0 !== r ? r : "");
                                console.log(r, n);
                                const anan = r.forEach((e) => {
                                    console.log(e);
                                });
                                console.log(anan); 
								if (this.statement_descriptor && !n) throw new Error("Invalid format for the statement descriptor");
								return this.statement_descriptor
							}, r
						}(),
						ar = sr,
						lr = JSON.parse('{"error.authentication_error":"Authentication error, service is unavailable now","error.authorization_error":"Authorization error, service is unavailable now","error.network":"Network Error","error.unknown":"Unexpected error occurred","error.invalid_mobile":"Invalid mobile number","error.invalid_otp":"Invalid verification code","error.invalid_request_error":"Invalid payment request","error.mobile_not_registered":"Mobile number is not registered","error.account_inactive_error":"Merchant account is not active","error.invalid_name":"First and last names are required","error.unsupported_cc_type":"Unsupported card type","error.invalid_cc_number":"Invalid credit card","error.invalid_date":"Invalid date","error.invalid_month":"Invalid month","error.invalid_year":"Invalid year","error.invalid_csc":"Invalid CVC number","error.cant_start_payment":"Error initiating payment, please try again later","error.otp_time_out":"OTP time has finished, please try again","error.api_error":"An error has occurred, please refresh the page and try again.","error.m070":"Merchant is not allowed to transact in 3Ds","error.m071":"Merchant is not allowed to transact directly without 3Ds","error.m072":"Merchant does not have bank MID specified","error.m074":"Credit card country is not allowed","error.m075":"Merchant account is not subscribed to Moyasar invoices","error.m076":"Merchant account is not allowed to use this payment method","error.m077":"Merchant account cannot use stc pay method","form.cc":"Credit Card","form.code":"Code","form.mobile":"Mobile number","form.otp":"Verification code","form.required":"Required","form.name_on_card":"Name on card","form.last_name":"Last name","form.card_info":"Card information","form.date":"Expiry date","form.csc":"CVC","form.or_pay_with_card":"Or pay with card","form.powered_by":"Powered by","form.save_card_notice":"You card data will be saved upon submit.","button.pay":"Pay","button.verify":"Verify","button.proceed":"Proceed","button.cancel":"Cancel","validation.is_invalid":"Invalid :attr","validation.can_t_be_blank":":attr is required","validation.should_be_english_letters_only":"Name may only have English alphabet and spaces","validation.first_and_last_name_required":"Both first and last name are required","common.moyasar":"Moyasar","common.test_mode_disclaimer":"Test Mode Enabled: Please do not use in production!","config.error.no_methods":"No payment method available","config.error.no_networks":"No networks configured","config.error.no_amount":"Amount is not configured","config.error.no_currency":"Currency is not configured","config.error.no_country":"Country is not configured","config.error.no_description":"Payment description is not configured","config.error.no_api_key":"API key is not configured","config.error.no_callback_url":"Callback URL is not configured","config.error.no_applepay_label":"Apple Pay label is missing","config.error.no_validate_merchant_url":"Apple Pay validate merchant URL is missing"}'),
						fr = JSON.parse('{"error.authentication_error":"\u062e\u0637\u0623 \u0641\u064a \u0639\u0645\u0644\u064a\u0629 \u0627\u0644\u0645\u0635\u0627\u062f\u0642\u0629 \u060c \u062e\u062f\u0645\u0629 \u0627\u0644\u062f\u0641\u0639 \u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631\u0629 \u062d\u0627\u0644\u064a\u064b\u0627","error.authorization_error":"\u062e\u0637\u0623 \u0641\u064a \u0639\u0645\u0644\u064a\u0629 \u0627\u0644\u062a\u062d\u0642\u0642 \u0645\u0646 \u0627\u0644\u0635\u0644\u0627\u062d\u064a\u0627\u062a \u060c \u062e\u062f\u0645\u0629 \u0627\u0644\u062f\u0641\u0639 \u063a\u064a\u0631 \u0645\u062a\u0648\u0641\u0631\u0629 \u062d\u0627\u0644\u064a\u064b\u0627","error.network":"\u062e\u0637\u0623 \u0641\u064a \u0645\u062d\u0627\u0648\u0644\u0629 \u0627\u0644\u0627\u062a\u0635\u0627\u0644","error.unknown":"\u062d\u0635\u0644 \u062e\u0637\u0623 \u063a\u064a\u0631 \u0645\u0639\u0631\u0648\u0641","error.invalid_mobile":"\u0631\u0642\u0645 \u0627\u0644\u062c\u0648\u0627\u0644 \u063a\u064a\u0631 \u0635\u062d\u064a\u062d","error.invalid_otp":"\u0631\u0645\u0632 \u0627\u0644\u062a\u062d\u0642\u0642 \u063a\u064a\u0631 \u0635\u062d\u064a\u062d","error.invalid_request_error":"\u0637\u0644\u0628 \u0639\u0645\u0644\u064a\u0629 \u0627\u0644\u062f\u0641\u0639 \u063a\u064a\u0631 \u0635\u062d\u064a\u062d","error.mobile_not_registered":"\u0631\u0642\u0645 \u0627\u0644\u062c\u0648\u0627\u0644 \u063a\u064a\u0631 \u0645\u0633\u062c\u0644","error.account_inactive_error":"\u062d\u0633\u0627\u0628 \u0627\u0644\u0628\u0627\u0626\u0639 \u063a\u064a\u0631 \u0641\u0639\u0627\u0644","error.invalid_name":"\u064a\u062c\u0628 \u0625\u062f\u062e\u0627\u0644 \u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0623\u0648\u0644 \u0648\u0627\u0644\u0623\u062e\u064a\u0631","error.unsupported_cc_type":"\u0646\u0648\u0639 \u0627\u0644\u0628\u0637\u0627\u0642\u0629 \u0627\u0644\u0625\u0626\u062a\u0645\u0627\u0646\u064a\u0629 \u063a\u064a\u0631 \u0645\u062f\u0639\u0648\u0645","error.invalid_cc_number":"\u0631\u0642\u0645 \u0627\u0644\u0628\u0637\u0627\u0642\u0629 \u0627\u0644\u0625\u0626\u062a\u0645\u0627\u0646\u064a\u0629 \u063a\u064a\u0631 \u0635\u062d\u064a\u062d","error.invalid_date":"\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0625\u0646\u062a\u0647\u0627\u0621 \u063a\u064a\u0631 \u0635\u062d\u064a\u062d","error.invalid_month":"\u0634\u0647\u0631 \u0627\u0644\u0625\u0646\u062a\u0647\u0627\u0621 \u063a\u064a\u0631 \u0635\u062d\u064a\u062d","error.invalid_year":"\u0633\u0646\u0629 \u0627\u0644\u0625\u0646\u062a\u0647\u0627\u0621 \u063a\u064a\u0631 \u0635\u062d\u064a\u062d\u0629","error.invalid_csc":"\u0631\u0645\u0632 \u0627\u0644\u0623\u0645\u0627\u0646 \u0644\u0644\u0628\u0637\u0627\u0642\u0629 \u063a\u064a\u0631 \u0635\u062d\u064a\u062d","error.cant_start_payment":"\u062d\u0635\u0644 \u062e\u0637\u0623 \u0623\u062b\u0646\u0627\u0621 \u0645\u062d\u0627\u0648\u0644\u0629 \u0628\u062f\u0621 \u0639\u0645\u0644\u064a\u0629 \u0627\u0644\u062f\u0641\u0639 \u060c \u0646\u0631\u062c\u0648\u0627 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0645\u0631\u0629\u064b \u0623\u062e\u0631\u0649","error.otp_time_out":"\u0627\u0644\u0648\u0642\u062a \u0627\u0644\u0645\u0633\u0645\u0648\u062d \u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0631\u0645\u0632 \u0627\u0644\u062a\u062d\u0642\u0642 \u0627\u0646\u062a\u0647\u0649 \u060c \u0646\u0631\u062c\u0648\u0627 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0645\u0631\u0629\u064b \u0623\u062e\u0631\u0649","error.api_error":"\u062d\u062f\u062b \u062e\u0637\u0623 \u0623\u062b\u0646\u0627\u0621 \u0645\u062d\u0627\u0648\u0644\u0629 \u0627\u0644\u0625\u062a\u0635\u0627\u0644 \u060c \u064a\u0631\u062c\u0649 \u062a\u062d\u062f\u064a\u062b \u0627\u0644\u0635\u0641\u062d\u0629 \u0648 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062e\u0631\u0649.","error.m070":"\u063a\u064a\u0631 \u0645\u0633\u0645\u0648\u0639 \u0644\u0644\u0628\u0627\u0626\u0639 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0645\u064a\u0632\u0629 \u0627\u0644\u062a\u062d\u0642\u0642 \u0627\u0644\u062b\u0644\u0627\u062b\u064a 3D Secure","error.m071":"\u064a\u062c\u0628 \u0639\u0644\u0649 \u0627\u0644\u0628\u0627\u0626\u0639 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0645\u064a\u0632\u0629 \u0627\u0644\u062a\u062d\u0642\u0642 \u0627\u0644\u062b\u0644\u0627\u062b\u064a \u0644\u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0627\u0644\u0645\u062f\u0641\u0648\u0639\u0627\u062a","error.m072":"\u0644\u0627 \u064a\u0648\u062c\u062f \u0644\u0644\u0628\u0627\u0626\u0639 \u062d\u0633\u0627\u0628 \u0628\u0646\u0643\u064a \u0641\u0639\u0627\u0644","error.m074":"\u0628\u0637\u0627\u0642\u0629 \u0627\u0644\u0625\u0626\u062a\u0645\u0627\u0646 \u062a\u0645 \u0627\u0635\u062f\u0627\u0631\u0647\u0627 \u0645\u0646 \u0623\u062d\u062f \u0627\u0644\u0628\u0644\u062f\u0627\u0646 \u0627\u0644\u063a\u064a\u0631 \u0645\u0633\u0645\u0648\u062d \u0644\u0647\u0627 \u0628\u0627\u0644\u062f\u0641\u0639 \u0647\u0646\u0627","error.m075":"\u0644\u0627 \u064a\u0645\u0643\u0646 \u0644\u0644\u0628\u0627\u0626\u0639 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u062e\u062f\u0645\u0629 \u0627\u0644\u0641\u0648\u062a\u0631\u0629","error.m076":"\u0644\u0627 \u064a\u0645\u0643\u0646 \u0644\u0644\u0628\u0627\u0626\u0639 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0637\u0631\u064a\u0642\u0629 \u0627\u0644\u062f\u0641\u0639","error.m077":"\u0644\u0627 \u064a\u0645\u0643\u0646 \u0644\u0644\u0628\u0627\u0626\u0639 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u062e\u062f\u0645\u0629 stc pay \u0644\u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0627\u0644\u0645\u062f\u0641\u0648\u0639\u0627\u062a","form.cc":"\u0628\u0637\u0627\u0642\u0629 \u0627\u0644\u0625\u0626\u062a\u0645\u0627\u0646","form.code":"\u0631\u0645\u0632 \u0627\u0644\u062a\u062d\u0642\u0642","form.mobile":"\u0631\u0642\u0645 \u0627\u0644\u062c\u0648\u0627\u0644","form.otp":"\u0631\u0645\u0632 \u0627\u0644\u062a\u062d\u0642\u0642","form.required":"\u0645\u0637\u0644\u0648\u0628","form.name_on_card":"\u0627\u0644\u0627\u0633\u0645 \u0639\u0644\u0649 \u0627\u0644\u0628\u0637\u0627\u0642\u0629","form.last_name":"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0623\u062e\u064a\u0631","form.card_info":"\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0628\u0637\u0627\u0642\u0629 \u0627\u0644\u0625\u0626\u062a\u0645\u0627\u0646","form.date":"\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0625\u0646\u062a\u0647\u0627\u0621","form.csc":"\u0631\u0645\u0632 \u0627\u0644\u0623\u0645\u0627\u0646 CVC","form.or_pay_with_card":"\u0623\u0648 \u0627\u062f\u0641\u0639 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0628\u0637\u0627\u0642\u062a\u0643 \u0627\u0644\u0625\u0626\u062a\u0645\u0627\u0646\u064a\u0629","form.powered_by":"\u062e\u062f\u0645\u0629 \u0627\u0644\u062f\u0641\u0639 \u0645\u0642\u062f\u0645\u0629 \u0645\u0646 \u0642\u0628\u0644","form.save_card_notice":"\u0633\u064a\u062a\u0645 \u062d\u0641\u0638 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0628\u0637\u0627\u0642\u0629 \u0639\u0646\u062f \u0625\u062a\u0645\u0627\u0645 \u0627\u0644\u0639\u0645\u0644\u064a\u0629.","button.pay":"","button.verify":"\u062a\u062d\u0642\u0642","button.proceed":"\u0627\u062a\u0645\u0627\u0645 \u0627\u0644\u0639\u0645\u0644\u064a\u0629","button.cancel":"\u0625\u0644\u063a\u0627\u0621","validation.is_invalid":"\u0642\u064a\u0645\u0629 :attr \u063a\u064a\u0631 \u0635\u062d\u064a\u062d\u0629","validation.can_t_be_blank":"\u0642\u064a\u0645\u0629 :attr \u0645\u0637\u0644\u0648\u0628\u0629","validation.should_be_english_letters_only":"\u0627\u0644\u0627\u0633\u0645 \u064a\u062c\u0628 \u0623\u0646 \u064a\u062d\u062a\u0648\u064a \u0639\u0644\u0649 \u062d\u0631\u0648\u0641 \u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629 \u0648 \u0645\u0633\u0627\u0641\u0627\u062a \u0641\u0642\u0637","validation.first_and_last_name_required":"\u0627\u0644\u0623\u0633\u0645 \u0627\u0644\u0623\u0648\u0644 \u0648\u0627\u0644\u0623\u062e\u064a\u0631 \u0645\u0637\u0644\u0648\u0628","common.moyasar":"\u0645\u064a\u0633\u0631","common.test_mode_disclaimer":"\u0648\u0636\u0639 \u0627\u0644\u0645\u062f\u0641\u0648\u0639\u0627\u062a \u0627\u0644\u062a\u062c\u0631\u064a\u0628\u064a \u060c \u0627\u0644\u0631\u062c\u0627\u0621 \u0639\u062f\u0645 \u0627\u0633\u062a\u062e\u062f\u0627\u0645\u0647 \u0641\u064a \u0627\u0644\u0628\u064a\u0626\u0629 \u0627\u0644\u062a\u0634\u063a\u064a\u0644\u064a\u0629!","config.error.no_methods":"\u0644\u0627 \u062a\u0648\u062c\u062f \u0623\u064a \u0648\u0633\u064a\u0644\u0629 \u062f\u0641\u0639 \u0645\u062a\u0627\u062d\u0629","config.error.no_networks":"\u0644\u0645 \u064a\u062a\u0645 \u0625\u0639\u062f\u0627\u062f \u0634\u0628\u0643\u0627\u062a \u0627\u0644\u062f\u0641\u0639 \u0628\u0634\u0643\u0644 \u0635\u062d\u064a\u062d"}'),
						mr = function() {
							function r() {
								this.Cr = !1, this.language = {
									en: lr,
									ar: fr
								}
							}
							return r.prototype.kr = function() {
								return "en"
							}, r.prototype.R = function(r, n, t) {
								void 0 === n && (n = {}), void 0 === t && (t = null), r = r.replace(/\s+/g, "_").replace(/[^0-9a-zA-Z\.]/g, "_").toLowerCase(), this.Cr || this.Er(), t || (t = Sr.V());
								var i = this.kr(),
									o = null;
								if (t && this.language[t] && this.language[t][r] ? o = this.language[t][r] : this.language[i] && this.language[i][r] && (o = this.language[i][r]), null !== o) {
									for (var e in n) o = o.replace(new RegExp("/:".concat(e, "/g")), n[e]);
									return o
								}
								return r
							}, r.prototype.Er = function() {
								var r = Sr.K();
								if (r) {
									for (var n in r)
										if (2 == n.length && "object" === typeof r[n]) {
											var t = this.language[n] || {};
											this.language[n] = Object.assign(t, r[n])
										} this.Cr = !0
								}
							}, r
						}(),
						dr = function() {
							function r() {
								this.listeners = {}
							}
							return r.prototype.addEventListener = function(r, n) {
								r in this.listeners || (this.listeners[r] = []), this.listeners[r].push(n)
							}, r.prototype.removeEventListener = function(r, n) {
								if (r in this.listeners)
									for (var t = this.listeners[r], i = 0, o = t.length; i < o; i++)
										if (t[i] === n) return void t.splice(i, 1)
							}, r.prototype.dispatchEvent = function(r) {
								if (!(r.type in this.listeners)) return !0;
								for (var n = this.listeners[r.type].slice(), t = 0, i = n.length; t < i; t++) n[t].call(this, r);
								return !r.defaultPrevented
							}, r
						}(),
						hr = dr;
					try {
						new window.EventTarget
					} catch (A) {
						window.EventTarget = hr
					}
					var pr = function() {
							function r() {
								this.Sr = this.Tr()
							}
							return r.prototype.Mr = function(r, n) {
								this.Sr.addEventListener(r, n)
							}, r.prototype.qr = function(r, n) {
								this.Sr.dispatchEvent(this.Fr(r, {
									detail: n
								}))
							}, r.prototype.Fr = function(r, n) {
								if ("function" === typeof window.CustomEvent) return new CustomEvent(r, n);
								n = n || {
									bubbles: !1,
									cancelable: !1,
									detail: null
								};
								var t = document.createEvent("CustomEvent");
								return t.initCustomEvent(r, n.bubbles, n.cancelable, n.detail), t
							}, r.prototype.Rr = function(r, n) {
								this.Sr.removeEventListener(r, n)
							}, r.prototype.Lr = function() {
								this.Sr = this.Tr()
							}, r.prototype.Tr = function() {
								var r = new EventTarget;
								return r.addEventListener = r.addEventListener || function(n, t, i) {
									return r.attachEvent(n, t, i)
								}, r.dispatchEvent = r.dispatchEvent || function(n) {
									return r.fireEvent(n)
								}, r
							}, r
						}(),
						_r = function() {
							this.type = "", this.message = null
						},
						yr = function() {
							var r = function(n, t) {
								return r = Object.setPrototypeOf || {
									__proto__: []
								}
								instanceof Array && function(r, n) {
									r.__proto__ = n
								} || function(r, n) {
									for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (r[t] = n[t])
								}, r(n, t)
							};
							return function(n, t) {
								if ("function" !== typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

								function i() {
									this.constructor = n
								}
								r(n, t), n.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
							}
						}(),
						vr = function(r) {
							function n() {
								var n = null !== r && r.apply(this, arguments) || this;
								return n.type = "applepay", n.company = "", n.name = null, n.number = null, n
							}
							return yr(n, r), n
						}(_r),
						br = vr,
						wr = function() {
							var r = function(n, t) {
								return r = Object.setPrototypeOf || {
									__proto__: []
								}
								instanceof Array && function(r, n) {
									r.__proto__ = n
								} || function(r, n) {
									for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (r[t] = n[t])
								}, r(n, t)
							};
							return function(n, t) {
								if ("function" !== typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

								function i() {
									this.constructor = n
								}
								r(n, t), n.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
							}
						}(),
						gr = function(r) {
							function n() {
								var n = null !== r && r.apply(this, arguments) || this;
								return n.type = "creditcard", n.company = "", n.name = null, n.number = null, n.transaction_url = "", n
							}
							return wr(n, r), n
						}(_r),
						Or = gr,
						jr = function() {
							var r = function(n, t) {
								return r = Object.setPrototypeOf || {
									__proto__: []
								}
								instanceof Array && function(r, n) {
									r.__proto__ = n
								} || function(r, n) {
									for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (r[t] = n[t])
								}, r(n, t)
							};
							return function(n, t) {
								if ("function" !== typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

								function i() {
									this.constructor = n
								}
								r(n, t), n.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
							}
						}(),
						Pr = function(r) {
							function n() {
								var n = null !== r && r.apply(this, arguments) || this;
								return n.type = "stcpay", n.mobile = "", n.reference_number = "", n.branch = "", n.cashier = "", n.transaction_url = "", n
							}
							return jr(n, r), n
						}(_r),
						Ir = Pr,
						Ar = function() {
							function r() {}
							return r.Dr = function(n) {
								if ("undefined" === typeof n.type) return null;
								var t = r.Br(n.type);
								if (null === t) return null;
								for (var i in n) i in t && (t[i] = n[i]);
								return t
							}, r.Br = function(r) {
								switch (r) {
									case "creditcard":
										return new Or;
									case "applepay":
										return new br;
									case "stcpay":
										return new Ir
								}
								return null
							}, r
						}(),
						Cr = function() {
							function r() {
								this.id = "", this.status = "initiated", this.amount = 0, this.fee = 0, this.currency = "", this.refunded = 0, this.refunded_at = null, this.captured = 0, this.captured_at = null, this.voided_at = null, this.description = "", this.amount_format = "", this.fee_format = "", this.refunded_format = "", this.captured_format = "", this.invoice_id = null, this.ip = null, this.callback_url = null, this.created_at = "", this.updated_at = "", this.source = null
							}
							return r.Dr = function(n) {
								var t = new r;
								for (var i in n) i in t && ("source" == i && (t.source = Ar.Dr(n[i])), t[i] = n[i]);
								return t
							}, r.prototype.isPaid = function() {
								return "paid" == this.status
							}, r.prototype.isFailed = function() {
								return "failed" == this.status
							}, r.prototype.isInitiated = function() {
								return "initiated" == this.status
							}, r.prototype.isRefunded = function() {
								return "refunded" == this.status
							}, r.prototype.isVoided = function() {
								return "voided" == this.status
							}, r.prototype.isCreditCard = function() {
								var r;
								return "creditcard" == (null === (r = this.source) || void 0 === r ? void 0 : r.type)
							}, r.prototype.isStcPay = function() {
								var r;
								return "stcpay" == (null === (r = this.source) || void 0 === r ? void 0 : r.type)
							}, r.prototype.isApplePay = function() {
								var r;
								return "applepay" == (null === (r = this.source) || void 0 === r ? void 0 : r.type)
							}, r
						}(),
						kr = function() {
							function r() {}
							return r.prototype.Hr = function(r) {
								return "".concat(Sr.W(), "/").concat(r)
							}, r.prototype.Nr = function() {
								return this.Hr("v1/payments")
							}, r.prototype.$r = function() {
								return Sr.Y()
							}, r.prototype.Gr = function() {
								return "v1.11.0"
							}, r.prototype.Vr = function() {
								var r = Sr.ur();
								if (null === r) return Promise.resolve();
								if ("function" !== typeof r) throw new Error("Invalid handler ".concat(r));
								var n = r(),
									t = null;
								if ("boolean" === typeof n) t = n ? Promise.resolve({}) : Promise.reject();
								else if (n instanceof Promise) t = n;
								else {
									if ("object" !== typeof n) throw new Error("Invalid handler result ".concat(n));
									t = Promise.resolve(n)
								}
								return t.then((function(r) {
									return "object" === typeof r ? r : "boolean" === typeof r && r ? Promise.resolve({}) : Promise.reject("Invalid handler result ".concat(r))
								})).then((function(r) {
									return Sr.H(r)
								}))
							}, r.prototype.Kr = function(r) {
								var n = Sr.cr();
								if (null === n) return Promise.resolve(r);
								if ("function" === typeof n) {
									var t = n(r);
									return "boolean" === typeof t ? t ? Promise.resolve(r) : Promise.reject("Canceled") : t instanceof Promise ? t.then((function() {
										return r
									})) : Promise.resolve(r)
								}
								if ("string" !== typeof n) throw new Error("Invalid handler ".concat(n));
								return fetch(n, {
									method: "post",
									credentials: "same-origin",
									headers: {
										"Content-Type": "application/json",
										"X-Moyasar-Form-Version": this.Gr()
									},
									body: JSON.stringify(r)
								}).then((function(n) {
									return 201 == n.status ? r : (console.log("Could not save payment, expected 201 and got ".concat(n.status)), Promise.reject("Could not save payment, please contact support"))
								}))
							}, r.prototype.Ur = function(r) {
								var n = this,
									t = {
										amount: Sr.X(),
										currency: Sr.nr(),
										description: Sr.ir(),
										publishable_api_key: this.$r()
									},
									i = Sr.gr();
								i && Object.keys(i).length > 0 && (t.metadata = i);
								var o = Sr.Or();
								return o && (t.invoice_id = o.toLowerCase()), fetch(this.Nr(), {
									method: "post",
									headers: {
										"Content-Type": "application/json",
										"X-Moyasar-Form-Version": this.Gr()
									},
									body: JSON.stringify(Object.assign(t, r))
								}).then((function(r) {
									return r.ok ? r.json() : Promise.reject(r)
								})).then((function(r) {
									return Cr.Dr(r)
								})).then((function(r) {
									return n.Kr(r)
								}))
							}, r.prototype.Wr = function(r) {
								var n = Object.assign({
									type: "creditcard"
								}, r);
								return Sr.Pr() && (n.manual = "true"), Sr.Ir() && (n.save_card = "true"), Sr.Ar() && (n.statement_descriptor = Sr.Ar()), this.Ur({
									callback_url: Sr.er(),
									source: n
								})
							}, r.prototype.zr = function(r) {
								return this.Ur({
									source: {
										type: "stcpay",
										mobile: r
									}
								})
							}, r.prototype.Yr = function(r, n) {
								return fetch(r, {
									method: "post",
									headers: {
										"Content-Type": "application/json",
										"X-Moyasar-Form-Version": this.Gr()
									},
									body: JSON.stringify({
										otp_value: n
									})
								}).then((function(r) {
									return r.ok ? r.json() : Promise.reject(r)
								})).then((function(r) {
									return Cr.Dr(r)
								}))
							}, r.prototype.Zr = function(r) {
								var n = {
									type: "applepay",
									token: JSON.stringify(r)
								};
								return Sr.Ar() && (n.statement_descriptor = Sr.Ar()), this.Ur({
									source: n
								})
							}, r.prototype.Jr = function(r) {
								var n, t, i = Sr.er(),
									o = "?";
								i.indexOf("?") > -1 && (o = "&"), i = "".concat(i).concat(o, "id=").concat(r.id, "&status=").concat(r.status, "&message=").concat(null === (n = r.source) || void 0 === n ? void 0 : n.message), "initiated" == r.status && "creditcard" == (null === (t = r.source) || void 0 === t ? void 0 : t.type) && (i = r.source.transaction_url);
								var e = Sr.lr();
								"function" === typeof e ? e(i) : window.location.href = i
							}, r.prototype.Xr = function(r) {
								if (/^M\d+:/.test(r.message || "")) {
									var n = r.message.split(":")[0];
									return or("error.".concat(n.trim().toLowerCase()))
								}
								return (or("error.".concat(r.type)) + " ".concat(r.message)).trim()
							}, r.prototype.Qr = function(r, n, t) {
								var i;
								return void 0 === t && (t = null), r.errors && r.errors[n] ? r.errors[n] instanceof Array ? r.errors[n].map((function(r) {
									return or("validation.".concat(r), t ? {
										attr: t
									} : {})
								})).join(", ") : null === (i = r.errors[n]) || void 0 === i ? void 0 : i.toString() : null
							}, r.prototype.rn = function(r) {
								var n = Sr.sr();
								if ("function" === typeof n) try {
									n(r)
								} catch (A) {
									console.error("An error happened when firing failure callback"), console.error(r)
								}
							}, r
						}(),
						Er = kr,
						Sr = new ar,
						xr = new mr,
						Tr = new pr,
						Mr = function() {
							return new Er
						},
						qr = "mysr-form-bringToLife",
						Fr = "mysr-form-scaleDown9",
						Rr = function() {
							var r = function(n, t) {
								return r = Object.setPrototypeOf || {
									__proto__: []
								}
								instanceof Array && function(r, n) {
									r.__proto__ = n
								} || function(r, n) {
									for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (r[t] = n[t])
								}, r(n, t)
							};
							return function(n, t) {
								if ("function" !== typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

								function i() {
									this.constructor = n
								}
								r(n, t), n.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
							}
						}(),
						Lr = function() {
							return Lr = Object.assign || function(r) {
								for (var n, t = 1, i = arguments.length; t < i; t++)
									for (var o in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]);
								return r
							}, Lr.apply(this, arguments)
						},
						Dr = function(r) {
							function n() {
								return null !== r && r.apply(this, arguments) || this
							}
							return Rr(n, r), n.prototype.render = function() {
								var r = this.props,
									n = r.class,
									t = r.busy,
									i = r.success,
									o = r.fail,
									e = function(r, n) {
										var t = {};
										for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && n.indexOf(i) < 0 && (t[i] = r[i]);
										if (null != r && "function" === typeof Object.getOwnPropertySymbols) {
											var o = 0;
											for (i = Object.getOwnPropertySymbols(r); o < i.length; o++) n.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(r, i[o]) && (t[i[o]] = r[i[o]])
										}
										return t
									}(r, ["class", "busy", "success", "fail"]),
									u = tr(n);
								u.unshift("mysr-form-button"), o ? u.push("mysr-form-fail") : i ? u.push("mysr-form-success") : t && u.push("mysr-form-busy");
								var c = null;
								i ? c = x("path", {
									class: ir([qr, Fr]),
									d: "M-30 3 l18 18 l38 -38",
									stroke: "white",
									"stroke-width": "7",
									fill: "none"
								}) : o && (c = x("g", {
									class: ir([qr, Fr])
								}, x("path", {
									d: "M-20 -20 l40 40",
									stroke: "white",
									"stroke-width": "7",
									fill: "none"
								}), x("path", {
									d: "M20 -20 l-40 40",
									stroke: "white",
									"stroke-width": "7",
									fill: "none"
								})));
								var s = null;
								(t || i || o) && (s = x("svg", {
									class: "mysr-form-indicator",
									viewBox: "-50 -50 100 100"
								}, x("circle", {
									class: ir(["mysr-form-circle", !t || i || o ? qr : "mysr-form-circleAnimate"]),
									r: "45",
									stroke: "white",
									"stroke-width": "7",
									fill: "transparent"
								}), c));
								var a = ur(e, document.createElement("button"));
								return x("button", Lr({
									class: ir(u)
								}, a), s || this.props.children || null)
							}, n
						}(q),
						Br = Dr,
						Hr = function() {
							function r() {}
							return r.prototype.nn = function() {
								throw new Error
							}, r.prototype.tn = function(r) {
								throw new Error
							}, r.prototype.on = function(r) {
								throw new Error
							}, r.prototype.un = function() {
								return "0000 0000 0000 0000"
							}, r.prototype.cn = function() {
								return "000"
							}, r
						}(),
						Nr = function() {
							var r = function(n, t) {
								return r = Object.setPrototypeOf || {
									__proto__: []
								}
								instanceof Array && function(r, n) {
									r.__proto__ = n
								} || function(r, n) {
									for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (r[t] = n[t])
								}, r(n, t)
							};
							return function(n, t) {
								if ("function" !== typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

								function i() {
									this.constructor = n
								}
								r(n, t), n.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
							}
						}(),
						$r = function(r) {
							function n() {
								return null !== r && r.apply(this, arguments) || this
							}
							return Nr(n, r), n.prototype.nn = function() {
								return "amex"
							}, n.prototype.tn = function(r) {
								return /^3[47]/.test(r)
							}, n.prototype.on = function(r) {
								return /^3[47][0-9]{13}$/.test(r)
							}, n.prototype.un = function() {
								return "0000 000000 00000"
							}, n.prototype.cn = function() {
								return "0000"
							}, n
						}(Hr),
						Gr = $r,
						Vr = function() {
							var r = function(n, t) {
								return r = Object.setPrototypeOf || {
									__proto__: []
								}
								instanceof Array && function(r, n) {
									r.__proto__ = n
								} || function(r, n) {
									for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (r[t] = n[t])
								}, r(n, t)
							};
							return function(n, t) {
								if ("function" !== typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

								function i() {
									this.constructor = n
								}
								r(n, t), n.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
							}
						}(),
						Kr = function(r) {
							function n() {
								var n = null !== r && r.apply(this, arguments) || this;
								return n.sn = ["22337902", "22337986", "22402030", "242030", "403024", "406136", "406996", "407197", "407395", "407520", "409201", "410621", "410685", "410834", "412565", "417633", "419593", "420132", "421141", "422817", "422818", "422819", "428331", "428671", "428672", "428673", "431361", "432328", "434107", "439954", "440533", "440647", "440795", "442463", "445564", "446393", "446404", "446672", "455036", "455708", "457865", "457997", "458456", "462220", "468540", "468541", "468542", "468543", "474491", "483010", "483011", "483012", "484783", "486094", "486095", "486096", "489318", "489319", "504300", "513213", "515079", "516138", "520058", "521076", "52166100", "524130", "524514", "529415", "529741", "530060", "531196", "535825", "535989", "536023", "537767", "543085", "543357", "549760", "554180", "555610", "558563", "588845", "588848", "588850", "589206", "604906", "605141", "636120", "968201", "968202", "968203", "968204", "968205", "968206", "968207", "968208", "968209", "968211"], n
							}
							return Vr(n, r), n.prototype.nn = function() {
								return "mada"
							}, n.prototype.tn = function(r) {
								for (var n = r.replace(/\s/g, "").substr(0, 6), t = r.replace(/\s/g, "").substr(0, 8), i = 0, o = this.sn; i < o.length; i++) {
									var e = o[i];
									if (e == n || e == t) return !0
								}
								return !1
							}, n.prototype.on = function(r) {
								return r = r.replace(/\s/g, ""), this.tn(r) && /\d{16}/.test(r)
							}, n
						}(Hr),
						Ur = Kr,
						Wr = function() {
							var r = function(n, t) {
								return r = Object.setPrototypeOf || {
									__proto__: []
								}
								instanceof Array && function(r, n) {
									r.__proto__ = n
								} || function(r, n) {
									for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (r[t] = n[t])
								}, r(n, t)
							};
							return function(n, t) {
								if ("function" !== typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

								function i() {
									this.constructor = n
								}
								r(n, t), n.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
							}
						}(),
						zr = function(r) {
							function n() {
								return null !== r && r.apply(this, arguments) || this
							}
							return Wr(n, r), n.prototype.nn = function() {
								return "visa"
							}, n.prototype.tn = function(r) {
								return /^4/.test(r)
							}, n.prototype.on = function(r) {
								return /^4[0-9]{12}(?:[0-9]{3})?$/.test(r)
							}, n
						}(Hr),
						Yr = zr,
						Zr = function() {
							var r = function(n, t) {
								return r = Object.setPrototypeOf || {
									__proto__: []
								}
								instanceof Array && function(r, n) {
									r.__proto__ = n
								} || function(r, n) {
									for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (r[t] = n[t])
								}, r(n, t)
							};
							return function(n, t) {
								if ("function" !== typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

								function i() {
									this.constructor = n
								}
								r(n, t), n.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
							}
						}(),
						Jr = function(r) {
							function n() {
								return null !== r && r.apply(this, arguments) || this
							}
							return Zr(n, r), n.prototype.nn = function() {
								return "mastercard"
							}, n.prototype.tn = function(r) {
								return /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)/.test(r)
							}, n.prototype.on = function(r) {
								return /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/.test(r)
							}, n
						}(Hr),
						Xr = Jr,
						Qr = function() {
							function r() {
								this.an = new Array;
								var r = Sr.mr(),
									n = {
										amex: new Gr,
										mada: new Ur,
										visa: new Yr,
										mastercard: new Xr
									};
								for (var t in n) r.includes(t) && this.an.push(n[t])
							}
							return r.prototype.ln = function(r) {
								r = r.replace(/\s+/, "");
								for (var n = 0, t = this.an; n < t.length; n++) {
									var i = t[n];
									if (i.tn(r)) return i
								}
								return null
							}, r
						}(),
						rn = function() {
							function r() {
								this.un = []
							}
							return r.prototype.fn = function(r) {
								for (var n = r.split(""), t = [], i = 0; i < n.length; ++i) {
									var o = n[i];
									if ("\\" != o) "0" != o ? "a" != o ? "A" != o ? t.push({
										mn: "char",
										u: o
									}) : t.push({
										mn: "ph",
										u: "alphanum",
										dn: function(r) {
											return /^[A-Za-z0-9]$/.test(r)
										}
									}) : t.push({
										mn: "ph",
										u: "alpha",
										dn: function(r) {
											return /^[A-Za-z]$/.test(r)
										}
									}) : t.push({
										mn: "ph",
										u: "digit",
										dn: function(r) {
											return /^[0-9]$/.test(r)
										}
									});
									else {
										if (i + 1 >= n.length || " " == n[i + 1]) throw new Error("Invalid escape sequence");
										t.push({
											mn: "char",
											u: n[++i]
										})
									}
								}
								this.un = t
							}, r.prototype.hn = function(r, n) {
								if (void 0 === n && (n = ""), !this.un) return r;
								var t = r.length == n.length ? 0 : r.length < n.length ? -1 : 1;
								if (0 == t && r == n) return r;
								0 == t && r != n && (t = 1, n = "");
								for (var i = r.split(""), o = t > 0 ? 0 : i.length - 1;
									(t > 0 ? o < this.un.length : o >= 0) && !(t > 0 ? o >= i.length : o < 0);) {
									var e = this.un[o];
									if ("char" == e.mn && i[o] != e.u) {
										for (var u = !1, c = o; t > 0 ? c < this.un.length : c >= 0; c += t) {
											var s = this.un[c];
											if ("ph" == s.mn) {
												for (var a = i.slice(0, o), l = i.slice(o); l.length > 0 && s.dn && !s.dn(l[0]);) l.shift();
												for (var f = o; t > 0 ? f < c : f > c; f += t) {
													var m = this.un[f];
													if ("ph" == m.mn) break;
													if (t > 0 && "char" == m.mn && (a.push(m.u), o = f), t < 0 && "char" == m.mn) {
														if (i[f] != m.u) break;
														a.pop(), o = f
													}
												}
												i = a.concat(l), u = !0;
												break
											}
										}
										if (u) {
											o += t;
											continue
										}
									}
									if ("char" == e.mn && i[o] != e.u) {
										i = i.slice(0, o);
										break
									}
									if ("ph" == e.mn && e.dn && !e.dn(i[o])) {
										i = i.slice(0, o);
										break
									}
									o += t
								}
								return o == this.un.length && o < i.length && (i = i.slice(0, this.un.length)), i.join("")
							}, r
						}(),
						nn = rn,
						tn = {
							"warn-icon": "mysr-form-warn-icon",
							"warn-icon-art": "mysr-form-warn-icon-art",
							static: "mysr-form-static",
							hidden: "mysr-form-hidden",
							filter: "mysr-form-filter",
							"form-el": "mysr-form-form-el",
							moyasarForm: "mysr-form-moyasarForm",
							moyasarFormWrapper: "mysr-form-moyasarFormWrapper",
							method: "mysr-form-method",
							methodButtons: "mysr-form-methodButtons",
							methodButton: "mysr-form-methodButton",
							footer: "mysr-form-footer",
							configNotice: "mysr-form-configNotice",
							noticeItem: "mysr-form-noticeItem",
							divider: "mysr-form-divider",
							dividerLine: "mysr-form-dividerLine",
							dividerParagraph: "mysr-form-dividerParagraph",
							fixedWidth: "mysr-form-fixedWidth",
							button: "mysr-form-button",
							indicator: "mysr-form-indicator",
							circle: "mysr-form-circle",
							circleAnimate: "mysr-form-circleAnimate",
							"mysr-busy-circle-rotate": "mysr-form-mysr-busy-circle-rotate",
							bringToLife: "mysr-form-bringToLife",
							"mysr-live": "mysr-form-mysr-live",
							scaleDown9: "mysr-form-scaleDown9",
							busy: "mysr-form-busy",
							success: "mysr-form-success",
							fail: "mysr-form-fail",
							input: "mysr-form-input",
							inputError: "mysr-form-inputError",
							centeredInput: "mysr-form-centeredInput",
							label: "mysr-form-label",
							labelGroup: "mysr-form-labelGroup",
							mysrFieldset: "mysr-form-mysrFieldset",
							topLeftRadius0: "mysr-form-topLeftRadius0",
							topRightRadius0: "mysr-form-topRightRadius0",
							bottomLeftRadius0: "mysr-form-bottomLeftRadius0",
							bottomRightRadius0: "mysr-form-bottomRightRadius0",
							cardInfo: "mysr-form-cardInfo",
							cardInfoElement: "mysr-form-cardInfoElement",
							cardInfoHalfWidth: "mysr-form-cardInfoHalfWidth",
							inputGroup: "mysr-form-inputGroup",
							submitGroup: "mysr-form-submitGroup",
							formError: "mysr-form-formError",
							inputAlert: "mysr-form-inputAlert",
							alertDanger: "mysr-form-alertDanger",
							inputAlertHidden: "mysr-form-inputAlertHidden",
							requiredAlert: "mysr-form-requiredAlert",
							requiredAlertHidden: "mysr-form-requiredAlertHidden",
							alertContainer: "mysr-form-alertContainer",
							ccInputGroup: "mysr-form-ccInputGroup",
							ccIconsGroup: "mysr-form-ccIconsGroup",
							ccIcon: "mysr-form-ccIcon",
							ccIconHidden: "mysr-form-ccIconHidden",
							ccIconDisabled: "mysr-form-ccIconDisabled",
							ccIconAmex: "mysr-form-ccIconAmex",
							ccIconMada: "mysr-form-ccIconMada",
							ccIconVisa: "mysr-form-ccIconVisa",
							ccIconMastercard: "mysr-form-ccIconMastercard",
							applePayButton: "mysr-form-applePayButton",
							stcPayButton: "mysr-form-stcPayButton",
							stcPayLogo: "mysr-form-stcPayLogo",
							stcPayLogoLight: "mysr-form-stcPayLogoLight",
							forceLtr: "mysr-form-forceLtr",
							stcPayModal: "mysr-form-stcPayModal",
							"mysr-stcpay-modal-slide-in": "mysr-form-mysr-stcpay-modal-slide-in",
							stcPayModalHead: "mysr-form-stcPayModalHead",
							headLogo: "mysr-form-headLogo",
							headCloseButton: "mysr-form-headCloseButton",
							stcPayModalBody: "mysr-form-stcPayModalBody",
							stcPayInput: "mysr-form-stcPayInput",
							stcPayFormError: "mysr-form-stcPayFormError",
							stcPayModalShowing: "mysr-form-stcPayModalShowing",
							stcPayModalHiding: "mysr-form-stcPayModalHiding",
							"mysr-stcpay-modal-slide-out": "mysr-form-mysr-stcpay-modal-slide-out",
							stcPayOverlay: "mysr-form-stcPayOverlay",
							stcPayOverlayShowing: "mysr-form-stcPayOverlayShowing",
							"mysr-fading-in-overlay": "mysr-form-mysr-fading-in-overlay",
							stcPayOverlayHiding: "mysr-form-stcPayOverlayHiding",
							"mysr-fading-out-overlay": "mysr-form-mysr-fading-out-overlay",
							stcPayCompactForm: "mysr-form-stcPayCompactForm",
							compactButton: "mysr-form-compactButton",
							compactButtonSlideAside: "mysr-form-compactButtonSlideAside",
							"compact-btn-slide-aside-ltr": "mysr-form-compact-btn-slide-aside-ltr",
							compactButtonSlideOut: "mysr-form-compactButtonSlideOut",
							"compact-btn-slide-back-ltr": "mysr-form-compact-btn-slide-back-ltr",
							compactInput: "mysr-form-compactInput",
							stillCompactInput: "mysr-form-stillCompactInput",
							compactInputSlideIn: "mysr-form-compactInputSlideIn",
							"compact-input-slide-in-ltr": "mysr-form-compact-input-slide-in-ltr",
							compactInputSlideOut: "mysr-form-compactInputSlideOut",
							"compact-input-slide-out-ltr": "mysr-form-compact-input-slide-out-ltr",
							compactContainer: "mysr-form-compactContainer",
							stillCompactContainer: "mysr-form-stillCompactContainer",
							compactContainerSlideIn: "mysr-form-compactContainerSlideIn",
							"compact-container-slide-in": "mysr-form-compact-container-slide-in",
							compactContainerSlideOut: "mysr-form-compactContainerSlideOut",
							"compact-container-slide-out": "mysr-form-compact-container-slide-out",
							"compact-btn-slide-aside-rtl": "mysr-form-compact-btn-slide-aside-rtl",
							"compact-btn-slide-back-rtl": "mysr-form-compact-btn-slide-back-rtl",
							"compact-input-slide-in-rtl": "mysr-form-compact-input-slide-in-rtl",
							"compact-input-slide-out-rtl": "mysr-form-compact-input-slide-out-rtl"
						},
						on = {
							input: "mysr-form-input",
							inputError: "mysr-form-inputError",
							centeredInput: "mysr-form-centeredInput",
							label: "mysr-form-label",
							labelGroup: "mysr-form-labelGroup",
							mysrFieldset: "mysr-form-mysrFieldset",
							topLeftRadius0: "mysr-form-topLeftRadius0",
							topRightRadius0: "mysr-form-topRightRadius0",
							bottomLeftRadius0: "mysr-form-bottomLeftRadius0",
							bottomRightRadius0: "mysr-form-bottomRightRadius0",
							cardInfo: "mysr-form-cardInfo",
							cardInfoElement: "mysr-form-cardInfoElement",
							cardInfoHalfWidth: "mysr-form-cardInfoHalfWidth",
							inputGroup: "mysr-form-inputGroup",
							submitGroup: "mysr-form-submitGroup",
							formError: "mysr-form-formError",
							inputAlert: "mysr-form-inputAlert",
							alertDanger: "mysr-form-alertDanger",
							inputAlertHidden: "mysr-form-inputAlertHidden",
							requiredAlert: "mysr-form-requiredAlert",
							requiredAlertHidden: "mysr-form-requiredAlertHidden",
							alertContainer: "mysr-form-alertContainer"
						},
						en = function() {
							var r = function(n, t) {
								return r = Object.setPrototypeOf || {
									__proto__: []
								}
								instanceof Array && function(r, n) {
									r.__proto__ = n
								} || function(r, n) {
									for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (r[t] = n[t])
								}, r(n, t)
							};
							return function(n, t) {
								if ("function" !== typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

								function i() {
									this.constructor = n
								}
								r(n, t), n.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
							}
						}(),
						un = function() {
							return un = Object.assign || function(r) {
								for (var n, t = 1, i = arguments.length; t < i; t++)
									for (var o in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]);
								return r
							}, un.apply(this, arguments)
						},
						cn = function(r) {
							function n() {
								return null !== r && r.apply(this, arguments) || this
							}
							return en(n, r), n.prototype.render = function() {
								var r = this.props,
									n = (r.class, r.name),
									t = r.label,
									i = r.error,
									o = r.requiredError,
									e = r.innerRef,
									u = ur(function(r, n) {
										var t = {};
										for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && n.indexOf(i) < 0 && (t[i] = r[i]);
										if (null != r && "function" === typeof Object.getOwnPropertySymbols) {
											var o = 0;
											for (i = Object.getOwnPropertySymbols(r); o < i.length; o++) n.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(r, i[o]) && (t[i[o]] = r[i[o]])
										}
										return t
									}(r, ["class", "name", "label", "error", "requiredError", "innerRef"]), document.createElement("input"));
								return x("div", {
									class: on.inputGroup
								}, x("div", {
									class: on.labelGroup
								}, x("label", {
									class: on.label,
									for: n
								}, t), x("span", {
									class: ir([on.requiredAlert, o ? null : on.requiredAlertHidden])
								}, or("form.required"))), x("div", null, x("input", un({
									id: n,
									class: this.pn(),
									ref: e
								}, u)), x("div", {
									class: on.alertContainer
								}, x("span", {
									class: ir([on.inputAlert, on.alertDanger, i ? null : on.inputAlertHidden])
								}, i))))
							}, n.prototype.pn = function() {
								var r = tr(this.props.class || []);
								return r.unshift(on.input), (this.props.error || this.props.requiredError) && r.push(on.inputError), ir(r)
							}, n
						}(q),
						sn = cn,
						an = function() {
							return an = Object.assign || function(r) {
								for (var n, t = 1, i = arguments.length; t < i; t++)
									for (var o in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]);
								return r
							}, an.apply(this, arguments)
						};

					function ln(r) {
						var n = r.nn,
							t = r._n,
							i = r.yn,
							o = r.vn,
							e = r.bn,
							u = function(r, n) {
								var t = {};
								for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && n.indexOf(i) < 0 && (t[i] = r[i]);
								if (null != r && "function" === typeof Object.getOwnPropertySymbols) {
									var o = 0;
									for (i = Object.getOwnPropertySymbols(r); o < i.length; o++) n.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(r, i[o]) && (t[i[o]] = r[i[o]])
								}
								return t
							}(r, ["_name", "_name_error", "_name_required_error", "_processing", "_locked"]);
						return x(sn, an({
							name: "mysr-cc-name",
							label: or("form.name_on_card"),
							placeholder: or("form.name_on_card"),
							autocomplete: "ccname",
							error: t,
							requiredError: i,
							value: n,
							disabled: o || e,
							dir: "ltr"
						}, u))
					}

					function fn(r) {
						var n = r.wn,
							t = r.vn,
							i = r.bn,
							o = t || i;

						function e(r) {
							var t, i = [tn.ccIcon, tn["ccIcon" + (t = r, t.substring(0, 1).toUpperCase() + t.substring(1))], n && n != r ? tn.ccIconHidden : null, o ? tn.ccIconDisabled : null].filter((function(r) {
								return null != r
							}));
							return ir(i)
						}
						for (var u = {
								amex: x("span", {
									class: e("amex")
								}),
								mada: x("span", {
									class: e("mada")
								}),
								visa: x("span", {
									class: e("visa")
								}),
								mastercard: x("span", {
									class: e("mastercard")
								})
							}, c = [], s = 0, a = Sr.mr(); s < a.length; s++) {
							var l = a[s];
							(l = l.toLowerCase()) in u && c.push(u[l])
						}
						return x(M, null, c)
					}
					var mn, dn = function() {
							var r = function(n, t) {
								return r = Object.setPrototypeOf || {
									__proto__: []
								}
								instanceof Array && function(r, n) {
									r.__proto__ = n
								} || function(r, n) {
									for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (r[t] = n[t])
								}, r(n, t)
							};
							return function(n, t) {
								if ("function" !== typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

								function i() {
									this.constructor = n
								}
								r(n, t), n.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
							}
						}(),
						hn = function() {
							return hn = Object.assign || function(r) {
								for (var n, t = 1, i = arguments.length; t < i; t++)
									for (var o in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]);
								return r
							}, hn.apply(this, arguments)
						},
						pn = function(r) {
							function n() {
								return null !== r && r.apply(this, arguments) || this
							}
							return dn(n, r), n.prototype.gn = function() {
								var r = this.props,
									n = r.On,
									t = r.jn,
									i = r.Pn;
								return n || t || i
							}, n.prototype.render = function() {
								var r = this.props,
									n = r.vn,
									t = r.bn,
									i = r.In,
									o = r.An,
									e = r.Cn,
									u = r.kn,
									c = r.En,
									s = r.On,
									a = r.Sn,
									l = r.jn,
									f = r.xn,
									m = r.Pn,
									d = this.props.method,
									h = [u, c, a, f].filter((function(r) {
										return r
									}));
								return x("div", {
									class: tn.inputGroup
								}, x("div", {
									class: tn.labelGroup
								}, x("label", {
									class: tn.label,
									for: "mysr-cc-number"
								}, or("form.card_info")), x("span", {
									class: ir([tn.requiredAlert, this.gn() ? null : tn.requiredAlertHidden])
								}, or("form.required"))), x("div", {
									class: tn.cardInfo
								}, x("div", {
									class: ir([tn.cardInfoElement, tn.ccInputGroup, tn.cardInfo]),
									dir: "ltr"
								}, x("input", {
									id: "mysr-cc-number",
									type: "text",
									class: ir([tn.input, tn.bottomLeftRadius0, tn.bottomRightRadius0, c || s ? tn.inputError : null]),
									placeholder: "1234 5678 9101 1121",
									autocomplete: "cc-number",
									inputMode: "numeric",
									onInput: function(r) {
										return d.Tn(r)
									},
									onBlur: function(r) {
										return d.Mn()
									},
									onFocus: function(r) {
										return d.qn()
									},
									value: i,
									disabled: n || t
								}), x("div", {
									class: tn.ccIconsGroup
								}, x(fn, hn({}, d.state)))), x("div", {
									class: ir([tn.cardInfoElement, tn.ccInputGroup, tn.cardInfo]),
									dir: "ltr"
								}, x("input", {
									class: ir([tn.input, tn.cardInfoElement, tn.cardInfoHalfWidth, tn.topLeftRadius0, tn.topRightRadius0, tn.bottomRightRadius0, a || l ? tn.inputError : null]),
									type: "text",
									placeholder: "MM / YY",
									autocomplete: "cc-exp",
									inputMode: "numeric",
									onInput: function(r) {
										return d.Fn(r)
									},
									onBlur: function(r) {
										return d.Rn()
									},
									onFocus: function(r) {
										return d.Ln()
									},
									value: o,
									disabled: n || t
								}), x("input", {
									class: ir([tn.input, tn.cardInfoElement, tn.cardInfoHalfWidth, tn.topLeftRadius0, tn.topRightRadius0, tn.bottomLeftRadius0, f || m ? tn.inputError : null]),
									type: "text",
									placeholder: "CVC",
									autocomplete: "cc-csc",
									inputMode: "numeric",
									onInput: function(r) {
										return d.Dn(r)
									},
									onBlur: function(r) {
										return d.Bn()
									},
									onFocus: function(r) {
										return d.Hn()
									},
									value: e,
									disabled: n || t
								})), x("div", {
									class: tn.alertContainer
								}, h.map((function(r) {
									return x("span", {
										class: ir([tn.inputAlert, tn.alertDanger])
									}, r)
								})))))
							}, n
						}(q),
						_n = pn,
						yn = function() {
							function r() {}
							return r.prototype.Nn = function(r) {
								for (var n, t = 0, i = 1, o = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9], e = r.length; e;) n = parseInt(r.charAt(--e), 10), t += (i ^= 1) ? o[n] : n;
								return t % 10 === 0
							}, r.prototype.$n = function(r) {
								return !this.Nn(r)
							}, r
						}();
					! function(r) {
						r[r._CreditCard = 0] = "_CreditCard", r[r._StcPay = 1] = "_StcPay", r[r._ApplePay = 2] = "_ApplePay"
					}(mn || (mn = {}));
					var vn = mn;

					function bn() {
						return x("span", {
							class: "mysr-form-warn-icon warn-icon"
						}, x("svg", {
							xmlns: "http://www.w3.org/2000/svg",
							class: "mysr-form-warn-icon-art warn-icon-art",
							viewBox: "0 0 20 20",
							fill: "currentColor"
						}, x("path", {
							"fill-rule": "evenodd",
							d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
							"clip-rule": "evenodd"
						})), or("form.save_card_notice"))
					}
					var wn = function() {
							var r = function(n, t) {
								return r = Object.setPrototypeOf || {
									__proto__: []
								}
								instanceof Array && function(r, n) {
									r.__proto__ = n
								} || function(r, n) {
									for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (r[t] = n[t])
								}, r(n, t)
							};
							return function(n, t) {
								if ("function" !== typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

								function i() {
									this.constructor = n
								}
								r(n, t), n.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
							}
						}(),
						gn = function() {
							return gn = Object.assign || function(r) {
								for (var n, t = 1, i = arguments.length; t < i; t++)
									for (var o in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]);
								return r
							}, gn.apply(this, arguments)
						},
						On = function(r) {
							function n(n) {
								var t = r.call(this, n) || this;
								return t.state = {
									vn: !1,
									Gn: !1,
									Vn: !1,
									bn: !1,
									kn: null,
									nn: "",
									_n: null,
									yn: !1,
									In: "",
									wn: null,
									En: null,
									On: !1,
									An: "",
									Sn: null,
									jn: !1,
									Cn: "",
									xn: null,
									Pn: !1
								}, t.Kn = new Qr, t.Un = new nn, t.Un.fn("0000 0000 0000 0000"), t.Wn = new nn, t.Wn.fn("00 / 00"), t.zn = new nn, t.zn.fn("0000"), t.Yn = Mr(), t.Zn = new yn, t.Jn = t.Jn.bind(t), t.Xn = t.Xn.bind(t), t.Qn = t.Qn.bind(t), t.Tn = t.Tn.bind(t), t.Fn = t.Fn.bind(t), t.Dn = t.Dn.bind(t), t.Mn = t.Mn.bind(t), t.Rn = t.Rn.bind(t), t.Bn = t.Bn.bind(t), t.qn = t.qn.bind(t), t.Ln = t.Ln.bind(t), t.Hn = t.Hn.bind(t), t
							}
							return wn(n, r), n.prototype.componentDidMount = function() {
								Tr.Mr("form_locked", this.Jn)
							}, n.prototype.componentWillUnmount = function() {
								Tr.Rr("form_locked", this.Jn)
							}, n.prototype.Jn = function(r) {
								var n = !1;
								null !== r.detail.rt && r.detail.rt !== vn._CreditCard && (n = !0), this.setState({
									bn: n
								}), n && this.nt()
							}, n.prototype.tt = function() {
								Tr.qr("form_locked", {
									rt: vn._CreditCard
								})
							}, n.prototype.it = function() {
								Tr.qr("form_locked", {
									rt: null
								})
							}, n.prototype.Xn = function(r) {
								var n = this;
								if (r.preventDefault(), this.state.vn) return !1;
								if (this.nt(), !this.ot() || !this.et()) return !1;
								this.setState({
									vn: !0,
									Gn: !1,
									Vn: !1
								}), this.tt();
								var t = this.state.An.split("/"),
									i = t[0],
									o = t[1],
									e = {
										name: this.state.nn,
										number: this.state.In.replace(/\s/g, ""),
										month: i.trim(),
										year: null === o || void 0 === o ? void 0 : o.trim(),
										cvc: this.state.Cn
									};
								return this.Yn.Vr().then((function() {
									return n.Yn.Wr(e)
								})).then((function(r) {
									if (!r.isInitiated() && !r.isPaid()) return Promise.reject(r);
									n.Yn.Jr(r)
								})).catch((function(r) {
									return n.ut(r)
								})), !1
							}, n.prototype.ct = function(r) {
								this.setState({
									vn: !1,
									kn: r
								}), this.Yn.rn(r), this.it()
							}, n.prototype.ut = function(r) {
								var n, t = this;
								this.setState({
									Vn: !0
								}), setTimeout((function() {
									return t.setState({
										Vn: !1
									})
								}), 3e3), r instanceof Response && /4\d\d/.test(r.status.toString()) ? r.json().then((function(r) {
									return t.st(r)
								})) : r instanceof Cr ? this.ct((null === (n = r.source) || void 0 === n ? void 0 : n.message) || "Could not get error") : null === r || "string" === typeof r ? this.ct(r) : (this.ct(or("error.network")), console.log(r))
							}, n.prototype.st = function(r) {
								var n = r.errors ? null : this.Yn.Xr(r),
									t = this.Yn.Qr(r, "number", or("form.cc")),
									i = this.Yn.Qr(r, "cvc", or("form.csc")),
									o = this.Yn.Qr(r, "month", or("form.date")) || this.Yn.Qr(r, "year", or("form.date")),
									e = this.Yn.Qr(r, "last_name", or("form.last_name")) || this.Yn.Qr(r, "name", or("form.name_on_card"));
								this.setState({
									vn: !1,
									kn: n,
									_n: e,
									En: t,
									Sn: o,
									xn: i
								}), this.Yn.rn(n || t || i || o || e || or("error.unknown")), this.it()
							}, n.prototype.ot = function() {
								var r = this.state.nn,
									n = {
										_n: null,
										yn: !1
									};
								return 0 == r.trim().length ? n.yn = !0 : /^[a-zA-Z\-\s]+$/.test(r) ? /^[a-zA-Z\-]+\s+?([a-zA-Z\-]+\s?)+$/.test(r) || (n._n = or("validation.first_and_last_name_required")) : n._n = or("validation.should_be_english_letters_only"), this.setState(n), !n._n && !n.yn
							}, n.prototype.Mn = function() {
								var r, n = this.state.In;
								n = n.replace(/\s/g, "");
								var t = this.Kn.ln(n);
								t && !Sr.dr(t.nn()) && (t = null);
								var i = null !== (r = null === t || void 0 === t ? void 0 : t.on.bind(t)) && void 0 !== r ? r : null,
									o = {
										En: null,
										On: !1
									};
								return 0 == n.trim().length ? o.On = !0 : t ? (i && !i(n) || this.Zn.$n(n)) && (o.En = or("error.invalid_cc_number")) : o.En = or("error.unsupported_cc_type"), this.setState(o), !o.En && !o.On
							}, n.prototype.lt = function() {
								return parseInt((new Date).getFullYear().toString().substring(2))
							}, n.prototype.Rn = function() {
								var r = this.state.An,
									n = {
										Sn: null,
										jn: !1
									};
								if (0 == r.trim().length) n.jn = !0;
								else if (/^\d{2} ?\/ ?\d{2}$/.test(r)) {
									var t = r.split("/"),
										i = t[0],
										o = t[1],
										e = parseInt(i.trim()),
										u = parseInt(o.trim());
									e < 1 || e > 12 ? n.Sn = or("error.invalid_month") : (u < this.lt() || u > 99) && (n.Sn = or("error.invalid_year"))
								} else n.Sn = or("error.invalid_date");
								return this.setState(n), !n.Sn && !n.jn
							}, n.prototype.Bn = function() {
								var r = this.state,
									n = r.Cn,
									t = r.wn,
									i = {
										xn: null,
										Pn: !1
									};
								return 0 == n.trim().length ? i.Pn = !0 : ("amex" != t || /^\d{4}$/.test(n)) && ("amex" == t || /^\d{3}$/.test(n)) || (i.xn = or("error.invalid_csc")), this.setState(i), !i.xn && !i.Pn
							}, n.prototype.et = function() {
								return this.Mn() && this.Rn() && this.Bn()
							}, n.prototype.Qn = function(r) {
								var n;
								this.setState({
									_n: null,
									yn: !1,
									nn: null === (n = r.target) || void 0 === n ? void 0 : n.value
								})
							}, n.prototype.Tn = function(r) {
								var n, t, i, o = nr(null === (n = r.target) || void 0 === n ? void 0 : n.value),
									e = this.Kn.ln(o);
								e && !Sr.dr(e.nn()) && (e = null), this.Un.fn(null !== (t = null === e || void 0 === e ? void 0 : e.un()) && void 0 !== t ? t : "0000 0000 0000 0000"), this.zn.fn(null !== (i = null === e || void 0 === e ? void 0 : e.cn()) && void 0 !== i ? i : "0000"), this.setState({
									En: null,
									On: !1,
									In: this.Un.hn(o, this.state.In),
									wn: null === e || void 0 === e ? void 0 : e.nn()
								})
							}, n.prototype.Fn = function(r) {
								var n, t = null === (n = r.target) || void 0 === n ? void 0 : n.value;
								this.setState({
									Sn: null,
									jn: !1,
									An: this.Wn.hn(nr(t), this.state.An)
								})
							}, n.prototype.Dn = function(r) {
								var n, t = null === (n = r.target) || void 0 === n ? void 0 : n.value;
								this.setState({
									xn: null,
									Pn: !1,
									Cn: this.zn.hn(nr(t), this.state.Cn)
								})
							}, n.prototype.ft = function() {
								this.setState({
									_n: null,
									yn: !1
								})
							}, n.prototype.Hn = function() {
								this.setState({
									xn: null,
									Pn: !1
								})
							}, n.prototype.Ln = function() {
								this.setState({
									Sn: null,
									jn: !1
								})
							}, n.prototype.qn = function() {
								this.setState({
									En: null,
									On: !1
								})
							}, n.prototype.nt = function() {
								this.setState({
									kn: null,
									En: null,
									On: !1,
									Sn: null,
									jn: !1,
									xn: null,
									Pn: !1
								})
							}, n.prototype.render = function() {
								var r = this,
									n = this.state,
									t = n.vn,
									i = n.bn,
									o = n.Gn,
									e = n.Vn,
									u = new Intl.NumberFormat(Sr.V(), {
										style: "currency",
										currency: Sr.nr(),
										currencyDisplay: "rtl" == Sr.$() ? "name" : "symbol",
										minimumFractionDigits: "rtl" == Sr.$() ? 0 : void 0
									}).format(parseFloat(Sr.rr())),
									c = "rtl" != Sr.$() ? "".concat(or("button.pay"), " ").concat(u) : u;
								return x("div", {
									class: tn.method
								}, x("form", {
									onSubmit: this.Xn
								}, x(ln, gn({}, this.state, {
									onInput: function(n) {
										return r.Qn(n)
									},
									onBlur: function(n) {
										return r.ot()
									},
									onFocus: function(n) {
										return r.ft()
									}
								})), x(_n, gn({
									method: this
								}, this.state)), x(Br, {
									busy: t,
									success: o,
									fail: e,
									disabled: i
								}, c), Sr.Ir() ? x(bn, null) : null))
							}, n
						}(q),
						jn = On,
						Pn = function() {
							var r = function(n, t) {
								return r = Object.setPrototypeOf || {
									__proto__: []
								}
								instanceof Array && function(r, n) {
									r.__proto__ = n
								} || function(r, n) {
									for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (r[t] = n[t])
								}, r(n, t)
							};
							return function(n, t) {
								if ("function" !== typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

								function i() {
									this.constructor = n
								}
								r(n, t), n.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
							}
						}(),
						In = function(r) {
							function n() {
								return null !== r && r.apply(this, arguments) || this
							}
							return Pn(n, r), n.prototype.render = function() {
								var r, n = this.props,
									t = n.vn,
									i = n.bn,
									o = n.dt,
									e = n.ht,
									u = n._t,
									c = n.yt,
									s = n.vt,
									a = n.bt,
									l = n.wt,
									f = n.gt,
									m = n.Gn,
									d = n.Vn,
									h = n.kn,
									p = n.method;
								r = x(sn, l ? {
									name: "mysr-stc-otp",
									label: or("form.otp"),
									class: ir([tn.forceLtr, tn.centeredInput]),
									type: "text",
									inputMode: "numeric",
									autocomplete: "one-time-code",
									placeholder: or("form.code"),
									innerRef: function(r) {
										return p.Ot = r
									},
									value: e,
									onInput: function(r) {
										return p.jt(r)
									},
									onBlur: function(r) {
										return p.Pt()
									},
									onFocus: function(r) {
										return p.It()
									},
									error: s,
									requiredError: a,
									disabled: t || i
								} : {
									name: "mysr-stc-mobile",
									label: or("form.mobile"),
									class: ir([tn.forceLtr, tn.centeredInput]),
									type: "text",
									inputMode: "numeric",
									autocomplete: "tel-national",
									placeholder: "05x xxx xxxx",
									innerRef: function(r) {
										return p.At = r
									},
									value: o,
									onInput: function(r) {
										return p.Ct(r)
									},
									onBlur: function(r) {
										return p.kt()
									},
									onFocus: function(r) {
										return p.Et()
									},
									error: u,
									requiredError: c,
									disabled: t || i
								});
								var _ = new Intl.NumberFormat(Sr.V(), {
									style: "currency",
									currency: Sr.nr(),
									currencyDisplay: "rtl" == Sr.$() ? "name" : "symbol",
									minimumFractionDigits: "rtl" == Sr.$() ? 0 : void 0
								}).format(parseFloat(Sr.rr()));
								return x(M, null, x("div", {
									class: ir([tn.stcPayModal, f ? tn.stcPayModalHiding : tn.stcPayModalShowing])
								}, x("div", {
									class: tn.stcPayModalHead
								}, x("div", {
									class: ir([tn.stcPayLogo, tn.headLogo])
								}), x("a", {
									class: tn.headCloseButton,
									onClick: function(r) {
										return p.St(!0)
									},
									disabled: t
								}, or("button.cancel"))), x("div", {
									class: tn.stcPayModalBody
								}, x("form", {
									onSubmit: function(r) {
										return p.Xn(r), !1
									}
								}, x("div", {
									class: tn.stcPayInput
								}, r, x("span", {
									class: ir([tn.inputAlert, tn.alertDanger, tn.stcPayFormError, h ? null : tn.inputAlertHidden])
								}, h), x(Br, {
									class: tn.stcPayButton,
									disabled: t || i,
									busy: t,
									success: m,
									fail: d
								}, l ? "".concat(or("button.pay"), " ").concat(p.xt()) : "".concat(or("button.pay"), " ").concat(_)))))), x("div", {
									class: ir([tn.stcPayOverlay, f ? tn.stcPayOverlayHiding : tn.stcPayOverlayShowing]),
									onClick: function(r) {
										return p.St(!1)
									}
								}))
							}, n
						}(q),
						An = In,
						Cn = function() {
							var r = function(n, t) {
								return r = Object.setPrototypeOf || {
									__proto__: []
								}
								instanceof Array && function(r, n) {
									r.__proto__ = n
								} || function(r, n) {
									for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (r[t] = n[t])
								}, r(n, t)
							};
							return function(n, t) {
								if ("function" !== typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

								function i() {
									this.constructor = n
								}
								r(n, t), n.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
							}
						}(),
						kn = function() {
							return kn = Object.assign || function(r) {
								for (var n, t = 1, i = arguments.length; t < i; t++)
									for (var o in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]);
								return r
							}, kn.apply(this, arguments)
						},
						En = function(r) {
							function n() {
								return null !== r && r.apply(this, arguments) || this
							}
							return Cn(n, r), n.prototype.Tt = function() {
								var r = this.props,
									n = r.method;
								r.Tt || n.Tt()
							}, n.prototype.Mt = function(r) {
								r.preventDefault(), this.Tt()
							}, n.prototype.render = function() {
								var r = this,
									n = this.props,
									t = n.vn,
									i = n.bn,
									o = n.Tt;
								return x("div", {
									class: tn.methodButton
								}, x(Br, {
									onClick: function(n) {
										return r.Mt(n), !1
									},
									class: ir([tn.methodButton, tn.stcPayButton]),
									disabled: t || i,
									busy: t
								}, x("div", {
									class: tn.stcPayLogoLight
								})), o ? x(An, kn({}, this.props)) : null)
							}, n
						}(q),
						Sn = En,
						xn = function() {
							var r = function(n, t) {
								return r = Object.setPrototypeOf || {
									__proto__: []
								}
								instanceof Array && function(r, n) {
									r.__proto__ = n
								} || function(r, n) {
									for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (r[t] = n[t])
								}, r(n, t)
							};
							return function(n, t) {
								if ("function" !== typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

								function i() {
									this.constructor = n
								}
								r(n, t), n.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
							}
						}(),
						Tn = function() {
							return Tn = Object.assign || function(r) {
								for (var n, t = 1, i = arguments.length; t < i; t++)
									for (var o in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]);
								return r
							}, Tn.apply(this, arguments)
						},
						Mn = function(r) {
							function n() {
								return null !== r && r.apply(this, arguments) || this
							}
							return xn(n, r), n.prototype.render = function() {
								var r = this.props,
									n = r.name,
									t = (r.class, r.containerClass, r.error, r.requiredError, r.innerRef),
									i = ur(function(r, n) {
										var t = {};
										for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && n.indexOf(i) < 0 && (t[i] = r[i]);
										if (null != r && "function" === typeof Object.getOwnPropertySymbols) {
											var o = 0;
											for (i = Object.getOwnPropertySymbols(r); o < i.length; o++) n.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(r, i[o]) && (t[i[o]] = r[i[o]])
										}
										return t
									}(r, ["name", "class", "containerClass", "error", "requiredError", "innerRef"]), document.createElement("input"));
								return x("div", {
									class: this.qt()
								}, x("input", Tn({
									id: n,
									class: this.pn(),
									type: "text",
									ref: t
								}, i)), this.Ft())
							}, n.prototype.Ft = function() {
								var r = this.props,
									n = r.error,
									t = r.requiredError;
								if (!t || !n) return null;
								if (n instanceof Array && 0 == n.length) return null;
								var i = er(n || []).filter((function(r) {
									return r
								})).map((function(r) {
									return x("span", {
										class: ir([on.inputAlert, on.alertDanger])
									}, r)
								})).toArray();
								return x("div", {
									class: on.alertContainer
								}, t ? x("span", {
									class: ir([on.inputAlert, on.alertDanger])
								}, or("form.required")) : null, i)
							}, n.prototype.pn = function() {
								var r = tr(this.props.class || []);
								return r.unshift(on.input), (er(this.props.error).filter((function(r) {
									return r
								})).any() || this.props.requiredError) && r.push(on.inputError), ir(r)
							}, n.prototype.qt = function() {
								var r = tr(this.props.containerClass || []);
								return r.unshift(on.basicInput), ir(r)
							}, n
						}(q),
						qn = Mn,
						Fn = function() {
							var r = function(n, t) {
								return r = Object.setPrototypeOf || {
									__proto__: []
								}
								instanceof Array && function(r, n) {
									r.__proto__ = n
								} || function(r, n) {
									for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (r[t] = n[t])
								}, r(n, t)
							};
							return function(n, t) {
								if ("function" !== typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

								function i() {
									this.constructor = n
								}
								r(n, t), n.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
							}
						}(),
						Rn = function(r) {
							function n() {
								return null !== r && r.apply(this, arguments) || this
							}
							return Fn(n, r), n.prototype.render = function() {
								var r = this.props,
									n = r.Tt,
									t = r.gt,
									i = r.wt,
									o = r.vn,
									e = r.bn,
									u = r.Gn,
									c = r.Vn,
									s = r._t,
									a = r.yt,
									l = r.vt,
									f = r.bt,
									m = r.kn,
									d = r.method,
									h = [tn.methodButton, tn.stcPayButton];
								n && (h.push(tn.compactButton), h.push(tn.compactButtonSlideAside)), t && h.push(tn.compactButtonSlideOut);
								var p = new Intl.NumberFormat(Sr.V(), {
										style: "currency",
										currency: Sr.nr(),
										currencyDisplay: "rtl" == Sr.$() ? "name" : "symbol",
										minimumFractionDigits: "rtl" == Sr.$() ? 0 : void 0
									}).format(parseFloat(Sr.rr())),
									_ = [s, l, m].filter((function(r) {
										return r
									})).map((function(r) {
										return x("span", {
											class: ir([tn.inputAlert, tn.alertDanger])
										}, r)
									})),
									y = a || f;
								return x("div", {
									class: tn.methodButton
								}, x("form", {
									onSubmit: function(r) {
										return d.Xn(r), !1
									}
								}, x("div", {
									class: tn.stcPayCompactForm,
									dir: Sr.$()
								}, this.Rt(), x(Br, {
									type: "submit",
									class: ir(h),
									disabled: o || e,
									busy: o,
									success: u,
									fail: c
								}, n ? i ? "".concat(or("button.pay"), " ").concat(d.xt()) : p : x("div", {
									class: tn.stcPayLogoLight
								}))), x("div", {
									class: tn.alertContainer
								}, y ? x("span", {
									class: ir([tn.inputAlert, tn.alertDanger])
								}, or("form.required")) : null, _)))
							}, n.prototype.Rt = function() {
								var r = this.props,
									n = r.Tt,
									t = r.gt,
									i = r.wt,
									o = r.vn,
									e = r.bn,
									u = r.dt,
									c = r.ht,
									s = r._t,
									a = r.yt,
									l = r.vt,
									f = r.bt,
									m = r.kn,
									d = r.method,
									h = [tn.forceLtr, tn.centeredInput, tn.compactInput],
									p = [tn.compactContainer];
								return n && (h.push(tn.compactInputSlideIn), p.push(tn.compactContainerSlideIn)), t && (h.push(tn.compactInputSlideOut), p.push(tn.compactContainerSlideOut)), (s || a || l || f || m) && h.push(tn.inputError), n ? x(qn, i ? {
									name: "mysr-stc-otp",
									label: or("form.otp"),
									containerClass: tn.stillCompactContainer,
									class: ir([tn.forceLtr, tn.certeredInput, tn.compactInput, tn.stillCompactInput]),
									type: "text",
									inputMode: "numeric",
									autocomplete: "one-time-code",
									placeholder: or("form.code"),
									innerRef: function(r) {
										return d.Ot = r
									},
									value: c,
									onInput: function(r) {
										return d.jt(r)
									},
									onBlur: function(r) {
										return d.Pt()
									},
									onFocus: function(r) {
										return d.It()
									},
									disabled: o || e
								} : {
									name: "mysr-stc-mobile",
									label: or("form.mobile"),
									containerClass: ir(p),
									class: ir(h),
									type: "text",
									inputMode: "numeric",
									autocomplete: "tel-national",
									placeholder: "05x xxx xxxx",
									innerRef: function(r) {
										return d.At = r
									},
									value: u,
									onInput: function(r) {
										return d.Ct(r)
									},
									onBlur: function(r) {
										return d.kt()
									},
									onFocus: function(r) {
										return d.Et()
									},
									disabled: o || e
								}) : null
							}, n
						}(q),
						Ln = Rn,
						Dn = function() {
							var r = function(n, t) {
								return r = Object.setPrototypeOf || {
									__proto__: []
								}
								instanceof Array && function(r, n) {
									r.__proto__ = n
								} || function(r, n) {
									for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (r[t] = n[t])
								}, r(n, t)
							};
							return function(n, t) {
								if ("function" !== typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

								function i() {
									this.constructor = n
								}
								r(n, t), n.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
							}
						}(),
						Bn = function() {
							return Bn = Object.assign || function(r) {
								for (var n, t = 1, i = arguments.length; t < i; t++)
									for (var o in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]);
								return r
							}, Bn.apply(this, arguments)
						},
						Hn = function(r) {
							function n(n) {
								var t = r.call(this, n) || this;
								return t.state = {
									vn: !1,
									Gn: !1,
									Vn: !1,
									bn: !1,
									dt: "",
									_t: null,
									yt: !1,
									wt: !1,
									ht: "",
									vt: null,
									bt: !1,
									Lt: null,
									Dt: null,
									Bt: null,
									kn: null,
									Ht: null,
									Nt: t.Nt(),
									Tt: !1,
									gt: !1
								}, t.$t = new nn, t.$t.fn("000 000 0000"), t.Gt = new nn, t.Gt.fn("00000000"), t.At = null, t.Ot = null, t.Vt = null, t.Kt = null, t.Yn = Mr(), t.Jn = t.Jn.bind(t), t.Xn = t.Xn.bind(t), t.kt = t.kt.bind(t), t.Pt = t.Pt.bind(t), t.Ct = t.Ct.bind(t), t.jt = t.jt.bind(t), t.Et = t.Et.bind(t), t.It = t.It.bind(t), t.xt = t.xt.bind(t), t.Tt = t.Tt.bind(t), t.Ut = t.Ut.bind(t), t.St = t.St.bind(t), t
							}
							return Dn(n, r), n.prototype.componentDidMount = function() {
								Tr.Mr("form_locked", this.Jn)
							}, n.prototype.componentWillUnmount = function() {
								Tr.Rr("form_locked", this.Jn)
							}, n.prototype.Jn = function(r) {
								var n = !1;
								null !== r.detail.rt && r.detail.rt !== vn._StcPay && (n = !0), this.setState({
									bn: n
								})
							}, n.prototype.tt = function() {
								Tr.qr("form_locked", {
									rt: vn._StcPay
								})
							}, n.prototype.it = function() {
								Tr.qr("form_locked", {
									rt: null
								})
							}, n.prototype.Xn = function(r) {
								r.preventDefault();
								var n = this.state,
									t = n.vn,
									i = n.wt;
								n.Tt ? t || (i ? this.Wt() : this.Ur()) : this.Tt()
							}, n.prototype.Ur = function() {
								var r = this;
								this.kt() && (this.setState({
									vn: !0,
									kn: null
								}), this.tt(), this.Yn.Vr().then((function() {
									r.Yn.zr(r.state.dt.replace(/\s/g, "")).then((function(r) {
										return r.isInitiated() ? r : Promise.reject(r)
									})).then((function(n) {
										return r.zt(n)
									})).catch((function(n) {
										return r.ut(n)
									}))
								})).catch((function(n) {
									r.setState({
										vn: !1
									}), r.Yn.rn(n), setTimeout((function() {
										return r.St(!0, n)
									}), 0)
								})))
							}, n.prototype.zt = function(r) {
								var n = this;
								this.setState({
									vn: !1,
									Ht: r,
									wt: !0,
									Dt: null,
									Lt: this.Yt()
								}), setTimeout((function() {
									return n.Ut()
								}), 100), setTimeout((function() {
									return n.Zt()
								}), 1e3)
							}, n.prototype.Yt = function() {
								return (new Date).getTime()
							}, n.prototype.Jt = function() {
								var r = this.state.Lt;
								return null === r ? null : this.Yt() - r
							}, n.prototype.Zt = function() {
								var r = this,
									n = this.Jt();
								null != this.state.Ht && (n && n > 1 ? (this.setState({}), setTimeout((function() {
									return r.Zt()
								}), 1e3)) : this.Xt(or("error.otp_time_out")))
							}, n.prototype.Qt = function() {
								var r = this;
								setTimeout((function() {
									return r.setState({
										Vn: !1,
										ht: "",
										wt: !1,
										Bt: null
									})
								}), 3e3)
							}, n.prototype.xt = function() {
								var r, n = 3e5,
									t = null !== (r = this.Jt()) && void 0 !== r ? r : n,
									i = n > t ? n - t : 0,
									o = (i = Math.floor(i / 1e3)) % 60;
								return Math.floor(i / 60).toString() + ":" + o.toString().padStart(2, "0")
							}, n.prototype.Xt = function(r) {
								this.setState({
									vn: !1,
									kn: r,
									Vn: !0
								}), this.Yn.rn(r), this.it()
							}, n.prototype.Wt = function() {
								var r = this;
								if (this.Pt()) {
									var n = this.state,
										t = n.Ht,
										i = n.ht;
									this.setState({
										vn: !0
									}), this.Yn.Yr((null === t || void 0 === t ? void 0 : t.source).transaction_url, i).then((function(r) {
										return r.isPaid() ? r : Promise.reject(r)
									})).then((function(n) {
										return r.ri(n)
									})).catch((function(n) {
										return r.ut(n)
									}))
								}
							}, n.prototype.ri = function(r) {
								var n = this;
								this.setState({
									Gn: !0
								}), setTimeout((function() {
									return n.Yn.Jr(r)
								}), 1)
							}, n.prototype.ut = function(r) {
								var n, t = this;
								this.setState({
									Vn: !0
								}), setTimeout((function() {
									return t.setState({
										Vn: !1
									})
								}), 3e3), r instanceof Response && /4\d\d/.test(r.status.toString()) ? r.json().then((function(r) {
									return t.st(r)
								})) : r instanceof Cr ? this.Xt((null === (n = r.source) || void 0 === n ? void 0 : n.message) || or("error.invalid_otp")) : null === r || "string" === typeof r ? this.Xt(r) : (this.Xt(or("error.network")), console.log(r))
							}, n.prototype.st = function(r) {
								var n = r.errors ? null : this.Yn.Xr(r),
									t = this.Yn.Qr(r, "mobile", or("form.mobile")),
									i = this.Yn.Qr(r, "otp_value", or("form.otp"));
								this.setState({
									vn: !1,
									kn: n,
									_t: t,
									vt: i
								}), this.Yn.rn(n || t || i || or("error.unknown")), this.Qt(), this.it()
							}, n.prototype.Ut = function() {
								var r, n;
								null === (r = this.Ot) || void 0 === r || r.focus(), null === (n = this.At) || void 0 === n || n.focus()
							}, n.prototype.kt = function() {
								var r = this.state.dt,
									n = /^05[503649187][0-9]{7}$/.test(r.replace(/\s/g, "")),
									t = 0 == r.trim().length;
								return this.setState({
									_t: t || n ? null : or("error.invalid_mobile"),
									yt: t
								}), n && !t
							}, n.prototype.Pt = function() {
								var r = /^[0-9]{4,}$/.test(this.state.ht),
									n = 0 == this.state.ht.trim().length;
								return this.setState({
									vt: n || r ? null : or("error.invalid_otp"),
									bt: n
								}), r && !n
							}, n.prototype.Ct = function(r) {
								var n, t = this,
									i = this.state,
									o = i.dt,
									e = i.Dt,
									u = nr(null === (n = r.target) || void 0 === n ? void 0 : n.value);
								this.setState({
									_t: null,
									yt: !1,
									dt: this.$t.hn(u, o),
									Dt: null === e ? r.timeStamp : e
								}), null !== this.Vt && clearTimeout(this.Vt), this.Vt = setTimeout((function() {
									var n = t.state.Dt;
									n || (n = (new Date).getTime()), "insertFromPaste" == r.inputType || r.timeStamp - n > 1 && r.timeStamp - n < 300 && t.kt() ? t.Xn(r) : t.setState({
										Dt: null
									})
								}), 400)
							}, n.prototype.jt = function(r) {
								var n, t = this,
									i = this.state,
									o = i.ht,
									e = i.Bt,
									u = nr(null === (n = r.target) || void 0 === n ? void 0 : n.value);
								this.setState({
									vt: null,
									bt: !1,
									ht: this.Gt.hn(u, o),
									Bt: null === e ? r.timeStamp : e
								}), null !== this.Kt && clearTimeout(this.Kt), this.Kt = setTimeout((function() {
									var n = t.state.Bt;
									n || (n = (new Date).getTime()), "insertFromPaste" == r.inputType || r.timeStamp - n > 1 && r.timeStamp - n < 100 && t.Pt() ? t.Xn(r) : t.setState({
										Bt: null
									})
								}), 400)
							}, n.prototype.Et = function() {
								this.setState({
									_t: null,
									yt: !1
								})
							}, n.prototype.It = function() {
								this.setState({
									vt: null,
									bt: !1
								})
							}, n.prototype.Tt = function() {
								this.state.Tt || (this.state.Nt && document.body && (document.body.style.overflow = "hidden"), this.setState({
									Tt: !0
								}), setTimeout(this.Ut, this.state.Nt ? 500 : 700))
							}, n.prototype.St = function(r, n) {
								var t = this;
								void 0 === r && (r = !1), void 0 === n && (n = null);
								var i = this.state,
									o = i.vn,
									e = i.wt,
									u = i.Tt,
									c = i.gt;
								o || !r && e || !u || c || (this.setState({
									gt: !0
								}), setTimeout((function() {
									t.setState({
										vn: !1,
										Tt: !1,
										gt: !1,
										wt: !1,
										dt: "",
										ht: "",
										_t: null,
										vt: null,
										yt: !1,
										bt: !1,
										Ht: null,
										Dt: null,
										Bt: null,
										Lt: null,
										kn: n,
										Vn: !1
									}), t.state.Nt && document.body && (document.body.style.overflow = ""), t.it()
								}), 500))
							}, n.prototype.Nt = function() {
								return window.innerWidth < 768
							}, n.prototype.render = function() {
								return this.state.Nt ? x(Sn, Bn({}, this.state, {
									method: this
								})) : x(Ln, Bn({}, this.state, {
									method: this
								}))
							}, n
						}(q),
						Nn = Hn,
						$n = function() {
							var r = function(n, t) {
								return r = Object.setPrototypeOf || {
									__proto__: []
								}
								instanceof Array && function(r, n) {
									r.__proto__ = n
								} || function(r, n) {
									for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (r[t] = n[t])
								}, r(n, t)
							};
							return function(n, t) {
								if ("function" !== typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

								function i() {
									this.constructor = n
								}
								r(n, t), n.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
							}
						}(),
						Gn = function() {
							return Gn = Object.assign || function(r) {
								for (var n, t = 1, i = arguments.length; t < i; t++)
									for (var o in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]);
								return r
							}, Gn.apply(this, arguments)
						},
						Vn = function(r) {
							function n(n) {
								var t = r.call(this, n) || this;
								return t.ni = function(r, n) {
									t.it();
									try {
										r.abort()
									} catch (i) {}
									t.Yn.rn(n)
								}, t.state = {
									vn: !1,
									bn: !1
								}, t.Yn = Mr(), t.Jn = t.Jn.bind(t), t
							}
							return $n(n, r), n.ti = function() {
								try {
									return Promise.resolve("undefined" !== typeof window.ApplePaySession && ApplePaySession.canMakePayments() && ApplePaySession.supportsVersion(Sr.vr()))
								} catch (A) {
									return Promise.reject(A)
								}
							}, n.prototype.componentDidMount = function() {
								Tr.Mr("form_locked", this.Jn)
							}, n.prototype.componentWillUnmount = function() {
								Tr.Rr("form_locked", this.Jn)
							}, n.prototype.Jn = function(r) {
								var n = !1;
								null !== r.detail.rt && r.detail.rt !== vn._ApplePay && (n = !0), this.setState({
									bn: n
								})
							}, n.prototype.tt = function() {
								Tr.qr("form_locked", {
									rt: vn._ApplePay
								})
							}, n.prototype.it = function() {
								Tr.qr("form_locked", {
									rt: null
								})
							}, n.prototype.render = function() {
								var r = this;
								return x("div", {
									class: tn.methodButton
								}, x(Br, Gn({
									class: tn.applePayButton,
									onClick: function(n) {
										return r.ii(n), !1
									}
								}, this.props)))
							}, n.prototype.ii = function(r) {
								var n = this;
								r.preventDefault(), this.tt();
								var t = null;
								try {
									t = this.oi()
								} catch (r) {
									return this.it(), void this.Yn.rn(r)
								}
								t.onvalidatemerchant = function(r) {
									n.Yn.Vr().then((function() {
										return fetch(Sr.yr(), {
											method: "POST",
											credentials: "same-origin",
											headers: {
												"Content-Type": "application/json",
												"X-Moyasar-Form-Version": "v1.11.0"
											},
											body: JSON.stringify({
												validation_url: r.validationURL,
												domain_name: Sr.jr(),
												display_name: Sr._r(),
												publishable_api_key: Sr.Y()
											})
										})
									})).then((function(r) {
										return r.ok ? r : Promise.reject(r)
									})).then((function(r) {
										return r.json()
									})).then((function(r) {
										return t.completeMerchantValidation(r)
									})).catch((function(r) {
										return n.ni(t, r)
									}))
								}, t.onpaymentauthorized = function(r) {
									n.Yn.Zr(r.payment.token).then((function(r) {
										return r.isPaid() ? r : Promise.reject(r)
									})).then((function(r) {
										return n.ei(t, r)
									})).catch((function(r) {
										return n.ui(t, r)
									}))
								}, t.oncancel = function(r) {
									var i;
									r instanceof Error && console.log(r);
									var o = null;
									"unknown" === (null === (i = null === r || void 0 === r ? void 0 : r.sessionError) || void 0 === i ? void 0 : i.code) && (o = or("error.unknown")), n.ni(t, o)
								}, t.begin()
							}, n.prototype.oi = function() {
								return new ApplePaySession(Sr.vr(), {
									countryCode: Sr.tr(),
									currencyCode: Sr.nr(),
									supportedNetworks: Sr.hr(),
									merchantCapabilities: Sr.pr(),
									supportedCountries: Sr.br(),
									total: {
										label: Sr._r(),
										amount: Sr.rr()
									}
								})
							}, n.prototype.ei = function(r, n) {
								var t = this;
								this.it(), r.completePayment({
									status: ApplePaySession.STATUS_SUCCESS
								}), setTimeout((function() {
									return t.Yn.Jr(n)
								}), 1500)
							}, n.prototype.ui = function(r, n) {
								var t;
								this.it(), r.completePayment({
									status: ApplePaySession.STATUS_FAILURE,
									errors: []
								});
								var i = "Payment failed.";
								n instanceof Cr && n.isFailed() ? i += " Error: " + (null === (t = n.source) || void 0 === t ? void 0 : t.message) : n instanceof Response ? i += " Error: " + n.statusText : "string" === typeof n && (i += " Error: " + n), this.Yn.rn(i)
							}, n
						}(q),
						Kn = Vn,
						Un = "mysr-form-dividerLine",
						Wn = function() {
							var r = function(n, t) {
								return r = Object.setPrototypeOf || {
									__proto__: []
								}
								instanceof Array && function(r, n) {
									r.__proto__ = n
								} || function(r, n) {
									for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (r[t] = n[t])
								}, r(n, t)
							};
							return function(n, t) {
								if ("function" !== typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

								function i() {
									this.constructor = n
								}
								r(n, t), n.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
							}
						}(),
						zn = function(r) {
							function n() {
								return null !== r && r.apply(this, arguments) || this
							}
							return Wn(n, r), n.prototype.render = function() {
								var r = Sr.Z();
								return x("div", {
									class: "mysr-form-footer"
								}, x("a", {
									href: "https://moyasar.com/?ref=payment-form-v1.11.0",
									target: "_blank"
								}, or("form.powered_by"), " ", x("strong", null, or("common.moyasar"))), r ? x("span", null, or("common.test_mode_disclaimer")) : null)
							}, n
						}(q),
						Yn = zn,
						Zn = function() {
							function r(r) {
								this.ci = r
							}
							return r.prototype.si = function() {
								for (var r = [], n = 0, t = this.ai(); n < t.length; n++) {
									e = (e = t[n]).bind(this.ci);
									try {
										e()
									} catch (A) {
										r.push(A.message)
									}
								}
								if (this.ci.wr())
									for (var i = 0, o = this.li(); i < o.length; i++) {
										var e;
										e = (e = o[i]).bind(this.ci);
										try {
											e()
										} catch (A) {
											r.push(A.message)
										}
									}
								return this.ci.Z() || this.ci.J() || r.push("This web page is not secure, please enable HTTPS or use a testing key."), r
							}, r.prototype.ai = function() {
								return [this.ci.W, this.ci.Y, this.ci.U, this.ci.mr, this.ci.X, this.ci.rr, this.ci.nr, this.ci.ir, this.ci.er, this.ci.ur, this.ci.cr, this.ci.sr, this.ci.lr, this.ci.gr, this.ci.Or, this.ci.Ar]
							}, r.prototype.li = function() {
								return [this.ci._r, this.ci.yr, this.ci.vr, this.ci.tr, this.ci.br]
							}, r
						}(),
						Jn = Zn,
						Xn = function() {
							var r = function(n, t) {
								return r = Object.setPrototypeOf || {
									__proto__: []
								}
								instanceof Array && function(r, n) {
									r.__proto__ = n
								} || function(r, n) {
									for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (r[t] = n[t])
								}, r(n, t)
							};
							return function(n, t) {
								if ("function" !== typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

								function i() {
									this.constructor = n
								}
								r(n, t), n.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
							}
						}(),
						Qn = function(r) {
							function n(n) {
								var t = r.call(this, n) || this;
								return t.state = {
									fi: !0,
									mi: []
								}, t
							}
							return Xn(n, r), n.prototype.componentDidMount = function() {
								var r = this;
								Tr.Lr(), Kn.ti().then((function(n) {
									return r.di(n)
								})).catch((function(n) {
									return r.di(!1)
								}))
							}, n.prototype.di = function(r) {
								var n = Sr.U();
								r || (n = er(n).filter((function(r) {
									return "applepay" != r
								})).toArray()), this.setState({
									fi: !1,
									mi: n
								})
							}, n.prototype.hi = function(r) {
								return er(this.state.mi).has((function(n) {
									return n == r
								}))
							}, n.prototype.pi = function() {
								return new Jn(Sr).si()
							}, n.prototype.render = function() {
								var r = this.pi();
								if (r.length > 0) return this._i(r);
								if (this.state.fi) return x("div", null, "Loading");
								var n = this.state.mi,
									t = n.length > 1 && er(n).has((function(r) {
										return "creditcard" == r
									}));
								return x(M, null, x("div", {
									class: "mysr-form-methodButtons"
								}, this.hi("applepay") ? x(Kn, null) : null, this.hi("stcpay") ? x(Nn, null) : null), this.hi("creditcard") ? x(M, null, t ? x("div", {
									class: "mysr-form-divider"
								}, x("div", {
									class: Un
								}), x("p", {
									class: "mysr-form-dividerParagraph"
								}, or("form.or_pay_with_card")), x("div", {
									class: Un
								})) : null, x("div", null, x(jn, null))) : null, x(Yn, null))
							}, n.prototype._i = function(r) {
								return x(M, null, x("div", {
									class: "mysr-form-configNotice"
								}, r.map((function(r) {
									return x("span", {
										class: "mysr-form-noticeItem"
									}, r)
								}))), x(Yn, null))
							}, n.init = function(r) {
								if ("object" !== typeof r) throw new Error("Configurations must be an object");
								Sr.B(r), rt()
							}, n.setAmount = function(r) {
								Sr.H({
									amount: r
								}), Sr.X(), rt()
							}, n.version = "v1.11.0", n
						}(q);

					function rt() {
						var r = Sr.N();
						r.classList.add("mysr-form-moyasarForm"), r.id = "mysr-form-form-el", r.setAttribute("payment-form", "true"), Sr.G() && r.classList.add("mysr-form-fixedWidth"),
							function(r, n, t) {
								var i, o, e;
								b.v && b.v(r, n), o = (i = "function" == typeof t) ? null : t && t._ || n._, e = [], U(n, r = (!i && t || n)._ = x(M, null, [r]), o || A, A, void 0 !== n.ownerSVGElement, !i && t ? [t] : o ? null : n.firstChild ? v.call(n.childNodes) : null, e, !i && t ? t : o ? o.j : n.firstChild, i), W(e, r)
							}(x(Qn, null), r)
					}
					var nt = Qn
				},
				280: function() {
					"function" !== typeof Object.assign && Object.defineProperty(Object, "assign", {
						value: function(r, n) {
							if (null === r || void 0 === r) throw new TypeError("Cannot convert undefined or null to object");
							for (var t = Object(r), i = 1; i < arguments.length; i++) {
								var o = arguments[i];
								if (null !== o && void 0 !== o)
									for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e])
							}
							return t
						},
						writable: !0,
						configurable: !0
					})
				},
				70: function() {
					"function" !== typeof Object.entries && (Object.entries = function(r) {
						for (var n = Object.keys(r), t = n.length, i = new Array(t); t--;) i[t] = [n[t], r[n[t]]];
						return i
					})
				},
				624: function() {
					"function" !== typeof String.prototype.padStart && (String.prototype.padStart = function(r, n) {
						return r >>= 0, n = String("undefined" !== typeof n ? n : " "), this.length > r ? String(this) : ((r -= this.length) > n.length && (n += n.repeat(r / n.length)), n.slice(0, r) + String(this))
					})
				}
			},
			n = {};

		function t(i) {
			var o = n[i];
			if (void 0 !== o) return o.exports;
			var e = n[i] = {
				exports: {}
			};
			return r[i](e, e.exports, t), e.exports
		}
		t.d = function(r, n) {
			for (var i in n) t.o(n, i) && !t.o(r, i) && Object.defineProperty(r, i, {
				enumerable: !0,
				get: n[i]
			})
		}, t.g = function() {
			if ("object" === typeof globalThis) return globalThis;
			try {
				return this || new Function("return this")()
			} catch (r) {
				if ("object" === typeof window) return window
			}
		}(), t.o = function(r, n) {
			return Object.prototype.hasOwnProperty.call(r, n)
		};
		var i = t(629);
		return i.default
	}()
}, "object" === typeof exports && "object" === typeof module ? module.exports = n() : "function" === typeof define && define.amd ? define([], n) : "object" === typeof exports ? exports.Moyasar = n() : this.Moyasar = n();
//# sourceMappingURL=moyasar.js.map