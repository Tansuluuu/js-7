
//Home work

// Ожидаемый результат: [1, 2, 3] => [3, 2, 1]
// const yellow = (arr) => {
//   return arr.reverse()
// }
// console.log(yellow([1, 2, 3] ))

 // Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
// const yellow = (arr) => {
//   return arr.filter(el => el)
// }
// console.log(yellow([0, 1, false, 2, undefined, '', 3, null]))

    // Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]
// const yellow = (arr) => {
//     return arr.filter((el, id) => arr.indexOf(el) === id);
// }
// console.log(yellow([1, 2, 3, 1, 2]))

// Задача. Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
// const yellow = (arr, arr2) => {
//   return [...arr,...arr2]
// }
// console.log(yellow(['a', 'b', 'c'],[1, 2, 3]))

// Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
// let cars = [1, 2, 3];
//  cars.push(4, 5, 6);
// console.log(cars);

// let cars = [1, 2, 3];
//  cars.unshift(4, 5, 6);
// console.log(cars);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2);
// console.log(arr)

// Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
// const arrayObj =
//     {
//         js:'test',
//         jq: 'hello',
//         css: 'world',
//     }
//
// console.log(Object.keys(arrayObj))

// Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение. Элементы массива будут разделены запятой.
    // ['Капуста', 'Репа', 'Редиска', 'Морковка']
// const yellow = (arr) => {
//   return arr.join(',')
// }
// console.log(yellow( ['Капуста', 'Репа', 'Редиска', 'Морковка']))


// const yellow = (arr) => {
//   return arr.split('').map(el => el === el.toLowerCase() ? el.toUpperCase() : el.toLowerCase()).join('');
// }
// console.log(yellow('КаЖдЫй ОхОтНиК'))

// const cars = [
//   {
//     make: "Ford",
//     model: "Mustang",
//     year: 1969,
//     color: "red",
//     price: 25000
//   },
//   {
//     make: "Ford",
//     model: "F-150",
//     year: 2017,
//     color: "blue",
//     price: 30000
//   },
//   {
//     make: "Tesla",
//     model: "Model S",
//     year: 2018,
//     color: "black",
//     price: 120000
//   },
//   {
//     make: "Chevrolet",
//     model: "Camaro",
//     year: 1970,
//     color: "orange",
//     price: 60000
//   },
//   {
//     make: "Dodge",
//     model: "Challenger",
//     year: 2019,
//     color: "red",
//     price: 35000
//   },
//   {
//     make: "Chevrolet",
//     model: "Corvette",
//     year: 2019,
//     color: "blue",
//     price: 90000
//   },
//   {
//     make: "Tesla",
//     model: "Model 3",
//     year: 2019,
//     color: "white",
//     price: 40000
//   },
//   {
//     make: "Mercedes",
//     model: "C-Class",
//     year: 2019,
//     color: "black",
//     price: 60000
//   }
// ]
// console.log(cars.filter((el) => el.price >= 40000 && el.price <= 60000 &&  el.year <= 2019))
// console.log(cars.filter((el) => el.make === 'Tesla'))





//practice

// const arrayObj = [
//     {
//         name: 'Vasya',
//         age: 20,
//         isMarried: false,
//         gender: 'male'
//     },
//     {
//         name: 'Petr',
//         age: 29,
//         isMarried: true,
//         gender: 'male'
//     },
//     {
//         name: 'Volodya',
//         age: 25,
//         isMarried: true,
//         gender: 'female'
//     },
//     {
//         name: 'Lera',
//         age: 20,
//         isMarried: false,
//         gender: 'male'
//     },
//     {
//         name: 'Nikita',
//         age: 30,
//         isMarried: false,
//         gender: 'female'
//     }
// ]

// console.log(arrayObj.filter(user => user.age < 24 && !user.isMarried ));

// console.log(arrayObj.filter(user => user.gender === "female" ));

// console.log(arrayObj.filter(user => user.isMarried  && user.age > 24 ));


// const handleFilter = (array) => {
//     return array.filter(user => user.age > 24 && user.isMarried && user.gender === 'male' )
// }
// console.log(handleFilter(arrayObj))







