import React, { useEffect } from "react";

const App = () => {
    useEffect(() => {
        const URL = "http://localhost:8010/proxy";
        const fetchData = async () => {
            try {
                const response = await fetch(URL);
                console.log(response);
                const json = await response.json();


                console.log(json);
            } catch (error) {
                console.log("error", error);
            }
        };


        fetchData();
    }, []);
    
    return(
        <div className="container">
            <h1>h1</h1>
        </div>
    );
}

export default App;