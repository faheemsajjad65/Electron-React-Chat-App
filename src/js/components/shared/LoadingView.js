import React from 'react'
import Loader from './Loader'

export default function LoadingView(props) {
  return (
    <div className='loading-screen'>
        <div className='loading-view'>
            <div className='loading-view-container'>
                <div className='mb-3'>
                    {props.message ? props.message : "Processing..."}
                    <Loader/>
                </div>
            </div>
        </div>
    </div>
  )
}
