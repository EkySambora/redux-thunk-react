import React from 'react';
import './App.css';
import Dad from './components/Dad';
import { connect } from 'react-redux';
import Contact from './components/contact';


const App = (props) => {
  
  return (
    <>
      {props.counter}
      <Dad increment={props.increment} decrement={props.decrement} />
      <Contact />
    </>
  )
}

const mapStateToProps = (state) => ({
  counter : state.counter
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

export default connect(mapStateToProps, dispatchToProps) (App)
