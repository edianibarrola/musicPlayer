import React from "react";
import PropTypes from "prop-types";

export class SongListMaker extends React.Component {
	render() {
		return this.props.propSongList.map((song, index) => {
			return (
				<li onClick={() => this.props.propStartPlay(index)} key={index}>
					{" "}
					{song.title}
				</li>
			);
		});
	}
}

SongListMaker.propTypes = {
	propCurrentSong: PropTypes.number, //index of list
	propSongList: PropTypes.array,
	propStartPlay: PropTypes.func
};
