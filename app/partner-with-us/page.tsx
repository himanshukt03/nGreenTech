// Simple fallback: define PartnerWithUsContent locally to avoid missing module error
import React from "react";

const PartnerWithUsContent: React.FC = () => {
  return (
    <main>
      <h1>Partner With Us</h1>
      <p>Welcome — contact us to learn about partnership opportunities.</p>
    </main>
  );
};

const PartnerWithUsPage = () => {
  return <PartnerWithUsContent />;
};

export default PartnerWithUsPage;
