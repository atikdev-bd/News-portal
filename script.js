const newsApi = () => {
  const url = "https://openapi.programming-hero.com/api/news/categories";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCategories(data.data.news_category));
};

const displayCategories = (categories) => {
  const displayDiv = document.getElementById("categories");
  categories.forEach(categorie=>{
    const div = document.createElement('div');
    div.innerHTML = `
    <button class="hover:text-orange-200">${categorie.category_name}</button>
    `;
    displayDiv.appendChild(div)
    

  
    





})
};
newsApi();
