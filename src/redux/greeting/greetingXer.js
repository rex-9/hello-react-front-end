import { createAsyncThunk } from '@reduxjs/toolkit';

import baseURL from '../../api';

const API_URL = 'greetings';

const FETCH = 'hello-react-front-end/greeting/FETCH';

export default (state = [], action) => {
  switch (action.type) {
    case `${FETCH}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export const fetchGreeting = createAsyncThunk(FETCH, async () => {
  // fetch(`${baseURL}${API_URL}`, {
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // })
  // .then((response) => response.json().message)
  // .then(data => {
  //   console.log('Success:', data);
  // })
  // .catch((error) => {
  //   console.error('Error:', error);
  // });

  const response = await fetch(`${baseURL}${API_URL}`);
  const data = await response.json();
  return data.message;
});
