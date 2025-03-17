import { FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

export default function TopHeader() {
  return (
    <section className="py-1.5 bg-gradient-to-r from-primary to-secondary">
      <div className="container">
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="sm:col-span-2">
            <Marquee>
              <div className="flex items-center gap-6 text-base-100 text-[13px] font-medium uppercase">
                <p>I can be a React component,</p>
                <p>I can be a React component,</p>
                <p>I can be a React component,</p>
                <p>I can be a React component,</p>
              </div>
            </Marquee>
          </div>

          <div className="hidden sm:flex items-center justify-end gap-4 text-base-100">
            <Link to="#">
              <BsFacebook className="text-[17px]" />
            </Link>
            <Link to="#">
              <AiFillInstagram className="text-[21px]" />
            </Link>
            <Link to="#">
              <FaTiktok className="text-[17px]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
