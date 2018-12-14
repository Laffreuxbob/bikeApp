function disableProfil(){
    var boolMyProfil = document.getElementById("myProfil").checked;
    var radio = document.getElementsByClassName("bikeType");
    var radios = Array.prototype.slice.call( radio )
    radios.map( (elt) => {
        elt.disabled = boolMyProfil;
    })
    document.getElementById("rangeProfil").disabled = boolMyProfil;
    document.getElementById("addParams").disabled = boolMyProfil;
}

function startMap(){
    document.getElementById("newtripContent").style.display = "none";
    document.getElementById("mytripsContent").style.display = "none";
    document.getElementById("profilContent").style.display = "none";
    document.getElementById("historyContent").style.display = "none";
    document.getElementById("addParamsPage").style.display = "none";
    document.getElementById("statsContent").style.display = "none";
    document.getElementById("map").style.display = "inline";
}

function addNewParams(){
    document.getElementById("newtripContent").style.display = "none";
    document.getElementById("mytripsContent").style.display = "none";
    document.getElementById("profilContent").style.display = "none";
    document.getElementById("historyContent").style.display = "none";
    document.getElementById("map").style.display = "none";
    document.getElementById("statsContent").style.display = "none";
    document.getElementById("addParamsPage").style.display = "inline";
}

function displayRangeWeightChild(){
    var boolWeightChild = document.getElementById("isChild").checked;
    console.log(boolWeightChild)
    var rangeWeightChild = document.getElementById("rangeWeightChild")
    rangeWeightChild.style.display = boolWeightChild ? "inline" : "none"
    
}

function statsDisplay(){
    function addNewParams(){
        document.getElementById("newtripContent").style.display = "none";
        document.getElementById("mytripsContent").style.display = "none";
        document.getElementById("profilContent").style.display = "none";
        document.getElementById("historyContent").style.display = "none";
        document.getElementById("map").style.display = "none";
        document.getElementById("addParamsPage").style.display = "none";
        document.getElementById("statsContent").style.display = "inline";
        
    }
}

