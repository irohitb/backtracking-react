const ReturnJustHello = () => {
    return React.createElement('h2', null, 'hello')
}

class Hello {
    render () {
        return React.createElement('div', null, 'hello Class')
    }
}

const helloWorld = React.createElement(Hello, null, null);
const helloWorld2 = React.createElement(ReturnJustHello, null, null);
const regularDiv = React.createElement('div', null, `regular div`)
const parent = React.createElement('div', null, 
    helloWorld,
    helloWorld2,
    regularDiv, 
    'I am just a text'
)
ReactDOM.render(parent, document.getElementById('root'));