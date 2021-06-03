# Instabug-Task2-Solution - Aya Mohamed AbuElSoud
<h3 style="text-align: center">Login Page</h3>
![Demo Image](https://i.imgur.com/nY9r7Fc.png)
<h3 style="text-align: center">Welcome Page</h3>
![Welcome Image](https://i.imgur.com/6i8hhfa.png)
<h3 style="text-align: center">404 Page</h3>
![Not Found Image](https://i.imgur.com/mIzDQZe.png)

## Learning Resources
##### Vue.js
- https://vuejs.org/
- https://vuex.vuejs.org/
- https://router.vuejs.org/
- https://vueschool.io/courses/vue-router-for-everyone
- https://vueschool.io/courses/vuex-for-everyone
- https://cli.vuejs.org/
- https://vue-loader.vuejs.org/guide/pre-processors.html#sass

#### Cypress.io
- https://www.cypress.io/

#### Deployment Guide
- https://fofxacademy.com/deploy-your-vue-js-application-to-netlify-in-4-steps/

#### Some issues I solved with research
- https://stackoverflow.com/questions/1559751/regex-to-make-sure-that-the-string-contains-at-least-one-lower-case-char-upper
- https://stackoverflow.com/questions/51639850/how-to-change-page-titles-when-using-vue-router
- https://stackoverflow.com/questions/48426972/importing-javascript-file-for-use-within-vue-component
- https://stackoverflow.com/questions/799981/document-ready-equivalent-without-jquery
- https://stackoverflow.com/questions/4919680/html5-placeholder-css-padding
- https://stackoverflow.com/questions/1055767/why-can-i-not-define-functions-in-jquerys-document-ready

## Timeline
##### 1 / 6 / 2021
- Worked on the UI (HTML, SASS -CSS-,Javascript -The Slider-).

##### 2 / 6 / 2021
- Searched / Asked for Vue.js resources and examples and learned how to implement simple router and state managment using Vuex store.
- Learned about new Vue CLI and created the project.
- Started working on the Vue application.
- Started to learn about cypress and how to use it.

#### 3 / 6 / 2021
- Continued working & testing the Vue App manually.
- Worked on writing automated tests and fixing bugs.
- Learned more about the deployment and choosed Netlify for its simplicity.
- Worked on the deployment

## Notes
- About "The password must be more than 8 characters otherwise shows (password must be six characters or more)" requirement.
    - I show "Password must be **8** characters or more" as in the design there's **+8** characters in the placeholder and it's mentioned in the requirement "The password must be more than **8** characters..." so it won't make sense to show "password must be **six** characters or more".
    - If this is wrong please let me know fixing it is very easy.
- About "The password must contain at least 1 uppercase letters and one number and shouldn’t
contain the email address name (the part that came before the @)" requirement.
    - I sh0w "The password must contain at least 1 uppercase letters and one number and shouldn’t
contain the email address name (the part that came before the @)" when these conditions exist in the password for example if the email typed aya@instabug.com in the login password is one of these cases
        -  aya123456K (contains email name "aya" and numbers, at least 1 uppercase letter)
        -  a123ya11545 (doesn't contains email name "aya" and numbers, without uppercase letters)
        -  aaKbcdefghij (doesn't contains email name "aya" nor numbers, with at least 1 uppercase letter "K")
        -  12345678 (doesn’t contains email name “aya” nor uppercase ltters but numbers only)
        -  abcdefghijkl (doesn’t contains email name “aya” nor uppercase ltters nor numbers)
    - It'll show this warning message ![warning](https://i.imgur.com/Pax8AE1.png)
    - My point is that I've worked on the vlidation logic, we can use it any where so if it's meant to be used in another place or in another way, Please let me know.
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
