const apiKey = "fB4ap5g95qvaJNuSy7gpmhR56961KMU5";

export default function getGifs({ keyword = "", limit = 8, page = 0 } = {}) {
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=g&lang=en`;

  return fetch(apiUrl)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const gifs = data.map((image) => {
        const {images, title, id} = image;
        const {url} = images.fixed_width_downsampled
        return {title, id, url}
        });
      return gifs;
    });
}
