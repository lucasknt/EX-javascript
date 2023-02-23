function inicializar() {

    var app = new sap.m.App("recipiente",{
        pages: new sap.m.Page("pg1", {
            title: "Teste",
            showNavButton: true,
            content: new sap.m.Button( {
                text: "Button",
                enabled: true,
                press: function(){mostrarMensagem()}
            })
            
        })
        
        
    })
    app.placeAt("Page")


}
function mostrarMensagem() {
    sap.m.MessageToast.show("Botão foi pressionado");
}

var core = sap.ui.getCore();
core.attachInit(inicializar);