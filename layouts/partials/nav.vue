<template>
    <!-- Add fixed-top class for a fixed nav -->
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar image goes here</a>
            <button class="navbar-toggler collapsed" type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarNavAltMarkup" 
                    aria-controls="navbarNavAltMarkup" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                    v-on:click="navToggler()">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav nav navbar-right">
                    <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link" href="#">Features</a>
                    <a class="nav-item nav-link" href="#">Pricing</a>
                    <a class="nav-item nav-link disabled" href="#">Disabled</a>
                </div>
            </div>
        </div>

<!-- 
<li class="active"><a href="#">Home</a></li>
<li class="dropdown">
    <a class="dropdown-toggle" data-toggle="dropdown" href="#">Page 1
        <span class="caret"></span>
    </a>
    <ul class="dropdown-menu">
        <li><a href="#">Page 1-1</a></li>
        <li><a href="#">Page 1-2</a></li>
        <li><a href="#">Page 1-3</a></li>
    </ul>
</li>
<li><a href="#">Page 2</a></li>
-->
    </nav>
</template>

<script>
export default {
    methods: {
        navToggler() {
            console.log('nav toggle clicked');
        }
    }
}

</script>

<style>

</style>