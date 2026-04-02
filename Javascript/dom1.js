document.getElementById("Scoreform").addEventListener("submit", (e)=> {
    e.preventDefault(); 

  
    let name = document.getElementById("Name").value;
    
    let html = document.getElementById("HTML").value;
    let css = document.getElementById("CSS").value;
    let bootstrap = document.getElementById("BOOSTRAP").value;
    let js = document.getElementById("JAVASCRIPT").value;

   
    let show = ``;

       show=+` <tr>
            <td>${name}</td>
            
            <td>${html}</td>
            <td>${css}</td>
            <td>${bootstrap}</td>
            <td>${js}</td>
        </tr>`;

    
    document.getElementById("get-data").innerHTML += show;

   
});