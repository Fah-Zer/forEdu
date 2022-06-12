//info
/*
Твоя задача заключается в сортировке массива на чётные и нечётные числа.
Чтобы выполнить эту задачу ты должен отредактировать функцию 'eduSorting'.
Среди аргументов(переменных) она получает неотсортированный массив чисел, и два пустых массива
В первый ты должен сложить чётные числа, а во второй массив ты должен сложить нечётные числа
Также чтобы выполнить это задание ты должен вернуть два отсортированных массива из этой функции
*/

function arraySorting() {
    let
        myArray = [],
        even = [],
        uneven = []
    arrayGenerator(myArray)
    eduSorting(myArray, even, uneven)
    arrayChecking(even, uneven)
}

function arrayGenerator(myArray, quantity = 10) {
    for (i = 0; i < quantity; i++) {
        newNumber = Math.floor(Math.random() * 10)
        myArray.push(newNumber)
    }
    return myArray
} 

function eduSorting(myArray, even, uneven) {
}

function arrayChecking(even, uneven) {
    if (even.length !== 0 || uneven.length !== 0) {
        if (even.length > 0) {
            console.log('Массив чётных чисел - ' + even)
        } else {
            console.log('Чётных чисел нет')
        }
        if (uneven.length > 0) {
            console.log('Массив нечётных чисел - ' + uneven)
        } else {
            console.log('Нечётных чисел нет')
        }
    } else {
        console.log('Длинна двух массивов не может быть равна 0')
    }
}

arraySorting()