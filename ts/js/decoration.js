"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logClass(url) {
    return function (target) {
        console.log(target);
        console.log(url);
    };
}
var Logon = /** @class */ (function () {
    function Logon(name) {
        this.name = name;
    }
    Logon.prototype.run = function () {
        console.log(this.name + " is running");
    };
    Logon = __decorate([
        logClass("www.wechat.com")
    ], Logon);
    return Logon;
}());
var logon = new Logon("Eva");
logon.run();
