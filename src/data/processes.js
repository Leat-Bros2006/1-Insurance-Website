import proces1 from '../assets/process1.jpg'
import proces2 from '../assets/process2.jpg'
import proces3 from '../assets/process3.jpg'

export const processes = [
    {
        id: 1,
        title: "Choose the Right Insurance Plan",
        image: proces1,
        reverse: false,
        features: [
            {
                title: "Compare Plans",
                description: "Choose the insurance plan that best fits your needs."
            },
            {
                title: "Affordable Pricing",
                description: "Get the best protection at a reasonable price."
            },
        ]
    },
    {
        id: 2,
        title: "Submit Your Information",
        image: proces2,
        reverse: true,
        features: [
            {
                title: "Quick Registration",
                description: "Fill out your personal information in a few minutes."
            },
            {
                title: "Secure Process",
                description: "Your personal data is protected and encrypted."
            }
        ]
    },
    {
        id: 3,
        title: "Get Protected",
        image: proces3,
        reverse: false,
        features: [
            {
                title: "Instant Approval",
                description: "Receive your policy confirmation quickly."
            },
            {
                title: "24/7 Support",
                description: "Our team is ready to help anytime."
            }
        ]
    }
]