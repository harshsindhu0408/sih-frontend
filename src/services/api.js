const BASE_URL = "http://localhost:8080/api/n1"

// AGENCY END POINTS
export const agencyEndPoints = {
    REGISTER_API: BASE_URL + "/agency/register",
    LOGIN_API: BASE_URL + "/agency/login",
    UPDATE_PASSWORD_API: BASE_URL + "/agency/updatePassword",
    GET_AGENCY_PROFILE: BASE_URL + "/agency/agencyProfile",
    UPDATE_AGENCY_INFO_API: BASE_URL + "/agency/updateAgency",
    GET_AGENCY_RESOURCE_AND_DISASTER_API: BASE_URL + "/agency/getAllAgencyLocations/:id",
    GET_ALL_AGENCY_LOCATIONS_API: BASE_URL + "/agency/getAgencyResourcesAndDisasters",
    GET_ALL_AGENCY_DATA: BASE_URL + "/agency/agencyProfile",
}

// RESOURCE END POINTS
export const resourceEndPoints = {
    CREATE_RESOURCE_API: BASE_URL + "/resource/createResource",
    UPDATE_RESOURCE_API: BASE_URL + "/resource/updateResource/:id",
    GET_RESOURCE_API: BASE_URL + "/resource/getResource/:resourceName",
    LIST_RESOURCES_API: BASE_URL + "/resource/listResources",
    STATUS_OF_RESOURCES_API: BASE_URL + "/resource/getResourceStatus",
    SHARE_RESOURCES_API: BASE_URL + "/resource/shareResource",
    DELETE_RESOURCES_API: BASE_URL + "/resource/deleteResource/:resourceId",
}

// DISASTER END POINTS
export const disasterEndPoints = {
    ADD_DISASTER_API: BASE_URL + "/disaster/addDisaster",
    UPDATE_DISASTER_API: BASE_URL + "/disaster/updateDisaster/:id",
    GET_DISASTER_API: BASE_URL + "/disaster/getDisaster/:id",
    FETCH_ALL_DISASTERS_API: BASE_URL + "/disaster/fetchDisasters",
}

// ALERT END POINTS
export const alertEndPoints = {
    CREATE_ALERT_API: BASE_URL + "/alert/createAlert",
    GET_AGENCY_ALERTS_API: BASE_URL + "/alert/getAlertsForAgency",
}