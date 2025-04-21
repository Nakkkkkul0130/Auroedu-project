import React, { useEffect, useState } from 'react';

function FollowUsers() {
  const [profiles, setProfiles] = useState([]);
  const [currentUsername, setCurrentUsername] = useState('');
  const [usernameInput, setUsernameInput] = useState('');
  const [isUsernameEntered, setIsUsernameEntered] = useState(false);

  useEffect(() => {
    if (currentUsername) {
      const storedProfiles = JSON.parse(localStorage.getItem('profiles')) || [];
      const otherProfiles = storedProfiles.filter(
        (profile) => profile.username !== currentUsername
      );
      setProfiles(otherProfiles);
    }
  }, [currentUsername]);

  const handleFollow = (targetUsername) => {
    const storedProfiles = JSON.parse(localStorage.getItem('profiles')) || [];

    const updatedProfiles = storedProfiles.map((profile) => {
      if (profile.username === targetUsername) {
        profile.followers = profile.followers || [];
        if (!profile.followers.includes(currentUsername)) {
          profile.followers.push(currentUsername);
        }
      }

      if (profile.username === currentUsername) {
        profile.following = profile.following || [];
        if (!profile.following.includes(targetUsername)) {
          profile.following.push(targetUsername);
        }
      }

      return profile;
    });

    localStorage.setItem('profiles', JSON.stringify(updatedProfiles));
    alert(`You followed ${targetUsername}`);
    window.location.reload();
  };

  const handleUsernameSubmit = () => {
    localStorage.setItem('username', usernameInput.trim());
    setCurrentUsername(usernameInput.trim());
    setIsUsernameEntered(true);
  };

  return (
    <div className="p-4 sm:p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-indigo-700">
        Follow Users
      </h1>

      {!isUsernameEntered ? (
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <input
            type="text"
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
            placeholder="Enter your username"
            className="px-4 py-2 border rounded-md w-full sm:w-auto text-center sm:text-left"
          />
          <button
            onClick={handleUsernameSubmit}
            className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-all"
          >
            Submit
          </button>
        </div>
      ) : (
        <>
          {profiles.length === 0 ? (
            <p className="text-gray-500 text-center mt-6">
              No other profiles to follow.
            </p>
          ) : (
            <div className="mt-6 space-y-4">
              {profiles.map((profile) => (
                <div
                  key={profile.id}
                  className="p-4 rounded-lg shadow-md border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 bg-white"
                >
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      @{profile.username}
                    </h2>
                    <p className="text-gray-600 text-sm">{profile.bio}</p>
                    <p className="text-sm mt-1 text-indigo-600">
                      {(profile.followers || []).length} Followers
                    </p>
                  </div>
                  <button
                    onClick={() => handleFollow(profile.username)}
                    className="mt-2 sm:mt-0 px-5 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-all"
                  >
                    Follow
                  </button>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default FollowUsers;
