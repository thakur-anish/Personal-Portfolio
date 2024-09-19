    const typingText = "A Web Developer.....";
    let currentIndex = 0; 

    function startTyping() {
        const displayElement = document.getElementById('type-text');
        displayElement.innerHTML = ""; 
        currentIndex = 0;
        typeText();
    }

    function typeText() {
        const displayElement = document.getElementById('type-text');
        if (currentIndex < typingText.length) {
            displayElement.innerHTML += typingText.charAt(currentIndex);
            currentIndex++;
            setTimeout(typeText, 100); 
        } else {
            setTimeout(() => {
                startTyping(); 
            }, 2000); 
        }
    }
    document.addEventListener("DOMContentLoaded", startTyping);




    const typingText_1 = document.getElementById('typing-effect');
    const textToType = "I am a Web Developer......"; 
    let index = 0;
    let isDeleting = false;

    function typeEffect() {
        if (isDeleting) {
            if (index > 0) {
                typingText_1.innerHTML = textToType.substring(0, index - 1);
                index--;
                setTimeout(typeEffect, 100); 
            } else {
                isDeleting = false;
                setTimeout(typeEffect, 1000);
            }
        } else {
            if (index < textToType.length) {
                typingText_1.innerHTML = textToType.substring(0, index + 1);
                index++;
                setTimeout(typeEffect, 150); 
            } else {
                isDeleting = true;
                setTimeout(typeEffect, 2000); 
            }
        }
    }
    window.onload = function() {
        typeEffect();
    };



    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    };

    scrollToTopBtn.addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


     document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('menu-toggle').checked = false;
        });
    });
 

    let text = document.querySelector('.send-button');
    let maintext = text.innerHTML;
    let isClicked = false;

    text.addEventListener('mouseover', function(){ 
        text.innerHTML = "Sure";
    });

    text.addEventListener('mouseout', function(){
        if (!isClicked) {
            text.innerHTML = maintext;
        }
    });

    text.addEventListener('click', function(){ 
        text.innerHTML = "Sent";
        isClicked = true;
    });


    function sendEmail(){
        Email.send({
            Host : "smtp.gmail.com",
            Username : "akanishkumar193@gmail.com",
            Password : "password",
            To : 'akanishthakur1099@gmail.com',
            From : document.querySelector("#email").value,
            Subject : "New Contact form Enquiry",
            Body : "And this is the body"
        }).then(
        message => alert(message)
        );
    }