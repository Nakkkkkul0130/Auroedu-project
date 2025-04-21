import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Profile() {
  const { username } = useParams();
  const [userProfile, setUserProfile] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [followersCount, setFollowersCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);

  useEffect(() => {
    // Fetch profile and posts data from localStorage
    const storedProfiles = JSON.parse(localStorage.getItem('profiles')) || [];
    const userProfileData = storedProfiles.find((profile) => profile.username === username);

    if (userProfileData) {
      setUserProfile(userProfileData);
      const posts = JSON.parse(localStorage.getItem('posts')) || [];
      const userPostsFiltered = posts.filter((post) => post.username === username);
      setUserPosts(userPostsFiltered);

      // Set follower and following counts (replace with actual logic if needed)
      setFollowersCount(userProfileData.followers || 0);
      setFollowingCount(userProfileData.following || 0);
    } else {
      alert("Profile not found");
    }
  }, [username]);

  if (!userProfile) {
    return <p className="text-red-500">Loading profile...</p>;
  }

  const userPostsFiltered = userPosts.filter((post) => post.username === username);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{username}'s Profile</h1>
      <p className="text-lg mb-4">{userProfile.bio}</p>

      <h2 className="text-2xl font-semibold mb-4">Posts</h2>
      <div className="flex flex-col gap-4">
        {Array.isArray(userPostsFiltered) && userPostsFiltered.length > 0 ? (
          userPostsFiltered.map((post) => (
            <div key={post.id} className="p-4 border rounded-lg shadow-lg">
              <p>{post.content}</p>
            </div>
          ))
        ) : (
          <p>No posts to display.</p>
        )}
      </div>

      <div className="mt-4">
        <p className="font-semibold">Followers: {followersCount}</p>
        <p className="font-semibold">Following: {followingCount}</p>
      </div>
    </div>
  );
}

export default Profile;
