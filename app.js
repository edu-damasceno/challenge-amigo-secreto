//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value;
    let lista = document.getElementById('listaAmigos');

    if(amigo === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    amigos.push(amigo);
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        const item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
    document.getElementById('amigo').value = '';
    document.getElementById('amigo').focus();
}

function sortearAmigo() {
    if(amigos.length < 4) {
        return;
    }
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById('resultado').innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
}