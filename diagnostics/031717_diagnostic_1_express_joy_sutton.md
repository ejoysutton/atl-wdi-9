# Diagnostic Unit 2.1

### Question 1: What is the Request/Response Cycle?  How does it work?

THe interaction between the server and browser. The browser requests a file, then the server responds with an appropriate response, (ie: 200 okay, send the file, or another code if the file doesn't exits or there are issues)  

### Question 2: What are the differences between a GET request and a POST request?
A GET request is asking to recieve the object in question. A POST is sending something to the server.  

### Question 3: What does `npm init` do?

Initializes node package manager, which includes creating a packages.json to keep a list of installed packages for that folder  

### Question 4: What does CRUD stand for?  What are the HTTP verbs that are associated with each function?
Create, Read, Update, Delete  
Post, Get, Put, Delete  

### Question 5: If we have a form where we want to create new data, what type of `method` do we use in our form?  
POST  

### Question 6: If the following form was submitted, what would `action="myScript.js"` do?

```
<form method="POST" action="myScript.js?_method=PUT">
  <input type="text" value="name"/>
  <button type="submit">Submit</button>
</form>
```
Designates where the POST is being sent  

### Question 7: Write an express route that handles a POST request to the url `/menus` and redirects to the `/homepage`
```
route.post('/menus' function(req, res) {
	//stuff to do for the post, vars to store the craeted data//
	res.redirect('/homepage');
})
```  

### Question 8: In the following express route, write how you would grab the values of `:id` and `:song_id` in javascript.

```
app.get("/artist/:id/song/:song_id"), function(req, res){
  //hmm...
}
```
```  
[req.params.id]  
[req.params.song_id]  
``` 
### Question 9: What is MVC? How have we been using it so far?
Model View Controller
Model is the server model we are creating that handles the structure
Views are the hbs files handling individual html elements
controllers are handling the behaviors such as get, put, post, delete

## Bonus Question

### Question 10: Write an express route that handles a GET request to the url `/products` and sends back the JSON object {error: "Bad Request"}

route.get('/products' function(req, res) {
	res.send(...not suuuuurrrreeee)
});
