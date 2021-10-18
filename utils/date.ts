import moment from "moment";

export function getCurrentFormatedDate() : string {
    return moment(new Date()).format("DD/MM/YYYY HH:mm:ss")
}