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

	componentDidMount() {
		this.pauseButton.style.display = "none";
	}

	startPlay(index) {
		var ind = index;
		this.player.src = this.state.songList[ind].url;
		this.player.play();
		this.pauseButton.style.display = "inline";
		this.playButton.style.display = "none";
		console.log(ind);
	}
	pausePlay() {
		this.player.pause();
		this.pauseButton.style.display = "none";
		this.playButton.style.display = "inline";
	}
	nextSong(index) {
		if (index > this.state.songList.length) {
			index = 0;
		}
		if (index < 0) {
			index = this.state.songList.length;
		}
		this.setState.songList[this.state.currentSong] = index;
		this.startPlay(this.state.currentSong);
	}

	render() {
		return (
			<div className="text-center col-6 mx-auto mt-5 bg-dark">
				<h1>Annoying Music Player</h1>

				<ol className="col-4 mx-auto light ">
					<SongListMaker
						propCurrentSong={this.state.currentSong}
						propSongList={this.state.songList}
						propStartPlay={this.startPlay}
					/>
				</ol>
				<div className=" col-3 mx-auto d-flex justify-content-around">
					<a
						onClick={() =>
							this.nextSong(this.state.currentSong - 1)
						}>
						<i className="fas fa-caret-square-left" />
					</a>
					<a
						ref={el => (this.playButton = el)}
						onClick={() => this.startPlay(this.state.currentSong)}>
						<i className="fas fa-play" />
					</a>
					<a
						ref={el => (this.pauseButton = el)}
						onClick={() => this.pausePlay()}>
						<i className="fas fa-pause-circle" />
					</a>
					<a
						onClick={() =>
							this.nextSong(this.state.currentSong + 1)
						}>
						<i className="fas fa-caret-square-right" />
					</a>
				</div>
				<audio
					src={this.state.currentSong.url}
					ref={el => (this.player = el)}
				/>
			</div>
		);
	}
}

//use short html audiotag <audio>
//use audio/video dom play and pause (make functions)
