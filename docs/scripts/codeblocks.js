function syntaxHighlights() {
    var ca = document.getElementsByTagName("code");
    for(var i=0; i < ca.length; i++){
        var data = ca[i].innerHTML;
        data = data.replace(/"(.*?)"/g, '<span style="color:#090">"$1"</span>');
        // data = data.replace(/-- (.*?) \n/g, '<span style="color:#999">-- $1 \n</span>');
        // data.replace(/out (.*?) \x20/g, '<span style="color:blue">out $1 \x20</span>');
        console.log(data);
        ca[i].innerHTML = data;
    }
}
body.onload = syntaxHighlights;