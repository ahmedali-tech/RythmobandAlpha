export const convertToSecInt = (time) => {
    const HourMinuteSecMilsec = time.split(':')
    const seconds = parseInt(HourMinuteSecMilsec[0]) * 3600
        + parseInt(HourMinuteSecMilsec[1]) * 60
        + parseInt(HourMinuteSecMilsec[2])
        + parseInt(HourMinuteSecMilsec[3]) / Math.pow(10, HourMinuteSecMilsec[3].length);

    return seconds
}