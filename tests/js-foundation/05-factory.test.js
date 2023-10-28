"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _05_factory_1 = require("../../src/js-foundation/05-factory");
const getUUID = () => '1234';
const getAge = () => 35;
describe('js-foundation/05-factory.ts', () => {
    test('buildMakePerson should return a function', () => {
        const makePerson = (0, _05_factory_1.buildMakePerson)({ getUUID, getAge });
        expect(typeof makePerson).toBe('function');
    });
    test('makePerson should return a person', () => {
        const makePerson = (0, _05_factory_1.buildMakePerson)({ getUUID, getAge });
        const johnDoe = makePerson({ name: 'John Doe', birthdate: '1985-12-12' });
        expect(johnDoe).toEqual({
            id: '1234',
            name: 'John Doe',
            birthdate: '1985-12-12',
            age: 35
        });
    });
});
