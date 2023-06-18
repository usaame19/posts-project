//select add post elements
let postsSection = document.querySelector(".postsSection");
let imageUrl = document.querySelector("#imageUrl");
let title = document.querySelector("#title");
let article = document.querySelector("#article");
let postArea = document.querySelector(".postArea");
let btn = document.querySelector(".btn");

//select posts section
let image = document.querySelector(".image");
let postTitle = document.querySelector(".postTitle");
let postArticle = document.querySelector(".postArticle");


// local storage
function getDataStorage() {
  const createStorage = localStorage.getItem("fromLocal");
  return createStorage ? JSON.parse(createStorage) : [];
}


function addPostToLocalStorage(post) {
  const posts = getDataStorage();
  posts.push(post);
  localStorage.setItem("fromLocal", JSON.stringify(posts));
}

function loadPosts() {
  const posts = getDataStorage();
  posts.forEach((post) => {
    addPost(post.imageUrl, post.title, post.article);
  });
}
loadPosts();

//addPost function
function addPost(imageUrl, title, article) {
  const newPost = `
    <div class="posts">
    <div class="image" style="background-image: url('${imageUrl}')"></div>
        <div class="postTitle"><b>${title}</b></div>
        <div class="postArticle">${article}</div>
    </div>
    `;
  postsSection.insertAdjacentHTML("afterbegin", newPost);
}
  
  
  // create add post function
  btn.addEventListener("click", function () {
    if (postArea.value.length === 0) {
      return;
    } else {
      const newPost = {
        imageUrl: imageUrl.value,
        title: title.value,
        article: article.value,
      };
  
      addPost(newPost.imageUrl, newPost.title, newPost.article);
      addPostToLocalStorage(newPost);
      title.value = "";
      imageUrl.value = "";
      article.value = "";
    }
  });