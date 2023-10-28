"use strict";
// console.log(process.env);
Object.defineProperty(exports, "__esModule", { value: true });
exports.characters = void 0;
const { SHELL, HOMEBREW_PREFIX, npm_lifecycle_script, PUBLIC, USERDOMAIN } = process.env;
// console.table({PUBLIC,USERDOMAIN});
exports.characters = ['Flash', 'Superman', 'Green Lantern', 'Batman'];
const [, , batman] = exports.characters;
