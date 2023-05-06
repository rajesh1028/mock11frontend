import React, { useState } from "react";

function PostNotice() {
    const [authorName, setAuthorName] = useState('');
    const [noticeTitle, setNoticeTitle] = useState('');
    const [noticeDescription, setNoticeDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let name = authorName;
        let title = noticeTitle;
        let description = noticeDescription;

        fetch("https://mock11-xut1.onrender.com/", {
            method: "POST",
            body: JSON.stringify({ name, title, description }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                alert("Form submission successful:", data);
            })
            .catch((error) => {
                alert("Error submitting form:", error);
            });
    };

    return (
        <div id="post">
            <h2>Post Notice</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Author Name:
                    <input type="text" value={authorName} onChange={(event) => setAuthorName(event.target.value)} />
                </label>
                <label>
                    Notice Title:
                    <input type="text" value={noticeTitle} onChange={(event) => setNoticeTitle(event.target.value)} />
                </label>
                <label>
                    Notice Description:
                    <textarea value={noticeDescription} onChange={(event) => setNoticeDescription(event.target.value)} />
                </label>
                <button id="submit" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default PostNotice;


