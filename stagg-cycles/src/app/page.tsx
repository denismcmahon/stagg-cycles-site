import Image from "next/image";
import NavBar from "../components/Navbar";

export default function Home() {
  return (
    <div>
       <NavBar />
      {/* Hero Section */}
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/Shop-Background.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center">
          <Image src="/logo.jpg" alt="Stagg Cycles Logo" width={150} height={150} className="mb-6 rounded-full" />
          <h1 className="text-5xl font-extrabold text-white mb-4 text-center">Welcome to Stagg Cycles</h1>
          <p className="text-xl text-white mb-4 text-center max-w-2xl">We have a huge range of children's, teenagers', and adults' bikes. Established in 1981, we specialize in catering for all cyclists.</p>
          <a href="#contact" className="bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300">Contact Us</a>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full h-full bg-gray-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-6">One of Ireland’s Leading Specialists in Road Racing Cycling Supplies</h2>
            <p className="text-lg mb-4">We cater for the commuter and leisure enthusiasts with an extensive range of Hybrid and Leisure Mountain bikes and also a huge range of Children's bikes. We specialize in catering for all cyclists, from children to people looking to get to work to the racing enthusiasts.</p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="w-full h-full bg-gray-100 text-gray-800 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-semibold mb-4">Personal Attention Guaranteed</h3>
            <p className="text-lg mb-4">We also offer:</p>
            <ul className="list-disc list-inside text-lg space-y-2 text-left mx-auto max-w-3xl">
              <li>Custom Built bikes and factory bikes altered to suit everyone's needs</li>
              <li>Professional In-shop Wheel Building Services</li>
              <li>Frame Refurbishing Services and Repairs</li>
              <li>Cycle tools and accessories stocked for the enthusiasts</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="w-full h-full bg-gray-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-lg mb-4">Drop in, call us at <a href="tel:(01)6283022" className="text-blue-400 hover:underline">(01) 6283022</a>, or email <a href="mailto:info@staggcylces.com" className="text-blue-400 hover:underline">info@staggcylces.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
