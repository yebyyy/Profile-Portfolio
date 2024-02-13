import {FaLinkedin} from "react-icons/fa";
import {FaKaggle} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

function Contact() {
    return (
        <div className="p-10 bg-white rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">📲 Contact Me</h2>
            <div className="space-y-3">
                <div className="flex items-center p-3 bg-gray-50 rounded-md shadow hover:scale-105 transition-transform duration-300">
                    <div className="p-1.5 rounded-full bg-blue-100 text-blue-800">
                        <img src="https://logowik.com/content/uploads/images/gmail-new-icon5198.jpg" alt="Gmail" className="w-5 h-5" />
                    </div>
                    <div className="ml-3">
                        <span className="font-semibold text-gray-700">Personal Email:</span>
                        <span className="ml-2 font-medium text-indigo-600">yexiaomeng2004@gmail.com</span>
                    </div>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded-md shadow hover:scale-105 transition-transform duration-300">
                    <div className="p-1.5 rounded-full bg-purple-100 text-purple-800">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Microsoft_Office_Outlook_%282018–present%29.svg/2203px-Microsoft_Office_Outlook_%282018–present%29.svg.png" alt="Outlook" className="w-5 h-5" />
                    </div>
                    <div className="ml-3">
                        <span className="font-semibold text-gray-700">School Email:</span>
                        <span className="ml-2 font-medium text-indigo-600">xye87@gatech.edu</span>
                    </div>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded-md shadow hover:scale-105 transition-transform duration-300">
                    <div className="p-1.5 rounded-full bg-blue-100 text-blue-800">
                        <FaLinkedin className="text-blue-600" size="20" />
                    </div>
                    <a href="https://www.linkedin.com/in/xiaomeng-ye-61aa55290/" className="ml-3 font-medium text-gray-800 hover:text-blue-600">My LinkedIn Profile</a>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded-md shadow hover:scale-105 transition-transform duration-300">
                    <div className="p-1.5 rounded-full bg-green-100 text-green-800">
                        <FaKaggle className="text-teal-600" size="20" />
                    </div>
                    <a href="https://www.kaggle.com/xiaomengye" className="ml-3 font-medium text-gray-800 hover:text-teal-600">My Kaggle Profile</a>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded-md shadow hover:scale-105 transition-transform duration-300">
                    <div className="p-1.5 rounded-full bg-gray-200 text-gray-800">
                        <FaGithub className="text-black" size="20" />
                    </div>
                    <a href="https://github.com/xiaomengye" className="ml-3 font-medium text-gray-800 hover:text-black">My Github Profile</a>
                </div>
            </div>
        </div>
    );
}
export default Contact;


