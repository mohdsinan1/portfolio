function sendEmail() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let params = {
        name: name,
        email: email,
        message: message,
    }
    const serviceId = 'service_g1ix1qc';
    const tempId = 'template_4k76vfa';
    emailjs.send(serviceId, tempId, params).then((res) => {
        document.getElementById("name").value = ''
        document.getElementById("email").value = ''
        document.getElementById("message").value = '';
        console.log(res);

        alert("Message send successful")
    }).catch((err) => console.log(err)
    )
}