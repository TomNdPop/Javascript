function ispositive(){
    number1 = prompt('Enter a number:')

    if(number1 > 0){
    a = "Your number is positive!"
    }else if(number < 0){
    a = "Your number is negative!"
    }
    return a
}
function main(){
    a = ispositive()
    console.log(a)
}

main()


