import React, { useState } from "react";
import bgimg from "../../assets/vecteezy_3d-male-character-happy-working-on-a-laptop_24387907_314.png";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the new password and confirm new password match
    if (newPassword !== confirmNewPassword) {
      alert("New password and confirm new password do not match.");
      return;
    }

    // Add logic here to send the password update request to your backend

    // Reset form fields
    setOldPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
  };

  return (
    <div className="mx-auto flex flex-col items-center justify-center w-screen h-screen">
      <div className="w-full flex flex-row flex-wrap items-center justify-center gap-x-5">
        {/* left div with password changes */}
        <div className="2xl:w-6/12 sm:w-[200px] h-full gap-y-12 flex flex-col items-center justify-center">
          <p className="text-4xl text-center font-roborto 2xl:h-12 overflow-hidden">Change Your Password</p>
          <form onSubmit={handleSubmit} className="2xl:w-[400px] sm:w-[200px]">
            <div className="mb-4">
              <label htmlFor="oldPassword" className="block mb-2">
                Old Password
              </label>
              <input
                type="password"
                id="oldPassword"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="newPassword" className="block mb-2">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmNewPassword" className="block mb-2">
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmNewPassword"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-indigo-500 mt-4 text-white transition-all duration-200 px-4 py-2 rounded-full hover:bg-indigo-600"
              >
                Change Password
              </button>
            </div>
          </form>
        </div>

        {/* right div with png */}
        <div className="">
          <img src={bgimg} alt="sfg" width="800px" />
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
