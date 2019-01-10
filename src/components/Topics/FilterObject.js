import React, { Component } from 'react'

class FilterObject extends Component {
    constructor() {
        super()

        this.state = {
            unFilteredArray: [
                {
                    name: 'Jimmy Joe',
                    title: 'Hack0r',
                    age: 12,
                },
                {
                    name: 'Jeremy Schrader',
                    age: 24,
                    hairColor: 'brown',
                },
                {
                    name: 'Carly Armstrong',
                    title: 'CEO',
                },
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

    handleClick(prop) {
        let arr = this.state.unFilteredArray

        // let filtered = []
        // for (let i = 0; i < arr.length; i++) {
        //     if (arr[i].hasOwnProperty(prop)) {
        //         filtered.push(arr[i])
        //     }
        // }

        this.setState({
            filteredArray: arr.filter((e) => e.hasOwnProperty(prop)),
        })
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">
                    {JSON.stringify(this.state.unFilteredArray)}
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
                <span className="resultsBox filterObjectRB">
                    Filtered: {JSON.stringify(this.state.filteredArray)}
                </span>
            </div>
        )
    }
}

export default FilterObject
