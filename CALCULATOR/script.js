let output=document.getElementById('os')
function display(num){

    output.value=output.value+=num
} 
function del(){
    output.value=
    output.value.slice(0,-1)

}
function clr(){
    output.value=""
    

}
function calculate(){
    output.value=eval(output.value)
    

}