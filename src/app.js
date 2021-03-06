class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0
        }
    }

    onPlusClick () {
        this.setState({value: this.state.value + 1})
    }

    onMinusClick () {
        this.setState({value: this.state.value - 1})
    }


    render () {
        return React.createElement('div', null, 
        React.createElement('h1', null, 'This is famour foo counter app'),
        React.createElement('h1', null, `Counter Value: ${this.state.value}`),
        React.createElement('button', {onClick: this.onPlusClick.bind(this)}, '+'), //TODO: What does .bind here mean
        React.createElement('button', {onClick: this.onMinusClick.bind(this)}, '-')  //TODO: What does .bind here mean
        )
    }
}

// Route Class with two counters 

class Root extends React.Component {
    render() {
        return React.createElement('div', null, 
        React.createElement(Counter, null, null),
        React.createElement(Counter, null, null))
    }
}


const counter = React.createElement(Root, null, null)
ReactDOM.render(counter, document.getElementById('root'))