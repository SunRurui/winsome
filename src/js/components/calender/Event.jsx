import React from 'react';
import { connect } from 'react-redux';
import { arrayOf, shape, number, string } from 'prop-types';

export class Event extends React.Component {
	renderArray() {
		const { counter, events } = this.props;
		return [...events].slice(counter, counter + 4).map(({ ...item }) => (
			<div key={Math.random()} className="event">
				<div className="comingEvents">{item.event}</div>
				<div className="comingEventsDates">{item.eventDate}</div>
				<div className="time">{item.time}</div>
				<div className="clear" />
			</div>
		));
	}
	render() {
		return <div>{this.renderArray()}</div>;
	}
}

function mapStateToProps({ calender }) {
	return {
		counter: calender.counter,
		events: calender.events
	};
}

Event.propTypes = {
	counter: number.isRequired,
	events: arrayOf(
		shape({
			event: string.isRequired,
			eventDate: string.isRequired,
			time: string.isRequired
		})
	).isRequired
};
export default connect(mapStateToProps, null)(Event);
