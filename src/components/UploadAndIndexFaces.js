import React, { useState } from 'react';
import axios from 'axios';

const UploadAndIndexFaces = () => {
  const [files, setFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState(0);
  const [uploading, setUploading] = useState(false);

  const handleFilesChange = (e) => {
    setFiles([...e.target.files]);
  };

  const uploadAndIndex = async () => {
    setUploading(true);
    setUploadedFiles(0);

    for (let file of files) {
      const formData = new FormData();
      formData.append('file', file);

      await axios.post('https://1gtjobews8.execute-api.us-east-1.amazonaws.com/uploadAndIndexFaces', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setUploadedFiles((prevCount) => prevCount + 1);
    }

    setUploading(false);
  };

  return (
    <div>
      <h1>Upload e Indexação de Faces</h1>
      <input type="file" multiple onChange={handleFilesChange} />
      <button onClick={uploadAndIndex} disabled={uploading}>
        Enviar Imagens
      </button>
      {uploading && (
        <div>
          <p>
            Carregando... {uploadedFiles}/{files.length}
          </p>
          <progress value={uploadedFiles} max={files.length}></progress>
        </div>
      )}
    </div>
  );
};

export default UploadAndIndexFaces;
