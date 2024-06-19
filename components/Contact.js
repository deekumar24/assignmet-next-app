"use client";
import React from 'react'
import styles from './Contact.module.css'
import { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState(null);
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Reset status and errors
        setStatus(null);
        setErrors({});
        setIsLoading(true); // Set loading to true when submission starts

        // Form validation
        const newErrors = {};
        if (name.length === 0) {
            newErrors.name = 'Name is required.';
        } else if (name.length > 120) {
            newErrors.name = 'Name cannot exceed 120 characters.';
        }

        if (email.length === 0) {
            newErrors.email = 'Email is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = 'Email is not valid.';
        } else if (email.length > 120) {
            newErrors.email = 'Email cannot exceed 120 characters.';
        }

        if (message.length === 0) {
            newErrors.message = 'Message is required.';
        } else if (message.length > 1200) {
            newErrors.message = 'Message cannot exceed 1200 characters.';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setIsLoading(false); // Set loading to false if there are validation errors
            return;
        }

        // Send the data to the WordPress API endpoint
        try {
            const response = await fetch('/api/contact-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            const result = await response.json();

            if (response.ok) {
                setStatus('Form submitted successfully.');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                setStatus(`Error: ${result.message}`);
            }
        } catch (error) {
            setStatus('Error: An unexpected error occurred.');
        }
        setIsLoading(false); // Set loading to false when submission is complete
    };
  return (
    <section className={styles.contact}>
          <div className={styles['contact-form']}>
            <p className="text-white text-sm">Any questions?</p>
            <h5 className="text-white">Let's talk today!</h5>
            <form  className="mt-20" onSubmit={handleSubmit}>
                <div className={styles['form-control']}>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                    />
                    {errors.name && <p style={{ color: 'red' }} className="text-sm">{errors.name}</p>}
                </div>

                <div className={styles['form-control']}>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                    {errors.email && <p style={{ color: 'red' }} className="text-sm">{errors.email}</p>}
                </div>

                <div className={styles['form-control']}>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows="5"
                        placeholder="Message"
                    />
                    {errors.message && <p style={{color: 'red'}} className="text-sm">{errors.message}</p>}
                </div>

                  <button type="submit" disabled={isLoading}>
                      {isLoading ? 'Submitting...' : 'Submit'}
                  </button>

                <p className="text-white text-sm mt-20" style={{height: '72px'}}>{status && status}</p>
            </form>
        </div>
    </section>
  )
}

export default Contact