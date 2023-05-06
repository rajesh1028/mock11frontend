import React, { useEffect, useState } from 'react';

function ViewNotice() {
    const [notices, setNotices] = useState([]);

    useEffect(() => {
        fetch("https://mock11-xut1.onrender.com/")
            .then((response) => response.json())
            .then((data) => {
                setNotices(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [notices]);

    const handleEdit = (noticeId, i) => {
        let { name, title, description } = notices[i];
        fetch(`https://mock11-xut1.onrender.com/${noticeId}`, {
            method: "PATCH",
            body: JSON.stringify({ name, title, description }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                alert(data);
            })
            .catch((error) => {
                alert(error);
            });
    };

    const handleDelete = (noticeId) => {
        fetch(`https://mock11-xut1.onrender.com/${noticeId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                alert(data);
            })
            .catch((error) => {
                alert(error);
            });
    };


    return (
        <div id="view">
            <h2>View Notice</h2>
            {notices.map((notice, i) => (
                <div key={notice._id}>
                    <h3>{notice.title}</h3>
                    <p>Author: {notice.name}</p>
                    <p>Date: {notice.date}</p>
                    <p>{notice.description}</p>
                    <button onClick={() => handleEdit(notice._id, i)}>Edit</button>
                    <button onClick={() => handleDelete(notice._id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default ViewNotice;