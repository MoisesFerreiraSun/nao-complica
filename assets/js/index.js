function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) {
        console.error(`Modal com ID "${modalId}" não encontrado`);
        return;
    }

    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';

    if (modal.style.display === 'block') {
        loadFileContent(modalId);
    }
}

// Mapeamento dos arquivos e IDs de conteúdo
const modalContentMap = {
    'jsModal1': { file: 'exemplos/condicional/exm1.js', contentId: 'jsCode1' },
    'cssModal1': { file: 'exemplos/condicional/exm1.css', contentId: 'cssCode1' },
    'jsModal2': { file: 'exemplos/condicional/exm2.js', contentId: 'jsCode2' },
    'cssModal2': { file: 'exemplos/condicional/exm2.css', contentId: 'cssCode2' },
    'jsModal3': { file: 'exemplos/condicional/exm3.js', contentId: 'jsCode3' },
    'cssModal3': { file: 'exemplos/condicional/exm3.css', contentId: 'cssCode3' },
    'jsModalREP1': { file: 'exemplos/repeticao/exm1.js', contentId: 'jsCodeREP1' },
    'cssModalREP1': { file: 'exemplos/repeticao/exm1.css', contentId: 'cssCodeREP1' },
    'jsModalREP2': { file: 'exemplos/repeticao/exm2.js', contentId: 'jsCodeREP2' },
    'cssModalREP2': { file: 'exemplos/repeticao/exm2.css', contentId: 'cssCodeREP2' },
    'jsModalREP3': { file: 'exemplos/repeticao/exm3.js', contentId: 'jsCodeREP3' },
    'cssModalREP3': { file: 'exemplos/repeticao/exm3.css', contentId: 'cssCodeREP3' },
    'jsModalVET1': { file: 'exemplos/vetores/exm1.js', contentId: 'jsCodeVET1' },
    'cssModalVET1': { file: 'exemplos/vetores/exm1.css', contentId: 'cssCodeVET1' },
    'jsModalVET2': { file: 'exemplos/vetores/exm2.js', contentId: 'jsCodeVET2' },
    'cssModalVET2': { file: 'exemplos/vetores/exm2.css', contentId: 'cssCodeVET2' },
    'jsModalVET3': { file: 'exemplos/vetores/exm3.js', contentId: 'jsCodeVET3' },
    'cssModalVET3': { file: 'exemplos/vetores/exm3.css', contentId: 'cssCodeVET3' },
};

function loadFileContent(modalId) {
    const contentInfo = modalContentMap[modalId];

    if (!contentInfo) {
        console.error(`ModalId "${modalId}" não reconhecido`);
        return;
    }

    const { file, contentId } = contentInfo;
    const contentElement = document.getElementById(contentId);
    if (!contentElement) {
        return;
    }

    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(text => {
            contentElement.textContent = text;
        })
        .catch(error => console.error('Erro ao carregar o arquivo:', error));
}

function injectCode(fonteId, cssModalId, jsModalId) {
    const fonteContent = document.getElementById(fonteId).value;

    const iframe = document.createElement('iframe');
    iframe.style = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%;';

    const styledContent = `
        <style>
            body {
                background-color: white;
                color: black;
                font-family: Arial, sans-serif;
                padding: 20px;
            }
        </style>
        ${fonteContent}
    `;
    iframe.srcdoc = styledContent;

    const modal = document.getElementById(cssModalId);
    if (!modal) {
        console.error(`Modal com ID "${cssModalId}" não encontrado`);
        return;
    }

    modal.innerHTML = '';

    const backButton = document.createElement('button');
    backButton.textContent = 'VOLTE AGORA';
    backButton.className = 'back-button';
    backButton.onclick = () => toggleModal(cssModalId);

    modal.appendChild(backButton);
    modal.appendChild(iframe);

    loadFileContent(cssModalId);
    loadFileContent(jsModalId);

    toggleModal(cssModalId);
}

function validaFormulario() {
    const { nome, email, telefone, motivo, mensagem } = document.frmfaleconosco;

    const REGEXemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const REGEXfone = /^\(?\d{2}\)?[-.\s]?\d{4,5}[-.\s]?\d{4}$/;

    const validations = [
        { condition: !nome.value, message: "Campo de nome deve ser preenchido!", focus: nome },
        { condition: !REGEXemail.test(email.value), message: "E-mail inválido. Por favor, insira um e-mail válido.", focus: email },
        { condition: !REGEXfone.test(telefone.value), message: "Telefone inválido. Por favor, insira um telefone válido.", focus: telefone },
        { condition: motivo.value === "Escolha", message: "Por favor, selecione um motivo de contato!" },
        { condition: !mensagem.value, message: "Você não colocou seu comentário, escreva e tente novamente!", focus: mensagem },
    ];

    for (const { condition, message, focus } of validations) {
        if (condition) {
            alert(message);
            focus?.focus();
            return false;
        }
    }

    alert("Seu formulário foi enviado, aguarde a nossa resposta em algum de nossos meios de contatos!");
    return true;
}

function validaTelefone(input) {
    const numeros = input.value.replace(/\D/g, '');

    input.value = numeros.length === 11
        ? `(${numeros.substring(0, 2)})${numeros.substring(2, 7)}-${numeros.substring(7)}`
        : numeros.length === 10
            ? `(${numeros.substring(0, 2)})${numeros.substring(2, 6)}-${numeros.substring(6)}`
            : numeros;
}
