import axios from 'axios';

export const submitToDB = (input) => {
  return axios.post('http://localhost:3001/', {
    input: input
  }).then((resp) => {
    return resp.data;
  }).catch(error => {
    throw error;
  });
}

export const getInputInfoFromDB = (input) => {
  return axios.get(`http://localhost:3001/${input}`).then((resp) => {
    return resp && resp.data;
  }).catch(error => {
    throw error;
  });
}