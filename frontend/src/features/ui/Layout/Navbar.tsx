import { Button, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';

export function NavBar() {
  return (
    <Navbar
      fluid
      rounded
    >
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          IT Crowd Challenge
        </span>
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


