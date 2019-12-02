<template>
	<main>
		<ul class="cb-slideshow hide-tablet-up">
			<li v-for="image in mobileImages" :key="image.id">
				<span :style="backgroundClass(image, mobileImages)"></span>
			</li>
		</ul>
		<ul class="cb-slideshow hide-tablet-down">
			<li v-for="image in desktopImages" :key="image.id">
				<span :style="backgroundClass(image, desktopImages)"></span>
			</li>
		</ul>
	</main>
</template>

<script>
export default {
	data: function() {
		return {
			desktopImages: [
				{
					id: 1,
					path: "gallery/desktop/Home1.jpg"
				},
				{
					id: 2,
					path: "gallery/desktop/Home2.jpg"
				},
				{
					id: 3,
					path: "gallery/desktop/Home3.jpg"
				},
				{
					id: 4,
					path: "gallery/desktop/Home1.jpg"
				},
				{
					id: 5,
					path: "gallery/desktop/Home2.jpg"
				},
				{
					id: 6,
					path: "gallery/desktop/Home3.jpg"
				}
			],
			mobileImages: [
				{
					id: 1,
					path: "gallery/mobile/MHome1.jpg"
				},
				{
					id: 2,
					path: "gallery/mobile/MHome2.jpg"
				},
				{
					id: 3,
					path: "gallery/mobile/MHome3.jpg"
				},
				{
					id: 4,
					path: "gallery/mobile/MHome1.jpg"
				},
				{
					id: 5,
					path: "gallery/mobile/MHome2.jpg"
				},
				{
					id: 6,
					path: "gallery/mobile/MHome3.jpg"
				}
			]
		};
	},
	methods: {
		backgroundClass(image, images) {
			// determine place of image in array
			let pos = images
				.map(function(x) {
					return x.id;
				})
				.indexOf(image.id);

			return {
				"animation-name": "imageAnimation",
				"animation-duration": this.totalBackgroundImages * 6 + "s",
				"animation-delay": pos * 6 + "s",
				"background-image": `url(${image.path})`,
				"animation-iteration-count": "infinite",
				"animation-fill-mode": "linear"
			};
		}
	},
	computed: {
		totalBackgroundImages() {
			return this.mobileImages.length;
		}
	}
};
</script>

<style>
.cb-slideshow,
.cb-slideshow:after {
	position: fixed;
	width: 100%;
	height: 100%;
	/* top: 0px; */
	left: 0px;
	z-index: 0;
	list-style-type: none;
}

.cb-slideshow:after {
	content: "";
}

.cb-slideshow li span {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0px;
	left: 0px;
	color: transparent;
	background-size: cover;
	background-position: 50% 50%;
	background-repeat: none;
	opacity: 0;
	z-index: 0;
}

.cb-slideshow li div {
	z-index: 1000;
	position: absolute;
	bottom: 30px;
	left: 0px;
	width: 100%;
	text-align: center;
	opacity: 0;
	color: #fff;
}

.cb-slideshow li div h3 {
	font-family: "BebasNeueRegular", "Arial Narrow", Arial, sans-serif;
	font-size: 160px;
	padding: 0;
	line-height: 200px;
}

@keyframes imageAnimation {
	0% {
		opacity: 0;
		animation-timing-function: ease-in;
	}
	8% {
		opacity: 1;
		animation-timing-function: ease-out;
	}
	17% {
		opacity: 1;
	}
	25% {
		opacity: 0;
	}
	100% {
		opacity: 0;
	}
}
</style>