import React from 'react'
import style from '../../../styles/blogLanding/allBlog.module.css'

export default function AllBlog() {

    const cardData = [
        {
            thumbnail: 'Thumbnail Image',
            cardTitle: 'Blog Post Title is Inserted Here',
            date: 'Tuesday, March 18, 2009'

        }, {
            thumbnail: 'Thumbnail Image',
            cardTitle: 'Blog Post Title is Inserted Here',
            date: 'Tuesday, March 18, 2009'

        }, {
            thumbnail: 'Thumbnail Image',
            cardTitle: 'Blog Post Title is Inserted Here',
            date: 'Tuesday, March 18, 2009'

        }, {
            thumbnail: 'Thumbnail Image',
            cardTitle: 'Blog Post Title is Inserted Here',
            date: 'Tuesday, March 18, 2009'

        }, {
            thumbnail: 'Thumbnail Image',
            cardTitle: 'Blog Post Title is Inserted Here',
            date: 'Tuesday, March 18, 2009'

        }, {
            thumbnail: 'Thumbnail Image',
            cardTitle: 'Blog Post Title is Inserted Here',
            date: 'Tuesday, March 18, 2009'

        },
        {
            thumbnail: 'Thumbnail Image',
            cardTitle: 'Blog Post Title is Inserted Here',
            date: 'Tuesday, March 18, 2009'

        }, {
            thumbnail: 'Thumbnail Image',
            cardTitle: 'Blog Post Title is Inserted Here',
            date: 'Tuesday, March 18, 2009'

        }, {
            thumbnail: 'Thumbnail Image',
            cardTitle: 'Blog Post Title is Inserted Here',
            date: 'Tuesday, March 18, 2009'

        }, {
            thumbnail: 'Thumbnail Image',
            cardTitle: 'Blog Post Title is Inserted Here',
            date: 'Tuesday, March 18, 2009'

        }, {
            thumbnail: 'Thumbnail Image',
            cardTitle: 'Blog Post Title is Inserted Here',
            date: 'Tuesday, March 18, 2009'

        }, {
            thumbnail: 'Thumbnail Image',
            cardTitle: 'Blog Post Title is Inserted Here',
            date: 'Tuesday, March 18, 2009'

        }, {
            thumbnail: 'Thumbnail Image',
            cardTitle: 'Blog Post Title is Inserted Here',
            date: 'Tuesday, March 18, 2009'

        }, {
            thumbnail: 'Thumbnail Image',
            cardTitle: 'Blog Post Title is Inserted Here',
            date: 'Tuesday, March 18, 2009'

        }, {
            thumbnail: 'Thumbnail Image',
            cardTitle: 'Blog Post Title is Inserted Here',
            date: 'Tuesday, March 18, 2009'

        },
    ]



    return (
        <div className={style.container}>
            <h1 className={style.title}>
                All articles
            </h1>
            <div className={style.cardsContainer}>
                {cardData.map((item, index) =>
                    <div key={index} className={style.card}>
                        <div>
                            <div className={style.cardThumbnailContainer}>
                                {item.thumbnail}
                            </div>
                            <div className={style.cardContent}>
                                <h1 className={style.cardTitle}>{item.cardTitle}</h1>
                                <h3 className={style.cardDate}>{item.date}</h3>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
