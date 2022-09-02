const newsApi = () => {
  const url = "https://openapi.programming-hero.com/api/news/categories";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCategories(data.data.news_category));
};

const displayCategories = (categories) => {
  const displayDiv = document.getElementById("categories");
  categories.forEach((categorie) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <button onclick="countCategories('${categorie.category_id}')" class="hover:text-orange-200">${categorie.category_name}</button>
    `;
    displayDiv.appendChild(div);
  });
};

const countCategories = (id) => {
  const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => newsCategories(data.data));
};
const newsCategories = (data) => {
  const displayDiv = document.getElementById("blogs");
  displayDiv.innerHTML = "";
  data.forEach((news) => {
    console.log(news);
    const div = document.createElement("div");
    div.classList.add("news-blogs");
    div.innerHTML = `
                <div class="card card-side bg-base-100 shadow-xl mx-16">
                   <figure><img src="${news.thumbnail_url}" alt=""></figure>
                   <div class="card-body">
                        <h1 class="card-title text-2xl">${news.title}</h1>
                        <p>${news.details.slice(0, 200) + "....."}</p>
                         <div class="card-actions justify-end">
                             <button class="btn btn-primary">Watch</button>
                           </div>
                          <div class="flex">
                               <img class="w-14 rounded-full" src="${news.author.img}" />
                                <div class="ml-5">
                                 <p> ${news.author.name}</p>
                                 <p> ${news.author.published_date}</p>
                               </div>
                               <span class="text-center ml-28 mt-6"><i class="fa-regular fa-eye"></i> ${news.total_view}</span>
                               <span class="text-center ml-28 mt-6">
                               <i class="fa-solid fa-star"></i>
                               <i class="fa-regular fa-star"></i>
                               <i class="fa-regular fa-star"></i>
                               <i class="fa-regular fa-star"></i>
                               <i class="fa-regular fa-star"></i>
                               </span>
                          </div>
                     </div>
                </div>
           `;
    displayDiv.appendChild(div);
  });
};

newsApi();
