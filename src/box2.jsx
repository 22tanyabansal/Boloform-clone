import React from "react";

export default function SecondSection() {
    return (
        <section className="w-full flex flex-col justify-center items-start px-4 md:px-48 mt-12 mb-44">
            <h3 id="section_2" className="w-full text-center text-xl md:text-3xl font-semibold">
                BoloForms Is Used By
            </h3>
            <div className="scroll_div w-full overflow-x-auto mt-16 flex flex-row">
                <div className="flex scroll_div">
                    <div className="w-60 h-60 border rounded-xl mr-7">
                        <img src="https://www.boloforms.com/_next/static/media/1.890362c3.svg" alt="BoloForms Is Used By" />
                    </div>
                    <div className="w-60 h-60 border rounded-xl mr-7">
                        <img src="https://www.boloforms.com/_next/static/media/2.0b0df285.svg" alt="BoloForms Is Used By" />
                    </div>
                    <div className="w-60 h-60 border rounded-xl mr-7">
                        <img src="https://www.boloforms.com/_next/static/media/3.8cf4b5f3.svg" alt="BoloForms Is Used By" />
                    </div>
                    <div className="w-60 h-60 border rounded-xl mr-7">
                        <img src="https://www.boloforms.com/_next/static/media/4.b84353dc.svg" alt="BoloForms Is Used By" />
                    </div>
                    <div className="w-60 h-60 border rounded-xl mr-7">
                        <img src="https://www.boloforms.com/_next/static/media/5.9b049047.svg" alt="BoloForms Is Used By" />
                    </div>
                </div>
            </div>
        </section>
    );
}
