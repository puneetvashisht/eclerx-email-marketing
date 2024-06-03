function reverseText(){
    console.log('Button clicked!')
    var str = document.getElementById('message').innerHTML 
    var revStr = str.split('').reverse().join('')
    document.getElementById('message').innerHTML = revStr
}