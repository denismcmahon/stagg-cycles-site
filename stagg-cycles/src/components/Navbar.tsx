import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Stagg Cycles</div>
        <div className="space-x-4">
          <Link href="/" className="text-white hover:underline">Home</Link>
          <Link href="/products" className="text-white hover:underline">Products</Link>
          <Link href="/brands" className="text-white hover:underline">Brands</Link>
          <Link href="/cycle-to-work" className="text-white hover:underline">Cycle to Work Scheme</Link>
          <Link href="/bikes" className="text-white hover:underline">Bikes</Link>
          <Link href="/about" className="text-white hover:underline">About Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
