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
    
    tb.insertAdjacentHTML('beforeend',lineHTML);
    listenDelBtn(lineCount);
}

addLineBtn.addEventListener("click", addLine);

// Refeching lines numbers count when a line has been deleted

function lineNumRefresh(){
  for(i = 1; i <= lineCount; i++){
      const linearCurrentLine = document.getElementById("line-" + i);
      // Change Line ID only If the incremental counting is interrupted
      if(!linearCurrentLine) {        
        const jumpLine = document.getElementById("line-" + (i+1));
        const inputLineNum = document.getElementById("line-n" + (i+1));
        const delLineBtn = document.getElementById(i+1);
        
        inputLineNum.value = i;
        inputLineNum.id = "line-n" + i;
        jumpLine.id = "line-" + i;
        delLineBtn.id = i; 
      }
  }
};

// Delete existing line on Salariés table

function listenDelBtn (id) {
  const btn = document.getElementById(id);
  btn.addEventListener("click", ()=>{
    // Getting the associated Line (TR) to the clicked BTN by using CLOSEST() method
    const line = btn.closest("tr");
    line.remove();
    lineCount--;
    lineNumRefresh();
  })
}

listenDelBtn(1);
