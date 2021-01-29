const mode = process.env.VUE_APP_MODE


const STAGING_API = 'https://dd-taskform-mentoring.herokuapp.com'
const DEV_API = 'http://localhost:3001'


export const API = mode === "PRODUCTION" ? "productionDomain" : mode === "STAGING" ? STAGING_API : DEV_API