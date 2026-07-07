"use client";
import { createProfileAnalysis } from "@/services/api";
import { useState } from "react";

interface ProfileFormProps {
  onProfileCreated: () => void;
}

export default function ProfileForm({
  onProfileCreated,
}: ProfileFormProps) {
  const [username, setUsername] = useState("");
  const [platform, setPlatform] = useState("X");


  async function handleSubmit() {
  try {
    const result = await createProfileAnalysis({
      username,
      platform,
    });

    console.log("Created Profile:");
    console.log(result);

    alert("Profile saved successfully!");

    setUsername("");
    setPlatform("X");

    onProfileCreated();
  } catch (error) {
    console.error(error);

    alert("Failed to save profile.");
  }
}

  return (
    <div className="max-w-lg bg-gray-800 rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-6">
  Profile Analysis
</h2>

      <div className="mb-4">
        <label className="block mb-2 font-medium">
  Username
</label>

        <br />

        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-medium">
  Platform
</label>

        <br />

        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="X">X (Twitter)</option>
          <option value="Instagram">Instagram</option>
          <option value="Facebook">Facebook</option>
          <option value="LinkedIn">LinkedIn</option>
        </select>
      </div>

      <button
  onClick={handleSubmit}
  className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-200 rounded-lg py-3 font-semibold cursor-pointer"
>
  Analyze Profile
</button>
    </div>
  );
}
