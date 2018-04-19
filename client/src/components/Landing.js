import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Landing extends PureComponent {
    render() {
        return (
            <div style={{textAlign:'center'}}>
                <h1>
                    Emaily!
                </h1>
                Collect Feedack from your users
            </div>
        );
    }
}

Landing.propTypes = {

};

export default Landing;