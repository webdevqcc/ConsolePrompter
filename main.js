var select = document.querySelector('#languages'),
    area = document.getElementById("codeLabel");
    btn = document.getElementById("submitBtn");
    consoleLabel = document.getElementById('consoleLabel');


select.addEventListener('change',function(){
  //  alert('changed');
    if(select.value == "Python"){


      area.value = "console(\"Hello World!\")"
      }else if(select.value == "Javascript"){

        area.value = "print(\"Hello World!\")";
      }else if(select.value == "R"){
        area.value = "Printf(\"Hello World!\")";
      }else if(select.value == "Java"){
        area.value = "Print(\"Hello World!\")";
      }
    
});

console.log(btn)

function submit(){
  var splitAreaCases = area.value.split(/(")/g);
  var splitArea = area.value.toLowerCase().split(/(")/g);
 console.log(splitArea);
  
  if(select.value == "Python"){
  if(splitArea[0] == "print(" && splitArea[1] == "\"" && splitArea[3] == "\"" && splitArea[4] == ")"){

   consoleLabel.style.color = "";
    consoleLabel.textContent = splitAreaCases[2];
  }  
  else{
    console.log(area.value);
    consoleLabel.style.color = "red";
   consoleLabel.textContent = "Mistakes were made, please try again";
  }
  }
   if (select.value == "Javascript"){
  if(splitArea[0] == "console.log(" && splitArea[1] == "\"" && splitArea[3] == "\"" && splitArea[4] == ");"){
    consoleLabel.style.color = "";
    consoleLabel.textContent = splitAreaCases[2];
  
    } else if (splitArea[0] == "console.log(" && splitArea[1] == "\"" && splitArea[3] == "\"" && splitArea[4] == ")"){
          consoleLabel.style.color = "red";
   consoleLabel.textContent = "You're missing one single character. Pssst it's at the end of the line.";
    }
    
    
    else{
          consoleLabel.style.color = "red";
   consoleLabel.textContent = "Mistakes were made, please try again";
    }
   }
    if (select.value == "R"){ 
      if(splitArea[0] == "print(" && splitArea[1] == "\"" && splitArea[3] == "\"" && splitArea[4] == ")"){
    
       consoleLabel.style.color = "";
    consoleLabel.textContent = splitAreaCases[2];
    }else{
               consoleLabel.style.color = "red";
   consoleLabel.textContent = "Mistakes were made, please try again";
    }
    }
  }


btn.onclick = submit;

