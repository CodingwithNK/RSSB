
const imgBtn = document.getElementById('eyeImg');
const password = document.getElementById('usrPass');

imgBtn.addEventListener("click", function () {

    if (password.type == "password") {
        password.type = "text";
        imgBtn.src = "eye-open.png";
    } else {
        password.type = "password";
        imgBtn.src = "eye-close.png";
    }

});



const usrname = document.getElementById("usrname");
const usrPass = document.getElementById("usrPass");
const usrEmail = document.getElementById("usrEmail");

const loginBtn = document.getElementById("loginBtn");
const loginErrorMsg = document.getElementById("login-error-msg");
const submitMsg = document.getElementById("submit-msg");

const forgotBtn = document.getElementById("forgotBtn");

const loginUrl = "https://script.google.com/macros/s/AKfycbxgzr-1-8V5DSUGZvYfeUCWx_a5hsT3eeyV-NSbPZ0WNgJ0JDHvBblhP_HgZJQvy-oZxg/exec";

loginBtn.addEventListener("click", function (e) {
    e.preventDefault();

    try {

        if (usrname.value == "" && usrPass.value == "") {

            usrname.classList.add("nullError");
            usrPass.classList.add("nullError");


        } else {

            usrPass.classList.remove("nullError");
            usrname.classList.remove("nullError");


            fetch(loginUrl)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((data) => {
                    
                    let val1 = usrname.value;
                    let val2 = usrPass.value;

                    const matchingItem = data.content.find((item) => item.includes(val1) && item.includes(val2));

                    if (matchingItem) {
                        console.log('Matching item:', matchingItem);

                        const [username, password] = matchingItem;

                        // After successful authentication
                        const token = [username, password];
                        localStorage.setItem('token', token);

                        // When accessing a protected resource
                        const storedToken = localStorage.getItem('token');

                        if (storedToken) {

                            // Add code to handle successful login here
                            window.history.replaceState(null, null, 'home.html');
                            window.location.href = "home.html";

                        } else {
                            // Redirect to login page
                            window.history.replaceState(null, null, '/index.html');
                            window.location.href = "/index.html";

                        }

                    } else {
                        loginErrorMsg.innerHTML = "You Are Not In Our Database!";
                        setTimeout(() => {
                            loginErrorMsg.innerHTML = "";
                        }, 5000);
                    }
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });

        }

    } catch (error) {
        console.log("Error!", error);
    }


});


forgotBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (usrEmail.value == "") {

        usrEmail.classList.add("nullError");

    } else {

        usrEmail.classList.remove("nullError");

        fetch(loginUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                let val1 = usrEmail.value;

                data.content.forEach((item) => {
                    if (item.includes(val1)) {

                        var params = {
                            username: item[0],
                            password: item[1],
                            email: item[2],
                        };

                        const serviceId = "service_cs3iqpf";
                        const templateId = "template_rccpwct";

                        emailjs
                            .send(serviceId, templateId, params)
                            .then(() => {
                                submitMsg.innerHTML = "Password Has Been Sent To your Email Address!";
                                setTimeout(() => {
                                    submitMsg.innerHTML = "";
                                }, 5000);
                            })
                            .catch((err) => {
                                console.log('Error sending email:', err);
                            });
                    }
                });
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });

    }


});






