"use strict";
var list = [
    {
        id: "foo",
        display: "Foo Select"
    },
    {
        id: "bar",
        display: "Bar Select"
    }
];
var fooIndex = list.map(function (i) { return i.id; });
console.log(fooIndex);
