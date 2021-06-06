import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../store/hooks/hooks'
import Card from '../../components/Card'

import { fetchCharacters } from '../../store/slices/charactersSlice'

function Home() {
  const dispatch = useAppDispatch()
  const characters = useAppSelector((state) => state.characters.charactersData)

  useEffect(() => {
    dispatch(fetchCharacters())
    console.log({ characters })
  }, [dispatch])

  const { results } = characters

  return (
    <>
      {results.map((character) => (
        <Card
          key={character.id}
          name={character.name}
          img={character.image}
          origin={character.origin.name}
          gender={character.gender}
          status={character.status}
        />
      ))}
    </>
  )
}

export default Home
