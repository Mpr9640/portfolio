document.addEventListener("DOMcontentLoaded", function() {
    // get all navigation buttons, resume links, email links and social buttons.
    let pagelinks = document.querySelectorAll(".page-link");
    let emaillinks=document.querySelectorAll(".emaillinks");
    let resumelinks = document.querySelectorAll(".resume-link");
    let socialbuttons = document.querySelectorAll(".social-btn");

    // function to handle page animations before navigation
    function animateAndNavigate(event, animationClass){
        event.preventDefault(); // Prevent immediate navigation
        document.body.classList.add(animationClass);

        setTimeout(()=>{
            window.location.href = event.target.closest("a").href;}, 800); // Adjust this time to match animation duration
        } 
        pagelinks.forEach(link => {
            link.addEventListener("click", function(event){
                animateAndNavigate(event,"page-flip");
            });
        });
        emaillinks.forEach(link=>{
            link.addEventListner("click", function(event){
                animateAndNavigate(event, "fade-slide");
            });
        });
        resumelinks.forEach(link=>{
            link.addEventListner("click", function(event){
                animateAndNavigate(event,"fade-slide");
            });
        });
        socialbuttons.forEach(link => {
            link.addEventListner("click", function(event){
                animateAndNavigate(event,"ripple");
            });
        });
    });
