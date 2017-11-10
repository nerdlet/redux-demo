import React, { Component } from 'react';
import {createStore } from 'redux';

class ReduxDemo extends Component {
	render(){

		//step 2 :reducer:state n action
		const reducer = function(state, action){
			if(action.type === "ATTACK"){
				return action.payload
			}
			if(action.type === "GREENATTACK"){
				return action.payload
			}
			return state;
		}


		//STEP1 :CREATE STORE:REDUCER N STATE
		
		const store = createStore(reducer,"Peace");

		
		//step3 subscribe
		store.subscribe(() => {
			console.log("Store is now", store.getState());
		})

		//STEP 4:dispatch action
		store.dispatch({type:"ATTACK", payload: "Iron Man"})
		store.dispatch({type:"GREENATTACK", payload: "Hulk"})
		
		return(
			<div>test project here</div>
		);
	}
}

export default ReduxDemo;