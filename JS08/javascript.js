function inicializar() {

    const botao3 = new sap.m.Button({
        text: "Voltar",
        press: function(){
            app.to(page1)    
        }
    })

    const botao1 = new sap.m.Button({
        text: "Botão",
        press: function() {
            mostrarMensagem();
        }
    });
    
    const botao2 = new sap.m.Button({
        text: "Vai para 2",
        press: function() {
            app.to(page2);
        }
    });

    const pagina2 = [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore optio alias harum distinctio veritatis temporibus consequuntur recusandae officiis adipisci sapiente ipsum quam omnis, porro fugiat deserunt illo saepe rem repellat!',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore optio alias harum distinctio veritatis temporibus consequuntur recusandae officiis adipisci sapiente ipsum quam omnis, porro fugiat deserunt illo saepe rem repellat!',
        botao3
    ]

    const botoes = [
        botao1,
        botao2
    ];

    var page1 = new sap.m.Page({
        content: new sap.ui.layout.VerticalLayout({
            content: botoes
        })
    });

    var page2 = new sap.m.Page({
        title: "Second Page",
        content: new sap.ui.layout.VerticalLayout({
            content: [
                new sap.m.Text({
                    text: "Primeiro texto"
                }),
                new sap.m.Text("bold",{
                    text: "Segundo texto"
                    
                }),
                botao3
            ]
        })
    });

    var app = new sap.m.App({
        pages: [page1, page2]
    });

    app.placeAt("Page");
}

function mostrarMensagem() {
    sap.m.MessageToast.show("Botão foi pressionado");
}

var core = sap.ui.getCore();
core.attachInit(inicializar);
