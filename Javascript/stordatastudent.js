    let students = [
        {fname: "", lname: "", country: "", score: 100},
        {fname: "", lname: "", country: "", score: 99}
    ];

    function addStudent() {
        let fname = document.getElementById("fname").value;
        let lname = document.getElementById("lname").value;
        let country = document.getElementById("country").value;
        let score = document.getElementById("score").value;

        if(fname === "" || lname === "" || score === "") {
            alert("Please fill all fields!");
            return;
        }

        students.push({fname, lname, country, score});

        alert("Student added successfully!");
        clearForm();
        showStudents();
    }

    function showStudents() {
        let table = document.getElementById("tableBody");
        table.innerHTML = "";

        students.forEach((stu, index) => {
            table.innerHTML += `
                <tr>
                    <td>${stu .fname}</td>
                    <td>${stu.lname}</td>
                    <td>${stu.country}</td>
                    <td>${stu.score}</td>
                    <td>
                        <button class="btn btn-danger btn-sm" onclick="deleteStudent(${index})">Delete</button>
                    </td>
                </tr>
            `;
        });
    }

    

    function searchStudent() {
        let keyword = prompt("Enter First Name to search:");

        let result = students.filter(stu =>
            stu.fname.toLowerCase().includes(keyword.toLowerCase())
        );

        let table = document.getElementById("tableBody");
        table.innerHTML = "";

        result.forEach((stu, index) => {
            table.innerHTML += `
                <tr>
                    <td>${stu.fname}</td>
                    <td>${stu.lname}</td>
                    <td>${stu.country}</td>
                    <td>${stu.score}</td>
                    <td>
                        <button class="btn btn-danger btn-sm" onclick="deleteStudent(${index})">Delete</button>
                    </td>
                </tr>
            `;
        });
    }

    function clearForm() {
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("score").value = "";
    }
    showStudents();
    function deleteStudent(index) {
        students.splice(index, 1);
        showStudents();
    }
