/*! For license information please see bundle.js.LICENSE.txt */
(() => {
	var e, t, n = {
			679: (e, t, n) => {
				"use strict";
				var r = n(296),
					a = {
						childContextTypes: !0,
						contextType: !0,
						contextTypes: !0,
						defaultProps: !0,
						displayName: !0,
						getDefaultProps: !0,
						getDerivedStateFromError: !0,
						getDerivedStateFromProps: !0,
						mixins: !0,
						propTypes: !0,
						type: !0
					},
					o = {
						name: !0,
						length: !0,
						prototype: !0,
						caller: !0,
						callee: !0,
						arguments: !0,
						arity: !0
					},
					i = {
						$$typeof: !0,
						compare: !0,
						defaultProps: !0,
						displayName: !0,
						propTypes: !0,
						type: !0
					},
					s = {};

				function l(e) {
					return r.isMemo(e) ? i : s[e.$$typeof] || a
				}
				s[r.ForwardRef] = {
					$$typeof: !0,
					render: !0,
					defaultProps: !0,
					displayName: !0,
					propTypes: !0
				}, s[r.Memo] = i;
				var u = Object.defineProperty,
					c = Object.getOwnPropertyNames,
					d = Object.getOwnPropertySymbols,
					f = Object.getOwnPropertyDescriptor,
					p = Object.getPrototypeOf,
					h = Object.prototype;
				e.exports = function e(t, n, r) {
					if ("string" != typeof n) {
						if (h) {
							var a = p(n);
							a && a !== h && e(t, a, r)
						}
						var i = c(n);
						d && (i = i.concat(d(n)));
						for (var s = l(t), m = l(n), g = 0; g < i.length; ++g) {
							var y = i[g];
							if (!(o[y] || r && r[y] || m && m[y] || s && s[y])) {
								var v = f(n, y);
								try {
									u(t, y, v)
								} catch (e) {}
							}
						}
					}
					return t
				}
			},
			103: (e, t) => {
				"use strict";
				var n = "function" == typeof Symbol && Symbol.for,
					r = n ? Symbol.for("react.element") : 60103,
					a = n ? Symbol.for("react.portal") : 60106,
					o = n ? Symbol.for("react.fragment") : 60107,
					i = n ? Symbol.for("react.strict_mode") : 60108,
					s = n ? Symbol.for("react.profiler") : 60114,
					l = n ? Symbol.for("react.provider") : 60109,
					u = n ? Symbol.for("react.context") : 60110,
					c = n ? Symbol.for("react.async_mode") : 60111,
					d = n ? Symbol.for("react.concurrent_mode") : 60111,
					f = n ? Symbol.for("react.forward_ref") : 60112,
					p = n ? Symbol.for("react.suspense") : 60113,
					h = n ? Symbol.for("react.suspense_list") : 60120,
					m = n ? Symbol.for("react.memo") : 60115,
					g = n ? Symbol.for("react.lazy") : 60116,
					y = n ? Symbol.for("react.block") : 60121,
					v = n ? Symbol.for("react.fundamental") : 60117,
					b = n ? Symbol.for("react.responder") : 60118,
					w = n ? Symbol.for("react.scope") : 60119;

				function x(e) {
					if ("object" == typeof e && null !== e) {
						var t = e.$$typeof;
						switch (t) {
							case r:
								switch (e = e.type) {
									case c:
									case d:
									case o:
									case s:
									case i:
									case p:
										return e;
									default:
										switch (e = e && e.$$typeof) {
											case u:
											case f:
											case g:
											case m:
											case l:
												return e;
											default:
												return t
										}
								}
							case a:
								return t
						}
					}
				}

				function k(e) {
					return x(e) === d
				}
				t.AsyncMode = c, t.ConcurrentMode = d, t.ContextConsumer = u, t.ContextProvider = l, t.Element = r, t.ForwardRef = f, t.Fragment = o, t.Lazy = g, t.Memo = m, t.Portal = a, t.Profiler = s, t.StrictMode = i, t.Suspense = p, t.isAsyncMode = function(e) {
					return k(e) || x(e) === c
				}, t.isConcurrentMode = k, t.isContextConsumer = function(e) {
					return x(e) === u
				}, t.isContextProvider = function(e) {
					return x(e) === l
				}, t.isElement = function(e) {
					return "object" == typeof e && null !== e && e.$$typeof === r
				}, t.isForwardRef = function(e) {
					return x(e) === f
				}, t.isFragment = function(e) {
					return x(e) === o
				}, t.isLazy = function(e) {
					return x(e) === g
				}, t.isMemo = function(e) {
					return x(e) === m
				}, t.isPortal = function(e) {
					return x(e) === a
				}, t.isProfiler = function(e) {
					return x(e) === s
				}, t.isStrictMode = function(e) {
					return x(e) === i
				}, t.isSuspense = function(e) {
					return x(e) === p
				}, t.isValidElementType = function(e) {
					return "string" == typeof e || "function" == typeof e || e === o || e === d || e === s || e === i || e === p || e === h || "object" == typeof e && null !== e && (e.$$typeof === g || e.$$typeof === m || e.$$typeof === l || e.$$typeof === u || e.$$typeof === f || e.$$typeof === v || e.$$typeof === b || e.$$typeof === w || e.$$typeof === y)
				}, t.typeOf = x
			},
			296: (e, t, n) => {
				"use strict";
				e.exports = n(103)
			},
			448: (e, t, n) => {
				"use strict";
				var r = n(294),
					a = n(840);

				function o(e) {
					for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
					return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
				}
				var i = new Set,
					s = {};

				function l(e, t) {
					u(e, t), u(e + "Capture", t)
				}

				function u(e, t) {
					for (s[e] = t, e = 0; e < t.length; e++) i.add(t[e])
				}
				var c = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
					d = Object.prototype.hasOwnProperty,
					f = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
					p = {},
					h = {};

				function m(e, t, n, r, a, o, i) {
					this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i
				}
				var g = {};
				"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
					g[e] = new m(e, 0, !1, e, null, !1, !1)
				})), [
					["acceptCharset", "accept-charset"],
					["className", "class"],
					["htmlFor", "for"],
					["httpEquiv", "http-equiv"]
				].forEach((function(e) {
					var t = e[0];
					g[t] = new m(t, 1, !1, e[1], null, !1, !1)
				})), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
					g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1)
				})), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
					g[e] = new m(e, 2, !1, e, null, !1, !1)
				})), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
					g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1)
				})), ["checked", "multiple", "muted", "selected"].forEach((function(e) {
					g[e] = new m(e, 3, !0, e, null, !1, !1)
				})), ["capture", "download"].forEach((function(e) {
					g[e] = new m(e, 4, !1, e, null, !1, !1)
				})), ["cols", "rows", "size", "span"].forEach((function(e) {
					g[e] = new m(e, 6, !1, e, null, !1, !1)
				})), ["rowSpan", "start"].forEach((function(e) {
					g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1)
				}));
				var y = /[\-:]([a-z])/g;

				function v(e) {
					return e[1].toUpperCase()
				}

				function b(e, t, n, r) {
					var a = g.hasOwnProperty(t) ? g[t] : null;
					(null !== a ? 0 !== a.type : r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (function(e, t, n, r) {
						if (null == t || function(e, t, n, r) {
								if (null !== n && 0 === n.type) return !1;
								switch (typeof t) {
									case "function":
									case "symbol":
										return !0;
									case "boolean":
										return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
									default:
										return !1
								}
							}(e, t, n, r)) return !0;
						if (r) return !1;
						if (null !== n) switch (n.type) {
							case 3:
								return !t;
							case 4:
								return !1 === t;
							case 5:
								return isNaN(t);
							case 6:
								return isNaN(t) || 1 > t
						}
						return !1
					}(t, n, a, r) && (n = null), r || null === a ? function(e) {
						return !!d.call(h, e) || !d.call(p, e) && (f.test(e) ? h[e] = !0 : (p[e] = !0, !1))
					}(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = null === n ? 3 !== a.type && "" : n : (t = a.attributeName, r = a.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (a = a.type) || 4 === a && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
				}
				"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
					var t = e.replace(y, v);
					g[t] = new m(t, 1, !1, e, null, !1, !1)
				})), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
					var t = e.replace(y, v);
					g[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
				})), ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
					var t = e.replace(y, v);
					g[t] = new m(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
				})), ["tabIndex", "crossOrigin"].forEach((function(e) {
					g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1)
				})), g.xlinkHref = new m("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function(e) {
					g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0)
				}));
				var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
					x = Symbol.for("react.element"),
					k = Symbol.for("react.portal"),
					S = Symbol.for("react.fragment"),
					E = Symbol.for("react.strict_mode"),
					C = Symbol.for("react.profiler"),
					P = Symbol.for("react.provider"),
					T = Symbol.for("react.context"),
					A = Symbol.for("react.forward_ref"),
					R = Symbol.for("react.suspense"),
					L = Symbol.for("react.suspense_list"),
					M = Symbol.for("react.memo"),
					O = Symbol.for("react.lazy");
				Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
				var _ = Symbol.for("react.offscreen");
				Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker");
				var D = Symbol.iterator;

				function F(e) {
					return null === e || "object" != typeof e ? null : "function" == typeof(e = D && e[D] || e["@@iterator"]) ? e : null
				}
				var N, I = Object.assign;

				function z(e) {
					if (void 0 === N) try {
						throw Error()
					} catch (e) {
						var t = e.stack.trim().match(/\n( *(at )?)/);
						N = t && t[1] || ""
					}
					return "\n" + N + e
				}
				var j = !1;

				function V(e, t) {
					if (!e || j) return "";
					j = !0;
					var n = Error.prepareStackTrace;
					Error.prepareStackTrace = void 0;
					try {
						if (t)
							if (t = function() {
									throw Error()
								}, Object.defineProperty(t.prototype, "props", {
									set: function() {
										throw Error()
									}
								}), "object" == typeof Reflect && Reflect.construct) {
								try {
									Reflect.construct(t, [])
								} catch (e) {
									var r = e
								}
								Reflect.construct(e, [], t)
							} else {
								try {
									t.call()
								} catch (e) {
									r = e
								}
								e.call(t.prototype)
							}
						else {
							try {
								throw Error()
							} catch (e) {
								r = e
							}
							e()
						}
					} catch (t) {
						if (t && r && "string" == typeof t.stack) {
							for (var a = t.stack.split("\n"), o = r.stack.split("\n"), i = a.length - 1, s = o.length - 1; 1 <= i && 0 <= s && a[i] !== o[s];) s--;
							for (; 1 <= i && 0 <= s; i--, s--)
								if (a[i] !== o[s]) {
									if (1 !== i || 1 !== s)
										do {
											if (i--, 0 > --s || a[i] !== o[s]) {
												var l = "\n" + a[i].replace(" at new ", " at ");
												return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l
											}
										} while (1 <= i && 0 <= s);
									break
								}
						}
					} finally {
						j = !1, Error.prepareStackTrace = n
					}
					return (e = e ? e.displayName || e.name : "") ? z(e) : ""
				}

				function B(e) {
					switch (e.tag) {
						case 5:
							return z(e.type);
						case 16:
							return z("Lazy");
						case 13:
							return z("Suspense");
						case 19:
							return z("SuspenseList");
						case 0:
						case 2:
						case 15:
							return V(e.type, !1);
						case 11:
							return V(e.type.render, !1);
						case 1:
							return V(e.type, !0);
						default:
							return ""
					}
				}

				function $(e) {
					if (null == e) return null;
					if ("function" == typeof e) return e.displayName || e.name || null;
					if ("string" == typeof e) return e;
					switch (e) {
						case S:
							return "Fragment";
						case k:
							return "Portal";
						case C:
							return "Profiler";
						case E:
							return "StrictMode";
						case R:
							return "Suspense";
						case L:
							return "SuspenseList"
					}
					if ("object" == typeof e) switch (e.$$typeof) {
						case T:
							return (e.displayName || "Context") + ".Consumer";
						case P:
							return (e._context.displayName || "Context") + ".Provider";
						case A:
							var t = e.render;
							return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
						case M:
							return null !== (t = e.displayName || null) ? t : $(e.type) || "Memo";
						case O:
							t = e._payload, e = e._init;
							try {
								return $(e(t))
							} catch (e) {}
					}
					return null
				}

				function U(e) {
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
							return e = (e = t.render).displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
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
							return $(t);
						case 8:
							return t === E ? "StrictMode" : "Mode";
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
							if ("function" == typeof t) return t.displayName || t.name || null;
							if ("string" == typeof t) return t
					}
					return null
				}

				function W(e) {
					switch (typeof e) {
						case "boolean":
						case "number":
						case "string":
						case "undefined":
						case "object":
							return e;
						default:
							return ""
					}
				}

				function H(e) {
					var t = e.type;
					return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
				}

				function Y(e) {
					e._valueTracker || (e._valueTracker = function(e) {
						var t = H(e) ? "checked" : "value",
							n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
							r = "" + e[t];
						if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
							var a = n.get,
								o = n.set;
							return Object.defineProperty(e, t, {
								configurable: !0,
								get: function() {
									return a.call(this)
								},
								set: function(e) {
									r = "" + e, o.call(this, e)
								}
							}), Object.defineProperty(e, t, {
								enumerable: n.enumerable
							}), {
								getValue: function() {
									return r
								},
								setValue: function(e) {
									r = "" + e
								},
								stopTracking: function() {
									e._valueTracker = null, delete e[t]
								}
							}
						}
					}(e))
				}

				function Q(e) {
					if (!e) return !1;
					var t = e._valueTracker;
					if (!t) return !0;
					var n = t.getValue(),
						r = "";
					return e && (r = H(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
				}

				function q(e) {
					if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
					try {
						return e.activeElement || e.body
					} catch (t) {
						return e.body
					}
				}

				function G(e, t) {
					var n = t.checked;
					return I({}, t, {
						defaultChecked: void 0,
						defaultValue: void 0,
						value: void 0,
						checked: null != n ? n : e._wrapperState.initialChecked
					})
				}

				function X(e, t) {
					var n = null == t.defaultValue ? "" : t.defaultValue,
						r = null != t.checked ? t.checked : t.defaultChecked;
					n = W(null != t.value ? t.value : n), e._wrapperState = {
						initialChecked: r,
						initialValue: n,
						controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
					}
				}

				function K(e, t) {
					null != (t = t.checked) && b(e, "checked", t, !1)
				}

				function Z(e, t) {
					K(e, t);
					var n = W(t.value),
						r = t.type;
					if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
					else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
					t.hasOwnProperty("value") ? ee(e, t.type, n) : t.hasOwnProperty("defaultValue") && ee(e, t.type, W(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
				}

				function J(e, t, n) {
					if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
						var r = t.type;
						if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
						t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
					}
					"" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
				}

				function ee(e, t, n) {
					"number" === t && q(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
				}
				var te = Array.isArray;

				function ne(e, t, n, r) {
					if (e = e.options, t) {
						t = {};
						for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
						for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0)
					} else {
						for (n = "" + W(n), t = null, a = 0; a < e.length; a++) {
							if (e[a].value === n) return e[a].selected = !0, void(r && (e[a].defaultSelected = !0));
							null !== t || e[a].disabled || (t = e[a])
						}
						null !== t && (t.selected = !0)
					}
				}

				function re(e, t) {
					if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
					return I({}, t, {
						value: void 0,
						defaultValue: void 0,
						children: "" + e._wrapperState.initialValue
					})
				}

				function ae(e, t) {
					var n = t.value;
					if (null == n) {
						if (n = t.children, t = t.defaultValue, null != n) {
							if (null != t) throw Error(o(92));
							if (te(n)) {
								if (1 < n.length) throw Error(o(93));
								n = n[0]
							}
							t = n
						}
						null == t && (t = ""), n = t
					}
					e._wrapperState = {
						initialValue: W(n)
					}
				}

				function oe(e, t) {
					var n = W(t.value),
						r = W(t.defaultValue);
					null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
				}

				function ie(e) {
					var t = e.textContent;
					t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
				}

				function se(e) {
					switch (e) {
						case "svg":
							return "http://www.w3.org/2000/svg";
						case "math":
							return "http://www.w3.org/1998/Math/MathML";
						default:
							return "http://www.w3.org/1999/xhtml"
					}
				}

				function le(e, t) {
					return null == e || "http://www.w3.org/1999/xhtml" === e ? se(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
				}
				var ue, ce, de = (ce = function(e, t) {
					if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = t;
					else {
						for ((ue = ue || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ue.firstChild; e.firstChild;) e.removeChild(e.firstChild);
						for (; t.firstChild;) e.appendChild(t.firstChild)
					}
				}, "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, t, n, r) {
					MSApp.execUnsafeLocalFunction((function() {
						return ce(e, t)
					}))
				} : ce);

				function fe(e, t) {
					if (t) {
						var n = e.firstChild;
						if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
					}
					e.textContent = t
				}
				var pe = {
						animationIterationCount: !0,
						aspectRatio: !0,
						borderImageOutset: !0,
						borderImageSlice: !0,
						borderImageWidth: !0,
						boxFlex: !0,
						boxFlexGroup: !0,
						boxOrdinalGroup: !0,
						columnCount: !0,
						columns: !0,
						flex: !0,
						flexGrow: !0,
						flexPositive: !0,
						flexShrink: !0,
						flexNegative: !0,
						flexOrder: !0,
						gridArea: !0,
						gridRow: !0,
						gridRowEnd: !0,
						gridRowSpan: !0,
						gridRowStart: !0,
						gridColumn: !0,
						gridColumnEnd: !0,
						gridColumnSpan: !0,
						gridColumnStart: !0,
						fontWeight: !0,
						lineClamp: !0,
						lineHeight: !0,
						opacity: !0,
						order: !0,
						orphans: !0,
						tabSize: !0,
						widows: !0,
						zIndex: !0,
						zoom: !0,
						fillOpacity: !0,
						floodOpacity: !0,
						stopOpacity: !0,
						strokeDasharray: !0,
						strokeDashoffset: !0,
						strokeMiterlimit: !0,
						strokeOpacity: !0,
						strokeWidth: !0
					},
					he = ["Webkit", "ms", "Moz", "O"];

				function me(e, t, n) {
					return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || pe.hasOwnProperty(e) && pe[e] ? ("" + t).trim() : t + "px"
				}

				function ge(e, t) {
					for (var n in e = e.style, t)
						if (t.hasOwnProperty(n)) {
							var r = 0 === n.indexOf("--"),
								a = me(n, t[n], r);
							"float" === n && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a
						}
				}
				Object.keys(pe).forEach((function(e) {
					he.forEach((function(t) {
						t = t + e.charAt(0).toUpperCase() + e.substring(1), pe[t] = pe[e]
					}))
				}));
				var ye = I({
					menuitem: !0
				}, {
					area: !0,
					base: !0,
					br: !0,
					col: !0,
					embed: !0,
					hr: !0,
					img: !0,
					input: !0,
					keygen: !0,
					link: !0,
					meta: !0,
					param: !0,
					source: !0,
					track: !0,
					wbr: !0
				});

				function ve(e, t) {
					if (t) {
						if (ye[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(o(137, e));
						if (null != t.dangerouslySetInnerHTML) {
							if (null != t.children) throw Error(o(60));
							if ("object" != typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(o(61))
						}
						if (null != t.style && "object" != typeof t.style) throw Error(o(62))
					}
				}

				function be(e, t) {
					if (-1 === e.indexOf("-")) return "string" == typeof t.is;
					switch (e) {
						case "annotation-xml":
						case "color-profile":
						case "font-face":
						case "font-face-src":
						case "font-face-uri":
						case "font-face-format":
						case "font-face-name":
						case "missing-glyph":
							return !1;
						default:
							return !0
					}
				}
				var we = null;

				function xe(e) {
					return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
				}
				var ke = null,
					Se = null,
					Ee = null;

				function Ce(e) {
					if (e = ba(e)) {
						if ("function" != typeof ke) throw Error(o(280));
						var t = e.stateNode;
						t && (t = xa(t), ke(e.stateNode, e.type, t))
					}
				}

				function Pe(e) {
					Se ? Ee ? Ee.push(e) : Ee = [e] : Se = e
				}

				function Te() {
					if (Se) {
						var e = Se,
							t = Ee;
						if (Ee = Se = null, Ce(e), t)
							for (e = 0; e < t.length; e++) Ce(t[e])
					}
				}

				function Ae(e, t) {
					return e(t)
				}

				function Re() {}
				var Le = !1;

				function Me(e, t, n) {
					if (Le) return e(t, n);
					Le = !0;
					try {
						return Ae(e, t, n)
					} finally {
						Le = !1, (null !== Se || null !== Ee) && (Re(), Te())
					}
				}

				function Oe(e, t) {
					var n = e.stateNode;
					if (null === n) return null;
					var r = xa(n);
					if (null === r) return null;
					n = r[t];
					e: switch (t) {
						case "onClick":
						case "onClickCapture":
						case "onDoubleClick":
						case "onDoubleClickCapture":
						case "onMouseDown":
						case "onMouseDownCapture":
						case "onMouseMove":
						case "onMouseMoveCapture":
						case "onMouseUp":
						case "onMouseUpCapture":
						case "onMouseEnter":
							(r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
							break e;
						default:
							e = !1
					}
					if (e) return null;
					if (n && "function" != typeof n) throw Error(o(231, t, typeof n));
					return n
				}
				var _e = !1;
				if (c) try {
					var De = {};
					Object.defineProperty(De, "passive", {
						get: function() {
							_e = !0
						}
					}), window.addEventListener("test", De, De), window.removeEventListener("test", De, De)
				} catch (ce) {
					_e = !1
				}

				function Fe(e, t, n, r, a, o, i, s, l) {
					var u = Array.prototype.slice.call(arguments, 3);
					try {
						t.apply(n, u)
					} catch (e) {
						this.onError(e)
					}
				}
				var Ne = !1,
					Ie = null,
					ze = !1,
					je = null,
					Ve = {
						onError: function(e) {
							Ne = !0, Ie = e
						}
					};

				function Be(e, t, n, r, a, o, i, s, l) {
					Ne = !1, Ie = null, Fe.apply(Ve, arguments)
				}

				function $e(e) {
					var t = e,
						n = e;
					if (e.alternate)
						for (; t.return;) t = t.return;
					else {
						e = t;
						do {
							0 != (4098 & (t = e).flags) && (n = t.return), e = t.return
						} while (e)
					}
					return 3 === t.tag ? n : null
				}

				function Ue(e) {
					if (13 === e.tag) {
						var t = e.memoizedState;
						if (null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t) return t.dehydrated
					}
					return null
				}

				function We(e) {
					if ($e(e) !== e) throw Error(o(188))
				}

				function He(e) {
					return null !== (e = function(e) {
						var t = e.alternate;
						if (!t) {
							if (null === (t = $e(e))) throw Error(o(188));
							return t !== e ? null : e
						}
						for (var n = e, r = t;;) {
							var a = n.return;
							if (null === a) break;
							var i = a.alternate;
							if (null === i) {
								if (null !== (r = a.return)) {
									n = r;
									continue
								}
								break
							}
							if (a.child === i.child) {
								for (i = a.child; i;) {
									if (i === n) return We(a), e;
									if (i === r) return We(a), t;
									i = i.sibling
								}
								throw Error(o(188))
							}
							if (n.return !== r.return) n = a, r = i;
							else {
								for (var s = !1, l = a.child; l;) {
									if (l === n) {
										s = !0, n = a, r = i;
										break
									}
									if (l === r) {
										s = !0, r = a, n = i;
										break
									}
									l = l.sibling
								}
								if (!s) {
									for (l = i.child; l;) {
										if (l === n) {
											s = !0, n = i, r = a;
											break
										}
										if (l === r) {
											s = !0, r = i, n = a;
											break
										}
										l = l.sibling
									}
									if (!s) throw Error(o(189))
								}
							}
							if (n.alternate !== r) throw Error(o(190))
						}
						if (3 !== n.tag) throw Error(o(188));
						return n.stateNode.current === n ? e : t
					}(e)) ? Ye(e) : null
				}

				function Ye(e) {
					if (5 === e.tag || 6 === e.tag) return e;
					for (e = e.child; null !== e;) {
						var t = Ye(e);
						if (null !== t) return t;
						e = e.sibling
					}
					return null
				}
				var Qe = a.unstable_scheduleCallback,
					qe = a.unstable_cancelCallback,
					Ge = a.unstable_shouldYield,
					Xe = a.unstable_requestPaint,
					Ke = a.unstable_now,
					Ze = a.unstable_getCurrentPriorityLevel,
					Je = a.unstable_ImmediatePriority,
					et = a.unstable_UserBlockingPriority,
					tt = a.unstable_NormalPriority,
					nt = a.unstable_LowPriority,
					rt = a.unstable_IdlePriority,
					at = null,
					ot = null,
					it = Math.clz32 ? Math.clz32 : function(e) {
						return 0 === (e >>>= 0) ? 32 : 31 - (st(e) / lt | 0) | 0
					},
					st = Math.log,
					lt = Math.LN2,
					ut = 64,
					ct = 4194304;

				function dt(e) {
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
							return e
					}
				}

				function ft(e, t) {
					var n = e.pendingLanes;
					if (0 === n) return 0;
					var r = 0,
						a = e.suspendedLanes,
						o = e.pingedLanes,
						i = 268435455 & n;
					if (0 !== i) {
						var s = i & ~a;
						0 !== s ? r = dt(s) : 0 != (o &= i) && (r = dt(o))
					} else 0 != (i = n & ~a) ? r = dt(i) : 0 !== o && (r = dt(o));
					if (0 === r) return 0;
					if (0 !== t && t !== r && 0 == (t & a) && ((a = r & -r) >= (o = t & -t) || 16 === a && 0 != (4194240 & o))) return t;
					if (0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes))
						for (e = e.entanglements, t &= r; 0 < t;) a = 1 << (n = 31 - it(t)), r |= e[n], t &= ~a;
					return r
				}

				function pt(e, t) {
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
						default:
							return -1
					}
				}

				function ht(e) {
					return 0 != (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
				}

				function mt() {
					var e = ut;
					return 0 == (4194240 & (ut <<= 1)) && (ut = 64), e
				}

				function gt(e) {
					for (var t = [], n = 0; 31 > n; n++) t.push(e);
					return t
				}

				function yt(e, t, n) {
					e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - it(t)] = n
				}

				function vt(e, t) {
					var n = e.entangledLanes |= t;
					for (e = e.entanglements; n;) {
						var r = 31 - it(n),
							a = 1 << r;
						a & t | e[r] & t && (e[r] |= t), n &= ~a
					}
				}
				var bt = 0;

				function wt(e) {
					return 1 < (e &= -e) ? 4 < e ? 0 != (268435455 & e) ? 16 : 536870912 : 4 : 1
				}
				var xt, kt, St, Et, Ct, Pt = !1,
					Tt = [],
					At = null,
					Rt = null,
					Lt = null,
					Mt = new Map,
					Ot = new Map,
					_t = [],
					Dt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

				function Ft(e, t) {
					switch (e) {
						case "focusin":
						case "focusout":
							At = null;
							break;
						case "dragenter":
						case "dragleave":
							Rt = null;
							break;
						case "mouseover":
						case "mouseout":
							Lt = null;
							break;
						case "pointerover":
						case "pointerout":
							Mt.delete(t.pointerId);
							break;
						case "gotpointercapture":
						case "lostpointercapture":
							Ot.delete(t.pointerId)
					}
				}

				function Nt(e, t, n, r, a, o) {
					return null === e || e.nativeEvent !== o ? (e = {
						blockedOn: t,
						domEventName: n,
						eventSystemFlags: r,
						nativeEvent: o,
						targetContainers: [a]
					}, null !== t && null !== (t = ba(t)) && kt(t), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== a && -1 === t.indexOf(a) && t.push(a), e)
				}

				function It(e) {
					var t = va(e.target);
					if (null !== t) {
						var n = $e(t);
						if (null !== n)
							if (13 === (t = n.tag)) {
								if (null !== (t = Ue(n))) return e.blockedOn = t, void Ct(e.priority, (function() {
									St(n)
								}))
							} else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
					}
					e.blockedOn = null
				}

				function zt(e) {
					if (null !== e.blockedOn) return !1;
					for (var t = e.targetContainers; 0 < t.length;) {
						var n = Gt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
						if (null !== n) return null !== (t = ba(n)) && kt(t), e.blockedOn = n, !1;
						var r = new(n = e.nativeEvent).constructor(n.type, n);
						we = r, n.target.dispatchEvent(r), we = null, t.shift()
					}
					return !0
				}

				function jt(e, t, n) {
					zt(e) && n.delete(t)
				}

				function Vt() {
					Pt = !1, null !== At && zt(At) && (At = null), null !== Rt && zt(Rt) && (Rt = null), null !== Lt && zt(Lt) && (Lt = null), Mt.forEach(jt), Ot.forEach(jt)
				}

				function Bt(e, t) {
					e.blockedOn === t && (e.blockedOn = null, Pt || (Pt = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, Vt)))
				}

				function $t(e) {
					function t(t) {
						return Bt(t, e)
					}
					if (0 < Tt.length) {
						Bt(Tt[0], e);
						for (var n = 1; n < Tt.length; n++) {
							var r = Tt[n];
							r.blockedOn === e && (r.blockedOn = null)
						}
					}
					for (null !== At && Bt(At, e), null !== Rt && Bt(Rt, e), null !== Lt && Bt(Lt, e), Mt.forEach(t), Ot.forEach(t), n = 0; n < _t.length; n++)(r = _t[n]).blockedOn === e && (r.blockedOn = null);
					for (; 0 < _t.length && null === (n = _t[0]).blockedOn;) It(n), null === n.blockedOn && _t.shift()
				}
				var Ut = w.ReactCurrentBatchConfig,
					Wt = !0;

				function Ht(e, t, n, r) {
					var a = bt,
						o = Ut.transition;
					Ut.transition = null;
					try {
						bt = 1, Qt(e, t, n, r)
					} finally {
						bt = a, Ut.transition = o
					}
				}

				function Yt(e, t, n, r) {
					var a = bt,
						o = Ut.transition;
					Ut.transition = null;
					try {
						bt = 4, Qt(e, t, n, r)
					} finally {
						bt = a, Ut.transition = o
					}
				}

				function Qt(e, t, n, r) {
					if (Wt) {
						var a = Gt(e, t, n, r);
						if (null === a) Wr(e, t, r, qt, n), Ft(e, r);
						else if (function(e, t, n, r, a) {
								switch (t) {
									case "focusin":
										return At = Nt(At, e, t, n, r, a), !0;
									case "dragenter":
										return Rt = Nt(Rt, e, t, n, r, a), !0;
									case "mouseover":
										return Lt = Nt(Lt, e, t, n, r, a), !0;
									case "pointerover":
										var o = a.pointerId;
										return Mt.set(o, Nt(Mt.get(o) || null, e, t, n, r, a)), !0;
									case "gotpointercapture":
										return o = a.pointerId, Ot.set(o, Nt(Ot.get(o) || null, e, t, n, r, a)), !0
								}
								return !1
							}(a, e, t, n, r)) r.stopPropagation();
						else if (Ft(e, r), 4 & t && -1 < Dt.indexOf(e)) {
							for (; null !== a;) {
								var o = ba(a);
								if (null !== o && xt(o), null === (o = Gt(e, t, n, r)) && Wr(e, t, r, qt, n), o === a) break;
								a = o
							}
							null !== a && r.stopPropagation()
						} else Wr(e, t, r, null, n)
					}
				}
				var qt = null;

				function Gt(e, t, n, r) {
					if (qt = null, null !== (e = va(e = xe(r))))
						if (null === (t = $e(e))) e = null;
						else if (13 === (n = t.tag)) {
						if (null !== (e = Ue(t))) return e;
						e = null
					} else if (3 === n) {
						if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
						e = null
					} else t !== e && (e = null);
					return qt = e, null
				}

				function Xt(e) {
					switch (e) {
						case "cancel":
						case "click":
						case "close":
						case "contextmenu":
						case "copy":
						case "cut":
						case "auxclick":
						case "dblclick":
						case "dragend":
						case "dragstart":
						case "drop":
						case "focusin":
						case "focusout":
						case "input":
						case "invalid":
						case "keydown":
						case "keypress":
						case "keyup":
						case "mousedown":
						case "mouseup":
						case "paste":
						case "pause":
						case "play":
						case "pointercancel":
						case "pointerdown":
						case "pointerup":
						case "ratechange":
						case "reset":
						case "resize":
						case "seeked":
						case "submit":
						case "touchcancel":
						case "touchend":
						case "touchstart":
						case "volumechange":
						case "change":
						case "selectionchange":
						case "textInput":
						case "compositionstart":
						case "compositionend":
						case "compositionupdate":
						case "beforeblur":
						case "afterblur":
						case "beforeinput":
						case "blur":
						case "fullscreenchange":
						case "focus":
						case "hashchange":
						case "popstate":
						case "select":
						case "selectstart":
							return 1;
						case "drag":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "mousemove":
						case "mouseout":
						case "mouseover":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "scroll":
						case "toggle":
						case "touchmove":
						case "wheel":
						case "mouseenter":
						case "mouseleave":
						case "pointerenter":
						case "pointerleave":
							return 4;
						case "message":
							switch (Ze()) {
								case Je:
									return 1;
								case et:
									return 4;
								case tt:
								case nt:
									return 16;
								case rt:
									return 536870912;
								default:
									return 16
							}
						default:
							return 16
					}
				}
				var Kt = null,
					Zt = null,
					Jt = null;

				function en() {
					if (Jt) return Jt;
					var e, t, n = Zt,
						r = n.length,
						a = "value" in Kt ? Kt.value : Kt.textContent,
						o = a.length;
					for (e = 0; e < r && n[e] === a[e]; e++);
					var i = r - e;
					for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
					return Jt = a.slice(e, 1 < t ? 1 - t : void 0)
				}

				function tn(e) {
					var t = e.keyCode;
					return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
				}

				function nn() {
					return !0
				}

				function rn() {
					return !1
				}

				function an(e) {
					function t(t, n, r, a, o) {
						for (var i in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = a, this.target = o, this.currentTarget = null, e) e.hasOwnProperty(i) && (t = e[i], this[i] = t ? t(a) : a[i]);
						return this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue) ? nn : rn, this.isPropagationStopped = rn, this
					}
					return I(t.prototype, {
						preventDefault: function() {
							this.defaultPrevented = !0;
							var e = this.nativeEvent;
							e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = nn)
						},
						stopPropagation: function() {
							var e = this.nativeEvent;
							e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = nn)
						},
						persist: function() {},
						isPersistent: nn
					}), t
				}
				var on, sn, ln, un = {
						eventPhase: 0,
						bubbles: 0,
						cancelable: 0,
						timeStamp: function(e) {
							return e.timeStamp || Date.now()
						},
						defaultPrevented: 0,
						isTrusted: 0
					},
					cn = an(un),
					dn = I({}, un, {
						view: 0,
						detail: 0
					}),
					fn = an(dn),
					pn = I({}, dn, {
						screenX: 0,
						screenY: 0,
						clientX: 0,
						clientY: 0,
						pageX: 0,
						pageY: 0,
						ctrlKey: 0,
						shiftKey: 0,
						altKey: 0,
						metaKey: 0,
						getModifierState: Cn,
						button: 0,
						buttons: 0,
						relatedTarget: function(e) {
							return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
						},
						movementX: function(e) {
							return "movementX" in e ? e.movementX : (e !== ln && (ln && "mousemove" === e.type ? (on = e.screenX - ln.screenX, sn = e.screenY - ln.screenY) : sn = on = 0, ln = e), on)
						},
						movementY: function(e) {
							return "movementY" in e ? e.movementY : sn
						}
					}),
					hn = an(pn),
					mn = an(I({}, pn, {
						dataTransfer: 0
					})),
					gn = an(I({}, dn, {
						relatedTarget: 0
					})),
					yn = an(I({}, un, {
						animationName: 0,
						elapsedTime: 0,
						pseudoElement: 0
					})),
					vn = I({}, un, {
						clipboardData: function(e) {
							return "clipboardData" in e ? e.clipboardData : window.clipboardData
						}
					}),
					bn = an(vn),
					wn = an(I({}, un, {
						data: 0
					})),
					xn = {
						Esc: "Escape",
						Spacebar: " ",
						Left: "ArrowLeft",
						Up: "ArrowUp",
						Right: "ArrowRight",
						Down: "ArrowDown",
						Del: "Delete",
						Win: "OS",
						Menu: "ContextMenu",
						Apps: "ContextMenu",
						Scroll: "ScrollLock",
						MozPrintableKey: "Unidentified"
					},
					kn = {
						8: "Backspace",
						9: "Tab",
						12: "Clear",
						13: "Enter",
						16: "Shift",
						17: "Control",
						18: "Alt",
						19: "Pause",
						20: "CapsLock",
						27: "Escape",
						32: " ",
						33: "PageUp",
						34: "PageDown",
						35: "End",
						36: "Home",
						37: "ArrowLeft",
						38: "ArrowUp",
						39: "ArrowRight",
						40: "ArrowDown",
						45: "Insert",
						46: "Delete",
						112: "F1",
						113: "F2",
						114: "F3",
						115: "F4",
						116: "F5",
						117: "F6",
						118: "F7",
						119: "F8",
						120: "F9",
						121: "F10",
						122: "F11",
						123: "F12",
						144: "NumLock",
						145: "ScrollLock",
						224: "Meta"
					},
					Sn = {
						Alt: "altKey",
						Control: "ctrlKey",
						Meta: "metaKey",
						Shift: "shiftKey"
					};

				function En(e) {
					var t = this.nativeEvent;
					return t.getModifierState ? t.getModifierState(e) : !!(e = Sn[e]) && !!t[e]
				}

				function Cn() {
					return En
				}
				var Pn = I({}, dn, {
						key: function(e) {
							if (e.key) {
								var t = xn[e.key] || e.key;
								if ("Unidentified" !== t) return t
							}
							return "keypress" === e.type ? 13 === (e = tn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? kn[e.keyCode] || "Unidentified" : ""
						},
						code: 0,
						location: 0,
						ctrlKey: 0,
						shiftKey: 0,
						altKey: 0,
						metaKey: 0,
						repeat: 0,
						locale: 0,
						getModifierState: Cn,
						charCode: function(e) {
							return "keypress" === e.type ? tn(e) : 0
						},
						keyCode: function(e) {
							return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
						},
						which: function(e) {
							return "keypress" === e.type ? tn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
						}
					}),
					Tn = an(Pn),
					An = an(I({}, pn, {
						pointerId: 0,
						width: 0,
						height: 0,
						pressure: 0,
						tangentialPressure: 0,
						tiltX: 0,
						tiltY: 0,
						twist: 0,
						pointerType: 0,
						isPrimary: 0
					})),
					Rn = an(I({}, dn, {
						touches: 0,
						targetTouches: 0,
						changedTouches: 0,
						altKey: 0,
						metaKey: 0,
						ctrlKey: 0,
						shiftKey: 0,
						getModifierState: Cn
					})),
					Ln = an(I({}, un, {
						propertyName: 0,
						elapsedTime: 0,
						pseudoElement: 0
					})),
					Mn = I({}, pn, {
						deltaX: function(e) {
							return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
						},
						deltaY: function(e) {
							return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
						},
						deltaZ: 0,
						deltaMode: 0
					}),
					On = an(Mn),
					_n = [9, 13, 27, 32],
					Dn = c && "CompositionEvent" in window,
					Fn = null;
				c && "documentMode" in document && (Fn = document.documentMode);
				var Nn = c && "TextEvent" in window && !Fn,
					In = c && (!Dn || Fn && 8 < Fn && 11 >= Fn),
					zn = String.fromCharCode(32),
					jn = !1;

				function Vn(e, t) {
					switch (e) {
						case "keyup":
							return -1 !== _n.indexOf(t.keyCode);
						case "keydown":
							return 229 !== t.keyCode;
						case "keypress":
						case "mousedown":
						case "focusout":
							return !0;
						default:
							return !1
					}
				}

				function Bn(e) {
					return "object" == typeof(e = e.detail) && "data" in e ? e.data : null
				}
				var $n = !1,
					Un = {
						color: !0,
						date: !0,
						datetime: !0,
						"datetime-local": !0,
						email: !0,
						month: !0,
						number: !0,
						password: !0,
						range: !0,
						search: !0,
						tel: !0,
						text: !0,
						time: !0,
						url: !0,
						week: !0
					};

				function Wn(e) {
					var t = e && e.nodeName && e.nodeName.toLowerCase();
					return "input" === t ? !!Un[e.type] : "textarea" === t
				}

				function Hn(e, t, n, r) {
					Pe(r), 0 < (t = Yr(t, "onChange")).length && (n = new cn("onChange", "change", null, n, r), e.push({
						event: n,
						listeners: t
					}))
				}
				var Yn = null,
					Qn = null;

				function qn(e) {
					zr(e, 0)
				}

				function Gn(e) {
					if (Q(wa(e))) return e
				}

				function Xn(e, t) {
					if ("change" === e) return t
				}
				var Kn = !1;
				if (c) {
					var Zn;
					if (c) {
						var Jn = "oninput" in document;
						if (!Jn) {
							var er = document.createElement("div");
							er.setAttribute("oninput", "return;"), Jn = "function" == typeof er.oninput
						}
						Zn = Jn
					} else Zn = !1;
					Kn = Zn && (!document.documentMode || 9 < document.documentMode)
				}

				function tr() {
					Yn && (Yn.detachEvent("onpropertychange", nr), Qn = Yn = null)
				}

				function nr(e) {
					if ("value" === e.propertyName && Gn(Qn)) {
						var t = [];
						Hn(t, Qn, e, xe(e)), Me(qn, t)
					}
				}

				function rr(e, t, n) {
					"focusin" === e ? (tr(), Qn = n, (Yn = t).attachEvent("onpropertychange", nr)) : "focusout" === e && tr()
				}

				function ar(e) {
					if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Gn(Qn)
				}

				function or(e, t) {
					if ("click" === e) return Gn(t)
				}

				function ir(e, t) {
					if ("input" === e || "change" === e) return Gn(t)
				}
				var sr = "function" == typeof Object.is ? Object.is : function(e, t) {
					return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
				};

				function lr(e, t) {
					if (sr(e, t)) return !0;
					if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
					var n = Object.keys(e),
						r = Object.keys(t);
					if (n.length !== r.length) return !1;
					for (r = 0; r < n.length; r++) {
						var a = n[r];
						if (!d.call(t, a) || !sr(e[a], t[a])) return !1
					}
					return !0
				}

				function ur(e) {
					for (; e && e.firstChild;) e = e.firstChild;
					return e
				}

				function cr(e, t) {
					var n, r = ur(e);
					for (e = 0; r;) {
						if (3 === r.nodeType) {
							if (n = e + r.textContent.length, e <= t && n >= t) return {
								node: r,
								offset: t - e
							};
							e = n
						}
						e: {
							for (; r;) {
								if (r.nextSibling) {
									r = r.nextSibling;
									break e
								}
								r = r.parentNode
							}
							r = void 0
						}
						r = ur(r)
					}
				}

				function dr(e, t) {
					return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? dr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
				}

				function fr() {
					for (var e = window, t = q(); t instanceof e.HTMLIFrameElement;) {
						try {
							var n = "string" == typeof t.contentWindow.location.href
						} catch (e) {
							n = !1
						}
						if (!n) break;
						t = q((e = t.contentWindow).document)
					}
					return t
				}

				function pr(e) {
					var t = e && e.nodeName && e.nodeName.toLowerCase();
					return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
				}

				function hr(e) {
					var t = fr(),
						n = e.focusedElem,
						r = e.selectionRange;
					if (t !== n && n && n.ownerDocument && dr(n.ownerDocument.documentElement, n)) {
						if (null !== r && pr(n))
							if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
							else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
							e = e.getSelection();
							var a = n.textContent.length,
								o = Math.min(r.start, a);
							r = void 0 === r.end ? o : Math.min(r.end, a), !e.extend && o > r && (a = r, r = o, o = a), a = cr(n, o);
							var i = cr(n, r);
							a && i && (1 !== e.rangeCount || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && ((t = t.createRange()).setStart(a.node, a.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)))
						}
						for (t = [], e = n; e = e.parentNode;) 1 === e.nodeType && t.push({
							element: e,
							left: e.scrollLeft,
							top: e.scrollTop
						});
						for ("function" == typeof n.focus && n.focus(), n = 0; n < t.length; n++)(e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top
					}
				}
				var mr = c && "documentMode" in document && 11 >= document.documentMode,
					gr = null,
					yr = null,
					vr = null,
					br = !1;

				function wr(e, t, n) {
					var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
					br || null == gr || gr !== q(r) || (r = "selectionStart" in (r = gr) && pr(r) ? {
						start: r.selectionStart,
						end: r.selectionEnd
					} : {
						anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
						anchorOffset: r.anchorOffset,
						focusNode: r.focusNode,
						focusOffset: r.focusOffset
					}, vr && lr(vr, r) || (vr = r, 0 < (r = Yr(yr, "onSelect")).length && (t = new cn("onSelect", "select", null, t, n), e.push({
						event: t,
						listeners: r
					}), t.target = gr)))
				}

				function xr(e, t) {
					var n = {};
					return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
				}
				var kr = {
						animationend: xr("Animation", "AnimationEnd"),
						animationiteration: xr("Animation", "AnimationIteration"),
						animationstart: xr("Animation", "AnimationStart"),
						transitionend: xr("Transition", "TransitionEnd")
					},
					Sr = {},
					Er = {};

				function Cr(e) {
					if (Sr[e]) return Sr[e];
					if (!kr[e]) return e;
					var t, n = kr[e];
					for (t in n)
						if (n.hasOwnProperty(t) && t in Er) return Sr[e] = n[t];
					return e
				}
				c && (Er = document.createElement("div").style, "AnimationEvent" in window || (delete kr.animationend.animation, delete kr.animationiteration.animation, delete kr.animationstart.animation), "TransitionEvent" in window || delete kr.transitionend.transition);
				var Pr = Cr("animationend"),
					Tr = Cr("animationiteration"),
					Ar = Cr("animationstart"),
					Rr = Cr("transitionend"),
					Lr = new Map,
					Mr = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

				function Or(e, t) {
					Lr.set(e, t), l(t, [e])
				}
				for (var _r = 0; _r < Mr.length; _r++) {
					var Dr = Mr[_r];
					Or(Dr.toLowerCase(), "on" + (Dr[0].toUpperCase() + Dr.slice(1)))
				}
				Or(Pr, "onAnimationEnd"), Or(Tr, "onAnimationIteration"), Or(Ar, "onAnimationStart"), Or("dblclick", "onDoubleClick"), Or("focusin", "onFocus"), Or("focusout", "onBlur"), Or(Rr, "onTransitionEnd"), u("onMouseEnter", ["mouseout", "mouseover"]), u("onMouseLeave", ["mouseout", "mouseover"]), u("onPointerEnter", ["pointerout", "pointerover"]), u("onPointerLeave", ["pointerout", "pointerover"]), l("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), l("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), l("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
				var Fr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
					Nr = new Set("cancel close invalid load scroll toggle".split(" ").concat(Fr));

				function Ir(e, t, n) {
					var r = e.type || "unknown-event";
					e.currentTarget = n,
						function(e, t, n, r, a, i, s, l, u) {
							if (Be.apply(this, arguments), Ne) {
								if (!Ne) throw Error(o(198));
								var c = Ie;
								Ne = !1, Ie = null, ze || (ze = !0, je = c)
							}
						}(r, t, void 0, e), e.currentTarget = null
				}

				function zr(e, t) {
					t = 0 != (4 & t);
					for (var n = 0; n < e.length; n++) {
						var r = e[n],
							a = r.event;
						r = r.listeners;
						e: {
							var o = void 0;
							if (t)
								for (var i = r.length - 1; 0 <= i; i--) {
									var s = r[i],
										l = s.instance,
										u = s.currentTarget;
									if (s = s.listener, l !== o && a.isPropagationStopped()) break e;
									Ir(a, s, u), o = l
								} else
									for (i = 0; i < r.length; i++) {
										if (l = (s = r[i]).instance, u = s.currentTarget, s = s.listener, l !== o && a.isPropagationStopped()) break e;
										Ir(a, s, u), o = l
									}
						}
					}
					if (ze) throw e = je, ze = !1, je = null, e
				}

				function jr(e, t) {
					var n = t[ma];
					void 0 === n && (n = t[ma] = new Set);
					var r = e + "__bubble";
					n.has(r) || (Ur(t, e, 2, !1), n.add(r))
				}

				function Vr(e, t, n) {
					var r = 0;
					t && (r |= 4), Ur(n, e, r, t)
				}
				var Br = "_reactListening" + Math.random().toString(36).slice(2);

				function $r(e) {
					if (!e[Br]) {
						e[Br] = !0, i.forEach((function(t) {
							"selectionchange" !== t && (Nr.has(t) || Vr(t, !1, e), Vr(t, !0, e))
						}));
						var t = 9 === e.nodeType ? e : e.ownerDocument;
						null === t || t[Br] || (t[Br] = !0, Vr("selectionchange", !1, t))
					}
				}

				function Ur(e, t, n, r) {
					switch (Xt(t)) {
						case 1:
							var a = Ht;
							break;
						case 4:
							a = Yt;
							break;
						default:
							a = Qt
					}
					n = a.bind(null, t, n, e), a = void 0, !_e || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (a = !0), r ? void 0 !== a ? e.addEventListener(t, n, {
						capture: !0,
						passive: a
					}) : e.addEventListener(t, n, !0) : void 0 !== a ? e.addEventListener(t, n, {
						passive: a
					}) : e.addEventListener(t, n, !1)
				}

				function Wr(e, t, n, r, a) {
					var o = r;
					if (0 == (1 & t) && 0 == (2 & t) && null !== r) e: for (;;) {
						if (null === r) return;
						var i = r.tag;
						if (3 === i || 4 === i) {
							var s = r.stateNode.containerInfo;
							if (s === a || 8 === s.nodeType && s.parentNode === a) break;
							if (4 === i)
								for (i = r.return; null !== i;) {
									var l = i.tag;
									if ((3 === l || 4 === l) && ((l = i.stateNode.containerInfo) === a || 8 === l.nodeType && l.parentNode === a)) return;
									i = i.return
								}
							for (; null !== s;) {
								if (null === (i = va(s))) return;
								if (5 === (l = i.tag) || 6 === l) {
									r = o = i;
									continue e
								}
								s = s.parentNode
							}
						}
						r = r.return
					}
					Me((function() {
						var r = o,
							a = xe(n),
							i = [];
						e: {
							var s = Lr.get(e);
							if (void 0 !== s) {
								var l = cn,
									u = e;
								switch (e) {
									case "keypress":
										if (0 === tn(n)) break e;
									case "keydown":
									case "keyup":
										l = Tn;
										break;
									case "focusin":
										u = "focus", l = gn;
										break;
									case "focusout":
										u = "blur", l = gn;
										break;
									case "beforeblur":
									case "afterblur":
										l = gn;
										break;
									case "click":
										if (2 === n.button) break e;
									case "auxclick":
									case "dblclick":
									case "mousedown":
									case "mousemove":
									case "mouseup":
									case "mouseout":
									case "mouseover":
									case "contextmenu":
										l = hn;
										break;
									case "drag":
									case "dragend":
									case "dragenter":
									case "dragexit":
									case "dragleave":
									case "dragover":
									case "dragstart":
									case "drop":
										l = mn;
										break;
									case "touchcancel":
									case "touchend":
									case "touchmove":
									case "touchstart":
										l = Rn;
										break;
									case Pr:
									case Tr:
									case Ar:
										l = yn;
										break;
									case Rr:
										l = Ln;
										break;
									case "scroll":
										l = fn;
										break;
									case "wheel":
										l = On;
										break;
									case "copy":
									case "cut":
									case "paste":
										l = bn;
										break;
									case "gotpointercapture":
									case "lostpointercapture":
									case "pointercancel":
									case "pointerdown":
									case "pointermove":
									case "pointerout":
									case "pointerover":
									case "pointerup":
										l = An
								}
								var c = 0 != (4 & t),
									d = !c && "scroll" === e,
									f = c ? null !== s ? s + "Capture" : null : s;
								c = [];
								for (var p, h = r; null !== h;) {
									var m = (p = h).stateNode;
									if (5 === p.tag && null !== m && (p = m, null !== f && null != (m = Oe(h, f)) && c.push(Hr(h, m, p))), d) break;
									h = h.return
								}
								0 < c.length && (s = new l(s, u, null, n, a), i.push({
									event: s,
									listeners: c
								}))
							}
						}
						if (0 == (7 & t)) {
							if (l = "mouseout" === e || "pointerout" === e, (!(s = "mouseover" === e || "pointerover" === e) || n === we || !(u = n.relatedTarget || n.fromElement) || !va(u) && !u[ha]) && (l || s) && (s = a.window === a ? a : (s = a.ownerDocument) ? s.defaultView || s.parentWindow : window, l ? (l = r, null !== (u = (u = n.relatedTarget || n.toElement) ? va(u) : null) && (u !== (d = $e(u)) || 5 !== u.tag && 6 !== u.tag) && (u = null)) : (l = null, u = r), l !== u)) {
								if (c = hn, m = "onMouseLeave", f = "onMouseEnter", h = "mouse", "pointerout" !== e && "pointerover" !== e || (c = An, m = "onPointerLeave", f = "onPointerEnter", h = "pointer"), d = null == l ? s : wa(l), p = null == u ? s : wa(u), (s = new c(m, h + "leave", l, n, a)).target = d, s.relatedTarget = p, m = null, va(a) === r && ((c = new c(f, h + "enter", u, n, a)).target = p, c.relatedTarget = d, m = c), d = m, l && u) e: {
									for (f = u, h = 0, p = c = l; p; p = Qr(p)) h++;
									for (p = 0, m = f; m; m = Qr(m)) p++;
									for (; 0 < h - p;) c = Qr(c),
									h--;
									for (; 0 < p - h;) f = Qr(f),
									p--;
									for (; h--;) {
										if (c === f || null !== f && c === f.alternate) break e;
										c = Qr(c), f = Qr(f)
									}
									c = null
								}
								else c = null;
								null !== l && qr(i, s, l, c, !1), null !== u && null !== d && qr(i, d, u, c, !0)
							}
							if ("select" === (l = (s = r ? wa(r) : window).nodeName && s.nodeName.toLowerCase()) || "input" === l && "file" === s.type) var g = Xn;
							else if (Wn(s))
								if (Kn) g = ir;
								else {
									g = ar;
									var y = rr
								}
							else(l = s.nodeName) && "input" === l.toLowerCase() && ("checkbox" === s.type || "radio" === s.type) && (g = or);
							switch (g && (g = g(e, r)) ? Hn(i, g, n, a) : (y && y(e, s, r), "focusout" === e && (y = s._wrapperState) && y.controlled && "number" === s.type && ee(s, "number", s.value)), y = r ? wa(r) : window, e) {
								case "focusin":
									(Wn(y) || "true" === y.contentEditable) && (gr = y, yr = r, vr = null);
									break;
								case "focusout":
									vr = yr = gr = null;
									break;
								case "mousedown":
									br = !0;
									break;
								case "contextmenu":
								case "mouseup":
								case "dragend":
									br = !1, wr(i, n, a);
									break;
								case "selectionchange":
									if (mr) break;
								case "keydown":
								case "keyup":
									wr(i, n, a)
							}
							var v;
							if (Dn) e: {
								switch (e) {
									case "compositionstart":
										var b = "onCompositionStart";
										break e;
									case "compositionend":
										b = "onCompositionEnd";
										break e;
									case "compositionupdate":
										b = "onCompositionUpdate";
										break e
								}
								b = void 0
							}
							else $n ? Vn(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
							b && (In && "ko" !== n.locale && ($n || "onCompositionStart" !== b ? "onCompositionEnd" === b && $n && (v = en()) : (Zt = "value" in (Kt = a) ? Kt.value : Kt.textContent, $n = !0)), 0 < (y = Yr(r, b)).length && (b = new wn(b, e, null, n, a), i.push({
								event: b,
								listeners: y
							}), (v || null !== (v = Bn(n))) && (b.data = v))), (v = Nn ? function(e, t) {
								switch (e) {
									case "compositionend":
										return Bn(t);
									case "keypress":
										return 32 !== t.which ? null : (jn = !0, zn);
									case "textInput":
										return (e = t.data) === zn && jn ? null : e;
									default:
										return null
								}
							}(e, n) : function(e, t) {
								if ($n) return "compositionend" === e || !Dn && Vn(e, t) ? (e = en(), Jt = Zt = Kt = null, $n = !1, e) : null;
								switch (e) {
									case "paste":
									default:
										return null;
									case "keypress":
										if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
											if (t.char && 1 < t.char.length) return t.char;
											if (t.which) return String.fromCharCode(t.which)
										}
										return null;
									case "compositionend":
										return In && "ko" !== t.locale ? null : t.data
								}
							}(e, n)) && 0 < (r = Yr(r, "onBeforeInput")).length && (a = new wn("onBeforeInput", "beforeinput", null, n, a), i.push({
								event: a,
								listeners: r
							}), a.data = v)
						}
						zr(i, t)
					}))
				}

				function Hr(e, t, n) {
					return {
						instance: e,
						listener: t,
						currentTarget: n
					}
				}

				function Yr(e, t) {
					for (var n = t + "Capture", r = []; null !== e;) {
						var a = e,
							o = a.stateNode;
						5 === a.tag && null !== o && (a = o, null != (o = Oe(e, n)) && r.unshift(Hr(e, o, a)), null != (o = Oe(e, t)) && r.push(Hr(e, o, a))), e = e.return
					}
					return r
				}

				function Qr(e) {
					if (null === e) return null;
					do {
						e = e.return
					} while (e && 5 !== e.tag);
					return e || null
				}

				function qr(e, t, n, r, a) {
					for (var o = t._reactName, i = []; null !== n && n !== r;) {
						var s = n,
							l = s.alternate,
							u = s.stateNode;
						if (null !== l && l === r) break;
						5 === s.tag && null !== u && (s = u, a ? null != (l = Oe(n, o)) && i.unshift(Hr(n, l, s)) : a || null != (l = Oe(n, o)) && i.push(Hr(n, l, s))), n = n.return
					}
					0 !== i.length && e.push({
						event: t,
						listeners: i
					})
				}
				var Gr = /\r\n?/g,
					Xr = /\u0000|\uFFFD/g;

				function Kr(e) {
					return ("string" == typeof e ? e : "" + e).replace(Gr, "\n").replace(Xr, "")
				}

				function Zr(e, t, n) {
					if (t = Kr(t), Kr(e) !== t && n) throw Error(o(425))
				}

				function Jr() {}
				var ea = null,
					ta = null;

				function na(e, t) {
					return "textarea" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
				}
				var ra = "function" == typeof setTimeout ? setTimeout : void 0,
					aa = "function" == typeof clearTimeout ? clearTimeout : void 0,
					oa = "function" == typeof Promise ? Promise : void 0,
					ia = "function" == typeof queueMicrotask ? queueMicrotask : void 0 !== oa ? function(e) {
						return oa.resolve(null).then(e).catch(sa)
					} : ra;

				function sa(e) {
					setTimeout((function() {
						throw e
					}))
				}

				function la(e, t) {
					var n = t,
						r = 0;
					do {
						var a = n.nextSibling;
						if (e.removeChild(n), a && 8 === a.nodeType)
							if ("/$" === (n = a.data)) {
								if (0 === r) return e.removeChild(a), void $t(t);
								r--
							} else "$" !== n && "$?" !== n && "$!" !== n || r++;
						n = a
					} while (n);
					$t(t)
				}

				function ua(e) {
					for (; null != e; e = e.nextSibling) {
						var t = e.nodeType;
						if (1 === t || 3 === t) break;
						if (8 === t) {
							if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
							if ("/$" === t) return null
						}
					}
					return e
				}

				function ca(e) {
					e = e.previousSibling;
					for (var t = 0; e;) {
						if (8 === e.nodeType) {
							var n = e.data;
							if ("$" === n || "$!" === n || "$?" === n) {
								if (0 === t) return e;
								t--
							} else "/$" === n && t++
						}
						e = e.previousSibling
					}
					return null
				}
				var da = Math.random().toString(36).slice(2),
					fa = "__reactFiber$" + da,
					pa = "__reactProps$" + da,
					ha = "__reactContainer$" + da,
					ma = "__reactEvents$" + da,
					ga = "__reactListeners$" + da,
					ya = "__reactHandles$" + da;

				function va(e) {
					var t = e[fa];
					if (t) return t;
					for (var n = e.parentNode; n;) {
						if (t = n[ha] || n[fa]) {
							if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
								for (e = ca(e); null !== e;) {
									if (n = e[fa]) return n;
									e = ca(e)
								}
							return t
						}
						n = (e = n).parentNode
					}
					return null
				}

				function ba(e) {
					return !(e = e[fa] || e[ha]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
				}

				function wa(e) {
					if (5 === e.tag || 6 === e.tag) return e.stateNode;
					throw Error(o(33))
				}

				function xa(e) {
					return e[pa] || null
				}
				var ka = [],
					Sa = -1;

				function Ea(e) {
					return {
						current: e
					}
				}

				function Ca(e) {
					0 > Sa || (e.current = ka[Sa], ka[Sa] = null, Sa--)
				}

				function Pa(e, t) {
					Sa++, ka[Sa] = e.current, e.current = t
				}
				var Ta = {},
					Aa = Ea(Ta),
					Ra = Ea(!1),
					La = Ta;

				function Ma(e, t) {
					var n = e.type.contextTypes;
					if (!n) return Ta;
					var r = e.stateNode;
					if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
					var a, o = {};
					for (a in n) o[a] = t[a];
					return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
				}

				function Oa(e) {
					return null != e.childContextTypes
				}

				function _a() {
					Ca(Ra), Ca(Aa)
				}

				function Da(e, t, n) {
					if (Aa.current !== Ta) throw Error(o(168));
					Pa(Aa, t), Pa(Ra, n)
				}

				function Fa(e, t, n) {
					var r = e.stateNode;
					if (t = t.childContextTypes, "function" != typeof r.getChildContext) return n;
					for (var a in r = r.getChildContext())
						if (!(a in t)) throw Error(o(108, U(e) || "Unknown", a));
					return I({}, n, r)
				}

				function Na(e) {
					return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ta, La = Aa.current, Pa(Aa, e), Pa(Ra, Ra.current), !0
				}

				function Ia(e, t, n) {
					var r = e.stateNode;
					if (!r) throw Error(o(169));
					n ? (e = Fa(e, t, La), r.__reactInternalMemoizedMergedChildContext = e, Ca(Ra), Ca(Aa), Pa(Aa, e)) : Ca(Ra), Pa(Ra, n)
				}
				var za = null,
					ja = !1,
					Va = !1;

				function Ba(e) {
					null === za ? za = [e] : za.push(e)
				}

				function $a() {
					if (!Va && null !== za) {
						Va = !0;
						var e = 0,
							t = bt;
						try {
							var n = za;
							for (bt = 1; e < n.length; e++) {
								var r = n[e];
								do {
									r = r(!0)
								} while (null !== r)
							}
							za = null, ja = !1
						} catch (t) {
							throw null !== za && (za = za.slice(e + 1)), Qe(Je, $a), t
						} finally {
							bt = t, Va = !1
						}
					}
					return null
				}
				var Ua = [],
					Wa = 0,
					Ha = null,
					Ya = 0,
					Qa = [],
					qa = 0,
					Ga = null,
					Xa = 1,
					Ka = "";

				function Za(e, t) {
					Ua[Wa++] = Ya, Ua[Wa++] = Ha, Ha = e, Ya = t
				}

				function Ja(e, t, n) {
					Qa[qa++] = Xa, Qa[qa++] = Ka, Qa[qa++] = Ga, Ga = e;
					var r = Xa;
					e = Ka;
					var a = 32 - it(r) - 1;
					r &= ~(1 << a), n += 1;
					var o = 32 - it(t) + a;
					if (30 < o) {
						var i = a - a % 5;
						o = (r & (1 << i) - 1).toString(32), r >>= i, a -= i, Xa = 1 << 32 - it(t) + a | n << a | r, Ka = o + e
					} else Xa = 1 << o | n << a | r, Ka = e
				}

				function eo(e) {
					null !== e.return && (Za(e, 1), Ja(e, 1, 0))
				}

				function to(e) {
					for (; e === Ha;) Ha = Ua[--Wa], Ua[Wa] = null, Ya = Ua[--Wa], Ua[Wa] = null;
					for (; e === Ga;) Ga = Qa[--qa], Qa[qa] = null, Ka = Qa[--qa], Qa[qa] = null, Xa = Qa[--qa], Qa[qa] = null
				}
				var no = null,
					ro = null,
					ao = !1,
					oo = null;

				function io(e, t) {
					var n = Ou(5, null, null, 0);
					n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n)
				}

				function so(e, t) {
					switch (e.tag) {
						case 5:
							var n = e.type;
							return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, no = e, ro = ua(t.firstChild), !0);
						case 6:
							return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, no = e, ro = null, !0);
						case 13:
							return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== Ga ? {
								id: Xa,
								overflow: Ka
							} : null, e.memoizedState = {
								dehydrated: t,
								treeContext: n,
								retryLane: 1073741824
							}, (n = Ou(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, no = e, ro = null, !0);
						default:
							return !1
					}
				}

				function lo(e) {
					return 0 != (1 & e.mode) && 0 == (128 & e.flags)
				}

				function uo(e) {
					if (ao) {
						var t = ro;
						if (t) {
							var n = t;
							if (!so(e, t)) {
								if (lo(e)) throw Error(o(418));
								t = ua(n.nextSibling);
								var r = no;
								t && so(e, t) ? io(r, n) : (e.flags = -4097 & e.flags | 2, ao = !1, no = e)
							}
						} else {
							if (lo(e)) throw Error(o(418));
							e.flags = -4097 & e.flags | 2, ao = !1, no = e
						}
					}
				}

				function co(e) {
					for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
					no = e
				}

				function fo(e) {
					if (e !== no) return !1;
					if (!ao) return co(e), ao = !0, !1;
					var t;
					if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !na(e.type, e.memoizedProps)), t && (t = ro)) {
						if (lo(e)) throw po(), Error(o(418));
						for (; t;) io(e, t), t = ua(t.nextSibling)
					}
					if (co(e), 13 === e.tag) {
						if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(o(317));
						e: {
							for (e = e.nextSibling, t = 0; e;) {
								if (8 === e.nodeType) {
									var n = e.data;
									if ("/$" === n) {
										if (0 === t) {
											ro = ua(e.nextSibling);
											break e
										}
										t--
									} else "$" !== n && "$!" !== n && "$?" !== n || t++
								}
								e = e.nextSibling
							}
							ro = null
						}
					} else ro = no ? ua(e.stateNode.nextSibling) : null;
					return !0
				}

				function po() {
					for (var e = ro; e;) e = ua(e.nextSibling)
				}

				function ho() {
					ro = no = null, ao = !1
				}

				function mo(e) {
					null === oo ? oo = [e] : oo.push(e)
				}
				var go = w.ReactCurrentBatchConfig;

				function yo(e, t) {
					if (e && e.defaultProps) {
						for (var n in t = I({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
						return t
					}
					return t
				}
				var vo = Ea(null),
					bo = null,
					wo = null,
					xo = null;

				function ko() {
					xo = wo = bo = null
				}

				function So(e) {
					var t = vo.current;
					Ca(vo), e._currentValue = t
				}

				function Eo(e, t, n) {
					for (; null !== e;) {
						var r = e.alternate;
						if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
						e = e.return
					}
				}

				function Co(e, t) {
					bo = e, xo = wo = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 != (e.lanes & t) && (ws = !0), e.firstContext = null)
				}

				function Po(e) {
					var t = e._currentValue;
					if (xo !== e)
						if (e = {
								context: e,
								memoizedValue: t,
								next: null
							}, null === wo) {
							if (null === bo) throw Error(o(308));
							wo = e, bo.dependencies = {
								lanes: 0,
								firstContext: e
							}
						} else wo = wo.next = e;
					return t
				}
				var To = null;

				function Ao(e) {
					null === To ? To = [e] : To.push(e)
				}

				function Ro(e, t, n, r) {
					var a = t.interleaved;
					return null === a ? (n.next = n, Ao(t)) : (n.next = a.next, a.next = n), t.interleaved = n, Lo(e, r)
				}

				function Lo(e, t) {
					e.lanes |= t;
					var n = e.alternate;
					for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return;
					return 3 === n.tag ? n.stateNode : null
				}
				var Mo = !1;

				function Oo(e) {
					e.updateQueue = {
						baseState: e.memoizedState,
						firstBaseUpdate: null,
						lastBaseUpdate: null,
						shared: {
							pending: null,
							interleaved: null,
							lanes: 0
						},
						effects: null
					}
				}

				function _o(e, t) {
					e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
						baseState: e.baseState,
						firstBaseUpdate: e.firstBaseUpdate,
						lastBaseUpdate: e.lastBaseUpdate,
						shared: e.shared,
						effects: e.effects
					})
				}

				function Do(e, t) {
					return {
						eventTime: e,
						lane: t,
						tag: 0,
						payload: null,
						callback: null,
						next: null
					}
				}

				function Fo(e, t, n) {
					var r = e.updateQueue;
					if (null === r) return null;
					if (r = r.shared, 0 != (2 & Rl)) {
						var a = r.pending;
						return null === a ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, Lo(e, n)
					}
					return null === (a = r.interleaved) ? (t.next = t, Ao(r)) : (t.next = a.next, a.next = t), r.interleaved = t, Lo(e, n)
				}

				function No(e, t, n) {
					if (null !== (t = t.updateQueue) && (t = t.shared, 0 != (4194240 & n))) {
						var r = t.lanes;
						n |= r &= e.pendingLanes, t.lanes = n, vt(e, n)
					}
				}

				function Io(e, t) {
					var n = e.updateQueue,
						r = e.alternate;
					if (null !== r && n === (r = r.updateQueue)) {
						var a = null,
							o = null;
						if (null !== (n = n.firstBaseUpdate)) {
							do {
								var i = {
									eventTime: n.eventTime,
									lane: n.lane,
									tag: n.tag,
									payload: n.payload,
									callback: n.callback,
									next: null
								};
								null === o ? a = o = i : o = o.next = i, n = n.next
							} while (null !== n);
							null === o ? a = o = t : o = o.next = t
						} else a = o = t;
						return n = {
							baseState: r.baseState,
							firstBaseUpdate: a,
							lastBaseUpdate: o,
							shared: r.shared,
							effects: r.effects
						}, void(e.updateQueue = n)
					}
					null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
				}

				function zo(e, t, n, r) {
					var a = e.updateQueue;
					Mo = !1;
					var o = a.firstBaseUpdate,
						i = a.lastBaseUpdate,
						s = a.shared.pending;
					if (null !== s) {
						a.shared.pending = null;
						var l = s,
							u = l.next;
						l.next = null, null === i ? o = u : i.next = u, i = l;
						var c = e.alternate;
						null !== c && (s = (c = c.updateQueue).lastBaseUpdate) !== i && (null === s ? c.firstBaseUpdate = u : s.next = u, c.lastBaseUpdate = l)
					}
					if (null !== o) {
						var d = a.baseState;
						for (i = 0, c = u = l = null, s = o;;) {
							var f = s.lane,
								p = s.eventTime;
							if ((r & f) === f) {
								null !== c && (c = c.next = {
									eventTime: p,
									lane: 0,
									tag: s.tag,
									payload: s.payload,
									callback: s.callback,
									next: null
								});
								e: {
									var h = e,
										m = s;
									switch (f = t, p = n, m.tag) {
										case 1:
											if ("function" == typeof(h = m.payload)) {
												d = h.call(p, d, f);
												break e
											}
											d = h;
											break e;
										case 3:
											h.flags = -65537 & h.flags | 128;
										case 0:
											if (null == (f = "function" == typeof(h = m.payload) ? h.call(p, d, f) : h)) break e;
											d = I({}, d, f);
											break e;
										case 2:
											Mo = !0
									}
								}
								null !== s.callback && 0 !== s.lane && (e.flags |= 64, null === (f = a.effects) ? a.effects = [s] : f.push(s))
							} else p = {
								eventTime: p,
								lane: f,
								tag: s.tag,
								payload: s.payload,
								callback: s.callback,
								next: null
							}, null === c ? (u = c = p, l = d) : c = c.next = p, i |= f;
							if (null === (s = s.next)) {
								if (null === (s = a.shared.pending)) break;
								s = (f = s).next, f.next = null, a.lastBaseUpdate = f, a.shared.pending = null
							}
						}
						if (null === c && (l = d), a.baseState = l, a.firstBaseUpdate = u, a.lastBaseUpdate = c, null !== (t = a.shared.interleaved)) {
							a = t;
							do {
								i |= a.lane, a = a.next
							} while (a !== t)
						} else null === o && (a.shared.lanes = 0);
						Il |= i, e.lanes = i, e.memoizedState = d
					}
				}

				function jo(e, t, n) {
					if (e = t.effects, t.effects = null, null !== e)
						for (t = 0; t < e.length; t++) {
							var r = e[t],
								a = r.callback;
							if (null !== a) {
								if (r.callback = null, r = n, "function" != typeof a) throw Error(o(191, a));
								a.call(r)
							}
						}
				}
				var Vo = (new r.Component).refs;

				function Bo(e, t, n, r) {
					n = null == (n = n(r, t = e.memoizedState)) ? t : I({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
				}
				var $o = {
					isMounted: function(e) {
						return !!(e = e._reactInternals) && $e(e) === e
					},
					enqueueSetState: function(e, t, n) {
						e = e._reactInternals;
						var r = tu(),
							a = nu(e),
							o = Do(r, a);
						o.payload = t, null != n && (o.callback = n), null !== (t = Fo(e, o, a)) && (ru(t, e, a, r), No(t, e, a))
					},
					enqueueReplaceState: function(e, t, n) {
						e = e._reactInternals;
						var r = tu(),
							a = nu(e),
							o = Do(r, a);
						o.tag = 1, o.payload = t, null != n && (o.callback = n), null !== (t = Fo(e, o, a)) && (ru(t, e, a, r), No(t, e, a))
					},
					enqueueForceUpdate: function(e, t) {
						e = e._reactInternals;
						var n = tu(),
							r = nu(e),
							a = Do(n, r);
						a.tag = 2, null != t && (a.callback = t), null !== (t = Fo(e, a, r)) && (ru(t, e, r, n), No(t, e, r))
					}
				};

				function Uo(e, t, n, r, a, o, i) {
					return "function" == typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, o, i) : !(t.prototype && t.prototype.isPureReactComponent && lr(n, r) && lr(a, o))
				}

				function Wo(e, t, n) {
					var r = !1,
						a = Ta,
						o = t.contextType;
					return "object" == typeof o && null !== o ? o = Po(o) : (a = Oa(t) ? La : Aa.current, o = (r = null != (r = t.contextTypes)) ? Ma(e, a) : Ta), t = new t(n, o), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = $o, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = o), t
				}

				function Ho(e, t, n, r) {
					e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && $o.enqueueReplaceState(t, t.state, null)
				}

				function Yo(e, t, n, r) {
					var a = e.stateNode;
					a.props = n, a.state = e.memoizedState, a.refs = Vo, Oo(e);
					var o = t.contextType;
					"object" == typeof o && null !== o ? a.context = Po(o) : (o = Oa(t) ? La : Aa.current, a.context = Ma(e, o)), a.state = e.memoizedState, "function" == typeof(o = t.getDerivedStateFromProps) && (Bo(e, t, o, n), a.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof a.getSnapshotBeforeUpdate || "function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount || (t = a.state, "function" == typeof a.componentWillMount && a.componentWillMount(), "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), t !== a.state && $o.enqueueReplaceState(a, a.state, null), zo(e, n, a, r), a.state = e.memoizedState), "function" == typeof a.componentDidMount && (e.flags |= 4194308)
				}

				function Qo(e, t, n) {
					if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
						if (n._owner) {
							if (n = n._owner) {
								if (1 !== n.tag) throw Error(o(309));
								var r = n.stateNode
							}
							if (!r) throw Error(o(147, e));
							var a = r,
								i = "" + e;
							return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === i ? t.ref : (t = function(e) {
								var t = a.refs;
								t === Vo && (t = a.refs = {}), null === e ? delete t[i] : t[i] = e
							}, t._stringRef = i, t)
						}
						if ("string" != typeof e) throw Error(o(284));
						if (!n._owner) throw Error(o(290, e))
					}
					return e
				}

				function qo(e, t) {
					throw e = Object.prototype.toString.call(t), Error(o(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
				}

				function Go(e) {
					return (0, e._init)(e._payload)
				}

				function Xo(e) {
					function t(t, n) {
						if (e) {
							var r = t.deletions;
							null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n)
						}
					}

					function n(n, r) {
						if (!e) return null;
						for (; null !== r;) t(n, r), r = r.sibling;
						return null
					}

					function r(e, t) {
						for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
						return e
					}

					function a(e, t) {
						return (e = Du(e, t)).index = 0, e.sibling = null, e
					}

					function i(t, n, r) {
						return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2, n) : r : (t.flags |= 2, n) : (t.flags |= 1048576, n)
					}

					function s(t) {
						return e && null === t.alternate && (t.flags |= 2), t
					}

					function l(e, t, n, r) {
						return null === t || 6 !== t.tag ? ((t = zu(n, e.mode, r)).return = e, t) : ((t = a(t, n)).return = e, t)
					}

					function u(e, t, n, r) {
						var o = n.type;
						return o === S ? d(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === o || "object" == typeof o && null !== o && o.$$typeof === O && Go(o) === t.type) ? ((r = a(t, n.props)).ref = Qo(e, t, n), r.return = e, r) : ((r = Fu(n.type, n.key, n.props, null, e.mode, r)).ref = Qo(e, t, n), r.return = e, r)
					}

					function c(e, t, n, r) {
						return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = ju(n, e.mode, r)).return = e, t) : ((t = a(t, n.children || [])).return = e, t)
					}

					function d(e, t, n, r, o) {
						return null === t || 7 !== t.tag ? ((t = Nu(n, e.mode, r, o)).return = e, t) : ((t = a(t, n)).return = e, t)
					}

					function f(e, t, n) {
						if ("string" == typeof t && "" !== t || "number" == typeof t) return (t = zu("" + t, e.mode, n)).return = e, t;
						if ("object" == typeof t && null !== t) {
							switch (t.$$typeof) {
								case x:
									return (n = Fu(t.type, t.key, t.props, null, e.mode, n)).ref = Qo(e, null, t), n.return = e, n;
								case k:
									return (t = ju(t, e.mode, n)).return = e, t;
								case O:
									return f(e, (0, t._init)(t._payload), n)
							}
							if (te(t) || F(t)) return (t = Nu(t, e.mode, n, null)).return = e, t;
							qo(e, t)
						}
						return null
					}

					function p(e, t, n, r) {
						var a = null !== t ? t.key : null;
						if ("string" == typeof n && "" !== n || "number" == typeof n) return null !== a ? null : l(e, t, "" + n, r);
						if ("object" == typeof n && null !== n) {
							switch (n.$$typeof) {
								case x:
									return n.key === a ? u(e, t, n, r) : null;
								case k:
									return n.key === a ? c(e, t, n, r) : null;
								case O:
									return p(e, t, (a = n._init)(n._payload), r)
							}
							if (te(n) || F(n)) return null !== a ? null : d(e, t, n, r, null);
							qo(e, n)
						}
						return null
					}

					function h(e, t, n, r, a) {
						if ("string" == typeof r && "" !== r || "number" == typeof r) return l(t, e = e.get(n) || null, "" + r, a);
						if ("object" == typeof r && null !== r) {
							switch (r.$$typeof) {
								case x:
									return u(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
								case k:
									return c(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
								case O:
									return h(e, t, n, (0, r._init)(r._payload), a)
							}
							if (te(r) || F(r)) return d(t, e = e.get(n) || null, r, a, null);
							qo(t, r)
						}
						return null
					}

					function m(a, o, s, l) {
						for (var u = null, c = null, d = o, m = o = 0, g = null; null !== d && m < s.length; m++) {
							d.index > m ? (g = d, d = null) : g = d.sibling;
							var y = p(a, d, s[m], l);
							if (null === y) {
								null === d && (d = g);
								break
							}
							e && d && null === y.alternate && t(a, d), o = i(y, o, m), null === c ? u = y : c.sibling = y, c = y, d = g
						}
						if (m === s.length) return n(a, d), ao && Za(a, m), u;
						if (null === d) {
							for (; m < s.length; m++) null !== (d = f(a, s[m], l)) && (o = i(d, o, m), null === c ? u = d : c.sibling = d, c = d);
							return ao && Za(a, m), u
						}
						for (d = r(a, d); m < s.length; m++) null !== (g = h(d, a, m, s[m], l)) && (e && null !== g.alternate && d.delete(null === g.key ? m : g.key), o = i(g, o, m), null === c ? u = g : c.sibling = g, c = g);
						return e && d.forEach((function(e) {
							return t(a, e)
						})), ao && Za(a, m), u
					}

					function g(a, s, l, u) {
						var c = F(l);
						if ("function" != typeof c) throw Error(o(150));
						if (null == (l = c.call(l))) throw Error(o(151));
						for (var d = c = null, m = s, g = s = 0, y = null, v = l.next(); null !== m && !v.done; g++, v = l.next()) {
							m.index > g ? (y = m, m = null) : y = m.sibling;
							var b = p(a, m, v.value, u);
							if (null === b) {
								null === m && (m = y);
								break
							}
							e && m && null === b.alternate && t(a, m), s = i(b, s, g), null === d ? c = b : d.sibling = b, d = b, m = y
						}
						if (v.done) return n(a, m), ao && Za(a, g), c;
						if (null === m) {
							for (; !v.done; g++, v = l.next()) null !== (v = f(a, v.value, u)) && (s = i(v, s, g), null === d ? c = v : d.sibling = v, d = v);
							return ao && Za(a, g), c
						}
						for (m = r(a, m); !v.done; g++, v = l.next()) null !== (v = h(m, a, g, v.value, u)) && (e && null !== v.alternate && m.delete(null === v.key ? g : v.key), s = i(v, s, g), null === d ? c = v : d.sibling = v, d = v);
						return e && m.forEach((function(e) {
							return t(a, e)
						})), ao && Za(a, g), c
					}
					return function e(r, o, i, l) {
						if ("object" == typeof i && null !== i && i.type === S && null === i.key && (i = i.props.children), "object" == typeof i && null !== i) {
							switch (i.$$typeof) {
								case x:
									e: {
										for (var u = i.key, c = o; null !== c;) {
											if (c.key === u) {
												if ((u = i.type) === S) {
													if (7 === c.tag) {
														n(r, c.sibling), (o = a(c, i.props.children)).return = r, r = o;
														break e
													}
												} else if (c.elementType === u || "object" == typeof u && null !== u && u.$$typeof === O && Go(u) === c.type) {
													n(r, c.sibling), (o = a(c, i.props)).ref = Qo(r, c, i), o.return = r, r = o;
													break e
												}
												n(r, c);
												break
											}
											t(r, c), c = c.sibling
										}
										i.type === S ? ((o = Nu(i.props.children, r.mode, l, i.key)).return = r, r = o) : ((l = Fu(i.type, i.key, i.props, null, r.mode, l)).ref = Qo(r, o, i), l.return = r, r = l)
									}
									return s(r);
								case k:
									e: {
										for (c = i.key; null !== o;) {
											if (o.key === c) {
												if (4 === o.tag && o.stateNode.containerInfo === i.containerInfo && o.stateNode.implementation === i.implementation) {
													n(r, o.sibling), (o = a(o, i.children || [])).return = r, r = o;
													break e
												}
												n(r, o);
												break
											}
											t(r, o), o = o.sibling
										}(o = ju(i, r.mode, l)).return = r,
										r = o
									}
									return s(r);
								case O:
									return e(r, o, (c = i._init)(i._payload), l)
							}
							if (te(i)) return m(r, o, i, l);
							if (F(i)) return g(r, o, i, l);
							qo(r, i)
						}
						return "string" == typeof i && "" !== i || "number" == typeof i ? (i = "" + i, null !== o && 6 === o.tag ? (n(r, o.sibling), (o = a(o, i)).return = r, r = o) : (n(r, o), (o = zu(i, r.mode, l)).return = r, r = o), s(r)) : n(r, o)
					}
				}
				var Ko = Xo(!0),
					Zo = Xo(!1),
					Jo = {},
					ei = Ea(Jo),
					ti = Ea(Jo),
					ni = Ea(Jo);

				function ri(e) {
					if (e === Jo) throw Error(o(174));
					return e
				}

				function ai(e, t) {
					switch (Pa(ni, t), Pa(ti, e), Pa(ei, Jo), e = t.nodeType) {
						case 9:
						case 11:
							t = (t = t.documentElement) ? t.namespaceURI : le(null, "");
							break;
						default:
							t = le(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
					}
					Ca(ei), Pa(ei, t)
				}

				function oi() {
					Ca(ei), Ca(ti), Ca(ni)
				}

				function ii(e) {
					ri(ni.current);
					var t = ri(ei.current),
						n = le(t, e.type);
					t !== n && (Pa(ti, e), Pa(ei, n))
				}

				function si(e) {
					ti.current === e && (Ca(ei), Ca(ti))
				}
				var li = Ea(0);

				function ui(e) {
					for (var t = e; null !== t;) {
						if (13 === t.tag) {
							var n = t.memoizedState;
							if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t
						} else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
							if (0 != (128 & t.flags)) return t
						} else if (null !== t.child) {
							t.child.return = t, t = t.child;
							continue
						}
						if (t === e) break;
						for (; null === t.sibling;) {
							if (null === t.return || t.return === e) return null;
							t = t.return
						}
						t.sibling.return = t.return, t = t.sibling
					}
					return null
				}
				var ci = [];

				function di() {
					for (var e = 0; e < ci.length; e++) ci[e]._workInProgressVersionPrimary = null;
					ci.length = 0
				}
				var fi = w.ReactCurrentDispatcher,
					pi = w.ReactCurrentBatchConfig,
					hi = 0,
					mi = null,
					gi = null,
					yi = null,
					vi = !1,
					bi = !1,
					wi = 0,
					xi = 0;

				function ki() {
					throw Error(o(321))
				}

				function Si(e, t) {
					if (null === t) return !1;
					for (var n = 0; n < t.length && n < e.length; n++)
						if (!sr(e[n], t[n])) return !1;
					return !0
				}

				function Ei(e, t, n, r, a, i) {
					if (hi = i, mi = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, fi.current = null === e || null === e.memoizedState ? ss : ls, e = n(r, a), bi) {
						i = 0;
						do {
							if (bi = !1, wi = 0, 25 <= i) throw Error(o(301));
							i += 1, yi = gi = null, t.updateQueue = null, fi.current = us, e = n(r, a)
						} while (bi)
					}
					if (fi.current = is, t = null !== gi && null !== gi.next, hi = 0, yi = gi = mi = null, vi = !1, t) throw Error(o(300));
					return e
				}

				function Ci() {
					var e = 0 !== wi;
					return wi = 0, e
				}

				function Pi() {
					var e = {
						memoizedState: null,
						baseState: null,
						baseQueue: null,
						queue: null,
						next: null
					};
					return null === yi ? mi.memoizedState = yi = e : yi = yi.next = e, yi
				}

				function Ti() {
					if (null === gi) {
						var e = mi.alternate;
						e = null !== e ? e.memoizedState : null
					} else e = gi.next;
					var t = null === yi ? mi.memoizedState : yi.next;
					if (null !== t) yi = t, gi = e;
					else {
						if (null === e) throw Error(o(310));
						e = {
							memoizedState: (gi = e).memoizedState,
							baseState: gi.baseState,
							baseQueue: gi.baseQueue,
							queue: gi.queue,
							next: null
						}, null === yi ? mi.memoizedState = yi = e : yi = yi.next = e
					}
					return yi
				}

				function Ai(e, t) {
					return "function" == typeof t ? t(e) : t
				}

				function Ri(e) {
					var t = Ti(),
						n = t.queue;
					if (null === n) throw Error(o(311));
					n.lastRenderedReducer = e;
					var r = gi,
						a = r.baseQueue,
						i = n.pending;
					if (null !== i) {
						if (null !== a) {
							var s = a.next;
							a.next = i.next, i.next = s
						}
						r.baseQueue = a = i, n.pending = null
					}
					if (null !== a) {
						i = a.next, r = r.baseState;
						var l = s = null,
							u = null,
							c = i;
						do {
							var d = c.lane;
							if ((hi & d) === d) null !== u && (u = u.next = {
								lane: 0,
								action: c.action,
								hasEagerState: c.hasEagerState,
								eagerState: c.eagerState,
								next: null
							}), r = c.hasEagerState ? c.eagerState : e(r, c.action);
							else {
								var f = {
									lane: d,
									action: c.action,
									hasEagerState: c.hasEagerState,
									eagerState: c.eagerState,
									next: null
								};
								null === u ? (l = u = f, s = r) : u = u.next = f, mi.lanes |= d, Il |= d
							}
							c = c.next
						} while (null !== c && c !== i);
						null === u ? s = r : u.next = l, sr(r, t.memoizedState) || (ws = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = u, n.lastRenderedState = r
					}
					if (null !== (e = n.interleaved)) {
						a = e;
						do {
							i = a.lane, mi.lanes |= i, Il |= i, a = a.next
						} while (a !== e)
					} else null === a && (n.lanes = 0);
					return [t.memoizedState, n.dispatch]
				}

				function Li(e) {
					var t = Ti(),
						n = t.queue;
					if (null === n) throw Error(o(311));
					n.lastRenderedReducer = e;
					var r = n.dispatch,
						a = n.pending,
						i = t.memoizedState;
					if (null !== a) {
						n.pending = null;
						var s = a = a.next;
						do {
							i = e(i, s.action), s = s.next
						} while (s !== a);
						sr(i, t.memoizedState) || (ws = !0), t.memoizedState = i, null === t.baseQueue && (t.baseState = i), n.lastRenderedState = i
					}
					return [i, r]
				}

				function Mi() {}

				function Oi(e, t) {
					var n = mi,
						r = Ti(),
						a = t(),
						i = !sr(r.memoizedState, a);
					if (i && (r.memoizedState = a, ws = !0), r = r.queue, Wi(Fi.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || null !== yi && 1 & yi.memoizedState.tag) {
						if (n.flags |= 2048, ji(9, Di.bind(null, n, r, a, t), void 0, null), null === Ll) throw Error(o(349));
						0 != (30 & hi) || _i(n, t, a)
					}
					return a
				}

				function _i(e, t, n) {
					e.flags |= 16384, e = {
						getSnapshot: t,
						value: n
					}, null === (t = mi.updateQueue) ? (t = {
						lastEffect: null,
						stores: null
					}, mi.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
				}

				function Di(e, t, n, r) {
					t.value = n, t.getSnapshot = r, Ni(t) && Ii(e)
				}

				function Fi(e, t, n) {
					return n((function() {
						Ni(t) && Ii(e)
					}))
				}

				function Ni(e) {
					var t = e.getSnapshot;
					e = e.value;
					try {
						var n = t();
						return !sr(e, n)
					} catch (e) {
						return !0
					}
				}

				function Ii(e) {
					var t = Lo(e, 1);
					null !== t && ru(t, e, 1, -1)
				}

				function zi(e) {
					var t = Pi();
					return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = {
						pending: null,
						interleaved: null,
						lanes: 0,
						dispatch: null,
						lastRenderedReducer: Ai,
						lastRenderedState: e
					}, t.queue = e, e = e.dispatch = ns.bind(null, mi, e), [t.memoizedState, e]
				}

				function ji(e, t, n, r) {
					return e = {
						tag: e,
						create: t,
						destroy: n,
						deps: r,
						next: null
					}, null === (t = mi.updateQueue) ? (t = {
						lastEffect: null,
						stores: null
					}, mi.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
				}

				function Vi() {
					return Ti().memoizedState
				}

				function Bi(e, t, n, r) {
					var a = Pi();
					mi.flags |= e, a.memoizedState = ji(1 | t, n, void 0, void 0 === r ? null : r)
				}

				function $i(e, t, n, r) {
					var a = Ti();
					r = void 0 === r ? null : r;
					var o = void 0;
					if (null !== gi) {
						var i = gi.memoizedState;
						if (o = i.destroy, null !== r && Si(r, i.deps)) return void(a.memoizedState = ji(t, n, o, r))
					}
					mi.flags |= e, a.memoizedState = ji(1 | t, n, o, r)
				}

				function Ui(e, t) {
					return Bi(8390656, 8, e, t)
				}

				function Wi(e, t) {
					return $i(2048, 8, e, t)
				}

				function Hi(e, t) {
					return $i(4, 2, e, t)
				}

				function Yi(e, t) {
					return $i(4, 4, e, t)
				}

				function Qi(e, t) {
					return "function" == typeof t ? (e = e(), t(e), function() {
						t(null)
					}) : null != t ? (e = e(), t.current = e, function() {
						t.current = null
					}) : void 0
				}

				function qi(e, t, n) {
					return n = null != n ? n.concat([e]) : null, $i(4, 4, Qi.bind(null, t, e), n)
				}

				function Gi() {}

				function Xi(e, t) {
					var n = Ti();
					t = void 0 === t ? null : t;
					var r = n.memoizedState;
					return null !== r && null !== t && Si(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
				}

				function Ki(e, t) {
					var n = Ti();
					t = void 0 === t ? null : t;
					var r = n.memoizedState;
					return null !== r && null !== t && Si(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
				}

				function Zi(e, t, n) {
					return 0 == (21 & hi) ? (e.baseState && (e.baseState = !1, ws = !0), e.memoizedState = n) : (sr(n, t) || (n = mt(), mi.lanes |= n, Il |= n, e.baseState = !0), t)
				}

				function Ji(e, t) {
					var n = bt;
					bt = 0 !== n && 4 > n ? n : 4, e(!0);
					var r = pi.transition;
					pi.transition = {};
					try {
						e(!1), t()
					} finally {
						bt = n, pi.transition = r
					}
				}

				function es() {
					return Ti().memoizedState
				}

				function ts(e, t, n) {
					var r = nu(e);
					n = {
						lane: r,
						action: n,
						hasEagerState: !1,
						eagerState: null,
						next: null
					}, rs(e) ? as(t, n) : null !== (n = Ro(e, t, n, r)) && (ru(n, e, r, tu()), os(n, t, r))
				}

				function ns(e, t, n) {
					var r = nu(e),
						a = {
							lane: r,
							action: n,
							hasEagerState: !1,
							eagerState: null,
							next: null
						};
					if (rs(e)) as(t, a);
					else {
						var o = e.alternate;
						if (0 === e.lanes && (null === o || 0 === o.lanes) && null !== (o = t.lastRenderedReducer)) try {
							var i = t.lastRenderedState,
								s = o(i, n);
							if (a.hasEagerState = !0, a.eagerState = s, sr(s, i)) {
								var l = t.interleaved;
								return null === l ? (a.next = a, Ao(t)) : (a.next = l.next, l.next = a), void(t.interleaved = a)
							}
						} catch (e) {}
						null !== (n = Ro(e, t, a, r)) && (ru(n, e, r, a = tu()), os(n, t, r))
					}
				}

				function rs(e) {
					var t = e.alternate;
					return e === mi || null !== t && t === mi
				}

				function as(e, t) {
					bi = vi = !0;
					var n = e.pending;
					null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
				}

				function os(e, t, n) {
					if (0 != (4194240 & n)) {
						var r = t.lanes;
						n |= r &= e.pendingLanes, t.lanes = n, vt(e, n)
					}
				}
				var is = {
						readContext: Po,
						useCallback: ki,
						useContext: ki,
						useEffect: ki,
						useImperativeHandle: ki,
						useInsertionEffect: ki,
						useLayoutEffect: ki,
						useMemo: ki,
						useReducer: ki,
						useRef: ki,
						useState: ki,
						useDebugValue: ki,
						useDeferredValue: ki,
						useTransition: ki,
						useMutableSource: ki,
						useSyncExternalStore: ki,
						useId: ki,
						unstable_isNewReconciler: !1
					},
					ss = {
						readContext: Po,
						useCallback: function(e, t) {
							return Pi().memoizedState = [e, void 0 === t ? null : t], e
						},
						useContext: Po,
						useEffect: Ui,
						useImperativeHandle: function(e, t, n) {
							return n = null != n ? n.concat([e]) : null, Bi(4194308, 4, Qi.bind(null, t, e), n)
						},
						useLayoutEffect: function(e, t) {
							return Bi(4194308, 4, e, t)
						},
						useInsertionEffect: function(e, t) {
							return Bi(4, 2, e, t)
						},
						useMemo: function(e, t) {
							var n = Pi();
							return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
						},
						useReducer: function(e, t, n) {
							var r = Pi();
							return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = {
								pending: null,
								interleaved: null,
								lanes: 0,
								dispatch: null,
								lastRenderedReducer: e,
								lastRenderedState: t
							}, r.queue = e, e = e.dispatch = ts.bind(null, mi, e), [r.memoizedState, e]
						},
						useRef: function(e) {
							return e = {
								current: e
							}, Pi().memoizedState = e
						},
						useState: zi,
						useDebugValue: Gi,
						useDeferredValue: function(e) {
							return Pi().memoizedState = e
						},
						useTransition: function() {
							var e = zi(!1),
								t = e[0];
							return e = Ji.bind(null, e[1]), Pi().memoizedState = e, [t, e]
						},
						useMutableSource: function() {},
						useSyncExternalStore: function(e, t, n) {
							var r = mi,
								a = Pi();
							if (ao) {
								if (void 0 === n) throw Error(o(407));
								n = n()
							} else {
								if (n = t(), null === Ll) throw Error(o(349));
								0 != (30 & hi) || _i(r, t, n)
							}
							a.memoizedState = n;
							var i = {
								value: n,
								getSnapshot: t
							};
							return a.queue = i, Ui(Fi.bind(null, r, i, e), [e]), r.flags |= 2048, ji(9, Di.bind(null, r, i, n, t), void 0, null), n
						},
						useId: function() {
							var e = Pi(),
								t = Ll.identifierPrefix;
							if (ao) {
								var n = Ka;
								t = ":" + t + "R" + (n = (Xa & ~(1 << 32 - it(Xa) - 1)).toString(32) + n), 0 < (n = wi++) && (t += "H" + n.toString(32)), t += ":"
							} else t = ":" + t + "r" + (n = xi++).toString(32) + ":";
							return e.memoizedState = t
						},
						unstable_isNewReconciler: !1
					},
					ls = {
						readContext: Po,
						useCallback: Xi,
						useContext: Po,
						useEffect: Wi,
						useImperativeHandle: qi,
						useInsertionEffect: Hi,
						useLayoutEffect: Yi,
						useMemo: Ki,
						useReducer: Ri,
						useRef: Vi,
						useState: function() {
							return Ri(Ai)
						},
						useDebugValue: Gi,
						useDeferredValue: function(e) {
							return Zi(Ti(), gi.memoizedState, e)
						},
						useTransition: function() {
							return [Ri(Ai)[0], Ti().memoizedState]
						},
						useMutableSource: Mi,
						useSyncExternalStore: Oi,
						useId: es,
						unstable_isNewReconciler: !1
					},
					us = {
						readContext: Po,
						useCallback: Xi,
						useContext: Po,
						useEffect: Wi,
						useImperativeHandle: qi,
						useInsertionEffect: Hi,
						useLayoutEffect: Yi,
						useMemo: Ki,
						useReducer: Li,
						useRef: Vi,
						useState: function() {
							return Li(Ai)
						},
						useDebugValue: Gi,
						useDeferredValue: function(e) {
							var t = Ti();
							return null === gi ? t.memoizedState = e : Zi(t, gi.memoizedState, e)
						},
						useTransition: function() {
							return [Li(Ai)[0], Ti().memoizedState]
						},
						useMutableSource: Mi,
						useSyncExternalStore: Oi,
						useId: es,
						unstable_isNewReconciler: !1
					};

				function cs(e, t) {
					try {
						var n = "",
							r = t;
						do {
							n += B(r), r = r.return
						} while (r);
						var a = n
					} catch (e) {
						a = "\nError generating stack: " + e.message + "\n" + e.stack
					}
					return {
						value: e,
						source: t,
						stack: a,
						digest: null
					}
				}

				function ds(e, t, n) {
					return {
						value: e,
						source: null,
						stack: null != n ? n : null,
						digest: null != t ? t : null
					}
				}

				function fs(e, t) {
					try {
						console.error(t.value)
					} catch (e) {
						setTimeout((function() {
							throw e
						}))
					}
				}
				var ps = "function" == typeof WeakMap ? WeakMap : Map;

				function hs(e, t, n) {
					(n = Do(-1, n)).tag = 3, n.payload = {
						element: null
					};
					var r = t.value;
					return n.callback = function() {
						Hl || (Hl = !0, Yl = r), fs(0, t)
					}, n
				}

				function ms(e, t, n) {
					(n = Do(-1, n)).tag = 3;
					var r = e.type.getDerivedStateFromError;
					if ("function" == typeof r) {
						var a = t.value;
						n.payload = function() {
							return r(a)
						}, n.callback = function() {
							fs(0, t)
						}
					}
					var o = e.stateNode;
					return null !== o && "function" == typeof o.componentDidCatch && (n.callback = function() {
						fs(0, t), "function" != typeof r && (null === Ql ? Ql = new Set([this]) : Ql.add(this));
						var e = t.stack;
						this.componentDidCatch(t.value, {
							componentStack: null !== e ? e : ""
						})
					}), n
				}

				function gs(e, t, n) {
					var r = e.pingCache;
					if (null === r) {
						r = e.pingCache = new ps;
						var a = new Set;
						r.set(t, a)
					} else void 0 === (a = r.get(t)) && (a = new Set, r.set(t, a));
					a.has(n) || (a.add(n), e = Pu.bind(null, e, t, n), t.then(e, e))
				}

				function ys(e) {
					do {
						var t;
						if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t) return e;
						e = e.return
					} while (null !== e);
					return null
				}

				function vs(e, t, n, r, a) {
					return 0 == (1 & e.mode) ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = Do(-1, 1)).tag = 2, Fo(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = a, e)
				}
				var bs = w.ReactCurrentOwner,
					ws = !1;

				function xs(e, t, n, r) {
					t.child = null === e ? Zo(t, null, n, r) : Ko(t, e.child, n, r)
				}

				function ks(e, t, n, r, a) {
					n = n.render;
					var o = t.ref;
					return Co(t, a), r = Ei(e, t, n, r, o, a), n = Ci(), null === e || ws ? (ao && n && eo(t), t.flags |= 1, xs(e, t, r, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Hs(e, t, a))
				}

				function Ss(e, t, n, r, a) {
					if (null === e) {
						var o = n.type;
						return "function" != typeof o || _u(o) || void 0 !== o.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Fu(n.type, null, r, t, t.mode, a)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = o, Es(e, t, o, r, a))
					}
					if (o = e.child, 0 == (e.lanes & a)) {
						var i = o.memoizedProps;
						if ((n = null !== (n = n.compare) ? n : lr)(i, r) && e.ref === t.ref) return Hs(e, t, a)
					}
					return t.flags |= 1, (e = Du(o, r)).ref = t.ref, e.return = t, t.child = e
				}

				function Es(e, t, n, r, a) {
					if (null !== e) {
						var o = e.memoizedProps;
						if (lr(o, r) && e.ref === t.ref) {
							if (ws = !1, t.pendingProps = r = o, 0 == (e.lanes & a)) return t.lanes = e.lanes, Hs(e, t, a);
							0 != (131072 & e.flags) && (ws = !0)
						}
					}
					return Ts(e, t, n, r, a)
				}

				function Cs(e, t, n) {
					var r = t.pendingProps,
						a = r.children,
						o = null !== e ? e.memoizedState : null;
					if ("hidden" === r.mode)
						if (0 == (1 & t.mode)) t.memoizedState = {
							baseLanes: 0,
							cachePool: null,
							transitions: null
						}, Pa(Dl, _l), _l |= n;
						else {
							if (0 == (1073741824 & n)) return e = null !== o ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
								baseLanes: e,
								cachePool: null,
								transitions: null
							}, t.updateQueue = null, Pa(Dl, _l), _l |= e, null;
							t.memoizedState = {
								baseLanes: 0,
								cachePool: null,
								transitions: null
							}, r = null !== o ? o.baseLanes : n, Pa(Dl, _l), _l |= r
						}
					else null !== o ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, Pa(Dl, _l), _l |= r;
					return xs(e, t, a, n), t.child
				}

				function Ps(e, t) {
					var n = t.ref;
					(null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
				}

				function Ts(e, t, n, r, a) {
					var o = Oa(n) ? La : Aa.current;
					return o = Ma(t, o), Co(t, a), n = Ei(e, t, n, r, o, a), r = Ci(), null === e || ws ? (ao && r && eo(t), t.flags |= 1, xs(e, t, n, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Hs(e, t, a))
				}

				function As(e, t, n, r, a) {
					if (Oa(n)) {
						var o = !0;
						Na(t)
					} else o = !1;
					if (Co(t, a), null === t.stateNode) Ws(e, t), Wo(t, n, r), Yo(t, n, r, a), r = !0;
					else if (null === e) {
						var i = t.stateNode,
							s = t.memoizedProps;
						i.props = s;
						var l = i.context,
							u = n.contextType;
						u = "object" == typeof u && null !== u ? Po(u) : Ma(t, u = Oa(n) ? La : Aa.current);
						var c = n.getDerivedStateFromProps,
							d = "function" == typeof c || "function" == typeof i.getSnapshotBeforeUpdate;
						d || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (s !== r || l !== u) && Ho(t, i, r, u), Mo = !1;
						var f = t.memoizedState;
						i.state = f, zo(t, r, i, a), l = t.memoizedState, s !== r || f !== l || Ra.current || Mo ? ("function" == typeof c && (Bo(t, n, c, r), l = t.memoizedState), (s = Mo || Uo(t, n, s, r, f, l, u)) ? (d || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || ("function" == typeof i.componentWillMount && i.componentWillMount(), "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()), "function" == typeof i.componentDidMount && (t.flags |= 4194308)) : ("function" == typeof i.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), i.props = r, i.state = l, i.context = u, r = s) : ("function" == typeof i.componentDidMount && (t.flags |= 4194308), r = !1)
					} else {
						i = t.stateNode, _o(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : yo(t.type, s), i.props = u, d = t.pendingProps, f = i.context, l = "object" == typeof(l = n.contextType) && null !== l ? Po(l) : Ma(t, l = Oa(n) ? La : Aa.current);
						var p = n.getDerivedStateFromProps;
						(c = "function" == typeof p || "function" == typeof i.getSnapshotBeforeUpdate) || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (s !== d || f !== l) && Ho(t, i, r, l), Mo = !1, f = t.memoizedState, i.state = f, zo(t, r, i, a);
						var h = t.memoizedState;
						s !== d || f !== h || Ra.current || Mo ? ("function" == typeof p && (Bo(t, n, p, r), h = t.memoizedState), (u = Mo || Uo(t, n, u, r, f, h, l) || !1) ? (c || "function" != typeof i.UNSAFE_componentWillUpdate && "function" != typeof i.componentWillUpdate || ("function" == typeof i.componentWillUpdate && i.componentWillUpdate(r, h, l), "function" == typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(r, h, l)), "function" == typeof i.componentDidUpdate && (t.flags |= 4), "function" == typeof i.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" != typeof i.componentDidUpdate || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" != typeof i.getSnapshotBeforeUpdate || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = h), i.props = r, i.state = h, i.context = l, r = u) : ("function" != typeof i.componentDidUpdate || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" != typeof i.getSnapshotBeforeUpdate || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1)
					}
					return Rs(e, t, n, r, o, a)
				}

				function Rs(e, t, n, r, a, o) {
					Ps(e, t);
					var i = 0 != (128 & t.flags);
					if (!r && !i) return a && Ia(t, n, !1), Hs(e, t, o);
					r = t.stateNode, bs.current = t;
					var s = i && "function" != typeof n.getDerivedStateFromError ? null : r.render();
					return t.flags |= 1, null !== e && i ? (t.child = Ko(t, e.child, null, o), t.child = Ko(t, null, s, o)) : xs(e, t, s, o), t.memoizedState = r.state, a && Ia(t, n, !0), t.child
				}

				function Ls(e) {
					var t = e.stateNode;
					t.pendingContext ? Da(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Da(0, t.context, !1), ai(e, t.containerInfo)
				}

				function Ms(e, t, n, r, a) {
					return ho(), mo(a), t.flags |= 256, xs(e, t, n, r), t.child
				}
				var Os, _s, Ds, Fs, Ns = {
					dehydrated: null,
					treeContext: null,
					retryLane: 0
				};

				function Is(e) {
					return {
						baseLanes: e,
						cachePool: null,
						transitions: null
					}
				}

				function zs(e, t, n) {
					var r, a = t.pendingProps,
						i = li.current,
						s = !1,
						l = 0 != (128 & t.flags);
					if ((r = l) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & i)), r ? (s = !0, t.flags &= -129) : null !== e && null === e.memoizedState || (i |= 1), Pa(li, 1 & i), null === e) return uo(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (0 == (1 & t.mode) ? t.lanes = 1 : "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824, null) : (l = a.children, e = a.fallback, s ? (a = t.mode, s = t.child, l = {
						mode: "hidden",
						children: l
					}, 0 == (1 & a) && null !== s ? (s.childLanes = 0, s.pendingProps = l) : s = Iu(l, a, 0, null), e = Nu(e, a, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = Is(n), t.memoizedState = Ns, e) : js(t, l));
					if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated)) return function(e, t, n, r, a, i, s) {
						if (n) return 256 & t.flags ? (t.flags &= -257, Vs(e, t, s, r = ds(Error(o(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, a = t.mode, r = Iu({
							mode: "visible",
							children: r.children
						}, a, 0, null), (i = Nu(i, a, s, null)).flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, 0 != (1 & t.mode) && Ko(t, e.child, null, s), t.child.memoizedState = Is(s), t.memoizedState = Ns, i);
						if (0 == (1 & t.mode)) return Vs(e, t, s, null);
						if ("$!" === a.data) {
							if (r = a.nextSibling && a.nextSibling.dataset) var l = r.dgst;
							return r = l, Vs(e, t, s, r = ds(i = Error(o(419)), r, void 0))
						}
						if (l = 0 != (s & e.childLanes), ws || l) {
							if (null !== (r = Ll)) {
								switch (s & -s) {
									case 4:
										a = 2;
										break;
									case 16:
										a = 8;
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
										a = 32;
										break;
									case 536870912:
										a = 268435456;
										break;
									default:
										a = 0
								}
								0 !== (a = 0 != (a & (r.suspendedLanes | s)) ? 0 : a) && a !== i.retryLane && (i.retryLane = a, Lo(e, a), ru(r, e, a, -1))
							}
							return gu(), Vs(e, t, s, r = ds(Error(o(421))))
						}
						return "$?" === a.data ? (t.flags |= 128, t.child = e.child, t = Au.bind(null, e), a._reactRetry = t, null) : (e = i.treeContext, ro = ua(a.nextSibling), no = t, ao = !0, oo = null, null !== e && (Qa[qa++] = Xa, Qa[qa++] = Ka, Qa[qa++] = Ga, Xa = e.id, Ka = e.overflow, Ga = t), (t = js(t, r.children)).flags |= 4096, t)
					}(e, t, l, a, r, i, n);
					if (s) {
						s = a.fallback, l = t.mode, r = (i = e.child).sibling;
						var u = {
							mode: "hidden",
							children: a.children
						};
						return 0 == (1 & l) && t.child !== i ? ((a = t.child).childLanes = 0, a.pendingProps = u, t.deletions = null) : (a = Du(i, u)).subtreeFlags = 14680064 & i.subtreeFlags, null !== r ? s = Du(r, s) : (s = Nu(s, l, n, null)).flags |= 2, s.return = t, a.return = t, a.sibling = s, t.child = a, a = s, s = t.child, l = null === (l = e.child.memoizedState) ? Is(n) : {
							baseLanes: l.baseLanes | n,
							cachePool: null,
							transitions: l.transitions
						}, s.memoizedState = l, s.childLanes = e.childLanes & ~n, t.memoizedState = Ns, a
					}
					return e = (s = e.child).sibling, a = Du(s, {
						mode: "visible",
						children: a.children
					}), 0 == (1 & t.mode) && (a.lanes = n), a.return = t, a.sibling = null, null !== e && (null === (n = t.deletions) ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = a, t.memoizedState = null, a
				}

				function js(e, t) {
					return (t = Iu({
						mode: "visible",
						children: t
					}, e.mode, 0, null)).return = e, e.child = t
				}

				function Vs(e, t, n, r) {
					return null !== r && mo(r), Ko(t, e.child, null, n), (e = js(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e
				}

				function Bs(e, t, n) {
					e.lanes |= t;
					var r = e.alternate;
					null !== r && (r.lanes |= t), Eo(e.return, t, n)
				}

				function $s(e, t, n, r, a) {
					var o = e.memoizedState;
					null === o ? e.memoizedState = {
						isBackwards: t,
						rendering: null,
						renderingStartTime: 0,
						last: r,
						tail: n,
						tailMode: a
					} : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = a)
				}

				function Us(e, t, n) {
					var r = t.pendingProps,
						a = r.revealOrder,
						o = r.tail;
					if (xs(e, t, r.children, n), 0 != (2 & (r = li.current))) r = 1 & r | 2, t.flags |= 128;
					else {
						if (null !== e && 0 != (128 & e.flags)) e: for (e = t.child; null !== e;) {
							if (13 === e.tag) null !== e.memoizedState && Bs(e, n, t);
							else if (19 === e.tag) Bs(e, n, t);
							else if (null !== e.child) {
								e.child.return = e, e = e.child;
								continue
							}
							if (e === t) break e;
							for (; null === e.sibling;) {
								if (null === e.return || e.return === t) break e;
								e = e.return
							}
							e.sibling.return = e.return, e = e.sibling
						}
						r &= 1
					}
					if (Pa(li, r), 0 == (1 & t.mode)) t.memoizedState = null;
					else switch (a) {
						case "forwards":
							for (n = t.child, a = null; null !== n;) null !== (e = n.alternate) && null === ui(e) && (a = n), n = n.sibling;
							null === (n = a) ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), $s(t, !1, a, n, o);
							break;
						case "backwards":
							for (n = null, a = t.child, t.child = null; null !== a;) {
								if (null !== (e = a.alternate) && null === ui(e)) {
									t.child = a;
									break
								}
								e = a.sibling, a.sibling = n, n = a, a = e
							}
							$s(t, !0, n, null, o);
							break;
						case "together":
							$s(t, !1, null, null, void 0);
							break;
						default:
							t.memoizedState = null
					}
					return t.child
				}

				function Ws(e, t) {
					0 == (1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2)
				}

				function Hs(e, t, n) {
					if (null !== e && (t.dependencies = e.dependencies), Il |= t.lanes, 0 == (n & t.childLanes)) return null;
					if (null !== e && t.child !== e.child) throw Error(o(153));
					if (null !== t.child) {
						for (n = Du(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Du(e, e.pendingProps)).return = t;
						n.sibling = null
					}
					return t.child
				}

				function Ys(e, t) {
					if (!ao) switch (e.tailMode) {
						case "hidden":
							t = e.tail;
							for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
							null === n ? e.tail = null : n.sibling = null;
							break;
						case "collapsed":
							n = e.tail;
							for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
							null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
					}
				}

				function Qs(e) {
					var t = null !== e.alternate && e.alternate.child === e.child,
						n = 0,
						r = 0;
					if (t)
						for (var a = e.child; null !== a;) n |= a.lanes | a.childLanes, r |= 14680064 & a.subtreeFlags, r |= 14680064 & a.flags, a.return = e, a = a.sibling;
					else
						for (a = e.child; null !== a;) n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
					return e.subtreeFlags |= r, e.childLanes = n, t
				}

				function qs(e, t, n) {
					var r = t.pendingProps;
					switch (to(t), t.tag) {
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
							return Qs(t), null;
						case 1:
						case 17:
							return Oa(t.type) && _a(), Qs(t), null;
						case 3:
							return r = t.stateNode, oi(), Ca(Ra), Ca(Aa), di(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (fo(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 == (256 & t.flags) || (t.flags |= 1024, null !== oo && (su(oo), oo = null))), _s(e, t), Qs(t), null;
						case 5:
							si(t);
							var a = ri(ni.current);
							if (n = t.type, null !== e && null != t.stateNode) Ds(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
							else {
								if (!r) {
									if (null === t.stateNode) throw Error(o(166));
									return Qs(t), null
								}
								if (e = ri(ei.current), fo(t)) {
									r = t.stateNode, n = t.type;
									var i = t.memoizedProps;
									switch (r[fa] = t, r[pa] = i, e = 0 != (1 & t.mode), n) {
										case "dialog":
											jr("cancel", r), jr("close", r);
											break;
										case "iframe":
										case "object":
										case "embed":
											jr("load", r);
											break;
										case "video":
										case "audio":
											for (a = 0; a < Fr.length; a++) jr(Fr[a], r);
											break;
										case "source":
											jr("error", r);
											break;
										case "img":
										case "image":
										case "link":
											jr("error", r), jr("load", r);
											break;
										case "details":
											jr("toggle", r);
											break;
										case "input":
											X(r, i), jr("invalid", r);
											break;
										case "select":
											r._wrapperState = {
												wasMultiple: !!i.multiple
											}, jr("invalid", r);
											break;
										case "textarea":
											ae(r, i), jr("invalid", r)
									}
									for (var l in ve(n, i), a = null, i)
										if (i.hasOwnProperty(l)) {
											var u = i[l];
											"children" === l ? "string" == typeof u ? r.textContent !== u && (!0 !== i.suppressHydrationWarning && Zr(r.textContent, u, e), a = ["children", u]) : "number" == typeof u && r.textContent !== "" + u && (!0 !== i.suppressHydrationWarning && Zr(r.textContent, u, e), a = ["children", "" + u]) : s.hasOwnProperty(l) && null != u && "onScroll" === l && jr("scroll", r)
										} switch (n) {
										case "input":
											Y(r), J(r, i, !0);
											break;
										case "textarea":
											Y(r), ie(r);
											break;
										case "select":
										case "option":
											break;
										default:
											"function" == typeof i.onClick && (r.onclick = Jr)
									}
									r = a, t.updateQueue = r, null !== r && (t.flags |= 4)
								} else {
									l = 9 === a.nodeType ? a : a.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = se(n)), "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = l.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" == typeof r.is ? e = l.createElement(n, {
										is: r.is
									}) : (e = l.createElement(n), "select" === n && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[fa] = t, e[pa] = r, Os(e, t, !1, !1), t.stateNode = e;
									e: {
										switch (l = be(n, r), n) {
											case "dialog":
												jr("cancel", e), jr("close", e), a = r;
												break;
											case "iframe":
											case "object":
											case "embed":
												jr("load", e), a = r;
												break;
											case "video":
											case "audio":
												for (a = 0; a < Fr.length; a++) jr(Fr[a], e);
												a = r;
												break;
											case "source":
												jr("error", e), a = r;
												break;
											case "img":
											case "image":
											case "link":
												jr("error", e), jr("load", e), a = r;
												break;
											case "details":
												jr("toggle", e), a = r;
												break;
											case "input":
												X(e, r), a = G(e, r), jr("invalid", e);
												break;
											case "option":
											default:
												a = r;
												break;
											case "select":
												e._wrapperState = {
													wasMultiple: !!r.multiple
												}, a = I({}, r, {
													value: void 0
												}), jr("invalid", e);
												break;
											case "textarea":
												ae(e, r), a = re(e, r), jr("invalid", e)
										}
										for (i in ve(n, a), u = a)
											if (u.hasOwnProperty(i)) {
												var c = u[i];
												"style" === i ? ge(e, c) : "dangerouslySetInnerHTML" === i ? null != (c = c ? c.__html : void 0) && de(e, c) : "children" === i ? "string" == typeof c ? ("textarea" !== n || "" !== c) && fe(e, c) : "number" == typeof c && fe(e, "" + c) : "suppressContentEditableWarning" !== i && "suppressHydrationWarning" !== i && "autoFocus" !== i && (s.hasOwnProperty(i) ? null != c && "onScroll" === i && jr("scroll", e) : null != c && b(e, i, c, l))
											} switch (n) {
											case "input":
												Y(e), J(e, r, !1);
												break;
											case "textarea":
												Y(e), ie(e);
												break;
											case "option":
												null != r.value && e.setAttribute("value", "" + W(r.value));
												break;
											case "select":
												e.multiple = !!r.multiple, null != (i = r.value) ? ne(e, !!r.multiple, i, !1) : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
												break;
											default:
												"function" == typeof a.onClick && (e.onclick = Jr)
										}
										switch (n) {
											case "button":
											case "input":
											case "select":
											case "textarea":
												r = !!r.autoFocus;
												break e;
											case "img":
												r = !0;
												break e;
											default:
												r = !1
										}
									}
									r && (t.flags |= 4)
								}
								null !== t.ref && (t.flags |= 512, t.flags |= 2097152)
							}
							return Qs(t), null;
						case 6:
							if (e && null != t.stateNode) Fs(e, t, e.memoizedProps, r);
							else {
								if ("string" != typeof r && null === t.stateNode) throw Error(o(166));
								if (n = ri(ni.current), ri(ei.current), fo(t)) {
									if (r = t.stateNode, n = t.memoizedProps, r[fa] = t, (i = r.nodeValue !== n) && null !== (e = no)) switch (e.tag) {
										case 3:
											Zr(r.nodeValue, n, 0 != (1 & e.mode));
											break;
										case 5:
											!0 !== e.memoizedProps.suppressHydrationWarning && Zr(r.nodeValue, n, 0 != (1 & e.mode))
									}
									i && (t.flags |= 4)
								} else(r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[fa] = t, t.stateNode = r
							}
							return Qs(t), null;
						case 13:
							if (Ca(li), r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
								if (ao && null !== ro && 0 != (1 & t.mode) && 0 == (128 & t.flags)) po(), ho(), t.flags |= 98560, i = !1;
								else if (i = fo(t), null !== r && null !== r.dehydrated) {
									if (null === e) {
										if (!i) throw Error(o(318));
										if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null)) throw Error(o(317));
										i[fa] = t
									} else ho(), 0 == (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
									Qs(t), i = !1
								} else null !== oo && (su(oo), oo = null), i = !0;
								if (!i) return 65536 & t.flags ? t : null
							}
							return 0 != (128 & t.flags) ? (t.lanes = n, t) : ((r = null !== r) != (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192, 0 != (1 & t.mode) && (null === e || 0 != (1 & li.current) ? 0 === Fl && (Fl = 3) : gu())), null !== t.updateQueue && (t.flags |= 4), Qs(t), null);
						case 4:
							return oi(), _s(e, t), null === e && $r(t.stateNode.containerInfo), Qs(t), null;
						case 10:
							return So(t.type._context), Qs(t), null;
						case 19:
							if (Ca(li), null === (i = t.memoizedState)) return Qs(t), null;
							if (r = 0 != (128 & t.flags), null === (l = i.rendering))
								if (r) Ys(i, !1);
								else {
									if (0 !== Fl || null !== e && 0 != (128 & e.flags))
										for (e = t.child; null !== e;) {
											if (null !== (l = ui(e))) {
												for (t.flags |= 128, Ys(i, !1), null !== (r = l.updateQueue) && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; null !== n;) e = r, (i = n).flags &= 14680066, null === (l = i.alternate) ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e = l.dependencies, i.dependencies = null === e ? null : {
													lanes: e.lanes,
													firstContext: e.firstContext
												}), n = n.sibling;
												return Pa(li, 1 & li.current | 2), t.child
											}
											e = e.sibling
										}
									null !== i.tail && Ke() > Ul && (t.flags |= 128, r = !0, Ys(i, !1), t.lanes = 4194304)
								}
							else {
								if (!r)
									if (null !== (e = ui(l))) {
										if (t.flags |= 128, r = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), Ys(i, !0), null === i.tail && "hidden" === i.tailMode && !l.alternate && !ao) return Qs(t), null
									} else 2 * Ke() - i.renderingStartTime > Ul && 1073741824 !== n && (t.flags |= 128, r = !0, Ys(i, !1), t.lanes = 4194304);
								i.isBackwards ? (l.sibling = t.child, t.child = l) : (null !== (n = i.last) ? n.sibling = l : t.child = l, i.last = l)
							}
							return null !== i.tail ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Ke(), t.sibling = null, n = li.current, Pa(li, r ? 1 & n | 2 : 1 & n), t) : (Qs(t), null);
						case 22:
						case 23:
							return fu(), r = null !== t.memoizedState, null !== e && null !== e.memoizedState !== r && (t.flags |= 8192), r && 0 != (1 & t.mode) ? 0 != (1073741824 & _l) && (Qs(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : Qs(t), null;
						case 24:
						case 25:
							return null
					}
					throw Error(o(156, t.tag))
				}

				function Gs(e, t) {
					switch (to(t), t.tag) {
						case 1:
							return Oa(t.type) && _a(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
						case 3:
							return oi(), Ca(Ra), Ca(Aa), di(), 0 != (65536 & (e = t.flags)) && 0 == (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
						case 5:
							return si(t), null;
						case 13:
							if (Ca(li), null !== (e = t.memoizedState) && null !== e.dehydrated) {
								if (null === t.alternate) throw Error(o(340));
								ho()
							}
							return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
						case 19:
							return Ca(li), null;
						case 4:
							return oi(), null;
						case 10:
							return So(t.type._context), null;
						case 22:
						case 23:
							return fu(), null;
						default:
							return null
					}
				}
				Os = function(e, t) {
					for (var n = t.child; null !== n;) {
						if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
						else if (4 !== n.tag && null !== n.child) {
							n.child.return = n, n = n.child;
							continue
						}
						if (n === t) break;
						for (; null === n.sibling;) {
							if (null === n.return || n.return === t) return;
							n = n.return
						}
						n.sibling.return = n.return, n = n.sibling
					}
				}, _s = function() {}, Ds = function(e, t, n, r) {
					var a = e.memoizedProps;
					if (a !== r) {
						e = t.stateNode, ri(ei.current);
						var o, i = null;
						switch (n) {
							case "input":
								a = G(e, a), r = G(e, r), i = [];
								break;
							case "select":
								a = I({}, a, {
									value: void 0
								}), r = I({}, r, {
									value: void 0
								}), i = [];
								break;
							case "textarea":
								a = re(e, a), r = re(e, r), i = [];
								break;
							default:
								"function" != typeof a.onClick && "function" == typeof r.onClick && (e.onclick = Jr)
						}
						for (c in ve(n, r), n = null, a)
							if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
								if ("style" === c) {
									var l = a[c];
									for (o in l) l.hasOwnProperty(o) && (n || (n = {}), n[o] = "")
								} else "dangerouslySetInnerHTML" !== c && "children" !== c && "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (s.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
						for (c in r) {
							var u = r[c];
							if (l = null != a ? a[c] : void 0, r.hasOwnProperty(c) && u !== l && (null != u || null != l))
								if ("style" === c)
									if (l) {
										for (o in l) !l.hasOwnProperty(o) || u && u.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
										for (o in u) u.hasOwnProperty(o) && l[o] !== u[o] && (n || (n = {}), n[o] = u[o])
									} else n || (i || (i = []), i.push(c, n)), n = u;
							else "dangerouslySetInnerHTML" === c ? (u = u ? u.__html : void 0, l = l ? l.__html : void 0, null != u && l !== u && (i = i || []).push(c, u)) : "children" === c ? "string" != typeof u && "number" != typeof u || (i = i || []).push(c, "" + u) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (s.hasOwnProperty(c) ? (null != u && "onScroll" === c && jr("scroll", e), i || l === u || (i = [])) : (i = i || []).push(c, u))
						}
						n && (i = i || []).push("style", n);
						var c = i;
						(t.updateQueue = c) && (t.flags |= 4)
					}
				}, Fs = function(e, t, n, r) {
					n !== r && (t.flags |= 4)
				};
				var Xs = !1,
					Ks = !1,
					Zs = "function" == typeof WeakSet ? WeakSet : Set,
					Js = null;

				function el(e, t) {
					var n = e.ref;
					if (null !== n)
						if ("function" == typeof n) try {
							n(null)
						} catch (n) {
							Cu(e, t, n)
						} else n.current = null
				}

				function tl(e, t, n) {
					try {
						n()
					} catch (n) {
						Cu(e, t, n)
					}
				}
				var nl = !1;

				function rl(e, t, n) {
					var r = t.updateQueue;
					if (null !== (r = null !== r ? r.lastEffect : null)) {
						var a = r = r.next;
						do {
							if ((a.tag & e) === e) {
								var o = a.destroy;
								a.destroy = void 0, void 0 !== o && tl(t, n, o)
							}
							a = a.next
						} while (a !== r)
					}
				}

				function al(e, t) {
					if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
						var n = t = t.next;
						do {
							if ((n.tag & e) === e) {
								var r = n.create;
								n.destroy = r()
							}
							n = n.next
						} while (n !== t)
					}
				}

				function ol(e) {
					var t = e.ref;
					if (null !== t) {
						var n = e.stateNode;
						e.tag, e = n, "function" == typeof t ? t(e) : t.current = e
					}
				}

				function il(e) {
					var t = e.alternate;
					null !== t && (e.alternate = null, il(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && null !== (t = e.stateNode) && (delete t[fa], delete t[pa], delete t[ma], delete t[ga], delete t[ya]), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
				}

				function sl(e) {
					return 5 === e.tag || 3 === e.tag || 4 === e.tag
				}

				function ll(e) {
					e: for (;;) {
						for (; null === e.sibling;) {
							if (null === e.return || sl(e.return)) return null;
							e = e.return
						}
						for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
							if (2 & e.flags) continue e;
							if (null === e.child || 4 === e.tag) continue e;
							e.child.return = e, e = e.child
						}
						if (!(2 & e.flags)) return e.stateNode
					}
				}

				function ul(e, t, n) {
					var r = e.tag;
					if (5 === r || 6 === r) e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Jr));
					else if (4 !== r && null !== (e = e.child))
						for (ul(e, t, n), e = e.sibling; null !== e;) ul(e, t, n), e = e.sibling
				}

				function cl(e, t, n) {
					var r = e.tag;
					if (5 === r || 6 === r) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
					else if (4 !== r && null !== (e = e.child))
						for (cl(e, t, n), e = e.sibling; null !== e;) cl(e, t, n), e = e.sibling
				}
				var dl = null,
					fl = !1;

				function pl(e, t, n) {
					for (n = n.child; null !== n;) hl(e, t, n), n = n.sibling
				}

				function hl(e, t, n) {
					if (ot && "function" == typeof ot.onCommitFiberUnmount) try {
						ot.onCommitFiberUnmount(at, n)
					} catch (e) {}
					switch (n.tag) {
						case 5:
							Ks || el(n, t);
						case 6:
							var r = dl,
								a = fl;
							dl = null, pl(e, t, n), fl = a, null !== (dl = r) && (fl ? (e = dl, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : dl.removeChild(n.stateNode));
							break;
						case 18:
							null !== dl && (fl ? (e = dl, n = n.stateNode, 8 === e.nodeType ? la(e.parentNode, n) : 1 === e.nodeType && la(e, n), $t(e)) : la(dl, n.stateNode));
							break;
						case 4:
							r = dl, a = fl, dl = n.stateNode.containerInfo, fl = !0, pl(e, t, n), dl = r, fl = a;
							break;
						case 0:
						case 11:
						case 14:
						case 15:
							if (!Ks && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
								a = r = r.next;
								do {
									var o = a,
										i = o.destroy;
									o = o.tag, void 0 !== i && (0 != (2 & o) || 0 != (4 & o)) && tl(n, t, i), a = a.next
								} while (a !== r)
							}
							pl(e, t, n);
							break;
						case 1:
							if (!Ks && (el(n, t), "function" == typeof(r = n.stateNode).componentWillUnmount)) try {
								r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
							} catch (e) {
								Cu(n, t, e)
							}
							pl(e, t, n);
							break;
						case 21:
							pl(e, t, n);
							break;
						case 22:
							1 & n.mode ? (Ks = (r = Ks) || null !== n.memoizedState, pl(e, t, n), Ks = r) : pl(e, t, n);
							break;
						default:
							pl(e, t, n)
					}
				}

				function ml(e) {
					var t = e.updateQueue;
					if (null !== t) {
						e.updateQueue = null;
						var n = e.stateNode;
						null === n && (n = e.stateNode = new Zs), t.forEach((function(t) {
							var r = Ru.bind(null, e, t);
							n.has(t) || (n.add(t), t.then(r, r))
						}))
					}
				}

				function gl(e, t) {
					var n = t.deletions;
					if (null !== n)
						for (var r = 0; r < n.length; r++) {
							var a = n[r];
							try {
								var i = e,
									s = t,
									l = s;
								e: for (; null !== l;) {
									switch (l.tag) {
										case 5:
											dl = l.stateNode, fl = !1;
											break e;
										case 3:
										case 4:
											dl = l.stateNode.containerInfo, fl = !0;
											break e
									}
									l = l.return
								}
								if (null === dl) throw Error(o(160));
								hl(i, s, a), dl = null, fl = !1;
								var u = a.alternate;
								null !== u && (u.return = null), a.return = null
							} catch (e) {
								Cu(a, t, e)
							}
						}
					if (12854 & t.subtreeFlags)
						for (t = t.child; null !== t;) yl(t, e), t = t.sibling
				}

				function yl(e, t) {
					var n = e.alternate,
						r = e.flags;
					switch (e.tag) {
						case 0:
						case 11:
						case 14:
						case 15:
							if (gl(t, e), vl(e), 4 & r) {
								try {
									rl(3, e, e.return), al(3, e)
								} catch (t) {
									Cu(e, e.return, t)
								}
								try {
									rl(5, e, e.return)
								} catch (t) {
									Cu(e, e.return, t)
								}
							}
							break;
						case 1:
							gl(t, e), vl(e), 512 & r && null !== n && el(n, n.return);
							break;
						case 5:
							if (gl(t, e), vl(e), 512 & r && null !== n && el(n, n.return), 32 & e.flags) {
								var a = e.stateNode;
								try {
									fe(a, "")
								} catch (t) {
									Cu(e, e.return, t)
								}
							}
							if (4 & r && null != (a = e.stateNode)) {
								var i = e.memoizedProps,
									s = null !== n ? n.memoizedProps : i,
									l = e.type,
									u = e.updateQueue;
								if (e.updateQueue = null, null !== u) try {
									"input" === l && "radio" === i.type && null != i.name && K(a, i), be(l, s);
									var c = be(l, i);
									for (s = 0; s < u.length; s += 2) {
										var d = u[s],
											f = u[s + 1];
										"style" === d ? ge(a, f) : "dangerouslySetInnerHTML" === d ? de(a, f) : "children" === d ? fe(a, f) : b(a, d, f, c)
									}
									switch (l) {
										case "input":
											Z(a, i);
											break;
										case "textarea":
											oe(a, i);
											break;
										case "select":
											var p = a._wrapperState.wasMultiple;
											a._wrapperState.wasMultiple = !!i.multiple;
											var h = i.value;
											null != h ? ne(a, !!i.multiple, h, !1) : p !== !!i.multiple && (null != i.defaultValue ? ne(a, !!i.multiple, i.defaultValue, !0) : ne(a, !!i.multiple, i.multiple ? [] : "", !1))
									}
									a[pa] = i
								} catch (t) {
									Cu(e, e.return, t)
								}
							}
							break;
						case 6:
							if (gl(t, e), vl(e), 4 & r) {
								if (null === e.stateNode) throw Error(o(162));
								a = e.stateNode, i = e.memoizedProps;
								try {
									a.nodeValue = i
								} catch (t) {
									Cu(e, e.return, t)
								}
							}
							break;
						case 3:
							if (gl(t, e), vl(e), 4 & r && null !== n && n.memoizedState.isDehydrated) try {
								$t(t.containerInfo)
							} catch (t) {
								Cu(e, e.return, t)
							}
							break;
						case 4:
						default:
							gl(t, e), vl(e);
							break;
						case 13:
							gl(t, e), vl(e), 8192 & (a = e.child).flags && (i = null !== a.memoizedState, a.stateNode.isHidden = i, !i || null !== a.alternate && null !== a.alternate.memoizedState || ($l = Ke())), 4 & r && ml(e);
							break;
						case 22:
							if (d = null !== n && null !== n.memoizedState, 1 & e.mode ? (Ks = (c = Ks) || d, gl(t, e), Ks = c) : gl(t, e), vl(e), 8192 & r) {
								if (c = null !== e.memoizedState, (e.stateNode.isHidden = c) && !d && 0 != (1 & e.mode))
									for (Js = e, d = e.child; null !== d;) {
										for (f = Js = d; null !== Js;) {
											switch (h = (p = Js).child, p.tag) {
												case 0:
												case 11:
												case 14:
												case 15:
													rl(4, p, p.return);
													break;
												case 1:
													el(p, p.return);
													var m = p.stateNode;
													if ("function" == typeof m.componentWillUnmount) {
														r = p, n = p.return;
														try {
															t = r, m.props = t.memoizedProps, m.state = t.memoizedState, m.componentWillUnmount()
														} catch (e) {
															Cu(r, n, e)
														}
													}
													break;
												case 5:
													el(p, p.return);
													break;
												case 22:
													if (null !== p.memoizedState) {
														kl(f);
														continue
													}
											}
											null !== h ? (h.return = p, Js = h) : kl(f)
										}
										d = d.sibling
									}
								e: for (d = null, f = e;;) {
									if (5 === f.tag) {
										if (null === d) {
											d = f;
											try {
												a = f.stateNode, c ? "function" == typeof(i = a.style).setProperty ? i.setProperty("display", "none", "important") : i.display = "none" : (l = f.stateNode, s = null != (u = f.memoizedProps.style) && u.hasOwnProperty("display") ? u.display : null, l.style.display = me("display", s))
											} catch (t) {
												Cu(e, e.return, t)
											}
										}
									} else if (6 === f.tag) {
										if (null === d) try {
											f.stateNode.nodeValue = c ? "" : f.memoizedProps
										} catch (t) {
											Cu(e, e.return, t)
										}
									} else if ((22 !== f.tag && 23 !== f.tag || null === f.memoizedState || f === e) && null !== f.child) {
										f.child.return = f, f = f.child;
										continue
									}
									if (f === e) break e;
									for (; null === f.sibling;) {
										if (null === f.return || f.return === e) break e;
										d === f && (d = null), f = f.return
									}
									d === f && (d = null), f.sibling.return = f.return, f = f.sibling
								}
							}
							break;
						case 19:
							gl(t, e), vl(e), 4 & r && ml(e);
						case 21:
					}
				}

				function vl(e) {
					var t = e.flags;
					if (2 & t) {
						try {
							e: {
								for (var n = e.return; null !== n;) {
									if (sl(n)) {
										var r = n;
										break e
									}
									n = n.return
								}
								throw Error(o(160))
							}
							switch (r.tag) {
								case 5:
									var a = r.stateNode;
									32 & r.flags && (fe(a, ""), r.flags &= -33), cl(e, ll(e), a);
									break;
								case 3:
								case 4:
									var i = r.stateNode.containerInfo;
									ul(e, ll(e), i);
									break;
								default:
									throw Error(o(161))
							}
						}
						catch (t) {
							Cu(e, e.return, t)
						}
						e.flags &= -3
					}
					4096 & t && (e.flags &= -4097)
				}

				function bl(e, t, n) {
					Js = e, wl(e, t, n)
				}

				function wl(e, t, n) {
					for (var r = 0 != (1 & e.mode); null !== Js;) {
						var a = Js,
							o = a.child;
						if (22 === a.tag && r) {
							var i = null !== a.memoizedState || Xs;
							if (!i) {
								var s = a.alternate,
									l = null !== s && null !== s.memoizedState || Ks;
								s = Xs;
								var u = Ks;
								if (Xs = i, (Ks = l) && !u)
									for (Js = a; null !== Js;) l = (i = Js).child, 22 === i.tag && null !== i.memoizedState ? Sl(a) : null !== l ? (l.return = i, Js = l) : Sl(a);
								for (; null !== o;) Js = o, wl(o, t, n), o = o.sibling;
								Js = a, Xs = s, Ks = u
							}
							xl(e)
						} else 0 != (8772 & a.subtreeFlags) && null !== o ? (o.return = a, Js = o) : xl(e)
					}
				}

				function xl(e) {
					for (; null !== Js;) {
						var t = Js;
						if (0 != (8772 & t.flags)) {
							var n = t.alternate;
							try {
								if (0 != (8772 & t.flags)) switch (t.tag) {
									case 0:
									case 11:
									case 15:
										Ks || al(5, t);
										break;
									case 1:
										var r = t.stateNode;
										if (4 & t.flags && !Ks)
											if (null === n) r.componentDidMount();
											else {
												var a = t.elementType === t.type ? n.memoizedProps : yo(t.type, n.memoizedProps);
												r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
											} var i = t.updateQueue;
										null !== i && jo(t, i, r);
										break;
									case 3:
										var s = t.updateQueue;
										if (null !== s) {
											if (n = null, null !== t.child) switch (t.child.tag) {
												case 5:
												case 1:
													n = t.child.stateNode
											}
											jo(t, s, n)
										}
										break;
									case 5:
										var l = t.stateNode;
										if (null === n && 4 & t.flags) {
											n = l;
											var u = t.memoizedProps;
											switch (t.type) {
												case "button":
												case "input":
												case "select":
												case "textarea":
													u.autoFocus && n.focus();
													break;
												case "img":
													u.src && (n.src = u.src)
											}
										}
										break;
									case 6:
									case 4:
									case 12:
									case 19:
									case 17:
									case 21:
									case 22:
									case 23:
									case 25:
										break;
									case 13:
										if (null === t.memoizedState) {
											var c = t.alternate;
											if (null !== c) {
												var d = c.memoizedState;
												if (null !== d) {
													var f = d.dehydrated;
													null !== f && $t(f)
												}
											}
										}
										break;
									default:
										throw Error(o(163))
								}
								Ks || 512 & t.flags && ol(t)
							} catch (e) {
								Cu(t, t.return, e)
							}
						}
						if (t === e) {
							Js = null;
							break
						}
						if (null !== (n = t.sibling)) {
							n.return = t.return, Js = n;
							break
						}
						Js = t.return
					}
				}

				function kl(e) {
					for (; null !== Js;) {
						var t = Js;
						if (t === e) {
							Js = null;
							break
						}
						var n = t.sibling;
						if (null !== n) {
							n.return = t.return, Js = n;
							break
						}
						Js = t.return
					}
				}

				function Sl(e) {
					for (; null !== Js;) {
						var t = Js;
						try {
							switch (t.tag) {
								case 0:
								case 11:
								case 15:
									var n = t.return;
									try {
										al(4, t)
									} catch (e) {
										Cu(t, n, e)
									}
									break;
								case 1:
									var r = t.stateNode;
									if ("function" == typeof r.componentDidMount) {
										var a = t.return;
										try {
											r.componentDidMount()
										} catch (e) {
											Cu(t, a, e)
										}
									}
									var o = t.return;
									try {
										ol(t)
									} catch (e) {
										Cu(t, o, e)
									}
									break;
								case 5:
									var i = t.return;
									try {
										ol(t)
									} catch (e) {
										Cu(t, i, e)
									}
							}
						} catch (e) {
							Cu(t, t.return, e)
						}
						if (t === e) {
							Js = null;
							break
						}
						var s = t.sibling;
						if (null !== s) {
							s.return = t.return, Js = s;
							break
						}
						Js = t.return
					}
				}
				var El, Cl = Math.ceil,
					Pl = w.ReactCurrentDispatcher,
					Tl = w.ReactCurrentOwner,
					Al = w.ReactCurrentBatchConfig,
					Rl = 0,
					Ll = null,
					Ml = null,
					Ol = 0,
					_l = 0,
					Dl = Ea(0),
					Fl = 0,
					Nl = null,
					Il = 0,
					zl = 0,
					jl = 0,
					Vl = null,
					Bl = null,
					$l = 0,
					Ul = 1 / 0,
					Wl = null,
					Hl = !1,
					Yl = null,
					Ql = null,
					ql = !1,
					Gl = null,
					Xl = 0,
					Kl = 0,
					Zl = null,
					Jl = -1,
					eu = 0;

				function tu() {
					return 0 != (6 & Rl) ? Ke() : -1 !== Jl ? Jl : Jl = Ke()
				}

				function nu(e) {
					return 0 == (1 & e.mode) ? 1 : 0 != (2 & Rl) && 0 !== Ol ? Ol & -Ol : null !== go.transition ? (0 === eu && (eu = mt()), eu) : 0 !== (e = bt) ? e : e = void 0 === (e = window.event) ? 16 : Xt(e.type)
				}

				function ru(e, t, n, r) {
					if (50 < Kl) throw Kl = 0, Zl = null, Error(o(185));
					yt(e, n, r), 0 != (2 & Rl) && e === Ll || (e === Ll && (0 == (2 & Rl) && (zl |= n), 4 === Fl && lu(e, Ol)), au(e, r), 1 === n && 0 === Rl && 0 == (1 & t.mode) && (Ul = Ke() + 500, ja && $a()))
				}

				function au(e, t) {
					var n = e.callbackNode;
					! function(e, t) {
						for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
							var i = 31 - it(o),
								s = 1 << i,
								l = a[i]; - 1 === l ? 0 != (s & n) && 0 == (s & r) || (a[i] = pt(s, t)) : l <= t && (e.expiredLanes |= s), o &= ~s
						}
					}(e, t);
					var r = ft(e, e === Ll ? Ol : 0);
					if (0 === r) null !== n && qe(n), e.callbackNode = null, e.callbackPriority = 0;
					else if (t = r & -r, e.callbackPriority !== t) {
						if (null != n && qe(n), 1 === t) 0 === e.tag ? function(e) {
							ja = !0, Ba(e)
						}(uu.bind(null, e)) : Ba(uu.bind(null, e)), ia((function() {
							0 == (6 & Rl) && $a()
						})), n = null;
						else {
							switch (wt(r)) {
								case 1:
									n = Je;
									break;
								case 4:
									n = et;
									break;
								case 16:
								default:
									n = tt;
									break;
								case 536870912:
									n = rt
							}
							n = Lu(n, ou.bind(null, e))
						}
						e.callbackPriority = t, e.callbackNode = n
					}
				}

				function ou(e, t) {
					if (Jl = -1, eu = 0, 0 != (6 & Rl)) throw Error(o(327));
					var n = e.callbackNode;
					if (Su() && e.callbackNode !== n) return null;
					var r = ft(e, e === Ll ? Ol : 0);
					if (0 === r) return null;
					if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = yu(e, r);
					else {
						t = r;
						var a = Rl;
						Rl |= 2;
						var i = mu();
						for (Ll === e && Ol === t || (Wl = null, Ul = Ke() + 500, pu(e, t));;) try {
							bu();
							break
						} catch (t) {
							hu(e, t)
						}
						ko(), Pl.current = i, Rl = a, null !== Ml ? t = 0 : (Ll = null, Ol = 0, t = Fl)
					}
					if (0 !== t) {
						if (2 === t && 0 !== (a = ht(e)) && (r = a, t = iu(e, a)), 1 === t) throw n = Nl, pu(e, 0), lu(e, r), au(e, Ke()), n;
						if (6 === t) lu(e, r);
						else {
							if (a = e.current.alternate, 0 == (30 & r) && ! function(e) {
									for (var t = e;;) {
										if (16384 & t.flags) {
											var n = t.updateQueue;
											if (null !== n && null !== (n = n.stores))
												for (var r = 0; r < n.length; r++) {
													var a = n[r],
														o = a.getSnapshot;
													a = a.value;
													try {
														if (!sr(o(), a)) return !1
													} catch (e) {
														return !1
													}
												}
										}
										if (n = t.child, 16384 & t.subtreeFlags && null !== n) n.return = t, t = n;
										else {
											if (t === e) break;
											for (; null === t.sibling;) {
												if (null === t.return || t.return === e) return !0;
												t = t.return
											}
											t.sibling.return = t.return, t = t.sibling
										}
									}
									return !0
								}(a) && (2 === (t = yu(e, r)) && 0 !== (i = ht(e)) && (r = i, t = iu(e, i)), 1 === t)) throw n = Nl, pu(e, 0), lu(e, r), au(e, Ke()), n;
							switch (e.finishedWork = a, e.finishedLanes = r, t) {
								case 0:
								case 1:
									throw Error(o(345));
								case 2:
								case 5:
									ku(e, Bl, Wl);
									break;
								case 3:
									if (lu(e, r), (130023424 & r) === r && 10 < (t = $l + 500 - Ke())) {
										if (0 !== ft(e, 0)) break;
										if (((a = e.suspendedLanes) & r) !== r) {
											tu(), e.pingedLanes |= e.suspendedLanes & a;
											break
										}
										e.timeoutHandle = ra(ku.bind(null, e, Bl, Wl), t);
										break
									}
									ku(e, Bl, Wl);
									break;
								case 4:
									if (lu(e, r), (4194240 & r) === r) break;
									for (t = e.eventTimes, a = -1; 0 < r;) {
										var s = 31 - it(r);
										i = 1 << s, (s = t[s]) > a && (a = s), r &= ~i
									}
									if (r = a, 10 < (r = (120 > (r = Ke() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Cl(r / 1960)) - r)) {
										e.timeoutHandle = ra(ku.bind(null, e, Bl, Wl), r);
										break
									}
									ku(e, Bl, Wl);
									break;
								default:
									throw Error(o(329))
							}
						}
					}
					return au(e, Ke()), e.callbackNode === n ? ou.bind(null, e) : null
				}

				function iu(e, t) {
					var n = Vl;
					return e.current.memoizedState.isDehydrated && (pu(e, t).flags |= 256), 2 !== (e = yu(e, t)) && (t = Bl, Bl = n, null !== t && su(t)), e
				}

				function su(e) {
					null === Bl ? Bl = e : Bl.push.apply(Bl, e)
				}

				function lu(e, t) {
					for (t &= ~jl, t &= ~zl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
						var n = 31 - it(t),
							r = 1 << n;
						e[n] = -1, t &= ~r
					}
				}

				function uu(e) {
					if (0 != (6 & Rl)) throw Error(o(327));
					Su();
					var t = ft(e, 0);
					if (0 == (1 & t)) return au(e, Ke()), null;
					var n = yu(e, t);
					if (0 !== e.tag && 2 === n) {
						var r = ht(e);
						0 !== r && (t = r, n = iu(e, r))
					}
					if (1 === n) throw n = Nl, pu(e, 0), lu(e, t), au(e, Ke()), n;
					if (6 === n) throw Error(o(345));
					return e.finishedWork = e.current.alternate, e.finishedLanes = t, ku(e, Bl, Wl), au(e, Ke()), null
				}

				function cu(e, t) {
					var n = Rl;
					Rl |= 1;
					try {
						return e(t)
					} finally {
						0 === (Rl = n) && (Ul = Ke() + 500, ja && $a())
					}
				}

				function du(e) {
					null !== Gl && 0 === Gl.tag && 0 == (6 & Rl) && Su();
					var t = Rl;
					Rl |= 1;
					var n = Al.transition,
						r = bt;
					try {
						if (Al.transition = null, bt = 1, e) return e()
					} finally {
						bt = r, Al.transition = n, 0 == (6 & (Rl = t)) && $a()
					}
				}

				function fu() {
					_l = Dl.current, Ca(Dl)
				}

				function pu(e, t) {
					e.finishedWork = null, e.finishedLanes = 0;
					var n = e.timeoutHandle;
					if (-1 !== n && (e.timeoutHandle = -1, aa(n)), null !== Ml)
						for (n = Ml.return; null !== n;) {
							var r = n;
							switch (to(r), r.tag) {
								case 1:
									null != (r = r.type.childContextTypes) && _a();
									break;
								case 3:
									oi(), Ca(Ra), Ca(Aa), di();
									break;
								case 5:
									si(r);
									break;
								case 4:
									oi();
									break;
								case 13:
								case 19:
									Ca(li);
									break;
								case 10:
									So(r.type._context);
									break;
								case 22:
								case 23:
									fu()
							}
							n = n.return
						}
					if (Ll = e, Ml = e = Du(e.current, null), Ol = _l = t, Fl = 0, Nl = null, jl = zl = Il = 0, Bl = Vl = null, null !== To) {
						for (t = 0; t < To.length; t++)
							if (null !== (r = (n = To[t]).interleaved)) {
								n.interleaved = null;
								var a = r.next,
									o = n.pending;
								if (null !== o) {
									var i = o.next;
									o.next = a, r.next = i
								}
								n.pending = r
							} To = null
					}
					return e
				}

				function hu(e, t) {
					for (;;) {
						var n = Ml;
						try {
							if (ko(), fi.current = is, vi) {
								for (var r = mi.memoizedState; null !== r;) {
									var a = r.queue;
									null !== a && (a.pending = null), r = r.next
								}
								vi = !1
							}
							if (hi = 0, yi = gi = mi = null, bi = !1, wi = 0, Tl.current = null, null === n || null === n.return) {
								Fl = 1, Nl = t, Ml = null;
								break
							}
							e: {
								var i = e,
									s = n.return,
									l = n,
									u = t;
								if (t = Ol, l.flags |= 32768, null !== u && "object" == typeof u && "function" == typeof u.then) {
									var c = u,
										d = l,
										f = d.tag;
									if (0 == (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
										var p = d.alternate;
										p ? (d.updateQueue = p.updateQueue, d.memoizedState = p.memoizedState, d.lanes = p.lanes) : (d.updateQueue = null, d.memoizedState = null)
									}
									var h = ys(s);
									if (null !== h) {
										h.flags &= -257, vs(h, s, l, 0, t), 1 & h.mode && gs(i, c, t), u = c;
										var m = (t = h).updateQueue;
										if (null === m) {
											var g = new Set;
											g.add(u), t.updateQueue = g
										} else m.add(u);
										break e
									}
									if (0 == (1 & t)) {
										gs(i, c, t), gu();
										break e
									}
									u = Error(o(426))
								} else if (ao && 1 & l.mode) {
									var y = ys(s);
									if (null !== y) {
										0 == (65536 & y.flags) && (y.flags |= 256), vs(y, s, l, 0, t), mo(cs(u, l));
										break e
									}
								}
								i = u = cs(u, l),
								4 !== Fl && (Fl = 2),
								null === Vl ? Vl = [i] : Vl.push(i),
								i = s;do {
									switch (i.tag) {
										case 3:
											i.flags |= 65536, t &= -t, i.lanes |= t, Io(i, hs(0, u, t));
											break e;
										case 1:
											l = u;
											var v = i.type,
												b = i.stateNode;
											if (0 == (128 & i.flags) && ("function" == typeof v.getDerivedStateFromError || null !== b && "function" == typeof b.componentDidCatch && (null === Ql || !Ql.has(b)))) {
												i.flags |= 65536, t &= -t, i.lanes |= t, Io(i, ms(i, l, t));
												break e
											}
									}
									i = i.return
								} while (null !== i)
							}
							xu(n)
						} catch (e) {
							t = e, Ml === n && null !== n && (Ml = n = n.return);
							continue
						}
						break
					}
				}

				function mu() {
					var e = Pl.current;
					return Pl.current = is, null === e ? is : e
				}

				function gu() {
					0 !== Fl && 3 !== Fl && 2 !== Fl || (Fl = 4), null === Ll || 0 == (268435455 & Il) && 0 == (268435455 & zl) || lu(Ll, Ol)
				}

				function yu(e, t) {
					var n = Rl;
					Rl |= 2;
					var r = mu();
					for (Ll === e && Ol === t || (Wl = null, pu(e, t));;) try {
						vu();
						break
					} catch (t) {
						hu(e, t)
					}
					if (ko(), Rl = n, Pl.current = r, null !== Ml) throw Error(o(261));
					return Ll = null, Ol = 0, Fl
				}

				function vu() {
					for (; null !== Ml;) wu(Ml)
				}

				function bu() {
					for (; null !== Ml && !Ge();) wu(Ml)
				}

				function wu(e) {
					var t = El(e.alternate, e, _l);
					e.memoizedProps = e.pendingProps, null === t ? xu(e) : Ml = t, Tl.current = null
				}

				function xu(e) {
					var t = e;
					do {
						var n = t.alternate;
						if (e = t.return, 0 == (32768 & t.flags)) {
							if (null !== (n = qs(n, t, _l))) return void(Ml = n)
						} else {
							if (null !== (n = Gs(n, t))) return n.flags &= 32767, void(Ml = n);
							if (null === e) return Fl = 6, void(Ml = null);
							e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null
						}
						if (null !== (t = t.sibling)) return void(Ml = t);
						Ml = t = e
					} while (null !== t);
					0 === Fl && (Fl = 5)
				}

				function ku(e, t, n) {
					var r = bt,
						a = Al.transition;
					try {
						Al.transition = null, bt = 1,
							function(e, t, n, r) {
								do {
									Su()
								} while (null !== Gl);
								if (0 != (6 & Rl)) throw Error(o(327));
								n = e.finishedWork;
								var a = e.finishedLanes;
								if (null === n) return null;
								if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(o(177));
								e.callbackNode = null, e.callbackPriority = 0;
								var i = n.lanes | n.childLanes;
								if (function(e, t) {
										var n = e.pendingLanes & ~t;
										e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
										var r = e.eventTimes;
										for (e = e.expirationTimes; 0 < n;) {
											var a = 31 - it(n),
												o = 1 << a;
											t[a] = 0, r[a] = -1, e[a] = -1, n &= ~o
										}
									}(e, i), e === Ll && (Ml = Ll = null, Ol = 0), 0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags) || ql || (ql = !0, Lu(tt, (function() {
										return Su(), null
									}))), i = 0 != (15990 & n.flags), 0 != (15990 & n.subtreeFlags) || i) {
									i = Al.transition, Al.transition = null;
									var s = bt;
									bt = 1;
									var l = Rl;
									Rl |= 4, Tl.current = null,
										function(e, t) {
											if (ea = Wt, pr(e = fr())) {
												if ("selectionStart" in e) var n = {
													start: e.selectionStart,
													end: e.selectionEnd
												};
												else e: {
													var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
													if (r && 0 !== r.rangeCount) {
														n = r.anchorNode;
														var a = r.anchorOffset,
															i = r.focusNode;
														r = r.focusOffset;
														try {
															n.nodeType, i.nodeType
														} catch (e) {
															n = null;
															break e
														}
														var s = 0,
															l = -1,
															u = -1,
															c = 0,
															d = 0,
															f = e,
															p = null;
														t: for (;;) {
															for (var h; f !== n || 0 !== a && 3 !== f.nodeType || (l = s + a), f !== i || 0 !== r && 3 !== f.nodeType || (u = s + r), 3 === f.nodeType && (s += f.nodeValue.length), null !== (h = f.firstChild);) p = f, f = h;
															for (;;) {
																if (f === e) break t;
																if (p === n && ++c === a && (l = s), p === i && ++d === r && (u = s), null !== (h = f.nextSibling)) break;
																p = (f = p).parentNode
															}
															f = h
														}
														n = -1 === l || -1 === u ? null : {
															start: l,
															end: u
														}
													} else n = null
												}
												n = n || {
													start: 0,
													end: 0
												}
											} else n = null;
											for (ta = {
													focusedElem: e,
													selectionRange: n
												}, Wt = !1, Js = t; null !== Js;)
												if (e = (t = Js).child, 0 != (1028 & t.subtreeFlags) && null !== e) e.return = t, Js = e;
												else
													for (; null !== Js;) {
														t = Js;
														try {
															var m = t.alternate;
															if (0 != (1024 & t.flags)) switch (t.tag) {
																case 0:
																case 11:
																case 15:
																case 5:
																case 6:
																case 4:
																case 17:
																	break;
																case 1:
																	if (null !== m) {
																		var g = m.memoizedProps,
																			y = m.memoizedState,
																			v = t.stateNode,
																			b = v.getSnapshotBeforeUpdate(t.elementType === t.type ? g : yo(t.type, g), y);
																		v.__reactInternalSnapshotBeforeUpdate = b
																	}
																	break;
																case 3:
																	var w = t.stateNode.containerInfo;
																	1 === w.nodeType ? w.textContent = "" : 9 === w.nodeType && w.documentElement && w.removeChild(w.documentElement);
																	break;
																default:
																	throw Error(o(163))
															}
														} catch (e) {
															Cu(t, t.return, e)
														}
														if (null !== (e = t.sibling)) {
															e.return = t.return, Js = e;
															break
														}
														Js = t.return
													}
											m = nl, nl = !1
										}(e, n), yl(n, e), hr(ta), Wt = !!ea, ta = ea = null, e.current = n, bl(n, e, a), Xe(), Rl = l, bt = s, Al.transition = i
								} else e.current = n;
								if (ql && (ql = !1, Gl = e, Xl = a), 0 === (i = e.pendingLanes) && (Ql = null), function(e) {
										if (ot && "function" == typeof ot.onCommitFiberRoot) try {
											ot.onCommitFiberRoot(at, e, void 0, 128 == (128 & e.current.flags))
										} catch (e) {}
									}(n.stateNode), au(e, Ke()), null !== t)
									for (r = e.onRecoverableError, n = 0; n < t.length; n++) r((a = t[n]).value, {
										componentStack: a.stack,
										digest: a.digest
									});
								if (Hl) throw Hl = !1, e = Yl, Yl = null, e;
								0 != (1 & Xl) && 0 !== e.tag && Su(), 0 != (1 & (i = e.pendingLanes)) ? e === Zl ? Kl++ : (Kl = 0, Zl = e) : Kl = 0, $a()
							}(e, t, n, r)
					} finally {
						Al.transition = a, bt = r
					}
					return null
				}

				function Su() {
					if (null !== Gl) {
						var e = wt(Xl),
							t = Al.transition,
							n = bt;
						try {
							if (Al.transition = null, bt = 16 > e ? 16 : e, null === Gl) var r = !1;
							else {
								if (e = Gl, Gl = null, Xl = 0, 0 != (6 & Rl)) throw Error(o(331));
								var a = Rl;
								for (Rl |= 4, Js = e.current; null !== Js;) {
									var i = Js,
										s = i.child;
									if (0 != (16 & Js.flags)) {
										var l = i.deletions;
										if (null !== l) {
											for (var u = 0; u < l.length; u++) {
												var c = l[u];
												for (Js = c; null !== Js;) {
													var d = Js;
													switch (d.tag) {
														case 0:
														case 11:
														case 15:
															rl(8, d, i)
													}
													var f = d.child;
													if (null !== f) f.return = d, Js = f;
													else
														for (; null !== Js;) {
															var p = (d = Js).sibling,
																h = d.return;
															if (il(d), d === c) {
																Js = null;
																break
															}
															if (null !== p) {
																p.return = h, Js = p;
																break
															}
															Js = h
														}
												}
											}
											var m = i.alternate;
											if (null !== m) {
												var g = m.child;
												if (null !== g) {
													m.child = null;
													do {
														var y = g.sibling;
														g.sibling = null, g = y
													} while (null !== g)
												}
											}
											Js = i
										}
									}
									if (0 != (2064 & i.subtreeFlags) && null !== s) s.return = i, Js = s;
									else e: for (; null !== Js;) {
										if (0 != (2048 & (i = Js).flags)) switch (i.tag) {
											case 0:
											case 11:
											case 15:
												rl(9, i, i.return)
										}
										var v = i.sibling;
										if (null !== v) {
											v.return = i.return, Js = v;
											break e
										}
										Js = i.return
									}
								}
								var b = e.current;
								for (Js = b; null !== Js;) {
									var w = (s = Js).child;
									if (0 != (2064 & s.subtreeFlags) && null !== w) w.return = s, Js = w;
									else e: for (s = b; null !== Js;) {
										if (0 != (2048 & (l = Js).flags)) try {
											switch (l.tag) {
												case 0:
												case 11:
												case 15:
													al(9, l)
											}
										} catch (e) {
											Cu(l, l.return, e)
										}
										if (l === s) {
											Js = null;
											break e
										}
										var x = l.sibling;
										if (null !== x) {
											x.return = l.return, Js = x;
											break e
										}
										Js = l.return
									}
								}
								if (Rl = a, $a(), ot && "function" == typeof ot.onPostCommitFiberRoot) try {
									ot.onPostCommitFiberRoot(at, e)
								} catch (e) {}
								r = !0
							}
							return r
						} finally {
							bt = n, Al.transition = t
						}
					}
					return !1
				}

				function Eu(e, t, n) {
					e = Fo(e, t = hs(0, t = cs(n, t), 1), 1), t = tu(), null !== e && (yt(e, 1, t), au(e, t))
				}

				function Cu(e, t, n) {
					if (3 === e.tag) Eu(e, e, n);
					else
						for (; null !== t;) {
							if (3 === t.tag) {
								Eu(t, e, n);
								break
							}
							if (1 === t.tag) {
								var r = t.stateNode;
								if ("function" == typeof t.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === Ql || !Ql.has(r))) {
									t = Fo(t, e = ms(t, e = cs(n, e), 1), 1), e = tu(), null !== t && (yt(t, 1, e), au(t, e));
									break
								}
							}
							t = t.return
						}
				}

				function Pu(e, t, n) {
					var r = e.pingCache;
					null !== r && r.delete(t), t = tu(), e.pingedLanes |= e.suspendedLanes & n, Ll === e && (Ol & n) === n && (4 === Fl || 3 === Fl && (130023424 & Ol) === Ol && 500 > Ke() - $l ? pu(e, 0) : jl |= n), au(e, t)
				}

				function Tu(e, t) {
					0 === t && (0 == (1 & e.mode) ? t = 1 : (t = ct, 0 == (130023424 & (ct <<= 1)) && (ct = 4194304)));
					var n = tu();
					null !== (e = Lo(e, t)) && (yt(e, t, n), au(e, n))
				}

				function Au(e) {
					var t = e.memoizedState,
						n = 0;
					null !== t && (n = t.retryLane), Tu(e, n)
				}

				function Ru(e, t) {
					var n = 0;
					switch (e.tag) {
						case 13:
							var r = e.stateNode,
								a = e.memoizedState;
							null !== a && (n = a.retryLane);
							break;
						case 19:
							r = e.stateNode;
							break;
						default:
							throw Error(o(314))
					}
					null !== r && r.delete(t), Tu(e, n)
				}

				function Lu(e, t) {
					return Qe(e, t)
				}

				function Mu(e, t, n, r) {
					this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
				}

				function Ou(e, t, n, r) {
					return new Mu(e, t, n, r)
				}

				function _u(e) {
					return !(!(e = e.prototype) || !e.isReactComponent)
				}

				function Du(e, t) {
					var n = e.alternate;
					return null === n ? ((n = Ou(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
						lanes: t.lanes,
						firstContext: t.firstContext
					}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
				}

				function Fu(e, t, n, r, a, i) {
					var s = 2;
					if (r = e, "function" == typeof e) _u(e) && (s = 1);
					else if ("string" == typeof e) s = 5;
					else e: switch (e) {
						case S:
							return Nu(n.children, a, i, t);
						case E:
							s = 8, a |= 8;
							break;
						case C:
							return (e = Ou(12, n, t, 2 | a)).elementType = C, e.lanes = i, e;
						case R:
							return (e = Ou(13, n, t, a)).elementType = R, e.lanes = i, e;
						case L:
							return (e = Ou(19, n, t, a)).elementType = L, e.lanes = i, e;
						case _:
							return Iu(n, a, i, t);
						default:
							if ("object" == typeof e && null !== e) switch (e.$$typeof) {
								case P:
									s = 10;
									break e;
								case T:
									s = 9;
									break e;
								case A:
									s = 11;
									break e;
								case M:
									s = 14;
									break e;
								case O:
									s = 16, r = null;
									break e
							}
							throw Error(o(130, null == e ? e : typeof e, ""))
					}
					return (t = Ou(s, n, t, a)).elementType = e, t.type = r, t.lanes = i, t
				}

				function Nu(e, t, n, r) {
					return (e = Ou(7, e, r, t)).lanes = n, e
				}

				function Iu(e, t, n, r) {
					return (e = Ou(22, e, r, t)).elementType = _, e.lanes = n, e.stateNode = {
						isHidden: !1
					}, e
				}

				function zu(e, t, n) {
					return (e = Ou(6, e, null, t)).lanes = n, e
				}

				function ju(e, t, n) {
					return (t = Ou(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
						containerInfo: e.containerInfo,
						pendingChildren: null,
						implementation: e.implementation
					}, t
				}

				function Vu(e, t, n, r, a) {
					this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = gt(0), this.expirationTimes = gt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = gt(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null
				}

				function Bu(e, t, n, r, a, o, i, s, l) {
					return e = new Vu(e, t, n, s, l), 1 === t ? (t = 1, !0 === o && (t |= 8)) : t = 0, o = Ou(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
						element: r,
						isDehydrated: n,
						cache: null,
						transitions: null,
						pendingSuspenseBoundaries: null
					}, Oo(o), e
				}

				function $u(e) {
					if (!e) return Ta;
					e: {
						if ($e(e = e._reactInternals) !== e || 1 !== e.tag) throw Error(o(170));
						var t = e;do {
							switch (t.tag) {
								case 3:
									t = t.stateNode.context;
									break e;
								case 1:
									if (Oa(t.type)) {
										t = t.stateNode.__reactInternalMemoizedMergedChildContext;
										break e
									}
							}
							t = t.return
						} while (null !== t);
						throw Error(o(171))
					}
					if (1 === e.tag) {
						var n = e.type;
						if (Oa(n)) return Fa(e, n, t)
					}
					return t
				}

				function Uu(e, t, n, r, a, o, i, s, l) {
					return (e = Bu(n, r, !0, e, 0, o, 0, s, l)).context = $u(null), n = e.current, (o = Do(r = tu(), a = nu(n))).callback = null != t ? t : null, Fo(n, o, a), e.current.lanes = a, yt(e, a, r), au(e, r), e
				}

				function Wu(e, t, n, r) {
					var a = t.current,
						o = tu(),
						i = nu(a);
					return n = $u(n), null === t.context ? t.context = n : t.pendingContext = n, (t = Do(o, i)).payload = {
						element: e
					}, null !== (r = void 0 === r ? null : r) && (t.callback = r), null !== (e = Fo(a, t, i)) && (ru(e, a, i, o), No(e, a, i)), i
				}

				function Hu(e) {
					return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
				}

				function Yu(e, t) {
					if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
						var n = e.retryLane;
						e.retryLane = 0 !== n && n < t ? n : t
					}
				}

				function Qu(e, t) {
					Yu(e, t), (e = e.alternate) && Yu(e, t)
				}
				El = function(e, t, n) {
					if (null !== e)
						if (e.memoizedProps !== t.pendingProps || Ra.current) ws = !0;
						else {
							if (0 == (e.lanes & n) && 0 == (128 & t.flags)) return ws = !1,
								function(e, t, n) {
									switch (t.tag) {
										case 3:
											Ls(t), ho();
											break;
										case 5:
											ii(t);
											break;
										case 1:
											Oa(t.type) && Na(t);
											break;
										case 4:
											ai(t, t.stateNode.containerInfo);
											break;
										case 10:
											var r = t.type._context,
												a = t.memoizedProps.value;
											Pa(vo, r._currentValue), r._currentValue = a;
											break;
										case 13:
											if (null !== (r = t.memoizedState)) return null !== r.dehydrated ? (Pa(li, 1 & li.current), t.flags |= 128, null) : 0 != (n & t.child.childLanes) ? zs(e, t, n) : (Pa(li, 1 & li.current), null !== (e = Hs(e, t, n)) ? e.sibling : null);
											Pa(li, 1 & li.current);
											break;
										case 19:
											if (r = 0 != (n & t.childLanes), 0 != (128 & e.flags)) {
												if (r) return Us(e, t, n);
												t.flags |= 128
											}
											if (null !== (a = t.memoizedState) && (a.rendering = null, a.tail = null, a.lastEffect = null), Pa(li, li.current), r) break;
											return null;
										case 22:
										case 23:
											return t.lanes = 0, Cs(e, t, n)
									}
									return Hs(e, t, n)
								}(e, t, n);
							ws = 0 != (131072 & e.flags)
						}
					else ws = !1, ao && 0 != (1048576 & t.flags) && Ja(t, Ya, t.index);
					switch (t.lanes = 0, t.tag) {
						case 2:
							var r = t.type;
							Ws(e, t), e = t.pendingProps;
							var a = Ma(t, Aa.current);
							Co(t, n), a = Ei(null, t, r, e, a, n);
							var i = Ci();
							return t.flags |= 1, "object" == typeof a && null !== a && "function" == typeof a.render && void 0 === a.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Oa(r) ? (i = !0, Na(t)) : i = !1, t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null, Oo(t), a.updater = $o, t.stateNode = a, a._reactInternals = t, Yo(t, r, e, n), t = Rs(null, t, r, !0, i, n)) : (t.tag = 0, ao && i && eo(t), xs(null, t, a, n), t = t.child), t;
						case 16:
							r = t.elementType;
							e: {
								switch (Ws(e, t), e = t.pendingProps, r = (a = r._init)(r._payload), t.type = r, a = t.tag = function(e) {
										if ("function" == typeof e) return _u(e) ? 1 : 0;
										if (null != e) {
											if ((e = e.$$typeof) === A) return 11;
											if (e === M) return 14
										}
										return 2
									}(r), e = yo(r, e), a) {
									case 0:
										t = Ts(null, t, r, e, n);
										break e;
									case 1:
										t = As(null, t, r, e, n);
										break e;
									case 11:
										t = ks(null, t, r, e, n);
										break e;
									case 14:
										t = Ss(null, t, r, yo(r.type, e), n);
										break e
								}
								throw Error(o(306, r, ""))
							}
							return t;
						case 0:
							return r = t.type, a = t.pendingProps, Ts(e, t, r, a = t.elementType === r ? a : yo(r, a), n);
						case 1:
							return r = t.type, a = t.pendingProps, As(e, t, r, a = t.elementType === r ? a : yo(r, a), n);
						case 3:
							e: {
								if (Ls(t), null === e) throw Error(o(387));r = t.pendingProps,
								a = (i = t.memoizedState).element,
								_o(e, t),
								zo(t, r, null, n);
								var s = t.memoizedState;
								if (r = s.element, i.isDehydrated) {
									if (i = {
											element: r,
											isDehydrated: !1,
											cache: s.cache,
											pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
											transitions: s.transitions
										}, t.updateQueue.baseState = i, t.memoizedState = i, 256 & t.flags) {
										t = Ms(e, t, r, n, a = cs(Error(o(423)), t));
										break e
									}
									if (r !== a) {
										t = Ms(e, t, r, n, a = cs(Error(o(424)), t));
										break e
									}
									for (ro = ua(t.stateNode.containerInfo.firstChild), no = t, ao = !0, oo = null, n = Zo(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling
								} else {
									if (ho(), r === a) {
										t = Hs(e, t, n);
										break e
									}
									xs(e, t, r, n)
								}
								t = t.child
							}
							return t;
						case 5:
							return ii(t), null === e && uo(t), r = t.type, a = t.pendingProps, i = null !== e ? e.memoizedProps : null, s = a.children, na(r, a) ? s = null : null !== i && na(r, i) && (t.flags |= 32), Ps(e, t), xs(e, t, s, n), t.child;
						case 6:
							return null === e && uo(t), null;
						case 13:
							return zs(e, t, n);
						case 4:
							return ai(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Ko(t, null, r, n) : xs(e, t, r, n), t.child;
						case 11:
							return r = t.type, a = t.pendingProps, ks(e, t, r, a = t.elementType === r ? a : yo(r, a), n);
						case 7:
							return xs(e, t, t.pendingProps, n), t.child;
						case 8:
						case 12:
							return xs(e, t, t.pendingProps.children, n), t.child;
						case 10:
							e: {
								if (r = t.type._context, a = t.pendingProps, i = t.memoizedProps, s = a.value, Pa(vo, r._currentValue), r._currentValue = s, null !== i)
									if (sr(i.value, s)) {
										if (i.children === a.children && !Ra.current) {
											t = Hs(e, t, n);
											break e
										}
									} else
										for (null !== (i = t.child) && (i.return = t); null !== i;) {
											var l = i.dependencies;
											if (null !== l) {
												s = i.child;
												for (var u = l.firstContext; null !== u;) {
													if (u.context === r) {
														if (1 === i.tag) {
															(u = Do(-1, n & -n)).tag = 2;
															var c = i.updateQueue;
															if (null !== c) {
																var d = (c = c.shared).pending;
																null === d ? u.next = u : (u.next = d.next, d.next = u), c.pending = u
															}
														}
														i.lanes |= n, null !== (u = i.alternate) && (u.lanes |= n), Eo(i.return, n, t), l.lanes |= n;
														break
													}
													u = u.next
												}
											} else if (10 === i.tag) s = i.type === t.type ? null : i.child;
											else if (18 === i.tag) {
												if (null === (s = i.return)) throw Error(o(341));
												s.lanes |= n, null !== (l = s.alternate) && (l.lanes |= n), Eo(s, n, t), s = i.sibling
											} else s = i.child;
											if (null !== s) s.return = i;
											else
												for (s = i; null !== s;) {
													if (s === t) {
														s = null;
														break
													}
													if (null !== (i = s.sibling)) {
														i.return = s.return, s = i;
														break
													}
													s = s.return
												}
											i = s
										}
								xs(e, t, a.children, n),
								t = t.child
							}
							return t;
						case 9:
							return a = t.type, r = t.pendingProps.children, Co(t, n), r = r(a = Po(a)), t.flags |= 1, xs(e, t, r, n), t.child;
						case 14:
							return a = yo(r = t.type, t.pendingProps), Ss(e, t, r, a = yo(r.type, a), n);
						case 15:
							return Es(e, t, t.type, t.pendingProps, n);
						case 17:
							return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : yo(r, a), Ws(e, t), t.tag = 1, Oa(r) ? (e = !0, Na(t)) : e = !1, Co(t, n), Wo(t, r, a), Yo(t, r, a, n), Rs(null, t, r, !0, e, n);
						case 19:
							return Us(e, t, n);
						case 22:
							return Cs(e, t, n)
					}
					throw Error(o(156, t.tag))
				};
				var qu = "function" == typeof reportError ? reportError : function(e) {
					console.error(e)
				};

				function Gu(e) {
					this._internalRoot = e
				}

				function Xu(e) {
					this._internalRoot = e
				}

				function Ku(e) {
					return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
				}

				function Zu(e) {
					return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
				}

				function Ju() {}

				function ec(e, t, n, r, a) {
					var o = n._reactRootContainer;
					if (o) {
						var i = o;
						if ("function" == typeof a) {
							var s = a;
							a = function() {
								var e = Hu(i);
								s.call(e)
							}
						}
						Wu(t, i, e, a)
					} else i = function(e, t, n, r, a) {
						if (a) {
							if ("function" == typeof r) {
								var o = r;
								r = function() {
									var e = Hu(i);
									o.call(e)
								}
							}
							var i = Uu(t, r, e, 0, null, !1, 0, "", Ju);
							return e._reactRootContainer = i, e[ha] = i.current, $r(8 === e.nodeType ? e.parentNode : e), du(), i
						}
						for (; a = e.lastChild;) e.removeChild(a);
						if ("function" == typeof r) {
							var s = r;
							r = function() {
								var e = Hu(l);
								s.call(e)
							}
						}
						var l = Bu(e, 0, !1, null, 0, !1, 0, "", Ju);
						return e._reactRootContainer = l, e[ha] = l.current, $r(8 === e.nodeType ? e.parentNode : e), du((function() {
							Wu(t, l, n, r)
						})), l
					}(n, t, e, a, r);
					return Hu(i)
				}
				Xu.prototype.render = Gu.prototype.render = function(e) {
					var t = this._internalRoot;
					if (null === t) throw Error(o(409));
					Wu(e, t, null, null)
				}, Xu.prototype.unmount = Gu.prototype.unmount = function() {
					var e = this._internalRoot;
					if (null !== e) {
						this._internalRoot = null;
						var t = e.containerInfo;
						du((function() {
							Wu(null, e, null, null)
						})), t[ha] = null
					}
				}, Xu.prototype.unstable_scheduleHydration = function(e) {
					if (e) {
						var t = Et();
						e = {
							blockedOn: null,
							target: e,
							priority: t
						};
						for (var n = 0; n < _t.length && 0 !== t && t < _t[n].priority; n++);
						_t.splice(n, 0, e), 0 === n && It(e)
					}
				}, xt = function(e) {
					switch (e.tag) {
						case 3:
							var t = e.stateNode;
							if (t.current.memoizedState.isDehydrated) {
								var n = dt(t.pendingLanes);
								0 !== n && (vt(t, 1 | n), au(t, Ke()), 0 == (6 & Rl) && (Ul = Ke() + 500, $a()))
							}
							break;
						case 13:
							du((function() {
								var t = Lo(e, 1);
								if (null !== t) {
									var n = tu();
									ru(t, e, 1, n)
								}
							})), Qu(e, 1)
					}
				}, kt = function(e) {
					if (13 === e.tag) {
						var t = Lo(e, 134217728);
						null !== t && ru(t, e, 134217728, tu()), Qu(e, 134217728)
					}
				}, St = function(e) {
					if (13 === e.tag) {
						var t = nu(e),
							n = Lo(e, t);
						null !== n && ru(n, e, t, tu()), Qu(e, t)
					}
				}, Et = function() {
					return bt
				}, Ct = function(e, t) {
					var n = bt;
					try {
						return bt = e, t()
					} finally {
						bt = n
					}
				}, ke = function(e, t, n) {
					switch (t) {
						case "input":
							if (Z(e, n), t = n.name, "radio" === n.type && null != t) {
								for (n = e; n.parentNode;) n = n.parentNode;
								for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
									var r = n[t];
									if (r !== e && r.form === e.form) {
										var a = xa(r);
										if (!a) throw Error(o(90));
										Q(r), Z(r, a)
									}
								}
							}
							break;
						case "textarea":
							oe(e, n);
							break;
						case "select":
							null != (t = n.value) && ne(e, !!n.multiple, t, !1)
					}
				}, Ae = cu, Re = du;
				var tc = {
						usingClientEntryPoint: !1,
						Events: [ba, wa, xa, Pe, Te, cu]
					},
					nc = {
						findFiberByHostInstance: va,
						bundleType: 0,
						version: "18.2.0",
						rendererPackageName: "react-dom"
					},
					rc = {
						bundleType: nc.bundleType,
						version: nc.version,
						rendererPackageName: nc.rendererPackageName,
						rendererConfig: nc.rendererConfig,
						overrideHookState: null,
						overrideHookStateDeletePath: null,
						overrideHookStateRenamePath: null,
						overrideProps: null,
						overridePropsDeletePath: null,
						overridePropsRenamePath: null,
						setErrorHandler: null,
						setSuspenseHandler: null,
						scheduleUpdate: null,
						currentDispatcherRef: w.ReactCurrentDispatcher,
						findHostInstanceByFiber: function(e) {
							return null === (e = He(e)) ? null : e.stateNode
						},
						findFiberByHostInstance: nc.findFiberByHostInstance || function() {
							return null
						},
						findHostInstancesForRefresh: null,
						scheduleRefresh: null,
						scheduleRoot: null,
						setRefreshHandler: null,
						getCurrentFiber: null,
						reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
					};
				if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
					var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
					if (!ac.isDisabled && ac.supportsFiber) try {
						at = ac.inject(rc), ot = ac
					} catch (ce) {}
				}
				t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc, t.createPortal = function(e, t) {
					var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
					if (!Ku(t)) throw Error(o(200));
					return function(e, t, n) {
						var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
						return {
							$$typeof: k,
							key: null == r ? null : "" + r,
							children: e,
							containerInfo: t,
							implementation: n
						}
					}(e, t, null, n)
				}, t.createRoot = function(e, t) {
					if (!Ku(e)) throw Error(o(299));
					var n = !1,
						r = "",
						a = qu;
					return null != t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onRecoverableError && (a = t.onRecoverableError)), t = Bu(e, 1, !1, null, 0, n, 0, r, a), e[ha] = t.current, $r(8 === e.nodeType ? e.parentNode : e), new Gu(t)
				}, t.findDOMNode = function(e) {
					if (null == e) return null;
					if (1 === e.nodeType) return e;
					var t = e._reactInternals;
					if (void 0 === t) {
						if ("function" == typeof e.render) throw Error(o(188));
						throw e = Object.keys(e).join(","), Error(o(268, e))
					}
					return null === (e = He(t)) ? null : e.stateNode
				}, t.flushSync = function(e) {
					return du(e)
				}, t.hydrate = function(e, t, n) {
					if (!Zu(t)) throw Error(o(200));
					return ec(null, e, t, !0, n)
				}, t.hydrateRoot = function(e, t, n) {
					if (!Ku(e)) throw Error(o(405));
					var r = null != n && n.hydratedSources || null,
						a = !1,
						i = "",
						s = qu;
					if (null != n && (!0 === n.unstable_strictMode && (a = !0), void 0 !== n.identifierPrefix && (i = n.identifierPrefix), void 0 !== n.onRecoverableError && (s = n.onRecoverableError)), t = Uu(t, null, e, 1, null != n ? n : null, a, 0, i, s), e[ha] = t.current, $r(e), r)
						for (e = 0; e < r.length; e++) a = (a = (n = r[e])._getVersion)(n._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(n, a);
					return new Xu(t)
				}, t.render = function(e, t, n) {
					if (!Zu(t)) throw Error(o(200));
					return ec(null, e, t, !1, n)
				}, t.unmountComponentAtNode = function(e) {
					if (!Zu(e)) throw Error(o(40));
					return !!e._reactRootContainer && (du((function() {
						ec(null, null, e, !1, (function() {
							e._reactRootContainer = null, e[ha] = null
						}))
					})), !0)
				}, t.unstable_batchedUpdates = cu, t.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
					if (!Zu(n)) throw Error(o(200));
					if (null == e || void 0 === e._reactInternals) throw Error(o(38));
					return ec(e, t, n, !1, r)
				}, t.version = "18.2.0-next-9e3b772b8-20220608"
			},
			745: (e, t, n) => {
				"use strict";
				var r = n(935);
				t.createRoot = r.createRoot, t.hydrateRoot = r.hydrateRoot
			},
			935: (e, t, n) => {
				"use strict";
				! function e() {
					if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
						__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
					} catch (e) {
						console.error(e)
					}
				}(), e.exports = n(448)
			},
			921: (e, t) => {
				"use strict";
				var n, r = Symbol.for("react.element"),
					a = Symbol.for("react.portal"),
					o = Symbol.for("react.fragment"),
					i = Symbol.for("react.strict_mode"),
					s = Symbol.for("react.profiler"),
					l = Symbol.for("react.provider"),
					u = Symbol.for("react.context"),
					c = Symbol.for("react.server_context"),
					d = Symbol.for("react.forward_ref"),
					f = Symbol.for("react.suspense"),
					p = Symbol.for("react.suspense_list"),
					h = Symbol.for("react.memo"),
					m = Symbol.for("react.lazy"),
					g = Symbol.for("react.offscreen");
				n = Symbol.for("react.module.reference"), t.isValidElementType = function(e) {
					return "string" == typeof e || "function" == typeof e || e === o || e === s || e === i || e === f || e === p || e === g || "object" == typeof e && null !== e && (e.$$typeof === m || e.$$typeof === h || e.$$typeof === l || e.$$typeof === u || e.$$typeof === d || e.$$typeof === n || void 0 !== e.getModuleId)
				}, t.typeOf = function(e) {
					if ("object" == typeof e && null !== e) {
						var t = e.$$typeof;
						switch (t) {
							case r:
								switch (e = e.type) {
									case o:
									case s:
									case i:
									case f:
									case p:
										return e;
									default:
										switch (e = e && e.$$typeof) {
											case c:
											case u:
											case d:
											case m:
											case h:
											case l:
												return e;
											default:
												return t
										}
								}
							case a:
								return t
						}
					}
				}
			},
			864: (e, t, n) => {
				"use strict";
				e.exports = n(921)
			},
			408: (e, t) => {
				"use strict";
				var n = Symbol.for("react.element"),
					r = Symbol.for("react.portal"),
					a = Symbol.for("react.fragment"),
					o = Symbol.for("react.strict_mode"),
					i = Symbol.for("react.profiler"),
					s = Symbol.for("react.provider"),
					l = Symbol.for("react.context"),
					u = Symbol.for("react.forward_ref"),
					c = Symbol.for("react.suspense"),
					d = Symbol.for("react.memo"),
					f = Symbol.for("react.lazy"),
					p = Symbol.iterator,
					h = {
						isMounted: function() {
							return !1
						},
						enqueueForceUpdate: function() {},
						enqueueReplaceState: function() {},
						enqueueSetState: function() {}
					},
					m = Object.assign,
					g = {};

				function y(e, t, n) {
					this.props = e, this.context = t, this.refs = g, this.updater = n || h
				}

				function v() {}

				function b(e, t, n) {
					this.props = e, this.context = t, this.refs = g, this.updater = n || h
				}
				y.prototype.isReactComponent = {}, y.prototype.setState = function(e, t) {
					if ("object" != typeof e && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
					this.updater.enqueueSetState(this, e, t, "setState")
				}, y.prototype.forceUpdate = function(e) {
					this.updater.enqueueForceUpdate(this, e, "forceUpdate")
				}, v.prototype = y.prototype;
				var w = b.prototype = new v;
				w.constructor = b, m(w, y.prototype), w.isPureReactComponent = !0;
				var x = Array.isArray,
					k = Object.prototype.hasOwnProperty,
					S = {
						current: null
					},
					E = {
						key: !0,
						ref: !0,
						__self: !0,
						__source: !0
					};

				function C(e, t, r) {
					var a, o = {},
						i = null,
						s = null;
					if (null != t)
						for (a in void 0 !== t.ref && (s = t.ref), void 0 !== t.key && (i = "" + t.key), t) k.call(t, a) && !E.hasOwnProperty(a) && (o[a] = t[a]);
					var l = arguments.length - 2;
					if (1 === l) o.children = r;
					else if (1 < l) {
						for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
						o.children = u
					}
					if (e && e.defaultProps)
						for (a in l = e.defaultProps) void 0 === o[a] && (o[a] = l[a]);
					return {
						$$typeof: n,
						type: e,
						key: i,
						ref: s,
						props: o,
						_owner: S.current
					}
				}

				function P(e) {
					return "object" == typeof e && null !== e && e.$$typeof === n
				}
				var T = /\/+/g;

				function A(e, t) {
					return "object" == typeof e && null !== e && null != e.key ? function(e) {
						var t = {
							"=": "=0",
							":": "=2"
						};
						return "$" + e.replace(/[=:]/g, (function(e) {
							return t[e]
						}))
					}("" + e.key) : t.toString(36)
				}

				function R(e, t, a, o, i) {
					var s = typeof e;
					"undefined" !== s && "boolean" !== s || (e = null);
					var l = !1;
					if (null === e) l = !0;
					else switch (s) {
						case "string":
						case "number":
							l = !0;
							break;
						case "object":
							switch (e.$$typeof) {
								case n:
								case r:
									l = !0
							}
					}
					if (l) return i = i(l = e), e = "" === o ? "." + A(l, 0) : o, x(i) ? (a = "", null != e && (a = e.replace(T, "$&/") + "/"), R(i, t, a, "", (function(e) {
						return e
					}))) : null != i && (P(i) && (i = function(e, t) {
						return {
							$$typeof: n,
							type: e.type,
							key: t,
							ref: e.ref,
							props: e.props,
							_owner: e._owner
						}
					}(i, a + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(T, "$&/") + "/") + e)), t.push(i)), 1;
					if (l = 0, o = "" === o ? "." : o + ":", x(e))
						for (var u = 0; u < e.length; u++) {
							var c = o + A(s = e[u], u);
							l += R(s, t, a, c, i)
						} else if (c = function(e) {
								return null === e || "object" != typeof e ? null : "function" == typeof(e = p && e[p] || e["@@iterator"]) ? e : null
							}(e), "function" == typeof c)
							for (e = c.call(e), u = 0; !(s = e.next()).done;) l += R(s = s.value, t, a, c = o + A(s, u++), i);
						else if ("object" === s) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
					return l
				}

				function L(e, t, n) {
					if (null == e) return e;
					var r = [],
						a = 0;
					return R(e, r, "", "", (function(e) {
						return t.call(n, e, a++)
					})), r
				}

				function M(e) {
					if (-1 === e._status) {
						var t = e._result;
						(t = t()).then((function(t) {
							0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t)
						}), (function(t) {
							0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t)
						})), -1 === e._status && (e._status = 0, e._result = t)
					}
					if (1 === e._status) return e._result.default;
					throw e._result
				}
				var O = {
						current: null
					},
					_ = {
						transition: null
					},
					D = {
						ReactCurrentDispatcher: O,
						ReactCurrentBatchConfig: _,
						ReactCurrentOwner: S
					};
				t.Children = {
					map: L,
					forEach: function(e, t, n) {
						L(e, (function() {
							t.apply(this, arguments)
						}), n)
					},
					count: function(e) {
						var t = 0;
						return L(e, (function() {
							t++
						})), t
					},
					toArray: function(e) {
						return L(e, (function(e) {
							return e
						})) || []
					},
					only: function(e) {
						if (!P(e)) throw Error("React.Children.only expected to receive a single React element child.");
						return e
					}
				}, t.Component = y, t.Fragment = a, t.Profiler = i, t.PureComponent = b, t.StrictMode = o, t.Suspense = c, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D, t.cloneElement = function(e, t, r) {
					if (null == e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
					var a = m({}, e.props),
						o = e.key,
						i = e.ref,
						s = e._owner;
					if (null != t) {
						if (void 0 !== t.ref && (i = t.ref, s = S.current), void 0 !== t.key && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
						for (u in t) k.call(t, u) && !E.hasOwnProperty(u) && (a[u] = void 0 === t[u] && void 0 !== l ? l[u] : t[u])
					}
					var u = arguments.length - 2;
					if (1 === u) a.children = r;
					else if (1 < u) {
						l = Array(u);
						for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
						a.children = l
					}
					return {
						$$typeof: n,
						type: e.type,
						key: o,
						ref: i,
						props: a,
						_owner: s
					}
				}, t.createContext = function(e) {
					return (e = {
						$$typeof: l,
						_currentValue: e,
						_currentValue2: e,
						_threadCount: 0,
						Provider: null,
						Consumer: null,
						_defaultValue: null,
						_globalName: null
					}).Provider = {
						$$typeof: s,
						_context: e
					}, e.Consumer = e
				}, t.createElement = C, t.createFactory = function(e) {
					var t = C.bind(null, e);
					return t.type = e, t
				}, t.createRef = function() {
					return {
						current: null
					}
				}, t.forwardRef = function(e) {
					return {
						$$typeof: u,
						render: e
					}
				}, t.isValidElement = P, t.lazy = function(e) {
					return {
						$$typeof: f,
						_payload: {
							_status: -1,
							_result: e
						},
						_init: M
					}
				}, t.memo = function(e, t) {
					return {
						$$typeof: d,
						type: e,
						compare: void 0 === t ? null : t
					}
				}, t.startTransition = function(e) {
					var t = _.transition;
					_.transition = {};
					try {
						e()
					} finally {
						_.transition = t
					}
				}, t.unstable_act = function() {
					throw Error("act(...) is not supported in production builds of React.")
				}, t.useCallback = function(e, t) {
					return O.current.useCallback(e, t)
				}, t.useContext = function(e) {
					return O.current.useContext(e)
				}, t.useDebugValue = function() {}, t.useDeferredValue = function(e) {
					return O.current.useDeferredValue(e)
				}, t.useEffect = function(e, t) {
					return O.current.useEffect(e, t)
				}, t.useId = function() {
					return O.current.useId()
				}, t.useImperativeHandle = function(e, t, n) {
					return O.current.useImperativeHandle(e, t, n)
				}, t.useInsertionEffect = function(e, t) {
					return O.current.useInsertionEffect(e, t)
				}, t.useLayoutEffect = function(e, t) {
					return O.current.useLayoutEffect(e, t)
				}, t.useMemo = function(e, t) {
					return O.current.useMemo(e, t)
				}, t.useReducer = function(e, t, n) {
					return O.current.useReducer(e, t, n)
				}, t.useRef = function(e) {
					return O.current.useRef(e)
				}, t.useState = function(e) {
					return O.current.useState(e)
				}, t.useSyncExternalStore = function(e, t, n) {
					return O.current.useSyncExternalStore(e, t, n)
				}, t.useTransition = function() {
					return O.current.useTransition()
				}, t.version = "18.2.0"
			},
			294: (e, t, n) => {
				"use strict";
				e.exports = n(408)
			},
			53: (e, t) => {
				"use strict";

				function n(e, t) {
					var n = e.length;
					e.push(t);
					e: for (; 0 < n;) {
						var r = n - 1 >>> 1,
							a = e[r];
						if (!(0 < o(a, t))) break e;
						e[r] = t, e[n] = a, n = r
					}
				}

				function r(e) {
					return 0 === e.length ? null : e[0]
				}

				function a(e) {
					if (0 === e.length) return null;
					var t = e[0],
						n = e.pop();
					if (n !== t) {
						e[0] = n;
						e: for (var r = 0, a = e.length, i = a >>> 1; r < i;) {
							var s = 2 * (r + 1) - 1,
								l = e[s],
								u = s + 1,
								c = e[u];
							if (0 > o(l, n)) u < a && 0 > o(c, l) ? (e[r] = c, e[u] = n, r = u) : (e[r] = l, e[s] = n, r = s);
							else {
								if (!(u < a && 0 > o(c, n))) break e;
								e[r] = c, e[u] = n, r = u
							}
						}
					}
					return t
				}

				function o(e, t) {
					var n = e.sortIndex - t.sortIndex;
					return 0 !== n ? n : e.id - t.id
				}
				if ("object" == typeof performance && "function" == typeof performance.now) {
					var i = performance;
					t.unstable_now = function() {
						return i.now()
					}
				} else {
					var s = Date,
						l = s.now();
					t.unstable_now = function() {
						return s.now() - l
					}
				}
				var u = [],
					c = [],
					d = 1,
					f = null,
					p = 3,
					h = !1,
					m = !1,
					g = !1,
					y = "function" == typeof setTimeout ? setTimeout : null,
					v = "function" == typeof clearTimeout ? clearTimeout : null,
					b = "undefined" != typeof setImmediate ? setImmediate : null;

				function w(e) {
					for (var t = r(c); null !== t;) {
						if (null === t.callback) a(c);
						else {
							if (!(t.startTime <= e)) break;
							a(c), t.sortIndex = t.expirationTime, n(u, t)
						}
						t = r(c)
					}
				}

				function x(e) {
					if (g = !1, w(e), !m)
						if (null !== r(u)) m = !0, _(k);
						else {
							var t = r(c);
							null !== t && D(x, t.startTime - e)
						}
				}

				function k(e, n) {
					m = !1, g && (g = !1, v(P), P = -1), h = !0;
					var o = p;
					try {
						for (w(n), f = r(u); null !== f && (!(f.expirationTime > n) || e && !R());) {
							var i = f.callback;
							if ("function" == typeof i) {
								f.callback = null, p = f.priorityLevel;
								var s = i(f.expirationTime <= n);
								n = t.unstable_now(), "function" == typeof s ? f.callback = s : f === r(u) && a(u), w(n)
							} else a(u);
							f = r(u)
						}
						if (null !== f) var l = !0;
						else {
							var d = r(c);
							null !== d && D(x, d.startTime - n), l = !1
						}
						return l
					} finally {
						f = null, p = o, h = !1
					}
				}
				"undefined" != typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
				var S, E = !1,
					C = null,
					P = -1,
					T = 5,
					A = -1;

				function R() {
					return !(t.unstable_now() - A < T)
				}

				function L() {
					if (null !== C) {
						var e = t.unstable_now();
						A = e;
						var n = !0;
						try {
							n = C(!0, e)
						} finally {
							n ? S() : (E = !1, C = null)
						}
					} else E = !1
				}
				if ("function" == typeof b) S = function() {
					b(L)
				};
				else if ("undefined" != typeof MessageChannel) {
					var M = new MessageChannel,
						O = M.port2;
					M.port1.onmessage = L, S = function() {
						O.postMessage(null)
					}
				} else S = function() {
					y(L, 0)
				};

				function _(e) {
					C = e, E || (E = !0, S())
				}

				function D(e, n) {
					P = y((function() {
						e(t.unstable_now())
					}), n)
				}
				t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) {
					e.callback = null
				}, t.unstable_continueExecution = function() {
					m || h || (m = !0, _(k))
				}, t.unstable_forceFrameRate = function(e) {
					0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : T = 0 < e ? Math.floor(1e3 / e) : 5
				}, t.unstable_getCurrentPriorityLevel = function() {
					return p
				}, t.unstable_getFirstCallbackNode = function() {
					return r(u)
				}, t.unstable_next = function(e) {
					switch (p) {
						case 1:
						case 2:
						case 3:
							var t = 3;
							break;
						default:
							t = p
					}
					var n = p;
					p = t;
					try {
						return e()
					} finally {
						p = n
					}
				}, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = function() {}, t.unstable_runWithPriority = function(e, t) {
					switch (e) {
						case 1:
						case 2:
						case 3:
						case 4:
						case 5:
							break;
						default:
							e = 3
					}
					var n = p;
					p = e;
					try {
						return t()
					} finally {
						p = n
					}
				}, t.unstable_scheduleCallback = function(e, a, o) {
					var i = t.unstable_now();
					switch (o = "object" == typeof o && null !== o && "number" == typeof(o = o.delay) && 0 < o ? i + o : i, e) {
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
							s = 5e3
					}
					return e = {
						id: d++,
						callback: a,
						priorityLevel: e,
						startTime: o,
						expirationTime: s = o + s,
						sortIndex: -1
					}, o > i ? (e.sortIndex = o, n(c, e), null === r(u) && e === r(c) && (g ? (v(P), P = -1) : g = !0, D(x, o - i))) : (e.sortIndex = s, n(u, e), m || h || (m = !0, _(k))), e
				}, t.unstable_shouldYield = R, t.unstable_wrapCallback = function(e) {
					var t = p;
					return function() {
						var n = p;
						p = t;
						try {
							return e.apply(this, arguments)
						} finally {
							p = n
						}
					}
				}
			},
			840: (e, t, n) => {
				"use strict";
				e.exports = n(53)
			},
			774: e => {
				e.exports = function(e, t, n, r) {
					var a = n ? n.call(r, e, t) : void 0;
					if (void 0 !== a) return !!a;
					if (e === t) return !0;
					if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
					var o = Object.keys(e),
						i = Object.keys(t);
					if (o.length !== i.length) return !1;
					for (var s = Object.prototype.hasOwnProperty.bind(t), l = 0; l < o.length; l++) {
						var u = o[l];
						if (!s(u)) return !1;
						var c = e[u],
							d = t[u];
						if (!1 === (a = n ? n.call(r, c, d, u) : void 0) || void 0 === a && c !== d) return !1
					}
					return !0
				}
			}
		},
		r = {};

	function a(e) {
		var t = r[e];
		if (void 0 !== t) return t.exports;
		var o = r[e] = {
			exports: {}
		};
		return n[e](o, o.exports, a), o.exports
	}
	a.n = e => {
		var t = e && e.__esModule ? () => e.default : () => e;
		return a.d(t, {
			a: t
		}), t
	}, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, a.t = function(n, r) {
		if (1 & r && (n = this(n)), 8 & r) return n;
		if ("object" == typeof n && n) {
			if (4 & r && n.__esModule) return n;
			if (16 & r && "function" == typeof n.then) return n
		}
		var o = Object.create(null);
		a.r(o);
		var i = {};
		e = e || [null, t({}), t([]), t(t)];
		for (var s = 2 & r && n;
			"object" == typeof s && !~e.indexOf(s); s = t(s)) Object.getOwnPropertyNames(s).forEach((e => i[e] = () => n[e]));
		return i.default = () => n, a.d(o, i), o
	}, a.d = (e, t) => {
		for (var n in t) a.o(t, n) && !a.o(e, n) && Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		})
	}, a.g = function() {
		if ("object" == typeof globalThis) return globalThis;
		try {
			return this || new Function("return this")()
		} catch (e) {
			if ("object" == typeof window) return window
		}
	}(), a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), a.r = e => {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, (() => {
		var e;
		a.g.importScripts && (e = a.g.location + "");
		var t = a.g.document;
		if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
			var n = t.getElementsByTagName("script");
			if (n.length)
				for (var r = n.length - 1; r > -1 && !e;) e = n[r--].src
		}
		if (!e) throw new Error("Automatic publicPath is not supported in this browser");
		e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), a.p = e
	})(), a.nc = void 0, (() => {
		"use strict";
		var e = a(294),
			t = a.t(e, 2),
			n = a(745),
			r = a(864),
			o = a(774),
			i = a.n(o);
		const s = function(e) {
				function t(e, r, l, u, f) {
					for (var p, h, m, g, w, k = 0, S = 0, E = 0, C = 0, P = 0, O = 0, D = m = p = 0, N = 0, I = 0, z = 0, j = 0, V = l.length, B = V - 1, $ = "", U = "", W = "", H = ""; N < V;) {
						if (h = l.charCodeAt(N), N === B && 0 !== S + C + E + k && (0 !== S && (h = 47 === S ? 10 : 47), C = E = k = 0, V++, B++), 0 === S + C + E + k) {
							if (N === B && (0 < I && ($ = $.replace(d, "")), 0 < $.trim().length)) {
								switch (h) {
									case 32:
									case 9:
									case 59:
									case 13:
									case 10:
										break;
									default:
										$ += l.charAt(N)
								}
								h = 59
							}
							switch (h) {
								case 123:
									for (p = ($ = $.trim()).charCodeAt(0), m = 1, j = ++N; N < V;) {
										switch (h = l.charCodeAt(N)) {
											case 123:
												m++;
												break;
											case 125:
												m--;
												break;
											case 47:
												switch (h = l.charCodeAt(N + 1)) {
													case 42:
													case 47:
														e: {
															for (D = N + 1; D < B; ++D) switch (l.charCodeAt(D)) {
																case 47:
																	if (42 === h && 42 === l.charCodeAt(D - 1) && N + 2 !== D) {
																		N = D + 1;
																		break e
																	}
																	break;
																case 10:
																	if (47 === h) {
																		N = D + 1;
																		break e
																	}
															}
															N = D
														}
												}
												break;
											case 91:
												h++;
											case 40:
												h++;
											case 34:
											case 39:
												for (; N++ < B && l.charCodeAt(N) !== h;);
										}
										if (0 === m) break;
										N++
									}
									if (m = l.substring(j, N), 0 === p && (p = ($ = $.replace(c, "").trim()).charCodeAt(0)), 64 === p) {
										switch (0 < I && ($ = $.replace(d, "")), h = $.charCodeAt(1)) {
											case 100:
											case 109:
											case 115:
											case 45:
												I = r;
												break;
											default:
												I = M
										}
										if (j = (m = t(r, I, m, h, f + 1)).length, 0 < _ && (w = s(3, m, I = n(M, $, z), r, A, T, j, h, f, u), $ = I.join(""), void 0 !== w && 0 === (j = (m = w.trim()).length) && (h = 0, m = "")), 0 < j) switch (h) {
											case 115:
												$ = $.replace(x, i);
											case 100:
											case 109:
											case 45:
												m = $ + "{" + m + "}";
												break;
											case 107:
												m = ($ = $.replace(y, "$1 $2")) + "{" + m + "}", m = 1 === L || 2 === L && o("@" + m, 3) ? "@-webkit-" + m + "@" + m : "@" + m;
												break;
											default:
												m = $ + m, 112 === u && (U += m, m = "")
										} else m = ""
									} else m = t(r, n(r, $, z), m, u, f + 1);
									W += m, m = z = I = D = p = 0, $ = "", h = l.charCodeAt(++N);
									break;
								case 125:
								case 59:
									if (1 < (j = ($ = (0 < I ? $.replace(d, "") : $).trim()).length)) switch (0 === D && (p = $.charCodeAt(0), 45 === p || 96 < p && 123 > p) && (j = ($ = $.replace(" ", ":")).length), 0 < _ && void 0 !== (w = s(1, $, r, e, A, T, U.length, u, f, u)) && 0 === (j = ($ = w.trim()).length) && ($ = "\0\0"), p = $.charCodeAt(0), h = $.charCodeAt(1), p) {
										case 0:
											break;
										case 64:
											if (105 === h || 99 === h) {
												H += $ + l.charAt(N);
												break
											}
										default:
											58 !== $.charCodeAt(j - 1) && (U += a($, p, h, $.charCodeAt(2)))
									}
									z = I = D = p = 0, $ = "", h = l.charCodeAt(++N)
							}
						}
						switch (h) {
							case 13:
							case 10:
								47 === S ? S = 0 : 0 === 1 + p && 107 !== u && 0 < $.length && (I = 1, $ += "\0"), 0 < _ * F && s(0, $, r, e, A, T, U.length, u, f, u), T = 1, A++;
								break;
							case 59:
							case 125:
								if (0 === S + C + E + k) {
									T++;
									break
								}
							default:
								switch (T++, g = l.charAt(N), h) {
									case 9:
									case 32:
										if (0 === C + k + S) switch (P) {
											case 44:
											case 58:
											case 9:
											case 32:
												g = "";
												break;
											default:
												32 !== h && (g = " ")
										}
										break;
									case 0:
										g = "\\0";
										break;
									case 12:
										g = "\\f";
										break;
									case 11:
										g = "\\v";
										break;
									case 38:
										0 === C + S + k && (I = z = 1, g = "\f" + g);
										break;
									case 108:
										if (0 === C + S + k + R && 0 < D) switch (N - D) {
											case 2:
												112 === P && 58 === l.charCodeAt(N - 3) && (R = P);
											case 8:
												111 === O && (R = O)
										}
										break;
									case 58:
										0 === C + S + k && (D = N);
										break;
									case 44:
										0 === S + E + C + k && (I = 1, g += "\r");
										break;
									case 34:
									case 39:
										0 === S && (C = C === h ? 0 : 0 === C ? h : C);
										break;
									case 91:
										0 === C + S + E && k++;
										break;
									case 93:
										0 === C + S + E && k--;
										break;
									case 41:
										0 === C + S + k && E--;
										break;
									case 40:
										0 === C + S + k && (0 === p && (2 * P + 3 * O == 533 || (p = 1)), E++);
										break;
									case 64:
										0 === S + E + C + k + D + m && (m = 1);
										break;
									case 42:
									case 47:
										if (!(0 < C + k + E)) switch (S) {
											case 0:
												switch (2 * h + 3 * l.charCodeAt(N + 1)) {
													case 235:
														S = 47;
														break;
													case 220:
														j = N, S = 42
												}
												break;
											case 42:
												47 === h && 42 === P && j + 2 !== N && (33 === l.charCodeAt(j + 2) && (U += l.substring(j, N + 1)), g = "", S = 0)
										}
								}
								0 === S && ($ += g)
						}
						O = P, P = h, N++
					}
					if (0 < (j = U.length)) {
						if (I = r, 0 < _ && void 0 !== (w = s(2, U, I, e, A, T, j, u, f, u)) && 0 === (U = w).length) return H + U + W;
						if (U = I.join(",") + "{" + U + "}", 0 != L * R) {
							switch (2 !== L || o(U, 2) || (R = 0), R) {
								case 111:
									U = U.replace(b, ":-moz-$1") + U;
									break;
								case 112:
									U = U.replace(v, "::-webkit-input-$1") + U.replace(v, "::-moz-$1") + U.replace(v, ":-ms-input-$1") + U
							}
							R = 0
						}
					}
					return H + U + W
				}

				function n(e, t, n) {
					var a = t.trim().split(m);
					t = a;
					var o = a.length,
						i = e.length;
					switch (i) {
						case 0:
						case 1:
							var s = 0;
							for (e = 0 === i ? "" : e[0] + " "; s < o; ++s) t[s] = r(e, t[s], n).trim();
							break;
						default:
							var l = s = 0;
							for (t = []; s < o; ++s)
								for (var u = 0; u < i; ++u) t[l++] = r(e[u] + " ", a[s], n).trim()
					}
					return t
				}

				function r(e, t, n) {
					var r = t.charCodeAt(0);
					switch (33 > r && (r = (t = t.trim()).charCodeAt(0)), r) {
						case 38:
							return t.replace(g, "$1" + e.trim());
						case 58:
							return e.trim() + t.replace(g, "$1" + e.trim());
						default:
							if (0 < 1 * n && 0 < t.indexOf("\f")) return t.replace(g, (58 === e.charCodeAt(0) ? "" : "$1") + e.trim())
					}
					return e + t
				}

				function a(e, t, n, r) {
					var i = e + ";",
						s = 2 * t + 3 * n + 4 * r;
					if (944 === s) {
						e = i.indexOf(":", 9) + 1;
						var l = i.substring(e, i.length - 1).trim();
						return l = i.substring(0, e).trim() + l + ";", 1 === L || 2 === L && o(l, 1) ? "-webkit-" + l + l : l
					}
					if (0 === L || 2 === L && !o(i, 1)) return i;
					switch (s) {
						case 1015:
							return 97 === i.charCodeAt(10) ? "-webkit-" + i + i : i;
						case 951:
							return 116 === i.charCodeAt(3) ? "-webkit-" + i + i : i;
						case 963:
							return 110 === i.charCodeAt(5) ? "-webkit-" + i + i : i;
						case 1009:
							if (100 !== i.charCodeAt(4)) break;
						case 969:
						case 942:
							return "-webkit-" + i + i;
						case 978:
							return "-webkit-" + i + "-moz-" + i + i;
						case 1019:
						case 983:
							return "-webkit-" + i + "-moz-" + i + "-ms-" + i + i;
						case 883:
							if (45 === i.charCodeAt(8)) return "-webkit-" + i + i;
							if (0 < i.indexOf("image-set(", 11)) return i.replace(P, "$1-webkit-$2") + i;
							break;
						case 932:
							if (45 === i.charCodeAt(4)) switch (i.charCodeAt(5)) {
								case 103:
									return "-webkit-box-" + i.replace("-grow", "") + "-webkit-" + i + "-ms-" + i.replace("grow", "positive") + i;
								case 115:
									return "-webkit-" + i + "-ms-" + i.replace("shrink", "negative") + i;
								case 98:
									return "-webkit-" + i + "-ms-" + i.replace("basis", "preferred-size") + i
							}
							return "-webkit-" + i + "-ms-" + i + i;
						case 964:
							return "-webkit-" + i + "-ms-flex-" + i + i;
						case 1023:
							if (99 !== i.charCodeAt(8)) break;
							return "-webkit-box-pack" + (l = i.substring(i.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify")) + "-webkit-" + i + "-ms-flex-pack" + l + i;
						case 1005:
							return p.test(i) ? i.replace(f, ":-webkit-") + i.replace(f, ":-moz-") + i : i;
						case 1e3:
							switch (t = (l = i.substring(13).trim()).indexOf("-") + 1, l.charCodeAt(0) + l.charCodeAt(t)) {
								case 226:
									l = i.replace(w, "tb");
									break;
								case 232:
									l = i.replace(w, "tb-rl");
									break;
								case 220:
									l = i.replace(w, "lr");
									break;
								default:
									return i
							}
							return "-webkit-" + i + "-ms-" + l + i;
						case 1017:
							if (-1 === i.indexOf("sticky", 9)) break;
						case 975:
							switch (t = (i = e).length - 10, s = (l = (33 === i.charCodeAt(t) ? i.substring(0, t) : i).substring(e.indexOf(":", 7) + 1).trim()).charCodeAt(0) + (0 | l.charCodeAt(7))) {
								case 203:
									if (111 > l.charCodeAt(8)) break;
								case 115:
									i = i.replace(l, "-webkit-" + l) + ";" + i;
									break;
								case 207:
								case 102:
									i = i.replace(l, "-webkit-" + (102 < s ? "inline-" : "") + "box") + ";" + i.replace(l, "-webkit-" + l) + ";" + i.replace(l, "-ms-" + l + "box") + ";" + i
							}
							return i + ";";
						case 938:
							if (45 === i.charCodeAt(5)) switch (i.charCodeAt(6)) {
								case 105:
									return l = i.replace("-items", ""), "-webkit-" + i + "-webkit-box-" + l + "-ms-flex-" + l + i;
								case 115:
									return "-webkit-" + i + "-ms-flex-item-" + i.replace(S, "") + i;
								default:
									return "-webkit-" + i + "-ms-flex-line-pack" + i.replace("align-content", "").replace(S, "") + i
							}
							break;
						case 973:
						case 989:
							if (45 !== i.charCodeAt(3) || 122 === i.charCodeAt(4)) break;
						case 931:
						case 953:
							if (!0 === C.test(e)) return 115 === (l = e.substring(e.indexOf(":") + 1)).charCodeAt(0) ? a(e.replace("stretch", "fill-available"), t, n, r).replace(":fill-available", ":stretch") : i.replace(l, "-webkit-" + l) + i.replace(l, "-moz-" + l.replace("fill-", "")) + i;
							break;
						case 962:
							if (i = "-webkit-" + i + (102 === i.charCodeAt(5) ? "-ms-" + i : "") + i, 211 === n + r && 105 === i.charCodeAt(13) && 0 < i.indexOf("transform", 10)) return i.substring(0, i.indexOf(";", 27) + 1).replace(h, "$1-webkit-$2") + i
					}
					return i
				}

				function o(e, t) {
					var n = e.indexOf(1 === t ? ":" : "{"),
						r = e.substring(0, 3 !== t ? n : 10);
					return n = e.substring(n + 1, e.length - 1), D(2 !== t ? r : r.replace(E, "$1"), n, t)
				}

				function i(e, t) {
					var n = a(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
					return n !== t + ";" ? n.replace(k, " or ($1)").substring(4) : "(" + t + ")"
				}

				function s(e, t, n, r, a, o, i, s, l, c) {
					for (var d, f = 0, p = t; f < _; ++f) switch (d = O[f].call(u, e, p, n, r, a, o, i, s, l, c)) {
						case void 0:
						case !1:
						case !0:
						case null:
							break;
						default:
							p = d
					}
					if (p !== t) return p
				}

				function l(e) {
					return void 0 !== (e = e.prefix) && (D = null, e ? "function" != typeof e ? L = 1 : (L = 2, D = e) : L = 0), l
				}

				function u(e, n) {
					var r = e;
					if (33 > r.charCodeAt(0) && (r = r.trim()), r = [r], 0 < _) {
						var a = s(-1, n, r, r, A, T, 0, 0, 0, 0);
						void 0 !== a && "string" == typeof a && (n = a)
					}
					var o = t(M, r, n, 0, 0);
					return 0 < _ && void 0 !== (a = s(-2, o, r, r, A, T, o.length, 0, 0, 0)) && (o = a), R = 0, T = A = 1, o
				}
				var c = /^\0+/g,
					d = /[\0\r\f]/g,
					f = /: */g,
					p = /zoo|gra/,
					h = /([,: ])(transform)/g,
					m = /,\r+?/g,
					g = /([\t\r\n ])*\f?&/g,
					y = /@(k\w+)\s*(\S*)\s*/,
					v = /::(place)/g,
					b = /:(read-only)/g,
					w = /[svh]\w+-[tblr]{2}/,
					x = /\(\s*(.*)\s*\)/g,
					k = /([\s\S]*?);/g,
					S = /-self|flex-/g,
					E = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
					C = /stretch|:\s*\w+\-(?:conte|avail)/,
					P = /([^-])(image-set\()/,
					T = 1,
					A = 1,
					R = 0,
					L = 1,
					M = [],
					O = [],
					_ = 0,
					D = null,
					F = 0;
				return u.use = function e(t) {
					switch (t) {
						case void 0:
						case null:
							_ = O.length = 0;
							break;
						default:
							if ("function" == typeof t) O[_++] = t;
							else if ("object" == typeof t)
								for (var n = 0, r = t.length; n < r; ++n) e(t[n]);
							else F = 0 | !!t
					}
					return e
				}, u.set = l, void 0 !== e && l(e), u
			},
			l = {
				animationIterationCount: 1,
				borderImageOutset: 1,
				borderImageSlice: 1,
				borderImageWidth: 1,
				boxFlex: 1,
				boxFlexGroup: 1,
				boxOrdinalGroup: 1,
				columnCount: 1,
				columns: 1,
				flex: 1,
				flexGrow: 1,
				flexPositive: 1,
				flexShrink: 1,
				flexNegative: 1,
				flexOrder: 1,
				gridRow: 1,
				gridRowEnd: 1,
				gridRowSpan: 1,
				gridRowStart: 1,
				gridColumn: 1,
				gridColumnEnd: 1,
				gridColumnSpan: 1,
				gridColumnStart: 1,
				msGridRow: 1,
				msGridRowSpan: 1,
				msGridColumn: 1,
				msGridColumnSpan: 1,
				fontWeight: 1,
				lineHeight: 1,
				opacity: 1,
				order: 1,
				orphans: 1,
				tabSize: 1,
				widows: 1,
				zIndex: 1,
				zoom: 1,
				WebkitLineClamp: 1,
				fillOpacity: 1,
				floodOpacity: 1,
				stopOpacity: 1,
				strokeDasharray: 1,
				strokeDashoffset: 1,
				strokeMiterlimit: 1,
				strokeOpacity: 1,
				strokeWidth: 1
			};

		function u(e) {
			var t = Object.create(null);
			return function(n) {
				return void 0 === t[n] && (t[n] = e(n)), t[n]
			}
		}
		var c = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
			d = u((function(e) {
				return c.test(e) || 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) < 91
			})),
			f = a(679),
			p = a.n(f);

		function h() {
			return (h = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
				}
				return e
			}).apply(this, arguments)
		}
		var m = function(e, t) {
				for (var n = [e[0]], r = 0, a = t.length; r < a; r += 1) n.push(t[r], e[r + 1]);
				return n
			},
			g = function(e) {
				return null !== e && "object" == typeof e && "[object Object]" === (e.toString ? e.toString() : Object.prototype.toString.call(e)) && !(0, r.typeOf)(e)
			},
			y = Object.freeze([]),
			v = Object.freeze({});

		function b(e) {
			return "function" == typeof e
		}

		function w(e) {
			return e.displayName || e.name || "Component"
		}

		function x(e) {
			return e && "string" == typeof e.styledComponentId
		}
		var k = "undefined" != typeof process && void 0 !== process.env && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled",
			S = "undefined" != typeof window && "HTMLElement" in window,
			E = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env && (void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== process.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== process.env.REACT_APP_SC_DISABLE_SPEEDY && process.env.REACT_APP_SC_DISABLE_SPEEDY : void 0 !== process.env.SC_DISABLE_SPEEDY && "" !== process.env.SC_DISABLE_SPEEDY && "false" !== process.env.SC_DISABLE_SPEEDY && process.env.SC_DISABLE_SPEEDY)),
			C = {};

		function P(e) {
			for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
			throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (n.length > 0 ? " Args: " + n.join(", ") : ""))
		}
		var T = function() {
				function e(e) {
					this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e
				}
				var t = e.prototype;
				return t.indexOfGroup = function(e) {
					for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
					return t
				}, t.insertRules = function(e, t) {
					if (e >= this.groupSizes.length) {
						for (var n = this.groupSizes, r = n.length, a = r; e >= a;)(a <<= 1) < 0 && P(16, "" + e);
						this.groupSizes = new Uint32Array(a), this.groupSizes.set(n), this.length = a;
						for (var o = r; o < a; o++) this.groupSizes[o] = 0
					}
					for (var i = this.indexOfGroup(e + 1), s = 0, l = t.length; s < l; s++) this.tag.insertRule(i, t[s]) && (this.groupSizes[e]++, i++)
				}, t.clearGroup = function(e) {
					if (e < this.length) {
						var t = this.groupSizes[e],
							n = this.indexOfGroup(e),
							r = n + t;
						this.groupSizes[e] = 0;
						for (var a = n; a < r; a++) this.tag.deleteRule(n)
					}
				}, t.getGroup = function(e) {
					var t = "";
					if (e >= this.length || 0 === this.groupSizes[e]) return t;
					for (var n = this.groupSizes[e], r = this.indexOfGroup(e), a = r + n, o = r; o < a; o++) t += this.tag.getRule(o) + "/*!sc*/\n";
					return t
				}, e
			}(),
			A = new Map,
			R = new Map,
			L = 1,
			M = function(e) {
				if (A.has(e)) return A.get(e);
				for (; R.has(L);) L++;
				var t = L++;
				return A.set(e, t), R.set(t, e), t
			},
			O = function(e) {
				return R.get(e)
			},
			_ = function(e, t) {
				t >= L && (L = t + 1), A.set(e, t), R.set(t, e)
			},
			D = "style[" + k + '][data-styled-version="5.3.11"]',
			F = new RegExp("^" + k + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
			N = function(e, t, n) {
				for (var r, a = n.split(","), o = 0, i = a.length; o < i; o++)(r = a[o]) && e.registerName(t, r)
			},
			I = function(e, t) {
				for (var n = (t.textContent || "").split("/*!sc*/\n"), r = [], a = 0, o = n.length; a < o; a++) {
					var i = n[a].trim();
					if (i) {
						var s = i.match(F);
						if (s) {
							var l = 0 | parseInt(s[1], 10),
								u = s[2];
							0 !== l && (_(u, l), N(e, u, s[3]), e.getTag().insertRules(l, r)), r.length = 0
						} else r.push(i)
					}
				}
			},
			z = function() {
				return a.nc
			},
			j = function(e) {
				var t = document.head,
					n = e || t,
					r = document.createElement("style"),
					a = function(e) {
						for (var t = e.childNodes, n = t.length; n >= 0; n--) {
							var r = t[n];
							if (r && 1 === r.nodeType && r.hasAttribute(k)) return r
						}
					}(n),
					o = void 0 !== a ? a.nextSibling : null;
				r.setAttribute(k, "active"), r.setAttribute("data-styled-version", "5.3.11");
				var i = z();
				return i && r.setAttribute("nonce", i), n.insertBefore(r, o), r
			},
			V = function() {
				function e(e) {
					var t = this.element = j(e);
					t.appendChild(document.createTextNode("")), this.sheet = function(e) {
						if (e.sheet) return e.sheet;
						for (var t = document.styleSheets, n = 0, r = t.length; n < r; n++) {
							var a = t[n];
							if (a.ownerNode === e) return a
						}
						P(17)
					}(t), this.length = 0
				}
				var t = e.prototype;
				return t.insertRule = function(e, t) {
					try {
						return this.sheet.insertRule(t, e), this.length++, !0
					} catch (e) {
						return !1
					}
				}, t.deleteRule = function(e) {
					this.sheet.deleteRule(e), this.length--
				}, t.getRule = function(e) {
					var t = this.sheet.cssRules[e];
					return void 0 !== t && "string" == typeof t.cssText ? t.cssText : ""
				}, e
			}(),
			B = function() {
				function e(e) {
					var t = this.element = j(e);
					this.nodes = t.childNodes, this.length = 0
				}
				var t = e.prototype;
				return t.insertRule = function(e, t) {
					if (e <= this.length && e >= 0) {
						var n = document.createTextNode(t),
							r = this.nodes[e];
						return this.element.insertBefore(n, r || null), this.length++, !0
					}
					return !1
				}, t.deleteRule = function(e) {
					this.element.removeChild(this.nodes[e]), this.length--
				}, t.getRule = function(e) {
					return e < this.length ? this.nodes[e].textContent : ""
				}, e
			}(),
			$ = function() {
				function e(e) {
					this.rules = [], this.length = 0
				}
				var t = e.prototype;
				return t.insertRule = function(e, t) {
					return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0)
				}, t.deleteRule = function(e) {
					this.rules.splice(e, 1), this.length--
				}, t.getRule = function(e) {
					return e < this.length ? this.rules[e] : ""
				}, e
			}(),
			U = S,
			W = {
				isServer: !S,
				useCSSOMInjection: !E
			},
			H = function() {
				function e(e, t, n) {
					void 0 === e && (e = v), void 0 === t && (t = {}), this.options = h({}, W, {}, e), this.gs = t, this.names = new Map(n), this.server = !!e.isServer, !this.server && S && U && (U = !1, function(e) {
						for (var t = document.querySelectorAll(D), n = 0, r = t.length; n < r; n++) {
							var a = t[n];
							a && "active" !== a.getAttribute(k) && (I(e, a), a.parentNode && a.parentNode.removeChild(a))
						}
					}(this))
				}
				e.registerId = function(e) {
					return M(e)
				};
				var t = e.prototype;
				return t.reconstructWithOptions = function(t, n) {
					return void 0 === n && (n = !0), new e(h({}, this.options, {}, t), this.gs, n && this.names || void 0)
				}, t.allocateGSInstance = function(e) {
					return this.gs[e] = (this.gs[e] || 0) + 1
				}, t.getTag = function() {
					return this.tag || (this.tag = (n = (t = this.options).isServer, r = t.useCSSOMInjection, a = t.target, e = n ? new $(a) : r ? new V(a) : new B(a), new T(e)));
					var e, t, n, r, a
				}, t.hasNameForId = function(e, t) {
					return this.names.has(e) && this.names.get(e).has(t)
				}, t.registerName = function(e, t) {
					if (M(e), this.names.has(e)) this.names.get(e).add(t);
					else {
						var n = new Set;
						n.add(t), this.names.set(e, n)
					}
				}, t.insertRules = function(e, t, n) {
					this.registerName(e, t), this.getTag().insertRules(M(e), n)
				}, t.clearNames = function(e) {
					this.names.has(e) && this.names.get(e).clear()
				}, t.clearRules = function(e) {
					this.getTag().clearGroup(M(e)), this.clearNames(e)
				}, t.clearTag = function() {
					this.tag = void 0
				}, t.toString = function() {
					return function(e) {
						for (var t = e.getTag(), n = t.length, r = "", a = 0; a < n; a++) {
							var o = O(a);
							if (void 0 !== o) {
								var i = e.names.get(o),
									s = t.getGroup(a);
								if (i && s && i.size) {
									var l = k + ".g" + a + '[id="' + o + '"]',
										u = "";
									void 0 !== i && i.forEach((function(e) {
										e.length > 0 && (u += e + ",")
									})), r += "" + s + l + '{content:"' + u + '"}/*!sc*/\n'
								}
							}
						}
						return r
					}(this)
				}, e
			}(),
			Y = /(a)(d)/gi,
			Q = function(e) {
				return String.fromCharCode(e + (e > 25 ? 39 : 97))
			};

		function q(e) {
			var t, n = "";
			for (t = Math.abs(e); t > 52; t = t / 52 | 0) n = Q(t % 52) + n;
			return (Q(t % 52) + n).replace(Y, "$1-$2")
		}
		var G = function(e, t) {
				for (var n = t.length; n;) e = 33 * e ^ t.charCodeAt(--n);
				return e
			},
			X = function(e) {
				return G(5381, e)
			};

		function K(e) {
			for (var t = 0; t < e.length; t += 1) {
				var n = e[t];
				if (b(n) && !x(n)) return !1
			}
			return !0
		}
		var Z = X("5.3.11"),
			J = function() {
				function e(e, t, n) {
					this.rules = e, this.staticRulesId = "", this.isStatic = (void 0 === n || n.isStatic) && K(e), this.componentId = t, this.baseHash = G(Z, t), this.baseStyle = n, H.registerId(t)
				}
				return e.prototype.generateAndInjectStyles = function(e, t, n) {
					var r = this.componentId,
						a = [];
					if (this.baseStyle && a.push(this.baseStyle.generateAndInjectStyles(e, t, n)), this.isStatic && !n.hash)
						if (this.staticRulesId && t.hasNameForId(r, this.staticRulesId)) a.push(this.staticRulesId);
						else {
							var o = ye(this.rules, e, t, n).join(""),
								i = q(G(this.baseHash, o) >>> 0);
							if (!t.hasNameForId(r, i)) {
								var s = n(o, "." + i, void 0, r);
								t.insertRules(r, i, s)
							}
							a.push(i), this.staticRulesId = i
						}
					else {
						for (var l = this.rules.length, u = G(this.baseHash, n.hash), c = "", d = 0; d < l; d++) {
							var f = this.rules[d];
							if ("string" == typeof f) c += f;
							else if (f) {
								var p = ye(f, e, t, n),
									h = Array.isArray(p) ? p.join("") : p;
								u = G(u, h + d), c += h
							}
						}
						if (c) {
							var m = q(u >>> 0);
							if (!t.hasNameForId(r, m)) {
								var g = n(c, "." + m, void 0, r);
								t.insertRules(r, m, g)
							}
							a.push(m)
						}
					}
					return a.join(" ")
				}, e
			}(),
			ee = /^\s*\/\/.*$/gm,
			te = [":", "[", ".", "#"];

		function ne(e) {
			var t, n, r, a, o = void 0 === e ? v : e,
				i = o.options,
				l = void 0 === i ? v : i,
				u = o.plugins,
				c = void 0 === u ? y : u,
				d = new s(l),
				f = [],
				p = function(e) {
					function t(t) {
						if (t) try {
							e(t + "}")
						} catch (e) {}
					}
					return function(n, r, a, o, i, s, l, u, c, d) {
						switch (n) {
							case 1:
								if (0 === c && 64 === r.charCodeAt(0)) return e(r + ";"), "";
								break;
							case 2:
								if (0 === u) return r + "/*|*/";
								break;
							case 3:
								switch (u) {
									case 102:
									case 112:
										return e(a[0] + r), "";
									default:
										return r + (0 === d ? "/*|*/" : "")
								}
							case -2:
								r.split("/*|*/}").forEach(t)
						}
					}
				}((function(e) {
					f.push(e)
				})),
				h = function(e, r, o) {
					return 0 === r && -1 !== te.indexOf(o[n.length]) || o.match(a) ? e : "." + t
				};

			function m(e, o, i, s) {
				void 0 === s && (s = "&");
				var l = e.replace(ee, ""),
					u = o && i ? i + " " + o + " { " + l + " }" : l;
				return t = s, n = o, r = new RegExp("\\" + n + "\\b", "g"), a = new RegExp("(\\" + n + "\\b){2,}"), d(i || !o ? "" : o, u)
			}
			return d.use([].concat(c, [function(e, t, a) {
				2 === e && a.length && a[0].lastIndexOf(n) > 0 && (a[0] = a[0].replace(r, h))
			}, p, function(e) {
				if (-2 === e) {
					var t = f;
					return f = [], t
				}
			}])), m.hash = c.length ? c.reduce((function(e, t) {
				return t.name || P(15), G(e, t.name)
			}), 5381).toString() : "", m
		}
		var re = e.createContext(),
			ae = (re.Consumer, e.createContext()),
			oe = (ae.Consumer, new H),
			ie = ne();

		function se() {
			return (0, e.useContext)(re) || oe
		}

		function le() {
			return (0, e.useContext)(ae) || ie
		}

		function ue(t) {
			var n = (0, e.useState)(t.stylisPlugins),
				r = n[0],
				a = n[1],
				o = se(),
				s = (0, e.useMemo)((function() {
					var e = o;
					return t.sheet ? e = t.sheet : t.target && (e = e.reconstructWithOptions({
						target: t.target
					}, !1)), t.disableCSSOMInjection && (e = e.reconstructWithOptions({
						useCSSOMInjection: !1
					})), e
				}), [t.disableCSSOMInjection, t.sheet, t.target]),
				l = (0, e.useMemo)((function() {
					return ne({
						options: {
							prefix: !t.disableVendorPrefixes
						},
						plugins: r
					})
				}), [t.disableVendorPrefixes, r]);
			return (0, e.useEffect)((function() {
				i()(r, t.stylisPlugins) || a(t.stylisPlugins)
			}), [t.stylisPlugins]), e.createElement(re.Provider, {
				value: s
			}, e.createElement(ae.Provider, {
				value: l
			}, t.children))
		}
		var ce = function() {
				function e(e, t) {
					var n = this;
					this.inject = function(e, t) {
						void 0 === t && (t = ie);
						var r = n.name + t.hash;
						e.hasNameForId(n.id, r) || e.insertRules(n.id, r, t(n.rules, r, "@keyframes"))
					}, this.toString = function() {
						return P(12, String(n.name))
					}, this.name = e, this.id = "sc-keyframes-" + e, this.rules = t
				}
				return e.prototype.getName = function(e) {
					return void 0 === e && (e = ie), this.name + e.hash
				}, e
			}(),
			de = /([A-Z])/,
			fe = /([A-Z])/g,
			pe = /^ms-/,
			he = function(e) {
				return "-" + e.toLowerCase()
			};

		function me(e) {
			return de.test(e) ? e.replace(fe, he).replace(pe, "-ms-") : e
		}
		var ge = function(e) {
			return null == e || !1 === e || "" === e
		};

		function ye(e, t, n, r) {
			if (Array.isArray(e)) {
				for (var a, o = [], i = 0, s = e.length; i < s; i += 1) "" !== (a = ye(e[i], t, n, r)) && (Array.isArray(a) ? o.push.apply(o, a) : o.push(a));
				return o
			}
			return ge(e) ? "" : x(e) ? "." + e.styledComponentId : b(e) ? "function" != typeof(u = e) || u.prototype && u.prototype.isReactComponent || !t ? e : ye(e(t), t, n, r) : e instanceof ce ? n ? (e.inject(n, r), e.getName(r)) : e : g(e) ? function e(t, n) {
				var r, a, o = [];
				for (var i in t) t.hasOwnProperty(i) && !ge(t[i]) && (Array.isArray(t[i]) && t[i].isCss || b(t[i]) ? o.push(me(i) + ":", t[i], ";") : g(t[i]) ? o.push.apply(o, e(t[i], i)) : o.push(me(i) + ": " + (r = i, (null == (a = t[i]) || "boolean" == typeof a || "" === a ? "" : "number" != typeof a || 0 === a || r in l || r.startsWith("--") ? String(a).trim() : a + "px") + ";")));
				return n ? [n + " {"].concat(o, ["}"]) : o
			}(e) : e.toString();
			var u
		}
		var ve = function(e) {
			return Array.isArray(e) && (e.isCss = !0), e
		};

		function be(e) {
			for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
			return b(e) || g(e) ? ve(ye(m(y, [e].concat(n)))) : 0 === n.length && 1 === e.length && "string" == typeof e[0] ? e : ve(ye(m(e, n)))
		}
		new Set;
		var we = function(e, t, n) {
				return void 0 === n && (n = v), e.theme !== n.theme && e.theme || t || n.theme
			},
			xe = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
			ke = /(^-|-$)/g;

		function Se(e) {
			return e.replace(xe, "-").replace(ke, "")
		}
		var Ee = function(e) {
			return q(X(e) >>> 0)
		};

		function Ce(e) {
			return "string" == typeof e && !0
		}
		var Pe = function(e) {
				return "function" == typeof e || "object" == typeof e && null !== e && !Array.isArray(e)
			},
			Te = function(e) {
				return "__proto__" !== e && "constructor" !== e && "prototype" !== e
			};

		function Ae(e, t, n) {
			var r = e[n];
			Pe(t) && Pe(r) ? Re(r, t) : e[n] = t
		}

		function Re(e) {
			for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
			for (var a = 0, o = n; a < o.length; a++) {
				var i = o[a];
				if (Pe(i))
					for (var s in i) Te(s) && Ae(e, i[s], s)
			}
			return e
		}
		var Le = e.createContext();

		function Me(t) {
			var n = (0, e.useContext)(Le),
				r = (0, e.useMemo)((function() {
					return function(e, t) {
						return e ? b(e) ? e(t) : Array.isArray(e) || "object" != typeof e ? P(8) : t ? h({}, t, {}, e) : e : P(14)
					}(t.theme, n)
				}), [t.theme, n]);
			return t.children ? e.createElement(Le.Provider, {
				value: r
			}, t.children) : null
		}
		Le.Consumer;
		var Oe = {};

		function _e(t, n, r) {
			var a = x(t),
				o = !Ce(t),
				i = n.attrs,
				s = void 0 === i ? y : i,
				l = n.componentId,
				u = void 0 === l ? function(e, t) {
					var n = "string" != typeof e ? "sc" : Se(e);
					Oe[n] = (Oe[n] || 0) + 1;
					var r = n + "-" + Ee("5.3.11" + n + Oe[n]);
					return t ? t + "-" + r : r
				}(n.displayName, n.parentComponentId) : l,
				c = n.displayName,
				f = void 0 === c ? function(e) {
					return Ce(e) ? "styled." + e : "Styled(" + w(e) + ")"
				}(t) : c,
				m = n.displayName && n.componentId ? Se(n.displayName) + "-" + n.componentId : n.componentId || u,
				g = a && t.attrs ? Array.prototype.concat(t.attrs, s).filter(Boolean) : s,
				k = n.shouldForwardProp;
			a && t.shouldForwardProp && (k = n.shouldForwardProp ? function(e, r, a) {
				return t.shouldForwardProp(e, r, a) && n.shouldForwardProp(e, r, a)
			} : t.shouldForwardProp);
			var S, E = new J(r, m, a ? t.componentStyle : void 0),
				C = E.isStatic && 0 === s.length,
				P = function(t, n) {
					return function(t, n, r, a) {
						var o = t.attrs,
							i = t.componentStyle,
							s = t.defaultProps,
							l = t.foldedComponentIds,
							u = t.shouldForwardProp,
							c = t.styledComponentId,
							f = t.target,
							p = function(e, t, n) {
								void 0 === e && (e = v);
								var r = h({}, t, {
										theme: e
									}),
									a = {};
								return n.forEach((function(e) {
									var t, n, o, i = e;
									for (t in b(i) && (i = i(r)), i) r[t] = a[t] = "className" === t ? (n = a[t], o = i[t], n && o ? n + " " + o : n || o) : i[t]
								})), [r, a]
							}(we(n, (0, e.useContext)(Le), s) || v, n, o),
							m = p[0],
							g = p[1],
							y = function(e, t, n, r) {
								var a = se(),
									o = le();
								return t ? e.generateAndInjectStyles(v, a, o) : e.generateAndInjectStyles(n, a, o)
							}(i, a, m),
							w = r,
							x = g.$as || n.$as || g.as || n.as || f,
							k = Ce(x),
							S = g !== n ? h({}, n, {}, g) : n,
							E = {};
						for (var C in S) "$" !== C[0] && "as" !== C && ("forwardedAs" === C ? E.as = S[C] : (u ? u(C, d, x) : !k || d(C)) && (E[C] = S[C]));
						return n.style && g.style !== n.style && (E.style = h({}, n.style, {}, g.style)), E.className = Array.prototype.concat(l, c, y !== c ? y : null, n.className, g.className).filter(Boolean).join(" "), E.ref = w, (0, e.createElement)(x, E)
					}(S, t, n, C)
				};
			return P.displayName = f, (S = e.forwardRef(P)).attrs = g, S.componentStyle = E, S.displayName = f, S.shouldForwardProp = k, S.foldedComponentIds = a ? Array.prototype.concat(t.foldedComponentIds, t.styledComponentId) : y, S.styledComponentId = m, S.target = a ? t.target : t, S.withComponent = function(e) {
				var t = n.componentId,
					a = function(e, t) {
						if (null == e) return {};
						var n, r, a = {},
							o = Object.keys(e);
						for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
						return a
					}(n, ["componentId"]),
					o = t && t + "-" + (Ce(e) ? e : Se(w(e)));
				return _e(e, h({}, a, {
					attrs: g,
					componentId: o
				}), r)
			}, Object.defineProperty(S, "defaultProps", {
				get: function() {
					return this._foldedDefaultProps
				},
				set: function(e) {
					this._foldedDefaultProps = a ? Re({}, t.defaultProps, e) : e
				}
			}), Object.defineProperty(S, "toString", {
				value: function() {
					return "." + S.styledComponentId
				}
			}), o && p()(S, t, {
				attrs: !0,
				componentStyle: !0,
				displayName: !0,
				foldedComponentIds: !0,
				shouldForwardProp: !0,
				styledComponentId: !0,
				target: !0,
				withComponent: !0
			}), S
		}
		var De = function(e) {
			return function e(t, n, a) {
				if (void 0 === a && (a = v), !(0, r.isValidElementType)(n)) return P(1, String(n));
				var o = function() {
					return t(n, a, be.apply(void 0, arguments))
				};
				return o.withConfig = function(r) {
					return e(t, n, h({}, a, {}, r))
				}, o.attrs = function(r) {
					return e(t, n, h({}, a, {
						attrs: Array.prototype.concat(a.attrs, r).filter(Boolean)
					}))
				}, o
			}(_e, e)
		};
		["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach((function(e) {
			De[e] = De(e)
		}));
		var Fe, Ne = function() {
			function e(e, t) {
				this.rules = e, this.componentId = t, this.isStatic = K(e), H.registerId(this.componentId + 1)
			}
			var t = e.prototype;
			return t.createStyles = function(e, t, n, r) {
				var a = r(ye(this.rules, t, n, r).join(""), ""),
					o = this.componentId + e;
				n.insertRules(o, o, a)
			}, t.removeStyles = function(e, t) {
				t.clearRules(this.componentId + e)
			}, t.renderStyles = function(e, t, n, r) {
				e > 2 && H.registerId(this.componentId + e), this.removeStyles(e, n), this.createStyles(e, t, n, r)
			}, e
		}();
		Fe = function() {
			var t = this;
			this._emitSheetCSS = function() {
				var e = t.instance.toString();
				if (!e) return "";
				var n = z();
				return "<style " + [n && 'nonce="' + n + '"', k + '="true"', 'data-styled-version="5.3.11"'].filter(Boolean).join(" ") + ">" + e + "</style>"
			}, this.getStyleTags = function() {
				return t.sealed ? P(2) : t._emitSheetCSS()
			}, this.getStyleElement = function() {
				var n;
				if (t.sealed) return P(2);
				var r = ((n = {})[k] = "", n["data-styled-version"] = "5.3.11", n.dangerouslySetInnerHTML = {
						__html: t.instance.toString()
					}, n),
					a = z();
				return a && (r.nonce = a), [e.createElement("style", h({}, r, {
					key: "sc-0-0"
				}))]
			}, this.seal = function() {
				t.sealed = !0
			}, this.instance = new H({
				isServer: !0
			}), this.sealed = !1
		}.prototype, Fe.collectStyles = function(t) {
			return this.sealed ? P(2) : e.createElement(ue, {
				sheet: this.instance
			}, t)
		}, Fe.interleaveWithNodeStream = function(e) {
			return P(3)
		};
		const Ie = De,
			ze = () => !window.invokeNative,
			je = () => {};
		async function Ve(e, t, n, r = "nui-frame-app") {
			const a = {
				method: "post",
				headers: {
					"Content-Type": "application/json; charset=UTF-8"
				},
				body: JSON.stringify(t)
			};
			if (ze() && n) return n;
			const o = window.GetParentResourceName ? window.GetParentResourceName() : r,
				i = await fetch(`https://${o}/${e}`, a);
			return await i.json()
		}
		const Be = {
			imagesPath: "default",
			colors: {
				main: {
					50: "#fff8db",
					100: "#fdeaaf",
					200: "#fbdb81",
					300: "#f8cd51",
					400: "#f6bf22",
					500: "#E9AE09",
					600: "#ac8003",
					700: "#7b5c00",
					800: "#4b3700",
					900: "#1d1100"
				},
				"main-opacity": {
					50: "rgba(255, 184, 29, 0)",
					100: "rgba(255, 184, 29, 0.1)",
					200: "rgba(255, 184, 29, 0.2)",
					300: "rgba(255, 184, 29, 0.3)",
					400: "rgba(255, 184, 29, 0.4)",
					500: "rgba(255, 184, 29, 0.5)",
					600: "rgba(255, 184, 29, 0.6)",
					700: "rgba(255, 184, 29, 0.7)",
					800: "rgba(255, 184, 29, 0.8)",
					900: "rgba(255, 184, 29, 0.9)"
				},
				red: {
					50: "#ffe1e1",
					100: "#ffb1b1",
					200: "#ff7f7f",
					300: "#ff4c4c",
					400: "#ff1a1a",
					500: "#e60000",
					600: "#b40000",
					700: "#810000",
					800: "#500000",
					900: "#210000"
				},
				"red-opacity": {
					50: "rgba(255, 29, 29, 0);",
					100: "rgba(255, 29, 29, 0.1);",
					200: "rgba(255, 29, 29, 0.2);",
					300: "rgba(255, 29, 29, 0.3);",
					400: "rgba(255, 29, 29, 0.4);",
					500: "rgba(255, 29, 29, 0.5);",
					600: "rgba(255, 29, 29, 0.6);",
					700: "rgba(255, 29, 29, 0.7);",
					800: "rgba(255, 29, 29, 0.8);",
					900: "rgba(255, 29, 29, 0.9);"
				},
				white: {
					50: "#f2f2f2",
					100: "#d9d9d9",
					200: "#bfbfbf",
					300: "#a6a6a6",
					400: "#8c8c8c",
					500: "#737373",
					600: "#595959",
					700: "#404040",
					800: "#262626",
					900: "#0d0d0d"
				},
				background: {
					50: "#f2f2f2",
					100: "#d9d9d9",
					200: "#bfbfbf",
					300: "#a6a6a6",
					400: "#8c8c8c",
					500: "#737373",
					600: "#595959",
					700: "#404040",
					800: "#262626",
					900: "#0d0d0d"
				}
			},
			borders: "",
			breakpoints: "",
			colorSchemes: "",
			fonts: "",
			fontSizes: "",
			fontWeights: "",
			layerStyles: "",
			letterSpacings: "",
			lineHeights: "",
			radii: "",
			shadows: "",
			sizes: "",
			space: "",
			textStyles: "",
			zIndices: ""
		};
		var $e = {
				exports: {}
			},
			Ue = {},
			We = e,
			He = Symbol.for("react.element"),
			Ye = Symbol.for("react.fragment"),
			Qe = Object.prototype.hasOwnProperty,
			qe = We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
			Ge = {
				key: !0,
				ref: !0,
				__self: !0,
				__source: !0
			};

		function Xe(e, t, n) {
			var r, a = {},
				o = null,
				i = null;
			for (r in void 0 !== n && (o = "" + n), void 0 !== t.key && (o = "" + t.key), void 0 !== t.ref && (i = t.ref), t) Qe.call(t, r) && !Ge.hasOwnProperty(r) && (a[r] = t[r]);
			if (e && e.defaultProps)
				for (r in t = e.defaultProps) void 0 === a[r] && (a[r] = t[r]);
			return {
				$$typeof: He,
				type: e,
				key: o,
				ref: i,
				props: a,
				_owner: qe.current
			}
		}
		Ue.Fragment = Ye, Ue.jsx = Xe, Ue.jsxs = Xe, $e.exports = Ue;
		const Ke = $e.exports.jsx,
			Ze = (0, e.createContext)(null),
			Je = {
				delta: 0,
				timestamp: 0,
				isProcessing: !1
			};
		let et = !0,
			tt = !1;
		const nt = ["read", "update", "preRender", "render", "postRender"],
			rt = nt.reduce(((e, t) => (e[t] = function(e) {
				let t = [],
					n = [],
					r = 0,
					a = !1,
					o = !1;
				const i = new WeakSet,
					s = {
						schedule: (e, o = !1, s = !1) => {
							const l = s && a,
								u = l ? t : n;
							return o && i.add(e), -1 === u.indexOf(e) && (u.push(e), l && a && (r = t.length)), e
						},
						cancel: e => {
							const t = n.indexOf(e); - 1 !== t && n.splice(t, 1), i.delete(e)
						},
						process: l => {
							if (a) o = !0;
							else {
								if (a = !0, [t, n] = [n, t], n.length = 0, r = t.length, r)
									for (let n = 0; n < r; n++) {
										const r = t[n];
										r(l), i.has(r) && (s.schedule(r), e())
									}
								a = !1, o && (o = !1, s.process(l))
							}
						}
					};
				return s
			}((() => tt = !0)), e)), {}),
			at = e => rt[e].process(Je),
			ot = e => {
				tt = !1, Je.delta = et ? 1e3 / 60 : Math.max(Math.min(e - Je.timestamp, 40), 1), Je.timestamp = e, Je.isProcessing = !0, nt.forEach(at), Je.isProcessing = !1, tt && (et = !1, requestAnimationFrame(ot))
			},
			it = nt.reduce(((e, t) => {
				const n = rt[t];
				return e[t] = (e, t = !1, r = !1) => (tt || (tt = !0, et = !0, Je.isProcessing || requestAnimationFrame(ot)), n.schedule(e, t, r)), e
			}), {});

		function st(e) {
			nt.forEach((t => rt[t].cancel(e)))
		}
		const lt = "undefined" != typeof document,
			ut = lt ? e.useLayoutEffect : e.useEffect;

		function ct() {
			const t = (0, e.useRef)(!1);
			return ut((() => (t.current = !0, () => {
				t.current = !1
			})), []), t
		}
		const dt = (0, e.createContext)(null);

		function ft(t) {
			const n = (0, e.useRef)(null);
			return null === n.current && (n.current = t()), n.current
		}
		class pt extends e.Component {
			getSnapshotBeforeUpdate(e) {
				const t = this.props.childRef.current;
				if (t && e.isPresent && !this.props.isPresent) {
					const e = this.props.sizeRef.current;
					e.height = t.offsetHeight || 0, e.width = t.offsetWidth || 0, e.top = t.offsetTop, e.left = t.offsetLeft
				}
				return null
			}
			componentDidUpdate() {}
			render() {
				return this.props.children
			}
		}

		function ht({
			children: t,
			isPresent: n
		}) {
			const r = (0, e.useId)(),
				a = (0, e.useRef)(null),
				o = (0, e.useRef)({
					width: 0,
					height: 0,
					top: 0,
					left: 0
				});
			return (0, e.useInsertionEffect)((() => {
				const {
					width: e,
					height: t,
					top: i,
					left: s
				} = o.current;
				if (n || !a.current || !e || !t) return;
				a.current.dataset.motionPopId = r;
				const l = document.createElement("style");
				return document.head.appendChild(l), l.sheet && l.sheet.insertRule(`\n          [data-motion-pop-id="${r}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${t}px !important;\n            top: ${i}px !important;\n            left: ${s}px !important;\n          }\n        `), () => {
					document.head.removeChild(l)
				}
			}), [n]), e.createElement(pt, {
				isPresent: n,
				childRef: a,
				sizeRef: o
			}, e.cloneElement(t, {
				ref: a
			}))
		}
		const mt = ({
			children: t,
			initial: n,
			isPresent: r,
			onExitComplete: a,
			custom: o,
			presenceAffectsLayout: i,
			mode: s
		}) => {
			const l = ft(gt),
				u = (0, e.useId)(),
				c = (0, e.useMemo)((() => ({
					id: u,
					initial: n,
					isPresent: r,
					custom: o,
					onExitComplete: e => {
						l.set(e, !0);
						for (const e of l.values())
							if (!e) return;
						a && a()
					},
					register: e => (l.set(e, !1), () => l.delete(e))
				})), i ? void 0 : [r]);
			return (0, e.useMemo)((() => {
				l.forEach(((e, t) => l.set(t, !1)))
			}), [r]), e.useEffect((() => {
				!r && !l.size && a && a()
			}), [r]), "popLayout" === s && (t = e.createElement(ht, {
				isPresent: r
			}, t)), e.createElement(dt.Provider, {
				value: c
			}, t)
		};

		function gt() {
			return new Map
		}
		const yt = (0, e.createContext)({}),
			vt = e => e;
		let bt = vt,
			wt = vt;
		const xt = e => e.key || "",
			kt = ({
				children: t,
				custom: n,
				initial: r = !0,
				onExitComplete: a,
				exitBeforeEnter: o,
				presenceAffectsLayout: i = !0,
				mode: s = "sync"
			}) => {
				wt(!o, "Replace exitBeforeEnter with mode='wait'");
				const l = (0, e.useContext)(yt).forceRender || function() {
						const t = ct(),
							[n, r] = (0, e.useState)(0),
							a = (0, e.useCallback)((() => {
								t.current && r(n + 1)
							}), [n]);
						return [(0, e.useCallback)((() => it.postRender(a)), [a]), n]
					}()[0],
					u = ct(),
					c = function(t) {
						const n = [];
						return e.Children.forEach(t, (t => {
							(0, e.isValidElement)(t) && n.push(t)
						})), n
					}(t);
				let d = c;
				const f = (0, e.useRef)(new Map).current,
					p = (0, e.useRef)(d),
					h = (0, e.useRef)(new Map).current,
					m = (0, e.useRef)(!0);
				var g;
				if (ut((() => {
						m.current = !1,
							function(e, t) {
								e.forEach((e => {
									const n = xt(e);
									t.set(n, e)
								}))
							}(c, h), p.current = d
					})), g = () => {
						m.current = !0, h.clear(), f.clear()
					}, (0, e.useEffect)((() => () => g()), []), m.current) return e.createElement(e.Fragment, null, d.map((t => e.createElement(mt, {
					key: xt(t),
					isPresent: !0,
					initial: !!r && void 0,
					presenceAffectsLayout: i,
					mode: s
				}, t))));
				d = [...d];
				const y = p.current.map(xt),
					v = c.map(xt),
					b = y.length;
				for (let e = 0; e < b; e++) {
					const t = y[e]; - 1 !== v.indexOf(t) || f.has(t) || f.set(t, void 0)
				}
				return "wait" === s && f.size && (d = []), f.forEach(((t, r) => {
					if (-1 !== v.indexOf(r)) return;
					const o = h.get(r);
					if (!o) return;
					const m = y.indexOf(r);
					let g = t;
					if (!g) {
						const t = () => {
							h.delete(r), f.delete(r);
							const e = p.current.findIndex((e => e.key === r));
							if (p.current.splice(e, 1), !f.size) {
								if (p.current = c, !1 === u.current) return;
								l(), a && a()
							}
						};
						g = e.createElement(mt, {
							key: xt(o),
							isPresent: !1,
							onExitComplete: t,
							custom: n,
							presenceAffectsLayout: i,
							mode: s
						}, o), f.set(r, g)
					}
					d.splice(m, 0, g)
				})), d = d.map((t => {
					const n = t.key;
					return f.has(n) ? t : e.createElement(mt, {
						key: xt(t),
						isPresent: !0,
						presenceAffectsLayout: i,
						mode: s
					}, t)
				})), e.createElement(e.Fragment, null, f.size ? d : d.map((t => (0, e.cloneElement)(t))))
			},
			St = (0, e.createContext)({
				transformPagePoint: e => e,
				isStatic: !1,
				reducedMotion: "never"
			}),
			Et = (0, e.createContext)({}),
			Ct = (0, e.createContext)({
				strict: !1
			});

		function Pt(e) {
			return "object" == typeof e && Object.prototype.hasOwnProperty.call(e, "current")
		}

		function Tt(e) {
			return "string" == typeof e || Array.isArray(e)
		}

		function At(e) {
			return "object" == typeof e && "function" == typeof e.start
		}
		const Rt = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
			Lt = ["initial", ...Rt];

		function Mt(e) {
			return At(e.animate) || Lt.some((t => Tt(e[t])))
		}

		function Ot(e) {
			return Boolean(Mt(e) || e.variants)
		}

		function _t(e) {
			return Array.isArray(e) ? e.join(" ") : e
		}
		const Dt = {
				animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
				exit: ["exit"],
				drag: ["drag", "dragControls"],
				focus: ["whileFocus"],
				hover: ["whileHover", "onHoverStart", "onHoverEnd"],
				tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
				pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
				inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
				layout: ["layout", "layoutId"]
			},
			Ft = {};
		for (const e in Dt) Ft[e] = {
			isEnabled: t => Dt[e].some((e => !!t[e]))
		};
		const Nt = (0, e.createContext)({}),
			It = Symbol.for("motionComponentSymbol");

		function zt({
			preloadedFeatures: t,
			createVisualElement: n,
			useRender: r,
			useVisualState: a,
			Component: o
		}) {
			t && function(e) {
				for (const t in e) Ft[t] = {
					...Ft[t],
					...e[t]
				}
			}(t);
			const i = (0, e.forwardRef)((function(i, s) {
				let l;
				const u = {
						...(0, e.useContext)(St),
						...i,
						layoutId: jt(i)
					},
					{
						isStatic: c
					} = u,
					d = function(t) {
						const {
							initial: n,
							animate: r
						} = function(e, t) {
							if (Mt(e)) {
								const {
									initial: t,
									animate: n
								} = e;
								return {
									initial: !1 === t || Tt(t) ? t : void 0,
									animate: Tt(n) ? n : void 0
								}
							}
							return !1 !== e.inherit ? t : {}
						}(t, (0, e.useContext)(Et));
						return (0, e.useMemo)((() => ({
							initial: n,
							animate: r
						})), [_t(n), _t(r)])
					}(i),
					f = a(i, c);
				if (!c && lt) {
					d.visualElement = function(t, n, r, a) {
						const {
							visualElement: o
						} = (0, e.useContext)(Et), i = (0, e.useContext)(Ct), s = (0, e.useContext)(dt), l = (0, e.useContext)(St).reducedMotion, u = (0, e.useRef)();
						a = a || i.renderer, !u.current && a && (u.current = a(t, {
							visualState: n,
							parent: o,
							props: r,
							presenceContext: s,
							blockInitialAnimation: !!s && !1 === s.initial,
							reducedMotionConfig: l
						}));
						const c = u.current;
						return (0, e.useInsertionEffect)((() => {
							c && c.update(r, s)
						})), ut((() => {
							c && c.render()
						})), (0, e.useEffect)((() => {
							c && c.updateFeatures()
						})), (window.HandoffAppearAnimations ? ut : e.useEffect)((() => {
							c && c.animationState && c.animationState.animateChanges()
						})), c
					}(o, f, u, n);
					const r = (0, e.useContext)(Nt),
						a = (0, e.useContext)(Ct).strict;
					d.visualElement && (l = d.visualElement.loadFeatures(u, a, t, r))
				}
				return e.createElement(Et.Provider, {
					value: d
				}, l && d.visualElement ? e.createElement(l, {
					visualElement: d.visualElement,
					...u
				}) : null, r(o, i, function(t, n, r) {
					return (0, e.useCallback)((e => {
						e && t.mount && t.mount(e), n && (e ? n.mount(e) : n.unmount()), r && ("function" == typeof r ? r(e) : Pt(r) && (r.current = e))
					}), [n])
				}(f, d.visualElement, s), f, c, d.visualElement))
			}));
			return i[It] = o, i
		}

		function jt({
			layoutId: t
		}) {
			const n = (0, e.useContext)(yt).id;
			return n && void 0 !== t ? n + "-" + t : t
		}

		function Vt(e) {
			function t(t, n = {}) {
				return zt(e(t, n))
			}
			if ("undefined" == typeof Proxy) return t;
			const n = new Map;
			return new Proxy(t, {
				get: (e, r) => (n.has(r) || n.set(r, t(r)), n.get(r))
			})
		}
		const Bt = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

		function $t(e) {
			return "string" == typeof e && !e.includes("-") && !!(Bt.indexOf(e) > -1 || /[A-Z]/.test(e))
		}
		const Ut = {},
			Wt = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
			Ht = new Set(Wt);

		function Yt(e, {
			layout: t,
			layoutId: n
		}) {
			return Ht.has(e) || e.startsWith("origin") || (t || void 0 !== n) && (!!Ut[e] || "opacity" === e)
		}
		const Qt = e => Boolean(e && e.getVelocity),
			qt = {
				x: "translateX",
				y: "translateY",
				z: "translateZ",
				transformPerspective: "perspective"
			},
			Gt = Wt.length,
			Xt = e => t => "string" == typeof t && t.startsWith(e),
			Kt = Xt("--"),
			Zt = Xt("var(--"),
			Jt = (e, t) => t && "number" == typeof e ? t.transform(e) : e,
			en = (e, t, n) => Math.min(Math.max(n, e), t),
			tn = {
				test: e => "number" == typeof e,
				parse: parseFloat,
				transform: e => e
			},
			nn = {
				...tn,
				transform: e => en(0, 1, e)
			},
			rn = {
				...tn,
				default: 1
			},
			an = e => Math.round(1e5 * e) / 1e5,
			on = /(-)?([\d]*\.?[\d])+/g,
			sn = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
			ln = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

		function un(e) {
			return "string" == typeof e
		}
		const cn = e => ({
				test: t => un(t) && t.endsWith(e) && 1 === t.split(" ").length,
				parse: parseFloat,
				transform: t => `${t}${e}`
			}),
			dn = cn("deg"),
			fn = cn("%"),
			pn = cn("px"),
			hn = cn("vh"),
			mn = cn("vw"),
			gn = {
				...fn,
				parse: e => fn.parse(e) / 100,
				transform: e => fn.transform(100 * e)
			},
			yn = {
				...tn,
				transform: Math.round
			},
			vn = {
				borderWidth: pn,
				borderTopWidth: pn,
				borderRightWidth: pn,
				borderBottomWidth: pn,
				borderLeftWidth: pn,
				borderRadius: pn,
				radius: pn,
				borderTopLeftRadius: pn,
				borderTopRightRadius: pn,
				borderBottomRightRadius: pn,
				borderBottomLeftRadius: pn,
				width: pn,
				maxWidth: pn,
				height: pn,
				maxHeight: pn,
				size: pn,
				top: pn,
				right: pn,
				bottom: pn,
				left: pn,
				padding: pn,
				paddingTop: pn,
				paddingRight: pn,
				paddingBottom: pn,
				paddingLeft: pn,
				margin: pn,
				marginTop: pn,
				marginRight: pn,
				marginBottom: pn,
				marginLeft: pn,
				rotate: dn,
				rotateX: dn,
				rotateY: dn,
				rotateZ: dn,
				scale: rn,
				scaleX: rn,
				scaleY: rn,
				scaleZ: rn,
				skew: dn,
				skewX: dn,
				skewY: dn,
				distance: pn,
				translateX: pn,
				translateY: pn,
				translateZ: pn,
				x: pn,
				y: pn,
				z: pn,
				perspective: pn,
				transformPerspective: pn,
				opacity: nn,
				originX: gn,
				originY: gn,
				originZ: pn,
				zIndex: yn,
				fillOpacity: nn,
				strokeOpacity: nn,
				numOctaves: yn
			};

		function bn(e, t, n, r) {
			const {
				style: a,
				vars: o,
				transform: i,
				transformOrigin: s
			} = e;
			let l = !1,
				u = !1,
				c = !0;
			for (const e in t) {
				const n = t[e];
				if (Kt(e)) {
					o[e] = n;
					continue
				}
				const r = vn[e],
					d = Jt(n, r);
				if (Ht.has(e)) {
					if (l = !0, i[e] = d, !c) continue;
					n !== (r.default || 0) && (c = !1)
				} else e.startsWith("origin") ? (u = !0, s[e] = d) : a[e] = d
			}
			if (t.transform || (l || r ? a.transform = function(e, {
					enableHardwareAcceleration: t = !0,
					allowTransformNone: n = !0
				}, r, a) {
					let o = "";
					for (let t = 0; t < Gt; t++) {
						const n = Wt[t];
						void 0 !== e[n] && (o += `${qt[n]||n}(${e[n]}) `)
					}
					return t && !e.z && (o += "translateZ(0)"), o = o.trim(), a ? o = a(e, r ? "" : o) : n && r && (o = "none"), o
				}(e.transform, n, c, r) : a.transform && (a.transform = "none")), u) {
				const {
					originX: e = "50%",
					originY: t = "50%",
					originZ: n = 0
				} = s;
				a.transformOrigin = `${e} ${t} ${n}`
			}
		}
		const wn = () => ({
			style: {},
			transform: {},
			transformOrigin: {},
			vars: {}
		});

		function xn(e, t, n) {
			for (const r in t) Qt(t[r]) || Yt(r, n) || (e[r] = t[r])
		}

		function kn(t, n, r) {
			const a = {},
				o = function(t, n, r) {
					const a = {};
					return xn(a, t.style || {}, t), Object.assign(a, function({
						transformTemplate: t
					}, n, r) {
						return (0, e.useMemo)((() => {
							const e = wn();
							return bn(e, n, {
								enableHardwareAcceleration: !r
							}, t), Object.assign({}, e.vars, e.style)
						}), [n])
					}(t, n, r)), t.transformValues ? t.transformValues(a) : a
				}(t, n, r);
			return t.drag && !1 !== t.dragListener && (a.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = !0 === t.drag ? "none" : "pan-" + ("x" === t.drag ? "y" : "x")), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (a.tabIndex = 0), a.style = o, a
		}
		const Sn = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "ignoreStrict", "viewport"]);

		function En(e) {
			return e.startsWith("while") || e.startsWith("drag") && "draggable" !== e || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || Sn.has(e)
		}
		let Cn = e => !En(e);
		try {
			(Pn = require("@emotion/is-prop-valid").default) && (Cn = e => e.startsWith("on") ? !En(e) : Pn(e))
		} catch (e) {}
		var Pn;

		function Tn(e, t, n) {
			return "string" == typeof e ? e : pn.transform(t + n * e)
		}
		const An = {
				offset: "stroke-dashoffset",
				array: "stroke-dasharray"
			},
			Rn = {
				offset: "strokeDashoffset",
				array: "strokeDasharray"
			};

		function Ln(e, {
			attrX: t,
			attrY: n,
			attrScale: r,
			originX: a,
			originY: o,
			pathLength: i,
			pathSpacing: s = 1,
			pathOffset: l = 0,
			...u
		}, c, d, f) {
			if (bn(e, u, c, f), d) return void(e.style.viewBox && (e.attrs.viewBox = e.style.viewBox));
			e.attrs = e.style, e.style = {};
			const {
				attrs: p,
				style: h,
				dimensions: m
			} = e;
			p.transform && (m && (h.transform = p.transform), delete p.transform), m && (void 0 !== a || void 0 !== o || h.transform) && (h.transformOrigin = function(e, t, n) {
				return `${Tn(t,e.x,e.width)} ${Tn(n,e.y,e.height)}`
			}(m, void 0 !== a ? a : .5, void 0 !== o ? o : .5)), void 0 !== t && (p.x = t), void 0 !== n && (p.y = n), void 0 !== r && (p.scale = r), void 0 !== i && function(e, t, n = 1, r = 0, a = !0) {
				e.pathLength = 1;
				const o = a ? An : Rn;
				e[o.offset] = pn.transform(-r);
				const i = pn.transform(t),
					s = pn.transform(n);
				e[o.array] = `${i} ${s}`
			}(p, i, s, l, !1)
		}
		const Mn = () => ({
				...wn(),
				attrs: {}
			}),
			On = e => "string" == typeof e && "svg" === e.toLowerCase();

		function _n(t, n, r, a) {
			const o = (0, e.useMemo)((() => {
				const e = Mn();
				return Ln(e, n, {
					enableHardwareAcceleration: !1
				}, On(a), t.transformTemplate), {
					...e.attrs,
					style: {
						...e.style
					}
				}
			}), [n]);
			if (t.style) {
				const e = {};
				xn(e, t.style, t), o.style = {
					...e,
					...o.style
				}
			}
			return o
		}

		function Dn(t = !1) {
			return (n, r, a, {
				latestValues: o
			}, i) => {
				const s = ($t(n) ? _n : kn)(r, o, i, n),
					l = function(e, t, n) {
						const r = {};
						for (const a in e) "values" === a && "object" == typeof e.values || (Cn(a) || !0 === n && En(a) || !t && !En(a) || e.draggable && a.startsWith("onDrag")) && (r[a] = e[a]);
						return r
					}(r, "string" == typeof n, t),
					u = {
						...l,
						...s,
						ref: a
					},
					{
						children: c
					} = r,
					d = (0, e.useMemo)((() => Qt(c) ? c.get() : c), [c]);
				return (0, e.createElement)(n, {
					...u,
					children: d
				})
			}
		}
		const Fn = e => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

		function Nn(e, {
			style: t,
			vars: n
		}, r, a) {
			Object.assign(e.style, t, a && a.getProjectionStyles(r));
			for (const t in n) e.style.setProperty(t, n[t])
		}
		const In = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

		function zn(e, t, n, r) {
			Nn(e, t, void 0, r);
			for (const n in t.attrs) e.setAttribute(In.has(n) ? n : Fn(n), t.attrs[n])
		}

		function jn(e, t) {
			const {
				style: n
			} = e, r = {};
			for (const a in n)(Qt(n[a]) || t.style && Qt(t.style[a]) || Yt(a, e)) && (r[a] = n[a]);
			return r
		}

		function Vn(e, t) {
			const n = jn(e, t);
			for (const r in e)(Qt(e[r]) || Qt(t[r])) && (n[-1 !== Wt.indexOf(r) ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r] = e[r]);
			return n
		}

		function Bn(e, t, n, r = {}, a = {}) {
			return "function" == typeof t && (t = t(void 0 !== n ? n : e.custom, r, a)), "string" == typeof t && (t = e.variants && e.variants[t]), "function" == typeof t && (t = t(void 0 !== n ? n : e.custom, r, a)), t
		}
		const $n = e => Array.isArray(e),
			Un = e => Boolean(e && "object" == typeof e && e.mix && e.toValue),
			Wn = e => $n(e) ? e[e.length - 1] || 0 : e;

		function Hn(e) {
			const t = Qt(e) ? e.get() : e;
			return Un(t) ? t.toValue() : t
		}
		const Yn = t => (n, r) => {
			const a = (0, e.useContext)(Et),
				o = (0, e.useContext)(dt),
				i = () => function({
					scrapeMotionValuesFromProps: e,
					createRenderState: t,
					onMount: n
				}, r, a, o) {
					const i = {
						latestValues: Qn(r, a, o, e),
						renderState: t()
					};
					return n && (i.mount = e => n(r, e, i)), i
				}(t, n, a, o);
			return r ? i() : ft(i)
		};

		function Qn(e, t, n, r) {
			const a = {},
				o = r(e, {});
			for (const e in o) a[e] = Hn(o[e]);
			let {
				initial: i,
				animate: s
			} = e;
			const l = Mt(e),
				u = Ot(e);
			t && u && !l && !1 !== e.inherit && (void 0 === i && (i = t.initial), void 0 === s && (s = t.animate));
			let c = !!n && !1 === n.initial;
			c = c || !1 === i;
			const d = c ? s : i;
			return d && "boolean" != typeof d && !At(d) && (Array.isArray(d) ? d : [d]).forEach((t => {
				const n = Bn(e, t);
				if (!n) return;
				const {
					transitionEnd: r,
					transition: o,
					...i
				} = n;
				for (const e in i) {
					let t = i[e];
					Array.isArray(t) && (t = t[c ? t.length - 1 : 0]), null !== t && (a[e] = t)
				}
				for (const e in r) a[e] = r[e]
			})), a
		}
		const qn = {
				useVisualState: Yn({
					scrapeMotionValuesFromProps: Vn,
					createRenderState: Mn,
					onMount: (e, t, {
						renderState: n,
						latestValues: r
					}) => {
						try {
							n.dimensions = "function" == typeof t.getBBox ? t.getBBox() : t.getBoundingClientRect()
						} catch (e) {
							n.dimensions = {
								x: 0,
								y: 0,
								width: 0,
								height: 0
							}
						}
						Ln(n, r, {
							enableHardwareAcceleration: !1
						}, On(t.tagName), e.transformTemplate), zn(t, n)
					}
				})
			},
			Gn = {
				useVisualState: Yn({
					scrapeMotionValuesFromProps: jn,
					createRenderState: wn
				})
			};

		function Xn(e, t, n, r = {
			passive: !0
		}) {
			return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
		}
		const Kn = e => "mouse" === e.pointerType ? "number" != typeof e.button || e.button <= 0 : !1 !== e.isPrimary;

		function Zn(e, t = "page") {
			return {
				point: {
					x: e[t + "X"],
					y: e[t + "Y"]
				}
			}
		}
		const Jn = e => t => Kn(t) && e(t, Zn(t));

		function er(e, t, n, r) {
			return Xn(e, t, Jn(n), r)
		}
		const tr = (e, t) => n => t(e(n)),
			nr = (...e) => e.reduce(tr);

		function rr(e) {
			let t = null;
			return () => null === t && (t = e, () => {
				t = null
			})
		}
		const ar = rr("dragHorizontal"),
			or = rr("dragVertical");

		function ir(e) {
			let t = !1;
			if ("y" === e) t = or();
			else if ("x" === e) t = ar();
			else {
				const e = ar(),
					n = or();
				e && n ? t = () => {
					e(), n()
				} : (e && e(), n && n())
			}
			return t
		}

		function sr() {
			const e = ir(!0);
			return !e || (e(), !1)
		}
		class lr {
			constructor(e) {
				this.isMounted = !1, this.node = e
			}
			update() {}
		}

		function ur(e, t) {
			const n = "pointer" + (t ? "enter" : "leave"),
				r = "onHover" + (t ? "Start" : "End");
			return er(e.current, n, ((n, a) => {
				if ("touch" === n.type || sr()) return;
				const o = e.getProps();
				e.animationState && o.whileHover && e.animationState.setActive("whileHover", t), o[r] && it.update((() => o[r](n, a)))
			}), {
				passive: !e.getProps()[r]
			})
		}
		const cr = (e, t) => !!t && (e === t || cr(e, t.parentElement));

		function dr(e, t) {
			if (!t) return;
			const n = new PointerEvent("pointer" + e);
			t(n, Zn(n))
		}
		const fr = new WeakMap,
			pr = new WeakMap,
			hr = e => {
				const t = fr.get(e.target);
				t && t(e)
			},
			mr = e => {
				e.forEach(hr)
			};
		const gr = {
				some: 0,
				all: 1
			},
			yr = {
				inView: {
					Feature: class extends lr {
						constructor() {
							super(...arguments), this.hasEnteredView = !1, this.isInView = !1
						}
						startObserver() {
							this.unmount();
							const {
								viewport: e = {}
							} = this.node.getProps(), {
								root: t,
								margin: n,
								amount: r = "some",
								once: a
							} = e, o = {
								root: t ? t.current : void 0,
								rootMargin: n,
								threshold: "number" == typeof r ? r : gr[r]
							};
							return function(e, t, n) {
								const r = function({
									root: e,
									...t
								}) {
									const n = e || document;
									pr.has(n) || pr.set(n, {});
									const r = pr.get(n),
										a = JSON.stringify(t);
									return r[a] || (r[a] = new IntersectionObserver(mr, {
										root: e,
										...t
									})), r[a]
								}(t);
								return fr.set(e, n), r.observe(e), () => {
									fr.delete(e), r.unobserve(e)
								}
							}(this.node.current, o, (e => {
								const {
									isIntersecting: t
								} = e;
								if (this.isInView === t) return;
								if (this.isInView = t, a && !t && this.hasEnteredView) return;
								t && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", t);
								const {
									onViewportEnter: n,
									onViewportLeave: r
								} = this.node.getProps(), o = t ? n : r;
								o && o(e)
							}))
						}
						mount() {
							this.startObserver()
						}
						update() {
							if ("undefined" == typeof IntersectionObserver) return;
							const {
								props: e,
								prevProps: t
							} = this.node;
							["amount", "margin", "root"].some(function({
								viewport: e = {}
							}, {
								viewport: t = {}
							} = {}) {
								return n => e[n] !== t[n]
							}(e, t)) && this.startObserver()
						}
						unmount() {}
					}
				},
				tap: {
					Feature: class extends lr {
						constructor() {
							super(...arguments), this.removeStartListeners = vt, this.removeEndListeners = vt, this.removeAccessibleListeners = vt, this.startPointerPress = (e, t) => {
								if (this.removeEndListeners(), this.isPressing) return;
								const n = this.node.getProps(),
									r = er(window, "pointerup", ((e, t) => {
										if (!this.checkPressEnd()) return;
										const {
											onTap: n,
											onTapCancel: r
										} = this.node.getProps();
										it.update((() => {
											cr(this.node.current, e.target) ? n && n(e, t) : r && r(e, t)
										}))
									}), {
										passive: !(n.onTap || n.onPointerUp)
									}),
									a = er(window, "pointercancel", ((e, t) => this.cancelPress(e, t)), {
										passive: !(n.onTapCancel || n.onPointerCancel)
									});
								this.removeEndListeners = nr(r, a), this.startPress(e, t)
							}, this.startAccessiblePress = () => {
								const e = Xn(this.node.current, "keydown", (e => {
										"Enter" !== e.key || this.isPressing || (this.removeEndListeners(), this.removeEndListeners = Xn(this.node.current, "keyup", (e => {
											"Enter" === e.key && this.checkPressEnd() && dr("up", ((e, t) => {
												const {
													onTap: n
												} = this.node.getProps();
												n && it.update((() => n(e, t)))
											}))
										})), dr("down", ((e, t) => {
											this.startPress(e, t)
										})))
									})),
									t = Xn(this.node.current, "blur", (() => {
										this.isPressing && dr("cancel", ((e, t) => this.cancelPress(e, t)))
									}));
								this.removeAccessibleListeners = nr(e, t)
							}
						}
						startPress(e, t) {
							this.isPressing = !0;
							const {
								onTapStart: n,
								whileTap: r
							} = this.node.getProps();
							r && this.node.animationState && this.node.animationState.setActive("whileTap", !0), n && it.update((() => n(e, t)))
						}
						checkPressEnd() {
							return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !sr()
						}
						cancelPress(e, t) {
							if (!this.checkPressEnd()) return;
							const {
								onTapCancel: n
							} = this.node.getProps();
							n && it.update((() => n(e, t)))
						}
						mount() {
							const e = this.node.getProps(),
								t = er(this.node.current, "pointerdown", this.startPointerPress, {
									passive: !(e.onTapStart || e.onPointerStart)
								}),
								n = Xn(this.node.current, "focus", this.startAccessiblePress);
							this.removeStartListeners = nr(t, n)
						}
						unmount() {
							this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
						}
					}
				},
				focus: {
					Feature: class extends lr {
						constructor() {
							super(...arguments), this.isActive = !1
						}
						onFocus() {
							let e = !1;
							try {
								e = this.node.current.matches(":focus-visible")
							} catch (t) {
								e = !0
							}
							e && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
						}
						onBlur() {
							this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
						}
						mount() {
							this.unmount = nr(Xn(this.node.current, "focus", (() => this.onFocus())), Xn(this.node.current, "blur", (() => this.onBlur())))
						}
						unmount() {}
					}
				},
				hover: {
					Feature: class extends lr {
						mount() {
							this.unmount = nr(ur(this.node, !0), ur(this.node, !1))
						}
						unmount() {}
					}
				}
			};

		function vr(e, t) {
			if (!Array.isArray(t)) return !1;
			const n = t.length;
			if (n !== e.length) return !1;
			for (let r = 0; r < n; r++)
				if (t[r] !== e[r]) return !1;
			return !0
		}

		function br(e, t, n) {
			const r = e.getProps();
			return Bn(r, t, void 0 !== n ? n : r.custom, function(e) {
				const t = {};
				return e.values.forEach(((e, n) => t[n] = e.get())), t
			}(e), function(e) {
				const t = {};
				return e.values.forEach(((e, n) => t[n] = e.getVelocity())), t
			}(e))
		}
		const wr = "data-" + Fn("framerAppearId"),
			xr = e => 1e3 * e,
			kr = e => e / 1e3,
			Sr = e => Array.isArray(e) && "number" == typeof e[0];

		function Er(e) {
			return Boolean(!e || "string" == typeof e && Pr[e] || Sr(e) || Array.isArray(e) && e.every(Er))
		}
		const Cr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
			Pr = {
				linear: "linear",
				ease: "ease",
				easeIn: "ease-in",
				easeOut: "ease-out",
				easeInOut: "ease-in-out",
				circIn: Cr([0, .65, .55, 1]),
				circOut: Cr([.55, 0, 1, .45]),
				backIn: Cr([.31, .01, .66, -.59]),
				backOut: Cr([.33, 1.53, .69, .99])
			};

		function Tr(e) {
			if (e) return Sr(e) ? Cr(e) : Array.isArray(e) ? e.map(Tr) : Pr[e]
		}
		const Ar = {
				waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
			},
			Rr = {},
			Lr = {};
		for (const e in Ar) Lr[e] = () => (void 0 === Rr[e] && (Rr[e] = Ar[e]()), Rr[e]);
		const Mr = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;

		function Or(e, t, n, r) {
			if (e === t && n === r) return vt;
			return a => 0 === a || 1 === a ? a : Mr(function(e, t, n, r, a) {
				let o, i, s = 0;
				do {
					i = t + (n - t) / 2, o = Mr(i, r, a) - e, o > 0 ? n = i : t = i
				} while (Math.abs(o) > 1e-7 && ++s < 12);
				return i
			}(a, 0, 1, e, n), t, r)
		}
		const _r = Or(.42, 0, 1, 1),
			Dr = Or(0, 0, .58, 1),
			Fr = Or(.42, 0, .58, 1),
			Nr = e => Array.isArray(e) && "number" != typeof e[0],
			Ir = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
			zr = e => t => 1 - e(1 - t),
			jr = e => 1 - Math.sin(Math.acos(e)),
			Vr = zr(jr),
			Br = Ir(Vr),
			$r = Or(.33, 1.53, .69, .99),
			Ur = zr($r),
			Wr = Ir(Ur),
			Hr = {
				linear: vt,
				easeIn: _r,
				easeInOut: Fr,
				easeOut: Dr,
				circIn: jr,
				circInOut: Br,
				circOut: Vr,
				backIn: Ur,
				backInOut: Wr,
				backOut: $r,
				anticipate: e => (e *= 2) < 1 ? .5 * Ur(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
			},
			Yr = e => {
				if (Array.isArray(e)) {
					wt(4 === e.length, "Cubic bezier arrays must contain four numerical values.");
					const [t, n, r, a] = e;
					return Or(t, n, r, a)
				}
				return "string" == typeof e ? (wt(void 0 !== Hr[e], `Invalid easing type '${e}'`), Hr[e]) : e
			},
			Qr = (e, t) => n => Boolean(un(n) && ln.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)),
			qr = (e, t, n) => r => {
				if (!un(r)) return r;
				const [a, o, i, s] = r.match(on);
				return {
					[e]: parseFloat(a),
					[t]: parseFloat(o),
					[n]: parseFloat(i),
					alpha: void 0 !== s ? parseFloat(s) : 1
				}
			},
			Gr = {
				...tn,
				transform: e => Math.round((e => en(0, 255, e))(e))
			},
			Xr = {
				test: Qr("rgb", "red"),
				parse: qr("red", "green", "blue"),
				transform: ({
					red: e,
					green: t,
					blue: n,
					alpha: r = 1
				}) => "rgba(" + Gr.transform(e) + ", " + Gr.transform(t) + ", " + Gr.transform(n) + ", " + an(nn.transform(r)) + ")"
			},
			Kr = {
				test: Qr("#"),
				parse: function(e) {
					let t = "",
						n = "",
						r = "",
						a = "";
					return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), a = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), a = e.substring(4, 5), t += t, n += n, r += r, a += a), {
						red: parseInt(t, 16),
						green: parseInt(n, 16),
						blue: parseInt(r, 16),
						alpha: a ? parseInt(a, 16) / 255 : 1
					}
				},
				transform: Xr.transform
			},
			Zr = {
				test: Qr("hsl", "hue"),
				parse: qr("hue", "saturation", "lightness"),
				transform: ({
					hue: e,
					saturation: t,
					lightness: n,
					alpha: r = 1
				}) => "hsla(" + Math.round(e) + ", " + fn.transform(an(t)) + ", " + fn.transform(an(n)) + ", " + an(nn.transform(r)) + ")"
			},
			Jr = {
				test: e => Xr.test(e) || Kr.test(e) || Zr.test(e),
				parse: e => Xr.test(e) ? Xr.parse(e) : Zr.test(e) ? Zr.parse(e) : Kr.parse(e),
				transform: e => un(e) ? e : e.hasOwnProperty("red") ? Xr.transform(e) : Zr.transform(e)
			},
			ea = (e, t, n) => -n * e + n * t + e;

		function ta(e, t, n) {
			return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
		}
		const na = (e, t, n) => {
				const r = e * e;
				return Math.sqrt(Math.max(0, n * (t * t - r) + r))
			},
			ra = [Kr, Xr, Zr];

		function aa(e) {
			const t = (e => ra.find((t => t.test(e))))(e);
			wt(Boolean(t), `'${e}' is not an animatable color. Use the equivalent color code instead.`);
			let n = t.parse(e);
			return t === Zr && (n = function({
				hue: e,
				saturation: t,
				lightness: n,
				alpha: r
			}) {
				e /= 360, n /= 100;
				let a = 0,
					o = 0,
					i = 0;
				if (t /= 100) {
					const r = n < .5 ? n * (1 + t) : n + t - n * t,
						s = 2 * n - r;
					a = ta(s, r, e + 1 / 3), o = ta(s, r, e), i = ta(s, r, e - 1 / 3)
				} else a = o = i = n;
				return {
					red: Math.round(255 * a),
					green: Math.round(255 * o),
					blue: Math.round(255 * i),
					alpha: r
				}
			}(n)), n
		}
		const oa = (e, t) => {
				const n = aa(e),
					r = aa(t),
					a = {
						...n
					};
				return e => (a.red = na(n.red, r.red, e), a.green = na(n.green, r.green, e), a.blue = na(n.blue, r.blue, e), a.alpha = ea(n.alpha, r.alpha, e), Xr.transform(a))
			},
			ia = {
				regex: /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
				countKey: "Vars",
				token: "${v}",
				parse: vt
			},
			sa = {
				regex: sn,
				countKey: "Colors",
				token: "${c}",
				parse: Jr.parse
			},
			la = {
				regex: on,
				countKey: "Numbers",
				token: "${n}",
				parse: tn.parse
			};

		function ua(e, {
			regex: t,
			countKey: n,
			token: r,
			parse: a
		}) {
			const o = e.tokenised.match(t);
			o && (e["num" + n] = o.length, e.tokenised = e.tokenised.replace(t, r), e.values.push(...o.map(a)))
		}

		function ca(e) {
			const t = e.toString(),
				n = {
					value: t,
					tokenised: t,
					values: [],
					numVars: 0,
					numColors: 0,
					numNumbers: 0
				};
			return n.value.includes("var(--") && ua(n, ia), ua(n, sa), ua(n, la), n
		}

		function da(e) {
			return ca(e).values
		}

		function fa(e) {
			const {
				values: t,
				numColors: n,
				numVars: r,
				tokenised: a
			} = ca(e), o = t.length;
			return e => {
				let t = a;
				for (let a = 0; a < o; a++) t = a < r ? t.replace(ia.token, e[a]) : a < r + n ? t.replace(sa.token, Jr.transform(e[a])) : t.replace(la.token, an(e[a]));
				return t
			}
		}
		const pa = e => "number" == typeof e ? 0 : e,
			ha = {
				test: function(e) {
					var t, n;
					return isNaN(e) && un(e) && ((null === (t = e.match(on)) || void 0 === t ? void 0 : t.length) || 0) + ((null === (n = e.match(sn)) || void 0 === n ? void 0 : n.length) || 0) > 0
				},
				parse: da,
				createTransformer: fa,
				getAnimatableNone: function(e) {
					const t = da(e);
					return fa(e)(t.map(pa))
				}
			},
			ma = (e, t) => n => `${n>0?t:e}`;

		function ga(e, t) {
			return "number" == typeof e ? n => ea(e, t, n) : Jr.test(e) ? oa(e, t) : e.startsWith("var(") ? ma(e, t) : ba(e, t)
		}
		const ya = (e, t) => {
				const n = [...e],
					r = n.length,
					a = e.map(((e, n) => ga(e, t[n])));
				return e => {
					for (let t = 0; t < r; t++) n[t] = a[t](e);
					return n
				}
			},
			va = (e, t) => {
				const n = {
						...e,
						...t
					},
					r = {};
				for (const a in n) void 0 !== e[a] && void 0 !== t[a] && (r[a] = ga(e[a], t[a]));
				return e => {
					for (const t in r) n[t] = r[t](e);
					return n
				}
			},
			ba = (e, t) => {
				const n = ha.createTransformer(t),
					r = ca(e),
					a = ca(t);
				return r.numVars === a.numVars && r.numColors === a.numColors && r.numNumbers >= a.numNumbers ? nr(ya(r.values, a.values), n) : (bt(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), ma(e, t))
			},
			wa = (e, t, n) => {
				const r = t - e;
				return 0 === r ? 1 : (n - e) / r
			},
			xa = (e, t) => n => ea(e, t, n);

		function ka(e, t, {
			clamp: n = !0,
			ease: r,
			mixer: a
		} = {}) {
			const o = e.length;
			if (wt(o === t.length, "Both input and output ranges must be the same length"), 1 === o) return () => t[0];
			e[0] > e[o - 1] && (e = [...e].reverse(), t = [...t].reverse());
			const i = function(e, t, n) {
					const r = [],
						a = n || function(e) {
							return "number" == typeof e ? xa : "string" == typeof e ? Jr.test(e) ? oa : ba : Array.isArray(e) ? ya : "object" == typeof e ? va : xa
						}(e[0]),
						o = e.length - 1;
					for (let n = 0; n < o; n++) {
						let o = a(e[n], e[n + 1]);
						if (t) {
							const e = Array.isArray(t) ? t[n] || vt : t;
							o = nr(e, o)
						}
						r.push(o)
					}
					return r
				}(t, r, a),
				s = i.length,
				l = t => {
					let n = 0;
					if (s > 1)
						for (; n < e.length - 2 && !(t < e[n + 1]); n++);
					const r = wa(e[n], e[n + 1], t);
					return i[n](r)
				};
			return n ? t => l(en(e[0], e[o - 1], t)) : l
		}

		function Sa({
			duration: e = 300,
			keyframes: t,
			times: n,
			ease: r = "easeInOut"
		}) {
			const a = Nr(r) ? r.map(Yr) : Yr(r),
				o = {
					done: !1,
					value: t[0]
				},
				i = function(e, t) {
					return e.map((e => e * t))
				}(n && n.length === t.length ? n : function(e) {
					const t = [0];
					return function(e, t) {
						const n = e[e.length - 1];
						for (let r = 1; r <= t; r++) {
							const a = wa(0, t, r);
							e.push(ea(n, 1, a))
						}
					}(t, e.length - 1), t
				}(t), e),
				s = ka(i, t, {
					ease: Array.isArray(a) ? a : (l = t, u = a, l.map((() => u || Fr)).splice(0, l.length - 1))
				});
			var l, u;
			return {
				calculatedDuration: e,
				next: t => (o.value = s(t), o.done = t >= e, o)
			}
		}

		function Ea(e, t) {
			return t ? e * (1e3 / t) : 0
		}
		const Ca = 5;

		function Pa(e, t, n) {
			const r = Math.max(t - Ca, 0);
			return Ea(n - e(r), t - r)
		}
		const Ta = .001,
			Aa = .01,
			Ra = 10,
			La = .05,
			Ma = 1;
		const Oa = 12;

		function _a(e, t) {
			return e * Math.sqrt(1 - t * t)
		}
		const Da = ["duration", "bounce"],
			Fa = ["stiffness", "damping", "mass"];

		function Na(e, t) {
			return t.some((t => void 0 !== e[t]))
		}

		function Ia({
			keyframes: e,
			restDelta: t,
			restSpeed: n,
			...r
		}) {
			const a = e[0],
				o = e[e.length - 1],
				i = {
					done: !1,
					value: a
				},
				{
					stiffness: s,
					damping: l,
					mass: u,
					velocity: c,
					duration: d,
					isResolvedFromDuration: f
				} = function(e) {
					let t = {
						velocity: 0,
						stiffness: 100,
						damping: 10,
						mass: 1,
						isResolvedFromDuration: !1,
						...e
					};
					if (!Na(e, Fa) && Na(e, Da)) {
						const n = function({
							duration: e = 800,
							bounce: t = .25,
							velocity: n = 0,
							mass: r = 1
						}) {
							let a, o;
							bt(e <= xr(Ra), "Spring duration must be 10 seconds or less");
							let i = 1 - t;
							i = en(La, Ma, i), e = en(Aa, Ra, kr(e)), i < 1 ? (a = t => {
								const r = t * i,
									a = r * e,
									o = r - n,
									s = _a(t, i),
									l = Math.exp(-a);
								return Ta - o / s * l
							}, o = t => {
								const r = t * i * e,
									o = r * n + n,
									s = Math.pow(i, 2) * Math.pow(t, 2) * e,
									l = Math.exp(-r),
									u = _a(Math.pow(t, 2), i);
								return (-a(t) + Ta > 0 ? -1 : 1) * ((o - s) * l) / u
							}) : (a = t => Math.exp(-t * e) * ((t - n) * e + 1) - Ta, o = t => Math.exp(-t * e) * (e * e * (n - t)));
							const s = function(e, t, n) {
								let r = n;
								for (let n = 1; n < Oa; n++) r -= e(r) / t(r);
								return r
							}(a, o, 5 / e);
							if (e = xr(e), isNaN(s)) return {
								stiffness: 100,
								damping: 10,
								duration: e
							};
							{
								const t = Math.pow(s, 2) * r;
								return {
									stiffness: t,
									damping: 2 * i * Math.sqrt(r * t),
									duration: e
								}
							}
						}(e);
						t = {
							...t,
							...n,
							velocity: 0,
							mass: 1
						}, t.isResolvedFromDuration = !0
					}
					return t
				}(r),
				p = c ? -kr(c) : 0,
				h = l / (2 * Math.sqrt(s * u)),
				m = o - a,
				g = kr(Math.sqrt(s / u)),
				y = Math.abs(m) < 5;
			let v;
			if (n || (n = y ? .01 : 2), t || (t = y ? .005 : .5), h < 1) {
				const e = _a(g, h);
				v = t => {
					const n = Math.exp(-h * g * t);
					return o - n * ((p + h * g * m) / e * Math.sin(e * t) + m * Math.cos(e * t))
				}
			} else if (1 === h) v = e => o - Math.exp(-g * e) * (m + (p + g * m) * e);
			else {
				const e = g * Math.sqrt(h * h - 1);
				v = t => {
					const n = Math.exp(-h * g * t),
						r = Math.min(e * t, 300);
					return o - n * ((p + h * g * m) * Math.sinh(r) + e * m * Math.cosh(r)) / e
				}
			}
			return {
				calculatedDuration: f && d || null,
				next: e => {
					const r = v(e);
					if (f) i.done = e >= d;
					else {
						let a = p;
						0 !== e && (a = h < 1 ? Pa(v, e, r) : 0);
						const s = Math.abs(a) <= n,
							l = Math.abs(o - r) <= t;
						i.done = s && l
					}
					return i.value = i.done ? o : r, i
				}
			}
		}

		function za({
			keyframes: e,
			velocity: t = 0,
			power: n = .8,
			timeConstant: r = 325,
			bounceDamping: a = 10,
			bounceStiffness: o = 500,
			modifyTarget: i,
			min: s,
			max: l,
			restDelta: u = .5,
			restSpeed: c
		}) {
			const d = e[0],
				f = {
					done: !1,
					value: d
				},
				p = e => void 0 === s ? l : void 0 === l || Math.abs(s - e) < Math.abs(l - e) ? s : l;
			let h = n * t;
			const m = d + h,
				g = void 0 === i ? m : i(m);
			g !== m && (h = g - d);
			const y = e => -h * Math.exp(-e / r),
				v = e => g + y(e),
				b = e => {
					const t = y(e),
						n = v(e);
					f.done = Math.abs(t) <= u, f.value = f.done ? g : n
				};
			let w, x;
			const k = e => {
				(e => void 0 !== s && e < s || void 0 !== l && e > l)(f.value) && (w = e, x = Ia({
					keyframes: [f.value, p(f.value)],
					velocity: Pa(v, e, f.value),
					damping: a,
					stiffness: o,
					restDelta: u,
					restSpeed: c
				}))
			};
			return k(0), {
				calculatedDuration: null,
				next: e => {
					let t = !1;
					return x || void 0 !== w || (t = !0, b(e), k(e)), void 0 !== w && e > w ? x.next(e - w) : (!t && b(e), f)
				}
			}
		}
		const ja = e => {
				const t = ({
					timestamp: t
				}) => e(t);
				return {
					start: () => it.update(t, !0),
					stop: () => st(t),
					now: () => Je.isProcessing ? Je.timestamp : performance.now()
				}
			},
			Va = 2e4;

		function Ba(e) {
			let t = 0,
				n = e.next(t);
			for (; !n.done && t < Va;) t += 50, n = e.next(t);
			return t >= Va ? 1 / 0 : t
		}
		const $a = {
			decay: za,
			inertia: za,
			tween: Sa,
			keyframes: Sa,
			spring: Ia
		};

		function Ua({
			autoplay: e = !0,
			delay: t = 0,
			driver: n = ja,
			keyframes: r,
			type: a = "keyframes",
			repeat: o = 0,
			repeatDelay: i = 0,
			repeatType: s = "loop",
			onPlay: l,
			onStop: u,
			onComplete: c,
			onUpdate: d,
			...f
		}) {
			let p, h, m = 1,
				g = !1;
			const y = () => {
				p && p(), h = new Promise((e => {
					p = e
				}))
			};
			let v;
			y();
			const b = $a[a] || Sa;
			let w;
			b !== Sa && "number" != typeof r[0] && (w = ka([0, 100], r, {
				clamp: !1
			}), r = [0, 100]);
			const x = b({
				...f,
				keyframes: r
			});
			let k;
			"mirror" === s && (k = b({
				...f,
				keyframes: [...r].reverse(),
				velocity: -(f.velocity || 0)
			}));
			let S = "idle",
				E = null,
				C = null,
				P = null;
			null === x.calculatedDuration && o && (x.calculatedDuration = Ba(x));
			const {
				calculatedDuration: T
			} = x;
			let A = 1 / 0,
				R = 1 / 0;
			null !== T && (A = T + i, R = A * (o + 1) - i);
			let L = 0;
			const M = e => {
					if (null === C) return;
					m > 0 && (C = Math.min(C, e)), m < 0 && (C = Math.min(e - R / m, C)), L = null !== E ? E : Math.round(e - C) * m;
					const n = L - t * (m >= 0 ? 1 : -1),
						a = m >= 0 ? n < 0 : n > R;
					L = Math.max(n, 0), "finished" === S && null === E && (L = R);
					let l = L,
						u = x;
					if (o) {
						const e = L / A;
						let t = Math.floor(e),
							n = e % 1;
						!n && e >= 1 && (n = 1), 1 === n && t--, t = Math.min(t, o + 1);
						const r = Boolean(t % 2);
						r && ("reverse" === s ? (n = 1 - n, i && (n -= i / A)) : "mirror" === s && (u = k));
						let a = en(0, 1, n);
						L > R && (a = "reverse" === s && r ? 1 : 0), l = a * A
					}
					const c = a ? {
						done: !1,
						value: r[0]
					} : u.next(l);
					w && (c.value = w(c.value));
					let {
						done: f
					} = c;
					a || null === T || (f = m >= 0 ? L >= R : L <= 0);
					const p = null === E && ("finished" === S || "running" === S && f);
					return d && d(c.value), p && D(), c
				},
				O = () => {
					v && v.stop(), v = void 0
				},
				_ = () => {
					S = "idle", O(), y(), C = P = null
				},
				D = () => {
					S = "finished", c && c(), O(), y()
				},
				F = () => {
					if (g) return;
					v || (v = n(M));
					const e = v.now();
					l && l(), null !== E ? C = e - E : C && "finished" !== S || (C = e), P = C, E = null, S = "running", v.start()
				};
			e && F();
			const N = {
				then: (e, t) => h.then(e, t),
				get time() {
					return kr(L)
				},
				set time(e) {
					e = xr(e), L = e, null === E && v && 0 !== m ? C = v.now() - e / m : E = e
				},
				get duration() {
					const e = null === x.calculatedDuration ? Ba(x) : x.calculatedDuration;
					return kr(e)
				},
				get speed() {
					return m
				},
				set speed(e) {
					e !== m && v && (m = e, N.time = kr(L))
				},
				get state() {
					return S
				},
				play: F,
				pause: () => {
					S = "paused", E = L
				},
				stop: () => {
					g = !0, "idle" !== S && (S = "idle", u && u(), _())
				},
				cancel: () => {
					null !== P && M(P), _()
				},
				complete: () => {
					S = "finished"
				},
				sample: e => (C = 0, M(e))
			};
			return N
		}
		const Wa = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]);
		const Ha = {
				type: "spring",
				stiffness: 500,
				damping: 25,
				restSpeed: 10
			},
			Ya = {
				type: "keyframes",
				duration: .8
			},
			Qa = {
				type: "keyframes",
				ease: [.25, .1, .35, 1],
				duration: .3
			},
			qa = (e, {
				keyframes: t
			}) => t.length > 2 ? Ya : Ht.has(e) ? e.startsWith("scale") ? {
				type: "spring",
				stiffness: 550,
				damping: 0 === t[1] ? 2 * Math.sqrt(550) : 30,
				restSpeed: 10
			} : Ha : Qa,
			Ga = (e, t) => !("zIndex" === e || "number" != typeof t && !Array.isArray(t) && ("string" != typeof t || !ha.test(t) && "0" !== t || t.startsWith("url("))),
			Xa = new Set(["brightness", "contrast", "saturate", "opacity"]);

		function Ka(e) {
			const [t, n] = e.slice(0, -1).split("(");
			if ("drop-shadow" === t) return e;
			const [r] = n.match(on) || [];
			if (!r) return e;
			const a = n.replace(r, "");
			let o = Xa.has(t) ? 1 : 0;
			return r !== n && (o *= 100), t + "(" + o + a + ")"
		}
		const Za = /([a-z-]*)\(.*?\)/g,
			Ja = {
				...ha,
				getAnimatableNone: e => {
					const t = e.match(Za);
					return t ? t.map(Ka).join(" ") : e
				}
			},
			eo = {
				...vn,
				color: Jr,
				backgroundColor: Jr,
				outlineColor: Jr,
				fill: Jr,
				stroke: Jr,
				borderColor: Jr,
				borderTopColor: Jr,
				borderRightColor: Jr,
				borderBottomColor: Jr,
				borderLeftColor: Jr,
				filter: Ja,
				WebkitFilter: Ja
			},
			to = e => eo[e];

		function no(e, t) {
			let n = to(e);
			return n !== Ja && (n = ha), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
		}
		const ro = e => /^0[^.\s]+$/.test(e);

		function ao(e) {
			return "number" == typeof e ? 0 === e : null !== e ? "none" === e || "0" === e || ro(e) : void 0
		}

		function oo(e, t) {
			return e[t] || e.default || e
		}
		const io = (e, t, n, r = {}) => a => {
			const o = oo(r, e) || {},
				i = o.delay || r.delay || 0;
			let {
				elapsed: s = 0
			} = r;
			s -= xr(i);
			const l = function(e, t, n, r) {
					const a = Ga(t, n);
					let o;
					o = Array.isArray(n) ? [...n] : [null, n];
					const i = void 0 !== r.from ? r.from : e.get();
					let s;
					const l = [];
					for (let e = 0; e < o.length; e++) null === o[e] && (o[e] = 0 === e ? i : o[e - 1]), ao(o[e]) && l.push(e), "string" == typeof o[e] && "none" !== o[e] && "0" !== o[e] && (s = o[e]);
					if (a && l.length && s)
						for (let e = 0; e < l.length; e++) o[l[e]] = no(t, s);
					return o
				}(t, e, n, o),
				u = l[0],
				c = l[l.length - 1],
				d = Ga(e, u),
				f = Ga(e, c);
			bt(d === f, `You are trying to animate ${e} from "${u}" to "${c}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${c} via the \`style\` property.`);
			let p = {
				keyframes: l,
				velocity: t.getVelocity(),
				ease: "easeOut",
				...o,
				delay: -s,
				onUpdate: e => {
					t.set(e), o.onUpdate && o.onUpdate(e)
				},
				onComplete: () => {
					a(), o.onComplete && o.onComplete()
				}
			};
			if (function({
					when: e,
					delay: t,
					delayChildren: n,
					staggerChildren: r,
					staggerDirection: a,
					repeat: o,
					repeatType: i,
					repeatDelay: s,
					from: l,
					elapsed: u,
					...c
				}) {
					return !!Object.keys(c).length
				}(o) || (p = {
					...p,
					...qa(e, p)
				}), p.duration && (p.duration = xr(p.duration)), p.repeatDelay && (p.repeatDelay = xr(p.repeatDelay)), !d || !f || !1 === o.type) return function({
				keyframes: e,
				delay: t,
				onUpdate: n,
				onComplete: r
			}) {
				const a = () => (n && n(e[e.length - 1]), r && r(), {
					time: 0,
					speed: 1,
					duration: 0,
					play: vt,
					pause: vt,
					stop: vt,
					then: e => (e(), Promise.resolve()),
					cancel: vt,
					complete: vt
				});
				return t ? Ua({
					keyframes: [0, 1],
					duration: 0,
					delay: t,
					onComplete: a
				}) : a()
			}(p);
			if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
				const n = function(e, t, {
					onUpdate: n,
					onComplete: r,
					...a
				}) {
					if (!Lr.waapi() || !Wa.has(t) || a.repeatDelay || "mirror" === a.repeatType || 0 === a.damping || "inertia" === a.type) return !1;
					let o, i, s = !1;
					const l = () => {
						i = new Promise((e => {
							o = e
						}))
					};
					l();
					let {
						keyframes: u,
						duration: c = 300,
						ease: d,
						times: f
					} = a;
					if (((e, t) => "spring" === t.type || "backgroundColor" === e || !Er(t.ease))(t, a)) {
						const e = Ua({
							...a,
							repeat: 0,
							delay: 0
						});
						let t = {
							done: !1,
							value: u[0]
						};
						const n = [];
						let r = 0;
						for (; !t.done && r < 2e4;) t = e.sample(r), n.push(t.value), r += 10;
						f = void 0, u = n, c = r - 10, d = "linear"
					}
					const p = function(e, t, n, {
							delay: r = 0,
							duration: a,
							repeat: o = 0,
							repeatType: i = "loop",
							ease: s,
							times: l
						} = {}) {
							const u = {
								[t]: n
							};
							l && (u.offset = l);
							const c = Tr(s);
							return Array.isArray(c) && (u.easing = c), e.animate(u, {
								delay: r,
								duration: a,
								easing: Array.isArray(c) ? "linear" : c,
								fill: "both",
								iterations: o + 1,
								direction: "reverse" === i ? "alternate" : "normal"
							})
						}(e.owner.current, t, u, {
							...a,
							duration: c,
							ease: d,
							times: f
						}),
						h = () => p.cancel(),
						m = () => {
							it.update(h), o(), l()
						};
					return p.onfinish = () => {
						e.set(function(e, {
							repeat: t,
							repeatType: n = "loop"
						}) {
							return e[t && "loop" !== n && t % 2 == 1 ? 0 : e.length - 1]
						}(u, a)), r && r(), m()
					}, {
						then: (e, t) => i.then(e, t),
						get time() {
							return kr(p.currentTime || 0)
						},
						set time(e) {
							p.currentTime = xr(e)
						},
						get speed() {
							return p.playbackRate
						},
						set speed(e) {
							p.playbackRate = e
						},
						get duration() {
							return kr(c)
						},
						play: () => {
							s || (p.play(), st(h))
						},
						pause: () => p.pause(),
						stop: () => {
							if (s = !0, "idle" === p.playState) return;
							const {
								currentTime: t
							} = p;
							if (t) {
								const n = Ua({
									...a,
									autoplay: !1
								});
								e.setWithVelocity(n.sample(t - 10).value, n.sample(t).value, 10)
							}
							m()
						},
						complete: () => p.finish(),
						cancel: m
					}
				}(t, e, p);
				if (n) return n
			}
			return Ua(p)
		};

		function so(e) {
			return Boolean(Qt(e) && e.add)
		}
		const lo = e => /^\-?\d*\.?\d+$/.test(e);

		function uo(e, t) {
			-1 === e.indexOf(t) && e.push(t)
		}

		function co(e, t) {
			const n = e.indexOf(t);
			n > -1 && e.splice(n, 1)
		}
		class fo {
			constructor() {
				this.subscriptions = []
			}
			add(e) {
				return uo(this.subscriptions, e), () => co(this.subscriptions, e)
			}
			notify(e, t, n) {
				const r = this.subscriptions.length;
				if (r)
					if (1 === r) this.subscriptions[0](e, t, n);
					else
						for (let a = 0; a < r; a++) {
							const r = this.subscriptions[a];
							r && r(e, t, n)
						}
			}
			getSize() {
				return this.subscriptions.length
			}
			clear() {
				this.subscriptions.length = 0
			}
		}
		class po {
			constructor(e, t = {}) {
				var n;
				this.version = "10.12.18", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (e, t = !0) => {
					this.prev = this.current, this.current = e;
					const {
						delta: n,
						timestamp: r
					} = Je;
					this.lastUpdated !== r && (this.timeDelta = n, this.lastUpdated = r, it.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), t && this.events.renderRequest && this.events.renderRequest.notify(this.current)
				}, this.scheduleVelocityCheck = () => it.postRender(this.velocityCheck), this.velocityCheck = ({
					timestamp: e
				}) => {
					e !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
				}, this.hasAnimated = !1, this.prev = this.current = e, this.canTrackVelocity = (n = this.current, !isNaN(parseFloat(n))), this.owner = t.owner
			}
			onChange(e) {
				return this.on("change", e)
			}
			on(e, t) {
				this.events[e] || (this.events[e] = new fo);
				const n = this.events[e].add(t);
				return "change" === e ? () => {
					n(), it.read((() => {
						this.events.change.getSize() || this.stop()
					}))
				} : n
			}
			clearListeners() {
				for (const e in this.events) this.events[e].clear()
			}
			attach(e, t) {
				this.passiveEffect = e, this.stopPassiveEffect = t
			}
			set(e, t = !0) {
				t && this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e, t)
			}
			setWithVelocity(e, t, n) {
				this.set(t), this.prev = e, this.timeDelta = n
			}
			jump(e) {
				this.updateAndNotify(e), this.prev = e, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
			}
			get() {
				return this.current
			}
			getPrevious() {
				return this.prev
			}
			getVelocity() {
				return this.canTrackVelocity ? Ea(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
			}
			start(e) {
				return this.stop(), new Promise((t => {
					this.hasAnimated = !0, this.animation = e(t), this.events.animationStart && this.events.animationStart.notify()
				})).then((() => {
					this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
				}))
			}
			stop() {
				this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
			}
			isAnimating() {
				return !!this.animation
			}
			clearAnimation() {
				delete this.animation
			}
			destroy() {
				this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
			}
		}

		function ho(e, t) {
			return new po(e, t)
		}
		const mo = e => t => t.test(e),
			go = [tn, pn, fn, dn, mn, hn, {
				test: e => "auto" === e,
				parse: e => e
			}],
			yo = e => go.find(mo(e)),
			vo = [...go, Jr, ha],
			bo = e => vo.find(mo(e));

		function wo(e, t, n) {
			e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ho(n))
		}

		function xo(e, t) {
			if (t) return (t[e] || t.default || t).from
		}

		function ko({
			protectedKeys: e,
			needsAnimating: t
		}, n) {
			const r = e.hasOwnProperty(n) && !0 !== t[n];
			return t[n] = !1, r
		}

		function So(e, t, {
			delay: n = 0,
			transitionOverride: r,
			type: a
		} = {}) {
			let {
				transition: o = e.getDefaultTransition(),
				transitionEnd: i,
				...s
			} = e.makeTargetAnimatable(t);
			const l = e.getValue("willChange");
			r && (o = r);
			const u = [],
				c = a && e.animationState && e.animationState.getState()[a];
			for (const t in s) {
				const r = e.getValue(t),
					a = s[t];
				if (!r || void 0 === a || c && ko(c, t)) continue;
				const i = {
					delay: n,
					elapsed: 0,
					...o
				};
				if (window.HandoffAppearAnimations && !r.hasAnimated) {
					const n = e.getProps()[wr];
					n && (i.elapsed = window.HandoffAppearAnimations(n, t, r, it))
				}
				r.start(io(t, r, a, e.shouldReduceMotion && Ht.has(t) ? {
					type: !1
				} : i));
				const d = r.animation;
				so(l) && (l.add(t), d.then((() => l.remove(t)))), u.push(d)
			}
			return i && Promise.all(u).then((() => {
				i && function(e, t) {
					const n = br(e, t);
					let {
						transitionEnd: r = {},
						transition: a = {},
						...o
					} = n ? e.makeTargetAnimatable(n, !1) : {};
					o = {
						...o,
						...r
					};
					for (const t in o) wo(e, t, Wn(o[t]))
				}(e, i)
			})), u
		}

		function Eo(e, t, n = {}) {
			const r = br(e, t, n.custom);
			let {
				transition: a = e.getDefaultTransition() || {}
			} = r || {};
			n.transitionOverride && (a = n.transitionOverride);
			const o = r ? () => Promise.all(So(e, r, n)) : () => Promise.resolve(),
				i = e.variantChildren && e.variantChildren.size ? (r = 0) => {
					const {
						delayChildren: o = 0,
						staggerChildren: i,
						staggerDirection: s
					} = a;
					return function(e, t, n = 0, r = 0, a = 1, o) {
						const i = [],
							s = (e.variantChildren.size - 1) * r,
							l = 1 === a ? (e = 0) => e * r : (e = 0) => s - e * r;
						return Array.from(e.variantChildren).sort(Co).forEach(((e, r) => {
							e.notify("AnimationStart", t), i.push(Eo(e, t, {
								...o,
								delay: n + l(r)
							}).then((() => e.notify("AnimationComplete", t))))
						})), Promise.all(i)
					}(e, t, o + r, i, s, n)
				} : () => Promise.resolve(),
				{
					when: s
				} = a;
			if (s) {
				const [e, t] = "beforeChildren" === s ? [o, i] : [i, o];
				return e().then((() => t()))
			}
			return Promise.all([o(), i(n.delay)])
		}

		function Co(e, t) {
			return e.sortNodePosition(t)
		}
		const Po = [...Rt].reverse(),
			To = Rt.length;

		function Ao(e) {
			let t = function(e) {
				return t => Promise.all(t.map((({
					animation: t,
					options: n
				}) => function(e, t, n = {}) {
					let r;
					if (e.notify("AnimationStart", t), Array.isArray(t)) {
						const a = t.map((t => Eo(e, t, n)));
						r = Promise.all(a)
					} else if ("string" == typeof t) r = Eo(e, t, n);
					else {
						const a = "function" == typeof t ? br(e, t, n.custom) : t;
						r = Promise.all(So(e, a, n))
					}
					return r.then((() => e.notify("AnimationComplete", t)))
				}(e, t, n))))
			}(e);
			const n = {
				animate: Ro(!0),
				whileInView: Ro(),
				whileHover: Ro(),
				whileTap: Ro(),
				whileDrag: Ro(),
				whileFocus: Ro(),
				exit: Ro()
			};
			let r = !0;
			const a = (t, n) => {
				const r = br(e, n);
				if (r) {
					const {
						transition: e,
						transitionEnd: n,
						...a
					} = r;
					t = {
						...t,
						...a,
						...n
					}
				}
				return t
			};

			function o(o, i) {
				const s = e.getProps(),
					l = e.getVariantContext(!0) || {},
					u = [],
					c = new Set;
				let d = {},
					f = 1 / 0;
				for (let t = 0; t < To; t++) {
					const m = Po[t],
						g = n[m],
						y = void 0 !== s[m] ? s[m] : l[m],
						v = Tt(y),
						b = m === i ? g.isActive : null;
					!1 === b && (f = t);
					let w = y === l[m] && y !== s[m] && v;
					if (w && r && e.manuallyAnimateOnMount && (w = !1), g.protectedKeys = {
							...d
						}, !g.isActive && null === b || !y && !g.prevProp || At(y) || "boolean" == typeof y) continue;
					const x = (p = g.prevProp, "string" == typeof(h = y) ? h !== p : !!Array.isArray(h) && !vr(h, p));
					let k = x || m === i && g.isActive && !w && v || t > f && v;
					const S = Array.isArray(y) ? y : [y];
					let E = S.reduce(a, {});
					!1 === b && (E = {});
					const {
						prevResolvedValues: C = {}
					} = g, P = {
						...C,
						...E
					}, T = e => {
						k = !0, c.delete(e), g.needsAnimating[e] = !0
					};
					for (const e in P) {
						const t = E[e],
							n = C[e];
						d.hasOwnProperty(e) || (t !== n ? $n(t) && $n(n) ? !vr(t, n) || x ? T(e) : g.protectedKeys[e] = !0 : void 0 !== t ? T(e) : c.add(e) : void 0 !== t && c.has(e) ? T(e) : g.protectedKeys[e] = !0)
					}
					g.prevProp = y, g.prevResolvedValues = E, g.isActive && (d = {
						...d,
						...E
					}), r && e.blockInitialAnimation && (k = !1), k && !w && u.push(...S.map((e => ({
						animation: e,
						options: {
							type: m,
							...o
						}
					}))))
				}
				var p, h;
				if (c.size) {
					const t = {};
					c.forEach((n => {
						const r = e.getBaseTarget(n);
						void 0 !== r && (t[n] = r)
					})), u.push({
						animation: t
					})
				}
				let m = Boolean(u.length);
				return r && !1 === s.initial && !e.manuallyAnimateOnMount && (m = !1), r = !1, m ? t(u) : Promise.resolve()
			}
			return {
				animateChanges: o,
				setActive: function(t, r, a) {
					var i;
					if (n[t].isActive === r) return Promise.resolve();
					null === (i = e.variantChildren) || void 0 === i || i.forEach((e => {
						var n;
						return null === (n = e.animationState) || void 0 === n ? void 0 : n.setActive(t, r)
					})), n[t].isActive = r;
					const s = o(a, t);
					for (const e in n) n[e].protectedKeys = {};
					return s
				},
				setAnimateFunction: function(n) {
					t = n(e)
				},
				getState: () => n
			}
		}

		function Ro(e = !1) {
			return {
				isActive: e,
				protectedKeys: {},
				needsAnimating: {},
				prevResolvedValues: {}
			}
		}
		let Lo = 0;
		const Mo = {
				animation: {
					Feature: class extends lr {
						constructor(e) {
							super(e), e.animationState || (e.animationState = Ao(e))
						}
						updateAnimationControlsSubscription() {
							const {
								animate: e
							} = this.node.getProps();
							this.unmount(), At(e) && (this.unmount = e.subscribe(this.node))
						}
						mount() {
							this.updateAnimationControlsSubscription()
						}
						update() {
							const {
								animate: e
							} = this.node.getProps(), {
								animate: t
							} = this.node.prevProps || {};
							e !== t && this.updateAnimationControlsSubscription()
						}
						unmount() {}
					}
				},
				exit: {
					Feature: class extends lr {
						constructor() {
							super(...arguments), this.id = Lo++
						}
						update() {
							if (!this.node.presenceContext) return;
							const {
								isPresent: e,
								onExitComplete: t,
								custom: n
							} = this.node.presenceContext, {
								isPresent: r
							} = this.node.prevPresenceContext || {};
							if (!this.node.animationState || e === r) return;
							const a = this.node.animationState.setActive("exit", !e, {
								custom: null != n ? n : this.node.getProps().custom
							});
							t && !e && a.then((() => t(this.id)))
						}
						mount() {
							const {
								register: e
							} = this.node.presenceContext || {};
							e && (this.unmount = e(this.id))
						}
						unmount() {}
					}
				}
			},
			Oo = (e, t) => Math.abs(e - t);
		class _o {
			constructor(e, t, {
				transformPagePoint: n
			} = {}) {
				if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
						if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
						const e = No(this.lastMoveEventInfo, this.history),
							t = null !== this.startEvent,
							n = function(e, t) {
								const n = Oo(e.x, t.x),
									r = Oo(e.y, t.y);
								return Math.sqrt(n ** 2 + r ** 2)
							}(e.offset, {
								x: 0,
								y: 0
							}) >= 3;
						if (!t && !n) return;
						const {
							point: r
						} = e, {
							timestamp: a
						} = Je;
						this.history.push({
							...r,
							timestamp: a
						});
						const {
							onStart: o,
							onMove: i
						} = this.handlers;
						t || (o && o(this.lastMoveEvent, e), this.startEvent = this.lastMoveEvent), i && i(this.lastMoveEvent, e)
					}, this.handlePointerMove = (e, t) => {
						this.lastMoveEvent = e, this.lastMoveEventInfo = Do(t, this.transformPagePoint), it.update(this.updatePoint, !0)
					}, this.handlePointerUp = (e, t) => {
						if (this.end(), !this.lastMoveEvent || !this.lastMoveEventInfo) return;
						const {
							onEnd: n,
							onSessionEnd: r
						} = this.handlers, a = No("pointercancel" === e.type ? this.lastMoveEventInfo : Do(t, this.transformPagePoint), this.history);
						this.startEvent && n && n(e, a), r && r(e, a)
					}, !Kn(e)) return;
				this.handlers = t, this.transformPagePoint = n;
				const r = Do(Zn(e), this.transformPagePoint),
					{
						point: a
					} = r,
					{
						timestamp: o
					} = Je;
				this.history = [{
					...a,
					timestamp: o
				}];
				const {
					onSessionStart: i
				} = t;
				i && i(e, No(r, this.history)), this.removeListeners = nr(er(window, "pointermove", this.handlePointerMove), er(window, "pointerup", this.handlePointerUp), er(window, "pointercancel", this.handlePointerUp))
			}
			updateHandlers(e) {
				this.handlers = e
			}
			end() {
				this.removeListeners && this.removeListeners(), st(this.updatePoint)
			}
		}

		function Do(e, t) {
			return t ? {
				point: t(e.point)
			} : e
		}

		function Fo(e, t) {
			return {
				x: e.x - t.x,
				y: e.y - t.y
			}
		}

		function No({
			point: e
		}, t) {
			return {
				point: e,
				delta: Fo(e, zo(t)),
				offset: Fo(e, Io(t)),
				velocity: jo(t, .1)
			}
		}

		function Io(e) {
			return e[0]
		}

		function zo(e) {
			return e[e.length - 1]
		}

		function jo(e, t) {
			if (e.length < 2) return {
				x: 0,
				y: 0
			};
			let n = e.length - 1,
				r = null;
			const a = zo(e);
			for (; n >= 0 && (r = e[n], !(a.timestamp - r.timestamp > xr(t)));) n--;
			if (!r) return {
				x: 0,
				y: 0
			};
			const o = kr(a.timestamp - r.timestamp);
			if (0 === o) return {
				x: 0,
				y: 0
			};
			const i = {
				x: (a.x - r.x) / o,
				y: (a.y - r.y) / o
			};
			return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i
		}

		function Vo(e) {
			return e.max - e.min
		}

		function Bo(e, t = 0, n = .01) {
			return Math.abs(e - t) <= n
		}

		function $o(e, t, n, r = .5) {
			e.origin = r, e.originPoint = ea(t.min, t.max, e.origin), e.scale = Vo(n) / Vo(t), (Bo(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = ea(n.min, n.max, e.origin) - e.originPoint, (Bo(e.translate) || isNaN(e.translate)) && (e.translate = 0)
		}

		function Uo(e, t, n, r) {
			$o(e.x, t.x, n.x, r ? r.originX : void 0), $o(e.y, t.y, n.y, r ? r.originY : void 0)
		}

		function Wo(e, t, n) {
			e.min = n.min + t.min, e.max = e.min + Vo(t)
		}

		function Ho(e, t, n) {
			e.min = t.min - n.min, e.max = e.min + Vo(t)
		}

		function Yo(e, t, n) {
			Ho(e.x, t.x, n.x), Ho(e.y, t.y, n.y)
		}

		function Qo(e, t, n) {
			return {
				min: void 0 !== t ? e.min + t : void 0,
				max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0
			}
		}

		function qo(e, t) {
			let n = t.min - e.min,
				r = t.max - e.max;
			return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
				min: n,
				max: r
			}
		}
		const Go = .35;

		function Xo(e, t, n) {
			return {
				min: Ko(e, t),
				max: Ko(e, n)
			}
		}

		function Ko(e, t) {
			return "number" == typeof e ? e : e[t] || 0
		}
		const Zo = () => ({
				x: {
					translate: 0,
					scale: 1,
					origin: 0,
					originPoint: 0
				},
				y: {
					translate: 0,
					scale: 1,
					origin: 0,
					originPoint: 0
				}
			}),
			Jo = () => ({
				x: {
					min: 0,
					max: 0
				},
				y: {
					min: 0,
					max: 0
				}
			});

		function ei(e) {
			return [e("x"), e("y")]
		}

		function ti({
			top: e,
			left: t,
			right: n,
			bottom: r
		}) {
			return {
				x: {
					min: t,
					max: n
				},
				y: {
					min: e,
					max: r
				}
			}
		}

		function ni(e) {
			return void 0 === e || 1 === e
		}

		function ri({
			scale: e,
			scaleX: t,
			scaleY: n
		}) {
			return !ni(e) || !ni(t) || !ni(n)
		}

		function ai(e) {
			return ri(e) || oi(e) || e.z || e.rotate || e.rotateX || e.rotateY
		}

		function oi(e) {
			return ii(e.x) || ii(e.y)
		}

		function ii(e) {
			return e && "0%" !== e
		}

		function si(e, t, n) {
			return n + t * (e - n)
		}

		function li(e, t, n, r, a) {
			return void 0 !== a && (e = si(e, a, r)), si(e, n, r) + t
		}

		function ui(e, t = 0, n = 1, r, a) {
			e.min = li(e.min, t, n, r, a), e.max = li(e.max, t, n, r, a)
		}

		function ci(e, {
			x: t,
			y: n
		}) {
			ui(e.x, t.translate, t.scale, t.originPoint), ui(e.y, n.translate, n.scale, n.originPoint)
		}

		function di(e) {
			return Number.isInteger(e) || e > 1.0000000000001 || e < .999999999999 ? e : 1
		}

		function fi(e, t) {
			e.min = e.min + t, e.max = e.max + t
		}

		function pi(e, t, [n, r, a]) {
			const o = void 0 !== t[a] ? t[a] : .5,
				i = ea(e.min, e.max, o);
			ui(e, t[n], t[r], i, t.scale)
		}
		const hi = ["x", "scaleX", "originX"],
			mi = ["y", "scaleY", "originY"];

		function gi(e, t) {
			pi(e.x, t, hi), pi(e.y, t, mi)
		}

		function yi(e, t) {
			return ti(function(e, t) {
				if (!t) return e;
				const n = t({
						x: e.left,
						y: e.top
					}),
					r = t({
						x: e.right,
						y: e.bottom
					});
				return {
					top: n.y,
					left: n.x,
					bottom: r.y,
					right: r.x
				}
			}(e.getBoundingClientRect(), t))
		}
		const vi = new WeakMap;
		class bi {
			constructor(e) {
				this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
					x: 0,
					y: 0
				}, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Jo(), this.visualElement = e
			}
			start(e, {
				snapToCursor: t = !1
			} = {}) {
				const {
					presenceContext: n
				} = this.visualElement;
				n && !1 === n.isPresent || (this.panSession = new _o(e, {
					onSessionStart: e => {
						this.stopAnimation(), t && this.snapToCursor(Zn(e, "page").point)
					},
					onStart: (e, t) => {
						const {
							drag: n,
							dragPropagation: r,
							onDragStart: a
						} = this.getProps();
						if (n && !r && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = ir(n), !this.openGlobalLock)) return;
						this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), ei((e => {
							let t = this.getAxisMotionValue(e).get() || 0;
							if (fn.test(t)) {
								const {
									projection: n
								} = this.visualElement;
								if (n && n.layout) {
									const r = n.layout.layoutBox[e];
									r && (t = Vo(r) * (parseFloat(t) / 100))
								}
							}
							this.originPoint[e] = t
						})), a && it.update((() => a(e, t)), !1, !0);
						const {
							animationState: o
						} = this.visualElement;
						o && o.setActive("whileDrag", !0)
					},
					onMove: (e, t) => {
						const {
							dragPropagation: n,
							dragDirectionLock: r,
							onDirectionLock: a,
							onDrag: o
						} = this.getProps();
						if (!n && !this.openGlobalLock) return;
						const {
							offset: i
						} = t;
						if (r && null === this.currentDirection) return this.currentDirection = function(e, t = 10) {
							let n = null;
							return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n
						}(i), void(null !== this.currentDirection && a && a(this.currentDirection));
						this.updateAxis("x", t.point, i), this.updateAxis("y", t.point, i), this.visualElement.render(), o && o(e, t)
					},
					onSessionEnd: (e, t) => this.stop(e, t)
				}, {
					transformPagePoint: this.visualElement.getTransformPagePoint()
				}))
			}
			stop(e, t) {
				const n = this.isDragging;
				if (this.cancel(), !n) return;
				const {
					velocity: r
				} = t;
				this.startAnimation(r);
				const {
					onDragEnd: a
				} = this.getProps();
				a && it.update((() => a(e, t)))
			}
			cancel() {
				this.isDragging = !1;
				const {
					projection: e,
					animationState: t
				} = this.visualElement;
				e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
				const {
					dragPropagation: n
				} = this.getProps();
				!n && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), t && t.setActive("whileDrag", !1)
			}
			updateAxis(e, t, n) {
				const {
					drag: r
				} = this.getProps();
				if (!n || !wi(e, r, this.currentDirection)) return;
				const a = this.getAxisMotionValue(e);
				let o = this.originPoint[e] + n[e];
				this.constraints && this.constraints[e] && (o = function(e, {
					min: t,
					max: n
				}, r) {
					return void 0 !== t && e < t ? e = r ? ea(t, e, r.min) : Math.max(e, t) : void 0 !== n && e > n && (e = r ? ea(n, e, r.max) : Math.min(e, n)), e
				}(o, this.constraints[e], this.elastic[e])), a.set(o)
			}
			resolveConstraints() {
				const {
					dragConstraints: e,
					dragElastic: t
				} = this.getProps(), {
					layout: n
				} = this.visualElement.projection || {}, r = this.constraints;
				e && Pt(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!e || !n) && function(e, {
					top: t,
					left: n,
					bottom: r,
					right: a
				}) {
					return {
						x: Qo(e.x, n, a),
						y: Qo(e.y, t, r)
					}
				}(n.layoutBox, e), this.elastic = function(e = Go) {
					return !1 === e ? e = 0 : !0 === e && (e = Go), {
						x: Xo(e, "left", "right"),
						y: Xo(e, "top", "bottom")
					}
				}(t), r !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && ei((e => {
					this.getAxisMotionValue(e) && (this.constraints[e] = function(e, t) {
						const n = {};
						return void 0 !== t.min && (n.min = t.min - e.min), void 0 !== t.max && (n.max = t.max - e.min), n
					}(n.layoutBox[e], this.constraints[e]))
				}))
			}
			resolveRefConstraints() {
				const {
					dragConstraints: e,
					onMeasureDragConstraints: t
				} = this.getProps();
				if (!e || !Pt(e)) return !1;
				const n = e.current;
				wt(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
				const {
					projection: r
				} = this.visualElement;
				if (!r || !r.layout) return !1;
				const a = function(e, t, n) {
					const r = yi(e, n),
						{
							scroll: a
						} = t;
					return a && (fi(r.x, a.offset.x), fi(r.y, a.offset.y)), r
				}(n, r.root, this.visualElement.getTransformPagePoint());
				let o = function(e, t) {
					return {
						x: qo(e.x, t.x),
						y: qo(e.y, t.y)
					}
				}(r.layout.layoutBox, a);
				if (t) {
					const e = t(function({
						x: e,
						y: t
					}) {
						return {
							top: t.min,
							right: e.max,
							bottom: t.max,
							left: e.min
						}
					}(o));
					this.hasMutatedConstraints = !!e, e && (o = ti(e))
				}
				return o
			}
			startAnimation(e) {
				const {
					drag: t,
					dragMomentum: n,
					dragElastic: r,
					dragTransition: a,
					dragSnapToOrigin: o,
					onDragTransitionEnd: i
				} = this.getProps(), s = this.constraints || {}, l = ei((i => {
					if (!wi(i, t, this.currentDirection)) return;
					let l = s && s[i] || {};
					o && (l = {
						min: 0,
						max: 0
					});
					const u = r ? 200 : 1e6,
						c = r ? 40 : 1e7,
						d = {
							type: "inertia",
							velocity: n ? e[i] : 0,
							bounceStiffness: u,
							bounceDamping: c,
							timeConstant: 750,
							restDelta: 1,
							restSpeed: 10,
							...a,
							...l
						};
					return this.startAxisValueAnimation(i, d)
				}));
				return Promise.all(l).then(i)
			}
			startAxisValueAnimation(e, t) {
				const n = this.getAxisMotionValue(e);
				return n.start(io(e, n, 0, t))
			}
			stopAnimation() {
				ei((e => this.getAxisMotionValue(e).stop()))
			}
			getAxisMotionValue(e) {
				const t = "_drag" + e.toUpperCase(),
					n = this.visualElement.getProps();
				return n[t] || this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0)
			}
			snapToCursor(e) {
				ei((t => {
					const {
						drag: n
					} = this.getProps();
					if (!wi(t, n, this.currentDirection)) return;
					const {
						projection: r
					} = this.visualElement, a = this.getAxisMotionValue(t);
					if (r && r.layout) {
						const {
							min: n,
							max: o
						} = r.layout.layoutBox[t];
						a.set(e[t] - ea(n, o, .5))
					}
				}))
			}
			scalePositionWithinConstraints() {
				if (!this.visualElement.current) return;
				const {
					drag: e,
					dragConstraints: t
				} = this.getProps(), {
					projection: n
				} = this.visualElement;
				if (!Pt(t) || !n || !this.constraints) return;
				this.stopAnimation();
				const r = {
					x: 0,
					y: 0
				};
				ei((e => {
					const t = this.getAxisMotionValue(e);
					if (t) {
						const n = t.get();
						r[e] = function(e, t) {
							let n = .5;
							const r = Vo(e),
								a = Vo(t);
							return a > r ? n = wa(t.min, t.max - r, e.min) : r > a && (n = wa(e.min, e.max - a, t.min)), en(0, 1, n)
						}({
							min: n,
							max: n
						}, this.constraints[e])
					}
				}));
				const {
					transformTemplate: a
				} = this.visualElement.getProps();
				this.visualElement.current.style.transform = a ? a({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), ei((t => {
					if (!wi(t, e, null)) return;
					const n = this.getAxisMotionValue(t),
						{
							min: a,
							max: o
						} = this.constraints[t];
					n.set(ea(a, o, r[t]))
				}))
			}
			addListeners() {
				if (!this.visualElement.current) return;
				vi.set(this.visualElement, this);
				const e = er(this.visualElement.current, "pointerdown", (e => {
						const {
							drag: t,
							dragListener: n = !0
						} = this.getProps();
						t && n && this.start(e)
					})),
					t = () => {
						const {
							dragConstraints: e
						} = this.getProps();
						Pt(e) && (this.constraints = this.resolveRefConstraints())
					},
					{
						projection: n
					} = this.visualElement,
					r = n.addEventListener("measure", t);
				n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()), t();
				const a = Xn(window, "resize", (() => this.scalePositionWithinConstraints())),
					o = n.addEventListener("didUpdate", (({
						delta: e,
						hasLayoutChanged: t
					}) => {
						this.isDragging && t && (ei((t => {
							const n = this.getAxisMotionValue(t);
							n && (this.originPoint[t] += e[t].translate, n.set(n.get() + e[t].translate))
						})), this.visualElement.render())
					}));
				return () => {
					a(), e(), r(), o && o()
				}
			}
			getProps() {
				const e = this.visualElement.getProps(),
					{
						drag: t = !1,
						dragDirectionLock: n = !1,
						dragPropagation: r = !1,
						dragConstraints: a = !1,
						dragElastic: o = Go,
						dragMomentum: i = !0
					} = e;
				return {
					...e,
					drag: t,
					dragDirectionLock: n,
					dragPropagation: r,
					dragConstraints: a,
					dragElastic: o,
					dragMomentum: i
				}
			}
		}

		function wi(e, t, n) {
			return !(!0 !== t && t !== e || null !== n && n !== e)
		}
		const xi = e => (t, n) => {
				e && it.update((() => e(t, n)))
			},
			ki = {
				hasAnimatedSinceResize: !0,
				hasEverUpdated: !1
			};

		function Si(e, t) {
			return t.max === t.min ? 0 : e / (t.max - t.min) * 100
		}
		const Ei = {
				correct: (e, t) => {
					if (!t.target) return e;
					if ("string" == typeof e) {
						if (!pn.test(e)) return e;
						e = parseFloat(e)
					}
					return `${Si(e,t.target.x)}% ${Si(e,t.target.y)}%`
				}
			},
			Ci = {
				correct: (e, {
					treeScale: t,
					projectionDelta: n
				}) => {
					const r = e,
						a = ha.parse(e);
					if (a.length > 5) return r;
					const o = ha.createTransformer(e),
						i = "number" != typeof a[0] ? 1 : 0,
						s = n.x.scale * t.x,
						l = n.y.scale * t.y;
					a[0 + i] /= s, a[1 + i] /= l;
					const u = ea(s, l, .5);
					return "number" == typeof a[2 + i] && (a[2 + i] /= u), "number" == typeof a[3 + i] && (a[3 + i] /= u), o(a)
				}
			};
		class Pi extends e.Component {
			componentDidMount() {
				const {
					visualElement: e,
					layoutGroup: t,
					switchLayoutGroup: n,
					layoutId: r
				} = this.props, {
					projection: a
				} = e;
				var o;
				o = Ai, Object.assign(Ut, o), a && (t.group && t.group.add(a), n && n.register && r && n.register(a), a.root.didUpdate(), a.addEventListener("animationComplete", (() => {
					this.safeToRemove()
				})), a.setOptions({
					...a.options,
					onExitComplete: () => this.safeToRemove()
				})), ki.hasEverUpdated = !0
			}
			getSnapshotBeforeUpdate(e) {
				const {
					layoutDependency: t,
					visualElement: n,
					drag: r,
					isPresent: a
				} = this.props, o = n.projection;
				return o ? (o.isPresent = a, r || e.layoutDependency !== t || void 0 === t ? o.willUpdate() : this.safeToRemove(), e.isPresent !== a && (a ? o.promote() : o.relegate() || it.postRender((() => {
					const e = o.getStack();
					e && e.members.length || this.safeToRemove()
				}))), null) : null
			}
			componentDidUpdate() {
				const {
					projection: e
				} = this.props.visualElement;
				e && (e.root.didUpdate(), queueMicrotask((() => {
					!e.currentAnimation && e.isLead() && this.safeToRemove()
				})))
			}
			componentWillUnmount() {
				const {
					visualElement: e,
					layoutGroup: t,
					switchLayoutGroup: n
				} = this.props, {
					projection: r
				} = e;
				r && (r.scheduleCheckAfterUnmount(), t && t.group && t.group.remove(r), n && n.deregister && n.deregister(r))
			}
			safeToRemove() {
				const {
					safeToRemove: e
				} = this.props;
				e && e()
			}
			render() {
				return null
			}
		}

		function Ti(t) {
			const [n, r] = function() {
				const t = (0, e.useContext)(dt);
				if (null === t) return [!0, null];
				const {
					isPresent: n,
					onExitComplete: r,
					register: a
				} = t, o = (0, e.useId)();
				return (0, e.useEffect)((() => a(o)), []), !n && r ? [!1, () => r && r(o)] : [!0]
			}(), a = (0, e.useContext)(yt);
			return e.createElement(Pi, {
				...t,
				layoutGroup: a,
				switchLayoutGroup: (0, e.useContext)(Nt),
				isPresent: n,
				safeToRemove: r
			})
		}
		const Ai = {
				borderRadius: {
					...Ei,
					applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
				},
				borderTopLeftRadius: Ei,
				borderTopRightRadius: Ei,
				borderBottomLeftRadius: Ei,
				borderBottomRightRadius: Ei,
				boxShadow: Ci
			},
			Ri = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
			Li = Ri.length,
			Mi = e => "string" == typeof e ? parseFloat(e) : e,
			Oi = e => "number" == typeof e || pn.test(e);

		function _i(e, t) {
			return void 0 !== e[t] ? e[t] : e.borderRadius
		}
		const Di = Ni(0, .5, Vr),
			Fi = Ni(.5, .95, vt);

		function Ni(e, t, n) {
			return r => r < e ? 0 : r > t ? 1 : n(wa(e, t, r))
		}

		function Ii(e, t) {
			e.min = t.min, e.max = t.max
		}

		function zi(e, t) {
			Ii(e.x, t.x), Ii(e.y, t.y)
		}

		function ji(e, t, n, r, a) {
			return e = si(e -= t, 1 / n, r), void 0 !== a && (e = si(e, 1 / a, r)), e
		}

		function Vi(e, t, [n, r, a], o, i) {
			! function(e, t = 0, n = 1, r = .5, a, o = e, i = e) {
				if (fn.test(t) && (t = parseFloat(t), t = ea(i.min, i.max, t / 100) - i.min), "number" != typeof t) return;
				let s = ea(o.min, o.max, r);
				e === o && (s -= t), e.min = ji(e.min, t, n, s, a), e.max = ji(e.max, t, n, s, a)
			}(e, t[n], t[r], t[a], t.scale, o, i)
		}
		const Bi = ["x", "scaleX", "originX"],
			$i = ["y", "scaleY", "originY"];

		function Ui(e, t, n, r) {
			Vi(e.x, t, Bi, n ? n.x : void 0, r ? r.x : void 0), Vi(e.y, t, $i, n ? n.y : void 0, r ? r.y : void 0)
		}

		function Wi(e) {
			return 0 === e.translate && 1 === e.scale
		}

		function Hi(e) {
			return Wi(e.x) && Wi(e.y)
		}

		function Yi(e, t) {
			return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
		}

		function Qi(e) {
			return Vo(e.x) / Vo(e.y)
		}
		class qi {
			constructor() {
				this.members = []
			}
			add(e) {
				uo(this.members, e), e.scheduleRender()
			}
			remove(e) {
				if (co(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
					const e = this.members[this.members.length - 1];
					e && this.promote(e)
				}
			}
			relegate(e) {
				const t = this.members.findIndex((t => e === t));
				if (0 === t) return !1;
				let n;
				for (let e = t; e >= 0; e--) {
					const t = this.members[e];
					if (!1 !== t.isPresent) {
						n = t;
						break
					}
				}
				return !!n && (this.promote(n), !0)
			}
			promote(e, t) {
				const n = this.lead;
				if (e !== n && (this.prevLead = n, this.lead = e, e.show(), n)) {
					n.instance && n.scheduleRender(), e.scheduleRender(), e.resumeFrom = n, t && (e.resumeFrom.preserveOpacity = !0), n.snapshot && (e.snapshot = n.snapshot, e.snapshot.latestValues = n.animationValues || n.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
					const {
						crossfade: r
					} = e.options;
					!1 === r && n.hide()
				}
			}
			exitAnimationComplete() {
				this.members.forEach((e => {
					const {
						options: t,
						resumingFrom: n
					} = e;
					t.onExitComplete && t.onExitComplete(), n && n.options.onExitComplete && n.options.onExitComplete()
				}))
			}
			scheduleRender() {
				this.members.forEach((e => {
					e.instance && e.scheduleRender(!1)
				}))
			}
			removeLeadSnapshot() {
				this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
			}
		}

		function Gi(e, t, n) {
			let r = "";
			const a = e.x.translate / t.x,
				o = e.y.translate / t.y;
			if ((a || o) && (r = `translate3d(${a}px, ${o}px, 0) `), 1 === t.x && 1 === t.y || (r += `scale(${1/t.x}, ${1/t.y}) `), n) {
				const {
					rotate: e,
					rotateX: t,
					rotateY: a
				} = n;
				e && (r += `rotate(${e}deg) `), t && (r += `rotateX(${t}deg) `), a && (r += `rotateY(${a}deg) `)
			}
			const i = e.x.scale * t.x,
				s = e.y.scale * t.y;
			return 1 === i && 1 === s || (r += `scale(${i}, ${s})`), r || "none"
		}
		const Xi = (e, t) => e.depth - t.depth;
		class Ki {
			constructor() {
				this.children = [], this.isDirty = !1
			}
			add(e) {
				uo(this.children, e), this.isDirty = !0
			}
			remove(e) {
				co(this.children, e), this.isDirty = !0
			}
			forEach(e) {
				this.isDirty && this.children.sort(Xi), this.isDirty = !1, this.children.forEach(e)
			}
		}
		const Zi = ["", "X", "Y", "Z"];
		let Ji = 0;
		const es = {
			type: "projectionFrame",
			totalNodes: 0,
			resolvedTargetDeltas: 0,
			recalculatedProjection: 0
		};

		function ts({
			attachResizeListener: e,
			defaultParent: t,
			measureScroll: n,
			checkIsScrollRoot: r,
			resetTransform: a
		}) {
			return class {
				constructor(e = {}, n = (null == t ? void 0 : t())) {
					this.id = Ji++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
						x: 1,
						y: 1
					}, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.checkUpdateFailed = () => {
						this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
					}, this.updateProjection = () => {
						var e;
						es.totalNodes = es.resolvedTargetDeltas = es.recalculatedProjection = 0, this.nodes.forEach(as), this.nodes.forEach(ds), this.nodes.forEach(fs), this.nodes.forEach(os), e = es, window.MotionDebug && window.MotionDebug.record(e)
					}, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = e, this.root = n ? n.root || n : this, this.path = n ? [...n.path, n] : [], this.parent = n, this.depth = n ? n.depth + 1 : 0;
					for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
					this.root === this && (this.nodes = new Ki)
				}
				addEventListener(e, t) {
					return this.eventHandlers.has(e) || this.eventHandlers.set(e, new fo), this.eventHandlers.get(e).add(t)
				}
				notifyListeners(e, ...t) {
					const n = this.eventHandlers.get(e);
					n && n.notify(...t)
				}
				hasListeners(e) {
					return this.eventHandlers.has(e)
				}
				mount(t, n = this.root.hasTreeAnimated) {
					if (this.instance) return;
					var r;
					this.isSVG = (r = t) instanceof SVGElement && "svg" !== r.tagName, this.instance = t;
					const {
						layoutId: a,
						layout: o,
						visualElement: i
					} = this.options;
					if (i && !i.current && i.mount(t), this.root.nodes.add(this), this.parent && this.parent.children.add(this), n && (o || a) && (this.isLayoutDirty = !0), e) {
						let n;
						const r = () => this.root.updateBlockedByResize = !1;
						e(t, (() => {
							this.root.updateBlockedByResize = !0, n && n(), n = function(e, t) {
								const n = performance.now(),
									r = ({
										timestamp: t
									}) => {
										const a = t - n;
										a >= 250 && (st(r), e(a - 250))
									};
								return it.read(r, !0), () => st(r)
							}(r), ki.hasAnimatedSinceResize && (ki.hasAnimatedSinceResize = !1, this.nodes.forEach(cs))
						}))
					}
					a && this.root.registerSharedNode(a, this), !1 !== this.options.animate && i && (a || o) && this.addEventListener("didUpdate", (({
						delta: e,
						hasLayoutChanged: t,
						hasRelativeTargetChanged: n,
						layout: r
					}) => {
						if (this.isTreeAnimationBlocked()) return this.target = void 0, void(this.relativeTarget = void 0);
						const a = this.options.transition || i.getDefaultTransition() || vs,
							{
								onLayoutAnimationStart: o,
								onLayoutAnimationComplete: s
							} = i.getProps(),
							l = !this.targetLayout || !Yi(this.targetLayout, r) || n,
							u = !t && n;
						if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || u || t && (l || !this.currentAnimation)) {
							this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(e, u);
							const t = {
								...oo(a, "layout"),
								onPlay: o,
								onComplete: s
							};
							(i.shouldReduceMotion || this.options.layoutRoot) && (t.delay = 0, t.type = !1), this.startAnimation(t)
						} else t || cs(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
						this.targetLayout = r
					}))
				}
				unmount() {
					this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
					const e = this.getStack();
					e && e.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, st(this.updateProjection)
				}
				blockUpdate() {
					this.updateManuallyBlocked = !0
				}
				unblockUpdate() {
					this.updateManuallyBlocked = !1
				}
				isUpdateBlocked() {
					return this.updateManuallyBlocked || this.updateBlockedByResize
				}
				isTreeAnimationBlocked() {
					return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
				}
				startUpdate() {
					this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(ps), this.animationId++)
				}
				getTransformTemplate() {
					const {
						visualElement: e
					} = this.options;
					return e && e.getProps().transformTemplate
				}
				willUpdate(e = !0) {
					if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) return void(this.options.onExitComplete && this.options.onExitComplete());
					if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
					this.isLayoutDirty = !0;
					for (let e = 0; e < this.path.length; e++) {
						const t = this.path[e];
						t.shouldResetTransform = !0, t.updateScroll("snapshot"), t.options.layoutRoot && t.willUpdate(!1)
					}
					const {
						layoutId: t,
						layout: n
					} = this.options;
					if (void 0 === t && !n) return;
					const r = this.getTransformTemplate();
					this.prevTransformTemplateValue = r ? r(this.latestValues, "") : void 0, this.updateSnapshot(), e && this.notifyListeners("willUpdate")
				}
				update() {
					if (this.updateScheduled = !1, this.isUpdateBlocked()) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(ss);
					this.isUpdating || this.nodes.forEach(ls), this.isUpdating = !1, this.nodes.forEach(us), this.nodes.forEach(ns), this.nodes.forEach(rs), this.clearAllSnapshots();
					const e = performance.now();
					Je.delta = en(0, 1e3 / 60, e - Je.timestamp), Je.timestamp = e, Je.isProcessing = !0, rt.update.process(Je), rt.preRender.process(Je), rt.render.process(Je), Je.isProcessing = !1
				}
				didUpdate() {
					this.updateScheduled || (this.updateScheduled = !0, queueMicrotask((() => this.update())))
				}
				clearAllSnapshots() {
					this.nodes.forEach(is), this.sharedNodes.forEach(hs)
				}
				scheduleUpdateProjection() {
					it.preRender(this.updateProjection, !1, !0)
				}
				scheduleCheckAfterUnmount() {
					it.postRender((() => {
						this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
					}))
				}
				updateSnapshot() {
					!this.snapshot && this.instance && (this.snapshot = this.measure())
				}
				updateLayout() {
					if (!this.instance) return;
					if (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead() || this.isLayoutDirty)) return;
					if (this.resumeFrom && !this.resumeFrom.instance)
						for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
					const e = this.layout;
					this.layout = this.measure(!1), this.layoutCorrected = Jo(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
					const {
						visualElement: t
					} = this.options;
					t && t.notify("LayoutMeasure", this.layout.layoutBox, e ? e.layoutBox : void 0)
				}
				updateScroll(e = "measure") {
					let t = Boolean(this.options.layoutScroll && this.instance);
					this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (t = !1), t && (this.scroll = {
						animationId: this.root.animationId,
						phase: e,
						isRoot: r(this.instance),
						offset: n(this.instance)
					})
				}
				resetTransform() {
					if (!a) return;
					const e = this.isLayoutDirty || this.shouldResetTransform,
						t = this.projectionDelta && !Hi(this.projectionDelta),
						n = this.getTransformTemplate(),
						r = n ? n(this.latestValues, "") : void 0,
						o = r !== this.prevTransformTemplateValue;
					e && (t || ai(this.latestValues) || o) && (a(this.instance, r), this.shouldResetTransform = !1, this.scheduleRender())
				}
				measure(e = !0) {
					const t = this.measurePageBox();
					let n = this.removeElementScroll(t);
					var r;
					return e && (n = this.removeTransform(n)), bs((r = n).x), bs(r.y), {
						animationId: this.root.animationId,
						measuredBox: t,
						layoutBox: n,
						latestValues: {},
						source: this.id
					}
				}
				measurePageBox() {
					const {
						visualElement: e
					} = this.options;
					if (!e) return Jo();
					const t = e.measureViewportBox(),
						{
							scroll: n
						} = this.root;
					return n && (fi(t.x, n.offset.x), fi(t.y, n.offset.y)), t
				}
				removeElementScroll(e) {
					const t = Jo();
					zi(t, e);
					for (let n = 0; n < this.path.length; n++) {
						const r = this.path[n],
							{
								scroll: a,
								options: o
							} = r;
						if (r !== this.root && a && o.layoutScroll) {
							if (a.isRoot) {
								zi(t, e);
								const {
									scroll: n
								} = this.root;
								n && (fi(t.x, -n.offset.x), fi(t.y, -n.offset.y))
							}
							fi(t.x, a.offset.x), fi(t.y, a.offset.y)
						}
					}
					return t
				}
				applyTransform(e, t = !1) {
					const n = Jo();
					zi(n, e);
					for (let e = 0; e < this.path.length; e++) {
						const r = this.path[e];
						!t && r.options.layoutScroll && r.scroll && r !== r.root && gi(n, {
							x: -r.scroll.offset.x,
							y: -r.scroll.offset.y
						}), ai(r.latestValues) && gi(n, r.latestValues)
					}
					return ai(this.latestValues) && gi(n, this.latestValues), n
				}
				removeTransform(e) {
					const t = Jo();
					zi(t, e);
					for (let e = 0; e < this.path.length; e++) {
						const n = this.path[e];
						if (!n.instance) continue;
						if (!ai(n.latestValues)) continue;
						ri(n.latestValues) && n.updateSnapshot();
						const r = Jo();
						zi(r, n.measurePageBox()), Ui(t, n.latestValues, n.snapshot ? n.snapshot.layoutBox : void 0, r)
					}
					return ai(this.latestValues) && Ui(t, this.latestValues), t
				}
				setTargetDelta(e) {
					this.targetDelta = e, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
				}
				setOptions(e) {
					this.options = {
						...this.options,
						...e,
						crossfade: void 0 === e.crossfade || e.crossfade
					}
				}
				clearMeasurements() {
					this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
				}
				forceRelativeParentToResolveTarget() {
					this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Je.timestamp && this.relativeParent.resolveTargetDelta(!0)
				}
				resolveTargetDelta(e = !1) {
					var t;
					const n = this.getLead();
					this.isProjectionDirty || (this.isProjectionDirty = n.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = n.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = n.isSharedProjectionDirty);
					const r = Boolean(this.resumingFrom) || this !== n;
					if (!(e || r && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty) || this.attemptToResolveRelativeTarget)) return;
					const {
						layout: a,
						layoutId: o
					} = this.options;
					if (this.layout && (a || o)) {
						if (this.resolvedRelativeTargetAt = Je.timestamp, !this.targetDelta && !this.relativeTarget) {
							const e = this.getClosestProjectingParent();
							e && e.layout && 1 !== this.animationProgress ? (this.relativeParent = e, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Jo(), this.relativeTargetOrigin = Jo(), Yo(this.relativeTargetOrigin, this.layout.layoutBox, e.layout.layoutBox), zi(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
						}
						if (this.relativeTarget || this.targetDelta) {
							var i, s, l;
							if (this.target || (this.target = Jo(), this.targetWithTransforms = Jo()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), i = this.target, s = this.relativeTarget, l = this.relativeParent.target, Wo(i.x, s.x, l.x), Wo(i.y, s.y, l.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : zi(this.target, this.layout.layoutBox), ci(this.target, this.targetDelta)) : zi(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
								this.attemptToResolveRelativeTarget = !1;
								const e = this.getClosestProjectingParent();
								e && Boolean(e.resumingFrom) === Boolean(this.resumingFrom) && !e.options.layoutScroll && e.target && 1 !== this.animationProgress ? (this.relativeParent = e, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Jo(), this.relativeTargetOrigin = Jo(), Yo(this.relativeTargetOrigin, this.target, e.target), zi(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
							}
							es.resolvedTargetDeltas++
						}
					}
				}
				getClosestProjectingParent() {
					if (this.parent && !ri(this.parent.latestValues) && !oi(this.parent.latestValues)) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
				}
				isProjecting() {
					return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
				}
				calcProjection() {
					var e;
					const t = this.getLead(),
						n = Boolean(this.resumingFrom) || this !== t;
					let r = !0;
					if ((this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty)) && (r = !1), n && (this.isSharedProjectionDirty || this.isTransformDirty) && (r = !1), this.resolvedRelativeTargetAt === Je.timestamp && (r = !1), r) return;
					const {
						layout: a,
						layoutId: o
					} = this.options;
					if (this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !a && !o) return;
					zi(this.layoutCorrected, this.layout.layoutBox);
					const i = this.treeScale.x,
						s = this.treeScale.y;
					! function(e, t, n, r = !1) {
						const a = n.length;
						if (!a) return;
						let o, i;
						t.x = t.y = 1;
						for (let s = 0; s < a; s++) {
							o = n[s], i = o.projectionDelta;
							const a = o.instance;
							a && a.style && "contents" === a.style.display || (r && o.options.layoutScroll && o.scroll && o !== o.root && gi(e, {
								x: -o.scroll.offset.x,
								y: -o.scroll.offset.y
							}), i && (t.x *= i.x.scale, t.y *= i.y.scale, ci(e, i)), r && ai(o.latestValues) && gi(e, o.latestValues))
						}
						t.x = di(t.x), t.y = di(t.y)
					}(this.layoutCorrected, this.treeScale, this.path, n), !t.layout || t.target || 1 === this.treeScale.x && 1 === this.treeScale.y || (t.target = t.layout.layoutBox);
					const {
						target: l
					} = t;
					if (!l) return void(this.projectionTransform && (this.projectionDelta = Zo(), this.projectionTransform = "none", this.scheduleRender()));
					this.projectionDelta || (this.projectionDelta = Zo(), this.projectionDeltaWithTransform = Zo());
					const u = this.projectionTransform;
					Uo(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.projectionTransform = Gi(this.projectionDelta, this.treeScale), this.projectionTransform === u && this.treeScale.x === i && this.treeScale.y === s || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l)), es.recalculatedProjection++
				}
				hide() {
					this.isVisible = !1
				}
				show() {
					this.isVisible = !0
				}
				scheduleRender(e = !0) {
					if (this.options.scheduleRender && this.options.scheduleRender(), e) {
						const e = this.getStack();
						e && e.scheduleRender()
					}
					this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
				}
				setAnimationOrigin(e, t = !1) {
					const n = this.snapshot,
						r = n ? n.latestValues : {},
						a = {
							...this.latestValues
						},
						o = Zo();
					this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !t;
					const i = Jo(),
						s = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0),
						l = this.getStack(),
						u = !l || l.members.length <= 1,
						c = Boolean(s && !u && !0 === this.options.crossfade && !this.path.some(ys));
					let d;
					this.animationProgress = 0, this.mixTargetDelta = t => {
						const n = t / 1e3;
						ms(o.x, e.x, n), ms(o.y, e.y, n), this.setTargetDelta(o), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Yo(i, this.layout.layoutBox, this.relativeParent.layout.layoutBox), function(e, t, n, r) {
							gs(e.x, t.x, n.x, r), gs(e.y, t.y, n.y, r)
						}(this.relativeTarget, this.relativeTargetOrigin, i, n), d && Yi(this.relativeTarget, d) && (this.isProjectionDirty = !1), d || (d = Jo()), zi(d, this.relativeTarget)), s && (this.animationValues = a, function(e, t, n, r, a, o) {
							a ? (e.opacity = ea(0, void 0 !== n.opacity ? n.opacity : 1, Di(r)), e.opacityExit = ea(void 0 !== t.opacity ? t.opacity : 1, 0, Fi(r))) : o && (e.opacity = ea(void 0 !== t.opacity ? t.opacity : 1, void 0 !== n.opacity ? n.opacity : 1, r));
							for (let a = 0; a < Li; a++) {
								const o = `border${Ri[a]}Radius`;
								let i = _i(t, o),
									s = _i(n, o);
								void 0 === i && void 0 === s || (i || (i = 0), s || (s = 0), 0 === i || 0 === s || Oi(i) === Oi(s) ? (e[o] = Math.max(ea(Mi(i), Mi(s), r), 0), (fn.test(s) || fn.test(i)) && (e[o] += "%")) : e[o] = s)
							}(t.rotate || n.rotate) && (e.rotate = ea(t.rotate || 0, n.rotate || 0, r))
						}(a, r, this.latestValues, n, c, u)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n
					}, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
				}
				startAnimation(e) {
					this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (st(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = it.update((() => {
						ki.hasAnimatedSinceResize = !0, this.currentAnimation = function(e, t, n) {
							const r = Qt(0) ? 0 : ho(0);
							return r.start(io("", r, 1e3, n)), r.animation
						}(0, 0, {
							...e,
							onUpdate: t => {
								this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t)
							},
							onComplete: () => {
								e.onComplete && e.onComplete(), this.completeAnimation()
							}
						}), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
					}))
				}
				completeAnimation() {
					this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
					const e = this.getStack();
					e && e.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
				}
				finishAnimation() {
					this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
				}
				applyTransformsToTarget() {
					const e = this.getLead();
					let {
						targetWithTransforms: t,
						target: n,
						layout: r,
						latestValues: a
					} = e;
					if (t && n && r) {
						if (this !== e && this.layout && r && ws(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
							n = this.target || Jo();
							const t = Vo(this.layout.layoutBox.x);
							n.x.min = e.target.x.min, n.x.max = n.x.min + t;
							const r = Vo(this.layout.layoutBox.y);
							n.y.min = e.target.y.min, n.y.max = n.y.min + r
						}
						zi(t, n), gi(t, a), Uo(this.projectionDeltaWithTransform, this.layoutCorrected, t, a)
					}
				}
				registerSharedNode(e, t) {
					this.sharedNodes.has(e) || this.sharedNodes.set(e, new qi), this.sharedNodes.get(e).add(t);
					const n = t.options.initialPromotionConfig;
					t.promote({
						transition: n ? n.transition : void 0,
						preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(t) : void 0
					})
				}
				isLead() {
					const e = this.getStack();
					return !e || e.lead === this
				}
				getLead() {
					var e;
					const {
						layoutId: t
					} = this.options;
					return t && (null === (e = this.getStack()) || void 0 === e ? void 0 : e.lead) || this
				}
				getPrevLead() {
					var e;
					const {
						layoutId: t
					} = this.options;
					return t ? null === (e = this.getStack()) || void 0 === e ? void 0 : e.prevLead : void 0
				}
				getStack() {
					const {
						layoutId: e
					} = this.options;
					if (e) return this.root.sharedNodes.get(e)
				}
				promote({
					needsReset: e,
					transition: t,
					preserveFollowOpacity: n
				} = {}) {
					const r = this.getStack();
					r && r.promote(this, n), e && (this.projectionDelta = void 0, this.needsReset = !0), t && this.setOptions({
						transition: t
					})
				}
				relegate() {
					const e = this.getStack();
					return !!e && e.relegate(this)
				}
				resetRotation() {
					const {
						visualElement: e
					} = this.options;
					if (!e) return;
					let t = !1;
					const {
						latestValues: n
					} = e;
					if ((n.rotate || n.rotateX || n.rotateY || n.rotateZ) && (t = !0), !t) return;
					const r = {};
					for (let t = 0; t < Zi.length; t++) {
						const a = "rotate" + Zi[t];
						n[a] && (r[a] = n[a], e.setStaticValue(a, 0))
					}
					e.render();
					for (const t in r) e.setStaticValue(t, r[t]);
					e.scheduleRender()
				}
				getProjectionStyles(e = {}) {
					var t, n;
					const r = {};
					if (!this.instance || this.isSVG) return r;
					if (!this.isVisible) return {
						visibility: "hidden"
					};
					r.visibility = "";
					const a = this.getTransformTemplate();
					if (this.needsReset) return this.needsReset = !1, r.opacity = "", r.pointerEvents = Hn(e.pointerEvents) || "", r.transform = a ? a(this.latestValues, "") : "none", r;
					const o = this.getLead();
					if (!this.projectionDelta || !this.layout || !o.target) {
						const t = {};
						return this.options.layoutId && (t.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, t.pointerEvents = Hn(e.pointerEvents) || ""), this.hasProjected && !ai(this.latestValues) && (t.transform = a ? a({}, "") : "none", this.hasProjected = !1), t
					}
					const i = o.animationValues || o.latestValues;
					this.applyTransformsToTarget(), r.transform = Gi(this.projectionDeltaWithTransform, this.treeScale, i), a && (r.transform = a(i, r.transform));
					const {
						x: s,
						y: l
					} = this.projectionDelta;
					r.transformOrigin = `${100*s.origin}% ${100*l.origin}% 0`, o.animationValues ? r.opacity = o === this ? null !== (n = null !== (t = i.opacity) && void 0 !== t ? t : this.latestValues.opacity) && void 0 !== n ? n : 1 : this.preserveOpacity ? this.latestValues.opacity : i.opacityExit : r.opacity = o === this ? void 0 !== i.opacity ? i.opacity : "" : void 0 !== i.opacityExit ? i.opacityExit : 0;
					for (const e in Ut) {
						if (void 0 === i[e]) continue;
						const {
							correct: t,
							applyTo: n
						} = Ut[e], a = "none" === r.transform ? i[e] : t(i[e], o);
						if (n) {
							const e = n.length;
							for (let t = 0; t < e; t++) r[n[t]] = a
						} else r[e] = a
					}
					return this.options.layoutId && (r.pointerEvents = o === this ? Hn(e.pointerEvents) || "" : "none"), r
				}
				clearSnapshot() {
					this.resumeFrom = this.snapshot = void 0
				}
				resetTree() {
					this.root.nodes.forEach((e => {
						var t;
						return null === (t = e.currentAnimation) || void 0 === t ? void 0 : t.stop()
					})), this.root.nodes.forEach(ss), this.root.sharedNodes.clear()
				}
			}
		}

		function ns(e) {
			e.updateLayout()
		}

		function rs(e) {
			var t;
			const n = (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) || e.snapshot;
			if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
				const {
					layoutBox: t,
					measuredBox: r
				} = e.layout, {
					animationType: a
				} = e.options, o = n.source !== e.layout.source;
				"size" === a ? ei((e => {
					const r = o ? n.measuredBox[e] : n.layoutBox[e],
						a = Vo(r);
					r.min = t[e].min, r.max = r.min + a
				})) : ws(a, n.layoutBox, t) && ei((r => {
					const a = o ? n.measuredBox[r] : n.layoutBox[r],
						i = Vo(t[r]);
					a.max = a.min + i, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[r].max = e.relativeTarget[r].min + i)
				}));
				const i = Zo();
				Uo(i, t, n.layoutBox);
				const s = Zo();
				o ? Uo(s, e.applyTransform(r, !0), n.measuredBox) : Uo(s, t, n.layoutBox);
				const l = !Hi(i);
				let u = !1;
				if (!e.resumeFrom) {
					const r = e.getClosestProjectingParent();
					if (r && !r.resumeFrom) {
						const {
							snapshot: a,
							layout: o
						} = r;
						if (a && o) {
							const i = Jo();
							Yo(i, n.layoutBox, a.layoutBox);
							const s = Jo();
							Yo(s, t, o.layoutBox), Yi(i, s) || (u = !0), r.options.layoutRoot && (e.relativeTarget = s, e.relativeTargetOrigin = i, e.relativeParent = r)
						}
					}
				}
				e.notifyListeners("didUpdate", {
					layout: t,
					snapshot: n,
					delta: s,
					layoutDelta: i,
					hasLayoutChanged: l,
					hasRelativeTargetChanged: u
				})
			} else if (e.isLead()) {
				const {
					onExitComplete: t
				} = e.options;
				t && t()
			}
			e.options.transition = void 0
		}

		function as(e) {
			es.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = Boolean(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
		}

		function os(e) {
			e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
		}

		function is(e) {
			e.clearSnapshot()
		}

		function ss(e) {
			e.clearMeasurements()
		}

		function ls(e) {
			e.isLayoutDirty = !1
		}

		function us(e) {
			const {
				visualElement: t
			} = e.options;
			t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform()
		}

		function cs(e) {
			e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0
		}

		function ds(e) {
			e.resolveTargetDelta()
		}

		function fs(e) {
			e.calcProjection()
		}

		function ps(e) {
			e.resetRotation()
		}

		function hs(e) {
			e.removeLeadSnapshot()
		}

		function ms(e, t, n) {
			e.translate = ea(t.translate, 0, n), e.scale = ea(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint
		}

		function gs(e, t, n, r) {
			e.min = ea(t.min, n.min, r), e.max = ea(t.max, n.max, r)
		}

		function ys(e) {
			return e.animationValues && void 0 !== e.animationValues.opacityExit
		}
		const vs = {
			duration: .45,
			ease: [.4, 0, .1, 1]
		};

		function bs(e) {
			e.min = Math.round(e.min), e.max = Math.round(e.max)
		}

		function ws(e, t, n) {
			return "position" === e || "preserve-aspect" === e && !Bo(Qi(t), Qi(n), .2)
		}
		const xs = ts({
				attachResizeListener: (e, t) => Xn(e, "resize", t),
				measureScroll: () => ({
					x: document.documentElement.scrollLeft || document.body.scrollLeft,
					y: document.documentElement.scrollTop || document.body.scrollTop
				}),
				checkIsScrollRoot: () => !0
			}),
			ks = {
				current: void 0
			},
			Ss = ts({
				measureScroll: e => ({
					x: e.scrollLeft,
					y: e.scrollTop
				}),
				defaultParent: () => {
					if (!ks.current) {
						const e = new xs({});
						e.mount(window), e.setOptions({
							layoutScroll: !0
						}), ks.current = e
					}
					return ks.current
				},
				resetTransform: (e, t) => {
					e.style.transform = void 0 !== t ? t : "none"
				},
				checkIsScrollRoot: e => Boolean("fixed" === window.getComputedStyle(e).position)
			}),
			Es = {
				pan: {
					Feature: class extends lr {
						constructor() {
							super(...arguments), this.removePointerDownListener = vt
						}
						onPointerDown(e) {
							this.session = new _o(e, this.createPanHandlers(), {
								transformPagePoint: this.node.getTransformPagePoint()
							})
						}
						createPanHandlers() {
							const {
								onPanSessionStart: e,
								onPanStart: t,
								onPan: n,
								onPanEnd: r
							} = this.node.getProps();
							return {
								onSessionStart: xi(e),
								onStart: xi(t),
								onMove: n,
								onEnd: (e, t) => {
									delete this.session, r && it.update((() => r(e, t)))
								}
							}
						}
						mount() {
							this.removePointerDownListener = er(this.node.current, "pointerdown", (e => this.onPointerDown(e)))
						}
						update() {
							this.session && this.session.updateHandlers(this.createPanHandlers())
						}
						unmount() {
							this.removePointerDownListener(), this.session && this.session.end()
						}
					}
				},
				drag: {
					Feature: class extends lr {
						constructor(e) {
							super(e), this.removeGroupControls = vt, this.removeListeners = vt, this.controls = new bi(e)
						}
						mount() {
							const {
								dragControls: e
							} = this.node.getProps();
							e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || vt
						}
						unmount() {
							this.removeGroupControls(), this.removeListeners()
						}
					},
					ProjectionNode: Ss,
					MeasureLayout: Ti
				}
			},
			Cs = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

		function Ps(e, t, n = 1) {
			wt(n <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
			const [r, a] = function(e) {
				const t = Cs.exec(e);
				if (!t) return [, ];
				const [, n, r] = t;
				return [n, r]
			}(e);
			if (!r) return;
			const o = window.getComputedStyle(t).getPropertyValue(r);
			return o ? o.trim() : Zt(a) ? Ps(a, t, n + 1) : a
		}
		const Ts = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
			As = e => Ts.has(e),
			Rs = e => e === tn || e === pn,
			Ls = (e, t) => parseFloat(e.split(", ")[t]),
			Ms = (e, t) => (n, {
				transform: r
			}) => {
				if ("none" === r || !r) return 0;
				const a = r.match(/^matrix3d\((.+)\)$/);
				if (a) return Ls(a[1], t);
				{
					const t = r.match(/^matrix\((.+)\)$/);
					return t ? Ls(t[1], e) : 0
				}
			},
			Os = new Set(["x", "y", "z"]),
			_s = Wt.filter((e => !Os.has(e))),
			Ds = {
				width: ({
					x: e
				}, {
					paddingLeft: t = "0",
					paddingRight: n = "0"
				}) => e.max - e.min - parseFloat(t) - parseFloat(n),
				height: ({
					y: e
				}, {
					paddingTop: t = "0",
					paddingBottom: n = "0"
				}) => e.max - e.min - parseFloat(t) - parseFloat(n),
				top: (e, {
					top: t
				}) => parseFloat(t),
				left: (e, {
					left: t
				}) => parseFloat(t),
				bottom: ({
					y: e
				}, {
					top: t
				}) => parseFloat(t) + (e.max - e.min),
				right: ({
					x: e
				}, {
					left: t
				}) => parseFloat(t) + (e.max - e.min),
				x: Ms(4, 13),
				y: Ms(5, 14)
			};

		function Fs(e, t, n, r) {
			return (e => Object.keys(e).some(As))(t) ? ((e, t, n = {}, r = {}) => {
				t = {
					...t
				}, r = {
					...r
				};
				const a = Object.keys(t).filter(As);
				let o = [],
					i = !1;
				const s = [];
				if (a.forEach((a => {
						const l = e.getValue(a);
						if (!e.hasValue(a)) return;
						let u = n[a],
							c = yo(u);
						const d = t[a];
						let f;
						if ($n(d)) {
							const e = d.length,
								t = null === d[0] ? 1 : 0;
							u = d[t], c = yo(u);
							for (let n = t; n < e && null !== d[n]; n++) f ? wt(yo(d[n]) === f, "All keyframes must be of the same type") : (f = yo(d[n]), wt(f === c || Rs(c) && Rs(f), "Keyframes must be of the same dimension as the current value"))
						} else f = yo(d);
						if (c !== f)
							if (Rs(c) && Rs(f)) {
								const e = l.get();
								"string" == typeof e && l.set(parseFloat(e)), "string" == typeof d ? t[a] = parseFloat(d) : Array.isArray(d) && f === pn && (t[a] = d.map(parseFloat))
							} else(null == c ? void 0 : c.transform) && (null == f ? void 0 : f.transform) && (0 === u || 0 === d) ? 0 === u ? l.set(f.transform(u)) : t[a] = c.transform(d) : (i || (o = function(e) {
								const t = [];
								return _s.forEach((n => {
									const r = e.getValue(n);
									void 0 !== r && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
								})), t.length && e.render(), t
							}(e), i = !0), s.push(a), r[a] = void 0 !== r[a] ? r[a] : t[a], l.jump(d))
					})), s.length) {
					const n = s.indexOf("height") >= 0 ? window.pageYOffset : null,
						a = ((e, t, n) => {
							const r = t.measureViewportBox(),
								a = t.current,
								o = getComputedStyle(a),
								{
									display: i
								} = o,
								s = {};
							"none" === i && t.setStaticValue("display", e.display || "block"), n.forEach((e => {
								s[e] = Ds[e](r, o)
							})), t.render();
							const l = t.measureViewportBox();
							return n.forEach((n => {
								const r = t.getValue(n);
								r && r.jump(s[n]), e[n] = Ds[n](l, o)
							})), e
						})(t, e, s);
					return o.length && o.forEach((([t, n]) => {
						e.getValue(t).set(n)
					})), e.render(), lt && null !== n && window.scrollTo({
						top: n
					}), {
						target: a,
						transitionEnd: r
					}
				}
				return {
					target: t,
					transitionEnd: r
				}
			})(e, t, n, r) : {
				target: t,
				transitionEnd: r
			}
		}
		const Ns = {
				current: null
			},
			Is = {
				current: !1
			},
			zs = new WeakMap,
			js = Object.keys(Ft),
			Vs = js.length,
			Bs = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
			$s = Lt.length;
		class Us {
			constructor({
				parent: e,
				props: t,
				presenceContext: n,
				reducedMotionConfig: r,
				visualState: a
			}, o = {}) {
				this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
					this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
				}, this.scheduleRender = () => it.render(this.render, !1, !0);
				const {
					latestValues: i,
					renderState: s
				} = a;
				this.latestValues = i, this.baseTarget = {
					...i
				}, this.initialValues = t.initial ? {
					...i
				} : {}, this.renderState = s, this.parent = e, this.props = t, this.presenceContext = n, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = r, this.options = o, this.isControllingVariants = Mt(t), this.isVariantNode = Ot(t), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = Boolean(e && e.current);
				const {
					willChange: l,
					...u
				} = this.scrapeMotionValuesFromProps(t, {});
				for (const e in u) {
					const t = u[e];
					void 0 !== i[e] && Qt(t) && (t.set(i[e], !1), so(l) && l.add(e))
				}
			}
			scrapeMotionValuesFromProps(e, t) {
				return {}
			}
			mount(e) {
				this.current = e, zs.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach(((e, t) => this.bindToMotionValue(t, e))), Is.current || function() {
					if (Is.current = !0, lt)
						if (window.matchMedia) {
							const e = window.matchMedia("(prefers-reduced-motion)"),
								t = () => Ns.current = e.matches;
							e.addListener(t), t()
						} else Ns.current = !1
				}(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || Ns.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
			}
			unmount() {
				zs.delete(this.current), this.projection && this.projection.unmount(), st(this.notifyUpdate), st(this.render), this.valueSubscriptions.forEach((e => e())), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
				for (const e in this.events) this.events[e].clear();
				for (const e in this.features) this.features[e].unmount();
				this.current = null
			}
			bindToMotionValue(e, t) {
				const n = Ht.has(e),
					r = t.on("change", (t => {
						this.latestValues[e] = t, this.props.onUpdate && it.update(this.notifyUpdate, !1, !0), n && this.projection && (this.projection.isTransformDirty = !0)
					})),
					a = t.on("renderRequest", this.scheduleRender);
				this.valueSubscriptions.set(e, (() => {
					r(), a()
				}))
			}
			sortNodePosition(e) {
				return this.current && this.sortInstanceNodePosition && this.type === e.type ? this.sortInstanceNodePosition(this.current, e.current) : 0
			}
			loadFeatures({
				children: e,
				...t
			}, n, r, a) {
				let o, i;
				for (let e = 0; e < Vs; e++) {
					const n = js[e],
						{
							isEnabled: r,
							Feature: a,
							ProjectionNode: s,
							MeasureLayout: l
						} = Ft[n];
					s && (o = s), r(t) && (!this.features[n] && a && (this.features[n] = new a(this)), l && (i = l))
				}
				if (!this.projection && o) {
					this.projection = new o(this.latestValues, this.parent && this.parent.projection);
					const {
						layoutId: e,
						layout: n,
						drag: r,
						dragConstraints: i,
						layoutScroll: s,
						layoutRoot: l
					} = t;
					this.projection.setOptions({
						layoutId: e,
						layout: n,
						alwaysMeasureLayout: Boolean(r) || i && Pt(i),
						visualElement: this,
						scheduleRender: () => this.scheduleRender(),
						animationType: "string" == typeof n ? n : "both",
						initialPromotionConfig: a,
						layoutScroll: s,
						layoutRoot: l
					})
				}
				return i
			}
			updateFeatures() {
				for (const e in this.features) {
					const t = this.features[e];
					t.isMounted ? t.update() : (t.mount(), t.isMounted = !0)
				}
			}
			triggerBuild() {
				this.build(this.renderState, this.latestValues, this.options, this.props)
			}
			measureViewportBox() {
				return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Jo()
			}
			getStaticValue(e) {
				return this.latestValues[e]
			}
			setStaticValue(e, t) {
				this.latestValues[e] = t
			}
			makeTargetAnimatable(e, t = !0) {
				return this.makeTargetAnimatableFromInstance(e, this.props, t)
			}
			update(e, t) {
				(e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = t;
				for (let t = 0; t < Bs.length; t++) {
					const n = Bs[t];
					this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
					const r = e["on" + n];
					r && (this.propEventSubscriptions[n] = this.on(n, r))
				}
				this.prevMotionValues = function(e, t, n) {
					const {
						willChange: r
					} = t;
					for (const a in t) {
						const o = t[a],
							i = n[a];
						if (Qt(o)) e.addValue(a, o), so(r) && r.add(a);
						else if (Qt(i)) e.addValue(a, ho(o, {
							owner: e
						})), so(r) && r.remove(a);
						else if (i !== o)
							if (e.hasValue(a)) {
								const t = e.getValue(a);
								!t.hasAnimated && t.set(o)
							} else {
								const t = e.getStaticValue(a);
								e.addValue(a, ho(void 0 !== t ? t : o, {
									owner: e
								}))
							}
					}
					for (const r in n) void 0 === t[r] && e.removeValue(r);
					return t
				}(this, this.scrapeMotionValuesFromProps(e, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
			}
			getProps() {
				return this.props
			}
			getVariant(e) {
				return this.props.variants ? this.props.variants[e] : void 0
			}
			getDefaultTransition() {
				return this.props.transition
			}
			getTransformPagePoint() {
				return this.props.transformPagePoint
			}
			getClosestVariantNode() {
				return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
			}
			getVariantContext(e = !1) {
				if (e) return this.parent ? this.parent.getVariantContext() : void 0;
				if (!this.isControllingVariants) {
					const e = this.parent && this.parent.getVariantContext() || {};
					return void 0 !== this.props.initial && (e.initial = this.props.initial), e
				}
				const t = {};
				for (let e = 0; e < $s; e++) {
					const n = Lt[e],
						r = this.props[n];
					(Tt(r) || !1 === r) && (t[n] = r)
				}
				return t
			}
			addVariantChild(e) {
				const t = this.getClosestVariantNode();
				if (t) return t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e)
			}
			addValue(e, t) {
				t !== this.values.get(e) && (this.removeValue(e), this.bindToMotionValue(e, t)), this.values.set(e, t), this.latestValues[e] = t.get()
			}
			removeValue(e) {
				this.values.delete(e);
				const t = this.valueSubscriptions.get(e);
				t && (t(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState)
			}
			hasValue(e) {
				return this.values.has(e)
			}
			getValue(e, t) {
				if (this.props.values && this.props.values[e]) return this.props.values[e];
				let n = this.values.get(e);
				return void 0 === n && void 0 !== t && (n = ho(t, {
					owner: this
				}), this.addValue(e, n)), n
			}
			readValue(e) {
				return void 0 === this.latestValues[e] && this.current ? this.readValueFromInstance(this.current, e, this.options) : this.latestValues[e]
			}
			setBaseTarget(e, t) {
				this.baseTarget[e] = t
			}
			getBaseTarget(e) {
				var t;
				const {
					initial: n
				} = this.props, r = "string" == typeof n || "object" == typeof n ? null === (t = Bn(this.props, n)) || void 0 === t ? void 0 : t[e] : void 0;
				if (n && void 0 !== r) return r;
				const a = this.getBaseTargetFromProps(this.props, e);
				return void 0 === a || Qt(a) ? void 0 !== this.initialValues[e] && void 0 === r ? void 0 : this.baseTarget[e] : a
			}
			on(e, t) {
				return this.events[e] || (this.events[e] = new fo), this.events[e].add(t)
			}
			notify(e, ...t) {
				this.events[e] && this.events[e].notify(...t)
			}
		}
		class Ws extends Us {
			sortInstanceNodePosition(e, t) {
				return 2 & e.compareDocumentPosition(t) ? 1 : -1
			}
			getBaseTargetFromProps(e, t) {
				return e.style ? e.style[t] : void 0
			}
			removeValueFromRenderState(e, {
				vars: t,
				style: n
			}) {
				delete t[e], delete n[e]
			}
			makeTargetAnimatableFromInstance({
				transition: e,
				transitionEnd: t,
				...n
			}, {
				transformValues: r
			}, a) {
				let o = function(e, t, n) {
					const r = {};
					for (const a in e) {
						const e = xo(a, t);
						if (void 0 !== e) r[a] = e;
						else {
							const e = n.getValue(a);
							e && (r[a] = e.get())
						}
					}
					return r
				}(n, e || {}, this);
				if (r && (t && (t = r(t)), n && (n = r(n)), o && (o = r(o))), a) {
					! function(e, t, n) {
						var r, a;
						const o = Object.keys(t).filter((t => !e.hasValue(t))),
							i = o.length;
						if (i)
							for (let s = 0; s < i; s++) {
								const i = o[s],
									l = t[i];
								let u = null;
								Array.isArray(l) && (u = l[0]), null === u && (u = null !== (a = null !== (r = n[i]) && void 0 !== r ? r : e.readValue(i)) && void 0 !== a ? a : t[i]), null != u && ("string" == typeof u && (lo(u) || ro(u)) ? u = parseFloat(u) : !bo(u) && ha.test(l) && (u = no(i, l)), e.addValue(i, ho(u, {
									owner: e
								})), void 0 === n[i] && (n[i] = u), null !== u && e.setBaseTarget(i, u))
							}
					}(this, n, o);
					const e = ((e, t, n, r) => {
						const a = function(e, {
							...t
						}, n) {
							const r = e.current;
							if (!(r instanceof Element)) return {
								target: t,
								transitionEnd: n
							};
							n && (n = {
								...n
							}), e.values.forEach((e => {
								const t = e.get();
								if (!Zt(t)) return;
								const n = Ps(t, r);
								n && e.set(n)
							}));
							for (const e in t) {
								const a = t[e];
								if (!Zt(a)) continue;
								const o = Ps(a, r);
								o && (t[e] = o, n || (n = {}), void 0 === n[e] && (n[e] = a))
							}
							return {
								target: t,
								transitionEnd: n
							}
						}(e, t, r);
						return Fs(e, t = a.target, n, r = a.transitionEnd)
					})(this, n, o, t);
					t = e.transitionEnd, n = e.target
				}
				return {
					transition: e,
					transitionEnd: t,
					...n
				}
			}
		}
		class Hs extends Ws {
			readValueFromInstance(e, t) {
				if (Ht.has(t)) {
					const e = to(t);
					return e && e.default || 0
				} {
					const r = (n = e, window.getComputedStyle(n)),
						a = (Kt(t) ? r.getPropertyValue(t) : r[t]) || 0;
					return "string" == typeof a ? a.trim() : a
				}
				var n
			}
			measureInstanceViewportBox(e, {
				transformPagePoint: t
			}) {
				return yi(e, t)
			}
			build(e, t, n, r) {
				bn(e, t, n, r.transformTemplate)
			}
			scrapeMotionValuesFromProps(e, t) {
				return jn(e, t)
			}
			handleChildMotionValue() {
				this.childSubscription && (this.childSubscription(), delete this.childSubscription);
				const {
					children: e
				} = this.props;
				Qt(e) && (this.childSubscription = e.on("change", (e => {
					this.current && (this.current.textContent = `${e}`)
				})))
			}
			renderInstance(e, t, n, r) {
				Nn(e, t, n, r)
			}
		}
		class Ys extends Ws {
			constructor() {
				super(...arguments), this.isSVGTag = !1
			}
			getBaseTargetFromProps(e, t) {
				return e[t]
			}
			readValueFromInstance(e, t) {
				if (Ht.has(t)) {
					const e = to(t);
					return e && e.default || 0
				}
				return t = In.has(t) ? t : Fn(t), e.getAttribute(t)
			}
			measureInstanceViewportBox() {
				return Jo()
			}
			scrapeMotionValuesFromProps(e, t) {
				return Vn(e, t)
			}
			build(e, t, n, r) {
				Ln(e, t, n, this.isSVGTag, r.transformTemplate)
			}
			renderInstance(e, t, n, r) {
				zn(e, t, 0, r)
			}
			mount(e) {
				this.isSVGTag = On(e.tagName), super.mount(e)
			}
		}
		const Qs = (e, t) => $t(e) ? new Ys(t, {
				enableHardwareAcceleration: !1
			}) : new Hs(t, {
				enableHardwareAcceleration: !0
			}),
			qs = {
				...Mo,
				...yr,
				...Es,
				layout: {
					ProjectionNode: Ss,
					MeasureLayout: Ti
				}
			},
			Gs = Vt(((e, t) => function(e, {
				forwardMotionProps: t = !1
			}, n, r) {
				return {
					...$t(e) ? qn : Gn,
					preloadedFeatures: n,
					useRender: Dn(t),
					createVisualElement: r,
					Component: e
				}
			}(e, t, qs, Qs)));

		function Xs() {
			return Xs = Object.assign ? Object.assign.bind() : function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
				}
				return e
			}, Xs.apply(this, arguments)
		}
		var Ks;
		! function(e) {
			e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
		}(Ks || (Ks = {}));
		const Zs = "popstate";

		function Js(e, t) {
			if (!1 === e || null == e) throw new Error(t)
		}

		function el(e, t) {
			if (!e) {
				"undefined" != typeof console && console.warn(t);
				try {
					throw new Error(t)
				} catch (e) {}
			}
		}

		function tl(e, t) {
			return {
				usr: e.state,
				key: e.key,
				idx: t
			}
		}

		function nl(e, t, n, r) {
			return void 0 === n && (n = null), Xs({
				pathname: "string" == typeof e ? e : e.pathname,
				search: "",
				hash: ""
			}, "string" == typeof t ? al(t) : t, {
				state: n,
				key: t && t.key || r || Math.random().toString(36).substr(2, 8)
			})
		}

		function rl(e) {
			let {
				pathname: t = "/",
				search: n = "",
				hash: r = ""
			} = e;
			return n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n), r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r), t
		}

		function al(e) {
			let t = {};
			if (e) {
				let n = e.indexOf("#");
				n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
				let r = e.indexOf("?");
				r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
			}
			return t
		}
		var ol;

		function il(e, t, n) {
			void 0 === n && (n = "/");
			let r = wl(("string" == typeof t ? al(t) : t).pathname || "/", n);
			if (null == r) return null;
			let a = sl(e);
			! function(e) {
				e.sort(((e, t) => e.score !== t.score ? t.score - e.score : function(e, t) {
					let n = e.length === t.length && e.slice(0, -1).every(((e, n) => e === t[n]));
					return n ? e[e.length - 1] - t[t.length - 1] : 0
				}(e.routesMeta.map((e => e.childrenIndex)), t.routesMeta.map((e => e.childrenIndex)))))
			}(a);
			let o = null;
			for (let e = 0; null == o && e < a.length; ++e) o = yl(a[e], bl(r));
			return o
		}

		function sl(e, t, n, r) {
			void 0 === t && (t = []), void 0 === n && (n = []), void 0 === r && (r = "");
			let a = (e, a, o) => {
				let i = {
					relativePath: void 0 === o ? e.path || "" : o,
					caseSensitive: !0 === e.caseSensitive,
					childrenIndex: a,
					route: e
				};
				i.relativePath.startsWith("/") && (Js(i.relativePath.startsWith(r), 'Absolute route path "' + i.relativePath + '" nested under path "' + r + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), i.relativePath = i.relativePath.slice(r.length));
				let s = El([r, i.relativePath]),
					l = n.concat(i);
				e.children && e.children.length > 0 && (Js(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + s + '".'), sl(e.children, t, l, s)), (null != e.path || e.index) && t.push({
					path: s,
					score: gl(s, e.index),
					routesMeta: l
				})
			};
			return e.forEach(((e, t) => {
				var n;
				if ("" !== e.path && null != (n = e.path) && n.includes("?"))
					for (let n of ll(e.path)) a(e, t, n);
				else a(e, t)
			})), t
		}

		function ll(e) {
			let t = e.split("/");
			if (0 === t.length) return [];
			let [n, ...r] = t, a = n.endsWith("?"), o = n.replace(/\?$/, "");
			if (0 === r.length) return a ? [o, ""] : [o];
			let i = ll(r.join("/")),
				s = [];
			return s.push(...i.map((e => "" === e ? o : [o, e].join("/")))), a && s.push(...i), s.map((t => e.startsWith("/") && "" === t ? "/" : t))
		}! function(e) {
			e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
		}(ol || (ol = {})), new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
		const ul = /^:\w+$/,
			cl = 3,
			dl = 2,
			fl = 1,
			pl = 10,
			hl = -2,
			ml = e => "*" === e;

		function gl(e, t) {
			let n = e.split("/"),
				r = n.length;
			return n.some(ml) && (r += hl), t && (r += dl), n.filter((e => !ml(e))).reduce(((e, t) => e + (ul.test(t) ? cl : "" === t ? fl : pl)), r)
		}

		function yl(e, t) {
			let {
				routesMeta: n
			} = e, r = {}, a = "/", o = [];
			for (let e = 0; e < n.length; ++e) {
				let i = n[e],
					s = e === n.length - 1,
					l = "/" === a ? t : t.slice(a.length) || "/",
					u = vl({
						path: i.relativePath,
						caseSensitive: i.caseSensitive,
						end: s
					}, l);
				if (!u) return null;
				Object.assign(r, u.params);
				let c = i.route;
				o.push({
					params: r,
					pathname: El([a, u.pathname]),
					pathnameBase: Cl(El([a, u.pathnameBase])),
					route: c
				}), "/" !== u.pathnameBase && (a = El([a, u.pathnameBase]))
			}
			return o
		}

		function vl(e, t) {
			"string" == typeof e && (e = {
				path: e,
				caseSensitive: !1,
				end: !0
			});
			let [n, r] = function(e, t, n) {
				void 0 === t && (t = !1), void 0 === n && (n = !0), el("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".');
				let r = [],
					a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, ((e, t) => (r.push(t), "/([^\\/]+)")));
				return e.endsWith("*") ? (r.push("*"), a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? a += "\\/*$" : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))"), [new RegExp(a, t ? void 0 : "i"), r]
			}(e.path, e.caseSensitive, e.end), a = t.match(n);
			if (!a) return null;
			let o = a[0],
				i = o.replace(/(.)\/+$/, "$1"),
				s = a.slice(1);
			return {
				params: r.reduce(((e, t, n) => {
					if ("*" === t) {
						let e = s[n] || "";
						i = o.slice(0, o.length - e.length).replace(/(.)\/+$/, "$1")
					}
					return e[t] = function(e, t) {
						try {
							return decodeURIComponent(e)
						} catch (n) {
							return el(!1, 'The value for the URL param "' + t + '" will not be decoded because the string "' + e + '" is a malformed URL segment. This is probably due to a bad percent encoding (' + n + ")."), e
						}
					}(s[n] || "", t), e
				}), {}),
				pathname: o,
				pathnameBase: i,
				pattern: e
			}
		}

		function bl(e) {
			try {
				return decodeURI(e)
			} catch (t) {
				return el(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e
			}
		}

		function wl(e, t) {
			if ("/" === t) return e;
			if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
			let n = t.endsWith("/") ? t.length - 1 : t.length,
				r = e.charAt(n);
			return r && "/" !== r ? null : e.slice(n) || "/"
		}

		function xl(e, t, n, r) {
			return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the `to." + n + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
		}

		function kl(e) {
			return e.filter(((e, t) => 0 === t || e.route.path && e.route.path.length > 0))
		}

		function Sl(e, t, n, r) {
			let a;
			void 0 === r && (r = !1), "string" == typeof e ? a = al(e) : (a = Xs({}, e), Js(!a.pathname || !a.pathname.includes("?"), xl("?", "pathname", "search", a)), Js(!a.pathname || !a.pathname.includes("#"), xl("#", "pathname", "hash", a)), Js(!a.search || !a.search.includes("#"), xl("#", "search", "hash", a)));
			let o, i = "" === e || "" === a.pathname,
				s = i ? "/" : a.pathname;
			if (r || null == s) o = n;
			else {
				let e = t.length - 1;
				if (s.startsWith("..")) {
					let t = s.split("/");
					for (;
						".." === t[0];) t.shift(), e -= 1;
					a.pathname = t.join("/")
				}
				o = e >= 0 ? t[e] : "/"
			}
			let l = function(e, t) {
					void 0 === t && (t = "/");
					let {
						pathname: n,
						search: r = "",
						hash: a = ""
					} = "string" == typeof e ? al(e) : e, o = n ? n.startsWith("/") ? n : function(e, t) {
						let n = t.replace(/\/+$/, "").split("/");
						return e.split("/").forEach((e => {
							".." === e ? n.length > 1 && n.pop() : "." !== e && n.push(e)
						})), n.length > 1 ? n.join("/") : "/"
					}(n, t) : t;
					return {
						pathname: o,
						search: Pl(r),
						hash: Tl(a)
					}
				}(a, o),
				u = s && "/" !== s && s.endsWith("/"),
				c = (i || "." === s) && n.endsWith("/");
			return l.pathname.endsWith("/") || !u && !c || (l.pathname += "/"), l
		}
		const El = e => e.join("/").replace(/\/\/+/g, "/"),
			Cl = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
			Pl = e => e && "?" !== e ? e.startsWith("?") ? e : "?" + e : "",
			Tl = e => e && "#" !== e ? e.startsWith("#") ? e : "#" + e : "";
		Error;
		const Al = ["post", "put", "patch", "delete"],
			Rl = (new Set(Al), ["get", ...Al]);

		function Ll() {
			return Ll = Object.assign ? Object.assign.bind() : function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
				}
				return e
			}, Ll.apply(this, arguments)
		}
		new Set(Rl), new Set([301, 302, 303, 307, 308]), new Set([307, 308]), Symbol("deferred");
		const Ml = e.createContext(null),
			Ol = e.createContext(null),
			_l = e.createContext(null),
			Dl = e.createContext(null),
			Fl = e.createContext({
				outlet: null,
				matches: [],
				isDataRoute: !1
			}),
			Nl = e.createContext(null);

		function Il() {
			return null != e.useContext(Dl)
		}

		function zl() {
			return Il() || Js(!1), e.useContext(Dl).location
		}

		function jl(t) {
			e.useContext(_l).static || e.useLayoutEffect(t)
		}

		function Vl() {
			let {
				isDataRoute: t
			} = e.useContext(Fl);
			return t ? function() {
				let {
					router: t
				} = function(t) {
					let n = e.useContext(Ml);
					return n || Js(!1), n
				}(ql.UseNavigateStable), n = Kl(Gl.UseNavigateStable), r = e.useRef(!1);
				return jl((() => {
					r.current = !0
				})), e.useCallback((function(e, a) {
					void 0 === a && (a = {}), r.current && ("number" == typeof e ? t.navigate(e) : t.navigate(e, Ll({
						fromRouteId: n
					}, a)))
				}), [t, n])
			}() : function() {
				Il() || Js(!1);
				let t = e.useContext(Ml),
					{
						basename: n,
						navigator: r
					} = e.useContext(_l),
					{
						matches: a
					} = e.useContext(Fl),
					{
						pathname: o
					} = zl(),
					i = JSON.stringify(kl(a).map((e => e.pathnameBase))),
					s = e.useRef(!1);
				return jl((() => {
					s.current = !0
				})), e.useCallback((function(e, a) {
					if (void 0 === a && (a = {}), !s.current) return;
					if ("number" == typeof e) return void r.go(e);
					let l = Sl(e, JSON.parse(i), o, "path" === a.relative);
					null == t && "/" !== n && (l.pathname = "/" === l.pathname ? n : El([n, l.pathname])), (a.replace ? r.replace : r.push)(l, a.state, a)
				}), [n, r, i, o, t])
			}()
		}

		function Bl() {
			let {
				matches: t
			} = e.useContext(Fl), n = t[t.length - 1];
			return n ? n.params : {}
		}

		function $l(t, n) {
			let {
				relative: r
			} = void 0 === n ? {} : n, {
				matches: a
			} = e.useContext(Fl), {
				pathname: o
			} = zl(), i = JSON.stringify(kl(a).map((e => e.pathnameBase)));
			return e.useMemo((() => Sl(t, JSON.parse(i), o, "path" === r)), [t, i, o, r])
		}

		function Ul(t, n, r) {
			Il() || Js(!1);
			let {
				navigator: a
			} = e.useContext(_l), {
				matches: o
			} = e.useContext(Fl), i = o[o.length - 1], s = i ? i.params : {}, l = (i && i.pathname, i ? i.pathnameBase : "/");
			i && i.route;
			let u, c = zl();
			if (n) {
				var d;
				let e = "string" == typeof n ? al(n) : n;
				"/" === l || (null == (d = e.pathname) ? void 0 : d.startsWith(l)) || Js(!1), u = e
			} else u = c;
			let f = u.pathname || "/",
				p = il(t, {
					pathname: "/" === l ? f : f.slice(l.length) || "/"
				}),
				h = function(t, n, r) {
					var a;
					if (void 0 === n && (n = []), void 0 === r && (r = null), null == t) {
						var o;
						if (null == (o = r) || !o.errors) return null;
						t = r.matches
					}
					let i = t,
						s = null == (a = r) ? void 0 : a.errors;
					if (null != s) {
						let e = i.findIndex((e => e.route.id && (null == s ? void 0 : s[e.route.id])));
						e >= 0 || Js(!1), i = i.slice(0, Math.min(i.length, e + 1))
					}
					return i.reduceRight(((t, a, o) => {
						let l = a.route.id ? null == s ? void 0 : s[a.route.id] : null,
							u = null;
						r && (u = a.route.errorElement || Hl);
						let c = n.concat(i.slice(0, o + 1)),
							d = () => {
								let n;
								return n = l ? u : a.route.Component ? e.createElement(a.route.Component, null) : a.route.element ? a.route.element : t, e.createElement(Ql, {
									match: a,
									routeContext: {
										outlet: t,
										matches: c,
										isDataRoute: null != r
									},
									children: n
								})
							};
						return r && (a.route.ErrorBoundary || a.route.errorElement || 0 === o) ? e.createElement(Yl, {
							location: r.location,
							revalidation: r.revalidation,
							component: u,
							error: l,
							children: d(),
							routeContext: {
								outlet: null,
								matches: c,
								isDataRoute: !0
							}
						}) : d()
					}), null)
				}(p && p.map((e => Object.assign({}, e, {
					params: Object.assign({}, s, e.params),
					pathname: El([l, a.encodeLocation ? a.encodeLocation(e.pathname).pathname : e.pathname]),
					pathnameBase: "/" === e.pathnameBase ? l : El([l, a.encodeLocation ? a.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
				}))), o, r);
			return n && h ? e.createElement(Dl.Provider, {
				value: {
					location: Ll({
						pathname: "/",
						search: "",
						hash: "",
						state: null,
						key: "default"
					}, u),
					navigationType: Ks.Pop
				}
			}, h) : h
		}

		function Wl() {
			let t = function() {
					var t;
					let n = e.useContext(Nl),
						r = function(t) {
							let n = e.useContext(Ol);
							return n || Js(!1), n
						}(Gl.UseRouteError),
						a = Kl(Gl.UseRouteError);
					return n || (null == (t = r.errors) ? void 0 : t[a])
				}(),
				n = function(e) {
					return null != e && "number" == typeof e.status && "string" == typeof e.statusText && "boolean" == typeof e.internal && "data" in e
				}(t) ? t.status + " " + t.statusText : t instanceof Error ? t.message : JSON.stringify(t),
				r = t instanceof Error ? t.stack : null,
				a = {
					padding: "0.5rem",
					backgroundColor: "rgba(200,200,200, 0.5)"
				};
			return e.createElement(e.Fragment, null, e.createElement("h2", null, "Unexpected Application Error!"), e.createElement("h3", {
				style: {
					fontStyle: "italic"
				}
			}, n), r ? e.createElement("pre", {
				style: a
			}, r) : null, null)
		}
		const Hl = e.createElement(Wl, null);
		class Yl extends e.Component {
			constructor(e) {
				super(e), this.state = {
					location: e.location,
					revalidation: e.revalidation,
					error: e.error
				}
			}
			static getDerivedStateFromError(e) {
				return {
					error: e
				}
			}
			static getDerivedStateFromProps(e, t) {
				return t.location !== e.location || "idle" !== t.revalidation && "idle" === e.revalidation ? {
					error: e.error,
					location: e.location,
					revalidation: e.revalidation
				} : {
					error: e.error || t.error,
					location: t.location,
					revalidation: e.revalidation || t.revalidation
				}
			}
			componentDidCatch(e, t) {
				console.error("React Router caught the following error during render", e, t)
			}
			render() {
				return this.state.error ? e.createElement(Fl.Provider, {
					value: this.props.routeContext
				}, e.createElement(Nl.Provider, {
					value: this.state.error,
					children: this.props.component
				})) : this.props.children
			}
		}

		function Ql(t) {
			let {
				routeContext: n,
				match: r,
				children: a
			} = t, o = e.useContext(Ml);
			return o && o.static && o.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = r.route.id), e.createElement(Fl.Provider, {
				value: n
			}, a)
		}
		var ql, Gl, Xl;

		function Kl(t) {
			let n = function(t) {
					let n = e.useContext(Fl);
					return n || Js(!1), n
				}(),
				r = n.matches[n.matches.length - 1];
			return r.route.id || Js(!1), r.route.id
		}

		function Zl(e) {
			Js(!1)
		}

		function Jl(t) {
			let {
				basename: n = "/",
				children: r = null,
				location: a,
				navigationType: o = Ks.Pop,
				navigator: i,
				static: s = !1
			} = t;
			Il() && Js(!1);
			let l = n.replace(/^\/*/, "/"),
				u = e.useMemo((() => ({
					basename: l,
					navigator: i,
					static: s
				})), [l, i, s]);
			"string" == typeof a && (a = al(a));
			let {
				pathname: c = "/",
				search: d = "",
				hash: f = "",
				state: p = null,
				key: h = "default"
			} = a, m = e.useMemo((() => {
				let e = wl(c, l);
				return null == e ? null : {
					location: {
						pathname: e,
						search: d,
						hash: f,
						state: p,
						key: h
					},
					navigationType: o
				}
			}), [l, c, d, f, p, h, o]);
			return null == m ? null : e.createElement(_l.Provider, {
				value: u
			}, e.createElement(Dl.Provider, {
				children: r,
				value: m
			}))
		}

		function eu(e) {
			let {
				children: t,
				location: n
			} = e;
			return Ul(tu(t), n)
		}

		function tu(t, n) {
			void 0 === n && (n = []);
			let r = [];
			return e.Children.forEach(t, ((t, a) => {
				if (!e.isValidElement(t)) return;
				let o = [...n, a];
				if (t.type === e.Fragment) return void r.push.apply(r, tu(t.props.children, o));
				t.type !== Zl && Js(!1), t.props.index && t.props.children && Js(!1);
				let i = {
					id: t.props.id || o.join("-"),
					caseSensitive: t.props.caseSensitive,
					element: t.props.element,
					Component: t.props.Component,
					index: t.props.index,
					path: t.props.path,
					loader: t.props.loader,
					action: t.props.action,
					errorElement: t.props.errorElement,
					ErrorBoundary: t.props.ErrorBoundary,
					hasErrorBoundary: null != t.props.ErrorBoundary || null != t.props.errorElement,
					shouldRevalidate: t.props.shouldRevalidate,
					handle: t.props.handle,
					lazy: t.props.lazy
				};
				t.props.children && (i.children = tu(t.props.children, o)), r.push(i)
			})), r
		}! function(e) {
			e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate"
		}(ql || (ql = {})),
		function(e) {
			e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId"
		}(Gl || (Gl = {})), t.startTransition,
			function(e) {
				e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error"
			}(Xl || (Xl = {})), new Promise((() => {})), e.Component;
		const nu = (0, e.createContext)(null),
			ru = () => (0, e.useContext)(nu);
		var au = function(e, t) {
			var n = {};
			for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
			if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
				var a = 0;
				for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]])
			}
			return n
		};
		const ou = Ie.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 0.4375rem;
  background: #0009;
  overflow: hidden;
  position: relative;
  cursor: pointer;
`,
			iu = Ie.div`
  text-transform: uppercase;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  align-items: center;
  font-size: 90%;
  font-weight: 600;
  color: #FFF;
  opacity: 0;
  transition: all 0.2s ease-in-out;
  background: rgba(65, 130, 226, 0.55);
  border: 0.0625rem solid rgb(65, 130, 226);
  border-radius: 0.4375rem;
`,
			su = Ie.img`
  border-radius: 0.4375rem;
  width: 90%;
  height: 90%;
  object-fit: contain;
`;

		function lu(t) {
			var {
				label: n,
				src: r
			} = t, a = au(t, ["label", "src"]);
			const [o, i] = (0, e.useState)(!1), s = () => {
				i(!o)
			}, l = Vl();
			return e.createElement(ou, Object.assign({}, a, {
				onClick: () => {
					l(`/${a.sub}/${a.tag}`)
				}
			}), e.createElement(iu, {
				style: {
					opacity: o ? 1 : 0
				},
				onMouseEnter: s,
				onMouseLeave: s
			}, n), r && e.createElement(su, {
				src: r
			}))
		}
		const uu = {
				diamond: {
					background: "rgba(1, 100, 100, 0.5)",
					color: "#0FF"
				},
				normal: {
					background: "rgba(18, 172, 90, 0.5)",
					color: "#12ac5a"
				},
				vip: {
					background: "rgba(255, 184, 29, 0.5)",
					color: "#FFB81D"
				}
			},
			cu = Ie.img`
  width: auto;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  transition: all .2s;
`,
			du = Ie.div`
  display: flex;
  width: 100%;
  
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 0;
  /* background: linear-gradient(19deg, #000 0%, rgba(0, 0, 0, 0.00) 100%); */ zombi
  color: #FFF;
  height: 2.5vh;
  padding-left: 1rem;

  h1 {
    color: #FFF;
    font-size: 1.1rem;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`,
			fu = (Ie.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 18px;

  color: #FFF;
  text-align: center;
  font-size: 1.2rem;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  border-radius: 0.4rem 0 0 0.4rem;
  padding: 0rem 1rem;
  background: ${({type:e})=>uu[e].background};
  gap: 0.5rem;
`, Ie.div`
  display: flex;
  flex-direction: column;
  height: 13.5vh;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  border-radius: 0.4375rem;
  background:  rgba(0, 0, 0, 0.50);
  overflow: hidden;
  position: relative;

  opacity: 0;
  transition: all .2s;

  animation: fadeIn 0.2s ease-in-out forwards;
  animation-delay: ${({animIndex:e})=>.03*e}s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  &:hover {
    opacity: 0.65;
    border: 1px solid transparent;
    img.cloth {
      transform: scale(1.2);
    }
	background: rgba(65, 130, 226, 0.4);
	border: 0.0625rem solid rgb(65, 130, 226);
  }
`),
			pu = Ie.div`
			display:none;
  background: linear-gradient(-23deg, ${({type:e})=>uu[e].color} -200%, rgba(255, 184, 29, 0.00) 50%);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
		Ie.img`
  width: 1.2rem;
  height: 1.2rem;
  object-fit: contain;
`;
		var hu = function(e, t) {
			var n = {};
			for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
			if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
				var a = 0;
				for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]])
			}
			return n
		};

		function mu(t) {
			var {
				index: n,
				animIndex: r,
				price: a,
				type: o,
				isOwned: i,
				image: s
			} = t, l = hu(t, ["index", "animIndex", "price", "type", "isOwned", "image"]);
			return e.createElement(fu, Object.assign({
				key: n,
				type: o,
				animIndex: r
			}, l), e.createElement(cu, {
				className: "cloth",
				src: s
			}), e.createElement(du, null, e.createElement("h1", null, n)), e.createElement(pu, {
				type: o
			}))
		}
		const gu = Ie.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background: none;
  border: none;
  color: rgb(65 130 226);
  border-radius: 0.4375rem;
  font-size: 0.8vw;
  font-family: 'Poppins', sans-serif;
  font-weight: normal;
  transition: all 0.4s;
  outline: none;
  &:hover {
    background: #0003; /* editar o hove do salva */
  }
`,
			yu = Ie.div`
  display: flex;
  align-items: center;
  height: 6vh;
  align-self: stretch;
  justify-content: space-between;
  border-radius: 0.4375rem;
  background: rgba(0, 0, 0, 0.63);
`,
			vu = Ie.div`
    background-image: url(nui://skinshop/web-side/assets/background.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	background-position: center;
    
 	width: 100vw;
 	height: 100vh;

  display: flex;
  align-items: center;
`,
			bu = Ie.div`
  display: flex;
  height: 85%;
  width: 25vw;
  padding: 1.5rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.375rem;
  margin-left: 8rem;

`,
			wu = Ie.div`
  display: flex;
  width: 100%;
  height: 4.5vh;
  align-items: center;

  border-radius:  0.4375rem;
  overflow: hidden;
  background: rgba(98, 98, 98, 0.1);
`,
			xu = Ie.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  cursor: pointer;
  transition: all 0.2s;

  color: #FFF;
  font-size: 1.75rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;

  background: ${e=>e.isActive?"rgba(0, 0, 0, 0.63)":"#00000080"};
`,
			ku = Ie.div`
  display: flex;
  width: 100%;
  height: 5vh;
  align-items: center;
  justify-content: space-between;

  border-radius:  0.4375rem;
  overflow: hidden;
  text-transform: uppercase;
  padding: 0.5vh 1vw 0.5vh 0.25vw;

  border-radius:  0.4375rem;
  background: rgba(0, 0, 0, 0.63);

  h1 {
    color: #FFF;
    font-size: 1.8rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    text-decoration: none;
    color: #FFF;
    font-size:  1.4rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    line-height: normal;
    height: 100%;
    padding: 0 1rem;


    transition: all .2s;
    border-radius: 0.625rem;
    background: rgba(98, 98, 98, 0.1);

    &:hover {
    background: rgba(98, 98, 98, 0.2);
    }
  }
`,
			Su = Ie.div`
  display: grid; 
  grid-template-columns: repeat(3, 1fr);
  flex-direction: row-reverse;
  width: 100%;
  height: 100%;
  grid-gap:  0.4375rem;
  justify-items: center;
  align-items: start;
  overflow-y: auto;
  padding-right: 0.4vw;
  &::-webkit-scrollbar { width: 6px;border-radius: 0.208vw; }
  &::-webkit-scrollbar-track { background: rgba(15,15,15,.75);border-radius: 0.208vw; }
  &::-webkit-scrollbar-thumb { height: 30vh;background: white;border-radius: 0.208vw; }
  &::-webkit-scrollbar-thumb:hover { background: white;border-radius: 0.208vw; }
  
`,
			Eu = Ie.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all .2s;
`,
			Cu = Ie.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 7vh;
  padding: 0.2rem 0.8vw;

  border-radius:  0.4375rem;
  background: rgba(0, 0, 0, 0.63);
  color: #FFF;
`,
			Pu = Ie.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 41%;
  height: 68%;

  P {
    text-align: center;
    color: rgba(255, 255, 255, 0.50);
    font-family: 'Poppins', sans-serif;
    font-size: 1.1rem;
    text-transform: uppercase;

    span {
      font-family: 'Poppins', sans-serif;
      font-size: 1.2rem;
      line-height:  0.4375rem;
      color: #FFF;
    }
  }
`,
			Tu = Ie.img`
  width: 12px;
  height: 12px;
  object-fit: contain;
  transition: all .2s;
  cursor: pointer;
`,
			Au = Ie.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28%;
  height: 100%;

  border-radius: 0.625rem;

`,
			Ru = Ie.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-radius: 0.625rem;
  padding: 0 1rem;
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
`,
			Lu = (Ie.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 0.625rem;
  background: rgba(98, 98, 98, 0.10);
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  transition: all .2s;
  cursor: pointer;

  :hover {
    background: rgba(98, 98, 98, 0.20);
  }
`, a.p + "icon.svg"),
			Mu = a.p + "arrow.svg",
			Ou = a.p + "pants.png",
			_u = {
				primary: {
					torso: {
						label: "Jaquetas",
						gridArea: "Cloths",
						src: a.p + "jacket.png",
						imageId: 11,
						columns: 1
					},
					pants: {
						label: "Calças",
						gridArea: "Legs",
						src: Ou,
						imageId: 4,
						columns: 1
					},
					shoes: {
						label: "Sapatos",
						gridArea: "feet",
						src: a.p + "shoes.png",
						imageId: 6,
						columns: 1
					},
					tshirt: {
						label: "Camisas",
						gridArea: "tshirty",
						imageId: 8,
						src: a.p + "tsirt.png"
					},
					arms: {
						label: "MÃOS",
						gridArea: "gloves",
						imageId: 3,
						src: a.p + "cycling.png"
					},
					hat: {
						label: "Chapéus",
						gridArea: "hat",
						src: a.p + "cap.png",
						imageId: 0,
						rows: 2
					},
					glass: {
						label: "Óculos",
						gridArea: "glass",
						src: a.p + "glasses.png",
						imageId: 12,
						rows: 2
					},
					accessory: {
						label: "Acessórios",
						gridArea: "accessory",
						imageId: 7,
						src: a.p + "rectangular.png"
					}
				},
				secondary: {
					backpack: {
						label: "Mochilas",
						gridArea: "backpack",
						src: a.p + "backpack.png",
						imageId: 5,
						columns: 1
					},
					mask: {
						label: "Máscaras",
						gridArea: "mask",
						src: a.p + "mask.png",
						imageId: 1,
						columns: 1
					},
					vest: {
						label: "Coletes",
						gridArea: "shield",
						src: a.p + "shield.png",
						imageId: 9
					},
					decals: {
						label: "Adesivos",
						gridArea: "sticker",
						src: a.p + "sticker.png",
						imageId: 10
					},
					ear: {
						label: "Brincos",
						gridArea: "curved",
						src: a.p + "curved.png",
						imageId: 13
					},
					bracelet: {
						label: "Braceletes",
						gridArea: "rings",
						src: a.p + "rings.png",
						imageId: 7,
						rows: 2
					},
					watch: {
						label: "Relógios",
						gridArea: "watch",
						src: a.p + "relogio.png",
						rows: 2,
						imageId: 14
					}
				}
			};

		function Du() {
			return Du = Object.assign ? Object.assign.bind() : function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
				}
				return e
			}, Du.apply(this, arguments)
		}
		new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
		const Fu = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"],
			Nu = t.startTransition,
			Iu = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
			zu = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
			ju = e.forwardRef((function(t, n) {
				let r, {
						onClick: a,
						relative: o,
						reloadDocument: i,
						replace: s,
						state: l,
						target: u,
						to: c,
						preventScrollReset: d
					} = t,
					f = function(e, t) {
						if (null == e) return {};
						var n, r, a = {},
							o = Object.keys(e);
						for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
						return a
					}(t, Fu),
					{
						basename: p
					} = e.useContext(_l),
					h = !1;
				if ("string" == typeof c && zu.test(c) && (r = c, Iu)) try {
					let e = new URL(window.location.href),
						t = c.startsWith("//") ? new URL(e.protocol + c) : new URL(c),
						n = wl(t.pathname, p);
					t.origin === e.origin && null != n ? c = n + t.search + t.hash : h = !0
				} catch (e) {}
				let m = function(t, n) {
						let {
							relative: r
						} = void 0 === n ? {} : n;
						Il() || Js(!1);
						let {
							basename: a,
							navigator: o
						} = e.useContext(_l), {
							hash: i,
							pathname: s,
							search: l
						} = $l(t, {
							relative: r
						}), u = s;
						return "/" !== a && (u = "/" === s ? a : El([a, s])), o.createHref({
							pathname: u,
							search: l,
							hash: i
						})
					}(c, {
						relative: o
					}),
					g = function(t, n) {
						let {
							target: r,
							replace: a,
							state: o,
							preventScrollReset: i,
							relative: s
						} = void 0 === n ? {} : n, l = Vl(), u = zl(), c = $l(t, {
							relative: s
						});
						return e.useCallback((e => {
							if (function(e, t) {
									return !(0 !== e.button || t && "_self" !== t || function(e) {
										return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
									}(e))
								}(e, r)) {
								e.preventDefault();
								let n = void 0 !== a ? a : rl(u) === rl(c);
								l(t, {
									replace: n,
									state: o,
									preventScrollReset: i,
									relative: s
								})
							}
						}), [u, l, c, a, o, r, t, i, s])
					}(c, {
						replace: s,
						state: l,
						target: u,
						preventScrollReset: d,
						relative: o
					});
				return e.createElement("a", Du({}, f, {
					href: r || m,
					onClick: h || i ? a : function(e) {
						a && a(e), e.defaultPrevented || g(e)
					},
					ref: n,
					target: u
				}))
			}));
		var Vu, Bu;

		function $u({
			label: t,
			at: n,
			children: r
		}) {
			return e.createElement(vu, null, e.createElement(bu, null, e.createElement(ku, null, e.createElement(ju, {
				to: `/${n}`
			}, e.createElement(Eu, {
				style: {
					width: "7px",
					height: "12px",
					marginRight: "1rem"
				},
				src: Mu,
				alt: "Arrow"
			}), "voltar"), e.createElement("h1", null, t)), r))
		}(function(e) {
			e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher"
		})(Vu || (Vu = {})),
		function(e) {
			e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
		}(Bu || (Bu = {}));
		const Uu = Ie.div`
  height: 9.5rem;
  width: 9.5rem;

  border-radius: 1.15rem;
  background:  black;
  opacity: 0.75;

  animation: loading 1.5s infinite ease-in-out;
  animation-delay: ${({index:e})=>.1*e+"s"};

  @keyframes loading {
    0% {
      opacity: 0.75;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 0.75;
    }
  }
`;

		function Wu(t) {
			return e.createElement($u, Object.assign({}, t), e.createElement(Su, null, Array.from(Array(25).keys()).map(((t, n) => e.createElement(Uu, {
				key: n,
				index: n
			})))), e.createElement(Cu, null))
		}
		const Hu = {
				current: {
					item: 0,
					texture: 0
				},
				isVip: !1,
				isMale: !0,
				max: {
					id: 0,
					item: 100,
					min: -1,
					reset: 0,
					mode: "prop",
					texture: 0,
					defaultPrice: 1e3,
					diamonds: {},
					owned: [5, 7, 4, 100],
					vips: [1],
					prices: {}
				}
			},
			Yu = 35;

		function Qu() {
			const {
				category: t,
				at: n
			} = Bl();
			if (!t || !n) return e.createElement(e.Fragment, null);
			const r = _u[n][t],
				[a, o] = (0, e.useState)(),
				[i, s] = (0, e.useState)([]),
				[l, u] = (0, e.useState)(!0),
				[c, d] = (0, e.useState)(!0),
				[f, p] = (0, e.useState)(0),
				h = (0, e.useRef)(null),
				m = e => {
					const t = null != a ? a : e;
					if (!t) return;
					d(!0);
					const n = Math.ceil(t.max.item / Yu);
					if (f >= n) return;
					const r = t.max.item - t.max.min;
					let o = i.length <= 0 ? r - f * Yu - 1 : r - f * Yu;
					o <= 0 && (o = t.max.min);
					let l = o - Yu;
					l <= t.max.min && (l = t.max.min);
					let u = [];
					u = i.length <= 0 ? [t.max.reset] : [...i];
					for (let e = o; e > l; e--) u.push(e);
					s(u), p(f + 1), d(!1)
				};
			if ((0, e.useEffect)((() => {
					Ve("getDataOfCategory", t, Hu).then((e => {
						o(e), u(!1), m(e)
					})), Ve("updateCamera", t)
				}), []), l || !a) return e.createElement(Wu, {
				at: n,
				label: r.label
			});
			const g = e => {
					var t;
					const n = a.max.min + e;
					return a.max.diamonds[n.toString()] ? "diamond" : (null === (t = a.max.vips) || void 0 === t ? void 0 : t.includes(n)) ? "vip" : "normal"
				},
				y = e => {
					var t, n, r, o;
					const i = (a.max.min + e).toString();
					return (null === (t = a.max.diamonds) || void 0 === t ? void 0 : t[i]) ? null !== (n = a.max.diamonds[i]) && void 0 !== n ? n : 0 : (null === (r = a.max.prices) || void 0 === r ? void 0 : r[i]) ? a.max.prices[i] : null !== (o = a.max.defaultPrice) && void 0 !== o ? o : 0
				},
				v = e => {
					var t, n;
					const r = a.max.min + e;
					return null !== (n = null === (t = a.max.owned) || void 0 === t ? void 0 : t.includes(r)) && void 0 !== n && n
				},
				b = e => {
					const n = a.current.texture,
						r = a.current.item;
					if ("add" === e) {
						if (n + 1 > a.max.texture) return;
						Ve("updateDataOfCategory", {
							category: t,
							item: r,
							texture: n + 1
						})
					} else {
						if (n - 1 < 0) return;
						Ve("updateDataOfCategory", {
							category: t,
							item: r,
							texture: n - 1
						})
					}
					o(Object.assign(Object.assign({}, a), {
						current: Object.assign(Object.assign({}, a.current), {
							texture: "add" === e ? n + 1 : n - 1
						})
					}))
				};
			return e.createElement($u, {
				at: n,
				label: r.label
			}, e.createElement(Su, {
				ref: h,
				onScroll: e => {
					if (h.current && !c) {
						const {
							scrollTop: e,
							scrollHeight: t,
							clientHeight: n
						} = h.current;
						e + n >= t - 10 && m()
					}
				}
			}, i.map(((n, i) => e.createElement(mu, {
				index: n,
				animIndex: i % Yu,
				key: n,
				isOwned: v(n),
				price: y(n),
				type: g(n),
				image: `http://${a.host}/skinshop/${a.isMale?"male":"female"}_${r.imageId}_${n+a.max.min}.png`,
				onClick: () => {
					("vip" !== g(n) || a.isVip) && (e => {
						const n = a.max.min + e;
						Ve("updateDataOfCategory", {
							category: t,
							item: n,
							texture: 0
						}).then((() => {
							Ve("getDataOfCategory", t, Hu).then((e => {
								o(e)
							}))
						}))
					})(n)
				}
			})))), e.createElement(Cu, null, e.createElement(Pu, null, e.createElement(Au, null, e.createElement("img", {
				src: Lu,
				alt: "Pallet"
			})), e.createElement(Ru, null, e.createElement(Tu, {
				style: {
					marginRight: "1rem"
				},
				src: Mu,
				onClick: () => {
					b("remove")
				}
			}), a.current.texture + 1, e.createElement(Tu, {
				style: {
					transform: "rotate(180deg)",
					marginLeft: "1rem"
				},
				src: Mu,
				onClick: () => {
					b("add")
				}
			}))), e.createElement(Pu, null, e.createElement("p", null, "NÚMERO ", e.createElement("br", null), e.createElement("span", null, " ", a.current.item, " ")))))
		}
		const qu = Ie.div`
  display: flex;
  flex-direction: column;
  flex-flow: initial;
  height: 81.5%;
  width: 100%;
  gap: 0.35vw;

  .Cloths, .Legs {
    height: 40%;
  }
  .feet {
    height: 20%;
  }

  .tshirty, .gloves, .necklace {
    height: 27.5%;
  }

  .backpack, .mask {
    height: 50%;
  }
  .shield {
    height: 35%;
  }
  .sticker, .curved {
    height: 25%;
  }
`,
			Gu = Ie.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.35vw;
  height: 100%;
  width: 50%;
`,
			Xu = Ie.div`
  display: flex;
  justify-content: space-between;
  height: 15%;
  gap: 0.35vw;
`;

		function Ku() {
			const {
				at: t
			} = Bl(), n = t || "primary";
			return (0, e.useEffect)((() => {
				Ve("updateCamera")
			}), []), e.createElement(qu, null, e.createElement(Gu, {
				style: {
					width: "47%"
				}
			}, Object.entries(_u[n]).map((([t, r]) => r.columns ? e.createElement(lu, {
				label: r.label,
				src: r.src,
				className: r.gridArea,
				tag: t,
				sub: n,
				key: t
			}) : null))), e.createElement(Gu, {
				style: {
					width: "53%"
				}
			}, Object.entries(_u[n]).map((([t, r]) => r.columns || r.rows || "accessory" === t ? null : e.createElement(lu, {
				label: r.label,
				src: r.src,
				className: r.gridArea,
				tag: t,
				sub: n,
				key: t
			}))), e.createElement(Xu, null, Object.entries(_u[n]).map((([t, r]) => r.rows ? e.createElement(lu, {
				label: r.label,
				src: r.src,
				className: r.gridArea,
				tag: t,
				sub: n,
				key: t
			}) : null))), _u[n].accessory && e.createElement(lu, {
				label: _u[n].accessory.label,
				src: _u[n].accessory.src,
				tag: "accessory",
				sub: n,
				className: "necklace"
			})))
		}

		function Zu() {
			const {
				setVisible: t
			} = ru(), n = zl(), r = Vl(), [a, o] = (0, e.useState)(!1), i = e => {
				r(`/${e}`)
			};
			return (0, e.useEffect)((() => {
				Ve("getIsFirstLogin").then((e => {
					o(e)
				}))
			}), []), e.createElement(vu, null, e.createElement(bu, null, e.createElement(wu, null, e.createElement(xu, {
				isActive: "/" === n.pathname || "/primary" === n.pathname,
				onClick: () => {
					i("primary")
				}
			}, "Primária"), e.createElement(xu, {
				isActive: "/secondary" === n.pathname,
				onClick: () => {
					i("secondary")
				}
			}, "Secundária")), e.createElement(Ku, null), e.createElement(yu, null, !a && e.createElement(gu, {
				onClick: () => {
					Ve("hideFrame")
				}
			}, "CANCELAR"), e.createElement(gu, {
				type: "submit",
				onClick: () => {
					Ve("save"), t(!1)
				}
			}, "SALVAR"))))
		}

		function Ju() {
			return e.createElement(eu, null, e.createElement(Zl, {
				path: "/:at?",
				element: e.createElement(Zu, null)
			}), e.createElement(Zl, {
				path: "/:at/:category",
				element: e.createElement(Qu, null)
			}))
		}
		const ec = (function(t) {
				for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
				var o = be.apply(void 0, [t].concat(r)),
					i = "sc-global-" + Ee(JSON.stringify(o)),
					s = new Ne(o, i);

				function l(t) {
					var n = se(),
						r = le(),
						a = (0, e.useContext)(Le),
						o = (0, e.useRef)(n.allocateGSInstance(i)).current;
					return n.server && u(o, t, n, a, r), (0, e.useLayoutEffect)((function() {
						if (!n.server) return u(o, t, n, a, r),
							function() {
								return s.removeStyles(o, n)
							}
					}), [o, t, n, a, r]), null
				}

				function u(e, t, n, r, a) {
					if (s.isStatic) s.renderStyles(e, C, n, a);
					else {
						var o = h({}, t, {
							theme: we(t, r, l.defaultProps)
						});
						s.renderStyles(e, o, n, a)
					}
				}
				return e.memo(l)
			})`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        user-select: none;
        
        -webkit-font-smoothing: antialiased;
    }
    body > iframe {
    display: none;
    }
    body {
        overflow-y: hidden;
        overflow-x: hidden;
        background: ${ze()?"white":"none"};
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100% 100%;
    }

    body, input, button, * {
        font-family: 'Poppins', serif;
    }
    
    body, input, button {
        font-size: 1vw;
    }
    
    h1, h2, h3, h4, h5, h6 {
        font-weight: 400;
    }
    
    button {
        cursor: pointer;
    }
    
    :root {
        font-size: 62.5%;
    }
    @media (max-width: 768px) {
        :root {
            font-size: 56.25%;
        }
    }
    @media (max-width: 480px) {
        :root {
            font-size: 50%;
        }
    }
`,
			tc = {
				primary: {
					main: "#12ac5a"
				}
			},
			nc = (0, e.createContext)({
				theme: tc.primary
			}),
			rc = t => {
				const [n, r] = (0, e.useState)(!1), a = (0, e.useCallback)((({
					key: e
				}) => {
					e === t && r(!0)
				}), [t]), o = (0, e.useCallback)((({
					key: e
				}) => {
					e === t && r(!1)
				}), [t]);
				return (0, e.useEffect)((() => (window.addEventListener("keypress", a), window.addEventListener("keypress", o), () => {
					window.removeEventListener("keypress", a), window.removeEventListener("keypress", o)
				})), [a, o]), n
			},
			ac = document.getElementById("root");
		ac && n.createRoot(ac).render(e.createElement((function({
			children: t,
			alternativeResource: n
		}) {
			const [r, a] = (0, e.useState)(Be);
			return (0, e.useEffect)((() => {
				Ve("getTheme", {}, Be, n).then((e => {
					a(e)
				}))
			}), []), Ke(Ze.Provider, {
				value: {
					theme: r,
					setTheme: a
				},
				children: Ke(Me, {
					theme: r,
					children: t
				})
			})
		}), null, e.createElement((({
			children: t
		}) => {
			const [n] = (0, e.useState)(tc.primary);
			return e.createElement(nc.Provider, {
				value: {
					theme: n
				}
			}, e.createElement(Me, {
				theme: n
			}, t))
		}), null, e.createElement((function(t) {
			let {
				basename: n,
				children: r,
				future: a,
				window: o
			} = t, i = e.useRef();
			var s;
			null == i.current && (i.current = (void 0 === (s = {
				window: o,
				v5Compat: !0
			}) && (s = {}), function(e, t, n, r) {
				void 0 === r && (r = {});
				let {
					window: a = document.defaultView,
					v5Compat: o = !1
				} = r, i = a.history, s = Ks.Pop, l = null, u = c();

				function c() {
					return (i.state || {
						idx: null
					}).idx
				}

				function d() {
					s = Ks.Pop;
					let e = c(),
						t = null == e ? null : e - u;
					u = e, l && l({
						action: s,
						location: p.location,
						delta: t
					})
				}

				function f(e) {
					let t = "null" !== a.location.origin ? a.location.origin : a.location.href,
						n = "string" == typeof e ? e : rl(e);
					return Js(t, "No window.location.(origin|href) available to create URL for href: " + n), new URL(n, t)
				}
				null == u && (u = 0, i.replaceState(Xs({}, i.state, {
					idx: u
				}), ""));
				let p = {
					get action() {
						return s
					},
					get location() {
						return e(a, i)
					},
					listen(e) {
						if (l) throw new Error("A history only accepts one active listener");
						return a.addEventListener(Zs, d), l = e, () => {
							a.removeEventListener(Zs, d), l = null
						}
					},
					createHref: e => t(a, e),
					createURL: f,
					encodeLocation(e) {
						let t = f(e);
						return {
							pathname: t.pathname,
							search: t.search,
							hash: t.hash
						}
					},
					push: function(e, t) {
						s = Ks.Push;
						let r = nl(p.location, e, t);
						n && n(r, e), u = c() + 1;
						let d = tl(r, u),
							f = p.createHref(r);
						try {
							i.pushState(d, "", f)
						} catch (e) {
							if (e instanceof DOMException && "DataCloneError" === e.name) throw e;
							a.location.assign(f)
						}
						o && l && l({
							action: s,
							location: p.location,
							delta: 1
						})
					},
					replace: function(e, t) {
						s = Ks.Replace;
						let r = nl(p.location, e, t);
						n && n(r, e), u = c();
						let a = tl(r, u),
							d = p.createHref(r);
						i.replaceState(a, "", d), o && l && l({
							action: s,
							location: p.location,
							delta: 0
						})
					},
					go: e => i.go(e)
				};
				return p
			}((function(e, t) {
				let {
					pathname: n,
					search: r,
					hash: a
				} = e.location;
				return nl("", {
					pathname: n,
					search: r,
					hash: a
				}, t.state && t.state.usr || null, t.state && t.state.key || "default")
			}), (function(e, t) {
				return "string" == typeof t ? t : rl(t)
			}), null, s)));
			let l = i.current,
				[u, c] = e.useState({
					action: l.action,
					location: l.location
				}),
				{
					v7_startTransition: d
				} = a || {},
				f = e.useCallback((e => {
					d && Nu ? Nu((() => c(e))) : c(e)
				}), [c, d]);
			return e.useLayoutEffect((() => l.listen(f)), [l, f]), e.createElement(Jl, {
				basename: n,
				children: r,
				location: u.location,
				navigationType: u.action,
				navigator: l
			})
		}), null, e.createElement((({
			children: t
		}) => {
			const [n, r] = (0, e.useState)(!1), a = Vl();
			return ((t, n) => {
				const r = (0, e.useRef)(je);
				(0, e.useEffect)((() => {
					r.current = n
				}), [n]), (0, e.useEffect)((() => {
					const e = e => {
						const {
							action: n,
							data: a
						} = e.data;
						r.current && n === t && r.current(a)
					};
					return window.addEventListener("message", e), () => {
						window.removeEventListener("message", e)
					}
				}), [t])
			})("setVisible", (e => {
				"string" == typeof e ? (r(!0), a("/" + e)) : (a("/"), r(e))
			})), (0, e.useEffect)((() => {
				if (!n) return;
				const e = e => {
					["Escape"].includes(e.code) && (ze() ? r(!n) : Ve("hideFrame"))
				};
				return window.addEventListener("keydown", e), () => {
					window.removeEventListener("keydown", e)
				}
			}), [n]), (0, e.useEffect)((() => {
				ze() && r(!0)
			}), []), e.createElement(nu.Provider, {
				value: {
					visible: n,
					setVisible: r
				}
			}, e.createElement(kt, null, n && e.createElement(Gs.div, {
				initial: {
					opacity: 0
				},
				animate: {
					opacity: 1
				},
				exit: {
					opacity: 0
				},
				transition: {
					duration: .4
				},
				style: {
					width: "100vw",
					height: "100vh"
				}
			}, t)))
		}), null, e.createElement((function({
			children: t
		}) {
			const n = rc("a"),
				r = rc("d"),
				a = rc("w"),
				o = rc("s");
			return (0, e.useEffect)((() => {
				n && Ve("Rotate", "Left"), r && Ve("Rotate", "Right"), a && Ve("Move", "Top"), o && Ve("Move", "Bottom")
			}), [n, r, a, o]), e.createElement(e.Fragment, null, t)
		}), null, e.createElement((function() {
			return e.createElement(Ju, null)
		}), null))))), e.createElement(ec, null)))
	})()
})();