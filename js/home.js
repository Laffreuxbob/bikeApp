console.log("test")

const pages = ["newtrip", "mytrips", "profil", "history", "stats"]

for (var page in pages){
    document.getElementById(pages[page] + "Content").style.display = "none"
    document.getElementById(pages[page]).addEventListener('click', (evt) => {
        for (var page in pages){
            document.getElementById(pages[page] + "Content").style.display = "none"
            document.getElementById("homeContent").style.display = "none"
        }
        var srcClick = evt.srcElement.id;
        document.getElementById(srcClick + "Content").style.display = "flex"
    })
}

document.getElementById("home").addEventListener('click', () => {
    for (var page in pages){
            document.getElementById(pages[page] + "Content").style.display = "none"
        }
        document.getElementById("homeContent").style.display = "flex";
        document.getElementById("map").style.display = "none";   
        document.getElementById("addParamsPage").style.display = "none";
})


document.getElementById("homeSave").addEventListener('click', () => {
    for (var page in pages){
            document.getElementById(pages[page] + "Content").style.display = "none"
        }
        document.getElementById("homeContent").style.display = "flex";
        document.getElementById("map").style.display = "none";   
        document.getElementById("addParamsPage").style.display = "none";
})

document.getElementById("backToProfil").addEventListener('click', () => {
    for (var page in pages){
            document.getElementById(pages[page] + "Content").style.display = "none"
        }
        document.getElementById("homeContent").style.display = "none";
        document.getElementById("map").style.display = "none";   
        document.getElementById("addParamsPage").style.display = "none";
        document.getElementById("profilContent").style.display = "inline";

})

