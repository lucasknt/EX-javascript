function ocultarParagrafos(){
    if($("p").is(":visible")){
        $("p").hide();
        document.getElementById("bt1").innerText = "Exibir parágrafos";
    } else{
        $("p").show();
        document.getElementById("bt1").innerText = "Ocultar paragrafo";
    }
   
    
}