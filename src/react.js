
// React create element and Render
(() => {
    function div (el, children) {
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





