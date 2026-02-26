import React from 'react';

/**
 * ServiceProviderTermsBox
 * Displays the full Service Provider Terms & Conditions as extracted from serviceterms.txt.
 * Strictly for use in the relevant page as a reusable, debuggable component.
 */
const ServiceProviderTermsBox: React.FC = () => (
  <section>
    {/* Header - Outside the box */}
    <div className="text-center mb-8">
      <h1 className="text-4xl md:text-5xl font-bold text-white">
        Service Provider Terms & Conditions
      </h1>
    </div>

    {/* Scrollable Content Box */}
    <div className="bg-white rounded-2xl shadow-lg border-2 border-[#F5A855] overflow-hidden">
      <div
        className="h-125 overflow-y-scroll pr-4 pl-6 py-6 md:pr-6 md:pl-8 md:py-8 policy-scroll"
        style={{ scrollbarWidth: 'thin', scrollbarColor: '#F5A855 transparent' }}
      >
        <div className="space-y-6 text-gray-700">
          <p className="font-semibold">VERSION DATE: [Dec 12,2025]</p>
          <p>By completing the onboarding form and using the Platform, you ("SP" or "You") agree to be bound by these Terms & Conditions ("Terms") with Whistlefetch Technologies Private Limited ("WTPL", "We", "Us").</p>
          <h3 className="text-xl font-bold mt-6">1. THE PLATFORM & RELATIONSHIP</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>WTPL owns and operates the "warmpawz" platform (www.warmpawz.com and the mobile app, collectively the “Platform”). The Platform is an online intermediary and marketplace that connects end-users ("Users") with independent third-party SPs for pet-related goods and services ("SP Offerings").</li>
            <li>The relationship between WTPL and the SP is on a principal-to-principal basis. You are an independent contractor, and these Terms does not create any partnership, agency, or employment relationship. You also agree that this engagement is on a non-exclusive basis and WTPL has the right to onboard other SP’s to provide same or similar services.</li>
          </ul>
          <h3 className="text-xl font-bold mt-6">2. WTPL'S SERVICES</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>WTPL provides services that enable You to:</li>
            <ul className="list-disc pl-8 space-y-1">
              <li>create an account and list your SP Offerings on the Platform.</li>
              <li>communicate and transact with Users.</li>
              <li>utilise WTPL's Payment Partner for payment collection.</li>
            </ul>
            <li>WTPL acts solely as an online intermediary and does not provide, control, or guarantee any SP Offerings or their quality except in cases where WTPL in its sole discretion shall control and monitor. WTPL does not guarantee that Services will be uninterrupted or error-free.</li>
          </ul>
          <h3 className="text-xl font-bold mt-6">3. SP ONBOARDING & COMPLIANCE</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>provide accurate and verifiable onboarding information relating to your business or profession (as applicable).</li>
            <li>maintain all licenses, permits, registrations and certifications required for your service category (including Vet Council Registration, Drug License, FSSAI, Trade License, etc.).</li>
            <li>ensure all documents remain valid throughout your relationship with WTPL. Lapse or invalidity may lead to suspension.</li>
            <li>WTPL may verify documents and decline, suspend, or terminate the onboarding at its discretion.</li>
            <li>WTPL may enable the SP to manage deliveries through integrated third-party logistics partners independently and at their own cost, WTPL shall not be held liable any acts or omissions by the delivery partners.</li>
          </ul>
          <h3 className="text-xl font-bold mt-6">4. SP’S OBLIGATIONS & RESPONSIBILITIES</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>maintaining an accurate and up-to-date profile on the Platform, including SP Offerings and pricing. In case of change in SP Offerings and pricing You shall promptly inform us not less than 2 (two) days prior to such change in order to enable accuracy on our Platform in relation to the said SP Offerings.</li>
            <li>In case of any change in your registration details including your credentials or constitution of the entity You shall promptly inform Us within 15 (fifteen) days from the date of such change. ensuring all listing descriptions, advertisements, communications and packaging are truthful, not misleading, and compliant with applicable laws relating to consumer rights, quality, safety, packaging and fair-trade practices including but not limited to the Consumer Protection Act, 2019, the Consumer Protection (E-Commerce) Rules, 2020, and Indian Metrology Act, 2008.</li>
            <li>the delivery, performance, and fulfilment of all confirmed orders or bookings. In the event of any no-show, non-performance, incomplete performance, or dispute arising out of the service delivery attributable to the SP, the SP shall issue a full refund of the applicable service charges to the affected User and WTPL, and the Platform shall be entitled to levy penalties on the SP in accordance with its policies.</li>
            <li>ensuring professional conduct, quality of service, and safe/hygienic facilities.</li>
            <li>the humane handling and care of all animals in accordance with the Prevention of Cruelty to Animals Act, 1960.</li>
            <li>obtaining and maintaining adequate insurance (e.g., public liability, product liability, professional indemnity) at your own cost.</li>
            <li>ensuring the confidentiality and security of the credentials provided to You for access to the Platform and the APIs or integration tools to manage listings, orders, inventory or analytics on the Platform and agree that the access shall not be used for any other purpose other than as permitted hereunder.</li>
          </ul>
          <h3 className="text-xl font-bold mt-6">5. COVENANTS</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>The SP shall use the Platform solely for lawful business purposes and only for listing, managing, and fulfilling its approved offerings in compliance with applicable law, the Terms herein, and all policies issued by WTPL. The SP shall ensure that all listings, descriptions, pricing, availability information, and content uploaded on the Platform are accurate, lawful, complete, and do not infringe any third-party rights, and shall not list, offer, advertise, or provide any illegal, counterfeit, infringing, harmful, or prohibited goods or services.</li>
            <li>The SP shall not scrape, copy, extract, misuse, or disclose any Platform and/or User data without authorization, nor interfere with, disrupt, or compromise the security, integrity, or proper functioning of the Platform in any manner.</li>
            <li>The SP warrants that any feedback it submits (“User Feedback”) is lawful, does not infringe third-party rights, and that the SP has all necessary rights to provide it. WTPL may remove or restrict any User Feedback it considers unlawful, inaccurate, inappropriate, or in violation of these Terms. User reviews and ratings are independently submitted by Users, and WTPL acts only as an intermediary. The SP shall not post, solicit, influence, or manipulate reviews, and acknowledges that WTPL may moderate or remove reviews in accordance with law and Platform policies.</li>
            <li>WTPL reserves the right to investigate any suspected violation of these Terms or applicable law and to take corrective or disciplinary action, including issuance of warnings, temporary suspension, modification or removal of listings, withholding of settlements, or permanent delisting of the SP, especially in cases of repeated complaints or conduct that poses risk to Users, animals, WTPL, or the Platform.</li>
            <li>WTPL may, at its discretion, verify, reject, suspend, or delist any SP profile or listing without prior notice where it reasonably believes that such conduct or listing violates law, policy, or third-party rights; provided, however, that in cases of non-material breaches, WTPL may allow a 15 (fifteen) day cure period.</li>
            <li>The SP acknowledges that WTPL may disclose verified information regarding the SP, including licenses, permits, registration numbers, or business identifiers, to Users where required under applicable law or for transparency.</li>
          </ul>
          <h3 className="text-xl font-bold mt-6">6. PROHIBITED CONTENT & ACTIONS</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>You shall not list, post, upload, transmit, or otherwise make available any content that infringes upon the intellectual property rights of any person, including but not limited to patents, trademarks, copyrights, or proprietary rights.</li>
            <li>is harmful, defamatory, obscene, pornographic, invasive of bodily or personal privacy, insulting or harassing on the basis of gender, libelous, racially or ethnically offensive, or otherwise unlawful or inconsistent with applicable laws.</li>
            <li>violates any law currently in force in India.</li>
            <li>pertains to illegal, counterfeit, or prohibited goods or services including selling insurance products on the Platform.</li>
            <li>facilitates or encourages off-platform solicitation or diversion of Users.</li>
            <li>promotes hate speech, disparages any individual or group, or incites discrimination based on race, ethnicity, or other protected characteristics.</li>
            <li>encourages or relates to money laundering, gambling, or other unlawful financial activities.</li>
            <li>misleads or deceives the recipient regarding the origin of the message or intentionally communicates false or misleading information that may reasonably be perceived as factual.</li>
            <li>impersonates any individual or entity without authorization.</li>
            <li>contains viruses, malicious code, or any software designed to disrupt, damage, or limit the functionality of any computer system or resource.</li>
            <li>is knowingly false and published with intent to mislead, harass, or cause financial or reputational harm to any person, entity, or agency.</li>
            <li>incites criminal activity, obstructs law enforcement investigations, or expresses contempt toward any nation.</li>
            <li>is abusive, threatening, or inappropriate toward the SP, its employees, consultants, or technicians.</li>
            <li>WTPL shall reserve all rights against You in such instances including blacklisting or other remedies provided under applicable law.</li>
          </ul>
          <h3 className="text-xl font-bold mt-6">7. PAID PROMOTIONS</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>WTPL may, from time to time, offer SPs optional paid promotional services such as featured listings, sponsored placements, boosted visibility, or other advertising enhancements (“Paid Promotions”). Participation in Paid Promotions shall be entirely voluntary and subject to the specific commercial terms, pricing, duration, and conditions communicated separately by WTPL. All Paid Promotions shall be clearly marked as “Sponsored,” “Promoted,” or “Advertisement” in accordance with applicable law, including the Consumer Protection (E-Commerce) Rules, 2020, the Guidelines for Prevention of Misleading Advertisements, and the ASCI Advertising Code.</li>
            <li>WTPL shall issue a valid tax invoice for any promotional fees charged. Paid Promotions shall not influence WTPL’s neutrality, Platform ranking algorithms (except as expressly disclosed), or its treatment of other non-participating SPs, and shall not modify the independent contractor status or obligations of the SP under these Terms.</li>
          </ul>
          <h3 className="text-xl font-bold mt-6">8. FEES, PAYMENTS & SETTLEMENT</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>In consideration for the Services, You agree to pay:</li>
            <ul className="list-disc pl-8 space-y-1">
              <li>Platform Subscription Fee: A recurring fee, payable in advance and non-refundable, as specified in Annexure A.</li>
              <li>Commission: A percentage of each completed transaction, as specified in Annexure A, which WTPL will deduct from the settlement.</li>
            </ul>
            <li>WTPL may modify fee structures, commission rates, settlement timelines, Paid Promotions, credits, or subscription packages upon 15 (fifteen) days’ notice. Continued use of the Platform after such notice constitutes acceptance of the revised terms.</li>
            <li>All payments from Users will be collected via WTPL’s payment partner except where payments are made directly to the SP by the Users. WTPL will remit the net amount due (after deducting commission, TDS, chargebacks, etc.) to your designated bank account per the settlement timeline. You are solely responsible for filing and discharging all your taxes (e.g., GST).</li>
          </ul>
          <h3 className="text-xl font-bold mt-6">9. DATA PROTECTION & CONFIDENTIALITY</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>SP shall ensure that all information, content, documents, and data submitted, uploaded, or entered into the Platform including service details, pricing, availability, qualifications, licenses, personnel information, and User-related data is true, accurate, complete, and current. The Service Provider shall promptly notify WTPL and update the Platform in the event of any change, inaccuracy, or omission in the data provided, and shall remain solely responsible for any consequences arising from incorrect, outdated, or misleading information.</li>
            <li>You hereby agree to treat any data and information, whether written, oral or visual, disclosed to You or which comes into your possession or knowledge pursuant to your empanelment, as “confidential” and shall not disclose the same to others, except as may be required by law or as may be required to be disclosed on a "need-to-know" basis for implementing the Terms hereof. Further, You expressly agree that You will not, directly or indirectly through a third party, use such confidential information for commercial and/or non-commercial purposes. You hereby acknowledge that the User’s data and content will also be deemed to be confidential. You will take all reasonable precautions necessary to perpetually keep confidential and safeguard the confidentiality of WTPL’s and Users confidential information, including: (i) those taken by You to protect your own confidential information; and (ii) those which WTPL may reasonably request from time to time. User Feedback may be used by WTPL for monitoring, analytics, and service improvement, and will be processed in accordance with the Platform’s privacy policy. Such data may be aggregated or anonymised for display or analysis without identifying the SP. This Clause shall survive termination hereof and shall continue to be binding on You for a period of 5 (five) years from the date of termination.</li>
            <li>With regard to personal data of the Users, SP shall implement and maintain adequate technical and organizational measures to protect against unauthorized or unlawful processing of such personal data and against accidental loss or destruction of, or damage to personal data. SP shall also ensure that its personnel, including third parties, execute appropriate confidential and data privacy agreements with respect to processing personal data, if any.</li>
            <li>SP shall retain User’s personal data only for the purposes contemplated under this engagement. SP shall ensure that as soon as the specific purpose for which the User’s data was retained has been fulfilled (or the User has terminated its engagement with SP or WTPL, as the case maybe), SP shall erase all such data, and may retain a copy in order to ensure necessary compliance with all applicable law.</li>
            <li>Further, SP agrees that, in the event of unlawful access to User’s personal data (“Data Breach”), SP shall, immediately within 24 (twenty four) hours from its awareness of such access, notify WTPL and the User of the Data Breach and carry out measures available or necessary to cease this unlawful access as well as to protect such personal data from any further unlawful access.</li>
          </ul>
          <h3 className="text-xl font-bold mt-6">10. INDEMNITY</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>You ("Indemnifying Party") agree to indemnify, defend, and hold harmless WTPL, its directors, and employees ("Indemnified Party") from and against any and all claims, losses, liabilities, and expenses (including legal fees) arising from:</li>
            <ul className="list-disc pl-8 space-y-1">
              <li>any breach of these Terms or your warranties;</li>
              <li>any breach of applicable law and/or your failure to maintain appropriate licenses, permits and safeguards required to provide the goods/services;</li>
              <li>any act, omission, or negligence by You or your personnel;</li>
              <li>injury, death, or loss to any pet resulting from SP offerings;</li>
              <li>product liability, defective goods, or any deficiency in your goods and/or services.</li>
            </ul>
            <li><span className="font-semibold">NOTWITHSTANDING AND WITHOUT PREJUDICE TO THE ABOVE, YOU AGREE THAT UNDER NO CIRCUMSTANCE SHALL WTPL BE LIABLE TO ANY USER OR OTHER THIRD PARTY OR YOU FOR ANY DIRECT, INDIRECT, INCIDENTAL OR CONSEQUENTIAL DAMAGES, HOWSOEVER ARISING, WHETHER UNDER CONTRACT, TORT OR OTHERWISE, EVEN IF INFORMED ABOUT THE POSSIBILITY OF THE SAME.</span></li>
            <li>To the fullest extent permitted by applicable law, the total aggregate liability of the SP and the Platform whether arising in contract, tort, negligence, or otherwise in connection with the services provided through the Platform, shall be strictly limited and capped to an amount not exceeding the total value of the goods or services sold or consumed which gave rise to such claim.</li>
            <li>Notwithstanding the foregoing, there shall be no cap or limitation of liability of the SP in case of any prohibited actions undertaken by the SP specified in Clause 6 above.</li>
          </ul>
          <h3 className="text-xl font-bold mt-6">11. INTELLECTUAL PROPERTY (IP)</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>WTPL owns all rights, title, and interest in the Platform and its IP. You are granted a limited, non-exclusive, revocable license to access and use the Platform solely for fulfilling transactions under these Terms.</li>
            <li>WTPL may use the SP’s name, logo, trademarks, listings, photographs, service descriptions, and other content or materials uploaded or made available by the SP (“SP Content”) for the purpose of promoting the Platform, the SP’s offerings, or WTPL’s services across any media, including digital, print, social media, and marketing campaigns. By onboarding on the Platform, the SP grants WTPL a royalty-free, worldwide, non-exclusive licence to use, reproduce, display, communicate, and publish such SP Content for these promotional purposes, and confirms that such use shall not require further consent or compensation.</li>
          </ul>
          <h3 className="text-xl font-bold mt-6">12. TERM & TERMINATION</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>These Terms shall commence on the date of execution and shall continue for a period of six (6) months, following which the Parties may mutually agree in writing to extend the term for such further period as they may determine.</li>
            <li>WTPL may terminate immediately, with or without notice, if You (i) breach of the Terms herein, (ii) deficiency in your goods and/or services, (iii) engage in fraudulent or unlawful activity, or (iv) your required licenses are suspended or revoked.</li>
            <li>Upon termination of your onboarding, You shall, to the extent feasible, complete all pending obligations to Users undertaken by You prior to the effective date of termination. Further, You hereby expressly agree not to disclose the disputes between You and WTPL, if any, and status thereof to the Users. Further, immediately upon termination, your name shall be removed from the list of onboarded SP’s set out in www.warmpawz.com</li>
          </ul>
          <h3 className="text-xl font-bold mt-6">13. GOVERNING LAW & DISPUTE RESOLUTION</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>In case of default/breach of any of the Terms mentioned herein, WTPL shall, without prejudice to its rights to terminate your empanelment and/or seek damages, have the right to institute legal proceedings against You to enforce any other rights or remedies available to WTPL at law or equity, including temporary restraining order/preliminary injunction or specific performance in order to prevent, restrain or enforce against any further breach/default.</li>
            <li>These Terms shall be governed by the laws of India. The courts in Bengaluru, Karnataka shall have exclusive jurisdiction over all disputes.</li>
          </ul>
          <h3 className="text-xl font-bold mt-6">14. GENERAL</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>The Onboarding Form, these Terms along with any annexures (published on the Platform), constitutes the entire agreement and that these may be amended, from time to time, at WTPL’s discretion, whereupon the same shall also be binding on You with immediate effect.</li>
            <li>For the avoidance of doubt, notices, updates, or communications transmitted by WTPL through the Platform dashboard, Seller Service Provider account, or the registered e-mail address of the Seller Service Provider shall constitute valid notice and the entire agreement clause of these Terms. The notice may be sent to WTPL to our registered address set out above.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default ServiceProviderTermsBox;
