// ==========================================================
// PORTAL PROFISSIONAL DE ENFERMAGEM
// Arquivo: script.js
// ==========================================================


// ===========================
// MENU MOBILE
// ===========================

const menuMobile = document.getElementById("menuMobile");
const menu = document.getElementById("menu");

if (menuMobile && menu) {

    // Abrir e fechar menu pelos três riscos
    menuMobile.addEventListener("click", function () {

        menu.classList.toggle("ativo");

    });


    // Fechar o menu ao clicar em qualquer link
    const linksMenu = menu.querySelectorAll("a");

    linksMenu.forEach(function (link) {

        link.addEventListener("click", function () {

            menu.classList.remove("ativo");

        });

    });

}


// ===========================
// BOTÃO VOLTAR AO TOPO
// ===========================

const botaoTopo = document.getElementById("topo");

if (botaoTopo) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {

            botaoTopo.style.display = "block";

        } else {

            botaoTopo.style.display = "none";

        }

    });


    botaoTopo.addEventListener("click", function () {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}


// ===========================
// PESQUISA DO PORTAL
// ===========================

const campoPesquisa = document.getElementById("pesquisa");

if (campoPesquisa) {

    campoPesquisa.addEventListener("keypress", function (event) {

        if (event.key === "Enter") {

            const termo = campoPesquisa.value.trim().toLowerCase();

            if (termo === "") {
                return;
            }

            const pagina = document.body.innerText.toLowerCase();

            if (pagina.includes(termo)) {

                alert("Conteúdo encontrado no portal.");

            } else {

                alert("Nenhum conteúdo encontrado para: " + termo);

            }

        }

    });

}


// ===========================
// PESQUISA DE MEDICAMENTOS
// ===========================

const buscaMedicamento = document.getElementById("buscaMedicamento");

if (buscaMedicamento) {

    buscaMedicamento.addEventListener("input", function () {

        const termo = buscaMedicamento.value.toLowerCase();

        const linhas = document.querySelectorAll("table tbody tr");

        linhas.forEach(function (linha) {

            const texto = linha.innerText.toLowerCase();

            if (texto.includes(termo)) {

                linha.style.display = "";

            } else {

                linha.style.display = "none";

            }

        });

    });

}


// ===========================
// CALENDÁRIO DE VACINAÇÃO
// ===========================

const dataNascimento = document.getElementById("dataNascimento");

const resultadoVacinas = document.getElementById("resultadoVacinas");

if (dataNascimento && resultadoVacinas) {

    const botoes = document.querySelectorAll(".vacina-box .btn");

    botoes.forEach(function (botao) {

        botao.addEventListener("click", function () {

            if (dataNascimento.value === "") {

                resultadoVacinas.innerHTML =
                    "<p>Informe a data de nascimento para verificar o calendário vacinal.</p>";

                return;

            }

            resultadoVacinas.innerHTML =
                "<p>Consulta realizada. Verifique as vacinas recomendadas conforme a idade e o grupo selecionado.</p>";

        });

    });

}


// ===========================
// ANIMAÇÃO DOS ELEMENTOS
// ===========================

const elementosAnimados = document.querySelectorAll(
    ".card, .card-calculo, .protocolo, .urgencia-card, .escala, .procedimento, .download-item"
);

elementosAnimados.forEach(function (elemento) {

    elemento.classList.add("fade");

});
