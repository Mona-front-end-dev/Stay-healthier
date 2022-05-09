import axios from 'axios'
import { setAlert } from './alert'
import { GET_POSTS, POST_ERROR } from './types'

//Get posts
export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:5000/api/posts')
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}
