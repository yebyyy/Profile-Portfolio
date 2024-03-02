import { FaLinkedin, FaKaggle, FaGithub } from "react-icons/fa";

function Header() {
    return (
        <div className="text-center p-10 bg-gray-100">
            <img src="https://github.com/yebyyy/Profile-Portfolio/blob/main/public/images/Profilepic.jpeg?raw=true" alt="Profile" className="rounded-full mx-auto max-w-xs max-h-xs w-36 h-36 object-cover" />
            <h1 className="text-4xl font-bold mt-2">Xiaomeng Ye</h1>
            <p className="text-gray-500 text-lg">Undergrad Computer Science student @ Georgia Tech
                <br />Threads: Intelligence / Theory <br/>GPA: 4.0</p>
            <div className="flex justify-center space-x-4 mt-4">
                <a href="mailto:yexiaomeng2004@gmail.com">
                    <img src="https://logowik.com/content/uploads/images/gmail-new-icon5198.jpg" alt="Gmail" className="w-7 h-6" />
                </a>
                <a href="mailto:xye87@gatech.edu">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Microsoft_Office_Outlook_%282018–present%29.svg/2203px-Microsoft_Office_Outlook_%282018–present%29.svg.png" alt="Outlook" className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/xiaomeng-ye-61aa55290/">
                    <FaLinkedin className="text-blue-600" size="24" />
                </a>
                <a href="https://www.kaggle.com/xiaomengye">
                    <FaKaggle className="text-cyan-400" size="24" />
                </a>
                <a href="https://github.com/yebyyy">
                    <FaGithub className="text-black" size="24" />
                </a>
            </div>
        </div>
    );
}


export default Header;
