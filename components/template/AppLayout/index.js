import { React, PropTypes } from 'libraries';

const AppLayout = ({children}) => {
    return(
        <div>
            {children}
        </div>
    )
};


AppLayout.propTypes = {
    children: PropTypes.any
};

export default AppLayout;
