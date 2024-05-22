(function () {

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

      var $parcel$global =
        typeof globalThis !== 'undefined'
          ? globalThis
          : typeof self !== 'undefined'
          ? self
          : typeof window !== 'undefined'
          ? window
          : typeof global !== 'undefined'
          ? global
          : {};
  
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire1263"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire1263"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("5VtQp", function(module, exports) {

$parcel$export(module.exports, "Fragment", function () { return $45096d186015f093$export$ffb0004e005737fa; }, function (v) { return $45096d186015f093$export$ffb0004e005737fa = v; });
$parcel$export(module.exports, "jsx", function () { return $45096d186015f093$export$34b9dba7ce09269b; }, function (v) { return $45096d186015f093$export$34b9dba7ce09269b = v; });
$parcel$export(module.exports, "jsxs", function () { return $45096d186015f093$export$25062201e9e25d76; }, function (v) { return $45096d186015f093$export$25062201e9e25d76 = v; });
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $45096d186015f093$export$ffb0004e005737fa;
var $45096d186015f093$export$34b9dba7ce09269b;
var $45096d186015f093$export$25062201e9e25d76;
"use strict";

var $iS7v4 = parcelRequire("iS7v4");
var $45096d186015f093$var$k = Symbol.for("react.element"), $45096d186015f093$var$l = Symbol.for("react.fragment"), $45096d186015f093$var$m = Object.prototype.hasOwnProperty, $45096d186015f093$var$n = $iS7v4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, $45096d186015f093$var$p = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function $45096d186015f093$var$q(c, a, g) {
    var b, d = {}, e = null, h = null;
    void 0 !== g && (e = "" + g);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (h = a.ref);
    for(b in a)$45096d186015f093$var$m.call(a, b) && !$45096d186015f093$var$p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps) for(b in a = c.defaultProps, a)void 0 === d[b] && (d[b] = a[b]);
    return {
        $$typeof: $45096d186015f093$var$k,
        type: c,
        key: e,
        ref: h,
        props: d,
        _owner: $45096d186015f093$var$n.current
    };
}
$45096d186015f093$export$ffb0004e005737fa = $45096d186015f093$var$l;
$45096d186015f093$export$34b9dba7ce09269b = $45096d186015f093$var$q;
$45096d186015f093$export$25062201e9e25d76 = $45096d186015f093$var$q;

});
parcelRegister("iS7v4", function(module, exports) {
"use strict";

module.exports = (parcelRequire("hNc7R"));

});
parcelRegister("hNc7R", function(module, exports) {

$parcel$export(module.exports, "Children", function () { return $cf406b2e9805b88b$export$dca3b0875bd9a954; }, function (v) { return $cf406b2e9805b88b$export$dca3b0875bd9a954 = v; });
$parcel$export(module.exports, "Component", function () { return $cf406b2e9805b88b$export$16fa2f45be04daa8; }, function (v) { return $cf406b2e9805b88b$export$16fa2f45be04daa8 = v; });
$parcel$export(module.exports, "Fragment", function () { return $cf406b2e9805b88b$export$ffb0004e005737fa; }, function (v) { return $cf406b2e9805b88b$export$ffb0004e005737fa = v; });
$parcel$export(module.exports, "Profiler", function () { return $cf406b2e9805b88b$export$e2c29f18771995cb; }, function (v) { return $cf406b2e9805b88b$export$e2c29f18771995cb = v; });
$parcel$export(module.exports, "PureComponent", function () { return $cf406b2e9805b88b$export$221d75b3f55bb0bd; }, function (v) { return $cf406b2e9805b88b$export$221d75b3f55bb0bd = v; });
$parcel$export(module.exports, "StrictMode", function () { return $cf406b2e9805b88b$export$5f8d39834fd61797; }, function (v) { return $cf406b2e9805b88b$export$5f8d39834fd61797 = v; });
$parcel$export(module.exports, "Suspense", function () { return $cf406b2e9805b88b$export$74bf444e3cd11ea5; }, function (v) { return $cf406b2e9805b88b$export$74bf444e3cd11ea5 = v; });
$parcel$export(module.exports, "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED", function () { return $cf406b2e9805b88b$export$ae55be85d98224ed; }, function (v) { return $cf406b2e9805b88b$export$ae55be85d98224ed = v; });
$parcel$export(module.exports, "act", function () { return $cf406b2e9805b88b$export$3ba232387fd5d6dd; }, function (v) { return $cf406b2e9805b88b$export$3ba232387fd5d6dd = v; });
$parcel$export(module.exports, "cloneElement", function () { return $cf406b2e9805b88b$export$e530037191fcd5d7; }, function (v) { return $cf406b2e9805b88b$export$e530037191fcd5d7 = v; });
$parcel$export(module.exports, "createContext", function () { return $cf406b2e9805b88b$export$fd42f52fd3ae1109; }, function (v) { return $cf406b2e9805b88b$export$fd42f52fd3ae1109 = v; });
$parcel$export(module.exports, "createElement", function () { return $cf406b2e9805b88b$export$c8a8987d4410bf2d; }, function (v) { return $cf406b2e9805b88b$export$c8a8987d4410bf2d = v; });
$parcel$export(module.exports, "createFactory", function () { return $cf406b2e9805b88b$export$d38cd72104c1f0e9; }, function (v) { return $cf406b2e9805b88b$export$d38cd72104c1f0e9 = v; });
$parcel$export(module.exports, "createRef", function () { return $cf406b2e9805b88b$export$7d1e3a5e95ceca43; }, function (v) { return $cf406b2e9805b88b$export$7d1e3a5e95ceca43 = v; });
$parcel$export(module.exports, "forwardRef", function () { return $cf406b2e9805b88b$export$257a8862b851cb5b; }, function (v) { return $cf406b2e9805b88b$export$257a8862b851cb5b = v; });
$parcel$export(module.exports, "isValidElement", function () { return $cf406b2e9805b88b$export$a8257692ac88316c; }, function (v) { return $cf406b2e9805b88b$export$a8257692ac88316c = v; });
$parcel$export(module.exports, "lazy", function () { return $cf406b2e9805b88b$export$488013bae63b21da; }, function (v) { return $cf406b2e9805b88b$export$488013bae63b21da = v; });
$parcel$export(module.exports, "memo", function () { return $cf406b2e9805b88b$export$7c73462e0d25e514; }, function (v) { return $cf406b2e9805b88b$export$7c73462e0d25e514 = v; });
$parcel$export(module.exports, "startTransition", function () { return $cf406b2e9805b88b$export$7568632d0d33d16d; }, function (v) { return $cf406b2e9805b88b$export$7568632d0d33d16d = v; });
$parcel$export(module.exports, "unstable_act", function () { return $cf406b2e9805b88b$export$88948ce120ea2619; }, function (v) { return $cf406b2e9805b88b$export$88948ce120ea2619 = v; });
$parcel$export(module.exports, "useCallback", function () { return $cf406b2e9805b88b$export$35808ee640e87ca7; }, function (v) { return $cf406b2e9805b88b$export$35808ee640e87ca7 = v; });
$parcel$export(module.exports, "useContext", function () { return $cf406b2e9805b88b$export$fae74005e78b1a27; }, function (v) { return $cf406b2e9805b88b$export$fae74005e78b1a27 = v; });
$parcel$export(module.exports, "useDebugValue", function () { return $cf406b2e9805b88b$export$dc8fbce3eb94dc1e; }, function (v) { return $cf406b2e9805b88b$export$dc8fbce3eb94dc1e = v; });
$parcel$export(module.exports, "useDeferredValue", function () { return $cf406b2e9805b88b$export$6a7bc4e911dc01cf; }, function (v) { return $cf406b2e9805b88b$export$6a7bc4e911dc01cf = v; });
$parcel$export(module.exports, "useEffect", function () { return $cf406b2e9805b88b$export$6d9c69b0de29b591; }, function (v) { return $cf406b2e9805b88b$export$6d9c69b0de29b591 = v; });
$parcel$export(module.exports, "useId", function () { return $cf406b2e9805b88b$export$f680877a34711e37; }, function (v) { return $cf406b2e9805b88b$export$f680877a34711e37 = v; });
$parcel$export(module.exports, "useImperativeHandle", function () { return $cf406b2e9805b88b$export$d5a552a76deda3c2; }, function (v) { return $cf406b2e9805b88b$export$d5a552a76deda3c2 = v; });
$parcel$export(module.exports, "useInsertionEffect", function () { return $cf406b2e9805b88b$export$aaabe4eda9ed9969; }, function (v) { return $cf406b2e9805b88b$export$aaabe4eda9ed9969 = v; });
$parcel$export(module.exports, "useLayoutEffect", function () { return $cf406b2e9805b88b$export$e5c5a5f917a5871c; }, function (v) { return $cf406b2e9805b88b$export$e5c5a5f917a5871c = v; });
$parcel$export(module.exports, "useMemo", function () { return $cf406b2e9805b88b$export$1538c33de8887b59; }, function (v) { return $cf406b2e9805b88b$export$1538c33de8887b59 = v; });
$parcel$export(module.exports, "useReducer", function () { return $cf406b2e9805b88b$export$13e3392192263954; }, function (v) { return $cf406b2e9805b88b$export$13e3392192263954 = v; });
$parcel$export(module.exports, "useRef", function () { return $cf406b2e9805b88b$export$b8f5890fc79d6aca; }, function (v) { return $cf406b2e9805b88b$export$b8f5890fc79d6aca = v; });
$parcel$export(module.exports, "useState", function () { return $cf406b2e9805b88b$export$60241385465d0a34; }, function (v) { return $cf406b2e9805b88b$export$60241385465d0a34 = v; });
$parcel$export(module.exports, "useSyncExternalStore", function () { return $cf406b2e9805b88b$export$306c0aa65ff9ec16; }, function (v) { return $cf406b2e9805b88b$export$306c0aa65ff9ec16 = v; });
$parcel$export(module.exports, "useTransition", function () { return $cf406b2e9805b88b$export$7b286972b8d8ccbf; }, function (v) { return $cf406b2e9805b88b$export$7b286972b8d8ccbf = v; });
$parcel$export(module.exports, "version", function () { return $cf406b2e9805b88b$export$83d89fbfd8236492; }, function (v) { return $cf406b2e9805b88b$export$83d89fbfd8236492 = v; });
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $cf406b2e9805b88b$export$dca3b0875bd9a954;
var $cf406b2e9805b88b$export$16fa2f45be04daa8;
var $cf406b2e9805b88b$export$ffb0004e005737fa;
var $cf406b2e9805b88b$export$e2c29f18771995cb;
var $cf406b2e9805b88b$export$221d75b3f55bb0bd;
var $cf406b2e9805b88b$export$5f8d39834fd61797;
var $cf406b2e9805b88b$export$74bf444e3cd11ea5;
var $cf406b2e9805b88b$export$ae55be85d98224ed;
var $cf406b2e9805b88b$export$3ba232387fd5d6dd;
var $cf406b2e9805b88b$export$e530037191fcd5d7;
var $cf406b2e9805b88b$export$fd42f52fd3ae1109;
var $cf406b2e9805b88b$export$c8a8987d4410bf2d;
var $cf406b2e9805b88b$export$d38cd72104c1f0e9;
var $cf406b2e9805b88b$export$7d1e3a5e95ceca43;
var $cf406b2e9805b88b$export$257a8862b851cb5b;
var $cf406b2e9805b88b$export$a8257692ac88316c;
var $cf406b2e9805b88b$export$488013bae63b21da;
var $cf406b2e9805b88b$export$7c73462e0d25e514;
var $cf406b2e9805b88b$export$7568632d0d33d16d;
var $cf406b2e9805b88b$export$88948ce120ea2619;
var $cf406b2e9805b88b$export$35808ee640e87ca7;
var $cf406b2e9805b88b$export$fae74005e78b1a27;
var $cf406b2e9805b88b$export$dc8fbce3eb94dc1e;
var $cf406b2e9805b88b$export$6a7bc4e911dc01cf;
var $cf406b2e9805b88b$export$6d9c69b0de29b591;
var $cf406b2e9805b88b$export$f680877a34711e37;
var $cf406b2e9805b88b$export$d5a552a76deda3c2;
var $cf406b2e9805b88b$export$aaabe4eda9ed9969;
var $cf406b2e9805b88b$export$e5c5a5f917a5871c;
var $cf406b2e9805b88b$export$1538c33de8887b59;
var $cf406b2e9805b88b$export$13e3392192263954;
var $cf406b2e9805b88b$export$b8f5890fc79d6aca;
var $cf406b2e9805b88b$export$60241385465d0a34;
var $cf406b2e9805b88b$export$306c0aa65ff9ec16;
var $cf406b2e9805b88b$export$7b286972b8d8ccbf;
var $cf406b2e9805b88b$export$83d89fbfd8236492;
"use strict";
var $cf406b2e9805b88b$var$l = Symbol.for("react.element"), $cf406b2e9805b88b$var$n = Symbol.for("react.portal"), $cf406b2e9805b88b$var$p = Symbol.for("react.fragment"), $cf406b2e9805b88b$var$q = Symbol.for("react.strict_mode"), $cf406b2e9805b88b$var$r = Symbol.for("react.profiler"), $cf406b2e9805b88b$var$t = Symbol.for("react.provider"), $cf406b2e9805b88b$var$u = Symbol.for("react.context"), $cf406b2e9805b88b$var$v = Symbol.for("react.forward_ref"), $cf406b2e9805b88b$var$w = Symbol.for("react.suspense"), $cf406b2e9805b88b$var$x = Symbol.for("react.memo"), $cf406b2e9805b88b$var$y = Symbol.for("react.lazy"), $cf406b2e9805b88b$var$z = Symbol.iterator;
function $cf406b2e9805b88b$var$A(a) {
    if (null === a || "object" !== typeof a) return null;
    a = $cf406b2e9805b88b$var$z && a[$cf406b2e9805b88b$var$z] || a["@@iterator"];
    return "function" === typeof a ? a : null;
}
var $cf406b2e9805b88b$var$B = {
    isMounted: function() {
        return !1;
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}, $cf406b2e9805b88b$var$C = Object.assign, $cf406b2e9805b88b$var$D = {};
function $cf406b2e9805b88b$var$E(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = $cf406b2e9805b88b$var$D;
    this.updater = e || $cf406b2e9805b88b$var$B;
}
$cf406b2e9805b88b$var$E.prototype.isReactComponent = {};
$cf406b2e9805b88b$var$E.prototype.setState = function(a, b) {
    if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, a, b, "setState");
};
$cf406b2e9805b88b$var$E.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function $cf406b2e9805b88b$var$F() {}
$cf406b2e9805b88b$var$F.prototype = $cf406b2e9805b88b$var$E.prototype;
function $cf406b2e9805b88b$var$G(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = $cf406b2e9805b88b$var$D;
    this.updater = e || $cf406b2e9805b88b$var$B;
}
var $cf406b2e9805b88b$var$H = $cf406b2e9805b88b$var$G.prototype = new $cf406b2e9805b88b$var$F;
$cf406b2e9805b88b$var$H.constructor = $cf406b2e9805b88b$var$G;
$cf406b2e9805b88b$var$C($cf406b2e9805b88b$var$H, $cf406b2e9805b88b$var$E.prototype);
$cf406b2e9805b88b$var$H.isPureReactComponent = !0;
var $cf406b2e9805b88b$var$I = Array.isArray, $cf406b2e9805b88b$var$J = Object.prototype.hasOwnProperty, $cf406b2e9805b88b$var$K = {
    current: null
}, $cf406b2e9805b88b$var$L = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function $cf406b2e9805b88b$var$M(a, b, e) {
    var d, c = {}, k = null, h = null;
    if (null != b) for(d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b)$cf406b2e9805b88b$var$J.call(b, d) && !$cf406b2e9805b88b$var$L.hasOwnProperty(d) && (c[d] = b[d]);
    var g = arguments.length - 2;
    if (1 === g) c.children = e;
    else if (1 < g) {
        for(var f = Array(g), m = 0; m < g; m++)f[m] = arguments[m + 2];
        c.children = f;
    }
    if (a && a.defaultProps) for(d in g = a.defaultProps, g)void 0 === c[d] && (c[d] = g[d]);
    return {
        $$typeof: $cf406b2e9805b88b$var$l,
        type: a,
        key: k,
        ref: h,
        props: c,
        _owner: $cf406b2e9805b88b$var$K.current
    };
}
function $cf406b2e9805b88b$var$N(a, b) {
    return {
        $$typeof: $cf406b2e9805b88b$var$l,
        type: a.type,
        key: b,
        ref: a.ref,
        props: a.props,
        _owner: a._owner
    };
}
function $cf406b2e9805b88b$var$O(a) {
    return "object" === typeof a && null !== a && a.$$typeof === $cf406b2e9805b88b$var$l;
}
function $cf406b2e9805b88b$var$escape(a) {
    var b = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + a.replace(/[=:]/g, function(a) {
        return b[a];
    });
}
var $cf406b2e9805b88b$var$P = /\/+/g;
function $cf406b2e9805b88b$var$Q(a, b) {
    return "object" === typeof a && null !== a && null != a.key ? $cf406b2e9805b88b$var$escape("" + a.key) : b.toString(36);
}
function $cf406b2e9805b88b$var$R(a, b, e, d, c) {
    var k = typeof a;
    if ("undefined" === k || "boolean" === k) a = null;
    var h = !1;
    if (null === a) h = !0;
    else switch(k){
        case "string":
        case "number":
            h = !0;
            break;
        case "object":
            switch(a.$$typeof){
                case $cf406b2e9805b88b$var$l:
                case $cf406b2e9805b88b$var$n:
                    h = !0;
            }
    }
    if (h) return h = a, c = c(h), a = "" === d ? "." + $cf406b2e9805b88b$var$Q(h, 0) : d, $cf406b2e9805b88b$var$I(c) ? (e = "", null != a && (e = a.replace($cf406b2e9805b88b$var$P, "$&/") + "/"), $cf406b2e9805b88b$var$R(c, b, e, "", function(a) {
        return a;
    })) : null != c && ($cf406b2e9805b88b$var$O(c) && (c = $cf406b2e9805b88b$var$N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace($cf406b2e9805b88b$var$P, "$&/") + "/") + a)), b.push(c)), 1;
    h = 0;
    d = "" === d ? "." : d + ":";
    if ($cf406b2e9805b88b$var$I(a)) for(var g = 0; g < a.length; g++){
        k = a[g];
        var f = d + $cf406b2e9805b88b$var$Q(k, g);
        h += $cf406b2e9805b88b$var$R(k, b, e, f, c);
    }
    else if (f = $cf406b2e9805b88b$var$A(a), "function" === typeof f) for(a = f.call(a), g = 0; !(k = a.next()).done;)k = k.value, f = d + $cf406b2e9805b88b$var$Q(k, g++), h += $cf406b2e9805b88b$var$R(k, b, e, f, c);
    else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
    return h;
}
function $cf406b2e9805b88b$var$S(a, b, e) {
    if (null == a) return a;
    var d = [], c = 0;
    $cf406b2e9805b88b$var$R(a, d, "", "", function(a) {
        return b.call(e, a, c++);
    });
    return d;
}
function $cf406b2e9805b88b$var$T(a) {
    if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(function(b) {
            if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
        }, function(b) {
            if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
        });
        -1 === a._status && (a._status = 0, a._result = b);
    }
    if (1 === a._status) return a._result.default;
    throw a._result;
}
var $cf406b2e9805b88b$var$U = {
    current: null
}, $cf406b2e9805b88b$var$V = {
    transition: null
}, $cf406b2e9805b88b$var$W = {
    ReactCurrentDispatcher: $cf406b2e9805b88b$var$U,
    ReactCurrentBatchConfig: $cf406b2e9805b88b$var$V,
    ReactCurrentOwner: $cf406b2e9805b88b$var$K
};
function $cf406b2e9805b88b$var$X() {
    throw Error("act(...) is not supported in production builds of React.");
}
$cf406b2e9805b88b$export$dca3b0875bd9a954 = {
    map: $cf406b2e9805b88b$var$S,
    forEach: function(a, b, e) {
        $cf406b2e9805b88b$var$S(a, function() {
            b.apply(this, arguments);
        }, e);
    },
    count: function(a) {
        var b = 0;
        $cf406b2e9805b88b$var$S(a, function() {
            b++;
        });
        return b;
    },
    toArray: function(a) {
        return $cf406b2e9805b88b$var$S(a, function(a) {
            return a;
        }) || [];
    },
    only: function(a) {
        if (!$cf406b2e9805b88b$var$O(a)) throw Error("React.Children.only expected to receive a single React element child.");
        return a;
    }
};
$cf406b2e9805b88b$export$16fa2f45be04daa8 = $cf406b2e9805b88b$var$E;
$cf406b2e9805b88b$export$ffb0004e005737fa = $cf406b2e9805b88b$var$p;
$cf406b2e9805b88b$export$e2c29f18771995cb = $cf406b2e9805b88b$var$r;
$cf406b2e9805b88b$export$221d75b3f55bb0bd = $cf406b2e9805b88b$var$G;
$cf406b2e9805b88b$export$5f8d39834fd61797 = $cf406b2e9805b88b$var$q;
$cf406b2e9805b88b$export$74bf444e3cd11ea5 = $cf406b2e9805b88b$var$w;
$cf406b2e9805b88b$export$ae55be85d98224ed = $cf406b2e9805b88b$var$W;
$cf406b2e9805b88b$export$3ba232387fd5d6dd = $cf406b2e9805b88b$var$X;
$cf406b2e9805b88b$export$e530037191fcd5d7 = function(a, b, e) {
    if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
    var d = $cf406b2e9805b88b$var$C({}, a.props), c = a.key, k = a.ref, h = a._owner;
    if (null != b) {
        void 0 !== b.ref && (k = b.ref, h = $cf406b2e9805b88b$var$K.current);
        void 0 !== b.key && (c = "" + b.key);
        if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
        for(f in b)$cf406b2e9805b88b$var$J.call(b, f) && !$cf406b2e9805b88b$var$L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
    }
    var f = arguments.length - 2;
    if (1 === f) d.children = e;
    else if (1 < f) {
        g = Array(f);
        for(var m = 0; m < f; m++)g[m] = arguments[m + 2];
        d.children = g;
    }
    return {
        $$typeof: $cf406b2e9805b88b$var$l,
        type: a.type,
        key: c,
        ref: k,
        props: d,
        _owner: h
    };
};
$cf406b2e9805b88b$export$fd42f52fd3ae1109 = function(a) {
    a = {
        $$typeof: $cf406b2e9805b88b$var$u,
        _currentValue: a,
        _currentValue2: a,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    };
    a.Provider = {
        $$typeof: $cf406b2e9805b88b$var$t,
        _context: a
    };
    return a.Consumer = a;
};
$cf406b2e9805b88b$export$c8a8987d4410bf2d = $cf406b2e9805b88b$var$M;
$cf406b2e9805b88b$export$d38cd72104c1f0e9 = function(a) {
    var b = $cf406b2e9805b88b$var$M.bind(null, a);
    b.type = a;
    return b;
};
$cf406b2e9805b88b$export$7d1e3a5e95ceca43 = function() {
    return {
        current: null
    };
};
$cf406b2e9805b88b$export$257a8862b851cb5b = function(a) {
    return {
        $$typeof: $cf406b2e9805b88b$var$v,
        render: a
    };
};
$cf406b2e9805b88b$export$a8257692ac88316c = $cf406b2e9805b88b$var$O;
$cf406b2e9805b88b$export$488013bae63b21da = function(a) {
    return {
        $$typeof: $cf406b2e9805b88b$var$y,
        _payload: {
            _status: -1,
            _result: a
        },
        _init: $cf406b2e9805b88b$var$T
    };
};
$cf406b2e9805b88b$export$7c73462e0d25e514 = function(a, b) {
    return {
        $$typeof: $cf406b2e9805b88b$var$x,
        type: a,
        compare: void 0 === b ? null : b
    };
};
$cf406b2e9805b88b$export$7568632d0d33d16d = function(a) {
    var b = $cf406b2e9805b88b$var$V.transition;
    $cf406b2e9805b88b$var$V.transition = {};
    try {
        a();
    } finally{
        $cf406b2e9805b88b$var$V.transition = b;
    }
};
$cf406b2e9805b88b$export$88948ce120ea2619 = $cf406b2e9805b88b$var$X;
$cf406b2e9805b88b$export$35808ee640e87ca7 = function(a, b) {
    return $cf406b2e9805b88b$var$U.current.useCallback(a, b);
};
$cf406b2e9805b88b$export$fae74005e78b1a27 = function(a) {
    return $cf406b2e9805b88b$var$U.current.useContext(a);
};
$cf406b2e9805b88b$export$dc8fbce3eb94dc1e = function() {};
$cf406b2e9805b88b$export$6a7bc4e911dc01cf = function(a) {
    return $cf406b2e9805b88b$var$U.current.useDeferredValue(a);
};
$cf406b2e9805b88b$export$6d9c69b0de29b591 = function(a, b) {
    return $cf406b2e9805b88b$var$U.current.useEffect(a, b);
};
$cf406b2e9805b88b$export$f680877a34711e37 = function() {
    return $cf406b2e9805b88b$var$U.current.useId();
};
$cf406b2e9805b88b$export$d5a552a76deda3c2 = function(a, b, e) {
    return $cf406b2e9805b88b$var$U.current.useImperativeHandle(a, b, e);
};
$cf406b2e9805b88b$export$aaabe4eda9ed9969 = function(a, b) {
    return $cf406b2e9805b88b$var$U.current.useInsertionEffect(a, b);
};
$cf406b2e9805b88b$export$e5c5a5f917a5871c = function(a, b) {
    return $cf406b2e9805b88b$var$U.current.useLayoutEffect(a, b);
};
$cf406b2e9805b88b$export$1538c33de8887b59 = function(a, b) {
    return $cf406b2e9805b88b$var$U.current.useMemo(a, b);
};
$cf406b2e9805b88b$export$13e3392192263954 = function(a, b, e) {
    return $cf406b2e9805b88b$var$U.current.useReducer(a, b, e);
};
$cf406b2e9805b88b$export$b8f5890fc79d6aca = function(a) {
    return $cf406b2e9805b88b$var$U.current.useRef(a);
};
$cf406b2e9805b88b$export$60241385465d0a34 = function(a) {
    return $cf406b2e9805b88b$var$U.current.useState(a);
};
$cf406b2e9805b88b$export$306c0aa65ff9ec16 = function(a, b, e) {
    return $cf406b2e9805b88b$var$U.current.useSyncExternalStore(a, b, e);
};
$cf406b2e9805b88b$export$7b286972b8d8ccbf = function() {
    return $cf406b2e9805b88b$var$U.current.useTransition();
};
$cf406b2e9805b88b$export$83d89fbfd8236492 = "18.3.1";

});



parcelRegister("7e9xe", function(module, exports) {

$parcel$export(module.exports, "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED", function () { return $54313ca8ab1dbd89$export$ae55be85d98224ed; }, function (v) { return $54313ca8ab1dbd89$export$ae55be85d98224ed = v; });
$parcel$export(module.exports, "createPortal", function () { return $54313ca8ab1dbd89$export$d39a5bbd09211389; }, function (v) { return $54313ca8ab1dbd89$export$d39a5bbd09211389 = v; });
$parcel$export(module.exports, "createRoot", function () { return $54313ca8ab1dbd89$export$882461b6382ed46c; }, function (v) { return $54313ca8ab1dbd89$export$882461b6382ed46c = v; });
$parcel$export(module.exports, "findDOMNode", function () { return $54313ca8ab1dbd89$export$466bfc07425424d5; }, function (v) { return $54313ca8ab1dbd89$export$466bfc07425424d5 = v; });
$parcel$export(module.exports, "flushSync", function () { return $54313ca8ab1dbd89$export$cd75ccfd720a3cd4; }, function (v) { return $54313ca8ab1dbd89$export$cd75ccfd720a3cd4 = v; });
$parcel$export(module.exports, "hydrate", function () { return $54313ca8ab1dbd89$export$fa8d919ba61d84db; }, function (v) { return $54313ca8ab1dbd89$export$fa8d919ba61d84db = v; });
$parcel$export(module.exports, "hydrateRoot", function () { return $54313ca8ab1dbd89$export$757ceba2d55c277e; }, function (v) { return $54313ca8ab1dbd89$export$757ceba2d55c277e = v; });
$parcel$export(module.exports, "render", function () { return $54313ca8ab1dbd89$export$b3890eb0ae9dca99; }, function (v) { return $54313ca8ab1dbd89$export$b3890eb0ae9dca99 = v; });
$parcel$export(module.exports, "unmountComponentAtNode", function () { return $54313ca8ab1dbd89$export$502457920280e6be; }, function (v) { return $54313ca8ab1dbd89$export$502457920280e6be = v; });
$parcel$export(module.exports, "unstable_batchedUpdates", function () { return $54313ca8ab1dbd89$export$c78a37762a8d58e1; }, function (v) { return $54313ca8ab1dbd89$export$c78a37762a8d58e1 = v; });
$parcel$export(module.exports, "unstable_renderSubtreeIntoContainer", function () { return $54313ca8ab1dbd89$export$dc54d992c10e8a18; }, function (v) { return $54313ca8ab1dbd89$export$dc54d992c10e8a18 = v; });
$parcel$export(module.exports, "version", function () { return $54313ca8ab1dbd89$export$83d89fbfd8236492; }, function (v) { return $54313ca8ab1dbd89$export$83d89fbfd8236492 = v; });
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/ var $54313ca8ab1dbd89$export$ae55be85d98224ed;
var $54313ca8ab1dbd89$export$d39a5bbd09211389;
var $54313ca8ab1dbd89$export$882461b6382ed46c;
var $54313ca8ab1dbd89$export$466bfc07425424d5;
var $54313ca8ab1dbd89$export$cd75ccfd720a3cd4;
var $54313ca8ab1dbd89$export$fa8d919ba61d84db;
var $54313ca8ab1dbd89$export$757ceba2d55c277e;
var $54313ca8ab1dbd89$export$b3890eb0ae9dca99;
var $54313ca8ab1dbd89$export$502457920280e6be;
var $54313ca8ab1dbd89$export$c78a37762a8d58e1;
var $54313ca8ab1dbd89$export$dc54d992c10e8a18;
var $54313ca8ab1dbd89$export$83d89fbfd8236492;
"use strict";

var $iS7v4 = parcelRequire("iS7v4");

var $4im8J = parcelRequire("4im8J");
function $54313ca8ab1dbd89$var$p(a) {
    for(var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)b += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var $54313ca8ab1dbd89$var$da = new Set, $54313ca8ab1dbd89$var$ea = {};
function $54313ca8ab1dbd89$var$fa(a, b) {
    $54313ca8ab1dbd89$var$ha(a, b);
    $54313ca8ab1dbd89$var$ha(a + "Capture", b);
}
function $54313ca8ab1dbd89$var$ha(a, b) {
    $54313ca8ab1dbd89$var$ea[a] = b;
    for(a = 0; a < b.length; a++)$54313ca8ab1dbd89$var$da.add(b[a]);
}
var $54313ca8ab1dbd89$var$ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), $54313ca8ab1dbd89$var$ja = Object.prototype.hasOwnProperty, $54313ca8ab1dbd89$var$ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, $54313ca8ab1dbd89$var$la = {}, $54313ca8ab1dbd89$var$ma = {};
function $54313ca8ab1dbd89$var$oa(a) {
    if ($54313ca8ab1dbd89$var$ja.call($54313ca8ab1dbd89$var$ma, a)) return !0;
    if ($54313ca8ab1dbd89$var$ja.call($54313ca8ab1dbd89$var$la, a)) return !1;
    if ($54313ca8ab1dbd89$var$ka.test(a)) return $54313ca8ab1dbd89$var$ma[a] = !0;
    $54313ca8ab1dbd89$var$la[a] = !0;
    return !1;
}
function $54313ca8ab1dbd89$var$pa(a, b, c, d) {
    if (null !== c && 0 === c.type) return !1;
    switch(typeof b){
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            if (d) return !1;
            if (null !== c) return !c.acceptsBooleans;
            a = a.toLowerCase().slice(0, 5);
            return "data-" !== a && "aria-" !== a;
        default:
            return !1;
    }
}
function $54313ca8ab1dbd89$var$qa(a, b, c, d) {
    if (null === b || "undefined" === typeof b || $54313ca8ab1dbd89$var$pa(a, b, c, d)) return !0;
    if (d) return !1;
    if (null !== c) switch(c.type){
        case 3:
            return !b;
        case 4:
            return !1 === b;
        case 5:
            return isNaN(b);
        case 6:
            return isNaN(b) || 1 > b;
    }
    return !1;
}
function $54313ca8ab1dbd89$var$v(a, b, c, d, e, f, g) {
    this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
    this.attributeName = d;
    this.attributeNamespace = e;
    this.mustUseProperty = c;
    this.propertyName = a;
    this.type = b;
    this.sanitizeURL = f;
    this.removeEmptyString = g;
}
var $54313ca8ab1dbd89$var$z = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    $54313ca8ab1dbd89$var$z[a] = new $54313ca8ab1dbd89$var$v(a, 0, !1, a, null, !1, !1);
});
[
    [
        "acceptCharset",
        "accept-charset"
    ],
    [
        "className",
        "class"
    ],
    [
        "htmlFor",
        "for"
    ],
    [
        "httpEquiv",
        "http-equiv"
    ]
].forEach(function(a) {
    var b = a[0];
    $54313ca8ab1dbd89$var$z[b] = new $54313ca8ab1dbd89$var$v(b, 1, !1, a[1], null, !1, !1);
});
[
    "contentEditable",
    "draggable",
    "spellCheck",
    "value"
].forEach(function(a) {
    $54313ca8ab1dbd89$var$z[a] = new $54313ca8ab1dbd89$var$v(a, 2, !1, a.toLowerCase(), null, !1, !1);
});
[
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha"
].forEach(function(a) {
    $54313ca8ab1dbd89$var$z[a] = new $54313ca8ab1dbd89$var$v(a, 2, !1, a, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    $54313ca8ab1dbd89$var$z[a] = new $54313ca8ab1dbd89$var$v(a, 3, !1, a.toLowerCase(), null, !1, !1);
});
[
    "checked",
    "multiple",
    "muted",
    "selected"
].forEach(function(a) {
    $54313ca8ab1dbd89$var$z[a] = new $54313ca8ab1dbd89$var$v(a, 3, !0, a, null, !1, !1);
});
[
    "capture",
    "download"
].forEach(function(a) {
    $54313ca8ab1dbd89$var$z[a] = new $54313ca8ab1dbd89$var$v(a, 4, !1, a, null, !1, !1);
});
[
    "cols",
    "rows",
    "size",
    "span"
].forEach(function(a) {
    $54313ca8ab1dbd89$var$z[a] = new $54313ca8ab1dbd89$var$v(a, 6, !1, a, null, !1, !1);
});
[
    "rowSpan",
    "start"
].forEach(function(a) {
    $54313ca8ab1dbd89$var$z[a] = new $54313ca8ab1dbd89$var$v(a, 5, !1, a.toLowerCase(), null, !1, !1);
});
var $54313ca8ab1dbd89$var$ra = /[\-:]([a-z])/g;
function $54313ca8ab1dbd89$var$sa(a) {
    return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var b = a.replace($54313ca8ab1dbd89$var$ra, $54313ca8ab1dbd89$var$sa);
    $54313ca8ab1dbd89$var$z[b] = new $54313ca8ab1dbd89$var$v(b, 1, !1, a, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var b = a.replace($54313ca8ab1dbd89$var$ra, $54313ca8ab1dbd89$var$sa);
    $54313ca8ab1dbd89$var$z[b] = new $54313ca8ab1dbd89$var$v(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
});
[
    "xml:base",
    "xml:lang",
    "xml:space"
].forEach(function(a) {
    var b = a.replace($54313ca8ab1dbd89$var$ra, $54313ca8ab1dbd89$var$sa);
    $54313ca8ab1dbd89$var$z[b] = new $54313ca8ab1dbd89$var$v(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
[
    "tabIndex",
    "crossOrigin"
].forEach(function(a) {
    $54313ca8ab1dbd89$var$z[a] = new $54313ca8ab1dbd89$var$v(a, 1, !1, a.toLowerCase(), null, !1, !1);
});
$54313ca8ab1dbd89$var$z.xlinkHref = new $54313ca8ab1dbd89$var$v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
[
    "src",
    "href",
    "action",
    "formAction"
].forEach(function(a) {
    $54313ca8ab1dbd89$var$z[a] = new $54313ca8ab1dbd89$var$v(a, 1, !1, a.toLowerCase(), null, !0, !0);
});
function $54313ca8ab1dbd89$var$ta(a, b, c, d) {
    var e = $54313ca8ab1dbd89$var$z.hasOwnProperty(b) ? $54313ca8ab1dbd89$var$z[b] : null;
    if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) $54313ca8ab1dbd89$var$qa(b, c, e, d) && (c = null), d || null === e ? $54313ca8ab1dbd89$var$oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
}
var $54313ca8ab1dbd89$var$ua = $iS7v4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, $54313ca8ab1dbd89$var$va = Symbol.for("react.element"), $54313ca8ab1dbd89$var$wa = Symbol.for("react.portal"), $54313ca8ab1dbd89$var$ya = Symbol.for("react.fragment"), $54313ca8ab1dbd89$var$za = Symbol.for("react.strict_mode"), $54313ca8ab1dbd89$var$Aa = Symbol.for("react.profiler"), $54313ca8ab1dbd89$var$Ba = Symbol.for("react.provider"), $54313ca8ab1dbd89$var$Ca = Symbol.for("react.context"), $54313ca8ab1dbd89$var$Da = Symbol.for("react.forward_ref"), $54313ca8ab1dbd89$var$Ea = Symbol.for("react.suspense"), $54313ca8ab1dbd89$var$Fa = Symbol.for("react.suspense_list"), $54313ca8ab1dbd89$var$Ga = Symbol.for("react.memo"), $54313ca8ab1dbd89$var$Ha = Symbol.for("react.lazy");
Symbol.for("react.scope");
Symbol.for("react.debug_trace_mode");
var $54313ca8ab1dbd89$var$Ia = Symbol.for("react.offscreen");
Symbol.for("react.legacy_hidden");
Symbol.for("react.cache");
Symbol.for("react.tracing_marker");
var $54313ca8ab1dbd89$var$Ja = Symbol.iterator;
function $54313ca8ab1dbd89$var$Ka(a) {
    if (null === a || "object" !== typeof a) return null;
    a = $54313ca8ab1dbd89$var$Ja && a[$54313ca8ab1dbd89$var$Ja] || a["@@iterator"];
    return "function" === typeof a ? a : null;
}
var $54313ca8ab1dbd89$var$A = Object.assign, $54313ca8ab1dbd89$var$La;
function $54313ca8ab1dbd89$var$Ma(a) {
    if (void 0 === $54313ca8ab1dbd89$var$La) try {
        throw Error();
    } catch (c) {
        var b = c.stack.trim().match(/\n( *(at )?)/);
        $54313ca8ab1dbd89$var$La = b && b[1] || "";
    }
    return "\n" + $54313ca8ab1dbd89$var$La + a;
}
var $54313ca8ab1dbd89$var$Na = !1;
function $54313ca8ab1dbd89$var$Oa(a, b) {
    if (!a || $54313ca8ab1dbd89$var$Na) return "";
    $54313ca8ab1dbd89$var$Na = !0;
    var c = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (b) {
            if (b = function() {
                throw Error();
            }, Object.defineProperty(b.prototype, "props", {
                set: function() {
                    throw Error();
                }
            }), "object" === typeof Reflect && Reflect.construct) {
                try {
                    Reflect.construct(b, []);
                } catch (l) {
                    var d = l;
                }
                Reflect.construct(a, [], b);
            } else {
                try {
                    b.call();
                } catch (l) {
                    d = l;
                }
                a.call(b.prototype);
            }
        } else {
            try {
                throw Error();
            } catch (l) {
                d = l;
            }
            a();
        }
    } catch (l) {
        if (l && d && "string" === typeof l.stack) {
            for(var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h];)h--;
            for(; 1 <= g && 0 <= h; g--, h--)if (e[g] !== f[h]) {
                if (1 !== g || 1 !== h) {
                    do if (g--, h--, 0 > h || e[g] !== f[h]) {
                        var k = "\n" + e[g].replace(" at new ", " at ");
                        a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
                        return k;
                    }
                    while (1 <= g && 0 <= h);
                }
                break;
            }
        }
    } finally{
        $54313ca8ab1dbd89$var$Na = !1, Error.prepareStackTrace = c;
    }
    return (a = a ? a.displayName || a.name : "") ? $54313ca8ab1dbd89$var$Ma(a) : "";
}
function $54313ca8ab1dbd89$var$Pa(a) {
    switch(a.tag){
        case 5:
            return $54313ca8ab1dbd89$var$Ma(a.type);
        case 16:
            return $54313ca8ab1dbd89$var$Ma("Lazy");
        case 13:
            return $54313ca8ab1dbd89$var$Ma("Suspense");
        case 19:
            return $54313ca8ab1dbd89$var$Ma("SuspenseList");
        case 0:
        case 2:
        case 15:
            return a = $54313ca8ab1dbd89$var$Oa(a.type, !1), a;
        case 11:
            return a = $54313ca8ab1dbd89$var$Oa(a.type.render, !1), a;
        case 1:
            return a = $54313ca8ab1dbd89$var$Oa(a.type, !0), a;
        default:
            return "";
    }
}
function $54313ca8ab1dbd89$var$Qa(a) {
    if (null == a) return null;
    if ("function" === typeof a) return a.displayName || a.name || null;
    if ("string" === typeof a) return a;
    switch(a){
        case $54313ca8ab1dbd89$var$ya:
            return "Fragment";
        case $54313ca8ab1dbd89$var$wa:
            return "Portal";
        case $54313ca8ab1dbd89$var$Aa:
            return "Profiler";
        case $54313ca8ab1dbd89$var$za:
            return "StrictMode";
        case $54313ca8ab1dbd89$var$Ea:
            return "Suspense";
        case $54313ca8ab1dbd89$var$Fa:
            return "SuspenseList";
    }
    if ("object" === typeof a) switch(a.$$typeof){
        case $54313ca8ab1dbd89$var$Ca:
            return (a.displayName || "Context") + ".Consumer";
        case $54313ca8ab1dbd89$var$Ba:
            return (a._context.displayName || "Context") + ".Provider";
        case $54313ca8ab1dbd89$var$Da:
            var b = a.render;
            a = a.displayName;
            a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
            return a;
        case $54313ca8ab1dbd89$var$Ga:
            return b = a.displayName || null, null !== b ? b : $54313ca8ab1dbd89$var$Qa(a.type) || "Memo";
        case $54313ca8ab1dbd89$var$Ha:
            b = a._payload;
            a = a._init;
            try {
                return $54313ca8ab1dbd89$var$Qa(a(b));
            } catch (c) {}
    }
    return null;
}
function $54313ca8ab1dbd89$var$Ra(a) {
    var b = a.type;
    switch(a.tag){
        case 24:
            return "Cache";
        case 9:
            return (b.displayName || "Context") + ".Consumer";
        case 10:
            return (b._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return b;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return $54313ca8ab1dbd89$var$Qa(b);
        case 8:
            return b === $54313ca8ab1dbd89$var$za ? "StrictMode" : "Mode";
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
            if ("function" === typeof b) return b.displayName || b.name || null;
            if ("string" === typeof b) return b;
    }
    return null;
}
function $54313ca8ab1dbd89$var$Sa(a) {
    switch(typeof a){
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return a;
        case "object":
            return a;
        default:
            return "";
    }
}
function $54313ca8ab1dbd89$var$Ta(a) {
    var b = a.type;
    return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
}
function $54313ca8ab1dbd89$var$Ua(a) {
    var b = $54313ca8ab1dbd89$var$Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
    if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
        var e = c.get, f = c.set;
        Object.defineProperty(a, b, {
            configurable: !0,
            get: function() {
                return e.call(this);
            },
            set: function(a) {
                d = "" + a;
                f.call(this, a);
            }
        });
        Object.defineProperty(a, b, {
            enumerable: c.enumerable
        });
        return {
            getValue: function() {
                return d;
            },
            setValue: function(a) {
                d = "" + a;
            },
            stopTracking: function() {
                a._valueTracker = null;
                delete a[b];
            }
        };
    }
}
function $54313ca8ab1dbd89$var$Va(a) {
    a._valueTracker || (a._valueTracker = $54313ca8ab1dbd89$var$Ua(a));
}
function $54313ca8ab1dbd89$var$Wa(a) {
    if (!a) return !1;
    var b = a._valueTracker;
    if (!b) return !0;
    var c = b.getValue();
    var d = "";
    a && (d = $54313ca8ab1dbd89$var$Ta(a) ? a.checked ? "true" : "false" : a.value);
    a = d;
    return a !== c ? (b.setValue(a), !0) : !1;
}
function $54313ca8ab1dbd89$var$Xa(a) {
    a = a || ("undefined" !== typeof document ? document : void 0);
    if ("undefined" === typeof a) return null;
    try {
        return a.activeElement || a.body;
    } catch (b) {
        return a.body;
    }
}
function $54313ca8ab1dbd89$var$Ya(a, b) {
    var c = b.checked;
    return $54313ca8ab1dbd89$var$A({}, b, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != c ? c : a._wrapperState.initialChecked
    });
}
function $54313ca8ab1dbd89$var$Za(a, b) {
    var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
    c = $54313ca8ab1dbd89$var$Sa(null != b.value ? b.value : c);
    a._wrapperState = {
        initialChecked: d,
        initialValue: c,
        controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
    };
}
function $54313ca8ab1dbd89$var$ab(a, b) {
    b = b.checked;
    null != b && $54313ca8ab1dbd89$var$ta(a, "checked", b, !1);
}
function $54313ca8ab1dbd89$var$bb(a, b) {
    $54313ca8ab1dbd89$var$ab(a, b);
    var c = $54313ca8ab1dbd89$var$Sa(b.value), d = b.type;
    if (null != c) {
        if ("number" === d) {
            if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
        } else a.value !== "" + c && (a.value = "" + c);
    } else if ("submit" === d || "reset" === d) {
        a.removeAttribute("value");
        return;
    }
    b.hasOwnProperty("value") ? $54313ca8ab1dbd89$var$cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && $54313ca8ab1dbd89$var$cb(a, b.type, $54313ca8ab1dbd89$var$Sa(b.defaultValue));
    null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
}
function $54313ca8ab1dbd89$var$db(a, b, c) {
    if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
        var d = b.type;
        if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
        b = "" + a._wrapperState.initialValue;
        c || b === a.value || (a.value = b);
        a.defaultValue = b;
    }
    c = a.name;
    "" !== c && (a.name = "");
    a.defaultChecked = !!a._wrapperState.initialChecked;
    "" !== c && (a.name = c);
}
function $54313ca8ab1dbd89$var$cb(a, b, c) {
    if ("number" !== b || $54313ca8ab1dbd89$var$Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}
var $54313ca8ab1dbd89$var$eb = Array.isArray;
function $54313ca8ab1dbd89$var$fb(a, b, c, d) {
    a = a.options;
    if (b) {
        b = {};
        for(var e = 0; e < c.length; e++)b["$" + c[e]] = !0;
        for(c = 0; c < a.length; c++)e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = !0);
    } else {
        c = "" + $54313ca8ab1dbd89$var$Sa(c);
        b = null;
        for(e = 0; e < a.length; e++){
            if (a[e].value === c) {
                a[e].selected = !0;
                d && (a[e].defaultSelected = !0);
                return;
            }
            null !== b || a[e].disabled || (b = a[e]);
        }
        null !== b && (b.selected = !0);
    }
}
function $54313ca8ab1dbd89$var$gb(a, b) {
    if (null != b.dangerouslySetInnerHTML) throw Error($54313ca8ab1dbd89$var$p(91));
    return $54313ca8ab1dbd89$var$A({}, b, {
        value: void 0,
        defaultValue: void 0,
        children: "" + a._wrapperState.initialValue
    });
}
function $54313ca8ab1dbd89$var$hb(a, b) {
    var c = b.value;
    if (null == c) {
        c = b.children;
        b = b.defaultValue;
        if (null != c) {
            if (null != b) throw Error($54313ca8ab1dbd89$var$p(92));
            if ($54313ca8ab1dbd89$var$eb(c)) {
                if (1 < c.length) throw Error($54313ca8ab1dbd89$var$p(93));
                c = c[0];
            }
            b = c;
        }
        null == b && (b = "");
        c = b;
    }
    a._wrapperState = {
        initialValue: $54313ca8ab1dbd89$var$Sa(c)
    };
}
function $54313ca8ab1dbd89$var$ib(a, b) {
    var c = $54313ca8ab1dbd89$var$Sa(b.value), d = $54313ca8ab1dbd89$var$Sa(b.defaultValue);
    null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
    null != d && (a.defaultValue = "" + d);
}
function $54313ca8ab1dbd89$var$jb(a) {
    var b = a.textContent;
    b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
}
function $54313ca8ab1dbd89$var$kb(a) {
    switch(a){
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}
function $54313ca8ab1dbd89$var$lb(a, b) {
    return null == a || "http://www.w3.org/1999/xhtml" === a ? $54313ca8ab1dbd89$var$kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
}
var $54313ca8ab1dbd89$var$mb, $54313ca8ab1dbd89$var$nb = function(a) {
    return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
        MSApp.execUnsafeLocalFunction(function() {
            return a(b, c, d, e);
        });
    } : a;
}(function(a, b) {
    if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;
    else {
        $54313ca8ab1dbd89$var$mb = $54313ca8ab1dbd89$var$mb || document.createElement("div");
        $54313ca8ab1dbd89$var$mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
        for(b = $54313ca8ab1dbd89$var$mb.firstChild; a.firstChild;)a.removeChild(a.firstChild);
        for(; b.firstChild;)a.appendChild(b.firstChild);
    }
});
function $54313ca8ab1dbd89$var$ob(a, b) {
    if (b) {
        var c = a.firstChild;
        if (c && c === a.lastChild && 3 === c.nodeType) {
            c.nodeValue = b;
            return;
        }
    }
    a.textContent = b;
}
var $54313ca8ab1dbd89$var$pb = {
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
}, $54313ca8ab1dbd89$var$qb = [
    "Webkit",
    "ms",
    "Moz",
    "O"
];
Object.keys($54313ca8ab1dbd89$var$pb).forEach(function(a) {
    $54313ca8ab1dbd89$var$qb.forEach(function(b) {
        b = b + a.charAt(0).toUpperCase() + a.substring(1);
        $54313ca8ab1dbd89$var$pb[b] = $54313ca8ab1dbd89$var$pb[a];
    });
});
function $54313ca8ab1dbd89$var$rb(a, b, c) {
    return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || $54313ca8ab1dbd89$var$pb.hasOwnProperty(a) && $54313ca8ab1dbd89$var$pb[a] ? ("" + b).trim() : b + "px";
}
function $54313ca8ab1dbd89$var$sb(a, b) {
    a = a.style;
    for(var c in b)if (b.hasOwnProperty(c)) {
        var d = 0 === c.indexOf("--"), e = $54313ca8ab1dbd89$var$rb(c, b[c], d);
        "float" === c && (c = "cssFloat");
        d ? a.setProperty(c, e) : a[c] = e;
    }
}
var $54313ca8ab1dbd89$var$tb = $54313ca8ab1dbd89$var$A({
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
function $54313ca8ab1dbd89$var$ub(a, b) {
    if (b) {
        if ($54313ca8ab1dbd89$var$tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error($54313ca8ab1dbd89$var$p(137, a));
        if (null != b.dangerouslySetInnerHTML) {
            if (null != b.children) throw Error($54313ca8ab1dbd89$var$p(60));
            if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error($54313ca8ab1dbd89$var$p(61));
        }
        if (null != b.style && "object" !== typeof b.style) throw Error($54313ca8ab1dbd89$var$p(62));
    }
}
function $54313ca8ab1dbd89$var$vb(a, b) {
    if (-1 === a.indexOf("-")) return "string" === typeof b.is;
    switch(a){
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
            return !0;
    }
}
var $54313ca8ab1dbd89$var$wb = null;
function $54313ca8ab1dbd89$var$xb(a) {
    a = a.target || a.srcElement || window;
    a.correspondingUseElement && (a = a.correspondingUseElement);
    return 3 === a.nodeType ? a.parentNode : a;
}
var $54313ca8ab1dbd89$var$yb = null, $54313ca8ab1dbd89$var$zb = null, $54313ca8ab1dbd89$var$Ab = null;
function $54313ca8ab1dbd89$var$Bb(a) {
    if (a = $54313ca8ab1dbd89$var$Cb(a)) {
        if ("function" !== typeof $54313ca8ab1dbd89$var$yb) throw Error($54313ca8ab1dbd89$var$p(280));
        var b = a.stateNode;
        b && (b = $54313ca8ab1dbd89$var$Db(b), $54313ca8ab1dbd89$var$yb(a.stateNode, a.type, b));
    }
}
function $54313ca8ab1dbd89$var$Eb(a) {
    $54313ca8ab1dbd89$var$zb ? $54313ca8ab1dbd89$var$Ab ? $54313ca8ab1dbd89$var$Ab.push(a) : $54313ca8ab1dbd89$var$Ab = [
        a
    ] : $54313ca8ab1dbd89$var$zb = a;
}
function $54313ca8ab1dbd89$var$Fb() {
    if ($54313ca8ab1dbd89$var$zb) {
        var a = $54313ca8ab1dbd89$var$zb, b = $54313ca8ab1dbd89$var$Ab;
        $54313ca8ab1dbd89$var$Ab = $54313ca8ab1dbd89$var$zb = null;
        $54313ca8ab1dbd89$var$Bb(a);
        if (b) for(a = 0; a < b.length; a++)$54313ca8ab1dbd89$var$Bb(b[a]);
    }
}
function $54313ca8ab1dbd89$var$Gb(a, b) {
    return a(b);
}
function $54313ca8ab1dbd89$var$Hb() {}
var $54313ca8ab1dbd89$var$Ib = !1;
function $54313ca8ab1dbd89$var$Jb(a, b, c) {
    if ($54313ca8ab1dbd89$var$Ib) return a(b, c);
    $54313ca8ab1dbd89$var$Ib = !0;
    try {
        return $54313ca8ab1dbd89$var$Gb(a, b, c);
    } finally{
        if ($54313ca8ab1dbd89$var$Ib = !1, null !== $54313ca8ab1dbd89$var$zb || null !== $54313ca8ab1dbd89$var$Ab) $54313ca8ab1dbd89$var$Hb(), $54313ca8ab1dbd89$var$Fb();
    }
}
function $54313ca8ab1dbd89$var$Kb(a, b) {
    var c = a.stateNode;
    if (null === c) return null;
    var d = $54313ca8ab1dbd89$var$Db(c);
    if (null === d) return null;
    c = d[b];
    a: switch(b){
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
            (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
            a = !d;
            break a;
        default:
            a = !1;
    }
    if (a) return null;
    if (c && "function" !== typeof c) throw Error($54313ca8ab1dbd89$var$p(231, b, typeof c));
    return c;
}
var $54313ca8ab1dbd89$var$Lb = !1;
if ($54313ca8ab1dbd89$var$ia) try {
    var $54313ca8ab1dbd89$var$Mb = {};
    Object.defineProperty($54313ca8ab1dbd89$var$Mb, "passive", {
        get: function() {
            $54313ca8ab1dbd89$var$Lb = !0;
        }
    });
    window.addEventListener("test", $54313ca8ab1dbd89$var$Mb, $54313ca8ab1dbd89$var$Mb);
    window.removeEventListener("test", $54313ca8ab1dbd89$var$Mb, $54313ca8ab1dbd89$var$Mb);
} catch (a) {
    $54313ca8ab1dbd89$var$Lb = !1;
}
function $54313ca8ab1dbd89$var$Nb(a, b, c, d, e, f, g, h, k) {
    var l = Array.prototype.slice.call(arguments, 3);
    try {
        b.apply(c, l);
    } catch (m) {
        this.onError(m);
    }
}
var $54313ca8ab1dbd89$var$Ob = !1, $54313ca8ab1dbd89$var$Pb = null, $54313ca8ab1dbd89$var$Qb = !1, $54313ca8ab1dbd89$var$Rb = null, $54313ca8ab1dbd89$var$Sb = {
    onError: function(a) {
        $54313ca8ab1dbd89$var$Ob = !0;
        $54313ca8ab1dbd89$var$Pb = a;
    }
};
function $54313ca8ab1dbd89$var$Tb(a, b, c, d, e, f, g, h, k) {
    $54313ca8ab1dbd89$var$Ob = !1;
    $54313ca8ab1dbd89$var$Pb = null;
    $54313ca8ab1dbd89$var$Nb.apply($54313ca8ab1dbd89$var$Sb, arguments);
}
function $54313ca8ab1dbd89$var$Ub(a, b, c, d, e, f, g, h, k) {
    $54313ca8ab1dbd89$var$Tb.apply(this, arguments);
    if ($54313ca8ab1dbd89$var$Ob) {
        if ($54313ca8ab1dbd89$var$Ob) {
            var l = $54313ca8ab1dbd89$var$Pb;
            $54313ca8ab1dbd89$var$Ob = !1;
            $54313ca8ab1dbd89$var$Pb = null;
        } else throw Error($54313ca8ab1dbd89$var$p(198));
        $54313ca8ab1dbd89$var$Qb || ($54313ca8ab1dbd89$var$Qb = !0, $54313ca8ab1dbd89$var$Rb = l);
    }
}
function $54313ca8ab1dbd89$var$Vb(a) {
    var b = a, c = a;
    if (a.alternate) for(; b.return;)b = b.return;
    else {
        a = b;
        do b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
        while (a);
    }
    return 3 === b.tag ? c : null;
}
function $54313ca8ab1dbd89$var$Wb(a) {
    if (13 === a.tag) {
        var b = a.memoizedState;
        null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
        if (null !== b) return b.dehydrated;
    }
    return null;
}
function $54313ca8ab1dbd89$var$Xb(a) {
    if ($54313ca8ab1dbd89$var$Vb(a) !== a) throw Error($54313ca8ab1dbd89$var$p(188));
}
function $54313ca8ab1dbd89$var$Yb(a) {
    var b = a.alternate;
    if (!b) {
        b = $54313ca8ab1dbd89$var$Vb(a);
        if (null === b) throw Error($54313ca8ab1dbd89$var$p(188));
        return b !== a ? null : a;
    }
    for(var c = a, d = b;;){
        var e = c.return;
        if (null === e) break;
        var f = e.alternate;
        if (null === f) {
            d = e.return;
            if (null !== d) {
                c = d;
                continue;
            }
            break;
        }
        if (e.child === f.child) {
            for(f = e.child; f;){
                if (f === c) return $54313ca8ab1dbd89$var$Xb(e), a;
                if (f === d) return $54313ca8ab1dbd89$var$Xb(e), b;
                f = f.sibling;
            }
            throw Error($54313ca8ab1dbd89$var$p(188));
        }
        if (c.return !== d.return) c = e, d = f;
        else {
            for(var g = !1, h = e.child; h;){
                if (h === c) {
                    g = !0;
                    c = e;
                    d = f;
                    break;
                }
                if (h === d) {
                    g = !0;
                    d = e;
                    c = f;
                    break;
                }
                h = h.sibling;
            }
            if (!g) {
                for(h = f.child; h;){
                    if (h === c) {
                        g = !0;
                        c = f;
                        d = e;
                        break;
                    }
                    if (h === d) {
                        g = !0;
                        d = f;
                        c = e;
                        break;
                    }
                    h = h.sibling;
                }
                if (!g) throw Error($54313ca8ab1dbd89$var$p(189));
            }
        }
        if (c.alternate !== d) throw Error($54313ca8ab1dbd89$var$p(190));
    }
    if (3 !== c.tag) throw Error($54313ca8ab1dbd89$var$p(188));
    return c.stateNode.current === c ? a : b;
}
function $54313ca8ab1dbd89$var$Zb(a) {
    a = $54313ca8ab1dbd89$var$Yb(a);
    return null !== a ? $54313ca8ab1dbd89$var$$b(a) : null;
}
function $54313ca8ab1dbd89$var$$b(a) {
    if (5 === a.tag || 6 === a.tag) return a;
    for(a = a.child; null !== a;){
        var b = $54313ca8ab1dbd89$var$$b(a);
        if (null !== b) return b;
        a = a.sibling;
    }
    return null;
}
var $54313ca8ab1dbd89$var$ac = $4im8J.unstable_scheduleCallback, $54313ca8ab1dbd89$var$bc = $4im8J.unstable_cancelCallback, $54313ca8ab1dbd89$var$cc = $4im8J.unstable_shouldYield, $54313ca8ab1dbd89$var$dc = $4im8J.unstable_requestPaint, $54313ca8ab1dbd89$var$B = $4im8J.unstable_now, $54313ca8ab1dbd89$var$ec = $4im8J.unstable_getCurrentPriorityLevel, $54313ca8ab1dbd89$var$fc = $4im8J.unstable_ImmediatePriority, $54313ca8ab1dbd89$var$gc = $4im8J.unstable_UserBlockingPriority, $54313ca8ab1dbd89$var$hc = $4im8J.unstable_NormalPriority, $54313ca8ab1dbd89$var$ic = $4im8J.unstable_LowPriority, $54313ca8ab1dbd89$var$jc = $4im8J.unstable_IdlePriority, $54313ca8ab1dbd89$var$kc = null, $54313ca8ab1dbd89$var$lc = null;
function $54313ca8ab1dbd89$var$mc(a) {
    if ($54313ca8ab1dbd89$var$lc && "function" === typeof $54313ca8ab1dbd89$var$lc.onCommitFiberRoot) try {
        $54313ca8ab1dbd89$var$lc.onCommitFiberRoot($54313ca8ab1dbd89$var$kc, a, void 0, 128 === (a.current.flags & 128));
    } catch (b) {}
}
var $54313ca8ab1dbd89$var$oc = Math.clz32 ? Math.clz32 : $54313ca8ab1dbd89$var$nc, $54313ca8ab1dbd89$var$pc = Math.log, $54313ca8ab1dbd89$var$qc = Math.LN2;
function $54313ca8ab1dbd89$var$nc(a) {
    a >>>= 0;
    return 0 === a ? 32 : 31 - ($54313ca8ab1dbd89$var$pc(a) / $54313ca8ab1dbd89$var$qc | 0) | 0;
}
var $54313ca8ab1dbd89$var$rc = 64, $54313ca8ab1dbd89$var$sc = 4194304;
function $54313ca8ab1dbd89$var$tc(a) {
    switch(a & -a){
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
            return a & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return a & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return a;
    }
}
function $54313ca8ab1dbd89$var$uc(a, b) {
    var c = a.pendingLanes;
    if (0 === c) return 0;
    var d = 0, e = a.suspendedLanes, f = a.pingedLanes, g = c & 268435455;
    if (0 !== g) {
        var h = g & ~e;
        0 !== h ? d = $54313ca8ab1dbd89$var$tc(h) : (f &= g, 0 !== f && (d = $54313ca8ab1dbd89$var$tc(f)));
    } else g = c & ~e, 0 !== g ? d = $54313ca8ab1dbd89$var$tc(g) : 0 !== f && (d = $54313ca8ab1dbd89$var$tc(f));
    if (0 === d) return 0;
    if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240))) return b;
    0 !== (d & 4) && (d |= c & 16);
    b = a.entangledLanes;
    if (0 !== b) for(a = a.entanglements, b &= d; 0 < b;)c = 31 - $54313ca8ab1dbd89$var$oc(b), e = 1 << c, d |= a[c], b &= ~e;
    return d;
}
function $54313ca8ab1dbd89$var$vc(a, b) {
    switch(a){
        case 1:
        case 2:
        case 4:
            return b + 250;
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
            return b + 5E3;
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
            return -1;
        default:
            return -1;
    }
}
function $54313ca8ab1dbd89$var$wc(a, b) {
    for(var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f;){
        var g = 31 - $54313ca8ab1dbd89$var$oc(f), h = 1 << g, k = e[g];
        if (-1 === k) {
            if (0 === (h & c) || 0 !== (h & d)) e[g] = $54313ca8ab1dbd89$var$vc(h, b);
        } else k <= b && (a.expiredLanes |= h);
        f &= ~h;
    }
}
function $54313ca8ab1dbd89$var$xc(a) {
    a = a.pendingLanes & -1073741825;
    return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
}
function $54313ca8ab1dbd89$var$yc() {
    var a = $54313ca8ab1dbd89$var$rc;
    $54313ca8ab1dbd89$var$rc <<= 1;
    0 === ($54313ca8ab1dbd89$var$rc & 4194240) && ($54313ca8ab1dbd89$var$rc = 64);
    return a;
}
function $54313ca8ab1dbd89$var$zc(a) {
    for(var b = [], c = 0; 31 > c; c++)b.push(a);
    return b;
}
function $54313ca8ab1dbd89$var$Ac(a, b, c) {
    a.pendingLanes |= b;
    536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
    a = a.eventTimes;
    b = 31 - $54313ca8ab1dbd89$var$oc(b);
    a[b] = c;
}
function $54313ca8ab1dbd89$var$Bc(a, b) {
    var c = a.pendingLanes & ~b;
    a.pendingLanes = b;
    a.suspendedLanes = 0;
    a.pingedLanes = 0;
    a.expiredLanes &= b;
    a.mutableReadLanes &= b;
    a.entangledLanes &= b;
    b = a.entanglements;
    var d = a.eventTimes;
    for(a = a.expirationTimes; 0 < c;){
        var e = 31 - $54313ca8ab1dbd89$var$oc(c), f = 1 << e;
        b[e] = 0;
        d[e] = -1;
        a[e] = -1;
        c &= ~f;
    }
}
function $54313ca8ab1dbd89$var$Cc(a, b) {
    var c = a.entangledLanes |= b;
    for(a = a.entanglements; c;){
        var d = 31 - $54313ca8ab1dbd89$var$oc(c), e = 1 << d;
        e & b | a[d] & b && (a[d] |= b);
        c &= ~e;
    }
}
var $54313ca8ab1dbd89$var$C = 0;
function $54313ca8ab1dbd89$var$Dc(a) {
    a &= -a;
    return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
}
var $54313ca8ab1dbd89$var$Ec, $54313ca8ab1dbd89$var$Fc, $54313ca8ab1dbd89$var$Gc, $54313ca8ab1dbd89$var$Hc, $54313ca8ab1dbd89$var$Ic, $54313ca8ab1dbd89$var$Jc = !1, $54313ca8ab1dbd89$var$Kc = [], $54313ca8ab1dbd89$var$Lc = null, $54313ca8ab1dbd89$var$Mc = null, $54313ca8ab1dbd89$var$Nc = null, $54313ca8ab1dbd89$var$Oc = new Map, $54313ca8ab1dbd89$var$Pc = new Map, $54313ca8ab1dbd89$var$Qc = [], $54313ca8ab1dbd89$var$Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function $54313ca8ab1dbd89$var$Sc(a, b) {
    switch(a){
        case "focusin":
        case "focusout":
            $54313ca8ab1dbd89$var$Lc = null;
            break;
        case "dragenter":
        case "dragleave":
            $54313ca8ab1dbd89$var$Mc = null;
            break;
        case "mouseover":
        case "mouseout":
            $54313ca8ab1dbd89$var$Nc = null;
            break;
        case "pointerover":
        case "pointerout":
            $54313ca8ab1dbd89$var$Oc.delete(b.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            $54313ca8ab1dbd89$var$Pc.delete(b.pointerId);
    }
}
function $54313ca8ab1dbd89$var$Tc(a, b, c, d, e, f) {
    if (null === a || a.nativeEvent !== f) return a = {
        blockedOn: b,
        domEventName: c,
        eventSystemFlags: d,
        nativeEvent: f,
        targetContainers: [
            e
        ]
    }, null !== b && (b = $54313ca8ab1dbd89$var$Cb(b), null !== b && $54313ca8ab1dbd89$var$Fc(b)), a;
    a.eventSystemFlags |= d;
    b = a.targetContainers;
    null !== e && -1 === b.indexOf(e) && b.push(e);
    return a;
}
function $54313ca8ab1dbd89$var$Uc(a, b, c, d, e) {
    switch(b){
        case "focusin":
            return $54313ca8ab1dbd89$var$Lc = $54313ca8ab1dbd89$var$Tc($54313ca8ab1dbd89$var$Lc, a, b, c, d, e), !0;
        case "dragenter":
            return $54313ca8ab1dbd89$var$Mc = $54313ca8ab1dbd89$var$Tc($54313ca8ab1dbd89$var$Mc, a, b, c, d, e), !0;
        case "mouseover":
            return $54313ca8ab1dbd89$var$Nc = $54313ca8ab1dbd89$var$Tc($54313ca8ab1dbd89$var$Nc, a, b, c, d, e), !0;
        case "pointerover":
            var f = e.pointerId;
            $54313ca8ab1dbd89$var$Oc.set(f, $54313ca8ab1dbd89$var$Tc($54313ca8ab1dbd89$var$Oc.get(f) || null, a, b, c, d, e));
            return !0;
        case "gotpointercapture":
            return f = e.pointerId, $54313ca8ab1dbd89$var$Pc.set(f, $54313ca8ab1dbd89$var$Tc($54313ca8ab1dbd89$var$Pc.get(f) || null, a, b, c, d, e)), !0;
    }
    return !1;
}
function $54313ca8ab1dbd89$var$Vc(a) {
    var b = $54313ca8ab1dbd89$var$Wc(a.target);
    if (null !== b) {
        var c = $54313ca8ab1dbd89$var$Vb(b);
        if (null !== c) {
            if (b = c.tag, 13 === b) {
                if (b = $54313ca8ab1dbd89$var$Wb(c), null !== b) {
                    a.blockedOn = b;
                    $54313ca8ab1dbd89$var$Ic(a.priority, function() {
                        $54313ca8ab1dbd89$var$Gc(c);
                    });
                    return;
                }
            } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
                a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
                return;
            }
        }
    }
    a.blockedOn = null;
}
function $54313ca8ab1dbd89$var$Xc(a) {
    if (null !== a.blockedOn) return !1;
    for(var b = a.targetContainers; 0 < b.length;){
        var c = $54313ca8ab1dbd89$var$Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
        if (null === c) {
            c = a.nativeEvent;
            var d = new c.constructor(c.type, c);
            $54313ca8ab1dbd89$var$wb = d;
            c.target.dispatchEvent(d);
            $54313ca8ab1dbd89$var$wb = null;
        } else return b = $54313ca8ab1dbd89$var$Cb(c), null !== b && $54313ca8ab1dbd89$var$Fc(b), a.blockedOn = c, !1;
        b.shift();
    }
    return !0;
}
function $54313ca8ab1dbd89$var$Zc(a, b, c) {
    $54313ca8ab1dbd89$var$Xc(a) && c.delete(b);
}
function $54313ca8ab1dbd89$var$$c() {
    $54313ca8ab1dbd89$var$Jc = !1;
    null !== $54313ca8ab1dbd89$var$Lc && $54313ca8ab1dbd89$var$Xc($54313ca8ab1dbd89$var$Lc) && ($54313ca8ab1dbd89$var$Lc = null);
    null !== $54313ca8ab1dbd89$var$Mc && $54313ca8ab1dbd89$var$Xc($54313ca8ab1dbd89$var$Mc) && ($54313ca8ab1dbd89$var$Mc = null);
    null !== $54313ca8ab1dbd89$var$Nc && $54313ca8ab1dbd89$var$Xc($54313ca8ab1dbd89$var$Nc) && ($54313ca8ab1dbd89$var$Nc = null);
    $54313ca8ab1dbd89$var$Oc.forEach($54313ca8ab1dbd89$var$Zc);
    $54313ca8ab1dbd89$var$Pc.forEach($54313ca8ab1dbd89$var$Zc);
}
function $54313ca8ab1dbd89$var$ad(a, b) {
    a.blockedOn === b && (a.blockedOn = null, $54313ca8ab1dbd89$var$Jc || ($54313ca8ab1dbd89$var$Jc = !0, $4im8J.unstable_scheduleCallback($4im8J.unstable_NormalPriority, $54313ca8ab1dbd89$var$$c)));
}
function $54313ca8ab1dbd89$var$bd(a) {
    function b(b) {
        return $54313ca8ab1dbd89$var$ad(b, a);
    }
    if (0 < $54313ca8ab1dbd89$var$Kc.length) {
        $54313ca8ab1dbd89$var$ad($54313ca8ab1dbd89$var$Kc[0], a);
        for(var c = 1; c < $54313ca8ab1dbd89$var$Kc.length; c++){
            var d = $54313ca8ab1dbd89$var$Kc[c];
            d.blockedOn === a && (d.blockedOn = null);
        }
    }
    null !== $54313ca8ab1dbd89$var$Lc && $54313ca8ab1dbd89$var$ad($54313ca8ab1dbd89$var$Lc, a);
    null !== $54313ca8ab1dbd89$var$Mc && $54313ca8ab1dbd89$var$ad($54313ca8ab1dbd89$var$Mc, a);
    null !== $54313ca8ab1dbd89$var$Nc && $54313ca8ab1dbd89$var$ad($54313ca8ab1dbd89$var$Nc, a);
    $54313ca8ab1dbd89$var$Oc.forEach(b);
    $54313ca8ab1dbd89$var$Pc.forEach(b);
    for(c = 0; c < $54313ca8ab1dbd89$var$Qc.length; c++)d = $54313ca8ab1dbd89$var$Qc[c], d.blockedOn === a && (d.blockedOn = null);
    for(; 0 < $54313ca8ab1dbd89$var$Qc.length && (c = $54313ca8ab1dbd89$var$Qc[0], null === c.blockedOn);)$54313ca8ab1dbd89$var$Vc(c), null === c.blockedOn && $54313ca8ab1dbd89$var$Qc.shift();
}
var $54313ca8ab1dbd89$var$cd = $54313ca8ab1dbd89$var$ua.ReactCurrentBatchConfig, $54313ca8ab1dbd89$var$dd = !0;
function $54313ca8ab1dbd89$var$ed(a, b, c, d) {
    var e = $54313ca8ab1dbd89$var$C, f = $54313ca8ab1dbd89$var$cd.transition;
    $54313ca8ab1dbd89$var$cd.transition = null;
    try {
        $54313ca8ab1dbd89$var$C = 1, $54313ca8ab1dbd89$var$fd(a, b, c, d);
    } finally{
        $54313ca8ab1dbd89$var$C = e, $54313ca8ab1dbd89$var$cd.transition = f;
    }
}
function $54313ca8ab1dbd89$var$gd(a, b, c, d) {
    var e = $54313ca8ab1dbd89$var$C, f = $54313ca8ab1dbd89$var$cd.transition;
    $54313ca8ab1dbd89$var$cd.transition = null;
    try {
        $54313ca8ab1dbd89$var$C = 4, $54313ca8ab1dbd89$var$fd(a, b, c, d);
    } finally{
        $54313ca8ab1dbd89$var$C = e, $54313ca8ab1dbd89$var$cd.transition = f;
    }
}
function $54313ca8ab1dbd89$var$fd(a, b, c, d) {
    if ($54313ca8ab1dbd89$var$dd) {
        var e = $54313ca8ab1dbd89$var$Yc(a, b, c, d);
        if (null === e) $54313ca8ab1dbd89$var$hd(a, b, d, $54313ca8ab1dbd89$var$id, c), $54313ca8ab1dbd89$var$Sc(a, d);
        else if ($54313ca8ab1dbd89$var$Uc(e, a, b, c, d)) d.stopPropagation();
        else if ($54313ca8ab1dbd89$var$Sc(a, d), b & 4 && -1 < $54313ca8ab1dbd89$var$Rc.indexOf(a)) {
            for(; null !== e;){
                var f = $54313ca8ab1dbd89$var$Cb(e);
                null !== f && $54313ca8ab1dbd89$var$Ec(f);
                f = $54313ca8ab1dbd89$var$Yc(a, b, c, d);
                null === f && $54313ca8ab1dbd89$var$hd(a, b, d, $54313ca8ab1dbd89$var$id, c);
                if (f === e) break;
                e = f;
            }
            null !== e && d.stopPropagation();
        } else $54313ca8ab1dbd89$var$hd(a, b, d, null, c);
    }
}
var $54313ca8ab1dbd89$var$id = null;
function $54313ca8ab1dbd89$var$Yc(a, b, c, d) {
    $54313ca8ab1dbd89$var$id = null;
    a = $54313ca8ab1dbd89$var$xb(d);
    a = $54313ca8ab1dbd89$var$Wc(a);
    if (null !== a) {
        if (b = $54313ca8ab1dbd89$var$Vb(a), null === b) a = null;
        else if (c = b.tag, 13 === c) {
            a = $54313ca8ab1dbd89$var$Wb(b);
            if (null !== a) return a;
            a = null;
        } else if (3 === c) {
            if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
            a = null;
        } else b !== a && (a = null);
    }
    $54313ca8ab1dbd89$var$id = a;
    return null;
}
function $54313ca8ab1dbd89$var$jd(a) {
    switch(a){
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
            switch($54313ca8ab1dbd89$var$ec()){
                case $54313ca8ab1dbd89$var$fc:
                    return 1;
                case $54313ca8ab1dbd89$var$gc:
                    return 4;
                case $54313ca8ab1dbd89$var$hc:
                case $54313ca8ab1dbd89$var$ic:
                    return 16;
                case $54313ca8ab1dbd89$var$jc:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var $54313ca8ab1dbd89$var$kd = null, $54313ca8ab1dbd89$var$ld = null, $54313ca8ab1dbd89$var$md = null;
function $54313ca8ab1dbd89$var$nd() {
    if ($54313ca8ab1dbd89$var$md) return $54313ca8ab1dbd89$var$md;
    var a, b = $54313ca8ab1dbd89$var$ld, c = b.length, d, e = "value" in $54313ca8ab1dbd89$var$kd ? $54313ca8ab1dbd89$var$kd.value : $54313ca8ab1dbd89$var$kd.textContent, f = e.length;
    for(a = 0; a < c && b[a] === e[a]; a++);
    var g = c - a;
    for(d = 1; d <= g && b[c - d] === e[f - d]; d++);
    return $54313ca8ab1dbd89$var$md = e.slice(a, 1 < d ? 1 - d : void 0);
}
function $54313ca8ab1dbd89$var$od(a) {
    var b = a.keyCode;
    "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
    10 === a && (a = 13);
    return 32 <= a || 13 === a ? a : 0;
}
function $54313ca8ab1dbd89$var$pd() {
    return !0;
}
function $54313ca8ab1dbd89$var$qd() {
    return !1;
}
function $54313ca8ab1dbd89$var$rd(a) {
    function b(b, d, e, f, g) {
        this._reactName = b;
        this._targetInst = e;
        this.type = d;
        this.nativeEvent = f;
        this.target = g;
        this.currentTarget = null;
        for(var c in a)a.hasOwnProperty(c) && (b = a[c], this[c] = b ? b(f) : f[c]);
        this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : !1 === f.returnValue) ? $54313ca8ab1dbd89$var$pd : $54313ca8ab1dbd89$var$qd;
        this.isPropagationStopped = $54313ca8ab1dbd89$var$qd;
        return this;
    }
    $54313ca8ab1dbd89$var$A(b.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var a = this.nativeEvent;
            a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = !1), this.isDefaultPrevented = $54313ca8ab1dbd89$var$pd);
        },
        stopPropagation: function() {
            var a = this.nativeEvent;
            a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = !0), this.isPropagationStopped = $54313ca8ab1dbd89$var$pd);
        },
        persist: function() {},
        isPersistent: $54313ca8ab1dbd89$var$pd
    });
    return b;
}
var $54313ca8ab1dbd89$var$sd = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(a) {
        return a.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
}, $54313ca8ab1dbd89$var$td = $54313ca8ab1dbd89$var$rd($54313ca8ab1dbd89$var$sd), $54313ca8ab1dbd89$var$ud = $54313ca8ab1dbd89$var$A({}, $54313ca8ab1dbd89$var$sd, {
    view: 0,
    detail: 0
}), $54313ca8ab1dbd89$var$vd = $54313ca8ab1dbd89$var$rd($54313ca8ab1dbd89$var$ud), $54313ca8ab1dbd89$var$wd, $54313ca8ab1dbd89$var$xd, $54313ca8ab1dbd89$var$yd, $54313ca8ab1dbd89$var$Ad = $54313ca8ab1dbd89$var$A({}, $54313ca8ab1dbd89$var$ud, {
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
    getModifierState: $54313ca8ab1dbd89$var$zd,
    button: 0,
    buttons: 0,
    relatedTarget: function(a) {
        return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
    },
    movementX: function(a) {
        if ("movementX" in a) return a.movementX;
        a !== $54313ca8ab1dbd89$var$yd && ($54313ca8ab1dbd89$var$yd && "mousemove" === a.type ? ($54313ca8ab1dbd89$var$wd = a.screenX - $54313ca8ab1dbd89$var$yd.screenX, $54313ca8ab1dbd89$var$xd = a.screenY - $54313ca8ab1dbd89$var$yd.screenY) : $54313ca8ab1dbd89$var$xd = $54313ca8ab1dbd89$var$wd = 0, $54313ca8ab1dbd89$var$yd = a);
        return $54313ca8ab1dbd89$var$wd;
    },
    movementY: function(a) {
        return "movementY" in a ? a.movementY : $54313ca8ab1dbd89$var$xd;
    }
}), $54313ca8ab1dbd89$var$Bd = $54313ca8ab1dbd89$var$rd($54313ca8ab1dbd89$var$Ad), $54313ca8ab1dbd89$var$Cd = $54313ca8ab1dbd89$var$A({}, $54313ca8ab1dbd89$var$Ad, {
    dataTransfer: 0
}), $54313ca8ab1dbd89$var$Dd = $54313ca8ab1dbd89$var$rd($54313ca8ab1dbd89$var$Cd), $54313ca8ab1dbd89$var$Ed = $54313ca8ab1dbd89$var$A({}, $54313ca8ab1dbd89$var$ud, {
    relatedTarget: 0
}), $54313ca8ab1dbd89$var$Fd = $54313ca8ab1dbd89$var$rd($54313ca8ab1dbd89$var$Ed), $54313ca8ab1dbd89$var$Gd = $54313ca8ab1dbd89$var$A({}, $54313ca8ab1dbd89$var$sd, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), $54313ca8ab1dbd89$var$Hd = $54313ca8ab1dbd89$var$rd($54313ca8ab1dbd89$var$Gd), $54313ca8ab1dbd89$var$Id = $54313ca8ab1dbd89$var$A({}, $54313ca8ab1dbd89$var$sd, {
    clipboardData: function(a) {
        return "clipboardData" in a ? a.clipboardData : window.clipboardData;
    }
}), $54313ca8ab1dbd89$var$Jd = $54313ca8ab1dbd89$var$rd($54313ca8ab1dbd89$var$Id), $54313ca8ab1dbd89$var$Kd = $54313ca8ab1dbd89$var$A({}, $54313ca8ab1dbd89$var$sd, {
    data: 0
}), $54313ca8ab1dbd89$var$Ld = $54313ca8ab1dbd89$var$rd($54313ca8ab1dbd89$var$Kd), $54313ca8ab1dbd89$var$Md = {
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
}, $54313ca8ab1dbd89$var$Nd = {
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
}, $54313ca8ab1dbd89$var$Od = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function $54313ca8ab1dbd89$var$Pd(a) {
    var b = this.nativeEvent;
    return b.getModifierState ? b.getModifierState(a) : (a = $54313ca8ab1dbd89$var$Od[a]) ? !!b[a] : !1;
}
function $54313ca8ab1dbd89$var$zd() {
    return $54313ca8ab1dbd89$var$Pd;
}
var $54313ca8ab1dbd89$var$Qd = $54313ca8ab1dbd89$var$A({}, $54313ca8ab1dbd89$var$ud, {
    key: function(a) {
        if (a.key) {
            var b = $54313ca8ab1dbd89$var$Md[a.key] || a.key;
            if ("Unidentified" !== b) return b;
        }
        return "keypress" === a.type ? (a = $54313ca8ab1dbd89$var$od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? $54313ca8ab1dbd89$var$Nd[a.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: $54313ca8ab1dbd89$var$zd,
    charCode: function(a) {
        return "keypress" === a.type ? $54313ca8ab1dbd89$var$od(a) : 0;
    },
    keyCode: function(a) {
        return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    },
    which: function(a) {
        return "keypress" === a.type ? $54313ca8ab1dbd89$var$od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    }
}), $54313ca8ab1dbd89$var$Rd = $54313ca8ab1dbd89$var$rd($54313ca8ab1dbd89$var$Qd), $54313ca8ab1dbd89$var$Sd = $54313ca8ab1dbd89$var$A({}, $54313ca8ab1dbd89$var$Ad, {
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
}), $54313ca8ab1dbd89$var$Td = $54313ca8ab1dbd89$var$rd($54313ca8ab1dbd89$var$Sd), $54313ca8ab1dbd89$var$Ud = $54313ca8ab1dbd89$var$A({}, $54313ca8ab1dbd89$var$ud, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: $54313ca8ab1dbd89$var$zd
}), $54313ca8ab1dbd89$var$Vd = $54313ca8ab1dbd89$var$rd($54313ca8ab1dbd89$var$Ud), $54313ca8ab1dbd89$var$Wd = $54313ca8ab1dbd89$var$A({}, $54313ca8ab1dbd89$var$sd, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), $54313ca8ab1dbd89$var$Xd = $54313ca8ab1dbd89$var$rd($54313ca8ab1dbd89$var$Wd), $54313ca8ab1dbd89$var$Yd = $54313ca8ab1dbd89$var$A({}, $54313ca8ab1dbd89$var$Ad, {
    deltaX: function(a) {
        return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
    },
    deltaY: function(a) {
        return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
}), $54313ca8ab1dbd89$var$Zd = $54313ca8ab1dbd89$var$rd($54313ca8ab1dbd89$var$Yd), $54313ca8ab1dbd89$var$$d = [
    9,
    13,
    27,
    32
], $54313ca8ab1dbd89$var$ae = $54313ca8ab1dbd89$var$ia && "CompositionEvent" in window, $54313ca8ab1dbd89$var$be = null;
$54313ca8ab1dbd89$var$ia && "documentMode" in document && ($54313ca8ab1dbd89$var$be = document.documentMode);
var $54313ca8ab1dbd89$var$ce = $54313ca8ab1dbd89$var$ia && "TextEvent" in window && !$54313ca8ab1dbd89$var$be, $54313ca8ab1dbd89$var$de = $54313ca8ab1dbd89$var$ia && (!$54313ca8ab1dbd89$var$ae || $54313ca8ab1dbd89$var$be && 8 < $54313ca8ab1dbd89$var$be && 11 >= $54313ca8ab1dbd89$var$be), $54313ca8ab1dbd89$var$ee = String.fromCharCode(32), $54313ca8ab1dbd89$var$fe = !1;
function $54313ca8ab1dbd89$var$ge(a, b) {
    switch(a){
        case "keyup":
            return -1 !== $54313ca8ab1dbd89$var$$d.indexOf(b.keyCode);
        case "keydown":
            return 229 !== b.keyCode;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1;
    }
}
function $54313ca8ab1dbd89$var$he(a) {
    a = a.detail;
    return "object" === typeof a && "data" in a ? a.data : null;
}
var $54313ca8ab1dbd89$var$ie = !1;
function $54313ca8ab1dbd89$var$je(a, b) {
    switch(a){
        case "compositionend":
            return $54313ca8ab1dbd89$var$he(b);
        case "keypress":
            if (32 !== b.which) return null;
            $54313ca8ab1dbd89$var$fe = !0;
            return $54313ca8ab1dbd89$var$ee;
        case "textInput":
            return a = b.data, a === $54313ca8ab1dbd89$var$ee && $54313ca8ab1dbd89$var$fe ? null : a;
        default:
            return null;
    }
}
function $54313ca8ab1dbd89$var$ke(a, b) {
    if ($54313ca8ab1dbd89$var$ie) return "compositionend" === a || !$54313ca8ab1dbd89$var$ae && $54313ca8ab1dbd89$var$ge(a, b) ? (a = $54313ca8ab1dbd89$var$nd(), $54313ca8ab1dbd89$var$md = $54313ca8ab1dbd89$var$ld = $54313ca8ab1dbd89$var$kd = null, $54313ca8ab1dbd89$var$ie = !1, a) : null;
    switch(a){
        case "paste":
            return null;
        case "keypress":
            if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
                if (b.char && 1 < b.char.length) return b.char;
                if (b.which) return String.fromCharCode(b.which);
            }
            return null;
        case "compositionend":
            return $54313ca8ab1dbd89$var$de && "ko" !== b.locale ? null : b.data;
        default:
            return null;
    }
}
var $54313ca8ab1dbd89$var$le = {
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
function $54313ca8ab1dbd89$var$me(a) {
    var b = a && a.nodeName && a.nodeName.toLowerCase();
    return "input" === b ? !!$54313ca8ab1dbd89$var$le[a.type] : "textarea" === b ? !0 : !1;
}
function $54313ca8ab1dbd89$var$ne(a, b, c, d) {
    $54313ca8ab1dbd89$var$Eb(d);
    b = $54313ca8ab1dbd89$var$oe(b, "onChange");
    0 < b.length && (c = new $54313ca8ab1dbd89$var$td("onChange", "change", null, c, d), a.push({
        event: c,
        listeners: b
    }));
}
var $54313ca8ab1dbd89$var$pe = null, $54313ca8ab1dbd89$var$qe = null;
function $54313ca8ab1dbd89$var$re(a) {
    $54313ca8ab1dbd89$var$se(a, 0);
}
function $54313ca8ab1dbd89$var$te(a) {
    var b = $54313ca8ab1dbd89$var$ue(a);
    if ($54313ca8ab1dbd89$var$Wa(b)) return a;
}
function $54313ca8ab1dbd89$var$ve(a, b) {
    if ("change" === a) return b;
}
var $54313ca8ab1dbd89$var$we = !1;
if ($54313ca8ab1dbd89$var$ia) {
    var $54313ca8ab1dbd89$var$xe;
    if ($54313ca8ab1dbd89$var$ia) {
        var $54313ca8ab1dbd89$var$ye = "oninput" in document;
        if (!$54313ca8ab1dbd89$var$ye) {
            var $54313ca8ab1dbd89$var$ze = document.createElement("div");
            $54313ca8ab1dbd89$var$ze.setAttribute("oninput", "return;");
            $54313ca8ab1dbd89$var$ye = "function" === typeof $54313ca8ab1dbd89$var$ze.oninput;
        }
        $54313ca8ab1dbd89$var$xe = $54313ca8ab1dbd89$var$ye;
    } else $54313ca8ab1dbd89$var$xe = !1;
    $54313ca8ab1dbd89$var$we = $54313ca8ab1dbd89$var$xe && (!document.documentMode || 9 < document.documentMode);
}
function $54313ca8ab1dbd89$var$Ae() {
    $54313ca8ab1dbd89$var$pe && ($54313ca8ab1dbd89$var$pe.detachEvent("onpropertychange", $54313ca8ab1dbd89$var$Be), $54313ca8ab1dbd89$var$qe = $54313ca8ab1dbd89$var$pe = null);
}
function $54313ca8ab1dbd89$var$Be(a) {
    if ("value" === a.propertyName && $54313ca8ab1dbd89$var$te($54313ca8ab1dbd89$var$qe)) {
        var b = [];
        $54313ca8ab1dbd89$var$ne(b, $54313ca8ab1dbd89$var$qe, a, $54313ca8ab1dbd89$var$xb(a));
        $54313ca8ab1dbd89$var$Jb($54313ca8ab1dbd89$var$re, b);
    }
}
function $54313ca8ab1dbd89$var$Ce(a, b, c) {
    "focusin" === a ? ($54313ca8ab1dbd89$var$Ae(), $54313ca8ab1dbd89$var$pe = b, $54313ca8ab1dbd89$var$qe = c, $54313ca8ab1dbd89$var$pe.attachEvent("onpropertychange", $54313ca8ab1dbd89$var$Be)) : "focusout" === a && $54313ca8ab1dbd89$var$Ae();
}
function $54313ca8ab1dbd89$var$De(a) {
    if ("selectionchange" === a || "keyup" === a || "keydown" === a) return $54313ca8ab1dbd89$var$te($54313ca8ab1dbd89$var$qe);
}
function $54313ca8ab1dbd89$var$Ee(a, b) {
    if ("click" === a) return $54313ca8ab1dbd89$var$te(b);
}
function $54313ca8ab1dbd89$var$Fe(a, b) {
    if ("input" === a || "change" === a) return $54313ca8ab1dbd89$var$te(b);
}
function $54313ca8ab1dbd89$var$Ge(a, b) {
    return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}
var $54313ca8ab1dbd89$var$He = "function" === typeof Object.is ? Object.is : $54313ca8ab1dbd89$var$Ge;
function $54313ca8ab1dbd89$var$Ie(a, b) {
    if ($54313ca8ab1dbd89$var$He(a, b)) return !0;
    if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
    var c = Object.keys(a), d = Object.keys(b);
    if (c.length !== d.length) return !1;
    for(d = 0; d < c.length; d++){
        var e = c[d];
        if (!$54313ca8ab1dbd89$var$ja.call(b, e) || !$54313ca8ab1dbd89$var$He(a[e], b[e])) return !1;
    }
    return !0;
}
function $54313ca8ab1dbd89$var$Je(a) {
    for(; a && a.firstChild;)a = a.firstChild;
    return a;
}
function $54313ca8ab1dbd89$var$Ke(a, b) {
    var c = $54313ca8ab1dbd89$var$Je(a);
    a = 0;
    for(var d; c;){
        if (3 === c.nodeType) {
            d = a + c.textContent.length;
            if (a <= b && d >= b) return {
                node: c,
                offset: b - a
            };
            a = d;
        }
        a: {
            for(; c;){
                if (c.nextSibling) {
                    c = c.nextSibling;
                    break a;
                }
                c = c.parentNode;
            }
            c = void 0;
        }
        c = $54313ca8ab1dbd89$var$Je(c);
    }
}
function $54313ca8ab1dbd89$var$Le(a, b) {
    return a && b ? a === b ? !0 : a && 3 === a.nodeType ? !1 : b && 3 === b.nodeType ? $54313ca8ab1dbd89$var$Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : !1 : !1;
}
function $54313ca8ab1dbd89$var$Me() {
    for(var a = window, b = $54313ca8ab1dbd89$var$Xa(); b instanceof a.HTMLIFrameElement;){
        try {
            var c = "string" === typeof b.contentWindow.location.href;
        } catch (d) {
            c = !1;
        }
        if (c) a = b.contentWindow;
        else break;
        b = $54313ca8ab1dbd89$var$Xa(a.document);
    }
    return b;
}
function $54313ca8ab1dbd89$var$Ne(a) {
    var b = a && a.nodeName && a.nodeName.toLowerCase();
    return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
}
function $54313ca8ab1dbd89$var$Oe(a) {
    var b = $54313ca8ab1dbd89$var$Me(), c = a.focusedElem, d = a.selectionRange;
    if (b !== c && c && c.ownerDocument && $54313ca8ab1dbd89$var$Le(c.ownerDocument.documentElement, c)) {
        if (null !== d && $54313ca8ab1dbd89$var$Ne(c)) {
            if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
            else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
                a = a.getSelection();
                var e = c.textContent.length, f = Math.min(d.start, e);
                d = void 0 === d.end ? f : Math.min(d.end, e);
                !a.extend && f > d && (e = d, d = f, f = e);
                e = $54313ca8ab1dbd89$var$Ke(c, f);
                var g = $54313ca8ab1dbd89$var$Ke(c, d);
                e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
            }
        }
        b = [];
        for(a = c; a = a.parentNode;)1 === a.nodeType && b.push({
            element: a,
            left: a.scrollLeft,
            top: a.scrollTop
        });
        "function" === typeof c.focus && c.focus();
        for(c = 0; c < b.length; c++)a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
    }
}
var $54313ca8ab1dbd89$var$Pe = $54313ca8ab1dbd89$var$ia && "documentMode" in document && 11 >= document.documentMode, $54313ca8ab1dbd89$var$Qe = null, $54313ca8ab1dbd89$var$Re = null, $54313ca8ab1dbd89$var$Se = null, $54313ca8ab1dbd89$var$Te = !1;
function $54313ca8ab1dbd89$var$Ue(a, b, c) {
    var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
    $54313ca8ab1dbd89$var$Te || null == $54313ca8ab1dbd89$var$Qe || $54313ca8ab1dbd89$var$Qe !== $54313ca8ab1dbd89$var$Xa(d) || (d = $54313ca8ab1dbd89$var$Qe, "selectionStart" in d && $54313ca8ab1dbd89$var$Ne(d) ? d = {
        start: d.selectionStart,
        end: d.selectionEnd
    } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = {
        anchorNode: d.anchorNode,
        anchorOffset: d.anchorOffset,
        focusNode: d.focusNode,
        focusOffset: d.focusOffset
    }), $54313ca8ab1dbd89$var$Se && $54313ca8ab1dbd89$var$Ie($54313ca8ab1dbd89$var$Se, d) || ($54313ca8ab1dbd89$var$Se = d, d = $54313ca8ab1dbd89$var$oe($54313ca8ab1dbd89$var$Re, "onSelect"), 0 < d.length && (b = new $54313ca8ab1dbd89$var$td("onSelect", "select", null, b, c), a.push({
        event: b,
        listeners: d
    }), b.target = $54313ca8ab1dbd89$var$Qe)));
}
function $54313ca8ab1dbd89$var$Ve(a, b) {
    var c = {};
    c[a.toLowerCase()] = b.toLowerCase();
    c["Webkit" + a] = "webkit" + b;
    c["Moz" + a] = "moz" + b;
    return c;
}
var $54313ca8ab1dbd89$var$We = {
    animationend: $54313ca8ab1dbd89$var$Ve("Animation", "AnimationEnd"),
    animationiteration: $54313ca8ab1dbd89$var$Ve("Animation", "AnimationIteration"),
    animationstart: $54313ca8ab1dbd89$var$Ve("Animation", "AnimationStart"),
    transitionend: $54313ca8ab1dbd89$var$Ve("Transition", "TransitionEnd")
}, $54313ca8ab1dbd89$var$Xe = {}, $54313ca8ab1dbd89$var$Ye = {};
$54313ca8ab1dbd89$var$ia && ($54313ca8ab1dbd89$var$Ye = document.createElement("div").style, "AnimationEvent" in window || (delete $54313ca8ab1dbd89$var$We.animationend.animation, delete $54313ca8ab1dbd89$var$We.animationiteration.animation, delete $54313ca8ab1dbd89$var$We.animationstart.animation), "TransitionEvent" in window || delete $54313ca8ab1dbd89$var$We.transitionend.transition);
function $54313ca8ab1dbd89$var$Ze(a) {
    if ($54313ca8ab1dbd89$var$Xe[a]) return $54313ca8ab1dbd89$var$Xe[a];
    if (!$54313ca8ab1dbd89$var$We[a]) return a;
    var b = $54313ca8ab1dbd89$var$We[a], c;
    for(c in b)if (b.hasOwnProperty(c) && c in $54313ca8ab1dbd89$var$Ye) return $54313ca8ab1dbd89$var$Xe[a] = b[c];
    return a;
}
var $54313ca8ab1dbd89$var$$e = $54313ca8ab1dbd89$var$Ze("animationend"), $54313ca8ab1dbd89$var$af = $54313ca8ab1dbd89$var$Ze("animationiteration"), $54313ca8ab1dbd89$var$bf = $54313ca8ab1dbd89$var$Ze("animationstart"), $54313ca8ab1dbd89$var$cf = $54313ca8ab1dbd89$var$Ze("transitionend"), $54313ca8ab1dbd89$var$df = new Map, $54313ca8ab1dbd89$var$ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function $54313ca8ab1dbd89$var$ff(a, b) {
    $54313ca8ab1dbd89$var$df.set(a, b);
    $54313ca8ab1dbd89$var$fa(b, [
        a
    ]);
}
for(var $54313ca8ab1dbd89$var$gf = 0; $54313ca8ab1dbd89$var$gf < $54313ca8ab1dbd89$var$ef.length; $54313ca8ab1dbd89$var$gf++){
    var $54313ca8ab1dbd89$var$hf = $54313ca8ab1dbd89$var$ef[$54313ca8ab1dbd89$var$gf], $54313ca8ab1dbd89$var$jf = $54313ca8ab1dbd89$var$hf.toLowerCase(), $54313ca8ab1dbd89$var$kf = $54313ca8ab1dbd89$var$hf[0].toUpperCase() + $54313ca8ab1dbd89$var$hf.slice(1);
    $54313ca8ab1dbd89$var$ff($54313ca8ab1dbd89$var$jf, "on" + $54313ca8ab1dbd89$var$kf);
}
$54313ca8ab1dbd89$var$ff($54313ca8ab1dbd89$var$$e, "onAnimationEnd");
$54313ca8ab1dbd89$var$ff($54313ca8ab1dbd89$var$af, "onAnimationIteration");
$54313ca8ab1dbd89$var$ff($54313ca8ab1dbd89$var$bf, "onAnimationStart");
$54313ca8ab1dbd89$var$ff("dblclick", "onDoubleClick");
$54313ca8ab1dbd89$var$ff("focusin", "onFocus");
$54313ca8ab1dbd89$var$ff("focusout", "onBlur");
$54313ca8ab1dbd89$var$ff($54313ca8ab1dbd89$var$cf, "onTransitionEnd");
$54313ca8ab1dbd89$var$ha("onMouseEnter", [
    "mouseout",
    "mouseover"
]);
$54313ca8ab1dbd89$var$ha("onMouseLeave", [
    "mouseout",
    "mouseover"
]);
$54313ca8ab1dbd89$var$ha("onPointerEnter", [
    "pointerout",
    "pointerover"
]);
$54313ca8ab1dbd89$var$ha("onPointerLeave", [
    "pointerout",
    "pointerover"
]);
$54313ca8ab1dbd89$var$fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
$54313ca8ab1dbd89$var$fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
$54313ca8ab1dbd89$var$fa("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
]);
$54313ca8ab1dbd89$var$fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
$54313ca8ab1dbd89$var$fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
$54313ca8ab1dbd89$var$fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var $54313ca8ab1dbd89$var$lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), $54313ca8ab1dbd89$var$mf = new Set("cancel close invalid load scroll toggle".split(" ").concat($54313ca8ab1dbd89$var$lf));
function $54313ca8ab1dbd89$var$nf(a, b, c) {
    var d = a.type || "unknown-event";
    a.currentTarget = c;
    $54313ca8ab1dbd89$var$Ub(d, b, void 0, a);
    a.currentTarget = null;
}
function $54313ca8ab1dbd89$var$se(a, b) {
    b = 0 !== (b & 4);
    for(var c = 0; c < a.length; c++){
        var d = a[c], e = d.event;
        d = d.listeners;
        a: {
            var f = void 0;
            if (b) for(var g = d.length - 1; 0 <= g; g--){
                var h = d[g], k = h.instance, l = h.currentTarget;
                h = h.listener;
                if (k !== f && e.isPropagationStopped()) break a;
                $54313ca8ab1dbd89$var$nf(e, h, l);
                f = k;
            }
            else for(g = 0; g < d.length; g++){
                h = d[g];
                k = h.instance;
                l = h.currentTarget;
                h = h.listener;
                if (k !== f && e.isPropagationStopped()) break a;
                $54313ca8ab1dbd89$var$nf(e, h, l);
                f = k;
            }
        }
    }
    if ($54313ca8ab1dbd89$var$Qb) throw a = $54313ca8ab1dbd89$var$Rb, $54313ca8ab1dbd89$var$Qb = !1, $54313ca8ab1dbd89$var$Rb = null, a;
}
function $54313ca8ab1dbd89$var$D(a, b) {
    var c = b[$54313ca8ab1dbd89$var$of];
    void 0 === c && (c = b[$54313ca8ab1dbd89$var$of] = new Set);
    var d = a + "__bubble";
    c.has(d) || ($54313ca8ab1dbd89$var$pf(b, a, 2, !1), c.add(d));
}
function $54313ca8ab1dbd89$var$qf(a, b, c) {
    var d = 0;
    b && (d |= 4);
    $54313ca8ab1dbd89$var$pf(c, a, d, b);
}
var $54313ca8ab1dbd89$var$rf = "_reactListening" + Math.random().toString(36).slice(2);
function $54313ca8ab1dbd89$var$sf(a) {
    if (!a[$54313ca8ab1dbd89$var$rf]) {
        a[$54313ca8ab1dbd89$var$rf] = !0;
        $54313ca8ab1dbd89$var$da.forEach(function(b) {
            "selectionchange" !== b && ($54313ca8ab1dbd89$var$mf.has(b) || $54313ca8ab1dbd89$var$qf(b, !1, a), $54313ca8ab1dbd89$var$qf(b, !0, a));
        });
        var b = 9 === a.nodeType ? a : a.ownerDocument;
        null === b || b[$54313ca8ab1dbd89$var$rf] || (b[$54313ca8ab1dbd89$var$rf] = !0, $54313ca8ab1dbd89$var$qf("selectionchange", !1, b));
    }
}
function $54313ca8ab1dbd89$var$pf(a, b, c, d) {
    switch($54313ca8ab1dbd89$var$jd(b)){
        case 1:
            var e = $54313ca8ab1dbd89$var$ed;
            break;
        case 4:
            e = $54313ca8ab1dbd89$var$gd;
            break;
        default:
            e = $54313ca8ab1dbd89$var$fd;
    }
    c = e.bind(null, b, c, a);
    e = void 0;
    !$54313ca8ab1dbd89$var$Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = !0);
    d ? void 0 !== e ? a.addEventListener(b, c, {
        capture: !0,
        passive: e
    }) : a.addEventListener(b, c, !0) : void 0 !== e ? a.addEventListener(b, c, {
        passive: e
    }) : a.addEventListener(b, c, !1);
}
function $54313ca8ab1dbd89$var$hd(a, b, c, d, e) {
    var f = d;
    if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for(;;){
        if (null === d) return;
        var g = d.tag;
        if (3 === g || 4 === g) {
            var h = d.stateNode.containerInfo;
            if (h === e || 8 === h.nodeType && h.parentNode === e) break;
            if (4 === g) for(g = d.return; null !== g;){
                var k = g.tag;
                if (3 === k || 4 === k) {
                    if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
                }
                g = g.return;
            }
            for(; null !== h;){
                g = $54313ca8ab1dbd89$var$Wc(h);
                if (null === g) return;
                k = g.tag;
                if (5 === k || 6 === k) {
                    d = f = g;
                    continue a;
                }
                h = h.parentNode;
            }
        }
        d = d.return;
    }
    $54313ca8ab1dbd89$var$Jb(function() {
        var d = f, e = $54313ca8ab1dbd89$var$xb(c), g = [];
        a: {
            var h = $54313ca8ab1dbd89$var$df.get(a);
            if (void 0 !== h) {
                var k = $54313ca8ab1dbd89$var$td, n = a;
                switch(a){
                    case "keypress":
                        if (0 === $54313ca8ab1dbd89$var$od(c)) break a;
                    case "keydown":
                    case "keyup":
                        k = $54313ca8ab1dbd89$var$Rd;
                        break;
                    case "focusin":
                        n = "focus";
                        k = $54313ca8ab1dbd89$var$Fd;
                        break;
                    case "focusout":
                        n = "blur";
                        k = $54313ca8ab1dbd89$var$Fd;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        k = $54313ca8ab1dbd89$var$Fd;
                        break;
                    case "click":
                        if (2 === c.button) break a;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        k = $54313ca8ab1dbd89$var$Bd;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        k = $54313ca8ab1dbd89$var$Dd;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        k = $54313ca8ab1dbd89$var$Vd;
                        break;
                    case $54313ca8ab1dbd89$var$$e:
                    case $54313ca8ab1dbd89$var$af:
                    case $54313ca8ab1dbd89$var$bf:
                        k = $54313ca8ab1dbd89$var$Hd;
                        break;
                    case $54313ca8ab1dbd89$var$cf:
                        k = $54313ca8ab1dbd89$var$Xd;
                        break;
                    case "scroll":
                        k = $54313ca8ab1dbd89$var$vd;
                        break;
                    case "wheel":
                        k = $54313ca8ab1dbd89$var$Zd;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        k = $54313ca8ab1dbd89$var$Jd;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        k = $54313ca8ab1dbd89$var$Td;
                }
                var t = 0 !== (b & 4), J = !t && "scroll" === a, x = t ? null !== h ? h + "Capture" : null : h;
                t = [];
                for(var w = d, u; null !== w;){
                    u = w;
                    var F = u.stateNode;
                    5 === u.tag && null !== F && (u = F, null !== x && (F = $54313ca8ab1dbd89$var$Kb(w, x), null != F && t.push($54313ca8ab1dbd89$var$tf(w, F, u))));
                    if (J) break;
                    w = w.return;
                }
                0 < t.length && (h = new k(h, n, null, c, e), g.push({
                    event: h,
                    listeners: t
                }));
            }
        }
        if (0 === (b & 7)) {
            a: {
                h = "mouseover" === a || "pointerover" === a;
                k = "mouseout" === a || "pointerout" === a;
                if (h && c !== $54313ca8ab1dbd89$var$wb && (n = c.relatedTarget || c.fromElement) && ($54313ca8ab1dbd89$var$Wc(n) || n[$54313ca8ab1dbd89$var$uf])) break a;
                if (k || h) {
                    h = e.window === e ? e : (h = e.ownerDocument) ? h.defaultView || h.parentWindow : window;
                    if (k) {
                        if (n = c.relatedTarget || c.toElement, k = d, n = n ? $54313ca8ab1dbd89$var$Wc(n) : null, null !== n && (J = $54313ca8ab1dbd89$var$Vb(n), n !== J || 5 !== n.tag && 6 !== n.tag)) n = null;
                    } else k = null, n = d;
                    if (k !== n) {
                        t = $54313ca8ab1dbd89$var$Bd;
                        F = "onMouseLeave";
                        x = "onMouseEnter";
                        w = "mouse";
                        if ("pointerout" === a || "pointerover" === a) t = $54313ca8ab1dbd89$var$Td, F = "onPointerLeave", x = "onPointerEnter", w = "pointer";
                        J = null == k ? h : $54313ca8ab1dbd89$var$ue(k);
                        u = null == n ? h : $54313ca8ab1dbd89$var$ue(n);
                        h = new t(F, w + "leave", k, c, e);
                        h.target = J;
                        h.relatedTarget = u;
                        F = null;
                        $54313ca8ab1dbd89$var$Wc(e) === d && (t = new t(x, w + "enter", n, c, e), t.target = u, t.relatedTarget = J, F = t);
                        J = F;
                        if (k && n) b: {
                            t = k;
                            x = n;
                            w = 0;
                            for(u = t; u; u = $54313ca8ab1dbd89$var$vf(u))w++;
                            u = 0;
                            for(F = x; F; F = $54313ca8ab1dbd89$var$vf(F))u++;
                            for(; 0 < w - u;)t = $54313ca8ab1dbd89$var$vf(t), w--;
                            for(; 0 < u - w;)x = $54313ca8ab1dbd89$var$vf(x), u--;
                            for(; w--;){
                                if (t === x || null !== x && t === x.alternate) break b;
                                t = $54313ca8ab1dbd89$var$vf(t);
                                x = $54313ca8ab1dbd89$var$vf(x);
                            }
                            t = null;
                        }
                        else t = null;
                        null !== k && $54313ca8ab1dbd89$var$wf(g, h, k, t, !1);
                        null !== n && null !== J && $54313ca8ab1dbd89$var$wf(g, J, n, t, !0);
                    }
                }
            }
            a: {
                h = d ? $54313ca8ab1dbd89$var$ue(d) : window;
                k = h.nodeName && h.nodeName.toLowerCase();
                if ("select" === k || "input" === k && "file" === h.type) var na = $54313ca8ab1dbd89$var$ve;
                else if ($54313ca8ab1dbd89$var$me(h)) {
                    if ($54313ca8ab1dbd89$var$we) na = $54313ca8ab1dbd89$var$Fe;
                    else {
                        na = $54313ca8ab1dbd89$var$De;
                        var xa = $54313ca8ab1dbd89$var$Ce;
                    }
                } else (k = h.nodeName) && "input" === k.toLowerCase() && ("checkbox" === h.type || "radio" === h.type) && (na = $54313ca8ab1dbd89$var$Ee);
                if (na && (na = na(a, d))) {
                    $54313ca8ab1dbd89$var$ne(g, na, c, e);
                    break a;
                }
                xa && xa(a, h, d);
                "focusout" === a && (xa = h._wrapperState) && xa.controlled && "number" === h.type && $54313ca8ab1dbd89$var$cb(h, "number", h.value);
            }
            xa = d ? $54313ca8ab1dbd89$var$ue(d) : window;
            switch(a){
                case "focusin":
                    if ($54313ca8ab1dbd89$var$me(xa) || "true" === xa.contentEditable) $54313ca8ab1dbd89$var$Qe = xa, $54313ca8ab1dbd89$var$Re = d, $54313ca8ab1dbd89$var$Se = null;
                    break;
                case "focusout":
                    $54313ca8ab1dbd89$var$Se = $54313ca8ab1dbd89$var$Re = $54313ca8ab1dbd89$var$Qe = null;
                    break;
                case "mousedown":
                    $54313ca8ab1dbd89$var$Te = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    $54313ca8ab1dbd89$var$Te = !1;
                    $54313ca8ab1dbd89$var$Ue(g, c, e);
                    break;
                case "selectionchange":
                    if ($54313ca8ab1dbd89$var$Pe) break;
                case "keydown":
                case "keyup":
                    $54313ca8ab1dbd89$var$Ue(g, c, e);
            }
            var $a;
            if ($54313ca8ab1dbd89$var$ae) b: {
                switch(a){
                    case "compositionstart":
                        var ba = "onCompositionStart";
                        break b;
                    case "compositionend":
                        ba = "onCompositionEnd";
                        break b;
                    case "compositionupdate":
                        ba = "onCompositionUpdate";
                        break b;
                }
                ba = void 0;
            }
            else $54313ca8ab1dbd89$var$ie ? $54313ca8ab1dbd89$var$ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
            ba && ($54313ca8ab1dbd89$var$de && "ko" !== c.locale && ($54313ca8ab1dbd89$var$ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && $54313ca8ab1dbd89$var$ie && ($a = $54313ca8ab1dbd89$var$nd()) : ($54313ca8ab1dbd89$var$kd = e, $54313ca8ab1dbd89$var$ld = "value" in $54313ca8ab1dbd89$var$kd ? $54313ca8ab1dbd89$var$kd.value : $54313ca8ab1dbd89$var$kd.textContent, $54313ca8ab1dbd89$var$ie = !0)), xa = $54313ca8ab1dbd89$var$oe(d, ba), 0 < xa.length && (ba = new $54313ca8ab1dbd89$var$Ld(ba, a, null, c, e), g.push({
                event: ba,
                listeners: xa
            }), $a ? ba.data = $a : ($a = $54313ca8ab1dbd89$var$he(c), null !== $a && (ba.data = $a))));
            if ($a = $54313ca8ab1dbd89$var$ce ? $54313ca8ab1dbd89$var$je(a, c) : $54313ca8ab1dbd89$var$ke(a, c)) d = $54313ca8ab1dbd89$var$oe(d, "onBeforeInput"), 0 < d.length && (e = new $54313ca8ab1dbd89$var$Ld("onBeforeInput", "beforeinput", null, c, e), g.push({
                event: e,
                listeners: d
            }), e.data = $a);
        }
        $54313ca8ab1dbd89$var$se(g, b);
    });
}
function $54313ca8ab1dbd89$var$tf(a, b, c) {
    return {
        instance: a,
        listener: b,
        currentTarget: c
    };
}
function $54313ca8ab1dbd89$var$oe(a, b) {
    for(var c = b + "Capture", d = []; null !== a;){
        var e = a, f = e.stateNode;
        5 === e.tag && null !== f && (e = f, f = $54313ca8ab1dbd89$var$Kb(a, c), null != f && d.unshift($54313ca8ab1dbd89$var$tf(a, f, e)), f = $54313ca8ab1dbd89$var$Kb(a, b), null != f && d.push($54313ca8ab1dbd89$var$tf(a, f, e)));
        a = a.return;
    }
    return d;
}
function $54313ca8ab1dbd89$var$vf(a) {
    if (null === a) return null;
    do a = a.return;
    while (a && 5 !== a.tag);
    return a ? a : null;
}
function $54313ca8ab1dbd89$var$wf(a, b, c, d, e) {
    for(var f = b._reactName, g = []; null !== c && c !== d;){
        var h = c, k = h.alternate, l = h.stateNode;
        if (null !== k && k === d) break;
        5 === h.tag && null !== l && (h = l, e ? (k = $54313ca8ab1dbd89$var$Kb(c, f), null != k && g.unshift($54313ca8ab1dbd89$var$tf(c, k, h))) : e || (k = $54313ca8ab1dbd89$var$Kb(c, f), null != k && g.push($54313ca8ab1dbd89$var$tf(c, k, h))));
        c = c.return;
    }
    0 !== g.length && a.push({
        event: b,
        listeners: g
    });
}
var $54313ca8ab1dbd89$var$xf = /\r\n?/g, $54313ca8ab1dbd89$var$yf = /\u0000|\uFFFD/g;
function $54313ca8ab1dbd89$var$zf(a) {
    return ("string" === typeof a ? a : "" + a).replace($54313ca8ab1dbd89$var$xf, "\n").replace($54313ca8ab1dbd89$var$yf, "");
}
function $54313ca8ab1dbd89$var$Af(a, b, c) {
    b = $54313ca8ab1dbd89$var$zf(b);
    if ($54313ca8ab1dbd89$var$zf(a) !== b && c) throw Error($54313ca8ab1dbd89$var$p(425));
}
function $54313ca8ab1dbd89$var$Bf() {}
var $54313ca8ab1dbd89$var$Cf = null, $54313ca8ab1dbd89$var$Df = null;
function $54313ca8ab1dbd89$var$Ef(a, b) {
    return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
}
var $54313ca8ab1dbd89$var$Ff = "function" === typeof setTimeout ? setTimeout : void 0, $54313ca8ab1dbd89$var$Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, $54313ca8ab1dbd89$var$Hf = "function" === typeof Promise ? Promise : void 0, $54313ca8ab1dbd89$var$Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof $54313ca8ab1dbd89$var$Hf ? function(a) {
    return $54313ca8ab1dbd89$var$Hf.resolve(null).then(a).catch($54313ca8ab1dbd89$var$If);
} : $54313ca8ab1dbd89$var$Ff;
function $54313ca8ab1dbd89$var$If(a) {
    setTimeout(function() {
        throw a;
    });
}
function $54313ca8ab1dbd89$var$Kf(a, b) {
    var c = b, d = 0;
    do {
        var e = c.nextSibling;
        a.removeChild(c);
        if (e && 8 === e.nodeType) {
            if (c = e.data, "/$" === c) {
                if (0 === d) {
                    a.removeChild(e);
                    $54313ca8ab1dbd89$var$bd(b);
                    return;
                }
                d--;
            } else "$" !== c && "$?" !== c && "$!" !== c || d++;
        }
        c = e;
    }while (c);
    $54313ca8ab1dbd89$var$bd(b);
}
function $54313ca8ab1dbd89$var$Lf(a) {
    for(; null != a; a = a.nextSibling){
        var b = a.nodeType;
        if (1 === b || 3 === b) break;
        if (8 === b) {
            b = a.data;
            if ("$" === b || "$!" === b || "$?" === b) break;
            if ("/$" === b) return null;
        }
    }
    return a;
}
function $54313ca8ab1dbd89$var$Mf(a) {
    a = a.previousSibling;
    for(var b = 0; a;){
        if (8 === a.nodeType) {
            var c = a.data;
            if ("$" === c || "$!" === c || "$?" === c) {
                if (0 === b) return a;
                b--;
            } else "/$" === c && b++;
        }
        a = a.previousSibling;
    }
    return null;
}
var $54313ca8ab1dbd89$var$Nf = Math.random().toString(36).slice(2), $54313ca8ab1dbd89$var$Of = "__reactFiber$" + $54313ca8ab1dbd89$var$Nf, $54313ca8ab1dbd89$var$Pf = "__reactProps$" + $54313ca8ab1dbd89$var$Nf, $54313ca8ab1dbd89$var$uf = "__reactContainer$" + $54313ca8ab1dbd89$var$Nf, $54313ca8ab1dbd89$var$of = "__reactEvents$" + $54313ca8ab1dbd89$var$Nf, $54313ca8ab1dbd89$var$Qf = "__reactListeners$" + $54313ca8ab1dbd89$var$Nf, $54313ca8ab1dbd89$var$Rf = "__reactHandles$" + $54313ca8ab1dbd89$var$Nf;
function $54313ca8ab1dbd89$var$Wc(a) {
    var b = a[$54313ca8ab1dbd89$var$Of];
    if (b) return b;
    for(var c = a.parentNode; c;){
        if (b = c[$54313ca8ab1dbd89$var$uf] || c[$54313ca8ab1dbd89$var$Of]) {
            c = b.alternate;
            if (null !== b.child || null !== c && null !== c.child) for(a = $54313ca8ab1dbd89$var$Mf(a); null !== a;){
                if (c = a[$54313ca8ab1dbd89$var$Of]) return c;
                a = $54313ca8ab1dbd89$var$Mf(a);
            }
            return b;
        }
        a = c;
        c = a.parentNode;
    }
    return null;
}
function $54313ca8ab1dbd89$var$Cb(a) {
    a = a[$54313ca8ab1dbd89$var$Of] || a[$54313ca8ab1dbd89$var$uf];
    return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
}
function $54313ca8ab1dbd89$var$ue(a) {
    if (5 === a.tag || 6 === a.tag) return a.stateNode;
    throw Error($54313ca8ab1dbd89$var$p(33));
}
function $54313ca8ab1dbd89$var$Db(a) {
    return a[$54313ca8ab1dbd89$var$Pf] || null;
}
var $54313ca8ab1dbd89$var$Sf = [], $54313ca8ab1dbd89$var$Tf = -1;
function $54313ca8ab1dbd89$var$Uf(a) {
    return {
        current: a
    };
}
function $54313ca8ab1dbd89$var$E(a) {
    0 > $54313ca8ab1dbd89$var$Tf || (a.current = $54313ca8ab1dbd89$var$Sf[$54313ca8ab1dbd89$var$Tf], $54313ca8ab1dbd89$var$Sf[$54313ca8ab1dbd89$var$Tf] = null, $54313ca8ab1dbd89$var$Tf--);
}
function $54313ca8ab1dbd89$var$G(a, b) {
    $54313ca8ab1dbd89$var$Tf++;
    $54313ca8ab1dbd89$var$Sf[$54313ca8ab1dbd89$var$Tf] = a.current;
    a.current = b;
}
var $54313ca8ab1dbd89$var$Vf = {}, $54313ca8ab1dbd89$var$H = $54313ca8ab1dbd89$var$Uf($54313ca8ab1dbd89$var$Vf), $54313ca8ab1dbd89$var$Wf = $54313ca8ab1dbd89$var$Uf(!1), $54313ca8ab1dbd89$var$Xf = $54313ca8ab1dbd89$var$Vf;
function $54313ca8ab1dbd89$var$Yf(a, b) {
    var c = a.type.contextTypes;
    if (!c) return $54313ca8ab1dbd89$var$Vf;
    var d = a.stateNode;
    if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
    var e = {}, f;
    for(f in c)e[f] = b[f];
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
    return e;
}
function $54313ca8ab1dbd89$var$Zf(a) {
    a = a.childContextTypes;
    return null !== a && void 0 !== a;
}
function $54313ca8ab1dbd89$var$$f() {
    $54313ca8ab1dbd89$var$E($54313ca8ab1dbd89$var$Wf);
    $54313ca8ab1dbd89$var$E($54313ca8ab1dbd89$var$H);
}
function $54313ca8ab1dbd89$var$ag(a, b, c) {
    if ($54313ca8ab1dbd89$var$H.current !== $54313ca8ab1dbd89$var$Vf) throw Error($54313ca8ab1dbd89$var$p(168));
    $54313ca8ab1dbd89$var$G($54313ca8ab1dbd89$var$H, b);
    $54313ca8ab1dbd89$var$G($54313ca8ab1dbd89$var$Wf, c);
}
function $54313ca8ab1dbd89$var$bg(a, b, c) {
    var d = a.stateNode;
    b = b.childContextTypes;
    if ("function" !== typeof d.getChildContext) return c;
    d = d.getChildContext();
    for(var e in d)if (!(e in b)) throw Error($54313ca8ab1dbd89$var$p(108, $54313ca8ab1dbd89$var$Ra(a) || "Unknown", e));
    return $54313ca8ab1dbd89$var$A({}, c, d);
}
function $54313ca8ab1dbd89$var$cg(a) {
    a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || $54313ca8ab1dbd89$var$Vf;
    $54313ca8ab1dbd89$var$Xf = $54313ca8ab1dbd89$var$H.current;
    $54313ca8ab1dbd89$var$G($54313ca8ab1dbd89$var$H, a);
    $54313ca8ab1dbd89$var$G($54313ca8ab1dbd89$var$Wf, $54313ca8ab1dbd89$var$Wf.current);
    return !0;
}
function $54313ca8ab1dbd89$var$dg(a, b, c) {
    var d = a.stateNode;
    if (!d) throw Error($54313ca8ab1dbd89$var$p(169));
    c ? (a = $54313ca8ab1dbd89$var$bg(a, b, $54313ca8ab1dbd89$var$Xf), d.__reactInternalMemoizedMergedChildContext = a, $54313ca8ab1dbd89$var$E($54313ca8ab1dbd89$var$Wf), $54313ca8ab1dbd89$var$E($54313ca8ab1dbd89$var$H), $54313ca8ab1dbd89$var$G($54313ca8ab1dbd89$var$H, a)) : $54313ca8ab1dbd89$var$E($54313ca8ab1dbd89$var$Wf);
    $54313ca8ab1dbd89$var$G($54313ca8ab1dbd89$var$Wf, c);
}
var $54313ca8ab1dbd89$var$eg = null, $54313ca8ab1dbd89$var$fg = !1, $54313ca8ab1dbd89$var$gg = !1;
function $54313ca8ab1dbd89$var$hg(a) {
    null === $54313ca8ab1dbd89$var$eg ? $54313ca8ab1dbd89$var$eg = [
        a
    ] : $54313ca8ab1dbd89$var$eg.push(a);
}
function $54313ca8ab1dbd89$var$ig(a) {
    $54313ca8ab1dbd89$var$fg = !0;
    $54313ca8ab1dbd89$var$hg(a);
}
function $54313ca8ab1dbd89$var$jg() {
    if (!$54313ca8ab1dbd89$var$gg && null !== $54313ca8ab1dbd89$var$eg) {
        $54313ca8ab1dbd89$var$gg = !0;
        var a = 0, b = $54313ca8ab1dbd89$var$C;
        try {
            var c = $54313ca8ab1dbd89$var$eg;
            for($54313ca8ab1dbd89$var$C = 1; a < c.length; a++){
                var d = c[a];
                do d = d(!0);
                while (null !== d);
            }
            $54313ca8ab1dbd89$var$eg = null;
            $54313ca8ab1dbd89$var$fg = !1;
        } catch (e) {
            throw null !== $54313ca8ab1dbd89$var$eg && ($54313ca8ab1dbd89$var$eg = $54313ca8ab1dbd89$var$eg.slice(a + 1)), $54313ca8ab1dbd89$var$ac($54313ca8ab1dbd89$var$fc, $54313ca8ab1dbd89$var$jg), e;
        } finally{
            $54313ca8ab1dbd89$var$C = b, $54313ca8ab1dbd89$var$gg = !1;
        }
    }
    return null;
}
var $54313ca8ab1dbd89$var$kg = [], $54313ca8ab1dbd89$var$lg = 0, $54313ca8ab1dbd89$var$mg = null, $54313ca8ab1dbd89$var$ng = 0, $54313ca8ab1dbd89$var$og = [], $54313ca8ab1dbd89$var$pg = 0, $54313ca8ab1dbd89$var$qg = null, $54313ca8ab1dbd89$var$rg = 1, $54313ca8ab1dbd89$var$sg = "";
function $54313ca8ab1dbd89$var$tg(a, b) {
    $54313ca8ab1dbd89$var$kg[$54313ca8ab1dbd89$var$lg++] = $54313ca8ab1dbd89$var$ng;
    $54313ca8ab1dbd89$var$kg[$54313ca8ab1dbd89$var$lg++] = $54313ca8ab1dbd89$var$mg;
    $54313ca8ab1dbd89$var$mg = a;
    $54313ca8ab1dbd89$var$ng = b;
}
function $54313ca8ab1dbd89$var$ug(a, b, c) {
    $54313ca8ab1dbd89$var$og[$54313ca8ab1dbd89$var$pg++] = $54313ca8ab1dbd89$var$rg;
    $54313ca8ab1dbd89$var$og[$54313ca8ab1dbd89$var$pg++] = $54313ca8ab1dbd89$var$sg;
    $54313ca8ab1dbd89$var$og[$54313ca8ab1dbd89$var$pg++] = $54313ca8ab1dbd89$var$qg;
    $54313ca8ab1dbd89$var$qg = a;
    var d = $54313ca8ab1dbd89$var$rg;
    a = $54313ca8ab1dbd89$var$sg;
    var e = 32 - $54313ca8ab1dbd89$var$oc(d) - 1;
    d &= ~(1 << e);
    c += 1;
    var f = 32 - $54313ca8ab1dbd89$var$oc(b) + e;
    if (30 < f) {
        var g = e - e % 5;
        f = (d & (1 << g) - 1).toString(32);
        d >>= g;
        e -= g;
        $54313ca8ab1dbd89$var$rg = 1 << 32 - $54313ca8ab1dbd89$var$oc(b) + e | c << e | d;
        $54313ca8ab1dbd89$var$sg = f + a;
    } else $54313ca8ab1dbd89$var$rg = 1 << f | c << e | d, $54313ca8ab1dbd89$var$sg = a;
}
function $54313ca8ab1dbd89$var$vg(a) {
    null !== a.return && ($54313ca8ab1dbd89$var$tg(a, 1), $54313ca8ab1dbd89$var$ug(a, 1, 0));
}
function $54313ca8ab1dbd89$var$wg(a) {
    for(; a === $54313ca8ab1dbd89$var$mg;)$54313ca8ab1dbd89$var$mg = $54313ca8ab1dbd89$var$kg[--$54313ca8ab1dbd89$var$lg], $54313ca8ab1dbd89$var$kg[$54313ca8ab1dbd89$var$lg] = null, $54313ca8ab1dbd89$var$ng = $54313ca8ab1dbd89$var$kg[--$54313ca8ab1dbd89$var$lg], $54313ca8ab1dbd89$var$kg[$54313ca8ab1dbd89$var$lg] = null;
    for(; a === $54313ca8ab1dbd89$var$qg;)$54313ca8ab1dbd89$var$qg = $54313ca8ab1dbd89$var$og[--$54313ca8ab1dbd89$var$pg], $54313ca8ab1dbd89$var$og[$54313ca8ab1dbd89$var$pg] = null, $54313ca8ab1dbd89$var$sg = $54313ca8ab1dbd89$var$og[--$54313ca8ab1dbd89$var$pg], $54313ca8ab1dbd89$var$og[$54313ca8ab1dbd89$var$pg] = null, $54313ca8ab1dbd89$var$rg = $54313ca8ab1dbd89$var$og[--$54313ca8ab1dbd89$var$pg], $54313ca8ab1dbd89$var$og[$54313ca8ab1dbd89$var$pg] = null;
}
var $54313ca8ab1dbd89$var$xg = null, $54313ca8ab1dbd89$var$yg = null, $54313ca8ab1dbd89$var$I = !1, $54313ca8ab1dbd89$var$zg = null;
function $54313ca8ab1dbd89$var$Ag(a, b) {
    var c = $54313ca8ab1dbd89$var$Bg(5, null, null, 0);
    c.elementType = "DELETED";
    c.stateNode = b;
    c.return = a;
    b = a.deletions;
    null === b ? (a.deletions = [
        c
    ], a.flags |= 16) : b.push(c);
}
function $54313ca8ab1dbd89$var$Cg(a, b) {
    switch(a.tag){
        case 5:
            var c = a.type;
            b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
            return null !== b ? (a.stateNode = b, $54313ca8ab1dbd89$var$xg = a, $54313ca8ab1dbd89$var$yg = $54313ca8ab1dbd89$var$Lf(b.firstChild), !0) : !1;
        case 6:
            return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, $54313ca8ab1dbd89$var$xg = a, $54313ca8ab1dbd89$var$yg = null, !0) : !1;
        case 13:
            return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== $54313ca8ab1dbd89$var$qg ? {
                id: $54313ca8ab1dbd89$var$rg,
                overflow: $54313ca8ab1dbd89$var$sg
            } : null, a.memoizedState = {
                dehydrated: b,
                treeContext: c,
                retryLane: 1073741824
            }, c = $54313ca8ab1dbd89$var$Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, $54313ca8ab1dbd89$var$xg = a, $54313ca8ab1dbd89$var$yg = null, !0) : !1;
        default:
            return !1;
    }
}
function $54313ca8ab1dbd89$var$Dg(a) {
    return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
}
function $54313ca8ab1dbd89$var$Eg(a) {
    if ($54313ca8ab1dbd89$var$I) {
        var b = $54313ca8ab1dbd89$var$yg;
        if (b) {
            var c = b;
            if (!$54313ca8ab1dbd89$var$Cg(a, b)) {
                if ($54313ca8ab1dbd89$var$Dg(a)) throw Error($54313ca8ab1dbd89$var$p(418));
                b = $54313ca8ab1dbd89$var$Lf(c.nextSibling);
                var d = $54313ca8ab1dbd89$var$xg;
                b && $54313ca8ab1dbd89$var$Cg(a, b) ? $54313ca8ab1dbd89$var$Ag(d, c) : (a.flags = a.flags & -4097 | 2, $54313ca8ab1dbd89$var$I = !1, $54313ca8ab1dbd89$var$xg = a);
            }
        } else {
            if ($54313ca8ab1dbd89$var$Dg(a)) throw Error($54313ca8ab1dbd89$var$p(418));
            a.flags = a.flags & -4097 | 2;
            $54313ca8ab1dbd89$var$I = !1;
            $54313ca8ab1dbd89$var$xg = a;
        }
    }
}
function $54313ca8ab1dbd89$var$Fg(a) {
    for(a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;)a = a.return;
    $54313ca8ab1dbd89$var$xg = a;
}
function $54313ca8ab1dbd89$var$Gg(a) {
    if (a !== $54313ca8ab1dbd89$var$xg) return !1;
    if (!$54313ca8ab1dbd89$var$I) return $54313ca8ab1dbd89$var$Fg(a), $54313ca8ab1dbd89$var$I = !0, !1;
    var b;
    (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !$54313ca8ab1dbd89$var$Ef(a.type, a.memoizedProps));
    if (b && (b = $54313ca8ab1dbd89$var$yg)) {
        if ($54313ca8ab1dbd89$var$Dg(a)) throw $54313ca8ab1dbd89$var$Hg(), Error($54313ca8ab1dbd89$var$p(418));
        for(; b;)$54313ca8ab1dbd89$var$Ag(a, b), b = $54313ca8ab1dbd89$var$Lf(b.nextSibling);
    }
    $54313ca8ab1dbd89$var$Fg(a);
    if (13 === a.tag) {
        a = a.memoizedState;
        a = null !== a ? a.dehydrated : null;
        if (!a) throw Error($54313ca8ab1dbd89$var$p(317));
        a: {
            a = a.nextSibling;
            for(b = 0; a;){
                if (8 === a.nodeType) {
                    var c = a.data;
                    if ("/$" === c) {
                        if (0 === b) {
                            $54313ca8ab1dbd89$var$yg = $54313ca8ab1dbd89$var$Lf(a.nextSibling);
                            break a;
                        }
                        b--;
                    } else "$" !== c && "$!" !== c && "$?" !== c || b++;
                }
                a = a.nextSibling;
            }
            $54313ca8ab1dbd89$var$yg = null;
        }
    } else $54313ca8ab1dbd89$var$yg = $54313ca8ab1dbd89$var$xg ? $54313ca8ab1dbd89$var$Lf(a.stateNode.nextSibling) : null;
    return !0;
}
function $54313ca8ab1dbd89$var$Hg() {
    for(var a = $54313ca8ab1dbd89$var$yg; a;)a = $54313ca8ab1dbd89$var$Lf(a.nextSibling);
}
function $54313ca8ab1dbd89$var$Ig() {
    $54313ca8ab1dbd89$var$yg = $54313ca8ab1dbd89$var$xg = null;
    $54313ca8ab1dbd89$var$I = !1;
}
function $54313ca8ab1dbd89$var$Jg(a) {
    null === $54313ca8ab1dbd89$var$zg ? $54313ca8ab1dbd89$var$zg = [
        a
    ] : $54313ca8ab1dbd89$var$zg.push(a);
}
var $54313ca8ab1dbd89$var$Kg = $54313ca8ab1dbd89$var$ua.ReactCurrentBatchConfig;
function $54313ca8ab1dbd89$var$Lg(a, b, c) {
    a = c.ref;
    if (null !== a && "function" !== typeof a && "object" !== typeof a) {
        if (c._owner) {
            c = c._owner;
            if (c) {
                if (1 !== c.tag) throw Error($54313ca8ab1dbd89$var$p(309));
                var d = c.stateNode;
            }
            if (!d) throw Error($54313ca8ab1dbd89$var$p(147, a));
            var e = d, f = "" + a;
            if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f) return b.ref;
            b = function(a) {
                var b = e.refs;
                null === a ? delete b[f] : b[f] = a;
            };
            b._stringRef = f;
            return b;
        }
        if ("string" !== typeof a) throw Error($54313ca8ab1dbd89$var$p(284));
        if (!c._owner) throw Error($54313ca8ab1dbd89$var$p(290, a));
    }
    return a;
}
function $54313ca8ab1dbd89$var$Mg(a, b) {
    a = Object.prototype.toString.call(b);
    throw Error($54313ca8ab1dbd89$var$p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
}
function $54313ca8ab1dbd89$var$Ng(a) {
    var b = a._init;
    return b(a._payload);
}
function $54313ca8ab1dbd89$var$Og(a) {
    function b(b, c) {
        if (a) {
            var d = b.deletions;
            null === d ? (b.deletions = [
                c
            ], b.flags |= 16) : d.push(c);
        }
    }
    function c(c, d) {
        if (!a) return null;
        for(; null !== d;)b(c, d), d = d.sibling;
        return null;
    }
    function d(a, b) {
        for(a = new Map; null !== b;)null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;
        return a;
    }
    function e(a, b) {
        a = $54313ca8ab1dbd89$var$Pg(a, b);
        a.index = 0;
        a.sibling = null;
        return a;
    }
    function f(b, c, d) {
        b.index = d;
        if (!a) return b.flags |= 1048576, c;
        d = b.alternate;
        if (null !== d) return d = d.index, d < c ? (b.flags |= 2, c) : d;
        b.flags |= 2;
        return c;
    }
    function g(b) {
        a && null === b.alternate && (b.flags |= 2);
        return b;
    }
    function h(a, b, c, d) {
        if (null === b || 6 !== b.tag) return b = $54313ca8ab1dbd89$var$Qg(c, a.mode, d), b.return = a, b;
        b = e(b, c);
        b.return = a;
        return b;
    }
    function k(a, b, c, d) {
        var f = c.type;
        if (f === $54313ca8ab1dbd89$var$ya) return m(a, b, c.props.children, d, c.key);
        if (null !== b && (b.elementType === f || "object" === typeof f && null !== f && f.$$typeof === $54313ca8ab1dbd89$var$Ha && $54313ca8ab1dbd89$var$Ng(f) === b.type)) return d = e(b, c.props), d.ref = $54313ca8ab1dbd89$var$Lg(a, b, c), d.return = a, d;
        d = $54313ca8ab1dbd89$var$Rg(c.type, c.key, c.props, null, a.mode, d);
        d.ref = $54313ca8ab1dbd89$var$Lg(a, b, c);
        d.return = a;
        return d;
    }
    function l(a, b, c, d) {
        if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = $54313ca8ab1dbd89$var$Sg(c, a.mode, d), b.return = a, b;
        b = e(b, c.children || []);
        b.return = a;
        return b;
    }
    function m(a, b, c, d, f) {
        if (null === b || 7 !== b.tag) return b = $54313ca8ab1dbd89$var$Tg(c, a.mode, d, f), b.return = a, b;
        b = e(b, c);
        b.return = a;
        return b;
    }
    function q(a, b, c) {
        if ("string" === typeof b && "" !== b || "number" === typeof b) return b = $54313ca8ab1dbd89$var$Qg("" + b, a.mode, c), b.return = a, b;
        if ("object" === typeof b && null !== b) {
            switch(b.$$typeof){
                case $54313ca8ab1dbd89$var$va:
                    return c = $54313ca8ab1dbd89$var$Rg(b.type, b.key, b.props, null, a.mode, c), c.ref = $54313ca8ab1dbd89$var$Lg(a, null, b), c.return = a, c;
                case $54313ca8ab1dbd89$var$wa:
                    return b = $54313ca8ab1dbd89$var$Sg(b, a.mode, c), b.return = a, b;
                case $54313ca8ab1dbd89$var$Ha:
                    var d = b._init;
                    return q(a, d(b._payload), c);
            }
            if ($54313ca8ab1dbd89$var$eb(b) || $54313ca8ab1dbd89$var$Ka(b)) return b = $54313ca8ab1dbd89$var$Tg(b, a.mode, c, null), b.return = a, b;
            $54313ca8ab1dbd89$var$Mg(a, b);
        }
        return null;
    }
    function r(a, b, c, d) {
        var e = null !== b ? b.key : null;
        if ("string" === typeof c && "" !== c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);
        if ("object" === typeof c && null !== c) {
            switch(c.$$typeof){
                case $54313ca8ab1dbd89$var$va:
                    return c.key === e ? k(a, b, c, d) : null;
                case $54313ca8ab1dbd89$var$wa:
                    return c.key === e ? l(a, b, c, d) : null;
                case $54313ca8ab1dbd89$var$Ha:
                    return e = c._init, r(a, b, e(c._payload), d);
            }
            if ($54313ca8ab1dbd89$var$eb(c) || $54313ca8ab1dbd89$var$Ka(c)) return null !== e ? null : m(a, b, c, d, null);
            $54313ca8ab1dbd89$var$Mg(a, c);
        }
        return null;
    }
    function y(a, b, c, d, e) {
        if ("string" === typeof d && "" !== d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);
        if ("object" === typeof d && null !== d) {
            switch(d.$$typeof){
                case $54313ca8ab1dbd89$var$va:
                    return a = a.get(null === d.key ? c : d.key) || null, k(b, a, d, e);
                case $54313ca8ab1dbd89$var$wa:
                    return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);
                case $54313ca8ab1dbd89$var$Ha:
                    var f = d._init;
                    return y(a, b, c, f(d._payload), e);
            }
            if ($54313ca8ab1dbd89$var$eb(d) || $54313ca8ab1dbd89$var$Ka(d)) return a = a.get(c) || null, m(b, a, d, e, null);
            $54313ca8ab1dbd89$var$Mg(b, d);
        }
        return null;
    }
    function n(e, g, h, k) {
        for(var l = null, m = null, u = g, w = g = 0, x = null; null !== u && w < h.length; w++){
            u.index > w ? (x = u, u = null) : x = u.sibling;
            var n = r(e, u, h[w], k);
            if (null === n) {
                null === u && (u = x);
                break;
            }
            a && u && null === n.alternate && b(e, u);
            g = f(n, g, w);
            null === m ? l = n : m.sibling = n;
            m = n;
            u = x;
        }
        if (w === h.length) return c(e, u), $54313ca8ab1dbd89$var$I && $54313ca8ab1dbd89$var$tg(e, w), l;
        if (null === u) {
            for(; w < h.length; w++)u = q(e, h[w], k), null !== u && (g = f(u, g, w), null === m ? l = u : m.sibling = u, m = u);
            $54313ca8ab1dbd89$var$I && $54313ca8ab1dbd89$var$tg(e, w);
            return l;
        }
        for(u = d(e, u); w < h.length; w++)x = y(u, e, w, h[w], k), null !== x && (a && null !== x.alternate && u.delete(null === x.key ? w : x.key), g = f(x, g, w), null === m ? l = x : m.sibling = x, m = x);
        a && u.forEach(function(a) {
            return b(e, a);
        });
        $54313ca8ab1dbd89$var$I && $54313ca8ab1dbd89$var$tg(e, w);
        return l;
    }
    function t(e, g, h, k) {
        var l = $54313ca8ab1dbd89$var$Ka(h);
        if ("function" !== typeof l) throw Error($54313ca8ab1dbd89$var$p(150));
        h = l.call(h);
        if (null == h) throw Error($54313ca8ab1dbd89$var$p(151));
        for(var u = l = null, m = g, w = g = 0, x = null, n = h.next(); null !== m && !n.done; w++, n = h.next()){
            m.index > w ? (x = m, m = null) : x = m.sibling;
            var t = r(e, m, n.value, k);
            if (null === t) {
                null === m && (m = x);
                break;
            }
            a && m && null === t.alternate && b(e, m);
            g = f(t, g, w);
            null === u ? l = t : u.sibling = t;
            u = t;
            m = x;
        }
        if (n.done) return c(e, m), $54313ca8ab1dbd89$var$I && $54313ca8ab1dbd89$var$tg(e, w), l;
        if (null === m) {
            for(; !n.done; w++, n = h.next())n = q(e, n.value, k), null !== n && (g = f(n, g, w), null === u ? l = n : u.sibling = n, u = n);
            $54313ca8ab1dbd89$var$I && $54313ca8ab1dbd89$var$tg(e, w);
            return l;
        }
        for(m = d(e, m); !n.done; w++, n = h.next())n = y(m, e, w, n.value, k), null !== n && (a && null !== n.alternate && m.delete(null === n.key ? w : n.key), g = f(n, g, w), null === u ? l = n : u.sibling = n, u = n);
        a && m.forEach(function(a) {
            return b(e, a);
        });
        $54313ca8ab1dbd89$var$I && $54313ca8ab1dbd89$var$tg(e, w);
        return l;
    }
    function J(a, d, f, h) {
        "object" === typeof f && null !== f && f.type === $54313ca8ab1dbd89$var$ya && null === f.key && (f = f.props.children);
        if ("object" === typeof f && null !== f) {
            switch(f.$$typeof){
                case $54313ca8ab1dbd89$var$va:
                    a: {
                        for(var k = f.key, l = d; null !== l;){
                            if (l.key === k) {
                                k = f.type;
                                if (k === $54313ca8ab1dbd89$var$ya) {
                                    if (7 === l.tag) {
                                        c(a, l.sibling);
                                        d = e(l, f.props.children);
                                        d.return = a;
                                        a = d;
                                        break a;
                                    }
                                } else if (l.elementType === k || "object" === typeof k && null !== k && k.$$typeof === $54313ca8ab1dbd89$var$Ha && $54313ca8ab1dbd89$var$Ng(k) === l.type) {
                                    c(a, l.sibling);
                                    d = e(l, f.props);
                                    d.ref = $54313ca8ab1dbd89$var$Lg(a, l, f);
                                    d.return = a;
                                    a = d;
                                    break a;
                                }
                                c(a, l);
                                break;
                            } else b(a, l);
                            l = l.sibling;
                        }
                        f.type === $54313ca8ab1dbd89$var$ya ? (d = $54313ca8ab1dbd89$var$Tg(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = $54313ca8ab1dbd89$var$Rg(f.type, f.key, f.props, null, a.mode, h), h.ref = $54313ca8ab1dbd89$var$Lg(a, d, f), h.return = a, a = h);
                    }
                    return g(a);
                case $54313ca8ab1dbd89$var$wa:
                    a: {
                        for(l = f.key; null !== d;){
                            if (d.key === l) {
                                if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                                    c(a, d.sibling);
                                    d = e(d, f.children || []);
                                    d.return = a;
                                    a = d;
                                    break a;
                                } else {
                                    c(a, d);
                                    break;
                                }
                            } else b(a, d);
                            d = d.sibling;
                        }
                        d = $54313ca8ab1dbd89$var$Sg(f, a.mode, h);
                        d.return = a;
                        a = d;
                    }
                    return g(a);
                case $54313ca8ab1dbd89$var$Ha:
                    return l = f._init, J(a, d, l(f._payload), h);
            }
            if ($54313ca8ab1dbd89$var$eb(f)) return n(a, d, f, h);
            if ($54313ca8ab1dbd89$var$Ka(f)) return t(a, d, f, h);
            $54313ca8ab1dbd89$var$Mg(a, f);
        }
        return "string" === typeof f && "" !== f || "number" === typeof f ? (f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), d = $54313ca8ab1dbd89$var$Qg(f, a.mode, h), d.return = a, a = d), g(a)) : c(a, d);
    }
    return J;
}
var $54313ca8ab1dbd89$var$Ug = $54313ca8ab1dbd89$var$Og(!0), $54313ca8ab1dbd89$var$Vg = $54313ca8ab1dbd89$var$Og(!1), $54313ca8ab1dbd89$var$Wg = $54313ca8ab1dbd89$var$Uf(null), $54313ca8ab1dbd89$var$Xg = null, $54313ca8ab1dbd89$var$Yg = null, $54313ca8ab1dbd89$var$Zg = null;
function $54313ca8ab1dbd89$var$$g() {
    $54313ca8ab1dbd89$var$Zg = $54313ca8ab1dbd89$var$Yg = $54313ca8ab1dbd89$var$Xg = null;
}
function $54313ca8ab1dbd89$var$ah(a) {
    var b = $54313ca8ab1dbd89$var$Wg.current;
    $54313ca8ab1dbd89$var$E($54313ca8ab1dbd89$var$Wg);
    a._currentValue = b;
}
function $54313ca8ab1dbd89$var$bh(a, b, c) {
    for(; null !== a;){
        var d = a.alternate;
        (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
        if (a === c) break;
        a = a.return;
    }
}
function $54313ca8ab1dbd89$var$ch(a, b) {
    $54313ca8ab1dbd89$var$Xg = a;
    $54313ca8ab1dbd89$var$Zg = $54313ca8ab1dbd89$var$Yg = null;
    a = a.dependencies;
    null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && ($54313ca8ab1dbd89$var$dh = !0), a.firstContext = null);
}
function $54313ca8ab1dbd89$var$eh(a) {
    var b = a._currentValue;
    if ($54313ca8ab1dbd89$var$Zg !== a) {
        if (a = {
            context: a,
            memoizedValue: b,
            next: null
        }, null === $54313ca8ab1dbd89$var$Yg) {
            if (null === $54313ca8ab1dbd89$var$Xg) throw Error($54313ca8ab1dbd89$var$p(308));
            $54313ca8ab1dbd89$var$Yg = a;
            $54313ca8ab1dbd89$var$Xg.dependencies = {
                lanes: 0,
                firstContext: a
            };
        } else $54313ca8ab1dbd89$var$Yg = $54313ca8ab1dbd89$var$Yg.next = a;
    }
    return b;
}
var $54313ca8ab1dbd89$var$fh = null;
function $54313ca8ab1dbd89$var$gh(a) {
    null === $54313ca8ab1dbd89$var$fh ? $54313ca8ab1dbd89$var$fh = [
        a
    ] : $54313ca8ab1dbd89$var$fh.push(a);
}
function $54313ca8ab1dbd89$var$hh(a, b, c, d) {
    var e = b.interleaved;
    null === e ? (c.next = c, $54313ca8ab1dbd89$var$gh(b)) : (c.next = e.next, e.next = c);
    b.interleaved = c;
    return $54313ca8ab1dbd89$var$ih(a, d);
}
function $54313ca8ab1dbd89$var$ih(a, b) {
    a.lanes |= b;
    var c = a.alternate;
    null !== c && (c.lanes |= b);
    c = a;
    for(a = a.return; null !== a;)a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
    return 3 === c.tag ? c.stateNode : null;
}
var $54313ca8ab1dbd89$var$jh = !1;
function $54313ca8ab1dbd89$var$kh(a) {
    a.updateQueue = {
        baseState: a.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    };
}
function $54313ca8ab1dbd89$var$lh(a, b) {
    a = a.updateQueue;
    b.updateQueue === a && (b.updateQueue = {
        baseState: a.baseState,
        firstBaseUpdate: a.firstBaseUpdate,
        lastBaseUpdate: a.lastBaseUpdate,
        shared: a.shared,
        effects: a.effects
    });
}
function $54313ca8ab1dbd89$var$mh(a, b) {
    return {
        eventTime: a,
        lane: b,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    };
}
function $54313ca8ab1dbd89$var$nh(a, b, c) {
    var d = a.updateQueue;
    if (null === d) return null;
    d = d.shared;
    if (0 !== ($54313ca8ab1dbd89$var$K & 2)) {
        var e = d.pending;
        null === e ? b.next = b : (b.next = e.next, e.next = b);
        d.pending = b;
        return $54313ca8ab1dbd89$var$ih(a, c);
    }
    e = d.interleaved;
    null === e ? (b.next = b, $54313ca8ab1dbd89$var$gh(d)) : (b.next = e.next, e.next = b);
    d.interleaved = b;
    return $54313ca8ab1dbd89$var$ih(a, c);
}
function $54313ca8ab1dbd89$var$oh(a, b, c) {
    b = b.updateQueue;
    if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
        var d = b.lanes;
        d &= a.pendingLanes;
        c |= d;
        b.lanes = c;
        $54313ca8ab1dbd89$var$Cc(a, c);
    }
}
function $54313ca8ab1dbd89$var$ph(a, b) {
    var c = a.updateQueue, d = a.alternate;
    if (null !== d && (d = d.updateQueue, c === d)) {
        var e = null, f = null;
        c = c.firstBaseUpdate;
        if (null !== c) {
            do {
                var g = {
                    eventTime: c.eventTime,
                    lane: c.lane,
                    tag: c.tag,
                    payload: c.payload,
                    callback: c.callback,
                    next: null
                };
                null === f ? e = f = g : f = f.next = g;
                c = c.next;
            }while (null !== c);
            null === f ? e = f = b : f = f.next = b;
        } else e = f = b;
        c = {
            baseState: d.baseState,
            firstBaseUpdate: e,
            lastBaseUpdate: f,
            shared: d.shared,
            effects: d.effects
        };
        a.updateQueue = c;
        return;
    }
    a = c.lastBaseUpdate;
    null === a ? c.firstBaseUpdate = b : a.next = b;
    c.lastBaseUpdate = b;
}
function $54313ca8ab1dbd89$var$qh(a, b, c, d) {
    var e = a.updateQueue;
    $54313ca8ab1dbd89$var$jh = !1;
    var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
    if (null !== h) {
        e.shared.pending = null;
        var k = h, l = k.next;
        k.next = null;
        null === g ? f = l : g.next = l;
        g = k;
        var m = a.alternate;
        null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l : h.next = l, m.lastBaseUpdate = k));
    }
    if (null !== f) {
        var q = e.baseState;
        g = 0;
        m = l = k = null;
        h = f;
        do {
            var r = h.lane, y = h.eventTime;
            if ((d & r) === r) {
                null !== m && (m = m.next = {
                    eventTime: y,
                    lane: 0,
                    tag: h.tag,
                    payload: h.payload,
                    callback: h.callback,
                    next: null
                });
                a: {
                    var n = a, t = h;
                    r = b;
                    y = c;
                    switch(t.tag){
                        case 1:
                            n = t.payload;
                            if ("function" === typeof n) {
                                q = n.call(y, q, r);
                                break a;
                            }
                            q = n;
                            break a;
                        case 3:
                            n.flags = n.flags & -65537 | 128;
                        case 0:
                            n = t.payload;
                            r = "function" === typeof n ? n.call(y, q, r) : n;
                            if (null === r || void 0 === r) break a;
                            q = $54313ca8ab1dbd89$var$A({}, q, r);
                            break a;
                        case 2:
                            $54313ca8ab1dbd89$var$jh = !0;
                    }
                }
                null !== h.callback && 0 !== h.lane && (a.flags |= 64, r = e.effects, null === r ? e.effects = [
                    h
                ] : r.push(h));
            } else y = {
                eventTime: y,
                lane: r,
                tag: h.tag,
                payload: h.payload,
                callback: h.callback,
                next: null
            }, null === m ? (l = m = y, k = q) : m = m.next = y, g |= r;
            h = h.next;
            if (null === h) {
                if (h = e.shared.pending, null === h) break;
                else r = h, h = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
            }
        }while (1);
        null === m && (k = q);
        e.baseState = k;
        e.firstBaseUpdate = l;
        e.lastBaseUpdate = m;
        b = e.shared.interleaved;
        if (null !== b) {
            e = b;
            do g |= e.lane, e = e.next;
            while (e !== b);
        } else null === f && (e.shared.lanes = 0);
        $54313ca8ab1dbd89$var$rh |= g;
        a.lanes = g;
        a.memoizedState = q;
    }
}
function $54313ca8ab1dbd89$var$sh(a, b, c) {
    a = b.effects;
    b.effects = null;
    if (null !== a) for(b = 0; b < a.length; b++){
        var d = a[b], e = d.callback;
        if (null !== e) {
            d.callback = null;
            d = c;
            if ("function" !== typeof e) throw Error($54313ca8ab1dbd89$var$p(191, e));
            e.call(d);
        }
    }
}
var $54313ca8ab1dbd89$var$th = {}, $54313ca8ab1dbd89$var$uh = $54313ca8ab1dbd89$var$Uf($54313ca8ab1dbd89$var$th), $54313ca8ab1dbd89$var$vh = $54313ca8ab1dbd89$var$Uf($54313ca8ab1dbd89$var$th), $54313ca8ab1dbd89$var$wh = $54313ca8ab1dbd89$var$Uf($54313ca8ab1dbd89$var$th);
function $54313ca8ab1dbd89$var$xh(a) {
    if (a === $54313ca8ab1dbd89$var$th) throw Error($54313ca8ab1dbd89$var$p(174));
    return a;
}
function $54313ca8ab1dbd89$var$yh(a, b) {
    $54313ca8ab1dbd89$var$G($54313ca8ab1dbd89$var$wh, b);
    $54313ca8ab1dbd89$var$G($54313ca8ab1dbd89$var$vh, a);
    $54313ca8ab1dbd89$var$G($54313ca8ab1dbd89$var$uh, $54313ca8ab1dbd89$var$th);
    a = b.nodeType;
    switch(a){
        case 9:
        case 11:
            b = (b = b.documentElement) ? b.namespaceURI : $54313ca8ab1dbd89$var$lb(null, "");
            break;
        default:
            a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = $54313ca8ab1dbd89$var$lb(b, a);
    }
    $54313ca8ab1dbd89$var$E($54313ca8ab1dbd89$var$uh);
    $54313ca8ab1dbd89$var$G($54313ca8ab1dbd89$var$uh, b);
}
function $54313ca8ab1dbd89$var$zh() {
    $54313ca8ab1dbd89$var$E($54313ca8ab1dbd89$var$uh);
    $54313ca8ab1dbd89$var$E($54313ca8ab1dbd89$var$vh);
    $54313ca8ab1dbd89$var$E($54313ca8ab1dbd89$var$wh);
}
function $54313ca8ab1dbd89$var$Ah(a) {
    $54313ca8ab1dbd89$var$xh($54313ca8ab1dbd89$var$wh.current);
    var b = $54313ca8ab1dbd89$var$xh($54313ca8ab1dbd89$var$uh.current);
    var c = $54313ca8ab1dbd89$var$lb(b, a.type);
    b !== c && ($54313ca8ab1dbd89$var$G($54313ca8ab1dbd89$var$vh, a), $54313ca8ab1dbd89$var$G($54313ca8ab1dbd89$var$uh, c));
}
function $54313ca8ab1dbd89$var$Bh(a) {
    $54313ca8ab1dbd89$var$vh.current === a && ($54313ca8ab1dbd89$var$E($54313ca8ab1dbd89$var$uh), $54313ca8ab1dbd89$var$E($54313ca8ab1dbd89$var$vh));
}
var $54313ca8ab1dbd89$var$L = $54313ca8ab1dbd89$var$Uf(0);
function $54313ca8ab1dbd89$var$Ch(a) {
    for(var b = a; null !== b;){
        if (13 === b.tag) {
            var c = b.memoizedState;
            if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
        } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
            if (0 !== (b.flags & 128)) return b;
        } else if (null !== b.child) {
            b.child.return = b;
            b = b.child;
            continue;
        }
        if (b === a) break;
        for(; null === b.sibling;){
            if (null === b.return || b.return === a) return null;
            b = b.return;
        }
        b.sibling.return = b.return;
        b = b.sibling;
    }
    return null;
}
var $54313ca8ab1dbd89$var$Dh = [];
function $54313ca8ab1dbd89$var$Eh() {
    for(var a = 0; a < $54313ca8ab1dbd89$var$Dh.length; a++)$54313ca8ab1dbd89$var$Dh[a]._workInProgressVersionPrimary = null;
    $54313ca8ab1dbd89$var$Dh.length = 0;
}
var $54313ca8ab1dbd89$var$Fh = $54313ca8ab1dbd89$var$ua.ReactCurrentDispatcher, $54313ca8ab1dbd89$var$Gh = $54313ca8ab1dbd89$var$ua.ReactCurrentBatchConfig, $54313ca8ab1dbd89$var$Hh = 0, $54313ca8ab1dbd89$var$M = null, $54313ca8ab1dbd89$var$N = null, $54313ca8ab1dbd89$var$O = null, $54313ca8ab1dbd89$var$Ih = !1, $54313ca8ab1dbd89$var$Jh = !1, $54313ca8ab1dbd89$var$Kh = 0, $54313ca8ab1dbd89$var$Lh = 0;
function $54313ca8ab1dbd89$var$P() {
    throw Error($54313ca8ab1dbd89$var$p(321));
}
function $54313ca8ab1dbd89$var$Mh(a, b) {
    if (null === b) return !1;
    for(var c = 0; c < b.length && c < a.length; c++)if (!$54313ca8ab1dbd89$var$He(a[c], b[c])) return !1;
    return !0;
}
function $54313ca8ab1dbd89$var$Nh(a, b, c, d, e, f) {
    $54313ca8ab1dbd89$var$Hh = f;
    $54313ca8ab1dbd89$var$M = b;
    b.memoizedState = null;
    b.updateQueue = null;
    b.lanes = 0;
    $54313ca8ab1dbd89$var$Fh.current = null === a || null === a.memoizedState ? $54313ca8ab1dbd89$var$Oh : $54313ca8ab1dbd89$var$Ph;
    a = c(d, e);
    if ($54313ca8ab1dbd89$var$Jh) {
        f = 0;
        do {
            $54313ca8ab1dbd89$var$Jh = !1;
            $54313ca8ab1dbd89$var$Kh = 0;
            if (25 <= f) throw Error($54313ca8ab1dbd89$var$p(301));
            f += 1;
            $54313ca8ab1dbd89$var$O = $54313ca8ab1dbd89$var$N = null;
            b.updateQueue = null;
            $54313ca8ab1dbd89$var$Fh.current = $54313ca8ab1dbd89$var$Qh;
            a = c(d, e);
        }while ($54313ca8ab1dbd89$var$Jh);
    }
    $54313ca8ab1dbd89$var$Fh.current = $54313ca8ab1dbd89$var$Rh;
    b = null !== $54313ca8ab1dbd89$var$N && null !== $54313ca8ab1dbd89$var$N.next;
    $54313ca8ab1dbd89$var$Hh = 0;
    $54313ca8ab1dbd89$var$O = $54313ca8ab1dbd89$var$N = $54313ca8ab1dbd89$var$M = null;
    $54313ca8ab1dbd89$var$Ih = !1;
    if (b) throw Error($54313ca8ab1dbd89$var$p(300));
    return a;
}
function $54313ca8ab1dbd89$var$Sh() {
    var a = 0 !== $54313ca8ab1dbd89$var$Kh;
    $54313ca8ab1dbd89$var$Kh = 0;
    return a;
}
function $54313ca8ab1dbd89$var$Th() {
    var a = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    null === $54313ca8ab1dbd89$var$O ? $54313ca8ab1dbd89$var$M.memoizedState = $54313ca8ab1dbd89$var$O = a : $54313ca8ab1dbd89$var$O = $54313ca8ab1dbd89$var$O.next = a;
    return $54313ca8ab1dbd89$var$O;
}
function $54313ca8ab1dbd89$var$Uh() {
    if (null === $54313ca8ab1dbd89$var$N) {
        var a = $54313ca8ab1dbd89$var$M.alternate;
        a = null !== a ? a.memoizedState : null;
    } else a = $54313ca8ab1dbd89$var$N.next;
    var b = null === $54313ca8ab1dbd89$var$O ? $54313ca8ab1dbd89$var$M.memoizedState : $54313ca8ab1dbd89$var$O.next;
    if (null !== b) $54313ca8ab1dbd89$var$O = b, $54313ca8ab1dbd89$var$N = a;
    else {
        if (null === a) throw Error($54313ca8ab1dbd89$var$p(310));
        $54313ca8ab1dbd89$var$N = a;
        a = {
            memoizedState: $54313ca8ab1dbd89$var$N.memoizedState,
            baseState: $54313ca8ab1dbd89$var$N.baseState,
            baseQueue: $54313ca8ab1dbd89$var$N.baseQueue,
            queue: $54313ca8ab1dbd89$var$N.queue,
            next: null
        };
        null === $54313ca8ab1dbd89$var$O ? $54313ca8ab1dbd89$var$M.memoizedState = $54313ca8ab1dbd89$var$O = a : $54313ca8ab1dbd89$var$O = $54313ca8ab1dbd89$var$O.next = a;
    }
    return $54313ca8ab1dbd89$var$O;
}
function $54313ca8ab1dbd89$var$Vh(a, b) {
    return "function" === typeof b ? b(a) : b;
}
function $54313ca8ab1dbd89$var$Wh(a) {
    var b = $54313ca8ab1dbd89$var$Uh(), c = b.queue;
    if (null === c) throw Error($54313ca8ab1dbd89$var$p(311));
    c.lastRenderedReducer = a;
    var d = $54313ca8ab1dbd89$var$N, e = d.baseQueue, f = c.pending;
    if (null !== f) {
        if (null !== e) {
            var g = e.next;
            e.next = f.next;
            f.next = g;
        }
        d.baseQueue = e = f;
        c.pending = null;
    }
    if (null !== e) {
        f = e.next;
        d = d.baseState;
        var h = g = null, k = null, l = f;
        do {
            var m = l.lane;
            if (($54313ca8ab1dbd89$var$Hh & m) === m) null !== k && (k = k.next = {
                lane: 0,
                action: l.action,
                hasEagerState: l.hasEagerState,
                eagerState: l.eagerState,
                next: null
            }), d = l.hasEagerState ? l.eagerState : a(d, l.action);
            else {
                var q = {
                    lane: m,
                    action: l.action,
                    hasEagerState: l.hasEagerState,
                    eagerState: l.eagerState,
                    next: null
                };
                null === k ? (h = k = q, g = d) : k = k.next = q;
                $54313ca8ab1dbd89$var$M.lanes |= m;
                $54313ca8ab1dbd89$var$rh |= m;
            }
            l = l.next;
        }while (null !== l && l !== f);
        null === k ? g = d : k.next = h;
        $54313ca8ab1dbd89$var$He(d, b.memoizedState) || ($54313ca8ab1dbd89$var$dh = !0);
        b.memoizedState = d;
        b.baseState = g;
        b.baseQueue = k;
        c.lastRenderedState = d;
    }
    a = c.interleaved;
    if (null !== a) {
        e = a;
        do f = e.lane, $54313ca8ab1dbd89$var$M.lanes |= f, $54313ca8ab1dbd89$var$rh |= f, e = e.next;
        while (e !== a);
    } else null === e && (c.lanes = 0);
    return [
        b.memoizedState,
        c.dispatch
    ];
}
function $54313ca8ab1dbd89$var$Xh(a) {
    var b = $54313ca8ab1dbd89$var$Uh(), c = b.queue;
    if (null === c) throw Error($54313ca8ab1dbd89$var$p(311));
    c.lastRenderedReducer = a;
    var d = c.dispatch, e = c.pending, f = b.memoizedState;
    if (null !== e) {
        c.pending = null;
        var g = e = e.next;
        do f = a(f, g.action), g = g.next;
        while (g !== e);
        $54313ca8ab1dbd89$var$He(f, b.memoizedState) || ($54313ca8ab1dbd89$var$dh = !0);
        b.memoizedState = f;
        null === b.baseQueue && (b.baseState = f);
        c.lastRenderedState = f;
    }
    return [
        f,
        d
    ];
}
function $54313ca8ab1dbd89$var$Yh() {}
function $54313ca8ab1dbd89$var$Zh(a, b) {
    var c = $54313ca8ab1dbd89$var$M, d = $54313ca8ab1dbd89$var$Uh(), e = b(), f = !$54313ca8ab1dbd89$var$He(d.memoizedState, e);
    f && (d.memoizedState = e, $54313ca8ab1dbd89$var$dh = !0);
    d = d.queue;
    $54313ca8ab1dbd89$var$$h($54313ca8ab1dbd89$var$ai.bind(null, c, d, a), [
        a
    ]);
    if (d.getSnapshot !== b || f || null !== $54313ca8ab1dbd89$var$O && $54313ca8ab1dbd89$var$O.memoizedState.tag & 1) {
        c.flags |= 2048;
        $54313ca8ab1dbd89$var$bi(9, $54313ca8ab1dbd89$var$ci.bind(null, c, d, e, b), void 0, null);
        if (null === $54313ca8ab1dbd89$var$Q) throw Error($54313ca8ab1dbd89$var$p(349));
        0 !== ($54313ca8ab1dbd89$var$Hh & 30) || $54313ca8ab1dbd89$var$di(c, b, e);
    }
    return e;
}
function $54313ca8ab1dbd89$var$di(a, b, c) {
    a.flags |= 16384;
    a = {
        getSnapshot: b,
        value: c
    };
    b = $54313ca8ab1dbd89$var$M.updateQueue;
    null === b ? (b = {
        lastEffect: null,
        stores: null
    }, $54313ca8ab1dbd89$var$M.updateQueue = b, b.stores = [
        a
    ]) : (c = b.stores, null === c ? b.stores = [
        a
    ] : c.push(a));
}
function $54313ca8ab1dbd89$var$ci(a, b, c, d) {
    b.value = c;
    b.getSnapshot = d;
    $54313ca8ab1dbd89$var$ei(b) && $54313ca8ab1dbd89$var$fi(a);
}
function $54313ca8ab1dbd89$var$ai(a, b, c) {
    return c(function() {
        $54313ca8ab1dbd89$var$ei(b) && $54313ca8ab1dbd89$var$fi(a);
    });
}
function $54313ca8ab1dbd89$var$ei(a) {
    var b = a.getSnapshot;
    a = a.value;
    try {
        var c = b();
        return !$54313ca8ab1dbd89$var$He(a, c);
    } catch (d) {
        return !0;
    }
}
function $54313ca8ab1dbd89$var$fi(a) {
    var b = $54313ca8ab1dbd89$var$ih(a, 1);
    null !== b && $54313ca8ab1dbd89$var$gi(b, a, 1, -1);
}
function $54313ca8ab1dbd89$var$hi(a) {
    var b = $54313ca8ab1dbd89$var$Th();
    "function" === typeof a && (a = a());
    b.memoizedState = b.baseState = a;
    a = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $54313ca8ab1dbd89$var$Vh,
        lastRenderedState: a
    };
    b.queue = a;
    a = a.dispatch = $54313ca8ab1dbd89$var$ii.bind(null, $54313ca8ab1dbd89$var$M, a);
    return [
        b.memoizedState,
        a
    ];
}
function $54313ca8ab1dbd89$var$bi(a, b, c, d) {
    a = {
        tag: a,
        create: b,
        destroy: c,
        deps: d,
        next: null
    };
    b = $54313ca8ab1dbd89$var$M.updateQueue;
    null === b ? (b = {
        lastEffect: null,
        stores: null
    }, $54313ca8ab1dbd89$var$M.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
    return a;
}
function $54313ca8ab1dbd89$var$ji() {
    return $54313ca8ab1dbd89$var$Uh().memoizedState;
}
function $54313ca8ab1dbd89$var$ki(a, b, c, d) {
    var e = $54313ca8ab1dbd89$var$Th();
    $54313ca8ab1dbd89$var$M.flags |= a;
    e.memoizedState = $54313ca8ab1dbd89$var$bi(1 | b, c, void 0, void 0 === d ? null : d);
}
function $54313ca8ab1dbd89$var$li(a, b, c, d) {
    var e = $54313ca8ab1dbd89$var$Uh();
    d = void 0 === d ? null : d;
    var f = void 0;
    if (null !== $54313ca8ab1dbd89$var$N) {
        var g = $54313ca8ab1dbd89$var$N.memoizedState;
        f = g.destroy;
        if (null !== d && $54313ca8ab1dbd89$var$Mh(d, g.deps)) {
            e.memoizedState = $54313ca8ab1dbd89$var$bi(b, c, f, d);
            return;
        }
    }
    $54313ca8ab1dbd89$var$M.flags |= a;
    e.memoizedState = $54313ca8ab1dbd89$var$bi(1 | b, c, f, d);
}
function $54313ca8ab1dbd89$var$mi(a, b) {
    return $54313ca8ab1dbd89$var$ki(8390656, 8, a, b);
}
function $54313ca8ab1dbd89$var$$h(a, b) {
    return $54313ca8ab1dbd89$var$li(2048, 8, a, b);
}
function $54313ca8ab1dbd89$var$ni(a, b) {
    return $54313ca8ab1dbd89$var$li(4, 2, a, b);
}
function $54313ca8ab1dbd89$var$oi(a, b) {
    return $54313ca8ab1dbd89$var$li(4, 4, a, b);
}
function $54313ca8ab1dbd89$var$pi(a, b) {
    if ("function" === typeof b) return a = a(), b(a), function() {
        b(null);
    };
    if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
        b.current = null;
    };
}
function $54313ca8ab1dbd89$var$qi(a, b, c) {
    c = null !== c && void 0 !== c ? c.concat([
        a
    ]) : null;
    return $54313ca8ab1dbd89$var$li(4, 4, $54313ca8ab1dbd89$var$pi.bind(null, b, a), c);
}
function $54313ca8ab1dbd89$var$ri() {}
function $54313ca8ab1dbd89$var$si(a, b) {
    var c = $54313ca8ab1dbd89$var$Uh();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && $54313ca8ab1dbd89$var$Mh(b, d[1])) return d[0];
    c.memoizedState = [
        a,
        b
    ];
    return a;
}
function $54313ca8ab1dbd89$var$ti(a, b) {
    var c = $54313ca8ab1dbd89$var$Uh();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && $54313ca8ab1dbd89$var$Mh(b, d[1])) return d[0];
    a = a();
    c.memoizedState = [
        a,
        b
    ];
    return a;
}
function $54313ca8ab1dbd89$var$ui(a, b, c) {
    if (0 === ($54313ca8ab1dbd89$var$Hh & 21)) return a.baseState && (a.baseState = !1, $54313ca8ab1dbd89$var$dh = !0), a.memoizedState = c;
    $54313ca8ab1dbd89$var$He(c, b) || (c = $54313ca8ab1dbd89$var$yc(), $54313ca8ab1dbd89$var$M.lanes |= c, $54313ca8ab1dbd89$var$rh |= c, a.baseState = !0);
    return b;
}
function $54313ca8ab1dbd89$var$vi(a, b) {
    var c = $54313ca8ab1dbd89$var$C;
    $54313ca8ab1dbd89$var$C = 0 !== c && 4 > c ? c : 4;
    a(!0);
    var d = $54313ca8ab1dbd89$var$Gh.transition;
    $54313ca8ab1dbd89$var$Gh.transition = {};
    try {
        a(!1), b();
    } finally{
        $54313ca8ab1dbd89$var$C = c, $54313ca8ab1dbd89$var$Gh.transition = d;
    }
}
function $54313ca8ab1dbd89$var$wi() {
    return $54313ca8ab1dbd89$var$Uh().memoizedState;
}
function $54313ca8ab1dbd89$var$xi(a, b, c) {
    var d = $54313ca8ab1dbd89$var$yi(a);
    c = {
        lane: d,
        action: c,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if ($54313ca8ab1dbd89$var$zi(a)) $54313ca8ab1dbd89$var$Ai(b, c);
    else if (c = $54313ca8ab1dbd89$var$hh(a, b, c, d), null !== c) {
        var e = $54313ca8ab1dbd89$var$R();
        $54313ca8ab1dbd89$var$gi(c, a, d, e);
        $54313ca8ab1dbd89$var$Bi(c, b, d);
    }
}
function $54313ca8ab1dbd89$var$ii(a, b, c) {
    var d = $54313ca8ab1dbd89$var$yi(a), e = {
        lane: d,
        action: c,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if ($54313ca8ab1dbd89$var$zi(a)) $54313ca8ab1dbd89$var$Ai(b, e);
    else {
        var f = a.alternate;
        if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, null !== f)) try {
            var g = b.lastRenderedState, h = f(g, c);
            e.hasEagerState = !0;
            e.eagerState = h;
            if ($54313ca8ab1dbd89$var$He(h, g)) {
                var k = b.interleaved;
                null === k ? (e.next = e, $54313ca8ab1dbd89$var$gh(b)) : (e.next = k.next, k.next = e);
                b.interleaved = e;
                return;
            }
        } catch (l) {} finally{}
        c = $54313ca8ab1dbd89$var$hh(a, b, e, d);
        null !== c && (e = $54313ca8ab1dbd89$var$R(), $54313ca8ab1dbd89$var$gi(c, a, d, e), $54313ca8ab1dbd89$var$Bi(c, b, d));
    }
}
function $54313ca8ab1dbd89$var$zi(a) {
    var b = a.alternate;
    return a === $54313ca8ab1dbd89$var$M || null !== b && b === $54313ca8ab1dbd89$var$M;
}
function $54313ca8ab1dbd89$var$Ai(a, b) {
    $54313ca8ab1dbd89$var$Jh = $54313ca8ab1dbd89$var$Ih = !0;
    var c = a.pending;
    null === c ? b.next = b : (b.next = c.next, c.next = b);
    a.pending = b;
}
function $54313ca8ab1dbd89$var$Bi(a, b, c) {
    if (0 !== (c & 4194240)) {
        var d = b.lanes;
        d &= a.pendingLanes;
        c |= d;
        b.lanes = c;
        $54313ca8ab1dbd89$var$Cc(a, c);
    }
}
var $54313ca8ab1dbd89$var$Rh = {
    readContext: $54313ca8ab1dbd89$var$eh,
    useCallback: $54313ca8ab1dbd89$var$P,
    useContext: $54313ca8ab1dbd89$var$P,
    useEffect: $54313ca8ab1dbd89$var$P,
    useImperativeHandle: $54313ca8ab1dbd89$var$P,
    useInsertionEffect: $54313ca8ab1dbd89$var$P,
    useLayoutEffect: $54313ca8ab1dbd89$var$P,
    useMemo: $54313ca8ab1dbd89$var$P,
    useReducer: $54313ca8ab1dbd89$var$P,
    useRef: $54313ca8ab1dbd89$var$P,
    useState: $54313ca8ab1dbd89$var$P,
    useDebugValue: $54313ca8ab1dbd89$var$P,
    useDeferredValue: $54313ca8ab1dbd89$var$P,
    useTransition: $54313ca8ab1dbd89$var$P,
    useMutableSource: $54313ca8ab1dbd89$var$P,
    useSyncExternalStore: $54313ca8ab1dbd89$var$P,
    useId: $54313ca8ab1dbd89$var$P,
    unstable_isNewReconciler: !1
}, $54313ca8ab1dbd89$var$Oh = {
    readContext: $54313ca8ab1dbd89$var$eh,
    useCallback: function(a, b) {
        $54313ca8ab1dbd89$var$Th().memoizedState = [
            a,
            void 0 === b ? null : b
        ];
        return a;
    },
    useContext: $54313ca8ab1dbd89$var$eh,
    useEffect: $54313ca8ab1dbd89$var$mi,
    useImperativeHandle: function(a, b, c) {
        c = null !== c && void 0 !== c ? c.concat([
            a
        ]) : null;
        return $54313ca8ab1dbd89$var$ki(4194308, 4, $54313ca8ab1dbd89$var$pi.bind(null, b, a), c);
    },
    useLayoutEffect: function(a, b) {
        return $54313ca8ab1dbd89$var$ki(4194308, 4, a, b);
    },
    useInsertionEffect: function(a, b) {
        return $54313ca8ab1dbd89$var$ki(4, 2, a, b);
    },
    useMemo: function(a, b) {
        var c = $54313ca8ab1dbd89$var$Th();
        b = void 0 === b ? null : b;
        a = a();
        c.memoizedState = [
            a,
            b
        ];
        return a;
    },
    useReducer: function(a, b, c) {
        var d = $54313ca8ab1dbd89$var$Th();
        b = void 0 !== c ? c(b) : b;
        d.memoizedState = d.baseState = b;
        a = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: a,
            lastRenderedState: b
        };
        d.queue = a;
        a = a.dispatch = $54313ca8ab1dbd89$var$xi.bind(null, $54313ca8ab1dbd89$var$M, a);
        return [
            d.memoizedState,
            a
        ];
    },
    useRef: function(a) {
        var b = $54313ca8ab1dbd89$var$Th();
        a = {
            current: a
        };
        return b.memoizedState = a;
    },
    useState: $54313ca8ab1dbd89$var$hi,
    useDebugValue: $54313ca8ab1dbd89$var$ri,
    useDeferredValue: function(a) {
        return $54313ca8ab1dbd89$var$Th().memoizedState = a;
    },
    useTransition: function() {
        var a = $54313ca8ab1dbd89$var$hi(!1), b = a[0];
        a = $54313ca8ab1dbd89$var$vi.bind(null, a[1]);
        $54313ca8ab1dbd89$var$Th().memoizedState = a;
        return [
            b,
            a
        ];
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(a, b, c) {
        var d = $54313ca8ab1dbd89$var$M, e = $54313ca8ab1dbd89$var$Th();
        if ($54313ca8ab1dbd89$var$I) {
            if (void 0 === c) throw Error($54313ca8ab1dbd89$var$p(407));
            c = c();
        } else {
            c = b();
            if (null === $54313ca8ab1dbd89$var$Q) throw Error($54313ca8ab1dbd89$var$p(349));
            0 !== ($54313ca8ab1dbd89$var$Hh & 30) || $54313ca8ab1dbd89$var$di(d, b, c);
        }
        e.memoizedState = c;
        var f = {
            value: c,
            getSnapshot: b
        };
        e.queue = f;
        $54313ca8ab1dbd89$var$mi($54313ca8ab1dbd89$var$ai.bind(null, d, f, a), [
            a
        ]);
        d.flags |= 2048;
        $54313ca8ab1dbd89$var$bi(9, $54313ca8ab1dbd89$var$ci.bind(null, d, f, c, b), void 0, null);
        return c;
    },
    useId: function() {
        var a = $54313ca8ab1dbd89$var$Th(), b = $54313ca8ab1dbd89$var$Q.identifierPrefix;
        if ($54313ca8ab1dbd89$var$I) {
            var c = $54313ca8ab1dbd89$var$sg;
            var d = $54313ca8ab1dbd89$var$rg;
            c = (d & ~(1 << 32 - $54313ca8ab1dbd89$var$oc(d) - 1)).toString(32) + c;
            b = ":" + b + "R" + c;
            c = $54313ca8ab1dbd89$var$Kh++;
            0 < c && (b += "H" + c.toString(32));
            b += ":";
        } else c = $54313ca8ab1dbd89$var$Lh++, b = ":" + b + "r" + c.toString(32) + ":";
        return a.memoizedState = b;
    },
    unstable_isNewReconciler: !1
}, $54313ca8ab1dbd89$var$Ph = {
    readContext: $54313ca8ab1dbd89$var$eh,
    useCallback: $54313ca8ab1dbd89$var$si,
    useContext: $54313ca8ab1dbd89$var$eh,
    useEffect: $54313ca8ab1dbd89$var$$h,
    useImperativeHandle: $54313ca8ab1dbd89$var$qi,
    useInsertionEffect: $54313ca8ab1dbd89$var$ni,
    useLayoutEffect: $54313ca8ab1dbd89$var$oi,
    useMemo: $54313ca8ab1dbd89$var$ti,
    useReducer: $54313ca8ab1dbd89$var$Wh,
    useRef: $54313ca8ab1dbd89$var$ji,
    useState: function() {
        return $54313ca8ab1dbd89$var$Wh($54313ca8ab1dbd89$var$Vh);
    },
    useDebugValue: $54313ca8ab1dbd89$var$ri,
    useDeferredValue: function(a) {
        var b = $54313ca8ab1dbd89$var$Uh();
        return $54313ca8ab1dbd89$var$ui(b, $54313ca8ab1dbd89$var$N.memoizedState, a);
    },
    useTransition: function() {
        var a = $54313ca8ab1dbd89$var$Wh($54313ca8ab1dbd89$var$Vh)[0], b = $54313ca8ab1dbd89$var$Uh().memoizedState;
        return [
            a,
            b
        ];
    },
    useMutableSource: $54313ca8ab1dbd89$var$Yh,
    useSyncExternalStore: $54313ca8ab1dbd89$var$Zh,
    useId: $54313ca8ab1dbd89$var$wi,
    unstable_isNewReconciler: !1
}, $54313ca8ab1dbd89$var$Qh = {
    readContext: $54313ca8ab1dbd89$var$eh,
    useCallback: $54313ca8ab1dbd89$var$si,
    useContext: $54313ca8ab1dbd89$var$eh,
    useEffect: $54313ca8ab1dbd89$var$$h,
    useImperativeHandle: $54313ca8ab1dbd89$var$qi,
    useInsertionEffect: $54313ca8ab1dbd89$var$ni,
    useLayoutEffect: $54313ca8ab1dbd89$var$oi,
    useMemo: $54313ca8ab1dbd89$var$ti,
    useReducer: $54313ca8ab1dbd89$var$Xh,
    useRef: $54313ca8ab1dbd89$var$ji,
    useState: function() {
        return $54313ca8ab1dbd89$var$Xh($54313ca8ab1dbd89$var$Vh);
    },
    useDebugValue: $54313ca8ab1dbd89$var$ri,
    useDeferredValue: function(a) {
        var b = $54313ca8ab1dbd89$var$Uh();
        return null === $54313ca8ab1dbd89$var$N ? b.memoizedState = a : $54313ca8ab1dbd89$var$ui(b, $54313ca8ab1dbd89$var$N.memoizedState, a);
    },
    useTransition: function() {
        var a = $54313ca8ab1dbd89$var$Xh($54313ca8ab1dbd89$var$Vh)[0], b = $54313ca8ab1dbd89$var$Uh().memoizedState;
        return [
            a,
            b
        ];
    },
    useMutableSource: $54313ca8ab1dbd89$var$Yh,
    useSyncExternalStore: $54313ca8ab1dbd89$var$Zh,
    useId: $54313ca8ab1dbd89$var$wi,
    unstable_isNewReconciler: !1
};
function $54313ca8ab1dbd89$var$Ci(a, b) {
    if (a && a.defaultProps) {
        b = $54313ca8ab1dbd89$var$A({}, b);
        a = a.defaultProps;
        for(var c in a)void 0 === b[c] && (b[c] = a[c]);
        return b;
    }
    return b;
}
function $54313ca8ab1dbd89$var$Di(a, b, c, d) {
    b = a.memoizedState;
    c = c(d, b);
    c = null === c || void 0 === c ? b : $54313ca8ab1dbd89$var$A({}, b, c);
    a.memoizedState = c;
    0 === a.lanes && (a.updateQueue.baseState = c);
}
var $54313ca8ab1dbd89$var$Ei = {
    isMounted: function(a) {
        return (a = a._reactInternals) ? $54313ca8ab1dbd89$var$Vb(a) === a : !1;
    },
    enqueueSetState: function(a, b, c) {
        a = a._reactInternals;
        var d = $54313ca8ab1dbd89$var$R(), e = $54313ca8ab1dbd89$var$yi(a), f = $54313ca8ab1dbd89$var$mh(d, e);
        f.payload = b;
        void 0 !== c && null !== c && (f.callback = c);
        b = $54313ca8ab1dbd89$var$nh(a, f, e);
        null !== b && ($54313ca8ab1dbd89$var$gi(b, a, e, d), $54313ca8ab1dbd89$var$oh(b, a, e));
    },
    enqueueReplaceState: function(a, b, c) {
        a = a._reactInternals;
        var d = $54313ca8ab1dbd89$var$R(), e = $54313ca8ab1dbd89$var$yi(a), f = $54313ca8ab1dbd89$var$mh(d, e);
        f.tag = 1;
        f.payload = b;
        void 0 !== c && null !== c && (f.callback = c);
        b = $54313ca8ab1dbd89$var$nh(a, f, e);
        null !== b && ($54313ca8ab1dbd89$var$gi(b, a, e, d), $54313ca8ab1dbd89$var$oh(b, a, e));
    },
    enqueueForceUpdate: function(a, b) {
        a = a._reactInternals;
        var c = $54313ca8ab1dbd89$var$R(), d = $54313ca8ab1dbd89$var$yi(a), e = $54313ca8ab1dbd89$var$mh(c, d);
        e.tag = 2;
        void 0 !== b && null !== b && (e.callback = b);
        b = $54313ca8ab1dbd89$var$nh(a, e, d);
        null !== b && ($54313ca8ab1dbd89$var$gi(b, a, d, c), $54313ca8ab1dbd89$var$oh(b, a, d));
    }
};
function $54313ca8ab1dbd89$var$Fi(a, b, c, d, e, f, g) {
    a = a.stateNode;
    return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !$54313ca8ab1dbd89$var$Ie(c, d) || !$54313ca8ab1dbd89$var$Ie(e, f) : !0;
}
function $54313ca8ab1dbd89$var$Gi(a, b, c) {
    var d = !1, e = $54313ca8ab1dbd89$var$Vf;
    var f = b.contextType;
    "object" === typeof f && null !== f ? f = $54313ca8ab1dbd89$var$eh(f) : (e = $54313ca8ab1dbd89$var$Zf(b) ? $54313ca8ab1dbd89$var$Xf : $54313ca8ab1dbd89$var$H.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? $54313ca8ab1dbd89$var$Yf(a, e) : $54313ca8ab1dbd89$var$Vf);
    b = new b(c, f);
    a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
    b.updater = $54313ca8ab1dbd89$var$Ei;
    a.stateNode = b;
    b._reactInternals = a;
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
    return b;
}
function $54313ca8ab1dbd89$var$Hi(a, b, c, d) {
    a = b.state;
    "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
    "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
    b.state !== a && $54313ca8ab1dbd89$var$Ei.enqueueReplaceState(b, b.state, null);
}
function $54313ca8ab1dbd89$var$Ii(a, b, c, d) {
    var e = a.stateNode;
    e.props = c;
    e.state = a.memoizedState;
    e.refs = {};
    $54313ca8ab1dbd89$var$kh(a);
    var f = b.contextType;
    "object" === typeof f && null !== f ? e.context = $54313ca8ab1dbd89$var$eh(f) : (f = $54313ca8ab1dbd89$var$Zf(b) ? $54313ca8ab1dbd89$var$Xf : $54313ca8ab1dbd89$var$H.current, e.context = $54313ca8ab1dbd89$var$Yf(a, f));
    e.state = a.memoizedState;
    f = b.getDerivedStateFromProps;
    "function" === typeof f && ($54313ca8ab1dbd89$var$Di(a, b, f, c), e.state = a.memoizedState);
    "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && $54313ca8ab1dbd89$var$Ei.enqueueReplaceState(e, e.state, null), $54313ca8ab1dbd89$var$qh(a, c, e, d), e.state = a.memoizedState);
    "function" === typeof e.componentDidMount && (a.flags |= 4194308);
}
function $54313ca8ab1dbd89$var$Ji(a, b) {
    try {
        var c = "", d = b;
        do c += $54313ca8ab1dbd89$var$Pa(d), d = d.return;
        while (d);
        var e = c;
    } catch (f) {
        e = "\nError generating stack: " + f.message + "\n" + f.stack;
    }
    return {
        value: a,
        source: b,
        stack: e,
        digest: null
    };
}
function $54313ca8ab1dbd89$var$Ki(a, b, c) {
    return {
        value: a,
        source: null,
        stack: null != c ? c : null,
        digest: null != b ? b : null
    };
}
function $54313ca8ab1dbd89$var$Li(a, b) {
    try {
        console.error(b.value);
    } catch (c) {
        setTimeout(function() {
            throw c;
        });
    }
}
var $54313ca8ab1dbd89$var$Mi = "function" === typeof WeakMap ? WeakMap : Map;
function $54313ca8ab1dbd89$var$Ni(a, b, c) {
    c = $54313ca8ab1dbd89$var$mh(-1, c);
    c.tag = 3;
    c.payload = {
        element: null
    };
    var d = b.value;
    c.callback = function() {
        $54313ca8ab1dbd89$var$Oi || ($54313ca8ab1dbd89$var$Oi = !0, $54313ca8ab1dbd89$var$Pi = d);
        $54313ca8ab1dbd89$var$Li(a, b);
    };
    return c;
}
function $54313ca8ab1dbd89$var$Qi(a, b, c) {
    c = $54313ca8ab1dbd89$var$mh(-1, c);
    c.tag = 3;
    var d = a.type.getDerivedStateFromError;
    if ("function" === typeof d) {
        var e = b.value;
        c.payload = function() {
            return d(e);
        };
        c.callback = function() {
            $54313ca8ab1dbd89$var$Li(a, b);
        };
    }
    var f = a.stateNode;
    null !== f && "function" === typeof f.componentDidCatch && (c.callback = function() {
        $54313ca8ab1dbd89$var$Li(a, b);
        "function" !== typeof d && (null === $54313ca8ab1dbd89$var$Ri ? $54313ca8ab1dbd89$var$Ri = new Set([
            this
        ]) : $54313ca8ab1dbd89$var$Ri.add(this));
        var c = b.stack;
        this.componentDidCatch(b.value, {
            componentStack: null !== c ? c : ""
        });
    });
    return c;
}
function $54313ca8ab1dbd89$var$Si(a, b, c) {
    var d = a.pingCache;
    if (null === d) {
        d = a.pingCache = new $54313ca8ab1dbd89$var$Mi;
        var e = new Set;
        d.set(b, e);
    } else e = d.get(b), void 0 === e && (e = new Set, d.set(b, e));
    e.has(c) || (e.add(c), a = $54313ca8ab1dbd89$var$Ti.bind(null, a, b, c), b.then(a, a));
}
function $54313ca8ab1dbd89$var$Ui(a) {
    do {
        var b;
        if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? !0 : !1 : !0;
        if (b) return a;
        a = a.return;
    }while (null !== a);
    return null;
}
function $54313ca8ab1dbd89$var$Vi(a, b, c, d, e) {
    if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = $54313ca8ab1dbd89$var$mh(-1, 1), b.tag = 2, $54313ca8ab1dbd89$var$nh(c, b, 1))), c.lanes |= 1), a;
    a.flags |= 65536;
    a.lanes = e;
    return a;
}
var $54313ca8ab1dbd89$var$Wi = $54313ca8ab1dbd89$var$ua.ReactCurrentOwner, $54313ca8ab1dbd89$var$dh = !1;
function $54313ca8ab1dbd89$var$Xi(a, b, c, d) {
    b.child = null === a ? $54313ca8ab1dbd89$var$Vg(b, null, c, d) : $54313ca8ab1dbd89$var$Ug(b, a.child, c, d);
}
function $54313ca8ab1dbd89$var$Yi(a, b, c, d, e) {
    c = c.render;
    var f = b.ref;
    $54313ca8ab1dbd89$var$ch(b, e);
    d = $54313ca8ab1dbd89$var$Nh(a, b, c, d, f, e);
    c = $54313ca8ab1dbd89$var$Sh();
    if (null !== a && !$54313ca8ab1dbd89$var$dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $54313ca8ab1dbd89$var$Zi(a, b, e);
    $54313ca8ab1dbd89$var$I && c && $54313ca8ab1dbd89$var$vg(b);
    b.flags |= 1;
    $54313ca8ab1dbd89$var$Xi(a, b, d, e);
    return b.child;
}
function $54313ca8ab1dbd89$var$$i(a, b, c, d, e) {
    if (null === a) {
        var f = c.type;
        if ("function" === typeof f && !$54313ca8ab1dbd89$var$aj(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f, $54313ca8ab1dbd89$var$bj(a, b, f, d, e);
        a = $54313ca8ab1dbd89$var$Rg(c.type, null, d, b, b.mode, e);
        a.ref = b.ref;
        a.return = b;
        return b.child = a;
    }
    f = a.child;
    if (0 === (a.lanes & e)) {
        var g = f.memoizedProps;
        c = c.compare;
        c = null !== c ? c : $54313ca8ab1dbd89$var$Ie;
        if (c(g, d) && a.ref === b.ref) return $54313ca8ab1dbd89$var$Zi(a, b, e);
    }
    b.flags |= 1;
    a = $54313ca8ab1dbd89$var$Pg(f, d);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
}
function $54313ca8ab1dbd89$var$bj(a, b, c, d, e) {
    if (null !== a) {
        var f = a.memoizedProps;
        if ($54313ca8ab1dbd89$var$Ie(f, d) && a.ref === b.ref) {
            if ($54313ca8ab1dbd89$var$dh = !1, b.pendingProps = d = f, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && ($54313ca8ab1dbd89$var$dh = !0);
            else return b.lanes = a.lanes, $54313ca8ab1dbd89$var$Zi(a, b, e);
        }
    }
    return $54313ca8ab1dbd89$var$cj(a, b, c, d, e);
}
function $54313ca8ab1dbd89$var$dj(a, b, c) {
    var d = b.pendingProps, e = d.children, f = null !== a ? a.memoizedState : null;
    if ("hidden" === d.mode) {
        if (0 === (b.mode & 1)) b.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, $54313ca8ab1dbd89$var$G($54313ca8ab1dbd89$var$ej, $54313ca8ab1dbd89$var$fj), $54313ca8ab1dbd89$var$fj |= c;
        else {
            if (0 === (c & 1073741824)) return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {
                baseLanes: a,
                cachePool: null,
                transitions: null
            }, b.updateQueue = null, $54313ca8ab1dbd89$var$G($54313ca8ab1dbd89$var$ej, $54313ca8ab1dbd89$var$fj), $54313ca8ab1dbd89$var$fj |= a, null;
            b.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            };
            d = null !== f ? f.baseLanes : c;
            $54313ca8ab1dbd89$var$G($54313ca8ab1dbd89$var$ej, $54313ca8ab1dbd89$var$fj);
            $54313ca8ab1dbd89$var$fj |= d;
        }
    } else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, $54313ca8ab1dbd89$var$G($54313ca8ab1dbd89$var$ej, $54313ca8ab1dbd89$var$fj), $54313ca8ab1dbd89$var$fj |= d;
    $54313ca8ab1dbd89$var$Xi(a, b, e, c);
    return b.child;
}
function $54313ca8ab1dbd89$var$gj(a, b) {
    var c = b.ref;
    if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
}
function $54313ca8ab1dbd89$var$cj(a, b, c, d, e) {
    var f = $54313ca8ab1dbd89$var$Zf(c) ? $54313ca8ab1dbd89$var$Xf : $54313ca8ab1dbd89$var$H.current;
    f = $54313ca8ab1dbd89$var$Yf(b, f);
    $54313ca8ab1dbd89$var$ch(b, e);
    c = $54313ca8ab1dbd89$var$Nh(a, b, c, d, f, e);
    d = $54313ca8ab1dbd89$var$Sh();
    if (null !== a && !$54313ca8ab1dbd89$var$dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $54313ca8ab1dbd89$var$Zi(a, b, e);
    $54313ca8ab1dbd89$var$I && d && $54313ca8ab1dbd89$var$vg(b);
    b.flags |= 1;
    $54313ca8ab1dbd89$var$Xi(a, b, c, e);
    return b.child;
}
function $54313ca8ab1dbd89$var$hj(a, b, c, d, e) {
    if ($54313ca8ab1dbd89$var$Zf(c)) {
        var f = !0;
        $54313ca8ab1dbd89$var$cg(b);
    } else f = !1;
    $54313ca8ab1dbd89$var$ch(b, e);
    if (null === b.stateNode) $54313ca8ab1dbd89$var$ij(a, b), $54313ca8ab1dbd89$var$Gi(b, c, d), $54313ca8ab1dbd89$var$Ii(b, c, d, e), d = !0;
    else if (null === a) {
        var g = b.stateNode, h = b.memoizedProps;
        g.props = h;
        var k = g.context, l = c.contextType;
        "object" === typeof l && null !== l ? l = $54313ca8ab1dbd89$var$eh(l) : (l = $54313ca8ab1dbd89$var$Zf(c) ? $54313ca8ab1dbd89$var$Xf : $54313ca8ab1dbd89$var$H.current, l = $54313ca8ab1dbd89$var$Yf(b, l));
        var m = c.getDerivedStateFromProps, q = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
        q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && $54313ca8ab1dbd89$var$Hi(b, g, d, l);
        $54313ca8ab1dbd89$var$jh = !1;
        var r = b.memoizedState;
        g.state = r;
        $54313ca8ab1dbd89$var$qh(b, d, g, e);
        k = b.memoizedState;
        h !== d || r !== k || $54313ca8ab1dbd89$var$Wf.current || $54313ca8ab1dbd89$var$jh ? ("function" === typeof m && ($54313ca8ab1dbd89$var$Di(b, c, m, d), k = b.memoizedState), (h = $54313ca8ab1dbd89$var$jh || $54313ca8ab1dbd89$var$Fi(b, c, h, d, r, k, l)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = !1);
    } else {
        g = b.stateNode;
        $54313ca8ab1dbd89$var$lh(a, b);
        h = b.memoizedProps;
        l = b.type === b.elementType ? h : $54313ca8ab1dbd89$var$Ci(b.type, h);
        g.props = l;
        q = b.pendingProps;
        r = g.context;
        k = c.contextType;
        "object" === typeof k && null !== k ? k = $54313ca8ab1dbd89$var$eh(k) : (k = $54313ca8ab1dbd89$var$Zf(c) ? $54313ca8ab1dbd89$var$Xf : $54313ca8ab1dbd89$var$H.current, k = $54313ca8ab1dbd89$var$Yf(b, k));
        var y = c.getDerivedStateFromProps;
        (m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q || r !== k) && $54313ca8ab1dbd89$var$Hi(b, g, d, k);
        $54313ca8ab1dbd89$var$jh = !1;
        r = b.memoizedState;
        g.state = r;
        $54313ca8ab1dbd89$var$qh(b, d, g, e);
        var n = b.memoizedState;
        h !== q || r !== n || $54313ca8ab1dbd89$var$Wf.current || $54313ca8ab1dbd89$var$jh ? ("function" === typeof y && ($54313ca8ab1dbd89$var$Di(b, c, y, d), n = b.memoizedState), (l = $54313ca8ab1dbd89$var$jh || $54313ca8ab1dbd89$var$Fi(b, c, l, d, r, n, k) || !1) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), d = !1);
    }
    return $54313ca8ab1dbd89$var$jj(a, b, c, d, f, e);
}
function $54313ca8ab1dbd89$var$jj(a, b, c, d, e, f) {
    $54313ca8ab1dbd89$var$gj(a, b);
    var g = 0 !== (b.flags & 128);
    if (!d && !g) return e && $54313ca8ab1dbd89$var$dg(b, c, !1), $54313ca8ab1dbd89$var$Zi(a, b, f);
    d = b.stateNode;
    $54313ca8ab1dbd89$var$Wi.current = b;
    var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
    b.flags |= 1;
    null !== a && g ? (b.child = $54313ca8ab1dbd89$var$Ug(b, a.child, null, f), b.child = $54313ca8ab1dbd89$var$Ug(b, null, h, f)) : $54313ca8ab1dbd89$var$Xi(a, b, h, f);
    b.memoizedState = d.state;
    e && $54313ca8ab1dbd89$var$dg(b, c, !0);
    return b.child;
}
function $54313ca8ab1dbd89$var$kj(a) {
    var b = a.stateNode;
    b.pendingContext ? $54313ca8ab1dbd89$var$ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && $54313ca8ab1dbd89$var$ag(a, b.context, !1);
    $54313ca8ab1dbd89$var$yh(a, b.containerInfo);
}
function $54313ca8ab1dbd89$var$lj(a, b, c, d, e) {
    $54313ca8ab1dbd89$var$Ig();
    $54313ca8ab1dbd89$var$Jg(e);
    b.flags |= 256;
    $54313ca8ab1dbd89$var$Xi(a, b, c, d);
    return b.child;
}
var $54313ca8ab1dbd89$var$mj = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function $54313ca8ab1dbd89$var$nj(a) {
    return {
        baseLanes: a,
        cachePool: null,
        transitions: null
    };
}
function $54313ca8ab1dbd89$var$oj(a, b, c) {
    var d = b.pendingProps, e = $54313ca8ab1dbd89$var$L.current, f = !1, g = 0 !== (b.flags & 128), h;
    (h = g) || (h = null !== a && null === a.memoizedState ? !1 : 0 !== (e & 2));
    if (h) f = !0, b.flags &= -129;
    else if (null === a || null !== a.memoizedState) e |= 1;
    $54313ca8ab1dbd89$var$G($54313ca8ab1dbd89$var$L, e & 1);
    if (null === a) {
        $54313ca8ab1dbd89$var$Eg(b);
        a = b.memoizedState;
        if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
        g = d.children;
        a = d.fallback;
        return f ? (d = b.mode, f = b.child, g = {
            mode: "hidden",
            children: g
        }, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = $54313ca8ab1dbd89$var$pj(g, d, 0, null), a = $54313ca8ab1dbd89$var$Tg(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = $54313ca8ab1dbd89$var$nj(c), b.memoizedState = $54313ca8ab1dbd89$var$mj, a) : $54313ca8ab1dbd89$var$qj(b, g);
    }
    e = a.memoizedState;
    if (null !== e && (h = e.dehydrated, null !== h)) return $54313ca8ab1dbd89$var$rj(a, b, g, d, h, e, c);
    if (f) {
        f = d.fallback;
        g = b.mode;
        e = a.child;
        h = e.sibling;
        var k = {
            mode: "hidden",
            children: d.children
        };
        0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, b.deletions = null) : (d = $54313ca8ab1dbd89$var$Pg(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
        null !== h ? f = $54313ca8ab1dbd89$var$Pg(h, f) : (f = $54313ca8ab1dbd89$var$Tg(f, g, c, null), f.flags |= 2);
        f.return = b;
        d.return = b;
        d.sibling = f;
        b.child = d;
        d = f;
        f = b.child;
        g = a.child.memoizedState;
        g = null === g ? $54313ca8ab1dbd89$var$nj(c) : {
            baseLanes: g.baseLanes | c,
            cachePool: null,
            transitions: g.transitions
        };
        f.memoizedState = g;
        f.childLanes = a.childLanes & ~c;
        b.memoizedState = $54313ca8ab1dbd89$var$mj;
        return d;
    }
    f = a.child;
    a = f.sibling;
    d = $54313ca8ab1dbd89$var$Pg(f, {
        mode: "visible",
        children: d.children
    });
    0 === (b.mode & 1) && (d.lanes = c);
    d.return = b;
    d.sibling = null;
    null !== a && (c = b.deletions, null === c ? (b.deletions = [
        a
    ], b.flags |= 16) : c.push(a));
    b.child = d;
    b.memoizedState = null;
    return d;
}
function $54313ca8ab1dbd89$var$qj(a, b) {
    b = $54313ca8ab1dbd89$var$pj({
        mode: "visible",
        children: b
    }, a.mode, 0, null);
    b.return = a;
    return a.child = b;
}
function $54313ca8ab1dbd89$var$sj(a, b, c, d) {
    null !== d && $54313ca8ab1dbd89$var$Jg(d);
    $54313ca8ab1dbd89$var$Ug(b, a.child, null, c);
    a = $54313ca8ab1dbd89$var$qj(b, b.pendingProps.children);
    a.flags |= 2;
    b.memoizedState = null;
    return a;
}
function $54313ca8ab1dbd89$var$rj(a, b, c, d, e, f, g) {
    if (c) {
        if (b.flags & 256) return b.flags &= -257, d = $54313ca8ab1dbd89$var$Ki(Error($54313ca8ab1dbd89$var$p(422))), $54313ca8ab1dbd89$var$sj(a, b, g, d);
        if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
        f = d.fallback;
        e = b.mode;
        d = $54313ca8ab1dbd89$var$pj({
            mode: "visible",
            children: d.children
        }, e, 0, null);
        f = $54313ca8ab1dbd89$var$Tg(f, e, g, null);
        f.flags |= 2;
        d.return = b;
        f.return = b;
        d.sibling = f;
        b.child = d;
        0 !== (b.mode & 1) && $54313ca8ab1dbd89$var$Ug(b, a.child, null, g);
        b.child.memoizedState = $54313ca8ab1dbd89$var$nj(g);
        b.memoizedState = $54313ca8ab1dbd89$var$mj;
        return f;
    }
    if (0 === (b.mode & 1)) return $54313ca8ab1dbd89$var$sj(a, b, g, null);
    if ("$!" === e.data) {
        d = e.nextSibling && e.nextSibling.dataset;
        if (d) var h = d.dgst;
        d = h;
        f = Error($54313ca8ab1dbd89$var$p(419));
        d = $54313ca8ab1dbd89$var$Ki(f, d, void 0);
        return $54313ca8ab1dbd89$var$sj(a, b, g, d);
    }
    h = 0 !== (g & a.childLanes);
    if ($54313ca8ab1dbd89$var$dh || h) {
        d = $54313ca8ab1dbd89$var$Q;
        if (null !== d) {
            switch(g & -g){
                case 4:
                    e = 2;
                    break;
                case 16:
                    e = 8;
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
                    e = 32;
                    break;
                case 536870912:
                    e = 268435456;
                    break;
                default:
                    e = 0;
            }
            e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
            0 !== e && e !== f.retryLane && (f.retryLane = e, $54313ca8ab1dbd89$var$ih(a, e), $54313ca8ab1dbd89$var$gi(d, a, e, -1));
        }
        $54313ca8ab1dbd89$var$tj();
        d = $54313ca8ab1dbd89$var$Ki(Error($54313ca8ab1dbd89$var$p(421)));
        return $54313ca8ab1dbd89$var$sj(a, b, g, d);
    }
    if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = $54313ca8ab1dbd89$var$uj.bind(null, a), e._reactRetry = b, null;
    a = f.treeContext;
    $54313ca8ab1dbd89$var$yg = $54313ca8ab1dbd89$var$Lf(e.nextSibling);
    $54313ca8ab1dbd89$var$xg = b;
    $54313ca8ab1dbd89$var$I = !0;
    $54313ca8ab1dbd89$var$zg = null;
    null !== a && ($54313ca8ab1dbd89$var$og[$54313ca8ab1dbd89$var$pg++] = $54313ca8ab1dbd89$var$rg, $54313ca8ab1dbd89$var$og[$54313ca8ab1dbd89$var$pg++] = $54313ca8ab1dbd89$var$sg, $54313ca8ab1dbd89$var$og[$54313ca8ab1dbd89$var$pg++] = $54313ca8ab1dbd89$var$qg, $54313ca8ab1dbd89$var$rg = a.id, $54313ca8ab1dbd89$var$sg = a.overflow, $54313ca8ab1dbd89$var$qg = b);
    b = $54313ca8ab1dbd89$var$qj(b, d.children);
    b.flags |= 4096;
    return b;
}
function $54313ca8ab1dbd89$var$vj(a, b, c) {
    a.lanes |= b;
    var d = a.alternate;
    null !== d && (d.lanes |= b);
    $54313ca8ab1dbd89$var$bh(a.return, b, c);
}
function $54313ca8ab1dbd89$var$wj(a, b, c, d, e) {
    var f = a.memoizedState;
    null === f ? a.memoizedState = {
        isBackwards: b,
        rendering: null,
        renderingStartTime: 0,
        last: d,
        tail: c,
        tailMode: e
    } : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
}
function $54313ca8ab1dbd89$var$xj(a, b, c) {
    var d = b.pendingProps, e = d.revealOrder, f = d.tail;
    $54313ca8ab1dbd89$var$Xi(a, b, d.children, c);
    d = $54313ca8ab1dbd89$var$L.current;
    if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;
    else {
        if (null !== a && 0 !== (a.flags & 128)) a: for(a = b.child; null !== a;){
            if (13 === a.tag) null !== a.memoizedState && $54313ca8ab1dbd89$var$vj(a, c, b);
            else if (19 === a.tag) $54313ca8ab1dbd89$var$vj(a, c, b);
            else if (null !== a.child) {
                a.child.return = a;
                a = a.child;
                continue;
            }
            if (a === b) break a;
            for(; null === a.sibling;){
                if (null === a.return || a.return === b) break a;
                a = a.return;
            }
            a.sibling.return = a.return;
            a = a.sibling;
        }
        d &= 1;
    }
    $54313ca8ab1dbd89$var$G($54313ca8ab1dbd89$var$L, d);
    if (0 === (b.mode & 1)) b.memoizedState = null;
    else switch(e){
        case "forwards":
            c = b.child;
            for(e = null; null !== c;)a = c.alternate, null !== a && null === $54313ca8ab1dbd89$var$Ch(a) && (e = c), c = c.sibling;
            c = e;
            null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
            $54313ca8ab1dbd89$var$wj(b, !1, e, c, f);
            break;
        case "backwards":
            c = null;
            e = b.child;
            for(b.child = null; null !== e;){
                a = e.alternate;
                if (null !== a && null === $54313ca8ab1dbd89$var$Ch(a)) {
                    b.child = e;
                    break;
                }
                a = e.sibling;
                e.sibling = c;
                c = e;
                e = a;
            }
            $54313ca8ab1dbd89$var$wj(b, !0, c, null, f);
            break;
        case "together":
            $54313ca8ab1dbd89$var$wj(b, !1, null, null, void 0);
            break;
        default:
            b.memoizedState = null;
    }
    return b.child;
}
function $54313ca8ab1dbd89$var$ij(a, b) {
    0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
}
function $54313ca8ab1dbd89$var$Zi(a, b, c) {
    null !== a && (b.dependencies = a.dependencies);
    $54313ca8ab1dbd89$var$rh |= b.lanes;
    if (0 === (c & b.childLanes)) return null;
    if (null !== a && b.child !== a.child) throw Error($54313ca8ab1dbd89$var$p(153));
    if (null !== b.child) {
        a = b.child;
        c = $54313ca8ab1dbd89$var$Pg(a, a.pendingProps);
        b.child = c;
        for(c.return = b; null !== a.sibling;)a = a.sibling, c = c.sibling = $54313ca8ab1dbd89$var$Pg(a, a.pendingProps), c.return = b;
        c.sibling = null;
    }
    return b.child;
}
function $54313ca8ab1dbd89$var$yj(a, b, c) {
    switch(b.tag){
        case 3:
            $54313ca8ab1dbd89$var$kj(b);
            $54313ca8ab1dbd89$var$Ig();
            break;
        case 5:
            $54313ca8ab1dbd89$var$Ah(b);
            break;
        case 1:
            $54313ca8ab1dbd89$var$Zf(b.type) && $54313ca8ab1dbd89$var$cg(b);
            break;
        case 4:
            $54313ca8ab1dbd89$var$yh(b, b.stateNode.containerInfo);
            break;
        case 10:
            var d = b.type._context, e = b.memoizedProps.value;
            $54313ca8ab1dbd89$var$G($54313ca8ab1dbd89$var$Wg, d._currentValue);
            d._currentValue = e;
            break;
        case 13:
            d = b.memoizedState;
            if (null !== d) {
                if (null !== d.dehydrated) return $54313ca8ab1dbd89$var$G($54313ca8ab1dbd89$var$L, $54313ca8ab1dbd89$var$L.current & 1), b.flags |= 128, null;
                if (0 !== (c & b.child.childLanes)) return $54313ca8ab1dbd89$var$oj(a, b, c);
                $54313ca8ab1dbd89$var$G($54313ca8ab1dbd89$var$L, $54313ca8ab1dbd89$var$L.current & 1);
                a = $54313ca8ab1dbd89$var$Zi(a, b, c);
                return null !== a ? a.sibling : null;
            }
            $54313ca8ab1dbd89$var$G($54313ca8ab1dbd89$var$L, $54313ca8ab1dbd89$var$L.current & 1);
            break;
        case 19:
            d = 0 !== (c & b.childLanes);
            if (0 !== (a.flags & 128)) {
                if (d) return $54313ca8ab1dbd89$var$xj(a, b, c);
                b.flags |= 128;
            }
            e = b.memoizedState;
            null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
            $54313ca8ab1dbd89$var$G($54313ca8ab1dbd89$var$L, $54313ca8ab1dbd89$var$L.current);
            if (d) break;
            else return null;
        case 22:
        case 23:
            return b.lanes = 0, $54313ca8ab1dbd89$var$dj(a, b, c);
    }
    return $54313ca8ab1dbd89$var$Zi(a, b, c);
}
var $54313ca8ab1dbd89$var$zj, $54313ca8ab1dbd89$var$Aj, $54313ca8ab1dbd89$var$Bj, $54313ca8ab1dbd89$var$Cj;
$54313ca8ab1dbd89$var$zj = function(a, b) {
    for(var c = b.child; null !== c;){
        if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
        else if (4 !== c.tag && null !== c.child) {
            c.child.return = c;
            c = c.child;
            continue;
        }
        if (c === b) break;
        for(; null === c.sibling;){
            if (null === c.return || c.return === b) return;
            c = c.return;
        }
        c.sibling.return = c.return;
        c = c.sibling;
    }
};
$54313ca8ab1dbd89$var$Aj = function() {};
$54313ca8ab1dbd89$var$Bj = function(a, b, c, d) {
    var e = a.memoizedProps;
    if (e !== d) {
        a = b.stateNode;
        $54313ca8ab1dbd89$var$xh($54313ca8ab1dbd89$var$uh.current);
        var f = null;
        switch(c){
            case "input":
                e = $54313ca8ab1dbd89$var$Ya(a, e);
                d = $54313ca8ab1dbd89$var$Ya(a, d);
                f = [];
                break;
            case "select":
                e = $54313ca8ab1dbd89$var$A({}, e, {
                    value: void 0
                });
                d = $54313ca8ab1dbd89$var$A({}, d, {
                    value: void 0
                });
                f = [];
                break;
            case "textarea":
                e = $54313ca8ab1dbd89$var$gb(a, e);
                d = $54313ca8ab1dbd89$var$gb(a, d);
                f = [];
                break;
            default:
                "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = $54313ca8ab1dbd89$var$Bf);
        }
        $54313ca8ab1dbd89$var$ub(c, d);
        var g;
        c = null;
        for(l in e)if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) {
            if ("style" === l) {
                var h = e[l];
                for(g in h)h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
            } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && ($54313ca8ab1dbd89$var$ea.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
        }
        for(l in d){
            var k = d[l];
            h = null != e ? e[l] : void 0;
            if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) {
                if ("style" === l) {
                    if (h) {
                        for(g in h)!h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
                        for(g in k)k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
                    } else c || (f || (f = []), f.push(l, c)), c = k;
                } else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && ($54313ca8ab1dbd89$var$ea.hasOwnProperty(l) ? (null != k && "onScroll" === l && $54313ca8ab1dbd89$var$D("scroll", a), f || h === k || (f = [])) : (f = f || []).push(l, k));
            }
        }
        c && (f = f || []).push("style", c);
        var l = f;
        if (b.updateQueue = l) b.flags |= 4;
    }
};
$54313ca8ab1dbd89$var$Cj = function(a, b, c, d) {
    c !== d && (b.flags |= 4);
};
function $54313ca8ab1dbd89$var$Dj(a, b) {
    if (!$54313ca8ab1dbd89$var$I) switch(a.tailMode){
        case "hidden":
            b = a.tail;
            for(var c = null; null !== b;)null !== b.alternate && (c = b), b = b.sibling;
            null === c ? a.tail = null : c.sibling = null;
            break;
        case "collapsed":
            c = a.tail;
            for(var d = null; null !== c;)null !== c.alternate && (d = c), c = c.sibling;
            null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
}
function $54313ca8ab1dbd89$var$S(a) {
    var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
    if (b) for(var e = a.child; null !== e;)c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
    else for(e = a.child; null !== e;)c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
    a.subtreeFlags |= d;
    a.childLanes = c;
    return b;
}
function $54313ca8ab1dbd89$var$Ej(a, b, c) {
    var d = b.pendingProps;
    $54313ca8ab1dbd89$var$wg(b);
    switch(b.tag){
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
            return $54313ca8ab1dbd89$var$S(b), null;
        case 1:
            return $54313ca8ab1dbd89$var$Zf(b.type) && $54313ca8ab1dbd89$var$$f(), $54313ca8ab1dbd89$var$S(b), null;
        case 3:
            d = b.stateNode;
            $54313ca8ab1dbd89$var$zh();
            $54313ca8ab1dbd89$var$E($54313ca8ab1dbd89$var$Wf);
            $54313ca8ab1dbd89$var$E($54313ca8ab1dbd89$var$H);
            $54313ca8ab1dbd89$var$Eh();
            d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
            if (null === a || null === a.child) $54313ca8ab1dbd89$var$Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== $54313ca8ab1dbd89$var$zg && ($54313ca8ab1dbd89$var$Fj($54313ca8ab1dbd89$var$zg), $54313ca8ab1dbd89$var$zg = null));
            $54313ca8ab1dbd89$var$Aj(a, b);
            $54313ca8ab1dbd89$var$S(b);
            return null;
        case 5:
            $54313ca8ab1dbd89$var$Bh(b);
            var e = $54313ca8ab1dbd89$var$xh($54313ca8ab1dbd89$var$wh.current);
            c = b.type;
            if (null !== a && null != b.stateNode) $54313ca8ab1dbd89$var$Bj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
            else {
                if (!d) {
                    if (null === b.stateNode) throw Error($54313ca8ab1dbd89$var$p(166));
                    $54313ca8ab1dbd89$var$S(b);
                    return null;
                }
                a = $54313ca8ab1dbd89$var$xh($54313ca8ab1dbd89$var$uh.current);
                if ($54313ca8ab1dbd89$var$Gg(b)) {
                    d = b.stateNode;
                    c = b.type;
                    var f = b.memoizedProps;
                    d[$54313ca8ab1dbd89$var$Of] = b;
                    d[$54313ca8ab1dbd89$var$Pf] = f;
                    a = 0 !== (b.mode & 1);
                    switch(c){
                        case "dialog":
                            $54313ca8ab1dbd89$var$D("cancel", d);
                            $54313ca8ab1dbd89$var$D("close", d);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            $54313ca8ab1dbd89$var$D("load", d);
                            break;
                        case "video":
                        case "audio":
                            for(e = 0; e < $54313ca8ab1dbd89$var$lf.length; e++)$54313ca8ab1dbd89$var$D($54313ca8ab1dbd89$var$lf[e], d);
                            break;
                        case "source":
                            $54313ca8ab1dbd89$var$D("error", d);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            $54313ca8ab1dbd89$var$D("error", d);
                            $54313ca8ab1dbd89$var$D("load", d);
                            break;
                        case "details":
                            $54313ca8ab1dbd89$var$D("toggle", d);
                            break;
                        case "input":
                            $54313ca8ab1dbd89$var$Za(d, f);
                            $54313ca8ab1dbd89$var$D("invalid", d);
                            break;
                        case "select":
                            d._wrapperState = {
                                wasMultiple: !!f.multiple
                            };
                            $54313ca8ab1dbd89$var$D("invalid", d);
                            break;
                        case "textarea":
                            $54313ca8ab1dbd89$var$hb(d, f), $54313ca8ab1dbd89$var$D("invalid", d);
                    }
                    $54313ca8ab1dbd89$var$ub(c, f);
                    e = null;
                    for(var g in f)if (f.hasOwnProperty(g)) {
                        var h = f[g];
                        "children" === g ? "string" === typeof h ? d.textContent !== h && (!0 !== f.suppressHydrationWarning && $54313ca8ab1dbd89$var$Af(d.textContent, h, a), e = [
                            "children",
                            h
                        ]) : "number" === typeof h && d.textContent !== "" + h && (!0 !== f.suppressHydrationWarning && $54313ca8ab1dbd89$var$Af(d.textContent, h, a), e = [
                            "children",
                            "" + h
                        ]) : $54313ca8ab1dbd89$var$ea.hasOwnProperty(g) && null != h && "onScroll" === g && $54313ca8ab1dbd89$var$D("scroll", d);
                    }
                    switch(c){
                        case "input":
                            $54313ca8ab1dbd89$var$Va(d);
                            $54313ca8ab1dbd89$var$db(d, f, !0);
                            break;
                        case "textarea":
                            $54313ca8ab1dbd89$var$Va(d);
                            $54313ca8ab1dbd89$var$jb(d);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            "function" === typeof f.onClick && (d.onclick = $54313ca8ab1dbd89$var$Bf);
                    }
                    d = e;
                    b.updateQueue = d;
                    null !== d && (b.flags |= 4);
                } else {
                    g = 9 === e.nodeType ? e : e.ownerDocument;
                    "http://www.w3.org/1999/xhtml" === a && (a = $54313ca8ab1dbd89$var$kb(c));
                    "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script></script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, {
                        is: d.is
                    }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = !0 : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
                    a[$54313ca8ab1dbd89$var$Of] = b;
                    a[$54313ca8ab1dbd89$var$Pf] = d;
                    $54313ca8ab1dbd89$var$zj(a, b, !1, !1);
                    b.stateNode = a;
                    a: {
                        g = $54313ca8ab1dbd89$var$vb(c, d);
                        switch(c){
                            case "dialog":
                                $54313ca8ab1dbd89$var$D("cancel", a);
                                $54313ca8ab1dbd89$var$D("close", a);
                                e = d;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                $54313ca8ab1dbd89$var$D("load", a);
                                e = d;
                                break;
                            case "video":
                            case "audio":
                                for(e = 0; e < $54313ca8ab1dbd89$var$lf.length; e++)$54313ca8ab1dbd89$var$D($54313ca8ab1dbd89$var$lf[e], a);
                                e = d;
                                break;
                            case "source":
                                $54313ca8ab1dbd89$var$D("error", a);
                                e = d;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                $54313ca8ab1dbd89$var$D("error", a);
                                $54313ca8ab1dbd89$var$D("load", a);
                                e = d;
                                break;
                            case "details":
                                $54313ca8ab1dbd89$var$D("toggle", a);
                                e = d;
                                break;
                            case "input":
                                $54313ca8ab1dbd89$var$Za(a, d);
                                e = $54313ca8ab1dbd89$var$Ya(a, d);
                                $54313ca8ab1dbd89$var$D("invalid", a);
                                break;
                            case "option":
                                e = d;
                                break;
                            case "select":
                                a._wrapperState = {
                                    wasMultiple: !!d.multiple
                                };
                                e = $54313ca8ab1dbd89$var$A({}, d, {
                                    value: void 0
                                });
                                $54313ca8ab1dbd89$var$D("invalid", a);
                                break;
                            case "textarea":
                                $54313ca8ab1dbd89$var$hb(a, d);
                                e = $54313ca8ab1dbd89$var$gb(a, d);
                                $54313ca8ab1dbd89$var$D("invalid", a);
                                break;
                            default:
                                e = d;
                        }
                        $54313ca8ab1dbd89$var$ub(c, e);
                        h = e;
                        for(f in h)if (h.hasOwnProperty(f)) {
                            var k = h[f];
                            "style" === f ? $54313ca8ab1dbd89$var$sb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && $54313ca8ab1dbd89$var$nb(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && $54313ca8ab1dbd89$var$ob(a, k) : "number" === typeof k && $54313ca8ab1dbd89$var$ob(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && ($54313ca8ab1dbd89$var$ea.hasOwnProperty(f) ? null != k && "onScroll" === f && $54313ca8ab1dbd89$var$D("scroll", a) : null != k && $54313ca8ab1dbd89$var$ta(a, f, k, g));
                        }
                        switch(c){
                            case "input":
                                $54313ca8ab1dbd89$var$Va(a);
                                $54313ca8ab1dbd89$var$db(a, d, !1);
                                break;
                            case "textarea":
                                $54313ca8ab1dbd89$var$Va(a);
                                $54313ca8ab1dbd89$var$jb(a);
                                break;
                            case "option":
                                null != d.value && a.setAttribute("value", "" + $54313ca8ab1dbd89$var$Sa(d.value));
                                break;
                            case "select":
                                a.multiple = !!d.multiple;
                                f = d.value;
                                null != f ? $54313ca8ab1dbd89$var$fb(a, !!d.multiple, f, !1) : null != d.defaultValue && $54313ca8ab1dbd89$var$fb(a, !!d.multiple, d.defaultValue, !0);
                                break;
                            default:
                                "function" === typeof e.onClick && (a.onclick = $54313ca8ab1dbd89$var$Bf);
                        }
                        switch(c){
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                d = !!d.autoFocus;
                                break a;
                            case "img":
                                d = !0;
                                break a;
                            default:
                                d = !1;
                        }
                    }
                    d && (b.flags |= 4);
                }
                null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
            }
            $54313ca8ab1dbd89$var$S(b);
            return null;
        case 6:
            if (a && null != b.stateNode) $54313ca8ab1dbd89$var$Cj(a, b, a.memoizedProps, d);
            else {
                if ("string" !== typeof d && null === b.stateNode) throw Error($54313ca8ab1dbd89$var$p(166));
                c = $54313ca8ab1dbd89$var$xh($54313ca8ab1dbd89$var$wh.current);
                $54313ca8ab1dbd89$var$xh($54313ca8ab1dbd89$var$uh.current);
                if ($54313ca8ab1dbd89$var$Gg(b)) {
                    d = b.stateNode;
                    c = b.memoizedProps;
                    d[$54313ca8ab1dbd89$var$Of] = b;
                    if (f = d.nodeValue !== c) {
                        if (a = $54313ca8ab1dbd89$var$xg, null !== a) switch(a.tag){
                            case 3:
                                $54313ca8ab1dbd89$var$Af(d.nodeValue, c, 0 !== (a.mode & 1));
                                break;
                            case 5:
                                !0 !== a.memoizedProps.suppressHydrationWarning && $54313ca8ab1dbd89$var$Af(d.nodeValue, c, 0 !== (a.mode & 1));
                        }
                    }
                    f && (b.flags |= 4);
                } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[$54313ca8ab1dbd89$var$Of] = b, b.stateNode = d;
            }
            $54313ca8ab1dbd89$var$S(b);
            return null;
        case 13:
            $54313ca8ab1dbd89$var$E($54313ca8ab1dbd89$var$L);
            d = b.memoizedState;
            if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
                if ($54313ca8ab1dbd89$var$I && null !== $54313ca8ab1dbd89$var$yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) $54313ca8ab1dbd89$var$Hg(), $54313ca8ab1dbd89$var$Ig(), b.flags |= 98560, f = !1;
                else if (f = $54313ca8ab1dbd89$var$Gg(b), null !== d && null !== d.dehydrated) {
                    if (null === a) {
                        if (!f) throw Error($54313ca8ab1dbd89$var$p(318));
                        f = b.memoizedState;
                        f = null !== f ? f.dehydrated : null;
                        if (!f) throw Error($54313ca8ab1dbd89$var$p(317));
                        f[$54313ca8ab1dbd89$var$Of] = b;
                    } else $54313ca8ab1dbd89$var$Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
                    $54313ca8ab1dbd89$var$S(b);
                    f = !1;
                } else null !== $54313ca8ab1dbd89$var$zg && ($54313ca8ab1dbd89$var$Fj($54313ca8ab1dbd89$var$zg), $54313ca8ab1dbd89$var$zg = null), f = !0;
                if (!f) return b.flags & 65536 ? b : null;
            }
            if (0 !== (b.flags & 128)) return b.lanes = c, b;
            d = null !== d;
            d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== ($54313ca8ab1dbd89$var$L.current & 1) ? 0 === $54313ca8ab1dbd89$var$T && ($54313ca8ab1dbd89$var$T = 3) : $54313ca8ab1dbd89$var$tj()));
            null !== b.updateQueue && (b.flags |= 4);
            $54313ca8ab1dbd89$var$S(b);
            return null;
        case 4:
            return $54313ca8ab1dbd89$var$zh(), $54313ca8ab1dbd89$var$Aj(a, b), null === a && $54313ca8ab1dbd89$var$sf(b.stateNode.containerInfo), $54313ca8ab1dbd89$var$S(b), null;
        case 10:
            return $54313ca8ab1dbd89$var$ah(b.type._context), $54313ca8ab1dbd89$var$S(b), null;
        case 17:
            return $54313ca8ab1dbd89$var$Zf(b.type) && $54313ca8ab1dbd89$var$$f(), $54313ca8ab1dbd89$var$S(b), null;
        case 19:
            $54313ca8ab1dbd89$var$E($54313ca8ab1dbd89$var$L);
            f = b.memoizedState;
            if (null === f) return $54313ca8ab1dbd89$var$S(b), null;
            d = 0 !== (b.flags & 128);
            g = f.rendering;
            if (null === g) {
                if (d) $54313ca8ab1dbd89$var$Dj(f, !1);
                else {
                    if (0 !== $54313ca8ab1dbd89$var$T || null !== a && 0 !== (a.flags & 128)) for(a = b.child; null !== a;){
                        g = $54313ca8ab1dbd89$var$Ch(a);
                        if (null !== g) {
                            b.flags |= 128;
                            $54313ca8ab1dbd89$var$Dj(f, !1);
                            d = g.updateQueue;
                            null !== d && (b.updateQueue = d, b.flags |= 4);
                            b.subtreeFlags = 0;
                            d = c;
                            for(c = b.child; null !== c;)f = c, a = d, f.flags &= 14680066, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : {
                                lanes: a.lanes,
                                firstContext: a.firstContext
                            }), c = c.sibling;
                            $54313ca8ab1dbd89$var$G($54313ca8ab1dbd89$var$L, $54313ca8ab1dbd89$var$L.current & 1 | 2);
                            return b.child;
                        }
                        a = a.sibling;
                    }
                    null !== f.tail && $54313ca8ab1dbd89$var$B() > $54313ca8ab1dbd89$var$Gj && (b.flags |= 128, d = !0, $54313ca8ab1dbd89$var$Dj(f, !1), b.lanes = 4194304);
                }
            } else {
                if (!d) {
                    if (a = $54313ca8ab1dbd89$var$Ch(g), null !== a) {
                        if (b.flags |= 128, d = !0, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), $54313ca8ab1dbd89$var$Dj(f, !0), null === f.tail && "hidden" === f.tailMode && !g.alternate && !$54313ca8ab1dbd89$var$I) return $54313ca8ab1dbd89$var$S(b), null;
                    } else 2 * $54313ca8ab1dbd89$var$B() - f.renderingStartTime > $54313ca8ab1dbd89$var$Gj && 1073741824 !== c && (b.flags |= 128, d = !0, $54313ca8ab1dbd89$var$Dj(f, !1), b.lanes = 4194304);
                }
                f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, null !== c ? c.sibling = g : b.child = g, f.last = g);
            }
            if (null !== f.tail) return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = $54313ca8ab1dbd89$var$B(), b.sibling = null, c = $54313ca8ab1dbd89$var$L.current, $54313ca8ab1dbd89$var$G($54313ca8ab1dbd89$var$L, d ? c & 1 | 2 : c & 1), b;
            $54313ca8ab1dbd89$var$S(b);
            return null;
        case 22:
        case 23:
            return $54313ca8ab1dbd89$var$Hj(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== ($54313ca8ab1dbd89$var$fj & 1073741824) && ($54313ca8ab1dbd89$var$S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : $54313ca8ab1dbd89$var$S(b), null;
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error($54313ca8ab1dbd89$var$p(156, b.tag));
}
function $54313ca8ab1dbd89$var$Ij(a, b) {
    $54313ca8ab1dbd89$var$wg(b);
    switch(b.tag){
        case 1:
            return $54313ca8ab1dbd89$var$Zf(b.type) && $54313ca8ab1dbd89$var$$f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
        case 3:
            return $54313ca8ab1dbd89$var$zh(), $54313ca8ab1dbd89$var$E($54313ca8ab1dbd89$var$Wf), $54313ca8ab1dbd89$var$E($54313ca8ab1dbd89$var$H), $54313ca8ab1dbd89$var$Eh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
        case 5:
            return $54313ca8ab1dbd89$var$Bh(b), null;
        case 13:
            $54313ca8ab1dbd89$var$E($54313ca8ab1dbd89$var$L);
            a = b.memoizedState;
            if (null !== a && null !== a.dehydrated) {
                if (null === b.alternate) throw Error($54313ca8ab1dbd89$var$p(340));
                $54313ca8ab1dbd89$var$Ig();
            }
            a = b.flags;
            return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
        case 19:
            return $54313ca8ab1dbd89$var$E($54313ca8ab1dbd89$var$L), null;
        case 4:
            return $54313ca8ab1dbd89$var$zh(), null;
        case 10:
            return $54313ca8ab1dbd89$var$ah(b.type._context), null;
        case 22:
        case 23:
            return $54313ca8ab1dbd89$var$Hj(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var $54313ca8ab1dbd89$var$Jj = !1, $54313ca8ab1dbd89$var$U = !1, $54313ca8ab1dbd89$var$Kj = "function" === typeof WeakSet ? WeakSet : Set, $54313ca8ab1dbd89$var$V = null;
function $54313ca8ab1dbd89$var$Lj(a, b) {
    var c = a.ref;
    if (null !== c) {
        if ("function" === typeof c) try {
            c(null);
        } catch (d) {
            $54313ca8ab1dbd89$var$W(a, b, d);
        }
        else c.current = null;
    }
}
function $54313ca8ab1dbd89$var$Mj(a, b, c) {
    try {
        c();
    } catch (d) {
        $54313ca8ab1dbd89$var$W(a, b, d);
    }
}
var $54313ca8ab1dbd89$var$Nj = !1;
function $54313ca8ab1dbd89$var$Oj(a, b) {
    $54313ca8ab1dbd89$var$Cf = $54313ca8ab1dbd89$var$dd;
    a = $54313ca8ab1dbd89$var$Me();
    if ($54313ca8ab1dbd89$var$Ne(a)) {
        if ("selectionStart" in a) var c = {
            start: a.selectionStart,
            end: a.selectionEnd
        };
        else a: {
            c = (c = a.ownerDocument) && c.defaultView || window;
            var d = c.getSelection && c.getSelection();
            if (d && 0 !== d.rangeCount) {
                c = d.anchorNode;
                var e = d.anchorOffset, f = d.focusNode;
                d = d.focusOffset;
                try {
                    c.nodeType, f.nodeType;
                } catch (F) {
                    c = null;
                    break a;
                }
                var g = 0, h = -1, k = -1, l = 0, m = 0, q = a, r = null;
                b: for(;;){
                    for(var y;;){
                        q !== c || 0 !== e && 3 !== q.nodeType || (h = g + e);
                        q !== f || 0 !== d && 3 !== q.nodeType || (k = g + d);
                        3 === q.nodeType && (g += q.nodeValue.length);
                        if (null === (y = q.firstChild)) break;
                        r = q;
                        q = y;
                    }
                    for(;;){
                        if (q === a) break b;
                        r === c && ++l === e && (h = g);
                        r === f && ++m === d && (k = g);
                        if (null !== (y = q.nextSibling)) break;
                        q = r;
                        r = q.parentNode;
                    }
                    q = y;
                }
                c = -1 === h || -1 === k ? null : {
                    start: h,
                    end: k
                };
            } else c = null;
        }
        c = c || {
            start: 0,
            end: 0
        };
    } else c = null;
    $54313ca8ab1dbd89$var$Df = {
        focusedElem: a,
        selectionRange: c
    };
    $54313ca8ab1dbd89$var$dd = !1;
    for($54313ca8ab1dbd89$var$V = b; null !== $54313ca8ab1dbd89$var$V;)if (b = $54313ca8ab1dbd89$var$V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, $54313ca8ab1dbd89$var$V = a;
    else for(; null !== $54313ca8ab1dbd89$var$V;){
        b = $54313ca8ab1dbd89$var$V;
        try {
            var n = b.alternate;
            if (0 !== (b.flags & 1024)) switch(b.tag){
                case 0:
                case 11:
                case 15:
                    break;
                case 1:
                    if (null !== n) {
                        var t = n.memoizedProps, J = n.memoizedState, x = b.stateNode, w = x.getSnapshotBeforeUpdate(b.elementType === b.type ? t : $54313ca8ab1dbd89$var$Ci(b.type, t), J);
                        x.__reactInternalSnapshotBeforeUpdate = w;
                    }
                    break;
                case 3:
                    var u = b.stateNode.containerInfo;
                    1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
                    break;
                case 5:
                case 6:
                case 4:
                case 17:
                    break;
                default:
                    throw Error($54313ca8ab1dbd89$var$p(163));
            }
        } catch (F) {
            $54313ca8ab1dbd89$var$W(b, b.return, F);
        }
        a = b.sibling;
        if (null !== a) {
            a.return = b.return;
            $54313ca8ab1dbd89$var$V = a;
            break;
        }
        $54313ca8ab1dbd89$var$V = b.return;
    }
    n = $54313ca8ab1dbd89$var$Nj;
    $54313ca8ab1dbd89$var$Nj = !1;
    return n;
}
function $54313ca8ab1dbd89$var$Pj(a, b, c) {
    var d = b.updateQueue;
    d = null !== d ? d.lastEffect : null;
    if (null !== d) {
        var e = d = d.next;
        do {
            if ((e.tag & a) === a) {
                var f = e.destroy;
                e.destroy = void 0;
                void 0 !== f && $54313ca8ab1dbd89$var$Mj(b, c, f);
            }
            e = e.next;
        }while (e !== d);
    }
}
function $54313ca8ab1dbd89$var$Qj(a, b) {
    b = b.updateQueue;
    b = null !== b ? b.lastEffect : null;
    if (null !== b) {
        var c = b = b.next;
        do {
            if ((c.tag & a) === a) {
                var d = c.create;
                c.destroy = d();
            }
            c = c.next;
        }while (c !== b);
    }
}
function $54313ca8ab1dbd89$var$Rj(a) {
    var b = a.ref;
    if (null !== b) {
        var c = a.stateNode;
        switch(a.tag){
            case 5:
                a = c;
                break;
            default:
                a = c;
        }
        "function" === typeof b ? b(a) : b.current = a;
    }
}
function $54313ca8ab1dbd89$var$Sj(a) {
    var b = a.alternate;
    null !== b && (a.alternate = null, $54313ca8ab1dbd89$var$Sj(b));
    a.child = null;
    a.deletions = null;
    a.sibling = null;
    5 === a.tag && (b = a.stateNode, null !== b && (delete b[$54313ca8ab1dbd89$var$Of], delete b[$54313ca8ab1dbd89$var$Pf], delete b[$54313ca8ab1dbd89$var$of], delete b[$54313ca8ab1dbd89$var$Qf], delete b[$54313ca8ab1dbd89$var$Rf]));
    a.stateNode = null;
    a.return = null;
    a.dependencies = null;
    a.memoizedProps = null;
    a.memoizedState = null;
    a.pendingProps = null;
    a.stateNode = null;
    a.updateQueue = null;
}
function $54313ca8ab1dbd89$var$Tj(a) {
    return 5 === a.tag || 3 === a.tag || 4 === a.tag;
}
function $54313ca8ab1dbd89$var$Uj(a) {
    a: for(;;){
        for(; null === a.sibling;){
            if (null === a.return || $54313ca8ab1dbd89$var$Tj(a.return)) return null;
            a = a.return;
        }
        a.sibling.return = a.return;
        for(a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag;){
            if (a.flags & 2) continue a;
            if (null === a.child || 4 === a.tag) continue a;
            else a.child.return = a, a = a.child;
        }
        if (!(a.flags & 2)) return a.stateNode;
    }
}
function $54313ca8ab1dbd89$var$Vj(a, b, c) {
    var d = a.tag;
    if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = $54313ca8ab1dbd89$var$Bf));
    else if (4 !== d && (a = a.child, null !== a)) for($54313ca8ab1dbd89$var$Vj(a, b, c), a = a.sibling; null !== a;)$54313ca8ab1dbd89$var$Vj(a, b, c), a = a.sibling;
}
function $54313ca8ab1dbd89$var$Wj(a, b, c) {
    var d = a.tag;
    if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
    else if (4 !== d && (a = a.child, null !== a)) for($54313ca8ab1dbd89$var$Wj(a, b, c), a = a.sibling; null !== a;)$54313ca8ab1dbd89$var$Wj(a, b, c), a = a.sibling;
}
var $54313ca8ab1dbd89$var$X = null, $54313ca8ab1dbd89$var$Xj = !1;
function $54313ca8ab1dbd89$var$Yj(a, b, c) {
    for(c = c.child; null !== c;)$54313ca8ab1dbd89$var$Zj(a, b, c), c = c.sibling;
}
function $54313ca8ab1dbd89$var$Zj(a, b, c) {
    if ($54313ca8ab1dbd89$var$lc && "function" === typeof $54313ca8ab1dbd89$var$lc.onCommitFiberUnmount) try {
        $54313ca8ab1dbd89$var$lc.onCommitFiberUnmount($54313ca8ab1dbd89$var$kc, c);
    } catch (h) {}
    switch(c.tag){
        case 5:
            $54313ca8ab1dbd89$var$U || $54313ca8ab1dbd89$var$Lj(c, b);
        case 6:
            var d = $54313ca8ab1dbd89$var$X, e = $54313ca8ab1dbd89$var$Xj;
            $54313ca8ab1dbd89$var$X = null;
            $54313ca8ab1dbd89$var$Yj(a, b, c);
            $54313ca8ab1dbd89$var$X = d;
            $54313ca8ab1dbd89$var$Xj = e;
            null !== $54313ca8ab1dbd89$var$X && ($54313ca8ab1dbd89$var$Xj ? (a = $54313ca8ab1dbd89$var$X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : $54313ca8ab1dbd89$var$X.removeChild(c.stateNode));
            break;
        case 18:
            null !== $54313ca8ab1dbd89$var$X && ($54313ca8ab1dbd89$var$Xj ? (a = $54313ca8ab1dbd89$var$X, c = c.stateNode, 8 === a.nodeType ? $54313ca8ab1dbd89$var$Kf(a.parentNode, c) : 1 === a.nodeType && $54313ca8ab1dbd89$var$Kf(a, c), $54313ca8ab1dbd89$var$bd(a)) : $54313ca8ab1dbd89$var$Kf($54313ca8ab1dbd89$var$X, c.stateNode));
            break;
        case 4:
            d = $54313ca8ab1dbd89$var$X;
            e = $54313ca8ab1dbd89$var$Xj;
            $54313ca8ab1dbd89$var$X = c.stateNode.containerInfo;
            $54313ca8ab1dbd89$var$Xj = !0;
            $54313ca8ab1dbd89$var$Yj(a, b, c);
            $54313ca8ab1dbd89$var$X = d;
            $54313ca8ab1dbd89$var$Xj = e;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!$54313ca8ab1dbd89$var$U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
                e = d = d.next;
                do {
                    var f = e, g = f.destroy;
                    f = f.tag;
                    void 0 !== g && (0 !== (f & 2) ? $54313ca8ab1dbd89$var$Mj(c, b, g) : 0 !== (f & 4) && $54313ca8ab1dbd89$var$Mj(c, b, g));
                    e = e.next;
                }while (e !== d);
            }
            $54313ca8ab1dbd89$var$Yj(a, b, c);
            break;
        case 1:
            if (!$54313ca8ab1dbd89$var$U && ($54313ca8ab1dbd89$var$Lj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
                d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
            } catch (h) {
                $54313ca8ab1dbd89$var$W(c, b, h);
            }
            $54313ca8ab1dbd89$var$Yj(a, b, c);
            break;
        case 21:
            $54313ca8ab1dbd89$var$Yj(a, b, c);
            break;
        case 22:
            c.mode & 1 ? ($54313ca8ab1dbd89$var$U = (d = $54313ca8ab1dbd89$var$U) || null !== c.memoizedState, $54313ca8ab1dbd89$var$Yj(a, b, c), $54313ca8ab1dbd89$var$U = d) : $54313ca8ab1dbd89$var$Yj(a, b, c);
            break;
        default:
            $54313ca8ab1dbd89$var$Yj(a, b, c);
    }
}
function $54313ca8ab1dbd89$var$ak(a) {
    var b = a.updateQueue;
    if (null !== b) {
        a.updateQueue = null;
        var c = a.stateNode;
        null === c && (c = a.stateNode = new $54313ca8ab1dbd89$var$Kj);
        b.forEach(function(b) {
            var d = $54313ca8ab1dbd89$var$bk.bind(null, a, b);
            c.has(b) || (c.add(b), b.then(d, d));
        });
    }
}
function $54313ca8ab1dbd89$var$ck(a, b) {
    var c = b.deletions;
    if (null !== c) for(var d = 0; d < c.length; d++){
        var e = c[d];
        try {
            var f = a, g = b, h = g;
            a: for(; null !== h;){
                switch(h.tag){
                    case 5:
                        $54313ca8ab1dbd89$var$X = h.stateNode;
                        $54313ca8ab1dbd89$var$Xj = !1;
                        break a;
                    case 3:
                        $54313ca8ab1dbd89$var$X = h.stateNode.containerInfo;
                        $54313ca8ab1dbd89$var$Xj = !0;
                        break a;
                    case 4:
                        $54313ca8ab1dbd89$var$X = h.stateNode.containerInfo;
                        $54313ca8ab1dbd89$var$Xj = !0;
                        break a;
                }
                h = h.return;
            }
            if (null === $54313ca8ab1dbd89$var$X) throw Error($54313ca8ab1dbd89$var$p(160));
            $54313ca8ab1dbd89$var$Zj(f, g, e);
            $54313ca8ab1dbd89$var$X = null;
            $54313ca8ab1dbd89$var$Xj = !1;
            var k = e.alternate;
            null !== k && (k.return = null);
            e.return = null;
        } catch (l) {
            $54313ca8ab1dbd89$var$W(e, b, l);
        }
    }
    if (b.subtreeFlags & 12854) for(b = b.child; null !== b;)$54313ca8ab1dbd89$var$dk(b, a), b = b.sibling;
}
function $54313ca8ab1dbd89$var$dk(a, b) {
    var c = a.alternate, d = a.flags;
    switch(a.tag){
        case 0:
        case 11:
        case 14:
        case 15:
            $54313ca8ab1dbd89$var$ck(b, a);
            $54313ca8ab1dbd89$var$ek(a);
            if (d & 4) {
                try {
                    $54313ca8ab1dbd89$var$Pj(3, a, a.return), $54313ca8ab1dbd89$var$Qj(3, a);
                } catch (t) {
                    $54313ca8ab1dbd89$var$W(a, a.return, t);
                }
                try {
                    $54313ca8ab1dbd89$var$Pj(5, a, a.return);
                } catch (t) {
                    $54313ca8ab1dbd89$var$W(a, a.return, t);
                }
            }
            break;
        case 1:
            $54313ca8ab1dbd89$var$ck(b, a);
            $54313ca8ab1dbd89$var$ek(a);
            d & 512 && null !== c && $54313ca8ab1dbd89$var$Lj(c, c.return);
            break;
        case 5:
            $54313ca8ab1dbd89$var$ck(b, a);
            $54313ca8ab1dbd89$var$ek(a);
            d & 512 && null !== c && $54313ca8ab1dbd89$var$Lj(c, c.return);
            if (a.flags & 32) {
                var e = a.stateNode;
                try {
                    $54313ca8ab1dbd89$var$ob(e, "");
                } catch (t) {
                    $54313ca8ab1dbd89$var$W(a, a.return, t);
                }
            }
            if (d & 4 && (e = a.stateNode, null != e)) {
                var f = a.memoizedProps, g = null !== c ? c.memoizedProps : f, h = a.type, k = a.updateQueue;
                a.updateQueue = null;
                if (null !== k) try {
                    "input" === h && "radio" === f.type && null != f.name && $54313ca8ab1dbd89$var$ab(e, f);
                    $54313ca8ab1dbd89$var$vb(h, g);
                    var l = $54313ca8ab1dbd89$var$vb(h, f);
                    for(g = 0; g < k.length; g += 2){
                        var m = k[g], q = k[g + 1];
                        "style" === m ? $54313ca8ab1dbd89$var$sb(e, q) : "dangerouslySetInnerHTML" === m ? $54313ca8ab1dbd89$var$nb(e, q) : "children" === m ? $54313ca8ab1dbd89$var$ob(e, q) : $54313ca8ab1dbd89$var$ta(e, m, q, l);
                    }
                    switch(h){
                        case "input":
                            $54313ca8ab1dbd89$var$bb(e, f);
                            break;
                        case "textarea":
                            $54313ca8ab1dbd89$var$ib(e, f);
                            break;
                        case "select":
                            var r = e._wrapperState.wasMultiple;
                            e._wrapperState.wasMultiple = !!f.multiple;
                            var y = f.value;
                            null != y ? $54313ca8ab1dbd89$var$fb(e, !!f.multiple, y, !1) : r !== !!f.multiple && (null != f.defaultValue ? $54313ca8ab1dbd89$var$fb(e, !!f.multiple, f.defaultValue, !0) : $54313ca8ab1dbd89$var$fb(e, !!f.multiple, f.multiple ? [] : "", !1));
                    }
                    e[$54313ca8ab1dbd89$var$Pf] = f;
                } catch (t) {
                    $54313ca8ab1dbd89$var$W(a, a.return, t);
                }
            }
            break;
        case 6:
            $54313ca8ab1dbd89$var$ck(b, a);
            $54313ca8ab1dbd89$var$ek(a);
            if (d & 4) {
                if (null === a.stateNode) throw Error($54313ca8ab1dbd89$var$p(162));
                e = a.stateNode;
                f = a.memoizedProps;
                try {
                    e.nodeValue = f;
                } catch (t) {
                    $54313ca8ab1dbd89$var$W(a, a.return, t);
                }
            }
            break;
        case 3:
            $54313ca8ab1dbd89$var$ck(b, a);
            $54313ca8ab1dbd89$var$ek(a);
            if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
                $54313ca8ab1dbd89$var$bd(b.containerInfo);
            } catch (t) {
                $54313ca8ab1dbd89$var$W(a, a.return, t);
            }
            break;
        case 4:
            $54313ca8ab1dbd89$var$ck(b, a);
            $54313ca8ab1dbd89$var$ek(a);
            break;
        case 13:
            $54313ca8ab1dbd89$var$ck(b, a);
            $54313ca8ab1dbd89$var$ek(a);
            e = a.child;
            e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || ($54313ca8ab1dbd89$var$fk = $54313ca8ab1dbd89$var$B()));
            d & 4 && $54313ca8ab1dbd89$var$ak(a);
            break;
        case 22:
            m = null !== c && null !== c.memoizedState;
            a.mode & 1 ? ($54313ca8ab1dbd89$var$U = (l = $54313ca8ab1dbd89$var$U) || m, $54313ca8ab1dbd89$var$ck(b, a), $54313ca8ab1dbd89$var$U = l) : $54313ca8ab1dbd89$var$ck(b, a);
            $54313ca8ab1dbd89$var$ek(a);
            if (d & 8192) {
                l = null !== a.memoizedState;
                if ((a.stateNode.isHidden = l) && !m && 0 !== (a.mode & 1)) for($54313ca8ab1dbd89$var$V = a, m = a.child; null !== m;){
                    for(q = $54313ca8ab1dbd89$var$V = m; null !== $54313ca8ab1dbd89$var$V;){
                        r = $54313ca8ab1dbd89$var$V;
                        y = r.child;
                        switch(r.tag){
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                $54313ca8ab1dbd89$var$Pj(4, r, r.return);
                                break;
                            case 1:
                                $54313ca8ab1dbd89$var$Lj(r, r.return);
                                var n = r.stateNode;
                                if ("function" === typeof n.componentWillUnmount) {
                                    d = r;
                                    c = r.return;
                                    try {
                                        b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
                                    } catch (t) {
                                        $54313ca8ab1dbd89$var$W(d, c, t);
                                    }
                                }
                                break;
                            case 5:
                                $54313ca8ab1dbd89$var$Lj(r, r.return);
                                break;
                            case 22:
                                if (null !== r.memoizedState) {
                                    $54313ca8ab1dbd89$var$gk(q);
                                    continue;
                                }
                        }
                        null !== y ? (y.return = r, $54313ca8ab1dbd89$var$V = y) : $54313ca8ab1dbd89$var$gk(q);
                    }
                    m = m.sibling;
                }
                a: for(m = null, q = a;;){
                    if (5 === q.tag) {
                        if (null === m) {
                            m = q;
                            try {
                                e = q.stateNode, l ? (f = e.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q.stateNode, k = q.memoizedProps.style, g = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, h.style.display = $54313ca8ab1dbd89$var$rb("display", g));
                            } catch (t) {
                                $54313ca8ab1dbd89$var$W(a, a.return, t);
                            }
                        }
                    } else if (6 === q.tag) {
                        if (null === m) try {
                            q.stateNode.nodeValue = l ? "" : q.memoizedProps;
                        } catch (t) {
                            $54313ca8ab1dbd89$var$W(a, a.return, t);
                        }
                    } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
                        q.child.return = q;
                        q = q.child;
                        continue;
                    }
                    if (q === a) break a;
                    for(; null === q.sibling;){
                        if (null === q.return || q.return === a) break a;
                        m === q && (m = null);
                        q = q.return;
                    }
                    m === q && (m = null);
                    q.sibling.return = q.return;
                    q = q.sibling;
                }
            }
            break;
        case 19:
            $54313ca8ab1dbd89$var$ck(b, a);
            $54313ca8ab1dbd89$var$ek(a);
            d & 4 && $54313ca8ab1dbd89$var$ak(a);
            break;
        case 21:
            break;
        default:
            $54313ca8ab1dbd89$var$ck(b, a), $54313ca8ab1dbd89$var$ek(a);
    }
}
function $54313ca8ab1dbd89$var$ek(a) {
    var b = a.flags;
    if (b & 2) {
        try {
            a: {
                for(var c = a.return; null !== c;){
                    if ($54313ca8ab1dbd89$var$Tj(c)) {
                        var d = c;
                        break a;
                    }
                    c = c.return;
                }
                throw Error($54313ca8ab1dbd89$var$p(160));
            }
            switch(d.tag){
                case 5:
                    var e = d.stateNode;
                    d.flags & 32 && ($54313ca8ab1dbd89$var$ob(e, ""), d.flags &= -33);
                    var f = $54313ca8ab1dbd89$var$Uj(a);
                    $54313ca8ab1dbd89$var$Wj(a, f, e);
                    break;
                case 3:
                case 4:
                    var g = d.stateNode.containerInfo, h = $54313ca8ab1dbd89$var$Uj(a);
                    $54313ca8ab1dbd89$var$Vj(a, h, g);
                    break;
                default:
                    throw Error($54313ca8ab1dbd89$var$p(161));
            }
        } catch (k) {
            $54313ca8ab1dbd89$var$W(a, a.return, k);
        }
        a.flags &= -3;
    }
    b & 4096 && (a.flags &= -4097);
}
function $54313ca8ab1dbd89$var$hk(a, b, c) {
    $54313ca8ab1dbd89$var$V = a;
    $54313ca8ab1dbd89$var$ik(a, b, c);
}
function $54313ca8ab1dbd89$var$ik(a, b, c) {
    for(var d = 0 !== (a.mode & 1); null !== $54313ca8ab1dbd89$var$V;){
        var e = $54313ca8ab1dbd89$var$V, f = e.child;
        if (22 === e.tag && d) {
            var g = null !== e.memoizedState || $54313ca8ab1dbd89$var$Jj;
            if (!g) {
                var h = e.alternate, k = null !== h && null !== h.memoizedState || $54313ca8ab1dbd89$var$U;
                h = $54313ca8ab1dbd89$var$Jj;
                var l = $54313ca8ab1dbd89$var$U;
                $54313ca8ab1dbd89$var$Jj = g;
                if (($54313ca8ab1dbd89$var$U = k) && !l) for($54313ca8ab1dbd89$var$V = e; null !== $54313ca8ab1dbd89$var$V;)g = $54313ca8ab1dbd89$var$V, k = g.child, 22 === g.tag && null !== g.memoizedState ? $54313ca8ab1dbd89$var$jk(e) : null !== k ? (k.return = g, $54313ca8ab1dbd89$var$V = k) : $54313ca8ab1dbd89$var$jk(e);
                for(; null !== f;)$54313ca8ab1dbd89$var$V = f, $54313ca8ab1dbd89$var$ik(f, b, c), f = f.sibling;
                $54313ca8ab1dbd89$var$V = e;
                $54313ca8ab1dbd89$var$Jj = h;
                $54313ca8ab1dbd89$var$U = l;
            }
            $54313ca8ab1dbd89$var$kk(a, b, c);
        } else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, $54313ca8ab1dbd89$var$V = f) : $54313ca8ab1dbd89$var$kk(a, b, c);
    }
}
function $54313ca8ab1dbd89$var$kk(a) {
    for(; null !== $54313ca8ab1dbd89$var$V;){
        var b = $54313ca8ab1dbd89$var$V;
        if (0 !== (b.flags & 8772)) {
            var c = b.alternate;
            try {
                if (0 !== (b.flags & 8772)) switch(b.tag){
                    case 0:
                    case 11:
                    case 15:
                        $54313ca8ab1dbd89$var$U || $54313ca8ab1dbd89$var$Qj(5, b);
                        break;
                    case 1:
                        var d = b.stateNode;
                        if (b.flags & 4 && !$54313ca8ab1dbd89$var$U) {
                            if (null === c) d.componentDidMount();
                            else {
                                var e = b.elementType === b.type ? c.memoizedProps : $54313ca8ab1dbd89$var$Ci(b.type, c.memoizedProps);
                                d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                            }
                        }
                        var f = b.updateQueue;
                        null !== f && $54313ca8ab1dbd89$var$sh(b, f, d);
                        break;
                    case 3:
                        var g = b.updateQueue;
                        if (null !== g) {
                            c = null;
                            if (null !== b.child) switch(b.child.tag){
                                case 5:
                                    c = b.child.stateNode;
                                    break;
                                case 1:
                                    c = b.child.stateNode;
                            }
                            $54313ca8ab1dbd89$var$sh(b, g, c);
                        }
                        break;
                    case 5:
                        var h = b.stateNode;
                        if (null === c && b.flags & 4) {
                            c = h;
                            var k = b.memoizedProps;
                            switch(b.type){
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    k.autoFocus && c.focus();
                                    break;
                                case "img":
                                    k.src && (c.src = k.src);
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (null === b.memoizedState) {
                            var l = b.alternate;
                            if (null !== l) {
                                var m = l.memoizedState;
                                if (null !== m) {
                                    var q = m.dehydrated;
                                    null !== q && $54313ca8ab1dbd89$var$bd(q);
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error($54313ca8ab1dbd89$var$p(163));
                }
                $54313ca8ab1dbd89$var$U || b.flags & 512 && $54313ca8ab1dbd89$var$Rj(b);
            } catch (r) {
                $54313ca8ab1dbd89$var$W(b, b.return, r);
            }
        }
        if (b === a) {
            $54313ca8ab1dbd89$var$V = null;
            break;
        }
        c = b.sibling;
        if (null !== c) {
            c.return = b.return;
            $54313ca8ab1dbd89$var$V = c;
            break;
        }
        $54313ca8ab1dbd89$var$V = b.return;
    }
}
function $54313ca8ab1dbd89$var$gk(a) {
    for(; null !== $54313ca8ab1dbd89$var$V;){
        var b = $54313ca8ab1dbd89$var$V;
        if (b === a) {
            $54313ca8ab1dbd89$var$V = null;
            break;
        }
        var c = b.sibling;
        if (null !== c) {
            c.return = b.return;
            $54313ca8ab1dbd89$var$V = c;
            break;
        }
        $54313ca8ab1dbd89$var$V = b.return;
    }
}
function $54313ca8ab1dbd89$var$jk(a) {
    for(; null !== $54313ca8ab1dbd89$var$V;){
        var b = $54313ca8ab1dbd89$var$V;
        try {
            switch(b.tag){
                case 0:
                case 11:
                case 15:
                    var c = b.return;
                    try {
                        $54313ca8ab1dbd89$var$Qj(4, b);
                    } catch (k) {
                        $54313ca8ab1dbd89$var$W(b, c, k);
                    }
                    break;
                case 1:
                    var d = b.stateNode;
                    if ("function" === typeof d.componentDidMount) {
                        var e = b.return;
                        try {
                            d.componentDidMount();
                        } catch (k) {
                            $54313ca8ab1dbd89$var$W(b, e, k);
                        }
                    }
                    var f = b.return;
                    try {
                        $54313ca8ab1dbd89$var$Rj(b);
                    } catch (k) {
                        $54313ca8ab1dbd89$var$W(b, f, k);
                    }
                    break;
                case 5:
                    var g = b.return;
                    try {
                        $54313ca8ab1dbd89$var$Rj(b);
                    } catch (k) {
                        $54313ca8ab1dbd89$var$W(b, g, k);
                    }
            }
        } catch (k) {
            $54313ca8ab1dbd89$var$W(b, b.return, k);
        }
        if (b === a) {
            $54313ca8ab1dbd89$var$V = null;
            break;
        }
        var h = b.sibling;
        if (null !== h) {
            h.return = b.return;
            $54313ca8ab1dbd89$var$V = h;
            break;
        }
        $54313ca8ab1dbd89$var$V = b.return;
    }
}
var $54313ca8ab1dbd89$var$lk = Math.ceil, $54313ca8ab1dbd89$var$mk = $54313ca8ab1dbd89$var$ua.ReactCurrentDispatcher, $54313ca8ab1dbd89$var$nk = $54313ca8ab1dbd89$var$ua.ReactCurrentOwner, $54313ca8ab1dbd89$var$ok = $54313ca8ab1dbd89$var$ua.ReactCurrentBatchConfig, $54313ca8ab1dbd89$var$K = 0, $54313ca8ab1dbd89$var$Q = null, $54313ca8ab1dbd89$var$Y = null, $54313ca8ab1dbd89$var$Z = 0, $54313ca8ab1dbd89$var$fj = 0, $54313ca8ab1dbd89$var$ej = $54313ca8ab1dbd89$var$Uf(0), $54313ca8ab1dbd89$var$T = 0, $54313ca8ab1dbd89$var$pk = null, $54313ca8ab1dbd89$var$rh = 0, $54313ca8ab1dbd89$var$qk = 0, $54313ca8ab1dbd89$var$rk = 0, $54313ca8ab1dbd89$var$sk = null, $54313ca8ab1dbd89$var$tk = null, $54313ca8ab1dbd89$var$fk = 0, $54313ca8ab1dbd89$var$Gj = Infinity, $54313ca8ab1dbd89$var$uk = null, $54313ca8ab1dbd89$var$Oi = !1, $54313ca8ab1dbd89$var$Pi = null, $54313ca8ab1dbd89$var$Ri = null, $54313ca8ab1dbd89$var$vk = !1, $54313ca8ab1dbd89$var$wk = null, $54313ca8ab1dbd89$var$xk = 0, $54313ca8ab1dbd89$var$yk = 0, $54313ca8ab1dbd89$var$zk = null, $54313ca8ab1dbd89$var$Ak = -1, $54313ca8ab1dbd89$var$Bk = 0;
function $54313ca8ab1dbd89$var$R() {
    return 0 !== ($54313ca8ab1dbd89$var$K & 6) ? $54313ca8ab1dbd89$var$B() : -1 !== $54313ca8ab1dbd89$var$Ak ? $54313ca8ab1dbd89$var$Ak : $54313ca8ab1dbd89$var$Ak = $54313ca8ab1dbd89$var$B();
}
function $54313ca8ab1dbd89$var$yi(a) {
    if (0 === (a.mode & 1)) return 1;
    if (0 !== ($54313ca8ab1dbd89$var$K & 2) && 0 !== $54313ca8ab1dbd89$var$Z) return $54313ca8ab1dbd89$var$Z & -$54313ca8ab1dbd89$var$Z;
    if (null !== $54313ca8ab1dbd89$var$Kg.transition) return 0 === $54313ca8ab1dbd89$var$Bk && ($54313ca8ab1dbd89$var$Bk = $54313ca8ab1dbd89$var$yc()), $54313ca8ab1dbd89$var$Bk;
    a = $54313ca8ab1dbd89$var$C;
    if (0 !== a) return a;
    a = window.event;
    a = void 0 === a ? 16 : $54313ca8ab1dbd89$var$jd(a.type);
    return a;
}
function $54313ca8ab1dbd89$var$gi(a, b, c, d) {
    if (50 < $54313ca8ab1dbd89$var$yk) throw $54313ca8ab1dbd89$var$yk = 0, $54313ca8ab1dbd89$var$zk = null, Error($54313ca8ab1dbd89$var$p(185));
    $54313ca8ab1dbd89$var$Ac(a, c, d);
    if (0 === ($54313ca8ab1dbd89$var$K & 2) || a !== $54313ca8ab1dbd89$var$Q) a === $54313ca8ab1dbd89$var$Q && (0 === ($54313ca8ab1dbd89$var$K & 2) && ($54313ca8ab1dbd89$var$qk |= c), 4 === $54313ca8ab1dbd89$var$T && $54313ca8ab1dbd89$var$Ck(a, $54313ca8ab1dbd89$var$Z)), $54313ca8ab1dbd89$var$Dk(a, d), 1 === c && 0 === $54313ca8ab1dbd89$var$K && 0 === (b.mode & 1) && ($54313ca8ab1dbd89$var$Gj = $54313ca8ab1dbd89$var$B() + 500, $54313ca8ab1dbd89$var$fg && $54313ca8ab1dbd89$var$jg());
}
function $54313ca8ab1dbd89$var$Dk(a, b) {
    var c = a.callbackNode;
    $54313ca8ab1dbd89$var$wc(a, b);
    var d = $54313ca8ab1dbd89$var$uc(a, a === $54313ca8ab1dbd89$var$Q ? $54313ca8ab1dbd89$var$Z : 0);
    if (0 === d) null !== c && $54313ca8ab1dbd89$var$bc(c), a.callbackNode = null, a.callbackPriority = 0;
    else if (b = d & -d, a.callbackPriority !== b) {
        null != c && $54313ca8ab1dbd89$var$bc(c);
        if (1 === b) 0 === a.tag ? $54313ca8ab1dbd89$var$ig($54313ca8ab1dbd89$var$Ek.bind(null, a)) : $54313ca8ab1dbd89$var$hg($54313ca8ab1dbd89$var$Ek.bind(null, a)), $54313ca8ab1dbd89$var$Jf(function() {
            0 === ($54313ca8ab1dbd89$var$K & 6) && $54313ca8ab1dbd89$var$jg();
        }), c = null;
        else {
            switch($54313ca8ab1dbd89$var$Dc(d)){
                case 1:
                    c = $54313ca8ab1dbd89$var$fc;
                    break;
                case 4:
                    c = $54313ca8ab1dbd89$var$gc;
                    break;
                case 16:
                    c = $54313ca8ab1dbd89$var$hc;
                    break;
                case 536870912:
                    c = $54313ca8ab1dbd89$var$jc;
                    break;
                default:
                    c = $54313ca8ab1dbd89$var$hc;
            }
            c = $54313ca8ab1dbd89$var$Fk(c, $54313ca8ab1dbd89$var$Gk.bind(null, a));
        }
        a.callbackPriority = b;
        a.callbackNode = c;
    }
}
function $54313ca8ab1dbd89$var$Gk(a, b) {
    $54313ca8ab1dbd89$var$Ak = -1;
    $54313ca8ab1dbd89$var$Bk = 0;
    if (0 !== ($54313ca8ab1dbd89$var$K & 6)) throw Error($54313ca8ab1dbd89$var$p(327));
    var c = a.callbackNode;
    if ($54313ca8ab1dbd89$var$Hk() && a.callbackNode !== c) return null;
    var d = $54313ca8ab1dbd89$var$uc(a, a === $54313ca8ab1dbd89$var$Q ? $54313ca8ab1dbd89$var$Z : 0);
    if (0 === d) return null;
    if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = $54313ca8ab1dbd89$var$Ik(a, d);
    else {
        b = d;
        var e = $54313ca8ab1dbd89$var$K;
        $54313ca8ab1dbd89$var$K |= 2;
        var f = $54313ca8ab1dbd89$var$Jk();
        if ($54313ca8ab1dbd89$var$Q !== a || $54313ca8ab1dbd89$var$Z !== b) $54313ca8ab1dbd89$var$uk = null, $54313ca8ab1dbd89$var$Gj = $54313ca8ab1dbd89$var$B() + 500, $54313ca8ab1dbd89$var$Kk(a, b);
        for(;;)try {
            $54313ca8ab1dbd89$var$Lk();
            break;
        } catch (h) {
            $54313ca8ab1dbd89$var$Mk(a, h);
        }
        $54313ca8ab1dbd89$var$$g();
        $54313ca8ab1dbd89$var$mk.current = f;
        $54313ca8ab1dbd89$var$K = e;
        null !== $54313ca8ab1dbd89$var$Y ? b = 0 : ($54313ca8ab1dbd89$var$Q = null, $54313ca8ab1dbd89$var$Z = 0, b = $54313ca8ab1dbd89$var$T);
    }
    if (0 !== b) {
        2 === b && (e = $54313ca8ab1dbd89$var$xc(a), 0 !== e && (d = e, b = $54313ca8ab1dbd89$var$Nk(a, e)));
        if (1 === b) throw c = $54313ca8ab1dbd89$var$pk, $54313ca8ab1dbd89$var$Kk(a, 0), $54313ca8ab1dbd89$var$Ck(a, d), $54313ca8ab1dbd89$var$Dk(a, $54313ca8ab1dbd89$var$B()), c;
        if (6 === b) $54313ca8ab1dbd89$var$Ck(a, d);
        else {
            e = a.current.alternate;
            if (0 === (d & 30) && !$54313ca8ab1dbd89$var$Ok(e) && (b = $54313ca8ab1dbd89$var$Ik(a, d), 2 === b && (f = $54313ca8ab1dbd89$var$xc(a), 0 !== f && (d = f, b = $54313ca8ab1dbd89$var$Nk(a, f))), 1 === b)) throw c = $54313ca8ab1dbd89$var$pk, $54313ca8ab1dbd89$var$Kk(a, 0), $54313ca8ab1dbd89$var$Ck(a, d), $54313ca8ab1dbd89$var$Dk(a, $54313ca8ab1dbd89$var$B()), c;
            a.finishedWork = e;
            a.finishedLanes = d;
            switch(b){
                case 0:
                case 1:
                    throw Error($54313ca8ab1dbd89$var$p(345));
                case 2:
                    $54313ca8ab1dbd89$var$Pk(a, $54313ca8ab1dbd89$var$tk, $54313ca8ab1dbd89$var$uk);
                    break;
                case 3:
                    $54313ca8ab1dbd89$var$Ck(a, d);
                    if ((d & 130023424) === d && (b = $54313ca8ab1dbd89$var$fk + 500 - $54313ca8ab1dbd89$var$B(), 10 < b)) {
                        if (0 !== $54313ca8ab1dbd89$var$uc(a, 0)) break;
                        e = a.suspendedLanes;
                        if ((e & d) !== d) {
                            $54313ca8ab1dbd89$var$R();
                            a.pingedLanes |= a.suspendedLanes & e;
                            break;
                        }
                        a.timeoutHandle = $54313ca8ab1dbd89$var$Ff($54313ca8ab1dbd89$var$Pk.bind(null, a, $54313ca8ab1dbd89$var$tk, $54313ca8ab1dbd89$var$uk), b);
                        break;
                    }
                    $54313ca8ab1dbd89$var$Pk(a, $54313ca8ab1dbd89$var$tk, $54313ca8ab1dbd89$var$uk);
                    break;
                case 4:
                    $54313ca8ab1dbd89$var$Ck(a, d);
                    if ((d & 4194240) === d) break;
                    b = a.eventTimes;
                    for(e = -1; 0 < d;){
                        var g = 31 - $54313ca8ab1dbd89$var$oc(d);
                        f = 1 << g;
                        g = b[g];
                        g > e && (e = g);
                        d &= ~f;
                    }
                    d = e;
                    d = $54313ca8ab1dbd89$var$B() - d;
                    d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3E3 > d ? 3E3 : 4320 > d ? 4320 : 1960 * $54313ca8ab1dbd89$var$lk(d / 1960)) - d;
                    if (10 < d) {
                        a.timeoutHandle = $54313ca8ab1dbd89$var$Ff($54313ca8ab1dbd89$var$Pk.bind(null, a, $54313ca8ab1dbd89$var$tk, $54313ca8ab1dbd89$var$uk), d);
                        break;
                    }
                    $54313ca8ab1dbd89$var$Pk(a, $54313ca8ab1dbd89$var$tk, $54313ca8ab1dbd89$var$uk);
                    break;
                case 5:
                    $54313ca8ab1dbd89$var$Pk(a, $54313ca8ab1dbd89$var$tk, $54313ca8ab1dbd89$var$uk);
                    break;
                default:
                    throw Error($54313ca8ab1dbd89$var$p(329));
            }
        }
    }
    $54313ca8ab1dbd89$var$Dk(a, $54313ca8ab1dbd89$var$B());
    return a.callbackNode === c ? $54313ca8ab1dbd89$var$Gk.bind(null, a) : null;
}
function $54313ca8ab1dbd89$var$Nk(a, b) {
    var c = $54313ca8ab1dbd89$var$sk;
    a.current.memoizedState.isDehydrated && ($54313ca8ab1dbd89$var$Kk(a, b).flags |= 256);
    a = $54313ca8ab1dbd89$var$Ik(a, b);
    2 !== a && (b = $54313ca8ab1dbd89$var$tk, $54313ca8ab1dbd89$var$tk = c, null !== b && $54313ca8ab1dbd89$var$Fj(b));
    return a;
}
function $54313ca8ab1dbd89$var$Fj(a) {
    null === $54313ca8ab1dbd89$var$tk ? $54313ca8ab1dbd89$var$tk = a : $54313ca8ab1dbd89$var$tk.push.apply($54313ca8ab1dbd89$var$tk, a);
}
function $54313ca8ab1dbd89$var$Ok(a) {
    for(var b = a;;){
        if (b.flags & 16384) {
            var c = b.updateQueue;
            if (null !== c && (c = c.stores, null !== c)) for(var d = 0; d < c.length; d++){
                var e = c[d], f = e.getSnapshot;
                e = e.value;
                try {
                    if (!$54313ca8ab1dbd89$var$He(f(), e)) return !1;
                } catch (g) {
                    return !1;
                }
            }
        }
        c = b.child;
        if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;
        else {
            if (b === a) break;
            for(; null === b.sibling;){
                if (null === b.return || b.return === a) return !0;
                b = b.return;
            }
            b.sibling.return = b.return;
            b = b.sibling;
        }
    }
    return !0;
}
function $54313ca8ab1dbd89$var$Ck(a, b) {
    b &= ~$54313ca8ab1dbd89$var$rk;
    b &= ~$54313ca8ab1dbd89$var$qk;
    a.suspendedLanes |= b;
    a.pingedLanes &= ~b;
    for(a = a.expirationTimes; 0 < b;){
        var c = 31 - $54313ca8ab1dbd89$var$oc(b), d = 1 << c;
        a[c] = -1;
        b &= ~d;
    }
}
function $54313ca8ab1dbd89$var$Ek(a) {
    if (0 !== ($54313ca8ab1dbd89$var$K & 6)) throw Error($54313ca8ab1dbd89$var$p(327));
    $54313ca8ab1dbd89$var$Hk();
    var b = $54313ca8ab1dbd89$var$uc(a, 0);
    if (0 === (b & 1)) return $54313ca8ab1dbd89$var$Dk(a, $54313ca8ab1dbd89$var$B()), null;
    var c = $54313ca8ab1dbd89$var$Ik(a, b);
    if (0 !== a.tag && 2 === c) {
        var d = $54313ca8ab1dbd89$var$xc(a);
        0 !== d && (b = d, c = $54313ca8ab1dbd89$var$Nk(a, d));
    }
    if (1 === c) throw c = $54313ca8ab1dbd89$var$pk, $54313ca8ab1dbd89$var$Kk(a, 0), $54313ca8ab1dbd89$var$Ck(a, b), $54313ca8ab1dbd89$var$Dk(a, $54313ca8ab1dbd89$var$B()), c;
    if (6 === c) throw Error($54313ca8ab1dbd89$var$p(345));
    a.finishedWork = a.current.alternate;
    a.finishedLanes = b;
    $54313ca8ab1dbd89$var$Pk(a, $54313ca8ab1dbd89$var$tk, $54313ca8ab1dbd89$var$uk);
    $54313ca8ab1dbd89$var$Dk(a, $54313ca8ab1dbd89$var$B());
    return null;
}
function $54313ca8ab1dbd89$var$Qk(a, b) {
    var c = $54313ca8ab1dbd89$var$K;
    $54313ca8ab1dbd89$var$K |= 1;
    try {
        return a(b);
    } finally{
        $54313ca8ab1dbd89$var$K = c, 0 === $54313ca8ab1dbd89$var$K && ($54313ca8ab1dbd89$var$Gj = $54313ca8ab1dbd89$var$B() + 500, $54313ca8ab1dbd89$var$fg && $54313ca8ab1dbd89$var$jg());
    }
}
function $54313ca8ab1dbd89$var$Rk(a) {
    null !== $54313ca8ab1dbd89$var$wk && 0 === $54313ca8ab1dbd89$var$wk.tag && 0 === ($54313ca8ab1dbd89$var$K & 6) && $54313ca8ab1dbd89$var$Hk();
    var b = $54313ca8ab1dbd89$var$K;
    $54313ca8ab1dbd89$var$K |= 1;
    var c = $54313ca8ab1dbd89$var$ok.transition, d = $54313ca8ab1dbd89$var$C;
    try {
        if ($54313ca8ab1dbd89$var$ok.transition = null, $54313ca8ab1dbd89$var$C = 1, a) return a();
    } finally{
        $54313ca8ab1dbd89$var$C = d, $54313ca8ab1dbd89$var$ok.transition = c, $54313ca8ab1dbd89$var$K = b, 0 === ($54313ca8ab1dbd89$var$K & 6) && $54313ca8ab1dbd89$var$jg();
    }
}
function $54313ca8ab1dbd89$var$Hj() {
    $54313ca8ab1dbd89$var$fj = $54313ca8ab1dbd89$var$ej.current;
    $54313ca8ab1dbd89$var$E($54313ca8ab1dbd89$var$ej);
}
function $54313ca8ab1dbd89$var$Kk(a, b) {
    a.finishedWork = null;
    a.finishedLanes = 0;
    var c = a.timeoutHandle;
    -1 !== c && (a.timeoutHandle = -1, $54313ca8ab1dbd89$var$Gf(c));
    if (null !== $54313ca8ab1dbd89$var$Y) for(c = $54313ca8ab1dbd89$var$Y.return; null !== c;){
        var d = c;
        $54313ca8ab1dbd89$var$wg(d);
        switch(d.tag){
            case 1:
                d = d.type.childContextTypes;
                null !== d && void 0 !== d && $54313ca8ab1dbd89$var$$f();
                break;
            case 3:
                $54313ca8ab1dbd89$var$zh();
                $54313ca8ab1dbd89$var$E($54313ca8ab1dbd89$var$Wf);
                $54313ca8ab1dbd89$var$E($54313ca8ab1dbd89$var$H);
                $54313ca8ab1dbd89$var$Eh();
                break;
            case 5:
                $54313ca8ab1dbd89$var$Bh(d);
                break;
            case 4:
                $54313ca8ab1dbd89$var$zh();
                break;
            case 13:
                $54313ca8ab1dbd89$var$E($54313ca8ab1dbd89$var$L);
                break;
            case 19:
                $54313ca8ab1dbd89$var$E($54313ca8ab1dbd89$var$L);
                break;
            case 10:
                $54313ca8ab1dbd89$var$ah(d.type._context);
                break;
            case 22:
            case 23:
                $54313ca8ab1dbd89$var$Hj();
        }
        c = c.return;
    }
    $54313ca8ab1dbd89$var$Q = a;
    $54313ca8ab1dbd89$var$Y = a = $54313ca8ab1dbd89$var$Pg(a.current, null);
    $54313ca8ab1dbd89$var$Z = $54313ca8ab1dbd89$var$fj = b;
    $54313ca8ab1dbd89$var$T = 0;
    $54313ca8ab1dbd89$var$pk = null;
    $54313ca8ab1dbd89$var$rk = $54313ca8ab1dbd89$var$qk = $54313ca8ab1dbd89$var$rh = 0;
    $54313ca8ab1dbd89$var$tk = $54313ca8ab1dbd89$var$sk = null;
    if (null !== $54313ca8ab1dbd89$var$fh) {
        for(b = 0; b < $54313ca8ab1dbd89$var$fh.length; b++)if (c = $54313ca8ab1dbd89$var$fh[b], d = c.interleaved, null !== d) {
            c.interleaved = null;
            var e = d.next, f = c.pending;
            if (null !== f) {
                var g = f.next;
                f.next = e;
                d.next = g;
            }
            c.pending = d;
        }
        $54313ca8ab1dbd89$var$fh = null;
    }
    return a;
}
function $54313ca8ab1dbd89$var$Mk(a, b) {
    do {
        var c = $54313ca8ab1dbd89$var$Y;
        try {
            $54313ca8ab1dbd89$var$$g();
            $54313ca8ab1dbd89$var$Fh.current = $54313ca8ab1dbd89$var$Rh;
            if ($54313ca8ab1dbd89$var$Ih) {
                for(var d = $54313ca8ab1dbd89$var$M.memoizedState; null !== d;){
                    var e = d.queue;
                    null !== e && (e.pending = null);
                    d = d.next;
                }
                $54313ca8ab1dbd89$var$Ih = !1;
            }
            $54313ca8ab1dbd89$var$Hh = 0;
            $54313ca8ab1dbd89$var$O = $54313ca8ab1dbd89$var$N = $54313ca8ab1dbd89$var$M = null;
            $54313ca8ab1dbd89$var$Jh = !1;
            $54313ca8ab1dbd89$var$Kh = 0;
            $54313ca8ab1dbd89$var$nk.current = null;
            if (null === c || null === c.return) {
                $54313ca8ab1dbd89$var$T = 1;
                $54313ca8ab1dbd89$var$pk = b;
                $54313ca8ab1dbd89$var$Y = null;
                break;
            }
            a: {
                var f = a, g = c.return, h = c, k = b;
                b = $54313ca8ab1dbd89$var$Z;
                h.flags |= 32768;
                if (null !== k && "object" === typeof k && "function" === typeof k.then) {
                    var l = k, m = h, q = m.tag;
                    if (0 === (m.mode & 1) && (0 === q || 11 === q || 15 === q)) {
                        var r = m.alternate;
                        r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, m.memoizedState = null);
                    }
                    var y = $54313ca8ab1dbd89$var$Ui(g);
                    if (null !== y) {
                        y.flags &= -257;
                        $54313ca8ab1dbd89$var$Vi(y, g, h, f, b);
                        y.mode & 1 && $54313ca8ab1dbd89$var$Si(f, l, b);
                        b = y;
                        k = l;
                        var n = b.updateQueue;
                        if (null === n) {
                            var t = new Set;
                            t.add(k);
                            b.updateQueue = t;
                        } else n.add(k);
                        break a;
                    } else {
                        if (0 === (b & 1)) {
                            $54313ca8ab1dbd89$var$Si(f, l, b);
                            $54313ca8ab1dbd89$var$tj();
                            break a;
                        }
                        k = Error($54313ca8ab1dbd89$var$p(426));
                    }
                } else if ($54313ca8ab1dbd89$var$I && h.mode & 1) {
                    var J = $54313ca8ab1dbd89$var$Ui(g);
                    if (null !== J) {
                        0 === (J.flags & 65536) && (J.flags |= 256);
                        $54313ca8ab1dbd89$var$Vi(J, g, h, f, b);
                        $54313ca8ab1dbd89$var$Jg($54313ca8ab1dbd89$var$Ji(k, h));
                        break a;
                    }
                }
                f = k = $54313ca8ab1dbd89$var$Ji(k, h);
                4 !== $54313ca8ab1dbd89$var$T && ($54313ca8ab1dbd89$var$T = 2);
                null === $54313ca8ab1dbd89$var$sk ? $54313ca8ab1dbd89$var$sk = [
                    f
                ] : $54313ca8ab1dbd89$var$sk.push(f);
                f = g;
                do {
                    switch(f.tag){
                        case 3:
                            f.flags |= 65536;
                            b &= -b;
                            f.lanes |= b;
                            var x = $54313ca8ab1dbd89$var$Ni(f, k, b);
                            $54313ca8ab1dbd89$var$ph(f, x);
                            break a;
                        case 1:
                            h = k;
                            var w = f.type, u = f.stateNode;
                            if (0 === (f.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === $54313ca8ab1dbd89$var$Ri || !$54313ca8ab1dbd89$var$Ri.has(u)))) {
                                f.flags |= 65536;
                                b &= -b;
                                f.lanes |= b;
                                var F = $54313ca8ab1dbd89$var$Qi(f, h, b);
                                $54313ca8ab1dbd89$var$ph(f, F);
                                break a;
                            }
                    }
                    f = f.return;
                }while (null !== f);
            }
            $54313ca8ab1dbd89$var$Sk(c);
        } catch (na) {
            b = na;
            $54313ca8ab1dbd89$var$Y === c && null !== c && ($54313ca8ab1dbd89$var$Y = c = c.return);
            continue;
        }
        break;
    }while (1);
}
function $54313ca8ab1dbd89$var$Jk() {
    var a = $54313ca8ab1dbd89$var$mk.current;
    $54313ca8ab1dbd89$var$mk.current = $54313ca8ab1dbd89$var$Rh;
    return null === a ? $54313ca8ab1dbd89$var$Rh : a;
}
function $54313ca8ab1dbd89$var$tj() {
    if (0 === $54313ca8ab1dbd89$var$T || 3 === $54313ca8ab1dbd89$var$T || 2 === $54313ca8ab1dbd89$var$T) $54313ca8ab1dbd89$var$T = 4;
    null === $54313ca8ab1dbd89$var$Q || 0 === ($54313ca8ab1dbd89$var$rh & 268435455) && 0 === ($54313ca8ab1dbd89$var$qk & 268435455) || $54313ca8ab1dbd89$var$Ck($54313ca8ab1dbd89$var$Q, $54313ca8ab1dbd89$var$Z);
}
function $54313ca8ab1dbd89$var$Ik(a, b) {
    var c = $54313ca8ab1dbd89$var$K;
    $54313ca8ab1dbd89$var$K |= 2;
    var d = $54313ca8ab1dbd89$var$Jk();
    if ($54313ca8ab1dbd89$var$Q !== a || $54313ca8ab1dbd89$var$Z !== b) $54313ca8ab1dbd89$var$uk = null, $54313ca8ab1dbd89$var$Kk(a, b);
    for(;;)try {
        $54313ca8ab1dbd89$var$Tk();
        break;
    } catch (e) {
        $54313ca8ab1dbd89$var$Mk(a, e);
    }
    $54313ca8ab1dbd89$var$$g();
    $54313ca8ab1dbd89$var$K = c;
    $54313ca8ab1dbd89$var$mk.current = d;
    if (null !== $54313ca8ab1dbd89$var$Y) throw Error($54313ca8ab1dbd89$var$p(261));
    $54313ca8ab1dbd89$var$Q = null;
    $54313ca8ab1dbd89$var$Z = 0;
    return $54313ca8ab1dbd89$var$T;
}
function $54313ca8ab1dbd89$var$Tk() {
    for(; null !== $54313ca8ab1dbd89$var$Y;)$54313ca8ab1dbd89$var$Uk($54313ca8ab1dbd89$var$Y);
}
function $54313ca8ab1dbd89$var$Lk() {
    for(; null !== $54313ca8ab1dbd89$var$Y && !$54313ca8ab1dbd89$var$cc();)$54313ca8ab1dbd89$var$Uk($54313ca8ab1dbd89$var$Y);
}
function $54313ca8ab1dbd89$var$Uk(a) {
    var b = $54313ca8ab1dbd89$var$Vk(a.alternate, a, $54313ca8ab1dbd89$var$fj);
    a.memoizedProps = a.pendingProps;
    null === b ? $54313ca8ab1dbd89$var$Sk(a) : $54313ca8ab1dbd89$var$Y = b;
    $54313ca8ab1dbd89$var$nk.current = null;
}
function $54313ca8ab1dbd89$var$Sk(a) {
    var b = a;
    do {
        var c = b.alternate;
        a = b.return;
        if (0 === (b.flags & 32768)) {
            if (c = $54313ca8ab1dbd89$var$Ej(c, b, $54313ca8ab1dbd89$var$fj), null !== c) {
                $54313ca8ab1dbd89$var$Y = c;
                return;
            }
        } else {
            c = $54313ca8ab1dbd89$var$Ij(c, b);
            if (null !== c) {
                c.flags &= 32767;
                $54313ca8ab1dbd89$var$Y = c;
                return;
            }
            if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
            else {
                $54313ca8ab1dbd89$var$T = 6;
                $54313ca8ab1dbd89$var$Y = null;
                return;
            }
        }
        b = b.sibling;
        if (null !== b) {
            $54313ca8ab1dbd89$var$Y = b;
            return;
        }
        $54313ca8ab1dbd89$var$Y = b = a;
    }while (null !== b);
    0 === $54313ca8ab1dbd89$var$T && ($54313ca8ab1dbd89$var$T = 5);
}
function $54313ca8ab1dbd89$var$Pk(a, b, c) {
    var d = $54313ca8ab1dbd89$var$C, e = $54313ca8ab1dbd89$var$ok.transition;
    try {
        $54313ca8ab1dbd89$var$ok.transition = null, $54313ca8ab1dbd89$var$C = 1, $54313ca8ab1dbd89$var$Wk(a, b, c, d);
    } finally{
        $54313ca8ab1dbd89$var$ok.transition = e, $54313ca8ab1dbd89$var$C = d;
    }
    return null;
}
function $54313ca8ab1dbd89$var$Wk(a, b, c, d) {
    do $54313ca8ab1dbd89$var$Hk();
    while (null !== $54313ca8ab1dbd89$var$wk);
    if (0 !== ($54313ca8ab1dbd89$var$K & 6)) throw Error($54313ca8ab1dbd89$var$p(327));
    c = a.finishedWork;
    var e = a.finishedLanes;
    if (null === c) return null;
    a.finishedWork = null;
    a.finishedLanes = 0;
    if (c === a.current) throw Error($54313ca8ab1dbd89$var$p(177));
    a.callbackNode = null;
    a.callbackPriority = 0;
    var f = c.lanes | c.childLanes;
    $54313ca8ab1dbd89$var$Bc(a, f);
    a === $54313ca8ab1dbd89$var$Q && ($54313ca8ab1dbd89$var$Y = $54313ca8ab1dbd89$var$Q = null, $54313ca8ab1dbd89$var$Z = 0);
    0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || $54313ca8ab1dbd89$var$vk || ($54313ca8ab1dbd89$var$vk = !0, $54313ca8ab1dbd89$var$Fk($54313ca8ab1dbd89$var$hc, function() {
        $54313ca8ab1dbd89$var$Hk();
        return null;
    }));
    f = 0 !== (c.flags & 15990);
    if (0 !== (c.subtreeFlags & 15990) || f) {
        f = $54313ca8ab1dbd89$var$ok.transition;
        $54313ca8ab1dbd89$var$ok.transition = null;
        var g = $54313ca8ab1dbd89$var$C;
        $54313ca8ab1dbd89$var$C = 1;
        var h = $54313ca8ab1dbd89$var$K;
        $54313ca8ab1dbd89$var$K |= 4;
        $54313ca8ab1dbd89$var$nk.current = null;
        $54313ca8ab1dbd89$var$Oj(a, c);
        $54313ca8ab1dbd89$var$dk(c, a);
        $54313ca8ab1dbd89$var$Oe($54313ca8ab1dbd89$var$Df);
        $54313ca8ab1dbd89$var$dd = !!$54313ca8ab1dbd89$var$Cf;
        $54313ca8ab1dbd89$var$Df = $54313ca8ab1dbd89$var$Cf = null;
        a.current = c;
        $54313ca8ab1dbd89$var$hk(c, a, e);
        $54313ca8ab1dbd89$var$dc();
        $54313ca8ab1dbd89$var$K = h;
        $54313ca8ab1dbd89$var$C = g;
        $54313ca8ab1dbd89$var$ok.transition = f;
    } else a.current = c;
    $54313ca8ab1dbd89$var$vk && ($54313ca8ab1dbd89$var$vk = !1, $54313ca8ab1dbd89$var$wk = a, $54313ca8ab1dbd89$var$xk = e);
    f = a.pendingLanes;
    0 === f && ($54313ca8ab1dbd89$var$Ri = null);
    $54313ca8ab1dbd89$var$mc(c.stateNode, d);
    $54313ca8ab1dbd89$var$Dk(a, $54313ca8ab1dbd89$var$B());
    if (null !== b) for(d = a.onRecoverableError, c = 0; c < b.length; c++)e = b[c], d(e.value, {
        componentStack: e.stack,
        digest: e.digest
    });
    if ($54313ca8ab1dbd89$var$Oi) throw $54313ca8ab1dbd89$var$Oi = !1, a = $54313ca8ab1dbd89$var$Pi, $54313ca8ab1dbd89$var$Pi = null, a;
    0 !== ($54313ca8ab1dbd89$var$xk & 1) && 0 !== a.tag && $54313ca8ab1dbd89$var$Hk();
    f = a.pendingLanes;
    0 !== (f & 1) ? a === $54313ca8ab1dbd89$var$zk ? $54313ca8ab1dbd89$var$yk++ : ($54313ca8ab1dbd89$var$yk = 0, $54313ca8ab1dbd89$var$zk = a) : $54313ca8ab1dbd89$var$yk = 0;
    $54313ca8ab1dbd89$var$jg();
    return null;
}
function $54313ca8ab1dbd89$var$Hk() {
    if (null !== $54313ca8ab1dbd89$var$wk) {
        var a = $54313ca8ab1dbd89$var$Dc($54313ca8ab1dbd89$var$xk), b = $54313ca8ab1dbd89$var$ok.transition, c = $54313ca8ab1dbd89$var$C;
        try {
            $54313ca8ab1dbd89$var$ok.transition = null;
            $54313ca8ab1dbd89$var$C = 16 > a ? 16 : a;
            if (null === $54313ca8ab1dbd89$var$wk) var d = !1;
            else {
                a = $54313ca8ab1dbd89$var$wk;
                $54313ca8ab1dbd89$var$wk = null;
                $54313ca8ab1dbd89$var$xk = 0;
                if (0 !== ($54313ca8ab1dbd89$var$K & 6)) throw Error($54313ca8ab1dbd89$var$p(331));
                var e = $54313ca8ab1dbd89$var$K;
                $54313ca8ab1dbd89$var$K |= 4;
                for($54313ca8ab1dbd89$var$V = a.current; null !== $54313ca8ab1dbd89$var$V;){
                    var f = $54313ca8ab1dbd89$var$V, g = f.child;
                    if (0 !== ($54313ca8ab1dbd89$var$V.flags & 16)) {
                        var h = f.deletions;
                        if (null !== h) {
                            for(var k = 0; k < h.length; k++){
                                var l = h[k];
                                for($54313ca8ab1dbd89$var$V = l; null !== $54313ca8ab1dbd89$var$V;){
                                    var m = $54313ca8ab1dbd89$var$V;
                                    switch(m.tag){
                                        case 0:
                                        case 11:
                                        case 15:
                                            $54313ca8ab1dbd89$var$Pj(8, m, f);
                                    }
                                    var q = m.child;
                                    if (null !== q) q.return = m, $54313ca8ab1dbd89$var$V = q;
                                    else for(; null !== $54313ca8ab1dbd89$var$V;){
                                        m = $54313ca8ab1dbd89$var$V;
                                        var r = m.sibling, y = m.return;
                                        $54313ca8ab1dbd89$var$Sj(m);
                                        if (m === l) {
                                            $54313ca8ab1dbd89$var$V = null;
                                            break;
                                        }
                                        if (null !== r) {
                                            r.return = y;
                                            $54313ca8ab1dbd89$var$V = r;
                                            break;
                                        }
                                        $54313ca8ab1dbd89$var$V = y;
                                    }
                                }
                            }
                            var n = f.alternate;
                            if (null !== n) {
                                var t = n.child;
                                if (null !== t) {
                                    n.child = null;
                                    do {
                                        var J = t.sibling;
                                        t.sibling = null;
                                        t = J;
                                    }while (null !== t);
                                }
                            }
                            $54313ca8ab1dbd89$var$V = f;
                        }
                    }
                    if (0 !== (f.subtreeFlags & 2064) && null !== g) g.return = f, $54313ca8ab1dbd89$var$V = g;
                    else b: for(; null !== $54313ca8ab1dbd89$var$V;){
                        f = $54313ca8ab1dbd89$var$V;
                        if (0 !== (f.flags & 2048)) switch(f.tag){
                            case 0:
                            case 11:
                            case 15:
                                $54313ca8ab1dbd89$var$Pj(9, f, f.return);
                        }
                        var x = f.sibling;
                        if (null !== x) {
                            x.return = f.return;
                            $54313ca8ab1dbd89$var$V = x;
                            break b;
                        }
                        $54313ca8ab1dbd89$var$V = f.return;
                    }
                }
                var w = a.current;
                for($54313ca8ab1dbd89$var$V = w; null !== $54313ca8ab1dbd89$var$V;){
                    g = $54313ca8ab1dbd89$var$V;
                    var u = g.child;
                    if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, $54313ca8ab1dbd89$var$V = u;
                    else b: for(g = w; null !== $54313ca8ab1dbd89$var$V;){
                        h = $54313ca8ab1dbd89$var$V;
                        if (0 !== (h.flags & 2048)) try {
                            switch(h.tag){
                                case 0:
                                case 11:
                                case 15:
                                    $54313ca8ab1dbd89$var$Qj(9, h);
                            }
                        } catch (na) {
                            $54313ca8ab1dbd89$var$W(h, h.return, na);
                        }
                        if (h === g) {
                            $54313ca8ab1dbd89$var$V = null;
                            break b;
                        }
                        var F = h.sibling;
                        if (null !== F) {
                            F.return = h.return;
                            $54313ca8ab1dbd89$var$V = F;
                            break b;
                        }
                        $54313ca8ab1dbd89$var$V = h.return;
                    }
                }
                $54313ca8ab1dbd89$var$K = e;
                $54313ca8ab1dbd89$var$jg();
                if ($54313ca8ab1dbd89$var$lc && "function" === typeof $54313ca8ab1dbd89$var$lc.onPostCommitFiberRoot) try {
                    $54313ca8ab1dbd89$var$lc.onPostCommitFiberRoot($54313ca8ab1dbd89$var$kc, a);
                } catch (na) {}
                d = !0;
            }
            return d;
        } finally{
            $54313ca8ab1dbd89$var$C = c, $54313ca8ab1dbd89$var$ok.transition = b;
        }
    }
    return !1;
}
function $54313ca8ab1dbd89$var$Xk(a, b, c) {
    b = $54313ca8ab1dbd89$var$Ji(c, b);
    b = $54313ca8ab1dbd89$var$Ni(a, b, 1);
    a = $54313ca8ab1dbd89$var$nh(a, b, 1);
    b = $54313ca8ab1dbd89$var$R();
    null !== a && ($54313ca8ab1dbd89$var$Ac(a, 1, b), $54313ca8ab1dbd89$var$Dk(a, b));
}
function $54313ca8ab1dbd89$var$W(a, b, c) {
    if (3 === a.tag) $54313ca8ab1dbd89$var$Xk(a, a, c);
    else for(; null !== b;){
        if (3 === b.tag) {
            $54313ca8ab1dbd89$var$Xk(b, a, c);
            break;
        } else if (1 === b.tag) {
            var d = b.stateNode;
            if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === $54313ca8ab1dbd89$var$Ri || !$54313ca8ab1dbd89$var$Ri.has(d))) {
                a = $54313ca8ab1dbd89$var$Ji(c, a);
                a = $54313ca8ab1dbd89$var$Qi(b, a, 1);
                b = $54313ca8ab1dbd89$var$nh(b, a, 1);
                a = $54313ca8ab1dbd89$var$R();
                null !== b && ($54313ca8ab1dbd89$var$Ac(b, 1, a), $54313ca8ab1dbd89$var$Dk(b, a));
                break;
            }
        }
        b = b.return;
    }
}
function $54313ca8ab1dbd89$var$Ti(a, b, c) {
    var d = a.pingCache;
    null !== d && d.delete(b);
    b = $54313ca8ab1dbd89$var$R();
    a.pingedLanes |= a.suspendedLanes & c;
    $54313ca8ab1dbd89$var$Q === a && ($54313ca8ab1dbd89$var$Z & c) === c && (4 === $54313ca8ab1dbd89$var$T || 3 === $54313ca8ab1dbd89$var$T && ($54313ca8ab1dbd89$var$Z & 130023424) === $54313ca8ab1dbd89$var$Z && 500 > $54313ca8ab1dbd89$var$B() - $54313ca8ab1dbd89$var$fk ? $54313ca8ab1dbd89$var$Kk(a, 0) : $54313ca8ab1dbd89$var$rk |= c);
    $54313ca8ab1dbd89$var$Dk(a, b);
}
function $54313ca8ab1dbd89$var$Yk(a, b) {
    0 === b && (0 === (a.mode & 1) ? b = 1 : (b = $54313ca8ab1dbd89$var$sc, $54313ca8ab1dbd89$var$sc <<= 1, 0 === ($54313ca8ab1dbd89$var$sc & 130023424) && ($54313ca8ab1dbd89$var$sc = 4194304)));
    var c = $54313ca8ab1dbd89$var$R();
    a = $54313ca8ab1dbd89$var$ih(a, b);
    null !== a && ($54313ca8ab1dbd89$var$Ac(a, b, c), $54313ca8ab1dbd89$var$Dk(a, c));
}
function $54313ca8ab1dbd89$var$uj(a) {
    var b = a.memoizedState, c = 0;
    null !== b && (c = b.retryLane);
    $54313ca8ab1dbd89$var$Yk(a, c);
}
function $54313ca8ab1dbd89$var$bk(a, b) {
    var c = 0;
    switch(a.tag){
        case 13:
            var d = a.stateNode;
            var e = a.memoizedState;
            null !== e && (c = e.retryLane);
            break;
        case 19:
            d = a.stateNode;
            break;
        default:
            throw Error($54313ca8ab1dbd89$var$p(314));
    }
    null !== d && d.delete(b);
    $54313ca8ab1dbd89$var$Yk(a, c);
}
var $54313ca8ab1dbd89$var$Vk;
$54313ca8ab1dbd89$var$Vk = function(a, b, c) {
    if (null !== a) {
        if (a.memoizedProps !== b.pendingProps || $54313ca8ab1dbd89$var$Wf.current) $54313ca8ab1dbd89$var$dh = !0;
        else {
            if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return $54313ca8ab1dbd89$var$dh = !1, $54313ca8ab1dbd89$var$yj(a, b, c);
            $54313ca8ab1dbd89$var$dh = 0 !== (a.flags & 131072) ? !0 : !1;
        }
    } else $54313ca8ab1dbd89$var$dh = !1, $54313ca8ab1dbd89$var$I && 0 !== (b.flags & 1048576) && $54313ca8ab1dbd89$var$ug(b, $54313ca8ab1dbd89$var$ng, b.index);
    b.lanes = 0;
    switch(b.tag){
        case 2:
            var d = b.type;
            $54313ca8ab1dbd89$var$ij(a, b);
            a = b.pendingProps;
            var e = $54313ca8ab1dbd89$var$Yf(b, $54313ca8ab1dbd89$var$H.current);
            $54313ca8ab1dbd89$var$ch(b, c);
            e = $54313ca8ab1dbd89$var$Nh(null, b, d, a, e, c);
            var f = $54313ca8ab1dbd89$var$Sh();
            b.flags |= 1;
            "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, $54313ca8ab1dbd89$var$Zf(d) ? (f = !0, $54313ca8ab1dbd89$var$cg(b)) : f = !1, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, $54313ca8ab1dbd89$var$kh(b), e.updater = $54313ca8ab1dbd89$var$Ei, b.stateNode = e, e._reactInternals = b, $54313ca8ab1dbd89$var$Ii(b, d, a, c), b = $54313ca8ab1dbd89$var$jj(null, b, d, !0, f, c)) : (b.tag = 0, $54313ca8ab1dbd89$var$I && f && $54313ca8ab1dbd89$var$vg(b), $54313ca8ab1dbd89$var$Xi(null, b, e, c), b = b.child);
            return b;
        case 16:
            d = b.elementType;
            a: {
                $54313ca8ab1dbd89$var$ij(a, b);
                a = b.pendingProps;
                e = d._init;
                d = e(d._payload);
                b.type = d;
                e = b.tag = $54313ca8ab1dbd89$var$Zk(d);
                a = $54313ca8ab1dbd89$var$Ci(d, a);
                switch(e){
                    case 0:
                        b = $54313ca8ab1dbd89$var$cj(null, b, d, a, c);
                        break a;
                    case 1:
                        b = $54313ca8ab1dbd89$var$hj(null, b, d, a, c);
                        break a;
                    case 11:
                        b = $54313ca8ab1dbd89$var$Yi(null, b, d, a, c);
                        break a;
                    case 14:
                        b = $54313ca8ab1dbd89$var$$i(null, b, d, $54313ca8ab1dbd89$var$Ci(d.type, a), c);
                        break a;
                }
                throw Error($54313ca8ab1dbd89$var$p(306, d, ""));
            }
            return b;
        case 0:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : $54313ca8ab1dbd89$var$Ci(d, e), $54313ca8ab1dbd89$var$cj(a, b, d, e, c);
        case 1:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : $54313ca8ab1dbd89$var$Ci(d, e), $54313ca8ab1dbd89$var$hj(a, b, d, e, c);
        case 3:
            a: {
                $54313ca8ab1dbd89$var$kj(b);
                if (null === a) throw Error($54313ca8ab1dbd89$var$p(387));
                d = b.pendingProps;
                f = b.memoizedState;
                e = f.element;
                $54313ca8ab1dbd89$var$lh(a, b);
                $54313ca8ab1dbd89$var$qh(b, d, null, c);
                var g = b.memoizedState;
                d = g.element;
                if (f.isDehydrated) {
                    if (f = {
                        element: d,
                        isDehydrated: !1,
                        cache: g.cache,
                        pendingSuspenseBoundaries: g.pendingSuspenseBoundaries,
                        transitions: g.transitions
                    }, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
                        e = $54313ca8ab1dbd89$var$Ji(Error($54313ca8ab1dbd89$var$p(423)), b);
                        b = $54313ca8ab1dbd89$var$lj(a, b, d, c, e);
                        break a;
                    } else if (d !== e) {
                        e = $54313ca8ab1dbd89$var$Ji(Error($54313ca8ab1dbd89$var$p(424)), b);
                        b = $54313ca8ab1dbd89$var$lj(a, b, d, c, e);
                        break a;
                    } else for($54313ca8ab1dbd89$var$yg = $54313ca8ab1dbd89$var$Lf(b.stateNode.containerInfo.firstChild), $54313ca8ab1dbd89$var$xg = b, $54313ca8ab1dbd89$var$I = !0, $54313ca8ab1dbd89$var$zg = null, c = $54313ca8ab1dbd89$var$Vg(b, null, d, c), b.child = c; c;)c.flags = c.flags & -3 | 4096, c = c.sibling;
                } else {
                    $54313ca8ab1dbd89$var$Ig();
                    if (d === e) {
                        b = $54313ca8ab1dbd89$var$Zi(a, b, c);
                        break a;
                    }
                    $54313ca8ab1dbd89$var$Xi(a, b, d, c);
                }
                b = b.child;
            }
            return b;
        case 5:
            return $54313ca8ab1dbd89$var$Ah(b), null === a && $54313ca8ab1dbd89$var$Eg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, $54313ca8ab1dbd89$var$Ef(d, e) ? g = null : null !== f && $54313ca8ab1dbd89$var$Ef(d, f) && (b.flags |= 32), $54313ca8ab1dbd89$var$gj(a, b), $54313ca8ab1dbd89$var$Xi(a, b, g, c), b.child;
        case 6:
            return null === a && $54313ca8ab1dbd89$var$Eg(b), null;
        case 13:
            return $54313ca8ab1dbd89$var$oj(a, b, c);
        case 4:
            return $54313ca8ab1dbd89$var$yh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = $54313ca8ab1dbd89$var$Ug(b, null, d, c) : $54313ca8ab1dbd89$var$Xi(a, b, d, c), b.child;
        case 11:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : $54313ca8ab1dbd89$var$Ci(d, e), $54313ca8ab1dbd89$var$Yi(a, b, d, e, c);
        case 7:
            return $54313ca8ab1dbd89$var$Xi(a, b, b.pendingProps, c), b.child;
        case 8:
            return $54313ca8ab1dbd89$var$Xi(a, b, b.pendingProps.children, c), b.child;
        case 12:
            return $54313ca8ab1dbd89$var$Xi(a, b, b.pendingProps.children, c), b.child;
        case 10:
            a: {
                d = b.type._context;
                e = b.pendingProps;
                f = b.memoizedProps;
                g = e.value;
                $54313ca8ab1dbd89$var$G($54313ca8ab1dbd89$var$Wg, d._currentValue);
                d._currentValue = g;
                if (null !== f) {
                    if ($54313ca8ab1dbd89$var$He(f.value, g)) {
                        if (f.children === e.children && !$54313ca8ab1dbd89$var$Wf.current) {
                            b = $54313ca8ab1dbd89$var$Zi(a, b, c);
                            break a;
                        }
                    } else for(f = b.child, null !== f && (f.return = b); null !== f;){
                        var h = f.dependencies;
                        if (null !== h) {
                            g = f.child;
                            for(var k = h.firstContext; null !== k;){
                                if (k.context === d) {
                                    if (1 === f.tag) {
                                        k = $54313ca8ab1dbd89$var$mh(-1, c & -c);
                                        k.tag = 2;
                                        var l = f.updateQueue;
                                        if (null !== l) {
                                            l = l.shared;
                                            var m = l.pending;
                                            null === m ? k.next = k : (k.next = m.next, m.next = k);
                                            l.pending = k;
                                        }
                                    }
                                    f.lanes |= c;
                                    k = f.alternate;
                                    null !== k && (k.lanes |= c);
                                    $54313ca8ab1dbd89$var$bh(f.return, c, b);
                                    h.lanes |= c;
                                    break;
                                }
                                k = k.next;
                            }
                        } else if (10 === f.tag) g = f.type === b.type ? null : f.child;
                        else if (18 === f.tag) {
                            g = f.return;
                            if (null === g) throw Error($54313ca8ab1dbd89$var$p(341));
                            g.lanes |= c;
                            h = g.alternate;
                            null !== h && (h.lanes |= c);
                            $54313ca8ab1dbd89$var$bh(g, c, b);
                            g = f.sibling;
                        } else g = f.child;
                        if (null !== g) g.return = f;
                        else for(g = f; null !== g;){
                            if (g === b) {
                                g = null;
                                break;
                            }
                            f = g.sibling;
                            if (null !== f) {
                                f.return = g.return;
                                g = f;
                                break;
                            }
                            g = g.return;
                        }
                        f = g;
                    }
                }
                $54313ca8ab1dbd89$var$Xi(a, b, e.children, c);
                b = b.child;
            }
            return b;
        case 9:
            return e = b.type, d = b.pendingProps.children, $54313ca8ab1dbd89$var$ch(b, c), e = $54313ca8ab1dbd89$var$eh(e), d = d(e), b.flags |= 1, $54313ca8ab1dbd89$var$Xi(a, b, d, c), b.child;
        case 14:
            return d = b.type, e = $54313ca8ab1dbd89$var$Ci(d, b.pendingProps), e = $54313ca8ab1dbd89$var$Ci(d.type, e), $54313ca8ab1dbd89$var$$i(a, b, d, e, c);
        case 15:
            return $54313ca8ab1dbd89$var$bj(a, b, b.type, b.pendingProps, c);
        case 17:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : $54313ca8ab1dbd89$var$Ci(d, e), $54313ca8ab1dbd89$var$ij(a, b), b.tag = 1, $54313ca8ab1dbd89$var$Zf(d) ? (a = !0, $54313ca8ab1dbd89$var$cg(b)) : a = !1, $54313ca8ab1dbd89$var$ch(b, c), $54313ca8ab1dbd89$var$Gi(b, d, e), $54313ca8ab1dbd89$var$Ii(b, d, e, c), $54313ca8ab1dbd89$var$jj(null, b, d, !0, a, c);
        case 19:
            return $54313ca8ab1dbd89$var$xj(a, b, c);
        case 22:
            return $54313ca8ab1dbd89$var$dj(a, b, c);
    }
    throw Error($54313ca8ab1dbd89$var$p(156, b.tag));
};
function $54313ca8ab1dbd89$var$Fk(a, b) {
    return $54313ca8ab1dbd89$var$ac(a, b);
}
function $54313ca8ab1dbd89$var$$k(a, b, c, d) {
    this.tag = a;
    this.key = c;
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = b;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = d;
    this.subtreeFlags = this.flags = 0;
    this.deletions = null;
    this.childLanes = this.lanes = 0;
    this.alternate = null;
}
function $54313ca8ab1dbd89$var$Bg(a, b, c, d) {
    return new $54313ca8ab1dbd89$var$$k(a, b, c, d);
}
function $54313ca8ab1dbd89$var$aj(a) {
    a = a.prototype;
    return !(!a || !a.isReactComponent);
}
function $54313ca8ab1dbd89$var$Zk(a) {
    if ("function" === typeof a) return $54313ca8ab1dbd89$var$aj(a) ? 1 : 0;
    if (void 0 !== a && null !== a) {
        a = a.$$typeof;
        if (a === $54313ca8ab1dbd89$var$Da) return 11;
        if (a === $54313ca8ab1dbd89$var$Ga) return 14;
    }
    return 2;
}
function $54313ca8ab1dbd89$var$Pg(a, b) {
    var c = a.alternate;
    null === c ? (c = $54313ca8ab1dbd89$var$Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
    c.flags = a.flags & 14680064;
    c.childLanes = a.childLanes;
    c.lanes = a.lanes;
    c.child = a.child;
    c.memoizedProps = a.memoizedProps;
    c.memoizedState = a.memoizedState;
    c.updateQueue = a.updateQueue;
    b = a.dependencies;
    c.dependencies = null === b ? null : {
        lanes: b.lanes,
        firstContext: b.firstContext
    };
    c.sibling = a.sibling;
    c.index = a.index;
    c.ref = a.ref;
    return c;
}
function $54313ca8ab1dbd89$var$Rg(a, b, c, d, e, f) {
    var g = 2;
    d = a;
    if ("function" === typeof a) $54313ca8ab1dbd89$var$aj(a) && (g = 1);
    else if ("string" === typeof a) g = 5;
    else a: switch(a){
        case $54313ca8ab1dbd89$var$ya:
            return $54313ca8ab1dbd89$var$Tg(c.children, e, f, b);
        case $54313ca8ab1dbd89$var$za:
            g = 8;
            e |= 8;
            break;
        case $54313ca8ab1dbd89$var$Aa:
            return a = $54313ca8ab1dbd89$var$Bg(12, c, b, e | 2), a.elementType = $54313ca8ab1dbd89$var$Aa, a.lanes = f, a;
        case $54313ca8ab1dbd89$var$Ea:
            return a = $54313ca8ab1dbd89$var$Bg(13, c, b, e), a.elementType = $54313ca8ab1dbd89$var$Ea, a.lanes = f, a;
        case $54313ca8ab1dbd89$var$Fa:
            return a = $54313ca8ab1dbd89$var$Bg(19, c, b, e), a.elementType = $54313ca8ab1dbd89$var$Fa, a.lanes = f, a;
        case $54313ca8ab1dbd89$var$Ia:
            return $54313ca8ab1dbd89$var$pj(c, e, f, b);
        default:
            if ("object" === typeof a && null !== a) switch(a.$$typeof){
                case $54313ca8ab1dbd89$var$Ba:
                    g = 10;
                    break a;
                case $54313ca8ab1dbd89$var$Ca:
                    g = 9;
                    break a;
                case $54313ca8ab1dbd89$var$Da:
                    g = 11;
                    break a;
                case $54313ca8ab1dbd89$var$Ga:
                    g = 14;
                    break a;
                case $54313ca8ab1dbd89$var$Ha:
                    g = 16;
                    d = null;
                    break a;
            }
            throw Error($54313ca8ab1dbd89$var$p(130, null == a ? a : typeof a, ""));
    }
    b = $54313ca8ab1dbd89$var$Bg(g, c, b, e);
    b.elementType = a;
    b.type = d;
    b.lanes = f;
    return b;
}
function $54313ca8ab1dbd89$var$Tg(a, b, c, d) {
    a = $54313ca8ab1dbd89$var$Bg(7, a, d, b);
    a.lanes = c;
    return a;
}
function $54313ca8ab1dbd89$var$pj(a, b, c, d) {
    a = $54313ca8ab1dbd89$var$Bg(22, a, d, b);
    a.elementType = $54313ca8ab1dbd89$var$Ia;
    a.lanes = c;
    a.stateNode = {
        isHidden: !1
    };
    return a;
}
function $54313ca8ab1dbd89$var$Qg(a, b, c) {
    a = $54313ca8ab1dbd89$var$Bg(6, a, null, b);
    a.lanes = c;
    return a;
}
function $54313ca8ab1dbd89$var$Sg(a, b, c) {
    b = $54313ca8ab1dbd89$var$Bg(4, null !== a.children ? a.children : [], a.key, b);
    b.lanes = c;
    b.stateNode = {
        containerInfo: a.containerInfo,
        pendingChildren: null,
        implementation: a.implementation
    };
    return b;
}
function $54313ca8ab1dbd89$var$al(a, b, c, d, e) {
    this.tag = b;
    this.containerInfo = a;
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
    this.timeoutHandle = -1;
    this.callbackNode = this.pendingContext = this.context = null;
    this.callbackPriority = 0;
    this.eventTimes = $54313ca8ab1dbd89$var$zc(0);
    this.expirationTimes = $54313ca8ab1dbd89$var$zc(-1);
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
    this.entanglements = $54313ca8ab1dbd89$var$zc(0);
    this.identifierPrefix = d;
    this.onRecoverableError = e;
    this.mutableSourceEagerHydrationData = null;
}
function $54313ca8ab1dbd89$var$bl(a, b, c, d, e, f, g, h, k) {
    a = new $54313ca8ab1dbd89$var$al(a, b, c, h, k);
    1 === b ? (b = 1, !0 === f && (b |= 8)) : b = 0;
    f = $54313ca8ab1dbd89$var$Bg(3, null, null, b);
    a.current = f;
    f.stateNode = a;
    f.memoizedState = {
        element: d,
        isDehydrated: c,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    };
    $54313ca8ab1dbd89$var$kh(f);
    return a;
}
function $54313ca8ab1dbd89$var$cl(a, b, c) {
    var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return {
        $$typeof: $54313ca8ab1dbd89$var$wa,
        key: null == d ? null : "" + d,
        children: a,
        containerInfo: b,
        implementation: c
    };
}
function $54313ca8ab1dbd89$var$dl(a) {
    if (!a) return $54313ca8ab1dbd89$var$Vf;
    a = a._reactInternals;
    a: {
        if ($54313ca8ab1dbd89$var$Vb(a) !== a || 1 !== a.tag) throw Error($54313ca8ab1dbd89$var$p(170));
        var b = a;
        do {
            switch(b.tag){
                case 3:
                    b = b.stateNode.context;
                    break a;
                case 1:
                    if ($54313ca8ab1dbd89$var$Zf(b.type)) {
                        b = b.stateNode.__reactInternalMemoizedMergedChildContext;
                        break a;
                    }
            }
            b = b.return;
        }while (null !== b);
        throw Error($54313ca8ab1dbd89$var$p(171));
    }
    if (1 === a.tag) {
        var c = a.type;
        if ($54313ca8ab1dbd89$var$Zf(c)) return $54313ca8ab1dbd89$var$bg(a, c, b);
    }
    return b;
}
function $54313ca8ab1dbd89$var$el(a, b, c, d, e, f, g, h, k) {
    a = $54313ca8ab1dbd89$var$bl(c, d, !0, a, e, f, g, h, k);
    a.context = $54313ca8ab1dbd89$var$dl(null);
    c = a.current;
    d = $54313ca8ab1dbd89$var$R();
    e = $54313ca8ab1dbd89$var$yi(c);
    f = $54313ca8ab1dbd89$var$mh(d, e);
    f.callback = void 0 !== b && null !== b ? b : null;
    $54313ca8ab1dbd89$var$nh(c, f, e);
    a.current.lanes = e;
    $54313ca8ab1dbd89$var$Ac(a, e, d);
    $54313ca8ab1dbd89$var$Dk(a, d);
    return a;
}
function $54313ca8ab1dbd89$var$fl(a, b, c, d) {
    var e = b.current, f = $54313ca8ab1dbd89$var$R(), g = $54313ca8ab1dbd89$var$yi(e);
    c = $54313ca8ab1dbd89$var$dl(c);
    null === b.context ? b.context = c : b.pendingContext = c;
    b = $54313ca8ab1dbd89$var$mh(f, g);
    b.payload = {
        element: a
    };
    d = void 0 === d ? null : d;
    null !== d && (b.callback = d);
    a = $54313ca8ab1dbd89$var$nh(e, b, g);
    null !== a && ($54313ca8ab1dbd89$var$gi(a, e, g, f), $54313ca8ab1dbd89$var$oh(a, e, g));
    return g;
}
function $54313ca8ab1dbd89$var$gl(a) {
    a = a.current;
    if (!a.child) return null;
    switch(a.child.tag){
        case 5:
            return a.child.stateNode;
        default:
            return a.child.stateNode;
    }
}
function $54313ca8ab1dbd89$var$hl(a, b) {
    a = a.memoizedState;
    if (null !== a && null !== a.dehydrated) {
        var c = a.retryLane;
        a.retryLane = 0 !== c && c < b ? c : b;
    }
}
function $54313ca8ab1dbd89$var$il(a, b) {
    $54313ca8ab1dbd89$var$hl(a, b);
    (a = a.alternate) && $54313ca8ab1dbd89$var$hl(a, b);
}
function $54313ca8ab1dbd89$var$jl() {
    return null;
}
var $54313ca8ab1dbd89$var$kl = "function" === typeof reportError ? reportError : function(a) {
    console.error(a);
};
function $54313ca8ab1dbd89$var$ll(a) {
    this._internalRoot = a;
}
$54313ca8ab1dbd89$var$ml.prototype.render = $54313ca8ab1dbd89$var$ll.prototype.render = function(a) {
    var b = this._internalRoot;
    if (null === b) throw Error($54313ca8ab1dbd89$var$p(409));
    $54313ca8ab1dbd89$var$fl(a, b, null, null);
};
$54313ca8ab1dbd89$var$ml.prototype.unmount = $54313ca8ab1dbd89$var$ll.prototype.unmount = function() {
    var a = this._internalRoot;
    if (null !== a) {
        this._internalRoot = null;
        var b = a.containerInfo;
        $54313ca8ab1dbd89$var$Rk(function() {
            $54313ca8ab1dbd89$var$fl(null, a, null, null);
        });
        b[$54313ca8ab1dbd89$var$uf] = null;
    }
};
function $54313ca8ab1dbd89$var$ml(a) {
    this._internalRoot = a;
}
$54313ca8ab1dbd89$var$ml.prototype.unstable_scheduleHydration = function(a) {
    if (a) {
        var b = $54313ca8ab1dbd89$var$Hc();
        a = {
            blockedOn: null,
            target: a,
            priority: b
        };
        for(var c = 0; c < $54313ca8ab1dbd89$var$Qc.length && 0 !== b && b < $54313ca8ab1dbd89$var$Qc[c].priority; c++);
        $54313ca8ab1dbd89$var$Qc.splice(c, 0, a);
        0 === c && $54313ca8ab1dbd89$var$Vc(a);
    }
};
function $54313ca8ab1dbd89$var$nl(a) {
    return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
}
function $54313ca8ab1dbd89$var$ol(a) {
    return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}
function $54313ca8ab1dbd89$var$pl() {}
function $54313ca8ab1dbd89$var$ql(a, b, c, d, e) {
    if (e) {
        if ("function" === typeof d) {
            var f = d;
            d = function() {
                var a = $54313ca8ab1dbd89$var$gl(g);
                f.call(a);
            };
        }
        var g = $54313ca8ab1dbd89$var$el(b, d, a, 0, null, !1, !1, "", $54313ca8ab1dbd89$var$pl);
        a._reactRootContainer = g;
        a[$54313ca8ab1dbd89$var$uf] = g.current;
        $54313ca8ab1dbd89$var$sf(8 === a.nodeType ? a.parentNode : a);
        $54313ca8ab1dbd89$var$Rk();
        return g;
    }
    for(; e = a.lastChild;)a.removeChild(e);
    if ("function" === typeof d) {
        var h = d;
        d = function() {
            var a = $54313ca8ab1dbd89$var$gl(k);
            h.call(a);
        };
    }
    var k = $54313ca8ab1dbd89$var$bl(a, 0, !1, null, null, !1, !1, "", $54313ca8ab1dbd89$var$pl);
    a._reactRootContainer = k;
    a[$54313ca8ab1dbd89$var$uf] = k.current;
    $54313ca8ab1dbd89$var$sf(8 === a.nodeType ? a.parentNode : a);
    $54313ca8ab1dbd89$var$Rk(function() {
        $54313ca8ab1dbd89$var$fl(b, k, c, d);
    });
    return k;
}
function $54313ca8ab1dbd89$var$rl(a, b, c, d, e) {
    var f = c._reactRootContainer;
    if (f) {
        var g = f;
        if ("function" === typeof e) {
            var h = e;
            e = function() {
                var a = $54313ca8ab1dbd89$var$gl(g);
                h.call(a);
            };
        }
        $54313ca8ab1dbd89$var$fl(b, g, a, e);
    } else g = $54313ca8ab1dbd89$var$ql(c, b, a, e, d);
    return $54313ca8ab1dbd89$var$gl(g);
}
$54313ca8ab1dbd89$var$Ec = function(a) {
    switch(a.tag){
        case 3:
            var b = a.stateNode;
            if (b.current.memoizedState.isDehydrated) {
                var c = $54313ca8ab1dbd89$var$tc(b.pendingLanes);
                0 !== c && ($54313ca8ab1dbd89$var$Cc(b, c | 1), $54313ca8ab1dbd89$var$Dk(b, $54313ca8ab1dbd89$var$B()), 0 === ($54313ca8ab1dbd89$var$K & 6) && ($54313ca8ab1dbd89$var$Gj = $54313ca8ab1dbd89$var$B() + 500, $54313ca8ab1dbd89$var$jg()));
            }
            break;
        case 13:
            $54313ca8ab1dbd89$var$Rk(function() {
                var b = $54313ca8ab1dbd89$var$ih(a, 1);
                if (null !== b) {
                    var c = $54313ca8ab1dbd89$var$R();
                    $54313ca8ab1dbd89$var$gi(b, a, 1, c);
                }
            }), $54313ca8ab1dbd89$var$il(a, 1);
    }
};
$54313ca8ab1dbd89$var$Fc = function(a) {
    if (13 === a.tag) {
        var b = $54313ca8ab1dbd89$var$ih(a, 134217728);
        if (null !== b) {
            var c = $54313ca8ab1dbd89$var$R();
            $54313ca8ab1dbd89$var$gi(b, a, 134217728, c);
        }
        $54313ca8ab1dbd89$var$il(a, 134217728);
    }
};
$54313ca8ab1dbd89$var$Gc = function(a) {
    if (13 === a.tag) {
        var b = $54313ca8ab1dbd89$var$yi(a), c = $54313ca8ab1dbd89$var$ih(a, b);
        if (null !== c) {
            var d = $54313ca8ab1dbd89$var$R();
            $54313ca8ab1dbd89$var$gi(c, a, b, d);
        }
        $54313ca8ab1dbd89$var$il(a, b);
    }
};
$54313ca8ab1dbd89$var$Hc = function() {
    return $54313ca8ab1dbd89$var$C;
};
$54313ca8ab1dbd89$var$Ic = function(a, b) {
    var c = $54313ca8ab1dbd89$var$C;
    try {
        return $54313ca8ab1dbd89$var$C = a, b();
    } finally{
        $54313ca8ab1dbd89$var$C = c;
    }
};
$54313ca8ab1dbd89$var$yb = function(a, b, c) {
    switch(b){
        case "input":
            $54313ca8ab1dbd89$var$bb(a, c);
            b = c.name;
            if ("radio" === c.type && null != b) {
                for(c = a; c.parentNode;)c = c.parentNode;
                c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
                for(b = 0; b < c.length; b++){
                    var d = c[b];
                    if (d !== a && d.form === a.form) {
                        var e = $54313ca8ab1dbd89$var$Db(d);
                        if (!e) throw Error($54313ca8ab1dbd89$var$p(90));
                        $54313ca8ab1dbd89$var$Wa(d);
                        $54313ca8ab1dbd89$var$bb(d, e);
                    }
                }
            }
            break;
        case "textarea":
            $54313ca8ab1dbd89$var$ib(a, c);
            break;
        case "select":
            b = c.value, null != b && $54313ca8ab1dbd89$var$fb(a, !!c.multiple, b, !1);
    }
};
$54313ca8ab1dbd89$var$Gb = $54313ca8ab1dbd89$var$Qk;
$54313ca8ab1dbd89$var$Hb = $54313ca8ab1dbd89$var$Rk;
var $54313ca8ab1dbd89$var$sl = {
    usingClientEntryPoint: !1,
    Events: [
        $54313ca8ab1dbd89$var$Cb,
        $54313ca8ab1dbd89$var$ue,
        $54313ca8ab1dbd89$var$Db,
        $54313ca8ab1dbd89$var$Eb,
        $54313ca8ab1dbd89$var$Fb,
        $54313ca8ab1dbd89$var$Qk
    ]
}, $54313ca8ab1dbd89$var$tl = {
    findFiberByHostInstance: $54313ca8ab1dbd89$var$Wc,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
};
var $54313ca8ab1dbd89$var$ul = {
    bundleType: $54313ca8ab1dbd89$var$tl.bundleType,
    version: $54313ca8ab1dbd89$var$tl.version,
    rendererPackageName: $54313ca8ab1dbd89$var$tl.rendererPackageName,
    rendererConfig: $54313ca8ab1dbd89$var$tl.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: $54313ca8ab1dbd89$var$ua.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(a) {
        a = $54313ca8ab1dbd89$var$Zb(a);
        return null === a ? null : a.stateNode;
    },
    findFiberByHostInstance: $54313ca8ab1dbd89$var$tl.findFiberByHostInstance || $54313ca8ab1dbd89$var$jl,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
    var $54313ca8ab1dbd89$var$vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!$54313ca8ab1dbd89$var$vl.isDisabled && $54313ca8ab1dbd89$var$vl.supportsFiber) try {
        $54313ca8ab1dbd89$var$kc = $54313ca8ab1dbd89$var$vl.inject($54313ca8ab1dbd89$var$ul), $54313ca8ab1dbd89$var$lc = $54313ca8ab1dbd89$var$vl;
    } catch (a) {}
}
$54313ca8ab1dbd89$export$ae55be85d98224ed = $54313ca8ab1dbd89$var$sl;
$54313ca8ab1dbd89$export$d39a5bbd09211389 = function(a, b) {
    var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    if (!$54313ca8ab1dbd89$var$nl(b)) throw Error($54313ca8ab1dbd89$var$p(200));
    return $54313ca8ab1dbd89$var$cl(a, b, null, c);
};
$54313ca8ab1dbd89$export$882461b6382ed46c = function(a, b) {
    if (!$54313ca8ab1dbd89$var$nl(a)) throw Error($54313ca8ab1dbd89$var$p(299));
    var c = !1, d = "", e = $54313ca8ab1dbd89$var$kl;
    null !== b && void 0 !== b && (!0 === b.unstable_strictMode && (c = !0), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
    b = $54313ca8ab1dbd89$var$bl(a, 1, !1, null, null, c, !1, d, e);
    a[$54313ca8ab1dbd89$var$uf] = b.current;
    $54313ca8ab1dbd89$var$sf(8 === a.nodeType ? a.parentNode : a);
    return new $54313ca8ab1dbd89$var$ll(b);
};
$54313ca8ab1dbd89$export$466bfc07425424d5 = function(a) {
    if (null == a) return null;
    if (1 === a.nodeType) return a;
    var b = a._reactInternals;
    if (void 0 === b) {
        if ("function" === typeof a.render) throw Error($54313ca8ab1dbd89$var$p(188));
        a = Object.keys(a).join(",");
        throw Error($54313ca8ab1dbd89$var$p(268, a));
    }
    a = $54313ca8ab1dbd89$var$Zb(b);
    a = null === a ? null : a.stateNode;
    return a;
};
$54313ca8ab1dbd89$export$cd75ccfd720a3cd4 = function(a) {
    return $54313ca8ab1dbd89$var$Rk(a);
};
$54313ca8ab1dbd89$export$fa8d919ba61d84db = function(a, b, c) {
    if (!$54313ca8ab1dbd89$var$ol(b)) throw Error($54313ca8ab1dbd89$var$p(200));
    return $54313ca8ab1dbd89$var$rl(null, a, b, !0, c);
};
$54313ca8ab1dbd89$export$757ceba2d55c277e = function(a, b, c) {
    if (!$54313ca8ab1dbd89$var$nl(a)) throw Error($54313ca8ab1dbd89$var$p(405));
    var d = null != c && c.hydratedSources || null, e = !1, f = "", g = $54313ca8ab1dbd89$var$kl;
    null !== c && void 0 !== c && (!0 === c.unstable_strictMode && (e = !0), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
    b = $54313ca8ab1dbd89$var$el(b, null, a, 1, null != c ? c : null, e, !1, f, g);
    a[$54313ca8ab1dbd89$var$uf] = b.current;
    $54313ca8ab1dbd89$var$sf(a);
    if (d) for(a = 0; a < d.length; a++)c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [
        c,
        e
    ] : b.mutableSourceEagerHydrationData.push(c, e);
    return new $54313ca8ab1dbd89$var$ml(b);
};
$54313ca8ab1dbd89$export$b3890eb0ae9dca99 = function(a, b, c) {
    if (!$54313ca8ab1dbd89$var$ol(b)) throw Error($54313ca8ab1dbd89$var$p(200));
    return $54313ca8ab1dbd89$var$rl(null, a, b, !1, c);
};
$54313ca8ab1dbd89$export$502457920280e6be = function(a) {
    if (!$54313ca8ab1dbd89$var$ol(a)) throw Error($54313ca8ab1dbd89$var$p(40));
    return a._reactRootContainer ? ($54313ca8ab1dbd89$var$Rk(function() {
        $54313ca8ab1dbd89$var$rl(null, null, a, !1, function() {
            a._reactRootContainer = null;
            a[$54313ca8ab1dbd89$var$uf] = null;
        });
    }), !0) : !1;
};
$54313ca8ab1dbd89$export$c78a37762a8d58e1 = $54313ca8ab1dbd89$var$Qk;
$54313ca8ab1dbd89$export$dc54d992c10e8a18 = function(a, b, c, d) {
    if (!$54313ca8ab1dbd89$var$ol(c)) throw Error($54313ca8ab1dbd89$var$p(200));
    if (null == a || void 0 === a._reactInternals) throw Error($54313ca8ab1dbd89$var$p(38));
    return $54313ca8ab1dbd89$var$rl(a, b, c, !1, d);
};
$54313ca8ab1dbd89$export$83d89fbfd8236492 = "18.3.1-next-f1338f8080-20240426";

});
parcelRegister("4im8J", function(module, exports) {
"use strict";

module.exports = (parcelRequire("ayrFb"));

});
parcelRegister("ayrFb", function(module, exports) {

$parcel$export(module.exports, "unstable_now", function () { return $7af289ba5b06007c$export$c4744153514ff05d; }, function (v) { return $7af289ba5b06007c$export$c4744153514ff05d = v; });
$parcel$export(module.exports, "unstable_IdlePriority", function () { return $7af289ba5b06007c$export$3e506c1ccc9cc1a7; }, function (v) { return $7af289ba5b06007c$export$3e506c1ccc9cc1a7 = v; });
$parcel$export(module.exports, "unstable_ImmediatePriority", function () { return $7af289ba5b06007c$export$e26fe2ed2fa76875; }, function (v) { return $7af289ba5b06007c$export$e26fe2ed2fa76875 = v; });
$parcel$export(module.exports, "unstable_LowPriority", function () { return $7af289ba5b06007c$export$502329bbf4b505b1; }, function (v) { return $7af289ba5b06007c$export$502329bbf4b505b1 = v; });
$parcel$export(module.exports, "unstable_NormalPriority", function () { return $7af289ba5b06007c$export$6e3807111c4874c4; }, function (v) { return $7af289ba5b06007c$export$6e3807111c4874c4 = v; });
$parcel$export(module.exports, "unstable_Profiling", function () { return $7af289ba5b06007c$export$c27134553091fb3a; }, function (v) { return $7af289ba5b06007c$export$c27134553091fb3a = v; });
$parcel$export(module.exports, "unstable_UserBlockingPriority", function () { return $7af289ba5b06007c$export$33ee1acdc04fd2a2; }, function (v) { return $7af289ba5b06007c$export$33ee1acdc04fd2a2 = v; });
$parcel$export(module.exports, "unstable_cancelCallback", function () { return $7af289ba5b06007c$export$b00a404bbd5edef2; }, function (v) { return $7af289ba5b06007c$export$b00a404bbd5edef2 = v; });
$parcel$export(module.exports, "unstable_continueExecution", function () { return $7af289ba5b06007c$export$8352ce38b91d0c62; }, function (v) { return $7af289ba5b06007c$export$8352ce38b91d0c62 = v; });
$parcel$export(module.exports, "unstable_forceFrameRate", function () { return $7af289ba5b06007c$export$d66a1c1c77bd778b; }, function (v) { return $7af289ba5b06007c$export$d66a1c1c77bd778b = v; });
$parcel$export(module.exports, "unstable_getCurrentPriorityLevel", function () { return $7af289ba5b06007c$export$d3dfb8e4810cb555; }, function (v) { return $7af289ba5b06007c$export$d3dfb8e4810cb555 = v; });
$parcel$export(module.exports, "unstable_getFirstCallbackNode", function () { return $7af289ba5b06007c$export$839f9183b0465a69; }, function (v) { return $7af289ba5b06007c$export$839f9183b0465a69 = v; });
$parcel$export(module.exports, "unstable_next", function () { return $7af289ba5b06007c$export$72fdf0e06517287b; }, function (v) { return $7af289ba5b06007c$export$72fdf0e06517287b = v; });
$parcel$export(module.exports, "unstable_pauseExecution", function () { return $7af289ba5b06007c$export$4b844e58a3e414b4; }, function (v) { return $7af289ba5b06007c$export$4b844e58a3e414b4 = v; });
$parcel$export(module.exports, "unstable_requestPaint", function () { return $7af289ba5b06007c$export$816d2913ae6b83b1; }, function (v) { return $7af289ba5b06007c$export$816d2913ae6b83b1 = v; });
$parcel$export(module.exports, "unstable_runWithPriority", function () { return $7af289ba5b06007c$export$61bcfe829111a1d0; }, function (v) { return $7af289ba5b06007c$export$61bcfe829111a1d0 = v; });
$parcel$export(module.exports, "unstable_scheduleCallback", function () { return $7af289ba5b06007c$export$7ee8c9beb337bc3f; }, function (v) { return $7af289ba5b06007c$export$7ee8c9beb337bc3f = v; });
$parcel$export(module.exports, "unstable_shouldYield", function () { return $7af289ba5b06007c$export$b5836b71941fa3ed; }, function (v) { return $7af289ba5b06007c$export$b5836b71941fa3ed = v; });
$parcel$export(module.exports, "unstable_wrapCallback", function () { return $7af289ba5b06007c$export$cf845f2c119da08a; }, function (v) { return $7af289ba5b06007c$export$cf845f2c119da08a = v; });
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $7af289ba5b06007c$export$c4744153514ff05d;
var $7af289ba5b06007c$export$3e506c1ccc9cc1a7;
var $7af289ba5b06007c$export$e26fe2ed2fa76875;
var $7af289ba5b06007c$export$502329bbf4b505b1;
var $7af289ba5b06007c$export$6e3807111c4874c4;
var $7af289ba5b06007c$export$c27134553091fb3a;
var $7af289ba5b06007c$export$33ee1acdc04fd2a2;
var $7af289ba5b06007c$export$b00a404bbd5edef2;
var $7af289ba5b06007c$export$8352ce38b91d0c62;
var $7af289ba5b06007c$export$d66a1c1c77bd778b;
var $7af289ba5b06007c$export$d3dfb8e4810cb555;
var $7af289ba5b06007c$export$839f9183b0465a69;
var $7af289ba5b06007c$export$72fdf0e06517287b;
var $7af289ba5b06007c$export$4b844e58a3e414b4;
var $7af289ba5b06007c$export$816d2913ae6b83b1;
var $7af289ba5b06007c$export$61bcfe829111a1d0;
var $7af289ba5b06007c$export$7ee8c9beb337bc3f;
var $7af289ba5b06007c$export$b5836b71941fa3ed;
var $7af289ba5b06007c$export$cf845f2c119da08a;
"use strict";
function $7af289ba5b06007c$var$f(a, b) {
    var c = a.length;
    a.push(b);
    a: for(; 0 < c;){
        var d = c - 1 >>> 1, e = a[d];
        if (0 < $7af289ba5b06007c$var$g(e, b)) a[d] = b, a[c] = e, c = d;
        else break a;
    }
}
function $7af289ba5b06007c$var$h(a) {
    return 0 === a.length ? null : a[0];
}
function $7af289ba5b06007c$var$k(a) {
    if (0 === a.length) return null;
    var b = a[0], c = a.pop();
    if (c !== b) {
        a[0] = c;
        a: for(var d = 0, e = a.length, w = e >>> 1; d < w;){
            var m = 2 * (d + 1) - 1, C = a[m], n = m + 1, x = a[n];
            if (0 > $7af289ba5b06007c$var$g(C, c)) n < e && 0 > $7af289ba5b06007c$var$g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);
            else if (n < e && 0 > $7af289ba5b06007c$var$g(x, c)) a[d] = x, a[n] = c, d = n;
            else break a;
        }
    }
    return b;
}
function $7af289ba5b06007c$var$g(a, b) {
    var c = a.sortIndex - b.sortIndex;
    return 0 !== c ? c : a.id - b.id;
}
if ("object" === typeof performance && "function" === typeof performance.now) {
    var $7af289ba5b06007c$var$l = performance;
    $7af289ba5b06007c$export$c4744153514ff05d = function() {
        return $7af289ba5b06007c$var$l.now();
    };
} else {
    var $7af289ba5b06007c$var$p = Date, $7af289ba5b06007c$var$q = $7af289ba5b06007c$var$p.now();
    $7af289ba5b06007c$export$c4744153514ff05d = function() {
        return $7af289ba5b06007c$var$p.now() - $7af289ba5b06007c$var$q;
    };
}
var $7af289ba5b06007c$var$r = [], $7af289ba5b06007c$var$t = [], $7af289ba5b06007c$var$u = 1, $7af289ba5b06007c$var$v = null, $7af289ba5b06007c$var$y = 3, $7af289ba5b06007c$var$z = !1, $7af289ba5b06007c$var$A = !1, $7af289ba5b06007c$var$B = !1, $7af289ba5b06007c$var$D = "function" === typeof setTimeout ? setTimeout : null, $7af289ba5b06007c$var$E = "function" === typeof clearTimeout ? clearTimeout : null, $7af289ba5b06007c$var$F = "undefined" !== typeof setImmediate ? setImmediate : null;
"undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
function $7af289ba5b06007c$var$G(a) {
    for(var b = $7af289ba5b06007c$var$h($7af289ba5b06007c$var$t); null !== b;){
        if (null === b.callback) $7af289ba5b06007c$var$k($7af289ba5b06007c$var$t);
        else if (b.startTime <= a) $7af289ba5b06007c$var$k($7af289ba5b06007c$var$t), b.sortIndex = b.expirationTime, $7af289ba5b06007c$var$f($7af289ba5b06007c$var$r, b);
        else break;
        b = $7af289ba5b06007c$var$h($7af289ba5b06007c$var$t);
    }
}
function $7af289ba5b06007c$var$H(a) {
    $7af289ba5b06007c$var$B = !1;
    $7af289ba5b06007c$var$G(a);
    if (!$7af289ba5b06007c$var$A) {
        if (null !== $7af289ba5b06007c$var$h($7af289ba5b06007c$var$r)) $7af289ba5b06007c$var$A = !0, $7af289ba5b06007c$var$I($7af289ba5b06007c$var$J);
        else {
            var b = $7af289ba5b06007c$var$h($7af289ba5b06007c$var$t);
            null !== b && $7af289ba5b06007c$var$K($7af289ba5b06007c$var$H, b.startTime - a);
        }
    }
}
function $7af289ba5b06007c$var$J(a, b) {
    $7af289ba5b06007c$var$A = !1;
    $7af289ba5b06007c$var$B && ($7af289ba5b06007c$var$B = !1, $7af289ba5b06007c$var$E($7af289ba5b06007c$var$L), $7af289ba5b06007c$var$L = -1);
    $7af289ba5b06007c$var$z = !0;
    var c = $7af289ba5b06007c$var$y;
    try {
        $7af289ba5b06007c$var$G(b);
        for($7af289ba5b06007c$var$v = $7af289ba5b06007c$var$h($7af289ba5b06007c$var$r); null !== $7af289ba5b06007c$var$v && (!($7af289ba5b06007c$var$v.expirationTime > b) || a && !$7af289ba5b06007c$var$M());){
            var d = $7af289ba5b06007c$var$v.callback;
            if ("function" === typeof d) {
                $7af289ba5b06007c$var$v.callback = null;
                $7af289ba5b06007c$var$y = $7af289ba5b06007c$var$v.priorityLevel;
                var e = d($7af289ba5b06007c$var$v.expirationTime <= b);
                b = $7af289ba5b06007c$export$c4744153514ff05d();
                "function" === typeof e ? $7af289ba5b06007c$var$v.callback = e : $7af289ba5b06007c$var$v === $7af289ba5b06007c$var$h($7af289ba5b06007c$var$r) && $7af289ba5b06007c$var$k($7af289ba5b06007c$var$r);
                $7af289ba5b06007c$var$G(b);
            } else $7af289ba5b06007c$var$k($7af289ba5b06007c$var$r);
            $7af289ba5b06007c$var$v = $7af289ba5b06007c$var$h($7af289ba5b06007c$var$r);
        }
        if (null !== $7af289ba5b06007c$var$v) var w = !0;
        else {
            var m = $7af289ba5b06007c$var$h($7af289ba5b06007c$var$t);
            null !== m && $7af289ba5b06007c$var$K($7af289ba5b06007c$var$H, m.startTime - b);
            w = !1;
        }
        return w;
    } finally{
        $7af289ba5b06007c$var$v = null, $7af289ba5b06007c$var$y = c, $7af289ba5b06007c$var$z = !1;
    }
}
var $7af289ba5b06007c$var$N = !1, $7af289ba5b06007c$var$O = null, $7af289ba5b06007c$var$L = -1, $7af289ba5b06007c$var$P = 5, $7af289ba5b06007c$var$Q = -1;
function $7af289ba5b06007c$var$M() {
    return $7af289ba5b06007c$export$c4744153514ff05d() - $7af289ba5b06007c$var$Q < $7af289ba5b06007c$var$P ? !1 : !0;
}
function $7af289ba5b06007c$var$R() {
    if (null !== $7af289ba5b06007c$var$O) {
        var a = $7af289ba5b06007c$export$c4744153514ff05d();
        $7af289ba5b06007c$var$Q = a;
        var b = !0;
        try {
            b = $7af289ba5b06007c$var$O(!0, a);
        } finally{
            b ? $7af289ba5b06007c$var$S() : ($7af289ba5b06007c$var$N = !1, $7af289ba5b06007c$var$O = null);
        }
    } else $7af289ba5b06007c$var$N = !1;
}
var $7af289ba5b06007c$var$S;
if ("function" === typeof $7af289ba5b06007c$var$F) $7af289ba5b06007c$var$S = function() {
    $7af289ba5b06007c$var$F($7af289ba5b06007c$var$R);
};
else if ("undefined" !== typeof MessageChannel) {
    var $7af289ba5b06007c$var$T = new MessageChannel, $7af289ba5b06007c$var$U = $7af289ba5b06007c$var$T.port2;
    $7af289ba5b06007c$var$T.port1.onmessage = $7af289ba5b06007c$var$R;
    $7af289ba5b06007c$var$S = function() {
        $7af289ba5b06007c$var$U.postMessage(null);
    };
} else $7af289ba5b06007c$var$S = function() {
    $7af289ba5b06007c$var$D($7af289ba5b06007c$var$R, 0);
};
function $7af289ba5b06007c$var$I(a) {
    $7af289ba5b06007c$var$O = a;
    $7af289ba5b06007c$var$N || ($7af289ba5b06007c$var$N = !0, $7af289ba5b06007c$var$S());
}
function $7af289ba5b06007c$var$K(a, b) {
    $7af289ba5b06007c$var$L = $7af289ba5b06007c$var$D(function() {
        a($7af289ba5b06007c$export$c4744153514ff05d());
    }, b);
}
$7af289ba5b06007c$export$3e506c1ccc9cc1a7 = 5;
$7af289ba5b06007c$export$e26fe2ed2fa76875 = 1;
$7af289ba5b06007c$export$502329bbf4b505b1 = 4;
$7af289ba5b06007c$export$6e3807111c4874c4 = 3;
$7af289ba5b06007c$export$c27134553091fb3a = null;
$7af289ba5b06007c$export$33ee1acdc04fd2a2 = 2;
$7af289ba5b06007c$export$b00a404bbd5edef2 = function(a) {
    a.callback = null;
};
$7af289ba5b06007c$export$8352ce38b91d0c62 = function() {
    $7af289ba5b06007c$var$A || $7af289ba5b06007c$var$z || ($7af289ba5b06007c$var$A = !0, $7af289ba5b06007c$var$I($7af289ba5b06007c$var$J));
};
$7af289ba5b06007c$export$d66a1c1c77bd778b = function(a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : $7af289ba5b06007c$var$P = 0 < a ? Math.floor(1E3 / a) : 5;
};
$7af289ba5b06007c$export$d3dfb8e4810cb555 = function() {
    return $7af289ba5b06007c$var$y;
};
$7af289ba5b06007c$export$839f9183b0465a69 = function() {
    return $7af289ba5b06007c$var$h($7af289ba5b06007c$var$r);
};
$7af289ba5b06007c$export$72fdf0e06517287b = function(a) {
    switch($7af289ba5b06007c$var$y){
        case 1:
        case 2:
        case 3:
            var b = 3;
            break;
        default:
            b = $7af289ba5b06007c$var$y;
    }
    var c = $7af289ba5b06007c$var$y;
    $7af289ba5b06007c$var$y = b;
    try {
        return a();
    } finally{
        $7af289ba5b06007c$var$y = c;
    }
};
$7af289ba5b06007c$export$4b844e58a3e414b4 = function() {};
$7af289ba5b06007c$export$816d2913ae6b83b1 = function() {};
$7af289ba5b06007c$export$61bcfe829111a1d0 = function(a, b) {
    switch(a){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            a = 3;
    }
    var c = $7af289ba5b06007c$var$y;
    $7af289ba5b06007c$var$y = a;
    try {
        return b();
    } finally{
        $7af289ba5b06007c$var$y = c;
    }
};
$7af289ba5b06007c$export$7ee8c9beb337bc3f = function(a, b, c) {
    var d = $7af289ba5b06007c$export$c4744153514ff05d();
    "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
    switch(a){
        case 1:
            var e = -1;
            break;
        case 2:
            e = 250;
            break;
        case 5:
            e = 1073741823;
            break;
        case 4:
            e = 1E4;
            break;
        default:
            e = 5E3;
    }
    e = c + e;
    a = {
        id: $7af289ba5b06007c$var$u++,
        callback: b,
        priorityLevel: a,
        startTime: c,
        expirationTime: e,
        sortIndex: -1
    };
    c > d ? (a.sortIndex = c, $7af289ba5b06007c$var$f($7af289ba5b06007c$var$t, a), null === $7af289ba5b06007c$var$h($7af289ba5b06007c$var$r) && a === $7af289ba5b06007c$var$h($7af289ba5b06007c$var$t) && ($7af289ba5b06007c$var$B ? ($7af289ba5b06007c$var$E($7af289ba5b06007c$var$L), $7af289ba5b06007c$var$L = -1) : $7af289ba5b06007c$var$B = !0, $7af289ba5b06007c$var$K($7af289ba5b06007c$var$H, c - d))) : (a.sortIndex = e, $7af289ba5b06007c$var$f($7af289ba5b06007c$var$r, a), $7af289ba5b06007c$var$A || $7af289ba5b06007c$var$z || ($7af289ba5b06007c$var$A = !0, $7af289ba5b06007c$var$I($7af289ba5b06007c$var$J)));
    return a;
};
$7af289ba5b06007c$export$b5836b71941fa3ed = $7af289ba5b06007c$var$M;
$7af289ba5b06007c$export$cf845f2c119da08a = function(a) {
    var b = $7af289ba5b06007c$var$y;
    return function() {
        var c = $7af289ba5b06007c$var$y;
        $7af289ba5b06007c$var$y = b;
        try {
            return a.apply(this, arguments);
        } finally{
            $7af289ba5b06007c$var$y = c;
        }
    };
};

});



parcelRegister("45qRz", function(module, exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";

var $ggsaY = parcelRequire("ggsaY");
function $2f9c7777f0902743$var$emptyFunction() {}
function $2f9c7777f0902743$var$emptyFunctionWithReset() {}
$2f9c7777f0902743$var$emptyFunctionWithReset.resetWarningCache = $2f9c7777f0902743$var$emptyFunction;
module.exports = function() {
    function shim(props, propName, componentName, location, propFullName, secret) {
        if (secret === $ggsaY) // It is still safe when called from React.
        return;
        var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        err.name = "Invariant Violation";
        throw err;
    }
    shim.isRequired = shim;
    function getShim() {
        return shim;
    }
    // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
        array: shim,
        bigint: shim,
        bool: shim,
        func: shim,
        number: shim,
        object: shim,
        string: shim,
        symbol: shim,
        any: shim,
        arrayOf: getShim,
        element: shim,
        elementType: shim,
        instanceOf: getShim,
        node: shim,
        objectOf: getShim,
        oneOf: getShim,
        oneOfType: getShim,
        shape: getShim,
        exact: getShim,
        checkPropTypes: $2f9c7777f0902743$var$emptyFunctionWithReset,
        resetWarningCache: $2f9c7777f0902743$var$emptyFunction
    };
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
};

});
parcelRegister("ggsaY", function(module, exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
var $bd73ff266a2de863$var$ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
module.exports = $bd73ff266a2de863$var$ReactPropTypesSecret;

});


var $a9d3d534d399c2da$exports = {};
"use strict";

$a9d3d534d399c2da$exports = (parcelRequire("5VtQp"));


var $42ffcf4a0fe1f422$export$882461b6382ed46c;
var $42ffcf4a0fe1f422$export$757ceba2d55c277e;
"use strict";
var $1d90405877b51491$exports = {};
"use strict";
function $1d90405877b51491$var$checkDCE() {
    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") return;
    try {
        // Verify that the code above has been dead code eliminated (DCE'd).
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($1d90405877b51491$var$checkDCE);
    } catch (err) {
        // DevTools shouldn't crash React, no matter what.
        // We should still report in case we break this code.
        console.error(err);
    }
}
// DCE check should happen before ReactDOM bundle executes so that
// DevTools can report bad minification during injection.
$1d90405877b51491$var$checkDCE();

$1d90405877b51491$exports = (parcelRequire("7e9xe"));


var $42ffcf4a0fe1f422$var$i;
$42ffcf4a0fe1f422$export$882461b6382ed46c = $1d90405877b51491$exports.createRoot;
$42ffcf4a0fe1f422$export$757ceba2d55c277e = $1d90405877b51491$exports.hydrateRoot;




var $iS7v4 = parcelRequire("iS7v4");

var $804fb6f4b112ddab$exports = {};
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $804fb6f4b112ddab$var$ReactIs, $804fb6f4b112ddab$var$throwOnDirectAccess;

// By explicitly using `prop-types` you are opting into new production behavior.
// http://fb.me/prop-types-in-prod
$804fb6f4b112ddab$exports = (parcelRequire("45qRz"))();



var $iS7v4 = parcelRequire("iS7v4");
var $b64d07ce5c97f908$exports = {};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ /* global define */ (function() {
    "use strict";
    var hasOwn = {}.hasOwnProperty;
    function classNames() {
        var classes = "";
        for(var i = 0; i < arguments.length; i++){
            var arg = arguments[i];
            if (arg) classes = appendClass(classes, parseValue(arg));
        }
        return classes;
    }
    function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") return arg;
        if (typeof arg !== "object") return "";
        if (Array.isArray(arg)) return classNames.apply(null, arg);
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) return arg.toString();
        var classes = "";
        for(var key in arg)if (hasOwn.call(arg, key) && arg[key]) classes = appendClass(classes, key);
        return classes;
    }
    function appendClass(value, newClass) {
        if (!newClass) return value;
        if (value) return value + " " + newClass;
        return value + newClass;
    }
    if (0, $b64d07ce5c97f908$exports) {
        classNames.default = classNames;
        $b64d07ce5c97f908$exports = classNames;
    } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) // register as 'classnames', consistent with npm package name
    define("classnames", [], function() {
        return classNames;
    });
    else window.classNames = classNames;
})();



var $iS7v4 = parcelRequire("iS7v4");

var $iS7v4 = parcelRequire("iS7v4");

const $deea035f1c8c4f88$var$_excluded = [
    "as",
    "disabled"
];
function $deea035f1c8c4f88$var$_objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function $deea035f1c8c4f88$export$72369ab2cc99204b(href) {
    return !href || href.trim() === "#";
}
function $deea035f1c8c4f88$export$a0ee72f2c720a5c3({ tagName: tagName, disabled: disabled, href: href, target: target, rel: rel, role: role, onClick: onClick, tabIndex: tabIndex = 0, type: type }) {
    if (!tagName) {
        if (href != null || target != null || rel != null) tagName = "a";
        else tagName = "button";
    }
    const meta = {
        tagName: tagName
    };
    if (tagName === "button") return [
        {
            type: type || "button",
            disabled: disabled
        },
        meta
    ];
    const handleClick = (event)=>{
        if (disabled || tagName === "a" && $deea035f1c8c4f88$export$72369ab2cc99204b(href)) event.preventDefault();
        if (disabled) {
            event.stopPropagation();
            return;
        }
        onClick == null || onClick(event);
    };
    const handleKeyDown = (event)=>{
        if (event.key === " ") {
            event.preventDefault();
            handleClick(event);
        }
    };
    if (tagName === "a") {
        // Ensure there's a href so Enter can trigger anchor button.
        href || (href = "#");
        if (disabled) href = undefined;
    }
    return [
        {
            role: role != null ? role : "button",
            // explicitly undefined so that it overrides the props disabled in a spread
            // e.g. <Tag {...props} {...hookProps} />
            disabled: undefined,
            tabIndex: disabled ? undefined : tabIndex,
            href: href,
            target: tagName === "a" ? target : undefined,
            "aria-disabled": !disabled ? undefined : disabled,
            rel: tagName === "a" ? rel : undefined,
            onClick: handleClick,
            onKeyDown: handleKeyDown
        },
        meta
    ];
}
const $deea035f1c8c4f88$var$Button = /*#__PURE__*/ $iS7v4.forwardRef((_ref, ref)=>{
    let { as: asProp, disabled: disabled } = _ref, props = $deea035f1c8c4f88$var$_objectWithoutPropertiesLoose(_ref, $deea035f1c8c4f88$var$_excluded);
    const [buttonProps, { tagName: Component }] = $deea035f1c8c4f88$export$a0ee72f2c720a5c3(Object.assign({
        tagName: asProp,
        disabled: disabled
    }, props));
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)(Component, Object.assign({}, props, buttonProps, {
        ref: ref
    }));
});
$deea035f1c8c4f88$var$Button.displayName = "Button";
var $deea035f1c8c4f88$export$2e2bcd8739ae039 = $deea035f1c8c4f88$var$Button;



var $iS7v4 = parcelRequire("iS7v4");

"use client";
const $24d14d90d6b73476$export$666ad80b5007f835 = [
    "xxl",
    "xl",
    "lg",
    "md",
    "sm",
    "xs"
];
const $24d14d90d6b73476$export$ff817e17bad2e091 = "xs";
const $24d14d90d6b73476$var$ThemeContext = /*#__PURE__*/ $iS7v4.createContext({
    prefixes: {},
    breakpoints: $24d14d90d6b73476$export$666ad80b5007f835,
    minBreakpoint: $24d14d90d6b73476$export$ff817e17bad2e091
});
const { Consumer: $24d14d90d6b73476$export$b631efc24e9d5e2f, Provider: $24d14d90d6b73476$var$Provider } = $24d14d90d6b73476$var$ThemeContext;
function $24d14d90d6b73476$var$ThemeProvider({ prefixes: prefixes = {}, breakpoints: breakpoints = $24d14d90d6b73476$export$666ad80b5007f835, minBreakpoint: minBreakpoint = $24d14d90d6b73476$export$ff817e17bad2e091, dir: dir, children: children }) {
    const contextValue = (0, $iS7v4.useMemo)(()=>({
            prefixes: {
                ...prefixes
            },
            breakpoints: breakpoints,
            minBreakpoint: minBreakpoint,
            dir: dir
        }), [
        prefixes,
        breakpoints,
        minBreakpoint,
        dir
    ]);
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)($24d14d90d6b73476$var$Provider, {
        value: contextValue,
        children: children
    });
}
function $24d14d90d6b73476$export$7f387860ebffb32c(prefix, defaultPrefix) {
    const { prefixes: prefixes } = (0, $iS7v4.useContext)($24d14d90d6b73476$var$ThemeContext);
    return prefix || prefixes[defaultPrefix] || defaultPrefix;
}
function $24d14d90d6b73476$export$8970c8db816a5863() {
    const { breakpoints: breakpoints } = (0, $iS7v4.useContext)($24d14d90d6b73476$var$ThemeContext);
    return breakpoints;
}
function $24d14d90d6b73476$export$d926d6ef38f3fd32() {
    const { minBreakpoint: minBreakpoint } = (0, $iS7v4.useContext)($24d14d90d6b73476$var$ThemeContext);
    return minBreakpoint;
}
function $24d14d90d6b73476$export$35e511eefa30ac5a() {
    const { dir: dir } = (0, $iS7v4.useContext)($24d14d90d6b73476$var$ThemeContext);
    return dir === "rtl";
}
function $24d14d90d6b73476$export$ce75053c20498f85(Component, opts) {
    if (typeof opts === "string") opts = {
        prefix: opts
    };
    const isClassy = Component.prototype && Component.prototype.isReactComponent;
    // If it's a functional component make sure we don't break it with a ref
    const { prefix: prefix, forwardRefAs: forwardRefAs = isClassy ? "ref" : "innerRef" } = opts;
    const Wrapped = /*#__PURE__*/ $iS7v4.forwardRef(({ ...props }, ref)=>{
        props[forwardRefAs] = ref;
        const bsPrefix = $24d14d90d6b73476$export$7f387860ebffb32c(props.bsPrefix, prefix);
        return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)(Component, {
            ...props,
            bsPrefix: bsPrefix
        });
    });
    Wrapped.displayName = `Bootstrap(${Component.displayName || Component.name})`;
    return Wrapped;
}
var $24d14d90d6b73476$export$2e2bcd8739ae039 = $24d14d90d6b73476$var$ThemeProvider;



"use client";
const $f0f17203e1780c9d$var$Button = /*#__PURE__*/ $iS7v4.forwardRef(({ as: as, bsPrefix: bsPrefix, variant: variant = "primary", size: size, active: active = false, disabled: disabled = false, className: className, ...props }, ref)=>{
    const prefix = (0, $24d14d90d6b73476$export$7f387860ebffb32c)(bsPrefix, "btn");
    const [buttonProps, { tagName: tagName }] = (0, $deea035f1c8c4f88$export$a0ee72f2c720a5c3)({
        tagName: as,
        disabled: disabled,
        ...props
    });
    const Component = tagName;
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)(Component, {
        ...buttonProps,
        ...props,
        ref: ref,
        disabled: disabled,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($b64d07ce5c97f908$exports)))(className, prefix, active && "active", variant && `${prefix}-${variant}`, size && `${prefix}-${size}`, props.href && disabled && "disabled")
    });
});
$f0f17203e1780c9d$var$Button.displayName = "Button";
var $f0f17203e1780c9d$export$2e2bcd8739ae039 = $f0f17203e1780c9d$var$Button;



var $iS7v4 = parcelRequire("iS7v4");


var $iS7v4 = parcelRequire("iS7v4");



"use client";
const $c552efa0d62aed96$var$CardBody = /*#__PURE__*/ $iS7v4.forwardRef(({ className: className, bsPrefix: bsPrefix, as: Component = "div", ...props }, ref)=>{
    bsPrefix = (0, $24d14d90d6b73476$export$7f387860ebffb32c)(bsPrefix, "card-body");
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)(Component, {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($b64d07ce5c97f908$exports)))(className, bsPrefix),
        ...props
    });
});
$c552efa0d62aed96$var$CardBody.displayName = "CardBody";
var $c552efa0d62aed96$export$2e2bcd8739ae039 = $c552efa0d62aed96$var$CardBody;



var $iS7v4 = parcelRequire("iS7v4");



"use client";
const $ab7999f620efee94$var$CardFooter = /*#__PURE__*/ $iS7v4.forwardRef(({ className: className, bsPrefix: bsPrefix, as: Component = "div", ...props }, ref)=>{
    bsPrefix = (0, $24d14d90d6b73476$export$7f387860ebffb32c)(bsPrefix, "card-footer");
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)(Component, {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($b64d07ce5c97f908$exports)))(className, bsPrefix),
        ...props
    });
});
$ab7999f620efee94$var$CardFooter.displayName = "CardFooter";
var $ab7999f620efee94$export$2e2bcd8739ae039 = $ab7999f620efee94$var$CardFooter;




var $iS7v4 = parcelRequire("iS7v4");


var $iS7v4 = parcelRequire("iS7v4");
"use client";
const $48a702ab7d782cf0$var$context = /*#__PURE__*/ $iS7v4.createContext(null);
$48a702ab7d782cf0$var$context.displayName = "CardHeaderContext";
var $48a702ab7d782cf0$export$2e2bcd8739ae039 = $48a702ab7d782cf0$var$context;



"use client";
const $f51b73ed9be6e219$var$CardHeader = /*#__PURE__*/ $iS7v4.forwardRef(({ bsPrefix: bsPrefix, className: className, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "div", ...props }, ref)=>{
    const prefix = (0, $24d14d90d6b73476$export$7f387860ebffb32c)(bsPrefix, "card-header");
    const contextValue = (0, $iS7v4.useMemo)(()=>({
            cardHeaderBsPrefix: prefix
        }), [
        prefix
    ]);
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $48a702ab7d782cf0$export$2e2bcd8739ae039).Provider, {
        value: contextValue,
        children: /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)(Component, {
            ref: ref,
            ...props,
            className: (0, (/*@__PURE__*/$parcel$interopDefault($b64d07ce5c97f908$exports)))(className, prefix)
        })
    });
});
$f51b73ed9be6e219$var$CardHeader.displayName = "CardHeader";
var $f51b73ed9be6e219$export$2e2bcd8739ae039 = $f51b73ed9be6e219$var$CardHeader;




var $iS7v4 = parcelRequire("iS7v4");


"use client";
const $db3d55ceff160c8d$var$CardImg = /*#__PURE__*/ $iS7v4.forwardRef(// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({ bsPrefix: bsPrefix, className: className, variant: variant, as: Component = "img", ...props }, ref)=>{
    const prefix = (0, $24d14d90d6b73476$export$7f387860ebffb32c)(bsPrefix, "card-img");
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)(Component, {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($b64d07ce5c97f908$exports)))(variant ? `${prefix}-${variant}` : prefix, className),
        ...props
    });
});
$db3d55ceff160c8d$var$CardImg.displayName = "CardImg";
var $db3d55ceff160c8d$export$2e2bcd8739ae039 = $db3d55ceff160c8d$var$CardImg;



var $iS7v4 = parcelRequire("iS7v4");



"use client";
const $4ef8f119cf54c201$var$CardImgOverlay = /*#__PURE__*/ $iS7v4.forwardRef(({ className: className, bsPrefix: bsPrefix, as: Component = "div", ...props }, ref)=>{
    bsPrefix = (0, $24d14d90d6b73476$export$7f387860ebffb32c)(bsPrefix, "card-img-overlay");
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)(Component, {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($b64d07ce5c97f908$exports)))(className, bsPrefix),
        ...props
    });
});
$4ef8f119cf54c201$var$CardImgOverlay.displayName = "CardImgOverlay";
var $4ef8f119cf54c201$export$2e2bcd8739ae039 = $4ef8f119cf54c201$var$CardImgOverlay;



var $iS7v4 = parcelRequire("iS7v4");



"use client";
const $070fda8617d1c2db$var$CardLink = /*#__PURE__*/ $iS7v4.forwardRef(({ className: className, bsPrefix: bsPrefix, as: Component = "a", ...props }, ref)=>{
    bsPrefix = (0, $24d14d90d6b73476$export$7f387860ebffb32c)(bsPrefix, "card-link");
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)(Component, {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($b64d07ce5c97f908$exports)))(className, bsPrefix),
        ...props
    });
});
$070fda8617d1c2db$var$CardLink.displayName = "CardLink";
var $070fda8617d1c2db$export$2e2bcd8739ae039 = $070fda8617d1c2db$var$CardLink;



var $iS7v4 = parcelRequire("iS7v4");



var $iS7v4 = parcelRequire("iS7v4");


var $62e34513c457f5c6$export$2e2bcd8739ae039 = (className)=>/*#__PURE__*/ $iS7v4.forwardRef((p, ref)=>/*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)("div", {
            ...p,
            ref: ref,
            className: (0, (/*@__PURE__*/$parcel$interopDefault($b64d07ce5c97f908$exports)))(p.className, className)
        }));



"use client";
const $d3404fff26a602f0$var$DivStyledAsH6 = (0, $62e34513c457f5c6$export$2e2bcd8739ae039)("h6");
const $d3404fff26a602f0$var$CardSubtitle = /*#__PURE__*/ $iS7v4.forwardRef(({ className: className, bsPrefix: bsPrefix, as: Component = $d3404fff26a602f0$var$DivStyledAsH6, ...props }, ref)=>{
    bsPrefix = (0, $24d14d90d6b73476$export$7f387860ebffb32c)(bsPrefix, "card-subtitle");
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)(Component, {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($b64d07ce5c97f908$exports)))(className, bsPrefix),
        ...props
    });
});
$d3404fff26a602f0$var$CardSubtitle.displayName = "CardSubtitle";
var $d3404fff26a602f0$export$2e2bcd8739ae039 = $d3404fff26a602f0$var$CardSubtitle;



var $iS7v4 = parcelRequire("iS7v4");



"use client";
const $d85a64592512341c$var$CardText = /*#__PURE__*/ $iS7v4.forwardRef(({ className: className, bsPrefix: bsPrefix, as: Component = "p", ...props }, ref)=>{
    bsPrefix = (0, $24d14d90d6b73476$export$7f387860ebffb32c)(bsPrefix, "card-text");
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)(Component, {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($b64d07ce5c97f908$exports)))(className, bsPrefix),
        ...props
    });
});
$d85a64592512341c$var$CardText.displayName = "CardText";
var $d85a64592512341c$export$2e2bcd8739ae039 = $d85a64592512341c$var$CardText;



var $iS7v4 = parcelRequire("iS7v4");




"use client";
const $661e7822886f6621$var$DivStyledAsH5 = (0, $62e34513c457f5c6$export$2e2bcd8739ae039)("h5");
const $661e7822886f6621$var$CardTitle = /*#__PURE__*/ $iS7v4.forwardRef(({ className: className, bsPrefix: bsPrefix, as: Component = $661e7822886f6621$var$DivStyledAsH5, ...props }, ref)=>{
    bsPrefix = (0, $24d14d90d6b73476$export$7f387860ebffb32c)(bsPrefix, "card-title");
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)(Component, {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($b64d07ce5c97f908$exports)))(className, bsPrefix),
        ...props
    });
});
$661e7822886f6621$var$CardTitle.displayName = "CardTitle";
var $661e7822886f6621$export$2e2bcd8739ae039 = $661e7822886f6621$var$CardTitle;



"use client";
const $36e6d82e657fd4dc$var$Card = /*#__PURE__*/ $iS7v4.forwardRef(({ bsPrefix: bsPrefix, className: className, bg: bg, text: text, border: border, body: body = false, children: children, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "div", ...props }, ref)=>{
    const prefix = (0, $24d14d90d6b73476$export$7f387860ebffb32c)(bsPrefix, "card");
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)(Component, {
        ref: ref,
        ...props,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($b64d07ce5c97f908$exports)))(className, prefix, bg && `bg-${bg}`, text && `text-${text}`, border && `border-${border}`),
        children: body ? /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $c552efa0d62aed96$export$2e2bcd8739ae039), {
            children: children
        }) : children
    });
});
$36e6d82e657fd4dc$var$Card.displayName = "Card";
var $36e6d82e657fd4dc$export$2e2bcd8739ae039 = Object.assign($36e6d82e657fd4dc$var$Card, {
    Img: (0, $db3d55ceff160c8d$export$2e2bcd8739ae039),
    Title: (0, $661e7822886f6621$export$2e2bcd8739ae039),
    Subtitle: (0, $d3404fff26a602f0$export$2e2bcd8739ae039),
    Body: (0, $c552efa0d62aed96$export$2e2bcd8739ae039),
    Link: (0, $070fda8617d1c2db$export$2e2bcd8739ae039),
    Text: (0, $d85a64592512341c$export$2e2bcd8739ae039),
    Header: (0, $f51b73ed9be6e219$export$2e2bcd8739ae039),
    Footer: (0, $ab7999f620efee94$export$2e2bcd8739ae039),
    ImgOverlay: (0, $4ef8f119cf54c201$export$2e2bcd8739ae039)
});


/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ 
var $iS7v4 = parcelRequire("iS7v4");

/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function $77048ffa45c40179$var$_extends() {
    $77048ffa45c40179$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $77048ffa45c40179$var$_extends.apply(this, arguments);
}
////////////////////////////////////////////////////////////////////////////////
//#region Types and Constants
////////////////////////////////////////////////////////////////////////////////
/**
 * Actions represent the type of change to a location value.
 */ var $77048ffa45c40179$export$e19cd5f9376f8cee;
(function(Action) {
    /**
   * A POP indicates a change to an arbitrary index in the history stack, such
   * as a back or forward navigation. It does not describe the direction of the
   * navigation, only that the current index changed.
   *
   * Note: This is the default action for newly created history objects.
   */ Action["Pop"] = "POP";
    /**
   * A PUSH indicates a new entry being added to the history stack, such as when
   * a link is clicked and a new page loads. When this happens, all subsequent
   * entries in the stack are lost.
   */ Action["Push"] = "PUSH";
    /**
   * A REPLACE indicates the entry at the current index in the history stack
   * being replaced by a new one.
   */ Action["Replace"] = "REPLACE";
})($77048ffa45c40179$export$e19cd5f9376f8cee || ($77048ffa45c40179$export$e19cd5f9376f8cee = {}));
const $77048ffa45c40179$var$PopStateEventType = "popstate";
/**
 * Memory history stores the current location in memory. It is designed for use
 * in stateful non-browser environments like tests and React Native.
 */ function $77048ffa45c40179$export$2b76ad033c6e6d08(options) {
    if (options === void 0) options = {};
    let { initialEntries: initialEntries = [
        "/"
    ], initialIndex: initialIndex, v5Compat: v5Compat = false } = options;
    let entries; // Declare so we can access from createMemoryLocation
    entries = initialEntries.map((entry, index)=>createMemoryLocation(entry, typeof entry === "string" ? null : entry.state, index === 0 ? "default" : undefined));
    let index = clampIndex(initialIndex == null ? entries.length - 1 : initialIndex);
    let action = $77048ffa45c40179$export$e19cd5f9376f8cee.Pop;
    let listener = null;
    function clampIndex(n) {
        return Math.min(Math.max(n, 0), entries.length - 1);
    }
    function getCurrentLocation() {
        return entries[index];
    }
    function createMemoryLocation(to, state, key) {
        if (state === void 0) state = null;
        let location = $77048ffa45c40179$var$createLocation(entries ? getCurrentLocation().pathname : "/", to, state, key);
        $77048ffa45c40179$export$c0e02632e14916fd(location.pathname.charAt(0) === "/", "relative pathnames are not supported in memory history: " + JSON.stringify(to));
        return location;
    }
    function createHref(to) {
        return typeof to === "string" ? to : $77048ffa45c40179$export$fe53371bee54353d(to);
    }
    let history = {
        get index () {
            return index;
        },
        get action () {
            return action;
        },
        get location () {
            return getCurrentLocation();
        },
        createHref: createHref,
        createURL (to) {
            return new URL(createHref(to), "http://localhost");
        },
        encodeLocation (to) {
            let path = typeof to === "string" ? $77048ffa45c40179$export$8ccf933b0513f8d0(to) : to;
            return {
                pathname: path.pathname || "",
                search: path.search || "",
                hash: path.hash || ""
            };
        },
        push (to, state) {
            action = $77048ffa45c40179$export$e19cd5f9376f8cee.Push;
            let nextLocation = createMemoryLocation(to, state);
            index += 1;
            entries.splice(index, entries.length, nextLocation);
            if (v5Compat && listener) listener({
                action: action,
                location: nextLocation,
                delta: 1
            });
        },
        replace (to, state) {
            action = $77048ffa45c40179$export$e19cd5f9376f8cee.Replace;
            let nextLocation = createMemoryLocation(to, state);
            entries[index] = nextLocation;
            if (v5Compat && listener) listener({
                action: action,
                location: nextLocation,
                delta: 0
            });
        },
        go (delta) {
            action = $77048ffa45c40179$export$e19cd5f9376f8cee.Pop;
            let nextIndex = clampIndex(index + delta);
            let nextLocation = entries[nextIndex];
            index = nextIndex;
            if (listener) listener({
                action: action,
                location: nextLocation,
                delta: delta
            });
        },
        listen (fn) {
            listener = fn;
            return ()=>{
                listener = null;
            };
        }
    };
    return history;
}
/**
 * Browser history stores the location in regular URLs. This is the standard for
 * most web apps, but it requires some configuration on the server to ensure you
 * serve the same app at multiple URLs.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
 */ function $77048ffa45c40179$export$719fc203c4e16dee(options) {
    if (options === void 0) options = {};
    function createBrowserLocation(window1, globalHistory) {
        let { pathname: pathname, search: search, hash: hash } = window1.location;
        return $77048ffa45c40179$var$createLocation("", {
            pathname: pathname,
            search: search,
            hash: hash
        }, // state defaults to `null` because `window.history.state` does
        globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
    }
    function createBrowserHref(window1, to) {
        return typeof to === "string" ? to : $77048ffa45c40179$export$fe53371bee54353d(to);
    }
    return $77048ffa45c40179$var$getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
}
/**
 * Hash history stores the location in window.location.hash. This makes it ideal
 * for situations where you don't want to send the location to the server for
 * some reason, either because you do cannot configure it or the URL space is
 * reserved for something else.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createhashhistory
 */ function $77048ffa45c40179$export$b71fdd3798280242(options) {
    if (options === void 0) options = {};
    function createHashLocation(window1, globalHistory) {
        let { pathname: pathname = "/", search: search = "", hash: hash = "" } = $77048ffa45c40179$export$8ccf933b0513f8d0(window1.location.hash.substr(1));
        // Hash URL should always have a leading / just like window.location.pathname
        // does, so if an app ends up at a route like /#something then we add a
        // leading slash so all of our path-matching behaves the same as if it would
        // in a browser router.  This is particularly important when there exists a
        // root splat route (<Route path="*">) since that matches internally against
        // "/*" and we'd expect /#something to 404 in a hash router app.
        if (!pathname.startsWith("/") && !pathname.startsWith(".")) pathname = "/" + pathname;
        return $77048ffa45c40179$var$createLocation("", {
            pathname: pathname,
            search: search,
            hash: hash
        }, // state defaults to `null` because `window.history.state` does
        globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
    }
    function createHashHref(window1, to) {
        let base = window1.document.querySelector("base");
        let href = "";
        if (base && base.getAttribute("href")) {
            let url = window1.location.href;
            let hashIndex = url.indexOf("#");
            href = hashIndex === -1 ? url : url.slice(0, hashIndex);
        }
        return href + "#" + (typeof to === "string" ? to : $77048ffa45c40179$export$fe53371bee54353d(to));
    }
    function validateHashLocation(location, to) {
        $77048ffa45c40179$export$c0e02632e14916fd(location.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")");
    }
    return $77048ffa45c40179$var$getUrlBasedHistory(createHashLocation, createHashHref, validateHashLocation, options);
}
function $77048ffa45c40179$export$3e9cee6b33872309(value, message) {
    if (value === false || value === null || typeof value === "undefined") throw new Error(message);
}
function $77048ffa45c40179$export$c0e02632e14916fd(cond, message) {
    if (!cond) {
        // eslint-disable-next-line no-console
        if (typeof console !== "undefined") console.warn(message);
        try {
            // Welcome to debugging history!
            //
            // This error is thrown as a convenience, so you can more easily
            // find the source for a warning that appears in the console by
            // enabling "pause on exceptions" in your JavaScript debugger.
            throw new Error(message);
        // eslint-disable-next-line no-empty
        } catch (e) {}
    }
}
function $77048ffa45c40179$var$createKey() {
    return Math.random().toString(36).substr(2, 8);
}
/**
 * For browser-based histories, we combine the state and key into an object
 */ function $77048ffa45c40179$var$getHistoryState(location, index) {
    return {
        usr: location.state,
        key: location.key,
        idx: index
    };
}
/**
 * Creates a Location object with a unique key from the given Path
 */ function $77048ffa45c40179$var$createLocation(current, to, state, key) {
    if (state === void 0) state = null;
    let location = $77048ffa45c40179$var$_extends({
        pathname: typeof current === "string" ? current : current.pathname,
        search: "",
        hash: ""
    }, typeof to === "string" ? $77048ffa45c40179$export$8ccf933b0513f8d0(to) : to, {
        state: state,
        // TODO: This could be cleaned up.  push/replace should probably just take
        // full Locations now and avoid the need to run through this flow at all
        // But that's a pretty big refactor to the current test suite so going to
        // keep as is for the time being and just let any incoming keys take precedence
        key: to && to.key || key || $77048ffa45c40179$var$createKey()
    });
    return location;
}
/**
 * Creates a string URL path from the given pathname, search, and hash components.
 */ function $77048ffa45c40179$export$fe53371bee54353d(_ref) {
    let { pathname: pathname = "/", search: search = "", hash: hash = "" } = _ref;
    if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
    if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
    return pathname;
}
/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 */ function $77048ffa45c40179$export$8ccf933b0513f8d0(path) {
    let parsedPath = {};
    if (path) {
        let hashIndex = path.indexOf("#");
        if (hashIndex >= 0) {
            parsedPath.hash = path.substr(hashIndex);
            path = path.substr(0, hashIndex);
        }
        let searchIndex = path.indexOf("?");
        if (searchIndex >= 0) {
            parsedPath.search = path.substr(searchIndex);
            path = path.substr(0, searchIndex);
        }
        if (path) parsedPath.pathname = path;
    }
    return parsedPath;
}
function $77048ffa45c40179$var$getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
    if (options === void 0) options = {};
    let { window: window1 = document.defaultView, v5Compat: v5Compat = false } = options;
    let globalHistory = window1.history;
    let action = $77048ffa45c40179$export$e19cd5f9376f8cee.Pop;
    let listener = null;
    let index = getIndex();
    // Index should only be null when we initialize. If not, it's because the
    // user called history.pushState or history.replaceState directly, in which
    // case we should log a warning as it will result in bugs.
    if (index == null) {
        index = 0;
        globalHistory.replaceState($77048ffa45c40179$var$_extends({}, globalHistory.state, {
            idx: index
        }), "");
    }
    function getIndex() {
        let state = globalHistory.state || {
            idx: null
        };
        return state.idx;
    }
    function handlePop() {
        action = $77048ffa45c40179$export$e19cd5f9376f8cee.Pop;
        let nextIndex = getIndex();
        let delta = nextIndex == null ? null : nextIndex - index;
        index = nextIndex;
        if (listener) listener({
            action: action,
            location: history.location,
            delta: delta
        });
    }
    function push(to, state) {
        action = $77048ffa45c40179$export$e19cd5f9376f8cee.Push;
        let location = $77048ffa45c40179$var$createLocation(history.location, to, state);
        if (validateLocation) validateLocation(location, to);
        index = getIndex() + 1;
        let historyState = $77048ffa45c40179$var$getHistoryState(location, index);
        let url = history.createHref(location);
        // try...catch because iOS limits us to 100 pushState calls :/
        try {
            globalHistory.pushState(historyState, "", url);
        } catch (error) {
            // If the exception is because `state` can't be serialized, let that throw
            // outwards just like a replace call would so the dev knows the cause
            // https://html.spec.whatwg.org/multipage/nav-history-apis.html#shared-history-push/replace-state-steps
            // https://html.spec.whatwg.org/multipage/structured-data.html#structuredserializeinternal
            if (error instanceof DOMException && error.name === "DataCloneError") throw error;
            // They are going to lose state here, but there is no real
            // way to warn them about it since the page will refresh...
            window1.location.assign(url);
        }
        if (v5Compat && listener) listener({
            action: action,
            location: history.location,
            delta: 1
        });
    }
    function replace(to, state) {
        action = $77048ffa45c40179$export$e19cd5f9376f8cee.Replace;
        let location = $77048ffa45c40179$var$createLocation(history.location, to, state);
        if (validateLocation) validateLocation(location, to);
        index = getIndex();
        let historyState = $77048ffa45c40179$var$getHistoryState(location, index);
        let url = history.createHref(location);
        globalHistory.replaceState(historyState, "", url);
        if (v5Compat && listener) listener({
            action: action,
            location: history.location,
            delta: 0
        });
    }
    function createURL(to) {
        // window.location.origin is "null" (the literal string value) in Firefox
        // under certain conditions, notably when serving from a local HTML file
        // See https://bugzilla.mozilla.org/show_bug.cgi?id=878297
        let base = window1.location.origin !== "null" ? window1.location.origin : window1.location.href;
        let href = typeof to === "string" ? to : $77048ffa45c40179$export$fe53371bee54353d(to);
        // Treating this as a full URL will strip any trailing spaces so we need to
        // pre-encode them since they might be part of a matching splat param from
        // an ancestor route
        href = href.replace(/ $/, "%20");
        $77048ffa45c40179$export$3e9cee6b33872309(base, "No window.location.(origin|href) available to create URL for href: " + href);
        return new URL(href, base);
    }
    let history = {
        get action () {
            return action;
        },
        get location () {
            return getLocation(window1, globalHistory);
        },
        listen (fn) {
            if (listener) throw new Error("A history only accepts one active listener");
            window1.addEventListener($77048ffa45c40179$var$PopStateEventType, handlePop);
            listener = fn;
            return ()=>{
                window1.removeEventListener($77048ffa45c40179$var$PopStateEventType, handlePop);
                listener = null;
            };
        },
        createHref (to) {
            return createHref(window1, to);
        },
        createURL: createURL,
        encodeLocation (to) {
            // Encode a Location the same way window.location would
            let url = createURL(to);
            return {
                pathname: url.pathname,
                search: url.search,
                hash: url.hash
            };
        },
        push: push,
        replace: replace,
        go (n) {
            return globalHistory.go(n);
        }
    };
    return history;
}
//#endregion
var $77048ffa45c40179$var$ResultType;
(function(ResultType) {
    ResultType["data"] = "data";
    ResultType["deferred"] = "deferred";
    ResultType["redirect"] = "redirect";
    ResultType["error"] = "error";
})($77048ffa45c40179$var$ResultType || ($77048ffa45c40179$var$ResultType = {}));
const $77048ffa45c40179$var$immutableRouteKeys = new Set([
    "lazy",
    "caseSensitive",
    "path",
    "id",
    "index",
    "children"
]);
function $77048ffa45c40179$var$isIndexRoute(route) {
    return route.index === true;
}
// Walk the route tree generating unique IDs where necessary, so we are working
// solely with AgnosticDataRouteObject's within the Router
function $77048ffa45c40179$export$4a6d22b32134ea5d(routes, mapRouteProperties, parentPath, manifest) {
    if (parentPath === void 0) parentPath = [];
    if (manifest === void 0) manifest = {};
    return routes.map((route, index)=>{
        let treePath = [
            ...parentPath,
            index
        ];
        let id = typeof route.id === "string" ? route.id : treePath.join("-");
        $77048ffa45c40179$export$3e9cee6b33872309(route.index !== true || !route.children, "Cannot specify children on an index route");
        $77048ffa45c40179$export$3e9cee6b33872309(!manifest[id], 'Found a route id collision on id "' + id + '".  Route ' + "id's must be globally unique within Data Router usages");
        if ($77048ffa45c40179$var$isIndexRoute(route)) {
            let indexRoute = $77048ffa45c40179$var$_extends({}, route, mapRouteProperties(route), {
                id: id
            });
            manifest[id] = indexRoute;
            return indexRoute;
        } else {
            let pathOrLayoutRoute = $77048ffa45c40179$var$_extends({}, route, mapRouteProperties(route), {
                id: id,
                children: undefined
            });
            manifest[id] = pathOrLayoutRoute;
            if (route.children) pathOrLayoutRoute.children = $77048ffa45c40179$export$4a6d22b32134ea5d(route.children, mapRouteProperties, treePath, manifest);
            return pathOrLayoutRoute;
        }
    });
}
/**
 * Matches the given routes to a location and returns the match data.
 *
 * @see https://reactrouter.com/utils/match-routes
 */ function $77048ffa45c40179$export$2708184779ceb39d(routes, locationArg, basename) {
    if (basename === void 0) basename = "/";
    let location = typeof locationArg === "string" ? $77048ffa45c40179$export$8ccf933b0513f8d0(locationArg) : locationArg;
    let pathname = $77048ffa45c40179$export$b69e3301ce081aa3(location.pathname || "/", basename);
    if (pathname == null) return null;
    let branches = $77048ffa45c40179$var$flattenRoutes(routes);
    $77048ffa45c40179$var$rankRouteBranches(branches);
    let matches = null;
    for(let i = 0; matches == null && i < branches.length; ++i){
        // Incoming pathnames are generally encoded from either window.location
        // or from router.navigate, but we want to match against the unencoded
        // paths in the route definitions.  Memory router locations won't be
        // encoded here but there also shouldn't be anything to decode so this
        // should be a safe operation.  This avoids needing matchRoutes to be
        // history-aware.
        let decoded = $77048ffa45c40179$var$decodePath(pathname);
        matches = $77048ffa45c40179$var$matchRouteBranch(branches[i], decoded);
    }
    return matches;
}
function $77048ffa45c40179$export$b3fac024fad9e8ff(match, loaderData) {
    let { route: route, pathname: pathname, params: params } = match;
    return {
        id: route.id,
        pathname: pathname,
        params: params,
        data: loaderData[route.id],
        handle: route.handle
    };
}
function $77048ffa45c40179$var$flattenRoutes(routes, branches, parentsMeta, parentPath) {
    if (branches === void 0) branches = [];
    if (parentsMeta === void 0) parentsMeta = [];
    if (parentPath === void 0) parentPath = "";
    let flattenRoute = (route, index, relativePath)=>{
        let meta = {
            relativePath: relativePath === undefined ? route.path || "" : relativePath,
            caseSensitive: route.caseSensitive === true,
            childrenIndex: index,
            route: route
        };
        if (meta.relativePath.startsWith("/")) {
            $77048ffa45c40179$export$3e9cee6b33872309(meta.relativePath.startsWith(parentPath), 'Absolute route path "' + meta.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.");
            meta.relativePath = meta.relativePath.slice(parentPath.length);
        }
        let path = $77048ffa45c40179$export$86d9a7913e44197e([
            parentPath,
            meta.relativePath
        ]);
        let routesMeta = parentsMeta.concat(meta);
        // Add the children before adding this route to the array, so we traverse the
        // route tree depth-first and child routes appear before their parents in
        // the "flattened" version.
        if (route.children && route.children.length > 0) {
            $77048ffa45c40179$export$3e9cee6b33872309(// Our types know better, but runtime JS may not!
            // @ts-expect-error
            route.index !== true, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".'));
            $77048ffa45c40179$var$flattenRoutes(route.children, branches, routesMeta, path);
        }
        // Routes without a path shouldn't ever match by themselves unless they are
        // index routes, so don't add them to the list of possible branches.
        if (route.path == null && !route.index) return;
        branches.push({
            path: path,
            score: $77048ffa45c40179$var$computeScore(path, route.index),
            routesMeta: routesMeta
        });
    };
    routes.forEach((route, index)=>{
        var _route$path;
        // coarse-grain check for optional params
        if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) flattenRoute(route, index);
        else for (let exploded of $77048ffa45c40179$var$explodeOptionalSegments(route.path))flattenRoute(route, index, exploded);
    });
    return branches;
}
/**
 * Computes all combinations of optional path segments for a given path,
 * excluding combinations that are ambiguous and of lower priority.
 *
 * For example, `/one/:two?/three/:four?/:five?` explodes to:
 * - `/one/three`
 * - `/one/:two/three`
 * - `/one/three/:four`
 * - `/one/three/:five`
 * - `/one/:two/three/:four`
 * - `/one/:two/three/:five`
 * - `/one/three/:four/:five`
 * - `/one/:two/three/:four/:five`
 */ function $77048ffa45c40179$var$explodeOptionalSegments(path) {
    let segments = path.split("/");
    if (segments.length === 0) return [];
    let [first, ...rest] = segments;
    // Optional path segments are denoted by a trailing `?`
    let isOptional = first.endsWith("?");
    // Compute the corresponding required segment: `foo?` -> `foo`
    let required = first.replace(/\?$/, "");
    if (rest.length === 0) // Intepret empty string as omitting an optional segment
    // `["one", "", "three"]` corresponds to omitting `:two` from `/one/:two?/three` -> `/one/three`
    return isOptional ? [
        required,
        ""
    ] : [
        required
    ];
    let restExploded = $77048ffa45c40179$var$explodeOptionalSegments(rest.join("/"));
    let result = [];
    // All child paths with the prefix.  Do this for all children before the
    // optional version for all children, so we get consistent ordering where the
    // parent optional aspect is preferred as required.  Otherwise, we can get
    // child sections interspersed where deeper optional segments are higher than
    // parent optional segments, where for example, /:two would explode _earlier_
    // then /:one.  By always including the parent as required _for all children_
    // first, we avoid this issue
    result.push(...restExploded.map((subpath)=>subpath === "" ? required : [
            required,
            subpath
        ].join("/")));
    // Then, if this is an optional value, add all child versions without
    if (isOptional) result.push(...restExploded);
    // for absolute paths, ensure `/` instead of empty segment
    return result.map((exploded)=>path.startsWith("/") && exploded === "" ? "/" : exploded);
}
function $77048ffa45c40179$var$rankRouteBranches(branches) {
    branches.sort((a, b)=>a.score !== b.score ? b.score - a.score // Higher score first
         : $77048ffa45c40179$var$compareIndexes(a.routesMeta.map((meta)=>meta.childrenIndex), b.routesMeta.map((meta)=>meta.childrenIndex)));
}
const $77048ffa45c40179$var$paramRe = /^:[\w-]+$/;
const $77048ffa45c40179$var$dynamicSegmentValue = 3;
const $77048ffa45c40179$var$indexRouteValue = 2;
const $77048ffa45c40179$var$emptySegmentValue = 1;
const $77048ffa45c40179$var$staticSegmentValue = 10;
const $77048ffa45c40179$var$splatPenalty = -2;
const $77048ffa45c40179$var$isSplat = (s)=>s === "*";
function $77048ffa45c40179$var$computeScore(path, index) {
    let segments = path.split("/");
    let initialScore = segments.length;
    if (segments.some($77048ffa45c40179$var$isSplat)) initialScore += $77048ffa45c40179$var$splatPenalty;
    if (index) initialScore += $77048ffa45c40179$var$indexRouteValue;
    return segments.filter((s)=>!$77048ffa45c40179$var$isSplat(s)).reduce((score, segment)=>score + ($77048ffa45c40179$var$paramRe.test(segment) ? $77048ffa45c40179$var$dynamicSegmentValue : segment === "" ? $77048ffa45c40179$var$emptySegmentValue : $77048ffa45c40179$var$staticSegmentValue), initialScore);
}
function $77048ffa45c40179$var$compareIndexes(a, b) {
    let siblings = a.length === b.length && a.slice(0, -1).every((n, i)=>n === b[i]);
    return siblings ? // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    a[a.length - 1] - b[b.length - 1] : // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0;
}
function $77048ffa45c40179$var$matchRouteBranch(branch, pathname) {
    let { routesMeta: routesMeta } = branch;
    let matchedParams = {};
    let matchedPathname = "/";
    let matches = [];
    for(let i = 0; i < routesMeta.length; ++i){
        let meta = routesMeta[i];
        let end = i === routesMeta.length - 1;
        let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
        let match = $77048ffa45c40179$export$81336c211d5ff295({
            path: meta.relativePath,
            caseSensitive: meta.caseSensitive,
            end: end
        }, remainingPathname);
        if (!match) return null;
        Object.assign(matchedParams, match.params);
        let route = meta.route;
        matches.push({
            // TODO: Can this as be avoided?
            params: matchedParams,
            pathname: $77048ffa45c40179$export$86d9a7913e44197e([
                matchedPathname,
                match.pathname
            ]),
            pathnameBase: $77048ffa45c40179$export$a5c6d149b50c1d86($77048ffa45c40179$export$86d9a7913e44197e([
                matchedPathname,
                match.pathnameBase
            ])),
            route: route
        });
        if (match.pathnameBase !== "/") matchedPathname = $77048ffa45c40179$export$86d9a7913e44197e([
            matchedPathname,
            match.pathnameBase
        ]);
    }
    return matches;
}
/**
 * Returns a path with params interpolated.
 *
 * @see https://reactrouter.com/utils/generate-path
 */ function $77048ffa45c40179$export$82476f982757e71e(originalPath, params) {
    if (params === void 0) params = {};
    let path = originalPath;
    if (path.endsWith("*") && path !== "*" && !path.endsWith("/*")) {
        $77048ffa45c40179$export$c0e02632e14916fd(false, 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
        path = path.replace(/\*$/, "/*");
    }
    // ensure `/` is added at the beginning if the path is absolute
    const prefix = path.startsWith("/") ? "/" : "";
    const stringify = (p)=>p == null ? "" : typeof p === "string" ? p : String(p);
    const segments = path.split(/\/+/).map((segment, index, array)=>{
        const isLastSegment = index === array.length - 1;
        // only apply the splat if it's the last segment
        if (isLastSegment && segment === "*") {
            const star = "*";
            // Apply the splat
            return stringify(params[star]);
        }
        const keyMatch = segment.match(/^:([\w-]+)(\??)$/);
        if (keyMatch) {
            const [, key, optional] = keyMatch;
            let param = params[key];
            $77048ffa45c40179$export$3e9cee6b33872309(optional === "?" || param != null, 'Missing ":' + key + '" param');
            return stringify(param);
        }
        // Remove any optional markers from optional static segments
        return segment.replace(/\?$/g, "");
    })// Remove empty segments
    .filter((segment)=>!!segment);
    return prefix + segments.join("/");
}
/**
 * Performs pattern matching on a URL pathname and returns information about
 * the match.
 *
 * @see https://reactrouter.com/utils/match-path
 */ function $77048ffa45c40179$export$81336c211d5ff295(pattern, pathname) {
    if (typeof pattern === "string") pattern = {
        path: pattern,
        caseSensitive: false,
        end: true
    };
    let [matcher, compiledParams] = $77048ffa45c40179$var$compilePath(pattern.path, pattern.caseSensitive, pattern.end);
    let match = pathname.match(matcher);
    if (!match) return null;
    let matchedPathname = match[0];
    let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
    let captureGroups = match.slice(1);
    let params = compiledParams.reduce((memo, _ref, index)=>{
        let { paramName: paramName, isOptional: isOptional } = _ref;
        // We need to compute the pathnameBase here using the raw splat value
        // instead of using params["*"] later because it will be decoded then
        if (paramName === "*") {
            let splatValue = captureGroups[index] || "";
            pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
        }
        const value = captureGroups[index];
        if (isOptional && !value) memo[paramName] = undefined;
        else memo[paramName] = (value || "").replace(/%2F/g, "/");
        return memo;
    }, {});
    return {
        params: params,
        pathname: matchedPathname,
        pathnameBase: pathnameBase,
        pattern: pattern
    };
}
function $77048ffa45c40179$var$compilePath(path, caseSensitive, end) {
    if (caseSensitive === void 0) caseSensitive = false;
    if (end === void 0) end = true;
    $77048ffa45c40179$export$c0e02632e14916fd(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
    let params = [];
    let regexpSource = "^" + path.replace(/\/*\*?$/, "") // Ignore trailing / and /*, we'll handle it below
    .replace(/^\/*/, "/") // Make sure it has a leading /
    .replace(/[\\.*+^${}|()[\]]/g, "\\$&") // Escape special regex chars
    .replace(/\/:([\w-]+)(\?)?/g, (_, paramName, isOptional)=>{
        params.push({
            paramName: paramName,
            isOptional: isOptional != null
        });
        return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
    });
    if (path.endsWith("*")) {
        params.push({
            paramName: "*"
        });
        regexpSource += path === "*" || path === "/*" ? "(.*)$" // Already matched the initial /, just match the rest
         : "(?:\\/(.+)|\\/*)$"; // Don't include the / in params["*"]
    } else if (end) // When matching to the end, ignore trailing slashes
    regexpSource += "\\/*$";
    else if (path !== "" && path !== "/") // If our path is non-empty and contains anything beyond an initial slash,
    // then we have _some_ form of path in our regex, so we should expect to
    // match only if we find the end of this path segment.  Look for an optional
    // non-captured trailing slash (to match a portion of the URL) or the end
    // of the path (if we've matched to the end).  We used to do this with a
    // word boundary but that gives false positives on routes like
    // /user-preferences since `-` counts as a word boundary.
    regexpSource += "(?:(?=\\/|$))";
    let matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
    return [
        matcher,
        params
    ];
}
function $77048ffa45c40179$var$decodePath(value) {
    try {
        return value.split("/").map((v)=>decodeURIComponent(v).replace(/\//g, "%2F")).join("/");
    } catch (error) {
        $77048ffa45c40179$export$c0e02632e14916fd(false, 'The URL path "' + value + '" could not be decoded because it is is a ' + "malformed URL segment. This is probably due to a bad percent " + ("encoding (" + error + ")."));
        return value;
    }
}
/**
 * @private
 */ function $77048ffa45c40179$export$b69e3301ce081aa3(pathname, basename) {
    if (basename === "/") return pathname;
    if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) return null;
    // We want to leave trailing slash behavior in the user's control, so if they
    // specify a basename with a trailing slash, we should support it
    let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
    let nextChar = pathname.charAt(startIndex);
    if (nextChar && nextChar !== "/") // pathname does not start with basename/
    return null;
    return pathname.slice(startIndex) || "/";
}
/**
 * Returns a resolved path object relative to the given pathname.
 *
 * @see https://reactrouter.com/utils/resolve-path
 */ function $77048ffa45c40179$export$b09f2ff0bbcb43c7(to, fromPathname) {
    if (fromPathname === void 0) fromPathname = "/";
    let { pathname: toPathname, search: search = "", hash: hash = "" } = typeof to === "string" ? $77048ffa45c40179$export$8ccf933b0513f8d0(to) : to;
    let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : $77048ffa45c40179$var$resolvePathname(toPathname, fromPathname) : fromPathname;
    return {
        pathname: pathname,
        search: $77048ffa45c40179$var$normalizeSearch(search),
        hash: $77048ffa45c40179$var$normalizeHash(hash)
    };
}
function $77048ffa45c40179$var$resolvePathname(relativePath, fromPathname) {
    let segments = fromPathname.replace(/\/+$/, "").split("/");
    let relativeSegments = relativePath.split("/");
    relativeSegments.forEach((segment)=>{
        if (segment === "..") // Keep the root "" segment so the pathname starts at /
        {
            if (segments.length > 1) segments.pop();
        } else if (segment !== ".") segments.push(segment);
    });
    return segments.length > 1 ? segments.join("/") : "/";
}
function $77048ffa45c40179$var$getInvalidPathError(char, field, dest, path) {
    return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
/**
 * @private
 *
 * When processing relative navigation we want to ignore ancestor routes that
 * do not contribute to the path, such that index/pathless layout routes don't
 * interfere.
 *
 * For example, when moving a route element into an index route and/or a
 * pathless layout route, relative link behavior contained within should stay
 * the same.  Both of the following examples should link back to the root:
 *
 *   <Route path="/">
 *     <Route path="accounts" element={<Link to=".."}>
 *   </Route>
 *
 *   <Route path="/">
 *     <Route path="accounts">
 *       <Route element={<AccountsLayout />}>       // <-- Does not contribute
 *         <Route index element={<Link to=".."} />  // <-- Does not contribute
 *       </Route
 *     </Route>
 *   </Route>
 */ function $77048ffa45c40179$var$getPathContributingMatches(matches) {
    return matches.filter((match, index)=>index === 0 || match.route.path && match.route.path.length > 0);
}
// Return the array of pathnames for the current route matches - used to
// generate the routePathnames input for resolveTo()
function $77048ffa45c40179$export$a5784978eca585fa(matches, v7_relativeSplatPath) {
    let pathMatches = $77048ffa45c40179$var$getPathContributingMatches(matches);
    // When v7_relativeSplatPath is enabled, use the full pathname for the leaf
    // match so we include splat values for "." links.  See:
    // https://github.com/remix-run/react-router/issues/11052#issuecomment-1836589329
    if (v7_relativeSplatPath) return pathMatches.map((match, idx)=>idx === matches.length - 1 ? match.pathname : match.pathnameBase);
    return pathMatches.map((match)=>match.pathnameBase);
}
/**
 * @private
 */ function $77048ffa45c40179$export$cae722b0cc860f13(toArg, routePathnames, locationPathname, isPathRelative) {
    if (isPathRelative === void 0) isPathRelative = false;
    let to;
    if (typeof toArg === "string") to = $77048ffa45c40179$export$8ccf933b0513f8d0(toArg);
    else {
        to = $77048ffa45c40179$var$_extends({}, toArg);
        $77048ffa45c40179$export$3e9cee6b33872309(!to.pathname || !to.pathname.includes("?"), $77048ffa45c40179$var$getInvalidPathError("?", "pathname", "search", to));
        $77048ffa45c40179$export$3e9cee6b33872309(!to.pathname || !to.pathname.includes("#"), $77048ffa45c40179$var$getInvalidPathError("#", "pathname", "hash", to));
        $77048ffa45c40179$export$3e9cee6b33872309(!to.search || !to.search.includes("#"), $77048ffa45c40179$var$getInvalidPathError("#", "search", "hash", to));
    }
    let isEmptyPath = toArg === "" || to.pathname === "";
    let toPathname = isEmptyPath ? "/" : to.pathname;
    let from;
    // Routing is relative to the current pathname if explicitly requested.
    //
    // If a pathname is explicitly provided in `to`, it should be relative to the
    // route context. This is explained in `Note on `<Link to>` values` in our
    // migration guide from v5 as a means of disambiguation between `to` values
    // that begin with `/` and those that do not. However, this is problematic for
    // `to` values that do not provide a pathname. `to` can simply be a search or
    // hash string, in which case we should assume that the navigation is relative
    // to the current location's pathname and *not* the route pathname.
    if (toPathname == null) from = locationPathname;
    else {
        let routePathnameIndex = routePathnames.length - 1;
        // With relative="route" (the default), each leading .. segment means
        // "go up one route" instead of "go up one URL segment".  This is a key
        // difference from how <a href> works and a major reason we call this a
        // "to" value instead of a "href".
        if (!isPathRelative && toPathname.startsWith("..")) {
            let toSegments = toPathname.split("/");
            while(toSegments[0] === ".."){
                toSegments.shift();
                routePathnameIndex -= 1;
            }
            to.pathname = toSegments.join("/");
        }
        from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
    }
    let path = $77048ffa45c40179$export$b09f2ff0bbcb43c7(to, from);
    // Ensure the pathname has a trailing slash if the original "to" had one
    let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
    // Or if this was a link to the current path which has a trailing slash
    let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
    if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) path.pathname += "/";
    return path;
}
/**
 * @private
 */ function $77048ffa45c40179$export$f5655dfea9d981c7(to) {
    // Empty strings should be treated the same as / paths
    return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? $77048ffa45c40179$export$8ccf933b0513f8d0(to).pathname : to.pathname;
}
/**
 * @private
 */ const $77048ffa45c40179$export$86d9a7913e44197e = (paths)=>paths.join("/").replace(/\/\/+/g, "/");
/**
 * @private
 */ const $77048ffa45c40179$export$a5c6d149b50c1d86 = (pathname)=>pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
/**
 * @private
 */ const $77048ffa45c40179$var$normalizeSearch = (search)=>!search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
/**
 * @private
 */ const $77048ffa45c40179$var$normalizeHash = (hash)=>!hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
/**
 * This is a shortcut for creating `application/json` responses. Converts `data`
 * to JSON and sets the `Content-Type` header.
 */ const $77048ffa45c40179$export$7b419323e6ed4f31 = function json(data, init) {
    if (init === void 0) init = {};
    let responseInit = typeof init === "number" ? {
        status: init
    } : init;
    let headers = new Headers(responseInit.headers);
    if (!headers.has("Content-Type")) headers.set("Content-Type", "application/json; charset=utf-8");
    return new Response(JSON.stringify(data), $77048ffa45c40179$var$_extends({}, responseInit, {
        headers: headers
    }));
};
class $77048ffa45c40179$export$42a99a7a4bc0e76a extends Error {
}
class $77048ffa45c40179$export$61d759255b4eec65 {
    constructor(data, responseInit){
        this.pendingKeysSet = new Set();
        this.subscribers = new Set();
        this.deferredKeys = [];
        $77048ffa45c40179$export$3e9cee6b33872309(data && typeof data === "object" && !Array.isArray(data), "defer() only accepts plain objects");
        // Set up an AbortController + Promise we can race against to exit early
        // cancellation
        let reject;
        this.abortPromise = new Promise((_, r)=>reject = r);
        this.controller = new AbortController();
        let onAbort = ()=>reject(new $77048ffa45c40179$export$42a99a7a4bc0e76a("Deferred data aborted"));
        this.unlistenAbortSignal = ()=>this.controller.signal.removeEventListener("abort", onAbort);
        this.controller.signal.addEventListener("abort", onAbort);
        this.data = Object.entries(data).reduce((acc, _ref2)=>{
            let [key, value] = _ref2;
            return Object.assign(acc, {
                [key]: this.trackPromise(key, value)
            });
        }, {});
        if (this.done) // All incoming values were resolved
        this.unlistenAbortSignal();
        this.init = responseInit;
    }
    trackPromise(key, value) {
        if (!(value instanceof Promise)) return value;
        this.deferredKeys.push(key);
        this.pendingKeysSet.add(key);
        // We store a little wrapper promise that will be extended with
        // _data/_error props upon resolve/reject
        let promise = Promise.race([
            value,
            this.abortPromise
        ]).then((data)=>this.onSettle(promise, key, undefined, data), (error)=>this.onSettle(promise, key, error));
        // Register rejection listeners to avoid uncaught promise rejections on
        // errors or aborted deferred values
        promise.catch(()=>{});
        Object.defineProperty(promise, "_tracked", {
            get: ()=>true
        });
        return promise;
    }
    onSettle(promise, key, error, data) {
        if (this.controller.signal.aborted && error instanceof $77048ffa45c40179$export$42a99a7a4bc0e76a) {
            this.unlistenAbortSignal();
            Object.defineProperty(promise, "_error", {
                get: ()=>error
            });
            return Promise.reject(error);
        }
        this.pendingKeysSet.delete(key);
        if (this.done) // Nothing left to abort!
        this.unlistenAbortSignal();
        // If the promise was resolved/rejected with undefined, we'll throw an error as you
        // should always resolve with a value or null
        if (error === undefined && data === undefined) {
            let undefinedError = new Error('Deferred data for key "' + key + '" resolved/rejected with `undefined`, ' + "you must resolve/reject with a value or `null`.");
            Object.defineProperty(promise, "_error", {
                get: ()=>undefinedError
            });
            this.emit(false, key);
            return Promise.reject(undefinedError);
        }
        if (data === undefined) {
            Object.defineProperty(promise, "_error", {
                get: ()=>error
            });
            this.emit(false, key);
            return Promise.reject(error);
        }
        Object.defineProperty(promise, "_data", {
            get: ()=>data
        });
        this.emit(false, key);
        return data;
    }
    emit(aborted, settledKey) {
        this.subscribers.forEach((subscriber)=>subscriber(aborted, settledKey));
    }
    subscribe(fn) {
        this.subscribers.add(fn);
        return ()=>this.subscribers.delete(fn);
    }
    cancel() {
        this.controller.abort();
        this.pendingKeysSet.forEach((v, k)=>this.pendingKeysSet.delete(k));
        this.emit(true);
    }
    async resolveData(signal) {
        let aborted = false;
        if (!this.done) {
            let onAbort = ()=>this.cancel();
            signal.addEventListener("abort", onAbort);
            aborted = await new Promise((resolve)=>{
                this.subscribe((aborted)=>{
                    signal.removeEventListener("abort", onAbort);
                    if (aborted || this.done) resolve(aborted);
                });
            });
        }
        return aborted;
    }
    get done() {
        return this.pendingKeysSet.size === 0;
    }
    get unwrappedData() {
        $77048ffa45c40179$export$3e9cee6b33872309(this.data !== null && this.done, "Can only unwrap data on initialized and settled deferreds");
        return Object.entries(this.data).reduce((acc, _ref3)=>{
            let [key, value] = _ref3;
            return Object.assign(acc, {
                [key]: $77048ffa45c40179$var$unwrapTrackedPromise(value)
            });
        }, {});
    }
    get pendingKeys() {
        return Array.from(this.pendingKeysSet);
    }
}
function $77048ffa45c40179$var$isTrackedPromise(value) {
    return value instanceof Promise && value._tracked === true;
}
function $77048ffa45c40179$var$unwrapTrackedPromise(value) {
    if (!$77048ffa45c40179$var$isTrackedPromise(value)) return value;
    if (value._error) throw value._error;
    return value._data;
}
const $77048ffa45c40179$export$260e5c0943f31606 = function defer(data, init) {
    if (init === void 0) init = {};
    let responseInit = typeof init === "number" ? {
        status: init
    } : init;
    return new $77048ffa45c40179$export$61d759255b4eec65(data, responseInit);
};
/**
 * A redirect response. Sets the status code and the `Location` header.
 * Defaults to "302 Found".
 */ const $77048ffa45c40179$export$89e12c5b50f7529d = function redirect(url, init) {
    if (init === void 0) init = 302;
    let responseInit = init;
    if (typeof responseInit === "number") responseInit = {
        status: responseInit
    };
    else if (typeof responseInit.status === "undefined") responseInit.status = 302;
    let headers = new Headers(responseInit.headers);
    headers.set("Location", url);
    return new Response(null, $77048ffa45c40179$var$_extends({}, responseInit, {
        headers: headers
    }));
};
/**
 * A redirect response that will force a document reload to the new location.
 * Sets the status code and the `Location` header.
 * Defaults to "302 Found".
 */ const $77048ffa45c40179$export$a6cd19cd1951a23c = (url, init)=>{
    let response = $77048ffa45c40179$export$89e12c5b50f7529d(url, init);
    response.headers.set("X-Remix-Reload-Document", "true");
    return response;
};
/**
 * @private
 * Utility class we use to hold auto-unwrapped 4xx/5xx Response bodies
 *
 * We don't export the class for public use since it's an implementation
 * detail, but we export the interface above so folks can build their own
 * abstractions around instances via isRouteErrorResponse()
 */ class $77048ffa45c40179$export$6c6580e81da25755 {
    constructor(status, statusText, data, internal){
        if (internal === void 0) internal = false;
        this.status = status;
        this.statusText = statusText || "";
        this.internal = internal;
        if (data instanceof Error) {
            this.data = data.toString();
            this.error = data;
        } else this.data = data;
    }
}
/**
 * Check if the given error is an ErrorResponse generated from a 4xx/5xx
 * Response thrown from an action/loader
 */ function $77048ffa45c40179$export$972111febbeef05b(error) {
    return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}
const $77048ffa45c40179$var$validMutationMethodsArr = [
    "post",
    "put",
    "patch",
    "delete"
];
const $77048ffa45c40179$var$validMutationMethods = new Set($77048ffa45c40179$var$validMutationMethodsArr);
const $77048ffa45c40179$var$validRequestMethodsArr = [
    "get",
    ...$77048ffa45c40179$var$validMutationMethodsArr
];
const $77048ffa45c40179$var$validRequestMethods = new Set($77048ffa45c40179$var$validRequestMethodsArr);
const $77048ffa45c40179$var$redirectStatusCodes = new Set([
    301,
    302,
    303,
    307,
    308
]);
const $77048ffa45c40179$var$redirectPreserveMethodStatusCodes = new Set([
    307,
    308
]);
const $77048ffa45c40179$export$ed3e14b2f9e105d0 = {
    state: "idle",
    location: undefined,
    formMethod: undefined,
    formAction: undefined,
    formEncType: undefined,
    formData: undefined,
    json: undefined,
    text: undefined
};
const $77048ffa45c40179$export$52eace9c284d3585 = {
    state: "idle",
    data: undefined,
    formMethod: undefined,
    formAction: undefined,
    formEncType: undefined,
    formData: undefined,
    json: undefined,
    text: undefined
};
const $77048ffa45c40179$export$386d57f03f0b2883 = {
    state: "unblocked",
    proceed: undefined,
    reset: undefined,
    location: undefined
};
const $77048ffa45c40179$var$ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
const $77048ffa45c40179$var$defaultMapRouteProperties = (route)=>({
        hasErrorBoundary: Boolean(route.hasErrorBoundary)
    });
const $77048ffa45c40179$var$TRANSITIONS_STORAGE_KEY = "remix-router-transitions";
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createRouter
////////////////////////////////////////////////////////////////////////////////
/**
 * Create a router and listen to history POP navigations
 */ function $77048ffa45c40179$export$baddd0131ee8c05b(init) {
    const routerWindow = init.window ? init.window : typeof window !== "undefined" ? window : undefined;
    const isBrowser = typeof routerWindow !== "undefined" && typeof routerWindow.document !== "undefined" && typeof routerWindow.document.createElement !== "undefined";
    const isServer = !isBrowser;
    $77048ffa45c40179$export$3e9cee6b33872309(init.routes.length > 0, "You must provide a non-empty routes array to createRouter");
    let mapRouteProperties;
    if (init.mapRouteProperties) mapRouteProperties = init.mapRouteProperties;
    else if (init.detectErrorBoundary) {
        // If they are still using the deprecated version, wrap it with the new API
        let detectErrorBoundary = init.detectErrorBoundary;
        mapRouteProperties = (route)=>({
                hasErrorBoundary: detectErrorBoundary(route)
            });
    } else mapRouteProperties = $77048ffa45c40179$var$defaultMapRouteProperties;
    // Routes keyed by ID
    let manifest = {};
    // Routes in tree format for matching
    let dataRoutes = $77048ffa45c40179$export$4a6d22b32134ea5d(init.routes, mapRouteProperties, undefined, manifest);
    let inFlightDataRoutes;
    let basename = init.basename || "/";
    let dataStrategyImpl = init.unstable_dataStrategy || $77048ffa45c40179$var$defaultDataStrategy;
    // Config driven behavior flags
    let future = $77048ffa45c40179$var$_extends({
        v7_fetcherPersist: false,
        v7_normalizeFormMethod: false,
        v7_partialHydration: false,
        v7_prependBasename: false,
        v7_relativeSplatPath: false,
        unstable_skipActionErrorRevalidation: false
    }, init.future);
    // Cleanup function for history
    let unlistenHistory = null;
    // Externally-provided functions to call on all state changes
    let subscribers = new Set();
    // Externally-provided object to hold scroll restoration locations during routing
    let savedScrollPositions = null;
    // Externally-provided function to get scroll restoration keys
    let getScrollRestorationKey = null;
    // Externally-provided function to get current scroll position
    let getScrollPosition = null;
    // One-time flag to control the initial hydration scroll restoration.  Because
    // we don't get the saved positions from <ScrollRestoration /> until _after_
    // the initial render, we need to manually trigger a separate updateState to
    // send along the restoreScrollPosition
    // Set to true if we have `hydrationData` since we assume we were SSR'd and that
    // SSR did the initial scroll restoration.
    let initialScrollRestored = init.hydrationData != null;
    let initialMatches = $77048ffa45c40179$export$2708184779ceb39d(dataRoutes, init.history.location, basename);
    let initialErrors = null;
    if (initialMatches == null) {
        // If we do not match a user-provided-route, fall back to the root
        // to allow the error boundary to take over
        let error = $77048ffa45c40179$var$getInternalRouterError(404, {
            pathname: init.history.location.pathname
        });
        let { matches: matches, route: route } = $77048ffa45c40179$var$getShortCircuitMatches(dataRoutes);
        initialMatches = matches;
        initialErrors = {
            [route.id]: error
        };
    }
    let initialized;
    let hasLazyRoutes = initialMatches.some((m)=>m.route.lazy);
    let hasLoaders = initialMatches.some((m)=>m.route.loader);
    if (hasLazyRoutes) // All initialMatches need to be loaded before we're ready.  If we have lazy
    // functions around still then we'll need to run them in initialize()
    initialized = false;
    else if (!hasLoaders) // If we've got no loaders to run, then we're good to go
    initialized = true;
    else if (future.v7_partialHydration) {
        // If partial hydration is enabled, we're initialized so long as we were
        // provided with hydrationData for every route with a loader, and no loaders
        // were marked for explicit hydration
        let loaderData = init.hydrationData ? init.hydrationData.loaderData : null;
        let errors = init.hydrationData ? init.hydrationData.errors : null;
        let isRouteInitialized = (m)=>{
            // No loader, nothing to initialize
            if (!m.route.loader) return true;
            // Explicitly opting-in to running on hydration
            if (typeof m.route.loader === "function" && m.route.loader.hydrate === true) return false;
            // Otherwise, initialized if hydrated with data or an error
            return loaderData && loaderData[m.route.id] !== undefined || errors && errors[m.route.id] !== undefined;
        };
        // If errors exist, don't consider routes below the boundary
        if (errors) {
            let idx = initialMatches.findIndex((m)=>errors[m.route.id] !== undefined);
            initialized = initialMatches.slice(0, idx + 1).every(isRouteInitialized);
        } else initialized = initialMatches.every(isRouteInitialized);
    } else // Without partial hydration - we're initialized if we were provided any
    // hydrationData - which is expected to be complete
    initialized = init.hydrationData != null;
    let router;
    let state = {
        historyAction: init.history.action,
        location: init.history.location,
        matches: initialMatches,
        initialized: initialized,
        navigation: $77048ffa45c40179$export$ed3e14b2f9e105d0,
        // Don't restore on initial updateState() if we were SSR'd
        restoreScrollPosition: init.hydrationData != null ? false : null,
        preventScrollReset: false,
        revalidation: "idle",
        loaderData: init.hydrationData && init.hydrationData.loaderData || {},
        actionData: init.hydrationData && init.hydrationData.actionData || null,
        errors: init.hydrationData && init.hydrationData.errors || initialErrors,
        fetchers: new Map(),
        blockers: new Map()
    };
    // -- Stateful internal variables to manage navigations --
    // Current navigation in progress (to be committed in completeNavigation)
    let pendingAction = $77048ffa45c40179$export$e19cd5f9376f8cee.Pop;
    // Should the current navigation prevent the scroll reset if scroll cannot
    // be restored?
    let pendingPreventScrollReset = false;
    // AbortController for the active navigation
    let pendingNavigationController;
    // Should the current navigation enable document.startViewTransition?
    let pendingViewTransitionEnabled = false;
    // Store applied view transitions so we can apply them on POP
    let appliedViewTransitions = new Map();
    // Cleanup function for persisting applied transitions to sessionStorage
    let removePageHideEventListener = null;
    // We use this to avoid touching history in completeNavigation if a
    // revalidation is entirely uninterrupted
    let isUninterruptedRevalidation = false;
    // Use this internal flag to force revalidation of all loaders:
    //  - submissions (completed or interrupted)
    //  - useRevalidator()
    //  - X-Remix-Revalidate (from redirect)
    let isRevalidationRequired = false;
    // Use this internal array to capture routes that require revalidation due
    // to a cancelled deferred on action submission
    let cancelledDeferredRoutes = [];
    // Use this internal array to capture fetcher loads that were cancelled by an
    // action navigation and require revalidation
    let cancelledFetcherLoads = [];
    // AbortControllers for any in-flight fetchers
    let fetchControllers = new Map();
    // Track loads based on the order in which they started
    let incrementingLoadId = 0;
    // Track the outstanding pending navigation data load to be compared against
    // the globally incrementing load when a fetcher load lands after a completed
    // navigation
    let pendingNavigationLoadId = -1;
    // Fetchers that triggered data reloads as a result of their actions
    let fetchReloadIds = new Map();
    // Fetchers that triggered redirect navigations
    let fetchRedirectIds = new Set();
    // Most recent href/match for fetcher.load calls for fetchers
    let fetchLoadMatches = new Map();
    // Ref-count mounted fetchers so we know when it's ok to clean them up
    let activeFetchers = new Map();
    // Fetchers that have requested a delete when using v7_fetcherPersist,
    // they'll be officially removed after they return to idle
    let deletedFetchers = new Set();
    // Store DeferredData instances for active route matches.  When a
    // route loader returns defer() we stick one in here.  Then, when a nested
    // promise resolves we update loaderData.  If a new navigation starts we
    // cancel active deferreds for eliminated routes.
    let activeDeferreds = new Map();
    // Store blocker functions in a separate Map outside of router state since
    // we don't need to update UI state if they change
    let blockerFunctions = new Map();
    // Flag to ignore the next history update, so we can revert the URL change on
    // a POP navigation that was blocked by the user without touching router state
    let ignoreNextHistoryUpdate = false;
    // Initialize the router, all side effects should be kicked off from here.
    // Implemented as a Fluent API for ease of:
    //   let router = createRouter(init).initialize();
    function initialize() {
        // If history informs us of a POP navigation, start the navigation but do not update
        // state.  We'll update our own state once the navigation completes
        unlistenHistory = init.history.listen((_ref)=>{
            let { action: historyAction, location: location, delta: delta } = _ref;
            // Ignore this event if it was just us resetting the URL from a
            // blocked POP navigation
            if (ignoreNextHistoryUpdate) {
                ignoreNextHistoryUpdate = false;
                return;
            }
            $77048ffa45c40179$export$c0e02632e14916fd(blockerFunctions.size === 0 || delta != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
            let blockerKey = shouldBlockNavigation({
                currentLocation: state.location,
                nextLocation: location,
                historyAction: historyAction
            });
            if (blockerKey && delta != null) {
                // Restore the URL to match the current UI, but don't update router state
                ignoreNextHistoryUpdate = true;
                init.history.go(delta * -1);
                // Put the blocker into a blocked state
                updateBlocker(blockerKey, {
                    state: "blocked",
                    location: location,
                    proceed () {
                        updateBlocker(blockerKey, {
                            state: "proceeding",
                            proceed: undefined,
                            reset: undefined,
                            location: location
                        });
                        // Re-do the same POP navigation we just blocked
                        init.history.go(delta);
                    },
                    reset () {
                        let blockers = new Map(state.blockers);
                        blockers.set(blockerKey, $77048ffa45c40179$export$386d57f03f0b2883);
                        updateState({
                            blockers: blockers
                        });
                    }
                });
                return;
            }
            return startNavigation(historyAction, location);
        });
        if (isBrowser) {
            // FIXME: This feels gross.  How can we cleanup the lines between
            // scrollRestoration/appliedTransitions persistance?
            $77048ffa45c40179$var$restoreAppliedTransitions(routerWindow, appliedViewTransitions);
            let _saveAppliedTransitions = ()=>$77048ffa45c40179$var$persistAppliedTransitions(routerWindow, appliedViewTransitions);
            routerWindow.addEventListener("pagehide", _saveAppliedTransitions);
            removePageHideEventListener = ()=>routerWindow.removeEventListener("pagehide", _saveAppliedTransitions);
        }
        // Kick off initial data load if needed.  Use Pop to avoid modifying history
        // Note we don't do any handling of lazy here.  For SPA's it'll get handled
        // in the normal navigation flow.  For SSR it's expected that lazy modules are
        // resolved prior to router creation since we can't go into a fallbackElement
        // UI for SSR'd apps
        if (!state.initialized) startNavigation($77048ffa45c40179$export$e19cd5f9376f8cee.Pop, state.location, {
            initialHydration: true
        });
        return router;
    }
    // Clean up a router and it's side effects
    function dispose() {
        if (unlistenHistory) unlistenHistory();
        if (removePageHideEventListener) removePageHideEventListener();
        subscribers.clear();
        pendingNavigationController && pendingNavigationController.abort();
        state.fetchers.forEach((_, key)=>deleteFetcher(key));
        state.blockers.forEach((_, key)=>deleteBlocker(key));
    }
    // Subscribe to state updates for the router
    function subscribe(fn) {
        subscribers.add(fn);
        return ()=>subscribers.delete(fn);
    }
    // Update our state and notify the calling context of the change
    function updateState(newState, opts) {
        if (opts === void 0) opts = {};
        state = $77048ffa45c40179$var$_extends({}, state, newState);
        // Prep fetcher cleanup so we can tell the UI which fetcher data entries
        // can be removed
        let completedFetchers = [];
        let deletedFetchersKeys = [];
        if (future.v7_fetcherPersist) state.fetchers.forEach((fetcher, key)=>{
            if (fetcher.state === "idle") {
                if (deletedFetchers.has(key)) // Unmounted from the UI and can be totally removed
                deletedFetchersKeys.push(key);
                else // Returned to idle but still mounted in the UI, so semi-remains for
                // revalidations and such
                completedFetchers.push(key);
            }
        });
        // Iterate over a local copy so that if flushSync is used and we end up
        // removing and adding a new subscriber due to the useCallback dependencies,
        // we don't get ourselves into a loop calling the new subscriber immediately
        [
            ...subscribers
        ].forEach((subscriber)=>subscriber(state, {
                deletedFetchers: deletedFetchersKeys,
                unstable_viewTransitionOpts: opts.viewTransitionOpts,
                unstable_flushSync: opts.flushSync === true
            }));
        // Remove idle fetchers from state since we only care about in-flight fetchers.
        if (future.v7_fetcherPersist) {
            completedFetchers.forEach((key)=>state.fetchers.delete(key));
            deletedFetchersKeys.forEach((key)=>deleteFetcher(key));
        }
    }
    // Complete a navigation returning the state.navigation back to the IDLE_NAVIGATION
    // and setting state.[historyAction/location/matches] to the new route.
    // - Location is a required param
    // - Navigation will always be set to IDLE_NAVIGATION
    // - Can pass any other state in newState
    function completeNavigation(location, newState, _temp) {
        var _location$state, _location$state2;
        let { flushSync: flushSync } = _temp === void 0 ? {} : _temp;
        // Deduce if we're in a loading/actionReload state:
        // - We have committed actionData in the store
        // - The current navigation was a mutation submission
        // - We're past the submitting state and into the loading state
        // - The location being loaded is not the result of a redirect
        let isActionReload = state.actionData != null && state.navigation.formMethod != null && $77048ffa45c40179$var$isMutationMethod(state.navigation.formMethod) && state.navigation.state === "loading" && ((_location$state = location.state) == null ? void 0 : _location$state._isRedirect) !== true;
        let actionData;
        if (newState.actionData) {
            if (Object.keys(newState.actionData).length > 0) actionData = newState.actionData;
            else // Empty actionData -> clear prior actionData due to an action error
            actionData = null;
        } else if (isActionReload) // Keep the current data if we're wrapping up the action reload
        actionData = state.actionData;
        else // Clear actionData on any other completed navigations
        actionData = null;
        // Always preserve any existing loaderData from re-used routes
        let loaderData = newState.loaderData ? $77048ffa45c40179$var$mergeLoaderData(state.loaderData, newState.loaderData, newState.matches || [], newState.errors) : state.loaderData;
        // On a successful navigation we can assume we got through all blockers
        // so we can start fresh
        let blockers = state.blockers;
        if (blockers.size > 0) {
            blockers = new Map(blockers);
            blockers.forEach((_, k)=>blockers.set(k, $77048ffa45c40179$export$386d57f03f0b2883));
        }
        // Always respect the user flag.  Otherwise don't reset on mutation
        // submission navigations unless they redirect
        let preventScrollReset = pendingPreventScrollReset === true || state.navigation.formMethod != null && $77048ffa45c40179$var$isMutationMethod(state.navigation.formMethod) && ((_location$state2 = location.state) == null ? void 0 : _location$state2._isRedirect) !== true;
        if (inFlightDataRoutes) {
            dataRoutes = inFlightDataRoutes;
            inFlightDataRoutes = undefined;
        }
        if (isUninterruptedRevalidation) ;
        else if (pendingAction === $77048ffa45c40179$export$e19cd5f9376f8cee.Pop) ;
        else if (pendingAction === $77048ffa45c40179$export$e19cd5f9376f8cee.Push) init.history.push(location, location.state);
        else if (pendingAction === $77048ffa45c40179$export$e19cd5f9376f8cee.Replace) init.history.replace(location, location.state);
        let viewTransitionOpts;
        // On POP, enable transitions if they were enabled on the original navigation
        if (pendingAction === $77048ffa45c40179$export$e19cd5f9376f8cee.Pop) {
            // Forward takes precedence so they behave like the original navigation
            let priorPaths = appliedViewTransitions.get(state.location.pathname);
            if (priorPaths && priorPaths.has(location.pathname)) viewTransitionOpts = {
                currentLocation: state.location,
                nextLocation: location
            };
            else if (appliedViewTransitions.has(location.pathname)) // If we don't have a previous forward nav, assume we're popping back to
            // the new location and enable if that location previously enabled
            viewTransitionOpts = {
                currentLocation: location,
                nextLocation: state.location
            };
        } else if (pendingViewTransitionEnabled) {
            // Store the applied transition on PUSH/REPLACE
            let toPaths = appliedViewTransitions.get(state.location.pathname);
            if (toPaths) toPaths.add(location.pathname);
            else {
                toPaths = new Set([
                    location.pathname
                ]);
                appliedViewTransitions.set(state.location.pathname, toPaths);
            }
            viewTransitionOpts = {
                currentLocation: state.location,
                nextLocation: location
            };
        }
        updateState($77048ffa45c40179$var$_extends({}, newState, {
            actionData: actionData,
            loaderData: loaderData,
            historyAction: pendingAction,
            location: location,
            initialized: true,
            navigation: $77048ffa45c40179$export$ed3e14b2f9e105d0,
            revalidation: "idle",
            restoreScrollPosition: getSavedScrollPosition(location, newState.matches || state.matches),
            preventScrollReset: preventScrollReset,
            blockers: blockers
        }), {
            viewTransitionOpts: viewTransitionOpts,
            flushSync: flushSync === true
        });
        // Reset stateful navigation vars
        pendingAction = $77048ffa45c40179$export$e19cd5f9376f8cee.Pop;
        pendingPreventScrollReset = false;
        pendingViewTransitionEnabled = false;
        isUninterruptedRevalidation = false;
        isRevalidationRequired = false;
        cancelledDeferredRoutes = [];
        cancelledFetcherLoads = [];
    }
    // Trigger a navigation event, which can either be a numerical POP or a PUSH
    // replace with an optional submission
    async function navigate(to, opts) {
        if (typeof to === "number") {
            init.history.go(to);
            return;
        }
        let normalizedPath = $77048ffa45c40179$var$normalizeTo(state.location, state.matches, basename, future.v7_prependBasename, to, future.v7_relativeSplatPath, opts == null ? void 0 : opts.fromRouteId, opts == null ? void 0 : opts.relative);
        let { path: path, submission: submission, error: error } = $77048ffa45c40179$var$normalizeNavigateOptions(future.v7_normalizeFormMethod, false, normalizedPath, opts);
        let currentLocation = state.location;
        let nextLocation = $77048ffa45c40179$var$createLocation(state.location, path, opts && opts.state);
        // When using navigate as a PUSH/REPLACE we aren't reading an already-encoded
        // URL from window.location, so we need to encode it here so the behavior
        // remains the same as POP and non-data-router usages.  new URL() does all
        // the same encoding we'd get from a history.pushState/window.location read
        // without having to touch history
        nextLocation = $77048ffa45c40179$var$_extends({}, nextLocation, init.history.encodeLocation(nextLocation));
        let userReplace = opts && opts.replace != null ? opts.replace : undefined;
        let historyAction = $77048ffa45c40179$export$e19cd5f9376f8cee.Push;
        if (userReplace === true) historyAction = $77048ffa45c40179$export$e19cd5f9376f8cee.Replace;
        else if (userReplace === false) ;
        else if (submission != null && $77048ffa45c40179$var$isMutationMethod(submission.formMethod) && submission.formAction === state.location.pathname + state.location.search) // By default on submissions to the current location we REPLACE so that
        // users don't have to double-click the back button to get to the prior
        // location.  If the user redirects to a different location from the
        // action/loader this will be ignored and the redirect will be a PUSH
        historyAction = $77048ffa45c40179$export$e19cd5f9376f8cee.Replace;
        let preventScrollReset = opts && "preventScrollReset" in opts ? opts.preventScrollReset === true : undefined;
        let flushSync = (opts && opts.unstable_flushSync) === true;
        let blockerKey = shouldBlockNavigation({
            currentLocation: currentLocation,
            nextLocation: nextLocation,
            historyAction: historyAction
        });
        if (blockerKey) {
            // Put the blocker into a blocked state
            updateBlocker(blockerKey, {
                state: "blocked",
                location: nextLocation,
                proceed () {
                    updateBlocker(blockerKey, {
                        state: "proceeding",
                        proceed: undefined,
                        reset: undefined,
                        location: nextLocation
                    });
                    // Send the same navigation through
                    navigate(to, opts);
                },
                reset () {
                    let blockers = new Map(state.blockers);
                    blockers.set(blockerKey, $77048ffa45c40179$export$386d57f03f0b2883);
                    updateState({
                        blockers: blockers
                    });
                }
            });
            return;
        }
        return await startNavigation(historyAction, nextLocation, {
            submission: submission,
            // Send through the formData serialization error if we have one so we can
            // render at the right error boundary after we match routes
            pendingError: error,
            preventScrollReset: preventScrollReset,
            replace: opts && opts.replace,
            enableViewTransition: opts && opts.unstable_viewTransition,
            flushSync: flushSync
        });
    }
    // Revalidate all current loaders.  If a navigation is in progress or if this
    // is interrupted by a navigation, allow this to "succeed" by calling all
    // loaders during the next loader round
    function revalidate() {
        interruptActiveLoads();
        updateState({
            revalidation: "loading"
        });
        // If we're currently submitting an action, we don't need to start a new
        // navigation, we'll just let the follow up loader execution call all loaders
        if (state.navigation.state === "submitting") return;
        // If we're currently in an idle state, start a new navigation for the current
        // action/location and mark it as uninterrupted, which will skip the history
        // update in completeNavigation
        if (state.navigation.state === "idle") {
            startNavigation(state.historyAction, state.location, {
                startUninterruptedRevalidation: true
            });
            return;
        }
        // Otherwise, if we're currently in a loading state, just start a new
        // navigation to the navigation.location but do not trigger an uninterrupted
        // revalidation so that history correctly updates once the navigation completes
        startNavigation(pendingAction || state.historyAction, state.navigation.location, {
            overrideNavigation: state.navigation
        });
    }
    // Start a navigation to the given action/location.  Can optionally provide a
    // overrideNavigation which will override the normalLoad in the case of a redirect
    // navigation
    async function startNavigation(historyAction, location, opts) {
        // Abort any in-progress navigations and start a new one. Unset any ongoing
        // uninterrupted revalidations unless told otherwise, since we want this
        // new navigation to update history normally
        pendingNavigationController && pendingNavigationController.abort();
        pendingNavigationController = null;
        pendingAction = historyAction;
        isUninterruptedRevalidation = (opts && opts.startUninterruptedRevalidation) === true;
        // Save the current scroll position every time we start a new navigation,
        // and track whether we should reset scroll on completion
        saveScrollPosition(state.location, state.matches);
        pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
        pendingViewTransitionEnabled = (opts && opts.enableViewTransition) === true;
        let routesToUse = inFlightDataRoutes || dataRoutes;
        let loadingNavigation = opts && opts.overrideNavigation;
        let matches = $77048ffa45c40179$export$2708184779ceb39d(routesToUse, location, basename);
        let flushSync = (opts && opts.flushSync) === true;
        // Short circuit with a 404 on the root error boundary if we match nothing
        if (!matches) {
            let error = $77048ffa45c40179$var$getInternalRouterError(404, {
                pathname: location.pathname
            });
            let { matches: notFoundMatches, route: route } = $77048ffa45c40179$var$getShortCircuitMatches(routesToUse);
            // Cancel all pending deferred on 404s since we don't keep any routes
            cancelActiveDeferreds();
            completeNavigation(location, {
                matches: notFoundMatches,
                loaderData: {},
                errors: {
                    [route.id]: error
                }
            }, {
                flushSync: flushSync
            });
            return;
        }
        // Short circuit if it's only a hash change and not a revalidation or
        // mutation submission.
        //
        // Ignore on initial page loads because since the initial load will always
        // be "same hash".  For example, on /page#hash and submit a <Form method="post">
        // which will default to a navigation to /page
        if (state.initialized && !isRevalidationRequired && $77048ffa45c40179$var$isHashChangeOnly(state.location, location) && !(opts && opts.submission && $77048ffa45c40179$var$isMutationMethod(opts.submission.formMethod))) {
            completeNavigation(location, {
                matches: matches
            }, {
                flushSync: flushSync
            });
            return;
        }
        // Create a controller/Request for this navigation
        pendingNavigationController = new AbortController();
        let request = $77048ffa45c40179$var$createClientSideRequest(init.history, location, pendingNavigationController.signal, opts && opts.submission);
        let pendingActionResult;
        if (opts && opts.pendingError) // If we have a pendingError, it means the user attempted a GET submission
        // with binary FormData so assign here and skip to handleLoaders.  That
        // way we handle calling loaders above the boundary etc.  It's not really
        // different from an actionError in that sense.
        pendingActionResult = [
            $77048ffa45c40179$var$findNearestBoundary(matches).route.id,
            {
                type: $77048ffa45c40179$var$ResultType.error,
                error: opts.pendingError
            }
        ];
        else if (opts && opts.submission && $77048ffa45c40179$var$isMutationMethod(opts.submission.formMethod)) {
            // Call action if we received an action submission
            let actionResult = await handleAction(request, location, opts.submission, matches, {
                replace: opts.replace,
                flushSync: flushSync
            });
            if (actionResult.shortCircuited) return;
            pendingActionResult = actionResult.pendingActionResult;
            loadingNavigation = $77048ffa45c40179$var$getLoadingNavigation(location, opts.submission);
            flushSync = false;
            // Create a GET request for the loaders
            request = $77048ffa45c40179$var$createClientSideRequest(init.history, request.url, request.signal);
        }
        // Call loaders
        let { shortCircuited: shortCircuited, loaderData: loaderData, errors: errors } = await handleLoaders(request, location, matches, loadingNavigation, opts && opts.submission, opts && opts.fetcherSubmission, opts && opts.replace, opts && opts.initialHydration === true, flushSync, pendingActionResult);
        if (shortCircuited) return;
        // Clean up now that the action/loaders have completed.  Don't clean up if
        // we short circuited because pendingNavigationController will have already
        // been assigned to a new controller for the next navigation
        pendingNavigationController = null;
        completeNavigation(location, $77048ffa45c40179$var$_extends({
            matches: matches
        }, $77048ffa45c40179$var$getActionDataForCommit(pendingActionResult), {
            loaderData: loaderData,
            errors: errors
        }));
    }
    // Call the action matched by the leaf route for this navigation and handle
    // redirects/errors
    async function handleAction(request, location, submission, matches, opts) {
        if (opts === void 0) opts = {};
        interruptActiveLoads();
        // Put us in a submitting state
        let navigation = $77048ffa45c40179$var$getSubmittingNavigation(location, submission);
        updateState({
            navigation: navigation
        }, {
            flushSync: opts.flushSync === true
        });
        // Call our action and get the result
        let result;
        let actionMatch = $77048ffa45c40179$var$getTargetMatch(matches, location);
        if (!actionMatch.route.action && !actionMatch.route.lazy) result = {
            type: $77048ffa45c40179$var$ResultType.error,
            error: $77048ffa45c40179$var$getInternalRouterError(405, {
                method: request.method,
                pathname: location.pathname,
                routeId: actionMatch.route.id
            })
        };
        else {
            let results = await callDataStrategy("action", request, [
                actionMatch
            ], matches);
            result = results[0];
            if (request.signal.aborted) return {
                shortCircuited: true
            };
        }
        if ($77048ffa45c40179$var$isRedirectResult(result)) {
            let replace;
            if (opts && opts.replace != null) replace = opts.replace;
            else {
                // If the user didn't explicity indicate replace behavior, replace if
                // we redirected to the exact same location we're currently at to avoid
                // double back-buttons
                let location = $77048ffa45c40179$var$normalizeRedirectLocation(result.response.headers.get("Location"), new URL(request.url), basename);
                replace = location === state.location.pathname + state.location.search;
            }
            await startRedirectNavigation(request, result, {
                submission: submission,
                replace: replace
            });
            return {
                shortCircuited: true
            };
        }
        if ($77048ffa45c40179$var$isDeferredResult(result)) throw $77048ffa45c40179$var$getInternalRouterError(400, {
            type: "defer-action"
        });
        if ($77048ffa45c40179$var$isErrorResult(result)) {
            // Store off the pending error - we use it to determine which loaders
            // to call and will commit it when we complete the navigation
            let boundaryMatch = $77048ffa45c40179$var$findNearestBoundary(matches, actionMatch.route.id);
            // By default, all submissions are REPLACE navigations, but if the
            // action threw an error that'll be rendered in an errorElement, we fall
            // back to PUSH so that the user can use the back button to get back to
            // the pre-submission form location to try again
            if ((opts && opts.replace) !== true) pendingAction = $77048ffa45c40179$export$e19cd5f9376f8cee.Push;
            return {
                pendingActionResult: [
                    boundaryMatch.route.id,
                    result
                ]
            };
        }
        return {
            pendingActionResult: [
                actionMatch.route.id,
                result
            ]
        };
    }
    // Call all applicable loaders for the given matches, handling redirects,
    // errors, etc.
    async function handleLoaders(request, location, matches, overrideNavigation, submission, fetcherSubmission, replace, initialHydration, flushSync, pendingActionResult) {
        // Figure out the right navigation we want to use for data loading
        let loadingNavigation = overrideNavigation || $77048ffa45c40179$var$getLoadingNavigation(location, submission);
        // If this was a redirect from an action we don't have a "submission" but
        // we have it on the loading navigation so use that if available
        let activeSubmission = submission || fetcherSubmission || $77048ffa45c40179$var$getSubmissionFromNavigation(loadingNavigation);
        let routesToUse = inFlightDataRoutes || dataRoutes;
        let [matchesToLoad, revalidatingFetchers] = $77048ffa45c40179$var$getMatchesToLoad(init.history, state, matches, activeSubmission, location, future.v7_partialHydration && initialHydration === true, future.unstable_skipActionErrorRevalidation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, deletedFetchers, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, pendingActionResult);
        // Cancel pending deferreds for no-longer-matched routes or routes we're
        // about to reload.  Note that if this is an action reload we would have
        // already cancelled all pending deferreds so this would be a no-op
        cancelActiveDeferreds((routeId)=>!(matches && matches.some((m)=>m.route.id === routeId)) || matchesToLoad && matchesToLoad.some((m)=>m.route.id === routeId));
        pendingNavigationLoadId = ++incrementingLoadId;
        // Short circuit if we have no loaders to run
        if (matchesToLoad.length === 0 && revalidatingFetchers.length === 0) {
            let updatedFetchers = markFetchRedirectsDone();
            completeNavigation(location, $77048ffa45c40179$var$_extends({
                matches: matches,
                loaderData: {},
                // Commit pending error if we're short circuiting
                errors: pendingActionResult && $77048ffa45c40179$var$isErrorResult(pendingActionResult[1]) ? {
                    [pendingActionResult[0]]: pendingActionResult[1].error
                } : null
            }, $77048ffa45c40179$var$getActionDataForCommit(pendingActionResult), updatedFetchers ? {
                fetchers: new Map(state.fetchers)
            } : {}), {
                flushSync: flushSync
            });
            return {
                shortCircuited: true
            };
        }
        // If this is an uninterrupted revalidation, we remain in our current idle
        // state.  If not, we need to switch to our loading state and load data,
        // preserving any new action data or existing action data (in the case of
        // a revalidation interrupting an actionReload)
        // If we have partialHydration enabled, then don't update the state for the
        // initial data load since it's not a "navigation"
        if (!isUninterruptedRevalidation && (!future.v7_partialHydration || !initialHydration)) {
            revalidatingFetchers.forEach((rf)=>{
                let fetcher = state.fetchers.get(rf.key);
                let revalidatingFetcher = $77048ffa45c40179$var$getLoadingFetcher(undefined, fetcher ? fetcher.data : undefined);
                state.fetchers.set(rf.key, revalidatingFetcher);
            });
            let actionData;
            if (pendingActionResult && !$77048ffa45c40179$var$isErrorResult(pendingActionResult[1])) // This is cast to `any` currently because `RouteData`uses any and it
            // would be a breaking change to use any.
            // TODO: v7 - change `RouteData` to use `unknown` instead of `any`
            actionData = {
                [pendingActionResult[0]]: pendingActionResult[1].data
            };
            else if (state.actionData) {
                if (Object.keys(state.actionData).length === 0) actionData = null;
                else actionData = state.actionData;
            }
            updateState($77048ffa45c40179$var$_extends({
                navigation: loadingNavigation
            }, actionData !== undefined ? {
                actionData: actionData
            } : {}, revalidatingFetchers.length > 0 ? {
                fetchers: new Map(state.fetchers)
            } : {}), {
                flushSync: flushSync
            });
        }
        revalidatingFetchers.forEach((rf)=>{
            if (fetchControllers.has(rf.key)) abortFetcher(rf.key);
            if (rf.controller) // Fetchers use an independent AbortController so that aborting a fetcher
            // (via deleteFetcher) does not abort the triggering navigation that
            // triggered the revalidation
            fetchControllers.set(rf.key, rf.controller);
        });
        // Proxy navigation abort through to revalidation fetchers
        let abortPendingFetchRevalidations = ()=>revalidatingFetchers.forEach((f)=>abortFetcher(f.key));
        if (pendingNavigationController) pendingNavigationController.signal.addEventListener("abort", abortPendingFetchRevalidations);
        let { loaderResults: loaderResults, fetcherResults: fetcherResults } = await callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, request);
        if (request.signal.aborted) return {
            shortCircuited: true
        };
        // Clean up _after_ loaders have completed.  Don't clean up if we short
        // circuited because fetchControllers would have been aborted and
        // reassigned to new controllers for the next navigation
        if (pendingNavigationController) pendingNavigationController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
        revalidatingFetchers.forEach((rf)=>fetchControllers.delete(rf.key));
        // If any loaders returned a redirect Response, start a new REPLACE navigation
        let redirect = $77048ffa45c40179$var$findRedirect([
            ...loaderResults,
            ...fetcherResults
        ]);
        if (redirect) {
            if (redirect.idx >= matchesToLoad.length) {
                // If this redirect came from a fetcher make sure we mark it in
                // fetchRedirectIds so it doesn't get revalidated on the next set of
                // loader executions
                let fetcherKey = revalidatingFetchers[redirect.idx - matchesToLoad.length].key;
                fetchRedirectIds.add(fetcherKey);
            }
            await startRedirectNavigation(request, redirect.result, {
                replace: replace
            });
            return {
                shortCircuited: true
            };
        }
        // Process and commit output from loaders
        let { loaderData: loaderData, errors: errors } = $77048ffa45c40179$var$processLoaderData(state, matches, matchesToLoad, loaderResults, pendingActionResult, revalidatingFetchers, fetcherResults, activeDeferreds);
        // Wire up subscribers to update loaderData as promises settle
        activeDeferreds.forEach((deferredData, routeId)=>{
            deferredData.subscribe((aborted)=>{
                // Note: No need to updateState here since the TrackedPromise on
                // loaderData is stable across resolve/reject
                // Remove this instance if we were aborted or if promises have settled
                if (aborted || deferredData.done) activeDeferreds.delete(routeId);
            });
        });
        // During partial hydration, preserve SSR errors for routes that don't re-run
        if (future.v7_partialHydration && initialHydration && state.errors) Object.entries(state.errors).filter((_ref2)=>{
            let [id] = _ref2;
            return !matchesToLoad.some((m)=>m.route.id === id);
        }).forEach((_ref3)=>{
            let [routeId, error] = _ref3;
            errors = Object.assign(errors || {}, {
                [routeId]: error
            });
        });
        let updatedFetchers = markFetchRedirectsDone();
        let didAbortFetchLoads = abortStaleFetchLoads(pendingNavigationLoadId);
        let shouldUpdateFetchers = updatedFetchers || didAbortFetchLoads || revalidatingFetchers.length > 0;
        return $77048ffa45c40179$var$_extends({
            loaderData: loaderData,
            errors: errors
        }, shouldUpdateFetchers ? {
            fetchers: new Map(state.fetchers)
        } : {});
    }
    // Trigger a fetcher load/submit for the given fetcher key
    function fetch(key, routeId, href, opts) {
        if (isServer) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
        if (fetchControllers.has(key)) abortFetcher(key);
        let flushSync = (opts && opts.unstable_flushSync) === true;
        let routesToUse = inFlightDataRoutes || dataRoutes;
        let normalizedPath = $77048ffa45c40179$var$normalizeTo(state.location, state.matches, basename, future.v7_prependBasename, href, future.v7_relativeSplatPath, routeId, opts == null ? void 0 : opts.relative);
        let matches = $77048ffa45c40179$export$2708184779ceb39d(routesToUse, normalizedPath, basename);
        if (!matches) {
            setFetcherError(key, routeId, $77048ffa45c40179$var$getInternalRouterError(404, {
                pathname: normalizedPath
            }), {
                flushSync: flushSync
            });
            return;
        }
        let { path: path, submission: submission, error: error } = $77048ffa45c40179$var$normalizeNavigateOptions(future.v7_normalizeFormMethod, true, normalizedPath, opts);
        if (error) {
            setFetcherError(key, routeId, error, {
                flushSync: flushSync
            });
            return;
        }
        let match = $77048ffa45c40179$var$getTargetMatch(matches, path);
        pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
        if (submission && $77048ffa45c40179$var$isMutationMethod(submission.formMethod)) {
            handleFetcherAction(key, routeId, path, match, matches, flushSync, submission);
            return;
        }
        // Store off the match so we can call it's shouldRevalidate on subsequent
        // revalidations
        fetchLoadMatches.set(key, {
            routeId: routeId,
            path: path
        });
        handleFetcherLoader(key, routeId, path, match, matches, flushSync, submission);
    }
    // Call the action for the matched fetcher.submit(), and then handle redirects,
    // errors, and revalidation
    async function handleFetcherAction(key, routeId, path, match, requestMatches, flushSync, submission) {
        interruptActiveLoads();
        fetchLoadMatches.delete(key);
        if (!match.route.action && !match.route.lazy) {
            let error = $77048ffa45c40179$var$getInternalRouterError(405, {
                method: submission.formMethod,
                pathname: path,
                routeId: routeId
            });
            setFetcherError(key, routeId, error, {
                flushSync: flushSync
            });
            return;
        }
        // Put this fetcher into it's submitting state
        let existingFetcher = state.fetchers.get(key);
        updateFetcherState(key, $77048ffa45c40179$var$getSubmittingFetcher(submission, existingFetcher), {
            flushSync: flushSync
        });
        // Call the action for the fetcher
        let abortController = new AbortController();
        let fetchRequest = $77048ffa45c40179$var$createClientSideRequest(init.history, path, abortController.signal, submission);
        fetchControllers.set(key, abortController);
        let originatingLoadId = incrementingLoadId;
        let actionResults = await callDataStrategy("action", fetchRequest, [
            match
        ], requestMatches);
        let actionResult = actionResults[0];
        if (fetchRequest.signal.aborted) {
            // We can delete this so long as we weren't aborted by our own fetcher
            // re-submit which would have put _new_ controller is in fetchControllers
            if (fetchControllers.get(key) === abortController) fetchControllers.delete(key);
            return;
        }
        // When using v7_fetcherPersist, we don't want errors bubbling up to the UI
        // or redirects processed for unmounted fetchers so we just revert them to
        // idle
        if (future.v7_fetcherPersist && deletedFetchers.has(key)) {
            if ($77048ffa45c40179$var$isRedirectResult(actionResult) || $77048ffa45c40179$var$isErrorResult(actionResult)) {
                updateFetcherState(key, $77048ffa45c40179$var$getDoneFetcher(undefined));
                return;
            }
        } else {
            if ($77048ffa45c40179$var$isRedirectResult(actionResult)) {
                fetchControllers.delete(key);
                if (pendingNavigationLoadId > originatingLoadId) {
                    // A new navigation was kicked off after our action started, so that
                    // should take precedence over this redirect navigation.  We already
                    // set isRevalidationRequired so all loaders for the new route should
                    // fire unless opted out via shouldRevalidate
                    updateFetcherState(key, $77048ffa45c40179$var$getDoneFetcher(undefined));
                    return;
                } else {
                    fetchRedirectIds.add(key);
                    updateFetcherState(key, $77048ffa45c40179$var$getLoadingFetcher(submission));
                    return startRedirectNavigation(fetchRequest, actionResult, {
                        fetcherSubmission: submission
                    });
                }
            }
            // Process any non-redirect errors thrown
            if ($77048ffa45c40179$var$isErrorResult(actionResult)) {
                setFetcherError(key, routeId, actionResult.error);
                return;
            }
        }
        if ($77048ffa45c40179$var$isDeferredResult(actionResult)) throw $77048ffa45c40179$var$getInternalRouterError(400, {
            type: "defer-action"
        });
        // Start the data load for current matches, or the next location if we're
        // in the middle of a navigation
        let nextLocation = state.navigation.location || state.location;
        let revalidationRequest = $77048ffa45c40179$var$createClientSideRequest(init.history, nextLocation, abortController.signal);
        let routesToUse = inFlightDataRoutes || dataRoutes;
        let matches = state.navigation.state !== "idle" ? $77048ffa45c40179$export$2708184779ceb39d(routesToUse, state.navigation.location, basename) : state.matches;
        $77048ffa45c40179$export$3e9cee6b33872309(matches, "Didn't find any matches after fetcher action");
        let loadId = ++incrementingLoadId;
        fetchReloadIds.set(key, loadId);
        let loadFetcher = $77048ffa45c40179$var$getLoadingFetcher(submission, actionResult.data);
        state.fetchers.set(key, loadFetcher);
        let [matchesToLoad, revalidatingFetchers] = $77048ffa45c40179$var$getMatchesToLoad(init.history, state, matches, submission, nextLocation, false, future.unstable_skipActionErrorRevalidation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, deletedFetchers, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, [
            match.route.id,
            actionResult
        ]);
        // Put all revalidating fetchers into the loading state, except for the
        // current fetcher which we want to keep in it's current loading state which
        // contains it's action submission info + action data
        revalidatingFetchers.filter((rf)=>rf.key !== key).forEach((rf)=>{
            let staleKey = rf.key;
            let existingFetcher = state.fetchers.get(staleKey);
            let revalidatingFetcher = $77048ffa45c40179$var$getLoadingFetcher(undefined, existingFetcher ? existingFetcher.data : undefined);
            state.fetchers.set(staleKey, revalidatingFetcher);
            if (fetchControllers.has(staleKey)) abortFetcher(staleKey);
            if (rf.controller) fetchControllers.set(staleKey, rf.controller);
        });
        updateState({
            fetchers: new Map(state.fetchers)
        });
        let abortPendingFetchRevalidations = ()=>revalidatingFetchers.forEach((rf)=>abortFetcher(rf.key));
        abortController.signal.addEventListener("abort", abortPendingFetchRevalidations);
        let { loaderResults: loaderResults, fetcherResults: fetcherResults } = await callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, revalidationRequest);
        if (abortController.signal.aborted) return;
        abortController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
        fetchReloadIds.delete(key);
        fetchControllers.delete(key);
        revalidatingFetchers.forEach((r)=>fetchControllers.delete(r.key));
        let redirect = $77048ffa45c40179$var$findRedirect([
            ...loaderResults,
            ...fetcherResults
        ]);
        if (redirect) {
            if (redirect.idx >= matchesToLoad.length) {
                // If this redirect came from a fetcher make sure we mark it in
                // fetchRedirectIds so it doesn't get revalidated on the next set of
                // loader executions
                let fetcherKey = revalidatingFetchers[redirect.idx - matchesToLoad.length].key;
                fetchRedirectIds.add(fetcherKey);
            }
            return startRedirectNavigation(revalidationRequest, redirect.result);
        }
        // Process and commit output from loaders
        let { loaderData: loaderData, errors: errors } = $77048ffa45c40179$var$processLoaderData(state, state.matches, matchesToLoad, loaderResults, undefined, revalidatingFetchers, fetcherResults, activeDeferreds);
        // Since we let revalidations complete even if the submitting fetcher was
        // deleted, only put it back to idle if it hasn't been deleted
        if (state.fetchers.has(key)) {
            let doneFetcher = $77048ffa45c40179$var$getDoneFetcher(actionResult.data);
            state.fetchers.set(key, doneFetcher);
        }
        abortStaleFetchLoads(loadId);
        // If we are currently in a navigation loading state and this fetcher is
        // more recent than the navigation, we want the newer data so abort the
        // navigation and complete it with the fetcher data
        if (state.navigation.state === "loading" && loadId > pendingNavigationLoadId) {
            $77048ffa45c40179$export$3e9cee6b33872309(pendingAction, "Expected pending action");
            pendingNavigationController && pendingNavigationController.abort();
            completeNavigation(state.navigation.location, {
                matches: matches,
                loaderData: loaderData,
                errors: errors,
                fetchers: new Map(state.fetchers)
            });
        } else {
            // otherwise just update with the fetcher data, preserving any existing
            // loaderData for loaders that did not need to reload.  We have to
            // manually merge here since we aren't going through completeNavigation
            updateState({
                errors: errors,
                loaderData: $77048ffa45c40179$var$mergeLoaderData(state.loaderData, loaderData, matches, errors),
                fetchers: new Map(state.fetchers)
            });
            isRevalidationRequired = false;
        }
    }
    // Call the matched loader for fetcher.load(), handling redirects, errors, etc.
    async function handleFetcherLoader(key, routeId, path, match, matches, flushSync, submission) {
        let existingFetcher = state.fetchers.get(key);
        updateFetcherState(key, $77048ffa45c40179$var$getLoadingFetcher(submission, existingFetcher ? existingFetcher.data : undefined), {
            flushSync: flushSync
        });
        // Call the loader for this fetcher route match
        let abortController = new AbortController();
        let fetchRequest = $77048ffa45c40179$var$createClientSideRequest(init.history, path, abortController.signal);
        fetchControllers.set(key, abortController);
        let originatingLoadId = incrementingLoadId;
        let results = await callDataStrategy("loader", fetchRequest, [
            match
        ], matches);
        let result = results[0];
        // Deferred isn't supported for fetcher loads, await everything and treat it
        // as a normal load.  resolveDeferredData will return undefined if this
        // fetcher gets aborted, so we just leave result untouched and short circuit
        // below if that happens
        if ($77048ffa45c40179$var$isDeferredResult(result)) result = await $77048ffa45c40179$var$resolveDeferredData(result, fetchRequest.signal, true) || result;
        // We can delete this so long as we weren't aborted by our our own fetcher
        // re-load which would have put _new_ controller is in fetchControllers
        if (fetchControllers.get(key) === abortController) fetchControllers.delete(key);
        if (fetchRequest.signal.aborted) return;
        // We don't want errors bubbling up or redirects followed for unmounted
        // fetchers, so short circuit here if it was removed from the UI
        if (deletedFetchers.has(key)) {
            updateFetcherState(key, $77048ffa45c40179$var$getDoneFetcher(undefined));
            return;
        }
        // If the loader threw a redirect Response, start a new REPLACE navigation
        if ($77048ffa45c40179$var$isRedirectResult(result)) {
            if (pendingNavigationLoadId > originatingLoadId) {
                // A new navigation was kicked off after our loader started, so that
                // should take precedence over this redirect navigation
                updateFetcherState(key, $77048ffa45c40179$var$getDoneFetcher(undefined));
                return;
            } else {
                fetchRedirectIds.add(key);
                await startRedirectNavigation(fetchRequest, result);
                return;
            }
        }
        // Process any non-redirect errors thrown
        if ($77048ffa45c40179$var$isErrorResult(result)) {
            setFetcherError(key, routeId, result.error);
            return;
        }
        $77048ffa45c40179$export$3e9cee6b33872309(!$77048ffa45c40179$var$isDeferredResult(result), "Unhandled fetcher deferred data");
        // Put the fetcher back into an idle state
        updateFetcherState(key, $77048ffa45c40179$var$getDoneFetcher(result.data));
    }
    /**
   * Utility function to handle redirects returned from an action or loader.
   * Normally, a redirect "replaces" the navigation that triggered it.  So, for
   * example:
   *
   *  - user is on /a
   *  - user clicks a link to /b
   *  - loader for /b redirects to /c
   *
   * In a non-JS app the browser would track the in-flight navigation to /b and
   * then replace it with /c when it encountered the redirect response.  In
   * the end it would only ever update the URL bar with /c.
   *
   * In client-side routing using pushState/replaceState, we aim to emulate
   * this behavior and we also do not update history until the end of the
   * navigation (including processed redirects).  This means that we never
   * actually touch history until we've processed redirects, so we just use
   * the history action from the original navigation (PUSH or REPLACE).
   */ async function startRedirectNavigation(request, redirect, _temp2) {
        let { submission: submission, fetcherSubmission: fetcherSubmission, replace: replace } = _temp2 === void 0 ? {} : _temp2;
        if (redirect.response.headers.has("X-Remix-Revalidate")) isRevalidationRequired = true;
        let location = redirect.response.headers.get("Location");
        $77048ffa45c40179$export$3e9cee6b33872309(location, "Expected a Location header on the redirect Response");
        location = $77048ffa45c40179$var$normalizeRedirectLocation(location, new URL(request.url), basename);
        let redirectLocation = $77048ffa45c40179$var$createLocation(state.location, location, {
            _isRedirect: true
        });
        if (isBrowser) {
            let isDocumentReload = false;
            if (redirect.response.headers.has("X-Remix-Reload-Document")) // Hard reload if the response contained X-Remix-Reload-Document
            isDocumentReload = true;
            else if ($77048ffa45c40179$var$ABSOLUTE_URL_REGEX.test(location)) {
                const url = init.history.createURL(location);
                isDocumentReload = // Hard reload if it's an absolute URL to a new origin
                url.origin !== routerWindow.location.origin || // Hard reload if it's an absolute URL that does not match our basename
                $77048ffa45c40179$export$b69e3301ce081aa3(url.pathname, basename) == null;
            }
            if (isDocumentReload) {
                if (replace) routerWindow.location.replace(location);
                else routerWindow.location.assign(location);
                return;
            }
        }
        // There's no need to abort on redirects, since we don't detect the
        // redirect until the action/loaders have settled
        pendingNavigationController = null;
        let redirectHistoryAction = replace === true ? $77048ffa45c40179$export$e19cd5f9376f8cee.Replace : $77048ffa45c40179$export$e19cd5f9376f8cee.Push;
        // Use the incoming submission if provided, fallback on the active one in
        // state.navigation
        let { formMethod: formMethod, formAction: formAction, formEncType: formEncType } = state.navigation;
        if (!submission && !fetcherSubmission && formMethod && formAction && formEncType) submission = $77048ffa45c40179$var$getSubmissionFromNavigation(state.navigation);
        // If this was a 307/308 submission we want to preserve the HTTP method and
        // re-submit the GET/POST/PUT/PATCH/DELETE as a submission navigation to the
        // redirected location
        let activeSubmission = submission || fetcherSubmission;
        if ($77048ffa45c40179$var$redirectPreserveMethodStatusCodes.has(redirect.response.status) && activeSubmission && $77048ffa45c40179$var$isMutationMethod(activeSubmission.formMethod)) await startNavigation(redirectHistoryAction, redirectLocation, {
            submission: $77048ffa45c40179$var$_extends({}, activeSubmission, {
                formAction: location
            }),
            // Preserve this flag across redirects
            preventScrollReset: pendingPreventScrollReset
        });
        else {
            // If we have a navigation submission, we will preserve it through the
            // redirect navigation
            let overrideNavigation = $77048ffa45c40179$var$getLoadingNavigation(redirectLocation, submission);
            await startNavigation(redirectHistoryAction, redirectLocation, {
                overrideNavigation: overrideNavigation,
                fetcherSubmission: // Send fetcher submissions through for shouldRevalidate
                fetcherSubmission,
                // Preserve this flag across redirects
                preventScrollReset: pendingPreventScrollReset
            });
        }
    }
    // Utility wrapper for calling dataStrategy client-side without having to
    // pass around the manifest, mapRouteProperties, etc.
    async function callDataStrategy(type, request, matchesToLoad, matches) {
        try {
            let results = await $77048ffa45c40179$var$callDataStrategyImpl(dataStrategyImpl, type, request, matchesToLoad, matches, manifest, mapRouteProperties);
            return await Promise.all(results.map((result, i)=>{
                if ($77048ffa45c40179$var$isRedirectHandlerResult(result)) {
                    let response = result.result;
                    return {
                        type: $77048ffa45c40179$var$ResultType.redirect,
                        response: $77048ffa45c40179$var$normalizeRelativeRoutingRedirectResponse(response, request, matchesToLoad[i].route.id, matches, basename, future.v7_relativeSplatPath)
                    };
                }
                return $77048ffa45c40179$var$convertHandlerResultToDataResult(result);
            }));
        } catch (e) {
            // If the outer dataStrategy method throws, just return the error for all
            // matches - and it'll naturally bubble to the root
            return matchesToLoad.map(()=>({
                    type: $77048ffa45c40179$var$ResultType.error,
                    error: e
                }));
        }
    }
    async function callLoadersAndMaybeResolveData(currentMatches, matches, matchesToLoad, fetchersToLoad, request) {
        let [loaderResults, ...fetcherResults] = await Promise.all([
            matchesToLoad.length ? callDataStrategy("loader", request, matchesToLoad, matches) : [],
            ...fetchersToLoad.map((f)=>{
                if (f.matches && f.match && f.controller) {
                    let fetcherRequest = $77048ffa45c40179$var$createClientSideRequest(init.history, f.path, f.controller.signal);
                    return callDataStrategy("loader", fetcherRequest, [
                        f.match
                    ], f.matches).then((r)=>r[0]);
                } else return Promise.resolve({
                    type: $77048ffa45c40179$var$ResultType.error,
                    error: $77048ffa45c40179$var$getInternalRouterError(404, {
                        pathname: f.path
                    })
                });
            })
        ]);
        await Promise.all([
            $77048ffa45c40179$var$resolveDeferredResults(currentMatches, matchesToLoad, loaderResults, loaderResults.map(()=>request.signal), false, state.loaderData),
            $77048ffa45c40179$var$resolveDeferredResults(currentMatches, fetchersToLoad.map((f)=>f.match), fetcherResults, fetchersToLoad.map((f)=>f.controller ? f.controller.signal : null), true)
        ]);
        return {
            loaderResults: loaderResults,
            fetcherResults: fetcherResults
        };
    }
    function interruptActiveLoads() {
        // Every interruption triggers a revalidation
        isRevalidationRequired = true;
        // Cancel pending route-level deferreds and mark cancelled routes for
        // revalidation
        cancelledDeferredRoutes.push(...cancelActiveDeferreds());
        // Abort in-flight fetcher loads
        fetchLoadMatches.forEach((_, key)=>{
            if (fetchControllers.has(key)) {
                cancelledFetcherLoads.push(key);
                abortFetcher(key);
            }
        });
    }
    function updateFetcherState(key, fetcher, opts) {
        if (opts === void 0) opts = {};
        state.fetchers.set(key, fetcher);
        updateState({
            fetchers: new Map(state.fetchers)
        }, {
            flushSync: (opts && opts.flushSync) === true
        });
    }
    function setFetcherError(key, routeId, error, opts) {
        if (opts === void 0) opts = {};
        let boundaryMatch = $77048ffa45c40179$var$findNearestBoundary(state.matches, routeId);
        deleteFetcher(key);
        updateState({
            errors: {
                [boundaryMatch.route.id]: error
            },
            fetchers: new Map(state.fetchers)
        }, {
            flushSync: (opts && opts.flushSync) === true
        });
    }
    function getFetcher(key) {
        if (future.v7_fetcherPersist) {
            activeFetchers.set(key, (activeFetchers.get(key) || 0) + 1);
            // If this fetcher was previously marked for deletion, unmark it since we
            // have a new instance
            if (deletedFetchers.has(key)) deletedFetchers.delete(key);
        }
        return state.fetchers.get(key) || $77048ffa45c40179$export$52eace9c284d3585;
    }
    function deleteFetcher(key) {
        let fetcher = state.fetchers.get(key);
        // Don't abort the controller if this is a deletion of a fetcher.submit()
        // in it's loading phase since - we don't want to abort the corresponding
        // revalidation and want them to complete and land
        if (fetchControllers.has(key) && !(fetcher && fetcher.state === "loading" && fetchReloadIds.has(key))) abortFetcher(key);
        fetchLoadMatches.delete(key);
        fetchReloadIds.delete(key);
        fetchRedirectIds.delete(key);
        deletedFetchers.delete(key);
        state.fetchers.delete(key);
    }
    function deleteFetcherAndUpdateState(key) {
        if (future.v7_fetcherPersist) {
            let count = (activeFetchers.get(key) || 0) - 1;
            if (count <= 0) {
                activeFetchers.delete(key);
                deletedFetchers.add(key);
            } else activeFetchers.set(key, count);
        } else deleteFetcher(key);
        updateState({
            fetchers: new Map(state.fetchers)
        });
    }
    function abortFetcher(key) {
        let controller = fetchControllers.get(key);
        $77048ffa45c40179$export$3e9cee6b33872309(controller, "Expected fetch controller: " + key);
        controller.abort();
        fetchControllers.delete(key);
    }
    function markFetchersDone(keys) {
        for (let key of keys){
            let fetcher = getFetcher(key);
            let doneFetcher = $77048ffa45c40179$var$getDoneFetcher(fetcher.data);
            state.fetchers.set(key, doneFetcher);
        }
    }
    function markFetchRedirectsDone() {
        let doneKeys = [];
        let updatedFetchers = false;
        for (let key of fetchRedirectIds){
            let fetcher = state.fetchers.get(key);
            $77048ffa45c40179$export$3e9cee6b33872309(fetcher, "Expected fetcher: " + key);
            if (fetcher.state === "loading") {
                fetchRedirectIds.delete(key);
                doneKeys.push(key);
                updatedFetchers = true;
            }
        }
        markFetchersDone(doneKeys);
        return updatedFetchers;
    }
    function abortStaleFetchLoads(landedId) {
        let yeetedKeys = [];
        for (let [key, id] of fetchReloadIds)if (id < landedId) {
            let fetcher = state.fetchers.get(key);
            $77048ffa45c40179$export$3e9cee6b33872309(fetcher, "Expected fetcher: " + key);
            if (fetcher.state === "loading") {
                abortFetcher(key);
                fetchReloadIds.delete(key);
                yeetedKeys.push(key);
            }
        }
        markFetchersDone(yeetedKeys);
        return yeetedKeys.length > 0;
    }
    function getBlocker(key, fn) {
        let blocker = state.blockers.get(key) || $77048ffa45c40179$export$386d57f03f0b2883;
        if (blockerFunctions.get(key) !== fn) blockerFunctions.set(key, fn);
        return blocker;
    }
    function deleteBlocker(key) {
        state.blockers.delete(key);
        blockerFunctions.delete(key);
    }
    // Utility function to update blockers, ensuring valid state transitions
    function updateBlocker(key, newBlocker) {
        let blocker = state.blockers.get(key) || $77048ffa45c40179$export$386d57f03f0b2883;
        // Poor mans state machine :)
        // https://mermaid.live/edit#pako:eNqVkc9OwzAMxl8l8nnjAYrEtDIOHEBIgwvKJTReGy3_lDpIqO27k6awMG0XcrLlnz87nwdonESogKXXBuE79rq75XZO3-yHds0RJVuv70YrPlUrCEe2HfrORS3rubqZfuhtpg5C9wk5tZ4VKcRUq88q9Z8RS0-48cE1iHJkL0ugbHuFLus9L6spZy8nX9MP2CNdomVaposqu3fGayT8T8-jJQwhepo_UtpgBQaDEUom04dZhAN1aJBDlUKJBxE1ceB2Smj0Mln-IBW5AFU2dwUiktt_2Qaq2dBfaKdEup85UV7Yd-dKjlnkabl2Pvr0DTkTreM
        $77048ffa45c40179$export$3e9cee6b33872309(blocker.state === "unblocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "proceeding" || blocker.state === "blocked" && newBlocker.state === "unblocked" || blocker.state === "proceeding" && newBlocker.state === "unblocked", "Invalid blocker state transition: " + blocker.state + " -> " + newBlocker.state);
        let blockers = new Map(state.blockers);
        blockers.set(key, newBlocker);
        updateState({
            blockers: blockers
        });
    }
    function shouldBlockNavigation(_ref4) {
        let { currentLocation: currentLocation, nextLocation: nextLocation, historyAction: historyAction } = _ref4;
        if (blockerFunctions.size === 0) return;
        // We ony support a single active blocker at the moment since we don't have
        // any compelling use cases for multi-blocker yet
        if (blockerFunctions.size > 1) $77048ffa45c40179$export$c0e02632e14916fd(false, "A router only supports one blocker at a time");
        let entries = Array.from(blockerFunctions.entries());
        let [blockerKey, blockerFunction] = entries[entries.length - 1];
        let blocker = state.blockers.get(blockerKey);
        if (blocker && blocker.state === "proceeding") // If the blocker is currently proceeding, we don't need to re-check
        // it and can let this navigation continue
        return;
        // At this point, we know we're unblocked/blocked so we need to check the
        // user-provided blocker function
        if (blockerFunction({
            currentLocation: currentLocation,
            nextLocation: nextLocation,
            historyAction: historyAction
        })) return blockerKey;
    }
    function cancelActiveDeferreds(predicate) {
        let cancelledRouteIds = [];
        activeDeferreds.forEach((dfd, routeId)=>{
            if (!predicate || predicate(routeId)) {
                // Cancel the deferred - but do not remove from activeDeferreds here -
                // we rely on the subscribers to do that so our tests can assert proper
                // cleanup via _internalActiveDeferreds
                dfd.cancel();
                cancelledRouteIds.push(routeId);
                activeDeferreds.delete(routeId);
            }
        });
        return cancelledRouteIds;
    }
    // Opt in to capturing and reporting scroll positions during navigations,
    // used by the <ScrollRestoration> component
    function enableScrollRestoration(positions, getPosition, getKey) {
        savedScrollPositions = positions;
        getScrollPosition = getPosition;
        getScrollRestorationKey = getKey || null;
        // Perform initial hydration scroll restoration, since we miss the boat on
        // the initial updateState() because we've not yet rendered <ScrollRestoration/>
        // and therefore have no savedScrollPositions available
        if (!initialScrollRestored && state.navigation === $77048ffa45c40179$export$ed3e14b2f9e105d0) {
            initialScrollRestored = true;
            let y = getSavedScrollPosition(state.location, state.matches);
            if (y != null) updateState({
                restoreScrollPosition: y
            });
        }
        return ()=>{
            savedScrollPositions = null;
            getScrollPosition = null;
            getScrollRestorationKey = null;
        };
    }
    function getScrollKey(location, matches) {
        if (getScrollRestorationKey) {
            let key = getScrollRestorationKey(location, matches.map((m)=>$77048ffa45c40179$export$b3fac024fad9e8ff(m, state.loaderData)));
            return key || location.key;
        }
        return location.key;
    }
    function saveScrollPosition(location, matches) {
        if (savedScrollPositions && getScrollPosition) {
            let key = getScrollKey(location, matches);
            savedScrollPositions[key] = getScrollPosition();
        }
    }
    function getSavedScrollPosition(location, matches) {
        if (savedScrollPositions) {
            let key = getScrollKey(location, matches);
            let y = savedScrollPositions[key];
            if (typeof y === "number") return y;
        }
        return null;
    }
    function _internalSetRoutes(newRoutes) {
        manifest = {};
        inFlightDataRoutes = $77048ffa45c40179$export$4a6d22b32134ea5d(newRoutes, mapRouteProperties, undefined, manifest);
    }
    router = {
        get basename () {
            return basename;
        },
        get future () {
            return future;
        },
        get state () {
            return state;
        },
        get routes () {
            return dataRoutes;
        },
        get window () {
            return routerWindow;
        },
        initialize: initialize,
        subscribe: subscribe,
        enableScrollRestoration: enableScrollRestoration,
        navigate: navigate,
        fetch: fetch,
        revalidate: revalidate,
        // Passthrough to history-aware createHref used by useHref so we get proper
        // hash-aware URLs in DOM paths
        createHref: (to)=>init.history.createHref(to),
        encodeLocation: (to)=>init.history.encodeLocation(to),
        getFetcher: getFetcher,
        deleteFetcher: deleteFetcherAndUpdateState,
        dispose: dispose,
        getBlocker: getBlocker,
        deleteBlocker: deleteBlocker,
        _internalFetchControllers: fetchControllers,
        _internalActiveDeferreds: activeDeferreds,
        _internalSetRoutes: // TODO: Remove setRoutes, it's temporary to avoid dealing with
        // updating the tree while validating the update algorithm.
        _internalSetRoutes
    };
    return router;
}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createStaticHandler
////////////////////////////////////////////////////////////////////////////////
const $77048ffa45c40179$export$4d0306f8f6a4585b = Symbol("deferred");
function $77048ffa45c40179$export$3336b097a6fbc59a(routes, opts) {
    $77048ffa45c40179$export$3e9cee6b33872309(routes.length > 0, "You must provide a non-empty routes array to createStaticHandler");
    let manifest = {};
    let basename = (opts ? opts.basename : null) || "/";
    let mapRouteProperties;
    if (opts != null && opts.mapRouteProperties) mapRouteProperties = opts.mapRouteProperties;
    else if (opts != null && opts.detectErrorBoundary) {
        // If they are still using the deprecated version, wrap it with the new API
        let detectErrorBoundary = opts.detectErrorBoundary;
        mapRouteProperties = (route)=>({
                hasErrorBoundary: detectErrorBoundary(route)
            });
    } else mapRouteProperties = $77048ffa45c40179$var$defaultMapRouteProperties;
    // Config driven behavior flags
    let future = $77048ffa45c40179$var$_extends({
        v7_relativeSplatPath: false,
        v7_throwAbortReason: false
    }, opts ? opts.future : null);
    let dataRoutes = $77048ffa45c40179$export$4a6d22b32134ea5d(routes, mapRouteProperties, undefined, manifest);
    /**
   * The query() method is intended for document requests, in which we want to
   * call an optional action and potentially multiple loaders for all nested
   * routes.  It returns a StaticHandlerContext object, which is very similar
   * to the router state (location, loaderData, actionData, errors, etc.) and
   * also adds SSR-specific information such as the statusCode and headers
   * from action/loaders Responses.
   *
   * It _should_ never throw and should report all errors through the
   * returned context.errors object, properly associating errors to their error
   * boundary.  Additionally, it tracks _deepestRenderedBoundaryId which can be
   * used to emulate React error boundaries during SSr by performing a second
   * pass only down to the boundaryId.
   *
   * The one exception where we do not return a StaticHandlerContext is when a
   * redirect response is returned or thrown from any action/loader.  We
   * propagate that out and return the raw Response so the HTTP server can
   * return it directly.
   *
   * - `opts.requestContext` is an optional server context that will be passed
   *   to actions/loaders in the `context` parameter
   * - `opts.skipLoaderErrorBubbling` is an optional parameter that will prevent
   *   the bubbling of errors which allows single-fetch-type implementations
   *   where the client will handle the bubbling and we may need to return data
   *   for the handling route
   */ async function query(request, _temp3) {
        let { requestContext: requestContext, skipLoaderErrorBubbling: skipLoaderErrorBubbling, unstable_dataStrategy: unstable_dataStrategy } = _temp3 === void 0 ? {} : _temp3;
        let url = new URL(request.url);
        let method = request.method;
        let location = $77048ffa45c40179$var$createLocation("", $77048ffa45c40179$export$fe53371bee54353d(url), null, "default");
        let matches = $77048ffa45c40179$export$2708184779ceb39d(dataRoutes, location, basename);
        // SSR supports HEAD requests while SPA doesn't
        if (!$77048ffa45c40179$var$isValidMethod(method) && method !== "HEAD") {
            let error = $77048ffa45c40179$var$getInternalRouterError(405, {
                method: method
            });
            let { matches: methodNotAllowedMatches, route: route } = $77048ffa45c40179$var$getShortCircuitMatches(dataRoutes);
            return {
                basename: basename,
                location: location,
                matches: methodNotAllowedMatches,
                loaderData: {},
                actionData: null,
                errors: {
                    [route.id]: error
                },
                statusCode: error.status,
                loaderHeaders: {},
                actionHeaders: {},
                activeDeferreds: null
            };
        } else if (!matches) {
            let error = $77048ffa45c40179$var$getInternalRouterError(404, {
                pathname: location.pathname
            });
            let { matches: notFoundMatches, route: route } = $77048ffa45c40179$var$getShortCircuitMatches(dataRoutes);
            return {
                basename: basename,
                location: location,
                matches: notFoundMatches,
                loaderData: {},
                actionData: null,
                errors: {
                    [route.id]: error
                },
                statusCode: error.status,
                loaderHeaders: {},
                actionHeaders: {},
                activeDeferreds: null
            };
        }
        let result = await queryImpl(request, location, matches, requestContext, unstable_dataStrategy || null, skipLoaderErrorBubbling === true, null);
        if ($77048ffa45c40179$var$isResponse(result)) return result;
        // When returning StaticHandlerContext, we patch back in the location here
        // since we need it for React Context.  But this helps keep our submit and
        // loadRouteData operating on a Request instead of a Location
        return $77048ffa45c40179$var$_extends({
            location: location,
            basename: basename
        }, result);
    }
    /**
   * The queryRoute() method is intended for targeted route requests, either
   * for fetch ?_data requests or resource route requests.  In this case, we
   * are only ever calling a single action or loader, and we are returning the
   * returned value directly.  In most cases, this will be a Response returned
   * from the action/loader, but it may be a primitive or other value as well -
   * and in such cases the calling context should handle that accordingly.
   *
   * We do respect the throw/return differentiation, so if an action/loader
   * throws, then this method will throw the value.  This is important so we
   * can do proper boundary identification in Remix where a thrown Response
   * must go to the Catch Boundary but a returned Response is happy-path.
   *
   * One thing to note is that any Router-initiated Errors that make sense
   * to associate with a status code will be thrown as an ErrorResponse
   * instance which include the raw Error, such that the calling context can
   * serialize the error as they see fit while including the proper response
   * code.  Examples here are 404 and 405 errors that occur prior to reaching
   * any user-defined loaders.
   *
   * - `opts.routeId` allows you to specify the specific route handler to call.
   *   If not provided the handler will determine the proper route by matching
   *   against `request.url`
   * - `opts.requestContext` is an optional server context that will be passed
   *    to actions/loaders in the `context` parameter
   */ async function queryRoute(request, _temp4) {
        let { routeId: routeId, requestContext: requestContext, unstable_dataStrategy: unstable_dataStrategy } = _temp4 === void 0 ? {} : _temp4;
        let url = new URL(request.url);
        let method = request.method;
        let location = $77048ffa45c40179$var$createLocation("", $77048ffa45c40179$export$fe53371bee54353d(url), null, "default");
        let matches = $77048ffa45c40179$export$2708184779ceb39d(dataRoutes, location, basename);
        // SSR supports HEAD requests while SPA doesn't
        if (!$77048ffa45c40179$var$isValidMethod(method) && method !== "HEAD" && method !== "OPTIONS") throw $77048ffa45c40179$var$getInternalRouterError(405, {
            method: method
        });
        else if (!matches) throw $77048ffa45c40179$var$getInternalRouterError(404, {
            pathname: location.pathname
        });
        let match = routeId ? matches.find((m)=>m.route.id === routeId) : $77048ffa45c40179$var$getTargetMatch(matches, location);
        if (routeId && !match) throw $77048ffa45c40179$var$getInternalRouterError(403, {
            pathname: location.pathname,
            routeId: routeId
        });
        else if (!match) // This should never hit I don't think?
        throw $77048ffa45c40179$var$getInternalRouterError(404, {
            pathname: location.pathname
        });
        let result = await queryImpl(request, location, matches, requestContext, unstable_dataStrategy || null, false, match);
        if ($77048ffa45c40179$var$isResponse(result)) return result;
        let error = result.errors ? Object.values(result.errors)[0] : undefined;
        if (error !== undefined) // If we got back result.errors, that means the loader/action threw
        // _something_ that wasn't a Response, but it's not guaranteed/required
        // to be an `instanceof Error` either, so we have to use throw here to
        // preserve the "error" state outside of queryImpl.
        throw error;
        // Pick off the right state value to return
        if (result.actionData) return Object.values(result.actionData)[0];
        if (result.loaderData) {
            var _result$activeDeferre;
            let data = Object.values(result.loaderData)[0];
            if ((_result$activeDeferre = result.activeDeferreds) != null && _result$activeDeferre[match.route.id]) data[$77048ffa45c40179$export$4d0306f8f6a4585b] = result.activeDeferreds[match.route.id];
            return data;
        }
        return undefined;
    }
    async function queryImpl(request, location, matches, requestContext, unstable_dataStrategy, skipLoaderErrorBubbling, routeMatch) {
        $77048ffa45c40179$export$3e9cee6b33872309(request.signal, "query()/queryRoute() requests must contain an AbortController signal");
        try {
            if ($77048ffa45c40179$var$isMutationMethod(request.method.toLowerCase())) {
                let result = await submit(request, matches, routeMatch || $77048ffa45c40179$var$getTargetMatch(matches, location), requestContext, unstable_dataStrategy, skipLoaderErrorBubbling, routeMatch != null);
                return result;
            }
            let result = await loadRouteData(request, matches, requestContext, unstable_dataStrategy, skipLoaderErrorBubbling, routeMatch);
            return $77048ffa45c40179$var$isResponse(result) ? result : $77048ffa45c40179$var$_extends({}, result, {
                actionData: null,
                actionHeaders: {}
            });
        } catch (e) {
            // If the user threw/returned a Response in callLoaderOrAction for a
            // `queryRoute` call, we throw the `HandlerResult` to bail out early
            // and then return or throw the raw Response here accordingly
            if ($77048ffa45c40179$var$isHandlerResult(e) && $77048ffa45c40179$var$isResponse(e.result)) {
                if (e.type === $77048ffa45c40179$var$ResultType.error) throw e.result;
                return e.result;
            }
            // Redirects are always returned since they don't propagate to catch
            // boundaries
            if ($77048ffa45c40179$var$isRedirectResponse(e)) return e;
            throw e;
        }
    }
    async function submit(request, matches, actionMatch, requestContext, unstable_dataStrategy, skipLoaderErrorBubbling, isRouteRequest) {
        let result;
        if (!actionMatch.route.action && !actionMatch.route.lazy) {
            let error = $77048ffa45c40179$var$getInternalRouterError(405, {
                method: request.method,
                pathname: new URL(request.url).pathname,
                routeId: actionMatch.route.id
            });
            if (isRouteRequest) throw error;
            result = {
                type: $77048ffa45c40179$var$ResultType.error,
                error: error
            };
        } else {
            let results = await callDataStrategy("action", request, [
                actionMatch
            ], matches, isRouteRequest, requestContext, unstable_dataStrategy);
            result = results[0];
            if (request.signal.aborted) $77048ffa45c40179$var$throwStaticHandlerAbortedError(request, isRouteRequest, future);
        }
        if ($77048ffa45c40179$var$isRedirectResult(result)) // Uhhhh - this should never happen, we should always throw these from
        // callLoaderOrAction, but the type narrowing here keeps TS happy and we
        // can get back on the "throw all redirect responses" train here should
        // this ever happen :/
        throw new Response(null, {
            status: result.response.status,
            headers: {
                Location: result.response.headers.get("Location")
            }
        });
        if ($77048ffa45c40179$var$isDeferredResult(result)) {
            let error = $77048ffa45c40179$var$getInternalRouterError(400, {
                type: "defer-action"
            });
            if (isRouteRequest) throw error;
            result = {
                type: $77048ffa45c40179$var$ResultType.error,
                error: error
            };
        }
        if (isRouteRequest) {
            // Note: This should only be non-Response values if we get here, since
            // isRouteRequest should throw any Response received in callLoaderOrAction
            if ($77048ffa45c40179$var$isErrorResult(result)) throw result.error;
            return {
                matches: [
                    actionMatch
                ],
                loaderData: {},
                actionData: {
                    [actionMatch.route.id]: result.data
                },
                errors: null,
                // Note: statusCode + headers are unused here since queryRoute will
                // return the raw Response or value
                statusCode: 200,
                loaderHeaders: {},
                actionHeaders: {},
                activeDeferreds: null
            };
        }
        // Create a GET request for the loaders
        let loaderRequest = new Request(request.url, {
            headers: request.headers,
            redirect: request.redirect,
            signal: request.signal
        });
        if ($77048ffa45c40179$var$isErrorResult(result)) {
            // Store off the pending error - we use it to determine which loaders
            // to call and will commit it when we complete the navigation
            let boundaryMatch = skipLoaderErrorBubbling ? actionMatch : $77048ffa45c40179$var$findNearestBoundary(matches, actionMatch.route.id);
            let context = await loadRouteData(loaderRequest, matches, requestContext, unstable_dataStrategy, skipLoaderErrorBubbling, null, [
                boundaryMatch.route.id,
                result
            ]);
            // action status codes take precedence over loader status codes
            return $77048ffa45c40179$var$_extends({}, context, {
                statusCode: $77048ffa45c40179$export$972111febbeef05b(result.error) ? result.error.status : result.statusCode != null ? result.statusCode : 500,
                actionData: null,
                actionHeaders: $77048ffa45c40179$var$_extends({}, result.headers ? {
                    [actionMatch.route.id]: result.headers
                } : {})
            });
        }
        let context = await loadRouteData(loaderRequest, matches, requestContext, unstable_dataStrategy, skipLoaderErrorBubbling, null);
        return $77048ffa45c40179$var$_extends({}, context, {
            actionData: {
                [actionMatch.route.id]: result.data
            }
        }, result.statusCode ? {
            statusCode: result.statusCode
        } : {}, {
            actionHeaders: result.headers ? {
                [actionMatch.route.id]: result.headers
            } : {}
        });
    }
    async function loadRouteData(request, matches, requestContext, unstable_dataStrategy, skipLoaderErrorBubbling, routeMatch, pendingActionResult) {
        let isRouteRequest = routeMatch != null;
        // Short circuit if we have no loaders to run (queryRoute())
        if (isRouteRequest && !(routeMatch != null && routeMatch.route.loader) && !(routeMatch != null && routeMatch.route.lazy)) throw $77048ffa45c40179$var$getInternalRouterError(400, {
            method: request.method,
            pathname: new URL(request.url).pathname,
            routeId: routeMatch == null ? void 0 : routeMatch.route.id
        });
        let requestMatches = routeMatch ? [
            routeMatch
        ] : pendingActionResult && $77048ffa45c40179$var$isErrorResult(pendingActionResult[1]) ? $77048ffa45c40179$var$getLoaderMatchesUntilBoundary(matches, pendingActionResult[0]) : matches;
        let matchesToLoad = requestMatches.filter((m)=>m.route.loader || m.route.lazy);
        // Short circuit if we have no loaders to run (query())
        if (matchesToLoad.length === 0) return {
            matches: matches,
            // Add a null for all matched routes for proper revalidation on the client
            loaderData: matches.reduce((acc, m)=>Object.assign(acc, {
                    [m.route.id]: null
                }), {}),
            errors: pendingActionResult && $77048ffa45c40179$var$isErrorResult(pendingActionResult[1]) ? {
                [pendingActionResult[0]]: pendingActionResult[1].error
            } : null,
            statusCode: 200,
            loaderHeaders: {},
            activeDeferreds: null
        };
        let results = await callDataStrategy("loader", request, matchesToLoad, matches, isRouteRequest, requestContext, unstable_dataStrategy);
        if (request.signal.aborted) $77048ffa45c40179$var$throwStaticHandlerAbortedError(request, isRouteRequest, future);
        // Process and commit output from loaders
        let activeDeferreds = new Map();
        let context = $77048ffa45c40179$var$processRouteLoaderData(matches, matchesToLoad, results, pendingActionResult, activeDeferreds, skipLoaderErrorBubbling);
        // Add a null for any non-loader matches for proper revalidation on the client
        let executedLoaders = new Set(matchesToLoad.map((match)=>match.route.id));
        matches.forEach((match)=>{
            if (!executedLoaders.has(match.route.id)) context.loaderData[match.route.id] = null;
        });
        return $77048ffa45c40179$var$_extends({}, context, {
            matches: matches,
            activeDeferreds: activeDeferreds.size > 0 ? Object.fromEntries(activeDeferreds.entries()) : null
        });
    }
    // Utility wrapper for calling dataStrategy server-side without having to
    // pass around the manifest, mapRouteProperties, etc.
    async function callDataStrategy(type, request, matchesToLoad, matches, isRouteRequest, requestContext, unstable_dataStrategy) {
        let results = await $77048ffa45c40179$var$callDataStrategyImpl(unstable_dataStrategy || $77048ffa45c40179$var$defaultDataStrategy, type, request, matchesToLoad, matches, manifest, mapRouteProperties, requestContext);
        return await Promise.all(results.map((result, i)=>{
            if ($77048ffa45c40179$var$isRedirectHandlerResult(result)) {
                let response = result.result;
                // Throw redirects and let the server handle them with an HTTP redirect
                throw $77048ffa45c40179$var$normalizeRelativeRoutingRedirectResponse(response, request, matchesToLoad[i].route.id, matches, basename, future.v7_relativeSplatPath);
            }
            if ($77048ffa45c40179$var$isResponse(result.result) && isRouteRequest) // For SSR single-route requests, we want to hand Responses back
            // directly without unwrapping
            throw result;
            return $77048ffa45c40179$var$convertHandlerResultToDataResult(result);
        }));
    }
    return {
        dataRoutes: dataRoutes,
        query: query,
        queryRoute: queryRoute
    };
}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Helpers
////////////////////////////////////////////////////////////////////////////////
/**
 * Given an existing StaticHandlerContext and an error thrown at render time,
 * provide an updated StaticHandlerContext suitable for a second SSR render
 */ function $77048ffa45c40179$export$fec11da027c70692(routes, context, error) {
    let newContext = $77048ffa45c40179$var$_extends({}, context, {
        statusCode: $77048ffa45c40179$export$972111febbeef05b(error) ? error.status : 500,
        errors: {
            [context._deepestRenderedBoundaryId || routes[0].id]: error
        }
    });
    return newContext;
}
function $77048ffa45c40179$var$throwStaticHandlerAbortedError(request, isRouteRequest, future) {
    if (future.v7_throwAbortReason && request.signal.reason !== undefined) throw request.signal.reason;
    let method = isRouteRequest ? "queryRoute" : "query";
    throw new Error(method + "() call aborted: " + request.method + " " + request.url);
}
function $77048ffa45c40179$var$isSubmissionNavigation(opts) {
    return opts != null && ("formData" in opts && opts.formData != null || "body" in opts && opts.body !== undefined);
}
function $77048ffa45c40179$var$normalizeTo(location, matches, basename, prependBasename, to, v7_relativeSplatPath, fromRouteId, relative) {
    let contextualMatches;
    let activeRouteMatch;
    if (fromRouteId) {
        // Grab matches up to the calling route so our route-relative logic is
        // relative to the correct source route
        contextualMatches = [];
        for (let match of matches){
            contextualMatches.push(match);
            if (match.route.id === fromRouteId) {
                activeRouteMatch = match;
                break;
            }
        }
    } else {
        contextualMatches = matches;
        activeRouteMatch = matches[matches.length - 1];
    }
    // Resolve the relative path
    let path = $77048ffa45c40179$export$cae722b0cc860f13(to ? to : ".", $77048ffa45c40179$export$a5784978eca585fa(contextualMatches, v7_relativeSplatPath), $77048ffa45c40179$export$b69e3301ce081aa3(location.pathname, basename) || location.pathname, relative === "path");
    // When `to` is not specified we inherit search/hash from the current
    // location, unlike when to="." and we just inherit the path.
    // See https://github.com/remix-run/remix/issues/927
    if (to == null) {
        path.search = location.search;
        path.hash = location.hash;
    }
    // Add an ?index param for matched index routes if we don't already have one
    if ((to == null || to === "" || to === ".") && activeRouteMatch && activeRouteMatch.route.index && !$77048ffa45c40179$var$hasNakedIndexQuery(path.search)) path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
    // If we're operating within a basename, prepend it to the pathname.  If
    // this is a root navigation, then just use the raw basename which allows
    // the basename to have full control over the presence of a trailing slash
    // on root actions
    if (prependBasename && basename !== "/") path.pathname = path.pathname === "/" ? basename : $77048ffa45c40179$export$86d9a7913e44197e([
        basename,
        path.pathname
    ]);
    return $77048ffa45c40179$export$fe53371bee54353d(path);
}
// Normalize navigation options by converting formMethod=GET formData objects to
// URLSearchParams so they behave identically to links with query params
function $77048ffa45c40179$var$normalizeNavigateOptions(normalizeFormMethod, isFetcher, path, opts) {
    // Return location verbatim on non-submission navigations
    if (!opts || !$77048ffa45c40179$var$isSubmissionNavigation(opts)) return {
        path: path
    };
    if (opts.formMethod && !$77048ffa45c40179$var$isValidMethod(opts.formMethod)) return {
        path: path,
        error: $77048ffa45c40179$var$getInternalRouterError(405, {
            method: opts.formMethod
        })
    };
    let getInvalidBodyError = ()=>({
            path: path,
            error: $77048ffa45c40179$var$getInternalRouterError(400, {
                type: "invalid-body"
            })
        });
    // Create a Submission on non-GET navigations
    let rawFormMethod = opts.formMethod || "get";
    let formMethod = normalizeFormMethod ? rawFormMethod.toUpperCase() : rawFormMethod.toLowerCase();
    let formAction = $77048ffa45c40179$var$stripHashFromPath(path);
    if (opts.body !== undefined) {
        if (opts.formEncType === "text/plain") {
            // text only support POST/PUT/PATCH/DELETE submissions
            if (!$77048ffa45c40179$var$isMutationMethod(formMethod)) return getInvalidBodyError();
            let text = typeof opts.body === "string" ? opts.body : opts.body instanceof FormData || opts.body instanceof URLSearchParams ? // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#plain-text-form-data
            Array.from(opts.body.entries()).reduce((acc, _ref5)=>{
                let [name, value] = _ref5;
                return "" + acc + name + "=" + value + "\n";
            }, "") : String(opts.body);
            return {
                path: path,
                submission: {
                    formMethod: formMethod,
                    formAction: formAction,
                    formEncType: opts.formEncType,
                    formData: undefined,
                    json: undefined,
                    text: text
                }
            };
        } else if (opts.formEncType === "application/json") {
            // json only supports POST/PUT/PATCH/DELETE submissions
            if (!$77048ffa45c40179$var$isMutationMethod(formMethod)) return getInvalidBodyError();
            try {
                let json = typeof opts.body === "string" ? JSON.parse(opts.body) : opts.body;
                return {
                    path: path,
                    submission: {
                        formMethod: formMethod,
                        formAction: formAction,
                        formEncType: opts.formEncType,
                        formData: undefined,
                        json: json,
                        text: undefined
                    }
                };
            } catch (e) {
                return getInvalidBodyError();
            }
        }
    }
    $77048ffa45c40179$export$3e9cee6b33872309(typeof FormData === "function", "FormData is not available in this environment");
    let searchParams;
    let formData;
    if (opts.formData) {
        searchParams = $77048ffa45c40179$var$convertFormDataToSearchParams(opts.formData);
        formData = opts.formData;
    } else if (opts.body instanceof FormData) {
        searchParams = $77048ffa45c40179$var$convertFormDataToSearchParams(opts.body);
        formData = opts.body;
    } else if (opts.body instanceof URLSearchParams) {
        searchParams = opts.body;
        formData = $77048ffa45c40179$var$convertSearchParamsToFormData(searchParams);
    } else if (opts.body == null) {
        searchParams = new URLSearchParams();
        formData = new FormData();
    } else try {
        searchParams = new URLSearchParams(opts.body);
        formData = $77048ffa45c40179$var$convertSearchParamsToFormData(searchParams);
    } catch (e) {
        return getInvalidBodyError();
    }
    let submission = {
        formMethod: formMethod,
        formAction: formAction,
        formEncType: opts && opts.formEncType || "application/x-www-form-urlencoded",
        formData: formData,
        json: undefined,
        text: undefined
    };
    if ($77048ffa45c40179$var$isMutationMethod(submission.formMethod)) return {
        path: path,
        submission: submission
    };
    // Flatten submission onto URLSearchParams for GET submissions
    let parsedPath = $77048ffa45c40179$export$8ccf933b0513f8d0(path);
    // On GET navigation submissions we can drop the ?index param from the
    // resulting location since all loaders will run.  But fetcher GET submissions
    // only run a single loader so we need to preserve any incoming ?index params
    if (isFetcher && parsedPath.search && $77048ffa45c40179$var$hasNakedIndexQuery(parsedPath.search)) searchParams.append("index", "");
    parsedPath.search = "?" + searchParams;
    return {
        path: $77048ffa45c40179$export$fe53371bee54353d(parsedPath),
        submission: submission
    };
}
// Filter out all routes below any caught error as they aren't going to
// render so we don't need to load them
function $77048ffa45c40179$var$getLoaderMatchesUntilBoundary(matches, boundaryId) {
    let boundaryMatches = matches;
    if (boundaryId) {
        let index = matches.findIndex((m)=>m.route.id === boundaryId);
        if (index >= 0) boundaryMatches = matches.slice(0, index);
    }
    return boundaryMatches;
}
function $77048ffa45c40179$var$getMatchesToLoad(history, state, matches, submission, location, isInitialLoad, skipActionErrorRevalidation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, deletedFetchers, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, pendingActionResult) {
    let actionResult = pendingActionResult ? $77048ffa45c40179$var$isErrorResult(pendingActionResult[1]) ? pendingActionResult[1].error : pendingActionResult[1].data : undefined;
    let currentUrl = history.createURL(state.location);
    let nextUrl = history.createURL(location);
    // Pick navigation matches that are net-new or qualify for revalidation
    let boundaryId = pendingActionResult && $77048ffa45c40179$var$isErrorResult(pendingActionResult[1]) ? pendingActionResult[0] : undefined;
    let boundaryMatches = boundaryId ? $77048ffa45c40179$var$getLoaderMatchesUntilBoundary(matches, boundaryId) : matches;
    // Don't revalidate loaders by default after action 4xx/5xx responses
    // when the flag is enabled.  They can still opt-into revalidation via
    // `shouldRevalidate` via `actionResult`
    let actionStatus = pendingActionResult ? pendingActionResult[1].statusCode : undefined;
    let shouldSkipRevalidation = skipActionErrorRevalidation && actionStatus && actionStatus >= 400;
    let navigationMatches = boundaryMatches.filter((match, index)=>{
        let { route: route } = match;
        if (route.lazy) // We haven't loaded this route yet so we don't know if it's got a loader!
        return true;
        if (route.loader == null) return false;
        if (isInitialLoad) {
            if (typeof route.loader !== "function" || route.loader.hydrate) return true;
            return state.loaderData[route.id] === undefined && // Don't re-run if the loader ran and threw an error
            (!state.errors || state.errors[route.id] === undefined);
        }
        // Always call the loader on new route instances and pending defer cancellations
        if ($77048ffa45c40179$var$isNewLoader(state.loaderData, state.matches[index], match) || cancelledDeferredRoutes.some((id)=>id === match.route.id)) return true;
        // This is the default implementation for when we revalidate.  If the route
        // provides it's own implementation, then we give them full control but
        // provide this value so they can leverage it if needed after they check
        // their own specific use cases
        let currentRouteMatch = state.matches[index];
        let nextRouteMatch = match;
        return $77048ffa45c40179$var$shouldRevalidateLoader(match, $77048ffa45c40179$var$_extends({
            currentUrl: currentUrl,
            currentParams: currentRouteMatch.params,
            nextUrl: nextUrl,
            nextParams: nextRouteMatch.params
        }, submission, {
            actionResult: actionResult,
            unstable_actionStatus: actionStatus,
            defaultShouldRevalidate: shouldSkipRevalidation ? false : // Forced revalidation due to submission, useRevalidator, or X-Remix-Revalidate
            isRevalidationRequired || currentUrl.pathname + currentUrl.search === nextUrl.pathname + nextUrl.search || // Search params affect all loaders
            currentUrl.search !== nextUrl.search || $77048ffa45c40179$var$isNewRouteInstance(currentRouteMatch, nextRouteMatch)
        }));
    });
    // Pick fetcher.loads that need to be revalidated
    let revalidatingFetchers = [];
    fetchLoadMatches.forEach((f, key)=>{
        // Don't revalidate:
        //  - on initial load (shouldn't be any fetchers then anyway)
        //  - if fetcher won't be present in the subsequent render
        //    - no longer matches the URL (v7_fetcherPersist=false)
        //    - was unmounted but persisted due to v7_fetcherPersist=true
        if (isInitialLoad || !matches.some((m)=>m.route.id === f.routeId) || deletedFetchers.has(key)) return;
        let fetcherMatches = $77048ffa45c40179$export$2708184779ceb39d(routesToUse, f.path, basename);
        // If the fetcher path no longer matches, push it in with null matches so
        // we can trigger a 404 in callLoadersAndMaybeResolveData.  Note this is
        // currently only a use-case for Remix HMR where the route tree can change
        // at runtime and remove a route previously loaded via a fetcher
        if (!fetcherMatches) {
            revalidatingFetchers.push({
                key: key,
                routeId: f.routeId,
                path: f.path,
                matches: null,
                match: null,
                controller: null
            });
            return;
        }
        // Revalidating fetchers are decoupled from the route matches since they
        // load from a static href.  They revalidate based on explicit revalidation
        // (submission, useRevalidator, or X-Remix-Revalidate)
        let fetcher = state.fetchers.get(key);
        let fetcherMatch = $77048ffa45c40179$var$getTargetMatch(fetcherMatches, f.path);
        let shouldRevalidate = false;
        if (fetchRedirectIds.has(key)) // Never trigger a revalidation of an actively redirecting fetcher
        shouldRevalidate = false;
        else if (cancelledFetcherLoads.includes(key)) // Always revalidate if the fetcher was cancelled
        shouldRevalidate = true;
        else if (fetcher && fetcher.state !== "idle" && fetcher.data === undefined) // If the fetcher hasn't ever completed loading yet, then this isn't a
        // revalidation, it would just be a brand new load if an explicit
        // revalidation is required
        shouldRevalidate = isRevalidationRequired;
        else // Otherwise fall back on any user-defined shouldRevalidate, defaulting
        // to explicit revalidations only
        shouldRevalidate = $77048ffa45c40179$var$shouldRevalidateLoader(fetcherMatch, $77048ffa45c40179$var$_extends({
            currentUrl: currentUrl,
            currentParams: state.matches[state.matches.length - 1].params,
            nextUrl: nextUrl,
            nextParams: matches[matches.length - 1].params
        }, submission, {
            actionResult: actionResult,
            unstable_actionStatus: actionStatus,
            defaultShouldRevalidate: shouldSkipRevalidation ? false : isRevalidationRequired
        }));
        if (shouldRevalidate) revalidatingFetchers.push({
            key: key,
            routeId: f.routeId,
            path: f.path,
            matches: fetcherMatches,
            match: fetcherMatch,
            controller: new AbortController()
        });
    });
    return [
        navigationMatches,
        revalidatingFetchers
    ];
}
function $77048ffa45c40179$var$isNewLoader(currentLoaderData, currentMatch, match) {
    let isNew = // [a] -> [a, b]
    !currentMatch || // [a, b] -> [a, c]
    match.route.id !== currentMatch.route.id;
    // Handle the case that we don't have data for a re-used route, potentially
    // from a prior error or from a cancelled pending deferred
    let isMissingData = currentLoaderData[match.route.id] === undefined;
    // Always load if this is a net-new route or we don't yet have data
    return isNew || isMissingData;
}
function $77048ffa45c40179$var$isNewRouteInstance(currentMatch, match) {
    let currentPath = currentMatch.route.path;
    return(// param change for this match, /users/123 -> /users/456
    currentMatch.pathname !== match.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    currentPath != null && currentPath.endsWith("*") && currentMatch.params["*"] !== match.params["*"]);
}
function $77048ffa45c40179$var$shouldRevalidateLoader(loaderMatch, arg) {
    if (loaderMatch.route.shouldRevalidate) {
        let routeChoice = loaderMatch.route.shouldRevalidate(arg);
        if (typeof routeChoice === "boolean") return routeChoice;
    }
    return arg.defaultShouldRevalidate;
}
/**
 * Execute route.lazy() methods to lazily load route modules (loader, action,
 * shouldRevalidate) and update the routeManifest in place which shares objects
 * with dataRoutes so those get updated as well.
 */ async function $77048ffa45c40179$var$loadLazyRouteModule(route, mapRouteProperties, manifest) {
    if (!route.lazy) return;
    let lazyRoute = await route.lazy();
    // If the lazy route function was executed and removed by another parallel
    // call then we can return - first lazy() to finish wins because the return
    // value of lazy is expected to be static
    if (!route.lazy) return;
    let routeToUpdate = manifest[route.id];
    $77048ffa45c40179$export$3e9cee6b33872309(routeToUpdate, "No route found in manifest");
    // Update the route in place.  This should be safe because there's no way
    // we could yet be sitting on this route as we can't get there without
    // resolving lazy() first.
    //
    // This is different than the HMR "update" use-case where we may actively be
    // on the route being updated.  The main concern boils down to "does this
    // mutation affect any ongoing navigations or any current state.matches
    // values?".  If not, it should be safe to update in place.
    let routeUpdates = {};
    for(let lazyRouteProperty in lazyRoute){
        let staticRouteValue = routeToUpdate[lazyRouteProperty];
        let isPropertyStaticallyDefined = staticRouteValue !== undefined && // This property isn't static since it should always be updated based
        // on the route updates
        lazyRouteProperty !== "hasErrorBoundary";
        $77048ffa45c40179$export$c0e02632e14916fd(!isPropertyStaticallyDefined, 'Route "' + routeToUpdate.id + '" has a static property "' + lazyRouteProperty + '" ' + "defined but its lazy function is also returning a value for this property. " + ('The lazy route property "' + lazyRouteProperty + '" will be ignored.'));
        if (!isPropertyStaticallyDefined && !$77048ffa45c40179$var$immutableRouteKeys.has(lazyRouteProperty)) routeUpdates[lazyRouteProperty] = lazyRoute[lazyRouteProperty];
    }
    // Mutate the route with the provided updates.  Do this first so we pass
    // the updated version to mapRouteProperties
    Object.assign(routeToUpdate, routeUpdates);
    // Mutate the `hasErrorBoundary` property on the route based on the route
    // updates and remove the `lazy` function so we don't resolve the lazy
    // route again.
    Object.assign(routeToUpdate, $77048ffa45c40179$var$_extends({}, mapRouteProperties(routeToUpdate), {
        lazy: undefined
    }));
}
// Default implementation of `dataStrategy` which fetches all loaders in parallel
function $77048ffa45c40179$var$defaultDataStrategy(opts) {
    return Promise.all(opts.matches.map((m)=>m.resolve()));
}
async function $77048ffa45c40179$var$callDataStrategyImpl(dataStrategyImpl, type, request, matchesToLoad, matches, manifest, mapRouteProperties, requestContext) {
    let routeIdsToLoad = matchesToLoad.reduce((acc, m)=>acc.add(m.route.id), new Set());
    let loadedMatches = new Set();
    // Send all matches here to allow for a middleware-type implementation.
    // handler will be a no-op for unneeded routes and we filter those results
    // back out below.
    let results = await dataStrategyImpl({
        matches: matches.map((match)=>{
            let shouldLoad = routeIdsToLoad.has(match.route.id);
            // `resolve` encapsulates the route.lazy, executing the
            // loader/action, and mapping return values/thrown errors to a
            // HandlerResult.  Users can pass a callback to take fine-grained control
            // over the execution of the loader/action
            let resolve = (handlerOverride)=>{
                loadedMatches.add(match.route.id);
                return shouldLoad ? $77048ffa45c40179$var$callLoaderOrAction(type, request, match, manifest, mapRouteProperties, handlerOverride, requestContext) : Promise.resolve({
                    type: $77048ffa45c40179$var$ResultType.data,
                    result: undefined
                });
            };
            return $77048ffa45c40179$var$_extends({}, match, {
                shouldLoad: shouldLoad,
                resolve: resolve
            });
        }),
        request: request,
        params: matches[0].params,
        context: requestContext
    });
    // Throw if any loadRoute implementations not called since they are what
    // ensures a route is fully loaded
    matches.forEach((m)=>$77048ffa45c40179$export$3e9cee6b33872309(loadedMatches.has(m.route.id), '`match.resolve()` was not called for route id "' + m.route.id + '". ' + "You must call `match.resolve()` on every match passed to " + "`dataStrategy` to ensure all routes are properly loaded."));
    // Filter out any middleware-only matches for which we didn't need to run handlers
    return results.filter((_, i)=>routeIdsToLoad.has(matches[i].route.id));
}
// Default logic for calling a loader/action is the user has no specified a dataStrategy
async function $77048ffa45c40179$var$callLoaderOrAction(type, request, match, manifest, mapRouteProperties, handlerOverride, staticContext) {
    let result;
    let onReject;
    let runHandler = (handler)=>{
        // Setup a promise we can race against so that abort signals short circuit
        let reject;
        // This will never resolve so safe to type it as Promise<HandlerResult> to
        // satisfy the function return value
        let abortPromise = new Promise((_, r)=>reject = r);
        onReject = ()=>reject();
        request.signal.addEventListener("abort", onReject);
        let actualHandler = (ctx)=>{
            if (typeof handler !== "function") return Promise.reject(new Error("You cannot call the handler for a route which defines a boolean " + ('"' + type + '" [routeId: ' + match.route.id + "]")));
            return handler({
                request: request,
                params: match.params,
                context: staticContext
            }, ...ctx !== undefined ? [
                ctx
            ] : []);
        };
        let handlerPromise;
        if (handlerOverride) handlerPromise = handlerOverride((ctx)=>actualHandler(ctx));
        else handlerPromise = (async ()=>{
            try {
                let val = await actualHandler();
                return {
                    type: "data",
                    result: val
                };
            } catch (e) {
                return {
                    type: "error",
                    result: e
                };
            }
        })();
        return Promise.race([
            handlerPromise,
            abortPromise
        ]);
    };
    try {
        let handler = match.route[type];
        if (match.route.lazy) {
            if (handler) {
                // Run statically defined handler in parallel with lazy()
                let handlerError;
                let [value] = await Promise.all([
                    // If the handler throws, don't let it immediately bubble out,
                    // since we need to let the lazy() execution finish so we know if this
                    // route has a boundary that can handle the error
                    runHandler(handler).catch((e)=>{
                        handlerError = e;
                    }),
                    $77048ffa45c40179$var$loadLazyRouteModule(match.route, mapRouteProperties, manifest)
                ]);
                if (handlerError !== undefined) throw handlerError;
                result = value;
            } else {
                // Load lazy route module, then run any returned handler
                await $77048ffa45c40179$var$loadLazyRouteModule(match.route, mapRouteProperties, manifest);
                handler = match.route[type];
                if (handler) // Handler still runs even if we got interrupted to maintain consistency
                // with un-abortable behavior of handler execution on non-lazy or
                // previously-lazy-loaded routes
                result = await runHandler(handler);
                else if (type === "action") {
                    let url = new URL(request.url);
                    let pathname = url.pathname + url.search;
                    throw $77048ffa45c40179$var$getInternalRouterError(405, {
                        method: request.method,
                        pathname: pathname,
                        routeId: match.route.id
                    });
                } else // lazy() route has no loader to run.  Short circuit here so we don't
                // hit the invariant below that errors on returning undefined.
                return {
                    type: $77048ffa45c40179$var$ResultType.data,
                    result: undefined
                };
            }
        } else if (!handler) {
            let url = new URL(request.url);
            let pathname = url.pathname + url.search;
            throw $77048ffa45c40179$var$getInternalRouterError(404, {
                pathname: pathname
            });
        } else result = await runHandler(handler);
        $77048ffa45c40179$export$3e9cee6b33872309(result.result !== undefined, "You defined " + (type === "action" ? "an action" : "a loader") + " for route " + ('"' + match.route.id + "\" but didn't return anything from your `" + type + "` ") + "function. Please return a value or `null`.");
    } catch (e) {
        // We should already be catching and converting normal handler executions to
        // HandlerResults and returning them, so anything that throws here is an
        // unexpected error we still need to wrap
        return {
            type: $77048ffa45c40179$var$ResultType.error,
            result: e
        };
    } finally{
        if (onReject) request.signal.removeEventListener("abort", onReject);
    }
    return result;
}
async function $77048ffa45c40179$var$convertHandlerResultToDataResult(handlerResult) {
    let { result: result, type: type, status: status } = handlerResult;
    if ($77048ffa45c40179$var$isResponse(result)) {
        let data;
        try {
            let contentType = result.headers.get("Content-Type");
            // Check between word boundaries instead of startsWith() due to the last
            // paragraph of https://httpwg.org/specs/rfc9110.html#field.content-type
            if (contentType && /\bapplication\/json\b/.test(contentType)) {
                if (result.body == null) data = null;
                else data = await result.json();
            } else data = await result.text();
        } catch (e) {
            return {
                type: $77048ffa45c40179$var$ResultType.error,
                error: e
            };
        }
        if (type === $77048ffa45c40179$var$ResultType.error) return {
            type: $77048ffa45c40179$var$ResultType.error,
            error: new $77048ffa45c40179$export$6c6580e81da25755(result.status, result.statusText, data),
            statusCode: result.status,
            headers: result.headers
        };
        return {
            type: $77048ffa45c40179$var$ResultType.data,
            data: data,
            statusCode: result.status,
            headers: result.headers
        };
    }
    if (type === $77048ffa45c40179$var$ResultType.error) return {
        type: $77048ffa45c40179$var$ResultType.error,
        error: result,
        statusCode: $77048ffa45c40179$export$972111febbeef05b(result) ? result.status : status
    };
    if ($77048ffa45c40179$export$fbcedacb60443473(result)) {
        var _result$init, _result$init2;
        return {
            type: $77048ffa45c40179$var$ResultType.deferred,
            deferredData: result,
            statusCode: (_result$init = result.init) == null ? void 0 : _result$init.status,
            headers: ((_result$init2 = result.init) == null ? void 0 : _result$init2.headers) && new Headers(result.init.headers)
        };
    }
    return {
        type: $77048ffa45c40179$var$ResultType.data,
        data: result,
        statusCode: status
    };
}
// Support relative routing in internal redirects
function $77048ffa45c40179$var$normalizeRelativeRoutingRedirectResponse(response, request, routeId, matches, basename, v7_relativeSplatPath) {
    let location = response.headers.get("Location");
    $77048ffa45c40179$export$3e9cee6b33872309(location, "Redirects returned/thrown from loaders/actions must have a Location header");
    if (!$77048ffa45c40179$var$ABSOLUTE_URL_REGEX.test(location)) {
        let trimmedMatches = matches.slice(0, matches.findIndex((m)=>m.route.id === routeId) + 1);
        location = $77048ffa45c40179$var$normalizeTo(new URL(request.url), trimmedMatches, basename, true, location, v7_relativeSplatPath);
        response.headers.set("Location", location);
    }
    return response;
}
function $77048ffa45c40179$var$normalizeRedirectLocation(location, currentUrl, basename) {
    if ($77048ffa45c40179$var$ABSOLUTE_URL_REGEX.test(location)) {
        // Strip off the protocol+origin for same-origin + same-basename absolute redirects
        let normalizedLocation = location;
        let url = normalizedLocation.startsWith("//") ? new URL(currentUrl.protocol + normalizedLocation) : new URL(normalizedLocation);
        let isSameBasename = $77048ffa45c40179$export$b69e3301ce081aa3(url.pathname, basename) != null;
        if (url.origin === currentUrl.origin && isSameBasename) return url.pathname + url.search + url.hash;
    }
    return location;
}
// Utility method for creating the Request instances for loaders/actions during
// client-side navigations and fetches.  During SSR we will always have a
// Request instance from the static handler (query/queryRoute)
function $77048ffa45c40179$var$createClientSideRequest(history, location, signal, submission) {
    let url = history.createURL($77048ffa45c40179$var$stripHashFromPath(location)).toString();
    let init = {
        signal: signal
    };
    if (submission && $77048ffa45c40179$var$isMutationMethod(submission.formMethod)) {
        let { formMethod: formMethod, formEncType: formEncType } = submission;
        // Didn't think we needed this but it turns out unlike other methods, patch
        // won't be properly normalized to uppercase and results in a 405 error.
        // See: https://fetch.spec.whatwg.org/#concept-method
        init.method = formMethod.toUpperCase();
        if (formEncType === "application/json") {
            init.headers = new Headers({
                "Content-Type": formEncType
            });
            init.body = JSON.stringify(submission.json);
        } else if (formEncType === "text/plain") // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)
        init.body = submission.text;
        else if (formEncType === "application/x-www-form-urlencoded" && submission.formData) // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)
        init.body = $77048ffa45c40179$var$convertFormDataToSearchParams(submission.formData);
        else // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)
        init.body = submission.formData;
    }
    return new Request(url, init);
}
function $77048ffa45c40179$var$convertFormDataToSearchParams(formData) {
    let searchParams = new URLSearchParams();
    for (let [key, value] of formData.entries())// https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#converting-an-entry-list-to-a-list-of-name-value-pairs
    searchParams.append(key, typeof value === "string" ? value : value.name);
    return searchParams;
}
function $77048ffa45c40179$var$convertSearchParamsToFormData(searchParams) {
    let formData = new FormData();
    for (let [key, value] of searchParams.entries())formData.append(key, value);
    return formData;
}
function $77048ffa45c40179$var$processRouteLoaderData(matches, matchesToLoad, results, pendingActionResult, activeDeferreds, skipLoaderErrorBubbling) {
    // Fill in loaderData/errors from our loaders
    let loaderData = {};
    let errors = null;
    let statusCode;
    let foundError = false;
    let loaderHeaders = {};
    let pendingError = pendingActionResult && $77048ffa45c40179$var$isErrorResult(pendingActionResult[1]) ? pendingActionResult[1].error : undefined;
    // Process loader results into state.loaderData/state.errors
    results.forEach((result, index)=>{
        let id = matchesToLoad[index].route.id;
        $77048ffa45c40179$export$3e9cee6b33872309(!$77048ffa45c40179$var$isRedirectResult(result), "Cannot handle redirect results in processLoaderData");
        if ($77048ffa45c40179$var$isErrorResult(result)) {
            let error = result.error;
            // If we have a pending action error, we report it at the highest-route
            // that throws a loader error, and then clear it out to indicate that
            // it was consumed
            if (pendingError !== undefined) {
                error = pendingError;
                pendingError = undefined;
            }
            errors = errors || {};
            if (skipLoaderErrorBubbling) errors[id] = error;
            else {
                // Look upwards from the matched route for the closest ancestor error
                // boundary, defaulting to the root match.  Prefer higher error values
                // if lower errors bubble to the same boundary
                let boundaryMatch = $77048ffa45c40179$var$findNearestBoundary(matches, id);
                if (errors[boundaryMatch.route.id] == null) errors[boundaryMatch.route.id] = error;
            }
            // Clear our any prior loaderData for the throwing route
            loaderData[id] = undefined;
            // Once we find our first (highest) error, we set the status code and
            // prevent deeper status codes from overriding
            if (!foundError) {
                foundError = true;
                statusCode = $77048ffa45c40179$export$972111febbeef05b(result.error) ? result.error.status : 500;
            }
            if (result.headers) loaderHeaders[id] = result.headers;
        } else if ($77048ffa45c40179$var$isDeferredResult(result)) {
            activeDeferreds.set(id, result.deferredData);
            loaderData[id] = result.deferredData.data;
            // Error status codes always override success status codes, but if all
            // loaders are successful we take the deepest status code.
            if (result.statusCode != null && result.statusCode !== 200 && !foundError) statusCode = result.statusCode;
            if (result.headers) loaderHeaders[id] = result.headers;
        } else {
            loaderData[id] = result.data;
            // Error status codes always override success status codes, but if all
            // loaders are successful we take the deepest status code.
            if (result.statusCode && result.statusCode !== 200 && !foundError) statusCode = result.statusCode;
            if (result.headers) loaderHeaders[id] = result.headers;
        }
    });
    // If we didn't consume the pending action error (i.e., all loaders
    // resolved), then consume it here.  Also clear out any loaderData for the
    // throwing route
    if (pendingError !== undefined && pendingActionResult) {
        errors = {
            [pendingActionResult[0]]: pendingError
        };
        loaderData[pendingActionResult[0]] = undefined;
    }
    return {
        loaderData: loaderData,
        errors: errors,
        statusCode: statusCode || 200,
        loaderHeaders: loaderHeaders
    };
}
function $77048ffa45c40179$var$processLoaderData(state, matches, matchesToLoad, results, pendingActionResult, revalidatingFetchers, fetcherResults, activeDeferreds) {
    let { loaderData: loaderData, errors: errors } = $77048ffa45c40179$var$processRouteLoaderData(matches, matchesToLoad, results, pendingActionResult, activeDeferreds, false // This method is only called client side so we always want to bubble
    );
    // Process results from our revalidating fetchers
    for(let index = 0; index < revalidatingFetchers.length; index++){
        let { key: key, match: match, controller: controller } = revalidatingFetchers[index];
        $77048ffa45c40179$export$3e9cee6b33872309(fetcherResults !== undefined && fetcherResults[index] !== undefined, "Did not find corresponding fetcher result");
        let result = fetcherResults[index];
        // Process fetcher non-redirect errors
        if (controller && controller.signal.aborted) continue;
        else if ($77048ffa45c40179$var$isErrorResult(result)) {
            let boundaryMatch = $77048ffa45c40179$var$findNearestBoundary(state.matches, match == null ? void 0 : match.route.id);
            if (!(errors && errors[boundaryMatch.route.id])) errors = $77048ffa45c40179$var$_extends({}, errors, {
                [boundaryMatch.route.id]: result.error
            });
            state.fetchers.delete(key);
        } else if ($77048ffa45c40179$var$isRedirectResult(result)) // Should never get here, redirects should get processed above, but we
        // keep this to type narrow to a success result in the else
        $77048ffa45c40179$export$3e9cee6b33872309(false, "Unhandled fetcher revalidation redirect");
        else if ($77048ffa45c40179$var$isDeferredResult(result)) // Should never get here, deferred data should be awaited for fetchers
        // in resolveDeferredResults
        $77048ffa45c40179$export$3e9cee6b33872309(false, "Unhandled fetcher deferred data");
        else {
            let doneFetcher = $77048ffa45c40179$var$getDoneFetcher(result.data);
            state.fetchers.set(key, doneFetcher);
        }
    }
    return {
        loaderData: loaderData,
        errors: errors
    };
}
function $77048ffa45c40179$var$mergeLoaderData(loaderData, newLoaderData, matches, errors) {
    let mergedLoaderData = $77048ffa45c40179$var$_extends({}, newLoaderData);
    for (let match of matches){
        let id = match.route.id;
        if (newLoaderData.hasOwnProperty(id)) {
            if (newLoaderData[id] !== undefined) mergedLoaderData[id] = newLoaderData[id];
        } else if (loaderData[id] !== undefined && match.route.loader) // Preserve existing keys not included in newLoaderData and where a loader
        // wasn't removed by HMR
        mergedLoaderData[id] = loaderData[id];
        if (errors && errors.hasOwnProperty(id)) break;
    }
    return mergedLoaderData;
}
function $77048ffa45c40179$var$getActionDataForCommit(pendingActionResult) {
    if (!pendingActionResult) return {};
    return $77048ffa45c40179$var$isErrorResult(pendingActionResult[1]) ? {
        // Clear out prior actionData on errors
        actionData: {}
    } : {
        actionData: {
            [pendingActionResult[0]]: pendingActionResult[1].data
        }
    };
}
// Find the nearest error boundary, looking upwards from the leaf route (or the
// route specified by routeId) for the closest ancestor error boundary,
// defaulting to the root match
function $77048ffa45c40179$var$findNearestBoundary(matches, routeId) {
    let eligibleMatches = routeId ? matches.slice(0, matches.findIndex((m)=>m.route.id === routeId) + 1) : [
        ...matches
    ];
    return eligibleMatches.reverse().find((m)=>m.route.hasErrorBoundary === true) || matches[0];
}
function $77048ffa45c40179$var$getShortCircuitMatches(routes) {
    // Prefer a root layout route if present, otherwise shim in a route object
    let route = routes.length === 1 ? routes[0] : routes.find((r)=>r.index || !r.path || r.path === "/") || {
        id: "__shim-error-route__"
    };
    return {
        matches: [
            {
                params: {},
                pathname: "",
                pathnameBase: "",
                route: route
            }
        ],
        route: route
    };
}
function $77048ffa45c40179$var$getInternalRouterError(status, _temp5) {
    let { pathname: pathname, routeId: routeId, method: method, type: type } = _temp5 === void 0 ? {} : _temp5;
    let statusText = "Unknown Server Error";
    let errorMessage = "Unknown @remix-run/router error";
    if (status === 400) {
        statusText = "Bad Request";
        if (method && pathname && routeId) errorMessage = "You made a " + method + ' request to "' + pathname + '" but ' + ('did not provide a `loader` for route "' + routeId + '", ') + "so there is no way to handle the request.";
        else if (type === "defer-action") errorMessage = "defer() is not supported in actions";
        else if (type === "invalid-body") errorMessage = "Unable to encode submission body";
    } else if (status === 403) {
        statusText = "Forbidden";
        errorMessage = 'Route "' + routeId + '" does not match URL "' + pathname + '"';
    } else if (status === 404) {
        statusText = "Not Found";
        errorMessage = 'No route matches URL "' + pathname + '"';
    } else if (status === 405) {
        statusText = "Method Not Allowed";
        if (method && pathname && routeId) errorMessage = "You made a " + method.toUpperCase() + ' request to "' + pathname + '" but ' + ('did not provide an `action` for route "' + routeId + '", ') + "so there is no way to handle the request.";
        else if (method) errorMessage = 'Invalid request method "' + method.toUpperCase() + '"';
    }
    return new $77048ffa45c40179$export$6c6580e81da25755(status || 500, statusText, new Error(errorMessage), true);
}
// Find any returned redirect errors, starting from the lowest match
function $77048ffa45c40179$var$findRedirect(results) {
    for(let i = results.length - 1; i >= 0; i--){
        let result = results[i];
        if ($77048ffa45c40179$var$isRedirectResult(result)) return {
            result: result,
            idx: i
        };
    }
}
function $77048ffa45c40179$var$stripHashFromPath(path) {
    let parsedPath = typeof path === "string" ? $77048ffa45c40179$export$8ccf933b0513f8d0(path) : path;
    return $77048ffa45c40179$export$fe53371bee54353d($77048ffa45c40179$var$_extends({}, parsedPath, {
        hash: ""
    }));
}
function $77048ffa45c40179$var$isHashChangeOnly(a, b) {
    if (a.pathname !== b.pathname || a.search !== b.search) return false;
    if (a.hash === "") // /page -> /page#hash
    return b.hash !== "";
    else if (a.hash === b.hash) // /page#hash -> /page#hash
    return true;
    else if (b.hash !== "") // /page#hash -> /page#other
    return true;
    // If the hash is removed the browser will re-perform a request to the server
    // /page#hash -> /page
    return false;
}
function $77048ffa45c40179$var$isHandlerResult(result) {
    return result != null && typeof result === "object" && "type" in result && "result" in result && (result.type === $77048ffa45c40179$var$ResultType.data || result.type === $77048ffa45c40179$var$ResultType.error);
}
function $77048ffa45c40179$var$isRedirectHandlerResult(result) {
    return $77048ffa45c40179$var$isResponse(result.result) && $77048ffa45c40179$var$redirectStatusCodes.has(result.result.status);
}
function $77048ffa45c40179$var$isDeferredResult(result) {
    return result.type === $77048ffa45c40179$var$ResultType.deferred;
}
function $77048ffa45c40179$var$isErrorResult(result) {
    return result.type === $77048ffa45c40179$var$ResultType.error;
}
function $77048ffa45c40179$var$isRedirectResult(result) {
    return (result && result.type) === $77048ffa45c40179$var$ResultType.redirect;
}
function $77048ffa45c40179$export$fbcedacb60443473(value) {
    let deferred = value;
    return deferred && typeof deferred === "object" && typeof deferred.data === "object" && typeof deferred.subscribe === "function" && typeof deferred.cancel === "function" && typeof deferred.resolveData === "function";
}
function $77048ffa45c40179$var$isResponse(value) {
    return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
}
function $77048ffa45c40179$var$isRedirectResponse(result) {
    if (!$77048ffa45c40179$var$isResponse(result)) return false;
    let status = result.status;
    let location = result.headers.get("Location");
    return status >= 300 && status <= 399 && location != null;
}
function $77048ffa45c40179$var$isValidMethod(method) {
    return $77048ffa45c40179$var$validRequestMethods.has(method.toLowerCase());
}
function $77048ffa45c40179$var$isMutationMethod(method) {
    return $77048ffa45c40179$var$validMutationMethods.has(method.toLowerCase());
}
async function $77048ffa45c40179$var$resolveDeferredResults(currentMatches, matchesToLoad, results, signals, isFetcher, currentLoaderData) {
    for(let index = 0; index < results.length; index++){
        let result = results[index];
        let match = matchesToLoad[index];
        // If we don't have a match, then we can have a deferred result to do
        // anything with.  This is for revalidating fetchers where the route was
        // removed during HMR
        if (!match) continue;
        let currentMatch = currentMatches.find((m)=>m.route.id === match.route.id);
        let isRevalidatingLoader = currentMatch != null && !$77048ffa45c40179$var$isNewRouteInstance(currentMatch, match) && (currentLoaderData && currentLoaderData[match.route.id]) !== undefined;
        if ($77048ffa45c40179$var$isDeferredResult(result) && (isFetcher || isRevalidatingLoader)) {
            // Note: we do not have to touch activeDeferreds here since we race them
            // against the signal in resolveDeferredData and they'll get aborted
            // there if needed
            let signal = signals[index];
            $77048ffa45c40179$export$3e9cee6b33872309(signal, "Expected an AbortSignal for revalidating fetcher deferred result");
            await $77048ffa45c40179$var$resolveDeferredData(result, signal, isFetcher).then((result)=>{
                if (result) results[index] = result || results[index];
            });
        }
    }
}
async function $77048ffa45c40179$var$resolveDeferredData(result, signal, unwrap) {
    if (unwrap === void 0) unwrap = false;
    let aborted = await result.deferredData.resolveData(signal);
    if (aborted) return;
    if (unwrap) try {
        return {
            type: $77048ffa45c40179$var$ResultType.data,
            data: result.deferredData.unwrappedData
        };
    } catch (e) {
        // Handle any TrackedPromise._error values encountered while unwrapping
        return {
            type: $77048ffa45c40179$var$ResultType.error,
            error: e
        };
    }
    return {
        type: $77048ffa45c40179$var$ResultType.data,
        data: result.deferredData.data
    };
}
function $77048ffa45c40179$var$hasNakedIndexQuery(search) {
    return new URLSearchParams(search).getAll("index").some((v)=>v === "");
}
function $77048ffa45c40179$var$getTargetMatch(matches, location) {
    let search = typeof location === "string" ? $77048ffa45c40179$export$8ccf933b0513f8d0(location).search : location.search;
    if (matches[matches.length - 1].route.index && $77048ffa45c40179$var$hasNakedIndexQuery(search || "")) // Return the leaf index route when index is present
    return matches[matches.length - 1];
    // Otherwise grab the deepest "path contributing" match (ignoring index and
    // pathless layout routes)
    let pathMatches = $77048ffa45c40179$var$getPathContributingMatches(matches);
    return pathMatches[pathMatches.length - 1];
}
function $77048ffa45c40179$var$getSubmissionFromNavigation(navigation) {
    let { formMethod: formMethod, formAction: formAction, formEncType: formEncType, text: text, formData: formData, json: json } = navigation;
    if (!formMethod || !formAction || !formEncType) return;
    if (text != null) return {
        formMethod: formMethod,
        formAction: formAction,
        formEncType: formEncType,
        formData: undefined,
        json: undefined,
        text: text
    };
    else if (formData != null) return {
        formMethod: formMethod,
        formAction: formAction,
        formEncType: formEncType,
        formData: formData,
        json: undefined,
        text: undefined
    };
    else if (json !== undefined) return {
        formMethod: formMethod,
        formAction: formAction,
        formEncType: formEncType,
        formData: undefined,
        json: json,
        text: undefined
    };
}
function $77048ffa45c40179$var$getLoadingNavigation(location, submission) {
    if (submission) {
        let navigation = {
            state: "loading",
            location: location,
            formMethod: submission.formMethod,
            formAction: submission.formAction,
            formEncType: submission.formEncType,
            formData: submission.formData,
            json: submission.json,
            text: submission.text
        };
        return navigation;
    } else {
        let navigation = {
            state: "loading",
            location: location,
            formMethod: undefined,
            formAction: undefined,
            formEncType: undefined,
            formData: undefined,
            json: undefined,
            text: undefined
        };
        return navigation;
    }
}
function $77048ffa45c40179$var$getSubmittingNavigation(location, submission) {
    let navigation = {
        state: "submitting",
        location: location,
        formMethod: submission.formMethod,
        formAction: submission.formAction,
        formEncType: submission.formEncType,
        formData: submission.formData,
        json: submission.json,
        text: submission.text
    };
    return navigation;
}
function $77048ffa45c40179$var$getLoadingFetcher(submission, data) {
    if (submission) {
        let fetcher = {
            state: "loading",
            formMethod: submission.formMethod,
            formAction: submission.formAction,
            formEncType: submission.formEncType,
            formData: submission.formData,
            json: submission.json,
            text: submission.text,
            data: data
        };
        return fetcher;
    } else {
        let fetcher = {
            state: "loading",
            formMethod: undefined,
            formAction: undefined,
            formEncType: undefined,
            formData: undefined,
            json: undefined,
            text: undefined,
            data: data
        };
        return fetcher;
    }
}
function $77048ffa45c40179$var$getSubmittingFetcher(submission, existingFetcher) {
    let fetcher = {
        state: "submitting",
        formMethod: submission.formMethod,
        formAction: submission.formAction,
        formEncType: submission.formEncType,
        formData: submission.formData,
        json: submission.json,
        text: submission.text,
        data: existingFetcher ? existingFetcher.data : undefined
    };
    return fetcher;
}
function $77048ffa45c40179$var$getDoneFetcher(data) {
    let fetcher = {
        state: "idle",
        formMethod: undefined,
        formAction: undefined,
        formEncType: undefined,
        formData: undefined,
        json: undefined,
        text: undefined,
        data: data
    };
    return fetcher;
}
function $77048ffa45c40179$var$restoreAppliedTransitions(_window, transitions) {
    try {
        let sessionPositions = _window.sessionStorage.getItem($77048ffa45c40179$var$TRANSITIONS_STORAGE_KEY);
        if (sessionPositions) {
            let json = JSON.parse(sessionPositions);
            for (let [k, v] of Object.entries(json || {}))if (v && Array.isArray(v)) transitions.set(k, new Set(v || []));
        }
    } catch (e) {
    // no-op, use default empty object
    }
}
function $77048ffa45c40179$var$persistAppliedTransitions(_window, transitions) {
    if (transitions.size > 0) {
        let json = {};
        for (let [k, v] of transitions)json[k] = [
            ...v
        ];
        try {
            _window.sessionStorage.setItem($77048ffa45c40179$var$TRANSITIONS_STORAGE_KEY, JSON.stringify(json));
        } catch (error) {
            $77048ffa45c40179$export$c0e02632e14916fd(false, "Failed to save applied view transitions in sessionStorage (" + error + ").");
        }
    }
}

/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ 
var $iS7v4 = parcelRequire("iS7v4");

function $722f2e84ec5fbe3b$var$_extends() {
    $722f2e84ec5fbe3b$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $722f2e84ec5fbe3b$var$_extends.apply(this, arguments);
}
// Create react-specific types from the agnostic types in @remix-run/router to
// export from react-router
const $722f2e84ec5fbe3b$export$3add0d5dce533e2e = /*#__PURE__*/ $iS7v4.createContext(null);
const $722f2e84ec5fbe3b$export$145dfa71566a64dc = /*#__PURE__*/ $iS7v4.createContext(null);
const $722f2e84ec5fbe3b$var$AwaitContext = /*#__PURE__*/ $iS7v4.createContext(null);
/**
 * A Navigator is a "location changer"; it's how you get to different locations.
 *
 * Every history instance conforms to the Navigator interface, but the
 * distinction is useful primarily when it comes to the low-level `<Router>` API
 * where both the location and a navigator must be provided separately in order
 * to avoid "tearing" that may occur in a suspense-enabled app if the action
 * and/or location were to be read directly from the history instance.
 */ const $722f2e84ec5fbe3b$export$26749e8557646306 = /*#__PURE__*/ $iS7v4.createContext(null);
const $722f2e84ec5fbe3b$export$c7914228fb69b0f5 = /*#__PURE__*/ $iS7v4.createContext(null);
const $722f2e84ec5fbe3b$export$9072aa6dd1f93057 = /*#__PURE__*/ $iS7v4.createContext({
    outlet: null,
    matches: [],
    isDataRoute: false
});
const $722f2e84ec5fbe3b$var$RouteErrorContext = /*#__PURE__*/ $iS7v4.createContext(null);
/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/hooks/use-href
 */ function $722f2e84ec5fbe3b$export$b66bb29c5006f12f(to, _temp) {
    let { relative: relative } = _temp === void 0 ? {} : _temp;
    !$722f2e84ec5fbe3b$export$9c954a9d03d32f4a() && (0, $77048ffa45c40179$export$3e9cee6b33872309)(false);
    let { basename: basename, navigator: navigator } = $iS7v4.useContext($722f2e84ec5fbe3b$export$26749e8557646306);
    let { hash: hash, pathname: pathname, search: search } = $722f2e84ec5fbe3b$export$e75d2a2d1b3c245b(to, {
        relative: relative
    });
    let joinedPathname = pathname;
    // If we're operating within a basename, prepend it to the pathname prior
    // to creating the href.  If this is a root navigation, then just use the raw
    // basename which allows the basename to have full control over the presence
    // of a trailing slash on root links
    if (basename !== "/") joinedPathname = pathname === "/" ? basename : (0, $77048ffa45c40179$export$86d9a7913e44197e)([
        basename,
        pathname
    ]);
    return navigator.createHref({
        pathname: joinedPathname,
        search: search,
        hash: hash
    });
}
/**
 * Returns true if this component is a descendant of a `<Router>`.
 *
 * @see https://reactrouter.com/hooks/use-in-router-context
 */ function $722f2e84ec5fbe3b$export$9c954a9d03d32f4a() {
    return $iS7v4.useContext($722f2e84ec5fbe3b$export$c7914228fb69b0f5) != null;
}
/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/hooks/use-location
 */ function $722f2e84ec5fbe3b$export$45d76561a5302f2b() {
    !$722f2e84ec5fbe3b$export$9c954a9d03d32f4a() && (0, $77048ffa45c40179$export$3e9cee6b33872309)(false);
    return $iS7v4.useContext($722f2e84ec5fbe3b$export$c7914228fb69b0f5).location;
}
/**
 * Returns the current navigation action which describes how the router came to
 * the current location, either by a pop, push, or replace on the history stack.
 *
 * @see https://reactrouter.com/hooks/use-navigation-type
 */ function $722f2e84ec5fbe3b$export$1b3f31771c5d07c() {
    return $iS7v4.useContext($722f2e84ec5fbe3b$export$c7914228fb69b0f5).navigationType;
}
/**
 * Returns a PathMatch object if the given pattern matches the current URL.
 * This is useful for components that need to know "active" state, e.g.
 * `<NavLink>`.
 *
 * @see https://reactrouter.com/hooks/use-match
 */ function $722f2e84ec5fbe3b$export$6c330e8992e8a295(pattern) {
    !$722f2e84ec5fbe3b$export$9c954a9d03d32f4a() && (0, $77048ffa45c40179$export$3e9cee6b33872309)(false);
    let { pathname: pathname } = $722f2e84ec5fbe3b$export$45d76561a5302f2b();
    return $iS7v4.useMemo(()=>(0, $77048ffa45c40179$export$81336c211d5ff295)(pattern, pathname), [
        pathname,
        pattern
    ]);
}
/**
 * The interface for the navigate() function returned from useNavigate().
 */ const $722f2e84ec5fbe3b$var$navigateEffectWarning = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
// Mute warnings for calls to useNavigate in SSR environments
function $722f2e84ec5fbe3b$var$useIsomorphicLayoutEffect(cb) {
    let isStatic = $iS7v4.useContext($722f2e84ec5fbe3b$export$26749e8557646306).static;
    if (!isStatic) // We should be able to get rid of this once react 18.3 is released
    // See: https://github.com/facebook/react/pull/26395
    // eslint-disable-next-line react-hooks/rules-of-hooks
    $iS7v4.useLayoutEffect(cb);
}
/**
 * Returns an imperative method for changing the location. Used by `<Link>`s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/hooks/use-navigate
 */ function $722f2e84ec5fbe3b$export$9770f232ac06a008() {
    let { isDataRoute: isDataRoute } = $iS7v4.useContext($722f2e84ec5fbe3b$export$9072aa6dd1f93057);
    // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return isDataRoute ? $722f2e84ec5fbe3b$var$useNavigateStable() : $722f2e84ec5fbe3b$var$useNavigateUnstable();
}
function $722f2e84ec5fbe3b$var$useNavigateUnstable() {
    !$722f2e84ec5fbe3b$export$9c954a9d03d32f4a() && (0, $77048ffa45c40179$export$3e9cee6b33872309)(false);
    let dataRouterContext = $iS7v4.useContext($722f2e84ec5fbe3b$export$3add0d5dce533e2e);
    let { basename: basename, future: future, navigator: navigator } = $iS7v4.useContext($722f2e84ec5fbe3b$export$26749e8557646306);
    let { matches: matches } = $iS7v4.useContext($722f2e84ec5fbe3b$export$9072aa6dd1f93057);
    let { pathname: locationPathname } = $722f2e84ec5fbe3b$export$45d76561a5302f2b();
    let routePathnamesJson = JSON.stringify((0, $77048ffa45c40179$export$a5784978eca585fa)(matches, future.v7_relativeSplatPath));
    let activeRef = $iS7v4.useRef(false);
    $722f2e84ec5fbe3b$var$useIsomorphicLayoutEffect(()=>{
        activeRef.current = true;
    });
    let navigate = $iS7v4.useCallback(function(to, options) {
        if (options === void 0) options = {};
        // Short circuit here since if this happens on first render the navigate
        // is useless because we haven't wired up our history listener yet
        if (!activeRef.current) return;
        if (typeof to === "number") {
            navigator.go(to);
            return;
        }
        let path = (0, $77048ffa45c40179$export$cae722b0cc860f13)(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");
        // If we're operating within a basename, prepend it to the pathname prior
        // to handing off to history (but only if we're not in a data router,
        // otherwise it'll prepend the basename inside of the router).
        // If this is a root navigation, then we navigate to the raw basename
        // which allows the basename to have full control over the presence of a
        // trailing slash on root links
        if (dataRouterContext == null && basename !== "/") path.pathname = path.pathname === "/" ? basename : (0, $77048ffa45c40179$export$86d9a7913e44197e)([
            basename,
            path.pathname
        ]);
        (!!options.replace ? navigator.replace : navigator.push)(path, options.state, options);
    }, [
        basename,
        navigator,
        routePathnamesJson,
        locationPathname,
        dataRouterContext
    ]);
    return navigate;
}
const $722f2e84ec5fbe3b$var$OutletContext = /*#__PURE__*/ $iS7v4.createContext(null);
/**
 * Returns the context (if provided) for the child route at this level of the route
 * hierarchy.
 * @see https://reactrouter.com/hooks/use-outlet-context
 */ function $722f2e84ec5fbe3b$export$4138103a3ae699cc() {
    return $iS7v4.useContext($722f2e84ec5fbe3b$var$OutletContext);
}
/**
 * Returns the element for the child route at this level of the route
 * hierarchy. Used internally by `<Outlet>` to render child routes.
 *
 * @see https://reactrouter.com/hooks/use-outlet
 */ function $722f2e84ec5fbe3b$export$a3be3530d8e40d0b(context) {
    let outlet = $iS7v4.useContext($722f2e84ec5fbe3b$export$9072aa6dd1f93057).outlet;
    if (outlet) return /*#__PURE__*/ $iS7v4.createElement($722f2e84ec5fbe3b$var$OutletContext.Provider, {
        value: context
    }, outlet);
    return outlet;
}
/**
 * Returns an object of key/value pairs of the dynamic params from the current
 * URL that were matched by the route path.
 *
 * @see https://reactrouter.com/hooks/use-params
 */ function $722f2e84ec5fbe3b$export$99eaa27ddbbb95ef() {
    let { matches: matches } = $iS7v4.useContext($722f2e84ec5fbe3b$export$9072aa6dd1f93057);
    let routeMatch = matches[matches.length - 1];
    return routeMatch ? routeMatch.params : {};
}
/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/hooks/use-resolved-path
 */ function $722f2e84ec5fbe3b$export$e75d2a2d1b3c245b(to, _temp2) {
    let { relative: relative } = _temp2 === void 0 ? {} : _temp2;
    let { future: future } = $iS7v4.useContext($722f2e84ec5fbe3b$export$26749e8557646306);
    let { matches: matches } = $iS7v4.useContext($722f2e84ec5fbe3b$export$9072aa6dd1f93057);
    let { pathname: locationPathname } = $722f2e84ec5fbe3b$export$45d76561a5302f2b();
    let routePathnamesJson = JSON.stringify((0, $77048ffa45c40179$export$a5784978eca585fa)(matches, future.v7_relativeSplatPath));
    return $iS7v4.useMemo(()=>(0, $77048ffa45c40179$export$cae722b0cc860f13)(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [
        to,
        routePathnamesJson,
        locationPathname,
        relative
    ]);
}
/**
 * Returns the element of the route that matched the current location, prepared
 * with the correct context to render the remainder of the route tree. Route
 * elements in the tree must render an `<Outlet>` to render their child route's
 * element.
 *
 * @see https://reactrouter.com/hooks/use-routes
 */ function $722f2e84ec5fbe3b$export$5d3fca4a98652595(routes, locationArg) {
    return $722f2e84ec5fbe3b$export$5fcee62552a12fbf(routes, locationArg);
}
// Internal implementation with accept optional param for RouterProvider usage
function $722f2e84ec5fbe3b$export$5fcee62552a12fbf(routes, locationArg, dataRouterState, future) {
    !$722f2e84ec5fbe3b$export$9c954a9d03d32f4a() && (0, $77048ffa45c40179$export$3e9cee6b33872309)(false);
    let { navigator: navigator } = $iS7v4.useContext($722f2e84ec5fbe3b$export$26749e8557646306);
    let { matches: parentMatches } = $iS7v4.useContext($722f2e84ec5fbe3b$export$9072aa6dd1f93057);
    let routeMatch = parentMatches[parentMatches.length - 1];
    let parentParams = routeMatch ? routeMatch.params : {};
    let parentPathname = routeMatch ? routeMatch.pathname : "/";
    let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
    let parentRoute = routeMatch && routeMatch.route;
    let locationFromContext = $722f2e84ec5fbe3b$export$45d76561a5302f2b();
    let location;
    if (locationArg) {
        var _parsedLocationArg$pa;
        let parsedLocationArg = typeof locationArg === "string" ? (0, $77048ffa45c40179$export$8ccf933b0513f8d0)(locationArg) : locationArg;
        !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) && (0, $77048ffa45c40179$export$3e9cee6b33872309)(false);
        location = parsedLocationArg;
    } else location = locationFromContext;
    let pathname = location.pathname || "/";
    let remainingPathname = pathname;
    if (parentPathnameBase !== "/") {
        // Determine the remaining pathname by removing the # of URL segments the
        // parentPathnameBase has, instead of removing based on character count.
        // This is because we can't guarantee that incoming/outgoing encodings/
        // decodings will match exactly.
        // We decode paths before matching on a per-segment basis with
        // decodeURIComponent(), but we re-encode pathnames via `new URL()` so they
        // match what `window.location.pathname` would reflect.  Those don't 100%
        // align when it comes to encoded URI characters such as % and &.
        //
        // So we may end up with:
        //   pathname:           "/descendant/a%25b/match"
        //   parentPathnameBase: "/descendant/a%b"
        //
        // And the direct substring removal approach won't work :/
        let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
        let segments = pathname.replace(/^\//, "").split("/");
        remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
    }
    let matches = (0, $77048ffa45c40179$export$2708184779ceb39d)(routes, {
        pathname: remainingPathname
    });
    let renderedMatches = $722f2e84ec5fbe3b$var$_renderMatches(matches && matches.map((match)=>Object.assign({}, match, {
            params: Object.assign({}, parentParams, match.params),
            pathname: (0, $77048ffa45c40179$export$86d9a7913e44197e)([
                parentPathnameBase,
                // Re-encode pathnames that were decoded inside matchRoutes
                navigator.encodeLocation ? navigator.encodeLocation(match.pathname).pathname : match.pathname
            ]),
            pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : (0, $77048ffa45c40179$export$86d9a7913e44197e)([
                parentPathnameBase,
                // Re-encode pathnames that were decoded inside matchRoutes
                navigator.encodeLocation ? navigator.encodeLocation(match.pathnameBase).pathname : match.pathnameBase
            ])
        })), parentMatches, dataRouterState, future);
    // When a user passes in a `locationArg`, the associated routes need to
    // be wrapped in a new `LocationContext.Provider` in order for `useLocation`
    // to use the scoped location instead of the global location.
    if (locationArg && renderedMatches) return /*#__PURE__*/ $iS7v4.createElement($722f2e84ec5fbe3b$export$c7914228fb69b0f5.Provider, {
        value: {
            location: $722f2e84ec5fbe3b$var$_extends({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, location),
            navigationType: (0, $77048ffa45c40179$export$e19cd5f9376f8cee).Pop
        }
    }, renderedMatches);
    return renderedMatches;
}
function $722f2e84ec5fbe3b$var$DefaultErrorComponent() {
    let error = $722f2e84ec5fbe3b$export$ed527bf60f6e05f2();
    let message = (0, $77048ffa45c40179$export$972111febbeef05b)(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
    let stack = error instanceof Error ? error.stack : null;
    let lightgrey = "rgba(200,200,200, 0.5)";
    let preStyles = {
        padding: "0.5rem",
        backgroundColor: lightgrey
    };
    let codeStyles = {
        padding: "2px 4px",
        backgroundColor: lightgrey
    };
    let devInfo = null;
    return /*#__PURE__*/ $iS7v4.createElement($iS7v4.Fragment, null, /*#__PURE__*/ $iS7v4.createElement("h2", null, "Unexpected Application Error!"), /*#__PURE__*/ $iS7v4.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, message), stack ? /*#__PURE__*/ $iS7v4.createElement("pre", {
        style: preStyles
    }, stack) : null, devInfo);
}
const $722f2e84ec5fbe3b$var$defaultErrorElement = /*#__PURE__*/ $iS7v4.createElement($722f2e84ec5fbe3b$var$DefaultErrorComponent, null);
class $722f2e84ec5fbe3b$var$RenderErrorBoundary extends $iS7v4.Component {
    constructor(props){
        super(props);
        this.state = {
            location: props.location,
            revalidation: props.revalidation,
            error: props.error
        };
    }
    static getDerivedStateFromError(error) {
        return {
            error: error
        };
    }
    static getDerivedStateFromProps(props, state) {
        // When we get into an error state, the user will likely click "back" to the
        // previous page that didn't have an error. Because this wraps the entire
        // application, that will have no effect--the error page continues to display.
        // This gives us a mechanism to recover from the error when the location changes.
        //
        // Whether we're in an error state or not, we update the location in state
        // so that when we are in an error state, it gets reset when a new location
        // comes in and the user recovers from the error.
        if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") return {
            error: props.error,
            location: props.location,
            revalidation: props.revalidation
        };
        // If we're not changing locations, preserve the location but still surface
        // any new errors that may come through. We retain the existing error, we do
        // this because the error provided from the app state may be cleared without
        // the location changing.
        return {
            error: props.error !== undefined ? props.error : state.error,
            location: state.location,
            revalidation: props.revalidation || state.revalidation
        };
    }
    componentDidCatch(error, errorInfo) {
        console.error("React Router caught the following error during render", error, errorInfo);
    }
    render() {
        return this.state.error !== undefined ? /*#__PURE__*/ $iS7v4.createElement($722f2e84ec5fbe3b$export$9072aa6dd1f93057.Provider, {
            value: this.props.routeContext
        }, /*#__PURE__*/ $iS7v4.createElement($722f2e84ec5fbe3b$var$RouteErrorContext.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children;
    }
}
function $722f2e84ec5fbe3b$var$RenderedRoute(_ref) {
    let { routeContext: routeContext, match: match, children: children } = _ref;
    let dataRouterContext = $iS7v4.useContext($722f2e84ec5fbe3b$export$3add0d5dce533e2e);
    // Track how deep we got in our render pass to emulate SSR componentDidCatch
    // in a DataStaticRouter
    if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
    return /*#__PURE__*/ $iS7v4.createElement($722f2e84ec5fbe3b$export$9072aa6dd1f93057.Provider, {
        value: routeContext
    }, children);
}
function $722f2e84ec5fbe3b$var$_renderMatches(matches, parentMatches, dataRouterState, future) {
    var _dataRouterState2;
    if (parentMatches === void 0) parentMatches = [];
    if (dataRouterState === void 0) dataRouterState = null;
    if (future === void 0) future = null;
    if (matches == null) {
        var _dataRouterState;
        if ((_dataRouterState = dataRouterState) != null && _dataRouterState.errors) // Don't bail if we have data router errors so we can render them in the
        // boundary.  Use the pre-matched (or shimmed) matches
        matches = dataRouterState.matches;
        else return null;
    }
    let renderedMatches = matches;
    // If we have data errors, trim matches to the highest error boundary
    let errors = (_dataRouterState2 = dataRouterState) == null ? void 0 : _dataRouterState2.errors;
    if (errors != null) {
        let errorIndex = renderedMatches.findIndex((m)=>m.route.id && (errors == null ? void 0 : errors[m.route.id]) !== undefined);
        !(errorIndex >= 0) && (0, $77048ffa45c40179$export$3e9cee6b33872309)(false);
        renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
    }
    // If we're in a partial hydration mode, detect if we need to render down to
    // a given HydrateFallback while we load the rest of the hydration data
    let renderFallback = false;
    let fallbackIndex = -1;
    if (dataRouterState && future && future.v7_partialHydration) for(let i = 0; i < renderedMatches.length; i++){
        let match = renderedMatches[i];
        // Track the deepest fallback up until the first route without data
        if (match.route.HydrateFallback || match.route.hydrateFallbackElement) fallbackIndex = i;
        if (match.route.id) {
            let { loaderData: loaderData, errors: errors } = dataRouterState;
            let needsToRunLoader = match.route.loader && loaderData[match.route.id] === undefined && (!errors || errors[match.route.id] === undefined);
            if (match.route.lazy || needsToRunLoader) {
                // We found the first route that's not ready to render (waiting on
                // lazy, or has a loader that hasn't run yet).  Flag that we need to
                // render a fallback and render up until the appropriate fallback
                renderFallback = true;
                if (fallbackIndex >= 0) renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
                else renderedMatches = [
                    renderedMatches[0]
                ];
                break;
            }
        }
    }
    return renderedMatches.reduceRight((outlet, match, index)=>{
        // Only data routers handle errors/fallbacks
        let error;
        let shouldRenderHydrateFallback = false;
        let errorElement = null;
        let hydrateFallbackElement = null;
        if (dataRouterState) {
            error = errors && match.route.id ? errors[match.route.id] : undefined;
            errorElement = match.route.errorElement || $722f2e84ec5fbe3b$var$defaultErrorElement;
            if (renderFallback) {
                if (fallbackIndex < 0 && index === 0) {
                    $722f2e84ec5fbe3b$var$warningOnce("route-fallback", false, "No `HydrateFallback` element provided to render during initial hydration");
                    shouldRenderHydrateFallback = true;
                    hydrateFallbackElement = null;
                } else if (fallbackIndex === index) {
                    shouldRenderHydrateFallback = true;
                    hydrateFallbackElement = match.route.hydrateFallbackElement || null;
                }
            }
        }
        let matches = parentMatches.concat(renderedMatches.slice(0, index + 1));
        let getChildren = ()=>{
            let children;
            if (error) children = errorElement;
            else if (shouldRenderHydrateFallback) children = hydrateFallbackElement;
            else if (match.route.Component) // Note: This is a de-optimized path since React won't re-use the
            // ReactElement since it's identity changes with each new
            // React.createElement call.  We keep this so folks can use
            // `<Route Component={...}>` in `<Routes>` but generally `Component`
            // usage is only advised in `RouterProvider` when we can convert it to
            // `element` ahead of time.
            children = /*#__PURE__*/ $iS7v4.createElement(match.route.Component, null);
            else if (match.route.element) children = match.route.element;
            else children = outlet;
            return /*#__PURE__*/ $iS7v4.createElement($722f2e84ec5fbe3b$var$RenderedRoute, {
                match: match,
                routeContext: {
                    outlet: outlet,
                    matches: matches,
                    isDataRoute: dataRouterState != null
                },
                children: children
            });
        };
        // Only wrap in an error boundary within data router usages when we have an
        // ErrorBoundary/errorElement on this route.  Otherwise let it bubble up to
        // an ancestor ErrorBoundary/errorElement
        return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /*#__PURE__*/ $iS7v4.createElement($722f2e84ec5fbe3b$var$RenderErrorBoundary, {
            location: dataRouterState.location,
            revalidation: dataRouterState.revalidation,
            component: errorElement,
            error: error,
            children: getChildren(),
            routeContext: {
                outlet: null,
                matches: matches,
                isDataRoute: true
            }
        }) : getChildren();
    }, null);
}
var $722f2e84ec5fbe3b$var$DataRouterHook = /*#__PURE__*/ function(DataRouterHook) {
    DataRouterHook["UseBlocker"] = "useBlocker";
    DataRouterHook["UseRevalidator"] = "useRevalidator";
    DataRouterHook["UseNavigateStable"] = "useNavigate";
    return DataRouterHook;
}($722f2e84ec5fbe3b$var$DataRouterHook || {});
var $722f2e84ec5fbe3b$var$DataRouterStateHook = /*#__PURE__*/ function(DataRouterStateHook) {
    DataRouterStateHook["UseBlocker"] = "useBlocker";
    DataRouterStateHook["UseLoaderData"] = "useLoaderData";
    DataRouterStateHook["UseActionData"] = "useActionData";
    DataRouterStateHook["UseRouteError"] = "useRouteError";
    DataRouterStateHook["UseNavigation"] = "useNavigation";
    DataRouterStateHook["UseRouteLoaderData"] = "useRouteLoaderData";
    DataRouterStateHook["UseMatches"] = "useMatches";
    DataRouterStateHook["UseRevalidator"] = "useRevalidator";
    DataRouterStateHook["UseNavigateStable"] = "useNavigate";
    DataRouterStateHook["UseRouteId"] = "useRouteId";
    return DataRouterStateHook;
}($722f2e84ec5fbe3b$var$DataRouterStateHook || {});
function $722f2e84ec5fbe3b$var$getDataRouterConsoleError(hookName) {
    return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function $722f2e84ec5fbe3b$var$useDataRouterContext(hookName) {
    let ctx = $iS7v4.useContext($722f2e84ec5fbe3b$export$3add0d5dce533e2e);
    !ctx && (0, $77048ffa45c40179$export$3e9cee6b33872309)(false);
    return ctx;
}
function $722f2e84ec5fbe3b$var$useDataRouterState(hookName) {
    let state = $iS7v4.useContext($722f2e84ec5fbe3b$export$145dfa71566a64dc);
    !state && (0, $77048ffa45c40179$export$3e9cee6b33872309)(false);
    return state;
}
function $722f2e84ec5fbe3b$var$useRouteContext(hookName) {
    let route = $iS7v4.useContext($722f2e84ec5fbe3b$export$9072aa6dd1f93057);
    !route && (0, $77048ffa45c40179$export$3e9cee6b33872309)(false);
    return route;
}
// Internal version with hookName-aware debugging
function $722f2e84ec5fbe3b$var$useCurrentRouteId(hookName) {
    let route = $722f2e84ec5fbe3b$var$useRouteContext(hookName);
    let thisRoute = route.matches[route.matches.length - 1];
    !thisRoute.route.id && (0, $77048ffa45c40179$export$3e9cee6b33872309)(false);
    return thisRoute.route.id;
}
/**
 * Returns the ID for the nearest contextual route
 */ function $722f2e84ec5fbe3b$export$5fc8298006ad9e58() {
    return $722f2e84ec5fbe3b$var$useCurrentRouteId($722f2e84ec5fbe3b$var$DataRouterStateHook.UseRouteId);
}
/**
 * Returns the current navigation, defaulting to an "idle" navigation when
 * no navigation is in progress
 */ function $722f2e84ec5fbe3b$export$d0fd4b7106de2769() {
    let state = $722f2e84ec5fbe3b$var$useDataRouterState($722f2e84ec5fbe3b$var$DataRouterStateHook.UseNavigation);
    return state.navigation;
}
/**
 * Returns a revalidate function for manually triggering revalidation, as well
 * as the current state of any manual revalidations
 */ function $722f2e84ec5fbe3b$export$600dc272ed516c15() {
    let dataRouterContext = $722f2e84ec5fbe3b$var$useDataRouterContext($722f2e84ec5fbe3b$var$DataRouterHook.UseRevalidator);
    let state = $722f2e84ec5fbe3b$var$useDataRouterState($722f2e84ec5fbe3b$var$DataRouterStateHook.UseRevalidator);
    return $iS7v4.useMemo(()=>({
            revalidate: dataRouterContext.router.revalidate,
            state: state.revalidation
        }), [
        dataRouterContext.router.revalidate,
        state.revalidation
    ]);
}
/**
 * Returns the active route matches, useful for accessing loaderData for
 * parent/child routes or the route "handle" property
 */ function $722f2e84ec5fbe3b$export$2378eb7f5ff86053() {
    let { matches: matches, loaderData: loaderData } = $722f2e84ec5fbe3b$var$useDataRouterState($722f2e84ec5fbe3b$var$DataRouterStateHook.UseMatches);
    return $iS7v4.useMemo(()=>matches.map((m)=>(0, $77048ffa45c40179$export$b3fac024fad9e8ff)(m, loaderData)), [
        matches,
        loaderData
    ]);
}
/**
 * Returns the loader data for the nearest ancestor Route loader
 */ function $722f2e84ec5fbe3b$export$1448a5050d252c4d() {
    let state = $722f2e84ec5fbe3b$var$useDataRouterState($722f2e84ec5fbe3b$var$DataRouterStateHook.UseLoaderData);
    let routeId = $722f2e84ec5fbe3b$var$useCurrentRouteId($722f2e84ec5fbe3b$var$DataRouterStateHook.UseLoaderData);
    if (state.errors && state.errors[routeId] != null) {
        console.error("You cannot `useLoaderData` in an errorElement (routeId: " + routeId + ")");
        return undefined;
    }
    return state.loaderData[routeId];
}
/**
 * Returns the loaderData for the given routeId
 */ function $722f2e84ec5fbe3b$export$fd5d37484eab868d(routeId) {
    let state = $722f2e84ec5fbe3b$var$useDataRouterState($722f2e84ec5fbe3b$var$DataRouterStateHook.UseRouteLoaderData);
    return state.loaderData[routeId];
}
/**
 * Returns the action data for the nearest ancestor Route action
 */ function $722f2e84ec5fbe3b$export$fdc00f3f26066d5e() {
    let state = $722f2e84ec5fbe3b$var$useDataRouterState($722f2e84ec5fbe3b$var$DataRouterStateHook.UseActionData);
    let routeId = $722f2e84ec5fbe3b$var$useCurrentRouteId($722f2e84ec5fbe3b$var$DataRouterStateHook.UseLoaderData);
    return state.actionData ? state.actionData[routeId] : undefined;
}
/**
 * Returns the nearest ancestor Route error, which could be a loader/action
 * error or a render error.  This is intended to be called from your
 * ErrorBoundary/errorElement to display a proper error message.
 */ function $722f2e84ec5fbe3b$export$ed527bf60f6e05f2() {
    var _state$errors;
    let error = $iS7v4.useContext($722f2e84ec5fbe3b$var$RouteErrorContext);
    let state = $722f2e84ec5fbe3b$var$useDataRouterState($722f2e84ec5fbe3b$var$DataRouterStateHook.UseRouteError);
    let routeId = $722f2e84ec5fbe3b$var$useCurrentRouteId($722f2e84ec5fbe3b$var$DataRouterStateHook.UseRouteError);
    // If this was a render error, we put it in a RouteError context inside
    // of RenderErrorBoundary
    if (error !== undefined) return error;
    // Otherwise look for errors from our data router state
    return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
}
/**
 * Returns the happy-path data from the nearest ancestor `<Await />` value
 */ function $722f2e84ec5fbe3b$export$78a72ddb39bdd145() {
    let value = $iS7v4.useContext($722f2e84ec5fbe3b$var$AwaitContext);
    return value == null ? void 0 : value._data;
}
/**
 * Returns the error from the nearest ancestor `<Await />` value
 */ function $722f2e84ec5fbe3b$export$17f53340677d5831() {
    let value = $iS7v4.useContext($722f2e84ec5fbe3b$var$AwaitContext);
    return value == null ? void 0 : value._error;
}
let $722f2e84ec5fbe3b$var$blockerId = 0;
/**
 * Allow the application to block navigations within the SPA and present the
 * user a confirmation dialog to confirm the navigation.  Mostly used to avoid
 * using half-filled form data.  This does not handle hard-reloads or
 * cross-origin navigations.
 */ function $722f2e84ec5fbe3b$export$b273b3273281a049(shouldBlock) {
    let { router: router, basename: basename } = $722f2e84ec5fbe3b$var$useDataRouterContext($722f2e84ec5fbe3b$var$DataRouterHook.UseBlocker);
    let state = $722f2e84ec5fbe3b$var$useDataRouterState($722f2e84ec5fbe3b$var$DataRouterStateHook.UseBlocker);
    let [blockerKey, setBlockerKey] = $iS7v4.useState("");
    let blockerFunction = $iS7v4.useCallback((arg)=>{
        if (typeof shouldBlock !== "function") return !!shouldBlock;
        if (basename === "/") return shouldBlock(arg);
        // If they provided us a function and we've got an active basename, strip
        // it from the locations we expose to the user to match the behavior of
        // useLocation
        let { currentLocation: currentLocation, nextLocation: nextLocation, historyAction: historyAction } = arg;
        return shouldBlock({
            currentLocation: $722f2e84ec5fbe3b$var$_extends({}, currentLocation, {
                pathname: (0, $77048ffa45c40179$export$b69e3301ce081aa3)(currentLocation.pathname, basename) || currentLocation.pathname
            }),
            nextLocation: $722f2e84ec5fbe3b$var$_extends({}, nextLocation, {
                pathname: (0, $77048ffa45c40179$export$b69e3301ce081aa3)(nextLocation.pathname, basename) || nextLocation.pathname
            }),
            historyAction: historyAction
        });
    }, [
        basename,
        shouldBlock
    ]);
    // This effect is in charge of blocker key assignment and deletion (which is
    // tightly coupled to the key)
    $iS7v4.useEffect(()=>{
        let key = String(++$722f2e84ec5fbe3b$var$blockerId);
        setBlockerKey(key);
        return ()=>router.deleteBlocker(key);
    }, [
        router
    ]);
    // This effect handles assigning the blockerFunction.  This is to handle
    // unstable blocker function identities, and happens only after the prior
    // effect so we don't get an orphaned blockerFunction in the router with a
    // key of "".  Until then we just have the IDLE_BLOCKER.
    $iS7v4.useEffect(()=>{
        if (blockerKey !== "") router.getBlocker(blockerKey, blockerFunction);
    }, [
        router,
        blockerKey,
        blockerFunction
    ]);
    // Prefer the blocker from `state` not `router.state` since DataRouterContext
    // is memoized so this ensures we update on blocker state updates
    return blockerKey && state.blockers.has(blockerKey) ? state.blockers.get(blockerKey) : (0, $77048ffa45c40179$export$386d57f03f0b2883);
}
/**
 * Stable version of useNavigate that is used when we are in the context of
 * a RouterProvider.
 */ function $722f2e84ec5fbe3b$var$useNavigateStable() {
    let { router: router } = $722f2e84ec5fbe3b$var$useDataRouterContext($722f2e84ec5fbe3b$var$DataRouterHook.UseNavigateStable);
    let id = $722f2e84ec5fbe3b$var$useCurrentRouteId($722f2e84ec5fbe3b$var$DataRouterStateHook.UseNavigateStable);
    let activeRef = $iS7v4.useRef(false);
    $722f2e84ec5fbe3b$var$useIsomorphicLayoutEffect(()=>{
        activeRef.current = true;
    });
    let navigate = $iS7v4.useCallback(function(to, options) {
        if (options === void 0) options = {};
        // Short circuit here since if this happens on first render the navigate
        // is useless because we haven't wired up our router subscriber yet
        if (!activeRef.current) return;
        if (typeof to === "number") router.navigate(to);
        else router.navigate(to, $722f2e84ec5fbe3b$var$_extends({
            fromRouteId: id
        }, options));
    }, [
        router,
        id
    ]);
    return navigate;
}
const $722f2e84ec5fbe3b$var$alreadyWarned = {};
function $722f2e84ec5fbe3b$var$warningOnce(key, cond, message) {
    if (!cond && !$722f2e84ec5fbe3b$var$alreadyWarned[key]) $722f2e84ec5fbe3b$var$alreadyWarned[key] = true;
}
/**
  Webpack + React 17 fails to compile on any of the following because webpack
  complains that `startTransition` doesn't exist in `React`:
  * import { startTransition } from "react"
  * import * as React from from "react";
    "startTransition" in React ? React.startTransition(() => setState()) : setState()
  * import * as React from from "react";
    "startTransition" in React ? React["startTransition"](() => setState()) : setState()

  Moving it to a constant such as the following solves the Webpack/React 17 issue:
  * import * as React from from "react";
    const START_TRANSITION = "startTransition";
    START_TRANSITION in React ? React[START_TRANSITION](() => setState()) : setState()

  However, that introduces webpack/terser minification issues in production builds
  in React 18 where minification/obfuscation ends up removing the call of
  React.startTransition entirely from the first half of the ternary.  Grabbing
  this exported reference once up front resolves that issue.

  See https://github.com/remix-run/react-router/issues/10579
*/ const $722f2e84ec5fbe3b$var$START_TRANSITION = "startTransition";
const $722f2e84ec5fbe3b$var$startTransitionImpl = $iS7v4[$722f2e84ec5fbe3b$var$START_TRANSITION];
/**
 * Given a Remix Router instance, render the appropriate UI
 */ function $722f2e84ec5fbe3b$export$323e4fc2fa4753fb(_ref) {
    let { fallbackElement: fallbackElement, router: router, future: future } = _ref;
    let [state, setStateImpl] = $iS7v4.useState(router.state);
    let { v7_startTransition: v7_startTransition } = future || {};
    let setState = $iS7v4.useCallback((newState)=>{
        if (v7_startTransition && $722f2e84ec5fbe3b$var$startTransitionImpl) $722f2e84ec5fbe3b$var$startTransitionImpl(()=>setStateImpl(newState));
        else setStateImpl(newState);
    }, [
        setStateImpl,
        v7_startTransition
    ]);
    // Need to use a layout effect here so we are subscribed early enough to
    // pick up on any render-driven redirects/navigations (useEffect/<Navigate>)
    $iS7v4.useLayoutEffect(()=>router.subscribe(setState), [
        router,
        setState
    ]);
    $iS7v4.useEffect(()=>{
    // Only log this once on initial mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    let navigator = $iS7v4.useMemo(()=>{
        return {
            createHref: router.createHref,
            encodeLocation: router.encodeLocation,
            go: (n)=>router.navigate(n),
            push: (to, state, opts)=>router.navigate(to, {
                    state: state,
                    preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
                }),
            replace: (to, state, opts)=>router.navigate(to, {
                    replace: true,
                    state: state,
                    preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
                })
        };
    }, [
        router
    ]);
    let basename = router.basename || "/";
    let dataRouterContext = $iS7v4.useMemo(()=>({
            router: router,
            navigator: navigator,
            static: false,
            basename: basename
        }), [
        router,
        navigator,
        basename
    ]);
    // The fragment and {null} here are important!  We need them to keep React 18's
    // useId happy when we are server-rendering since we may have a <script> here
    // containing the hydrated server-side staticContext (from StaticRouterProvider).
    // useId relies on the component tree structure to generate deterministic id's
    // so we need to ensure it remains the same on the client even though
    // we don't need the <script> tag
    return /*#__PURE__*/ $iS7v4.createElement($iS7v4.Fragment, null, /*#__PURE__*/ $iS7v4.createElement($722f2e84ec5fbe3b$export$3add0d5dce533e2e.Provider, {
        value: dataRouterContext
    }, /*#__PURE__*/ $iS7v4.createElement($722f2e84ec5fbe3b$export$145dfa71566a64dc.Provider, {
        value: state
    }, /*#__PURE__*/ $iS7v4.createElement($722f2e84ec5fbe3b$export$55185c17a0fcbe46, {
        basename: basename,
        location: state.location,
        navigationType: state.historyAction,
        navigator: navigator,
        future: {
            v7_relativeSplatPath: router.future.v7_relativeSplatPath
        }
    }, state.initialized || router.future.v7_partialHydration ? /*#__PURE__*/ $iS7v4.createElement($722f2e84ec5fbe3b$var$DataRoutes, {
        routes: router.routes,
        future: router.future,
        state: state
    }) : fallbackElement))), null);
}
function $722f2e84ec5fbe3b$var$DataRoutes(_ref2) {
    let { routes: routes, future: future, state: state } = _ref2;
    return $722f2e84ec5fbe3b$export$5fcee62552a12fbf(routes, undefined, state, future);
}
/**
 * A `<Router>` that stores all entries in memory.
 *
 * @see https://reactrouter.com/router-components/memory-router
 */ function $722f2e84ec5fbe3b$export$ae46f04cfaffe093(_ref3) {
    let { basename: basename, children: children, initialEntries: initialEntries, initialIndex: initialIndex, future: future } = _ref3;
    let historyRef = $iS7v4.useRef();
    if (historyRef.current == null) historyRef.current = (0, $77048ffa45c40179$export$2b76ad033c6e6d08)({
        initialEntries: initialEntries,
        initialIndex: initialIndex,
        v5Compat: true
    });
    let history = historyRef.current;
    let [state, setStateImpl] = $iS7v4.useState({
        action: history.action,
        location: history.location
    });
    let { v7_startTransition: v7_startTransition } = future || {};
    let setState = $iS7v4.useCallback((newState)=>{
        v7_startTransition && $722f2e84ec5fbe3b$var$startTransitionImpl ? $722f2e84ec5fbe3b$var$startTransitionImpl(()=>setStateImpl(newState)) : setStateImpl(newState);
    }, [
        setStateImpl,
        v7_startTransition
    ]);
    $iS7v4.useLayoutEffect(()=>history.listen(setState), [
        history,
        setState
    ]);
    return /*#__PURE__*/ $iS7v4.createElement($722f2e84ec5fbe3b$export$55185c17a0fcbe46, {
        basename: basename,
        children: children,
        location: state.location,
        navigationType: state.action,
        navigator: history,
        future: future
    });
}
/**
 * Changes the current location.
 *
 * Note: This API is mostly useful in React.Component subclasses that are not
 * able to use hooks. In functional components, we recommend you use the
 * `useNavigate` hook instead.
 *
 * @see https://reactrouter.com/components/navigate
 */ function $722f2e84ec5fbe3b$export$444b3ab0cb9aec40(_ref4) {
    let { to: to, replace: replace, state: state, relative: relative } = _ref4;
    !$722f2e84ec5fbe3b$export$9c954a9d03d32f4a() && (0, $77048ffa45c40179$export$3e9cee6b33872309)(false);
    let { future: future, static: isStatic } = $iS7v4.useContext($722f2e84ec5fbe3b$export$26749e8557646306);
    let { matches: matches } = $iS7v4.useContext($722f2e84ec5fbe3b$export$9072aa6dd1f93057);
    let { pathname: locationPathname } = $722f2e84ec5fbe3b$export$45d76561a5302f2b();
    let navigate = $722f2e84ec5fbe3b$export$9770f232ac06a008();
    // Resolve the path outside of the effect so that when effects run twice in
    // StrictMode they navigate to the same place
    let path = (0, $77048ffa45c40179$export$cae722b0cc860f13)(to, (0, $77048ffa45c40179$export$a5784978eca585fa)(matches, future.v7_relativeSplatPath), locationPathname, relative === "path");
    let jsonPath = JSON.stringify(path);
    $iS7v4.useEffect(()=>navigate(JSON.parse(jsonPath), {
            replace: replace,
            state: state,
            relative: relative
        }), [
        navigate,
        jsonPath,
        relative,
        replace,
        state
    ]);
    return null;
}
/**
 * Renders the child route's element, if there is one.
 *
 * @see https://reactrouter.com/components/outlet
 */ function $722f2e84ec5fbe3b$export$910ae8079b2c2852(props) {
    return $722f2e84ec5fbe3b$export$a3be3530d8e40d0b(props.context);
}
/**
 * Declares an element that should be rendered at a certain URL path.
 *
 * @see https://reactrouter.com/components/route
 */ function $722f2e84ec5fbe3b$export$e7b0ac011bb776c6(_props) {
    (0, $77048ffa45c40179$export$3e9cee6b33872309)(false);
}
/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a `<Router>` directly. Instead, you'll render a
 * router that is more specific to your environment such as a `<BrowserRouter>`
 * in web browsers or a `<StaticRouter>` for server rendering.
 *
 * @see https://reactrouter.com/router-components/router
 */ function $722f2e84ec5fbe3b$export$55185c17a0fcbe46(_ref5) {
    let { basename: basenameProp = "/", children: children = null, location: locationProp, navigationType: navigationType = (0, $77048ffa45c40179$export$e19cd5f9376f8cee).Pop, navigator: navigator, static: staticProp = false, future: future } = _ref5;
    !!$722f2e84ec5fbe3b$export$9c954a9d03d32f4a() && (0, $77048ffa45c40179$export$3e9cee6b33872309)(false);
    // Preserve trailing slashes on basename, so we can let the user control
    // the enforcement of trailing slashes throughout the app
    let basename = basenameProp.replace(/^\/*/, "/");
    let navigationContext = $iS7v4.useMemo(()=>({
            basename: basename,
            navigator: navigator,
            static: staticProp,
            future: $722f2e84ec5fbe3b$var$_extends({
                v7_relativeSplatPath: false
            }, future)
        }), [
        basename,
        future,
        navigator,
        staticProp
    ]);
    if (typeof locationProp === "string") locationProp = (0, $77048ffa45c40179$export$8ccf933b0513f8d0)(locationProp);
    let { pathname: pathname = "/", search: search = "", hash: hash = "", state: state = null, key: key = "default" } = locationProp;
    let locationContext = $iS7v4.useMemo(()=>{
        let trailingPathname = (0, $77048ffa45c40179$export$b69e3301ce081aa3)(pathname, basename);
        if (trailingPathname == null) return null;
        return {
            location: {
                pathname: trailingPathname,
                search: search,
                hash: hash,
                state: state,
                key: key
            },
            navigationType: navigationType
        };
    }, [
        basename,
        pathname,
        search,
        hash,
        state,
        key,
        navigationType
    ]);
    if (locationContext == null) return null;
    return /*#__PURE__*/ $iS7v4.createElement($722f2e84ec5fbe3b$export$26749e8557646306.Provider, {
        value: navigationContext
    }, /*#__PURE__*/ $iS7v4.createElement($722f2e84ec5fbe3b$export$c7914228fb69b0f5.Provider, {
        children: children,
        value: locationContext
    }));
}
/**
 * A container for a nested tree of `<Route>` elements that renders the branch
 * that best matches the current location.
 *
 * @see https://reactrouter.com/components/routes
 */ function $722f2e84ec5fbe3b$export$3565eb3d00ca5a74(_ref6) {
    let { children: children, location: location } = _ref6;
    return $722f2e84ec5fbe3b$export$5d3fca4a98652595($722f2e84ec5fbe3b$export$16da398f5434bdec(children), location);
}
/**
 * Component to use for rendering lazily loaded data from returning defer()
 * in a loader function
 */ function $722f2e84ec5fbe3b$export$6ddabde395c8c576(_ref7) {
    let { children: children, errorElement: errorElement, resolve: resolve } = _ref7;
    return /*#__PURE__*/ $iS7v4.createElement($722f2e84ec5fbe3b$var$AwaitErrorBoundary, {
        resolve: resolve,
        errorElement: errorElement
    }, /*#__PURE__*/ $iS7v4.createElement($722f2e84ec5fbe3b$var$ResolveAwait, null, children));
}
var $722f2e84ec5fbe3b$var$AwaitRenderStatus = /*#__PURE__*/ function(AwaitRenderStatus) {
    AwaitRenderStatus[AwaitRenderStatus["pending"] = 0] = "pending";
    AwaitRenderStatus[AwaitRenderStatus["success"] = 1] = "success";
    AwaitRenderStatus[AwaitRenderStatus["error"] = 2] = "error";
    return AwaitRenderStatus;
}($722f2e84ec5fbe3b$var$AwaitRenderStatus || {});
const $722f2e84ec5fbe3b$var$neverSettledPromise = new Promise(()=>{});
class $722f2e84ec5fbe3b$var$AwaitErrorBoundary extends $iS7v4.Component {
    constructor(props){
        super(props);
        this.state = {
            error: null
        };
    }
    static getDerivedStateFromError(error) {
        return {
            error: error
        };
    }
    componentDidCatch(error, errorInfo) {
        console.error("<Await> caught the following error during render", error, errorInfo);
    }
    render() {
        let { children: children, errorElement: errorElement, resolve: resolve } = this.props;
        let promise = null;
        let status = $722f2e84ec5fbe3b$var$AwaitRenderStatus.pending;
        if (!(resolve instanceof Promise)) {
            // Didn't get a promise - provide as a resolved promise
            status = $722f2e84ec5fbe3b$var$AwaitRenderStatus.success;
            promise = Promise.resolve();
            Object.defineProperty(promise, "_tracked", {
                get: ()=>true
            });
            Object.defineProperty(promise, "_data", {
                get: ()=>resolve
            });
        } else if (this.state.error) {
            // Caught a render error, provide it as a rejected promise
            status = $722f2e84ec5fbe3b$var$AwaitRenderStatus.error;
            let renderError = this.state.error;
            promise = Promise.reject().catch(()=>{}); // Avoid unhandled rejection warnings
            Object.defineProperty(promise, "_tracked", {
                get: ()=>true
            });
            Object.defineProperty(promise, "_error", {
                get: ()=>renderError
            });
        } else if (resolve._tracked) {
            // Already tracked promise - check contents
            promise = resolve;
            status = "_error" in promise ? $722f2e84ec5fbe3b$var$AwaitRenderStatus.error : "_data" in promise ? $722f2e84ec5fbe3b$var$AwaitRenderStatus.success : $722f2e84ec5fbe3b$var$AwaitRenderStatus.pending;
        } else {
            // Raw (untracked) promise - track it
            status = $722f2e84ec5fbe3b$var$AwaitRenderStatus.pending;
            Object.defineProperty(resolve, "_tracked", {
                get: ()=>true
            });
            promise = resolve.then((data)=>Object.defineProperty(resolve, "_data", {
                    get: ()=>data
                }), (error)=>Object.defineProperty(resolve, "_error", {
                    get: ()=>error
                }));
        }
        if (status === $722f2e84ec5fbe3b$var$AwaitRenderStatus.error && promise._error instanceof (0, $77048ffa45c40179$export$42a99a7a4bc0e76a)) // Freeze the UI by throwing a never resolved promise
        throw $722f2e84ec5fbe3b$var$neverSettledPromise;
        if (status === $722f2e84ec5fbe3b$var$AwaitRenderStatus.error && !errorElement) // No errorElement, throw to the nearest route-level error boundary
        throw promise._error;
        if (status === $722f2e84ec5fbe3b$var$AwaitRenderStatus.error) // Render via our errorElement
        return /*#__PURE__*/ $iS7v4.createElement($722f2e84ec5fbe3b$var$AwaitContext.Provider, {
            value: promise,
            children: errorElement
        });
        if (status === $722f2e84ec5fbe3b$var$AwaitRenderStatus.success) // Render children with resolved value
        return /*#__PURE__*/ $iS7v4.createElement($722f2e84ec5fbe3b$var$AwaitContext.Provider, {
            value: promise,
            children: children
        });
        // Throw to the suspense boundary
        throw promise;
    }
}
/**
 * @private
 * Indirection to leverage useAsyncValue for a render-prop API on `<Await>`
 */ function $722f2e84ec5fbe3b$var$ResolveAwait(_ref8) {
    let { children: children } = _ref8;
    let data = $722f2e84ec5fbe3b$export$78a72ddb39bdd145();
    let toRender = typeof children === "function" ? children(data) : children;
    return /*#__PURE__*/ $iS7v4.createElement($iS7v4.Fragment, null, toRender);
}
///////////////////////////////////////////////////////////////////////////////
// UTILS
///////////////////////////////////////////////////////////////////////////////
/**
 * Creates a route config from a React "children" object, which is usually
 * either a `<Route>` element or an array of them. Used internally by
 * `<Routes>` to create a route config from its children.
 *
 * @see https://reactrouter.com/utils/create-routes-from-children
 */ function $722f2e84ec5fbe3b$export$16da398f5434bdec(children, parentPath) {
    if (parentPath === void 0) parentPath = [];
    let routes = [];
    $iS7v4.Children.forEach(children, (element, index)=>{
        if (!/*#__PURE__*/ $iS7v4.isValidElement(element)) // Ignore non-elements. This allows people to more easily inline
        // conditionals in their route config.
        return;
        let treePath = [
            ...parentPath,
            index
        ];
        if (element.type === $iS7v4.Fragment) {
            // Transparently support React.Fragment and its children.
            routes.push.apply(routes, $722f2e84ec5fbe3b$export$16da398f5434bdec(element.props.children, treePath));
            return;
        }
        !(element.type === $722f2e84ec5fbe3b$export$e7b0ac011bb776c6) && (0, $77048ffa45c40179$export$3e9cee6b33872309)(false);
        !(!element.props.index || !element.props.children) && (0, $77048ffa45c40179$export$3e9cee6b33872309)(false);
        let route = {
            id: element.props.id || treePath.join("-"),
            caseSensitive: element.props.caseSensitive,
            element: element.props.element,
            Component: element.props.Component,
            index: element.props.index,
            path: element.props.path,
            loader: element.props.loader,
            action: element.props.action,
            errorElement: element.props.errorElement,
            ErrorBoundary: element.props.ErrorBoundary,
            hasErrorBoundary: element.props.ErrorBoundary != null || element.props.errorElement != null,
            shouldRevalidate: element.props.shouldRevalidate,
            handle: element.props.handle,
            lazy: element.props.lazy
        };
        if (element.props.children) route.children = $722f2e84ec5fbe3b$export$16da398f5434bdec(element.props.children, treePath);
        routes.push(route);
    });
    return routes;
}
/**
 * Renders the result of `matchRoutes()` into a React element.
 */ function $722f2e84ec5fbe3b$export$daf73786167a7f72(matches) {
    return $722f2e84ec5fbe3b$var$_renderMatches(matches);
}
function $722f2e84ec5fbe3b$export$52b333d321859367(route) {
    let updates = {
        // Note: this check also occurs in createRoutesFromChildren so update
        // there if you change this -- please and thank you!
        hasErrorBoundary: route.ErrorBoundary != null || route.errorElement != null
    };
    if (route.Component) Object.assign(updates, {
        element: /*#__PURE__*/ $iS7v4.createElement(route.Component),
        Component: undefined
    });
    if (route.HydrateFallback) Object.assign(updates, {
        hydrateFallbackElement: /*#__PURE__*/ $iS7v4.createElement(route.HydrateFallback),
        HydrateFallback: undefined
    });
    if (route.ErrorBoundary) Object.assign(updates, {
        errorElement: /*#__PURE__*/ $iS7v4.createElement(route.ErrorBoundary),
        ErrorBoundary: undefined
    });
    return updates;
}
function $722f2e84ec5fbe3b$export$f30f7e456d254e83(routes, opts) {
    return (0, $77048ffa45c40179$export$baddd0131ee8c05b)({
        basename: opts == null ? void 0 : opts.basename,
        future: $722f2e84ec5fbe3b$var$_extends({}, opts == null ? void 0 : opts.future, {
            v7_prependBasename: true
        }),
        history: (0, $77048ffa45c40179$export$2b76ad033c6e6d08)({
            initialEntries: opts == null ? void 0 : opts.initialEntries,
            initialIndex: opts == null ? void 0 : opts.initialIndex
        }),
        hydrationData: opts == null ? void 0 : opts.hydrationData,
        routes: routes,
        mapRouteProperties: $722f2e84ec5fbe3b$export$52b333d321859367,
        unstable_dataStrategy: opts == null ? void 0 : opts.unstable_dataStrategy
    }).initialize();
}



function $333c1edc626ae798$var$_extends() {
    $333c1edc626ae798$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $333c1edc626ae798$var$_extends.apply(this, arguments);
}
function $333c1edc626ae798$var$_objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
const $333c1edc626ae798$var$defaultMethod = "get";
const $333c1edc626ae798$var$defaultEncType = "application/x-www-form-urlencoded";
function $333c1edc626ae798$var$isHtmlElement(object) {
    return object != null && typeof object.tagName === "string";
}
function $333c1edc626ae798$var$isButtonElement(object) {
    return $333c1edc626ae798$var$isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function $333c1edc626ae798$var$isFormElement(object) {
    return $333c1edc626ae798$var$isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function $333c1edc626ae798$var$isInputElement(object) {
    return $333c1edc626ae798$var$isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}
function $333c1edc626ae798$var$isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function $333c1edc626ae798$var$shouldProcessLinkClick(event, target) {
    return event.button === 0 && // Ignore everything but left clicks
    (!target || target === "_self") && // Let browser handle "target=_blank" etc.
    !$333c1edc626ae798$var$isModifiedEvent(event) // Ignore clicks with modifier keys
    ;
}
/**
 * Creates a URLSearchParams object using the given initializer.
 *
 * This is identical to `new URLSearchParams(init)` except it also
 * supports arrays as values in the object form of the initializer
 * instead of just strings. This is convenient when you need multiple
 * values for a given key, but don't want to use an array initializer.
 *
 * For example, instead of:
 *
 *   let searchParams = new URLSearchParams([
 *     ['sort', 'name'],
 *     ['sort', 'price']
 *   ]);
 *
 * you can do:
 *
 *   let searchParams = createSearchParams({
 *     sort: ['name', 'price']
 *   });
 */ function $333c1edc626ae798$export$a2e4e2dcc7b1f22f(init) {
    if (init === void 0) init = "";
    return new URLSearchParams(typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo, key)=>{
        let value = init[key];
        return memo.concat(Array.isArray(value) ? value.map((v)=>[
                key,
                v
            ]) : [
            [
                key,
                value
            ]
        ]);
    }, []));
}
function $333c1edc626ae798$var$getSearchParamsForLocation(locationSearch, defaultSearchParams) {
    let searchParams = $333c1edc626ae798$export$a2e4e2dcc7b1f22f(locationSearch);
    if (defaultSearchParams) // Use `defaultSearchParams.forEach(...)` here instead of iterating of
    // `defaultSearchParams.keys()` to work-around a bug in Firefox related to
    // web extensions. Relevant Bugzilla tickets:
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1414602
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1023984
    defaultSearchParams.forEach((_, key)=>{
        if (!searchParams.has(key)) defaultSearchParams.getAll(key).forEach((value)=>{
            searchParams.append(key, value);
        });
    });
    return searchParams;
}
// One-time check for submitter support
let $333c1edc626ae798$var$_formDataSupportsSubmitter = null;
function $333c1edc626ae798$var$isFormDataSubmitterSupported() {
    if ($333c1edc626ae798$var$_formDataSupportsSubmitter === null) try {
        new FormData(document.createElement("form"), // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0);
        $333c1edc626ae798$var$_formDataSupportsSubmitter = false;
    } catch (e) {
        $333c1edc626ae798$var$_formDataSupportsSubmitter = true;
    }
    return $333c1edc626ae798$var$_formDataSupportsSubmitter;
}
const $333c1edc626ae798$var$supportedFormEncTypes = new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
]);
function $333c1edc626ae798$var$getFormEncType(encType) {
    if (encType != null && !$333c1edc626ae798$var$supportedFormEncTypes.has(encType)) return null;
    return encType;
}
function $333c1edc626ae798$var$getFormSubmissionInfo(target, basename) {
    let method;
    let action;
    let encType;
    let formData;
    let body;
    if ($333c1edc626ae798$var$isFormElement(target)) {
        // When grabbing the action from the element, it will have had the basename
        // prefixed to ensure non-JS scenarios work, so strip it since we'll
        // re-prefix in the router
        let attr = target.getAttribute("action");
        action = attr ? (0, $77048ffa45c40179$export$b69e3301ce081aa3)(attr, basename) : null;
        method = target.getAttribute("method") || $333c1edc626ae798$var$defaultMethod;
        encType = $333c1edc626ae798$var$getFormEncType(target.getAttribute("enctype")) || $333c1edc626ae798$var$defaultEncType;
        formData = new FormData(target);
    } else if ($333c1edc626ae798$var$isButtonElement(target) || $333c1edc626ae798$var$isInputElement(target) && (target.type === "submit" || target.type === "image")) {
        let form = target.form;
        if (form == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        // <button>/<input type="submit"> may override attributes of <form>
        // When grabbing the action from the element, it will have had the basename
        // prefixed to ensure non-JS scenarios work, so strip it since we'll
        // re-prefix in the router
        let attr = target.getAttribute("formaction") || form.getAttribute("action");
        action = attr ? (0, $77048ffa45c40179$export$b69e3301ce081aa3)(attr, basename) : null;
        method = target.getAttribute("formmethod") || form.getAttribute("method") || $333c1edc626ae798$var$defaultMethod;
        encType = $333c1edc626ae798$var$getFormEncType(target.getAttribute("formenctype")) || $333c1edc626ae798$var$getFormEncType(form.getAttribute("enctype")) || $333c1edc626ae798$var$defaultEncType;
        // Build a FormData object populated from a form and submitter
        formData = new FormData(form, target);
        // If this browser doesn't support the `FormData(el, submitter)` format,
        // then tack on the submitter value at the end.  This is a lightweight
        // solution that is not 100% spec compliant.  For complete support in older
        // browsers, consider using the `formdata-submitter-polyfill` package
        if (!$333c1edc626ae798$var$isFormDataSubmitterSupported()) {
            let { name: name, type: type, value: value } = target;
            if (type === "image") {
                let prefix = name ? name + "." : "";
                formData.append(prefix + "x", "0");
                formData.append(prefix + "y", "0");
            } else if (name) formData.append(name, value);
        }
    } else if ($333c1edc626ae798$var$isHtmlElement(target)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    else {
        method = $333c1edc626ae798$var$defaultMethod;
        action = null;
        encType = $333c1edc626ae798$var$defaultEncType;
        body = target;
    }
    // Send body for <Form encType="text/plain" so we encode it into text
    if (formData && encType === "text/plain") {
        body = formData;
        formData = undefined;
    }
    return {
        action: action,
        method: method.toLowerCase(),
        encType: encType,
        formData: formData,
        body: body
    };
}
const $333c1edc626ae798$var$_excluded = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition"
], $333c1edc626ae798$var$_excluded2 = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "unstable_viewTransition",
    "children"
], $333c1edc626ae798$var$_excluded3 = [
    "fetcherKey",
    "navigate",
    "reloadDocument",
    "replace",
    "state",
    "method",
    "action",
    "onSubmit",
    "relative",
    "preventScrollReset",
    "unstable_viewTransition"
];
// HEY YOU! DON'T TOUCH THIS VARIABLE!
//
// It is replaced with the proper version at build time via a babel plugin in
// the rollup config.
//
// Export a global property onto the window for React Router detection by the
// Core Web Vitals Technology Report.  This way they can configure the `wappalyzer`
// to detect and properly classify live websites as being built with React Router:
// https://github.com/HTTPArchive/wappalyzer/blob/main/src/technologies/r.json
const $333c1edc626ae798$var$REACT_ROUTER_VERSION = "6";
try {
    window.__reactRouterVersion = $333c1edc626ae798$var$REACT_ROUTER_VERSION;
} catch (e) {
// no-op
}
function $333c1edc626ae798$export$1f3f55432a00e06d(routes, opts) {
    return (0, $77048ffa45c40179$export$baddd0131ee8c05b)({
        basename: opts == null ? void 0 : opts.basename,
        future: $333c1edc626ae798$var$_extends({}, opts == null ? void 0 : opts.future, {
            v7_prependBasename: true
        }),
        history: (0, $77048ffa45c40179$export$719fc203c4e16dee)({
            window: opts == null ? void 0 : opts.window
        }),
        hydrationData: (opts == null ? void 0 : opts.hydrationData) || $333c1edc626ae798$var$parseHydrationData(),
        routes: routes,
        mapRouteProperties: (0, $722f2e84ec5fbe3b$export$52b333d321859367),
        unstable_dataStrategy: opts == null ? void 0 : opts.unstable_dataStrategy,
        window: opts == null ? void 0 : opts.window
    }).initialize();
}
function $333c1edc626ae798$export$1ba7ed8a3a7b3765(routes, opts) {
    return (0, $77048ffa45c40179$export$baddd0131ee8c05b)({
        basename: opts == null ? void 0 : opts.basename,
        future: $333c1edc626ae798$var$_extends({}, opts == null ? void 0 : opts.future, {
            v7_prependBasename: true
        }),
        history: (0, $77048ffa45c40179$export$b71fdd3798280242)({
            window: opts == null ? void 0 : opts.window
        }),
        hydrationData: (opts == null ? void 0 : opts.hydrationData) || $333c1edc626ae798$var$parseHydrationData(),
        routes: routes,
        mapRouteProperties: (0, $722f2e84ec5fbe3b$export$52b333d321859367),
        unstable_dataStrategy: opts == null ? void 0 : opts.unstable_dataStrategy,
        window: opts == null ? void 0 : opts.window
    }).initialize();
}
function $333c1edc626ae798$var$parseHydrationData() {
    var _window;
    let state = (_window = window) == null ? void 0 : _window.__staticRouterHydrationData;
    if (state && state.errors) state = $333c1edc626ae798$var$_extends({}, state, {
        errors: $333c1edc626ae798$var$deserializeErrors(state.errors)
    });
    return state;
}
function $333c1edc626ae798$var$deserializeErrors(errors) {
    if (!errors) return null;
    let entries = Object.entries(errors);
    let serialized = {};
    for (let [key, val] of entries){
        // Hey you!  If you change this, please change the corresponding logic in
        // serializeErrors in react-router-dom/server.tsx :)
        if (val && val.__type === "RouteErrorResponse") serialized[key] = new (0, $77048ffa45c40179$export$6c6580e81da25755)(val.status, val.statusText, val.data, val.internal === true);
        else if (val && val.__type === "Error") {
            // Attempt to reconstruct the right type of Error (i.e., ReferenceError)
            if (val.__subType) {
                let ErrorConstructor = window[val.__subType];
                if (typeof ErrorConstructor === "function") try {
                    // @ts-expect-error
                    let error = new ErrorConstructor(val.message);
                    // Wipe away the client-side stack trace.  Nothing to fill it in with
                    // because we don't serialize SSR stack traces for security reasons
                    error.stack = "";
                    serialized[key] = error;
                } catch (e) {
                // no-op - fall through and create a normal Error
                }
            }
            if (serialized[key] == null) {
                let error = new Error(val.message);
                // Wipe away the client-side stack trace.  Nothing to fill it in with
                // because we don't serialize SSR stack traces for security reasons
                error.stack = "";
                serialized[key] = error;
            }
        } else serialized[key] = val;
    }
    return serialized;
}
const $333c1edc626ae798$export$7ad602f0e94e62d1 = /*#__PURE__*/ $iS7v4.createContext({
    isTransitioning: false
});
const $333c1edc626ae798$export$148fd98d095596d4 = /*#__PURE__*/ $iS7v4.createContext(new Map());
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Components
////////////////////////////////////////////////////////////////////////////////
/**
  Webpack + React 17 fails to compile on any of the following because webpack
  complains that `startTransition` doesn't exist in `React`:
  * import { startTransition } from "react"
  * import * as React from from "react";
    "startTransition" in React ? React.startTransition(() => setState()) : setState()
  * import * as React from from "react";
    "startTransition" in React ? React["startTransition"](() => setState()) : setState()

  Moving it to a constant such as the following solves the Webpack/React 17 issue:
  * import * as React from from "react";
    const START_TRANSITION = "startTransition";
    START_TRANSITION in React ? React[START_TRANSITION](() => setState()) : setState()

  However, that introduces webpack/terser minification issues in production builds
  in React 18 where minification/obfuscation ends up removing the call of
  React.startTransition entirely from the first half of the ternary.  Grabbing
  this exported reference once up front resolves that issue.

  See https://github.com/remix-run/react-router/issues/10579
*/ const $333c1edc626ae798$var$START_TRANSITION = "startTransition";
const $333c1edc626ae798$var$startTransitionImpl = $iS7v4[$333c1edc626ae798$var$START_TRANSITION];
const $333c1edc626ae798$var$FLUSH_SYNC = "flushSync";
const $333c1edc626ae798$var$flushSyncImpl = $1d90405877b51491$exports[$333c1edc626ae798$var$FLUSH_SYNC];
const $333c1edc626ae798$var$USE_ID = "useId";
const $333c1edc626ae798$var$useIdImpl = $iS7v4[$333c1edc626ae798$var$USE_ID];
function $333c1edc626ae798$var$startTransitionSafe(cb) {
    if ($333c1edc626ae798$var$startTransitionImpl) $333c1edc626ae798$var$startTransitionImpl(cb);
    else cb();
}
function $333c1edc626ae798$var$flushSyncSafe(cb) {
    if ($333c1edc626ae798$var$flushSyncImpl) $333c1edc626ae798$var$flushSyncImpl(cb);
    else cb();
}
class $333c1edc626ae798$var$Deferred {
    constructor(){
        this.status = "pending";
        this.promise = new Promise((resolve, reject)=>{
            this.resolve = (value)=>{
                if (this.status === "pending") {
                    this.status = "resolved";
                    resolve(value);
                }
            };
            this.reject = (reason)=>{
                if (this.status === "pending") {
                    this.status = "rejected";
                    reject(reason);
                }
            };
        });
    }
}
/**
 * Given a Remix Router instance, render the appropriate UI
 */ function $333c1edc626ae798$export$323e4fc2fa4753fb(_ref) {
    let { fallbackElement: fallbackElement, router: router, future: future } = _ref;
    let [state, setStateImpl] = $iS7v4.useState(router.state);
    let [pendingState, setPendingState] = $iS7v4.useState();
    let [vtContext, setVtContext] = $iS7v4.useState({
        isTransitioning: false
    });
    let [renderDfd, setRenderDfd] = $iS7v4.useState();
    let [transition, setTransition] = $iS7v4.useState();
    let [interruption, setInterruption] = $iS7v4.useState();
    let fetcherData = $iS7v4.useRef(new Map());
    let { v7_startTransition: v7_startTransition } = future || {};
    let optInStartTransition = $iS7v4.useCallback((cb)=>{
        if (v7_startTransition) $333c1edc626ae798$var$startTransitionSafe(cb);
        else cb();
    }, [
        v7_startTransition
    ]);
    let setState = $iS7v4.useCallback((newState, _ref2)=>{
        let { deletedFetchers: deletedFetchers, unstable_flushSync: flushSync, unstable_viewTransitionOpts: viewTransitionOpts } = _ref2;
        deletedFetchers.forEach((key)=>fetcherData.current.delete(key));
        newState.fetchers.forEach((fetcher, key)=>{
            if (fetcher.data !== undefined) fetcherData.current.set(key, fetcher.data);
        });
        let isViewTransitionUnavailable = router.window == null || router.window.document == null || typeof router.window.document.startViewTransition !== "function";
        // If this isn't a view transition or it's not available in this browser,
        // just update and be done with it
        if (!viewTransitionOpts || isViewTransitionUnavailable) {
            if (flushSync) $333c1edc626ae798$var$flushSyncSafe(()=>setStateImpl(newState));
            else optInStartTransition(()=>setStateImpl(newState));
            return;
        }
        // flushSync + startViewTransition
        if (flushSync) {
            // Flush through the context to mark DOM elements as transition=ing
            $333c1edc626ae798$var$flushSyncSafe(()=>{
                // Cancel any pending transitions
                if (transition) {
                    renderDfd && renderDfd.resolve();
                    transition.skipTransition();
                }
                setVtContext({
                    isTransitioning: true,
                    flushSync: true,
                    currentLocation: viewTransitionOpts.currentLocation,
                    nextLocation: viewTransitionOpts.nextLocation
                });
            });
            // Update the DOM
            let t = router.window.document.startViewTransition(()=>{
                $333c1edc626ae798$var$flushSyncSafe(()=>setStateImpl(newState));
            });
            // Clean up after the animation completes
            t.finished.finally(()=>{
                $333c1edc626ae798$var$flushSyncSafe(()=>{
                    setRenderDfd(undefined);
                    setTransition(undefined);
                    setPendingState(undefined);
                    setVtContext({
                        isTransitioning: false
                    });
                });
            });
            $333c1edc626ae798$var$flushSyncSafe(()=>setTransition(t));
            return;
        }
        // startTransition + startViewTransition
        if (transition) {
            // Interrupting an in-progress transition, cancel and let everything flush
            // out, and then kick off a new transition from the interruption state
            renderDfd && renderDfd.resolve();
            transition.skipTransition();
            setInterruption({
                state: newState,
                currentLocation: viewTransitionOpts.currentLocation,
                nextLocation: viewTransitionOpts.nextLocation
            });
        } else {
            // Completed navigation update with opted-in view transitions, let 'er rip
            setPendingState(newState);
            setVtContext({
                isTransitioning: true,
                flushSync: false,
                currentLocation: viewTransitionOpts.currentLocation,
                nextLocation: viewTransitionOpts.nextLocation
            });
        }
    }, [
        router.window,
        transition,
        renderDfd,
        fetcherData,
        optInStartTransition
    ]);
    // Need to use a layout effect here so we are subscribed early enough to
    // pick up on any render-driven redirects/navigations (useEffect/<Navigate>)
    $iS7v4.useLayoutEffect(()=>router.subscribe(setState), [
        router,
        setState
    ]);
    // When we start a view transition, create a Deferred we can use for the
    // eventual "completed" render
    $iS7v4.useEffect(()=>{
        if (vtContext.isTransitioning && !vtContext.flushSync) setRenderDfd(new $333c1edc626ae798$var$Deferred());
    }, [
        vtContext
    ]);
    // Once the deferred is created, kick off startViewTransition() to update the
    // DOM and then wait on the Deferred to resolve (indicating the DOM update has
    // happened)
    $iS7v4.useEffect(()=>{
        if (renderDfd && pendingState && router.window) {
            let newState = pendingState;
            let renderPromise = renderDfd.promise;
            let transition = router.window.document.startViewTransition(async ()=>{
                optInStartTransition(()=>setStateImpl(newState));
                await renderPromise;
            });
            transition.finished.finally(()=>{
                setRenderDfd(undefined);
                setTransition(undefined);
                setPendingState(undefined);
                setVtContext({
                    isTransitioning: false
                });
            });
            setTransition(transition);
        }
    }, [
        optInStartTransition,
        pendingState,
        renderDfd,
        router.window
    ]);
    // When the new location finally renders and is committed to the DOM, this
    // effect will run to resolve the transition
    $iS7v4.useEffect(()=>{
        if (renderDfd && pendingState && state.location.key === pendingState.location.key) renderDfd.resolve();
    }, [
        renderDfd,
        transition,
        state.location,
        pendingState
    ]);
    // If we get interrupted with a new navigation during a transition, we skip
    // the active transition, let it cleanup, then kick it off again here
    $iS7v4.useEffect(()=>{
        if (!vtContext.isTransitioning && interruption) {
            setPendingState(interruption.state);
            setVtContext({
                isTransitioning: true,
                flushSync: false,
                currentLocation: interruption.currentLocation,
                nextLocation: interruption.nextLocation
            });
            setInterruption(undefined);
        }
    }, [
        vtContext.isTransitioning,
        interruption
    ]);
    $iS7v4.useEffect(()=>{
    // Only log this once on initial mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    let navigator = $iS7v4.useMemo(()=>{
        return {
            createHref: router.createHref,
            encodeLocation: router.encodeLocation,
            go: (n)=>router.navigate(n),
            push: (to, state, opts)=>router.navigate(to, {
                    state: state,
                    preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
                }),
            replace: (to, state, opts)=>router.navigate(to, {
                    replace: true,
                    state: state,
                    preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
                })
        };
    }, [
        router
    ]);
    let basename = router.basename || "/";
    let dataRouterContext = $iS7v4.useMemo(()=>({
            router: router,
            navigator: navigator,
            static: false,
            basename: basename
        }), [
        router,
        navigator,
        basename
    ]);
    // The fragment and {null} here are important!  We need them to keep React 18's
    // useId happy when we are server-rendering since we may have a <script> here
    // containing the hydrated server-side staticContext (from StaticRouterProvider).
    // useId relies on the component tree structure to generate deterministic id's
    // so we need to ensure it remains the same on the client even though
    // we don't need the <script> tag
    return /*#__PURE__*/ $iS7v4.createElement($iS7v4.Fragment, null, /*#__PURE__*/ $iS7v4.createElement((0, $722f2e84ec5fbe3b$export$3add0d5dce533e2e).Provider, {
        value: dataRouterContext
    }, /*#__PURE__*/ $iS7v4.createElement((0, $722f2e84ec5fbe3b$export$145dfa71566a64dc).Provider, {
        value: state
    }, /*#__PURE__*/ $iS7v4.createElement($333c1edc626ae798$export$148fd98d095596d4.Provider, {
        value: fetcherData.current
    }, /*#__PURE__*/ $iS7v4.createElement($333c1edc626ae798$export$7ad602f0e94e62d1.Provider, {
        value: vtContext
    }, /*#__PURE__*/ $iS7v4.createElement((0, $722f2e84ec5fbe3b$export$55185c17a0fcbe46), {
        basename: basename,
        location: state.location,
        navigationType: state.historyAction,
        navigator: navigator,
        future: {
            v7_relativeSplatPath: router.future.v7_relativeSplatPath
        }
    }, state.initialized || router.future.v7_partialHydration ? /*#__PURE__*/ $iS7v4.createElement($333c1edc626ae798$var$DataRoutes, {
        routes: router.routes,
        future: router.future,
        state: state
    }) : fallbackElement))))), null);
}
function $333c1edc626ae798$var$DataRoutes(_ref3) {
    let { routes: routes, future: future, state: state } = _ref3;
    return (0, $722f2e84ec5fbe3b$export$5fcee62552a12fbf)(routes, undefined, state, future);
}
/**
 * A `<Router>` for use in web browsers. Provides the cleanest URLs.
 */ function $333c1edc626ae798$export$9ba4e89fdfa1fc54(_ref4) {
    let { basename: basename, children: children, future: future, window: window1 } = _ref4;
    let historyRef = $iS7v4.useRef();
    if (historyRef.current == null) historyRef.current = (0, $77048ffa45c40179$export$719fc203c4e16dee)({
        window: window1,
        v5Compat: true
    });
    let history = historyRef.current;
    let [state, setStateImpl] = $iS7v4.useState({
        action: history.action,
        location: history.location
    });
    let { v7_startTransition: v7_startTransition } = future || {};
    let setState = $iS7v4.useCallback((newState)=>{
        v7_startTransition && $333c1edc626ae798$var$startTransitionImpl ? $333c1edc626ae798$var$startTransitionImpl(()=>setStateImpl(newState)) : setStateImpl(newState);
    }, [
        setStateImpl,
        v7_startTransition
    ]);
    $iS7v4.useLayoutEffect(()=>history.listen(setState), [
        history,
        setState
    ]);
    return /*#__PURE__*/ $iS7v4.createElement((0, $722f2e84ec5fbe3b$export$55185c17a0fcbe46), {
        basename: basename,
        children: children,
        location: state.location,
        navigationType: state.action,
        navigator: history,
        future: future
    });
}
/**
 * A `<Router>` for use in web browsers. Stores the location in the hash
 * portion of the URL so it is not sent to the server.
 */ function $333c1edc626ae798$export$7221d69dcfc8e36b(_ref5) {
    let { basename: basename, children: children, future: future, window: window1 } = _ref5;
    let historyRef = $iS7v4.useRef();
    if (historyRef.current == null) historyRef.current = (0, $77048ffa45c40179$export$b71fdd3798280242)({
        window: window1,
        v5Compat: true
    });
    let history = historyRef.current;
    let [state, setStateImpl] = $iS7v4.useState({
        action: history.action,
        location: history.location
    });
    let { v7_startTransition: v7_startTransition } = future || {};
    let setState = $iS7v4.useCallback((newState)=>{
        v7_startTransition && $333c1edc626ae798$var$startTransitionImpl ? $333c1edc626ae798$var$startTransitionImpl(()=>setStateImpl(newState)) : setStateImpl(newState);
    }, [
        setStateImpl,
        v7_startTransition
    ]);
    $iS7v4.useLayoutEffect(()=>history.listen(setState), [
        history,
        setState
    ]);
    return /*#__PURE__*/ $iS7v4.createElement((0, $722f2e84ec5fbe3b$export$55185c17a0fcbe46), {
        basename: basename,
        children: children,
        location: state.location,
        navigationType: state.action,
        navigator: history,
        future: future
    });
}
/**
 * A `<Router>` that accepts a pre-instantiated history object. It's important
 * to note that using your own history object is highly discouraged and may add
 * two versions of the history library to your bundles unless you use the same
 * version of the history library that React Router uses internally.
 */ function $333c1edc626ae798$export$eefb0c834599897e(_ref6) {
    let { basename: basename, children: children, future: future, history: history } = _ref6;
    let [state, setStateImpl] = $iS7v4.useState({
        action: history.action,
        location: history.location
    });
    let { v7_startTransition: v7_startTransition } = future || {};
    let setState = $iS7v4.useCallback((newState)=>{
        v7_startTransition && $333c1edc626ae798$var$startTransitionImpl ? $333c1edc626ae798$var$startTransitionImpl(()=>setStateImpl(newState)) : setStateImpl(newState);
    }, [
        setStateImpl,
        v7_startTransition
    ]);
    $iS7v4.useLayoutEffect(()=>history.listen(setState), [
        history,
        setState
    ]);
    return /*#__PURE__*/ $iS7v4.createElement((0, $722f2e84ec5fbe3b$export$55185c17a0fcbe46), {
        basename: basename,
        children: children,
        location: state.location,
        navigationType: state.action,
        navigator: history,
        future: future
    });
}
const $333c1edc626ae798$var$isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
const $333c1edc626ae798$var$ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
/**
 * The public API for rendering a history-aware `<a>`.
 */ const $333c1edc626ae798$export$a6c7ac8248d6e38a = /*#__PURE__*/ $iS7v4.forwardRef(function LinkWithRef(_ref7, ref) {
    let { onClick: onClick, relative: relative, reloadDocument: reloadDocument, replace: replace, state: state, target: target, to: to, preventScrollReset: preventScrollReset, unstable_viewTransition: unstable_viewTransition } = _ref7, rest = $333c1edc626ae798$var$_objectWithoutPropertiesLoose(_ref7, $333c1edc626ae798$var$_excluded);
    let { basename: basename } = $iS7v4.useContext((0, $722f2e84ec5fbe3b$export$26749e8557646306));
    // Rendered into <a href> for absolute URLs
    let absoluteHref;
    let isExternal = false;
    if (typeof to === "string" && $333c1edc626ae798$var$ABSOLUTE_URL_REGEX.test(to)) {
        // Render the absolute href server- and client-side
        absoluteHref = to;
        // Only check for external origins client-side
        if ($333c1edc626ae798$var$isBrowser) try {
            let currentUrl = new URL(window.location.href);
            let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
            let path = (0, $77048ffa45c40179$export$b69e3301ce081aa3)(targetUrl.pathname, basename);
            if (targetUrl.origin === currentUrl.origin && path != null) // Strip the protocol/origin/basename for same-origin absolute URLs
            to = path + targetUrl.search + targetUrl.hash;
            else isExternal = true;
        } catch (e) {}
    }
    // Rendered into <a href> for relative URLs
    let href = (0, $722f2e84ec5fbe3b$export$b66bb29c5006f12f)(to, {
        relative: relative
    });
    let internalOnClick = $333c1edc626ae798$export$67621102c14d847(to, {
        replace: replace,
        state: state,
        target: target,
        preventScrollReset: preventScrollReset,
        relative: relative,
        unstable_viewTransition: unstable_viewTransition
    });
    function handleClick(event) {
        if (onClick) onClick(event);
        if (!event.defaultPrevented) internalOnClick(event);
    }
    return(/*#__PURE__*/ // eslint-disable-next-line jsx-a11y/anchor-has-content
    $iS7v4.createElement("a", $333c1edc626ae798$var$_extends({}, rest, {
        href: absoluteHref || href,
        onClick: isExternal || reloadDocument ? onClick : handleClick,
        ref: ref,
        target: target
    })));
});
/**
 * A `<Link>` wrapper that knows if it's "active" or not.
 */ const $333c1edc626ae798$export$b0d92dbee9b5b60d = /*#__PURE__*/ $iS7v4.forwardRef(function NavLinkWithRef(_ref8, ref) {
    let { "aria-current": ariaCurrentProp = "page", caseSensitive: caseSensitive = false, className: classNameProp = "", end: end = false, style: styleProp, to: to, unstable_viewTransition: unstable_viewTransition, children: children } = _ref8, rest = $333c1edc626ae798$var$_objectWithoutPropertiesLoose(_ref8, $333c1edc626ae798$var$_excluded2);
    let path = (0, $722f2e84ec5fbe3b$export$e75d2a2d1b3c245b)(to, {
        relative: rest.relative
    });
    let location = (0, $722f2e84ec5fbe3b$export$45d76561a5302f2b)();
    let routerState = $iS7v4.useContext((0, $722f2e84ec5fbe3b$export$145dfa71566a64dc));
    let { navigator: navigator, basename: basename } = $iS7v4.useContext((0, $722f2e84ec5fbe3b$export$26749e8557646306));
    let isTransitioning = routerState != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    $333c1edc626ae798$export$328fe15191788e7f(path) && unstable_viewTransition === true;
    let toPathname = navigator.encodeLocation ? navigator.encodeLocation(path).pathname : path.pathname;
    let locationPathname = location.pathname;
    let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
    if (!caseSensitive) {
        locationPathname = locationPathname.toLowerCase();
        nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
        toPathname = toPathname.toLowerCase();
    }
    if (nextLocationPathname && basename) nextLocationPathname = (0, $77048ffa45c40179$export$b69e3301ce081aa3)(nextLocationPathname, basename) || nextLocationPathname;
    // If the `to` has a trailing slash, look at that exact spot.  Otherwise,
    // we're looking for a slash _after_ what's in `to`.  For example:
    //
    // <NavLink to="/users"> and <NavLink to="/users/">
    // both want to look for a / at index 6 to match URL `/users/matt`
    const endSlashPosition = toPathname !== "/" && toPathname.endsWith("/") ? toPathname.length - 1 : toPathname.length;
    let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(endSlashPosition) === "/";
    let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
    let renderProps = {
        isActive: isActive,
        isPending: isPending,
        isTransitioning: isTransitioning
    };
    let ariaCurrent = isActive ? ariaCurrentProp : undefined;
    let className;
    if (typeof classNameProp === "function") className = classNameProp(renderProps);
    else // If the className prop is not a function, we use a default `active`
    // class for <NavLink />s that are active. In v5 `active` was the default
    // value for `activeClassName`, but we are removing that API and can still
    // use the old default behavior for a cleaner upgrade path and keep the
    // simple styling rules working as they currently do.
    className = [
        classNameProp,
        isActive ? "active" : null,
        isPending ? "pending" : null,
        isTransitioning ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let style = typeof styleProp === "function" ? styleProp(renderProps) : styleProp;
    return /*#__PURE__*/ $iS7v4.createElement($333c1edc626ae798$export$a6c7ac8248d6e38a, $333c1edc626ae798$var$_extends({}, rest, {
        "aria-current": ariaCurrent,
        className: className,
        ref: ref,
        style: style,
        to: to,
        unstable_viewTransition: unstable_viewTransition
    }), typeof children === "function" ? children(renderProps) : children);
});
/**
 * A `@remix-run/router`-aware `<form>`. It behaves like a normal form except
 * that the interaction with the server is with `fetch` instead of new document
 * requests, allowing components to add nicer UX to the page as the form is
 * submitted and returns with data.
 */ const $333c1edc626ae798$export$a7fed597f4b8afd8 = /*#__PURE__*/ $iS7v4.forwardRef((_ref9, forwardedRef)=>{
    let { fetcherKey: fetcherKey, navigate: navigate, reloadDocument: reloadDocument, replace: replace, state: state, method: method = $333c1edc626ae798$var$defaultMethod, action: action, onSubmit: onSubmit, relative: relative, preventScrollReset: preventScrollReset, unstable_viewTransition: unstable_viewTransition } = _ref9, props = $333c1edc626ae798$var$_objectWithoutPropertiesLoose(_ref9, $333c1edc626ae798$var$_excluded3);
    let submit = $333c1edc626ae798$export$47c85c6e3a081d3();
    let formAction = $333c1edc626ae798$export$89a6bd6db0d97c56(action, {
        relative: relative
    });
    let formMethod = method.toLowerCase() === "get" ? "get" : "post";
    let submitHandler = (event)=>{
        onSubmit && onSubmit(event);
        if (event.defaultPrevented) return;
        event.preventDefault();
        let submitter = event.nativeEvent.submitter;
        let submitMethod = (submitter == null ? void 0 : submitter.getAttribute("formmethod")) || method;
        submit(submitter || event.currentTarget, {
            fetcherKey: fetcherKey,
            method: submitMethod,
            navigate: navigate,
            replace: replace,
            state: state,
            relative: relative,
            preventScrollReset: preventScrollReset,
            unstable_viewTransition: unstable_viewTransition
        });
    };
    return /*#__PURE__*/ $iS7v4.createElement("form", $333c1edc626ae798$var$_extends({
        ref: forwardedRef,
        method: formMethod,
        action: formAction,
        onSubmit: reloadDocument ? onSubmit : submitHandler
    }, props));
});
/**
 * This component will emulate the browser's scroll restoration on location
 * changes.
 */ function $333c1edc626ae798$export$11aac1aab828f1fa(_ref10) {
    let { getKey: getKey, storageKey: storageKey } = _ref10;
    $333c1edc626ae798$export$25057cfe5591e3e9({
        getKey: getKey,
        storageKey: storageKey
    });
    return null;
}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Hooks
////////////////////////////////////////////////////////////////////////////////
var $333c1edc626ae798$var$DataRouterHook;
(function(DataRouterHook) {
    DataRouterHook["UseScrollRestoration"] = "useScrollRestoration";
    DataRouterHook["UseSubmit"] = "useSubmit";
    DataRouterHook["UseSubmitFetcher"] = "useSubmitFetcher";
    DataRouterHook["UseFetcher"] = "useFetcher";
    DataRouterHook["useViewTransitionState"] = "useViewTransitionState";
})($333c1edc626ae798$var$DataRouterHook || ($333c1edc626ae798$var$DataRouterHook = {}));
var $333c1edc626ae798$var$DataRouterStateHook;
(function(DataRouterStateHook) {
    DataRouterStateHook["UseFetcher"] = "useFetcher";
    DataRouterStateHook["UseFetchers"] = "useFetchers";
    DataRouterStateHook["UseScrollRestoration"] = "useScrollRestoration";
})($333c1edc626ae798$var$DataRouterStateHook || ($333c1edc626ae798$var$DataRouterStateHook = {}));
// Internal hooks
function $333c1edc626ae798$var$getDataRouterConsoleError(hookName) {
    return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function $333c1edc626ae798$var$useDataRouterContext(hookName) {
    let ctx = $iS7v4.useContext((0, $722f2e84ec5fbe3b$export$3add0d5dce533e2e));
    !ctx && (0, $77048ffa45c40179$export$3e9cee6b33872309)(false);
    return ctx;
}
function $333c1edc626ae798$var$useDataRouterState(hookName) {
    let state = $iS7v4.useContext((0, $722f2e84ec5fbe3b$export$145dfa71566a64dc));
    !state && (0, $77048ffa45c40179$export$3e9cee6b33872309)(false);
    return state;
}
// External hooks
/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` components with the same click behavior we
 * use in our exported `<Link>`.
 */ function $333c1edc626ae798$export$67621102c14d847(to, _temp) {
    let { target: target, replace: replaceProp, state: state, preventScrollReset: preventScrollReset, relative: relative, unstable_viewTransition: unstable_viewTransition } = _temp === void 0 ? {} : _temp;
    let navigate = (0, $722f2e84ec5fbe3b$export$9770f232ac06a008)();
    let location = (0, $722f2e84ec5fbe3b$export$45d76561a5302f2b)();
    let path = (0, $722f2e84ec5fbe3b$export$e75d2a2d1b3c245b)(to, {
        relative: relative
    });
    return $iS7v4.useCallback((event)=>{
        if ($333c1edc626ae798$var$shouldProcessLinkClick(event, target)) {
            event.preventDefault();
            // If the URL hasn't changed, a regular <a> will do a replace instead of
            // a push, so do the same here unless the replace prop is explicitly set
            let replace = replaceProp !== undefined ? replaceProp : (0, $77048ffa45c40179$export$fe53371bee54353d)(location) === (0, $77048ffa45c40179$export$fe53371bee54353d)(path);
            navigate(to, {
                replace: replace,
                state: state,
                preventScrollReset: preventScrollReset,
                relative: relative,
                unstable_viewTransition: unstable_viewTransition
            });
        }
    }, [
        location,
        navigate,
        path,
        replaceProp,
        state,
        target,
        to,
        preventScrollReset,
        relative,
        unstable_viewTransition
    ]);
}
/**
 * A convenient wrapper for reading and writing search parameters via the
 * URLSearchParams interface.
 */ function $333c1edc626ae798$export$f1a78c17382fe22a(defaultInit) {
    let defaultSearchParamsRef = $iS7v4.useRef($333c1edc626ae798$export$a2e4e2dcc7b1f22f(defaultInit));
    let hasSetSearchParamsRef = $iS7v4.useRef(false);
    let location = (0, $722f2e84ec5fbe3b$export$45d76561a5302f2b)();
    let searchParams = $iS7v4.useMemo(()=>// Only merge in the defaults if we haven't yet called setSearchParams.
        // Once we call that we want those to take precedence, otherwise you can't
        // remove a param with setSearchParams({}) if it has an initial value
        $333c1edc626ae798$var$getSearchParamsForLocation(location.search, hasSetSearchParamsRef.current ? null : defaultSearchParamsRef.current), [
        location.search
    ]);
    let navigate = (0, $722f2e84ec5fbe3b$export$9770f232ac06a008)();
    let setSearchParams = $iS7v4.useCallback((nextInit, navigateOptions)=>{
        const newSearchParams = $333c1edc626ae798$export$a2e4e2dcc7b1f22f(typeof nextInit === "function" ? nextInit(searchParams) : nextInit);
        hasSetSearchParamsRef.current = true;
        navigate("?" + newSearchParams, navigateOptions);
    }, [
        navigate,
        searchParams
    ]);
    return [
        searchParams,
        setSearchParams
    ];
}
function $333c1edc626ae798$var$validateClientSideSubmission() {
    if (typeof document === "undefined") throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
let $333c1edc626ae798$var$fetcherId = 0;
let $333c1edc626ae798$var$getUniqueFetcherId = ()=>"__" + String(++$333c1edc626ae798$var$fetcherId) + "__";
/**
 * Returns a function that may be used to programmatically submit a form (or
 * some arbitrary data) to the server.
 */ function $333c1edc626ae798$export$47c85c6e3a081d3() {
    let { router: router } = $333c1edc626ae798$var$useDataRouterContext($333c1edc626ae798$var$DataRouterHook.UseSubmit);
    let { basename: basename } = $iS7v4.useContext((0, $722f2e84ec5fbe3b$export$26749e8557646306));
    let currentRouteId = (0, $722f2e84ec5fbe3b$export$5fc8298006ad9e58)();
    return $iS7v4.useCallback(function(target, options) {
        if (options === void 0) options = {};
        $333c1edc626ae798$var$validateClientSideSubmission();
        let { action: action, method: method, encType: encType, formData: formData, body: body } = $333c1edc626ae798$var$getFormSubmissionInfo(target, basename);
        if (options.navigate === false) {
            let key = options.fetcherKey || $333c1edc626ae798$var$getUniqueFetcherId();
            router.fetch(key, currentRouteId, options.action || action, {
                preventScrollReset: options.preventScrollReset,
                formData: formData,
                body: body,
                formMethod: options.method || method,
                formEncType: options.encType || encType,
                unstable_flushSync: options.unstable_flushSync
            });
        } else router.navigate(options.action || action, {
            preventScrollReset: options.preventScrollReset,
            formData: formData,
            body: body,
            formMethod: options.method || method,
            formEncType: options.encType || encType,
            replace: options.replace,
            state: options.state,
            fromRouteId: currentRouteId,
            unstable_flushSync: options.unstable_flushSync,
            unstable_viewTransition: options.unstable_viewTransition
        });
    }, [
        router,
        basename,
        currentRouteId
    ]);
}
// v7: Eventually we should deprecate this entirely in favor of using the
// router method directly?
function $333c1edc626ae798$export$89a6bd6db0d97c56(action, _temp2) {
    let { relative: relative } = _temp2 === void 0 ? {} : _temp2;
    let { basename: basename } = $iS7v4.useContext((0, $722f2e84ec5fbe3b$export$26749e8557646306));
    let routeContext = $iS7v4.useContext((0, $722f2e84ec5fbe3b$export$9072aa6dd1f93057));
    !routeContext && (0, $77048ffa45c40179$export$3e9cee6b33872309)(false);
    let [match] = routeContext.matches.slice(-1);
    // Shallow clone path so we can modify it below, otherwise we modify the
    // object referenced by useMemo inside useResolvedPath
    let path = $333c1edc626ae798$var$_extends({}, (0, $722f2e84ec5fbe3b$export$e75d2a2d1b3c245b)(action ? action : ".", {
        relative: relative
    }));
    // If no action was specified, browsers will persist current search params
    // when determining the path, so match that behavior
    // https://github.com/remix-run/remix/issues/927
    let location = (0, $722f2e84ec5fbe3b$export$45d76561a5302f2b)();
    if (action == null) {
        // Safe to write to this directly here since if action was undefined, we
        // would have called useResolvedPath(".") which will never include a search
        path.search = location.search;
        // When grabbing search params from the URL, remove any included ?index param
        // since it might not apply to our contextual route.  We add it back based
        // on match.route.index below
        let params = new URLSearchParams(path.search);
        if (params.has("index") && params.get("index") === "") {
            params.delete("index");
            path.search = params.toString() ? "?" + params.toString() : "";
        }
    }
    if ((!action || action === ".") && match.route.index) path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
    // If we're operating within a basename, prepend it to the pathname prior
    // to creating the form action.  If this is a root navigation, then just use
    // the raw basename which allows the basename to have full control over the
    // presence of a trailing slash on root actions
    if (basename !== "/") path.pathname = path.pathname === "/" ? basename : (0, $77048ffa45c40179$export$86d9a7913e44197e)([
        basename,
        path.pathname
    ]);
    return (0, $77048ffa45c40179$export$fe53371bee54353d)(path);
}
// TODO: (v7) Change the useFetcher generic default from `any` to `unknown`
/**
 * Interacts with route loaders and actions without causing a navigation. Great
 * for any interaction that stays on the same page.
 */ function $333c1edc626ae798$export$5b0d2d9a9921565a(_temp3) {
    var _route$matches;
    let { key: key } = _temp3 === void 0 ? {} : _temp3;
    let { router: router } = $333c1edc626ae798$var$useDataRouterContext($333c1edc626ae798$var$DataRouterHook.UseFetcher);
    let state = $333c1edc626ae798$var$useDataRouterState($333c1edc626ae798$var$DataRouterStateHook.UseFetcher);
    let fetcherData = $iS7v4.useContext($333c1edc626ae798$export$148fd98d095596d4);
    let route = $iS7v4.useContext((0, $722f2e84ec5fbe3b$export$9072aa6dd1f93057));
    let routeId = (_route$matches = route.matches[route.matches.length - 1]) == null ? void 0 : _route$matches.route.id;
    !fetcherData && (0, $77048ffa45c40179$export$3e9cee6b33872309)(false);
    !route && (0, $77048ffa45c40179$export$3e9cee6b33872309)(false);
    !(routeId != null) && (0, $77048ffa45c40179$export$3e9cee6b33872309)(false);
    // Fetcher key handling
    // OK to call conditionally to feature detect `useId`
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let defaultKey = $333c1edc626ae798$var$useIdImpl ? $333c1edc626ae798$var$useIdImpl() : "";
    let [fetcherKey, setFetcherKey] = $iS7v4.useState(key || defaultKey);
    if (key && key !== fetcherKey) setFetcherKey(key);
    else if (!fetcherKey) // We will only fall through here when `useId` is not available
    setFetcherKey($333c1edc626ae798$var$getUniqueFetcherId());
    // Registration/cleanup
    $iS7v4.useEffect(()=>{
        router.getFetcher(fetcherKey);
        return ()=>{
            // Tell the router we've unmounted - if v7_fetcherPersist is enabled this
            // will not delete immediately but instead queue up a delete after the
            // fetcher returns to an `idle` state
            router.deleteFetcher(fetcherKey);
        };
    }, [
        router,
        fetcherKey
    ]);
    // Fetcher additions
    let load = $iS7v4.useCallback((href, opts)=>{
        !routeId && (0, $77048ffa45c40179$export$3e9cee6b33872309)(false);
        router.fetch(fetcherKey, routeId, href, opts);
    }, [
        fetcherKey,
        routeId,
        router
    ]);
    let submitImpl = $333c1edc626ae798$export$47c85c6e3a081d3();
    let submit = $iS7v4.useCallback((target, opts)=>{
        submitImpl(target, $333c1edc626ae798$var$_extends({}, opts, {
            navigate: false,
            fetcherKey: fetcherKey
        }));
    }, [
        fetcherKey,
        submitImpl
    ]);
    let FetcherForm = $iS7v4.useMemo(()=>{
        let FetcherForm = /*#__PURE__*/ $iS7v4.forwardRef((props, ref)=>{
            return /*#__PURE__*/ $iS7v4.createElement($333c1edc626ae798$export$a7fed597f4b8afd8, $333c1edc626ae798$var$_extends({}, props, {
                navigate: false,
                fetcherKey: fetcherKey,
                ref: ref
            }));
        });
        return FetcherForm;
    }, [
        fetcherKey
    ]);
    // Exposed FetcherWithComponents
    let fetcher = state.fetchers.get(fetcherKey) || (0, $77048ffa45c40179$export$52eace9c284d3585);
    let data = fetcherData.get(fetcherKey);
    let fetcherWithComponents = $iS7v4.useMemo(()=>$333c1edc626ae798$var$_extends({
            Form: FetcherForm,
            submit: submit,
            load: load
        }, fetcher, {
            data: data
        }), [
        FetcherForm,
        submit,
        load,
        fetcher,
        data
    ]);
    return fetcherWithComponents;
}
/**
 * Provides all fetchers currently on the page. Useful for layouts and parent
 * routes that need to provide pending/optimistic UI regarding the fetch.
 */ function $333c1edc626ae798$export$fa996778a3a31087() {
    let state = $333c1edc626ae798$var$useDataRouterState($333c1edc626ae798$var$DataRouterStateHook.UseFetchers);
    return Array.from(state.fetchers.entries()).map((_ref11)=>{
        let [key, fetcher] = _ref11;
        return $333c1edc626ae798$var$_extends({}, fetcher, {
            key: key
        });
    });
}
const $333c1edc626ae798$var$SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
let $333c1edc626ae798$var$savedScrollPositions = {};
/**
 * When rendered inside a RouterProvider, will restore scroll positions on navigations
 */ function $333c1edc626ae798$export$25057cfe5591e3e9(_temp4) {
    let { getKey: getKey, storageKey: storageKey } = _temp4 === void 0 ? {} : _temp4;
    let { router: router } = $333c1edc626ae798$var$useDataRouterContext($333c1edc626ae798$var$DataRouterHook.UseScrollRestoration);
    let { restoreScrollPosition: restoreScrollPosition, preventScrollReset: preventScrollReset } = $333c1edc626ae798$var$useDataRouterState($333c1edc626ae798$var$DataRouterStateHook.UseScrollRestoration);
    let { basename: basename } = $iS7v4.useContext((0, $722f2e84ec5fbe3b$export$26749e8557646306));
    let location = (0, $722f2e84ec5fbe3b$export$45d76561a5302f2b)();
    let matches = (0, $722f2e84ec5fbe3b$export$2378eb7f5ff86053)();
    let navigation = (0, $722f2e84ec5fbe3b$export$d0fd4b7106de2769)();
    // Trigger manual scroll restoration while we're active
    $iS7v4.useEffect(()=>{
        window.history.scrollRestoration = "manual";
        return ()=>{
            window.history.scrollRestoration = "auto";
        };
    }, []);
    // Save positions on pagehide
    $333c1edc626ae798$var$usePageHide($iS7v4.useCallback(()=>{
        if (navigation.state === "idle") {
            let key = (getKey ? getKey(location, matches) : null) || location.key;
            $333c1edc626ae798$var$savedScrollPositions[key] = window.scrollY;
        }
        try {
            sessionStorage.setItem(storageKey || $333c1edc626ae798$var$SCROLL_RESTORATION_STORAGE_KEY, JSON.stringify($333c1edc626ae798$var$savedScrollPositions));
        } catch (error) {}
        window.history.scrollRestoration = "auto";
    }, [
        storageKey,
        getKey,
        navigation.state,
        location,
        matches
    ]));
    // Read in any saved scroll locations
    if (typeof document !== "undefined") {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        $iS7v4.useLayoutEffect(()=>{
            try {
                let sessionPositions = sessionStorage.getItem(storageKey || $333c1edc626ae798$var$SCROLL_RESTORATION_STORAGE_KEY);
                if (sessionPositions) $333c1edc626ae798$var$savedScrollPositions = JSON.parse(sessionPositions);
            } catch (e) {
            // no-op, use default empty object
            }
        }, [
            storageKey
        ]);
        // Enable scroll restoration in the router
        // eslint-disable-next-line react-hooks/rules-of-hooks
        $iS7v4.useLayoutEffect(()=>{
            let getKeyWithoutBasename = getKey && basename !== "/" ? (location, matches)=>getKey($333c1edc626ae798$var$_extends({}, location, {
                    pathname: (0, $77048ffa45c40179$export$b69e3301ce081aa3)(location.pathname, basename) || location.pathname
                }), matches) : getKey;
            let disableScrollRestoration = router == null ? void 0 : router.enableScrollRestoration($333c1edc626ae798$var$savedScrollPositions, ()=>window.scrollY, getKeyWithoutBasename);
            return ()=>disableScrollRestoration && disableScrollRestoration();
        }, [
            router,
            basename,
            getKey
        ]);
        // Restore scrolling when state.restoreScrollPosition changes
        // eslint-disable-next-line react-hooks/rules-of-hooks
        $iS7v4.useLayoutEffect(()=>{
            // Explicit false means don't do anything (used for submissions)
            if (restoreScrollPosition === false) return;
            // been here before, scroll to it
            if (typeof restoreScrollPosition === "number") {
                window.scrollTo(0, restoreScrollPosition);
                return;
            }
            // try to scroll to the hash
            if (location.hash) {
                let el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
                if (el) {
                    el.scrollIntoView();
                    return;
                }
            }
            // Don't reset if this navigation opted out
            if (preventScrollReset === true) return;
            // otherwise go to the top on new locations
            window.scrollTo(0, 0);
        }, [
            location,
            restoreScrollPosition,
            preventScrollReset
        ]);
    }
}
/**
 * Setup a callback to be fired on the window's `beforeunload` event. This is
 * useful for saving some data to `window.localStorage` just before the page
 * refreshes.
 *
 * Note: The `callback` argument should be a function created with
 * `React.useCallback()`.
 */ function $333c1edc626ae798$export$c0a586b329cae57d(callback, options) {
    let { capture: capture } = options || {};
    $iS7v4.useEffect(()=>{
        let opts = capture != null ? {
            capture: capture
        } : undefined;
        window.addEventListener("beforeunload", callback, opts);
        return ()=>{
            window.removeEventListener("beforeunload", callback, opts);
        };
    }, [
        callback,
        capture
    ]);
}
/**
 * Setup a callback to be fired on the window's `pagehide` event. This is
 * useful for saving some data to `window.localStorage` just before the page
 * refreshes.  This event is better supported than beforeunload across browsers.
 *
 * Note: The `callback` argument should be a function created with
 * `React.useCallback()`.
 */ function $333c1edc626ae798$var$usePageHide(callback, options) {
    let { capture: capture } = options || {};
    $iS7v4.useEffect(()=>{
        let opts = capture != null ? {
            capture: capture
        } : undefined;
        window.addEventListener("pagehide", callback, opts);
        return ()=>{
            window.removeEventListener("pagehide", callback, opts);
        };
    }, [
        callback,
        capture
    ]);
}
/**
 * Wrapper around useBlocker to show a window.confirm prompt to users instead
 * of building a custom UI with useBlocker.
 *
 * Warning: This has *a lot of rough edges* and behaves very differently (and
 * very incorrectly in some cases) across browsers if user click addition
 * back/forward navigations while the confirm is open.  Use at your own risk.
 */ function $333c1edc626ae798$export$39f4eb3dbd812741(_ref12) {
    let { when: when, message: message } = _ref12;
    let blocker = (0, $722f2e84ec5fbe3b$export$b273b3273281a049)(when);
    $iS7v4.useEffect(()=>{
        if (blocker.state === "blocked") {
            let proceed = window.confirm(message);
            if (proceed) // This timeout is needed to avoid a weird "race" on POP navigations
            // between the `window.history` revert navigation and the result of
            // `window.confirm`
            setTimeout(blocker.proceed, 0);
            else blocker.reset();
        }
    }, [
        blocker,
        message
    ]);
    $iS7v4.useEffect(()=>{
        if (blocker.state === "blocked" && !when) blocker.reset();
    }, [
        blocker,
        when
    ]);
}
/**
 * Return a boolean indicating if there is an active view transition to the
 * given href.  You can use this value to render CSS classes or viewTransitionName
 * styles onto your elements
 *
 * @param href The destination href
 * @param [opts.relative] Relative routing type ("route" | "path")
 */ function $333c1edc626ae798$export$328fe15191788e7f(to, opts) {
    if (opts === void 0) opts = {};
    let vtContext = $iS7v4.useContext($333c1edc626ae798$export$7ad602f0e94e62d1);
    !(vtContext != null) && (0, $77048ffa45c40179$export$3e9cee6b33872309)(false);
    let { basename: basename } = $333c1edc626ae798$var$useDataRouterContext($333c1edc626ae798$var$DataRouterHook.useViewTransitionState);
    let path = (0, $722f2e84ec5fbe3b$export$e75d2a2d1b3c245b)(to, {
        relative: opts.relative
    });
    if (!vtContext.isTransitioning) return false;
    let currentPath = (0, $77048ffa45c40179$export$b69e3301ce081aa3)(vtContext.currentLocation.pathname, basename) || vtContext.currentLocation.pathname;
    let nextPath = (0, $77048ffa45c40179$export$b69e3301ce081aa3)(vtContext.nextLocation.pathname, basename) || vtContext.nextLocation.pathname;
    // Transition is active if we're going to or coming from the indicated
    // destination.  This ensures that other PUSH navigations that reverse
    // an indicated transition apply.  I.e., on the list view you have:
    //
    //   <NavLink to="/details/1" unstable_viewTransition>
    //
    // If you click the breadcrumb back to the list view:
    //
    //   <NavLink to="/list" unstable_viewTransition>
    //
    // We should apply the transition because it's indicated as active going
    // from /list -> /details/1 and therefore should be active on the reverse
    // (even though this isn't strictly a POP reverse)
    return (0, $77048ffa45c40179$export$81336c211d5ff295)(path.pathname, nextPath) != null || (0, $77048ffa45c40179$export$81336c211d5ff295)(path.pathname, currentPath) != null;
}


const $bdd79993dac560a3$export$9bd698419030e459 = ({ movie: movie, isFavorite: isFavorite })=>{
    const storedToken = localStorage.getItem("token");
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const [user, setUser] = (0, $iS7v4.useState)(storedUser ? storedUser : null);
    const [token, setToken] = (0, $iS7v4.useState)(storedToken ? storedToken : null);
    const [addTitle, setAddTitle] = (0, $iS7v4.useState)("");
    const [delTitle, setDelTitle] = (0, $iS7v4.useState)("");
    (0, $iS7v4.useEffect)(()=>{
        const addToFavorites = ()=>{
            fetch(`https://my-flix-db-975de3fb6719.herokuapp.com/users/${user.username}/movies/${encodeURIComponent(movie.title)}`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            }).then((response)=>{
                if (!response.ok) throw new Error("Failed to add movie to favorites.");
                alert("Movie added to favorite!");
                window.location.reload();
                return response.json();
            }).then((user)=>{
                if (user) {
                    localStorage.setItem("user", JSON.stringify(user));
                    setUser(user);
                }
            }).catch((error)=>{
                console.error(error);
            });
        };
        const removeFromFavorites = ()=>{
            fetch(`https://my-flix-db-975de3fb6719.herokuapp.com/users/${user.username}/movies/${encodeURIComponent(movie.title)}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            }).then((response)=>{
                if (!response.ok) throw new Error("Failed to remove movie from favorites.");
                alert("Movie removed from favorites!");
                window.location.reload();
                return response.json();
            }).then((user)=>{
                if (user) {
                    localStorage.setItem("user", JSON.stringify(user));
                    setUser(user);
                }
            }).catch((error)=>{
                console.error(error);
            });
        };
        if (addTitle) addToFavorites();
        if (delTitle) removeFromFavorites();
    }, [
        addTitle,
        delTitle,
        token
    ]);
    const handleAddToFavorites = ()=>{
        setAddTitle(movie.title);
    };
    const handleRemoveFromFavorites = ()=>{
        setDelTitle(movie.title);
    };
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsxs)((0, $a9d3d534d399c2da$exports.Fragment), {
        children: [
            /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $333c1edc626ae798$export$a6c7ac8248d6e38a), {
                to: `/movies/${encodeURIComponent(movie.id)}`,
                className: "movie-view",
                children: /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsxs)((0, $36e6d82e657fd4dc$export$2e2bcd8739ae039), {
                    className: "h-100",
                    children: [
                        /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $36e6d82e657fd4dc$export$2e2bcd8739ae039).Img, {
                            variant: "top",
                            src: movie.image,
                            className: "object-fit-cover"
                        }),
                        /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsxs)((0, $36e6d82e657fd4dc$export$2e2bcd8739ae039).Body, {
                            children: [
                                /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $36e6d82e657fd4dc$export$2e2bcd8739ae039).Title, {
                                    children: movie.title
                                }),
                                /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $36e6d82e657fd4dc$export$2e2bcd8739ae039).Text, {
                                    children: movie.genre
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $36e6d82e657fd4dc$export$2e2bcd8739ae039), {
                children: isFavorite ? /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $f0f17203e1780c9d$export$2e2bcd8739ae039), {
                    variant: "primary",
                    onClick: handleRemoveFromFavorites,
                    children: "Remove"
                }) : /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $f0f17203e1780c9d$export$2e2bcd8739ae039), {
                    variant: "primary",
                    onClick: handleAddToFavorites,
                    children: "Add"
                })
            })
        ]
    });
};
$bdd79993dac560a3$export$9bd698419030e459.propTypes = {
    isFavorite: (0, (/*@__PURE__*/$parcel$interopDefault($804fb6f4b112ddab$exports))).bool.isRequired,
    movie: (0, (/*@__PURE__*/$parcel$interopDefault($804fb6f4b112ddab$exports))).shape({
        id: (0, (/*@__PURE__*/$parcel$interopDefault($804fb6f4b112ddab$exports))).string.isRequired,
        title: (0, (/*@__PURE__*/$parcel$interopDefault($804fb6f4b112ddab$exports))).string.isRequired,
        image: (0, (/*@__PURE__*/$parcel$interopDefault($804fb6f4b112ddab$exports))).string.isRequired,
        description: (0, (/*@__PURE__*/$parcel$interopDefault($804fb6f4b112ddab$exports))).string,
        genre: (0, (/*@__PURE__*/$parcel$interopDefault($804fb6f4b112ddab$exports))).string,
        director: (0, (/*@__PURE__*/$parcel$interopDefault($804fb6f4b112ddab$exports))).string,
        featured: (0, (/*@__PURE__*/$parcel$interopDefault($804fb6f4b112ddab$exports))).bool
    }).isRequired
};






const $e7276d4979e0f0a3$export$78d497080ea8f89a = ({ movies: movies })=>{
    const { movieId: movieId } = (0, $722f2e84ec5fbe3b$export$99eaa27ddbbb95ef)();
    const movie = movies.find((m)=>m.id === movieId);
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)("div", {
                children: /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)("img", {
                    src: movie.image,
                    className: "img-fluid  justify-content-md-center",
                    alt: "Movie Poster"
                })
            }),
            /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)("span", {
                        style: {
                            fontWeight: "bold"
                        },
                        children: "Title: "
                    }),
                    /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)("span", {
                        style: {
                            fontWeight: "bold"
                        },
                        children: movie.title
                    })
                ]
            }),
            /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)("span", {
                        children: "Description: "
                    }),
                    /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)("span", {
                        children: movie.description
                    })
                ]
            }),
            /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)("span", {
                        children: "Genre: "
                    }),
                    /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)("span", {
                        children: movie.genre
                    })
                ]
            }),
            /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)("span", {
                        children: "Director: "
                    }),
                    /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)("span", {
                        children: movie.director
                    })
                ]
            }),
            /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)("span", {
                        children: "Featured: "
                    }),
                    /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)("span", {
                        children: movie.featured ? "True" : "False"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $333c1edc626ae798$export$a6c7ac8248d6e38a), {
                to: `/`,
                children: /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)("button", {
                    className: "back-button",
                    children: "Back"
                })
            })
        ]
    });
};
$e7276d4979e0f0a3$export$78d497080ea8f89a.propTypes = {
    movies: (0, (/*@__PURE__*/$parcel$interopDefault($804fb6f4b112ddab$exports))).shape({
        title: (0, (/*@__PURE__*/$parcel$interopDefault($804fb6f4b112ddab$exports))).string,
        description: (0, (/*@__PURE__*/$parcel$interopDefault($804fb6f4b112ddab$exports))).string,
        genre: (0, (/*@__PURE__*/$parcel$interopDefault($804fb6f4b112ddab$exports))).string,
        director: (0, (/*@__PURE__*/$parcel$interopDefault($804fb6f4b112ddab$exports))).string
    }).isRequired
};




var $iS7v4 = parcelRequire("iS7v4");



var $iS7v4 = parcelRequire("iS7v4");


var $iS7v4 = parcelRequire("iS7v4");


var $iS7v4 = parcelRequire("iS7v4");


const $4563c61e47dd2d6e$var$propTypes = {
    /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */ type: (0, (/*@__PURE__*/$parcel$interopDefault($804fb6f4b112ddab$exports))).string,
    /** Display feedback as a tooltip. */ tooltip: (0, (/*@__PURE__*/$parcel$interopDefault($804fb6f4b112ddab$exports))).bool,
    as: (0, (/*@__PURE__*/$parcel$interopDefault($804fb6f4b112ddab$exports))).elementType
};
const $4563c61e47dd2d6e$var$Feedback = /*#__PURE__*/ $iS7v4.forwardRef(// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({ as: Component = "div", className: className, type: type = "valid", tooltip: tooltip = false, ...props }, ref)=>/*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)(Component, {
        ...props,
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($b64d07ce5c97f908$exports)))(className, `${type}-${tooltip ? "tooltip" : "feedback"}`)
    }));
$4563c61e47dd2d6e$var$Feedback.displayName = "Feedback";
$4563c61e47dd2d6e$var$Feedback.propTypes = $4563c61e47dd2d6e$var$propTypes;
var $4563c61e47dd2d6e$export$2e2bcd8739ae039 = $4563c61e47dd2d6e$var$Feedback;




var $iS7v4 = parcelRequire("iS7v4");

var $iS7v4 = parcelRequire("iS7v4");
"use client";
// TODO
const $5b2279b11f8a69b3$var$FormContext = /*#__PURE__*/ $iS7v4.createContext({});
var $5b2279b11f8a69b3$export$2e2bcd8739ae039 = $5b2279b11f8a69b3$var$FormContext;




"use client";
const $330794ff03a6a37c$var$FormCheckInput = /*#__PURE__*/ $iS7v4.forwardRef(({ id: id, bsPrefix: bsPrefix, className: className, type: type = "checkbox", isValid: isValid = false, isInvalid: isInvalid = false, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "input", ...props }, ref)=>{
    const { controlId: controlId } = (0, $iS7v4.useContext)((0, $5b2279b11f8a69b3$export$2e2bcd8739ae039));
    bsPrefix = (0, $24d14d90d6b73476$export$7f387860ebffb32c)(bsPrefix, "form-check-input");
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)(Component, {
        ...props,
        ref: ref,
        type: type,
        id: id || controlId,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($b64d07ce5c97f908$exports)))(className, bsPrefix, isValid && "is-valid", isInvalid && "is-invalid")
    });
});
$330794ff03a6a37c$var$FormCheckInput.displayName = "FormCheckInput";
var $330794ff03a6a37c$export$2e2bcd8739ae039 = $330794ff03a6a37c$var$FormCheckInput;




var $iS7v4 = parcelRequire("iS7v4");



"use client";
const $192dd631eb894bed$var$FormCheckLabel = /*#__PURE__*/ $iS7v4.forwardRef(({ bsPrefix: bsPrefix, className: className, htmlFor: htmlFor, ...props }, ref)=>{
    const { controlId: controlId } = (0, $iS7v4.useContext)((0, $5b2279b11f8a69b3$export$2e2bcd8739ae039));
    bsPrefix = (0, $24d14d90d6b73476$export$7f387860ebffb32c)(bsPrefix, "form-check-label");
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)("label", {
        ...props,
        ref: ref,
        htmlFor: htmlFor || controlId,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($b64d07ce5c97f908$exports)))(className, bsPrefix)
    });
});
$192dd631eb894bed$var$FormCheckLabel.displayName = "FormCheckLabel";
var $192dd631eb894bed$export$2e2bcd8739ae039 = $192dd631eb894bed$var$FormCheckLabel;





var $iS7v4 = parcelRequire("iS7v4");
/**
 * Iterates through children that are typically specified as `props.children`,
 * but only maps over children that are "valid elements".
 *
 * The mapFunction provided index will be normalised to the components mapped,
 * so an invalid component would not increase the index.
 *
 */ function $030cf91103bd7b82$export$871de8747c9eaa88(children, func) {
    let index = 0;
    return $iS7v4.Children.map(children, (child)=>/*#__PURE__*/ $iS7v4.isValidElement(child) ? func(child, index++) : child);
}
/**
 * Iterates through children that are "valid elements".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 */ function $030cf91103bd7b82$export$4b80e395e36b5a56(children, func) {
    let index = 0;
    $iS7v4.Children.forEach(children, (child)=>{
        if (/*#__PURE__*/ $iS7v4.isValidElement(child)) func(child, index++);
    });
}
/**
 * Finds whether a component's `children` prop includes a React element of the
 * specified type.
 */ function $030cf91103bd7b82$export$500fd6099226ffae(children, type) {
    return $iS7v4.Children.toArray(children).some((child)=>/*#__PURE__*/ $iS7v4.isValidElement(child) && child.type === type);
}



"use client";
const $87af36d386e5ad35$var$FormCheck = /*#__PURE__*/ $iS7v4.forwardRef(({ id: id, bsPrefix: bsPrefix, bsSwitchPrefix: bsSwitchPrefix, inline: inline = false, reverse: reverse = false, disabled: disabled = false, isValid: isValid = false, isInvalid: isInvalid = false, feedbackTooltip: feedbackTooltip = false, feedback: feedback, feedbackType: feedbackType, className: className, style: style, title: title = "", type: type = "checkbox", label: label, children: children, as: // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as = "input", ...props }, ref)=>{
    bsPrefix = (0, $24d14d90d6b73476$export$7f387860ebffb32c)(bsPrefix, "form-check");
    bsSwitchPrefix = (0, $24d14d90d6b73476$export$7f387860ebffb32c)(bsSwitchPrefix, "form-switch");
    const { controlId: controlId } = (0, $iS7v4.useContext)((0, $5b2279b11f8a69b3$export$2e2bcd8739ae039));
    const innerFormContext = (0, $iS7v4.useMemo)(()=>({
            controlId: id || controlId
        }), [
        controlId,
        id
    ]);
    const hasLabel = !children && label != null && label !== false || (0, $030cf91103bd7b82$export$500fd6099226ffae)(children, (0, $192dd631eb894bed$export$2e2bcd8739ae039));
    const input = /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $330794ff03a6a37c$export$2e2bcd8739ae039), {
        ...props,
        type: type === "switch" ? "checkbox" : type,
        ref: ref,
        isValid: isValid,
        isInvalid: isInvalid,
        disabled: disabled,
        as: as
    });
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $5b2279b11f8a69b3$export$2e2bcd8739ae039).Provider, {
        value: innerFormContext,
        children: /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)("div", {
            style: style,
            className: (0, (/*@__PURE__*/$parcel$interopDefault($b64d07ce5c97f908$exports)))(className, hasLabel && bsPrefix, inline && `${bsPrefix}-inline`, reverse && `${bsPrefix}-reverse`, type === "switch" && bsSwitchPrefix),
            children: children || /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsxs)((0, $a9d3d534d399c2da$exports.Fragment), {
                children: [
                    input,
                    hasLabel && /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $192dd631eb894bed$export$2e2bcd8739ae039), {
                        title: title,
                        children: label
                    }),
                    feedback && /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $4563c61e47dd2d6e$export$2e2bcd8739ae039), {
                        type: feedbackType,
                        tooltip: feedbackTooltip,
                        children: feedback
                    })
                ]
            })
        })
    });
});
$87af36d386e5ad35$var$FormCheck.displayName = "FormCheck";
var $87af36d386e5ad35$export$2e2bcd8739ae039 = Object.assign($87af36d386e5ad35$var$FormCheck, {
    Input: (0, $330794ff03a6a37c$export$2e2bcd8739ae039),
    Label: (0, $192dd631eb894bed$export$2e2bcd8739ae039)
});




var $iS7v4 = parcelRequire("iS7v4");
var $46ae7c582ae412d1$exports = {};
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */ var $46ae7c582ae412d1$var$__DEV__ = false;
var $46ae7c582ae412d1$var$warning = function() {};
if ($46ae7c582ae412d1$var$__DEV__) {
    var $46ae7c582ae412d1$var$printWarning = function printWarning(format, args) {
        var len = arguments.length;
        args = new Array(len > 1 ? len - 1 : 0);
        for(var key = 1; key < len; key++)args[key - 1] = arguments[key];
        var argIndex = 0;
        var message = "Warning: " + format.replace(/%s/g, function() {
            return args[argIndex++];
        });
        if (typeof console !== "undefined") console.error(message);
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
    $46ae7c582ae412d1$var$warning = function(condition, format, args) {
        var len = arguments.length;
        args = new Array(len > 2 ? len - 2 : 0);
        for(var key = 2; key < len; key++)args[key - 2] = arguments[key];
        if (format === undefined) throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
        if (!condition) $46ae7c582ae412d1$var$printWarning.apply(null, [
            format
        ].concat(args));
    };
}
$46ae7c582ae412d1$exports = $46ae7c582ae412d1$var$warning;






"use client";
const $320dd6fcd1628d51$var$FormControl = /*#__PURE__*/ $iS7v4.forwardRef(({ bsPrefix: bsPrefix, type: type, size: size, htmlSize: htmlSize, id: id, className: className, isValid: isValid = false, isInvalid: isInvalid = false, plaintext: plaintext, readOnly: readOnly, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "input", ...props }, ref)=>{
    const { controlId: controlId } = (0, $iS7v4.useContext)((0, $5b2279b11f8a69b3$export$2e2bcd8739ae039));
    bsPrefix = (0, $24d14d90d6b73476$export$7f387860ebffb32c)(bsPrefix, "form-control");
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)(Component, {
        ...props,
        type: type,
        size: htmlSize,
        ref: ref,
        readOnly: readOnly,
        id: id || controlId,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($b64d07ce5c97f908$exports)))(className, plaintext ? `${bsPrefix}-plaintext` : bsPrefix, size && `${bsPrefix}-${size}`, type === "color" && `${bsPrefix}-color`, isValid && "is-valid", isInvalid && "is-invalid")
    });
});
$320dd6fcd1628d51$var$FormControl.displayName = "FormControl";
var $320dd6fcd1628d51$export$2e2bcd8739ae039 = Object.assign($320dd6fcd1628d51$var$FormControl, {
    Feedback: $4563c61e47dd2d6e$export$2e2bcd8739ae039
});



var $iS7v4 = parcelRequire("iS7v4");



"use client";
const $d8e3c48aef0c9a4d$var$FormFloating = /*#__PURE__*/ $iS7v4.forwardRef(({ className: className, bsPrefix: bsPrefix, as: Component = "div", ...props }, ref)=>{
    bsPrefix = (0, $24d14d90d6b73476$export$7f387860ebffb32c)(bsPrefix, "form-floating");
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)(Component, {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($b64d07ce5c97f908$exports)))(className, bsPrefix),
        ...props
    });
});
$d8e3c48aef0c9a4d$var$FormFloating.displayName = "FormFloating";
var $d8e3c48aef0c9a4d$export$2e2bcd8739ae039 = $d8e3c48aef0c9a4d$var$FormFloating;



var $iS7v4 = parcelRequire("iS7v4");


const $f3a44123ada28260$var$FormGroup = /*#__PURE__*/ $iS7v4.forwardRef(({ controlId: controlId, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "div", ...props }, ref)=>{
    const context = (0, $iS7v4.useMemo)(()=>({
            controlId: controlId
        }), [
        controlId
    ]);
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $5b2279b11f8a69b3$export$2e2bcd8739ae039).Provider, {
        value: context,
        children: /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)(Component, {
            ...props,
            ref: ref
        })
    });
});
$f3a44123ada28260$var$FormGroup.displayName = "FormGroup";
var $f3a44123ada28260$export$2e2bcd8739ae039 = $f3a44123ada28260$var$FormGroup;




var $iS7v4 = parcelRequire("iS7v4");



var $iS7v4 = parcelRequire("iS7v4");


"use client";
function $b6d4c3a37d0dc9e2$export$2ed43d61a0a9f5a3({ as: as, bsPrefix: bsPrefix, className: className, ...props }) {
    bsPrefix = (0, $24d14d90d6b73476$export$7f387860ebffb32c)(bsPrefix, "col");
    const breakpoints = (0, $24d14d90d6b73476$export$8970c8db816a5863)();
    const minBreakpoint = (0, $24d14d90d6b73476$export$d926d6ef38f3fd32)();
    const spans = [];
    const classes = [];
    breakpoints.forEach((brkPoint)=>{
        const propValue = props[brkPoint];
        delete props[brkPoint];
        let span;
        let offset;
        let order;
        if (typeof propValue === "object" && propValue != null) ({ span: span, offset: offset, order: order } = propValue);
        else span = propValue;
        const infix = brkPoint !== minBreakpoint ? `-${brkPoint}` : "";
        if (span) spans.push(span === true ? `${bsPrefix}${infix}` : `${bsPrefix}${infix}-${span}`);
        if (order != null) classes.push(`order${infix}-${order}`);
        if (offset != null) classes.push(`offset${infix}-${offset}`);
    });
    return [
        {
            ...props,
            className: (0, (/*@__PURE__*/$parcel$interopDefault($b64d07ce5c97f908$exports)))(className, ...spans, ...classes)
        },
        {
            as: as,
            bsPrefix: bsPrefix,
            spans: spans
        }
    ];
}
const $b6d4c3a37d0dc9e2$var$Col = /*#__PURE__*/ $iS7v4.forwardRef(// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
(props, ref)=>{
    const [{ className: className, ...colProps }, { as: Component = "div", bsPrefix: bsPrefix, spans: spans }] = $b6d4c3a37d0dc9e2$export$2ed43d61a0a9f5a3(props);
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)(Component, {
        ...colProps,
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($b64d07ce5c97f908$exports)))(className, !spans.length && bsPrefix)
    });
});
$b6d4c3a37d0dc9e2$var$Col.displayName = "Col";
var $b6d4c3a37d0dc9e2$export$2e2bcd8739ae039 = $b6d4c3a37d0dc9e2$var$Col;





"use client";
const $8f2849278736b892$var$FormLabel = /*#__PURE__*/ $iS7v4.forwardRef(({ // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "label", bsPrefix: bsPrefix, column: column = false, visuallyHidden: visuallyHidden = false, className: className, htmlFor: htmlFor, ...props }, ref)=>{
    const { controlId: controlId } = (0, $iS7v4.useContext)((0, $5b2279b11f8a69b3$export$2e2bcd8739ae039));
    bsPrefix = (0, $24d14d90d6b73476$export$7f387860ebffb32c)(bsPrefix, "form-label");
    let columnClass = "col-form-label";
    if (typeof column === "string") columnClass = `${columnClass} ${columnClass}-${column}`;
    const classes = (0, (/*@__PURE__*/$parcel$interopDefault($b64d07ce5c97f908$exports)))(className, bsPrefix, visuallyHidden && "visually-hidden", column && columnClass);
    htmlFor = htmlFor || controlId;
    if (column) return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $b6d4c3a37d0dc9e2$export$2e2bcd8739ae039), {
        ref: ref,
        as: "label",
        className: classes,
        htmlFor: htmlFor,
        ...props
    });
    return(/*#__PURE__*/ // eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
    (0, $a9d3d534d399c2da$exports.jsx)(Component, {
        ref: ref,
        className: classes,
        htmlFor: htmlFor,
        ...props
    }));
});
$8f2849278736b892$var$FormLabel.displayName = "FormLabel";
var $8f2849278736b892$export$2e2bcd8739ae039 = $8f2849278736b892$var$FormLabel;




var $iS7v4 = parcelRequire("iS7v4");



"use client";
const $77ca408b100c6655$var$FormRange = /*#__PURE__*/ $iS7v4.forwardRef(({ bsPrefix: bsPrefix, className: className, id: id, ...props }, ref)=>{
    const { controlId: controlId } = (0, $iS7v4.useContext)((0, $5b2279b11f8a69b3$export$2e2bcd8739ae039));
    bsPrefix = (0, $24d14d90d6b73476$export$7f387860ebffb32c)(bsPrefix, "form-range");
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)("input", {
        ...props,
        type: "range",
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($b64d07ce5c97f908$exports)))(className, bsPrefix),
        id: id || controlId
    });
});
$77ca408b100c6655$var$FormRange.displayName = "FormRange";
var $77ca408b100c6655$export$2e2bcd8739ae039 = $77ca408b100c6655$var$FormRange;




var $iS7v4 = parcelRequire("iS7v4");



"use client";
const $8bab37f9ec155c1d$var$FormSelect = /*#__PURE__*/ $iS7v4.forwardRef(({ bsPrefix: bsPrefix, size: size, htmlSize: htmlSize, className: className, isValid: isValid = false, isInvalid: isInvalid = false, id: id, ...props }, ref)=>{
    const { controlId: controlId } = (0, $iS7v4.useContext)((0, $5b2279b11f8a69b3$export$2e2bcd8739ae039));
    bsPrefix = (0, $24d14d90d6b73476$export$7f387860ebffb32c)(bsPrefix, "form-select");
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)("select", {
        ...props,
        size: htmlSize,
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($b64d07ce5c97f908$exports)))(className, bsPrefix, size && `${bsPrefix}-${size}`, isValid && `is-valid`, isInvalid && `is-invalid`),
        id: id || controlId
    });
});
$8bab37f9ec155c1d$var$FormSelect.displayName = "FormSelect";
var $8bab37f9ec155c1d$export$2e2bcd8739ae039 = $8bab37f9ec155c1d$var$FormSelect;




var $iS7v4 = parcelRequire("iS7v4");


"use client";
const $625799eb645a10de$var$FormText = /*#__PURE__*/ $iS7v4.forwardRef(// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({ bsPrefix: bsPrefix, className: className, as: Component = "small", muted: muted, ...props }, ref)=>{
    bsPrefix = (0, $24d14d90d6b73476$export$7f387860ebffb32c)(bsPrefix, "form-text");
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)(Component, {
        ...props,
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($b64d07ce5c97f908$exports)))(className, bsPrefix, muted && "text-muted")
    });
});
$625799eb645a10de$var$FormText.displayName = "FormText";
var $625799eb645a10de$export$2e2bcd8739ae039 = $625799eb645a10de$var$FormText;



var $iS7v4 = parcelRequire("iS7v4");


const $f924983f722bba06$var$Switch = /*#__PURE__*/ $iS7v4.forwardRef((props, ref)=>/*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $87af36d386e5ad35$export$2e2bcd8739ae039), {
        ...props,
        ref: ref,
        type: "switch"
    }));
$f924983f722bba06$var$Switch.displayName = "Switch";
var $f924983f722bba06$export$2e2bcd8739ae039 = Object.assign($f924983f722bba06$var$Switch, {
    Input: (0, $87af36d386e5ad35$export$2e2bcd8739ae039).Input,
    Label: (0, $87af36d386e5ad35$export$2e2bcd8739ae039).Label
});




var $iS7v4 = parcelRequire("iS7v4");



"use client";
const $6261d67698bb4f80$var$FloatingLabel = /*#__PURE__*/ $iS7v4.forwardRef(({ bsPrefix: bsPrefix, className: className, children: children, controlId: controlId, label: label, ...props }, ref)=>{
    bsPrefix = (0, $24d14d90d6b73476$export$7f387860ebffb32c)(bsPrefix, "form-floating");
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsxs)((0, $f3a44123ada28260$export$2e2bcd8739ae039), {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($b64d07ce5c97f908$exports)))(className, bsPrefix),
        controlId: controlId,
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)("label", {
                htmlFor: controlId,
                children: label
            })
        ]
    });
});
$6261d67698bb4f80$var$FloatingLabel.displayName = "FloatingLabel";
var $6261d67698bb4f80$export$2e2bcd8739ae039 = $6261d67698bb4f80$var$FloatingLabel;



const $402daf341771d44d$var$propTypes = {
    /**
   * The Form `ref` will be forwarded to the underlying element,
   * which means, unless it's rendered `as` a composite component,
   * it will be a DOM node, when resolved.
   *
   * @type {ReactRef}
   * @alias ref
   */ _ref: (0, (/*@__PURE__*/$parcel$interopDefault($804fb6f4b112ddab$exports))).any,
    /**
   * Mark a form as having been validated. Setting it to `true` will
   * toggle any validation styles on the forms elements.
   */ validated: (0, (/*@__PURE__*/$parcel$interopDefault($804fb6f4b112ddab$exports))).bool,
    as: (0, (/*@__PURE__*/$parcel$interopDefault($804fb6f4b112ddab$exports))).elementType
};
const $402daf341771d44d$var$Form = /*#__PURE__*/ $iS7v4.forwardRef(({ className: className, validated: validated, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "form", ...props }, ref)=>/*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)(Component, {
        ...props,
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($b64d07ce5c97f908$exports)))(className, validated && "was-validated")
    }));
$402daf341771d44d$var$Form.displayName = "Form";
$402daf341771d44d$var$Form.propTypes = $402daf341771d44d$var$propTypes;
var $402daf341771d44d$export$2e2bcd8739ae039 = Object.assign($402daf341771d44d$var$Form, {
    Group: (0, $f3a44123ada28260$export$2e2bcd8739ae039),
    Control: (0, $320dd6fcd1628d51$export$2e2bcd8739ae039),
    Floating: (0, $d8e3c48aef0c9a4d$export$2e2bcd8739ae039),
    Check: (0, $87af36d386e5ad35$export$2e2bcd8739ae039),
    Switch: $f924983f722bba06$export$2e2bcd8739ae039,
    Label: (0, $8f2849278736b892$export$2e2bcd8739ae039),
    Text: (0, $625799eb645a10de$export$2e2bcd8739ae039),
    Range: (0, $77ca408b100c6655$export$2e2bcd8739ae039),
    Select: (0, $8bab37f9ec155c1d$export$2e2bcd8739ae039),
    FloatingLabel: $6261d67698bb4f80$export$2e2bcd8739ae039
});



const $68a6c8cdca99d1eb$export$1582048ca8384970 = ({ onLoggedIn: onLoggedIn })=>{
    const [username, setUsername] = (0, $iS7v4.useState)("");
    const [password, setPassword] = (0, $iS7v4.useState)("");
    const handleSubmit = (event)=>{
        event.preventDefault();
        const data = {
            username: username,
            password: password
        };
        fetch("https://my-flix-db-975de3fb6719.herokuapp.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((response)=>response.json()).then((data)=>{
            console.log("Login response: ", data);
            if (data.user) {
                localStorage.setItem("user", JSON.stringify(data.user));
                localStorage.setItem("token", data.token);
                onLoggedIn(data.user, data.token);
            } else alert("No such user");
        }).catch((e)=>{
            console.error("Login error: ", e);
            alert("Something went wrong");
        });
    };
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsxs)((0, $402daf341771d44d$export$2e2bcd8739ae039), {
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsxs)((0, $402daf341771d44d$export$2e2bcd8739ae039).Group, {
                controlId: "formUsername",
                children: [
                    /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $402daf341771d44d$export$2e2bcd8739ae039).Label, {
                        children: "Username:"
                    }),
                    /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $402daf341771d44d$export$2e2bcd8739ae039).Control, {
                        type: "text",
                        value: username,
                        onChange: (e)=>setUsername(e.target.value),
                        required: true,
                        minLength: "3",
                        className: "mb-4"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsxs)((0, $402daf341771d44d$export$2e2bcd8739ae039).Group, {
                controlId: "formPassword",
                children: [
                    /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $402daf341771d44d$export$2e2bcd8739ae039).Label, {
                        children: "Password:"
                    }),
                    /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $402daf341771d44d$export$2e2bcd8739ae039).Control, {
                        type: "password",
                        value: password,
                        onChange: (e)=>setPassword(e.target.value),
                        className: "mb-4",
                        required: true
                    })
                ]
            }),
            /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $f0f17203e1780c9d$export$2e2bcd8739ae039), {
                variant: "primary",
                type: "submit",
                children: "Submit"
            })
        ]
    });
};
$68a6c8cdca99d1eb$export$1582048ca8384970.propTypes = {
    onLoggedIn: (0, (/*@__PURE__*/$parcel$interopDefault($804fb6f4b112ddab$exports))).func.isRequired
};




var $iS7v4 = parcelRequire("iS7v4");

const $edfd7662308e8d45$export$25f3896ea1e09820 = ()=>{
    const [username, setUsername] = (0, $iS7v4.useState)("");
    const [password, setPassword] = (0, $iS7v4.useState)("");
    const [email, setEmail] = (0, $iS7v4.useState)("");
    const [birthday, setBirthday] = (0, $iS7v4.useState)("");
    const handleSubmit = (event)=>{
        event.preventDefault();
        const data = {
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday
        };
        fetch("https://my-flix-db-975de3fb6719.herokuapp.com/users", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response)=>{
            if (response.ok) {
                alert("Signup successful");
                window.location.reload();
            } else alert("Signup failed");
        });
    };
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsxs)((0, $402daf341771d44d$export$2e2bcd8739ae039), {
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsxs)((0, $402daf341771d44d$export$2e2bcd8739ae039).Group, {
                controlId: "formUsername",
                children: [
                    /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $402daf341771d44d$export$2e2bcd8739ae039).Label, {
                        children: "Username:"
                    }),
                    /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $402daf341771d44d$export$2e2bcd8739ae039).Control, {
                        type: "text",
                        value: username,
                        onChange: (e)=>setUsername(e.target.value),
                        minLength: "3",
                        className: "mb-4",
                        required: true
                    })
                ]
            }),
            /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsxs)((0, $402daf341771d44d$export$2e2bcd8739ae039).Group, {
                controlId: "formPassword",
                children: [
                    /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $402daf341771d44d$export$2e2bcd8739ae039).Label, {
                        children: "Password:"
                    }),
                    /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $402daf341771d44d$export$2e2bcd8739ae039).Control, {
                        type: "password",
                        value: password,
                        onChange: (e)=>setPassword(e.target.value),
                        className: "mb-4",
                        required: true
                    })
                ]
            }),
            /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsxs)((0, $402daf341771d44d$export$2e2bcd8739ae039).Group, {
                controlId: "formEmail",
                children: [
                    /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $402daf341771d44d$export$2e2bcd8739ae039).Label, {
                        children: "Email:"
                    }),
                    /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $402daf341771d44d$export$2e2bcd8739ae039).Control, {
                        type: "email",
                        value: email,
                        onChange: (e)=>setEmail(e.target.value),
                        className: "mb-4",
                        required: true
                    })
                ]
            }),
            /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsxs)((0, $402daf341771d44d$export$2e2bcd8739ae039).Group, {
                controlId: "formBirthday",
                children: [
                    /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $402daf341771d44d$export$2e2bcd8739ae039).Label, {
                        children: "Birthday:"
                    }),
                    /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $402daf341771d44d$export$2e2bcd8739ae039).Control, {
                        type: "date",
                        value: birthday,
                        onChange: (e)=>setBirthday(e.target.value),
                        className: "mb-4",
                        required: true
                    })
                ]
            }),
            /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $f0f17203e1780c9d$export$2e2bcd8739ae039), {
                variant: "primary",
                type: "submit",
                children: "Submit"
            })
        ]
    });
};




var $iS7v4 = parcelRequire("iS7v4");


"use client";
const $a65783a80b39ea4c$var$Row = /*#__PURE__*/ $iS7v4.forwardRef(({ bsPrefix: bsPrefix, className: className, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "div", ...props }, ref)=>{
    const decoratedBsPrefix = (0, $24d14d90d6b73476$export$7f387860ebffb32c)(bsPrefix, "row");
    const breakpoints = (0, $24d14d90d6b73476$export$8970c8db816a5863)();
    const minBreakpoint = (0, $24d14d90d6b73476$export$d926d6ef38f3fd32)();
    const sizePrefix = `${decoratedBsPrefix}-cols`;
    const classes = [];
    breakpoints.forEach((brkPoint)=>{
        const propValue = props[brkPoint];
        delete props[brkPoint];
        let cols;
        if (propValue != null && typeof propValue === "object") ({ cols: cols } = propValue);
        else cols = propValue;
        const infix = brkPoint !== minBreakpoint ? `-${brkPoint}` : "";
        if (cols != null) classes.push(`${sizePrefix}${infix}-${cols}`);
    });
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)(Component, {
        ref: ref,
        ...props,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($b64d07ce5c97f908$exports)))(className, decoratedBsPrefix, ...classes)
    });
});
$a65783a80b39ea4c$var$Row.displayName = "Row";
var $a65783a80b39ea4c$export$2e2bcd8739ae039 = $a65783a80b39ea4c$var$Row;






var $iS7v4 = parcelRequire("iS7v4");


"use client";
const $f3c1ee4d0aab22d2$var$Container = /*#__PURE__*/ $iS7v4.forwardRef(({ bsPrefix: bsPrefix, fluid: fluid = false, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "div", className: className, ...props }, ref)=>{
    const prefix = (0, $24d14d90d6b73476$export$7f387860ebffb32c)(bsPrefix, "container");
    const suffix = typeof fluid === "string" ? `-${fluid}` : "-fluid";
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)(Component, {
        ref: ref,
        ...props,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($b64d07ce5c97f908$exports)))(className, fluid ? `${prefix}${suffix}` : prefix)
    });
});
$f3c1ee4d0aab22d2$var$Container.displayName = "Container";
var $f3c1ee4d0aab22d2$export$2e2bcd8739ae039 = $f3c1ee4d0aab22d2$var$Container;


var $68ad7c369edaadc4$exports = {};
"use strict";
Object.defineProperty($68ad7c369edaadc4$exports, "__esModule", {
    value: true
});
$68ad7c369edaadc4$exports.default = $68ad7c369edaadc4$var$all;
var $8504c4dbdb1ed444$exports = {};
"use strict";
Object.defineProperty($8504c4dbdb1ed444$exports, "__esModule", {
    value: true
});
$8504c4dbdb1ed444$exports.default = $8504c4dbdb1ed444$var$createChainableTypeChecker;
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */ // Mostly taken from ReactPropTypes.
function $8504c4dbdb1ed444$var$createChainableTypeChecker(validate) {
    function checkType(isRequired, props, propName, componentName, location, propFullName) {
        var componentNameSafe = componentName || "<<anonymous>>";
        var propFullNameSafe = propFullName || propName;
        if (props[propName] == null) {
            if (isRequired) return new Error("Required " + location + " `" + propFullNameSafe + "` was not specified " + ("in `" + componentNameSafe + "`."));
            return null;
        }
        for(var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++)args[_key - 6] = arguments[_key];
        return validate.apply(undefined, [
            props,
            propName,
            componentNameSafe,
            location,
            propFullNameSafe
        ].concat(args));
    }
    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
}
$8504c4dbdb1ed444$exports = $8504c4dbdb1ed444$exports["default"];


var $68ad7c369edaadc4$var$_createChainableTypeChecker2 = $68ad7c369edaadc4$var$_interopRequireDefault($8504c4dbdb1ed444$exports);
function $68ad7c369edaadc4$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $68ad7c369edaadc4$var$all() {
    for(var _len = arguments.length, validators = Array(_len), _key = 0; _key < _len; _key++)validators[_key] = arguments[_key];
    function allPropTypes() {
        for(var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
        var error = null;
        validators.forEach(function(validator) {
            if (error != null) return;
            var result = validator.apply(undefined, args);
            if (result != null) error = result;
        });
        return error;
    }
    return (0, $68ad7c369edaadc4$var$_createChainableTypeChecker2.default)(allPropTypes);
}
$68ad7c369edaadc4$exports = $68ad7c369edaadc4$exports["default"];



var $iS7v4 = parcelRequire("iS7v4");
function $cf774e3248d35b18$export$2e2bcd8739ae039() {
    $cf774e3248d35b18$export$2e2bcd8739ae039 = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $cf774e3248d35b18$export$2e2bcd8739ae039.apply(this, arguments);
}


function $bff0d49714d88105$export$2e2bcd8739ae039(source, excluded) {
    if (source == null) return {};
    var target = {};
    for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) {
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}



var $iS7v4 = parcelRequire("iS7v4");
var $161bf784e8715894$exports = {};
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */ var $161bf784e8715894$var$invariant = function(condition, format, a, b, c, d, e, f) {
    if (!condition) {
        var error;
        if (format === undefined) error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
        else {
            var args = [
                a,
                b,
                c,
                d,
                e,
                f
            ];
            var argIndex = 0;
            error = new Error(format.replace(/%s/g, function() {
                return args[argIndex++];
            }));
            error.name = "Invariant Violation";
        }
        error.framesToPop = 1; // we don't care about invariant's own frame
        throw error;
    }
};
$161bf784e8715894$exports = $161bf784e8715894$var$invariant;


var $5ecf056c31d3ffb8$var$noop = function noop() {};
function $5ecf056c31d3ffb8$var$readOnlyPropType(handler, name) {
    return function(props, propName) {
        if (props[propName] !== undefined) {
            if (!props[handler]) return new Error("You have provided a `" + propName + "` prop to `" + name + "` " + ("without an `" + handler + "` handler prop. This will render a read-only field. ") + ("If the field should be mutable use `" + $5ecf056c31d3ffb8$export$26cbf8c37e721e67(propName) + "`. ") + ("Otherwise, set `" + handler + "`."));
        }
    };
}
function $5ecf056c31d3ffb8$export$8abd944bed26e726(controlledValues, displayName) {
    var propTypes = {};
    Object.keys(controlledValues).forEach(function(prop) {
        // add default propTypes for folks that use runtime checks
        propTypes[$5ecf056c31d3ffb8$export$26cbf8c37e721e67(prop)] = $5ecf056c31d3ffb8$var$noop;
        var handler;
    });
    return propTypes;
}
function $5ecf056c31d3ffb8$export$12ae2baa35bd9b8b(props, prop) {
    return props[prop] !== undefined;
}
function $5ecf056c31d3ffb8$export$26cbf8c37e721e67(key) {
    return "default" + key.charAt(0).toUpperCase() + key.substr(1);
}
function $5ecf056c31d3ffb8$export$95e5b18573b29087(component) {
    return !!component && (typeof component !== "function" || component.prototype && component.prototype.isReactComponent);
}


function $6cdf91dc3b24cde1$var$_toPropertyKey(arg) {
    var key = $6cdf91dc3b24cde1$var$_toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
}
function $6cdf91dc3b24cde1$var$_toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
function $6cdf91dc3b24cde1$export$2ee51287a16ca325(propValue, defaultValue, handler) {
    var wasPropRef = (0, $iS7v4.useRef)(propValue !== undefined);
    var _useState = (0, $iS7v4.useState)(defaultValue), stateValue = _useState[0], setState = _useState[1];
    var isProp = propValue !== undefined;
    var wasProp = wasPropRef.current;
    wasPropRef.current = isProp;
    /**
   * If a prop switches from controlled to Uncontrolled
   * reset its value to the defaultValue
   */ if (!isProp && wasProp && stateValue !== defaultValue) setState(defaultValue);
    return [
        isProp ? propValue : stateValue,
        (0, $iS7v4.useCallback)(function(value) {
            for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
            if (handler) handler.apply(void 0, [
                value
            ].concat(args));
            setState(value);
        }, [
            handler
        ])
    ];
}
function $6cdf91dc3b24cde1$export$2e2bcd8739ae039(props, config) {
    return Object.keys(config).reduce(function(result, fieldName) {
        var _extends2;
        var _ref = result, defaultValue = _ref[$5ecf056c31d3ffb8$export$26cbf8c37e721e67(fieldName)], propsValue = _ref[fieldName], rest = (0, $bff0d49714d88105$export$2e2bcd8739ae039)(_ref, [
            $5ecf056c31d3ffb8$export$26cbf8c37e721e67(fieldName),
            fieldName
        ].map($6cdf91dc3b24cde1$var$_toPropertyKey));
        var handlerName = config[fieldName];
        var _useUncontrolledProp = $6cdf91dc3b24cde1$export$2ee51287a16ca325(propsValue, defaultValue, props[handlerName]), value = _useUncontrolledProp[0], handler = _useUncontrolledProp[1];
        return (0, $cf774e3248d35b18$export$2e2bcd8739ae039)({}, rest, (_extends2 = {}, _extends2[fieldName] = value, _extends2[handlerName] = handler, _extends2));
    }, props);
}




function $441859eebe430d32$export$2e2bcd8739ae039(o, p) {
    $441859eebe430d32$export$2e2bcd8739ae039 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return $441859eebe430d32$export$2e2bcd8739ae039(o, p);
}


function $6b73961ab034918f$export$2e2bcd8739ae039(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    (0, $441859eebe430d32$export$2e2bcd8739ae039)(subClass, superClass);
}



var $iS7v4 = parcelRequire("iS7v4");
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function $bcd3575b1de98ed2$var$componentWillMount() {
    // Call this.constructor.gDSFP to support sub-classes.
    var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
    if (state !== null && state !== undefined) this.setState(state);
}
function $bcd3575b1de98ed2$var$componentWillReceiveProps(nextProps) {
    // Call this.constructor.gDSFP to support sub-classes.
    // Use the setState() updater to ensure state isn't stale in certain edge cases.
    function updater(prevState) {
        var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
        return state !== null && state !== undefined ? state : null;
    }
    // Binding "this" is important for shallow renderer support.
    this.setState(updater.bind(this));
}
function $bcd3575b1de98ed2$var$componentWillUpdate(nextProps, nextState) {
    try {
        var prevProps = this.props;
        var prevState = this.state;
        this.props = nextProps;
        this.state = nextState;
        this.__reactInternalSnapshotFlag = true;
        this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(prevProps, prevState);
    } finally{
        this.props = prevProps;
        this.state = prevState;
    }
}
// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
$bcd3575b1de98ed2$var$componentWillMount.__suppressDeprecationWarning = true;
$bcd3575b1de98ed2$var$componentWillReceiveProps.__suppressDeprecationWarning = true;
$bcd3575b1de98ed2$var$componentWillUpdate.__suppressDeprecationWarning = true;
function $bcd3575b1de98ed2$export$cea1c58a6db52bca(Component) {
    var prototype = Component.prototype;
    if (!prototype || !prototype.isReactComponent) throw new Error("Can only polyfill class components");
    if (typeof Component.getDerivedStateFromProps !== "function" && typeof prototype.getSnapshotBeforeUpdate !== "function") return Component;
    // If new component APIs are defined, "unsafe" lifecycles won't be called.
    // Error if any of these lifecycles are present,
    // Because they would work differently between older and newer (16.3+) versions of React.
    var foundWillMountName = null;
    var foundWillReceivePropsName = null;
    var foundWillUpdateName = null;
    if (typeof prototype.componentWillMount === "function") foundWillMountName = "componentWillMount";
    else if (typeof prototype.UNSAFE_componentWillMount === "function") foundWillMountName = "UNSAFE_componentWillMount";
    if (typeof prototype.componentWillReceiveProps === "function") foundWillReceivePropsName = "componentWillReceiveProps";
    else if (typeof prototype.UNSAFE_componentWillReceiveProps === "function") foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps";
    if (typeof prototype.componentWillUpdate === "function") foundWillUpdateName = "componentWillUpdate";
    else if (typeof prototype.UNSAFE_componentWillUpdate === "function") foundWillUpdateName = "UNSAFE_componentWillUpdate";
    if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
        var componentName = Component.displayName || Component.name;
        var newApiName = typeof Component.getDerivedStateFromProps === "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
        throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" + componentName + " uses " + newApiName + " but also contains the following legacy lifecycles:" + (foundWillMountName !== null ? "\n  " + foundWillMountName : "") + (foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : "") + (foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : "") + "\n\nThe above lifecycles should be removed. Learn more about this warning here:\n" + "https://fb.me/react-async-component-lifecycle-hooks");
    }
    // React <= 16.2 does not support static getDerivedStateFromProps.
    // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
    // Newer versions of React will ignore these lifecycles if gDSFP exists.
    if (typeof Component.getDerivedStateFromProps === "function") {
        prototype.componentWillMount = $bcd3575b1de98ed2$var$componentWillMount;
        prototype.componentWillReceiveProps = $bcd3575b1de98ed2$var$componentWillReceiveProps;
    }
    // React <= 16.2 does not support getSnapshotBeforeUpdate.
    // As a workaround, use cWU to invoke the new lifecycle.
    // Newer versions of React will ignore that lifecycle if gSBU exists.
    if (typeof prototype.getSnapshotBeforeUpdate === "function") {
        if (typeof prototype.componentDidUpdate !== "function") throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");
        prototype.componentWillUpdate = $bcd3575b1de98ed2$var$componentWillUpdate;
        var componentDidUpdate = prototype.componentDidUpdate;
        prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {
            // 16.3+ will not execute our will-update method;
            // It will pass a snapshot value to did-update though.
            // Older versions will require our polyfilled will-update value.
            // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
            // Because for <= 15.x versions this might be a "prevContext" object.
            // We also can't just check "__reactInternalSnapshot",
            // Because get-snapshot might return a falsy value.
            // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
            var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;
            componentDidUpdate.call(this, prevProps, prevState, snapshot);
        };
    }
    return Component;
}




var $f0aa08e2a2a5250c$var$_jsxFileName = "/Users/jquense/src/uncontrollable/src/uncontrollable.js";
function $f0aa08e2a2a5250c$export$2e2bcd8739ae039(Component, controlledValues, methods) {
    if (methods === void 0) methods = [];
    var displayName = Component.displayName || Component.name || "Component";
    var canAcceptRef = $5ecf056c31d3ffb8$export$95e5b18573b29087(Component);
    var controlledProps = Object.keys(controlledValues);
    var PROPS_TO_OMIT = controlledProps.map($5ecf056c31d3ffb8$export$26cbf8c37e721e67);
    !(canAcceptRef || !methods.length) && (0, (/*@__PURE__*/$parcel$interopDefault($161bf784e8715894$exports)))(false);
    var UncontrolledComponent = /*#__PURE__*/ function(_React$Component) {
        (0, $6b73961ab034918f$export$2e2bcd8739ae039)(UncontrolledComponent, _React$Component);
        function UncontrolledComponent() {
            var _this;
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
            _this = _React$Component.call.apply(_React$Component, [
                this
            ].concat(args)) || this;
            _this.handlers = Object.create(null);
            controlledProps.forEach(function(propName) {
                var handlerName = controlledValues[propName];
                var handleChange = function handleChange(value) {
                    if (_this.props[handlerName]) {
                        var _this$props;
                        _this._notifying = true;
                        for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)args[_key2 - 1] = arguments[_key2];
                        (_this$props = _this.props)[handlerName].apply(_this$props, [
                            value
                        ].concat(args));
                        _this._notifying = false;
                    }
                    if (!_this.unmounted) _this.setState(function(_ref) {
                        var _extends2;
                        var values = _ref.values;
                        return {
                            values: (0, $cf774e3248d35b18$export$2e2bcd8739ae039)(Object.create(null), values, (_extends2 = {}, _extends2[propName] = value, _extends2))
                        };
                    });
                };
                _this.handlers[handlerName] = handleChange;
            });
            if (methods.length) _this.attachRef = function(ref) {
                _this.inner = ref;
            };
            var values = Object.create(null);
            controlledProps.forEach(function(key) {
                values[key] = _this.props[$5ecf056c31d3ffb8$export$26cbf8c37e721e67(key)];
            });
            _this.state = {
                values: values,
                prevProps: {}
            };
            return _this;
        }
        var _proto = UncontrolledComponent.prototype;
        _proto.shouldComponentUpdate = function shouldComponentUpdate() {
            //let setState trigger the update
            return !this._notifying;
        };
        UncontrolledComponent.getDerivedStateFromProps = function getDerivedStateFromProps(props, _ref2) {
            var values = _ref2.values, prevProps = _ref2.prevProps;
            var nextState = {
                values: (0, $cf774e3248d35b18$export$2e2bcd8739ae039)(Object.create(null), values),
                prevProps: {}
            };
            controlledProps.forEach(function(key) {
                /**
         * If a prop switches from controlled to Uncontrolled
         * reset its value to the defaultValue
         */ nextState.prevProps[key] = props[key];
                if (!$5ecf056c31d3ffb8$export$12ae2baa35bd9b8b(props, key) && $5ecf056c31d3ffb8$export$12ae2baa35bd9b8b(prevProps, key)) nextState.values[key] = props[$5ecf056c31d3ffb8$export$26cbf8c37e721e67(key)];
            });
            return nextState;
        };
        _proto.componentWillUnmount = function componentWillUnmount() {
            this.unmounted = true;
        };
        _proto.render = function render() {
            var _this2 = this;
            var _this$props2 = this.props, innerRef = _this$props2.innerRef, props = (0, $bff0d49714d88105$export$2e2bcd8739ae039)(_this$props2, [
                "innerRef"
            ]);
            PROPS_TO_OMIT.forEach(function(prop) {
                delete props[prop];
            });
            var newProps = {};
            controlledProps.forEach(function(propName) {
                var propValue = _this2.props[propName];
                newProps[propName] = propValue !== undefined ? propValue : _this2.state.values[propName];
            });
            return (0, (/*@__PURE__*/$parcel$interopDefault($iS7v4))).createElement(Component, (0, $cf774e3248d35b18$export$2e2bcd8739ae039)({}, props, newProps, this.handlers, {
                ref: innerRef || this.attachRef
            }));
        };
        return UncontrolledComponent;
    }((0, (/*@__PURE__*/$parcel$interopDefault($iS7v4))).Component);
    (0, $bcd3575b1de98ed2$export$cea1c58a6db52bca)(UncontrolledComponent);
    UncontrolledComponent.displayName = "Uncontrolled(" + displayName + ")";
    UncontrolledComponent.propTypes = (0, $cf774e3248d35b18$export$2e2bcd8739ae039)({
        innerRef: function innerRef() {}
    }, $5ecf056c31d3ffb8$export$8abd944bed26e726(controlledValues, displayName));
    methods.forEach(function(method) {
        UncontrolledComponent.prototype[method] = function $proxiedMethod() {
            var _this$inner;
            return (_this$inner = this.inner)[method].apply(_this$inner, arguments);
        };
    });
    var WrappedComponent = UncontrolledComponent;
    if ((0, (/*@__PURE__*/$parcel$interopDefault($iS7v4))).forwardRef) {
        WrappedComponent = (0, (/*@__PURE__*/$parcel$interopDefault($iS7v4))).forwardRef(function(props, ref) {
            return (0, (/*@__PURE__*/$parcel$interopDefault($iS7v4))).createElement(UncontrolledComponent, (0, $cf774e3248d35b18$export$2e2bcd8739ae039)({}, props, {
                innerRef: ref,
                __source: {
                    fileName: $f0aa08e2a2a5250c$var$_jsxFileName,
                    lineNumber: 128
                },
                __self: this
            }));
        });
        WrappedComponent.propTypes = UncontrolledComponent.propTypes;
    }
    WrappedComponent.ControlledComponent = Component;
    /**
   * useful when wrapping a Component and you want to control
   * everything
   */ WrappedComponent.deferControlTo = function(newComponent, additions, nextMethods) {
        if (additions === void 0) additions = {};
        return $f0aa08e2a2a5250c$export$2e2bcd8739ae039(newComponent, (0, $cf774e3248d35b18$export$2e2bcd8739ae039)({}, controlledValues, additions), nextMethods);
    };
    return WrappedComponent;
}




var $a6f3510f97f28441$var$toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);
function $a6f3510f97f28441$export$2e2bcd8739ae039(element, selector) {
    return $a6f3510f97f28441$var$toArray(element.querySelectorAll(selector));
}



var $iS7v4 = parcelRequire("iS7v4");

var $iS7v4 = parcelRequire("iS7v4");
function $dc2229ff905c732b$export$2e2bcd8739ae039() {
    // The toggling state value is designed to defeat React optimizations for skipping
    // updates when they are strictly equal to the last state value
    const [, dispatch] = (0, $iS7v4.useReducer)((state)=>!state, false);
    return dispatch;
}



var $iS7v4 = parcelRequire("iS7v4");
const $3f06c887acf67efc$var$toFnRef = (ref)=>!ref || typeof ref === "function" ? ref : (value)=>{
        ref.current = value;
    };
function $3f06c887acf67efc$export$c9058316764c140e(refA, refB) {
    const a = $3f06c887acf67efc$var$toFnRef(refA);
    const b = $3f06c887acf67efc$var$toFnRef(refB);
    return (value)=>{
        if (a) a(value);
        if (b) b(value);
    };
}
/**
 * Create and returns a single callback ref composed from two other Refs.
 *
 * ```tsx
 * const Button = React.forwardRef((props, ref) => {
 *   const [element, attachRef] = useCallbackRef<HTMLButtonElement>();
 *   const mergedRef = useMergedRefs(ref, attachRef);
 *
 *   return <button ref={mergedRef} {...props}/>
 * })
 * ```
 *
 * @param refA A Callback or mutable Ref
 * @param refB A Callback or mutable Ref
 * @category refs
 */ function $3f06c887acf67efc$var$useMergedRefs(refA, refB) {
    return (0, $iS7v4.useMemo)(()=>$3f06c887acf67efc$export$c9058316764c140e(refA, refB), [
        refA,
        refB
    ]);
}
var $3f06c887acf67efc$export$2e2bcd8739ae039 = $3f06c887acf67efc$var$useMergedRefs;



var $iS7v4 = parcelRequire("iS7v4");
const $b18b83c96654a211$var$NavContext = /*#__PURE__*/ $iS7v4.createContext(null);
$b18b83c96654a211$var$NavContext.displayName = "NavContext";
var $b18b83c96654a211$export$2e2bcd8739ae039 = $b18b83c96654a211$var$NavContext;



var $iS7v4 = parcelRequire("iS7v4");
const $5e11acc1f3d32b77$var$SelectableContext = /*#__PURE__*/ $iS7v4.createContext(null);
const $5e11acc1f3d32b77$export$eef49b42fde998a3 = (eventKey, href = null)=>{
    if (eventKey != null) return String(eventKey);
    return href || null;
};
var $5e11acc1f3d32b77$export$2e2bcd8739ae039 = $5e11acc1f3d32b77$var$SelectableContext;



var $iS7v4 = parcelRequire("iS7v4");
const $1afc88337c5f42fa$var$TabContext = /*#__PURE__*/ $iS7v4.createContext(null);
var $1afc88337c5f42fa$export$2e2bcd8739ae039 = $1afc88337c5f42fa$var$TabContext;


const $94c5d89a3b48265e$export$fd7bcb7e9bef4e8a = `data-rr-ui-`;
const $94c5d89a3b48265e$export$635202801f9383a0 = `rrUi`;
function $94c5d89a3b48265e$export$5cc3b7b83e34ade7(property) {
    return `${$94c5d89a3b48265e$export$fd7bcb7e9bef4e8a}${property}`;
}
function $94c5d89a3b48265e$export$7776c0a7cd2eb3e0(property) {
    return `${$94c5d89a3b48265e$export$635202801f9383a0}${property}`;
}



var $iS7v4 = parcelRequire("iS7v4");

var $iS7v4 = parcelRequire("iS7v4");

var $iS7v4 = parcelRequire("iS7v4");
/**
 * Creates a `Ref` whose value is updated in an effect, ensuring the most recent
 * value is the one rendered with. Generally only required for Concurrent mode usage
 * where previous work in `render()` may be discarded before being used.
 *
 * This is safe to access in an event handler.
 *
 * @param value The `Ref` value
 */ function $6082ad7e4f77ef24$var$useCommittedRef(value) {
    const ref = (0, $iS7v4.useRef)(value);
    (0, $iS7v4.useEffect)(()=>{
        ref.current = value;
    }, [
        value
    ]);
    return ref;
}
var $6082ad7e4f77ef24$export$2e2bcd8739ae039 = $6082ad7e4f77ef24$var$useCommittedRef;


function $519cffe0dc941fe3$export$2e2bcd8739ae039(fn) {
    const ref = (0, $6082ad7e4f77ef24$export$2e2bcd8739ae039)(fn);
    return (0, $iS7v4.useCallback)(function(...args) {
        return ref.current && ref.current(...args);
    }, [
        ref
    ]);
}








const $a17cb0f198b59ad0$var$_excluded = [
    "as",
    "active",
    "eventKey"
];
function $a17cb0f198b59ad0$var$_objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function $a17cb0f198b59ad0$export$d7a68693710982a({ key: key, onClick: onClick, active: active, id: id, role: role, disabled: disabled }) {
    const parentOnSelect = (0, $iS7v4.useContext)((0, $5e11acc1f3d32b77$export$2e2bcd8739ae039));
    const navContext = (0, $iS7v4.useContext)((0, $b18b83c96654a211$export$2e2bcd8739ae039));
    const tabContext = (0, $iS7v4.useContext)((0, $1afc88337c5f42fa$export$2e2bcd8739ae039));
    let isActive = active;
    const props = {
        role: role
    };
    if (navContext) {
        if (!role && navContext.role === "tablist") props.role = "tab";
        const contextControllerId = navContext.getControllerId(key != null ? key : null);
        const contextControlledId = navContext.getControlledId(key != null ? key : null);
        // @ts-ignore
        props[(0, $94c5d89a3b48265e$export$5cc3b7b83e34ade7)("event-key")] = key;
        props.id = contextControllerId || id;
        isActive = active == null && key != null ? navContext.activeKey === key : active;
        /**
     * Simplified scenario for `mountOnEnter`.
     *
     * While it would make sense to keep 'aria-controls' for tabs that have been mounted at least
     * once, it would also complicate the code quite a bit, for very little gain.
     * The following implementation is probably good enough.
     *
     * @see https://github.com/react-restart/ui/pull/40#issuecomment-1009971561
     */ if (isActive || !(tabContext != null && tabContext.unmountOnExit) && !(tabContext != null && tabContext.mountOnEnter)) props["aria-controls"] = contextControlledId;
    }
    if (props.role === "tab") {
        props["aria-selected"] = isActive;
        if (!isActive) props.tabIndex = -1;
        if (disabled) {
            props.tabIndex = -1;
            props["aria-disabled"] = true;
        }
    }
    props.onClick = (0, $519cffe0dc941fe3$export$2e2bcd8739ae039)((e)=>{
        if (disabled) return;
        onClick == null || onClick(e);
        if (key == null) return;
        if (parentOnSelect && !e.isPropagationStopped()) parentOnSelect(key, e);
    });
    return [
        props,
        {
            isActive: isActive
        }
    ];
}
const $a17cb0f198b59ad0$var$NavItem = /*#__PURE__*/ $iS7v4.forwardRef((_ref, ref)=>{
    let { as: Component = (0, $deea035f1c8c4f88$export$2e2bcd8739ae039), active: active, eventKey: eventKey } = _ref, options = $a17cb0f198b59ad0$var$_objectWithoutPropertiesLoose(_ref, $a17cb0f198b59ad0$var$_excluded);
    const [props, meta] = $a17cb0f198b59ad0$export$d7a68693710982a(Object.assign({
        key: (0, $5e11acc1f3d32b77$export$eef49b42fde998a3)(eventKey, options.href),
        active: active
    }, options));
    // @ts-ignore
    props[(0, $94c5d89a3b48265e$export$5cc3b7b83e34ade7)("active")] = meta.isActive;
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)(Component, Object.assign({}, options, props, {
        ref: ref
    }));
});
$a17cb0f198b59ad0$var$NavItem.displayName = "NavItem";
var $a17cb0f198b59ad0$export$2e2bcd8739ae039 = $a17cb0f198b59ad0$var$NavItem;



const $b7321045b76a56a0$var$_excluded = [
    "as",
    "onSelect",
    "activeKey",
    "role",
    "onKeyDown"
];
function $b7321045b76a56a0$var$_objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
// eslint-disable-next-line @typescript-eslint/no-empty-function
const $b7321045b76a56a0$var$noop = ()=>{};
const $b7321045b76a56a0$var$EVENT_KEY_ATTR = (0, $94c5d89a3b48265e$export$5cc3b7b83e34ade7)("event-key");
const $b7321045b76a56a0$var$Nav = /*#__PURE__*/ $iS7v4.forwardRef((_ref, ref)=>{
    let { // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = "div", onSelect: onSelect, activeKey: activeKey, role: role, onKeyDown: onKeyDown } = _ref, props = $b7321045b76a56a0$var$_objectWithoutPropertiesLoose(_ref, $b7321045b76a56a0$var$_excluded);
    // A ref and forceUpdate for refocus, b/c we only want to trigger when needed
    // and don't want to reset the set in the effect
    const forceUpdate = (0, $dc2229ff905c732b$export$2e2bcd8739ae039)();
    const needsRefocusRef = (0, $iS7v4.useRef)(false);
    const parentOnSelect = (0, $iS7v4.useContext)((0, $5e11acc1f3d32b77$export$2e2bcd8739ae039));
    const tabContext = (0, $iS7v4.useContext)((0, $1afc88337c5f42fa$export$2e2bcd8739ae039));
    let getControlledId, getControllerId;
    if (tabContext) {
        role = role || "tablist";
        activeKey = tabContext.activeKey;
        // TODO: do we need to duplicate these?
        getControlledId = tabContext.getControlledId;
        getControllerId = tabContext.getControllerId;
    }
    const listNode = (0, $iS7v4.useRef)(null);
    const getNextActiveTab = (offset)=>{
        const currentListNode = listNode.current;
        if (!currentListNode) return null;
        const items = (0, $a6f3510f97f28441$export$2e2bcd8739ae039)(currentListNode, `[${$b7321045b76a56a0$var$EVENT_KEY_ATTR}]:not([aria-disabled=true])`);
        const activeChild = currentListNode.querySelector("[aria-selected=true]");
        if (!activeChild || activeChild !== document.activeElement) return null;
        const index = items.indexOf(activeChild);
        if (index === -1) return null;
        let nextIndex = index + offset;
        if (nextIndex >= items.length) nextIndex = 0;
        if (nextIndex < 0) nextIndex = items.length - 1;
        return items[nextIndex];
    };
    const handleSelect = (key, event)=>{
        if (key == null) return;
        onSelect == null || onSelect(key, event);
        parentOnSelect == null || parentOnSelect(key, event);
    };
    const handleKeyDown = (event)=>{
        onKeyDown == null || onKeyDown(event);
        if (!tabContext) return;
        let nextActiveChild;
        switch(event.key){
            case "ArrowLeft":
            case "ArrowUp":
                nextActiveChild = getNextActiveTab(-1);
                break;
            case "ArrowRight":
            case "ArrowDown":
                nextActiveChild = getNextActiveTab(1);
                break;
            default:
                return;
        }
        if (!nextActiveChild) return;
        event.preventDefault();
        handleSelect(nextActiveChild.dataset[(0, $94c5d89a3b48265e$export$7776c0a7cd2eb3e0)("EventKey")] || null, event);
        needsRefocusRef.current = true;
        forceUpdate();
    };
    (0, $iS7v4.useEffect)(()=>{
        if (listNode.current && needsRefocusRef.current) {
            const activeChild = listNode.current.querySelector(`[${$b7321045b76a56a0$var$EVENT_KEY_ATTR}][aria-selected=true]`);
            activeChild == null || activeChild.focus();
        }
        needsRefocusRef.current = false;
    });
    const mergedRef = (0, $3f06c887acf67efc$export$2e2bcd8739ae039)(ref, listNode);
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $5e11acc1f3d32b77$export$2e2bcd8739ae039).Provider, {
        value: handleSelect,
        children: /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $b18b83c96654a211$export$2e2bcd8739ae039).Provider, {
            value: {
                role: role,
                // used by NavLink to determine it's role
                activeKey: (0, $5e11acc1f3d32b77$export$eef49b42fde998a3)(activeKey),
                getControlledId: getControlledId || $b7321045b76a56a0$var$noop,
                getControllerId: getControllerId || $b7321045b76a56a0$var$noop
            },
            children: /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)(Component, Object.assign({}, props, {
                onKeyDown: handleKeyDown,
                ref: mergedRef,
                role: role
            }))
        })
    });
});
$b7321045b76a56a0$var$Nav.displayName = "Nav";
var $b7321045b76a56a0$export$2e2bcd8739ae039 = Object.assign($b7321045b76a56a0$var$Nav, {
    Item: (0, $a17cb0f198b59ad0$export$2e2bcd8739ae039)
});




var $iS7v4 = parcelRequire("iS7v4");
"use client";
// TODO: check
const $b43685ca66689b3a$var$context = /*#__PURE__*/ $iS7v4.createContext(null);
$b43685ca66689b3a$var$context.displayName = "NavbarContext";
var $b43685ca66689b3a$export$2e2bcd8739ae039 = $b43685ca66689b3a$var$context;




var $iS7v4 = parcelRequire("iS7v4");



"use client";
const $a0d6e9c70738fa5f$var$NavItem = /*#__PURE__*/ $iS7v4.forwardRef(({ className: className, bsPrefix: bsPrefix, as: Component = "div", ...props }, ref)=>{
    bsPrefix = (0, $24d14d90d6b73476$export$7f387860ebffb32c)(bsPrefix, "nav-item");
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)(Component, {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($b64d07ce5c97f908$exports)))(className, bsPrefix),
        ...props
    });
});
$a0d6e9c70738fa5f$var$NavItem.displayName = "NavItem";
var $a0d6e9c70738fa5f$export$2e2bcd8739ae039 = $a0d6e9c70738fa5f$var$NavItem;




var $iS7v4 = parcelRequire("iS7v4");

var $iS7v4 = parcelRequire("iS7v4");

var $iS7v4 = parcelRequire("iS7v4");
function $6523b3ab62aed9ea$export$2e2bcd8739ae039() {
    return (0, $iS7v4.useState)(null);
}





var $iS7v4 = parcelRequire("iS7v4");

function $a84361c788f82b7d$export$2e2bcd8739ae039(eventTarget, event, listener, capture = false) {
    const handler = (0, $519cffe0dc941fe3$export$2e2bcd8739ae039)(listener);
    (0, $iS7v4.useEffect)(()=>{
        const target = typeof eventTarget === "function" ? eventTarget() : eventTarget;
        target.addEventListener(event, handler, capture);
        return ()=>target.removeEventListener(event, handler, capture);
    }, [
        eventTarget
    ]);
}




var $iS7v4 = parcelRequire("iS7v4");
function $c649e26cc164baec$export$2e2bcd8739ae039(event, handler, capture = false) {
    const documentTarget = (0, $iS7v4.useCallback)(()=>document, []);
    return (0, $a84361c788f82b7d$export$2e2bcd8739ae039)(documentTarget, event, handler, capture);
}



var $iS7v4 = parcelRequire("iS7v4");

/**
 * Creates a `setInterval` that is properly cleaned up when a component unmounted
 *
 * ```tsx
 *  function Timer() {
 *    const [timer, setTimer] = useState(0)
 *    useInterval(() => setTimer(i => i + 1), 1000)
 *
 *    return <span>{timer} seconds past</span>
 *  }
 * ```
 *
 * @param fn an function run on each interval
 * @param ms The milliseconds duration of the interval
 */ /**
 * Creates a pausable `setInterval` that is properly cleaned up when a component unmounted
 *
 * ```tsx
 *  const [paused, setPaused] = useState(false)
 *  const [timer, setTimer] = useState(0)
 *
 *  useInterval(() => setTimer(i => i + 1), 1000, paused)
 *
 *  return (
 *    <span>
 *      {timer} seconds past
 *
 *      <button onClick={() => setPaused(p => !p)}>{paused ? 'Play' : 'Pause' }</button>
 *    </span>
 * )
 * ```
 *
 * @param fn an function run on each interval
 * @param ms The milliseconds duration of the interval
 * @param paused Whether or not the interval is currently running
 */ /**
 * Creates a pausable `setInterval` that _fires_ immediately and is
 * properly cleaned up when a component unmounted
 *
 * ```tsx
 *  const [timer, setTimer] = useState(-1)
 *  useInterval(() => setTimer(i => i + 1), 1000, false, true)
 *
 *  // will update to 0 on the first effect
 *  return <span>{timer} seconds past</span>
 * ```
 *
 * @param fn an function run on each interval
 * @param ms The milliseconds duration of the interval
 * @param paused Whether or not the interval is currently running
 * @param runImmediately Whether to run the function immediately on mount or unpause
 * rather than waiting for the first interval to elapse
 *

 */ function $3a611e0552a3e8fd$var$useInterval(fn, ms, paused = false, runImmediately = false) {
    let handle;
    const fnRef = (0, $6082ad7e4f77ef24$export$2e2bcd8739ae039)(fn);
    // this ref is necessary b/c useEffect will sometimes miss a paused toggle
    // orphaning a setTimeout chain in the aether, so relying on it's refresh logic is not reliable.
    const pausedRef = (0, $6082ad7e4f77ef24$export$2e2bcd8739ae039)(paused);
    const tick = ()=>{
        if (pausedRef.current) return;
        fnRef.current();
        schedule(); // eslint-disable-line no-use-before-define
    };
    const schedule = ()=>{
        clearTimeout(handle);
        handle = setTimeout(tick, ms);
    };
    (0, $iS7v4.useEffect)(()=>{
        if (runImmediately) tick();
        else schedule();
        return ()=>clearTimeout(handle);
    }, [
        paused,
        runImmediately
    ]);
}
var $3a611e0552a3e8fd$export$2e2bcd8739ae039 = $3a611e0552a3e8fd$var$useInterval;



var $iS7v4 = parcelRequire("iS7v4");

function $e021efd8d5b2778f$var$useRafInterval(fn, ms, paused = false) {
    let handle;
    let start = new Date().getTime();
    const fnRef = (0, $6082ad7e4f77ef24$export$2e2bcd8739ae039)(fn);
    // this ref is necessary b/c useEffect will sometimes miss a paused toggle
    // orphaning a setTimeout chain in the aether, so relying on it's refresh logic is not reliable.
    const pausedRef = (0, $6082ad7e4f77ef24$export$2e2bcd8739ae039)(paused);
    function loop() {
        const current = new Date().getTime();
        const delta = current - start;
        if (pausedRef.current) return;
        if (delta >= ms && fnRef.current) {
            fnRef.current();
            start = new Date().getTime();
        }
        cancelAnimationFrame(handle);
        handle = requestAnimationFrame(loop);
    }
    (0, $iS7v4.useEffect)(()=>{
        handle = requestAnimationFrame(loop);
        return ()=>cancelAnimationFrame(handle);
    }, []);
}
var $e021efd8d5b2778f$export$2e2bcd8739ae039 = $e021efd8d5b2778f$var$useRafInterval;



var $iS7v4 = parcelRequire("iS7v4");
function $8a488660718d736f$export$2e2bcd8739ae039(initialState) {
    const [state, setState] = (0, $iS7v4.useState)(initialState);
    const updater = (0, $iS7v4.useCallback)((update)=>{
        if (update === null) return;
        if (typeof update === "function") setState((state)=>{
            const nextState = update(state);
            return nextState == null ? state : Object.assign({}, state, nextState);
        });
        else setState((state)=>Object.assign({}, state, update));
    }, [
        setState
    ]);
    return [
        state,
        updater
    ];
}



function $a85e64d506af8cfd$export$2e2bcd8739ae039(props, gDSFP, initialState) {
    const [state, setState] = (0, $8a488660718d736f$export$2e2bcd8739ae039)(initialState);
    const nextState = gDSFP(props, state);
    if (nextState !== null) setState(nextState);
    return [
        state,
        setState
    ];
}



var $iS7v4 = parcelRequire("iS7v4");
function $f5c4319567c47a83$export$2e2bcd8739ae039() {
    const mounted = (0, $iS7v4.useRef)(true);
    const isMounted = (0, $iS7v4.useRef)(()=>mounted.current);
    (0, $iS7v4.useEffect)(()=>{
        mounted.current = true;
        return ()=>{
            mounted.current = false;
        };
    }, []);
    return isMounted.current;
}



var $iS7v4 = parcelRequire("iS7v4");
function $dffc4990d29b3856$export$2e2bcd8739ae039(value) {
    const ref = (0, $iS7v4.useRef)(null);
    (0, $iS7v4.useEffect)(()=>{
        ref.current = value;
    });
    return ref.current;
}



var $iS7v4 = parcelRequire("iS7v4");
function $b727f68b59902e76$export$2e2bcd8739ae039(imageOrUrl, crossOrigin) {
    const [state, setState] = (0, $iS7v4.useState)({
        image: null,
        error: null
    });
    (0, $iS7v4.useEffect)(()=>{
        if (!imageOrUrl) return undefined;
        let image;
        if (typeof imageOrUrl === "string") {
            image = new Image();
            if (crossOrigin) image.crossOrigin = crossOrigin;
            image.src = imageOrUrl;
        } else {
            image = imageOrUrl;
            if (image.complete && image.naturalHeight > 0) {
                setState({
                    image: image,
                    error: null
                });
                return;
            }
        }
        function onLoad() {
            setState({
                image: image,
                error: null
            });
        }
        function onError(error) {
            setState({
                image: image,
                error: error
            });
        }
        image.addEventListener("load", onLoad);
        image.addEventListener("error", onError);
        return ()=>{
            image.removeEventListener("load", onLoad);
            image.removeEventListener("error", onError);
        };
    }, [
        imageOrUrl,
        crossOrigin
    ]);
    return state;
}



var $iS7v4 = parcelRequire("iS7v4");

var $iS7v4 = parcelRequire("iS7v4");
const $57e9ca83ff7c17c5$var$isReactNative = typeof $parcel$global !== "undefined" && // @ts-ignore
$parcel$global.navigator && // @ts-ignore
$parcel$global.navigator.product === "ReactNative";
const $57e9ca83ff7c17c5$var$isDOM = typeof document !== "undefined";
var /**
 * Is `useLayoutEffect` in a DOM or React Native environment, otherwise resolves to useEffect
 * Only useful to avoid the console warning.
 *
 * PREFER `useEffect` UNLESS YOU KNOW WHAT YOU ARE DOING.
 *
 * @category effects
 */ $57e9ca83ff7c17c5$export$2e2bcd8739ae039 = $57e9ca83ff7c17c5$var$isDOM || $57e9ca83ff7c17c5$var$isReactNative ? (0, $iS7v4.useLayoutEffect) : (0, $iS7v4.useEffect);


const $37f6e836b6df6a76$var$targetMap = new WeakMap();
let $37f6e836b6df6a76$var$resizeObserver;
function $37f6e836b6df6a76$var$getResizeObserver() {
    // eslint-disable-next-line no-return-assign
    return $37f6e836b6df6a76$var$resizeObserver = $37f6e836b6df6a76$var$resizeObserver || new window.ResizeObserver((entries)=>{
        entries.forEach((entry)=>{
            const handler = $37f6e836b6df6a76$var$targetMap.get(entry.target);
            if (handler) handler(entry.contentRect);
        });
    });
}
function $37f6e836b6df6a76$export$2e2bcd8739ae039(element) {
    const [rect, setRect] = (0, $iS7v4.useState)(null);
    (0, $57e9ca83ff7c17c5$export$2e2bcd8739ae039)(()=>{
        if (!element) return;
        $37f6e836b6df6a76$var$getResizeObserver().observe(element);
        setRect(element.getBoundingClientRect());
        $37f6e836b6df6a76$var$targetMap.set(element, (rect)=>{
            setRect(rect);
        });
        return ()=>{
            $37f6e836b6df6a76$var$targetMap.delete(element);
        };
    }, [
        element
    ]);
    return rect;
}






const $cf28af7f05864d50$var$_excluded = [
    "onKeyDown"
];
function $cf28af7f05864d50$var$_objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function $cf28af7f05864d50$export$72369ab2cc99204b(href) {
    return !href || href.trim() === "#";
}
/**
 * An generic `<a>` component that covers a few A11y cases, ensuring that
 * cases where the `href` is missing or trivial like "#" are treated like buttons.
 */ const $cf28af7f05864d50$var$Anchor = /*#__PURE__*/ $iS7v4.forwardRef((_ref, ref)=>{
    let { onKeyDown: onKeyDown } = _ref, props = $cf28af7f05864d50$var$_objectWithoutPropertiesLoose(_ref, $cf28af7f05864d50$var$_excluded);
    const [buttonProps] = (0, $deea035f1c8c4f88$export$a0ee72f2c720a5c3)(Object.assign({
        tagName: "a"
    }, props));
    const handleKeyDown = (0, $519cffe0dc941fe3$export$2e2bcd8739ae039)((e)=>{
        buttonProps.onKeyDown(e);
        onKeyDown == null || onKeyDown(e);
    });
    if ($cf28af7f05864d50$export$72369ab2cc99204b(props.href) || props.role === "button") return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)("a", Object.assign({
        ref: ref
    }, props, buttonProps, {
        onKeyDown: handleKeyDown
    }));
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)("a", Object.assign({
        ref: ref
    }, props, {
        onKeyDown: onKeyDown
    }));
});
$cf28af7f05864d50$var$Anchor.displayName = "Anchor";
var $cf28af7f05864d50$export$2e2bcd8739ae039 = $cf28af7f05864d50$var$Anchor;






"use client";
const $ebceb450185ff1db$var$NavLink = /*#__PURE__*/ $iS7v4.forwardRef(({ bsPrefix: bsPrefix, className: className, as: Component = (0, $cf28af7f05864d50$export$2e2bcd8739ae039), active: active, eventKey: eventKey, disabled: disabled = false, ...props }, ref)=>{
    bsPrefix = (0, $24d14d90d6b73476$export$7f387860ebffb32c)(bsPrefix, "nav-link");
    const [navItemProps, meta] = (0, $a17cb0f198b59ad0$export$d7a68693710982a)({
        key: (0, $5e11acc1f3d32b77$export$eef49b42fde998a3)(eventKey, props.href),
        active: active,
        disabled: disabled,
        ...props
    });
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)(Component, {
        ...props,
        ...navItemProps,
        ref: ref,
        disabled: disabled,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($b64d07ce5c97f908$exports)))(className, bsPrefix, disabled && "disabled", meta.isActive && "active")
    });
});
$ebceb450185ff1db$var$NavLink.displayName = "NavLink";
var $ebceb450185ff1db$export$2e2bcd8739ae039 = $ebceb450185ff1db$var$NavLink;



"use client";
const $8d723168ac6d5bd3$var$Nav = /*#__PURE__*/ $iS7v4.forwardRef((uncontrolledProps, ref)=>{
    const { as: as = "div", bsPrefix: initialBsPrefix, variant: variant, fill: fill = false, justify: justify = false, navbar: navbar, navbarScroll: navbarScroll, className: className, activeKey: activeKey, ...props } = (0, $6cdf91dc3b24cde1$export$2e2bcd8739ae039)(uncontrolledProps, {
        activeKey: "onSelect"
    });
    const bsPrefix = (0, $24d14d90d6b73476$export$7f387860ebffb32c)(initialBsPrefix, "nav");
    let navbarBsPrefix;
    let cardHeaderBsPrefix;
    let isNavbar = false;
    const navbarContext = (0, $iS7v4.useContext)((0, $b43685ca66689b3a$export$2e2bcd8739ae039));
    const cardHeaderContext = (0, $iS7v4.useContext)((0, $48a702ab7d782cf0$export$2e2bcd8739ae039));
    if (navbarContext) {
        navbarBsPrefix = navbarContext.bsPrefix;
        isNavbar = navbar == null ? true : navbar;
    } else if (cardHeaderContext) ({ cardHeaderBsPrefix: cardHeaderBsPrefix } = cardHeaderContext);
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $b7321045b76a56a0$export$2e2bcd8739ae039), {
        as: as,
        ref: ref,
        activeKey: activeKey,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($b64d07ce5c97f908$exports)))(className, {
            [bsPrefix]: !isNavbar,
            [`${navbarBsPrefix}-nav`]: isNavbar,
            [`${navbarBsPrefix}-nav-scroll`]: isNavbar && navbarScroll,
            [`${cardHeaderBsPrefix}-${variant}`]: !!cardHeaderBsPrefix,
            [`${bsPrefix}-${variant}`]: !!variant,
            [`${bsPrefix}-fill`]: fill,
            [`${bsPrefix}-justified`]: justify
        }),
        ...props
    });
});
$8d723168ac6d5bd3$var$Nav.displayName = "Nav";
var $8d723168ac6d5bd3$export$2e2bcd8739ae039 = Object.assign($8d723168ac6d5bd3$var$Nav, {
    Item: (0, $a0d6e9c70738fa5f$export$2e2bcd8739ae039),
    Link: (0, $ebceb450185ff1db$export$2e2bcd8739ae039)
});



var $iS7v4 = parcelRequire("iS7v4");




var $iS7v4 = parcelRequire("iS7v4");


"use client";
const $c304907f7d9901f1$var$NavbarBrand = /*#__PURE__*/ $iS7v4.forwardRef(({ bsPrefix: bsPrefix, className: className, as: as, ...props }, ref)=>{
    bsPrefix = (0, $24d14d90d6b73476$export$7f387860ebffb32c)(bsPrefix, "navbar-brand");
    const Component = as || (props.href ? "a" : "span");
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)(Component, {
        ...props,
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($b64d07ce5c97f908$exports)))(className, bsPrefix)
    });
});
$c304907f7d9901f1$var$NavbarBrand.displayName = "NavbarBrand";
var $c304907f7d9901f1$export$2e2bcd8739ae039 = $c304907f7d9901f1$var$NavbarBrand;



var $iS7v4 = parcelRequire("iS7v4");

/**
 * Returns the owner document of a given element.
 * 
 * @param node the element
 */ function $dc2da9486e1d16d8$export$2e2bcd8739ae039(node) {
    return node && node.ownerDocument || document;
}


function $d4b9608b040df65c$export$2e2bcd8739ae039(node) {
    var doc = (0, $dc2da9486e1d16d8$export$2e2bcd8739ae039)(node);
    return doc && doc.defaultView || window;
}


function $5d25a881c4fd9f76$export$2e2bcd8739ae039(node, psuedoElement) {
    return (0, $d4b9608b040df65c$export$2e2bcd8739ae039)(node).getComputedStyle(node, psuedoElement);
}


/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
 */ var $0cdb0ab298fa94c4$var$rUpper = /([A-Z])/g;
function $0cdb0ab298fa94c4$export$2e2bcd8739ae039(string) {
    return string.replace($0cdb0ab298fa94c4$var$rUpper, "-$1").toLowerCase();
}


var $5cfe989c45ce69e7$var$msPattern = /^ms-/;
function $5cfe989c45ce69e7$export$2e2bcd8739ae039(string) {
    return (0, $0cdb0ab298fa94c4$export$2e2bcd8739ae039)(string).replace($5cfe989c45ce69e7$var$msPattern, "-ms-");
}


var $07edef581b4442d4$var$supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function $07edef581b4442d4$export$2e2bcd8739ae039(value) {
    return !!(value && $07edef581b4442d4$var$supportedTransforms.test(value));
}


function $c87289290978bcff$var$style(node, property) {
    var css = "";
    var transforms = "";
    if (typeof property === "string") return node.style.getPropertyValue((0, $5cfe989c45ce69e7$export$2e2bcd8739ae039)(property)) || (0, $5d25a881c4fd9f76$export$2e2bcd8739ae039)(node).getPropertyValue((0, $5cfe989c45ce69e7$export$2e2bcd8739ae039)(property));
    Object.keys(property).forEach(function(key) {
        var value = property[key];
        if (!value && value !== 0) node.style.removeProperty((0, $5cfe989c45ce69e7$export$2e2bcd8739ae039)(key));
        else if ((0, $07edef581b4442d4$export$2e2bcd8739ae039)(key)) transforms += key + "(" + value + ") ";
        else css += (0, $5cfe989c45ce69e7$export$2e2bcd8739ae039)(key) + ": " + value + ";";
    });
    if (transforms) css += "transform: " + transforms + ";";
    node.style.cssText += ";" + css;
}
var $c87289290978bcff$export$2e2bcd8739ae039 = $c87289290978bcff$var$style;



var $iS7v4 = parcelRequire("iS7v4");




var $iS7v4 = parcelRequire("iS7v4");

var $befc25871048063b$export$2e2bcd8739ae039 = {
    disabled: false
};




var $iS7v4 = parcelRequire("iS7v4");
var $831107642d669d27$export$2e2bcd8739ae039 = (0, (/*@__PURE__*/$parcel$interopDefault($iS7v4))).createContext(null);


var $85d50ab4a620e236$export$7d26bbb1236dafd6 = function forceReflow(node) {
    return node.scrollTop;
};


var $53b9086095edce82$export$bb38bb9a1161268 = "unmounted";
var $53b9086095edce82$export$84cbff306f539230 = "exited";
var $53b9086095edce82$export$df38205c966be359 = "entering";
var $53b9086095edce82$export$78e9e6e3e014d60a = "entered";
var $53b9086095edce82$export$4aacc83d4d59139f = "exiting";
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */ var $53b9086095edce82$var$Transition = /*#__PURE__*/ function(_React$Component) {
    (0, $6b73961ab034918f$export$2e2bcd8739ae039)(Transition, _React$Component);
    function Transition(props, context) {
        var _this;
        _this = _React$Component.call(this, props, context) || this;
        var parentGroup = context; // In the context of a TransitionGroup all enters are really appears
        var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
        var initialStatus;
        _this.appearStatus = null;
        if (props.in) {
            if (appear) {
                initialStatus = $53b9086095edce82$export$84cbff306f539230;
                _this.appearStatus = $53b9086095edce82$export$df38205c966be359;
            } else initialStatus = $53b9086095edce82$export$78e9e6e3e014d60a;
        } else if (props.unmountOnExit || props.mountOnEnter) initialStatus = $53b9086095edce82$export$bb38bb9a1161268;
        else initialStatus = $53b9086095edce82$export$84cbff306f539230;
        _this.state = {
            status: initialStatus
        };
        _this.nextCallback = null;
        return _this;
    }
    Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
        var nextIn = _ref.in;
        if (nextIn && prevState.status === $53b9086095edce82$export$bb38bb9a1161268) return {
            status: $53b9086095edce82$export$84cbff306f539230
        };
        return null;
    } // getSnapshotBeforeUpdate(prevProps) {
    ;
    var _proto = Transition.prototype;
    _proto.componentDidMount = function componentDidMount() {
        this.updateStatus(true, this.appearStatus);
    };
    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
        var nextStatus = null;
        if (prevProps !== this.props) {
            var status = this.state.status;
            if (this.props.in) {
                if (status !== $53b9086095edce82$export$df38205c966be359 && status !== $53b9086095edce82$export$78e9e6e3e014d60a) nextStatus = $53b9086095edce82$export$df38205c966be359;
            } else if (status === $53b9086095edce82$export$df38205c966be359 || status === $53b9086095edce82$export$78e9e6e3e014d60a) nextStatus = $53b9086095edce82$export$4aacc83d4d59139f;
        }
        this.updateStatus(false, nextStatus);
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
        this.cancelNextCallback();
    };
    _proto.getTimeouts = function getTimeouts() {
        var timeout = this.props.timeout;
        var exit, enter, appear;
        exit = enter = appear = timeout;
        if (timeout != null && typeof timeout !== "number") {
            exit = timeout.exit;
            enter = timeout.enter; // TODO: remove fallback for next major
            appear = timeout.appear !== undefined ? timeout.appear : enter;
        }
        return {
            exit: exit,
            enter: enter,
            appear: appear
        };
    };
    _proto.updateStatus = function updateStatus(mounting, nextStatus) {
        if (mounting === void 0) mounting = false;
        if (nextStatus !== null) {
            // nextStatus will always be ENTERING or EXITING.
            this.cancelNextCallback();
            if (nextStatus === $53b9086095edce82$export$df38205c966be359) {
                if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var node = this.props.nodeRef ? this.props.nodeRef.current : (0, (/*@__PURE__*/$parcel$interopDefault($1d90405877b51491$exports))).findDOMNode(this); // https://github.com/reactjs/react-transition-group/pull/749
                    // With unmountOnExit or mountOnEnter, the enter animation should happen at the transition between `exited` and `entering`.
                    // To make the animation happen,  we have to separate each rendering and avoid being processed as batched.
                    if (node) (0, $85d50ab4a620e236$export$7d26bbb1236dafd6)(node);
                }
                this.performEnter(mounting);
            } else this.performExit();
        } else if (this.props.unmountOnExit && this.state.status === $53b9086095edce82$export$84cbff306f539230) this.setState({
            status: $53b9086095edce82$export$bb38bb9a1161268
        });
    };
    _proto.performEnter = function performEnter(mounting) {
        var _this2 = this;
        var enter = this.props.enter;
        var appearing = this.context ? this.context.isMounting : mounting;
        var _ref2 = this.props.nodeRef ? [
            appearing
        ] : [
            (0, (/*@__PURE__*/$parcel$interopDefault($1d90405877b51491$exports))).findDOMNode(this),
            appearing
        ], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
        var timeouts = this.getTimeouts();
        var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
        // if we are mounting and running this it means appear _must_ be set
        if (!mounting && !enter || (0, $befc25871048063b$export$2e2bcd8739ae039).disabled) {
            this.safeSetState({
                status: $53b9086095edce82$export$78e9e6e3e014d60a
            }, function() {
                _this2.props.onEntered(maybeNode);
            });
            return;
        }
        this.props.onEnter(maybeNode, maybeAppearing);
        this.safeSetState({
            status: $53b9086095edce82$export$df38205c966be359
        }, function() {
            _this2.props.onEntering(maybeNode, maybeAppearing);
            _this2.onTransitionEnd(enterTimeout, function() {
                _this2.safeSetState({
                    status: $53b9086095edce82$export$78e9e6e3e014d60a
                }, function() {
                    _this2.props.onEntered(maybeNode, maybeAppearing);
                });
            });
        });
    };
    _proto.performExit = function performExit() {
        var _this3 = this;
        var exit = this.props.exit;
        var timeouts = this.getTimeouts();
        var maybeNode = this.props.nodeRef ? undefined : (0, (/*@__PURE__*/$parcel$interopDefault($1d90405877b51491$exports))).findDOMNode(this); // no exit animation skip right to EXITED
        if (!exit || (0, $befc25871048063b$export$2e2bcd8739ae039).disabled) {
            this.safeSetState({
                status: $53b9086095edce82$export$84cbff306f539230
            }, function() {
                _this3.props.onExited(maybeNode);
            });
            return;
        }
        this.props.onExit(maybeNode);
        this.safeSetState({
            status: $53b9086095edce82$export$4aacc83d4d59139f
        }, function() {
            _this3.props.onExiting(maybeNode);
            _this3.onTransitionEnd(timeouts.exit, function() {
                _this3.safeSetState({
                    status: $53b9086095edce82$export$84cbff306f539230
                }, function() {
                    _this3.props.onExited(maybeNode);
                });
            });
        });
    };
    _proto.cancelNextCallback = function cancelNextCallback() {
        if (this.nextCallback !== null) {
            this.nextCallback.cancel();
            this.nextCallback = null;
        }
    };
    _proto.safeSetState = function safeSetState(nextState, callback) {
        // This shouldn't be necessary, but there are weird race conditions with
        // setState callbacks and unmounting in testing, so always make sure that
        // we can cancel any pending setState callbacks after we unmount.
        callback = this.setNextCallback(callback);
        this.setState(nextState, callback);
    };
    _proto.setNextCallback = function setNextCallback(callback) {
        var _this4 = this;
        var active = true;
        this.nextCallback = function(event) {
            if (active) {
                active = false;
                _this4.nextCallback = null;
                callback(event);
            }
        };
        this.nextCallback.cancel = function() {
            active = false;
        };
        return this.nextCallback;
    };
    _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
        this.setNextCallback(handler);
        var node = this.props.nodeRef ? this.props.nodeRef.current : (0, (/*@__PURE__*/$parcel$interopDefault($1d90405877b51491$exports))).findDOMNode(this);
        var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;
        if (!node || doesNotHaveTimeoutOrListener) {
            setTimeout(this.nextCallback, 0);
            return;
        }
        if (this.props.addEndListener) {
            var _ref3 = this.props.nodeRef ? [
                this.nextCallback
            ] : [
                node,
                this.nextCallback
            ], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
            this.props.addEndListener(maybeNode, maybeNextCallback);
        }
        if (timeout != null) setTimeout(this.nextCallback, timeout);
    };
    _proto.render = function render() {
        var status = this.state.status;
        if (status === $53b9086095edce82$export$bb38bb9a1161268) return null;
        var _this$props = this.props, children = _this$props.children, _in = _this$props.in, _mountOnEnter = _this$props.mountOnEnter, _unmountOnExit = _this$props.unmountOnExit, _appear = _this$props.appear, _enter = _this$props.enter, _exit = _this$props.exit, _timeout = _this$props.timeout, _addEndListener = _this$props.addEndListener, _onEnter = _this$props.onEnter, _onEntering = _this$props.onEntering, _onEntered = _this$props.onEntered, _onExit = _this$props.onExit, _onExiting = _this$props.onExiting, _onExited = _this$props.onExited, _nodeRef = _this$props.nodeRef, childProps = (0, $bff0d49714d88105$export$2e2bcd8739ae039)(_this$props, [
            "children",
            "in",
            "mountOnEnter",
            "unmountOnExit",
            "appear",
            "enter",
            "exit",
            "timeout",
            "addEndListener",
            "onEnter",
            "onEntering",
            "onEntered",
            "onExit",
            "onExiting",
            "onExited",
            "nodeRef"
        ]);
        return(/*#__PURE__*/ // allows for nested Transitions
        (0, (/*@__PURE__*/$parcel$interopDefault($iS7v4))).createElement((0, $831107642d669d27$export$2e2bcd8739ae039).Provider, {
            value: null
        }, typeof children === "function" ? children(status, childProps) : (0, (/*@__PURE__*/$parcel$interopDefault($iS7v4))).cloneElement((0, (/*@__PURE__*/$parcel$interopDefault($iS7v4))).Children.only(children), childProps)));
    };
    return Transition;
}((0, (/*@__PURE__*/$parcel$interopDefault($iS7v4))).Component);
$53b9086095edce82$var$Transition.contextType = (0, $831107642d669d27$export$2e2bcd8739ae039);
$53b9086095edce82$var$Transition.propTypes = {}; // Name the function so it is clearer in the documentation
function $53b9086095edce82$var$noop() {}
$53b9086095edce82$var$Transition.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,
    onEnter: $53b9086095edce82$var$noop,
    onEntering: $53b9086095edce82$var$noop,
    onEntered: $53b9086095edce82$var$noop,
    onExit: $53b9086095edce82$var$noop,
    onExiting: $53b9086095edce82$var$noop,
    onExited: $53b9086095edce82$var$noop
};
$53b9086095edce82$var$Transition.UNMOUNTED = $53b9086095edce82$export$bb38bb9a1161268;
$53b9086095edce82$var$Transition.EXITED = $53b9086095edce82$export$84cbff306f539230;
$53b9086095edce82$var$Transition.ENTERING = $53b9086095edce82$export$df38205c966be359;
$53b9086095edce82$var$Transition.ENTERED = $53b9086095edce82$export$78e9e6e3e014d60a;
$53b9086095edce82$var$Transition.EXITING = $53b9086095edce82$export$4aacc83d4d59139f;
var $53b9086095edce82$export$2e2bcd8739ae039 = $53b9086095edce82$var$Transition;




/* eslint-disable no-return-assign */ var $e5ac62463ba618b0$export$2e2bcd8739ae039 = !!(typeof window !== "undefined" && window.document && window.document.createElement);


var $8761242eac0c6658$export$63fefd044b2bc624 = false;
var $8761242eac0c6658$export$a614c6b395900f69 = false;
try {
    var $8761242eac0c6658$var$options = {
        get passive () {
            return $8761242eac0c6658$export$63fefd044b2bc624 = true;
        },
        get once () {
            // eslint-disable-next-line no-multi-assign
            return $8761242eac0c6658$export$a614c6b395900f69 = $8761242eac0c6658$export$63fefd044b2bc624 = true;
        }
    };
    if (0, $e5ac62463ba618b0$export$2e2bcd8739ae039) {
        window.addEventListener("test", $8761242eac0c6658$var$options, $8761242eac0c6658$var$options);
        window.removeEventListener("test", $8761242eac0c6658$var$options, true);
    }
} catch (e) {
/* */ }
/**
 * An `addEventListener` ponyfill, supports the `once` option
 * 
 * @param node the element
 * @param eventName the event name
 * @param handle the handler
 * @param options event options
 */ function $8761242eac0c6658$var$addEventListener(node, eventName, handler, options) {
    if (options && typeof options !== "boolean" && !$8761242eac0c6658$export$a614c6b395900f69) {
        var once = options.once, capture = options.capture;
        var wrappedHandler = handler;
        if (!$8761242eac0c6658$export$a614c6b395900f69 && once) {
            wrappedHandler = handler.__once || function onceHandler(event) {
                this.removeEventListener(eventName, onceHandler, capture);
                handler.call(this, event);
            };
            handler.__once = wrappedHandler;
        }
        node.addEventListener(eventName, wrappedHandler, $8761242eac0c6658$export$63fefd044b2bc624 ? options : capture);
    }
    node.addEventListener(eventName, handler, options);
}
var $8761242eac0c6658$export$2e2bcd8739ae039 = $8761242eac0c6658$var$addEventListener;


/**
 * A `removeEventListener` ponyfill
 * 
 * @param node the element
 * @param eventName the event name
 * @param handle the handler
 * @param options event options
 */ function $b4801b50bb692c05$var$removeEventListener(node, eventName, handler, options) {
    var capture = options && typeof options !== "boolean" ? options.capture : options;
    node.removeEventListener(eventName, handler, capture);
    if (handler.__once) node.removeEventListener(eventName, handler.__once, capture);
}
var $b4801b50bb692c05$export$2e2bcd8739ae039 = $b4801b50bb692c05$var$removeEventListener;


function $6f4ff0be9f4317a8$var$listen(node, eventName, handler, options) {
    (0, $8761242eac0c6658$export$2e2bcd8739ae039)(node, eventName, handler, options);
    return function() {
        (0, $b4801b50bb692c05$export$2e2bcd8739ae039)(node, eventName, handler, options);
    };
}
var $6f4ff0be9f4317a8$export$2e2bcd8739ae039 = $6f4ff0be9f4317a8$var$listen;


/**
 * Triggers an event on a given element.
 * 
 * @param node the element
 * @param eventName the event name to trigger
 * @param bubbles whether the event should bubble up
 * @param cancelable whether the event should be cancelable
 */ function $8588c7f4e2a9c883$export$2e2bcd8739ae039(node, eventName, bubbles, cancelable) {
    if (bubbles === void 0) bubbles = false;
    if (cancelable === void 0) cancelable = true;
    if (node) {
        var event = document.createEvent("HTMLEvents");
        event.initEvent(eventName, bubbles, cancelable);
        node.dispatchEvent(event);
    }
}


function $1f8cfc2ff9fa38b5$var$parseDuration(node) {
    var str = (0, $c87289290978bcff$export$2e2bcd8739ae039)(node, "transitionDuration") || "";
    var mult = str.indexOf("ms") === -1 ? 1000 : 1;
    return parseFloat(str) * mult;
}
function $1f8cfc2ff9fa38b5$var$emulateTransitionEnd(element, duration, padding) {
    if (padding === void 0) padding = 5;
    var called = false;
    var handle = setTimeout(function() {
        if (!called) (0, $8588c7f4e2a9c883$export$2e2bcd8739ae039)(element, "transitionend", true);
    }, duration + padding);
    var remove = (0, $6f4ff0be9f4317a8$export$2e2bcd8739ae039)(element, "transitionend", function() {
        called = true;
    }, {
        once: true
    });
    return function() {
        clearTimeout(handle);
        remove();
    };
}
function $1f8cfc2ff9fa38b5$export$2e2bcd8739ae039(element, handler, duration, padding) {
    if (duration == null) duration = $1f8cfc2ff9fa38b5$var$parseDuration(element) || 0;
    var removeEmulate = $1f8cfc2ff9fa38b5$var$emulateTransitionEnd(element, duration, padding);
    var remove = (0, $6f4ff0be9f4317a8$export$2e2bcd8739ae039)(element, "transitionend", handler);
    return function() {
        removeEmulate();
        remove();
    };
}


function $7bba330c7b456f60$var$parseDuration(node, property) {
    const str = (0, $c87289290978bcff$export$2e2bcd8739ae039)(node, property) || "";
    const mult = str.indexOf("ms") === -1 ? 1000 : 1;
    return parseFloat(str) * mult;
}
function $7bba330c7b456f60$export$2e2bcd8739ae039(element, handler) {
    const duration = $7bba330c7b456f60$var$parseDuration(element, "transitionDuration");
    const delay = $7bba330c7b456f60$var$parseDuration(element, "transitionDelay");
    const remove = (0, $1f8cfc2ff9fa38b5$export$2e2bcd8739ae039)(element, (e)=>{
        if (e.target === element) {
            remove();
            handler(e);
        }
    }, duration + delay);
}


/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */ function $fccac5144b1c363b$var$createChainedFunction(...funcs) {
    return funcs.filter((f)=>f != null).reduce((acc, f)=>{
        if (typeof f !== "function") throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
        if (acc === null) return f;
        return function chainedFunction(...args) {
            // @ts-ignore
            acc.apply(this, args);
            // @ts-ignore
            f.apply(this, args);
        };
    }, null);
}
var $fccac5144b1c363b$export$2e2bcd8739ae039 = $fccac5144b1c363b$var$createChainedFunction;


// reading a dimension prop will cause the browser to recalculate,
// which will let our animations work
function $3c67e709b3e3f7e3$export$2e2bcd8739ae039(node) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    node.offsetHeight;
}



var $iS7v4 = parcelRequire("iS7v4");



function $7d97267c2220ef09$export$2e2bcd8739ae039(componentOrElement) {
    if (componentOrElement && "setState" in componentOrElement) return (0, (/*@__PURE__*/$parcel$interopDefault($1d90405877b51491$exports))).findDOMNode(componentOrElement);
    return componentOrElement != null ? componentOrElement : null;
}



"use client";
// Normalizes Transition callbacks when nodeRef is used.
const $b6111160f9c4c7af$var$TransitionWrapper = /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($iS7v4))).forwardRef(({ onEnter: onEnter, onEntering: onEntering, onEntered: onEntered, onExit: onExit, onExiting: onExiting, onExited: onExited, addEndListener: addEndListener, children: children, childRef: childRef, ...props }, ref)=>{
    const nodeRef = (0, $iS7v4.useRef)(null);
    const mergedRef = (0, $3f06c887acf67efc$export$2e2bcd8739ae039)(nodeRef, childRef);
    const attachRef = (r)=>{
        mergedRef((0, $7d97267c2220ef09$export$2e2bcd8739ae039)(r));
    };
    const normalize = (callback)=>(param)=>{
            if (callback && nodeRef.current) callback(nodeRef.current, param);
        };
    /* eslint-disable react-hooks/exhaustive-deps */ const handleEnter = (0, $iS7v4.useCallback)(normalize(onEnter), [
        onEnter
    ]);
    const handleEntering = (0, $iS7v4.useCallback)(normalize(onEntering), [
        onEntering
    ]);
    const handleEntered = (0, $iS7v4.useCallback)(normalize(onEntered), [
        onEntered
    ]);
    const handleExit = (0, $iS7v4.useCallback)(normalize(onExit), [
        onExit
    ]);
    const handleExiting = (0, $iS7v4.useCallback)(normalize(onExiting), [
        onExiting
    ]);
    const handleExited = (0, $iS7v4.useCallback)(normalize(onExited), [
        onExited
    ]);
    const handleAddEndListener = (0, $iS7v4.useCallback)(normalize(addEndListener), [
        addEndListener
    ]);
    /* eslint-enable react-hooks/exhaustive-deps */ return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $53b9086095edce82$export$2e2bcd8739ae039), {
        ref: ref,
        ...props,
        onEnter: handleEnter,
        onEntered: handleEntered,
        onEntering: handleEntering,
        onExit: handleExit,
        onExited: handleExited,
        onExiting: handleExiting,
        addEndListener: handleAddEndListener,
        nodeRef: nodeRef,
        children: typeof children === "function" ? (status, innerProps)=>// TODO: Types for RTG missing innerProps, so need to cast.
            children(status, {
                ...innerProps,
                ref: attachRef
            }) : /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($iS7v4))).cloneElement(children, {
            ref: attachRef
        })
    });
});
var $b6111160f9c4c7af$export$2e2bcd8739ae039 = $b6111160f9c4c7af$var$TransitionWrapper;



const $e473760ec3a0643b$var$MARGINS = {
    height: [
        "marginTop",
        "marginBottom"
    ],
    width: [
        "marginLeft",
        "marginRight"
    ]
};
function $e473760ec3a0643b$var$getDefaultDimensionValue(dimension, elem) {
    const offset = `offset${dimension[0].toUpperCase()}${dimension.slice(1)}`;
    const value = elem[offset];
    const margins = $e473760ec3a0643b$var$MARGINS[dimension];
    return value + // @ts-ignore
    parseInt((0, $c87289290978bcff$export$2e2bcd8739ae039)(elem, margins[0]), 10) + // @ts-ignore
    parseInt((0, $c87289290978bcff$export$2e2bcd8739ae039)(elem, margins[1]), 10);
}
const $e473760ec3a0643b$var$collapseStyles = {
    [(0, $53b9086095edce82$export$84cbff306f539230)]: "collapse",
    [(0, $53b9086095edce82$export$4aacc83d4d59139f)]: "collapsing",
    [(0, $53b9086095edce82$export$df38205c966be359)]: "collapsing",
    [(0, $53b9086095edce82$export$78e9e6e3e014d60a)]: "collapse show"
};
const $e473760ec3a0643b$var$Collapse = /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($iS7v4))).forwardRef(({ onEnter: onEnter, onEntering: onEntering, onEntered: onEntered, onExit: onExit, onExiting: onExiting, className: className, children: children, dimension: dimension = "height", in: inProp = false, timeout: timeout = 300, mountOnEnter: mountOnEnter = false, unmountOnExit: unmountOnExit = false, appear: appear = false, getDimensionValue: getDimensionValue = $e473760ec3a0643b$var$getDefaultDimensionValue, ...props }, ref)=>{
    /* Compute dimension */ const computedDimension = typeof dimension === "function" ? dimension() : dimension;
    /* -- Expanding -- */ const handleEnter = (0, $iS7v4.useMemo)(()=>(0, $fccac5144b1c363b$export$2e2bcd8739ae039)((elem)=>{
            elem.style[computedDimension] = "0";
        }, onEnter), [
        computedDimension,
        onEnter
    ]);
    const handleEntering = (0, $iS7v4.useMemo)(()=>(0, $fccac5144b1c363b$export$2e2bcd8739ae039)((elem)=>{
            const scroll = `scroll${computedDimension[0].toUpperCase()}${computedDimension.slice(1)}`;
            elem.style[computedDimension] = `${elem[scroll]}px`;
        }, onEntering), [
        computedDimension,
        onEntering
    ]);
    const handleEntered = (0, $iS7v4.useMemo)(()=>(0, $fccac5144b1c363b$export$2e2bcd8739ae039)((elem)=>{
            elem.style[computedDimension] = null;
        }, onEntered), [
        computedDimension,
        onEntered
    ]);
    /* -- Collapsing -- */ const handleExit = (0, $iS7v4.useMemo)(()=>(0, $fccac5144b1c363b$export$2e2bcd8739ae039)((elem)=>{
            elem.style[computedDimension] = `${getDimensionValue(computedDimension, elem)}px`;
            (0, $3c67e709b3e3f7e3$export$2e2bcd8739ae039)(elem);
        }, onExit), [
        onExit,
        getDimensionValue,
        computedDimension
    ]);
    const handleExiting = (0, $iS7v4.useMemo)(()=>(0, $fccac5144b1c363b$export$2e2bcd8739ae039)((elem)=>{
            elem.style[computedDimension] = null;
        }, onExiting), [
        computedDimension,
        onExiting
    ]);
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $b6111160f9c4c7af$export$2e2bcd8739ae039), {
        ref: ref,
        addEndListener: (0, $7bba330c7b456f60$export$2e2bcd8739ae039),
        ...props,
        "aria-expanded": props.role ? inProp : null,
        onEnter: handleEnter,
        onEntering: handleEntering,
        onEntered: handleEntered,
        onExit: handleExit,
        onExiting: handleExiting,
        childRef: children.ref,
        in: inProp,
        timeout: timeout,
        mountOnEnter: mountOnEnter,
        unmountOnExit: unmountOnExit,
        appear: appear,
        children: (state, innerProps)=>/*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($iS7v4))).cloneElement(children, {
                ...innerProps,
                className: (0, (/*@__PURE__*/$parcel$interopDefault($b64d07ce5c97f908$exports)))(className, children.props.className, $e473760ec3a0643b$var$collapseStyles[state], computedDimension === "width" && "collapse-horizontal")
            })
    });
});
var // @ts-ignore
$e473760ec3a0643b$export$2e2bcd8739ae039 = $e473760ec3a0643b$var$Collapse;





"use client";
const $048bc6cbbc8d55fd$var$NavbarCollapse = /*#__PURE__*/ $iS7v4.forwardRef(({ children: children, bsPrefix: bsPrefix, ...props }, ref)=>{
    bsPrefix = (0, $24d14d90d6b73476$export$7f387860ebffb32c)(bsPrefix, "navbar-collapse");
    const context = (0, $iS7v4.useContext)((0, $b43685ca66689b3a$export$2e2bcd8739ae039));
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $e473760ec3a0643b$export$2e2bcd8739ae039), {
        in: !!(context && context.expanded),
        ...props,
        children: /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)("div", {
            ref: ref,
            className: bsPrefix,
            children: children
        })
    });
});
$048bc6cbbc8d55fd$var$NavbarCollapse.displayName = "NavbarCollapse";
var $048bc6cbbc8d55fd$export$2e2bcd8739ae039 = $048bc6cbbc8d55fd$var$NavbarCollapse;




var $iS7v4 = parcelRequire("iS7v4");




"use client";
const $69f59a1fe324f963$var$NavbarToggle = /*#__PURE__*/ $iS7v4.forwardRef(({ bsPrefix: bsPrefix, className: className, children: children, label: label = "Toggle navigation", // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "button", onClick: onClick, ...props }, ref)=>{
    bsPrefix = (0, $24d14d90d6b73476$export$7f387860ebffb32c)(bsPrefix, "navbar-toggler");
    const { onToggle: onToggle, expanded: expanded } = (0, $iS7v4.useContext)((0, $b43685ca66689b3a$export$2e2bcd8739ae039)) || {};
    const handleClick = (0, $519cffe0dc941fe3$export$2e2bcd8739ae039)((e)=>{
        if (onClick) onClick(e);
        if (onToggle) onToggle();
    });
    if (Component === "button") props.type = "button";
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)(Component, {
        ...props,
        ref: ref,
        onClick: handleClick,
        "aria-label": label,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($b64d07ce5c97f908$exports)))(className, bsPrefix, !expanded && "collapsed"),
        children: children || /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)("span", {
            className: `${bsPrefix}-icon`
        })
    });
});
$69f59a1fe324f963$var$NavbarToggle.displayName = "NavbarToggle";
var $69f59a1fe324f963$export$2e2bcd8739ae039 = $69f59a1fe324f963$var$NavbarToggle;



var $iS7v4 = parcelRequire("iS7v4");



var $iS7v4 = parcelRequire("iS7v4");
const $cd20cd18fb7c1a24$var$matchersByWindow = new WeakMap();
const $cd20cd18fb7c1a24$var$getMatcher = (query, targetWindow)=>{
    if (!query || !targetWindow) return undefined;
    const matchers = $cd20cd18fb7c1a24$var$matchersByWindow.get(targetWindow) || new Map();
    $cd20cd18fb7c1a24$var$matchersByWindow.set(targetWindow, matchers);
    let mql = matchers.get(query);
    if (!mql) {
        mql = targetWindow.matchMedia(query);
        mql.refCount = 0;
        matchers.set(mql.media, mql);
    }
    return mql;
};
function $cd20cd18fb7c1a24$export$2e2bcd8739ae039(query, targetWindow = typeof window === "undefined" ? undefined : window) {
    const mql = $cd20cd18fb7c1a24$var$getMatcher(query, targetWindow);
    const [matches, setMatches] = (0, $iS7v4.useState)(()=>mql ? mql.matches : false);
    (0, $57e9ca83ff7c17c5$export$2e2bcd8739ae039)(()=>{
        let mql = $cd20cd18fb7c1a24$var$getMatcher(query, targetWindow);
        if (!mql) return setMatches(false);
        let matchers = $cd20cd18fb7c1a24$var$matchersByWindow.get(targetWindow);
        const handleChange = ()=>{
            setMatches(mql.matches);
        };
        mql.refCount++;
        mql.addListener(handleChange);
        handleChange();
        return ()=>{
            mql.removeListener(handleChange);
            mql.refCount--;
            if (mql.refCount <= 0) matchers == null || matchers.delete(mql.media);
            mql = undefined;
        };
    }, [
        query
    ]);
    return matches;
}



var $iS7v4 = parcelRequire("iS7v4");
function $922434beb8d00c54$export$9c6950edc251641e(breakpointValues) {
    const names = Object.keys(breakpointValues);
    function and(query, next) {
        if (query === next) return next;
        return query ? `${query} and ${next}` : next;
    }
    function getNext(breakpoint) {
        return names[Math.min(names.indexOf(breakpoint) + 1, names.length - 1)];
    }
    function getMaxQuery(breakpoint) {
        const next = getNext(breakpoint);
        let value = breakpointValues[next];
        if (typeof value === "number") value = `${value - 0.2}px`;
        else value = `calc(${value} - 0.2px)`;
        return `(max-width: ${value})`;
    }
    function getMinQuery(breakpoint) {
        let value = breakpointValues[breakpoint];
        if (typeof value === "number") value = `${value}px`;
        return `(min-width: ${value})`;
    }
    /**
   * Match a set of breakpoints
   *
   * ```tsx
   * const MidSizeOnly = () => {
   *   const isMid = useBreakpoint({ lg: 'down', sm: 'up' });
   *
   *   if (isMid) return <div>On a Reasonable sized Screen!</div>
   *   return null;
   * }
   * ```
   * @param breakpointMap An object map of breakpoints and directions, queries are constructed using "and" to join
   * breakpoints together
   * @param window Optionally specify the target window to match against (useful when rendering into iframes)
   */ /**
   * Match a single breakpoint exactly, up, or down.
   *
   * ```tsx
   * const PhoneOnly = () => {
   *   const isSmall = useBreakpoint('sm', 'down');
   *
   *   if (isSmall) return <div>On a Small Screen!</div>
   *   return null;
   * }
   * ```
   *
   * @param breakpoint The breakpoint key
   * @param direction A direction 'up' for a max, 'down' for min, true to match only the breakpoint
   * @param window Optionally specify the target window to match against (useful when rendering into iframes)
   */ function useBreakpoint(breakpointOrMap, direction, window) {
        let breakpointMap;
        if (typeof breakpointOrMap === "object") {
            breakpointMap = breakpointOrMap;
            window = direction;
            direction = true;
        } else {
            direction = direction || true;
            breakpointMap = {
                [breakpointOrMap]: direction
            };
        }
        let query = (0, $iS7v4.useMemo)(()=>Object.entries(breakpointMap).reduce((query, [key, direction])=>{
                if (direction === "up" || direction === true) query = and(query, getMinQuery(key));
                if (direction === "down" || direction === true) query = and(query, getMaxQuery(key));
                return query;
            }, ""), [
            JSON.stringify(breakpointMap)
        ]);
        return (0, $cd20cd18fb7c1a24$export$2e2bcd8739ae039)(query, window);
    }
    return useBreakpoint;
}
const $922434beb8d00c54$var$useBreakpoint = $922434beb8d00c54$export$9c6950edc251641e({
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400
});
var $922434beb8d00c54$export$2e2bcd8739ae039 = $922434beb8d00c54$var$useBreakpoint;




var $iS7v4 = parcelRequire("iS7v4");

function $fa3da13133bc1797$export$2e2bcd8739ae039(doc) {
    if (doc === void 0) doc = (0, $dc2da9486e1d16d8$export$2e2bcd8739ae039)();
    // Support: IE 9 only
    // IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
    try {
        var active = doc.activeElement; // IE11 returns a seemingly empty object in some cases when accessing
        // document.activeElement from an <iframe>
        if (!active || !active.nodeName) return null;
        return active;
    } catch (e) {
        /* ie throws if no active element */ return doc.body;
    }
}


/* eslint-disable no-bitwise, no-cond-assign */ /**
 * Checks if an element contains another given element.
 * 
 * @param context the context element
 * @param node the element to check
 */ function $12a404e678dd73b0$export$2e2bcd8739ae039(context, node) {
    // HTML DOM and SVG DOM may have different support levels,
    // so we need to check on context instead of a document root element.
    if (context.contains) return context.contains(node);
    if (context.compareDocumentPosition) return context === node || !!(context.compareDocumentPosition(node) & 16);
}





var $iS7v4 = parcelRequire("iS7v4");



var $iS7v4 = parcelRequire("iS7v4");
function $4722892470ac852b$export$2e2bcd8739ae039(value) {
    const valueRef = (0, $iS7v4.useRef)(value);
    valueRef.current = value;
    return valueRef;
}



var $iS7v4 = parcelRequire("iS7v4");
function $96debca6267b8725$export$2e2bcd8739ae039(fn) {
    const onUnmount = (0, $4722892470ac852b$export$2e2bcd8739ae039)(fn);
    (0, $iS7v4.useEffect)(()=>()=>onUnmount.current(), []);
}






/**
 * Get the width of the vertical window scrollbar if it's visible
 */ function $77e0ffe582020577$export$2e2bcd8739ae039(ownerDocument = document) {
    const window = ownerDocument.defaultView;
    return Math.abs(window.innerWidth - ownerDocument.documentElement.clientWidth);
}


const $56c2c567e64635bc$export$1a88c12b8b979fa0 = (0, $94c5d89a3b48265e$export$5cc3b7b83e34ade7)("modal-open");
/**
 * Manages a stack of Modals as well as ensuring
 * body scrolling is is disabled and padding accounted for
 */ class $56c2c567e64635bc$var$ModalManager {
    constructor({ ownerDocument: ownerDocument, handleContainerOverflow: handleContainerOverflow = true, isRTL: isRTL = false } = {}){
        this.handleContainerOverflow = handleContainerOverflow;
        this.isRTL = isRTL;
        this.modals = [];
        this.ownerDocument = ownerDocument;
    }
    getScrollbarWidth() {
        return (0, $77e0ffe582020577$export$2e2bcd8739ae039)(this.ownerDocument);
    }
    getElement() {
        return (this.ownerDocument || document).body;
    }
    setModalAttributes(_modal) {
    // For overriding
    }
    removeModalAttributes(_modal) {
    // For overriding
    }
    setContainerStyle(containerState) {
        const style = {
            overflow: "hidden"
        };
        // we are only interested in the actual `style` here
        // because we will override it
        const paddingProp = this.isRTL ? "paddingLeft" : "paddingRight";
        const container = this.getElement();
        containerState.style = {
            overflow: container.style.overflow,
            [paddingProp]: container.style[paddingProp]
        };
        if (containerState.scrollBarWidth) // use computed style, here to get the real padding
        // to add our scrollbar width
        style[paddingProp] = `${parseInt((0, $c87289290978bcff$export$2e2bcd8739ae039)(container, paddingProp) || "0", 10) + containerState.scrollBarWidth}px`;
        container.setAttribute($56c2c567e64635bc$export$1a88c12b8b979fa0, "");
        (0, $c87289290978bcff$export$2e2bcd8739ae039)(container, style);
    }
    reset() {
        [
            ...this.modals
        ].forEach((m)=>this.remove(m));
    }
    removeContainerStyle(containerState) {
        const container = this.getElement();
        container.removeAttribute($56c2c567e64635bc$export$1a88c12b8b979fa0);
        Object.assign(container.style, containerState.style);
    }
    add(modal) {
        let modalIdx = this.modals.indexOf(modal);
        if (modalIdx !== -1) return modalIdx;
        modalIdx = this.modals.length;
        this.modals.push(modal);
        this.setModalAttributes(modal);
        if (modalIdx !== 0) return modalIdx;
        this.state = {
            scrollBarWidth: this.getScrollbarWidth(),
            style: {}
        };
        if (this.handleContainerOverflow) this.setContainerStyle(this.state);
        return modalIdx;
    }
    remove(modal) {
        const modalIdx = this.modals.indexOf(modal);
        if (modalIdx === -1) return;
        this.modals.splice(modalIdx, 1);
        // if that was the last modal in a container,
        // clean up the container
        if (!this.modals.length && this.handleContainerOverflow) this.removeContainerStyle(this.state);
        this.removeModalAttributes(modal);
    }
    isTopModal(modal) {
        return !!this.modals.length && this.modals[this.modals.length - 1] === modal;
    }
}
var $56c2c567e64635bc$export$2e2bcd8739ae039 = $56c2c567e64635bc$var$ModalManager;





var $iS7v4 = parcelRequire("iS7v4");

var $iS7v4 = parcelRequire("iS7v4");

const $cd9066c02dc32b74$var$Context = /*#__PURE__*/ (0, $iS7v4.createContext)((0, $e5ac62463ba618b0$export$2e2bcd8739ae039) ? window : undefined);
const $cd9066c02dc32b74$export$f7d306aeb1cf5fbc = $cd9066c02dc32b74$var$Context.Provider;
function $cd9066c02dc32b74$export$2e2bcd8739ae039() {
    return (0, $iS7v4.useContext)($cd9066c02dc32b74$var$Context);
}


const $4379f6e83ca5d5bc$export$c91fd81e6d65f84a = (ref, document)=>{
    if (!(0, $e5ac62463ba618b0$export$2e2bcd8739ae039)) return null;
    if (ref == null) return (document || (0, $dc2da9486e1d16d8$export$2e2bcd8739ae039)()).body;
    if (typeof ref === "function") ref = ref();
    if (ref && "current" in ref) ref = ref.current;
    if (ref && ("nodeType" in ref || ref.getBoundingClientRect)) return ref;
    return null;
};
function $4379f6e83ca5d5bc$export$2e2bcd8739ae039(ref, onResolved) {
    const window = (0, $cd9066c02dc32b74$export$2e2bcd8739ae039)();
    const [resolvedRef, setRef] = (0, $iS7v4.useState)(()=>$4379f6e83ca5d5bc$export$c91fd81e6d65f84a(ref, window == null ? void 0 : window.document));
    if (!resolvedRef) {
        const earlyRef = $4379f6e83ca5d5bc$export$c91fd81e6d65f84a(ref);
        if (earlyRef) setRef(earlyRef);
    }
    (0, $iS7v4.useEffect)(()=>{
        if (onResolved && resolvedRef) onResolved(resolvedRef);
    }, [
        onResolved,
        resolvedRef
    ]);
    (0, $iS7v4.useEffect)(()=>{
        const nextRef = $4379f6e83ca5d5bc$export$c91fd81e6d65f84a(ref);
        if (nextRef !== resolvedRef) setRef(nextRef);
    }, [
        ref,
        resolvedRef
    ]);
    return resolvedRef;
}







var $iS7v4 = parcelRequire("iS7v4");



var $iS7v4 = parcelRequire("iS7v4");
function $a86ed66913994eee$var$NoopTransition({ children: children, in: inProp, onExited: onExited, mountOnEnter: mountOnEnter, unmountOnExit: unmountOnExit }) {
    const ref = (0, $iS7v4.useRef)(null);
    const hasEnteredRef = (0, $iS7v4.useRef)(inProp);
    const handleExited = (0, $519cffe0dc941fe3$export$2e2bcd8739ae039)(onExited);
    (0, $iS7v4.useEffect)(()=>{
        if (inProp) hasEnteredRef.current = true;
        else handleExited(ref.current);
    }, [
        inProp,
        handleExited
    ]);
    const combinedRef = (0, $3f06c887acf67efc$export$2e2bcd8739ae039)(ref, children.ref);
    const child = /*#__PURE__*/ (0, $iS7v4.cloneElement)(children, {
        ref: combinedRef
    });
    if (inProp) return child;
    if (unmountOnExit) return null;
    if (!hasEnteredRef.current && mountOnEnter) return null;
    return child;
}
var $a86ed66913994eee$export$2e2bcd8739ae039 = $a86ed66913994eee$var$NoopTransition;



var $iS7v4 = parcelRequire("iS7v4");

var $iS7v4 = parcelRequire("iS7v4");


var $iS7v4 = parcelRequire("iS7v4");
function $66b537dd3a305eb3$export$806fcc22e55e107d(e) {
    return e.code === "Escape" || e.keyCode === 27;
}
function $66b537dd3a305eb3$export$13e065f3a74cfe36() {
    const parts = $iS7v4.version.split(".");
    return {
        major: +parts[0],
        minor: +parts[1],
        patch: +parts[2]
    };
}


const $12e5e41f162b3b70$var$_excluded = [
    "onEnter",
    "onEntering",
    "onEntered",
    "onExit",
    "onExiting",
    "onExited",
    "addEndListener",
    "children"
];
function $12e5e41f162b3b70$var$_objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function $12e5e41f162b3b70$export$2e2bcd8739ae039(_ref) {
    let { onEnter: onEnter, onEntering: onEntering, onEntered: onEntered, onExit: onExit, onExiting: onExiting, onExited: onExited, addEndListener: addEndListener, children: children } = _ref, props = $12e5e41f162b3b70$var$_objectWithoutPropertiesLoose(_ref, $12e5e41f162b3b70$var$_excluded);
    const { major: major } = (0, $66b537dd3a305eb3$export$13e065f3a74cfe36)();
    const childRef = major >= 19 ? children.props.ref : children.ref;
    const nodeRef = (0, $iS7v4.useRef)(null);
    const mergedRef = (0, $3f06c887acf67efc$export$2e2bcd8739ae039)(nodeRef, typeof children === "function" ? null : childRef);
    const normalize = (callback)=>(param)=>{
            if (callback && nodeRef.current) callback(nodeRef.current, param);
        };
    /* eslint-disable react-hooks/exhaustive-deps */ const handleEnter = (0, $iS7v4.useCallback)(normalize(onEnter), [
        onEnter
    ]);
    const handleEntering = (0, $iS7v4.useCallback)(normalize(onEntering), [
        onEntering
    ]);
    const handleEntered = (0, $iS7v4.useCallback)(normalize(onEntered), [
        onEntered
    ]);
    const handleExit = (0, $iS7v4.useCallback)(normalize(onExit), [
        onExit
    ]);
    const handleExiting = (0, $iS7v4.useCallback)(normalize(onExiting), [
        onExiting
    ]);
    const handleExited = (0, $iS7v4.useCallback)(normalize(onExited), [
        onExited
    ]);
    const handleAddEndListener = (0, $iS7v4.useCallback)(normalize(addEndListener), [
        addEndListener
    ]);
    /* eslint-enable react-hooks/exhaustive-deps */ return Object.assign({}, props, {
        nodeRef: nodeRef
    }, onEnter && {
        onEnter: handleEnter
    }, onEntering && {
        onEntering: handleEntering
    }, onEntered && {
        onEntered: handleEntered
    }, onExit && {
        onExit: handleExit
    }, onExiting && {
        onExiting: handleExiting
    }, onExited && {
        onExited: handleExited
    }, addEndListener && {
        addEndListener: handleAddEndListener
    }, {
        children: typeof children === "function" ? (status, innerProps)=>// TODO: Types for RTG missing innerProps, so need to cast.
            children(status, Object.assign({}, innerProps, {
                ref: mergedRef
            })) : /*#__PURE__*/ (0, $iS7v4.cloneElement)(children, {
            ref: mergedRef
        })
    });
}



const $2dc540ecd14ad73f$var$_excluded = [
    "component"
];
function $2dc540ecd14ad73f$var$_objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
// Normalizes Transition callbacks when nodeRef is used.
const $2dc540ecd14ad73f$var$RTGTransition = /*#__PURE__*/ $iS7v4.forwardRef((_ref, ref)=>{
    let { component: Component } = _ref, props = $2dc540ecd14ad73f$var$_objectWithoutPropertiesLoose(_ref, $2dc540ecd14ad73f$var$_excluded);
    const transitionProps = (0, $12e5e41f162b3b70$export$2e2bcd8739ae039)(props);
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)(Component, Object.assign({
        ref: ref
    }, transitionProps));
});
var $2dc540ecd14ad73f$export$2e2bcd8739ae039 = $2dc540ecd14ad73f$var$RTGTransition;



function $bd4cb45e5c8173aa$export$7b286972b8d8ccbf({ in: inProp, onTransition: onTransition }) {
    const ref = (0, $iS7v4.useRef)(null);
    const isInitialRef = (0, $iS7v4.useRef)(true);
    const handleTransition = (0, $519cffe0dc941fe3$export$2e2bcd8739ae039)(onTransition);
    (0, $57e9ca83ff7c17c5$export$2e2bcd8739ae039)(()=>{
        if (!ref.current) return undefined;
        let stale = false;
        handleTransition({
            in: inProp,
            element: ref.current,
            initial: isInitialRef.current,
            isStale: ()=>stale
        });
        return ()=>{
            stale = true;
        };
    }, [
        inProp,
        handleTransition
    ]);
    (0, $57e9ca83ff7c17c5$export$2e2bcd8739ae039)(()=>{
        isInitialRef.current = false;
        // this is for strict mode
        return ()=>{
            isInitialRef.current = true;
        };
    }, []);
    return ref;
}
function $bd4cb45e5c8173aa$export$2e2bcd8739ae039({ children: children, in: inProp, onExited: onExited, onEntered: onEntered, transition: transition }) {
    const [exited, setExited] = (0, $iS7v4.useState)(!inProp);
    // TODO: I think this needs to be in an effect
    if (inProp && exited) setExited(false);
    const ref = $bd4cb45e5c8173aa$export$7b286972b8d8ccbf({
        in: !!inProp,
        onTransition: (options)=>{
            const onFinish = ()=>{
                if (options.isStale()) return;
                if (options.in) onEntered == null || onEntered(options.element, options.initial);
                else {
                    setExited(true);
                    onExited == null || onExited(options.element);
                }
            };
            Promise.resolve(transition(options)).then(onFinish, (error)=>{
                if (!options.in) setExited(true);
                throw error;
            });
        }
    });
    const combinedRef = (0, $3f06c887acf67efc$export$2e2bcd8739ae039)(ref, children.ref);
    return exited && !inProp ? null : /*#__PURE__*/ (0, $iS7v4.cloneElement)(children, {
        ref: combinedRef
    });
}
function $bd4cb45e5c8173aa$export$f41d64aae6d6dba5(component, runTransition, props) {
    if (component) return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $2dc540ecd14ad73f$export$2e2bcd8739ae039), Object.assign({}, props, {
        component: component
    }));
    if (runTransition) return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)($bd4cb45e5c8173aa$export$2e2bcd8739ae039, Object.assign({}, props, {
        transition: runTransition
    }));
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $a86ed66913994eee$export$2e2bcd8739ae039), Object.assign({}, props));
}




const $054afefe8275a005$var$_excluded = [
    "show",
    "role",
    "className",
    "style",
    "children",
    "backdrop",
    "keyboard",
    "onBackdropClick",
    "onEscapeKeyDown",
    "transition",
    "runTransition",
    "backdropTransition",
    "runBackdropTransition",
    "autoFocus",
    "enforceFocus",
    "restoreFocus",
    "restoreFocusOptions",
    "renderDialog",
    "renderBackdrop",
    "manager",
    "container",
    "onShow",
    "onHide",
    "onExit",
    "onExited",
    "onExiting",
    "onEnter",
    "onEntering",
    "onEntered"
];
function $054afefe8275a005$var$_objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
let $054afefe8275a005$var$manager;
function $054afefe8275a005$var$getManager(window) {
    if (!$054afefe8275a005$var$manager) $054afefe8275a005$var$manager = new (0, $56c2c567e64635bc$export$2e2bcd8739ae039)({
        ownerDocument: window == null ? void 0 : window.document
    });
    return $054afefe8275a005$var$manager;
}
function $054afefe8275a005$var$useModalManager(provided) {
    const window = (0, $cd9066c02dc32b74$export$2e2bcd8739ae039)();
    const modalManager = provided || $054afefe8275a005$var$getManager(window);
    const modal = (0, $iS7v4.useRef)({
        dialog: null,
        backdrop: null
    });
    return Object.assign(modal.current, {
        add: ()=>modalManager.add(modal.current),
        remove: ()=>modalManager.remove(modal.current),
        isTopModal: ()=>modalManager.isTopModal(modal.current),
        setDialogRef: (0, $iS7v4.useCallback)((ref)=>{
            modal.current.dialog = ref;
        }, []),
        setBackdropRef: (0, $iS7v4.useCallback)((ref)=>{
            modal.current.backdrop = ref;
        }, [])
    });
}
const $054afefe8275a005$var$Modal = /*#__PURE__*/ (0, $iS7v4.forwardRef)((_ref, ref)=>{
    let { show: show = false, role: role = "dialog", className: className, style: style, children: children, backdrop: backdrop = true, keyboard: keyboard = true, onBackdropClick: onBackdropClick, onEscapeKeyDown: onEscapeKeyDown, transition: transition, runTransition: runTransition, backdropTransition: backdropTransition, runBackdropTransition: runBackdropTransition, autoFocus: autoFocus = true, enforceFocus: enforceFocus = true, restoreFocus: restoreFocus = true, restoreFocusOptions: restoreFocusOptions, renderDialog: renderDialog, renderBackdrop: renderBackdrop = (props)=>/*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)("div", Object.assign({}, props)), manager: providedManager, container: containerRef, onShow: onShow, onHide: onHide = ()=>{}, onExit: onExit, onExited: onExited, onExiting: onExiting, onEnter: onEnter, onEntering: onEntering, onEntered: onEntered } = _ref, rest = $054afefe8275a005$var$_objectWithoutPropertiesLoose(_ref, $054afefe8275a005$var$_excluded);
    const ownerWindow = (0, $cd9066c02dc32b74$export$2e2bcd8739ae039)();
    const container = (0, $4379f6e83ca5d5bc$export$2e2bcd8739ae039)(containerRef);
    const modal = $054afefe8275a005$var$useModalManager(providedManager);
    const isMounted = (0, $f5c4319567c47a83$export$2e2bcd8739ae039)();
    const prevShow = (0, $dffc4990d29b3856$export$2e2bcd8739ae039)(show);
    const [exited, setExited] = (0, $iS7v4.useState)(!show);
    const lastFocusRef = (0, $iS7v4.useRef)(null);
    (0, $iS7v4.useImperativeHandle)(ref, ()=>modal, [
        modal
    ]);
    if ((0, $e5ac62463ba618b0$export$2e2bcd8739ae039) && !prevShow && show) lastFocusRef.current = (0, $fa3da13133bc1797$export$2e2bcd8739ae039)(ownerWindow == null ? void 0 : ownerWindow.document);
    // TODO: I think this needs to be in an effect
    if (show && exited) setExited(false);
    const handleShow = (0, $519cffe0dc941fe3$export$2e2bcd8739ae039)(()=>{
        modal.add();
        removeKeydownListenerRef.current = (0, $6f4ff0be9f4317a8$export$2e2bcd8739ae039)(document, "keydown", handleDocumentKeyDown);
        removeFocusListenerRef.current = (0, $6f4ff0be9f4317a8$export$2e2bcd8739ae039)(document, "focus", // the timeout is necessary b/c this will run before the new modal is mounted
        // and so steals focus from it
        ()=>setTimeout(handleEnforceFocus), true);
        if (onShow) onShow();
        // autofocus after onShow to not trigger a focus event for previous
        // modals before this one is shown.
        if (autoFocus) {
            var _modal$dialog$ownerDo, _modal$dialog;
            const currentActiveElement = (0, $fa3da13133bc1797$export$2e2bcd8739ae039)((_modal$dialog$ownerDo = (_modal$dialog = modal.dialog) == null ? void 0 : _modal$dialog.ownerDocument) != null ? _modal$dialog$ownerDo : ownerWindow == null ? void 0 : ownerWindow.document);
            if (modal.dialog && currentActiveElement && !(0, $12a404e678dd73b0$export$2e2bcd8739ae039)(modal.dialog, currentActiveElement)) {
                lastFocusRef.current = currentActiveElement;
                modal.dialog.focus();
            }
        }
    });
    const handleHide = (0, $519cffe0dc941fe3$export$2e2bcd8739ae039)(()=>{
        modal.remove();
        removeKeydownListenerRef.current == null || removeKeydownListenerRef.current();
        removeFocusListenerRef.current == null || removeFocusListenerRef.current();
        if (restoreFocus) {
            var _lastFocusRef$current;
            // Support: <=IE11 doesn't support `focus()` on svg elements (RB: #917)
            (_lastFocusRef$current = lastFocusRef.current) == null || _lastFocusRef$current.focus == null || _lastFocusRef$current.focus(restoreFocusOptions);
            lastFocusRef.current = null;
        }
    });
    // TODO: try and combine these effects: https://github.com/react-bootstrap/react-overlays/pull/794#discussion_r409954120
    // Show logic when:
    //  - show is `true` _and_ `container` has resolved
    (0, $iS7v4.useEffect)(()=>{
        if (!show || !container) return;
        handleShow();
    }, [
        show,
        container,
        /* should never change: */ handleShow
    ]);
    // Hide cleanup logic when:
    //  - `exited` switches to true
    //  - component unmounts;
    (0, $iS7v4.useEffect)(()=>{
        if (!exited) return;
        handleHide();
    }, [
        exited,
        handleHide
    ]);
    (0, $96debca6267b8725$export$2e2bcd8739ae039)(()=>{
        handleHide();
    });
    // --------------------------------
    const handleEnforceFocus = (0, $519cffe0dc941fe3$export$2e2bcd8739ae039)(()=>{
        if (!enforceFocus || !isMounted() || !modal.isTopModal()) return;
        const currentActiveElement = (0, $fa3da13133bc1797$export$2e2bcd8739ae039)(ownerWindow == null ? void 0 : ownerWindow.document);
        if (modal.dialog && currentActiveElement && !(0, $12a404e678dd73b0$export$2e2bcd8739ae039)(modal.dialog, currentActiveElement)) modal.dialog.focus();
    });
    const handleBackdropClick = (0, $519cffe0dc941fe3$export$2e2bcd8739ae039)((e)=>{
        if (e.target !== e.currentTarget) return;
        onBackdropClick == null || onBackdropClick(e);
        if (backdrop === true) onHide();
    });
    const handleDocumentKeyDown = (0, $519cffe0dc941fe3$export$2e2bcd8739ae039)((e)=>{
        if (keyboard && (0, $66b537dd3a305eb3$export$806fcc22e55e107d)(e) && modal.isTopModal()) {
            onEscapeKeyDown == null || onEscapeKeyDown(e);
            if (!e.defaultPrevented) onHide();
        }
    });
    const removeFocusListenerRef = (0, $iS7v4.useRef)();
    const removeKeydownListenerRef = (0, $iS7v4.useRef)();
    const handleHidden = (...args)=>{
        setExited(true);
        onExited == null || onExited(...args);
    };
    if (!container) return null;
    const dialogProps = Object.assign({
        role: role,
        ref: modal.setDialogRef,
        // apparently only works on the dialog role element
        "aria-modal": role === "dialog" ? true : undefined
    }, rest, {
        style: style,
        className: className,
        tabIndex: -1
    });
    let dialog = renderDialog ? renderDialog(dialogProps) : /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)("div", Object.assign({}, dialogProps, {
        children: /*#__PURE__*/ $iS7v4.cloneElement(children, {
            role: "document"
        })
    }));
    dialog = (0, $bd4cb45e5c8173aa$export$f41d64aae6d6dba5)(transition, runTransition, {
        unmountOnExit: true,
        mountOnEnter: true,
        appear: true,
        in: !!show,
        onExit: onExit,
        onExiting: onExiting,
        onExited: handleHidden,
        onEnter: onEnter,
        onEntering: onEntering,
        onEntered: onEntered,
        children: dialog
    });
    let backdropElement = null;
    if (backdrop) {
        backdropElement = renderBackdrop({
            ref: modal.setBackdropRef,
            onClick: handleBackdropClick
        });
        backdropElement = (0, $bd4cb45e5c8173aa$export$f41d64aae6d6dba5)(backdropTransition, runBackdropTransition, {
            in: !!show,
            appear: true,
            mountOnEnter: true,
            unmountOnExit: true,
            children: backdropElement
        });
    }
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $a9d3d534d399c2da$exports.Fragment), {
        children: /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($1d90405877b51491$exports))).createPortal(/*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsxs)((0, $a9d3d534d399c2da$exports.Fragment), {
            children: [
                backdropElement,
                dialog
            ]
        }), container)
    });
});
$054afefe8275a005$var$Modal.displayName = "Modal";
var $054afefe8275a005$export$2e2bcd8739ae039 = Object.assign($054afefe8275a005$var$Modal, {
    Manager: (0, $56c2c567e64635bc$export$2e2bcd8739ae039)
});




var $iS7v4 = parcelRequire("iS7v4");





const $f7ae897b6009f71e$var$fadeStyles = {
    [(0, $53b9086095edce82$export$df38205c966be359)]: "show",
    [(0, $53b9086095edce82$export$78e9e6e3e014d60a)]: "show"
};
const $f7ae897b6009f71e$var$Fade = /*#__PURE__*/ $iS7v4.forwardRef(({ className: className, children: children, transitionClasses: transitionClasses = {}, onEnter: onEnter, ...rest }, ref)=>{
    const props = {
        in: false,
        timeout: 300,
        mountOnEnter: false,
        unmountOnExit: false,
        appear: false,
        ...rest
    };
    const handleEnter = (0, $iS7v4.useCallback)((node, isAppearing)=>{
        (0, $3c67e709b3e3f7e3$export$2e2bcd8739ae039)(node);
        onEnter == null || onEnter(node, isAppearing);
    }, [
        onEnter
    ]);
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $b6111160f9c4c7af$export$2e2bcd8739ae039), {
        ref: ref,
        addEndListener: (0, $7bba330c7b456f60$export$2e2bcd8739ae039),
        ...props,
        onEnter: handleEnter,
        childRef: children.ref,
        children: (status, innerProps)=>/*#__PURE__*/ $iS7v4.cloneElement(children, {
                ...innerProps,
                className: (0, (/*@__PURE__*/$parcel$interopDefault($b64d07ce5c97f908$exports)))("fade", className, children.props.className, $f7ae897b6009f71e$var$fadeStyles[status], transitionClasses[status])
            })
    });
});
$f7ae897b6009f71e$var$Fade.displayName = "Fade";
var $f7ae897b6009f71e$export$2e2bcd8739ae039 = $f7ae897b6009f71e$var$Fade;



var $iS7v4 = parcelRequire("iS7v4");



"use client";
const $da79acaaf782c9e2$var$OffcanvasBody = /*#__PURE__*/ $iS7v4.forwardRef(({ className: className, bsPrefix: bsPrefix, as: Component = "div", ...props }, ref)=>{
    bsPrefix = (0, $24d14d90d6b73476$export$7f387860ebffb32c)(bsPrefix, "offcanvas-body");
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)(Component, {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($b64d07ce5c97f908$exports)))(className, bsPrefix),
        ...props
    });
});
$da79acaaf782c9e2$var$OffcanvasBody.displayName = "OffcanvasBody";
var $da79acaaf782c9e2$export$2e2bcd8739ae039 = $da79acaaf782c9e2$var$OffcanvasBody;




var $iS7v4 = parcelRequire("iS7v4");





"use client";
const $888b41bb4ae3d736$var$transitionStyles = {
    [(0, $53b9086095edce82$export$df38205c966be359)]: "show",
    [(0, $53b9086095edce82$export$78e9e6e3e014d60a)]: "show"
};
const $888b41bb4ae3d736$var$OffcanvasToggling = /*#__PURE__*/ $iS7v4.forwardRef(({ bsPrefix: bsPrefix, className: className, children: children, in: inProp = false, mountOnEnter: mountOnEnter = false, unmountOnExit: unmountOnExit = false, appear: appear = false, ...props }, ref)=>{
    bsPrefix = (0, $24d14d90d6b73476$export$7f387860ebffb32c)(bsPrefix, "offcanvas");
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $b6111160f9c4c7af$export$2e2bcd8739ae039), {
        ref: ref,
        addEndListener: (0, $7bba330c7b456f60$export$2e2bcd8739ae039),
        in: inProp,
        mountOnEnter: mountOnEnter,
        unmountOnExit: unmountOnExit,
        appear: appear,
        ...props,
        childRef: children.ref,
        children: (status, innerProps)=>/*#__PURE__*/ $iS7v4.cloneElement(children, {
                ...innerProps,
                className: (0, (/*@__PURE__*/$parcel$interopDefault($b64d07ce5c97f908$exports)))(className, children.props.className, (status === (0, $53b9086095edce82$export$df38205c966be359) || status === (0, $53b9086095edce82$export$4aacc83d4d59139f)) && `${bsPrefix}-toggling`, $888b41bb4ae3d736$var$transitionStyles[status])
            })
    });
});
$888b41bb4ae3d736$var$OffcanvasToggling.displayName = "OffcanvasToggling";
var $888b41bb4ae3d736$export$2e2bcd8739ae039 = $888b41bb4ae3d736$var$OffcanvasToggling;



var $iS7v4 = parcelRequire("iS7v4");
"use client";
const $1ef4100e3ddc7222$var$ModalContext = /*#__PURE__*/ $iS7v4.createContext({
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onHide () {}
});
var $1ef4100e3ddc7222$export$2e2bcd8739ae039 = $1ef4100e3ddc7222$var$ModalContext;





var $iS7v4 = parcelRequire("iS7v4");


var $iS7v4 = parcelRequire("iS7v4");



var $iS7v4 = parcelRequire("iS7v4");


const $91e404f41a4089e5$var$propTypes = {
    /** An accessible label indicating the relevant information about the Close Button. */ "aria-label": (0, (/*@__PURE__*/$parcel$interopDefault($804fb6f4b112ddab$exports))).string,
    /** A callback fired after the Close Button is clicked. */ onClick: (0, (/*@__PURE__*/$parcel$interopDefault($804fb6f4b112ddab$exports))).func,
    /**
   * Render different color variant for the button.
   *
   * Omitting this will render the default dark color.
   */ variant: (0, (/*@__PURE__*/$parcel$interopDefault($804fb6f4b112ddab$exports))).oneOf([
        "white"
    ])
};
const $91e404f41a4089e5$var$CloseButton = /*#__PURE__*/ $iS7v4.forwardRef(({ className: className, variant: variant, "aria-label": ariaLabel = "Close", ...props }, ref)=>/*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)("button", {
        ref: ref,
        type: "button",
        className: (0, (/*@__PURE__*/$parcel$interopDefault($b64d07ce5c97f908$exports)))("btn-close", variant && `btn-close-${variant}`, className),
        "aria-label": ariaLabel,
        ...props
    }));
$91e404f41a4089e5$var$CloseButton.displayName = "CloseButton";
$91e404f41a4089e5$var$CloseButton.propTypes = $91e404f41a4089e5$var$propTypes;
var $91e404f41a4089e5$export$2e2bcd8739ae039 = $91e404f41a4089e5$var$CloseButton;




"use client";
const $a771243682505d08$var$AbstractModalHeader = /*#__PURE__*/ $iS7v4.forwardRef(({ closeLabel: closeLabel = "Close", closeVariant: closeVariant, closeButton: closeButton = false, onHide: onHide, children: children, ...props }, ref)=>{
    const context = (0, $iS7v4.useContext)((0, $1ef4100e3ddc7222$export$2e2bcd8739ae039));
    const handleClick = (0, $519cffe0dc941fe3$export$2e2bcd8739ae039)(()=>{
        context == null || context.onHide();
        onHide == null || onHide();
    });
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsxs)("div", {
        ref: ref,
        ...props,
        children: [
            children,
            closeButton && /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $91e404f41a4089e5$export$2e2bcd8739ae039), {
                "aria-label": closeLabel,
                variant: closeVariant,
                onClick: handleClick
            })
        ]
    });
});
var $a771243682505d08$export$2e2bcd8739ae039 = $a771243682505d08$var$AbstractModalHeader;



"use client";
const $b70fd22718db55ac$var$OffcanvasHeader = /*#__PURE__*/ $iS7v4.forwardRef(({ bsPrefix: bsPrefix, className: className, closeLabel: closeLabel = "Close", closeButton: closeButton = false, ...props }, ref)=>{
    bsPrefix = (0, $24d14d90d6b73476$export$7f387860ebffb32c)(bsPrefix, "offcanvas-header");
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $a771243682505d08$export$2e2bcd8739ae039), {
        ref: ref,
        ...props,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($b64d07ce5c97f908$exports)))(className, bsPrefix),
        closeLabel: closeLabel,
        closeButton: closeButton
    });
});
$b70fd22718db55ac$var$OffcanvasHeader.displayName = "OffcanvasHeader";
var $b70fd22718db55ac$export$2e2bcd8739ae039 = $b70fd22718db55ac$var$OffcanvasHeader;



var $iS7v4 = parcelRequire("iS7v4");




"use client";
const $d360d6804dd7b389$var$DivStyledAsH5 = (0, $62e34513c457f5c6$export$2e2bcd8739ae039)("h5");
const $d360d6804dd7b389$var$OffcanvasTitle = /*#__PURE__*/ $iS7v4.forwardRef(({ className: className, bsPrefix: bsPrefix, as: Component = $d360d6804dd7b389$var$DivStyledAsH5, ...props }, ref)=>{
    bsPrefix = (0, $24d14d90d6b73476$export$7f387860ebffb32c)(bsPrefix, "offcanvas-title");
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)(Component, {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($b64d07ce5c97f908$exports)))(className, bsPrefix),
        ...props
    });
});
$d360d6804dd7b389$var$OffcanvasTitle.displayName = "OffcanvasTitle";
var $d360d6804dd7b389$export$2e2bcd8739ae039 = $d360d6804dd7b389$var$OffcanvasTitle;



/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */ function $ffc58308a7c34baa$export$2e2bcd8739ae039(element, className) {
    if (element.classList) return !!className && element.classList.contains(className);
    return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}


function $38f845cd0a830933$export$2e2bcd8739ae039(element, className) {
    if (element.classList) element.classList.add(className);
    else if (!(0, $ffc58308a7c34baa$export$2e2bcd8739ae039)(element, className)) {
        if (typeof element.className === "string") element.className = element.className + " " + className;
        else element.setAttribute("class", (element.className && element.className.baseVal || "") + " " + className);
    }
}




function $061c2db739d25ad7$var$replaceClassName(origClass, classToRemove) {
    return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function $061c2db739d25ad7$export$2e2bcd8739ae039(element, className) {
    if (element.classList) element.classList.remove(className);
    else if (typeof element.className === "string") element.className = $061c2db739d25ad7$var$replaceClassName(element.className, className);
    else element.setAttribute("class", $061c2db739d25ad7$var$replaceClassName(element.className && element.className.baseVal || "", className));
}



const $d716ababee679822$var$Selector = {
    FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    STICKY_CONTENT: ".sticky-top",
    NAVBAR_TOGGLER: ".navbar-toggler"
};
class $d716ababee679822$var$BootstrapModalManager extends (0, $56c2c567e64635bc$export$2e2bcd8739ae039) {
    adjustAndStore(prop, element, adjust) {
        const actual = element.style[prop];
        // TODO: DOMStringMap and CSSStyleDeclaration aren't strictly compatible
        // @ts-ignore
        element.dataset[prop] = actual;
        (0, $c87289290978bcff$export$2e2bcd8739ae039)(element, {
            [prop]: `${parseFloat((0, $c87289290978bcff$export$2e2bcd8739ae039)(element, prop)) + adjust}px`
        });
    }
    restore(prop, element) {
        const value = element.dataset[prop];
        if (value !== undefined) {
            delete element.dataset[prop];
            (0, $c87289290978bcff$export$2e2bcd8739ae039)(element, {
                [prop]: value
            });
        }
    }
    setContainerStyle(containerState) {
        super.setContainerStyle(containerState);
        const container = this.getElement();
        (0, $38f845cd0a830933$export$2e2bcd8739ae039)(container, "modal-open");
        if (!containerState.scrollBarWidth) return;
        const paddingProp = this.isRTL ? "paddingLeft" : "paddingRight";
        const marginProp = this.isRTL ? "marginLeft" : "marginRight";
        (0, $a6f3510f97f28441$export$2e2bcd8739ae039)(container, $d716ababee679822$var$Selector.FIXED_CONTENT).forEach((el)=>this.adjustAndStore(paddingProp, el, containerState.scrollBarWidth));
        (0, $a6f3510f97f28441$export$2e2bcd8739ae039)(container, $d716ababee679822$var$Selector.STICKY_CONTENT).forEach((el)=>this.adjustAndStore(marginProp, el, -containerState.scrollBarWidth));
        (0, $a6f3510f97f28441$export$2e2bcd8739ae039)(container, $d716ababee679822$var$Selector.NAVBAR_TOGGLER).forEach((el)=>this.adjustAndStore(marginProp, el, containerState.scrollBarWidth));
    }
    removeContainerStyle(containerState) {
        super.removeContainerStyle(containerState);
        const container = this.getElement();
        (0, $061c2db739d25ad7$export$2e2bcd8739ae039)(container, "modal-open");
        const paddingProp = this.isRTL ? "paddingLeft" : "paddingRight";
        const marginProp = this.isRTL ? "marginLeft" : "marginRight";
        (0, $a6f3510f97f28441$export$2e2bcd8739ae039)(container, $d716ababee679822$var$Selector.FIXED_CONTENT).forEach((el)=>this.restore(paddingProp, el));
        (0, $a6f3510f97f28441$export$2e2bcd8739ae039)(container, $d716ababee679822$var$Selector.STICKY_CONTENT).forEach((el)=>this.restore(marginProp, el));
        (0, $a6f3510f97f28441$export$2e2bcd8739ae039)(container, $d716ababee679822$var$Selector.NAVBAR_TOGGLER).forEach((el)=>this.restore(marginProp, el));
    }
}
let $d716ababee679822$var$sharedManager;
function $d716ababee679822$export$a03641438014b436(options) {
    if (!$d716ababee679822$var$sharedManager) $d716ababee679822$var$sharedManager = new $d716ababee679822$var$BootstrapModalManager(options);
    return $d716ababee679822$var$sharedManager;
}
var $d716ababee679822$export$2e2bcd8739ae039 = $d716ababee679822$var$BootstrapModalManager;



"use client";
function $d25338f24f05f2d6$var$DialogTransition(props) {
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $888b41bb4ae3d736$export$2e2bcd8739ae039), {
        ...props
    });
}
function $d25338f24f05f2d6$var$BackdropTransition(props) {
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $f7ae897b6009f71e$export$2e2bcd8739ae039), {
        ...props
    });
}
const $d25338f24f05f2d6$var$Offcanvas = /*#__PURE__*/ $iS7v4.forwardRef(({ bsPrefix: bsPrefix, className: className, children: children, "aria-labelledby": ariaLabelledby, placement: placement = "start", responsive: responsive, show: /* BaseModal props */ show = false, backdrop: backdrop = true, keyboard: keyboard = true, scroll: scroll = false, onEscapeKeyDown: onEscapeKeyDown, onShow: onShow, onHide: onHide, container: container, autoFocus: autoFocus = true, enforceFocus: enforceFocus = true, restoreFocus: restoreFocus = true, restoreFocusOptions: restoreFocusOptions, onEntered: onEntered, onExit: onExit, onExiting: onExiting, onEnter: onEnter, onEntering: onEntering, onExited: onExited, backdropClassName: backdropClassName, manager: propsManager, renderStaticNode: renderStaticNode = false, ...props }, ref)=>{
    const modalManager = (0, $iS7v4.useRef)();
    bsPrefix = (0, $24d14d90d6b73476$export$7f387860ebffb32c)(bsPrefix, "offcanvas");
    const { onToggle: onToggle } = (0, $iS7v4.useContext)((0, $b43685ca66689b3a$export$2e2bcd8739ae039)) || {};
    const [showOffcanvas, setShowOffcanvas] = (0, $iS7v4.useState)(false);
    const hideResponsiveOffcanvas = (0, $922434beb8d00c54$export$2e2bcd8739ae039)(responsive || "xs", "up");
    (0, $iS7v4.useEffect)(()=>{
        // Handles the case where screen is resized while the responsive
        // offcanvas is shown. If `responsive` not provided, just use `show`.
        setShowOffcanvas(responsive ? show && !hideResponsiveOffcanvas : show);
    }, [
        show,
        responsive,
        hideResponsiveOffcanvas
    ]);
    const handleHide = (0, $519cffe0dc941fe3$export$2e2bcd8739ae039)(()=>{
        onToggle == null || onToggle();
        onHide == null || onHide();
    });
    const modalContext = (0, $iS7v4.useMemo)(()=>({
            onHide: handleHide
        }), [
        handleHide
    ]);
    function getModalManager() {
        if (propsManager) return propsManager;
        if (scroll) {
            // Have to use a different modal manager since the shared
            // one handles overflow.
            if (!modalManager.current) modalManager.current = new (0, $d716ababee679822$export$2e2bcd8739ae039)({
                handleContainerOverflow: false
            });
            return modalManager.current;
        }
        return (0, $d716ababee679822$export$a03641438014b436)();
    }
    const handleEnter = (node, ...args)=>{
        if (node) node.style.visibility = "visible";
        onEnter == null || onEnter(node, ...args);
    };
    const handleExited = (node, ...args)=>{
        if (node) node.style.visibility = "";
        onExited == null || onExited(...args);
    };
    const renderBackdrop = (0, $iS7v4.useCallback)((backdropProps)=>/*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)("div", {
            ...backdropProps,
            className: (0, (/*@__PURE__*/$parcel$interopDefault($b64d07ce5c97f908$exports)))(`${bsPrefix}-backdrop`, backdropClassName)
        }), [
        backdropClassName,
        bsPrefix
    ]);
    const renderDialog = (dialogProps)=>/*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)("div", {
            ...dialogProps,
            ...props,
            className: (0, (/*@__PURE__*/$parcel$interopDefault($b64d07ce5c97f908$exports)))(className, responsive ? `${bsPrefix}-${responsive}` : bsPrefix, `${bsPrefix}-${placement}`),
            "aria-labelledby": ariaLabelledby,
            children: children
        });
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsxs)((0, $a9d3d534d399c2da$exports.Fragment), {
        children: [
            !showOffcanvas && (responsive || renderStaticNode) && renderDialog({}),
            /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $1ef4100e3ddc7222$export$2e2bcd8739ae039).Provider, {
                value: modalContext,
                children: /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $054afefe8275a005$export$2e2bcd8739ae039), {
                    show: showOffcanvas,
                    ref: ref,
                    backdrop: backdrop,
                    container: container,
                    keyboard: keyboard,
                    autoFocus: autoFocus,
                    enforceFocus: enforceFocus && !scroll,
                    restoreFocus: restoreFocus,
                    restoreFocusOptions: restoreFocusOptions,
                    onEscapeKeyDown: onEscapeKeyDown,
                    onShow: onShow,
                    onHide: handleHide,
                    onEnter: handleEnter,
                    onEntering: onEntering,
                    onEntered: onEntered,
                    onExit: onExit,
                    onExiting: onExiting,
                    onExited: handleExited,
                    manager: getModalManager(),
                    transition: $d25338f24f05f2d6$var$DialogTransition,
                    backdropTransition: $d25338f24f05f2d6$var$BackdropTransition,
                    renderBackdrop: renderBackdrop,
                    renderDialog: renderDialog
                })
            })
        ]
    });
});
$d25338f24f05f2d6$var$Offcanvas.displayName = "Offcanvas";
var $d25338f24f05f2d6$export$2e2bcd8739ae039 = Object.assign($d25338f24f05f2d6$var$Offcanvas, {
    Body: (0, $da79acaaf782c9e2$export$2e2bcd8739ae039),
    Header: (0, $b70fd22718db55ac$export$2e2bcd8739ae039),
    Title: (0, $d360d6804dd7b389$export$2e2bcd8739ae039)
});




"use client";
const $5fa56229430aa992$var$NavbarOffcanvas = /*#__PURE__*/ $iS7v4.forwardRef((props, ref)=>{
    const context = (0, $iS7v4.useContext)((0, $b43685ca66689b3a$export$2e2bcd8739ae039));
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $d25338f24f05f2d6$export$2e2bcd8739ae039), {
        ref: ref,
        show: !!(context != null && context.expanded),
        ...props,
        renderStaticNode: true
    });
});
$5fa56229430aa992$var$NavbarOffcanvas.displayName = "NavbarOffcanvas";
var $5fa56229430aa992$export$2e2bcd8739ae039 = $5fa56229430aa992$var$NavbarOffcanvas;





var $iS7v4 = parcelRequire("iS7v4");



"use client";
const $d3e924fb51a43c87$var$NavbarText = /*#__PURE__*/ $iS7v4.forwardRef(({ className: className, bsPrefix: bsPrefix, as: Component = "span", ...props }, ref)=>{
    bsPrefix = (0, $24d14d90d6b73476$export$7f387860ebffb32c)(bsPrefix, "navbar-text");
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)(Component, {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($b64d07ce5c97f908$exports)))(className, bsPrefix),
        ...props
    });
});
$d3e924fb51a43c87$var$NavbarText.displayName = "NavbarText";
var $d3e924fb51a43c87$export$2e2bcd8739ae039 = $d3e924fb51a43c87$var$NavbarText;



"use client";
const $538ec2de4cde3252$var$Navbar = /*#__PURE__*/ $iS7v4.forwardRef((props, ref)=>{
    const { bsPrefix: initialBsPrefix, expand: expand = true, variant: variant = "light", bg: bg, fixed: fixed, sticky: sticky, className: className, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = "nav", expanded: expanded, onToggle: onToggle, onSelect: onSelect, collapseOnSelect: collapseOnSelect = false, ...controlledProps } = (0, $6cdf91dc3b24cde1$export$2e2bcd8739ae039)(props, {
        expanded: "onToggle"
    });
    const bsPrefix = (0, $24d14d90d6b73476$export$7f387860ebffb32c)(initialBsPrefix, "navbar");
    const handleCollapse = (0, $iS7v4.useCallback)((...args)=>{
        onSelect == null || onSelect(...args);
        if (collapseOnSelect && expanded) onToggle == null || onToggle(false);
    }, [
        onSelect,
        collapseOnSelect,
        expanded,
        onToggle
    ]);
    // will result in some false positives but that seems better
    // than false negatives. strict `undefined` check allows explicit
    // "nulling" of the role if the user really doesn't want one
    if (controlledProps.role === undefined && Component !== "nav") controlledProps.role = "navigation";
    let expandClass = `${bsPrefix}-expand`;
    if (typeof expand === "string") expandClass = `${expandClass}-${expand}`;
    const navbarContext = (0, $iS7v4.useMemo)(()=>({
            onToggle: ()=>onToggle == null ? void 0 : onToggle(!expanded),
            bsPrefix: bsPrefix,
            expanded: !!expanded,
            expand: expand
        }), [
        bsPrefix,
        expanded,
        expand,
        onToggle
    ]);
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $b43685ca66689b3a$export$2e2bcd8739ae039).Provider, {
        value: navbarContext,
        children: /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $5e11acc1f3d32b77$export$2e2bcd8739ae039).Provider, {
            value: handleCollapse,
            children: /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)(Component, {
                ref: ref,
                ...controlledProps,
                className: (0, (/*@__PURE__*/$parcel$interopDefault($b64d07ce5c97f908$exports)))(className, bsPrefix, expand && expandClass, variant && `${bsPrefix}-${variant}`, bg && `bg-${bg}`, sticky && `sticky-${sticky}`, fixed && `fixed-${fixed}`)
            })
        })
    });
});
$538ec2de4cde3252$var$Navbar.displayName = "Navbar";
var $538ec2de4cde3252$export$2e2bcd8739ae039 = Object.assign($538ec2de4cde3252$var$Navbar, {
    Brand: (0, $c304907f7d9901f1$export$2e2bcd8739ae039),
    Collapse: (0, $048bc6cbbc8d55fd$export$2e2bcd8739ae039),
    Offcanvas: (0, $5fa56229430aa992$export$2e2bcd8739ae039),
    Text: (0, $d3e924fb51a43c87$export$2e2bcd8739ae039),
    Toggle: (0, $69f59a1fe324f963$export$2e2bcd8739ae039)
});





parcelRequire("iS7v4");


const $f6c401377da49423$export$79d13b60110f33be = ({ query: query, handleSearch: handleSearch })=>{
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $a65783a80b39ea4c$export$2e2bcd8739ae039), {
        children: /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $402daf341771d44d$export$2e2bcd8739ae039).Control, {
            type: "text",
            value: query,
            onChange: (e)=>handleSearch(e),
            placeholder: "Search",
            className: "sm-2 mb-3"
        })
    });
};
$f6c401377da49423$export$79d13b60110f33be.propTypes = {
    handleSearch: (0, (/*@__PURE__*/$parcel$interopDefault($804fb6f4b112ddab$exports))).func.isRequired,
    query: (0, (/*@__PURE__*/$parcel$interopDefault($804fb6f4b112ddab$exports))).string.isRequired
};


const $c7fbe6c37786cdd2$export$214ae410b202e65a = ({ user: user, movies: movies, handleSearch: handleSearch, query: query, onLoggedOut: onLoggedOut })=>{
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $538ec2de4cde3252$export$2e2bcd8739ae039), {
        bg: "Turquoise",
        expand: "lg",
        children: /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsxs)((0, $f3c1ee4d0aab22d2$export$2e2bcd8739ae039), {
            children: [
                /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $538ec2de4cde3252$export$2e2bcd8739ae039).Brand, {
                    as: (0, $333c1edc626ae798$export$a6c7ac8248d6e38a),
                    to: "/",
                    children: "MyFlix"
                }),
                /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $538ec2de4cde3252$export$2e2bcd8739ae039).Toggle, {
                    "aria-controls": "basic-navbar-nav"
                }),
                /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsxs)((0, $538ec2de4cde3252$export$2e2bcd8739ae039).Collapse, {
                    id: "basic-navbar-nav",
                    children: [
                        /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsxs)((0, $8d723168ac6d5bd3$export$2e2bcd8739ae039), {
                            className: "me-auto",
                            children: [
                                !user && /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsxs)((0, $a9d3d534d399c2da$exports.Fragment), {
                                    children: [
                                        /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $8d723168ac6d5bd3$export$2e2bcd8739ae039).Link, {
                                            as: (0, $333c1edc626ae798$export$a6c7ac8248d6e38a),
                                            to: "/login",
                                            children: "Login"
                                        }),
                                        /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $8d723168ac6d5bd3$export$2e2bcd8739ae039).Link, {
                                            as: (0, $333c1edc626ae798$export$a6c7ac8248d6e38a),
                                            to: "/signup",
                                            children: "Signup"
                                        })
                                    ]
                                }),
                                user && /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsxs)((0, $a9d3d534d399c2da$exports.Fragment), {
                                    children: [
                                        /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $8d723168ac6d5bd3$export$2e2bcd8739ae039).Link, {
                                            as: (0, $333c1edc626ae798$export$a6c7ac8248d6e38a),
                                            to: "/",
                                            children: "Movies"
                                        }),
                                        /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $8d723168ac6d5bd3$export$2e2bcd8739ae039).Link, {
                                            as: (0, $333c1edc626ae798$export$a6c7ac8248d6e38a),
                                            to: "/profile",
                                            children: "Profile"
                                        }),
                                        /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $8d723168ac6d5bd3$export$2e2bcd8739ae039).Link, {
                                            onClick: onLoggedOut,
                                            children: "Logout"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $722f2e84ec5fbe3b$export$3565eb3d00ca5a74), {
                            children: /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $722f2e84ec5fbe3b$export$e7b0ac011bb776c6), {
                                path: "/",
                                element: /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $402daf341771d44d$export$2e2bcd8739ae039), {
                                    inline: "true",
                                    children: /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $a65783a80b39ea4c$export$2e2bcd8739ae039), {
                                        children: /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $b6d4c3a37d0dc9e2$export$2e2bcd8739ae039), {
                                            xs: "auto",
                                            children: /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $f6c401377da49423$export$79d13b60110f33be), {
                                                handleSearch: handleSearch,
                                                query: query,
                                                movies: movies
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};
$c7fbe6c37786cdd2$export$214ae410b202e65a.propTypes = {
    user: (0, (/*@__PURE__*/$parcel$interopDefault($804fb6f4b112ddab$exports))).object.isRequired,
    query: (0, (/*@__PURE__*/$parcel$interopDefault($804fb6f4b112ddab$exports))).string.isRequired,
    onLoggedOut: (0, (/*@__PURE__*/$parcel$interopDefault($804fb6f4b112ddab$exports))).func.isRequired
};




var $iS7v4 = parcelRequire("iS7v4");





parcelRequire("iS7v4");





const $f797e335dff46e68$export$d2ae44ae5a7d01ef = ({ user: user, favoriteMovies: favoriteMovies })=>{
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsxs)((0, $a65783a80b39ea4c$export$2e2bcd8739ae039), {
        children: [
            /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $b6d4c3a37d0dc9e2$export$2e2bcd8739ae039), {
                md: 12,
                children: /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)("h3", {
                    children: "My Movies"
                })
            }),
            /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $a65783a80b39ea4c$export$2e2bcd8739ae039), {
                children: favoriteMovies.map((movie)=>{
                    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsxs)((0, $b6d4c3a37d0dc9e2$export$2e2bcd8739ae039), {
                        className: "mb-5",
                        md: 4,
                        children: [
                            /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $333c1edc626ae798$export$a6c7ac8248d6e38a), {
                                to: `/movies/${movie.title}`
                            }),
                            /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $bdd79993dac560a3$export$9bd698419030e459), {
                                movie: movie,
                                isFavorite: user.favoriteMovies.includes(movie.title)
                            })
                        ]
                    }, movie.id);
                })
            })
        ]
    });
};
$f797e335dff46e68$export$d2ae44ae5a7d01ef.propTypes = {
    favoriteMovies: (0, (/*@__PURE__*/$parcel$interopDefault($804fb6f4b112ddab$exports))).array.isRequired,
    user: (0, (/*@__PURE__*/$parcel$interopDefault($804fb6f4b112ddab$exports))).object.isRequired
};



parcelRequire("iS7v4");




const $1d8e0953f5b97b17$export$c6ede3bfc40c5e4b = ({ email: email, name: name })=>{
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsxs)("p", {
                children: [
                    "Username: ",
                    name,
                    " "
                ]
            }),
            /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsxs)("p", {
                children: [
                    "Email: ",
                    email,
                    " "
                ]
            })
        ]
    });
};
const $1d8e0953f5b97b17$export$75543167ef08d8e5 = ({ formData: formData, handleUpdate: handleUpdate, handleSubmit: handleSubmit, handleDeleteAccount: handleDeleteAccount })=>{
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $a65783a80b39ea4c$export$2e2bcd8739ae039), {
        children: /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsxs)((0, $402daf341771d44d$export$2e2bcd8739ae039), {
            onSubmit: handleSubmit,
            children: [
                /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)("h3", {
                    children: "Update profile information"
                }),
                /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsxs)((0, $402daf341771d44d$export$2e2bcd8739ae039).Group, {
                    className: "mb-2",
                    children: [
                        /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $402daf341771d44d$export$2e2bcd8739ae039).Label, {
                            children: "Username:"
                        }),
                        /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $402daf341771d44d$export$2e2bcd8739ae039).Control, {
                            type: "text",
                            minLength: 4,
                            value: formData.username,
                            onChange: (e)=>handleUpdate(e),
                            required: true
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsxs)((0, $402daf341771d44d$export$2e2bcd8739ae039).Group, {
                    className: "mb-2",
                    children: [
                        /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsxs)((0, $402daf341771d44d$export$2e2bcd8739ae039).Label, {
                            children: [
                                "Password:",
                                /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)("p", {
                                    children: "Your new password must be at least 8 characters long."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $402daf341771d44d$export$2e2bcd8739ae039).Control, {
                            type: "password",
                            minLength: 8,
                            value: formData.password,
                            onChange: (e)=>handleUpdate(e),
                            required: true
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsxs)((0, $402daf341771d44d$export$2e2bcd8739ae039).Group, {
                    className: "mb-2",
                    children: [
                        /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $402daf341771d44d$export$2e2bcd8739ae039).Label, {
                            children: " Email: "
                        }),
                        /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $402daf341771d44d$export$2e2bcd8739ae039).Control, {
                            type: "email",
                            value: formData.email,
                            onChange: (e)=>handleUpdate(e),
                            required: true
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsxs)((0, $402daf341771d44d$export$2e2bcd8739ae039).Group, {
                    className: "mb-4",
                    children: [
                        /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $402daf341771d44d$export$2e2bcd8739ae039).Label, {
                            children: "Birthdate:"
                        }),
                        /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $402daf341771d44d$export$2e2bcd8739ae039).Control, {
                            type: "date",
                            value: formData.birthDate.slice(0, 10),
                            onChange: (e)=>handleUpdate(e),
                            required: true
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $f0f17203e1780c9d$export$2e2bcd8739ae039), {
                    variant: "primary",
                    type: "submit",
                    children: "Submit Changes"
                }),
                /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $f0f17203e1780c9d$export$2e2bcd8739ae039), {
                    onClick: ()=>handleDeleteAccount(),
                    variant: "outline-secondary",
                    className: "mx-3",
                    children: "Delete account"
                })
            ]
        })
    });
};
$1d8e0953f5b97b17$export$c6ede3bfc40c5e4b.propTypes = {
    email: (0, (/*@__PURE__*/$parcel$interopDefault($804fb6f4b112ddab$exports))).string.isRequired,
    name: (0, (/*@__PURE__*/$parcel$interopDefault($804fb6f4b112ddab$exports))).string.isRequired
};
$1d8e0953f5b97b17$export$75543167ef08d8e5.propTypes = {
    formData: (0, (/*@__PURE__*/$parcel$interopDefault($804fb6f4b112ddab$exports))).object.isRequired,
    handleUpdate: (0, (/*@__PURE__*/$parcel$interopDefault($804fb6f4b112ddab$exports))).func.isRequired,
    handleSubmit: (0, (/*@__PURE__*/$parcel$interopDefault($804fb6f4b112ddab$exports))).func.isRequired,
    handleDeleteAccount: (0, (/*@__PURE__*/$parcel$interopDefault($804fb6f4b112ddab$exports))).func.isRequired
};


const $e7604267c468a176$export$b378b4d12a0dcbde = ({ localUser: localUser, movies: movies, token: token })=>{
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const [username, setUsername] = (0, $iS7v4.useState)(storedUser.username);
    const [email, setEmail] = (0, $iS7v4.useState)(storedUser.email);
    const [password, setPassword] = (0, $iS7v4.useState)(storedUser.password);
    const [birthDate, setBirthdate] = (0, $iS7v4.useState)(storedUser.birthDate);
    const [user, setUser] = (0, $iS7v4.useState)();
    const favoriteMovies = user === undefined ? [] : movies.filter((m)=>user.favoriteMovies.includes(m.title));
    const formData = {
        username: username,
        email: email,
        birthDate: birthDate,
        password: password
    };
    const handleSubmit = (event)=>{
        event.preventDefault(event);
        fetch(`https://mj-movies-flix-036de76605bb.herokuapp.com/users/${user.username}`, {
            method: "PUT",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }).then((response)=>{
            if (response.ok) {
                alert("Update successful");
                window.location.reload();
                return response.json();
            }
            alert("Update failed");
        }).then((user)=>{
            if (user) {
                localStorage.setItem("user", JSON.stringify(user));
                setUser(user);
            }
        }).catch((error)=>{
            console.error(error);
        });
    };
    const handleUpdate = (e)=>{
        switch(e.target.type){
            case "text":
                setUsername(e.target.value);
                break;
            case "email":
                setEmail(e.target.value);
                break;
            case "password":
                setPassword(e.target.value);
                break;
            case "date":
                setBirthdate(e.target.value);
            default:
        }
    };
    const handleDeleteAccount = ()=>{
        fetch(`https://mj-movies-flix-036de76605bb.herokuapp.com/users/${storedUser.username}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        }).then((response)=>{
            if (response.ok) {
                alert("Account deleted successfully.");
                localStorage.clear();
                window.location.reload();
            } else alert("Something went wrong.");
        });
    };
    (0, $iS7v4.useEffect)(()=>{
        if (!token) return;
        fetch("https://my-flix-db-975de3fb6719.herokuapp.com/users/:Username", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response)=>response.json()).then((data)=>{
            console.log("Users data: ", data);
            const usersFromApi = data.map((resultUser)=>{
                return {
                    id: resultUser._id,
                    username: resultUser.username,
                    password: resultUser.password,
                    email: resultUser.email,
                    birthDate: resultUser.birthDate,
                    favoriteMovies: resultUser.favoriteMovies
                };
            });
            setUser(usersFromApi.find((u)=>u.username === localUser.username));
            console.log("Profile Saved User: " + JSON.stringify(user));
        }).catch((error)=>{
            console.error(error);
        });
    }, [
        token
    ]);
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsxs)((0, $f3c1ee4d0aab22d2$export$2e2bcd8739ae039), {
        children: [
            /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsxs)((0, $a65783a80b39ea4c$export$2e2bcd8739ae039), {
                children: [
                    /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $36e6d82e657fd4dc$export$2e2bcd8739ae039), {
                        className: "mb-5",
                        children: /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsxs)((0, $36e6d82e657fd4dc$export$2e2bcd8739ae039).Body, {
                            children: [
                                /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $36e6d82e657fd4dc$export$2e2bcd8739ae039).Title, {
                                    children: "My Profile  "
                                }),
                                /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $36e6d82e657fd4dc$export$2e2bcd8739ae039).Text, {
                                    children: user && /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)(UserInfo, {
                                        name: user.username,
                                        email: user.email
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $36e6d82e657fd4dc$export$2e2bcd8739ae039), {
                        className: "mb-5",
                        children: /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $36e6d82e657fd4dc$export$2e2bcd8739ae039).Body, {
                            children: /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $1d8e0953f5b97b17$export$75543167ef08d8e5), {
                                formData: formData,
                                handleUpdate: handleUpdate,
                                handleSubmit: handleSubmit,
                                handleDeleteAccount: handleDeleteAccount
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $a65783a80b39ea4c$export$2e2bcd8739ae039), {
                children: /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $b6d4c3a37d0dc9e2$export$2e2bcd8739ae039), {
                    className: "mb-5",
                    xs: 12,
                    md: 12,
                    children: favoriteMovies && /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $f797e335dff46e68$export$d2ae44ae5a7d01ef), {
                        user: user,
                        favoriteMovies: favoriteMovies
                    })
                })
            })
        ]
    });
};
$e7604267c468a176$export$b378b4d12a0dcbde.propTypes = {
    localUser: (0, (/*@__PURE__*/$parcel$interopDefault($804fb6f4b112ddab$exports))).object.isRequired,
    movies: (0, (/*@__PURE__*/$parcel$interopDefault($804fb6f4b112ddab$exports))).array.isRequired,
    token: (0, (/*@__PURE__*/$parcel$interopDefault($804fb6f4b112ddab$exports))).string.isRequired
};


const $70bbf9b0f37cf583$export$fa32cd27347e212e = ()=>{
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const [movies, setMovies] = (0, $iS7v4.useState)([]);
    const [user, setUser] = (0, $iS7v4.useState)(storedUser ? storedUser : null);
    const [token, setToken] = (0, $iS7v4.useState)(storedToken ? storedToken : null);
    const [searchQuery, setSearchQuery] = (0, $iS7v4.useState)("");
    (0, $iS7v4.useEffect)(()=>{
        if (!token) return;
        fetch("https://my-flix-db-975de3fb6719.herokuapp.com/movies", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response)=>response.json()).then((data)=>{
            console.log("Movie data", data);
        });
    }, [
        token
    ]);
    const handleSearch = (e)=>{
        const query = e.target.value;
        setSearchQuery(query);
        //Filter/search movies by title, genry, director
        const filterMovies = movies.filter((movie)=>{
            return movie.title.toLowerCase().includes(query.toLowerCase()) || movie.genre.toLowerCase().includes(query.toLowerCase()) || movie.director.toLowerCase().includes(query.toLowerCase());
        });
        setMovies(filterMovies);
    };
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsxs)((0, $333c1edc626ae798$export$9ba4e89fdfa1fc54), {
        children: [
            /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $c7fbe6c37786cdd2$export$214ae410b202e65a), {
                user: user,
                query: searchQuery,
                handleSearch: handleSearch,
                onLoggedOut: ()=>{
                    setUser(null);
                    setToken(null);
                    localStorage.clear();
                }
            }),
            /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $a65783a80b39ea4c$export$2e2bcd8739ae039), {
                className: "justify-content-md-center",
                children: /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsxs)((0, $722f2e84ec5fbe3b$export$3565eb3d00ca5a74), {
                    children: [
                        /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $722f2e84ec5fbe3b$export$e7b0ac011bb776c6), {
                            path: "/signup",
                            element: /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $a9d3d534d399c2da$exports.Fragment), {
                                children: user ? /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $722f2e84ec5fbe3b$export$444b3ab0cb9aec40), {
                                    to: "/"
                                }) : /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $b6d4c3a37d0dc9e2$export$2e2bcd8739ae039), {
                                    md: 5,
                                    children: /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $edfd7662308e8d45$export$25f3896ea1e09820), {})
                                })
                            })
                        }),
                        /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $722f2e84ec5fbe3b$export$e7b0ac011bb776c6), {
                            path: "/login",
                            element: /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $a9d3d534d399c2da$exports.Fragment), {
                                children: user ? /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $722f2e84ec5fbe3b$export$444b3ab0cb9aec40), {
                                    to: "/"
                                }) : /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $b6d4c3a37d0dc9e2$export$2e2bcd8739ae039), {
                                    md: 5,
                                    children: /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $68a6c8cdca99d1eb$export$1582048ca8384970), {
                                        onLoggedIn: (user)=>setUser(user)
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $722f2e84ec5fbe3b$export$e7b0ac011bb776c6), {
                            path: "/movies/:movieId",
                            element: /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $a9d3d534d399c2da$exports.Fragment), {
                                children: !user ? /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $722f2e84ec5fbe3b$export$444b3ab0cb9aec40), {
                                    to: "/login",
                                    replace: true
                                }) : movies.length === 0 ? /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $b6d4c3a37d0dc9e2$export$2e2bcd8739ae039), {
                                    children: "The list is empty!"
                                }) : /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $b6d4c3a37d0dc9e2$export$2e2bcd8739ae039), {
                                    md: 8,
                                    children: /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $e7276d4979e0f0a3$export$78d497080ea8f89a), {
                                        movies: movies
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $722f2e84ec5fbe3b$export$e7b0ac011bb776c6), {
                            path: "/",
                            element: /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $a9d3d534d399c2da$exports.Fragment), {
                                children: !user ? /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $722f2e84ec5fbe3b$export$444b3ab0cb9aec40), {
                                    to: "/login",
                                    replace: true
                                }) : movies.length === 0 ? /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $b6d4c3a37d0dc9e2$export$2e2bcd8739ae039), {
                                    children: "The list is empty!"
                                }) : /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $a9d3d534d399c2da$exports.Fragment), {
                                    children: movies.map((movie)=>/*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $b6d4c3a37d0dc9e2$export$2e2bcd8739ae039), {
                                            className: "mb-5",
                                            md: 3,
                                            sm: 12,
                                            children: /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $bdd79993dac560a3$export$9bd698419030e459), {
                                                movie: movie,
                                                isFavorite: user.favoriteMovies.includes(movie.title)
                                            })
                                        }, movie.id))
                                })
                            })
                        }),
                        /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $722f2e84ec5fbe3b$export$e7b0ac011bb776c6), {
                            path: "/profile",
                            element: /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $a9d3d534d399c2da$exports.Fragment), {
                                children: !user ? /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $722f2e84ec5fbe3b$export$444b3ab0cb9aec40), {
                                    to: "/login",
                                    replace: true
                                }) : /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $b6d4c3a37d0dc9e2$export$2e2bcd8739ae039), {
                                    md: 8,
                                    children: /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $e7604267c468a176$export$b378b4d12a0dcbde), {
                                        localUser: user,
                                        movies: movies,
                                        token: token
                                    })
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};




// Main component (will eventually use all the others)
const $7f4e1af72d3e9f2c$var$MyFlixApp = ()=>{
    return /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $f3c1ee4d0aab22d2$export$2e2bcd8739ae039), {
        children: /*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)((0, $70bbf9b0f37cf583$export$fa32cd27347e212e), {})
    });
};
// Finds the root of your app
const $7f4e1af72d3e9f2c$var$container = document.querySelector("#root");
const $7f4e1af72d3e9f2c$var$root = (0, $42ffcf4a0fe1f422$export$882461b6382ed46c)($7f4e1af72d3e9f2c$var$container);
// Tells React to render your app in the root DOM element
$7f4e1af72d3e9f2c$var$root.render(/*#__PURE__*/ (0, $a9d3d534d399c2da$exports.jsx)($7f4e1af72d3e9f2c$var$MyFlixApp, {}));

})();
//# sourceMappingURL=index.3f4192ba.js.map
