const links = document.querySelectorAll('#tab_click');
const adminShows = document.querySelectorAll('.show_tab');

links.forEach((link, ind) => {
    link.addEventListener('click', () => {
        if (adminShows[ind].style.display === "none") {
            adminShows.forEach(show => show.style.display = "none");
            // inboxMessagesDetails.forEach(messg => messg.style.display = "none");
            // adminMessageBack.style.display = "none";

            adminShows[ind].style.display = "flex";
            // inboxMessage.style.display = "flex";

            // myModal.style.display = "none";
        } else {
            adminShows.forEach(show => show.style.display = "none");
            // inboxMessagesDetails.forEach(messg => messg.style.display = "none");
            // adminMessageBack.style.display = "none"

            // inboxMessage.style.display = "flex"
            adminShows[ind].style.display = "flex";
        }
    });
});

const inboxex = document.querySelectorAll('.inbox');
const inboxMessage = document.querySelector('.inbox_messages');
const inboxesHeader = document.querySelector('.inboxes_header');
const inboxHeader = document.querySelector('#inbox_mssg_view_response');
const inboxMessagesDetails = document.querySelectorAll('#inbox_mssg_view');

for (let i = 0; i <= inboxex.length - 1; i++) {
    inboxex[i].addEventListener("click", () => {
        if (inboxMessagesDetails[i].style.display === "none") {
            inboxMessagesDetails[i].style.display = "block"
            inboxMessage.style.display = "none"
            inboxHeader.style.display = "flex"
            // inboxesHeader.style.display = "none"
        } else {
            inboxMessagesDetails[i].style.display = "block"
            inboxMessage.style.display = "none"
            inboxHeader.style.display = "flex"
            // inboxesHeader.style.display = "none"


        }
    })
}

const backToInbox = document.querySelector(".back_to_inbox_messages")
const replyToInbox = document.querySelector(".reply_to_inbox_messages")
const modalClose = document.querySelector(".modal_close")
const replyClose = document.querySelector(".reply_close")
const myModal = document.getElementById("myModal")
const composeMessage = document.querySelector(".send_message")
const replyShow = document.querySelector(".reply_inbox_messages")
const fa_camera = document.querySelector(".fa-camera")
const register = document.querySelector("#register")

backToInbox.addEventListener("click",()=>{
    inboxMessage.style.display = "block"
    inboxMessagesDetails.forEach(messg => messg.style.display = "none");
    inboxHeader.style.display = "none"
    replyShow.style.display = "none"

    // inboxesHeader.style.display = "flex"

});

replyToInbox.addEventListener("click", () => {
    replyShow.style.display = "flex"
    register.style.background ="none"
})
replyClose.addEventListener("click", () => {
    replyShow.style.display = "none"
})

composeMessage.addEventListener("click", () => {
    myModal.style.display = "flex";
    composeMessage.background = "#bcd8f7";
    composeMessage.color = "#ac0561";
})
modalClose.addEventListener("click", () => {
    myModal.style.display = "none";
})

fa_camera.addEventListener("click",()=>{
    document.getElementById("file1").click();
})

const print = document.querySelector("#print")
const courses = document.querySelector("#courses").innerHTML;
const print_result = document.querySelector("#print_result")
const results = document.querySelector(".results").innerHTML;

print_result.addEventListener("click", () => {
    document.body.innerHTML = results;
    window.print();
    document.location.reload(true)
})
print.addEventListener("click",()=>{
    document.body.innerHTML = courses;
    window.print();
    document.location.reload(true)
})

const exams = document.querySelector("#exams")
const sittings = document.querySelector(".second_sitting")
exams.addEventListener("click",()=>{
    if (exams.options.selectedIndex === 1) {
        sittings.style.display = "flex"
    } else {
        sittings.style.display = "none"
    }
})
