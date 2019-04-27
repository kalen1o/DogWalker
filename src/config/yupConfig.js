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
	email: Yup.string()
		.email("Please specify a valid email.")
		.required("Required"),
	password: Yup.string()
		.min(8, "Must be longer than 8 characters")
		.required("Required")
});

export const CreatePetSchema = Yup.object().shape({
	breed: Yup.string()
		.required("Required")
		.matches(/^[a-zA-Z]+$/, {
			message: 'Please specify a valid first name.'
		}),
	petname: Yup.string()
		.required("Required")
		.matches(/^[a-zA-Z]+$/, {
			message: 'Please specify a valid pet name.'
		}),
	petage: Yup.number()
		.required("Required")
		.positive("Pet's age must be positive.")
		.integer("Pet's age must be integer.")
		.max(30, "Pet can't be elder than 30 years old."),
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