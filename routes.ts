/**
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = [
    "/",
    "/auth/new-verification",
]

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users in /settings
 * @type {string[]}
 */
export const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/error",
    "/auth/reset",
    "/auth/new-password"
]

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The prefix for successfull authenticated route
 * This route is open when user logged in or sign in Successfully
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";