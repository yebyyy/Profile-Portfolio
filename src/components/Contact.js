import {FaLinkedin} from "react-icons/fa";
import {FaKaggle} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

function Contact() {
    return (
        <div className="p-10 bg-gray-200">
            <h2 className="text-2xl font-bold">Contact Me</h2>
            <div className="flex items-center mt-2">
                <img src="https://logowik.com/content/uploads/images/gmail-new-icon5198.jpg" alt="Gmail" className="w-4 h-3.5 mr-2" />
                <span className="font-medium">Personal Email:</span>
                <span className="font-medium underline">yexiaomeng2004@gmail.com</span>
            </div>
            <div className="flex items-center mt-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Microsoft_Office_Outlook_%282018–present%29.svg/2203px-Microsoft_Office_Outlook_%282018–present%29.svg.png" alt="Outlook" className="w-4 h-3.5 mr-2" />
                <span className="font-medium">School Email:</span>
                <span className="font-medium underline">xye87@gatech.edu</span>
            </div>
            <div className="mt-2">
                <a href="https://www.linkedin.com/in/xiaomeng-ye-61aa55290/" className="flex items-center">
                    <FaLinkedin className="mr-2 text-orange-400" /> <span className="font-medium">My LinkedIn Profile</span>
                </a>
            </div>
            <div className="mt-2">
                <a href="https://www.kaggle.com/xiaomengye" className="flex items-center">
                    <FaKaggle className="mr-2 text-cyan-400" /> <span className="font-medium">My Kaggle Profile</span>
                </a>
            </div>
            <div className="mt-2">
                <a href="https://www.kaggle.com/xiaomengye" className="flex items-center">
                    <FaGithub className="mr-2 text-black" /> <span className="font-medium">My Github Profile</span>
                </a>
            </div>
        </div>
    );
}
export default Contact;
