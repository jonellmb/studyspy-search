import React from "react";
import { Link } from "react-router-dom";
import ShowImage from "./ShowImage";
import EllipsisText from "react-ellipsis-text";
import NumberFormat from 'react-number-format';
// {course.duration.durationname != null?  <text>Duration: {course.duration.id}<br /></text>: null }  

const Card = ({ course }) => {

    return (
        <div className="col-4 mb-3">
            <div className="card">
                <div className="card-header">{course.coursename}</div>
                <div className="card-body">
                
                <p><ShowImage item={course.provider} url="provider" />
                {course.provider.providername}<br />
                {course.provider.providertype != null?  <text>{course.provider.providertype}<br /></text>: null }  
                </p>
                 <p>
             
                    {course.d_tuitionfee != null?  <text><NumberFormat value={course.d_tuitionfee} displayType={'text'} thousandSeparator={true} prefix={'Domestic Tuition: $'} /><br /></text>: null }
                    {course.i_tuitionfee != null?  <text><NumberFormat value={course.i_tuitionfee} displayType={'text'} thousandSeparator={true} prefix={'International Tuition: $'} /><br /></text>: null }  
                    {course.level != null?  <text>NZQF Level: {course.level}<br /></text>: null }
                 </p>
                 
                    <p>
                    <EllipsisText text={course.cdescription.substring(0,120)} length={"361"} />...                  
                    </p>

                    <Link to="/">
                        <button className="btn btn-outline-primary mt-2 mb-2 mr-2">
                            View Course
                        </button>
                    </Link>
                    <button className="btn btn-outline-warning mt-2 mb-2">
                        Add to Compare
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
