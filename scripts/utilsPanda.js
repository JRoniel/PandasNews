// Função para buscar os artigos da API e mostrar a seção de notícias
function fetchArticles() {
    var url = 'https://newsapi.org/v2/everything?' +
        'q=pandas&' +
        'from=2023-09-17&' +
        'sortBy=popularity&' +
        'apiKey=2c3ed98d52554e0997072b52dd2fba87';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.articles && data.articles.length > 0) {
                showDisplay();
                displayArticles(data.articles);
            } else {
                console.error('Nenhum artigo encontrado.');
            }
        })
        .catch(error => {
            console.error('Ocorreu um erro:', error);
        });
}

// Função para mostrar a seção de notícias
function showDisplay() {
    var newsDiv = document.querySelector(".news");
    if (newsDiv) {
        newsDiv.style.display = "block";
    }
}

// Função para exibir os artigos na página HTML
function displayArticles(articles) {
    var newsDiv = document.querySelector(".news");

    if (newsDiv) {
        // Limpar qualquer conteúdo existente na div "news"
        newsDiv.innerHTML = '';

        // Criar blocos para cada artigo
        for (var i = 0; i < articles.length && i < 5; i++) {
            var article = articles[i];
            var articleDiv = document.createElement("div");
            articleDiv.className = "article";

            var titleElement = document.createElement("h2");
            titleElement.textContent = article.title;

            var textElement = document.createElement("p");
            textElement.textContent = article.description;

            // Adicionar o título e o texto ao bloco do artigo
            articleDiv.appendChild(titleElement);
            articleDiv.appendChild(textElement);

            // Adicionar o bloco do artigo à div "news"
            newsDiv.appendChild(articleDiv);
        }
    }
}

// Chamar a função para buscar os artigos quando a página carregar
window.onload = fetchArticles;
             
