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
    <button onclick="countCategories('${categorie.category_id ? categorie.category_id : 'DATA NOT FOUND'}')" class="hover:text-orange-200">${categorie.category_name}</button>
    `;
    displayDiv.appendChild(div);
  });
};
/// SPPINER SECTION ////
const toggleSpiner = (isLodding) => {
    const spiner = document.getElementById('lodding');
    if (isLodding) {
        spiner.classList.remove('d-none')
    }
    else {
        spiner.classList.add('d-none')
    }
}

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
    const div = document.createElement("div");
    div.classList.add("news-blogs");
    div.innerHTML = `
                <div class="card card-side bg-base-100 shadow-xl mx-16">
                   <figure><img src="${news.thumbnail_url}" alt=""></figure>
                   <div class="card-body">
                        <h1 class="card-title text-2xl">${news.title}</h1>
                        <p>${news.details.slice(0, 200) + "....."}</p>
                          <div class="flex">
                               <img class="w-14 rounded-full" src="${
                                 news.author.img
                               }" />
                                <div class="ml-5">
                                 <p> ${news.author.name ? news.author.name : 'N/A' }</p>
                                 <p> ${news.author.published_date ? news.author.published_date : 'N/A'}</p>
                               </div>
                               <span class="text-center ml-28 mt-6"><i class="fa-regular fa-eye"></i> ${
                                 news.total_view
                               }</span>
                               <span class="text-center ml-28 mt-6">
                               <i class="fa-solid fa-star"></i>
                               <i class="fa-regular fa-star"></i>
                               <i class="fa-regular fa-star"></i>
                               <i class="fa-regular fa-star"></i>
                               <i class="fa-regular fa-star"></i>
                               </span>
                               
                               <span class="ml-72"><label onclick="idApi('${news._id}')" for="my-modal-3" class="btn glass modal-button">Details</label></span>
                            </div>
                    </div>
                          
                </div>
            
           `;
    displayDiv.appendChild(div);
  });
};

const idApi = (id) => {
  const url = `https://openapi.programming-hero.com/api/news/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => modalDisplay(data.data));
};

const modalDisplay = (datas)=>{
    const modalDiv = document.getElementById('modal-id')
    datas.forEach(data =>{
        console.log(data)

    modalDiv.innerHTML = `
    <label
            for="my-modal-3"
            class="btn btn-sm btn-circle absolute right-2 top-2"
            >✕</label
          >
          <h3 class="text-lg font-bold"> Author Name : ${data.author.name? data.author.name : 'Data not available'}</h3>
           <p class="py-4">Total View : ${data.total_view? data.total_view : 'Data not available'}</p>
          <p class="py-4">Published Date : ${data.author.published_date? data.author.published_date :'Data not available'}</p>
    
    `
    
    })


}



newsApi();
