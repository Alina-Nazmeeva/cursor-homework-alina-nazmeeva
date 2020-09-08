import {advancedTask} from './01-homework';
console.log("Module 1: ", advancedTask);

//This import was commented because alerts in homework #2 are annoying, but this would work
// import {result} from './02-homework';
// console.log("Module 2: ", result);

import * as Homework_3 from './03-homework';
console.log("Module 3: ", Homework_3.calculatePow(2, 3));

import {getPairs} from './04-homework';
console.log("Module 4: ", getPairs(["Саша", "Ігор", "Олена", "Іра", "Олексій", "Світлана"]));

import {getRandomArray} from './05-homework';
console.log("Module 5: ", getRandomArray(5, 1, 9));

import {calculateWordLetters} from './06-homework';
console.log("Module 6: ", calculateWordLetters("test"));

import {ukraine, getMyTaxes} from './07-homework';
console.log("Module 7: ", getMyTaxes.call(ukraine, 2000));

import {Student} from './08-homework';
const student = new Student("НаУКМА", 5, "Назьмєєва Аліна");
console.log("Module 8: ", student.getInfo());

import './styles/09-homework.css';
import {generateBlocksInterval} from './09-homework';
generateBlocksInterval();

import './styles/10-homework.css';
import {highlight} from './10-homework';
const keys = document.querySelectorAll('.key');
keys.forEach((key) => {
    key.addEventListener('click', highlight);
});

import {getRandomChinese} from './11-homework';
getRandomChinese(4);

import './styles/12-homework.css';
import {getCharacter, displayCharacter} from './12-homework';
getCharacter().then(displayCharacter);

import {createIdGenerator} from './13-homework';
const idGenerator = createIdGenerator();
console.log("Module 13, generator function: ", idGenerator.next().value, idGenerator.next().value, idGenerator.next().value);