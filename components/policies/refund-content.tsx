import React from "react";

const refundContent = (
  <>
    <h3 className="text-xl font-bold mt-6">CANCELLATION AND REFUND POLICY</h3>
    <p className="font-semibold">VERSION DATE: [December 2025]</p>

    <h4 className="text-lg font-bold mt-4">1. Platform Role</h4>
    <ul className="list-disc pl-6 space-y-1">
      <li>Warmpawz operates as a technology platform that enables users to discover, book, and purchase services and products offered by independent service providers, clinics, centres, brands, and sellers.</li>
      <li>Warmpawz does not directly provide any listed services and is not responsible for provider availability, outcomes, or service quality. However, Warmpawz may facilitate cancellations, rescheduling, refunds, and dispute resolution.</li>
    </ul>

    <h4 className="text-lg font-bold mt-4">2. Cancellation & Rescheduling — Services</h4>
    <ul className="list-disc pl-6 space-y-1">
      <li>Bookings may be cancelled or rescheduled subject to:
        <ul className="list-disc pl-8 space-y-1">
          <li>Service type</li>
          <li>Timing of the request</li>
          <li>Provider policies</li>
          <li>Provider preparation or travel</li>
          <li>Reserved capacity or resources</li>
          <li>Whether the service has begun or been completed</li>
        </ul>
      </li>
      <li>Warmpawz reserves the right to determine eligibility for cancellation, rescheduling, credits, or refunds. Refund eligibility may reduce as the scheduled service time approaches.</li>
      <li>Once a service has:
        <ul className="list-disc pl-8 space-y-1">
          <li>Started</li>
          <li>Been delivered</li>
          <li>Provider has arrived, prepared, or allocated time/resources</li>
        </ul>
        the booking may be treated as consumed and may not be eligible for a refund.
      </li>
    </ul>

    <h4 className="text-lg font-bold mt-4">3. Provider-Side Changes</h4>
    <ul className="list-disc pl-6 space-y-1">
      <li>If a service cannot proceed due to provider unavailability, operational constraints, safety considerations, or other circumstances, Warmpawz may offer one or more of the following:
        <ul className="list-disc pl-8 space-y-1">
          <li>Rescheduling</li>
          <li>Platform credit</li>
          <li>Partial refund</li>
          <li>Full refund</li>
        </ul>
      </li>
      <li>The form of resolution will be determined at Warmpawz’s discretion.</li>
    </ul>

    <h4 className="text-lg font-bold mt-4">4. Missed Appointments & No-Shows</h4>
    <ul className="list-disc pl-6 space-y-1">
      <li>If a user:
        <ul className="list-disc pl-8 space-y-1">
          <li>Is unavailable</li>
          <li>Fails to join a session</li>
          <li>Fails to provide access</li>
          <li>Provides incorrect booking details</li>
        </ul>
        the booking may be considered completed and may not be eligible for refund.
      </li>
    </ul>

    <h4 className="text-lg font-bold mt-4">5. Behaviour, Safety & Accuracy of Information</h4>
    <ul className="list-disc pl-6 space-y-1">
      <li>Services may be modified, paused, or discontinued where:
        <ul className="list-disc pl-8 space-y-1">
          <li>Safety risks exist</li>
          <li>Behavioural concerns arise</li>
          <li>Booking details are inaccurate or incomplete</li>
          <li>Conditions differ materially from what was disclosed</li>
        </ul>
      </li>
      <li>In such cases, charges may apply for time, travel, preparation, or resources used. Refund decisions will be made at Warmpawz’s discretion.</li>
    </ul>

    <h4 className="text-lg font-bold mt-4">6. Duration-Based & Capacity-Based Services</h4>
    <ul className="list-disc pl-6 space-y-1">
      <li>For services that reserve time, inventory, staffing, or capacity (including but not limited to boarding, programs, packages, or scheduled visits):
        <ul className="list-disc pl-8 space-y-1">
          <li>Charges may apply once capacity is reserved</li>
          <li>Early completion, unused time, late drop-off, or early pick-up may not be refundable</li>
        </ul>
      </li>
    </ul>

    <h4 className="text-lg font-bold mt-4">7. Product Orders — Cancellation & Returns</h4>
    <ul className="list-disc pl-6 space-y-1">
      <li>Orders may be cancelled before dispatch where technically feasible.</li>
      <li>Once shipped, orders generally cannot be cancelled but may be eligible for return or replacement subject to eligibility.</li>
      <li>Returns or replacements may be accepted where:
        <ul className="list-disc pl-8 space-y-1">
          <li>Item is damaged</li>
          <li>Item is defective</li>
          <li>Incorrect item delivered</li>
          <li>Item is unusable as reasonably expected</li>
        </ul>
      </li>
      <li>Certain categories may be non-returnable for hygiene, safety, consumable, or policy reasons. Warmpawz reserves the right to request evidence, inspection, or seller verification before approving refunds.</li>
    </ul>

    <h4 className="text-lg font-bold mt-4">8. Fees & Non-Refundable Components</h4>
    <ul className="list-disc pl-6 space-y-1">
      <li>To the extent permitted by law, the following may be non-refundable:
        <ul className="list-disc pl-8 space-y-1">
          <li>Platform fees</li>
          <li>Convenience fees</li>
          <li>Payment gateway charges</li>
          <li>Travel or logistics charges</li>
          <li>Provider preparation costs</li>
          <li>Reserved capacity costs</li>
        </ul>
      </li>
    </ul>

    <h4 className="text-lg font-bold mt-4">9. Refund Method & Timelines</h4>
    <ul className="list-disc pl-6 space-y-1">
      <li>Approved refunds:
        <ul className="list-disc pl-8 space-y-1">
          <li>Are issued to the original payment method unless otherwise determined</li>
          <li>May be issued as platform credits where appropriate</li>
          <li>Are subject to banking and payment partner timelines</li>
        </ul>
      </li>
      <li>Warmpawz is not responsible for delays caused by financial institutions or third-party payment processors.</li>
    </ul>

    <h4 className="text-lg font-bold mt-4">10. Third-Party Providers & Sellers</h4>
    <ul className="list-disc pl-6 space-y-1">
      <li>Services and products may be delivered by independent third parties.</li>
      <li>In such cases:
        <ul className="list-disc pl-8 space-y-1">
          <li>Resolution may depend on provider or seller validation</li>
          <li>Inspection or confirmation may be required</li>
          <li>Warmpawz may facilitate but does not guarantee a specific outcome</li>
        </ul>
      </li>
    </ul>

    <h4 className="text-lg font-bold mt-4">11. Exceptional Circumstances</h4>
    <ul className="list-disc pl-6 space-y-1">
      <li>Warmpawz may, at its sole discretion, offer rescheduling, credits, or refunds in exceptional circumstances, including but not limited to:
        <ul className="list-disc pl-8 space-y-1">
          <li>Emergencies</li>
          <li>Safety incidents</li>
          <li>Technical failures</li>
          <li>Force majeure events</li>
          <li>Verified unavoidable situations</li>
        </ul>
      </li>
      <li>Supporting documentation may be required.</li>
    </ul>

    <h4 className="text-lg font-bold mt-4">12. Abuse, Misuse & Policy Circumvention</h4>
    <ul className="list-disc pl-6 space-y-1">
      <li>Warmpawz reserves the right to:
        <ul className="list-disc pl-8 space-y-1">
          <li>Decline refund requests</li>
          <li>Restrict accounts</li>
          <li>Reverse credits</li>
          <li>Recover losses</li>
          <li>Take appropriate action</li>
        </ul>
        where misuse, excessive cancellations, fraud, policy circumvention, or abuse is suspected.
      </li>
    </ul>

    <h4 className="text-lg font-bold mt-4">13. Limitation of Liability</h4>
    <ul className="list-disc pl-6 space-y-1">
      <li>To the maximum extent permitted by law:
        <ul className="list-disc pl-8 space-y-1">
          <li>Refunds under this Policy constitute the primary remedy available</li>
          <li>Warmpawz shall not be liable for indirect, incidental, consequential, or opportunity losses arising from cancellations, delays, or provider actions</li>
        </ul>
      </li>
    </ul>

    <h4 className="text-lg font-bold mt-4">14. Policy Interpretation</h4>
    <ul className="list-disc pl-6 space-y-1">
      <li>Warmpawz reserves the right to interpret this Policy and make final decisions on eligibility, resolution, and refund form.</li>
    </ul>

    <h4 className="text-lg font-bold mt-4">15. Updates To Refund And Cancellation Policy</h4>
    <ul className="list-disc pl-6 space-y-1">
      <li>We may amend or update this Refund and Cancellation Policy at any time. Any revisions will be reflected in the “Version Date” displayed above. We encourage you to review this Policy periodically to remain informed of any changes. We will notify you of any material changes required by law, but we advise periodically checking the App for updates. Your continued use of the Platform after a revised Refund and Cancellation Policy has been posted will constitute your acknowledgement and acceptance of the updated terms.</li>
    </ul>

    <h4 className="text-lg font-bold mt-4">16. Governing Law</h4>
    <ul className="list-disc pl-6 space-y-1">
      <li>This Policy is governed by Indian law. Any disputes arising from or connected to this Policy shall be adjudicated by a court having competent jurisdiction in India.</li>
    </ul>
  </>
);

export default refundContent;
