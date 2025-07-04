(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerpolicy && (s.referrerPolicy = i.referrerpolicy),
      i.crossorigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossorigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function E() {}
function Q(e) {
  return e();
}
function B() {
  return Object.create(null);
}
function j(e) {
  e.forEach(Q);
}
function X(e) {
  return typeof e == "function";
}
function le(e, t) {
  return e != e
    ? t == t
    : e !== t || (e && typeof e == "object") || typeof e == "function";
}
let O;
function ae(e, t) {
  return O || (O = document.createElement("a")), (O.href = t), e === O.href;
}
function de(e) {
  return Object.keys(e).length === 0;
}
function p(e, t) {
  e.appendChild(t);
}
function I(e, t, n) {
  e.insertBefore(t, n || null);
}
function C(e) {
  e.parentNode.removeChild(e);
}
function pe(e, t) {
  for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t);
}
function m(e) {
  return document.createElement(e);
}
function K(e) {
  return document.createTextNode(e);
}
function L() {
  return K(" ");
}
function he() {
  return K("");
}
function me(e, t, n, r) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r);
}
function h(e, t, n) {
  n == null
    ? e.removeAttribute(t)
    : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function ve(e) {
  return Array.from(e.childNodes);
}
let $;
function x(e) {
  $ = e;
}
function ge() {
  if (!$) throw new Error("Function called outside component initialization");
  return $;
}
function _e(e) {
  ge().$$.on_destroy.push(e);
}
const w = [],
  G = [],
  N = [],
  Y = [],
  ye = Promise.resolve();
let S = !1;
function be() {
  S || ((S = !0), ye.then(ee));
}
function T(e) {
  N.push(e);
}
const P = new Set();
let k = 0;
function ee() {
  const e = $;
  do {
    for (; k < w.length; ) {
      const t = w[k];
      k++, x(t), Le(t.$$);
    }
    for (x(null), w.length = 0, k = 0; G.length; ) G.pop()();
    for (let t = 0; t < N.length; t += 1) {
      const n = N[t];
      P.has(n) || (P.add(n), n());
    }
    N.length = 0;
  } while (w.length);
  for (; Y.length; ) Y.pop()();
  (S = !1), P.clear(), x(e);
}
function Le(e) {
  if (e.fragment !== null) {
    e.update(), j(e.before_update);
    const t = e.dirty;
    (e.dirty = [-1]),
      e.fragment && e.fragment.p(e.ctx, t),
      e.after_update.forEach(T);
  }
}
const we = new Set();
function xe(e, t) {
  e && e.i && (we.delete(e), e.i(t));
}
function Ee(e, t, n, r) {
  const { fragment: i, after_update: s } = e.$$;
  i && i.m(t, n),
    r ||
      T(() => {
        const o = e.$$.on_mount.map(Q).filter(X);
        e.$$.on_destroy ? e.$$.on_destroy.push(...o) : j(o),
          (e.$$.on_mount = []);
      }),
    s.forEach(T);
}
function $e(e, t) {
  const n = e.$$;
  n.fragment !== null &&
    (j(n.on_destroy),
    n.fragment && n.fragment.d(t),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function Oe(e, t) {
  e.$$.dirty[0] === -1 && (w.push(e), be(), e.$$.dirty.fill(0)),
    (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
}
function ke(e, t, n, r, i, s, o, u = [-1]) {
  const f = $;
  x(e);
  const l = (e.$$ = {
    fragment: null,
    ctx: [],
    props: s,
    update: E,
    not_equal: i,
    bound: B(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (f ? f.$$.context : [])),
    callbacks: B(),
    dirty: u,
    skip_bound: !1,
    root: t.target || f.$$.root,
  });
  o && o(l.root);
  let a = !1;
  if (
    ((l.ctx = n
      ? n(e, t.props || {}, (d, _, ...y) => {
          const v = y.length ? y[0] : _;
          return (
            l.ctx &&
              i(l.ctx[d], (l.ctx[d] = v)) &&
              (!l.skip_bound && l.bound[d] && l.bound[d](v), a && Oe(e, d)),
            _
          );
        })
      : []),
    l.update(),
    (a = !0),
    j(l.before_update),
    (l.fragment = r ? r(l.ctx) : !1),
    t.target)
  ) {
    if (t.hydrate) {
      const d = ve(t.target);
      l.fragment && l.fragment.l(d), d.forEach(C);
    } else l.fragment && l.fragment.c();
    t.intro && xe(e.$$.fragment),
      Ee(e, t.target, t.anchor, t.customElement),
      ee();
  }
  x(f);
}
class Ne {
  $destroy() {
    $e(this, 1), (this.$destroy = E);
  }
  $on(t, n) {
    if (!X(n)) return E;
    const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return (
      r.push(n),
      () => {
        const i = r.indexOf(n);
        i !== -1 && r.splice(i, 1);
      }
    );
  }
  $set(t) {
    this.$$set &&
      !de(t) &&
      ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
  }
}
var U = { exports: {} },
  g = typeof Reflect == "object" ? Reflect : null,
  z =
    g && typeof g.apply == "function"
      ? g.apply
      : function (t, n, r) {
          return Function.prototype.apply.call(t, n, r);
        },
  R;
g && typeof g.ownKeys == "function"
  ? (R = g.ownKeys)
  : Object.getOwnPropertySymbols
  ? (R = function (t) {
      return Object.getOwnPropertyNames(t).concat(
        Object.getOwnPropertySymbols(t)
      );
    })
  : (R = function (t) {
      return Object.getOwnPropertyNames(t);
    });
function Re(e) {
  console && console.warn && console.warn(e);
}
var te =
  Number.isNaN ||
  function (t) {
    return t !== t;
  };
function c() {
  c.init.call(this);
}
U.exports = c;
U.exports.once = Me;
c.EventEmitter = c;
c.prototype._events = void 0;
c.prototype._eventsCount = 0;
c.prototype._maxListeners = void 0;
var D = 10;
function A(e) {
  if (typeof e != "function")
    throw new TypeError(
      'The "listener" argument must be of type Function. Received type ' +
        typeof e
    );
}
Object.defineProperty(c, "defaultMaxListeners", {
  enumerable: !0,
  get: function () {
    return D;
  },
  set: function (e) {
    if (typeof e != "number" || e < 0 || te(e))
      throw new RangeError(
        'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
          e +
          "."
      );
    D = e;
  },
});
c.init = function () {
  (this._events === void 0 ||
    this._events === Object.getPrototypeOf(this)._events) &&
    ((this._events = Object.create(null)), (this._eventsCount = 0)),
    (this._maxListeners = this._maxListeners || void 0);
};
c.prototype.setMaxListeners = function (t) {
  if (typeof t != "number" || t < 0 || te(t))
    throw new RangeError(
      'The value of "n" is out of range. It must be a non-negative number. Received ' +
        t +
        "."
    );
  return (this._maxListeners = t), this;
};
function ne(e) {
  return e._maxListeners === void 0 ? c.defaultMaxListeners : e._maxListeners;
}
c.prototype.getMaxListeners = function () {
  return ne(this);
};
c.prototype.emit = function (t) {
  for (var n = [], r = 1; r < arguments.length; r++) n.push(arguments[r]);
  var i = t === "error",
    s = this._events;
  if (s !== void 0) i = i && s.error === void 0;
  else if (!i) return !1;
  if (i) {
    var o;
    if ((n.length > 0 && (o = n[0]), o instanceof Error)) throw o;
    var u = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
    throw ((u.context = o), u);
  }
  var f = s[t];
  if (f === void 0) return !1;
  if (typeof f == "function") z(f, this, n);
  else for (var l = f.length, a = ue(f, l), r = 0; r < l; ++r) z(a[r], this, n);
  return !0;
};
function re(e, t, n, r) {
  var i, s, o;
  if (
    (A(n),
    (s = e._events),
    s === void 0
      ? ((s = e._events = Object.create(null)), (e._eventsCount = 0))
      : (s.newListener !== void 0 &&
          (e.emit("newListener", t, n.listener ? n.listener : n),
          (s = e._events)),
        (o = s[t])),
    o === void 0)
  )
    (o = s[t] = n), ++e._eventsCount;
  else if (
    (typeof o == "function"
      ? (o = s[t] = r ? [n, o] : [o, n])
      : r
      ? o.unshift(n)
      : o.push(n),
    (i = ne(e)),
    i > 0 && o.length > i && !o.warned)
  ) {
    o.warned = !0;
    var u = new Error(
      "Possible EventEmitter memory leak detected. " +
        o.length +
        " " +
        String(t) +
        " listeners added. Use emitter.setMaxListeners() to increase limit"
    );
    (u.name = "MaxListenersExceededWarning"),
      (u.emitter = e),
      (u.type = t),
      (u.count = o.length),
      Re(u);
  }
  return e;
}
c.prototype.addListener = function (t, n) {
  return re(this, t, n, !1);
};
c.prototype.on = c.prototype.addListener;
c.prototype.prependListener = function (t, n) {
  return re(this, t, n, !0);
};
function je() {
  if (!this.fired)
    return (
      this.target.removeListener(this.type, this.wrapFn),
      (this.fired = !0),
      arguments.length === 0
        ? this.listener.call(this.target)
        : this.listener.apply(this.target, arguments)
    );
}
function ie(e, t, n) {
  var r = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n },
    i = je.bind(r);
  return (i.listener = n), (r.wrapFn = i), i;
}
c.prototype.once = function (t, n) {
  return A(n), this.on(t, ie(this, t, n)), this;
};
c.prototype.prependOnceListener = function (t, n) {
  return A(n), this.prependListener(t, ie(this, t, n)), this;
};
c.prototype.removeListener = function (t, n) {
  var r, i, s, o, u;
  if ((A(n), (i = this._events), i === void 0)) return this;
  if (((r = i[t]), r === void 0)) return this;
  if (r === n || r.listener === n)
    --this._eventsCount === 0
      ? (this._events = Object.create(null))
      : (delete i[t],
        i.removeListener && this.emit("removeListener", t, r.listener || n));
  else if (typeof r != "function") {
    for (s = -1, o = r.length - 1; o >= 0; o--)
      if (r[o] === n || r[o].listener === n) {
        (u = r[o].listener), (s = o);
        break;
      }
    if (s < 0) return this;
    s === 0 ? r.shift() : Ce(r, s),
      r.length === 1 && (i[t] = r[0]),
      i.removeListener !== void 0 && this.emit("removeListener", t, u || n);
  }
  return this;
};
c.prototype.off = c.prototype.removeListener;
c.prototype.removeAllListeners = function (t) {
  var n, r, i;
  if (((r = this._events), r === void 0)) return this;
  if (r.removeListener === void 0)
    return (
      arguments.length === 0
        ? ((this._events = Object.create(null)), (this._eventsCount = 0))
        : r[t] !== void 0 &&
          (--this._eventsCount === 0
            ? (this._events = Object.create(null))
            : delete r[t]),
      this
    );
  if (arguments.length === 0) {
    var s = Object.keys(r),
      o;
    for (i = 0; i < s.length; ++i)
      (o = s[i]), o !== "removeListener" && this.removeAllListeners(o);
    return (
      this.removeAllListeners("removeListener"),
      (this._events = Object.create(null)),
      (this._eventsCount = 0),
      this
    );
  }
  if (((n = r[t]), typeof n == "function")) this.removeListener(t, n);
  else if (n !== void 0)
    for (i = n.length - 1; i >= 0; i--) this.removeListener(t, n[i]);
  return this;
};
function oe(e, t, n) {
  var r = e._events;
  if (r === void 0) return [];
  var i = r[t];
  return i === void 0
    ? []
    : typeof i == "function"
    ? n
      ? [i.listener || i]
      : [i]
    : n
    ? Ae(i)
    : ue(i, i.length);
}
c.prototype.listeners = function (t) {
  return oe(this, t, !0);
};
c.prototype.rawListeners = function (t) {
  return oe(this, t, !1);
};
c.listenerCount = function (e, t) {
  return typeof e.listenerCount == "function"
    ? e.listenerCount(t)
    : se.call(e, t);
};
c.prototype.listenerCount = se;
function se(e) {
  var t = this._events;
  if (t !== void 0) {
    var n = t[e];
    if (typeof n == "function") return 1;
    if (n !== void 0) return n.length;
  }
  return 0;
}
c.prototype.eventNames = function () {
  return this._eventsCount > 0 ? R(this._events) : [];
};
function ue(e, t) {
  for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
  return n;
}
function Ce(e, t) {
  for (; t + 1 < e.length; t++) e[t] = e[t + 1];
  e.pop();
}
function Ae(e) {
  for (var t = new Array(e.length), n = 0; n < t.length; ++n)
    t[n] = e[n].listener || e[n];
  return t;
}
function Me(e, t) {
  return new Promise(function (n, r) {
    function i(o) {
      e.removeListener(t, s), r(o);
    }
    function s() {
      typeof e.removeListener == "function" && e.removeListener("error", i),
        n([].slice.call(arguments));
    }
    fe(e, t, s, { once: !0 }), t !== "error" && Pe(e, i, { once: !0 });
  });
}
function Pe(e, t, n) {
  typeof e.on == "function" && fe(e, "error", t, n);
}
function fe(e, t, n, r) {
  if (typeof e.on == "function") r.once ? e.once(t, n) : e.on(t, n);
  else if (typeof e.addEventListener == "function")
    e.addEventListener(t, function i(s) {
      r.once && e.removeEventListener(t, i), n(s);
    });
  else
    throw new TypeError(
      'The "emitter" argument must be of type EventEmitter. Received type ' +
        typeof e
    );
}
const F = new U.exports.EventEmitter();
addEventListener("message", (e) => F.emit(e.data.name, e.data.payload));
function Se(e, t) {
  F.on(e, t), _e(() => F.removeListener(e, t));
}
async function Te(e, t) {
  return fetch(`http://${GetParentResourceName()}/${e}`, {
    method: "POST",
    body: JSON.stringify(t),
  })
    .then((n) => n.json())
    .catch((n) => console.error("Erro de solita\xE7\xE3o", n));
}
const Fe = "" + new URL("uno.png", import.meta.url).href,
  Ie = "" + new URL("pop110i.png", import.meta.url).href,
  Ke = "" + new URL("cg.png", import.meta.url).href;
function J(e, t, n) {
  const r = e.slice();
  return (
    (r[4] = t[n].index),
    (r[5] = t[n].title),
    (r[6] = t[n].subtitle),
    (r[7] = t[n].photo),
    r
  );
}
function V(e) {
  let t,
    n,
    r,
    i,
    s,
    o = e[1],
    u = [];
  for (let f = 0; f < o.length; f += 1) u[f] = Z(J(e, o, f));
  return {
    c() {
      (t = m("main")),
        (n = m("section")),
        (r = m("span")),
        (r.textContent = "Escolha um ve\xEDculo"),
        (i = L()),
        (s = m("section"));
      for (let f = 0; f < u.length; f += 1) u[f].c();
      h(r, "class", "text-[2rem] text-white/50 uppercase"),
        h(s, "class", "grid grid-cols-3 gap-10"),
        h(n, "class", "grid place-items-center space-y-11"),
        h(
          t,
          "class",
          'fixed inset-0 grid place-items-center font-poppins text-white bg-[url("./assets/creative.png")] bg-no-repeat bg-cover select-none'
        );
    },
    m(f, l) {
      I(f, t, l), p(t, n), p(n, r), p(n, i), p(n, s);
      for (let a = 0; a < u.length; a += 1) u[a].m(s, null);
    },
    p(f, l) {
      if (l & 6) {
        o = f[1];
        let a;
        for (a = 0; a < o.length; a += 1) {
          const d = J(f, o, a);
          u[a] ? u[a].p(d, l) : ((u[a] = Z(d)), u[a].c(), u[a].m(s, null));
        }
        for (; a < u.length; a += 1) u[a].d(1);
        u.length = o.length;
      }
    },
    d(f) {
      f && C(t), pe(u, f);
    },
  };
}
function Z(e) {
  let t,
    n,
    r,
    i,
    s = e[5] + "",
    o,
    u,
    f = e[6] + "",
    l,
    a,
    d,
    _,
    y,
    v,
    W,
    M,
    q;
  function ce() {
    return e[3](e[4]);
  }
  return {
    c() {
      (t = m("section")),
        (n = m("section")),
        (r = m("section")),
        (i = m("span")),
        (o = L()),
        (u = m("span")),
        (l = K(f)),
        (a = L()),
        (d = m("img")),
        (y = L()),
        (v = m("button")),
        (v.innerHTML =
          '<span class="text-xl font-bold tracking-wider uppercase">Escolher</span>'),
        (W = L()),
        h(i, "class", "text-[2.5rem] leading-[2.5rem] font-semibold"),
        h(u, "class", "text-2xl text-cr font-medium"),
        h(r, "class", "p-10 grid place-items-start gap-2"),
        h(d, "class", "absolute bottom-0"),
        ae(d.src, (_ = e[7])) || h(d, "src", _),
        h(d, "alt", e[6]),
        h(
          n,
          "class",
          "w-[21.25rem] h-[25rem] relative bg-black/50 overflow-hidden rounded"
        ),
        h(
          v,
          "class",
          "w-[21.25rem] h-[3.9375rem] bg-cr hover:[box-shadow:_0px_0px_35px_rgba(65,_130,_226,_0.35)] duration-700 rounded"
        ),
        h(t, "class", "grid place-items-center gap-[2.1875rem]");
    },
    m(b, H) {
      I(b, t, H),
        p(t, n),
        p(n, r),
        p(r, i),
        (i.innerHTML = s),
        p(r, o),
        p(r, u),
        p(u, l),
        p(n, a),
        p(n, d),
        p(t, y),
        p(t, v),
        p(t, W),
        M || ((q = me(v, "click", ce)), (M = !0));
    },
    p(b, H) {
      e = b;
    },
    d(b) {
      b && C(t), (M = !1), q();
    },
  };
}
function Ue(e) {
  let t,
    n = e[0] && V(e);
  return {
    c() {
      n && n.c(), (t = he());
    },
    m(r, i) {
      n && n.m(r, i), I(r, t, i);
    },
    p(r, [i]) {
      r[0]
        ? n
          ? n.p(r, i)
          : ((n = V(r)), n.c(), n.m(t.parentNode, t))
        : n && (n.d(1), (n = null));
    },
    i: E,
    o: E,
    d(r) {
      n && n.d(r), r && C(t);
    },
  };
}
function We(e, t, n) {
  let r = location.port === "5173" || !1,
    i = [
      {
        index: "uno",
        title: "Uno",
        subtitle: "Fiat",
        photo: Fe,
      },
      {
        index: "pop110i",
        title: "Pop110i",
        subtitle: "Honda",
        photo: Ie,
      },
      { index: "cg160", title: "Cg160", subtitle: "Honda", photo: Ke },
    ];
  Se("Open", () => n(0, (r = !0)));
  async function s(u) {
    (await Te("Save", { name: u })) && n(0, (r = !1));
  }
  return [r, i, s, (u) => s(u)];
}
class qe extends Ne {
  constructor(t) {
    super(), ke(this, t, We, Ue, le, {});
  }
}
new qe({ target: document.getElementById("app") });
