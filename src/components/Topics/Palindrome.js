import React, { Component } from 'react'

class Palindrome extends Component {
    constructor() {
        super()

        this.state = {
            userInput: '',
            palindrome: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(e) {
        this.setState({ userInput: e })
    }

    handleClick(input) {
        if (
            input
                .split('')
                .reverse()
                .join('')
                .toString() === input
        ) {
            this.setState({ palindrome: 'true' })
        } else {
            this.setState({ palindrome: 'false' })
        }
    }

    render() {
        return (
            <div className="puzzleBox palindromePB">
                <h4>Palindrome</h4>
                <input
                    type="text"
                    className="inputLine"
                    onChange={(e) => this.handleChange(e.target.value)}
                />
                <button
                    className="confirmationButton"
                    onClick={() => this.handleClick(this.state.userInput)}
                >
                    Check
                </button>
                <span className="resultsBox">
                    Palindrome: {this.state.palindrome}
                </span>
            </div>
        )
    }
}

export default Palindrome
