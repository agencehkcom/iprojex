import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ContactEmailProps {
  name: string;
  company?: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactEmail({
  name,
  company,
  email,
  phone,
  message,
}: ContactEmailProps) {
  const formattedDate = new Date().toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Html>
      <Head />
      <Preview>Nouvelle demande de devis de {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Nouvelle demande de devis</Heading>
          <Text style={text}>
            Une nouvelle demande de devis a été soumise via le site IPROJEX.
          </Text>

          <Section style={section}>
            <Heading as="h2" style={h2}>
              Coordonnées du prospect
            </Heading>
            <Text style={field}>
              <strong>Nom :</strong> {name}
            </Text>
            {company && (
              <Text style={field}>
                <strong>Société :</strong> {company}
              </Text>
            )}
            <Text style={field}>
              <strong>Email :</strong> {email}
            </Text>
            <Text style={field}>
              <strong>Téléphone :</strong> {phone}
            </Text>
          </Section>

          <Hr style={hr} />

          <Section style={section}>
            <Heading as="h2" style={h2}>
              Description du besoin
            </Heading>
            <Text style={messageStyle}>{message}</Text>
          </Section>

          <Hr style={hr} />

          <Text style={footer}>Demande reçue le {formattedDate}</Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "40px 20px",
  marginBottom: "64px",
  borderRadius: "8px",
};

const h1 = {
  color: "#262543",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0 0 20px",
  padding: "0",
};

const h2 = {
  color: "#333",
  fontSize: "18px",
  fontWeight: "600",
  margin: "0 0 16px",
  padding: "0",
};

const text = {
  color: "#555",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0 0 20px",
};

const section = {
  margin: "24px 0",
};

const field = {
  color: "#333",
  fontSize: "14px",
  lineHeight: "22px",
  margin: "0 0 8px",
};

const messageStyle = {
  color: "#333",
  fontSize: "14px",
  lineHeight: "22px",
  margin: "0",
  padding: "12px",
  backgroundColor: "#f9fafb",
  borderRadius: "6px",
  whiteSpace: "pre-wrap" as const,
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
  margin: "0",
};
