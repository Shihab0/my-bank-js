const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', function(){
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;
    
    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;
    
    if(typeof email === 'string' && typeof password === 'string'){
        window.location.href = 'bank.html'
    }else{
        alert('password can be any number');
    }
})