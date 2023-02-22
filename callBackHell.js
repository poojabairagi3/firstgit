const cart=["shoes","pants","Kurta"];
api.createOrder(cart,function(){
    api.ProceedToPayment(function(){
        api.ShowOrderSummary(
            function(){
            api.UpdateWallet()
    
        })
    
    })

})

// PYRAMID OF DOM