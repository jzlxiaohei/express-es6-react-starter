module.exports={
    isProduction:process.env.NODE_ENV === 'production',
    isErrToPage:false,
    port:3333,
    fePort:9527,
    appName:"your-app",
    errLogPath:process.cwd()
}