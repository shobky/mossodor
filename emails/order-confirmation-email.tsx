import { IOrder } from "@/lib/types";
import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.BASE_URL ? `${process.env.BASE_URL}` : "";

export const OrderConfirmationEmail = ({ order }: { order: any }) => (
  <Html>
    <Head />
    <Preview>Get your order summary, estimated delivery date and more</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={message}>
          <Img
            src={`https://firebasestorage.googleapis.com/v0/b/shoppex-xappee.appspot.com/o/icon-fill.png?alt=media`}
            width="40"
            height="50"
            alt="Mossodor"
            style={{ margin: "auto" }}
          />
          <Heading style={global.heading}>It&apos;s On Its Way.</Heading>
          <Text style={global.text}>
            You order&apos;s is on its way. Tracking information will be available
            soon.
          </Text>
          <Text style={{ ...global.text, marginTop: 24 }}>
            Your payment for {order.total} was successful. For payment details,
            please visit your{" "}
            <Link href={`${baseUrl}/account/orders/${order._id}`}>Orders</Link>{" "}
            page on mossodor.com.
          </Text>
        </Section>
        <Hr style={global.hr} />
        <Section style={global.defaultPadding}>
          <Text style={adressTitle}>Shipping to: {order.buyerName}</Text>
          <Text style={{ ...global.text, fontSize: 14 }}>
            {order.address.line1}, {order.address.line2}, {order.address.city},{" "}
            {order.address.state}, {order.address.postal_code},{" "}
            {order.address.country}
          </Text>
        </Section>
        <Hr style={global.hr} />
        <Section
          style={{ ...paddingX, paddingTop: "30px", paddingBottom: "30px" }}
        >
          {order.items.map((item: any, index: number) => (
            <Row key={item._id + index}>
              <Column>
                <Img
                  src={item.thumpnail}
                  alt={item.name}
                  style={{ float: "left" }}
                  width="150px"
                />
              </Column>
              <Column style={{ verticalAlign: "top", paddingLeft: "12px" }}>
                <Text style={{ ...paragraph, fontWeight: "500" }}>
                  {item.name}
                </Text>
                <Text style={global.paragraphWithBold}>£{item.price}</Text>
              </Column>
            </Row>
          ))}
        </Section>
        <Hr style={global.hr} />
        <Section style={global.defaultPadding}>
          <Row style={{ display: "inline-flex", marginBottom: 40 }}>
            <Column style={{ width: "170px" }}>
              <Text style={global.paragraphWithBold}>Order Number</Text>
              <Text style={track.number}>{order._id}</Text>
            </Column>
            <Column>
              <Text style={global.paragraphWithBold}>Order Date</Text>
              <Text style={track.number}>
                {new Date(order.purchaseDate).toLocaleDateString()}
              </Text>
            </Column>
          </Row>
          <Row>
            <Column align="center">
              <Link
                href={`${baseUrl}/account/orders/${order._id}`}
                style={global.button}
              >
                Order Status
              </Link>
            </Column>
          </Row>
        </Section>
        <Hr style={global.hr} />
        <Section style={menu.container}>
          <Row>
            <Text style={menu.title}>Get Help</Text>
          </Row>
          <Row style={menu.content}>
            <Column style={{ width: "33%" }} colSpan={1}>
              <Link href="/" style={menu.text}>
                Shipping Status
              </Link>
            </Column>
            <Column style={{ width: "33%" }} colSpan={1}>
              <Link href="/" style={menu.text}>
                Shipping & Delivery
              </Link>
            </Column>
            <Column style={{ width: "33%" }} colSpan={1}>
              <Link href="/" style={menu.text}>
                Returns & Exchanges
              </Link>
            </Column>
          </Row>
          <Row style={{ ...menu.content, paddingTop: "0" }}>
            <Column style={{ width: "33%" }} colSpan={1}>
              <Link href="/" style={menu.text}>
                How to Return
              </Link>
            </Column>
            <Column style={{ width: "66%" }} colSpan={2}>
              <Link href="/" style={menu.text}>
                Contact Options
              </Link>
            </Column>
          </Row>
          <Hr style={global.hr} />
          <Row style={menu.tel}>
            <Column>
              <Row>
                <Column>
                  <Text style={{ ...menu.text, marginBottom: "0" }}>
                    1-800-806-6453
                  </Text>
                </Column>
              </Row>
            </Column>
            <Column>
              <Text
                style={{
                  ...menu.text,
                  marginBottom: "0",
                }}
              >
                4 am - 11 pm PT
              </Text>
            </Column>
          </Row>
        </Section>
        <Hr style={{ ...global.hr, marginTop: "12px" }} />
        <Section style={paddingY}>
          <Row style={footer.policy}>
            <Column>
              <Text style={footer.text}>Web Version</Text>
            </Column>
            <Column>
              <Text style={footer.text}>Privacy Policy</Text>
            </Column>
          </Row>
          <Row>
            <Text style={{ ...footer.text, paddingTop: 30, paddingBottom: 30 }}>
              Please contact us if you have any questions. (If you reply to this
              email, we won&apos;t be able to see it.)
            </Text>
          </Row>
          <Row>
            <Text style={footer.text}>
              © 2024 mossodor, Inc. All Rights Reserved.
            </Text>
          </Row>
          <Row>
            <Text style={footer.text}>
              Mossodor, INC. 31-53 Hunders Rd, Birmingham B19 1DP, United
              Kingdom.
            </Text>
          </Row>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default OrderConfirmationEmail;

const paddingX = {
  paddingLeft: "30px",
  paddingRight: "30px",
};

const paddingY = {
  paddingTop: "22px",
  paddingBottom: "22px",
};

const paragraph = {
  margin: "0",
  lineHeight: "2",
};

const global = {
  paddingX,
  paddingY,
  defaultPadding: {
    ...paddingX,
    ...paddingY,
  },
  paragraphWithBold: { ...paragraph, fontWeight: "bold" },
  heading: {
    fontSize: "28px",
    lineHeight: "1.3",
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: "-1px",
  } as React.CSSProperties,
  text: {
    ...paragraph,
    color: "#747474",
    lineHeight: "1.3",
    fontWeight: "400",
  },
  button: {
    border: "1px solid #929292",
    fontSize: "16px",
    textDecoration: "none",
    padding: "10px 0px",
    width: "220px",
    display: "block",
    textAlign: "center",
    fontWeight: 500,
    color: "#000",
  } as React.CSSProperties,
  hr: {
    borderColor: "#E5E5E5",
    margin: "0",
  },
};

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "10px auto",
  width: "600px",
  maxWidth: "100%",
  border: "1px solid #E5E5E5",
};

const track = {
  container: {
    padding: "22px 30px",
    backgroundColor: "#F7F7F7",
  },
  number: {
    margin: "12px 0 0 0",
    fontWeight: 500,
    lineHeight: "1.4",
    color: "#6F6F6F",
  },
};

const message = {
  padding: "30px 74px",
  textAlign: "center",
} as React.CSSProperties;

const adressTitle = {
  ...paragraph,
  fontSize: "15px",
  fontWeight: "bold",
};

const recomendationsText = {
  margin: "0",
  fontSize: "15px",
  lineHeight: "1",
  paddingLeft: "10px",
  paddingRight: "10px",
};

const recomendations = {
  container: {
    padding: "20px 0",
  },
  product: {
    verticalAlign: "top",
    textAlign: "left" as const,
    paddingLeft: "2px",
    paddingRight: "2px",
  },
  title: { ...recomendationsText, paddingTop: "12px", fontWeight: "500" },
  text: {
    ...recomendationsText,
    paddingTop: "4px",
    color: "#747474",
  },
};

const menu = {
  container: {
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "20px",
    backgroundColor: "#F7F7F7",
  },
  content: {
    ...paddingY,
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  title: {
    paddingLeft: "20px",
    paddingRight: "20px",
    fontWeight: "bold",
  },
  text: {
    fontSize: "13.5px",
    marginTop: 0,
    fontWeight: 500,
    color: "#000",
  },
  tel: {
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "32px",
    paddingBottom: "22px",
  },
};

const categories = {
  container: {
    width: "370px",
    margin: "auto",
    paddingTop: "12px",
  },
  text: {
    fontWeight: "500",
    color: "#000",
  },
};

const footer = {
  policy: {
    width: "166px",
    margin: "auto",
  },
  text: {
    margin: "0",
    color: "#AFAFAF",
    fontSize: "13px",
    textAlign: "center",
  } as React.CSSProperties,
};
