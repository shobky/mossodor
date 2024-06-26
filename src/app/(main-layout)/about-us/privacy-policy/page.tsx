import { Padding } from "@/components/page-layout";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <Padding className="sm:py-[5vh] space-y-2 sm:mx-[10vw]">
      <h1 className="font-bold text-3xl text-center"> Privacy Policy</h1>
      <p className=" text-sm text-center text-muted-foreground">
        This Privacy Policy outlines how Mossodor collects, uses, and shares
        personal information when you visit or make a purchase from mossodor.com
        (the “Site”).
      </p>
      <div className=" py-10">
        <article className="space-y-4">
          <div className="space-y-3">
            <p>
              <strong>Personal Information We Collect:</strong>
            </p>
            <p>
              Upon visiting the Site, we automatically gather certain
              information about your device, including your web browser, IP
              address, time zone, and some cookies installed on your device.
              While you navigate the Site, we collect details on the web pages
              or products you view, the websites or search terms that brought
              you to the Site, and your interactions with the Site. We refer to
              this automatically collected information as “Device Information.”
            </p>
            <p>We collect Device Information using technologies such as:</p>
            <p>
              Cookies: Data files placed on your device or computer, typically
              containing an anonymous unique identifier. For more information
              about cookies, including how to disable them, visit
              http://www.allaboutcookies.org.
            </p>
            <p>
              Log files: Track actions on the Site, collecting data including
              your IP address, browser type, Internet service provider,
              referring/exit pages, and timestamps.
            </p>
            <p>
              Web beacons, tags, and pixels: Electronic files used to record
              information about how you browse the Site.
            </p>
            <p>
              When you make or attempt to make a purchase through the Site, we
              collect certain information from you, including your name, billing
              and shipping addresses, payment information, email address, and
              phone number. This is referred to as “Order Information.”
            </p>
            <p>
              “Personal Information” in this Privacy Policy refers to both
              Device Information and Order Information.
            </p>
            <br />
            <p>
              <strong>How We Use Your Personal Information</strong>
            </p>
            <p>
              We use the Order Information to fulfill orders placed through the
              Site (this includes processing your payment information, arranging
              shipping, and providing invoices and/or order confirmations).
              Additionally, we use this Order Information to:
            </p>
            <p>Communicate with you;</p>
            <p>Screen orders for potential risk or fraud;and</p>
            <p>
              Provide you with information or advertising related to our
              products or services, in alignment with your preferences. We use
              the Device Information to help screen for potential risk and fraud
              (particularly, by analyzing your IP address), and more generally
              to improve and optimize our Site (for example, by generating
              analytics about how our customers browse and interact with the
              Site and to assess the success of our marketing and advertising
              campaigns).
            </p>
            <br />

            <p>
              <strong>Sharing Your Personal Information</strong>
            </p>
            <p>
              We share your Personal Information with third parties to help us
              use your Personal Information, as described above. For instance,
              we use Google Analytics to understand how our customers use the
              Site — you can learn more about how Google uses your Personal
              Information here:
              https://www.google.com/intl/en/policies/privacy/. You can opt-out
              of Google Analytics here:
              https://tools.google.com/dlpage/gaoptout.
            </p>
            <p>
              We may also share your Personal Information to comply with
              applicable laws and regulations, respond to lawful requests for
              information we receive, or otherwise protect our rights.
            </p>
            <br />

            <p>
              <strong>Behavioral Advertising</strong>
            </p>
            <p>
              We use your Personal Information to provide you with targeted
              advertisements or marketing communications we believe may be of
              interest to you. For more about how targeted advertising works,
              visit the NAI&apos;s page at
              http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.
            </p>
            <p>Opt-out of targeted advertising: Facebook:</p>
            <p>https://www.facebook.com/settings/?tab=ads</p>
            <p>Google: https://www.google.com/settings/ads/anonymous</p>
            <p>
              Bing:
              https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads
            </p>
            <br />
            <p>
              <strong>Text Marketing and Notifications</strong>
            </p>
            <p>
              By subscribing to text notifications, you agree to receive
              automated marketing messages at the provided phone number. Consent
              is not a condition of purchase. Text STOP to unsubscribe, HELP for
              help. Msg &amp; Data rates may apply. Visit our Privacy Policy and
              ToS for more info. Opt out of this advertising by visiting
              https://app.retention.com/optout.
            </p>
            <p>Your Rights</p>
            <p>
              If you are a European resident, you have rights to access personal
              information we hold about you and to request correction, update,
              or deletion of your personal information. To exercise these
              rights, please contact us via the contact information below.
            </p>
            <p>Data Retention</p>
            <p>We will maintain your Order Information</p>
            <p>
              for our records unless and until you ask us to delete this
              information.
            </p>
            <p>Changes</p>
            <p>
              We may update this privacy policy to reflect changes to our
              practices or for other operational, legal, or regulatory reasons.
            </p>
            <p>Contact Us</p>
            <p>
              For more information about our privacy practices, questions, or
              complaints, please contact us by email at info@mossodor.com.
              Mossodor™
            </p>
          </div>
        </article>
      </div>
    </Padding>
  );
}
