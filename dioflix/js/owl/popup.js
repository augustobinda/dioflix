function abrirPopop(pagina, largura, altura) {
    var esq = (screen.width - largura)/2;
    var topo = (screen.height - altura)/2;
minhaPopup = window.open(pagina,'','height=' + altura + ', width=' + largura + ', top=' + topo + ', left=' + esq);
}