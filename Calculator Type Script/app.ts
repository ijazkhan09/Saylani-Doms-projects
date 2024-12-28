var display = document.getElementById('inputBox') as HTMLInputElement;
var buttons : NodeListOf<HTMLButtonElement> = document.querySelectorAll('button');
var string:string = '';
let SpecialChar: string[] = ["=","AC", "DEL"] 
buttons.forEach((btn)=> {
    let btnvalue = btn.innerHTML
    btn.setAttribute("onclick", "Calculate(this)")
    btn.setAttribute("data-set", `${btnvalue}`)

});


const Calculate = (event:HTMLButtonElement): void =>{
    let btnValues = event.getAttribute("data-set")

    if(btnValues == "DEL"){
        string = string.slice(0, -1)
        display.value = string;
        return
    }
    if(btnValues == "AC"){
        string = ""
        display.value = string;
        return
    }
    if(btnValues == "="){
        if(display.value == "") return
        let result = eval(display.value)
        string = result
        display.value = string
        return
    }
   
    string += btnValues
    display.value = string;
} 

