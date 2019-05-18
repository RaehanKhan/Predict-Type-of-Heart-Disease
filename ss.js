function display() {
    var age = document.getElementById("age").value;
    var sex = document.getElementById("sex").value;
    var cp = document.getElementById("cp").value; 
    var trestbps = document.getElementById("from-value").value;
    var chol = document.getElementById("from-value1").value; 
    var fbs = document.getElementById("fbs").value;
    var restecg = document.getElementById("restecg").value; 
    var thalach = document.getElementById("from-value3").value;
    var exang = document.getElementById("exang").value;
    var oldpeak = document.getElementById("oldpeak").value;
    var slope = document.getElementById("slope").value; 
    var ca = document.getElementById("ca").value; 
    var thal = document.getElementById("thal").value; 
    
    var display = document.getElementById("disp");

    disp.innerHTML = age+"<br>"+sex+"<br>"+cp+"<br>"+trestbps+"<br>"+chol+"<br>"+fbs+"<br>"+restecg+"<br>"+thalach+"<br>"+exang+"<br>"+oldpeak+"<br>"+slope+"<br>"+ca+"<br>"+thal;
}