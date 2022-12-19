import Axios from 'axios'

export const useApi = () => {
  return Axios.create()
}
