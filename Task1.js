// 1. Напишите функцию, которая берет массив объектов и возвращает массив значений определенного поля:

    const chars = [
        { 'name': 'tony', 'age': 20 },
        { 'name': 'feel', 'age': 30 }
    ];


function pluck(objArr, property){
    let res = []
    for (let key in objArr){
        console.log(key)
        if (key === property){
            res.push(key)
        }
    }
}

console.log(pluck(chars, 'name')); // ['tony', 'feel']