export default function getCode(mainInputs,settingsInputs){

    function write(){
        let unit=settingsInputs.unitSelector.value
        
        let pxToRemFactor=1
    
        if(unit=="rem"){
            pxToRemFactor = settingsInputs.pxToRem.value
            if(isNaN(pxToRemFactor)||pxToRemFactor==""){
                pxToRemFactor=10
            }
        }
    
        let screenRatio = ((mainInputs.clampMaxValue.value*pxToRemFactor)-(mainInputs.clampMinValue.value*pxToRemFactor))/(mainInputs.vpMaxValue.value-mainInputs.vpMinValue.value)

        let varID=settingsInputs.varID.value
        if(varID==""){
            varID="var-Id"
        }

        let CSSSelector=settingsInputs.CSSSelector.value
        if(CSSSelector==""){
            CSSSelector="CSS-Selector"
        }

        let CSSProperty=settingsInputs.CSSProperty.value
        if(CSSProperty==""){
            CSSProperty="CSS-Property"
        }
 


    let codeSnippet=`:root{
    --DiffViewport${mainInputs.vpMinValue.value}: calc(100vw - ${mainInputs.vpMinValue.value}px);
    --${varID}: calc(var(--DiffViewport${mainInputs.vpMinValue.value}) * ${screenRatio.toFixed(3)});
}

${CSSSelector}{
    ${CSSProperty}: clamp(${mainInputs.clampMinValue.value}${unit}, calc(${mainInputs.clampMinValue.value}${unit} + var(--${varID})), ${mainInputs.clampMaxValue.value}${unit});
}
  `


            return codeSnippet
        }
    
    
    function areInputsValid(){
        let valid=true

        for (const input in mainInputs) {
            if (isNaN(mainInputs[input].value) || mainInputs[input].value==""){
                valid=false
            }  
        }
        return valid     
    }




    return{
        areInputsValid,
        write,
    }

}


