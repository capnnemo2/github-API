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
    $('#results-list').empty();
    let results = "";
    responseJson.forEach(userRepo => {
        results += `<li>
        <h3>${userRepo.name}</h3>
        <h4>${userRepo.html_url}</h4>
        <p>${userRepo.description}</p>
        </li>`;
    });
    $('#results-list').html(results);


    // for (let i = 0; i < responseJson.length; i++) {
    //     $('.results-list').append(`<li><h3>${responseJson[i].name}</h3><h4>${responseJson[i].html_url}</h4><p>${responseJson[i].description}</p></li>`)
    // };


    $('.results').removeClass('hidden');

}







$(watchForm);