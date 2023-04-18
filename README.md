## Debouncing
How to use debouncing to Improve the performance of the search functionality

## Live Project Link
[Debouncing React App](https://debouncing-react-app.netlify.app/)

## About Debouncing

In this article, we will see a very powerful and must-use technique to improve the performance of search functionality in the application.

If we're making an API call to the server for every character typed in the input search box and the data returned by API contains a lot of data, let's say 500 or 1000 user records then it will slow down your application.

Because for every character typed in the search box, we're making an API call and the server may take some time to return data and before the server returns the data we're making another API call for the next character typed.

In almost every application we need to add some form of search functionality may be to filter some records or get the result from API.

So this is a common scenario and making an API call for every character typed may be expensive because some third-party applications or cloud providers like firebase, AWS, etc provide only a limited number of API requests, and cost is incurred for every additional request.

So to handle this scenario, we can use the debouncing functionality.

## Let's first understand what is debouncing.

Debouncing allows us to call a function after a certain amount of time has passed. This is very useful to avoid unnecessary API calls to the server If you're making an API call for every character typed in the input text.

In the above code, we're calling the debounce function inside the useEffect hook by passing an empty array [] as a second argument because this code needs to be executed only once.

And we're storing the result of the function in inputRef.current. inputRef is a ref created by calling useRef() hook. It contains a current property which we can use to retain the value even after the component is re-rendered.

Using the local variable to store the result of debounce function will not work because for every re-render of the component previous variables will get lost. So React provided a ref way of persisting data across re-render inside the components using Hooks.

And then inside the handleInputChange handler, we're calling the function stored inside the inputRef.current variable.

# How to fork and clone

One quick note about cloning this project. If you wish to make commits and push the code up after cloning this repo, you should fork the project first. In order to own your own copy of this repository, you have to fork it so you get your own copy on your own profile!

You can see the fork button in the top right corner of every GitHub project; click it and a copy of the project will be added to your GitHub profile under the same name as the original project.

![alt text](https://i.ibb.co/1YN7SJ6/Screen-Shot-2019-07-01-at-2-02-40-AM.png "image to fork button")

After forking the project, simply clone it the way you would from the new forked project in your own GitHub repository and you can commit and push to it freely.


# After you fork and clone:

## Install dependencies

In your terminal after you clone your project down, remember to run either `yarn` or `npm install` to build all the dependencies in the project.



