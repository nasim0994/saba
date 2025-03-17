import Spinner from "@/components/skeleton/Spinner";
import { TResponse } from "@/interface/globalInterface";
import {
  useGetCategoryQuery,
  useUpdateCategoryMutation,
} from "@/redux/features/category/categoryApi";
import { useState } from "react";
import toast from "react-hot-toast";
import { AiFillDelete } from "react-icons/ai";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { useNavigate, useParams } from "react-router-dom";

export default function EditCategory() {
  const [icons, setIcons] = useState<ImageListType>([]);
  const { id } = useParams();
  const { data, isLoading } = useGetCategoryQuery(id);
  const category = data?.data;
  const navigate = useNavigate();

  const [updateCategory, { isLoading: updateLoading }] =
    useUpdateCategoryMutation();

  const handleUpdateCategory = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const target = new FormData(form);

    const icon = icons[0]?.file;
    const name = target.get("name") as string;
    const order = target.get("order") as string;

    const info = {
      name,
      order: Number(order),
    };

    // check if icon and icon size
    if (icons?.length > 0 && icon && icon.size > 1024 * 1024)
      return toast.error("Image size is too large");

    const formData = new FormData();
    formData.append("data", JSON.stringify(info));
    if (icons?.length > 0) formData.append("image", icon as File);

    const res = (await updateCategory({ id, formData })) as TResponse;
    if (res?.data?.success) {
      toast.success("Category updated successfully");
      navigate("/admin/product/category/all");
    } else {
      toast.error(res?.error?.data?.message || "Failed to update category");
      console.log(res);
    }
  };

  if (isLoading) return <Spinner />;

  return (
    <form
      onSubmit={handleUpdateCategory}
      className="rounded bg-base-100 p-4 shadow form_group"
    >
      <div>
        <p>Icon</p>
        <div className="flex gap-4">
          <ImageUploading
            value={icons}
            onChange={(icn) => setIcons(icn)}
            dataURLKey="data_url"
          >
            {({ onImageUpload, onImageRemove, dragProps }) => (
              <div
                className="w-max rounded border border-dashed p-4"
                {...dragProps}
              >
                <div className="flex items-center gap-2">
                  <span
                    onClick={onImageUpload}
                    className="cursor-pointer rounded-2xl bg-primary px-4 py-1.5 text-sm text-base-100"
                  >
                    Choose Image
                  </span>

                  <p className="text-neutral-content">or Drop here</p>
                </div>

                {icons?.length <= 0 && category?.icon && (
                  <img
                    src={`${import.meta.env.VITE_BACKEND_URL}/${
                      category?.icon
                    }`}
                    alt={category?.name}
                    className="mt-4 w-32"
                  />
                )}

                <div className={`${icons?.length > 0 && "mt-4"} `}>
                  {icons?.map((img, index) => (
                    <div key={index} className="image-item relative">
                      <img src={img["data_url"]} alt="" className="w-40" />
                      <div
                        onClick={() => onImageRemove(index)}
                        className="absolute right-0 top-0 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-primary text-base-100"
                      >
                        <AiFillDelete />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </ImageUploading>

          <img
            src={`${import.meta.env.VITE_BACKEND_URL}/${category?.image}`}
            alt={category?.name}
            className="h-14 w-14 rounded-full border"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="mt-2">
          <label>Category name</label>
          <input type="text" name="name" defaultValue={category?.name} />
        </div>
        <div className="mt-2">
          <label>Category Order</label>
          <input type="number" name="order" defaultValue={category?.order} />
        </div>
      </div>

      <div className="mt-4">
        <button
          className="rounded bg-primary px-6 py-1.5 text-base-100"
          disabled={updateLoading}
        >
          {updateLoading ? "Loading.." : "Update"}
        </button>
      </div>
    </form>
  );
}
