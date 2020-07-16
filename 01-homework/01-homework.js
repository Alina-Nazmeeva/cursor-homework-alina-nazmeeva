const bananaPrice = 15.678;
const beefPrice = 123.965;
const chickenPrice = 90.2345;
const cash = 500;

document.writeln("Base<br>");

document.writeln("Мax price: " + Math.max(bananaPrice, beefPrice, chickenPrice) + "<br>");
document.writeln("Мin price: " + Math.min(bananaPrice, beefPrice, chickenPrice) + "<br>");

const totalPrice = bananaPrice + beefPrice + chickenPrice;
document.writeln("Total price: " + totalPrice + "<br>");

const totalIntPrice = Math.floor(bananaPrice) + Math.floor(beefPrice) + Math.floor(chickenPrice);
document.writeln("Total price without coins: " + totalIntPrice + "<br>");

const totalPriceRoundToHundreds = Math.round(totalPrice/100) * 100;
document.writeln("Total price rounded to hundreds: " + totalPriceRoundToHundreds + "<br>");

const isEven = Math.floor(totalPrice)%2 === 0;
document.writeln("Is rounded total price an even? " + isEven + "<br>");

const change = cash - totalPrice;
document.writeln("Change for 500: " + change + "<br>");

const averagePrice = Math.round(totalPrice/3*100)/100;
document.writeln("Average price: " + averagePrice + "<br>");

const discount = Math.round(Math.random()*50);
document.writeln("Discount: " + discount + "%<br>");

const amountPayable = Math.round(totalPrice/100*(100 - discount)*100)/100;
document.writeln("Amount payable: " + amountPayable + "<br>");

const profit = Math.round((amountPayable - totalPrice/2)*100)/100;
document.writeln("Net Profit: " + profit + "<br>");

document.writeln("<br>Advanced<br>");

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