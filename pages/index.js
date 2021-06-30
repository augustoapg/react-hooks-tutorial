import React, { useState } from "react";

const InputElement = () => {
	const [inputText, setInputText] = useState("");
	const [historyArray, setHistoryArray] = useState([]);
	return (
		<div>
			<input
				onChange={(e) => {
					setInputText(e.target.value);
					setHistoryArray([...historyArray, e.target.value]);
				}}
				placeholder="Enter some text..."
			/>
			<br />
			{inputText}
			<br />
			<ul>
				{historyArray.map((elem) => {
					return <li>{elem}</li>;
				})}
			</ul>
		</div>
	);
};

export default InputElement;
