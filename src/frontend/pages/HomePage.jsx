import React from "react";

const HomePage = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Header */}
            <header className="bg-green-500 text-white shadow-lg">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Fitness Tracker</h1>
                    <nav className="flex space-x-4">
                        <a href="#features" className="hover:text-green-200">Features</a>
                        <a href="#about" className="hover:text-green-200">About</a>
                        <a href="#contact" className="hover:text-green-200">Contact</a>
                        <a href="#signup" className="bg-white text-green-500 px-4 py-2 rounded-lg font-bold hover:bg-gray-200">
                            Sign Up
                        </a>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-green-100 py-12">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-bold text-green-600 mb-4">
                            Track Your Fitness, Transform Your Life
                        </h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Your personal journey to health starts here. Log activities, track progress, and achieve your goals with ease.
                        </p>
                        <a href="#signup" className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-600">
                            Get Started
                        </a>
                    </div>
                    <div className="md:w-1/2 mt-8 md:mt-0">
                        <img src="/fitness-hero.png" alt="Fitness Tracker" className="w-full rounded-lg shadow-lg" />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-12">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-green-600 mb-8">Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="text-xl font-bold text-green-500 mb-4">Activity Logging</h3>
                            <p className="text-gray-600">
                                Track your workouts, steps, and calories burned effortlessly.
                            </p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="text-xl font-bold text-green-500 mb-4">Progress Insights</h3>
                            <p className="text-gray-600">
                                Visualize your progress with beautiful graphs and charts.
                            </p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="text-xl font-bold text-green-500 mb-4">Goal Setting</h3>
                            <p className="text-gray-600">
                                Set and achieve personal fitness goals tailored to your needs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-green-500 text-white py-4">
                <div className="container mx-auto px-6 text-center">
                    <p>© 2024 Fitness Tracker. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
