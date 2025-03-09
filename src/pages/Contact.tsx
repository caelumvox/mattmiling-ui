import { useId } from "react";

export default function Contact() {
    const emailId = useId();
    const messageId = useId();

    return (
        <>
            <div className="flex justify-center h-screen bg-black">
                <div className="max-w-[500px] w-full p-4 rounded shadow">
                    <h1 className="text-white text-lg font-bold pt-10">Correspondance</h1>
                    <p className="text-white">For inquiries, please contact me:</p>
                    <p className="text-white" id={emailId}>Your Email</p>
                    <input aria-describedby={emailId} type="email" placeholder="Email" className="w-full p-2 rounded" />
                    <p className="text-white" id={messageId}>Message</p>
                    <textarea aria-describedby={messageId} placeholder="Message" className="w-full p-2 rounded mt-2"></textarea>
                </div>
            </div>
        </>
    )
}