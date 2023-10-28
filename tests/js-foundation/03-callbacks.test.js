"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _03_callbacks_1 = require("../../src/js-foundation/03-callbacks");
describe('js-foundation/03-callbacks.ts', () => {
    test('getUserById should return error if user does not exist', (done) => {
        const id = 10;
        (0, _03_callbacks_1.getUserById)(id, (err, user) => {
            expect(err).toBe(`User not found with id ${id}`);
            expect(user).toBeUndefined();
            done();
        });
    });
    test('getUserById should return error if user does not exist', (done) => {
        const id = 10;
        (0, _03_callbacks_1.getUserById)(id, (err, user) => {
            expect(err).toBe(`User not found with id ${id}`);
            expect(user).toBeUndefined();
            done();
        });
    });
});
