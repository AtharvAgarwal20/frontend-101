const checkboxes = document.querySelectorAll('input')
let isCheckedArray = []
let keydownChecker = null

function lastChecked() {
    if (isCheckedArray.length > 0) {
        let checkboxesArray = Array.from(checkboxes)
        for (let checkbox of checkboxes) {
            if (checkbox.id === isCheckedArray[isCheckedArray.length - 1]) {
                return checkboxesArray.indexOf(checkbox)
            }
        }
    }
    else if (isCheckedArray.length === 0) {
        return isCheckedArray.length
    }
}

function secondLastChecked() {
    if (isCheckedArray.length > 0) {
        let checkboxesArray = Array.from(checkboxes)
        for (let checkbox of checkboxes) {
            if (checkbox.id === isCheckedArray[isCheckedArray.length - 2]) {
                return checkboxesArray.indexOf(checkbox)
            }
        }
    }
    else if (isCheckedArray.length === 0) {
        return isCheckedArray.length
    }
}

window.addEventListener('keydown', e => {
    if (e.code === "ShiftLeft") {
        keydownChecker = true
    }
    else {
        keydownChecker = false
    }
})

window.addEventListener('keyup', () => {
    keydownChecker = false
})

for (let checkbox of checkboxes) {
    checkbox.addEventListener('click', () => {
        if (keydownChecker) {
            let last = lastChecked()
            let secondLast = secondLastChecked()
            console.log(isCheckedArray)
            console.log(secondLast)
            let checkboxesArray = Array.from(checkboxes)
            if (checkbox.checked !== false && last < checkboxesArray.indexOf(checkbox)) {
                console.log("Loop 1")
                for (let i = last; i < checkboxesArray.indexOf(checkbox); i++) {
                    if (checkboxes[i].checked === false) {
                        checkboxes[i].checked = true
                    }
                }
            }
            else if (checkbox.checked !== false && last > checkboxesArray.indexOf(checkbox)) {
                console.log("Loop 2")
                for (let j = last - 1; j > checkboxesArray.indexOf(checkbox); j--) {
                    if (checkboxes[j].checked === false) {
                        checkboxes[j].checked = true
                    }
                }
            }
            else if (checkbox.checked !== true && secondLast < checkboxesArray.indexOf(checkbox)) {
                console.log("Loop 3")
                checkbox.checked = true
                for (let checkbox2 of checkboxes) {
                    if (checkboxesArray.indexOf(checkbox2) > checkboxesArray.indexOf(checkbox)) {
                        checkbox2.checked = false
                    }
                }
            }
            else if (checkbox.checked !== true && secondLast > checkboxesArray.indexOf(checkbox)) {
                console.log("Loop 4")
                checkbox.checked = true
                for (let checkbox2 of checkboxes) {
                    if (checkboxesArray.indexOf(checkbox2) < checkboxesArray.indexOf(checkbox)) {
                        checkbox2.checked = false
                    }
                }
            }
        }
        else {
            for (let checkboxes2 of checkboxes) {
                if (checkboxes2 !== checkbox) {
                    checkboxes2.checked = false
                    checkbox.checked = true
                }
            }
            console.log(isCheckedArray)
        }
    })
}

for (let checkbox of checkboxes) {
    checkbox.addEventListener('click', () => {
        isCheckedArray.push(checkbox.id)
        if (isCheckedArray.length >= 3) {
            isCheckedArray.splice(0, isCheckedArray.length - 2)
        }
        console.log(isCheckedArray)
    })
}