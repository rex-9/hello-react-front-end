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
  const response = await fetch(`${baseURL}${API_URL}`);
  const data = await response.json();
  return data.message;
});
