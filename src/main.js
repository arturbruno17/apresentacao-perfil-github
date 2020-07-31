import axios from 'axios'

const valueInput = document.querySelector('input')
var repositories = []
const ulElement = document.getElementById('repo-list')
const buttonElement = document.getElementById('button-submit');
const imageUser = document.getElementById('img-user');
const bioUser = document.getElementById('bio');
const followersUser = document.getElementById('followers')

// Função para zerar os valores após ser feita a requisição novamente
function reset() {
    repositories = []
    ulElement.innerHTML = ''
    imageUser.style.display = 'none'
    bioUser.innerHTML = ''
    followersUser.innerHTML = ''
}

buttonElement.onclick = async () => {
    // Zerando os repositórios obtidos na pesquisa passada
    reset()

    // Fazendo a requisição na API do GitHub
    try {
        let dataUser = await axios.get(`https://api.github.com/users/${valueInput.value}`)
        let repositoryUser = await axios.get(`https://api.github.com/users/${valueInput.value}/repos`)

        const { avatar_url, bio, followers } = dataUser.data

        // Mostrando dados do usuário na tela
        imageUser.setAttribute('src', avatar_url)
        imageUser.style.display = 'block'

        bioUser.innerHTML = bio

        followersUser.innerHTML = `Seguidores: ${followers}`

        // Mostrar um modal caso o usuário não tenha repositório
        if (repositoryUser.data.length == 0) {
            $("#withoutRepository").modal('show')
        }

        repositoryUser.data.forEach(value => {
            repositories.push({
                title: value.name,
                description: value.description,
                html_url: value.html_url
            })
        })

        repositories.forEach(value => {
            var liElement = document.createElement('li');

            var cardDiv = document.createElement('div');
            cardDiv.className = 'card'

            var cardBodyDiv = document.createElement('div');
            cardBodyDiv.className = 'card-body'

            var h5Element = document.createElement('h5');
            h5Element.classList = 'card-title'
            h5Element.innerHTML = value.title

            var paragraph = document.createElement('p');
            paragraph.className = 'card-text'
            paragraph.innerHTML = value.description

            var link = document.createElement('a');
            link.setAttribute('href', value.html_url)
            link.setAttribute('target', '_blank')
            link.className = 'btn btn-dark'
            link.innerHTML = 'Acessar'

            cardBodyDiv.appendChild(h5Element)
            cardBodyDiv.appendChild(paragraph)
            cardBodyDiv.append(link)

            cardDiv.appendChild(cardBodyDiv)

            liElement.appendChild(cardDiv)
            ulElement.appendChild(liElement)

        })
    } catch (error) {
        // Mostrar modal caso o não exista
        $("#notFoundUser").modal('show')
    }

}