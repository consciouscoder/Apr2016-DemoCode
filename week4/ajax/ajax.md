---
title: AJAX with JS & $HTTP
type: Lesson
duration: "1:20"
creator:
    name: Tony
    city: Boulder
competencies: Browser JS Basics
---

# AJAX with JS & JQuery

### Objectives

- Implement an AJAX request with Vanilla JS
- Implement a jQuery AJAX client for a simple REST service
- Reiterate the benefits of separation of concerns – API vs. Client

### Preparation

- Understand basics of JS
- Understand HTTP verbs & the concept of RESTful JSON APIs

## What is AJAX? Introduction (20 mins)

AJAX (Asynchronous JavaScript and XML) is a method of building interactive applications for the Web that processes user requests immediately, without re-rendering a whole page.

> **Example:** A weather forecasting site could display local conditions on one side of the page as soon as a user finishes typing in a zip code. The temperature could refresh every minute, without the user having to hit a refresh button.

In general the process looks like this – use JavaScript on the client side to hit an API (without reloading a page), then use the pure data you get back to manipulate the DOM somehow if you need to. This DOM manipulation can take the form of rendering a template or just changing a number on the page.

###Advantages

- __Faster__ - This is the most obvious reason for using to AJAX on your frontend: AJAX allows easier and quicker interaction between user and website as pages are not reloaded for content to be displayed.  The server doesn't have to get data, render HTML, and then spit it out, it just has to get data and your already-loaded frontend does the rest.

- __Compact__ - With AJAX, several application features can be handled using a single web page. That means we modularize our app into smaller bits, and it becomes easier to work on.

- __Backend Separated from Frontend__ - Applications that use AJAX-heavy frontends means developers don't have to work on both sides of the stack at the same time. Some developers can be dedicated to building an API that just serves data, and others can focus on consuming that data and building interfaces.


###Disadvantages

- __The back and refresh button are rendered useless__ - Since things are loaded dynamically on a page, without that page reloading (or more importantly a URL being changed), clicking the back or refresh button don't work the way you're used to. That's actually a pretty big deal – UX designers are very familiar with the fact that users are _accustomed_ to being able to hit back when they need to. Some advanced front-end frameworks have tried to solve this issue with clever workarounds, but that's not always the case and not always accurate.

- __Javascript can be disabled__ - While javascript is secure and has been heavily used by websites for a long period of time, a percentage of website surfers prefer to turn javascript functionality off on their browser, rendering the AJAX application totally useless. That's not always the best thing to design for, and more often than not, you'll find yourself assuming users have JS on, but it's important to know your whole site could be useless in some situations.

- __You have to consider the UX even more__ - While UX is crucial for _any_ application, the fact that a page doesn't refresh means you have to be even more considerate of what a user is experiencing. If something in your JavaScript goes wrong, your AJAX breaks, and you don't have failsafes thoughtfully built in, your user might be clicking a button and seeing absolutely nothing happen. Most common users won't have their consoles open to notice any errors.

### Why are we learning it?
As you're learning how to build APIs on the server side, you need to start learning how to consume your APIs on the client side.

While we're going to be tackling some advanced front-end frameworks in the next unit, you, as a junior full-stack developer, need to be able to do something awesome with the APIs you're learning to make. So we're going to tackle the basics and build on them even further, later.



####What the heck is HTTP?!
We should all be HTTP experts by now!!

####HTTP Methods (the most common HTTP "verbs")

Pair up with the person next to you.  We are going to spend the next 10 minutes researching the four most common HTTP methods and then we will discuss as a group.

**GET**
* GET requests ask a server for data and do not modify the data on the server.
* This type of HTTP request is all about retrieving resources from the server.
* Examples of GET requests:
	* typing a URL into a browser
	* clicking on a link

**POST**
* POST requests change the data on the server by creating a new resource.
* After a successful POST request, the server has more information than it did before.
* Examples of POST requests:
	* "posting" a new tweet, blog article, Facebook status, etc.
	* signing up for a new user account on a website
	* logging in to a website -- this one can be a bit confusing. Logging in modifies the state of the server by creating a new session that tells the server that you are currently logged in.
	* POSTs are usually initiated by a web form. Generally, when you are submitting something, you are probably performing a POST (unless it's a PATCH or a PUT request--more to come on that in a moment.)
	* Google, and other similiar services, are an exception to this idea. A search query is not modifying the state of Google's server. Your search term is just the criteria Goodle needs to perform a query of it's database and return the relevant results.

**The Difference Between a GET and a POST**
Think about a real life mailbox.  When you check your mailbox, you are GETting the mail. When you send a letter you are POSTing mail.

**PUT/PATCH**
* These methods update (modify) an existing resource on the server
* Examples of this type of request:
	* changing a username, email address, or other contact information
	* editing a blog post
* The main differences between PUT and PATCH:
	* PUT requires the client to send back the entire resource to the server with updated values and then the server replaces the existing resource with the one received from the client
	* PATCH, on the other hand, allows you to only update the specific values that you want changed

**DELETE**
* This method does exactly what you would expect: it delets a resource from the server
* Examples of a DELETE request:
	* deleting a tweet that you later regretted POSTing
	* deleting a task from a Todo app

####HTTP Methods and CRUD Operations Go Together Like PB&J!

Crud Operation | HTTP Method
-------------- | -----------
Create		   | POST
Read           | GET
Update         | PATCH or PUT
Destroy        | DELETE

####HTTP Status Codes
Let's take a quick look at all of the HTTP status codes here: http://en.wikipedia.org/wiki/List_of_HTTP_status_codes

##Let's Get Our Curl On!

We'll use the `curl` command in our terminal to send some HTTP GET requests and see what we get back.

* `curl -i https://www.google.com`
	* what did we get back?
	* let's look at the header to see the content-type.
	* we can also see that we got back a status code of 200, which means OK!
* `curl -i https://github.com`
* `curl -i https://api.github.com/users/toneloke`
	* what did we get back?  it looks like JSON!
	* when we look at the response headers, we see some headers that begin with `X-`, which means it is a custom header that is not part of the official HTTP spec.
	* If our client isn't authenticated with our username/password or an authentication token, we are limited to 60 requests per hour. Because we are all using the same IP address, we will max this out very quickly.
* Can we use postman to do the same thing?

###Before we get further into Different external API calls lets go over the basics of what the angular $http service can do.

##Angular $http
We're going to build a basic Angular app that makes an HTTP GET request to the Poke API and gives us back some JSON.

What is $http/ Angular Set up


1. first thing we want to do is create our app
In our `main.js`

```JS
angular
.module('pokeApp', []);
```

2. then create the pokeController

```JS
angular
  .module('pokeApp')
  .controller('PokeController', PokeController);

  PokeController.$inject = ['$http'];

  function PokeController ($http) {
  this.text = "hi";
  }
```
We make sure the inject the dependency we need, `$http`

3. Create the app and controller on the index page

```HTML
<html >
  <head>
    <meta charset="utf-8">

    <title>Your Page Title</title>
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.5/angular.min.js"></script>
    <script src="js/main.js"></script>
    <script src="js/pokecontroller.js"></script>
  </head>

  <body ng-app='pokeApp'>
<div class="container panel" ng-controller="PokeController as poke" >

{{poke.text }}
</div>
```

4. Alright onto the fun part

The $http service is a function which takes a single argument — a configuration object — that is used to generate an HTTP request and returns a promise with two $http specific methods: success and error.

Heres an example from the angular website
```JS
// Simple GET request example :
$http.get('/someUrl').
  success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
```

So lets test it out,
Do A little research from the pokeapi website and lets see how we can get a pokemon back
[Pokeapi info](http://pokeapi.co/docs/#info)

```JS
function getPokemon() {
    $http.get("http://pokeapi.co/api/v1/pokemon/1").success( function(data,status) {
      console.log(data);
    }).error(function(data,status) {
      console.warn(status);
    });
}
```

lets make the Pokemon name display on the page and lets create an images array that we can stick images in later on.

```JS
  vm.pokemon = {};
  vm.pokemon.name = data.name;
  vm.pokemon.images = [];
```

Its kinda ugly without an image or anything though, lets make it look a little better

The data we receive back from pokeapi has a sprites array in it, that has a `resource_uri` property.

Right a `$http.get` request that gets the first sprites image and adds it to the images array.


##next steps

its pretty useless if our page only shows bulbasaurs though, lets make it so that a user can enter a npokemon number in an input box, hit a button and it runs that `getPokemon` function.  Lets add this in out HTML:

```HTML
<!-- first we define our model -->

<input ng-model="poke.num" placeholder="Search by Pokedex #" >
<!-- then we define our action -->

<button ng-click="poke.getPokemon()">Search</button>
```

Now we need to modify our function to do a lookup based on our new `num` property

```JS
// instead of searching by a set number, we instead search based on our num field
$http.get("http://pokeapi.co/api/v1/pokemon/"+ vm.num).success( function(data,status) {
  // old code goes here
}
```

###Ng-submit
Alright so right you have to click the button to make it do anything, lets put it in a form and use `ng-submit` so that way you can just hit enter and it executes the search


### Searching by Name
We want an array of all the pokemon so that way we can lookup based just on name!

If you go to this url http://pokeapi.co/api/v1/pokedex/1/
you can get a list of all pokemon, write and HTTP get request that get all that data and sets it equal to a new model `pokedex`


###Building a search
Lets add a new model to our page
```HTML
<!-- wrap it in a form -->
<form ng-submit="poke.findByName()">
  <input ng-model="poke.name">
  <button type="Submit">Search</button>
</form
```

This findByName function is going to be a little trick, How would we find a pokemon by name when we only have an array of pokemon?

---

We'd have to loop through the array and return anything that matches (presumably each pokemon has a unique name)  

```JS
  vm.findByName = function() {
      for (var i =0; i < vm.pokedex.length; i++) {
        if( vm.pokedex[i].name == vm.name.toLowerCase()) {
          vm.resource_uri = vm.pokedex[i].resource_uri;
        }
      }
    }
```

Then create a new function(or modify your old one) to search for a pokemon based on this new resource uri!
