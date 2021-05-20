import { createSlice } from '@reduxjs/toolkit'
import api from '../../services/api'

const initialState = {}

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    getCharacters: (state) => {
      state.loading = true
      state.error = false
    },
    getCharactersSuccess: (state, actions) => {
      state.loading = false
      state.error = false
      state.data = actions.payload
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

export const fetchCharacters = () => async (dispatch) => {
  dispatch(getCharacters())

  try {
    const response = await api.get('/character')

    if (response.status > 200) {
      dispatch(getCharactersFailure())
    }

    dispatch(getCharactersSuccess(response))
  } catch (error) {
    console.log(`Error ${error}`)
  }
}
