import React, { Component } from 'react'
import DebitsList from './DebitsList.js'

class Debits extends Component {
    render() {
        return(
            <div>
                <p>ID: {this.props.debit.id}</p>
                <p>Description: {this.props.debit.description}</p>
                <p>Amount: {this.props.debit.amount}</p>
                <p>Date: {this.props.debit.date}</p>
                <br />
            </div>
        )
    }
}

export default Debits