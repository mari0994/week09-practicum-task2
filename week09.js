//Задание 1
 //Выведи в консоль строку: "Нужно бежать со всех ног, чтобы только оставаться на месте, а чтобы куда-то попасть, надо бежать как минимум вдвое быстрее!"
 console.log('Нужно бежать со всех ног, чтобы только оставаться на месте, а чтобы куда-то попасть, надо бежать как минимум вдвое быстрее!');
     
     
//Задание 2
 //Выведи в консоль свое имя.</p>
 console.log('Maria');

     
//Задание 3
 //Выведи в консоль номер месяца в котором ты родилась. Изучи чем отличается вывод числа и строки.
 console.log(12);
     
//Задание 4
 //Выведи в консоль строку: 'Добро '+'пожаловать, '+ твое имя</p>. Например, 'Добро '+'пожаловать, '+'Алиса'
 console.log('Добро' + 'пожаловать, ' + 'Алиса');

//Задание 5
 //Сложи слово 'Владивосток' и число 2000, а также добавь между ними пробел, чтобы получилось название известной песни. Результат выведи в консоль.
 console.log('Владивосток ' + 2000);   
     
//Задание 6
 //С помощью alert выведи число 2023. 
 //После срабатывания кода - его можно закомментировать, чтобы он не мешал для дальнейшей разработки.
   //alert(2023);   
     
//Задание 7
 //С помощью console.log выведи результат операции 2023 + 1. Проверь результат в консоли.
   console.log(2023 + 1);   
    
//Задание 8
 //Прокрастинируя дома, Русалка 128 минут переписывалась в мессенджере, 254 минуты лайкала фотокарточки, 137 минут читала статьи в Википедии и 201 минуту смотрела стендапы на YouTube. Выведи в консоль, сколько часов прокрастинировала Русалка.
 //Не нужно самостоятельно суммировать числа, пусть JS сделает это за тебя ;)
 console.log((128 + 254 + 137 + 201) / 60);
     
//Задание 9
 //Зарплата вечернего уборщика в городской поликлинике 40000 рублей, а педагога по вокалу 22000 рублей. Выведи в консоль, сколько можеn зарабатывать вечерний уборщик, имея голос и педагогическое образование?
   console.log(40000 + 22000 + ' рублей.');  
     
//Задание 10
 //У тебя есть две переменные:</p>
 const greetings = "Привет";
 const name = "Кот";
 //Склей значение этих двух переменных и выведи на экран значение «Привет, Кот».
 console.log(greetings + ', ' + name);   
     
//Задание 11
 //Объяви переменную с именем fahrenheit и положи в неё значение 451.
 //Добавь новую переменную celsius и запиши в неё значение, рассчитанное по формуле перевода температуры из градусов по Фаренгейту в градусы Цельсия:
 //(fahrenheit - 32) / 1.8;</p>
 //Применив переменные и шаблонные строки, выведи в консоль строку, где _fahrenheit_и _celsius_ — это значения соответствующих переменных:
 //'_fahrenheit_ градуса по Фаренгейту — это _celsius_ градуса по Цельсию.'
   let fahrenheit = 451;
   let celcius = (fahrenheit - 32) / 1.8; 
   console.log(`${fahrenheit} градуса по Фаренгейту - это ${celcius} градуса по Цельсию.`);

//Задание 12
 //Запиши в переменную '15' как строку и выведи в консоль.</p>
 //Затем преобразуй эту переменную в число и выведи ее как число.</p>
 //Проверь себя с помощью typeof.</p>
    
 let string = '15';
 let stringAsNumber = Number(string);
 console.log(typeof(stringAsNumber));




 //Практическое задание 2

let time;

time = 34;

console.log(time);

console.log('Старт поездки. Осталось минут: ' + time);

time = time - 15;

console.log('Немного сторис в соцсетях. Осталось минут: ' + time);

time = time - 10;

console.log('Немного не новостей, но событий. Осталось минут: ' + time);

time = 0;

console.log('Вы приехали. Добро пожаловать в Москву.');