import { useApi } from '@/plugins/api'

export const usePokemon = () => {
  const getPokemones = () => {
    return useApi().get('https://pokeapi.co/api/v2/pokemon')
  }

  return {
    getPokemones
  }
}
