import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex justify-center gap-8 p-6 bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-md">
      <Link to="/" className="hover:underline font-semibold text-lg">Home</Link>
      <Link to="/create-profile" className="hover:underline font-semibold text-lg">Create Profile</Link>
      <Link to="/create-post" className="hover:underline font-semibold text-lg">Create Post</Link>
      <Link to="/view-posts" className="hover:underline font-semibold text-lg">View Posts</Link>
      <Link to="/follow-users" className="hover:underline font-semibold text-lg">Follow Users</Link>
      <Link to="/nft-posts" className="hover:underline font-semibold text-lg">NFT Posts</Link>
      <Link to="/censorship" className="hover:underline font-semibold text-lg">Censorship</Link>
    </nav>
  );
}

export default Navbar;
