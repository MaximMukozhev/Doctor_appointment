document.getElementById('LCH').onclick=function(){
    document.getElementById('LCH').style.height="150px"
    document.getElementById('doctor').style.height="100px"
    document.getElementById('rejection').style.height="100px"
    document.getElementById('LCHTable').style.display="block"
    document.getElementById('doctorTable').style.display="none"
    document.getElementById('rejectionTable').style.display="none"
}

document.getElementById('doctor').onclick=function(){
    document.getElementById('LCH').style.height="100px"
    document.getElementById('doctor').style.height="150px"
    document.getElementById('rejection').style.height="100px"
    document.getElementById('LCHTable').style.display="none"
    document.getElementById('doctorTable').style.display="block"
    document.getElementById('rejectionTable').style.display="none"
}

document.getElementById('rejection').onclick=function(){
    document.getElementById('LCH').style.height="100px"
    document.getElementById('doctor').style.height="100px"
    document.getElementById('rejection').style.height="150px"
    document.getElementById('LCHTable').style.display="none"
    document.getElementById('doctorTable').style.display="none"
    document.getElementById('rejectionTable').style.display="block"
}