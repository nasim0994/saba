import { TResponse } from "@/interface/globalInterface";
import {
  useAddCategoryMutation,
  useGetCategoriesQuery,
} from "@/redux/features/category/categoryApi";
import { useState } from "react";
import toast from "react-hot-toast";
import { AiFillDelete } from "react-icons/ai";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { useNavigate } from "react-router-dom";

export default function AddCategory() {
  const navigate = useNavigate();
  const [icons, setIcons] = useState<ImageListType>([]);
  const { data } = useGetCategoriesQuery({});

  const [addCategory, { isLoading }] = useAddCategoryMutation();

  const orderNum = data?.data?.length ? data?.data?.length + 1 : 1;

  const handleAddCategory = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const target = new FormData(form);

    const icon = icons[0]?.file;
    const name = target.get("name") as string;
    const order = target.get("order") as string;

    if (!icon) {
      return toast.error("Icon is required");
    }

    // check image size
    if (icon?.size > 1024 * 1024) {
      return toast.error("Image size should be less than 1mb");
    }

    if (name === "") {
      return toast.error("Category name is required");
    }

    const info = {
      name,
      order: Number(order),
    };

    const formData = new FormData();
    formData.append("image", icon);
    formData.append("data", JSON.stringify(info));

    const res = (await addCategory(formData)) as TResponse;

    if (res?.data?.success) {
      toast.success("Category added successfully");
      setIcons([]);
      navigate("/admin/product/category/all");
    } else {
      toast.error(res?.error?.data?.message || "Failed to add category");
      console.log(res);
    }
  };

  return (
    <form
      onSubmit={handleAddCategory}
      className="rounded bg-base-100 p-4 shadow form_group"
    >
      <div>
        <p className="text-neutral-content">Icon</p>
        <ImageUploading
          value={icons}
          onChange={(icon) => setIcons(icon)}
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
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="mt-2">
          <label className="text-neutral-content">Category name</label>
          <input type="text" name="name" />
        </div>
        <div className="mt-2">
          <label className="text-neutral-content">Category Order</label>
          <input type="number" defaultValue={orderNum} name="order" />
        </div>
      </div>

      <div className="mt-4">
        <button className="primary_btn text-sm" disabled={isLoading}>
          {isLoading ? "Loading.." : "Add category"}
        </button>
      </div>
    </form>
  );
}
