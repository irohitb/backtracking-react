
// React create element and Render
(() => {
    function div (el, children) {
        // checking if element is class 
            if (isClass(el)) {
                // initiate a class 
                const component = new el()
                return component.render()
            } 
            if (typeof el === 'function') {
                return el()
            } else {
            const anElement = document.createElement(el);
            children.forEach(element => {
                if (typeof element === 'object') {
                    anElement.appendChild(element)
                } else {
                    anElement.innerHTML += element
                }
            })
            return anElement
        }
    }

    function isClass (func) {
        // /^class\s/ means we want to match non-whitespace at the beginning of string
        return typeof func === 'function' && /^class\s/.test(Function.prototype.toString.call(func))
    }
    
    function createElement (el, props, ...children ) {
        return div(el, children)
    }
    window.React = {
        createElement
    }
    window.ReactDOM = {
        // ReactDOM.render takes two arguments, component to render and position of the component where it should be rendered
        render: (el, domEl) => {
            domEl.appendChild(el)
        }
    };
})();





