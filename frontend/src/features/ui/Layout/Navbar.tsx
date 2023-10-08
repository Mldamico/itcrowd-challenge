import { Button, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';

export function NavBar() {
  return (
    <Navbar
      fluid
      rounded
    >
      <Navbar.Brand>
        <Link to='/' className="self-center whitespace-nowrap text-xl font-semibold dark:text-white cursor-pointer">
          IT Crowd Challenge
        </Link>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>
          <Link to='/admin'>
            Admin
          </Link>
        </Button>
        <Navbar.Toggle />
      </div>

    </Navbar>
  );
}


