import React, { useState } from 'react';
// Placeholder LiquidMetal component - replace with your actual component
import { LiquidMetal as LiquidMetal1 } from "@paper-design/shaders-react";
import { Circle } from 'lucide-react';
const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        if (!formData.email || !formData.subject || !formData.message) {
            alert('Please fill in all fields');
            return;
        }
        console.log('Form submitted:', formData);
        alert('Message sent! (This is a demo)');
        setFormData({ email: '', subject: '', message: '' });
    };

    return (
        <section
            className="min-h-screen flex items-center justify-center px-4 py-12"
            style={{
                color: 'var(--color-text)'
            }}
        >
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="flex justify-center items-center px-2 overflow-hidden">
                    {/* Circle acts as the background frame */}
                    <div className="relative w-[120px] h-[120px] rounded-full border-4 border-[var(--color-primary)] flex items-center justify-center bg-[var(--color-surface)] shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_var(--color-primary-light)]">
                        {/* Liquid Metal logo inside the circle */}
                        <LiquidMetal1
                            image="https://workers.paper.design/file-assets/01K91Q1VENN7B714TBXKHJM7WZ/01K91QDAQ15YFXWVN2Z46A9ZVR.svg"
                            speed={1.2}
                            colorBack="#00000000"
                            colorTint="#ffffff"
                            softness={0.25}
                            repetition={2.96}
                            shiftRed={0.3}
                            shiftBlue={0}
                            distortion={0.21}
                            contour={0.25}
                            scale={0.67}
                            rotation={0}
                            shape="diamond"
                            angle={70}
                            style={{
                                backgroundColor: "transparent",
                                height: "100px", // slightly smaller than circle
                                width: "100px",
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)", // centers perfectly
                            }}
                        />
                    </div>
                </div>


                {/* Name */}
                <h1 className="text-3xl font-bold text-center mb-3">
                    Akash Gupta
                </h1>

                {/* Tagline */}
                <p className="text-center mb-8 opacity-90">
                    I'd love to hear from you! Let's connect.
                </p>

                {/* Contact Form */}
                <div className="space-y-5">
                    {/* Email Input */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg transition-all duration-300 ease-in-out focus:outline-none"
                            style={{
                                backgroundColor: 'var(--color-surface)',
                                border: '2px solid var(--color-primary-dark)',
                                color: 'var(--color-text)'
                            }}
                            onFocus={(e) => e.target.style.borderColor = 'var(--color-primary-light)'}
                            onBlur={(e) => e.target.style.borderColor = 'var(--color-primary-dark)'}
                            placeholder="your.email@example.com"
                        />
                    </div>

                    {/* Subject Input */}
                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg transition-all duration-300 ease-in-out focus:outline-none"
                            style={{
                                backgroundColor: 'var(--color-surface)',
                                border: '2px solid var(--color-primary-dark)',
                                color: 'var(--color-text)'
                            }}
                            onFocus={(e) => e.target.style.borderColor = 'var(--color-primary-light)'}
                            onBlur={(e) => e.target.style.borderColor = 'var(--color-primary-dark)'}
                            placeholder="What's this about?"
                        />
                    </div>

                    {/* Message Textarea */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            className="w-full px-4 py-3 rounded-lg transition-all duration-300 ease-in-out focus:outline-none resize-none"
                            style={{
                                backgroundColor: 'var(--color-surface)',
                                border: '2px solid var(--color-primary-dark)',
                                color: 'var(--color-text)'
                            }}
                            onFocus={(e) => e.target.style.borderColor = 'var(--color-primary-light)'}
                            onBlur={(e) => e.target.style.borderColor = 'var(--color-primary-dark)'}
                            placeholder="Your message here..."
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        onClick={handleSubmit}
                        className="btn-primary w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out"
                        style={{
                            backgroundColor: 'var(--color-primary)',
                            color: 'var(--color-text)'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary-dark)'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary)'}
                    >
                        Send Message
                    </button>
                </div>

                {/* Return to Homepage Link */}
                <div className="text-center mt-8">
                    <a
                        href="#hero"
                        className="inline-block transition-all duration-300 ease-in-out"
                        style={{ color: 'var(--color-accent)' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-light)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
                    >
                        ← Return to Homepage
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;