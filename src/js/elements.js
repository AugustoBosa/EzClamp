

    const settingsInputs={
        unitSelector:document.getElementById("unitSelector"),
        pxToRem:document.getElementById("pxToRem"),
        pxToRemOptions:document.getElementById("pxToRemOptions"),
        varID:document.getElementById("varID"),
        CSSSelector:document.getElementById("CSSSelector"),
        CSSProperty:document.getElementById("CSSProperty"),
        language:document.getElementById("languageSelector"),

    }
    
    const mainInputs={
        clampMinValue:document.getElementById("clampMinValue"),
        clampMaxValue:document.getElementById("clampMaxValue"),
        vpMinValue:document.getElementById("vpMinValue"),
        vpMaxValue:document.getElementById("vpMaxValue"),
    }
    
    const buttons={
        gear:document.getElementById("gearBtn"),
        getCode:document.getElementById("getCode"),
        copy:document.getElementById("copyBtn"),
        theme:document.getElementById("theme"),
    }
    
   const screens={
        output:document.getElementById("output"),
        settings:document.getElementById("settings"),
        errorMsg:document.querySelectorAll(".errorMsg"),
        startMsg:document.querySelectorAll(".startMsg"),
        pxUnit:document.querySelectorAll(".pxUnit"),
        remUnit:document.querySelectorAll(".remUnit"),
        screenMode:document.querySelectorAll(".screenMode"),
        body:document.querySelector("body"),
    
    }





export  {
    settingsInputs,
    mainInputs,
    buttons,
    screens,
}
