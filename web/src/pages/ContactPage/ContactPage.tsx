import { Link, routes } from '@redwoodjs/router'
import { Metadata, useMutation } from '@redwoodjs/web'
import {Form, TextField, TextAreaField, Submit, FieldError, Label, useForm} from '@redwoodjs/forms'
import {Toaster, toast} from "@redwoodjs/web/toast"

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {

  const formMethods = useForm()
  const[create, {loading, error}]= useMutation (CREATE_CONTACT, {onCompleted: ()=>{
    toast.success('Thank you for your message')
    formMethods.reset()
  }})

  const onSubmit = (data:object) => {
    console.log(data)
  create({ variables: { input: data } }) .catch((err) => {
    console.error('Error during mutation:', err.message);
  });
  }

  return (
    <>
      <Metadata title="Contact" description="Contact page" />
      <Toaster/>
      <Form onSubmit={onSubmit} formMethods={formMethods} error={error}>
        <Label name="name" errorClassName='error'> Name</Label>
        <TextField name ="name" errorClassName="error" validation={{required:true}}/>
        <FieldError name="name" className='error'/>
        <Label name="email" errorClassName='error'> Email</Label>
        <TextField name="email" errorClassName="error" validation={{required:true, }}/>
        <FieldError name="email" className='error'/>
        <Label name="message" errorClassName='error'> Message</Label>
        <TextAreaField name="message" errorClassName="error" validation={{required:true}} />
        <FieldError name="message" className='error'/>
        <Submit disabled={loading}> Send message</Submit>
      </Form>

    </>
  )
}

export default ContactPage
