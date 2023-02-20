function inicializar() {

    var botao = new sap.m.Button("btn1", {
        text: "Botão"

    })

    botao.placeAt("recipiente")
    botao.attachPress(() => mostrarMensagem())
}
function mostrarMensagem() {
    sap.m.MessageToast.show("Botão foi pressionado");
}
var core = sap.ui.getCore();
core.attachInit(inicializar);