
    function isClass (func) {
        // /^class\s/ means we want to match non-whitespace at the beginning of string
        return typeof func === 'function' && /^class\s/.test(Function.prototype.toString.call(func))
    }

    function isStatelesssComponent (func) {
        return !isClass(func) && typeof func === 'function'
    }