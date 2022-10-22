const signupFormHandler = async (event) => {
    event.preventDefault();

// const username = document.querySelector('#username-login').value.trim();
const first_name = document.querySelector('#first_name').value.trim();
const last_name = document.querySelector('#last_name').value.trim();
const email = document.querySelector('#email-login').value.trim();
const password = document.querySelector('#password-login').value.trim();

if (email && password) {
    //to do: sign up route
    const response = await fetch('/', {
        method: 'post',
        body: JSON.stringify({
          //username,
          first_name,
          last_name,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/pets');
      } else {
        alert('Failed to sign up');
      }
}
}
//changed the id these are pointing at so that they correspond with button id on homepage & main
document.querySelector('#signup-btn').addEventListener('submit', signupFormHandler);