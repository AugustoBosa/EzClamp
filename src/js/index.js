import {
    settingsInputs,
    mainInputs,
    buttons,
    screens,
} from "./elements.js";
import render from "./render.js"
import eventListeners from "./eventListeners.js";
import getCode from "./getCode.js"


let Render = render(screens)
let GetCode = getCode(mainInputs,settingsInputs)
let EventListeners=eventListeners(buttons,settingsInputs,Render,GetCode)


