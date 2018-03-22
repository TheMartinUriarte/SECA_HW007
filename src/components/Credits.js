import React, { Component } from 'react'
import CreditsList from './CreditsList'

class Credits extends Component {
    render() {
        return(
            <div>
                <p>id: {this.props.credits.id}</p>
                <p>description: {this.props.credits.description}</p>
                <p>amount: {this.props.credits.amount}</p>
                <p>date: {this.props.credits.date}</p>
                <br />
            </div>
        )
    }
}

export default Credits