"use client";

import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

const fieldClass =
  "w-full rounded-2xl border border-primary/20 bg-white px-5 py-3 text-sm text-body-color outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15";
const labelClass = "block text-sm font-semibold text-dark";
const sectionCardClass =
  "grid gap-4 rounded-2xl border border-primary/15 bg-white p-6 shadow-sm";

const VolunteerForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://getform.io/f/allqrgwa", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast.success(
          "Registration submitted successfully! You'll receive your digital ID card and volunteer toolkit soon. Welcome to the NGreen Army!",
          { duration: 7000 }
        );
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error(
        "Failed to submit registration. Please check your connection and try again.",
        { duration: 6000 }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 rounded-3xl border border-primary/15 bg-primary/5 p-8 shadow-btn-light"
      >
      <input type="hidden" name="formType" value="volunteer-registration" />
      <input type="hidden" name="_gotcha" style={{ display: "none" }} />

      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          NGreenTech Volunteer Registration Form
        </p>
        <h3 className="text-2xl font-semibold text-dark">Join the NGreen Army</h3>
        <p className="text-sm text-body-color">
          Complete the sections below so we can welcome you with the right mission kit and squad.
        </p>
      </header>

      <section className={sectionCardClass}>
        <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          Section 1: Personal Details
        </h4>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="volunteer-full-name" className={labelClass}>
              Full Name
            </label>
            <input id="volunteer-full-name" name="fullName" autoComplete="name" className={fieldClass} required />
          </div>
          <div>
            <label htmlFor="volunteer-age" className={labelClass}>
              Age
            </label>
            <input id="volunteer-age" name="age" type="number" min="5" max="99" className={fieldClass} required />
          </div>
          <div>
            <label htmlFor="volunteer-dob" className={labelClass}>
              Date of Birth
            </label>
            <input id="volunteer-dob" name="dateOfBirth" type="date" className={fieldClass} required />
          </div>
          <div>
            <label htmlFor="volunteer-gender" className={labelClass}>
              Gender
            </label>
            <select id="volunteer-gender" name="gender" className={fieldClass} defaultValue="" required>
              <option value="" disabled>
                Select gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="volunteer-city-area" className={labelClass}>
              City &amp; Area
            </label>
            <input id="volunteer-city-area" name="cityArea" placeholder="City / Locality" className={fieldClass} required />
          </div>
          <div>
            <label htmlFor="volunteer-school" className={labelClass}>
              School / College Name
            </label>
            <input id="volunteer-school" name="institution" className={fieldClass} required />
          </div>
          <div>
            <label htmlFor="volunteer-grade" className={labelClass}>
              Grade / Year of Study
            </label>
            <input id="volunteer-grade" name="grade" className={fieldClass} required />
          </div>
        </div>
      </section>

      <section className={sectionCardClass}>
        <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          Section 2: Contact Details
        </h4>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="volunteer-email" className={labelClass}>
              Email ID
            </label>
            <input id="volunteer-email" name="email" type="email" autoComplete="email" className={fieldClass} required />
          </div>
          <div>
            <label htmlFor="volunteer-mobile" className={labelClass}>
              Mobile Number
            </label>
            <input id="volunteer-mobile" name="mobile" type="tel" className={fieldClass} required />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="volunteer-parent-name" className={labelClass}>
              Parent / Guardian Name
            </label>
            <input id="volunteer-parent-name" name="guardianName" className={fieldClass} required />
          </div>
        </div>
      </section>

      <section className={sectionCardClass}>
        <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          Section 3: Volunteer Interests
        </h4>
        <p className="text-sm text-body-color">Select all areas where you would love to contribute.</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { value: "community-collection", label: "E-waste collection in my community" },
            { value: "school-collection", label: "E- waste collection in my school" },
            { value: "awareness-campaigns", label: "Awareness campaigns (poster, social media, presentations)" },
            { value: "storytelling", label: "Creative content & storytelling" },
            { value: "research", label: "Research or data tracking" },
            { value: "events", label: "Event organization" },
            { value: "leadership", label: "NGreen Army leadership roles" },
          ].map((interest) => (
            <label key={interest.value} className="flex items-start gap-3 text-sm text-body-color">
              <input
                type="checkbox"
                name="volunteerInterests[]"
                value={interest.value}
                className="mt-1 h-4 w-4 rounded border-primary/40 text-primary focus:ring-primary"
              />
              <span>{interest.label}</span>
            </label>
          ))}
        </div>
      </section>

      <section className={sectionCardClass}>
        <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          Section 4: Motivation
        </h4>
        <label htmlFor="volunteer-motivation" className={labelClass}>
          Why do you want to join NGreenTech?
        </label>
        <textarea
          id="volunteer-motivation"
          name="motivation"
          rows={4}
          className={`${fieldClass} resize-none`}
          required
        />
      </section>

      <section className={sectionCardClass}>
        <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          Section 5: Availability
        </h4>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="volunteer-days" className={labelClass}>
              Preferred volunteering days
            </label>
            <select id="volunteer-days" name="availabilityDays" className={fieldClass} defaultValue="" required>
              <option value="" disabled>
                Select an option
              </option>
              <option value="weekdays">Weekdays</option>
              <option value="weekends">Weekends</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>
          <div>
            <label htmlFor="volunteer-time" className={labelClass}>
              Time commitment
            </label>
            <select id="volunteer-time" name="timeCommitment" className={fieldClass} defaultValue="" required>
              <option value="" disabled>
                Select a commitment level
              </option>
              <option value="1-hour">1 hr / week</option>
              <option value="2-hours">2 hrs / week</option>
              <option value="3-plus">3+ hrs / week</option>
              <option value="event-based">Event-based / Flexible</option>
            </select>
          </div>
        </div>
      </section>

      <section className={sectionCardClass}>
        <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          Section 6: Parental Consent (for 8-14 yrs)
        </h4>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="consent-parent-name" className={labelClass}>
              Parent's Name
            </label>
            <input id="consent-parent-name" name="consentParentName" className={fieldClass} />
          </div>
        </div>
        <label className="flex items-start gap-3 text-sm text-body-color">
          <input
            type="checkbox"
            name="consentAcknowledgement"
            value="granted"
            className="mt-1 h-4 w-4 rounded border-primary/40 text-primary focus:ring-primary"
          />
          <span>I authorize my child to volunteer with NGreenTech.</span>
        </label>
      </section>

      <section className={sectionCardClass}>
        <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          Section 7: Agreement
        </h4>
        <label className="flex items-start gap-3 text-sm text-body-color">
          <input
            type="checkbox"
            name="codeOfConduct"
            value="agree"
            required
            className="mt-1 h-4 w-4 rounded border-primary/40 text-primary focus:ring-primary"
          />
          <span>I agree to follow NGreenTech's code of conduct and environmental ethics.</span>
        </label>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="agreement-date" className={labelClass}>
              Date
            </label>
            <input id="agreement-date" name="agreementDate" type="date" className={fieldClass} required />
          </div>
          <div>
            <label htmlFor="agreement-signature" className={labelClass}>
              Signature
            </label>
            <input id="agreement-signature" name="agreementSignature" placeholder="Type your full name" className={fieldClass} required />
          </div>
        </div>
      </section>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Submitting..." : "Submit Registration"}
      </button>
      </form>
    </div>
  );
};

export default VolunteerForm;
