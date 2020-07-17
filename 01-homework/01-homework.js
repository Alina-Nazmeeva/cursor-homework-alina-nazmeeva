const bananaPrice = 15.678;
const beefPrice = 123.965;
const chickenPrice = 90.2345;
const cash = 500;

document.writeln("<p>Base</p>");

document.writeln("<p>Мax price: " + Math.max(bananaPrice, beefPrice, chickenPrice) + "</p>");
document.writeln("<p>Мin price: " + Math.min(bananaPrice, beefPrice, chickenPrice) + "</p>");

const totalPrice = bananaPrice + beefPrice + chickenPrice;
document.writeln("<p>Total price: " + totalPrice + "</p>");

const totalIntPrice = Math.floor(bananaPrice) + Math.floor(beefPrice) + Math.floor(chickenPrice);
document.writeln("<p>Total price without coins: " + totalIntPrice + "</p>");

const totalPriceRoundToHundreds = Math.round(totalPrice/100) * 100;
document.writeln("<p>Total price rounded to hundreds: " + totalPriceRoundToHundreds + "</p>");

const isEven = Math.floor(totalPrice)%2 === 0;
document.writeln("<p>Is rounded total price an even? " + isEven + "</p>");

const change = cash - totalPrice;
document.writeln("<p>Change for 500: " + change + "</p>");

const averagePrice = Math.round(totalPrice/3*100)/100;
document.writeln("<p>Average price: " + averagePrice + "</p>");

const discount = Math.round(Math.random()*50);
document.writeln("<p>Discount: " + discount + "%</p>");

const amountPayable = Math.round(totalPrice/100*(100 - discount)*100)/100;
document.writeln("<p>Amount payable: " + amountPayable + "</p>");

const profit = Math.round((amountPayable - totalPrice/2)*100)/100;
document.writeln("<p>Net Profit: " + profit + "</p>");

document.writeln("<p>Advanced</p>");

const advancedTask = `Максимальна ціна: ${Math.max(bananaPrice, beefPrice, chickenPrice)}<br>
Мінімальна ціна: ${Math.min(bananaPrice, beefPrice, chickenPrice)}<br>
Вартість всіх товарів: ${totalPrice}<br>
Вартість всіх товарів без копійок: ${totalIntPrice}<br>
Сума товарів, округлена до сотень: ${totalPriceRoundToHundreds}<br>
Чи є сума всіх товарів (округлена в меншу сторону) парним числом? ${isEven}<br>
Решта з 500: ${change}<br>
Середнє значення цін, округлене до другого знаку після коми: ${averagePrice}<br>
Випадкова знижка: ${discount}%<br>
Сума до оплати, округлена до 2 знаків після коми: ${amountPayable}<br>
Чистий прибуток: ${profit}`;
document.writeln(advancedTask);