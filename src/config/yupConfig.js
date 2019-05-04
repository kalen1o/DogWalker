import * as Yup from 'yup';

export const RegistrationSchema = Yup.object().shape({
	firstname: Yup.string()
		.required("Required")
		.matches(/^[a-zA-Z]+$/, {
			message: 'Please specify a valid first name.'
		}),
	lastname:  Yup.string()
		.required("Required")
		.matches(/^[a-zA-Z]+$/, {
			message: 'Please specify a valid last name.'
		}),
	city: Yup.string()
		.required("Required"),
	email: Yup.string()
		.email("Please specify a valid email.")
		.required("Required"),
	password: Yup.string()
		.min(8, "Must be longer than 8 characters")
		.required("Required")
});

export const CreatePetSchema = Yup.object().shape({
	petname: Yup.string()
		.required("Required")
		.matches(/^[a-zA-Z]+$/, {
			message: 'Please specify a valid pet name.'
		}),
	email: Yup.string()
		.email("Please specify a valid email.")
		.required("Required"),
	password: Yup.string()
		.min(8, "Must be longer than 8 characters")
		.required("Required")
})

export const SignInSchema = Yup.object().shape({
	email: Yup.string()
		.email("Please specify a valid email.")
		.required("Required")
})

export const ForgetSchema = Yup.object().shape({
	email: Yup.string()
		.email("Please specify a valid email.")
		.required("Required")
})

export const ChangeSchema = Yup.object().shape({
	passwordOne: Yup.string()
		.required("Required"),
	passwordTwo: Yup.string()
		.required("Required"),
	newPassword: Yup.string()
		.min(8, "Must be longer than 8 characters")
		.required("Required")
})