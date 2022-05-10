import styled from 'styled-components';

const Wrapper = styled.div`
  overflow: hidden;
  flex-grow: 1;
  .audio-title {
    font-weight: 600;
    margin-bottom: 8px;
    font-size: 16px;
  }
  .collab-audio-seeker {
    top: 0px;
  }
  .audio-title-seeker-container {
    flex-grow: 1;
    display: inline-block;
  }
  .audio-player-length {
    vertical-align: middle;
    display: inline-block;
    line-height: 26px;
  }
  .audio-symbol {
    position: relative;
    width: 16px;
    height: 16px;
    svg {
      width: 16px;
      height: 16px;
    }
  }
  .audio-player-description {
    display: flex;
    gap: 6px;
    align-items: center;
    vertical-align: middle;
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-grow: 1;
    text-align: left;
  }

  .collab-audio-seeker {
    display: block;
    background-color: transparent;
    width: 100%;
    position: relative;
  }

  .play-button,
  .pause-button {
    vertical-align: middle;
    width: 26px;
    height: 26px;
    &:hover {
      cursor: pointer;
    }
  }
  .play-button {
    display: inline-block;
  }
  .pause-button {
    display: none;
  }

  // Webkit Chrome Safari Opera
  .collab-audio-seeker[type='range'] {
    -webkit-appearance: none;
  }
  .collab-audio-seeker[type='range']::-webkit-slider-runnable-track {
    height: 2px;
    background: ${({ theme }) => theme.colors.bodyText};
    border: none;
    border-radius: 3px;
  }
  .collab-audio-seeker[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 13px;
    width: 13px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.highlight};
    margin-top: -5px;
    &:hover {
      cursor: pointer;
    }
  }
  .collab-audio-seeker[type='range']:focus {
    outline: none;
  }
  .collab-audio-seeker[type='range']:focus::-webkit-slider-runnable-track {
    background: ${({ theme }) => theme.colors.bodyText};
  }
  // Firefox
  .collab-audio-seeker[type='range'] {
    /* fix for FF unable to apply focus style bug  */
    border: none;

    /*required for proper track sizing in FF*/
    // width: 300px;
  }
  .collab-audio-seeker[type='range']::-moz-range-track {
    height: 2px;
    background: ${({ theme }) => theme.colors.bodyText};
    border: none;
    border-radius: 3px;
  }
  .collab-audio-seeker[type='range']::-moz-range-thumb {
    border: none;
    height: 11px;
    width: 11px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.highlight};
  }
  /*hide the outline behind the border*/
  .collab-audio-seeker[type='range']:-moz-focusring {
    outline: 1px solid white;
    outline-offset: -1px;
  }
  .collab-audio-seeker[type='range']:focus::-moz-range-track {
    background: ${({ theme }) => theme.colors.bodyText};
  }
  // IE
  .collab-audio-seeker[type='range']::-ms-track {
    height: 2px;

    /*remove bg colour from the track, we'll use ms-fill-lower and ms-fill-upper instead */
    background: transparent;

    /*leave room for the larger thumb to overflow with a transparent border */
    border-color: transparent;
    border-width: 6px 0;

    /*remove default tick marks*/
    color: transparent;
  }
  .collab-audio-seeker[type='range']::-ms-fill-lower {
    background: ${({ theme }) => theme.colors.bodyText};
    border-radius: 10px;
  }
  .collab-audio-seeker[type='range']::-ms-fill-upper {
    background: ${({ theme }) => theme.colors.bodyText};
    border-radius: 10px;
  }
  .collab-audio-seeker[type='range']::-ms-thumb {
    border: none;
    height: 11px;
    width: 11px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.highlight};
  }
  .collab-audio-seeker[type='range']:focus::-ms-fill-lower {
    background: ${({ theme }) => theme.colors.bodyText};
  }
  .collab-audio-seeker[type='range']:focus::-ms-fill-upper {
    background: ${({ theme }) => theme.colors.bodyText};
  }
`;

export default Wrapper;
