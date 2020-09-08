const bananaPrice = 15.678;
const beefPrice = 123.965;
const chickenPrice = 90.2345;
const cash = 500;


const maxPrice = Math.max(bananaPrice, beefPrice, chickenPrice);
// console.log("Мax price: ", maxPrice);

const minPrice = Math.min(bananaPrice, beefPrice, chickenPrice);
// console.log("Мin price: ", minPrice);

const totalPrice = bananaPrice + beefPrice + chickenPrice;
// console.log("Total price: ", totalPrice);

const totalIntPrice = Math.floor(bananaPrice) + Math.floor(beefPrice) + Math.floor(chickenPrice);
// console.log("Total price without coins: ", totalIntPrice);

const totalPriceRoundToHundreds = Math.round(totalPrice/100) * 100;
// console.log("Total price rounded to hundreds: ", totalPriceRoundToHundreds);

const isEven = Math.floor(totalPrice)%2 === 0;
// console.log("Is rounded total price an even? ", isEven);

const change = cash - totalPrice;
// console.log("Change for 500: ", change);

const averagePrice = Math.round(totalPrice/3*100)/100;
// console.log("Average price: ", averagePrice);

const discount = Math.round(Math.random()*50);
// console.log("Discount: ", discount, "%");

const amountPayable = Math.round(totalPrice/100*(100 - discount)*100)/100;
// console.log("Amount payable: ", amountPayable);

const profit = Math.round((amountPayable - totalPrice/2)*100)/100;
// console.log("Net Profit: ", profit);


const advancedTask = `Максимальна ціна: ${maxPrice}
Мінімальна ціна: ${minPrice}
Вартість всіх товарів: ${totalPrice}
Вартість всіх товарів без копійок: ${totalIntPrice}
Сума товарів, округлена до сотень: ${totalPriceRoundToHundreds}
Чи є сума всіх товарів (округлена в меншу сторону) парним числом? ${isEven}
Решта з 500: ${change}
Середнє значення цін, округлене до другого знаку після коми: ${averagePrice}
Випадкова знижка: ${discount}%
Сума до оплати, округлена до 2 знаків після коми: ${amountPayable}
Чистий прибуток: ${profit}`;
// console.log("Advanced Task: ", advancedTask);

// export {maxPrice, minPrice, totalPrice, totalIntPrice, totalPriceRoundToHundreds, isEven, change, averagePrice, discount, 
//     amountPayable, profit, advancedTask};
export {advancedTask};