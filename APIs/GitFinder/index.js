function buscar() {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const info = document.getElementById("info");

    var followers, following, public_repos, avatar, login;
    var url = `https://api.github.com/users/${username}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            avatar = data.avatar_url;
            login = data.login;
            followers = data.followers;
            following = data.following;
            public_repos = data.public_repos;

            info.innerHTML =
              `
              <div> 
            <img src = "${avatar}">
            </div> 
            <p>Nome: ${login}<p>
            <p>Seguidores: ${followers}<p>
            <p>Seguindo: ${following}<p>
            <p>Repositórios: ${public_repos}<p>
            <p><a href="https://github.com/${username}?tab=repositories" target="_blank">Ver Repositórios</a></p>
            `
        });
}