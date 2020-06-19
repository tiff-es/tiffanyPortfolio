import React from "react";
import { Alert } from "react-bootstrap";

const ErrorPage = () => {
    return(
        <Alert>
            <Alert className='alert-danger'>Page Not Found</Alert>
        </Alert>
    )
}
export default ErrorPage