import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-10 px-6 sm:px-10 md:px-14 lg:px-20">
      <div className="xl:w-4/5 2xl:w-[68%] mx-auto space-y-10">
        
        {/* ===== TOP SECTION ===== */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-8">
          
          {/* Left: Logo + Contact Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3 w-full md:w-[55%]">
            <Image
              src="/logo/logo.webp"
              width={180}
              height={60}
              alt="NetrX Logo"
              className="object-contain w-32 sm:w-40 md:w-44"
            />
            <div className="space-y-1">
              <p className="text-base sm:text-lg text-muted-foreground">
                +91 8210947209
              </p>
              <p className="text-base sm:text-lg text-muted-foreground break-all">
                netrxdigital@gmail.com
              </p>
              <p className="text-base sm:text-lg text-muted-foreground break-all">
                Radhakrishna Nagar, 70, 35 Feet Rd,near 
              </p>
               <p className="text-base sm:text-lg text-muted-foreground break-all">
                Panchsheel Hospital, Patna, Bihar 800032
              </p>
            </div>
          </div>

          {/* Right: Embedded Map */}
          <div className="w-full md:w-[85%] h-[220px] sm:h-[250px] md:h-[350px] rounded-xl overflow-hidden shadow-md md:-ml-6">
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

        {/* ===== BOTTOM SECTION ===== */}
        <div className="w-full border-t border-border/50 pt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-3 text-sm text-muted-foreground">
            <p className="text-center sm:text-left">
              © 2025 <span className="font-medium text-foreground">NetrX</span>.
              All Rights Reserved.
            </p>
            <div className="flex justify-center sm:justify-end">
              {/* <Link
                href="/privacy-policy"
                className="text-blue-500 hover:underline"
              >
                Privacy Policy
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
