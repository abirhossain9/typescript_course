
enum RequestType {
    getData =1,
    deleteData =4,
    saveData =3
}

console.log(RequestType)

enum RequestType2 {
    getData = "READ_DATA",
    deleteData = "DELETE_DATA",
    saveData = "SAVE_DATA"
}
console.log(RequestType2)

enum RequestType3 {
    getData = "READ_DATA",
    deleteData = "DELETE_DATA",
    saveData = 3
}
console.log(RequestType3)


