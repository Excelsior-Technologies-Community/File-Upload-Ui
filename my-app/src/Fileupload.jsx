import React, { useState } from "react";
import "./fileupload.css";

const File = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setPreview(fileUrl);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Image Selected Successfully!");
  };

  return (
    <div className="container">
      <h2>Select & Preview Image</h2>

      <form className="form" onSubmit={handleSubmit}>
        <label className="file-label">
          Choose Image
          <input
            type="file"
            accept="image/*"
            className="file-input"
            onChange={handleImageChange}
          />
        </label>

        {preview && (
          <div className="preview-box">
            <img src={preview} alt="Preview" className="preview-img" />
          </div>
        )}

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default File;