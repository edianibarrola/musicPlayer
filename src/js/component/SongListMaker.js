import React from "react";
import PropTypes from "prop-types";

export class SongListMaker extends React.Component {
	render() {
		return this.props.propSongList.map((song, index) => {
			return (
				<li key={index} onClick={() => this.props.propStartPlay(0)}>
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
