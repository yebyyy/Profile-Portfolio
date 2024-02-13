function Skills() {
    const webDevelopment = ['HTML', 'JavaScript', 'React', 'Tailwind CSS', 'SQLite', 'Git'];
    const dataScience = ['Python', 'Pandas', 'Numpy', 'Matplotlib', 'Scikit-learn', 'Tensorflow'];
    const ai = ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Reinforcement Learning'];
    const softwareDevelopment = ['Java', 'Android development', 'Database']
    return (
        <div className="p-10">
            <h2 className="text-2xl font-bold">💡Skills</h2>
            <div className="flex flex-wrap mt-2">
                <p className="bg-gradient-to-br from-pink-400 to-purple-500 text-white font-semibold m-2 text-lg px-4 py-2 rounded-full">Web Development :</p>
                {webDevelopment.map((webDevelopment) => (
                    <span className="flex items-center justify-center m-2 bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full" key={webDevelopment}>
            {webDevelopment}
          </span>
                ))}
            </div>
            <div className="flex flex-wrap mt-2">
                <p className="bg-gradient-to-br from-pink-400 to-purple-500 text-white font-semibold m-2 text-lg px-4 py-2 rounded-full">Data Science :</p>
                {dataScience.map((dataScience) => (
                    <span className="flex items-center justify-center m-2 bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full" key={dataScience}>
            {dataScience}
          </span>
                ))}
            </div>
            <div className="flex flex-wrap mt-2">
                <p className="bg-gradient-to-br from-pink-400 to-purple-500 text-white font-semibold m-2 text-lg px-4 py-2 rounded-full">AI :</p>
                {ai.map((ai) => (
                    <span className="flex items-center justify-center m-2 bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full" key={ai}>
            {ai}
          </span>
                ))}
            </div>
            <div className="flex flex-wrap mt-2">
                <p className="bg-gradient-to-br from-pink-400 to-purple-500 text-white font-semibold m-2 text-lg px-4 py-2 rounded-full">Software Development :</p>
                {softwareDevelopment.map((softwareDevelopment) => (
                    <span className="flex items-center justify-center m-2 bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full" key={softwareDevelopment}>
            {softwareDevelopment}
          </span>
                ))}
            </div>
        </div>

    );
}
export default Skills;