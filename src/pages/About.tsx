
export default function About () {
    return (
        <>
            <div className="flex justify-center h-screen bg-black">
                <div className="max-w-[500px] w-full p-4 rounded shadow">
                    <h1 className="text-white text-xl font-extrabold">Matt Miling</h1>
                    <h2 className="text-white">Software Engineering Leader and Developer</h2>
                    <h1 className="text-white text-lg font-bold pt-10">Summary</h1>
                    <p className="text-white">
                        With over 20 years of software developer experience in such industries as financials, defense, and computer vision,
                        I leverage a growth mindset and passion for technology to deliver outstanding products and experiences to my users.
                    </p>
                    <h1 className="text-white text-lg font-bold pt-10">Skills</h1>
                    <p className="text-white">
                        Python, Javascript, Typescript, Angular, React, AWS, Java
                    </p>
                    <h1 className="text-white text-lg font-bold pt-10">Certifications</h1>
                    <p className="text-white">
                        <ul>
                            <li>AWS Solutions Architect Associate (SAA-C02) [May 2024]</li>
                            <li>Coursera Machine Learning Specializations [January 2024]</li>
                        </ul>
                    </p>
                </div>
            </div>
        </>
    );
}