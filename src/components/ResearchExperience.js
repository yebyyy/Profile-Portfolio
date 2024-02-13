function ResearchExperience() {
    const researchExperiences = [
        {
            title: "Computer Vision Researcher and Programmer",
            institution: "Ruijin Hospital | Shanghai Jiao Tong University, China",
            period: "June – August 2022",
            details: [
                "Involved in project: Biomedical Image Processing.",
                "Trained biomedical segmentation networks; applied U-net for cell segmentation.",
                "Programmed and compared different networks for adrenal gland segmentation."
            ]
        },
        {
            title: "Natural Language Processing Researcher and Programmer",
            institution: "Zhang Research Group Lab | University of Minnesota Twin City, MN",
            period: "May – December 2022",
            details: [
                "Involved in project: Complementary and Integrative Health.",
                "Applied natural language processing to extract and find the use of CAM therapy.",
                "Compiled and annotated corpus and trained deep learning models for semantics analysis."
            ]
        },
        {
            title: "AI and Autonomous Robot Researcher and Programmer",
            institution: "Oxford Robotics Institute | Oxford University, UK",
            period: "September – November 2021",
            details: [
                "Individual researcher in project: Planning for Autonomous Robots: AI Techniques led by Professor Nick Hawes.",
                "Researched reinforcement learning algorithms and mapping techniques for autonomous robots."
            ]
        }
    ];

    return (
        <div className="p-10 bg-gradient-to-br from-gray-100 to-gray-200">
            <h2 className="text-2xl font-bold mb-4">🔬 Research Experience</h2>
            <div className="space-y-6">
                {researchExperiences.map((exp, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-lg font-semibold text-purple-600">{exp.title}</h3>
                        <p className="text-sm font-medium text-gray-500">{exp.institution}, {exp.period}</p>
                        <ul className="list-disc list-inside mt-2 text-gray-700">
                            {exp.details.map((detail, detailIndex) => (
                                <li key={detailIndex}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default ResearchExperience;
