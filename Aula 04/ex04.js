function podeSubir(altura, acompanhada){
    if(altura >= 1.4 && altura <= 2.0){
        return "Acesso Autorizado";
    }
    else if(altura <1.4 && altura >=1.2 && acompanhada == true){
        return "Acesso autorizado somente com acompanhante";
    }else{
        return "Acesso Negado";
    }
}
    console.log (podeSubir(1.4, true));