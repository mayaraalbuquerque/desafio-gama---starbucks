class Produto{

    constructor(){
        this.id = 1;
        this.arrayProdutos = [];
        this.editId = null;
    }

    salvar() {
        let produto = this.lerDados();

        if(this.validaCampos(produto)) {
            if(this.editId == null) {
                this.adicionar(produto);
            } else  {
                this.atualizar(this.editId, produto);
            }
              
        }

        this.listaTabela();
        this.cancelar();
    }

    listaTabela()   {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for(let i = 0; i < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow();

            let td_id= tr.insertCell();
            let td_produto= tr.insertCell();
            let td_valor= tr.insertCell();
            let td_acoes= tr.insertCell();


            td_id.innerText = this.arrayProdutos[i].id;
            td_produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_valor.innerText = this.arrayProdutos[i].preco;


            td_id.classList.add('center');
            
            let imgEdit = document.createElement('img');
            imgEdit.src = 'imagens/editar.png';
            imgEdit.setAttribute("onclick", "produto.prepararEditacao("+ JSON.stringify(this.arrayProdutos[i]) +")");


            let imgLixeira = document.createElement('img');
            imgLixeira.src = 'imagens/lixeira.png';
            imgLixeira.setAttribute("onclick", "produto.deletar("+ this.arrayProdutos[i].id +")");

            td_acoes.appendChild(imgEdit);
            // <td><img></td>
            td_acoes.appendChild(imgLixeira);

            console.log(this.arrayProdutos);
        }

    }
    adicionar(produto) {
        produto.preco = parseFloat(produto.preco)
        this.arrayProdutos.push(produto);
        this.id++;
    }

    atualizar(id, produto) {
        for(let i = 0; i < this.arrayProdutos. length; i++) {
            if(this.arrayProdutos[i].id == id) {
                this.arrayProdutos[i].nomeProduto = produto.nomeProduto;
                this.arrayProdutos[i].preco = produto.preco;

            }
        }

    }

    prepararEditacao(dados)  {
        this.editId = dados.id;
        document.getElementById('produto').value = dados.nomeProduto;
        document.getElementById('preco').value = dados.preco;

        document.getElementById('btn1').innerText = 'Atualizar';
    }

    lerDados()  {
            let produto = {}

            produto.id = this.id;
            produto.nomeProduto = document.getElementById('produto').value;
            produto.preco = document.getElementById('preco').value;
        
            return produto;
    }

    validaCampos(produto) {
        let msg = '';

        if(produto.nomeProduto == '') {
            msg += '-Informe o nome do Produto \n'
        }

        if(produto.preco == '') {
            msg += '-Informe o Preço do Produto \n'
        }

        if(msg != '') {
            alert(msg);
            return false
        }

        return true;
    }

    cancelar()  {
        document.getElementById('produto').value = '';
        document.getElementById('preco').value = '';

        document.getElementById('btn1').innerText = 'Salvar';
        this.editId = null;
    }

    deletar(id) {
        if(confirm('Deseja realmente deletar o produto?' + id)) {
            let tbody = document.getElementById('tbody');

            for(let i = 0; i < this.arrayProdutos.length; i++){
                if(this.arrayProdutos[i].id == id) {
                    this.arrayProdutos.splice(i, 1);
                    tbody.deleteRow(i);
                }
            }
            console.log(this.arrayProdutos);
        }    
    }
}

var produto = new Produto();

function salvarNome(){

        
    var inputseunome = document.getElementById("seunome");
    var nome = inputseunome.value;
    
    
    localStorage.setItem("nomeSalvo", nome);

    //var span = document.getElementById("mensagem");
    //span.innerHTML = "Nome e email salvos!";
    
    var E_mail = document.getElementById("E_mail").value;
    var txtEmail = document.getElementById("E_mail").value;
    
    localStorage.setItem("emailSalvo", txtEmail);
    
    var span = document.getElementById("mensagem");
    //span.innerHTML = "Nome e email salvo!";
    
}

function salvarEmail(){
    var E_mail = document.getElementById("E_mail");
    var E_mail = E_mail.value; 

    localStorage.setItem("emailSalvo", JSON.stringify(E_mail))
    
    var span = document.getElementById("mensagem");
    span.innerHTML = "Nome e email salvo!";

}

function salvarSobreNome(){

        
    var inputlastname = document.getElementById("lastname");
    var sobrenome = inputlastname.value; 
    
    localStorage.setItem("nomeSalvo", sobrenome);

    //var span = document.getElementById("mensagem");
    //span.innerHTML = "Nome e email salvos!";
 