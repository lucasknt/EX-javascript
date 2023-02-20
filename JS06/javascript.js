function inicializar() {

    var botao = new sap.m.Button( {
        text: "Botão",
        press: function(){mostrarMensagem()}

    })

    botao.placeAt("recipiente")
}
function mostrarMensagem() {
    sap.m.MessageToast.show("Botão foi pressionado");
}
var core = sap.ui.getCore();
core.attachInit(inicializar);