import React, { Component } from 'react'

class Sum extends Component {
    constructor() {
        super()

        this.state = {
            number1: 0,
            number2: 0,
            sum: null,
        }

        this.handleChange1 = this.handleChange1.bind(this)
        this.handleChange2 = this.handleChange2.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange1(e) {
        this.setState({ number1: e })
    }

    handleChange2(e) {
        this.setState({ number2: e })
    }

    handleClick(x, y) {
        this.setState({ sum: parseInt(x, 10) + parseInt(y, 10) })
    }

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input
                    type="text"
                    className="inputLine"
                    onChange={(e) => this.handleChange1(e.target.value)}
                />
                <input
                    type="text"
                    className="inputLine"
                    onChange={(e) => this.handleChange2(e.target.value)}
                />
                <button
                    className="confirmationButton"
                    onClick={() =>
                        this.handleClick(this.state.number1, this.state.number2)
                    }
                >
                    Sum
                </button>
                <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum
