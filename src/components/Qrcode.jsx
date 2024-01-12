import React from 'react'
import imgQr from '../assets/images/image-qr-code.png'


const Qrcode = () => {
    return (
        <div className='contenedor d-flex justify-content-center align-items-center'>
            <div className='card rounded-4 shadow p-3'>
                <img className='card-img imagen-card rounded-3' src={imgQr} alt="" />
                <div className='card-body text-center'>
                    <h5 className='card-title fw-bold'>Improve your front-end skills by building projects</h5>
                    <p className='card-text'>
                        Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Qrcode