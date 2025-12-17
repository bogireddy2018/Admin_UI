import React from 'react';

const Profile = () => {
  const handleLogout = () => {
    // Add your logout logic here
    alert('Logged out successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6">Profile</h1>

      {/* User Info */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mb-6">
        <div className="flex items-center mb-4">
          <img
            src="https://via.placeholder.com/80"
            alt="Profile"
            className="w-20 h-20 rounded-full mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold">John Doe</h2>
            <p className="text-gray-500">john.doe@example.com</p>
          </div>
        </div>

        {/* Subscription & Orders */}
        <div className="mb-4">
          <h3 className="font-semibold text-gray-700 mb-2">Current Tiffin Plan</h3>
          <p>Vegetarian - Weekly Plan</p>
          <button className="mt-2 text-blue-500 hover:underline">View Order History</button>
        </div>

        {/* Payment & Address */}
        <div className="mb-4">
          <h3 className="font-semibold text-gray-700 mb-2">Payment Methods</h3>
          <p>Visa **** 1234</p>
          <button className="mt-2 text-blue-500 hover:underline">Edit Payment Methods</button>
        </div>
        <div>
          <h3 className="font-semibold text-gray-700 mb-2">Delivery Address</h3>
          <p>123 Main Street, City, Country</p>
          <button className="mt-2 text-blue-500 hover:underline">Edit Address</button>
        </div>
      </div>

      {/* Settings */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mb-6">
        <h3 className="font-semibold text-gray-700 mb-2">Settings</h3>
        <ul>
          <li className="py-2 border-b border-gray-200">Notification Preferences</li>
          <li className="py-2 border-b border-gray-200">Change Password</li>
          <li className="py-2">Language Preferences</li>
        </ul>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
