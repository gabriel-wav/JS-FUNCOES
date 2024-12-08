let medicos = [];

function gravarDados() {
    let nome = document.getElementById("nome").value;
    let especialidade = document.getElementById("especialidade").value;
    let crm = document.getElementById("crm").value;

    if (nome && especialidade && crm) {
        let medico = {
            nome: nome,
            especialidade: especialidade,
            crm: crm
        };

        medicos.push(medico);

      
        atualizarTabela();

       
        limparFormulario();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

function atualizarTabela() {
    let tabela = document.getElementById("tabela");
    let tbody = tabela.querySelector("tbody");

    
    tbody.innerHTML = '';

 
    medicos.forEach(function(medico) {
        let tr = document.createElement("tr");

        Object.values(medico).forEach(function(value) {
            let td = document.createElement("td");
            td.textContent = value;
            tr.appendChild(td);
        });

    
        tbody.appendChild(tr);
    });
}

function limparFormulario() {
    document.getElementById("nome").value = '';
    document.getElementById("especialidade").value = '';
    document.getElementById("crm").value = '';
}
