import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '../storeConfig'
import api from '../../services/api'

interface characters {
  info: {
    count: number
    pages: number
    next: string | null
    prev: string | null
  }
  results: [
    {
      id: number
      name: string
      status: string
      species: string
      type: string
      gender: string
      origin: {
        name: string
        url: string
      }
      location: {
        name: string
        url: string
      }
      image: string
      episode: Array<string>
      url: string
      created: string
    }
  ]
}

type CharactersState = {
  loading: boolean
  error: boolean
  charactersData: characters
}

const initialState: CharactersState = {
  loading: false,
  error: false,
  charactersData: {
    info: {
      count: 671,
      pages: 34,
      next: 'https://rickandmortyapi.com/api/character?page=2',
      prev: null
    },
    results: [
      {
        id: 1,
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human',
        type: '',
        gender: 'Male',
        origin: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        location: {
          name: 'Earth (Replacement Dimension)',
          url: 'https://rickandmortyapi.com/api/location/20'
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        episode: ['https://rickandmortyapi.com/api/episode/1'],
        url: 'https://rickandmortyapi.com/api/character/1',
        created: '2017-11-04T18:48:46.250Z'
      }
    ]
  }
}

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    getCharacters: (state) => {
      state.loading = true
      state.error = false
    },
    getCharactersSuccess: (state, actions: PayloadAction<characters>) => {
      state.loading = false
      state.error = false
      state.charactersData = actions.payload
    },
    getCharactersFailure: (state) => {
      state.loading = false
      state.error = true
    }
  }
})

export const {
  getCharacters,
  getCharactersSuccess,
  getCharactersFailure
} = charactersSlice.actions

export default charactersSlice.reducer

export const fetchCharacters = (): AppThunk => async (dispatch) => {
  dispatch(getCharacters())

  try {
    const response = await api.get('/character')

    if (response.status > 200) {
      dispatch(getCharactersFailure())
    }

    dispatch(getCharactersSuccess(response.data))
  } catch (error) {
    console.log(`Error ${error}`)
  }
}
