import React from 'react'
import { ListContainer, ListArea, ListItems, ListItem } from './ListRow.elements'

const ListRow = ({ title, items}) => {
  return (
    <ListContainer>

      <h2>{title}</h2>

      <ListArea>
        <ListItems>
          {
            items.results.length > 0 && items.results.map((item, key) => 
              <ListItem key={key} >
                <img  src={ `https://image.tmdb.org/t/p/w300${item.poster_path}` } alt={item.original_title} />
              </ListItem>
            )
          }
        </ListItems>
      </ListArea>

    </ListContainer>
  )
}

export default ListRow
