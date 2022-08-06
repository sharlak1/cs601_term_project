<template>

<body>
  <div id="nav">
 <nav class="container navbar navbar-expand-lg navbar-light">
    <a class="navbar-brand" href="/"><img src="./assets/logo.png"  class="logo"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- replacing the ul with a div tag -->
        <!-- <ul class="navbar-nav me-auto mb-2 mb-lg-0">   -->
        <div class="navbar-nav mr-auto">
            <!-- on each of the li tag , there is a class named *nav item*, copy it and place it on the a tag & delete the li -->
            <!-- <a class=" nav-item nav-link active" aria-current="page" href="#">Home</a> -->
            <!-- replace the a tag with the router link -->
            <router-link to="/" class="nav-item nav-link title">Home</router-link>
            <router-link to="/About" class="nav-item nav-link">About Me</router-link>
            <router-link to="/Skills" class="nav-link">Skills</router-link>
            <router-link to="/Contact" class="nav-link">Contact</router-link>
        </div>
       
    </div>
</nav>
 </div>
  <router-view/>
  </body>
</template>

<style>
body {
  background: #353535;
}
 #nav{
background: white;
 padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
.title {

}

#nav a.router-link-exact-active {
  color: #353535;
  background: #b8e4b4;
  border-radius: .5rem;
}

.logo {
  max-width: 364px;

}
</style>