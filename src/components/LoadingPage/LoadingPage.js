import "./LoadingPage.css"
import React from 'react'

const LoadingPage = () => {
    return (
        <div className='d-flex flex-column align-items-center justify-content-center' style={{ height: '80vh' }}>
            <span className="loader"></span>
        </div>
    )
}
export default LoadingPage