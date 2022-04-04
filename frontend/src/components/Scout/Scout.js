import React from 'react'
import "./Scout.css"

import Header from "../Header/Header.js"
import Post from "../Post/Post.js"

export default function Scout() {
    return (
        <>
            <Header />
            <div className="Scout__main">

                <div className="Scout__middleCont">

                    <div className="Scout__topBar">
                        <p>Top</p>
                        <p className="Scout__topBarActive">Growing</p>
                        <p>New</p>
                    </div>

                    <div className="Scout__Posts">
                        <Post
                            text="‘Elon Musk’s Neuralink accused of injuring, killing monkeys with brain implants’ - News just came in."
                            like={2}
                            dislike={0}
                            userId="@TopTechNews | 0x3cn631A0nDB1b78f78FE6..."
                        />
                        <Post
                            text="“Progress isn't made by early risers. It's made by lazy men trying to find easier ways to do something.”"
                            like={5}
                            dislike={0}
                            userId="@Motivation | 0xd635ca70563213c1a277c6..."
                        />
                        <Post
                            text="Badminton junior WR 1 Tasnim Mir (of Mehsana) wins Iran International Challenge, her first senior title! "
                            like={8}
                            dislike={0}
                            userId="@GujaratiCommunity | 0x43de9dc6ed4a533152vgv3..."
                        />
                        <Post
                            text={`Genshin Impact's "Kitsune's Leisurely Stroll Around Hanamizaka" Web Event has begun!`}
                            like={3}
                            dislike={3}
                            userId="@GenshinImpact | 0xd635562300249774041c1a277c6..."
                        />
                        <Post
                            text={`Genshin Impact's "Kitsune's Leisurely Stroll Around Hanamizaka" Web Event has begun!`}
                            like={3}
                            dislike={3}
                            userId="@GenshinImpact | 0xd635562300249774041c1a277c6..."
                        />
                        <Post
                            text={`Genshin Impact's "Kitsune's Leisurely Stroll Around Hanamizaka" Web Event has begun!`}
                            like={3}
                            dislike={3}
                            userId="@GenshinImpact | 0xd635562300249774041c1a277c6..."
                        />
                        <Post
                            text={`Genshin Impact's "Kitsune's Leisurely Stroll Around Hanamizaka" Web Event has begun!`}
                            like={3}
                            dislike={3}
                            userId="@GenshinImpact | 0xd635562300249774041c1a277c6..."
                        />
                        <Post
                            text={`Genshin Impact's "Kitsune's Leisurely Stroll Around Hanamizaka" Web Event has begun!`}
                            like={3}
                            dislike={3}
                            userId="@GenshinImpact | 0xd635562300249774041c1a277c6..."
                        />
                        <Post
                            text={`Genshin Impact's "Kitsune's Leisurely Stroll Around Hanamizaka" Web Event has begun!`}
                            like={3}
                            dislike={3}
                            userId="@GenshinImpact | 0xd635562300249774041c1a277c6..."
                        />
                    </div>

                </div>

            </div>
        </>
    )
}
