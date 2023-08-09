import React from 'react'
import style from '../../styles/blogLanding/blogLanding.module.css'
import Arrow from '../../assets/blog-landing/arrow.png'
import LatestBlog from './latestBlog/LatestBlog'
import RecomandedBlog from './recomandedBlog/RecomandedBlog'
import AllBlog from './allBlog/AllBlog'

export default function BlogLanding() {
    return (
        <>
            <div className={style.container}>
                <div>
                    <h1 className={style.blogTitle}>
                        Blog Section Title
                    </h1>
                </div>
            </div>

            <div className={style.filtersMain}>
                <div>
                    <label className={style.label}>Search</label>
                    <div className={style.inputContainer}>
                        <input className={style.input} placeholder='SEARCH' type='text' />
                        <img src={Arrow} alt="Arrow" />
                    </div>
                </div>
                <div>
                    <label className={style.label}>Filter by CATEGORIES</label>
                    <div className={style.inputContainer}>
                        <input className={style.input} placeholder='FILTER' type='text' />
                        <img src={Arrow} alt="Arrow" />
                    </div>
                </div>
                <div>
                    <label className={style.label}>GET THE LATEST UPDATES</label>
                    <div className={style.inputContainer}>
                        <input className={style.input} placeholder='EMAIL' type='text' />
                        <img src={Arrow} alt="Arrow" />
                    </div>
                </div>
            </div>
            <LatestBlog />
            <RecomandedBlog />
            <AllBlog />
        </>
    )
}
