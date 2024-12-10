import React from "react";

const ViewPage = () => {
    // Example data (replace with real user data from your backend or state management)
    const userData = {
        name: "John Doe",
        workoutsCompleted: 5,
        totalWorkouts: 10,
        caloriesBurned: 1200,
        targetCalories: 2000,
    };

    const remainingWorkouts = userData.totalWorkouts - userData.workoutsCompleted;
    const remainingCalories = userData.targetCalories - userData.caloriesBurned;

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Header */}
            <header className="bg-green-500 text-white shadow-lg">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Fitness Tracker</h1>
                    <nav className="flex space-x-4">
                        <a href="/" className="hover:text-green-200">Home</a>
                        <a href="#logout" className="bg-white text-green-500 px-4 py-2 rounded-lg font-bold hover:bg-gray-200">
                            Logout
                        </a>
                    </nav>
                </div>
            </header>

            {/* User Stats */}
            <main className="container mx-auto px-6 py-12">
                <h2 className="text-3xl font-bold text-green-600 mb-6">Welcome, {userData.name}!</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Workouts Card */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-xl font-bold text-green-500 mb-4">Workouts</h3>
                        <p className="text-gray-700 text-lg">
                            Workouts Completed: <strong>{userData.workoutsCompleted}</strong>
                        </p>
                        <p className="text-gray-700 text-lg">
                            Total Workouts: <strong>{userData.totalWorkouts}</strong>
                        </p>
                        <p className="text-gray-700 text-lg">
                            Remaining Workouts: <strong>{remainingWorkouts}</strong>
                        </p>
                    </div>

                    {/* Calories Card */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-xl font-bold text-green-500 mb-4">Calories</h3>
                        <p className="text-gray-700 text-lg">
                            Calories Burned: <strong>{userData.caloriesBurned} kcal</strong>
                        </p>
                        <p className="text-gray-700 text-lg">
                            Target Calories: <strong>{userData.targetCalories} kcal</strong>
                        </p>
                        <p className="text-gray-700 text-lg">
                            Remaining Calories: <strong>{remainingCalories} kcal</strong>
                        </p>
                    </div>
                </div>

                {/* Progress Bars */}
                <div className="mt-12">
                    <h3 className="text-2xl font-bold text-green-600 mb-4">Progress</h3>

                    {/* Workouts Progress */}
                    <div className="mb-6">
                        <p className="text-gray-700 font-semibold">Workouts Progress</p>
                        <div className="w-full bg-gray-200 rounded-full h-4">
                            <div
                                className="bg-green-500 h-4 rounded-full"
                                style={{
                                    width: `${(userData.workoutsCompleted / userData.totalWorkouts) * 100}%`,
                                }}
                            ></div>
                        </div>
                    </div>

                    {/* Calories Progress */}
                    <div>
                        <p className="text-gray-700 font-semibold">Calories Progress</p>
                        <div className="w-full bg-gray-200 rounded-full h-4">
                            <div
                                className="bg-green-500 h-4 rounded-full"
                                style={{
                                    width: `${(userData.caloriesBurned / userData.targetCalories) * 100}%`,
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-green-500 text-white py-4">
                <div className="container mx-auto px-6 text-center">
                    <p>© 2024 Fitness Tracker. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default ViewPage;
