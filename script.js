var paginationElement = document.getElementById('pagination');

var currentPage = 1;
var totalPages = 5

function createPaginationButtons() {
     paginationElement.innerHTML = '';

     var firstButton = createButton('first', 'First');
     firstButton.addEventListener('click', goToFirstPage);
     paginationElement.appendChild(firstButton);

     var previousButton = createButton('previous', 'Previous');
     previousButton.addEventListener('click', goToPreviousPage);
     paginationElement.appendChild(previousButton);

     for (var i = 1; i <= totalPages; i++) {
          var button = createButton(i === currentPage ? 'active' : '', i);
          button.addEventListener('click', function () {
               var page = parseInt(this.innerText);
               goToPage(page);
          });
          paginationElement.appendChild(button);
     }

     var nextButton = createButton('next', 'Next');
     nextButton.addEventListener('click', goToNextPage);
     paginationElement.appendChild(nextButton);

     var lastButton = createButton('last', 'Last');
     lastButton.addEventListener('click', goToLastPage);
     paginationElement.appendChild(lastButton);
}

function createButton(className, text) {
     var button = document.createElement('button');
     button.className = className;
     button.innerText = text;
     return button;
}

function goToPage(page) {
     currentPage = page;
     updateActiveButton();
     updatePaginationState();
}

function goToFirstPage() {
     if (currentPage !== 1) {
          currentPage = 1;
          updateActiveButton();
          updatePaginationState();
     }
}

function goToPreviousPage() {
     if (currentPage > 1) {
          currentPage--;
          updateActiveButton();
          updatePaginationState();
     }
}

function goToNextPage() {
     if (currentPage < totalPages) {
          currentPage++;
          updateActiveButton();
          updatePaginationState();
     }
}

function goToLastPage() {
     if (currentPage !== totalPages) {
          currentPage = totalPages;
          updateActiveButton();
          updatePaginationState();
     }
}

function updateActiveButton() {
     var buttons = paginationElement.getElementsByTagName('button');
     for (var i = 0; i < buttons.length; i++) {
          var button = buttons[i];
          if (parseInt(button.innerText) === currentPage) {
               button.classList.add('active');
          } else {
               button.classList.remove('active');
          }
     }
}

function updatePaginationState() {
     var firstButton = document.querySelector('.first');
     var previousButton = document.querySelector('.previous');
     var nextButton = document.querySelector('.next');
     var lastButton = document.querySelector('.last');

     firstButton.disabled = currentPage === 1;
     previousButton.disabled = currentPage === 1;
     nextButton.disabled = currentPage === totalPages;
     lastButton.disabled = currentPage === totalPages;
}

createPaginationButtons();
updateActiveButton();
updatePaginationState();
