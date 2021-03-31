const API_KEY = 'e4b307fd956091d438d0e11b7de51c5e'
const BASE_URL = 'https://api.themoviedb.org/3/'
const GENDER = 'discover/movie?with_genres'

const baseFetch = async (endpoint) => {

  const req = await fetch(`${BASE_URL}${endpoint}`)
  const data = await req.json()

  return data

}

export default {

  getHomeList: async () => {
    return [
      {
        slug: 'original',
        title: 'Original Cloneflix',
        items: await baseFetch(`discover/tv?with_network=213&api_key=${API_KEY}`)
      },
      {
        slug: 'trending',
        title: 'Your Recomendations',
        items: await baseFetch(`trending/all/week?api_key=${API_KEY}`)
      },
      {
        slug: 'toprated',
        title: 'Top Rated',
        items: await baseFetch(`movie/top_rated?api_key=${API_KEY}`)
      },
      {
        slug: 'action',
        title: 'Action',
        items: await baseFetch(`${GENDER}=28&api_key=${API_KEY}`)
      },
      {
        slug: 'comedy',
        title: 'Comedy',
        items: await baseFetch(`${GENDER}=35&api_key=${API_KEY}`)
      },
      {
        slug: 'horror',
        title: 'Horror',
        items: await baseFetch(`${GENDER}=27&api_key=${API_KEY}`)
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await baseFetch(`${GENDER}=10749&page=2&api_key=${API_KEY}`)
      },
      {
        slug: 'documentary',
        title: 'Documentary',
        items: await baseFetch(`${GENDER}=99&page=2&api_key=${API_KEY}`)
      }
    ]
  },

  getFeaturedInfo: async (id, type) => {
    let info = {}

    if (id) {
      switch (type) {
        case 'movie':
            info = await baseFetch(`movie/${id}?api_key=${API_KEY}`)
          break;
        
        case 'tv':
            info = await baseFetch(`tv/${id}?api_key=${API_KEY}`)
          break;

        default:
            info = null
          break;
      }
    }

    return info
  }

}