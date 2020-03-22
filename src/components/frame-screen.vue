<template>
	<div>
		<div class="screen">
			<div class="left"></div>
			<div class="right">
				<p class="r1"></p>
				<p class="r2"></p>
				<p class="r3"></p>
			</div>
		</div>
		<div class="screen">
			<div class="left"></div>
			<div class="right">
				<p class="r1"></p>
				<p class="r2"></p>
				<p class="r3"></p>
			</div>
		</div>
		<div class="screen">
			<div class="left"></div>
			<div class="right">
				<p class="r1"></p>
				<p class="r2"></p>
				<p class="r3"></p>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.screen{width:100%;min-height: 1rem;display: flex;flex-direction: row;}
	.screen .left{width:0.8rem;height:0.7rem;background-color: #2C3E50;border-radius:50%;margin:0.1rem}
	.screen .right{width:100%}
	.screen .right p{width:100%; height:0.7rem;background-color: #2C3E50;margin:0.1rem 0 0.2rem 0.1rem;}
	.screen .right .r1{width:50%}
</style>
