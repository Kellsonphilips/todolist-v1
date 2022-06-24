# todolist-v1

A simple todolist for organizing your work and other activities. 

This app uses ejs templating to render multiple web pages.
Working with nodejs and expressjs.


## In this version it has only three routes
### The home route, work and about route


- The home route which is the default 
- It has a predefined 3 item in the array each time that the server restarts. 
- Also the home route shows the date of the day. 


![Screenshot 2022-06-23 at 16 33 41](https://user-images.githubusercontent.com/81332784/175568938-e4ca6074-6113-4090-988f-79b14d27e524.png)

The date i imported as a module from date.js and not include the codes in my app.js


- You can create the second route by simply localhost:3000/work
- Also the route don't have to be on specifc format as you can access it through localhost:3000/Work or localhost:3000/work . This possible with lodash. 

![Screenshot 2022-06-23 at 16 34 01](https://user-images.githubusercontent.com/81332784/175571115-6331f881-1a91-435f-97e2-b75b280a41b2.png)



- Work List is an entirely emply empty array, so no default items. 
- Add your new work to do lists to your list.

![Screenshot 2022-06-23 at 16 35 51](https://user-images.githubusercontent.com/81332784/175572186-bf54fb08-02a2-438c-b9ba-3746649e0fe8.png)


- You can access the about route by /about to the defaul localhost:3000 server. 
- It is rendered with ejs-templating. 

![Screenshot 2022-06-23 at 16 37 27](https://user-images.githubusercontent.com/81332784/175572827-e914d091-c285-4496-ae21-6e31762a64d1.png)




 



