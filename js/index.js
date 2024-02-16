var postContain;

document.getElementById('textArea').addEventListener('keyup', function (event) {
    if (event.target.value.length >= 20) {
        document.getElementById('btn-post').removeAttribute('disabled');
    }
    postContain = document.getElementById('textArea').value;
});


document.getElementById('btn-post').addEventListener("click", function () {
    document.getElementById('mainSection').style.display = "none";
    document.getElementById('popUpSection').style.display = "block";

    document.getElementById('textArea').value = "";
});

document.getElementById('btn-confim').addEventListener("click", function () {

    var userName = document.getElementById('userName').value;
    document.getElementById('userName').value = "";

    var password = document.getElementById('password').value;

    document.getElementById('password').value = "";

    if (password === "admin") {
        document.getElementById('mainSection').style.display = "block";
        document.getElementById('popUpSection').style.display = "none";

        post(userName);
    }
    else {
        console.log("password wrong....");
    }

});

function post(userName) {
    document.getElementById('post').style.display = "block";
    document.getElementById('user').innerText = userName;
    document.getElementById('postContain').innerText = postContain;
}