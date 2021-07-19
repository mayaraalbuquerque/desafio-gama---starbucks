function imgSlider(anything){
    document.querySelector('.Starbucks').src = anything;
}

function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}

    var seunome = document.getElementById('seunome');
    var Email = document.getElementById('Email');

    Email.addEventListener('focus',()=>{
        Email.style.borderColor = "#017143";
    });
    Email.addEventListener('blur',()=>{
        Email.style.borderColor = "#DCDCDC";
    });
    
    seunome.addEventListener('focus',()=>{
        seunome.style.borderColor = "#017143";
    });
    seunome.addEventListener('blur',()=>{
        seunome.style.borderColor = "#DCDCDC";
    });

    window.onload = function(){
        var enviar = document.getElementById("enviar");
        var seunome = document.getElementById("seunome");
        var Email  = document.getElementById("Email");

            enviar.onclick = salvarNome, salvarEmail;
            

}

    function salvarNome(){
        var inputseunome = document.getElementById("nome");
        var nome = inputseunome.value; 

        localStorage.setItem("nomeSalvo", JSON.stringify(nome))

        var span = document.getElementById("mensagem");
        span.innerHTML = "Nome e email salvos!";
    }

    function salvarEmail(){
        var Email = document.getElementById("Email");
        var Email = Email.value; 

        localStorage.setItem("emailSalvo", JSON.stringify(Email))
        
        var span = document.getElementById("mensagem");
        span.innerHTML = "Nome e email salvo!";
    
    }