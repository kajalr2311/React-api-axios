import React, { useEffect, useState } from "react";

import axios from "../utils/Axios"

const Gallery = () => {
  const [Gallery, setGallery] = useState([]);

  const getGallery = async () => {
    try {
      const response = await axios.get("/products");
      console.log(response.data);
      setGallery(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    getGallery();
  },[]);
  
  return (
    <div className="mb-5 text-3xl ">
      <h1 className="mb-5 text-3xl">Calling API</h1>
      <button className="bg-red-400 px-5 py-3 rounded" >Get Gallery</button>
      <hr />
     
    </div>
  );
};

export default Gallery