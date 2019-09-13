import React from 'react'

function RedirectPage({match}) {
    React.useEffect(() =>{ window.location = 'http://localhost:5000/' + match.params.code}, []);
    return <></>
}

export default RedirectPage