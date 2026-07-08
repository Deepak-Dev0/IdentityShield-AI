"use client";

interface Props {
    platform: string;
    setPlatform: (value: string) => void;

    fromDate: string;
    setFromDate: (value: string) => void;

    toDate: string;
    setToDate: (value: string) => void;
}

export default function HistoryFilters({
    platform,
    setPlatform,
    fromDate,
    setFromDate,
    toDate,
    setToDate,
}: Props) {

    return (

        <div className="grid md:grid-cols-3 gap-5">

            <select
                value={platform}
                onChange={(e) =>
                    setPlatform(e.target.value)
                }
                className="rounded-xl bg-gray-800 p-3"
            >
                <option value="">
                    All Platforms
                </option>

                <option value="X">
                    X
                </option>

                <option value="Instagram">
                    Instagram
                </option>

                <option value="Facebook">
                    Facebook
                </option>

                <option value="LinkedIn">
                    LinkedIn
                </option>

            </select>

            <input
                type="date"
                value={fromDate}
                onChange={(e) =>
                    setFromDate(e.target.value)
                }
                className="rounded-xl bg-gray-800 p-3"
            />

            <input
                type="date"
                value={toDate}
                onChange={(e) =>
                    setToDate(e.target.value)
                }
                className="rounded-xl bg-gray-800 p-3"
            />

        </div>

    );

}
