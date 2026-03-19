import React, { useState } from "react";
import img1 from "../../assets/img/1.jpeg";
import img2 from "../../assets/img/2.jpeg";
import img3 from "../../assets/img/3.jpeg";
import img4 from "../../assets/img/4.jpeg";
import img5 from "../../assets/img/5.jpeg";

const images = [img1, img2, img3, img4, img5];

// Row pattern: 1 image, 2 images, 3 images, 4 images ...
const rowPattern = [1, 2, 3, 4];

const EcommerceGallery = () => {
  const [imgs, setImgs] = useState(images);

  // Split images into rows dynamically based on rowPattern
  const getRows = () => {
    let temp = [...imgs];
    const rows = [];
    let i = 0;
    while (temp.length > 0) {
      const count = rowPattern[i % rowPattern.length];
      rows.push(temp.splice(0, count));
      i++;
    }
    return rows;
  };

  const handleClick = (rowIndex, imgIndex) => {
    const newImgs = [...imgs];
    const flatIndex =
      getRows()
        .slice(0, rowIndex)
        .reduce((sum, r) => sum + r.length, 0) + imgIndex;

    // Swap clicked image with first image
    [newImgs[0], newImgs[flatIndex]] = [newImgs[flatIndex], newImgs[0]];
    setImgs(newImgs);
  };

  const rows = getRows();

  return (
    <div className="p-6 space-y-6">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`grid gap-6 ${
            row.length === 1
              ? "grid-cols-1"
              : row.length === 2
                ? "grid-cols-2"
                : row.length === 3
                  ? "grid-cols-3"
                  : "grid-cols-4"
          }`}
        >
          {row.map((img, imgIndex) => (
            <div
              key={imgIndex}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => handleClick(rowIndex, imgIndex)}
            >
              <img
                src={img}
                alt={`Image ${imgIndex + 1}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">Product</h2>
                <p className="text-gray-600 text-sm">
                  Same content for all products. Click image to swap.
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default EcommerceGallery;
