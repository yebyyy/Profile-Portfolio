function Projects() {
    return (
        <div className="p-10">
            <h2 className="text-2xl font-bold mb-4">🚀 Projects</h2>
            <div className="space-y-4">
                {/* Project Entry */}
                <a href="https://sites.google.com/view/cs2340scheduler-app/scheduler-app" className="block">
                    <div className="bg-white shadow-lg rounded-lg p-4 hover:bg-gray-100 hover:shadow-xl transition duration-300 ease-in-out">
                        <h3 className="text-xl font-semibold text-purple-600 hover:text-purple-800">Course Scheduler App - Full Stack Android Development</h3>
                        <p className="text-gray-600">Involved in designing and developing UI features and database functionality using SQLite.</p>
                    </div>
                </a>
                {/* Add more project entries here */}
            </div>
        </div>
    );
}
export default Projects;

