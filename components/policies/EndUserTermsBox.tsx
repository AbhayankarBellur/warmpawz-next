import React from "react";

/**
 * EndUserTermsBox
 * Displays the full End User Terms of Use as extracted from enduserterms.txt.
 * Styled for readability and debugging, matching the ServiceProviderTermsBox and Data Privacy Policy box.
 */

import termsContent from "./enduserterms-content";

const EndUserTermsBox: React.FC = () => (
  <section>
    {/* Header - Outside the box */}
    <div className="text-center mb-8">
      <h1 className="text-4xl md:text-5xl font-bold text-white">
        End User Terms of Use
      </h1>
    </div>

    {/* Scrollable Content Box */}
    <div className="bg-white rounded-2xl shadow-lg border-2 border-[#F5A855] overflow-hidden">
      <div
        className="h-125 overflow-y-scroll pr-4 pl-6 py-6 md:pr-6 md:pl-8 md:py-8 policy-scroll"
        style={{ scrollbarWidth: "thin", scrollbarColor: "#F5A855 transparent" }}
      >
        <div className="space-y-6 text-gray-700">
          <p className="font-semibold">VERSION DATE: [Dec 12,2025]</p>
          {termsContent}
        </div>
      </div>
    </div>
  </section>
);

export default EndUserTermsBox;
