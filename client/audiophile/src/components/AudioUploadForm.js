import React, { useState } from "react";

function AudioUploadForm() {
    const [file, setFile] = useState(null);
    const [name, setName] = useState("");
    const [format, setFormat] = useState("");
    const [size, setSize] = useState("");
  
    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
      setName(e.target.files[0].name);
      setFormat(e.target.files[0].type);
      setSize(e.target.files[0].size);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("file", file);
      formData.append("name", name);
      formData.append("format", format);
      formData.append("size", size);
      try {
        const response = await fetch("http://localhost:3000/", {
          method: "POST",
          body: formData,
        });
        console.log(response.data); // response.data will contain the link to the uploaded file
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="file">Upload File:</label>
          <input type="file" id="file" name="file" onChange={handleFileChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
}

export default AudioUploadForm;
