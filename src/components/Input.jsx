import { useEffect, useReducer } from "react";
import { validate } from "../util/validator";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH": {
      return {
        ...state,
        isTouched: true,
      };
    }
    case "RESET":
      return {
        value: "",
        isTouched: false,
        isValid: false,
      };
    default:
      return state;
  }
};

function Input({
  id,
  onInput,
  element,
  type,
  validators,
  placeholder,
  errorText,
  resetTrigger,
}) {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isTouched: false,
    isValid: false,
  });

  const { value, isValid, isTouched } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  function changeHandler(e) {
    dispatch({
      type: "CHANGE",
      val: e.target.value,
      validators: validators,
    });
  }

  function touchHandler() {
    dispatch({
      type: "TOUCH",
    });
  }

  useEffect(() => {
    dispatch({ type: "RESET" });
  }, [resetTrigger]);

  const elementOutput =
    element === "input" ? (
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={changeHandler}
        onBlur={touchHandler}
        placeholder={placeholder}
        className="w-full px-4 py-2 bg-[#1e293b] border border-cyan-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />
    ) : (
      <textarea
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={changeHandler}
        onBlur={touchHandler}
        placeholder={placeholder}
        className="w-full px-4 py-2 bg-[#1e293b] border border-cyan-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
      />
    );

  return (
    <div>
      <label
        htmlFor={id}
        className="font-[Audiowide] block text-sm mb-1"
      ></label>
      {elementOutput}
      {!isValid && isTouched && (
        <p className="text-[12px] text-red-500">{errorText}</p>
      )}
    </div>
  );
}

export default Input;
