// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import React, {useState} from 'react';

// ایجاد یک HOC برای مدیریت نمایش کامپوننت‌ها
const withPageRenderer = (Component) => {
    return (props) => {
        // تعریف یک state برای نگه داشتن کامپوننت فعلی
        const [currentComponent, setCurrentComponent] = useState('Home');

        // تابعی برای رندر کردن کامپوننت بر اساس وضعیت فعلی
        const renderComponent = () => {
            switch (currentComponent) {
                case 'Home':
                    return <Home/>;
                case 'About':
                    return <About/>;
                case 'Contact':
                    return <Contact/>;
                default:
                    return <Home/>;
            }
        };

        return (
            <div>
                {/* نوار ناوبری با دکمه‌هایی برای تغییر کامپوننت فعلی */}
                <nav>
                    <button onClick={() => setCurrentComponent('Home')}>Home</button>
                    <button onClick={() => setCurrentComponent('About')}>About</button>
                    <button onClick={() => setCurrentComponent('Contact')}>Contact</button>
                </nav>
                {/* رندر کردن کامپوننت بر اساس وضعیت فعلی */}
                {renderComponent()}
            </div>
        );
    };
};

// کامپوننت‌های نمونه
const Home = () => <div>Home Component</div>;
const About = () => <div>About Component</div>;
const Contact = () => <div>Contact Component</div>;

// استفاده از HOC برای پیچیدن کامپوننت اصلی
const App = withPageRenderer((props) => <div>{props.children}</div>);

export default App;
