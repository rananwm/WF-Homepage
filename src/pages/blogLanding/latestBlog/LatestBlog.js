import React from 'react'
import style from '../../../styles/blogLanding/latestBlog.module.css'

export default function LatestBlog() {

    return (
        <div className={style.container}>
            <h1 className={style.title}>
                The Latest
            </h1>
            <div className={style.sectionsCotainer}>
                <div className={style.leftSection}>
                    <div className={style.thumbnailContainer}>
                        Thumbnail Image
                    </div>
                    <div className={style.leftContent}>
                        <h1 className={style.leftTitle}>Blog Post Title is Inserted Here</h1>
                        <h3 className={style.leftDate}>Tuesday, March 18, 2009</h3>
                    </div>
                </div>
                <div className={style.rightSection}>
                    <div className={style.smallCard}>
                        <div className={style.rightThumbnailContainer}>
                            Thumbnail <br /> Image
                        </div>
                        <div className={style.rightContent}>
                            <h1 className={style.rightTitle}>Blog Post Title is Inserted Here</h1>
                            <h3 className={style.rightDate}>Tuesday, March 18, 2009</h3>
                        </div>
                    </div>
                    <div className={style.smallCard}>
                        <div className={style.rightThumbnailContainer}>
                            Thumbnail <br /> Image
                        </div>
                        <div className={style.rightContent}>
                            <h1 className={style.rightTitle}>Blog Post Title is Inserted Here</h1>
                            <h3 className={style.rightDate}>Tuesday, March 18, 2009</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.bottomCards}>
                <div className={style.cardBottom}>
                    <div>
                        <div className={style.rightThumbnailContainer}>
                            Thumbnail <br /> Image
                        </div>
                        <div className={style.rightContent}>
                            <h1 className={style.rightTitle}>Blog Post Title is Inserted Here</h1>
                            <h3 className={style.rightDate}>Tuesday, March 18, 2009</h3>
                        </div>
                    </div>
                </div>
                <div className={style.cardBottom}>
                    <div>
                        <div className={style.rightThumbnailContainer}>
                            Thumbnail <br /> Image
                        </div>
                        <div className={style.rightContent}>
                            <h1 className={style.rightTitle}>Blog Post Title is Inserted Here</h1>
                            <h3 className={style.rightDate}>Tuesday, March 18, 2009</h3>
                        </div>
                    </div>
                </div>
                <div className={style.cardBottom}>
                    <div>
                        <div className={style.rightThumbnailContainer}>
                            Thumbnail <br /> Image
                        </div>
                        <div className={style.rightContent}>
                            <h1 className={style.rightTitle}>Blog Post Title is Inserted Here</h1>
                            <h3 className={style.rightDate}>Tuesday, March 18, 2009</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
