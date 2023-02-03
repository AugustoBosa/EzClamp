export default function eventListeners(buttons,settingsInputs,Render,GetCode){

    buttons.gear.addEventListener("click", (event)=>{
        event.preventDefault()
        Render.toggleSettingsScreen()
    })

    buttons.getCode.addEventListener("click",(event)=>{
        event.preventDefault()
        GetCode.areInputsValid() ? Render.codeSnippet(GetCode.write()) : Render.error()
    })
  
    settingsInputs.language.addEventListener("input",()=>{
        Render.changeLanguage(settingsInputs.language.value) 
    })

    settingsInputs.unitSelector.addEventListener("input",()=>{
        let unit = settingsInputs.unitSelector.value
        let section =  settingsInputs.pxToRemOptions
        
    if(unit=="rem"){
        pxToRem.disabled=false
        section.classList.remove("disabled")
    }else{
        pxToRem.disabled=true
        section.classList.add("disabled")
    }

    Render.clampUnits(unit)
    

    })

    buttons.copy.addEventListener("click",()=>{
        var copyText=output.innerText
        navigator.clipboard.writeText(copyText)
    })

    buttons.theme.addEventListener("click",()=>{
        Render.toggleTheme()
    })
    
}













