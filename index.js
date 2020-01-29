const axios = require('axios').default

const url = 'http://localhost:59692/'

async function getAllAppointments() {
    try {
        const res = await axios.get(`${url}Appointments`)
        return res
    } catch (error) {
        return error
    }
}

async function getOfficeAppintments(idoffice) {
    try {
        const res = await axios.get(
            `${url}Appointments/OfficeLogin?idoffice=${idoffice}`
        )
        return res
    } catch (error) {
        return error
    }
}

async function postAppointment(object) {
    try {
        const res = await axios.post(`${url}Appointmets`, object)
        return res
    } catch (error) {
        return error
    }
}

async function putAppointment(id) {
    try {
        const res = await axios.post(`${url}Appointmets/${id}`, object)
        return res
    } catch (error) {
        return error
    }
}

async function getInfoQuote(quoteNumber) {
    try {
        const res = await axios.get(`${url}ITC/Quote/${quoteNumber}`)
        return res
    } catch (error) {
        return error
    }
}

module.exports = {
    getAllAppointments,
    getOfficeAppintments,
    postAppointment,
    putAppointment,
    getInfoQuote,
}
