import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Minimal configuration';

ReactDOM.render(
<div>{title}</div>,
document.getElementById('app')
);
module.hot.accept();