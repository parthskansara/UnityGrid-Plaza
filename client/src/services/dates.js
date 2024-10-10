// dates.js

// Helper function to add leading zeros
const addLeadingZero = (num) => (num < 10 ? `0${num}` : num);


// Format time from 24-hour to 12-hour format
const formatTime = (time) => {
    console.log("Logging time: ", time)
    if (time === undefined){
        return "undefined";
    }
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours, 10);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minutes} ${ampm}`;
};

  // Calculate and format remaining time
const formatRemainingTime = (eventDate) => {
    const now = new Date();
    const event = new Date(eventDate);
    const diff = event - now;

    if (diff <= 0) {
      return "Event has started";
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    if (days > 30) {
        const months = Math.ceil(days / 30);
        return `${months} month${months > 1 ? 's' : ''} ${days % 30} day${days % 30 > 1 ? 's' : ''} until event`;
    }
    else if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''} until event`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''} until event`;
    } else {
      return `${minutes} minute${minutes > 1 ? 's' : ''} until event`;
    }
};

// Format negative time remaining (for events that have already started)
const formatNegativeTimeRemaining = (remaining, eventId) => {
    const element = document.getElementById(`remaining-${eventId}`);
    if (remaining === "Event has started") {
      if (element) {
        element.style.backgroundColor = 'red';
        element.style.padding = '10px';
        element.textContent = 'Event has passed';
      }
    }
    else{
        if (element) {
            element.style.padding = '0px';
            element.style.backgroundColor = 'transparent';
            element.textContent = remaining;
        }
    }
};

export default { formatTime, formatRemainingTime, formatNegativeTimeRemaining };
