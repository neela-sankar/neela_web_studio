'use client'

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react"
import { useForm } from '@formspree/react';

const Form = () => {
  const [state, handleSubmit] = useForm("xoqglkwy");
  if (state.succeeded) {
    return <p>Your message has been received. Thanks for contacting us!</p>;
}
  return (
    <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
        {/* input */}
        <div className="relative flex items-center">
            <Input type='name' id='name' name="name" placeholder='Name' />
            <User className="absolute right-6" size={20}/>
        </div>
        {/* input */}
        <div className="relative flex items-center">
            <Input type='email' id='email' name="email" placeholder='Email' />
            <MailIcon className="absolute right-6" size={20}/>
        </div>
        {/* textarea */}
        <div className="relative flex items-center">
            <Textarea id="message" name="message" placeholder='Type your message here.' />
            <MessageSquare className="absolute top-4 right-6" size={20}/>
        </div>
        <Button>
        <button className='flex items-center gap-x-1 max-w-[166px]' type="submit" disabled={state.submitting}>
          Let's Talk
          <ArrowRightIcon size={20} />
          </button>
        </Button>
    </form>
  )
}

export default Form