const getArtWorks = async (limit, width) => {
  const API_URL = `https://api.artic.edu/api/v1/artworks?limit=${limit}`;

  let artworksWithImages = [];

  while (artworksWithImages.length < limit) {
    const response = await fetch(API_URL);
    const { data } = await response.json();

    for (const artwork of data) {
      if (artwork.image_id) {
        const image_url = `https://www.artic.edu/iiif/2/${artwork.image_id}/full/${width},/0/default.jpg`;
        artworksWithImages.push({
          title: artwork.title || 'Unknown',
          author: artwork.artist_title || 'Unknown',
          image_url
        });

        if (artworksWithImages.length === limit) {
          break;
        }
      }
    }
  }

  return artworksWithImages;
};

export default getArtWorks;
