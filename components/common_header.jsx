import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-black text-green-300 p-4 flex justify-between items-center">

      <div>
        <h1 className="text-lg font-bold">simple firebase commands </h1>
      </div>

      <nav className="flex justify-center space-x-4">
        <Link href="/Create">
          <h1 className="hover:underline">Create</h1>
        </Link>
        <Link href="/show">
          <h1 className="hover:underline">Show</h1>
        </Link>
        <Link href="/Update">
          <h1 className="hover:underline">Update</h1>
        </Link>
        <Link href="/Delete">
          <h1 className="hover:underline">Delete</h1>
        </Link>
      </nav>

  
      <div>
        <img src="images/fire.jpg" alt="Logo" className="h-8 w-8" />
      </div>
    </header>
  );
};

export default Header;
