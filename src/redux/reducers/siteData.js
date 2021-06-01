export default function siteDataReducer(state = {}, action) {
    switch (action.type) {
        case 'ADD_SITE_DATA':
            return {
                ...state,
                bucketName: action.bucketName,
                templateName: action.templateName,
                id: action.id
            }
        case 'ADD_HOME_PAGE_DATA':
            return {
                ...state,
                // bucketName: action.bucketName,
                // templateName: action.templateName,
                homePage: {
                    BUSINESS_NAME:  action.homePage.businessName,
                    BUSINESS_DESCRIPTION: action.homePage.businessDescription,
                    SLOGAN: action.homePage.slogan
                },
                // id: action.id
            } 
        case 'ADD_ABOUT_PAGE_DATA':
            return {
                ...state,
                aboutPage: {
                    BIO:           action.aboutPage.bio,
                    ESTABLISHED:   action.aboutPage.established
                }
            } 
        case 'ADD_CONTACT_PAGE_DATA':
            return {
                ...state,
                contactPage: {
                    BUSINESS_NAME: action.contactPage.businessName,
                    PHONE:         action.contactPage.phone,
                    EMAIL:         action.contactPage.email,
                    HOURS:         action.contactPage.hours,
                    LOCATION:      action.contactPage.location
                }
            } 
        default:
            return state;
    }
}
