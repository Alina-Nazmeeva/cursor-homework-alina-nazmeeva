import React from 'react';
import './Post.css';

export default function Post(props){
    return (
        <div className="post">
            <div className="header">
                <div className="avatar" style={{backgroundImage: `url(${props.author.avatar})`}}></div>
                <div>
                    <p><strong>{props.author.name}</strong> <span>{props.author.nickname} {props.date}</span></p>
                    <p className="content">{props.content}</p>
                </div>
            </div>
            <div className="photo" style={{backgroundImage: `url(${props.photo})`}}></div>
        </div>
    )
}