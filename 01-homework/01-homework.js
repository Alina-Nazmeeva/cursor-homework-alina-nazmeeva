const bananas = 15.678;
const beef = 123.965;
const chicken = 90.2345;
console.log("Мax price: " + Math.max(bananas, beef, chicken));
console.log("Мin price: " + Math.min(bananas, beef, chicken));
const total = bananas + beef + chicken;
console.log("Total price: " + total);
const totalIntPrice = Math.floor(bananas) + Math.floor(beef) + Math.floor(chicken);
console.log("Total price without coins: " + totalIntPrice);
const totalPriceRoundToHundreds = Math.round(total/100) * 100;
console.log("Total price rounded to hundreds: " + totalPriceRoundToHundreds);
const totalPriceFloor = Math.floor(total);
console.log("Is rounded total price an even? " + (totalPriceFloor%2 === 0));
const change = 500 - total;
console.log("Change for 500: " + change);
const averagePrice = Math.round(total/3*100)/100;
console.log("Average price: " + averagePrice);
const discount = Math.round(Math.random()*100);
console.log(`Discount: ${discount}%`);
const amountPayable = total/100*(100 - discount);
console.log(amountPayable);
console.log("Amount payable: " + Math.round(amountPayable * 100)/100);
const costPrice = total/2;
const netProfit = amountPayable - total/2;
console.log("Net Profit: " + netProfit);

const advanced = `Максимальна ціна: ${Math.max(bananas, beef, chicken)}
Мінімальна ціна: ${Math.min(bananas, beef, chicken)}
Вартість всіх товарів: ${total} 
Вартість всіх товарів без копійок: ${totalIntPrice}
Сума товарів, округлена до сотень: ${totalPriceRoundToHundreds}
Чи є сума всіх товарів (округлена в меншу сторону) парним числом? ${totalPriceFloor%2 === 0}
Решта з 500: ${change}
Середнє значення цін, округлене до другого знаку після коми: ${averagePrice}
Випадкова знижка: ${discount}
Сума до оплати, округлена до 2 знаків після коми: ${amountPayable}
Чистий прибуток ${netProfit}`;
console.log(advanced);