import React from "react";
import ecommerce_logo from "../../ecommerce_logo.png";

export default function Footer() {
  return (
    <>
      <footer className="w-full text-slate-500">
        <div className="border-t border-slate-200 bg-slate-100 pt-16 pb-12 text-sm">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
              <div
                className="col-span-4 md:col-span-8 lg:col-span-4"
                aria-labelledby="footer-header"
              >
                <a
                  id="WindUI-5-logo"
                  aria-label="WindUI logo"
                  aria-current="page"
                  className="mb-6 flex items-center gap-2 whitespace-nowrap text-base font-medium leading-6 text-slate-700 focus:outline-none"
                  href="javascript:void(0)"
                >
                  <img className="h-7 w-7" src={ecommerce_logo} alt="logo" />
                  Ecommerce Website
                </a>
                <p>
                  Explore a vast array of products at unbeatable prices, curated
                  just for you and discover seamless shopping experiences with fast
                  delivery and secure transactions. Shop confidently with our
                  reliable customer support and hassle-free returns policy.
                </p>
              </div>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-2"
                aria-labelledby="footer-product-5-logo"
              >
                <h3
                  className="mb-4 text-base font-medium text-slate-700"
                  id="footer-product-5-logo"
                >
                  Product
                </h3>
                <ul>
                  {["Features", "Customers", "Why us?", "Pricing"].map(
                    (items) => {
                      return (
                        <li className="mb-2 leading-6">
                          <a
                            href="javascript:void(0)"
                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                          >
                            {items}
                          </a>
                        </li>
                      );
                    }
                  )}
                </ul>
              </nav>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-2"
                aria-labelledby="footer-docs-5-logo"
              >
                <h3
                  className="mb-4 text-base font-medium text-slate-700"
                  id="footer-docs-5-logo"
                >
                  Docs & Help
                </h3>
                <ul>
                  {[
                    "Documentation",
                    "Training",
                    "System status",
                    "FAQ's",
                    "Help Center",
                  ].map((items) => {
                    return (
                      <li className="mb-2 leading-6">
                        <a
                          href="javascript:void(0)"
                          className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                        >
                          {items}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-2"
                aria-labelledby="footer-about-5-logo"
              >
                <h3
                  className="mb-4 text-base font-medium text-slate-700"
                  id="footer-about-5-logo"
                >
                  About us
                </h3>
                <ul>
                  {["About us", "Careers", "Leadership", "Blog", "Events"].map(
                    (items) => {
                      return (
                        <li className="mb-2 leading-6">
                          <a
                            href="javascript:void(0)"
                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                          >
                            {items}
                          </a>
                        </li>
                      );
                    }
                  )}
                </ul>
              </nav>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-2"
                aria-labelledby="footer-get-in-touch-5-logo"
              >
                <h3
                  className="mb-4 text-base font-medium text-slate-700"
                  id="footer-get-in-touch-5-logo"
                >
                  Get in touch
                </h3>
                <ul>
                  {["Contact", "Support", "Partners", "Join research"].map(
                    (items) => {
                      return (
                        <li className="mb-2 leading-6">
                          <a
                            href="javascript:void(0)"
                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                          >
                            {" "}
                            {items}{" "}
                          </a>
                        </li>
                      );
                    }
                  )}
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-200 bg-slate-100 py-4 text-sm">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-4 items-center gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div class="col-span-2 md:col-span-4 lg:col-span-6">Copyright @2024. All rights reserved.</div>
              <nav
                className="col-span-3 md:col-span-4 lg:col-span-6"
                aria-labelledby="subfooter-links-3-sub"
              >
                <ul className="flex flex-wrap items-center justify-end gap-2 lg:gap-4">
                  <li className="leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      T&C
                    </a>
                  </li>
                  <li className="leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Privacy
                    </a>
                  </li>
                  <li className="leading-6">
                    <a
                      href="javascript:void(0)"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Cookies
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
