"use client";
import { createProfileAnalysis } from "@/services/api";
import { ProfileAnalysisResponse } from "@/types/profile";
import { useState } from "react";
import toast from "react-hot-toast";

interface ProfileFormProps {
  onProfileCreated: () => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setLatestProfile: React.Dispatch<
    React.SetStateAction<ProfileAnalysisResponse | null>
  >;
}

export default function ProfileForm({
  onProfileCreated,
  loading,
  setLoading,
  setLatestProfile,
}: ProfileFormProps) {
  const [username, setUsername] = useState("");
const [platform, setPlatform] = useState("X");
const [usernameError, setUsernameError] = useState("");


  async function handleSubmit() {
    if (username.trim() === "") {

    setUsernameError("Please enter a username.");

    return;

}
  let toastId: string | undefined;

  try {
    setLoading(true);

    toastId = toast.loading("AI is analyzing profile...");

    await new Promise(resolve => setTimeout(resolve, 1800));

    const result = await createProfileAnalysis({
  username,
  platform,
});

setLatestProfile(result);

    console.log(result);

    setUsername("");
    setPlatform("X");

    onProfileCreated();

    if (toastId) {
      toast.dismiss(toastId);
    }

    toast.success("Analysis Complete!");

  } catch (error) {
    console.error(error);

    if (toastId) {
      toast.dismiss(toastId);
    }

    toast.error("Analysis Failed");

  } finally {
    setLoading(false);
  }
}

  return (
    <div className="
w-full
max-w-xl
rounded-3xl
border
border-cyan-500/20
bg-white/5
backdrop-blur-xl
shadow-2xl
shadow-cyan-500/10
p-6
">
      <h2 className="text-3xl font-bold text-center mb-8">
  Profile Analysis
</h2>

      <div className="mb-4">
        <label className="block mb-2 font-medium">
  Username
</label>



        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => {
    setUsername(e.target.value);

    if (e.target.value.trim() !== "") {
        setUsernameError("");
    }
}}
          className="
w-full
rounded-xl
border
border-gray-600
bg-gray-900/70
px-4
py-3
text-white
focus:border-cyan-400
focus:ring-2
focus:ring-cyan-500
outline-none
transition
"
        />
        {usernameError && (

    <p className="mt-2 text-sm text-red-500">

        {usernameError}

    </p>

)}
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-medium">
  Platform
</label>



        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          className="
w-full
rounded-xl
border
border-gray-600
bg-gray-900/70
px-4
py-3
text-white
focus:border-cyan-400
focus:ring-2
focus:ring-cyan-500
outline-none
transition
"
        >
          <option value="X">X (Twitter)</option>
          <option value="Instagram">Instagram</option>
          <option value="Facebook">Facebook</option>
          <option value="LinkedIn">LinkedIn</option>
        </select>
      </div>

      <button
  onClick={handleSubmit}
  disabled={loading}
  className="
w-full
rounded-xl
py-4
font-bold
text-lg
bg-gradient-to-r
from-cyan-500
to-blue-600
hover:from-cyan-400
hover:to-blue-500
shadow-lg
shadow-cyan-500/30
hover:shadow-cyan-400/60
transition-all
duration-300
disabled:opacity-60
disabled:cursor-not-allowed
"
>
  {loading ? (
    <span className="flex items-center justify-center gap-3">

        <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />

        AI Scanning...

    </span>
) : (
    "Analyze Profile"
)}
</button>
    </div>
  );
}
