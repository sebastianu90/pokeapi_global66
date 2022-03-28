<template>
	<div class="container-botton-bar">
		<div class="botton-bar-group">
			<button class="botton-all" @click="all">
				<img class="icon-all" src="../assets/img/icons/IconAll.svg" /> All
			</button>
			<button class="botton-fav" @click="fav">
				<img class="icon-all" src="../assets/img/icons/IconStar1.svg" />
				Favorites
			</button>
		</div>
	</div>
</template>
<script>
export default {
	name: 'botton-bar',
	data() {
		return {}
	},
	methods: {
		all() {
			this.$store.dispatch('getPokemonsAll')
		},
		fav() {
			this.$store.dispatch('getPokemonsFavs')
		},
	},
}
</script>
<style lang="scss">
.container-botton-bar {
	width: 100%;
	height: 80px;
	position: fixed;
	left: 0%;
	bottom: 0%;
	background: #ffffff;
	box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.05);
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
}
.botton-bar-group {
	width: 80%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
}
.botton-all {
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
	width: 50%;
	margin-right: 1%;
}
.botton-fav {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	height: 44px;
	color: white;
	background: #bfbfbf;
	border-radius: 60px;
	border-color: #bfbfbf;
	border: none;
	text-align: center;
	font-family: 'Lato';
	font-weight: 500;
	font-size: 18px;
	width: 50%;
	margin-left: 1%;
}
.icon-all {
	padding-right: 10px;
}
</style>
