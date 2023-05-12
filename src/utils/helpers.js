export const getYearFromDate = (date) => {

    return new Date(date).getFullYear();
}

export const getHumanReadableDate = (date) => {

    return new Date(date).toDateString().split(' ').slice(1).join(' ');
}