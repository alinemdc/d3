

function exibir(){

    let left = document.getElementById("left");
    let right = document.getElementById("right");

    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(
        response => response.json()
    )
    .then(data => {
        for(i=0;i<51;i++){

            left.innerHTML = left.innerHTML + "<section>" + "<p>" + data[i].id + "</p>" + "<p>" + data[i].title + "</p>" +  "<p>" + data[i].body + "</p>" + "</section>"
        }
        for(i=0;i>50;i++){

            right.innerHTML = right.innerHTML + "<section>" + "<p>" + data[i].id + "</p>" + "<p>" + data[i].title + "</p>" +  "<p>" + data[i].body + "</p>" + "</section>"
        }
        
        
        }
    )
    .catch(error => console.error(error))

}
