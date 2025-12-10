/**
 * Get the correct image path based on the environment
 * @param imagePath - The image path starting with /images/
 * @returns The full image path with base path if needed
 */
export function getImagePath(imagePath: string): string {
  // Remove leading slash if present
  const cleanPath = imagePath.startsWith("/") ? imagePath.slice(1) : imagePath;

  // Check if we're in production (GitHub Pages)
  const isProduction = process.env.NODE_ENV === "production";
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  if (isProduction && basePath) {
    // Remove leading slash from basePath if present to avoid double slashes
    const cleanBasePath = basePath.startsWith("/")
      ? basePath.slice(1)
      : basePath;
    return `/${cleanBasePath}/${cleanPath}`;
  }

  return `/${cleanPath}`;
}

/**
 * Get the base path for the application
 * @returns The base path string
 */
export function getBasePath(): string {
  return process.env.NEXT_PUBLIC_BASE_PATH || "";
}

export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "4f8be2de-b19a-4f83-9464-cec5d8ed9437";

type BuildWeb3FormPayloadOptions = {
  formType: string;
  subject?: string;
  fallbackName?: string;
  fallbackEmail?: string;
  fromNameFields?: string[];
  fromEmailFields?: string[];
};

const DEFAULT_NAME_FIELDS = ["contactFullName", "fullName", "officerName", "signatureName", "confirmationName"];
const DEFAULT_EMAIL_FIELDS = ["contactEmail", "email", "officerEmail"];

/**
 * Convert FormData into a payload accepted by Web3Forms
 */
export function buildWeb3FormPayload(formData: FormData, options: BuildWeb3FormPayloadOptions): Record<string, string> {
  const {
    formType,
    subject,
    fallbackName = "NGreenTech Website",
    fallbackEmail = "noreply@ngreentech.org",
    fromNameFields = [],
    fromEmailFields = [],
  } = options;

  const data: Record<string, string> = {};

  formData.forEach((value, key) => {
    const normalizedKey = key.endsWith("[]") ? key.slice(0, -2) : key;
    const stringValue = typeof value === "string" ? value : value.name;

    if (data[normalizedKey]) {
      data[normalizedKey] = `${data[normalizedKey]}, ${stringValue}`;
    } else {
      data[normalizedKey] = stringValue;
    }
  });

  data.formType = formType;

  const findFirstFilledValue = (fields: string[]) => {
    for (const field of fields) {
      const fieldValue = data[field];
      if (fieldValue) {
        return fieldValue;
      }
    }
    return undefined;
  };

  const fromName = findFirstFilledValue([...fromNameFields, ...DEFAULT_NAME_FIELDS]) || fallbackName;
  const fromEmail = findFirstFilledValue([...fromEmailFields, ...DEFAULT_EMAIL_FIELDS]) || fallbackEmail;

  return {
    access_key: WEB3FORMS_ACCESS_KEY,
    subject: subject || `New ${formType.replace(/-/g, " ")} submission`,
    from_name: fromName,
    from_email: fromEmail,
    ...data,
  };
}
