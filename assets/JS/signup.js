const signupform = document.querySelector('#formulario')

signupform.addEventListener('submit', (e) =>{
    e.preventDefault()

    const name = document.querySelector('#nombre').value
    const apellido = document.querySelector('#apellido').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#contraseña').value

    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistered = Users.find(user => user.email === email)

    if (isUserRegistered){
        return alert('El usuario ya está registrado')
    }

    Users.push({name: name, apellido: apellido, email: email, password: contraseña})
    localStorage.setItem('users'. JSON.stringify(Users))
    alert ('Registro exitoso')

})