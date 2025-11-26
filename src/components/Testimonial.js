import React from "react";
import '../stylesheets/Testimonial.css';

export function Testimonial(props){
	return(
		<div className="testimonial-container">
			<img 
				className="testimonial-image"
				src={require(`../assets/testimonial-${props.image}.png`)}
				alt='photo'
			/>
			<div className="testimonial-text-container">
				<p className="testimonial-name">{props.name} in {props.country}</p>
				<p className="testimonial-position">{props.position} in {props.company}</p>
				<p className="testimonial-text">{props.testimonial}</p>
			</div>
		</div>
	);
}
