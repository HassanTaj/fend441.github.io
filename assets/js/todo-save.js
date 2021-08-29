 // data types
 var number = 1;
 var name = "Hamza";

 // element selectors (old)
 //  var savBtn = document.getElementById("saveBtn");
 //  var inp = document.getElementsByClassName("my-input");
 //  var table = document.getElementsByTagName('table');

 // css element selectors (query selector)

 // step 1 get elements
 var btn = document.querySelector('#saveBtn');
 var input = document.querySelector('.my-input');
 var tableBody = document.querySelector('#my-table-body');

 // step 2 handle save click
 // function
 function getRowTemplate(inputText) {
     // var tr = document.createElement('tr');
     // var td1 = document.createElement('td');
     // var p = document.createElement('p');
     // p.innerText = inputText;
     // td1.append(p);

     // var td2 = document.createElement('td');
     // var span = document.createElement('span');
     // span.innerText = 'Pending'
     // td2.append(span);
     // tr.append(td1);
     // tr.append(td2);

     return ` <tr>
                                 <td>
                                     <p>${inputText}</p>
                                 </td>
                                 <td>
                                     <span>
                                         Pending
                                     </span>
                                 </td>
                             </tr>`;
 }
 
 function saveTodo() {
     // alert('i have been clicked')
     // get text from input control
     // console.log(input.value);
     // console.log(getRowTemplate(input.value));

     // step 3 append in html
     var  template =  getRowTemplate(input.value);
     var tbody = tableBody.innerHTML;
     tbody += template;
     tableBody.innerHTML = tbody;
     // clear input
     input.value = "";
 }
 
 // handle save click
 btn.addEventListener('click', saveTodo);