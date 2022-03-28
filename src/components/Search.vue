<template>
	<div class="container-search">
		<div class="search-group">
			<b-form-input
			v-model="name"
			placeholder="Search"
			class="search"
		></b-form-input>
		<img
			@click="findPokemon"
			src="../assets/img/icons/search.svg"
			class="botton-search"
		/>
		</div>
	</div>
</template>
<script>
export default {
	name: 'search',
	data() {
		return {
			name: '',
		}
	},
	methods: {
		findPokemon() {
			this.$store.dispatch('findPokemon',this.name)
},
	},
}
</script>
<style lang="scss">
.search {
	width: 100%;
	height: 50px;
	margin-top: 35px;
	background: #ffffff;
	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
	border-radius: 5px !important;
	border: none !important;
	padding-left: 43px !important;
	padding-top: 14px !important;
	padding-bottom: 14px !important;
	font-family: 'Montserrat' !important;
	font-style: normal !important;
	font-weight: 500 !important;
	font-size: 16px !important;
	line-height: 140% !important;
	color: #353535 !important;
}
.botton-search {
	position: relative;
	width: 18px;
	height: 18px;
	top: -38px;
	margin-left: 15px;
}
.search-group {
	width: 80%
}
.container-search {
	position: fixed;
	background: #F9F9F9;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
}
</style>
