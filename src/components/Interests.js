function Interests() {
    const categories = [
        {
            title: "YouTube Videos",
            items: [
                { name: "Video 1", link: "https://youtube.com/link-to-video-1" },
                { name: "Video 2", link: "https://youtube.com/link-to-video-2" },
            ]
        },
        {
            title: "Papers",
            items: [
                { name: "Paper 1", link: "https://link-to-paper-1.com" },
                { name: "Paper 2", link: "https://link-to-paper-2.com" },
            ]
        },
        {
            title: "Ongoing Projects",
            items: [
                { name: "Project 1", link: "https://github.com/link-to-project-1" },
                { name: "Project 2", link: "https://github.com/link-to-project-2" },
            ]
        }
    ];

    return (
        <div className="p-10">
            <h2 className="text-2xl font-bold mb-4">🌴 Interests</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map((category, index) => (
                    <div key={index} className="bg-gradient-to-r from-purple-600 to-orange-400 rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                        <h3 className="text-xl font-semibold text-white mb-2">{category.title}</h3>
                        <ul className="list-disc list-inside text-white">
                            {category.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="hover:text-orange-300 transition-colors duration-300 ease-in-out">
                                    <a href={item.link} className="underline">{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Interests;
