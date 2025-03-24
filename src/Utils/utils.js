const appendExtraZero = value => {
    return value > 9 ? '' : '0';
}

export const timeFormatter = (value) => {

    const date = new Date(value);
    let hour = `${appendExtraZero(date.getHours())}${date.getHours()}`;
    const minutes = `${appendExtraZero(date.getMinutes())}${date.getMinutes()}`;
    const meridiem = hour > 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;

    return `${hour}:${minutes} ${meridiem}`;
};
