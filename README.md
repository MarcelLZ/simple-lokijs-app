# Simple Lokijs Test

It's a simple api project to test the [lokijs](http://lokijs.org) - in-memory db

# To run this project
It's simple! Just clone this repo, go to the project folder and create a json file called lokidb in the root folder. After that run:
````
npm i
````

And than run :
````
npm start
````

# API endpoints

Insert a new registry
````
[POST] /

body {
  description: 'whatever!'
}
````

Get all saved registries
````
[GET] /
````

That's all!