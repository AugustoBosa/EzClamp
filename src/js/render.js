export default function render(screens){

    function toggleSettingsScreen(){
        screens.settings.classList.toggle("hidden")
    }

    function changeLanguage(value){
       
        switch (value){
            case "EN":
                document.querySelectorAll(`.EN`).forEach(element=>{element.classList.remove("disabledLanguage")})
                document.querySelectorAll(`.PT`).forEach(element=>{element.classList.add("disabledLanguage")})
            break;
            case "PT":
                document.querySelectorAll(`.PT`).forEach(element=>{element.classList.remove("disabledLanguage")})
                document.querySelectorAll(`.EN`).forEach(element=>{element.classList.add("disabledLanguage")})
            break;

        }
        
    }

    function error(){
        screens.output.classList.add("hidden")

        screens.errorMsg.forEach(msg=>{msg.classList.remove("hidden")})
        screens.startMsg.forEach(msg=>{msg.classList.add("hidden")})

    }

    function codeSnippet(text){
        screens.errorMsg.forEach(msg=>{msg.classList.add("hidden")})
        screens.startMsg.forEach(msg=>{msg.classList.add("hidden")})

        screens.output.classList.remove("hidden")
        
        screens.output.innerText=""
        screens.output.innerText=text

    }

    function clampUnits(unit){
        if(unit=="px"){
            screens.pxUnit.forEach(element=>{
                element.classList.remove("hidden")
            })

            screens.remUnit.forEach(element=>{
                element.classList.add("hidden")
            })
        }

        if(unit=="rem"){
            screens.pxUnit.forEach(element=>{
                element.classList.add("hidden")
            })

            screens.remUnit.forEach(element=>{
                element.classList.remove("hidden")
            })
        }
      
       
    }

    function toggleTheme(){
        screens.screenMode.forEach(svg=>{
            svg.classList.toggle("hidden")
        })

        screens.body.classList.toggle("darkTheme")
    

    }


    return{
        toggleSettingsScreen,
        changeLanguage,
        error,
        codeSnippet,
        clampUnits,
        toggleTheme,
    }
}



