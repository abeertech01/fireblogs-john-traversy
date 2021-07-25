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
12 = The CSS object-fit property is used to specify how an `<img>` or `<video>` should be resized to fit its container. more details on [w3schools page](https://www.w3schools.com/csS/css3_object-fit.asp)

### Blog Card Component
simply i made another component for blog cards. then i added the cards inside home page. that's it.

#### App.vue (line 70)
13 = fill property in css is for filling in the color of the SVG image. details in [CSS-TRICKS website](https://css-tricks.com/almanac/properties/f/fill/)

14 = The pointer-events property defines whether or not an element reacts to pointer events. details on [w3schools website](https://www.w3schools.com/csSref/css3_pr_pointer-events.asp)

### Register Section
added a register section at bottom of home view.

# Blogs View
replaced the blogcards array and fetched by computed property.

created Blogs.vue view/component.

since some of the styling is given commonly in app.vue it is working same for blog cards in blogs component.

#### /store/index.js (line 8)
15 = since i will need to use the set of data in multiple places i replaced it from home component to the state of store.

#### Blogs.vue (line 27)
16 = get and set because the actual data is situated in state. so we need to get the data and in the meantime we need to set the data.

#### BlogCard.vue (line 38)
17 = just fetched the the editPost data.

#### (line 3)
18 = added v-show condition so that the options can be disappeared or appeared when we click the toggle checkbox button.

# Vue Document Titles
in this part we will set a system so that whenever we go to a page the name of the page will be appeared on tab which is document title.
to do so, we added meta data to every route. then attached beforeEach guard to router and set document title for each route.

# Firebase Auth Implementation
first of all i created three views for login, registration and forgetting password (recovering password).

since these 3 pages look same that's why i added a lot of common styling in login page and didn't scope.

#### Login.vue(line 174)
19 = The flex property is a shorthand property for:

1.flex-grow
2.flex-shrink
3.flex-basis

for better understanding see the details in [CSS TRICKS website](https://css-tricks.com/almanac/properties/f/flex/)

#### Register.vue(line 45)
20 = here i imported firebase auth to make the authentication happen.

now it's time to set the system to register. so, created a method register.

#### (line 78)
21 = created authentication variable.

22 = creating a user

23 = created a user document in database by the created user's uid.

24 = then we set all the data in the document.

25 = after that we go to the home page.

so registering works fine. now it's time to set login

as usual here we also need to import firebase auth and error data. then logging in with the signin method using email and password. now we are going to test if we get logged in after reloading.

#### App.vue(line 27)
26 = we can see null in console. that's because our application is running before firebase initializes.

#### main.js(line 13)
27 = after making this change now we can get logged in and initializtion is going to sequentially happen.

#### ForgotPassword(line 55)
28 = in resetPassword it sends an reset email and if it successfully sends the email then it shows the modal with the set modal message. 

#### /store/index.js (line 62)
29 = with this action we can get the currently logged user's information. the information collected by the mutations committed there inside.

#### App.vue (line 25)
30 = here this method runs in every auth state change. the user parameter contains if there is any current user logged in.

# Profile Menu
#### Navigation.vue (line 18)
31 = here are all profile menu html.

32 = here is the styling of the profile menu.