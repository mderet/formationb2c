/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1_signupsignin-mdet",
        editProfile: "B2C_1_profileediting-mdet"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://morganderetssg.b2clogin.com/morganderetssg.onmicrosoft.com",
        },
        editProfile: {
            authority: "https://morganderetssg.b2clogin.com/morganderetssg.onmicrosoft.com"
        }
    },
    authorityDomain: "morganderetssg.b2clogin.com"
}
