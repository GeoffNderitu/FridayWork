function hesabu(){
    var pima= parseInt(document.getElementById("umbali").value);
    var watu = parseInt(document.getElementById("passengers").value);
    if(pima>=1 && pima<=10){
        var pesa= 100;
        var mahesabu= "KSH." + pesa*watu;
        document.getElementById("total").value = mahesabu;
    }else if(pima>=11 && pima<=50){
        var bei= 300;
        var chagua = "KSH." + bei*watu;
        document.getElementById("total").value = chagua;
    }else if(pima>=51 && pima<=100){
        var malipo= 500;
        var vitu="KSH." + malipo*watu;
        document.getElementById("total").value = vitu;
    }else if(pima>=101 && pima<=200){
        var ingine= 1000;
        var another = "KSH." + ingine*watu;
        document.getElementById("total").value=another;
    }else if(pima>=201 && pima<=300){
        var chukua= 1200;
        var tarakimu="KSH." + chukua*watu;
        document.getElementById("total").value=tarakimu;
    }else if(pima>=301 && pima<=400){
        var nambari= 1500;
        var mwisho= "KSH." + nambari*watu;
        document.getElementById("total").value=mwisho;
    }else if(pima>=401){
        var tell= "The Bus does not go past this distance";
        document.getElementById("total").value=tell;
    }
}