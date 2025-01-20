class ApiErorr extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        error = [],

    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors
    }
}

export { ApiErorr }