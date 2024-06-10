// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import React, { createContext, useContext, useState } from 'react';

// ایجاد یک Context برای نگه داشتن وضعیت تب‌ها
const TabContext = createContext();

const App = () => {
    // تعریف یک state برای نگه داشتن تب‌های باز
    const [tabs, setTabs] = useState([{ id: 1, component: 'Home' }]);
    // تعریف یک state برای نگه داشتن تب فعال
    const [activeTab, setActiveTab] = useState(1);

    const addTab = (component) => {
        const newTab = { id: tabs.length + 1, component };
        setTabs([...tabs, newTab]);
        setActiveTab(newTab.id);
    };

    const removeTab = (id) => {
        setTabs(tabs.filter(tab => tab.id !== id));
        if (activeTab === id && tabs.length > 1) {
            setActiveTab(tabs[tabs.length - 2].id);
        }
    };

    return (
        <TabContext.Provider value={{ tabs, activeTab, setActiveTab, addTab, removeTab }}>
            <div>
                {/* تب‌بار */}
                <TabBar />
                {/* رندر کردن تب فعال */}
                <TabRenderer />
            </div>
        </TabContext.Provider>
    );
};

// کامپوننت تب‌بار برای نمایش تب‌ها
const TabBar = () => {
    const { tabs, activeTab, setActiveTab, addTab, removeTab } = useContext(TabContext);

    return (
        <div>
            <nav>
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        style={{ fontWeight: tab.id === activeTab ? 'bold' : 'normal' }}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.component}
                        <span onClick={() => removeTab(tab.id)} style={{ marginLeft: 8 }}>x</span>
                    </button>
                ))}
                <button onClick={() => addTab('NewTab')}>+</button>
            </nav>
        </div>
    );
};

// کامپوننتی که تب فعال را رندر می‌کند
const TabRenderer = () => {
    const { tabs, activeTab } = useContext(TabContext);
    const activeComponent = tabs.find(tab => tab.id === activeTab)?.component;

    switch (activeComponent) {
        case 'Home':
            return <Home />;
        case 'About':
            return <About />;
        case 'Contact':
            return <Contact />;
        case 'NewTab':
            return <NewTab />;
        default:
            return <Home />;
    }
};

// کامپوننت‌های نمونه
const Home = () => <div>Home Component</div>;
const About = () => <div>About Component</div>;
const Contact = () => <div>Contact Component</div>;
const NewTab = () => <div>New Tab Component</div>;

export default App;
