import { FormEvent, useRef, useState, useEffect } from "react";
import ContentContainer from "../components/ContentContainer";
import { useNavigate } from "react-router-dom";
import ContentHeader from "../components/ContentHeader";
import styled from "styled-components";
import emailjs from "emailjs-com";
import DefaultButton from "../components/DefaultButton";

const Form = styled.form`
  display: flex;
  padding: 20px;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input<{ isValid: boolean }>`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${({ theme, isValid }) => (isValid ? theme.colors.text : "red")};
`;

const Textarea = styled.textarea<{ isValid: boolean }>`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${({ theme, isValid }) => (isValid ? theme.colors.text : "red")};
`;

const WarningMessage = styled.span`
  padding: 10px;
  background-color: red;
  color: white;
  font-size: 0.9em;
  margin-top: 5px;
`;

const SubmitButton = styled(DefaultButton)<{ disabled: boolean }>`
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
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
  const [isFormValid, setIsFormValid] = useState(false);

  const [nameBlurred, setNameBlurred] = useState(false);
  const [emailBlurred, setEmailBlurred] = useState(false);
  const [messageBlurred, setMessageBlurred] = useState(false);

  useEffect(() => {
    setIsFlipping(true);
    setTimeout(() => {
      setIsFlipping(false);
      setIsReturning(true);
    }, 400);
  }, []);

  useEffect(() => {
    validateForm();
  }, [name, email, message]);

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

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validateForm = () => {
    if (name && email && message && validateEmail(email)) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <ContentContainer isFlipping={isFlipping} isReturning={isReturning}>
      <ContentHeader onReturnButtonClick={handleReturnButtonClicked} title="Email Me" />
      <Form ref={form} onSubmit={sendEmail}>
        <InputContainer>
          <Input
            type="text"
            name="user_name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setNameBlurred(true)}
            required
            isValid={name.length > 0 || !nameBlurred}
          />
          {name.length === 0 && nameBlurred && <WarningMessage>Name is required</WarningMessage>}
        </InputContainer>
        <InputContainer>
          <Input
            type="email"
            name="user_email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setEmailBlurred(true)}
            required
            isValid={validateEmail(email) || !emailBlurred}
          />
          {!validateEmail(email) && emailBlurred && <WarningMessage>Invalid email address</WarningMessage>}
        </InputContainer>
        <InputContainer>
          <Textarea
            name="message"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onBlur={() => setMessageBlurred(true)}
            required
            isValid={message.length > 0 || !messageBlurred}
          />
          {message.length === 0 && messageBlurred && <WarningMessage>Message is required</WarningMessage>}
        </InputContainer>
        <SubmitButton type="submit" disabled={loading || !isFormValid} text={loading ? "Sending..." : "Send Email"} />

        {error && <p style={{ color: "white", background: "red", padding: "20px" }}>{error}</p>}
        {success && <p style={{ color: "white", background: "green", padding: "20px" }}>{success}</p>}
      </Form>
    </ContentContainer>
  );
}
