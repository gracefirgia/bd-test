let n = 0;
let input = [];

function clickButton() {

    if(n <= 3) {
        input[n] = document.getElementById('nama').value
        n++;
        document.getElementById('nama').value = ""
        show()
        if(n==3) {
            document.getElementById('submitButton').innerHTML = `Teams Ready!`
        } else {
            document.getElementById('submitButton').innerHTML = `Need ${3-n} more people`

        }
    } else {
        
    }
}

function show() {
    for(i=0;i<input.length;i++) {
        document.getElementById('inputedNama1').value = `- ${input[0]}`;
        document.getElementById('inputedNama2').value = `- ${input[1]}`;
        document.getElementById('inputedNama3').value = `- ${input[2]}`;
    
    }
}

function submitButton() {
    let modal = document.getElementById('modalBox')

    if(n==3) {
        if(modal.style.display === "none") {
            modal.style.display = "block"

        } else {
            modal.style.display = "none"
        }
    }
}
