'use strict';

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        const searchHandle = $('#js-github-handle').val();
        getRepos(searchHandle);
    });
}

function getRepos(handle) {
    fetch(`https://api.github.com/users/${handle}/repos`)
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




$(`https://api.github.com/users/${handle}/repos`)







$(watchForm);