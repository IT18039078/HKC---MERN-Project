import React from 'react';

export default function errorAlert(props){
    return(
        <div>
            <button onClick={props.clearError} className="alert alert-danger">{props.errorMessage}
                <i className="error" role="alert"></i>
            </button>
        </div>
    )
}