"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins_1 = require("../../src/plugins");
describe('plugins/get-age.plugins.ts', () => {
    test('getAge() should return the age of a person', () => {
        const birthdate = '1994-06-12';
        const age = (0, plugins_1.getAge)(birthdate);
        expect(typeof age).toBe('number');
    });
    test('getAge should return current age', () => {
        const birthdate = '1994-06-12';
        const age = (0, plugins_1.getAge)(birthdate);
        const calculatedAge = new Date().getFullYear() - new Date(birthdate).getFullYear();
        expect(age).toBe(calculatedAge);
    });
    test('getAge should return 0 years', () => {
        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995);
        const birthdate = '1995-10-21';
        const age = (0, plugins_1.getAge)(birthdate);
        expect(age).toBe(0);
        expect(spy).toHaveBeenCalledWith();
    });
});
