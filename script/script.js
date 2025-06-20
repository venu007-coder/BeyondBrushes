document.addEventListener("DOMContentLoaded", function () {
    function setProgress(percent) {
        const circle = document.querySelector(".progress-ring__circle");
        const text = document.querySelector(".progress-text");
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;

        const offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDashoffset = offset;

        text.textContent = percent + "%";
    }

    let progressValue = 0;
    const interval = setInterval(() => {
        if (progressValue >= 100) {
            clearInterval(interval);
        } else {
            progressValue++;
            setProgress(progressValue);
        }
    }, 20);
});


document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',  // Default view
        selectable: true,             // Allow date selection
        // events: [                      // Sample events
        //     {
        //         title: 'Meeting',
        //         start: '2025-03-06'
        //     },
        //     {
        //         title: 'Holiday',
        //         start: '2025-03-10',
        //         end: '2025-03-12'
        //     }
        // ],
        headerToolbar: {
    left: 'prev,next today',
    right: 'title',
    // center: 'customTitle',
  },
        dateClick: function(info) {    // Event on date click
            alert('Clicked on: ' + info.dateStr);
        },

        dayHeaderContent: function(arg) {
    // Use `arg.date` to get the date object and format it as needed
    const shortNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    return shortNames[arg.date.getDay()];  // Get the corresponding short day name
},
customButtons: {
    customTitle: {
        text: 'Book a Appointment',
    }
}
    });

    calendar.render();
});


document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth', // Default view
        selectable: true, // Allow date selection
        headerToolbar: {
            left: 'prev,next today',
            right: 'title',
        },
        validRange: {
            start: new Date() // Prevents selecting past dates
        },
        dateClick: function (info) {
            document.getElementById("appointmentDate").value = info.dateStr;

            // Show Bootstrap Modal
            var appointmentModal = new bootstrap.Modal(document.getElementById('appointmentModal'));
            appointmentModal.show();

        }
    });

    calendar.render();
});


document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        let navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled"); // Add class when scrolled
        } else {
            navbar.classList.remove("scrolled"); // Remove class when at top
        }
    });
});


// collection page products
        const images = [
            { src: "assets/product-1.jpg", alt: "IMG1", link: "#IMG1" },
            { src: "assets/product-2.jpg", alt: "IMG2", link: "#IMG2" },
            { src: "assets/product-3.jpg", alt: "IMG3", link: "#IMG3" },
            { src: "assets/product-4.jpg", alt: "IMG4", link: "#IMG4" },
            { src: "assets/product-5.jpg", alt: "IMG5", link: "#IMG5" },
        ];

        let selectedIndex = 3;
        let slideElements = [];
        
        function getClassName(index) {
            const relativeIndex = (index - selectedIndex + images.length) % images.length;
            if (relativeIndex === 0) return "selected";
            if (relativeIndex === 1) return "next";
            if (relativeIndex === 2) return "nextRightSecond";
            if (relativeIndex === images.length - 1) return "prev";
            if (relativeIndex === images.length - 2) return "prevLeftSecond";
            return relativeIndex > 2 ? "hideRight" : "hideLeft";
        }

        function createCarousel() {
            const carousel = document.getElementById('carousel');
            carousel.innerHTML = '';
            
            images.forEach((image, index) => {
                const div = document.createElement('div');
                div.className = getClassName(index);
                
                div.innerHTML = `
                    <div class="img-wrap">
                        <span class="img-text">${image.alt}</span>
                        <img src="${image.src}" alt="${image.alt}">
                    </div>
                `;
                
                carousel.appendChild(div);
                slideElements.push(div);
            });
        }

        function moveToSelected(direction) {
            if (direction === "next") {
                selectedIndex = (selectedIndex + 1) % images.length;
            } else if (direction === "prev") {
                selectedIndex = selectedIndex === 0 ? images.length - 1 : selectedIndex - 1;
            }
            
            // Update classes for smooth transition
            slideElements.forEach((element, index) => {
                element.className = getClassName(index);
            });
        }

        // Initial creation
        createCarousel();