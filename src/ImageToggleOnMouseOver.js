import React, { useRef } from "react";

const ImageToggleOnMouseOver = ({ primaryImg, secondaryImg }) => {
	const imgRef = useRef(null);
	return (
		<img
			onMouseOver={() => {
				imgRef.current.src = secondaryImg;
			}}
			onMouseOut={() => {
				imgRef.current.src = primaryImg;
			}}
			src={primaryImg}
			alt=""
			ref={imgRef}
		/>
	);
};

export default ImageToggleOnMouseOver;
