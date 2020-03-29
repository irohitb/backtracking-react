const hello = ({name}) => {
    return React.createElement('h2', null, `hello ${name}`)
}

class Hello extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        return React.createElement('div', null, `hello ${this.props.name}`)
    }
}

const helloWorld = React.createElement(Hello, {name: 'Rohit Class'}, null);
const helloWorld2 = React.createElement(hello, {name: 'Rohit'}, null);
const regularDiv = React.createElement('div', null, `regular div`)
const parent = React.createElement('div', null, 
    helloWorld,
    helloWorld2,
    regularDiv, 
    'I am just a text'
)
ReactDOM.render(parent, document.getElementById('root'));