"use strict";
// getUUID
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUUID = void 0;
// const { v4: uuidv4 } = require('uuid');
const uuid_1 = require("uuid");
const getUUID = () => {
    return (0, uuid_1.v4)();
};
exports.getUUID = getUUID;
