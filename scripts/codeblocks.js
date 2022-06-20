function syntaxHighlights() {
    var ca = document.getElementsByTagName("code");
    for(var i=0; i < ca.length; i++){
        var data = ca[i].innerHTML;
        data = data.replace(/out(.*?)/g, "<span class='code-keyword'>out$1</span>");
        data = data.replace(/"(.*?)"/g, '<span class="code-str">"$1"</span>');
        data = data.replace(/--(.*?)\n/g, '<span class="code-comment">-- $1 \n</span>');
        console.log(data);
        ca[i].innerHTML = data;
    }
}

window.addEventListener('load', syntaxHighlights);