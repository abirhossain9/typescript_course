var RequestType;
(function (RequestType) {
    RequestType[RequestType["getData"] = 1] = "getData";
    RequestType[RequestType["deleteData"] = 4] = "deleteData";
    RequestType[RequestType["saveData"] = 3] = "saveData";
})(RequestType || (RequestType = {}));
console.log(RequestType);
var RequestType2;
(function (RequestType2) {
    RequestType2["getData"] = "READ_DATA";
    RequestType2["deleteData"] = "DELETE_DATA";
    RequestType2["saveData"] = "SAVE_DATA";
})(RequestType2 || (RequestType2 = {}));
console.log(RequestType2);
var RequestType3;
(function (RequestType3) {
    RequestType3["getData"] = "READ_DATA";
    RequestType3["deleteData"] = "DELETE_DATA";
    RequestType3[RequestType3["saveData"] = 3] = "saveData";
})(RequestType3 || (RequestType3 = {}));
console.log(RequestType3);
