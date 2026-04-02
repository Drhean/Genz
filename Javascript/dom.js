document.getElementById("myfrm").addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById("UserName").value;
    let password = document.getElementById("Password").value;
    let email = document.getElementById("Email").value;

    let show = ``;

    show = `<tr>
                <td>${name}</td>
                <td>${password}</td>
                <td>${email}</td>
            </tr>`;

    document.getElementById("get-data").innerHTML += show;
});