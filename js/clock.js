// $(document).ready(function() {
//   let clock;

//   // Grab the current date
//   let currentDate = new Date();

//   // Target future date/24 hour time/Timezone
//   let targetDate = moment.tz("2024-05-24 10:35", "Asia/Kolkata");

//   // Calculate the difference in seconds between the future and current date
//   let diff = targetDate / 1000 - currentDate.getTime() / 1000;

//   if (diff <= 0) {
//     // If remaining countdown is 0
//     clock = $(".clock").FlipClock(0, {
//       clockFace: "DailyCounter",
//       countdown: true,
//       autostart: false
//     });
//     console.log("Date has already passed!")
    
//   } else {
//     // Run countdown timer
//     clock = $(".clock").FlipClock(diff, {
//       clockFace: "DailyCounter",
//       countdown: true,
//       callbacks: {
//         stop: function() {
//           console.log("Timer has ended!")
//         }
//       }
//     });
    
//     // Check when timer reaches 0, then stop at 0
//     setTimeout(function() {
//       checktime();
//     }, 1000);
    
//     function checktime() {
//       t = clock.getTime();
//       if (t <= 0) {
//         clock.setTime(0);
//       }
//       setTimeout(function() {
//         checktime();
//       }, 1000);
//     }
//   }
// });

$(document).ready(function() {
  let clock;

  // Grab the current date
  let currentDate = new Date();

  // Target future date/24 hour time/Timezone
  let targetDate = moment.tz("2024-05-24 10:35", "Asia/Kolkata");

  // Calculate the difference in seconds between the future and current date
  let diff = targetDate / 1000 - currentDate.getTime() / 1000;

  if (diff <= 0) {
    // If remaining countdown is 0 or negative
    console.log("Date has already passed!");
    triggerEffects(); // Trigger effects immediately
  } else {
    // Run countdown timer
    clock = $(".clock").FlipClock(diff, {
      clockFace: "DailyCounter",
      countdown: true,
      callbacks: {
        stop: function() {
          console.log("Timer has ended!");
          triggerEffects(); // Trigger effects when timer ends
        }
      }
    });
    
    // Check when timer reaches 0, then stop at 0
    setTimeout(function() {
      checktime();
    }, 1000);
    
    function checktime() {
      t = clock.getTime();
      if (t <= 0) {
        clock.setTime(0);
      }
      setTimeout(function() {
        checktime();
      }, 1000);
    }
  }

  // Function to trigger party popper effect and display cute text
  function triggerEffects() {
    // Add party popper effect
    confettiEffect();

    // Display cute text
    displayCuteText("Party time!");
  }

  // Function to display cute text
  function displayCuteText(text) {
    let cuteText = document.createElement("div");
    cuteText.textContent = text;
    cuteText.classList.add("glass-glow"); // Apply glass glow effect
    cuteText.classList.add("congrats-message"); // Add congrats-message class
    document.body.appendChild(cuteText);

    // Automatically remove the cute text after 8 seconds
    setTimeout(function() {
      document.body.removeChild(cuteText);
    }, 8000);
  }

  // Function to trigger the confetti effect
  function confettiEffect() {
    confetti.create(undefined, {
      resize: true,
      useWorker: true
    })({
      spread: 360,
      startVelocity: 40,
      ticks: 600,
      particleCount: 300,
      origin: {
        x: Math.random(),
        y: Math.random() - 0.2
      }
    });
  }
});
