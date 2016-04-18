------

# Angular Directives

------

## What are Angular directives?

> At a high level, directives are markers on a DOM element (such as an attribute, element name, comment or CSS class) that tell AngularJS's **HTML compiler** ([`$compile`](https://docs.angularjs.org/api/ng/service/$compile)) to attach a specified behavior to that DOM element (e.g. via event listeners), or even to transform the DOM element and its children.

In other words, Angular directives are a way for us to make our HTML elements interact and be affected by the Javascript we write. Let's dive in and see some of Angular's built-in directives in action:

Create a basic HTML file:

``` bash
cd workspace-folder
touch index.html
atom .
```

Add the basic HTML tags to start, and reference the AngularJS library in the `<head>`:

``` html
<!DOCTYPE html>
<html>
<head>
	<title>Angular Directives Practice</title>
  	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"></script>
</head>
<body>

</body>
</html>
```

There are a few ways to use Angular directives, and all of them involve adding key words / phrases to our HTML elements.

------

## ng-app

The first directive we'll use is going to signal Angular to interpret our HTML as an Angular application. 

It's called `ng-app`, and we'll put it directly into the opening `<html>`, like so:

``` html
<html ng-app>
  ...
  ...
  ...
</html>
```

Without this attribute, none of our directives within will work right.

------

## ng-init

Angular really shines in being able to present data from a database in a number of ways. In this lesson, we won't be doing a whole lot with regard to getting data dynamically, but rather initializing this app with some 'inline' data. We can use the `ng-init` directive to achieve this as a way to simulate the type of data we'd normally get from a backend API:

``` html
<body ng-init="students=['John', 'Mary', 'Kenneth', 'Holly']">
```

We just initialized our app with some built-in data, an array specifically, that we called 'students'. But you can just as easily add any kind of data here, including Objects, Numbers, Strings etc. Below, we'll learn how to access this data from within the `<body>` tag.

------

Before we go further, let's do a quick retro on how we'd previously been using JavaScript to evaluate and add a value to the DOM:

When we used plain JavaScript, we'd select the element, and set its inner HTML or text to the value we wanted to use:

``` html
<h1 id="heading"></h1>
<script>
  var str = "Hello";
  document.querySelector('#heading').innerText = str;
</script>
```

With jQuery, we could use the shorthand:

``` html
<h1 id="heading"></h1>
<script>
  var str = "Hello";
  $('#heading').text(str);
</script>
```

The point is, we had to inject our values into the DOM from a `<script>` tag which required lines of extra code. Given that Angular is full front-end framework, we can achieve the same DOM manipulation MUCH easier, and in a way that will make way more sense in the context of application development: directly in the DOM node we want to manipulate, using Angular markup: 

------

## {{ }} - (Angular Interpolation Markup)

In the same way we can escape HTML and insert ERB or EJS into our templates when building in Rails or Node respectively, we can also use Angular's markup to interpolate and print the values of data represented by variables (like the kind we declared in our `<body`> tag. Check it out:

``` html
<body ng-init="students=['John', 'Mary', 'Kenneth', 'Holly']">
	<h1>{{ students }}</h1>
</body>
```

`{{ students }}` should be rendered as the array we declared above. You can treat `students` just like any other JavaScript array, such as printing the first element in that array ('John'):

``` html
<h1>{{ students[0] }}</h1>
```

Angular markup can also be used to evaluate JavaScript expressions:

``` html
{{ 2 + 2 }} <!-- will be rendered as: 4 -->
{{ students[0] + ' Smith' }} <!-- will be rendered as: John Smith -->
```

If we declared a variable in `ng-init` to store a number, we could run evaluations on it with Angular markup too:

``` html
<body ng-init="num=5; students=['John', 'Mary', 'Kenneth', 'Holly']">
	<h1>{{ num * 2 }}</h1> <!-- will be rendered as: 10 -->
</body>
```

------

## ng-model

With Angular, we have the ability to bind the values of HTML elements to be reflected in real-time in other parts of our HTML. For example, we can have the value of an input field be mirrored, or bound, to another element below it using `ng-model`

``` html
<input type="text" ng-model="message">
<h3>{{ message }}</h3>
```

If you start typing in this text field, you'll see the `<h3>` get populated with the same text in real-time, because we bound the data held in our "message" model, and printed that data in the `<h3>` with Angular markup.

You can also evaluate data from `ng-model` in the same way we tried above, with expressions:

``` html
<input type="text" ng-model="number" ng-init="number=0">
<h3>{{ number }} doubled: {{ number * 2 }}</h3>
```

------

## ng-click

We can also easily create click event listeners that react in real-time with Angular, and contain the same kinds of expressions:

``` html
<button ng-click="count = count + 1" ng-init="count=0">Increment Up</button>
<div>{{ count }}</div>
```

Each time you click the button, the value of 'count' will increase by 1, and since we're printing its value in the `<div>`, it will update immediately there as well.

------

Take 10 minutes to build a basic tip calculator using the `ng-init`, `ng-model`, and `ng-click` directives:

``` html
<h5>Tipping Calculator</h5>
<p>Bill amount: <input type="number" ng-model="billAmount" ng-init="billAmount = 0; tipAmount = 0"></p>
<button class="btn btn-secondary" ng-click="tipAmount = billAmount * .10">
  10%
</button>
<button class="btn btn-secondary" ng-click="tipAmount = billAmount * .15">
  15%
</button>
<button class="btn btn-secondary" ng-click="tipAmount = billAmount * .20">
  20%
</button>

<p>Bill: {{billAmount}}</p>
<p>Tip: {{tipAmount}}</p>
<p>Total: {{billAmount + tipAmount}}</p>
```

With this example, you'll notice we get some pretty ugly decimals in our bills / tips / totals. We can clean this up using a very handy feature of Angular called **filters**. Filters will be covered in more detail later in the lesson, but as a primer, an Angular filter lets you manipulate data accessed and printed out by Angular, in many ways. One such filter that is built in is called `currency`. By default, the currency filter will format a number using the currency corresponding to the client's locale (here it will be in $US). We apply filters using ***pipes***, like so:

``` html
<p>Bill: {{billAmount | currency}}</p>
<p>Tip: {{tipAmount | currency}}</p>
<p>Total: {{billAmount + tipAmount | currency}}</p>
```

Now, you should see the amounts for the bill, tip and total much cleaner, and they've even got the $ sign in front of them!

------

## ng-style

With `ng-style`, you can dynamically create, change, and apply styles to DOM elements:

``` html
<div ng-init="myStyle={'color': 'blue'}">
	<h3 ng-style="myStyle">Hello!</h3>
</div>
```

Well, couldn't we just use a style tag to create a class? Sure, but with `ng-style` you can have these styles change depending on user interactions with your app. For example, you can add a button that modifies 'myStyle' on click:

``` html
<div ng-init="myStyle={'color': 'blue'}">
	<button ng-click="myStyle={'color':'red'}">Make it red</button>
	<h3 ng-style="myStyle">Hello!</h3>
</div>
```

Now, if you click the button, the heading should turn red.

These style values can also be dynamic. In other words, you can get the value of a variable (typically from a controller, but in this example, hardcoded as an initial value), and set your style properties to those values. For example:

``` html
<body ng-init="newColor='red'; newFontStyle='italic'">
<div ng-init="myStyle={'color': 'blue'}">
	<button ng-click="myStyle={'color': newColor, 'fontStyle': newFontStyle}">Make it red</button>
	<h3 ng-style="myStyle">Hello!</h3>
</div>
</body>
```

------

## ng-repeat

Normally when we'd iterate through a collection of data on the front-end in Rails or in Node with EJS, we'd insert some sort of loop logic and place the HTML inside, something like:

``` ejs
<ul>
  <% users.forEach(function(user){ %>
  	<li><%= user.name %></li>
  <% }) %>
</ul>
```

Though the above example is commonly used and works great for our needs, we can clean up our code, and avoid having to insert different types of tags just to execute our loops. Instead, with Angular, we can use the `ng-repeat` directive to iterate through a collection:

``` html
<body ng-init="students=['John', 'Mary', 'Kenneth', 'Holly']">
	<ul>
		<li ng-repeat="student in students">{{ student }}</li>
	</ul>
</body>
```

Let's look at the structure of the loop happening in the `ng-repeat` attribute. The pluralized 'students' represents the array we declared in the `<body>` tag, and the singular 'student', represents each element in that array. Hence 'student in students'. We can name the singular element anything we want to, but it should be descriptive of individual element in the array. We could also call it 'name', and then use the same 'name' in the Angular markup inside the `<li>` tag:

``` html
<li ng-repeat="name in students">{{ name }}</li>
```

`ng-repeat` also gives us access to the index of each element in a collection, with the keyword `$index`. If we wanted to number our list of students, we could do something like this:

``` html
<body ng-init="students=['John', 'Mary', 'Kenneth', 'Holly']">
	<ul>
		<li ng-repeat="student in students">{{ $index }}. {{ student }}</li>
	</ul>
</body>
```

Which will yield:

1. John
2. Mary
3. Kenneth
4. Holly

In addition to iterating through arrays, you can use `ng-repeat` to iterate through the keys and values of an object:

``` html
<body ng-init="obj={name: 'Jacob', age: 28, email: 'jacob@gmail.com'}">
	<ul>
		<li ng-repeat="(key, val) in obj">{{ key }}: {{ val }}</li>
	</ul>
</body>
```

Finally, we can iterate through an array of objects by combining the above examples:

``` html
<body ng-init="students=[{name: 'Jacob', age: 28}, {name: 'Mary', age: 32}, {name: 'David', age: 26}]">
	<ul>
		<li ng-repeat="student in students">
			<ul>
				<li ng-repeat="(key, val) in student">{{ key }}: {{ val }}</li>
			</ul>
		</li>
	</ul>
</body>
```

You'll notice that when the page is rendered, the keys in each student's `<li>` are alphabetized. Angular will default to alphabetizing the key/value pairs, unless you specify a different sorting filter. We'll learn about filters later, but if you want to take a look at the ones that come standard, check out [Angular Filters](https://docs.angularjs.org/guide/filter).

------

## ng-href

When we code our templates with links such as:

``` html
<a href="http://mysite.com/users/12345678">Profile</a>
```

We want to be able to dynamically generate a url based on data being processed by our app. The logical way to do this would be something like:

### The Wrong Way

``` html
<a href="http://mysite.com/users/{{ user.id }}">Profile</a>
```

Where the `{{ user.id }}` markup represents the dynamically generated user id.

### There's just one problem:

If in the event a user were to click the link before angular finished loading, they'd literally be taken to the url:

`http://mysite.com/users/{{ user.id }}` which is obviously not a valid url. `ng-href` solves this by waiting until Angular loads to populate the href attribute altogether. 

### The **Correct** way

to write the link with Angular markup is with `ng-href`:

``` html
<a ng-href="http://mysite.com/users/{{ user.id }}">Profile</a>
```

------
