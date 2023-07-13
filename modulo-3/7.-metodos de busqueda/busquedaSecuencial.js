// //Busqueda secuencial
// let a = ['a', 'b', 'c', 'e', 'f', 'g']

// function linearSearch (element, array){
//     for (var i in array){
//         if (array[i] == element)
//         return i;

//     }
//     return -1;
// }

// console.log(linearSearch('k',a));


function linearSearch(element, array){
    let found = false;
    let p = -1;
    let index = 0;

    while(!found && index < array.length){
        if (array[index] == element){
            found = true
            p = index;
        }
        else{
            index += 1
        }
    }
    return p
}

console.log(linearSearch(5, [1, 5, 12, 4, 22]));