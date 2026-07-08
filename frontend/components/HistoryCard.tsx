"use client";

import { deleteProfile } from "@/services/api";
import { ProfileAnalysisResponse } from "@/types/profile";
import {
  Calendar,
  Globe,
  ShieldAlert,
  ShieldCheck,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import DeleteConfirmModal from "./DeleteConfirmModal";
interface Props

{
  profile: ProfileAnalysisResponse;
  onDelete: (id: number) => void;
}

export default function HistoryCard({
  profile,
  onDelete,
}: Props)

{
const [showDeleteModal, setShowDeleteModal] = useState(false);
async function handleDelete() {

    try {

        await deleteProfile(profile.id);

        toast.success("Profile Deleted");

        onDelete(profile.id);

        setShowDeleteModal(false);

    } catch {

        toast.error("Delete Failed");

    }

}


  return (
    <div
      className="
      rounded-2xl
      border
      border-cyan-500/20
      bg-white/5
      backdrop-blur-lg
      p-6
      hover:border-cyan-400
      transition
      "
    >
      <div className="flex justify-between">

        <div>

          <h2 className="text-2xl font-bold">
            {profile.username}
          </h2>

          <div className="flex items-center gap-2 mt-2 text-gray-400">
            <Globe size={16}/>
            {profile.platform}
          </div>

        </div>

        <button onClick={() => setShowDeleteModal(true)}
          className="
          h-10
          w-10
          rounded-full
          bg-red-500/20
          hover:bg-red-500
          transition
          flex
          items-center
          justify-center
          "
        >

          <Trash2 size={18}/><DeleteConfirmModal
    open={showDeleteModal}
    username={profile.username}
    onCancel={() => setShowDeleteModal(false)}
    onConfirm={handleDelete}
/>
        </button>

      </div>

      <div className="mt-5">

        <div className="flex justify-between mb-2">

          <span>Risk Score</span>

          <strong>{profile.risk_score}%</strong>

        </div>

        <div className="w-full h-3 rounded-full bg-gray-700">

          <div
            className="h-3 rounded-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-500"
            style={{
              width: `${profile.risk_score}%`,
            }}
          />

        </div>

      </div>

      <div className="mt-5">

        {profile.is_fake ? (

          <div className="flex items-center gap-2 text-red-400">

            <ShieldAlert/>

            Fake Profile

          </div>

        ) : (

          <div className="flex items-center gap-2 text-green-400">

            <ShieldCheck/>

            Genuine Profile

          </div>

        )}

      </div>

      <div className="flex items-center gap-2 text-gray-500 mt-5">

        <Calendar size={16}/>

        {new Date(profile.created_at).toLocaleString()}

      </div>

    </div>
  );
}
