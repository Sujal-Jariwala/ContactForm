import React, { useState } from 'react'
import Radio from '@mui/material/Radio'
import { green, grey, lightGreen } from '@mui/material/colors'
import { Checkbox } from '@mui/material'
import CheckIcon from '../assets/images/icon-success-check.svg'

function Form() {
    const [selectedOption, setSelectedOption] = useState('')
    const [firstName, setFisrtName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [check,setCheck] = useState('')
    const [successMessage, setSuccessMessage] = useState(false)
    const [firstNameError, setFirstNameError] = useState(false)
    const [lastNameError, setLastNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [messageError, setMessageError] = useState(false)
    const [queryError, setQueryError] = useState(false)
    const [checkError, setCheckError] = useState(false)
    const validEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    
    
    const handleSubmit = () => {
        let hasError = false;
        
        if (!firstName) {
            setFirstNameError(true);
            hasError = true;
            setSuccessMessage(false)
        } else {
            setFirstNameError(false);
        }
        
        if (!lastName) {
            setLastNameError(true);
            hasError = true;
            setSuccessMessage(false)
        } else {
            setLastNameError(false);
        }
        
        if (!email || !validEmail.test(email)) {
            setEmailError(true);
            hasError = true;
            setSuccessMessage(false)

        } else {
            setEmailError(false);
        }
        
        if (!selectedOption) {
            setQueryError(true);
            hasError = true;
            setSuccessMessage(false)

        } else {
            setQueryError(false);
        }
        
        if (!message) {
            setMessageError(true);
            hasError = true;
            setSuccessMessage(false)

        } else {
            setMessageError(false);
        }
        
        if (!check) {
            setCheckError(true);
            hasError = true;
            setSuccessMessage(false)

        } else {
            setCheckError(false);
        }
        
        if (!hasError) {
            // Form is valid, proceed with submission
            setSuccessMessage(true);
        }
    }
  return (
    <>
    <div className='flex items-center justify-center flex-col min-h-screen bg-[#DFF1E7]'>
        {successMessage&&(
            <>
            <div className=' flex flex-col bg-[#2B4246] px-6 py-5 rounded-lg '>
            <div className='flex '>
                <img src={CheckIcon} alt="" />
                <span className='ml-2 text-white font-karla'>Message Sent !</span>
            </div>
           <div className='flex flex-col mt-1.5'>
            <span className='text-[#87A3A6] font-karla'>Thanks for completing the form. We'll be in touch soon!</span>
           </div>
            
            </div>
            
            </>
        )}
        <div className='flex flex-col'>
            <div className='flex flex-col px-7 py-4 bg-white rounded-md'>
                <h1 className='font-karla font-bold text-[#2B4246] text-2xl'>Contact Us</h1>
                <div className='flex gap-x-4 mt-5'>
                    <div className='flex flex-col'>
                        <label htmlFor="firstname" className={`font-karla  ${firstNameError?'text-[#D73C3C]':'text-[#0C7D69]'}`}>First Name *</label>
                        <input 
                        type="text" 
                        className={`px-3 py-2 border-2 rounded-lg outline-none text-[#0C7D69] font-karla ${firstNameError?'border-[#D73C3C]':'hover:border-[#0C7D69] ease-in-out transition duration-200 '}`}
                        value={firstName}
                        id='firstname'
                        onChange={(e)=>setFisrtName(e.target.value)}
                        />
                        {firstNameError&&(
                            <>
                            <span className='text-[#D73C3C] text-sm font-karla'>This Field Is Required</span>
                            </>
                        )}
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="lastname" className={`font-karla  ${lastNameError?'text-[#D73C3C]':'text-[#0C7D69]'}`}>Last Name *</label>
                        <input 
                        type="text" 
                        className={`px-3 py-2 border-2 rounded-lg outline-none font-karla text-[#0C7D69] ${lastNameError?'border-[#D73C3C] ':'hover:border-[#0C7D69] ease-in-out transition duration-200'}`} id='lastname'
                        value={lastName}
                        onChange={(e)=>setLastName(e.target.value)}
                        />
                        {lastNameError&&(
                            <>
                            <span className='text-[#D73C3C] text-sm font-karla'>This Field Is Required</span>
                            </>
                        )}
                    </div>
                </div>
                <div className='flex flex-col mt-6'>
                    <label 
                    htmlFor="email" 
                    className={`font-karla text-[#0C7D69] ${emailError?'text-[#D73C3C]':''}`}>Email Address *</label>
                    <input 
                    type="email" 
                    className={`px-3 py-2 border-2 rounded-lg outline-none font-karla text-[#0C7D69] ${emailError?'border-[#D73C3C]':'hover:border-[#0C7D69] ease-in-out transition duration-200'}`} id='email'
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                    />
                    {emailError&&(
                        <>
                        <span className='text-[#D73C3C] text-sm font-karla'>Please Enter a Valid Email Address</span>
                        </>
                    )}
                </div>
                <span className={`mt-6 mb-3 font-karla text-[#0C7D69] ${queryError?'text-[#D73C3C]':''}`}>Query Type *</span>
                <div className='flex gap-x-3 w-full'>
                    <div className='flex flex-col flex-1'>
                        <div className={`px-1 rounded-lg border-2 outline-none w-full ${selectedOption==='enquiry1'?'bg-[#DFF1E7] border-[#0C7D69]':'bg-white border-gray-300'}`}>
                        <Radio
                            sx={{
                                color: grey[500], // Color when unchecked
                                '&.Mui-checked': {
                                color: '#0C7D69', // Color when checked
                                },
                                '& .MuiSvgIcon-root': {
                                width: 19, // Set custom width
                                height: 19, // Set custom height
                                },
                            }}
                            name='v'
                            value={selectedOption}
                            id='enquiry1'
                            onChange={()=>setSelectedOption('enquiry1')}
                            checked={selectedOption==='enquiry1'}
                            />
                        {/* <input type="radio" name="v" id="enquiry1" className='w-5 h-3'/> */}
                        <label htmlFor="enquiry1" className=' font-karla'>General Enquiry</label>
                        </div>
                    </div>
                    <div className='flex flex-col flex-1 '>
                        <div className={`px-1 rounded-lg border-2 outline-none w-full items-center ${selectedOption==='support'? 'bg-[#DFF1E7] border-[#0C7D69]': 'bg-white border-gray-300'}`}>
                        <Radio
                            sx={{
                                color: grey[500], // Color when unchecked
                                '&.Mui-checked': {
                                color:'#0C7D69', // Color when checked
                                },
                                '& .MuiSvgIcon-root': {
                                width: 19, // Set custom width
                                height: 19, // Set custom height
                                },
                            }}
                            name='v'
                            id='support'
                            value={selectedOption}
                            onChange={()=>setSelectedOption('support')}
                            checked={selectedOption==='support'}
                            />
                        {/* <input type="radio" name="v" id="support" className='w-5 h-3'/> */}
                        <label htmlFor="support" className=' font-karla'>Support Request</label>
                        </div>
                        
                    </div>
                </div>
                {queryError&&(
                            <>
                            <span className='text-[#D73C3C] font-karla text-sm'>Please Select a Query</span>
                            </>
                        )}
                <div className='flex flex-col mt-6'>
                    <label 
                    htmlFor="message" 
                    className={`font-karla text-[#0C7D69] ${messageError?'text-[#D73C3C]':''}`}>
                        Message *</label>
                    <textarea  
                    id="message" 
                    value={message}
                    onChange={(e)=>setMessage(e.target.value)}
                    className={`border-2 w-full min-h-20 outline-none px-3 py-2 font-karla resize-none rounded-lg  text-[#0C7D69] ${messageError?'border-[#D73C3C]':'hover:border-[#0C7D69] ease-in-out transition duration-200'}`}></textarea>
                    {messageError&&(
                        <>
                        <span className='font-karla text-sm text-[#D73C3C]'>This Field Is required</span>
                        </>
                    )}
                </div>
                <div className='flex flex-col flex-1 w-full mt-2 items-start'>
                    <div className='flex flex-1 w-full items-center'>  
                    <Checkbox
                    sx={{
                        '&.Mui-checked':{
                            color:'#0C7D69',
                        },
                        '& .MuiSvgIcon-root':{
                            width:19,
                            height:19,
                        },
                    }}
                    id='consent'
                    value={check}
                    onChange={()=>setCheck(!check)}
                    />
                    {/* <input type="checkbox" name="m" id="consent" className='mr-2 checked:bg-green-600 '/> */}
                    <label htmlFor="consent" className='text-[#0C7D69] font-karla'>I consent to being contacted by the Team *</label>
                    
                    </div>
                    {checkError&&(
                        <>
                        
                        <span className='text-[#D73C3C] text-sm font-karla ml-3'>To Submit this form, please consent to being contacted</span>
                        
                        
                        </>
                    )}
                </div>
                <div className='flex items-center mt-7'>
                    <button 
                    onClick={handleSubmit}
                    className='px-3 py-2 w-full bg-[#0C7D69] text-white rounded-md font-karla '>Submit</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Form