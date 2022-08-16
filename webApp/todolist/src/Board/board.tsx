import React from 'react';
import FormBoard from './Component/index';

class BoardComponent extends React.Component {
    sate = {
        username: '',
    };

    render() {
        return (
            <div>
                <FormBoard/>
            </div>
        );
    }
}

export default BoardComponent