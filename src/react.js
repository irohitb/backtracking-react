
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
        children.forEach(child => appendChild(anElement, child))
        if (props) appendProp(anElement, props)
        return anElement
    }

    function appendProp (element, props) {
        Object.keys(props).forEach((propsElement) => {
            if (DoesHaveEventListener(propsElement)) {
                return element.addEventListener(propsElement.substring(2).toLowerCase(), 
                props[propsElement])
            } else {
                return element.setAttribute(propsElement, props[propsElement])
            }
        })
    }

    function appendChild (element, child) {
        if (typeof child === 'object') {
           return element.appendChild(child)
        } else {
            return element.innerHTML += child
        }
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





