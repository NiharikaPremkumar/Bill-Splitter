const billAmti=document.querySelector('#amt')//selects id/class
const Peoplei=document.querySelector('.people')
const customtipi=document.querySelector('.customtip')
const generatebtn= document.querySelector('.generatebtn')
const tipo=document.querySelector('.tipamt span')
const totalbillo=document.querySelector('.totalbill span')
const Resulto=document.querySelector('.per-person span')
const tipscontainer=document.querySelector('.tip-container')
const resetbtn=document.querySelector('.resetbtn')

let tipPercent=0

//calculate
generatebtn.addEventListener('click',() => {
 const billAmount= parseInt(billAmti.value)
 const Ppl= parseInt(Peoplei.value)//gives only int

 const tip= billAmount*(tipPercent/100)

 const totalBill = billAmount +tip

 const perperson = totalBill/Ppl

 tipo .innerText= `₹${tip}` 
 totalbillo .innerText= `₹${totalBill}` 
 Resulto.innerText= `₹${ perperson}`
 resetbtn.disabled= false
})
//event delegation
tipscontainer.addEventListener('click',(e)=>{
  
  if(tipscontainer.classList.contains('disable')) return
  
  if (e.target !== tipscontainer){
    //remove previously selected
    [...tipscontainer.children].forEach((tips) => tips.classList.remove('selected'))
    
    //to add items to html class
    e.target.classList.add('selected') 
    tipPercent=parseInt(e.target.innerText)
    customtipi.value=''
    //to enable generate button
    if(Peoplei.value && tipPercent){
      generatebtn.disabled=false
    }
    else{
      generatebtn.disabled=true
    }
  }
})

//if custom tip is added
customtipi.addEventListener('input',()=>{
  
  tipPercent=parseInt(customtipi.value);
  [...tipscontainer.children].forEach((tips) => tips.classList.remove('selected'))
  if(Peoplei.value && tipPercent){
    generatebtn.disabled=false
  }
  else{
    generatebtn.disabled=true
  }
})

//reset
resetbtn.addEventListener('click', ()=>{
  tipPercent= 0
  tipo.innerText=''
  totalbillo.innerText=''
  Resulto.innerText='' 

  resetbtn.disabled= true
  generatebtn.disabled=true
  customtipi.disabled=true
  Peoplei.disabled=true
  tipscontainer.classList.add('disable')

  billAmti.value=''
  Peoplei.value=''
  customtipi.value='';
  [...tipscontainer.children].forEach((tips) => tips.classList.remove('selected'))
})

billAmti.addEventListener('input',()=>{
  if(billAmti.value){
    Peoplei.disabled=false
    customtipi.disabled=false
    tipscontainer.classList.remove('disable')
    
  }
  else{
    Peoplei.disabled=true
    customtipi.disabled=true
    tipscontainer.classList.add('disable')
  }
})
Peoplei.addEventListener('input',()=>{
  if(Peoplei.value && tipPercent){
    generatebtn.disabled=false
  }
  else{
    generatebtn.disabled=true
  }
})
