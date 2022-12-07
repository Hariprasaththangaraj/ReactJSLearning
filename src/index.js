import './index.css';


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

class ClassName{
    methodone(){
      var a=6;
      var b =35;
      var c = a*b;

      document.getElementById("root").innerText = c;
      }

      methodtwo(){
        var a= " Hellow React JS How are You?";       
        document.getElementById("root").innerText = a;   
      }
  }
    var cl = new ClassName();
    cl.methodone();
    cl.methodtwo();
   