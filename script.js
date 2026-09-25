const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        alert("Registration successful for " + name);

        console.log("Name:", name);
        console.log("Email:", email);
    });
}


const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Login successful!");

        window.location.href = "dashboard.html";
    });
}


const blogForm = document.getElementById("blogForm");

if (blogForm) {

    blogForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const title = document.getElementById("blogTitle").value;
        const content = document.getElementById("blogContent").value;

        console.log("Blog Title:", title);
        console.log("Blog Content:", content);

        alert("Blog published successfully!");

        blogForm.reset();
    });
}