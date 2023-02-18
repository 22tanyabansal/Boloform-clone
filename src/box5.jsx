import React, { useState } from "react";
import img1 from "./assests/box5_img_1.jpeg";
import img2 from "./assests/box5_img_2.jpeg";
import Reviews from "./components/Reviews";

const Card = ({ title, description, icon }) => {
    return (
        <div className="w-full max-w-[360px] px-4 flex flex-col justify-center items-start mb-11">
            <img className="w-12 h-12 mb-4" src={icon} />
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p className="">{description}</p>
        </div>
    );
};

export default function FifthSection() {
    const [cards, setCards] = useState([
        {
            title: "Get started in less than 5 minutes.",
            description:
                "Just use an existing Google Form, add approvers, and we'll notify them via email when submissions are made.",
            icon: "https://www.boloforms.com/_next/static/media/pr_agiledeploy.b988c9c8.svg",
        },
        {
            title: "Multi-level workflows",
            description:
                "To ensure that your executives do not approve a document until it has been reviewed and accepted by other employees, you can set up multi-level approval processes.",
            icon: "https://www.boloforms.com/_next/static/media/pr_dyncaseroute.02285ff2.svg",
        },
        {
            title: "Dynamic Reciepients",
            description:
                "Approvers can be selected based on the answers to a form response or entered manually by the requestor.",
            icon: "https://www.boloforms.com/_next/static/media/pr_dynbusrules.572419de.svg",
        },
        {
            title: "Role Based Workflows",
            description:
                "Assign the following roles to your recipients: Approver, Receive a Copy, and Send Final Email Only",
            icon: "https://www.boloforms.com/_next/static/media/pr_socialtask.06e17c13.svg",
        },
        {
            title: "Conditional Logic",
            description:
                "To prevent unnecessary work for approvers, set logic with your approvals to ensure approvers only receive the requests that are relevant to them.",
            icon: "https://www.boloforms.com/_next/static/media/pr_visualprcdesign.0ff90171.svg",
        },
        {
            title: "One-click Approvals",
            description:
                "Notification emails are sent to users and can be approved with a single click.",
            icon: "https://www.boloforms.com/_next/static/media/pr_instaaccess.e822dad7.svg",
        },
        {
            title: "Responsive design",
            description:
                "It is designed to be mobile-first, and seamlessly works on desktop and tablet as well.",
            icon: "https://www.boloforms.com/_next/static/media/pr_intuserinter.41c7f4bc.svg",
        },
        {
            title: "Enterprise grade security",
            description:
                "This ensures you have the complete control of your data with end to end encryption.",
            icon: "https://www.boloforms.com/_next/static/media/pr_processoptim.f6216ec3.svg",
        },
        {
            title: "Custom Dashboard",
            description:
                "Track approvals of various forms from a single place! See the approval process for each request in real-time.",
            icon: "https://www.boloforms.com/_next/static/media/pr_dashboard.64597267.svg",
        },
    ]);
    return (
        <section className="w-full flex flex-col justify-center items-center px-4 md:px-[88px] mt-24">
            <div id="section_5" className="w-full flex flex-col justify-center items-center px-4 mb-16">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Features</h3>
                <p className="text-base md:text-lg text-center">
                    Everything that your organisation will love, & more.
                </p>
            </div>
            <div className="flex flex-col md:flex-row md:flex-wrap md:gap-9 justify-center md:justify-between items-center">
                {cards &&
                    cards.map((card, index) => (
                        <Card
                            title={card.title}
                            description={card.description}
                            icon={card.icon}
                            key={index}
                        />
                    ))}
            </div>
            <Reviews
                img={img1}
                name={"Alaa Khaled"}
                review={`"Boloforms has changed the way my team and I work. We used to have a very inefficient workflow, but Boloforms has streamlined it and allowed us to get our daily tasks done in a fraction of the time. Plus, it's incredibly user friendly and easy to understand. I highly recommend Boloforms for anyone who needs an efficient Google workflow software!"`}
            />
            <Reviews style={{ marginTop: "80px" }} img={img2} name={"Deepak S (Solero Corporation)"} review={`"Easy to use interface and timely support...looking for more features"`} more={false} />
        </section>
    );
}
