function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.transform = 'right 1s ease-out';
    sidebar.style.right = 0;
}
function closeSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.transform = 'right 1s ease-out';
    sidebar.style.right = '-100%';
}
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 3){
        counter = 1;
    }
},7000)