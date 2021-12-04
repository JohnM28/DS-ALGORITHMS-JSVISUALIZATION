class Queue {
    constructor() {
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }

    enqueue(item) {
        this.items[this.tailIndex] = item;
        this.tailIndex++;
    }

    dequeue() {
        const item = this.items[this.headIndex];
        delete this.items[this.headIndex];
        this.headIndex++;
        return item;
    }

    peek() {
        return this.items[this.headIndex];
    }

    get length() {
        return this.tailIndex - this.headIndex;
    }
    isEmpty = () => this.length === 0;
}
let
queueblock  = document.getElementById('queue'),
queueItems  = document.getElementById('queue_items'),
empty = document.getElementById("empty"),
queue = undefined;

function creatQueue(){
    if (queueblock !== null) {
    queue= new Queue();
    queueblock.classList.remove('displaynone');
    con('> queue has been created');
}
}
function queueEle(){
    let valueOfNode = String(document.getElementById('value').value);

if (valueOfNode.length === 0) {
console.log("incorrect")
con("> invalid input");
} else {
    queue.enqueue(valueOfNode);

    if (!queue.isEmpty()){
         empty.classList.add('displaynone')
    }

    let node = document.createElement('div');
    node.classList.add('queue-item');
    let text = document.createTextNode(valueOfNode)
    node.appendChild(text)
    node.style.textAlign ="center";
  
    queueItems.appendChild(node);
    let msg = "> node with value " + valueOfNode+" has been added to the queue ";
con(msg);


document.getElementById('value').value = '';
document.getElementById('value').focus();
}}
function dequeueEle(){
let 
removedNode = queue.dequeue(),

targetNode = document.getElementsByClassName('queue-item')[0];

targetNode.parentNode.removeChild(targetNode);
let msg = "> node with value "+ removedNode +" has been dequeued out of the queue"
con(msg);
if (queue.isEmpty()){ empty.classList.remove('displaynone');
con(">stack is empty")
}

}
let output = document.getElementById("console"),
outputdiv = "";

function con(msg){
outputdiv += '<div class="output-item">'+ msg+'</div>' ;
output.innerHTML= outputdiv;
}