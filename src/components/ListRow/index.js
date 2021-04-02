import React, { useState } from 'react'
import { ListContainer, ListArea, ListItems, ListItem, NavBefore, NavNext } from './ListRow.elements'
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'

const ListRow = ({ title, items}) => {

  const [ scrollX, setScrollX ] = useState(0)

  const handleLeft = () => {

    let x = scrollX + Math.round(window.innerWidth / 2)

    if (x > 0) {
      x = 0
    }

    setScrollX(x)

  }

  const handleRight = () => {

    let x = scrollX - Math.round(window.innerWidth / 2)
    let listW = items.results.length * 250

    if ((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) - 80
    }

    setScrollX(x)

  }

  return (
    <ListContainer>

      <h2>{title}</h2>

      <ListArea>

        <NavBefore onClick={handleLeft}>
          <MdNavigateBefore  />
        </NavBefore>

        <NavNext onClick={handleRight}>
          <MdNavigateNext  />
        </NavNext>

        <ListItems 
          style={{ marginLeft: scrollX }}
        >
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
