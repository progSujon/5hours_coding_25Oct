

const checkInventory = () => {
    const promise = new Promise((resolve,reject) => {
        setTimeout(()=>{
            console.log('Check Inventory......');
            let inStock = 10;
            resolve(inStock)
        },2000)
    })
    return promise;
}

const createOrder = (callback) => {
    const promise = new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log('Create Order.....');
            resolve()
    },1000)
    })
    return promise;
}

const chargePayment = (callback) =>{
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('make a Payment.....');
            let chargeAmout = 100
            resolve()
    },1000)
    })
    return promise;
}

const sendInvoice = () => {
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('send Invoice.......')
            resolve()
    },1000)
    })
    return promise;
}

// checkInventory();
// createOrder();
// chargePayment();
// sendInvoice();


const main = async () => {

    setTimeout(()=>{
        console.log('Creating an Order......');
        
    },3000)

    let inStock = await checkInventory();
    await createOrder();
    await chargePayment();
    await sendInvoice();

    // checkInventory()
    //     .then(createOrder)
    //     .then(chargePayment)
    //     .then(sendInvoice)
    //     .catch(err => {
    //         console.log('err:',err);
            
    //     })

    // checkInventory(()=>{
    //     createOrder((err)=>{
    //         if(err){
    //             console.log(err);
    //         }
    //         chargePayment((err,chargeAmout)=>{
    //             if(err){
    //                 console.log('handling error');
    //                 return;
    //             }
    //             console.log('charge:',chargeAmout);
            
    //             sendInvoice(()=>{
    //                 console.log('All done!');
    //             })
    //         })
    //     })
    // })
}

main()