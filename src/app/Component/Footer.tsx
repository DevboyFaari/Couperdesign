import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto flex justify-center">
        <div className="grid grid-cols-4 gap-8 text-center">
          <div>
            <h4 className="text-black-900 font-black mb-2">Support</h4>
            <a href="#help" className="text-gray-500 hover:underline block">
              Help Center
            </a>
            <a
              href="#safety-info"
              className="text-gray-500 hover:underline block"
            >
              Safety Information
            </a>
            <a
              href="#cancelation"
              className="text-gray-500 hover:underline block"
            >
              Cancellation Option
            </a>
            <a href="#report" className="text-gray-500 hover:underline block">
              Report Complaint
            </a>
          </div>
          <div>
            <h4 className="text-black-900 font-black mb-2">Community</h4>
            <a href="#services" className="text-gray-500 hover:underline block">
              Services
            </a>
            <a href="#blog" className="text-gray-500 hover:underline block">
              Blog
            </a>
            <a href="#support" className="text-gray-500 hover:underline block">
              Support
            </a>
          </div>
          <div>
            <h4 className="text-black-900 font-black mb-2">Company</h4>
            <a href="#about" className="text-gray-500 hover:underline block">
              About Us
            </a>
            <a href="#careers" className="text-gray-500 hover:underline block">
              Careers
            </a>
            <a href="#press" className="text-gray-500 hover:underline block">
              Press
            </a>
            <a
              href="#investors"
              className="text-gray-500 hover:underline block"
            >
              Investors
            </a>
          </div>
          <div>
            <h4 className="text-black-900 font-black mb-2">Legal</h4>
            <a href="#terms" className="text-gray-500 hover:underline block">
              Terms of Service
            </a>
            <a href="#privacy" className="text-gray-500 hover:underline block">
              Privacy Policy
            </a>
            <a href="#cookie" className="text-gray-500 hover:underline block">
              Cookie Policy
            </a>
            <a
              href="#disclaimer"
              className="text-gray-500 hover:underline block"
            >
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
