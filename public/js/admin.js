const links = document.querySelectorAll('#admin_link');
const adminShows = document.querySelectorAll('.admin_show');

links.forEach((link, ind) => {
    link.addEventListener('click', () => {
        if (adminShows[ind].style.display === "none") {
            adminShows.forEach(show => show.style.display = "none");
            adminMessages.forEach(messg => messg.style.display = "none");
            adminMessageBack.style.display = "none";

            adminShows[ind].style.display = "flex";
            dashboardMessages.style.display = "flex";

            myModal.style.display = "none";
        } else {
            adminShows.forEach(show => show.style.display = "none");
            adminMessages.forEach(messg => messg.style.display = "none");
            adminMessageBack.style.display = "none"

            // link.style.background = "";
            // link.style.color = ""
            dashboardMessages.style.display = "flex"
            adminShows[ind].style.display = "flex";
        }
    });
});

const messageHighlights = document.querySelectorAll('#dashboard_message');
const dashboardMessages = document.querySelector('#dashboard_messages');
const adminMessages = document.querySelectorAll('#admin_message');

for (let i = 0; i <= messageHighlights.length - 1; i++) {
    messageHighlights[i].addEventListener("click", ()=>{
        if (adminMessages[i].style.display === "none") {
            adminMessages[i].style.display = "block"
            dashboardMessages.style.display = "none"
            adminMessageBack.style.display = "flex"
        }else{
            adminMessages[i].style.display = "block"
            dashboardMessages.style.display = "none"
            adminMessageBack.style.display = "flex"

        }
    })
}


const adminMessageBack = document.getElementById("admin_message_back")
const modalClose = document.querySelector(".modal_close")
const replyClose = document.querySelector(".reply_close")
const myModal = document.getElementById("myModal")
const composeMessage = document.getElementById("compose_message")
const back = document.querySelector(".back_to_admin_messages")
const reply = document.querySelector(".reply_to_admin_messages")
const replyShow = document.querySelector("#reply_admin_messages")

back.addEventListener("click",()=>{
    dashboardMessages.style.display = "flex";
    adminMessages.forEach(messg => messg.style.display = "none");
    adminMessageBack.style.display = "none";
    replyShow.style.display = "none";

})
reply.addEventListener("click", ()=>{
    replyShow.style.display = "block"
})
replyClose.addEventListener("click", () => {
    replyShow.style.display = "none"
})

composeMessage.addEventListener("click",()=>{
    myModal.style.display = "block";
    composeMessage.background = "#bcd8f7";
    composeMessage.color = "#ac0561";
})
modalClose.addEventListener("click",()=>{
    myModal.style.display = "none";
})
