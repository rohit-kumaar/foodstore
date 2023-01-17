import Checkbox from "./Checkbox";
import DatePicker from "./DatePicker";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import RadioButton from "./RadioButton";
import Textarea from "./Textarea";

function FormikControl(props) {
  const { control, ...rest } = props;

  switch (control) {
    case "input":
      return <FormInput {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <FormSelect {...rest} />;
    case "radio":
      return <RadioButton {...rest} />;
    case "checkbox":
      return <Checkbox {...rest} />;
    case "date":
      return <DatePicker {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
