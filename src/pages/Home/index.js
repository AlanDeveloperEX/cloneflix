import React, {useEffect, useState} from 'react'
import Data from '../../services/tmdb'
import { ListRow, Featured } from "../../components"
import { NegativeTop, Loading } from './Home.elements'

const Home = () => {

  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)

  useEffect(() => {
    const loadData = async () => {
      // ALL DATA 
      let list = await Data.getHomeList()
      setMovieList(list)

      //SET FEATURED
      let featured = list.filter(item => item.slug === 'original')
      let IndexChosen = Math.floor(Math.random() * (featured[0].items.results.length - 1))
      let chosen = featured[0].items.results[IndexChosen]
      
      let chosenInfo = await Data.getFeaturedInfo(chosen.id, 'tv')
      setFeaturedData(chosenInfo)

    }

    loadData()
  }, [])

  return (
    <>

      {featuredData &&
        <Featured item={featuredData} />
      }

      <NegativeTop>
        {movieList.map((item, key) =>
          <ListRow key={key} items={item.items} title={item.title} />  
        )}
      </NegativeTop>
      
      {movieList.length <= 0 || featuredData <= 0 &&
        <Loading>
          <img src="./loading.gif" alt="loading"/>
        </Loading>
      }
      
    </>
  )
}

export default Home
