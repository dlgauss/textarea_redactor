function checkNumberOfWords(){
   let leftTextarea = document.querySelector('#left_text').value
   let rightTextarea = document.querySelector('#right_text').value
   
  


   let splittedRightText = rightTextarea.split('\n')
    let wordsToSearch = {}

    for (let i =0; i < splittedRightText.length; i++){
        if(splittedRightText[i].trim() !== ''){
                if(splittedRightText[i].startsWith('*')){
                    wordsToSearch[splittedRightText[i].trim().substring(1).split(' ')[0].toLowerCase()] = ''
                }
                
            }
        
    }

    


let clearLeftText= rightTextarea.replace('\n',' ')

  clearLeftText = leftTextarea.split(' ')
   
  let arrOfClearElement = []

   clearLeftText.forEach(element => {
    if(element.trim() !== ''){
        return arrOfClearElement.push(element.toLowerCase())
    }
   });

   const newStr = arrOfClearElement.reduce((acc,rec) => {
    return ({ ...acc, [rec]: (acc[rec] || 0) + 1 })
  },{})
  
  for (let obj in wordsToSearch){
    if(newStr[obj]){
        console.log(newStr[obj])
        updateTextareaBlock(obj,newStr[obj])

    }else{
        console.log('None for ', obj)
        updateTextareaBlock(obj,0)
    }
  }

}



function updateTextareaBlock(wordname,numberOfWords){
    let rightTextarea = document.querySelector('#right_text').value
    let splittedRightText = rightTextarea.split('\n')
    console.log(splittedRightText)
    for (let i =0; i < splittedRightText.length; i++){
        if(splittedRightText[i].toLowerCase().includes(wordname.toLowerCase())){
            if(!splittedRightText[i].includes('times')){
                splittedRightText[i] = splittedRightText[i].replace('()',`(${numberOfWords} times)`)
            }else{
                
                let openPh = splittedRightText[i].indexOf('(')
                let closePh = splittedRightText[i].indexOf(')')
                let newStr = splittedRightText[i].substring(openPh,closePh +1)
                splittedRightText[i] = splittedRightText[i].replace(newStr,'')
                splittedRightText[i] += `(${numberOfWords} times)`
            }
            
        }
    }

   
    document.querySelector('#right_text').value = splittedRightText.join('\n')
}