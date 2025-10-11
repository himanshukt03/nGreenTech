const fieldClass =
  "w-full rounded-2xl border border-primary/20 bg-white px-5 py-3 text-sm text-body-color outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15";
const fileFieldClass =
  "w-full cursor-pointer rounded-2xl border border-primary/20 bg-white px-5 py-2.5 text-sm text-body-color outline-none transition file:mr-4 file:cursor-pointer file:rounded-full file:border-none file:bg-primary file:px-4 file:py-2 file:text-sm file:font-semibold file:uppercase file:tracking-[0.2em] file:text-white focus:border-primary focus:ring-2 focus:ring-primary/15";
const labelClass = "block text-sm font-semibold text-dark";
const sectionCardClass =
  "grid gap-4 rounded-2xl border border-primary/15 bg-white/70 p-6 shadow-sm";

const PartnerForm = () => (
  <form
    method="post"
    action="https://ngreentech.org/api/register/partner"
    encType="multipart/form-data"
    className="flex flex-col gap-8 rounded-3xl border border-primary/15 bg-white p-8 shadow-two"
  >
    <div className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
        Join Our Organization/Partner Network
      </p>
      <h3 className="text-2xl font-semibold text-dark">Partnership Application</h3>
      <p className="text-sm text-body-color">
        Be part of the change! Help us build a sustainable future through environmental action. Share your organization&apos;s details so we can explore meaningful collaboration.
      </p>
    </div>

    <div className={sectionCardClass}>
      <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
        Organization/Partner Details
      </h4>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="partner-name" className={labelClass}>
            Organization/Partner Name
          </label>
          <input id="partner-name" name="organisationName" placeholder="Organization/Partner Name" className={fieldClass} required />
        </div>
        <div>
          <label htmlFor="partner-type" className={labelClass}>
            Type of Organization
          </label>
          <select id="partner-type" name="organisationType" className={fieldClass} defaultValue="" required>
            <option value="" disabled>
              Select organization type
            </option>
            <option value="ngo">NGO</option>
            <option value="corporate">Corporate</option>
            <option value="educational">Educational Institution</option>
            <option value="government">Government Body</option>
            <option value="startup">Startup</option>
            <option value="community">Community Group</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="partner-year" className={labelClass}>
            Year of Establishment
          </label>
          <input id="partner-year" name="establishedYear" type="number" min="1900" max="2100" placeholder="Year of Establishment" className={fieldClass} required />
        </div>
        <div>
          <label htmlFor="partner-website" className={labelClass}>
            Website URL (Optional)
          </label>
          <input id="partner-website" name="website" type="url" placeholder="Website URL" className={fieldClass} />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="partner-social" className={labelClass}>
            Social Media Links (Optional)
          </label>
          <textarea
            id="partner-social"
            name="socialLinks"
            rows={3}
            placeholder="LinkedIn, Instagram, Facebook or other links"
            className={`${fieldClass} resize-none`}
          />
        </div>
      </div>
    </div>

    <div className={sectionCardClass}>
      <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
        Primary Point of Contact
      </h4>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="partner-contact-name" className={labelClass}>
            Full Name
          </label>
          <input id="partner-contact-name" name="contactName" placeholder="Full Name" className={fieldClass} required />
        </div>
        <div>
          <label htmlFor="partner-contact-role" className={labelClass}>
            Designation/Role
          </label>
          <input id="partner-contact-role" name="contactRole" placeholder="Designation/Role" className={fieldClass} required />
        </div>
        <div>
          <label htmlFor="partner-contact-phone" className={labelClass}>
            Phone Number
          </label>
          <input id="partner-contact-phone" name="contactPhone" type="tel" placeholder="Phone Number" className={fieldClass} required />
        </div>
        <div>
          <label htmlFor="partner-contact-email" className={labelClass}>
            Email
          </label>
          <input id="partner-contact-email" name="contactEmail" type="email" placeholder="Email" className={fieldClass} required />
        </div>
      </div>
    </div>

    <div className={sectionCardClass}>
      <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
        Official Address
      </h4>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="md:col-span-2">
          <label htmlFor="partner-street" className={labelClass}>
            Street Address
          </label>
          <textarea
            id="partner-street"
            name="streetAddress"
            rows={3}
            placeholder="Street Address"
            className={`${fieldClass} resize-none`}
            required
          />
        </div>
        <div>
          <label htmlFor="partner-city" className={labelClass}>
            City
          </label>
          <input id="partner-city" name="city" placeholder="City" className={fieldClass} required />
        </div>
        <div>
          <label htmlFor="partner-state" className={labelClass}>
            State
          </label>
          <input id="partner-state" name="state" placeholder="State" className={fieldClass} required />
        </div>
        <div>
          <label htmlFor="partner-zip" className={labelClass}>
            Zip Code
          </label>
          <input id="partner-zip" name="zipCode" placeholder="Zip Code" className={fieldClass} required />
        </div>
        <div>
          <label htmlFor="partner-country" className={labelClass}>
            Country
          </label>
          <input id="partner-country" name="country" placeholder="Country" className={fieldClass} required />
        </div>
      </div>
    </div>

    <div className={sectionCardClass}>
      <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
        Partnership Details
      </h4>
      <div className="grid gap-4">
        <div>
          <span className={labelClass}>Nature of Collaboration</span>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {[
              { value: "volunteering", label: "Volunteering Support" },
              { value: "resources", label: "Resource Donation" },
              { value: "events", label: "Event Hosting" },
              { value: "awareness", label: "Awareness Campaigns" },
              { value: "funding", label: "Funding" },
              { value: "others", label: "Others" },
            ].map((option) => (
              <label key={option.value} className="flex items-start gap-3 text-sm text-body-color">
                <input
                  type="checkbox"
                  name="collaborationNature[]"
                  value={option.value}
                  className="mt-1 h-4 w-4 rounded border-primary/40 text-primary focus:ring-primary"
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <label htmlFor="partner-proposal" className={labelClass}>
            Brief Description of Interest/Proposal
          </label>
          <textarea
            id="partner-proposal"
            name="proposal"
            rows={4}
            placeholder="Tell us about the collaboration you have in mind"
            className={`${fieldClass} resize-none`}
            required
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="partner-locations" className={labelClass}>
              Preferred Locations to Operate
            </label>
            <textarea
              id="partner-locations"
              name="preferredLocations"
              rows={3}
              placeholder="Cities, campuses or regions"
              className={`${fieldClass} resize-none`}
            />
          </div>
          <div>
            <label htmlFor="partner-capacity" className={labelClass}>
              Number of People You Can Engage/Deploy
            </label>
            <input
              id="partner-capacity"
              name="engagementCapacity"
              type="number"
              min="1"
              placeholder="e.g., 50"
              className={fieldClass}
            />
          </div>
        </div>
      </div>
    </div>

    <div className={sectionCardClass}>
      <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
        Documents Upload
      </h4>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="partner-registration" className={labelClass}>
            Organization Registration Certificate
          </label>
          <input id="partner-registration" name="registrationCertificate" type="file" className={fileFieldClass} required />
        </div>
        <div>
          <label htmlFor="partner-csr" className={labelClass}>
            CSR Brochure / Portfolio (if available)
          </label>
          <input id="partner-csr" name="csrBrochure" type="file" className={fileFieldClass} />
        </div>
        <div>
          <label htmlFor="partner-loi" className={labelClass}>
            Letter of Intent or MOU (if applicable)
          </label>
          <input id="partner-loi" name="letterOfIntent" type="file" className={fileFieldClass} />
        </div>
      </div>
    </div>

    <div className={sectionCardClass}>
      <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
        Terms &amp; Declarations
      </h4>
      <div className="space-y-3">
        {[
          {
            name: "termsCommitment",
            label: "We agree to abide by the terms and responsibilities defined under this partnership.",
          },
          {
            name: "termsAccuracy",
            label: "The information provided is true and complete to the best of our knowledge.",
          },
          {
            name: "termsContact",
            label: "We consent to be contacted for further engagement and coordination.",
          },
        ].map((item) => (
          <label key={item.name} className="flex items-start gap-3 text-sm text-body-color">
            <input
              type="checkbox"
              name={item.name}
              value="agree"
              required
              className="mt-1 h-4 w-4 rounded border-primary/40 text-primary focus:ring-primary"
            />
            <span>{item.label}</span>
          </label>
        ))}
      </div>
    </div>

    <button
      type="submit"
      className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-primary/90"
    >
      Submit
    </button>
  </form>
);

export default PartnerForm;
