import {Link} from 'react-router-dom';

const Header = (props) => {
    return (
        <Link to='/'>
            <h1 className='header'>Featured Cockatails</h1>
        </Link>
    )
  }
  
  export default Header
  