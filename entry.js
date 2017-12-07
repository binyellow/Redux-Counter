import React,{Component} from 'react'
import ReactDom from 'react-dom'
import {createStore} from 'redux'
function add1(){
    return {type:"ADD"}
}
function dec1(){
    return {type:"DEC"}
}
class Counter extends Component{
    constructor(props){
        super(props)
    }
    add() { 
        store.dispatch(add1())//调用类外部的方法要加括号
    }
    dec() { 
        store.dispatch({type:"DEC"})
    }
    render(){
        return(
            <div>
                <p>{this.props.val}</p>
                <button onClick={this.add}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        )
    }
}
function reducer(state=0,action){
    switch (action.type){
        case "ADD":
            return state+1;
        case "DEC":
            return state-1;
        default :
            return state;
    }
}
const store = createStore(reducer);
function render(){
    ReactDom.render(<Counter val={store.getState()}/>,document.getElementById("root"))
}
render()
store.subscribe(render)