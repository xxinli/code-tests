/*
   Environment variables are loaded from .env file.
   Fallback values should not be provided in real scenario. For testing purpose only
*/
export const Environment = {
    getFBEndpoint: (): string => process.env.FB_ENDPOINT || 'https://graph.facebook.com/v2.8/',
    getFBToken: (): string => process.env.FB_ENDPOINT || 'dG9tYXRvbGV0dHVjZTEyM3h4eXpmYWNlYm9vaw==',
    getINEndpoint: (): string => process.env.IN_ENDPOINT || 'https://graph.instagram.com/v2.8/',
    getINToken: (): string => process.env.IN_ENDPOINT || 'dG9tYXRvbGV0dHVjZTEyM3h4eXppbnN0YWdyYW0=',
    getTWEndpoint: (): string => process.env.FB_ENDPOINT || 'https://graph.twitter.com/v2.8/',
    getTWToken: (): string => process.env.FB_ENDPOINT || 'dG9tYXRvbGV0dHVjZTEyM3h4eXp0d2l0dGVy',
    getPortNumber: (): number => Number(process.env.PORT) || 3000
}