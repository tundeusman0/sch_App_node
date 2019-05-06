const Faculties = {
    "Languages": ["Yoruba", "English", "Arabic"],
    "Sciences": ["Computer Science", "Bio-chem", "Geology"],
    "Humanity": ["Business Admin", "Political science", "History"],
}

// window.onload = function () {
var faculty = document.getElementById("faculty"),
    dept = document.getElementById("dept");

for (var facult in Faculties) {
    faculty.options[faculty.options.length] = new Option(facult, facult);
}
faculty.onchange = function () {
    dept.length = 1; // remove all options bar first
    if (this.selectedIndex < 1) return; // done
    Faculties[faculty.value].forEach(dist => {
        var dis = dist
        dept.options[dept.options.length] = new Option(dis, dis);
    })
}

// }

const allDept = document.querySelectorAll("#record");
const form = document.getElementById("myForm");
const output = document.getElementById("output");

console.log(allDept)
form.addEventListener("submit", (e) => {
    e.preventDefault()
    for (let eachDept of allDept) {
        if (dept.value === eachDept.className) {
            allDept.forEach(dept => dept.style.display = "none")
            eachDept.style.display = "block";
            output.style.display = "none";

        }

    }

})