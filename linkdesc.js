// JavaScript Document
function display() {
    DispWin = window.open('','NewWin', 'toolbar=no,status=no,width=300,height=200')
    message = "<ul><li><b>NAME: </b>" + document.form1.yourname.value;
    message += "<li><b>ADDRESS: </b>" + document.form1.address.value;
    message += "<li><b>PHONE: </b>" + document.form1.phone.value + "</ul>";
    DispWin.document.write(message);
}
function cleardesc() {
     d = document.getElementById("description");
     d.innerHTML = "主页";
}
function hover(e) {
    if (!e) var e = window.event;
    whichlink = (e.target) ? e.target.id : e.srcElement.id;
    if (whichlink=="index") desc = "主页";
    else if (whichlink=="one") desc = "家庭用品";
else if (whichlink=="two") desc = "时间导航";
d = document.getElementById("description");
    d.innerHTML = desc;
}
orderlink = document.getElementById("index");
orderlink.onmouseover=hover;
orderlink.onmouseout=cleardesc;
emaillink = document.getElementById("one");
emaillink.onmouseover=hover;
emaillink.onmouseout=cleardesc;
complainlink = document.getElementById("two");
complainlink.onmouseover=hover;
complainlink.onmouseout=cleardesc;
