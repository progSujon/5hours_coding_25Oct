

const checkInventory = (callback) => {
    setTimeout(()=>{
        console.log('Check Inventory......');
        callback()
    },2000)
}

const createOrder = (callback) => {
    setTimeout(()=>{
        console.log('Create Order.....');
        const error = new Error('order create failed.')
        callback(error)
    },1000)
}

const chargePayment = (callback) =>{
    setTimeout(()=>{
        console.log('make a Payment.....');
        const error = null
        let chargeAmout = 100
        callback(error,chargeAmout)
    },1000)
}

const sendInvoice = (callback) => {
    setTimeout(()=>{
        console.log('send Invoice.......')
        callback()
    },1000)
}

// checkInventory();
// createOrder();
// chargePayment();
// sendInvoice();


const main = () => {
    checkInventory(()=>{
        createOrder((err)=>{
            if(err){
                console.log(err);
            }
            chargePayment((err,chargeAmout)=>{
                if(err){
                    console.log('handling error');
                    return;
                }
                console.log('charge:',chargeAmout);
            
                sendInvoice(()=>{
                    console.log('All done!');
                })
            })
        })
    })
}

main()