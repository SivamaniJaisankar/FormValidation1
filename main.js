const form=document.querySelector('#form')
const userName=document.querySelector('.username')
const email=document.querySelector('.email')
const password=document.querySelector('.password')
const cpassword=document.querySelector('.cpassword')
const btn=document.querySelector('.btn')

btn.addEventListener('click', (e)=>{
    e.preventDefault(); 
    validateInputs()
})


function validateInputs(){
    const userNameVal=userName.value.trim();
    const emailVal=email.value.trim();
    const passwordVal=password.value.trim();
    const cpasswordVal=cpassword.value.trim();

    
    //User Name
    if(userNameVal == '')
        setError(userName, 'Username cannot be null')
    else  
        setSuccess(userName)


    //Email
    if(emailVal == '')
        setError(email, 'Email cannot be null')
    else if (!validateEmail(emailVal))
        setError(email, 'Email is not valid')
    else
        setSuccess(email)

    //Password
    if(passwordVal == '')
        setError(password, 'Password cannot be null')
    else if(passwordVal.length , 8)
        setError(password, 'Password must be 8 characters long')
    else    
        setSuccess(password)

     
    //Confirm Password
    if(cpasswordVal == '')
        setError(cpassword, 'Confirm Password cannot be null')
    else if(cpassword != password)
        setError(cpassword, 'Password do not match')
    else    
        setSuccess(cpassword)
    
}

function setError(element, message){
    const pElement= element.parentElement;
    const errorElement= pElement.querySelector('.error');

    errorElement.innerText = message;
    pElement.classList.add('error')
    pElement.classList.remove('success');
}

function setSuccess(element){
    const pElement= element.parentElement;
    const errorElement= pElement.querySelector('.error');

    errorElement.innerText = '';
    pElement.classList.add('success')
    pElement.classList.remove('error');
}



const validateEmail = (email) => {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
    
}