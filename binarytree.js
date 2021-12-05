var node = 0
var lin_num = 1
var but = 1


function show() {
    document.getElementById("but"+ but).disabled = true;
    but++;
    console.log(but)
    if(but<9){
        document.getElementById("but"+ but).disabled = false;
    }
    console.log(document.getElementById('but1').textContent)
    var number = document.getElementById('number'+node);
    if(node!=0){
      var line =document.getElementById('line'+lin_num)
      lin_num++
    }
    node++;
    number.classList.add("show");
    line.classList.add("show");


}

var root

function trace() {
    const comment = document.getElementById('comment')
    const algo = document.getElementById('algo')
    var current_node
    let new_node = parseInt(document.getElementById('but' + but).textContent)
    if (node === 0) {
        root = new_node
        comment.textContent = "no current node, " + root + " made root node"
        algo.innerHTML =
            "<pre>" + " if root = ø" + "\n" +
            "root ← node(value)" + "</pre>";
    } else if (new_node > root) {
        current_node = new_node
        comment.textContent = " current_node " + current_node + " is bigger than " + root + " ,node goes to right"
        algo.innerHTML =
            "<pre>" + "if value > current.value" + "\n" +
            "if current.right = ø" + "\n" + " current.right ← node(value)" + "</pre>";
    } else {
        current_node = new_node
        comment.textContent = " current_node " + current_node + " is smaller than " + root + " ,node goes to left"
        algo.innerHTML =
            "<pre>" + "if value < current.value" + "\n" +
            "if current.left = ø" + "\n" + " current.left ← node(value)" + "</pre>";
    }
}

function lazytrace1(){
    comment.textContent = " current_node 5" + " is smaller than " + root + " and 8" + ", node goes to left then left"
    algo.innerHTML =
        "<pre>" + "if value < current.value" + "\n" +
        "if current.left = ø" + "\n" + " current.left ← node(value)" + "\n" + "else InsertNode(current.left, value)" + "</pre>";
}

function lazytrace2(){
    comment.textContent = " current_node 10" + " is smaller than " + root + " and bigger than 8" + ", node goes to right then left"
    algo.innerHTML =
        "<pre>" + "if value < current.value" + "\n" +
        "if current.left = ø" + "\n" + " current.left ← node(value)" + "\n" + "else" + "\n" + "if current.right = ø current.right ← node(value)" + "\n" + "else InsertNode(current.right, value)" + "</pre>";
}

function lazytrace3(){
    comment.textContent = " current_node 16" + " is bigger than " + root + " and smaller than 16" + ", node goes to left then right"
    algo.innerHTML =
        "<pre>" + "if value > current.value" + "\n" +
        "if current.right = ø" + "\n" + " current.right ← node(value)" + "\n" +    "if current.left = ø" + "\n" + " current.left ← node(value)" + "\n" +"</pre>";
}

function lazytrace4(){
    comment.textContent = " current_node 18" + " is bigger than " + root + " and bigger than 18" + ", node goes to left then right "
    algo.innerHTML =
        "<pre>" + "if value < current.value" + "\n" +
        "if current.right = ø" + "\n" + " current.right ← node(value)" + "\n" + "if current.right = ø current.right ← node(value)" + "\n" + "else InsertNode(current.right, value)" +"</pre>";
}

function lazytrace5(){
    comment.textContent = " current_node 13" + " is smaller than " + root + " and bigger than 8" + " and bigger than 10" + ", node goes to left then right then right"
    algo.innerHTML =
        "<pre>" + "if value < current.value" + "\n" +
        "if current.left = ø" + "\n" + " current.left ← node(value)" + "\n" + "else" + "\n" + "if current.right = ø current.right ← node(value)" + "\n" + "else InsertNode(current.right, value)" + "</pre>";
}

// function clear() {
//     comment.textContent = " s"
//     algo.innerHTML = "s "
//     for (let i = 1; i < but; i++){
//         var z = 0
//         document.getElementById("but"+ i).disabled = true;
//         line =document.getElementById('line'+i)
//         number = document.getElementById('number'+z)
//         number.classList.remove("show");
//         line.classList.remove("show");
//         z++
//     }
//     node = 0
//     lin_num = 1
//     but = 1
// }