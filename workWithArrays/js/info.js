//Чтобы посмотреть результат функции подключи данный JS-файл в index.html
//И запусти функции через консоль

//Массив данных - это переменная переменных. Иными словами это группа переменных, 
//объединённых для решения некоторой задачи
//Пример создания переменной в JS
function firstExample() {
    const myArray = Array(1, '2', true, 4.201)
    console.log(myArray)
}

//Существует и иной способ создания переменной
function secondExample() {
    const myArray = [1, '2', true, 4.201]
    console.log(myArray)
}

//Судя по примерам выше массив может хранить разного типа переменные
//Данные в массивах хранятся по принципу ключ - значение, Это зачит, что у каждого ключа
//есть своё значение. Информацию из массива можно получить используя тот или иной ключ
//Нумерация ключей массива зачастую начинается с 0. То есть первому элементу массива
//соответсвует 0 ключ
//Длину массива, можно узнать с помощью метода 'length'.
//Длиной называется колличесто элементов
function thirdExample() {
    const myArray = [1, '2', true, 4.201]
    console.log(myArray[0])
    console.log('Длина массива - ' + myArray.length)
}

//Благодаря уникальности индексов(ключей) массива информацию можно перезаписывать
//Информацию из массивов с лёгкостью можно записывать в переменную
function thirdExample() {
    let myArray = [1, '2', true, 4.201]
    myArray[0] = 0
    let myVaraible = myArray[0]
    console.log(myVaraible)
}

//Массивы можно создавать пустыми и потом их заполнять
function fourthExample() {
    const myArray = []
    myArray[0] = 1
    myArray[1] = '2'
    myArray[2] = true
    myArray[3] = 4.201
    console.log(myArray)
}

//При заполнении индексы массива можно и не описывать если используешь методы 'unshift' и 'push'
//Данные методы добавляют новые значения в массив 'unshift' в начало массива, а 'push' в конец
//Элементы массива можно удалять, для это существуют специальные методы
function fivethExample() {
    const myArray = []
    myArray[0] = '2'
    myArray[1] = true
    myArray.unshift(1)
    myArray.push(4.201)
    console.log(myArray)
}

//Массивы прекрасно работают с циклом 'forEach' если в качестве индексов у них числа,
//ведь для них он и был создан. Если мы работаем с ассоциативным массивом,
//то 'forEach' не сработает
function sixthExample() {
    const myArray = [1, '2', true, 4.201]
    myArray.forEach(element => {
        console.log(element)
    })
}

//Так же массивы работают и с другими циклами, но тут индексы нужно прописывать самому.
//Например здесь я использовал итератор для индексации и цикл ограничил длинной массива
function seventhExample() {
    const myArray = [1, '2', true, 4.201]
    for (i = 0; i < myArray.length; i++) {
        console.log(myArray[i])
    }
}

//В данном примере мы сотрируем массив и извлекаем из него только числа.
//Для этого на пригодится оператор 'typeof'. Он возвращает тип переменной
function eighthExample() {
    const
    myArray = [1, '2', true, 4.201], 
    newArray = []
    for (i = 0; i < myArray.length; i++) {
        if (typeof(myArray[i]) === 'number') {
            newArray.push(myArray[i])
        }
    }
    console.log(newArray)
}

//Твоя задача будет описана в index.js