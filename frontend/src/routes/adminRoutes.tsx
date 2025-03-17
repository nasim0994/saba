import AdminLayout from "@/layouts/AdminLayout";
import AdminProtectedRoute from "@/layouts/AdminProtectedRoute";
import AddCategory from "@/pages/admin/category/categories/AddCategory";
import AllCategories from "@/pages/admin/category/categories/AllCategories";
import EditCategory from "@/pages/admin/category/categories/EditCategory";
import Dashboard from "@/pages/admin/Dashboard";

export const adminRoutes = {
  path: "/admin",
  element: (
    <AdminProtectedRoute>
      <AdminLayout />
    </AdminProtectedRoute>
  ),
  children: [
    {
      path: "dashboard",
      element: <Dashboard />,
    },

    // category
    {
      path: "/admin/product/category/all",
      element: <AllCategories />,
    },
    {
      path: "/admin/product/category/add",
      element: <AddCategory />,
    },
    {
      path: "/admin/product/category/edit/:id",
      element: <EditCategory />,
    },
  ],
};
