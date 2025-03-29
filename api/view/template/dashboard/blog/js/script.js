document.addEventListener("DOMContentLoaded", function () {
    console.log("TinyMCE carregando...");
    
    tinymce.init({
        selector: '#editor',
        content_style: 'body { border-radius: 0 !important; box-shadow: none !important; }',  // Remove borda arredondada e sombra
        setup: function(editor) {
            // Também pode configurar outros estilos internos do editor se necessário
            editor.on('init', function() {
                // Garantir que o conteúdo inicial não tenha bordas arredondadas
                editor.getBody().style.borderRadius = '0';
                editor.getBody().style.boxShadow = 'none';
            });
        }
    }).then(() => {
        console.log("TinyMCE inicializado com sucesso!");
    }).catch((error) => {
        console.error("Erro ao inicializar o TinyMCE:", error);
    });
});

document.getElementById("btn-link").addEventListener("click", function() {
    window.location.href = "/dashboard/blog/post/form";
});

//Gabriel Filipy: Lógica para prever a foto adicionada pelo usuário
function previewImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function() {
        const imagePreview = document.getElementById('imagePreview');
        imagePreview.style.backgroundImage = `url(${reader.result})`;
        imagePreview.style.display = 'block';
    }
    if (file) {
        reader.readAsDataURL(file);
    }
}