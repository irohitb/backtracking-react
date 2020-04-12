
// React create element and Render
(() => {
    let rootDOMElement , rootReactElement;
    const REACT_CLASS = 'REACT_CLASS' // Special type of React class we are making

    function elementHandler (el, props, children) {
        // checking if element is class 
            if (isClass(el)) {
                return HandleClass(el, props, children)
            } 
            // if element is function, pass props to the function 
            if (isStatelesssComponent(el)) {
                return el(props)
            } else {
                // usually markup with properties like text, nested msrkup, events
                return handleElement(el, props, children)
        }
    }

    function handleElement (el, props, children) {
        // create a dom element
        const anElement = document.createElement(el);
        // for each child it will check the subtreess
        // example would be current create element having mested create element 
        // the children here are going to be return of those nested create element 
        children.forEach(child => appendChildren(anElement, child))
        if (props) appendProp(anElement, props)
        return anElement // <h1> Something </h1> typeof this is object
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

    function appendChildren (element, child, children) {
        if (child.type === REACT_CLASS) {
            appendChildren(element, child.render())
        } else if (typeof child === 'object') {     // React create element returns object
           return element.appendChild(child)
         // else if it is a plain markup return this  
        } else {
            return element.innerHTML += child
        }
    }

    function HandleClass (classComponent, props, children) {
        const reactElement = new classComponent(props)
        // if it is a class we are setting the type of the render element to class
        // storing these value in global variable so that whenever state changes we can re render
        reactElement.type = REACT_CLASS 
        reactElement.children = children
        return reactElement
    }

    class Component {
        constructor(props) {
            this.props = props
        }

        setState(state) {
            // merging new state and old state
            this.state = {...this.state, ...state}
            // whenever state changes re-render the application
            reRender()
        }
    }

    function reRender () {
        while(rootDOMElement.hasChildNodes()) {
            rootDOMElement.removeChild(rootDOMElement.lastChild)
        }
        ReactDOM.render(rootReactElement, rootDOMElement)
    }
    
    function createElement (el, props, ...children ) {
        return elementHandler(el,props,children)
    }
    window.React = {
        createElement, 
        Component
    }
    window.ReactDOM = {
        // ReactDOM.render takes two arguments, component to render and position of the component where it should be rendered
        render: (el, domEl) => {
            // domel is the main document.getElementById('root')
            // Pressuming element passed is only class and have render method
            rootDOMElement = domEl
            rootReactElement = el
            domEl.appendChild(el.render())
        }
    };
})();





