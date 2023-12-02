import React, { Component } from 'react';

class App extends Component{
    constructor(){
        super();
        this.state = {
            number: 0
        }

        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(){
        this.setState({
            number : 1
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.number}</h1>
                <button onClick={this.clickHandler}>Click me!</button>
            </div>
        )
    }
}

export default App