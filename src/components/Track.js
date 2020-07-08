import React, {useState, createRef ,useEffect} from 'react';

function Track(props) {

  const trackInfoRef = createRef();                       // used to reference div which will constantly be updated with styling
  const trackAudio   = createRef();
  const [size, changeSize]   = useState('1.25rem');       // defalut text size 
  const [style, changeStyle] = useState('not-selected');  // defalut styling for trackInfoRef

  useEffect(() => {

    // called after change observed in difRef
    // using entries array to access trackInfoRef properties
    const resizeObserver = new ResizeObserver((entries) => {
      if(entries[0].contentRect.height > 100) {
        const diff = entries[0].contentRect.height - 100;
        handleSize(diff);
      }       
    });
    
    // using resizeObserver to observe change in div
    // accessing .current to get DOM node 
    resizeObserver.observe(trackInfoRef.current);  

    // if track is not selected return to defalut styling (used to indicate selected track)
    if(props.selected === false) {
      changeStyle('not-selected');
      trackAudio.current.pause();
      trackAudio.current.currentTime = 0;
    } 

  }, [trackInfoRef, trackAudio, props.selected, props.id]);  

  // decreasing the font-size based on users device
  const handleSize = (diff) => {
    if(diff > 25) {
      changeSize('0.90rem');
    }
    else {
      changeSize('1.00rem');
    }
  }

  const updateState = (name) => {
    const audio = trackAudio.current; 
    props.UpdateSelected(props.id); // update state by sending selected track
    changeStyle(name);              // update style for selected track
    audio.pause();
    audio.currentTime = 0;
    audio.play();
  }

  const updateStyle = (style) => {
    // only update styles for tracks which are not selected
    if(!props.selected) {
      changeStyle(style);
    } 
  }

  return (
    <div className="trackArray">
      <div>
        <img src={props.imageArt.url} alt="album art" width="100" height="100" style={{borderRadius: '7px'}}></img>
      </div>
      <div className={style} ref={trackInfoRef} onClick={() => updateState("selected")} onMouseEnter={() => updateStyle("not-selected")} >
        <div style={{fontSize: `${size}`}}>
          <center>{props.songName}</center>
        </div>
        <h6><em><center>{props.artistName}</center></em></h6>
        <audio ref={trackAudio} src={props.sound}></audio>
      </div>
    </div>
  );
}

export default Track;