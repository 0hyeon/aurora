import React from "react";

const Youtube = () => {
  return (
    <div style={{ paddingTop: 80 }}>
      <iframe
        width="1100"
        height="620"
        src="https://www.youtube.com/embed/NjemNVy6_uo?si=MgXLGgmfjCRPhXA-"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Youtube;
