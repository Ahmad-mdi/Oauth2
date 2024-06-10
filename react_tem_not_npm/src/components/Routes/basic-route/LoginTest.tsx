
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const LoginTest = () => {
    const [username, setUsername] = useState<string|number>()
    const [password, setPassword] = useState<string|number>()
    // console.log(username,password)
    useEffect(() => {
        // window.location.assign('http://192.168.10.241:9000/login')
    }, []);

    const postMethod = async (e:any) => {
        const url = 'http://auth-server:9000/login/oauth2/authorize'
        try {
            const response = await axios.post(url, {
                username: username,
                password: password
            }, {
                withCredentials: true, //allows sending session cookie
                headers: {
                    "Accept": "application/json",
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            });
            console.log(response)

            if (response.status == 200){
                alert("login is ok")
                window.location.assign('http://127.0.0.1:8080/api/hello')
                console.log('true')
            }
        } catch (e) {
            console.log('false')
            console.log(e)
        }
    }
    console.log(username, password)



    return (
        
            <div className="flex items-center justify-center pt-36 bg-white">
            <div data-aos="fade-up"
                 className="h-96 flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 z-20">
                <div className="relative">
                    <div
                        className="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-lg bg-gradient-to-r from-blue-400 via-gray-500 to-blue-300 shadow-lg animate-pulse"></div>
                    <div id="form-container"
                         className="bg-white p-16 rounded-lg shadow-2xl w-80 relative z-10 transform transition duration-500 ease-in-out">
                        <h2 id="form-title" className="text-center text-3xl font-bold mb-10 text-gray-800">Login</h2>
                        <form className="space-y-5">
                            <input value={username} onChange={(e) => setUsername(e.target.value)}
                                   className="w-full h-12 border border-gray-800 px-3 rounded-lg" placeholder="Username"
                                   id="" name="" type="text"/>
                            <input value={password} onChange={(e) => setPassword(e.target.value)}
                                   className="w-full  h-12 border border-gray-800 px-3 rounded-lg"
                                   placeholder="Password"
                                   id="" name="" type="password"/>
                            <div className={'w-full h-[7px]'}/>
                            <Link to={'/#'}>
                                <button onClick={postMethod}
                                        className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign
                                    in
                                </button>
                            </Link>
                            <a className="text-blue-500 hover:text-blue-800 text-sm" href="#">Forgot Password?</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginTest;




