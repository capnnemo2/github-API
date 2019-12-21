'use strict';

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        const searchHandle = $('#js-github-handle').val();
        getRepos(searchHandle);
    });
}




$(`https://api.github.com/users/${user-handle}/repos`)







$(watchForm);