/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вgitы уже посмотрели?'
*/
const numberOfFilms = +prompt('Сколько фильмов вgitы уже посмотрели?', '');


// 2) Создать объект personalMovieDB и в него поместить такие свойства:
//     - count - сюда передается ответ на первый вопрос
//     - movies - в это свойство поместить пустой объект
//     - actors - тоже поместить пустой объект
//     - genres - сюда поместить пустой массив
//     - privat - в это свойство поместить boolean(логическое) значение false

const personalLMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};






// 3) Задайте пользователю по два раза вопросы:
//     - 'Один из последних просмотренных фильмов?'
//     - 'На сколько оцените его?'
// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате: 
//     movies: {
//         'logan': '8.1'
//     }

// Проверить, чтобы все работало без ошибок в консоли */

const QuestionNumb1 = prompt('Один из последних просмотренных фильмов?', ''),
      QuestionNumb2 = prompt('На сколько оцените его?', ''),
      QuestionNumb3 = prompt('Один из последних просмотренных фильмов?', ''),
      QuestionNumb4 = prompt('На сколько оцените его?', '');


personalLMovieDB.movies[QuestionNumb1] = QuestionNumb2;
personalLMovieDB.movies[QuestionNumb3] = QuestionNumb4;
 
console.log(personalLMovieDB);