// ckEditor
CKEDITOR.replace('editor');

// show Image
function showMyImage(fileInput) {
    var files = fileInput.files;
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var imageType = /image.*/;
        if (!file.type.match(imageType)) {
            continue;
        }
        var img = document.getElementById("output");
        img.file = file;
        var reader = new FileReader();
        reader.onload = (function (aImg) {
            return function (e) {
                aImg.src = e.target.result;
                aImg.setAttribute('style', "width:100%;height=100%")
            };
        })(img);
        reader.readAsDataURL(file);
    }
}

// drag and drop
// function allowDrop(ev) {
//     ev.preventDefault();
// }

// function drag(ev) {
//     ev.dataTransfer.setData("text", ev.target.id);
// }

// function drop(ev) {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("text");
//     ev.target.appendChild(document.getElementById(data));
// }

function allowDrop(ev) {
    ev.preventDefault();
    ev.stopPropagation()
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev, el) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    el.appendChild(document.getElementById(data));
}