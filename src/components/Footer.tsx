import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bottom-0 right-0 left-0 bg-slate-900 pt-20">
        {/* PC */}

        <div className="lg:grid grid-cols-10 mb-20 hidden">
          <div className="col-span-4 pl-6">
            <div className="lg:flex items-center">
              <Image src="/logo.svg" alt="logo" height={25} width={25} />
              <p className="text-xl ml-2 uppercase font-semibold text-[#34cea1] tracking-wide">
                Fetek
              </p>
            </div>
            <p className="text-white mt-4">
              With a experienced talent team, Fetek will be a reputable
              technology partner to maximize the development of your business
            </p>
            <div className="mt-4">
              <Link href="/" className="mr-4">
                <i className="fa-brands fa-linkedin text-white text-5xl"></i>
              </Link>
              <Link href="/">
                <i className="fa-brands fa-square-facebook text-white text-5xl"></i>
              </Link>
            </div>
          </div>
          <div className="col-span-2 text-white">
            <h3 className="font-semibold text-xl">Work</h3>

            <p className="mt-6">
              <Link href="/">How We Work</Link>
            </p>
            <p className="mt-4">
              <Link href="/">Contact us</Link>
            </p>
          </div>
          <div className="col-span-2 text-white">
            <h3 className="font-semibold text-xl">Services</h3>

            <p className="mt-6">
              <Link href="/">Web and Mobile Development</Link>
            </p>
            <p className="mt-4">
              <Link href="/">Backend Development</Link>
            </p>
            <p className="mt-4">
              <Link href="/">AI and Machine Learning</Link>
            </p>
            <p className="mt-4">
              <Link href="/">Data Transformation</Link>
            </p>
            <p className="mt-4">
              <Link href="/">Datalake and Lakehouse</Link>
            </p>
            <p className="mt-4">
              <Link href="/">Reporting Development</Link>
            </p>
          </div>
          <div className="col-span-2 text-white">
            <h3 className="font-semibold text-xl">Busniess Solution</h3>

            <p className="mt-6">
              <Link href="/">Data Solution</Link>
            </p>
            <p className="mt-4">
              <Link href="/">IT Solution</Link>
            </p>
            <p className="mt-4">
              <Link href="/">Corporate</Link>
            </p>
          </div>
        </div>

        {/* Mobile */}
        <div className=" mb-20 lg:hidden">
          <div className="pl-6 pr-6">
            <div className="flex items-center">
              <Image src="/logo.svg" alt="logo" height={25} width={25} />
              <p className="text-xl ml-2 uppercase font-semibold text-[#34cea1] tracking-wide">
                Fetek
              </p>
            </div>
            <p className="text-white mt-4">
              With a experienced talent team, Fetek will be a reputable
              technology partner to maximize the development of your business
            </p>
            <div className="mt-4">
              <Link href="/" className="mr-4">
                <i className="fa-brands fa-linkedin text-white text-5xl"></i>
              </Link>
              <Link href="/">
                <i className="fa-brands fa-square-facebook text-white text-5xl"></i>
              </Link>
            </div>
          </div>
          <div className="mt-8 text-white pl-6">
            <h3 className="font-semibold text-xl">Work</h3>

            <p className="mt-6">
              <Link href="/">How We Work</Link>
            </p>
            <p className="mt-4">
              <Link href="/">Contact us</Link>
            </p>
          </div>
          <div className="mt-8 text-white pl-6">
            <h3 className="font-semibold text-xl">Services</h3>

            <p className="mt-6">
              <Link href="/">Web and Mobile Development</Link>
            </p>
            <p className="mt-4">
              <Link href="/">Backend Development</Link>
            </p>
            <p className="mt-4">
              <Link href="/">AI and Machine Learning</Link>
            </p>
            <p className="mt-4">
              <Link href="/">Data Transformation</Link>
            </p>
            <p className="mt-4">
              <Link href="/">Datalake and Lakehouse</Link>
            </p>
            <p className="mt-4">
              <Link href="/">Reporting Development</Link>
            </p>
          </div>
          <div className="mt-8 text-white pl-6">
            <h3 className="font-semibold text-xl">Busniess Solution</h3>

            <p className="mt-6">
              <Link href="/">Data Solution</Link>
            </p>
            <p className="mt-4">
              <Link href="/">IT Solution</Link>
            </p>
            <p className="mt-4">
              <Link href="/">Corporate</Link>
            </p>
          </div>
        </div>
        <p className="text-white bottom-0 bg-gray-700 w-full py-1 text-center">
          © {new Date().getFullYear()} Copyright by Fetek. All Right Reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
