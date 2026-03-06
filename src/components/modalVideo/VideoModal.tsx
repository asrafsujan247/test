import React, { useState } from "react";
import Modal from "react-modal";

interface VideoModalProps {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
}

// Set the app element for accessibility (required by react-modal)
Modal.setAppElement("#root");
const VideoModal: React.FC<VideoModalProps> = ({ isOpen, setOpen }) => {
  const [videoUrl, setVideoUrl] = useState<string>(
    "https://www.youtube.com/embed/pPl3ZZdTP3g"
  );

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleClose}
        contentLabel="Video Modal"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        {/* <button className="close-btn " onClick={handleClose}>
          close
        </button> */}
        <div className="modal-body">
          <iframe
            width="100%"
            height="400"
            src={videoUrl}
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </div>
  );
};

export default VideoModal;