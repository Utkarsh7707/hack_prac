import React, { useState } from 'react';

export const PlannerPage = () => {
  const [destinations, setDestinations] = useState([
    { id: 1, name: 'Paris, France', stars: 4 },
    { id: 2, name: 'Kyoto, Japan', stars: 5 },
  ]);
  const [newDestName, setNewDestName] = useState('');

  const handleAddDestination = (e) => {
    e.preventDefault();
    if (!newDestName.trim()) return;

    setDestinations([
      ...destinations,
      { id: Date.now(), name: newDestName.trim(), stars: 0 }
    ]);
    setNewDestName('');
  };

  const removeDestination = (id) => {
    setDestinations(destinations.filter((d) => d.id !== id));
  };

  const updateStars = (id, delta) => {
    setDestinations(destinations.map((d) => {
      if (d.id === id) {
        const newStars = Math.min(Math.max(d.stars + delta, 0), 5);
        return { ...d, stars: newStars };
      }
      return d;
    }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">
          ✨ Interactive Trip Planner
        </h1>
        
        <p className="text-gray-600 mb-8">
          Build your dream travel bucket list and rate your excitement level for each destination!
        </p>

        <form onSubmit={handleAddDestination} className="flex gap-4 mb-8">
          <input
            type="text"
            className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            placeholder="Add a new destination (e.g., Bali, Indonesia)"
            value={newDestName}
            onChange={(e) => setNewDestName(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition shadow-md whitespace-nowrap"
          >
            Add Place
          </button>
        </form>

        {destinations.length === 0 ? (
          <div className="text-center py-10 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
            <span className="text-4xl block mb-4">🌍</span>
            <p className="text-gray-500 font-medium">Your planner is empty. Start adding some dream spots!</p>
          </div>
        ) : (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Your Wishlist ({destinations.length} Places)
            </h2>
            {destinations.map((dest) => (
              <div 
                key={dest.id} 
                className="flex flex-col sm:flex-row items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition border border-gray-100 shadow-sm"
              >
                <div className="flex-grow mb-4 sm:mb-0">
                  <h3 className="text-lg font-bold text-gray-800">{dest.name}</h3>
                </div>
                
                <div className="flex items-center gap-6">
                  {/* Rating Controls */}
                  <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-inner border border-gray-200">
                    <button 
                      type="button"
                      onClick={() => updateStars(dest.id, -1)}
                      className="text-gray-400 hover:text-red-500 font-bold p-1 rounded-full hover:bg-red-50 transition"
                      disabled={dest.stars === 0}
                    >
                      -
                    </button>
                    <div className="flex w-24 justify-center text-yellow-400 tracking-widest text-sm">
                      {'★'.repeat(dest.stars)}{'☆'.repeat(5 - dest.stars)}
                    </div>
                    <button 
                      type="button"
                      onClick={() => updateStars(dest.id, 1)}
                      className="text-gray-400 hover:text-green-500 font-bold p-1 rounded-full hover:bg-green-50 transition"
                      disabled={dest.stars === 5}
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeDestination(dest.id)}
                    className="text-red-500 hover:text-white border border-red-500 hover:bg-red-500 py-1 px-3 rounded-lg transition text-sm font-medium"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
