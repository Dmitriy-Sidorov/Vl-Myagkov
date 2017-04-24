var elements = document.getElementsByClassName('input');
fields = Object.keys(elements).map(function (key) { return elements[key]; });
var formData = fields.map(function(item) {
    return item.id + '=' + item.value;                     
    }).join('&');

xmlhttpRequest.onreadystatechange = function(item){
    if (xmlhttpRequest.readyState === xmlhttpRequest.DONE && xmlhttpRequest.status === 200){
        var response = JSON.parse(xmlhttpRequest.responseText);
        if(!responsa.result) {
            response.error.forEach(function(item, key){
                var correctKey = key.toLowerCase().replace(' ', '_');
                document.getElementById(correctKey + '_text').innerText = item;
            });
        }
    }
}
var button = document.getElementById('form');
button.onsubmint = function(event){
    event.preventDefault();
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "https://чгооор.рф/validator.php", true);
        xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        var formData = new FormData(document.getElementById('form'));
            xmlhttp.send(formData);
        console.log(xmlhttp.response);    
}