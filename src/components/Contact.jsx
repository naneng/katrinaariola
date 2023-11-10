import  { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from "@emailjs/browser";
// import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';



const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);


  const handleChange = (e) => { 
    const { name, value } = e.target;
    setForm({...form, [name]: value})
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string().required('Message is required')
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    validationSchema
      .validate(form)
      .then(() => {
        emailjs
          .send(
            'service_lp4pfm5',
            'template_84txx99',
            {
              from_name: form.name,
              to_name: 'Katrina',
              from_email: form.email,
              to_email: 'kat3ariola@gmail.com',
              message: form.message,
            },
            'HH5EwaZnD7e2OKCbF'
          )
          .then(() => {
            setLoading(false);
            setEmailSent(true);
            setEmailError(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          })
          .catch((error) => {
            setLoading(false);
            setEmailSent(false);
            setEmailError(true);
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

      

    // emailjs.send(
    //   'service_lp4pfm5',
    //   'template_84txx99',
    //   // process.env.EMAILJS_SERVICE_ID,
    //   // process.env.EMAILJS_TEMPLATE_ID,
    //   {
    //     from_name: form.name,
    //     to_name: 'Katrina',
    //     from_email: form.email,
    //     to_email: 'kat3ariola@gmail.com',
    //     message: form.message,
    //   },
    //   'HH5EwaZnD7e2OKCbF'
    //   // process.env.EMAILJS_PUBLIC_KEY
    // )
    //   .then(() => {
    //     setLoading(false);
    //     setEmailSent(true);
    //     setEmailError(false);
        

    //     setForm({
    //       name: '',
    //       email: '',
    //       message: '',          
    //     })

    //   }, (error) => {
    //     setLoading(false)
    //     setEmailSent(false);
    //     setEmailError(true);
    //     console.log(error);
       
    // })
   
  

  return (
    <div className="xl:mt-12 xl:flex-row flex flex-col-reverse overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-tertiary p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>
          Get in touch
        </p>
        <h3 className={styles.sectionHeadText}>
          Contact.
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            >
            </input>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            >
            </input>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className='bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium resize-none hover:resize-y'
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary active:bg-primary hover:shadow-white rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>

          {emailSent && (
            <div className="alert success text-primary bg-[#444ae5] m-6 p-3 rounded-lg shadow-md">Thank you. I will get back to you as soon as possible.</div>
          )}

          {emailError && (
            <div className="alert error text-white bg-[#bf61ff] m-6 p-3 rounded-lg shadow-md">Something went wrong. Please try again.</div>
          )}
      

      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact, "contact");