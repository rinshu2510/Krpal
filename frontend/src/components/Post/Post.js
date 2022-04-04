import React from 'react'
import "./Post.css"

import { MoonSVG, ThunderSVG, OptionSVG } from "../SVG"

export default function Post({ text, like, dislike, userId }) {
    return (
        <div className="Post__main">
            <div className="Post__topDiv">
                <div className="Post__id">
                    <p className="secular">{userId}</p>
                </div>
                <div className="Post__postText">
                    <p className="secular">{text}</p>
                </div>
            </div>

            <div className="Post__bottomDiv">
                <div className="Post__bottomItem">
                    <div className="Post__LikeDislike">
                        <p>{like}</p>
                        <div>
                            <MoonSVG />
                            <p>Moon</p>
                        </div>
                    </div>
                </div>
                <div className="Post__bottomItem">
                    <div className="Post__LikeDislike">
                        <p>{dislike}</p>
                        <div>
                            <ThunderSVG />
                            <p>Thunder</p>
                        </div>
                    </div>
                    <div className="Post__Option">
                        <OptionSVG />
                    </div>
                </div>
            </div>
        </div>
    )
}
