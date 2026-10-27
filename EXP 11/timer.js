
export const classSchedule = [
    {
        subject: "Web Development",
        room: "Computer Lab · Room 204",
        start: "10:00 AM",
        end: "11:00 AM",
        icon: "</>"
    },
    {
        subject: "Data Structures",
        room: "Classroom · Room 302",
        start: "11:30 AM",
        end: "12:30 PM",
        icon: "{ }"
    },
    {
        subject: "Database Management",
        room: "Classroom · Room 105",
        start: "01:00 PM",
        end: "02:00 PM",
        icon: "▤"
    },
    {
        subject: "Computer Networks",
        room: "Classroom · Room 210",
        start: "02:30 PM",
        end: "03:30 PM",
        icon: "⌘"
    }
];

export const countdownDuration = 10;

export function formatTime(date) {
    return date.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    });
}

export function formatCountdown(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0")
    };
}
