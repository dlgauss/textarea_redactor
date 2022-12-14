
  function addDivWithButton(divContent, numberOfWords ,buttonContent) {
    var parent = document.getElementById('words');
  
    // Create the new div and add the divContent to it
    var newDiv = document.createElement('div');
    newDiv.className="my-3 words-block"
    newDiv.id = divContent.replace(' ','')
    

    var newSpan = document.createElement('span');
    newSpan.id = 'keyword'
    var divContent = document.createTextNode(divContent);
    
    var numberOfwordReq = document.createElement('span')
    numberOfwordReq.className='mx-1'
    numberOfwordReq.id = 'numbers_req'
    var wordsReqtext = document.createTextNode(`[${numberOfWords}]`)    
    
    numberOfwordReq.appendChild(wordsReqtext)
    newSpan.appendChild(divContent);
    newDiv.appendChild(newSpan)
    newDiv.appendChild(numberOfwordReq)

    // Create the new button and add the buttonContent to it
    var newButton = document.createElement('button');
    var buttonContent = document.createTextNode(buttonContent);
    newButton.appendChild(buttonContent);
    newButton.className = "mx-4 btn btn-danger btn-sm"
    
    // Add a click event listener to the button that will delete the div
    newButton.addEventListener('click', function() {
      parent.removeChild(newDiv);
    });
  
    // Add the button to the div
    newDiv.appendChild(newButton);
  
    // Add the div to the parent element
    parent.appendChild(newDiv);
  }


function addWord() {

    const inputEl = document.querySelector('#inputtext')
    const elValue = inputEl.value
    const numberEl = document.querySelector('#numberOfWordsRequired')
    const numberElvalue = numberEl.value
    
    // let textToAdd = `${elValue} [${numberElvalue}]`
    addDivWithButton(elValue,numberElvalue,'X')
    inputEl.value= ""
    numberEl.value = ""

}

function matchCount(string, word) {
    let regex = new RegExp(word, "gi");
    let matches = string.match(regex);
    return matches ? matches.length : 0;
  }
  


function appendSpanElement(id,matchedNumber,buttonBefore){
    let keywordId = document.querySelector(`#${id}`)
    var numberOfwordResponse = document.createElement('span')
    numberOfwordResponse.className='mx-1'
    numberOfwordResponse.id = 'numbers_response'
    var wordsReqtext = document.createTextNode(`(${matchedNumber})`)  
    numberOfwordResponse.appendChild(wordsReqtext);
    keywordId.insertBefore(numberOfwordResponse,buttonBefore)
}



function checkNumberOfWords(){
    const textareaBLock = document.querySelector('#left_text')
    let textareaValue = textareaBLock.value
    
    textareaValue = textareaValue.replace(/\n/g,' ');

    const allWordsToMatch = document.querySelectorAll('.words-block')
    console.log(allWordsToMatch)
    for(let i=0; i<=allWordsToMatch.length; i++){
        if(allWordsToMatch[i]){
            const keyword = allWordsToMatch[i].querySelector('#keyword').innerText
            const matched = matchCount(textareaValue,keyword)
     
            let buttonBefore = allWordsToMatch[i].querySelector('button')
           
            let parentOfKwID = allWordsToMatch[i].id
            
            const existsSpan = allWordsToMatch[i].querySelector('#numbers_response')
            console.log(existsSpan)
            if(!existsSpan){
                appendSpanElement(parentOfKwID,matched,buttonBefore)
            }else{
                existsSpan.innerText = `(${matched})`
            }
            
            console.log(`[${i}] For ${keyword} Matched: ${matched}`, keyword)
        }
    }

    
    
}


    function load(){
    let alreadyLoaded = document.querySelector('#loaded_keys').value
    let elsSplitted = alreadyLoaded.split('\n')
    
    
    for(let i=0;i<elsSplitted.length;i++){
    
        let str = elsSplitted[i]
    
        let regex = /\s+/g;
        let result = str.replace(regex, " ").trim()
        if(result != " "){
            console.log(`[${i}] ${result}`)
            
            let regex = /\b([\w\s]+)\b/g;
            let kw = result.match(regex);
           
            if(result != ""){
                let numberOfWordsREQ = result.split('[')[1].replace(']','')
                addDivWithButton(kw[0],numberOfWordsREQ,'X')
            }
            
        }
    }
   }


//   let string = "His game would have been one for the ages anyway, even without having that COME out.His game would have been one for the ages anyway, even without having that come out.";
//   let word = "come";
//   let count = matchCount(string, word);
  
//   console.log(`The word "${word}" appears ${count} times in the string.`);