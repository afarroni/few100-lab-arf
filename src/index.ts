import './styles.css';
import { makeCurrency, formatAsPercent, validateInput } from './utils';

const buttons = document.querySelectorAll('.tip-percents button');
const inputAmount: HTMLInputElement = document.querySelector('#amount');
const customTip: HTMLInputElement = document.querySelector("#custTip");
const numberOfPeople: HTMLInputElement = document.querySelector("#numPeople");

let numPeople = 0;
let bill = 0;
let tipPercentage: number;
runApp();

export function runApp() {
    setUp();
}

function setUp() {
    initializeTipPercentage();

    // set event listeners
    customTip.addEventListener('blur', setCustomTip);
    buttons.forEach(b => b.addEventListener('click', buttonPress));
    inputAmount.addEventListener('input', calculateAndDisplayTableAmounts);
    numberOfPeople.addEventListener('blur', calculateAndDisplayTableAmounts);
}

function buttonPress() {
    const that: HTMLButtonElement = this;
    // change active button
    buttons.forEach((b: HTMLButtonElement) => {
        if (b.disabled) {
            b.disabled = false;
        }
    });
    tipPercentage = this.dataset.amount;
    localStorage.setItem("tipPercentage", tipPercentage.toString());
    displayTipPercentage();
    calculateAndDisplayTableAmounts();
};

function calculateAndDisplayTableAmounts() {
    validateAndSetInput();
    // calculate 
    let tipAmount = bill * tipPercentage;
    let totalBill = bill + tipAmount;
    let splitBill = bill / numPeople;
    // display
    document.getElementById("bill").innerHTML = makeCurrency(bill);
    document.getElementById("tip-amount").innerHTML = makeCurrency(tipAmount);
    document.getElementById('total-bill').innerHTML = makeCurrency(totalBill);
    if (numPeople > 0) {
        document.getElementById('per-person').innerHTML = makeCurrency(splitBill);
    } else {
        document.getElementById('per-person').innerHTML = "";
    }
}

function validateAndSetInput() {
    bill = validateInput(inputAmount);
    numPeople = validateInput(numberOfPeople);
}

function initializeTipPercentage() {
    // get tip percentage from storage, or set to .20
    if (typeof (Storage) !== "undefined") {
        tipPercentage = parseFloat(localStorage.getItem("tipPercentage"));
    } else {
        tipPercentage = .20;
    }
    displayTipPercentage();
}

function setCustomTip() {
    const that = this;
    let customTipAmount = parseFloat(that.value) / 100;
    document.getElementById('custButton').dataset.amount = customTipAmount.toString();
    displayTipPercentage();
}

function displayTipPercentage() {
    buttons.forEach((b: HTMLButtonElement) => {
        if (tipPercentage == parseFloat(b.dataset.amount)) {
            if (b.id !== "custButton") {
                b.disabled = true;
            }
            document.getElementById("description").innerHTML = `You are tipping ${formatAsPercent(b.dataset.amount)}.`;
            document.getElementById("tip-percent").innerHTML = formatAsPercent(b.dataset.amount);
        }
    });
}