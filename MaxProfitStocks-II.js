// 
var maxProfit = function(prices) {
    let b = 1;
    let buy = 0;
    let sell = 0;
    let total = [];
    
    for(var i = 0;prices.length>i; i++){
        if(prices[i] >= prices[b]){
            b++
        }else if(prices[i]<prices[b]){
            buy = prices[i];
            while(buy>prices[b]){
                b++
            }
            sell = prices[b]
            b = i + 2
            total = [...total,sell - buy]
        }
    }
    if(total.length > 0){
        let answer= total.reduce((prev, cur) => {
            return prev + cur;
        })
        return answer
    }else{
        return 0
    }     
}