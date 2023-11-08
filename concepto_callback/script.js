// CONCEPTO DE CALLBACK //

function fetchData(CALLBACK) {
    setTimeout(() => {
        const data = {name: "John", age: 30}
        CALLBACK(data);
    }, 3000);
}

fetchData(function (data){
    console.log(data);
});

console.log("Data is being fetched...");