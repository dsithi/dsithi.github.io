import React from 'react';

const Button = ({ data }) => {
    return (
        <div className="button-container">
            {
                (data.link !== "")
                  ? 
                    <div>
                        <button style={{marginRight:"15px"}}className="button" onClick={() => window.open(data.link)}>
                            Try
                        </button>
                        <button className="button" onClick={() => window.open(data.repo)}>
                            Repo
                        </button>
                    </div> 
                    :
                    <button className="button" onClick={() => window.open(data.link)}>
                        Repo
                    </button>
            }


        </div>
    )
}

export default Button;