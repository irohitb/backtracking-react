
// React create element and Render
(() => {
    function div (el, props, children) {
        // checking if element is class 
            if (isClass(el)) {
                return HandleClass(el, props)
            } 
            if (typeof el === 'function') {
                return el(props)
            } else {
                return handleElement(el, props, children)
        }
    }

    function handleElement (el, props, children) {
        const anElement = document.createElement(el);
        children.forEach(element => {
            if (typeof element === 'object') {
                anElement.appendChild(element)
            } else {
                anElement.innerHTML += element
            }
        })
        if (props) {
            Object.keys(props).forEach((propsElement) => {
                if (/^on/.test(propsElement)) {
                    anElement.addEventListener(propsElement.substring(2).toLowerCase(), 
                    props[propsElement])
                } else {
                    anElement.setAttribute(propsElement, props[propsElement])
                }
            })
        }
        return anElement
    }

    function HandleClass (classComponent, props) {
        const component = new classComponent(props)
        return component.render()
    }

    class Component {
        constructor(props) {
            this.props = props
        }
    }
    
    function createElement (el, props, ...children ) {
        return div(el,props,children)
    }
    window.React = {
        createElement, 
        Component
    }
    window.ReactDOM = {
        // ReactDOM.render takes two arguments, component to render and position of the component where it should be rendered
        render: (el, domEl) => {
            domEl.appendChild(el)
        }
    };
})();





