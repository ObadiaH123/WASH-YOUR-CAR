let table =document.getElementById("table");
let button=document.getElementById("button");



button.onclick() =function(change){
    //shrink the table
    if (table.className==change){
        table.className="";
        table.innerHTML="Show Table";
    }else{
        table.className="change";
        table.innerHTML="Hide Table";
    }
};
