import React, { useState, useReducer, useCallback, useMemo } from 'react';
import { Search, Image as ImageIcon, Loader2 } from 'lucide-react';
import useFetchPhotos from '../hooks/useFetchPhotos';
import { favoritesReducer, initialState } from '../reducers/favoritesReducer';
import PhotoCard from './PhotoCard';

const Gallery = () => {
  const { photos, loading, error } = useFetchPhotos();
  const [favorites, dispatch] = useReducer(favoritesReducer, initialState);
  const [searchTerm, setSearchTerm] = useState('');

  // Requirement 7: useCallback for search handler
  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  // Requirement 7: useMemo for filtering logic
  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [photos, searchTerm]);

  // Requirement 5: useReducer for state management
  const toggleFavorite = useCallback((photo) => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: photo });
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <Loader2 className="w-10 h-10 text-purple-600 animate-spin mb-4" />
        <p className="text-gray-500 font-medium">Loading Gallery...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-md mx-auto mt-20 p-8 bg-red-50 rounded-2xl border border-red-100 text-center">
        <h3 className="text-red-700 font-bold mb-2">Error Loading Photos</h3>
        <p className="text-red-600/70 text-sm mb-6">{error}</p>
        <button onClick={() => window.location.reload()} className="bg-red-600 text-white px-6 py-2 rounded-xl text-sm font-bold">
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Search Header */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6 flex items-center justify-center gap-3">
            <ImageIcon className="text-purple-600" />
            Photo Gallery
        </h1>
        
        <div className="relative max-w-xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search authors..."
            className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 transition-all search-shadow"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <p className="mt-4 text-sm text-gray-400">
            Showing <span className="font-bold text-gray-900">{filteredPhotos.length}</span> of {photos.length} photos
        </p>
      </div>

      {/* Requirement 3: Responsive Grid (4 Desktop, 2 Tablet, 1 Mobile) */}
      {filteredPhotos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredPhotos.map((photo) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              isFavorite={favorites.some((fav) => fav.id === photo.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-gray-200">
          <p className="text-gray-400">No authors found matching "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
};

export default Gallery;
