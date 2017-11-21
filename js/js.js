// Циклы (вывод в строку через пробел и в столбик)
// ----------------------------------------
// 1. Вывести числа от 4 до 400 на экран.
var i = 1;
while (i <= 400) {
	document.write(i+ '_');
	i++;
}
// 2. Вывести числа в последовательности: 4 7 10 13 с помощью цикла.
var x=1;
while(x<=13){
	document.write(x+ "<br/>");
	x+=3;
}
// 3. Вывести числа 654 653 652 до нуля.
for (i=654; i>=0; i--) {
	document.write(i+ ' ');
}
// 4. Вывести все годы с 1983 до 2017.
var i = 1983;
while (i <= 2017) {
	document.write(i+ ' ');
	i++;
}
// 6. Вывести числа -4 -2 0 2 4 6 ...100. 
var i = -4;
while (i <= 100) {
	document.write(i+ '/');
	i++;
}
// Весь вывод в консоль!
// 1. Массив [3, 6, 1, 13, 88, 43]. Вывести нулевой, третий элемент.
var  m = [3, 6, 1, 13, 88, 43];
console.log(m[0], m[2]);

// // 2. Массив ['Hi', "hello", 34, "prima"]. Вывести первый, последний элемент.
var fruits = ['Hi', "hello", 34, "prima"];
var lastItem = fruits[fruits.length - 1];
console.log(fruits[0]);
console.log(lastItem);

// // 3. Массив ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43]. Вывести длину массива.
var  arr = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
console.log(arr.length);
// // 4. Массив ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43]. Замените 3 элемент массива на строку 'new element'.
var item4 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
item4[4] = "new element";
console.log(item4);
// // 5. Массив ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43]. Замените 2 и 4 элемент массива на числа 22 и 44.
var item5 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
item5[1] = 22;
item5[3] = 44
console.log(item5);
// // 6. Массив ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43]. Создайте 10 член массива со значением 100.
var arr6 =['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
arr6[9] = 100;
console.log(arr6);
// // 7. Массив ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43]. Создайте 12 член массива со значением 200. Выведите массив. Выведите 11 член массива.
var arr7 =['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
arr7[11] = 200;
console.log(arr7);
console.log(arr7[10]);
// // 8. Дан массив var arr = [31, 24, 35, 47, 12]. Выведите arr[3], arr[60].
var arr8 = [31, 24, 35, 47, 12];
console.log(arr8[3]);
console.log(arr8[60]);


// // 9. Дан массив var arr = [31, 24, 35, 47, 12]. Выведите arr[f], где переменная f = 1, f=4, f=7 
var arr9 = [31, 24, 35, 47, 12];
	// var f = 1;
	var f = 4;
	// var f = 7;
	console.log(arr9[f]);

// // 10. Дан массив var arr = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43]. Выведите arr[i], где переменная i = 1,2,3,4,5.
var arr10 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
	// var i = 1;
	// var i = 2;
	// var i = 3;
	// var i = 4;
	var i = 5;
	console.log(arr10[i]);

// // 11. Дан массив var arr = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43]. Выведите arr[i], где переменная i - вводит пользователь.
// var arr11 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
var arr11 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
document.getElementById('btnAdd').onclick=addNew;
function addNew() {
	var ind = document.getElementById('in').value;
	ind = parseInt(ind);
	var elem = document.getElementById('el').value;
	arr11[ind] = elem;
	console.log(arr11);
}
// 12. Дан массив var arr = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43]. Выведите массив на страницу через пробел.
var out12 = '';
var arr12 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
for (var i = 0; i < arr12.length; i++) {
	out12 += arr12[i] + ' ';
}
console.log(out12);
// 13. Дан массив var arr = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43]. Выведите массив в обратном порядке на страницу через пробел.
var out13 = '';
var arr13 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
for (var i = arr13.length-1; i>=0; i--) {
	out13 += arr13[i] + ' ';
}
console.log(out13);
// Вложенные массивы
// -------------------

// 14. Массив: 
// arr = [2, 3, [4,5]]
// Выведите весь массив в консоль. Выведите 0, 1 члены массива.
// Выведите второй элемент массива.
var arr14 = [2, 3, 
[4,5]
];
console.log(arr14[2][0]);
console.log(arr14[1]);

// 15. Массив: 
// arr = [2, 3, [4,5]]
// Выведите в консоль элемент arr[2][0]
// Выведите в консоль элемент arr[2][1]
var arr15 = [2, 3, [4,5]];
console.log(arr15[2][0]);
console.log(arr15[2][1]);

// 16. Массив: 
// arr = [2, 3, [4,5]]
// вторым элементом данного массива является тоже массив [4,5]
// Выведите в консоль длину массива [4,5], для этого запишите правильно:
// console.log(arr[сюда впишите номер элемента-массива].lenght);
var arr16 = [2, 3, [4,5]];
console.log(arr15[2].length);

// 17. Дан массив
// arr = [ 2, [3,4,5], [6,7,8]  ];
// выведите в консоль число 4, число 8 из этого массива.
var arr17 = [ 2, [3,4,5], [6,7,8]  ];
console.log(arr17[1][1]);
console.log(arr17[2][2]);

// 18. Дан массив
// arr = [ 2, [3,4,5], [6,7,8]  ];
// выведите в консоль второй элемент данного массива
// выведите нулевой элемент этого массива
var arr18 = [ 2, [3,4,5], [6,7,8]  ];
console.log(arr17[1]);
console.log(arr17[0]);

// 19. Дан массив
// arr = [ 2, [3,4,5], [6,7,8,9, 11, 12, 13, 14]  ];
// выведите в консоль все элемент последнего вложенного в него массива
var arr19 = [ 2, [3,4,5], [6,7,8,9, 11, 12, 13, 14]  ];
console.log(arr19[2]);

// 20. Дан массив
// arr = [ ['hi', 3, 'beta'], ['foo', 'jam', 'tritto']  ];
// выведите в консоль foo и beta из этого массива.
var arr20 = [ ['hi', 3, 'beta'], ['foo', 'jam', 'tritto']  ];
console.log(arr20[1][0]);
console.log(arr20[0][2]);

