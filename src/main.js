const calcularHora = document.querySelector('#calcular-hora')
let showResult = document.querySelector('#show-result'),
    cardInfoTitle = document.querySelector('#card-info-title'),
    cardInfoText = document.querySelector('#card-info-text')


function clearElement(elementId) {
  elementId.innerHTML = ''
}

function getElements() {
  let horasDiarias = document.querySelector('#horas-diarias'),
    diasEfetivos = document.querySelector('#dias-efetivos'),
    diasFerias = document.querySelector('#dias-ferias'),
    valorProjeto = document.querySelector('#valor-projeto')

  results = {
    horasDiarias, diasEfetivos, diasFerias, valorProjeto
  }
  return results
}


calcularHora.addEventListener('click', () => {
    let el = getElements(),
        horasDiarias = el.horasDiarias.value,
        diasEfetivos = el.diasEfetivos.value,
        diasFerias = el.diasFerias.value,
        valorProjeto = el.valorProjeto.value, 
        valorHora = (valorProjeto / (diasEfetivos * 4 * horasDiarias) ) + ( ( diasFerias * diasEfetivos * horasDiarias ) )
    
    let textShow = `Seu valor por hora é: R$${valorHora.toFixed(2)}`
      newContent = document.createTextNode(textShow)
      showResult.appendChild(newContent)
      document.innerHTML = showResult
})  

function editCard(title, text) {
  clearElement(cardInfoTitle)
  clearElement(cardInfoText)
  let titleCard = title,
      newContentTitle = document.createTextNode(titleCard),
      textCard = text,
      newContentText = document.createTextNode(textCard)
  
  cardInfoTitle.appendChild(newContentTitle)
  cardInfoText.appendChild(newContentText)

  document.innerHTML = cardInfoTitle
  document.innerHTML = cardInfoText
}

let getElement = getElements()

getElement.horasDiarias.addEventListener('focus', () => {
  editCard('Tempo diário investido no projeto',
   'Agora vamos entender um pouco mais sobre esses fatores começando pelo fator tempo diário investido. Quando tratamos de freelances, há uma certa demanda do seu tempo em off. Ou seja: depois do trabalho, escola ou aquele tempinho vago no final do dia que você usa pra relaxar e descontrair. Esse tempo é algo muito valioso para qualquer pessoa, certo? Então claramente temos que levar esse fator em consideração.')
})

getElement.diasEfetivos.addEventListener('focus', () => {
  editCard('Dias efetivos trabalhando',
   'Outro fator é a quantidade de dias efetivos que você irá disponibilizar para trabalhar no projeto. Não há nenhuma garantia que você poderá trabalhar todos os dias e de fato lidar com o processo de confirmar tudo com o cliente. Logo, você terá que cotar uma quantidade de dias específicos para lidar com todo o processo, sendo ele a parte comercial e desenvolvimento.')
})

getElement.diasFerias.addEventListener('focus', () => {
  editCard('Dias de Férias do projeto',
   'Qualquer modalidade de trabalho, seja CLT ou PJ, há seus encargos referentes à verba de férias e não seria diferente para lidar com um freela. Uma parte do valor da sua hora reflete diretamente na quantidade de dias que você deseja tirar "férias" com o valor total projeto.')
})

getElement.valorProjeto.addEventListener('focus', () => {
  editCard('Valor total do Projeto',
   'Não podemos esquecer do principal fator que é o total a ser recebido pelo freela. A partir desse valor, do quanto você desejaria ganhar em cima do trabalho, é feito o cálculo maior.')
})

