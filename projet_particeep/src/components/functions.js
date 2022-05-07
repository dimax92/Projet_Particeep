export function recuperationCategories(premierTableau){
    let deuxiemeTableau = [];
    let resultat = 1;
    for(let i in premierTableau){
        for(let j in deuxiemeTableau){
            if(premierTableau[i] === deuxiemeTableau[j]){
                resultat = 0;
            }
        }
        if(resultat === 1){
            deuxiemeTableau.push(premierTableau[i])
        }else{
            resultat=1
        }
    };
    return deuxiemeTableau;
}

export function filtrePagination(tableau, premierNumero, deuxiemeNumero){
    if(Math.sign(premierNumero) !== -1 && Math.sign(deuxiemeNumero) !== -1){
        let nouveauTableau = [];
        let nombrePages = 0;
    
        if(deuxiemeNumero >= tableau.length){
            deuxiemeNumero = tableau.length-1;
        }
    
        for(let i=premierNumero; i<=deuxiemeNumero; i++){
            nouveauTableau.push(tableau[i]);
            nombrePages = nombrePages+1;
        };
    
        if(nombrePages >= 1){
            return nouveauTableau;
        }
    }
}