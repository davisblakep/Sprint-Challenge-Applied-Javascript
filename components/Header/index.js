// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    let headerContainer = document.querySelector('.header-container');

    let header = document.createElement('div');
    header.classList.add('header');

    let date = document.createElement('span');
    date.classList.add('date');
    date.textContent = 'SMARCH 28, 2019';
    
    let title = document.createElement('h1');
    title.textContent = 'Lambda Times';

    let temp = document.createElement('span');
    temp.classList.add('temp');
    temp.textContent = '98°';


    headerContainer.appendChild(header);
    header.appendChild(date);
    header.appendChild(title);
    header.appendChild(temp);


    return headerContainer;
}

Header();
