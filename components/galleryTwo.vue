<template>
  <ul class="cb-slideshow">
        <li v-for="image in images" :key="image.id">
            <span :style="backgroundClass(image)"></span>
        </li>
    </ul>
</template>

<script>
export default {
    data: function() {
        return {
            images: [
                {
                    id: 1,
                    title: 'sports 1',
                    path: 'images/Home1.jpg'
                }, 
                {
                    id: 2,
                    title: 'sports 2',
                    path: 'images/Home2.jpg'
                }, 
                {
                    id: 3,
                    title: 'sports 3',
                    path: 'images/Home3.jpg'
                }, 
                // {
                //     id: 4,
                //     title: 'sports 4',
                //     path: 'https://lorempixel.com/1920/1080/sports/7/'
                // }, 
                // {
                //     id: 5,
                //     title: 'sports 5',
                //     path: 'https://lorempixel.com/1920/1080/sports/5/'
                // }, 
                // {
                //     id: 6,
                //     title: 'sports 6',
                //     path: 'https://lorempixel.com/1920/1080/sports/6/'
                // }
            ]
        }
    },
    computed: {
        totalBackgroundImages() {
            return this.images.length;
        }
    },
    methods: {
        backgroundClass(image) {
            // determine place of image in array
            let pos = this.images.map(function(x) {
                    return x.id;
                }).indexOf(image.id);
            console.log(pos)
            if (pos > 0) {
                let styles = {
                    'animation-delay': pos * 6 + 's',
                    'background-image': `url(${image.path})`,
                    'animation': 'imageAnimation ' + this.totalBackgroundImages * 6 + 's linear infinite 0s'
                }
                console.log(styles);
                return styles;
            }
            return {
                'background-image': `url(${image.path})`,
            }
        },
        titleClass(image) {
            // determine place of image in array
            let pos = this.images.map(function(x) {
                    return x.id;
                }).indexOf(image.id);
            console.log(pos)
            if (pos > 0) {
                return {
                    'animation-delay': pos * 6 + 's'
                }
            }
        },
    },
}
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
  list-style: none;
}

.cb-slideshow:after {
  content: '';
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
  animation: imageAnimation 36s linear infinite 0s;
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
  animation: titleAnimation 36s linear infinite 0s;
}

.cb-slideshow li div h3 {
  font-family: 'BebasNeueRegular', 'Arial Narrow', Arial, sans-serif;
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
    /* transform: scale(1.1) rotate(2deg); */
  }
  25% {
    opacity: 0;
    /* transform: scale(1.1) rotate(2deg); */
  }
  100% {
    opacity: 0
  }
}

@keyframes titleAnimation {
  0% {
    opacity: 0;
    transform: translateX(200px);
  }
  8% {
    opacity: 1;
    transform: translateX(0px);
  }
  17% {
    opacity: 1;
    transform: translateX(0px);
  }
  19% {
    opacity: 0;
    transform: translateX(400px);
  }
  25% {
    opacity: 0
  }
  100% {
    opacity: 0
  }
}

@media screen and (max-width: 1140px) {
  .cb-slideshow li div h3 {
    font-size: 100px;
  }
}

@media screen and (max-width: 600px) {
  .cb-slideshow li div h3 {
    font-size: 80px
  }
}

</style>