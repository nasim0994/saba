import ProductCards from "@/components/skeleton/ProductCards";

export default function FeatureProducts() {
  return (
    <section className="py-5 lg:py-10">
      <div className="container">
        <h2 className="mb-3 text-center text-xl sm:mb-6 sm:text-2xl">
          Feature Collections
        </h2>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5">
          {/* {isLoading && <ProductCards />} */}
          {/* {!isLoading &&
            products?.length > 0 &&
            products?.map((product) => (
              <ProductCard key={product?._id} product={product} />
            ))} */}
        </div>
      </div>
    </section>
  );
}
