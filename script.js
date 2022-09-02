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
  displayDiv.innerHTML = ''
  data.forEach((news) => {
    console.log(news)
    const div = document.createElement("div");
    div.classList.add('news-blogs')
    div.innerHTML = `
                <div class="card card-side bg-base-100 shadow-xl mx-16">
                   <figure><img src="${news.thumbnail_url}" alt=""></figure>
                   <div class="card-body">
                      <h2 class="card-title">New movie is released!</h2>
                       <p>Click the button to watch on Jetflix app.</p>
                      <div class="card-actions justify-end">
                        <button class="btn btn-primary">Watch</button>
                      </div>
                  </div>
                </div>
           `;
           displayDiv.appendChild(div)
  });
};

newsApi();
