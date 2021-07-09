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
    <div className="bg-gray-100 w-100">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center pt-8 text-yellow-600"><strong>Image Search App</strong></h1>
      <ImageSearch searchText={(text) => setSearchTerm(text)} />

      {!isLoading && images.length === 0 && <h1 className="text-6xl text-center mx-auto mt-32">Image not found...</h1>}

      {isLoading
        ?
        <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
        :
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4 mx-4 place-items-center">
          {images.map(image => (
            <ImageCard key={image.id} image={image} tags={image.tags} />
          ))}
        </div>}
    </div>
  );
}

export default App;
