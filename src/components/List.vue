<template>
	<div class="container-list">
		<div class="list-group">
			<div
				v-for="(item, index) in pokemons"
				:key="index"
				class="item-list"
				@click="openModal(item)"
			>
				{{ item.name }}
				<img
					v-show="!item.fav"
					src="../assets/img/icons/IconStarNoSelected.svg"
				/>
				<img v-show="item.fav" src="../assets/img/icons/IconStarSelected.svg" />
			</div>
		</div>
		<detail :pokemon.sync="pokemonData"></detail>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
import Detail from '@/components/Detail'
export default {
	name: 'list',
	props: ['pokemons'],
	components: {
		Detail,
	},
	data() {
		return {
			pokemon: {},
			pokemonData: {},
		}
	},
	computed: {
		...mapGetters({
			pokemonDetail: 'getPokemonDetail',
		}),
	},
	watch: {
		pokemonDetail() {
			this.pokemonData = {
				...this.pokemon,
				...this.pokemonDetail,
			}
		},
	},
	methods: {
		openModal(item) {
			this.pokemon = { fav: item.fav }
			console.log(item)
			this.$store.dispatch('detailPokemon', item.name)
			this.$bvModal.show('my-modal')
		},
	},
}
</script>
<style lang="scss">
.container-list {
	height: 400px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 120px;
	width: 100%;
}
.list-group {
	width: 80%;
}
.item-list {
	height: 60px;
	width: 100%;
	margin-top: 5px;
	margin-bottom: 5px;
	padding-left: 20px;
	padding-right: 10px;
	padding-bottom: 5px;
	padding-top: 5px;
	border-radius: 5px;
	background: #ffffff;
	font-family: 'Lato';
	font-style: normal;
	font-weight: 500;
	font-size: 22px;
	line-height: 26px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: #353535;
}
</style>
