(() => {
    function div (children) {
        const aDiv = document.createElement('div');
        aDiv.innerHTML = children
        return aDiv
    }
    function createElement (el, props, ...children ) {
        return div(children)
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