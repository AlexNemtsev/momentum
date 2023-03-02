function getTimeOfDay() {
    const date = new Date();
    const hours = date.getHours();

    if (hours < 6) {
        return 'night';
    } else if (hours < 12) {
        return 'morning';
    } else if (hours < 18) {
        return 'afternoon';
    } else {
        return 'evening';
    }
}

export default getTimeOfDay;