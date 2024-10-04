const ImgModal = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-10"
      onClick={onClose}
    >
      <div
        className="relative rounded-lg max-w-screen-sm max-h-screen"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-center items-center max-w-full max-h-full p-3">
          <img
            src={imageSrc}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ImgModal;
