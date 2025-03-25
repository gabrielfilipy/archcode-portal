// Descrições dos produtos
var descPirarucuMedalhao = 'O Peixe Congelado Filé em Pedaços sem Pele PIRARUCU (Medalhão) é uma excelente opção para quem busca praticidade e qualidade na cozinha. Originário da região amazônica, o pirarucu é um peixe de carne firme e sabor delicado, ideal para diversas preparações. Nosso filé é cuidadosamente cortado em medalhões, sem pele, proporcionando uma experiência culinária ainda mais suave e agradável. O produto é congelado imediatamente após o processamento, garantindo a preservação total de sua frescor, sabor e nutrientes. Perfeito para grelhar, assar ou preparar em receitas sofisticadas, o pirarucu é uma escolha saudável, rica em proteínas e pobre em gordura. Além disso, sua textura macia e sabor suave agradam a todos os paladares, tornando-o ideal para famílias e ocasiões especiais.'
var descPirarucuSemPele = 'O Peixe Congelado Filé em Pedaços sem Pele PIRARUCU é uma opção saudável e de fácil preparo para quem aprecia peixes de carne firme e sabor delicado. Proveniente da região amazônica, o pirarucu é um peixe de textura suave e sabor inconfundível, perfeito para grelhar, assar ou adicionar em receitas diversas. O filé é cuidadosamente retirado da carne do peixe, sem pele, garantindo praticidade e rapidez no preparo. Sua carne, rica em proteínas e com baixo teor de gordura, torna-o uma excelente opção para uma alimentação saudável e nutritiva. Com a garantia de frescor, o produto é congelado imediatamente após o processamento, preservando seu sabor e nutrientes.'
var descPiramutadaComPele = 'O Peixe Congelado Filé em Pedaços com Pele PIRAMUTABA é uma excelente escolha para quem deseja saborear uma carne firme e suculenta. A piramutaba, originária da região amazônica, oferece uma textura robusta e um sabor delicado, especialmente quando preparada com a pele. O filé, cortado em pedaços prontos para o preparo, pode ser grelhado, assado ou usado em diversas receitas. Seu sabor suave e sua carne de alta qualidade são ideais para quem busca uma refeição nutritiva, rica em proteínas e com baixo teor de gordura. O produto é congelado imediatamente após o processamento, garantindo a preservação de sua frescura e sabor por mais tempo.'

var titlePirarucuMedalhao = 'PIRARUCU (Medalhão) - Peixe Congelado Filé em Pedaços sem Pele';
var titlePirarucuSemPele = 'PIRARUCU - Peixe Congelado Filé em Pedaços sem Pele';
var titlePiramutadaComPele = 'PIRAMUTABA - Peixe Congelado Filé em Pedaços com Pele';

// Função para exibir o modal
function showModal(productId) {
    let description = '';
    let title = '';

    // Seleciona a descrição com base no ID do produto
    switch(productId) {
        case 1:
            description = descPirarucuMedalhao;
            title = titlePirarucuMedalhao;
            break;
        case 2:
            description = descPirarucuSemPele;
            title = titlePirarucuSemPele;
            break;
        case 3:
            description = descPiramutadaComPele;
            title = titlePiramutadaComPele;
            break;
        default:
            description = 'Produto não encontrado.';
    }

    // Exibe o modal com a descrição
    document.getElementById("modal-title").innerText = `Produto ${title}`;
    document.getElementById("modal-description").innerText = description;
    document.getElementById("modal").style.display = "block"; 
    
    // Desabilita o scroll da página
    document.body.style.overflow = 'hidden';
}

// Função para fechar o modal
function closeModal() {
    document.getElementById("modal").style.display = "none"; 
    
    // Habilita o scroll da página
    document.body.style.overflow = 'auto';
}