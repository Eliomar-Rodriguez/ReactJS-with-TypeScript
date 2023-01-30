import useNewSubForm from "../hooks/useNewSubForm";
import { Sub } from "../types";

interface FormProps {
    onNewSub: (newSub: Sub) => void
}


const Form = ({ onNewSub }: FormProps) => {
    //const [inputValues, setInputValues] = useState<FormState["inputValues"]>(INITIAL_STATE)

    const [inputValues, dispatch] = useNewSubForm()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onNewSub(inputValues)
        dispatch({ type: "clear" })
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        dispatch({
            type: "change_value", payload: {
                inputName: name,
                inputValue: value
            }
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={inputValues.subMonths} type='text' name='subMonths' placeholder='subMonths' />
                <input onChange={handleChange} value={inputValues.nick} type='text' name='nick' placeholder='nick' />
                <input onChange={handleChange} value={inputValues.avatar} type='text' name='avatar' placeholder='avatar' />
                <input onChange={handleChange} value={inputValues.description} type='text' name='description' placeholder='description' />
                <button type="button">Clear the form</button>
                <button type="submit">Save new sub!</button>
            </form>
        </div>
    )
}

export default Form;