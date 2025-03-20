"use client";
import { useState } from "react";

export function Input() {
const [search, setSearch] = useState("");
const [answer, setAnswer] = useState("");

const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await fetch("/api/generate", {
        method: "POST",
        body: JSON.stringify({ prompt: search }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const data =  await response.json();
    setAnswer(data.result);
}
    
    return (
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Ask something..." onChange={(e) => setSearch(e.target.value)} />
        {answer && <p>{answer}</p>}
        </form>
    )
}