document.addEventListener('DOMContentLoaded', () => {
    // Input element references
    const nameInput = document.getElementById('name-id');
    const usernameInput = document.getElementById('username-id');
    const emailInput = document.getElementById('email-id');
    const phoneInput = document.getElementById('number-id');
    const passwordInput = document.getElementById('password-id');
    const confirmPasswordInput = document.getElementById('confirm-id');
    const formvalue=document.getElementById('form-id')
    
    // Name validation
    nameInput.addEventListener('blur', () => {
      const nameValue = nameInput.value.trim(); // Trim leading/trailing whitespace
      const messageElement = document.getElementById('firstpid');
      const nameRegex = /[a-zA-Z0-9]{3,}/ // Minimum 3 letters
  if (nameRegex.test(nameValue)){
  nameInput.style.borderColor= 'green';
  messageElement.textContent= '';
  } else {
  nameInput.style.borderColor = 'red';
  nameInput.classList.add('shake');
  messageElement.textContent = 'Name must be at least 3 letters long\.';
  messageElement.style.color= 'red';
  setTimeout(()=> nameInput.classList.remove('shake'), 500);
  }
  });
  // Username validation
  usernameInput.addEventListener('blur', () => {
  const usernameValue = usernameInput.value.trim();
  const messageElement = document.getElementById('secondpid');
  const usernameRegex = /^[a-zA-Z0-9]/;
  
      if (usernameRegex.test(usernameValue)) {
        usernameInput.style.borderColor = 'green';
        messageElement.textContent = '';
      } else {
        usernameInput.style.borderColor = 'red';
        usernameInput.classList.add('shake');
        messageElement.textContent = 'Username can only contain letters and numbers.';
        messageElement.style.color = 'red';
        setTimeout(() => usernameInput.classList.remove('shake'), 500);
      }
    });
  
    // Email validation
    emailInput.addEventListener('blur', () => {
      const emailValue = emailInput.value.trim();
      const messageElement = document.getElementById('thirdpid');
      const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
  
      if (emailRegex.test(emailValue)) {
        emailInput.style.borderColor = 'green';
        messageElement.textContent = '';
      } else {
        emailInput.style.borderColor = 'red';
        emailInput.classList.add('shake');
        messageElement.textContent = 'Please enter a valid email address.';
        messageElement.style.color = 'red';
        setTimeout(() => emailInput.classList.remove('shake'), 500);
      }
    });
  
    // Phone number validation
    phoneInput.addEventListener('blur', () => {
      const phoneValue = phoneInput.value.trim();
      const messageElement = document.getElementById('fourthpid');
      const phoneRegex = /^\d{11}$/; // 11-digit phone number
  
      if (phoneRegex.test(phoneValue)) {
        phoneInput.style.borderColor = 'green';
        messageElement.textContent = '';
      } else {
        phoneInput.style.borderColor = 'red';
        phoneInput.classList.add('shake');
        messageElement.textContent = 'Invalid phone number format.';
        messageElement.style.color = 'red';
        setTimeout(() => phoneInput.classList.remove('shake'), 500);
      }
    });
  
    // Password validation and confirmation
    passwordInput.addEventListener('blur', () => {
        const password = passwordInput.value;
        const textElement = document.getElementById('fifthpid');
      
        const score = checkPasswordStrength(password);
      
        updateStrengthMeter(textElement, passwordInput, score);
      });
      
      function checkPasswordStrength(password) {
        let score = 0;
      
        // Length
        if (password.length >= 12) {
          score += 4;
        } else if (password.length >= 8) {
          score += 2;
        } else {
          score += 1; // Minimum score to avoid negative values
        }
      
        // Character types
        if (/[A-Z]/.test(password)) {
          score += 1;
        }
        if (/[a-z]/.test(password)) {
          score += 1;
        }
        if (/\d/.test(password)) {
          score += 1;
        }
        if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
          score += 1;
        }
      
        // Bonus for complexity
        if (!isDictionaryWord(password) && !hasConsecutiveChars(password) && !hasRepeatPatterns(password)) {
          score += 2;
        }
      
        return score;
      }
      
      function updateStrengthMeter(textElement, passwordField, score) {
        const strength = getStrengthLevel(score);
        textElement.textContent = strength;
      
        switch (strength) {
          case 'Weak':
            textElement.style.color = 'red';
            passwordField.style.borderColor = 'red';
            passwordField.classList.add('shake');
            setTimeout(() => {
              passwordField.classList.remove('shake');
              textElement.textContent = 'Password is too short';
            }, 500);
            break;
          case 'Medium':
            textElement.style.color = 'orange';
            passwordField.style.borderColor = 'orange';
            passwordField.classList.add('shake');
            setTimeout(() => {
              passwordField.classList.remove('shake');
              textElement.textContent = 'Password could be stronger by adding more character types.';
            }, 500);
            break;
          case 'Strong':
            textElement.style.color = 'green';
            passwordField.style.borderColor = 'green';
            break;
        }
      }
      
      function getStrengthLevel(score) {
        if (score <= 3) {
          return 'Weak';
        } else if (score <= 5) {
          return 'Medium';
        } else {
          return 'Strong';
        }
      }
      
      function isDictionaryWord(password) {
        // Implement a dictionary check using an external library or local dictionary file
        return false; // Placeholder for actual implementation
      }
      
      function hasConsecutiveChars(password) {
        for (let i = 0; i < password.length - 1; i++) {
          if (password.charCodeAt(i) === password.charCodeAt(i + 1) - 1) {
            return true;
          }
        }
        return false;
      }
      
      function hasRepeatPatterns(password) {
        const patterns = ['1234', 'abcd', 'qwerty'];
        // You can add more common patterns as needed
        return patterns.some(pattern => password.includes(pattern));
      }
      
  
    confirmPasswordInput.addEventListener('blur', () => {
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();
        const messageElement = document.getElementById('lastpid');
    
        if (password !== confirmPassword) {
          confirmPasswordInput.style.borderColor = 'red';
          messageElement.innerHTML='password does not match'
          confirmPasswordInput.classList.add('shake')
          setTimeout(()=>{
            confirmPasswordInput.classList.remove('shake')
          },500)

        }else{
            confirmPasswordInput.style.borderColor = 'green';
            messageElement.innerHTML=''
        }
    });
    const submit=document.getElementById('submitval')
submit.addEventListener('submit',()=>{
  e.preventDefault();
  const emailval=emailInput.value;
  const username=usernameInput.value;
  const password=passwordInput;
  const fullname=nameInput.value;
  localStorage.setItem('emailvalue',emailval)
  localStorage.setItem('fullnamevalue',fullname)
  localStorage.setItem('usernamevalue',username)
  window.location='/result'
})


});
