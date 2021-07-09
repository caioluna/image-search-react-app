import React from 'react'
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';

const ImageCard = ({ image }) => {
  const tags = image.tags.split(',')

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg my-4">
      <img src={image.webformatURL} alt="" className="w-full" />
      <div className="flex-column px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2 text-center">
          Photo by <span className="text-purple-900">{image.user}</span>
        </div>
        <ul className="flex justify-evenly">
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
          <span key={index} className="mt-2 inline-block bg-purple-200 rounded px-2 py-1 text-sm font-semibold text-purple-700 mr-2">#{tag.trim()}</span>
        ))}
      </div>
    </div>
  )
}

export default ImageCard