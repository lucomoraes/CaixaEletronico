class CaixaEletronico { 
    constructor(saque) {  
        this._saqueTotal = saque     
        this._saque = saque   
        this.saldo = 7000
    }

    get saque() {
        return this._saque
    }

    get saqueTotal() {
        return this._saqueTotal
    }   

    realizarSaque() {                       
        let infoContainer = document.createElement('div')
        infoContainer.setAttribute('id', 'info-container')
        infoContainer.style.textAlign = 'center'
        document.querySelectorAll('#info-container').forEach(e => e.remove());
        document.querySelector('body').appendChild(infoContainer);        
        //Array de objetos para contabilizar a quantidade de cédulas utilizadas        
        let contadorCedulas = [
            {"valorCedula" : "R$200", "contador": 0},
            {"valorCedula" : "R$100", "contador": 0},
            {"valorCedula" : "R$50", "contador": 0},
            {"valorCedula" : "R$20", "contador": 0},
            {"valorCedula" : "R$10", "contador": 0}]

            if(this.saldo - this._saque >= 0) {
                if(this._saque != 0) {
                    for(;this._saque >= 200;) {
                        contadorCedulas[0].contador += 1 
                        this._saque -= 200
                    }
                    for(;this._saque >= 100;) {
                        contadorCedulas[1].contador += 1 
                        this._saque -= 100
                    }
                    for(;this._saque >= 50;) {
                        contadorCedulas[2].contador += 1 
                        this._saque -= 50
                    }
                    for(;this._saque >= 20;) {
                        contadorCedulas[3].contador += 1 
                        this._saque -= 20
                    }            
                    for(;this._saque >= 10;) {
                        contadorCedulas[4].contador += 1 
                        this._saque -= 10
                    }
                }      
                contadorCedulas.forEach(function(cedula){
                    let span = document.createElement('span')                    
                    

                    if(cedula.contador > 0) {
                        span.innerHTML = `Quantidade de cédulas disponíveis para saque: ${cedula.valorCedula}: ${cedula.contador}`                    
                        span.style.display = 'block' 
                        span.style.marginBottom = '15px' 
                        span.style.fontSize = '20px'
                        document.getElementById('info-container').appendChild(span)                        
                    } 
                })                 
                console.log(`Saldo pós saque: R$` + (this.saldo - this._saqueTotal))
            }  else {
                let span = document.createElement('span') 
                span.style.color = '#FF0000'
                span.innerHTML = `Saldo insuficiente para saldo`   
                document.getElementById('info-container').appendChild(span)                 
            }                      
        }
        carregarSaldo() {
            document.querySelector('#valorSaldo').innerHTML
        }              
}   
document.querySelector('#btnSacar').addEventListener('click', () => {    
    let valorInputSaque = document.querySelector('#inputSaque').value
    let novoSaque = new CaixaEletronico(valorInputSaque)            
    novoSaque.realizarSaque()    
})

