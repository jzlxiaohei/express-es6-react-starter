module.exports={
    isProduction:process.env.NODE_ENV === 'production',
    isErrToPage:false,
    port:3333,
    appName:"your-app",
    errLogPath:process.cwd()
}