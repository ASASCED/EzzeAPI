const axios = require('axios').default

const url = 'http://localhost:59692/'

async function getAllAppointments() {
    try {
        const res = await axios.get(`${url}Appointments`)
        return res.data
    } catch (error) {
        throw error
    }
}

async function getAppointmentsLimitOffset(idLogin, offset, limit) {
    try {
        const res = await axios.get(
            `${url}Appointments?idLogin=${idLogin}&offset=${offset}&limit=${limit}`
        )
        return res.data
    } catch (error) {
        throw error
    }
}

async function getOfficeAppintments(idoffice) {
    try {
        const res = await axios.get(
            `${url}Appointments/OfficeLogin?idOffice=${idoffice}`
        )
        return res.data
    } catch (error) {
        throw error
    }
}

async function getInfoQuote(quoteNumber) {
    try {
        const res = await axios.get(`${url}ITC/Quote/${quoteNumber}`)
        return res.data
    } catch (error) {
        throw error
    }
}

async function postAppointment(object) {
    try {
        const res = await axios.post(`${url}Appointmets`, object)
        return JSON.parse(res)
    } catch (error) {
        throw error
    }
}

async function putAppointment(id) {
    try {
        const res = await axios.post(`${url}Appointmets/${id}`, object)
        return res
    } catch (error) {
        throw error
    }
}

module.exports = {
    getAllAppointments,
    getOfficeAppintments,
    postAppointment,
    putAppointment,
    getInfoQuote,
    getAppointmentsLimitOffset,
}
