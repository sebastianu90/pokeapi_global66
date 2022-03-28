<template>
	<div>
		<b-modal
			id="my-modal"
			modal-class="custom-dialog dialog-800"
			cancel-disabled
			ok-disabled
		>
			<template #modal-header="{ close }" header-class="header-modal-2">
				<button class="botton-close-modal" @click="close()">
					<img src="../assets/img/icons/IconCancel.svg" />
				</button>
				<img class="image-pokemon" :src="pokemon.img" />
			</template>
			<div
				v-for="(value, key) in pokemon.stats"
				:key="key"
				class="caracterist-list"
			>
				<strong>{{ key }}:</strong> {{ value }}
			</div>
			<template #modal-footer>
				<button class="botton-shared" @click="shareInfo">
					Share to my friends
				</button>
				<img v-show="pokemon.fav" @click="addPokemonFav" src="../assets/img/icons/IconStarSelected.svg" />
				<img v-show="!pokemon.fav"
					@click="addPokemonFav"
					src="../assets/img/icons/IconStarNoSelected.svg"
				/>
			</template>
		</b-modal>
	</div>
</template>
<script>
export default {
	name: 'detail',
	props: ['pokemon'],
	data() {
		return {
			// pokemon: {}
		}
	},
	methods: {
		shareInfo() {
			
		},
		addPokemonFav() {
			this.$store.dispatch('addFavPokemon', {
				name: this.pokemon.stats.Name,
				fav: true,
			})
			this.$bvModal.hide('my-modal')
		},
	},
}
</script>
<style lang="scss">
.modal-header {
	padding: 0px !important;
	background-image: url('../assets/img/Background.svg');
	background-size: cover;
	background-position: center;
	width: 100%;
	height: 220px;
	display: flex !important;
	flex-direction: column !important;
	align-items: center !important;
	justify-content: center !important;
}
.modal-body {
	padding-top: 1rem !important;
	padding-left: 1.5rem !important;
	padding-right: 1.5rem !important;
	padding-bottom: 1rem !important;
}
.modal-footer {
	// padding-top: 10px !important;
	padding-bottom: 10px !important;
	padding-left: 1.5rem !important;
	padding-right: 1.5em !important;
	// margin-top: 0rem !important;
	// margin-left: 1rem !important;
	// margin-right: 1rem !important;
	// padding-bottom: 1rem !important;
	padding: 0px;
	border-top: none !important;
	display: flex !important;
	flex-direction: row !important;
	justify-content: space-between !important;
}

.modal-dialog {
	max-width: 80% !important;
	margin: 8.2rem auto !important;
}
.caracterist-list {
	width: 100%;
	border-bottom: 1px solid #e8e8e8;
	padding: 10px 0px 10px 0px;
	font-family: Lato;
	font-size: 18px;
	font-style: normal;
	font-weight: 500;
	line-height: 27px;
	letter-spacing: 0em;
	text-align: left;
	color: #5e5e5e;
}
.botton-close-modal {
	position: absolute;
	top: 2%;
	left: 85%;
	border: none;
	background-color: transparent;
}
.botton-shared {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	height: 44px;
	color: white;
	background: #f22539;
	border-radius: 60px;
	border-color: #f22539;
	border: none;
	text-align: center;
	font-family: 'Lato';
	font-weight: 500;
	font-size: 18px;
	width: 75%;
	margin: 0px !important;
	padding: 0px !important;
}

.image-pokemon {
	height: 78%;
}
</style>
