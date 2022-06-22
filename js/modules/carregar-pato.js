export default function initCarregarPato() {
    const imagemContainer = document.querySelector('.pato-container');
    const imagemPato = document.querySelector('.duck-image');
    const patoDecorator = document.querySelector('.duck-decorator');
    const botaoRefresh = document.querySelector('.botao-refresh');
    const spinner = document.querySelector('.spinner');
    const downloadButton = document.querySelector('.download-button');
    let urlDownload;

    async function primeiroLoad() {
        spinner.classList.toggle('ativo');
        const fetchRequest = await fetch('https://pato-api-proxy.herokuapp.com/api/random');
        const patoJson = await fetchRequest.json();

        urlDownload = patoJson.url;
        imagemPato.src = patoJson.url;
        imagemPato.style.visibility = "hidden";
        imagemPato.style.maxWidth = (innerWidth - 54) + 'px';
        patoDecorator.style.zIndex = "1000";

        setTimeout(() => {
            spinner.classList.toggle('ativo');
        }, 1500);
        imagemPato.addEventListener("load", primeiroLoadEventRemover);
    }
    primeiroLoad();

    const primeiroLoadEventRemover = () => {
        //console.log(imagemPato.complete && (imagemPato.naturalHeight !== 0));
        imagemContainer.classList.add('ativo');
        botaoRefresh.addEventListener('click', primeiroClique);
        imagemPato.removeEventListener('load', primeiroLoadEventRemover);
    }

    const primeiroClique = () => {
        spinner.classList.toggle('ativo');
        setTimeout(() => {
            spinner.classList.toggle('ativo');
        }, 1000);
        imagemPato.style.visibility = "visible";
        patoDecorator.style.zIndex = "-100";
        downloadButton.classList.toggle('ativo');
        setDownloadUrl();

        botaoRefresh.removeEventListener('click', primeiroClique);
        botaoRefresh.addEventListener('click', carregarPato);
    }

    async function carregarPato() {
        spinner.classList.toggle('ativo');
        const fetchRequest = await fetch('https://pato-api-proxy.herokuapp.com/api/random');
        const patoJson = await fetchRequest.json();
        imagemPato.src = patoJson.url
        urlDownload = patoJson.url;
        setDownloadUrl();
        setTimeout(() => {
            spinner.classList.toggle('ativo');
        }, 1000);
    }

    const setDownloadUrl = () => {
        downloadButton.href = urlDownload;
    }
}