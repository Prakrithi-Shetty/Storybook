import axios from "axios";

export default axios.create({
  baseURL: `https://pruvaa-poc.herokuapp.com/`,
});
