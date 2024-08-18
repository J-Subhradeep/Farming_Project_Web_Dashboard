export const DatetimeConverter = (newValue) => {
    let dateString = "" + newValue.$d;
    const date = new Date(dateString);
    date.setHours(date.getHours() + 5);
    date.setMinutes(date.getMinutes() + 30);

    const isoString = date.toISOString().split('.')[0];


    // Get the timezone offset in "+HH:MM" format
    const timezoneOffset = dateString.match(/GMT([+-]\d{4})/)[1];
    const formattedTimezoneOffset = `${timezoneOffset.slice(0, 3)}:${timezoneOffset.slice(3)}`;

    // Combine the ISO string with the formatted timezone offset
    const formattedDate = `${isoString}${formattedTimezoneOffset}`;
    

    return formattedDate;
}

export const checkIfDeadlineExpired = (deadline) => {
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


export const getOneWeekAgoDate = () => {
    // Create a new Date object representing the current date and time
    const now = new Date();

    // Subtract 7 days from the current date
    const oneWeekAgo = new Date(now.setDate(now.getDate() - 7));

    // Format the date and time to 'YYYY-MM-DDTHH:mm' in Asia/Kolkata timezone
    const formatter = new Intl.DateTimeFormat('en-GB', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Asia/Kolkata'
    });

    const [{ value: day },,{ value: month },,{ value: year },,{ value: hour },,{ value: minute }] = formatter.formatToParts(oneWeekAgo);

    // Return the formatted date string
    return `${year}-${month}-${day}T${hour}:${minute}`;
};

export const getcurrentoDate = () => {
    // Create a new Date object representing the current date and time
    const now = new Date();

    // Subtract 7 days from the current date
    const currentDate = new Date(now.setDate(now.getDate()));

    // Format the date and time to 'YYYY-MM-DDTHH:mm' in Asia/Kolkata timezone
    const formatter = new Intl.DateTimeFormat('en-GB', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Asia/Kolkata'
    });

    const [{ value: day },,{ value: month },,{ value: year },,{ value: hour },,{ value: minute }] = formatter.formatToParts(currentDate);

    // Return the formatted date string
    return `${year}-${month}-${day}T${hour}:${minute}`;
};


export const formatDateReadable = (dateString) => {
    const date = new Date(dateString);

    // Define options for formatting the date and time

    const timeOptions = { hour: 'numeric', minute: '2-digit', hour12: true };
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    // Create formatters
    const timeFormatter = new Intl.DateTimeFormat('en-US', timeOptions);

    // Format the date and time
    // const formattedDate = dateFormatter.format(date);
    const formattedTime = timeFormatter.format(date);

    // Return the combined formatted string
    return `${day}/${month}/${year} | ${formattedTime}`;
};