import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Link,
  Hr,
} from "@react-email/components";

interface ContactEmailProps {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
  date: string;
}

export default function ContactEmail({
  name,
  email,
  phone,
  company,
  message,
  date,
}: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Text style={logo}>
              IPRO<span style={logoAccent}>JEX</span>
            </Text>
            <Text style={tagline}>Expert en flocage coupe-feu</Text>
          </Section>

          {/* Content */}
          <Section style={content}>
            <Text style={title}>Nouvelle demande de devis</Text>

            <Section style={card}>
              <Text style={sectionTitle}>Coordonnées du prospect</Text>

              <table style={table}>
                <tbody>
                  <tr>
                    <td style={labelCell}>Nom :</td>
                    <td style={valueCell}>{name}</td>
                  </tr>
                  <tr>
                    <td style={labelCell}>Société :</td>
                    <td style={valueCell}>{company || "Particulier"}</td>
                  </tr>
                  <tr>
                    <td style={labelCell}>Email :</td>
                    <td style={valueCell}>
                      <Link href={`mailto:${email}`} style={link}>
                        {email}
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td style={labelCell}>Téléphone :</td>
                    <td style={valueCell}>
                      <Link href={`tel:${phone}`} style={linkBold}>
                        {phone}
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>

              <Hr style={divider} />

              <Text style={sectionTitle}>Description du besoin</Text>
              <Text style={messageBox}>{message}</Text>
            </Section>

            <Section style={ctaContainer}>
              <Link href={`tel:${phone}`} style={ctaButton}>
                Appeler le prospect
              </Link>
            </Section>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerDate}>Demande reçue le {date}</Text>
            <Text style={footerAddress}>
              IPROJEX - 82, rue Maurice Berteaux, 95360 Montmagny
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: "#f8f9fa",
  fontFamily: "Arial, sans-serif",
};

const container = {
  maxWidth: "600px",
  margin: "0 auto",
};

const header = {
  background: "linear-gradient(135deg, #262543 0%, #3a3960 100%)",
  padding: "30px",
  textAlign: "center" as const,
};

const logo = {
  color: "#ffffff",
  margin: "0",
  fontSize: "24px",
  fontWeight: "bold" as const,
};

const logoAccent = {
  color: "#F6951E",
};

const tagline = {
  color: "#ffffff",
  margin: "10px 0 0",
  opacity: "0.9",
  fontSize: "14px",
};

const content = {
  backgroundColor: "#f8f9fa",
  padding: "30px",
};

const title = {
  color: "#262543",
  margin: "0 0 20px",
  fontSize: "20px",
  fontWeight: "bold" as const,
};

const card = {
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  padding: "25px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
};

const sectionTitle = {
  color: "#F6951E",
  margin: "0 0 15px",
  fontSize: "16px",
  fontWeight: "bold" as const,
  borderBottom: "2px solid #F6951E",
  paddingBottom: "10px",
};

const table = {
  width: "100%",
  borderCollapse: "collapse" as const,
};

const labelCell = {
  padding: "8px 0",
  color: "#666",
  width: "140px",
};

const valueCell = {
  padding: "8px 0",
  color: "#262543",
  fontWeight: "bold" as const,
};

const link = {
  color: "#F6951E",
  textDecoration: "none",
};

const linkBold = {
  color: "#F6951E",
  textDecoration: "none",
  fontWeight: "bold" as const,
};

const divider = {
  borderColor: "#eee",
  margin: "20px 0",
};

const messageBox = {
  color: "#262543",
  lineHeight: "1.6",
  margin: "0",
  backgroundColor: "#f8f9fa",
  padding: "15px",
  borderRadius: "6px",
};

const ctaContainer = {
  textAlign: "center" as const,
  marginTop: "25px",
};

const ctaButton = {
  display: "inline-block",
  backgroundColor: "#F6951E",
  color: "#ffffff",
  padding: "12px 30px",
  textDecoration: "none",
  borderRadius: "6px",
  fontWeight: "bold" as const,
};

const footer = {
  backgroundColor: "#262543",
  padding: "20px",
  textAlign: "center" as const,
};

const footerDate = {
  color: "#ffffff",
  margin: "0",
  fontSize: "12px",
  opacity: "0.8",
};

const footerAddress = {
  color: "#ffffff",
  margin: "10px 0 0",
  fontSize: "12px",
  opacity: "0.6",
};
