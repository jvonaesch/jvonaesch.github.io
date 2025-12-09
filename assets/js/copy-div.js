// assets/js/copy-div.js

/*function copyTextOnClick(divId) {
    const text = document.getElementById(divId).innerText;
    const textarea = document.createElement("textarea");
    
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
}*/

function copyTextOnClick(divId) {
    const text = document.getElementById(divId).innerText;
    navigator.clipboard.writeText(text)
        .then(() => console.log('Copied to clipboard'))
        .catch(err => console.error('Copy failed:', err));
}