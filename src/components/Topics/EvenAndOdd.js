import React, { Component } from 'react'

class EvenAndOdd extends Component {
    constructor() {
        super()

        // state
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: '',
        }

        // binds
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    // handle input changes
    handleChange(e) {
        this.setState({ userInput: e })
    }

    handleClick(input) {
        let arr = input.split(',')

        // let evens = []
        // let odds = []
        // for (let i = 0; i < arr.length; i++) {
        //     if (arr[i] % 2 === 0) {
        //         evens.push(parseInt(arr[i], 10))
        //     } else {
        //         odds.push(parseInt(arr[i], 10))
        //     }
        // }

        // this.setState({ evenArray: evens, oddArray: odds })

        this.setState({
            evenArray: arr.filter((e) => parseInt(e, 10) % 2 === 0),
            oddArray: arr.filter((e) => parseInt(e, 10) % 2 !== 0),
        })
    }

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Even And Odd</h4>
                <input
                    type="text"
                    className="inputLine"
                    onChange={(e) => this.handleChange(e.target.value)}
                />
                <button
                    className="confirmationButton"
                    onClick={() => this.handleClick(this.state.userInput)}
                >
                    Split
                </button>
                <span className="resultsBox">
                    Evens: {JSON.stringify(this.state.evenArray)}
                </span>
                <span className="resultsBox">
                    Odds: {JSON.stringify(this.state.oddArray)}
                </span>
            </div>
        )
    }
}

export default EvenAndOdd
