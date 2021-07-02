import React from "react";
import ImageToggleOnScroll from "../src/ImageToggleOnScroll";

const ImageChangeOnScroll = () => {
	return (
		<div>
			{[187, 1124, 1269, 1530, 1725, 10808].map((key) => {
				return (
					<div id={key}>
						<ImageToggleOnScroll
							primaryImg={`static/bw/Speaker-${key}.jpg`}
							secondaryImg={`static/speakers/Speaker-${key}.jpg`}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default ImageChangeOnScroll;
