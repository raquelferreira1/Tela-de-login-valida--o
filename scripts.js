function logar(){
let login = document.getElementById('login').value;
let senha = document.getElementById('senha').value;

if(login == 'admin' && senha == 'admin'){
    location.href = "https://raquelferreira1.github.io/Projeto-Adote-um-Pet/";
}
else {
    alert('Usuário ou senha incorretos');
}
}