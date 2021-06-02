import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../store/hooks/hooks'

import {fetchCharacters} from "../../store/slices/charactersSlice"

function Home() {
  const dispatch = useAppDispatch()
  const characters = useAppSelector(state => state.characters.charactersData)

  useEffect(() => {
    dispatch(fetchCharacters())
    console.log({characters})
  }, [dispatch])

  return (
    <>
      <h1>Index page</h1>
    </>
  )
}

export default Home