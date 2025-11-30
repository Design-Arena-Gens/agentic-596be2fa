export type FieldType =
  | "full_name"
  | "first_name"
  | "last_name"
  | "phone"
  | "email"
  | "full_address"
  | "state"
  | "city"
  | "postal_code"
  | "product"
  | "variant"
  | "quantity"
  | "notes"
  | "payment_method";

export type FieldDefinition = {
  id: string;
  type: FieldType;
  label: string;
  required?: boolean;
  placeholder?: string;
};

export const AVAILABLE_FIELDS: Array<{ type: FieldType; label: string; placeholder?: string }> = [
  { type: "full_name", label: "Full Name", placeholder: "Jane Doe" },
  { type: "first_name", label: "First Name", placeholder: "Jane" },
  { type: "last_name", label: "Last Name", placeholder: "Doe" },
  { type: "phone", label: "Phone", placeholder: "+1 (555) 000-0000" },
  { type: "email", label: "Email", placeholder: "jane@example.com" },
  { type: "full_address", label: "Full Address", placeholder: "123 Main St" },
  { type: "state", label: "State/Province", placeholder: "CA" },
  { type: "city", label: "City/Town", placeholder: "San Francisco" },
  { type: "postal_code", label: "Postal Code", placeholder: "94105" },
  { type: "product", label: "Product", placeholder: "" },
  { type: "variant", label: "Variant", placeholder: "" },
  { type: "quantity", label: "Quantity", placeholder: "1" },
  { type: "notes", label: "Notes/Instructions", placeholder: "Tell us more..." },
  { type: "payment_method", label: "Payment Method", placeholder: "" },
];

