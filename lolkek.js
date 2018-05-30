document.getElementById('nav').onmousedown = function (event) { 
    var target = event.target;
    if (target.className == 'menu-item') {
        var s = target.getElementsByClassName('submenu');
        closeMenu();
        s[0].style.display = 'block';
    }
}
document.onmouseover = function (event) {
    var target = event.target;
    if (target.className != 'menu-item' && target.className != 'submenu') {
        closeMenu();
    }
}

function closeMenu() {
    var menu = document.getElementById('nav');
    var submenu = document.getElementsByClassName('submenu');
    for (var i = 0; i < submenu.length; i++){
        submenu[i].style.display = 'none';
    }
}