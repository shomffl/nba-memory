import Authenticated from "@/Layouts/AdminAuthenticated";
import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { useForm } from "@inertiajs/inertia-react";
import CalcDate from "./Components/CalcDate";

const Subscribe = (props: any) => {
    const { teams, series } = props;

    const today = CalcDate();

    const { data, setData } = useForm({
        home_team_id: "1",
        away_team_id: "30",
        matched_at: today,
        series_id: "1",
        home_team_point: 100,
        away_team_point: 100,
    });

    const handleSubmit = (e: any) => {
        e.preventDefault();
        Inertia.post(route("admin.games.store"), data);
    };

    return (
        <Authenticated
            auth={props.auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Subscribe
                </h2>
            }
        >
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="flex">
                        <div>
                            <div>HOME</div>
                            <div>
                                <select
                                    onChange={(e) =>
                                        setData("home_team_id", e.target.value)
                                    }
                                >
                                    {teams.map(
                                        (data: {
                                            id: number;
                                            name: string;
                                        }) => {
                                            return (
                                                <option
                                                    key={data.id}
                                                    value={data.id}
                                                >
                                                    {data.name}
                                                </option>
                                            );
                                        }
                                    )}
                                </select>
                            </div>
                            <div>
                                <input
                                    type="number"
                                    value={data.home_team_point}
                                    onChange={(e: any) =>
                                        setData(
                                            "home_team_point",
                                            e.target.value
                                        )
                                    }
                                />
                            </div>
                        </div>

                        <div>
                            <div>AWAY</div>
                            <div>
                                <select
                                    onChange={(e) =>
                                        setData("away_team_id", e.target.value)
                                    }
                                >
                                    {teams
                                        .reverse()
                                        .map(
                                            (data: {
                                                id: number;
                                                name: string;
                                            }) => {
                                                return (
                                                    <option
                                                        key={data.id}
                                                        value={data.id}
                                                    >
                                                        {data.name}
                                                    </option>
                                                );
                                            }
                                        )}
                                </select>
                            </div>
                            <div>
                                <input
                                    type="number"
                                    value={data.away_team_point}
                                    onChange={(e: any) =>
                                        setData(
                                            "away_team_point",
                                            e.target.value
                                        )
                                    }
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label>MATCH DAY</label>
                        <input
                            type="date"
                            value={data.matched_at}
                            onChange={(e) =>
                                setData("matched_at", e.target.value)
                            }
                        />
                    </div>
                    <div>
                        <label>SERIES</label>
                        <select>
                            {series.map(
                                (data: { id: number; name: string }) => {
                                    return (
                                        <option key={data.id} value={data.id}>
                                            {data.name}
                                        </option>
                                    );
                                }
                            )}
                        </select>
                    </div>
                    <div>
                        <button>Send</button>
                    </div>
                </form>
            </div>
        </Authenticated>
    );
};

export default Subscribe;
