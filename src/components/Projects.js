function Projects() {
    return (
        <div className="p-10">
            <h2 className="text-2xl font-bold mb-4">🚀 Projects</h2>
            <div className="space-y-4">
                <div className="bg-white shadow-lg rounded-lg p-4">
                    <h3 className="text-xl font-semibold text-purple-600">Course Scheduler App - Full Stack Android Development</h3>
                    <p className="text-gray-600">Involved in designing and developing UI features and database functionality using SQLite.</p>
                    <a href="https://sites.google.com/view/cs2340scheduler-app/scheduler-app" className="inline-block mt-2 text-blue-500 hover:text-blue-700 hover:underline">View Project</a>
                </div>
                {/* Add more project entries here */}
            </div>
        </div>
    );
}
export default Projects;
