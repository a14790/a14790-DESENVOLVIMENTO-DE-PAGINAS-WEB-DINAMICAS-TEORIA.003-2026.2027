        const evento = {
            nome: "Web Summit 2026",
            cidade: "Lisboa, Portugal",
            mensagem: "Bem-vindo ao futuro da tecnologia!",
            nomeAutor: "Tao Zhang",
            cargo: "Co-founder & CP",
            tema: "Web summit"
        };

        const botao = document.querySelector("#atualizar");

        botao.addEventListener("click", () => {

            document.querySelector("#titulo").textContent = evento.nome;

            document.querySelector("#local").textContent = evento.cidade;

            document.querySelector("#mensagem").textContent = evento.mensagem;

            document.querySelector("#nomeAutor").textContent = evento.nomeAutor;

            document.querySelector("#cargo").textContent = evento.cargo;

            document.querySelector("#tema").textContent = evento.tema;

        });