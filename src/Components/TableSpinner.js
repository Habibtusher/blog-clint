import React from 'react';
import ContentLoader from 'react-content-loader';

const TableSpinner = (props) => {
    return (
        <ContentLoader
        width="100%" height="100%"style={{ transform: "translate(-72px, -64px)" }}  
        viewBox="0 0 958 520" backgroundColor="#eaeced"  foregroundColor="#ffffff"{...props} 
        >
            <rect x="51" y="45" rx="3" ry="3" width="906" height="17" />
            <circle cx="879" cy="123" r="11" />
            <circle cx="914" cy="123" r="11" />
            <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
            <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
            <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
            <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
            <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
            <circle cx="20" cy="20" r="20" />
            <rect x="55" y="155" rx="3" ry="3" width="897" height="2" />
            <circle cx="880" cy="184" r="11" />
            <circle cx="915" cy="184" r="11" />
            <rect x="105" y="176" rx="3" ry="3" width="141" height="15" />
            <rect x="306" y="175" rx="3" ry="3" width="299" height="15" />
            <rect x="662" y="175" rx="3" ry="3" width="141" height="15" />
        </ContentLoader>
    );
};

export default TableSpinner;