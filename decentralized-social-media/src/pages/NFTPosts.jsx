function NFTPosts() {
    const nftItems = [
      { id: 1, title: 'CryptoArt #001', price: '2 ETH' },
      { id: 2, title: 'TracePoint Exclusive', price: '1.5 ETH' },
      { id: 3, title: 'Web3 Masterpiece', price: '3 ETH' },
    ];
  
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white p-8">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">NFT Marketplace</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nftItems.map(item => (
            <div key={item.id} className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300">
              <div className="bg-indigo-100 h-40"></div> {/* placeholder for image */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-indigo-500 mb-4">{item.price}</p>
                <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition duration-300">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default NFTPosts;
  