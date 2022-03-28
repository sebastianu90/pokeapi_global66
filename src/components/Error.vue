<template>
	<div class="container-error">
		<div class="title-error">Uh-oh!</div>
		<p class="text">You look lost on your journey!</p>
		<button class="button-red" @click="goHome" >Go back home</button>
	</div>
</template>
<script>
export default {
	name: 'error-component',
	methods: {
		goHome() {
			this.router.go({name:'Home'})
		}
	}
}
</script>
<style lang="scss">
.container-error {
	margin-top: 130px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
  width: 100%;
  height: 100%;
}
.title-error {
	font-family: Lato;
	font-size: 36px;
	font-style: normal;
	font-weight: 700;
	line-height: 43px;
	letter-spacing: 0em;
	text-align: center;
	color: #353535;
  padding: 5px;
}
.text {
	font-family: Lato;
	font-size: 20px;
	font-style: normal;
	font-weight: 500;
	line-height: 30px;
	letter-spacing: 0em;
	text-align: center;
	color: #5e5e5e;
  padding: 5px;
}
.button-red {
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 25px;
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
}
</style>
