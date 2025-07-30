//Função de validação se é par ou ímpar
function parOuImpar(valor) {
    if (!Number.isInteger(valor)) return "não é inteiro";
    return valor % 2 === 0 ? "Par" : "Ímpar";
}

function procFormulario() {
    //validação de campos

    if (document.frmnumint.txtnum1.value == "") {
        alert("Preencha o campo do primeiro número");
        document.frmnumint.txtnum1.focus();
        return false;
    } else if (document.frmnumint.txtnum2.value == "") {
            alert("Preencha o campo do segundo número");
            document.frmnumint.txtnum2.focus();
            return false;

    } else if (document.frmnumint.seloperacao.value === "") {
           alert("Preencha o campo de seleção de operação");
            document.frmnumint.seloperacao.focus();
            return false;

    } else {
            // Pega os valores dos inputs
            let num1 = parseFloat(document.frmnumint.txtnum1.value);
            let num2 = parseFloat(document.frmnumint.txtnum2.value);

           // Verificação se o valor é realmente um número
            if (isNaN(num1) || isNaN(num2)) {
                alert("Digite apenas números válidos.");
                return false;
            }
        let seloperacao = document.frmnumint.seloperacao.value;
        let resultado;

        switch (seloperacao) {

            case "SO":
                resultado = num1 + num2;
                console.log("Operação: Soma\nCálculo: " + num1 + " + " + num2 + " = " + resultado
                    + "\nEsse número é " + parOuImpar(resultado));
                return false;
                break;

            case "SU":
                resultado = num1 - num2;
                console.log("Operação: Subtração\nCálculo: " + num1 + " - " + num2 + " = " + resultado
                    + "\nEsse número é " + parOuImpar(resultado));
                return false;
                break;

            case "MU":
                resultado = num1 * num2;
                console.log("Operação: Multiplicação\nCálculo: " + num1 + " * " + num2 + " = "
                    + resultado + "\nEsse número é " + parOuImpar(resultado));
                return false;
                break;

            case "DI":
                if (num2 === 0) {
                    alert("Erro: divisão por zero não é permitida.");
                    return false;
                }
                resultado = num1 / num2;
                console.log("Operação: Divisão\nCálculo: " + num1 + " / " + num2 + " = " + resultado
                    + "\nEsse número é " + parOuImpar(resultado));
                return false;
                break;

            default:
                console.log("Operação inválida.");
                return false;
        }
    }

}