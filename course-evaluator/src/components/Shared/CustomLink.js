import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link
            style={{
                color: match ? "#079073" : "",
                textDecoration: match ? "none" : "none"
            }}
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
};

export default CustomLink;