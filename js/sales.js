function additional_information() {
    document.getElementById('additional_information').style.display = "none";
    document.getElementById('field_additional_information').style.display = "block";
    document.getElementById('application-name-field').style.top = "243px";
    document.getElementById('comment-field-text').style.top = "310px";
}

function open_popup() {
    document.getElementById('openModal').style.display = "block";
}

function close_popup() {
    document.getElementById('openModal').style.display = "none";
}

function add_form() {
    var newOrder = {};
    newOrder.isUpdate = document.getElementById('is-upd').value;
    newOrder.withPublication = document.getElementById('with-publication').value;
    newOrder.isPushesIncluded = document.getElementById('is-push-included').value;
    newOrder.phone = document.getElementById('phone').value;
    newOrder.email = document.getElementById('e-mail').value;
    newOrder.text = document.getElementById('text_dop').value;
    newOrder.game = document.getElementById('name_game').value;
    newOrder.comment = document.getElementById('comment').value;
    console.log(newOrder);
    console.log(JSON.stringify(newOrder));
}