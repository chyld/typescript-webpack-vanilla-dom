"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dog_1 = __importDefault(require("./dog"));
var dogs = ["max", "sally"].map(function (name) {
    var d = new dog_1.default(name, Math.random() * 10);
    return d;
});
console.log("dogs:", dogs);
