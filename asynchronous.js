

const checkInventory = (callback) => {
    setTimeout(()=>{
        console.log('Check Inventory......');
        callback()
    },2000)
}

const createOrder = (callback) => {
    setTimeout(()=>{
        console.log('Create Order.....');
        callback()
    },1000)
}

const chargePayment = (callback) =>{
    setTimeout(()=>{
        console.log('make a Payment.....');
        callback()
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
        createOrder(()=>{
            chargePayment(()=>{
                sendInvoice(()=>{
                    console.log('Other requests processing...... ');
                })
            })
        })
    })
}

main()