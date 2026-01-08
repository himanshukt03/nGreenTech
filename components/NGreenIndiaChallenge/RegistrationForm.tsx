"use client";
/* eslint-disable react/no-unescaped-entities */

import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

import { buildWeb3FormPayload, WEB3FORMS_ENDPOINT } from "@/lib/utils";

const fieldClass =
  "w-full rounded-2xl border border-primary/20 bg-white px-5 py-3 text-sm text-body-color outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15";
const labelClass = "block text-sm font-semibold text-dark";
const sectionCardClass =
  "grid gap-4 rounded-2xl border border-primary/15 bg-white p-6 shadow-sm";

const useWeb3FormSubmit = (
  formType: string,
  successMessage: string,
  subject?: string
) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("formType", formType);
    const payload = buildWeb3FormPayload(formData, { formType, subject });

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (result.success) {
        toast.success(successMessage, { duration: 7000 });
        form.reset();
      } else {
        throw new Error(result.message || "Form submission failed");
      }
    } catch (error) {
      console.error("Registration form submission error:", error);
      toast.error(
        "Unable to submit the form right now. Please try again shortly.",
        {
          duration: 6000,
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return { isSubmitting, handleSubmit };
};

const RegistrationForm = () => {
  const { isSubmitting, handleSubmit } = useWeb3FormSubmit(
    "green-india-challenge-registration",
    "Thank you for registering for the nGreen India Challenge. Our team will contact you soon to coordinate the next steps."
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-8 rounded-3xl border border-primary/15 bg-white p-8 shadow-two"
    >
      <input
        type="hidden"
        name="formType"
        value="green-india-challenge-registration"
      />

      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          Registration Form
        </p>
        <h3 className="text-2xl font-semibold text-dark">
          nGreen India Challenge
        </h3>
        <p className="text-sm text-body-color">
          Join the National Inter school E waste Competiton.
          Register your institution today.
        </p>
      </header>

      <section className={sectionCardClass}>
        <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          Section 1: Institution Details
        </h4>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="md:col-span-2">
            <label htmlFor="institution-name" className={labelClass}>
              Name of Institution / School / College
            </label>
            <input
              id="institution-name"
              name="institutionName"
              className={fieldClass}
              required
            />
          </div>
          <div>
            <label htmlFor="institution-type" className={labelClass}>
              Type of Institution
            </label>
            <select
              id="institution-type"
              name="institutionType"
              className={fieldClass}
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select type
              </option>
              <option value="school">School</option>
              <option value="college">College</option>
              <option value="university">University</option>
              <option value="coaching-centre">Coaching Centre</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="institution-board" className={labelClass}>
              Board / Affiliation
            </label>
            <input
              id="institution-board"
              name="institutionBoard"
              placeholder="e.g., CBSE, ICSE, State"
              className={fieldClass}
              required
            />
          </div>
          <div>
            <label htmlFor="institution-city" className={labelClass}>
              City
            </label>
            <input
              id="institution-city"
              name="institutionCity"
              className={fieldClass}
              required
            />
          </div>
          <div>
            <label htmlFor="institution-state" className={labelClass}>
              State
            </label>
            <input
              id="institution-state"
              name="institutionState"
              className={fieldClass}
              required
            />
          </div>
          <div>
            <label htmlFor="institution-pin" className={labelClass}>
              PIN Code
            </label>
            <input
              id="institution-pin"
              name="institutionPin"
              className={fieldClass}
              required
            />
          </div>
          <div>
            <label htmlFor="institution-website" className={labelClass}>
              Institution Website
            </label>
            <input
              id="institution-website"
              name="institutionWebsite"
              type="url"
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="institution-principal" className={labelClass}>
              Principal / Head of Institution Name
            </label>
            <input
              id="institution-principal"
              name="institutionHead"
              className={fieldClass}
              required
            />
          </div>
          <div>
            <label htmlFor="student-count" className={labelClass}>
              Number of students in the school
            </label>
            <input
              id="student-count"
              name="studentCount"
              type="number"
              min="0"
              className={fieldClass}
              required
            />
          </div>
        </div>
      </section>

      <section className={sectionCardClass}>
        <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          Section 2: Contact Person Details
        </h4>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="contact-full-name" className={labelClass}>
              Full Name
            </label>
            <input
              id="contact-full-name"
              name="contactFullName"
              className={fieldClass}
              required
            />
          </div>
          <div>
            <label htmlFor="contact-designation" className={labelClass}>
              Designation
            </label>
            <input
              id="contact-designation"
              name="contactDesignation"
              placeholder="Teacher Coordinator / Dean / Activity Head"
              className={fieldClass}
              required
            />
          </div>
          <div>
            <label htmlFor="contact-email" className={labelClass}>
              Email ID
            </label>
            <input
              id="contact-email"
              name="contactEmail"
              type="email"
              className={fieldClass}
              required
            />
          </div>
          <div>
            <label htmlFor="contact-mobile" className={labelClass}>
              Mobile Number
            </label>
            <input
              id="contact-mobile"
              name="contactMobile"
              type="tel"
              className={fieldClass}
              required
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="contact-alternate" className={labelClass}>
              Alternate Contact (optional)
            </label>
            <input
              id="contact-alternate"
              name="contactAlternate"
              className={fieldClass}
            />
          </div>
        </div>
      </section>

      <section className={sectionCardClass}>
        <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          Section 3: Terms & Confirmation
        </h4>
        <div>
          <label htmlFor="referral-source" className={labelClass}>
            How did you hear about this challenge?
          </label>
          <select
            id="referral-source"
            name="referralSource"
            className={fieldClass}
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="social-media">Social Media (LinkedIn, Instagram, etc.)</option>
            <option value="email">Email Invitation</option>
            <option value="website">nGreenTech Website</option>
            <option value="referral">Referral from another school/colleague</option>
            <option value="event">Event or Webinar</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="space-y-3">
          <label className="flex items-start gap-3 text-sm text-body-color">
            <input
              type="checkbox"
              name="detailsAccurate"
              value="yes"
              required
              className="mt-1 h-4 w-4 rounded border-primary/40 text-primary focus:ring-primary"
            />
            <span>I confirm the above details are accurate.</span>
          </label>
          <label className="flex items-start gap-3 text-sm text-body-color">
            <input
              type="checkbox"
              name="authorizedRequest"
              value="yes"
              required
              className="mt-1 h-4 w-4 rounded border-primary/40 text-primary focus:ring-primary"
            />
            <span>I authorize this registeration on behalf of the institution.</span>
          </label>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <label htmlFor="confirmation-name" className={labelClass}>
              Name
            </label>
            <input
              id="confirmation-name"
              name="confirmationName"
              className={fieldClass}
              required
            />
          </div>
          <div>
            <label htmlFor="confirmation-designation" className={labelClass}>
              Designation
            </label>
            <input
              id="confirmation-designation"
              name="confirmationDesignation"
              className={fieldClass}
              required
            />
          </div>
          <div>
            <label htmlFor="confirmation-date" className={labelClass}>
              Date
            </label>
            <input
              id="confirmation-date"
              name="confirmationDate"
              type="date"
              className={fieldClass}
              required
            />
          </div>
        </div>
      </section>

      <div className="flex justify-center pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-full bg-primary px-10 py-4 text-base font-semibold text-white shadow-submit duration-300 hover:bg-primary/90 disabled:cursor-not-allowed disabled:bg-opacity-70"
        >
          {isSubmitting ? "Submitting..." : "Submit Registration"}
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
