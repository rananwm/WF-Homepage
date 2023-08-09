import React from 'react'
import style from '../../styles/components/footer.module.css'
import Arrow from '../../assets/arrow.png'
import { Link } from 'react-router-dom';

export default function Footer() {

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <div className={style.container}>
      <div className={style.topBanner}>
        <h2 className={style.bannerText}>Ready to unlock your growth?</h2>
        <Link className={style.link} to="/contact">
          <div className={style.button}>
            Contact us
          </div>
        </Link>
      </div>

      <div className={style.headingContainer}>
        <h3 className={style.heading}>
          We take a custom approach <br />to your growth goals by<br /> assembling and leading the<br /> best-in-class marketing team<br /> to support your next stage
        </h3>
        <div className={style.contentRow}>
          <h5 className={style.rightText}>
            GET IN TOUCH
          </h5>
          <h5 className={style.mailText}>hello@winstonfrancois.com</h5>
          <h5 className={style.mailText}>
            (909) 999-9999
          </h5>

          <h5 className={`${style.rightText} ${style.topSpace}`}>
            NEWSLETTER
          </h5>
          <div className={style.mailContainer}>
            <h5 className={style.mailText}>
              HarryGoldenblatt@gmai
            </h5>
            <img src={Arrow} alt="Arrow" />
          </div>
          <div>
            <input className={style.input} placeholder='Enter your email address' type="text" />
          </div>
        </div>
      </div>
      <div className={style.bottom}>
        © {currentYear} Winston Francois, LLC. All rights reserved.
      </div>
    </div>
  )
}
