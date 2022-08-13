import axios from 'axios';

const URL = 'http://localhost:3000/cliente/';

const genericRequest = async (path) => {
  const result = await axios.get(URL + path)
    .then((result) => result.data)
    .catch((error) => console.log(error));
  return result;
};

genericRequest('servicos').then((e) => console.log(e));

export {
  genericRequest,
};
