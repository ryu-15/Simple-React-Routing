import React from "react";
import { useParams } from "react-router-dom";

 const Features: React.FunctionComponent = () => {
    const { featuresId } = useParams();
    const array=["megha","milan","prabin","nabraj","vishnu","gaurav","dhiraj","saaz","susish","sanjay"]
    return (
        <>
            {
                Number(featuresId)<10 ? (
                <div>
                    Features page {featuresId}
                <br/>
                    {array[Number(featuresId)]} features
                </div>
            ) : (
                <div>Features not available</div>
            )}
        </>
    );
};
export default Features;
