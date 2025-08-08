console.log("Let's get DAS CNAS web version done!");

const today = new Date();
document.getElementById("annee-reference").value = Number(today.getFullYear())-1;
document.getElementById("date-depot").value = String(today.getFullYear()) + "-"  + String((today.getMonth() + 1 )).padStart(2,"0") + "-" + String(today.getDate()).padStart(2,"0") ;

let lineCount = 1;
const tb = document.getElementById("st-body");
// Add new line on Salariés table

const addLineBtn = document.getElementById("add-line");

function addLine() {
    lineCount++;
    const lineHTML = `<tr id="line-${lineCount}">
            <td><input type="number" name="line-n" id="line-n${lineCount}" value="${lineCount}" min="1" max="99" readonly></td>
            <td><input type="number" name="n-ss" id="n-ss"></td>
            <td><input type="date" name="bd" id="bd" ></td>
            <td><input type="text" name="f-name" id="f-name"></td>
            <td><input type="text" name="l-name" id="l-name"></td>
            <td><input type="number" name="d-t1" id="d-t1" max="90" min="1"></td>
            <td><select name="du-t1" id="du-t1">
              <option value="M">M</option>
              <option value="J">J</option>
            </select></td>
            <td><input type="number" name="amount-t1" id="amount-t1"></td>
            <td><input type="number" name="d-t2" id="d-t2" max="90" min="1"></td>
            <td><select name="du-t2" id="du-t2">
              <option value="M">M</option>
              <option value="J">J</option>
            </select></td>
            <td><input type="number" name="amount-t2" id="amount-t2"></td>
            <td><input type="number" name="d-t3" id="d-t3" max="90" min="1"></td>
            <td><select name="du-t3" id="du-t3">
              <option value="M">M</option>
              <option value="J">J</option>
            </select></td>
            <td><input type="number" name="amount-t3" id="amount-t3"></td>
            <td><input type="number" name="d-t4" id="d-t4" max="90" min="1"></td>
            <td><select name="du-t4" id="du-t4">
              <option value="M">M</option>
              <option value="J">J</option>
            </select></td>
            <td><input type="number" name="amount-t4" id="amount-t4"></td>
            <td><input type="number" name="general-amount" id="general-amount" readonly></td>
            <td><input type="date" name="e-date" id="e-date"></td>
            <td><input type="date" name="s-date" id="s-date"></td>
            <td><button class="del-btn" id="${lineCount}">Sup. Ligne</button></td>
          </tr>`;
    
    tb.innerHTML += lineHTML;
    addListnerToDelBtn();
}

addLineBtn.addEventListener("click", addLine);

// Delete existing line on Salariés table

function lineNumRefresh(){
    lineCount--;
    for(i = 1; i <= lineCount; i++){
        const j = document.getElementById("line-n" + i);
        if(!j){
            const k = document.getElementById("line-n" + (i+1));
            k.value = i;
            k.id = "line-n" + i;
        }
    }
};

function deleteLine (line) {
    const targetLine = document.getElementById("line-" + line);
    tb.removeChild(targetLine);
    lineNumRefresh();
    addListnerToDelBtn();
};

function addListnerToDelBtn () {
    for (let i = 1; i <= lineCount; i++){
        let j = document.getElementById(i);
        j.addEventListener("click", () => {
            deleteLine(i)
        })
    }
};

addListnerToDelBtn();
