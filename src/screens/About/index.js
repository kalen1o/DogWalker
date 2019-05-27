import React from 'react';
import classes from './About.module.css';


const About = () => {
    return <div className={classes.about}>

            <div className={classes.main}>
            <div className="about_us_page">
            
                <div className={classes.container}>
                    <div className={classes.row}>
                        <div className="rover-primary-col rover-single-col col-center col-sm-10 col-md-8">
                            <h1 className="text-contrast margin-x0">About The Dog People</h1>
                            <h4 className="about-us-subtitle text-contrast margin-x5">
                                Founded in 2011, Walker is the world's largest network of 5-star pet sitters and dog walkers.
        </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            <div className={classes.maintextcent}>
                            <p>Whether you need in-home dog boarding, pet sitting, dog walking, or day care, Walker connects pet parents with dog people who’ll treat their pets like family.</p>
                            <p>Walker sitters are your rainy-day-dog-walkers. Your every-day-belly-rubbers. Your tug-of-war players. Your middle-of-the-night-pee-breakers. Because we get it—your dog is family. And when you can’t be there, you can trust us to keep your dog happy, healthy, and sweet as ever.</p>
                            <p>But it’s not just about dog love. Walker is also an award-winning technology business committed to making pet care safe, easy, and affordable so that everyone can experience the unconditional love of a dog.</p>
                            <p>So for the frequent butt-sniffers, the sock-stealers, the table-side beggars and the clicker-trained champions: We’re your people.</p>
                            <p>And for the world travelers, the long-day-at-work-ers, the business-trip jetsetters, the swing-shift survivors: We’re your people, too.</p>
                            <p>Whatever you and your dog are into, we’re into it, too. And we’ve got your back. Anytime. Anywhere.</p>
                        </div>

            <div className="main_services">
                        <h3 className={classes.h3}>Millions of services booked. Thousands of wagging tails.</h3>
                            <div className={classes.services}>                               
                                <div className={classes.item_serv}>
                                    <div className="item_serv_stats">
                                        <div className="about-us-map-number text-primary h2 margin-x0">14,000+</div>
                                        <p>cities</p>
                                    </div>
                                </div>
                                <div className={classes.item_serv}>
                                    <div className="item_serv_stats">
                                        <div className="about-us-map-number text-primary h2 margin-x0">200,000+</div>
                                        <p>sitters</p>
                                    </div>
                                </div>
                                <div className={classes.item_serv}>
                                    <div className="item_serv_stats">
                                        <div className="about-us-map-number text-primary h2 margin-x0">95%</div>
                                        <p>5-star reviews</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className={classes.contentblock}>
                            <h3 className={classes.contenttextcenter}>5-Star Sitters in Your Neighborhood</h3>
                            <p className={classes.contenttextcenter}>
                                Discover local pet sitters and dog walkers, read reviews, and find the right fit for you. Walker offers:
                            </p>
                            <div className={classes.contentblockflex}>
                                <div className={classes.colsm6}>
                                    <ol className={classes.roverlist}>
                                        <li className="margin_v_x2"><span className={`fas fa-angle-right ${classes.span}`}>Background or identity checks</span></li>
                                        <li className="margin_v_x2"><span className={`fas fa-angle-right ${classes.span}`}>The Walker Guarantee</span></li>
                                        <li className="margin_v_x2"><span className={`fas fa-angle-right ${classes.span}`}>Reservation protection</span></li>
                                        <li className="margin_v_x2"><span className={`fas fa-angle-right ${classes.span}`}>24/7 support</span></li>
                                        <li className="margin_v_x2"><span className={`fas fa-angle-right ${classes.span}`}>Secure online payments</span></li>
                                    </ol>
                                </div>
                                <div className={classes.colsm6}>
                                    <ul className={classes.roverlist}>
                                        <li className="margin_v_x2"><span className={`fas fa-angle-right ${classes.span}`}>Ongoing sitter education</span></li>
                                        <li className="margin_v_x2"><span className={`fas fa-angle-right ${classes.span}`}>Photo updates</span></li>
                                        <li className="margin_v_x2"><span className={`fas fa-angle-right ${classes.span}`}>Verified reviews</span></li>
                                        <li className="margin_v_x2"><span className={`fas fa-angle-right ${classes.span}`}>Trust and safety experts</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className={classes.colxs12}>
                            <h3 className="text-center">Good dogs. Good people.</h3>
                            <p className="margin-v-x6">
                                Whether you need a dog walker for the day or dog boarding for a month, there's a Walker sitter who's the perfect match for you, your pets, and your lifestyle. Walker sitters offer:
                    </p>
                            <div className={classes.rowmarginvx6}>
                                <div className={classes.colsm66}>
                                    <ul className={classes.roverlist}>
                                        <li className={classes.marginCol}><a className={`fas fa-angle-right ${classes.a}`} href="http://localhost:3000/">Dog Boarding</a></li>
                                        <li className={classes.marginCol}><a className={`fas fa-angle-right ${classes.a}`} href="http://localhost:3000/">Pet Sitting</a></li>
                                        <li className={classes.marginCol}><a className={`fas fa-angle-right ${classes.a}`} href="http://localhost:3000/">Dog Walking</a></li>
                                    </ul>
                                </div>
                                <div className={classes.colsm66}>
                                    <ul className={classes.roverlist}>
                                        <li className={classes.marginCol}><a className={`fas fa-angle-right ${classes.a}`} href="http://localhost:3000/">Doggy Day Care</a></li>
                                        <li className={classes.marginCol}><a className={`fas fa-angle-right ${classes.a}`} href="http://localhost:3000/">Drop-In Visits</a></li>
                                        <li className={classes.marginCol}><a className={`fas fa-angle-right ${classes.a}`} href="http://localhost:3000/">House Sitting</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="btndiv">
                                <div className={classes.btnclick}>
                                    <a className={classes.roverbtn} href="/search/">Search Sitters</a>
                                </div>
                            </div>

                            <p className="margin-v-x6">
                                Dogwolker.com is a dog lover’s other best friend — second only, of course, to your dog. With exceptional customer support and the nation's largest community of pet sitters and dog walkers, Walker is the easiest way for pet parents to find and book loving and trustworthy neighborhood pet care. In fact, a service is booked on Walker every minute of every day.
                    </p>
                        </div>

        <div id="cont" className={classes.container1}>      
                        <div className={classes.leadership}>
                            <h3>Our Leadership</h3>
                            <div className={classes.textcentermarginvx6}>
                                
                                <div className={classes.colsm4colxs6}>
                                    <div className="aboutusteamtextcenter">
                                        <img className={classes.imgcircleimgavatar} src="images/walker/aaron-easterly.b2e3cb9010cf.jpg" alt="aaron-easterly" />
                                        <h4 className="margin-x1">Aaron Easterly</h4>
                                        <div className="text-uppercase text-muted small-text">Chief Executive Officer</div>
                                    </div>
                                </div>
                                <div className={classes.colsm4colxs6}>
                                    <div className="aboutusteamtextcenter">
                                        <img className={classes.imgcircleimgavatar} src="images/walker/greg-gottesman.3cd31ba4b35e.jpg" alt="greg-gottesman" />
                                        <h4 className="margin-x1">Greg Gottesman</h4>
                                        <div className="text-uppercase text-muted small-text">Founder &amp; Board Member</div>
                                    </div>
                                </div>
                                <div className={classes.colsm4colxs6}>
                                    <div className="aboutusteamtextcenter">
                                        <img className={classes.imgcircleimgavatar} src="images/walker/philip-kimmey.3b93cc885bbb.jpg" alt="philip-kimmey" />
                                        <h4 className="margin-x1">Philip Kimmey</h4>
                                        <div className="text-uppercase text-muted small-text">Co-Founder &amp; Director of Software Development</div>
                                    </div>
                                </div>
                                <div className={classes.colsm4colxs6}>
                                    <div className="aboutusteamtextcenter">
                                        <img className={classes.imgcircleimgavatar} src="images/walker/tracy-knox.83e82fa2f44f.jpg" alt="tracy-knox" />
                                        <h4 className="margin-x1">Tracy Knox</h4>
                                        <div className="text-uppercase text-muted small-text">Chief Financial Officer</div>
                                    </div>
                                </div>
                                <div className={classes.colsm4colxs6}>
                                    <div className="aboutusteamtextcenter">
                                        <img className={classes.imgcircleimgavatar} src="images/walker/jason-kreitzer.4d24aa4da903.jpg" alt="jason-kreitzer" />
                                        <h4 className="margin-x1">Jason Kreitzer</h4>
                                        <div className="text-uppercase text-muted small-text">Senior VP, Product Management and Marketplace</div>
                                    </div>
                                </div>
                                <div className={classes.colsm4colxs6}>
                                    <div className="aboutusteamtextcenter">
                                        <img className={classes.imgcircleimgavatar} src="images/walker/scott-porad.32d2bfa45e6c.jpg" alt="scott-porad" />
                                        <h4 className="margin-x1">Scott Porad</h4>
                                        <div className="text-uppercase text-muted small-text">Chief Technology Officer</div>
                                    </div>
                                </div>
                                <div className={classes.colsm4colxs6}>
                                    <div className="aboutusteamtextcenter">
                                        <img className={classes.imgcircleimgavatar} src="images/walker/brent-turner.708953c2e949.jpg" alt="brent-turner" />
                                        <h4 className="margin-x1">Brent Turner</h4>
                                        <div className="text-uppercase text-muted small-text">Chief Operating Officer</div>
                                    </div>
                                </div>
                                <div className={classes.colsm4colxs6}>
                                    <div className="aboutusteamtextcenter">
                                        <img className={classes.imgcircleimgavatar} src="images/walker/john-lapham.ea6dd313a0a0.jpg" alt="john-lapham" />
                                        <h4 className="margin-x1">John Lapham</h4>
                                        <div className="text-uppercase text-muted small-text">General Counsel</div>
                                    </div>
                                </div>
                                <div className={classes.colsm4colxs6}>
                                    <div className="aboutusteamtextcenter">
                                        <img className={classes.imgcircleimgavatar} src="images/walker/megan-teepe.3b1ea137fdaa.jpg" alt="megan-teepe" />
                                        <h4 className="margin-x1">Megan Teepe</h4>
                                        <div className="text-uppercase text-muted small-text">GM, International</div>
                                    </div>
                                </div>
                                <div className={classes.colsm4colxs6}>
                                    <div className="aboutusteamtextcenter">
                                        <img className={classes.imgcircleimgavatar} src="images/walker/paul-dixon.9e69c12971c8.jpg" alt="paul-dixon" />
                                        <h4 className="margin-x1">Paul Dixon</h4>
                                        <div className="text-uppercase text-muted small-text">VP &amp; GM, Walker Now</div>
                                    </div>
                                </div>
                                <div className={classes.colsm4colxs6}>
                                    <div className="aboutusteamtextcenter">
                                        <img className={classes.imgcircleimgavatar} src="images/walker/halle-hutchison.c321af97e399.jpg" alt="halle-hutchison" />
                                        <h4 className="margin-x1">Halle Hutchison</h4>
                                        <div className="text-uppercase text-muted small-text">VP, Marketing</div>
                                    </div>
                                </div>
                                <div className={classes.colsm4colxs6}>
                                    <div className="aboutusteamtextcenter">
                                        <img className={classes.imgcircleimgavatar} src="images/walker/heather-buser.27c204e324a3.jpg" alt="heather-buser" />
                                        <h4 className="margin-x1">Heather Buser</h4>
                                        <div className="text-uppercase text-muted small-text">VP, Accounting</div>
                                    </div>
                                </div>
                                <div className={classes.colsm4colxs6}>
                                    <div className="aboutusteamtextcenter">
                                        <img className={classes.imgcircleimgavatar} src="images/walker/derek-chang.bfdb695870da.jpg" alt="derek-chang" />
                                        <h4 className="margin-x1">Derek Chang</h4>
                                        <div className="text-uppercase text-muted small-text">VP, Operations</div>
                                    </div>
                                </div>
                                <div className={classes.colsm4colxs6}>
                                    <div className="aboutusteamtextcenter">
                                        <img className={classes.imgcircleimgavatar} src="images/walker/melissa-weiland.4086dc61de90.jpg" alt="melissa-weiland" />
                                        <h4 className="margin-x1">Melissa Weiland</h4>
                                        <div className="text-uppercase text-muted small-text">VP, Deputy General Counsel</div>
                                    </div>
                                </div>
                            </div>


                        </div>
        </div>

        <div className={classes.bgdark}>
            <div className="container">
                <div className="row">
                    <div className="rover-primary-col rover-single-col col-center col-md-8 col-sm-10">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className={classes.marginTB30px}>
                                    <h3>Starting a Dog-Sitting Business</h3>
                                    <p className="margin-v-x6">We empower dog lovers around the world to start their own small businesses using Walker's platform, and give them the tools to succeed.</p>
                                    <a className={classes.roverbtn} href="/become-a-sitter/">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={classes.container}>
            <div className="row">
                <div className="rover-primary-col rover-single-col col-center col-md-8 col-sm-10">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className={classes.marginTB30px}>
                                <h3>#WalkerLife</h3>
                                <p className="marginP">
                                    At Walker, every day revolves around dogs, and our office dogs are a key part of what makes coming to work so fun and rewarding. That's the #WalkerLife. Want to be a part of our pack? 
                                    
                                </p>
                                <a className={classes.roverbtn} href="/careers/?ref=about-us">Join our team.</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
}

export default About;