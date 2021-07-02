import React from "react";
import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver";

const ImageChangeOnMouseOver = () => {
	return (
		<div>
			<ImageToggleOnMouseOver
				primaryImg="static/bw/Speaker-187.jpg"
				secondaryImg="static/Speaker-187.jpg"
				alt=""
			/>
			&nbsp; &nbsp;
			<ImageToggleOnMouseOver
				primaryImg="static/bw/Speaker-1124.jpg"
				secondaryImg="static/speaker/Speaker-1124.jpg"
				alt="Speaker-1124"
			/>
		</div>
	);
};

export default ImageChangeOnMouseOver;
