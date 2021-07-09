import React from 'react'
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';

const ImageCard = ({ image }) => {
  const tags = image.tags.split(',')

  return (
    <div className="rounded max-w-sm overflow-hidden shadow-lg my-4 bg-white">
      <img src={image.webformatURL} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-gray-500 text-xl mb-2 text-center">
          Photo by <span className="text-gray-900">{image.user}</span>
        </div>
        <ul className="flex justify-evenly text-gray-500">
          <li>
            <strong>
              <VisibilityRoundedIcon />
            </strong> {image.views}
          </li>

          <li>
            <strong>
              <GetAppRoundedIcon />
            </strong> {image.downloads}
          </li>

          <li>
            <strong>
              <FavoriteRoundedIcon />
            </strong> {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4 text-center content-center">
        {tags.map((tag, index) => (
          <span key={index} className="mt-2 inline-block bg-yellow-200 rounded px-2 py-1 text-sm font-semibold text-yellow-600 mr-2">#{tag.trim()}</span>
        ))}
      </div>
    </div>
  )
}

export default ImageCard