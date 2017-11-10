import React,{ Component } from 'react';

class Content extends Component {
	render() {
		const {activities} = this.props;//es6 destructuring const activity = this.props.activity
//Destructuring allows us to save on typing and define variables in a shorter, more compact way.
		

		return (
			<div className="content">
        		<div className="line"></div>

		      {/* Timeline item */}
		      {activities.map((activity) => {
          		return (
			        <div className="item">
			          <div className="avatar">
			            <img
			            alt={activity.text}
			            src={activity.user.avatar} />

			            {activity.user.name}

			          </div>

			          <span className="time">

			            {activity.timestamp}
			          </span>

			          <p>{activity.text}</p>
			          <div className="commentCount">

			            {activity.comments.length}
			          </div>
			        </div>

		        );
		    })}

      </div>

			);
	}
}
export default Content;