import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Mic, Music, PauseCircle, PlayCircle } from 'react-feather';
import Wrapper from './wrapper';

const AudioPlayer = ({ id: audioId, audio, onTitleClicked, stacked }) => {
  const [length, setLength] = useState(0);
  const audioPlayer = useRef(null);

  const configureAudioPlayerByID = useCallback(() => {
    audioPlayer.current.max = audioPlayer.current.duration;

    audioPlayer.current.addEventListener('loadedmetadata', () => {
      fetchAndSetLength();
      if (audioPlayer.current) {
        audioPlayer.current.volume = 0.5;
      }
    });

    if (document.getElementById(`${audioId}-seeker`)) {
      document.getElementById(`${audioId}-seeker`).value = 0;

      // As the music plays, update value of seeker
      audioPlayer.current.ontimeupdate = () => {
        const seeker = document.getElementById(`${audioId}-seeker`);
        if (seeker) {
          seeker.value =
            (audioPlayer.current.currentTime / audioPlayer.current.duration) *
            100;
          if (
            audioPlayer.current.currentTime === audioPlayer.current.duration
          ) {
            audioPlayer.current.nextSibling.style.display = 'none';
            audioPlayer.current.nextSibling.nextSibling.style.display =
              'inline-block';
            audioPlayer.current.className = 'play-symbol mini-audio-player';
          }
        }
      };
    }
  }, [audioId]);

  useEffect(() => {
    configureAudioPlayerByID();
  }, [configureAudioPlayerByID]);

  const togglePlay = () => {
    if (audioPlayer.current.paused) {
      audioPlayer.current.play();
      audioPlayer.current.nextSibling.style.display = 'none';
      audioPlayer.current.nextSibling.nextSibling.style.display =
        'inline-block';
      audioPlayer.current.className = 'pause-symbol mini-audio-player';
    } else {
      audioPlayer.current.pause();
      audioPlayer.current.nextSibling.style.display = 'inline-block';
      audioPlayer.current.nextSibling.nextSibling.style.display = 'none';
      audioPlayer.current.className = 'play-symbol mini-audio-player';
    }
  };

  const fetchAndSetLength = () => {
    if (audioPlayer.current) {
      const { duration } = audioPlayer.current;

      const minutes = parseInt(duration / 60, 10);
      const seconds = parseInt(duration % 60, 10);
      const formattedSeconds = `00${seconds}`.substr(`00${seconds}`.length - 2);

      setLength(`${minutes}:${formattedSeconds}`);
    }
  };

  const updateTime = (e) => {
    audioPlayer.current.currentTime =
      (e.target.value * audioPlayer.current.duration) / 100;
  };

  return (
    <Wrapper>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          flex: 1,
          justifyContent: 'flex-start',
          flexGrow: 1,
          gap: '8px',
        }}
      >
        <audio ref={audioPlayer} className="mini-audio-player" type="audio/mp3">
          <source
            src={`https://${process.env.REACT_APP_S3}/${audio.file_path}`}
          />
          <track kind="captions" />
        </audio>
        <div
          className="play-button"
          role="link"
          tabIndex={0}
          onClick={togglePlay}
          onKeyDown={togglePlay}
        >
          <PlayCircle />
        </div>
        <div
          className="pause-button"
          role="link"
          tabIndex={0}
          onClick={togglePlay}
          onKeyDown={togglePlay}
        >
          <PauseCircle />
        </div>
        <span className="audio-symbol">
          {audio.voice_line ? <Mic /> : <Music />}
        </span>
        <div className="audio-player-length">{length}</div>
      </div>
    </Wrapper>
  );
};

export default AudioPlayer;
