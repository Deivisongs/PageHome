/* ------ Ajustando Tamanho de tela --------*/
function ajusteTamanhoTela(){
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
ajusteTamanhoTela()
window.addEventListener('resize', ajusteTamanhoTela);



/* ---------- Abir e Fechar Modal Notificações ------------*/

function abrirNotificacoes(){
    const modal = document.getElementById('modalNotificacoes')
    const header = document.getElementById('headerHome')
    const notificacoes = document.getElementById('notificacoes')
    const body = document.getElementById('body')


    if(notificacoes.style.display != 'block'){
        notificacoes.style.display = 'block'
        body.style.overflow = 'hidden'
        modal.style.width = '100vw'
        header.style.marginTop = '0'
    }else{
        notificacoes.style.display = 'none'
        body.style.overflow = 'auto'
        modal.style.width = 'fit-content'
        header.style.marginTop = '20px'
    }



}


/* ------ Abrir e Fechar Modal Relatorio -------- */
function abrirRelatorio(){
    const modal = document.getElementById('modalRelatorio')
    const body = document.getElementById('body')

    if(modal.style.display != 'flex'){
        modal.style.display = 'flex';
        body.style.overflow = 'hidden';
    }else{
        modal.style.display = 'none';
        body.style.overflow = 'auto';
    }
    
}