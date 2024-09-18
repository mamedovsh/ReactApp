import React from "react";
import PropTypes from "prop-types";

const Greeting = ({name}) => {
    return(
        <p>Привет, {name}</p>
    )
}

Greeting.propTypes = {
    name:PropTypes.string
}
export default Greeting;