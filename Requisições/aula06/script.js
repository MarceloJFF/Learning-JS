document.querySelector('button').addEventListener('click',
 clicou
)

document.querySelector('#inserir').addEventListener('click',inserir)

//get
function clicou(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(
        (response) => {
            return response.json() //transformando para objeto json
        }
    ).then( 
        (data)=>{
            console.log(data)
        }
    ).catch(
        (error)=>{
        console.log(error)
    }).finally(()=>{
        alert("Requisicao encerrada")
    })
    alert("CLicou")// essa parte aparece primeiro devido a assincronicidade do JS
}


//post
function inserir(){
    fetch( ('https://jsonplaceholder.typicode.com/posts'),
    {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(
            {
                title: 'Titulo de teste',
                body: 'Corpo de teste',
                userId:2
            }
        )

    }).then( (response)=>{
        return response.json()
    }).then((json)=>{
        console.log(json)
    })
}