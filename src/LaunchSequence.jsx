import "@fontsource/orbitron/700.css";
import "@fontsource/rajdhani/500.css";
import "@fontsource/audiowide";
import Input from "./components/Input";
import { useCallback, useReducer, useState } from "react";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "./util/validator";
import emailjs from "@emailjs/browser";
import SuccessModal from "./components/SuccessModal";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE": {
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: {
            value: action.value,
            isValid: action.isValid,
          },
        },
        isValid: formIsValid,
      };
    }
    case "RESET_FORM": {
      return {
        inputs: {
          name: { value: "", isValid: false },
          email: { value: "", isValid: false },
          message: { value: "", isValid: false },
        },
        isValid: false,
        resetCounter: (state.resetCounter || 0) + 1,
      };
    }

    default:
      return state;
  }
};

const LaunchSequence = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      name: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      message: {
        value: "",
        isValid: false,
      },
    },
    isValid: false,
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n4orona",
        "template_qsgw97h",
        e.target,
        "KQk17CbURwclX4vd7"
      )
      .then(
        (result) => {
          console.log("Message sent successfully!", result.text);

          dispatch({ type: "RESET_FORM" });
          setShowSuccessModal(true);
          setTimeout(() => setShowSuccessModal(false), 4000);
        },
        (error) => {
          console.error("Error sending message:", error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-[#0f172a] text-white relative">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h2 className="font-[Orbitron] text-3xl font-orbitron text-cyan-400 mb-4">
          Launch Sequence
        </h2>
        <p className="font-[rajdhani] text-white/70 mb-8">
          Initiate contact. Transmit your message below, and I’ll respond from
          orbit 🌌.
        </p>

        <form onSubmit={sendEmail} className="space-y-6 text-left">
          <label className="font-[Audiowide] block text-sm mb-1">Name</label>
          <Input
            id="name"
            element="input"
            label="Your Name"
            placeholder="Your Name *"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter your name"
            onInput={inputHandler}
            resetTrigger={formState.resetCounter}
          />
          <label className="font-[Audiowide] block text-sm mb-1">Email</label>
          <Input
            id="email"
            element="input"
            label="Your Email Address"
            placeholder="Your Email Address *"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please Enter A Valid Email Address"
            onInput={inputHandler}
            resetTrigger={formState.resetCounter}
          />

          <label className="font-[Audiowide] block text-sm mb-1">Message</label>
          <Input
            id="message"
            element="textarea"
            label="Your Email Address"
            placeholder="Your Message Here *"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please Enter Your Message"
            onInput={inputHandler}
            resetTrigger={formState.resetCounter}
          />

          <button
            type="submit"
            disabled={!formState.isValid}
            className="font-[rajdhani] w-full py-3 bg-cyan-400 text-[#0f172a] font-semibold rounded-md hover:bg-cyan-300 transition active:scale-95"
          >
            Initiate Launch
          </button>
        </form>
      </div>
      <SuccessModal
        showSuccessModal={showSuccessModal}
        setShowSuccessModal={setShowSuccessModal}
      />
      ;
    </section>
  );
};

export default LaunchSequence;
