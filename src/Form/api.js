import axios from "axios";

const API_CONTRY='http://localhost:3000/countries';
const API_CITIES='http://localhost:3000/cities';
const API_STATES='http://localhost:3000/states';
const API_USERS='http://localhost:3000/users'
export function getCountry() {
  return axios.get(API_CONTRY);
}

export function getCities() {
    return axios(API_CITIES);
 
  }

  export function getStates() {
    return axios(API_STATES);
 
  }

  export function getUsers() {
    return axios(API_USERS);
 
  }

  export function setUsers(obj) {
    return axios.post(API_USERS,obj);
 
  }