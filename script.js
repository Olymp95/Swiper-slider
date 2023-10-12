var swiper1 = new Swiper('#swiper-container1', {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    grabCursor: true,
    loop: true,
    
    navigation: {
        nextEl: '#swiper-button-next1',
        prevEl: '#swiper-button-prev1'
    },
    
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    }
});

var swiper2 = new Swiper('#swiper-container2', {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    grabCursor: true,
    loop: true,
    
    navigation: {
        nextEl: '#swiper-button-next2',
        prevEl: '#swiper-button-prev2'
    },
    
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    }
});

// Keep the link to the active slider
var activeSlider = swiper1;

// Add event handlers for toggle buttons
document.getElementById('toggle-slider1').addEventListener('click', function() {
    document.getElementById('slider1').style.display = 'block';
    document.getElementById('slider2').style.display = 'none';
    
    // Stop autoscrolling the active slider
    activeSlider.autoplay.stop();
    
    // Refresh the active slider
    activeSlider = swiper1;
    
    // Start autoscrolling the active slider
    activeSlider.autoplay.start();
    
    // Set the class to "active" for the active button
    document.getElementById('toggle-slider1').classList.add('active');
    
    // Remove the "active" class from the previous active button
    document.getElementById('toggle-slider2').classList.remove('active');
});

document.getElementById('toggle-slider2').addEventListener('click', function() {
    document.getElementById('slider1').style.display = 'none';
    document.getElementById('slider2').style.display = 'block';
    
    // Stop autoscrolling the active slider
    activeSlider.autoplay.stop();
    
    // Refresh the active slider
    activeSlider = swiper2;
    
    // Start autoscrolling the active slider
    activeSlider.autoplay.start();
    
    // Set the class to "active" for the active button
    document.getElementById('toggle-slider2').classList.add('active');
    
    // Remove the "active" class from the previous active button
    document.getElementById('toggle-slider1').classList.remove('active');
});
document.querySelectorAll('.gdai-toggle-button').forEach(function(button, index) {
    button.addEventListener('click', function() {
        // Stop autoscrolling the active slider
        activeSlider.autoplay.stop();

        // Remove the "active1" and "active2" classes from all buttons
        document.querySelectorAll('.gdai-toggle-button').forEach(function(btn) {
            btn.classList.remove('active1', 'active2');
        });

        // Update the active slider and set the appropriate class for the active button
        if (index === 0) {
            document.getElementById('slider1').style.display = 'block';
            document.getElementById('slider2').style.display = 'none';
            activeSlider = swiper1;
            button.classList.add('active1');

            // Add the "active1" class to the "slider-toggle" container when the first button is active
            document.querySelector('.slider-toggle').classList.remove('active2');
            document.querySelector('.slider-toggle').classList.add('active1');
            
        } else if (index === 1) {
            document.getElementById('slider1').style.display = 'none';
            document.getElementById('slider2').style.display = 'block';
            activeSlider = swiper2;
            button.classList.add('active2');
            document.querySelector('.slider-toggle').classList.remove('active1');
            document.querySelector('.slider-toggle').classList.add('active2');
        }

        // Start autoscrolling the active slider
        activeSlider.autoplay.start();
    });
});

