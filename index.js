
    const loginBtn = document.querySelector('#button-login');
    const regBtn = document.querySelector('#button-register');
    let login  = ()=>{
        const originalLoginValue = loginBtn.textContent;
        loginBtn.setAttribute("inprogress",true)
        setTimeout(() => {
        loginBtn.removeAttribute("inprogress");
        console.log("login response");

        }, 1000);
    }
    let register  = ()=>{
    const originalRegValue = regBtn.textContent;
       
        // regBtn.textContent = "Registering..."
        // regBtn.classList.add("fading");
        // regBtn.setAttribute("disabled", "true");
        regBtn.setAttribute("inprogress",true)

        setTimeout(() => {
        // regBtn.textContent = originalRegValue;
        // regBtn.removeAttribute("disabled");
        // regBtn.classList.remove("fading");
        regBtn.removeAttribute("inprogress")

            console.log("delayed log ", new Date())
        }, 1000);
    }

const temp = () => {
    console.log("Temp")

}

class Button extends HTMLElement {
    constructor(){
        super();
        const text = this.getAttribute("text")
      
        this.innerHTML = `<button  class="button"> ${text} </button>`
    }

    static get observedAttributes(){
        return ["inprogress"];
    }

    attributeChangedCallback(attribute,oldValue,newValue){

        const button = this.querySelector('button');
        if (newValue) {
        button.textContent = this.getAttribute("text-loading");
        button.classList.add("fading");
        button.setAttribute("disabled", "true");   
        }else{
         button.textContent = this.getAttribute("text");
        button.classList.remove("fading");
        button.removeAttribute("disabled");     
        }

    }

}

customElements.define("app-button", Button)
