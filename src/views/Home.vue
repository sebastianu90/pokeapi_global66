<template>
	<div class="home">
		<search />
		<error v-if="show.error" />
		<list :pokemons.sync="listFavs" v-if="show.listFavs"/>
		<list :pokemons.sync="list" v-if="show.list"/>
		<list :pokemons.sync="listFind" v-if="show.find"/>
		<botton-bar v-if="show.bottomBar"/>
		<!-- <HelloWorld msg="Welcome to Your Vue.js App" :pokemons.sync="list" /> -->
	</div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'
import Search from '@/components/Search.vue'
import Error from '@/components/Error.vue'
import BottonBar from '@/components/BottonBar.vue'
import List from '@/components/List.vue'

export default {
	name: 'Home',
	components: {
		Search,
		Error,
		BottonBar,
		List,
	},
	data() {
		return {
			list: [],
			listFind: [],
			listFavs: [],
			show: {
				listFavs: false,
				list: true,
				error: false,
				find: false,
				bottomBar: true
			}
		}
	},
	computed: {
		...mapGetters({
			pokemon: 'getPokemon',
			pokemons: 'getPokemons',
			pokemonsFavs: 'getPokemonsFavs',
			showList: 'getShowList',
			showListFavs: 'getShowListFavs',
			showBottomBar: 'getShowBottomBar',
			showFind: 'getShowFind',
			showError: 'getError'
		}),
	},
	watch: {
		pokemon() {
			this.listFind = this.pokemon
		},
		pokemons() {
			this.list = this.pokemons
		},
		pokemonsFavs() {
			this.listFavs = this.pokemonsFavs
			console.log('aca2')
		},
		showList() {
			this.show.list = this.showList
		},
		showListFavs() {
			this.show.listFavs = this.showListFavs
		},
		showError() {
			this.show.error = this.showError
		},
		showFind() {
			this.show.find = this.showFind
		},
		showBottomBar() {
			this.show.bottomBar = this.showBottomBar
		}
	},
	mounted() {
		this.getList()
	},
	methods: {
		getList() {
			this.$store.dispatch('getPokemonList')
		},
	},
}
</script>

<style lang="scss">
.home {
	display: flex;
	flex-direction: column;
	// justify-content: space-between;
	height: 100%;
	width: 100%;
}
</style>
