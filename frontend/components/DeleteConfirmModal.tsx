"use client";

interface Props {
    open: boolean;
    username: string;
    onCancel: () => void;
    onConfirm: () => void;
}

export default function DeleteConfirmModal({
    open,
    username,
    onCancel,
    onConfirm,
}: Props) {

    if (!open) return null;

    return (

        <div
            className="
            fixed
            inset-0
            bg-black/70
            flex
            items-center
            justify-center
            z-[100]
            "
        >

            <div
                className="
                w-[420px]
                rounded-2xl
                bg-[#111827]
                border
                border-cyan-500/20
                p-6
                shadow-2xl
                "
            >

                <h2 className="text-2xl font-bold mb-4">

                    Delete Profile

                </h2>

                <p className="text-gray-300">

                    Are you sure you want to delete

                    <span className="font-bold text-cyan-400">
                        {" "}
                        {username}
                    </span>

                    ?

                </p>

                <div className="flex justify-end gap-3 mt-8">

                    <button
                        onClick={onCancel}
                        className="
                        px-5
                        py-2
                        rounded-xl
                        bg-gray-700
                        hover:bg-gray-600
                        "
                    >
                        Cancel
                    </button>

                    <button
                        onClick={onConfirm}
                        className="
                        px-5
                        py-2
                        rounded-xl
                        bg-red-600
                        hover:bg-red-500
                        "
                    >
                        Delete
                    </button>

                </div>

            </div>

        </div>

    );

}
