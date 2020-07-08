import React, {useRef, useEffect, useState} from 'react';

var currentVideo;
var currentVideoURL;
var timeOuts = [];

function Video (props) {

  const [currentVideoBlog, setVideoBlog] = useState("");
  const vSourceRef = useRef();
  const divRef = useRef();
  
  useEffect(() => {
    
    // Check if a video is selected and passed in
    if(props.video.length !== 0) {
      
      // clear all timeouts before moving forward
      for(var i = 0; i < timeOuts.length; i++) {              // loop through all unique setTimeouts and clear them before starting a new timer
        clearTimeout(timeOuts[i]);                            // clearTimeout uses unique number to keep track of each setTimeout and clears it
      }

      // changes background image every 5 seconds
      props.video[0].previewVideo.forEach( (pVideo, i) => {
        timeOuts.push(setTimeout(() => {                      // returns a unique number assoicated with the specific setTimeout
          currentVideo = pVideo.video;                        
          currentVideoURL = pVideo.originURL;
          divRef.current.style.backgroundImage = `url(${currentVideo})`;

          if(pVideo.originBlog !== undefined) {
            setVideoBlog(pVideo.originBlog);
            vSourceRef.current.href = currentVideoURL;
          } else {
            setVideoBlog("?");
            vSourceRef.current.href = `https://www.google.com/searchbyimage?safe=off&image_url=${currentVideo}`;
          }
        }, i * 5000)); // updates information 0 * 5000 = 0 seconds then 1 * 5000 = 5 seconds then 2 * 5000 = 10 seconds and so on
      }); 

      // if end of video is reached then clear the video from the view      
      timeOuts.push(setTimeout (() => {
        props.ReachedEnd(props.video[0].id);
        divRef.current.style.backgroundImage = "url(null)";
        vSourceRef.current.href = "/";
        setVideoBlog("");
      }, 30000)); // will update information after 30 seconds
    }
  }, [vSourceRef, divRef, props])

  return  (
    <div ref={divRef} className="videoOpt" style={{backgroundImage: "url(/)"}}>
      <div className="urlBlogSource">
      <a ref={vSourceRef} target="_blank" rel="noopener noreferrer" href={"/"}>{currentVideoBlog}</a>
      </div>
    </div>
  );
}

export default Video; 