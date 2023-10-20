function buscaPerfil() {
    event.preventDefault();
    const nameUser = document.getElementById('usernameInput').value;
    var followers, following, public_repos, avatar, login, linkRepos;
    info = document.getElementById("info");
    var url = `https://api.github.com/users/${nameUser}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            avatar = data.avatar_url;
            login = data.login;
            followers = data.followers;
            following = data.following;
            public_repos = data.public_repos;
            linkRepos = data.repos_url;
            info.innerHTML =
                `
            <img src = "${avatar}">
            <p>Nome: ${login}<p>
            <p>Seguidores: ${followers}<p>
            <p>Seguindo: ${following}<p>
            <p>Repositórios: ${public_repos}<p>
            <p><a href="https://github.com/${nameUser}?tab=repositories" target="_blank">Ver Repositórios</a></p>
            `
        })
}
