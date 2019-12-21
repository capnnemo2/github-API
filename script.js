'use strict';

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        const searchHandle = $('#js-github-handle').val();
        getRepos(searchHandle);
    });
}

function getRepos(handle) {
    const url = `https://api.github.com/users/${handle}/repos`;
    console.log(url);
    fetch(url)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(response.statusText);
    })
    .then(responseJson => displayResults(responseJson))
    .catch(err => {
        $('#js-err-msg').text(`The man behind the curtain says: ${err.message}`);
    });
}

function displayResults(responseJson) {
    console.log(responseJson);
    $('.results-list').empty();
    for (let i = 0; i < responseJson.articles.length; i++) {
        $('.results-list').append(`<li><h3>${responseJson.articles[i].title}</h3><h4>${responseJson.articles[i].url}</h4></li>`)
    };
    $('#results').removeClass('hidden');

}







$(watchForm);