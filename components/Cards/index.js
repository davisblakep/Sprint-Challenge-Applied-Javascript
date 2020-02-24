// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


let newArticleCard = function(items){

    let card = document.createElement('div');
    card.classList.add('card');
    
    let headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = items.headline;

    let author = document.createElement('div');
    author.classList.add('author');

    let imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    let articleImage = document.createElement('img');
    articleImage.setAttribute('src', items.authorPhoto);

    let authorName = document.createElement('span');
    authorName.textContent = `By ${items.authorName}`;


    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(articleImage);
    author.appendChild(authorName);

    return card;
};



let cardsContainer = document.querySelector('.cards-container');

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(response => {
    console.log(response.data);

    response.data.articles.javascript.forEach(x => {
        let newArticle = newArticleCard(x);
        cardsContainer.appendChild(newArticle);
    }
    )
    response.data.articles.bootstrap.forEach(x => {
        let newArticle = newArticleCard(x);
        cardsContainer.appendChild(newArticle);
    }
    )
    response.data.articles.jquery.forEach(x => {
        let newArticle = newArticleCard(x);
        cardsContainer.appendChild(newArticle);
    }
    )
    response.data.articles.node.forEach(x => {
        let newArticle = newArticleCard(x);
        cardsContainer.appendChild(newArticle);
    }
    )
    response.data.articles.technology.forEach(x => {
        let newArticle = newArticleCard(x);
        cardsContainer.appendChild(newArticle);
    }
    )
})
.catch(err => {
    console.log(err)
});