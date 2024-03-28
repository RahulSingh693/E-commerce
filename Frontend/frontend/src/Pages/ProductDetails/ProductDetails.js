import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import Comments from "../../Components/productDetails/Comments";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { RadioGroup } from "@headlessui/react";
import { Box, Grid, LinearProgress } from "@mui/material";
import Ratings from "../../Components/productDetails/Ratings";
import {Gouns} from "../../Data/Gouns/gouns"
import HomeCards from "../../Components/HomeCard/HomeCards";
import { useNavigate } from "react-router-dom";

const product = {
  name: "T-shirts",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://rukminim2.flixcart.com/image/832/832/kg15ocw0-0/sari/o/p/z/free-nia-pink-indian-culture-unstitched-original-imafwczda8bqdhe4.jpeg?q=70&crop=false",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://rukminim2.flixcart.com/image/832/832/kg15ocw0-0/sari/o/p/z/free-nia-pink-indian-culture-unstitched-original-imafwczda8bqdhe4.jpeg?q=70&crop=false",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://rukminim2.flixcart.com/image/832/832/kg15ocw0-0/sari/o/p/z/free-nia-pink-indian-culture-unstitched-original-imafwczda8bqdhe4.jpeg?q=70&crop=false",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://rukminim2.flixcart.com/image/832/832/kg15ocw0-0/sari/o/p/z/free-nia-pink-indian-culture-unstitched-original-imafwczda8bqdhe4.jpeg?q=70&crop=false",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const rating = [
  {
    title: "Excellent",
    val:80,
    colour:"success"
  },
  {
    title:"Very good",
    val: 55,
    colour: "success"
  },
  {
    title:"Good",
    val: 65,
    colour: "secondary"
  },
  {
    title:"Average",
    val: 35,
    colour: "warning"
  },
  {
    title:"Poor",
    val: 25,
    colour: "error"
  }
]

const ProductDetails = () => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  const navigate = useNavigate();
  
  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-4">
          {/* Image gallery */}
          <div className="flex flex-col items-center">
            <div className=" max-w-[30rem] max-h-[35rem] overflow-hidden rounded-lg">
              <img
                src={product.images[0].src}
                alt={product.images[0].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-wrap space-x-5 justify-center">
              {product.images.map((item, idx) => (
                <div
                  key={idx}
                  className="aspect-h-2 aspect-w-3 overflow-hidden cursor-pointer rounded-lg max-w-[5rem] max-h-[5rem] mt-4"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className=" lg:col-span-1 max-auto max-w-2xl pb-16 sm:px-4 lg:max-w-7xl lg:pb-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-800 sm:text-3xl">
                SATYAM WEAVES
              </h1>
              <h1 className="text-[1.1rem] font-semibold tracking-tight text-gray-600">
                Woven Banarasi Cotton Silk Saree (Pink)
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <div className="flex space-x-3 items-center text-lg lg:text-xl text-gray-900 mt-4">
                <p className="font-semibold">₹888</p>
                <p className=" opacity-65 font-medium line-through">₹4,499</p>
                <p className="text-green-700 font-semibold">80%</p>
              </div>

              {/* Reviews */}
              <div className="mt-4">
                <div className="flex items-center space-x-3">
                  <Rating
                    name="half-rating-read"
                    defaultValue={3.7}
                    precision={0.1}
                    readOnly
                  />
                  <p className="text-sm opacity-70 font-medium text-gray-900">
                    500 ratings
                  </p>
                  <p className="text-sm font-medium text-indigo-500">
                    349 reviews
                  </p>
                </div>
              </div>

              <form className="mt-10">
                {/* Colors */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Color</h3>

                  <RadioGroup
                    value={selectedColor}
                    onChange={setSelectedColor}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a color
                    </RadioGroup.Label>
                    <div className="flex items-center space-x-3">
                      {product.colors.map((color) => (
                        <RadioGroup.Option
                          key={color.name}
                          value={color}
                          className={({ active, checked }) =>
                            classNames(
                              color.selectedClass,
                              active && checked ? "ring ring-offset-1" : "",
                              !active && checked ? "ring-2" : "",
                              "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                            )
                          }
                        >
                          <RadioGroup.Label as="span" className="sr-only">
                            {color.name}
                          </RadioGroup.Label>
                          <span
                            aria-hidden="true"
                            className={classNames(
                              color.class,
                              "h-8 w-8 rounded-full border border-black border-opacity-10"
                            )}
                          />
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                    <a
                      href="#"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Size guide
                    </a>
                  </div>

                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a size
                    </RadioGroup.Label>
                    <div className="grid grid-cols-5 gap-3 sm:grid-cols-8 lg:grid-cols-5">
                      {product.sizes.map((size) => (
                        <RadioGroup.Option
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={({ active }) =>
                            classNames(
                              size.inStock
                                ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                : "cursor-not-allowed bg-gray-50 text-gray-200",
                              active ? "ring-1 ring-indigo-400" : "",
                              "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label as="span">
                                {size.name}
                              </RadioGroup.Label>
                              {size.inStock ? (
                                <span
                                  className={classNames(
                                    active ? "border" : "border-2",
                                    checked
                                      ? "border-indigo-400"
                                      : "border-transparent",
                                    "pointer-events-none absolute -inset-px rounded-md"
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                >
                                  <svg
                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    stroke="currentColor"
                                  >
                                    <line
                                      x1={0}
                                      y1={100}
                                      x2={100}
                                      y2={0}
                                      vectorEffect="non-scaling-stroke"
                                    />
                                  </svg>
                                </span>
                              )}
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <button
                  onClick={() => navigate("/cart")}
                  type="submit"
                  className="mt-10 flex w-[70%] items-center justify-center rounded-md border border-transparent bg-purple-600 px-8 py-4 text-xl font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                >
                  <LocalMallIcon className="mr-4 " fontSize="15px" />
                  Add to bag
                </button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 pb-3">
                  Description
                </h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rating and review section */}
        <p className="font-semibold text-xl text-gray-800 px-4 pb-3">
          Ratings and reviews
        </p>
        <section className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 py-4">
          {/* Reviews and comments */}
          <div className="pb-4">
            {[1, 2, 3, 4, 5].map((idx) => (
              <Comments key={idx} />
            ))}
          </div>

          {/* ratings */}
          <div>
            <p className="text-xl font-semibold text-gray-800 ">
              Average Rating
            </p>
            <div className="flex gap-3 items-center pt-2">
              <Rating
                value={3.9}
                name="average_rating"
                precision={0.5}
                readOnly
              />
              <span className=" opacity-65 ">
                200 Ratings
              </span>
            </div>
              <Grid className="mt-6 px-2">
                <Box className="space-y-3">
                  { rating.map((item) => <Ratings name={item.title} vals={item.val} col={item.colour} />)}
                </Box>
              </Grid>

          </div>
        </section>

        {/* Similar products */}
        <section className="pt-5 w-full px-3 pb-10">
              <p className="text-xl font-semibold text-gray-800 px-4 pb-3">Similar Products</p>
              <div className="flex flex-wrap space-y-4 justify-center py-5">
                {Gouns.map((item, idx) => <HomeCards index={idx} image={item.image} title={item.title} brand={item.brand} />)}
              </div>
        </section>

      </div>
    </div>
  );
};

export default ProductDetails;
