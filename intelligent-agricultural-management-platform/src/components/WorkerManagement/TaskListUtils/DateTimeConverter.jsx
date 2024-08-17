export const DatetimeConverter = (newValue) => {
    let dateString = "" + newValue.$d;
    const date = new Date(dateString);

    // Get the ISO string and remove the milliseconds
    const isoString = date.toISOString().split('.')[0];

    // Get the timezone offset in "+HH:MM" format
    const timezoneOffset = dateString.match(/GMT([+-]\d{4})/)[1];
    const formattedTimezoneOffset = `${timezoneOffset.slice(0, 3)}:${timezoneOffset.slice(3)}`;

    // Combine the ISO string with the formatted timezone offset
    const formattedDate = `${isoString}${formattedTimezoneOffset}`;

    return formattedDate;
}

export const checkIfDeadlineExpired = (deadline) =>{
    const deadlineDate = new Date(deadline);
    
    // Get the current time in IST
    const currentDate = new Date();
    
    // Convert current time to IST
    const offset = 5.5 * 60 * 60 * 1000; // IST offset from UTC in milliseconds
    const currentISTTime = new Date(currentDate.getTime() + offset);
    
    // Compare the deadline with the current IST time
    if (deadlineDate < currentISTTime) {
        return 'missed';
    } else if (deadlineDate > currentISTTime) {
        return 'pending';
    } else {
        return 'pending';
    }
}

export const formatDateString = (dateString) => {
    // Convert the date string to a Date object
    const date = new Date(dateString);

    // Define month names array
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // Extract day, month, year, hours, and minutes
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');

    // Determine AM or PM
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    hours = hours % 12 || 12;  // Convert 0 to 12 for midnight

    // Format the final date string
    return `${day} ${month} ${year}, ${hours}:${minutes}${ampm}`;
}