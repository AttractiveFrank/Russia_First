import { IconButton } from "@mui/material";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";

const VideoPreview = (props) => {
  const { open, setOpen, avatar, name } = props

  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      disableAutoFocus
    >
      <div className="videoPreviewContainer">
        <div className="spaceBetween">
          <p className="cardBigTitle">
            {name}
          </p>
          <IconButton onClick={handleClose}>
            <CloseIcon sx={{ color: "var(--primaryBgColor)" }} />
          </IconButton>
        </div>
        <div>
          <video style={{ width: '100%', height: '83%', marginTop: '20px' }} controls>
            <source src={avatar} type="video/mp4" />
          </video>
        </div>
      </div>
    </Modal>
  )
}

export default VideoPreview