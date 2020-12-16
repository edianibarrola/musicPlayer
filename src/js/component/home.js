import React from "react";
import { SongListMaker } from "./SongListMaker";
import PropTypes from "prop-types";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentSong: 0,

			songList: [
				{
					title: "South Park",
					id: "south-park",
					author: "Kyle",
					url:
						"https://assets.breatheco.de/apis/sound/files/cartoons/songs/south-park.mp3"
				},
				{
					title: "Thunder Cats",
					id: "thundercats",
					author: "Moonra",
					url:
						"https://assets.breatheco.de/apis/sound/files/cartoons/songs/thundercats.mp3"
				},
				{
					title: "X-Men",
					id: "x-men",
					author: "Profesor",
					url:
						"https://assets.breatheco.de/apis/sound/files/cartoons/songs/x-men.mp3"
				}
			]
		};
		this.player = null;
	}

	StartPlay(index) {
		this.state.songList[index].url.play();
		//console.log(this.state.songList[this.state.currentSong].url);
	}
	PausePlay() {
		this.state.songList[this.state.currentSong].url.pause();
	}
	SongForward = () => {
		this.setState({
			currentSong:
				this.state.songList[this.state.currentSong].url == 2
					? this.state.songList[this.state.currentSong].url
					: 0
		});
	};
	SongBack = () => {
		this.setState({
			currentSong:
				this.state.songList[this.state.currentSong].url < 2
					? this.state.songList[this.state.currentSong].url
					: +1
		});
	};
	render() {
		return (
			<div className="text-center mt-5">
				<h1>Hello Rigo!</h1>
				<p>
					<img src={rigoImage} />
				</p>
				<ol>
					<SongListMaker
						propCurrentSong={this.state.currentSong}
						propSongList={this.state.songList}
					/>
				</ol>
				<div>
					<a>
						<i className="fas fa-caret-square-left" />
					</a>
					<a onClick={() => this.StartPlay(this.state.currentSong)}>
						<i className="fas fa-play" />
					</a>
					<a onClick={() => this.PausePlay}>
						<i className="fas fa-pause-circle" />
					</a>
					<a>
						<i className="fas fa-caret-square-right" />
					</a>
				</div>
				<audio
					src={this.state.songList[this.state.currentSong].url}
					ref={el => (this.player = el)}
				/>
			</div>
		);
	}
}

//use short html audiotag <audio>
//use audio/video dom play and pause (make functions)
