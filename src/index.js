// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let object = new Object();
    if (currency<=0)
object = {};
    else if(currency>10000)
object = {error: "You are rich, my friend! We don't have so much coins for exchange"};
else{
   let H = Math.floor(currency/50);
   let Q = Math.floor((currency%50)/25);
   let D = Math.floor(((currency%50)%25)/10);
   let N = Math.floor((((currency%50)%25)%10)/5);
   let P = Math.floor((((currency%50)%25)%10)%5);
   if(H>=1) object["H"] = H;
   if(Q>=1) object["Q"] = Q;
   if(D>=1) object["D"] = D;
   if(N>=1) object["N"] = N;
   if(P>=1) object["P"] = P;
}
    return object;
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
}
