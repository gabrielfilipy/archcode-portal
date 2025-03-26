document.addEventListener("DOMContentLoaded", function () {
    fetch(`/api/blog-post/${postId}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("post-title").textContent = data.title;
            document.getElementById("author-data-post").textContent = `Autor: ${data.author}`;
            document.getElementById("post-image").src = `/static/public/img/posts/POST_${postId}.png`;
            document.getElementById("post-description").textContent = data.description;
        })
        .catch(error => console.error("Erro ao carregar post:", error));
}); 
