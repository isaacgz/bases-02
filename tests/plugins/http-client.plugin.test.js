"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_client_plugin_1 = require("../../src/plugins/http-client.plugin");
describe('plugins/http-client.plugin.ts', () => {
    test('httpClientPlugin.get() should return a string', () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield http_client_plugin_1.httpClientPlugin.get('https://jsonplaceholder.typicode.com/todos/1');
        expect(data).toEqual({
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: expect.any(Boolean)
        });
    }));
    test('httpClientPlugin should have POST, PUT and Delete methods', () => {
        expect(typeof http_client_plugin_1.httpClientPlugin.post).toBe('function');
        expect(typeof http_client_plugin_1.httpClientPlugin.delete).toBe('function');
        expect(typeof http_client_plugin_1.httpClientPlugin.put).toBe('function');
        expect(typeof http_client_plugin_1.httpClientPlugin.get).toBe('function');
    });
});
