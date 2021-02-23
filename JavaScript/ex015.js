var agora = new Date()
var diaSem = agora.getDay() 
// 0 domingo 1 segunda
// 2 quarta 3 quarta 5 quinta
// 6 sabado

console.log(diaSem)

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
        case 1:
            console.log('Segunda')
            break
            case 2:
                console.log('Terça')
                break
                case 3:
                    console.log('Quarta')
                    break
                    case 4:
                        console.log('Quinta')
                        break
                        case 5:
                            console.log('sexta')
                            break
                            case 6:
                                console.log('sabado')
                                break
                                    default:
                                        console.log('ERROR')
                                        break
}