var navOpt = document.getElementsByName('navmenu');

navOpt.forEach(function(p,u) {
    console.log(p)
    p.addEventListener('change', function() {
        for (var i = 0, length = navOpt.length; i < length; i++) {
            if (navOpt[i].checked) {
                let page = document.getElementById('pagevis');
                let opt = navOpt[i].value;
                page.value = opt;
                console.log(navOpt[i].value);
            }
        }
    })
})