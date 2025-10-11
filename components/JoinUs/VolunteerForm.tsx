const fieldClass =
  "w-full rounded-2xl border border-primary/20 bg-white px-5 py-3 text-sm text-body-color outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15";
const fileFieldClass =
  "w-full cursor-pointer rounded-2xl border border-primary/20 bg-white px-5 py-2.5 text-sm text-body-color outline-none transition file:mr-4 file:cursor-pointer file:rounded-full file:border-none file:bg-primary file:px-4 file:py-2 file:text-sm file:font-semibold file:uppercase file:tracking-[0.2em] file:text-white focus:border-primary focus:ring-2 focus:ring-primary/15";
const labelClass = "block text-sm font-semibold text-dark";
const sectionCardClass =
  "grid gap-4 rounded-2xl border border-primary/15 bg-white/70 p-6 shadow-sm";
const consentBoxClass =
  "rounded-2xl border border-primary/15 bg-white p-5 text-sm leading-relaxed text-body-color";

const VolunteerForm = () => (
  <form
    method="post"
    action="https://ngreentech.org/api/register/individual"
    encType="multipart/form-data"
    className="flex flex-col gap-8 rounded-3xl border border-primary/15 bg-primary/5 p-8 shadow-btn-light"
  >
    <div className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
        Join Our Volunteer Team
      </p>
      <h3 className="text-2xl font-semibold text-dark">Volunteer Application</h3>
      <p className="text-sm text-body-color">
        Be part of the change! Help us build a sustainable future through environmental action. Fill in the details below so we can onboard you securely.
      </p>
    </div>

    <div className={sectionCardClass}>
      <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
        Personal Information
      </h4>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="volunteer-name" className={labelClass}>
            Name
          </label>
          <input id="volunteer-name" name="fullName" placeholder="Name" className={fieldClass} required />
        </div>
        <div>
          <label htmlFor="volunteer-dob" className={labelClass}>
            Date of Birth
          </label>
          <input id="volunteer-dob" name="dateOfBirth" type="date" placeholder="dd-mm-yyyy" className={fieldClass} required />
        </div>
        <div>
          <label htmlFor="volunteer-class" className={labelClass}>
            Class
          </label>
          <select id="volunteer-class" name="class" className={fieldClass} defaultValue="" required>
            <option value="" disabled>
              Select your current class
            </option>
            <option value="1st-grade">1st Grade</option>
            <option value="2nd-grade">2nd Grade</option>
            <option value="3rd-grade">3rd Grade</option>
            <option value="4th-grade">4th Grade</option>
            <option value="5th-grade">5th Grade</option>
            <option value="6th-grade">6th Grade</option>
            <option value="7th-grade">7th Grade</option>
            <option value="8th-grade">8th Grade</option>
            <option value="9th-grade">9th Grade</option>
            <option value="10th-grade">10th Grade</option>
            <option value="11th-grade">11th Grade</option>
            <option value="12th-grade">12th Grade</option>
            <option value="undergraduate">Undergraduate</option>
            <option value="postgraduate">Postgraduate</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="volunteer-school" className={labelClass}>
            School/College
          </label>
          <input id="volunteer-school" name="institution" placeholder="School/College" className={fieldClass} required />
        </div>
      </div>
    </div>

    <div className={sectionCardClass}>
      <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
        Contact Information
      </h4>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="md:col-span-2">
          <label htmlFor="volunteer-address" className={labelClass}>
            Address
          </label>
          <textarea
            id="volunteer-address"
            name="address"
            rows={3}
            placeholder="Full address"
            className={`${fieldClass} resize-none`}
            required
          />
        </div>
        <div>
          <label htmlFor="volunteer-city" className={labelClass}>
            City
          </label>
          <input id="volunteer-city" name="city" placeholder="City" className={fieldClass} required />
        </div>
        <div>
          <label htmlFor="volunteer-phone" className={labelClass}>
            Phone Number
          </label>
          <input id="volunteer-phone" name="phone" type="tel" placeholder="Phone Number" className={fieldClass} required />
        </div>
        <div>
          <label htmlFor="volunteer-email" className={labelClass}>
            Email
          </label>
          <input id="volunteer-email" name="email" type="email" placeholder="Email" className={fieldClass} required />
        </div>
      </div>
    </div>

    <div className={sectionCardClass}>
      <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
        Documents
      </h4>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="volunteer-id-proof" className={labelClass}>
            ID Proof (Aadhar Card, School ID, etc.)
          </label>
          <input id="volunteer-id-proof" name="idProof" type="file" className={fileFieldClass} required />
        </div>
        <div>
          <label htmlFor="volunteer-parent-consent" className={labelClass}>
            Parent Consent Form
          </label>
          <input id="volunteer-parent-consent" name="parentConsentForm" type="file" className={fileFieldClass} required />
        </div>
      </div>
      <div className={consentBoxClass}>
        <p>
          I, as the parent/guardian of the above-mentioned volunteer, hereby give my consent for my child to participate as a volunteer with NGreentech in their environmental conservation activities, including e-waste collection drives, awareness programs, and community initiatives. I understand that my child will be participating in safe, supervised activities aimed at environmental education and conservation.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="parent-name" className={labelClass}>
            Parent/Guardian Name
          </label>
          <input id="parent-name" name="parentName" placeholder="Parent/Guardian Name" className={fieldClass} required />
        </div>
        <div>
          <label htmlFor="parent-signature" className={labelClass}>
            Digital Signature/Acknowledgment
          </label>
          <input
            id="parent-signature"
            name="parentSignature"
            placeholder="Type parent/guardian name"
            className={fieldClass}
            required
          />
        </div>
      </div>
      <label className="flex items-start gap-3 text-sm text-body-color">
        <input
          type="checkbox"
          name="parentConsentAcknowledgement"
          value="yes"
          required
          className="mt-1 h-4 w-4 rounded border-primary/40 text-primary focus:ring-primary"
        />
        <span>I give my consent for my child to volunteer with NGreentech.</span>
      </label>
    </div>

    <div className={sectionCardClass}>
      <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
        Additional Details
      </h4>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="volunteer-hear" className={labelClass}>
            How did you hear about NGreentech?
          </label>
          <select id="volunteer-hear" name="referralSource" className={fieldClass} defaultValue="" required>
            <option value="" disabled>
              Select an option
            </option>
            <option value="friend">Friend/Family member</option>
            <option value="school">School program/workshop</option>
            <option value="social">Social media</option>
            <option value="website">Website/Online search</option>
            <option value="event">Community event</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="volunteer-commitment" className={labelClass}>
            Commitment Confirmation
          </label>
          <select id="volunteer-commitment" name="participationLevel" className={fieldClass} defaultValue="">
            <option value="" disabled>
              How actively can you participate?
            </option>
            <option value="weekly">Weekly initiatives</option>
            <option value="monthly">Monthly missions</option>
            <option value="event-based">Event-based support</option>
            <option value="remote">Remote contributions</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="volunteer-notes" className={labelClass}>
            Anything else we should know?
          </label>
          <textarea
            id="volunteer-notes"
            name="additionalNotes"
            rows={4}
            placeholder="Interests, previous initiatives, or questions"
            className={`${fieldClass} resize-none`}
          />
        </div>
      </div>
      <label className="flex items-start gap-3 text-sm text-body-color">
        <input
          type="checkbox"
          name="terms"
          value="agree"
          required
          className="mt-1 h-4 w-4 rounded border-primary/40 text-primary focus:ring-primary"
        />
        <span>I agree to the terms and conditions and commit to actively participate in NGreentech&apos;s environmental initiatives.</span>
      </label>
    </div>

    <button
      type="submit"
      className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-primary/90"
    >
      Submit
    </button>
  </form>
);

export default VolunteerForm;
