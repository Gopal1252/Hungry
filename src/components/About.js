import Header from "./Header"

const About = () => {
    return (
        <div>
            <Header />
            <div className="text-xl mx-40 flex flex-col items-center mt-10">
                <h1 className="text-4xl mb-5 font-bold">Who We Are</h1>
                <p className="mb-3 text-justify w-[60rem]">
                Welcome to <b>HUNGRY</b>, where culinary delights meet digital convenience! Our passion for good food and seamless technology converge to create an unparalleled dining experience for you.
                </p>
                <p className="mb-3 text-justify w-[60rem]">
                At <b>HUNGRY</b>, we understand the joy that comes with savoring a delicious meal, and we've made it our mission to bring that joy to your doorstep. Whether you're craving comfort food classics or exploring exotic cuisines, we've curated a diverse selection of top-rated restaurants to cater to every palate.
                </p>
                <p className="mb-3 text-justify w-[60rem]">
                What sets us apart is our commitment to simplicity and efficiency. We believe that ordering food should be as enjoyable as eating it. Our user-friendly website and application have been meticulously designed to provide you with a hassle-free and intuitive ordering process. From browsing through enticing menus to securely placing your order with just a few clicks, we've streamlined every step to save you time and enhance your overall experience.
                </p>
                <p className="mb-3 text-justify w-[60rem]">
                At the heart of <b>HUNGRY</b> is a dedication to quality and reliability. We work closely with our partner restaurants to ensure that every dish is crafted with care using fresh, high-quality ingredients. Our delivery network is built on a foundation of speed and accuracy, ensuring that your order arrives hot and delicious, right when you expect it.
                </p>
                <p className="mb-3 text-justify w-[60rem]">
                We also value your feedback. Your satisfaction is our priority, and we continually strive to improve our services based on your suggestions. Our customer support team is always ready to assist you, ensuring that any questions or concerns are addressed promptly.
                </p>
                <p className="mb-3 text-justify w-[60rem]">
                Join us on a culinary journey where convenience meets flavor, and let <b>HUNGRY</b> be your trusted companion for all your dining needs. Thank you for choosing us – we look forward to serving you a delightful and memorable dining experience, one order at a time!
                </p>
            </div>
        </div>
    );
};

export default About;

