import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <div className="pb-10">
      <div className="container">
        <div className="text-center">
          <h1 className="text-xl font-medium uppercase text-neutral md:text-2xl md:font-semibold">
            FEATURED CATEGORIES
          </h1>

          <p className="mt-2 text-sm text-neutral-content">
            Get your desired product from featured category
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 text-center">
          <Link to={`/shops?category=slug`} className="relative">
            <img
              src={
                "https://media.istockphoto.com/id/1359562499/photo/outdoor-fashion-portrait-of-elegant-woman-wearing-lilac-suit-yellow-sunglasses-holding-trendy.jpg?s=612x612&w=0&k=20&c=ML9R0709qIu0SYvj08MM1wSKuVFgGPRVRFaRnxcmVbg="
              }
              alt=""
              width={400}
              height={400}
              className="h-48 w-full object-cover sm:h-60 md:h-[240px] lg:h-[320px] rounded"
            />

            <div className="absolute bottom-5 left-1/2 z-10 flex w-full -translate-x-1/2 flex-col gap-2 text-center">
              <h2 className="text-xl text-base-100 lg:text-2xl">
                category?.name
              </h2>
            </div>
          </Link>

          <Link to={`/shops?category=slug`} className="relative">
            <img
              src={
                "https://dhz27qxctdo0r.cloudfront.net/images/scale/2x/7a3affb12de6db5e3b3edecd9e9d8862.webp"
              }
              alt=""
              width={400}
              height={400}
              className="h-48 w-full object-cover sm:h-60 md:h-[240px] lg:h-[320px] rounded"
            />

            <div className="absolute bottom-5 left-1/2 z-10 flex w-full -translate-x-1/2 flex-col gap-2 text-center">
              <h2 className="text-xl text-base-100 lg:text-2xl">Baby Care</h2>
            </div>
          </Link>

          <Link to={`/shops?category=slug`} className="relative">
            <img
              src={
                "https://media.istockphoto.com/id/1359562499/photo/outdoor-fashion-portrait-of-elegant-woman-wearing-lilac-suit-yellow-sunglasses-holding-trendy.jpg?s=612x612&w=0&k=20&c=ML9R0709qIu0SYvj08MM1wSKuVFgGPRVRFaRnxcmVbg="
              }
              alt=""
              width={400}
              height={400}
              className="h-48 w-full object-cover sm:h-60 md:h-[240px] lg:h-[320px] rounded"
            />

            <div className="absolute bottom-5 left-1/2 z-10 flex w-full -translate-x-1/2 flex-col gap-2 text-center">
              <h2 className="text-xl text-base-100 lg:text-2xl">
                category?.name
              </h2>
            </div>
          </Link>

          <Link to={`/shops?category=slug`} className="relative">
            <img
              src={
                "https://dhz27qxctdo0r.cloudfront.net/images/scale/2x/7a3affb12de6db5e3b3edecd9e9d8862.webp"
              }
              alt=""
              width={400}
              height={400}
              className="h-48 w-full object-cover sm:h-60 md:h-[240px] lg:h-[320px] rounded"
            />

            <div className="absolute bottom-5 left-1/2 z-10 flex w-full -translate-x-1/2 flex-col gap-2 text-center">
              <h2 className="text-xl text-base-100 lg:text-2xl">Baby Care</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
