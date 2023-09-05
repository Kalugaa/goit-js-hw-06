/** @format */

// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

const categoriesList = document.querySelectorAll(".item");
const categoriesCount = categoriesList.length;

console.log(`Number of categories: ${categoriesCount}`);

categoriesList.forEach((item) => {
  const categoryName = item.firstElementChild.textContent;
  const categoryItemsCount = item.lastElementChild.children.length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryItemsCount}`);
});

// categoriesList.forEach((item) => {
//   const categoryName = item.querySelector("h2").textContent;
//   const categoryItemsCount = item.querySelectorAll("ul li").length;

//   console.log(`Category: ${categoryName}`);
//   console.log(`Elements: ${categoryItemsCount}`);
// });
