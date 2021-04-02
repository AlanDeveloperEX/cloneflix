import React from 'react'
import { FeaturedtContainer, FeaturedDegradeVertical, FeaturedDegradeHorizontal, FeaturedInfo, FeaturedDescription, FeaturedButtons, FeaturedGens } from './Featured.elements'
import { ALink } from '../../globalStyles'
import { FaPlay, FaPlus } from 'react-icons/fa'

const Featured = ({item}) => {

  let firstDate = new Date(item.first_air_date)

  let description = item.overview
  if (description.length > 300) {
    description = description.substring(0, 300) + '...'
  }

  let genres = []
  for (let i in item.genres) {
    
    genres.push( item.genres[i].name )
    
  }

  return (
    <FeaturedtContainer
      style={{ backgroundImage: `url( https://image.tmdb.org/t/p/original/${item.backdrop_path} )` }}
    >
      <FeaturedDegradeVertical>
        <FeaturedDegradeHorizontal>
          <h1>
            {item.name}
          </h1>
          <FeaturedInfo>
            <div>{item.vote_average} points</div>
            <div>{firstDate.getFullYear()}</div>
            <div>{item.number_of_seasons} season{item.number_of_seasons !== 1 && 's'}</div>
          </FeaturedInfo>

          <FeaturedDescription>
            {description}
          </FeaturedDescription>

          <FeaturedButtons>
            <ALink normal href={`watch/${item.id}`}> <FaPlay/> Watch </ALink>
            <ALink href={`list/add/${item.id}`}> <FaPlus/> Add List </ALink>
          </FeaturedButtons>

          <FeaturedGens>
            <strong>Genres:</strong> {genres.join(', ')}
          </FeaturedGens>

        </FeaturedDegradeHorizontal>
      </FeaturedDegradeVertical>
    </FeaturedtContainer>
  )
}

export default Featured
