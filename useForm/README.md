# useForm

Ejemplo con TypeScript:

```
    import { useForm } from "../../hooks";

export const LoginScreen = ({ title }: any): JSX.Element => {
	    
    const [ formValues, handleInputChange ] = useForm({
        email: '',
        password: '',
    });

	const { email, password } = formValues;
    
	const handleLogin = (e: React.FormEvent ) => {
		e.preventDefault();
		console.log(formValues);
	}
	
	return (
		<div>
			<form onSubmit={ handleLogin }>
				<input 
					type="text" 
					placeholder="Email"
					name="email"
					autoComplete="off"
					value={ email }
					onChange={ handleInputChange }
				/>

				<input 
					type="password" 
					placeholder="Password"
					name="password"
					autoComplete="off"
					value={ password }
					onChange={ handleInputChange }
				/>

				<button type="submit">Login</button>

			</form>
		</div>
	)
};


```
