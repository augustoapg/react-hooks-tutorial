import React, { useRef, useEffect, useState } from "react";

const ImageToggleOnScroll = ({ primaryImg, secondaryImg }) => {
	const [isLoading, setIsLoading] = useState(true);
	const imgRef = useRef(null);

	const isInView = () => {
		const rect = imgRef.current.getBoundingClientRect();
		return rect.top >= 0 && rect.bottom <= window.innerHeight;
	};

	const [inView, setInView] = useState(false);

	useEffect(() => {
		// gets executed after the component is fully loaded the first time
		setIsLoading(false);
		setInView(isInView());
		window.addEventListener("scroll", scrollHandler);
		return () => {
			window.removeEventListener("scroll", scrollHandler);
		};
	}, []);

	const scrollHandler = () => {
		setInView(isInView());
	};

	// if loading is true, it will display a transparent gif
	return (
		<img
			src={
				isLoading
					? "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
					: inView
					? secondaryImg
					: primaryImg
			}
			alt=""
			ref={imgRef}
		/>
	);
};

export default ImageToggleOnScroll;
