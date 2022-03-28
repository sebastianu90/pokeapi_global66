import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		pokemonDetail: {},
		pokemon: [],
		pokemons: [],
		pokemonsFavsInitial: [{
			name: 'charmander',
			fav: true,
		},
		{
			name: 'squirtle',
			fav: true,
		},
		{
			name: 'wartortle',
		url: 'https://pokeapi.co/api/v2/pokemon/8/',
			fav: true,
		}],
		pokemonsFavs: [],
		show: {
			error: false,
			list: true,
			listFavs: false,
			loading: false,
			find: false,
			BottomBar: true,
		},
	},
	getters: {
		getPokemonDetail: (state) => state.pokemonDetail,
		getPokemon: (state) => state.pokemon,
		getPokemons: (state) => state.pokemons,
		getPokemonsFavs: (state) => state.pokemonsFavs,
		getShowList: (state) => state.show.list,
		getShowListFavs: (state) => state.show.listFavs,
		getShowBottomBar: (state) => state.show.BottomBar,
		getShowFind: (state) => state.show.find,
		getError: (state) => state.show.error,
	},
	mutations: {
		GET_POKEMON_LIST(state, pokemons) {
			console.log(pokemons)
			state.pokemons = pokemons.map((el) => {
				let flag = 0
				for (let i = 0; i < state.pokemonsFavsInitial.length; i++) {
					if (flag === 0) {
						if (el.name === state.pokemonsFavsInitial[i].name) {
							el.fav = true
							flag = 1
						}
					} else el.fav = false
				}
				console.log(el.fav)
				return {
					...el,
				}
			})
		},
		FIND_POKEMON(state, pokemonFinded) {
			state.pokemon = [pokemonFinded]
		},
		DETAIL_POKEMON(state, pokemon) {
			state.pokemonDetail = {
				img: pokemon.sprites.other['official-artwork'].front_default,
				stats: {
					Name: pokemon.forms[0].name,
					Weight: pokemon.weight,
					Height: pokemon.height,
					Types: pokemon.types.map((el) => el.type.name).toString(),
				},
			}
		},
		FAVS_POKEMONS(state, pokemons) {
			if(state.pokemonsFavs = []) {
				state.pokemonsFavs = state.pokemonsFavsInitial
			} else state.pokemonsFavs
		},
		ADD_FAV(state, pokemon) {
			state.pokemonsFavs.push(pokemon)
		},
		REMOVE_FAV(state, pokemon) {
			state.pokemonsFavs.splice(pokemon, 1)
			console.log(state.pokemonsFavs)
		}
	},
	actions: {
		getPokemonList({ commit }) {
			axios.get('https://pokeapi.co/api/v2/pokemon').then((data) => {
				console.log('actions', data.data.results)
				commit('GET_POKEMON_LIST', data.data.results)
			})
		},
		findPokemon({ commit, state }, name) {
			state.show.error = false
			axios
				.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
				.then((data) => {
					console.log('actions', data)
					state.show.list = false
					setTimeout(commit('FIND_POKEMON', data.data), 2000)
					state.show.find = true
				})
				.catch((err) => {
					state.show.error = true
					state.show.bottomBar = false
					state.show.find = false
					state.show.list = false
				})
		},

		detailPokemon({commit, state }, name) {
			state.show.error = false
			axios
				.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
				.then((data) => {
					console.log('detailPokemon', data)
					commit('DETAIL_POKEMON', data.data)
				})
				.catch((err) => {
					console.log(err)
				})
		},
		getPokemonsFavs({commit, state }){
			state.show.list = false
			commit('FAVS_POKEMONS')
			state.show.listFavs = true
			
		},
		addFavPokemon({commit, state}, pokemon) {
			const index = state.pokemonsFavs.findIndex(el => el.name === pokemon.name)
			if (index === -1 ) {
				commit('ADD_FAV', pokemon)
			}	else {
				commit('REMOVE_FAV', index)
			}
		},
		getPokemonsAll({state}) {
			state.show.list = true
			state.show.listFavs = false
		}
	},
	modules: {},
})
