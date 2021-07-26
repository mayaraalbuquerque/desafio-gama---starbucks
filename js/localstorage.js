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

    

    function salvarNome(){

        
        var inputseunome = document.getElementById("seunome");
        var nome = inputseunome.value; 
        
        localStorage.setItem("nomeSalvo", nome);

        //var span = document.getElementById("mensagem");
        //span.innerHTML = "Nome e email salvos!";
        
        var Email = document.getElementById("Email").value;
        var txtEmail = document.getElementById("Email").value;
        
        localStorage.setItem("emailSalvo", txtEmail);
        
        var span = document.getElementById("mensagem");
        //span.innerHTML = "Nome e email salvo!";
        
    }

    function salvarEmail(){
        var Email = document.getElementById("Email");
        var Email = Email.value; 

        localStorage.setItem("emailSalvo", JSON.stringify(Email))
        
        var span = document.getElementById("mensagem");
        span.innerHTML = "Nome e email salvo!";
    
    }