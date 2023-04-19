import React, { useState } from "react";
import axios from "axios";
import FaceCard from "./FaceCard";

const SearchFaces = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const file = event.target.elements.namedItem("image").files[0];

    if (!file) {
      alert("Por favor, selecione uma imagem.");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post("https://1gtjobews8.execute-api.us-east-1.amazonaws.com/searchFaces", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setSearchResults(response.data.FaceMatches || []);
      console.log(response.data);
    } catch (error) {
      console.error("Erro ao buscar faces:", error);
      setSearchResults([]);
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Buscar Faces</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" name="image" />
        <button type="submit" disabled={loading}>
          {loading ? "Buscando..." : "Buscar"}
        </button>
      </form>
      <div>
      {searchResults &&
        searchResults.map((result) => {
          console.log("ImageUrl:", result.ImageUrl); // Adicione esta linha
          return <FaceCard key={result.FaceId} imageUrl={result.ImageUrl} />;
        })}

      </div>
    </div>
  );
};

export default SearchFaces;
