import React, { useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const ContactForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            const subject = encodeURIComponent(`Hiring Inquiry from ${name} (${email})`);
            const body = encodeURIComponent(
                `Name: ${name}
Email: ${email}

Message:
${message}`
            );

            window.location.href = `mailto:cherltonmhangwana@gmail.com?subject=${subject}&body=${body}`;

            setLoading(false);
            setName("");
            setEmail("");
            setMessage("");
        }, 1500);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <input
                    type="text"
                    placeholder='Enter Your Name'
                    required
                    className='h-12 rounded-lg bg-lightBrown px-2'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder='Enter Your Email'
                    required
                    className='h-12 rounded-lg bg-lightBrown px-2'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <textarea
                    rows="9"
                    cols="50"
                    placeholder='Message'
                    required
                    className='rounded-lg bg-lightBrown p-2'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                {loading && (
                    <p className='text-cyan text-sm text-center animate-pulse'>
                        ✉️ Your email application will open shortly to send your message...
                    </p>
                )}

                <button
                    type='submit'
                    disabled={loading}
                    className='w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed'
                >
                    {loading ? (
                        <>
                            <AiOutlineLoading3Quarters className='animate-spin text-2xl' />
                            Opening...
                        </>
                    ) : (
                        'Send'
                    )}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
