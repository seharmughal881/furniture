import { useState } from "react";
import { ChevronDown, ChevronUp, Phone, MessageCircle, Video } from "lucide-react";

type SectionKey = "features" | "aboutBrand" | "warranty";

const specs = [
  {
    label: "Dimensions",
    value: (
      <ul className="list-disc list-inside space-y-0.5 text-sm">
        <li>Twin: 38" x 75" x 13.5"H</li>
        <li>Twin XL: 38" x 80" x 13.5"H</li>
        <li>Full: 54" x 75" x 13.5"H</li>
        <li>Queen: 60" x 80" x 13.5"H</li>
        <li>King: 76" x 80" x 13.5"H</li>
        <li>CA King: 72" x 84" x 13.5"H</li>
      </ul>
    ),
  },
  { label: "Mattress Construction Type", value: "Innerspring" },
  { label: "Mattress Pillow Top Style", value: "Euro Top" },
  { label: "Firmness", value: "Medium" },
  { label: "Temperature Regulating", value: "No" },
  { label: "Motion Control", value: "No" },
  { label: "Remove From Roll", value: "No" },
  { label: "Adjustable", value: "No" },
  { label: "Removable Cover", value: "No" },
  { label: "CertiPUR-US", value: "No" },
  { label: "OEKO-TEX Compatible", value: "No" },
  { label: "Country of Origin", value: "No" },
  { label: "Online Only", value: "No" },
];

export default function ProductDetail() {
  const [open, setOpen] = useState<Record<SectionKey, boolean>>({
    features: true,
    aboutBrand: false,
    warranty: false,
  });

  const toggle = (key: SectionKey) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="max-w-2xl mx-auto bg-white min-h-screen">

      {/* Description */}
      <div className="px-4 pt-5 pb-3 border-b border-gray-200">
        <h2 className="text-sm font-semibold text-gray-900 mb-2">Description</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          The Studio Convo Euro Top Mattress offers a plush, conforming feel designed to gently
          contour your body's pressure points for a more informed sleep experience. Ideal for sleepers
        </p>
        <button className="flex items-center gap-1 mt-1 text-sm text-blue-700 font-medium hover:underline">
          <span className="text-blue-600 mr-0.5 text-base leading-none">&#x25B6;</span>
          Read More
        </button>
      </div>

      {/* Features & Specifications */}
      <div className="border-b border-gray-200">
        <button
          className="w-full flex items-center justify-between px-4 py-4 text-left"
          onClick={() => toggle("features")}
        >
          <span className="text-sm font-semibold text-gray-900">Features & Specifications</span>
          {open.features ? <ChevronUp className="w-4 h-4 text-gray-600" /> : <ChevronDown className="w-4 h-4 text-gray-600" />}
        </button>

        {open.features && (
          <div className="px-4 pb-4">
            <table className="w-full text-sm border-collapse">
              <tbody>
                {specs.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="py-2 pr-4 pl-2 text-gray-800 font-medium w-1/2 align-top border border-gray-200">
                      {row.label}
                    </td>
                    <td className="py-2 px-2 text-gray-700 w-1/2 align-top border border-gray-200">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* About This Brand */}
      <div className="border-b border-gray-200">
        <button
          className="w-full flex items-center justify-between px-4 py-4 text-left"
          onClick={() => toggle("aboutBrand")}
        >
          <span className="text-sm font-semibold text-gray-900">About This Brand</span>
          {open.aboutBrand ? <ChevronUp className="w-4 h-4 text-gray-600" /> : <ChevronDown className="w-4 h-4 text-gray-600" />}
        </button>
        {open.aboutBrand && (
          <div className="px-4 pb-4 text-sm text-gray-700">
            <p>This brand is dedicated to creating high-quality sleep products designed to deliver lasting comfort and support.</p>
          </div>
        )}
      </div>

      {/* 10 Year Warranty */}
      <div className="border-b border-gray-200">
        <button
          className="w-full flex items-center justify-between px-4 py-4 text-left"
          onClick={() => toggle("warranty")}
        >
          <span className="text-sm font-semibold text-gray-900">10 Year Warranty</span>
          {open.warranty ? <ChevronUp className="w-4 h-4 text-gray-600" /> : <ChevronDown className="w-4 h-4 text-gray-600" />}
        </button>
        {open.warranty && (
          <div className="px-4 pb-4 text-sm text-gray-700">
            <p>This mattress is backed by a 10-year limited warranty covering manufacturing defects and structural integrity.</p>
          </div>
        )}
      </div>

      {/* Sleep Expert CTA */}
      <div className="px-4 py-5 bg-[#F8F6F3] border-[#F5DEDA]">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-full bg-blue-100 overflow-hidden flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=96&h=96&fit=crop&crop=face"
              alt="Sleep Expert"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">Our Sleep Experts are here to help.</p>
            <p className="text-sm text-gray-600">Go ahead, ask them anything.</p>
          </div>
        </div>
        {/* <div className="flex gap-2 mt-4">
          <button className="flex-1 flex items-center justify-center gap-1.5 border border-gray-300 rounded py-2 px-3 text-sm font-medium text-gray-800 bg-white hover:bg-gray-50">
            <Phone className="w-4 h-4" /> Call an Expert
          </button>
          <button className="flex-1 flex items-center justify-center gap-1.5 border border-gray-300 rounded py-2 px-3 text-sm font-medium text-gray-800 bg-white hover:bg-gray-50">
            <MessageCircle className="w-4 h-4" /> Chat with Us
          </button>
          <button className="flex-1 flex items-center justify-center gap-1.5 border border-gray-300 rounded py-2 px-3 text-sm font-medium text-gray-800 bg-white hover:bg-gray-50">
            <Video className="w-4 h-4" /> Visit a Store
          </button>
        </div> */}
      </div>

    </div>
  );
}