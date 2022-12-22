import PropTypes from "prop-types";
import style from "./ImageGalleryItem.module.css";

export default function ImageGalleryItem({ smImage, tags, onClick }) {
  return (
    <li className={style.ImageGalleryItem}>
      <img
        className={style.ImageGalleryItem_image}
        src={smImage}
        alt={tags}
        onClick={onClick}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  tags: PropTypes.string.isRequired,
  smImage: PropTypes.string.isRequired,
};
