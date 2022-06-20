export default function initModal() {
    const botaoFechar = document.querySelector('.fechar-icon');
    const botaoInfo = document.querySelector('.info-icon');
    const modalContainer = document.querySelector('.modal-container');
    
    const abrirModal = (event) => {
        modalContainer.classList.add('ativo');
    }
    
    const fecharModal = (event) => {
        let dentroModal = event.target.hasAttribute('data-js')
        if(!dentroModal) {
            modalContainer.classList.remove('ativo');
        }
    }
    
    modalContainer.addEventListener('click', fecharModal);
    botaoInfo.addEventListener('click', abrirModal);    
}

