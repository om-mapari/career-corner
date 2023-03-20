import React, { useState, useEffect } from 'react'


function Timer() {
    // Set the initial state for each timer
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    const duration = 3000;

    useEffect(() => {
        const startTime = Date.now();

        const intervalId = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const newCount1 = Math.floor((elapsed / duration) * 300);
            const newCount2 = Math.floor((elapsed / duration) * 10);
            const newCount3 = Math.floor((elapsed / duration) * 5000);

            if (newCount1 <= 300) {
                setCount1(count1 => newCount1);
            } else {
                setCount1(count1 => 300);
            }
            if (newCount2 <= 10) {
                setCount2(count2 => newCount2);
            } else {
                setCount2(count2 => 10);
            }
            if (newCount3 <= 5000) {
                setCount3(count3 => newCount3);
            } else {
                setCount3(count3 => 5000)
            }

            if (elapsed >= duration) {
                clearInterval(intervalId);
            }
        }, 10);

        return () => {
            clearInterval(intervalId)
        };
    }, []);


    const noSize = { fontSize: '69px', fontWeight: 'bold', color: '#FF9900' }
    return (
        <div className="container" >
            <div className="row">
                <div className="col-sm-4">
                    <div>
                        <span style={noSize}>{count1}</span>
                    </div>
                    <div>Career Guidance Sessions</div>
                </div>
                <div className="col-sm-4">
                    <div>
                        <span style={noSize}>{count2}</span>
                    </div>
                    <div>Years in Action</div>
                </div>
                <div className="col-sm-4">
                    <span></span>
                    <div>
                        <div>
                            <span style={noSize}>{count3}</span>
                        </div>
                    </div>
                    <div>Students & Professionals</div>
                </div>
            </div>
        </div>
    )
}

export default Timer