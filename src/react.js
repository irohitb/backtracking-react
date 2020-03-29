
// React create element and Render
(() => {
    function div (el, children) {
        // checking if element is class 
            if (isClass(el)) {
                return HandleClass(el)
            } 
            if (typeof el === 'function') {
                return el()
            } else {
                return handleElement(el, children)
        }
    }

    function handleElement (el, children) {
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

    function HandleClass (classComponent) {
        const component = new classComponent()
        return component.render()
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





