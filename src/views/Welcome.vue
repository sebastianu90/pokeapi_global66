<template>
	<div class="main">
		<div class="container-logo">
			<img
				class="pikachu"
				src="../assets/img/Pikachu_welcome.svg"
				alt="Pikachu welcome"
			/>
			<img
				class="circle"
				src="../assets/img/Ellipse.svg"
				alt="Pikachu welcome"
			/>
		</div>
		<div class="container-info">
			<div class="title">Welcome to Pokedéx</div>
			<p class="sub-title">
				The digital encyclopedia created by Professor Oak is an invaluable tool
				to Trainers in the Pokémon world.
			</p>
			<button @click="gotToHome" class="button-red">Get started</button>
		</div>
	</div>
</template>
<script>
export default {
	name: 'welcome',

	methods: {
		gotToHome() {
			this.$router.push({name:'Home'})
    },
	},
}
</script>
<style lang="scss">
.main {
	display: flex;
	flex-direction: column;
	height: 100%;
  margin-top: 139px;
}
.title {
	margin-top: 50px;
	font-family: 'Lato';
	font-weight: 700;
	font-size: 26px;
	line-height: 31.2px;
	color: #353535;
}

.sub-title {
	margin-left: 25px;
	margin-right: 25px;
	margin-top: 40px;
	margin-bottom: 40px;
	font-family: 'Lato';
	font-weight: 500;
	font-size: 18px;
	line-height: 150%;
	text-align: center;
	color: #5e5e5e;
}

.button-red {
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

.button-red:active {
	background: #C00E20;
	border-color: #C00E20;
}

.pikachu {
	position: absolute;
	z-index: 10;
	top: 72px;
	left: 43px;
}

.circle {
	position: relative;
	left: 90px;
}

.container-info {
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
}

</style>
