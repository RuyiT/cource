<template>
	<div>
		<div>i am parent {{$route.query.name}}</div>
		<router-view></router-view>
	</div>
</template>