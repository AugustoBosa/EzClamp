

# Ez Clamp(...)
[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/AugustoBosa/EzClamp/blob/main/README.md)

Ez Clamp(...) é uma ferramenta desenvolvida para auxiliar no uso da funcção CSS clamp, escrevendo para o usuário um código em CSS baseado nos valores máximo e mínimo do clamp e da variação do tamanho da tela. O código garante transições fluidas e layouts responsivos consistentes em qualquer tamanho de tela.


## :card_index: Conteúdo
* [:question:Como Usar](#how-to-use)
  * [:gear:Opções](#options)
* [:earth_americas:Idiomas](#language)
* [:hammer_and_wrench:Como Funciona](#howWork)
* [:computer:Tecnologias](#tech)
* [:scroll:Sobre o EzClamp(...)](#about)
* [:scroll:Contato](#contact)


<a name="how-to-use"></a>
## :question: Como Usar 

Para gerar o código CSS siga os seguintes passos:

    1 - Preencha os campos do Clamp com os valores mínimo (min) e máximo (max) desejados.
    
    2 - Preencha os campos de tamnho da Viewport para is limites de Início e Fim da função clamp. 
    
    3 - Clique em "Gerar Código".

O código gerado garante que o valore gerado pelo clamp seja o mínimo até o valor de viewport inicial, o máximmo quando acima do valor de viewport final, e um valor proporcional quando entre os dois.

Para usar o código basta copiar direto da tela, ou clicar no botão no canto direito abaixo da seção onde aparece o código para copiar tudo, e colar no seu código fazendo os ajustes necessários.

O código gerado armazena ambas as variáveis no :root para melhor organização, mas você pode armazena-los onde achar melhor no seu projeto.

<a name="options"></a>
### :gear: Opções
Todos os campos são opcionais, você não precisa deles para gerar seu código.
   * Unidade do Clamp - Aqui você escolhe qual unidade quer utilizar no clamp, pixel ou rem. Se rem for selecionado o campo ao lado é habilitado, permitindo que você informe quantos pixels são o equivalente a 1 rem no seu projeto, se nenhum for informado será automaticamente usado 1rem=10pixels.
   * ID da Variável  - Informe o nome que você quer utilizar para a variável utilizada para o cálculo do valor proporcional ao tamanho da tela. (Se deixado em branco um placeholder será utilizado)
   * Seletor CSS - Iforme o Seletor CSS que receberá o clamp. ex.: #id, .class, TagName (Se deixado em branco um placeholder será utilizado)
   * Propriedade CSS - Iforme a Propriedade CSS que receberá o clamp. ex.: font-size, gap, margin, padding...(Se deixado em branco um placeholder será utilizado)

<a name="language"></a>
## :earth_americas: Idiomas
EzClamp(..) está disponível em dois idiomas: inglês (en-us) e português (pt-br).

Para alterar o idima use o seletor sob a bandeira, no canto direito do rodapé.

<a name="howWork"></a>
## :hammer_and_wrench: Como Funciona
EzClamp(..) cria 2 variáveis:
  * DiffViewport é a diferença entre a tela atual e o tamanho de viewport inicial.
  * TA segunda é uma variável que multiplica a DiffViewport pela razão entre as variações do clamp e viewport.((ClampMax-ClampMin)/(ViewportMax-ViewportMin)), resultando no incremento proporcional ao valor mínimo do clamp baseado no valor da DiffViewport.
  
Então ele escreve um código CSS armazenando as variáveis no :root e aplicando um clamp no Seletor e Propriedade CSS, utilizando a segunda variável para determinar o valor flutuante do clamp.

<a name="tech"></a>
## :computer: Tecnologias
EzClamp(..) é desenvolvido com:
<div>
<img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" width="35px"></img>
<img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-original.svg" width="35px"></img>
<img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" width="35px"></img>
</div>

<a name="about"></a>
## :scroll: About EzClamp(..)
Eu vivia incomodado com a função CSS clamp enquanto desenvolvia meus projetos iniciais, não importa o que eu fizesse, meu layout responsivo era sempre desesetruturado por uma fonte que crescia mais rápido do que o espaçamento entre os elementos e coisas do tipo. Decidi então dedicar um tempo estudando aquela função, entender a lógica e matemática dela, e criar uma maneira de fazê-la se comportar da maneira que eu desejava. Alguns minutos depois os cálculos já estavam resolvidos e eu estava pronto para aplicar este novo método, mas logo percebi que refazer os cálculos em cada uso gastava tempo demais, então o EzClamp(...) foi criado para facilitar isso.

Alguns dias de polimento depois e o prejeto está finalmente funcionando (2023/03/02) e pronto para ajudar qualquer um que esteja passando pelos problemas que tive.

<a name="contact"></a>
## 	:mailbox_with_mail: Contact Info
Sinta se livre para entrar em contato comigo sobre algum problema ou segestão referente ao EzClamp(...):

Augusto Bosa

:e-mail: dev.augustobosa@gmail.com


