import { BiSearch } from "react-icons/bi";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

export default function Search() {
  return (
    <>
      <Drawer direction="top">
        <DrawerTrigger>
          <button className="hidden overflow-hidden rounded-lg md:flex">
            <div className="bg-gray-200 px-8 py-2">
              <p className="text-xs text-neutral-content opacity-50">
                search product...
              </p>
            </div>
            <div className="flex w-8 items-center justify-center bg-primary px-3 text-base-100">
              <p>
                <BiSearch />
              </p>
            </div>
          </button>
        </DrawerTrigger>
        <DrawerContent>
          <section className="pt-6">
            <div className="container">
              <div className="flex items-center gap-4">
                <div>
                  <img
                    src="/images/logo.png"
                    alt="logo"
                    className="w-28 sm:w-32"
                    loading="lazy"
                  />
                </div>

                <div className="w-full">
                  <input
                    type="text"
                    className="rounded-full px-4 py-2.5 border border-neutral w-full outline-none text-neutral placeholder:font-light placeholder:text-sm"
                    placeholder="Search..."
                  />
                </div>
              </div>

              {/* Result */}
              <div className="mt-5 pl-32">
                <h2 className="text-neutral font-medium">
                  Recommended For You
                </h2>
              </div>
            </div>
          </section>
        </DrawerContent>
      </Drawer>
    </>
  );
}
