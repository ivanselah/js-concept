// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join(',');
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = '๐, ๐ฅ, ๐, ๐';
  const result = fruits.split(',', 2);
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
}

// Q4. make new array without the first two elements
{
  // slice ๋ ์ํ๋ ๋ถ๋ถ๋ง ์๋ก์ด ๋ฐฐ์ด๋ก ๋ฆฌํด, (์กฐ๊ฐ)
  // splice๋ ๋ฐฐ์ด ์์ฒด๋ฅผ ์์  (์ด์ด๋ถ์ด๋ค)
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2);
  console.log(array); // => [1, 2]
  console.log(result); // => []

  //              0      1        2          3        4
  //             -4     -3       -2         -1
  const animals = ['lion', 'tiger', 'elephant', 'zebra'];
  // ์์ ์ธ๋ฑ์ค 1, ์ข๋ฃ์ธ๋ฑ์ค 3             โ
  console.log(animals.slice(1, 3)); // ["tiger", "elephant"]

  const animalss = ['lion', 'tiger', 'elephant', 'zebra'];
  const deleteElements = animalss.splice(1, 2, 'ttt');
  console.log(animalss); // ["lion", "ttt", "zebra"]
  console.log(deleteElements); // ์ญ์ ๋ ๊ฒ ๋ฐํ ๊ฐ์ผ๋ก ์ถ๋ ฅ
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [new Student('A', 29, true, 45), new Student('B', 28, false, 80), new Student('C', 30, true, 90), new Student('D', 40, false, 66), new Student('E', 18, true, 88)];

// Q5. find a student with the score 90
{
  // find ํจ์๋ ์ฒซ๋ฒ์งธ๋ก ์ฐพ์์ง ๊ฒ์ ๋ฆฌํด
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  // ๋ฐฐ์ด์ค์ ํด๋น ์กฐ๊ฑด ์๋์ง ์๋์ง Boolean ์ผ๋ก ๋ฆฌํด
  const result = students.some((student) => student.score < 50);
  console.log(result);

  // ๋ฐฐ์ด์ ์๋ ๋ชจ๋  ์์๋ค์ด ์กฐ๊ฑด์ ์ถฉ๋ถํด์ผ์ง true ๋ฆฌํด
  const result1 = students.every((student) => student.score < 50);
  console.log(result1);
}

// Q9. compute students' average score
{
  // reduceRight ๋ ๊ฑฐ๊พธ๋ก
  // prev ๋ ์ด์ ์ ๊ฐ์ ์ ๋ฌ(๋์ ), curr ํ์ฌ
  const result = students.reduce((prev, curr) => {
    return prev + curr.score;
  }, 0); // 0 ๋ถํฐ ์ ์ฉํ๊ฒ ๋ค
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map((student) => student.score).join(',');
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b) // - ๊ฐ ๋ฆฌํด์ a ๊ฐ์ด b๋ณด๋ค ์๋ค๊ณ  ๊ฐ์ฃผ๋จ(+์,-๋ค)
    .join(',');
  console.log(result);
}

{
  // โญ๏ธ Array falt
  const myNumber = [1, 2, 3, 4, 5, 6, [7], [[8, 9], 10]];
  console.log(myNumber.flat(2));
}

{
  // Array sort
  const fruits = ['grace', 'apple', 'cucu', 'banana'];

  const sortFruits = (A, B) => {
    return A.length - B.length;
  };

  console.log(fruits.sort(sortFruits));

  // โญ๏ธ Object ์์ ์ ๋ ฌ์ด ํ์ํ  ๋
  // sort ๋ ๋ฐฐ์ด๊ฐ์ ๋ณํ ์ํด
  const people = [
    {
      name: 'saleh',
      age: 33,
    },
    {
      name: 'ivan',
      age: 34,
    },
  ];

  const orderPeopleByAge = (personA, personB) => {
    return personA.age - personB.age;
  };
  console.log(people.sort(orderPeopleByAge));

  // [{โฆ}, {โฆ}]
  // 0: {name: 'saleh', age: 33}
  // 1: {name: 'ivan', age: 34}
}
