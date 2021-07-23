# Project Setup
First of all set a project in firebase. then created a web app in firebase project. From that web app I took the firebaseConfig variable and brought it into the firebaseInit file inside firebase folder.

#### firebaseInit.js
1 = here I don't need all of the firebase services. I just need the app services. that's why i imported only the app service.

2 = here I imported the firestore service.

3 = initialized firebase app

4 = firebase timestamp. now i may not understand what is the timestamp, but later he will explain.

# Navigation
in this part i am gonna add navigation for desktop and mobile.

#### Navigation.vue (template)
5 = gave name to the 'to' attribute so that i can change the url whenever i want.

6 = vue-svg-loader dependency makes it possible to use svg images like vue components. to use the dependency a configuration file is included called "vue.config.js"

#### (style)
7, 8, 9, 10 = [Vue Transition in official website](https://vuejs.org/v2/guide/transitions.html#Transition-Classes)

# Footer
the footer component is copied and pasted from the repository.

# Home
### Blog Post Component
Now we are going to have another component named BlogPost for all the blog post previews in the home page

#### BlogPost.vue (template)
11 = since the BlogPost component works for every blog preview and they have a common prop, we need to make sure which one is getting fit there. that's why we are using if else and checking if it's welcomeScreen.

#### (style)
12 = The CSS object-fit property is used to specify how an <img> or <video> should be resized to fit its container. more details on [w3schools page](https://www.w3schools.com/csS/css3_object-fit.asp)