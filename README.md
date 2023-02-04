# Ez Clamp(...)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](https://github.com/AugustoBosa/EzClamp/blob/main/README.pt-br.md)

Ez Clamp(...) is a tool designed to help with the clamp function in CSS, writing for the user a CSS code based on the desired clamp min and max values, and the screen size variation. This code ensures a fluid transition for responsive layouts and makes them consistent in any screen size.


## :card_index: Table of contents
* [:question:How to use](#how-to-use)
  * [:gear:Options](#options)
* [:earth_americas:Language](#language)
* [:hammer_and_wrench:How it Works](#howWork)
* [:computer:Technologies](#tech)
* [:scroll:About EzClamp(...)](#about)
* [:mailbox_with_mail:Contact Info](#contact)
 
 
<a name="how-to-use"></a>
## :question: How to use 

To generate the CSS code just follow the steps:

    1 - Fill the Clamp inputs with the desired minimum (min) and maximum(max) values.
    
    2 - Fill the Viewport Size inputs with the start and end Viewport sizes desired for the clamp limits. 
    
    3 - Click "Get Code".

The generated code will ensure that the desired clamp value will be the minimum value up to the viewport start size, the maximum value at the viewport end and above, and a proportional value in between them.

To use the code you can just copy the desired parts right off the screen, or click on the the lower right corner of the code screen to copy the whole content, and then just paste it to your code and make the necessary adjusts.

The code provides both variables stored in the :root selector for better organization, feel free to store them wherever you want in your code.

<a name="options"></a>
### :gear: Options
All inputs here are optional, you don´t need them to get your code.
   * Clamp Unit - Here you can choose what unit to use in your code for the clamp function, pixel or rem. If the rem option is chosen the next input is enabled, allowing you to enter the rem value in pixels of your project, if none is informed it will automatically use 1rem=10pixels.
   * Variable ID  - Inform the name you want to use in your code to store the variable used to calculate the proportional clamp value to the screen.(If let empty a placeholder will be used)
   * CSS Selector - Inform the CSS selector that will receive the clamp. ie.: #id, .class, TagName (If let empty a placeholder will be used)
   * CSS Property - Inform the CSS property that will receive the clamp. ie.: font-size, gap, margin, padding...(If let empty a placeholder will be used)

<a name="language"></a>
## :earth_americas: Language
EzClamp(..) is avaliable in 2 languages: english (en-us) and portuguese (pt-br).

To change the language use the selector under the current language flag, on the right side of the footer.

<a name="howWork"></a>
## :hammer_and_wrench: How it Works
EzClamp(..) creates 2 variables:
  * DiffViewport is the difference between the current screen width and the start point.
  * The second one is a variable that multiplies the DiffViewport by the ratio between the clamp and screen size ranges ((ClampMax-ClampMin)/(ScreenMax-ScreenMin)), resulting in the proportional increase in the clamp min values based on the DiffViewport value.
  
Then it writes a CSS code storing the variables on the :root and applying a clamp on the CSS Property and Selector with the second variable created used to calculate de fluctuating value.

<a name="tech"></a>
## :computer: Technologies
EzClamp(..) is developed with:
<div>
<img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" width="35px"></img>
<img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-original.svg" width="35px"></img>
<img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" width="35px"></img>
</div>

<a name="about"></a>
## :scroll: About EzClamp(..)
I was constantly annoyed with the clamp function while developing projects as a begginer, no matter what I did, my responsive layout was constantly disrupted by fonts growing faster than the space between elements and other behaviors like this. So I decided it was time to spend some time studying that specific function, crunch its numbers, and formulate a way that would make it behave the way I wanted it to. A few minutes later the math was done and I was ready do apply this new method, but soon realized the work of redoing the math every time was too time consuming, so EzClamp(..) was created to simplify that.

After a few days of polishing and it is finally deployed (2023/03/02) and ready to help anyone with the same problems that I once had.

<a name="contact"></a>
## 	:mailbox_with_mail: Contact Info
Feel free to contact me about possible Bugs or suggestions for the EzClamp(...):

Augusto Bosa

:e-mail: dev.augustobosa@gmail.com

