import React from "react";

export default function ThirdSection() {
    return (
    <section className="w-full flex flex-col justify-center items-center px-4 md:px-[88px] mt-12">
        <h3 id="section_3" className="text-xl md:text-3xl font-semibold mb-2">How does BoloForms work?</h3>
        <p className="text-xs md:text-sm">Set up your first workflow in just 3 easy steps.</p>
        <div className="w-full flex flex-col md:flex-row justify-center items-center md:gap-6">
            <div className="w-full flex flex-col md:flex-col-reverse justify-center items-center mt-12">
                <div className="w-full flex flex-col justify-center items-center">
                <h2 className="text-xl font-bold">Step 1:</h2>
                <p className="text-sm text-center">Choose a template or add questions to create your Google Form.</p>
                </div>
                <img className="mt-6 hover:-translate-y-2 transition-transform" src="https://www.boloforms.com/_next/static/media/2.2709e204.svg" alt="How does BoloForms work?" />
            </div>
            <div className="w-full flex flex-col md:flex-col-reverse justify-center items-center mt-12">
                <div className="w-full flex flex-col justify-center items-center">
                <h2 className="text-xl font-bold">Step 2:</h2>
                <p className="text-sm text-center">Enable Single/Multi Step approval and add necessary approvers!</p>
                </div>
                <img className="mt-6 hover:-translate-y-2 transition-transform" src="https://www.boloforms.com/_next/static/media/1.b2cc23b0.svg" alt="How does BoloForms work?" />
            </div>
            <div className="w-full flex flex-col md:flex-col-reverse justify-center items-center mt-12">
                <div className="w-full flex flex-col justify-center items-center">
                <h2 className="text-xl font-bold">Step 3:</h2>
                <p className="text-sm text-center">Now you can enable the workflow and share the Google Form.</p>
                </div>
                <img className="mt-6 hover:-translate-y-2 transition-transform" src="https://www.boloforms.com/_next/static/media/3.1a7ec00e.svg" alt="How does BoloForms work?" />
            </div>
        </div>
    </section>
);
}
