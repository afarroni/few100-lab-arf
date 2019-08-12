//import { runApp } from "../src";
import { makeCurrency, formatAsPercent, validateInput } from "../src/utils";

// describe('the thing that calculates', () => {
//     beforeEach(function () {
//         const buttons = document.querySelectorAll('.tip-percents button');
//         const inputAmount: HTMLInputElement = document.querySelector('#amount');
//         const customTip: HTMLInputElement = document.querySelector("#custTip");
//         const numberOfPeople: HTMLInputElement = document.querySelector("#numPeople");

//         let numPeople = 0;
//         let bill = 0;
//         let tipPercentage: number;
//         runApp();
//     })
//     it('setUp should call these methods', () => {
//     });
// });

describe('utils', () => {
    it('makeCurrency should return the number as currency', () => {
        let testNum = 123.45
        expect(makeCurrency(testNum)).toBe("$123.45");
    });
    it('makeCurrency should return zero when not a number', () => {
        let testNum = NaN
        expect(makeCurrency(testNum)).toBe("$0");
    });
    it('formatAsPercent should return the string input as a percent', () => {
        let testNum = ".14"
        expect(formatAsPercent(testNum)).toBe('14%');
    });
    it('formatAsPercent should throw an error if the input is a character', () => {
        let testNum = "y"
        expect(formatAsPercent(testNum)).toThrowError;
    });
    it('validateInput should return a 0 if a negative number is given and add an alert class', () => {
        let testNum = document.createElement('input') as HTMLInputElement
        testNum.value = '-12'
        expect(validateInput(testNum)).toBe(0);
        expect(testNum.classList.contains('alert-danger')).toBeTruthy;
    });
    it('validateInput should return the positive number given and removes an alert class', () => {
        let testNum = document.createElement('input') as HTMLInputElement
        testNum.value = '12'
        expect(validateInput(testNum)).toBe(12);
        expect(testNum.classList.contains('alert-danger')).toBeFalsy;
    });
});