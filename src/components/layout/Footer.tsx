import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="mt-12 bg-[#f3f6fc] pt-10 text-gray-700">
      
      <div className="section-shell grid gap-10 md:grid-cols-4">

        {/* LOGO & DESCRIPTION */}
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-xs font-bold text-white">
              CB
            </div>
            <span className="text-lg font-semibold tracking-tight text-slate-900">
              Chinabazaar
            </span>
          </div>

          <p className="mt-4 max-w-xs text-sm text-gray-600">
            Your trusted online shopping destination for fashion, electronics, 
            beauty, home essentials and more.
          </p>

          <div className="mt-4 flex gap-3">
            <Facebook className="h-5 w-5 text-gray-500 hover:text-blue-600" />
            <Instagram className="h-5 w-5 text-gray-500 hover:text-pink-600" />
            <Twitter className="h-5 w-5 text-gray-500 hover:text-sky-500" />
          </div>
        </div>

        {/* CUSTOMER SERVICE */}
        <div>
          <h3 className="mb-3 text-sm font-semibold text-slate-900">
            Customer Service
          </h3>
          <ul className="space-y-2 text-xs text-gray-600">
            <li>Help Center</li>
            <li>Returns & Refunds</li>
            <li>Order Tracking</li>
            <li>Shipping Info</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* ABOUT */}
        <div>
          <h3 className="mb-3 text-sm font-semibold text-slate-900">
            About Chinabazaar
          </h3>
          <ul className="space-y-2 text-xs text-gray-600">
            <li>About Us</li>
            <li>Careers</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* PAYMENTS & APP LINKS */}
        <div>
          <h3 className="mb-3 text-sm font-semibold text-slate-900">
            Payments & App
          </h3>

          {/* PAYMENT LOGOS */}
          <div className="flex gap-3">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
              alt="Visa"
              width={40}
              height={20}
            />
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              alt="MasterCard"
              width={40}
              height={20}
            />
            <Image
              src="data:image/png;base64,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"
              alt="UPI"
              width={40}
              height={20}
            />
          </div>

          {/* APP STORE */}
          <div className="mt-4 flex flex-col gap-3">
            <Image
              src="data:image/png;base64,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"
              alt="Google Play"
              width={120}
              height={40}
              className="bg-white rounded-lg p-1"
            />
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg"
              alt="App Store"
              width={120}
              height={40}
              className="bg-white rounded-lg p-1"
            />
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-10 border-t border-gray-300 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Chinabazaar — All rights reserved.
      </div>
    </footer>
  );
}
