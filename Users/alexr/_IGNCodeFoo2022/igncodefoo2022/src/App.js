import React, { useEffect, useState } from "react";

const App = () => {


    let [ignVideos, setIgnVideos] = useState(0);

    useEffect(() => {
        const URL = "http://localhost:8010/proxy/videos";
        const fetchData = async () => {
            try {
                const response = await fetch(URL);
                const json = await response.json();
                console.log(json);


                setIgnVideos(json);
            } catch (error) {
                console.log("error", error);
            }
        };


        fetchData();
    }, []);
    


   //let videos = ignAPI.




    return(
        <div className="container">
            <h1>h1</h1>
        </div>
    );
}

export default App;