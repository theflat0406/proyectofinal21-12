function encriptar(){
    passSistema = "jackeline2004";
    msgError = "Error en la contraseña, vuelve a intentarlo";
    var mensaje = document.getElementById("msg").value;
    var password = document.getElementById("pass").value;
    // alert(mensaje+"+"+password)
    if(passSistema == password){
    //    alert("contraseña correcta");
    document.getElementById("error").innerHTML = "";
    var encryted = btoa(mensaje);
    //alert(encryted);
    // document.getElementById("demo1").innerHTML = encryted;
    
    window.location.href = "pag2.html";


    }else{
      
    //alert("error");
    document.getElementById("error").innerText = msgError;
    }
        
    }
    
    
    
    
    function desencriptar(){
    
    var mensajeCodigo = Document.getElementById("msgCodigo").value;
    var decrypted = atob(mensajeCodigo)
    
    document.getElementById("demo2").innerHTML = decrypted;
    
    
    
    
    
    
    
    }
    
    