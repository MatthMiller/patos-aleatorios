export default function initAnimacaoTouch() {
    const downloadButton = document.querySelector('.download-button');
    const refreshButton = document.querySelector('.botao-refresh');
    let touchAtivado = matchMedia('(pointer:coarse)').matches;
    
    const handleTouchDownload = (event) => {
        if(touchAtivado) {
            downloadButton.classList.toggle('animacao-mobile');
            setTimeout(() => {
                downloadButton.classList.toggle('animacao-mobile');
            }, 300);
        }
    }
    
    const handleTouchRefresh = (event) => {
        if(touchAtivado) {
            refreshButton.classList.toggle('animacao-mobile');
            setTimeout(() => {
                refreshButton.classList.toggle('animacao-mobile');
            }, 200);
        }
    }
    
    downloadButton.addEventListener('touchstart', handleTouchDownload);
    refreshButton.addEventListener('touchstart', handleTouchRefresh);
}