import React,{ Component } from 'react';

class Results extends Component{
	constructor(props){
		super(props);
		this.store =this.props.store;
	}

	voteAngularInPercentage(){
		if(this.store.getState().angular){
			return(this.store.getState().angular / (this.store.getState().angular + this.store.getState().react +this.store.getState().vuejs))*100
		}else{
			return 0
		}

	}

	voteReactInPercentage(){
		if(this.store.getState().react){
			return(this.store.getState().react / (this.store.getState().angular + this.store.getState().react +this.store.getState().vuejs))*100
		}else{
			return 0
		}

	}

	voteVuejsInPercentage(){
		if(this.store.getState().react){
			return(this.store.getState().vuejs / (this.store.getState().angular + this.store.getState().react +this.store.getState().vuejs))*100
		}else{
			return 0
		}

	}

	/*votesAngularInPercentStyle() {
		return {
			width: this.votesAngularInPercent()+'%'
		}
	}

	votesReactInPercentStyle() {
		return {
			width: this.votesReactInPercent()+'%'
		}
	}

	votesVuejsInPercentStyle() {
		return {
			width: this.votesVuejsInPercent()+'%'
		}
	}*/



	render() {
		return (
			<div>
				<span className ="label label-danger">Angular: {this.voteAngularInPercentage().toFixed(2)+'%'}</span>
					<div className="progress progress-stripped active">
						<div className="progress-bar progress-bar-danger"></div>
					</div>

				<span className ="label label-danger">React: {this.voteReactInPercentage().toFixed(2)+'%'}</span>
					<div className="progress progress-stripped active">
						<div className="progress-bar progress-bar-info"></div>
					</div>

				<span className ="label label-danger">Vuejs: {this.voteVuejsInPercentage().toFixed(2)+'%'}</span>
					<div className="progress progress-stripped active">
						<div className="progress-bar progress-bar-success"></div>
					</div>

			</div>


		);
	}
}

export default Results;