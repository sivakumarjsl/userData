import axios from 'axios';

export const getUserDetails = () => dispatch => {
  axios.get(`https://randomuser.me/api/0.8/?results=20`)
    .then(res => {
      localStorage.setItem('userDetailsData', JSON.stringify(res.data.results))
    }).catch(err => {
      console.log('error,', err)
  })
}

