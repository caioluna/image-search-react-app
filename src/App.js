import React, { useState, useEffect } from 'react'

import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';


function App() {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${searchTerm}&image_type=photo&pretty=true`)
      .then(response => response.json())
      .then(data => {
        setImages(data.hits)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }, [searchTerm])

  return (
    <div className="container mx-auto">
      <ImageSearch searchText={(text) => setSearchTerm(text)} />

      {!isLoading && images.length === 0 && <h1 className="text-6xl text-center mx-auto mt-32">Image not found...</h1>}

      {isLoading
        ?
        <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
        :
        <div className="grid grid-cols-3 gap-4 place-items-center">
          {images.map(image => (
            <ImageCard key={image.id} image={image} tags={image.tags} />
          ))}
        </div>}
    </div>
  );
}

export default App;
