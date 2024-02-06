import axios from 'axios'

export const getPackages = async (searchText, page) => {
  const response = await axios.get(
    `https://registry.npmjs.org/-/v1/search?text=${searchText}&size=10&from=${page}`
  )

  return response
}
