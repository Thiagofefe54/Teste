// Funcionalidade para o menu hamburger (mobile)
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// Funcionalidade para o FAQ (acordeão)
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
        const currentlyActive = document.querySelector(".faq-item.active");
        if (currentlyActive && currentlyActive !== item) {
            currentlyActive.classList.remove("active");
        }
        item.classList.toggle("active");
    });
});


// Funcionalidade para a página de pagamento
// Pega o plano da URL e preenche as informações
document.addEventListener('DOMContentLoaded', () => {
    // Verifica se estamos na página de pagamento
    if (document.body.contains(document.getElementById('plano-nome'))) {
        const urlParams = new URLSearchParams(window.location.search);
        const plano = urlParams.get('plano');

        const planoNomes = {
            '1': 'Plano 1',
            '2': 'Plano 2',
            '3': 'Plano 3'
        };

        const planoValores = {
            '1': 'R$ 89,99',
            '2': 'R$ 119,99',
            '3': 'R$ 179,99'
        };

        if (plano && planoNomes[plano]) {
            document.getElementById('plano-nome').textContent = planoNomes[plano];
            document.getElementById('plano-valor').textContent = planoValores[plano];
        } else {
            document.getElementById('plano-nome').textContent = "Nenhum plano selecionado";
            document.getElementById('plano-valor').textContent = "R$ 0,00";
        }
    }
});