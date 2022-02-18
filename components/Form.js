import FormContainer from "../containers/FormContainer";
import StyledInput from "./styled/StyledInput";
import StyledTextArea from "./styled/StyledTextArea";

const Form = ({ onSubmit, inputs }) => {
  return (
    <form onSubmit={onSubmit}>
      <FormContainer>
        {inputs.map((input, index) => {
          if (input.type != "textarea") {
            return <StyledInput key={index} {...input} />;
          }
          return (
            <StyledTextArea key={index} {...input}/>
          )
        })}
      </FormContainer>
    </form>
  );
};

export default Form;
