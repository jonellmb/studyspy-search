import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getCourses } from "./apiCore";
import Card from './Card'



const Home = () => 
{    
    const [productsByArrival, setProductsByArrival] = useState([]);
    const [error, setError] = useState(false);
    
    const loadProductsByArrival = () => {
        getCourses("createdAt").then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProductsByArrival(data);
            }
        });
    };
    
    useEffect(() => {
        loadProductsByArrival();
    }, []);
    return(
<Layout 
    title="New Zealand's Digital Prospectus" 
    description="StudySpy helps you find your future – compare every course and scholarship in New Zealand,
    from Kaitaia to Invercargill."
    className="container-fluid"
>    
<h2 className="mb-4">courses</h2>
            <div className="row">

                {productsByArrival.map((course, i) => (
                    <Card key={i} course={course} />
                ))}
               
            </div>



    </Layout>
    );
};



export default Home;
