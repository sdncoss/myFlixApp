
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
parcelRegister("aF0bH", function(module, exports) {

$parcel$export(module.exports, "Fragment", function () { return $7c2de0f84de265c5$export$ffb0004e005737fa; }, function (v) { return $7c2de0f84de265c5$export$ffb0004e005737fa = v; });
$parcel$export(module.exports, "jsx", function () { return $7c2de0f84de265c5$export$34b9dba7ce09269b; }, function (v) { return $7c2de0f84de265c5$export$34b9dba7ce09269b = v; });
$parcel$export(module.exports, "jsxs", function () { return $7c2de0f84de265c5$export$25062201e9e25d76; }, function (v) { return $7c2de0f84de265c5$export$25062201e9e25d76 = v; });
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $7c2de0f84de265c5$export$ffb0004e005737fa;
var $7c2de0f84de265c5$export$34b9dba7ce09269b;
var $7c2de0f84de265c5$export$25062201e9e25d76;
"use strict";

var $kdEmn = parcelRequire("kdEmn");
var $7c2de0f84de265c5$var$k = Symbol.for("react.element"), $7c2de0f84de265c5$var$l = Symbol.for("react.fragment"), $7c2de0f84de265c5$var$m = Object.prototype.hasOwnProperty, $7c2de0f84de265c5$var$n = $kdEmn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, $7c2de0f84de265c5$var$p = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function $7c2de0f84de265c5$var$q(c, a, g) {
    var b, d = {}, e = null, h = null;
    void 0 !== g && (e = "" + g);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (h = a.ref);
    for(b in a)$7c2de0f84de265c5$var$m.call(a, b) && !$7c2de0f84de265c5$var$p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps) for(b in a = c.defaultProps, a)void 0 === d[b] && (d[b] = a[b]);
    return {
        $$typeof: $7c2de0f84de265c5$var$k,
        type: c,
        key: e,
        ref: h,
        props: d,
        _owner: $7c2de0f84de265c5$var$n.current
    };
}
$7c2de0f84de265c5$export$ffb0004e005737fa = $7c2de0f84de265c5$var$l;
$7c2de0f84de265c5$export$34b9dba7ce09269b = $7c2de0f84de265c5$var$q;
$7c2de0f84de265c5$export$25062201e9e25d76 = $7c2de0f84de265c5$var$q;

});
parcelRegister("kdEmn", function(module, exports) {
"use strict";

module.exports = (parcelRequire("7509E"));

});
parcelRegister("7509E", function(module, exports) {

$parcel$export(module.exports, "Children", function () { return $52791ebe93c1ad69$export$dca3b0875bd9a954; }, function (v) { return $52791ebe93c1ad69$export$dca3b0875bd9a954 = v; });
$parcel$export(module.exports, "Component", function () { return $52791ebe93c1ad69$export$16fa2f45be04daa8; }, function (v) { return $52791ebe93c1ad69$export$16fa2f45be04daa8 = v; });
$parcel$export(module.exports, "Fragment", function () { return $52791ebe93c1ad69$export$ffb0004e005737fa; }, function (v) { return $52791ebe93c1ad69$export$ffb0004e005737fa = v; });
$parcel$export(module.exports, "Profiler", function () { return $52791ebe93c1ad69$export$e2c29f18771995cb; }, function (v) { return $52791ebe93c1ad69$export$e2c29f18771995cb = v; });
$parcel$export(module.exports, "PureComponent", function () { return $52791ebe93c1ad69$export$221d75b3f55bb0bd; }, function (v) { return $52791ebe93c1ad69$export$221d75b3f55bb0bd = v; });
$parcel$export(module.exports, "StrictMode", function () { return $52791ebe93c1ad69$export$5f8d39834fd61797; }, function (v) { return $52791ebe93c1ad69$export$5f8d39834fd61797 = v; });
$parcel$export(module.exports, "Suspense", function () { return $52791ebe93c1ad69$export$74bf444e3cd11ea5; }, function (v) { return $52791ebe93c1ad69$export$74bf444e3cd11ea5 = v; });
$parcel$export(module.exports, "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED", function () { return $52791ebe93c1ad69$export$ae55be85d98224ed; }, function (v) { return $52791ebe93c1ad69$export$ae55be85d98224ed = v; });
$parcel$export(module.exports, "act", function () { return $52791ebe93c1ad69$export$3ba232387fd5d6dd; }, function (v) { return $52791ebe93c1ad69$export$3ba232387fd5d6dd = v; });
$parcel$export(module.exports, "cloneElement", function () { return $52791ebe93c1ad69$export$e530037191fcd5d7; }, function (v) { return $52791ebe93c1ad69$export$e530037191fcd5d7 = v; });
$parcel$export(module.exports, "createContext", function () { return $52791ebe93c1ad69$export$fd42f52fd3ae1109; }, function (v) { return $52791ebe93c1ad69$export$fd42f52fd3ae1109 = v; });
$parcel$export(module.exports, "createElement", function () { return $52791ebe93c1ad69$export$c8a8987d4410bf2d; }, function (v) { return $52791ebe93c1ad69$export$c8a8987d4410bf2d = v; });
$parcel$export(module.exports, "createFactory", function () { return $52791ebe93c1ad69$export$d38cd72104c1f0e9; }, function (v) { return $52791ebe93c1ad69$export$d38cd72104c1f0e9 = v; });
$parcel$export(module.exports, "createRef", function () { return $52791ebe93c1ad69$export$7d1e3a5e95ceca43; }, function (v) { return $52791ebe93c1ad69$export$7d1e3a5e95ceca43 = v; });
$parcel$export(module.exports, "forwardRef", function () { return $52791ebe93c1ad69$export$257a8862b851cb5b; }, function (v) { return $52791ebe93c1ad69$export$257a8862b851cb5b = v; });
$parcel$export(module.exports, "isValidElement", function () { return $52791ebe93c1ad69$export$a8257692ac88316c; }, function (v) { return $52791ebe93c1ad69$export$a8257692ac88316c = v; });
$parcel$export(module.exports, "lazy", function () { return $52791ebe93c1ad69$export$488013bae63b21da; }, function (v) { return $52791ebe93c1ad69$export$488013bae63b21da = v; });
$parcel$export(module.exports, "memo", function () { return $52791ebe93c1ad69$export$7c73462e0d25e514; }, function (v) { return $52791ebe93c1ad69$export$7c73462e0d25e514 = v; });
$parcel$export(module.exports, "startTransition", function () { return $52791ebe93c1ad69$export$7568632d0d33d16d; }, function (v) { return $52791ebe93c1ad69$export$7568632d0d33d16d = v; });
$parcel$export(module.exports, "unstable_act", function () { return $52791ebe93c1ad69$export$88948ce120ea2619; }, function (v) { return $52791ebe93c1ad69$export$88948ce120ea2619 = v; });
$parcel$export(module.exports, "useCallback", function () { return $52791ebe93c1ad69$export$35808ee640e87ca7; }, function (v) { return $52791ebe93c1ad69$export$35808ee640e87ca7 = v; });
$parcel$export(module.exports, "useContext", function () { return $52791ebe93c1ad69$export$fae74005e78b1a27; }, function (v) { return $52791ebe93c1ad69$export$fae74005e78b1a27 = v; });
$parcel$export(module.exports, "useDebugValue", function () { return $52791ebe93c1ad69$export$dc8fbce3eb94dc1e; }, function (v) { return $52791ebe93c1ad69$export$dc8fbce3eb94dc1e = v; });
$parcel$export(module.exports, "useDeferredValue", function () { return $52791ebe93c1ad69$export$6a7bc4e911dc01cf; }, function (v) { return $52791ebe93c1ad69$export$6a7bc4e911dc01cf = v; });
$parcel$export(module.exports, "useEffect", function () { return $52791ebe93c1ad69$export$6d9c69b0de29b591; }, function (v) { return $52791ebe93c1ad69$export$6d9c69b0de29b591 = v; });
$parcel$export(module.exports, "useId", function () { return $52791ebe93c1ad69$export$f680877a34711e37; }, function (v) { return $52791ebe93c1ad69$export$f680877a34711e37 = v; });
$parcel$export(module.exports, "useImperativeHandle", function () { return $52791ebe93c1ad69$export$d5a552a76deda3c2; }, function (v) { return $52791ebe93c1ad69$export$d5a552a76deda3c2 = v; });
$parcel$export(module.exports, "useInsertionEffect", function () { return $52791ebe93c1ad69$export$aaabe4eda9ed9969; }, function (v) { return $52791ebe93c1ad69$export$aaabe4eda9ed9969 = v; });
$parcel$export(module.exports, "useLayoutEffect", function () { return $52791ebe93c1ad69$export$e5c5a5f917a5871c; }, function (v) { return $52791ebe93c1ad69$export$e5c5a5f917a5871c = v; });
$parcel$export(module.exports, "useMemo", function () { return $52791ebe93c1ad69$export$1538c33de8887b59; }, function (v) { return $52791ebe93c1ad69$export$1538c33de8887b59 = v; });
$parcel$export(module.exports, "useReducer", function () { return $52791ebe93c1ad69$export$13e3392192263954; }, function (v) { return $52791ebe93c1ad69$export$13e3392192263954 = v; });
$parcel$export(module.exports, "useRef", function () { return $52791ebe93c1ad69$export$b8f5890fc79d6aca; }, function (v) { return $52791ebe93c1ad69$export$b8f5890fc79d6aca = v; });
$parcel$export(module.exports, "useState", function () { return $52791ebe93c1ad69$export$60241385465d0a34; }, function (v) { return $52791ebe93c1ad69$export$60241385465d0a34 = v; });
$parcel$export(module.exports, "useSyncExternalStore", function () { return $52791ebe93c1ad69$export$306c0aa65ff9ec16; }, function (v) { return $52791ebe93c1ad69$export$306c0aa65ff9ec16 = v; });
$parcel$export(module.exports, "useTransition", function () { return $52791ebe93c1ad69$export$7b286972b8d8ccbf; }, function (v) { return $52791ebe93c1ad69$export$7b286972b8d8ccbf = v; });
$parcel$export(module.exports, "version", function () { return $52791ebe93c1ad69$export$83d89fbfd8236492; }, function (v) { return $52791ebe93c1ad69$export$83d89fbfd8236492 = v; });
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $52791ebe93c1ad69$export$dca3b0875bd9a954;
var $52791ebe93c1ad69$export$16fa2f45be04daa8;
var $52791ebe93c1ad69$export$ffb0004e005737fa;
var $52791ebe93c1ad69$export$e2c29f18771995cb;
var $52791ebe93c1ad69$export$221d75b3f55bb0bd;
var $52791ebe93c1ad69$export$5f8d39834fd61797;
var $52791ebe93c1ad69$export$74bf444e3cd11ea5;
var $52791ebe93c1ad69$export$ae55be85d98224ed;
var $52791ebe93c1ad69$export$3ba232387fd5d6dd;
var $52791ebe93c1ad69$export$e530037191fcd5d7;
var $52791ebe93c1ad69$export$fd42f52fd3ae1109;
var $52791ebe93c1ad69$export$c8a8987d4410bf2d;
var $52791ebe93c1ad69$export$d38cd72104c1f0e9;
var $52791ebe93c1ad69$export$7d1e3a5e95ceca43;
var $52791ebe93c1ad69$export$257a8862b851cb5b;
var $52791ebe93c1ad69$export$a8257692ac88316c;
var $52791ebe93c1ad69$export$488013bae63b21da;
var $52791ebe93c1ad69$export$7c73462e0d25e514;
var $52791ebe93c1ad69$export$7568632d0d33d16d;
var $52791ebe93c1ad69$export$88948ce120ea2619;
var $52791ebe93c1ad69$export$35808ee640e87ca7;
var $52791ebe93c1ad69$export$fae74005e78b1a27;
var $52791ebe93c1ad69$export$dc8fbce3eb94dc1e;
var $52791ebe93c1ad69$export$6a7bc4e911dc01cf;
var $52791ebe93c1ad69$export$6d9c69b0de29b591;
var $52791ebe93c1ad69$export$f680877a34711e37;
var $52791ebe93c1ad69$export$d5a552a76deda3c2;
var $52791ebe93c1ad69$export$aaabe4eda9ed9969;
var $52791ebe93c1ad69$export$e5c5a5f917a5871c;
var $52791ebe93c1ad69$export$1538c33de8887b59;
var $52791ebe93c1ad69$export$13e3392192263954;
var $52791ebe93c1ad69$export$b8f5890fc79d6aca;
var $52791ebe93c1ad69$export$60241385465d0a34;
var $52791ebe93c1ad69$export$306c0aa65ff9ec16;
var $52791ebe93c1ad69$export$7b286972b8d8ccbf;
var $52791ebe93c1ad69$export$83d89fbfd8236492;
"use strict";
var $52791ebe93c1ad69$var$l = Symbol.for("react.element"), $52791ebe93c1ad69$var$n = Symbol.for("react.portal"), $52791ebe93c1ad69$var$p = Symbol.for("react.fragment"), $52791ebe93c1ad69$var$q = Symbol.for("react.strict_mode"), $52791ebe93c1ad69$var$r = Symbol.for("react.profiler"), $52791ebe93c1ad69$var$t = Symbol.for("react.provider"), $52791ebe93c1ad69$var$u = Symbol.for("react.context"), $52791ebe93c1ad69$var$v = Symbol.for("react.forward_ref"), $52791ebe93c1ad69$var$w = Symbol.for("react.suspense"), $52791ebe93c1ad69$var$x = Symbol.for("react.memo"), $52791ebe93c1ad69$var$y = Symbol.for("react.lazy"), $52791ebe93c1ad69$var$z = Symbol.iterator;
function $52791ebe93c1ad69$var$A(a) {
    if (null === a || "object" !== typeof a) return null;
    a = $52791ebe93c1ad69$var$z && a[$52791ebe93c1ad69$var$z] || a["@@iterator"];
    return "function" === typeof a ? a : null;
}
var $52791ebe93c1ad69$var$B = {
    isMounted: function() {
        return !1;
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}, $52791ebe93c1ad69$var$C = Object.assign, $52791ebe93c1ad69$var$D = {};
function $52791ebe93c1ad69$var$E(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = $52791ebe93c1ad69$var$D;
    this.updater = e || $52791ebe93c1ad69$var$B;
}
$52791ebe93c1ad69$var$E.prototype.isReactComponent = {};
$52791ebe93c1ad69$var$E.prototype.setState = function(a, b) {
    if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, a, b, "setState");
};
$52791ebe93c1ad69$var$E.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function $52791ebe93c1ad69$var$F() {}
$52791ebe93c1ad69$var$F.prototype = $52791ebe93c1ad69$var$E.prototype;
function $52791ebe93c1ad69$var$G(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = $52791ebe93c1ad69$var$D;
    this.updater = e || $52791ebe93c1ad69$var$B;
}
var $52791ebe93c1ad69$var$H = $52791ebe93c1ad69$var$G.prototype = new $52791ebe93c1ad69$var$F;
$52791ebe93c1ad69$var$H.constructor = $52791ebe93c1ad69$var$G;
$52791ebe93c1ad69$var$C($52791ebe93c1ad69$var$H, $52791ebe93c1ad69$var$E.prototype);
$52791ebe93c1ad69$var$H.isPureReactComponent = !0;
var $52791ebe93c1ad69$var$I = Array.isArray, $52791ebe93c1ad69$var$J = Object.prototype.hasOwnProperty, $52791ebe93c1ad69$var$K = {
    current: null
}, $52791ebe93c1ad69$var$L = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function $52791ebe93c1ad69$var$M(a, b, e) {
    var d, c = {}, k = null, h = null;
    if (null != b) for(d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b)$52791ebe93c1ad69$var$J.call(b, d) && !$52791ebe93c1ad69$var$L.hasOwnProperty(d) && (c[d] = b[d]);
    var g = arguments.length - 2;
    if (1 === g) c.children = e;
    else if (1 < g) {
        for(var f = Array(g), m = 0; m < g; m++)f[m] = arguments[m + 2];
        c.children = f;
    }
    if (a && a.defaultProps) for(d in g = a.defaultProps, g)void 0 === c[d] && (c[d] = g[d]);
    return {
        $$typeof: $52791ebe93c1ad69$var$l,
        type: a,
        key: k,
        ref: h,
        props: c,
        _owner: $52791ebe93c1ad69$var$K.current
    };
}
function $52791ebe93c1ad69$var$N(a, b) {
    return {
        $$typeof: $52791ebe93c1ad69$var$l,
        type: a.type,
        key: b,
        ref: a.ref,
        props: a.props,
        _owner: a._owner
    };
}
function $52791ebe93c1ad69$var$O(a) {
    return "object" === typeof a && null !== a && a.$$typeof === $52791ebe93c1ad69$var$l;
}
function $52791ebe93c1ad69$var$escape(a) {
    var b = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + a.replace(/[=:]/g, function(a) {
        return b[a];
    });
}
var $52791ebe93c1ad69$var$P = /\/+/g;
function $52791ebe93c1ad69$var$Q(a, b) {
    return "object" === typeof a && null !== a && null != a.key ? $52791ebe93c1ad69$var$escape("" + a.key) : b.toString(36);
}
function $52791ebe93c1ad69$var$R(a, b, e, d, c) {
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
                case $52791ebe93c1ad69$var$l:
                case $52791ebe93c1ad69$var$n:
                    h = !0;
            }
    }
    if (h) return h = a, c = c(h), a = "" === d ? "." + $52791ebe93c1ad69$var$Q(h, 0) : d, $52791ebe93c1ad69$var$I(c) ? (e = "", null != a && (e = a.replace($52791ebe93c1ad69$var$P, "$&/") + "/"), $52791ebe93c1ad69$var$R(c, b, e, "", function(a) {
        return a;
    })) : null != c && ($52791ebe93c1ad69$var$O(c) && (c = $52791ebe93c1ad69$var$N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace($52791ebe93c1ad69$var$P, "$&/") + "/") + a)), b.push(c)), 1;
    h = 0;
    d = "" === d ? "." : d + ":";
    if ($52791ebe93c1ad69$var$I(a)) for(var g = 0; g < a.length; g++){
        k = a[g];
        var f = d + $52791ebe93c1ad69$var$Q(k, g);
        h += $52791ebe93c1ad69$var$R(k, b, e, f, c);
    }
    else if (f = $52791ebe93c1ad69$var$A(a), "function" === typeof f) for(a = f.call(a), g = 0; !(k = a.next()).done;)k = k.value, f = d + $52791ebe93c1ad69$var$Q(k, g++), h += $52791ebe93c1ad69$var$R(k, b, e, f, c);
    else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
    return h;
}
function $52791ebe93c1ad69$var$S(a, b, e) {
    if (null == a) return a;
    var d = [], c = 0;
    $52791ebe93c1ad69$var$R(a, d, "", "", function(a) {
        return b.call(e, a, c++);
    });
    return d;
}
function $52791ebe93c1ad69$var$T(a) {
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
var $52791ebe93c1ad69$var$U = {
    current: null
}, $52791ebe93c1ad69$var$V = {
    transition: null
}, $52791ebe93c1ad69$var$W = {
    ReactCurrentDispatcher: $52791ebe93c1ad69$var$U,
    ReactCurrentBatchConfig: $52791ebe93c1ad69$var$V,
    ReactCurrentOwner: $52791ebe93c1ad69$var$K
};
function $52791ebe93c1ad69$var$X() {
    throw Error("act(...) is not supported in production builds of React.");
}
$52791ebe93c1ad69$export$dca3b0875bd9a954 = {
    map: $52791ebe93c1ad69$var$S,
    forEach: function(a, b, e) {
        $52791ebe93c1ad69$var$S(a, function() {
            b.apply(this, arguments);
        }, e);
    },
    count: function(a) {
        var b = 0;
        $52791ebe93c1ad69$var$S(a, function() {
            b++;
        });
        return b;
    },
    toArray: function(a) {
        return $52791ebe93c1ad69$var$S(a, function(a) {
            return a;
        }) || [];
    },
    only: function(a) {
        if (!$52791ebe93c1ad69$var$O(a)) throw Error("React.Children.only expected to receive a single React element child.");
        return a;
    }
};
$52791ebe93c1ad69$export$16fa2f45be04daa8 = $52791ebe93c1ad69$var$E;
$52791ebe93c1ad69$export$ffb0004e005737fa = $52791ebe93c1ad69$var$p;
$52791ebe93c1ad69$export$e2c29f18771995cb = $52791ebe93c1ad69$var$r;
$52791ebe93c1ad69$export$221d75b3f55bb0bd = $52791ebe93c1ad69$var$G;
$52791ebe93c1ad69$export$5f8d39834fd61797 = $52791ebe93c1ad69$var$q;
$52791ebe93c1ad69$export$74bf444e3cd11ea5 = $52791ebe93c1ad69$var$w;
$52791ebe93c1ad69$export$ae55be85d98224ed = $52791ebe93c1ad69$var$W;
$52791ebe93c1ad69$export$3ba232387fd5d6dd = $52791ebe93c1ad69$var$X;
$52791ebe93c1ad69$export$e530037191fcd5d7 = function(a, b, e) {
    if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
    var d = $52791ebe93c1ad69$var$C({}, a.props), c = a.key, k = a.ref, h = a._owner;
    if (null != b) {
        void 0 !== b.ref && (k = b.ref, h = $52791ebe93c1ad69$var$K.current);
        void 0 !== b.key && (c = "" + b.key);
        if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
        for(f in b)$52791ebe93c1ad69$var$J.call(b, f) && !$52791ebe93c1ad69$var$L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
    }
    var f = arguments.length - 2;
    if (1 === f) d.children = e;
    else if (1 < f) {
        g = Array(f);
        for(var m = 0; m < f; m++)g[m] = arguments[m + 2];
        d.children = g;
    }
    return {
        $$typeof: $52791ebe93c1ad69$var$l,
        type: a.type,
        key: c,
        ref: k,
        props: d,
        _owner: h
    };
};
$52791ebe93c1ad69$export$fd42f52fd3ae1109 = function(a) {
    a = {
        $$typeof: $52791ebe93c1ad69$var$u,
        _currentValue: a,
        _currentValue2: a,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    };
    a.Provider = {
        $$typeof: $52791ebe93c1ad69$var$t,
        _context: a
    };
    return a.Consumer = a;
};
$52791ebe93c1ad69$export$c8a8987d4410bf2d = $52791ebe93c1ad69$var$M;
$52791ebe93c1ad69$export$d38cd72104c1f0e9 = function(a) {
    var b = $52791ebe93c1ad69$var$M.bind(null, a);
    b.type = a;
    return b;
};
$52791ebe93c1ad69$export$7d1e3a5e95ceca43 = function() {
    return {
        current: null
    };
};
$52791ebe93c1ad69$export$257a8862b851cb5b = function(a) {
    return {
        $$typeof: $52791ebe93c1ad69$var$v,
        render: a
    };
};
$52791ebe93c1ad69$export$a8257692ac88316c = $52791ebe93c1ad69$var$O;
$52791ebe93c1ad69$export$488013bae63b21da = function(a) {
    return {
        $$typeof: $52791ebe93c1ad69$var$y,
        _payload: {
            _status: -1,
            _result: a
        },
        _init: $52791ebe93c1ad69$var$T
    };
};
$52791ebe93c1ad69$export$7c73462e0d25e514 = function(a, b) {
    return {
        $$typeof: $52791ebe93c1ad69$var$x,
        type: a,
        compare: void 0 === b ? null : b
    };
};
$52791ebe93c1ad69$export$7568632d0d33d16d = function(a) {
    var b = $52791ebe93c1ad69$var$V.transition;
    $52791ebe93c1ad69$var$V.transition = {};
    try {
        a();
    } finally{
        $52791ebe93c1ad69$var$V.transition = b;
    }
};
$52791ebe93c1ad69$export$88948ce120ea2619 = $52791ebe93c1ad69$var$X;
$52791ebe93c1ad69$export$35808ee640e87ca7 = function(a, b) {
    return $52791ebe93c1ad69$var$U.current.useCallback(a, b);
};
$52791ebe93c1ad69$export$fae74005e78b1a27 = function(a) {
    return $52791ebe93c1ad69$var$U.current.useContext(a);
};
$52791ebe93c1ad69$export$dc8fbce3eb94dc1e = function() {};
$52791ebe93c1ad69$export$6a7bc4e911dc01cf = function(a) {
    return $52791ebe93c1ad69$var$U.current.useDeferredValue(a);
};
$52791ebe93c1ad69$export$6d9c69b0de29b591 = function(a, b) {
    return $52791ebe93c1ad69$var$U.current.useEffect(a, b);
};
$52791ebe93c1ad69$export$f680877a34711e37 = function() {
    return $52791ebe93c1ad69$var$U.current.useId();
};
$52791ebe93c1ad69$export$d5a552a76deda3c2 = function(a, b, e) {
    return $52791ebe93c1ad69$var$U.current.useImperativeHandle(a, b, e);
};
$52791ebe93c1ad69$export$aaabe4eda9ed9969 = function(a, b) {
    return $52791ebe93c1ad69$var$U.current.useInsertionEffect(a, b);
};
$52791ebe93c1ad69$export$e5c5a5f917a5871c = function(a, b) {
    return $52791ebe93c1ad69$var$U.current.useLayoutEffect(a, b);
};
$52791ebe93c1ad69$export$1538c33de8887b59 = function(a, b) {
    return $52791ebe93c1ad69$var$U.current.useMemo(a, b);
};
$52791ebe93c1ad69$export$13e3392192263954 = function(a, b, e) {
    return $52791ebe93c1ad69$var$U.current.useReducer(a, b, e);
};
$52791ebe93c1ad69$export$b8f5890fc79d6aca = function(a) {
    return $52791ebe93c1ad69$var$U.current.useRef(a);
};
$52791ebe93c1ad69$export$60241385465d0a34 = function(a) {
    return $52791ebe93c1ad69$var$U.current.useState(a);
};
$52791ebe93c1ad69$export$306c0aa65ff9ec16 = function(a, b, e) {
    return $52791ebe93c1ad69$var$U.current.useSyncExternalStore(a, b, e);
};
$52791ebe93c1ad69$export$7b286972b8d8ccbf = function() {
    return $52791ebe93c1ad69$var$U.current.useTransition();
};
$52791ebe93c1ad69$export$83d89fbfd8236492 = "18.3.1";

});



parcelRegister("6M74L", function(module, exports) {

$parcel$export(module.exports, "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED", function () { return $4eecb6e629e760ea$export$ae55be85d98224ed; }, function (v) { return $4eecb6e629e760ea$export$ae55be85d98224ed = v; });
$parcel$export(module.exports, "createPortal", function () { return $4eecb6e629e760ea$export$d39a5bbd09211389; }, function (v) { return $4eecb6e629e760ea$export$d39a5bbd09211389 = v; });
$parcel$export(module.exports, "createRoot", function () { return $4eecb6e629e760ea$export$882461b6382ed46c; }, function (v) { return $4eecb6e629e760ea$export$882461b6382ed46c = v; });
$parcel$export(module.exports, "findDOMNode", function () { return $4eecb6e629e760ea$export$466bfc07425424d5; }, function (v) { return $4eecb6e629e760ea$export$466bfc07425424d5 = v; });
$parcel$export(module.exports, "flushSync", function () { return $4eecb6e629e760ea$export$cd75ccfd720a3cd4; }, function (v) { return $4eecb6e629e760ea$export$cd75ccfd720a3cd4 = v; });
$parcel$export(module.exports, "hydrate", function () { return $4eecb6e629e760ea$export$fa8d919ba61d84db; }, function (v) { return $4eecb6e629e760ea$export$fa8d919ba61d84db = v; });
$parcel$export(module.exports, "hydrateRoot", function () { return $4eecb6e629e760ea$export$757ceba2d55c277e; }, function (v) { return $4eecb6e629e760ea$export$757ceba2d55c277e = v; });
$parcel$export(module.exports, "render", function () { return $4eecb6e629e760ea$export$b3890eb0ae9dca99; }, function (v) { return $4eecb6e629e760ea$export$b3890eb0ae9dca99 = v; });
$parcel$export(module.exports, "unmountComponentAtNode", function () { return $4eecb6e629e760ea$export$502457920280e6be; }, function (v) { return $4eecb6e629e760ea$export$502457920280e6be = v; });
$parcel$export(module.exports, "unstable_batchedUpdates", function () { return $4eecb6e629e760ea$export$c78a37762a8d58e1; }, function (v) { return $4eecb6e629e760ea$export$c78a37762a8d58e1 = v; });
$parcel$export(module.exports, "unstable_renderSubtreeIntoContainer", function () { return $4eecb6e629e760ea$export$dc54d992c10e8a18; }, function (v) { return $4eecb6e629e760ea$export$dc54d992c10e8a18 = v; });
$parcel$export(module.exports, "version", function () { return $4eecb6e629e760ea$export$83d89fbfd8236492; }, function (v) { return $4eecb6e629e760ea$export$83d89fbfd8236492 = v; });
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
*/ var $4eecb6e629e760ea$export$ae55be85d98224ed;
var $4eecb6e629e760ea$export$d39a5bbd09211389;
var $4eecb6e629e760ea$export$882461b6382ed46c;
var $4eecb6e629e760ea$export$466bfc07425424d5;
var $4eecb6e629e760ea$export$cd75ccfd720a3cd4;
var $4eecb6e629e760ea$export$fa8d919ba61d84db;
var $4eecb6e629e760ea$export$757ceba2d55c277e;
var $4eecb6e629e760ea$export$b3890eb0ae9dca99;
var $4eecb6e629e760ea$export$502457920280e6be;
var $4eecb6e629e760ea$export$c78a37762a8d58e1;
var $4eecb6e629e760ea$export$dc54d992c10e8a18;
var $4eecb6e629e760ea$export$83d89fbfd8236492;
"use strict";

var $kdEmn = parcelRequire("kdEmn");

var $7XiEX = parcelRequire("7XiEX");
function $4eecb6e629e760ea$var$p(a) {
    for(var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)b += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var $4eecb6e629e760ea$var$da = new Set, $4eecb6e629e760ea$var$ea = {};
function $4eecb6e629e760ea$var$fa(a, b) {
    $4eecb6e629e760ea$var$ha(a, b);
    $4eecb6e629e760ea$var$ha(a + "Capture", b);
}
function $4eecb6e629e760ea$var$ha(a, b) {
    $4eecb6e629e760ea$var$ea[a] = b;
    for(a = 0; a < b.length; a++)$4eecb6e629e760ea$var$da.add(b[a]);
}
var $4eecb6e629e760ea$var$ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), $4eecb6e629e760ea$var$ja = Object.prototype.hasOwnProperty, $4eecb6e629e760ea$var$ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, $4eecb6e629e760ea$var$la = {}, $4eecb6e629e760ea$var$ma = {};
function $4eecb6e629e760ea$var$oa(a) {
    if ($4eecb6e629e760ea$var$ja.call($4eecb6e629e760ea$var$ma, a)) return !0;
    if ($4eecb6e629e760ea$var$ja.call($4eecb6e629e760ea$var$la, a)) return !1;
    if ($4eecb6e629e760ea$var$ka.test(a)) return $4eecb6e629e760ea$var$ma[a] = !0;
    $4eecb6e629e760ea$var$la[a] = !0;
    return !1;
}
function $4eecb6e629e760ea$var$pa(a, b, c, d) {
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
function $4eecb6e629e760ea$var$qa(a, b, c, d) {
    if (null === b || "undefined" === typeof b || $4eecb6e629e760ea$var$pa(a, b, c, d)) return !0;
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
function $4eecb6e629e760ea$var$v(a, b, c, d, e, f, g) {
    this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
    this.attributeName = d;
    this.attributeNamespace = e;
    this.mustUseProperty = c;
    this.propertyName = a;
    this.type = b;
    this.sanitizeURL = f;
    this.removeEmptyString = g;
}
var $4eecb6e629e760ea$var$z = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    $4eecb6e629e760ea$var$z[a] = new $4eecb6e629e760ea$var$v(a, 0, !1, a, null, !1, !1);
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
    $4eecb6e629e760ea$var$z[b] = new $4eecb6e629e760ea$var$v(b, 1, !1, a[1], null, !1, !1);
});
[
    "contentEditable",
    "draggable",
    "spellCheck",
    "value"
].forEach(function(a) {
    $4eecb6e629e760ea$var$z[a] = new $4eecb6e629e760ea$var$v(a, 2, !1, a.toLowerCase(), null, !1, !1);
});
[
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha"
].forEach(function(a) {
    $4eecb6e629e760ea$var$z[a] = new $4eecb6e629e760ea$var$v(a, 2, !1, a, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    $4eecb6e629e760ea$var$z[a] = new $4eecb6e629e760ea$var$v(a, 3, !1, a.toLowerCase(), null, !1, !1);
});
[
    "checked",
    "multiple",
    "muted",
    "selected"
].forEach(function(a) {
    $4eecb6e629e760ea$var$z[a] = new $4eecb6e629e760ea$var$v(a, 3, !0, a, null, !1, !1);
});
[
    "capture",
    "download"
].forEach(function(a) {
    $4eecb6e629e760ea$var$z[a] = new $4eecb6e629e760ea$var$v(a, 4, !1, a, null, !1, !1);
});
[
    "cols",
    "rows",
    "size",
    "span"
].forEach(function(a) {
    $4eecb6e629e760ea$var$z[a] = new $4eecb6e629e760ea$var$v(a, 6, !1, a, null, !1, !1);
});
[
    "rowSpan",
    "start"
].forEach(function(a) {
    $4eecb6e629e760ea$var$z[a] = new $4eecb6e629e760ea$var$v(a, 5, !1, a.toLowerCase(), null, !1, !1);
});
var $4eecb6e629e760ea$var$ra = /[\-:]([a-z])/g;
function $4eecb6e629e760ea$var$sa(a) {
    return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var b = a.replace($4eecb6e629e760ea$var$ra, $4eecb6e629e760ea$var$sa);
    $4eecb6e629e760ea$var$z[b] = new $4eecb6e629e760ea$var$v(b, 1, !1, a, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var b = a.replace($4eecb6e629e760ea$var$ra, $4eecb6e629e760ea$var$sa);
    $4eecb6e629e760ea$var$z[b] = new $4eecb6e629e760ea$var$v(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
});
[
    "xml:base",
    "xml:lang",
    "xml:space"
].forEach(function(a) {
    var b = a.replace($4eecb6e629e760ea$var$ra, $4eecb6e629e760ea$var$sa);
    $4eecb6e629e760ea$var$z[b] = new $4eecb6e629e760ea$var$v(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
[
    "tabIndex",
    "crossOrigin"
].forEach(function(a) {
    $4eecb6e629e760ea$var$z[a] = new $4eecb6e629e760ea$var$v(a, 1, !1, a.toLowerCase(), null, !1, !1);
});
$4eecb6e629e760ea$var$z.xlinkHref = new $4eecb6e629e760ea$var$v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
[
    "src",
    "href",
    "action",
    "formAction"
].forEach(function(a) {
    $4eecb6e629e760ea$var$z[a] = new $4eecb6e629e760ea$var$v(a, 1, !1, a.toLowerCase(), null, !0, !0);
});
function $4eecb6e629e760ea$var$ta(a, b, c, d) {
    var e = $4eecb6e629e760ea$var$z.hasOwnProperty(b) ? $4eecb6e629e760ea$var$z[b] : null;
    if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) $4eecb6e629e760ea$var$qa(b, c, e, d) && (c = null), d || null === e ? $4eecb6e629e760ea$var$oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
}
var $4eecb6e629e760ea$var$ua = $kdEmn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, $4eecb6e629e760ea$var$va = Symbol.for("react.element"), $4eecb6e629e760ea$var$wa = Symbol.for("react.portal"), $4eecb6e629e760ea$var$ya = Symbol.for("react.fragment"), $4eecb6e629e760ea$var$za = Symbol.for("react.strict_mode"), $4eecb6e629e760ea$var$Aa = Symbol.for("react.profiler"), $4eecb6e629e760ea$var$Ba = Symbol.for("react.provider"), $4eecb6e629e760ea$var$Ca = Symbol.for("react.context"), $4eecb6e629e760ea$var$Da = Symbol.for("react.forward_ref"), $4eecb6e629e760ea$var$Ea = Symbol.for("react.suspense"), $4eecb6e629e760ea$var$Fa = Symbol.for("react.suspense_list"), $4eecb6e629e760ea$var$Ga = Symbol.for("react.memo"), $4eecb6e629e760ea$var$Ha = Symbol.for("react.lazy");
Symbol.for("react.scope");
Symbol.for("react.debug_trace_mode");
var $4eecb6e629e760ea$var$Ia = Symbol.for("react.offscreen");
Symbol.for("react.legacy_hidden");
Symbol.for("react.cache");
Symbol.for("react.tracing_marker");
var $4eecb6e629e760ea$var$Ja = Symbol.iterator;
function $4eecb6e629e760ea$var$Ka(a) {
    if (null === a || "object" !== typeof a) return null;
    a = $4eecb6e629e760ea$var$Ja && a[$4eecb6e629e760ea$var$Ja] || a["@@iterator"];
    return "function" === typeof a ? a : null;
}
var $4eecb6e629e760ea$var$A = Object.assign, $4eecb6e629e760ea$var$La;
function $4eecb6e629e760ea$var$Ma(a) {
    if (void 0 === $4eecb6e629e760ea$var$La) try {
        throw Error();
    } catch (c) {
        var b = c.stack.trim().match(/\n( *(at )?)/);
        $4eecb6e629e760ea$var$La = b && b[1] || "";
    }
    return "\n" + $4eecb6e629e760ea$var$La + a;
}
var $4eecb6e629e760ea$var$Na = !1;
function $4eecb6e629e760ea$var$Oa(a, b) {
    if (!a || $4eecb6e629e760ea$var$Na) return "";
    $4eecb6e629e760ea$var$Na = !0;
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
        $4eecb6e629e760ea$var$Na = !1, Error.prepareStackTrace = c;
    }
    return (a = a ? a.displayName || a.name : "") ? $4eecb6e629e760ea$var$Ma(a) : "";
}
function $4eecb6e629e760ea$var$Pa(a) {
    switch(a.tag){
        case 5:
            return $4eecb6e629e760ea$var$Ma(a.type);
        case 16:
            return $4eecb6e629e760ea$var$Ma("Lazy");
        case 13:
            return $4eecb6e629e760ea$var$Ma("Suspense");
        case 19:
            return $4eecb6e629e760ea$var$Ma("SuspenseList");
        case 0:
        case 2:
        case 15:
            return a = $4eecb6e629e760ea$var$Oa(a.type, !1), a;
        case 11:
            return a = $4eecb6e629e760ea$var$Oa(a.type.render, !1), a;
        case 1:
            return a = $4eecb6e629e760ea$var$Oa(a.type, !0), a;
        default:
            return "";
    }
}
function $4eecb6e629e760ea$var$Qa(a) {
    if (null == a) return null;
    if ("function" === typeof a) return a.displayName || a.name || null;
    if ("string" === typeof a) return a;
    switch(a){
        case $4eecb6e629e760ea$var$ya:
            return "Fragment";
        case $4eecb6e629e760ea$var$wa:
            return "Portal";
        case $4eecb6e629e760ea$var$Aa:
            return "Profiler";
        case $4eecb6e629e760ea$var$za:
            return "StrictMode";
        case $4eecb6e629e760ea$var$Ea:
            return "Suspense";
        case $4eecb6e629e760ea$var$Fa:
            return "SuspenseList";
    }
    if ("object" === typeof a) switch(a.$$typeof){
        case $4eecb6e629e760ea$var$Ca:
            return (a.displayName || "Context") + ".Consumer";
        case $4eecb6e629e760ea$var$Ba:
            return (a._context.displayName || "Context") + ".Provider";
        case $4eecb6e629e760ea$var$Da:
            var b = a.render;
            a = a.displayName;
            a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
            return a;
        case $4eecb6e629e760ea$var$Ga:
            return b = a.displayName || null, null !== b ? b : $4eecb6e629e760ea$var$Qa(a.type) || "Memo";
        case $4eecb6e629e760ea$var$Ha:
            b = a._payload;
            a = a._init;
            try {
                return $4eecb6e629e760ea$var$Qa(a(b));
            } catch (c) {}
    }
    return null;
}
function $4eecb6e629e760ea$var$Ra(a) {
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
            return $4eecb6e629e760ea$var$Qa(b);
        case 8:
            return b === $4eecb6e629e760ea$var$za ? "StrictMode" : "Mode";
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
function $4eecb6e629e760ea$var$Sa(a) {
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
function $4eecb6e629e760ea$var$Ta(a) {
    var b = a.type;
    return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
}
function $4eecb6e629e760ea$var$Ua(a) {
    var b = $4eecb6e629e760ea$var$Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
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
function $4eecb6e629e760ea$var$Va(a) {
    a._valueTracker || (a._valueTracker = $4eecb6e629e760ea$var$Ua(a));
}
function $4eecb6e629e760ea$var$Wa(a) {
    if (!a) return !1;
    var b = a._valueTracker;
    if (!b) return !0;
    var c = b.getValue();
    var d = "";
    a && (d = $4eecb6e629e760ea$var$Ta(a) ? a.checked ? "true" : "false" : a.value);
    a = d;
    return a !== c ? (b.setValue(a), !0) : !1;
}
function $4eecb6e629e760ea$var$Xa(a) {
    a = a || ("undefined" !== typeof document ? document : void 0);
    if ("undefined" === typeof a) return null;
    try {
        return a.activeElement || a.body;
    } catch (b) {
        return a.body;
    }
}
function $4eecb6e629e760ea$var$Ya(a, b) {
    var c = b.checked;
    return $4eecb6e629e760ea$var$A({}, b, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != c ? c : a._wrapperState.initialChecked
    });
}
function $4eecb6e629e760ea$var$Za(a, b) {
    var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
    c = $4eecb6e629e760ea$var$Sa(null != b.value ? b.value : c);
    a._wrapperState = {
        initialChecked: d,
        initialValue: c,
        controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
    };
}
function $4eecb6e629e760ea$var$ab(a, b) {
    b = b.checked;
    null != b && $4eecb6e629e760ea$var$ta(a, "checked", b, !1);
}
function $4eecb6e629e760ea$var$bb(a, b) {
    $4eecb6e629e760ea$var$ab(a, b);
    var c = $4eecb6e629e760ea$var$Sa(b.value), d = b.type;
    if (null != c) {
        if ("number" === d) {
            if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
        } else a.value !== "" + c && (a.value = "" + c);
    } else if ("submit" === d || "reset" === d) {
        a.removeAttribute("value");
        return;
    }
    b.hasOwnProperty("value") ? $4eecb6e629e760ea$var$cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && $4eecb6e629e760ea$var$cb(a, b.type, $4eecb6e629e760ea$var$Sa(b.defaultValue));
    null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
}
function $4eecb6e629e760ea$var$db(a, b, c) {
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
function $4eecb6e629e760ea$var$cb(a, b, c) {
    if ("number" !== b || $4eecb6e629e760ea$var$Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}
var $4eecb6e629e760ea$var$eb = Array.isArray;
function $4eecb6e629e760ea$var$fb(a, b, c, d) {
    a = a.options;
    if (b) {
        b = {};
        for(var e = 0; e < c.length; e++)b["$" + c[e]] = !0;
        for(c = 0; c < a.length; c++)e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = !0);
    } else {
        c = "" + $4eecb6e629e760ea$var$Sa(c);
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
function $4eecb6e629e760ea$var$gb(a, b) {
    if (null != b.dangerouslySetInnerHTML) throw Error($4eecb6e629e760ea$var$p(91));
    return $4eecb6e629e760ea$var$A({}, b, {
        value: void 0,
        defaultValue: void 0,
        children: "" + a._wrapperState.initialValue
    });
}
function $4eecb6e629e760ea$var$hb(a, b) {
    var c = b.value;
    if (null == c) {
        c = b.children;
        b = b.defaultValue;
        if (null != c) {
            if (null != b) throw Error($4eecb6e629e760ea$var$p(92));
            if ($4eecb6e629e760ea$var$eb(c)) {
                if (1 < c.length) throw Error($4eecb6e629e760ea$var$p(93));
                c = c[0];
            }
            b = c;
        }
        null == b && (b = "");
        c = b;
    }
    a._wrapperState = {
        initialValue: $4eecb6e629e760ea$var$Sa(c)
    };
}
function $4eecb6e629e760ea$var$ib(a, b) {
    var c = $4eecb6e629e760ea$var$Sa(b.value), d = $4eecb6e629e760ea$var$Sa(b.defaultValue);
    null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
    null != d && (a.defaultValue = "" + d);
}
function $4eecb6e629e760ea$var$jb(a) {
    var b = a.textContent;
    b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
}
function $4eecb6e629e760ea$var$kb(a) {
    switch(a){
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}
function $4eecb6e629e760ea$var$lb(a, b) {
    return null == a || "http://www.w3.org/1999/xhtml" === a ? $4eecb6e629e760ea$var$kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
}
var $4eecb6e629e760ea$var$mb, $4eecb6e629e760ea$var$nb = function(a) {
    return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
        MSApp.execUnsafeLocalFunction(function() {
            return a(b, c, d, e);
        });
    } : a;
}(function(a, b) {
    if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;
    else {
        $4eecb6e629e760ea$var$mb = $4eecb6e629e760ea$var$mb || document.createElement("div");
        $4eecb6e629e760ea$var$mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
        for(b = $4eecb6e629e760ea$var$mb.firstChild; a.firstChild;)a.removeChild(a.firstChild);
        for(; b.firstChild;)a.appendChild(b.firstChild);
    }
});
function $4eecb6e629e760ea$var$ob(a, b) {
    if (b) {
        var c = a.firstChild;
        if (c && c === a.lastChild && 3 === c.nodeType) {
            c.nodeValue = b;
            return;
        }
    }
    a.textContent = b;
}
var $4eecb6e629e760ea$var$pb = {
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
}, $4eecb6e629e760ea$var$qb = [
    "Webkit",
    "ms",
    "Moz",
    "O"
];
Object.keys($4eecb6e629e760ea$var$pb).forEach(function(a) {
    $4eecb6e629e760ea$var$qb.forEach(function(b) {
        b = b + a.charAt(0).toUpperCase() + a.substring(1);
        $4eecb6e629e760ea$var$pb[b] = $4eecb6e629e760ea$var$pb[a];
    });
});
function $4eecb6e629e760ea$var$rb(a, b, c) {
    return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || $4eecb6e629e760ea$var$pb.hasOwnProperty(a) && $4eecb6e629e760ea$var$pb[a] ? ("" + b).trim() : b + "px";
}
function $4eecb6e629e760ea$var$sb(a, b) {
    a = a.style;
    for(var c in b)if (b.hasOwnProperty(c)) {
        var d = 0 === c.indexOf("--"), e = $4eecb6e629e760ea$var$rb(c, b[c], d);
        "float" === c && (c = "cssFloat");
        d ? a.setProperty(c, e) : a[c] = e;
    }
}
var $4eecb6e629e760ea$var$tb = $4eecb6e629e760ea$var$A({
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
function $4eecb6e629e760ea$var$ub(a, b) {
    if (b) {
        if ($4eecb6e629e760ea$var$tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error($4eecb6e629e760ea$var$p(137, a));
        if (null != b.dangerouslySetInnerHTML) {
            if (null != b.children) throw Error($4eecb6e629e760ea$var$p(60));
            if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error($4eecb6e629e760ea$var$p(61));
        }
        if (null != b.style && "object" !== typeof b.style) throw Error($4eecb6e629e760ea$var$p(62));
    }
}
function $4eecb6e629e760ea$var$vb(a, b) {
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
var $4eecb6e629e760ea$var$wb = null;
function $4eecb6e629e760ea$var$xb(a) {
    a = a.target || a.srcElement || window;
    a.correspondingUseElement && (a = a.correspondingUseElement);
    return 3 === a.nodeType ? a.parentNode : a;
}
var $4eecb6e629e760ea$var$yb = null, $4eecb6e629e760ea$var$zb = null, $4eecb6e629e760ea$var$Ab = null;
function $4eecb6e629e760ea$var$Bb(a) {
    if (a = $4eecb6e629e760ea$var$Cb(a)) {
        if ("function" !== typeof $4eecb6e629e760ea$var$yb) throw Error($4eecb6e629e760ea$var$p(280));
        var b = a.stateNode;
        b && (b = $4eecb6e629e760ea$var$Db(b), $4eecb6e629e760ea$var$yb(a.stateNode, a.type, b));
    }
}
function $4eecb6e629e760ea$var$Eb(a) {
    $4eecb6e629e760ea$var$zb ? $4eecb6e629e760ea$var$Ab ? $4eecb6e629e760ea$var$Ab.push(a) : $4eecb6e629e760ea$var$Ab = [
        a
    ] : $4eecb6e629e760ea$var$zb = a;
}
function $4eecb6e629e760ea$var$Fb() {
    if ($4eecb6e629e760ea$var$zb) {
        var a = $4eecb6e629e760ea$var$zb, b = $4eecb6e629e760ea$var$Ab;
        $4eecb6e629e760ea$var$Ab = $4eecb6e629e760ea$var$zb = null;
        $4eecb6e629e760ea$var$Bb(a);
        if (b) for(a = 0; a < b.length; a++)$4eecb6e629e760ea$var$Bb(b[a]);
    }
}
function $4eecb6e629e760ea$var$Gb(a, b) {
    return a(b);
}
function $4eecb6e629e760ea$var$Hb() {}
var $4eecb6e629e760ea$var$Ib = !1;
function $4eecb6e629e760ea$var$Jb(a, b, c) {
    if ($4eecb6e629e760ea$var$Ib) return a(b, c);
    $4eecb6e629e760ea$var$Ib = !0;
    try {
        return $4eecb6e629e760ea$var$Gb(a, b, c);
    } finally{
        if ($4eecb6e629e760ea$var$Ib = !1, null !== $4eecb6e629e760ea$var$zb || null !== $4eecb6e629e760ea$var$Ab) $4eecb6e629e760ea$var$Hb(), $4eecb6e629e760ea$var$Fb();
    }
}
function $4eecb6e629e760ea$var$Kb(a, b) {
    var c = a.stateNode;
    if (null === c) return null;
    var d = $4eecb6e629e760ea$var$Db(c);
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
    if (c && "function" !== typeof c) throw Error($4eecb6e629e760ea$var$p(231, b, typeof c));
    return c;
}
var $4eecb6e629e760ea$var$Lb = !1;
if ($4eecb6e629e760ea$var$ia) try {
    var $4eecb6e629e760ea$var$Mb = {};
    Object.defineProperty($4eecb6e629e760ea$var$Mb, "passive", {
        get: function() {
            $4eecb6e629e760ea$var$Lb = !0;
        }
    });
    window.addEventListener("test", $4eecb6e629e760ea$var$Mb, $4eecb6e629e760ea$var$Mb);
    window.removeEventListener("test", $4eecb6e629e760ea$var$Mb, $4eecb6e629e760ea$var$Mb);
} catch (a) {
    $4eecb6e629e760ea$var$Lb = !1;
}
function $4eecb6e629e760ea$var$Nb(a, b, c, d, e, f, g, h, k) {
    var l = Array.prototype.slice.call(arguments, 3);
    try {
        b.apply(c, l);
    } catch (m) {
        this.onError(m);
    }
}
var $4eecb6e629e760ea$var$Ob = !1, $4eecb6e629e760ea$var$Pb = null, $4eecb6e629e760ea$var$Qb = !1, $4eecb6e629e760ea$var$Rb = null, $4eecb6e629e760ea$var$Sb = {
    onError: function(a) {
        $4eecb6e629e760ea$var$Ob = !0;
        $4eecb6e629e760ea$var$Pb = a;
    }
};
function $4eecb6e629e760ea$var$Tb(a, b, c, d, e, f, g, h, k) {
    $4eecb6e629e760ea$var$Ob = !1;
    $4eecb6e629e760ea$var$Pb = null;
    $4eecb6e629e760ea$var$Nb.apply($4eecb6e629e760ea$var$Sb, arguments);
}
function $4eecb6e629e760ea$var$Ub(a, b, c, d, e, f, g, h, k) {
    $4eecb6e629e760ea$var$Tb.apply(this, arguments);
    if ($4eecb6e629e760ea$var$Ob) {
        if ($4eecb6e629e760ea$var$Ob) {
            var l = $4eecb6e629e760ea$var$Pb;
            $4eecb6e629e760ea$var$Ob = !1;
            $4eecb6e629e760ea$var$Pb = null;
        } else throw Error($4eecb6e629e760ea$var$p(198));
        $4eecb6e629e760ea$var$Qb || ($4eecb6e629e760ea$var$Qb = !0, $4eecb6e629e760ea$var$Rb = l);
    }
}
function $4eecb6e629e760ea$var$Vb(a) {
    var b = a, c = a;
    if (a.alternate) for(; b.return;)b = b.return;
    else {
        a = b;
        do b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
        while (a);
    }
    return 3 === b.tag ? c : null;
}
function $4eecb6e629e760ea$var$Wb(a) {
    if (13 === a.tag) {
        var b = a.memoizedState;
        null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
        if (null !== b) return b.dehydrated;
    }
    return null;
}
function $4eecb6e629e760ea$var$Xb(a) {
    if ($4eecb6e629e760ea$var$Vb(a) !== a) throw Error($4eecb6e629e760ea$var$p(188));
}
function $4eecb6e629e760ea$var$Yb(a) {
    var b = a.alternate;
    if (!b) {
        b = $4eecb6e629e760ea$var$Vb(a);
        if (null === b) throw Error($4eecb6e629e760ea$var$p(188));
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
                if (f === c) return $4eecb6e629e760ea$var$Xb(e), a;
                if (f === d) return $4eecb6e629e760ea$var$Xb(e), b;
                f = f.sibling;
            }
            throw Error($4eecb6e629e760ea$var$p(188));
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
                if (!g) throw Error($4eecb6e629e760ea$var$p(189));
            }
        }
        if (c.alternate !== d) throw Error($4eecb6e629e760ea$var$p(190));
    }
    if (3 !== c.tag) throw Error($4eecb6e629e760ea$var$p(188));
    return c.stateNode.current === c ? a : b;
}
function $4eecb6e629e760ea$var$Zb(a) {
    a = $4eecb6e629e760ea$var$Yb(a);
    return null !== a ? $4eecb6e629e760ea$var$$b(a) : null;
}
function $4eecb6e629e760ea$var$$b(a) {
    if (5 === a.tag || 6 === a.tag) return a;
    for(a = a.child; null !== a;){
        var b = $4eecb6e629e760ea$var$$b(a);
        if (null !== b) return b;
        a = a.sibling;
    }
    return null;
}
var $4eecb6e629e760ea$var$ac = $7XiEX.unstable_scheduleCallback, $4eecb6e629e760ea$var$bc = $7XiEX.unstable_cancelCallback, $4eecb6e629e760ea$var$cc = $7XiEX.unstable_shouldYield, $4eecb6e629e760ea$var$dc = $7XiEX.unstable_requestPaint, $4eecb6e629e760ea$var$B = $7XiEX.unstable_now, $4eecb6e629e760ea$var$ec = $7XiEX.unstable_getCurrentPriorityLevel, $4eecb6e629e760ea$var$fc = $7XiEX.unstable_ImmediatePriority, $4eecb6e629e760ea$var$gc = $7XiEX.unstable_UserBlockingPriority, $4eecb6e629e760ea$var$hc = $7XiEX.unstable_NormalPriority, $4eecb6e629e760ea$var$ic = $7XiEX.unstable_LowPriority, $4eecb6e629e760ea$var$jc = $7XiEX.unstable_IdlePriority, $4eecb6e629e760ea$var$kc = null, $4eecb6e629e760ea$var$lc = null;
function $4eecb6e629e760ea$var$mc(a) {
    if ($4eecb6e629e760ea$var$lc && "function" === typeof $4eecb6e629e760ea$var$lc.onCommitFiberRoot) try {
        $4eecb6e629e760ea$var$lc.onCommitFiberRoot($4eecb6e629e760ea$var$kc, a, void 0, 128 === (a.current.flags & 128));
    } catch (b) {}
}
var $4eecb6e629e760ea$var$oc = Math.clz32 ? Math.clz32 : $4eecb6e629e760ea$var$nc, $4eecb6e629e760ea$var$pc = Math.log, $4eecb6e629e760ea$var$qc = Math.LN2;
function $4eecb6e629e760ea$var$nc(a) {
    a >>>= 0;
    return 0 === a ? 32 : 31 - ($4eecb6e629e760ea$var$pc(a) / $4eecb6e629e760ea$var$qc | 0) | 0;
}
var $4eecb6e629e760ea$var$rc = 64, $4eecb6e629e760ea$var$sc = 4194304;
function $4eecb6e629e760ea$var$tc(a) {
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
function $4eecb6e629e760ea$var$uc(a, b) {
    var c = a.pendingLanes;
    if (0 === c) return 0;
    var d = 0, e = a.suspendedLanes, f = a.pingedLanes, g = c & 268435455;
    if (0 !== g) {
        var h = g & ~e;
        0 !== h ? d = $4eecb6e629e760ea$var$tc(h) : (f &= g, 0 !== f && (d = $4eecb6e629e760ea$var$tc(f)));
    } else g = c & ~e, 0 !== g ? d = $4eecb6e629e760ea$var$tc(g) : 0 !== f && (d = $4eecb6e629e760ea$var$tc(f));
    if (0 === d) return 0;
    if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240))) return b;
    0 !== (d & 4) && (d |= c & 16);
    b = a.entangledLanes;
    if (0 !== b) for(a = a.entanglements, b &= d; 0 < b;)c = 31 - $4eecb6e629e760ea$var$oc(b), e = 1 << c, d |= a[c], b &= ~e;
    return d;
}
function $4eecb6e629e760ea$var$vc(a, b) {
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
function $4eecb6e629e760ea$var$wc(a, b) {
    for(var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f;){
        var g = 31 - $4eecb6e629e760ea$var$oc(f), h = 1 << g, k = e[g];
        if (-1 === k) {
            if (0 === (h & c) || 0 !== (h & d)) e[g] = $4eecb6e629e760ea$var$vc(h, b);
        } else k <= b && (a.expiredLanes |= h);
        f &= ~h;
    }
}
function $4eecb6e629e760ea$var$xc(a) {
    a = a.pendingLanes & -1073741825;
    return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
}
function $4eecb6e629e760ea$var$yc() {
    var a = $4eecb6e629e760ea$var$rc;
    $4eecb6e629e760ea$var$rc <<= 1;
    0 === ($4eecb6e629e760ea$var$rc & 4194240) && ($4eecb6e629e760ea$var$rc = 64);
    return a;
}
function $4eecb6e629e760ea$var$zc(a) {
    for(var b = [], c = 0; 31 > c; c++)b.push(a);
    return b;
}
function $4eecb6e629e760ea$var$Ac(a, b, c) {
    a.pendingLanes |= b;
    536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
    a = a.eventTimes;
    b = 31 - $4eecb6e629e760ea$var$oc(b);
    a[b] = c;
}
function $4eecb6e629e760ea$var$Bc(a, b) {
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
        var e = 31 - $4eecb6e629e760ea$var$oc(c), f = 1 << e;
        b[e] = 0;
        d[e] = -1;
        a[e] = -1;
        c &= ~f;
    }
}
function $4eecb6e629e760ea$var$Cc(a, b) {
    var c = a.entangledLanes |= b;
    for(a = a.entanglements; c;){
        var d = 31 - $4eecb6e629e760ea$var$oc(c), e = 1 << d;
        e & b | a[d] & b && (a[d] |= b);
        c &= ~e;
    }
}
var $4eecb6e629e760ea$var$C = 0;
function $4eecb6e629e760ea$var$Dc(a) {
    a &= -a;
    return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
}
var $4eecb6e629e760ea$var$Ec, $4eecb6e629e760ea$var$Fc, $4eecb6e629e760ea$var$Gc, $4eecb6e629e760ea$var$Hc, $4eecb6e629e760ea$var$Ic, $4eecb6e629e760ea$var$Jc = !1, $4eecb6e629e760ea$var$Kc = [], $4eecb6e629e760ea$var$Lc = null, $4eecb6e629e760ea$var$Mc = null, $4eecb6e629e760ea$var$Nc = null, $4eecb6e629e760ea$var$Oc = new Map, $4eecb6e629e760ea$var$Pc = new Map, $4eecb6e629e760ea$var$Qc = [], $4eecb6e629e760ea$var$Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function $4eecb6e629e760ea$var$Sc(a, b) {
    switch(a){
        case "focusin":
        case "focusout":
            $4eecb6e629e760ea$var$Lc = null;
            break;
        case "dragenter":
        case "dragleave":
            $4eecb6e629e760ea$var$Mc = null;
            break;
        case "mouseover":
        case "mouseout":
            $4eecb6e629e760ea$var$Nc = null;
            break;
        case "pointerover":
        case "pointerout":
            $4eecb6e629e760ea$var$Oc.delete(b.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            $4eecb6e629e760ea$var$Pc.delete(b.pointerId);
    }
}
function $4eecb6e629e760ea$var$Tc(a, b, c, d, e, f) {
    if (null === a || a.nativeEvent !== f) return a = {
        blockedOn: b,
        domEventName: c,
        eventSystemFlags: d,
        nativeEvent: f,
        targetContainers: [
            e
        ]
    }, null !== b && (b = $4eecb6e629e760ea$var$Cb(b), null !== b && $4eecb6e629e760ea$var$Fc(b)), a;
    a.eventSystemFlags |= d;
    b = a.targetContainers;
    null !== e && -1 === b.indexOf(e) && b.push(e);
    return a;
}
function $4eecb6e629e760ea$var$Uc(a, b, c, d, e) {
    switch(b){
        case "focusin":
            return $4eecb6e629e760ea$var$Lc = $4eecb6e629e760ea$var$Tc($4eecb6e629e760ea$var$Lc, a, b, c, d, e), !0;
        case "dragenter":
            return $4eecb6e629e760ea$var$Mc = $4eecb6e629e760ea$var$Tc($4eecb6e629e760ea$var$Mc, a, b, c, d, e), !0;
        case "mouseover":
            return $4eecb6e629e760ea$var$Nc = $4eecb6e629e760ea$var$Tc($4eecb6e629e760ea$var$Nc, a, b, c, d, e), !0;
        case "pointerover":
            var f = e.pointerId;
            $4eecb6e629e760ea$var$Oc.set(f, $4eecb6e629e760ea$var$Tc($4eecb6e629e760ea$var$Oc.get(f) || null, a, b, c, d, e));
            return !0;
        case "gotpointercapture":
            return f = e.pointerId, $4eecb6e629e760ea$var$Pc.set(f, $4eecb6e629e760ea$var$Tc($4eecb6e629e760ea$var$Pc.get(f) || null, a, b, c, d, e)), !0;
    }
    return !1;
}
function $4eecb6e629e760ea$var$Vc(a) {
    var b = $4eecb6e629e760ea$var$Wc(a.target);
    if (null !== b) {
        var c = $4eecb6e629e760ea$var$Vb(b);
        if (null !== c) {
            if (b = c.tag, 13 === b) {
                if (b = $4eecb6e629e760ea$var$Wb(c), null !== b) {
                    a.blockedOn = b;
                    $4eecb6e629e760ea$var$Ic(a.priority, function() {
                        $4eecb6e629e760ea$var$Gc(c);
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
function $4eecb6e629e760ea$var$Xc(a) {
    if (null !== a.blockedOn) return !1;
    for(var b = a.targetContainers; 0 < b.length;){
        var c = $4eecb6e629e760ea$var$Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
        if (null === c) {
            c = a.nativeEvent;
            var d = new c.constructor(c.type, c);
            $4eecb6e629e760ea$var$wb = d;
            c.target.dispatchEvent(d);
            $4eecb6e629e760ea$var$wb = null;
        } else return b = $4eecb6e629e760ea$var$Cb(c), null !== b && $4eecb6e629e760ea$var$Fc(b), a.blockedOn = c, !1;
        b.shift();
    }
    return !0;
}
function $4eecb6e629e760ea$var$Zc(a, b, c) {
    $4eecb6e629e760ea$var$Xc(a) && c.delete(b);
}
function $4eecb6e629e760ea$var$$c() {
    $4eecb6e629e760ea$var$Jc = !1;
    null !== $4eecb6e629e760ea$var$Lc && $4eecb6e629e760ea$var$Xc($4eecb6e629e760ea$var$Lc) && ($4eecb6e629e760ea$var$Lc = null);
    null !== $4eecb6e629e760ea$var$Mc && $4eecb6e629e760ea$var$Xc($4eecb6e629e760ea$var$Mc) && ($4eecb6e629e760ea$var$Mc = null);
    null !== $4eecb6e629e760ea$var$Nc && $4eecb6e629e760ea$var$Xc($4eecb6e629e760ea$var$Nc) && ($4eecb6e629e760ea$var$Nc = null);
    $4eecb6e629e760ea$var$Oc.forEach($4eecb6e629e760ea$var$Zc);
    $4eecb6e629e760ea$var$Pc.forEach($4eecb6e629e760ea$var$Zc);
}
function $4eecb6e629e760ea$var$ad(a, b) {
    a.blockedOn === b && (a.blockedOn = null, $4eecb6e629e760ea$var$Jc || ($4eecb6e629e760ea$var$Jc = !0, $7XiEX.unstable_scheduleCallback($7XiEX.unstable_NormalPriority, $4eecb6e629e760ea$var$$c)));
}
function $4eecb6e629e760ea$var$bd(a) {
    function b(b) {
        return $4eecb6e629e760ea$var$ad(b, a);
    }
    if (0 < $4eecb6e629e760ea$var$Kc.length) {
        $4eecb6e629e760ea$var$ad($4eecb6e629e760ea$var$Kc[0], a);
        for(var c = 1; c < $4eecb6e629e760ea$var$Kc.length; c++){
            var d = $4eecb6e629e760ea$var$Kc[c];
            d.blockedOn === a && (d.blockedOn = null);
        }
    }
    null !== $4eecb6e629e760ea$var$Lc && $4eecb6e629e760ea$var$ad($4eecb6e629e760ea$var$Lc, a);
    null !== $4eecb6e629e760ea$var$Mc && $4eecb6e629e760ea$var$ad($4eecb6e629e760ea$var$Mc, a);
    null !== $4eecb6e629e760ea$var$Nc && $4eecb6e629e760ea$var$ad($4eecb6e629e760ea$var$Nc, a);
    $4eecb6e629e760ea$var$Oc.forEach(b);
    $4eecb6e629e760ea$var$Pc.forEach(b);
    for(c = 0; c < $4eecb6e629e760ea$var$Qc.length; c++)d = $4eecb6e629e760ea$var$Qc[c], d.blockedOn === a && (d.blockedOn = null);
    for(; 0 < $4eecb6e629e760ea$var$Qc.length && (c = $4eecb6e629e760ea$var$Qc[0], null === c.blockedOn);)$4eecb6e629e760ea$var$Vc(c), null === c.blockedOn && $4eecb6e629e760ea$var$Qc.shift();
}
var $4eecb6e629e760ea$var$cd = $4eecb6e629e760ea$var$ua.ReactCurrentBatchConfig, $4eecb6e629e760ea$var$dd = !0;
function $4eecb6e629e760ea$var$ed(a, b, c, d) {
    var e = $4eecb6e629e760ea$var$C, f = $4eecb6e629e760ea$var$cd.transition;
    $4eecb6e629e760ea$var$cd.transition = null;
    try {
        $4eecb6e629e760ea$var$C = 1, $4eecb6e629e760ea$var$fd(a, b, c, d);
    } finally{
        $4eecb6e629e760ea$var$C = e, $4eecb6e629e760ea$var$cd.transition = f;
    }
}
function $4eecb6e629e760ea$var$gd(a, b, c, d) {
    var e = $4eecb6e629e760ea$var$C, f = $4eecb6e629e760ea$var$cd.transition;
    $4eecb6e629e760ea$var$cd.transition = null;
    try {
        $4eecb6e629e760ea$var$C = 4, $4eecb6e629e760ea$var$fd(a, b, c, d);
    } finally{
        $4eecb6e629e760ea$var$C = e, $4eecb6e629e760ea$var$cd.transition = f;
    }
}
function $4eecb6e629e760ea$var$fd(a, b, c, d) {
    if ($4eecb6e629e760ea$var$dd) {
        var e = $4eecb6e629e760ea$var$Yc(a, b, c, d);
        if (null === e) $4eecb6e629e760ea$var$hd(a, b, d, $4eecb6e629e760ea$var$id, c), $4eecb6e629e760ea$var$Sc(a, d);
        else if ($4eecb6e629e760ea$var$Uc(e, a, b, c, d)) d.stopPropagation();
        else if ($4eecb6e629e760ea$var$Sc(a, d), b & 4 && -1 < $4eecb6e629e760ea$var$Rc.indexOf(a)) {
            for(; null !== e;){
                var f = $4eecb6e629e760ea$var$Cb(e);
                null !== f && $4eecb6e629e760ea$var$Ec(f);
                f = $4eecb6e629e760ea$var$Yc(a, b, c, d);
                null === f && $4eecb6e629e760ea$var$hd(a, b, d, $4eecb6e629e760ea$var$id, c);
                if (f === e) break;
                e = f;
            }
            null !== e && d.stopPropagation();
        } else $4eecb6e629e760ea$var$hd(a, b, d, null, c);
    }
}
var $4eecb6e629e760ea$var$id = null;
function $4eecb6e629e760ea$var$Yc(a, b, c, d) {
    $4eecb6e629e760ea$var$id = null;
    a = $4eecb6e629e760ea$var$xb(d);
    a = $4eecb6e629e760ea$var$Wc(a);
    if (null !== a) {
        if (b = $4eecb6e629e760ea$var$Vb(a), null === b) a = null;
        else if (c = b.tag, 13 === c) {
            a = $4eecb6e629e760ea$var$Wb(b);
            if (null !== a) return a;
            a = null;
        } else if (3 === c) {
            if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
            a = null;
        } else b !== a && (a = null);
    }
    $4eecb6e629e760ea$var$id = a;
    return null;
}
function $4eecb6e629e760ea$var$jd(a) {
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
            switch($4eecb6e629e760ea$var$ec()){
                case $4eecb6e629e760ea$var$fc:
                    return 1;
                case $4eecb6e629e760ea$var$gc:
                    return 4;
                case $4eecb6e629e760ea$var$hc:
                case $4eecb6e629e760ea$var$ic:
                    return 16;
                case $4eecb6e629e760ea$var$jc:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var $4eecb6e629e760ea$var$kd = null, $4eecb6e629e760ea$var$ld = null, $4eecb6e629e760ea$var$md = null;
function $4eecb6e629e760ea$var$nd() {
    if ($4eecb6e629e760ea$var$md) return $4eecb6e629e760ea$var$md;
    var a, b = $4eecb6e629e760ea$var$ld, c = b.length, d, e = "value" in $4eecb6e629e760ea$var$kd ? $4eecb6e629e760ea$var$kd.value : $4eecb6e629e760ea$var$kd.textContent, f = e.length;
    for(a = 0; a < c && b[a] === e[a]; a++);
    var g = c - a;
    for(d = 1; d <= g && b[c - d] === e[f - d]; d++);
    return $4eecb6e629e760ea$var$md = e.slice(a, 1 < d ? 1 - d : void 0);
}
function $4eecb6e629e760ea$var$od(a) {
    var b = a.keyCode;
    "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
    10 === a && (a = 13);
    return 32 <= a || 13 === a ? a : 0;
}
function $4eecb6e629e760ea$var$pd() {
    return !0;
}
function $4eecb6e629e760ea$var$qd() {
    return !1;
}
function $4eecb6e629e760ea$var$rd(a) {
    function b(b, d, e, f, g) {
        this._reactName = b;
        this._targetInst = e;
        this.type = d;
        this.nativeEvent = f;
        this.target = g;
        this.currentTarget = null;
        for(var c in a)a.hasOwnProperty(c) && (b = a[c], this[c] = b ? b(f) : f[c]);
        this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : !1 === f.returnValue) ? $4eecb6e629e760ea$var$pd : $4eecb6e629e760ea$var$qd;
        this.isPropagationStopped = $4eecb6e629e760ea$var$qd;
        return this;
    }
    $4eecb6e629e760ea$var$A(b.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var a = this.nativeEvent;
            a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = !1), this.isDefaultPrevented = $4eecb6e629e760ea$var$pd);
        },
        stopPropagation: function() {
            var a = this.nativeEvent;
            a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = !0), this.isPropagationStopped = $4eecb6e629e760ea$var$pd);
        },
        persist: function() {},
        isPersistent: $4eecb6e629e760ea$var$pd
    });
    return b;
}
var $4eecb6e629e760ea$var$sd = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(a) {
        return a.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
}, $4eecb6e629e760ea$var$td = $4eecb6e629e760ea$var$rd($4eecb6e629e760ea$var$sd), $4eecb6e629e760ea$var$ud = $4eecb6e629e760ea$var$A({}, $4eecb6e629e760ea$var$sd, {
    view: 0,
    detail: 0
}), $4eecb6e629e760ea$var$vd = $4eecb6e629e760ea$var$rd($4eecb6e629e760ea$var$ud), $4eecb6e629e760ea$var$wd, $4eecb6e629e760ea$var$xd, $4eecb6e629e760ea$var$yd, $4eecb6e629e760ea$var$Ad = $4eecb6e629e760ea$var$A({}, $4eecb6e629e760ea$var$ud, {
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
    getModifierState: $4eecb6e629e760ea$var$zd,
    button: 0,
    buttons: 0,
    relatedTarget: function(a) {
        return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
    },
    movementX: function(a) {
        if ("movementX" in a) return a.movementX;
        a !== $4eecb6e629e760ea$var$yd && ($4eecb6e629e760ea$var$yd && "mousemove" === a.type ? ($4eecb6e629e760ea$var$wd = a.screenX - $4eecb6e629e760ea$var$yd.screenX, $4eecb6e629e760ea$var$xd = a.screenY - $4eecb6e629e760ea$var$yd.screenY) : $4eecb6e629e760ea$var$xd = $4eecb6e629e760ea$var$wd = 0, $4eecb6e629e760ea$var$yd = a);
        return $4eecb6e629e760ea$var$wd;
    },
    movementY: function(a) {
        return "movementY" in a ? a.movementY : $4eecb6e629e760ea$var$xd;
    }
}), $4eecb6e629e760ea$var$Bd = $4eecb6e629e760ea$var$rd($4eecb6e629e760ea$var$Ad), $4eecb6e629e760ea$var$Cd = $4eecb6e629e760ea$var$A({}, $4eecb6e629e760ea$var$Ad, {
    dataTransfer: 0
}), $4eecb6e629e760ea$var$Dd = $4eecb6e629e760ea$var$rd($4eecb6e629e760ea$var$Cd), $4eecb6e629e760ea$var$Ed = $4eecb6e629e760ea$var$A({}, $4eecb6e629e760ea$var$ud, {
    relatedTarget: 0
}), $4eecb6e629e760ea$var$Fd = $4eecb6e629e760ea$var$rd($4eecb6e629e760ea$var$Ed), $4eecb6e629e760ea$var$Gd = $4eecb6e629e760ea$var$A({}, $4eecb6e629e760ea$var$sd, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), $4eecb6e629e760ea$var$Hd = $4eecb6e629e760ea$var$rd($4eecb6e629e760ea$var$Gd), $4eecb6e629e760ea$var$Id = $4eecb6e629e760ea$var$A({}, $4eecb6e629e760ea$var$sd, {
    clipboardData: function(a) {
        return "clipboardData" in a ? a.clipboardData : window.clipboardData;
    }
}), $4eecb6e629e760ea$var$Jd = $4eecb6e629e760ea$var$rd($4eecb6e629e760ea$var$Id), $4eecb6e629e760ea$var$Kd = $4eecb6e629e760ea$var$A({}, $4eecb6e629e760ea$var$sd, {
    data: 0
}), $4eecb6e629e760ea$var$Ld = $4eecb6e629e760ea$var$rd($4eecb6e629e760ea$var$Kd), $4eecb6e629e760ea$var$Md = {
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
}, $4eecb6e629e760ea$var$Nd = {
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
}, $4eecb6e629e760ea$var$Od = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function $4eecb6e629e760ea$var$Pd(a) {
    var b = this.nativeEvent;
    return b.getModifierState ? b.getModifierState(a) : (a = $4eecb6e629e760ea$var$Od[a]) ? !!b[a] : !1;
}
function $4eecb6e629e760ea$var$zd() {
    return $4eecb6e629e760ea$var$Pd;
}
var $4eecb6e629e760ea$var$Qd = $4eecb6e629e760ea$var$A({}, $4eecb6e629e760ea$var$ud, {
    key: function(a) {
        if (a.key) {
            var b = $4eecb6e629e760ea$var$Md[a.key] || a.key;
            if ("Unidentified" !== b) return b;
        }
        return "keypress" === a.type ? (a = $4eecb6e629e760ea$var$od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? $4eecb6e629e760ea$var$Nd[a.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: $4eecb6e629e760ea$var$zd,
    charCode: function(a) {
        return "keypress" === a.type ? $4eecb6e629e760ea$var$od(a) : 0;
    },
    keyCode: function(a) {
        return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    },
    which: function(a) {
        return "keypress" === a.type ? $4eecb6e629e760ea$var$od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    }
}), $4eecb6e629e760ea$var$Rd = $4eecb6e629e760ea$var$rd($4eecb6e629e760ea$var$Qd), $4eecb6e629e760ea$var$Sd = $4eecb6e629e760ea$var$A({}, $4eecb6e629e760ea$var$Ad, {
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
}), $4eecb6e629e760ea$var$Td = $4eecb6e629e760ea$var$rd($4eecb6e629e760ea$var$Sd), $4eecb6e629e760ea$var$Ud = $4eecb6e629e760ea$var$A({}, $4eecb6e629e760ea$var$ud, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: $4eecb6e629e760ea$var$zd
}), $4eecb6e629e760ea$var$Vd = $4eecb6e629e760ea$var$rd($4eecb6e629e760ea$var$Ud), $4eecb6e629e760ea$var$Wd = $4eecb6e629e760ea$var$A({}, $4eecb6e629e760ea$var$sd, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), $4eecb6e629e760ea$var$Xd = $4eecb6e629e760ea$var$rd($4eecb6e629e760ea$var$Wd), $4eecb6e629e760ea$var$Yd = $4eecb6e629e760ea$var$A({}, $4eecb6e629e760ea$var$Ad, {
    deltaX: function(a) {
        return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
    },
    deltaY: function(a) {
        return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
}), $4eecb6e629e760ea$var$Zd = $4eecb6e629e760ea$var$rd($4eecb6e629e760ea$var$Yd), $4eecb6e629e760ea$var$$d = [
    9,
    13,
    27,
    32
], $4eecb6e629e760ea$var$ae = $4eecb6e629e760ea$var$ia && "CompositionEvent" in window, $4eecb6e629e760ea$var$be = null;
$4eecb6e629e760ea$var$ia && "documentMode" in document && ($4eecb6e629e760ea$var$be = document.documentMode);
var $4eecb6e629e760ea$var$ce = $4eecb6e629e760ea$var$ia && "TextEvent" in window && !$4eecb6e629e760ea$var$be, $4eecb6e629e760ea$var$de = $4eecb6e629e760ea$var$ia && (!$4eecb6e629e760ea$var$ae || $4eecb6e629e760ea$var$be && 8 < $4eecb6e629e760ea$var$be && 11 >= $4eecb6e629e760ea$var$be), $4eecb6e629e760ea$var$ee = String.fromCharCode(32), $4eecb6e629e760ea$var$fe = !1;
function $4eecb6e629e760ea$var$ge(a, b) {
    switch(a){
        case "keyup":
            return -1 !== $4eecb6e629e760ea$var$$d.indexOf(b.keyCode);
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
function $4eecb6e629e760ea$var$he(a) {
    a = a.detail;
    return "object" === typeof a && "data" in a ? a.data : null;
}
var $4eecb6e629e760ea$var$ie = !1;
function $4eecb6e629e760ea$var$je(a, b) {
    switch(a){
        case "compositionend":
            return $4eecb6e629e760ea$var$he(b);
        case "keypress":
            if (32 !== b.which) return null;
            $4eecb6e629e760ea$var$fe = !0;
            return $4eecb6e629e760ea$var$ee;
        case "textInput":
            return a = b.data, a === $4eecb6e629e760ea$var$ee && $4eecb6e629e760ea$var$fe ? null : a;
        default:
            return null;
    }
}
function $4eecb6e629e760ea$var$ke(a, b) {
    if ($4eecb6e629e760ea$var$ie) return "compositionend" === a || !$4eecb6e629e760ea$var$ae && $4eecb6e629e760ea$var$ge(a, b) ? (a = $4eecb6e629e760ea$var$nd(), $4eecb6e629e760ea$var$md = $4eecb6e629e760ea$var$ld = $4eecb6e629e760ea$var$kd = null, $4eecb6e629e760ea$var$ie = !1, a) : null;
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
            return $4eecb6e629e760ea$var$de && "ko" !== b.locale ? null : b.data;
        default:
            return null;
    }
}
var $4eecb6e629e760ea$var$le = {
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
function $4eecb6e629e760ea$var$me(a) {
    var b = a && a.nodeName && a.nodeName.toLowerCase();
    return "input" === b ? !!$4eecb6e629e760ea$var$le[a.type] : "textarea" === b ? !0 : !1;
}
function $4eecb6e629e760ea$var$ne(a, b, c, d) {
    $4eecb6e629e760ea$var$Eb(d);
    b = $4eecb6e629e760ea$var$oe(b, "onChange");
    0 < b.length && (c = new $4eecb6e629e760ea$var$td("onChange", "change", null, c, d), a.push({
        event: c,
        listeners: b
    }));
}
var $4eecb6e629e760ea$var$pe = null, $4eecb6e629e760ea$var$qe = null;
function $4eecb6e629e760ea$var$re(a) {
    $4eecb6e629e760ea$var$se(a, 0);
}
function $4eecb6e629e760ea$var$te(a) {
    var b = $4eecb6e629e760ea$var$ue(a);
    if ($4eecb6e629e760ea$var$Wa(b)) return a;
}
function $4eecb6e629e760ea$var$ve(a, b) {
    if ("change" === a) return b;
}
var $4eecb6e629e760ea$var$we = !1;
if ($4eecb6e629e760ea$var$ia) {
    var $4eecb6e629e760ea$var$xe;
    if ($4eecb6e629e760ea$var$ia) {
        var $4eecb6e629e760ea$var$ye = "oninput" in document;
        if (!$4eecb6e629e760ea$var$ye) {
            var $4eecb6e629e760ea$var$ze = document.createElement("div");
            $4eecb6e629e760ea$var$ze.setAttribute("oninput", "return;");
            $4eecb6e629e760ea$var$ye = "function" === typeof $4eecb6e629e760ea$var$ze.oninput;
        }
        $4eecb6e629e760ea$var$xe = $4eecb6e629e760ea$var$ye;
    } else $4eecb6e629e760ea$var$xe = !1;
    $4eecb6e629e760ea$var$we = $4eecb6e629e760ea$var$xe && (!document.documentMode || 9 < document.documentMode);
}
function $4eecb6e629e760ea$var$Ae() {
    $4eecb6e629e760ea$var$pe && ($4eecb6e629e760ea$var$pe.detachEvent("onpropertychange", $4eecb6e629e760ea$var$Be), $4eecb6e629e760ea$var$qe = $4eecb6e629e760ea$var$pe = null);
}
function $4eecb6e629e760ea$var$Be(a) {
    if ("value" === a.propertyName && $4eecb6e629e760ea$var$te($4eecb6e629e760ea$var$qe)) {
        var b = [];
        $4eecb6e629e760ea$var$ne(b, $4eecb6e629e760ea$var$qe, a, $4eecb6e629e760ea$var$xb(a));
        $4eecb6e629e760ea$var$Jb($4eecb6e629e760ea$var$re, b);
    }
}
function $4eecb6e629e760ea$var$Ce(a, b, c) {
    "focusin" === a ? ($4eecb6e629e760ea$var$Ae(), $4eecb6e629e760ea$var$pe = b, $4eecb6e629e760ea$var$qe = c, $4eecb6e629e760ea$var$pe.attachEvent("onpropertychange", $4eecb6e629e760ea$var$Be)) : "focusout" === a && $4eecb6e629e760ea$var$Ae();
}
function $4eecb6e629e760ea$var$De(a) {
    if ("selectionchange" === a || "keyup" === a || "keydown" === a) return $4eecb6e629e760ea$var$te($4eecb6e629e760ea$var$qe);
}
function $4eecb6e629e760ea$var$Ee(a, b) {
    if ("click" === a) return $4eecb6e629e760ea$var$te(b);
}
function $4eecb6e629e760ea$var$Fe(a, b) {
    if ("input" === a || "change" === a) return $4eecb6e629e760ea$var$te(b);
}
function $4eecb6e629e760ea$var$Ge(a, b) {
    return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}
var $4eecb6e629e760ea$var$He = "function" === typeof Object.is ? Object.is : $4eecb6e629e760ea$var$Ge;
function $4eecb6e629e760ea$var$Ie(a, b) {
    if ($4eecb6e629e760ea$var$He(a, b)) return !0;
    if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
    var c = Object.keys(a), d = Object.keys(b);
    if (c.length !== d.length) return !1;
    for(d = 0; d < c.length; d++){
        var e = c[d];
        if (!$4eecb6e629e760ea$var$ja.call(b, e) || !$4eecb6e629e760ea$var$He(a[e], b[e])) return !1;
    }
    return !0;
}
function $4eecb6e629e760ea$var$Je(a) {
    for(; a && a.firstChild;)a = a.firstChild;
    return a;
}
function $4eecb6e629e760ea$var$Ke(a, b) {
    var c = $4eecb6e629e760ea$var$Je(a);
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
        c = $4eecb6e629e760ea$var$Je(c);
    }
}
function $4eecb6e629e760ea$var$Le(a, b) {
    return a && b ? a === b ? !0 : a && 3 === a.nodeType ? !1 : b && 3 === b.nodeType ? $4eecb6e629e760ea$var$Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : !1 : !1;
}
function $4eecb6e629e760ea$var$Me() {
    for(var a = window, b = $4eecb6e629e760ea$var$Xa(); b instanceof a.HTMLIFrameElement;){
        try {
            var c = "string" === typeof b.contentWindow.location.href;
        } catch (d) {
            c = !1;
        }
        if (c) a = b.contentWindow;
        else break;
        b = $4eecb6e629e760ea$var$Xa(a.document);
    }
    return b;
}
function $4eecb6e629e760ea$var$Ne(a) {
    var b = a && a.nodeName && a.nodeName.toLowerCase();
    return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
}
function $4eecb6e629e760ea$var$Oe(a) {
    var b = $4eecb6e629e760ea$var$Me(), c = a.focusedElem, d = a.selectionRange;
    if (b !== c && c && c.ownerDocument && $4eecb6e629e760ea$var$Le(c.ownerDocument.documentElement, c)) {
        if (null !== d && $4eecb6e629e760ea$var$Ne(c)) {
            if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
            else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
                a = a.getSelection();
                var e = c.textContent.length, f = Math.min(d.start, e);
                d = void 0 === d.end ? f : Math.min(d.end, e);
                !a.extend && f > d && (e = d, d = f, f = e);
                e = $4eecb6e629e760ea$var$Ke(c, f);
                var g = $4eecb6e629e760ea$var$Ke(c, d);
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
var $4eecb6e629e760ea$var$Pe = $4eecb6e629e760ea$var$ia && "documentMode" in document && 11 >= document.documentMode, $4eecb6e629e760ea$var$Qe = null, $4eecb6e629e760ea$var$Re = null, $4eecb6e629e760ea$var$Se = null, $4eecb6e629e760ea$var$Te = !1;
function $4eecb6e629e760ea$var$Ue(a, b, c) {
    var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
    $4eecb6e629e760ea$var$Te || null == $4eecb6e629e760ea$var$Qe || $4eecb6e629e760ea$var$Qe !== $4eecb6e629e760ea$var$Xa(d) || (d = $4eecb6e629e760ea$var$Qe, "selectionStart" in d && $4eecb6e629e760ea$var$Ne(d) ? d = {
        start: d.selectionStart,
        end: d.selectionEnd
    } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = {
        anchorNode: d.anchorNode,
        anchorOffset: d.anchorOffset,
        focusNode: d.focusNode,
        focusOffset: d.focusOffset
    }), $4eecb6e629e760ea$var$Se && $4eecb6e629e760ea$var$Ie($4eecb6e629e760ea$var$Se, d) || ($4eecb6e629e760ea$var$Se = d, d = $4eecb6e629e760ea$var$oe($4eecb6e629e760ea$var$Re, "onSelect"), 0 < d.length && (b = new $4eecb6e629e760ea$var$td("onSelect", "select", null, b, c), a.push({
        event: b,
        listeners: d
    }), b.target = $4eecb6e629e760ea$var$Qe)));
}
function $4eecb6e629e760ea$var$Ve(a, b) {
    var c = {};
    c[a.toLowerCase()] = b.toLowerCase();
    c["Webkit" + a] = "webkit" + b;
    c["Moz" + a] = "moz" + b;
    return c;
}
var $4eecb6e629e760ea$var$We = {
    animationend: $4eecb6e629e760ea$var$Ve("Animation", "AnimationEnd"),
    animationiteration: $4eecb6e629e760ea$var$Ve("Animation", "AnimationIteration"),
    animationstart: $4eecb6e629e760ea$var$Ve("Animation", "AnimationStart"),
    transitionend: $4eecb6e629e760ea$var$Ve("Transition", "TransitionEnd")
}, $4eecb6e629e760ea$var$Xe = {}, $4eecb6e629e760ea$var$Ye = {};
$4eecb6e629e760ea$var$ia && ($4eecb6e629e760ea$var$Ye = document.createElement("div").style, "AnimationEvent" in window || (delete $4eecb6e629e760ea$var$We.animationend.animation, delete $4eecb6e629e760ea$var$We.animationiteration.animation, delete $4eecb6e629e760ea$var$We.animationstart.animation), "TransitionEvent" in window || delete $4eecb6e629e760ea$var$We.transitionend.transition);
function $4eecb6e629e760ea$var$Ze(a) {
    if ($4eecb6e629e760ea$var$Xe[a]) return $4eecb6e629e760ea$var$Xe[a];
    if (!$4eecb6e629e760ea$var$We[a]) return a;
    var b = $4eecb6e629e760ea$var$We[a], c;
    for(c in b)if (b.hasOwnProperty(c) && c in $4eecb6e629e760ea$var$Ye) return $4eecb6e629e760ea$var$Xe[a] = b[c];
    return a;
}
var $4eecb6e629e760ea$var$$e = $4eecb6e629e760ea$var$Ze("animationend"), $4eecb6e629e760ea$var$af = $4eecb6e629e760ea$var$Ze("animationiteration"), $4eecb6e629e760ea$var$bf = $4eecb6e629e760ea$var$Ze("animationstart"), $4eecb6e629e760ea$var$cf = $4eecb6e629e760ea$var$Ze("transitionend"), $4eecb6e629e760ea$var$df = new Map, $4eecb6e629e760ea$var$ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function $4eecb6e629e760ea$var$ff(a, b) {
    $4eecb6e629e760ea$var$df.set(a, b);
    $4eecb6e629e760ea$var$fa(b, [
        a
    ]);
}
for(var $4eecb6e629e760ea$var$gf = 0; $4eecb6e629e760ea$var$gf < $4eecb6e629e760ea$var$ef.length; $4eecb6e629e760ea$var$gf++){
    var $4eecb6e629e760ea$var$hf = $4eecb6e629e760ea$var$ef[$4eecb6e629e760ea$var$gf], $4eecb6e629e760ea$var$jf = $4eecb6e629e760ea$var$hf.toLowerCase(), $4eecb6e629e760ea$var$kf = $4eecb6e629e760ea$var$hf[0].toUpperCase() + $4eecb6e629e760ea$var$hf.slice(1);
    $4eecb6e629e760ea$var$ff($4eecb6e629e760ea$var$jf, "on" + $4eecb6e629e760ea$var$kf);
}
$4eecb6e629e760ea$var$ff($4eecb6e629e760ea$var$$e, "onAnimationEnd");
$4eecb6e629e760ea$var$ff($4eecb6e629e760ea$var$af, "onAnimationIteration");
$4eecb6e629e760ea$var$ff($4eecb6e629e760ea$var$bf, "onAnimationStart");
$4eecb6e629e760ea$var$ff("dblclick", "onDoubleClick");
$4eecb6e629e760ea$var$ff("focusin", "onFocus");
$4eecb6e629e760ea$var$ff("focusout", "onBlur");
$4eecb6e629e760ea$var$ff($4eecb6e629e760ea$var$cf, "onTransitionEnd");
$4eecb6e629e760ea$var$ha("onMouseEnter", [
    "mouseout",
    "mouseover"
]);
$4eecb6e629e760ea$var$ha("onMouseLeave", [
    "mouseout",
    "mouseover"
]);
$4eecb6e629e760ea$var$ha("onPointerEnter", [
    "pointerout",
    "pointerover"
]);
$4eecb6e629e760ea$var$ha("onPointerLeave", [
    "pointerout",
    "pointerover"
]);
$4eecb6e629e760ea$var$fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
$4eecb6e629e760ea$var$fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
$4eecb6e629e760ea$var$fa("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
]);
$4eecb6e629e760ea$var$fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
$4eecb6e629e760ea$var$fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
$4eecb6e629e760ea$var$fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var $4eecb6e629e760ea$var$lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), $4eecb6e629e760ea$var$mf = new Set("cancel close invalid load scroll toggle".split(" ").concat($4eecb6e629e760ea$var$lf));
function $4eecb6e629e760ea$var$nf(a, b, c) {
    var d = a.type || "unknown-event";
    a.currentTarget = c;
    $4eecb6e629e760ea$var$Ub(d, b, void 0, a);
    a.currentTarget = null;
}
function $4eecb6e629e760ea$var$se(a, b) {
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
                $4eecb6e629e760ea$var$nf(e, h, l);
                f = k;
            }
            else for(g = 0; g < d.length; g++){
                h = d[g];
                k = h.instance;
                l = h.currentTarget;
                h = h.listener;
                if (k !== f && e.isPropagationStopped()) break a;
                $4eecb6e629e760ea$var$nf(e, h, l);
                f = k;
            }
        }
    }
    if ($4eecb6e629e760ea$var$Qb) throw a = $4eecb6e629e760ea$var$Rb, $4eecb6e629e760ea$var$Qb = !1, $4eecb6e629e760ea$var$Rb = null, a;
}
function $4eecb6e629e760ea$var$D(a, b) {
    var c = b[$4eecb6e629e760ea$var$of];
    void 0 === c && (c = b[$4eecb6e629e760ea$var$of] = new Set);
    var d = a + "__bubble";
    c.has(d) || ($4eecb6e629e760ea$var$pf(b, a, 2, !1), c.add(d));
}
function $4eecb6e629e760ea$var$qf(a, b, c) {
    var d = 0;
    b && (d |= 4);
    $4eecb6e629e760ea$var$pf(c, a, d, b);
}
var $4eecb6e629e760ea$var$rf = "_reactListening" + Math.random().toString(36).slice(2);
function $4eecb6e629e760ea$var$sf(a) {
    if (!a[$4eecb6e629e760ea$var$rf]) {
        a[$4eecb6e629e760ea$var$rf] = !0;
        $4eecb6e629e760ea$var$da.forEach(function(b) {
            "selectionchange" !== b && ($4eecb6e629e760ea$var$mf.has(b) || $4eecb6e629e760ea$var$qf(b, !1, a), $4eecb6e629e760ea$var$qf(b, !0, a));
        });
        var b = 9 === a.nodeType ? a : a.ownerDocument;
        null === b || b[$4eecb6e629e760ea$var$rf] || (b[$4eecb6e629e760ea$var$rf] = !0, $4eecb6e629e760ea$var$qf("selectionchange", !1, b));
    }
}
function $4eecb6e629e760ea$var$pf(a, b, c, d) {
    switch($4eecb6e629e760ea$var$jd(b)){
        case 1:
            var e = $4eecb6e629e760ea$var$ed;
            break;
        case 4:
            e = $4eecb6e629e760ea$var$gd;
            break;
        default:
            e = $4eecb6e629e760ea$var$fd;
    }
    c = e.bind(null, b, c, a);
    e = void 0;
    !$4eecb6e629e760ea$var$Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = !0);
    d ? void 0 !== e ? a.addEventListener(b, c, {
        capture: !0,
        passive: e
    }) : a.addEventListener(b, c, !0) : void 0 !== e ? a.addEventListener(b, c, {
        passive: e
    }) : a.addEventListener(b, c, !1);
}
function $4eecb6e629e760ea$var$hd(a, b, c, d, e) {
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
                g = $4eecb6e629e760ea$var$Wc(h);
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
    $4eecb6e629e760ea$var$Jb(function() {
        var d = f, e = $4eecb6e629e760ea$var$xb(c), g = [];
        a: {
            var h = $4eecb6e629e760ea$var$df.get(a);
            if (void 0 !== h) {
                var k = $4eecb6e629e760ea$var$td, n = a;
                switch(a){
                    case "keypress":
                        if (0 === $4eecb6e629e760ea$var$od(c)) break a;
                    case "keydown":
                    case "keyup":
                        k = $4eecb6e629e760ea$var$Rd;
                        break;
                    case "focusin":
                        n = "focus";
                        k = $4eecb6e629e760ea$var$Fd;
                        break;
                    case "focusout":
                        n = "blur";
                        k = $4eecb6e629e760ea$var$Fd;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        k = $4eecb6e629e760ea$var$Fd;
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
                        k = $4eecb6e629e760ea$var$Bd;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        k = $4eecb6e629e760ea$var$Dd;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        k = $4eecb6e629e760ea$var$Vd;
                        break;
                    case $4eecb6e629e760ea$var$$e:
                    case $4eecb6e629e760ea$var$af:
                    case $4eecb6e629e760ea$var$bf:
                        k = $4eecb6e629e760ea$var$Hd;
                        break;
                    case $4eecb6e629e760ea$var$cf:
                        k = $4eecb6e629e760ea$var$Xd;
                        break;
                    case "scroll":
                        k = $4eecb6e629e760ea$var$vd;
                        break;
                    case "wheel":
                        k = $4eecb6e629e760ea$var$Zd;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        k = $4eecb6e629e760ea$var$Jd;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        k = $4eecb6e629e760ea$var$Td;
                }
                var t = 0 !== (b & 4), J = !t && "scroll" === a, x = t ? null !== h ? h + "Capture" : null : h;
                t = [];
                for(var w = d, u; null !== w;){
                    u = w;
                    var F = u.stateNode;
                    5 === u.tag && null !== F && (u = F, null !== x && (F = $4eecb6e629e760ea$var$Kb(w, x), null != F && t.push($4eecb6e629e760ea$var$tf(w, F, u))));
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
                if (h && c !== $4eecb6e629e760ea$var$wb && (n = c.relatedTarget || c.fromElement) && ($4eecb6e629e760ea$var$Wc(n) || n[$4eecb6e629e760ea$var$uf])) break a;
                if (k || h) {
                    h = e.window === e ? e : (h = e.ownerDocument) ? h.defaultView || h.parentWindow : window;
                    if (k) {
                        if (n = c.relatedTarget || c.toElement, k = d, n = n ? $4eecb6e629e760ea$var$Wc(n) : null, null !== n && (J = $4eecb6e629e760ea$var$Vb(n), n !== J || 5 !== n.tag && 6 !== n.tag)) n = null;
                    } else k = null, n = d;
                    if (k !== n) {
                        t = $4eecb6e629e760ea$var$Bd;
                        F = "onMouseLeave";
                        x = "onMouseEnter";
                        w = "mouse";
                        if ("pointerout" === a || "pointerover" === a) t = $4eecb6e629e760ea$var$Td, F = "onPointerLeave", x = "onPointerEnter", w = "pointer";
                        J = null == k ? h : $4eecb6e629e760ea$var$ue(k);
                        u = null == n ? h : $4eecb6e629e760ea$var$ue(n);
                        h = new t(F, w + "leave", k, c, e);
                        h.target = J;
                        h.relatedTarget = u;
                        F = null;
                        $4eecb6e629e760ea$var$Wc(e) === d && (t = new t(x, w + "enter", n, c, e), t.target = u, t.relatedTarget = J, F = t);
                        J = F;
                        if (k && n) b: {
                            t = k;
                            x = n;
                            w = 0;
                            for(u = t; u; u = $4eecb6e629e760ea$var$vf(u))w++;
                            u = 0;
                            for(F = x; F; F = $4eecb6e629e760ea$var$vf(F))u++;
                            for(; 0 < w - u;)t = $4eecb6e629e760ea$var$vf(t), w--;
                            for(; 0 < u - w;)x = $4eecb6e629e760ea$var$vf(x), u--;
                            for(; w--;){
                                if (t === x || null !== x && t === x.alternate) break b;
                                t = $4eecb6e629e760ea$var$vf(t);
                                x = $4eecb6e629e760ea$var$vf(x);
                            }
                            t = null;
                        }
                        else t = null;
                        null !== k && $4eecb6e629e760ea$var$wf(g, h, k, t, !1);
                        null !== n && null !== J && $4eecb6e629e760ea$var$wf(g, J, n, t, !0);
                    }
                }
            }
            a: {
                h = d ? $4eecb6e629e760ea$var$ue(d) : window;
                k = h.nodeName && h.nodeName.toLowerCase();
                if ("select" === k || "input" === k && "file" === h.type) var na = $4eecb6e629e760ea$var$ve;
                else if ($4eecb6e629e760ea$var$me(h)) {
                    if ($4eecb6e629e760ea$var$we) na = $4eecb6e629e760ea$var$Fe;
                    else {
                        na = $4eecb6e629e760ea$var$De;
                        var xa = $4eecb6e629e760ea$var$Ce;
                    }
                } else (k = h.nodeName) && "input" === k.toLowerCase() && ("checkbox" === h.type || "radio" === h.type) && (na = $4eecb6e629e760ea$var$Ee);
                if (na && (na = na(a, d))) {
                    $4eecb6e629e760ea$var$ne(g, na, c, e);
                    break a;
                }
                xa && xa(a, h, d);
                "focusout" === a && (xa = h._wrapperState) && xa.controlled && "number" === h.type && $4eecb6e629e760ea$var$cb(h, "number", h.value);
            }
            xa = d ? $4eecb6e629e760ea$var$ue(d) : window;
            switch(a){
                case "focusin":
                    if ($4eecb6e629e760ea$var$me(xa) || "true" === xa.contentEditable) $4eecb6e629e760ea$var$Qe = xa, $4eecb6e629e760ea$var$Re = d, $4eecb6e629e760ea$var$Se = null;
                    break;
                case "focusout":
                    $4eecb6e629e760ea$var$Se = $4eecb6e629e760ea$var$Re = $4eecb6e629e760ea$var$Qe = null;
                    break;
                case "mousedown":
                    $4eecb6e629e760ea$var$Te = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    $4eecb6e629e760ea$var$Te = !1;
                    $4eecb6e629e760ea$var$Ue(g, c, e);
                    break;
                case "selectionchange":
                    if ($4eecb6e629e760ea$var$Pe) break;
                case "keydown":
                case "keyup":
                    $4eecb6e629e760ea$var$Ue(g, c, e);
            }
            var $a;
            if ($4eecb6e629e760ea$var$ae) b: {
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
            else $4eecb6e629e760ea$var$ie ? $4eecb6e629e760ea$var$ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
            ba && ($4eecb6e629e760ea$var$de && "ko" !== c.locale && ($4eecb6e629e760ea$var$ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && $4eecb6e629e760ea$var$ie && ($a = $4eecb6e629e760ea$var$nd()) : ($4eecb6e629e760ea$var$kd = e, $4eecb6e629e760ea$var$ld = "value" in $4eecb6e629e760ea$var$kd ? $4eecb6e629e760ea$var$kd.value : $4eecb6e629e760ea$var$kd.textContent, $4eecb6e629e760ea$var$ie = !0)), xa = $4eecb6e629e760ea$var$oe(d, ba), 0 < xa.length && (ba = new $4eecb6e629e760ea$var$Ld(ba, a, null, c, e), g.push({
                event: ba,
                listeners: xa
            }), $a ? ba.data = $a : ($a = $4eecb6e629e760ea$var$he(c), null !== $a && (ba.data = $a))));
            if ($a = $4eecb6e629e760ea$var$ce ? $4eecb6e629e760ea$var$je(a, c) : $4eecb6e629e760ea$var$ke(a, c)) d = $4eecb6e629e760ea$var$oe(d, "onBeforeInput"), 0 < d.length && (e = new $4eecb6e629e760ea$var$Ld("onBeforeInput", "beforeinput", null, c, e), g.push({
                event: e,
                listeners: d
            }), e.data = $a);
        }
        $4eecb6e629e760ea$var$se(g, b);
    });
}
function $4eecb6e629e760ea$var$tf(a, b, c) {
    return {
        instance: a,
        listener: b,
        currentTarget: c
    };
}
function $4eecb6e629e760ea$var$oe(a, b) {
    for(var c = b + "Capture", d = []; null !== a;){
        var e = a, f = e.stateNode;
        5 === e.tag && null !== f && (e = f, f = $4eecb6e629e760ea$var$Kb(a, c), null != f && d.unshift($4eecb6e629e760ea$var$tf(a, f, e)), f = $4eecb6e629e760ea$var$Kb(a, b), null != f && d.push($4eecb6e629e760ea$var$tf(a, f, e)));
        a = a.return;
    }
    return d;
}
function $4eecb6e629e760ea$var$vf(a) {
    if (null === a) return null;
    do a = a.return;
    while (a && 5 !== a.tag);
    return a ? a : null;
}
function $4eecb6e629e760ea$var$wf(a, b, c, d, e) {
    for(var f = b._reactName, g = []; null !== c && c !== d;){
        var h = c, k = h.alternate, l = h.stateNode;
        if (null !== k && k === d) break;
        5 === h.tag && null !== l && (h = l, e ? (k = $4eecb6e629e760ea$var$Kb(c, f), null != k && g.unshift($4eecb6e629e760ea$var$tf(c, k, h))) : e || (k = $4eecb6e629e760ea$var$Kb(c, f), null != k && g.push($4eecb6e629e760ea$var$tf(c, k, h))));
        c = c.return;
    }
    0 !== g.length && a.push({
        event: b,
        listeners: g
    });
}
var $4eecb6e629e760ea$var$xf = /\r\n?/g, $4eecb6e629e760ea$var$yf = /\u0000|\uFFFD/g;
function $4eecb6e629e760ea$var$zf(a) {
    return ("string" === typeof a ? a : "" + a).replace($4eecb6e629e760ea$var$xf, "\n").replace($4eecb6e629e760ea$var$yf, "");
}
function $4eecb6e629e760ea$var$Af(a, b, c) {
    b = $4eecb6e629e760ea$var$zf(b);
    if ($4eecb6e629e760ea$var$zf(a) !== b && c) throw Error($4eecb6e629e760ea$var$p(425));
}
function $4eecb6e629e760ea$var$Bf() {}
var $4eecb6e629e760ea$var$Cf = null, $4eecb6e629e760ea$var$Df = null;
function $4eecb6e629e760ea$var$Ef(a, b) {
    return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
}
var $4eecb6e629e760ea$var$Ff = "function" === typeof setTimeout ? setTimeout : void 0, $4eecb6e629e760ea$var$Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, $4eecb6e629e760ea$var$Hf = "function" === typeof Promise ? Promise : void 0, $4eecb6e629e760ea$var$Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof $4eecb6e629e760ea$var$Hf ? function(a) {
    return $4eecb6e629e760ea$var$Hf.resolve(null).then(a).catch($4eecb6e629e760ea$var$If);
} : $4eecb6e629e760ea$var$Ff;
function $4eecb6e629e760ea$var$If(a) {
    setTimeout(function() {
        throw a;
    });
}
function $4eecb6e629e760ea$var$Kf(a, b) {
    var c = b, d = 0;
    do {
        var e = c.nextSibling;
        a.removeChild(c);
        if (e && 8 === e.nodeType) {
            if (c = e.data, "/$" === c) {
                if (0 === d) {
                    a.removeChild(e);
                    $4eecb6e629e760ea$var$bd(b);
                    return;
                }
                d--;
            } else "$" !== c && "$?" !== c && "$!" !== c || d++;
        }
        c = e;
    }while (c);
    $4eecb6e629e760ea$var$bd(b);
}
function $4eecb6e629e760ea$var$Lf(a) {
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
function $4eecb6e629e760ea$var$Mf(a) {
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
var $4eecb6e629e760ea$var$Nf = Math.random().toString(36).slice(2), $4eecb6e629e760ea$var$Of = "__reactFiber$" + $4eecb6e629e760ea$var$Nf, $4eecb6e629e760ea$var$Pf = "__reactProps$" + $4eecb6e629e760ea$var$Nf, $4eecb6e629e760ea$var$uf = "__reactContainer$" + $4eecb6e629e760ea$var$Nf, $4eecb6e629e760ea$var$of = "__reactEvents$" + $4eecb6e629e760ea$var$Nf, $4eecb6e629e760ea$var$Qf = "__reactListeners$" + $4eecb6e629e760ea$var$Nf, $4eecb6e629e760ea$var$Rf = "__reactHandles$" + $4eecb6e629e760ea$var$Nf;
function $4eecb6e629e760ea$var$Wc(a) {
    var b = a[$4eecb6e629e760ea$var$Of];
    if (b) return b;
    for(var c = a.parentNode; c;){
        if (b = c[$4eecb6e629e760ea$var$uf] || c[$4eecb6e629e760ea$var$Of]) {
            c = b.alternate;
            if (null !== b.child || null !== c && null !== c.child) for(a = $4eecb6e629e760ea$var$Mf(a); null !== a;){
                if (c = a[$4eecb6e629e760ea$var$Of]) return c;
                a = $4eecb6e629e760ea$var$Mf(a);
            }
            return b;
        }
        a = c;
        c = a.parentNode;
    }
    return null;
}
function $4eecb6e629e760ea$var$Cb(a) {
    a = a[$4eecb6e629e760ea$var$Of] || a[$4eecb6e629e760ea$var$uf];
    return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
}
function $4eecb6e629e760ea$var$ue(a) {
    if (5 === a.tag || 6 === a.tag) return a.stateNode;
    throw Error($4eecb6e629e760ea$var$p(33));
}
function $4eecb6e629e760ea$var$Db(a) {
    return a[$4eecb6e629e760ea$var$Pf] || null;
}
var $4eecb6e629e760ea$var$Sf = [], $4eecb6e629e760ea$var$Tf = -1;
function $4eecb6e629e760ea$var$Uf(a) {
    return {
        current: a
    };
}
function $4eecb6e629e760ea$var$E(a) {
    0 > $4eecb6e629e760ea$var$Tf || (a.current = $4eecb6e629e760ea$var$Sf[$4eecb6e629e760ea$var$Tf], $4eecb6e629e760ea$var$Sf[$4eecb6e629e760ea$var$Tf] = null, $4eecb6e629e760ea$var$Tf--);
}
function $4eecb6e629e760ea$var$G(a, b) {
    $4eecb6e629e760ea$var$Tf++;
    $4eecb6e629e760ea$var$Sf[$4eecb6e629e760ea$var$Tf] = a.current;
    a.current = b;
}
var $4eecb6e629e760ea$var$Vf = {}, $4eecb6e629e760ea$var$H = $4eecb6e629e760ea$var$Uf($4eecb6e629e760ea$var$Vf), $4eecb6e629e760ea$var$Wf = $4eecb6e629e760ea$var$Uf(!1), $4eecb6e629e760ea$var$Xf = $4eecb6e629e760ea$var$Vf;
function $4eecb6e629e760ea$var$Yf(a, b) {
    var c = a.type.contextTypes;
    if (!c) return $4eecb6e629e760ea$var$Vf;
    var d = a.stateNode;
    if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
    var e = {}, f;
    for(f in c)e[f] = b[f];
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
    return e;
}
function $4eecb6e629e760ea$var$Zf(a) {
    a = a.childContextTypes;
    return null !== a && void 0 !== a;
}
function $4eecb6e629e760ea$var$$f() {
    $4eecb6e629e760ea$var$E($4eecb6e629e760ea$var$Wf);
    $4eecb6e629e760ea$var$E($4eecb6e629e760ea$var$H);
}
function $4eecb6e629e760ea$var$ag(a, b, c) {
    if ($4eecb6e629e760ea$var$H.current !== $4eecb6e629e760ea$var$Vf) throw Error($4eecb6e629e760ea$var$p(168));
    $4eecb6e629e760ea$var$G($4eecb6e629e760ea$var$H, b);
    $4eecb6e629e760ea$var$G($4eecb6e629e760ea$var$Wf, c);
}
function $4eecb6e629e760ea$var$bg(a, b, c) {
    var d = a.stateNode;
    b = b.childContextTypes;
    if ("function" !== typeof d.getChildContext) return c;
    d = d.getChildContext();
    for(var e in d)if (!(e in b)) throw Error($4eecb6e629e760ea$var$p(108, $4eecb6e629e760ea$var$Ra(a) || "Unknown", e));
    return $4eecb6e629e760ea$var$A({}, c, d);
}
function $4eecb6e629e760ea$var$cg(a) {
    a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || $4eecb6e629e760ea$var$Vf;
    $4eecb6e629e760ea$var$Xf = $4eecb6e629e760ea$var$H.current;
    $4eecb6e629e760ea$var$G($4eecb6e629e760ea$var$H, a);
    $4eecb6e629e760ea$var$G($4eecb6e629e760ea$var$Wf, $4eecb6e629e760ea$var$Wf.current);
    return !0;
}
function $4eecb6e629e760ea$var$dg(a, b, c) {
    var d = a.stateNode;
    if (!d) throw Error($4eecb6e629e760ea$var$p(169));
    c ? (a = $4eecb6e629e760ea$var$bg(a, b, $4eecb6e629e760ea$var$Xf), d.__reactInternalMemoizedMergedChildContext = a, $4eecb6e629e760ea$var$E($4eecb6e629e760ea$var$Wf), $4eecb6e629e760ea$var$E($4eecb6e629e760ea$var$H), $4eecb6e629e760ea$var$G($4eecb6e629e760ea$var$H, a)) : $4eecb6e629e760ea$var$E($4eecb6e629e760ea$var$Wf);
    $4eecb6e629e760ea$var$G($4eecb6e629e760ea$var$Wf, c);
}
var $4eecb6e629e760ea$var$eg = null, $4eecb6e629e760ea$var$fg = !1, $4eecb6e629e760ea$var$gg = !1;
function $4eecb6e629e760ea$var$hg(a) {
    null === $4eecb6e629e760ea$var$eg ? $4eecb6e629e760ea$var$eg = [
        a
    ] : $4eecb6e629e760ea$var$eg.push(a);
}
function $4eecb6e629e760ea$var$ig(a) {
    $4eecb6e629e760ea$var$fg = !0;
    $4eecb6e629e760ea$var$hg(a);
}
function $4eecb6e629e760ea$var$jg() {
    if (!$4eecb6e629e760ea$var$gg && null !== $4eecb6e629e760ea$var$eg) {
        $4eecb6e629e760ea$var$gg = !0;
        var a = 0, b = $4eecb6e629e760ea$var$C;
        try {
            var c = $4eecb6e629e760ea$var$eg;
            for($4eecb6e629e760ea$var$C = 1; a < c.length; a++){
                var d = c[a];
                do d = d(!0);
                while (null !== d);
            }
            $4eecb6e629e760ea$var$eg = null;
            $4eecb6e629e760ea$var$fg = !1;
        } catch (e) {
            throw null !== $4eecb6e629e760ea$var$eg && ($4eecb6e629e760ea$var$eg = $4eecb6e629e760ea$var$eg.slice(a + 1)), $4eecb6e629e760ea$var$ac($4eecb6e629e760ea$var$fc, $4eecb6e629e760ea$var$jg), e;
        } finally{
            $4eecb6e629e760ea$var$C = b, $4eecb6e629e760ea$var$gg = !1;
        }
    }
    return null;
}
var $4eecb6e629e760ea$var$kg = [], $4eecb6e629e760ea$var$lg = 0, $4eecb6e629e760ea$var$mg = null, $4eecb6e629e760ea$var$ng = 0, $4eecb6e629e760ea$var$og = [], $4eecb6e629e760ea$var$pg = 0, $4eecb6e629e760ea$var$qg = null, $4eecb6e629e760ea$var$rg = 1, $4eecb6e629e760ea$var$sg = "";
function $4eecb6e629e760ea$var$tg(a, b) {
    $4eecb6e629e760ea$var$kg[$4eecb6e629e760ea$var$lg++] = $4eecb6e629e760ea$var$ng;
    $4eecb6e629e760ea$var$kg[$4eecb6e629e760ea$var$lg++] = $4eecb6e629e760ea$var$mg;
    $4eecb6e629e760ea$var$mg = a;
    $4eecb6e629e760ea$var$ng = b;
}
function $4eecb6e629e760ea$var$ug(a, b, c) {
    $4eecb6e629e760ea$var$og[$4eecb6e629e760ea$var$pg++] = $4eecb6e629e760ea$var$rg;
    $4eecb6e629e760ea$var$og[$4eecb6e629e760ea$var$pg++] = $4eecb6e629e760ea$var$sg;
    $4eecb6e629e760ea$var$og[$4eecb6e629e760ea$var$pg++] = $4eecb6e629e760ea$var$qg;
    $4eecb6e629e760ea$var$qg = a;
    var d = $4eecb6e629e760ea$var$rg;
    a = $4eecb6e629e760ea$var$sg;
    var e = 32 - $4eecb6e629e760ea$var$oc(d) - 1;
    d &= ~(1 << e);
    c += 1;
    var f = 32 - $4eecb6e629e760ea$var$oc(b) + e;
    if (30 < f) {
        var g = e - e % 5;
        f = (d & (1 << g) - 1).toString(32);
        d >>= g;
        e -= g;
        $4eecb6e629e760ea$var$rg = 1 << 32 - $4eecb6e629e760ea$var$oc(b) + e | c << e | d;
        $4eecb6e629e760ea$var$sg = f + a;
    } else $4eecb6e629e760ea$var$rg = 1 << f | c << e | d, $4eecb6e629e760ea$var$sg = a;
}
function $4eecb6e629e760ea$var$vg(a) {
    null !== a.return && ($4eecb6e629e760ea$var$tg(a, 1), $4eecb6e629e760ea$var$ug(a, 1, 0));
}
function $4eecb6e629e760ea$var$wg(a) {
    for(; a === $4eecb6e629e760ea$var$mg;)$4eecb6e629e760ea$var$mg = $4eecb6e629e760ea$var$kg[--$4eecb6e629e760ea$var$lg], $4eecb6e629e760ea$var$kg[$4eecb6e629e760ea$var$lg] = null, $4eecb6e629e760ea$var$ng = $4eecb6e629e760ea$var$kg[--$4eecb6e629e760ea$var$lg], $4eecb6e629e760ea$var$kg[$4eecb6e629e760ea$var$lg] = null;
    for(; a === $4eecb6e629e760ea$var$qg;)$4eecb6e629e760ea$var$qg = $4eecb6e629e760ea$var$og[--$4eecb6e629e760ea$var$pg], $4eecb6e629e760ea$var$og[$4eecb6e629e760ea$var$pg] = null, $4eecb6e629e760ea$var$sg = $4eecb6e629e760ea$var$og[--$4eecb6e629e760ea$var$pg], $4eecb6e629e760ea$var$og[$4eecb6e629e760ea$var$pg] = null, $4eecb6e629e760ea$var$rg = $4eecb6e629e760ea$var$og[--$4eecb6e629e760ea$var$pg], $4eecb6e629e760ea$var$og[$4eecb6e629e760ea$var$pg] = null;
}
var $4eecb6e629e760ea$var$xg = null, $4eecb6e629e760ea$var$yg = null, $4eecb6e629e760ea$var$I = !1, $4eecb6e629e760ea$var$zg = null;
function $4eecb6e629e760ea$var$Ag(a, b) {
    var c = $4eecb6e629e760ea$var$Bg(5, null, null, 0);
    c.elementType = "DELETED";
    c.stateNode = b;
    c.return = a;
    b = a.deletions;
    null === b ? (a.deletions = [
        c
    ], a.flags |= 16) : b.push(c);
}
function $4eecb6e629e760ea$var$Cg(a, b) {
    switch(a.tag){
        case 5:
            var c = a.type;
            b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
            return null !== b ? (a.stateNode = b, $4eecb6e629e760ea$var$xg = a, $4eecb6e629e760ea$var$yg = $4eecb6e629e760ea$var$Lf(b.firstChild), !0) : !1;
        case 6:
            return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, $4eecb6e629e760ea$var$xg = a, $4eecb6e629e760ea$var$yg = null, !0) : !1;
        case 13:
            return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== $4eecb6e629e760ea$var$qg ? {
                id: $4eecb6e629e760ea$var$rg,
                overflow: $4eecb6e629e760ea$var$sg
            } : null, a.memoizedState = {
                dehydrated: b,
                treeContext: c,
                retryLane: 1073741824
            }, c = $4eecb6e629e760ea$var$Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, $4eecb6e629e760ea$var$xg = a, $4eecb6e629e760ea$var$yg = null, !0) : !1;
        default:
            return !1;
    }
}
function $4eecb6e629e760ea$var$Dg(a) {
    return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
}
function $4eecb6e629e760ea$var$Eg(a) {
    if ($4eecb6e629e760ea$var$I) {
        var b = $4eecb6e629e760ea$var$yg;
        if (b) {
            var c = b;
            if (!$4eecb6e629e760ea$var$Cg(a, b)) {
                if ($4eecb6e629e760ea$var$Dg(a)) throw Error($4eecb6e629e760ea$var$p(418));
                b = $4eecb6e629e760ea$var$Lf(c.nextSibling);
                var d = $4eecb6e629e760ea$var$xg;
                b && $4eecb6e629e760ea$var$Cg(a, b) ? $4eecb6e629e760ea$var$Ag(d, c) : (a.flags = a.flags & -4097 | 2, $4eecb6e629e760ea$var$I = !1, $4eecb6e629e760ea$var$xg = a);
            }
        } else {
            if ($4eecb6e629e760ea$var$Dg(a)) throw Error($4eecb6e629e760ea$var$p(418));
            a.flags = a.flags & -4097 | 2;
            $4eecb6e629e760ea$var$I = !1;
            $4eecb6e629e760ea$var$xg = a;
        }
    }
}
function $4eecb6e629e760ea$var$Fg(a) {
    for(a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;)a = a.return;
    $4eecb6e629e760ea$var$xg = a;
}
function $4eecb6e629e760ea$var$Gg(a) {
    if (a !== $4eecb6e629e760ea$var$xg) return !1;
    if (!$4eecb6e629e760ea$var$I) return $4eecb6e629e760ea$var$Fg(a), $4eecb6e629e760ea$var$I = !0, !1;
    var b;
    (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !$4eecb6e629e760ea$var$Ef(a.type, a.memoizedProps));
    if (b && (b = $4eecb6e629e760ea$var$yg)) {
        if ($4eecb6e629e760ea$var$Dg(a)) throw $4eecb6e629e760ea$var$Hg(), Error($4eecb6e629e760ea$var$p(418));
        for(; b;)$4eecb6e629e760ea$var$Ag(a, b), b = $4eecb6e629e760ea$var$Lf(b.nextSibling);
    }
    $4eecb6e629e760ea$var$Fg(a);
    if (13 === a.tag) {
        a = a.memoizedState;
        a = null !== a ? a.dehydrated : null;
        if (!a) throw Error($4eecb6e629e760ea$var$p(317));
        a: {
            a = a.nextSibling;
            for(b = 0; a;){
                if (8 === a.nodeType) {
                    var c = a.data;
                    if ("/$" === c) {
                        if (0 === b) {
                            $4eecb6e629e760ea$var$yg = $4eecb6e629e760ea$var$Lf(a.nextSibling);
                            break a;
                        }
                        b--;
                    } else "$" !== c && "$!" !== c && "$?" !== c || b++;
                }
                a = a.nextSibling;
            }
            $4eecb6e629e760ea$var$yg = null;
        }
    } else $4eecb6e629e760ea$var$yg = $4eecb6e629e760ea$var$xg ? $4eecb6e629e760ea$var$Lf(a.stateNode.nextSibling) : null;
    return !0;
}
function $4eecb6e629e760ea$var$Hg() {
    for(var a = $4eecb6e629e760ea$var$yg; a;)a = $4eecb6e629e760ea$var$Lf(a.nextSibling);
}
function $4eecb6e629e760ea$var$Ig() {
    $4eecb6e629e760ea$var$yg = $4eecb6e629e760ea$var$xg = null;
    $4eecb6e629e760ea$var$I = !1;
}
function $4eecb6e629e760ea$var$Jg(a) {
    null === $4eecb6e629e760ea$var$zg ? $4eecb6e629e760ea$var$zg = [
        a
    ] : $4eecb6e629e760ea$var$zg.push(a);
}
var $4eecb6e629e760ea$var$Kg = $4eecb6e629e760ea$var$ua.ReactCurrentBatchConfig;
function $4eecb6e629e760ea$var$Lg(a, b, c) {
    a = c.ref;
    if (null !== a && "function" !== typeof a && "object" !== typeof a) {
        if (c._owner) {
            c = c._owner;
            if (c) {
                if (1 !== c.tag) throw Error($4eecb6e629e760ea$var$p(309));
                var d = c.stateNode;
            }
            if (!d) throw Error($4eecb6e629e760ea$var$p(147, a));
            var e = d, f = "" + a;
            if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f) return b.ref;
            b = function(a) {
                var b = e.refs;
                null === a ? delete b[f] : b[f] = a;
            };
            b._stringRef = f;
            return b;
        }
        if ("string" !== typeof a) throw Error($4eecb6e629e760ea$var$p(284));
        if (!c._owner) throw Error($4eecb6e629e760ea$var$p(290, a));
    }
    return a;
}
function $4eecb6e629e760ea$var$Mg(a, b) {
    a = Object.prototype.toString.call(b);
    throw Error($4eecb6e629e760ea$var$p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
}
function $4eecb6e629e760ea$var$Ng(a) {
    var b = a._init;
    return b(a._payload);
}
function $4eecb6e629e760ea$var$Og(a) {
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
        a = $4eecb6e629e760ea$var$Pg(a, b);
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
        if (null === b || 6 !== b.tag) return b = $4eecb6e629e760ea$var$Qg(c, a.mode, d), b.return = a, b;
        b = e(b, c);
        b.return = a;
        return b;
    }
    function k(a, b, c, d) {
        var f = c.type;
        if (f === $4eecb6e629e760ea$var$ya) return m(a, b, c.props.children, d, c.key);
        if (null !== b && (b.elementType === f || "object" === typeof f && null !== f && f.$$typeof === $4eecb6e629e760ea$var$Ha && $4eecb6e629e760ea$var$Ng(f) === b.type)) return d = e(b, c.props), d.ref = $4eecb6e629e760ea$var$Lg(a, b, c), d.return = a, d;
        d = $4eecb6e629e760ea$var$Rg(c.type, c.key, c.props, null, a.mode, d);
        d.ref = $4eecb6e629e760ea$var$Lg(a, b, c);
        d.return = a;
        return d;
    }
    function l(a, b, c, d) {
        if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = $4eecb6e629e760ea$var$Sg(c, a.mode, d), b.return = a, b;
        b = e(b, c.children || []);
        b.return = a;
        return b;
    }
    function m(a, b, c, d, f) {
        if (null === b || 7 !== b.tag) return b = $4eecb6e629e760ea$var$Tg(c, a.mode, d, f), b.return = a, b;
        b = e(b, c);
        b.return = a;
        return b;
    }
    function q(a, b, c) {
        if ("string" === typeof b && "" !== b || "number" === typeof b) return b = $4eecb6e629e760ea$var$Qg("" + b, a.mode, c), b.return = a, b;
        if ("object" === typeof b && null !== b) {
            switch(b.$$typeof){
                case $4eecb6e629e760ea$var$va:
                    return c = $4eecb6e629e760ea$var$Rg(b.type, b.key, b.props, null, a.mode, c), c.ref = $4eecb6e629e760ea$var$Lg(a, null, b), c.return = a, c;
                case $4eecb6e629e760ea$var$wa:
                    return b = $4eecb6e629e760ea$var$Sg(b, a.mode, c), b.return = a, b;
                case $4eecb6e629e760ea$var$Ha:
                    var d = b._init;
                    return q(a, d(b._payload), c);
            }
            if ($4eecb6e629e760ea$var$eb(b) || $4eecb6e629e760ea$var$Ka(b)) return b = $4eecb6e629e760ea$var$Tg(b, a.mode, c, null), b.return = a, b;
            $4eecb6e629e760ea$var$Mg(a, b);
        }
        return null;
    }
    function r(a, b, c, d) {
        var e = null !== b ? b.key : null;
        if ("string" === typeof c && "" !== c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);
        if ("object" === typeof c && null !== c) {
            switch(c.$$typeof){
                case $4eecb6e629e760ea$var$va:
                    return c.key === e ? k(a, b, c, d) : null;
                case $4eecb6e629e760ea$var$wa:
                    return c.key === e ? l(a, b, c, d) : null;
                case $4eecb6e629e760ea$var$Ha:
                    return e = c._init, r(a, b, e(c._payload), d);
            }
            if ($4eecb6e629e760ea$var$eb(c) || $4eecb6e629e760ea$var$Ka(c)) return null !== e ? null : m(a, b, c, d, null);
            $4eecb6e629e760ea$var$Mg(a, c);
        }
        return null;
    }
    function y(a, b, c, d, e) {
        if ("string" === typeof d && "" !== d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);
        if ("object" === typeof d && null !== d) {
            switch(d.$$typeof){
                case $4eecb6e629e760ea$var$va:
                    return a = a.get(null === d.key ? c : d.key) || null, k(b, a, d, e);
                case $4eecb6e629e760ea$var$wa:
                    return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);
                case $4eecb6e629e760ea$var$Ha:
                    var f = d._init;
                    return y(a, b, c, f(d._payload), e);
            }
            if ($4eecb6e629e760ea$var$eb(d) || $4eecb6e629e760ea$var$Ka(d)) return a = a.get(c) || null, m(b, a, d, e, null);
            $4eecb6e629e760ea$var$Mg(b, d);
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
        if (w === h.length) return c(e, u), $4eecb6e629e760ea$var$I && $4eecb6e629e760ea$var$tg(e, w), l;
        if (null === u) {
            for(; w < h.length; w++)u = q(e, h[w], k), null !== u && (g = f(u, g, w), null === m ? l = u : m.sibling = u, m = u);
            $4eecb6e629e760ea$var$I && $4eecb6e629e760ea$var$tg(e, w);
            return l;
        }
        for(u = d(e, u); w < h.length; w++)x = y(u, e, w, h[w], k), null !== x && (a && null !== x.alternate && u.delete(null === x.key ? w : x.key), g = f(x, g, w), null === m ? l = x : m.sibling = x, m = x);
        a && u.forEach(function(a) {
            return b(e, a);
        });
        $4eecb6e629e760ea$var$I && $4eecb6e629e760ea$var$tg(e, w);
        return l;
    }
    function t(e, g, h, k) {
        var l = $4eecb6e629e760ea$var$Ka(h);
        if ("function" !== typeof l) throw Error($4eecb6e629e760ea$var$p(150));
        h = l.call(h);
        if (null == h) throw Error($4eecb6e629e760ea$var$p(151));
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
        if (n.done) return c(e, m), $4eecb6e629e760ea$var$I && $4eecb6e629e760ea$var$tg(e, w), l;
        if (null === m) {
            for(; !n.done; w++, n = h.next())n = q(e, n.value, k), null !== n && (g = f(n, g, w), null === u ? l = n : u.sibling = n, u = n);
            $4eecb6e629e760ea$var$I && $4eecb6e629e760ea$var$tg(e, w);
            return l;
        }
        for(m = d(e, m); !n.done; w++, n = h.next())n = y(m, e, w, n.value, k), null !== n && (a && null !== n.alternate && m.delete(null === n.key ? w : n.key), g = f(n, g, w), null === u ? l = n : u.sibling = n, u = n);
        a && m.forEach(function(a) {
            return b(e, a);
        });
        $4eecb6e629e760ea$var$I && $4eecb6e629e760ea$var$tg(e, w);
        return l;
    }
    function J(a, d, f, h) {
        "object" === typeof f && null !== f && f.type === $4eecb6e629e760ea$var$ya && null === f.key && (f = f.props.children);
        if ("object" === typeof f && null !== f) {
            switch(f.$$typeof){
                case $4eecb6e629e760ea$var$va:
                    a: {
                        for(var k = f.key, l = d; null !== l;){
                            if (l.key === k) {
                                k = f.type;
                                if (k === $4eecb6e629e760ea$var$ya) {
                                    if (7 === l.tag) {
                                        c(a, l.sibling);
                                        d = e(l, f.props.children);
                                        d.return = a;
                                        a = d;
                                        break a;
                                    }
                                } else if (l.elementType === k || "object" === typeof k && null !== k && k.$$typeof === $4eecb6e629e760ea$var$Ha && $4eecb6e629e760ea$var$Ng(k) === l.type) {
                                    c(a, l.sibling);
                                    d = e(l, f.props);
                                    d.ref = $4eecb6e629e760ea$var$Lg(a, l, f);
                                    d.return = a;
                                    a = d;
                                    break a;
                                }
                                c(a, l);
                                break;
                            } else b(a, l);
                            l = l.sibling;
                        }
                        f.type === $4eecb6e629e760ea$var$ya ? (d = $4eecb6e629e760ea$var$Tg(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = $4eecb6e629e760ea$var$Rg(f.type, f.key, f.props, null, a.mode, h), h.ref = $4eecb6e629e760ea$var$Lg(a, d, f), h.return = a, a = h);
                    }
                    return g(a);
                case $4eecb6e629e760ea$var$wa:
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
                        d = $4eecb6e629e760ea$var$Sg(f, a.mode, h);
                        d.return = a;
                        a = d;
                    }
                    return g(a);
                case $4eecb6e629e760ea$var$Ha:
                    return l = f._init, J(a, d, l(f._payload), h);
            }
            if ($4eecb6e629e760ea$var$eb(f)) return n(a, d, f, h);
            if ($4eecb6e629e760ea$var$Ka(f)) return t(a, d, f, h);
            $4eecb6e629e760ea$var$Mg(a, f);
        }
        return "string" === typeof f && "" !== f || "number" === typeof f ? (f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), d = $4eecb6e629e760ea$var$Qg(f, a.mode, h), d.return = a, a = d), g(a)) : c(a, d);
    }
    return J;
}
var $4eecb6e629e760ea$var$Ug = $4eecb6e629e760ea$var$Og(!0), $4eecb6e629e760ea$var$Vg = $4eecb6e629e760ea$var$Og(!1), $4eecb6e629e760ea$var$Wg = $4eecb6e629e760ea$var$Uf(null), $4eecb6e629e760ea$var$Xg = null, $4eecb6e629e760ea$var$Yg = null, $4eecb6e629e760ea$var$Zg = null;
function $4eecb6e629e760ea$var$$g() {
    $4eecb6e629e760ea$var$Zg = $4eecb6e629e760ea$var$Yg = $4eecb6e629e760ea$var$Xg = null;
}
function $4eecb6e629e760ea$var$ah(a) {
    var b = $4eecb6e629e760ea$var$Wg.current;
    $4eecb6e629e760ea$var$E($4eecb6e629e760ea$var$Wg);
    a._currentValue = b;
}
function $4eecb6e629e760ea$var$bh(a, b, c) {
    for(; null !== a;){
        var d = a.alternate;
        (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
        if (a === c) break;
        a = a.return;
    }
}
function $4eecb6e629e760ea$var$ch(a, b) {
    $4eecb6e629e760ea$var$Xg = a;
    $4eecb6e629e760ea$var$Zg = $4eecb6e629e760ea$var$Yg = null;
    a = a.dependencies;
    null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && ($4eecb6e629e760ea$var$dh = !0), a.firstContext = null);
}
function $4eecb6e629e760ea$var$eh(a) {
    var b = a._currentValue;
    if ($4eecb6e629e760ea$var$Zg !== a) {
        if (a = {
            context: a,
            memoizedValue: b,
            next: null
        }, null === $4eecb6e629e760ea$var$Yg) {
            if (null === $4eecb6e629e760ea$var$Xg) throw Error($4eecb6e629e760ea$var$p(308));
            $4eecb6e629e760ea$var$Yg = a;
            $4eecb6e629e760ea$var$Xg.dependencies = {
                lanes: 0,
                firstContext: a
            };
        } else $4eecb6e629e760ea$var$Yg = $4eecb6e629e760ea$var$Yg.next = a;
    }
    return b;
}
var $4eecb6e629e760ea$var$fh = null;
function $4eecb6e629e760ea$var$gh(a) {
    null === $4eecb6e629e760ea$var$fh ? $4eecb6e629e760ea$var$fh = [
        a
    ] : $4eecb6e629e760ea$var$fh.push(a);
}
function $4eecb6e629e760ea$var$hh(a, b, c, d) {
    var e = b.interleaved;
    null === e ? (c.next = c, $4eecb6e629e760ea$var$gh(b)) : (c.next = e.next, e.next = c);
    b.interleaved = c;
    return $4eecb6e629e760ea$var$ih(a, d);
}
function $4eecb6e629e760ea$var$ih(a, b) {
    a.lanes |= b;
    var c = a.alternate;
    null !== c && (c.lanes |= b);
    c = a;
    for(a = a.return; null !== a;)a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
    return 3 === c.tag ? c.stateNode : null;
}
var $4eecb6e629e760ea$var$jh = !1;
function $4eecb6e629e760ea$var$kh(a) {
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
function $4eecb6e629e760ea$var$lh(a, b) {
    a = a.updateQueue;
    b.updateQueue === a && (b.updateQueue = {
        baseState: a.baseState,
        firstBaseUpdate: a.firstBaseUpdate,
        lastBaseUpdate: a.lastBaseUpdate,
        shared: a.shared,
        effects: a.effects
    });
}
function $4eecb6e629e760ea$var$mh(a, b) {
    return {
        eventTime: a,
        lane: b,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    };
}
function $4eecb6e629e760ea$var$nh(a, b, c) {
    var d = a.updateQueue;
    if (null === d) return null;
    d = d.shared;
    if (0 !== ($4eecb6e629e760ea$var$K & 2)) {
        var e = d.pending;
        null === e ? b.next = b : (b.next = e.next, e.next = b);
        d.pending = b;
        return $4eecb6e629e760ea$var$ih(a, c);
    }
    e = d.interleaved;
    null === e ? (b.next = b, $4eecb6e629e760ea$var$gh(d)) : (b.next = e.next, e.next = b);
    d.interleaved = b;
    return $4eecb6e629e760ea$var$ih(a, c);
}
function $4eecb6e629e760ea$var$oh(a, b, c) {
    b = b.updateQueue;
    if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
        var d = b.lanes;
        d &= a.pendingLanes;
        c |= d;
        b.lanes = c;
        $4eecb6e629e760ea$var$Cc(a, c);
    }
}
function $4eecb6e629e760ea$var$ph(a, b) {
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
function $4eecb6e629e760ea$var$qh(a, b, c, d) {
    var e = a.updateQueue;
    $4eecb6e629e760ea$var$jh = !1;
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
                            q = $4eecb6e629e760ea$var$A({}, q, r);
                            break a;
                        case 2:
                            $4eecb6e629e760ea$var$jh = !0;
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
        $4eecb6e629e760ea$var$rh |= g;
        a.lanes = g;
        a.memoizedState = q;
    }
}
function $4eecb6e629e760ea$var$sh(a, b, c) {
    a = b.effects;
    b.effects = null;
    if (null !== a) for(b = 0; b < a.length; b++){
        var d = a[b], e = d.callback;
        if (null !== e) {
            d.callback = null;
            d = c;
            if ("function" !== typeof e) throw Error($4eecb6e629e760ea$var$p(191, e));
            e.call(d);
        }
    }
}
var $4eecb6e629e760ea$var$th = {}, $4eecb6e629e760ea$var$uh = $4eecb6e629e760ea$var$Uf($4eecb6e629e760ea$var$th), $4eecb6e629e760ea$var$vh = $4eecb6e629e760ea$var$Uf($4eecb6e629e760ea$var$th), $4eecb6e629e760ea$var$wh = $4eecb6e629e760ea$var$Uf($4eecb6e629e760ea$var$th);
function $4eecb6e629e760ea$var$xh(a) {
    if (a === $4eecb6e629e760ea$var$th) throw Error($4eecb6e629e760ea$var$p(174));
    return a;
}
function $4eecb6e629e760ea$var$yh(a, b) {
    $4eecb6e629e760ea$var$G($4eecb6e629e760ea$var$wh, b);
    $4eecb6e629e760ea$var$G($4eecb6e629e760ea$var$vh, a);
    $4eecb6e629e760ea$var$G($4eecb6e629e760ea$var$uh, $4eecb6e629e760ea$var$th);
    a = b.nodeType;
    switch(a){
        case 9:
        case 11:
            b = (b = b.documentElement) ? b.namespaceURI : $4eecb6e629e760ea$var$lb(null, "");
            break;
        default:
            a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = $4eecb6e629e760ea$var$lb(b, a);
    }
    $4eecb6e629e760ea$var$E($4eecb6e629e760ea$var$uh);
    $4eecb6e629e760ea$var$G($4eecb6e629e760ea$var$uh, b);
}
function $4eecb6e629e760ea$var$zh() {
    $4eecb6e629e760ea$var$E($4eecb6e629e760ea$var$uh);
    $4eecb6e629e760ea$var$E($4eecb6e629e760ea$var$vh);
    $4eecb6e629e760ea$var$E($4eecb6e629e760ea$var$wh);
}
function $4eecb6e629e760ea$var$Ah(a) {
    $4eecb6e629e760ea$var$xh($4eecb6e629e760ea$var$wh.current);
    var b = $4eecb6e629e760ea$var$xh($4eecb6e629e760ea$var$uh.current);
    var c = $4eecb6e629e760ea$var$lb(b, a.type);
    b !== c && ($4eecb6e629e760ea$var$G($4eecb6e629e760ea$var$vh, a), $4eecb6e629e760ea$var$G($4eecb6e629e760ea$var$uh, c));
}
function $4eecb6e629e760ea$var$Bh(a) {
    $4eecb6e629e760ea$var$vh.current === a && ($4eecb6e629e760ea$var$E($4eecb6e629e760ea$var$uh), $4eecb6e629e760ea$var$E($4eecb6e629e760ea$var$vh));
}
var $4eecb6e629e760ea$var$L = $4eecb6e629e760ea$var$Uf(0);
function $4eecb6e629e760ea$var$Ch(a) {
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
var $4eecb6e629e760ea$var$Dh = [];
function $4eecb6e629e760ea$var$Eh() {
    for(var a = 0; a < $4eecb6e629e760ea$var$Dh.length; a++)$4eecb6e629e760ea$var$Dh[a]._workInProgressVersionPrimary = null;
    $4eecb6e629e760ea$var$Dh.length = 0;
}
var $4eecb6e629e760ea$var$Fh = $4eecb6e629e760ea$var$ua.ReactCurrentDispatcher, $4eecb6e629e760ea$var$Gh = $4eecb6e629e760ea$var$ua.ReactCurrentBatchConfig, $4eecb6e629e760ea$var$Hh = 0, $4eecb6e629e760ea$var$M = null, $4eecb6e629e760ea$var$N = null, $4eecb6e629e760ea$var$O = null, $4eecb6e629e760ea$var$Ih = !1, $4eecb6e629e760ea$var$Jh = !1, $4eecb6e629e760ea$var$Kh = 0, $4eecb6e629e760ea$var$Lh = 0;
function $4eecb6e629e760ea$var$P() {
    throw Error($4eecb6e629e760ea$var$p(321));
}
function $4eecb6e629e760ea$var$Mh(a, b) {
    if (null === b) return !1;
    for(var c = 0; c < b.length && c < a.length; c++)if (!$4eecb6e629e760ea$var$He(a[c], b[c])) return !1;
    return !0;
}
function $4eecb6e629e760ea$var$Nh(a, b, c, d, e, f) {
    $4eecb6e629e760ea$var$Hh = f;
    $4eecb6e629e760ea$var$M = b;
    b.memoizedState = null;
    b.updateQueue = null;
    b.lanes = 0;
    $4eecb6e629e760ea$var$Fh.current = null === a || null === a.memoizedState ? $4eecb6e629e760ea$var$Oh : $4eecb6e629e760ea$var$Ph;
    a = c(d, e);
    if ($4eecb6e629e760ea$var$Jh) {
        f = 0;
        do {
            $4eecb6e629e760ea$var$Jh = !1;
            $4eecb6e629e760ea$var$Kh = 0;
            if (25 <= f) throw Error($4eecb6e629e760ea$var$p(301));
            f += 1;
            $4eecb6e629e760ea$var$O = $4eecb6e629e760ea$var$N = null;
            b.updateQueue = null;
            $4eecb6e629e760ea$var$Fh.current = $4eecb6e629e760ea$var$Qh;
            a = c(d, e);
        }while ($4eecb6e629e760ea$var$Jh);
    }
    $4eecb6e629e760ea$var$Fh.current = $4eecb6e629e760ea$var$Rh;
    b = null !== $4eecb6e629e760ea$var$N && null !== $4eecb6e629e760ea$var$N.next;
    $4eecb6e629e760ea$var$Hh = 0;
    $4eecb6e629e760ea$var$O = $4eecb6e629e760ea$var$N = $4eecb6e629e760ea$var$M = null;
    $4eecb6e629e760ea$var$Ih = !1;
    if (b) throw Error($4eecb6e629e760ea$var$p(300));
    return a;
}
function $4eecb6e629e760ea$var$Sh() {
    var a = 0 !== $4eecb6e629e760ea$var$Kh;
    $4eecb6e629e760ea$var$Kh = 0;
    return a;
}
function $4eecb6e629e760ea$var$Th() {
    var a = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    null === $4eecb6e629e760ea$var$O ? $4eecb6e629e760ea$var$M.memoizedState = $4eecb6e629e760ea$var$O = a : $4eecb6e629e760ea$var$O = $4eecb6e629e760ea$var$O.next = a;
    return $4eecb6e629e760ea$var$O;
}
function $4eecb6e629e760ea$var$Uh() {
    if (null === $4eecb6e629e760ea$var$N) {
        var a = $4eecb6e629e760ea$var$M.alternate;
        a = null !== a ? a.memoizedState : null;
    } else a = $4eecb6e629e760ea$var$N.next;
    var b = null === $4eecb6e629e760ea$var$O ? $4eecb6e629e760ea$var$M.memoizedState : $4eecb6e629e760ea$var$O.next;
    if (null !== b) $4eecb6e629e760ea$var$O = b, $4eecb6e629e760ea$var$N = a;
    else {
        if (null === a) throw Error($4eecb6e629e760ea$var$p(310));
        $4eecb6e629e760ea$var$N = a;
        a = {
            memoizedState: $4eecb6e629e760ea$var$N.memoizedState,
            baseState: $4eecb6e629e760ea$var$N.baseState,
            baseQueue: $4eecb6e629e760ea$var$N.baseQueue,
            queue: $4eecb6e629e760ea$var$N.queue,
            next: null
        };
        null === $4eecb6e629e760ea$var$O ? $4eecb6e629e760ea$var$M.memoizedState = $4eecb6e629e760ea$var$O = a : $4eecb6e629e760ea$var$O = $4eecb6e629e760ea$var$O.next = a;
    }
    return $4eecb6e629e760ea$var$O;
}
function $4eecb6e629e760ea$var$Vh(a, b) {
    return "function" === typeof b ? b(a) : b;
}
function $4eecb6e629e760ea$var$Wh(a) {
    var b = $4eecb6e629e760ea$var$Uh(), c = b.queue;
    if (null === c) throw Error($4eecb6e629e760ea$var$p(311));
    c.lastRenderedReducer = a;
    var d = $4eecb6e629e760ea$var$N, e = d.baseQueue, f = c.pending;
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
            if (($4eecb6e629e760ea$var$Hh & m) === m) null !== k && (k = k.next = {
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
                $4eecb6e629e760ea$var$M.lanes |= m;
                $4eecb6e629e760ea$var$rh |= m;
            }
            l = l.next;
        }while (null !== l && l !== f);
        null === k ? g = d : k.next = h;
        $4eecb6e629e760ea$var$He(d, b.memoizedState) || ($4eecb6e629e760ea$var$dh = !0);
        b.memoizedState = d;
        b.baseState = g;
        b.baseQueue = k;
        c.lastRenderedState = d;
    }
    a = c.interleaved;
    if (null !== a) {
        e = a;
        do f = e.lane, $4eecb6e629e760ea$var$M.lanes |= f, $4eecb6e629e760ea$var$rh |= f, e = e.next;
        while (e !== a);
    } else null === e && (c.lanes = 0);
    return [
        b.memoizedState,
        c.dispatch
    ];
}
function $4eecb6e629e760ea$var$Xh(a) {
    var b = $4eecb6e629e760ea$var$Uh(), c = b.queue;
    if (null === c) throw Error($4eecb6e629e760ea$var$p(311));
    c.lastRenderedReducer = a;
    var d = c.dispatch, e = c.pending, f = b.memoizedState;
    if (null !== e) {
        c.pending = null;
        var g = e = e.next;
        do f = a(f, g.action), g = g.next;
        while (g !== e);
        $4eecb6e629e760ea$var$He(f, b.memoizedState) || ($4eecb6e629e760ea$var$dh = !0);
        b.memoizedState = f;
        null === b.baseQueue && (b.baseState = f);
        c.lastRenderedState = f;
    }
    return [
        f,
        d
    ];
}
function $4eecb6e629e760ea$var$Yh() {}
function $4eecb6e629e760ea$var$Zh(a, b) {
    var c = $4eecb6e629e760ea$var$M, d = $4eecb6e629e760ea$var$Uh(), e = b(), f = !$4eecb6e629e760ea$var$He(d.memoizedState, e);
    f && (d.memoizedState = e, $4eecb6e629e760ea$var$dh = !0);
    d = d.queue;
    $4eecb6e629e760ea$var$$h($4eecb6e629e760ea$var$ai.bind(null, c, d, a), [
        a
    ]);
    if (d.getSnapshot !== b || f || null !== $4eecb6e629e760ea$var$O && $4eecb6e629e760ea$var$O.memoizedState.tag & 1) {
        c.flags |= 2048;
        $4eecb6e629e760ea$var$bi(9, $4eecb6e629e760ea$var$ci.bind(null, c, d, e, b), void 0, null);
        if (null === $4eecb6e629e760ea$var$Q) throw Error($4eecb6e629e760ea$var$p(349));
        0 !== ($4eecb6e629e760ea$var$Hh & 30) || $4eecb6e629e760ea$var$di(c, b, e);
    }
    return e;
}
function $4eecb6e629e760ea$var$di(a, b, c) {
    a.flags |= 16384;
    a = {
        getSnapshot: b,
        value: c
    };
    b = $4eecb6e629e760ea$var$M.updateQueue;
    null === b ? (b = {
        lastEffect: null,
        stores: null
    }, $4eecb6e629e760ea$var$M.updateQueue = b, b.stores = [
        a
    ]) : (c = b.stores, null === c ? b.stores = [
        a
    ] : c.push(a));
}
function $4eecb6e629e760ea$var$ci(a, b, c, d) {
    b.value = c;
    b.getSnapshot = d;
    $4eecb6e629e760ea$var$ei(b) && $4eecb6e629e760ea$var$fi(a);
}
function $4eecb6e629e760ea$var$ai(a, b, c) {
    return c(function() {
        $4eecb6e629e760ea$var$ei(b) && $4eecb6e629e760ea$var$fi(a);
    });
}
function $4eecb6e629e760ea$var$ei(a) {
    var b = a.getSnapshot;
    a = a.value;
    try {
        var c = b();
        return !$4eecb6e629e760ea$var$He(a, c);
    } catch (d) {
        return !0;
    }
}
function $4eecb6e629e760ea$var$fi(a) {
    var b = $4eecb6e629e760ea$var$ih(a, 1);
    null !== b && $4eecb6e629e760ea$var$gi(b, a, 1, -1);
}
function $4eecb6e629e760ea$var$hi(a) {
    var b = $4eecb6e629e760ea$var$Th();
    "function" === typeof a && (a = a());
    b.memoizedState = b.baseState = a;
    a = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $4eecb6e629e760ea$var$Vh,
        lastRenderedState: a
    };
    b.queue = a;
    a = a.dispatch = $4eecb6e629e760ea$var$ii.bind(null, $4eecb6e629e760ea$var$M, a);
    return [
        b.memoizedState,
        a
    ];
}
function $4eecb6e629e760ea$var$bi(a, b, c, d) {
    a = {
        tag: a,
        create: b,
        destroy: c,
        deps: d,
        next: null
    };
    b = $4eecb6e629e760ea$var$M.updateQueue;
    null === b ? (b = {
        lastEffect: null,
        stores: null
    }, $4eecb6e629e760ea$var$M.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
    return a;
}
function $4eecb6e629e760ea$var$ji() {
    return $4eecb6e629e760ea$var$Uh().memoizedState;
}
function $4eecb6e629e760ea$var$ki(a, b, c, d) {
    var e = $4eecb6e629e760ea$var$Th();
    $4eecb6e629e760ea$var$M.flags |= a;
    e.memoizedState = $4eecb6e629e760ea$var$bi(1 | b, c, void 0, void 0 === d ? null : d);
}
function $4eecb6e629e760ea$var$li(a, b, c, d) {
    var e = $4eecb6e629e760ea$var$Uh();
    d = void 0 === d ? null : d;
    var f = void 0;
    if (null !== $4eecb6e629e760ea$var$N) {
        var g = $4eecb6e629e760ea$var$N.memoizedState;
        f = g.destroy;
        if (null !== d && $4eecb6e629e760ea$var$Mh(d, g.deps)) {
            e.memoizedState = $4eecb6e629e760ea$var$bi(b, c, f, d);
            return;
        }
    }
    $4eecb6e629e760ea$var$M.flags |= a;
    e.memoizedState = $4eecb6e629e760ea$var$bi(1 | b, c, f, d);
}
function $4eecb6e629e760ea$var$mi(a, b) {
    return $4eecb6e629e760ea$var$ki(8390656, 8, a, b);
}
function $4eecb6e629e760ea$var$$h(a, b) {
    return $4eecb6e629e760ea$var$li(2048, 8, a, b);
}
function $4eecb6e629e760ea$var$ni(a, b) {
    return $4eecb6e629e760ea$var$li(4, 2, a, b);
}
function $4eecb6e629e760ea$var$oi(a, b) {
    return $4eecb6e629e760ea$var$li(4, 4, a, b);
}
function $4eecb6e629e760ea$var$pi(a, b) {
    if ("function" === typeof b) return a = a(), b(a), function() {
        b(null);
    };
    if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
        b.current = null;
    };
}
function $4eecb6e629e760ea$var$qi(a, b, c) {
    c = null !== c && void 0 !== c ? c.concat([
        a
    ]) : null;
    return $4eecb6e629e760ea$var$li(4, 4, $4eecb6e629e760ea$var$pi.bind(null, b, a), c);
}
function $4eecb6e629e760ea$var$ri() {}
function $4eecb6e629e760ea$var$si(a, b) {
    var c = $4eecb6e629e760ea$var$Uh();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && $4eecb6e629e760ea$var$Mh(b, d[1])) return d[0];
    c.memoizedState = [
        a,
        b
    ];
    return a;
}
function $4eecb6e629e760ea$var$ti(a, b) {
    var c = $4eecb6e629e760ea$var$Uh();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && $4eecb6e629e760ea$var$Mh(b, d[1])) return d[0];
    a = a();
    c.memoizedState = [
        a,
        b
    ];
    return a;
}
function $4eecb6e629e760ea$var$ui(a, b, c) {
    if (0 === ($4eecb6e629e760ea$var$Hh & 21)) return a.baseState && (a.baseState = !1, $4eecb6e629e760ea$var$dh = !0), a.memoizedState = c;
    $4eecb6e629e760ea$var$He(c, b) || (c = $4eecb6e629e760ea$var$yc(), $4eecb6e629e760ea$var$M.lanes |= c, $4eecb6e629e760ea$var$rh |= c, a.baseState = !0);
    return b;
}
function $4eecb6e629e760ea$var$vi(a, b) {
    var c = $4eecb6e629e760ea$var$C;
    $4eecb6e629e760ea$var$C = 0 !== c && 4 > c ? c : 4;
    a(!0);
    var d = $4eecb6e629e760ea$var$Gh.transition;
    $4eecb6e629e760ea$var$Gh.transition = {};
    try {
        a(!1), b();
    } finally{
        $4eecb6e629e760ea$var$C = c, $4eecb6e629e760ea$var$Gh.transition = d;
    }
}
function $4eecb6e629e760ea$var$wi() {
    return $4eecb6e629e760ea$var$Uh().memoizedState;
}
function $4eecb6e629e760ea$var$xi(a, b, c) {
    var d = $4eecb6e629e760ea$var$yi(a);
    c = {
        lane: d,
        action: c,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if ($4eecb6e629e760ea$var$zi(a)) $4eecb6e629e760ea$var$Ai(b, c);
    else if (c = $4eecb6e629e760ea$var$hh(a, b, c, d), null !== c) {
        var e = $4eecb6e629e760ea$var$R();
        $4eecb6e629e760ea$var$gi(c, a, d, e);
        $4eecb6e629e760ea$var$Bi(c, b, d);
    }
}
function $4eecb6e629e760ea$var$ii(a, b, c) {
    var d = $4eecb6e629e760ea$var$yi(a), e = {
        lane: d,
        action: c,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if ($4eecb6e629e760ea$var$zi(a)) $4eecb6e629e760ea$var$Ai(b, e);
    else {
        var f = a.alternate;
        if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, null !== f)) try {
            var g = b.lastRenderedState, h = f(g, c);
            e.hasEagerState = !0;
            e.eagerState = h;
            if ($4eecb6e629e760ea$var$He(h, g)) {
                var k = b.interleaved;
                null === k ? (e.next = e, $4eecb6e629e760ea$var$gh(b)) : (e.next = k.next, k.next = e);
                b.interleaved = e;
                return;
            }
        } catch (l) {} finally{}
        c = $4eecb6e629e760ea$var$hh(a, b, e, d);
        null !== c && (e = $4eecb6e629e760ea$var$R(), $4eecb6e629e760ea$var$gi(c, a, d, e), $4eecb6e629e760ea$var$Bi(c, b, d));
    }
}
function $4eecb6e629e760ea$var$zi(a) {
    var b = a.alternate;
    return a === $4eecb6e629e760ea$var$M || null !== b && b === $4eecb6e629e760ea$var$M;
}
function $4eecb6e629e760ea$var$Ai(a, b) {
    $4eecb6e629e760ea$var$Jh = $4eecb6e629e760ea$var$Ih = !0;
    var c = a.pending;
    null === c ? b.next = b : (b.next = c.next, c.next = b);
    a.pending = b;
}
function $4eecb6e629e760ea$var$Bi(a, b, c) {
    if (0 !== (c & 4194240)) {
        var d = b.lanes;
        d &= a.pendingLanes;
        c |= d;
        b.lanes = c;
        $4eecb6e629e760ea$var$Cc(a, c);
    }
}
var $4eecb6e629e760ea$var$Rh = {
    readContext: $4eecb6e629e760ea$var$eh,
    useCallback: $4eecb6e629e760ea$var$P,
    useContext: $4eecb6e629e760ea$var$P,
    useEffect: $4eecb6e629e760ea$var$P,
    useImperativeHandle: $4eecb6e629e760ea$var$P,
    useInsertionEffect: $4eecb6e629e760ea$var$P,
    useLayoutEffect: $4eecb6e629e760ea$var$P,
    useMemo: $4eecb6e629e760ea$var$P,
    useReducer: $4eecb6e629e760ea$var$P,
    useRef: $4eecb6e629e760ea$var$P,
    useState: $4eecb6e629e760ea$var$P,
    useDebugValue: $4eecb6e629e760ea$var$P,
    useDeferredValue: $4eecb6e629e760ea$var$P,
    useTransition: $4eecb6e629e760ea$var$P,
    useMutableSource: $4eecb6e629e760ea$var$P,
    useSyncExternalStore: $4eecb6e629e760ea$var$P,
    useId: $4eecb6e629e760ea$var$P,
    unstable_isNewReconciler: !1
}, $4eecb6e629e760ea$var$Oh = {
    readContext: $4eecb6e629e760ea$var$eh,
    useCallback: function(a, b) {
        $4eecb6e629e760ea$var$Th().memoizedState = [
            a,
            void 0 === b ? null : b
        ];
        return a;
    },
    useContext: $4eecb6e629e760ea$var$eh,
    useEffect: $4eecb6e629e760ea$var$mi,
    useImperativeHandle: function(a, b, c) {
        c = null !== c && void 0 !== c ? c.concat([
            a
        ]) : null;
        return $4eecb6e629e760ea$var$ki(4194308, 4, $4eecb6e629e760ea$var$pi.bind(null, b, a), c);
    },
    useLayoutEffect: function(a, b) {
        return $4eecb6e629e760ea$var$ki(4194308, 4, a, b);
    },
    useInsertionEffect: function(a, b) {
        return $4eecb6e629e760ea$var$ki(4, 2, a, b);
    },
    useMemo: function(a, b) {
        var c = $4eecb6e629e760ea$var$Th();
        b = void 0 === b ? null : b;
        a = a();
        c.memoizedState = [
            a,
            b
        ];
        return a;
    },
    useReducer: function(a, b, c) {
        var d = $4eecb6e629e760ea$var$Th();
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
        a = a.dispatch = $4eecb6e629e760ea$var$xi.bind(null, $4eecb6e629e760ea$var$M, a);
        return [
            d.memoizedState,
            a
        ];
    },
    useRef: function(a) {
        var b = $4eecb6e629e760ea$var$Th();
        a = {
            current: a
        };
        return b.memoizedState = a;
    },
    useState: $4eecb6e629e760ea$var$hi,
    useDebugValue: $4eecb6e629e760ea$var$ri,
    useDeferredValue: function(a) {
        return $4eecb6e629e760ea$var$Th().memoizedState = a;
    },
    useTransition: function() {
        var a = $4eecb6e629e760ea$var$hi(!1), b = a[0];
        a = $4eecb6e629e760ea$var$vi.bind(null, a[1]);
        $4eecb6e629e760ea$var$Th().memoizedState = a;
        return [
            b,
            a
        ];
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(a, b, c) {
        var d = $4eecb6e629e760ea$var$M, e = $4eecb6e629e760ea$var$Th();
        if ($4eecb6e629e760ea$var$I) {
            if (void 0 === c) throw Error($4eecb6e629e760ea$var$p(407));
            c = c();
        } else {
            c = b();
            if (null === $4eecb6e629e760ea$var$Q) throw Error($4eecb6e629e760ea$var$p(349));
            0 !== ($4eecb6e629e760ea$var$Hh & 30) || $4eecb6e629e760ea$var$di(d, b, c);
        }
        e.memoizedState = c;
        var f = {
            value: c,
            getSnapshot: b
        };
        e.queue = f;
        $4eecb6e629e760ea$var$mi($4eecb6e629e760ea$var$ai.bind(null, d, f, a), [
            a
        ]);
        d.flags |= 2048;
        $4eecb6e629e760ea$var$bi(9, $4eecb6e629e760ea$var$ci.bind(null, d, f, c, b), void 0, null);
        return c;
    },
    useId: function() {
        var a = $4eecb6e629e760ea$var$Th(), b = $4eecb6e629e760ea$var$Q.identifierPrefix;
        if ($4eecb6e629e760ea$var$I) {
            var c = $4eecb6e629e760ea$var$sg;
            var d = $4eecb6e629e760ea$var$rg;
            c = (d & ~(1 << 32 - $4eecb6e629e760ea$var$oc(d) - 1)).toString(32) + c;
            b = ":" + b + "R" + c;
            c = $4eecb6e629e760ea$var$Kh++;
            0 < c && (b += "H" + c.toString(32));
            b += ":";
        } else c = $4eecb6e629e760ea$var$Lh++, b = ":" + b + "r" + c.toString(32) + ":";
        return a.memoizedState = b;
    },
    unstable_isNewReconciler: !1
}, $4eecb6e629e760ea$var$Ph = {
    readContext: $4eecb6e629e760ea$var$eh,
    useCallback: $4eecb6e629e760ea$var$si,
    useContext: $4eecb6e629e760ea$var$eh,
    useEffect: $4eecb6e629e760ea$var$$h,
    useImperativeHandle: $4eecb6e629e760ea$var$qi,
    useInsertionEffect: $4eecb6e629e760ea$var$ni,
    useLayoutEffect: $4eecb6e629e760ea$var$oi,
    useMemo: $4eecb6e629e760ea$var$ti,
    useReducer: $4eecb6e629e760ea$var$Wh,
    useRef: $4eecb6e629e760ea$var$ji,
    useState: function() {
        return $4eecb6e629e760ea$var$Wh($4eecb6e629e760ea$var$Vh);
    },
    useDebugValue: $4eecb6e629e760ea$var$ri,
    useDeferredValue: function(a) {
        var b = $4eecb6e629e760ea$var$Uh();
        return $4eecb6e629e760ea$var$ui(b, $4eecb6e629e760ea$var$N.memoizedState, a);
    },
    useTransition: function() {
        var a = $4eecb6e629e760ea$var$Wh($4eecb6e629e760ea$var$Vh)[0], b = $4eecb6e629e760ea$var$Uh().memoizedState;
        return [
            a,
            b
        ];
    },
    useMutableSource: $4eecb6e629e760ea$var$Yh,
    useSyncExternalStore: $4eecb6e629e760ea$var$Zh,
    useId: $4eecb6e629e760ea$var$wi,
    unstable_isNewReconciler: !1
}, $4eecb6e629e760ea$var$Qh = {
    readContext: $4eecb6e629e760ea$var$eh,
    useCallback: $4eecb6e629e760ea$var$si,
    useContext: $4eecb6e629e760ea$var$eh,
    useEffect: $4eecb6e629e760ea$var$$h,
    useImperativeHandle: $4eecb6e629e760ea$var$qi,
    useInsertionEffect: $4eecb6e629e760ea$var$ni,
    useLayoutEffect: $4eecb6e629e760ea$var$oi,
    useMemo: $4eecb6e629e760ea$var$ti,
    useReducer: $4eecb6e629e760ea$var$Xh,
    useRef: $4eecb6e629e760ea$var$ji,
    useState: function() {
        return $4eecb6e629e760ea$var$Xh($4eecb6e629e760ea$var$Vh);
    },
    useDebugValue: $4eecb6e629e760ea$var$ri,
    useDeferredValue: function(a) {
        var b = $4eecb6e629e760ea$var$Uh();
        return null === $4eecb6e629e760ea$var$N ? b.memoizedState = a : $4eecb6e629e760ea$var$ui(b, $4eecb6e629e760ea$var$N.memoizedState, a);
    },
    useTransition: function() {
        var a = $4eecb6e629e760ea$var$Xh($4eecb6e629e760ea$var$Vh)[0], b = $4eecb6e629e760ea$var$Uh().memoizedState;
        return [
            a,
            b
        ];
    },
    useMutableSource: $4eecb6e629e760ea$var$Yh,
    useSyncExternalStore: $4eecb6e629e760ea$var$Zh,
    useId: $4eecb6e629e760ea$var$wi,
    unstable_isNewReconciler: !1
};
function $4eecb6e629e760ea$var$Ci(a, b) {
    if (a && a.defaultProps) {
        b = $4eecb6e629e760ea$var$A({}, b);
        a = a.defaultProps;
        for(var c in a)void 0 === b[c] && (b[c] = a[c]);
        return b;
    }
    return b;
}
function $4eecb6e629e760ea$var$Di(a, b, c, d) {
    b = a.memoizedState;
    c = c(d, b);
    c = null === c || void 0 === c ? b : $4eecb6e629e760ea$var$A({}, b, c);
    a.memoizedState = c;
    0 === a.lanes && (a.updateQueue.baseState = c);
}
var $4eecb6e629e760ea$var$Ei = {
    isMounted: function(a) {
        return (a = a._reactInternals) ? $4eecb6e629e760ea$var$Vb(a) === a : !1;
    },
    enqueueSetState: function(a, b, c) {
        a = a._reactInternals;
        var d = $4eecb6e629e760ea$var$R(), e = $4eecb6e629e760ea$var$yi(a), f = $4eecb6e629e760ea$var$mh(d, e);
        f.payload = b;
        void 0 !== c && null !== c && (f.callback = c);
        b = $4eecb6e629e760ea$var$nh(a, f, e);
        null !== b && ($4eecb6e629e760ea$var$gi(b, a, e, d), $4eecb6e629e760ea$var$oh(b, a, e));
    },
    enqueueReplaceState: function(a, b, c) {
        a = a._reactInternals;
        var d = $4eecb6e629e760ea$var$R(), e = $4eecb6e629e760ea$var$yi(a), f = $4eecb6e629e760ea$var$mh(d, e);
        f.tag = 1;
        f.payload = b;
        void 0 !== c && null !== c && (f.callback = c);
        b = $4eecb6e629e760ea$var$nh(a, f, e);
        null !== b && ($4eecb6e629e760ea$var$gi(b, a, e, d), $4eecb6e629e760ea$var$oh(b, a, e));
    },
    enqueueForceUpdate: function(a, b) {
        a = a._reactInternals;
        var c = $4eecb6e629e760ea$var$R(), d = $4eecb6e629e760ea$var$yi(a), e = $4eecb6e629e760ea$var$mh(c, d);
        e.tag = 2;
        void 0 !== b && null !== b && (e.callback = b);
        b = $4eecb6e629e760ea$var$nh(a, e, d);
        null !== b && ($4eecb6e629e760ea$var$gi(b, a, d, c), $4eecb6e629e760ea$var$oh(b, a, d));
    }
};
function $4eecb6e629e760ea$var$Fi(a, b, c, d, e, f, g) {
    a = a.stateNode;
    return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !$4eecb6e629e760ea$var$Ie(c, d) || !$4eecb6e629e760ea$var$Ie(e, f) : !0;
}
function $4eecb6e629e760ea$var$Gi(a, b, c) {
    var d = !1, e = $4eecb6e629e760ea$var$Vf;
    var f = b.contextType;
    "object" === typeof f && null !== f ? f = $4eecb6e629e760ea$var$eh(f) : (e = $4eecb6e629e760ea$var$Zf(b) ? $4eecb6e629e760ea$var$Xf : $4eecb6e629e760ea$var$H.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? $4eecb6e629e760ea$var$Yf(a, e) : $4eecb6e629e760ea$var$Vf);
    b = new b(c, f);
    a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
    b.updater = $4eecb6e629e760ea$var$Ei;
    a.stateNode = b;
    b._reactInternals = a;
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
    return b;
}
function $4eecb6e629e760ea$var$Hi(a, b, c, d) {
    a = b.state;
    "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
    "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
    b.state !== a && $4eecb6e629e760ea$var$Ei.enqueueReplaceState(b, b.state, null);
}
function $4eecb6e629e760ea$var$Ii(a, b, c, d) {
    var e = a.stateNode;
    e.props = c;
    e.state = a.memoizedState;
    e.refs = {};
    $4eecb6e629e760ea$var$kh(a);
    var f = b.contextType;
    "object" === typeof f && null !== f ? e.context = $4eecb6e629e760ea$var$eh(f) : (f = $4eecb6e629e760ea$var$Zf(b) ? $4eecb6e629e760ea$var$Xf : $4eecb6e629e760ea$var$H.current, e.context = $4eecb6e629e760ea$var$Yf(a, f));
    e.state = a.memoizedState;
    f = b.getDerivedStateFromProps;
    "function" === typeof f && ($4eecb6e629e760ea$var$Di(a, b, f, c), e.state = a.memoizedState);
    "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && $4eecb6e629e760ea$var$Ei.enqueueReplaceState(e, e.state, null), $4eecb6e629e760ea$var$qh(a, c, e, d), e.state = a.memoizedState);
    "function" === typeof e.componentDidMount && (a.flags |= 4194308);
}
function $4eecb6e629e760ea$var$Ji(a, b) {
    try {
        var c = "", d = b;
        do c += $4eecb6e629e760ea$var$Pa(d), d = d.return;
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
function $4eecb6e629e760ea$var$Ki(a, b, c) {
    return {
        value: a,
        source: null,
        stack: null != c ? c : null,
        digest: null != b ? b : null
    };
}
function $4eecb6e629e760ea$var$Li(a, b) {
    try {
        console.error(b.value);
    } catch (c) {
        setTimeout(function() {
            throw c;
        });
    }
}
var $4eecb6e629e760ea$var$Mi = "function" === typeof WeakMap ? WeakMap : Map;
function $4eecb6e629e760ea$var$Ni(a, b, c) {
    c = $4eecb6e629e760ea$var$mh(-1, c);
    c.tag = 3;
    c.payload = {
        element: null
    };
    var d = b.value;
    c.callback = function() {
        $4eecb6e629e760ea$var$Oi || ($4eecb6e629e760ea$var$Oi = !0, $4eecb6e629e760ea$var$Pi = d);
        $4eecb6e629e760ea$var$Li(a, b);
    };
    return c;
}
function $4eecb6e629e760ea$var$Qi(a, b, c) {
    c = $4eecb6e629e760ea$var$mh(-1, c);
    c.tag = 3;
    var d = a.type.getDerivedStateFromError;
    if ("function" === typeof d) {
        var e = b.value;
        c.payload = function() {
            return d(e);
        };
        c.callback = function() {
            $4eecb6e629e760ea$var$Li(a, b);
        };
    }
    var f = a.stateNode;
    null !== f && "function" === typeof f.componentDidCatch && (c.callback = function() {
        $4eecb6e629e760ea$var$Li(a, b);
        "function" !== typeof d && (null === $4eecb6e629e760ea$var$Ri ? $4eecb6e629e760ea$var$Ri = new Set([
            this
        ]) : $4eecb6e629e760ea$var$Ri.add(this));
        var c = b.stack;
        this.componentDidCatch(b.value, {
            componentStack: null !== c ? c : ""
        });
    });
    return c;
}
function $4eecb6e629e760ea$var$Si(a, b, c) {
    var d = a.pingCache;
    if (null === d) {
        d = a.pingCache = new $4eecb6e629e760ea$var$Mi;
        var e = new Set;
        d.set(b, e);
    } else e = d.get(b), void 0 === e && (e = new Set, d.set(b, e));
    e.has(c) || (e.add(c), a = $4eecb6e629e760ea$var$Ti.bind(null, a, b, c), b.then(a, a));
}
function $4eecb6e629e760ea$var$Ui(a) {
    do {
        var b;
        if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? !0 : !1 : !0;
        if (b) return a;
        a = a.return;
    }while (null !== a);
    return null;
}
function $4eecb6e629e760ea$var$Vi(a, b, c, d, e) {
    if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = $4eecb6e629e760ea$var$mh(-1, 1), b.tag = 2, $4eecb6e629e760ea$var$nh(c, b, 1))), c.lanes |= 1), a;
    a.flags |= 65536;
    a.lanes = e;
    return a;
}
var $4eecb6e629e760ea$var$Wi = $4eecb6e629e760ea$var$ua.ReactCurrentOwner, $4eecb6e629e760ea$var$dh = !1;
function $4eecb6e629e760ea$var$Xi(a, b, c, d) {
    b.child = null === a ? $4eecb6e629e760ea$var$Vg(b, null, c, d) : $4eecb6e629e760ea$var$Ug(b, a.child, c, d);
}
function $4eecb6e629e760ea$var$Yi(a, b, c, d, e) {
    c = c.render;
    var f = b.ref;
    $4eecb6e629e760ea$var$ch(b, e);
    d = $4eecb6e629e760ea$var$Nh(a, b, c, d, f, e);
    c = $4eecb6e629e760ea$var$Sh();
    if (null !== a && !$4eecb6e629e760ea$var$dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $4eecb6e629e760ea$var$Zi(a, b, e);
    $4eecb6e629e760ea$var$I && c && $4eecb6e629e760ea$var$vg(b);
    b.flags |= 1;
    $4eecb6e629e760ea$var$Xi(a, b, d, e);
    return b.child;
}
function $4eecb6e629e760ea$var$$i(a, b, c, d, e) {
    if (null === a) {
        var f = c.type;
        if ("function" === typeof f && !$4eecb6e629e760ea$var$aj(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f, $4eecb6e629e760ea$var$bj(a, b, f, d, e);
        a = $4eecb6e629e760ea$var$Rg(c.type, null, d, b, b.mode, e);
        a.ref = b.ref;
        a.return = b;
        return b.child = a;
    }
    f = a.child;
    if (0 === (a.lanes & e)) {
        var g = f.memoizedProps;
        c = c.compare;
        c = null !== c ? c : $4eecb6e629e760ea$var$Ie;
        if (c(g, d) && a.ref === b.ref) return $4eecb6e629e760ea$var$Zi(a, b, e);
    }
    b.flags |= 1;
    a = $4eecb6e629e760ea$var$Pg(f, d);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
}
function $4eecb6e629e760ea$var$bj(a, b, c, d, e) {
    if (null !== a) {
        var f = a.memoizedProps;
        if ($4eecb6e629e760ea$var$Ie(f, d) && a.ref === b.ref) {
            if ($4eecb6e629e760ea$var$dh = !1, b.pendingProps = d = f, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && ($4eecb6e629e760ea$var$dh = !0);
            else return b.lanes = a.lanes, $4eecb6e629e760ea$var$Zi(a, b, e);
        }
    }
    return $4eecb6e629e760ea$var$cj(a, b, c, d, e);
}
function $4eecb6e629e760ea$var$dj(a, b, c) {
    var d = b.pendingProps, e = d.children, f = null !== a ? a.memoizedState : null;
    if ("hidden" === d.mode) {
        if (0 === (b.mode & 1)) b.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, $4eecb6e629e760ea$var$G($4eecb6e629e760ea$var$ej, $4eecb6e629e760ea$var$fj), $4eecb6e629e760ea$var$fj |= c;
        else {
            if (0 === (c & 1073741824)) return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {
                baseLanes: a,
                cachePool: null,
                transitions: null
            }, b.updateQueue = null, $4eecb6e629e760ea$var$G($4eecb6e629e760ea$var$ej, $4eecb6e629e760ea$var$fj), $4eecb6e629e760ea$var$fj |= a, null;
            b.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            };
            d = null !== f ? f.baseLanes : c;
            $4eecb6e629e760ea$var$G($4eecb6e629e760ea$var$ej, $4eecb6e629e760ea$var$fj);
            $4eecb6e629e760ea$var$fj |= d;
        }
    } else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, $4eecb6e629e760ea$var$G($4eecb6e629e760ea$var$ej, $4eecb6e629e760ea$var$fj), $4eecb6e629e760ea$var$fj |= d;
    $4eecb6e629e760ea$var$Xi(a, b, e, c);
    return b.child;
}
function $4eecb6e629e760ea$var$gj(a, b) {
    var c = b.ref;
    if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
}
function $4eecb6e629e760ea$var$cj(a, b, c, d, e) {
    var f = $4eecb6e629e760ea$var$Zf(c) ? $4eecb6e629e760ea$var$Xf : $4eecb6e629e760ea$var$H.current;
    f = $4eecb6e629e760ea$var$Yf(b, f);
    $4eecb6e629e760ea$var$ch(b, e);
    c = $4eecb6e629e760ea$var$Nh(a, b, c, d, f, e);
    d = $4eecb6e629e760ea$var$Sh();
    if (null !== a && !$4eecb6e629e760ea$var$dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $4eecb6e629e760ea$var$Zi(a, b, e);
    $4eecb6e629e760ea$var$I && d && $4eecb6e629e760ea$var$vg(b);
    b.flags |= 1;
    $4eecb6e629e760ea$var$Xi(a, b, c, e);
    return b.child;
}
function $4eecb6e629e760ea$var$hj(a, b, c, d, e) {
    if ($4eecb6e629e760ea$var$Zf(c)) {
        var f = !0;
        $4eecb6e629e760ea$var$cg(b);
    } else f = !1;
    $4eecb6e629e760ea$var$ch(b, e);
    if (null === b.stateNode) $4eecb6e629e760ea$var$ij(a, b), $4eecb6e629e760ea$var$Gi(b, c, d), $4eecb6e629e760ea$var$Ii(b, c, d, e), d = !0;
    else if (null === a) {
        var g = b.stateNode, h = b.memoizedProps;
        g.props = h;
        var k = g.context, l = c.contextType;
        "object" === typeof l && null !== l ? l = $4eecb6e629e760ea$var$eh(l) : (l = $4eecb6e629e760ea$var$Zf(c) ? $4eecb6e629e760ea$var$Xf : $4eecb6e629e760ea$var$H.current, l = $4eecb6e629e760ea$var$Yf(b, l));
        var m = c.getDerivedStateFromProps, q = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
        q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && $4eecb6e629e760ea$var$Hi(b, g, d, l);
        $4eecb6e629e760ea$var$jh = !1;
        var r = b.memoizedState;
        g.state = r;
        $4eecb6e629e760ea$var$qh(b, d, g, e);
        k = b.memoizedState;
        h !== d || r !== k || $4eecb6e629e760ea$var$Wf.current || $4eecb6e629e760ea$var$jh ? ("function" === typeof m && ($4eecb6e629e760ea$var$Di(b, c, m, d), k = b.memoizedState), (h = $4eecb6e629e760ea$var$jh || $4eecb6e629e760ea$var$Fi(b, c, h, d, r, k, l)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = !1);
    } else {
        g = b.stateNode;
        $4eecb6e629e760ea$var$lh(a, b);
        h = b.memoizedProps;
        l = b.type === b.elementType ? h : $4eecb6e629e760ea$var$Ci(b.type, h);
        g.props = l;
        q = b.pendingProps;
        r = g.context;
        k = c.contextType;
        "object" === typeof k && null !== k ? k = $4eecb6e629e760ea$var$eh(k) : (k = $4eecb6e629e760ea$var$Zf(c) ? $4eecb6e629e760ea$var$Xf : $4eecb6e629e760ea$var$H.current, k = $4eecb6e629e760ea$var$Yf(b, k));
        var y = c.getDerivedStateFromProps;
        (m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q || r !== k) && $4eecb6e629e760ea$var$Hi(b, g, d, k);
        $4eecb6e629e760ea$var$jh = !1;
        r = b.memoizedState;
        g.state = r;
        $4eecb6e629e760ea$var$qh(b, d, g, e);
        var n = b.memoizedState;
        h !== q || r !== n || $4eecb6e629e760ea$var$Wf.current || $4eecb6e629e760ea$var$jh ? ("function" === typeof y && ($4eecb6e629e760ea$var$Di(b, c, y, d), n = b.memoizedState), (l = $4eecb6e629e760ea$var$jh || $4eecb6e629e760ea$var$Fi(b, c, l, d, r, n, k) || !1) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), d = !1);
    }
    return $4eecb6e629e760ea$var$jj(a, b, c, d, f, e);
}
function $4eecb6e629e760ea$var$jj(a, b, c, d, e, f) {
    $4eecb6e629e760ea$var$gj(a, b);
    var g = 0 !== (b.flags & 128);
    if (!d && !g) return e && $4eecb6e629e760ea$var$dg(b, c, !1), $4eecb6e629e760ea$var$Zi(a, b, f);
    d = b.stateNode;
    $4eecb6e629e760ea$var$Wi.current = b;
    var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
    b.flags |= 1;
    null !== a && g ? (b.child = $4eecb6e629e760ea$var$Ug(b, a.child, null, f), b.child = $4eecb6e629e760ea$var$Ug(b, null, h, f)) : $4eecb6e629e760ea$var$Xi(a, b, h, f);
    b.memoizedState = d.state;
    e && $4eecb6e629e760ea$var$dg(b, c, !0);
    return b.child;
}
function $4eecb6e629e760ea$var$kj(a) {
    var b = a.stateNode;
    b.pendingContext ? $4eecb6e629e760ea$var$ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && $4eecb6e629e760ea$var$ag(a, b.context, !1);
    $4eecb6e629e760ea$var$yh(a, b.containerInfo);
}
function $4eecb6e629e760ea$var$lj(a, b, c, d, e) {
    $4eecb6e629e760ea$var$Ig();
    $4eecb6e629e760ea$var$Jg(e);
    b.flags |= 256;
    $4eecb6e629e760ea$var$Xi(a, b, c, d);
    return b.child;
}
var $4eecb6e629e760ea$var$mj = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function $4eecb6e629e760ea$var$nj(a) {
    return {
        baseLanes: a,
        cachePool: null,
        transitions: null
    };
}
function $4eecb6e629e760ea$var$oj(a, b, c) {
    var d = b.pendingProps, e = $4eecb6e629e760ea$var$L.current, f = !1, g = 0 !== (b.flags & 128), h;
    (h = g) || (h = null !== a && null === a.memoizedState ? !1 : 0 !== (e & 2));
    if (h) f = !0, b.flags &= -129;
    else if (null === a || null !== a.memoizedState) e |= 1;
    $4eecb6e629e760ea$var$G($4eecb6e629e760ea$var$L, e & 1);
    if (null === a) {
        $4eecb6e629e760ea$var$Eg(b);
        a = b.memoizedState;
        if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
        g = d.children;
        a = d.fallback;
        return f ? (d = b.mode, f = b.child, g = {
            mode: "hidden",
            children: g
        }, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = $4eecb6e629e760ea$var$pj(g, d, 0, null), a = $4eecb6e629e760ea$var$Tg(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = $4eecb6e629e760ea$var$nj(c), b.memoizedState = $4eecb6e629e760ea$var$mj, a) : $4eecb6e629e760ea$var$qj(b, g);
    }
    e = a.memoizedState;
    if (null !== e && (h = e.dehydrated, null !== h)) return $4eecb6e629e760ea$var$rj(a, b, g, d, h, e, c);
    if (f) {
        f = d.fallback;
        g = b.mode;
        e = a.child;
        h = e.sibling;
        var k = {
            mode: "hidden",
            children: d.children
        };
        0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, b.deletions = null) : (d = $4eecb6e629e760ea$var$Pg(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
        null !== h ? f = $4eecb6e629e760ea$var$Pg(h, f) : (f = $4eecb6e629e760ea$var$Tg(f, g, c, null), f.flags |= 2);
        f.return = b;
        d.return = b;
        d.sibling = f;
        b.child = d;
        d = f;
        f = b.child;
        g = a.child.memoizedState;
        g = null === g ? $4eecb6e629e760ea$var$nj(c) : {
            baseLanes: g.baseLanes | c,
            cachePool: null,
            transitions: g.transitions
        };
        f.memoizedState = g;
        f.childLanes = a.childLanes & ~c;
        b.memoizedState = $4eecb6e629e760ea$var$mj;
        return d;
    }
    f = a.child;
    a = f.sibling;
    d = $4eecb6e629e760ea$var$Pg(f, {
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
function $4eecb6e629e760ea$var$qj(a, b) {
    b = $4eecb6e629e760ea$var$pj({
        mode: "visible",
        children: b
    }, a.mode, 0, null);
    b.return = a;
    return a.child = b;
}
function $4eecb6e629e760ea$var$sj(a, b, c, d) {
    null !== d && $4eecb6e629e760ea$var$Jg(d);
    $4eecb6e629e760ea$var$Ug(b, a.child, null, c);
    a = $4eecb6e629e760ea$var$qj(b, b.pendingProps.children);
    a.flags |= 2;
    b.memoizedState = null;
    return a;
}
function $4eecb6e629e760ea$var$rj(a, b, c, d, e, f, g) {
    if (c) {
        if (b.flags & 256) return b.flags &= -257, d = $4eecb6e629e760ea$var$Ki(Error($4eecb6e629e760ea$var$p(422))), $4eecb6e629e760ea$var$sj(a, b, g, d);
        if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
        f = d.fallback;
        e = b.mode;
        d = $4eecb6e629e760ea$var$pj({
            mode: "visible",
            children: d.children
        }, e, 0, null);
        f = $4eecb6e629e760ea$var$Tg(f, e, g, null);
        f.flags |= 2;
        d.return = b;
        f.return = b;
        d.sibling = f;
        b.child = d;
        0 !== (b.mode & 1) && $4eecb6e629e760ea$var$Ug(b, a.child, null, g);
        b.child.memoizedState = $4eecb6e629e760ea$var$nj(g);
        b.memoizedState = $4eecb6e629e760ea$var$mj;
        return f;
    }
    if (0 === (b.mode & 1)) return $4eecb6e629e760ea$var$sj(a, b, g, null);
    if ("$!" === e.data) {
        d = e.nextSibling && e.nextSibling.dataset;
        if (d) var h = d.dgst;
        d = h;
        f = Error($4eecb6e629e760ea$var$p(419));
        d = $4eecb6e629e760ea$var$Ki(f, d, void 0);
        return $4eecb6e629e760ea$var$sj(a, b, g, d);
    }
    h = 0 !== (g & a.childLanes);
    if ($4eecb6e629e760ea$var$dh || h) {
        d = $4eecb6e629e760ea$var$Q;
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
            0 !== e && e !== f.retryLane && (f.retryLane = e, $4eecb6e629e760ea$var$ih(a, e), $4eecb6e629e760ea$var$gi(d, a, e, -1));
        }
        $4eecb6e629e760ea$var$tj();
        d = $4eecb6e629e760ea$var$Ki(Error($4eecb6e629e760ea$var$p(421)));
        return $4eecb6e629e760ea$var$sj(a, b, g, d);
    }
    if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = $4eecb6e629e760ea$var$uj.bind(null, a), e._reactRetry = b, null;
    a = f.treeContext;
    $4eecb6e629e760ea$var$yg = $4eecb6e629e760ea$var$Lf(e.nextSibling);
    $4eecb6e629e760ea$var$xg = b;
    $4eecb6e629e760ea$var$I = !0;
    $4eecb6e629e760ea$var$zg = null;
    null !== a && ($4eecb6e629e760ea$var$og[$4eecb6e629e760ea$var$pg++] = $4eecb6e629e760ea$var$rg, $4eecb6e629e760ea$var$og[$4eecb6e629e760ea$var$pg++] = $4eecb6e629e760ea$var$sg, $4eecb6e629e760ea$var$og[$4eecb6e629e760ea$var$pg++] = $4eecb6e629e760ea$var$qg, $4eecb6e629e760ea$var$rg = a.id, $4eecb6e629e760ea$var$sg = a.overflow, $4eecb6e629e760ea$var$qg = b);
    b = $4eecb6e629e760ea$var$qj(b, d.children);
    b.flags |= 4096;
    return b;
}
function $4eecb6e629e760ea$var$vj(a, b, c) {
    a.lanes |= b;
    var d = a.alternate;
    null !== d && (d.lanes |= b);
    $4eecb6e629e760ea$var$bh(a.return, b, c);
}
function $4eecb6e629e760ea$var$wj(a, b, c, d, e) {
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
function $4eecb6e629e760ea$var$xj(a, b, c) {
    var d = b.pendingProps, e = d.revealOrder, f = d.tail;
    $4eecb6e629e760ea$var$Xi(a, b, d.children, c);
    d = $4eecb6e629e760ea$var$L.current;
    if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;
    else {
        if (null !== a && 0 !== (a.flags & 128)) a: for(a = b.child; null !== a;){
            if (13 === a.tag) null !== a.memoizedState && $4eecb6e629e760ea$var$vj(a, c, b);
            else if (19 === a.tag) $4eecb6e629e760ea$var$vj(a, c, b);
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
    $4eecb6e629e760ea$var$G($4eecb6e629e760ea$var$L, d);
    if (0 === (b.mode & 1)) b.memoizedState = null;
    else switch(e){
        case "forwards":
            c = b.child;
            for(e = null; null !== c;)a = c.alternate, null !== a && null === $4eecb6e629e760ea$var$Ch(a) && (e = c), c = c.sibling;
            c = e;
            null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
            $4eecb6e629e760ea$var$wj(b, !1, e, c, f);
            break;
        case "backwards":
            c = null;
            e = b.child;
            for(b.child = null; null !== e;){
                a = e.alternate;
                if (null !== a && null === $4eecb6e629e760ea$var$Ch(a)) {
                    b.child = e;
                    break;
                }
                a = e.sibling;
                e.sibling = c;
                c = e;
                e = a;
            }
            $4eecb6e629e760ea$var$wj(b, !0, c, null, f);
            break;
        case "together":
            $4eecb6e629e760ea$var$wj(b, !1, null, null, void 0);
            break;
        default:
            b.memoizedState = null;
    }
    return b.child;
}
function $4eecb6e629e760ea$var$ij(a, b) {
    0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
}
function $4eecb6e629e760ea$var$Zi(a, b, c) {
    null !== a && (b.dependencies = a.dependencies);
    $4eecb6e629e760ea$var$rh |= b.lanes;
    if (0 === (c & b.childLanes)) return null;
    if (null !== a && b.child !== a.child) throw Error($4eecb6e629e760ea$var$p(153));
    if (null !== b.child) {
        a = b.child;
        c = $4eecb6e629e760ea$var$Pg(a, a.pendingProps);
        b.child = c;
        for(c.return = b; null !== a.sibling;)a = a.sibling, c = c.sibling = $4eecb6e629e760ea$var$Pg(a, a.pendingProps), c.return = b;
        c.sibling = null;
    }
    return b.child;
}
function $4eecb6e629e760ea$var$yj(a, b, c) {
    switch(b.tag){
        case 3:
            $4eecb6e629e760ea$var$kj(b);
            $4eecb6e629e760ea$var$Ig();
            break;
        case 5:
            $4eecb6e629e760ea$var$Ah(b);
            break;
        case 1:
            $4eecb6e629e760ea$var$Zf(b.type) && $4eecb6e629e760ea$var$cg(b);
            break;
        case 4:
            $4eecb6e629e760ea$var$yh(b, b.stateNode.containerInfo);
            break;
        case 10:
            var d = b.type._context, e = b.memoizedProps.value;
            $4eecb6e629e760ea$var$G($4eecb6e629e760ea$var$Wg, d._currentValue);
            d._currentValue = e;
            break;
        case 13:
            d = b.memoizedState;
            if (null !== d) {
                if (null !== d.dehydrated) return $4eecb6e629e760ea$var$G($4eecb6e629e760ea$var$L, $4eecb6e629e760ea$var$L.current & 1), b.flags |= 128, null;
                if (0 !== (c & b.child.childLanes)) return $4eecb6e629e760ea$var$oj(a, b, c);
                $4eecb6e629e760ea$var$G($4eecb6e629e760ea$var$L, $4eecb6e629e760ea$var$L.current & 1);
                a = $4eecb6e629e760ea$var$Zi(a, b, c);
                return null !== a ? a.sibling : null;
            }
            $4eecb6e629e760ea$var$G($4eecb6e629e760ea$var$L, $4eecb6e629e760ea$var$L.current & 1);
            break;
        case 19:
            d = 0 !== (c & b.childLanes);
            if (0 !== (a.flags & 128)) {
                if (d) return $4eecb6e629e760ea$var$xj(a, b, c);
                b.flags |= 128;
            }
            e = b.memoizedState;
            null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
            $4eecb6e629e760ea$var$G($4eecb6e629e760ea$var$L, $4eecb6e629e760ea$var$L.current);
            if (d) break;
            else return null;
        case 22:
        case 23:
            return b.lanes = 0, $4eecb6e629e760ea$var$dj(a, b, c);
    }
    return $4eecb6e629e760ea$var$Zi(a, b, c);
}
var $4eecb6e629e760ea$var$zj, $4eecb6e629e760ea$var$Aj, $4eecb6e629e760ea$var$Bj, $4eecb6e629e760ea$var$Cj;
$4eecb6e629e760ea$var$zj = function(a, b) {
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
$4eecb6e629e760ea$var$Aj = function() {};
$4eecb6e629e760ea$var$Bj = function(a, b, c, d) {
    var e = a.memoizedProps;
    if (e !== d) {
        a = b.stateNode;
        $4eecb6e629e760ea$var$xh($4eecb6e629e760ea$var$uh.current);
        var f = null;
        switch(c){
            case "input":
                e = $4eecb6e629e760ea$var$Ya(a, e);
                d = $4eecb6e629e760ea$var$Ya(a, d);
                f = [];
                break;
            case "select":
                e = $4eecb6e629e760ea$var$A({}, e, {
                    value: void 0
                });
                d = $4eecb6e629e760ea$var$A({}, d, {
                    value: void 0
                });
                f = [];
                break;
            case "textarea":
                e = $4eecb6e629e760ea$var$gb(a, e);
                d = $4eecb6e629e760ea$var$gb(a, d);
                f = [];
                break;
            default:
                "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = $4eecb6e629e760ea$var$Bf);
        }
        $4eecb6e629e760ea$var$ub(c, d);
        var g;
        c = null;
        for(l in e)if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) {
            if ("style" === l) {
                var h = e[l];
                for(g in h)h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
            } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && ($4eecb6e629e760ea$var$ea.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
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
                } else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && ($4eecb6e629e760ea$var$ea.hasOwnProperty(l) ? (null != k && "onScroll" === l && $4eecb6e629e760ea$var$D("scroll", a), f || h === k || (f = [])) : (f = f || []).push(l, k));
            }
        }
        c && (f = f || []).push("style", c);
        var l = f;
        if (b.updateQueue = l) b.flags |= 4;
    }
};
$4eecb6e629e760ea$var$Cj = function(a, b, c, d) {
    c !== d && (b.flags |= 4);
};
function $4eecb6e629e760ea$var$Dj(a, b) {
    if (!$4eecb6e629e760ea$var$I) switch(a.tailMode){
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
function $4eecb6e629e760ea$var$S(a) {
    var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
    if (b) for(var e = a.child; null !== e;)c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
    else for(e = a.child; null !== e;)c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
    a.subtreeFlags |= d;
    a.childLanes = c;
    return b;
}
function $4eecb6e629e760ea$var$Ej(a, b, c) {
    var d = b.pendingProps;
    $4eecb6e629e760ea$var$wg(b);
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
            return $4eecb6e629e760ea$var$S(b), null;
        case 1:
            return $4eecb6e629e760ea$var$Zf(b.type) && $4eecb6e629e760ea$var$$f(), $4eecb6e629e760ea$var$S(b), null;
        case 3:
            d = b.stateNode;
            $4eecb6e629e760ea$var$zh();
            $4eecb6e629e760ea$var$E($4eecb6e629e760ea$var$Wf);
            $4eecb6e629e760ea$var$E($4eecb6e629e760ea$var$H);
            $4eecb6e629e760ea$var$Eh();
            d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
            if (null === a || null === a.child) $4eecb6e629e760ea$var$Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== $4eecb6e629e760ea$var$zg && ($4eecb6e629e760ea$var$Fj($4eecb6e629e760ea$var$zg), $4eecb6e629e760ea$var$zg = null));
            $4eecb6e629e760ea$var$Aj(a, b);
            $4eecb6e629e760ea$var$S(b);
            return null;
        case 5:
            $4eecb6e629e760ea$var$Bh(b);
            var e = $4eecb6e629e760ea$var$xh($4eecb6e629e760ea$var$wh.current);
            c = b.type;
            if (null !== a && null != b.stateNode) $4eecb6e629e760ea$var$Bj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
            else {
                if (!d) {
                    if (null === b.stateNode) throw Error($4eecb6e629e760ea$var$p(166));
                    $4eecb6e629e760ea$var$S(b);
                    return null;
                }
                a = $4eecb6e629e760ea$var$xh($4eecb6e629e760ea$var$uh.current);
                if ($4eecb6e629e760ea$var$Gg(b)) {
                    d = b.stateNode;
                    c = b.type;
                    var f = b.memoizedProps;
                    d[$4eecb6e629e760ea$var$Of] = b;
                    d[$4eecb6e629e760ea$var$Pf] = f;
                    a = 0 !== (b.mode & 1);
                    switch(c){
                        case "dialog":
                            $4eecb6e629e760ea$var$D("cancel", d);
                            $4eecb6e629e760ea$var$D("close", d);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            $4eecb6e629e760ea$var$D("load", d);
                            break;
                        case "video":
                        case "audio":
                            for(e = 0; e < $4eecb6e629e760ea$var$lf.length; e++)$4eecb6e629e760ea$var$D($4eecb6e629e760ea$var$lf[e], d);
                            break;
                        case "source":
                            $4eecb6e629e760ea$var$D("error", d);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            $4eecb6e629e760ea$var$D("error", d);
                            $4eecb6e629e760ea$var$D("load", d);
                            break;
                        case "details":
                            $4eecb6e629e760ea$var$D("toggle", d);
                            break;
                        case "input":
                            $4eecb6e629e760ea$var$Za(d, f);
                            $4eecb6e629e760ea$var$D("invalid", d);
                            break;
                        case "select":
                            d._wrapperState = {
                                wasMultiple: !!f.multiple
                            };
                            $4eecb6e629e760ea$var$D("invalid", d);
                            break;
                        case "textarea":
                            $4eecb6e629e760ea$var$hb(d, f), $4eecb6e629e760ea$var$D("invalid", d);
                    }
                    $4eecb6e629e760ea$var$ub(c, f);
                    e = null;
                    for(var g in f)if (f.hasOwnProperty(g)) {
                        var h = f[g];
                        "children" === g ? "string" === typeof h ? d.textContent !== h && (!0 !== f.suppressHydrationWarning && $4eecb6e629e760ea$var$Af(d.textContent, h, a), e = [
                            "children",
                            h
                        ]) : "number" === typeof h && d.textContent !== "" + h && (!0 !== f.suppressHydrationWarning && $4eecb6e629e760ea$var$Af(d.textContent, h, a), e = [
                            "children",
                            "" + h
                        ]) : $4eecb6e629e760ea$var$ea.hasOwnProperty(g) && null != h && "onScroll" === g && $4eecb6e629e760ea$var$D("scroll", d);
                    }
                    switch(c){
                        case "input":
                            $4eecb6e629e760ea$var$Va(d);
                            $4eecb6e629e760ea$var$db(d, f, !0);
                            break;
                        case "textarea":
                            $4eecb6e629e760ea$var$Va(d);
                            $4eecb6e629e760ea$var$jb(d);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            "function" === typeof f.onClick && (d.onclick = $4eecb6e629e760ea$var$Bf);
                    }
                    d = e;
                    b.updateQueue = d;
                    null !== d && (b.flags |= 4);
                } else {
                    g = 9 === e.nodeType ? e : e.ownerDocument;
                    "http://www.w3.org/1999/xhtml" === a && (a = $4eecb6e629e760ea$var$kb(c));
                    "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script></script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, {
                        is: d.is
                    }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = !0 : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
                    a[$4eecb6e629e760ea$var$Of] = b;
                    a[$4eecb6e629e760ea$var$Pf] = d;
                    $4eecb6e629e760ea$var$zj(a, b, !1, !1);
                    b.stateNode = a;
                    a: {
                        g = $4eecb6e629e760ea$var$vb(c, d);
                        switch(c){
                            case "dialog":
                                $4eecb6e629e760ea$var$D("cancel", a);
                                $4eecb6e629e760ea$var$D("close", a);
                                e = d;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                $4eecb6e629e760ea$var$D("load", a);
                                e = d;
                                break;
                            case "video":
                            case "audio":
                                for(e = 0; e < $4eecb6e629e760ea$var$lf.length; e++)$4eecb6e629e760ea$var$D($4eecb6e629e760ea$var$lf[e], a);
                                e = d;
                                break;
                            case "source":
                                $4eecb6e629e760ea$var$D("error", a);
                                e = d;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                $4eecb6e629e760ea$var$D("error", a);
                                $4eecb6e629e760ea$var$D("load", a);
                                e = d;
                                break;
                            case "details":
                                $4eecb6e629e760ea$var$D("toggle", a);
                                e = d;
                                break;
                            case "input":
                                $4eecb6e629e760ea$var$Za(a, d);
                                e = $4eecb6e629e760ea$var$Ya(a, d);
                                $4eecb6e629e760ea$var$D("invalid", a);
                                break;
                            case "option":
                                e = d;
                                break;
                            case "select":
                                a._wrapperState = {
                                    wasMultiple: !!d.multiple
                                };
                                e = $4eecb6e629e760ea$var$A({}, d, {
                                    value: void 0
                                });
                                $4eecb6e629e760ea$var$D("invalid", a);
                                break;
                            case "textarea":
                                $4eecb6e629e760ea$var$hb(a, d);
                                e = $4eecb6e629e760ea$var$gb(a, d);
                                $4eecb6e629e760ea$var$D("invalid", a);
                                break;
                            default:
                                e = d;
                        }
                        $4eecb6e629e760ea$var$ub(c, e);
                        h = e;
                        for(f in h)if (h.hasOwnProperty(f)) {
                            var k = h[f];
                            "style" === f ? $4eecb6e629e760ea$var$sb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && $4eecb6e629e760ea$var$nb(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && $4eecb6e629e760ea$var$ob(a, k) : "number" === typeof k && $4eecb6e629e760ea$var$ob(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && ($4eecb6e629e760ea$var$ea.hasOwnProperty(f) ? null != k && "onScroll" === f && $4eecb6e629e760ea$var$D("scroll", a) : null != k && $4eecb6e629e760ea$var$ta(a, f, k, g));
                        }
                        switch(c){
                            case "input":
                                $4eecb6e629e760ea$var$Va(a);
                                $4eecb6e629e760ea$var$db(a, d, !1);
                                break;
                            case "textarea":
                                $4eecb6e629e760ea$var$Va(a);
                                $4eecb6e629e760ea$var$jb(a);
                                break;
                            case "option":
                                null != d.value && a.setAttribute("value", "" + $4eecb6e629e760ea$var$Sa(d.value));
                                break;
                            case "select":
                                a.multiple = !!d.multiple;
                                f = d.value;
                                null != f ? $4eecb6e629e760ea$var$fb(a, !!d.multiple, f, !1) : null != d.defaultValue && $4eecb6e629e760ea$var$fb(a, !!d.multiple, d.defaultValue, !0);
                                break;
                            default:
                                "function" === typeof e.onClick && (a.onclick = $4eecb6e629e760ea$var$Bf);
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
            $4eecb6e629e760ea$var$S(b);
            return null;
        case 6:
            if (a && null != b.stateNode) $4eecb6e629e760ea$var$Cj(a, b, a.memoizedProps, d);
            else {
                if ("string" !== typeof d && null === b.stateNode) throw Error($4eecb6e629e760ea$var$p(166));
                c = $4eecb6e629e760ea$var$xh($4eecb6e629e760ea$var$wh.current);
                $4eecb6e629e760ea$var$xh($4eecb6e629e760ea$var$uh.current);
                if ($4eecb6e629e760ea$var$Gg(b)) {
                    d = b.stateNode;
                    c = b.memoizedProps;
                    d[$4eecb6e629e760ea$var$Of] = b;
                    if (f = d.nodeValue !== c) {
                        if (a = $4eecb6e629e760ea$var$xg, null !== a) switch(a.tag){
                            case 3:
                                $4eecb6e629e760ea$var$Af(d.nodeValue, c, 0 !== (a.mode & 1));
                                break;
                            case 5:
                                !0 !== a.memoizedProps.suppressHydrationWarning && $4eecb6e629e760ea$var$Af(d.nodeValue, c, 0 !== (a.mode & 1));
                        }
                    }
                    f && (b.flags |= 4);
                } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[$4eecb6e629e760ea$var$Of] = b, b.stateNode = d;
            }
            $4eecb6e629e760ea$var$S(b);
            return null;
        case 13:
            $4eecb6e629e760ea$var$E($4eecb6e629e760ea$var$L);
            d = b.memoizedState;
            if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
                if ($4eecb6e629e760ea$var$I && null !== $4eecb6e629e760ea$var$yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) $4eecb6e629e760ea$var$Hg(), $4eecb6e629e760ea$var$Ig(), b.flags |= 98560, f = !1;
                else if (f = $4eecb6e629e760ea$var$Gg(b), null !== d && null !== d.dehydrated) {
                    if (null === a) {
                        if (!f) throw Error($4eecb6e629e760ea$var$p(318));
                        f = b.memoizedState;
                        f = null !== f ? f.dehydrated : null;
                        if (!f) throw Error($4eecb6e629e760ea$var$p(317));
                        f[$4eecb6e629e760ea$var$Of] = b;
                    } else $4eecb6e629e760ea$var$Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
                    $4eecb6e629e760ea$var$S(b);
                    f = !1;
                } else null !== $4eecb6e629e760ea$var$zg && ($4eecb6e629e760ea$var$Fj($4eecb6e629e760ea$var$zg), $4eecb6e629e760ea$var$zg = null), f = !0;
                if (!f) return b.flags & 65536 ? b : null;
            }
            if (0 !== (b.flags & 128)) return b.lanes = c, b;
            d = null !== d;
            d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== ($4eecb6e629e760ea$var$L.current & 1) ? 0 === $4eecb6e629e760ea$var$T && ($4eecb6e629e760ea$var$T = 3) : $4eecb6e629e760ea$var$tj()));
            null !== b.updateQueue && (b.flags |= 4);
            $4eecb6e629e760ea$var$S(b);
            return null;
        case 4:
            return $4eecb6e629e760ea$var$zh(), $4eecb6e629e760ea$var$Aj(a, b), null === a && $4eecb6e629e760ea$var$sf(b.stateNode.containerInfo), $4eecb6e629e760ea$var$S(b), null;
        case 10:
            return $4eecb6e629e760ea$var$ah(b.type._context), $4eecb6e629e760ea$var$S(b), null;
        case 17:
            return $4eecb6e629e760ea$var$Zf(b.type) && $4eecb6e629e760ea$var$$f(), $4eecb6e629e760ea$var$S(b), null;
        case 19:
            $4eecb6e629e760ea$var$E($4eecb6e629e760ea$var$L);
            f = b.memoizedState;
            if (null === f) return $4eecb6e629e760ea$var$S(b), null;
            d = 0 !== (b.flags & 128);
            g = f.rendering;
            if (null === g) {
                if (d) $4eecb6e629e760ea$var$Dj(f, !1);
                else {
                    if (0 !== $4eecb6e629e760ea$var$T || null !== a && 0 !== (a.flags & 128)) for(a = b.child; null !== a;){
                        g = $4eecb6e629e760ea$var$Ch(a);
                        if (null !== g) {
                            b.flags |= 128;
                            $4eecb6e629e760ea$var$Dj(f, !1);
                            d = g.updateQueue;
                            null !== d && (b.updateQueue = d, b.flags |= 4);
                            b.subtreeFlags = 0;
                            d = c;
                            for(c = b.child; null !== c;)f = c, a = d, f.flags &= 14680066, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : {
                                lanes: a.lanes,
                                firstContext: a.firstContext
                            }), c = c.sibling;
                            $4eecb6e629e760ea$var$G($4eecb6e629e760ea$var$L, $4eecb6e629e760ea$var$L.current & 1 | 2);
                            return b.child;
                        }
                        a = a.sibling;
                    }
                    null !== f.tail && $4eecb6e629e760ea$var$B() > $4eecb6e629e760ea$var$Gj && (b.flags |= 128, d = !0, $4eecb6e629e760ea$var$Dj(f, !1), b.lanes = 4194304);
                }
            } else {
                if (!d) {
                    if (a = $4eecb6e629e760ea$var$Ch(g), null !== a) {
                        if (b.flags |= 128, d = !0, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), $4eecb6e629e760ea$var$Dj(f, !0), null === f.tail && "hidden" === f.tailMode && !g.alternate && !$4eecb6e629e760ea$var$I) return $4eecb6e629e760ea$var$S(b), null;
                    } else 2 * $4eecb6e629e760ea$var$B() - f.renderingStartTime > $4eecb6e629e760ea$var$Gj && 1073741824 !== c && (b.flags |= 128, d = !0, $4eecb6e629e760ea$var$Dj(f, !1), b.lanes = 4194304);
                }
                f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, null !== c ? c.sibling = g : b.child = g, f.last = g);
            }
            if (null !== f.tail) return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = $4eecb6e629e760ea$var$B(), b.sibling = null, c = $4eecb6e629e760ea$var$L.current, $4eecb6e629e760ea$var$G($4eecb6e629e760ea$var$L, d ? c & 1 | 2 : c & 1), b;
            $4eecb6e629e760ea$var$S(b);
            return null;
        case 22:
        case 23:
            return $4eecb6e629e760ea$var$Hj(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== ($4eecb6e629e760ea$var$fj & 1073741824) && ($4eecb6e629e760ea$var$S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : $4eecb6e629e760ea$var$S(b), null;
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error($4eecb6e629e760ea$var$p(156, b.tag));
}
function $4eecb6e629e760ea$var$Ij(a, b) {
    $4eecb6e629e760ea$var$wg(b);
    switch(b.tag){
        case 1:
            return $4eecb6e629e760ea$var$Zf(b.type) && $4eecb6e629e760ea$var$$f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
        case 3:
            return $4eecb6e629e760ea$var$zh(), $4eecb6e629e760ea$var$E($4eecb6e629e760ea$var$Wf), $4eecb6e629e760ea$var$E($4eecb6e629e760ea$var$H), $4eecb6e629e760ea$var$Eh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
        case 5:
            return $4eecb6e629e760ea$var$Bh(b), null;
        case 13:
            $4eecb6e629e760ea$var$E($4eecb6e629e760ea$var$L);
            a = b.memoizedState;
            if (null !== a && null !== a.dehydrated) {
                if (null === b.alternate) throw Error($4eecb6e629e760ea$var$p(340));
                $4eecb6e629e760ea$var$Ig();
            }
            a = b.flags;
            return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
        case 19:
            return $4eecb6e629e760ea$var$E($4eecb6e629e760ea$var$L), null;
        case 4:
            return $4eecb6e629e760ea$var$zh(), null;
        case 10:
            return $4eecb6e629e760ea$var$ah(b.type._context), null;
        case 22:
        case 23:
            return $4eecb6e629e760ea$var$Hj(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var $4eecb6e629e760ea$var$Jj = !1, $4eecb6e629e760ea$var$U = !1, $4eecb6e629e760ea$var$Kj = "function" === typeof WeakSet ? WeakSet : Set, $4eecb6e629e760ea$var$V = null;
function $4eecb6e629e760ea$var$Lj(a, b) {
    var c = a.ref;
    if (null !== c) {
        if ("function" === typeof c) try {
            c(null);
        } catch (d) {
            $4eecb6e629e760ea$var$W(a, b, d);
        }
        else c.current = null;
    }
}
function $4eecb6e629e760ea$var$Mj(a, b, c) {
    try {
        c();
    } catch (d) {
        $4eecb6e629e760ea$var$W(a, b, d);
    }
}
var $4eecb6e629e760ea$var$Nj = !1;
function $4eecb6e629e760ea$var$Oj(a, b) {
    $4eecb6e629e760ea$var$Cf = $4eecb6e629e760ea$var$dd;
    a = $4eecb6e629e760ea$var$Me();
    if ($4eecb6e629e760ea$var$Ne(a)) {
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
    $4eecb6e629e760ea$var$Df = {
        focusedElem: a,
        selectionRange: c
    };
    $4eecb6e629e760ea$var$dd = !1;
    for($4eecb6e629e760ea$var$V = b; null !== $4eecb6e629e760ea$var$V;)if (b = $4eecb6e629e760ea$var$V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, $4eecb6e629e760ea$var$V = a;
    else for(; null !== $4eecb6e629e760ea$var$V;){
        b = $4eecb6e629e760ea$var$V;
        try {
            var n = b.alternate;
            if (0 !== (b.flags & 1024)) switch(b.tag){
                case 0:
                case 11:
                case 15:
                    break;
                case 1:
                    if (null !== n) {
                        var t = n.memoizedProps, J = n.memoizedState, x = b.stateNode, w = x.getSnapshotBeforeUpdate(b.elementType === b.type ? t : $4eecb6e629e760ea$var$Ci(b.type, t), J);
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
                    throw Error($4eecb6e629e760ea$var$p(163));
            }
        } catch (F) {
            $4eecb6e629e760ea$var$W(b, b.return, F);
        }
        a = b.sibling;
        if (null !== a) {
            a.return = b.return;
            $4eecb6e629e760ea$var$V = a;
            break;
        }
        $4eecb6e629e760ea$var$V = b.return;
    }
    n = $4eecb6e629e760ea$var$Nj;
    $4eecb6e629e760ea$var$Nj = !1;
    return n;
}
function $4eecb6e629e760ea$var$Pj(a, b, c) {
    var d = b.updateQueue;
    d = null !== d ? d.lastEffect : null;
    if (null !== d) {
        var e = d = d.next;
        do {
            if ((e.tag & a) === a) {
                var f = e.destroy;
                e.destroy = void 0;
                void 0 !== f && $4eecb6e629e760ea$var$Mj(b, c, f);
            }
            e = e.next;
        }while (e !== d);
    }
}
function $4eecb6e629e760ea$var$Qj(a, b) {
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
function $4eecb6e629e760ea$var$Rj(a) {
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
function $4eecb6e629e760ea$var$Sj(a) {
    var b = a.alternate;
    null !== b && (a.alternate = null, $4eecb6e629e760ea$var$Sj(b));
    a.child = null;
    a.deletions = null;
    a.sibling = null;
    5 === a.tag && (b = a.stateNode, null !== b && (delete b[$4eecb6e629e760ea$var$Of], delete b[$4eecb6e629e760ea$var$Pf], delete b[$4eecb6e629e760ea$var$of], delete b[$4eecb6e629e760ea$var$Qf], delete b[$4eecb6e629e760ea$var$Rf]));
    a.stateNode = null;
    a.return = null;
    a.dependencies = null;
    a.memoizedProps = null;
    a.memoizedState = null;
    a.pendingProps = null;
    a.stateNode = null;
    a.updateQueue = null;
}
function $4eecb6e629e760ea$var$Tj(a) {
    return 5 === a.tag || 3 === a.tag || 4 === a.tag;
}
function $4eecb6e629e760ea$var$Uj(a) {
    a: for(;;){
        for(; null === a.sibling;){
            if (null === a.return || $4eecb6e629e760ea$var$Tj(a.return)) return null;
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
function $4eecb6e629e760ea$var$Vj(a, b, c) {
    var d = a.tag;
    if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = $4eecb6e629e760ea$var$Bf));
    else if (4 !== d && (a = a.child, null !== a)) for($4eecb6e629e760ea$var$Vj(a, b, c), a = a.sibling; null !== a;)$4eecb6e629e760ea$var$Vj(a, b, c), a = a.sibling;
}
function $4eecb6e629e760ea$var$Wj(a, b, c) {
    var d = a.tag;
    if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
    else if (4 !== d && (a = a.child, null !== a)) for($4eecb6e629e760ea$var$Wj(a, b, c), a = a.sibling; null !== a;)$4eecb6e629e760ea$var$Wj(a, b, c), a = a.sibling;
}
var $4eecb6e629e760ea$var$X = null, $4eecb6e629e760ea$var$Xj = !1;
function $4eecb6e629e760ea$var$Yj(a, b, c) {
    for(c = c.child; null !== c;)$4eecb6e629e760ea$var$Zj(a, b, c), c = c.sibling;
}
function $4eecb6e629e760ea$var$Zj(a, b, c) {
    if ($4eecb6e629e760ea$var$lc && "function" === typeof $4eecb6e629e760ea$var$lc.onCommitFiberUnmount) try {
        $4eecb6e629e760ea$var$lc.onCommitFiberUnmount($4eecb6e629e760ea$var$kc, c);
    } catch (h) {}
    switch(c.tag){
        case 5:
            $4eecb6e629e760ea$var$U || $4eecb6e629e760ea$var$Lj(c, b);
        case 6:
            var d = $4eecb6e629e760ea$var$X, e = $4eecb6e629e760ea$var$Xj;
            $4eecb6e629e760ea$var$X = null;
            $4eecb6e629e760ea$var$Yj(a, b, c);
            $4eecb6e629e760ea$var$X = d;
            $4eecb6e629e760ea$var$Xj = e;
            null !== $4eecb6e629e760ea$var$X && ($4eecb6e629e760ea$var$Xj ? (a = $4eecb6e629e760ea$var$X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : $4eecb6e629e760ea$var$X.removeChild(c.stateNode));
            break;
        case 18:
            null !== $4eecb6e629e760ea$var$X && ($4eecb6e629e760ea$var$Xj ? (a = $4eecb6e629e760ea$var$X, c = c.stateNode, 8 === a.nodeType ? $4eecb6e629e760ea$var$Kf(a.parentNode, c) : 1 === a.nodeType && $4eecb6e629e760ea$var$Kf(a, c), $4eecb6e629e760ea$var$bd(a)) : $4eecb6e629e760ea$var$Kf($4eecb6e629e760ea$var$X, c.stateNode));
            break;
        case 4:
            d = $4eecb6e629e760ea$var$X;
            e = $4eecb6e629e760ea$var$Xj;
            $4eecb6e629e760ea$var$X = c.stateNode.containerInfo;
            $4eecb6e629e760ea$var$Xj = !0;
            $4eecb6e629e760ea$var$Yj(a, b, c);
            $4eecb6e629e760ea$var$X = d;
            $4eecb6e629e760ea$var$Xj = e;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!$4eecb6e629e760ea$var$U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
                e = d = d.next;
                do {
                    var f = e, g = f.destroy;
                    f = f.tag;
                    void 0 !== g && (0 !== (f & 2) ? $4eecb6e629e760ea$var$Mj(c, b, g) : 0 !== (f & 4) && $4eecb6e629e760ea$var$Mj(c, b, g));
                    e = e.next;
                }while (e !== d);
            }
            $4eecb6e629e760ea$var$Yj(a, b, c);
            break;
        case 1:
            if (!$4eecb6e629e760ea$var$U && ($4eecb6e629e760ea$var$Lj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
                d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
            } catch (h) {
                $4eecb6e629e760ea$var$W(c, b, h);
            }
            $4eecb6e629e760ea$var$Yj(a, b, c);
            break;
        case 21:
            $4eecb6e629e760ea$var$Yj(a, b, c);
            break;
        case 22:
            c.mode & 1 ? ($4eecb6e629e760ea$var$U = (d = $4eecb6e629e760ea$var$U) || null !== c.memoizedState, $4eecb6e629e760ea$var$Yj(a, b, c), $4eecb6e629e760ea$var$U = d) : $4eecb6e629e760ea$var$Yj(a, b, c);
            break;
        default:
            $4eecb6e629e760ea$var$Yj(a, b, c);
    }
}
function $4eecb6e629e760ea$var$ak(a) {
    var b = a.updateQueue;
    if (null !== b) {
        a.updateQueue = null;
        var c = a.stateNode;
        null === c && (c = a.stateNode = new $4eecb6e629e760ea$var$Kj);
        b.forEach(function(b) {
            var d = $4eecb6e629e760ea$var$bk.bind(null, a, b);
            c.has(b) || (c.add(b), b.then(d, d));
        });
    }
}
function $4eecb6e629e760ea$var$ck(a, b) {
    var c = b.deletions;
    if (null !== c) for(var d = 0; d < c.length; d++){
        var e = c[d];
        try {
            var f = a, g = b, h = g;
            a: for(; null !== h;){
                switch(h.tag){
                    case 5:
                        $4eecb6e629e760ea$var$X = h.stateNode;
                        $4eecb6e629e760ea$var$Xj = !1;
                        break a;
                    case 3:
                        $4eecb6e629e760ea$var$X = h.stateNode.containerInfo;
                        $4eecb6e629e760ea$var$Xj = !0;
                        break a;
                    case 4:
                        $4eecb6e629e760ea$var$X = h.stateNode.containerInfo;
                        $4eecb6e629e760ea$var$Xj = !0;
                        break a;
                }
                h = h.return;
            }
            if (null === $4eecb6e629e760ea$var$X) throw Error($4eecb6e629e760ea$var$p(160));
            $4eecb6e629e760ea$var$Zj(f, g, e);
            $4eecb6e629e760ea$var$X = null;
            $4eecb6e629e760ea$var$Xj = !1;
            var k = e.alternate;
            null !== k && (k.return = null);
            e.return = null;
        } catch (l) {
            $4eecb6e629e760ea$var$W(e, b, l);
        }
    }
    if (b.subtreeFlags & 12854) for(b = b.child; null !== b;)$4eecb6e629e760ea$var$dk(b, a), b = b.sibling;
}
function $4eecb6e629e760ea$var$dk(a, b) {
    var c = a.alternate, d = a.flags;
    switch(a.tag){
        case 0:
        case 11:
        case 14:
        case 15:
            $4eecb6e629e760ea$var$ck(b, a);
            $4eecb6e629e760ea$var$ek(a);
            if (d & 4) {
                try {
                    $4eecb6e629e760ea$var$Pj(3, a, a.return), $4eecb6e629e760ea$var$Qj(3, a);
                } catch (t) {
                    $4eecb6e629e760ea$var$W(a, a.return, t);
                }
                try {
                    $4eecb6e629e760ea$var$Pj(5, a, a.return);
                } catch (t) {
                    $4eecb6e629e760ea$var$W(a, a.return, t);
                }
            }
            break;
        case 1:
            $4eecb6e629e760ea$var$ck(b, a);
            $4eecb6e629e760ea$var$ek(a);
            d & 512 && null !== c && $4eecb6e629e760ea$var$Lj(c, c.return);
            break;
        case 5:
            $4eecb6e629e760ea$var$ck(b, a);
            $4eecb6e629e760ea$var$ek(a);
            d & 512 && null !== c && $4eecb6e629e760ea$var$Lj(c, c.return);
            if (a.flags & 32) {
                var e = a.stateNode;
                try {
                    $4eecb6e629e760ea$var$ob(e, "");
                } catch (t) {
                    $4eecb6e629e760ea$var$W(a, a.return, t);
                }
            }
            if (d & 4 && (e = a.stateNode, null != e)) {
                var f = a.memoizedProps, g = null !== c ? c.memoizedProps : f, h = a.type, k = a.updateQueue;
                a.updateQueue = null;
                if (null !== k) try {
                    "input" === h && "radio" === f.type && null != f.name && $4eecb6e629e760ea$var$ab(e, f);
                    $4eecb6e629e760ea$var$vb(h, g);
                    var l = $4eecb6e629e760ea$var$vb(h, f);
                    for(g = 0; g < k.length; g += 2){
                        var m = k[g], q = k[g + 1];
                        "style" === m ? $4eecb6e629e760ea$var$sb(e, q) : "dangerouslySetInnerHTML" === m ? $4eecb6e629e760ea$var$nb(e, q) : "children" === m ? $4eecb6e629e760ea$var$ob(e, q) : $4eecb6e629e760ea$var$ta(e, m, q, l);
                    }
                    switch(h){
                        case "input":
                            $4eecb6e629e760ea$var$bb(e, f);
                            break;
                        case "textarea":
                            $4eecb6e629e760ea$var$ib(e, f);
                            break;
                        case "select":
                            var r = e._wrapperState.wasMultiple;
                            e._wrapperState.wasMultiple = !!f.multiple;
                            var y = f.value;
                            null != y ? $4eecb6e629e760ea$var$fb(e, !!f.multiple, y, !1) : r !== !!f.multiple && (null != f.defaultValue ? $4eecb6e629e760ea$var$fb(e, !!f.multiple, f.defaultValue, !0) : $4eecb6e629e760ea$var$fb(e, !!f.multiple, f.multiple ? [] : "", !1));
                    }
                    e[$4eecb6e629e760ea$var$Pf] = f;
                } catch (t) {
                    $4eecb6e629e760ea$var$W(a, a.return, t);
                }
            }
            break;
        case 6:
            $4eecb6e629e760ea$var$ck(b, a);
            $4eecb6e629e760ea$var$ek(a);
            if (d & 4) {
                if (null === a.stateNode) throw Error($4eecb6e629e760ea$var$p(162));
                e = a.stateNode;
                f = a.memoizedProps;
                try {
                    e.nodeValue = f;
                } catch (t) {
                    $4eecb6e629e760ea$var$W(a, a.return, t);
                }
            }
            break;
        case 3:
            $4eecb6e629e760ea$var$ck(b, a);
            $4eecb6e629e760ea$var$ek(a);
            if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
                $4eecb6e629e760ea$var$bd(b.containerInfo);
            } catch (t) {
                $4eecb6e629e760ea$var$W(a, a.return, t);
            }
            break;
        case 4:
            $4eecb6e629e760ea$var$ck(b, a);
            $4eecb6e629e760ea$var$ek(a);
            break;
        case 13:
            $4eecb6e629e760ea$var$ck(b, a);
            $4eecb6e629e760ea$var$ek(a);
            e = a.child;
            e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || ($4eecb6e629e760ea$var$fk = $4eecb6e629e760ea$var$B()));
            d & 4 && $4eecb6e629e760ea$var$ak(a);
            break;
        case 22:
            m = null !== c && null !== c.memoizedState;
            a.mode & 1 ? ($4eecb6e629e760ea$var$U = (l = $4eecb6e629e760ea$var$U) || m, $4eecb6e629e760ea$var$ck(b, a), $4eecb6e629e760ea$var$U = l) : $4eecb6e629e760ea$var$ck(b, a);
            $4eecb6e629e760ea$var$ek(a);
            if (d & 8192) {
                l = null !== a.memoizedState;
                if ((a.stateNode.isHidden = l) && !m && 0 !== (a.mode & 1)) for($4eecb6e629e760ea$var$V = a, m = a.child; null !== m;){
                    for(q = $4eecb6e629e760ea$var$V = m; null !== $4eecb6e629e760ea$var$V;){
                        r = $4eecb6e629e760ea$var$V;
                        y = r.child;
                        switch(r.tag){
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                $4eecb6e629e760ea$var$Pj(4, r, r.return);
                                break;
                            case 1:
                                $4eecb6e629e760ea$var$Lj(r, r.return);
                                var n = r.stateNode;
                                if ("function" === typeof n.componentWillUnmount) {
                                    d = r;
                                    c = r.return;
                                    try {
                                        b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
                                    } catch (t) {
                                        $4eecb6e629e760ea$var$W(d, c, t);
                                    }
                                }
                                break;
                            case 5:
                                $4eecb6e629e760ea$var$Lj(r, r.return);
                                break;
                            case 22:
                                if (null !== r.memoizedState) {
                                    $4eecb6e629e760ea$var$gk(q);
                                    continue;
                                }
                        }
                        null !== y ? (y.return = r, $4eecb6e629e760ea$var$V = y) : $4eecb6e629e760ea$var$gk(q);
                    }
                    m = m.sibling;
                }
                a: for(m = null, q = a;;){
                    if (5 === q.tag) {
                        if (null === m) {
                            m = q;
                            try {
                                e = q.stateNode, l ? (f = e.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q.stateNode, k = q.memoizedProps.style, g = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, h.style.display = $4eecb6e629e760ea$var$rb("display", g));
                            } catch (t) {
                                $4eecb6e629e760ea$var$W(a, a.return, t);
                            }
                        }
                    } else if (6 === q.tag) {
                        if (null === m) try {
                            q.stateNode.nodeValue = l ? "" : q.memoizedProps;
                        } catch (t) {
                            $4eecb6e629e760ea$var$W(a, a.return, t);
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
            $4eecb6e629e760ea$var$ck(b, a);
            $4eecb6e629e760ea$var$ek(a);
            d & 4 && $4eecb6e629e760ea$var$ak(a);
            break;
        case 21:
            break;
        default:
            $4eecb6e629e760ea$var$ck(b, a), $4eecb6e629e760ea$var$ek(a);
    }
}
function $4eecb6e629e760ea$var$ek(a) {
    var b = a.flags;
    if (b & 2) {
        try {
            a: {
                for(var c = a.return; null !== c;){
                    if ($4eecb6e629e760ea$var$Tj(c)) {
                        var d = c;
                        break a;
                    }
                    c = c.return;
                }
                throw Error($4eecb6e629e760ea$var$p(160));
            }
            switch(d.tag){
                case 5:
                    var e = d.stateNode;
                    d.flags & 32 && ($4eecb6e629e760ea$var$ob(e, ""), d.flags &= -33);
                    var f = $4eecb6e629e760ea$var$Uj(a);
                    $4eecb6e629e760ea$var$Wj(a, f, e);
                    break;
                case 3:
                case 4:
                    var g = d.stateNode.containerInfo, h = $4eecb6e629e760ea$var$Uj(a);
                    $4eecb6e629e760ea$var$Vj(a, h, g);
                    break;
                default:
                    throw Error($4eecb6e629e760ea$var$p(161));
            }
        } catch (k) {
            $4eecb6e629e760ea$var$W(a, a.return, k);
        }
        a.flags &= -3;
    }
    b & 4096 && (a.flags &= -4097);
}
function $4eecb6e629e760ea$var$hk(a, b, c) {
    $4eecb6e629e760ea$var$V = a;
    $4eecb6e629e760ea$var$ik(a, b, c);
}
function $4eecb6e629e760ea$var$ik(a, b, c) {
    for(var d = 0 !== (a.mode & 1); null !== $4eecb6e629e760ea$var$V;){
        var e = $4eecb6e629e760ea$var$V, f = e.child;
        if (22 === e.tag && d) {
            var g = null !== e.memoizedState || $4eecb6e629e760ea$var$Jj;
            if (!g) {
                var h = e.alternate, k = null !== h && null !== h.memoizedState || $4eecb6e629e760ea$var$U;
                h = $4eecb6e629e760ea$var$Jj;
                var l = $4eecb6e629e760ea$var$U;
                $4eecb6e629e760ea$var$Jj = g;
                if (($4eecb6e629e760ea$var$U = k) && !l) for($4eecb6e629e760ea$var$V = e; null !== $4eecb6e629e760ea$var$V;)g = $4eecb6e629e760ea$var$V, k = g.child, 22 === g.tag && null !== g.memoizedState ? $4eecb6e629e760ea$var$jk(e) : null !== k ? (k.return = g, $4eecb6e629e760ea$var$V = k) : $4eecb6e629e760ea$var$jk(e);
                for(; null !== f;)$4eecb6e629e760ea$var$V = f, $4eecb6e629e760ea$var$ik(f, b, c), f = f.sibling;
                $4eecb6e629e760ea$var$V = e;
                $4eecb6e629e760ea$var$Jj = h;
                $4eecb6e629e760ea$var$U = l;
            }
            $4eecb6e629e760ea$var$kk(a, b, c);
        } else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, $4eecb6e629e760ea$var$V = f) : $4eecb6e629e760ea$var$kk(a, b, c);
    }
}
function $4eecb6e629e760ea$var$kk(a) {
    for(; null !== $4eecb6e629e760ea$var$V;){
        var b = $4eecb6e629e760ea$var$V;
        if (0 !== (b.flags & 8772)) {
            var c = b.alternate;
            try {
                if (0 !== (b.flags & 8772)) switch(b.tag){
                    case 0:
                    case 11:
                    case 15:
                        $4eecb6e629e760ea$var$U || $4eecb6e629e760ea$var$Qj(5, b);
                        break;
                    case 1:
                        var d = b.stateNode;
                        if (b.flags & 4 && !$4eecb6e629e760ea$var$U) {
                            if (null === c) d.componentDidMount();
                            else {
                                var e = b.elementType === b.type ? c.memoizedProps : $4eecb6e629e760ea$var$Ci(b.type, c.memoizedProps);
                                d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                            }
                        }
                        var f = b.updateQueue;
                        null !== f && $4eecb6e629e760ea$var$sh(b, f, d);
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
                            $4eecb6e629e760ea$var$sh(b, g, c);
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
                                    null !== q && $4eecb6e629e760ea$var$bd(q);
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
                        throw Error($4eecb6e629e760ea$var$p(163));
                }
                $4eecb6e629e760ea$var$U || b.flags & 512 && $4eecb6e629e760ea$var$Rj(b);
            } catch (r) {
                $4eecb6e629e760ea$var$W(b, b.return, r);
            }
        }
        if (b === a) {
            $4eecb6e629e760ea$var$V = null;
            break;
        }
        c = b.sibling;
        if (null !== c) {
            c.return = b.return;
            $4eecb6e629e760ea$var$V = c;
            break;
        }
        $4eecb6e629e760ea$var$V = b.return;
    }
}
function $4eecb6e629e760ea$var$gk(a) {
    for(; null !== $4eecb6e629e760ea$var$V;){
        var b = $4eecb6e629e760ea$var$V;
        if (b === a) {
            $4eecb6e629e760ea$var$V = null;
            break;
        }
        var c = b.sibling;
        if (null !== c) {
            c.return = b.return;
            $4eecb6e629e760ea$var$V = c;
            break;
        }
        $4eecb6e629e760ea$var$V = b.return;
    }
}
function $4eecb6e629e760ea$var$jk(a) {
    for(; null !== $4eecb6e629e760ea$var$V;){
        var b = $4eecb6e629e760ea$var$V;
        try {
            switch(b.tag){
                case 0:
                case 11:
                case 15:
                    var c = b.return;
                    try {
                        $4eecb6e629e760ea$var$Qj(4, b);
                    } catch (k) {
                        $4eecb6e629e760ea$var$W(b, c, k);
                    }
                    break;
                case 1:
                    var d = b.stateNode;
                    if ("function" === typeof d.componentDidMount) {
                        var e = b.return;
                        try {
                            d.componentDidMount();
                        } catch (k) {
                            $4eecb6e629e760ea$var$W(b, e, k);
                        }
                    }
                    var f = b.return;
                    try {
                        $4eecb6e629e760ea$var$Rj(b);
                    } catch (k) {
                        $4eecb6e629e760ea$var$W(b, f, k);
                    }
                    break;
                case 5:
                    var g = b.return;
                    try {
                        $4eecb6e629e760ea$var$Rj(b);
                    } catch (k) {
                        $4eecb6e629e760ea$var$W(b, g, k);
                    }
            }
        } catch (k) {
            $4eecb6e629e760ea$var$W(b, b.return, k);
        }
        if (b === a) {
            $4eecb6e629e760ea$var$V = null;
            break;
        }
        var h = b.sibling;
        if (null !== h) {
            h.return = b.return;
            $4eecb6e629e760ea$var$V = h;
            break;
        }
        $4eecb6e629e760ea$var$V = b.return;
    }
}
var $4eecb6e629e760ea$var$lk = Math.ceil, $4eecb6e629e760ea$var$mk = $4eecb6e629e760ea$var$ua.ReactCurrentDispatcher, $4eecb6e629e760ea$var$nk = $4eecb6e629e760ea$var$ua.ReactCurrentOwner, $4eecb6e629e760ea$var$ok = $4eecb6e629e760ea$var$ua.ReactCurrentBatchConfig, $4eecb6e629e760ea$var$K = 0, $4eecb6e629e760ea$var$Q = null, $4eecb6e629e760ea$var$Y = null, $4eecb6e629e760ea$var$Z = 0, $4eecb6e629e760ea$var$fj = 0, $4eecb6e629e760ea$var$ej = $4eecb6e629e760ea$var$Uf(0), $4eecb6e629e760ea$var$T = 0, $4eecb6e629e760ea$var$pk = null, $4eecb6e629e760ea$var$rh = 0, $4eecb6e629e760ea$var$qk = 0, $4eecb6e629e760ea$var$rk = 0, $4eecb6e629e760ea$var$sk = null, $4eecb6e629e760ea$var$tk = null, $4eecb6e629e760ea$var$fk = 0, $4eecb6e629e760ea$var$Gj = Infinity, $4eecb6e629e760ea$var$uk = null, $4eecb6e629e760ea$var$Oi = !1, $4eecb6e629e760ea$var$Pi = null, $4eecb6e629e760ea$var$Ri = null, $4eecb6e629e760ea$var$vk = !1, $4eecb6e629e760ea$var$wk = null, $4eecb6e629e760ea$var$xk = 0, $4eecb6e629e760ea$var$yk = 0, $4eecb6e629e760ea$var$zk = null, $4eecb6e629e760ea$var$Ak = -1, $4eecb6e629e760ea$var$Bk = 0;
function $4eecb6e629e760ea$var$R() {
    return 0 !== ($4eecb6e629e760ea$var$K & 6) ? $4eecb6e629e760ea$var$B() : -1 !== $4eecb6e629e760ea$var$Ak ? $4eecb6e629e760ea$var$Ak : $4eecb6e629e760ea$var$Ak = $4eecb6e629e760ea$var$B();
}
function $4eecb6e629e760ea$var$yi(a) {
    if (0 === (a.mode & 1)) return 1;
    if (0 !== ($4eecb6e629e760ea$var$K & 2) && 0 !== $4eecb6e629e760ea$var$Z) return $4eecb6e629e760ea$var$Z & -$4eecb6e629e760ea$var$Z;
    if (null !== $4eecb6e629e760ea$var$Kg.transition) return 0 === $4eecb6e629e760ea$var$Bk && ($4eecb6e629e760ea$var$Bk = $4eecb6e629e760ea$var$yc()), $4eecb6e629e760ea$var$Bk;
    a = $4eecb6e629e760ea$var$C;
    if (0 !== a) return a;
    a = window.event;
    a = void 0 === a ? 16 : $4eecb6e629e760ea$var$jd(a.type);
    return a;
}
function $4eecb6e629e760ea$var$gi(a, b, c, d) {
    if (50 < $4eecb6e629e760ea$var$yk) throw $4eecb6e629e760ea$var$yk = 0, $4eecb6e629e760ea$var$zk = null, Error($4eecb6e629e760ea$var$p(185));
    $4eecb6e629e760ea$var$Ac(a, c, d);
    if (0 === ($4eecb6e629e760ea$var$K & 2) || a !== $4eecb6e629e760ea$var$Q) a === $4eecb6e629e760ea$var$Q && (0 === ($4eecb6e629e760ea$var$K & 2) && ($4eecb6e629e760ea$var$qk |= c), 4 === $4eecb6e629e760ea$var$T && $4eecb6e629e760ea$var$Ck(a, $4eecb6e629e760ea$var$Z)), $4eecb6e629e760ea$var$Dk(a, d), 1 === c && 0 === $4eecb6e629e760ea$var$K && 0 === (b.mode & 1) && ($4eecb6e629e760ea$var$Gj = $4eecb6e629e760ea$var$B() + 500, $4eecb6e629e760ea$var$fg && $4eecb6e629e760ea$var$jg());
}
function $4eecb6e629e760ea$var$Dk(a, b) {
    var c = a.callbackNode;
    $4eecb6e629e760ea$var$wc(a, b);
    var d = $4eecb6e629e760ea$var$uc(a, a === $4eecb6e629e760ea$var$Q ? $4eecb6e629e760ea$var$Z : 0);
    if (0 === d) null !== c && $4eecb6e629e760ea$var$bc(c), a.callbackNode = null, a.callbackPriority = 0;
    else if (b = d & -d, a.callbackPriority !== b) {
        null != c && $4eecb6e629e760ea$var$bc(c);
        if (1 === b) 0 === a.tag ? $4eecb6e629e760ea$var$ig($4eecb6e629e760ea$var$Ek.bind(null, a)) : $4eecb6e629e760ea$var$hg($4eecb6e629e760ea$var$Ek.bind(null, a)), $4eecb6e629e760ea$var$Jf(function() {
            0 === ($4eecb6e629e760ea$var$K & 6) && $4eecb6e629e760ea$var$jg();
        }), c = null;
        else {
            switch($4eecb6e629e760ea$var$Dc(d)){
                case 1:
                    c = $4eecb6e629e760ea$var$fc;
                    break;
                case 4:
                    c = $4eecb6e629e760ea$var$gc;
                    break;
                case 16:
                    c = $4eecb6e629e760ea$var$hc;
                    break;
                case 536870912:
                    c = $4eecb6e629e760ea$var$jc;
                    break;
                default:
                    c = $4eecb6e629e760ea$var$hc;
            }
            c = $4eecb6e629e760ea$var$Fk(c, $4eecb6e629e760ea$var$Gk.bind(null, a));
        }
        a.callbackPriority = b;
        a.callbackNode = c;
    }
}
function $4eecb6e629e760ea$var$Gk(a, b) {
    $4eecb6e629e760ea$var$Ak = -1;
    $4eecb6e629e760ea$var$Bk = 0;
    if (0 !== ($4eecb6e629e760ea$var$K & 6)) throw Error($4eecb6e629e760ea$var$p(327));
    var c = a.callbackNode;
    if ($4eecb6e629e760ea$var$Hk() && a.callbackNode !== c) return null;
    var d = $4eecb6e629e760ea$var$uc(a, a === $4eecb6e629e760ea$var$Q ? $4eecb6e629e760ea$var$Z : 0);
    if (0 === d) return null;
    if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = $4eecb6e629e760ea$var$Ik(a, d);
    else {
        b = d;
        var e = $4eecb6e629e760ea$var$K;
        $4eecb6e629e760ea$var$K |= 2;
        var f = $4eecb6e629e760ea$var$Jk();
        if ($4eecb6e629e760ea$var$Q !== a || $4eecb6e629e760ea$var$Z !== b) $4eecb6e629e760ea$var$uk = null, $4eecb6e629e760ea$var$Gj = $4eecb6e629e760ea$var$B() + 500, $4eecb6e629e760ea$var$Kk(a, b);
        for(;;)try {
            $4eecb6e629e760ea$var$Lk();
            break;
        } catch (h) {
            $4eecb6e629e760ea$var$Mk(a, h);
        }
        $4eecb6e629e760ea$var$$g();
        $4eecb6e629e760ea$var$mk.current = f;
        $4eecb6e629e760ea$var$K = e;
        null !== $4eecb6e629e760ea$var$Y ? b = 0 : ($4eecb6e629e760ea$var$Q = null, $4eecb6e629e760ea$var$Z = 0, b = $4eecb6e629e760ea$var$T);
    }
    if (0 !== b) {
        2 === b && (e = $4eecb6e629e760ea$var$xc(a), 0 !== e && (d = e, b = $4eecb6e629e760ea$var$Nk(a, e)));
        if (1 === b) throw c = $4eecb6e629e760ea$var$pk, $4eecb6e629e760ea$var$Kk(a, 0), $4eecb6e629e760ea$var$Ck(a, d), $4eecb6e629e760ea$var$Dk(a, $4eecb6e629e760ea$var$B()), c;
        if (6 === b) $4eecb6e629e760ea$var$Ck(a, d);
        else {
            e = a.current.alternate;
            if (0 === (d & 30) && !$4eecb6e629e760ea$var$Ok(e) && (b = $4eecb6e629e760ea$var$Ik(a, d), 2 === b && (f = $4eecb6e629e760ea$var$xc(a), 0 !== f && (d = f, b = $4eecb6e629e760ea$var$Nk(a, f))), 1 === b)) throw c = $4eecb6e629e760ea$var$pk, $4eecb6e629e760ea$var$Kk(a, 0), $4eecb6e629e760ea$var$Ck(a, d), $4eecb6e629e760ea$var$Dk(a, $4eecb6e629e760ea$var$B()), c;
            a.finishedWork = e;
            a.finishedLanes = d;
            switch(b){
                case 0:
                case 1:
                    throw Error($4eecb6e629e760ea$var$p(345));
                case 2:
                    $4eecb6e629e760ea$var$Pk(a, $4eecb6e629e760ea$var$tk, $4eecb6e629e760ea$var$uk);
                    break;
                case 3:
                    $4eecb6e629e760ea$var$Ck(a, d);
                    if ((d & 130023424) === d && (b = $4eecb6e629e760ea$var$fk + 500 - $4eecb6e629e760ea$var$B(), 10 < b)) {
                        if (0 !== $4eecb6e629e760ea$var$uc(a, 0)) break;
                        e = a.suspendedLanes;
                        if ((e & d) !== d) {
                            $4eecb6e629e760ea$var$R();
                            a.pingedLanes |= a.suspendedLanes & e;
                            break;
                        }
                        a.timeoutHandle = $4eecb6e629e760ea$var$Ff($4eecb6e629e760ea$var$Pk.bind(null, a, $4eecb6e629e760ea$var$tk, $4eecb6e629e760ea$var$uk), b);
                        break;
                    }
                    $4eecb6e629e760ea$var$Pk(a, $4eecb6e629e760ea$var$tk, $4eecb6e629e760ea$var$uk);
                    break;
                case 4:
                    $4eecb6e629e760ea$var$Ck(a, d);
                    if ((d & 4194240) === d) break;
                    b = a.eventTimes;
                    for(e = -1; 0 < d;){
                        var g = 31 - $4eecb6e629e760ea$var$oc(d);
                        f = 1 << g;
                        g = b[g];
                        g > e && (e = g);
                        d &= ~f;
                    }
                    d = e;
                    d = $4eecb6e629e760ea$var$B() - d;
                    d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3E3 > d ? 3E3 : 4320 > d ? 4320 : 1960 * $4eecb6e629e760ea$var$lk(d / 1960)) - d;
                    if (10 < d) {
                        a.timeoutHandle = $4eecb6e629e760ea$var$Ff($4eecb6e629e760ea$var$Pk.bind(null, a, $4eecb6e629e760ea$var$tk, $4eecb6e629e760ea$var$uk), d);
                        break;
                    }
                    $4eecb6e629e760ea$var$Pk(a, $4eecb6e629e760ea$var$tk, $4eecb6e629e760ea$var$uk);
                    break;
                case 5:
                    $4eecb6e629e760ea$var$Pk(a, $4eecb6e629e760ea$var$tk, $4eecb6e629e760ea$var$uk);
                    break;
                default:
                    throw Error($4eecb6e629e760ea$var$p(329));
            }
        }
    }
    $4eecb6e629e760ea$var$Dk(a, $4eecb6e629e760ea$var$B());
    return a.callbackNode === c ? $4eecb6e629e760ea$var$Gk.bind(null, a) : null;
}
function $4eecb6e629e760ea$var$Nk(a, b) {
    var c = $4eecb6e629e760ea$var$sk;
    a.current.memoizedState.isDehydrated && ($4eecb6e629e760ea$var$Kk(a, b).flags |= 256);
    a = $4eecb6e629e760ea$var$Ik(a, b);
    2 !== a && (b = $4eecb6e629e760ea$var$tk, $4eecb6e629e760ea$var$tk = c, null !== b && $4eecb6e629e760ea$var$Fj(b));
    return a;
}
function $4eecb6e629e760ea$var$Fj(a) {
    null === $4eecb6e629e760ea$var$tk ? $4eecb6e629e760ea$var$tk = a : $4eecb6e629e760ea$var$tk.push.apply($4eecb6e629e760ea$var$tk, a);
}
function $4eecb6e629e760ea$var$Ok(a) {
    for(var b = a;;){
        if (b.flags & 16384) {
            var c = b.updateQueue;
            if (null !== c && (c = c.stores, null !== c)) for(var d = 0; d < c.length; d++){
                var e = c[d], f = e.getSnapshot;
                e = e.value;
                try {
                    if (!$4eecb6e629e760ea$var$He(f(), e)) return !1;
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
function $4eecb6e629e760ea$var$Ck(a, b) {
    b &= ~$4eecb6e629e760ea$var$rk;
    b &= ~$4eecb6e629e760ea$var$qk;
    a.suspendedLanes |= b;
    a.pingedLanes &= ~b;
    for(a = a.expirationTimes; 0 < b;){
        var c = 31 - $4eecb6e629e760ea$var$oc(b), d = 1 << c;
        a[c] = -1;
        b &= ~d;
    }
}
function $4eecb6e629e760ea$var$Ek(a) {
    if (0 !== ($4eecb6e629e760ea$var$K & 6)) throw Error($4eecb6e629e760ea$var$p(327));
    $4eecb6e629e760ea$var$Hk();
    var b = $4eecb6e629e760ea$var$uc(a, 0);
    if (0 === (b & 1)) return $4eecb6e629e760ea$var$Dk(a, $4eecb6e629e760ea$var$B()), null;
    var c = $4eecb6e629e760ea$var$Ik(a, b);
    if (0 !== a.tag && 2 === c) {
        var d = $4eecb6e629e760ea$var$xc(a);
        0 !== d && (b = d, c = $4eecb6e629e760ea$var$Nk(a, d));
    }
    if (1 === c) throw c = $4eecb6e629e760ea$var$pk, $4eecb6e629e760ea$var$Kk(a, 0), $4eecb6e629e760ea$var$Ck(a, b), $4eecb6e629e760ea$var$Dk(a, $4eecb6e629e760ea$var$B()), c;
    if (6 === c) throw Error($4eecb6e629e760ea$var$p(345));
    a.finishedWork = a.current.alternate;
    a.finishedLanes = b;
    $4eecb6e629e760ea$var$Pk(a, $4eecb6e629e760ea$var$tk, $4eecb6e629e760ea$var$uk);
    $4eecb6e629e760ea$var$Dk(a, $4eecb6e629e760ea$var$B());
    return null;
}
function $4eecb6e629e760ea$var$Qk(a, b) {
    var c = $4eecb6e629e760ea$var$K;
    $4eecb6e629e760ea$var$K |= 1;
    try {
        return a(b);
    } finally{
        $4eecb6e629e760ea$var$K = c, 0 === $4eecb6e629e760ea$var$K && ($4eecb6e629e760ea$var$Gj = $4eecb6e629e760ea$var$B() + 500, $4eecb6e629e760ea$var$fg && $4eecb6e629e760ea$var$jg());
    }
}
function $4eecb6e629e760ea$var$Rk(a) {
    null !== $4eecb6e629e760ea$var$wk && 0 === $4eecb6e629e760ea$var$wk.tag && 0 === ($4eecb6e629e760ea$var$K & 6) && $4eecb6e629e760ea$var$Hk();
    var b = $4eecb6e629e760ea$var$K;
    $4eecb6e629e760ea$var$K |= 1;
    var c = $4eecb6e629e760ea$var$ok.transition, d = $4eecb6e629e760ea$var$C;
    try {
        if ($4eecb6e629e760ea$var$ok.transition = null, $4eecb6e629e760ea$var$C = 1, a) return a();
    } finally{
        $4eecb6e629e760ea$var$C = d, $4eecb6e629e760ea$var$ok.transition = c, $4eecb6e629e760ea$var$K = b, 0 === ($4eecb6e629e760ea$var$K & 6) && $4eecb6e629e760ea$var$jg();
    }
}
function $4eecb6e629e760ea$var$Hj() {
    $4eecb6e629e760ea$var$fj = $4eecb6e629e760ea$var$ej.current;
    $4eecb6e629e760ea$var$E($4eecb6e629e760ea$var$ej);
}
function $4eecb6e629e760ea$var$Kk(a, b) {
    a.finishedWork = null;
    a.finishedLanes = 0;
    var c = a.timeoutHandle;
    -1 !== c && (a.timeoutHandle = -1, $4eecb6e629e760ea$var$Gf(c));
    if (null !== $4eecb6e629e760ea$var$Y) for(c = $4eecb6e629e760ea$var$Y.return; null !== c;){
        var d = c;
        $4eecb6e629e760ea$var$wg(d);
        switch(d.tag){
            case 1:
                d = d.type.childContextTypes;
                null !== d && void 0 !== d && $4eecb6e629e760ea$var$$f();
                break;
            case 3:
                $4eecb6e629e760ea$var$zh();
                $4eecb6e629e760ea$var$E($4eecb6e629e760ea$var$Wf);
                $4eecb6e629e760ea$var$E($4eecb6e629e760ea$var$H);
                $4eecb6e629e760ea$var$Eh();
                break;
            case 5:
                $4eecb6e629e760ea$var$Bh(d);
                break;
            case 4:
                $4eecb6e629e760ea$var$zh();
                break;
            case 13:
                $4eecb6e629e760ea$var$E($4eecb6e629e760ea$var$L);
                break;
            case 19:
                $4eecb6e629e760ea$var$E($4eecb6e629e760ea$var$L);
                break;
            case 10:
                $4eecb6e629e760ea$var$ah(d.type._context);
                break;
            case 22:
            case 23:
                $4eecb6e629e760ea$var$Hj();
        }
        c = c.return;
    }
    $4eecb6e629e760ea$var$Q = a;
    $4eecb6e629e760ea$var$Y = a = $4eecb6e629e760ea$var$Pg(a.current, null);
    $4eecb6e629e760ea$var$Z = $4eecb6e629e760ea$var$fj = b;
    $4eecb6e629e760ea$var$T = 0;
    $4eecb6e629e760ea$var$pk = null;
    $4eecb6e629e760ea$var$rk = $4eecb6e629e760ea$var$qk = $4eecb6e629e760ea$var$rh = 0;
    $4eecb6e629e760ea$var$tk = $4eecb6e629e760ea$var$sk = null;
    if (null !== $4eecb6e629e760ea$var$fh) {
        for(b = 0; b < $4eecb6e629e760ea$var$fh.length; b++)if (c = $4eecb6e629e760ea$var$fh[b], d = c.interleaved, null !== d) {
            c.interleaved = null;
            var e = d.next, f = c.pending;
            if (null !== f) {
                var g = f.next;
                f.next = e;
                d.next = g;
            }
            c.pending = d;
        }
        $4eecb6e629e760ea$var$fh = null;
    }
    return a;
}
function $4eecb6e629e760ea$var$Mk(a, b) {
    do {
        var c = $4eecb6e629e760ea$var$Y;
        try {
            $4eecb6e629e760ea$var$$g();
            $4eecb6e629e760ea$var$Fh.current = $4eecb6e629e760ea$var$Rh;
            if ($4eecb6e629e760ea$var$Ih) {
                for(var d = $4eecb6e629e760ea$var$M.memoizedState; null !== d;){
                    var e = d.queue;
                    null !== e && (e.pending = null);
                    d = d.next;
                }
                $4eecb6e629e760ea$var$Ih = !1;
            }
            $4eecb6e629e760ea$var$Hh = 0;
            $4eecb6e629e760ea$var$O = $4eecb6e629e760ea$var$N = $4eecb6e629e760ea$var$M = null;
            $4eecb6e629e760ea$var$Jh = !1;
            $4eecb6e629e760ea$var$Kh = 0;
            $4eecb6e629e760ea$var$nk.current = null;
            if (null === c || null === c.return) {
                $4eecb6e629e760ea$var$T = 1;
                $4eecb6e629e760ea$var$pk = b;
                $4eecb6e629e760ea$var$Y = null;
                break;
            }
            a: {
                var f = a, g = c.return, h = c, k = b;
                b = $4eecb6e629e760ea$var$Z;
                h.flags |= 32768;
                if (null !== k && "object" === typeof k && "function" === typeof k.then) {
                    var l = k, m = h, q = m.tag;
                    if (0 === (m.mode & 1) && (0 === q || 11 === q || 15 === q)) {
                        var r = m.alternate;
                        r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, m.memoizedState = null);
                    }
                    var y = $4eecb6e629e760ea$var$Ui(g);
                    if (null !== y) {
                        y.flags &= -257;
                        $4eecb6e629e760ea$var$Vi(y, g, h, f, b);
                        y.mode & 1 && $4eecb6e629e760ea$var$Si(f, l, b);
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
                            $4eecb6e629e760ea$var$Si(f, l, b);
                            $4eecb6e629e760ea$var$tj();
                            break a;
                        }
                        k = Error($4eecb6e629e760ea$var$p(426));
                    }
                } else if ($4eecb6e629e760ea$var$I && h.mode & 1) {
                    var J = $4eecb6e629e760ea$var$Ui(g);
                    if (null !== J) {
                        0 === (J.flags & 65536) && (J.flags |= 256);
                        $4eecb6e629e760ea$var$Vi(J, g, h, f, b);
                        $4eecb6e629e760ea$var$Jg($4eecb6e629e760ea$var$Ji(k, h));
                        break a;
                    }
                }
                f = k = $4eecb6e629e760ea$var$Ji(k, h);
                4 !== $4eecb6e629e760ea$var$T && ($4eecb6e629e760ea$var$T = 2);
                null === $4eecb6e629e760ea$var$sk ? $4eecb6e629e760ea$var$sk = [
                    f
                ] : $4eecb6e629e760ea$var$sk.push(f);
                f = g;
                do {
                    switch(f.tag){
                        case 3:
                            f.flags |= 65536;
                            b &= -b;
                            f.lanes |= b;
                            var x = $4eecb6e629e760ea$var$Ni(f, k, b);
                            $4eecb6e629e760ea$var$ph(f, x);
                            break a;
                        case 1:
                            h = k;
                            var w = f.type, u = f.stateNode;
                            if (0 === (f.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === $4eecb6e629e760ea$var$Ri || !$4eecb6e629e760ea$var$Ri.has(u)))) {
                                f.flags |= 65536;
                                b &= -b;
                                f.lanes |= b;
                                var F = $4eecb6e629e760ea$var$Qi(f, h, b);
                                $4eecb6e629e760ea$var$ph(f, F);
                                break a;
                            }
                    }
                    f = f.return;
                }while (null !== f);
            }
            $4eecb6e629e760ea$var$Sk(c);
        } catch (na) {
            b = na;
            $4eecb6e629e760ea$var$Y === c && null !== c && ($4eecb6e629e760ea$var$Y = c = c.return);
            continue;
        }
        break;
    }while (1);
}
function $4eecb6e629e760ea$var$Jk() {
    var a = $4eecb6e629e760ea$var$mk.current;
    $4eecb6e629e760ea$var$mk.current = $4eecb6e629e760ea$var$Rh;
    return null === a ? $4eecb6e629e760ea$var$Rh : a;
}
function $4eecb6e629e760ea$var$tj() {
    if (0 === $4eecb6e629e760ea$var$T || 3 === $4eecb6e629e760ea$var$T || 2 === $4eecb6e629e760ea$var$T) $4eecb6e629e760ea$var$T = 4;
    null === $4eecb6e629e760ea$var$Q || 0 === ($4eecb6e629e760ea$var$rh & 268435455) && 0 === ($4eecb6e629e760ea$var$qk & 268435455) || $4eecb6e629e760ea$var$Ck($4eecb6e629e760ea$var$Q, $4eecb6e629e760ea$var$Z);
}
function $4eecb6e629e760ea$var$Ik(a, b) {
    var c = $4eecb6e629e760ea$var$K;
    $4eecb6e629e760ea$var$K |= 2;
    var d = $4eecb6e629e760ea$var$Jk();
    if ($4eecb6e629e760ea$var$Q !== a || $4eecb6e629e760ea$var$Z !== b) $4eecb6e629e760ea$var$uk = null, $4eecb6e629e760ea$var$Kk(a, b);
    for(;;)try {
        $4eecb6e629e760ea$var$Tk();
        break;
    } catch (e) {
        $4eecb6e629e760ea$var$Mk(a, e);
    }
    $4eecb6e629e760ea$var$$g();
    $4eecb6e629e760ea$var$K = c;
    $4eecb6e629e760ea$var$mk.current = d;
    if (null !== $4eecb6e629e760ea$var$Y) throw Error($4eecb6e629e760ea$var$p(261));
    $4eecb6e629e760ea$var$Q = null;
    $4eecb6e629e760ea$var$Z = 0;
    return $4eecb6e629e760ea$var$T;
}
function $4eecb6e629e760ea$var$Tk() {
    for(; null !== $4eecb6e629e760ea$var$Y;)$4eecb6e629e760ea$var$Uk($4eecb6e629e760ea$var$Y);
}
function $4eecb6e629e760ea$var$Lk() {
    for(; null !== $4eecb6e629e760ea$var$Y && !$4eecb6e629e760ea$var$cc();)$4eecb6e629e760ea$var$Uk($4eecb6e629e760ea$var$Y);
}
function $4eecb6e629e760ea$var$Uk(a) {
    var b = $4eecb6e629e760ea$var$Vk(a.alternate, a, $4eecb6e629e760ea$var$fj);
    a.memoizedProps = a.pendingProps;
    null === b ? $4eecb6e629e760ea$var$Sk(a) : $4eecb6e629e760ea$var$Y = b;
    $4eecb6e629e760ea$var$nk.current = null;
}
function $4eecb6e629e760ea$var$Sk(a) {
    var b = a;
    do {
        var c = b.alternate;
        a = b.return;
        if (0 === (b.flags & 32768)) {
            if (c = $4eecb6e629e760ea$var$Ej(c, b, $4eecb6e629e760ea$var$fj), null !== c) {
                $4eecb6e629e760ea$var$Y = c;
                return;
            }
        } else {
            c = $4eecb6e629e760ea$var$Ij(c, b);
            if (null !== c) {
                c.flags &= 32767;
                $4eecb6e629e760ea$var$Y = c;
                return;
            }
            if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
            else {
                $4eecb6e629e760ea$var$T = 6;
                $4eecb6e629e760ea$var$Y = null;
                return;
            }
        }
        b = b.sibling;
        if (null !== b) {
            $4eecb6e629e760ea$var$Y = b;
            return;
        }
        $4eecb6e629e760ea$var$Y = b = a;
    }while (null !== b);
    0 === $4eecb6e629e760ea$var$T && ($4eecb6e629e760ea$var$T = 5);
}
function $4eecb6e629e760ea$var$Pk(a, b, c) {
    var d = $4eecb6e629e760ea$var$C, e = $4eecb6e629e760ea$var$ok.transition;
    try {
        $4eecb6e629e760ea$var$ok.transition = null, $4eecb6e629e760ea$var$C = 1, $4eecb6e629e760ea$var$Wk(a, b, c, d);
    } finally{
        $4eecb6e629e760ea$var$ok.transition = e, $4eecb6e629e760ea$var$C = d;
    }
    return null;
}
function $4eecb6e629e760ea$var$Wk(a, b, c, d) {
    do $4eecb6e629e760ea$var$Hk();
    while (null !== $4eecb6e629e760ea$var$wk);
    if (0 !== ($4eecb6e629e760ea$var$K & 6)) throw Error($4eecb6e629e760ea$var$p(327));
    c = a.finishedWork;
    var e = a.finishedLanes;
    if (null === c) return null;
    a.finishedWork = null;
    a.finishedLanes = 0;
    if (c === a.current) throw Error($4eecb6e629e760ea$var$p(177));
    a.callbackNode = null;
    a.callbackPriority = 0;
    var f = c.lanes | c.childLanes;
    $4eecb6e629e760ea$var$Bc(a, f);
    a === $4eecb6e629e760ea$var$Q && ($4eecb6e629e760ea$var$Y = $4eecb6e629e760ea$var$Q = null, $4eecb6e629e760ea$var$Z = 0);
    0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || $4eecb6e629e760ea$var$vk || ($4eecb6e629e760ea$var$vk = !0, $4eecb6e629e760ea$var$Fk($4eecb6e629e760ea$var$hc, function() {
        $4eecb6e629e760ea$var$Hk();
        return null;
    }));
    f = 0 !== (c.flags & 15990);
    if (0 !== (c.subtreeFlags & 15990) || f) {
        f = $4eecb6e629e760ea$var$ok.transition;
        $4eecb6e629e760ea$var$ok.transition = null;
        var g = $4eecb6e629e760ea$var$C;
        $4eecb6e629e760ea$var$C = 1;
        var h = $4eecb6e629e760ea$var$K;
        $4eecb6e629e760ea$var$K |= 4;
        $4eecb6e629e760ea$var$nk.current = null;
        $4eecb6e629e760ea$var$Oj(a, c);
        $4eecb6e629e760ea$var$dk(c, a);
        $4eecb6e629e760ea$var$Oe($4eecb6e629e760ea$var$Df);
        $4eecb6e629e760ea$var$dd = !!$4eecb6e629e760ea$var$Cf;
        $4eecb6e629e760ea$var$Df = $4eecb6e629e760ea$var$Cf = null;
        a.current = c;
        $4eecb6e629e760ea$var$hk(c, a, e);
        $4eecb6e629e760ea$var$dc();
        $4eecb6e629e760ea$var$K = h;
        $4eecb6e629e760ea$var$C = g;
        $4eecb6e629e760ea$var$ok.transition = f;
    } else a.current = c;
    $4eecb6e629e760ea$var$vk && ($4eecb6e629e760ea$var$vk = !1, $4eecb6e629e760ea$var$wk = a, $4eecb6e629e760ea$var$xk = e);
    f = a.pendingLanes;
    0 === f && ($4eecb6e629e760ea$var$Ri = null);
    $4eecb6e629e760ea$var$mc(c.stateNode, d);
    $4eecb6e629e760ea$var$Dk(a, $4eecb6e629e760ea$var$B());
    if (null !== b) for(d = a.onRecoverableError, c = 0; c < b.length; c++)e = b[c], d(e.value, {
        componentStack: e.stack,
        digest: e.digest
    });
    if ($4eecb6e629e760ea$var$Oi) throw $4eecb6e629e760ea$var$Oi = !1, a = $4eecb6e629e760ea$var$Pi, $4eecb6e629e760ea$var$Pi = null, a;
    0 !== ($4eecb6e629e760ea$var$xk & 1) && 0 !== a.tag && $4eecb6e629e760ea$var$Hk();
    f = a.pendingLanes;
    0 !== (f & 1) ? a === $4eecb6e629e760ea$var$zk ? $4eecb6e629e760ea$var$yk++ : ($4eecb6e629e760ea$var$yk = 0, $4eecb6e629e760ea$var$zk = a) : $4eecb6e629e760ea$var$yk = 0;
    $4eecb6e629e760ea$var$jg();
    return null;
}
function $4eecb6e629e760ea$var$Hk() {
    if (null !== $4eecb6e629e760ea$var$wk) {
        var a = $4eecb6e629e760ea$var$Dc($4eecb6e629e760ea$var$xk), b = $4eecb6e629e760ea$var$ok.transition, c = $4eecb6e629e760ea$var$C;
        try {
            $4eecb6e629e760ea$var$ok.transition = null;
            $4eecb6e629e760ea$var$C = 16 > a ? 16 : a;
            if (null === $4eecb6e629e760ea$var$wk) var d = !1;
            else {
                a = $4eecb6e629e760ea$var$wk;
                $4eecb6e629e760ea$var$wk = null;
                $4eecb6e629e760ea$var$xk = 0;
                if (0 !== ($4eecb6e629e760ea$var$K & 6)) throw Error($4eecb6e629e760ea$var$p(331));
                var e = $4eecb6e629e760ea$var$K;
                $4eecb6e629e760ea$var$K |= 4;
                for($4eecb6e629e760ea$var$V = a.current; null !== $4eecb6e629e760ea$var$V;){
                    var f = $4eecb6e629e760ea$var$V, g = f.child;
                    if (0 !== ($4eecb6e629e760ea$var$V.flags & 16)) {
                        var h = f.deletions;
                        if (null !== h) {
                            for(var k = 0; k < h.length; k++){
                                var l = h[k];
                                for($4eecb6e629e760ea$var$V = l; null !== $4eecb6e629e760ea$var$V;){
                                    var m = $4eecb6e629e760ea$var$V;
                                    switch(m.tag){
                                        case 0:
                                        case 11:
                                        case 15:
                                            $4eecb6e629e760ea$var$Pj(8, m, f);
                                    }
                                    var q = m.child;
                                    if (null !== q) q.return = m, $4eecb6e629e760ea$var$V = q;
                                    else for(; null !== $4eecb6e629e760ea$var$V;){
                                        m = $4eecb6e629e760ea$var$V;
                                        var r = m.sibling, y = m.return;
                                        $4eecb6e629e760ea$var$Sj(m);
                                        if (m === l) {
                                            $4eecb6e629e760ea$var$V = null;
                                            break;
                                        }
                                        if (null !== r) {
                                            r.return = y;
                                            $4eecb6e629e760ea$var$V = r;
                                            break;
                                        }
                                        $4eecb6e629e760ea$var$V = y;
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
                            $4eecb6e629e760ea$var$V = f;
                        }
                    }
                    if (0 !== (f.subtreeFlags & 2064) && null !== g) g.return = f, $4eecb6e629e760ea$var$V = g;
                    else b: for(; null !== $4eecb6e629e760ea$var$V;){
                        f = $4eecb6e629e760ea$var$V;
                        if (0 !== (f.flags & 2048)) switch(f.tag){
                            case 0:
                            case 11:
                            case 15:
                                $4eecb6e629e760ea$var$Pj(9, f, f.return);
                        }
                        var x = f.sibling;
                        if (null !== x) {
                            x.return = f.return;
                            $4eecb6e629e760ea$var$V = x;
                            break b;
                        }
                        $4eecb6e629e760ea$var$V = f.return;
                    }
                }
                var w = a.current;
                for($4eecb6e629e760ea$var$V = w; null !== $4eecb6e629e760ea$var$V;){
                    g = $4eecb6e629e760ea$var$V;
                    var u = g.child;
                    if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, $4eecb6e629e760ea$var$V = u;
                    else b: for(g = w; null !== $4eecb6e629e760ea$var$V;){
                        h = $4eecb6e629e760ea$var$V;
                        if (0 !== (h.flags & 2048)) try {
                            switch(h.tag){
                                case 0:
                                case 11:
                                case 15:
                                    $4eecb6e629e760ea$var$Qj(9, h);
                            }
                        } catch (na) {
                            $4eecb6e629e760ea$var$W(h, h.return, na);
                        }
                        if (h === g) {
                            $4eecb6e629e760ea$var$V = null;
                            break b;
                        }
                        var F = h.sibling;
                        if (null !== F) {
                            F.return = h.return;
                            $4eecb6e629e760ea$var$V = F;
                            break b;
                        }
                        $4eecb6e629e760ea$var$V = h.return;
                    }
                }
                $4eecb6e629e760ea$var$K = e;
                $4eecb6e629e760ea$var$jg();
                if ($4eecb6e629e760ea$var$lc && "function" === typeof $4eecb6e629e760ea$var$lc.onPostCommitFiberRoot) try {
                    $4eecb6e629e760ea$var$lc.onPostCommitFiberRoot($4eecb6e629e760ea$var$kc, a);
                } catch (na) {}
                d = !0;
            }
            return d;
        } finally{
            $4eecb6e629e760ea$var$C = c, $4eecb6e629e760ea$var$ok.transition = b;
        }
    }
    return !1;
}
function $4eecb6e629e760ea$var$Xk(a, b, c) {
    b = $4eecb6e629e760ea$var$Ji(c, b);
    b = $4eecb6e629e760ea$var$Ni(a, b, 1);
    a = $4eecb6e629e760ea$var$nh(a, b, 1);
    b = $4eecb6e629e760ea$var$R();
    null !== a && ($4eecb6e629e760ea$var$Ac(a, 1, b), $4eecb6e629e760ea$var$Dk(a, b));
}
function $4eecb6e629e760ea$var$W(a, b, c) {
    if (3 === a.tag) $4eecb6e629e760ea$var$Xk(a, a, c);
    else for(; null !== b;){
        if (3 === b.tag) {
            $4eecb6e629e760ea$var$Xk(b, a, c);
            break;
        } else if (1 === b.tag) {
            var d = b.stateNode;
            if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === $4eecb6e629e760ea$var$Ri || !$4eecb6e629e760ea$var$Ri.has(d))) {
                a = $4eecb6e629e760ea$var$Ji(c, a);
                a = $4eecb6e629e760ea$var$Qi(b, a, 1);
                b = $4eecb6e629e760ea$var$nh(b, a, 1);
                a = $4eecb6e629e760ea$var$R();
                null !== b && ($4eecb6e629e760ea$var$Ac(b, 1, a), $4eecb6e629e760ea$var$Dk(b, a));
                break;
            }
        }
        b = b.return;
    }
}
function $4eecb6e629e760ea$var$Ti(a, b, c) {
    var d = a.pingCache;
    null !== d && d.delete(b);
    b = $4eecb6e629e760ea$var$R();
    a.pingedLanes |= a.suspendedLanes & c;
    $4eecb6e629e760ea$var$Q === a && ($4eecb6e629e760ea$var$Z & c) === c && (4 === $4eecb6e629e760ea$var$T || 3 === $4eecb6e629e760ea$var$T && ($4eecb6e629e760ea$var$Z & 130023424) === $4eecb6e629e760ea$var$Z && 500 > $4eecb6e629e760ea$var$B() - $4eecb6e629e760ea$var$fk ? $4eecb6e629e760ea$var$Kk(a, 0) : $4eecb6e629e760ea$var$rk |= c);
    $4eecb6e629e760ea$var$Dk(a, b);
}
function $4eecb6e629e760ea$var$Yk(a, b) {
    0 === b && (0 === (a.mode & 1) ? b = 1 : (b = $4eecb6e629e760ea$var$sc, $4eecb6e629e760ea$var$sc <<= 1, 0 === ($4eecb6e629e760ea$var$sc & 130023424) && ($4eecb6e629e760ea$var$sc = 4194304)));
    var c = $4eecb6e629e760ea$var$R();
    a = $4eecb6e629e760ea$var$ih(a, b);
    null !== a && ($4eecb6e629e760ea$var$Ac(a, b, c), $4eecb6e629e760ea$var$Dk(a, c));
}
function $4eecb6e629e760ea$var$uj(a) {
    var b = a.memoizedState, c = 0;
    null !== b && (c = b.retryLane);
    $4eecb6e629e760ea$var$Yk(a, c);
}
function $4eecb6e629e760ea$var$bk(a, b) {
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
            throw Error($4eecb6e629e760ea$var$p(314));
    }
    null !== d && d.delete(b);
    $4eecb6e629e760ea$var$Yk(a, c);
}
var $4eecb6e629e760ea$var$Vk;
$4eecb6e629e760ea$var$Vk = function(a, b, c) {
    if (null !== a) {
        if (a.memoizedProps !== b.pendingProps || $4eecb6e629e760ea$var$Wf.current) $4eecb6e629e760ea$var$dh = !0;
        else {
            if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return $4eecb6e629e760ea$var$dh = !1, $4eecb6e629e760ea$var$yj(a, b, c);
            $4eecb6e629e760ea$var$dh = 0 !== (a.flags & 131072) ? !0 : !1;
        }
    } else $4eecb6e629e760ea$var$dh = !1, $4eecb6e629e760ea$var$I && 0 !== (b.flags & 1048576) && $4eecb6e629e760ea$var$ug(b, $4eecb6e629e760ea$var$ng, b.index);
    b.lanes = 0;
    switch(b.tag){
        case 2:
            var d = b.type;
            $4eecb6e629e760ea$var$ij(a, b);
            a = b.pendingProps;
            var e = $4eecb6e629e760ea$var$Yf(b, $4eecb6e629e760ea$var$H.current);
            $4eecb6e629e760ea$var$ch(b, c);
            e = $4eecb6e629e760ea$var$Nh(null, b, d, a, e, c);
            var f = $4eecb6e629e760ea$var$Sh();
            b.flags |= 1;
            "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, $4eecb6e629e760ea$var$Zf(d) ? (f = !0, $4eecb6e629e760ea$var$cg(b)) : f = !1, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, $4eecb6e629e760ea$var$kh(b), e.updater = $4eecb6e629e760ea$var$Ei, b.stateNode = e, e._reactInternals = b, $4eecb6e629e760ea$var$Ii(b, d, a, c), b = $4eecb6e629e760ea$var$jj(null, b, d, !0, f, c)) : (b.tag = 0, $4eecb6e629e760ea$var$I && f && $4eecb6e629e760ea$var$vg(b), $4eecb6e629e760ea$var$Xi(null, b, e, c), b = b.child);
            return b;
        case 16:
            d = b.elementType;
            a: {
                $4eecb6e629e760ea$var$ij(a, b);
                a = b.pendingProps;
                e = d._init;
                d = e(d._payload);
                b.type = d;
                e = b.tag = $4eecb6e629e760ea$var$Zk(d);
                a = $4eecb6e629e760ea$var$Ci(d, a);
                switch(e){
                    case 0:
                        b = $4eecb6e629e760ea$var$cj(null, b, d, a, c);
                        break a;
                    case 1:
                        b = $4eecb6e629e760ea$var$hj(null, b, d, a, c);
                        break a;
                    case 11:
                        b = $4eecb6e629e760ea$var$Yi(null, b, d, a, c);
                        break a;
                    case 14:
                        b = $4eecb6e629e760ea$var$$i(null, b, d, $4eecb6e629e760ea$var$Ci(d.type, a), c);
                        break a;
                }
                throw Error($4eecb6e629e760ea$var$p(306, d, ""));
            }
            return b;
        case 0:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : $4eecb6e629e760ea$var$Ci(d, e), $4eecb6e629e760ea$var$cj(a, b, d, e, c);
        case 1:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : $4eecb6e629e760ea$var$Ci(d, e), $4eecb6e629e760ea$var$hj(a, b, d, e, c);
        case 3:
            a: {
                $4eecb6e629e760ea$var$kj(b);
                if (null === a) throw Error($4eecb6e629e760ea$var$p(387));
                d = b.pendingProps;
                f = b.memoizedState;
                e = f.element;
                $4eecb6e629e760ea$var$lh(a, b);
                $4eecb6e629e760ea$var$qh(b, d, null, c);
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
                        e = $4eecb6e629e760ea$var$Ji(Error($4eecb6e629e760ea$var$p(423)), b);
                        b = $4eecb6e629e760ea$var$lj(a, b, d, c, e);
                        break a;
                    } else if (d !== e) {
                        e = $4eecb6e629e760ea$var$Ji(Error($4eecb6e629e760ea$var$p(424)), b);
                        b = $4eecb6e629e760ea$var$lj(a, b, d, c, e);
                        break a;
                    } else for($4eecb6e629e760ea$var$yg = $4eecb6e629e760ea$var$Lf(b.stateNode.containerInfo.firstChild), $4eecb6e629e760ea$var$xg = b, $4eecb6e629e760ea$var$I = !0, $4eecb6e629e760ea$var$zg = null, c = $4eecb6e629e760ea$var$Vg(b, null, d, c), b.child = c; c;)c.flags = c.flags & -3 | 4096, c = c.sibling;
                } else {
                    $4eecb6e629e760ea$var$Ig();
                    if (d === e) {
                        b = $4eecb6e629e760ea$var$Zi(a, b, c);
                        break a;
                    }
                    $4eecb6e629e760ea$var$Xi(a, b, d, c);
                }
                b = b.child;
            }
            return b;
        case 5:
            return $4eecb6e629e760ea$var$Ah(b), null === a && $4eecb6e629e760ea$var$Eg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, $4eecb6e629e760ea$var$Ef(d, e) ? g = null : null !== f && $4eecb6e629e760ea$var$Ef(d, f) && (b.flags |= 32), $4eecb6e629e760ea$var$gj(a, b), $4eecb6e629e760ea$var$Xi(a, b, g, c), b.child;
        case 6:
            return null === a && $4eecb6e629e760ea$var$Eg(b), null;
        case 13:
            return $4eecb6e629e760ea$var$oj(a, b, c);
        case 4:
            return $4eecb6e629e760ea$var$yh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = $4eecb6e629e760ea$var$Ug(b, null, d, c) : $4eecb6e629e760ea$var$Xi(a, b, d, c), b.child;
        case 11:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : $4eecb6e629e760ea$var$Ci(d, e), $4eecb6e629e760ea$var$Yi(a, b, d, e, c);
        case 7:
            return $4eecb6e629e760ea$var$Xi(a, b, b.pendingProps, c), b.child;
        case 8:
            return $4eecb6e629e760ea$var$Xi(a, b, b.pendingProps.children, c), b.child;
        case 12:
            return $4eecb6e629e760ea$var$Xi(a, b, b.pendingProps.children, c), b.child;
        case 10:
            a: {
                d = b.type._context;
                e = b.pendingProps;
                f = b.memoizedProps;
                g = e.value;
                $4eecb6e629e760ea$var$G($4eecb6e629e760ea$var$Wg, d._currentValue);
                d._currentValue = g;
                if (null !== f) {
                    if ($4eecb6e629e760ea$var$He(f.value, g)) {
                        if (f.children === e.children && !$4eecb6e629e760ea$var$Wf.current) {
                            b = $4eecb6e629e760ea$var$Zi(a, b, c);
                            break a;
                        }
                    } else for(f = b.child, null !== f && (f.return = b); null !== f;){
                        var h = f.dependencies;
                        if (null !== h) {
                            g = f.child;
                            for(var k = h.firstContext; null !== k;){
                                if (k.context === d) {
                                    if (1 === f.tag) {
                                        k = $4eecb6e629e760ea$var$mh(-1, c & -c);
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
                                    $4eecb6e629e760ea$var$bh(f.return, c, b);
                                    h.lanes |= c;
                                    break;
                                }
                                k = k.next;
                            }
                        } else if (10 === f.tag) g = f.type === b.type ? null : f.child;
                        else if (18 === f.tag) {
                            g = f.return;
                            if (null === g) throw Error($4eecb6e629e760ea$var$p(341));
                            g.lanes |= c;
                            h = g.alternate;
                            null !== h && (h.lanes |= c);
                            $4eecb6e629e760ea$var$bh(g, c, b);
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
                $4eecb6e629e760ea$var$Xi(a, b, e.children, c);
                b = b.child;
            }
            return b;
        case 9:
            return e = b.type, d = b.pendingProps.children, $4eecb6e629e760ea$var$ch(b, c), e = $4eecb6e629e760ea$var$eh(e), d = d(e), b.flags |= 1, $4eecb6e629e760ea$var$Xi(a, b, d, c), b.child;
        case 14:
            return d = b.type, e = $4eecb6e629e760ea$var$Ci(d, b.pendingProps), e = $4eecb6e629e760ea$var$Ci(d.type, e), $4eecb6e629e760ea$var$$i(a, b, d, e, c);
        case 15:
            return $4eecb6e629e760ea$var$bj(a, b, b.type, b.pendingProps, c);
        case 17:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : $4eecb6e629e760ea$var$Ci(d, e), $4eecb6e629e760ea$var$ij(a, b), b.tag = 1, $4eecb6e629e760ea$var$Zf(d) ? (a = !0, $4eecb6e629e760ea$var$cg(b)) : a = !1, $4eecb6e629e760ea$var$ch(b, c), $4eecb6e629e760ea$var$Gi(b, d, e), $4eecb6e629e760ea$var$Ii(b, d, e, c), $4eecb6e629e760ea$var$jj(null, b, d, !0, a, c);
        case 19:
            return $4eecb6e629e760ea$var$xj(a, b, c);
        case 22:
            return $4eecb6e629e760ea$var$dj(a, b, c);
    }
    throw Error($4eecb6e629e760ea$var$p(156, b.tag));
};
function $4eecb6e629e760ea$var$Fk(a, b) {
    return $4eecb6e629e760ea$var$ac(a, b);
}
function $4eecb6e629e760ea$var$$k(a, b, c, d) {
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
function $4eecb6e629e760ea$var$Bg(a, b, c, d) {
    return new $4eecb6e629e760ea$var$$k(a, b, c, d);
}
function $4eecb6e629e760ea$var$aj(a) {
    a = a.prototype;
    return !(!a || !a.isReactComponent);
}
function $4eecb6e629e760ea$var$Zk(a) {
    if ("function" === typeof a) return $4eecb6e629e760ea$var$aj(a) ? 1 : 0;
    if (void 0 !== a && null !== a) {
        a = a.$$typeof;
        if (a === $4eecb6e629e760ea$var$Da) return 11;
        if (a === $4eecb6e629e760ea$var$Ga) return 14;
    }
    return 2;
}
function $4eecb6e629e760ea$var$Pg(a, b) {
    var c = a.alternate;
    null === c ? (c = $4eecb6e629e760ea$var$Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
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
function $4eecb6e629e760ea$var$Rg(a, b, c, d, e, f) {
    var g = 2;
    d = a;
    if ("function" === typeof a) $4eecb6e629e760ea$var$aj(a) && (g = 1);
    else if ("string" === typeof a) g = 5;
    else a: switch(a){
        case $4eecb6e629e760ea$var$ya:
            return $4eecb6e629e760ea$var$Tg(c.children, e, f, b);
        case $4eecb6e629e760ea$var$za:
            g = 8;
            e |= 8;
            break;
        case $4eecb6e629e760ea$var$Aa:
            return a = $4eecb6e629e760ea$var$Bg(12, c, b, e | 2), a.elementType = $4eecb6e629e760ea$var$Aa, a.lanes = f, a;
        case $4eecb6e629e760ea$var$Ea:
            return a = $4eecb6e629e760ea$var$Bg(13, c, b, e), a.elementType = $4eecb6e629e760ea$var$Ea, a.lanes = f, a;
        case $4eecb6e629e760ea$var$Fa:
            return a = $4eecb6e629e760ea$var$Bg(19, c, b, e), a.elementType = $4eecb6e629e760ea$var$Fa, a.lanes = f, a;
        case $4eecb6e629e760ea$var$Ia:
            return $4eecb6e629e760ea$var$pj(c, e, f, b);
        default:
            if ("object" === typeof a && null !== a) switch(a.$$typeof){
                case $4eecb6e629e760ea$var$Ba:
                    g = 10;
                    break a;
                case $4eecb6e629e760ea$var$Ca:
                    g = 9;
                    break a;
                case $4eecb6e629e760ea$var$Da:
                    g = 11;
                    break a;
                case $4eecb6e629e760ea$var$Ga:
                    g = 14;
                    break a;
                case $4eecb6e629e760ea$var$Ha:
                    g = 16;
                    d = null;
                    break a;
            }
            throw Error($4eecb6e629e760ea$var$p(130, null == a ? a : typeof a, ""));
    }
    b = $4eecb6e629e760ea$var$Bg(g, c, b, e);
    b.elementType = a;
    b.type = d;
    b.lanes = f;
    return b;
}
function $4eecb6e629e760ea$var$Tg(a, b, c, d) {
    a = $4eecb6e629e760ea$var$Bg(7, a, d, b);
    a.lanes = c;
    return a;
}
function $4eecb6e629e760ea$var$pj(a, b, c, d) {
    a = $4eecb6e629e760ea$var$Bg(22, a, d, b);
    a.elementType = $4eecb6e629e760ea$var$Ia;
    a.lanes = c;
    a.stateNode = {
        isHidden: !1
    };
    return a;
}
function $4eecb6e629e760ea$var$Qg(a, b, c) {
    a = $4eecb6e629e760ea$var$Bg(6, a, null, b);
    a.lanes = c;
    return a;
}
function $4eecb6e629e760ea$var$Sg(a, b, c) {
    b = $4eecb6e629e760ea$var$Bg(4, null !== a.children ? a.children : [], a.key, b);
    b.lanes = c;
    b.stateNode = {
        containerInfo: a.containerInfo,
        pendingChildren: null,
        implementation: a.implementation
    };
    return b;
}
function $4eecb6e629e760ea$var$al(a, b, c, d, e) {
    this.tag = b;
    this.containerInfo = a;
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
    this.timeoutHandle = -1;
    this.callbackNode = this.pendingContext = this.context = null;
    this.callbackPriority = 0;
    this.eventTimes = $4eecb6e629e760ea$var$zc(0);
    this.expirationTimes = $4eecb6e629e760ea$var$zc(-1);
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
    this.entanglements = $4eecb6e629e760ea$var$zc(0);
    this.identifierPrefix = d;
    this.onRecoverableError = e;
    this.mutableSourceEagerHydrationData = null;
}
function $4eecb6e629e760ea$var$bl(a, b, c, d, e, f, g, h, k) {
    a = new $4eecb6e629e760ea$var$al(a, b, c, h, k);
    1 === b ? (b = 1, !0 === f && (b |= 8)) : b = 0;
    f = $4eecb6e629e760ea$var$Bg(3, null, null, b);
    a.current = f;
    f.stateNode = a;
    f.memoizedState = {
        element: d,
        isDehydrated: c,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    };
    $4eecb6e629e760ea$var$kh(f);
    return a;
}
function $4eecb6e629e760ea$var$cl(a, b, c) {
    var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return {
        $$typeof: $4eecb6e629e760ea$var$wa,
        key: null == d ? null : "" + d,
        children: a,
        containerInfo: b,
        implementation: c
    };
}
function $4eecb6e629e760ea$var$dl(a) {
    if (!a) return $4eecb6e629e760ea$var$Vf;
    a = a._reactInternals;
    a: {
        if ($4eecb6e629e760ea$var$Vb(a) !== a || 1 !== a.tag) throw Error($4eecb6e629e760ea$var$p(170));
        var b = a;
        do {
            switch(b.tag){
                case 3:
                    b = b.stateNode.context;
                    break a;
                case 1:
                    if ($4eecb6e629e760ea$var$Zf(b.type)) {
                        b = b.stateNode.__reactInternalMemoizedMergedChildContext;
                        break a;
                    }
            }
            b = b.return;
        }while (null !== b);
        throw Error($4eecb6e629e760ea$var$p(171));
    }
    if (1 === a.tag) {
        var c = a.type;
        if ($4eecb6e629e760ea$var$Zf(c)) return $4eecb6e629e760ea$var$bg(a, c, b);
    }
    return b;
}
function $4eecb6e629e760ea$var$el(a, b, c, d, e, f, g, h, k) {
    a = $4eecb6e629e760ea$var$bl(c, d, !0, a, e, f, g, h, k);
    a.context = $4eecb6e629e760ea$var$dl(null);
    c = a.current;
    d = $4eecb6e629e760ea$var$R();
    e = $4eecb6e629e760ea$var$yi(c);
    f = $4eecb6e629e760ea$var$mh(d, e);
    f.callback = void 0 !== b && null !== b ? b : null;
    $4eecb6e629e760ea$var$nh(c, f, e);
    a.current.lanes = e;
    $4eecb6e629e760ea$var$Ac(a, e, d);
    $4eecb6e629e760ea$var$Dk(a, d);
    return a;
}
function $4eecb6e629e760ea$var$fl(a, b, c, d) {
    var e = b.current, f = $4eecb6e629e760ea$var$R(), g = $4eecb6e629e760ea$var$yi(e);
    c = $4eecb6e629e760ea$var$dl(c);
    null === b.context ? b.context = c : b.pendingContext = c;
    b = $4eecb6e629e760ea$var$mh(f, g);
    b.payload = {
        element: a
    };
    d = void 0 === d ? null : d;
    null !== d && (b.callback = d);
    a = $4eecb6e629e760ea$var$nh(e, b, g);
    null !== a && ($4eecb6e629e760ea$var$gi(a, e, g, f), $4eecb6e629e760ea$var$oh(a, e, g));
    return g;
}
function $4eecb6e629e760ea$var$gl(a) {
    a = a.current;
    if (!a.child) return null;
    switch(a.child.tag){
        case 5:
            return a.child.stateNode;
        default:
            return a.child.stateNode;
    }
}
function $4eecb6e629e760ea$var$hl(a, b) {
    a = a.memoizedState;
    if (null !== a && null !== a.dehydrated) {
        var c = a.retryLane;
        a.retryLane = 0 !== c && c < b ? c : b;
    }
}
function $4eecb6e629e760ea$var$il(a, b) {
    $4eecb6e629e760ea$var$hl(a, b);
    (a = a.alternate) && $4eecb6e629e760ea$var$hl(a, b);
}
function $4eecb6e629e760ea$var$jl() {
    return null;
}
var $4eecb6e629e760ea$var$kl = "function" === typeof reportError ? reportError : function(a) {
    console.error(a);
};
function $4eecb6e629e760ea$var$ll(a) {
    this._internalRoot = a;
}
$4eecb6e629e760ea$var$ml.prototype.render = $4eecb6e629e760ea$var$ll.prototype.render = function(a) {
    var b = this._internalRoot;
    if (null === b) throw Error($4eecb6e629e760ea$var$p(409));
    $4eecb6e629e760ea$var$fl(a, b, null, null);
};
$4eecb6e629e760ea$var$ml.prototype.unmount = $4eecb6e629e760ea$var$ll.prototype.unmount = function() {
    var a = this._internalRoot;
    if (null !== a) {
        this._internalRoot = null;
        var b = a.containerInfo;
        $4eecb6e629e760ea$var$Rk(function() {
            $4eecb6e629e760ea$var$fl(null, a, null, null);
        });
        b[$4eecb6e629e760ea$var$uf] = null;
    }
};
function $4eecb6e629e760ea$var$ml(a) {
    this._internalRoot = a;
}
$4eecb6e629e760ea$var$ml.prototype.unstable_scheduleHydration = function(a) {
    if (a) {
        var b = $4eecb6e629e760ea$var$Hc();
        a = {
            blockedOn: null,
            target: a,
            priority: b
        };
        for(var c = 0; c < $4eecb6e629e760ea$var$Qc.length && 0 !== b && b < $4eecb6e629e760ea$var$Qc[c].priority; c++);
        $4eecb6e629e760ea$var$Qc.splice(c, 0, a);
        0 === c && $4eecb6e629e760ea$var$Vc(a);
    }
};
function $4eecb6e629e760ea$var$nl(a) {
    return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
}
function $4eecb6e629e760ea$var$ol(a) {
    return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}
function $4eecb6e629e760ea$var$pl() {}
function $4eecb6e629e760ea$var$ql(a, b, c, d, e) {
    if (e) {
        if ("function" === typeof d) {
            var f = d;
            d = function() {
                var a = $4eecb6e629e760ea$var$gl(g);
                f.call(a);
            };
        }
        var g = $4eecb6e629e760ea$var$el(b, d, a, 0, null, !1, !1, "", $4eecb6e629e760ea$var$pl);
        a._reactRootContainer = g;
        a[$4eecb6e629e760ea$var$uf] = g.current;
        $4eecb6e629e760ea$var$sf(8 === a.nodeType ? a.parentNode : a);
        $4eecb6e629e760ea$var$Rk();
        return g;
    }
    for(; e = a.lastChild;)a.removeChild(e);
    if ("function" === typeof d) {
        var h = d;
        d = function() {
            var a = $4eecb6e629e760ea$var$gl(k);
            h.call(a);
        };
    }
    var k = $4eecb6e629e760ea$var$bl(a, 0, !1, null, null, !1, !1, "", $4eecb6e629e760ea$var$pl);
    a._reactRootContainer = k;
    a[$4eecb6e629e760ea$var$uf] = k.current;
    $4eecb6e629e760ea$var$sf(8 === a.nodeType ? a.parentNode : a);
    $4eecb6e629e760ea$var$Rk(function() {
        $4eecb6e629e760ea$var$fl(b, k, c, d);
    });
    return k;
}
function $4eecb6e629e760ea$var$rl(a, b, c, d, e) {
    var f = c._reactRootContainer;
    if (f) {
        var g = f;
        if ("function" === typeof e) {
            var h = e;
            e = function() {
                var a = $4eecb6e629e760ea$var$gl(g);
                h.call(a);
            };
        }
        $4eecb6e629e760ea$var$fl(b, g, a, e);
    } else g = $4eecb6e629e760ea$var$ql(c, b, a, e, d);
    return $4eecb6e629e760ea$var$gl(g);
}
$4eecb6e629e760ea$var$Ec = function(a) {
    switch(a.tag){
        case 3:
            var b = a.stateNode;
            if (b.current.memoizedState.isDehydrated) {
                var c = $4eecb6e629e760ea$var$tc(b.pendingLanes);
                0 !== c && ($4eecb6e629e760ea$var$Cc(b, c | 1), $4eecb6e629e760ea$var$Dk(b, $4eecb6e629e760ea$var$B()), 0 === ($4eecb6e629e760ea$var$K & 6) && ($4eecb6e629e760ea$var$Gj = $4eecb6e629e760ea$var$B() + 500, $4eecb6e629e760ea$var$jg()));
            }
            break;
        case 13:
            $4eecb6e629e760ea$var$Rk(function() {
                var b = $4eecb6e629e760ea$var$ih(a, 1);
                if (null !== b) {
                    var c = $4eecb6e629e760ea$var$R();
                    $4eecb6e629e760ea$var$gi(b, a, 1, c);
                }
            }), $4eecb6e629e760ea$var$il(a, 1);
    }
};
$4eecb6e629e760ea$var$Fc = function(a) {
    if (13 === a.tag) {
        var b = $4eecb6e629e760ea$var$ih(a, 134217728);
        if (null !== b) {
            var c = $4eecb6e629e760ea$var$R();
            $4eecb6e629e760ea$var$gi(b, a, 134217728, c);
        }
        $4eecb6e629e760ea$var$il(a, 134217728);
    }
};
$4eecb6e629e760ea$var$Gc = function(a) {
    if (13 === a.tag) {
        var b = $4eecb6e629e760ea$var$yi(a), c = $4eecb6e629e760ea$var$ih(a, b);
        if (null !== c) {
            var d = $4eecb6e629e760ea$var$R();
            $4eecb6e629e760ea$var$gi(c, a, b, d);
        }
        $4eecb6e629e760ea$var$il(a, b);
    }
};
$4eecb6e629e760ea$var$Hc = function() {
    return $4eecb6e629e760ea$var$C;
};
$4eecb6e629e760ea$var$Ic = function(a, b) {
    var c = $4eecb6e629e760ea$var$C;
    try {
        return $4eecb6e629e760ea$var$C = a, b();
    } finally{
        $4eecb6e629e760ea$var$C = c;
    }
};
$4eecb6e629e760ea$var$yb = function(a, b, c) {
    switch(b){
        case "input":
            $4eecb6e629e760ea$var$bb(a, c);
            b = c.name;
            if ("radio" === c.type && null != b) {
                for(c = a; c.parentNode;)c = c.parentNode;
                c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
                for(b = 0; b < c.length; b++){
                    var d = c[b];
                    if (d !== a && d.form === a.form) {
                        var e = $4eecb6e629e760ea$var$Db(d);
                        if (!e) throw Error($4eecb6e629e760ea$var$p(90));
                        $4eecb6e629e760ea$var$Wa(d);
                        $4eecb6e629e760ea$var$bb(d, e);
                    }
                }
            }
            break;
        case "textarea":
            $4eecb6e629e760ea$var$ib(a, c);
            break;
        case "select":
            b = c.value, null != b && $4eecb6e629e760ea$var$fb(a, !!c.multiple, b, !1);
    }
};
$4eecb6e629e760ea$var$Gb = $4eecb6e629e760ea$var$Qk;
$4eecb6e629e760ea$var$Hb = $4eecb6e629e760ea$var$Rk;
var $4eecb6e629e760ea$var$sl = {
    usingClientEntryPoint: !1,
    Events: [
        $4eecb6e629e760ea$var$Cb,
        $4eecb6e629e760ea$var$ue,
        $4eecb6e629e760ea$var$Db,
        $4eecb6e629e760ea$var$Eb,
        $4eecb6e629e760ea$var$Fb,
        $4eecb6e629e760ea$var$Qk
    ]
}, $4eecb6e629e760ea$var$tl = {
    findFiberByHostInstance: $4eecb6e629e760ea$var$Wc,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
};
var $4eecb6e629e760ea$var$ul = {
    bundleType: $4eecb6e629e760ea$var$tl.bundleType,
    version: $4eecb6e629e760ea$var$tl.version,
    rendererPackageName: $4eecb6e629e760ea$var$tl.rendererPackageName,
    rendererConfig: $4eecb6e629e760ea$var$tl.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: $4eecb6e629e760ea$var$ua.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(a) {
        a = $4eecb6e629e760ea$var$Zb(a);
        return null === a ? null : a.stateNode;
    },
    findFiberByHostInstance: $4eecb6e629e760ea$var$tl.findFiberByHostInstance || $4eecb6e629e760ea$var$jl,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
    var $4eecb6e629e760ea$var$vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!$4eecb6e629e760ea$var$vl.isDisabled && $4eecb6e629e760ea$var$vl.supportsFiber) try {
        $4eecb6e629e760ea$var$kc = $4eecb6e629e760ea$var$vl.inject($4eecb6e629e760ea$var$ul), $4eecb6e629e760ea$var$lc = $4eecb6e629e760ea$var$vl;
    } catch (a) {}
}
$4eecb6e629e760ea$export$ae55be85d98224ed = $4eecb6e629e760ea$var$sl;
$4eecb6e629e760ea$export$d39a5bbd09211389 = function(a, b) {
    var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    if (!$4eecb6e629e760ea$var$nl(b)) throw Error($4eecb6e629e760ea$var$p(200));
    return $4eecb6e629e760ea$var$cl(a, b, null, c);
};
$4eecb6e629e760ea$export$882461b6382ed46c = function(a, b) {
    if (!$4eecb6e629e760ea$var$nl(a)) throw Error($4eecb6e629e760ea$var$p(299));
    var c = !1, d = "", e = $4eecb6e629e760ea$var$kl;
    null !== b && void 0 !== b && (!0 === b.unstable_strictMode && (c = !0), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
    b = $4eecb6e629e760ea$var$bl(a, 1, !1, null, null, c, !1, d, e);
    a[$4eecb6e629e760ea$var$uf] = b.current;
    $4eecb6e629e760ea$var$sf(8 === a.nodeType ? a.parentNode : a);
    return new $4eecb6e629e760ea$var$ll(b);
};
$4eecb6e629e760ea$export$466bfc07425424d5 = function(a) {
    if (null == a) return null;
    if (1 === a.nodeType) return a;
    var b = a._reactInternals;
    if (void 0 === b) {
        if ("function" === typeof a.render) throw Error($4eecb6e629e760ea$var$p(188));
        a = Object.keys(a).join(",");
        throw Error($4eecb6e629e760ea$var$p(268, a));
    }
    a = $4eecb6e629e760ea$var$Zb(b);
    a = null === a ? null : a.stateNode;
    return a;
};
$4eecb6e629e760ea$export$cd75ccfd720a3cd4 = function(a) {
    return $4eecb6e629e760ea$var$Rk(a);
};
$4eecb6e629e760ea$export$fa8d919ba61d84db = function(a, b, c) {
    if (!$4eecb6e629e760ea$var$ol(b)) throw Error($4eecb6e629e760ea$var$p(200));
    return $4eecb6e629e760ea$var$rl(null, a, b, !0, c);
};
$4eecb6e629e760ea$export$757ceba2d55c277e = function(a, b, c) {
    if (!$4eecb6e629e760ea$var$nl(a)) throw Error($4eecb6e629e760ea$var$p(405));
    var d = null != c && c.hydratedSources || null, e = !1, f = "", g = $4eecb6e629e760ea$var$kl;
    null !== c && void 0 !== c && (!0 === c.unstable_strictMode && (e = !0), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
    b = $4eecb6e629e760ea$var$el(b, null, a, 1, null != c ? c : null, e, !1, f, g);
    a[$4eecb6e629e760ea$var$uf] = b.current;
    $4eecb6e629e760ea$var$sf(a);
    if (d) for(a = 0; a < d.length; a++)c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [
        c,
        e
    ] : b.mutableSourceEagerHydrationData.push(c, e);
    return new $4eecb6e629e760ea$var$ml(b);
};
$4eecb6e629e760ea$export$b3890eb0ae9dca99 = function(a, b, c) {
    if (!$4eecb6e629e760ea$var$ol(b)) throw Error($4eecb6e629e760ea$var$p(200));
    return $4eecb6e629e760ea$var$rl(null, a, b, !1, c);
};
$4eecb6e629e760ea$export$502457920280e6be = function(a) {
    if (!$4eecb6e629e760ea$var$ol(a)) throw Error($4eecb6e629e760ea$var$p(40));
    return a._reactRootContainer ? ($4eecb6e629e760ea$var$Rk(function() {
        $4eecb6e629e760ea$var$rl(null, null, a, !1, function() {
            a._reactRootContainer = null;
            a[$4eecb6e629e760ea$var$uf] = null;
        });
    }), !0) : !1;
};
$4eecb6e629e760ea$export$c78a37762a8d58e1 = $4eecb6e629e760ea$var$Qk;
$4eecb6e629e760ea$export$dc54d992c10e8a18 = function(a, b, c, d) {
    if (!$4eecb6e629e760ea$var$ol(c)) throw Error($4eecb6e629e760ea$var$p(200));
    if (null == a || void 0 === a._reactInternals) throw Error($4eecb6e629e760ea$var$p(38));
    return $4eecb6e629e760ea$var$rl(a, b, c, !1, d);
};
$4eecb6e629e760ea$export$83d89fbfd8236492 = "18.3.1-next-f1338f8080-20240426";

});
parcelRegister("7XiEX", function(module, exports) {
"use strict";

module.exports = (parcelRequire("5FjwE"));

});
parcelRegister("5FjwE", function(module, exports) {

$parcel$export(module.exports, "unstable_now", function () { return $011083d4880ef116$export$c4744153514ff05d; }, function (v) { return $011083d4880ef116$export$c4744153514ff05d = v; });
$parcel$export(module.exports, "unstable_IdlePriority", function () { return $011083d4880ef116$export$3e506c1ccc9cc1a7; }, function (v) { return $011083d4880ef116$export$3e506c1ccc9cc1a7 = v; });
$parcel$export(module.exports, "unstable_ImmediatePriority", function () { return $011083d4880ef116$export$e26fe2ed2fa76875; }, function (v) { return $011083d4880ef116$export$e26fe2ed2fa76875 = v; });
$parcel$export(module.exports, "unstable_LowPriority", function () { return $011083d4880ef116$export$502329bbf4b505b1; }, function (v) { return $011083d4880ef116$export$502329bbf4b505b1 = v; });
$parcel$export(module.exports, "unstable_NormalPriority", function () { return $011083d4880ef116$export$6e3807111c4874c4; }, function (v) { return $011083d4880ef116$export$6e3807111c4874c4 = v; });
$parcel$export(module.exports, "unstable_Profiling", function () { return $011083d4880ef116$export$c27134553091fb3a; }, function (v) { return $011083d4880ef116$export$c27134553091fb3a = v; });
$parcel$export(module.exports, "unstable_UserBlockingPriority", function () { return $011083d4880ef116$export$33ee1acdc04fd2a2; }, function (v) { return $011083d4880ef116$export$33ee1acdc04fd2a2 = v; });
$parcel$export(module.exports, "unstable_cancelCallback", function () { return $011083d4880ef116$export$b00a404bbd5edef2; }, function (v) { return $011083d4880ef116$export$b00a404bbd5edef2 = v; });
$parcel$export(module.exports, "unstable_continueExecution", function () { return $011083d4880ef116$export$8352ce38b91d0c62; }, function (v) { return $011083d4880ef116$export$8352ce38b91d0c62 = v; });
$parcel$export(module.exports, "unstable_forceFrameRate", function () { return $011083d4880ef116$export$d66a1c1c77bd778b; }, function (v) { return $011083d4880ef116$export$d66a1c1c77bd778b = v; });
$parcel$export(module.exports, "unstable_getCurrentPriorityLevel", function () { return $011083d4880ef116$export$d3dfb8e4810cb555; }, function (v) { return $011083d4880ef116$export$d3dfb8e4810cb555 = v; });
$parcel$export(module.exports, "unstable_getFirstCallbackNode", function () { return $011083d4880ef116$export$839f9183b0465a69; }, function (v) { return $011083d4880ef116$export$839f9183b0465a69 = v; });
$parcel$export(module.exports, "unstable_next", function () { return $011083d4880ef116$export$72fdf0e06517287b; }, function (v) { return $011083d4880ef116$export$72fdf0e06517287b = v; });
$parcel$export(module.exports, "unstable_pauseExecution", function () { return $011083d4880ef116$export$4b844e58a3e414b4; }, function (v) { return $011083d4880ef116$export$4b844e58a3e414b4 = v; });
$parcel$export(module.exports, "unstable_requestPaint", function () { return $011083d4880ef116$export$816d2913ae6b83b1; }, function (v) { return $011083d4880ef116$export$816d2913ae6b83b1 = v; });
$parcel$export(module.exports, "unstable_runWithPriority", function () { return $011083d4880ef116$export$61bcfe829111a1d0; }, function (v) { return $011083d4880ef116$export$61bcfe829111a1d0 = v; });
$parcel$export(module.exports, "unstable_scheduleCallback", function () { return $011083d4880ef116$export$7ee8c9beb337bc3f; }, function (v) { return $011083d4880ef116$export$7ee8c9beb337bc3f = v; });
$parcel$export(module.exports, "unstable_shouldYield", function () { return $011083d4880ef116$export$b5836b71941fa3ed; }, function (v) { return $011083d4880ef116$export$b5836b71941fa3ed = v; });
$parcel$export(module.exports, "unstable_wrapCallback", function () { return $011083d4880ef116$export$cf845f2c119da08a; }, function (v) { return $011083d4880ef116$export$cf845f2c119da08a = v; });
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $011083d4880ef116$export$c4744153514ff05d;
var $011083d4880ef116$export$3e506c1ccc9cc1a7;
var $011083d4880ef116$export$e26fe2ed2fa76875;
var $011083d4880ef116$export$502329bbf4b505b1;
var $011083d4880ef116$export$6e3807111c4874c4;
var $011083d4880ef116$export$c27134553091fb3a;
var $011083d4880ef116$export$33ee1acdc04fd2a2;
var $011083d4880ef116$export$b00a404bbd5edef2;
var $011083d4880ef116$export$8352ce38b91d0c62;
var $011083d4880ef116$export$d66a1c1c77bd778b;
var $011083d4880ef116$export$d3dfb8e4810cb555;
var $011083d4880ef116$export$839f9183b0465a69;
var $011083d4880ef116$export$72fdf0e06517287b;
var $011083d4880ef116$export$4b844e58a3e414b4;
var $011083d4880ef116$export$816d2913ae6b83b1;
var $011083d4880ef116$export$61bcfe829111a1d0;
var $011083d4880ef116$export$7ee8c9beb337bc3f;
var $011083d4880ef116$export$b5836b71941fa3ed;
var $011083d4880ef116$export$cf845f2c119da08a;
"use strict";
function $011083d4880ef116$var$f(a, b) {
    var c = a.length;
    a.push(b);
    a: for(; 0 < c;){
        var d = c - 1 >>> 1, e = a[d];
        if (0 < $011083d4880ef116$var$g(e, b)) a[d] = b, a[c] = e, c = d;
        else break a;
    }
}
function $011083d4880ef116$var$h(a) {
    return 0 === a.length ? null : a[0];
}
function $011083d4880ef116$var$k(a) {
    if (0 === a.length) return null;
    var b = a[0], c = a.pop();
    if (c !== b) {
        a[0] = c;
        a: for(var d = 0, e = a.length, w = e >>> 1; d < w;){
            var m = 2 * (d + 1) - 1, C = a[m], n = m + 1, x = a[n];
            if (0 > $011083d4880ef116$var$g(C, c)) n < e && 0 > $011083d4880ef116$var$g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);
            else if (n < e && 0 > $011083d4880ef116$var$g(x, c)) a[d] = x, a[n] = c, d = n;
            else break a;
        }
    }
    return b;
}
function $011083d4880ef116$var$g(a, b) {
    var c = a.sortIndex - b.sortIndex;
    return 0 !== c ? c : a.id - b.id;
}
if ("object" === typeof performance && "function" === typeof performance.now) {
    var $011083d4880ef116$var$l = performance;
    $011083d4880ef116$export$c4744153514ff05d = function() {
        return $011083d4880ef116$var$l.now();
    };
} else {
    var $011083d4880ef116$var$p = Date, $011083d4880ef116$var$q = $011083d4880ef116$var$p.now();
    $011083d4880ef116$export$c4744153514ff05d = function() {
        return $011083d4880ef116$var$p.now() - $011083d4880ef116$var$q;
    };
}
var $011083d4880ef116$var$r = [], $011083d4880ef116$var$t = [], $011083d4880ef116$var$u = 1, $011083d4880ef116$var$v = null, $011083d4880ef116$var$y = 3, $011083d4880ef116$var$z = !1, $011083d4880ef116$var$A = !1, $011083d4880ef116$var$B = !1, $011083d4880ef116$var$D = "function" === typeof setTimeout ? setTimeout : null, $011083d4880ef116$var$E = "function" === typeof clearTimeout ? clearTimeout : null, $011083d4880ef116$var$F = "undefined" !== typeof setImmediate ? setImmediate : null;
"undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
function $011083d4880ef116$var$G(a) {
    for(var b = $011083d4880ef116$var$h($011083d4880ef116$var$t); null !== b;){
        if (null === b.callback) $011083d4880ef116$var$k($011083d4880ef116$var$t);
        else if (b.startTime <= a) $011083d4880ef116$var$k($011083d4880ef116$var$t), b.sortIndex = b.expirationTime, $011083d4880ef116$var$f($011083d4880ef116$var$r, b);
        else break;
        b = $011083d4880ef116$var$h($011083d4880ef116$var$t);
    }
}
function $011083d4880ef116$var$H(a) {
    $011083d4880ef116$var$B = !1;
    $011083d4880ef116$var$G(a);
    if (!$011083d4880ef116$var$A) {
        if (null !== $011083d4880ef116$var$h($011083d4880ef116$var$r)) $011083d4880ef116$var$A = !0, $011083d4880ef116$var$I($011083d4880ef116$var$J);
        else {
            var b = $011083d4880ef116$var$h($011083d4880ef116$var$t);
            null !== b && $011083d4880ef116$var$K($011083d4880ef116$var$H, b.startTime - a);
        }
    }
}
function $011083d4880ef116$var$J(a, b) {
    $011083d4880ef116$var$A = !1;
    $011083d4880ef116$var$B && ($011083d4880ef116$var$B = !1, $011083d4880ef116$var$E($011083d4880ef116$var$L), $011083d4880ef116$var$L = -1);
    $011083d4880ef116$var$z = !0;
    var c = $011083d4880ef116$var$y;
    try {
        $011083d4880ef116$var$G(b);
        for($011083d4880ef116$var$v = $011083d4880ef116$var$h($011083d4880ef116$var$r); null !== $011083d4880ef116$var$v && (!($011083d4880ef116$var$v.expirationTime > b) || a && !$011083d4880ef116$var$M());){
            var d = $011083d4880ef116$var$v.callback;
            if ("function" === typeof d) {
                $011083d4880ef116$var$v.callback = null;
                $011083d4880ef116$var$y = $011083d4880ef116$var$v.priorityLevel;
                var e = d($011083d4880ef116$var$v.expirationTime <= b);
                b = $011083d4880ef116$export$c4744153514ff05d();
                "function" === typeof e ? $011083d4880ef116$var$v.callback = e : $011083d4880ef116$var$v === $011083d4880ef116$var$h($011083d4880ef116$var$r) && $011083d4880ef116$var$k($011083d4880ef116$var$r);
                $011083d4880ef116$var$G(b);
            } else $011083d4880ef116$var$k($011083d4880ef116$var$r);
            $011083d4880ef116$var$v = $011083d4880ef116$var$h($011083d4880ef116$var$r);
        }
        if (null !== $011083d4880ef116$var$v) var w = !0;
        else {
            var m = $011083d4880ef116$var$h($011083d4880ef116$var$t);
            null !== m && $011083d4880ef116$var$K($011083d4880ef116$var$H, m.startTime - b);
            w = !1;
        }
        return w;
    } finally{
        $011083d4880ef116$var$v = null, $011083d4880ef116$var$y = c, $011083d4880ef116$var$z = !1;
    }
}
var $011083d4880ef116$var$N = !1, $011083d4880ef116$var$O = null, $011083d4880ef116$var$L = -1, $011083d4880ef116$var$P = 5, $011083d4880ef116$var$Q = -1;
function $011083d4880ef116$var$M() {
    return $011083d4880ef116$export$c4744153514ff05d() - $011083d4880ef116$var$Q < $011083d4880ef116$var$P ? !1 : !0;
}
function $011083d4880ef116$var$R() {
    if (null !== $011083d4880ef116$var$O) {
        var a = $011083d4880ef116$export$c4744153514ff05d();
        $011083d4880ef116$var$Q = a;
        var b = !0;
        try {
            b = $011083d4880ef116$var$O(!0, a);
        } finally{
            b ? $011083d4880ef116$var$S() : ($011083d4880ef116$var$N = !1, $011083d4880ef116$var$O = null);
        }
    } else $011083d4880ef116$var$N = !1;
}
var $011083d4880ef116$var$S;
if ("function" === typeof $011083d4880ef116$var$F) $011083d4880ef116$var$S = function() {
    $011083d4880ef116$var$F($011083d4880ef116$var$R);
};
else if ("undefined" !== typeof MessageChannel) {
    var $011083d4880ef116$var$T = new MessageChannel, $011083d4880ef116$var$U = $011083d4880ef116$var$T.port2;
    $011083d4880ef116$var$T.port1.onmessage = $011083d4880ef116$var$R;
    $011083d4880ef116$var$S = function() {
        $011083d4880ef116$var$U.postMessage(null);
    };
} else $011083d4880ef116$var$S = function() {
    $011083d4880ef116$var$D($011083d4880ef116$var$R, 0);
};
function $011083d4880ef116$var$I(a) {
    $011083d4880ef116$var$O = a;
    $011083d4880ef116$var$N || ($011083d4880ef116$var$N = !0, $011083d4880ef116$var$S());
}
function $011083d4880ef116$var$K(a, b) {
    $011083d4880ef116$var$L = $011083d4880ef116$var$D(function() {
        a($011083d4880ef116$export$c4744153514ff05d());
    }, b);
}
$011083d4880ef116$export$3e506c1ccc9cc1a7 = 5;
$011083d4880ef116$export$e26fe2ed2fa76875 = 1;
$011083d4880ef116$export$502329bbf4b505b1 = 4;
$011083d4880ef116$export$6e3807111c4874c4 = 3;
$011083d4880ef116$export$c27134553091fb3a = null;
$011083d4880ef116$export$33ee1acdc04fd2a2 = 2;
$011083d4880ef116$export$b00a404bbd5edef2 = function(a) {
    a.callback = null;
};
$011083d4880ef116$export$8352ce38b91d0c62 = function() {
    $011083d4880ef116$var$A || $011083d4880ef116$var$z || ($011083d4880ef116$var$A = !0, $011083d4880ef116$var$I($011083d4880ef116$var$J));
};
$011083d4880ef116$export$d66a1c1c77bd778b = function(a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : $011083d4880ef116$var$P = 0 < a ? Math.floor(1E3 / a) : 5;
};
$011083d4880ef116$export$d3dfb8e4810cb555 = function() {
    return $011083d4880ef116$var$y;
};
$011083d4880ef116$export$839f9183b0465a69 = function() {
    return $011083d4880ef116$var$h($011083d4880ef116$var$r);
};
$011083d4880ef116$export$72fdf0e06517287b = function(a) {
    switch($011083d4880ef116$var$y){
        case 1:
        case 2:
        case 3:
            var b = 3;
            break;
        default:
            b = $011083d4880ef116$var$y;
    }
    var c = $011083d4880ef116$var$y;
    $011083d4880ef116$var$y = b;
    try {
        return a();
    } finally{
        $011083d4880ef116$var$y = c;
    }
};
$011083d4880ef116$export$4b844e58a3e414b4 = function() {};
$011083d4880ef116$export$816d2913ae6b83b1 = function() {};
$011083d4880ef116$export$61bcfe829111a1d0 = function(a, b) {
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
    var c = $011083d4880ef116$var$y;
    $011083d4880ef116$var$y = a;
    try {
        return b();
    } finally{
        $011083d4880ef116$var$y = c;
    }
};
$011083d4880ef116$export$7ee8c9beb337bc3f = function(a, b, c) {
    var d = $011083d4880ef116$export$c4744153514ff05d();
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
        id: $011083d4880ef116$var$u++,
        callback: b,
        priorityLevel: a,
        startTime: c,
        expirationTime: e,
        sortIndex: -1
    };
    c > d ? (a.sortIndex = c, $011083d4880ef116$var$f($011083d4880ef116$var$t, a), null === $011083d4880ef116$var$h($011083d4880ef116$var$r) && a === $011083d4880ef116$var$h($011083d4880ef116$var$t) && ($011083d4880ef116$var$B ? ($011083d4880ef116$var$E($011083d4880ef116$var$L), $011083d4880ef116$var$L = -1) : $011083d4880ef116$var$B = !0, $011083d4880ef116$var$K($011083d4880ef116$var$H, c - d))) : (a.sortIndex = e, $011083d4880ef116$var$f($011083d4880ef116$var$r, a), $011083d4880ef116$var$A || $011083d4880ef116$var$z || ($011083d4880ef116$var$A = !0, $011083d4880ef116$var$I($011083d4880ef116$var$J)));
    return a;
};
$011083d4880ef116$export$b5836b71941fa3ed = $011083d4880ef116$var$M;
$011083d4880ef116$export$cf845f2c119da08a = function(a) {
    var b = $011083d4880ef116$var$y;
    return function() {
        var c = $011083d4880ef116$var$y;
        $011083d4880ef116$var$y = b;
        try {
            return a.apply(this, arguments);
        } finally{
            $011083d4880ef116$var$y = c;
        }
    };
};

});



parcelRegister("cJDcN", function(module, exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";

var $aDG7e = parcelRequire("aDG7e");
function $94581965882983d2$var$emptyFunction() {}
function $94581965882983d2$var$emptyFunctionWithReset() {}
$94581965882983d2$var$emptyFunctionWithReset.resetWarningCache = $94581965882983d2$var$emptyFunction;
module.exports = function() {
    function shim(props, propName, componentName, location, propFullName, secret) {
        if (secret === $aDG7e) // It is still safe when called from React.
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
        checkPropTypes: $94581965882983d2$var$emptyFunctionWithReset,
        resetWarningCache: $94581965882983d2$var$emptyFunction
    };
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
};

});
parcelRegister("aDG7e", function(module, exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
var $7bee3734293de86e$var$ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
module.exports = $7bee3734293de86e$var$ReactPropTypesSecret;

});


var $8a713af880997588$exports = {};
"use strict";

$8a713af880997588$exports = (parcelRequire("aF0bH"));


var $b8d271dd7140d409$export$882461b6382ed46c;
var $b8d271dd7140d409$export$757ceba2d55c277e;
"use strict";
var $8694693cb6719903$exports = {};
"use strict";
function $8694693cb6719903$var$checkDCE() {
    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") return;
    try {
        // Verify that the code above has been dead code eliminated (DCE'd).
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($8694693cb6719903$var$checkDCE);
    } catch (err) {
        // DevTools shouldn't crash React, no matter what.
        // We should still report in case we break this code.
        console.error(err);
    }
}
// DCE check should happen before ReactDOM bundle executes so that
// DevTools can report bad minification during injection.
$8694693cb6719903$var$checkDCE();

$8694693cb6719903$exports = (parcelRequire("6M74L"));


var $b8d271dd7140d409$var$i;
$b8d271dd7140d409$export$882461b6382ed46c = $8694693cb6719903$exports.createRoot;
$b8d271dd7140d409$export$757ceba2d55c277e = $8694693cb6719903$exports.hydrateRoot;




var $kdEmn = parcelRequire("kdEmn");

var $5cea9eb9ce58b247$exports = {};
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $5cea9eb9ce58b247$var$ReactIs, $5cea9eb9ce58b247$var$throwOnDirectAccess;

// By explicitly using `prop-types` you are opting into new production behavior.
// http://fb.me/prop-types-in-prod
$5cea9eb9ce58b247$exports = (parcelRequire("cJDcN"))();



var $kdEmn = parcelRequire("kdEmn");
var $32538ae97b12ecb9$exports = {};
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
    if (0, $32538ae97b12ecb9$exports) {
        classNames.default = classNames;
        $32538ae97b12ecb9$exports = classNames;
    } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) // register as 'classnames', consistent with npm package name
    define("classnames", [], function() {
        return classNames;
    });
    else window.classNames = classNames;
})();



var $kdEmn = parcelRequire("kdEmn");

var $kdEmn = parcelRequire("kdEmn");

const $5b42dafad8984615$var$_excluded = [
    "as",
    "disabled"
];
function $5b42dafad8984615$var$_objectWithoutPropertiesLoose(source, excluded) {
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
function $5b42dafad8984615$export$72369ab2cc99204b(href) {
    return !href || href.trim() === "#";
}
function $5b42dafad8984615$export$a0ee72f2c720a5c3({ tagName: tagName, disabled: disabled, href: href, target: target, rel: rel, role: role, onClick: onClick, tabIndex: tabIndex = 0, type: type }) {
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
        if (disabled || tagName === "a" && $5b42dafad8984615$export$72369ab2cc99204b(href)) event.preventDefault();
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
const $5b42dafad8984615$var$Button = /*#__PURE__*/ $kdEmn.forwardRef((_ref, ref)=>{
    let { as: asProp, disabled: disabled } = _ref, props = $5b42dafad8984615$var$_objectWithoutPropertiesLoose(_ref, $5b42dafad8984615$var$_excluded);
    const [buttonProps, { tagName: Component }] = $5b42dafad8984615$export$a0ee72f2c720a5c3(Object.assign({
        tagName: asProp,
        disabled: disabled
    }, props));
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)(Component, Object.assign({}, props, buttonProps, {
        ref: ref
    }));
});
$5b42dafad8984615$var$Button.displayName = "Button";
var $5b42dafad8984615$export$2e2bcd8739ae039 = $5b42dafad8984615$var$Button;



var $kdEmn = parcelRequire("kdEmn");

"use client";
const $311a902b1b368ad8$export$666ad80b5007f835 = [
    "xxl",
    "xl",
    "lg",
    "md",
    "sm",
    "xs"
];
const $311a902b1b368ad8$export$ff817e17bad2e091 = "xs";
const $311a902b1b368ad8$var$ThemeContext = /*#__PURE__*/ $kdEmn.createContext({
    prefixes: {},
    breakpoints: $311a902b1b368ad8$export$666ad80b5007f835,
    minBreakpoint: $311a902b1b368ad8$export$ff817e17bad2e091
});
const { Consumer: $311a902b1b368ad8$export$b631efc24e9d5e2f, Provider: $311a902b1b368ad8$var$Provider } = $311a902b1b368ad8$var$ThemeContext;
function $311a902b1b368ad8$var$ThemeProvider({ prefixes: prefixes = {}, breakpoints: breakpoints = $311a902b1b368ad8$export$666ad80b5007f835, minBreakpoint: minBreakpoint = $311a902b1b368ad8$export$ff817e17bad2e091, dir: dir, children: children }) {
    const contextValue = (0, $kdEmn.useMemo)(()=>({
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
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)($311a902b1b368ad8$var$Provider, {
        value: contextValue,
        children: children
    });
}
function $311a902b1b368ad8$export$7f387860ebffb32c(prefix, defaultPrefix) {
    const { prefixes: prefixes } = (0, $kdEmn.useContext)($311a902b1b368ad8$var$ThemeContext);
    return prefix || prefixes[defaultPrefix] || defaultPrefix;
}
function $311a902b1b368ad8$export$8970c8db816a5863() {
    const { breakpoints: breakpoints } = (0, $kdEmn.useContext)($311a902b1b368ad8$var$ThemeContext);
    return breakpoints;
}
function $311a902b1b368ad8$export$d926d6ef38f3fd32() {
    const { minBreakpoint: minBreakpoint } = (0, $kdEmn.useContext)($311a902b1b368ad8$var$ThemeContext);
    return minBreakpoint;
}
function $311a902b1b368ad8$export$35e511eefa30ac5a() {
    const { dir: dir } = (0, $kdEmn.useContext)($311a902b1b368ad8$var$ThemeContext);
    return dir === "rtl";
}
function $311a902b1b368ad8$export$ce75053c20498f85(Component, opts) {
    if (typeof opts === "string") opts = {
        prefix: opts
    };
    const isClassy = Component.prototype && Component.prototype.isReactComponent;
    // If it's a functional component make sure we don't break it with a ref
    const { prefix: prefix, forwardRefAs: forwardRefAs = isClassy ? "ref" : "innerRef" } = opts;
    const Wrapped = /*#__PURE__*/ $kdEmn.forwardRef(({ ...props }, ref)=>{
        props[forwardRefAs] = ref;
        const bsPrefix = $311a902b1b368ad8$export$7f387860ebffb32c(props.bsPrefix, prefix);
        return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)(Component, {
            ...props,
            bsPrefix: bsPrefix
        });
    });
    Wrapped.displayName = `Bootstrap(${Component.displayName || Component.name})`;
    return Wrapped;
}
var $311a902b1b368ad8$export$2e2bcd8739ae039 = $311a902b1b368ad8$var$ThemeProvider;



"use client";
const $d6a6e6534be31a95$var$Button = /*#__PURE__*/ $kdEmn.forwardRef(({ as: as, bsPrefix: bsPrefix, variant: variant = "primary", size: size, active: active = false, disabled: disabled = false, className: className, ...props }, ref)=>{
    const prefix = (0, $311a902b1b368ad8$export$7f387860ebffb32c)(bsPrefix, "btn");
    const [buttonProps, { tagName: tagName }] = (0, $5b42dafad8984615$export$a0ee72f2c720a5c3)({
        tagName: as,
        disabled: disabled,
        ...props
    });
    const Component = tagName;
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)(Component, {
        ...buttonProps,
        ...props,
        ref: ref,
        disabled: disabled,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($32538ae97b12ecb9$exports)))(className, prefix, active && "active", variant && `${prefix}-${variant}`, size && `${prefix}-${size}`, props.href && disabled && "disabled")
    });
});
$d6a6e6534be31a95$var$Button.displayName = "Button";
var $d6a6e6534be31a95$export$2e2bcd8739ae039 = $d6a6e6534be31a95$var$Button;



var $kdEmn = parcelRequire("kdEmn");


var $kdEmn = parcelRequire("kdEmn");



"use client";
const $0d1dd596d46135ba$var$CardBody = /*#__PURE__*/ $kdEmn.forwardRef(({ className: className, bsPrefix: bsPrefix, as: Component = "div", ...props }, ref)=>{
    bsPrefix = (0, $311a902b1b368ad8$export$7f387860ebffb32c)(bsPrefix, "card-body");
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)(Component, {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($32538ae97b12ecb9$exports)))(className, bsPrefix),
        ...props
    });
});
$0d1dd596d46135ba$var$CardBody.displayName = "CardBody";
var $0d1dd596d46135ba$export$2e2bcd8739ae039 = $0d1dd596d46135ba$var$CardBody;



var $kdEmn = parcelRequire("kdEmn");



"use client";
const $156106f8653a9594$var$CardFooter = /*#__PURE__*/ $kdEmn.forwardRef(({ className: className, bsPrefix: bsPrefix, as: Component = "div", ...props }, ref)=>{
    bsPrefix = (0, $311a902b1b368ad8$export$7f387860ebffb32c)(bsPrefix, "card-footer");
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)(Component, {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($32538ae97b12ecb9$exports)))(className, bsPrefix),
        ...props
    });
});
$156106f8653a9594$var$CardFooter.displayName = "CardFooter";
var $156106f8653a9594$export$2e2bcd8739ae039 = $156106f8653a9594$var$CardFooter;




var $kdEmn = parcelRequire("kdEmn");


var $kdEmn = parcelRequire("kdEmn");
"use client";
const $1b024f4184f68491$var$context = /*#__PURE__*/ $kdEmn.createContext(null);
$1b024f4184f68491$var$context.displayName = "CardHeaderContext";
var $1b024f4184f68491$export$2e2bcd8739ae039 = $1b024f4184f68491$var$context;



"use client";
const $80aa60dc47541d62$var$CardHeader = /*#__PURE__*/ $kdEmn.forwardRef(({ bsPrefix: bsPrefix, className: className, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "div", ...props }, ref)=>{
    const prefix = (0, $311a902b1b368ad8$export$7f387860ebffb32c)(bsPrefix, "card-header");
    const contextValue = (0, $kdEmn.useMemo)(()=>({
            cardHeaderBsPrefix: prefix
        }), [
        prefix
    ]);
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $1b024f4184f68491$export$2e2bcd8739ae039).Provider, {
        value: contextValue,
        children: /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)(Component, {
            ref: ref,
            ...props,
            className: (0, (/*@__PURE__*/$parcel$interopDefault($32538ae97b12ecb9$exports)))(className, prefix)
        })
    });
});
$80aa60dc47541d62$var$CardHeader.displayName = "CardHeader";
var $80aa60dc47541d62$export$2e2bcd8739ae039 = $80aa60dc47541d62$var$CardHeader;




var $kdEmn = parcelRequire("kdEmn");


"use client";
const $9c11bfd447ecdc6c$var$CardImg = /*#__PURE__*/ $kdEmn.forwardRef(// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({ bsPrefix: bsPrefix, className: className, variant: variant, as: Component = "img", ...props }, ref)=>{
    const prefix = (0, $311a902b1b368ad8$export$7f387860ebffb32c)(bsPrefix, "card-img");
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)(Component, {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($32538ae97b12ecb9$exports)))(variant ? `${prefix}-${variant}` : prefix, className),
        ...props
    });
});
$9c11bfd447ecdc6c$var$CardImg.displayName = "CardImg";
var $9c11bfd447ecdc6c$export$2e2bcd8739ae039 = $9c11bfd447ecdc6c$var$CardImg;



var $kdEmn = parcelRequire("kdEmn");



"use client";
const $eec83fe724911c5e$var$CardImgOverlay = /*#__PURE__*/ $kdEmn.forwardRef(({ className: className, bsPrefix: bsPrefix, as: Component = "div", ...props }, ref)=>{
    bsPrefix = (0, $311a902b1b368ad8$export$7f387860ebffb32c)(bsPrefix, "card-img-overlay");
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)(Component, {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($32538ae97b12ecb9$exports)))(className, bsPrefix),
        ...props
    });
});
$eec83fe724911c5e$var$CardImgOverlay.displayName = "CardImgOverlay";
var $eec83fe724911c5e$export$2e2bcd8739ae039 = $eec83fe724911c5e$var$CardImgOverlay;



var $kdEmn = parcelRequire("kdEmn");



"use client";
const $e8bba52035e6aad9$var$CardLink = /*#__PURE__*/ $kdEmn.forwardRef(({ className: className, bsPrefix: bsPrefix, as: Component = "a", ...props }, ref)=>{
    bsPrefix = (0, $311a902b1b368ad8$export$7f387860ebffb32c)(bsPrefix, "card-link");
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)(Component, {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($32538ae97b12ecb9$exports)))(className, bsPrefix),
        ...props
    });
});
$e8bba52035e6aad9$var$CardLink.displayName = "CardLink";
var $e8bba52035e6aad9$export$2e2bcd8739ae039 = $e8bba52035e6aad9$var$CardLink;



var $kdEmn = parcelRequire("kdEmn");



var $kdEmn = parcelRequire("kdEmn");


var $f5b1cf123642f131$export$2e2bcd8739ae039 = (className)=>/*#__PURE__*/ $kdEmn.forwardRef((p, ref)=>/*#__PURE__*/ (0, $8a713af880997588$exports.jsx)("div", {
            ...p,
            ref: ref,
            className: (0, (/*@__PURE__*/$parcel$interopDefault($32538ae97b12ecb9$exports)))(p.className, className)
        }));



"use client";
const $b3cb7738986003d6$var$DivStyledAsH6 = (0, $f5b1cf123642f131$export$2e2bcd8739ae039)("h6");
const $b3cb7738986003d6$var$CardSubtitle = /*#__PURE__*/ $kdEmn.forwardRef(({ className: className, bsPrefix: bsPrefix, as: Component = $b3cb7738986003d6$var$DivStyledAsH6, ...props }, ref)=>{
    bsPrefix = (0, $311a902b1b368ad8$export$7f387860ebffb32c)(bsPrefix, "card-subtitle");
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)(Component, {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($32538ae97b12ecb9$exports)))(className, bsPrefix),
        ...props
    });
});
$b3cb7738986003d6$var$CardSubtitle.displayName = "CardSubtitle";
var $b3cb7738986003d6$export$2e2bcd8739ae039 = $b3cb7738986003d6$var$CardSubtitle;



var $kdEmn = parcelRequire("kdEmn");



"use client";
const $acab0b232378274c$var$CardText = /*#__PURE__*/ $kdEmn.forwardRef(({ className: className, bsPrefix: bsPrefix, as: Component = "p", ...props }, ref)=>{
    bsPrefix = (0, $311a902b1b368ad8$export$7f387860ebffb32c)(bsPrefix, "card-text");
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)(Component, {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($32538ae97b12ecb9$exports)))(className, bsPrefix),
        ...props
    });
});
$acab0b232378274c$var$CardText.displayName = "CardText";
var $acab0b232378274c$export$2e2bcd8739ae039 = $acab0b232378274c$var$CardText;



var $kdEmn = parcelRequire("kdEmn");




"use client";
const $a5f9303805d17dd0$var$DivStyledAsH5 = (0, $f5b1cf123642f131$export$2e2bcd8739ae039)("h5");
const $a5f9303805d17dd0$var$CardTitle = /*#__PURE__*/ $kdEmn.forwardRef(({ className: className, bsPrefix: bsPrefix, as: Component = $a5f9303805d17dd0$var$DivStyledAsH5, ...props }, ref)=>{
    bsPrefix = (0, $311a902b1b368ad8$export$7f387860ebffb32c)(bsPrefix, "card-title");
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)(Component, {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($32538ae97b12ecb9$exports)))(className, bsPrefix),
        ...props
    });
});
$a5f9303805d17dd0$var$CardTitle.displayName = "CardTitle";
var $a5f9303805d17dd0$export$2e2bcd8739ae039 = $a5f9303805d17dd0$var$CardTitle;



"use client";
const $de310a2e740b7385$var$Card = /*#__PURE__*/ $kdEmn.forwardRef(({ bsPrefix: bsPrefix, className: className, bg: bg, text: text, border: border, body: body = false, children: children, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "div", ...props }, ref)=>{
    const prefix = (0, $311a902b1b368ad8$export$7f387860ebffb32c)(bsPrefix, "card");
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)(Component, {
        ref: ref,
        ...props,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($32538ae97b12ecb9$exports)))(className, prefix, bg && `bg-${bg}`, text && `text-${text}`, border && `border-${border}`),
        children: body ? /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $0d1dd596d46135ba$export$2e2bcd8739ae039), {
            children: children
        }) : children
    });
});
$de310a2e740b7385$var$Card.displayName = "Card";
var $de310a2e740b7385$export$2e2bcd8739ae039 = Object.assign($de310a2e740b7385$var$Card, {
    Img: (0, $9c11bfd447ecdc6c$export$2e2bcd8739ae039),
    Title: (0, $a5f9303805d17dd0$export$2e2bcd8739ae039),
    Subtitle: (0, $b3cb7738986003d6$export$2e2bcd8739ae039),
    Body: (0, $0d1dd596d46135ba$export$2e2bcd8739ae039),
    Link: (0, $e8bba52035e6aad9$export$2e2bcd8739ae039),
    Text: (0, $acab0b232378274c$export$2e2bcd8739ae039),
    Header: (0, $80aa60dc47541d62$export$2e2bcd8739ae039),
    Footer: (0, $156106f8653a9594$export$2e2bcd8739ae039),
    ImgOverlay: (0, $eec83fe724911c5e$export$2e2bcd8739ae039)
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
var $kdEmn = parcelRequire("kdEmn");

/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function $6c64ee69686350de$var$_extends() {
    $6c64ee69686350de$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $6c64ee69686350de$var$_extends.apply(this, arguments);
}
////////////////////////////////////////////////////////////////////////////////
//#region Types and Constants
////////////////////////////////////////////////////////////////////////////////
/**
 * Actions represent the type of change to a location value.
 */ var $6c64ee69686350de$export$e19cd5f9376f8cee;
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
})($6c64ee69686350de$export$e19cd5f9376f8cee || ($6c64ee69686350de$export$e19cd5f9376f8cee = {}));
const $6c64ee69686350de$var$PopStateEventType = "popstate";
/**
 * Memory history stores the current location in memory. It is designed for use
 * in stateful non-browser environments like tests and React Native.
 */ function $6c64ee69686350de$export$2b76ad033c6e6d08(options) {
    if (options === void 0) options = {};
    let { initialEntries: initialEntries = [
        "/"
    ], initialIndex: initialIndex, v5Compat: v5Compat = false } = options;
    let entries; // Declare so we can access from createMemoryLocation
    entries = initialEntries.map((entry, index)=>createMemoryLocation(entry, typeof entry === "string" ? null : entry.state, index === 0 ? "default" : undefined));
    let index = clampIndex(initialIndex == null ? entries.length - 1 : initialIndex);
    let action = $6c64ee69686350de$export$e19cd5f9376f8cee.Pop;
    let listener = null;
    function clampIndex(n) {
        return Math.min(Math.max(n, 0), entries.length - 1);
    }
    function getCurrentLocation() {
        return entries[index];
    }
    function createMemoryLocation(to, state, key) {
        if (state === void 0) state = null;
        let location = $6c64ee69686350de$var$createLocation(entries ? getCurrentLocation().pathname : "/", to, state, key);
        $6c64ee69686350de$export$c0e02632e14916fd(location.pathname.charAt(0) === "/", "relative pathnames are not supported in memory history: " + JSON.stringify(to));
        return location;
    }
    function createHref(to) {
        return typeof to === "string" ? to : $6c64ee69686350de$export$fe53371bee54353d(to);
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
            let path = typeof to === "string" ? $6c64ee69686350de$export$8ccf933b0513f8d0(to) : to;
            return {
                pathname: path.pathname || "",
                search: path.search || "",
                hash: path.hash || ""
            };
        },
        push (to, state) {
            action = $6c64ee69686350de$export$e19cd5f9376f8cee.Push;
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
            action = $6c64ee69686350de$export$e19cd5f9376f8cee.Replace;
            let nextLocation = createMemoryLocation(to, state);
            entries[index] = nextLocation;
            if (v5Compat && listener) listener({
                action: action,
                location: nextLocation,
                delta: 0
            });
        },
        go (delta) {
            action = $6c64ee69686350de$export$e19cd5f9376f8cee.Pop;
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
 */ function $6c64ee69686350de$export$719fc203c4e16dee(options) {
    if (options === void 0) options = {};
    function createBrowserLocation(window1, globalHistory) {
        let { pathname: pathname, search: search, hash: hash } = window1.location;
        return $6c64ee69686350de$var$createLocation("", {
            pathname: pathname,
            search: search,
            hash: hash
        }, // state defaults to `null` because `window.history.state` does
        globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
    }
    function createBrowserHref(window1, to) {
        return typeof to === "string" ? to : $6c64ee69686350de$export$fe53371bee54353d(to);
    }
    return $6c64ee69686350de$var$getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
}
/**
 * Hash history stores the location in window.location.hash. This makes it ideal
 * for situations where you don't want to send the location to the server for
 * some reason, either because you do cannot configure it or the URL space is
 * reserved for something else.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createhashhistory
 */ function $6c64ee69686350de$export$b71fdd3798280242(options) {
    if (options === void 0) options = {};
    function createHashLocation(window1, globalHistory) {
        let { pathname: pathname = "/", search: search = "", hash: hash = "" } = $6c64ee69686350de$export$8ccf933b0513f8d0(window1.location.hash.substr(1));
        // Hash URL should always have a leading / just like window.location.pathname
        // does, so if an app ends up at a route like /#something then we add a
        // leading slash so all of our path-matching behaves the same as if it would
        // in a browser router.  This is particularly important when there exists a
        // root splat route (<Route path="*">) since that matches internally against
        // "/*" and we'd expect /#something to 404 in a hash router app.
        if (!pathname.startsWith("/") && !pathname.startsWith(".")) pathname = "/" + pathname;
        return $6c64ee69686350de$var$createLocation("", {
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
        return href + "#" + (typeof to === "string" ? to : $6c64ee69686350de$export$fe53371bee54353d(to));
    }
    function validateHashLocation(location, to) {
        $6c64ee69686350de$export$c0e02632e14916fd(location.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")");
    }
    return $6c64ee69686350de$var$getUrlBasedHistory(createHashLocation, createHashHref, validateHashLocation, options);
}
function $6c64ee69686350de$export$3e9cee6b33872309(value, message) {
    if (value === false || value === null || typeof value === "undefined") throw new Error(message);
}
function $6c64ee69686350de$export$c0e02632e14916fd(cond, message) {
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
function $6c64ee69686350de$var$createKey() {
    return Math.random().toString(36).substr(2, 8);
}
/**
 * For browser-based histories, we combine the state and key into an object
 */ function $6c64ee69686350de$var$getHistoryState(location, index) {
    return {
        usr: location.state,
        key: location.key,
        idx: index
    };
}
/**
 * Creates a Location object with a unique key from the given Path
 */ function $6c64ee69686350de$var$createLocation(current, to, state, key) {
    if (state === void 0) state = null;
    let location = $6c64ee69686350de$var$_extends({
        pathname: typeof current === "string" ? current : current.pathname,
        search: "",
        hash: ""
    }, typeof to === "string" ? $6c64ee69686350de$export$8ccf933b0513f8d0(to) : to, {
        state: state,
        // TODO: This could be cleaned up.  push/replace should probably just take
        // full Locations now and avoid the need to run through this flow at all
        // But that's a pretty big refactor to the current test suite so going to
        // keep as is for the time being and just let any incoming keys take precedence
        key: to && to.key || key || $6c64ee69686350de$var$createKey()
    });
    return location;
}
/**
 * Creates a string URL path from the given pathname, search, and hash components.
 */ function $6c64ee69686350de$export$fe53371bee54353d(_ref) {
    let { pathname: pathname = "/", search: search = "", hash: hash = "" } = _ref;
    if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
    if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
    return pathname;
}
/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 */ function $6c64ee69686350de$export$8ccf933b0513f8d0(path) {
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
function $6c64ee69686350de$var$getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
    if (options === void 0) options = {};
    let { window: window1 = document.defaultView, v5Compat: v5Compat = false } = options;
    let globalHistory = window1.history;
    let action = $6c64ee69686350de$export$e19cd5f9376f8cee.Pop;
    let listener = null;
    let index = getIndex();
    // Index should only be null when we initialize. If not, it's because the
    // user called history.pushState or history.replaceState directly, in which
    // case we should log a warning as it will result in bugs.
    if (index == null) {
        index = 0;
        globalHistory.replaceState($6c64ee69686350de$var$_extends({}, globalHistory.state, {
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
        action = $6c64ee69686350de$export$e19cd5f9376f8cee.Pop;
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
        action = $6c64ee69686350de$export$e19cd5f9376f8cee.Push;
        let location = $6c64ee69686350de$var$createLocation(history.location, to, state);
        if (validateLocation) validateLocation(location, to);
        index = getIndex() + 1;
        let historyState = $6c64ee69686350de$var$getHistoryState(location, index);
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
        action = $6c64ee69686350de$export$e19cd5f9376f8cee.Replace;
        let location = $6c64ee69686350de$var$createLocation(history.location, to, state);
        if (validateLocation) validateLocation(location, to);
        index = getIndex();
        let historyState = $6c64ee69686350de$var$getHistoryState(location, index);
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
        let href = typeof to === "string" ? to : $6c64ee69686350de$export$fe53371bee54353d(to);
        // Treating this as a full URL will strip any trailing spaces so we need to
        // pre-encode them since they might be part of a matching splat param from
        // an ancestor route
        href = href.replace(/ $/, "%20");
        $6c64ee69686350de$export$3e9cee6b33872309(base, "No window.location.(origin|href) available to create URL for href: " + href);
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
            window1.addEventListener($6c64ee69686350de$var$PopStateEventType, handlePop);
            listener = fn;
            return ()=>{
                window1.removeEventListener($6c64ee69686350de$var$PopStateEventType, handlePop);
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
var $6c64ee69686350de$var$ResultType;
(function(ResultType) {
    ResultType["data"] = "data";
    ResultType["deferred"] = "deferred";
    ResultType["redirect"] = "redirect";
    ResultType["error"] = "error";
})($6c64ee69686350de$var$ResultType || ($6c64ee69686350de$var$ResultType = {}));
const $6c64ee69686350de$var$immutableRouteKeys = new Set([
    "lazy",
    "caseSensitive",
    "path",
    "id",
    "index",
    "children"
]);
function $6c64ee69686350de$var$isIndexRoute(route) {
    return route.index === true;
}
// Walk the route tree generating unique IDs where necessary, so we are working
// solely with AgnosticDataRouteObject's within the Router
function $6c64ee69686350de$export$4a6d22b32134ea5d(routes, mapRouteProperties, parentPath, manifest) {
    if (parentPath === void 0) parentPath = [];
    if (manifest === void 0) manifest = {};
    return routes.map((route, index)=>{
        let treePath = [
            ...parentPath,
            index
        ];
        let id = typeof route.id === "string" ? route.id : treePath.join("-");
        $6c64ee69686350de$export$3e9cee6b33872309(route.index !== true || !route.children, "Cannot specify children on an index route");
        $6c64ee69686350de$export$3e9cee6b33872309(!manifest[id], 'Found a route id collision on id "' + id + '".  Route ' + "id's must be globally unique within Data Router usages");
        if ($6c64ee69686350de$var$isIndexRoute(route)) {
            let indexRoute = $6c64ee69686350de$var$_extends({}, route, mapRouteProperties(route), {
                id: id
            });
            manifest[id] = indexRoute;
            return indexRoute;
        } else {
            let pathOrLayoutRoute = $6c64ee69686350de$var$_extends({}, route, mapRouteProperties(route), {
                id: id,
                children: undefined
            });
            manifest[id] = pathOrLayoutRoute;
            if (route.children) pathOrLayoutRoute.children = $6c64ee69686350de$export$4a6d22b32134ea5d(route.children, mapRouteProperties, treePath, manifest);
            return pathOrLayoutRoute;
        }
    });
}
/**
 * Matches the given routes to a location and returns the match data.
 *
 * @see https://reactrouter.com/utils/match-routes
 */ function $6c64ee69686350de$export$2708184779ceb39d(routes, locationArg, basename) {
    if (basename === void 0) basename = "/";
    let location = typeof locationArg === "string" ? $6c64ee69686350de$export$8ccf933b0513f8d0(locationArg) : locationArg;
    let pathname = $6c64ee69686350de$export$b69e3301ce081aa3(location.pathname || "/", basename);
    if (pathname == null) return null;
    let branches = $6c64ee69686350de$var$flattenRoutes(routes);
    $6c64ee69686350de$var$rankRouteBranches(branches);
    let matches = null;
    for(let i = 0; matches == null && i < branches.length; ++i){
        // Incoming pathnames are generally encoded from either window.location
        // or from router.navigate, but we want to match against the unencoded
        // paths in the route definitions.  Memory router locations won't be
        // encoded here but there also shouldn't be anything to decode so this
        // should be a safe operation.  This avoids needing matchRoutes to be
        // history-aware.
        let decoded = $6c64ee69686350de$var$decodePath(pathname);
        matches = $6c64ee69686350de$var$matchRouteBranch(branches[i], decoded);
    }
    return matches;
}
function $6c64ee69686350de$export$b3fac024fad9e8ff(match, loaderData) {
    let { route: route, pathname: pathname, params: params } = match;
    return {
        id: route.id,
        pathname: pathname,
        params: params,
        data: loaderData[route.id],
        handle: route.handle
    };
}
function $6c64ee69686350de$var$flattenRoutes(routes, branches, parentsMeta, parentPath) {
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
            $6c64ee69686350de$export$3e9cee6b33872309(meta.relativePath.startsWith(parentPath), 'Absolute route path "' + meta.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.");
            meta.relativePath = meta.relativePath.slice(parentPath.length);
        }
        let path = $6c64ee69686350de$export$86d9a7913e44197e([
            parentPath,
            meta.relativePath
        ]);
        let routesMeta = parentsMeta.concat(meta);
        // Add the children before adding this route to the array, so we traverse the
        // route tree depth-first and child routes appear before their parents in
        // the "flattened" version.
        if (route.children && route.children.length > 0) {
            $6c64ee69686350de$export$3e9cee6b33872309(// Our types know better, but runtime JS may not!
            // @ts-expect-error
            route.index !== true, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".'));
            $6c64ee69686350de$var$flattenRoutes(route.children, branches, routesMeta, path);
        }
        // Routes without a path shouldn't ever match by themselves unless they are
        // index routes, so don't add them to the list of possible branches.
        if (route.path == null && !route.index) return;
        branches.push({
            path: path,
            score: $6c64ee69686350de$var$computeScore(path, route.index),
            routesMeta: routesMeta
        });
    };
    routes.forEach((route, index)=>{
        var _route$path;
        // coarse-grain check for optional params
        if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) flattenRoute(route, index);
        else for (let exploded of $6c64ee69686350de$var$explodeOptionalSegments(route.path))flattenRoute(route, index, exploded);
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
 */ function $6c64ee69686350de$var$explodeOptionalSegments(path) {
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
    let restExploded = $6c64ee69686350de$var$explodeOptionalSegments(rest.join("/"));
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
function $6c64ee69686350de$var$rankRouteBranches(branches) {
    branches.sort((a, b)=>a.score !== b.score ? b.score - a.score // Higher score first
         : $6c64ee69686350de$var$compareIndexes(a.routesMeta.map((meta)=>meta.childrenIndex), b.routesMeta.map((meta)=>meta.childrenIndex)));
}
const $6c64ee69686350de$var$paramRe = /^:[\w-]+$/;
const $6c64ee69686350de$var$dynamicSegmentValue = 3;
const $6c64ee69686350de$var$indexRouteValue = 2;
const $6c64ee69686350de$var$emptySegmentValue = 1;
const $6c64ee69686350de$var$staticSegmentValue = 10;
const $6c64ee69686350de$var$splatPenalty = -2;
const $6c64ee69686350de$var$isSplat = (s)=>s === "*";
function $6c64ee69686350de$var$computeScore(path, index) {
    let segments = path.split("/");
    let initialScore = segments.length;
    if (segments.some($6c64ee69686350de$var$isSplat)) initialScore += $6c64ee69686350de$var$splatPenalty;
    if (index) initialScore += $6c64ee69686350de$var$indexRouteValue;
    return segments.filter((s)=>!$6c64ee69686350de$var$isSplat(s)).reduce((score, segment)=>score + ($6c64ee69686350de$var$paramRe.test(segment) ? $6c64ee69686350de$var$dynamicSegmentValue : segment === "" ? $6c64ee69686350de$var$emptySegmentValue : $6c64ee69686350de$var$staticSegmentValue), initialScore);
}
function $6c64ee69686350de$var$compareIndexes(a, b) {
    let siblings = a.length === b.length && a.slice(0, -1).every((n, i)=>n === b[i]);
    return siblings ? // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    a[a.length - 1] - b[b.length - 1] : // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0;
}
function $6c64ee69686350de$var$matchRouteBranch(branch, pathname) {
    let { routesMeta: routesMeta } = branch;
    let matchedParams = {};
    let matchedPathname = "/";
    let matches = [];
    for(let i = 0; i < routesMeta.length; ++i){
        let meta = routesMeta[i];
        let end = i === routesMeta.length - 1;
        let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
        let match = $6c64ee69686350de$export$81336c211d5ff295({
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
            pathname: $6c64ee69686350de$export$86d9a7913e44197e([
                matchedPathname,
                match.pathname
            ]),
            pathnameBase: $6c64ee69686350de$export$a5c6d149b50c1d86($6c64ee69686350de$export$86d9a7913e44197e([
                matchedPathname,
                match.pathnameBase
            ])),
            route: route
        });
        if (match.pathnameBase !== "/") matchedPathname = $6c64ee69686350de$export$86d9a7913e44197e([
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
 */ function $6c64ee69686350de$export$82476f982757e71e(originalPath, params) {
    if (params === void 0) params = {};
    let path = originalPath;
    if (path.endsWith("*") && path !== "*" && !path.endsWith("/*")) {
        $6c64ee69686350de$export$c0e02632e14916fd(false, 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
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
            $6c64ee69686350de$export$3e9cee6b33872309(optional === "?" || param != null, 'Missing ":' + key + '" param');
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
 */ function $6c64ee69686350de$export$81336c211d5ff295(pattern, pathname) {
    if (typeof pattern === "string") pattern = {
        path: pattern,
        caseSensitive: false,
        end: true
    };
    let [matcher, compiledParams] = $6c64ee69686350de$var$compilePath(pattern.path, pattern.caseSensitive, pattern.end);
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
function $6c64ee69686350de$var$compilePath(path, caseSensitive, end) {
    if (caseSensitive === void 0) caseSensitive = false;
    if (end === void 0) end = true;
    $6c64ee69686350de$export$c0e02632e14916fd(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
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
function $6c64ee69686350de$var$decodePath(value) {
    try {
        return value.split("/").map((v)=>decodeURIComponent(v).replace(/\//g, "%2F")).join("/");
    } catch (error) {
        $6c64ee69686350de$export$c0e02632e14916fd(false, 'The URL path "' + value + '" could not be decoded because it is is a ' + "malformed URL segment. This is probably due to a bad percent " + ("encoding (" + error + ")."));
        return value;
    }
}
/**
 * @private
 */ function $6c64ee69686350de$export$b69e3301ce081aa3(pathname, basename) {
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
 */ function $6c64ee69686350de$export$b09f2ff0bbcb43c7(to, fromPathname) {
    if (fromPathname === void 0) fromPathname = "/";
    let { pathname: toPathname, search: search = "", hash: hash = "" } = typeof to === "string" ? $6c64ee69686350de$export$8ccf933b0513f8d0(to) : to;
    let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : $6c64ee69686350de$var$resolvePathname(toPathname, fromPathname) : fromPathname;
    return {
        pathname: pathname,
        search: $6c64ee69686350de$var$normalizeSearch(search),
        hash: $6c64ee69686350de$var$normalizeHash(hash)
    };
}
function $6c64ee69686350de$var$resolvePathname(relativePath, fromPathname) {
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
function $6c64ee69686350de$var$getInvalidPathError(char, field, dest, path) {
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
 */ function $6c64ee69686350de$var$getPathContributingMatches(matches) {
    return matches.filter((match, index)=>index === 0 || match.route.path && match.route.path.length > 0);
}
// Return the array of pathnames for the current route matches - used to
// generate the routePathnames input for resolveTo()
function $6c64ee69686350de$export$a5784978eca585fa(matches, v7_relativeSplatPath) {
    let pathMatches = $6c64ee69686350de$var$getPathContributingMatches(matches);
    // When v7_relativeSplatPath is enabled, use the full pathname for the leaf
    // match so we include splat values for "." links.  See:
    // https://github.com/remix-run/react-router/issues/11052#issuecomment-1836589329
    if (v7_relativeSplatPath) return pathMatches.map((match, idx)=>idx === matches.length - 1 ? match.pathname : match.pathnameBase);
    return pathMatches.map((match)=>match.pathnameBase);
}
/**
 * @private
 */ function $6c64ee69686350de$export$cae722b0cc860f13(toArg, routePathnames, locationPathname, isPathRelative) {
    if (isPathRelative === void 0) isPathRelative = false;
    let to;
    if (typeof toArg === "string") to = $6c64ee69686350de$export$8ccf933b0513f8d0(toArg);
    else {
        to = $6c64ee69686350de$var$_extends({}, toArg);
        $6c64ee69686350de$export$3e9cee6b33872309(!to.pathname || !to.pathname.includes("?"), $6c64ee69686350de$var$getInvalidPathError("?", "pathname", "search", to));
        $6c64ee69686350de$export$3e9cee6b33872309(!to.pathname || !to.pathname.includes("#"), $6c64ee69686350de$var$getInvalidPathError("#", "pathname", "hash", to));
        $6c64ee69686350de$export$3e9cee6b33872309(!to.search || !to.search.includes("#"), $6c64ee69686350de$var$getInvalidPathError("#", "search", "hash", to));
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
    let path = $6c64ee69686350de$export$b09f2ff0bbcb43c7(to, from);
    // Ensure the pathname has a trailing slash if the original "to" had one
    let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
    // Or if this was a link to the current path which has a trailing slash
    let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
    if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) path.pathname += "/";
    return path;
}
/**
 * @private
 */ function $6c64ee69686350de$export$f5655dfea9d981c7(to) {
    // Empty strings should be treated the same as / paths
    return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? $6c64ee69686350de$export$8ccf933b0513f8d0(to).pathname : to.pathname;
}
/**
 * @private
 */ const $6c64ee69686350de$export$86d9a7913e44197e = (paths)=>paths.join("/").replace(/\/\/+/g, "/");
/**
 * @private
 */ const $6c64ee69686350de$export$a5c6d149b50c1d86 = (pathname)=>pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
/**
 * @private
 */ const $6c64ee69686350de$var$normalizeSearch = (search)=>!search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
/**
 * @private
 */ const $6c64ee69686350de$var$normalizeHash = (hash)=>!hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
/**
 * This is a shortcut for creating `application/json` responses. Converts `data`
 * to JSON and sets the `Content-Type` header.
 */ const $6c64ee69686350de$export$7b419323e6ed4f31 = function json(data, init) {
    if (init === void 0) init = {};
    let responseInit = typeof init === "number" ? {
        status: init
    } : init;
    let headers = new Headers(responseInit.headers);
    if (!headers.has("Content-Type")) headers.set("Content-Type", "application/json; charset=utf-8");
    return new Response(JSON.stringify(data), $6c64ee69686350de$var$_extends({}, responseInit, {
        headers: headers
    }));
};
class $6c64ee69686350de$export$42a99a7a4bc0e76a extends Error {
}
class $6c64ee69686350de$export$61d759255b4eec65 {
    constructor(data, responseInit){
        this.pendingKeysSet = new Set();
        this.subscribers = new Set();
        this.deferredKeys = [];
        $6c64ee69686350de$export$3e9cee6b33872309(data && typeof data === "object" && !Array.isArray(data), "defer() only accepts plain objects");
        // Set up an AbortController + Promise we can race against to exit early
        // cancellation
        let reject;
        this.abortPromise = new Promise((_, r)=>reject = r);
        this.controller = new AbortController();
        let onAbort = ()=>reject(new $6c64ee69686350de$export$42a99a7a4bc0e76a("Deferred data aborted"));
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
        if (this.controller.signal.aborted && error instanceof $6c64ee69686350de$export$42a99a7a4bc0e76a) {
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
        $6c64ee69686350de$export$3e9cee6b33872309(this.data !== null && this.done, "Can only unwrap data on initialized and settled deferreds");
        return Object.entries(this.data).reduce((acc, _ref3)=>{
            let [key, value] = _ref3;
            return Object.assign(acc, {
                [key]: $6c64ee69686350de$var$unwrapTrackedPromise(value)
            });
        }, {});
    }
    get pendingKeys() {
        return Array.from(this.pendingKeysSet);
    }
}
function $6c64ee69686350de$var$isTrackedPromise(value) {
    return value instanceof Promise && value._tracked === true;
}
function $6c64ee69686350de$var$unwrapTrackedPromise(value) {
    if (!$6c64ee69686350de$var$isTrackedPromise(value)) return value;
    if (value._error) throw value._error;
    return value._data;
}
const $6c64ee69686350de$export$260e5c0943f31606 = function defer(data, init) {
    if (init === void 0) init = {};
    let responseInit = typeof init === "number" ? {
        status: init
    } : init;
    return new $6c64ee69686350de$export$61d759255b4eec65(data, responseInit);
};
/**
 * A redirect response. Sets the status code and the `Location` header.
 * Defaults to "302 Found".
 */ const $6c64ee69686350de$export$89e12c5b50f7529d = function redirect(url, init) {
    if (init === void 0) init = 302;
    let responseInit = init;
    if (typeof responseInit === "number") responseInit = {
        status: responseInit
    };
    else if (typeof responseInit.status === "undefined") responseInit.status = 302;
    let headers = new Headers(responseInit.headers);
    headers.set("Location", url);
    return new Response(null, $6c64ee69686350de$var$_extends({}, responseInit, {
        headers: headers
    }));
};
/**
 * A redirect response that will force a document reload to the new location.
 * Sets the status code and the `Location` header.
 * Defaults to "302 Found".
 */ const $6c64ee69686350de$export$a6cd19cd1951a23c = (url, init)=>{
    let response = $6c64ee69686350de$export$89e12c5b50f7529d(url, init);
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
 */ class $6c64ee69686350de$export$6c6580e81da25755 {
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
 */ function $6c64ee69686350de$export$972111febbeef05b(error) {
    return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}
const $6c64ee69686350de$var$validMutationMethodsArr = [
    "post",
    "put",
    "patch",
    "delete"
];
const $6c64ee69686350de$var$validMutationMethods = new Set($6c64ee69686350de$var$validMutationMethodsArr);
const $6c64ee69686350de$var$validRequestMethodsArr = [
    "get",
    ...$6c64ee69686350de$var$validMutationMethodsArr
];
const $6c64ee69686350de$var$validRequestMethods = new Set($6c64ee69686350de$var$validRequestMethodsArr);
const $6c64ee69686350de$var$redirectStatusCodes = new Set([
    301,
    302,
    303,
    307,
    308
]);
const $6c64ee69686350de$var$redirectPreserveMethodStatusCodes = new Set([
    307,
    308
]);
const $6c64ee69686350de$export$ed3e14b2f9e105d0 = {
    state: "idle",
    location: undefined,
    formMethod: undefined,
    formAction: undefined,
    formEncType: undefined,
    formData: undefined,
    json: undefined,
    text: undefined
};
const $6c64ee69686350de$export$52eace9c284d3585 = {
    state: "idle",
    data: undefined,
    formMethod: undefined,
    formAction: undefined,
    formEncType: undefined,
    formData: undefined,
    json: undefined,
    text: undefined
};
const $6c64ee69686350de$export$386d57f03f0b2883 = {
    state: "unblocked",
    proceed: undefined,
    reset: undefined,
    location: undefined
};
const $6c64ee69686350de$var$ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
const $6c64ee69686350de$var$defaultMapRouteProperties = (route)=>({
        hasErrorBoundary: Boolean(route.hasErrorBoundary)
    });
const $6c64ee69686350de$var$TRANSITIONS_STORAGE_KEY = "remix-router-transitions";
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createRouter
////////////////////////////////////////////////////////////////////////////////
/**
 * Create a router and listen to history POP navigations
 */ function $6c64ee69686350de$export$baddd0131ee8c05b(init) {
    const routerWindow = init.window ? init.window : typeof window !== "undefined" ? window : undefined;
    const isBrowser = typeof routerWindow !== "undefined" && typeof routerWindow.document !== "undefined" && typeof routerWindow.document.createElement !== "undefined";
    const isServer = !isBrowser;
    $6c64ee69686350de$export$3e9cee6b33872309(init.routes.length > 0, "You must provide a non-empty routes array to createRouter");
    let mapRouteProperties;
    if (init.mapRouteProperties) mapRouteProperties = init.mapRouteProperties;
    else if (init.detectErrorBoundary) {
        // If they are still using the deprecated version, wrap it with the new API
        let detectErrorBoundary = init.detectErrorBoundary;
        mapRouteProperties = (route)=>({
                hasErrorBoundary: detectErrorBoundary(route)
            });
    } else mapRouteProperties = $6c64ee69686350de$var$defaultMapRouteProperties;
    // Routes keyed by ID
    let manifest = {};
    // Routes in tree format for matching
    let dataRoutes = $6c64ee69686350de$export$4a6d22b32134ea5d(init.routes, mapRouteProperties, undefined, manifest);
    let inFlightDataRoutes;
    let basename = init.basename || "/";
    let dataStrategyImpl = init.unstable_dataStrategy || $6c64ee69686350de$var$defaultDataStrategy;
    // Config driven behavior flags
    let future = $6c64ee69686350de$var$_extends({
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
    let initialMatches = $6c64ee69686350de$export$2708184779ceb39d(dataRoutes, init.history.location, basename);
    let initialErrors = null;
    if (initialMatches == null) {
        // If we do not match a user-provided-route, fall back to the root
        // to allow the error boundary to take over
        let error = $6c64ee69686350de$var$getInternalRouterError(404, {
            pathname: init.history.location.pathname
        });
        let { matches: matches, route: route } = $6c64ee69686350de$var$getShortCircuitMatches(dataRoutes);
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
        navigation: $6c64ee69686350de$export$ed3e14b2f9e105d0,
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
    let pendingAction = $6c64ee69686350de$export$e19cd5f9376f8cee.Pop;
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
            $6c64ee69686350de$export$c0e02632e14916fd(blockerFunctions.size === 0 || delta != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
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
                        blockers.set(blockerKey, $6c64ee69686350de$export$386d57f03f0b2883);
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
            $6c64ee69686350de$var$restoreAppliedTransitions(routerWindow, appliedViewTransitions);
            let _saveAppliedTransitions = ()=>$6c64ee69686350de$var$persistAppliedTransitions(routerWindow, appliedViewTransitions);
            routerWindow.addEventListener("pagehide", _saveAppliedTransitions);
            removePageHideEventListener = ()=>routerWindow.removeEventListener("pagehide", _saveAppliedTransitions);
        }
        // Kick off initial data load if needed.  Use Pop to avoid modifying history
        // Note we don't do any handling of lazy here.  For SPA's it'll get handled
        // in the normal navigation flow.  For SSR it's expected that lazy modules are
        // resolved prior to router creation since we can't go into a fallbackElement
        // UI for SSR'd apps
        if (!state.initialized) startNavigation($6c64ee69686350de$export$e19cd5f9376f8cee.Pop, state.location, {
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
        state = $6c64ee69686350de$var$_extends({}, state, newState);
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
        let isActionReload = state.actionData != null && state.navigation.formMethod != null && $6c64ee69686350de$var$isMutationMethod(state.navigation.formMethod) && state.navigation.state === "loading" && ((_location$state = location.state) == null ? void 0 : _location$state._isRedirect) !== true;
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
        let loaderData = newState.loaderData ? $6c64ee69686350de$var$mergeLoaderData(state.loaderData, newState.loaderData, newState.matches || [], newState.errors) : state.loaderData;
        // On a successful navigation we can assume we got through all blockers
        // so we can start fresh
        let blockers = state.blockers;
        if (blockers.size > 0) {
            blockers = new Map(blockers);
            blockers.forEach((_, k)=>blockers.set(k, $6c64ee69686350de$export$386d57f03f0b2883));
        }
        // Always respect the user flag.  Otherwise don't reset on mutation
        // submission navigations unless they redirect
        let preventScrollReset = pendingPreventScrollReset === true || state.navigation.formMethod != null && $6c64ee69686350de$var$isMutationMethod(state.navigation.formMethod) && ((_location$state2 = location.state) == null ? void 0 : _location$state2._isRedirect) !== true;
        if (inFlightDataRoutes) {
            dataRoutes = inFlightDataRoutes;
            inFlightDataRoutes = undefined;
        }
        if (isUninterruptedRevalidation) ;
        else if (pendingAction === $6c64ee69686350de$export$e19cd5f9376f8cee.Pop) ;
        else if (pendingAction === $6c64ee69686350de$export$e19cd5f9376f8cee.Push) init.history.push(location, location.state);
        else if (pendingAction === $6c64ee69686350de$export$e19cd5f9376f8cee.Replace) init.history.replace(location, location.state);
        let viewTransitionOpts;
        // On POP, enable transitions if they were enabled on the original navigation
        if (pendingAction === $6c64ee69686350de$export$e19cd5f9376f8cee.Pop) {
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
        updateState($6c64ee69686350de$var$_extends({}, newState, {
            actionData: actionData,
            loaderData: loaderData,
            historyAction: pendingAction,
            location: location,
            initialized: true,
            navigation: $6c64ee69686350de$export$ed3e14b2f9e105d0,
            revalidation: "idle",
            restoreScrollPosition: getSavedScrollPosition(location, newState.matches || state.matches),
            preventScrollReset: preventScrollReset,
            blockers: blockers
        }), {
            viewTransitionOpts: viewTransitionOpts,
            flushSync: flushSync === true
        });
        // Reset stateful navigation vars
        pendingAction = $6c64ee69686350de$export$e19cd5f9376f8cee.Pop;
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
        let normalizedPath = $6c64ee69686350de$var$normalizeTo(state.location, state.matches, basename, future.v7_prependBasename, to, future.v7_relativeSplatPath, opts == null ? void 0 : opts.fromRouteId, opts == null ? void 0 : opts.relative);
        let { path: path, submission: submission, error: error } = $6c64ee69686350de$var$normalizeNavigateOptions(future.v7_normalizeFormMethod, false, normalizedPath, opts);
        let currentLocation = state.location;
        let nextLocation = $6c64ee69686350de$var$createLocation(state.location, path, opts && opts.state);
        // When using navigate as a PUSH/REPLACE we aren't reading an already-encoded
        // URL from window.location, so we need to encode it here so the behavior
        // remains the same as POP and non-data-router usages.  new URL() does all
        // the same encoding we'd get from a history.pushState/window.location read
        // without having to touch history
        nextLocation = $6c64ee69686350de$var$_extends({}, nextLocation, init.history.encodeLocation(nextLocation));
        let userReplace = opts && opts.replace != null ? opts.replace : undefined;
        let historyAction = $6c64ee69686350de$export$e19cd5f9376f8cee.Push;
        if (userReplace === true) historyAction = $6c64ee69686350de$export$e19cd5f9376f8cee.Replace;
        else if (userReplace === false) ;
        else if (submission != null && $6c64ee69686350de$var$isMutationMethod(submission.formMethod) && submission.formAction === state.location.pathname + state.location.search) // By default on submissions to the current location we REPLACE so that
        // users don't have to double-click the back button to get to the prior
        // location.  If the user redirects to a different location from the
        // action/loader this will be ignored and the redirect will be a PUSH
        historyAction = $6c64ee69686350de$export$e19cd5f9376f8cee.Replace;
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
                    blockers.set(blockerKey, $6c64ee69686350de$export$386d57f03f0b2883);
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
        let matches = $6c64ee69686350de$export$2708184779ceb39d(routesToUse, location, basename);
        let flushSync = (opts && opts.flushSync) === true;
        // Short circuit with a 404 on the root error boundary if we match nothing
        if (!matches) {
            let error = $6c64ee69686350de$var$getInternalRouterError(404, {
                pathname: location.pathname
            });
            let { matches: notFoundMatches, route: route } = $6c64ee69686350de$var$getShortCircuitMatches(routesToUse);
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
        if (state.initialized && !isRevalidationRequired && $6c64ee69686350de$var$isHashChangeOnly(state.location, location) && !(opts && opts.submission && $6c64ee69686350de$var$isMutationMethod(opts.submission.formMethod))) {
            completeNavigation(location, {
                matches: matches
            }, {
                flushSync: flushSync
            });
            return;
        }
        // Create a controller/Request for this navigation
        pendingNavigationController = new AbortController();
        let request = $6c64ee69686350de$var$createClientSideRequest(init.history, location, pendingNavigationController.signal, opts && opts.submission);
        let pendingActionResult;
        if (opts && opts.pendingError) // If we have a pendingError, it means the user attempted a GET submission
        // with binary FormData so assign here and skip to handleLoaders.  That
        // way we handle calling loaders above the boundary etc.  It's not really
        // different from an actionError in that sense.
        pendingActionResult = [
            $6c64ee69686350de$var$findNearestBoundary(matches).route.id,
            {
                type: $6c64ee69686350de$var$ResultType.error,
                error: opts.pendingError
            }
        ];
        else if (opts && opts.submission && $6c64ee69686350de$var$isMutationMethod(opts.submission.formMethod)) {
            // Call action if we received an action submission
            let actionResult = await handleAction(request, location, opts.submission, matches, {
                replace: opts.replace,
                flushSync: flushSync
            });
            if (actionResult.shortCircuited) return;
            pendingActionResult = actionResult.pendingActionResult;
            loadingNavigation = $6c64ee69686350de$var$getLoadingNavigation(location, opts.submission);
            flushSync = false;
            // Create a GET request for the loaders
            request = $6c64ee69686350de$var$createClientSideRequest(init.history, request.url, request.signal);
        }
        // Call loaders
        let { shortCircuited: shortCircuited, loaderData: loaderData, errors: errors } = await handleLoaders(request, location, matches, loadingNavigation, opts && opts.submission, opts && opts.fetcherSubmission, opts && opts.replace, opts && opts.initialHydration === true, flushSync, pendingActionResult);
        if (shortCircuited) return;
        // Clean up now that the action/loaders have completed.  Don't clean up if
        // we short circuited because pendingNavigationController will have already
        // been assigned to a new controller for the next navigation
        pendingNavigationController = null;
        completeNavigation(location, $6c64ee69686350de$var$_extends({
            matches: matches
        }, $6c64ee69686350de$var$getActionDataForCommit(pendingActionResult), {
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
        let navigation = $6c64ee69686350de$var$getSubmittingNavigation(location, submission);
        updateState({
            navigation: navigation
        }, {
            flushSync: opts.flushSync === true
        });
        // Call our action and get the result
        let result;
        let actionMatch = $6c64ee69686350de$var$getTargetMatch(matches, location);
        if (!actionMatch.route.action && !actionMatch.route.lazy) result = {
            type: $6c64ee69686350de$var$ResultType.error,
            error: $6c64ee69686350de$var$getInternalRouterError(405, {
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
        if ($6c64ee69686350de$var$isRedirectResult(result)) {
            let replace;
            if (opts && opts.replace != null) replace = opts.replace;
            else {
                // If the user didn't explicity indicate replace behavior, replace if
                // we redirected to the exact same location we're currently at to avoid
                // double back-buttons
                let location = $6c64ee69686350de$var$normalizeRedirectLocation(result.response.headers.get("Location"), new URL(request.url), basename);
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
        if ($6c64ee69686350de$var$isDeferredResult(result)) throw $6c64ee69686350de$var$getInternalRouterError(400, {
            type: "defer-action"
        });
        if ($6c64ee69686350de$var$isErrorResult(result)) {
            // Store off the pending error - we use it to determine which loaders
            // to call and will commit it when we complete the navigation
            let boundaryMatch = $6c64ee69686350de$var$findNearestBoundary(matches, actionMatch.route.id);
            // By default, all submissions are REPLACE navigations, but if the
            // action threw an error that'll be rendered in an errorElement, we fall
            // back to PUSH so that the user can use the back button to get back to
            // the pre-submission form location to try again
            if ((opts && opts.replace) !== true) pendingAction = $6c64ee69686350de$export$e19cd5f9376f8cee.Push;
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
        let loadingNavigation = overrideNavigation || $6c64ee69686350de$var$getLoadingNavigation(location, submission);
        // If this was a redirect from an action we don't have a "submission" but
        // we have it on the loading navigation so use that if available
        let activeSubmission = submission || fetcherSubmission || $6c64ee69686350de$var$getSubmissionFromNavigation(loadingNavigation);
        let routesToUse = inFlightDataRoutes || dataRoutes;
        let [matchesToLoad, revalidatingFetchers] = $6c64ee69686350de$var$getMatchesToLoad(init.history, state, matches, activeSubmission, location, future.v7_partialHydration && initialHydration === true, future.unstable_skipActionErrorRevalidation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, deletedFetchers, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, pendingActionResult);
        // Cancel pending deferreds for no-longer-matched routes or routes we're
        // about to reload.  Note that if this is an action reload we would have
        // already cancelled all pending deferreds so this would be a no-op
        cancelActiveDeferreds((routeId)=>!(matches && matches.some((m)=>m.route.id === routeId)) || matchesToLoad && matchesToLoad.some((m)=>m.route.id === routeId));
        pendingNavigationLoadId = ++incrementingLoadId;
        // Short circuit if we have no loaders to run
        if (matchesToLoad.length === 0 && revalidatingFetchers.length === 0) {
            let updatedFetchers = markFetchRedirectsDone();
            completeNavigation(location, $6c64ee69686350de$var$_extends({
                matches: matches,
                loaderData: {},
                // Commit pending error if we're short circuiting
                errors: pendingActionResult && $6c64ee69686350de$var$isErrorResult(pendingActionResult[1]) ? {
                    [pendingActionResult[0]]: pendingActionResult[1].error
                } : null
            }, $6c64ee69686350de$var$getActionDataForCommit(pendingActionResult), updatedFetchers ? {
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
                let revalidatingFetcher = $6c64ee69686350de$var$getLoadingFetcher(undefined, fetcher ? fetcher.data : undefined);
                state.fetchers.set(rf.key, revalidatingFetcher);
            });
            let actionData;
            if (pendingActionResult && !$6c64ee69686350de$var$isErrorResult(pendingActionResult[1])) // This is cast to `any` currently because `RouteData`uses any and it
            // would be a breaking change to use any.
            // TODO: v7 - change `RouteData` to use `unknown` instead of `any`
            actionData = {
                [pendingActionResult[0]]: pendingActionResult[1].data
            };
            else if (state.actionData) {
                if (Object.keys(state.actionData).length === 0) actionData = null;
                else actionData = state.actionData;
            }
            updateState($6c64ee69686350de$var$_extends({
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
        let redirect = $6c64ee69686350de$var$findRedirect([
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
        let { loaderData: loaderData, errors: errors } = $6c64ee69686350de$var$processLoaderData(state, matches, matchesToLoad, loaderResults, pendingActionResult, revalidatingFetchers, fetcherResults, activeDeferreds);
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
        return $6c64ee69686350de$var$_extends({
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
        let normalizedPath = $6c64ee69686350de$var$normalizeTo(state.location, state.matches, basename, future.v7_prependBasename, href, future.v7_relativeSplatPath, routeId, opts == null ? void 0 : opts.relative);
        let matches = $6c64ee69686350de$export$2708184779ceb39d(routesToUse, normalizedPath, basename);
        if (!matches) {
            setFetcherError(key, routeId, $6c64ee69686350de$var$getInternalRouterError(404, {
                pathname: normalizedPath
            }), {
                flushSync: flushSync
            });
            return;
        }
        let { path: path, submission: submission, error: error } = $6c64ee69686350de$var$normalizeNavigateOptions(future.v7_normalizeFormMethod, true, normalizedPath, opts);
        if (error) {
            setFetcherError(key, routeId, error, {
                flushSync: flushSync
            });
            return;
        }
        let match = $6c64ee69686350de$var$getTargetMatch(matches, path);
        pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
        if (submission && $6c64ee69686350de$var$isMutationMethod(submission.formMethod)) {
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
            let error = $6c64ee69686350de$var$getInternalRouterError(405, {
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
        updateFetcherState(key, $6c64ee69686350de$var$getSubmittingFetcher(submission, existingFetcher), {
            flushSync: flushSync
        });
        // Call the action for the fetcher
        let abortController = new AbortController();
        let fetchRequest = $6c64ee69686350de$var$createClientSideRequest(init.history, path, abortController.signal, submission);
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
            if ($6c64ee69686350de$var$isRedirectResult(actionResult) || $6c64ee69686350de$var$isErrorResult(actionResult)) {
                updateFetcherState(key, $6c64ee69686350de$var$getDoneFetcher(undefined));
                return;
            }
        } else {
            if ($6c64ee69686350de$var$isRedirectResult(actionResult)) {
                fetchControllers.delete(key);
                if (pendingNavigationLoadId > originatingLoadId) {
                    // A new navigation was kicked off after our action started, so that
                    // should take precedence over this redirect navigation.  We already
                    // set isRevalidationRequired so all loaders for the new route should
                    // fire unless opted out via shouldRevalidate
                    updateFetcherState(key, $6c64ee69686350de$var$getDoneFetcher(undefined));
                    return;
                } else {
                    fetchRedirectIds.add(key);
                    updateFetcherState(key, $6c64ee69686350de$var$getLoadingFetcher(submission));
                    return startRedirectNavigation(fetchRequest, actionResult, {
                        fetcherSubmission: submission
                    });
                }
            }
            // Process any non-redirect errors thrown
            if ($6c64ee69686350de$var$isErrorResult(actionResult)) {
                setFetcherError(key, routeId, actionResult.error);
                return;
            }
        }
        if ($6c64ee69686350de$var$isDeferredResult(actionResult)) throw $6c64ee69686350de$var$getInternalRouterError(400, {
            type: "defer-action"
        });
        // Start the data load for current matches, or the next location if we're
        // in the middle of a navigation
        let nextLocation = state.navigation.location || state.location;
        let revalidationRequest = $6c64ee69686350de$var$createClientSideRequest(init.history, nextLocation, abortController.signal);
        let routesToUse = inFlightDataRoutes || dataRoutes;
        let matches = state.navigation.state !== "idle" ? $6c64ee69686350de$export$2708184779ceb39d(routesToUse, state.navigation.location, basename) : state.matches;
        $6c64ee69686350de$export$3e9cee6b33872309(matches, "Didn't find any matches after fetcher action");
        let loadId = ++incrementingLoadId;
        fetchReloadIds.set(key, loadId);
        let loadFetcher = $6c64ee69686350de$var$getLoadingFetcher(submission, actionResult.data);
        state.fetchers.set(key, loadFetcher);
        let [matchesToLoad, revalidatingFetchers] = $6c64ee69686350de$var$getMatchesToLoad(init.history, state, matches, submission, nextLocation, false, future.unstable_skipActionErrorRevalidation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, deletedFetchers, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, [
            match.route.id,
            actionResult
        ]);
        // Put all revalidating fetchers into the loading state, except for the
        // current fetcher which we want to keep in it's current loading state which
        // contains it's action submission info + action data
        revalidatingFetchers.filter((rf)=>rf.key !== key).forEach((rf)=>{
            let staleKey = rf.key;
            let existingFetcher = state.fetchers.get(staleKey);
            let revalidatingFetcher = $6c64ee69686350de$var$getLoadingFetcher(undefined, existingFetcher ? existingFetcher.data : undefined);
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
        let redirect = $6c64ee69686350de$var$findRedirect([
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
        let { loaderData: loaderData, errors: errors } = $6c64ee69686350de$var$processLoaderData(state, state.matches, matchesToLoad, loaderResults, undefined, revalidatingFetchers, fetcherResults, activeDeferreds);
        // Since we let revalidations complete even if the submitting fetcher was
        // deleted, only put it back to idle if it hasn't been deleted
        if (state.fetchers.has(key)) {
            let doneFetcher = $6c64ee69686350de$var$getDoneFetcher(actionResult.data);
            state.fetchers.set(key, doneFetcher);
        }
        abortStaleFetchLoads(loadId);
        // If we are currently in a navigation loading state and this fetcher is
        // more recent than the navigation, we want the newer data so abort the
        // navigation and complete it with the fetcher data
        if (state.navigation.state === "loading" && loadId > pendingNavigationLoadId) {
            $6c64ee69686350de$export$3e9cee6b33872309(pendingAction, "Expected pending action");
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
                loaderData: $6c64ee69686350de$var$mergeLoaderData(state.loaderData, loaderData, matches, errors),
                fetchers: new Map(state.fetchers)
            });
            isRevalidationRequired = false;
        }
    }
    // Call the matched loader for fetcher.load(), handling redirects, errors, etc.
    async function handleFetcherLoader(key, routeId, path, match, matches, flushSync, submission) {
        let existingFetcher = state.fetchers.get(key);
        updateFetcherState(key, $6c64ee69686350de$var$getLoadingFetcher(submission, existingFetcher ? existingFetcher.data : undefined), {
            flushSync: flushSync
        });
        // Call the loader for this fetcher route match
        let abortController = new AbortController();
        let fetchRequest = $6c64ee69686350de$var$createClientSideRequest(init.history, path, abortController.signal);
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
        if ($6c64ee69686350de$var$isDeferredResult(result)) result = await $6c64ee69686350de$var$resolveDeferredData(result, fetchRequest.signal, true) || result;
        // We can delete this so long as we weren't aborted by our our own fetcher
        // re-load which would have put _new_ controller is in fetchControllers
        if (fetchControllers.get(key) === abortController) fetchControllers.delete(key);
        if (fetchRequest.signal.aborted) return;
        // We don't want errors bubbling up or redirects followed for unmounted
        // fetchers, so short circuit here if it was removed from the UI
        if (deletedFetchers.has(key)) {
            updateFetcherState(key, $6c64ee69686350de$var$getDoneFetcher(undefined));
            return;
        }
        // If the loader threw a redirect Response, start a new REPLACE navigation
        if ($6c64ee69686350de$var$isRedirectResult(result)) {
            if (pendingNavigationLoadId > originatingLoadId) {
                // A new navigation was kicked off after our loader started, so that
                // should take precedence over this redirect navigation
                updateFetcherState(key, $6c64ee69686350de$var$getDoneFetcher(undefined));
                return;
            } else {
                fetchRedirectIds.add(key);
                await startRedirectNavigation(fetchRequest, result);
                return;
            }
        }
        // Process any non-redirect errors thrown
        if ($6c64ee69686350de$var$isErrorResult(result)) {
            setFetcherError(key, routeId, result.error);
            return;
        }
        $6c64ee69686350de$export$3e9cee6b33872309(!$6c64ee69686350de$var$isDeferredResult(result), "Unhandled fetcher deferred data");
        // Put the fetcher back into an idle state
        updateFetcherState(key, $6c64ee69686350de$var$getDoneFetcher(result.data));
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
        $6c64ee69686350de$export$3e9cee6b33872309(location, "Expected a Location header on the redirect Response");
        location = $6c64ee69686350de$var$normalizeRedirectLocation(location, new URL(request.url), basename);
        let redirectLocation = $6c64ee69686350de$var$createLocation(state.location, location, {
            _isRedirect: true
        });
        if (isBrowser) {
            let isDocumentReload = false;
            if (redirect.response.headers.has("X-Remix-Reload-Document")) // Hard reload if the response contained X-Remix-Reload-Document
            isDocumentReload = true;
            else if ($6c64ee69686350de$var$ABSOLUTE_URL_REGEX.test(location)) {
                const url = init.history.createURL(location);
                isDocumentReload = // Hard reload if it's an absolute URL to a new origin
                url.origin !== routerWindow.location.origin || // Hard reload if it's an absolute URL that does not match our basename
                $6c64ee69686350de$export$b69e3301ce081aa3(url.pathname, basename) == null;
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
        let redirectHistoryAction = replace === true ? $6c64ee69686350de$export$e19cd5f9376f8cee.Replace : $6c64ee69686350de$export$e19cd5f9376f8cee.Push;
        // Use the incoming submission if provided, fallback on the active one in
        // state.navigation
        let { formMethod: formMethod, formAction: formAction, formEncType: formEncType } = state.navigation;
        if (!submission && !fetcherSubmission && formMethod && formAction && formEncType) submission = $6c64ee69686350de$var$getSubmissionFromNavigation(state.navigation);
        // If this was a 307/308 submission we want to preserve the HTTP method and
        // re-submit the GET/POST/PUT/PATCH/DELETE as a submission navigation to the
        // redirected location
        let activeSubmission = submission || fetcherSubmission;
        if ($6c64ee69686350de$var$redirectPreserveMethodStatusCodes.has(redirect.response.status) && activeSubmission && $6c64ee69686350de$var$isMutationMethod(activeSubmission.formMethod)) await startNavigation(redirectHistoryAction, redirectLocation, {
            submission: $6c64ee69686350de$var$_extends({}, activeSubmission, {
                formAction: location
            }),
            // Preserve this flag across redirects
            preventScrollReset: pendingPreventScrollReset
        });
        else {
            // If we have a navigation submission, we will preserve it through the
            // redirect navigation
            let overrideNavigation = $6c64ee69686350de$var$getLoadingNavigation(redirectLocation, submission);
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
            let results = await $6c64ee69686350de$var$callDataStrategyImpl(dataStrategyImpl, type, request, matchesToLoad, matches, manifest, mapRouteProperties);
            return await Promise.all(results.map((result, i)=>{
                if ($6c64ee69686350de$var$isRedirectHandlerResult(result)) {
                    let response = result.result;
                    return {
                        type: $6c64ee69686350de$var$ResultType.redirect,
                        response: $6c64ee69686350de$var$normalizeRelativeRoutingRedirectResponse(response, request, matchesToLoad[i].route.id, matches, basename, future.v7_relativeSplatPath)
                    };
                }
                return $6c64ee69686350de$var$convertHandlerResultToDataResult(result);
            }));
        } catch (e) {
            // If the outer dataStrategy method throws, just return the error for all
            // matches - and it'll naturally bubble to the root
            return matchesToLoad.map(()=>({
                    type: $6c64ee69686350de$var$ResultType.error,
                    error: e
                }));
        }
    }
    async function callLoadersAndMaybeResolveData(currentMatches, matches, matchesToLoad, fetchersToLoad, request) {
        let [loaderResults, ...fetcherResults] = await Promise.all([
            matchesToLoad.length ? callDataStrategy("loader", request, matchesToLoad, matches) : [],
            ...fetchersToLoad.map((f)=>{
                if (f.matches && f.match && f.controller) {
                    let fetcherRequest = $6c64ee69686350de$var$createClientSideRequest(init.history, f.path, f.controller.signal);
                    return callDataStrategy("loader", fetcherRequest, [
                        f.match
                    ], f.matches).then((r)=>r[0]);
                } else return Promise.resolve({
                    type: $6c64ee69686350de$var$ResultType.error,
                    error: $6c64ee69686350de$var$getInternalRouterError(404, {
                        pathname: f.path
                    })
                });
            })
        ]);
        await Promise.all([
            $6c64ee69686350de$var$resolveDeferredResults(currentMatches, matchesToLoad, loaderResults, loaderResults.map(()=>request.signal), false, state.loaderData),
            $6c64ee69686350de$var$resolveDeferredResults(currentMatches, fetchersToLoad.map((f)=>f.match), fetcherResults, fetchersToLoad.map((f)=>f.controller ? f.controller.signal : null), true)
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
        let boundaryMatch = $6c64ee69686350de$var$findNearestBoundary(state.matches, routeId);
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
        return state.fetchers.get(key) || $6c64ee69686350de$export$52eace9c284d3585;
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
        $6c64ee69686350de$export$3e9cee6b33872309(controller, "Expected fetch controller: " + key);
        controller.abort();
        fetchControllers.delete(key);
    }
    function markFetchersDone(keys) {
        for (let key of keys){
            let fetcher = getFetcher(key);
            let doneFetcher = $6c64ee69686350de$var$getDoneFetcher(fetcher.data);
            state.fetchers.set(key, doneFetcher);
        }
    }
    function markFetchRedirectsDone() {
        let doneKeys = [];
        let updatedFetchers = false;
        for (let key of fetchRedirectIds){
            let fetcher = state.fetchers.get(key);
            $6c64ee69686350de$export$3e9cee6b33872309(fetcher, "Expected fetcher: " + key);
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
            $6c64ee69686350de$export$3e9cee6b33872309(fetcher, "Expected fetcher: " + key);
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
        let blocker = state.blockers.get(key) || $6c64ee69686350de$export$386d57f03f0b2883;
        if (blockerFunctions.get(key) !== fn) blockerFunctions.set(key, fn);
        return blocker;
    }
    function deleteBlocker(key) {
        state.blockers.delete(key);
        blockerFunctions.delete(key);
    }
    // Utility function to update blockers, ensuring valid state transitions
    function updateBlocker(key, newBlocker) {
        let blocker = state.blockers.get(key) || $6c64ee69686350de$export$386d57f03f0b2883;
        // Poor mans state machine :)
        // https://mermaid.live/edit#pako:eNqVkc9OwzAMxl8l8nnjAYrEtDIOHEBIgwvKJTReGy3_lDpIqO27k6awMG0XcrLlnz87nwdonESogKXXBuE79rq75XZO3-yHds0RJVuv70YrPlUrCEe2HfrORS3rubqZfuhtpg5C9wk5tZ4VKcRUq88q9Z8RS0-48cE1iHJkL0ugbHuFLus9L6spZy8nX9MP2CNdomVaposqu3fGayT8T8-jJQwhepo_UtpgBQaDEUom04dZhAN1aJBDlUKJBxE1ceB2Smj0Mln-IBW5AFU2dwUiktt_2Qaq2dBfaKdEup85UV7Yd-dKjlnkabl2Pvr0DTkTreM
        $6c64ee69686350de$export$3e9cee6b33872309(blocker.state === "unblocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "proceeding" || blocker.state === "blocked" && newBlocker.state === "unblocked" || blocker.state === "proceeding" && newBlocker.state === "unblocked", "Invalid blocker state transition: " + blocker.state + " -> " + newBlocker.state);
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
        if (blockerFunctions.size > 1) $6c64ee69686350de$export$c0e02632e14916fd(false, "A router only supports one blocker at a time");
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
        if (!initialScrollRestored && state.navigation === $6c64ee69686350de$export$ed3e14b2f9e105d0) {
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
            let key = getScrollRestorationKey(location, matches.map((m)=>$6c64ee69686350de$export$b3fac024fad9e8ff(m, state.loaderData)));
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
        inFlightDataRoutes = $6c64ee69686350de$export$4a6d22b32134ea5d(newRoutes, mapRouteProperties, undefined, manifest);
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
const $6c64ee69686350de$export$4d0306f8f6a4585b = Symbol("deferred");
function $6c64ee69686350de$export$3336b097a6fbc59a(routes, opts) {
    $6c64ee69686350de$export$3e9cee6b33872309(routes.length > 0, "You must provide a non-empty routes array to createStaticHandler");
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
    } else mapRouteProperties = $6c64ee69686350de$var$defaultMapRouteProperties;
    // Config driven behavior flags
    let future = $6c64ee69686350de$var$_extends({
        v7_relativeSplatPath: false,
        v7_throwAbortReason: false
    }, opts ? opts.future : null);
    let dataRoutes = $6c64ee69686350de$export$4a6d22b32134ea5d(routes, mapRouteProperties, undefined, manifest);
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
        let location = $6c64ee69686350de$var$createLocation("", $6c64ee69686350de$export$fe53371bee54353d(url), null, "default");
        let matches = $6c64ee69686350de$export$2708184779ceb39d(dataRoutes, location, basename);
        // SSR supports HEAD requests while SPA doesn't
        if (!$6c64ee69686350de$var$isValidMethod(method) && method !== "HEAD") {
            let error = $6c64ee69686350de$var$getInternalRouterError(405, {
                method: method
            });
            let { matches: methodNotAllowedMatches, route: route } = $6c64ee69686350de$var$getShortCircuitMatches(dataRoutes);
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
            let error = $6c64ee69686350de$var$getInternalRouterError(404, {
                pathname: location.pathname
            });
            let { matches: notFoundMatches, route: route } = $6c64ee69686350de$var$getShortCircuitMatches(dataRoutes);
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
        if ($6c64ee69686350de$var$isResponse(result)) return result;
        // When returning StaticHandlerContext, we patch back in the location here
        // since we need it for React Context.  But this helps keep our submit and
        // loadRouteData operating on a Request instead of a Location
        return $6c64ee69686350de$var$_extends({
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
        let location = $6c64ee69686350de$var$createLocation("", $6c64ee69686350de$export$fe53371bee54353d(url), null, "default");
        let matches = $6c64ee69686350de$export$2708184779ceb39d(dataRoutes, location, basename);
        // SSR supports HEAD requests while SPA doesn't
        if (!$6c64ee69686350de$var$isValidMethod(method) && method !== "HEAD" && method !== "OPTIONS") throw $6c64ee69686350de$var$getInternalRouterError(405, {
            method: method
        });
        else if (!matches) throw $6c64ee69686350de$var$getInternalRouterError(404, {
            pathname: location.pathname
        });
        let match = routeId ? matches.find((m)=>m.route.id === routeId) : $6c64ee69686350de$var$getTargetMatch(matches, location);
        if (routeId && !match) throw $6c64ee69686350de$var$getInternalRouterError(403, {
            pathname: location.pathname,
            routeId: routeId
        });
        else if (!match) // This should never hit I don't think?
        throw $6c64ee69686350de$var$getInternalRouterError(404, {
            pathname: location.pathname
        });
        let result = await queryImpl(request, location, matches, requestContext, unstable_dataStrategy || null, false, match);
        if ($6c64ee69686350de$var$isResponse(result)) return result;
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
            if ((_result$activeDeferre = result.activeDeferreds) != null && _result$activeDeferre[match.route.id]) data[$6c64ee69686350de$export$4d0306f8f6a4585b] = result.activeDeferreds[match.route.id];
            return data;
        }
        return undefined;
    }
    async function queryImpl(request, location, matches, requestContext, unstable_dataStrategy, skipLoaderErrorBubbling, routeMatch) {
        $6c64ee69686350de$export$3e9cee6b33872309(request.signal, "query()/queryRoute() requests must contain an AbortController signal");
        try {
            if ($6c64ee69686350de$var$isMutationMethod(request.method.toLowerCase())) {
                let result = await submit(request, matches, routeMatch || $6c64ee69686350de$var$getTargetMatch(matches, location), requestContext, unstable_dataStrategy, skipLoaderErrorBubbling, routeMatch != null);
                return result;
            }
            let result = await loadRouteData(request, matches, requestContext, unstable_dataStrategy, skipLoaderErrorBubbling, routeMatch);
            return $6c64ee69686350de$var$isResponse(result) ? result : $6c64ee69686350de$var$_extends({}, result, {
                actionData: null,
                actionHeaders: {}
            });
        } catch (e) {
            // If the user threw/returned a Response in callLoaderOrAction for a
            // `queryRoute` call, we throw the `HandlerResult` to bail out early
            // and then return or throw the raw Response here accordingly
            if ($6c64ee69686350de$var$isHandlerResult(e) && $6c64ee69686350de$var$isResponse(e.result)) {
                if (e.type === $6c64ee69686350de$var$ResultType.error) throw e.result;
                return e.result;
            }
            // Redirects are always returned since they don't propagate to catch
            // boundaries
            if ($6c64ee69686350de$var$isRedirectResponse(e)) return e;
            throw e;
        }
    }
    async function submit(request, matches, actionMatch, requestContext, unstable_dataStrategy, skipLoaderErrorBubbling, isRouteRequest) {
        let result;
        if (!actionMatch.route.action && !actionMatch.route.lazy) {
            let error = $6c64ee69686350de$var$getInternalRouterError(405, {
                method: request.method,
                pathname: new URL(request.url).pathname,
                routeId: actionMatch.route.id
            });
            if (isRouteRequest) throw error;
            result = {
                type: $6c64ee69686350de$var$ResultType.error,
                error: error
            };
        } else {
            let results = await callDataStrategy("action", request, [
                actionMatch
            ], matches, isRouteRequest, requestContext, unstable_dataStrategy);
            result = results[0];
            if (request.signal.aborted) $6c64ee69686350de$var$throwStaticHandlerAbortedError(request, isRouteRequest, future);
        }
        if ($6c64ee69686350de$var$isRedirectResult(result)) // Uhhhh - this should never happen, we should always throw these from
        // callLoaderOrAction, but the type narrowing here keeps TS happy and we
        // can get back on the "throw all redirect responses" train here should
        // this ever happen :/
        throw new Response(null, {
            status: result.response.status,
            headers: {
                Location: result.response.headers.get("Location")
            }
        });
        if ($6c64ee69686350de$var$isDeferredResult(result)) {
            let error = $6c64ee69686350de$var$getInternalRouterError(400, {
                type: "defer-action"
            });
            if (isRouteRequest) throw error;
            result = {
                type: $6c64ee69686350de$var$ResultType.error,
                error: error
            };
        }
        if (isRouteRequest) {
            // Note: This should only be non-Response values if we get here, since
            // isRouteRequest should throw any Response received in callLoaderOrAction
            if ($6c64ee69686350de$var$isErrorResult(result)) throw result.error;
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
        if ($6c64ee69686350de$var$isErrorResult(result)) {
            // Store off the pending error - we use it to determine which loaders
            // to call and will commit it when we complete the navigation
            let boundaryMatch = skipLoaderErrorBubbling ? actionMatch : $6c64ee69686350de$var$findNearestBoundary(matches, actionMatch.route.id);
            let context = await loadRouteData(loaderRequest, matches, requestContext, unstable_dataStrategy, skipLoaderErrorBubbling, null, [
                boundaryMatch.route.id,
                result
            ]);
            // action status codes take precedence over loader status codes
            return $6c64ee69686350de$var$_extends({}, context, {
                statusCode: $6c64ee69686350de$export$972111febbeef05b(result.error) ? result.error.status : result.statusCode != null ? result.statusCode : 500,
                actionData: null,
                actionHeaders: $6c64ee69686350de$var$_extends({}, result.headers ? {
                    [actionMatch.route.id]: result.headers
                } : {})
            });
        }
        let context = await loadRouteData(loaderRequest, matches, requestContext, unstable_dataStrategy, skipLoaderErrorBubbling, null);
        return $6c64ee69686350de$var$_extends({}, context, {
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
        if (isRouteRequest && !(routeMatch != null && routeMatch.route.loader) && !(routeMatch != null && routeMatch.route.lazy)) throw $6c64ee69686350de$var$getInternalRouterError(400, {
            method: request.method,
            pathname: new URL(request.url).pathname,
            routeId: routeMatch == null ? void 0 : routeMatch.route.id
        });
        let requestMatches = routeMatch ? [
            routeMatch
        ] : pendingActionResult && $6c64ee69686350de$var$isErrorResult(pendingActionResult[1]) ? $6c64ee69686350de$var$getLoaderMatchesUntilBoundary(matches, pendingActionResult[0]) : matches;
        let matchesToLoad = requestMatches.filter((m)=>m.route.loader || m.route.lazy);
        // Short circuit if we have no loaders to run (query())
        if (matchesToLoad.length === 0) return {
            matches: matches,
            // Add a null for all matched routes for proper revalidation on the client
            loaderData: matches.reduce((acc, m)=>Object.assign(acc, {
                    [m.route.id]: null
                }), {}),
            errors: pendingActionResult && $6c64ee69686350de$var$isErrorResult(pendingActionResult[1]) ? {
                [pendingActionResult[0]]: pendingActionResult[1].error
            } : null,
            statusCode: 200,
            loaderHeaders: {},
            activeDeferreds: null
        };
        let results = await callDataStrategy("loader", request, matchesToLoad, matches, isRouteRequest, requestContext, unstable_dataStrategy);
        if (request.signal.aborted) $6c64ee69686350de$var$throwStaticHandlerAbortedError(request, isRouteRequest, future);
        // Process and commit output from loaders
        let activeDeferreds = new Map();
        let context = $6c64ee69686350de$var$processRouteLoaderData(matches, matchesToLoad, results, pendingActionResult, activeDeferreds, skipLoaderErrorBubbling);
        // Add a null for any non-loader matches for proper revalidation on the client
        let executedLoaders = new Set(matchesToLoad.map((match)=>match.route.id));
        matches.forEach((match)=>{
            if (!executedLoaders.has(match.route.id)) context.loaderData[match.route.id] = null;
        });
        return $6c64ee69686350de$var$_extends({}, context, {
            matches: matches,
            activeDeferreds: activeDeferreds.size > 0 ? Object.fromEntries(activeDeferreds.entries()) : null
        });
    }
    // Utility wrapper for calling dataStrategy server-side without having to
    // pass around the manifest, mapRouteProperties, etc.
    async function callDataStrategy(type, request, matchesToLoad, matches, isRouteRequest, requestContext, unstable_dataStrategy) {
        let results = await $6c64ee69686350de$var$callDataStrategyImpl(unstable_dataStrategy || $6c64ee69686350de$var$defaultDataStrategy, type, request, matchesToLoad, matches, manifest, mapRouteProperties, requestContext);
        return await Promise.all(results.map((result, i)=>{
            if ($6c64ee69686350de$var$isRedirectHandlerResult(result)) {
                let response = result.result;
                // Throw redirects and let the server handle them with an HTTP redirect
                throw $6c64ee69686350de$var$normalizeRelativeRoutingRedirectResponse(response, request, matchesToLoad[i].route.id, matches, basename, future.v7_relativeSplatPath);
            }
            if ($6c64ee69686350de$var$isResponse(result.result) && isRouteRequest) // For SSR single-route requests, we want to hand Responses back
            // directly without unwrapping
            throw result;
            return $6c64ee69686350de$var$convertHandlerResultToDataResult(result);
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
 */ function $6c64ee69686350de$export$fec11da027c70692(routes, context, error) {
    let newContext = $6c64ee69686350de$var$_extends({}, context, {
        statusCode: $6c64ee69686350de$export$972111febbeef05b(error) ? error.status : 500,
        errors: {
            [context._deepestRenderedBoundaryId || routes[0].id]: error
        }
    });
    return newContext;
}
function $6c64ee69686350de$var$throwStaticHandlerAbortedError(request, isRouteRequest, future) {
    if (future.v7_throwAbortReason && request.signal.reason !== undefined) throw request.signal.reason;
    let method = isRouteRequest ? "queryRoute" : "query";
    throw new Error(method + "() call aborted: " + request.method + " " + request.url);
}
function $6c64ee69686350de$var$isSubmissionNavigation(opts) {
    return opts != null && ("formData" in opts && opts.formData != null || "body" in opts && opts.body !== undefined);
}
function $6c64ee69686350de$var$normalizeTo(location, matches, basename, prependBasename, to, v7_relativeSplatPath, fromRouteId, relative) {
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
    let path = $6c64ee69686350de$export$cae722b0cc860f13(to ? to : ".", $6c64ee69686350de$export$a5784978eca585fa(contextualMatches, v7_relativeSplatPath), $6c64ee69686350de$export$b69e3301ce081aa3(location.pathname, basename) || location.pathname, relative === "path");
    // When `to` is not specified we inherit search/hash from the current
    // location, unlike when to="." and we just inherit the path.
    // See https://github.com/remix-run/remix/issues/927
    if (to == null) {
        path.search = location.search;
        path.hash = location.hash;
    }
    // Add an ?index param for matched index routes if we don't already have one
    if ((to == null || to === "" || to === ".") && activeRouteMatch && activeRouteMatch.route.index && !$6c64ee69686350de$var$hasNakedIndexQuery(path.search)) path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
    // If we're operating within a basename, prepend it to the pathname.  If
    // this is a root navigation, then just use the raw basename which allows
    // the basename to have full control over the presence of a trailing slash
    // on root actions
    if (prependBasename && basename !== "/") path.pathname = path.pathname === "/" ? basename : $6c64ee69686350de$export$86d9a7913e44197e([
        basename,
        path.pathname
    ]);
    return $6c64ee69686350de$export$fe53371bee54353d(path);
}
// Normalize navigation options by converting formMethod=GET formData objects to
// URLSearchParams so they behave identically to links with query params
function $6c64ee69686350de$var$normalizeNavigateOptions(normalizeFormMethod, isFetcher, path, opts) {
    // Return location verbatim on non-submission navigations
    if (!opts || !$6c64ee69686350de$var$isSubmissionNavigation(opts)) return {
        path: path
    };
    if (opts.formMethod && !$6c64ee69686350de$var$isValidMethod(opts.formMethod)) return {
        path: path,
        error: $6c64ee69686350de$var$getInternalRouterError(405, {
            method: opts.formMethod
        })
    };
    let getInvalidBodyError = ()=>({
            path: path,
            error: $6c64ee69686350de$var$getInternalRouterError(400, {
                type: "invalid-body"
            })
        });
    // Create a Submission on non-GET navigations
    let rawFormMethod = opts.formMethod || "get";
    let formMethod = normalizeFormMethod ? rawFormMethod.toUpperCase() : rawFormMethod.toLowerCase();
    let formAction = $6c64ee69686350de$var$stripHashFromPath(path);
    if (opts.body !== undefined) {
        if (opts.formEncType === "text/plain") {
            // text only support POST/PUT/PATCH/DELETE submissions
            if (!$6c64ee69686350de$var$isMutationMethod(formMethod)) return getInvalidBodyError();
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
            if (!$6c64ee69686350de$var$isMutationMethod(formMethod)) return getInvalidBodyError();
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
    $6c64ee69686350de$export$3e9cee6b33872309(typeof FormData === "function", "FormData is not available in this environment");
    let searchParams;
    let formData;
    if (opts.formData) {
        searchParams = $6c64ee69686350de$var$convertFormDataToSearchParams(opts.formData);
        formData = opts.formData;
    } else if (opts.body instanceof FormData) {
        searchParams = $6c64ee69686350de$var$convertFormDataToSearchParams(opts.body);
        formData = opts.body;
    } else if (opts.body instanceof URLSearchParams) {
        searchParams = opts.body;
        formData = $6c64ee69686350de$var$convertSearchParamsToFormData(searchParams);
    } else if (opts.body == null) {
        searchParams = new URLSearchParams();
        formData = new FormData();
    } else try {
        searchParams = new URLSearchParams(opts.body);
        formData = $6c64ee69686350de$var$convertSearchParamsToFormData(searchParams);
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
    if ($6c64ee69686350de$var$isMutationMethod(submission.formMethod)) return {
        path: path,
        submission: submission
    };
    // Flatten submission onto URLSearchParams for GET submissions
    let parsedPath = $6c64ee69686350de$export$8ccf933b0513f8d0(path);
    // On GET navigation submissions we can drop the ?index param from the
    // resulting location since all loaders will run.  But fetcher GET submissions
    // only run a single loader so we need to preserve any incoming ?index params
    if (isFetcher && parsedPath.search && $6c64ee69686350de$var$hasNakedIndexQuery(parsedPath.search)) searchParams.append("index", "");
    parsedPath.search = "?" + searchParams;
    return {
        path: $6c64ee69686350de$export$fe53371bee54353d(parsedPath),
        submission: submission
    };
}
// Filter out all routes below any caught error as they aren't going to
// render so we don't need to load them
function $6c64ee69686350de$var$getLoaderMatchesUntilBoundary(matches, boundaryId) {
    let boundaryMatches = matches;
    if (boundaryId) {
        let index = matches.findIndex((m)=>m.route.id === boundaryId);
        if (index >= 0) boundaryMatches = matches.slice(0, index);
    }
    return boundaryMatches;
}
function $6c64ee69686350de$var$getMatchesToLoad(history, state, matches, submission, location, isInitialLoad, skipActionErrorRevalidation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, deletedFetchers, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, pendingActionResult) {
    let actionResult = pendingActionResult ? $6c64ee69686350de$var$isErrorResult(pendingActionResult[1]) ? pendingActionResult[1].error : pendingActionResult[1].data : undefined;
    let currentUrl = history.createURL(state.location);
    let nextUrl = history.createURL(location);
    // Pick navigation matches that are net-new or qualify for revalidation
    let boundaryId = pendingActionResult && $6c64ee69686350de$var$isErrorResult(pendingActionResult[1]) ? pendingActionResult[0] : undefined;
    let boundaryMatches = boundaryId ? $6c64ee69686350de$var$getLoaderMatchesUntilBoundary(matches, boundaryId) : matches;
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
        if ($6c64ee69686350de$var$isNewLoader(state.loaderData, state.matches[index], match) || cancelledDeferredRoutes.some((id)=>id === match.route.id)) return true;
        // This is the default implementation for when we revalidate.  If the route
        // provides it's own implementation, then we give them full control but
        // provide this value so they can leverage it if needed after they check
        // their own specific use cases
        let currentRouteMatch = state.matches[index];
        let nextRouteMatch = match;
        return $6c64ee69686350de$var$shouldRevalidateLoader(match, $6c64ee69686350de$var$_extends({
            currentUrl: currentUrl,
            currentParams: currentRouteMatch.params,
            nextUrl: nextUrl,
            nextParams: nextRouteMatch.params
        }, submission, {
            actionResult: actionResult,
            unstable_actionStatus: actionStatus,
            defaultShouldRevalidate: shouldSkipRevalidation ? false : // Forced revalidation due to submission, useRevalidator, or X-Remix-Revalidate
            isRevalidationRequired || currentUrl.pathname + currentUrl.search === nextUrl.pathname + nextUrl.search || // Search params affect all loaders
            currentUrl.search !== nextUrl.search || $6c64ee69686350de$var$isNewRouteInstance(currentRouteMatch, nextRouteMatch)
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
        let fetcherMatches = $6c64ee69686350de$export$2708184779ceb39d(routesToUse, f.path, basename);
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
        let fetcherMatch = $6c64ee69686350de$var$getTargetMatch(fetcherMatches, f.path);
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
        shouldRevalidate = $6c64ee69686350de$var$shouldRevalidateLoader(fetcherMatch, $6c64ee69686350de$var$_extends({
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
function $6c64ee69686350de$var$isNewLoader(currentLoaderData, currentMatch, match) {
    let isNew = // [a] -> [a, b]
    !currentMatch || // [a, b] -> [a, c]
    match.route.id !== currentMatch.route.id;
    // Handle the case that we don't have data for a re-used route, potentially
    // from a prior error or from a cancelled pending deferred
    let isMissingData = currentLoaderData[match.route.id] === undefined;
    // Always load if this is a net-new route or we don't yet have data
    return isNew || isMissingData;
}
function $6c64ee69686350de$var$isNewRouteInstance(currentMatch, match) {
    let currentPath = currentMatch.route.path;
    return(// param change for this match, /users/123 -> /users/456
    currentMatch.pathname !== match.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    currentPath != null && currentPath.endsWith("*") && currentMatch.params["*"] !== match.params["*"]);
}
function $6c64ee69686350de$var$shouldRevalidateLoader(loaderMatch, arg) {
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
 */ async function $6c64ee69686350de$var$loadLazyRouteModule(route, mapRouteProperties, manifest) {
    if (!route.lazy) return;
    let lazyRoute = await route.lazy();
    // If the lazy route function was executed and removed by another parallel
    // call then we can return - first lazy() to finish wins because the return
    // value of lazy is expected to be static
    if (!route.lazy) return;
    let routeToUpdate = manifest[route.id];
    $6c64ee69686350de$export$3e9cee6b33872309(routeToUpdate, "No route found in manifest");
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
        $6c64ee69686350de$export$c0e02632e14916fd(!isPropertyStaticallyDefined, 'Route "' + routeToUpdate.id + '" has a static property "' + lazyRouteProperty + '" ' + "defined but its lazy function is also returning a value for this property. " + ('The lazy route property "' + lazyRouteProperty + '" will be ignored.'));
        if (!isPropertyStaticallyDefined && !$6c64ee69686350de$var$immutableRouteKeys.has(lazyRouteProperty)) routeUpdates[lazyRouteProperty] = lazyRoute[lazyRouteProperty];
    }
    // Mutate the route with the provided updates.  Do this first so we pass
    // the updated version to mapRouteProperties
    Object.assign(routeToUpdate, routeUpdates);
    // Mutate the `hasErrorBoundary` property on the route based on the route
    // updates and remove the `lazy` function so we don't resolve the lazy
    // route again.
    Object.assign(routeToUpdate, $6c64ee69686350de$var$_extends({}, mapRouteProperties(routeToUpdate), {
        lazy: undefined
    }));
}
// Default implementation of `dataStrategy` which fetches all loaders in parallel
function $6c64ee69686350de$var$defaultDataStrategy(opts) {
    return Promise.all(opts.matches.map((m)=>m.resolve()));
}
async function $6c64ee69686350de$var$callDataStrategyImpl(dataStrategyImpl, type, request, matchesToLoad, matches, manifest, mapRouteProperties, requestContext) {
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
                return shouldLoad ? $6c64ee69686350de$var$callLoaderOrAction(type, request, match, manifest, mapRouteProperties, handlerOverride, requestContext) : Promise.resolve({
                    type: $6c64ee69686350de$var$ResultType.data,
                    result: undefined
                });
            };
            return $6c64ee69686350de$var$_extends({}, match, {
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
    matches.forEach((m)=>$6c64ee69686350de$export$3e9cee6b33872309(loadedMatches.has(m.route.id), '`match.resolve()` was not called for route id "' + m.route.id + '". ' + "You must call `match.resolve()` on every match passed to " + "`dataStrategy` to ensure all routes are properly loaded."));
    // Filter out any middleware-only matches for which we didn't need to run handlers
    return results.filter((_, i)=>routeIdsToLoad.has(matches[i].route.id));
}
// Default logic for calling a loader/action is the user has no specified a dataStrategy
async function $6c64ee69686350de$var$callLoaderOrAction(type, request, match, manifest, mapRouteProperties, handlerOverride, staticContext) {
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
                    $6c64ee69686350de$var$loadLazyRouteModule(match.route, mapRouteProperties, manifest)
                ]);
                if (handlerError !== undefined) throw handlerError;
                result = value;
            } else {
                // Load lazy route module, then run any returned handler
                await $6c64ee69686350de$var$loadLazyRouteModule(match.route, mapRouteProperties, manifest);
                handler = match.route[type];
                if (handler) // Handler still runs even if we got interrupted to maintain consistency
                // with un-abortable behavior of handler execution on non-lazy or
                // previously-lazy-loaded routes
                result = await runHandler(handler);
                else if (type === "action") {
                    let url = new URL(request.url);
                    let pathname = url.pathname + url.search;
                    throw $6c64ee69686350de$var$getInternalRouterError(405, {
                        method: request.method,
                        pathname: pathname,
                        routeId: match.route.id
                    });
                } else // lazy() route has no loader to run.  Short circuit here so we don't
                // hit the invariant below that errors on returning undefined.
                return {
                    type: $6c64ee69686350de$var$ResultType.data,
                    result: undefined
                };
            }
        } else if (!handler) {
            let url = new URL(request.url);
            let pathname = url.pathname + url.search;
            throw $6c64ee69686350de$var$getInternalRouterError(404, {
                pathname: pathname
            });
        } else result = await runHandler(handler);
        $6c64ee69686350de$export$3e9cee6b33872309(result.result !== undefined, "You defined " + (type === "action" ? "an action" : "a loader") + " for route " + ('"' + match.route.id + "\" but didn't return anything from your `" + type + "` ") + "function. Please return a value or `null`.");
    } catch (e) {
        // We should already be catching and converting normal handler executions to
        // HandlerResults and returning them, so anything that throws here is an
        // unexpected error we still need to wrap
        return {
            type: $6c64ee69686350de$var$ResultType.error,
            result: e
        };
    } finally{
        if (onReject) request.signal.removeEventListener("abort", onReject);
    }
    return result;
}
async function $6c64ee69686350de$var$convertHandlerResultToDataResult(handlerResult) {
    let { result: result, type: type, status: status } = handlerResult;
    if ($6c64ee69686350de$var$isResponse(result)) {
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
                type: $6c64ee69686350de$var$ResultType.error,
                error: e
            };
        }
        if (type === $6c64ee69686350de$var$ResultType.error) return {
            type: $6c64ee69686350de$var$ResultType.error,
            error: new $6c64ee69686350de$export$6c6580e81da25755(result.status, result.statusText, data),
            statusCode: result.status,
            headers: result.headers
        };
        return {
            type: $6c64ee69686350de$var$ResultType.data,
            data: data,
            statusCode: result.status,
            headers: result.headers
        };
    }
    if (type === $6c64ee69686350de$var$ResultType.error) return {
        type: $6c64ee69686350de$var$ResultType.error,
        error: result,
        statusCode: $6c64ee69686350de$export$972111febbeef05b(result) ? result.status : status
    };
    if ($6c64ee69686350de$export$fbcedacb60443473(result)) {
        var _result$init, _result$init2;
        return {
            type: $6c64ee69686350de$var$ResultType.deferred,
            deferredData: result,
            statusCode: (_result$init = result.init) == null ? void 0 : _result$init.status,
            headers: ((_result$init2 = result.init) == null ? void 0 : _result$init2.headers) && new Headers(result.init.headers)
        };
    }
    return {
        type: $6c64ee69686350de$var$ResultType.data,
        data: result,
        statusCode: status
    };
}
// Support relative routing in internal redirects
function $6c64ee69686350de$var$normalizeRelativeRoutingRedirectResponse(response, request, routeId, matches, basename, v7_relativeSplatPath) {
    let location = response.headers.get("Location");
    $6c64ee69686350de$export$3e9cee6b33872309(location, "Redirects returned/thrown from loaders/actions must have a Location header");
    if (!$6c64ee69686350de$var$ABSOLUTE_URL_REGEX.test(location)) {
        let trimmedMatches = matches.slice(0, matches.findIndex((m)=>m.route.id === routeId) + 1);
        location = $6c64ee69686350de$var$normalizeTo(new URL(request.url), trimmedMatches, basename, true, location, v7_relativeSplatPath);
        response.headers.set("Location", location);
    }
    return response;
}
function $6c64ee69686350de$var$normalizeRedirectLocation(location, currentUrl, basename) {
    if ($6c64ee69686350de$var$ABSOLUTE_URL_REGEX.test(location)) {
        // Strip off the protocol+origin for same-origin + same-basename absolute redirects
        let normalizedLocation = location;
        let url = normalizedLocation.startsWith("//") ? new URL(currentUrl.protocol + normalizedLocation) : new URL(normalizedLocation);
        let isSameBasename = $6c64ee69686350de$export$b69e3301ce081aa3(url.pathname, basename) != null;
        if (url.origin === currentUrl.origin && isSameBasename) return url.pathname + url.search + url.hash;
    }
    return location;
}
// Utility method for creating the Request instances for loaders/actions during
// client-side navigations and fetches.  During SSR we will always have a
// Request instance from the static handler (query/queryRoute)
function $6c64ee69686350de$var$createClientSideRequest(history, location, signal, submission) {
    let url = history.createURL($6c64ee69686350de$var$stripHashFromPath(location)).toString();
    let init = {
        signal: signal
    };
    if (submission && $6c64ee69686350de$var$isMutationMethod(submission.formMethod)) {
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
        init.body = $6c64ee69686350de$var$convertFormDataToSearchParams(submission.formData);
        else // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)
        init.body = submission.formData;
    }
    return new Request(url, init);
}
function $6c64ee69686350de$var$convertFormDataToSearchParams(formData) {
    let searchParams = new URLSearchParams();
    for (let [key, value] of formData.entries())// https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#converting-an-entry-list-to-a-list-of-name-value-pairs
    searchParams.append(key, typeof value === "string" ? value : value.name);
    return searchParams;
}
function $6c64ee69686350de$var$convertSearchParamsToFormData(searchParams) {
    let formData = new FormData();
    for (let [key, value] of searchParams.entries())formData.append(key, value);
    return formData;
}
function $6c64ee69686350de$var$processRouteLoaderData(matches, matchesToLoad, results, pendingActionResult, activeDeferreds, skipLoaderErrorBubbling) {
    // Fill in loaderData/errors from our loaders
    let loaderData = {};
    let errors = null;
    let statusCode;
    let foundError = false;
    let loaderHeaders = {};
    let pendingError = pendingActionResult && $6c64ee69686350de$var$isErrorResult(pendingActionResult[1]) ? pendingActionResult[1].error : undefined;
    // Process loader results into state.loaderData/state.errors
    results.forEach((result, index)=>{
        let id = matchesToLoad[index].route.id;
        $6c64ee69686350de$export$3e9cee6b33872309(!$6c64ee69686350de$var$isRedirectResult(result), "Cannot handle redirect results in processLoaderData");
        if ($6c64ee69686350de$var$isErrorResult(result)) {
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
                let boundaryMatch = $6c64ee69686350de$var$findNearestBoundary(matches, id);
                if (errors[boundaryMatch.route.id] == null) errors[boundaryMatch.route.id] = error;
            }
            // Clear our any prior loaderData for the throwing route
            loaderData[id] = undefined;
            // Once we find our first (highest) error, we set the status code and
            // prevent deeper status codes from overriding
            if (!foundError) {
                foundError = true;
                statusCode = $6c64ee69686350de$export$972111febbeef05b(result.error) ? result.error.status : 500;
            }
            if (result.headers) loaderHeaders[id] = result.headers;
        } else if ($6c64ee69686350de$var$isDeferredResult(result)) {
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
function $6c64ee69686350de$var$processLoaderData(state, matches, matchesToLoad, results, pendingActionResult, revalidatingFetchers, fetcherResults, activeDeferreds) {
    let { loaderData: loaderData, errors: errors } = $6c64ee69686350de$var$processRouteLoaderData(matches, matchesToLoad, results, pendingActionResult, activeDeferreds, false // This method is only called client side so we always want to bubble
    );
    // Process results from our revalidating fetchers
    for(let index = 0; index < revalidatingFetchers.length; index++){
        let { key: key, match: match, controller: controller } = revalidatingFetchers[index];
        $6c64ee69686350de$export$3e9cee6b33872309(fetcherResults !== undefined && fetcherResults[index] !== undefined, "Did not find corresponding fetcher result");
        let result = fetcherResults[index];
        // Process fetcher non-redirect errors
        if (controller && controller.signal.aborted) continue;
        else if ($6c64ee69686350de$var$isErrorResult(result)) {
            let boundaryMatch = $6c64ee69686350de$var$findNearestBoundary(state.matches, match == null ? void 0 : match.route.id);
            if (!(errors && errors[boundaryMatch.route.id])) errors = $6c64ee69686350de$var$_extends({}, errors, {
                [boundaryMatch.route.id]: result.error
            });
            state.fetchers.delete(key);
        } else if ($6c64ee69686350de$var$isRedirectResult(result)) // Should never get here, redirects should get processed above, but we
        // keep this to type narrow to a success result in the else
        $6c64ee69686350de$export$3e9cee6b33872309(false, "Unhandled fetcher revalidation redirect");
        else if ($6c64ee69686350de$var$isDeferredResult(result)) // Should never get here, deferred data should be awaited for fetchers
        // in resolveDeferredResults
        $6c64ee69686350de$export$3e9cee6b33872309(false, "Unhandled fetcher deferred data");
        else {
            let doneFetcher = $6c64ee69686350de$var$getDoneFetcher(result.data);
            state.fetchers.set(key, doneFetcher);
        }
    }
    return {
        loaderData: loaderData,
        errors: errors
    };
}
function $6c64ee69686350de$var$mergeLoaderData(loaderData, newLoaderData, matches, errors) {
    let mergedLoaderData = $6c64ee69686350de$var$_extends({}, newLoaderData);
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
function $6c64ee69686350de$var$getActionDataForCommit(pendingActionResult) {
    if (!pendingActionResult) return {};
    return $6c64ee69686350de$var$isErrorResult(pendingActionResult[1]) ? {
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
function $6c64ee69686350de$var$findNearestBoundary(matches, routeId) {
    let eligibleMatches = routeId ? matches.slice(0, matches.findIndex((m)=>m.route.id === routeId) + 1) : [
        ...matches
    ];
    return eligibleMatches.reverse().find((m)=>m.route.hasErrorBoundary === true) || matches[0];
}
function $6c64ee69686350de$var$getShortCircuitMatches(routes) {
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
function $6c64ee69686350de$var$getInternalRouterError(status, _temp5) {
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
    return new $6c64ee69686350de$export$6c6580e81da25755(status || 500, statusText, new Error(errorMessage), true);
}
// Find any returned redirect errors, starting from the lowest match
function $6c64ee69686350de$var$findRedirect(results) {
    for(let i = results.length - 1; i >= 0; i--){
        let result = results[i];
        if ($6c64ee69686350de$var$isRedirectResult(result)) return {
            result: result,
            idx: i
        };
    }
}
function $6c64ee69686350de$var$stripHashFromPath(path) {
    let parsedPath = typeof path === "string" ? $6c64ee69686350de$export$8ccf933b0513f8d0(path) : path;
    return $6c64ee69686350de$export$fe53371bee54353d($6c64ee69686350de$var$_extends({}, parsedPath, {
        hash: ""
    }));
}
function $6c64ee69686350de$var$isHashChangeOnly(a, b) {
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
function $6c64ee69686350de$var$isHandlerResult(result) {
    return result != null && typeof result === "object" && "type" in result && "result" in result && (result.type === $6c64ee69686350de$var$ResultType.data || result.type === $6c64ee69686350de$var$ResultType.error);
}
function $6c64ee69686350de$var$isRedirectHandlerResult(result) {
    return $6c64ee69686350de$var$isResponse(result.result) && $6c64ee69686350de$var$redirectStatusCodes.has(result.result.status);
}
function $6c64ee69686350de$var$isDeferredResult(result) {
    return result.type === $6c64ee69686350de$var$ResultType.deferred;
}
function $6c64ee69686350de$var$isErrorResult(result) {
    return result.type === $6c64ee69686350de$var$ResultType.error;
}
function $6c64ee69686350de$var$isRedirectResult(result) {
    return (result && result.type) === $6c64ee69686350de$var$ResultType.redirect;
}
function $6c64ee69686350de$export$fbcedacb60443473(value) {
    let deferred = value;
    return deferred && typeof deferred === "object" && typeof deferred.data === "object" && typeof deferred.subscribe === "function" && typeof deferred.cancel === "function" && typeof deferred.resolveData === "function";
}
function $6c64ee69686350de$var$isResponse(value) {
    return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
}
function $6c64ee69686350de$var$isRedirectResponse(result) {
    if (!$6c64ee69686350de$var$isResponse(result)) return false;
    let status = result.status;
    let location = result.headers.get("Location");
    return status >= 300 && status <= 399 && location != null;
}
function $6c64ee69686350de$var$isValidMethod(method) {
    return $6c64ee69686350de$var$validRequestMethods.has(method.toLowerCase());
}
function $6c64ee69686350de$var$isMutationMethod(method) {
    return $6c64ee69686350de$var$validMutationMethods.has(method.toLowerCase());
}
async function $6c64ee69686350de$var$resolveDeferredResults(currentMatches, matchesToLoad, results, signals, isFetcher, currentLoaderData) {
    for(let index = 0; index < results.length; index++){
        let result = results[index];
        let match = matchesToLoad[index];
        // If we don't have a match, then we can have a deferred result to do
        // anything with.  This is for revalidating fetchers where the route was
        // removed during HMR
        if (!match) continue;
        let currentMatch = currentMatches.find((m)=>m.route.id === match.route.id);
        let isRevalidatingLoader = currentMatch != null && !$6c64ee69686350de$var$isNewRouteInstance(currentMatch, match) && (currentLoaderData && currentLoaderData[match.route.id]) !== undefined;
        if ($6c64ee69686350de$var$isDeferredResult(result) && (isFetcher || isRevalidatingLoader)) {
            // Note: we do not have to touch activeDeferreds here since we race them
            // against the signal in resolveDeferredData and they'll get aborted
            // there if needed
            let signal = signals[index];
            $6c64ee69686350de$export$3e9cee6b33872309(signal, "Expected an AbortSignal for revalidating fetcher deferred result");
            await $6c64ee69686350de$var$resolveDeferredData(result, signal, isFetcher).then((result)=>{
                if (result) results[index] = result || results[index];
            });
        }
    }
}
async function $6c64ee69686350de$var$resolveDeferredData(result, signal, unwrap) {
    if (unwrap === void 0) unwrap = false;
    let aborted = await result.deferredData.resolveData(signal);
    if (aborted) return;
    if (unwrap) try {
        return {
            type: $6c64ee69686350de$var$ResultType.data,
            data: result.deferredData.unwrappedData
        };
    } catch (e) {
        // Handle any TrackedPromise._error values encountered while unwrapping
        return {
            type: $6c64ee69686350de$var$ResultType.error,
            error: e
        };
    }
    return {
        type: $6c64ee69686350de$var$ResultType.data,
        data: result.deferredData.data
    };
}
function $6c64ee69686350de$var$hasNakedIndexQuery(search) {
    return new URLSearchParams(search).getAll("index").some((v)=>v === "");
}
function $6c64ee69686350de$var$getTargetMatch(matches, location) {
    let search = typeof location === "string" ? $6c64ee69686350de$export$8ccf933b0513f8d0(location).search : location.search;
    if (matches[matches.length - 1].route.index && $6c64ee69686350de$var$hasNakedIndexQuery(search || "")) // Return the leaf index route when index is present
    return matches[matches.length - 1];
    // Otherwise grab the deepest "path contributing" match (ignoring index and
    // pathless layout routes)
    let pathMatches = $6c64ee69686350de$var$getPathContributingMatches(matches);
    return pathMatches[pathMatches.length - 1];
}
function $6c64ee69686350de$var$getSubmissionFromNavigation(navigation) {
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
function $6c64ee69686350de$var$getLoadingNavigation(location, submission) {
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
function $6c64ee69686350de$var$getSubmittingNavigation(location, submission) {
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
function $6c64ee69686350de$var$getLoadingFetcher(submission, data) {
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
function $6c64ee69686350de$var$getSubmittingFetcher(submission, existingFetcher) {
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
function $6c64ee69686350de$var$getDoneFetcher(data) {
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
function $6c64ee69686350de$var$restoreAppliedTransitions(_window, transitions) {
    try {
        let sessionPositions = _window.sessionStorage.getItem($6c64ee69686350de$var$TRANSITIONS_STORAGE_KEY);
        if (sessionPositions) {
            let json = JSON.parse(sessionPositions);
            for (let [k, v] of Object.entries(json || {}))if (v && Array.isArray(v)) transitions.set(k, new Set(v || []));
        }
    } catch (e) {
    // no-op, use default empty object
    }
}
function $6c64ee69686350de$var$persistAppliedTransitions(_window, transitions) {
    if (transitions.size > 0) {
        let json = {};
        for (let [k, v] of transitions)json[k] = [
            ...v
        ];
        try {
            _window.sessionStorage.setItem($6c64ee69686350de$var$TRANSITIONS_STORAGE_KEY, JSON.stringify(json));
        } catch (error) {
            $6c64ee69686350de$export$c0e02632e14916fd(false, "Failed to save applied view transitions in sessionStorage (" + error + ").");
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
var $kdEmn = parcelRequire("kdEmn");

function $a755294db44273f2$var$_extends() {
    $a755294db44273f2$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $a755294db44273f2$var$_extends.apply(this, arguments);
}
// Create react-specific types from the agnostic types in @remix-run/router to
// export from react-router
const $a755294db44273f2$export$3add0d5dce533e2e = /*#__PURE__*/ $kdEmn.createContext(null);
const $a755294db44273f2$export$145dfa71566a64dc = /*#__PURE__*/ $kdEmn.createContext(null);
const $a755294db44273f2$var$AwaitContext = /*#__PURE__*/ $kdEmn.createContext(null);
/**
 * A Navigator is a "location changer"; it's how you get to different locations.
 *
 * Every history instance conforms to the Navigator interface, but the
 * distinction is useful primarily when it comes to the low-level `<Router>` API
 * where both the location and a navigator must be provided separately in order
 * to avoid "tearing" that may occur in a suspense-enabled app if the action
 * and/or location were to be read directly from the history instance.
 */ const $a755294db44273f2$export$26749e8557646306 = /*#__PURE__*/ $kdEmn.createContext(null);
const $a755294db44273f2$export$c7914228fb69b0f5 = /*#__PURE__*/ $kdEmn.createContext(null);
const $a755294db44273f2$export$9072aa6dd1f93057 = /*#__PURE__*/ $kdEmn.createContext({
    outlet: null,
    matches: [],
    isDataRoute: false
});
const $a755294db44273f2$var$RouteErrorContext = /*#__PURE__*/ $kdEmn.createContext(null);
/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/hooks/use-href
 */ function $a755294db44273f2$export$b66bb29c5006f12f(to, _temp) {
    let { relative: relative } = _temp === void 0 ? {} : _temp;
    !$a755294db44273f2$export$9c954a9d03d32f4a() && (0, $6c64ee69686350de$export$3e9cee6b33872309)(false);
    let { basename: basename, navigator: navigator } = $kdEmn.useContext($a755294db44273f2$export$26749e8557646306);
    let { hash: hash, pathname: pathname, search: search } = $a755294db44273f2$export$e75d2a2d1b3c245b(to, {
        relative: relative
    });
    let joinedPathname = pathname;
    // If we're operating within a basename, prepend it to the pathname prior
    // to creating the href.  If this is a root navigation, then just use the raw
    // basename which allows the basename to have full control over the presence
    // of a trailing slash on root links
    if (basename !== "/") joinedPathname = pathname === "/" ? basename : (0, $6c64ee69686350de$export$86d9a7913e44197e)([
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
 */ function $a755294db44273f2$export$9c954a9d03d32f4a() {
    return $kdEmn.useContext($a755294db44273f2$export$c7914228fb69b0f5) != null;
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
 */ function $a755294db44273f2$export$45d76561a5302f2b() {
    !$a755294db44273f2$export$9c954a9d03d32f4a() && (0, $6c64ee69686350de$export$3e9cee6b33872309)(false);
    return $kdEmn.useContext($a755294db44273f2$export$c7914228fb69b0f5).location;
}
/**
 * Returns the current navigation action which describes how the router came to
 * the current location, either by a pop, push, or replace on the history stack.
 *
 * @see https://reactrouter.com/hooks/use-navigation-type
 */ function $a755294db44273f2$export$1b3f31771c5d07c() {
    return $kdEmn.useContext($a755294db44273f2$export$c7914228fb69b0f5).navigationType;
}
/**
 * Returns a PathMatch object if the given pattern matches the current URL.
 * This is useful for components that need to know "active" state, e.g.
 * `<NavLink>`.
 *
 * @see https://reactrouter.com/hooks/use-match
 */ function $a755294db44273f2$export$6c330e8992e8a295(pattern) {
    !$a755294db44273f2$export$9c954a9d03d32f4a() && (0, $6c64ee69686350de$export$3e9cee6b33872309)(false);
    let { pathname: pathname } = $a755294db44273f2$export$45d76561a5302f2b();
    return $kdEmn.useMemo(()=>(0, $6c64ee69686350de$export$81336c211d5ff295)(pattern, pathname), [
        pathname,
        pattern
    ]);
}
/**
 * The interface for the navigate() function returned from useNavigate().
 */ const $a755294db44273f2$var$navigateEffectWarning = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
// Mute warnings for calls to useNavigate in SSR environments
function $a755294db44273f2$var$useIsomorphicLayoutEffect(cb) {
    let isStatic = $kdEmn.useContext($a755294db44273f2$export$26749e8557646306).static;
    if (!isStatic) // We should be able to get rid of this once react 18.3 is released
    // See: https://github.com/facebook/react/pull/26395
    // eslint-disable-next-line react-hooks/rules-of-hooks
    $kdEmn.useLayoutEffect(cb);
}
/**
 * Returns an imperative method for changing the location. Used by `<Link>`s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/hooks/use-navigate
 */ function $a755294db44273f2$export$9770f232ac06a008() {
    let { isDataRoute: isDataRoute } = $kdEmn.useContext($a755294db44273f2$export$9072aa6dd1f93057);
    // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return isDataRoute ? $a755294db44273f2$var$useNavigateStable() : $a755294db44273f2$var$useNavigateUnstable();
}
function $a755294db44273f2$var$useNavigateUnstable() {
    !$a755294db44273f2$export$9c954a9d03d32f4a() && (0, $6c64ee69686350de$export$3e9cee6b33872309)(false);
    let dataRouterContext = $kdEmn.useContext($a755294db44273f2$export$3add0d5dce533e2e);
    let { basename: basename, future: future, navigator: navigator } = $kdEmn.useContext($a755294db44273f2$export$26749e8557646306);
    let { matches: matches } = $kdEmn.useContext($a755294db44273f2$export$9072aa6dd1f93057);
    let { pathname: locationPathname } = $a755294db44273f2$export$45d76561a5302f2b();
    let routePathnamesJson = JSON.stringify((0, $6c64ee69686350de$export$a5784978eca585fa)(matches, future.v7_relativeSplatPath));
    let activeRef = $kdEmn.useRef(false);
    $a755294db44273f2$var$useIsomorphicLayoutEffect(()=>{
        activeRef.current = true;
    });
    let navigate = $kdEmn.useCallback(function(to, options) {
        if (options === void 0) options = {};
        // Short circuit here since if this happens on first render the navigate
        // is useless because we haven't wired up our history listener yet
        if (!activeRef.current) return;
        if (typeof to === "number") {
            navigator.go(to);
            return;
        }
        let path = (0, $6c64ee69686350de$export$cae722b0cc860f13)(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");
        // If we're operating within a basename, prepend it to the pathname prior
        // to handing off to history (but only if we're not in a data router,
        // otherwise it'll prepend the basename inside of the router).
        // If this is a root navigation, then we navigate to the raw basename
        // which allows the basename to have full control over the presence of a
        // trailing slash on root links
        if (dataRouterContext == null && basename !== "/") path.pathname = path.pathname === "/" ? basename : (0, $6c64ee69686350de$export$86d9a7913e44197e)([
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
const $a755294db44273f2$var$OutletContext = /*#__PURE__*/ $kdEmn.createContext(null);
/**
 * Returns the context (if provided) for the child route at this level of the route
 * hierarchy.
 * @see https://reactrouter.com/hooks/use-outlet-context
 */ function $a755294db44273f2$export$4138103a3ae699cc() {
    return $kdEmn.useContext($a755294db44273f2$var$OutletContext);
}
/**
 * Returns the element for the child route at this level of the route
 * hierarchy. Used internally by `<Outlet>` to render child routes.
 *
 * @see https://reactrouter.com/hooks/use-outlet
 */ function $a755294db44273f2$export$a3be3530d8e40d0b(context) {
    let outlet = $kdEmn.useContext($a755294db44273f2$export$9072aa6dd1f93057).outlet;
    if (outlet) return /*#__PURE__*/ $kdEmn.createElement($a755294db44273f2$var$OutletContext.Provider, {
        value: context
    }, outlet);
    return outlet;
}
/**
 * Returns an object of key/value pairs of the dynamic params from the current
 * URL that were matched by the route path.
 *
 * @see https://reactrouter.com/hooks/use-params
 */ function $a755294db44273f2$export$99eaa27ddbbb95ef() {
    let { matches: matches } = $kdEmn.useContext($a755294db44273f2$export$9072aa6dd1f93057);
    let routeMatch = matches[matches.length - 1];
    return routeMatch ? routeMatch.params : {};
}
/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/hooks/use-resolved-path
 */ function $a755294db44273f2$export$e75d2a2d1b3c245b(to, _temp2) {
    let { relative: relative } = _temp2 === void 0 ? {} : _temp2;
    let { future: future } = $kdEmn.useContext($a755294db44273f2$export$26749e8557646306);
    let { matches: matches } = $kdEmn.useContext($a755294db44273f2$export$9072aa6dd1f93057);
    let { pathname: locationPathname } = $a755294db44273f2$export$45d76561a5302f2b();
    let routePathnamesJson = JSON.stringify((0, $6c64ee69686350de$export$a5784978eca585fa)(matches, future.v7_relativeSplatPath));
    return $kdEmn.useMemo(()=>(0, $6c64ee69686350de$export$cae722b0cc860f13)(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [
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
 */ function $a755294db44273f2$export$5d3fca4a98652595(routes, locationArg) {
    return $a755294db44273f2$export$5fcee62552a12fbf(routes, locationArg);
}
// Internal implementation with accept optional param for RouterProvider usage
function $a755294db44273f2$export$5fcee62552a12fbf(routes, locationArg, dataRouterState, future) {
    !$a755294db44273f2$export$9c954a9d03d32f4a() && (0, $6c64ee69686350de$export$3e9cee6b33872309)(false);
    let { navigator: navigator } = $kdEmn.useContext($a755294db44273f2$export$26749e8557646306);
    let { matches: parentMatches } = $kdEmn.useContext($a755294db44273f2$export$9072aa6dd1f93057);
    let routeMatch = parentMatches[parentMatches.length - 1];
    let parentParams = routeMatch ? routeMatch.params : {};
    let parentPathname = routeMatch ? routeMatch.pathname : "/";
    let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
    let parentRoute = routeMatch && routeMatch.route;
    let locationFromContext = $a755294db44273f2$export$45d76561a5302f2b();
    let location;
    if (locationArg) {
        var _parsedLocationArg$pa;
        let parsedLocationArg = typeof locationArg === "string" ? (0, $6c64ee69686350de$export$8ccf933b0513f8d0)(locationArg) : locationArg;
        !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) && (0, $6c64ee69686350de$export$3e9cee6b33872309)(false);
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
    let matches = (0, $6c64ee69686350de$export$2708184779ceb39d)(routes, {
        pathname: remainingPathname
    });
    let renderedMatches = $a755294db44273f2$var$_renderMatches(matches && matches.map((match)=>Object.assign({}, match, {
            params: Object.assign({}, parentParams, match.params),
            pathname: (0, $6c64ee69686350de$export$86d9a7913e44197e)([
                parentPathnameBase,
                // Re-encode pathnames that were decoded inside matchRoutes
                navigator.encodeLocation ? navigator.encodeLocation(match.pathname).pathname : match.pathname
            ]),
            pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : (0, $6c64ee69686350de$export$86d9a7913e44197e)([
                parentPathnameBase,
                // Re-encode pathnames that were decoded inside matchRoutes
                navigator.encodeLocation ? navigator.encodeLocation(match.pathnameBase).pathname : match.pathnameBase
            ])
        })), parentMatches, dataRouterState, future);
    // When a user passes in a `locationArg`, the associated routes need to
    // be wrapped in a new `LocationContext.Provider` in order for `useLocation`
    // to use the scoped location instead of the global location.
    if (locationArg && renderedMatches) return /*#__PURE__*/ $kdEmn.createElement($a755294db44273f2$export$c7914228fb69b0f5.Provider, {
        value: {
            location: $a755294db44273f2$var$_extends({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, location),
            navigationType: (0, $6c64ee69686350de$export$e19cd5f9376f8cee).Pop
        }
    }, renderedMatches);
    return renderedMatches;
}
function $a755294db44273f2$var$DefaultErrorComponent() {
    let error = $a755294db44273f2$export$ed527bf60f6e05f2();
    let message = (0, $6c64ee69686350de$export$972111febbeef05b)(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
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
    return /*#__PURE__*/ $kdEmn.createElement($kdEmn.Fragment, null, /*#__PURE__*/ $kdEmn.createElement("h2", null, "Unexpected Application Error!"), /*#__PURE__*/ $kdEmn.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, message), stack ? /*#__PURE__*/ $kdEmn.createElement("pre", {
        style: preStyles
    }, stack) : null, devInfo);
}
const $a755294db44273f2$var$defaultErrorElement = /*#__PURE__*/ $kdEmn.createElement($a755294db44273f2$var$DefaultErrorComponent, null);
class $a755294db44273f2$var$RenderErrorBoundary extends $kdEmn.Component {
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
        return this.state.error !== undefined ? /*#__PURE__*/ $kdEmn.createElement($a755294db44273f2$export$9072aa6dd1f93057.Provider, {
            value: this.props.routeContext
        }, /*#__PURE__*/ $kdEmn.createElement($a755294db44273f2$var$RouteErrorContext.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children;
    }
}
function $a755294db44273f2$var$RenderedRoute(_ref) {
    let { routeContext: routeContext, match: match, children: children } = _ref;
    let dataRouterContext = $kdEmn.useContext($a755294db44273f2$export$3add0d5dce533e2e);
    // Track how deep we got in our render pass to emulate SSR componentDidCatch
    // in a DataStaticRouter
    if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
    return /*#__PURE__*/ $kdEmn.createElement($a755294db44273f2$export$9072aa6dd1f93057.Provider, {
        value: routeContext
    }, children);
}
function $a755294db44273f2$var$_renderMatches(matches, parentMatches, dataRouterState, future) {
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
        !(errorIndex >= 0) && (0, $6c64ee69686350de$export$3e9cee6b33872309)(false);
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
            errorElement = match.route.errorElement || $a755294db44273f2$var$defaultErrorElement;
            if (renderFallback) {
                if (fallbackIndex < 0 && index === 0) {
                    $a755294db44273f2$var$warningOnce("route-fallback", false, "No `HydrateFallback` element provided to render during initial hydration");
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
            children = /*#__PURE__*/ $kdEmn.createElement(match.route.Component, null);
            else if (match.route.element) children = match.route.element;
            else children = outlet;
            return /*#__PURE__*/ $kdEmn.createElement($a755294db44273f2$var$RenderedRoute, {
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
        return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /*#__PURE__*/ $kdEmn.createElement($a755294db44273f2$var$RenderErrorBoundary, {
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
var $a755294db44273f2$var$DataRouterHook = /*#__PURE__*/ function(DataRouterHook) {
    DataRouterHook["UseBlocker"] = "useBlocker";
    DataRouterHook["UseRevalidator"] = "useRevalidator";
    DataRouterHook["UseNavigateStable"] = "useNavigate";
    return DataRouterHook;
}($a755294db44273f2$var$DataRouterHook || {});
var $a755294db44273f2$var$DataRouterStateHook = /*#__PURE__*/ function(DataRouterStateHook) {
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
}($a755294db44273f2$var$DataRouterStateHook || {});
function $a755294db44273f2$var$getDataRouterConsoleError(hookName) {
    return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function $a755294db44273f2$var$useDataRouterContext(hookName) {
    let ctx = $kdEmn.useContext($a755294db44273f2$export$3add0d5dce533e2e);
    !ctx && (0, $6c64ee69686350de$export$3e9cee6b33872309)(false);
    return ctx;
}
function $a755294db44273f2$var$useDataRouterState(hookName) {
    let state = $kdEmn.useContext($a755294db44273f2$export$145dfa71566a64dc);
    !state && (0, $6c64ee69686350de$export$3e9cee6b33872309)(false);
    return state;
}
function $a755294db44273f2$var$useRouteContext(hookName) {
    let route = $kdEmn.useContext($a755294db44273f2$export$9072aa6dd1f93057);
    !route && (0, $6c64ee69686350de$export$3e9cee6b33872309)(false);
    return route;
}
// Internal version with hookName-aware debugging
function $a755294db44273f2$var$useCurrentRouteId(hookName) {
    let route = $a755294db44273f2$var$useRouteContext(hookName);
    let thisRoute = route.matches[route.matches.length - 1];
    !thisRoute.route.id && (0, $6c64ee69686350de$export$3e9cee6b33872309)(false);
    return thisRoute.route.id;
}
/**
 * Returns the ID for the nearest contextual route
 */ function $a755294db44273f2$export$5fc8298006ad9e58() {
    return $a755294db44273f2$var$useCurrentRouteId($a755294db44273f2$var$DataRouterStateHook.UseRouteId);
}
/**
 * Returns the current navigation, defaulting to an "idle" navigation when
 * no navigation is in progress
 */ function $a755294db44273f2$export$d0fd4b7106de2769() {
    let state = $a755294db44273f2$var$useDataRouterState($a755294db44273f2$var$DataRouterStateHook.UseNavigation);
    return state.navigation;
}
/**
 * Returns a revalidate function for manually triggering revalidation, as well
 * as the current state of any manual revalidations
 */ function $a755294db44273f2$export$600dc272ed516c15() {
    let dataRouterContext = $a755294db44273f2$var$useDataRouterContext($a755294db44273f2$var$DataRouterHook.UseRevalidator);
    let state = $a755294db44273f2$var$useDataRouterState($a755294db44273f2$var$DataRouterStateHook.UseRevalidator);
    return $kdEmn.useMemo(()=>({
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
 */ function $a755294db44273f2$export$2378eb7f5ff86053() {
    let { matches: matches, loaderData: loaderData } = $a755294db44273f2$var$useDataRouterState($a755294db44273f2$var$DataRouterStateHook.UseMatches);
    return $kdEmn.useMemo(()=>matches.map((m)=>(0, $6c64ee69686350de$export$b3fac024fad9e8ff)(m, loaderData)), [
        matches,
        loaderData
    ]);
}
/**
 * Returns the loader data for the nearest ancestor Route loader
 */ function $a755294db44273f2$export$1448a5050d252c4d() {
    let state = $a755294db44273f2$var$useDataRouterState($a755294db44273f2$var$DataRouterStateHook.UseLoaderData);
    let routeId = $a755294db44273f2$var$useCurrentRouteId($a755294db44273f2$var$DataRouterStateHook.UseLoaderData);
    if (state.errors && state.errors[routeId] != null) {
        console.error("You cannot `useLoaderData` in an errorElement (routeId: " + routeId + ")");
        return undefined;
    }
    return state.loaderData[routeId];
}
/**
 * Returns the loaderData for the given routeId
 */ function $a755294db44273f2$export$fd5d37484eab868d(routeId) {
    let state = $a755294db44273f2$var$useDataRouterState($a755294db44273f2$var$DataRouterStateHook.UseRouteLoaderData);
    return state.loaderData[routeId];
}
/**
 * Returns the action data for the nearest ancestor Route action
 */ function $a755294db44273f2$export$fdc00f3f26066d5e() {
    let state = $a755294db44273f2$var$useDataRouterState($a755294db44273f2$var$DataRouterStateHook.UseActionData);
    let routeId = $a755294db44273f2$var$useCurrentRouteId($a755294db44273f2$var$DataRouterStateHook.UseLoaderData);
    return state.actionData ? state.actionData[routeId] : undefined;
}
/**
 * Returns the nearest ancestor Route error, which could be a loader/action
 * error or a render error.  This is intended to be called from your
 * ErrorBoundary/errorElement to display a proper error message.
 */ function $a755294db44273f2$export$ed527bf60f6e05f2() {
    var _state$errors;
    let error = $kdEmn.useContext($a755294db44273f2$var$RouteErrorContext);
    let state = $a755294db44273f2$var$useDataRouterState($a755294db44273f2$var$DataRouterStateHook.UseRouteError);
    let routeId = $a755294db44273f2$var$useCurrentRouteId($a755294db44273f2$var$DataRouterStateHook.UseRouteError);
    // If this was a render error, we put it in a RouteError context inside
    // of RenderErrorBoundary
    if (error !== undefined) return error;
    // Otherwise look for errors from our data router state
    return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
}
/**
 * Returns the happy-path data from the nearest ancestor `<Await />` value
 */ function $a755294db44273f2$export$78a72ddb39bdd145() {
    let value = $kdEmn.useContext($a755294db44273f2$var$AwaitContext);
    return value == null ? void 0 : value._data;
}
/**
 * Returns the error from the nearest ancestor `<Await />` value
 */ function $a755294db44273f2$export$17f53340677d5831() {
    let value = $kdEmn.useContext($a755294db44273f2$var$AwaitContext);
    return value == null ? void 0 : value._error;
}
let $a755294db44273f2$var$blockerId = 0;
/**
 * Allow the application to block navigations within the SPA and present the
 * user a confirmation dialog to confirm the navigation.  Mostly used to avoid
 * using half-filled form data.  This does not handle hard-reloads or
 * cross-origin navigations.
 */ function $a755294db44273f2$export$b273b3273281a049(shouldBlock) {
    let { router: router, basename: basename } = $a755294db44273f2$var$useDataRouterContext($a755294db44273f2$var$DataRouterHook.UseBlocker);
    let state = $a755294db44273f2$var$useDataRouterState($a755294db44273f2$var$DataRouterStateHook.UseBlocker);
    let [blockerKey, setBlockerKey] = $kdEmn.useState("");
    let blockerFunction = $kdEmn.useCallback((arg)=>{
        if (typeof shouldBlock !== "function") return !!shouldBlock;
        if (basename === "/") return shouldBlock(arg);
        // If they provided us a function and we've got an active basename, strip
        // it from the locations we expose to the user to match the behavior of
        // useLocation
        let { currentLocation: currentLocation, nextLocation: nextLocation, historyAction: historyAction } = arg;
        return shouldBlock({
            currentLocation: $a755294db44273f2$var$_extends({}, currentLocation, {
                pathname: (0, $6c64ee69686350de$export$b69e3301ce081aa3)(currentLocation.pathname, basename) || currentLocation.pathname
            }),
            nextLocation: $a755294db44273f2$var$_extends({}, nextLocation, {
                pathname: (0, $6c64ee69686350de$export$b69e3301ce081aa3)(nextLocation.pathname, basename) || nextLocation.pathname
            }),
            historyAction: historyAction
        });
    }, [
        basename,
        shouldBlock
    ]);
    // This effect is in charge of blocker key assignment and deletion (which is
    // tightly coupled to the key)
    $kdEmn.useEffect(()=>{
        let key = String(++$a755294db44273f2$var$blockerId);
        setBlockerKey(key);
        return ()=>router.deleteBlocker(key);
    }, [
        router
    ]);
    // This effect handles assigning the blockerFunction.  This is to handle
    // unstable blocker function identities, and happens only after the prior
    // effect so we don't get an orphaned blockerFunction in the router with a
    // key of "".  Until then we just have the IDLE_BLOCKER.
    $kdEmn.useEffect(()=>{
        if (blockerKey !== "") router.getBlocker(blockerKey, blockerFunction);
    }, [
        router,
        blockerKey,
        blockerFunction
    ]);
    // Prefer the blocker from `state` not `router.state` since DataRouterContext
    // is memoized so this ensures we update on blocker state updates
    return blockerKey && state.blockers.has(blockerKey) ? state.blockers.get(blockerKey) : (0, $6c64ee69686350de$export$386d57f03f0b2883);
}
/**
 * Stable version of useNavigate that is used when we are in the context of
 * a RouterProvider.
 */ function $a755294db44273f2$var$useNavigateStable() {
    let { router: router } = $a755294db44273f2$var$useDataRouterContext($a755294db44273f2$var$DataRouterHook.UseNavigateStable);
    let id = $a755294db44273f2$var$useCurrentRouteId($a755294db44273f2$var$DataRouterStateHook.UseNavigateStable);
    let activeRef = $kdEmn.useRef(false);
    $a755294db44273f2$var$useIsomorphicLayoutEffect(()=>{
        activeRef.current = true;
    });
    let navigate = $kdEmn.useCallback(function(to, options) {
        if (options === void 0) options = {};
        // Short circuit here since if this happens on first render the navigate
        // is useless because we haven't wired up our router subscriber yet
        if (!activeRef.current) return;
        if (typeof to === "number") router.navigate(to);
        else router.navigate(to, $a755294db44273f2$var$_extends({
            fromRouteId: id
        }, options));
    }, [
        router,
        id
    ]);
    return navigate;
}
const $a755294db44273f2$var$alreadyWarned = {};
function $a755294db44273f2$var$warningOnce(key, cond, message) {
    if (!cond && !$a755294db44273f2$var$alreadyWarned[key]) $a755294db44273f2$var$alreadyWarned[key] = true;
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
*/ const $a755294db44273f2$var$START_TRANSITION = "startTransition";
const $a755294db44273f2$var$startTransitionImpl = $kdEmn[$a755294db44273f2$var$START_TRANSITION];
/**
 * Given a Remix Router instance, render the appropriate UI
 */ function $a755294db44273f2$export$323e4fc2fa4753fb(_ref) {
    let { fallbackElement: fallbackElement, router: router, future: future } = _ref;
    let [state, setStateImpl] = $kdEmn.useState(router.state);
    let { v7_startTransition: v7_startTransition } = future || {};
    let setState = $kdEmn.useCallback((newState)=>{
        if (v7_startTransition && $a755294db44273f2$var$startTransitionImpl) $a755294db44273f2$var$startTransitionImpl(()=>setStateImpl(newState));
        else setStateImpl(newState);
    }, [
        setStateImpl,
        v7_startTransition
    ]);
    // Need to use a layout effect here so we are subscribed early enough to
    // pick up on any render-driven redirects/navigations (useEffect/<Navigate>)
    $kdEmn.useLayoutEffect(()=>router.subscribe(setState), [
        router,
        setState
    ]);
    $kdEmn.useEffect(()=>{
    // Only log this once on initial mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    let navigator = $kdEmn.useMemo(()=>{
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
    let dataRouterContext = $kdEmn.useMemo(()=>({
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
    return /*#__PURE__*/ $kdEmn.createElement($kdEmn.Fragment, null, /*#__PURE__*/ $kdEmn.createElement($a755294db44273f2$export$3add0d5dce533e2e.Provider, {
        value: dataRouterContext
    }, /*#__PURE__*/ $kdEmn.createElement($a755294db44273f2$export$145dfa71566a64dc.Provider, {
        value: state
    }, /*#__PURE__*/ $kdEmn.createElement($a755294db44273f2$export$55185c17a0fcbe46, {
        basename: basename,
        location: state.location,
        navigationType: state.historyAction,
        navigator: navigator,
        future: {
            v7_relativeSplatPath: router.future.v7_relativeSplatPath
        }
    }, state.initialized || router.future.v7_partialHydration ? /*#__PURE__*/ $kdEmn.createElement($a755294db44273f2$var$DataRoutes, {
        routes: router.routes,
        future: router.future,
        state: state
    }) : fallbackElement))), null);
}
function $a755294db44273f2$var$DataRoutes(_ref2) {
    let { routes: routes, future: future, state: state } = _ref2;
    return $a755294db44273f2$export$5fcee62552a12fbf(routes, undefined, state, future);
}
/**
 * A `<Router>` that stores all entries in memory.
 *
 * @see https://reactrouter.com/router-components/memory-router
 */ function $a755294db44273f2$export$ae46f04cfaffe093(_ref3) {
    let { basename: basename, children: children, initialEntries: initialEntries, initialIndex: initialIndex, future: future } = _ref3;
    let historyRef = $kdEmn.useRef();
    if (historyRef.current == null) historyRef.current = (0, $6c64ee69686350de$export$2b76ad033c6e6d08)({
        initialEntries: initialEntries,
        initialIndex: initialIndex,
        v5Compat: true
    });
    let history = historyRef.current;
    let [state, setStateImpl] = $kdEmn.useState({
        action: history.action,
        location: history.location
    });
    let { v7_startTransition: v7_startTransition } = future || {};
    let setState = $kdEmn.useCallback((newState)=>{
        v7_startTransition && $a755294db44273f2$var$startTransitionImpl ? $a755294db44273f2$var$startTransitionImpl(()=>setStateImpl(newState)) : setStateImpl(newState);
    }, [
        setStateImpl,
        v7_startTransition
    ]);
    $kdEmn.useLayoutEffect(()=>history.listen(setState), [
        history,
        setState
    ]);
    return /*#__PURE__*/ $kdEmn.createElement($a755294db44273f2$export$55185c17a0fcbe46, {
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
 */ function $a755294db44273f2$export$444b3ab0cb9aec40(_ref4) {
    let { to: to, replace: replace, state: state, relative: relative } = _ref4;
    !$a755294db44273f2$export$9c954a9d03d32f4a() && (0, $6c64ee69686350de$export$3e9cee6b33872309)(false);
    let { future: future, static: isStatic } = $kdEmn.useContext($a755294db44273f2$export$26749e8557646306);
    let { matches: matches } = $kdEmn.useContext($a755294db44273f2$export$9072aa6dd1f93057);
    let { pathname: locationPathname } = $a755294db44273f2$export$45d76561a5302f2b();
    let navigate = $a755294db44273f2$export$9770f232ac06a008();
    // Resolve the path outside of the effect so that when effects run twice in
    // StrictMode they navigate to the same place
    let path = (0, $6c64ee69686350de$export$cae722b0cc860f13)(to, (0, $6c64ee69686350de$export$a5784978eca585fa)(matches, future.v7_relativeSplatPath), locationPathname, relative === "path");
    let jsonPath = JSON.stringify(path);
    $kdEmn.useEffect(()=>navigate(JSON.parse(jsonPath), {
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
 */ function $a755294db44273f2$export$910ae8079b2c2852(props) {
    return $a755294db44273f2$export$a3be3530d8e40d0b(props.context);
}
/**
 * Declares an element that should be rendered at a certain URL path.
 *
 * @see https://reactrouter.com/components/route
 */ function $a755294db44273f2$export$e7b0ac011bb776c6(_props) {
    (0, $6c64ee69686350de$export$3e9cee6b33872309)(false);
}
/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a `<Router>` directly. Instead, you'll render a
 * router that is more specific to your environment such as a `<BrowserRouter>`
 * in web browsers or a `<StaticRouter>` for server rendering.
 *
 * @see https://reactrouter.com/router-components/router
 */ function $a755294db44273f2$export$55185c17a0fcbe46(_ref5) {
    let { basename: basenameProp = "/", children: children = null, location: locationProp, navigationType: navigationType = (0, $6c64ee69686350de$export$e19cd5f9376f8cee).Pop, navigator: navigator, static: staticProp = false, future: future } = _ref5;
    !!$a755294db44273f2$export$9c954a9d03d32f4a() && (0, $6c64ee69686350de$export$3e9cee6b33872309)(false);
    // Preserve trailing slashes on basename, so we can let the user control
    // the enforcement of trailing slashes throughout the app
    let basename = basenameProp.replace(/^\/*/, "/");
    let navigationContext = $kdEmn.useMemo(()=>({
            basename: basename,
            navigator: navigator,
            static: staticProp,
            future: $a755294db44273f2$var$_extends({
                v7_relativeSplatPath: false
            }, future)
        }), [
        basename,
        future,
        navigator,
        staticProp
    ]);
    if (typeof locationProp === "string") locationProp = (0, $6c64ee69686350de$export$8ccf933b0513f8d0)(locationProp);
    let { pathname: pathname = "/", search: search = "", hash: hash = "", state: state = null, key: key = "default" } = locationProp;
    let locationContext = $kdEmn.useMemo(()=>{
        let trailingPathname = (0, $6c64ee69686350de$export$b69e3301ce081aa3)(pathname, basename);
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
    return /*#__PURE__*/ $kdEmn.createElement($a755294db44273f2$export$26749e8557646306.Provider, {
        value: navigationContext
    }, /*#__PURE__*/ $kdEmn.createElement($a755294db44273f2$export$c7914228fb69b0f5.Provider, {
        children: children,
        value: locationContext
    }));
}
/**
 * A container for a nested tree of `<Route>` elements that renders the branch
 * that best matches the current location.
 *
 * @see https://reactrouter.com/components/routes
 */ function $a755294db44273f2$export$3565eb3d00ca5a74(_ref6) {
    let { children: children, location: location } = _ref6;
    return $a755294db44273f2$export$5d3fca4a98652595($a755294db44273f2$export$16da398f5434bdec(children), location);
}
/**
 * Component to use for rendering lazily loaded data from returning defer()
 * in a loader function
 */ function $a755294db44273f2$export$6ddabde395c8c576(_ref7) {
    let { children: children, errorElement: errorElement, resolve: resolve } = _ref7;
    return /*#__PURE__*/ $kdEmn.createElement($a755294db44273f2$var$AwaitErrorBoundary, {
        resolve: resolve,
        errorElement: errorElement
    }, /*#__PURE__*/ $kdEmn.createElement($a755294db44273f2$var$ResolveAwait, null, children));
}
var $a755294db44273f2$var$AwaitRenderStatus = /*#__PURE__*/ function(AwaitRenderStatus) {
    AwaitRenderStatus[AwaitRenderStatus["pending"] = 0] = "pending";
    AwaitRenderStatus[AwaitRenderStatus["success"] = 1] = "success";
    AwaitRenderStatus[AwaitRenderStatus["error"] = 2] = "error";
    return AwaitRenderStatus;
}($a755294db44273f2$var$AwaitRenderStatus || {});
const $a755294db44273f2$var$neverSettledPromise = new Promise(()=>{});
class $a755294db44273f2$var$AwaitErrorBoundary extends $kdEmn.Component {
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
        let status = $a755294db44273f2$var$AwaitRenderStatus.pending;
        if (!(resolve instanceof Promise)) {
            // Didn't get a promise - provide as a resolved promise
            status = $a755294db44273f2$var$AwaitRenderStatus.success;
            promise = Promise.resolve();
            Object.defineProperty(promise, "_tracked", {
                get: ()=>true
            });
            Object.defineProperty(promise, "_data", {
                get: ()=>resolve
            });
        } else if (this.state.error) {
            // Caught a render error, provide it as a rejected promise
            status = $a755294db44273f2$var$AwaitRenderStatus.error;
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
            status = "_error" in promise ? $a755294db44273f2$var$AwaitRenderStatus.error : "_data" in promise ? $a755294db44273f2$var$AwaitRenderStatus.success : $a755294db44273f2$var$AwaitRenderStatus.pending;
        } else {
            // Raw (untracked) promise - track it
            status = $a755294db44273f2$var$AwaitRenderStatus.pending;
            Object.defineProperty(resolve, "_tracked", {
                get: ()=>true
            });
            promise = resolve.then((data)=>Object.defineProperty(resolve, "_data", {
                    get: ()=>data
                }), (error)=>Object.defineProperty(resolve, "_error", {
                    get: ()=>error
                }));
        }
        if (status === $a755294db44273f2$var$AwaitRenderStatus.error && promise._error instanceof (0, $6c64ee69686350de$export$42a99a7a4bc0e76a)) // Freeze the UI by throwing a never resolved promise
        throw $a755294db44273f2$var$neverSettledPromise;
        if (status === $a755294db44273f2$var$AwaitRenderStatus.error && !errorElement) // No errorElement, throw to the nearest route-level error boundary
        throw promise._error;
        if (status === $a755294db44273f2$var$AwaitRenderStatus.error) // Render via our errorElement
        return /*#__PURE__*/ $kdEmn.createElement($a755294db44273f2$var$AwaitContext.Provider, {
            value: promise,
            children: errorElement
        });
        if (status === $a755294db44273f2$var$AwaitRenderStatus.success) // Render children with resolved value
        return /*#__PURE__*/ $kdEmn.createElement($a755294db44273f2$var$AwaitContext.Provider, {
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
 */ function $a755294db44273f2$var$ResolveAwait(_ref8) {
    let { children: children } = _ref8;
    let data = $a755294db44273f2$export$78a72ddb39bdd145();
    let toRender = typeof children === "function" ? children(data) : children;
    return /*#__PURE__*/ $kdEmn.createElement($kdEmn.Fragment, null, toRender);
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
 */ function $a755294db44273f2$export$16da398f5434bdec(children, parentPath) {
    if (parentPath === void 0) parentPath = [];
    let routes = [];
    $kdEmn.Children.forEach(children, (element, index)=>{
        if (!/*#__PURE__*/ $kdEmn.isValidElement(element)) // Ignore non-elements. This allows people to more easily inline
        // conditionals in their route config.
        return;
        let treePath = [
            ...parentPath,
            index
        ];
        if (element.type === $kdEmn.Fragment) {
            // Transparently support React.Fragment and its children.
            routes.push.apply(routes, $a755294db44273f2$export$16da398f5434bdec(element.props.children, treePath));
            return;
        }
        !(element.type === $a755294db44273f2$export$e7b0ac011bb776c6) && (0, $6c64ee69686350de$export$3e9cee6b33872309)(false);
        !(!element.props.index || !element.props.children) && (0, $6c64ee69686350de$export$3e9cee6b33872309)(false);
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
        if (element.props.children) route.children = $a755294db44273f2$export$16da398f5434bdec(element.props.children, treePath);
        routes.push(route);
    });
    return routes;
}
/**
 * Renders the result of `matchRoutes()` into a React element.
 */ function $a755294db44273f2$export$daf73786167a7f72(matches) {
    return $a755294db44273f2$var$_renderMatches(matches);
}
function $a755294db44273f2$export$52b333d321859367(route) {
    let updates = {
        // Note: this check also occurs in createRoutesFromChildren so update
        // there if you change this -- please and thank you!
        hasErrorBoundary: route.ErrorBoundary != null || route.errorElement != null
    };
    if (route.Component) Object.assign(updates, {
        element: /*#__PURE__*/ $kdEmn.createElement(route.Component),
        Component: undefined
    });
    if (route.HydrateFallback) Object.assign(updates, {
        hydrateFallbackElement: /*#__PURE__*/ $kdEmn.createElement(route.HydrateFallback),
        HydrateFallback: undefined
    });
    if (route.ErrorBoundary) Object.assign(updates, {
        errorElement: /*#__PURE__*/ $kdEmn.createElement(route.ErrorBoundary),
        ErrorBoundary: undefined
    });
    return updates;
}
function $a755294db44273f2$export$f30f7e456d254e83(routes, opts) {
    return (0, $6c64ee69686350de$export$baddd0131ee8c05b)({
        basename: opts == null ? void 0 : opts.basename,
        future: $a755294db44273f2$var$_extends({}, opts == null ? void 0 : opts.future, {
            v7_prependBasename: true
        }),
        history: (0, $6c64ee69686350de$export$2b76ad033c6e6d08)({
            initialEntries: opts == null ? void 0 : opts.initialEntries,
            initialIndex: opts == null ? void 0 : opts.initialIndex
        }),
        hydrationData: opts == null ? void 0 : opts.hydrationData,
        routes: routes,
        mapRouteProperties: $a755294db44273f2$export$52b333d321859367,
        unstable_dataStrategy: opts == null ? void 0 : opts.unstable_dataStrategy
    }).initialize();
}



function $1996ddff484c19ad$var$_extends() {
    $1996ddff484c19ad$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $1996ddff484c19ad$var$_extends.apply(this, arguments);
}
function $1996ddff484c19ad$var$_objectWithoutPropertiesLoose(source, excluded) {
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
const $1996ddff484c19ad$var$defaultMethod = "get";
const $1996ddff484c19ad$var$defaultEncType = "application/x-www-form-urlencoded";
function $1996ddff484c19ad$var$isHtmlElement(object) {
    return object != null && typeof object.tagName === "string";
}
function $1996ddff484c19ad$var$isButtonElement(object) {
    return $1996ddff484c19ad$var$isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function $1996ddff484c19ad$var$isFormElement(object) {
    return $1996ddff484c19ad$var$isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function $1996ddff484c19ad$var$isInputElement(object) {
    return $1996ddff484c19ad$var$isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}
function $1996ddff484c19ad$var$isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function $1996ddff484c19ad$var$shouldProcessLinkClick(event, target) {
    return event.button === 0 && // Ignore everything but left clicks
    (!target || target === "_self") && // Let browser handle "target=_blank" etc.
    !$1996ddff484c19ad$var$isModifiedEvent(event) // Ignore clicks with modifier keys
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
 */ function $1996ddff484c19ad$export$a2e4e2dcc7b1f22f(init) {
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
function $1996ddff484c19ad$var$getSearchParamsForLocation(locationSearch, defaultSearchParams) {
    let searchParams = $1996ddff484c19ad$export$a2e4e2dcc7b1f22f(locationSearch);
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
let $1996ddff484c19ad$var$_formDataSupportsSubmitter = null;
function $1996ddff484c19ad$var$isFormDataSubmitterSupported() {
    if ($1996ddff484c19ad$var$_formDataSupportsSubmitter === null) try {
        new FormData(document.createElement("form"), // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0);
        $1996ddff484c19ad$var$_formDataSupportsSubmitter = false;
    } catch (e) {
        $1996ddff484c19ad$var$_formDataSupportsSubmitter = true;
    }
    return $1996ddff484c19ad$var$_formDataSupportsSubmitter;
}
const $1996ddff484c19ad$var$supportedFormEncTypes = new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
]);
function $1996ddff484c19ad$var$getFormEncType(encType) {
    if (encType != null && !$1996ddff484c19ad$var$supportedFormEncTypes.has(encType)) return null;
    return encType;
}
function $1996ddff484c19ad$var$getFormSubmissionInfo(target, basename) {
    let method;
    let action;
    let encType;
    let formData;
    let body;
    if ($1996ddff484c19ad$var$isFormElement(target)) {
        // When grabbing the action from the element, it will have had the basename
        // prefixed to ensure non-JS scenarios work, so strip it since we'll
        // re-prefix in the router
        let attr = target.getAttribute("action");
        action = attr ? (0, $6c64ee69686350de$export$b69e3301ce081aa3)(attr, basename) : null;
        method = target.getAttribute("method") || $1996ddff484c19ad$var$defaultMethod;
        encType = $1996ddff484c19ad$var$getFormEncType(target.getAttribute("enctype")) || $1996ddff484c19ad$var$defaultEncType;
        formData = new FormData(target);
    } else if ($1996ddff484c19ad$var$isButtonElement(target) || $1996ddff484c19ad$var$isInputElement(target) && (target.type === "submit" || target.type === "image")) {
        let form = target.form;
        if (form == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        // <button>/<input type="submit"> may override attributes of <form>
        // When grabbing the action from the element, it will have had the basename
        // prefixed to ensure non-JS scenarios work, so strip it since we'll
        // re-prefix in the router
        let attr = target.getAttribute("formaction") || form.getAttribute("action");
        action = attr ? (0, $6c64ee69686350de$export$b69e3301ce081aa3)(attr, basename) : null;
        method = target.getAttribute("formmethod") || form.getAttribute("method") || $1996ddff484c19ad$var$defaultMethod;
        encType = $1996ddff484c19ad$var$getFormEncType(target.getAttribute("formenctype")) || $1996ddff484c19ad$var$getFormEncType(form.getAttribute("enctype")) || $1996ddff484c19ad$var$defaultEncType;
        // Build a FormData object populated from a form and submitter
        formData = new FormData(form, target);
        // If this browser doesn't support the `FormData(el, submitter)` format,
        // then tack on the submitter value at the end.  This is a lightweight
        // solution that is not 100% spec compliant.  For complete support in older
        // browsers, consider using the `formdata-submitter-polyfill` package
        if (!$1996ddff484c19ad$var$isFormDataSubmitterSupported()) {
            let { name: name, type: type, value: value } = target;
            if (type === "image") {
                let prefix = name ? name + "." : "";
                formData.append(prefix + "x", "0");
                formData.append(prefix + "y", "0");
            } else if (name) formData.append(name, value);
        }
    } else if ($1996ddff484c19ad$var$isHtmlElement(target)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    else {
        method = $1996ddff484c19ad$var$defaultMethod;
        action = null;
        encType = $1996ddff484c19ad$var$defaultEncType;
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
const $1996ddff484c19ad$var$_excluded = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition"
], $1996ddff484c19ad$var$_excluded2 = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "unstable_viewTransition",
    "children"
], $1996ddff484c19ad$var$_excluded3 = [
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
const $1996ddff484c19ad$var$REACT_ROUTER_VERSION = "6";
try {
    window.__reactRouterVersion = $1996ddff484c19ad$var$REACT_ROUTER_VERSION;
} catch (e) {
// no-op
}
function $1996ddff484c19ad$export$1f3f55432a00e06d(routes, opts) {
    return (0, $6c64ee69686350de$export$baddd0131ee8c05b)({
        basename: opts == null ? void 0 : opts.basename,
        future: $1996ddff484c19ad$var$_extends({}, opts == null ? void 0 : opts.future, {
            v7_prependBasename: true
        }),
        history: (0, $6c64ee69686350de$export$719fc203c4e16dee)({
            window: opts == null ? void 0 : opts.window
        }),
        hydrationData: (opts == null ? void 0 : opts.hydrationData) || $1996ddff484c19ad$var$parseHydrationData(),
        routes: routes,
        mapRouteProperties: (0, $a755294db44273f2$export$52b333d321859367),
        unstable_dataStrategy: opts == null ? void 0 : opts.unstable_dataStrategy,
        window: opts == null ? void 0 : opts.window
    }).initialize();
}
function $1996ddff484c19ad$export$1ba7ed8a3a7b3765(routes, opts) {
    return (0, $6c64ee69686350de$export$baddd0131ee8c05b)({
        basename: opts == null ? void 0 : opts.basename,
        future: $1996ddff484c19ad$var$_extends({}, opts == null ? void 0 : opts.future, {
            v7_prependBasename: true
        }),
        history: (0, $6c64ee69686350de$export$b71fdd3798280242)({
            window: opts == null ? void 0 : opts.window
        }),
        hydrationData: (opts == null ? void 0 : opts.hydrationData) || $1996ddff484c19ad$var$parseHydrationData(),
        routes: routes,
        mapRouteProperties: (0, $a755294db44273f2$export$52b333d321859367),
        unstable_dataStrategy: opts == null ? void 0 : opts.unstable_dataStrategy,
        window: opts == null ? void 0 : opts.window
    }).initialize();
}
function $1996ddff484c19ad$var$parseHydrationData() {
    var _window;
    let state = (_window = window) == null ? void 0 : _window.__staticRouterHydrationData;
    if (state && state.errors) state = $1996ddff484c19ad$var$_extends({}, state, {
        errors: $1996ddff484c19ad$var$deserializeErrors(state.errors)
    });
    return state;
}
function $1996ddff484c19ad$var$deserializeErrors(errors) {
    if (!errors) return null;
    let entries = Object.entries(errors);
    let serialized = {};
    for (let [key, val] of entries){
        // Hey you!  If you change this, please change the corresponding logic in
        // serializeErrors in react-router-dom/server.tsx :)
        if (val && val.__type === "RouteErrorResponse") serialized[key] = new (0, $6c64ee69686350de$export$6c6580e81da25755)(val.status, val.statusText, val.data, val.internal === true);
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
const $1996ddff484c19ad$export$7ad602f0e94e62d1 = /*#__PURE__*/ $kdEmn.createContext({
    isTransitioning: false
});
const $1996ddff484c19ad$export$148fd98d095596d4 = /*#__PURE__*/ $kdEmn.createContext(new Map());
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
*/ const $1996ddff484c19ad$var$START_TRANSITION = "startTransition";
const $1996ddff484c19ad$var$startTransitionImpl = $kdEmn[$1996ddff484c19ad$var$START_TRANSITION];
const $1996ddff484c19ad$var$FLUSH_SYNC = "flushSync";
const $1996ddff484c19ad$var$flushSyncImpl = $8694693cb6719903$exports[$1996ddff484c19ad$var$FLUSH_SYNC];
const $1996ddff484c19ad$var$USE_ID = "useId";
const $1996ddff484c19ad$var$useIdImpl = $kdEmn[$1996ddff484c19ad$var$USE_ID];
function $1996ddff484c19ad$var$startTransitionSafe(cb) {
    if ($1996ddff484c19ad$var$startTransitionImpl) $1996ddff484c19ad$var$startTransitionImpl(cb);
    else cb();
}
function $1996ddff484c19ad$var$flushSyncSafe(cb) {
    if ($1996ddff484c19ad$var$flushSyncImpl) $1996ddff484c19ad$var$flushSyncImpl(cb);
    else cb();
}
class $1996ddff484c19ad$var$Deferred {
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
 */ function $1996ddff484c19ad$export$323e4fc2fa4753fb(_ref) {
    let { fallbackElement: fallbackElement, router: router, future: future } = _ref;
    let [state, setStateImpl] = $kdEmn.useState(router.state);
    let [pendingState, setPendingState] = $kdEmn.useState();
    let [vtContext, setVtContext] = $kdEmn.useState({
        isTransitioning: false
    });
    let [renderDfd, setRenderDfd] = $kdEmn.useState();
    let [transition, setTransition] = $kdEmn.useState();
    let [interruption, setInterruption] = $kdEmn.useState();
    let fetcherData = $kdEmn.useRef(new Map());
    let { v7_startTransition: v7_startTransition } = future || {};
    let optInStartTransition = $kdEmn.useCallback((cb)=>{
        if (v7_startTransition) $1996ddff484c19ad$var$startTransitionSafe(cb);
        else cb();
    }, [
        v7_startTransition
    ]);
    let setState = $kdEmn.useCallback((newState, _ref2)=>{
        let { deletedFetchers: deletedFetchers, unstable_flushSync: flushSync, unstable_viewTransitionOpts: viewTransitionOpts } = _ref2;
        deletedFetchers.forEach((key)=>fetcherData.current.delete(key));
        newState.fetchers.forEach((fetcher, key)=>{
            if (fetcher.data !== undefined) fetcherData.current.set(key, fetcher.data);
        });
        let isViewTransitionUnavailable = router.window == null || router.window.document == null || typeof router.window.document.startViewTransition !== "function";
        // If this isn't a view transition or it's not available in this browser,
        // just update and be done with it
        if (!viewTransitionOpts || isViewTransitionUnavailable) {
            if (flushSync) $1996ddff484c19ad$var$flushSyncSafe(()=>setStateImpl(newState));
            else optInStartTransition(()=>setStateImpl(newState));
            return;
        }
        // flushSync + startViewTransition
        if (flushSync) {
            // Flush through the context to mark DOM elements as transition=ing
            $1996ddff484c19ad$var$flushSyncSafe(()=>{
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
                $1996ddff484c19ad$var$flushSyncSafe(()=>setStateImpl(newState));
            });
            // Clean up after the animation completes
            t.finished.finally(()=>{
                $1996ddff484c19ad$var$flushSyncSafe(()=>{
                    setRenderDfd(undefined);
                    setTransition(undefined);
                    setPendingState(undefined);
                    setVtContext({
                        isTransitioning: false
                    });
                });
            });
            $1996ddff484c19ad$var$flushSyncSafe(()=>setTransition(t));
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
    $kdEmn.useLayoutEffect(()=>router.subscribe(setState), [
        router,
        setState
    ]);
    // When we start a view transition, create a Deferred we can use for the
    // eventual "completed" render
    $kdEmn.useEffect(()=>{
        if (vtContext.isTransitioning && !vtContext.flushSync) setRenderDfd(new $1996ddff484c19ad$var$Deferred());
    }, [
        vtContext
    ]);
    // Once the deferred is created, kick off startViewTransition() to update the
    // DOM and then wait on the Deferred to resolve (indicating the DOM update has
    // happened)
    $kdEmn.useEffect(()=>{
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
    $kdEmn.useEffect(()=>{
        if (renderDfd && pendingState && state.location.key === pendingState.location.key) renderDfd.resolve();
    }, [
        renderDfd,
        transition,
        state.location,
        pendingState
    ]);
    // If we get interrupted with a new navigation during a transition, we skip
    // the active transition, let it cleanup, then kick it off again here
    $kdEmn.useEffect(()=>{
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
    $kdEmn.useEffect(()=>{
    // Only log this once on initial mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    let navigator = $kdEmn.useMemo(()=>{
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
    let dataRouterContext = $kdEmn.useMemo(()=>({
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
    return /*#__PURE__*/ $kdEmn.createElement($kdEmn.Fragment, null, /*#__PURE__*/ $kdEmn.createElement((0, $a755294db44273f2$export$3add0d5dce533e2e).Provider, {
        value: dataRouterContext
    }, /*#__PURE__*/ $kdEmn.createElement((0, $a755294db44273f2$export$145dfa71566a64dc).Provider, {
        value: state
    }, /*#__PURE__*/ $kdEmn.createElement($1996ddff484c19ad$export$148fd98d095596d4.Provider, {
        value: fetcherData.current
    }, /*#__PURE__*/ $kdEmn.createElement($1996ddff484c19ad$export$7ad602f0e94e62d1.Provider, {
        value: vtContext
    }, /*#__PURE__*/ $kdEmn.createElement((0, $a755294db44273f2$export$55185c17a0fcbe46), {
        basename: basename,
        location: state.location,
        navigationType: state.historyAction,
        navigator: navigator,
        future: {
            v7_relativeSplatPath: router.future.v7_relativeSplatPath
        }
    }, state.initialized || router.future.v7_partialHydration ? /*#__PURE__*/ $kdEmn.createElement($1996ddff484c19ad$var$DataRoutes, {
        routes: router.routes,
        future: router.future,
        state: state
    }) : fallbackElement))))), null);
}
function $1996ddff484c19ad$var$DataRoutes(_ref3) {
    let { routes: routes, future: future, state: state } = _ref3;
    return (0, $a755294db44273f2$export$5fcee62552a12fbf)(routes, undefined, state, future);
}
/**
 * A `<Router>` for use in web browsers. Provides the cleanest URLs.
 */ function $1996ddff484c19ad$export$9ba4e89fdfa1fc54(_ref4) {
    let { basename: basename, children: children, future: future, window: window1 } = _ref4;
    let historyRef = $kdEmn.useRef();
    if (historyRef.current == null) historyRef.current = (0, $6c64ee69686350de$export$719fc203c4e16dee)({
        window: window1,
        v5Compat: true
    });
    let history = historyRef.current;
    let [state, setStateImpl] = $kdEmn.useState({
        action: history.action,
        location: history.location
    });
    let { v7_startTransition: v7_startTransition } = future || {};
    let setState = $kdEmn.useCallback((newState)=>{
        v7_startTransition && $1996ddff484c19ad$var$startTransitionImpl ? $1996ddff484c19ad$var$startTransitionImpl(()=>setStateImpl(newState)) : setStateImpl(newState);
    }, [
        setStateImpl,
        v7_startTransition
    ]);
    $kdEmn.useLayoutEffect(()=>history.listen(setState), [
        history,
        setState
    ]);
    return /*#__PURE__*/ $kdEmn.createElement((0, $a755294db44273f2$export$55185c17a0fcbe46), {
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
 */ function $1996ddff484c19ad$export$7221d69dcfc8e36b(_ref5) {
    let { basename: basename, children: children, future: future, window: window1 } = _ref5;
    let historyRef = $kdEmn.useRef();
    if (historyRef.current == null) historyRef.current = (0, $6c64ee69686350de$export$b71fdd3798280242)({
        window: window1,
        v5Compat: true
    });
    let history = historyRef.current;
    let [state, setStateImpl] = $kdEmn.useState({
        action: history.action,
        location: history.location
    });
    let { v7_startTransition: v7_startTransition } = future || {};
    let setState = $kdEmn.useCallback((newState)=>{
        v7_startTransition && $1996ddff484c19ad$var$startTransitionImpl ? $1996ddff484c19ad$var$startTransitionImpl(()=>setStateImpl(newState)) : setStateImpl(newState);
    }, [
        setStateImpl,
        v7_startTransition
    ]);
    $kdEmn.useLayoutEffect(()=>history.listen(setState), [
        history,
        setState
    ]);
    return /*#__PURE__*/ $kdEmn.createElement((0, $a755294db44273f2$export$55185c17a0fcbe46), {
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
 */ function $1996ddff484c19ad$export$eefb0c834599897e(_ref6) {
    let { basename: basename, children: children, future: future, history: history } = _ref6;
    let [state, setStateImpl] = $kdEmn.useState({
        action: history.action,
        location: history.location
    });
    let { v7_startTransition: v7_startTransition } = future || {};
    let setState = $kdEmn.useCallback((newState)=>{
        v7_startTransition && $1996ddff484c19ad$var$startTransitionImpl ? $1996ddff484c19ad$var$startTransitionImpl(()=>setStateImpl(newState)) : setStateImpl(newState);
    }, [
        setStateImpl,
        v7_startTransition
    ]);
    $kdEmn.useLayoutEffect(()=>history.listen(setState), [
        history,
        setState
    ]);
    return /*#__PURE__*/ $kdEmn.createElement((0, $a755294db44273f2$export$55185c17a0fcbe46), {
        basename: basename,
        children: children,
        location: state.location,
        navigationType: state.action,
        navigator: history,
        future: future
    });
}
const $1996ddff484c19ad$var$isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
const $1996ddff484c19ad$var$ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
/**
 * The public API for rendering a history-aware `<a>`.
 */ const $1996ddff484c19ad$export$a6c7ac8248d6e38a = /*#__PURE__*/ $kdEmn.forwardRef(function LinkWithRef(_ref7, ref) {
    let { onClick: onClick, relative: relative, reloadDocument: reloadDocument, replace: replace, state: state, target: target, to: to, preventScrollReset: preventScrollReset, unstable_viewTransition: unstable_viewTransition } = _ref7, rest = $1996ddff484c19ad$var$_objectWithoutPropertiesLoose(_ref7, $1996ddff484c19ad$var$_excluded);
    let { basename: basename } = $kdEmn.useContext((0, $a755294db44273f2$export$26749e8557646306));
    // Rendered into <a href> for absolute URLs
    let absoluteHref;
    let isExternal = false;
    if (typeof to === "string" && $1996ddff484c19ad$var$ABSOLUTE_URL_REGEX.test(to)) {
        // Render the absolute href server- and client-side
        absoluteHref = to;
        // Only check for external origins client-side
        if ($1996ddff484c19ad$var$isBrowser) try {
            let currentUrl = new URL(window.location.href);
            let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
            let path = (0, $6c64ee69686350de$export$b69e3301ce081aa3)(targetUrl.pathname, basename);
            if (targetUrl.origin === currentUrl.origin && path != null) // Strip the protocol/origin/basename for same-origin absolute URLs
            to = path + targetUrl.search + targetUrl.hash;
            else isExternal = true;
        } catch (e) {}
    }
    // Rendered into <a href> for relative URLs
    let href = (0, $a755294db44273f2$export$b66bb29c5006f12f)(to, {
        relative: relative
    });
    let internalOnClick = $1996ddff484c19ad$export$67621102c14d847(to, {
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
    $kdEmn.createElement("a", $1996ddff484c19ad$var$_extends({}, rest, {
        href: absoluteHref || href,
        onClick: isExternal || reloadDocument ? onClick : handleClick,
        ref: ref,
        target: target
    })));
});
/**
 * A `<Link>` wrapper that knows if it's "active" or not.
 */ const $1996ddff484c19ad$export$b0d92dbee9b5b60d = /*#__PURE__*/ $kdEmn.forwardRef(function NavLinkWithRef(_ref8, ref) {
    let { "aria-current": ariaCurrentProp = "page", caseSensitive: caseSensitive = false, className: classNameProp = "", end: end = false, style: styleProp, to: to, unstable_viewTransition: unstable_viewTransition, children: children } = _ref8, rest = $1996ddff484c19ad$var$_objectWithoutPropertiesLoose(_ref8, $1996ddff484c19ad$var$_excluded2);
    let path = (0, $a755294db44273f2$export$e75d2a2d1b3c245b)(to, {
        relative: rest.relative
    });
    let location = (0, $a755294db44273f2$export$45d76561a5302f2b)();
    let routerState = $kdEmn.useContext((0, $a755294db44273f2$export$145dfa71566a64dc));
    let { navigator: navigator, basename: basename } = $kdEmn.useContext((0, $a755294db44273f2$export$26749e8557646306));
    let isTransitioning = routerState != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    $1996ddff484c19ad$export$328fe15191788e7f(path) && unstable_viewTransition === true;
    let toPathname = navigator.encodeLocation ? navigator.encodeLocation(path).pathname : path.pathname;
    let locationPathname = location.pathname;
    let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
    if (!caseSensitive) {
        locationPathname = locationPathname.toLowerCase();
        nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
        toPathname = toPathname.toLowerCase();
    }
    if (nextLocationPathname && basename) nextLocationPathname = (0, $6c64ee69686350de$export$b69e3301ce081aa3)(nextLocationPathname, basename) || nextLocationPathname;
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
    return /*#__PURE__*/ $kdEmn.createElement($1996ddff484c19ad$export$a6c7ac8248d6e38a, $1996ddff484c19ad$var$_extends({}, rest, {
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
 */ const $1996ddff484c19ad$export$a7fed597f4b8afd8 = /*#__PURE__*/ $kdEmn.forwardRef((_ref9, forwardedRef)=>{
    let { fetcherKey: fetcherKey, navigate: navigate, reloadDocument: reloadDocument, replace: replace, state: state, method: method = $1996ddff484c19ad$var$defaultMethod, action: action, onSubmit: onSubmit, relative: relative, preventScrollReset: preventScrollReset, unstable_viewTransition: unstable_viewTransition } = _ref9, props = $1996ddff484c19ad$var$_objectWithoutPropertiesLoose(_ref9, $1996ddff484c19ad$var$_excluded3);
    let submit = $1996ddff484c19ad$export$47c85c6e3a081d3();
    let formAction = $1996ddff484c19ad$export$89a6bd6db0d97c56(action, {
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
    return /*#__PURE__*/ $kdEmn.createElement("form", $1996ddff484c19ad$var$_extends({
        ref: forwardedRef,
        method: formMethod,
        action: formAction,
        onSubmit: reloadDocument ? onSubmit : submitHandler
    }, props));
});
/**
 * This component will emulate the browser's scroll restoration on location
 * changes.
 */ function $1996ddff484c19ad$export$11aac1aab828f1fa(_ref10) {
    let { getKey: getKey, storageKey: storageKey } = _ref10;
    $1996ddff484c19ad$export$25057cfe5591e3e9({
        getKey: getKey,
        storageKey: storageKey
    });
    return null;
}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Hooks
////////////////////////////////////////////////////////////////////////////////
var $1996ddff484c19ad$var$DataRouterHook;
(function(DataRouterHook) {
    DataRouterHook["UseScrollRestoration"] = "useScrollRestoration";
    DataRouterHook["UseSubmit"] = "useSubmit";
    DataRouterHook["UseSubmitFetcher"] = "useSubmitFetcher";
    DataRouterHook["UseFetcher"] = "useFetcher";
    DataRouterHook["useViewTransitionState"] = "useViewTransitionState";
})($1996ddff484c19ad$var$DataRouterHook || ($1996ddff484c19ad$var$DataRouterHook = {}));
var $1996ddff484c19ad$var$DataRouterStateHook;
(function(DataRouterStateHook) {
    DataRouterStateHook["UseFetcher"] = "useFetcher";
    DataRouterStateHook["UseFetchers"] = "useFetchers";
    DataRouterStateHook["UseScrollRestoration"] = "useScrollRestoration";
})($1996ddff484c19ad$var$DataRouterStateHook || ($1996ddff484c19ad$var$DataRouterStateHook = {}));
// Internal hooks
function $1996ddff484c19ad$var$getDataRouterConsoleError(hookName) {
    return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function $1996ddff484c19ad$var$useDataRouterContext(hookName) {
    let ctx = $kdEmn.useContext((0, $a755294db44273f2$export$3add0d5dce533e2e));
    !ctx && (0, $6c64ee69686350de$export$3e9cee6b33872309)(false);
    return ctx;
}
function $1996ddff484c19ad$var$useDataRouterState(hookName) {
    let state = $kdEmn.useContext((0, $a755294db44273f2$export$145dfa71566a64dc));
    !state && (0, $6c64ee69686350de$export$3e9cee6b33872309)(false);
    return state;
}
// External hooks
/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` components with the same click behavior we
 * use in our exported `<Link>`.
 */ function $1996ddff484c19ad$export$67621102c14d847(to, _temp) {
    let { target: target, replace: replaceProp, state: state, preventScrollReset: preventScrollReset, relative: relative, unstable_viewTransition: unstable_viewTransition } = _temp === void 0 ? {} : _temp;
    let navigate = (0, $a755294db44273f2$export$9770f232ac06a008)();
    let location = (0, $a755294db44273f2$export$45d76561a5302f2b)();
    let path = (0, $a755294db44273f2$export$e75d2a2d1b3c245b)(to, {
        relative: relative
    });
    return $kdEmn.useCallback((event)=>{
        if ($1996ddff484c19ad$var$shouldProcessLinkClick(event, target)) {
            event.preventDefault();
            // If the URL hasn't changed, a regular <a> will do a replace instead of
            // a push, so do the same here unless the replace prop is explicitly set
            let replace = replaceProp !== undefined ? replaceProp : (0, $6c64ee69686350de$export$fe53371bee54353d)(location) === (0, $6c64ee69686350de$export$fe53371bee54353d)(path);
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
 */ function $1996ddff484c19ad$export$f1a78c17382fe22a(defaultInit) {
    let defaultSearchParamsRef = $kdEmn.useRef($1996ddff484c19ad$export$a2e4e2dcc7b1f22f(defaultInit));
    let hasSetSearchParamsRef = $kdEmn.useRef(false);
    let location = (0, $a755294db44273f2$export$45d76561a5302f2b)();
    let searchParams = $kdEmn.useMemo(()=>// Only merge in the defaults if we haven't yet called setSearchParams.
        // Once we call that we want those to take precedence, otherwise you can't
        // remove a param with setSearchParams({}) if it has an initial value
        $1996ddff484c19ad$var$getSearchParamsForLocation(location.search, hasSetSearchParamsRef.current ? null : defaultSearchParamsRef.current), [
        location.search
    ]);
    let navigate = (0, $a755294db44273f2$export$9770f232ac06a008)();
    let setSearchParams = $kdEmn.useCallback((nextInit, navigateOptions)=>{
        const newSearchParams = $1996ddff484c19ad$export$a2e4e2dcc7b1f22f(typeof nextInit === "function" ? nextInit(searchParams) : nextInit);
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
function $1996ddff484c19ad$var$validateClientSideSubmission() {
    if (typeof document === "undefined") throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
let $1996ddff484c19ad$var$fetcherId = 0;
let $1996ddff484c19ad$var$getUniqueFetcherId = ()=>"__" + String(++$1996ddff484c19ad$var$fetcherId) + "__";
/**
 * Returns a function that may be used to programmatically submit a form (or
 * some arbitrary data) to the server.
 */ function $1996ddff484c19ad$export$47c85c6e3a081d3() {
    let { router: router } = $1996ddff484c19ad$var$useDataRouterContext($1996ddff484c19ad$var$DataRouterHook.UseSubmit);
    let { basename: basename } = $kdEmn.useContext((0, $a755294db44273f2$export$26749e8557646306));
    let currentRouteId = (0, $a755294db44273f2$export$5fc8298006ad9e58)();
    return $kdEmn.useCallback(function(target, options) {
        if (options === void 0) options = {};
        $1996ddff484c19ad$var$validateClientSideSubmission();
        let { action: action, method: method, encType: encType, formData: formData, body: body } = $1996ddff484c19ad$var$getFormSubmissionInfo(target, basename);
        if (options.navigate === false) {
            let key = options.fetcherKey || $1996ddff484c19ad$var$getUniqueFetcherId();
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
function $1996ddff484c19ad$export$89a6bd6db0d97c56(action, _temp2) {
    let { relative: relative } = _temp2 === void 0 ? {} : _temp2;
    let { basename: basename } = $kdEmn.useContext((0, $a755294db44273f2$export$26749e8557646306));
    let routeContext = $kdEmn.useContext((0, $a755294db44273f2$export$9072aa6dd1f93057));
    !routeContext && (0, $6c64ee69686350de$export$3e9cee6b33872309)(false);
    let [match] = routeContext.matches.slice(-1);
    // Shallow clone path so we can modify it below, otherwise we modify the
    // object referenced by useMemo inside useResolvedPath
    let path = $1996ddff484c19ad$var$_extends({}, (0, $a755294db44273f2$export$e75d2a2d1b3c245b)(action ? action : ".", {
        relative: relative
    }));
    // If no action was specified, browsers will persist current search params
    // when determining the path, so match that behavior
    // https://github.com/remix-run/remix/issues/927
    let location = (0, $a755294db44273f2$export$45d76561a5302f2b)();
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
    if (basename !== "/") path.pathname = path.pathname === "/" ? basename : (0, $6c64ee69686350de$export$86d9a7913e44197e)([
        basename,
        path.pathname
    ]);
    return (0, $6c64ee69686350de$export$fe53371bee54353d)(path);
}
// TODO: (v7) Change the useFetcher generic default from `any` to `unknown`
/**
 * Interacts with route loaders and actions without causing a navigation. Great
 * for any interaction that stays on the same page.
 */ function $1996ddff484c19ad$export$5b0d2d9a9921565a(_temp3) {
    var _route$matches;
    let { key: key } = _temp3 === void 0 ? {} : _temp3;
    let { router: router } = $1996ddff484c19ad$var$useDataRouterContext($1996ddff484c19ad$var$DataRouterHook.UseFetcher);
    let state = $1996ddff484c19ad$var$useDataRouterState($1996ddff484c19ad$var$DataRouterStateHook.UseFetcher);
    let fetcherData = $kdEmn.useContext($1996ddff484c19ad$export$148fd98d095596d4);
    let route = $kdEmn.useContext((0, $a755294db44273f2$export$9072aa6dd1f93057));
    let routeId = (_route$matches = route.matches[route.matches.length - 1]) == null ? void 0 : _route$matches.route.id;
    !fetcherData && (0, $6c64ee69686350de$export$3e9cee6b33872309)(false);
    !route && (0, $6c64ee69686350de$export$3e9cee6b33872309)(false);
    !(routeId != null) && (0, $6c64ee69686350de$export$3e9cee6b33872309)(false);
    // Fetcher key handling
    // OK to call conditionally to feature detect `useId`
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let defaultKey = $1996ddff484c19ad$var$useIdImpl ? $1996ddff484c19ad$var$useIdImpl() : "";
    let [fetcherKey, setFetcherKey] = $kdEmn.useState(key || defaultKey);
    if (key && key !== fetcherKey) setFetcherKey(key);
    else if (!fetcherKey) // We will only fall through here when `useId` is not available
    setFetcherKey($1996ddff484c19ad$var$getUniqueFetcherId());
    // Registration/cleanup
    $kdEmn.useEffect(()=>{
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
    let load = $kdEmn.useCallback((href, opts)=>{
        !routeId && (0, $6c64ee69686350de$export$3e9cee6b33872309)(false);
        router.fetch(fetcherKey, routeId, href, opts);
    }, [
        fetcherKey,
        routeId,
        router
    ]);
    let submitImpl = $1996ddff484c19ad$export$47c85c6e3a081d3();
    let submit = $kdEmn.useCallback((target, opts)=>{
        submitImpl(target, $1996ddff484c19ad$var$_extends({}, opts, {
            navigate: false,
            fetcherKey: fetcherKey
        }));
    }, [
        fetcherKey,
        submitImpl
    ]);
    let FetcherForm = $kdEmn.useMemo(()=>{
        let FetcherForm = /*#__PURE__*/ $kdEmn.forwardRef((props, ref)=>{
            return /*#__PURE__*/ $kdEmn.createElement($1996ddff484c19ad$export$a7fed597f4b8afd8, $1996ddff484c19ad$var$_extends({}, props, {
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
    let fetcher = state.fetchers.get(fetcherKey) || (0, $6c64ee69686350de$export$52eace9c284d3585);
    let data = fetcherData.get(fetcherKey);
    let fetcherWithComponents = $kdEmn.useMemo(()=>$1996ddff484c19ad$var$_extends({
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
 */ function $1996ddff484c19ad$export$fa996778a3a31087() {
    let state = $1996ddff484c19ad$var$useDataRouterState($1996ddff484c19ad$var$DataRouterStateHook.UseFetchers);
    return Array.from(state.fetchers.entries()).map((_ref11)=>{
        let [key, fetcher] = _ref11;
        return $1996ddff484c19ad$var$_extends({}, fetcher, {
            key: key
        });
    });
}
const $1996ddff484c19ad$var$SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
let $1996ddff484c19ad$var$savedScrollPositions = {};
/**
 * When rendered inside a RouterProvider, will restore scroll positions on navigations
 */ function $1996ddff484c19ad$export$25057cfe5591e3e9(_temp4) {
    let { getKey: getKey, storageKey: storageKey } = _temp4 === void 0 ? {} : _temp4;
    let { router: router } = $1996ddff484c19ad$var$useDataRouterContext($1996ddff484c19ad$var$DataRouterHook.UseScrollRestoration);
    let { restoreScrollPosition: restoreScrollPosition, preventScrollReset: preventScrollReset } = $1996ddff484c19ad$var$useDataRouterState($1996ddff484c19ad$var$DataRouterStateHook.UseScrollRestoration);
    let { basename: basename } = $kdEmn.useContext((0, $a755294db44273f2$export$26749e8557646306));
    let location = (0, $a755294db44273f2$export$45d76561a5302f2b)();
    let matches = (0, $a755294db44273f2$export$2378eb7f5ff86053)();
    let navigation = (0, $a755294db44273f2$export$d0fd4b7106de2769)();
    // Trigger manual scroll restoration while we're active
    $kdEmn.useEffect(()=>{
        window.history.scrollRestoration = "manual";
        return ()=>{
            window.history.scrollRestoration = "auto";
        };
    }, []);
    // Save positions on pagehide
    $1996ddff484c19ad$var$usePageHide($kdEmn.useCallback(()=>{
        if (navigation.state === "idle") {
            let key = (getKey ? getKey(location, matches) : null) || location.key;
            $1996ddff484c19ad$var$savedScrollPositions[key] = window.scrollY;
        }
        try {
            sessionStorage.setItem(storageKey || $1996ddff484c19ad$var$SCROLL_RESTORATION_STORAGE_KEY, JSON.stringify($1996ddff484c19ad$var$savedScrollPositions));
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
        $kdEmn.useLayoutEffect(()=>{
            try {
                let sessionPositions = sessionStorage.getItem(storageKey || $1996ddff484c19ad$var$SCROLL_RESTORATION_STORAGE_KEY);
                if (sessionPositions) $1996ddff484c19ad$var$savedScrollPositions = JSON.parse(sessionPositions);
            } catch (e) {
            // no-op, use default empty object
            }
        }, [
            storageKey
        ]);
        // Enable scroll restoration in the router
        // eslint-disable-next-line react-hooks/rules-of-hooks
        $kdEmn.useLayoutEffect(()=>{
            let getKeyWithoutBasename = getKey && basename !== "/" ? (location, matches)=>getKey($1996ddff484c19ad$var$_extends({}, location, {
                    pathname: (0, $6c64ee69686350de$export$b69e3301ce081aa3)(location.pathname, basename) || location.pathname
                }), matches) : getKey;
            let disableScrollRestoration = router == null ? void 0 : router.enableScrollRestoration($1996ddff484c19ad$var$savedScrollPositions, ()=>window.scrollY, getKeyWithoutBasename);
            return ()=>disableScrollRestoration && disableScrollRestoration();
        }, [
            router,
            basename,
            getKey
        ]);
        // Restore scrolling when state.restoreScrollPosition changes
        // eslint-disable-next-line react-hooks/rules-of-hooks
        $kdEmn.useLayoutEffect(()=>{
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
 */ function $1996ddff484c19ad$export$c0a586b329cae57d(callback, options) {
    let { capture: capture } = options || {};
    $kdEmn.useEffect(()=>{
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
 */ function $1996ddff484c19ad$var$usePageHide(callback, options) {
    let { capture: capture } = options || {};
    $kdEmn.useEffect(()=>{
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
 */ function $1996ddff484c19ad$export$39f4eb3dbd812741(_ref12) {
    let { when: when, message: message } = _ref12;
    let blocker = (0, $a755294db44273f2$export$b273b3273281a049)(when);
    $kdEmn.useEffect(()=>{
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
    $kdEmn.useEffect(()=>{
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
 */ function $1996ddff484c19ad$export$328fe15191788e7f(to, opts) {
    if (opts === void 0) opts = {};
    let vtContext = $kdEmn.useContext($1996ddff484c19ad$export$7ad602f0e94e62d1);
    !(vtContext != null) && (0, $6c64ee69686350de$export$3e9cee6b33872309)(false);
    let { basename: basename } = $1996ddff484c19ad$var$useDataRouterContext($1996ddff484c19ad$var$DataRouterHook.useViewTransitionState);
    let path = (0, $a755294db44273f2$export$e75d2a2d1b3c245b)(to, {
        relative: opts.relative
    });
    if (!vtContext.isTransitioning) return false;
    let currentPath = (0, $6c64ee69686350de$export$b69e3301ce081aa3)(vtContext.currentLocation.pathname, basename) || vtContext.currentLocation.pathname;
    let nextPath = (0, $6c64ee69686350de$export$b69e3301ce081aa3)(vtContext.nextLocation.pathname, basename) || vtContext.nextLocation.pathname;
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
    return (0, $6c64ee69686350de$export$81336c211d5ff295)(path.pathname, nextPath) != null || (0, $6c64ee69686350de$export$81336c211d5ff295)(path.pathname, currentPath) != null;
}


const $ed6d795dcad1f0e2$export$9bd698419030e459 = ({ movie: movie, isFavorite: isFavorite, onFavoriteChange: onFavoriteChange })=>{
    const storedToken = localStorage.getItem("token");
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const [user, setUser] = (0, $kdEmn.useState)(storedUser ? storedUser : null);
    const [token, setToken] = (0, $kdEmn.useState)(storedToken ? storedToken : null);
    const addToFavorites = ()=>{
        fetch(`https://my-flix-db-975de3fb6719.herokuapp.com/users/${user.Username}/movies/${encodeURIComponent(movie.id)}`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        }).then((response)=>{
            if (!response.ok) throw new Error("Failed to add movie to favorites.");
            alert("Movie added to favorite!");
            return response.json();
        }).then((user)=>{
            localStorage.setItem("user", JSON.stringify(user));
            setUser(user);
            onFavoriteChange(user.FavoriteMovies);
        }).catch((error)=>{
            console.error(error);
        });
    };
    const removeFromFavorites = ()=>{
        fetch(`https://my-flix-db-975de3fb6719.herokuapp.com/users/${user.Username}/movies/${encodeURIComponent(movie.id)}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        }).then((response)=>{
            if (!response.ok) throw new Error("Failed to remove movie from favorites.");
            alert("Movie removed from favorites!");
            return response.json();
        }).then((user)=>{
            localStorage.setItem("user", JSON.stringify(user));
            setUser(user);
            onFavoriteChange(user.FavoriteMovies);
        }).catch((error)=>{
            console.error(error);
        });
    };
    const handleAddToFavorites = ()=>{
        addToFavorites();
    };
    const handleRemoveFromFavorites = ()=>{
        removeFromFavorites();
    };
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsxs)((0, $8a713af880997588$exports.Fragment), {
        children: [
            /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $1996ddff484c19ad$export$a6c7ac8248d6e38a), {
                to: `/movies/${encodeURIComponent(movie.id)}`,
                className: "movie-view",
                children: /*#__PURE__*/ (0, $8a713af880997588$exports.jsxs)((0, $de310a2e740b7385$export$2e2bcd8739ae039), {
                    className: "h-60",
                    children: [
                        /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $de310a2e740b7385$export$2e2bcd8739ae039).Img, {
                            variant: "top",
                            src: movie.image,
                            className: "object-fit-scale"
                        }),
                        /*#__PURE__*/ (0, $8a713af880997588$exports.jsxs)((0, $de310a2e740b7385$export$2e2bcd8739ae039).Body, {
                            children: [
                                /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $de310a2e740b7385$export$2e2bcd8739ae039).Title, {
                                    children: movie.title
                                }),
                                /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $de310a2e740b7385$export$2e2bcd8739ae039).Text, {
                                    children: movie.genre
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $de310a2e740b7385$export$2e2bcd8739ae039), {
                children: isFavorite ? /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $d6a6e6534be31a95$export$2e2bcd8739ae039), {
                    variant: "primary",
                    onClick: handleRemoveFromFavorites,
                    children: "Remove from Favorites"
                }) : /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $d6a6e6534be31a95$export$2e2bcd8739ae039), {
                    variant: "primary",
                    onClick: handleAddToFavorites,
                    children: "Add to Favorites"
                })
            })
        ]
    });
};
$ed6d795dcad1f0e2$export$9bd698419030e459.propTypes = {
    isFavorite: (0, (/*@__PURE__*/$parcel$interopDefault($5cea9eb9ce58b247$exports))).bool.isRequired,
    movie: (0, (/*@__PURE__*/$parcel$interopDefault($5cea9eb9ce58b247$exports))).shape({
        id: (0, (/*@__PURE__*/$parcel$interopDefault($5cea9eb9ce58b247$exports))).string.isRequired,
        title: (0, (/*@__PURE__*/$parcel$interopDefault($5cea9eb9ce58b247$exports))).string.isRequired,
        image: (0, (/*@__PURE__*/$parcel$interopDefault($5cea9eb9ce58b247$exports))).string.isRequired,
        description: (0, (/*@__PURE__*/$parcel$interopDefault($5cea9eb9ce58b247$exports))).string,
        genre: (0, (/*@__PURE__*/$parcel$interopDefault($5cea9eb9ce58b247$exports))).string,
        director: (0, (/*@__PURE__*/$parcel$interopDefault($5cea9eb9ce58b247$exports))).string,
        featured: (0, (/*@__PURE__*/$parcel$interopDefault($5cea9eb9ce58b247$exports))).bool
    }).isRequired
};






var $kdEmn = parcelRequire("kdEmn");


const $f418e74ea7e34046$export$78d497080ea8f89a = ({ movies: movies })=>{
    const { movieId: movieId } = (0, $a755294db44273f2$export$99eaa27ddbbb95ef)();
    const [movie, setMovie] = (0, $kdEmn.useState)(null);
    (0, $kdEmn.useEffect)(()=>{
        if (movies) {
            const foundMovie = movies.find((m)=>m.id === movieId);
            setMovie(foundMovie);
        }
    }, [
        movies,
        movieId
    ]);
    // Handle case where movie is not found
    if (!movie) return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)("div", {
        children: "Loading..."
    });
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsxs)((0, $de310a2e740b7385$export$2e2bcd8739ae039), {
        className: "h-60",
        children: [
            /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $de310a2e740b7385$export$2e2bcd8739ae039).Img, {
                variant: "top",
                src: movie.image,
                className: "object-fit-scale"
            }),
            /*#__PURE__*/ (0, $8a713af880997588$exports.jsxs)((0, $de310a2e740b7385$export$2e2bcd8739ae039).Body, {
                children: [
                    /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $de310a2e740b7385$export$2e2bcd8739ae039).Title, {
                        children: movie.title
                    }),
                    /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $de310a2e740b7385$export$2e2bcd8739ae039).Text, {
                        children: movie.description
                    }),
                    /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $de310a2e740b7385$export$2e2bcd8739ae039).Text, {
                        children: movie.genre
                    }),
                    /*#__PURE__*/ (0, $8a713af880997588$exports.jsxs)((0, $de310a2e740b7385$export$2e2bcd8739ae039).Text, {
                        children: [
                            "Director: ",
                            movie.director
                        ]
                    }),
                    /*#__PURE__*/ (0, $8a713af880997588$exports.jsxs)((0, $de310a2e740b7385$export$2e2bcd8739ae039).Text, {
                        children: [
                            "Birthyear ",
                            movie.birthyear,
                            " - Deathyear ",
                            movie.deathyear
                        ]
                    }),
                    /*#__PURE__*/ (0, $8a713af880997588$exports.jsxs)((0, $de310a2e740b7385$export$2e2bcd8739ae039).Text, {
                        children: [
                            "Bio: ",
                            movie.bio
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $1996ddff484c19ad$export$a6c7ac8248d6e38a), {
                to: `/`,
                children: /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $d6a6e6534be31a95$export$2e2bcd8739ae039), {
                    variant: "outline-secondary",
                    children: "Back"
                })
            })
        ]
    });
};
$f418e74ea7e34046$export$78d497080ea8f89a.proptypes = {
    movie: (0, (/*@__PURE__*/$parcel$interopDefault($5cea9eb9ce58b247$exports))).shape({
        image: (0, (/*@__PURE__*/$parcel$interopDefault($5cea9eb9ce58b247$exports))).string,
        title: (0, (/*@__PURE__*/$parcel$interopDefault($5cea9eb9ce58b247$exports))).string,
        director: (0, (/*@__PURE__*/$parcel$interopDefault($5cea9eb9ce58b247$exports))).shape({
            name: (0, (/*@__PURE__*/$parcel$interopDefault($5cea9eb9ce58b247$exports))).string,
            bio: (0, (/*@__PURE__*/$parcel$interopDefault($5cea9eb9ce58b247$exports))).string,
            birthyear: (0, (/*@__PURE__*/$parcel$interopDefault($5cea9eb9ce58b247$exports))).string,
            deathyear: (0, (/*@__PURE__*/$parcel$interopDefault($5cea9eb9ce58b247$exports))).string
        }).isRequired,
        description: (0, (/*@__PURE__*/$parcel$interopDefault($5cea9eb9ce58b247$exports))).string,
        genre: (0, (/*@__PURE__*/$parcel$interopDefault($5cea9eb9ce58b247$exports))).string
    }).isRequired
};




var $kdEmn = parcelRequire("kdEmn");



var $kdEmn = parcelRequire("kdEmn");


var $kdEmn = parcelRequire("kdEmn");


var $kdEmn = parcelRequire("kdEmn");


const $1310331c3a58ae9d$var$propTypes = {
    /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */ type: (0, (/*@__PURE__*/$parcel$interopDefault($5cea9eb9ce58b247$exports))).string,
    /** Display feedback as a tooltip. */ tooltip: (0, (/*@__PURE__*/$parcel$interopDefault($5cea9eb9ce58b247$exports))).bool,
    as: (0, (/*@__PURE__*/$parcel$interopDefault($5cea9eb9ce58b247$exports))).elementType
};
const $1310331c3a58ae9d$var$Feedback = /*#__PURE__*/ $kdEmn.forwardRef(// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({ as: Component = "div", className: className, type: type = "valid", tooltip: tooltip = false, ...props }, ref)=>/*#__PURE__*/ (0, $8a713af880997588$exports.jsx)(Component, {
        ...props,
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($32538ae97b12ecb9$exports)))(className, `${type}-${tooltip ? "tooltip" : "feedback"}`)
    }));
$1310331c3a58ae9d$var$Feedback.displayName = "Feedback";
$1310331c3a58ae9d$var$Feedback.propTypes = $1310331c3a58ae9d$var$propTypes;
var $1310331c3a58ae9d$export$2e2bcd8739ae039 = $1310331c3a58ae9d$var$Feedback;




var $kdEmn = parcelRequire("kdEmn");

var $kdEmn = parcelRequire("kdEmn");
"use client";
// TODO
const $394c175fe8386847$var$FormContext = /*#__PURE__*/ $kdEmn.createContext({});
var $394c175fe8386847$export$2e2bcd8739ae039 = $394c175fe8386847$var$FormContext;




"use client";
const $d37bd627871a6ca5$var$FormCheckInput = /*#__PURE__*/ $kdEmn.forwardRef(({ id: id, bsPrefix: bsPrefix, className: className, type: type = "checkbox", isValid: isValid = false, isInvalid: isInvalid = false, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "input", ...props }, ref)=>{
    const { controlId: controlId } = (0, $kdEmn.useContext)((0, $394c175fe8386847$export$2e2bcd8739ae039));
    bsPrefix = (0, $311a902b1b368ad8$export$7f387860ebffb32c)(bsPrefix, "form-check-input");
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)(Component, {
        ...props,
        ref: ref,
        type: type,
        id: id || controlId,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($32538ae97b12ecb9$exports)))(className, bsPrefix, isValid && "is-valid", isInvalid && "is-invalid")
    });
});
$d37bd627871a6ca5$var$FormCheckInput.displayName = "FormCheckInput";
var $d37bd627871a6ca5$export$2e2bcd8739ae039 = $d37bd627871a6ca5$var$FormCheckInput;




var $kdEmn = parcelRequire("kdEmn");



"use client";
const $84a8dc2b0255ff20$var$FormCheckLabel = /*#__PURE__*/ $kdEmn.forwardRef(({ bsPrefix: bsPrefix, className: className, htmlFor: htmlFor, ...props }, ref)=>{
    const { controlId: controlId } = (0, $kdEmn.useContext)((0, $394c175fe8386847$export$2e2bcd8739ae039));
    bsPrefix = (0, $311a902b1b368ad8$export$7f387860ebffb32c)(bsPrefix, "form-check-label");
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)("label", {
        ...props,
        ref: ref,
        htmlFor: htmlFor || controlId,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($32538ae97b12ecb9$exports)))(className, bsPrefix)
    });
});
$84a8dc2b0255ff20$var$FormCheckLabel.displayName = "FormCheckLabel";
var $84a8dc2b0255ff20$export$2e2bcd8739ae039 = $84a8dc2b0255ff20$var$FormCheckLabel;





var $kdEmn = parcelRequire("kdEmn");
/**
 * Iterates through children that are typically specified as `props.children`,
 * but only maps over children that are "valid elements".
 *
 * The mapFunction provided index will be normalised to the components mapped,
 * so an invalid component would not increase the index.
 *
 */ function $1520159d3c3edf3a$export$871de8747c9eaa88(children, func) {
    let index = 0;
    return $kdEmn.Children.map(children, (child)=>/*#__PURE__*/ $kdEmn.isValidElement(child) ? func(child, index++) : child);
}
/**
 * Iterates through children that are "valid elements".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 */ function $1520159d3c3edf3a$export$4b80e395e36b5a56(children, func) {
    let index = 0;
    $kdEmn.Children.forEach(children, (child)=>{
        if (/*#__PURE__*/ $kdEmn.isValidElement(child)) func(child, index++);
    });
}
/**
 * Finds whether a component's `children` prop includes a React element of the
 * specified type.
 */ function $1520159d3c3edf3a$export$500fd6099226ffae(children, type) {
    return $kdEmn.Children.toArray(children).some((child)=>/*#__PURE__*/ $kdEmn.isValidElement(child) && child.type === type);
}



"use client";
const $b089be3806b32af6$var$FormCheck = /*#__PURE__*/ $kdEmn.forwardRef(({ id: id, bsPrefix: bsPrefix, bsSwitchPrefix: bsSwitchPrefix, inline: inline = false, reverse: reverse = false, disabled: disabled = false, isValid: isValid = false, isInvalid: isInvalid = false, feedbackTooltip: feedbackTooltip = false, feedback: feedback, feedbackType: feedbackType, className: className, style: style, title: title = "", type: type = "checkbox", label: label, children: children, as: // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as = "input", ...props }, ref)=>{
    bsPrefix = (0, $311a902b1b368ad8$export$7f387860ebffb32c)(bsPrefix, "form-check");
    bsSwitchPrefix = (0, $311a902b1b368ad8$export$7f387860ebffb32c)(bsSwitchPrefix, "form-switch");
    const { controlId: controlId } = (0, $kdEmn.useContext)((0, $394c175fe8386847$export$2e2bcd8739ae039));
    const innerFormContext = (0, $kdEmn.useMemo)(()=>({
            controlId: id || controlId
        }), [
        controlId,
        id
    ]);
    const hasLabel = !children && label != null && label !== false || (0, $1520159d3c3edf3a$export$500fd6099226ffae)(children, (0, $84a8dc2b0255ff20$export$2e2bcd8739ae039));
    const input = /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $d37bd627871a6ca5$export$2e2bcd8739ae039), {
        ...props,
        type: type === "switch" ? "checkbox" : type,
        ref: ref,
        isValid: isValid,
        isInvalid: isInvalid,
        disabled: disabled,
        as: as
    });
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $394c175fe8386847$export$2e2bcd8739ae039).Provider, {
        value: innerFormContext,
        children: /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)("div", {
            style: style,
            className: (0, (/*@__PURE__*/$parcel$interopDefault($32538ae97b12ecb9$exports)))(className, hasLabel && bsPrefix, inline && `${bsPrefix}-inline`, reverse && `${bsPrefix}-reverse`, type === "switch" && bsSwitchPrefix),
            children: children || /*#__PURE__*/ (0, $8a713af880997588$exports.jsxs)((0, $8a713af880997588$exports.Fragment), {
                children: [
                    input,
                    hasLabel && /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $84a8dc2b0255ff20$export$2e2bcd8739ae039), {
                        title: title,
                        children: label
                    }),
                    feedback && /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $1310331c3a58ae9d$export$2e2bcd8739ae039), {
                        type: feedbackType,
                        tooltip: feedbackTooltip,
                        children: feedback
                    })
                ]
            })
        })
    });
});
$b089be3806b32af6$var$FormCheck.displayName = "FormCheck";
var $b089be3806b32af6$export$2e2bcd8739ae039 = Object.assign($b089be3806b32af6$var$FormCheck, {
    Input: (0, $d37bd627871a6ca5$export$2e2bcd8739ae039),
    Label: (0, $84a8dc2b0255ff20$export$2e2bcd8739ae039)
});




var $kdEmn = parcelRequire("kdEmn");
var $062a03728d2c068b$exports = {};
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
 */ var $062a03728d2c068b$var$__DEV__ = false;
var $062a03728d2c068b$var$warning = function() {};
if ($062a03728d2c068b$var$__DEV__) {
    var $062a03728d2c068b$var$printWarning = function printWarning(format, args) {
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
    $062a03728d2c068b$var$warning = function(condition, format, args) {
        var len = arguments.length;
        args = new Array(len > 2 ? len - 2 : 0);
        for(var key = 2; key < len; key++)args[key - 2] = arguments[key];
        if (format === undefined) throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
        if (!condition) $062a03728d2c068b$var$printWarning.apply(null, [
            format
        ].concat(args));
    };
}
$062a03728d2c068b$exports = $062a03728d2c068b$var$warning;






"use client";
const $d2abd9a77a568def$var$FormControl = /*#__PURE__*/ $kdEmn.forwardRef(({ bsPrefix: bsPrefix, type: type, size: size, htmlSize: htmlSize, id: id, className: className, isValid: isValid = false, isInvalid: isInvalid = false, plaintext: plaintext, readOnly: readOnly, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "input", ...props }, ref)=>{
    const { controlId: controlId } = (0, $kdEmn.useContext)((0, $394c175fe8386847$export$2e2bcd8739ae039));
    bsPrefix = (0, $311a902b1b368ad8$export$7f387860ebffb32c)(bsPrefix, "form-control");
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)(Component, {
        ...props,
        type: type,
        size: htmlSize,
        ref: ref,
        readOnly: readOnly,
        id: id || controlId,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($32538ae97b12ecb9$exports)))(className, plaintext ? `${bsPrefix}-plaintext` : bsPrefix, size && `${bsPrefix}-${size}`, type === "color" && `${bsPrefix}-color`, isValid && "is-valid", isInvalid && "is-invalid")
    });
});
$d2abd9a77a568def$var$FormControl.displayName = "FormControl";
var $d2abd9a77a568def$export$2e2bcd8739ae039 = Object.assign($d2abd9a77a568def$var$FormControl, {
    Feedback: $1310331c3a58ae9d$export$2e2bcd8739ae039
});



var $kdEmn = parcelRequire("kdEmn");



"use client";
const $04dcc9e020f87c46$var$FormFloating = /*#__PURE__*/ $kdEmn.forwardRef(({ className: className, bsPrefix: bsPrefix, as: Component = "div", ...props }, ref)=>{
    bsPrefix = (0, $311a902b1b368ad8$export$7f387860ebffb32c)(bsPrefix, "form-floating");
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)(Component, {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($32538ae97b12ecb9$exports)))(className, bsPrefix),
        ...props
    });
});
$04dcc9e020f87c46$var$FormFloating.displayName = "FormFloating";
var $04dcc9e020f87c46$export$2e2bcd8739ae039 = $04dcc9e020f87c46$var$FormFloating;



var $kdEmn = parcelRequire("kdEmn");


const $ddab804d4b9d8fb6$var$FormGroup = /*#__PURE__*/ $kdEmn.forwardRef(({ controlId: controlId, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "div", ...props }, ref)=>{
    const context = (0, $kdEmn.useMemo)(()=>({
            controlId: controlId
        }), [
        controlId
    ]);
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $394c175fe8386847$export$2e2bcd8739ae039).Provider, {
        value: context,
        children: /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)(Component, {
            ...props,
            ref: ref
        })
    });
});
$ddab804d4b9d8fb6$var$FormGroup.displayName = "FormGroup";
var $ddab804d4b9d8fb6$export$2e2bcd8739ae039 = $ddab804d4b9d8fb6$var$FormGroup;




var $kdEmn = parcelRequire("kdEmn");



var $kdEmn = parcelRequire("kdEmn");


"use client";
function $ac8c60cc315fef4d$export$2ed43d61a0a9f5a3({ as: as, bsPrefix: bsPrefix, className: className, ...props }) {
    bsPrefix = (0, $311a902b1b368ad8$export$7f387860ebffb32c)(bsPrefix, "col");
    const breakpoints = (0, $311a902b1b368ad8$export$8970c8db816a5863)();
    const minBreakpoint = (0, $311a902b1b368ad8$export$d926d6ef38f3fd32)();
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
            className: (0, (/*@__PURE__*/$parcel$interopDefault($32538ae97b12ecb9$exports)))(className, ...spans, ...classes)
        },
        {
            as: as,
            bsPrefix: bsPrefix,
            spans: spans
        }
    ];
}
const $ac8c60cc315fef4d$var$Col = /*#__PURE__*/ $kdEmn.forwardRef(// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
(props, ref)=>{
    const [{ className: className, ...colProps }, { as: Component = "div", bsPrefix: bsPrefix, spans: spans }] = $ac8c60cc315fef4d$export$2ed43d61a0a9f5a3(props);
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)(Component, {
        ...colProps,
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($32538ae97b12ecb9$exports)))(className, !spans.length && bsPrefix)
    });
});
$ac8c60cc315fef4d$var$Col.displayName = "Col";
var $ac8c60cc315fef4d$export$2e2bcd8739ae039 = $ac8c60cc315fef4d$var$Col;





"use client";
const $5ab02fd9ef3f5c37$var$FormLabel = /*#__PURE__*/ $kdEmn.forwardRef(({ // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "label", bsPrefix: bsPrefix, column: column = false, visuallyHidden: visuallyHidden = false, className: className, htmlFor: htmlFor, ...props }, ref)=>{
    const { controlId: controlId } = (0, $kdEmn.useContext)((0, $394c175fe8386847$export$2e2bcd8739ae039));
    bsPrefix = (0, $311a902b1b368ad8$export$7f387860ebffb32c)(bsPrefix, "form-label");
    let columnClass = "col-form-label";
    if (typeof column === "string") columnClass = `${columnClass} ${columnClass}-${column}`;
    const classes = (0, (/*@__PURE__*/$parcel$interopDefault($32538ae97b12ecb9$exports)))(className, bsPrefix, visuallyHidden && "visually-hidden", column && columnClass);
    htmlFor = htmlFor || controlId;
    if (column) return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $ac8c60cc315fef4d$export$2e2bcd8739ae039), {
        ref: ref,
        as: "label",
        className: classes,
        htmlFor: htmlFor,
        ...props
    });
    return(/*#__PURE__*/ // eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
    (0, $8a713af880997588$exports.jsx)(Component, {
        ref: ref,
        className: classes,
        htmlFor: htmlFor,
        ...props
    }));
});
$5ab02fd9ef3f5c37$var$FormLabel.displayName = "FormLabel";
var $5ab02fd9ef3f5c37$export$2e2bcd8739ae039 = $5ab02fd9ef3f5c37$var$FormLabel;




var $kdEmn = parcelRequire("kdEmn");



"use client";
const $9535adf94f28199b$var$FormRange = /*#__PURE__*/ $kdEmn.forwardRef(({ bsPrefix: bsPrefix, className: className, id: id, ...props }, ref)=>{
    const { controlId: controlId } = (0, $kdEmn.useContext)((0, $394c175fe8386847$export$2e2bcd8739ae039));
    bsPrefix = (0, $311a902b1b368ad8$export$7f387860ebffb32c)(bsPrefix, "form-range");
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)("input", {
        ...props,
        type: "range",
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($32538ae97b12ecb9$exports)))(className, bsPrefix),
        id: id || controlId
    });
});
$9535adf94f28199b$var$FormRange.displayName = "FormRange";
var $9535adf94f28199b$export$2e2bcd8739ae039 = $9535adf94f28199b$var$FormRange;




var $kdEmn = parcelRequire("kdEmn");



"use client";
const $2dba181708866fe8$var$FormSelect = /*#__PURE__*/ $kdEmn.forwardRef(({ bsPrefix: bsPrefix, size: size, htmlSize: htmlSize, className: className, isValid: isValid = false, isInvalid: isInvalid = false, id: id, ...props }, ref)=>{
    const { controlId: controlId } = (0, $kdEmn.useContext)((0, $394c175fe8386847$export$2e2bcd8739ae039));
    bsPrefix = (0, $311a902b1b368ad8$export$7f387860ebffb32c)(bsPrefix, "form-select");
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)("select", {
        ...props,
        size: htmlSize,
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($32538ae97b12ecb9$exports)))(className, bsPrefix, size && `${bsPrefix}-${size}`, isValid && `is-valid`, isInvalid && `is-invalid`),
        id: id || controlId
    });
});
$2dba181708866fe8$var$FormSelect.displayName = "FormSelect";
var $2dba181708866fe8$export$2e2bcd8739ae039 = $2dba181708866fe8$var$FormSelect;




var $kdEmn = parcelRequire("kdEmn");


"use client";
const $30c24fc5949008ba$var$FormText = /*#__PURE__*/ $kdEmn.forwardRef(// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({ bsPrefix: bsPrefix, className: className, as: Component = "small", muted: muted, ...props }, ref)=>{
    bsPrefix = (0, $311a902b1b368ad8$export$7f387860ebffb32c)(bsPrefix, "form-text");
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)(Component, {
        ...props,
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($32538ae97b12ecb9$exports)))(className, bsPrefix, muted && "text-muted")
    });
});
$30c24fc5949008ba$var$FormText.displayName = "FormText";
var $30c24fc5949008ba$export$2e2bcd8739ae039 = $30c24fc5949008ba$var$FormText;



var $kdEmn = parcelRequire("kdEmn");


const $3ffb80bb0ac507bc$var$Switch = /*#__PURE__*/ $kdEmn.forwardRef((props, ref)=>/*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $b089be3806b32af6$export$2e2bcd8739ae039), {
        ...props,
        ref: ref,
        type: "switch"
    }));
$3ffb80bb0ac507bc$var$Switch.displayName = "Switch";
var $3ffb80bb0ac507bc$export$2e2bcd8739ae039 = Object.assign($3ffb80bb0ac507bc$var$Switch, {
    Input: (0, $b089be3806b32af6$export$2e2bcd8739ae039).Input,
    Label: (0, $b089be3806b32af6$export$2e2bcd8739ae039).Label
});




var $kdEmn = parcelRequire("kdEmn");



"use client";
const $415fca7ee924c741$var$FloatingLabel = /*#__PURE__*/ $kdEmn.forwardRef(({ bsPrefix: bsPrefix, className: className, children: children, controlId: controlId, label: label, ...props }, ref)=>{
    bsPrefix = (0, $311a902b1b368ad8$export$7f387860ebffb32c)(bsPrefix, "form-floating");
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsxs)((0, $ddab804d4b9d8fb6$export$2e2bcd8739ae039), {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($32538ae97b12ecb9$exports)))(className, bsPrefix),
        controlId: controlId,
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)("label", {
                htmlFor: controlId,
                children: label
            })
        ]
    });
});
$415fca7ee924c741$var$FloatingLabel.displayName = "FloatingLabel";
var $415fca7ee924c741$export$2e2bcd8739ae039 = $415fca7ee924c741$var$FloatingLabel;



const $5cb6493146cca168$var$propTypes = {
    /**
   * The Form `ref` will be forwarded to the underlying element,
   * which means, unless it's rendered `as` a composite component,
   * it will be a DOM node, when resolved.
   *
   * @type {ReactRef}
   * @alias ref
   */ _ref: (0, (/*@__PURE__*/$parcel$interopDefault($5cea9eb9ce58b247$exports))).any,
    /**
   * Mark a form as having been validated. Setting it to `true` will
   * toggle any validation styles on the forms elements.
   */ validated: (0, (/*@__PURE__*/$parcel$interopDefault($5cea9eb9ce58b247$exports))).bool,
    as: (0, (/*@__PURE__*/$parcel$interopDefault($5cea9eb9ce58b247$exports))).elementType
};
const $5cb6493146cca168$var$Form = /*#__PURE__*/ $kdEmn.forwardRef(({ className: className, validated: validated, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "form", ...props }, ref)=>/*#__PURE__*/ (0, $8a713af880997588$exports.jsx)(Component, {
        ...props,
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($32538ae97b12ecb9$exports)))(className, validated && "was-validated")
    }));
$5cb6493146cca168$var$Form.displayName = "Form";
$5cb6493146cca168$var$Form.propTypes = $5cb6493146cca168$var$propTypes;
var $5cb6493146cca168$export$2e2bcd8739ae039 = Object.assign($5cb6493146cca168$var$Form, {
    Group: (0, $ddab804d4b9d8fb6$export$2e2bcd8739ae039),
    Control: (0, $d2abd9a77a568def$export$2e2bcd8739ae039),
    Floating: (0, $04dcc9e020f87c46$export$2e2bcd8739ae039),
    Check: (0, $b089be3806b32af6$export$2e2bcd8739ae039),
    Switch: $3ffb80bb0ac507bc$export$2e2bcd8739ae039,
    Label: (0, $5ab02fd9ef3f5c37$export$2e2bcd8739ae039),
    Text: (0, $30c24fc5949008ba$export$2e2bcd8739ae039),
    Range: (0, $9535adf94f28199b$export$2e2bcd8739ae039),
    Select: (0, $2dba181708866fe8$export$2e2bcd8739ae039),
    FloatingLabel: $415fca7ee924c741$export$2e2bcd8739ae039
});



const $38c725eff0fb51d9$export$1582048ca8384970 = ({ onLoggedIn: onLoggedIn })=>{
    const [username, setUsername] = (0, $kdEmn.useState)("");
    const [password, setPassword] = (0, $kdEmn.useState)("");
    const handleSubmit = (event)=>{
        event.preventDefault();
        const data = {
            Username: username,
            Password: password
        };
        fetch("https://my-flix-db-975de3fb6719.herokuapp.com/login?Username=" + username + "&Password=" + password, {
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
            console.error("Login error: ", e.message);
            if (error.response) console.error("Server responded with.", error.response.data);
            alert("Something went wrong " + e.message);
        });
    };
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsxs)((0, $5cb6493146cca168$export$2e2bcd8739ae039), {
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ (0, $8a713af880997588$exports.jsxs)((0, $5cb6493146cca168$export$2e2bcd8739ae039).Group, {
                controlId: "formUsername",
                children: [
                    /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $5cb6493146cca168$export$2e2bcd8739ae039).Label, {
                        children: "Username:"
                    }),
                    /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $5cb6493146cca168$export$2e2bcd8739ae039).Control, {
                        type: "text",
                        value: username,
                        placeholder: "username",
                        onChange: (e)=>setUsername(e.target.value),
                        required: true,
                        minLength: "3",
                        className: "mb-4"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $8a713af880997588$exports.jsxs)((0, $5cb6493146cca168$export$2e2bcd8739ae039).Group, {
                controlId: "formPassword",
                children: [
                    /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $5cb6493146cca168$export$2e2bcd8739ae039).Label, {
                        children: "Password:"
                    }),
                    /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $5cb6493146cca168$export$2e2bcd8739ae039).Control, {
                        type: "password",
                        value: password,
                        placeholder: "password",
                        onChange: (e)=>setPassword(e.target.value),
                        className: "mb-4",
                        required: true
                    })
                ]
            }),
            /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $d6a6e6534be31a95$export$2e2bcd8739ae039), {
                variant: "primary",
                type: "submit",
                children: "Submit"
            })
        ]
    });
};
$38c725eff0fb51d9$export$1582048ca8384970.propTypes = {
    onLoggedIn: (0, (/*@__PURE__*/$parcel$interopDefault($5cea9eb9ce58b247$exports))).func.isRequired
};




var $kdEmn = parcelRequire("kdEmn");

const $50ab2275ea3a897f$export$25f3896ea1e09820 = ()=>{
    const [username, setUsername] = (0, $kdEmn.useState)("");
    const [password, setPassword] = (0, $kdEmn.useState)("");
    const [email, setEmail] = (0, $kdEmn.useState)("");
    const [birthday, setBirthday] = (0, $kdEmn.useState)("");
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
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsxs)((0, $5cb6493146cca168$export$2e2bcd8739ae039), {
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ (0, $8a713af880997588$exports.jsxs)((0, $5cb6493146cca168$export$2e2bcd8739ae039).Group, {
                controlId: "formUsername",
                children: [
                    /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $5cb6493146cca168$export$2e2bcd8739ae039).Label, {
                        children: "Username:"
                    }),
                    /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $5cb6493146cca168$export$2e2bcd8739ae039).Control, {
                        type: "text",
                        value: username,
                        onChange: (e)=>setUsername(e.target.value),
                        minLength: "3",
                        className: "mb-4",
                        required: true
                    })
                ]
            }),
            /*#__PURE__*/ (0, $8a713af880997588$exports.jsxs)((0, $5cb6493146cca168$export$2e2bcd8739ae039).Group, {
                controlId: "formPassword",
                children: [
                    /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $5cb6493146cca168$export$2e2bcd8739ae039).Label, {
                        children: "Password:"
                    }),
                    /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $5cb6493146cca168$export$2e2bcd8739ae039).Control, {
                        type: "password",
                        value: password,
                        onChange: (e)=>setPassword(e.target.value),
                        className: "mb-4",
                        required: true
                    })
                ]
            }),
            /*#__PURE__*/ (0, $8a713af880997588$exports.jsxs)((0, $5cb6493146cca168$export$2e2bcd8739ae039).Group, {
                controlId: "formEmail",
                children: [
                    /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $5cb6493146cca168$export$2e2bcd8739ae039).Label, {
                        children: "Email:"
                    }),
                    /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $5cb6493146cca168$export$2e2bcd8739ae039).Control, {
                        type: "email",
                        value: email,
                        onChange: (e)=>setEmail(e.target.value),
                        className: "mb-4",
                        required: true
                    })
                ]
            }),
            /*#__PURE__*/ (0, $8a713af880997588$exports.jsxs)((0, $5cb6493146cca168$export$2e2bcd8739ae039).Group, {
                controlId: "formBirthday",
                children: [
                    /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $5cb6493146cca168$export$2e2bcd8739ae039).Label, {
                        children: "Birthday:"
                    }),
                    /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $5cb6493146cca168$export$2e2bcd8739ae039).Control, {
                        type: "date",
                        value: birthday,
                        onChange: (e)=>setBirthday(e.target.value),
                        className: "mb-4",
                        required: true
                    })
                ]
            }),
            /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $d6a6e6534be31a95$export$2e2bcd8739ae039), {
                variant: "primary",
                type: "submit",
                children: "Submit"
            })
        ]
    });
};




var $kdEmn = parcelRequire("kdEmn");


"use client";
const $44522508fc1733d1$var$Row = /*#__PURE__*/ $kdEmn.forwardRef(({ bsPrefix: bsPrefix, className: className, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "div", ...props }, ref)=>{
    const decoratedBsPrefix = (0, $311a902b1b368ad8$export$7f387860ebffb32c)(bsPrefix, "row");
    const breakpoints = (0, $311a902b1b368ad8$export$8970c8db816a5863)();
    const minBreakpoint = (0, $311a902b1b368ad8$export$d926d6ef38f3fd32)();
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
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)(Component, {
        ref: ref,
        ...props,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($32538ae97b12ecb9$exports)))(className, decoratedBsPrefix, ...classes)
    });
});
$44522508fc1733d1$var$Row.displayName = "Row";
var $44522508fc1733d1$export$2e2bcd8739ae039 = $44522508fc1733d1$var$Row;






var $kdEmn = parcelRequire("kdEmn");


"use client";
const $fe5feca874a18496$var$Container = /*#__PURE__*/ $kdEmn.forwardRef(({ bsPrefix: bsPrefix, fluid: fluid = false, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "div", className: className, ...props }, ref)=>{
    const prefix = (0, $311a902b1b368ad8$export$7f387860ebffb32c)(bsPrefix, "container");
    const suffix = typeof fluid === "string" ? `-${fluid}` : "-fluid";
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)(Component, {
        ref: ref,
        ...props,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($32538ae97b12ecb9$exports)))(className, fluid ? `${prefix}${suffix}` : prefix)
    });
});
$fe5feca874a18496$var$Container.displayName = "Container";
var $fe5feca874a18496$export$2e2bcd8739ae039 = $fe5feca874a18496$var$Container;


var $056018fe9cc9396b$exports = {};
"use strict";
Object.defineProperty($056018fe9cc9396b$exports, "__esModule", {
    value: true
});
$056018fe9cc9396b$exports.default = $056018fe9cc9396b$var$all;
var $c5b7e1a8a5cee7a0$exports = {};
"use strict";
Object.defineProperty($c5b7e1a8a5cee7a0$exports, "__esModule", {
    value: true
});
$c5b7e1a8a5cee7a0$exports.default = $c5b7e1a8a5cee7a0$var$createChainableTypeChecker;
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */ // Mostly taken from ReactPropTypes.
function $c5b7e1a8a5cee7a0$var$createChainableTypeChecker(validate) {
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
$c5b7e1a8a5cee7a0$exports = $c5b7e1a8a5cee7a0$exports["default"];


var $056018fe9cc9396b$var$_createChainableTypeChecker2 = $056018fe9cc9396b$var$_interopRequireDefault($c5b7e1a8a5cee7a0$exports);
function $056018fe9cc9396b$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $056018fe9cc9396b$var$all() {
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
    return (0, $056018fe9cc9396b$var$_createChainableTypeChecker2.default)(allPropTypes);
}
$056018fe9cc9396b$exports = $056018fe9cc9396b$exports["default"];



var $kdEmn = parcelRequire("kdEmn");
function $0d4c44fa4603f3ef$export$2e2bcd8739ae039() {
    $0d4c44fa4603f3ef$export$2e2bcd8739ae039 = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $0d4c44fa4603f3ef$export$2e2bcd8739ae039.apply(this, arguments);
}


function $c2ca7d8739be7ab5$export$2e2bcd8739ae039(source, excluded) {
    if (source == null) return {};
    var target = {};
    for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) {
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}



var $kdEmn = parcelRequire("kdEmn");
var $ef0706b389ded09e$exports = {};
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
 */ var $ef0706b389ded09e$var$invariant = function(condition, format, a, b, c, d, e, f) {
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
$ef0706b389ded09e$exports = $ef0706b389ded09e$var$invariant;


var $ff0e9555c56633cd$var$noop = function noop() {};
function $ff0e9555c56633cd$var$readOnlyPropType(handler, name) {
    return function(props, propName) {
        if (props[propName] !== undefined) {
            if (!props[handler]) return new Error("You have provided a `" + propName + "` prop to `" + name + "` " + ("without an `" + handler + "` handler prop. This will render a read-only field. ") + ("If the field should be mutable use `" + $ff0e9555c56633cd$export$26cbf8c37e721e67(propName) + "`. ") + ("Otherwise, set `" + handler + "`."));
        }
    };
}
function $ff0e9555c56633cd$export$8abd944bed26e726(controlledValues, displayName) {
    var propTypes = {};
    Object.keys(controlledValues).forEach(function(prop) {
        // add default propTypes for folks that use runtime checks
        propTypes[$ff0e9555c56633cd$export$26cbf8c37e721e67(prop)] = $ff0e9555c56633cd$var$noop;
        var handler;
    });
    return propTypes;
}
function $ff0e9555c56633cd$export$12ae2baa35bd9b8b(props, prop) {
    return props[prop] !== undefined;
}
function $ff0e9555c56633cd$export$26cbf8c37e721e67(key) {
    return "default" + key.charAt(0).toUpperCase() + key.substr(1);
}
function $ff0e9555c56633cd$export$95e5b18573b29087(component) {
    return !!component && (typeof component !== "function" || component.prototype && component.prototype.isReactComponent);
}


function $dcb967d1b34ad4cc$var$_toPropertyKey(arg) {
    var key = $dcb967d1b34ad4cc$var$_toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
}
function $dcb967d1b34ad4cc$var$_toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
function $dcb967d1b34ad4cc$export$2ee51287a16ca325(propValue, defaultValue, handler) {
    var wasPropRef = (0, $kdEmn.useRef)(propValue !== undefined);
    var _useState = (0, $kdEmn.useState)(defaultValue), stateValue = _useState[0], setState = _useState[1];
    var isProp = propValue !== undefined;
    var wasProp = wasPropRef.current;
    wasPropRef.current = isProp;
    /**
   * If a prop switches from controlled to Uncontrolled
   * reset its value to the defaultValue
   */ if (!isProp && wasProp && stateValue !== defaultValue) setState(defaultValue);
    return [
        isProp ? propValue : stateValue,
        (0, $kdEmn.useCallback)(function(value) {
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
function $dcb967d1b34ad4cc$export$2e2bcd8739ae039(props, config) {
    return Object.keys(config).reduce(function(result, fieldName) {
        var _extends2;
        var _ref = result, defaultValue = _ref[$ff0e9555c56633cd$export$26cbf8c37e721e67(fieldName)], propsValue = _ref[fieldName], rest = (0, $c2ca7d8739be7ab5$export$2e2bcd8739ae039)(_ref, [
            $ff0e9555c56633cd$export$26cbf8c37e721e67(fieldName),
            fieldName
        ].map($dcb967d1b34ad4cc$var$_toPropertyKey));
        var handlerName = config[fieldName];
        var _useUncontrolledProp = $dcb967d1b34ad4cc$export$2ee51287a16ca325(propsValue, defaultValue, props[handlerName]), value = _useUncontrolledProp[0], handler = _useUncontrolledProp[1];
        return (0, $0d4c44fa4603f3ef$export$2e2bcd8739ae039)({}, rest, (_extends2 = {}, _extends2[fieldName] = value, _extends2[handlerName] = handler, _extends2));
    }, props);
}




function $f853c2014ab1f020$export$2e2bcd8739ae039(o, p) {
    $f853c2014ab1f020$export$2e2bcd8739ae039 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return $f853c2014ab1f020$export$2e2bcd8739ae039(o, p);
}


function $d484269cb7aee989$export$2e2bcd8739ae039(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    (0, $f853c2014ab1f020$export$2e2bcd8739ae039)(subClass, superClass);
}



var $kdEmn = parcelRequire("kdEmn");
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function $811233013b4a81e4$var$componentWillMount() {
    // Call this.constructor.gDSFP to support sub-classes.
    var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
    if (state !== null && state !== undefined) this.setState(state);
}
function $811233013b4a81e4$var$componentWillReceiveProps(nextProps) {
    // Call this.constructor.gDSFP to support sub-classes.
    // Use the setState() updater to ensure state isn't stale in certain edge cases.
    function updater(prevState) {
        var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
        return state !== null && state !== undefined ? state : null;
    }
    // Binding "this" is important for shallow renderer support.
    this.setState(updater.bind(this));
}
function $811233013b4a81e4$var$componentWillUpdate(nextProps, nextState) {
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
$811233013b4a81e4$var$componentWillMount.__suppressDeprecationWarning = true;
$811233013b4a81e4$var$componentWillReceiveProps.__suppressDeprecationWarning = true;
$811233013b4a81e4$var$componentWillUpdate.__suppressDeprecationWarning = true;
function $811233013b4a81e4$export$cea1c58a6db52bca(Component) {
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
        prototype.componentWillMount = $811233013b4a81e4$var$componentWillMount;
        prototype.componentWillReceiveProps = $811233013b4a81e4$var$componentWillReceiveProps;
    }
    // React <= 16.2 does not support getSnapshotBeforeUpdate.
    // As a workaround, use cWU to invoke the new lifecycle.
    // Newer versions of React will ignore that lifecycle if gSBU exists.
    if (typeof prototype.getSnapshotBeforeUpdate === "function") {
        if (typeof prototype.componentDidUpdate !== "function") throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");
        prototype.componentWillUpdate = $811233013b4a81e4$var$componentWillUpdate;
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




var $2d355cf20b501ad3$var$_jsxFileName = "/Users/jquense/src/uncontrollable/src/uncontrollable.js";
function $2d355cf20b501ad3$export$2e2bcd8739ae039(Component, controlledValues, methods) {
    if (methods === void 0) methods = [];
    var displayName = Component.displayName || Component.name || "Component";
    var canAcceptRef = $ff0e9555c56633cd$export$95e5b18573b29087(Component);
    var controlledProps = Object.keys(controlledValues);
    var PROPS_TO_OMIT = controlledProps.map($ff0e9555c56633cd$export$26cbf8c37e721e67);
    !(canAcceptRef || !methods.length) && (0, (/*@__PURE__*/$parcel$interopDefault($ef0706b389ded09e$exports)))(false);
    var UncontrolledComponent = /*#__PURE__*/ function(_React$Component) {
        (0, $d484269cb7aee989$export$2e2bcd8739ae039)(UncontrolledComponent, _React$Component);
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
                            values: (0, $0d4c44fa4603f3ef$export$2e2bcd8739ae039)(Object.create(null), values, (_extends2 = {}, _extends2[propName] = value, _extends2))
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
                values[key] = _this.props[$ff0e9555c56633cd$export$26cbf8c37e721e67(key)];
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
                values: (0, $0d4c44fa4603f3ef$export$2e2bcd8739ae039)(Object.create(null), values),
                prevProps: {}
            };
            controlledProps.forEach(function(key) {
                /**
         * If a prop switches from controlled to Uncontrolled
         * reset its value to the defaultValue
         */ nextState.prevProps[key] = props[key];
                if (!$ff0e9555c56633cd$export$12ae2baa35bd9b8b(props, key) && $ff0e9555c56633cd$export$12ae2baa35bd9b8b(prevProps, key)) nextState.values[key] = props[$ff0e9555c56633cd$export$26cbf8c37e721e67(key)];
            });
            return nextState;
        };
        _proto.componentWillUnmount = function componentWillUnmount() {
            this.unmounted = true;
        };
        _proto.render = function render() {
            var _this2 = this;
            var _this$props2 = this.props, innerRef = _this$props2.innerRef, props = (0, $c2ca7d8739be7ab5$export$2e2bcd8739ae039)(_this$props2, [
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
            return (0, (/*@__PURE__*/$parcel$interopDefault($kdEmn))).createElement(Component, (0, $0d4c44fa4603f3ef$export$2e2bcd8739ae039)({}, props, newProps, this.handlers, {
                ref: innerRef || this.attachRef
            }));
        };
        return UncontrolledComponent;
    }((0, (/*@__PURE__*/$parcel$interopDefault($kdEmn))).Component);
    (0, $811233013b4a81e4$export$cea1c58a6db52bca)(UncontrolledComponent);
    UncontrolledComponent.displayName = "Uncontrolled(" + displayName + ")";
    UncontrolledComponent.propTypes = (0, $0d4c44fa4603f3ef$export$2e2bcd8739ae039)({
        innerRef: function innerRef() {}
    }, $ff0e9555c56633cd$export$8abd944bed26e726(controlledValues, displayName));
    methods.forEach(function(method) {
        UncontrolledComponent.prototype[method] = function $proxiedMethod() {
            var _this$inner;
            return (_this$inner = this.inner)[method].apply(_this$inner, arguments);
        };
    });
    var WrappedComponent = UncontrolledComponent;
    if ((0, (/*@__PURE__*/$parcel$interopDefault($kdEmn))).forwardRef) {
        WrappedComponent = (0, (/*@__PURE__*/$parcel$interopDefault($kdEmn))).forwardRef(function(props, ref) {
            return (0, (/*@__PURE__*/$parcel$interopDefault($kdEmn))).createElement(UncontrolledComponent, (0, $0d4c44fa4603f3ef$export$2e2bcd8739ae039)({}, props, {
                innerRef: ref,
                __source: {
                    fileName: $2d355cf20b501ad3$var$_jsxFileName,
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
        return $2d355cf20b501ad3$export$2e2bcd8739ae039(newComponent, (0, $0d4c44fa4603f3ef$export$2e2bcd8739ae039)({}, controlledValues, additions), nextMethods);
    };
    return WrappedComponent;
}




var $42f901bd234c64bc$var$toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);
function $42f901bd234c64bc$export$2e2bcd8739ae039(element, selector) {
    return $42f901bd234c64bc$var$toArray(element.querySelectorAll(selector));
}



var $kdEmn = parcelRequire("kdEmn");

var $kdEmn = parcelRequire("kdEmn");
function $baba2a92ee408ad3$export$2e2bcd8739ae039() {
    // The toggling state value is designed to defeat React optimizations for skipping
    // updates when they are strictly equal to the last state value
    const [, dispatch] = (0, $kdEmn.useReducer)((state)=>!state, false);
    return dispatch;
}



var $kdEmn = parcelRequire("kdEmn");
const $73c872cbe8f998dc$var$toFnRef = (ref)=>!ref || typeof ref === "function" ? ref : (value)=>{
        ref.current = value;
    };
function $73c872cbe8f998dc$export$c9058316764c140e(refA, refB) {
    const a = $73c872cbe8f998dc$var$toFnRef(refA);
    const b = $73c872cbe8f998dc$var$toFnRef(refB);
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
 */ function $73c872cbe8f998dc$var$useMergedRefs(refA, refB) {
    return (0, $kdEmn.useMemo)(()=>$73c872cbe8f998dc$export$c9058316764c140e(refA, refB), [
        refA,
        refB
    ]);
}
var $73c872cbe8f998dc$export$2e2bcd8739ae039 = $73c872cbe8f998dc$var$useMergedRefs;



var $kdEmn = parcelRequire("kdEmn");
const $b3221758e1b8718d$var$NavContext = /*#__PURE__*/ $kdEmn.createContext(null);
$b3221758e1b8718d$var$NavContext.displayName = "NavContext";
var $b3221758e1b8718d$export$2e2bcd8739ae039 = $b3221758e1b8718d$var$NavContext;



var $kdEmn = parcelRequire("kdEmn");
const $7247ea30f013e667$var$SelectableContext = /*#__PURE__*/ $kdEmn.createContext(null);
const $7247ea30f013e667$export$eef49b42fde998a3 = (eventKey, href = null)=>{
    if (eventKey != null) return String(eventKey);
    return href || null;
};
var $7247ea30f013e667$export$2e2bcd8739ae039 = $7247ea30f013e667$var$SelectableContext;



var $kdEmn = parcelRequire("kdEmn");
const $ca351db5fb976a40$var$TabContext = /*#__PURE__*/ $kdEmn.createContext(null);
var $ca351db5fb976a40$export$2e2bcd8739ae039 = $ca351db5fb976a40$var$TabContext;


const $69e933716729d92d$export$fd7bcb7e9bef4e8a = `data-rr-ui-`;
const $69e933716729d92d$export$635202801f9383a0 = `rrUi`;
function $69e933716729d92d$export$5cc3b7b83e34ade7(property) {
    return `${$69e933716729d92d$export$fd7bcb7e9bef4e8a}${property}`;
}
function $69e933716729d92d$export$7776c0a7cd2eb3e0(property) {
    return `${$69e933716729d92d$export$635202801f9383a0}${property}`;
}



var $kdEmn = parcelRequire("kdEmn");

var $kdEmn = parcelRequire("kdEmn");

var $kdEmn = parcelRequire("kdEmn");
/**
 * Creates a `Ref` whose value is updated in an effect, ensuring the most recent
 * value is the one rendered with. Generally only required for Concurrent mode usage
 * where previous work in `render()` may be discarded before being used.
 *
 * This is safe to access in an event handler.
 *
 * @param value The `Ref` value
 */ function $ba2b0608d0b60f48$var$useCommittedRef(value) {
    const ref = (0, $kdEmn.useRef)(value);
    (0, $kdEmn.useEffect)(()=>{
        ref.current = value;
    }, [
        value
    ]);
    return ref;
}
var $ba2b0608d0b60f48$export$2e2bcd8739ae039 = $ba2b0608d0b60f48$var$useCommittedRef;


function $7bad07bf1cc449f2$export$2e2bcd8739ae039(fn) {
    const ref = (0, $ba2b0608d0b60f48$export$2e2bcd8739ae039)(fn);
    return (0, $kdEmn.useCallback)(function(...args) {
        return ref.current && ref.current(...args);
    }, [
        ref
    ]);
}








const $ce8ae29aaae8c811$var$_excluded = [
    "as",
    "active",
    "eventKey"
];
function $ce8ae29aaae8c811$var$_objectWithoutPropertiesLoose(source, excluded) {
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
function $ce8ae29aaae8c811$export$d7a68693710982a({ key: key, onClick: onClick, active: active, id: id, role: role, disabled: disabled }) {
    const parentOnSelect = (0, $kdEmn.useContext)((0, $7247ea30f013e667$export$2e2bcd8739ae039));
    const navContext = (0, $kdEmn.useContext)((0, $b3221758e1b8718d$export$2e2bcd8739ae039));
    const tabContext = (0, $kdEmn.useContext)((0, $ca351db5fb976a40$export$2e2bcd8739ae039));
    let isActive = active;
    const props = {
        role: role
    };
    if (navContext) {
        if (!role && navContext.role === "tablist") props.role = "tab";
        const contextControllerId = navContext.getControllerId(key != null ? key : null);
        const contextControlledId = navContext.getControlledId(key != null ? key : null);
        // @ts-ignore
        props[(0, $69e933716729d92d$export$5cc3b7b83e34ade7)("event-key")] = key;
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
    props.onClick = (0, $7bad07bf1cc449f2$export$2e2bcd8739ae039)((e)=>{
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
const $ce8ae29aaae8c811$var$NavItem = /*#__PURE__*/ $kdEmn.forwardRef((_ref, ref)=>{
    let { as: Component = (0, $5b42dafad8984615$export$2e2bcd8739ae039), active: active, eventKey: eventKey } = _ref, options = $ce8ae29aaae8c811$var$_objectWithoutPropertiesLoose(_ref, $ce8ae29aaae8c811$var$_excluded);
    const [props, meta] = $ce8ae29aaae8c811$export$d7a68693710982a(Object.assign({
        key: (0, $7247ea30f013e667$export$eef49b42fde998a3)(eventKey, options.href),
        active: active
    }, options));
    // @ts-ignore
    props[(0, $69e933716729d92d$export$5cc3b7b83e34ade7)("active")] = meta.isActive;
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)(Component, Object.assign({}, options, props, {
        ref: ref
    }));
});
$ce8ae29aaae8c811$var$NavItem.displayName = "NavItem";
var $ce8ae29aaae8c811$export$2e2bcd8739ae039 = $ce8ae29aaae8c811$var$NavItem;



const $978326319af03200$var$_excluded = [
    "as",
    "onSelect",
    "activeKey",
    "role",
    "onKeyDown"
];
function $978326319af03200$var$_objectWithoutPropertiesLoose(source, excluded) {
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
const $978326319af03200$var$noop = ()=>{};
const $978326319af03200$var$EVENT_KEY_ATTR = (0, $69e933716729d92d$export$5cc3b7b83e34ade7)("event-key");
const $978326319af03200$var$Nav = /*#__PURE__*/ $kdEmn.forwardRef((_ref, ref)=>{
    let { // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = "div", onSelect: onSelect, activeKey: activeKey, role: role, onKeyDown: onKeyDown } = _ref, props = $978326319af03200$var$_objectWithoutPropertiesLoose(_ref, $978326319af03200$var$_excluded);
    // A ref and forceUpdate for refocus, b/c we only want to trigger when needed
    // and don't want to reset the set in the effect
    const forceUpdate = (0, $baba2a92ee408ad3$export$2e2bcd8739ae039)();
    const needsRefocusRef = (0, $kdEmn.useRef)(false);
    const parentOnSelect = (0, $kdEmn.useContext)((0, $7247ea30f013e667$export$2e2bcd8739ae039));
    const tabContext = (0, $kdEmn.useContext)((0, $ca351db5fb976a40$export$2e2bcd8739ae039));
    let getControlledId, getControllerId;
    if (tabContext) {
        role = role || "tablist";
        activeKey = tabContext.activeKey;
        // TODO: do we need to duplicate these?
        getControlledId = tabContext.getControlledId;
        getControllerId = tabContext.getControllerId;
    }
    const listNode = (0, $kdEmn.useRef)(null);
    const getNextActiveTab = (offset)=>{
        const currentListNode = listNode.current;
        if (!currentListNode) return null;
        const items = (0, $42f901bd234c64bc$export$2e2bcd8739ae039)(currentListNode, `[${$978326319af03200$var$EVENT_KEY_ATTR}]:not([aria-disabled=true])`);
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
        handleSelect(nextActiveChild.dataset[(0, $69e933716729d92d$export$7776c0a7cd2eb3e0)("EventKey")] || null, event);
        needsRefocusRef.current = true;
        forceUpdate();
    };
    (0, $kdEmn.useEffect)(()=>{
        if (listNode.current && needsRefocusRef.current) {
            const activeChild = listNode.current.querySelector(`[${$978326319af03200$var$EVENT_KEY_ATTR}][aria-selected=true]`);
            activeChild == null || activeChild.focus();
        }
        needsRefocusRef.current = false;
    });
    const mergedRef = (0, $73c872cbe8f998dc$export$2e2bcd8739ae039)(ref, listNode);
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $7247ea30f013e667$export$2e2bcd8739ae039).Provider, {
        value: handleSelect,
        children: /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $b3221758e1b8718d$export$2e2bcd8739ae039).Provider, {
            value: {
                role: role,
                // used by NavLink to determine it's role
                activeKey: (0, $7247ea30f013e667$export$eef49b42fde998a3)(activeKey),
                getControlledId: getControlledId || $978326319af03200$var$noop,
                getControllerId: getControllerId || $978326319af03200$var$noop
            },
            children: /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)(Component, Object.assign({}, props, {
                onKeyDown: handleKeyDown,
                ref: mergedRef,
                role: role
            }))
        })
    });
});
$978326319af03200$var$Nav.displayName = "Nav";
var $978326319af03200$export$2e2bcd8739ae039 = Object.assign($978326319af03200$var$Nav, {
    Item: (0, $ce8ae29aaae8c811$export$2e2bcd8739ae039)
});




var $kdEmn = parcelRequire("kdEmn");
"use client";
// TODO: check
const $fb1eb812d045ce4f$var$context = /*#__PURE__*/ $kdEmn.createContext(null);
$fb1eb812d045ce4f$var$context.displayName = "NavbarContext";
var $fb1eb812d045ce4f$export$2e2bcd8739ae039 = $fb1eb812d045ce4f$var$context;




var $kdEmn = parcelRequire("kdEmn");



"use client";
const $aff05d29fd44f979$var$NavItem = /*#__PURE__*/ $kdEmn.forwardRef(({ className: className, bsPrefix: bsPrefix, as: Component = "div", ...props }, ref)=>{
    bsPrefix = (0, $311a902b1b368ad8$export$7f387860ebffb32c)(bsPrefix, "nav-item");
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)(Component, {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($32538ae97b12ecb9$exports)))(className, bsPrefix),
        ...props
    });
});
$aff05d29fd44f979$var$NavItem.displayName = "NavItem";
var $aff05d29fd44f979$export$2e2bcd8739ae039 = $aff05d29fd44f979$var$NavItem;




var $kdEmn = parcelRequire("kdEmn");

var $kdEmn = parcelRequire("kdEmn");

var $kdEmn = parcelRequire("kdEmn");
function $4152db52d7a9c17a$export$2e2bcd8739ae039() {
    return (0, $kdEmn.useState)(null);
}





var $kdEmn = parcelRequire("kdEmn");

function $3f093c969a17e872$export$2e2bcd8739ae039(eventTarget, event, listener, capture = false) {
    const handler = (0, $7bad07bf1cc449f2$export$2e2bcd8739ae039)(listener);
    (0, $kdEmn.useEffect)(()=>{
        const target = typeof eventTarget === "function" ? eventTarget() : eventTarget;
        target.addEventListener(event, handler, capture);
        return ()=>target.removeEventListener(event, handler, capture);
    }, [
        eventTarget
    ]);
}




var $kdEmn = parcelRequire("kdEmn");
function $93e2f7a3ef73d3a1$export$2e2bcd8739ae039(event, handler, capture = false) {
    const documentTarget = (0, $kdEmn.useCallback)(()=>document, []);
    return (0, $3f093c969a17e872$export$2e2bcd8739ae039)(documentTarget, event, handler, capture);
}



var $kdEmn = parcelRequire("kdEmn");

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

 */ function $510fb03bd0384fea$var$useInterval(fn, ms, paused = false, runImmediately = false) {
    let handle;
    const fnRef = (0, $ba2b0608d0b60f48$export$2e2bcd8739ae039)(fn);
    // this ref is necessary b/c useEffect will sometimes miss a paused toggle
    // orphaning a setTimeout chain in the aether, so relying on it's refresh logic is not reliable.
    const pausedRef = (0, $ba2b0608d0b60f48$export$2e2bcd8739ae039)(paused);
    const tick = ()=>{
        if (pausedRef.current) return;
        fnRef.current();
        schedule(); // eslint-disable-line no-use-before-define
    };
    const schedule = ()=>{
        clearTimeout(handle);
        handle = setTimeout(tick, ms);
    };
    (0, $kdEmn.useEffect)(()=>{
        if (runImmediately) tick();
        else schedule();
        return ()=>clearTimeout(handle);
    }, [
        paused,
        runImmediately
    ]);
}
var $510fb03bd0384fea$export$2e2bcd8739ae039 = $510fb03bd0384fea$var$useInterval;



var $kdEmn = parcelRequire("kdEmn");

function $693673a06b6fe45d$var$useRafInterval(fn, ms, paused = false) {
    let handle;
    let start = new Date().getTime();
    const fnRef = (0, $ba2b0608d0b60f48$export$2e2bcd8739ae039)(fn);
    // this ref is necessary b/c useEffect will sometimes miss a paused toggle
    // orphaning a setTimeout chain in the aether, so relying on it's refresh logic is not reliable.
    const pausedRef = (0, $ba2b0608d0b60f48$export$2e2bcd8739ae039)(paused);
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
    (0, $kdEmn.useEffect)(()=>{
        handle = requestAnimationFrame(loop);
        return ()=>cancelAnimationFrame(handle);
    }, []);
}
var $693673a06b6fe45d$export$2e2bcd8739ae039 = $693673a06b6fe45d$var$useRafInterval;



var $kdEmn = parcelRequire("kdEmn");
function $b26947939238d056$export$2e2bcd8739ae039(initialState) {
    const [state, setState] = (0, $kdEmn.useState)(initialState);
    const updater = (0, $kdEmn.useCallback)((update)=>{
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



function $88bb747c06e934a3$export$2e2bcd8739ae039(props, gDSFP, initialState) {
    const [state, setState] = (0, $b26947939238d056$export$2e2bcd8739ae039)(initialState);
    const nextState = gDSFP(props, state);
    if (nextState !== null) setState(nextState);
    return [
        state,
        setState
    ];
}



var $kdEmn = parcelRequire("kdEmn");
function $4a7469eca62a29a3$export$2e2bcd8739ae039() {
    const mounted = (0, $kdEmn.useRef)(true);
    const isMounted = (0, $kdEmn.useRef)(()=>mounted.current);
    (0, $kdEmn.useEffect)(()=>{
        mounted.current = true;
        return ()=>{
            mounted.current = false;
        };
    }, []);
    return isMounted.current;
}



var $kdEmn = parcelRequire("kdEmn");
function $ff611287be970b78$export$2e2bcd8739ae039(value) {
    const ref = (0, $kdEmn.useRef)(null);
    (0, $kdEmn.useEffect)(()=>{
        ref.current = value;
    });
    return ref.current;
}



var $kdEmn = parcelRequire("kdEmn");
function $4639282208d83d70$export$2e2bcd8739ae039(imageOrUrl, crossOrigin) {
    const [state, setState] = (0, $kdEmn.useState)({
        image: null,
        error: null
    });
    (0, $kdEmn.useEffect)(()=>{
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



var $kdEmn = parcelRequire("kdEmn");

var $kdEmn = parcelRequire("kdEmn");
const $272a57b918d66ac9$var$isReactNative = typeof $parcel$global !== "undefined" && // @ts-ignore
$parcel$global.navigator && // @ts-ignore
$parcel$global.navigator.product === "ReactNative";
const $272a57b918d66ac9$var$isDOM = typeof document !== "undefined";
var /**
 * Is `useLayoutEffect` in a DOM or React Native environment, otherwise resolves to useEffect
 * Only useful to avoid the console warning.
 *
 * PREFER `useEffect` UNLESS YOU KNOW WHAT YOU ARE DOING.
 *
 * @category effects
 */ $272a57b918d66ac9$export$2e2bcd8739ae039 = $272a57b918d66ac9$var$isDOM || $272a57b918d66ac9$var$isReactNative ? (0, $kdEmn.useLayoutEffect) : (0, $kdEmn.useEffect);


const $4cfe0bad23d81d75$var$targetMap = new WeakMap();
let $4cfe0bad23d81d75$var$resizeObserver;
function $4cfe0bad23d81d75$var$getResizeObserver() {
    // eslint-disable-next-line no-return-assign
    return $4cfe0bad23d81d75$var$resizeObserver = $4cfe0bad23d81d75$var$resizeObserver || new window.ResizeObserver((entries)=>{
        entries.forEach((entry)=>{
            const handler = $4cfe0bad23d81d75$var$targetMap.get(entry.target);
            if (handler) handler(entry.contentRect);
        });
    });
}
function $4cfe0bad23d81d75$export$2e2bcd8739ae039(element) {
    const [rect, setRect] = (0, $kdEmn.useState)(null);
    (0, $272a57b918d66ac9$export$2e2bcd8739ae039)(()=>{
        if (!element) return;
        $4cfe0bad23d81d75$var$getResizeObserver().observe(element);
        setRect(element.getBoundingClientRect());
        $4cfe0bad23d81d75$var$targetMap.set(element, (rect)=>{
            setRect(rect);
        });
        return ()=>{
            $4cfe0bad23d81d75$var$targetMap.delete(element);
        };
    }, [
        element
    ]);
    return rect;
}






const $8298f0cd7d159517$var$_excluded = [
    "onKeyDown"
];
function $8298f0cd7d159517$var$_objectWithoutPropertiesLoose(source, excluded) {
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
function $8298f0cd7d159517$export$72369ab2cc99204b(href) {
    return !href || href.trim() === "#";
}
/**
 * An generic `<a>` component that covers a few A11y cases, ensuring that
 * cases where the `href` is missing or trivial like "#" are treated like buttons.
 */ const $8298f0cd7d159517$var$Anchor = /*#__PURE__*/ $kdEmn.forwardRef((_ref, ref)=>{
    let { onKeyDown: onKeyDown } = _ref, props = $8298f0cd7d159517$var$_objectWithoutPropertiesLoose(_ref, $8298f0cd7d159517$var$_excluded);
    const [buttonProps] = (0, $5b42dafad8984615$export$a0ee72f2c720a5c3)(Object.assign({
        tagName: "a"
    }, props));
    const handleKeyDown = (0, $7bad07bf1cc449f2$export$2e2bcd8739ae039)((e)=>{
        buttonProps.onKeyDown(e);
        onKeyDown == null || onKeyDown(e);
    });
    if ($8298f0cd7d159517$export$72369ab2cc99204b(props.href) || props.role === "button") return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)("a", Object.assign({
        ref: ref
    }, props, buttonProps, {
        onKeyDown: handleKeyDown
    }));
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)("a", Object.assign({
        ref: ref
    }, props, {
        onKeyDown: onKeyDown
    }));
});
$8298f0cd7d159517$var$Anchor.displayName = "Anchor";
var $8298f0cd7d159517$export$2e2bcd8739ae039 = $8298f0cd7d159517$var$Anchor;






"use client";
const $91cdae8ccd8f3d0a$var$NavLink = /*#__PURE__*/ $kdEmn.forwardRef(({ bsPrefix: bsPrefix, className: className, as: Component = (0, $8298f0cd7d159517$export$2e2bcd8739ae039), active: active, eventKey: eventKey, disabled: disabled = false, ...props }, ref)=>{
    bsPrefix = (0, $311a902b1b368ad8$export$7f387860ebffb32c)(bsPrefix, "nav-link");
    const [navItemProps, meta] = (0, $ce8ae29aaae8c811$export$d7a68693710982a)({
        key: (0, $7247ea30f013e667$export$eef49b42fde998a3)(eventKey, props.href),
        active: active,
        disabled: disabled,
        ...props
    });
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)(Component, {
        ...props,
        ...navItemProps,
        ref: ref,
        disabled: disabled,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($32538ae97b12ecb9$exports)))(className, bsPrefix, disabled && "disabled", meta.isActive && "active")
    });
});
$91cdae8ccd8f3d0a$var$NavLink.displayName = "NavLink";
var $91cdae8ccd8f3d0a$export$2e2bcd8739ae039 = $91cdae8ccd8f3d0a$var$NavLink;



"use client";
const $64d4dcc57c24a483$var$Nav = /*#__PURE__*/ $kdEmn.forwardRef((uncontrolledProps, ref)=>{
    const { as: as = "div", bsPrefix: initialBsPrefix, variant: variant, fill: fill = false, justify: justify = false, navbar: navbar, navbarScroll: navbarScroll, className: className, activeKey: activeKey, ...props } = (0, $dcb967d1b34ad4cc$export$2e2bcd8739ae039)(uncontrolledProps, {
        activeKey: "onSelect"
    });
    const bsPrefix = (0, $311a902b1b368ad8$export$7f387860ebffb32c)(initialBsPrefix, "nav");
    let navbarBsPrefix;
    let cardHeaderBsPrefix;
    let isNavbar = false;
    const navbarContext = (0, $kdEmn.useContext)((0, $fb1eb812d045ce4f$export$2e2bcd8739ae039));
    const cardHeaderContext = (0, $kdEmn.useContext)((0, $1b024f4184f68491$export$2e2bcd8739ae039));
    if (navbarContext) {
        navbarBsPrefix = navbarContext.bsPrefix;
        isNavbar = navbar == null ? true : navbar;
    } else if (cardHeaderContext) ({ cardHeaderBsPrefix: cardHeaderBsPrefix } = cardHeaderContext);
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $978326319af03200$export$2e2bcd8739ae039), {
        as: as,
        ref: ref,
        activeKey: activeKey,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($32538ae97b12ecb9$exports)))(className, {
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
$64d4dcc57c24a483$var$Nav.displayName = "Nav";
var $64d4dcc57c24a483$export$2e2bcd8739ae039 = Object.assign($64d4dcc57c24a483$var$Nav, {
    Item: (0, $aff05d29fd44f979$export$2e2bcd8739ae039),
    Link: (0, $91cdae8ccd8f3d0a$export$2e2bcd8739ae039)
});



var $kdEmn = parcelRequire("kdEmn");




var $kdEmn = parcelRequire("kdEmn");


"use client";
const $9149afc1df68fcb2$var$NavbarBrand = /*#__PURE__*/ $kdEmn.forwardRef(({ bsPrefix: bsPrefix, className: className, as: as, ...props }, ref)=>{
    bsPrefix = (0, $311a902b1b368ad8$export$7f387860ebffb32c)(bsPrefix, "navbar-brand");
    const Component = as || (props.href ? "a" : "span");
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)(Component, {
        ...props,
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($32538ae97b12ecb9$exports)))(className, bsPrefix)
    });
});
$9149afc1df68fcb2$var$NavbarBrand.displayName = "NavbarBrand";
var $9149afc1df68fcb2$export$2e2bcd8739ae039 = $9149afc1df68fcb2$var$NavbarBrand;



var $kdEmn = parcelRequire("kdEmn");

/**
 * Returns the owner document of a given element.
 * 
 * @param node the element
 */ function $0ad049bac04a5782$export$2e2bcd8739ae039(node) {
    return node && node.ownerDocument || document;
}


function $48bccf0e28ffb2d7$export$2e2bcd8739ae039(node) {
    var doc = (0, $0ad049bac04a5782$export$2e2bcd8739ae039)(node);
    return doc && doc.defaultView || window;
}


function $e1f30cfd30127d81$export$2e2bcd8739ae039(node, psuedoElement) {
    return (0, $48bccf0e28ffb2d7$export$2e2bcd8739ae039)(node).getComputedStyle(node, psuedoElement);
}


/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
 */ var $35469444ef78335d$var$rUpper = /([A-Z])/g;
function $35469444ef78335d$export$2e2bcd8739ae039(string) {
    return string.replace($35469444ef78335d$var$rUpper, "-$1").toLowerCase();
}


var $002df31a91166c19$var$msPattern = /^ms-/;
function $002df31a91166c19$export$2e2bcd8739ae039(string) {
    return (0, $35469444ef78335d$export$2e2bcd8739ae039)(string).replace($002df31a91166c19$var$msPattern, "-ms-");
}


var $c79e4862a0527753$var$supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function $c79e4862a0527753$export$2e2bcd8739ae039(value) {
    return !!(value && $c79e4862a0527753$var$supportedTransforms.test(value));
}


function $ae8cbf1927a999ff$var$style(node, property) {
    var css = "";
    var transforms = "";
    if (typeof property === "string") return node.style.getPropertyValue((0, $002df31a91166c19$export$2e2bcd8739ae039)(property)) || (0, $e1f30cfd30127d81$export$2e2bcd8739ae039)(node).getPropertyValue((0, $002df31a91166c19$export$2e2bcd8739ae039)(property));
    Object.keys(property).forEach(function(key) {
        var value = property[key];
        if (!value && value !== 0) node.style.removeProperty((0, $002df31a91166c19$export$2e2bcd8739ae039)(key));
        else if ((0, $c79e4862a0527753$export$2e2bcd8739ae039)(key)) transforms += key + "(" + value + ") ";
        else css += (0, $002df31a91166c19$export$2e2bcd8739ae039)(key) + ": " + value + ";";
    });
    if (transforms) css += "transform: " + transforms + ";";
    node.style.cssText += ";" + css;
}
var $ae8cbf1927a999ff$export$2e2bcd8739ae039 = $ae8cbf1927a999ff$var$style;



var $kdEmn = parcelRequire("kdEmn");




var $kdEmn = parcelRequire("kdEmn");

var $bff4073abb0ad920$export$2e2bcd8739ae039 = {
    disabled: false
};




var $kdEmn = parcelRequire("kdEmn");
var $380f72877d36a86f$export$2e2bcd8739ae039 = (0, (/*@__PURE__*/$parcel$interopDefault($kdEmn))).createContext(null);


var $0dac7912cc9726e2$export$7d26bbb1236dafd6 = function forceReflow(node) {
    return node.scrollTop;
};


var $aaba28a38ce49783$export$bb38bb9a1161268 = "unmounted";
var $aaba28a38ce49783$export$84cbff306f539230 = "exited";
var $aaba28a38ce49783$export$df38205c966be359 = "entering";
var $aaba28a38ce49783$export$78e9e6e3e014d60a = "entered";
var $aaba28a38ce49783$export$4aacc83d4d59139f = "exiting";
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
 */ var $aaba28a38ce49783$var$Transition = /*#__PURE__*/ function(_React$Component) {
    (0, $d484269cb7aee989$export$2e2bcd8739ae039)(Transition, _React$Component);
    function Transition(props, context) {
        var _this;
        _this = _React$Component.call(this, props, context) || this;
        var parentGroup = context; // In the context of a TransitionGroup all enters are really appears
        var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
        var initialStatus;
        _this.appearStatus = null;
        if (props.in) {
            if (appear) {
                initialStatus = $aaba28a38ce49783$export$84cbff306f539230;
                _this.appearStatus = $aaba28a38ce49783$export$df38205c966be359;
            } else initialStatus = $aaba28a38ce49783$export$78e9e6e3e014d60a;
        } else if (props.unmountOnExit || props.mountOnEnter) initialStatus = $aaba28a38ce49783$export$bb38bb9a1161268;
        else initialStatus = $aaba28a38ce49783$export$84cbff306f539230;
        _this.state = {
            status: initialStatus
        };
        _this.nextCallback = null;
        return _this;
    }
    Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
        var nextIn = _ref.in;
        if (nextIn && prevState.status === $aaba28a38ce49783$export$bb38bb9a1161268) return {
            status: $aaba28a38ce49783$export$84cbff306f539230
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
                if (status !== $aaba28a38ce49783$export$df38205c966be359 && status !== $aaba28a38ce49783$export$78e9e6e3e014d60a) nextStatus = $aaba28a38ce49783$export$df38205c966be359;
            } else if (status === $aaba28a38ce49783$export$df38205c966be359 || status === $aaba28a38ce49783$export$78e9e6e3e014d60a) nextStatus = $aaba28a38ce49783$export$4aacc83d4d59139f;
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
            if (nextStatus === $aaba28a38ce49783$export$df38205c966be359) {
                if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var node = this.props.nodeRef ? this.props.nodeRef.current : (0, (/*@__PURE__*/$parcel$interopDefault($8694693cb6719903$exports))).findDOMNode(this); // https://github.com/reactjs/react-transition-group/pull/749
                    // With unmountOnExit or mountOnEnter, the enter animation should happen at the transition between `exited` and `entering`.
                    // To make the animation happen,  we have to separate each rendering and avoid being processed as batched.
                    if (node) (0, $0dac7912cc9726e2$export$7d26bbb1236dafd6)(node);
                }
                this.performEnter(mounting);
            } else this.performExit();
        } else if (this.props.unmountOnExit && this.state.status === $aaba28a38ce49783$export$84cbff306f539230) this.setState({
            status: $aaba28a38ce49783$export$bb38bb9a1161268
        });
    };
    _proto.performEnter = function performEnter(mounting) {
        var _this2 = this;
        var enter = this.props.enter;
        var appearing = this.context ? this.context.isMounting : mounting;
        var _ref2 = this.props.nodeRef ? [
            appearing
        ] : [
            (0, (/*@__PURE__*/$parcel$interopDefault($8694693cb6719903$exports))).findDOMNode(this),
            appearing
        ], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
        var timeouts = this.getTimeouts();
        var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
        // if we are mounting and running this it means appear _must_ be set
        if (!mounting && !enter || (0, $bff4073abb0ad920$export$2e2bcd8739ae039).disabled) {
            this.safeSetState({
                status: $aaba28a38ce49783$export$78e9e6e3e014d60a
            }, function() {
                _this2.props.onEntered(maybeNode);
            });
            return;
        }
        this.props.onEnter(maybeNode, maybeAppearing);
        this.safeSetState({
            status: $aaba28a38ce49783$export$df38205c966be359
        }, function() {
            _this2.props.onEntering(maybeNode, maybeAppearing);
            _this2.onTransitionEnd(enterTimeout, function() {
                _this2.safeSetState({
                    status: $aaba28a38ce49783$export$78e9e6e3e014d60a
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
        var maybeNode = this.props.nodeRef ? undefined : (0, (/*@__PURE__*/$parcel$interopDefault($8694693cb6719903$exports))).findDOMNode(this); // no exit animation skip right to EXITED
        if (!exit || (0, $bff4073abb0ad920$export$2e2bcd8739ae039).disabled) {
            this.safeSetState({
                status: $aaba28a38ce49783$export$84cbff306f539230
            }, function() {
                _this3.props.onExited(maybeNode);
            });
            return;
        }
        this.props.onExit(maybeNode);
        this.safeSetState({
            status: $aaba28a38ce49783$export$4aacc83d4d59139f
        }, function() {
            _this3.props.onExiting(maybeNode);
            _this3.onTransitionEnd(timeouts.exit, function() {
                _this3.safeSetState({
                    status: $aaba28a38ce49783$export$84cbff306f539230
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
        var node = this.props.nodeRef ? this.props.nodeRef.current : (0, (/*@__PURE__*/$parcel$interopDefault($8694693cb6719903$exports))).findDOMNode(this);
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
        if (status === $aaba28a38ce49783$export$bb38bb9a1161268) return null;
        var _this$props = this.props, children = _this$props.children, _in = _this$props.in, _mountOnEnter = _this$props.mountOnEnter, _unmountOnExit = _this$props.unmountOnExit, _appear = _this$props.appear, _enter = _this$props.enter, _exit = _this$props.exit, _timeout = _this$props.timeout, _addEndListener = _this$props.addEndListener, _onEnter = _this$props.onEnter, _onEntering = _this$props.onEntering, _onEntered = _this$props.onEntered, _onExit = _this$props.onExit, _onExiting = _this$props.onExiting, _onExited = _this$props.onExited, _nodeRef = _this$props.nodeRef, childProps = (0, $c2ca7d8739be7ab5$export$2e2bcd8739ae039)(_this$props, [
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
        (0, (/*@__PURE__*/$parcel$interopDefault($kdEmn))).createElement((0, $380f72877d36a86f$export$2e2bcd8739ae039).Provider, {
            value: null
        }, typeof children === "function" ? children(status, childProps) : (0, (/*@__PURE__*/$parcel$interopDefault($kdEmn))).cloneElement((0, (/*@__PURE__*/$parcel$interopDefault($kdEmn))).Children.only(children), childProps)));
    };
    return Transition;
}((0, (/*@__PURE__*/$parcel$interopDefault($kdEmn))).Component);
$aaba28a38ce49783$var$Transition.contextType = (0, $380f72877d36a86f$export$2e2bcd8739ae039);
$aaba28a38ce49783$var$Transition.propTypes = {}; // Name the function so it is clearer in the documentation
function $aaba28a38ce49783$var$noop() {}
$aaba28a38ce49783$var$Transition.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,
    onEnter: $aaba28a38ce49783$var$noop,
    onEntering: $aaba28a38ce49783$var$noop,
    onEntered: $aaba28a38ce49783$var$noop,
    onExit: $aaba28a38ce49783$var$noop,
    onExiting: $aaba28a38ce49783$var$noop,
    onExited: $aaba28a38ce49783$var$noop
};
$aaba28a38ce49783$var$Transition.UNMOUNTED = $aaba28a38ce49783$export$bb38bb9a1161268;
$aaba28a38ce49783$var$Transition.EXITED = $aaba28a38ce49783$export$84cbff306f539230;
$aaba28a38ce49783$var$Transition.ENTERING = $aaba28a38ce49783$export$df38205c966be359;
$aaba28a38ce49783$var$Transition.ENTERED = $aaba28a38ce49783$export$78e9e6e3e014d60a;
$aaba28a38ce49783$var$Transition.EXITING = $aaba28a38ce49783$export$4aacc83d4d59139f;
var $aaba28a38ce49783$export$2e2bcd8739ae039 = $aaba28a38ce49783$var$Transition;




/* eslint-disable no-return-assign */ var $a058f95910353514$export$2e2bcd8739ae039 = !!(typeof window !== "undefined" && window.document && window.document.createElement);


var $68e22b80fba0d84b$export$63fefd044b2bc624 = false;
var $68e22b80fba0d84b$export$a614c6b395900f69 = false;
try {
    var $68e22b80fba0d84b$var$options = {
        get passive () {
            return $68e22b80fba0d84b$export$63fefd044b2bc624 = true;
        },
        get once () {
            // eslint-disable-next-line no-multi-assign
            return $68e22b80fba0d84b$export$a614c6b395900f69 = $68e22b80fba0d84b$export$63fefd044b2bc624 = true;
        }
    };
    if (0, $a058f95910353514$export$2e2bcd8739ae039) {
        window.addEventListener("test", $68e22b80fba0d84b$var$options, $68e22b80fba0d84b$var$options);
        window.removeEventListener("test", $68e22b80fba0d84b$var$options, true);
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
 */ function $68e22b80fba0d84b$var$addEventListener(node, eventName, handler, options) {
    if (options && typeof options !== "boolean" && !$68e22b80fba0d84b$export$a614c6b395900f69) {
        var once = options.once, capture = options.capture;
        var wrappedHandler = handler;
        if (!$68e22b80fba0d84b$export$a614c6b395900f69 && once) {
            wrappedHandler = handler.__once || function onceHandler(event) {
                this.removeEventListener(eventName, onceHandler, capture);
                handler.call(this, event);
            };
            handler.__once = wrappedHandler;
        }
        node.addEventListener(eventName, wrappedHandler, $68e22b80fba0d84b$export$63fefd044b2bc624 ? options : capture);
    }
    node.addEventListener(eventName, handler, options);
}
var $68e22b80fba0d84b$export$2e2bcd8739ae039 = $68e22b80fba0d84b$var$addEventListener;


/**
 * A `removeEventListener` ponyfill
 * 
 * @param node the element
 * @param eventName the event name
 * @param handle the handler
 * @param options event options
 */ function $ddf88d1dac8f30d0$var$removeEventListener(node, eventName, handler, options) {
    var capture = options && typeof options !== "boolean" ? options.capture : options;
    node.removeEventListener(eventName, handler, capture);
    if (handler.__once) node.removeEventListener(eventName, handler.__once, capture);
}
var $ddf88d1dac8f30d0$export$2e2bcd8739ae039 = $ddf88d1dac8f30d0$var$removeEventListener;


function $012e2038676b30e8$var$listen(node, eventName, handler, options) {
    (0, $68e22b80fba0d84b$export$2e2bcd8739ae039)(node, eventName, handler, options);
    return function() {
        (0, $ddf88d1dac8f30d0$export$2e2bcd8739ae039)(node, eventName, handler, options);
    };
}
var $012e2038676b30e8$export$2e2bcd8739ae039 = $012e2038676b30e8$var$listen;


/**
 * Triggers an event on a given element.
 * 
 * @param node the element
 * @param eventName the event name to trigger
 * @param bubbles whether the event should bubble up
 * @param cancelable whether the event should be cancelable
 */ function $f38e612505a62338$export$2e2bcd8739ae039(node, eventName, bubbles, cancelable) {
    if (bubbles === void 0) bubbles = false;
    if (cancelable === void 0) cancelable = true;
    if (node) {
        var event = document.createEvent("HTMLEvents");
        event.initEvent(eventName, bubbles, cancelable);
        node.dispatchEvent(event);
    }
}


function $3837177e2ce3a364$var$parseDuration(node) {
    var str = (0, $ae8cbf1927a999ff$export$2e2bcd8739ae039)(node, "transitionDuration") || "";
    var mult = str.indexOf("ms") === -1 ? 1000 : 1;
    return parseFloat(str) * mult;
}
function $3837177e2ce3a364$var$emulateTransitionEnd(element, duration, padding) {
    if (padding === void 0) padding = 5;
    var called = false;
    var handle = setTimeout(function() {
        if (!called) (0, $f38e612505a62338$export$2e2bcd8739ae039)(element, "transitionend", true);
    }, duration + padding);
    var remove = (0, $012e2038676b30e8$export$2e2bcd8739ae039)(element, "transitionend", function() {
        called = true;
    }, {
        once: true
    });
    return function() {
        clearTimeout(handle);
        remove();
    };
}
function $3837177e2ce3a364$export$2e2bcd8739ae039(element, handler, duration, padding) {
    if (duration == null) duration = $3837177e2ce3a364$var$parseDuration(element) || 0;
    var removeEmulate = $3837177e2ce3a364$var$emulateTransitionEnd(element, duration, padding);
    var remove = (0, $012e2038676b30e8$export$2e2bcd8739ae039)(element, "transitionend", handler);
    return function() {
        removeEmulate();
        remove();
    };
}


function $cb93f9f64c891801$var$parseDuration(node, property) {
    const str = (0, $ae8cbf1927a999ff$export$2e2bcd8739ae039)(node, property) || "";
    const mult = str.indexOf("ms") === -1 ? 1000 : 1;
    return parseFloat(str) * mult;
}
function $cb93f9f64c891801$export$2e2bcd8739ae039(element, handler) {
    const duration = $cb93f9f64c891801$var$parseDuration(element, "transitionDuration");
    const delay = $cb93f9f64c891801$var$parseDuration(element, "transitionDelay");
    const remove = (0, $3837177e2ce3a364$export$2e2bcd8739ae039)(element, (e)=>{
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
 */ function $442986c0e547f981$var$createChainedFunction(...funcs) {
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
var $442986c0e547f981$export$2e2bcd8739ae039 = $442986c0e547f981$var$createChainedFunction;


// reading a dimension prop will cause the browser to recalculate,
// which will let our animations work
function $5973967ba95b94e3$export$2e2bcd8739ae039(node) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    node.offsetHeight;
}



var $kdEmn = parcelRequire("kdEmn");



function $515cec914369fd18$export$2e2bcd8739ae039(componentOrElement) {
    if (componentOrElement && "setState" in componentOrElement) return (0, (/*@__PURE__*/$parcel$interopDefault($8694693cb6719903$exports))).findDOMNode(componentOrElement);
    return componentOrElement != null ? componentOrElement : null;
}



"use client";
// Normalizes Transition callbacks when nodeRef is used.
const $eb20cd94366eecab$var$TransitionWrapper = /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($kdEmn))).forwardRef(({ onEnter: onEnter, onEntering: onEntering, onEntered: onEntered, onExit: onExit, onExiting: onExiting, onExited: onExited, addEndListener: addEndListener, children: children, childRef: childRef, ...props }, ref)=>{
    const nodeRef = (0, $kdEmn.useRef)(null);
    const mergedRef = (0, $73c872cbe8f998dc$export$2e2bcd8739ae039)(nodeRef, childRef);
    const attachRef = (r)=>{
        mergedRef((0, $515cec914369fd18$export$2e2bcd8739ae039)(r));
    };
    const normalize = (callback)=>(param)=>{
            if (callback && nodeRef.current) callback(nodeRef.current, param);
        };
    /* eslint-disable react-hooks/exhaustive-deps */ const handleEnter = (0, $kdEmn.useCallback)(normalize(onEnter), [
        onEnter
    ]);
    const handleEntering = (0, $kdEmn.useCallback)(normalize(onEntering), [
        onEntering
    ]);
    const handleEntered = (0, $kdEmn.useCallback)(normalize(onEntered), [
        onEntered
    ]);
    const handleExit = (0, $kdEmn.useCallback)(normalize(onExit), [
        onExit
    ]);
    const handleExiting = (0, $kdEmn.useCallback)(normalize(onExiting), [
        onExiting
    ]);
    const handleExited = (0, $kdEmn.useCallback)(normalize(onExited), [
        onExited
    ]);
    const handleAddEndListener = (0, $kdEmn.useCallback)(normalize(addEndListener), [
        addEndListener
    ]);
    /* eslint-enable react-hooks/exhaustive-deps */ return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $aaba28a38ce49783$export$2e2bcd8739ae039), {
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
            }) : /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($kdEmn))).cloneElement(children, {
            ref: attachRef
        })
    });
});
var $eb20cd94366eecab$export$2e2bcd8739ae039 = $eb20cd94366eecab$var$TransitionWrapper;



const $d364bc037c6d739e$var$MARGINS = {
    height: [
        "marginTop",
        "marginBottom"
    ],
    width: [
        "marginLeft",
        "marginRight"
    ]
};
function $d364bc037c6d739e$var$getDefaultDimensionValue(dimension, elem) {
    const offset = `offset${dimension[0].toUpperCase()}${dimension.slice(1)}`;
    const value = elem[offset];
    const margins = $d364bc037c6d739e$var$MARGINS[dimension];
    return value + // @ts-ignore
    parseInt((0, $ae8cbf1927a999ff$export$2e2bcd8739ae039)(elem, margins[0]), 10) + // @ts-ignore
    parseInt((0, $ae8cbf1927a999ff$export$2e2bcd8739ae039)(elem, margins[1]), 10);
}
const $d364bc037c6d739e$var$collapseStyles = {
    [(0, $aaba28a38ce49783$export$84cbff306f539230)]: "collapse",
    [(0, $aaba28a38ce49783$export$4aacc83d4d59139f)]: "collapsing",
    [(0, $aaba28a38ce49783$export$df38205c966be359)]: "collapsing",
    [(0, $aaba28a38ce49783$export$78e9e6e3e014d60a)]: "collapse show"
};
const $d364bc037c6d739e$var$Collapse = /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($kdEmn))).forwardRef(({ onEnter: onEnter, onEntering: onEntering, onEntered: onEntered, onExit: onExit, onExiting: onExiting, className: className, children: children, dimension: dimension = "height", in: inProp = false, timeout: timeout = 300, mountOnEnter: mountOnEnter = false, unmountOnExit: unmountOnExit = false, appear: appear = false, getDimensionValue: getDimensionValue = $d364bc037c6d739e$var$getDefaultDimensionValue, ...props }, ref)=>{
    /* Compute dimension */ const computedDimension = typeof dimension === "function" ? dimension() : dimension;
    /* -- Expanding -- */ const handleEnter = (0, $kdEmn.useMemo)(()=>(0, $442986c0e547f981$export$2e2bcd8739ae039)((elem)=>{
            elem.style[computedDimension] = "0";
        }, onEnter), [
        computedDimension,
        onEnter
    ]);
    const handleEntering = (0, $kdEmn.useMemo)(()=>(0, $442986c0e547f981$export$2e2bcd8739ae039)((elem)=>{
            const scroll = `scroll${computedDimension[0].toUpperCase()}${computedDimension.slice(1)}`;
            elem.style[computedDimension] = `${elem[scroll]}px`;
        }, onEntering), [
        computedDimension,
        onEntering
    ]);
    const handleEntered = (0, $kdEmn.useMemo)(()=>(0, $442986c0e547f981$export$2e2bcd8739ae039)((elem)=>{
            elem.style[computedDimension] = null;
        }, onEntered), [
        computedDimension,
        onEntered
    ]);
    /* -- Collapsing -- */ const handleExit = (0, $kdEmn.useMemo)(()=>(0, $442986c0e547f981$export$2e2bcd8739ae039)((elem)=>{
            elem.style[computedDimension] = `${getDimensionValue(computedDimension, elem)}px`;
            (0, $5973967ba95b94e3$export$2e2bcd8739ae039)(elem);
        }, onExit), [
        onExit,
        getDimensionValue,
        computedDimension
    ]);
    const handleExiting = (0, $kdEmn.useMemo)(()=>(0, $442986c0e547f981$export$2e2bcd8739ae039)((elem)=>{
            elem.style[computedDimension] = null;
        }, onExiting), [
        computedDimension,
        onExiting
    ]);
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $eb20cd94366eecab$export$2e2bcd8739ae039), {
        ref: ref,
        addEndListener: (0, $cb93f9f64c891801$export$2e2bcd8739ae039),
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
        children: (state, innerProps)=>/*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($kdEmn))).cloneElement(children, {
                ...innerProps,
                className: (0, (/*@__PURE__*/$parcel$interopDefault($32538ae97b12ecb9$exports)))(className, children.props.className, $d364bc037c6d739e$var$collapseStyles[state], computedDimension === "width" && "collapse-horizontal")
            })
    });
});
var // @ts-ignore
$d364bc037c6d739e$export$2e2bcd8739ae039 = $d364bc037c6d739e$var$Collapse;





"use client";
const $944316c4a8838cc0$var$NavbarCollapse = /*#__PURE__*/ $kdEmn.forwardRef(({ children: children, bsPrefix: bsPrefix, ...props }, ref)=>{
    bsPrefix = (0, $311a902b1b368ad8$export$7f387860ebffb32c)(bsPrefix, "navbar-collapse");
    const context = (0, $kdEmn.useContext)((0, $fb1eb812d045ce4f$export$2e2bcd8739ae039));
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $d364bc037c6d739e$export$2e2bcd8739ae039), {
        in: !!(context && context.expanded),
        ...props,
        children: /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)("div", {
            ref: ref,
            className: bsPrefix,
            children: children
        })
    });
});
$944316c4a8838cc0$var$NavbarCollapse.displayName = "NavbarCollapse";
var $944316c4a8838cc0$export$2e2bcd8739ae039 = $944316c4a8838cc0$var$NavbarCollapse;




var $kdEmn = parcelRequire("kdEmn");




"use client";
const $57159342abc090bc$var$NavbarToggle = /*#__PURE__*/ $kdEmn.forwardRef(({ bsPrefix: bsPrefix, className: className, children: children, label: label = "Toggle navigation", // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
as: Component = "button", onClick: onClick, ...props }, ref)=>{
    bsPrefix = (0, $311a902b1b368ad8$export$7f387860ebffb32c)(bsPrefix, "navbar-toggler");
    const { onToggle: onToggle, expanded: expanded } = (0, $kdEmn.useContext)((0, $fb1eb812d045ce4f$export$2e2bcd8739ae039)) || {};
    const handleClick = (0, $7bad07bf1cc449f2$export$2e2bcd8739ae039)((e)=>{
        if (onClick) onClick(e);
        if (onToggle) onToggle();
    });
    if (Component === "button") props.type = "button";
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)(Component, {
        ...props,
        ref: ref,
        onClick: handleClick,
        "aria-label": label,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($32538ae97b12ecb9$exports)))(className, bsPrefix, !expanded && "collapsed"),
        children: children || /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)("span", {
            className: `${bsPrefix}-icon`
        })
    });
});
$57159342abc090bc$var$NavbarToggle.displayName = "NavbarToggle";
var $57159342abc090bc$export$2e2bcd8739ae039 = $57159342abc090bc$var$NavbarToggle;



var $kdEmn = parcelRequire("kdEmn");



var $kdEmn = parcelRequire("kdEmn");
const $7b8a1cafedd99797$var$matchersByWindow = new WeakMap();
const $7b8a1cafedd99797$var$getMatcher = (query, targetWindow)=>{
    if (!query || !targetWindow) return undefined;
    const matchers = $7b8a1cafedd99797$var$matchersByWindow.get(targetWindow) || new Map();
    $7b8a1cafedd99797$var$matchersByWindow.set(targetWindow, matchers);
    let mql = matchers.get(query);
    if (!mql) {
        mql = targetWindow.matchMedia(query);
        mql.refCount = 0;
        matchers.set(mql.media, mql);
    }
    return mql;
};
function $7b8a1cafedd99797$export$2e2bcd8739ae039(query, targetWindow = typeof window === "undefined" ? undefined : window) {
    const mql = $7b8a1cafedd99797$var$getMatcher(query, targetWindow);
    const [matches, setMatches] = (0, $kdEmn.useState)(()=>mql ? mql.matches : false);
    (0, $272a57b918d66ac9$export$2e2bcd8739ae039)(()=>{
        let mql = $7b8a1cafedd99797$var$getMatcher(query, targetWindow);
        if (!mql) return setMatches(false);
        let matchers = $7b8a1cafedd99797$var$matchersByWindow.get(targetWindow);
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



var $kdEmn = parcelRequire("kdEmn");
function $900a9548d9e4dc8a$export$9c6950edc251641e(breakpointValues) {
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
        let query = (0, $kdEmn.useMemo)(()=>Object.entries(breakpointMap).reduce((query, [key, direction])=>{
                if (direction === "up" || direction === true) query = and(query, getMinQuery(key));
                if (direction === "down" || direction === true) query = and(query, getMaxQuery(key));
                return query;
            }, ""), [
            JSON.stringify(breakpointMap)
        ]);
        return (0, $7b8a1cafedd99797$export$2e2bcd8739ae039)(query, window);
    }
    return useBreakpoint;
}
const $900a9548d9e4dc8a$var$useBreakpoint = $900a9548d9e4dc8a$export$9c6950edc251641e({
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400
});
var $900a9548d9e4dc8a$export$2e2bcd8739ae039 = $900a9548d9e4dc8a$var$useBreakpoint;




var $kdEmn = parcelRequire("kdEmn");

function $af5e55e9cb3a005c$export$2e2bcd8739ae039(doc) {
    if (doc === void 0) doc = (0, $0ad049bac04a5782$export$2e2bcd8739ae039)();
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
 */ function $71048e402a7f5ae3$export$2e2bcd8739ae039(context, node) {
    // HTML DOM and SVG DOM may have different support levels,
    // so we need to check on context instead of a document root element.
    if (context.contains) return context.contains(node);
    if (context.compareDocumentPosition) return context === node || !!(context.compareDocumentPosition(node) & 16);
}





var $kdEmn = parcelRequire("kdEmn");



var $kdEmn = parcelRequire("kdEmn");
function $7fdbdcc8a18b4e75$export$2e2bcd8739ae039(value) {
    const valueRef = (0, $kdEmn.useRef)(value);
    valueRef.current = value;
    return valueRef;
}



var $kdEmn = parcelRequire("kdEmn");
function $3119b1257c72ea24$export$2e2bcd8739ae039(fn) {
    const onUnmount = (0, $7fdbdcc8a18b4e75$export$2e2bcd8739ae039)(fn);
    (0, $kdEmn.useEffect)(()=>()=>onUnmount.current(), []);
}






/**
 * Get the width of the vertical window scrollbar if it's visible
 */ function $4f8a04071a2589e8$export$2e2bcd8739ae039(ownerDocument = document) {
    const window = ownerDocument.defaultView;
    return Math.abs(window.innerWidth - ownerDocument.documentElement.clientWidth);
}


const $2808c7570633e558$export$1a88c12b8b979fa0 = (0, $69e933716729d92d$export$5cc3b7b83e34ade7)("modal-open");
/**
 * Manages a stack of Modals as well as ensuring
 * body scrolling is is disabled and padding accounted for
 */ class $2808c7570633e558$var$ModalManager {
    constructor({ ownerDocument: ownerDocument, handleContainerOverflow: handleContainerOverflow = true, isRTL: isRTL = false } = {}){
        this.handleContainerOverflow = handleContainerOverflow;
        this.isRTL = isRTL;
        this.modals = [];
        this.ownerDocument = ownerDocument;
    }
    getScrollbarWidth() {
        return (0, $4f8a04071a2589e8$export$2e2bcd8739ae039)(this.ownerDocument);
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
        style[paddingProp] = `${parseInt((0, $ae8cbf1927a999ff$export$2e2bcd8739ae039)(container, paddingProp) || "0", 10) + containerState.scrollBarWidth}px`;
        container.setAttribute($2808c7570633e558$export$1a88c12b8b979fa0, "");
        (0, $ae8cbf1927a999ff$export$2e2bcd8739ae039)(container, style);
    }
    reset() {
        [
            ...this.modals
        ].forEach((m)=>this.remove(m));
    }
    removeContainerStyle(containerState) {
        const container = this.getElement();
        container.removeAttribute($2808c7570633e558$export$1a88c12b8b979fa0);
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
var $2808c7570633e558$export$2e2bcd8739ae039 = $2808c7570633e558$var$ModalManager;





var $kdEmn = parcelRequire("kdEmn");

var $kdEmn = parcelRequire("kdEmn");

const $af0508a40ecc44f8$var$Context = /*#__PURE__*/ (0, $kdEmn.createContext)((0, $a058f95910353514$export$2e2bcd8739ae039) ? window : undefined);
const $af0508a40ecc44f8$export$f7d306aeb1cf5fbc = $af0508a40ecc44f8$var$Context.Provider;
function $af0508a40ecc44f8$export$2e2bcd8739ae039() {
    return (0, $kdEmn.useContext)($af0508a40ecc44f8$var$Context);
}


const $d2d0daeebe091af8$export$c91fd81e6d65f84a = (ref, document)=>{
    if (!(0, $a058f95910353514$export$2e2bcd8739ae039)) return null;
    if (ref == null) return (document || (0, $0ad049bac04a5782$export$2e2bcd8739ae039)()).body;
    if (typeof ref === "function") ref = ref();
    if (ref && "current" in ref) ref = ref.current;
    if (ref && ("nodeType" in ref || ref.getBoundingClientRect)) return ref;
    return null;
};
function $d2d0daeebe091af8$export$2e2bcd8739ae039(ref, onResolved) {
    const window = (0, $af0508a40ecc44f8$export$2e2bcd8739ae039)();
    const [resolvedRef, setRef] = (0, $kdEmn.useState)(()=>$d2d0daeebe091af8$export$c91fd81e6d65f84a(ref, window == null ? void 0 : window.document));
    if (!resolvedRef) {
        const earlyRef = $d2d0daeebe091af8$export$c91fd81e6d65f84a(ref);
        if (earlyRef) setRef(earlyRef);
    }
    (0, $kdEmn.useEffect)(()=>{
        if (onResolved && resolvedRef) onResolved(resolvedRef);
    }, [
        onResolved,
        resolvedRef
    ]);
    (0, $kdEmn.useEffect)(()=>{
        const nextRef = $d2d0daeebe091af8$export$c91fd81e6d65f84a(ref);
        if (nextRef !== resolvedRef) setRef(nextRef);
    }, [
        ref,
        resolvedRef
    ]);
    return resolvedRef;
}







var $kdEmn = parcelRequire("kdEmn");



var $kdEmn = parcelRequire("kdEmn");
function $76d70bd670076aab$var$NoopTransition({ children: children, in: inProp, onExited: onExited, mountOnEnter: mountOnEnter, unmountOnExit: unmountOnExit }) {
    const ref = (0, $kdEmn.useRef)(null);
    const hasEnteredRef = (0, $kdEmn.useRef)(inProp);
    const handleExited = (0, $7bad07bf1cc449f2$export$2e2bcd8739ae039)(onExited);
    (0, $kdEmn.useEffect)(()=>{
        if (inProp) hasEnteredRef.current = true;
        else handleExited(ref.current);
    }, [
        inProp,
        handleExited
    ]);
    const combinedRef = (0, $73c872cbe8f998dc$export$2e2bcd8739ae039)(ref, children.ref);
    const child = /*#__PURE__*/ (0, $kdEmn.cloneElement)(children, {
        ref: combinedRef
    });
    if (inProp) return child;
    if (unmountOnExit) return null;
    if (!hasEnteredRef.current && mountOnEnter) return null;
    return child;
}
var $76d70bd670076aab$export$2e2bcd8739ae039 = $76d70bd670076aab$var$NoopTransition;



var $kdEmn = parcelRequire("kdEmn");

var $kdEmn = parcelRequire("kdEmn");


var $kdEmn = parcelRequire("kdEmn");
function $3aae0bc091c11fc5$export$806fcc22e55e107d(e) {
    return e.code === "Escape" || e.keyCode === 27;
}
function $3aae0bc091c11fc5$export$13e065f3a74cfe36() {
    const parts = $kdEmn.version.split(".");
    return {
        major: +parts[0],
        minor: +parts[1],
        patch: +parts[2]
    };
}


const $cc581189cdd91aad$var$_excluded = [
    "onEnter",
    "onEntering",
    "onEntered",
    "onExit",
    "onExiting",
    "onExited",
    "addEndListener",
    "children"
];
function $cc581189cdd91aad$var$_objectWithoutPropertiesLoose(source, excluded) {
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
function $cc581189cdd91aad$export$2e2bcd8739ae039(_ref) {
    let { onEnter: onEnter, onEntering: onEntering, onEntered: onEntered, onExit: onExit, onExiting: onExiting, onExited: onExited, addEndListener: addEndListener, children: children } = _ref, props = $cc581189cdd91aad$var$_objectWithoutPropertiesLoose(_ref, $cc581189cdd91aad$var$_excluded);
    const { major: major } = (0, $3aae0bc091c11fc5$export$13e065f3a74cfe36)();
    const childRef = major >= 19 ? children.props.ref : children.ref;
    const nodeRef = (0, $kdEmn.useRef)(null);
    const mergedRef = (0, $73c872cbe8f998dc$export$2e2bcd8739ae039)(nodeRef, typeof children === "function" ? null : childRef);
    const normalize = (callback)=>(param)=>{
            if (callback && nodeRef.current) callback(nodeRef.current, param);
        };
    /* eslint-disable react-hooks/exhaustive-deps */ const handleEnter = (0, $kdEmn.useCallback)(normalize(onEnter), [
        onEnter
    ]);
    const handleEntering = (0, $kdEmn.useCallback)(normalize(onEntering), [
        onEntering
    ]);
    const handleEntered = (0, $kdEmn.useCallback)(normalize(onEntered), [
        onEntered
    ]);
    const handleExit = (0, $kdEmn.useCallback)(normalize(onExit), [
        onExit
    ]);
    const handleExiting = (0, $kdEmn.useCallback)(normalize(onExiting), [
        onExiting
    ]);
    const handleExited = (0, $kdEmn.useCallback)(normalize(onExited), [
        onExited
    ]);
    const handleAddEndListener = (0, $kdEmn.useCallback)(normalize(addEndListener), [
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
            })) : /*#__PURE__*/ (0, $kdEmn.cloneElement)(children, {
            ref: mergedRef
        })
    });
}



const $2eba7c331bcff4fb$var$_excluded = [
    "component"
];
function $2eba7c331bcff4fb$var$_objectWithoutPropertiesLoose(source, excluded) {
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
const $2eba7c331bcff4fb$var$RTGTransition = /*#__PURE__*/ $kdEmn.forwardRef((_ref, ref)=>{
    let { component: Component } = _ref, props = $2eba7c331bcff4fb$var$_objectWithoutPropertiesLoose(_ref, $2eba7c331bcff4fb$var$_excluded);
    const transitionProps = (0, $cc581189cdd91aad$export$2e2bcd8739ae039)(props);
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)(Component, Object.assign({
        ref: ref
    }, transitionProps));
});
var $2eba7c331bcff4fb$export$2e2bcd8739ae039 = $2eba7c331bcff4fb$var$RTGTransition;



function $c9d1a72491c8b84a$export$7b286972b8d8ccbf({ in: inProp, onTransition: onTransition }) {
    const ref = (0, $kdEmn.useRef)(null);
    const isInitialRef = (0, $kdEmn.useRef)(true);
    const handleTransition = (0, $7bad07bf1cc449f2$export$2e2bcd8739ae039)(onTransition);
    (0, $272a57b918d66ac9$export$2e2bcd8739ae039)(()=>{
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
    (0, $272a57b918d66ac9$export$2e2bcd8739ae039)(()=>{
        isInitialRef.current = false;
        // this is for strict mode
        return ()=>{
            isInitialRef.current = true;
        };
    }, []);
    return ref;
}
function $c9d1a72491c8b84a$export$2e2bcd8739ae039({ children: children, in: inProp, onExited: onExited, onEntered: onEntered, transition: transition }) {
    const [exited, setExited] = (0, $kdEmn.useState)(!inProp);
    // TODO: I think this needs to be in an effect
    if (inProp && exited) setExited(false);
    const ref = $c9d1a72491c8b84a$export$7b286972b8d8ccbf({
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
    const combinedRef = (0, $73c872cbe8f998dc$export$2e2bcd8739ae039)(ref, children.ref);
    return exited && !inProp ? null : /*#__PURE__*/ (0, $kdEmn.cloneElement)(children, {
        ref: combinedRef
    });
}
function $c9d1a72491c8b84a$export$f41d64aae6d6dba5(component, runTransition, props) {
    if (component) return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $2eba7c331bcff4fb$export$2e2bcd8739ae039), Object.assign({}, props, {
        component: component
    }));
    if (runTransition) return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)($c9d1a72491c8b84a$export$2e2bcd8739ae039, Object.assign({}, props, {
        transition: runTransition
    }));
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $76d70bd670076aab$export$2e2bcd8739ae039), Object.assign({}, props));
}




const $e5d38ff7343f4b58$var$_excluded = [
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
function $e5d38ff7343f4b58$var$_objectWithoutPropertiesLoose(source, excluded) {
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
let $e5d38ff7343f4b58$var$manager;
function $e5d38ff7343f4b58$var$getManager(window) {
    if (!$e5d38ff7343f4b58$var$manager) $e5d38ff7343f4b58$var$manager = new (0, $2808c7570633e558$export$2e2bcd8739ae039)({
        ownerDocument: window == null ? void 0 : window.document
    });
    return $e5d38ff7343f4b58$var$manager;
}
function $e5d38ff7343f4b58$var$useModalManager(provided) {
    const window = (0, $af0508a40ecc44f8$export$2e2bcd8739ae039)();
    const modalManager = provided || $e5d38ff7343f4b58$var$getManager(window);
    const modal = (0, $kdEmn.useRef)({
        dialog: null,
        backdrop: null
    });
    return Object.assign(modal.current, {
        add: ()=>modalManager.add(modal.current),
        remove: ()=>modalManager.remove(modal.current),
        isTopModal: ()=>modalManager.isTopModal(modal.current),
        setDialogRef: (0, $kdEmn.useCallback)((ref)=>{
            modal.current.dialog = ref;
        }, []),
        setBackdropRef: (0, $kdEmn.useCallback)((ref)=>{
            modal.current.backdrop = ref;
        }, [])
    });
}
const $e5d38ff7343f4b58$var$Modal = /*#__PURE__*/ (0, $kdEmn.forwardRef)((_ref, ref)=>{
    let { show: show = false, role: role = "dialog", className: className, style: style, children: children, backdrop: backdrop = true, keyboard: keyboard = true, onBackdropClick: onBackdropClick, onEscapeKeyDown: onEscapeKeyDown, transition: transition, runTransition: runTransition, backdropTransition: backdropTransition, runBackdropTransition: runBackdropTransition, autoFocus: autoFocus = true, enforceFocus: enforceFocus = true, restoreFocus: restoreFocus = true, restoreFocusOptions: restoreFocusOptions, renderDialog: renderDialog, renderBackdrop: renderBackdrop = (props)=>/*#__PURE__*/ (0, $8a713af880997588$exports.jsx)("div", Object.assign({}, props)), manager: providedManager, container: containerRef, onShow: onShow, onHide: onHide = ()=>{}, onExit: onExit, onExited: onExited, onExiting: onExiting, onEnter: onEnter, onEntering: onEntering, onEntered: onEntered } = _ref, rest = $e5d38ff7343f4b58$var$_objectWithoutPropertiesLoose(_ref, $e5d38ff7343f4b58$var$_excluded);
    const ownerWindow = (0, $af0508a40ecc44f8$export$2e2bcd8739ae039)();
    const container = (0, $d2d0daeebe091af8$export$2e2bcd8739ae039)(containerRef);
    const modal = $e5d38ff7343f4b58$var$useModalManager(providedManager);
    const isMounted = (0, $4a7469eca62a29a3$export$2e2bcd8739ae039)();
    const prevShow = (0, $ff611287be970b78$export$2e2bcd8739ae039)(show);
    const [exited, setExited] = (0, $kdEmn.useState)(!show);
    const lastFocusRef = (0, $kdEmn.useRef)(null);
    (0, $kdEmn.useImperativeHandle)(ref, ()=>modal, [
        modal
    ]);
    if ((0, $a058f95910353514$export$2e2bcd8739ae039) && !prevShow && show) lastFocusRef.current = (0, $af5e55e9cb3a005c$export$2e2bcd8739ae039)(ownerWindow == null ? void 0 : ownerWindow.document);
    // TODO: I think this needs to be in an effect
    if (show && exited) setExited(false);
    const handleShow = (0, $7bad07bf1cc449f2$export$2e2bcd8739ae039)(()=>{
        modal.add();
        removeKeydownListenerRef.current = (0, $012e2038676b30e8$export$2e2bcd8739ae039)(document, "keydown", handleDocumentKeyDown);
        removeFocusListenerRef.current = (0, $012e2038676b30e8$export$2e2bcd8739ae039)(document, "focus", // the timeout is necessary b/c this will run before the new modal is mounted
        // and so steals focus from it
        ()=>setTimeout(handleEnforceFocus), true);
        if (onShow) onShow();
        // autofocus after onShow to not trigger a focus event for previous
        // modals before this one is shown.
        if (autoFocus) {
            var _modal$dialog$ownerDo, _modal$dialog;
            const currentActiveElement = (0, $af5e55e9cb3a005c$export$2e2bcd8739ae039)((_modal$dialog$ownerDo = (_modal$dialog = modal.dialog) == null ? void 0 : _modal$dialog.ownerDocument) != null ? _modal$dialog$ownerDo : ownerWindow == null ? void 0 : ownerWindow.document);
            if (modal.dialog && currentActiveElement && !(0, $71048e402a7f5ae3$export$2e2bcd8739ae039)(modal.dialog, currentActiveElement)) {
                lastFocusRef.current = currentActiveElement;
                modal.dialog.focus();
            }
        }
    });
    const handleHide = (0, $7bad07bf1cc449f2$export$2e2bcd8739ae039)(()=>{
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
    (0, $kdEmn.useEffect)(()=>{
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
    (0, $kdEmn.useEffect)(()=>{
        if (!exited) return;
        handleHide();
    }, [
        exited,
        handleHide
    ]);
    (0, $3119b1257c72ea24$export$2e2bcd8739ae039)(()=>{
        handleHide();
    });
    // --------------------------------
    const handleEnforceFocus = (0, $7bad07bf1cc449f2$export$2e2bcd8739ae039)(()=>{
        if (!enforceFocus || !isMounted() || !modal.isTopModal()) return;
        const currentActiveElement = (0, $af5e55e9cb3a005c$export$2e2bcd8739ae039)(ownerWindow == null ? void 0 : ownerWindow.document);
        if (modal.dialog && currentActiveElement && !(0, $71048e402a7f5ae3$export$2e2bcd8739ae039)(modal.dialog, currentActiveElement)) modal.dialog.focus();
    });
    const handleBackdropClick = (0, $7bad07bf1cc449f2$export$2e2bcd8739ae039)((e)=>{
        if (e.target !== e.currentTarget) return;
        onBackdropClick == null || onBackdropClick(e);
        if (backdrop === true) onHide();
    });
    const handleDocumentKeyDown = (0, $7bad07bf1cc449f2$export$2e2bcd8739ae039)((e)=>{
        if (keyboard && (0, $3aae0bc091c11fc5$export$806fcc22e55e107d)(e) && modal.isTopModal()) {
            onEscapeKeyDown == null || onEscapeKeyDown(e);
            if (!e.defaultPrevented) onHide();
        }
    });
    const removeFocusListenerRef = (0, $kdEmn.useRef)();
    const removeKeydownListenerRef = (0, $kdEmn.useRef)();
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
    let dialog = renderDialog ? renderDialog(dialogProps) : /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)("div", Object.assign({}, dialogProps, {
        children: /*#__PURE__*/ $kdEmn.cloneElement(children, {
            role: "document"
        })
    }));
    dialog = (0, $c9d1a72491c8b84a$export$f41d64aae6d6dba5)(transition, runTransition, {
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
        backdropElement = (0, $c9d1a72491c8b84a$export$f41d64aae6d6dba5)(backdropTransition, runBackdropTransition, {
            in: !!show,
            appear: true,
            mountOnEnter: true,
            unmountOnExit: true,
            children: backdropElement
        });
    }
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $8a713af880997588$exports.Fragment), {
        children: /*#__PURE__*/ (0, (/*@__PURE__*/$parcel$interopDefault($8694693cb6719903$exports))).createPortal(/*#__PURE__*/ (0, $8a713af880997588$exports.jsxs)((0, $8a713af880997588$exports.Fragment), {
            children: [
                backdropElement,
                dialog
            ]
        }), container)
    });
});
$e5d38ff7343f4b58$var$Modal.displayName = "Modal";
var $e5d38ff7343f4b58$export$2e2bcd8739ae039 = Object.assign($e5d38ff7343f4b58$var$Modal, {
    Manager: (0, $2808c7570633e558$export$2e2bcd8739ae039)
});




var $kdEmn = parcelRequire("kdEmn");





const $0c727599add79221$var$fadeStyles = {
    [(0, $aaba28a38ce49783$export$df38205c966be359)]: "show",
    [(0, $aaba28a38ce49783$export$78e9e6e3e014d60a)]: "show"
};
const $0c727599add79221$var$Fade = /*#__PURE__*/ $kdEmn.forwardRef(({ className: className, children: children, transitionClasses: transitionClasses = {}, onEnter: onEnter, ...rest }, ref)=>{
    const props = {
        in: false,
        timeout: 300,
        mountOnEnter: false,
        unmountOnExit: false,
        appear: false,
        ...rest
    };
    const handleEnter = (0, $kdEmn.useCallback)((node, isAppearing)=>{
        (0, $5973967ba95b94e3$export$2e2bcd8739ae039)(node);
        onEnter == null || onEnter(node, isAppearing);
    }, [
        onEnter
    ]);
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $eb20cd94366eecab$export$2e2bcd8739ae039), {
        ref: ref,
        addEndListener: (0, $cb93f9f64c891801$export$2e2bcd8739ae039),
        ...props,
        onEnter: handleEnter,
        childRef: children.ref,
        children: (status, innerProps)=>/*#__PURE__*/ $kdEmn.cloneElement(children, {
                ...innerProps,
                className: (0, (/*@__PURE__*/$parcel$interopDefault($32538ae97b12ecb9$exports)))("fade", className, children.props.className, $0c727599add79221$var$fadeStyles[status], transitionClasses[status])
            })
    });
});
$0c727599add79221$var$Fade.displayName = "Fade";
var $0c727599add79221$export$2e2bcd8739ae039 = $0c727599add79221$var$Fade;



var $kdEmn = parcelRequire("kdEmn");



"use client";
const $631ea95e086ac8c8$var$OffcanvasBody = /*#__PURE__*/ $kdEmn.forwardRef(({ className: className, bsPrefix: bsPrefix, as: Component = "div", ...props }, ref)=>{
    bsPrefix = (0, $311a902b1b368ad8$export$7f387860ebffb32c)(bsPrefix, "offcanvas-body");
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)(Component, {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($32538ae97b12ecb9$exports)))(className, bsPrefix),
        ...props
    });
});
$631ea95e086ac8c8$var$OffcanvasBody.displayName = "OffcanvasBody";
var $631ea95e086ac8c8$export$2e2bcd8739ae039 = $631ea95e086ac8c8$var$OffcanvasBody;




var $kdEmn = parcelRequire("kdEmn");





"use client";
const $e5e5fdcba018b6b4$var$transitionStyles = {
    [(0, $aaba28a38ce49783$export$df38205c966be359)]: "show",
    [(0, $aaba28a38ce49783$export$78e9e6e3e014d60a)]: "show"
};
const $e5e5fdcba018b6b4$var$OffcanvasToggling = /*#__PURE__*/ $kdEmn.forwardRef(({ bsPrefix: bsPrefix, className: className, children: children, in: inProp = false, mountOnEnter: mountOnEnter = false, unmountOnExit: unmountOnExit = false, appear: appear = false, ...props }, ref)=>{
    bsPrefix = (0, $311a902b1b368ad8$export$7f387860ebffb32c)(bsPrefix, "offcanvas");
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $eb20cd94366eecab$export$2e2bcd8739ae039), {
        ref: ref,
        addEndListener: (0, $cb93f9f64c891801$export$2e2bcd8739ae039),
        in: inProp,
        mountOnEnter: mountOnEnter,
        unmountOnExit: unmountOnExit,
        appear: appear,
        ...props,
        childRef: children.ref,
        children: (status, innerProps)=>/*#__PURE__*/ $kdEmn.cloneElement(children, {
                ...innerProps,
                className: (0, (/*@__PURE__*/$parcel$interopDefault($32538ae97b12ecb9$exports)))(className, children.props.className, (status === (0, $aaba28a38ce49783$export$df38205c966be359) || status === (0, $aaba28a38ce49783$export$4aacc83d4d59139f)) && `${bsPrefix}-toggling`, $e5e5fdcba018b6b4$var$transitionStyles[status])
            })
    });
});
$e5e5fdcba018b6b4$var$OffcanvasToggling.displayName = "OffcanvasToggling";
var $e5e5fdcba018b6b4$export$2e2bcd8739ae039 = $e5e5fdcba018b6b4$var$OffcanvasToggling;



var $kdEmn = parcelRequire("kdEmn");
"use client";
const $c3fef18375c57da0$var$ModalContext = /*#__PURE__*/ $kdEmn.createContext({
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onHide () {}
});
var $c3fef18375c57da0$export$2e2bcd8739ae039 = $c3fef18375c57da0$var$ModalContext;





var $kdEmn = parcelRequire("kdEmn");


var $kdEmn = parcelRequire("kdEmn");



var $kdEmn = parcelRequire("kdEmn");


const $4942046a34c8db42$var$propTypes = {
    /** An accessible label indicating the relevant information about the Close Button. */ "aria-label": (0, (/*@__PURE__*/$parcel$interopDefault($5cea9eb9ce58b247$exports))).string,
    /** A callback fired after the Close Button is clicked. */ onClick: (0, (/*@__PURE__*/$parcel$interopDefault($5cea9eb9ce58b247$exports))).func,
    /**
   * Render different color variant for the button.
   *
   * Omitting this will render the default dark color.
   */ variant: (0, (/*@__PURE__*/$parcel$interopDefault($5cea9eb9ce58b247$exports))).oneOf([
        "white"
    ])
};
const $4942046a34c8db42$var$CloseButton = /*#__PURE__*/ $kdEmn.forwardRef(({ className: className, variant: variant, "aria-label": ariaLabel = "Close", ...props }, ref)=>/*#__PURE__*/ (0, $8a713af880997588$exports.jsx)("button", {
        ref: ref,
        type: "button",
        className: (0, (/*@__PURE__*/$parcel$interopDefault($32538ae97b12ecb9$exports)))("btn-close", variant && `btn-close-${variant}`, className),
        "aria-label": ariaLabel,
        ...props
    }));
$4942046a34c8db42$var$CloseButton.displayName = "CloseButton";
$4942046a34c8db42$var$CloseButton.propTypes = $4942046a34c8db42$var$propTypes;
var $4942046a34c8db42$export$2e2bcd8739ae039 = $4942046a34c8db42$var$CloseButton;




"use client";
const $62f6c60ad3a144a0$var$AbstractModalHeader = /*#__PURE__*/ $kdEmn.forwardRef(({ closeLabel: closeLabel = "Close", closeVariant: closeVariant, closeButton: closeButton = false, onHide: onHide, children: children, ...props }, ref)=>{
    const context = (0, $kdEmn.useContext)((0, $c3fef18375c57da0$export$2e2bcd8739ae039));
    const handleClick = (0, $7bad07bf1cc449f2$export$2e2bcd8739ae039)(()=>{
        context == null || context.onHide();
        onHide == null || onHide();
    });
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsxs)("div", {
        ref: ref,
        ...props,
        children: [
            children,
            closeButton && /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $4942046a34c8db42$export$2e2bcd8739ae039), {
                "aria-label": closeLabel,
                variant: closeVariant,
                onClick: handleClick
            })
        ]
    });
});
var $62f6c60ad3a144a0$export$2e2bcd8739ae039 = $62f6c60ad3a144a0$var$AbstractModalHeader;



"use client";
const $210483ab9b63be6c$var$OffcanvasHeader = /*#__PURE__*/ $kdEmn.forwardRef(({ bsPrefix: bsPrefix, className: className, closeLabel: closeLabel = "Close", closeButton: closeButton = false, ...props }, ref)=>{
    bsPrefix = (0, $311a902b1b368ad8$export$7f387860ebffb32c)(bsPrefix, "offcanvas-header");
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $62f6c60ad3a144a0$export$2e2bcd8739ae039), {
        ref: ref,
        ...props,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($32538ae97b12ecb9$exports)))(className, bsPrefix),
        closeLabel: closeLabel,
        closeButton: closeButton
    });
});
$210483ab9b63be6c$var$OffcanvasHeader.displayName = "OffcanvasHeader";
var $210483ab9b63be6c$export$2e2bcd8739ae039 = $210483ab9b63be6c$var$OffcanvasHeader;



var $kdEmn = parcelRequire("kdEmn");




"use client";
const $879fc4756f3dedb3$var$DivStyledAsH5 = (0, $f5b1cf123642f131$export$2e2bcd8739ae039)("h5");
const $879fc4756f3dedb3$var$OffcanvasTitle = /*#__PURE__*/ $kdEmn.forwardRef(({ className: className, bsPrefix: bsPrefix, as: Component = $879fc4756f3dedb3$var$DivStyledAsH5, ...props }, ref)=>{
    bsPrefix = (0, $311a902b1b368ad8$export$7f387860ebffb32c)(bsPrefix, "offcanvas-title");
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)(Component, {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($32538ae97b12ecb9$exports)))(className, bsPrefix),
        ...props
    });
});
$879fc4756f3dedb3$var$OffcanvasTitle.displayName = "OffcanvasTitle";
var $879fc4756f3dedb3$export$2e2bcd8739ae039 = $879fc4756f3dedb3$var$OffcanvasTitle;



/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */ function $090050631b93724d$export$2e2bcd8739ae039(element, className) {
    if (element.classList) return !!className && element.classList.contains(className);
    return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}


function $b73652fcf9f39173$export$2e2bcd8739ae039(element, className) {
    if (element.classList) element.classList.add(className);
    else if (!(0, $090050631b93724d$export$2e2bcd8739ae039)(element, className)) {
        if (typeof element.className === "string") element.className = element.className + " " + className;
        else element.setAttribute("class", (element.className && element.className.baseVal || "") + " " + className);
    }
}




function $cd785eb11d1f1858$var$replaceClassName(origClass, classToRemove) {
    return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function $cd785eb11d1f1858$export$2e2bcd8739ae039(element, className) {
    if (element.classList) element.classList.remove(className);
    else if (typeof element.className === "string") element.className = $cd785eb11d1f1858$var$replaceClassName(element.className, className);
    else element.setAttribute("class", $cd785eb11d1f1858$var$replaceClassName(element.className && element.className.baseVal || "", className));
}



const $0618ccf59bd9c248$var$Selector = {
    FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    STICKY_CONTENT: ".sticky-top",
    NAVBAR_TOGGLER: ".navbar-toggler"
};
class $0618ccf59bd9c248$var$BootstrapModalManager extends (0, $2808c7570633e558$export$2e2bcd8739ae039) {
    adjustAndStore(prop, element, adjust) {
        const actual = element.style[prop];
        // TODO: DOMStringMap and CSSStyleDeclaration aren't strictly compatible
        // @ts-ignore
        element.dataset[prop] = actual;
        (0, $ae8cbf1927a999ff$export$2e2bcd8739ae039)(element, {
            [prop]: `${parseFloat((0, $ae8cbf1927a999ff$export$2e2bcd8739ae039)(element, prop)) + adjust}px`
        });
    }
    restore(prop, element) {
        const value = element.dataset[prop];
        if (value !== undefined) {
            delete element.dataset[prop];
            (0, $ae8cbf1927a999ff$export$2e2bcd8739ae039)(element, {
                [prop]: value
            });
        }
    }
    setContainerStyle(containerState) {
        super.setContainerStyle(containerState);
        const container = this.getElement();
        (0, $b73652fcf9f39173$export$2e2bcd8739ae039)(container, "modal-open");
        if (!containerState.scrollBarWidth) return;
        const paddingProp = this.isRTL ? "paddingLeft" : "paddingRight";
        const marginProp = this.isRTL ? "marginLeft" : "marginRight";
        (0, $42f901bd234c64bc$export$2e2bcd8739ae039)(container, $0618ccf59bd9c248$var$Selector.FIXED_CONTENT).forEach((el)=>this.adjustAndStore(paddingProp, el, containerState.scrollBarWidth));
        (0, $42f901bd234c64bc$export$2e2bcd8739ae039)(container, $0618ccf59bd9c248$var$Selector.STICKY_CONTENT).forEach((el)=>this.adjustAndStore(marginProp, el, -containerState.scrollBarWidth));
        (0, $42f901bd234c64bc$export$2e2bcd8739ae039)(container, $0618ccf59bd9c248$var$Selector.NAVBAR_TOGGLER).forEach((el)=>this.adjustAndStore(marginProp, el, containerState.scrollBarWidth));
    }
    removeContainerStyle(containerState) {
        super.removeContainerStyle(containerState);
        const container = this.getElement();
        (0, $cd785eb11d1f1858$export$2e2bcd8739ae039)(container, "modal-open");
        const paddingProp = this.isRTL ? "paddingLeft" : "paddingRight";
        const marginProp = this.isRTL ? "marginLeft" : "marginRight";
        (0, $42f901bd234c64bc$export$2e2bcd8739ae039)(container, $0618ccf59bd9c248$var$Selector.FIXED_CONTENT).forEach((el)=>this.restore(paddingProp, el));
        (0, $42f901bd234c64bc$export$2e2bcd8739ae039)(container, $0618ccf59bd9c248$var$Selector.STICKY_CONTENT).forEach((el)=>this.restore(marginProp, el));
        (0, $42f901bd234c64bc$export$2e2bcd8739ae039)(container, $0618ccf59bd9c248$var$Selector.NAVBAR_TOGGLER).forEach((el)=>this.restore(marginProp, el));
    }
}
let $0618ccf59bd9c248$var$sharedManager;
function $0618ccf59bd9c248$export$a03641438014b436(options) {
    if (!$0618ccf59bd9c248$var$sharedManager) $0618ccf59bd9c248$var$sharedManager = new $0618ccf59bd9c248$var$BootstrapModalManager(options);
    return $0618ccf59bd9c248$var$sharedManager;
}
var $0618ccf59bd9c248$export$2e2bcd8739ae039 = $0618ccf59bd9c248$var$BootstrapModalManager;



"use client";
function $ba2f91c309a3d2fd$var$DialogTransition(props) {
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $e5e5fdcba018b6b4$export$2e2bcd8739ae039), {
        ...props
    });
}
function $ba2f91c309a3d2fd$var$BackdropTransition(props) {
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $0c727599add79221$export$2e2bcd8739ae039), {
        ...props
    });
}
const $ba2f91c309a3d2fd$var$Offcanvas = /*#__PURE__*/ $kdEmn.forwardRef(({ bsPrefix: bsPrefix, className: className, children: children, "aria-labelledby": ariaLabelledby, placement: placement = "start", responsive: responsive, show: /* BaseModal props */ show = false, backdrop: backdrop = true, keyboard: keyboard = true, scroll: scroll = false, onEscapeKeyDown: onEscapeKeyDown, onShow: onShow, onHide: onHide, container: container, autoFocus: autoFocus = true, enforceFocus: enforceFocus = true, restoreFocus: restoreFocus = true, restoreFocusOptions: restoreFocusOptions, onEntered: onEntered, onExit: onExit, onExiting: onExiting, onEnter: onEnter, onEntering: onEntering, onExited: onExited, backdropClassName: backdropClassName, manager: propsManager, renderStaticNode: renderStaticNode = false, ...props }, ref)=>{
    const modalManager = (0, $kdEmn.useRef)();
    bsPrefix = (0, $311a902b1b368ad8$export$7f387860ebffb32c)(bsPrefix, "offcanvas");
    const { onToggle: onToggle } = (0, $kdEmn.useContext)((0, $fb1eb812d045ce4f$export$2e2bcd8739ae039)) || {};
    const [showOffcanvas, setShowOffcanvas] = (0, $kdEmn.useState)(false);
    const hideResponsiveOffcanvas = (0, $900a9548d9e4dc8a$export$2e2bcd8739ae039)(responsive || "xs", "up");
    (0, $kdEmn.useEffect)(()=>{
        // Handles the case where screen is resized while the responsive
        // offcanvas is shown. If `responsive` not provided, just use `show`.
        setShowOffcanvas(responsive ? show && !hideResponsiveOffcanvas : show);
    }, [
        show,
        responsive,
        hideResponsiveOffcanvas
    ]);
    const handleHide = (0, $7bad07bf1cc449f2$export$2e2bcd8739ae039)(()=>{
        onToggle == null || onToggle();
        onHide == null || onHide();
    });
    const modalContext = (0, $kdEmn.useMemo)(()=>({
            onHide: handleHide
        }), [
        handleHide
    ]);
    function getModalManager() {
        if (propsManager) return propsManager;
        if (scroll) {
            // Have to use a different modal manager since the shared
            // one handles overflow.
            if (!modalManager.current) modalManager.current = new (0, $0618ccf59bd9c248$export$2e2bcd8739ae039)({
                handleContainerOverflow: false
            });
            return modalManager.current;
        }
        return (0, $0618ccf59bd9c248$export$a03641438014b436)();
    }
    const handleEnter = (node, ...args)=>{
        if (node) node.style.visibility = "visible";
        onEnter == null || onEnter(node, ...args);
    };
    const handleExited = (node, ...args)=>{
        if (node) node.style.visibility = "";
        onExited == null || onExited(...args);
    };
    const renderBackdrop = (0, $kdEmn.useCallback)((backdropProps)=>/*#__PURE__*/ (0, $8a713af880997588$exports.jsx)("div", {
            ...backdropProps,
            className: (0, (/*@__PURE__*/$parcel$interopDefault($32538ae97b12ecb9$exports)))(`${bsPrefix}-backdrop`, backdropClassName)
        }), [
        backdropClassName,
        bsPrefix
    ]);
    const renderDialog = (dialogProps)=>/*#__PURE__*/ (0, $8a713af880997588$exports.jsx)("div", {
            ...dialogProps,
            ...props,
            className: (0, (/*@__PURE__*/$parcel$interopDefault($32538ae97b12ecb9$exports)))(className, responsive ? `${bsPrefix}-${responsive}` : bsPrefix, `${bsPrefix}-${placement}`),
            "aria-labelledby": ariaLabelledby,
            children: children
        });
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsxs)((0, $8a713af880997588$exports.Fragment), {
        children: [
            !showOffcanvas && (responsive || renderStaticNode) && renderDialog({}),
            /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $c3fef18375c57da0$export$2e2bcd8739ae039).Provider, {
                value: modalContext,
                children: /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $e5d38ff7343f4b58$export$2e2bcd8739ae039), {
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
                    transition: $ba2f91c309a3d2fd$var$DialogTransition,
                    backdropTransition: $ba2f91c309a3d2fd$var$BackdropTransition,
                    renderBackdrop: renderBackdrop,
                    renderDialog: renderDialog
                })
            })
        ]
    });
});
$ba2f91c309a3d2fd$var$Offcanvas.displayName = "Offcanvas";
var $ba2f91c309a3d2fd$export$2e2bcd8739ae039 = Object.assign($ba2f91c309a3d2fd$var$Offcanvas, {
    Body: (0, $631ea95e086ac8c8$export$2e2bcd8739ae039),
    Header: (0, $210483ab9b63be6c$export$2e2bcd8739ae039),
    Title: (0, $879fc4756f3dedb3$export$2e2bcd8739ae039)
});




"use client";
const $e2fc7af2d8db07f6$var$NavbarOffcanvas = /*#__PURE__*/ $kdEmn.forwardRef((props, ref)=>{
    const context = (0, $kdEmn.useContext)((0, $fb1eb812d045ce4f$export$2e2bcd8739ae039));
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $ba2f91c309a3d2fd$export$2e2bcd8739ae039), {
        ref: ref,
        show: !!(context != null && context.expanded),
        ...props,
        renderStaticNode: true
    });
});
$e2fc7af2d8db07f6$var$NavbarOffcanvas.displayName = "NavbarOffcanvas";
var $e2fc7af2d8db07f6$export$2e2bcd8739ae039 = $e2fc7af2d8db07f6$var$NavbarOffcanvas;





var $kdEmn = parcelRequire("kdEmn");



"use client";
const $cb9b0d02c94b5397$var$NavbarText = /*#__PURE__*/ $kdEmn.forwardRef(({ className: className, bsPrefix: bsPrefix, as: Component = "span", ...props }, ref)=>{
    bsPrefix = (0, $311a902b1b368ad8$export$7f387860ebffb32c)(bsPrefix, "navbar-text");
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)(Component, {
        ref: ref,
        className: (0, (/*@__PURE__*/$parcel$interopDefault($32538ae97b12ecb9$exports)))(className, bsPrefix),
        ...props
    });
});
$cb9b0d02c94b5397$var$NavbarText.displayName = "NavbarText";
var $cb9b0d02c94b5397$export$2e2bcd8739ae039 = $cb9b0d02c94b5397$var$NavbarText;



"use client";
const $e956552d9cfa3b9f$var$Navbar = /*#__PURE__*/ $kdEmn.forwardRef((props, ref)=>{
    const { bsPrefix: initialBsPrefix, expand: expand = true, variant: variant = "light", bg: bg, fixed: fixed, sticky: sticky, className: className, // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = "nav", expanded: expanded, onToggle: onToggle, onSelect: onSelect, collapseOnSelect: collapseOnSelect = false, ...controlledProps } = (0, $dcb967d1b34ad4cc$export$2e2bcd8739ae039)(props, {
        expanded: "onToggle"
    });
    const bsPrefix = (0, $311a902b1b368ad8$export$7f387860ebffb32c)(initialBsPrefix, "navbar");
    const handleCollapse = (0, $kdEmn.useCallback)((...args)=>{
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
    const navbarContext = (0, $kdEmn.useMemo)(()=>({
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
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $fb1eb812d045ce4f$export$2e2bcd8739ae039).Provider, {
        value: navbarContext,
        children: /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $7247ea30f013e667$export$2e2bcd8739ae039).Provider, {
            value: handleCollapse,
            children: /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)(Component, {
                ref: ref,
                ...controlledProps,
                className: (0, (/*@__PURE__*/$parcel$interopDefault($32538ae97b12ecb9$exports)))(className, bsPrefix, expand && expandClass, variant && `${bsPrefix}-${variant}`, bg && `bg-${bg}`, sticky && `sticky-${sticky}`, fixed && `fixed-${fixed}`)
            })
        })
    });
});
$e956552d9cfa3b9f$var$Navbar.displayName = "Navbar";
var $e956552d9cfa3b9f$export$2e2bcd8739ae039 = Object.assign($e956552d9cfa3b9f$var$Navbar, {
    Brand: (0, $9149afc1df68fcb2$export$2e2bcd8739ae039),
    Collapse: (0, $944316c4a8838cc0$export$2e2bcd8739ae039),
    Offcanvas: (0, $e2fc7af2d8db07f6$export$2e2bcd8739ae039),
    Text: (0, $cb9b0d02c94b5397$export$2e2bcd8739ae039),
    Toggle: (0, $57159342abc090bc$export$2e2bcd8739ae039)
});




const $3058da285a373a42$export$214ae410b202e65a = ({ user: user, onLoggedOut: onLoggedOut })=>{
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $e956552d9cfa3b9f$export$2e2bcd8739ae039), {
        expand: "lg",
        children: /*#__PURE__*/ (0, $8a713af880997588$exports.jsxs)((0, $fe5feca874a18496$export$2e2bcd8739ae039), {
            children: [
                /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $e956552d9cfa3b9f$export$2e2bcd8739ae039).Brand, {
                    as: (0, $1996ddff484c19ad$export$a6c7ac8248d6e38a),
                    to: "/",
                    children: "MyFlix"
                }),
                /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $e956552d9cfa3b9f$export$2e2bcd8739ae039).Toggle, {
                    "aria-controls": "basic-navbar-nav"
                }),
                /*#__PURE__*/ (0, $8a713af880997588$exports.jsxs)((0, $e956552d9cfa3b9f$export$2e2bcd8739ae039).Collapse, {
                    id: "basic-navbar-nav",
                    children: [
                        /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $64d4dcc57c24a483$export$2e2bcd8739ae039), {
                            className: "me-auto",
                            children: !user ? /*#__PURE__*/ (0, $8a713af880997588$exports.jsxs)((0, $8a713af880997588$exports.Fragment), {
                                children: [
                                    /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $64d4dcc57c24a483$export$2e2bcd8739ae039).Link, {
                                        as: (0, $1996ddff484c19ad$export$a6c7ac8248d6e38a),
                                        to: "/login",
                                        children: "Login"
                                    }),
                                    /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $64d4dcc57c24a483$export$2e2bcd8739ae039).Link, {
                                        as: (0, $1996ddff484c19ad$export$a6c7ac8248d6e38a),
                                        to: "/signup",
                                        children: "Signup"
                                    })
                                ]
                            }) : /*#__PURE__*/ (0, $8a713af880997588$exports.jsxs)((0, $8a713af880997588$exports.Fragment), {
                                children: [
                                    /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $64d4dcc57c24a483$export$2e2bcd8739ae039).Link, {
                                        as: (0, $1996ddff484c19ad$export$a6c7ac8248d6e38a),
                                        to: "/",
                                        children: "Movies"
                                    }),
                                    /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $64d4dcc57c24a483$export$2e2bcd8739ae039).Link, {
                                        as: (0, $1996ddff484c19ad$export$a6c7ac8248d6e38a),
                                        to: "/profile",
                                        children: "Profile"
                                    }),
                                    /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $64d4dcc57c24a483$export$2e2bcd8739ae039).Link, {
                                        onClick: onLoggedOut,
                                        children: "Logout"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0, $8a713af880997588$exports.jsxs)((0, $5cb6493146cca168$export$2e2bcd8739ae039), {
                            className: "d-flex",
                            children: [
                                /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $d2abd9a77a568def$export$2e2bcd8739ae039), {
                                    type: "search",
                                    placeholder: "Search",
                                    className: "me-2",
                                    "aria-label": "Search"
                                }),
                                /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $d6a6e6534be31a95$export$2e2bcd8739ae039), {
                                    variant: "primary",
                                    children: "Search"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
$3058da285a373a42$export$214ae410b202e65a.propTypes = {
    user: (0, (/*@__PURE__*/$parcel$interopDefault($5cea9eb9ce58b247$exports))).object,
    onLoggedOut: (0, (/*@__PURE__*/$parcel$interopDefault($5cea9eb9ce58b247$exports))).func.isRequired
};




var $kdEmn = parcelRequire("kdEmn");





parcelRequire("kdEmn");




const $162143cff294a16b$export$d2ae44ae5a7d01ef = ({ user: user, favoriteMovies: favoriteMovies })=>{
    if (!favoriteMovies || favoriteMovies.length === 0) return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)("div", {
        children: "No Favorite Movies"
    });
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsxs)((0, $44522508fc1733d1$export$2e2bcd8739ae039), {
        children: [
            /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $ac8c60cc315fef4d$export$2e2bcd8739ae039), {
                md: 12,
                children: /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)("h3", {
                    children: "My Favorite Movies"
                })
            }),
            /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $44522508fc1733d1$export$2e2bcd8739ae039), {
                children: favoriteMovies.map((movie)=>/*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $ac8c60cc315fef4d$export$2e2bcd8739ae039), {
                        xs: 12,
                        sm: 6,
                        md: 4,
                        lg: 3,
                        children: /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $ed6d795dcad1f0e2$export$9bd698419030e459), {
                            movie: movie,
                            isFavorite: user.favoriteMovies.includes(movie.id),
                            onFavoriteChange: ()=>{}
                        })
                    }, movie.id))
            })
        ]
    });
};
$162143cff294a16b$export$d2ae44ae5a7d01ef.propTypes = {
    favoriteMovies: (0, (/*@__PURE__*/$parcel$interopDefault($5cea9eb9ce58b247$exports))).array.isRequired,
    user: (0, (/*@__PURE__*/$parcel$interopDefault($5cea9eb9ce58b247$exports))).object.isRequired
};



parcelRequire("kdEmn");




const $be8f04232f83e464$export$75543167ef08d8e5 = ({ formData: formData, handleUpdate: handleUpdate, handleSubmit: handleSubmit, handleDeleteAccount: handleDeleteAccount })=>{
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $44522508fc1733d1$export$2e2bcd8739ae039), {
        children: /*#__PURE__*/ (0, $8a713af880997588$exports.jsxs)((0, $5cb6493146cca168$export$2e2bcd8739ae039), {
            onSubmit: handleSubmit,
            children: [
                /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)("h3", {
                    children: "Update profile information"
                }),
                /*#__PURE__*/ (0, $8a713af880997588$exports.jsxs)((0, $5cb6493146cca168$export$2e2bcd8739ae039).Group, {
                    className: "mb-2",
                    children: [
                        /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $5cb6493146cca168$export$2e2bcd8739ae039).Label, {
                            children: "Username:"
                        }),
                        /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $5cb6493146cca168$export$2e2bcd8739ae039).Control, {
                            type: "text",
                            minLength: 4,
                            value: formData.username,
                            onChange: (e)=>handleUpdate(e),
                            required: true
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $8a713af880997588$exports.jsxs)((0, $5cb6493146cca168$export$2e2bcd8739ae039).Group, {
                    className: "mb-2",
                    children: [
                        /*#__PURE__*/ (0, $8a713af880997588$exports.jsxs)((0, $5cb6493146cca168$export$2e2bcd8739ae039).Label, {
                            children: [
                                "Password:",
                                /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)("p", {
                                    children: "Your new password must be at least 8 characters long."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $5cb6493146cca168$export$2e2bcd8739ae039).Control, {
                            type: "password",
                            minLength: 8,
                            value: formData.password,
                            onChange: (e)=>handleUpdate(e),
                            required: true
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $8a713af880997588$exports.jsxs)((0, $5cb6493146cca168$export$2e2bcd8739ae039).Group, {
                    className: "mb-2",
                    children: [
                        /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $5cb6493146cca168$export$2e2bcd8739ae039).Label, {
                            children: " Email: "
                        }),
                        /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $5cb6493146cca168$export$2e2bcd8739ae039).Control, {
                            type: "email",
                            value: formData.email,
                            onChange: (e)=>handleUpdate(e),
                            required: true
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $8a713af880997588$exports.jsxs)((0, $5cb6493146cca168$export$2e2bcd8739ae039).Group, {
                    className: "mb-4",
                    children: [
                        /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $5cb6493146cca168$export$2e2bcd8739ae039).Label, {
                            children: "Birthdate:"
                        }),
                        /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $5cb6493146cca168$export$2e2bcd8739ae039).Control, {
                            type: "date",
                            value: formData.birthday ? formData.birthday.slice(0, 10) : "",
                            onChange: (e)=>handleUpdate(e),
                            required: true
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $d6a6e6534be31a95$export$2e2bcd8739ae039), {
                    variant: "primary",
                    type: "submit",
                    children: "Submit Changes"
                }),
                /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $d6a6e6534be31a95$export$2e2bcd8739ae039), {
                    onClick: ()=>handleDeleteAccount(),
                    variant: "outline-secondary",
                    className: "mx-3",
                    children: "Delete account"
                })
            ]
        })
    });
};
$be8f04232f83e464$export$75543167ef08d8e5.propTypes = {
    formData: (0, (/*@__PURE__*/$parcel$interopDefault($5cea9eb9ce58b247$exports))).object.isRequired,
    handleUpdate: (0, (/*@__PURE__*/$parcel$interopDefault($5cea9eb9ce58b247$exports))).func.isRequired,
    handleSubmit: (0, (/*@__PURE__*/$parcel$interopDefault($5cea9eb9ce58b247$exports))).func.isRequired,
    handleDeleteAccount: (0, (/*@__PURE__*/$parcel$interopDefault($5cea9eb9ce58b247$exports))).func.isRequired
};




var $kdEmn = parcelRequire("kdEmn");

const $ec76aaae44f89aa5$export$c6ede3bfc40c5e4b = ({ email: email, username: username })=>{
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const username = (0, $kdEmn.useState)(storedUser.username);
    const email = (0, $kdEmn.useState)(storedUser.email);
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, $8a713af880997588$exports.jsxs)("p", {
                children: [
                    "Username: ",
                    username.username,
                    " "
                ]
            }),
            /*#__PURE__*/ (0, $8a713af880997588$exports.jsxs)("p", {
                children: [
                    "Email: ",
                    email.email,
                    " "
                ]
            })
        ]
    });
};
$ec76aaae44f89aa5$export$c6ede3bfc40c5e4b.propTypes = {
    email: (0, (/*@__PURE__*/$parcel$interopDefault($5cea9eb9ce58b247$exports))).string.isRequired,
    username: (0, (/*@__PURE__*/$parcel$interopDefault($5cea9eb9ce58b247$exports))).string.isRequired
};


const $0af643f57e64ae2e$export$b378b4d12a0dcbde = ({ localUser: localUser, movies: movies, token: token })=>{
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const [username, setUsername] = (0, $kdEmn.useState)(storedUser.username);
    const [email, setEmail] = (0, $kdEmn.useState)(storedUser.email);
    const [password, setPassword] = (0, $kdEmn.useState)(storedUser.password);
    const [birthday, setBirthdate] = (0, $kdEmn.useState)(storedUser.birthDate);
    const [user, setUser] = (0, $kdEmn.useState)();
    const favoriteMovies = user && user.favoriteMovies ? movies.filter((m)=>user.favoriteMovies.includes(m.title)) : [];
    if (!storedUser) return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)("div", {
        children: "Loading..."
    });
    const formData = {
        Username: username,
        Password: password,
        Email: email,
        Birthday: birthday
    };
    const handleSubmit = (event)=>{
        event.preventDefault(event);
        fetch(`https://my-flix-db-975de3fb6719.herokuapp.com/users/${user.Username}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }).then((response)=>{
            if (response.ok) {
                alert("Update successful");
                return response.json();
            }
            alert("Update failed");
            throw new Error("Update failed");
        }).then((updatedUser)=>{
            localStorage.setItem("user", JSON.stringify(updatedUser));
            setUser(updatedUser);
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
        fetch(`https://my-flix-db-975de3fb6719.herokuapp.com/users/${storedUser.Username}`, {
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
    (0, $kdEmn.useEffect)(()=>{
        if (!token) return;
        fetch(`https://my-flix-db-975de3fb6719.herokuapp.com/users/${storedUser.username}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response)=>response.json()).then((data1)=>{
            console.log("User data fetched:", data1);
            console.log("Profile Saved User: " + JSON.stringify(data1));
            setUser(data1);
        }).catch((error)=>{
            console.error("Error fetching user data:", error);
        });
    }, [
        storedUser.username,
        token
    ]);
    (0, $kdEmn.useEffect)(()=>{
        console.log("User state:", user); // Add this log
    }, [
        user
    ]);
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsxs)((0, $fe5feca874a18496$export$2e2bcd8739ae039), {
        children: [
            /*#__PURE__*/ (0, $8a713af880997588$exports.jsxs)((0, $44522508fc1733d1$export$2e2bcd8739ae039), {
                children: [
                    /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $de310a2e740b7385$export$2e2bcd8739ae039), {
                        className: "mb-5",
                        children: /*#__PURE__*/ (0, $8a713af880997588$exports.jsxs)((0, $de310a2e740b7385$export$2e2bcd8739ae039).Body, {
                            children: [
                                /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $de310a2e740b7385$export$2e2bcd8739ae039).Title, {
                                    children: "My Profile"
                                }),
                                /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $de310a2e740b7385$export$2e2bcd8739ae039).Text, {
                                    children: /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $ec76aaae44f89aa5$export$c6ede3bfc40c5e4b), {
                                        username: username,
                                        email: email
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $de310a2e740b7385$export$2e2bcd8739ae039), {
                        className: "mb-5",
                        children: /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $de310a2e740b7385$export$2e2bcd8739ae039).Body, {
                            children: /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $be8f04232f83e464$export$75543167ef08d8e5), {
                                formData: formData,
                                handleUpdate: handleUpdate,
                                handleSubmit: handleSubmit,
                                handleDeleteAccount: handleDeleteAccount
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $44522508fc1733d1$export$2e2bcd8739ae039), {
                children: /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $ac8c60cc315fef4d$export$2e2bcd8739ae039), {
                    className: "mb-5",
                    xs: 12,
                    md: 8,
                    children: user && favoriteMovies.length > 0 ? /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $162143cff294a16b$export$d2ae44ae5a7d01ef), {
                        user: user,
                        favoriteMovies: favoriteMovies
                    }) : /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)("p", {
                        children: "No favorite movies found."
                    })
                })
            })
        ]
    });
};
$0af643f57e64ae2e$export$b378b4d12a0dcbde.propTypes = {
    localUser: (0, (/*@__PURE__*/$parcel$interopDefault($5cea9eb9ce58b247$exports))).object.isRequired,
    movies: (0, (/*@__PURE__*/$parcel$interopDefault($5cea9eb9ce58b247$exports))).array.isRequired,
    token: (0, (/*@__PURE__*/$parcel$interopDefault($5cea9eb9ce58b247$exports))).string.isRequired
};


const $4095be57f10f1914$export$fa32cd27347e212e = ()=>{
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const [movies, setMovies] = (0, $kdEmn.useState)([]);
    const [user, setUser] = (0, $kdEmn.useState)(storedUser ? storedUser : null);
    const [token, setToken] = (0, $kdEmn.useState)(storedToken ? storedToken : null);
    const [searchQuery, setSearchQuery] = (0, $kdEmn.useState)("");
    const [filteredMovies, setFilteredMovies] = (0, $kdEmn.useState)([]);
    (0, $kdEmn.useEffect)(()=>{
        if (!token) {
            console.log("No token, skipping fetch.");
            return;
        }
        console.log("Fetching movies with token:", token);
        fetch("https://my-flix-db-975de3fb6719.herokuapp.com/movies", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response)=>response.json()).then((data)=>{
            console.log("Movie data", data);
            const moviesFromApi = data.map((movie)=>{
                return {
                    id: movie._id,
                    title: movie.Title,
                    image: movie.ImagePath,
                    description: movie.Description,
                    director: movie.Director?.Name || "Unknown Director",
                    bio: movie.Director?.Bio || "Uknown Bio",
                    birthyear: movie.Director?.Birthyear || "Unknown Birthyear",
                    deathyear: movie.Director?.Deathyear || "Unknown Deathyear",
                    genre: movie.Genre?.Name || "Unknown Genre",
                    featured: movie.Featured
                };
            });
            setMovies(moviesFromApi);
            setFilteredMovies(moviesFromApi);
        });
    }, [
        token
    ]);
    const handleSearch = (e)=>{
        const query = e.target.value;
        setSearchQuery(query);
        const filtered = movies.filter((movie)=>{
            return movie.title.toLowerCase().includes(query.toLowerCase()) || movie.genre.toLowerCase().includes(query.toLowerCase()) || movie.director.toLowerCase().includes(query.toLowerCase());
        });
        setFilteredMovies(filtered);
    };
    (0, $kdEmn.useEffect)(()=>{
        setFilteredMovies(movies);
    }, [
        movies
    ]);
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsxs)((0, $1996ddff484c19ad$export$9ba4e89fdfa1fc54), {
        children: [
            /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $3058da285a373a42$export$214ae410b202e65a), {
                user: user,
                query: searchQuery,
                handleSearch: handleSearch,
                onLoggedOut: ()=>{
                    setUser(null);
                    setToken(null);
                    localStorage.clear();
                }
            }),
            /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $44522508fc1733d1$export$2e2bcd8739ae039), {
                className: "justify-content-md-center",
                children: /*#__PURE__*/ (0, $8a713af880997588$exports.jsxs)((0, $a755294db44273f2$export$3565eb3d00ca5a74), {
                    children: [
                        /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $a755294db44273f2$export$e7b0ac011bb776c6), {
                            path: "/signup",
                            element: user ? /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $a755294db44273f2$export$444b3ab0cb9aec40), {
                                to: "/"
                            }) : /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $ac8c60cc315fef4d$export$2e2bcd8739ae039), {
                                md: 5,
                                children: /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $50ab2275ea3a897f$export$25f3896ea1e09820), {})
                            })
                        }),
                        /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $a755294db44273f2$export$e7b0ac011bb776c6), {
                            path: "/login",
                            element: user ? /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $a755294db44273f2$export$444b3ab0cb9aec40), {
                                to: "/"
                            }) : /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $ac8c60cc315fef4d$export$2e2bcd8739ae039), {
                                md: 5,
                                children: /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $38c725eff0fb51d9$export$1582048ca8384970), {
                                    onLoggedIn: (user, token)=>{
                                        setUser(user);
                                        setToken(token);
                                    }
                                })
                            })
                        }),
                        /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $a755294db44273f2$export$e7b0ac011bb776c6), {
                            path: "/",
                            element: !user ? /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $a755294db44273f2$export$444b3ab0cb9aec40), {
                                to: "/login",
                                replace: true
                            }) : filteredMovies.length === 0 ? /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $ac8c60cc315fef4d$export$2e2bcd8739ae039), {
                                children: "The list is empty!"
                            }) : /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $44522508fc1733d1$export$2e2bcd8739ae039), {
                                children: filteredMovies.map((movie)=>/*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $ac8c60cc315fef4d$export$2e2bcd8739ae039), {
                                        className: "mb-5",
                                        md: 3,
                                        sm: 12,
                                        children: /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $ed6d795dcad1f0e2$export$9bd698419030e459), {
                                            movie: movie,
                                            isFavorite: user.favoriteMovies && Array.isArray(user.favoriteMovies) && user.favoriteMovies.includes(movie.title)
                                        })
                                    }, movie.id))
                            })
                        }),
                        /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $a755294db44273f2$export$e7b0ac011bb776c6), {
                            path: "/movies/:movieId",
                            element: !user ? /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $a755294db44273f2$export$444b3ab0cb9aec40), {
                                to: "/login",
                                replace: true
                            }) : filteredMovies.length === 0 ? /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $ac8c60cc315fef4d$export$2e2bcd8739ae039), {
                                children: "The list is empty!"
                            }) : /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $ac8c60cc315fef4d$export$2e2bcd8739ae039), {
                                md: 8,
                                children: /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $f418e74ea7e34046$export$78d497080ea8f89a), {
                                    movies: filteredMovies
                                })
                            })
                        }),
                        /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $a755294db44273f2$export$e7b0ac011bb776c6), {
                            path: "/profile",
                            element: !user ? /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $a755294db44273f2$export$444b3ab0cb9aec40), {
                                to: "/login",
                                replace: true
                            }) : /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $ac8c60cc315fef4d$export$2e2bcd8739ae039), {
                                md: 8,
                                children: /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $0af643f57e64ae2e$export$b378b4d12a0dcbde), {
                                    localUser: user,
                                    movies: filteredMovies,
                                    token: token
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
const $c966a1438e68d26f$var$MyFlixApp = ()=>{
    return /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $fe5feca874a18496$export$2e2bcd8739ae039), {
        children: /*#__PURE__*/ (0, $8a713af880997588$exports.jsx)((0, $4095be57f10f1914$export$fa32cd27347e212e), {})
    });
};
// Finds the root of your app
const $c966a1438e68d26f$var$container = document.querySelector("#root");
const $c966a1438e68d26f$var$root = (0, $b8d271dd7140d409$export$882461b6382ed46c)($c966a1438e68d26f$var$container);
// Tells React to render your app in the root DOM element
$c966a1438e68d26f$var$root.render(/*#__PURE__*/ (0, $8a713af880997588$exports.jsx)($c966a1438e68d26f$var$MyFlixApp, {}));


//# sourceMappingURL=index.081def3e.js.map
