import React, { FormEvent, useRef, useState } from "react";
import ContentContainer from "../components/ContentContainer";
import { useNavigate } from "react-router-dom";
import ContentHeader from "../components/ContentHeader";
import styled from "styled-components";
import emailjs from "emailjs-com";
import DefaultButton from "../components/DefaultButton";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.text};
`;

const Textarea = styled.textarea`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.text};
`;

export default function EmailMeView() {
  const navigate = useNavigate();
  const [isFlipping, setIsFlipping] = useState(false);
  const [isReturning, setIsReturning] = useState<boolean>(false);
  const form = useRef<HTMLFormElement>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  React.useEffect(() => {
    setIsFlipping(true);
    setTimeout(() => {
      setIsFlipping(false);
      setIsReturning(true);
    }, 400);
  }, []);

  function handleReturnButtonClicked() {
    setIsReturning(true);
    setIsFlipping(true);
    setTimeout(() => {
      setIsFlipping(false);
      setIsReturning(false);
      navigate("/");
    }, 400);
  }

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current!, import.meta.env.VITE_USER_ID).then(
      () => {
        setLoading(false);
        setSuccess("Email sent successfully!");
      },
      () => {
        setLoading(false);
        setError("Failed to send email. Please try again.");
      }
    );
  };
  return (
    <ContentContainer isFlipping={isFlipping} isReturning={isReturning}>
      <ContentHeader onReturnButtonClick={handleReturnButtonClicked} title="Email Me" />
      <Form ref={form} onSubmit={sendEmail}>
        <Input type="text" name="user_name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
        <Input type="email" name="user_email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <Textarea name="message" placeholder="Your message" value={message} onChange={(e) => setMessage(e.target.value)} required />
        <DefaultButton type="submit" disabled={loading} text={loading ? "Sending..." : "Send Email"}/>

        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
      </Form>
    </ContentContainer>
  );
}
