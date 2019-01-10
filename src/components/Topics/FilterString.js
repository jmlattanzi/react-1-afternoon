import React, { Component } from 'react'

class FilterString extends Component {
    constructor() {
        super()

        this.state = {
            unfilteredArray: [
                'Clem Fandango',
                'Una Length',
                'Baz Ravish',
                'Iqbal Achieve',
                'Max Gland',
                'Besus Fufoon',
                'Clench Duncan',
            ],
            userInput: '',
            filteredArray: [],
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(e) {
        this.setState({ userInput: e })
    }

    handleClick(input) {
        let filtered = []

        filtered = this.state.unfilteredArray.filter((e) => {
            return e.startsWith(input)
        })

        this.setState({ filteredArray: filtered })
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">
                    {JSON.stringify(this.state.unfilteredArray)}
                </span>
                <input
                    type="text"
                    className="inputLine"
                    onChange={(e) => this.handleChange(e.target.value)}
                />
                <button
                    className="confirmationButton"
                    onClick={() => this.handleClick(this.state.userInput)}
                >
                    Filter
                </button>
                <span className="resultsBox filterStringRB">
                    Filtered Names: {JSON.stringify(this.state.filteredArray)}
                </span>
            </div>
        )
    }
}

export default FilterString
