
    function isClass (func) {
        // /^class\s/ means  `class ` (with whitespace)
        return typeof func === 'function' && /^class\s/.test(Function.prototype.toString.call(func))
    }

    function isStatelesssComponent (func) {
        return !isClass(func) && typeof func === 'function'
    }