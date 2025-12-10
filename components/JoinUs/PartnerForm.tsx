"use client";
/* eslint-disable react/no-unescaped-entities */

import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

import { buildWeb3FormPayload, WEB3FORMS_ENDPOINT } from "@/lib/utils";

type PartnerFormVariant = "institution" | "organization" | "government";

type PartnerFormProps = {
  variant: PartnerFormVariant;
};

const fieldClass =
  "w-full rounded-2xl border border-primary/20 bg-white px-5 py-3 text-sm text-body-color outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15";
const labelClass = "block text-sm font-semibold text-dark";
const sectionCardClass =
  "grid gap-4 rounded-2xl border border-primary/15 bg-white p-6 shadow-sm";

const useWeb3FormSubmit = (formType: string, successMessage: string, subject?: string) => {
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
      console.error("Partner form submission error:", error);
      toast.error("Unable to submit the form right now. Please try again shortly.", {
        duration: 6000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return { isSubmitting, handleSubmit };
};

const PartnerForm = ({ variant }: PartnerFormProps) => {
  if (variant === "organization") {
    return <OrganizationCollaborationForm />;
  }

  if (variant === "government") {
    return <GovernmentCollaborationForm />;
  }

  return <EducationalInstitutionForm />;
};

const EducationalInstitutionForm = () => {
  const { isSubmitting, handleSubmit } = useWeb3FormSubmit(
    "institution-collaboration",
    "Thank you for joining NGreenTech in empowering young changemakers. Our team will contact you soon to finalize your partnership and plan your first green drive."
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-8 rounded-3xl border border-primary/15 bg-white p-8 shadow-two"
    >
      <input type="hidden" name="formType" value="institution-collaboration" />

      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          NGreenTech Collaboration Form For Educational Institutions
        </p>
        <h3 className="text-2xl font-semibold text-dark">Empower young changemakers on your campus</h3>
        <p className="text-sm text-body-color">
          Share your institution profile and collaboration goals so we can co-design programmes that inspire sustainable champions.
        </p>
      </header>

      <section className={sectionCardClass}>
        <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Section 1: Institution Details</h4>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="md:col-span-2">
            <label htmlFor="institution-name" className={labelClass}>
              Name of Institution / School / College
            </label>
            <input id="institution-name" name="institutionName" className={fieldClass} required />
          </div>
          <div>
            <label htmlFor="institution-type" className={labelClass}>
              Type of Institution
            </label>
            <select id="institution-type" name="institutionType" className={fieldClass} defaultValue="" required>
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
            <input id="institution-board" name="institutionBoard" placeholder="e.g., CBSE, ICSE, State" className={fieldClass} required />
          </div>
          <div>
            <label htmlFor="institution-city" className={labelClass}>
              City
            </label>
            <input id="institution-city" name="institutionCity" className={fieldClass} required />
          </div>
          <div>
            <label htmlFor="institution-state" className={labelClass}>
              State
            </label>
            <input id="institution-state" name="institutionState" className={fieldClass} required />
          </div>
          <div>
            <label htmlFor="institution-pin" className={labelClass}>
              PIN Code
            </label>
            <input id="institution-pin" name="institutionPin" className={fieldClass} required />
          </div>
          <div>
            <label htmlFor="institution-website" className={labelClass}>
              Institution Website
            </label>
            <input id="institution-website" name="institutionWebsite" type="url" className={fieldClass} />
          </div>
          <div>
            <label htmlFor="institution-principal" className={labelClass}>
              Principal / Head of Institution Name
            </label>
            <input id="institution-principal" name="institutionHead" className={fieldClass} required />
          </div>
        </div>
      </section>

      <section className={sectionCardClass}>
        <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Section 2: Contact Person Details</h4>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="contact-full-name" className={labelClass}>
              Full Name
            </label>
            <input id="contact-full-name" name="contactFullName" className={fieldClass} required />
          </div>
          <div>
            <label htmlFor="contact-designation" className={labelClass}>
              Designation
            </label>
            <input id="contact-designation" name="contactDesignation" placeholder="Teacher Coordinator / Dean / Activity Head" className={fieldClass} required />
          </div>
          <div>
            <label htmlFor="contact-email" className={labelClass}>
              Email ID
            </label>
            <input id="contact-email" name="contactEmail" type="email" className={fieldClass} required />
          </div>
          <div>
            <label htmlFor="contact-mobile" className={labelClass}>
              Mobile Number
            </label>
            <input id="contact-mobile" name="contactMobile" type="tel" className={fieldClass} required />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="contact-alternate" className={labelClass}>
              Alternate Contact (optional)
            </label>
            <input id="contact-alternate" name="contactAlternate" className={fieldClass} />
          </div>
        </div>
      </section>

      <section className={sectionCardClass}>
        <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Section 3: Proposed Collaboration Area</h4>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "Conduct e-waste awareness sessions for students",
            "Organize school/community e-waste collection drives",
            "Integrate sustainability activities in school curriculum / clubs",
            "Participate in inter-school sustainability challenges",
            "Student volunteering & leadership training (NGreen Army)",
            "Set up an NGreenTech Campus Chapter",
            "Partner for research or innovation projects",
          ].map((label) => (
            <label key={label} className="flex items-start gap-3 text-sm text-body-color">
              <input
                type="checkbox"
                name="collaborationAreas[]"
                value={label}
                className="mt-1 h-4 w-4 rounded border-primary/40 text-primary focus:ring-primary"
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </section>

      <section className={sectionCardClass}>
        <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Section 4: Expected Outcomes</h4>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="expected-students" className={labelClass}>
              Student participation numbers (approx.)
            </label>
            <input id="expected-students" name="expectedParticipants" type="number" min="1" className={fieldClass} required />
          </div>
          <div>
            <label htmlFor="preferred-start-date" className={labelClass}>
              Preferred start date
            </label>
            <input id="preferred-start-date" name="preferredStartDate" type="date" className={fieldClass} required />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="preferred-duration" className={labelClass}>
              Preferred duration
            </label>
            <input id="preferred-duration" name="preferredDuration" placeholder="e.g., 3 months" className={fieldClass} required />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="institution-facilities" className={labelClass}>
              Facilities the institution can provide
            </label>
            <textarea id="institution-facilities" name="institutionFacilities" rows={3} className={`${fieldClass} resize-none`} required />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="special-request" className={labelClass}>
              Any special request / collaboration idea
            </label>
            <textarea id="special-request" name="specialRequest" rows={3} className={`${fieldClass} resize-none`} />
          </div>
        </div>
      </section>

      <section className={sectionCardClass}>
        <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Section 5: Terms & Confirmation</h4>
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
            <span>I authorize this request on behalf of the institution.</span>
          </label>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <label htmlFor="confirmation-name" className={labelClass}>
              Name
            </label>
            <input id="confirmation-name" name="confirmationName" className={fieldClass} required />
          </div>
          <div>
            <label htmlFor="confirmation-designation" className={labelClass}>
              Designation
            </label>
            <input id="confirmation-designation" name="confirmationDesignation" className={fieldClass} required />
          </div>
          <div>
            <label htmlFor="confirmation-date" className={labelClass}>
              Date
            </label>
            <input id="confirmation-date" name="confirmationDate" type="date" className={fieldClass} required />
          </div>
        </div>
      </section>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Submitting..." : "Submit Collaboration Request"}
      </button>
    </form>
  );
};

const OrganizationCollaborationForm = () => {
  const { isSubmitting, handleSubmit } = useWeb3FormSubmit(
    "organization-collaboration",
    "Thank you for your interest in partnering with NGreenTech! Our team will review your submission and get in touch within 5-7 working days."
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-8 rounded-3xl border border-primary/15 bg-white p-8 shadow-two"
    >
      <input type="hidden" name="formType" value="organization-collaboration" />

      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          NGreenTech Collaboration & Sponsorship Form For Organizations & Industries
        </p>
        <h3 className="text-2xl font-semibold text-dark">Co-create scalable sustainability impact</h3>
        <p className="text-sm text-body-color">
          Share your organisation's interests so we can align our programmes with your CSR, EPR, and employee engagement goals.
        </p>
      </header>

      <section className={sectionCardClass}>
        <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Section 1: Organization / Institution Details</h4>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="md:col-span-2">
            <label htmlFor="org-name" className={labelClass}>
              Organization / Institution Name
            </label>
            <input id="org-name" name="organisationName" className={fieldClass} required />
          </div>
          <div>
            <label htmlFor="org-entity-type" className={labelClass}>
              Type of Entity
            </label>
            <select id="org-entity-type" name="organisationType" className={fieldClass} defaultValue="" required>
              <option value="" disabled>
                Select entity type
              </option>
              <option value="corporate">Corporate</option>
              <option value="school">School</option>
              <option value="college">College</option>
              <option value="ngo">NGO</option>
              <option value="government">Government</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="org-industry" className={labelClass}>
              Industry / Sector
            </label>
            <input id="org-industry" name="organisationIndustry" placeholder="Education, IT, Manufacturing, Sustainability, etc." className={fieldClass} required />
          </div>
          <div>
            <label htmlFor="org-website" className={labelClass}>
              Official Website
            </label>
            <input id="org-website" name="organisationWebsite" type="url" className={fieldClass} />
          </div>
          <div>
            <label htmlFor="org-city" className={labelClass}>
              City
            </label>
            <input id="org-city" name="organisationCity" className={fieldClass} required />
          </div>
          <div>
            <label htmlFor="org-state" className={labelClass}>
              State
            </label>
            <input id="org-state" name="organisationState" className={fieldClass} required />
          </div>
          <div>
            <label htmlFor="org-pin" className={labelClass}>
              PIN Code
            </label>
            <input id="org-pin" name="organisationPin" className={fieldClass} required />
          </div>
          <div>
            <label htmlFor="org-country" className={labelClass}>
              Country
            </label>
            <input id="org-country" name="organisationCountry" className={fieldClass} required />
          </div>
        </div>
      </section>

      <section className={sectionCardClass}>
        <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Section 2: Contact Person Details</h4>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="org-contact-name" className={labelClass}>
              Full Name
            </label>
            <input id="org-contact-name" name="contactFullName" className={fieldClass} required />
          </div>
          <div>
            <label htmlFor="org-contact-role" className={labelClass}>
              Designation / Role
            </label>
            <input id="org-contact-role" name="contactRole" className={fieldClass} required />
          </div>
          <div>
            <label htmlFor="org-contact-email" className={labelClass}>
              Email ID (official preferred)
            </label>
            <input id="org-contact-email" name="contactEmail" type="email" className={fieldClass} required />
          </div>
          <div>
            <label htmlFor="org-contact-mobile" className={labelClass}>
              Mobile Number / WhatsApp
            </label>
            <input id="org-contact-mobile" name="contactMobile" type="tel" className={fieldClass} required />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="org-linkedin" className={labelClass}>
              LinkedIn Profile (optional)
            </label>
            <input id="org-linkedin" name="contactLinkedIn" type="url" className={fieldClass} />
          </div>
        </div>
      </section>

      <section className={sectionCardClass}>
        <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Section 3: Area of Interest / Collaboration</h4>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "Sponsorship (Event / Campaign / School Drive)",
            "CSR Partnership",
            "Hosting Awareness Drives in Campus / Workplace",
            "E-waste Collection & Recycling Partnership",
            "Research / Technical Collaboration",
            "Mentorship / Expert Support",
            "Volunteering / Employee Engagement",
            "Other",
          ].map((label) => (
            <label key={label} className="flex items-start gap-3 text-sm text-body-color">
              <input
                type="checkbox"
                name="collaborationTypes[]"
                value={label}
                className="mt-1 h-4 w-4 rounded border-primary/40 text-primary focus:ring-primary"
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
        <div>
          <label htmlFor="org-collaboration-other" className={labelClass}>
            If "Other", please specify
          </label>
          <input id="org-collaboration-other" name="collaborationOther" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="org-collaboration-description" className={labelClass}>
            Brief description of proposed collaboration
          </label>
          <textarea id="org-collaboration-description" name="collaborationDescription" rows={4} className={`${fieldClass} resize-none`} required />
        </div>
        <div>
          <label htmlFor="org-duration" className={labelClass}>
            Expected duration of partnership
          </label>
          <select id="org-duration" name="partnershipDuration" className={fieldClass} defaultValue="" required>
            <option value="" disabled>
              Select duration
            </option>
            <option value="one-time">One-time</option>
            <option value="three-months">3 months</option>
            <option value="six-months">6 months</option>
            <option value="twelve-months">12 months</option>
            <option value="ongoing">Ongoing</option>
          </select>
        </div>
      </section>

      <section className={sectionCardClass}>
        <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Section 4: Sponsorship / Support Preferences (optional)</h4>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "Financial Sponsorship",
            "Infrastructure / Venue Support",
            "Awareness Material Printing",
            "E-waste Collection Drives",
            "Rewards or Merchandise for Students",
            "Other",
          ].map((label) => (
            <label key={label} className="flex items-start gap-3 text-sm text-body-color">
              <input
                type="checkbox"
                name="supportModes[]"
                value={label}
                className="mt-1 h-4 w-4 rounded border-primary/40 text-primary focus:ring-primary"
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
        <div>
          <label htmlFor="org-support-other" className={labelClass}>
            If "Other", please specify
          </label>
          <input id="org-support-other" name="supportOther" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="org-budget" className={labelClass}>
            Estimated budget / contribution (optional)
          </label>
          <input id="org-budget" name="estimatedBudget" className={fieldClass} />
        </div>
      </section>

      <section className={sectionCardClass}>
        <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Section 5: Sustainability Goals Alignment</h4>
        <div className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="org-existing-sustainability" className={labelClass}>
                Does your organization have an existing Sustainability / CSR initiative?
              </label>
              <select id="org-existing-sustainability" name="hasSustainabilityInitiative" className={fieldClass} defaultValue="" required>
                <option value="" disabled>
                  Select
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div>
              <label htmlFor="org-sdg-focus" className={labelClass}>
                If yes, briefly describe the focus area
              </label>
              <textarea id="org-sdg-focus" name="sustainabilityFocus" rows={3} className={`${fieldClass} resize-none`} />
            </div>
          </div>
          <div>
            <span className={labelClass}>UN SDGs your organization aligns with</span>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {[
                "SDG 4: Quality Education",
                "SDG 11: Sustainable Cities & Communities",
                "SDG 12: Responsible Consumption & Production",
                "SDG 13: Climate Action",
                "SDG 17: Partnerships for the Goals",
                "Other",
              ].map((label) => (
                <label key={label} className="flex items-start gap-3 text-sm text-body-color">
                  <input
                    type="checkbox"
                    name="alignedSdgs[]"
                    value={label}
                    className="mt-1 h-4 w-4 rounded border-primary/40 text-primary focus:ring-primary"
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={sectionCardClass}>
        <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Section 6: Impact Area Preference</h4>
        <div>
          <label htmlFor="org-impact" className={labelClass}>
            Preferred impact area
          </label>
          <select id="org-impact" name="preferredImpactArea" className={fieldClass} defaultValue="" required>
            <option value="" disabled>
              Select an area
            </option>
            <option value="schools">Schools / Students</option>
            <option value="urban-communities">Urban Communities</option>
            <option value="rural-areas">Rural Areas</option>
            <option value="colleges">Colleges & Universities</option>
            <option value="corporate-campuses">Corporate Campuses</option>
            <option value="research">Research & Innovation</option>
          </select>
        </div>
      </section>

      <section className={sectionCardClass}>
        <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Section 7: Preferred Timeline</h4>
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <label htmlFor="org-start-date" className={labelClass}>
              Proposed start date
            </label>
            <input id="org-start-date" name="proposedStartDate" type="date" className={fieldClass} required />
          </div>
          <div>
            <label htmlFor="org-end-date" className={labelClass}>
              Proposed end date
            </label>
            <input id="org-end-date" name="proposedEndDate" type="date" className={fieldClass} />
          </div>
          <div>
            <label htmlFor="org-timeline-flex" className={labelClass}>
              Flexibility for timeline
            </label>
            <select id="org-timeline-flex" name="timelineFlexibility" className={fieldClass} defaultValue="" required>
              <option value="" disabled>
                Select
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
      </section>

      <section className={sectionCardClass}>
        <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Section 8: Terms & Confirmation</h4>
        <div className="space-y-3">
          <label className="flex items-start gap-3 text-sm text-body-color">
            <input
              type="checkbox"
              name="informationAccurate"
              value="yes"
              required
              className="mt-1 h-4 w-4 rounded border-primary/40 text-primary focus:ring-primary"
            />
            <span>I confirm that the above information is accurate to the best of my knowledge.</span>
          </label>
          <label className="flex items-start gap-3 text-sm text-body-color">
            <input
              type="checkbox"
              name="bindingAgreement"
              value="acknowledged"
              required
              className="mt-1 h-4 w-4 rounded border-primary/40 text-primary focus:ring-primary"
            />
            <span>I understand this form expresses interest and not a binding agreement.</span>
          </label>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="org-signature-name" className={labelClass}>
              Name (Digital Signature)
            </label>
            <input id="org-signature-name" name="signatureName" className={fieldClass} required />
          </div>
          <div>
            <label htmlFor="org-signature-date" className={labelClass}>
              Date
            </label>
            <input id="org-signature-date" name="signatureDate" type="date" className={fieldClass} required />
          </div>
        </div>
      </section>

      <section className={sectionCardClass}>
        <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Optional Add-ons</h4>
        <div className="grid gap-4">
          <div>
            <label htmlFor="org-referral" className={labelClass}>
              How did you hear about NGreenTech?
            </label>
            <input id="org-referral" name="referralSource" className={fieldClass} />
          </div>
        </div>
      </section>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Submitting..." : "Submit Collaboration Form"}
      </button>
    </form>
  );
};

const GovernmentCollaborationForm = () => {
  const { isSubmitting, handleSubmit } = useWeb3FormSubmit(
    "government-collaboration",
    "Thank you for your interest in partnering with NGreenTech Foundation. Our coordination team will reach out within 7 working days to discuss your proposal."
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-8 rounded-3xl border border-primary/15 bg-white p-8 shadow-two"
    >
      <input type="hidden" name="formType" value="government-collaboration" />

      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          NGreenTech Government Collaboration Form
        </p>
        <h3 className="text-2xl font-semibold text-dark">Collaborate to scale national sustainability missions</h3>
        <p className="text-sm text-body-color">
          Provide your department's details so we can architect programmes aligned with public policy, SDGs, and youth mobilisation.
        </p>
      </header>

      <section className={sectionCardClass}>
        <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Section 1: Department / Institution Details</h4>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="md:col-span-2">
            <label htmlFor="gov-department-name" className={labelClass}>
              Department / Institution Name
            </label>
            <input id="gov-department-name" name="departmentName" className={fieldClass} required />
          </div>
          <div>
            <label htmlFor="gov-institution-type" className={labelClass}>
              Type of Institution
            </label>
            <select id="gov-institution-type" name="institutionType" className={fieldClass} defaultValue="" required>
              <option value="" disabled>
                Select type
              </option>
              <option value="central">Central Govt</option>
              <option value="state">State Govt</option>
              <option value="local">Local Body</option>
              <option value="psu">PSU</option>
              <option value="educational-board">Educational Board</option>
              <option value="research-agency">Research Agency</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="gov-ministry" className={labelClass}>
              Ministry / Administrative Control (if applicable)
            </label>
            <input id="gov-ministry" name="ministry" className={fieldClass} />
          </div>
          <div>
            <label htmlFor="gov-city" className={labelClass}>
              City
            </label>
            <input id="gov-city" name="city" className={fieldClass} required />
          </div>
          <div>
            <label htmlFor="gov-state" className={labelClass}>
              State
            </label>
            <input id="gov-state" name="state" className={fieldClass} required />
          </div>
          <div>
            <label htmlFor="gov-pin" className={labelClass}>
              PIN Code
            </label>
            <input id="gov-pin" name="pin" className={fieldClass} required />
          </div>
          <div>
            <label htmlFor="gov-country" className={labelClass}>
              Country
            </label>
            <input id="gov-country" name="country" className={fieldClass} required />
          </div>
          <div>
            <label htmlFor="gov-website" className={labelClass}>
              Official Website
            </label>
            <input id="gov-website" name="website" type="url" className={fieldClass} />
          </div>
        </div>
      </section>

      <section className={sectionCardClass}>
        <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Section 2: Nodal Officer / Authorized Contact</h4>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="gov-officer-name" className={labelClass}>
              Full Name of Officer
            </label>
            <input id="gov-officer-name" name="officerName" className={fieldClass} required />
          </div>
          <div>
            <label htmlFor="gov-officer-designation" className={labelClass}>
              Designation
            </label>
            <input id="gov-officer-designation" name="officerDesignation" className={fieldClass} required />
          </div>
          <div>
            <label htmlFor="gov-officer-department" className={labelClass}>
              Department / Section Name
            </label>
            <input id="gov-officer-department" name="officerDepartment" className={fieldClass} required />
          </div>
          <div>
            <label htmlFor="gov-officer-email" className={labelClass}>
              Official Email ID
            </label>
            <input id="gov-officer-email" name="officerEmail" type="email" className={fieldClass} required />
          </div>
          <div>
            <label htmlFor="gov-officer-mobile" className={labelClass}>
              Mobile Number (official contact)
            </label>
            <input id="gov-officer-mobile" name="officerMobile" type="tel" className={fieldClass} required />
          </div>
          <div>
            <label htmlFor="gov-office-phone" className={labelClass}>
              Office Phone Number (optional)
            </label>
            <input id="gov-office-phone" name="officePhone" className={fieldClass} />
          </div>
        </div>
      </section>

      <section className={sectionCardClass}>
        <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Section 3: Area of Collaboration</h4>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "Public Awareness Campaigns on E-waste Management",
            "Youth Engagement & Leadership Development under NGreen Army",
            "School & Institutional Awareness Programs",
            "E-waste Collection & Channelization Drives",
            "Policy & Research Collaboration",
            "CSR / Public-Private Partnership (PPP) Support",
            "Joint Conferences, Workshops & Exhibitions",
            "Training & Capacity Building",
            "Other",
          ].map((label) => (
            <label key={label} className="flex items-start gap-3 text-sm text-body-color">
              <input
                type="checkbox"
                name="collaborationAreas[]"
                value={label}
                className="mt-1 h-4 w-4 rounded border-primary/40 text-primary focus:ring-primary"
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
        <div>
          <label htmlFor="gov-collaboration-other" className={labelClass}>
            If "Other", please specify
          </label>
          <input id="gov-collaboration-other" name="collaborationOther" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="gov-collaboration-description" className={labelClass}>
            Brief description of proposed collaboration
          </label>
          <textarea id="gov-collaboration-description" name="collaborationDescription" rows={4} className={`${fieldClass} resize-none`} required />
        </div>
        <div>
          <label htmlFor="gov-scope" className={labelClass}>
            Geographic scope
          </label>
          <select id="gov-scope" name="geographicScope" className={fieldClass} defaultValue="" required>
            <option value="" disabled>
              Select scope
            </option>
            <option value="city">City</option>
            <option value="district">District</option>
            <option value="state">State</option>
            <option value="national">National Level</option>
          </select>
        </div>
        <div>
          <label htmlFor="gov-duration" className={labelClass}>
            Expected duration
          </label>
          <select id="gov-duration" name="expectedDuration" className={fieldClass} defaultValue="" required>
            <option value="" disabled>
              Select duration
            </option>
            <option value="one-time">One-time</option>
            <option value="short-term">Short-term</option>
            <option value="long-term">Long-term</option>
          </select>
        </div>
      </section>

      <section className={sectionCardClass}>
        <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Section 4: Government Objectives & SDG Alignment</h4>
        <div className="grid gap-4">
          <div>
            <label htmlFor="gov-mission" className={labelClass}>
              Relevant Government Mission / Scheme
            </label>
            <input id="gov-mission" name="governmentMission" placeholder="e.g., Swachh Bharat Mission" className={fieldClass} />
          </div>
          <div>
            <label htmlFor="gov-focus-area" className={labelClass}>
              Focus Area
            </label>
            <select id="gov-focus-area" name="focusArea" className={fieldClass} defaultValue="" required>
              <option value="" disabled>
                Select focus area
              </option>
              <option value="environment">Environment</option>
              <option value="education">Education</option>
              <option value="innovation">Innovation</option>
              <option value="skill-development">Skill Development</option>
              <option value="waste-management">Waste Management</option>
              <option value="public-awareness">Public Awareness</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <span className={labelClass}>Aligned UN SDGs</span>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {[
                "SDG 4: Quality Education",
                "SDG 11: Sustainable Cities and Communities",
                "SDG 12: Responsible Consumption and Production",
                "SDG 13: Climate Action",
                "SDG 17: Partnerships for the Goals",
              ].map((label) => (
                <label key={label} className="flex items-start gap-3 text-sm text-body-color">
                  <input
                    type="checkbox"
                    name="alignedSdgs[]"
                    value={label}
                    className="mt-1 h-4 w-4 rounded border-primary/40 text-primary focus:ring-primary"
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={sectionCardClass}>
        <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Section 5: Target Beneficiaries / Institutions</h4>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "Government Schools",
            "Engineering / Polytechnic Colleges",
            "Municipal Communities",
            "Urban / Rural Youth",
            "Industrial Zones / PSUs",
            "Other",
          ].map((label) => (
            <label key={label} className="flex items-start gap-3 text-sm text-body-color">
              <input
                type="checkbox"
                name="targetAudience[]"
                value={label}
                className="mt-1 h-4 w-4 rounded border-primary/40 text-primary focus:ring-primary"
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
        <div>
          <label htmlFor="gov-target-other" className={labelClass}>
            If "Other", please specify
          </label>
          <input id="gov-target-other" name="targetOther" className={fieldClass} />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="gov-beneficiaries" className={labelClass}>
              Estimated number of beneficiaries
            </label>
            <input id="gov-beneficiaries" name="estimatedBeneficiaries" type="number" min="1" className={fieldClass} />
          </div>
          <div>
            <label htmlFor="gov-pilot-locations" className={labelClass}>
              Preferred pilot locations
            </label>
            <input id="gov-pilot-locations" name="pilotLocations" className={fieldClass} />
          </div>
        </div>
      </section>

      <section className={sectionCardClass}>
        <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Section 6: Type of Support Offered by the Government</h4>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "Policy Facilitation / Official Endorsement",
            "Venue / Infrastructure Support",
            "Awareness Drive Collaboration",
            "Administrative Permissions / Circulars to Schools",
            "Resource Persons or Experts",
            "Financial Support / Grant",
            "Other",
          ].map((label) => (
            <label key={label} className="flex items-start gap-3 text-sm text-body-color">
              <input
                type="checkbox"
                name="governmentSupport[]"
                value={label}
                className="mt-1 h-4 w-4 rounded border-primary/40 text-primary focus:ring-primary"
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
        <div>
          <label htmlFor="gov-support-other" className={labelClass}>
            If "Other", please specify
          </label>
          <input id="gov-support-other" name="supportOther" className={fieldClass} />
        </div>
      </section>

      <section className="rounded-2xl border border-primary/15 bg-primary/5 p-6 text-sm leading-relaxed text-body-color shadow-sm">
        <p className="font-semibold text-primary">NGreenTech Contribution</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Expertise in e-waste awareness and youth engagement</li>
          <li>Training and mentorship programmes for students</li>
          <li>Structured e-waste collection mechanisms</li>
          <li>Research inputs and reports for sustainable policy action</li>
          <li>Recognition and visibility through media & social channels</li>
        </ul>
      </section>

      <section className={sectionCardClass}>
        <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Section 8: Preferred Timeline</h4>
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <label htmlFor="gov-start-date" className={labelClass}>
              Proposed start date
            </label>
            <input id="gov-start-date" name="proposedStartDate" type="date" className={fieldClass} required />
          </div>
          <div>
            <label htmlFor="gov-end-date" className={labelClass}>
              Proposed end date
            </label>
            <input id="gov-end-date" name="proposedEndDate" type="date" className={fieldClass} />
          </div>
          <div>
            <label htmlFor="gov-frequency" className={labelClass}>
              Frequency of activities
            </label>
            <select id="gov-frequency" name="activityFrequency" className={fieldClass} defaultValue="" required>
              <option value="" disabled>
                Select frequency
              </option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
              <option value="annual">Annual</option>
            </select>
          </div>
        </div>
      </section>

      <section className={sectionCardClass}>
        <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Section 9: Terms & Confirmation</h4>
        <div className="space-y-3">
          <label className="flex items-start gap-3 text-sm text-body-color">
            <input
              type="checkbox"
              name="governmentAccuracy"
              value="yes"
              required
              className="mt-1 h-4 w-4 rounded border-primary/40 text-primary focus:ring-primary"
            />
            <span>I confirm that the above information is accurate and authorized by the concerned department.</span>
          </label>
          <label className="flex items-start gap-3 text-sm text-body-color">
            <input
              type="checkbox"
              name="governmentAgreement"
              value="acknowledged"
              required
              className="mt-1 h-4 w-4 rounded border-primary/40 text-primary focus:ring-primary"
            />
            <span>I understand this submission expresses interest for collaboration and not a formal MoU.</span>
          </label>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2">
            <label htmlFor="gov-signatory-name" className={labelClass}>
              Name of Authorized Signatory
            </label>
            <input id="gov-signatory-name" name="signatoryName" className={fieldClass} required />
          </div>
          <div>
            <label htmlFor="gov-signatory-designation" className={labelClass}>
              Designation
            </label>
            <input id="gov-signatory-designation" name="signatoryDesignation" className={fieldClass} required />
          </div>
          <div>
            <label htmlFor="gov-signature-date" className={labelClass}>
              Date
            </label>
            <input id="gov-signature-date" name="signatoryDate" type="date" className={fieldClass} required />
          </div>
        </div>
      </section>

      <section className={sectionCardClass}>
        <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Section 10: Additional Details</h4>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="gov-referral" className={labelClass}>
              How did you learn about NGreenTech?
            </label>
            <select id="gov-referral" name="referralSource" className={fieldClass} defaultValue="">
              <option value="" disabled>
                Select source
              </option>
              <option value="event">Event</option>
              <option value="social-media">Social media</option>
              <option value="referral">Referral</option>
              <option value="press">Press / Media</option>
              <option value="other">Other</option>
            </select>
          </div>
          <label className="flex items-start gap-3 text-sm text-body-color">
            <input
              type="checkbox"
              name="newsletterOptIn"
              value="yes"
              className="mt-1 h-4 w-4 rounded border-primary/40 text-primary focus:ring-primary"
            />
            <span>Keep me updated about NGreenTech initiatives and reports.</span>
          </label>
        </div>
      </section>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Submitting..." : "Submit Government Collaboration Request"}
      </button>
    </form>
  );
};

export default PartnerForm;
