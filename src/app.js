const hello = ({name}) => {
    return React.createElement('h2', null, `${name}`)
}

class Hello extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        return React.createElement('button', {onClick: this.props.onClick}, `${this.props.name}`)
    }
}

const helloWorld = React.createElement(Hello, {name: 'Rohit Class', onClick: () => alert('Attribute on click')}, null);
const helloWorld2 = React.createElement(hello, {name: 'Rohit Function'}, null);

const parent = React.createElement('div', null, 
    helloWorld,
    helloWorld2
)
ReactDOM.render(parent, document.getElementById('root'));


// 