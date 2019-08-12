//import { runApp } from "../src";
import { makeCurrency, formatAsPercent, validateInput } from "../src/utils";

describe('the thing that calculates', () => {
    // beforeEach(function () {
    //     runApp();
    // })
    // it("should call carService using spyOn with a fake implementation", function () {
    //     const getCarsFake = function () {
    //         return [
    //             { year: 2016, make: "Test", model: "Car", rearWheelHorsepower: 0, flywheelHorsepower: 0, weight: 1000, et: 10 }
    //         ];
    //     };
    //     let carSrvSpy = spyOn(CarServiceJs, "getCars").and.callFake(getCarsFake);
    //     let result = CarServiceJs.getCars();
    //     expect(result[0].year).toEqual(2016);
    // });
    // it("should call carService using createSpy", function () {
    //     let carService = { getCars: jasmine.createSpy() };
    //     let engineCalc = new EngineCalculationsJs(carService);
    //     //calculateCarData() calls getCars from within:
    //     let result = engineCalc.calculateCarData();
    //     expect(carService.getCars).toHaveBeenCalled();
    // });
    // afterEach(() => {

    // });
});

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