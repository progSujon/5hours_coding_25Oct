# Asynchronous JavaScript

I follow - [Master Asynchronous JavaScript | Coder's Gyan youtube channel (Hindi)](https://youtu.be/2pHQdjgSVUk?si=ySYG2sjQXPtzapXt)

JavaScript is a single threading programming language means this language use a single thread in processor. if any calculation or came to response many time to block thread then other program wait to finish before task. Is a boring?
So javascript do waiting lengthy processing program. after finish all task then execute lengthy processing program asynchronously

<mark>In javascript all ways try to free main thread for handle new request </mark>

- **Synchronous Execution**
code execute Sequential one by one. If a task takes a long time,the entire program or thread freezes ("blocks") until that task is done.

- **Asynchronous Execution**
A task starts and runs in the background. The program does not wait for it to finish; it moves straight on to the next line of code.When the background task finally finishes, it sends a signal, callback, promise, or event to let the program handle the result

**Asynchronous JavaScript**
- Asynchronous JavaScript allows JavaScript to do other work while waiting for a task to finish.

- **Callback** : A callback is simply a function passed as an argument into another function, which is then executed (called back) after some action is finished.

- **Callback hell** : Callback Hell happens when you nest too many functions inside each other in JavaScript. It makes your code grow sideways like a triangle.<u> This makes the code very difficult to read, understand, and fix.</u>

- error handeling

**Promise**
Promise is an object that represents the result of an asynchronous operation. The result may be available now, later, or the operation may fail.

The Three Promise States
 - pending :The initial state. The asynchronous operation is still working, and the result is not yet available.
 - Fulfilled : The operation completed successfully, and the promise now holds the resulting value.
 - reject :  The operation failed, and the promise holds the reason or error for the failure.


Promise receive have two peramiter
- one resolve another reject

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




