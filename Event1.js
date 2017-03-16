/**
 * Created by Ucenik on 16.3.2017..
 */

document.getElementById("upis").addEventListener("mouseover",mojPoziv);
function mojPoziv()
{
    document.getElementById("upis2").innerHTML=mojString;
}
var mojString="pozvali ste me";

document.getElementById("prvi").addEventListener("keydown",dolje);
function dolje()
{
    alert("keydown");
}

document.getElementById("drugi").addEventListener("keyup",gore);
function gore()
{
    alert("keyup");
}


document.getElementById("treci").addEventListener("keypress",pritisak);
function pritisak()
{
    alert("keypress");
}

document.getElementById("load").addEventListener("load",Poziv);
function Poziv()
{
    alert("Bilo kaj");
}



