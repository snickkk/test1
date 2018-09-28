function CreditCard ( params ) {
    var owner = params.name || "Иван Иванов"
    this.cardNum = params.num
    var pinCode = prompt ("Ввелите пин-код")

    var cash = 0
    this.putCash = function (sum) {
        cash += sum
    }
     this.getCash = function (sum,pin) {
        if (pin ===pinCode)   cash -= sum
    }
    this.testPin = function (pin){
    return pin ===pinCode ? cash : null
    }
}

function Bankomat () {
    var cash = 1000000000

    this.getCardCash = function (card/*, sum, pin*/ ) {
        var cardCash = card.testPin(prompt('Введите пин-код'))
        if ( typeof cardCash === 'number') {
            var  sum = prompt('Введите сумму')
         if (sum <=cardCash){
            if (cash >= sum)  {
            card.getCash (sum,prompt('Введите пин-код'))
            console.log(`Получите : ${sum}`)
            cash -=sum
        }
        else console.log('В банкомате недостаточно денег')
    }
    else console.log('недостаточно денег на счету')

    }
    else console.log('Неверный пин-код')

  }
}
var card = new CreditCard ({name:'Name', num : '123456789'})
var bank = new Bankomat ()
