import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-background py-10 px-6 md:px-0 border-t">
      <div className="xl:w-4/5 2xl:w-[68%] mx-auto">
        {/* ✅ Row: left = logo/contact | right = map */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          {/* Left: Logo + Contact */}
          <div className="flex flex-col gap-y-3 md:w-1/2">
            <h1 className="text-3xl md:text-5xl font-medium">
              <Image
                src={"/logo/logo.webp"}
                width={10000}
                height={10000}
                className="w-40"
                alt="NetrX Logo"
              />
            </h1>
            <p className="text-left text-xl text-gray-500">+91 8210947209</p>
            <p className="text-left text-xl text-gray-500">
              netrxdigital@gmail.com
            </p>
          </div>

          {/* Right: Map */}
          <div className="w-full md:w-1/2 h-[200px] md:h-[250px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.898675207026!2d85.1115919!3d25.575037599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4893031b8dc1b0b3%3A0x122cc7864962e1df!2sNetrX%20Digital%20-%20Best%20Digital%20Marketing%20Agency%20in%20Patna%20%2C%20Bihar!5e0!3m2!1sen!2sin!4v1756751281162!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* ✅ Bottom bar closer to content */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-x-2 mt-6 text-gray-500 text-center text-sm">
          © 2025 NetrX. All Rights Reserved.
          <Link href="/" className="text-blue-500 ml-1">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
