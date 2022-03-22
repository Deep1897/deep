// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 mark
document.querySelector("form").addEventListener("submit",myfun)
function myfun() {
   event.preventDefault();
//    var h=document.creatElement("h1");
//     h.innerText="hkjfhkjhf";
//     document.querySelector("body").append(h);


  
   var image=document.querySelector("#image").value;
   var name=document.querySelector("#name").value;
   var batch=document.querySelector("#batch").value;
   var dsa=document.querySelector("#dsa").value;
   var skill=document.querySelector("#cs").value;
   var coding=document.querySelector("#coding").value;
  //  console.log(image,name,batch,datas,skill,coding)

  var Tr= document.createElement("tr");
 
  var td1= document.createElement("td");
  var image1=document.createElement("img");
  image1.src= image;
  td1.append(image1);
  var td2= document.createElement("td");
  td2.innerText=name;
  var td3= document.createElement("td");
  td3.innerText=batch;
  var td4= document.createElement("td");
  td4.innerText=Number(dsa);
  var td5= document.createElement("td");
  td5.innerText= Number(skill);
  var td6= document.createElement("td");
  td6.innerText=Number(coding);
  var td7= document.createElement("td");
    var percent=eval(("dsa+skill+coding")/"30")*"100";
    td7.innerText=percent;
    console.log(percent);
  // td8.innerText= s;

  
  var td8= document.createElement("td");

  if(percent>50)
  {
      var as="async";
      td8.innerText= as;
  }
  else
  {
   
    td8.innerText= "regular";
  }

  Tr.append(td1,td2,td3,td4,td5,td6,td8);
  document.querySelector("tbody").append(Tr);


   
    
}