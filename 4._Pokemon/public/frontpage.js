fetch("/pokemon")
.then(response => response.json())
.then(result => console.log(result));