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


