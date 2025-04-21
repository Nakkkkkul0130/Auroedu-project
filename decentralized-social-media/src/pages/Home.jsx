import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    // Get all profiles from localStorage
    const storedProfiles = JSON.parse(localStorage.getItem('profiles')) || [];
    setProfiles(storedProfiles);
  }, []);

  const handleRemoveProfile = (usernameToRemove) => {
    if (window.confirm(`Are you sure you want to remove ${usernameToRemove}'s profile?`)) {
      const updatedProfiles = profiles.filter((profile) => profile.username !== usernameToRemove);
      setProfiles(updatedProfiles);
      localStorage.setItem('profiles', JSON.stringify(updatedProfiles));
      alert(`${usernameToRemove}'s profile removed successfully`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content of the Homepage */}
      <div className="flex-grow p-8">
        <h1 className="text-3xl font-bold mb-6">All User Profiles</h1>

        {profiles.length === 0 ? (
          <div>
            <p className="text-gray-600 mb-4">No profiles found.</p>
            <Link
              to="/create-profile"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Create a Profile
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {profiles.map((profile) => (
              <div key={profile.username} className="bg-white shadow-md p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-2">{profile.username}</h2>
                <p className="text-gray-600 mb-4">{profile.bio}</p>
                <Link
                  to={`/profile/${profile.username}`}
                  className="inline-block px-4 py-2 mb-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  View Profile
                </Link>
                <button
                  onClick={() => handleRemoveProfile(profile.username)}
                  className="inline-block px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ml-2"
                >
                  Remove Profile
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center">
    
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold">Made with ❤️ by Nakul</p>
            <p className="text-sm mt-2">All rights reserved &copy; {new Date().getFullYear()}</p>
          </div>

          
          <div className="flex gap-6 mt-4 md:mt-0 ml-auto">
            <a href="https://twitter.com/nakulbhar001" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter text-sky-400 text-2xl hover:scale-110 transition-transform"></i>
            </a>
            <a href="https://www.linkedin.com/in/nakul-bhar0130" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in text-blue-700 text-2xl hover:scale-110 transition-transform"></i>
            </a>
            <a href="https://www.instagram.com/nakul_bhar0130" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram text-pink-500 text-2xl hover:scale-110 transition-transform"></i>
            </a>
          </div>

        </div>
      </footer>
    </div>
  );
}

export default Home;
