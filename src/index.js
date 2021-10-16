import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import ImageGallery from "react-image-gallery";
import { photos } from "./photos";
import "react-image-gallery/styles/css/image-gallery.css";

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(5);
    setViewerIsOpen(false);
  };

  const images = [];

  photos.map((photos, i) =>
    images.push({
      original: photos.src,
      thumbnail: photos.src
    })
  );

  return (
    <div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <ImageGallery showIndex items={images} startIndex={currentImage} />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}
render(<App />, document.getElementById("app"));
