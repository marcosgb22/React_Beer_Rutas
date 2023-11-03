import Spinner from 'react-bootstrap/Spinner';
import "./spinner.css"

function SpinnerLoading() {
  return (
    <Spinner className='spinner' animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default SpinnerLoading;