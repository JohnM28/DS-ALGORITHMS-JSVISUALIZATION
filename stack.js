class StackNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
};

class Stack {
    constructor() {
        this.root = null;
        this.stackLength = 0;  
    }

    len = () => this.stackLength;

    isEmpty = () => this.stackLength === 0;

    push = (node) => {
        let oldRoot = this.root;
        this.root = new StackNode(node);
        this.root.next = oldRoot;
        this.stackLength++;
    }

    pop = () => {
        if (this.isEmpty()) return null;

        let oldRoot = this.root;
        this.root = oldRoot.next;
        this.stackLength--;
        return oldRoot.value;
    }
};

let
    stackBlock  = document.getElementById('stack'),
    stackItems  = document.getElementById('stack_items'),
    empty = document.getElementById("empty"),
    stack       = undefined;

function creatStack(){
    if (stackBlock !== null) {
        stack = new Stack();
        stackBlock.classList.remove('displaynone');
        con('> Stack has been created');

    }
}
function pushEle(){
    let valueOfNode = String(document.getElementById('value').value);

    if (valueOfNode.length === 0 ) {
        console.log("incorrect")
        con(">invalid input");

    } else {
        stack.push(valueOfNode);
        console.log(stackItems)


    if (!stack.isEmpty()){
        empty.classList.add('displaynone')
    }

    let node = document.createElement('div');
    node.classList.add('stack-item');
    let text = document.createTextNode(valueOfNode);
    node.appendChild(text);
      
    stackItems.insertBefore(node, stackItems.firstChild);
    let msg = "> node with value " + valueOfNode+" has been pushed to the stack ";
    con(msg);
    document.getElementById('value').value = '';
    document.getElementById('value').focus();
    // console.log(document.getElementsByClassName('stack-item')[0]);
}}
function popEle(){
    let 
    popedNode = stack.pop(),
    targetNode = document.getElementsByClassName('stack-item')[0];
    targetNode.parentNode.removeChild(targetNode);
    let msg = "> node with value "+ popedNode +" has been poped from the stack"
    con(msg);
    if (stack.isEmpty()){
        empty.classList.remove('displaynone');
        con(">stack is empty")

    }

if (stack.isEmpty()) empty.classList.remove('displaynone');


}
let output = document.getElementById("console"),
    outputdiv = "";

function con(msg){
        outputdiv += '<div class="output-item">'+ msg+'</div>' ;
        output.innerHTML= outputdiv;
}
