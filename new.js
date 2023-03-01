const tableBody = document.getElementById('table-body')
let destinations = ['OMAN','TOKYO','DUBAI','FRANKFURT','LONDON'];
let remark = ['ON TIME','CANCELED','DELEYED'];
let houre = 15;


let flights = [
  {
    time: "08:11",
    destination: "OMAN",
    flight: "OX 203",
    gate: "A 01",
    remarks: "ON TIME"
   },
  {
    time: "12:39",
    destination: "LONDON",
    flight: "CL 320",
    gate: "C 31",
    remarks: "CANCELLED"
   },
  {
    time: "13:21",
    destination: "DUBAI",
    flight: "DXB 201",
    gate: "A 19",
    remarks: "CANCELLED"
  },
  {
    time: "14:01",
    destination: "FRANKFURT",
    flight: "FR 402",
    gate: "B 02",
    remarks: "ON TIME"
  },
  {
    time: "15:22",
    destination: "TOKYO",
    flight: "TK 211",
    gate: "A 32",
    remarks: "DELAYED"
  }
]








function populatTable(){
    for(const flight of flights){
       let tableRaw = document.createElement('tr');

       for(const flightDetails in flight){
        let tableCells = document.createElement('td');
       let word = Array.from(flight[flightDetails]);
         
       for( letters of word){
        let div = document.createElement('div');
        div.classList.add('flip');
        div.textContent = letters;
    tableCells.appendChild(div);
       }
       tableRaw.appendChild(tableCells)
       }
       tableBody.appendChild(tableRaw);
    }
}
populatTable();

function randomLetter(){
  let lett = 'AZERTYUIOPµMLKJHGFDSQWXCVBN';
  return lett.charAt(Math.floor(Math.random()  * lett.length))
}
function randomNumber(maxNum){
  let NUM = '0123456789';
  if(maxNum){
    let newNum = NUM.slice(0 , maxNum);
    return newNum.charAt(Math.floor(Math.random()  * newNum.length))
  }
  
  return NUM.charAt(Math.floor(Math.random()  * NUM.length))
}
function randomTime(){
 let displayhoure =    houre;
 if(houre < 24){
  houre ++;
 }
  if(houre >= 24){
    houre = 1;
    displayhoure  = houre;
  } 
  if(houre < 10){
    displayhoure = '0' + houre;

  } 
  
  return displayhoure +':'+ randomNumber(6)  + randomNumber();
}
function shuffleUp(){
  flights.shift();

  flights.push({
    time: randomTime(),
    destination: destinations[Math.floor(Math.random()  * destinations.length)],
    flight: randomLetter() + '' + randomLetter() + '' + randomNumber()+ '' + randomNumber()+ '' + randomNumber(),
    gate: randomLetter() + '' + randomNumber()+ randomNumber(),
    remarks: remark[Math.floor(Math.random()  * remark.length)]
  })
  tableBody.textContent ='';
  populatTable();

}


setInterval(shuffleUp,2000)















