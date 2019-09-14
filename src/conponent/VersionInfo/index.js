import React from 'react';
import packageJson from './../../../package.json';

class VersionInfo extends React.Component {
    render() {
        const v = packageJson.version
        return (
            <React.Fragment>
                {`Under Constraction | Beta ${v}`}
            </React.Fragment>
        )
    }
}

export default VersionInfo;