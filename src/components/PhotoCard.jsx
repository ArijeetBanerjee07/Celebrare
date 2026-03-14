import React from 'react';
import { Heart } from 'lucide-react';

const PhotoCard = ({ photo, isFavorite, onToggleFavorite }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden card-shadow group transition-all duration-300 hover:-translate-y-2">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={photo.download_url}
          alt={`By ${photo.author}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Favorite Button */}
        <button
          onClick={() => onToggleFavorite(photo)}
          className={`absolute top-4 right-4 p-3 rounded-full backdrop-blur-md transition-all duration-300 border ${
            isFavorite 
              ? "bg-purple-600 border-purple-600 text-white shadow-lg" 
              : "bg-white/70 border-white/20 text-gray-700 hover:bg-white"
          }`}
          aria-label="Toggle Favorite"
        >
          <Heart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />
        </button>
      </div>

      <div className="p-5">
        <p className="font-bold text-gray-800 text-lg truncate">
          {photo.author}
        </p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2 py-1 rounded-md">
            ID: {photo.id}
          </span>
          <a 
            href={photo.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-purple-600 hover:underline font-semibold"
          >
            Veiw Original
          </a>
        </div>
      </div>
    </div>
  );
};

export default React.memo(PhotoCard);
