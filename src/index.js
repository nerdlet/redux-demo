
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import myApp from './reducers';
import Results from './components/results';
import Header from './components/header';
import Content from './components/content';
//import registerServiceWorker from './registerServiceWorker';

//CREATE STORE HERE
let store = createStore(myApp);

function render() {
	ReactDOM.render(
		<div className ="container">
			<Header title="TImeline" />
		
			<Header title="Profile" 
		
			Header title="Settings" />
		
			<Header title="Chat" />

			<Content activity={activity} />

		

			<App store={store} />
			<hr/>
			<Results store={store}/>
		</div>,
		 document.getElementById('root')
	);

}


//CREATE SUBSCRIBE
store.subscribe(render);

render();
