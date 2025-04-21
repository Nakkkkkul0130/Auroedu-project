import React, { useEffect, useState } from 'react';

function FollowUsers() {
  const [profiles, setProfiles] = useState([]);
  const [currentUsername, setCurrentUsername] = useState('');
  const [usernameInput, setUsernameInput] = useState('');
  const [isUsernameEntered, setIsUsernameEntered] = useState(false);

  // This will load the profiles when the username is entered
  useEffect(() => {
    if (currentUsername) {
      const storedProfiles = JSON.parse(localStorage.getItem('profiles')) || [];
      // Exclude the current user's profile
      const otherProfiles = storedProfiles.filter(profile => profile.username !== currentUsername);
      setProfiles(otherProfiles);
    }
  }, [currentUsername]);

  const handleFollow = (targetUsername) => {
    const storedProfiles = JSON.parse(localStorage.getItem('profiles')) || [];

    const updatedProfiles = storedProfiles.map(profile => {
      // For the target user -> add me to their followers (ensure followers is an array)
      if (profile.username === targetUsername) {
        if (!profile.followers) {
          profile.followers = []; // Ensure followers is always an array
        }
        if (!profile.followers.includes(currentUsername)) {
          profile.followers.push(currentUsername);
        }
      }

      // For me -> add target user to my following (ensure following is an array)
      if (profile.username === currentUsername) {
        if (!profile.following) {
          profile.following = []; // Ensure following is always an array
        }
        if (!profile.following.includes(targetUsername)) {
          profile.following.push(targetUsername);
        }
      }

      return profile;
    });

    localStorage.setItem('profiles', JSON.stringify(updatedProfiles));
    alert(`You followed ${targetUsername}`);
    window.location.reload(); // Reload to update list
  };

  const handleUsernameSubmit = () => {
    // Save the entered username to localStorage and filter profiles
    localStorage.setItem('username', usernameInput);
    setCurrentUsername(usernameInput);
    setIsUsernameEntered(true);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Follow Users</h1>

      {!isUsernameEntered ? (
        <div>
          <input
            type="text"
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
            placeholder="Enter your username"
            className="px-4 py-2 border rounded-md mb-4"
          />
          <button
            onClick={handleUsernameSubmit}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Submit
          </button>
        </div>
      ) : (
        <>
          {profiles.length === 0 ? (
            <p className="text-gray-500">No other profiles to follow.</p>
          ) : (
            <div className="flex flex-col gap-4">
              {profiles.map((profile) => (
                <div key={profile.id} className="p-4 border rounded-lg shadow-lg flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-semibold">{profile.username}</h2>
                    <p className="text-gray-500 text-sm">{profile.bio}</p>
                    <p className="text-sm mt-1">{(profile.followers || []).length} Followers</p> {/* Safe fallback */}
                  </div>
                  <button
                    onClick={() => handleFollow(profile.username)}
                    className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
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
