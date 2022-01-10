//Create a class
class NumberProvider {
    constructor(min = -100, max = 100) {
        // 1.  Validation
        this.min = min
        this.max = max
        this.checkInt()
        this.start()
    }

    checkInt() {
        if(!Number.isInteger(this.min/this.max)) console.error(new Error('Numbers is not integer'))
    }
    // 2. arrow notation
    generate = () => Math.round(Math.random() * (this.max - this.min) + this.min)
    

    whenPositive(positiveCB) {
        this.positiveCB = positiveCB
    }

    whenNegative(negativeCB) {
        this.negativeCB = negativeCB
    }

    start() {
        setInterval(() => {
            let number = this.generate() 
            if(number >= 0) {
                this.positiveCB(number)
            } else {
                this.negativeCB(number)
            }
        }, 1000)
    }
}


/* 
raspuns III: apare eroare din cauza ca noi cind cream o noua instanta (provider) pentru 
            clasa NumberProvider cuvintul cheie 'new' apeleaza constructorul, ruleaza
            codul din interiorul lui si returneaza noua instanta . Si in acest caz cind 
            ruleaza codul din constructor se apeleaza tot odata si metoda 'start()',
            care la rindul ei seteaza un interval care repeta un callback function odata 
            pe secunda , callback-ul dat ii atrinuie variabilei 'number' un numar intreg 
            random care il returneaza metoda 'generate()', si in acest caz avem conditia 
            care verifica daca 'number' este pozitiv atunci => fa apel la metoda 
            'positiveCB(number)' care inca nu este declarata si in cazul dat cind generate()
            returneaza un numar pozitiv imi da eroare.
*/

/*
raspuns VIII: erroarea a disparut datorita ca noi am apelat metoda 'whenPositive()'
            si this.positiveCB ia ca valoare argumentul care ii l-am pasat ca 
            paramentru metodei whenPositive(positiveAction)   
*/ 