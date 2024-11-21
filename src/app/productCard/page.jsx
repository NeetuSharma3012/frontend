'use client';
import { IconCheck, IconLoader3 } from '@tabler/icons-react';
import { useFormik } from 'formik';
import React from 'react';



const ProductCard = () => {

  // initializing formik
  const product = useFormik({
    initialValues: {
      
      ProductTitle :  '',
      Brand:   '',
      Model:   '',
      Category : '',
      Type:       '',
      Price : '',
      Image : ''    
  
    },
    onSubmit: (values, { resetForm }) => {

      setTimeout(() => {
        console.log(values);
        resetForm();
      }, 2000);

      // send values to backend
    },
    
  })

  return (
    <div className='min-h-screen'>
      <div className="max-w-lg mx-auto mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
        <div className="p-4 sm:p-7">
          <div className="">
          

            {/* Form */}
            <form onSubmit={product.handleSubmit} >
              <div className="grid gap-y-4">
                {/* Form Group ProductTitle*/}
                <div>
                  <label
                    htmlFor="ProductTitle"
                    className="block text-lg mb-2 dark:text-white"
                  >
                    Product Title
                  </label>
                  <div className="relative">
                    <input
                      type="ProductTitle"
                      id="ProductTitle"
                      onChange={product.handleChange}
                      value={product.values.ProductTitle}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required=""
                      aria-describedby="ProductTitle-error"
                    />
                    <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                      <svg
                        className="size-5 text-red-500"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  {
                    (product.errors.ProductTitle && product.touched.ProductTitle) && (
                      <p className="text-xs text-red-600 mt-2" id="ProductTitle-error">
                        {product.errors.ProductTitle}
                      </p>
                    )
                  }
                </div>
                {/* End Form Group */}
                {/* Form Group  Brand*/}
                <div>
                  <label
                    htmlFor=" Brand"
                    className="block text-lg mb-2 dark:text-white"
                  >
                    Brand
                  </label>
                  <div className="relative">
                    <input
                      type=" Brand"
                      id=" Brand"
                      onChange={product.handleChange}
                      value={product.values.Brand}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required=""
                      aria-describedby="Brand-error"
                    />
                    <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                      <svg
                        className="size-5 text-red-500"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  {
                    (product.errors.Brand && product.touched.Brand) && (
                      <p className="text-xs text-red-600 mt-2" id=" Brand-error">
                        {product.errors.Brand}
                      </p>
                    )
                  }
                </div>
                {/* End Form Group */}

                {/* Form Group Model */}
                <div>
                  <label
                    htmlFor="Model"
                    className="block text-lg mb-2 dark:text-white"
                  >
                    Model
                  </label>
                  <div className="relative">
                    <input
                      type="Model"
                      id="Model"
                      onChange={product.handleChange}
                      value={product.values.Model}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required=""
                      aria-describedby="Model-error"
                    />
                    <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                      <svg
                        className="size-5 text-red-500"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  {

                    (product.errors.Model && product.touched.Model) && (
                      <p className="text-xs text-red-600 mt-2" id="Model-error">
                        {product.errors.Model}
                      </p>
                    )
                  }
                </div>
                {/* End Form Group */}
                {/* Form Group Category */}
                <div>
                  <label
                    htmlFor="Category"
                    className="block text-lg mb-2 dark:text-white"
                  >
                   Category
                  </label>
                  <div className="relative">
                    <input
                      type="Category"
                      id="Category"
                      onChange={product.handleChange}
                      value={product.values.Category}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required=""
                      aria-describedby="Category-error"
                    />
                    <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                      <svg
                        className="size-5 text-red-500"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  {
                    (product.errors.Category && product.touched.Category) && (
                      <p className="text-xs text-red-600 mt-2" id="Category-error">
                        {product.errors.Category}
                      </p>
                    )
                  }
                </div>
                {/* End Form Group */}
                 {/* Form Group  Type */}
                 <div>
                  <label
                    htmlFor=" Type"
                    className="block text-lg mb-2 dark:text-white"
                  >
                   Type
                  </label>
                  <div className="relative">
                    <input
                      type="Type"
                      id=" Type"
                      onChange={product.handleChange}
                      value={product.values.Type}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required=""
                      aria-describedby=" Type-error"
                    />
                    <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                      <svg
                        className="size-5 text-red-500"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  {
                    (product.errors.Type && product.touched.Type) && (
                      <p className="text-xs text-red-600 mt-2" id="Type-error">
                        {product.errors.Type}
                      </p>
                    )
                  }
                </div>
                {/* End Form Group */}
                 {/* Form Group Price */}
                 <div>
                  <label
                    htmlFor="Price"
                    className="block text-lg mb-2 dark:text-white"
                  >
                  Price
                  </label>
                  <div className="relative">
                    <input
                      type="Price"
                      id=" Price"
                      onChange={product.handleChange}
                      value={product.values.Price}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required=""
                      aria-describedby="Price-error"
                    />
                    <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                      <svg
                        className="size-5 text-red-500"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  {
                    (product.errors.Price &&product.touched.Price) && (
                      <p className="text-xs text-red-600 mt-2" id="Price-error">
                        {product.errors.Price}
                      </p>
                    )
                  }
                </div>
                {/* End Form Group */}
                {/* Form Group image */}
                <div>
                  <label
                    htmlFor="Image"
                    className="block text-lg mb-2 dark:text-white"
                  >
                 Image
                  </label>
                  <div className="relative">
                    <input
                      type="Image"
                      id=" Image"
                      onChange={product.handleChange}
                      value={product.values.Image}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required=""
                      aria-describedby="Image-error"
                    />
                    <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                      <svg
                        className="size-5 text-red-500"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  {
                    (product.errors.Image && product.touched.Image) && (
                      <p className="text-xs text-red-600 mt-2" id="Image-error">
                        {product.errors.Image}
                      </p>
                    )
                  }
                </div>
                {/* End Form Group */}
                
                {/* Checkbox */}
                <div className="flex items-center">
                  <div className="flex">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ms-3">
                    <label htmlFor="remember-me" className="text-sm dark:text-white">
                      I accept the{" "}
                      <a
                        className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                {/* End Checkbox */}
                <button
                  type="Add To Cart"
                  disabled={product.isSubmitting}
                  className="flex items-center gap-3 w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  {/* { product.isSubmitting ? <IconLoader3 className='animate-spin' /> : <IconCheck /> } */}
                  { product.isSubmitting ? 'Submitting...' : 'Add To Cart' }
                </button>
              </div>
            </form>
            {/* End Form */}
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProductCard;