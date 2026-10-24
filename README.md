# 5 Hours Coding Challange

Topic - Asynchronous JavaScript
I follow - 
- Coder's Gyan youtube channel (Hindi)

JavaScript is a single threading programming language means this language use a single thread in processor. if any calculation or came to response many time to block thread then other program wait to finish before task. Is a boring?
So javascript do waiting lengthy processing program. after finish all task then execute lengthy processing program asynchronously

In javascript all ways try to free main thread for handle new request 


What is Asynchronous JavaScript
- Asynchronous JavaScript allows JavaScript to do other work while waiting for a task to finish.

- Callback : A callback is simply a function passed as an argument into another function, which is then executed (called back) after some action is finished.

- Callback hell : Callback Hell happens when you nest too many functions inside each other in JavaScript. It makes your code grow sideways like a triangle. This makes the code very difficult to read, understand, and fix.

- error handeling

- Promise : 

Promise have 3 stage
1.resolve
2.pending
3.reject

promise receive have two peramiter
- resolve another reject

create promise
```
const promise = new Promise((resolve,reject)=>{

})
```
When use Promise

- async/await

Async / Await is the cleanest modern way to handle tasks that take time in JavaScript (like downloading data or waiting for a timer). It allows you to write asynchronous code that looks and reads just like normal, step-by-step code.
To understand it easily, think of the word await as a "pause button" that waits for a task to finish before moving to the next line.

Receive the data in promise throw resolve function

```
function checkInventory(){
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Checking the inventory')
            let inStock = 4;
            resolve(inStock);
        },1000)
    })
    return promise;

}
function main(){
    const inStock = await checkInventory();
}

```




