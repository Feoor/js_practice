// 1 Задание
const usersCards = document.querySelectorAll('.user-card');
let currentPage = 1;
let currentUser = 0;
let totalPages = 1;

function refreshUserCard(userCard, data) {
    let userName = userCard.querySelector('.card-name');
    let userEmail = userCard.querySelector('.card-email');
    let userAvatar = userCard.querySelector('.card-img-top');

    userName.innerHTML = `${data[currentUser].first_name} ${data[currentUser].last_name}`;
    userEmail.innerHTML =`${data[currentUser].email}`;
    userAvatar.src = data[currentUser].avatar;
}

function loadUsers(page) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://reqres.in/api/users?page=${page}`, true);
    xhr.setRequestHeader('x-api-key', 'reqres-free-v1');
    xhr.onload = function(){
        let xhrJson = JSON.parse(xhr.responseText);
        totalPages = xhrJson.total_pages;

        for (let i = 0; i < usersCards.length; i++, ++currentUser) {
            let userCard = usersCards[i];
            refreshUserCard(userCard, xhrJson.data);
        }
    };
    xhr.send();

    return xhr;
}

let xhr = loadUsers(1);

const nextButton = document.querySelector('#nextButton');
const prevButton = document.querySelector('#prevButton');

nextButton.addEventListener('click', function() {
    if (currentUser < 5) {
        for (let i = 0; i < usersCards.length; i++, ++currentUser) {
            let userCard = usersCards[i];
            refreshUserCard(userCard, JSON.parse(xhr.responseText).data);
        }
    } else if (currentUser >= 5 && currentPage < totalPages) {
        currentPage += 1;
        currentUser = 0;

        loadUsers(currentPage);
    }

    console.log(currentUser);
})

prevButton.addEventListener('click', function() {
    if (currentUser > 1) {
        for (let i = usersCards.length - 1; i >= 0; i--, --currentUser) {
            console.log(currentUser);
            let userCard = usersCards[i];
            refreshUserCard(userCard, JSON.parse(xhr.responseText).data);
        }

    } else if (currentUser === 0 && currentPage > 1) {
        currentPage -= 1;
        currentUser = 3;

        loadUsers(currentPage);
    }

})