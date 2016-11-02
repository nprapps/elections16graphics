var pjaxLinks = document.querySelectorAll('a[data-pjax-nav]');

var dispatchPjaxClick = function(e) {
    e.preventDefault();
    if (pymChild) {
        pymChild.sendMessage('navigate', e.target.href);
    }
}

for (var i = 0; i < pjaxLinks.length; i++) {
    var link = pjaxLinks[i];
    link.addEventListener('click', dispatchPjaxClick, false);
}
