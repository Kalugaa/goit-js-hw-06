/** @format */

const categoriesList = document.querySelectorAll(".item");
const categoriesCount = categoriesList.length;

console.log(`Number of categories: ${categoriesCount}`);

categoriesList.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  const categoryItemsCount = item.querySelectorAll("ul li").length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryItemsCount}`);
});
