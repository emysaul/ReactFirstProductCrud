import { Fragment } from 'react';
import { Alert } from 'react-bootstrap';

const Clock = (props) => {
    const alerts = [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant, idx) => (
        <Alert key={idx} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))
    return (
    <Fragment>
        {alerts}
    </Fragment>
    );
}

export default Clock