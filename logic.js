let myLeads=[];
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const ulEl = document.getElementById("ul-el");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    rander();
}
function rander()
{
    let mylist = "";
    for (i=0;i<myLeads.length;i++)
    {
        mylist += "<li>"+myLeads[i]+"</li>";
    }
    ulEl.innerHTML = mylist;
}

inputBtn.addEventListener("click",function (){
    myLeads.push(inputEl.value);
    inputEl.value = "";

    //store values in the local storage.
    localStorage.setItem("myLeads" , JSON.stringify(myLeads));
    rander();
})


tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active :true , currentWindow: true},function (tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads" , JSON.stringify(myLeads));
        rander();
    });
    
})
deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear() ;
    myLeads = [];
    rander();
})

