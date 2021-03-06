import React from "react";

const Carousel = (props) => {
      const images = {};
      const [selectedIndex, setSelectedIndex] = useState(0);
      const [selectedImage, setSelectedImage] = useState(images[0]);

      const previous = () => {
            const condition = selectedIndex > 0;
            const nextIndex = condition ? selectedIndex - 1 : images.length - 1;
            setSelectedImage(images[nextIndex]);
            setSelectedIndex(nextIndex);
      };
      const next = () => {
            const condition = selectedIndex < images.length;
            const nextIndex = condition ? selectedIndex + 1 : 0;
            setSelectedImage(images[nextIndex]);
            setSelectedIndex(nextIndex);
      };

      return <div>Carousel</div>;
};

export default Carousel;
