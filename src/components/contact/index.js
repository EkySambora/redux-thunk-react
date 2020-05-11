import React from 'react'
import {connect} from 'react-redux'
import {Button, Title, WrapperButton} from './style.js'

const Contact = ({counter, increment, decrement}) => {
    return (
        <div>
            <Title>{counter}</Title>
            <WrapperButton>
                <Button plus onClick={increment}>Plus</Button>
                <Button onClick={decrement}>Minus</Button>
            </WrapperButton>
        </div>
    )
}
const mapStateToProps = (state) => ({
    counter: state.counter
})

const actionIncrement = () => dispatch => {
    setTimeout(() => dispatch({type: "INCREMENT_COUNTER"}), 2000)
}
  
const actionDecrement = () => dispatch => {
    setTimeout(()=> dispatch({type: "DECREMENT_COUNTER"}), 2000)
}

const dispatchToProps = (dispatch) => ({
    increment : () => dispatch(actionIncrement()),
    decrement: () => dispatch(actionDecrement())
})

export default connect(mapStateToProps, dispatchToProps) (Contact)