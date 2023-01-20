
document.querySelector('#inserir').addEventListener('click', (e) => {

    const title = document.querySelector("#titleField").value;
    const body = document.querySelector("#bodyField").value;
    const postArea = document.querySelector(".posts")
    if(title && body){    
        postArea.innerHTML = 'Carregando...'
        inserir(title, body,postArea)
    }else{
        alert("Insira todos os dados solicitados")
    }
}
)

async function inserir(titulo, corpo,postArea) {
    try {

        let response = await fetch(
            'https://jsonplaceholder.typicode.com/posts',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        title: titulo,
                        body: corpo,
                        userId: 2
                    }
                )
            }
        )
        
       
        let json = await response.json()    
        preencherPosts(json,postArea)
    } catch (error) {
        alert(error)
    }
}


async function preencherPosts(post,postArea) {

    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts')
        let posts = await response.json()
        
        posts.push(post)        
        createElementsPage(postArea, posts)

    } catch (error) {
        alert(error)
    }
}

function createElementsPage(postArea, posts){

    
    const div = document.createElement('div');

    posts.forEach(element => {
        const h2 = document.createElement('h2');
        const p = document.createElement('p');
        const hr = document.createElement('hr');
        h2.innerHTML = `Titulo: ${element.title}`;
        p.innerHTML = `corpo: ${element.body}`;
        div.appendChild(h2)
        div.appendChild(p)
        div.appendChild(hr)
    });
    postArea.appendChild(div);

}

