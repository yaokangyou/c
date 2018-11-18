// JavaScript Document
function Toggle(e) {
   // Don't try this in old browsers
   if (!document.getElementById) return;
   // Get the event object
   if (!e) var e = window.event;
   // Which link was clicked?
   whichlink = (e.target) ? e.target.id : e.srcElement.id;
   // get the menu object
   obj=document.getElementById(whichlink+"menu");
   // Is the menu visible?
   visible=(obj.style.display=="block")
   // Get the key object (the link itself)
   key=document.getElementById(whichlink);
   // Get the name (Products, Contact, etc.)
   keyname = key.firstChild.nodeValue.substring(3);
   if (visible) {
     // hide the menu
     obj.style.display="none";
     key.firstChild.nodeValue = "[+]" + keyname;
   } else {
     // show the menu
     obj.style.display="block";
     key.firstChild.nodeValue = "[-]" + keyname;
   }
}
document.getElementById("products").onclick=Toggle;
