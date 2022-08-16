const body = document.getElementById('body')
const novaTarefa = document.getElementsByName('nova-tarefa');
const campoTarefas = document.getElementById('campo-tarefas');
const numeroTarefas = document.getElementById('tarefas-length');
const tarefasAll = document.getElementById('all');
const tarefasAtivadas = document.getElementById('active');
const tarefasCompletas = document.getElementById('completed');
const butaoTema = document.getElementById('butaoTheme');
const imagemFundo = document.getElementById('imagem-header');
const containerFiltros = document.getElementById('container-filtros');
const idNovaTarefa = document.getElementById('novaTarefa');
let clickFinalizar = false;
let clickTema = false;

function mudarTema(){
    clickTema = !clickTema;
    if(clickTema == true){
        butaoTema.classList.remove('butaoThemeDark');
        butaoTema.classList.add('butaoThemeWhite');

        imagemFundo.classList.remove('img-header');
        imagemFundo.classList.add('img-header-white');

        containerFiltros.classList.remove('container-filtros');
        containerFiltros.classList.add('container-filtros-white');

        idNovaTarefa.classList.remove('input-tarefa-dark');
        idNovaTarefa.classList.add('input-tarefa-white');

        campoTarefas.classList.remove('container');
        campoTarefas.classList.add('container-white')

        body.classList.remove('body');
        body.classList.add('body-white');
        
    } else if (clickTema == false){
        butaoTema.classList.remove('butaoThemeWhite');
        butaoTema.classList.add('butaoThemeDark');

        imagemFundo.classList.add('img-header');
        imagemFundo.classList.remove('img-header-white');

        containerFiltros.classList.add('container-filtros');
        containerFiltros.classList.remove('container-filtros-white');

        idNovaTarefa.classList.remove('input-tarefa-white');
        idNovaTarefa.classList.add('input-tarefa-dark');

        campoTarefas.classList.remove('container-white');
        campoTarefas.classList.add('container');

        body.classList.remove('body-white');
        body.classList.add('body');

    }
}





document.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        const btn = document.getElementById("send");
        btn.click()
    }
})


function adicionarTarefa(){
    const tarefaDigitada = novaTarefa[0].value;

    const divTarefas = document.createElement('div');
    const finalizar = document.createElement('button');
    const tarefa = document.createElement('p');
    const excluir = document.createElement('button');


    excluir.classList.add('butao-tarefa-excluir');
    divTarefas.classList.add('container-tarefas');
    finalizar.classList.add('butao-tarefa-finalizada');

    excluir.addEventListener('click', function() {
        campoTarefas.removeChild(divTarefas);
        numeroTarefas.innerText--;
     });

     finalizar.addEventListener('click', function(){
        clickFinalizar = !clickFinalizar;
        if(clickFinalizar == true) {
            tarefa.style.textDecoration = 'line-through';
            finalizar.classList.add('butao-tarefa');
        } else if(clickFinalizar == false){
            tarefa.style.textDecoration = 'none';
            finalizar.classList.remove('butao-tarefa');
        }
     })



    tarefa.innerText = tarefaDigitada;
    campoTarefas.appendChild(divTarefas);
    divTarefas.appendChild(finalizar);
    divTarefas.appendChild(tarefa);
    divTarefas.appendChild(excluir);
    numeroTarefas.innerText++;
    novaTarefa[0].value = ''
}



function completas(){
    tarefasAll.classList.remove('ativado');
    tarefasAtivadas.classList.remove('ativado');
    tarefasCompletas.classList.add('ativado');

 }


 function ativas(){
    tarefasAll.classList.remove('ativado');
    tarefasCompletas.classList.remove('ativado');
    tarefasAtivadas.classList.add('ativado')
 }
 

 function todas(){
    tarefasCompletas.classList.remove('ativado');
    tarefasAtivadas.classList.remove('ativado');
    tarefasAll.classList.add('ativado')
 }
