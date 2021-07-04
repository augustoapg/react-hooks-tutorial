import React, { useState, useEffect, useContext } from "react";
import { Header } from "./Header";
import { Menu } from "./Menu";
import SpeakerData from "./SpeakerData";
import SpeakerDetail from "./SpeakerDetail";
import { ConfigContext } from "./App";

const Speakers = ({}) => {
	const [speakingSaturday, setSpeakingSaturday] = useState(true);
	const [speakingSunday, setSpeakingSunday] = useState(true);

	const [isLoading, setIsLoading] = useState(true);
	const [speakerList, setSpeakerList] = useState([]);

	const context = useContext(ConfigContext);

	useEffect(() => {
		setIsLoading(true);

		new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve();
			}, 1000);
		}).then(() => {
			setIsLoading(false);
		});
		setSpeakerList(SpeakerData);
		return () => {
			console.log("cleanup");
		};
	}, []);

	const heartFavoriteHandler = (e, favoriteValue) => {
		e.preventDefault();
		const sessionId = parseInt(e.target.attributes["data-sessionid"].value);
		setSpeakerList(
			speakerList.map((item) => {
				if (item.id === sessionId) {
					return { ...item, favorite: favoriteValue };
				}
				return item;
			})
		);
	};

	const handleChangeSaturday = () => {
		setSpeakingSaturday(!speakingSaturday);
	};

	const handleChangeSunday = () => {
		setSpeakingSunday(!speakingSunday);
	};

	const speakerListFiltered = isLoading
		? []
		: speakerList
				.filter(
					({ sat, sun }) =>
						(speakingSaturday && sat) || (speakingSunday && sun)
				)
				.sort((a, b) => {
					if (a.firstName < b.firstName) {
						return -1;
					}
					if (a.firstName > b.firstName) {
						return 1;
					}
					return 0;
				});

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<Header />
			<Menu />

			<div className="container">
				<div className="btn-toolbar margintopbottom5 checkbox-bigger">
					{context.showSpeakerSpeakingDays === false ? null : (
						<div className="hide">
							<div className="form-check-inline">
								<label className="form-check-label">
									<input
										type="checkbox"
										className="form-check-input"
										onChange={handleChangeSaturday}
										checked={speakingSaturday}
									/>
									Saturday Speakers
								</label>
							</div>
							<div className="form-check-inline">
								<label className="form-check-label">
									<input
										type="checkbox"
										className="form-check-input"
										onChange={handleChangeSunday}
										checked={speakingSunday}
									/>
									Sunday Speakers
								</label>
							</div>
						</div>
					)}
				</div>
				<div className="row">
					<div className="card-deck">
						{speakerListFiltered.map(
							({
								id,
								firstName,
								lastName,
								sat,
								sun,
								favorite,
								bio,
							}) => {
								return (
									<SpeakerDetail
										key={id}
										id={id}
										firstName={firstName}
										lastName={lastName}
										sat={sat}
										sun={sun}
										favorite={favorite}
										bio={bio}
										onHeartFavoriteHandler={
											heartFavoriteHandler
										}
									/>
								);
							}
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Speakers;
