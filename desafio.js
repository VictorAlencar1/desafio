function desafio(){
    const mensagemSecreta = [
      "aprender ",
      "não ",
      "é ",
      "o ",
      "sobre ",
      "que ",
      "você ",
      "consegue ",
      "facilmente ",
      "na ",
      "primeira ",
      "vez, ",
      "mas ",
      "sobre ",
      "o ",
      "que ",
      "você ",
      "pode ",
      "descobrir. ",
      "- 2015 ",
      "Chris ",
      "Pine ",
      "Aprenda ",
      "JavaScript ",
    ]
    mensagemSecreta.pop();
    console.log(mensagemSecreta);
    mensagemSecreta.push("a ", "programar ");
    console.log(mensagemSecreta);
    mensagemSecreta[8] = "certo ";
    console.log(mensagemSecreta);
    mensagemSecreta.shift();
    console.log(mensagemSecreta);
    mensagemSecreta.unshift("Programação "); 
    console.log(mensagemSecreta);
    var buscar1 = "consegue ";
    var indice = mensagemSecreta.indexOf(buscar1);
    while(indice >= 0){
    mensagemSecreta.splice(indice, 1);
    indice = mensagemSecreta.indexOf(buscar1);
  }
    var buscar2 = "certo ";
    var indice = mensagemSecreta.indexOf(buscar2);
    while(indice >= 0){
    mensagemSecreta.splice(indice, 1);
    indice = mensagemSecreta.indexOf(buscar2);
  }
    var buscar3 = "na ";
    var indice = mensagemSecreta.indexOf(buscar3);
    while(indice >= 0){
    mensagemSecreta.splice(indice, 1);
    indice = mensagemSecreta.indexOf(buscar3);
  }
    var buscar4 = "primeira ";
    var indice = mensagemSecreta.indexOf(buscar4);
    while(indice >= 0){
    mensagemSecreta.splice(indice, 1);
    indice = mensagemSecreta.indexOf(buscar4);
  }
    var buscar5 = "vez, ";
    var indice = mensagemSecreta.indexOf(buscar5);
    while(indice >= 0){
    mensagemSecreta.splice(indice, 1);
    indice = mensagemSecreta.indexOf(buscar5);
  }
    mensagemSecreta.splice(6, 1, "sabe, ");
    console.log(mensagemSecreta)
    console.log(mensagemSecreta);
    console.log(mensagemSecreta.join(" "))
  }