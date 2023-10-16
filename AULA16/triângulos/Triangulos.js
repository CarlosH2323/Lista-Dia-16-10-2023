class triangulos{
    constructor(Lado1, Lado2, Lado3){
        this.Lado1 = Lado1;
        this.Lado2 = Lado2;
        this.Lado3 = Lado3;
    }
    tipo(){ // forem diferentes escreva ESCALENO se os três lados forem iguais EQUILÁTERO e se apenas dois lados forem iguais ISÓSCELES.
        if(this.Lado1 == this.Lado2 && this.Lado1 == this.Lado3){
            return "equilatero"
        }
        else if(this.Lado1 == this.Lado2 || this.Lado1 == this.Lado3 || this.Lado2 == this.Lado3){
            return "isosceles"
        }
        else{
            return "escaleno"
        }
    }
    showHTML(){
        let str = `<label>Lado1:${this.Lado1}</label>`
        str += `<label>Lado2:${this.Lado2}</label>`
        str += `<label>Lado3:${this.Lado3}</label>`
        str += `<label>tipo:${this.tipo()}</label>`
        return str
    }
}  

const Lista = [] 

Lista.push(new triangulos(1, 2, 3))
Lista.push(new triangulos(1, 2, 3))
Lista.push(new triangulos(1, 2, 3))
Lista.push(new triangulos(1, 2, 3))
Lista.push(new triangulos(1, 2, 3))

const main = document.getElementById('Triangulos')

Lista.forEach(element => {
    let div = document.createElement('div')
    div.innerHTML = element.showHTML()
    main.appendChild(div)
    
});














































































